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
import * as React from "react";
export var useDelay = function(delay) {
    var triggerOnMount = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var _React_useState = _sliced_to_array(React.useState(false), 2), hasDelayed = _React_useState[0], setHasDelayed = _React_useState[1];
    var triggerTimeoutRef = React.useRef();
    var triggerDelay = React.useCallback(function() {
        setHasDelayed(false);
        clearTimeout(triggerTimeoutRef.current);
        triggerTimeoutRef.current = setTimeout(function() {
            setHasDelayed(true);
        }, delay);
        return function() {
            clearTimeout(triggerTimeoutRef.current);
        };
    }, [
        delay
    ]);
    React.useEffect(function() {
        if (triggerOnMount) {
            triggerDelay();
        }
    }, [
        triggerDelay,
        triggerOnMount
    ]);
    return [
        hasDelayed,
        triggerDelay
    ];
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VEZWxheS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFJlc3VsdCA9IFtib29sZWFuLCAoKSA9PiB2b2lkXTtcbmV4cG9ydCBjb25zdCB1c2VEZWxheSA9IChkZWxheTogbnVtYmVyLCB0cmlnZ2VyT25Nb3VudCA9IGZhbHNlKTogUmVzdWx0ID0+IHtcbiAgY29uc3QgW2hhc0RlbGF5ZWQsIHNldEhhc0RlbGF5ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0cmlnZ2VyVGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZjxOb2RlSlMuVGltZW91dD4oKTtcblxuICBjb25zdCB0cmlnZ2VyRGVsYXkgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SGFzRGVsYXllZChmYWxzZSk7XG4gICAgY2xlYXJUaW1lb3V0KHRyaWdnZXJUaW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgIHRyaWdnZXJUaW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldEhhc0RlbGF5ZWQodHJ1ZSk7XG4gICAgfSwgZGVsYXkpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0cmlnZ2VyVGltZW91dFJlZi5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbZGVsYXldKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0cmlnZ2VyT25Nb3VudCkge1xuICAgICAgdHJpZ2dlckRlbGF5KCk7XG4gICAgfVxuICB9LCBbdHJpZ2dlckRlbGF5LCB0cmlnZ2VyT25Nb3VudF0pO1xuXG4gIHJldHVybiBbXG4gICAgaGFzRGVsYXllZCxcbiAgICB0cmlnZ2VyRGVsYXksXG4gIF07XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRGVsYXkiLCJkZWxheSIsInRyaWdnZXJPbk1vdW50IiwidXNlU3RhdGUiLCJoYXNEZWxheWVkIiwic2V0SGFzRGVsYXllZCIsInRyaWdnZXJUaW1lb3V0UmVmIiwidXNlUmVmIiwidHJpZ2dlckRlbGF5IiwidXNlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFlBQVlBLFdBQVcsUUFBUTtBQUcvQixPQUFPLElBQU1DLFdBQVcsU0FBQ0M7UUFBZUMsa0ZBQWlCO0lBQ3ZELElBQW9DSCxtQ0FBQUEsTUFBTUksUUFBUSxDQUFDLFlBQTVDQyxhQUE2Qkwsb0JBQWpCTSxnQkFBaUJOO0lBQ3BDLElBQU1PLG9CQUFvQlAsTUFBTVEsTUFBTTtJQUV0QyxJQUFNQyxlQUFlVCxNQUFNVSxXQUFXLENBQUM7UUFDckNKLGNBQWM7UUFDZEssYUFBYUosa0JBQWtCSyxPQUFPO1FBQ3RDTCxrQkFBa0JLLE9BQU8sR0FBR0MsV0FBVztZQUNyQ1AsY0FBYztRQUNoQixHQUFHSjtRQUVILE9BQU87WUFDTFMsYUFBYUosa0JBQWtCSyxPQUFPO1FBQ3hDO0lBQ0YsR0FBRztRQUFDVjtLQUFNO0lBRVZGLE1BQU1jLFNBQVMsQ0FBQztRQUNkLElBQUlYLGdCQUFnQjtZQUNsQk07UUFDRjtJQUNGLEdBQUc7UUFBQ0E7UUFBY047S0FBZTtJQUVqQyxPQUFPO1FBQ0xFO1FBQ0FJO0tBQ0Q7QUFDSCxFQUFFIn0=