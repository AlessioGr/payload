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
var _pluralizeesm = /*#__PURE__*/ _interop_require_default(require("pluralize-esm"));
var _formatName = /*#__PURE__*/ _interop_require_default(require("../../graphql/utilities/formatName"));
var _buildGlobalFields = require("../../versions/buildGlobalFields");
var _buildPaginatedListType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildPaginatedListType"));
var _findOne = /*#__PURE__*/ _interop_require_default(require("./resolvers/findOne"));
var _update = /*#__PURE__*/ _interop_require_default(require("./resolvers/update"));
var _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./resolvers/findVersionByID"));
var _findVersions = /*#__PURE__*/ _interop_require_default(require("./resolvers/findVersions"));
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./resolvers/restoreVersion"));
var _buildObjectType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildObjectType"));
var _buildMutationInputType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildMutationInputType"));
var _buildWhereInputType = /*#__PURE__*/ _interop_require_default(require("../../graphql/schema/buildWhereInputType"));
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
var singular = _pluralizeesm.default.singular;
function initGlobalsGraphQL(payload) {
    Object.keys(payload.globals.config).forEach(function(slug) {
        var _graphQL, _versions;
        var global = payload.globals.config[slug];
        var fields = global.fields, versions = global.versions, graphQL = global.graphQL;
        if (graphQL === false) {
            return;
        }
        var formattedName = ((_graphQL = graphQL) === null || _graphQL === void 0 ? void 0 : _graphQL.name) ? graphQL.name : singular((0, _formatLabels.toWords)(global.slug, true));
        var forceNullableObjectType = Boolean((_versions = versions) === null || _versions === void 0 ? void 0 : _versions.drafts);
        if (!payload.globals.graphQL) payload.globals.graphQL = {};
        payload.globals.graphQL[slug] = {
            type: (0, _buildObjectType.default)({
                payload: payload,
                name: formattedName,
                parentName: formattedName,
                fields: fields,
                forceNullable: forceNullableObjectType
            }),
            mutationInputType: new _graphql.GraphQLNonNull((0, _buildMutationInputType.default)(payload, formattedName, fields, formattedName))
        };
        payload.Query.fields[formattedName] = {
            type: payload.globals.graphQL[slug].type,
            args: _object_spread({
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
            resolve: (0, _findOne.default)(global)
        };
        payload.Mutation.fields["update".concat(formattedName)] = {
            type: payload.globals.graphQL[slug].type,
            args: _object_spread({
                data: {
                    type: payload.globals.graphQL[slug].mutationInputType
                },
                draft: {
                    type: _graphql.GraphQLBoolean
                }
            }, payload.config.localization ? {
                locale: {
                    type: payload.types.localeInputType
                }
            } : {}),
            resolve: (0, _update.default)(global)
        };
        payload.Query.fields["docAccess".concat(formattedName)] = {
            type: (0, _buildPoliciesType.buildPolicyType)({
                typeSuffix: "DocAccess",
                entity: global,
                type: "global",
                scope: "docAccess"
            }),
            resolve: (0, _docAccess.docAccessResolver)(global)
        };
        if (global.versions) {
            var versionGlobalFields = _to_consumable_array((0, _buildGlobalFields.buildVersionGlobalFields)(global)).concat([
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
            payload.globals.graphQL[slug].versionType = (0, _buildObjectType.default)({
                payload: payload,
                name: "".concat(formattedName, "Version"),
                parentName: "".concat(formattedName, "Version"),
                fields: versionGlobalFields,
                forceNullable: forceNullableObjectType
            });
            payload.Query.fields["version".concat((0, _formatName.default)(formattedName))] = {
                type: payload.globals.graphQL[slug].versionType,
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
                resolve: (0, _findVersionByID.default)(global)
            };
            payload.Query.fields["versions".concat(formattedName)] = {
                type: (0, _buildPaginatedListType.default)("versions".concat((0, _formatName.default)(formattedName)), payload.globals.graphQL[slug].versionType),
                args: _object_spread_props(_object_spread({
                    where: {
                        type: (0, _buildWhereInputType.default)("versions".concat(formattedName), versionGlobalFields, "versions".concat(formattedName))
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
                resolve: (0, _findVersions.default)(global)
            };
            payload.Mutation.fields["restoreVersion".concat((0, _formatName.default)(formattedName))] = {
                type: payload.globals.graphQL[slug].type,
                args: {
                    id: {
                        type: _graphql.GraphQLString
                    }
                },
                resolve: (0, _restoreVersion.default)(global)
            };
        }
    });
}
var _default = initGlobalsGraphQL;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgR3JhcGhRTEJvb2xlYW4sIEdyYXBoUUxJbnQsIEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMU3RyaW5nIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZS1lc20nO1xuaW1wb3J0IGZvcm1hdE5hbWUgZnJvbSAnLi4vLi4vZ3JhcGhxbC91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMgfSBmcm9tICcuLi8uLi92ZXJzaW9ucy9idWlsZEdsb2JhbEZpZWxkcyc7XG5pbXBvcnQgYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZFBhZ2luYXRlZExpc3RUeXBlJztcbmltcG9ydCBmaW5kT25lUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvZmluZE9uZSc7XG5pbXBvcnQgdXBkYXRlUmVzb2x2ZXIgZnJvbSAnLi9yZXNvbHZlcnMvdXBkYXRlJztcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SURSZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9maW5kVmVyc2lvbkJ5SUQnO1xuaW1wb3J0IGZpbmRWZXJzaW9uc1Jlc29sdmVyIGZyb20gJy4vcmVzb2x2ZXJzL2ZpbmRWZXJzaW9ucyc7XG5pbXBvcnQgcmVzdG9yZVZlcnNpb25SZXNvbHZlciBmcm9tICcuL3Jlc29sdmVycy9yZXN0b3JlVmVyc2lvbic7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgYnVpbGRPYmplY3RUeXBlIGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hL2J1aWxkT2JqZWN0VHlwZSc7XG5pbXBvcnQgYnVpbGRNdXRhdGlvbklucHV0VHlwZSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZE11dGF0aW9uSW5wdXRUeXBlJztcbmltcG9ydCBidWlsZFdoZXJlSW5wdXRUeXBlIGZyb20gJy4uLy4uL2dyYXBocWwvc2NoZW1hL2J1aWxkV2hlcmVJbnB1dFR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHRvV29yZHMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvZm9ybWF0TGFiZWxzJztcbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBidWlsZFBvbGljeVR5cGUgfSBmcm9tICcuLi8uLi9ncmFwaHFsL3NjaGVtYS9idWlsZFBvbGljaWVzVHlwZSc7XG5pbXBvcnQgeyBkb2NBY2Nlc3NSZXNvbHZlciB9IGZyb20gJy4vcmVzb2x2ZXJzL2RvY0FjY2Vzcyc7XG5cbmNvbnN0IHsgc2luZ3VsYXIgfSA9IHBsdXJhbGl6ZTtcblxuZnVuY3Rpb24gaW5pdEdsb2JhbHNHcmFwaFFMKHBheWxvYWQ6IFBheWxvYWQpOiB2b2lkIHtcbiAgT2JqZWN0LmtleXMocGF5bG9hZC5nbG9iYWxzLmNvbmZpZykuZm9yRWFjaCgoc2x1ZykgPT4ge1xuICAgIGNvbnN0IGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnID0gcGF5bG9hZC5nbG9iYWxzLmNvbmZpZ1tzbHVnXTtcbiAgICBjb25zdCB7XG4gICAgICBmaWVsZHMsXG4gICAgICB2ZXJzaW9ucyxcbiAgICAgIGdyYXBoUUwsXG4gICAgfSA9IGdsb2JhbDtcblxuICAgIGlmIChncmFwaFFMID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdHRlZE5hbWUgPSBncmFwaFFMPy5uYW1lID8gZ3JhcGhRTC5uYW1lIDogc2luZ3VsYXIodG9Xb3JkcyhnbG9iYWwuc2x1ZywgdHJ1ZSkpO1xuXG4gICAgY29uc3QgZm9yY2VOdWxsYWJsZU9iamVjdFR5cGUgPSBCb29sZWFuKHZlcnNpb25zPy5kcmFmdHMpO1xuXG4gICAgaWYgKCFwYXlsb2FkLmdsb2JhbHMuZ3JhcGhRTCkgcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUwgPSB7fTtcblxuICAgIHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddID0ge1xuICAgICAgdHlwZTogYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgbmFtZTogZm9ybWF0dGVkTmFtZSxcbiAgICAgICAgcGFyZW50TmFtZTogZm9ybWF0dGVkTmFtZSxcbiAgICAgICAgZmllbGRzLFxuICAgICAgICBmb3JjZU51bGxhYmxlOiBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSxcbiAgICAgIH0pLFxuICAgICAgbXV0YXRpb25JbnB1dFR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChidWlsZE11dGF0aW9uSW5wdXRUeXBlKFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICBmb3JtYXR0ZWROYW1lLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGZvcm1hdHRlZE5hbWUsXG4gICAgICApKSxcbiAgICB9O1xuXG4gICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbZm9ybWF0dGVkTmFtZV0gPSB7XG4gICAgICB0eXBlOiBwYXlsb2FkLmdsb2JhbHMuZ3JhcGhRTFtzbHVnXS50eXBlLFxuICAgICAgYXJnczoge1xuICAgICAgICBkcmFmdDogeyB0eXBlOiBHcmFwaFFMQm9vbGVhbiB9LFxuICAgICAgICAuLi4ocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8ge1xuICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgIGZhbGxiYWNrTG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMuZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgfSA6IHt9KSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiBmaW5kT25lUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICB9O1xuXG4gICAgcGF5bG9hZC5NdXRhdGlvbi5maWVsZHNbYHVwZGF0ZSR7Zm9ybWF0dGVkTmFtZX1gXSA9IHtcbiAgICAgIHR5cGU6IHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddLnR5cGUsXG4gICAgICBhcmdzOiB7XG4gICAgICAgIGRhdGE6IHsgdHlwZTogcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUxbc2x1Z10ubXV0YXRpb25JbnB1dFR5cGUgfSxcbiAgICAgICAgZHJhZnQ6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiA/IHtcbiAgICAgICAgICBsb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgfSA6IHt9KSxcbiAgICAgIH0sXG4gICAgICByZXNvbHZlOiB1cGRhdGVSZXNvbHZlcihnbG9iYWwpLFxuICAgIH07XG5cbiAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgZG9jQWNjZXNzJHtmb3JtYXR0ZWROYW1lfWBdID0ge1xuICAgICAgdHlwZTogYnVpbGRQb2xpY3lUeXBlKHtcbiAgICAgICAgdHlwZVN1ZmZpeDogJ0RvY0FjY2VzcycsXG4gICAgICAgIGVudGl0eTogZ2xvYmFsLFxuICAgICAgICB0eXBlOiAnZ2xvYmFsJyxcbiAgICAgICAgc2NvcGU6ICdkb2NBY2Nlc3MnLFxuICAgICAgfSksXG4gICAgICByZXNvbHZlOiBkb2NBY2Nlc3NSZXNvbHZlcihnbG9iYWwpLFxuICAgIH07XG5cbiAgICBpZiAoZ2xvYmFsLnZlcnNpb25zKSB7XG4gICAgICBjb25zdCB2ZXJzaW9uR2xvYmFsRmllbGRzOiBGaWVsZFtdID0gW1xuICAgICAgICAuLi5idWlsZFZlcnNpb25HbG9iYWxGaWVsZHMoZ2xvYmFsKSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgICAgbGFiZWw6ICdDcmVhdGVkIEF0JyxcbiAgICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgICAgICBsYWJlbDogJ1VwZGF0ZWQgQXQnLFxuICAgICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgfSxcbiAgICAgIF07XG5cbiAgICAgIHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddLnZlcnNpb25UeXBlID0gYnVpbGRPYmplY3RUeXBlKHtcbiAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgbmFtZTogYCR7Zm9ybWF0dGVkTmFtZX1WZXJzaW9uYCxcbiAgICAgICAgcGFyZW50TmFtZTogYCR7Zm9ybWF0dGVkTmFtZX1WZXJzaW9uYCxcbiAgICAgICAgZmllbGRzOiB2ZXJzaW9uR2xvYmFsRmllbGRzLFxuICAgICAgICBmb3JjZU51bGxhYmxlOiBmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSxcbiAgICAgIH0pO1xuXG4gICAgICBwYXlsb2FkLlF1ZXJ5LmZpZWxkc1tgdmVyc2lvbiR7Zm9ybWF0TmFtZShmb3JtYXR0ZWROYW1lKX1gXSA9IHtcbiAgICAgICAgdHlwZTogcGF5bG9hZC5nbG9iYWxzLmdyYXBoUUxbc2x1Z10udmVyc2lvblR5cGUsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgLi4uKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbiA/IHtcbiAgICAgICAgICAgIGxvY2FsZTogeyB0eXBlOiBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgICAgZmFsbGJhY2tMb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSB9LFxuICAgICAgICAgIH0gOiB7fSksXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyKGdsb2JhbCksXG4gICAgICB9O1xuICAgICAgcGF5bG9hZC5RdWVyeS5maWVsZHNbYHZlcnNpb25zJHtmb3JtYXR0ZWROYW1lfWBdID0ge1xuICAgICAgICB0eXBlOiBidWlsZFBhZ2luYXRlZExpc3RUeXBlKGB2ZXJzaW9ucyR7Zm9ybWF0TmFtZShmb3JtYXR0ZWROYW1lKX1gLCBwYXlsb2FkLmdsb2JhbHMuZ3JhcGhRTFtzbHVnXS52ZXJzaW9uVHlwZSksXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgdHlwZTogYnVpbGRXaGVyZUlucHV0VHlwZShcbiAgICAgICAgICAgICAgYHZlcnNpb25zJHtmb3JtYXR0ZWROYW1lfWAsXG4gICAgICAgICAgICAgIHZlcnNpb25HbG9iYWxGaWVsZHMsXG4gICAgICAgICAgICAgIGB2ZXJzaW9ucyR7Zm9ybWF0dGVkTmFtZX1gLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLihwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24gPyB7XG4gICAgICAgICAgICBsb2NhbGU6IHsgdHlwZTogcGF5bG9hZC50eXBlcy5sb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICAgIGZhbGxiYWNrTG9jYWxlOiB7IHR5cGU6IHBheWxvYWQudHlwZXMuZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUgfSxcbiAgICAgICAgICB9IDoge30pLFxuICAgICAgICAgIHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgICAgICAgIGxpbWl0OiB7IHR5cGU6IEdyYXBoUUxJbnQgfSxcbiAgICAgICAgICBzb3J0OiB7IHR5cGU6IEdyYXBoUUxTdHJpbmcgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZTogZmluZFZlcnNpb25zUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICAgIH07XG4gICAgICBwYXlsb2FkLk11dGF0aW9uLmZpZWxkc1tgcmVzdG9yZVZlcnNpb24ke2Zvcm1hdE5hbWUoZm9ybWF0dGVkTmFtZSl9YF0gPSB7XG4gICAgICAgIHR5cGU6IHBheWxvYWQuZ2xvYmFscy5ncmFwaFFMW3NsdWddLnR5cGUsXG4gICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICBpZDogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlc29sdmU6IHJlc3RvcmVWZXJzaW9uUmVzb2x2ZXIoZ2xvYmFsKSxcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEdsb2JhbHNHcmFwaFFMO1xuIl0sIm5hbWVzIjpbInNpbmd1bGFyIiwicGx1cmFsaXplIiwiaW5pdEdsb2JhbHNHcmFwaFFMIiwicGF5bG9hZCIsIk9iamVjdCIsImtleXMiLCJnbG9iYWxzIiwiY29uZmlnIiwiZm9yRWFjaCIsInNsdWciLCJncmFwaFFMIiwidmVyc2lvbnMiLCJnbG9iYWwiLCJmaWVsZHMiLCJmb3JtYXR0ZWROYW1lIiwibmFtZSIsInRvV29yZHMiLCJmb3JjZU51bGxhYmxlT2JqZWN0VHlwZSIsIkJvb2xlYW4iLCJkcmFmdHMiLCJ0eXBlIiwiYnVpbGRPYmplY3RUeXBlIiwicGFyZW50TmFtZSIsImZvcmNlTnVsbGFibGUiLCJtdXRhdGlvbklucHV0VHlwZSIsIkdyYXBoUUxOb25OdWxsIiwiYnVpbGRNdXRhdGlvbklucHV0VHlwZSIsIlF1ZXJ5IiwiYXJncyIsImRyYWZ0IiwiR3JhcGhRTEJvb2xlYW4iLCJsb2NhbGl6YXRpb24iLCJsb2NhbGUiLCJ0eXBlcyIsImxvY2FsZUlucHV0VHlwZSIsImZhbGxiYWNrTG9jYWxlIiwiZmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUiLCJyZXNvbHZlIiwiZmluZE9uZVJlc29sdmVyIiwiTXV0YXRpb24iLCJkYXRhIiwidXBkYXRlUmVzb2x2ZXIiLCJidWlsZFBvbGljeVR5cGUiLCJ0eXBlU3VmZml4IiwiZW50aXR5Iiwic2NvcGUiLCJkb2NBY2Nlc3NSZXNvbHZlciIsInZlcnNpb25HbG9iYWxGaWVsZHMiLCJidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMiLCJsYWJlbCIsInZlcnNpb25UeXBlIiwiZm9ybWF0TmFtZSIsImlkIiwiR3JhcGhRTFN0cmluZyIsImZpbmRWZXJzaW9uQnlJRFJlc29sdmVyIiwiYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSIsIndoZXJlIiwiYnVpbGRXaGVyZUlucHV0VHlwZSIsInBhZ2UiLCJHcmFwaFFMSW50IiwibGltaXQiLCJzb3J0IiwiZmluZFZlcnNpb25zUmVzb2x2ZXIiLCJyZXN0b3JlVmVyc2lvblJlc29sdmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBaUtwQzs7O2VBQUE7Ozt1QkFoSzBFO21FQUNwRDtpRUFDQztpQ0FDa0I7NkVBQ047OERBQ1A7NkRBQ0Q7c0VBQ1M7bUVBQ0g7cUVBQ0U7c0VBRVA7NkVBQ087MEVBQ0g7NEJBRVI7aUNBRVE7eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQU0sQUFBRUEsV0FBYUMscUJBQVMsQ0FBdEJEO0FBRVIsU0FBU0UsbUJBQW1CQyxPQUFnQjtJQUMxQ0MsT0FBT0MsSUFBSSxDQUFDRixRQUFRRyxPQUFPLENBQUNDLE1BQU0sRUFBRUMsT0FBTyxDQUFDLFNBQUNDO1lBWXJCQyxVQUVrQkM7UUFieEMsSUFBTUMsU0FBZ0NULFFBQVFHLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDRSxLQUFLO1FBQ2xFLElBQ0VJLFNBR0VELE9BSEZDLFFBQ0FGLFdBRUVDLE9BRkZELFVBQ0FELFVBQ0VFLE9BREZGO1FBR0YsSUFBSUEsWUFBWSxPQUFPO1lBQ3JCO1FBQ0Y7UUFFQSxJQUFNSSxnQkFBZ0JKLEVBQUFBLFdBQUFBLHFCQUFBQSwrQkFBQUEsU0FBU0ssSUFBSSxJQUFHTCxRQUFRSyxJQUFJ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