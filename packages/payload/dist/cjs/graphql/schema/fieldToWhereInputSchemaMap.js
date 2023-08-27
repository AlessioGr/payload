"use strict";
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
var _withOperators = require("./withOperators");
var _combineParentName = /*#__PURE__*/ _interop_require_default(require("../utilities/combineParentName"));
var _formatName = /*#__PURE__*/ _interop_require_default(require("../utilities/formatName"));
var _recursivelyBuildNestedPaths = /*#__PURE__*/ _interop_require_default(require("./recursivelyBuildNestedPaths"));
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
var fieldToSchemaMap = function(parentName, nestedFieldName) {
    return {
        number: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        text: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        email: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        textarea: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        richText: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        json: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        code: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        radio: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        date: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        point: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        relationship: function(field) {
            if (Array.isArray(field.relationTo)) {
                return {
                    type: new _graphql.GraphQLInputObjectType({
                        name: "".concat((0, _combineParentName.default)(parentName, field.name), "_Relation"),
                        fields: {
                            relationTo: {
                                type: new _graphql.GraphQLEnumType({
                                    name: "".concat((0, _combineParentName.default)(parentName, field.name), "_Relation_RelationTo"),
                                    values: field.relationTo.reduce(function(values, relation) {
                                        return _object_spread_props(_object_spread({}, values), _define_property({}, (0, _formatName.default)(relation), {
                                            value: relation
                                        }));
                                    }, {})
                                })
                            },
                            value: {
                                type: _graphql.GraphQLString
                            }
                        }
                    })
                };
            }
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        upload: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        checkbox: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        select: function(field) {
            return {
                type: (0, _withOperators.withOperators)(field, parentName)
            };
        },
        array: function(field) {
            return (0, _recursivelyBuildNestedPaths.default)(parentName, nestedFieldName, field);
        },
        group: function(field) {
            return (0, _recursivelyBuildNestedPaths.default)(parentName, nestedFieldName, field);
        },
        row: function(field) {
            return (0, _recursivelyBuildNestedPaths.default)(parentName, nestedFieldName, field);
        },
        collapsible: function(field) {
            return (0, _recursivelyBuildNestedPaths.default)(parentName, nestedFieldName, field);
        },
        tabs: function(field) {
            return (0, _recursivelyBuildNestedPaths.default)(parentName, nestedFieldName, field);
        }
    };
};
var _default = fieldToSchemaMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9maWVsZFRvV2hlcmVJbnB1dFNjaGVtYU1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBHcmFwaFFMRW51bVR5cGUsXG4gIEdyYXBoUUxJbnB1dE9iamVjdFR5cGUsXG4gIEdyYXBoUUxTdHJpbmcsXG59IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHtcbiAgQXJyYXlGaWVsZCxcbiAgQ2hlY2tib3hGaWVsZCxcbiAgQ29kZUZpZWxkLCBDb2xsYXBzaWJsZUZpZWxkLCBEYXRlRmllbGQsXG4gIEVtYWlsRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsIGZpZWxkSGFzU3ViRmllbGRzLCBHcm91cEZpZWxkLFxuICBKU09ORmllbGQsXG4gIE51bWJlckZpZWxkLCBQb2ludEZpZWxkLFxuICBSYWRpb0ZpZWxkLCBSZWxhdGlvbnNoaXBGaWVsZCxcbiAgUmljaFRleHRGaWVsZCwgUm93RmllbGQsIFNlbGVjdEZpZWxkLFxuICBUYWJzRmllbGQsXG4gIFRleHRhcmVhRmllbGQsXG4gIFRleHRGaWVsZCwgVXBsb2FkRmllbGQsXG59IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgd2l0aE9wZXJhdG9ycyB9IGZyb20gJy4vd2l0aE9wZXJhdG9ycyc7XG5pbXBvcnQgY29tYmluZVBhcmVudE5hbWUgZnJvbSAnLi4vdXRpbGl0aWVzL2NvbWJpbmVQYXJlbnROYW1lJztcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJztcbmltcG9ydCByZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMgZnJvbSAnLi9yZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMnO1xuXG5jb25zdCBmaWVsZFRvU2NoZW1hTWFwID0gKHBhcmVudE5hbWU6IHN0cmluZywgbmVzdGVkRmllbGROYW1lPzogc3RyaW5nKTogYW55ID0+ICh7XG4gIG51bWJlcjogKGZpZWxkOiBOdW1iZXJGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICB0ZXh0OiAoZmllbGQ6IFRleHRGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICBlbWFpbDogKGZpZWxkOiBFbWFpbEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIHRleHRhcmVhOiAoZmllbGQ6IFRleHRhcmVhRmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhcbiAgICAgIGZpZWxkLFxuICAgICAgcGFyZW50TmFtZSxcbiAgICApLFxuICB9KSxcbiAgcmljaFRleHQ6IChmaWVsZDogUmljaFRleHRGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICBqc29uOiAoZmllbGQ6IEpTT05GaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICBjb2RlOiAoZmllbGQ6IENvZGVGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICByYWRpbzogKGZpZWxkOiBSYWRpb0ZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIGRhdGU6IChmaWVsZDogRGF0ZUZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIHBvaW50OiAoZmllbGQ6IFBvaW50RmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhcbiAgICAgIGZpZWxkLFxuICAgICAgcGFyZW50TmFtZSxcbiAgICApLFxuICB9KSxcbiAgcmVsYXRpb25zaGlwOiAoZmllbGQ6IFJlbGF0aW9uc2hpcEZpZWxkKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQucmVsYXRpb25UbykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fUmVsYXRpb25gLFxuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgcmVsYXRpb25Ubzoge1xuICAgICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fUmVsYXRpb25fUmVsYXRpb25Ub2AsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBmaWVsZC5yZWxhdGlvblRvLnJlZHVjZSgodmFsdWVzLCByZWxhdGlvbikgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKHJlbGF0aW9uKV06IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlbGF0aW9uLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSwge30pLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgICBmaWVsZCxcbiAgICAgICAgcGFyZW50TmFtZSxcbiAgICAgICksXG4gICAgfTtcbiAgfSxcbiAgdXBsb2FkOiAoZmllbGQ6IFVwbG9hZEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIGNoZWNrYm94OiAoZmllbGQ6IENoZWNrYm94RmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhcbiAgICAgIGZpZWxkLFxuICAgICAgcGFyZW50TmFtZSxcbiAgICApLFxuICB9KSxcbiAgc2VsZWN0OiAoZmllbGQ6IFNlbGVjdEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIGFycmF5OiAoZmllbGQ6IEFycmF5RmllbGQpID0+IHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyhwYXJlbnROYW1lLCBuZXN0ZWRGaWVsZE5hbWUsIGZpZWxkKSxcbiAgZ3JvdXA6IChmaWVsZDogR3JvdXBGaWVsZCkgPT4gcmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzKHBhcmVudE5hbWUsIG5lc3RlZEZpZWxkTmFtZSwgZmllbGQpLFxuICByb3c6IChmaWVsZDogUm93RmllbGQpID0+IHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyhwYXJlbnROYW1lLCBuZXN0ZWRGaWVsZE5hbWUsIGZpZWxkKSxcbiAgY29sbGFwc2libGU6IChmaWVsZDogQ29sbGFwc2libGVGaWVsZCkgPT4gcmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzKHBhcmVudE5hbWUsIG5lc3RlZEZpZWxkTmFtZSwgZmllbGQpLFxuICB0YWJzOiAoZmllbGQ6IFRhYnNGaWVsZCkgPT4gcmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzKHBhcmVudE5hbWUsIG5lc3RlZEZpZWxkTmFtZSwgZmllbGQpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpZWxkVG9TY2hlbWFNYXA7XG4iXSwibmFtZXMiOlsiZmllbGRUb1NjaGVtYU1hcCIsInBhcmVudE5hbWUiLCJuZXN0ZWRGaWVsZE5hbWUiLCJudW1iZXIiLCJmaWVsZCIsInR5cGUiLCJ3aXRoT3BlcmF0b3JzIiwidGV4dCIsImVtYWlsIiwidGV4dGFyZWEiLCJyaWNoVGV4dCIsImpzb24iLCJjb2RlIiwicmFkaW8iLCJkYXRlIiwicG9pbnQiLCJyZWxhdGlvbnNoaXAiLCJBcnJheSIsImlzQXJyYXkiLCJyZWxhdGlvblRvIiwiR3JhcGhRTElucHV0T2JqZWN0VHlwZSIsIm5hbWUiLCJjb21iaW5lUGFyZW50TmFtZSIsImZpZWxkcyIsIkdyYXBoUUxFbnVtVHlwZSIsInZhbHVlcyIsInJlZHVjZSIsInJlbGF0aW9uIiwiZm9ybWF0TmFtZSIsInZhbHVlIiwiR3JhcGhRTFN0cmluZyIsInVwbG9hZCIsImNoZWNrYm94Iiwic2VsZWN0IiwiYXJyYXkiLCJyZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMiLCJncm91cCIsInJvdyIsImNvbGxhcHNpYmxlIiwidGFicyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEySUE7OztlQUFBOzs7dUJBdklPOzZCQWN1Qjt3RUFDQTtpRUFDUDtrRkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEMsSUFBTUEsbUJBQW1CLFNBQUNDLFlBQW9CQztXQUFtQztRQUMvRUMsUUFBUSxTQUFDQzttQkFBd0I7Z0JBQy9CQyxNQUFNQyxJQUFBQSw0QkFBYSxFQUNqQkYsT0FDQUg7WUFFSjs7UUFDQU0sTUFBTSxTQUFDSDttQkFBc0I7Z0JBQzNCQyxNQUFNQyxJQUFBQSw0QkFBYSxFQUNq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