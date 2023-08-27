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
import { useRef, useCallback } from "react";
/**
 * Returns a memoized function that will only call the passed function when it hasn't been called for the wait period
 * @param func The function to be called
 * @param wait Wait period after function hasn't been called for
 * @returns A memoized function that is debounced
 */ export var useDebouncedCallback = function(func, wait) {
    // Use a ref to store the timeout between renders
    // and prevent changes to it from causing re-renders
    var timeout = useRef();
    return useCallback(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var later = function() {
            clearTimeout(timeout.current);
            func.apply(void 0, _to_consumable_array(args));
        };
        clearTimeout(timeout.current);
        timeout.current = setTimeout(later, wait);
    }, [
        func,
        wait
    ]);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VEZWJvdW5jZWRDYWxsYmFjay50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFJldHVybnMgYSBtZW1vaXplZCBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBjYWxsIHRoZSBwYXNzZWQgZnVuY3Rpb24gd2hlbiBpdCBoYXNuJ3QgYmVlbiBjYWxsZWQgZm9yIHRoZSB3YWl0IHBlcmlvZFxuICogQHBhcmFtIGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxuICogQHBhcmFtIHdhaXQgV2FpdCBwZXJpb2QgYWZ0ZXIgZnVuY3Rpb24gaGFzbid0IGJlZW4gY2FsbGVkIGZvclxuICogQHJldHVybnMgQSBtZW1vaXplZCBmdW5jdGlvbiB0aGF0IGlzIGRlYm91bmNlZFxuICovXG5leHBvcnQgY29uc3QgdXNlRGVib3VuY2VkQ2FsbGJhY2sgPSAoZnVuYywgd2FpdCkgPT4ge1xuICAvLyBVc2UgYSByZWYgdG8gc3RvcmUgdGhlIHRpbWVvdXQgYmV0d2VlbiByZW5kZXJzXG4gIC8vIGFuZCBwcmV2ZW50IGNoYW5nZXMgdG8gaXQgZnJvbSBjYXVzaW5nIHJlLXJlbmRlcnNcbiAgY29uc3QgdGltZW91dCA9IHVzZVJlZjxSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0Pj4oKTtcblxuICByZXR1cm4gdXNlQ2FsbGJhY2soXG4gICAgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICAgIH07XG5cbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0LmN1cnJlbnQpO1xuICAgICAgdGltZW91dC5jdXJyZW50ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgfSxcbiAgICBbZnVuYywgd2FpdF0sXG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZUNhbGxiYWNrIiwidXNlRGVib3VuY2VkQ2FsbGJhY2siLCJmdW5jIiwid2FpdCIsInRpbWVvdXQiLCJhcmdzIiwibGF0ZXIiLCJjbGVhclRpbWVvdXQiLCJjdXJyZW50Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE1BQU0sRUFBRUMsV0FBVyxRQUFRLFFBQVE7QUFFNUM7Ozs7O0NBS0MsR0FDRCxPQUFPLElBQU1DLHVCQUF1QixTQUFDQyxNQUFNQztJQUN6QyxpREFBaUQ7SUFDakQsb0RBQW9EO0lBQ3BELElBQU1DLFVBQVVMO0lBRWhCLE9BQU9DLFlBQ0w7eUNBQUlLO1lBQUFBOztRQUNGLElBQU1DLFFBQVE7WUFDWkMsYUFBYUgsUUFBUUksT0FBTztZQUM1Qk4sS0FBQUEsTUFBQUEsS0FBQUEsR0FBSyxxQkFBR0c7UUFDVjtRQUVBRSxhQUFhSCxRQUFRSSxPQUFPO1FBQzVCSixRQUFRSSxPQUFPLEdBQUdDLFdBQVdILE9BQU9IO0lBQ3RDLEdBQ0E7UUFBQ0Q7UUFBTUM7S0FBSztBQUVoQixFQUFFIn0=