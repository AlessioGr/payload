/* eslint-disable @typescript-eslint/no-use-before-define */ /* eslint-disable no-use-before-define */ function _define_property(obj, key, value) {
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
import { GraphQLInputObjectType, GraphQLList } from "graphql";
import { fieldAffectsData, fieldHasSubFields, fieldIsPresentationalOnly } from "../../fields/config/types";
import formatName from "../utilities/formatName";
import { withOperators } from "./withOperators";
import fieldToSchemaMap from "./fieldToWhereInputSchemaMap";
/** This does as the function name suggests. It builds a where GraphQL input type
 * for all the fields which are passed to the function.
 * Each field has different operators which may be valid for a where input type.
 * For example, a text field may have a "contains" operator, but a number field
 * may not.
 *
 * buildWhereInputType is similar to buildObjectType and operates
 * on a field basis with a few distinct differences.
 *
 * 1. Everything needs to be a GraphQLInputObjectType or scalar / enum
 * 2. Relationships, groups, repeaters and flex content are not
 *    directly searchable. Instead, we need to build a chained pathname
 *    using dot notation so MongoDB can properly search nested paths.
 */ var buildWhereInputType = function(name, fields, parentName) {
    // This is the function that builds nested paths for all
    // field types with nested paths.
    var idField;
    var fieldTypes = fields.reduce(function(schema, field) {
        if (fieldAffectsData(field) && field.name === "id") idField = field;
        if (!fieldIsPresentationalOnly(field) && !field.hidden) {
            var getFieldSchema = fieldToSchemaMap(parentName)[field.type];
            if (getFieldSchema) {
                var fieldSchema = getFieldSchema(field);
                if (fieldHasSubFields(field) || field.type === "tabs") {
                    return _object_spread({}, schema, fieldSchema.reduce(function(subFields, subField) {
                        return _object_spread_props(_object_spread({}, subFields), _define_property({}, formatName(subField.key), subField.type));
                    }, {}));
                }
                return _object_spread_props(_object_spread({}, schema), _define_property({}, formatName(field.name), fieldSchema));
            }
        }
        return schema;
    }, {});
    if (!idField) {
        fieldTypes.id = {
            type: withOperators({
                name: "id",
                type: "text"
            }, parentName)
        };
    }
    var fieldName = formatName(name);
    return new GraphQLInputObjectType({
        name: "".concat(fieldName, "_where"),
        fields: _object_spread_props(_object_spread({}, fieldTypes), {
            OR: {
                type: new GraphQLList(new GraphQLInputObjectType({
                    name: "".concat(fieldName, "_where_or"),
                    fields: fieldTypes
                }))
            },
            AND: {
                type: new GraphQLList(new GraphQLInputObjectType({
                    name: "".concat(fieldName, "_where_and"),
                    fields: fieldTypes
                }))
            }
        })
    });
};
export default buildWhereInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZFdoZXJlSW5wdXRUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCB7XG4gIEdyYXBoUUxJbnB1dE9iamVjdFR5cGUsIEdyYXBoUUxMaXN0LFxufSBmcm9tICdncmFwaHFsJztcblxuaW1wb3J0IHtcbiAgRmllbGQsXG4gIEZpZWxkQWZmZWN0aW5nRGF0YSxcbiAgZmllbGRBZmZlY3RzRGF0YSxcbiAgZmllbGRIYXNTdWJGaWVsZHMsXG4gIGZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHksXG59IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZvcm1hdE5hbWUgZnJvbSAnLi4vdXRpbGl0aWVzL2Zvcm1hdE5hbWUnO1xuaW1wb3J0IHsgd2l0aE9wZXJhdG9ycyB9IGZyb20gJy4vd2l0aE9wZXJhdG9ycyc7XG5pbXBvcnQgZmllbGRUb1NjaGVtYU1hcCBmcm9tICcuL2ZpZWxkVG9XaGVyZUlucHV0U2NoZW1hTWFwJztcblxuLyoqIFRoaXMgZG9lcyBhcyB0aGUgZnVuY3Rpb24gbmFtZSBzdWdnZXN0cy4gSXQgYnVpbGRzIGEgd2hlcmUgR3JhcGhRTCBpbnB1dCB0eXBlXG4gKiBmb3IgYWxsIHRoZSBmaWVsZHMgd2hpY2ggYXJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG4gKiBFYWNoIGZpZWxkIGhhcyBkaWZmZXJlbnQgb3BlcmF0b3JzIHdoaWNoIG1heSBiZSB2YWxpZCBmb3IgYSB3aGVyZSBpbnB1dCB0eXBlLlxuICogRm9yIGV4YW1wbGUsIGEgdGV4dCBmaWVsZCBtYXkgaGF2ZSBhIFwiY29udGFpbnNcIiBvcGVyYXRvciwgYnV0IGEgbnVtYmVyIGZpZWxkXG4gKiBtYXkgbm90LlxuICpcbiAqIGJ1aWxkV2hlcmVJbnB1dFR5cGUgaXMgc2ltaWxhciB0byBidWlsZE9iamVjdFR5cGUgYW5kIG9wZXJhdGVzXG4gKiBvbiBhIGZpZWxkIGJhc2lzIHdpdGggYSBmZXcgZGlzdGluY3QgZGlmZmVyZW5jZXMuXG4gKlxuICogMS4gRXZlcnl0aGluZyBuZWVkcyB0byBiZSBhIEdyYXBoUUxJbnB1dE9iamVjdFR5cGUgb3Igc2NhbGFyIC8gZW51bVxuICogMi4gUmVsYXRpb25zaGlwcywgZ3JvdXBzLCByZXBlYXRlcnMgYW5kIGZsZXggY29udGVudCBhcmUgbm90XG4gKiAgICBkaXJlY3RseSBzZWFyY2hhYmxlLiBJbnN0ZWFkLCB3ZSBuZWVkIHRvIGJ1aWxkIGEgY2hhaW5lZCBwYXRobmFtZVxuICogICAgdXNpbmcgZG90IG5vdGF0aW9uIHNvIE1vbmdvREIgY2FuIHByb3Blcmx5IHNlYXJjaCBuZXN0ZWQgcGF0aHMuXG4gKi9cbmNvbnN0IGJ1aWxkV2hlcmVJbnB1dFR5cGUgPSAobmFtZTogc3RyaW5nLCBmaWVsZHM6IEZpZWxkW10sIHBhcmVudE5hbWU6IHN0cmluZyk6IEdyYXBoUUxJbnB1dE9iamVjdFR5cGUgPT4ge1xuICAvLyBUaGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGJ1aWxkcyBuZXN0ZWQgcGF0aHMgZm9yIGFsbFxuICAvLyBmaWVsZCB0eXBlcyB3aXRoIG5lc3RlZCBwYXRocy5cblxuICBsZXQgaWRGaWVsZDogRmllbGRBZmZlY3RpbmdEYXRhIHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0IGZpZWxkVHlwZXMgPSBmaWVsZHMucmVkdWNlKChzY2hlbWEsIGZpZWxkKSA9PiB7XG4gICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUgPT09ICdpZCcpIGlkRmllbGQgPSBmaWVsZDtcblxuICAgIGlmICghZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seShmaWVsZCkgJiYgIWZpZWxkLmhpZGRlbikge1xuICAgICAgY29uc3QgZ2V0RmllbGRTY2hlbWEgPSBmaWVsZFRvU2NoZW1hTWFwKHBhcmVudE5hbWUpW2ZpZWxkLnR5cGVdO1xuXG4gICAgICBpZiAoZ2V0RmllbGRTY2hlbWEpIHtcbiAgICAgICAgY29uc3QgZmllbGRTY2hlbWEgPSBnZXRGaWVsZFNjaGVtYShmaWVsZCk7XG5cbiAgICAgICAgaWYgKGZpZWxkSGFzU3ViRmllbGRzKGZpZWxkKSB8fCBmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc2NoZW1hLFxuICAgICAgICAgICAgLi4uKGZpZWxkU2NoZW1hLnJlZHVjZSgoc3ViRmllbGRzLCBzdWJGaWVsZCkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uc3ViRmllbGRzLFxuICAgICAgICAgICAgICBbZm9ybWF0TmFtZShzdWJGaWVsZC5rZXkpXTogc3ViRmllbGQudHlwZSxcbiAgICAgICAgICAgIH0pLCB7fSkpLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnNjaGVtYSxcbiAgICAgICAgICBbZm9ybWF0TmFtZShmaWVsZC5uYW1lKV06IGZpZWxkU2NoZW1hLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzY2hlbWE7XG4gIH0sIHt9KTtcblxuICBpZiAoIWlkRmllbGQpIHtcbiAgICBmaWVsZFR5cGVzLmlkID0ge1xuICAgICAgdHlwZTogd2l0aE9wZXJhdG9ycyhcbiAgICAgICAgeyBuYW1lOiAnaWQnLCB0eXBlOiAndGV4dCcgfSBhcyBGaWVsZEFmZmVjdGluZ0RhdGEsXG4gICAgICAgIHBhcmVudE5hbWUsXG4gICAgICApLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBmaWVsZE5hbWUgPSBmb3JtYXROYW1lKG5hbWUpO1xuXG4gIHJldHVybiBuZXcgR3JhcGhRTElucHV0T2JqZWN0VHlwZSh7XG4gICAgbmFtZTogYCR7ZmllbGROYW1lfV93aGVyZWAsXG4gICAgZmllbGRzOiB7XG4gICAgICAuLi5maWVsZFR5cGVzLFxuICAgICAgT1I6IHtcbiAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxMaXN0KG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtmaWVsZE5hbWV9X3doZXJlX29yYCxcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkVHlwZXMsXG4gICAgICAgIH0pKSxcbiAgICAgIH0sXG4gICAgICBBTkQ6IHtcbiAgICAgICAgdHlwZTogbmV3IEdyYXBoUUxMaXN0KG5ldyBHcmFwaFFMSW5wdXRPYmplY3RUeXBlKHtcbiAgICAgICAgICBuYW1lOiBgJHtmaWVsZE5hbWV9X3doZXJlX2FuZGAsXG4gICAgICAgICAgZmllbGRzOiBmaWVsZFR5cGVzLFxuICAgICAgICB9KSksXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRXaGVyZUlucHV0VHlwZTtcbiJdLCJuYW1lcyI6WyJHcmFwaFFMSW5wdXRPYmplY3RUeXBlIiwiR3JhcGhRTExpc3QiLCJmaWVsZEFmZmVjdHNEYXRhIiwiZmllbGRIYXNTdWJGaWVsZHMiLCJmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IiwiZm9ybWF0TmFtZSIsIndpdGhPcGVyYXRvcnMiLCJmaWVsZFRvU2NoZW1hTWFwIiwiYnVpbGRXaGVyZUlucHV0VHlwZSIsIm5hbWUiLCJmaWVsZHMiLCJwYXJlbnROYW1lIiwiaWRGaWVsZCIsImZpZWxkVHlwZXMiLCJyZWR1Y2UiLCJzY2hlbWEiLCJmaWVsZCIsImhpZGRlbiIsImdldEZpZWxkU2NoZW1hIiwidHlwZSIsImZpZWxkU2NoZW1hIiwic3ViRmllbGRzIiwic3ViRmllbGQiLCJrZXkiLCJpZCIsImZpZWxkTmFtZSIsIk9SIiwiQU5EIl0sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQsR0FDMUQsdUNBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3ZDLFNBQ0VBLHNCQUFzQixFQUFFQyxXQUFXLFFBQzlCLFVBQVU7QUFFakIsU0FHRUMsZ0JBQWdCLEVBQ2hCQyxpQkFBaUIsRUFDakJDLHlCQUF5QixRQUNwQiw0QkFBNEI7QUFDbkMsT0FBT0MsZ0JBQWdCLDBCQUEwQjtBQUNqRCxTQUFTQyxhQUFhLFFBQVEsa0JBQWtCO0FBQ2hELE9BQU9DLHNCQUFzQiwrQkFBK0I7QUFFNUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxHQUNELElBQU1DLHNCQUFzQixTQUFDQyxNQUFjQyxRQUFpQkM7SUFDMUQsd0RBQXdEO0lBQ3hELGlDQUFpQztJQUVqQyxJQUFJQztJQUVKLElBQU1DLGFBQWFILE9BQU9JLE1BQU0sQ0FBQyxTQUFDQyxRQUFRQztRQUN4QyxJQUFJZCxpQkFBaUJjLFVBQVVBLE1BQU1QLElBQUksS0FBSyxNQUFNRyxVQUFVSTtRQUU5RCxJQUFJLENBQUNaLDBCQUEwQlksVUFBVSxDQUFDQSxNQUFNQyxNQUFNLEVBQUU7WUFDdEQsSUFBTUMsaUJBQWlCWCxpQkFBaUJJLFdBQVcsQ0FBQ0ssTUFBTUcsSUFBSSxDQUFDO1lBRS9ELElBQUlELGdCQUFnQjtnQkFDbEIsSUFBTUUsY0FBY0YsZUFBZUY7Z0JBRW5DLElBQUliLGtCQUFrQmEsVUFBVUEsTUFBTUcsSUFBSSxLQUFLLFFBQVE7b0JBQ3JELE9BQU8sbUJBQ0ZKLFFBQ0NLLFlBQVlOLE1BQU0sQ0FBQyxTQUFDTyxXQUFXQzsrQkFBYyx3Q0FDNUNELFlBQ0gscUJBQUNoQixXQUFXaUIsU0FBU0MsR0FBRyxHQUFJRCxTQUFTSCxJQUFJO3VCQUN2QyxDQUFDO2dCQUVUO2dCQUVBLE9BQU8sd0NBQ0ZKLFNBQ0gscUJBQUNWLFdBQVdXLE1BQU1QLElBQUksR0FBSVc7WUFFOUI7UUFDRjtRQUVBLE9BQU9MO0lBQ1QsR0FBRyxDQUFDO0lBRUosSUFBSSxDQUFDSCxTQUFTO1FBQ1pDLFdBQVdXLEVBQUUsR0FBRztZQUNkTCxNQUFNYixjQUNKO2dCQUFFRyxNQUFNO2dCQUFNVSxNQUFNO1lBQU8sR0FDM0JSO1FBRUo7SUFDRjtJQUVBLElBQU1jLFlBQVlwQixXQUFXSTtJQUU3QixPQUFPLElBQUlULHVCQUF1QjtRQUNoQ1MsTUFBTSxBQUFDLEdBQVksT0FBVmdCLFdBQVU7UUFDbkJmLFFBQVEsd0NBQ0hHO1lBQ0hhLElBQUk7Z0JBQ0ZQLE1BQU0sSUFBSWxCLFlBQVksSUFBSUQsdUJBQXVCO29CQUMvQ1MsTUFBTSxBQUFDLEdBQVksT0FBVmdCLFdBQVU7b0JBQ25CZixRQUFRRztnQkFDVjtZQUNGO1lBQ0FjLEtBQUs7Z0JBQ0hSLE1BQU0sSUFBSWxCLFlBQVksSUFBSUQsdUJBQXVCO29CQUMvQ1MsTUFBTSxBQUFDLEdBQVksT0FBVmdCLFdBQVU7b0JBQ25CZixRQUFRRztnQkFDVjtZQUNGOztJQUVKO0FBQ0Y7QUFFQSxlQUFlTCxvQkFBb0IifQ==