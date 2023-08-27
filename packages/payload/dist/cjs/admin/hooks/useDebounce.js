"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // Our hook
"default", {
    enumerable: true,
    get: function() {
        return useDebounce;
    }
});
var _react = require("react");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function useDebounce(value, delay) {
    // State and setters for debounced value
    var _useState = _sliced_to_array((0, _react.useState)(value), 2), debouncedValue = _useState[0], setDebouncedValue = _useState[1];
    (0, _react.useEffect)(function() {
        var handler = setTimeout(function() {
            setDebouncedValue(value);
        }, delay);
        return function() {
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VEZWJvdW5jZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuLy8gT3VyIGhvb2tcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZURlYm91bmNlPFQgPSB1bmtub3duPih2YWx1ZTogVCwgZGVsYXk6IG51bWJlcik6IFQge1xuICAvLyBTdGF0ZSBhbmQgc2V0dGVycyBmb3IgZGVib3VuY2VkIHZhbHVlXG4gIGNvbnN0IFtkZWJvdW5jZWRWYWx1ZSwgc2V0RGVib3VuY2VkVmFsdWVdID0gdXNlU3RhdGUodmFsdWUpO1xuXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldERlYm91bmNlZFZhbHVlKHZhbHVlKTtcbiAgICAgIH0sIGRlbGF5KTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xuICAgICAgfTtcbiAgICB9LFxuXG4gICAgW3ZhbHVlLCBkZWxheV0sXG4gICk7XG5cbiAgcmV0dXJuIGRlYm91bmNlZFZhbHVlO1xufVxuIl0sIm5hbWVzIjpbInVzZURlYm91bmNlIiwidmFsdWUiLCJkZWxheSIsInVzZVN0YXRlIiwiZGVib3VuY2VkVmFsdWUiLCJzZXREZWJvdW5jZWRWYWx1ZSIsInVzZUVmZmVjdCIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7OytCQUVBLFdBQVc7QUFDWDs7O2VBQXdCQTs7O3FCQUhZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdyQixTQUFTQSxZQUF5QkMsS0FBUSxFQUFFQyxLQUFhO0lBQ3RFLHdDQUF3QztJQUN4QyxJQUE0Q0MsNkJBQUFBLElBQUFBLGVBQVEsRUFBQ0YsWUFBOUNHLGlCQUFxQ0QsY0FBckJFLG9CQUFxQkY7SUFFNUNHLElBQUFBLGdCQUFTLEVBQ1A7UUFDRSxJQUFNQyxVQUFVQyxXQUFXO1lBQ3pCSCxrQkFBa0JKO1FBQ3BCLEdBQUdDO1FBRUgsT0FBTztZQUNMTyxhQUFhRjtRQUNmO0lBQ0YsR0FFQTtRQUFDTjtRQUFPQztLQUFNO0lBR2hCLE9BQU9FO0FBQ1QifQ==