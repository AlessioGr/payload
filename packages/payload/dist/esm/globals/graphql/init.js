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
import { GraphQLBoolean, GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import pluralize from "pluralize-esm";
import formatName from "../../graphql/utilities/formatName";
import { buildVersionGlobalFields } from "../../versions/buildGlobalFields";
import buildPaginatedListType from "../../graphql/schema/buildPaginatedListType";
import findOneResolver from "./resolvers/findOne";
import updateResolver from "./resolvers/update";
import findVersionByIDResolver from "./resolvers/findVersionByID";
import findVersionsResolver from "./resolvers/findVersions";
import restoreVersionResolver from "./resolvers/restoreVersion";
import buildObjectType from "../../graphql/schema/buildObjectType";
import buildMutationInputType from "../../graphql/schema/buildMutationInputType";
import buildWhereInputType from "../../graphql/schema/buildWhereInputType";
import { toWords } from "../../utilities/formatLabels";
import { buildPolicyType } from "../../graphql/schema/buildPoliciesType";
import { docAccessResolver } from "./resolvers/docAccess";
var singular = pluralize.singular;
function initGlobalsGraphQL(payload) {
    Object.keys(payload.globals.config).forEach(function(slug) {
        var _graphQL, _versions;
        var global = payload.globals.config[slug];
        var fields = global.fields, versions = global.versions, graphQL = global.graphQL;
        if (graphQL === false) {
            return;
        }
        var formattedName = ((_graphQL = graphQL) === null || _graphQL === void 0 ? void 0 : _graphQL.name) ? graphQL.name : singular(toWords(global.slug, true));
        var forceNullableObjectType = Boolean((_versions = versions) === null || _versions === void 0 ? void 0 : _versions.drafts);
        if (!payload.globals.graphQL) payload.globals.graphQL = {};
        payload.globals.graphQL[slug] = {
            type: buildObjectType({
                payload: payload,
                name: formattedName,
                parentName: formattedName,
                fields: fields,
                forceNullable: forceNullableObjectType
            }),
            mutationInputType: new GraphQLNonNull(buildMutationInputType(payload, formattedName, fields, formattedName))
        };
        payload.Query.fields[formattedName] = {
            type: payload.globals.graphQL[slug].type,
            args: _object_spread({
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
            resolve: findOneResolver(global)
        };
        payload.Mutation.fields["update".concat(formattedName)] = {
            type: payload.globals.graphQL[slug].type,
            args: _object_spread({
                data: {
                    type: payload.globals.graphQL[slug].mutationInputType
                },
                draft: {
                    type: GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                }
            } : {}),
            resolve: updateResolver(global)
        };
        payload.Query.fields["docAccess".concat(formattedName)] = {
            type: buildPolicyType({
                typeSuffix: "DocAccess",
                entity: global,
                type: "global",
                scope: "docAccess"
            }),
            resolve: docAccessResolver(global)
        };
        if (global.versions) {
            var versionGlobalFields = _to_consumable_array(buildVersionGlobalFields(global)).concat([
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
            payload.globals.graphQL[slug].versionType = buildObjectType({
                payload: payload,
                name: "".concat(formattedName, "Version"),
                parentName: "".concat(formattedName, "Version"),
                fields: versionGlobalFields,
                forceNullable: forceNullableObjectType
            });
            payload.Query.fields["version".concat(formatName(formattedName))] = {
                type: payload.globals.graphQL[slug].versionType,
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
                resolve: findVersionByIDResolver(global)
            };
            payload.Query.fields["versions".concat(formattedName)] = {
                type: buildPaginatedListType("versions".concat(formatName(formattedName)), payload.globals.graphQL[slug].versionType),
                args: _object_spread_props(_object_spread({
                    where: {
                        type: buildWhereInputType("versions".concat(formattedName), versionGlobalFields, "versions".concat(formattedName))
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
                resolve: findVersionsResolver(global)
            };
            payload.Mutation.fields["restoreVersion".concat(formatName(formattedName))] = {
                type: payload.globals.graphQL[slug].type,
                args: {
                    id: {
                        type: GraphQLString
                    }
                },
                resolve: restoreVersionResolver(global)
            };
        }
    });
}
export default initGlobalsGraphQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgR3JhcGhRTEJvb2xlYW4sIEdyYXBoUUxJbnQsIEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZS1lc20nO1xuaW1wb3J0IGZvcm1hdE5hbWUgZnJvbSAnLi4vLi4vZ3JhcGhxbC91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9idWlsZEdsb2JhbEZpZWxkcyc7XG5pbXBvcnQgYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZFBhZ2luYXRlZExpc3RUeXBlJztcbmltcG9ydCBmaW5kT25lUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZmluZE9uZSc7XG5pbXBvcnQgdXBkYXRlUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvdXBkYXRlJztcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SURSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9maW5kVmVyc2lvbkJ5SUQnO1xuaW1wb3J0IGZpbmRWZXJzaW9uc1Jlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2ZpbmRWZXJzaW9ucyc7XG5pbXBvcnQgcmVzdG9yZVZlcnNpb25SZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9yZXN0b3JlVmVyc2lvbic7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgYnVpbGRPYmplY3RUeXBlIGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hL2J1aWxkT2JqZWN0VHlwZSc7XG5pbXBvcnQgYnVpbGRNdXRhdGlvbklucHV0VHlwZSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZE11dGF0aW9uSW5wdXRUeXBlJztcbmltcG9ydCBidWlsZFdoZXJlSW5wdXRUeXBlIGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hL2J1aWxkV2hlcmVJbnB1dFR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHRvV29yZHMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZm9ybWF0TGFiZWxzJztcbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBidWlsZFBvbGljeVR5cGUgfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZFBvbGljaWVzVHlwZSc7XG5pbXBvcnQgeyBkb2NBY2Nlc3NSZXNvbHZlciB9IGZyb20gJy4vcmVzb2x2ZXJzL2RvY0FjY2Vzcyc7XG5cbmNvbnN0IHsgc2luZ3VsYXIgfSA9IHBsdXJhbGl6ZTtcblxuZnVuY3Rpb24gaW5pdEdsb2JhbHNHcmFwaFFMKHBheWxvYWQ6IFBheWxvYWQpOiB2b2lkIHtcbiAgT2JqZWN0LmtleXMocGF5bG9hZC5nbG9iYWxzLmNvbmZpZykuZm9yRWFjaCgoc2x1ZykgPT4ge1xuICAgIGNvbnN0IGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnID0gcGF5bG9hZC5nbG9iYWxzLmNvbmZpZ1tzbHVnXTtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHMsXG4gICAgICB2ZXJzaW9ucyxcbiAgICAgIGdyYXBoUUwsXG4gICAgfSA9IGdsb2JhbDtcblxuICAgIGlmIChncmFwaFFMID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdHRlZE5hbWUgPSBncmFwaFFMPy5uYW1lID8gZ3JhcGhRTC5uYW1lIDogc2luZ3VsYXIodG9Xb3JkcyhnbG9iYWwuc2x1ZywgdHJ1ZSkpO1xuXG4gICAgY29uc3QgZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUgPSBCb29sZWFuKHZlcnNpb25zPy5kcmFmdHMpO1xuXG4gICAgaWYgKCFwYXlsb2FkLmdsb2JhbHMuZ3JhcGhRTCkgcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUwgPSB7fTtcblxuICAgIHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddID0ge1xuICAgICAgdHlwZTogYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgbmFtZTogZm9ybWF0dGVkTmFtZSxcbiAgICAgICAgcGFyZW50TmFtZTogZm9ybWF0dGVkTmFtZSxcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBmb3JjZU51bGxhYmxlOiBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSxcbiAgICAgIH0pLFxuICAgICAgbXV0YXRpb25JbnB1dFR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChidWlsZE11dGF0aW9uSW5wdXRUeXBlKFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBmb3JtYXR0ZWROYW1lLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGZvcm1hdHRlZE5hbWUsXG4gICAgICApKSxcbiAgICB9O1xuXG4gICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbZm9ybWF0dGVkTmFtZV0gPSB7XG4gICAgICB0eXBlOiBwYXlsb2FkLmdsb2JhbHMuZ3JhcGhRTFtzbHVnXS50eXBlLFxuICAgICAgYXJnczoge1xuICAgICAgICBkcmFmdDogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8ge1xuICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgIGZhbGxiYWNrTG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMuZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgfSA6IHt9KSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiBmaW5kT25lUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICB9O1xuXG4gICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYHVwZGF0ZSR7Zm9ybWF0dGVkTmFtZX1gXSA9IHtcbiAgICAgIHR5cGU6IHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddLnR5cGUsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGRhdGE6IHsgdHlwZTogcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUxbc2x1Z10ubXV0YXRpb25JbnB1dFR5cGUgfSxcbiAgICAgICAgZHJhZnQ6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiA/IHtcbiAgICAgICAgICBsb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgfSA6IHt9KSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiB1cGRhdGVSZXNvbHZlcihnbG9iYWwpLFxuICAgIH07XG5cbiAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgZG9jQWNjZXNzJHtmb3JtYXR0ZWROYW1lfWBdID0ge1xuICAgICAgdHlwZTogYnVpbGRQb2xpY3lUeXBlKHtcbiAgICAgICAgdHlwZVN1ZmZpeDogJ0RvY0FjY2VzcycsXG4gICAgICAgIGVudGl0eTogZ2xvYmFsLFxuICAgICAgICB0eXBlOiAnZ2xvYmFsJyxcbiAgICAgICAgc2NvcGU6ICdkb2NBY2Nlc3MnLFxuICAgICAgfSksXG4gICAgICByZXNvbHZlOiBkb2NBY2Nlc3NSZXNvbHZlcihnbG9iYWwpLFxuICAgIH07XG5cbiAgICBpZiAoZ2xvYmFsLnZlcnNpb25zKSB7XG4gICAgICBjb25zdCB2ZXJzaW9uR2xvYmFsRmllbGRzOiBGaWVsZFtdID0gW1xuICAgICAgICAuLi5idWlsZFZlcnNpb25HbG9iYWxGaWVsZHMoZ2xvYmFsKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgbGFiZWw6ICdDcmVhdGVkIEF0JyxcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgICAgICBsYWJlbDogJ1VwZGF0ZWQgQXQnLFxuICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgfSxcbiAgICAgIF07XG5cbiAgICAgIHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddLnZlcnNpb25UeXBlID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgbmFtZTogYCR7Zm9ybWF0dGVkTmFtZX1WZXJzaW9uYCxcbiAgICAgICAgcGFyZW50TmFtZTogYCR7Zm9ybWF0dGVkTmFtZX1WZXJzaW9uYCxcbiAgICAgICAgZmllbGRzOiB2ZXJzaW9uR2xvYmFsRmllbGRzLFxuICAgICAgICBmb3JjZU51bGxhYmxlOiBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSxcbiAgICAgIH0pO1xuXG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgdmVyc2lvbiR7Zm9ybWF0TmFtZShmb3JtYXR0ZWROYW1lKX1gXSA9IHtcbiAgICAgICAgdHlwZTogcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUxbc2x1Z10udmVyc2lvblR5cGUsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiA/IHtcbiAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyKGdsb2JhbCksXG4gICAgICB9O1xuICAgICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbYHZlcnNpb25zJHtmb3JtYXR0ZWROYW1lfWBdID0ge1xuICAgICAgICB0eXBlOiBidWlsZFBhZ2luYXRlZExpc3RUeXBlKGB2ZXJzaW9ucyR7Zm9ybWF0TmFtZShmb3JtYXR0ZWROYW1lKX1gLCBwYXlsb2FkLmdsb2JhbHMuZ3JhcGhRTFtzbHVnXS52ZXJzaW9uVHlwZSksXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdHlwZTogYnVpbGRXaGVyZUlucHV0VHlwZShcbiAgICAgICAgICAgICAgYHZlcnNpb25zJHtmb3JtYXR0ZWROYW1lfWAsXG4gICAgICAgICAgICAgIHZlcnNpb25HbG9iYWxGaWVsZHMsXG4gICAgICAgICAgICAgIGB2ZXJzaW9ucyR7Zm9ybWF0dGVkTmFtZX1gLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLihwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24gPyB7XG4gICAgICAgICAgICBsb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICAgIGZhbGxiYWNrTG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMuZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgIHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgICAgICAgIGxpbWl0OiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICBzb3J0OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZTogZmluZFZlcnNpb25zUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICAgIH07XG4gICAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgcmVzdG9yZVZlcnNpb24ke2Zvcm1hdE5hbWUoZm9ybWF0dGVkTmFtZSl9YF0gPSB7XG4gICAgICAgIHR5cGU6IHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddLnR5cGUsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHJlc3RvcmVWZXJzaW9uUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEdsb2JhbHNHcmFwaFFMO1xuIl0sIm5hbWVzIjpbIkdyYXBoUUxCb29sZWFuIiwiR3JhcGhRTEludCIsIkdyYXBoUUxOb25OdWxsIiwiR3JhcGhRTFN0cmluZyIsInBsdXJhbGl6ZSIsImZvcm1hdE5hbWUiLCJidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMiLCJidWlsZFBhZ2luYXRlZExpc3RUeXBlIiwiZmluZE9uZVJlc29sdmVyIiwidXBkYXRlUmVzb2x2ZXIiLCJmaW5kVmVyc2lvbkJ5SURSZXNvbHZlciIsImZpbmRWZXJzaW9uc1Jlc29sdmVyIiwicmVzdG9yZVZlcnNpb25SZXNvbHZlciIsImJ1aWxkT2JqZWN0VHlwZSIsImJ1aWxkTXV0YXRpb25JbnB1dFR5cGUiLCJidWlsZFdoZXJlSW5wdXRUeXBlIiwidG9Xb3JkcyIsImJ1aWxkUG9saWN5VHlwZSIsImRvY0FjY2Vzc1Jlc29sdmVyIiwic2luZ3VsYXIiLCJpbml0R2xvYmFsc0dyYXBoUUwiLCJwYXlsb2FkIiwiT2JqZWN0Iiwia2V5cyIsImdsb2JhbHMiLCJjb25maWciLCJmb3JFYWNoIiwic2x1ZyIsImdyYXBoUUwiLCJ2ZXJzaW9ucyIsImdsb2JhbCIsImZpZWxkcyIsImZvcm1hdHRlZE5hbWUiLCJuYW1lIiwiZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUiLCJCb29sZWFuIiwiZHJhZnRzIiwidHlwZSIsInBhcmVudE5hbWUiLCJmb3JjZU51bGxhYmxlIiwibXV0YXRpb25JbnB1dFR5cGUiLCJRdWVyeSIsImFyZ3MiLCJkcmFmdCIsImxvY2FsaXphdGlvbiIsImxvY2FsZSIsInR5cGVzIiwibG9jYWxlSW5wdXRUeXBlIiwiZmFsbGJhY2tMb2NhbGUiLCJmYWxsYmFja0xvY2FsZUlucHV0VHlwZSIsInJlc29sdmUiLCJNdXRhdGlvbiIsImRhdGEiLCJ0eXBlU3VmZml4IiwiZW50aXR5Iiwic2NvcGUiLCJ2ZXJzaW9uR2xvYmFsRmllbGRzIiwibGFiZWwiLCJ2ZXJzaW9uVHlwZSIsImlkIiwid2hlcmUiLCJwYWdlIiwibGltaXQiLCJzb3J0Il0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3BDLFNBQVNBLGNBQWMsRUFBRUMsVUFBVSxFQUFFQyxjQUFjLEVBQUVDLGFBQWEsUUFBUSxVQUFVO0FBQ3BGLE9BQU9DLGVBQWUsZ0JBQWdCO0FBQ3RDLE9BQU9DLGdCQUFnQixxQ0FBcUM7QUFDNUQsU0FBU0Msd0JBQXdCLFFBQVEsbUNBQW1DO0FBQzVFLE9BQU9DLDRCQUE0Qiw4Q0FBOEM7QUFDakYsT0FBT0MscUJBQXFCLHNCQUFzQjtBQUNsRCxPQUFPQyxvQkFBb0IscUJBQXFCO0FBQ2hELE9BQU9DLDZCQUE2Qiw4QkFBOEI7QUFDbEUsT0FBT0MsMEJBQTBCLDJCQUEyQjtBQUM1RCxPQUFPQyw0QkFBNEIsNkJBQTZCO0FBRWhFLE9BQU9DLHFCQUFxQix1Q0FBdUM7QUFDbkUsT0FBT0MsNEJBQTRCLDhDQUE4QztBQUNqRixPQUFPQyx5QkFBeUIsMkNBQTJDO0FBRTNFLFNBQVNDLE9BQU8sUUFBUSwrQkFBK0I7QUFFdkQsU0FBU0MsZUFBZSxRQUFRLHlDQUF5QztBQUN6RSxTQUFTQyxpQkFBaUIsUUFBUSx3QkFBd0I7QUFFMUQsSUFBTSxBQUFFQyxXQUFh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