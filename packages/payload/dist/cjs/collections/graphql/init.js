/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _graphql = require("graphql");
var _formatName = /*#__PURE__*/ _interop_require_default(require("../../graphql/utilities/formatName"));
var _buildPaginatedListType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildPaginatedListType"));
var _buildMutationInputType = /*#__PURE__*/ _interop_require_wildcard(require("../../graphql/schema/buildMutationInputType"));
var _buildCollectionFields = require("../../versions/buildCollectionFields");
var _create = /*#__PURE__*/ _interop_require_default(require("./resolvers/create"));
var _update = /*#__PURE__*/ _interop_require_default(require("./resolvers/update"));
var _find = /*#__PURE__*/ _interop_require_default(require("./resolvers/find"));
var _findByID = /*#__PURE__*/ _interop_require_default(require("./resolvers/findByID"));
var _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./resolvers/findVersionByID"));
var _findVersions = /*#__PURE__*/ _interop_require_default(require("./resolvers/findVersions"));
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./resolvers/restoreVersion"));
var _me = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/me"));
var _init = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/init"));
var _login = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/login"));
var _logout = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/logout"));
var _forgotPassword = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/forgotPassword"));
var _resetPassword = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/resetPassword"));
var _verifyEmail = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/verifyEmail"));
var _unlock = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/unlock"));
var _refresh = /*#__PURE__*/ _interop_require_default(require("../../auth/graphql/resolvers/refresh"));
var _types = require("../../fields/config/types");
var _buildObjectType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildObjectType"));
var _buildWhereInputType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildWhereInputType"));
var _delete = /*#__PURE__*/ _interop_require_default(require("./resolvers/delete"));
var _formatLabels = require("../../utilities/formatLabels");
var _buildPoliciesType = require("../../graphql/schema/buildPoliciesType");
var _docAccess = require("./resolvers/docAccess");
function _array_like_to_array(arr, len) {
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
function initCollectionsGraphQL(payload) {
    Object.keys(payload.collections).forEach(function(slug) {
        var _versions;
        var collection = payload.collections[slug];
        var config = collection.config, _collection_config = collection.config, fields = _collection_config.fields, _collection_config_graphQL = _collection_config.graphQL, graphQL = _collection_config_graphQL === void 0 ? {} : _collection_config_graphQL, versions = _collection_config.versions;
        if (!graphQL) return;
        var singularName;
        var pluralName;
        var fromSlug = (0, _formatLabels.formatNames)(collection.config.slug);
        if (graphQL.singularName) {
            singularName = (0, _formatLabels.toWords)(graphQL.singularName, true);
        } else {
            singularName = fromSlug.singular;
        }
        if (graphQL.pluralName) {
            pluralName = (0, _formatLabels.toWords)(graphQL.pluralName, true);
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
            return (0, _types.fieldAffectsData)(field) && field.name === "id";
        });
        var idType = (0, _buildMutationInputType.getCollectionIDType)(config);
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
        collection.graphQL.type = (0, _buildObjectType.default)({
            payload: payload,
            name: singularName,
            parentName: singularName,
            fields: fields,
            baseFields: baseFields,
            forceNullable: forceNullableObjectType
        });
        collection.graphQL.paginatedType = (0, _buildPaginatedListType.default)(pluralName, collection.graphQL.type);
        collection.graphQL.whereInputType = (0, _buildWhereInputType.default)(singularName, whereInputFields, singularName);
        if (config.auth && !config.auth.disableLocalStrategy) {
            fields.push({
                name: "password",
                label: "Password",
                type: "text",
                required: true
            });
        }
        collection.graphQL.mutationInputType = new _graphql.GraphQLNonNull((0, _buildMutationInputType.default)(payload, singularName, fields, singularName));
        collection.graphQL.updateMutationInputType = new _graphql.GraphQLNonNull((0, _buildMutationInputType.default)(payload, "".concat(singularName, "Update"), fields.filter(function(field) {
            return !((0, _types.fieldAffectsData)(field) && field.name === "id");
        }), "".concat(singularName, "Update"), true));
        payload.Query.fields[singularName] = {
            type: collection.graphQL.type,
            args: _object_spread({
                id: {
                    type: new _graphql.GraphQLNonNull(idType)
                },
                draft: {
                    type: _graphql.GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                },
                fallbackLocale: {
                    type: payload.types.fallbackLocaleInputType
                }
            } : {}),
            resolve: (0, _findByID.default)(collection)
        };
        payload.Query.fields[pluralName] = {
            type: (0, _buildPaginatedListType.default)(pluralName, collection.graphQL.type),
            args: _object_spread_props(_object_spread({
                where: {
                    type: collection.graphQL.whereInputType
                },
                draft: {
                    type: _graphql.GraphQLBoolean
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
                    type: _graphql.GraphQLInt
                },
                limit: {
                    type: _graphql.GraphQLInt
                },
                sort: {
                    type: _graphql.GraphQLString
                }
            }),
            resolve: (0, _find.default)(collection)
        };
        payload.Query.fields["docAccess".concat(singularName)] = {
            type: (0, _buildPoliciesType.buildPolicyType)({
                typeSuffix: "DocAccess",
                entity: config,
                type: "collection",
                scope: "docAccess"
            }),
            args: {
                id: {
                    type: new _graphql.GraphQLNonNull(idType)
                }
            },
            resolve: (0, _docAccess.docAccessResolver)()
        };
        payload.Mutation.fields["create".concat(singularName)] = {
            type: collection.graphQL.type,
            args: _object_spread({
                data: {
                    type: collection.graphQL.mutationInputType
                },
                draft: {
                    type: _graphql.GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                }
            } : {}),
            resolve: (0, _create.default)(collection)
        };
        payload.Mutation.fields["update".concat(singularName)] = {
            type: collection.graphQL.type,
            args: _object_spread({
                id: {
                    type: new _graphql.GraphQLNonNull(idType)
                },
                data: {
                    type: collection.graphQL.updateMutationInputType
                },
                draft: {
                    type: _graphql.GraphQLBoolean
                },
                autosave: {
                    type: _graphql.GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                }
            } : {}),
            resolve: (0, _update.default)(collection)
        };
        payload.Mutation.fields["delete".concat(singularName)] = {
            type: collection.graphQL.type,
            args: {
                id: {
                    type: new _graphql.GraphQLNonNull(idType)
                }
            },
            resolve: (0, _delete.default)(collection)
        };
        if (config.versions) {
            var versionCollectionFields = _to_consumable_array((0, _buildCollectionFields.buildVersionCollectionFields)(config)).concat([
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
            collection.graphQL.versionType = (0, _buildObjectType.default)({
                payload: payload,
                name: "".concat(singularName, "Version"),
                fields: versionCollectionFields,
                parentName: "".concat(singularName, "Version"),
                forceNullable: forceNullableObjectType
            });
            payload.Query.fields["version".concat((0, _formatName.default)(singularName))] = {
                type: collection.graphQL.versionType,
                args: _object_spread({
                    id: {
                        type: _graphql.GraphQLString
                    }
                }, payload.config.localization ? {
                    locale: {
                        type: payload.types.localeInputType
                    },
                    fallbackLocale: {
                        type: payload.types.fallbackLocaleInputType
                    }
                } : {}),
                resolve: (0, _findVersionByID.default)(collection)
            };
            payload.Query.fields["versions".concat(pluralName)] = {
                type: (0, _buildPaginatedListType.default)("versions".concat((0, _formatName.default)(pluralName)), collection.graphQL.versionType),
                args: _object_spread_props(_object_spread({
                    where: {
                        type: (0, _buildWhereInputType.default)("versions".concat(singularName), versionCollectionFields, "versions".concat(singularName))
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
                        type: _graphql.GraphQLInt
                    },
                    limit: {
                        type: _graphql.GraphQLInt
                    },
                    sort: {
                        type: _graphql.GraphQLString
                    }
                }),
                resolve: (0, _findVersions.default)(collection)
            };
            payload.Mutation.fields["restoreVersion".concat((0, _formatName.default)(singularName))] = {
                type: collection.graphQL.type,
                args: {
                    id: {
                        type: _graphql.GraphQLString
                    }
                },
                resolve: (0, _restoreVersion.default)(collection)
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
            collection.graphQL.JWT = (0, _buildObjectType.default)({
                payload: payload,
                name: (0, _formatName.default)("".concat(slug, "JWT")),
                fields: _to_consumable_array(config.fields.filter(function(field) {
                    return (0, _types.fieldAffectsData)(field) && field.saveToJWT;
                })).concat(_to_consumable_array(authFields), [
                    {
                        name: "collection",
                        type: "text",
                        required: true
                    }
                ]),
                parentName: (0, _formatName.default)("".concat(slug, "JWT"))
            });
            payload.Query.fields["me".concat(singularName)] = {
                type: new _graphql.GraphQLObjectType({
                    name: (0, _formatName.default)("".concat(slug, "Me")),
                    fields: {
                        token: {
                            type: _graphql.GraphQLString
                        },
                        user: {
                            type: collection.graphQL.type
                        },
                        exp: {
                            type: _graphql.GraphQLInt
                        },
                        collection: {
                            type: _graphql.GraphQLString
                        }
                    }
                }),
                resolve: (0, _me.default)(collection)
            };
            payload.Query.fields["initialized".concat(singularName)] = {
                type: _graphql.GraphQLBoolean,
                resolve: (0, _init.default)(collection.config.slug)
            };
            payload.Mutation.fields["refreshToken".concat(singularName)] = {
                type: new _graphql.GraphQLObjectType({
                    name: (0, _formatName.default)("".concat(slug, "Refreshed").concat(singularName)),
                    fields: {
                        user: {
                            type: collection.graphQL.JWT
                        },
                        refreshedToken: {
                            type: _graphql.GraphQLString
                        },
                        exp: {
                            type: _graphql.GraphQLInt
                        }
                    }
                }),
                args: {
                    token: {
                        type: _graphql.GraphQLString
                    }
                },
                resolve: (0, _refresh.default)(collection)
            };
            payload.Mutation.fields["logout".concat(singularName)] = {
                type: _graphql.GraphQLString,
                resolve: (0, _logout.default)(collection)
            };
            if (!config.auth.disableLocalStrategy) {
                if (config.auth.maxLoginAttempts > 0) {
                    payload.Mutation.fields["unlock".concat(singularName)] = {
                        type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean),
                        args: {
                            email: {
                                type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
                            }
                        },
                        resolve: (0, _unlock.default)(collection)
                    };
                }
                payload.Mutation.fields["login".concat(singularName)] = {
                    type: new _graphql.GraphQLObjectType({
                        name: (0, _formatName.default)("".concat(slug, "LoginResult")),
                        fields: {
                            token: {
                                type: _graphql.GraphQLString
                            },
                            user: {
                                type: collection.graphQL.type
                            },
                            exp: {
                                type: _graphql.GraphQLInt
                            }
                        }
                    }),
                    args: {
                        email: {
                            type: _graphql.GraphQLString
                        },
                        password: {
                            type: _graphql.GraphQLString
                        }
                    },
                    resolve: (0, _login.default)(collection)
                };
                payload.Mutation.fields["forgotPassword".concat(singularName)] = {
                    type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean),
                    args: {
                        email: {
                            type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
                        },
                        disableEmail: {
                            type: _graphql.GraphQLBoolean
                        },
                        expiration: {
                            type: _graphql.GraphQLInt
                        }
                    },
                    resolve: (0, _forgotPassword.default)(collection)
                };
                payload.Mutation.fields["resetPassword".concat(singularName)] = {
                    type: new _graphql.GraphQLObjectType({
                        name: (0, _formatName.default)("".concat(slug, "ResetPassword")),
                        fields: {
                            token: {
                                type: _graphql.GraphQLString
                            },
                            user: {
                                type: collection.graphQL.type
                            }
                        }
                    }),
                    args: {
                        token: {
                            type: _graphql.GraphQLString
                        },
                        password: {
                            type: _graphql.GraphQLString
                        }
                    },
                    resolve: (0, _resetPassword.default)(collection)
                };
                payload.Mutation.fields["verifyEmail".concat(singularName)] = {
                    type: _graphql.GraphQLBoolean,
                    args: {
                        token: {
                            type: _graphql.GraphQLString
                        }
                    },
                    resolve: (0, _verifyEmail.default)(collection)
                };
            }
        }
    });
}
var _default = initCollectionsGraphQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL2luaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMSW50LCBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTdHJpbmcgfSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IGZvcm1hdE5hbWUgZnJvbSAnLi4vLi4vZ3JhcGhxbC91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5pbXBvcnQgYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZFBhZ2luYXRlZExpc3RUeXBlJztcbmltcG9ydCBidWlsZE11dGF0aW9uSW5wdXRUeXBlLCB7IGdldENvbGxlY3Rpb25JRFR5cGUgfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZE11dGF0aW9uSW5wdXRUeXBlJztcbmltcG9ydCB7IGJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9idWlsZENvbGxlY3Rpb25GaWVsZHMnO1xuaW1wb3J0IGNyZWF0ZVJlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2NyZWF0ZSc7XG5pbXBvcnQgdXBkYXRlUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvdXBkYXRlJztcbmltcG9ydCBmaW5kUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZmluZCc7XG5pbXBvcnQgZmluZEJ5SURSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9maW5kQnlJRCc7XG5pbXBvcnQgZmluZFZlcnNpb25CeUlEUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCBmaW5kVmVyc2lvbnNSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9maW5kVmVyc2lvbnMnO1xuaW1wb3J0IHJlc3RvcmVWZXJzaW9uUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvcmVzdG9yZVZlcnNpb24nO1xuaW1wb3J0IG1lIGZyb20gJy4uLy4uL2F1dGgvZ3JhcGhxbC9yZXNvbHZlcnMvbWUnO1xuaW1wb3J0IGluaXQgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9pbml0JztcbmltcG9ydCBsb2dpbiBmcm9tICcuLi8uLi9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2xvZ2luJztcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9sb2dvdXQnO1xuaW1wb3J0IGZvcmdvdFBhc3N3b3JkIGZyb20gJy4uLy4uL2F1dGgvZ3JhcGhxbC9yZXNvbHZlcnMvZm9yZ290UGFzc3dvcmQnO1xuaW1wb3J0IHJlc2V0UGFzc3dvcmQgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9yZXNldFBhc3N3b3JkJztcbmltcG9ydCB2ZXJpZnlFbWFpbCBmcm9tICcuLi8uLi9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3ZlcmlmeUVtYWlsJztcbmltcG9ydCB1bmxvY2sgZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy91bmxvY2snO1xuaW1wb3J0IHJlZnJlc2ggZnJvbSAnLi4vLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9yZWZyZXNoJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi9wYXlsb2FkJztcbmltcG9ydCB7IEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgYnVpbGRPYmplY3RUeXBlLCB7IE9iamVjdFR5cGVDb25maWcgfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZE9iamVjdFR5cGUnO1xuaW1wb3J0IGJ1aWxkV2hlcmVJbnB1dFR5cGUgZnJvbSAnLi4vLi4vZ3JhcGhxbC9zY2hlbWEvYnVpbGRXaGVyZUlucHV0VHlwZSc7XG5pbXBvcnQgZ2V0RGVsZXRlUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZGVsZXRlJztcbmltcG9ydCB7IGZvcm1hdE5hbWVzLCB0b1dvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdExhYmVscyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGJ1aWxkUG9saWN5VHlwZSB9IGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hL2J1aWxkUG9saWNpZXNUeXBlJztcbmltcG9ydCB7IGRvY0FjY2Vzc1Jlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcnMvZG9jQWNjZXNzJztcblxuZnVuY3Rpb24gaW5pdENvbGxlY3Rpb25zR3JhcGhRTChwYXlsb2FkOiBQYXlsb2FkKTogdm9pZCB7XG4gIE9iamVjdC5rZXlzKHBheWxvYWQuY29sbGVjdGlvbnMpLmZvckVhY2goKHNsdWcpID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uID0gcGF5bG9hZC5jb2xsZWN0aW9uc1tzbHVnXTtcbiAgICBjb25zdCB7XG4gICAgICBjb25maWcsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBncmFwaFFMID0ge30gYXMgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1snZ3JhcGhRTCddLFxuICAgICAgICB2ZXJzaW9ucyxcbiAgICAgIH0sXG4gICAgfSA9IGNvbGxlY3Rpb247XG5cbiAgICBpZiAoIWdyYXBoUUwpIHJldHVybjtcblxuICAgIGxldCBzaW5ndWxhck5hbWU7XG4gICAgbGV0IHBsdXJhbE5hbWU7XG4gICAgY29uc3QgZnJvbVNsdWcgPSBmb3JtYXROYW1lcyhjb2xsZWN0aW9uLmNvbmZpZy5zbHVnKTtcbiAgICBpZiAoZ3JhcGhRTC5zaW5ndWxhck5hbWUpIHtcbiAgICAgIHNpbmd1bGFyTmFtZSA9IHRvV29yZHMoZ3JhcGhRTC5zaW5ndWxhck5hbWUsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaW5ndWxhck5hbWUgPSBmcm9tU2x1Zy5zaW5ndWxhcjtcbiAgICB9XG4gICAgaWYgKGdyYXBoUUwucGx1cmFsTmFtZSkge1xuICAgICAgcGx1cmFsTmFtZSA9IHRvV29yZHMoZ3JhcGhRTC5wbHVyYWxOYW1lLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGx1cmFsTmFtZSA9IGZyb21TbHVnLnBsdXJhbDtcbiAgICB9XG5cbiAgICAvLyBGb3IgY29sbGVjdGlvbnMgbmFtZWQgJ01lZGlhJyBvciBzaW1pbGFyLFxuICAgIC8vIHRoZXJlIGlzIGEgcG9zc2liaWxpdHkgdGhhdCB0aGUgc2luZ3VsYXIgbmFtZVxuICAgIC8vIHdpbGwgZXF1YWwgdGhlIHBsdXJhbCBuYW1lLiBBcHBlbmQgYGFsbGAgdG8gdGhlIGJlZ2lubmluZ1xuICAgIC8vIG9mIHBvdGVudGlhbCBjb25mbGljdHNcbiAgICBpZiAoc2luZ3VsYXJOYW1lID09PSBwbHVyYWxOYW1lKSB7XG4gICAgICBwbHVyYWxOYW1lID0gYGFsbCR7c2luZ3VsYXJOYW1lfWA7XG4gICAgfVxuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMID0ge30gYXMgQ29sbGVjdGlvblsnZ3JhcGhRTCddO1xuXG4gICAgY29uc3QgaWRGaWVsZCA9IGZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gJ2lkJyk7XG4gICAgY29uc3QgaWRUeXBlID0gZ2V0Q29sbGVjdGlvbklEVHlwZShjb25maWcpO1xuXG4gICAgY29uc3QgYmFzZUZpZWxkczogT2JqZWN0VHlwZUNvbmZpZyA9IHt9O1xuXG4gICAgY29uc3Qgd2hlcmVJbnB1dEZpZWxkcyA9IFtcbiAgICAgIC4uLmZpZWxkcyxcbiAgICBdO1xuXG4gICAgaWYgKCFpZEZpZWxkKSB7XG4gICAgICBiYXNlRmllbGRzLmlkID0geyB0eXBlOiBpZFR5cGUgfTtcbiAgICAgIHdoZXJlSW5wdXRGaWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcmNlTnVsbGFibGVPYmplY3RUeXBlID0gQm9vbGVhbih2ZXJzaW9ucz8uZHJhZnRzKTtcblxuICAgIGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgIHBheWxvYWQsXG4gICAgICBuYW1lOiBzaW5ndWxhck5hbWUsXG4gICAgICBwYXJlbnROYW1lOiBzaW5ndWxhck5hbWUsXG4gICAgICBmaWVsZHMsXG4gICAgICBiYXNlRmllbGRzLFxuICAgICAgZm9yY2VOdWxsYWJsZTogZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUsXG4gICAgfSk7XG5cbiAgICBjb2xsZWN0aW9uLmdyYXBoUUwucGFnaW5hdGVkVHlwZSA9IGJ1aWxkUGFnaW5hdGVkTGlzdFR5cGUoXG4gICAgICBwbHVyYWxOYW1lLFxuICAgICAgY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgKTtcblxuICAgIGNvbGxlY3Rpb24uZ3JhcGhRTC53aGVyZUlucHV0VHlwZSA9IGJ1aWxkV2hlcmVJbnB1dFR5cGUoXG4gICAgICBzaW5ndWxhck5hbWUsXG4gICAgICB3aGVyZUlucHV0RmllbGRzLFxuICAgICAgc2luZ3VsYXJOYW1lLFxuICAgICk7XG5cbiAgICBpZiAoY29uZmlnLmF1dGggJiYgIWNvbmZpZy5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICBmaWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdwYXNzd29yZCcsXG4gICAgICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMLm11dGF0aW9uSW5wdXRUeXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUoXG4gICAgICBwYXlsb2FkLFxuICAgICAgc2luZ3VsYXJOYW1lLFxuICAgICAgZmllbGRzLFxuICAgICAgc2luZ3VsYXJOYW1lLFxuICAgICkpO1xuXG4gICAgY29sbGVjdGlvbi5ncmFwaFFMLnVwZGF0ZU11dGF0aW9uSW5wdXRUeXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUoXG4gICAgICBwYXlsb2FkLFxuICAgICAgYCR7c2luZ3VsYXJOYW1lfVVwZGF0ZWAsXG4gICAgICBmaWVsZHMuZmlsdGVyKChmaWVsZCkgPT4gIShmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSAnaWQnKSksXG4gICAgICBgJHtzaW5ndWxhck5hbWV9VXBkYXRlYCxcbiAgICAgIHRydWUsXG4gICAgKSk7XG5cbiAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tzaW5ndWxhck5hbWVdID0ge1xuICAgICAgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChpZFR5cGUpIH0sXG4gICAgICAgIGRyYWZ0OiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgIC4uLihwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24gPyB7XG4gICAgICAgICAgbG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMubG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICB9IDoge30pLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IGZpbmRCeUlEUmVzb2x2ZXIoY29sbGVjdGlvbiksXG4gICAgfTtcblxuICAgIHBheWxvYWQuUXVlcnkuZmllbGRzW3BsdXJhbE5hbWVdID0ge1xuICAgICAgdHlwZTogYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZShwbHVyYWxOYW1lLCBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSksXG4gICAgICBhcmdzOiB7XG4gICAgICAgIHdoZXJlOiB7IHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC53aGVyZUlucHV0VHlwZSB9LFxuICAgICAgICBkcmFmdDogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8ge1xuICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgIGZhbGxiYWNrTG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMuZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgcGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgICAgIGxpbWl0OiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgc29ydDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZTogZmluZFJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgIH07XG5cbiAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgZG9jQWNjZXNzJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICB0eXBlOiBidWlsZFBvbGljeVR5cGUoe1xuICAgICAgICB0eXBlU3VmZml4OiAnRG9jQWNjZXNzJyxcbiAgICAgICAgZW50aXR5OiBjb25maWcsXG4gICAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgc2NvcGU6ICdkb2NBY2Nlc3MnLFxuICAgICAgfSksXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGlkOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChpZFR5cGUpIH0sXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZTogZG9jQWNjZXNzUmVzb2x2ZXIoKSxcbiAgICB9O1xuXG4gICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYGNyZWF0ZSR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGRhdGE6IHsgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLm11dGF0aW9uSW5wdXRUeXBlIH0sXG4gICAgICAgIGRyYWZ0OiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgIC4uLihwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24gPyB7XG4gICAgICAgICAgbG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMubG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgIH0gOiB7fSksXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZTogY3JlYXRlUmVzb2x2ZXIoY29sbGVjdGlvbiksXG4gICAgfTtcblxuICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2B1cGRhdGUke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgIHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlLFxuICAgICAgYXJnczoge1xuICAgICAgICBpZDogeyB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoaWRUeXBlKSB9LFxuICAgICAgICBkYXRhOiB7IHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC51cGRhdGVNdXRhdGlvbklucHV0VHlwZSB9LFxuICAgICAgICBkcmFmdDogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICBhdXRvc2F2ZTogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8ge1xuICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICB9IDoge30pLFxuICAgICAgfSxcbiAgICAgIHJlc29sdmU6IHVwZGF0ZVJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgIH07XG5cbiAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgZGVsZXRlJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSxcbiAgICAgIGFyZ3M6IHtcbiAgICAgICAgaWQ6IHsgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKGlkVHlwZSkgfSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiBnZXREZWxldGVSZXNvbHZlcihjb2xsZWN0aW9uKSxcbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZy52ZXJzaW9ucykge1xuICAgICAgY29uc3QgdmVyc2lvbkNvbGxlY3Rpb25GaWVsZHM6IEZpZWxkW10gPSBbXG4gICAgICAgIC4uLmJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgbGFiZWw6ICdDcmVhdGVkIEF0JyxcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgICAgICBsYWJlbDogJ1VwZGF0ZWQgQXQnLFxuICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgfSxcbiAgICAgIF07XG5cbiAgICAgIGNvbGxlY3Rpb24uZ3JhcGhRTC52ZXJzaW9uVHlwZSA9IGJ1aWxkT2JqZWN0VHlwZSh7XG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIG5hbWU6IGAke3Npbmd1bGFyTmFtZX1WZXJzaW9uYCxcbiAgICAgICAgZmllbGRzOiB2ZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyxcbiAgICAgICAgcGFyZW50TmFtZTogYCR7c2luZ3VsYXJOYW1lfVZlcnNpb25gLFxuICAgICAgICBmb3JjZU51bGxhYmxlOiBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSxcbiAgICAgIH0pO1xuXG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgdmVyc2lvbiR7Zm9ybWF0TmFtZShzaW5ndWxhck5hbWUpfWBdID0ge1xuICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudmVyc2lvblR5cGUsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiA/IHtcbiAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgICAgfTtcbiAgICAgIHBheWxvYWQuUXVlcnkuZmllbGRzW2B2ZXJzaW9ucyR7cGx1cmFsTmFtZX1gXSA9IHtcbiAgICAgICAgdHlwZTogYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZShgdmVyc2lvbnMke2Zvcm1hdE5hbWUocGx1cmFsTmFtZSl9YCwgY29sbGVjdGlvbi5ncmFwaFFMLnZlcnNpb25UeXBlKSxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICB0eXBlOiBidWlsZFdoZXJlSW5wdXRUeXBlKFxuICAgICAgICAgICAgICBgdmVyc2lvbnMke3Npbmd1bGFyTmFtZX1gLFxuICAgICAgICAgICAgICB2ZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyxcbiAgICAgICAgICAgICAgYHZlcnNpb25zJHtzaW5ndWxhck5hbWV9YCxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8ge1xuICAgICAgICAgICAgbG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMubG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgICBmYWxsYmFja0xvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIH0sXG4gICAgICAgICAgfSA6IHt9KSxcbiAgICAgICAgICBwYWdlOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICBsaW1pdDogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgICAgICAgc29ydDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZpbmRWZXJzaW9uc1Jlc29sdmVyKGNvbGxlY3Rpb24pLFxuICAgICAgfTtcbiAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2ByZXN0b3JlVmVyc2lvbiR7Zm9ybWF0TmFtZShzaW5ndWxhck5hbWUpfWBdID0ge1xuICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwudHlwZSxcbiAgICAgICAgYXJnczoge1xuICAgICAgICAgIGlkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZTogcmVzdG9yZVZlcnNpb25SZXNvbHZlcihjb2xsZWN0aW9uKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICBjb25zdCBhdXRoRmllbGRzOiBGaWVsZFtdID0gY29uZmlnLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kgPyBbXSA6IFt7XG4gICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfV07XG4gICAgICBjb2xsZWN0aW9uLmdyYXBoUUwuSldUID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgbmFtZTogZm9ybWF0TmFtZShgJHtzbHVnfUpXVGApLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAuLi5jb25maWcuZmllbGRzLmZpbHRlcigoZmllbGQpID0+IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLnNhdmVUb0pXVCksXG4gICAgICAgICAgLi4uYXV0aEZpZWxkcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBwYXJlbnROYW1lOiBmb3JtYXROYW1lKGAke3NsdWd9SldUYCksXG4gICAgICB9KTtcblxuICAgICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbYG1lJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgICAgbmFtZTogZm9ybWF0TmFtZShgJHtzbHVnfU1lYCksXG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgdHlwZTogY29sbGVjdGlvbi5ncmFwaFFMLnR5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxJbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sbGVjdGlvbjoge1xuICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgcmVzb2x2ZTogbWUoY29sbGVjdGlvbiksXG4gICAgICB9O1xuXG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgaW5pdGlhbGl6ZWQke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgdHlwZTogR3JhcGhRTEJvb2xlYW4sXG4gICAgICAgIHJlc29sdmU6IGluaXQoY29sbGVjdGlvbi5jb25maWcuc2x1ZyksXG4gICAgICB9O1xuXG4gICAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgcmVmcmVzaFRva2VuJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgICAgbmFtZTogZm9ybWF0TmFtZShgJHtzbHVnfVJlZnJlc2hlZCR7c2luZ3VsYXJOYW1lfWApLFxuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICB0eXBlOiBjb2xsZWN0aW9uLmdyYXBoUUwuSldULFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZnJlc2hlZFRva2VuOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwOiB7XG4gICAgICAgICAgICAgIHR5cGU6IEdyYXBoUUxJbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgdG9rZW46IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICB9LFxuICAgICAgICByZXNvbHZlOiByZWZyZXNoKGNvbGxlY3Rpb24pLFxuICAgICAgfTtcblxuICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYGxvZ291dCR7c2luZ3VsYXJOYW1lfWBdID0ge1xuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgICByZXNvbHZlOiBsb2dvdXQoY29sbGVjdGlvbiksXG4gICAgICB9O1xuXG4gICAgICBpZiAoIWNvbmZpZy5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5KSB7XG4gICAgICAgIGlmIChjb25maWcuYXV0aC5tYXhMb2dpbkF0dGVtcHRzID4gMCkge1xuICAgICAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2B1bmxvY2ske3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMQm9vbGVhbiksXG4gICAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAgIGVtYWlsOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc29sdmU6IHVubG9jayhjb2xsZWN0aW9uKSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYGxvZ2luJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IGZvcm1hdE5hbWUoYCR7c2x1Z31Mb2dpblJlc3VsdGApLFxuICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHA6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBHcmFwaFFMSW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICBlbWFpbDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgICBwYXNzd29yZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNvbHZlOiBsb2dpbihjb2xsZWN0aW9uKSxcbiAgICAgICAgfTtcblxuICAgICAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgZm9yZ290UGFzc3dvcmQke3Npbmd1bGFyTmFtZX1gXSA9IHtcbiAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEJvb2xlYW4pLFxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIGVtYWlsOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSB9LFxuICAgICAgICAgICAgZGlzYWJsZUVtYWlsOiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgICAgICAgICBleHBpcmF0aW9uOiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc29sdmU6IGZvcmdvdFBhc3N3b3JkKGNvbGxlY3Rpb24pLFxuICAgICAgICB9O1xuXG4gICAgICAgIHBheWxvYWQuTXV0YXRpb24uZmllbGRzW2ByZXNldFBhc3N3b3JkJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IGZvcm1hdE5hbWUoYCR7c2x1Z31SZXNldFBhc3N3b3JkYCksXG4gICAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgICAgdG9rZW46IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICAgICAgICB1c2VyOiB7IHR5cGU6IGNvbGxlY3Rpb24uZ3JhcGhRTC50eXBlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIHRva2VuOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc29sdmU6IHJlc2V0UGFzc3dvcmQoY29sbGVjdGlvbiksXG4gICAgICAgIH07XG5cbiAgICAgICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYHZlcmlmeUVtYWlsJHtzaW5ndWxhck5hbWV9YF0gPSB7XG4gICAgICAgICAgdHlwZTogR3JhcGhRTEJvb2xlYW4sXG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdG9rZW46IHsgdHlwZTogR3JhcGhRTFN0cmluZyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzb2x2ZTogdmVyaWZ5RW1haWwoY29sbGVjdGlvbiksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdENvbGxlY3Rpb25zR3JhcGhRTDtcbiJdLCJuYW1lcyI6WyJpbml0Q29sbGVjdGlvbnNHcmFwaFFMIiwicGF5bG9hZCIsIk9iamVjdCIsImtleXMiLCJjb2xsZWN0aW9ucyIsImZvckVhY2giLCJzbHVnIiwidmVyc2lvbnMiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiZmllbGRzIiwiZ3JhcGhRTCIsInNpbmd1bGFyTmFtZSIsInBsdXJhbE5hbWUiLCJmcm9tU2x1ZyIsImZvcm1hdE5hbWVzIiwidG9Xb3JkcyIsInNpbmd1bGFyIiwicGx1cmFsIiwiaWRGaWVsZCIsImZpbmQiLCJmaWVsZCIsImZpZWxkQWZmZWN0c0RhdGEiLCJuYW1lIiwiaWRUeXBlIiwiZ2V0Q29sbGVjdGlvbklEVHlwZSIsImJhc2VGaWVsZHMiLCJ3aGVyZUlucHV0RmllbGRzIiwiaWQiLCJ0eXBlIiwicHVzaCIsImZvcmNlTnVsbGFibGVPYmplY3RUeXBlIiwiQm9vbGVhbiIsImRyYWZ0cyIsImJ1aWxkT2JqZWN0VHlwZSIsInBhcmVudE5hbWUiLCJmb3JjZU51bGxhYmxlIiwicGFnaW5hdGVkVHlwZSIsImJ1aWxkUGFnaW5hdGVkTGlzdFR5cGUiLCJ3aGVyZUlucHV0VHlwZSIsImJ1aWxkV2hlcmVJbnB1dFR5cGUiLCJhdXRoIiwiZGlzYWJsZUxvY2FsU3RyYXRlZ3kiLCJsYWJlbCIsInJlcXVpcmVkIiwibXV0YXRpb25JbnB1dFR5cGUiLCJHcmFwaFFMTm9uTnVsbCIsImJ1aWxkTXV0YXRpb25JbnB1dFR5cGUiLCJ1cGRhdGVNdXRhdGlvbklucHV0VHlwZSIsImZpbHRlciIsIlF1ZXJ5IiwiYXJncyIsImRyYWZ0IiwiR3JhcGhRTEJvb2xlYW4iLCJsb2NhbGl6YXRpb24iLCJsb2NhbGUiLCJ0eXBlcyIsImxvY2FsZUlucHV0VHlwZSIsImZhbGxiYWNrTG9jYWxlIiwiZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUiLCJyZXNvbHZlIiwiZmluZEJ5SURSZXNvbHZlciIsIndoZXJlIiwicGFnZSIsIkdyYXBoUUxJbnQiLCJsaW1pdCIsInNvcnQiLCJHcmFwaFFMU3RyaW5nIiwiZmluZFJlc29sdmVyIiwiYnVpbGRQb2xpY3lUeXBlIiwidHlwZVN1ZmZpeCIsImVudGl0eSIsInNjb3BlIiwiZG9jQWNjZXNzUmVzb2x2ZXIiLCJNdXRhdGlvbiIsImRhdGEiLCJjcmVhdGVSZXNvbHZlciIsImF1dG9zYXZlIiwidXBkYXRlUmVzb2x2ZXIiLCJnZXREZWxldGVSZXNvbHZlciIsInZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwiYnVpbGRWZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyIsInZlcnNpb25UeXBlIiwiZm9ybWF0TmFtZSIsImZpbmRWZXJzaW9uQnlJRFJlc29sdmVyIiwiZmluZFZlcnNpb25zUmVzb2x2ZXIiLCJyZXN0b3JlVmVyc2lvblJlc29sdmVyIiwiYXV0aEZpZWxkcyIsIkpXVCIsInNhdmVUb0pXVCIsIkdyYXBoUUxPYmplY3RUeXBlIiwidG9rZW4iLCJ1c2VyIiwiZXhwIiwibWUiLCJpbml0IiwicmVmcmVzaGVkVG9rZW4iLCJyZWZyZXNoIiwibG9nb3V0IiwibWF4TG9naW5BdHRlbXB0cyIsImVtYWlsIiwidW5sb2NrIiwicGFzc3dvcmQiLCJsb2dpbiIsImRpc2FibGVFbWFpbCIsImV4cGlyYXRpb24iLCJmb3Jnb3RQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJ2ZXJpZnlFbWFpbCJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQW9hcEM7OztlQUFBOzs7dUJBbmE2RjtpRUFFdEU7NkVBQ1k7OEVBQ3lCO3FDQUNmOzZEQUNsQjs2REFDQTsyREFDRjsrREFDSTtzRUFDTzttRUFDSDtxRUFDRTt5REFDcEI7MkRBQ0U7NERBQ0M7NkRBQ0M7cUVBQ1E7b0VBQ0Q7a0VBQ0Y7NkRBQ0w7OERBQ0M7cUJBRW9CO3NFQUNVOzBFQUNsQjs2REFDRjs0QkFDTztpQ0FFTDt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsU0FBU0EsdUJBQXVCQyxPQUFnQjtJQUM5Q0MsT0FBT0MsSUFBSSxDQUFDRixRQUFRRyxXQUFXLEVBQUVDLE9BQU8sQ0FBQyxTQUFDQztZQXNEQUM7UUFyRHhDLElBQU1DLGFBQXlCUCxRQUFRRyxXQUFXLENBQUNFLEtBQUs7UUFDeEQsSUFDRUcsU0FNRUQsV0FORkMsNkJBTUVELFdBTEZDLFFBQ0VDLDRCQUFBQSx3REFDQUMsU0FBQUEsa0RBQVUsQ0FBQyxnQ0FDWEosOEJBQUFBO1FBSUosSUFBSSxDQUFDSSxTQUFTO1FBRWQsSUFBSUM7UUFDSixJQUFJQztRQUNKLElBQU1DLFdBQVdDLElBQUFBLHlCQUFXLEVBQUNQLFdBQVdDLE1BQU0sQ0FBQ0gsSUFBSTtRQUNuRCxJQUFJSyxRQUFRQyxZQUFZLEVBQUU7WUFDeEJBLGVBQWVJLElBQUFBLHFCQUFPLEVBQUNMLFFBQVFDLFlBQVksRUFBRTtRQUMvQyxPQUFPO1lBQ0xBLGVBQWVFLFNBQVNHLFFBQVE7UUFDbEM7UUFDQSxJQUFJTixRQUFRRSxVQUFVLEVBQUU7WUFDdEJBLGFBQWFHLElBQUFBLHFCQUFPLEVBQUNMLFFB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