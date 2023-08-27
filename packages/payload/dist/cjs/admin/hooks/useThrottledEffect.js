/* eslint-disable react-hooks/exhaustive-deps */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = require("react");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var useThrottledEffect = function(callback, delay) {
    var deps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var lastRan = (0, _react.useRef)(Date.now());
    (0, _react.useEffect)(function() {
        var handler = setTimeout(function() {
            if (Date.now() - lastRan.current >= delay) {
                callback();
                lastRan.current = Date.now();
            }
        }, delay - (Date.now() - lastRan.current));
        return function() {
            clearTimeout(handler);
        };
    }, [
        delay
    ].concat(_to_consumable_array(deps)));
};
var _default = useThrottledEffect;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VUaHJvdHRsZWRFZmZlY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgdXNlVGhyb3R0bGVkRWZmZWN0ID0gKGNhbGxiYWNrOiBSZWFjdC5FZmZlY3RDYWxsYmFjaywgZGVsYXk6IG51bWJlciwgZGVwczogUmVhY3QuRGVwZW5kZW5jeUxpc3QpID0+IHZvaWQ7XG5cbmNvbnN0IHVzZVRocm90dGxlZEVmZmVjdDogdXNlVGhyb3R0bGVkRWZmZWN0ID0gKGNhbGxiYWNrLCBkZWxheSwgZGVwcyA9IFtdKSA9PiB7XG4gIGNvbnN0IGxhc3RSYW4gPSB1c2VSZWYoRGF0ZS5ub3coKSk7XG5cbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSBsYXN0UmFuLmN1cnJlbnQgPj0gZGVsYXkpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIGxhc3RSYW4uY3VycmVudCA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGRlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0UmFuLmN1cnJlbnQpKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGhhbmRsZXIpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIFtkZWxheSwgLi4uZGVwc10sXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUaHJvdHRsZWRFZmZlY3Q7XG4iXSwibmFtZXMiOlsidXNlVGhyb3R0bGVkRWZmZWN0IiwiY2FsbGJhY2siLCJkZWxheSIsImRlcHMiLCJsYXN0UmFuIiwidXNlUmVmIiwiRGF0ZSIsIm5vdyIsInVzZUVmZmVjdCIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsImNsZWFyVGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDOzs7OytCQXlCOUM7OztlQUFBOzs7cUJBeEJrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEMsSUFBTUEscUJBQXlDLFNBQUNDLFVBQVVDO1FBQU9DLHdFQUFPLEVBQUU7SUFDeEUsSUFBTUMsVUFBVUMsSUFBQUEsYUFBTSxFQUFDQyxLQUFLQyxHQUFHO0lBRS9CQyxJQUFBQSxnQkFBUyxFQUNQO1FBQ0UsSUFBTUMsVUFBVUMsV0FBVztZQUN6QixJQUFJSixLQUFLQyxHQUFHLEtBQUtILFFBQVFPLE9BQU8sSUFBSVQsT0FBTztnQkFDekNEO2dCQUNBRyxRQUFRTyxPQUFPLEdBQUdMLEtBQUtDLEdBQUc7WUFDNUI7UUFDRixHQUFHTCxRQUFTSSxDQUFBQSxLQUFLQyxHQUFHLEtBQUtILFFBQVFPLE9BQU8sQUFBRDtRQUV2QyxPQUFPO1lBQ0xDLGFBQWFIO1FBQ2Y7SUFDRixHQUNBO1FBQUNQO0tBQWUsQ0FBaEIsT0FBUSxxQkFBR0M7QUFFZjtJQUVBLFdBQWVIIn0=