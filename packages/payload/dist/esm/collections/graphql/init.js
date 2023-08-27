/* eslint-disable no-param-reassign */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import formatName from "../../graphql/utilities/formatName";
import buildPaginatedListType from "../../graphql/schema/buildPaginatedListType";
import buildMutationInputType, { getCollectionIDType } from "../../graphql/schema/buildMutationInputType";
import { buildVersionCollectionFields } from "../../versions/buildCollectionFields";
import createResolver from "./resolvers/create";
import updateResolver from "./resolvers/update";
import findResolver from "./resolvers/find";
import findByIDResolver from "./resolvers/findByID";
import findVersionByIDResolver from "./resolvers/findVersionByID";
import findVersionsResolver from "./resolvers/findVersions";
import restoreVersionResolver from "./resolvers/restoreVersion";
import me from "../../auth/graphql/resolvers/me";
import init from "../../auth/graphql/resolvers/init";
import login from "../../auth/graphql/resolvers/login";
import logout from "../../auth/graphql/resolvers/logout";
import forgotPassword from "../../auth/graphql/resolvers/forgotPassword";
import resetPassword from "../../auth/graphql/resolvers/resetPassword";
import verifyEmail from "../../auth/graphql/resolvers/verifyEmail";
import unlock from "../../auth/graphql/resolvers/unlock";
import refresh from "../../auth/graphql/resolvers/refresh";
import { fieldAffectsData } from "../../fields/config/types";
import buildObjectType from "../../graphql/schema/buildObjectType";
import buildWhereInputType from "../../graphql/schema/buildWhereInputType";
import getDeleteResolver from "./resolvers/delete";
import { formatNames, toWords } from "../../utilities/formatLabels";
import { buildPolicyType } from "../../graphql/schema/buildPoliciesType";
import { docAccessResolver } from "./resolvers/docAccess";
function initCollectionsGraphQL(payload) {
    Object.keys(payload.collections).forEach(function(slug) {
        var _versions;
        var collection = payload.collections[slug];
        var config = collection.config, _collection_config = collection.config, fields = _collection_config.fields, _collection_config_graphQL = _collection_config.graphQL, graphQL = _collection_config_graphQL === void 0 ? {} : _collection_config_graphQL, versions = _collection_config.versions;
        if (!graphQL) return;
        var singularName;
        var pluralName;
        var fromSlug = formatNames(collection.config.slug);
        if (graphQL.singularName) {
            singularName = toWords(graphQL.singularName, true);
        } else {
            singularName = fromSlug.singular;
        }
        if (graphQL.pluralName) {
            pluralName = toWords(graphQL.pluralName, true);
        } else {
            pluralName = fromSlug.plural;
        }
        // For collections named 'Media' or similar,
        // there is a possibility that the singular name
        // will equal the plural name. Append `all` to the beginning
        // of potential conflicts
        if (singularName === pluralName) {
            pluralName = "all".concat(singularName);
        }
        collection.graphQL = {};
        var idField = fields.find(function(field) {
            return fieldAffectsData(field) && field.name === "id";
        });
        var idType = getCollectionIDType(config);
        var baseFields = {};
        var whereInputFields = _to_consumable_array(fields);
        if (!idField) {
            baseFields.id = {
                type: idType
            };
            whereInputFields.push({
                name: "id",
                type: "text"
            });
        }
        var forceNullableObjectType = Boolean((_versions = versions) === null || _versions === void 0 ? void 0 : _versions.drafts);
        collection.graphQL.type = buildObjectType({
            payload: payload,
            name: singularName,
            parentName: singularName,
            fields: fields,
            baseFields: baseFields,
            forceNullable: forceNullableObjectType
        });
        collection.graphQL.paginatedType = buildPaginatedListType(pluralName, collection.graphQL.type);
        collection.graphQL.whereInputType = buildWhereInputType(singularName, whereInputFields, singularName);
        if (config.auth && !config.auth.disableLocalStrategy) {
            fields.push({
                name: "password",
                label: "Password",
                type: "text",
                required: true
            });
        }
        collection.graphQL.mutationInputType = new GraphQLNonNull(buildMutationInputType(payload, singularName, fields, singularName));
        collection.graphQL.updateMutationInputType = new GraphQLNonNull(buildMutationInputType(payload, "".concat(singularName, "Update"), fields.filter(function(field) {
            return !(fieldAffectsData(field) && field.name === "id");
        }), "".concat(singularName, "Update"), true));
        payload.Query.fields[singularName] = {
            type: collection.graphQL.type,
            args: _object_spread({
                id: {
                    type: new GraphQLNonNull(idType)
                },
                draft: {
                    type: GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                },
                fallbackLocale: {
                    type: payload.types.fallbackLocaleInputType
                }
            } : {}),
            resolve: findByIDResolver(collection)
        };
        payload.Query.fields[pluralName] = {
            type: buildPaginatedListType(pluralName, collection.graphQL.type),
            args: _object_spread_props(_object_spread({
                where: {
                    type: collection.graphQL.whereInputType
                },
                draft: {
                    type: GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                },
                fallbackLocale: {
                    type: payload.types.fallbackLocaleInputType
                }
            } : {}), {
                page: {
                    type: GraphQLInt
                },
                limit: {
                    type: GraphQLInt
                },
                sort: {
                    type: GraphQLString
                }
            }),
            resolve: findResolver(collection)
        };
        payload.Query.fields["docAccess".concat(singularName)] = {
            type: buildPolicyType({
                typeSuffix: "DocAccess",
                entity: config,
                type: "collection",
                scope: "docAccess"
            }),
            args: {
                id: {
                    type: new GraphQLNonNull(idType)
                }
            },
            resolve: docAccessResolver()
        };
        payload.Mutation.fields["create".concat(singularName)] = {
            type: collection.graphQL.type,
            args: _object_spread({
                data: {
                    type: collection.graphQL.mutationInputType
                },
                draft: {
                    type: GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                }
            } : {}),
            resolve: createResolver(collection)
        };
        payload.Mutation.fields["update".concat(singularName)] = {
            type: collection.graphQL.type,
            args: _object_spread({
                id: {
                    type: new GraphQLNonNull(idType)
                },
                data: {
                    type: collection.graphQL.updateMutationInputType
                },
                draft: {
                    type: GraphQLBoolean
                },
                autosave: {
                    type: GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                }
            } : {}),
            resolve: updateResolver(collection)
        };
        payload.Mutation.fields["delete".concat(singularName)] = {
            type: collection.graphQL.type,
            args: {
                id: {
                    type: new GraphQLNonNull(idType)
                }
            },
            resolve: getDeleteResolver(collection)
        };
        if (config.versions) {
            var versionCollectionFields = _to_consumable_array(buildVersionCollectionFields(config)).concat([
                {
                    name: "id",
                    type: "text"
                },
                {
                    name: "createdAt",
                    label: "Created At",
                    type: "date"
                },
                {
                    name: "updatedAt",
                    label: "Updated At",
                    type: "date"
                }
            ]);
            collection.graphQL.versionType = buildObjectType({
                payload: payload,
                name: "".concat(singularName, "Version"),
                fields: versionCollectionFields,
                parentName: "".concat(singularName, "Version"),
                forceNullable: forceNullableObjectType
            });
            payload.Query.fields["version".concat(formatName(singularName))] = {
                type: collection.graphQL.versionType,
                args: _object_spread({
                    id: {
                        type: GraphQLString
                    }
                }, payload.config.localization ? {
                    locale: {
                        type: payload.types.localeInputType
                    },
                    fallbackLocale: {
                        type: payload.types.fallbackLocaleInputType
                    }
                } : {}),
                resolve: findVersionByIDResolver(collection)
            };
            payload.Query.fields["versions".concat(pluralName)] = {
                type: buildPaginatedListType("versions".concat(formatName(pluralName)), collection.graphQL.versionType),
                args: _object_spread_props(_object_spread({
                    where: {
                        type: buildWhereInputType("versions".concat(singularName), versionCollectionFields, "versions".concat(singularName))
                    }
                }, payload.config.localization ? {
                    locale: {
                        type: payload.types.localeInputType
                    },
                    fallbackLocale: {
                        type: payload.types.fallbackLocaleInputType
                    }
                } : {}), {
                    page: {
                        type: GraphQLInt
                    },
                    limit: {
                        type: GraphQLInt
                    },
                    sort: {
                        type: GraphQLString
                    }
                }),
                resolve: findVersionsResolver(collection)
            };
            payload.Mutation.fields["restoreVersion".concat(formatName(singularName))] = {
                type: collection.graphQL.type,
                args: {
                    id: {
                        type: GraphQLString
                    }
                },
                resolve: restoreVersionResolver(collection)
            };
        }
        if (config.auth) {
            var authFields = config.auth.disableLocalStrategy ? [] : [
                {
                    name: "email",
                    type: "email",
                    required: true
                }
            ];
            collection.graphQL.JWT = buildObjectType({
                payload: payload,
                name: formatName("".concat(slug, "JWT")),
                fields: _to_consumable_array(config.fields.filter(function(field) {
                    return fieldAffectsData(field) && field.saveToJWT;
                })).concat(_to_consumable_array(authFields), [
                    {
                        name: "collection",
                        type: "text",
                        required: true
                    }
                ]),
                parentName: formatName("".concat(slug, "JWT"))
            });
            payload.Query.fields["me".concat(singularName)] = {
                type: new GraphQLObjectType({
                    name: formatName("".concat(slug, "Me")),
                    fields: {
                        token: {
                            type: GraphQLString
                        },
                        user: {
                            type: collection.graphQL.type
                        },
                        exp: {
                            type: GraphQLInt
                        },
                        collection: {
                            type: GraphQLString
                        }
                    }
                }),
                resolve: me(collection)
            };
            payload.Query.fields["initialized".concat(singularName)] = {
                type: GraphQLBoolean,
                resolve: init(collection.config.slug)
            };
            payload.Mutation.fields["refreshToken".concat(singularName)] = {
                type: new GraphQLObjectType({
                    name: formatName("".concat(slug, "Refreshed").concat(singularName)),
                    fields: {
                        user: {
                            type: collection.graphQL.JWT
                        },
                        refreshedToken: {
                            type: GraphQLString
                        },
                        exp: {
                            type: GraphQLInt
                        }
                    }
                }),
                args: {
                    token: {
                        type: GraphQLString
                    }
                },
                resolve: refresh(collection)
            };
            payload.Mutation.fields["logout".concat(singularName)] = {
                type: GraphQLString,
                resolve: logout(collection)
            };
            if (!config.auth.disableLocalStrategy) {
                if (config.auth.maxLoginAttempts > 0) {
                    payload.Mutation.fields["unlock".concat(singularName)] = {
                        type: new GraphQLNonNull(GraphQLBoolean),
                        args: {
                            email: {
                                type: new GraphQLNonNull(GraphQLString)
                            }
                        },
                        resolve: unlock(collection)
                    };
                }
                payload.Mutation.fields["login".concat(singularName)] = {
                    type: new GraphQLObjectType({
                        name: formatName("".concat(slug, "LoginResult")),
                        fields: {
                            token: {
                                type: GraphQLString
                            },
                            user: {
                                type: collection.graphQL.type
                            },
                            exp: {
                                type: GraphQLInt
                            }
                        }
                    }),
                    args: {
                        email: {
                            type: GraphQLString
                        },
                        password: {
                            type: GraphQLString
                        }
                    },
                    resolve: login(collection)
                };
                payload.Mutation.fields["forgotPassword".concat(singularName)] = {
                    type: new GraphQLNonNull(GraphQLBoolean),
                    args: {
                        email: {
                            type: new GraphQLNonNull(GraphQLString)
                        },
                        disableEmail: {
                            type: GraphQLBoolean
                        },
                        expiration: {
                            type: GraphQLInt
                        }
                    },
                    resolve: forgotPassword(collection)
                };
                payload.Mutation.fields["resetPassword".concat(singularName)] = {
                    type: new GraphQLObjectType({
                        name: formatName("".concat(slug, "ResetPassword")),
                        fields: {
                            token: {
                                type: GraphQLString
                            },
                            user: {
                                type: collection.graphQL.type
                            }
                        }
                    }),
                    args: {
                        token: {
                            type: GraphQLString
                        },
                        password: {
                            type: GraphQLString
                        }
                    },
                    resolve: resetPassword(collection)
                };
                payload.Mutation.fields["verifyEmail".concat(singularName)] = {
                    type: GraphQLBoolean,
                    args: {
                        token: {
                            type: GraphQLString
                        }
                    },
                    resolve: verifyEmail(collection)
                };
            }
        }
    });
}
export default initCollectionsGraphQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL2luaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMSW50LCBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcgfSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IGZvcm1hdE5hbWUgZnJvbSAnLi4vLi4vZ3JhcGhxbC91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5pbXBvcnQgYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZFBhZ2luYXRlZExpc3RUeXBlJztcbmltcG9ydCBidWlsZE11dGF0aW9uSW5wdXRUeXBlLCB7IGdldENvbGxlY3Rpb25JRFR5cGUgfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZE11dGF0aW9uSW5wdXRUeXBlJztcbmltcG9ydCB7IGJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9idWlsZENvbGxlY3Rpb25GaWVsZHMnO1xuaW1wb3J0IGNyZWF0ZVJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2NyZWF0ZSc7XG5pbXBvcnQgdXBkYXRlUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvdXBkYXRlJztcbmltcG9ydCBmaW5kUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZmluZCc7XG5pbXBvcnQgZmluZEJ5SURSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9maW5kQnlJRCc7XG5pbXBvcnQgZmluZFZlcnNpb25CeUlEUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCBmaW5kVmVyc2lvbnNSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9maW5kVmVyc2lvbnMnO1xuaW1wb3J0IHJlc3RvcmVWZXJzaW9uUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvcmVzdG9yZVZlcnNpb24nO1xuaW1wb3J0IG1lIGZyb20gJy4uLy4uL2F1dGgvZ3JhcGhxbC9yZXNvbHZlcnMvbWUnO1xuaW1wb3J0IGluaXQgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9pbml0JztcbmltcG9ydCBsb2dpbiBmcm9tICcuLi8uLi9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2xvZ2luJztcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9sb2dvdXQnO1xuaW1wb3J0IGZvcmdvdFBhc3N3b3JkIGZyb20gJy4uLy4uL2F1dGgvZ3JhcGhxbC9yZXNvbHZlcnMvZm9yZ290UGFzc3dvcmQnO1xuaW1wb3J0IHJlc2V0UGFzc3dvcmQgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9yZXNldFBhc3N3b3JkJztcbmltcG9ydCB2ZXJpZnlFbWFpbCBmcm9tICcuLi8uLi9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3ZlcmlmeUVtYWlsJztcbmltcG9ydCB1bmxvY2sgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy91bmxvY2snO1xuaW1wb3J0IHJlZnJlc2ggZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9yZWZyZXNoJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi9wYXlsb2FkJztcbmltcG9ydCB7IEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgYnVpbGRPYmplY3RUeXBlLCB7IE9iamVjdFR5cGVDb25maWcgfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZE9iamVjdFR5cGUnO1xuaW1wb3J0IGJ1aWxkV2hlcmVJbnB1dFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRXaGVyZUlucHV0VHlwZSc7XG5pbXBvcnQgZ2V0RGVsZXRlUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZGVsZXRlJztcbmltcG9ydCB7IGZvcm1hdE5hbWVzLCB0b1dvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdExhYmVscyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGJ1aWxkUG9saWN5VHlwZSB9IGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hL2J1aWxkUG9saWNpZXNUeXBlJztcbmltcG9ydCB7IGRvY0FjY2Vzc1Jlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcnMvZG9jQWNjZXNzJztcblxuZnVuY3Rpb24gaW5pdENvbGxlY3Rpb25zR3JhcGhRTChwYXlsb2FkOiBQYXlsb2FkKTogdm9pZCB7XG4gIE9iamVjdC5rZXlzKHBheWxvYWQuY29sbGVjdGlvbnMpLmZvckVhY2goKHNsdWcpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tzbHVnXTtcbiAgICBjb25zdCB7XG4gICAgICBjb25maWcsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBncmFwaFFMID0ge30gYXMgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1snZ3JhcGhRTCddLFxuICAgICAgICB2ZXJzaW9ucyxcbiAgICAgIH0sXG4gICAgfSA9IGNvbGxlY3Rpb247XG5cbiAgICBpZiAoIWdyYXBoUUwpIHJldHVybjtcblxuICAgIGxldCBzaW5ndWxhck5hbWU7XG4gICAgbGV0IHBsdXJhbE5hbWU7XG4gICAgY29uc3QgZnJvbVNsdWcgPSBmb3JtYXROYW1lcyhjb2xsZWN0aW9uLmNvbmZpZy5zbHVnKTtcbiAgICBpZiAoZ3JhcGhRTC5zaW5ndWxhck5hbWUpIHtcbiAgICAgIHNpbmd1bGFyTmFtZSA9IHRvV29yZHMoZ3JhcGhRTC5zaW5ndWxhck5hbWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaW5ndWxhck5hbWUgPSBmcm9tU2x1Zy5zaW5ndWxhcjtcbiAgICB9XG4gICAgaWYgKGdyYXBoUUwucGx1cmFsTmFtZSkge1xuICAgICAgcGx1cmFsTmFtZSA9IHRvV29yZHMoZ3JhcGhRTC5wbHVyYWxOYW1lLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGx1cmFsTmFtZSA9IGZyb21TbHVnLnBsdXJhbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgY29sbGVjdGlvbnMgbmFtZWQgJ01lZGlhJyBvciBzaW1pbGFyLFxuICAgIC8vIHRoZXJlIGlzIGEgcG9zc2liaWxpdHkgdGhhdCB0aGUgc2luZ3VsYXIgbmFtZVxuICAgIC8vIHdpbGwgZXF1YWwgdGhlIHBsdXJhbCBuYW1lLiBBcHBlbmQgYGFsbGAgdG8gdGhlIGJlZ2lubmluZ1xuICAgIC8vIG9mIHBvdGVudGlhbCBjb25mbGljdHNcbiAgICBpZiAoc2luZ3VsYXJOYW1lID09PSBwbHVyYWxOYW1lKSB7XG4gICAgICBwbHVyYWxOYW1lID0gYGFsbCR7c2luZ3VsYXJOYW1lfWA7XG4gICAgfVxuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMID0ge30gYXMgQ29sbGVjdGlvblsnZ3JhcGhRTCddO1xuXG4gICAgY29uc3QgaWRGaWVsZCA9IGZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gJ2lkJyk7XG4gICAgY29uc3QgaWRUeXBlID0gZ2V0Q29sbGVjdGlvbklEVHlwZShjb25maWcpO1xuXG4gICAgY29uc3QgYmFzZUZpZWxkczogT2JqZWN0VHlwZUNvbmZpZyA9IHt9O1xuXG4gICAgY29uc3Qgd2hlcmVJbnB1dEZpZWxkcyA9IFtcbiAgICAgIC4uLmZpZWxkcyxcbiAgICBdO1xuXG4gICAgaWYgKCFpZEZpZWxkKSB7XG4gICAgICBiYXNlRmllbGRzLmlkID0geyB0eXBlOiBpZFR5cGUgfTtcbiAgICAgIHdoZXJlSW5wdXRGaWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcmNlTnVsbGFibGVPYmplY3RUeXBlID0gQm9vbGVhbih2ZXJzaW9ucz8uZHJhZnRzKTtcblxuICAgIGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgIHBheWxvYWQsXG4gICAgICBuYW1lOiBzaW5ndWxhck5hbWUsXG4gICAgICBwYXJlbnROYW1lOiBzaW5ndWxhck5hbWUsXG4gICAgICBmaWVsZHMsXG4gICAgICBiYXNlRmllbGRzLFxuICAgICAgZm9yY2VOdWxsYWJsZTogZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUsXG4gICAgfSk7XG5cbiAgICBjb2xsZWN0aW9uLmdyYXBoUUwucGFnaW5hdGVkVHlwZSA9IGJ1aWxkUGFnaW5hdGVkTGlzdFR5cGUoXG4gICAgICBwbHVyYWxOYW1lLFxuICAgICAgY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgKTtcblxuICAgIGNvbGxlY3Rpb24uZ3JhcGhRTC53aGVyZUlucHV0VHlwZSA9IGJ1aWxkV2hlcmVJbnB1dFR5cGUoXG4gICAgICBzaW5ndWxhck5hbWUsXG4gICAgICB3aGVyZUlucHV0RmllbGRzLFxuICAgICAgc2luZ3VsYXJOYW1lLFxuICAgICk7XG5cbiAgICBpZiAoY29uZmlnLmF1dGggJiYgIWNvbmZpZy5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICBmaWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdwYXNzd29yZCcsXG4gICAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMLm11dGF0aW9uSW5wdXRUeXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUoXG4gICAgICBwYXlsb2FkLFxuICAgICAgc2luZ3VsYXJOYW1lLFxuICAgICAgZmllbGRzLFxuICAgICAgc2luZ3VsYXJOYW1lLFxuICAgICkpO1xuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMLnVwZGF0ZU11dGF0aW9uSW5wdXRUeXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUoXG4gICAgICBwYXlsb2FkLFxuICAgICAgYCR7c2luZ3VsYXJOYW1lfVVwZGF0ZWAsXG4gICAgICBmaWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gIShmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKSksXG4gICAgICBgJHtzaW5ndWxhck5hbWV9VXBkYXRlYCxcbiAgICAgIHRydWUsXG4gICAgKSk7XG5cbiAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tzaW5ndWxhck5hbWVdID0ge1xuICAgICAgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChpZFR5cGUpIH0sXG4gICAgICAgIGRyYWZ0OiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgIC4uLihwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24gPyB7XG4gICAgICAgICAgbG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMubG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICB9IDoge30pLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IGZpbmRCeUlEUmVzb2x2ZXIoY29sbGVjdGlvbiksXG4gICAgfTtcblxuICAgIHBheWxvYWQuUXVlcnkuZmllbGRzW3BsdXJhbE5hbWVdID0ge1xuICAgICAgdHlwZTogYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZShwbHVyYWxOYW1lLCBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSksXG4gICAgICBhcmdzOiB7XG4gICAgICAgIHdoZXJlOiB7IHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC53aGVyZUlucHV0VHlwZSB9LFxuICAgICAgICBkcmFmdDogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8ge1xuICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgIGZhbGxiYWNrTG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMuZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgcGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgICAgIGxpbWl0OiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgc29ydDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZTogZmluZFJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgIH07XG5cbiAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgZG9jQWNjZXNzJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICB0eXBlOiBidWlsZFBvbGljeVR5cGUoe1xuICAgICAgICB0eXBlU3VmZml4OiAnRG9jQWNjZXNzJyxcbiAgICAgICAgZW50aXR5OiBjb25maWcsXG4gICAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgc2NvcGU6ICdkb2NBY2Nlc3MnLFxuICAgICAgfSksXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChpZFR5cGUpIH0sXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZTogZG9jQWNjZXNzUmVzb2x2ZXIoKSxcbiAgICB9O1xuXG4gICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYGNyZWF0ZSR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGRhdGE6IHsgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLm11dGF0aW9uSW5wdXRUeXBlIH0sXG4gICAgICAgIGRyYWZ0OiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgIC4uLihwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24gPyB7XG4gICAgICAgICAgbG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMubG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgIH0gOiB7fSksXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZTogY3JlYXRlUmVzb2x2ZXIoY29sbGVjdGlvbiksXG4gICAgfTtcblxuICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2B1cGRhdGUke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgIHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlLFxuICAgICAgYXJnczoge1xuICAgICAgICBpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoaWRUeXBlKSB9LFxuICAgICAgICBkYXRhOiB7IHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC51cGRhdGVNdXRhdGlvbklucHV0VHlwZSB9LFxuICAgICAgICBkcmFmdDogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICBhdXRvc2F2ZTogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8ge1xuICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICB9IDoge30pLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IHVwZGF0ZVJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgIH07XG5cbiAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgZGVsZXRlJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgaWQ6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKGlkVHlwZSkgfSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiBnZXREZWxldGVSZXNvbHZlcihjb2xsZWN0aW9uKSxcbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy52ZXJzaW9ucykge1xuICAgICAgY29uc3QgdmVyc2lvbkNvbGxlY3Rpb25GaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIC4uLmJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgbGFiZWw6ICdDcmVhdGVkIEF0JyxcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgICAgICBsYWJlbDogJ1VwZGF0ZWQgQXQnLFxuICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgfSxcbiAgICAgIF07XG5cbiAgICAgIGNvbGxlY3Rpb24uZ3JhcGhRTC52ZXJzaW9uVHlwZSA9IGJ1aWxkT2JqZWN0VHlwZSh7XG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIG5hbWU6IGAke3Npbmd1bGFyTmFtZX1WZXJzaW9uYCxcbiAgICAgICAgZmllbGRzOiB2ZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyxcbiAgICAgICAgcGFyZW50TmFtZTogYCR7c2luZ3VsYXJOYW1lfVZlcnNpb25gLFxuICAgICAgICBmb3JjZU51bGxhYmxlOiBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSxcbiAgICAgIH0pO1xuXG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgdmVyc2lvbiR7Zm9ybWF0TmFtZShzaW5ndWxhck5hbWUpfWBdID0ge1xuICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudmVyc2lvblR5cGUsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiA/IHtcbiAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgICAgfTtcbiAgICAgIHBheWxvYWQuUXVlcnkuZmllbGRzW2B2ZXJzaW9ucyR7cGx1cmFsTmFtZX1gXSA9IHtcbiAgICAgICAgdHlwZTogYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZShgdmVyc2lvbnMke2Zvcm1hdE5hbWUocGx1cmFsTmFtZSl9YCwgY29sbGVjdGlvbi5ncmFwaFFMLnZlcnNpb25UeXBlKSxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB0eXBlOiBidWlsZFdoZXJlSW5wdXRUeXBlKFxuICAgICAgICAgICAgICBgdmVyc2lvbnMke3Npbmd1bGFyTmFtZX1gLFxuICAgICAgICAgICAgICB2ZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyxcbiAgICAgICAgICAgICAgYHZlcnNpb25zJHtzaW5ndWxhck5hbWV9YCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8ge1xuICAgICAgICAgICAgbG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMubG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgICBmYWxsYmFja0xvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgICBwYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICBsaW1pdDogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgICAgICAgc29ydDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZpbmRWZXJzaW9uc1Jlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgICAgfTtcbiAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2ByZXN0b3JlVmVyc2lvbiR7Zm9ybWF0TmFtZShzaW5ndWxhck5hbWUpfWBdID0ge1xuICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIGlkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZTogcmVzdG9yZVZlcnNpb25SZXNvbHZlcihjb2xsZWN0aW9uKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICBjb25zdCBhdXRoRmllbGRzOiBGaWVsZFtdID0gY29uZmlnLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kgPyBbXSA6IFt7XG4gICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfV07XG4gICAgICBjb2xsZWN0aW9uLmdyYXBoUUwuSldUID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgbmFtZTogZm9ybWF0TmFtZShgJHtzbHVnfUpXVGApLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAuLi5jb25maWcuZmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLnNhdmVUb0pXVCksXG4gICAgICAgICAgLi4uYXV0aEZpZWxkcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJlbnROYW1lOiBmb3JtYXROYW1lKGAke3NsdWd9SldUYCksXG4gICAgICB9KTtcblxuICAgICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbYG1lJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgICAgbmFtZTogZm9ybWF0TmFtZShgJHtzbHVnfU1lYCksXG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxJbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sbGVjdGlvbjoge1xuICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgcmVzb2x2ZTogbWUoY29sbGVjdGlvbiksXG4gICAgICB9O1xuXG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgaW5pdGlhbGl6ZWQke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTEJvb2xlYW4sXG4gICAgICAgIHJlc29sdmU6IGluaXQoY29sbGVjdGlvbi5jb25maWcuc2x1ZyksXG4gICAgICB9O1xuXG4gICAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgcmVmcmVzaFRva2VuJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgICAgbmFtZTogZm9ybWF0TmFtZShgJHtzbHVnfVJlZnJlc2hlZCR7c2luZ3VsYXJOYW1lfWApLFxuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwuSldULFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZnJlc2hlZFRva2VuOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxJbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgdG9rZW46IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiByZWZyZXNoKGNvbGxlY3Rpb24pLFxuICAgICAgfTtcblxuICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYGxvZ291dCR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICByZXNvbHZlOiBsb2dvdXQoY29sbGVjdGlvbiksXG4gICAgICB9O1xuXG4gICAgICBpZiAoIWNvbmZpZy5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICAgIGlmIChjb25maWcuYXV0aC5tYXhMb2dpbkF0dGVtcHRzID4gMCkge1xuICAgICAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2B1bmxvY2ske3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMQm9vbGVhbiksXG4gICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgIGVtYWlsOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc29sdmU6IHVubG9jayhjb2xsZWN0aW9uKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYGxvZ2luJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IGZvcm1hdE5hbWUoYCR7c2x1Z31Mb2dpblJlc3VsdGApLFxuICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHA6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMSW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICBlbWFpbDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgICBwYXNzd29yZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNvbHZlOiBsb2dpbihjb2xsZWN0aW9uKSxcbiAgICAgICAgfTtcblxuICAgICAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgZm9yZ290UGFzc3dvcmQke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEJvb2xlYW4pLFxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIGVtYWlsOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICAgICAgZGlzYWJsZUVtYWlsOiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgICAgICBleHBpcmF0aW9uOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc29sdmU6IGZvcmdvdFBhc3N3b3JkKGNvbGxlY3Rpb24pLFxuICAgICAgICB9O1xuXG4gICAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2ByZXNldFBhc3N3b3JkJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IGZvcm1hdE5hbWUoYCR7c2x1Z31SZXNldFBhc3N3b3JkYCksXG4gICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgdG9rZW46IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICAgICAgICB1c2VyOiB7IHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIHRva2VuOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc29sdmU6IHJlc2V0UGFzc3dvcmQoY29sbGVjdGlvbiksXG4gICAgICAgIH07XG5cbiAgICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYHZlcmlmeUVtYWlsJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgICAgdHlwZTogR3JhcGhRTEJvb2xlYW4sXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdG9rZW46IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzb2x2ZTogdmVyaWZ5RW1haWwoY29sbGVjdGlvbiksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdENvbGxlY3Rpb25zR3JhcGhRTDtcbiJdLCJuYW1lcyI6WyJHcmFwaFFMQm9vbGVhbiIsIkdyYXBoUUxJbnQiLCJHcmFwaFFMTm9uTnVsbCIsIkdyYXBoUUxPYmplY3RUeXBlIiwiR3JhcGhRTFN0cmluZyIsImZvcm1hdE5hbWUiLCJidWlsZFBhZ2luYXRlZExpc3RUeXBlIiwiYnVpbGRNdXRhdGlvbklucHV0VHlwZSIsImdldENvbGxlY3Rpb25JRFR5cGUiLCJidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwiY3JlYXRlUmVzb2x2ZXIiLCJ1cGRhdGVSZXNvbHZlciIsImZpbmRSZXNvbHZlciIsImZpbmRCeUlEUmVzb2x2ZXIiLCJmaW5kVmVyc2lvbkJ5SURSZXNvbHZlciIsImZpbmRWZXJzaW9uc1Jlc29sdmVyIiwicmVzdG9yZVZlcnNpb25SZXNvbHZlciIsIm1lIiwiaW5pdCIsImxvZ2luIiwibG9nb3V0IiwiZm9yZ290UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwidmVyaWZ5RW1haWwiLCJ1bmxvY2siLCJyZWZyZXNoIiwiZmllbGRBZmZlY3RzRGF0YSIsImJ1aWxkT2JqZWN0VHlwZSIsImJ1aWxkV2hlcmVJbnB1dFR5cGUiLCJnZXREZWxldGVSZXNvbHZlciIsImZvcm1hdE5hbWVzIiwidG9Xb3JkcyIsImJ1aWxkUG9saWN5VHlwZSIsImRvY0FjY2Vzc1Jlc29sdmVyIiwiaW5pdENvbGxlY3Rpb25zR3JhcGhRTCIsInBheWxvYWQiLCJPYmplY3QiLCJrZXlzIiwiY29sbGVjdGlvbnMiLCJmb3JFYWNoIiwic2x1ZyIsInZlcnNpb25zIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsImZpZWxkcyIsImdyYXBoUUwiLCJzaW5ndWxhck5hbWUiLCJwbHVyYWxOYW1lIiwiZnJvbVNsdWciLCJzaW5ndWxhciIsInBsdXJhbCIsImlkRmllbGQiLCJmaW5kIiwiZmllbGQiLCJuYW1lIiwiaWRUeXBlIiwiYmFzZUZpZWxkcyIsIndoZXJlSW5wdXRGaWVsZHMiLCJpZCIsInR5cGUiLCJwdXNoIiwiZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUiLCJCb29sZWFuIiwiZHJhZnRzIiwicGFyZW50TmFtZSIsImZvcmNlTnVsbGFibGUiLCJwYWdpbmF0ZWRUeXBlIiwid2hlcmVJbnB1dFR5cGUiLCJhdXRoIiwiZGlzYWJsZUxvY2FsU3RyYXRlZ3kiLCJsYWJlbCIsInJlcXVpcmVkIiwibXV0YXRpb25JbnB1dFR5cGUiLCJ1cGRhdGVNdXRhdGlvbklucHV0VHlwZSIsImZpbHRlciIsIlF1ZXJ5IiwiYXJncyIsImRyYWZ0IiwibG9jYWxpemF0aW9uIiwibG9jYWxlIiwidHlwZXMiLCJsb2NhbGVJbnB1dFR5cGUiLCJmYWxsYmFja0xvY2FsZSIsImZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIiwicmVzb2x2ZSIsIndoZXJlIiwicGFnZSIsImxpbWl0Iiwic29ydCIsInR5cGVTdWZmaXgiLCJlbnRpdHkiLCJzY29wZSIsIk11dGF0aW9uIiwiZGF0YSIsImF1dG9zYXZlIiwidmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMiLCJ2ZXJzaW9uVHlwZSIsImF1dGhGaWVsZHMiLCJKV1QiLCJzYXZlVG9KV1QiLCJ0b2tlbiIsInVzZXIiLCJleHAiLCJyZWZyZXNoZWRUb2tlbiIsIm1heExvZ2luQXR0ZW1wdHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiZGlzYWJsZUVtYWlsIiwiZXhwaXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNwQyxTQUFTQSxjQUFjLEVBQUVDLFVBQVUsRUFBRUMsY0FBYyxFQUFFQyxpQkFBaUIsRUFBRUMsYUFBYSxRQUFRLFVBQVU7QUFFdkcsT0FBT0MsZ0JBQWdCLHFDQUFxQztBQUM1RCxPQUFPQyw0QkFBNEIsOENBQThDO0FBQ2pGLE9BQU9DLDBCQUEwQkMsbUJBQW1CLFFBQVEsOENBQThDO0FBQzFHLFNBQVNDLDRCQUE0QixRQUFRLHVDQUF1QztBQUNwRixPQUFPQyxvQkFBb0IscUJBQXFCO0FBQ2hELE9BQU9DLG9CQUFvQixxQkFBcUI7QUFDaEQsT0FBT0Msa0JBQWtCLG1CQUFtQjtBQUM1QyxPQUFPQyxzQkFBc0IsdUJBQXVCO0FBQ3BELE9BQU9DLDZCQUE2Qiw4QkFBOEI7QUFDbEUsT0FBT0MsMEJBQTBCLDJCQUEyQjtBQUM1RCxPQUFPQyw0QkFBNEIsNkJBQTZCO0FBQ2hFLE9BQU9DLFFBQVEsa0NBQWtDO0FBQ2pELE9BQU9DLFVBQVUsb0NBQW9DO0FBQ3JELE9BQU9DLFdBQVcscUNBQXFDO0FBQ3ZELE9BQU9DLFlBQVksc0NBQXNDO0FBQ3pELE9BQU9DLG9CQUFvQiw4Q0FBOEM7QUFDekUsT0FBT0MsbUJBQW1CLDZDQUE2QztBQUN2RSxPQUFPQyxpQkFBaUIsMkNBQTJDO0FBQ25FLE9BQU9DLFlBQVksc0NBQXNDO0FBQ3pELE9BQU9DLGFBQWEsdUNBQXVDO0FBRTNELFNBQWdCQyxnQkFBZ0IsUUFBUSw0QkFBNEI7QUFDcEUsT0FBT0MscUJBQTJDLHVDQUF1QztBQUN6RixPQUFPQyx5QkFBeUIsMkNBQTJDO0FBQzNFLE9BQU9DLHVCQUF1QixxQkFBcUI7QUFDbkQsU0FBU0MsV0FBVyxFQUFFQyxPQUFP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