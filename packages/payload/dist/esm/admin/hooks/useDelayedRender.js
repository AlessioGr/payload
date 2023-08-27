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
import { useDelay } from "./useDelay";
export var useDelayedRender = function(param) {
    var show = param.show, delayBeforeShow = param.delayBeforeShow, inTimeout = param.inTimeout, minShowTime = param.minShowTime, outTimeout = param.outTimeout;
    var totalMountTime = inTimeout + minShowTime + outTimeout;
    var _useDelay = _sliced_to_array(useDelay(delayBeforeShow), 2), hasDelayed = _useDelay[0], triggerDelay = _useDelay[1];
    var _React_useState = _sliced_to_array(React.useState(false), 2), isMounted = _React_useState[0], setIsMounted = _React_useState[1];
    var _React_useState1 = _sliced_to_array(React.useState(false), 2), isUnmounting = _React_useState1[0], setIsUnmounting = _React_useState1[1];
    var onMountTimestampRef = React.useRef(0);
    var unmountTimeoutRef = React.useRef();
    var unmount = React.useCallback(function() {
        setIsUnmounting(true);
        unmountTimeoutRef.current = setTimeout(function() {
            setIsMounted(false);
            setIsUnmounting(false);
        }, outTimeout);
    }, [
        setIsUnmounting,
        outTimeout
    ]);
    React.useEffect(function() {
        var shouldMount = hasDelayed && !isMounted && show;
        var shouldUnmount = isMounted && !show;
        if (shouldMount) {
            onMountTimestampRef.current = Date.now();
            setIsMounted(true);
        } else if (shouldUnmount) {
            var totalTimeMounted = Date.now() - onMountTimestampRef.current;
            var remainingTime = totalMountTime - totalTimeMounted;
            clearTimeout(unmountTimeoutRef.current);
            unmountTimeoutRef.current = setTimeout(unmount, Math.max(0, remainingTime));
        }
    }, [
        isMounted,
        show,
        unmount,
        totalMountTime,
        hasDelayed
    ]);
    return {
        isMounted: isMounted,
        isUnmounting: isUnmounting,
        triggerDelayedRender: triggerDelay
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VEZWxheWVkUmVuZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURlbGF5IH0gZnJvbSAnLi91c2VEZWxheSc7XG5cbnR5cGUgRGVsYXllZFJlbmRlclByb3BzID0ge1xuICAvKiogYHRydWVgIHN0YXJ0cyB0aGUgbW91bnQgcHJvY2Vzcy5cbiAgICogYGZhbHNlYCBzdGFydHMgdGhlIHVubW91bnQgcHJvY2Vzcy5cbiAgICogKi9cbiAgc2hvdzogYm9vbGVhbjtcbiAgLyoqIFRpbWUgaW4gbXMgdG8gd2FpdCBiZWZvcmUgXCJtb3VudGluZ1wiIHRoZSBjb21wb25lbnQuICovXG4gIGRlbGF5QmVmb3JlU2hvdzogbnVtYmVyO1xuICAvKiogVGltZSBpbiBtcyBmb3IgdGhlIFwiZW50ZXJcIiBwaGFzZSBvZiB0aGUgdHJhbnNpdGlvbiwgYWZ0ZXIgZGVsYXkgY29tcGxldGVzLiAqL1xuICBpblRpbWVvdXQ6IG51bWJlcjtcbiAgLyoqIE1pbiB0aW1lIGluIG1zIGZvciB0aGUgXCJlbnRlcmVkXCIgcGhhc2Ugb2YgdGhlIHRyYW5zaXRpb24uICovXG4gIG1pblNob3dUaW1lOiBudW1iZXI7XG4gIC8qKiBUaW1lIGluIG1zIGZvciB0aGUgZXhpdCBwaGFzZSBvZiB0aGUgdHJhbnNpdGlvbi4gKi9cbiAgb3V0VGltZW91dDogbnVtYmVyO1xufTtcbnR5cGUgdXNlRGVsYXllZFJlbmRlclQgPSAocHJvcHM6IERlbGF5ZWRSZW5kZXJQcm9wcykgPT4ge1xuICAvKiogYHRydWVgIGlmIHRoZSBjb21wb25lbnQgaGFzIG1vdW50ZWQgYWZ0ZXIgdGhlIHRpbWVvdXQuICovXG4gIGlzTW91bnRlZDogYm9vbGVhbjtcbiAgLyoqIGB0cnVlYCBpZiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRpbmcuICovXG4gIGlzVW5tb3VudGluZzogYm9vbGVhbjtcbiAgLyoqIENhbGwgdGhpcyBmdW5jdGlvbiB0byB0cmlnZ2VyIHRoZSB0aW1lb3V0IGRlbGF5IGJlZm9yZSByZW5kZXJpbmcuICovXG4gIHRyaWdnZXJEZWxheWVkUmVuZGVyOiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCB1c2VEZWxheWVkUmVuZGVyOiB1c2VEZWxheWVkUmVuZGVyVCA9ICh7IHNob3csIGRlbGF5QmVmb3JlU2hvdywgaW5UaW1lb3V0LCBtaW5TaG93VGltZSwgb3V0VGltZW91dCB9KSA9PiB7XG4gIGNvbnN0IHRvdGFsTW91bnRUaW1lID0gaW5UaW1lb3V0ICsgbWluU2hvd1RpbWUgKyBvdXRUaW1lb3V0O1xuICBjb25zdCBbaGFzRGVsYXllZCwgdHJpZ2dlckRlbGF5XSA9IHVzZURlbGF5KGRlbGF5QmVmb3JlU2hvdyk7XG4gIGNvbnN0IFtpc01vdW50ZWQsIHNldElzTW91bnRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1VubW91bnRpbmcsIHNldElzVW5tb3VudGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uTW91bnRUaW1lc3RhbXBSZWYgPSBSZWFjdC51c2VSZWYoMCk7XG4gIGNvbnN0IHVubW91bnRUaW1lb3V0UmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PE5vZGVKUy5UaW1lb3V0IHwgdW5kZWZpbmVkPiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGNvbnN0IHVubW91bnQgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0SXNVbm1vdW50aW5nKHRydWUpO1xuICAgIHVubW91bnRUaW1lb3V0UmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldElzTW91bnRlZChmYWxzZSk7XG4gICAgICBzZXRJc1VubW91bnRpbmcoZmFsc2UpO1xuICAgIH0sIG91dFRpbWVvdXQpO1xuICB9LCBbc2V0SXNVbm1vdW50aW5nLCBvdXRUaW1lb3V0XSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRNb3VudCA9IGhhc0RlbGF5ZWQgJiYgIWlzTW91bnRlZCAmJiBzaG93O1xuICAgIGNvbnN0IHNob3VsZFVubW91bnQgPSBpc01vdW50ZWQgJiYgIXNob3c7XG5cbiAgICBpZiAoc2hvdWxkTW91bnQpIHtcbiAgICAgIG9uTW91bnRUaW1lc3RhbXBSZWYuY3VycmVudCA9IERhdGUubm93KCk7XG4gICAgICBzZXRJc01vdW50ZWQodHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChzaG91bGRVbm1vdW50KSB7XG4gICAgICBjb25zdCB0b3RhbFRpbWVNb3VudGVkID0gRGF0ZS5ub3coKSAtIG9uTW91bnRUaW1lc3RhbXBSZWYuY3VycmVudDtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSB0b3RhbE1vdW50VGltZSAtIHRvdGFsVGltZU1vdW50ZWQ7XG4gICAgICBjbGVhclRpbWVvdXQodW5tb3VudFRpbWVvdXRSZWYuY3VycmVudCk7XG4gICAgICB1bm1vdW50VGltZW91dFJlZi5jdXJyZW50ID0gc2V0VGltZW91dCh1bm1vdW50LCBNYXRoLm1heCgwLCByZW1haW5pbmdUaW1lKSk7XG4gICAgfVxuICB9LCBbaXNNb3VudGVkLCBzaG93LCB1bm1vdW50LCB0b3RhbE1vdW50VGltZSwgaGFzRGVsYXllZF0pO1xuXG4gIHJldHVybiB7XG4gICAgaXNNb3VudGVkLFxuICAgIGlzVW5tb3VudGluZyxcbiAgICB0cmlnZ2VyRGVsYXllZFJlbmRlcjogdHJpZ2dlckRlbGF5LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZURlbGF5IiwidXNlRGVsYXllZFJlbmRlciIsInNob3ciLCJkZWxheUJlZm9yZVNob3ciLCJpblRpbWVvdXQiLCJtaW5TaG93VGltZSIsIm91dFRpbWVvdXQiLCJ0b3RhbE1vdW50VGltZSIsImhhc0RlbGF5ZWQiLCJ0cmlnZ2VyRGVsYXkiLCJ1c2VTdGF0ZSIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsImlzVW5tb3VudGluZyIsInNldElzVW5tb3VudGluZyIsIm9uTW91bnRUaW1lc3RhbXBSZWYiLCJ1c2VSZWYiLCJ1bm1vdW50VGltZW91dFJlZiIsInVubW91bnQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2hvdWxkTW91bnQiLCJzaG91bGRVbm1vdW50IiwiRGF0ZSIsIm5vdyIsInRvdGFsVGltZU1vdW50ZWQiLCJyZW1haW5pbmdUaW1lIiwiY2xlYXJUaW1lb3V0IiwiTWF0aCIsIm1heCIsInRyaWdnZXJEZWxheWVkUmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWUEsV0FBVyxRQUFRO0FBQy9CLFNBQVNDLFFBQVEsUUFBUSxhQUFhO0FBd0J0QyxPQUFPLElBQU1DLG1CQUFzQztRQUFHQyxhQUFBQSxNQUFNQyx3QkFBQUEsaUJBQWlCQyxrQkFBQUEsV0FBV0Msb0JBQUFBLGFBQWFDLG1CQUFBQTtJQUNuRyxJQUFNQyxpQkFBaUJILFlBQVlDLGNBQWNDO0lBQ2pELElBQW1DTiw2QkFBQUEsU0FBU0csc0JBQXJDSyxhQUE0QlIsY0FBaEJTLGVBQWdCVDtJQUNuQyxJQUFrQ0QsbUNBQUFBLE1BQU1XLFFBQVEsQ0FBQyxZQUExQ0MsWUFBMkJaLG9CQUFoQmEsZUFBZ0JiO0lBQ2xDLElBQXdDQSxvQ0FBQUEsTUFBTVcsUUFBUSxDQUFDLFlBQWhERyxlQUFpQ2QscUJBQW5CZSxrQkFBbUJmO0lBQ3hDLElBQU1nQixzQkFBc0JoQixNQUFNaUIsTUFBTSxDQUFDO0lBQ3pDLElBQU1DLG9CQUF3RWxCLE1BQU1pQixNQUFNO0lBRTFGLElBQU1FLFVBQVVuQixNQUFNb0IsV0FBVyxDQUFDO1FBQ2hDTCxnQkFBZ0I7UUFDaEJHLGtCQUFrQkcsT0FBTyxHQUFHQyxXQUFXO1lBQ3JDVCxhQUFhO1lBQ2JFLGdCQUFnQjtRQUNsQixHQUFHUjtJQUNMLEdBQUc7UUFBQ1E7UUFBaUJSO0tBQVc7SUFFaENQLE1BQU11QixTQUFTLENBQUM7UUFDZCxJQUFNQyxjQUFjZixjQUFjLENBQUNHLGFBQWFUO1FBQ2hELElBQU1zQixnQkFBZ0JiLGFBQWEsQ0FBQ1Q7UUFFcEMsSUFBSXFCLGFBQWE7WUFDZlIsb0JBQW9CSyxPQUFPLEdBQUdLLEtBQUtDLEdBQUc7WUFDdENkLGFBQWE7UUFDZixPQUFPLElBQUlZLGVBQWU7WUFDeEIsSUFBTUcsbUJBQW1CRixLQUFLQyxHQUFHLEtBQUtYLG9CQUFvQkssT0FBTztZQUNqRSxJQUFNUSxnQkFBZ0JyQixpQkFBaUJvQjtZQUN2Q0UsYUFBYVosa0JBQWtCRyxPQUFPO1lBQ3RDSCxrQkFBa0JHLE9BQU8sR0FBR0MsV0FBV0gsU0FBU1ksS0FBS0MsR0FBRyxDQUFDLEdBQUdIO1FBQzlEO0lBQ0YsR0FBRztRQUFDakI7UUFBV1Q7UUFBTWdCO1FBQVNYO1FBQWdCQztLQUFXO0lBRXpELE9BQU87UUFDTEcsV0FBQUE7UUFDQUUsY0FBQUE7UUFDQW1CLHNCQUFzQnZCO0lBQ3hCO0FBQ0YsRUFBRSJ9