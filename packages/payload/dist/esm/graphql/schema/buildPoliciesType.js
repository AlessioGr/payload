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
import { GraphQLJSONObject } from "graphql-type-json";
import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType } from "graphql";
import formatName from "../utilities/formatName";
import { toWords } from "../../utilities/formatLabels";
var buildFields = function(label, fieldsToBuild) {
    return fieldsToBuild.reduce(function(builtFields, field) {
        if (!field.hidden) {
            if (field.name) {
                var fieldName = formatName(field.name);
                var objectTypeFields = [
                    "create",
                    "read",
                    "update",
                    "delete"
                ].reduce(function(operations, operation) {
                    var capitalizedOperation = operation.charAt(0).toUpperCase() + operation.slice(1);
                    return _object_spread_props(_object_spread({}, operations), _define_property({}, operation, {
                        type: new GraphQLObjectType({
                            name: "".concat(label, "_").concat(fieldName, "_").concat(capitalizedOperation),
                            fields: {
                                permission: {
                                    type: new GraphQLNonNull(GraphQLBoolean)
                                }
                            }
                        })
                    }));
                }, {});
                if (field.fields) {
                    objectTypeFields.fields = {
                        type: new GraphQLObjectType({
                            name: "".concat(label, "_").concat(fieldName, "_Fields"),
                            fields: buildFields("".concat(label, "_").concat(fieldName), field.fields)
                        })
                    };
                }
                return _object_spread_props(_object_spread({}, builtFields), _define_property({}, field.name, {
                    type: new GraphQLObjectType({
                        name: "".concat(label, "_").concat(fieldName),
                        fields: objectTypeFields
                    })
                }));
            }
            if (!field.name && field.fields) {
                var subFields = buildFields(label, field.fields);
                return _object_spread({}, builtFields, subFields);
            }
            if (field.type === "tabs") {
                return field.tabs.reduce(function(fieldsWithTabFields, tab) {
                    return _object_spread({}, fieldsWithTabFields, buildFields(label, tab.fields));
                }, _object_spread({}, builtFields));
            }
        }
        return builtFields;
    }, {});
};
export var buildEntityPolicy = function(args) {
    var name = args.name, entityFields = args.entityFields, operations = args.operations, scope = args.scope;
    var fieldsTypeName = toWords("".concat(name, "-").concat(scope || "", "-Fields"), true);
    var fields = {
        fields: {
            type: new GraphQLObjectType({
                name: fieldsTypeName,
                fields: buildFields(fieldsTypeName, entityFields)
            })
        }
    };
    operations.forEach(function(operation) {
        var operationTypeName = toWords("".concat(name, "-").concat(operation, "-").concat(scope || "Access"), true);
        fields[operation] = {
            type: new GraphQLObjectType({
                name: operationTypeName,
                fields: {
                    permission: {
                        type: new GraphQLNonNull(GraphQLBoolean)
                    },
                    where: {
                        type: GraphQLJSONObject
                    }
                }
            })
        };
    });
    return fields;
};
export function buildPolicyType(args) {
    var _global_graphQL, _global, _entity_graphQL, _entity;
    var typeSuffix = args.typeSuffix, entity = args.entity, type = args.type, scope = args.scope;
    var slug = entity.slug, graphQL = entity.graphQL, fields = entity.fields, versions = entity.versions;
    var operations = [];
    if (graphQL === false) return null;
    if (type === "collection") {
        operations = [
            "create",
            "read",
            "update",
            "delete"
        ];
        if (entity.auth && typeof entity.auth === "object" && typeof entity.auth.maxLoginAttempts !== "undefined" && entity.auth.maxLoginAttempts !== 0) {
            operations.push("unlock");
        }
        if (versions) {
            operations.push("readVersions");
        }
        var collectionTypeName = formatName("".concat(slug).concat(typeSuffix || ""));
        return new GraphQLObjectType({
            name: collectionTypeName,
            fields: buildEntityPolicy({
                name: slug,
                entityFields: fields,
                operations: operations,
                scope: scope
            })
        });
    }
    // else create global type
    operations = [
        "read",
        "update"
    ];
    if (entity.versions) {
        operations.push("readVersions");
    }
    var globalTypeName = formatName("".concat(((_global = global) === null || _global === void 0 ? void 0 : (_global_graphQL = _global.graphQL) === null || _global_graphQL === void 0 ? void 0 : _global_graphQL.name) || slug).concat(typeSuffix || ""));
    return new GraphQLObjectType({
        name: globalTypeName,
        fields: buildEntityPolicy({
            name: entity.graphQL ? ((_entity = entity) === null || _entity === void 0 ? void 0 : (_entity_graphQL = _entity.graphQL) === null || _entity_graphQL === void 0 ? void 0 : _entity_graphQL.name) || slug : slug,
            entityFields: entity.fields,
            operations: operations,
            scope: scope
        })
    });
}
export default function buildPoliciesType(payload) {
    var fields = {
        canAccessAdmin: {
            type: new GraphQLNonNull(GraphQLBoolean)
        }
    };
    Object.values(payload.config.collections).forEach(function(collection) {
        if (collection.graphQL === false) {
            return;
        }
        var collectionPolicyType = buildPolicyType({
            typeSuffix: "Access",
            entity: collection,
            type: "collection"
        });
        fields[formatName(collection.slug)] = {
            type: collectionPolicyType
        };
    });
    Object.values(payload.config.globals).forEach(function(global1) {
        var globalPolicyType = buildPolicyType({
            typeSuffix: "Access",
            entity: global1,
            type: "global"
        });
        fields[formatName(global1.slug)] = {
            type: globalPolicyType
        };
    });
    return new GraphQLObjectType({
        name: "Access",
        fields: fields
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZFBvbGljaWVzVHlwZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMSlNPTk9iamVjdCB9IGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcbmltcG9ydCB7IEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMTm9uTnVsbCwgR3JhcGhRTE9iamVjdFR5cGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJztcbmltcG9ydCB7IENvbGxlY3Rpb25Db25maWcsIFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnLCBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgdG9Xb3JkcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMnO1xuXG50eXBlIE9wZXJhdGlvblR5cGUgPSAnY3JlYXRlJyB8ICdyZWFkJyB8ICd1cGRhdGUnIHwgJ2RlbGV0ZScgfCAndW5sb2NrJyB8ICdyZWFkVmVyc2lvbnMnO1xuXG50eXBlIEFjY2Vzc1Njb3BlcyA9ICdkb2NBY2Nlc3MnIHwgdW5kZWZpbmVkXG5cbnR5cGUgT2JqZWN0VHlwZUZpZWxkcyA9IHtcbiAgW2tleSBpbiBPcGVyYXRpb25UeXBlIHwgJ2ZpZWxkcyddPzogeyB0eXBlOiBHcmFwaFFMT2JqZWN0VHlwZSB9O1xufVxuXG5jb25zdCBidWlsZEZpZWxkcyA9IChsYWJlbCwgZmllbGRzVG9CdWlsZCkgPT4gZmllbGRzVG9CdWlsZC5yZWR1Y2UoKGJ1aWx0RmllbGRzLCBmaWVsZCkgPT4ge1xuICBpZiAoIWZpZWxkLmhpZGRlbikge1xuICAgIGlmIChmaWVsZC5uYW1lKSB7XG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSBmb3JtYXROYW1lKGZpZWxkLm5hbWUpO1xuXG4gICAgICBjb25zdCBvYmplY3RUeXBlRmllbGRzOiBPYmplY3RUeXBlRmllbGRzID0gWydjcmVhdGUnLCAncmVhZCcsICd1cGRhdGUnLCAnZGVsZXRlJ10ucmVkdWNlKChvcGVyYXRpb25zLCBvcGVyYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgY2FwaXRhbGl6ZWRPcGVyYXRpb24gPSBvcGVyYXRpb24uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBvcGVyYXRpb24uc2xpY2UoMSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5vcGVyYXRpb25zLFxuICAgICAgICAgIFtvcGVyYXRpb25dOiB7XG4gICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgICAgICAgICBuYW1lOiBgJHtsYWJlbH1fJHtmaWVsZE5hbWV9XyR7Y2FwaXRhbGl6ZWRPcGVyYXRpb259YCxcbiAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbjoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxCb29sZWFuKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgaWYgKGZpZWxkLmZpZWxkcykge1xuICAgICAgICBvYmplY3RUeXBlRmllbGRzLmZpZWxkcyA9IHtcbiAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgICAgICAgbmFtZTogYCR7bGFiZWx9XyR7ZmllbGROYW1lfV9GaWVsZHNgLFxuICAgICAgICAgICAgZmllbGRzOiBidWlsZEZpZWxkcyhgJHtsYWJlbH1fJHtmaWVsZE5hbWV9YCwgZmllbGQuZmllbGRzKSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYnVpbHRGaWVsZHMsXG4gICAgICAgIFtmaWVsZC5uYW1lXToge1xuICAgICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBgJHtsYWJlbH1fJHtmaWVsZE5hbWV9YCxcbiAgICAgICAgICAgIGZpZWxkczogb2JqZWN0VHlwZUZpZWxkcyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFmaWVsZC5uYW1lICYmIGZpZWxkLmZpZWxkcykge1xuICAgICAgY29uc3Qgc3ViRmllbGRzID0gYnVpbGRGaWVsZHMobGFiZWwsIGZpZWxkLmZpZWxkcyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1aWx0RmllbGRzLFxuICAgICAgICAuLi5zdWJGaWVsZHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAgIHJldHVybiBmaWVsZC50YWJzLnJlZHVjZSgoZmllbGRzV2l0aFRhYkZpZWxkcywgdGFiKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZmllbGRzV2l0aFRhYkZpZWxkcyxcbiAgICAgICAgICAuLi5idWlsZEZpZWxkcyhsYWJlbCwgdGFiLmZpZWxkcyksXG4gICAgICAgIH07XG4gICAgICB9LCB7IC4uLmJ1aWx0RmllbGRzIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYnVpbHRGaWVsZHM7XG59LCB7fSk7XG5cbnR5cGUgQnVpbGRFbnRpdHlQb2xpY3kgPSB7XG4gIG5hbWU6IHN0cmluZ1xuICBlbnRpdHlGaWVsZHM6IEZpZWxkW11cbiAgb3BlcmF0aW9uczogT3BlcmF0aW9uVHlwZVtdXG4gIHNjb3BlOiBBY2Nlc3NTY29wZXNcbn1cbmV4cG9ydCBjb25zdCBidWlsZEVudGl0eVBvbGljeSA9IChhcmdzOiBCdWlsZEVudGl0eVBvbGljeSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGVudGl0eUZpZWxkcywgb3BlcmF0aW9ucywgc2NvcGUgfSA9IGFyZ3M7XG5cbiAgY29uc3QgZmllbGRzVHlwZU5hbWUgPSB0b1dvcmRzKGAke25hbWV9LSR7c2NvcGUgfHwgJyd9LUZpZWxkc2AsIHRydWUpO1xuICBjb25zdCBmaWVsZHMgPSB7XG4gICAgZmllbGRzOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgICAgICBuYW1lOiBmaWVsZHNUeXBlTmFtZSxcbiAgICAgICAgZmllbGRzOiBidWlsZEZpZWxkcyhmaWVsZHNUeXBlTmFtZSwgZW50aXR5RmllbGRzKSxcbiAgICAgIH0pLFxuICAgIH0sXG4gIH07XG5cbiAgb3BlcmF0aW9ucy5mb3JFYWNoKChvcGVyYXRpb24pID0+IHtcbiAgICBjb25zdCBvcGVyYXRpb25UeXBlTmFtZSA9IHRvV29yZHMoYCR7bmFtZX0tJHtvcGVyYXRpb259LSR7c2NvcGUgfHwgJ0FjY2Vzcyd9YCwgdHJ1ZSk7XG5cbiAgICBmaWVsZHNbb3BlcmF0aW9uXSA9IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgICAgIG5hbWU6IG9wZXJhdGlvblR5cGVOYW1lLFxuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBwZXJtaXNzaW9uOiB7IHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMQm9vbGVhbikgfSxcbiAgICAgICAgICB3aGVyZTogeyB0eXBlOiBHcmFwaFFMSlNPTk9iamVjdCB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpZWxkcztcbn07XG5cbnR5cGUgQnVpbGRQb2xpY3lUeXBlID0ge1xuICB0eXBlU3VmZml4Pzogc3RyaW5nXG4gIHNjb3BlPzogQWNjZXNzU2NvcGVzXG59ICYgKHtcbiAgZW50aXR5OiBDb2xsZWN0aW9uQ29uZmlnXG4gIHR5cGU6ICdjb2xsZWN0aW9uJ1xufSB8IHtcbiAgZW50aXR5OiBHbG9iYWxDb25maWdcbiAgdHlwZTogJ2dsb2JhbCdcbn0pXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRQb2xpY3lUeXBlKGFyZ3M6IEJ1aWxkUG9saWN5VHlwZSk6IEdyYXBoUUxPYmplY3RUeXBlIHtcbiAgY29uc3QgeyB0eXBlU3VmZml4LCBlbnRpdHksIHR5cGUsIHNjb3BlIH0gPSBhcmdzO1xuICBjb25zdCB7IHNsdWcsIGdyYXBoUUwsIGZpZWxkcywgdmVyc2lvbnMgfSA9IGVudGl0eTtcblxuICBsZXQgb3BlcmF0aW9ucyA9IFtdO1xuXG4gIGlmIChncmFwaFFMID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHR5cGUgPT09ICdjb2xsZWN0aW9uJykge1xuICAgIG9wZXJhdGlvbnMgPSBbJ2NyZWF0ZScsICdyZWFkJywgJ3VwZGF0ZScsICdkZWxldGUnXTtcblxuICAgIGlmIChlbnRpdHkuYXV0aCAmJiAodHlwZW9mIGVudGl0eS5hdXRoID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZW50aXR5LmF1dGgubWF4TG9naW5BdHRlbXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgZW50aXR5LmF1dGgubWF4TG9naW5BdHRlbXB0cyAhPT0gMCkpIHtcbiAgICAgIG9wZXJhdGlvbnMucHVzaCgndW5sb2NrJyk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb25zKSB7XG4gICAgICBvcGVyYXRpb25zLnB1c2goJ3JlYWRWZXJzaW9ucycpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbGxlY3Rpb25UeXBlTmFtZSA9IGZvcm1hdE5hbWUoYCR7c2x1Z30ke3R5cGVTdWZmaXggfHwgJyd9YCk7XG5cbiAgICByZXR1cm4gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgICAgIG5hbWU6IGNvbGxlY3Rpb25UeXBlTmFtZSxcbiAgICAgIGZpZWxkczogYnVpbGRFbnRpdHlQb2xpY3koe1xuICAgICAgICBuYW1lOiBzbHVnLFxuICAgICAgICBlbnRpdHlGaWVsZHM6IGZpZWxkcyxcbiAgICAgICAgb3BlcmF0aW9ucyxcbiAgICAgICAgc2NvcGUsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGVsc2UgY3JlYXRlIGdsb2JhbCB0eXBlXG4gIG9wZXJhdGlvbnMgPSBbJ3JlYWQnLCAndXBkYXRlJ107XG5cbiAgaWYgKGVudGl0eS52ZXJzaW9ucykge1xuICAgIG9wZXJhdGlvbnMucHVzaCgncmVhZFZlcnNpb25zJyk7XG4gIH1cblxuICBjb25zdCBnbG9iYWxUeXBlTmFtZSA9IGZvcm1hdE5hbWUoYCR7Z2xvYmFsPy5ncmFwaFFMPy5uYW1lIHx8IHNsdWd9JHt0eXBlU3VmZml4IHx8ICcnfWApO1xuXG4gIHJldHVybiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgIG5hbWU6IGdsb2JhbFR5cGVOYW1lLFxuICAgIGZpZWxkczogYnVpbGRFbnRpdHlQb2xpY3koe1xuICAgICAgbmFtZTogKGVudGl0eS5ncmFwaFFMKSA/IGVudGl0eT8uZ3JhcGhRTD8ubmFtZSB8fCBzbHVnIDogc2x1ZyxcbiAgICAgIGVudGl0eUZpZWxkczogZW50aXR5LmZpZWxkcyxcbiAgICAgIG9wZXJhdGlvbnMsXG4gICAgICBzY29wZSxcbiAgICB9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkUG9saWNpZXNUeXBlKHBheWxvYWQ6IFBheWxvYWQpOiBHcmFwaFFMT2JqZWN0VHlwZSB7XG4gIGNvbnN0IGZpZWxkcyA9IHtcbiAgICBjYW5BY2Nlc3NBZG1pbjoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxCb29sZWFuKSxcbiAgICB9LFxuICB9O1xuXG4gIE9iamVjdC52YWx1ZXMocGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMpLmZvckVhY2goKGNvbGxlY3Rpb246IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcpID0+IHtcbiAgICBpZiAoY29sbGVjdGlvbi5ncmFwaFFMID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb2xsZWN0aW9uUG9saWN5VHlwZSA9IGJ1aWxkUG9saWN5VHlwZSh7XG4gICAgICB0eXBlU3VmZml4OiAnQWNjZXNzJyxcbiAgICAgIGVudGl0eTogY29sbGVjdGlvbixcbiAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICB9KTtcblxuICAgIGZpZWxkc1tmb3JtYXROYW1lKGNvbGxlY3Rpb24uc2x1ZyldID0ge1xuICAgICAgdHlwZTogY29sbGVjdGlvblBvbGljeVR5cGUsXG4gICAgfTtcbiAgfSk7XG5cbiAgT2JqZWN0LnZhbHVlcyhwYXlsb2FkLmNvbmZpZy5nbG9iYWxzKS5mb3JFYWNoKChnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZykgPT4ge1xuICAgIGNvbnN0IGdsb2JhbFBvbGljeVR5cGUgPSBidWlsZFBvbGljeVR5cGUoe1xuICAgICAgdHlwZVN1ZmZpeDogJ0FjY2VzcycsXG4gICAgICBlbnRpdHk6IGdsb2JhbCxcbiAgICAgIHR5cGU6ICdnbG9iYWwnLFxuICAgIH0pO1xuXG4gICAgZmllbGRzW2Zvcm1hdE5hbWUoZ2xvYmFsLnNsdWcpXSA9IHtcbiAgICAgIHR5cGU6IGdsb2JhbFBvbGljeVR5cGUsXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBHcmFwaFFMT2JqZWN0VHlwZSh7XG4gICAgbmFtZTogJ0FjY2VzcycsXG4gICAgZmllbGRzLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJHcmFwaFFMSlNPTk9iamVjdCIsIkdyYXBoUUxCb29sZWFuIiwiR3JhcGhRTE5vbk51bGwiLCJHcmFwaFFMT2JqZWN0VHlwZSIsImZvcm1hdE5hbWUiLCJ0b1dvcmRzIiwiYnVpbGRGaWVsZHMiLCJsYWJlbCIsImZpZWxkc1RvQnVpbGQiLCJyZWR1Y2UiLCJidWlsdEZpZWxkcyIsImZpZWxkIiwiaGlkZGVuIiwibmFtZSIsImZpZWxkTmFtZSIsIm9iamVjdFR5cGVGaWVsZHMiLCJvcGVyYXRpb25zIiwib3BlcmF0aW9uIiwiY2FwaXRhbGl6ZWRPcGVyYXRpb24iLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwidHlwZSIsImZpZWxkcyIsInBlcm1pc3Npb24iLCJzdWJGaWVsZHMiLCJ0YWJzIiwiZmllbGRzV2l0aFRhYkZpZWxkcyIsInRhYiIsImJ1aWxkRW50aXR5UG9saWN5IiwiYXJncyIsImVudGl0eUZpZWxkcyIsInNjb3BlIiwiZmllbGRzVHlwZU5hbWUiLCJmb3JFYWNoIiwib3BlcmF0aW9uVHlwZU5hbWUiLCJ3aGVyZSIsImJ1aWxkUG9saWN5VHlwZSIsImdsb2JhbCIsImVudGl0eSIsInR5cGVTdWZmaXgiLCJzbHVnIiwiZ3JhcGhRTCIsInZlcnNpb25zIiwiYXV0aCIsIm1heExvZ2luQXR0ZW1wdHMiLCJwdXNoIiwiY29sbGVjdGlvblR5cGVOYW1lIiwiZ2xvYmFsVHlwZU5hbWUiLCJidWlsZFBvbGljaWVzVHlwZSIsInBheWxvYWQiLCJjYW5BY2Nlc3NBZG1pbiIsIk9iamVjdCIsInZhbHVlcyIsImNvbmZpZyIsImNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25Qb2xpY3lUeXBlIiwiZ2xvYmFscyIsImdsb2JhbFBvbGljeVR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxpQkFBaUIsUUFBUSxvQkFBb0I7QUFDdEQsU0FBU0MsY0FBYyxFQUFFQyxjQUFjLEVBQUVDLGlCQUFpQixRQUFRLFVBQVU7QUFDNUUsT0FBT0MsZ0JBQWdCLDBCQUEwQjtBQUtqRCxTQUFTQyxPQUFPLFFBQVEsK0JBQStCO0FBVXZELElBQU1DLGNBQWMsU0FBQ0MsT0FBT0M7V0FBa0JBLGNBQWNDLE1BQU0sQ0FBQyxTQUFDQyxhQUFhQztRQUMv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