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
import merge from "deepmerge";
import { fieldAffectsData, fieldHasSubFields } from "./config/types";
var mergeBaseFields = function(fields, baseFields) {
    var mergedFields = _to_consumable_array(fields || []);
    baseFields.forEach(function(baseField) {
        var matchedIndex = null;
        if (fieldAffectsData(baseField)) {
            var match = mergedFields.find(function(field, i) {
                if (fieldAffectsData(field) && field.name === baseField.name) {
                    matchedIndex = i;
                    return true;
                }
                return false;
            });
            if (match) {
                var matchCopy = _object_spread({}, match);
                mergedFields.splice(matchedIndex, 1);
                var mergedField = merge(baseField, matchCopy);
                if (fieldHasSubFields(baseField) && fieldHasSubFields(matchCopy)) {
                    mergedField.fields = mergeBaseFields(matchCopy.fields, baseField.fields);
                }
                mergedFields.push(mergedField);
            } else {
                mergedFields.push(baseField);
            }
        }
    });
    return mergedFields;
};
export default mergeBaseFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvbWVyZ2VCYXNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsIGZpZWxkSGFzU3ViRmllbGRzLCBGaWVsZFdpdGhTdWJGaWVsZHMgfSBmcm9tICcuL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IG1lcmdlQmFzZUZpZWxkcyA9IChmaWVsZHM6IEZpZWxkW10sIGJhc2VGaWVsZHM6IEZpZWxkW10pOiBGaWVsZFtdID0+IHtcbiAgY29uc3QgbWVyZ2VkRmllbGRzID0gWy4uLmZpZWxkcyB8fCBbXV07XG5cbiAgYmFzZUZpZWxkcy5mb3JFYWNoKChiYXNlRmllbGQpID0+IHtcbiAgICBsZXQgbWF0Y2hlZEluZGV4ID0gbnVsbDtcblxuICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGJhc2VGaWVsZCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gbWVyZ2VkRmllbGRzLmZpbmQoKGZpZWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSBiYXNlRmllbGQubmFtZSkge1xuICAgICAgICAgIG1hdGNoZWRJbmRleCA9IGk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoQ29weTogRmllbGQgPSB7IC4uLm1hdGNoIH07XG4gICAgICAgIG1lcmdlZEZpZWxkcy5zcGxpY2UobWF0Y2hlZEluZGV4LCAxKTtcblxuICAgICAgICBjb25zdCBtZXJnZWRGaWVsZCA9IG1lcmdlPEZpZWxkPihiYXNlRmllbGQsIG1hdGNoQ29weSk7XG5cbiAgICAgICAgaWYgKGZpZWxkSGFzU3ViRmllbGRzKGJhc2VGaWVsZCkgJiYgZmllbGRIYXNTdWJGaWVsZHMobWF0Y2hDb3B5KSkge1xuICAgICAgICAgIChtZXJnZWRGaWVsZCBhcyBGaWVsZFdpdGhTdWJGaWVsZHMpLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhtYXRjaENvcHkuZmllbGRzLCBiYXNlRmllbGQuZmllbGRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lcmdlZEZpZWxkcy5wdXNoKG1lcmdlZEZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZEZpZWxkcy5wdXNoKGJhc2VGaWVsZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWVyZ2VkRmllbGRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VCYXNlRmllbGRzO1xuIl0sIm5hbWVzIjpbIm1lcmdlIiwiZmllbGRBZmZlY3RzRGF0YSIsImZpZWxkSGFzU3ViRmllbGRzIiwibWVyZ2VCYXNlRmllbGRzIiwiZmllbGRzIiwiYmFzZUZpZWxkcyIsIm1lcmdlZEZpZWxkcyIsImZvckVhY2giLCJiYXNlRmllbGQiLCJtYXRjaGVkSW5kZXgiLCJtYXRjaCIsImZpbmQiLCJmaWVsZCIsImkiLCJuYW1lIiwibWF0Y2hDb3B5Iiwic3BsaWNlIiwibWVyZ2VkRmllbGQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFdBQVcsWUFBWTtBQUM5QixTQUFnQkMsZ0JBQWdCLEVBQUVDLGlCQUFpQixRQUE0QixpQkFBaUI7QUFFaEcsSUFBTUMsa0JBQWtCLFNBQUNDLFFBQWlCQztJQUN4QyxJQUFNQyxlQUFnQixxQkFBR0YsVUFBVSxFQUFFO0lBRXJDQyxXQUFXRSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBSUMsZUFBZTtRQUVuQixJQUFJUixpQkFBaUJPLFlBQVk7WUFDL0IsSUFBTUUsUUFBUUosYUFBYUssSUFBSSxDQUFDLFNBQUNDLE9BQU9DO2dCQUN0QyxJQUFJWixpQkFBaUJXLFVBQVVBLE1BQU1FLElBQUksS0FBS04sVUFBVU0sSUFBSSxFQUFFO29CQUM1REwsZUFBZUk7b0JBQ2YsT0FBTztnQkFDVDtnQkFFQSxPQUFPO1lBQ1Q7WUFFQSxJQUFJSCxPQUFPO2dCQUNULElBQU1LLFlBQW1CLG1CQUFLTDtnQkFDOUJKLGFBQWFVLE1BQU0sQ0FBQ1AsY0FBYztnQkFFbEMsSUFBTVEsY0FBY2pCLE1BQWFRLFdBQVdPO2dCQUU1QyxJQUFJYixrQkFBa0JNLGNBQWNOLGtCQUFrQmEsWUFBWTtvQkFDL0RFLFlBQW1DYixNQUFNLEdBQUdELGdCQUFnQlksVUFBVVgsTUFBTSxFQUFFSSxVQUFVSixNQUFNO2dCQUNqRztnQkFFQUUsYUFBYVksSUFBSSxDQUFDRDtZQUNwQixPQUFPO2dCQUNMWCxhQUFhWSxJQUFJLENBQUNWO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1Q7QUFFQSxlQUFlSCxnQkFBZ0IifQ==