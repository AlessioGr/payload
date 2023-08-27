/* eslint-disable no-use-before-define */ function _define_property(obj, key, value) {
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
import { GraphQLBoolean, GraphQLEnumType, GraphQLFloat, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { GraphQLJSON } from "graphql-type-json";
import withNullableType from "./withNullableType";
import formatName from "../utilities/formatName";
import combineParentName from "../utilities/combineParentName";
import { fieldAffectsData, tabHasName } from "../../fields/config/types";
import { toWords } from "../../utilities/formatLabels";
import { groupOrTabHasRequiredSubfield } from "../../utilities/groupOrTabHasRequiredSubfield";
export var getCollectionIDType = function(config) {
    var idField = config.fields.find(function(field) {
        return fieldAffectsData(field) && field.name === "id";
    });
    if (!idField) return GraphQLString;
    switch(idField.type){
        case "number":
            return GraphQLInt;
        default:
            return GraphQLString;
    }
};
function buildMutationInputType(payload, name, fields, parentName) {
    var forceNullable = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    var fieldToSchemaMap = {
        number: function(inputObjectTypeConfig, field) {
            var type = field.name === "id" ? GraphQLInt : GraphQLFloat;
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, field.hasMany === true ? new GraphQLList(type) : type, forceNullable)
            }));
        },
        text: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLString, forceNullable)
            }));
        },
        email: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLString, forceNullable)
            }));
        },
        textarea: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLString, forceNullable)
            }));
        },
        richText: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLJSON, forceNullable)
            }));
        },
        code: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLString, forceNullable)
            }));
        },
        json: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLJSON, forceNullable)
            }));
        },
        date: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLString, forceNullable)
            }));
        },
        upload: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLString, forceNullable)
            }));
        },
        radio: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, GraphQLString, forceNullable)
            }));
        },
        point: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: withNullableType(field, new GraphQLList(GraphQLFloat), forceNullable)
            }));
        },
        checkbox: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: GraphQLBoolean
            }));
        },
        select: function(inputObjectTypeConfig, field) {
            var formattedName = "".concat(combineParentName(parentName, field.name), "_MutationInput");
            var type = new GraphQLEnumType({
                name: formattedName,
                values: field.options.reduce(function(values, option) {
                    if (typeof option === "object" && option.value) {
                        return _object_spread_props(_object_spread({}, values), _define_property({}, formatName(option.value), {
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
            type = field.hasMany ? new GraphQLList(type) : type;
            type = withNullableType(field, type, forceNullable);
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: type
            }));
        },
        relationship: function(inputObjectTypeConfig, field) {
            var relationTo = field.relationTo;
            var type;
            if (Array.isArray(relationTo)) {
                var fullName = "".concat(combineParentName(parentName, toWords(field.name, true)), "RelationshipInput");
                type = new GraphQLInputObjectType({
                    name: fullName,
                    fields: {
                        relationTo: {
                            type: new GraphQLEnumType({
                                name: "".concat(fullName, "RelationTo"),
                                values: relationTo.reduce(function(values, option) {
                                    return _object_spread_props(_object_spread({}, values), _define_property({}, formatName(option), {
                                        value: option
                                    }));
                                }, {})
                            })
                        },
                        value: {
                            type: GraphQLJSON
                        }
                    }
                });
            } else {
                type = getCollectionIDType(payload.collections[relationTo].config);
            }
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: field.hasMany ? new GraphQLList(type) : type
            }));
        },
        array: function(inputObjectTypeConfig, field) {
            var fullName = combineParentName(parentName, toWords(field.name, true));
            var type = buildMutationInputType(payload, fullName, field.fields, fullName);
            type = new GraphQLList(withNullableType(field, type, forceNullable));
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: type
            }));
        },
        group: function(inputObjectTypeConfig, field) {
            var requiresAtLeastOneField = groupOrTabHasRequiredSubfield(field);
            var fullName = combineParentName(parentName, toWords(field.name, true));
            var type = buildMutationInputType(payload, fullName, field.fields, fullName);
            if (requiresAtLeastOneField) type = new GraphQLNonNull(type);
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: type
            }));
        },
        blocks: function(inputObjectTypeConfig, field) {
            return _object_spread_props(_object_spread({}, inputObjectTypeConfig), _define_property({}, field.name, {
                type: GraphQLJSON
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
                if (tabHasName(tab)) {
                    var fullName = combineParentName(parentName, toWords(tab.name, true));
                    var requiresAtLeastOneField = groupOrTabHasRequiredSubfield(field);
                    var type = buildMutationInputType(payload, fullName, tab.fields, fullName);
                    if (requiresAtLeastOneField) type = new GraphQLNonNull(type);
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
    var fieldName = formatName(name);
    return new GraphQLInputObjectType({
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
export default buildMutationInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZE11dGF0aW9uSW5wdXRUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQge1xuICBHcmFwaFFMQm9vbGVhbixcbiAgR3JhcGhRTEVudW1UeXBlLFxuICBHcmFwaFFMRmxvYXQsXG4gIEdyYXBoUUxJbnB1dEZpZWxkQ29uZmlnLFxuICBHcmFwaFFMSW5wdXRPYmplY3RUeXBlLFxuICBHcmFwaFFMSW50LFxuICBHcmFwaFFMTGlzdCxcbiAgR3JhcGhRTE5vbk51bGwsXG4gIEdyYXBoUUxTY2FsYXJUeXBlLFxuICBHcmFwaFFMU3RyaW5nLFxuICBHcmFwaFFMVHlwZSxcbn0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBHcmFwaFFMSlNPTiB9IGZyb20gJ2dyYXBocWwtdHlwZS1qc29uJztcbmltcG9ydCB3aXRoTnVsbGFibGVUeXBlIGZyb20gJy4vd2l0aE51bGxhYmxlVHlwZSc7XG5pbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5pbXBvcnQgY29tYmluZVBhcmVudE5hbWUgZnJvbSAnLi4vdXRpbGl0aWVzL2NvbWJpbmVQYXJlbnROYW1lJztcbmltcG9ydCB7IEFycmF5RmllbGQsIENvZGVGaWVsZCwgSlNPTkZpZWxkLCBEYXRlRmllbGQsIEVtYWlsRmllbGQsIEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhLCBHcm91cEZpZWxkLCBOdW1iZXJGaWVsZCwgUG9pbnRGaWVsZCwgUmFkaW9GaWVsZCwgUmVsYXRpb25zaGlwRmllbGQsIFJpY2hUZXh0RmllbGQsIFJvd0ZpZWxkLCBTZWxlY3RGaWVsZCwgVGV4dGFyZWFGaWVsZCwgVGV4dEZpZWxkLCBVcGxvYWRGaWVsZCwgQ29sbGFwc2libGVGaWVsZCwgVGFic0ZpZWxkLCBDaGVja2JveEZpZWxkLCBCbG9ja0ZpZWxkLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdExhYmVscyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkJztcblxuZXhwb3J0IGNvbnN0IGdldENvbGxlY3Rpb25JRFR5cGUgPSAoY29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKTogR3JhcGhRTFNjYWxhclR5cGUgPT4ge1xuICBjb25zdCBpZEZpZWxkID0gY29uZmlnLmZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gJ2lkJyk7XG4gIGlmICghaWRGaWVsZCkgcmV0dXJuIEdyYXBoUUxTdHJpbmc7XG4gIHN3aXRjaCAoaWRGaWVsZC50eXBlKSB7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIHJldHVybiBHcmFwaFFMSW50O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gR3JhcGhRTFN0cmluZztcbiAgfVxufTtcblxuZXhwb3J0IHR5cGUgSW5wdXRPYmplY3RUeXBlQ29uZmlnID0ge1xuICBbcGF0aDogc3RyaW5nXTogR3JhcGhRTElucHV0RmllbGRDb25maWdcbn1cblxuZnVuY3Rpb24gYnVpbGRNdXRhdGlvbklucHV0VHlwZShwYXlsb2FkOiBQYXlsb2FkLCBuYW1lOiBzdHJpbmcsIGZpZWxkczogRmllbGRbXSwgcGFyZW50TmFtZTogc3RyaW5nLCBmb3JjZU51bGxhYmxlID0gZmFsc2UpOiBHcmFwaFFMSW5wdXRPYmplY3RUeXBlIHtcbiAgY29uc3QgZmllbGRUb1NjaGVtYU1hcCA9IHtcbiAgICBudW1iZXI6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IE51bWJlckZpZWxkKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0gZmllbGQubmFtZSA9PT0gJ2lkJyA/IEdyYXBoUUxJbnQgOiBHcmFwaFFMRmxvYXQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBmaWVsZC5oYXNNYW55ID09PSB0cnVlID8gbmV3IEdyYXBoUUxMaXN0KHR5cGUpIDogdHlwZSwgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICB0ZXh0OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBUZXh0RmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTFN0cmluZywgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICBlbWFpbDogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogRW1haWxGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIHRleHRhcmVhOiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBUZXh0YXJlYUZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxTdHJpbmcsIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAgcmljaFRleHQ6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IFJpY2hUZXh0RmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTEpTT04sIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAgY29kZTogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQ29kZUZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxTdHJpbmcsIGZvcmNlTnVsbGFibGUpIH0sXG4gICAgfSksXG4gICAganNvbjogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogSlNPTkZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIEdyYXBoUUxKU09OLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIGRhdGU6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IERhdGVGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIHVwbG9hZDogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogVXBsb2FkRmllbGQpID0+ICh7XG4gICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogd2l0aE51bGxhYmxlVHlwZShmaWVsZCwgR3JhcGhRTFN0cmluZywgZm9yY2VOdWxsYWJsZSkgfSxcbiAgICB9KSxcbiAgICByYWRpbzogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogUmFkaW9GaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiB3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCBHcmFwaFFMU3RyaW5nLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIHBvaW50OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBQb2ludEZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIG5ldyBHcmFwaFFMTGlzdChHcmFwaFFMRmxvYXQpLCBmb3JjZU51bGxhYmxlKSB9LFxuICAgIH0pLFxuICAgIGNoZWNrYm94OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBDaGVja2JveEZpZWxkKSA9PiAoe1xuICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgW2ZpZWxkLm5hbWVdOiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgfSksXG4gICAgc2VsZWN0OiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBTZWxlY3RGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IGAke2NvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIGZpZWxkLm5hbWUpfV9NdXRhdGlvbklucHV0YDtcbiAgICAgIGxldCB0eXBlOiBHcmFwaFFMVHlwZSA9IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICAgICAgICBuYW1lOiBmb3JtYXR0ZWROYW1lLFxuICAgICAgICB2YWx1ZXM6IGZpZWxkLm9wdGlvbnMucmVkdWNlKCh2YWx1ZXMsIG9wdGlvbikgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyAmJiBvcHRpb24udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgW2Zvcm1hdE5hbWUob3B0aW9uLnZhbHVlKV06IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgW29wdGlvbl06IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICB9LCB7fSksXG4gICAgICB9KTtcblxuICAgICAgdHlwZSA9IGZpZWxkLmhhc01hbnkgPyBuZXcgR3JhcGhRTExpc3QodHlwZSkgOiB0eXBlO1xuICAgICAgdHlwZSA9IHdpdGhOdWxsYWJsZVR5cGUoZmllbGQsIHR5cGUsIGZvcmNlTnVsbGFibGUpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgcmVsYXRpb25zaGlwOiAoaW5wdXRPYmplY3RUeXBlQ29uZmlnOiBJbnB1dE9iamVjdFR5cGVDb25maWcsIGZpZWxkOiBSZWxhdGlvbnNoaXBGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgeyByZWxhdGlvblRvIH0gPSBmaWVsZDtcbiAgICAgIHR5cGUgUGF5bG9hZEdyYXBoUUxSZWxhdGlvbnNoaXBUeXBlID0gR3JhcGhRTFNjYWxhclR5cGUgfCBHcmFwaFFMTGlzdDxHcmFwaFFMU2NhbGFyVHlwZT4gfCBHcmFwaFFMSW5wdXRPYmplY3RUeXBlO1xuICAgICAgbGV0IHR5cGU6IFBheWxvYWRHcmFwaFFMUmVsYXRpb25zaGlwVHlwZTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykpIHtcbiAgICAgICAgY29uc3QgZnVsbE5hbWUgPSBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpKX1SZWxhdGlvbnNoaXBJbnB1dGA7XG4gICAgICAgIHR5cGUgPSBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gICAgICAgICAgbmFtZTogZnVsbE5hbWUsXG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICByZWxhdGlvblRvOiB7XG4gICAgICAgICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6IGAke2Z1bGxOYW1lfVJlbGF0aW9uVG9gLFxuICAgICAgICAgICAgICAgIHZhbHVlczogcmVsYXRpb25Uby5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiAoe1xuICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICAgICAgW2Zvcm1hdE5hbWUob3B0aW9uKV06IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksIHt9KSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsdWU6IHsgdHlwZTogR3JhcGhRTEpTT04gfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSBnZXRDb2xsZWN0aW9uSURUeXBlKHBheWxvYWQuY29sbGVjdGlvbnNbcmVsYXRpb25Ub10uY29uZmlnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgICBbZmllbGQubmFtZV06IHsgdHlwZTogZmllbGQuaGFzTWFueSA/IG5ldyBHcmFwaFFMTGlzdCh0eXBlKSA6IHR5cGUgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgICBhcnJheTogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQXJyYXlGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgZnVsbE5hbWUgPSBjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpKTtcbiAgICAgIGxldCB0eXBlOiBHcmFwaFFMVHlwZSB8IEdyYXBoUUxMaXN0PEdyYXBoUUxUeXBlPiA9IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUocGF5bG9hZCwgZnVsbE5hbWUsIGZpZWxkLmZpZWxkcywgZnVsbE5hbWUpO1xuICAgICAgdHlwZSA9IG5ldyBHcmFwaFFMTGlzdCh3aXRoTnVsbGFibGVUeXBlKGZpZWxkLCB0eXBlLCBmb3JjZU51bGxhYmxlKSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ3JvdXA6IChpbnB1dE9iamVjdFR5cGVDb25maWc6IElucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQ6IEdyb3VwRmllbGQpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkID0gZ3JvdXBPclRhYkhhc1JlcXVpcmVkU3ViZmllbGQoZmllbGQpO1xuICAgICAgY29uc3QgZnVsbE5hbWUgPSBjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCB0b1dvcmRzKGZpZWxkLm5hbWUsIHRydWUpKTtcbiAgICAgIGxldCB0eXBlOiBHcmFwaFFMVHlwZSA9IGJ1aWxkTXV0YXRpb25JbnB1dFR5cGUocGF5bG9hZCwgZnVsbE5hbWUsIGZpZWxkLmZpZWxkcywgZnVsbE5hbWUpO1xuICAgICAgaWYgKHJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkKSB0eXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKHR5cGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5wdXRPYmplY3RUeXBlQ29uZmlnLFxuICAgICAgICBbZmllbGQubmFtZV06IHsgdHlwZSB9LFxuICAgICAgfTtcbiAgICB9LFxuICAgIGJsb2NrczogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQmxvY2tGaWVsZCkgPT4gKHtcbiAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgIFtmaWVsZC5uYW1lXTogeyB0eXBlOiBHcmFwaFFMSlNPTiB9LFxuICAgIH0pLFxuICAgIHJvdzogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogUm93RmllbGQpID0+IGZpZWxkLmZpZWxkcy5yZWR1Y2UoKGFjYywgc3ViRmllbGQ6IEZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBhZGRTdWJGaWVsZCA9IGZpZWxkVG9TY2hlbWFNYXBbc3ViRmllbGQudHlwZV07XG4gICAgICBpZiAoYWRkU3ViRmllbGQpIHJldHVybiBhZGRTdWJGaWVsZChhY2MsIHN1YkZpZWxkKTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgaW5wdXRPYmplY3RUeXBlQ29uZmlnKSxcbiAgICBjb2xsYXBzaWJsZTogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogQ29sbGFwc2libGVGaWVsZCkgPT4gZmllbGQuZmllbGRzLnJlZHVjZSgoYWNjLCBzdWJGaWVsZDogQ29sbGFwc2libGVGaWVsZCkgPT4ge1xuICAgICAgY29uc3QgYWRkU3ViRmllbGQgPSBmaWVsZFRvU2NoZW1hTWFwW3N1YkZpZWxkLnR5cGVdO1xuICAgICAgaWYgKGFkZFN1YkZpZWxkKSByZXR1cm4gYWRkU3ViRmllbGQoYWNjLCBzdWJGaWVsZCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIGlucHV0T2JqZWN0VHlwZUNvbmZpZyksXG4gICAgdGFiczogKGlucHV0T2JqZWN0VHlwZUNvbmZpZzogSW5wdXRPYmplY3RUeXBlQ29uZmlnLCBmaWVsZDogVGFic0ZpZWxkKSA9PiB7XG4gICAgICByZXR1cm4gZmllbGQudGFicy5yZWR1Y2UoKGFjYywgdGFiKSA9PiB7XG4gICAgICAgIGlmICh0YWJIYXNOYW1lKHRhYikpIHtcbiAgICAgICAgICBjb25zdCBmdWxsTmFtZSA9IGNvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIHRvV29yZHModGFiLm5hbWUsIHRydWUpKTtcbiAgICAgICAgICBjb25zdCByZXF1aXJlc0F0TGVhc3RPbmVGaWVsZCA9IGdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkKGZpZWxkKTtcbiAgICAgICAgICBsZXQgdHlwZTogR3JhcGhRTFR5cGUgPSBidWlsZE11dGF0aW9uSW5wdXRUeXBlKHBheWxvYWQsIGZ1bGxOYW1lLCB0YWIuZmllbGRzLCBmdWxsTmFtZSk7XG4gICAgICAgICAgaWYgKHJlcXVpcmVzQXRMZWFzdE9uZUZpZWxkKSB0eXBlID0gbmV3IEdyYXBoUUxOb25OdWxsKHR5cGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmlucHV0T2JqZWN0VHlwZUNvbmZpZyxcbiAgICAgICAgICAgIFt0YWIubmFtZV06IHsgdHlwZSB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmFjYyxcbiAgICAgICAgICAuLi50YWIuZmllbGRzLnJlZHVjZSgoc3ViRmllbGRTY2hlbWEsIHN1YkZpZWxkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZGRTdWJGaWVsZCA9IGZpZWxkVG9TY2hlbWFNYXBbc3ViRmllbGQudHlwZV07XG4gICAgICAgICAgICBpZiAoYWRkU3ViRmllbGQpIHJldHVybiBhZGRTdWJGaWVsZChzdWJGaWVsZFNjaGVtYSwgc3ViRmllbGQpO1xuICAgICAgICAgICAgcmV0dXJuIHN1YkZpZWxkU2NoZW1hO1xuICAgICAgICAgIH0sIGFjYyksXG4gICAgICAgIH07XG4gICAgICB9LCBpbnB1dE9iamVjdFR5cGVDb25maWcpO1xuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgZmllbGROYW1lID0gZm9ybWF0TmFtZShuYW1lKTtcblxuICByZXR1cm4gbmV3IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUoe1xuICAgIG5hbWU6IGBtdXRhdGlvbiR7ZmllbGROYW1lfUlucHV0YCxcbiAgICBmaWVsZHM6IGZpZWxkcy5yZWR1Y2UoKGlucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkU2NoZW1hID0gZmllbGRUb1NjaGVtYU1hcFtmaWVsZC50eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBmaWVsZFNjaGVtYSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gaW5wdXRPYmplY3RUeXBlQ29uZmlnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbnB1dE9iamVjdFR5cGVDb25maWcsXG4gICAgICAgIC4uLmZpZWxkU2NoZW1hKGlucHV0T2JqZWN0VHlwZUNvbmZpZywgZmllbGQpLFxuICAgICAgfTtcbiAgICB9LCB7fSksXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWlsZE11dGF0aW9uSW5wdXRUeXBlO1xuIl0sIm5hbWVzIjpbIkdyYXBoUUxCb29sZWFuIiwiR3JhcGhRTEVudW1UeXBlIiwiR3JhcGhRTEZsb2F0IiwiR3JhcGhRTElucHV0T2JqZWN0VHlwZSIsIkdyYXBoUUxJbnQiLCJHcmFwaFFMTGlzdCIsIkdyYXBoUUxOb25OdWxsIiwiR3JhcGhRTFN0cmluZyIsIkdyYXBoUUxKU09OIiwid2l0aE51bGxhYmxlVHlwZSIsImZvcm1hdE5hbWUiLCJjb21iaW5lUGFyZW50TmFtZSIsImZpZWxkQWZmZWN0c0RhdGEiLCJ0YWJIYXNOYW1lIiwidG9Xb3JkcyIsImdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkIiwiZ2V0Q29sbGVjdGlvbklEVHlwZSIsImNvbmZpZyIsImlkRmllbGQiLCJmaWVsZHMiLCJmaW5kIiwiZmllbGQiLCJuYW1lIiwidHlwZSIsImJ1aWxkTXV0YXRpb25JbnB1dFR5cGUiLCJwYXlsb2FkIiwicGFyZW50TmFtZSIsImZvcmNlTnVsbGFibGUiLCJmaWVsZFRvU2NoZW1hTWFwIiwibnVtYmVyIiwiaW5wdXRPYmplY3RUeXBlQ29uZmlnIiwiaGFzTWFueSIsInRleHQiLCJlbWFpbCIsInRleHRhcmVhIiwicmljaFRleHQiLCJjb2RlIiwianNvbiIsImRhdGUiLCJ1cGxvYWQiLCJyYWRpbyIsInBvaW50IiwiY2hlY2tib3giLCJzZWxlY3QiLCJmb3JtYXR0ZWROYW1lIiwidmFsdWVzIiwib3B0aW9ucyIsInJlZHVjZSIsIm9wdGlvbiIsInZhbHVlIiwicmVsYXRpb25zaGlwIiwicmVsYXRpb25UbyIsIkFycmF5IiwiaXNBcnJheSIsImZ1bGxOYW1lIiwiY29sbGVjdGlvbnMiLCJhcnJheSIsImdyb3VwIiwicmVxdWlyZXNBdExlYXN0T25lRmllbGQiLCJibG9ja3MiLCJyb3ciLCJhY2MiLCJzdWJGaWVsZCIsImFkZFN1YkZpZWxkIiwiY29sbGFwc2libGUiLCJ0YWJzIiwidGFiIiwic3ViRmllbGRTY2hlbWEiLCJmaWVsZE5hbWUiLCJmaWVsZFNjaGVtYSJdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3ZDLFNBQ0VBLGNBQWMsRUFDZEMsZUFBZSxFQUNmQyxZQUFZLEVBRVpDLHNCQUFzQixFQUN0QkMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLGNBQWMsRUFFZEMsYUFBYSxRQUVSLFVBQVU7QUFDakIsU0FBU0MsV0FBVyxRQUFRLG9CQUFvQjtBQUNoRCxPQUFPQyxzQkFBc0IscUJBQXFCO0FBQ2xELE9BQU9DLGdCQUFnQiwwQkFBMEI7QUFDakQsT0FBT0MsdUJBQXVCLGlDQUFpQztBQUMvRCxTQUF5RUMsZ0JBQWdCLEVBQTJNQyxVQUFVLFFBQVEsNEJBQTRCO0FBQ2xWLFNBQVNDLE9BQU8sUUFBUSwrQkFBK0I7QUFHdkQsU0FBU0MsNkJBQTZCLFFBQVEsZ0RBQWdEO0FBRTlGLE9BQU8sSUFBTUMsc0JBQXNCLFNBQUNDO0lBQ2xDLElBQU1DLFVBQVVELE9BQU9FLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDO2VBQVVULGlCQUFpQlMsVUFBVUEsTUFBTUMsSUFBSSxLQUFLOztJQUN4RixJQUFJLENBQUNKLFNBQVMsT0FBT1g7SUFDckIsT0FBUVcsUUFBUUssSUFBSTtRQUNsQixLQUFLO1lBQ0gsT0FBT25CO1FBQ1Q7WUFDRSxPQUFPRztJQUNYO0FBQ0YsRUFBRTtBQU1GLFNBQVNpQix1QkFBdUJDLE9BQWdCLEVBQUVILElBQVksRUFBRUgsTUFBZSxFQUFFTyxVQUFrQjtRQUFFQyxnQkFBQUEsaUVBQWdCO0lBQ25ILElBQU1DLG1CQUFtQjtRQUN2QkMsUUFBUSxTQUFDQyx1QkFBOENUO1lBQ3JELElBQU1FLE9BQU9GLE1BQU1DLElBQUksS0FBSyxPQUFPbEIsYUFBYUY7WUFDaEQsT0FBTyx3Q0FDRjRCLHdCQUNILHFCQUFDVCxNQUFNQyxJQUFJLEVBQUc7Z0JBQUVDLE1BQU1kLGlCQUFpQlksT0FBT0EsTUFBTVUsT0FBTyxLQUFLLE9BQU8sSUFBSTFCLFlBQVlrQixRQUFRQSxNQUFNSTtZQUFlO1FBRXhIO1FBQ0FLLE1BQU0sU0FBQ0YsdUJBQThDVDttQkFBc0Isd0NBQ3RFUyx3QkFDSCxxQkFBQ1QsTUFBTUMsSUFBSSxFQUFHO2dCQUFFQyxNQUFNZCxpQkFBaUJZLE9BQU9kLGVBQWVvQjtZQUFlOztRQUU5RU0sT0FBTyxTQUFDSCx1QkFBOENUO21CQUF1Qix3Q0FDeEVTLHdCQUNILHFCQUFDVCxNQUFNQyxJQUFJLEVBQUc7Z0JBQUVDLE1BQU1kLGlCQUFpQlksT0FBT2QsZUFBZW9CO1lBQWU7O1FBRTlFTyxVQUFVLFNBQUNKLHVCQUE4Q1Q7bUJBQTBCLHdDQUM5RVMsd0JBQ0gscUJBQUNULE1BQU1DLElBQUksRUFBRztnQkFBRUMsTUFBTWQsaUJBQWlCWSxPQUFPZCxlQUFlb0I7WUFBZTs7UUFFOUVRLFVBQVUsU0FBQ0wsdUJBQThDVDttQkFBMEIsd0NBQzlFUyx3QkFDSCxxQkFBQ1QsTUFBTUMsSUFBSSxFQUFHO2dCQUFFQyxNQUFNZCxpQkFBaUJZLE9BQU9iLGFBQWFtQjtZQUFlOztRQUU1RVMsTUFBTSxTQUFDTix1QkFBOENUO21CQUFzQix3Q0FDdEVTLHdCQUNILHFCQUFDVCxNQUFNQyxJQUFJLEVBQUc7Z0JBQUVDLE1BQU1kLGlCQUFpQlksT0FBT2QsZUFBZW9CO1lBQWU7O1FBRTlFVSxNQUFNLFNBQUNQLHVCQUE4Q1Q7bUJBQXNCLHdDQUN0RVMsd0JBQ0gscUJBQUNULE1BQU1DLElBQUksRUFBRztnQkFBRUMsTUFBTWQsaUJBQWlCWSxPQUFPYixhQUFhbUI7WUFBZTs7UUFFNUVXLE1BQU0sU0FBQ1IsdUJBQThDVDttQkFBc0Isd0NBQ3RFUyx3QkFDSCxxQkFBQ1QsTUFBTUMsSUFBSSxFQUFHO2dCQUFFQyxNQUFNZCxpQkFBaUJZLE9BQU9kLGVBQWVvQjtZQUFlOztRQUU5RVksUUFBUSxTQUFDVCx1QkFBOENUO21CQUF3Qix3Q0FDMUVTLHdCQUNILHFCQUFDVCxNQUFNQyxJQUFJLEVBQUc7Z0JBQUVDLE1BQU1kLGlCQUFpQlksT0FBT2QsZUFBZW9CO1lBQWU7O1FBRTlFYSxPQUFPLFNBQUNWLHVCQUE4Q1Q7bUJBQXVCLHdDQUN4RVMsd0JBQ0gscUJBQUNULE1BQU1DLElBQUksRUFBRztnQkFBRUMsTUFBTWQsaUJBQWlCWSxPQUFPZCxlQUFlb0I7WUFBZTs7UUFFOUVjLE9BQU8sU0FBQ1gsdUJBQThDVDttQkFBdUIsd0NBQ3hFUyx3QkFDSCxxQkFBQ1QsTUFBTUMsSUFBSSxFQUFHO2dCQUFFQyxNQUFNZCxpQkFBaUJZLE9BQU8sSUFBSWhCLFlBQVlILGVBQWV5QjtZQUFlOztRQUU5RmUsVUFBVSxTQUFDWix1QkFBOENUO21CQUEwQix3Q0FDOUVTLHdCQUNILHFCQUFDVCxNQUFNQyxJQUFJLEVBQUc7Z0JBQUVDLE1BQU12QjtZQUFlOztRQUV2QzJDLFFBQVEsU0FBQ2IsdUJBQThDVDtZQUNyRCxJQUFNdUIsZ0JBQWdCLEFBQUMsR0FBNEMsT0FBMUNqQyxrQkFBa0JlLFlBQVlMLE1BQU1DLElBQUksR0FBRTtZQUNuRSxJQUFJQyxPQUFvQixJQUFJdEIsZ0JBQWdCO2dCQUMxQ3FCLE1BQU1zQjtnQkFDTkMsUUFBUXhCLE1BQU15QixPQUFPLENBQUNDLE1BQU0sQ0FBQyxTQUFDRixRQUFRRztvQkFDcEMsSUFBSSxPQUFPQSxXQUFXLFlBQVlBLE9BQU9DLEtBQUssRUFBRTt3QkFDOUMsT0FBTyx3Q0FDRkosU0FDSCxxQkFBQ25DLFdBQVdzQyxPQUFPQyxLQUFLLEdBQUk7NEJBQzFCQSxPQUFPRCxPQUFPQyxLQUFLO3dCQUNyQjtvQkFFSjtvQkFFQSxJQUFJLE9BQU9ELFdBQVcsVUFBVTt3QkFDOUIsT0FBTyx3Q0FDRkgsU0FDSCxxQkFBQ0csUUFBUzs0QkFDUkMsT0FBT0Q7d0JBQ1Q7b0JBRUo7b0JBRUEsT0FBT0g7Z0JBQ1QsR0FBRyxDQUFDO1lBQ047WUFFQXRCLE9BQU9GLE1BQU1VLE9BQU8sR0FBRyxJQUFJMUIsWUFBWWtCLFFBQVFBO1lBQy9DQSxPQUFPZCxpQkFBaUJZLE9BQU9FLE1BQU1JO1lBRXJDLE9BQU8sd0NBQ0ZHLHdCQUNILHFCQUFDVCxNQUFNQyxJQUFJLEVBQUc7Z0JBQUVDLE1BQUFBO1lBQUs7UUFFekI7UUFDQTJCLGNBQWMsU0FBQ3BCLHVCQUE4Q1Q7WUFDM0QsSUFBTSxBQUFFOEIsYUFBZTlCLE1BQWY4QjtZQUVSLElBQUk1QjtZQUVKLElBQUk2QixNQUFNQyxPQUFPLENBQUNGLGFBQWE7Z0JBQzdCLElBQU1HLFdBQVcsQUFBQyxHQUEyRCxPQUF6RDNDLGtCQUFrQmUsWUFBWVosUUFBUU8sTUFBTUMsSUFBSSxFQUFFLFFBQU87Z0JBQzdFQyxPQUFPLElBQUlwQix1QkFBdUI7b0JBQ2hDbUIsTUFBTWdDO29CQUNObkMsUUFBUTt3QkFDTmdDLFlBQVk7NEJBQ1Y1QixNQUFNLElBQUl0QixnQkFBZ0I7Z0NBQ3hCcUIsTUFBTSxBQUFDLEdBQVcsT0FBVGdDLFVBQVM7Z0NBQ2xCVCxRQUFRTSxXQUFXSixNQUFNLENBQUMsU0FBQ0YsUUFBUUc7MkNBQVksd0NBQzFDSCxTQUNILHFCQUFDbkMsV0FBV3NDLFNBQVU7d0NBQ3BCQyxPQUFPRDtvQ0FDVDttQ0FDRSxDQUFDOzRCQUNQO3dCQUNGO3dCQUNBQyxPQUFPOzRCQUFFMUIsTUFBTWY7d0JBQVk7b0JBQzdCO2dCQUNGO1lBQ0YsT0FBTztnQkFDTGUsT0FBT1Asb0JBQW9CUyxRQUFROEIsV0FBVyxDQUFDSixXQUFXLENBQUNsQyxNQUFNO1lBQ25FO1lBRUEsT0FBTyx3Q0FDRmEsd0JBQ0gscUJBQUNULE1BQU1DLElBQUksRUFBRztnQkFBRUMsTUFBTUYsTUFBTVUsT0FBTyxHQUFHLElBQUkxQixZQUFZa0IsUUFBUUE7WUFBSztRQUV2RTtRQUNBaUMsT0FBTyxTQUFDMUIsdUJBQThDVDtZQUNwRCxJQUFNaUMsV0FBVzNDLGtCQUFrQmUsWUFBWVosUUFBUU8sTUFBTUMsSUFBSSxFQUFFO1lBQ25FLElBQUlDLE9BQStDQyx1QkFBdUJDLFNBQVM2QixVQUFVakMsTUFBTUYsTUFBTSxFQUFFbUM7WUFDM0cvQixPQUFPLElBQUlsQixZQUFZSSxpQkFBaUJZLE9BQU9FLE1BQU1JO1lBQ3JELE9BQU8sd0NBQ0ZHLHdCQUNILHFCQUFDVCxNQUFNQyxJQUFJLEVBQUc7Z0JBQUVDLE1BQUFBO1lBQUs7UUFFekI7UUFDQWtDLE9BQU8sU0FBQzNCLHVCQUE4Q1Q7WUFDcEQsSUFBTXFDLDBCQUEwQjNDLDhCQUE4Qk07WUFDOUQsSUFBTWlDLFdBQVczQyxrQkFBa0JlLFlBQVlaLFFBQVFPLE1BQU1DLElBQUksRUFBRTtZQUNuRSxJQUFJQyxPQUFvQkMsdUJBQXVCQyxTQUFTNkIsVUFBVWpDLE1BQU1GLE1BQU0sRUFBRW1DO1lBQ2hGLElBQUlJLHlCQUF5Qm5DLE9BQU8sSUFBSWpCLGVBQWVpQjtZQUN2RCxPQUFPLHdDQUNGTyx3QkFDSCxxQkFBQ1QsTUFBTUMsSUFBSSxFQUFHO2dCQUFFQyxNQUFBQTtZQUFLO1FBRXpCO1FBQ0FvQyxRQUFRLFNBQUM3Qix1QkFBOENUO21CQUF1Qix3Q0FDekVTLHdCQUNILHFCQUFDVCxNQUFNQyxJQUFJLEVBQUc7Z0JBQUVDLE1BQU1mO1lBQVk7O1FBRXBDb0QsS0FBSyxTQUFDOUIsdUJBQThDVDttQkFBb0JBLE1BQU1GLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQyxTQUFDYyxLQUFLQztnQkFDaEcsSUFBTUMsY0FBY25DLGdCQUFnQixDQUFDa0MsU0FBU3ZDLElBQUksQ0FBQztnQkFDbkQsSUFBSXdDLGFBQWEsT0FBT0EsWUFBWUYsS0FBS0M7Z0JBQ3pDLE9BQU9EO1lBQ1QsR0FBRy9COztRQUNIa0MsYUFBYSxTQUFDbEMsdUJBQThDVDttQkFBNEJBLE1BQU1GLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQyxTQUFDYyxLQUFLQztnQkFDaEgsSUFBTUMsY0FBY25DLGdCQUFnQixDQUFDa0MsU0FBU3ZDLElBQUksQ0FBQztnQkFDbkQsSUFBSXdDLGFBQWEsT0FBT0EsWUFBWUYsS0FBS0M7Z0JBQ3pDLE9BQU9EO1lBQ1QsR0FBRy9COztRQUNIbUMsTUFBTSxTQUFDbkMsdUJBQThDVDtZQUNuRCxPQUFPQSxNQUFNNEMsSUFBSSxDQUFDbEIsTUFBTSxDQUFDLFNBQUNjLEtBQUtLO2dCQUM3QixJQUFJckQsV0FBV3FELE1BQU07b0JBQ25CLElBQU1aLFdBQVczQyxrQkFBa0JlLFlBQVlaLFFBQVFvRCxJQUFJNUMsSUFBSSxFQUFFO29CQUNqRSxJQUFNb0MsMEJBQTBCM0MsOEJBQThCTTtvQkFDOUQsSUFBSUUsT0FBb0JDLHVCQUF1QkMsU0FBUzZCLFVBQVVZLElBQUkvQyxNQUFNLEVBQUVtQztvQkFDOUUsSUFBSUkseUJBQXlCbkMsT0FBTyxJQUFJakIsZUFBZWlCO29CQUV2RCxPQUFPLHdDQUNGTyx3QkFDSCxxQkFBQ29DLElBQUk1QyxJQUFJLEVBQUc7d0JBQUVDLE1BQUFBO29CQUFLO2dCQUV2QjtnQkFFQSxPQUFPLG1CQUNGc0MsS0FDQUssSUFBSS9DLE1BQU0sQ0FBQzRCLE1BQU0sQ0FBQyxTQUFDb0IsZ0JBQWdCTDtvQkFDcEMsSUFBTUMsY0FBY25DLGdCQUFnQixDQUFDa0MsU0FBU3ZDLElBQUksQ0FBQztvQkFDbkQsSUFBSXdDLGFBQWEsT0FBT0EsWUFBWUksZ0JBQWdCTDtvQkFDcEQsT0FBT0s7Z0JBQ1QsR0FBR047WUFFUCxHQUFHL0I7UUFDTDtJQUNGO0lBRUEsSUFBTXNDLFlBQVkxRCxXQUFXWTtJQUU3QixPQUFPLElBQUluQix1QkFBdUI7UUFDaENtQixNQUFNLEFBQUMsV0FBb0IsT0FBVjhDLFdBQVU7UUFDM0JqRCxRQUFRQSxPQUFPNEIsTUFBTSxDQUFDLFNBQUNqQix1QkFBdUJUO1lBQzVDLElBQU1nRCxjQUFjekMsZ0JBQWdCLENBQUNQLE1BQU1FLElBQUksQ0FBQztZQUVoRCxJQUFJLE9BQU84QyxnQkFBZ0IsWUFBWTtnQkFDckMsT0FBT3ZDO1lBQ1Q7WUFFQSxPQUFPLG1CQUNGQSx1QkFDQXVDLFlBQVl2Qyx1QkFBdUJUO1FBRTFDLEdBQUcsQ0FBQztJQUNOO0FBQ0Y7QUFFQSxlQUFlRyx1QkFBdUIifQ==