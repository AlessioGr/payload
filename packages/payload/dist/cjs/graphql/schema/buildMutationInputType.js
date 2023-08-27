/* eslint-disable no-use-before-define */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getCollectionIDType: function() {
        return getCollectionIDType;
    },
    default: function() {
        return _default;
    }
});
var _graphql = require("graphql");
var _graphqltypejson = require("graphql-type-json");
var _withNullableType = /*#__PURE__*/ _interop_require_default(require("./withNullableType"));
var _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
var _combineParentName = /*#__PURE__*/ _interop_require_default(require("../utilities/combineParentName"));
var _types = require("../../fields/config/types");
var _formatLabels = require("../../utilities/formatLabels");
var _groupOrTabHasRequiredSubfield = require("../../utilities/groupOrTabHasRequiredSubfield");
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
var getCollectionIDType = function(config) {
    var idField = config.fields.find(function(field) {
        return (0, _types.fieldAffectsData)(field) && field.name === "id";
    });
    if (!idField) return _graphql.GraphQLString;
    switch(idField.type){
        case "number":
            return _graphql.GraphQLInt;
        default:
            return _graphql.GraphQLString;
    }
};
function buildMutationInputType(payload, name, fields, parentName) {
    var forceNullable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    var fieldToSchemaMap = {
        number: function(inputObjectTypeConfig, field) {
            var type = field.name === "id" ? _graphql.GraphQLInt : _graphql.GraphQLFloat;
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, field.hasMany === true ? new _graphql.GraphQLList(type) : type, forceNullable)
            }));
        },
        text: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        email: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        textarea: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        richText: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphqltypejson.GraphQLJSON, forceNullable)
            }));
        },
        code: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        json: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphqltypejson.GraphQLJSON, forceNullable)
            }));
        },
        date: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        upload: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        radio: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, _graphql.GraphQLString, forceNullable)
            }));
        },
        point: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: (0, _withNullableType.default)(field, new _graphql.GraphQLList(_graphql.GraphQLFloat), forceNullable)
            }));
        },
        checkbox: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: _graphql.GraphQLBoolean
            }));
        },
        select: function(inputObjectTypeConfig, field) {
            var formattedName = "".concat((0, _combineParentName.default)(parentName, field.name), "_MutationInput");
            var type = new _graphql.GraphQLEnumType({
                name: formattedName,
                values: field.options.reduce(function(values, option) {
                    if (typeof option === "object" && option.value) {
                        return _object_spread_props(_object_spread({}, values), _define_property({}, (0, _formatName.default)(option.value), {
                            value: option.value
                        }));
                    }
                    if (typeof option === "string") {
                        return _object_spread_props(_object_spread({}, values), _define_property({}, option, {
                            value: option
                        }));
                    }
                    return values;
                }, {})
            });
            type = field.hasMany ? new _graphql.GraphQLList(type) : type;
            type = (0, _withNullableType.default)(field, type, forceNullable);
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: type
            }));
        },
        relationship: function(inputObjectTypeConfig, field) {
            var relationTo = field.relationTo;
            var type;
            if (Array.isArray(relationTo)) {
                var fullName = "".concat((0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true)), "RelationshipInput");
                type = new _graphql.GraphQLInputObjectType({
                    name: fullName,
                    fields: {
                        relationTo: {
                            type: new _graphql.GraphQLEnumType({
                                name: "".concat(fullName, "RelationTo"),
                                values: relationTo.reduce(function(values, option) {
                                    return _object_spread_props(_object_spread({}, values), _define_property({}, (0, _formatName.default)(option), {
                                        value: option
                                    }));
                                }, {})
                            })
                        },
                        value: {
                            type: _graphqltypejson.GraphQLJSON
                        }
                    }
                });
            } else {
                type = getCollectionIDType(payload.collections[relationTo].config);
            }
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: field.hasMany ? new _graphql.GraphQLList(type) : type
            }));
        },
        array: function(inputObjectTypeConfig, field) {
            var fullName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            var type = buildMutationInputType(payload, fullName, field.fields, fullName);
            type = new _graphql.GraphQLList((0, _withNullableType.default)(field, type, forceNullable));
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: type
            }));
        },
        group: function(inputObjectTypeConfig, field) {
            var requiresAtLeastOneField = (0, _groupOrTabHasRequiredSubfield.groupOrTabHasRequiredSubfield)(field);
            var fullName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(field.name, true));
            var type = buildMutationInputType(payload, fullName, field.fields, fullName);
            if (requiresAtLeastOneField) type = new _graphql.GraphQLNonNull(type);
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: type
            }));
        },
        blocks: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: _graphqltypejson.GraphQLJSON
            }));
        },
        row: function(inputObjectTypeConfig, field) {
            return field.fields.reduce(function(acc, subField) {
                var addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) return addSubField(acc, subField);
                return acc;
            }, inputObjectTypeConfig);
        },
        collapsible: function(inputObjectTypeConfig, field) {
            return field.fields.reduce(function(acc, subField) {
                var addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) return addSubField(acc, subField);
                return acc;
            }, inputObjectTypeConfig);
        },
        tabs: function(inputObjectTypeConfig, field) {
            return field.tabs.reduce(function(acc, tab) {
                if ((0, _types.tabHasName)(tab)) {
                    var fullName = (0, _combineParentName.default)(parentName, (0, _formatLabels.toWords)(tab.name, true));
                    var requiresAtLeastOneField = (0, _groupOrTabHasRequiredSubfield.groupOrTabHasRequiredSubfield)(field);
                    var type = buildMutationInputType(payload, fullName, tab.fields, fullName);
                    if (requiresAtLeastOneField) type = new _graphql.GraphQLNonNull(type);
                    return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, tab.name, {
                        type: type
                    }));
                }
                return _object_spread({}, acc, tab.fields.reduce(function(subFieldSchema, subField) {
                    var addSubField = fieldToSchemaMap[subField.type];
                    if (addSubField) return addSubField(subFieldSchema, subField);
                    return subFieldSchema;
                }, acc));
            }, inputObjectTypeConfig);
        }
    };
    var fieldName = (0, _formatName.default)(name);
    return new _graphql.GraphQLInputObjectType({
        name: "mutation".concat(fieldName, "Input"),
        fields: fields.reduce(function(inputObjectTypeConfig, field) {
            var fieldSchema = fieldToSchemaMap[field.type];
            if (typeof fieldSchema !== "function") {
                return inputObjectTypeConfig;
            }
            return _object_spread({}, inputObjectTypeConfig, fieldSchema(inputObjectTypeConfig, field));
        }, {})
    });
}
var _default = buildMutationInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZE11dGF0aW9uSW5wdXRUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQge1xuICBHcmFwaFFMQm9vbGVhbixcbiAgR3JhcGhRTEVudW1UeXBlLFxuICBHcmFwaFFMRmxvYXQsXG4gIEdyYXBoUUxJbnB1dEZpZWxkQ29uZmlnLFxuICBHcmFwaFFMSW5wdXRPYmplY3RUeXBlLFxuICBHcmFwaFFMSW50LFxuICBHcmFwaFFMTGlzdCxcbiAgR3JhcGhRTE5vbk51bGwsXG4gIEdyYXBoUUxTY2FsYXJUeXBlLFxuICBHcmFwaFFMU3RyaW5nLFxuICBHcmFwaFFMVHlwZSxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBHcmFwaFFMSlNPTiB9IGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcbmltcG9ydCB3aXRoTnVsbGFibGVUeXBlIGZyb20gJy4vd2l0aE51bGxhYmxlVHlwZSc7XG5pbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5pbXBvcnQgY29tYmluZVBhcmVudE5hbWUgZnJvbSAnLi4vdXRpbGl0aWVzL2NvbWJpbmVQYXJlbnROYW1lJztcbmltcG9ydCB7IEFycmF5RmllbGQsIENvZGVGaWVsZCwgSlNPTkZpZWxkLCBEYXRlRmllbGQsIEVtYWlsRmllbGQsIEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhLCBHcm91cEZpZWxkLCBOdW1iZXJGaWVsZCwgUG9pbnRGaWVsZCwgUmFkaW9GaWVsZCwgUmVsYXRpb25zaGlwRmllbGQsIFJpY2hUZXh0RmllbGQsIFJvd0ZpZWxkLCBTZWxlY3RGaWVsZCwgVGV4dGFyZWFGaWVsZCwgVGV4dEZpZWxkLCBVcGxvYWRGaWVsZCwgQ29sbGFwc2libGVGaWVsZCwgVGFic0ZpZWxkLCBDaGVja2JveEZpZWxkLCBCbG9ja0ZpZWxkLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdExhYmVscyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkJztcblxuZXhwb3J0IGNvbnN0IGdldENvbGxlY3Rpb25JRFR5cGUgPSAoY29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKTogR3JhcGhRTFNjYWxhclR5cGUgPT4ge1xuICBjb25zdCBpZEZpZWxkID0gY29uZmlnLmZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gJ2lkJyk7XG4gIGlmICghaWRGaWVsZCkgcmV0dXJuIEdyYXBoUUxTdHJpbmc7XG4gIHN3aXRjaCAoaWRGaWVsZC50eXBlKSB7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBHcmFwaFFMSW50O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gR3JhcGhRTFN0cmluZztcbiAgfVxufTtcblxuZXhwb3J0IHR5cGUgSW5wdXRPYmplY3RUeXBlQ29uZmlnID0ge1xuICBbcGF0aDogc3RyaW5nXTogR3JhcGhRTElucHV0RmllbGRDb25maWdcbn1cblxuZnVuY3Rpb24gYnVpbGRNdXRhdGlvbklucHV0VHlwZShwYXlsb2FkOiBQYXlsb2FkLCBuYW1lOiBzdHJpbmcsIGZpZWxkczogRmllbGRbXSwgcGFyZW50TmFtZTogc3RyaW5nLCBmb3JjZU51bGxhYmxlID0gZmFsc2UpOiBHcmFwaFFMSW5wdXRPYmplY3RUeXBlIHtcbiAgY29uc3QgZmllbGRUb1NjaGVtYU1hcCA9IHtcbiAgICBudW1iZXI6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IE51bWJlckZpZWxkKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gZmllbGQubmFtZSA9PT0gJ2lkJyA/IEdyYXBoUUxJbnQgOiBHcmFwaFFMRmxvYXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBmaWVsZC5oYXNNYW55ID09PSB0cnVlID8gbmV3IEdyYXBoUUxMaXN0KHR5cGUpIDogdHlwZSwgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICB0ZXh0OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBUZXh0RmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTFN0cmluZywgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICBlbWFpbDogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogRW1haWxGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIHRleHRhcmVhOiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBUZXh0YXJlYUZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxTdHJpbmcsIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAgcmljaFRleHQ6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFJpY2hUZXh0RmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTEpTT04sIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAgY29kZTogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQ29kZUZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxTdHJpbmcsIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAganNvbjogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogSlNPTkZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxKU09OLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIGRhdGU6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IERhdGVGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIHVwbG9hZDogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogVXBsb2FkRmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTFN0cmluZywgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICByYWRpbzogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogUmFkaW9GaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIHBvaW50OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBQb2ludEZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIG5ldyBHcmFwaFFMTGlzdChHcmFwaFFMRmxvYXQpLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIGNoZWNrYm94OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBDaGVja2JveEZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgfSksXG4gICAgc2VsZWN0OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBTZWxlY3RGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IGAke2NvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIGZpZWxkLm5hbWUpfV9NdXRhdGlvbklucHV0YDtcbiAgICAgIGxldCB0eXBlOiBHcmFwaFFMVHlwZSA9IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICAgICAgICBuYW1lOiBmb3JtYXR0ZWROYW1lLFxuICAgICAgICB2YWx1ZXM6IGZpZWxkLm9wdGlvbnMucmVkdWNlKCh2YWx1ZXMsIG9wdGlvbikgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb24udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgW2Zvcm1hdE5hbWUob3B0aW9uLnZhbHVlKV06IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgW29wdGlvbl06IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9LCB7fSksXG4gICAgICB9KTtcblxuICAgICAgdHlwZSA9IGZpZWxkLmhhc01hbnkgPyBuZXcgR3JhcGhRTExpc3QodHlwZSkgOiB0eXBlO1xuICAgICAgdHlwZSA9IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIHR5cGUsIGZvcmNlTnVsbGFibGUpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVsYXRpb25zaGlwOiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBSZWxhdGlvbnNoaXBGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgeyByZWxhdGlvblRvIH0gPSBmaWVsZDtcbiAgICAgIHR5cGUgUGF5bG9hZEdyYXBoUUxSZWxhdGlvbnNoaXBUeXBlID0gR3JhcGhRTFNjYWxhclR5cGUgfCBHcmFwaFFMTGlzdDxHcmFwaFFMU2NhbGFyVHlwZT4gfCBHcmFwaFFMSW5wdXRPYmplY3RUeXBlO1xuICAgICAgbGV0IHR5cGU6IFBheWxvYWRHcmFwaFFMUmVsYXRpb25zaGlwVHlwZTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykpIHtcbiAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpKX1SZWxhdGlvbnNoaXBJbnB1dGA7XG4gICAgICAgIHR5cGUgPSBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gICAgICAgICAgbmFtZTogZnVsbE5hbWUsXG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICByZWxhdGlvblRvOiB7XG4gICAgICAgICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGAke2Z1bGxOYW1lfVJlbGF0aW9uVG9gLFxuICAgICAgICAgICAgICAgIHZhbHVlczogcmVsYXRpb25Uby5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICAgICAgW2Zvcm1hdE5hbWUob3B0aW9uKV06IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksIHt9KSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IHsgdHlwZTogR3JhcGhRTEpTT04gfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSBnZXRDb2xsZWN0aW9uSURUeXBlKHBheWxvYWQuY29sbGVjdGlvbnNbcmVsYXRpb25Ub10uY29uZmlnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogZmllbGQuaGFzTWFueSA/IG5ldyBHcmFwaFFMTGlzdCh0eXBlKSA6IHR5cGUgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhcnJheTogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQXJyYXlGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZnVsbE5hbWUgPSBjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpKTtcbiAgICAgIGxldCB0eXBlOiBHcmFwaFFMVHlwZSB8IEdyYXBoUUxMaXN0PEdyYXBoUUxUeXBlPiA9IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUocGF5bG9hZCwgZnVsbE5hbWUsIGZpZWxkLmZpZWxkcywgZnVsbE5hbWUpO1xuICAgICAgdHlwZSA9IG5ldyBHcmFwaFFMTGlzdCh3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCB0eXBlLCBmb3JjZU51bGxhYmxlKSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ3JvdXA6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IEdyb3VwRmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkID0gZ3JvdXBPclRhYkhhc1JlcXVpcmVkU3ViZmllbGQoZmllbGQpO1xuICAgICAgY29uc3QgZnVsbE5hbWUgPSBjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpKTtcbiAgICAgIGxldCB0eXBlOiBHcmFwaFFMVHlwZSA9IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUocGF5bG9hZCwgZnVsbE5hbWUsIGZpZWxkLmZpZWxkcywgZnVsbE5hbWUpO1xuICAgICAgaWYgKHJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkKSB0eXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKHR5cGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgICBbZmllbGQubmFtZV06IHsgdHlwZSB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGJsb2NrczogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQmxvY2tGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiBHcmFwaFFMSlNPTiB9LFxuICAgIH0pLFxuICAgIHJvdzogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogUm93RmllbGQpID0+IGZpZWxkLmZpZWxkcy5yZWR1Y2UoKGFjYywgc3ViRmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBhZGRTdWJGaWVsZCA9IGZpZWxkVG9TY2hlbWFNYXBbc3ViRmllbGQudHlwZV07XG4gICAgICBpZiAoYWRkU3ViRmllbGQpIHJldHVybiBhZGRTdWJGaWVsZChhY2MsIHN1YkZpZWxkKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgaW5wdXRPYmplY3RUeXBlQ29uZmlnKSxcbiAgICBjb2xsYXBzaWJsZTogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQ29sbGFwc2libGVGaWVsZCkgPT4gZmllbGQuZmllbGRzLnJlZHVjZSgoYWNjLCBzdWJGaWVsZDogQ29sbGFwc2libGVGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgYWRkU3ViRmllbGQgPSBmaWVsZFRvU2NoZW1hTWFwW3N1YkZpZWxkLnR5cGVdO1xuICAgICAgaWYgKGFkZFN1YkZpZWxkKSByZXR1cm4gYWRkU3ViRmllbGQoYWNjLCBzdWJGaWVsZCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIGlucHV0T2JqZWN0VHlwZUNvbmZpZyksXG4gICAgdGFiczogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogVGFic0ZpZWxkKSA9PiB7XG4gICAgICByZXR1cm4gZmllbGQudGFicy5yZWR1Y2UoKGFjYywgdGFiKSA9PiB7XG4gICAgICAgIGlmICh0YWJIYXNOYW1lKHRhYikpIHtcbiAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGNvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIHRvV29yZHModGFiLm5hbWUsIHRydWUpKTtcbiAgICAgICAgICBjb25zdCByZXF1aXJlc0F0TGVhc3RPbmVGaWVsZCA9IGdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkKGZpZWxkKTtcbiAgICAgICAgICBsZXQgdHlwZTogR3JhcGhRTFR5cGUgPSBidWlsZE11dGF0aW9uSW5wdXRUeXBlKHBheWxvYWQsIGZ1bGxOYW1lLCB0YWIuZmllbGRzLCBmdWxsTmFtZSk7XG4gICAgICAgICAgaWYgKHJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkKSB0eXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKHR5cGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgICAgIFt0YWIubmFtZV06IHsgdHlwZSB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAuLi50YWIuZmllbGRzLnJlZHVjZSgoc3ViRmllbGRTY2hlbWEsIHN1YkZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGRTdWJGaWVsZCA9IGZpZWxkVG9TY2hlbWFNYXBbc3ViRmllbGQudHlwZV07XG4gICAgICAgICAgICBpZiAoYWRkU3ViRmllbGQpIHJldHVybiBhZGRTdWJGaWVsZChzdWJGaWVsZFNjaGVtYSwgc3ViRmllbGQpO1xuICAgICAgICAgICAgcmV0dXJuIHN1YkZpZWxkU2NoZW1hO1xuICAgICAgICAgIH0sIGFjYyksXG4gICAgICAgIH07XG4gICAgICB9LCBpbnB1dE9iamVjdFR5cGVDb25maWcpO1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZmllbGROYW1lID0gZm9ybWF0TmFtZShuYW1lKTtcblxuICByZXR1cm4gbmV3IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUoe1xuICAgIG5hbWU6IGBtdXRhdGlvbiR7ZmllbGROYW1lfUlucHV0YCxcbiAgICBmaWVsZHM6IGZpZWxkcy5yZWR1Y2UoKGlucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gZmllbGRUb1NjaGVtYU1hcFtmaWVsZC50eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBmaWVsZFNjaGVtYSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gaW5wdXRPYmplY3RUeXBlQ29uZmlnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIC4uLmZpZWxkU2NoZW1hKGlucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQpLFxuICAgICAgfTtcbiAgICB9LCB7fSksXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZE11dGF0aW9uSW5wdXRUeXBlO1xuIl0sIm5hbWVzIjpbImdldENvbGxlY3Rpb25JRFR5cGUiLCJjb25maWciLCJpZEZpZWxkIiwiZmllbGRzIiwiZmluZCIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJHcmFwaFFMU3RyaW5nIiwidHlwZSIsIkdyYXBoUUxJbnQiLCJidWlsZE11dGF0aW9uSW5wdXRUeXBlIiwicGF5bG9hZCIsInBhcmVudE5hbWUiLCJmb3JjZU51bGxhYmxlIiwiZmllbGRUb1NjaGVtYU1hcCIsIm51bWJlciIsImlucHV0T2JqZWN0VHlwZUNvbmZpZyIsIkdyYXBoUUxGbG9hdCIsIndpdGhOdWxsYWJsZVR5cGUiLCJoYXNNYW55IiwiR3JhcGhRTExpc3QiLCJ0ZXh0IiwiZW1haWwiLCJ0ZXh0YXJlYSIsInJpY2hUZXh0IiwiR3JhcGhRTEpTT04iLCJjb2RlIiwianNvbiIsImRhdGUiLCJ1cGxvYWQiLCJyYWRpbyIsInBvaW50IiwiY2hlY2tib3giLCJHcmFwaFFMQm9vbGVhbiIsInNlbGVjdCIsImZvcm1hdHRlZE5hbWUiLCJjb21iaW5lUGFyZW50TmFtZSIsIkdyYXBoUUxFbnVtVHlwZSIsInZhbHVlcyIsIm9wdGlvbnMiLCJyZWR1Y2UiLCJvcHRpb24iLCJ2YWx1ZSIsImZvcm1hdE5hbWUiLCJyZWxhdGlvbnNoaXAiLCJyZWxhdGlvblRvIiwiQXJyYXkiLCJpc0FycmF5IiwiZnVsbE5hbWUiLCJ0b1dvcmRzIiwiR3JhcGhRTElucHV0T2JqZWN0VHlwZSIsImNvbGxlY3Rpb25zIiwiYXJyYXkiLCJncm91cCIsInJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkIiwiZ3JvdXBPclRhYkhhc1JlcXVpcmVkU3ViZmllbGQiLCJHcmFwaFFMTm9uTnVsbCIsImJsb2NrcyIsInJvdyIsImFjYyIsInN1YkZpZWxkIiwiYWRkU3ViRmllbGQiLCJjb2xsYXBzaWJsZSIsInRhYnMiLCJ0YWIiLCJ0YWJIYXNOYW1lIiwic3ViRmllbGRTY2hlbWEiLCJmaWVsZE5hbWUiLCJmaWVsZFNjaGVtYSJdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDOzs7Ozs7Ozs7OztJQXdCMUJBLG1CQUFtQjtlQUFuQkE7O0lBc05iLE9BQXNDO2VBQXRDOzs7dUJBak9POytCQUNxQjt1RUFDQztpRUFDTjt3RUFDTztxQkFDd1I7NEJBQzlSOzZDQUdzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFNQSxzQkFBc0IsU0FBQ0M7SUFDbEMsSUFBTUMsVUFBVUQsT0FBT0UsTUFBTSxDQUFDQyxJQUFJLENBQUMsU0FBQ0M7ZUFBVUMsSUFBQUEsdUJBQWdCLEVBQUNELFVBQVVBLE1BQU1FLElBQUksS0FBSzs7SUFDeEYsSUFBSSxDQUFDTCxTQUFTLE9BQU9NLHNCQUFhO0lBQ2xDLE9BQVFOLFFBQVFPLElBQUk7UUFDbEIsS0FBSztZQUNILE9BQU9DLG1CQUFVO1FBQ25CO1lBQ0UsT0FBT0Ysc0JBQWE7SUFDeEI7QUFDRjtBQU1BLFNBQVNHLHVCQUF1QkMsT0FBZ0IsRUFBRUwsSUFBWSxFQUFFSixNQUFlLEVBQUVVLFVBQWtCO1FBQUVDLGdCQUFBQSxpRUFBZ0I7SUFDbkgsSUFBTUMsbUJBQW1CO1FBQ3ZCQyxRQUFRLFNBQUNDLHVCQUE4Q1o7WUFDckQsSUFBTUksT0FBT0osTUFBTUUsSUFBSSxLQUFLLE9BQU9HLG1CQUFVLEdBQUdRLHFCQUFZO1lBQzVELE9BQU8sd0NBQ0ZELHdCQUNILHFCQUFDWixNQUFNRSxJQUFJLEVBQUc7Z0JBQUVFLE1BQU1VLElBQUFBLHlCQUFnQixFQUFDZCxPQUFPQSxNQUFNZSxPQUFPLEtBQUssT0FBTyxJQUFJQyxvQkFBVyxDQUFDWixR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