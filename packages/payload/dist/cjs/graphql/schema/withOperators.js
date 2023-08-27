"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "withOperators", {
    enumerable: true,
    get: function() {
        return withOperators;
    }
});
var _graphql = require("graphql");
var _graphqltypejson = require("graphql-type-json");
var _graphqlscalars = require("graphql-scalars");
var _types = require("../../fields/config/types");
var _combineParentName = /*#__PURE__*/ _interop_require_default(require("../utilities/combineParentName"));
var _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
var _operators = /*#__PURE__*/ _interop_require_default(require("./operators"));
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
var GeoJSONObject = new _graphql.GraphQLInputObjectType({
    name: "GeoJSONObject",
    fields: {
        type: {
            type: _graphql.GraphQLString
        },
        coordinates: {
            type: _graphqltypejson.GraphQLJSON
        }
    }
});
var defaults = {
    number: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.comparison)).map(function(operator) {
            return {
                name: operator,
                type: function(field) {
                    var _field;
                    return ((_field = field) === null || _field === void 0 ? void 0 : _field.name) === "id" ? _graphql.GraphQLInt : _graphql.GraphQLFloat;
                }
            };
        }))
    },
    text: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.partial), _to_consumable_array(_operators.default.contains)).map(function(operator) {
            return {
                name: operator,
                type: _graphql.GraphQLString
            };
        }))
    },
    email: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.partial), _to_consumable_array(_operators.default.contains)).map(function(operator) {
            return {
                name: operator,
                type: _graphqlscalars.EmailAddressResolver
            };
        }))
    },
    textarea: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.partial)).map(function(operator) {
            return {
                name: operator,
                type: _graphql.GraphQLString
            };
        }))
    },
    richText: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.partial)).map(function(operator) {
            return {
                name: operator,
                type: _graphqltypejson.GraphQLJSON
            };
        }))
    },
    json: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.partial), _to_consumable_array(_operators.default.geojson)).map(function(operator) {
            return {
                name: operator,
                type: _graphqltypejson.GraphQLJSON
            };
        }))
    },
    code: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.partial)).map(function(operator) {
            return {
                name: operator,
                type: _graphql.GraphQLString
            };
        }))
    },
    radio: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.partial)).map(function(operator) {
            return {
                name: operator,
                type: function(field, parentName) {
                    return new _graphql.GraphQLEnumType({
                        name: "".concat((0, _combineParentName.default)(parentName, field.name), "_Input"),
                        values: field.options.reduce(function(values, option) {
                            if ((0, _types.optionIsObject)(option)) {
                                return _object_spread_props(_object_spread({}, values), _define_property({}, (0, _formatName.default)(option.value), {
                                    value: option.value
                                }));
                            }
                            return _object_spread_props(_object_spread({}, values), _define_property({}, (0, _formatName.default)(option), {
                                value: option
                            }));
                        }, {})
                    });
                }
            };
        }))
    },
    date: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.comparison), [
            "like"
        ]).map(function(operator) {
            return {
                name: operator,
                type: _graphqlscalars.DateTimeResolver
            };
        }))
    },
    point: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.comparison), _to_consumable_array(_operators.default.geo)).map(function(operator) {
            return {
                name: operator,
                type: new _graphql.GraphQLList(_graphql.GraphQLFloat)
            };
        })).concat(_to_consumable_array(_operators.default.geojson.map(function(operator) {
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
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.contains)).map(function(operator) {
            return {
                name: operator,
                type: _graphql.GraphQLString
            };
        }))
    },
    upload: {
        operators: _to_consumable_array(_operators.default.equality.map(function(operator) {
            return {
                name: operator,
                type: _graphql.GraphQLString
            };
        }))
    },
    checkbox: {
        operators: _to_consumable_array(_operators.default.equality.map(function(operator) {
            return {
                name: operator,
                type: _graphql.GraphQLBoolean
            };
        }))
    },
    select: {
        operators: _to_consumable_array(_to_consumable_array(_operators.default.equality).concat(_to_consumable_array(_operators.default.contains)).map(function(operator) {
            return {
                name: operator,
                type: function(field, parentName) {
                    return new _graphql.GraphQLEnumType({
                        name: "".concat((0, _combineParentName.default)(parentName, field.name), "_Input"),
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
var withOperators = function(field, parentName) {
    var _defaults;
    if (!((_defaults = defaults) === null || _defaults === void 0 ? void 0 : _defaults[field.type])) throw new Error("Error: ".concat(field.type, " has no defaults configured."));
    var name = "".concat((0, _combineParentName.default)(parentName, field.name), "_operator");
    // Get the default operators for the field type which are hard-coded above
    var fieldOperators = _to_consumable_array(defaults[field.type].operators);
    if (!("required" in field) || !field.required) {
        fieldOperators.push({
            name: "exists",
            type: fieldOperators[0].type
        });
    }
    return new _graphql.GraphQLInputObjectType({
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
                gqlType = new _graphql.GraphQLList(gqlType);
            } else if (operator.name === "exists") {
                gqlType = _graphql.GraphQLBoolean;
            }
            return _object_spread_props(_object_spread({}, objectTypeFields), _define_property({}, operator.name, {
                type: gqlType
            }));
        }, {})
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS93aXRoT3BlcmF0b3JzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMSW5wdXRPYmplY3RUeXBlLCBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMTGlzdCwgR3JhcGhRTEZsb2F0LCBHcmFwaFFMRW51bVR5cGUsIEdyYXBoUUxJbnQgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB0eXBlIHsgR3JhcGhRTFR5cGUgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IEdyYXBoUUxKU09OIH0gZnJvbSAnZ3JhcGhxbC10eXBlLWpzb24nO1xuaW1wb3J0IHsgRGF0ZVRpbWVSZXNvbHZlciwgRW1haWxBZGRyZXNzUmVzb2x2ZXIgfSBmcm9tICdncmFwaHFsLXNjYWxhcnMnO1xuaW1wb3J0IHsgRmllbGRBZmZlY3RpbmdEYXRhLCBOdW1iZXJGaWVsZCwgUmFkaW9GaWVsZCwgUmVsYXRpb25zaGlwRmllbGQsIFNlbGVjdEZpZWxkLCBvcHRpb25Jc09iamVjdCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGNvbWJpbmVQYXJlbnROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9jb21iaW5lUGFyZW50TmFtZSc7XG5pbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5pbXBvcnQgb3BlcmF0b3JzIGZyb20gJy4vb3BlcmF0b3JzJztcblxudHlwZSBzdGF0aWNUeXBlcyA9ICdudW1iZXInIHwgJ3RleHQnIHwgJ2VtYWlsJyB8ICd0ZXh0YXJlYScgfCAncmljaFRleHQnIHwgJ2pzb24nIHwgJ2NvZGUnIHwgJ2NoZWNrYm94JyB8ICdkYXRlJyB8ICd1cGxvYWQnIHwgJ3BvaW50JyB8ICdyZWxhdGlvbnNoaXAnXG5cbnR5cGUgZHluYW1pY1R5cGVzID0gJ3JhZGlvJyB8ICdzZWxlY3QnXG5cbmNvbnN0IEdlb0pTT05PYmplY3QgPSBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gIG5hbWU6ICdHZW9KU09OT2JqZWN0JyxcbiAgZmllbGRzOiB7XG4gICAgdHlwZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgY29vcmRpbmF0ZXM6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxKU09OLFxuICAgIH0sXG4gIH0sXG59KTtcblxudHlwZSBEZWZhdWx0c1R5cGUgPSB7XG4gIFtrZXkgaW4gc3RhdGljVHlwZXNdOiB7XG4gICAgb3BlcmF0b3JzOiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICB0eXBlOiBHcmFwaFFMVHlwZSB8ICgoZmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSwgcGFyZW50TmFtZTogc3RyaW5nKSA9PiBHcmFwaFFMVHlwZSk7XG4gICAgfVtdO1xuICB9XG59ICYge1xuICBba2V5IGluIGR5bmFtaWNUeXBlc106IHtcbiAgICBvcGVyYXRvcnM6IHtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIHR5cGU6ICgoZmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSwgcGFyZW50TmFtZTogc3RyaW5nKSA9PiBHcmFwaFFMVHlwZSk7XG4gICAgfVtdO1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRzOiBEZWZhdWx0c1R5cGUgPSB7XG4gIG51bWJlcjoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLmNvbXBhcmlzb25dLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiAoZmllbGQ6IE51bWJlckZpZWxkKTogR3JhcGhRTFR5cGUgPT4ge1xuICAgICAgICAgIHJldHVybiBmaWVsZD8ubmFtZSA9PT0gJ2lkJyA/IEdyYXBoUUxJbnQgOiBHcmFwaFFMRmxvYXQ7XG4gICAgICAgIH0sXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWwsIC4uLm9wZXJhdG9ycy5jb250YWluc10ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5wYXJ0aWFsLCAuLi5vcGVyYXRvcnMuY29udGFpbnNdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBFbWFpbEFkZHJlc3NSZXNvbHZlcixcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICB0ZXh0YXJlYToge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWxdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIHJpY2hUZXh0OiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMucGFydGlhbF0ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IEdyYXBoUUxKU09OLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIGpzb246IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5wYXJ0aWFsLCAuLi5vcGVyYXRvcnMuZ2VvanNvbl0ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IEdyYXBoUUxKU09OLFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIGNvZGU6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5wYXJ0aWFsXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICByYWRpbzoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLnBhcnRpYWxdLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiAoZmllbGQ6IFJhZGlvRmllbGQsIHBhcmVudE5hbWUpOiBHcmFwaFFMVHlwZSA9PiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fSW5wdXRgLFxuICAgICAgICAgIHZhbHVlczogZmllbGQub3B0aW9ucy5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAob3B0aW9uSXNPYmplY3Qob3B0aW9uKSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICBbZm9ybWF0TmFtZShvcHRpb24udmFsdWUpXToge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgIFtmb3JtYXROYW1lKG9wdGlvbildOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSwge30pLFxuICAgICAgICB9KSxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBkYXRlOiB7XG4gICAgb3BlcmF0b3JzOiBbXG4gICAgICAuLi5bLi4ub3BlcmF0b3JzLmVxdWFsaXR5LCAuLi5vcGVyYXRvcnMuY29tcGFyaXNvbiwgJ2xpa2UnXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogRGF0ZVRpbWVSZXNvbHZlcixcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBwb2ludDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLmNvbXBhcmlzb24sIC4uLm9wZXJhdG9ycy5nZW9dLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoR3JhcGhRTEZsb2F0KSxcbiAgICAgIH0pKSxcbiAgICAgIC4uLm9wZXJhdG9ycy5nZW9qc29uLm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICAvKipcbiAgICAgICAgICogQGV4YW1wbGU6XG4gICAgICAgICAqIHdpdGhpbjoge1xuICAgICAgICAgKiAgdHlwZTogXCJQb2x5Z29uXCIsXG4gICAgICAgICAqICBjb29yZGluYXRlczogW1tcbiAgICAgICAgICogICBbMC4wLCAwLjBdLFxuICAgICAgICAgKiAgIFsxLjAsIDEuMF0sXG4gICAgICAgICAqICAgWzEuMCwgMC4wXSxcbiAgICAgICAgICogICBbMC4wLCAwLjBdLFxuICAgICAgICAgKiAgXV0sXG4gICAgICAgICAqIH1cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogaW50ZXJzZWN0czoge1xuICAgICAgICAgKiAgdHlwZTogXCJQb2ludFwiLFxuICAgICAgICAgKiAgY29vcmRpbmF0ZXM6IFsgMC41LCAwLjUgXVxuICAgICAgICAgKiB9XG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBHZW9KU09OT2JqZWN0LFxuICAgICAgfSkpLFxuICAgIF0sXG4gIH0sXG4gIHJlbGF0aW9uc2hpcDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4uWy4uLm9wZXJhdG9ycy5lcXVhbGl0eSwgLi4ub3BlcmF0b3JzLmNvbnRhaW5zXS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICB1cGxvYWQ6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLm9wZXJhdG9ycy5lcXVhbGl0eS5tYXAoKG9wZXJhdG9yKSA9PiAoe1xuICAgICAgICBuYW1lOiBvcGVyYXRvcixcbiAgICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBjaGVja2JveDoge1xuICAgIG9wZXJhdG9yczogW1xuICAgICAgLi4ub3BlcmF0b3JzLmVxdWFsaXR5Lm1hcCgob3BlcmF0b3IpID0+ICh7XG4gICAgICAgIG5hbWU6IG9wZXJhdG9yLFxuICAgICAgICB0eXBlOiBHcmFwaFFMQm9vbGVhbixcbiAgICAgIH0pKSxcbiAgICBdLFxuICB9LFxuICBzZWxlY3Q6IHtcbiAgICBvcGVyYXRvcnM6IFtcbiAgICAgIC4uLlsuLi5vcGVyYXRvcnMuZXF1YWxpdHksIC4uLm9wZXJhdG9ycy5jb250YWluc10ubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgbmFtZTogb3BlcmF0b3IsXG4gICAgICAgIHR5cGU6IChmaWVsZDogU2VsZWN0RmllbGQsIHBhcmVudE5hbWUpOiBHcmFwaFFMVHlwZSA9PiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fSW5wdXRgLFxuICAgICAgICAgIHZhbHVlczogZmllbGQub3B0aW9ucy5yZWR1Y2UoKHZhbHVlcywgb3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgb3B0aW9uLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKG9wdGlvbi52YWx1ZSldOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICBbb3B0aW9uXToge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICAgIH0sIHt9KSxcbiAgICAgICAgfSksXG4gICAgICB9KSksXG4gICAgXSxcbiAgfSxcbiAgLy8gYXJyYXk6IG4vYVxuICAvLyBncm91cDogbi9hXG4gIC8vIHJvdzogbi9hXG4gIC8vIGNvbGxhcHNpYmxlOiBuL2FcbiAgLy8gdGFiczogbi9hXG59O1xuXG5jb25zdCBsaXN0T3BlcmF0b3JzID0gWydpbicsICdub3RfaW4nLCAnYWxsJ107XG5cbmNvbnN0IGdxbFR5cGVDYWNoZTogUmVjb3JkPHN0cmluZywgR3JhcGhRTFR5cGU+ID0ge307XG5cbi8qKlxuICogSW4gR3JhcGhRTCwgeW91IGNhbiB1c2UgXCJ3aGVyZVwiIGFzIGFuIGFyZ3VtZW50IHRvIGZpbHRlciBhIGNvbGxlY3Rpb24uIEV4YW1wbGU6XG4gKiB7IFBvc3RzKHdoZXJlOiB7IHRpdGxlOiB7IGVxdWFsczogXCJIZWxsb1wiIH0gfSkgeyB0ZXh0IH0gfVxuICogVGhpcyBmdW5jdGlvbiBkZWZpbmVzIHRoZSBvcGVyYXRvcnMgZm9yIGEgZmllbGQncyBjb25kaXRpb24gaW4gdGhlIFwid2hlcmVcIiBhcmd1bWVudCBvZiB0aGUgY29sbGVjdGlvbiAoaXQgdGh1cyBnZXRzIGNhbGxlZCBmb3IgZXZlcnkgZmllbGQpLlxuICogRm9yIGV4YW1wbGUsIGluIHRoZSBleGFtcGxlIGFib3ZlLCBpdCB3b3VsZCBjb250cm9sIHRoYXRcbiAqIC0gXCJlcXVhbHNcIiBpcyBhIHZhbGlkIG9wZXJhdG9yIGZvciB0aGUgXCJ0aXRsZVwiIGZpZWxkXG4gKiAtIHRoZSBhY2NlcHRlZCB0eXBlIG9mIHRoZSBcImVxdWFsc1wiIGFyZ3VtZW50IGhhcyB0byBiZSBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gZmllbGQgdGhlIGZpZWxkIGZvciB3aGljaCB0aGVpciB2YWxpZCBvcGVyYXRvcnMgaW5zaWRlIGEgXCJ3aGVyZVwiIGFyZ3VtZW50IGlzIGJlaW5nIGRlZmluZWRcbiAqIEBwYXJhbSBwYXJlbnROYW1lIHRoZSBuYW1lIG9mIHRoZSBwYXJlbnQgZmllbGQgKGlmIGFueSlcbiAqIEByZXR1cm5zIGFsbCB0aGUgb3BlcmF0b3JzIChpbmNsdWRpbmcgdGhlaXIgdHlwZXMpIHdoaWNoIGNhbiBiZSB1c2VkIGFzIGEgY29uZGl0aW9uIGZvciBhIGdpdmVuIGZpZWxkIGluc2lkZSBhIHdoZXJlXG4gKi9cbmV4cG9ydCBjb25zdCB3aXRoT3BlcmF0b3JzID0gKGZpZWxkOiBGaWVsZEFmZmVjdGluZ0RhdGEsIHBhcmVudE5hbWU6IHN0cmluZyk6IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUgPT4ge1xuICBpZiAoIWRlZmF1bHRzPy5bZmllbGQudHlwZV0pIHRocm93IG5ldyBFcnJvcihgRXJyb3I6ICR7ZmllbGQudHlwZX0gaGFzIG5vIGRlZmF1bHRzIGNvbmZpZ3VyZWQuYCk7XG5cbiAgY29uc3QgbmFtZSA9IGAke2NvbWJpbmVQYXJlbnROYW1lKHBhcmVudE5hbWUsIGZpZWxkLm5hbWUpfV9vcGVyYXRvcmA7XG5cbiAgLy8gR2V0IHRoZSBkZWZhdWx0IG9wZXJhdG9ycyBmb3IgdGhlIGZpZWxkIHR5cGUgd2hpY2ggYXJlIGhhcmQtY29kZWQgYWJvdmVcbiAgY29uc3QgZmllbGRPcGVyYXRvcnMgPSBbLi4uZGVmYXVsdHNbZmllbGQudHlwZV0ub3BlcmF0b3JzXTtcblxuICBpZiAoISgncmVxdWlyZWQnIGluIGZpZWxkKSB8fCAhZmllbGQucmVxdWlyZWQpIHtcbiAgICBmaWVsZE9wZXJhdG9ycy5wdXNoKHtcbiAgICAgIG5hbWU6ICdleGlzdHMnLFxuICAgICAgdHlwZTogZmllbGRPcGVyYXRvcnNbMF0udHlwZSxcbiAgICB9KTtcbiAgfVxuXG5cbiAgcmV0dXJuIG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICBuYW1lLFxuICAgIGZpZWxkczogZmllbGRPcGVyYXRvcnMucmVkdWNlKChvYmplY3RUeXBlRmllbGRzLCBvcGVyYXRvcikgPT4ge1xuICAgICAgLy8gR2V0IHRoZSB0eXBlIG9mIHRoZSBvcGVyYXRvci4gSXQgY2FuIGJlIGVpdGhlciBzdGF0aWMsIG9yIGR5bmFtaWMgKD0+IGEgZnVuY3Rpb24pXG4gICAgICBsZXQgZ3FsVHlwZTogR3JhcGhRTFR5cGUgPSB0eXBlb2Ygb3BlcmF0b3IudHlwZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IG9wZXJhdG9yLnR5cGUoZmllbGQsIHBhcmVudE5hbWUpXG4gICAgICAgIDogb3BlcmF0b3IudHlwZTtcblxuICAgICAgLy8gR3JhcGhRTCBkb2VzIG5vdCBhbGxvdyB0eXBlcyB3aXRoIGR1cGxpY2F0ZSBuYW1lcywgc28gd2UgdXNlIHRoaXMgY2FjaGUgdG8gYXZvaWQgdGhhdC5cbiAgICAgIC8vIFdpdGhvdXQgdGhpcywgc2VsZWN0IGFuZCByYWRpbyBmaWVsZHMgd291bGQgaGF2ZSB0aGUgc2FtZSBuYW1lLCBhbmQgR3JhcGhRTCB3b3VsZCB0aHJvdyBhbiBlcnJvclxuICAgICAgLy8gVGhpcyB1c3VhbGx5IG9ubHkgaGFwcGVucyBpZiBhIGN1c3RvbSB0eXBlIGlzIHJldHVybmVkIGZyb20gdGhlIG9wZXJhdG9yLnR5cGUgZnVuY3Rpb25cbiAgICAgIGlmICh0eXBlb2Ygb3BlcmF0b3IudHlwZSA9PT0gJ2Z1bmN0aW9uJyAmJiAnbmFtZScgaW4gZ3FsVHlwZSkge1xuICAgICAgICBpZiAoZ3FsVHlwZUNhY2hlW2dxbFR5cGUubmFtZV0pIHtcbiAgICAgICAgICBncWxUeXBlID0gZ3FsVHlwZUNhY2hlW2dxbFR5cGUubmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ3FsVHlwZUNhY2hlW2dxbFR5cGUubmFtZV0gPSBncWxUeXBlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0T3BlcmF0b3JzLmluY2x1ZGVzKG9wZXJhdG9yLm5hbWUpKSB7XG4gICAgICAgIGdxbFR5cGUgPSBuZXcgR3JhcGhRTExpc3QoZ3FsVHlwZSk7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yLm5hbWUgPT09ICdleGlzdHMnKSB7XG4gICAgICAgIGdxbFR5cGUgPSBHcmFwaFFMQm9vbGVhbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ub2JqZWN0VHlwZUZpZWxkcyxcbiAgICAgICAgW29wZXJhdG9yLm5hbWVdOiB7XG4gICAgICAgICAgdHlwZTogZ3FsVHlwZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSwge30pLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsid2l0aE9wZXJhdG9ycyIsIkdlb0pTT05PYmplY3QiLCJHcmFwaFFMSW5wdXRPYmplY3RUeXBlIiwibmFtZSIsImZpZWxkcyIsInR5cGUiLCJHcmFwaFFMU3RyaW5nIiwiY29vcmRpbmF0ZXMiLCJHcmFwaFFMSlNPTiIsImRlZmF1bHRzIiwibnVtYmVyIiwib3BlcmF0b3JzIiwiZXF1YWxpdHkiLCJjb21wYXJpc29uIiwibWFwIiwib3BlcmF0b3IiLCJmaWVsZCIsIkdyYXBoUUxJbnQiLCJHcmFwaFFMRmxvYXQiLCJ0ZXh0IiwicGFydGlhbCIsImNvbnRhaW5zIiwiZW1haWwiLCJFbWFpbEFkZHJlc3NSZXNvbHZlciIsInRleHRhcmVhIiwicmljaFRleHQiLCJqc29uIiwiZ2VvanNvbiIsImNvZGUiLCJyYWRpbyIsInBhcmVudE5hbWUiLCJHcmFwaFFMRW51bVR5cGUiLCJjb21iaW5lUGFyZW50TmFtZSIsInZhbHVlcyIsIm9wdGlvbnMiLCJyZWR1Y2UiLCJvcHRpb24iLCJvcHRpb25Jc09iamVjdCIsImZvcm1hdE5hbWUiLCJ2YWx1ZSIsImRhdGUiLCJEYXRlVGltZVJlc29sdmVyIiwicG9pbnQiLCJnZW8iLCJHcmFwaFFMTGlzdCIsInJlbGF0aW9uc2hpcCIsInVwbG9hZCIsImNoZWNrYm94IiwiR3JhcGhRTEJvb2xlYW4iLCJzZWxlY3QiLCJsaXN0T3BlcmF0b3JzIiwiZ3FsVHlwZUNhY2hlIiwiRXJyb3IiLCJmaWVsZE9wZXJhdG9ycyIsInJlcXVpcmVkIiwicHVzaCIsIm9iamVjdFR5cGVGaWVsZHMiLCJncWxUeXBlIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZ1BhQTs7O2VBQUFBOzs7dUJBaFBpSDsrQkFFbEc7OEJBQzJCO3FCQUNxRDt3RUFDOUU7aUVBQ1A7Z0VBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCLElBQU1DLGdCQUFnQixJQUFJQywrQkFBc0IsQ0FBQztJQUMvQ0MsTUFBTTtJQUNOQyxRQUFRO1FBQ05DLE1BQU07WUFBRUEsTUFBTUMsc0JBQWE7UUFBQztRQUM1QkMsYUFBYTtZQUNYRixNQUFNRyw0QkFBVztRQUNuQjtJQUNGO0FBQ0Y7QUFrQkEsSUFBTUMsV0FBeUI7SUFDN0JDLFFBQVE7UUFDTkMsV0FDRSxxQkFBRyxBQUFDLHFCQUFHQSxrQkFBUyxDQUFDQyxRQUFRLFNBQUUscUJBQUdELGtCQUFTLENBQUNFLFVBQVUsR0FBRUMsR0FBRyxDQUFDLFNBQUNDO21CQUFjO2dCQUNyRVosTUFBTVk7Z0JBQ05WLE1BQU0sU0FBQ1c7d0JBQ0VBO29CQUFQLE9BQU9BLEVBQUFBLFNBQUFBLG1CQUFBQSw2QkFBQUEsT0FBT2IsSUFBSSxNQUFLLE9BQU9jLG1CQUFVLEdBQUdDLHFCQUFZO2dCQUN6RDtZQUNGOztJQUVKO0lBQ0FDLE1BQU07UUFDSlIsV0FDRSxxQkFBRyxBQUFDLHFCQUFHQSxrQkFBUyxDQUFDQyxRQUFRLFNBQUUscUJBQUdELGtCQUFTLENBQUNTLE9BQU8sR0FBRSxxQkFBR1Qsa0JBQVMsQ0FBQ1UsUUFBUSxHQUFFUCxHQUFHLENBQUMsU0FBQ0M7bUJBQWM7Z0JBQ3pGWixNQUFNWTtnQkFDTlYsTUFBTUMsc0JBQWE7WUFDckI7O0lBRUo7SUFDQWdCLE9BQU87UUFDTFgsV0FDRSxxQkFBRyxBQUFDLHFCQUFHQSxrQkFBUyxDQUFDQyxRQUFRLFNBQUUscUJBQUdELGtCQUFTLENBQUNTLE9BQU8sR0FBRSxxQkFBR1Qsa0JBQVMsQ0FBQ1UsUUFBUSxHQUFFUCxHQUFHLENBQUMsU0FBQ0M7bUJBQWM7Z0JBQ3pGWixNQUFNWTtnQkFDTlYsTUFBTWtCLG9DQUFvQjtZQUM1Qjs7SUFFSjtJQUNBQyxVQUFVO1FBQ1JiLFdBQ0UscUJBQUcsQUFBQyxxQkFBR0Esa0JBQVMsQ0FBQ0MsUUFBUSxTQUFFLHFCQUFHRCxrQkFBUyxDQUFDUyxPQUFPLEdBQUVOLEdBQUcsQ0FBQyxTQUFDQzttQkFBYztnQkFDbEVaLE1BQU1ZO2dCQUNOVixNQUFNQyxzQkFBYTtZQUNyQjs7SUFFSjtJQUNBbUIsVUFBVTtRQUNSZCxXQUNFLHFCQUFHLEFBQUMscUJBQUdBLGtCQUFTLENBQUNDLFFBQVEsU0FBRSxxQkFBR0Qsa0JBQVMsQ0FBQ1MsT0FBTyxHQUFFTixHQUFHLENBQUMsU0FBQ0M7bUJBQWM7Z0JBQ2xFWixNQUFNWTtnQkFDTlYsTUFBTUcsNEJBQVc7WUFDbkI7O0lBRUo7SUFDQWtCLE1BQU07UUFDSmYsV0FDRSxxQkFBRyxBQUFDLHFCQUFHQSxrQkFBUyxDQUFDQyxRQUFRLFNBQUUscUJBQUdELGtCQUFTLENBQUNTLE9BQU8sR0FBRSxxQkFBR1Qsa0JBQVMsQ0FBQ2dCLE9BQU8sR0FBRWIsR0FBRyxDQUFDLFNBQUNDO21CQUFjO2dCQUN4RlosTUFBTVk7Z0JBQ05WLE1BQU1HLDRCQUFXO1lBQ25COztJQUVKO0lBQ0FvQixNQUFNO1FBQ0pqQixXQUNFLHFCQUFHLEFBQUMscUJBQUdBLGtCQUFTLENBQUNDLFFBQVEsU0FBRSxxQkFBR0Qsa0JBQVMsQ0FBQ1MsT0FBTyxHQUFFTixHQUFHLENBQUMsU0FBQ0M7bUJBQWM7Z0JBQ2xFWixNQUFNWTtnQkFDTlYsTUFBTUMsc0JBQWE7WUFDckI7O0lBRUo7SUFDQXVCLE9BQU87UUFDTGxCLFdBQ0UscUJBQUcsQUFBQyxxQkFBR0Esa0JBQVMsQ0FBQ0MsUUFBUSxTQUFFLHFCQUFHRCxrQkFBUyxDQUFDUyxPQUFPLEdBQUVOLEdBQUcsQ0FBQyxTQUFDQzttQkFBYztnQkFDbEVaLE1BQU1ZO2dCQUNOVixNQUFNLFNBQUNXLE9BQW1CYzsyQkFBNEIsSUFBSUMsd0JBQWUsQ0FBQzt3QkFDeEU1QixNQUFNLEFBQUMsR0FBNEMsT0FBMUM2QixJQUFBQSwwQkFBaUIsRUFBQ0YsWUFBWWQsTUFBTWIsSUFBSSxHQUFFO3dCQUNuRDhCLFFBQVFqQixNQUFNa0IsT0FBTyxDQUFDQyxNQUFNLENBQUMsU0FBQ0YsUUFBUUc7NEJBQ3BDLElBQUlDLElBQUFBLHFCQUFjLEVBQUNELFNBQVM7Z0NBQzFCLE9BQU8sd0NBQ0ZILFNBQ0gscUJBQUNLLElBQUFBLG1CQUFVLEVBQUNGLE9BQU9HLEtBQUssR0FBSTtvQ0FDMUJBLE9BQU9ILE9BQU9HLEtBQUs7Z0NBQ3JCOzRCQUVKOzRCQUVBLE9BQU8sd0NBQ0ZOLFNBQ0gscUJBQUNLLElBQUFBLG1CQUFVLEVBQUNGLFNBQVU7Z0NBQ3BCRyxPQUFPSDs0QkFDVDt3QkFFSixHQUFHLENBQUM7b0JBQ047O1lBQ0Y7O0lBRUo7SUFDQUksTUFBTTtRQUNKN0IsV0FDRSxxQkFBRyxBQUFDLHFCQUFHQSxrQkFBUyxDQUFDQyxRQUFRLFNBQUUscUJBQUdELGtCQUFTLENBQUNFLFVBQVUsR0FBL0M7WUFBaUQ7U0FBTyxFQUFDQyxHQUFHLENBQUMsU0FBQ0M7bUJBQWM7Z0JBQzdFWixNQUFNWTtnQkFDTlYsTUFBTW9DLGdDQUFnQjtZQUN4Qjs7SUFFSjtJQUNBQyxPQUFPO1FBQ0wvQixXQUFXLEFBQ1QscUJBQUcsQUFBQyxxQkFBR0Esa0JBQVMsQ0FBQ0MsUUFBUSxTQUFFLHFCQUFHRCxrQkFBUyxDQUFDRSxVQUFVLEdBQUUscUJBQUdGLGtCQUFTLENBQUNnQyxHQUFHLEdBQUU3QixHQUFHLENBQUMsU0FBQ0M7bUJBQWM7Z0JBQ3ZGWixNQUFNWTtnQkFDTlYsTUFBTSxJQUFJdUMsb0JBQVcsQ0FBQzFCLHFCQUFZO1lBQ3BDO21CQUNBLHFCQUFHUCxrQkFBUyxDQUFDZ0IsT0FBTyxDQUFDYixHQUFHLENBQUMsU0FBQ0M7bUJBQWM7Z0JBQ3RDWixNQUFNWTtnQkFDTjs7Ozs7Ozs7Ozs7Ozs7OztTQWdCQyxHQUNEVixNQUFNSjtZQUNSOztJQUVKO0lBQ0E0QyxjQUFjO1FBQ1psQyxXQUNFLHFCQUFHLEFBQUMscUJBQUdBLGtCQUFTLENBQUNDLFFBQVEsU0FBRSxxQkFBR0Qsa0JBQVMsQ0FBQ1UsUUFBUSxHQUFFUCxHQUFHLENBQUMsU0FBQ0M7bUJBQWM7Z0JBQ25FWixNQUFNWTtnQkFDTlYsTUFBTUMsc0JBQWE7WUFDckI7O0lBRUo7SUFDQXdDLFFBQVE7UUFDTm5DLFdBQ0UscUJBQUdBLGtCQUFTLENBQUNDLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDO21CQUFjO2dCQUN2Q1osTUFBTVk7Z0JBQ05WLE1BQU1DLHNCQUFhO1lBQ3JCOztJQUVKO0lBQ0F5QyxVQUFVO1FBQ1JwQyxXQUNFLHFCQUFHQSxrQkFBUyxDQUFDQyxRQUFRLENBQUNFLEdBQUcsQ0FBQyxTQUFDQzttQkFBYztnQkFDdkNaLE1BQU1ZO2dCQUNOVixNQUFNMkMsdUJBQWM7WUFDdEI7O0lBRUo7SUFDQUMsUUFBUTtRQUNOdEMsV0FDRSxxQkFBRyxBQUFDLHFCQUFHQSxrQkFBUyxDQUFDQyxRQUFRLFNBQUUscUJBQUdELGtCQUFTLENBQUNVLFFBQVEsR0FBRVAsR0FBRyxDQUFDLFNBQUNDO21CQUFjO2dCQUNuRVosTUFBTVk7Z0JBQ05WLE1BQU0sU0FBQ1csT0FBb0JjOzJCQUE0QixJQUFJQyx3QkFBZSxDQUFDO3dCQUN6RTVCLE1BQU0sQUFBQyxHQUE0QyxPQUExQzZCLElBQUFBLDBCQUFpQixFQUFDRixZQUFZZCxNQUFNYixJQUFJLEdBQUU7d0JBQ25EOEIsUUFBUWpCLE1BQU1rQixPQUFPLENBQUNDLE1BQU0sQ0FBQyxTQUFDRixRQUFRRzs0QkFDcEMsSUFBSSxPQUFPQSxXQUFXLFlBQVlBLE9BQU9HLEtBQUssRUFBRTtnQ0FDOUMsT0FBTyx3Q0FDRk4sU0FDSCxxQkFBQ0ssSUFBQUEsbUJBQVUsRUFBQ0YsT0FBT0csS0FBSyxHQUFJO29DQUMxQkEsT0FBT0gsT0FBT0csS0FBSztnQ0FDckI7NEJBRUo7NEJBRUEsSUFBSSxPQUFPSCxXQUFXLFVBQVU7Z0NBQzlCLE9BQU8sd0NBQ0ZILFNBQ0gscUJBQUNHLFFBQVM7b0NBQ1JHLE9BQU9IO2dDQUNUOzRCQUVKOzRCQUVBLE9BQU9IO3dCQUNULEdBQUcsQ0FBQztvQkFDTjs7WUFDRjs7SUFFSjtBQU1GO0FBRUEsSUFBTWlCLGdCQUFnQjtJQUFDO0lBQU07SUFBVTtDQUFNO0FBRTdDLElBQU1DLGVBQTRDLENBQUM7QUFjNUMsSUFBTW5ELGdCQUFnQixTQUFDZ0IsT0FBMkJjO1FBQ2xEckI7SUFBTCxJQUFJLEdBQUNBLFlBQUFBLHNCQUFBQSxnQ0FBQUEsU0FBVSxDQUFDTyxNQUFNWCxJQUFJLENBQUMsR0FBRSxNQUFNLElBQUkrQyxNQUFNLEFBQUMsVUFBb0IsT0FBWHBDLE1BQU1YLElBQUksRUFBQztJQUVsRSxJQUFNRixPQUFPLEFBQUMsR0FBNEMsT0FBMUM2QixJQUFBQSwwQkFBaUIsRUFBQ0YsWUFBWWQsTUFBTWIsSUFBSSxHQUFFO0lBRTFELDBFQUEwRTtJQUMxRSxJQUFNa0QsaUJBQWtCLHFCQUFHNUMsUUFBUSxDQUFDTyxNQUFNWCxJQUFJLENBQUMsQ0FBQ00sU0FBUztJQUV6RCxJQUFJLENBQUUsQ0FBQSxjQUFjSyxLQUFJLEtBQU0sQ0FBQ0EsTUFBTXNDLFFBQVEsRUFBRTtRQUM3Q0QsZUFBZUUsSUFBSSxDQUFDO1lBQ2xCcEQsTUFBTTtZQUNORSxNQUFNZ0QsY0FBYyxDQUFDLEVBQUUsQ0FBQ2hELElBQUk7UUFDOUI7SUFDRjtJQUdBLE9BQU8sSUFBSUgsK0JBQXNCLENBQUM7UUFDaENDLE1BQUFBO1FBQ0FDLFFBQVFpRCxlQUFlbEIsTUFBTSxDQUFDLFNBQUNxQixrQkFBa0J6QztZQUMvQyxvRkFBb0Y7WUFDcEYsSUFBSTBDLFVBQXVCLE9BQU8xQyxTQUFTVixJQUFJLEtBQUssYUFDaERVLFNBQVNWLElBQUksQ0FBQ1csT0FBT2MsY0FDckJmLFNBQVNWLElBQUk7WUFFakIseUZBQXlGO1lBQ3pGLG1HQUFtRztZQUNuRyx5RkFBeUY7WUFDekYsSUFBSSxPQUFPVSxTQUFTVixJQUFJLEtBQUssY0FBYyxVQUFVb0QsU0FBUztnQkFDNUQsSUFBSU4sWUFBWSxDQUFDTSxRQUFRdEQsSUFBSSxDQUFDLEVBQUU7b0JBQzlCc0QsVUFBVU4sWUFBWSxDQUFDTSxRQUFRdEQsSUFBSSxDQUFDO2dCQUN0QyxPQUFPO29CQUNMZ0QsWUFBWSxDQUFDTSxRQUFRdEQsSUFBSSxDQUFDLEdBQUdzRDtnQkFDL0I7WUFDRjtZQUVBLElBQUlQLGNBQWNRLFFBQVEsQ0FBQzNDLFNBQVNaLElBQUksR0FBRztnQkFDekNzRCxVQUFVLElBQUliLG9CQUFXLENBQUNhO1lBQzVCLE9BQU8sSUFBSTFDLFNBQVNaLElBQUksS0FBSyxVQUFVO2dCQUNyQ3NELFVBQVVULHVCQUFjO1lBQzFCO1lBRUEsT0FBTyx3Q0FDRlEsbUJBQ0gscUJBQUN6QyxTQUFTWixJQUFJLEVBQUc7Z0JBQ2ZFLE1BQU1vRDtZQUNSO1FBRUosR0FBRyxDQUFDO0lBQ047QUFDRiJ9