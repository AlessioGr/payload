/* eslint-disable no-shadow */ "use strict";
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
var useIntersect = function() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref_root = _ref.root, root = _ref_root === void 0 ? null : _ref_root, _ref_rootMargin = _ref.rootMargin, rootMargin = _ref_rootMargin === void 0 ? "0px" : _ref_rootMargin, _ref_threshold = _ref.threshold, threshold = _ref_threshold === void 0 ? 0 : _ref_threshold;
    var _useState = _sliced_to_array((0, _react.useState)(), 2), entry = _useState[0], updateEntry = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(null), 2), node = _useState1[0], setNode = _useState1[1];
    var observer = (0, _react.useRef)(new window.IntersectionObserver(function(param) {
        var _param = _sliced_to_array(param, 1), ent = _param[0];
        return updateEntry(ent);
    }, {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold
    }));
    (0, _react.useEffect)(function() {
        var currentObserver = observer.current;
        currentObserver.disconnect();
        if (node) currentObserver.observe(node);
        return function() {
            return currentObserver.disconnect();
        };
    }, [
        node
    ]);
    return [
        setNode,
        entry
    ];
};
var _default = useIntersect;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VJbnRlcnNlY3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEludGVyc2VjdCA9IFtcbiAgc2V0Tm9kZTogUmVhY3QuRGlzcGF0Y2g8RWxlbWVudD4sXG4gIGVudHJ5OiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5XG5dXG5cbmNvbnN0IHVzZUludGVyc2VjdCA9ICh7XG4gIHJvb3QgPSBudWxsLFxuICByb290TWFyZ2luID0gJzBweCcsXG4gIHRocmVzaG9sZCA9IDAsXG59ID0ge30pOiBJbnRlcnNlY3QgPT4ge1xuICBjb25zdCBbZW50cnksIHVwZGF0ZUVudHJ5XSA9IHVzZVN0YXRlPEludGVyc2VjdGlvbk9ic2VydmVyRW50cnk+KCk7XG4gIGNvbnN0IFtub2RlLCBzZXROb2RlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9ic2VydmVyID0gdXNlUmVmKFxuICAgIG5ldyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFtlbnRdKSA9PiB1cGRhdGVFbnRyeShlbnQpLCB7XG4gICAgICByb290LFxuICAgICAgcm9vdE1hcmdpbixcbiAgICAgIHRocmVzaG9sZCxcbiAgICB9KSxcbiAgKTtcblxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgY29uc3QgeyBjdXJyZW50OiBjdXJyZW50T2JzZXJ2ZXIgfSA9IG9ic2VydmVyO1xuICAgICAgY3VycmVudE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgaWYgKG5vZGUpIGN1cnJlbnRPYnNlcnZlci5vYnNlcnZlKG5vZGUpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gY3VycmVudE9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9LFxuICAgIFtub2RlXSxcbiAgKTtcblxuICByZXR1cm4gW3NldE5vZGUsIGVudHJ5XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUludGVyc2VjdDtcbiJdLCJuYW1lcyI6WyJ1c2VJbnRlcnNlY3QiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsInVzZVN0YXRlIiwiZW50cnkiLCJ1cGRhdGVFbnRyeSIsIm5vZGUiLCJzZXROb2RlIiwib2JzZXJ2ZXIiLCJ1c2VSZWYiLCJ3aW5kb3ciLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudCIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJjdXJyZW50T2JzZXJ2ZXIiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCOzs7OytCQXVDNUI7OztlQUFBOzs7cUJBdEM0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUMsSUFBTUEsZUFBZTtnRkFJakIsQ0FBQyxvQkFISEMsTUFBQUEsOEJBQU8seUNBQ1BDLFlBQUFBLDBDQUFhLCtDQUNiQyxXQUFBQSx3Q0FBWTtJQUVaLElBQTZCQyw2QkFBQUEsSUFBQUEsZUFBUSxTQUE5QkMsUUFBc0JELGNBQWZFLGNBQWVGO0lBQzdCLElBQXdCQSw4QkFBQUEsSUFBQUEsZUFBUSxFQUFDLFdBQTFCRyxPQUFpQkgsZUFBWEksVUFBV0o7SUFFeEIsSUFBTUssV0FBV0MsSUFBQUEsYUFBTSxFQUNyQixJQUFJQyxPQUFPQyxvQkFBb0IsQ0FBQztpREFBRUM7ZUFBU1AsWUFBWU87T0FBTTtRQUMzRFosTUFBQUE7UUFDQUMsWUFBQUE7UUFDQUMsV0FBQUE7SUFDRjtJQUdGVyxJQUFBQSxnQkFBUyxFQUNQO1FBQ0UsSUFBUUMsQUFBU0Msa0JBQW9CUCxTQUE3Qk07UUFDUkMsZ0JBQWdCQyxVQUFVO1FBRTFCLElBQUlWLE1BQU1TLGdCQUFnQkUsT0FBTyxDQUFDWDtRQUVsQyxPQUFPO21CQUFNUyxnQkFBZ0JDLFVBQVU7O0lBQ3pDLEdBQ0E7UUFBQ1Y7S0FBSztJQUdSLE9BQU87UUFBQ0M7UUFBU0g7S0FBTTtBQUN6QjtJQUVBLFdBQWVMIn0=