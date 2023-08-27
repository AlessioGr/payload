function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
import React from "react";
import { fieldAffectsData, fieldHasSubFields, tabHasName } from "../../../../fields/config/types";
import { useAllFormFields, useFormSubmitted } from "../Form/context";
import useThrottledEffect from "../../../hooks/useThrottledEffect";
var buildPathSegments = function(parentPath, fieldSchema) {
    var pathNames = fieldSchema.reduce(function(acc, subField) {
        if (fieldHasSubFields(subField) && fieldAffectsData(subField)) {
            // group, block, array
            acc.push(parentPath ? "".concat(parentPath, ".").concat(subField.name, ".") : "".concat(subField.name, "."));
        } else if (fieldHasSubFields(subField)) {
            var // rows, collapsibles, unnamed-tab
            _acc;
            (_acc = acc).push.apply(_acc, _to_consumable_array(buildPathSegments(parentPath, subField.fields)));
        } else if (subField.type === "tabs") {
            // tabs
            subField.tabs.forEach(function(tab) {
                var _acc;
                var tabPath = parentPath;
                if (tabHasName(tab)) {
                    tabPath = parentPath ? "".concat(parentPath, ".").concat(tab.name) : tab.name;
                }
                (_acc = acc).push.apply(_acc, _to_consumable_array(buildPathSegments(tabPath, tab.fields)));
            });
        } else if (fieldAffectsData(subField)) {
            // text, number, date, etc.
            acc.push(parentPath ? "".concat(parentPath, ".").concat(subField.name) : subField.name);
        }
        return acc;
    }, []);
    return pathNames;
};
export var WatchChildErrors = function(param) {
    var path = param.path, fieldSchema = param.fieldSchema, setErrorCount = param.setErrorCount;
    var _useAllFormFields = _sliced_to_array(useAllFormFields(), 1), fields = _useAllFormFields[0];
    var hasSubmitted = useFormSubmitted();
    var _React_useState = _sliced_to_array(React.useState(function() {
        if (fieldSchema) {
            return buildPathSegments(path, fieldSchema);
        }
        return [
            "".concat(path, ".")
        ];
    }), 1), pathSegments = _React_useState[0];
    useThrottledEffect(function() {
        var errorCount = 0;
        if (hasSubmitted) {
            Object.entries(fields).forEach(function(param) {
                var _param = _sliced_to_array(param, 1), key = _param[0];
                var matchingSegment = pathSegments.some(function(segment) {
                    if (segment.endsWith(".")) {
                        return key.startsWith(segment);
                    }
                    return key === segment;
                });
                if (matchingSegment) {
                    if ("valid" in fields[key] && !fields[key].valid) {
                        errorCount += 1;
                    }
                }
            });
        }
        setErrorCount(errorCount);
    }, 250, [
        fields,
        hasSubmitted,
        pathSegments
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1dhdGNoQ2hpbGRFcnJvcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkLCBUYWJBc0ZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhLCBmaWVsZEhhc1N1YkZpZWxkcywgdGFiSGFzTmFtZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgdXNlQWxsRm9ybUZpZWxkcywgdXNlRm9ybVN1Ym1pdHRlZCB9IGZyb20gJy4uL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgdXNlVGhyb3R0bGVkRWZmZWN0IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRocm90dGxlZEVmZmVjdCc7XG5cbmNvbnN0IGJ1aWxkUGF0aFNlZ21lbnRzID0gKHBhcmVudFBhdGg6IHN0cmluZywgZmllbGRTY2hlbWE6IEZpZWxkW10pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHBhdGhOYW1lcyA9IGZpZWxkU2NoZW1hLnJlZHVjZSgoYWNjLCBzdWJGaWVsZCkgPT4ge1xuICAgIGlmIChmaWVsZEhhc1N1YkZpZWxkcyhzdWJGaWVsZCkgJiYgZmllbGRBZmZlY3RzRGF0YShzdWJGaWVsZCkpIHtcbiAgICAgIC8vIGdyb3VwLCBibG9jaywgYXJyYXlcbiAgICAgIGFjYy5wdXNoKHBhcmVudFBhdGggPyBgJHtwYXJlbnRQYXRofS4ke3N1YkZpZWxkLm5hbWV9LmAgOiBgJHtzdWJGaWVsZC5uYW1lfS5gKTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkSGFzU3ViRmllbGRzKHN1YkZpZWxkKSkge1xuICAgICAgLy8gcm93cywgY29sbGFwc2libGVzLCB1bm5hbWVkLXRhYlxuICAgICAgYWNjLnB1c2goLi4uYnVpbGRQYXRoU2VnbWVudHMocGFyZW50UGF0aCwgc3ViRmllbGQuZmllbGRzKSk7XG4gICAgfSBlbHNlIGlmIChzdWJGaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAgIC8vIHRhYnNcbiAgICAgIHN1YkZpZWxkLnRhYnMuZm9yRWFjaCgodGFiOiBUYWJBc0ZpZWxkKSA9PiB7XG4gICAgICAgIGxldCB0YWJQYXRoID0gcGFyZW50UGF0aDtcbiAgICAgICAgaWYgKHRhYkhhc05hbWUodGFiKSkge1xuICAgICAgICAgIHRhYlBhdGggPSBwYXJlbnRQYXRoID8gYCR7cGFyZW50UGF0aH0uJHt0YWIubmFtZX1gIDogdGFiLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgYWNjLnB1c2goLi4uYnVpbGRQYXRoU2VnbWVudHModGFiUGF0aCwgdGFiLmZpZWxkcykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChmaWVsZEFmZmVjdHNEYXRhKHN1YkZpZWxkKSkge1xuICAgICAgLy8gdGV4dCwgbnVtYmVyLCBkYXRlLCBldGMuXG4gICAgICBhY2MucHVzaChwYXJlbnRQYXRoID8gYCR7cGFyZW50UGF0aH0uJHtzdWJGaWVsZC5uYW1lfWAgOiBzdWJGaWVsZC5uYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lcztcbn07XG5cbnR5cGUgVHJhY2tTdWJTY2hlbWFFcnJvckNvdW50UHJvcHMgPSB7XG4gIC8qKlxuICAgKiBPbmx5IGZvciBjb2xsYXBzaWJsZXMsIGFuZCB1bm5hbWVkLXRhYnNcbiAgICovXG4gIGZpZWxkU2NoZW1hPzogRmllbGRbXTtcbiAgcGF0aDogc3RyaW5nO1xuICBzZXRFcnJvckNvdW50OiAoY291bnQ6IG51bWJlcikgPT4gdm9pZDtcbn1cbmV4cG9ydCBjb25zdCBXYXRjaENoaWxkRXJyb3JzOiBSZWFjdC5GQzxUcmFja1N1YlNjaGVtYUVycm9yQ291bnRQcm9wcz4gPSAoeyBwYXRoLCBmaWVsZFNjaGVtYSwgc2V0RXJyb3JDb3VudCB9KSA9PiB7XG4gIGNvbnN0IFtmaWVsZHNdID0gdXNlQWxsRm9ybUZpZWxkcygpO1xuICBjb25zdCBoYXNTdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG4gIGNvbnN0IFtwYXRoU2VnbWVudHNdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmIChmaWVsZFNjaGVtYSkge1xuICAgICAgcmV0dXJuIGJ1aWxkUGF0aFNlZ21lbnRzKHBhdGgsIGZpZWxkU2NoZW1hKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW2Ake3BhdGh9LmBdO1xuICB9KTtcblxuICB1c2VUaHJvdHRsZWRFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBlcnJvckNvdW50ID0gMDtcbiAgICBpZiAoaGFzU3VibWl0dGVkKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhmaWVsZHMpLmZvckVhY2goKFtrZXldKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoaW5nU2VnbWVudCA9IHBhdGhTZWdtZW50cy5zb21lKChzZWdtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKHNlZ21lbnQuZW5kc1dpdGgoJy4nKSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleS5zdGFydHNXaXRoKHNlZ21lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ga2V5ID09PSBzZWdtZW50O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hpbmdTZWdtZW50KSB7XG4gICAgICAgICAgaWYgKCd2YWxpZCcgaW4gZmllbGRzW2tleV0gJiYgIWZpZWxkc1trZXldLnZhbGlkKSB7XG4gICAgICAgICAgICBlcnJvckNvdW50ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRFcnJvckNvdW50KGVycm9yQ291bnQpO1xuICB9LCAyNTAsIFtmaWVsZHMsIGhhc1N1Ym1pdHRlZCwgcGF0aFNlZ21lbnRzXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmllbGRBZmZlY3RzRGF0YSIsImZpZWxkSGFzU3ViRmllbGRzIiwidGFiSGFzTmFtZSIsInVzZUFsbEZvcm1GaWVsZHMiLCJ1c2VGb3JtU3VibWl0dGVkIiwidXNlVGhyb3R0bGVkRWZmZWN0IiwiYnVpbGRQYXRoU2VnbWVudHMiLCJwYXJlbnRQYXRoIiwiZmllbGRTY2hlbWEiLCJwYXRoTmFtZXMiLCJyZWR1Y2UiLCJhY2MiLCJzdWJGaWVsZCIsInB1c2giLCJuYW1lIiwiZmllbGRzIiwidHlwZSIsInRhYnMiLCJmb3JFYWNoIiwidGFiIiwidGFiUGF0aCIsIldhdGNoQ2hpbGRFcnJvcnMiLCJwYXRoIiwic2V0RXJyb3JDb3VudCIsImhhc1N1Ym1pdHRlZCIsInVzZVN0YXRlIiwicGF0aFNlZ21lbnRzIiwiZXJyb3JDb3VudCIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJtYXRjaGluZ1NlZ21lbnQiLCJzb21lIiwic2VnbWVudCIsImVuZHNXaXRoIiwic3RhcnRzV2l0aCIsInZhbGlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQTRCQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUVDLFVBQVUsUUFBUSxrQ0FBa0M7QUFDckgsU0FBU0MsZ0JBQWdCLEVBQUVDLGdCQUFnQixRQUFRLGtCQUFrQjtBQUNyRSxPQUFPQyx3QkFBd0Isb0NBQW9DO0FBRW5FLElBQU1DLG9CQUFvQixTQUFDQyxZQUFvQkM7SUFDN0MsSUFBTUMsWUFBWUQsWUFBWUUsTUFBTSxDQUFDLFNBQUNDLEtBQUtDO1FBQ3pDLElBQUlYLGtCQUFrQlcsYUFBYVosaUJBQWlCWSxXQUFXO1lBQzdELHNCQUFzQjtZQUN0QkQsSUFBSUUsSUFBSSxDQUFDTixhQUFhLEFBQUMsR0FBZ0JLLE9BQWRMLFlBQVcsS0FBaUIsT0FBZEssU0FBU0UsSUFBSSxFQUFDLE9BQUssQUFBQyxHQUFnQixPQUFkRixTQUFTRSxJQUFJLEVBQUM7UUFDN0UsT0FBTyxJQUFJYixrQkFBa0JXLFdBQVc7Z0JBQ3RDLGtDQUFrQztZQUNsQ0Q7WUFBQUEsQ0FBQUEsT0FBQUEsS0FBSUUsSUFBSSxDQUFSRixNQUFBQSxNQUFTLHFCQUFHTCxrQkFBa0JDLFlBQVlLLFNBQVNHLE1BQU07UUFDM0QsT0FBTyxJQUFJSCxTQUFTSSxJQUFJLEtBQUssUUFBUTtZQUNuQyxPQUFPO1lBQ1BKLFNBQVNLLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDO29CQUtyQlI7Z0JBSkEsSUFBSVMsVUFBVWI7Z0JBQ2QsSUFBSUwsV0FBV2lCLE1BQU07b0JBQ25CQyxVQUFVYixhQUFhLEFBQUMsR0FBZ0JZLE9BQWRaLFlBQVcsS0FBWSxPQUFUWSxJQUFJTCxJQUFJLElBQUtLLElBQUlMLElBQUk7Z0JBQy9EO2dCQUNBSCxDQUFBQSxPQUFBQSxLQUFJRSxJQUFJLENBQVJGLE1BQUFBLE1BQVMscUJBQUdMLGtCQUFrQmMsU0FBU0QsSUFBSUosTUFBTTtZQUNuRDtRQUNGLE9BQU8sSUFBSWYsaUJBQWlCWSxXQUFXO1lBQ3JDLDJCQUEyQjtZQUMzQkQsSUFBSUUsSUFBSSxDQUFDTixhQUFhLEFBQUMsR0FBZ0JLLE9BQWRMLFlBQVcsS0FBaUIsT0FBZEssU0FBU0UsSUFBSSxJQUFLRixTQUFTRSxJQUFJO1FBQ3hFO1FBRUEsT0FBT0g7SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPRjtBQUNUO0FBVUEsT0FBTyxJQUFNWSxtQkFBNEQ7UUFBR0MsYUFBQUEsTUFBTWQsb0JBQUFBLGFBQWFlLHNCQUFBQTtJQUM3RixJQUFpQnBCLHFDQUFBQSx3QkFBVlksU0FBVVo7SUFDakIsSUFBTXFCLGVBQWVwQjtJQUNyQixJQUF1QkwsbUNBQUFBLE1BQU0wQixRQUFRLENBQUM7UUFDcEMsSUFBSWpCLGFBQWE7WUFDZixPQUFPRixrQkFBa0JnQixNQUFNZDtRQUNqQztRQUVBLE9BQU87WUFBRSxHQUFPLE9BQUxjLE1BQUs7U0FBRztJQUNyQixRQU5PSSxlQUFnQjNCO0lBUXZCTSxtQkFBbUI7UUFDakIsSUFBSXNCLGFBQWE7UUFDakIsSUFBSUgsY0FBYztZQUNoQkksT0FBT0MsT0FBTyxDQUFDZCxRQUFRRyxPQUFPLENBQUM7eURBQUVZO2dCQUMvQixJQUFNQyxrQkFBa0JMLGFBQWFNLElBQUksQ0FBQyxTQUFDQztvQkFDekMsSUFBSUEsUUFBUUMsUUFBUSxDQUFDLE1BQU07d0JBQ3pCLE9BQU9KLElBQUlLLFVBQVUsQ0FBQ0Y7b0JBQ3hCO29CQUNBLE9BQU9ILFFBQVFHO2dCQUNqQjtnQkFFQSxJQUFJRixpQkFBaUI7b0JBQ25CLElBQUksV0FBV2hCLE1BQU0sQ0FBQ2UsSUFBSSxJQUFJLENBQUNmLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDTSxLQUFLLEVBQUU7d0JBQ2hEVCxjQUFjO29CQUNoQjtnQkFDRjtZQUNGO1FBQ0Y7UUFFQUosY0FBY0k7SUFDaEIsR0FBRyxLQUFLO1FBQUNaO1FBQVFTO1FBQWNFO0tBQWE7SUFFNUMsT0FBTztBQUNULEVBQUUifQ==