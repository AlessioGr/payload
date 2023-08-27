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
import { GraphQLBoolean, GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLFloat, GraphQLEnumType, GraphQLInt } from "graphql";
import { GraphQLJSON } from "graphql-type-json";
import { DateTimeResolver, EmailAddressResolver } from "graphql-scalars";
import { optionIsObject } from "../../fields/config/types";
import combineParentName from "../utilities/combineParentName";
import formatName from "../utilities/formatName";
import operators from "./operators";
var GeoJSONObject = new GraphQLInputObjectType({
    name: "GeoJSONObject",
    fields: {
        type: {
            type: GraphQLString
        },
        coordinates: {
            type: GraphQLJSON
        }
    }
});
var defaults = {
    number: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.comparison)).map(function(operator) {
            return {
                name: operator,
                type: function(field) {
                    var _field;
                    return ((_field = field) === null || _field === void 0 ? void 0 : _field.name) === "id" ? GraphQLInt : GraphQLFloat;
                }
            };
        }))
    },
    text: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.partial), _to_consumable_array(operators.contains)).map(function(operator) {
            return {
                name: operator,
                type: GraphQLString
            };
        }))
    },
    email: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.partial), _to_consumable_array(operators.contains)).map(function(operator) {
            return {
                name: operator,
                type: EmailAddressResolver
            };
        }))
    },
    textarea: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.partial)).map(function(operator) {
            return {
                name: operator,
                type: GraphQLString
            };
        }))
    },
    richText: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.partial)).map(function(operator) {
            return {
                name: operator,
                type: GraphQLJSON
            };
        }))
    },
    json: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.partial), _to_consumable_array(operators.geojson)).map(function(operator) {
            return {
                name: operator,
                type: GraphQLJSON
            };
        }))
    },
    code: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.partial)).map(function(operator) {
            return {
                name: operator,
                type: GraphQLString
            };
        }))
    },
    radio: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.partial)).map(function(operator) {
            return {
                name: operator,
                type: function(field, parentName) {
                    return new GraphQLEnumType({
                        name: "".concat(combineParentName(parentName, field.name), "_Input"),
                        values: field.options.reduce(function(values, option) {
                            if (optionIsObject(option)) {
                                return _object_spread_props(_object_spread({}, values), _define_property({}, formatName(option.value), {
                                    value: option.value
                                }));
                            }
                            return _object_spread_props(_object_spread({}, values), _define_property({}, formatName(option), {
                                value: option
                            }));
                        }, {})
                    });
                }
            };
        }))
    },
    date: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.comparison), [
            "like"
        ]).map(function(operator) {
            return {
                name: operator,
                type: DateTimeResolver
            };
        }))
    },
    point: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.comparison), _to_consumable_array(operators.geo)).map(function(operator) {
            return {
                name: operator,
                type: new GraphQLList(GraphQLFloat)
            };
        })).concat(_to_consumable_array(operators.geojson.map(function(operator) {
            return {
                name: operator,
                /**
         * @example:
         * within: {
         *  type: "Polygon",
         *  coordinates: [[
         *   [0.0, 0.0],
         *   [1.0, 1.0],
         *   [1.0, 0.0],
         *   [0.0, 0.0],
         *  ]],
         * }
         * @example
         * intersects: {
         *  type: "Point",
         *  coordinates: [ 0.5, 0.5 ]
         * }
         */ type: GeoJSONObject
            };
        })))
    },
    relationship: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.contains)).map(function(operator) {
            return {
                name: operator,
                type: GraphQLString
            };
        }))
    },
    upload: {
        operators: _to_consumable_array(operators.equality.map(function(operator) {
            return {
                name: operator,
                type: GraphQLString
            };
        }))
    },
    checkbox: {
        operators: _to_consumable_array(operators.equality.map(function(operator) {
            return {
                name: operator,
                type: GraphQLBoolean
            };
        }))
    },
    select: {
        operators: _to_consumable_array(_to_consumable_array(operators.equality).concat(_to_consumable_array(operators.contains)).map(function(operator) {
            return {
                name: operator,
                type: function(field, parentName) {
                    return new GraphQLEnumType({
                        name: "".concat(combineParentName(parentName, field.name), "_Input"),
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
                }
            };
        }))
    }
};
var listOperators = [
    "in",
    "not_in",
    "all"
];
var gqlTypeCache = {};
/**
 * In GraphQL, you can use "where" as an argument to filter a collection. Example:
 * { Posts(where: { title: { equals: "Hello" } }) { text } }
 * This function defines the operators for a field's condition in the "where" argument of the collection (it thus gets called for every field).
 * For example, in the example above, it would control that
 * - "equals" is a valid operator for the "title" field
 * - the accepted type of the "equals" argument has to be a string.
 *
 * @param field the field for which their valid operators inside a "where" argument is being defined
 * @param parentName the name of the parent field (if any)
 * @returns all the operators (including their types) which can be used as a condition for a given field inside a where
 */ export var withOperators = function(field, parentName) {
    var _defaults;
    if (!((_defaults = defaults) === null || _defaults === void 0 ? void 0 : _defaults[field.type])) throw new Error("Error: ".concat(field.type, " has no defaults configured."));
    var name = "".concat(combineParentName(parentName, field.name), "_operator");
    // Get the default operators for the field type which are hard-coded above
    var fieldOperators = _to_consumable_array(defaults[field.type].operators);
    if (!("required" in field) || !field.required) {
        fieldOperators.push({
            name: "exists",
            type: fieldOperators[0].type
        });
    }
    return new GraphQLInputObjectType({
        name: name,
        fields: fieldOperators.reduce(function(objectTypeFields, operator) {
            // Get the type of the operator. It can be either static, or dynamic (=> a function)
            var gqlType = typeof operator.type === "function" ? operator.type(field, parentName) : operator.type;
            // GraphQL does not allow types with duplicate names, so we use this cache to avoid that.
            // Without this, select and radio fields would have the same name, and GraphQL would throw an error
            // This usually only happens if a custom type is returned from the operator.type function
            if (typeof operator.type === "function" && "name" in gqlType) {
                if (gqlTypeCache[gqlType.name]) {
                    gqlType = gqlTypeCache[gqlType.name];
                } else {
                    gqlTypeCache[gqlType.name] = gqlType;
                }
            }
            if (listOperators.includes(operator.name)) {
                gqlType = new GraphQLList(gqlType);
            } else if (operator.name === "exists") {
                gqlType = GraphQLBoolean;
            }
            return _object_spread_props(_object_spread({}, objectTypeFields), _define_property({}, operator.name, {
                type: gqlType
            }));
        }, {})
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS93aXRoT3BlcmF0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMSW5wdXRPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMTGlzdCwgR3JhcGhRTEZsb2F0LCBHcmFwaFFMRW51bVR5cGUsIEdyYXBoUUxJbnQgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgR3JhcGhRTFR5cGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IEdyYXBoUUxKU09OIH0gZnJvbSAnZ3JhcGhxbC10eXBlLWpzb24nO1xuaW1wb3J0IHsgRGF0ZVRpbWVSZXNvbHZlciwgRW1haWxBZGRyZXNzUmVzb2x2ZXIgfSBmcm9tICdncmFwaHFsLXNjYWxhcnMnO1xuaW1wb3J0IHsgRmllbGRBZmZlY3RpbmdEYXRhLCBOdW1iZXJGaWVsZCwgUmFkaW9GaWVsZCwgUmVsYXRpb25zaGlwRmllbGQsIFNlbGVjdEZpZWxkLCBvcHRpb25Jc09iamVjdCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGNvbWJpbmVQYXJlbnROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9jb21iaW5lUGFyZW50TmFtZSc7XG5pbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5pbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vb3BlcmF0b3JzJztcblxudHlwZSBzdGF0aWNUeXBlcyA9ICdudW1iZXInIHwgJ3RleHQnIHwgJ2VtYWlsJyB8ICd0ZXh0YXJlYScgfCAncmljaFRleHQnIHwgJ2pzb24nIHwgJ2NvZGUnIHwgJ2NoZWNrYm94JyB8ICdkYXRlJyB8ICd1cGxvYWQnIHwgJ3BvaW50JyB8ICdyZWxhdGlvbnNoaXAnXG5cbnR5cGUgZHluYW1pY1R5cGVzID0gJ3JhZGlvJyB8ICdzZWxlY3QnXG5cbmNvbnN0IEdlb0pTT05PYmplY3QgPSBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdHZW9KU09OT2JqZWN0JyxcbiAgZmllbGRzOiB7XG4gICAgdHlwZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxKU09OLFxuICAgIH0sXG4gIH0sXG59KTtcblxudHlwZSBEZWZhdWx0c1R5cGUgPSB7XG4gIFtrZXkgaW4gc3RhdGljVHlwZXNdOiB7XG4gICAgb3BlcmF0b3JzOiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICB0eXBlOiBHcmFwaFFMVHlwZSB8ICgoZmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSwgcGFyZW50TmFtZTogc3RyaW5nKSA9PiBHcmFwaFFMVHlwZSk7XG4gICAgfVtdO1xuICB9XG59ICYge1xuICBba2V5IGluIGR5bmFtaWNUeXBlc106IHtcbiAgICBvcGVyYXRvcnM6IHtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIHR5cGU6ICgoZmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSwgcGFyZW50TmFtZTogc3RyaW5nKSA9PiBHcmFwaFFMVHlwZSk7XG4gICAgfVtdO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRzOiBEZWZhdWx0c1R5cGUgPSB7XG4gIG51bWJlcjoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLmNvbXBhcmlzb25dLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiAoZmllbGQ6IE51bWJlckZpZWxkKTogR3JhcGhRTFR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiBmaWVsZD8ubmFtZSA9PT0gJ2lkJyA/IEdyYXBoUUxJbnQgOiBHcmFwaFFMRmxvYXQ7XG4gICAgICAgIH0sXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWwsIC4uLm9wZXJhdG9ycy5jb250YWluc10ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5wYXJ0aWFsLCAuLi5vcGVyYXRvcnMuY29udGFpbnNdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBFbWFpbEFkZHJlc3NSZXNvbHZlcixcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICB0ZXh0YXJlYToge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWxdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIHJpY2hUZXh0OiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMucGFydGlhbF0ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IEdyYXBoUUxKU09OLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIGpzb246IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5wYXJ0aWFsLCAuLi5vcGVyYXRvcnMuZ2VvanNvbl0ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IEdyYXBoUUxKU09OLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIGNvZGU6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5wYXJ0aWFsXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICByYWRpbzoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWxdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiAoZmllbGQ6IFJhZGlvRmllbGQsIHBhcmVudE5hbWUpOiBHcmFwaFFMVHlwZSA9PiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fSW5wdXRgLFxuICAgICAgICAgIHZhbHVlczogZmllbGQub3B0aW9ucy5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uSXNPYmplY3Qob3B0aW9uKSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICBbZm9ybWF0TmFtZShvcHRpb24udmFsdWUpXToge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgIFtmb3JtYXROYW1lKG9wdGlvbildOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSwge30pLFxuICAgICAgICB9KSxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBkYXRlOiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMuY29tcGFyaXNvbiwgJ2xpa2UnXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogRGF0ZVRpbWVSZXNvbHZlcixcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBwb2ludDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLmNvbXBhcmlzb24sIC4uLm9wZXJhdG9ycy5nZW9dLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoR3JhcGhRTEZsb2F0KSxcbiAgICAgIH0pKSxcbiAgICAgIC4uLm9wZXJhdG9ycy5nZW9qc29uLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICAvKipcbiAgICAgICAgICogQGV4YW1wbGU6XG4gICAgICAgICAqIHdpdGhpbjoge1xuICAgICAgICAgKiAgdHlwZTogXCJQb2x5Z29uXCIsXG4gICAgICAgICAqICBjb29yZGluYXRlczogW1tcbiAgICAgICAgICogICBbMC4wLCAwLjBdLFxuICAgICAgICAgKiAgIFsxLjAsIDEuMF0sXG4gICAgICAgICAqICAgWzEuMCwgMC4wXSxcbiAgICAgICAgICogICBbMC4wLCAwLjBdLFxuICAgICAgICAgKiAgXV0sXG4gICAgICAgICAqIH1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogaW50ZXJzZWN0czoge1xuICAgICAgICAgKiAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgKiAgY29vcmRpbmF0ZXM6IFsgMC41LCAwLjUgXVxuICAgICAgICAgKiB9XG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBHZW9KU09OT2JqZWN0LFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIHJlbGF0aW9uc2hpcDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLmNvbnRhaW5zXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICB1cGxvYWQ6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLm9wZXJhdG9ycy5lcXVhbGl0eS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBjaGVja2JveDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4ub3BlcmF0b3JzLmVxdWFsaXR5Lm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMQm9vbGVhbixcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBzZWxlY3Q6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5jb250YWluc10ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IChmaWVsZDogU2VsZWN0RmllbGQsIHBhcmVudE5hbWUpOiBHcmFwaFFMVHlwZSA9PiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fSW5wdXRgLFxuICAgICAgICAgIHZhbHVlczogZmllbGQub3B0aW9ucy5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgb3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKG9wdGlvbi52YWx1ZSldOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICBbb3B0aW9uXToge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgfSksXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgLy8gYXJyYXk6IG4vYVxuICAvLyBncm91cDogbi9hXG4gIC8vIHJvdzogbi9hXG4gIC8vIGNvbGxhcHNpYmxlOiBuL2FcbiAgLy8gdGFiczogbi9hXG59O1xuXG5jb25zdCBsaXN0T3BlcmF0b3JzID0gWydpbicsICdub3RfaW4nLCAnYWxsJ107XG5cbmNvbnN0IGdxbFR5cGVDYWNoZTogUmVjb3JkPHN0cmluZywgR3JhcGhRTFR5cGU+ID0ge307XG5cbi8qKlxuICogSW4gR3JhcGhRTCwgeW91IGNhbiB1c2UgXCJ3aGVyZVwiIGFzIGFuIGFyZ3VtZW50IHRvIGZpbHRlciBhIGNvbGxlY3Rpb24uIEV4YW1wbGU6XG4gKiB7IFBvc3RzKHdoZXJlOiB7IHRpdGxlOiB7IGVxdWFsczogXCJIZWxsb1wiIH0gfSkgeyB0ZXh0IH0gfVxuICogVGhpcyBmdW5jdGlvbiBkZWZpbmVzIHRoZSBvcGVyYXRvcnMgZm9yIGEgZmllbGQncyBjb25kaXRpb24gaW4gdGhlIFwid2hlcmVcIiBhcmd1bWVudCBvZiB0aGUgY29sbGVjdGlvbiAoaXQgdGh1cyBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgZmllbGQpLlxuICogRm9yIGV4YW1wbGUsIGluIHRoZSBleGFtcGxlIGFib3ZlLCBpdCB3b3VsZCBjb250cm9sIHRoYXRcbiAqIC0gXCJlcXVhbHNcIiBpcyBhIHZhbGlkIG9wZXJhdG9yIGZvciB0aGUgXCJ0aXRsZVwiIGZpZWxkXG4gKiAtIHRoZSBhY2NlcHRlZCB0eXBlIG9mIHRoZSBcImVxdWFsc1wiIGFyZ3VtZW50IGhhcyB0byBiZSBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gZmllbGQgdGhlIGZpZWxkIGZvciB3aGljaCB0aGVpciB2YWxpZCBvcGVyYXRvcnMgaW5zaWRlIGEgXCJ3aGVyZVwiIGFyZ3VtZW50IGlzIGJlaW5nIGRlZmluZWRcbiAqIEBwYXJhbSBwYXJlbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBwYXJlbnQgZmllbGQgKGlmIGFueSlcbiAqIEByZXR1cm5zIGFsbCB0aGUgb3BlcmF0b3JzIChpbmNsdWRpbmcgdGhlaXIgdHlwZXMpIHdoaWNoIGNhbiBiZSB1c2VkIGFzIGEgY29uZGl0aW9uIGZvciBhIGdpdmVuIGZpZWxkIGluc2lkZSBhIHdoZXJlXG4gKi9cbmV4cG9ydCBjb25zdCB3aXRoT3BlcmF0b3JzID0gKGZpZWxkOiBGaWVsZEFmZmVjdGluZ0RhdGEsIHBhcmVudE5hbWU6IHN0cmluZyk6IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUgPT4ge1xuICBpZiAoIWRlZmF1bHRzPy5bZmllbGQudHlwZV0pIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7ZmllbGQudHlwZX0gaGFzIG5vIGRlZmF1bHRzIGNvbmZpZ3VyZWQuYCk7XG5cbiAgY29uc3QgbmFtZSA9IGAke2NvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIGZpZWxkLm5hbWUpfV9vcGVyYXRvcmA7XG5cbiAgLy8gR2V0IHRoZSBkZWZhdWx0IG9wZXJhdG9ycyBmb3IgdGhlIGZpZWxkIHR5cGUgd2hpY2ggYXJlIGhhcmQtY29kZWQgYWJvdmVcbiAgY29uc3QgZmllbGRPcGVyYXRvcnMgPSBbLi4uZGVmYXVsdHNbZmllbGQudHlwZV0ub3BlcmF0b3JzXTtcblxuICBpZiAoISgncmVxdWlyZWQnIGluIGZpZWxkKSB8fCAhZmllbGQucmVxdWlyZWQpIHtcbiAgICBmaWVsZE9wZXJhdG9ycy5wdXNoKHtcbiAgICAgIG5hbWU6ICdleGlzdHMnLFxuICAgICAgdHlwZTogZmllbGRPcGVyYXRvcnNbMF0udHlwZSxcbiAgICB9KTtcbiAgfVxuXG5cbiAgcmV0dXJuIG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICBuYW1lLFxuICAgIGZpZWxkczogZmllbGRPcGVyYXRvcnMucmVkdWNlKChvYmplY3RUeXBlRmllbGRzLCBvcGVyYXRvcikgPT4ge1xuICAgICAgLy8gR2V0IHRoZSB0eXBlIG9mIHRoZSBvcGVyYXRvci4gSXQgY2FuIGJlIGVpdGhlciBzdGF0aWMsIG9yIGR5bmFtaWMgKD0+IGEgZnVuY3Rpb24pXG4gICAgICBsZXQgZ3FsVHlwZTogR3JhcGhRTFR5cGUgPSB0eXBlb2Ygb3BlcmF0b3IudHlwZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9wZXJhdG9yLnR5cGUoZmllbGQsIHBhcmVudE5hbWUpXG4gICAgICAgIDogb3BlcmF0b3IudHlwZTtcblxuICAgICAgLy8gR3JhcGhRTCBkb2VzIG5vdCBhbGxvdyB0eXBlcyB3aXRoIGR1cGxpY2F0ZSBuYW1lcywgc28gd2UgdXNlIHRoaXMgY2FjaGUgdG8gYXZvaWQgdGhhdC5cbiAgICAgIC8vIFdpdGhvdXQgdGhpcywgc2VsZWN0IGFuZCByYWRpbyBmaWVsZHMgd291bGQgaGF2ZSB0aGUgc2FtZSBuYW1lLCBhbmQgR3JhcGhRTCB3b3VsZCB0aHJvdyBhbiBlcnJvclxuICAgICAgLy8gVGhpcyB1c3VhbGx5IG9ubHkgaGFwcGVucyBpZiBhIGN1c3RvbSB0eXBlIGlzIHJldHVybmVkIGZyb20gdGhlIG9wZXJhdG9yLnR5cGUgZnVuY3Rpb25cbiAgICAgIGlmICh0eXBlb2Ygb3BlcmF0b3IudHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAnbmFtZScgaW4gZ3FsVHlwZSkge1xuICAgICAgICBpZiAoZ3FsVHlwZUNhY2hlW2dxbFR5cGUubmFtZV0pIHtcbiAgICAgICAgICBncWxUeXBlID0gZ3FsVHlwZUNhY2hlW2dxbFR5cGUubmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ3FsVHlwZUNhY2hlW2dxbFR5cGUubmFtZV0gPSBncWxUeXBlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0T3BlcmF0b3JzLmluY2x1ZGVzKG9wZXJhdG9yLm5hbWUpKSB7XG4gICAgICAgIGdxbFR5cGUgPSBuZXcgR3JhcGhRTExpc3QoZ3FsVHlwZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yLm5hbWUgPT09ICdleGlzdHMnKSB7XG4gICAgICAgIGdxbFR5cGUgPSBHcmFwaFFMQm9vbGVhbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2JqZWN0VHlwZUZpZWxkcyxcbiAgICAgICAgW29wZXJhdG9yLm5hbWVdOiB7XG4gICAgICAgICAgdHlwZTogZ3FsVHlwZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSwge30pLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsiR3JhcGhRTEJvb2xlYW4iLCJHcmFwaFFMSW5wdXRPYmplY3RUeXBlIiwiR3JhcGhRTFN0cmluZyIsIkdyYXBoUUxMaXN0IiwiR3JhcGhRTEZsb2F0IiwiR3JhcGhRTEVudW1UeXBlIiwiR3JhcGhRTEludCIsIkdyYXBoUUxKU09OIiwiRGF0ZVRpbWVSZXNvbHZlciIsIkVtYWlsQWRkcmVzc1Jlc29sdmVyIiwib3B0aW9uSXNPYmplY3QiLCJjb21iaW5lUGFyZW50TmFtZSIsImZvcm1hdE5hbWUiLCJvcGVyYXRvcnMiLCJHZW9KU09OT2JqZWN0IiwibmFtZSIsImZpZWxkcyIsInR5cGUiLCJjb29yZGluYXRlcyIsImRlZmF1bHRzIiwibnVtYmVyIiwiZXF1YWxpdHkiLCJjb21wYXJpc29uIiwibWFwIiwib3BlcmF0b3IiLCJmaWVsZCIsInRleHQiLCJwYXJ0aWFsIiwiY29udGFpbnMiLCJlbWFpbCIsInRleHRhcmVhIiwicmljaFRleHQiLCJqc29uIiwiZ2VvanNvbiIsImNvZGUiLCJyYWRpbyIsInBhcmVudE5hbWUiLCJ2YWx1ZXMiLCJvcHRpb25zIiwicmVkdWNlIiwib3B0aW9uIiwidmFsdWUiLCJkYXRlIiwicG9pbnQiLCJnZW8iLCJyZWxhdGlvbnNoaXAiLCJ1cGxvYWQiLCJjaGVja2JveCIsInNlbGVjdCIsImxpc3RPcGVyYXRvcnMiLCJncWxUeXBlQ2FjaGUiLCJ3aXRoT3BlcmF0b3JzIiwiRXJyb3IiLCJmaWVsZE9wZXJhdG9ycyIsInJlcXVpcmVkIiwicHVzaCIsIm9iamVjdFR5cGVGaWVsZHMiLCJncWxUeXBlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsY0FBYyxFQUFFQyxzQkFBc0IsRUFBRUMsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxVQUFVLFFBQVEsVUFBVTtBQUV4SSxTQUFTQyxXQUFXLFFBQVEsb0JB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