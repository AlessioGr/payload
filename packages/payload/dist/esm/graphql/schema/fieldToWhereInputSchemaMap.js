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
import { GraphQLEnumType, GraphQLInputObjectType, GraphQLString } from "graphql";
import { withOperators } from "./withOperators";
import combineParentName from "../utilities/combineParentName";
import formatName from "../utilities/formatName";
import recursivelyBuildNestedPaths from "./recursivelyBuildNestedPaths";
var fieldToSchemaMap = function(parentName, nestedFieldName) {
    return {
        number: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        text: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        email: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        textarea: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        richText: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        json: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        code: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        radio: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        date: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        point: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        relationship: function(field) {
            if (Array.isArray(field.relationTo)) {
                return {
                    type: new GraphQLInputObjectType({
                        name: "".concat(combineParentName(parentName, field.name), "_Relation"),
                        fields: {
                            relationTo: {
                                type: new GraphQLEnumType({
                                    name: "".concat(combineParentName(parentName, field.name), "_Relation_RelationTo"),
                                    values: field.relationTo.reduce(function(values, relation) {
                                        return _object_spread_props(_object_spread({}, values), _define_property({}, formatName(relation), {
                                            value: relation
                                        }));
                                    }, {})
                                })
                            },
                            value: {
                                type: GraphQLString
                            }
                        }
                    })
                };
            }
            return {
                type: withOperators(field, parentName)
            };
        },
        upload: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        checkbox: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        select: function(field) {
            return {
                type: withOperators(field, parentName)
            };
        },
        array: function(field) {
            return recursivelyBuildNestedPaths(parentName, nestedFieldName, field);
        },
        group: function(field) {
            return recursivelyBuildNestedPaths(parentName, nestedFieldName, field);
        },
        row: function(field) {
            return recursivelyBuildNestedPaths(parentName, nestedFieldName, field);
        },
        collapsible: function(field) {
            return recursivelyBuildNestedPaths(parentName, nestedFieldName, field);
        },
        tabs: function(field) {
            return recursivelyBuildNestedPaths(parentName, nestedFieldName, field);
        }
    };
};
export default fieldToSchemaMap;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9maWVsZFRvV2hlcmVJbnB1dFNjaGVtYU1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBHcmFwaFFMRW51bVR5cGUsXG4gIEdyYXBoUUxJbnB1dE9iamVjdFR5cGUsXG4gIEdyYXBoUUxTdHJpbmcsXG59IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHtcbiAgQXJyYXlGaWVsZCxcbiAgQ2hlY2tib3hGaWVsZCxcbiAgQ29kZUZpZWxkLCBDb2xsYXBzaWJsZUZpZWxkLCBEYXRlRmllbGQsXG4gIEVtYWlsRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsIGZpZWxkSGFzU3ViRmllbGRzLCBHcm91cEZpZWxkLFxuICBKU09ORmllbGQsXG4gIE51bWJlckZpZWxkLCBQb2ludEZpZWxkLFxuICBSYWRpb0ZpZWxkLCBSZWxhdGlvbnNoaXBGaWVsZCxcbiAgUmljaFRleHRGaWVsZCwgUm93RmllbGQsIFNlbGVjdEZpZWxkLFxuICBUYWJzRmllbGQsXG4gIFRleHRhcmVhRmllbGQsXG4gIFRleHRGaWVsZCwgVXBsb2FkRmllbGQsXG59IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgd2l0aE9wZXJhdG9ycyB9IGZyb20gJy4vd2l0aE9wZXJhdG9ycyc7XG5pbXBvcnQgY29tYmluZVBhcmVudE5hbWUgZnJvbSAnLi4vdXRpbGl0aWVzL2NvbWJpbmVQYXJlbnROYW1lJztcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJztcbmltcG9ydCByZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMgZnJvbSAnLi9yZWN1cnNpdmVseUJ1aWxkTmVzdGVkUGF0aHMnO1xuXG5jb25zdCBmaWVsZFRvU2NoZW1hTWFwID0gKHBhcmVudE5hbWU6IHN0cmluZywgbmVzdGVkRmllbGROYW1lPzogc3RyaW5nKTogYW55ID0+ICh7XG4gIG51bWJlcjogKGZpZWxkOiBOdW1iZXJGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICB0ZXh0OiAoZmllbGQ6IFRleHRGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICBlbWFpbDogKGZpZWxkOiBFbWFpbEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIHRleHRhcmVhOiAoZmllbGQ6IFRleHRhcmVhRmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhcbiAgICAgIGZpZWxkLFxuICAgICAgcGFyZW50TmFtZSxcbiAgICApLFxuICB9KSxcbiAgcmljaFRleHQ6IChmaWVsZDogUmljaFRleHRGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICBqc29uOiAoZmllbGQ6IEpTT05GaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICBjb2RlOiAoZmllbGQ6IENvZGVGaWVsZCkgPT4gKHtcbiAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgZmllbGQsXG4gICAgICBwYXJlbnROYW1lLFxuICAgICksXG4gIH0pLFxuICByYWRpbzogKGZpZWxkOiBSYWRpb0ZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIGRhdGU6IChmaWVsZDogRGF0ZUZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIHBvaW50OiAoZmllbGQ6IFBvaW50RmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhcbiAgICAgIGZpZWxkLFxuICAgICAgcGFyZW50TmFtZSxcbiAgICApLFxuICB9KSxcbiAgcmVsYXRpb25zaGlwOiAoZmllbGQ6IFJlbGF0aW9uc2hpcEZpZWxkKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQucmVsYXRpb25UbykpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fUmVsYXRpb25gLFxuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgcmVsYXRpb25Ubzoge1xuICAgICAgICAgICAgICB0eXBlOiBuZXcgR3JhcGhRTEVudW1UeXBlKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBgJHtjb21iaW5lUGFyZW50TmFtZShwYXJlbnROYW1lLCBmaWVsZC5uYW1lKX1fUmVsYXRpb25fUmVsYXRpb25Ub2AsXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBmaWVsZC5yZWxhdGlvblRvLnJlZHVjZSgodmFsdWVzLCByZWxhdGlvbikgPT4gKHtcbiAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgICAgIFtmb3JtYXROYW1lKHJlbGF0aW9uKV06IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJlbGF0aW9uLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSwge30pLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWx1ZTogeyB0eXBlOiBHcmFwaFFMU3RyaW5nIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiB3aXRoT3BlcmF0b3JzKFxuICAgICAgICBmaWVsZCxcbiAgICAgICAgcGFyZW50TmFtZSxcbiAgICAgICksXG4gICAgfTtcbiAgfSxcbiAgdXBsb2FkOiAoZmllbGQ6IFVwbG9hZEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIGNoZWNrYm94OiAoZmllbGQ6IENoZWNrYm94RmllbGQpID0+ICh7XG4gICAgdHlwZTogd2l0aE9wZXJhdG9ycyhcbiAgICAgIGZpZWxkLFxuICAgICAgcGFyZW50TmFtZSxcbiAgICApLFxuICB9KSxcbiAgc2VsZWN0OiAoZmllbGQ6IFNlbGVjdEZpZWxkKSA9PiAoe1xuICAgIHR5cGU6IHdpdGhPcGVyYXRvcnMoXG4gICAgICBmaWVsZCxcbiAgICAgIHBhcmVudE5hbWUsXG4gICAgKSxcbiAgfSksXG4gIGFycmF5OiAoZmllbGQ6IEFycmF5RmllbGQpID0+IHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyhwYXJlbnROYW1lLCBuZXN0ZWRGaWVsZE5hbWUsIGZpZWxkKSxcbiAgZ3JvdXA6IChmaWVsZDogR3JvdXBGaWVsZCkgPT4gcmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzKHBhcmVudE5hbWUsIG5lc3RlZEZpZWxkTmFtZSwgZmllbGQpLFxuICByb3c6IChmaWVsZDogUm93RmllbGQpID0+IHJlY3Vyc2l2ZWx5QnVpbGROZXN0ZWRQYXRocyhwYXJlbnROYW1lLCBuZXN0ZWRGaWVsZE5hbWUsIGZpZWxkKSxcbiAgY29sbGFwc2libGU6IChmaWVsZDogQ29sbGFwc2libGVGaWVsZCkgPT4gcmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzKHBhcmVudE5hbWUsIG5lc3RlZEZpZWxkTmFtZSwgZmllbGQpLFxuICB0YWJzOiAoZmllbGQ6IFRhYnNGaWVsZCkgPT4gcmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzKHBhcmVudE5hbWUsIG5lc3RlZEZpZWxkTmFtZSwgZmllbGQpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZpZWxkVG9TY2hlbWFNYXA7XG4iXSwibmFtZXMiOlsiR3JhcGhRTEVudW1UeXBlIiwiR3JhcGhRTElucHV0T2JqZWN0VHlwZSIsIkdyYXBoUUxTdHJpbmciLCJ3aXRoT3BlcmF0b3JzIiwiY29tYmluZVBhcmVudE5hbWUiLCJmb3JtYXROYW1lIiwicmVjdXJzaXZlbHlCdWlsZE5lc3RlZFBhdGhzIiwiZmllbGRUb1NjaGVtYU1hcCIsInBhcmVudE5hbWUiLCJuZXN0ZWRGaWVsZE5hbWUiLCJudW1iZXIiLCJmaWVsZCIsInR5cGUiLCJ0ZXh0IiwiZW1haWwiLCJ0ZXh0YXJlYSIsInJpY2hUZXh0IiwianNvbiIsImNvZGUiLCJyYWRpbyIsImRhdGUiLCJwb2ludCIsInJlbGF0aW9uc2hpcCIsIkFycmF5IiwiaXNBcnJheSIsInJlbGF0aW9uVG8iLCJuYW1lIiwiZmllbGRzIiwidmFsdWVzIiwicmVkdWNlIiwicmVsYXRpb24iLCJ2YWx1ZSIsInVwbG9hZCIsImNoZWNrYm94Iiwic2VsZWN0IiwiYXJyYXkiLCJncm91cCIsInJvdyIsImNvbGxhcHNpYmxlIiwidGFicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQ0VBLGVBQWUsRUFDZkMsc0JBQXNCLEVBQ3RCQyxhQUFhLFFBQ1IsVUFBVTtBQWNqQixTQUFTQyxhQUFhLFFBQVEsa0JBQWtCO0FBQ2hELE9BQU9DLHVCQUF1QixpQ0FBaUM7QUFDL0QsT0FBT0MsZ0JBQWdCLDBCQUEwQjtBQUNqRCxPQUFPQyxpQ0FBaUMsZ0NBQWdDO0FBRXhFLElBQU1DLG1CQUFtQixTQUFDQyxZQUFvQkM7V0FBbUM7UUFDL0VDLFFBQVEsU0FBQ0M7bUJBQXdC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