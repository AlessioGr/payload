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
import { fieldAffectsData, fieldHasSubFields, fieldIsPresentationalOnly, tabHasName } from "../fields/config/types";
var flattenFields = function(fields, keepPresentationalFields) {
    return fields.reduce(function(fieldsToUse, field) {
        if (fieldAffectsData(field) || keepPresentationalFields && fieldIsPresentationalOnly(field)) {
            return _to_consumable_array(fieldsToUse).concat([
                field
            ]);
        }
        if (fieldHasSubFields(field)) {
            return _to_consumable_array(fieldsToUse).concat(_to_consumable_array(flattenFields(field.fields, keepPresentationalFields)));
        }
        if (field.type === "tabs") {
            return _to_consumable_array(fieldsToUse).concat(_to_consumable_array(field.tabs.reduce(function(tabFields, tab) {
                return _to_consumable_array(tabFields).concat(_to_consumable_array(tabHasName(tab) ? [
                    _object_spread_props(_object_spread({}, tab), {
                        type: "tab"
                    })
                ] : flattenFields(tab.fields, keepPresentationalFields)));
            }, [])));
        }
        return fieldsToUse;
    }, []);
};
export default flattenFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZpZWxkLFxuICBGaWVsZEFmZmVjdGluZ0RhdGEsXG4gIGZpZWxkQWZmZWN0c0RhdGEsXG4gIGZpZWxkSGFzU3ViRmllbGRzLFxuICBmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5LFxuICBGaWVsZFByZXNlbnRhdGlvbmFsT25seSxcbiAgdGFiSGFzTmFtZSxcbn0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IGZsYXR0ZW5GaWVsZHMgPSAoZmllbGRzOiBGaWVsZFtdLCBrZWVwUHJlc2VudGF0aW9uYWxGaWVsZHM/OiBib29sZWFuKTogKEZpZWxkQWZmZWN0aW5nRGF0YSB8IEZpZWxkUHJlc2VudGF0aW9uYWxPbmx5KVtdID0+IHtcbiAgcmV0dXJuIGZpZWxkcy5yZWR1Y2UoKGZpZWxkc1RvVXNlLCBmaWVsZCkgPT4ge1xuICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSB8fCAoa2VlcFByZXNlbnRhdGlvbmFsRmllbGRzICYmIGZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkoZmllbGQpKSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uZmllbGRzVG9Vc2UsXG4gICAgICAgIGZpZWxkLFxuICAgICAgXTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGRIYXNTdWJGaWVsZHMoZmllbGQpKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5maWVsZHNUb1VzZSxcbiAgICAgICAgLi4uZmxhdHRlbkZpZWxkcyhmaWVsZC5maWVsZHMsIGtlZXBQcmVzZW50YXRpb25hbEZpZWxkcyksXG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmZpZWxkc1RvVXNlLFxuICAgICAgICAuLi5maWVsZC50YWJzLnJlZHVjZSgodGFiRmllbGRzLCB0YWIpID0+IHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4udGFiRmllbGRzLFxuICAgICAgICAgICAgLi4uKHRhYkhhc05hbWUodGFiKSA/IFt7IC4uLnRhYiwgdHlwZTogJ3RhYicgfV0gOiBmbGF0dGVuRmllbGRzKHRhYi5maWVsZHMsIGtlZXBQcmVzZW50YXRpb25hbEZpZWxkcykpLFxuICAgICAgICAgIF07XG4gICAgICAgIH0sIFtdKSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBmaWVsZHNUb1VzZTtcbiAgfSwgW10pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmxhdHRlbkZpZWxkcztcbiJdLCJuYW1lcyI6WyJmaWVsZEFmZmVjdHNEYXRhIiwiZmllbGRIYXNTdWJGaWVsZHMiLCJmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IiwidGFiSGFzTmFtZSIsImZsYXR0ZW5GaWVsZHMiLCJmaWVsZHMiLCJrZWVwUHJlc2VudGF0aW9uYWxGaWVsZHMiLCJyZWR1Y2UiLCJmaWVsZHNUb1VzZSIsImZpZWxkIiwidHlwZSIsInRhYnMiLCJ0YWJGaWVsZHMiLCJ0YWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FHRUEsZ0JBQWdCLEVBQ2hCQyxpQkFBaUIsRUFDakJDLHlCQUF5QixFQUV6QkMsVUFBVSxRQUNMLHlCQUF5QjtBQUVoQyxJQUFNQyxnQkFBZ0IsU0FBQ0MsUUFBaUJDO0lBQ3RDLE9BQU9ELE9BQU9FLE1BQU0sQ0FBQyxTQUFDQyxhQUFhQztRQUNqQyxJQUFJVCxpQkFBaUJTLFVBQVdILDRCQUE0QkosMEJBQTBCTyxRQUFTO1lBQzdGLE9BQU8sQUFDTCxxQkFBR0Qsb0JBREU7Z0JBRUxDO2FBQ0Q7UUFDSDtRQUVBLElBQUlSLGtCQUFrQlEsUUFBUTtZQUM1QixPQUFPLEFBQ0wscUJBQUdELG9CQUNILHFCQUFHSixjQUFjSyxNQUFNSixNQUFNLEVBQUVDO1FBRW5DO1FBRUEsSUFBSUcsTUFBTUMsSUFBSSxLQUFLLFFBQVE7WUFDekIsT0FBTyxBQUNMLHFCQUFHRixvQkFDSCxxQkFBR0MsTUFBTUUsSUFBSSxDQUFDSixNQUFNLENBQUMsU0FBQ0ssV0FBV0M7Z0JBQy9CLE9BQU8sQUFDTCxxQkFBR0Qsa0JBQ0gscUJBQUlULFdBQVdVLE9BQU87b0JBQUMsd0NBQUtBO3dCQUFLSCxNQUFNOztpQkFBUSxHQUFHTixjQUFjUyxJQUFJUixNQUFNLEVBQUVDO1lBRWhGLEdBQUcsRUFBRTtRQUVUO1FBQ0EsT0FBT0U7SUFDVCxHQUFHLEVBQUU7QUFDUDtBQUVBLGVBQWVKLGNBQWMifQ==