"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _useIntersect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useIntersect"));
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var Tooltip = function(props) {
    var _boundingRef;
    var className = props.className, children = props.children, tmp = props.show, showFromProps = tmp === void 0 ? true : tmp, _props_delay = props.delay, delay = _props_delay === void 0 ? 350 : _props_delay, boundingRef = props.boundingRef;
    var _React_useState = _sliced_to_array(_react.default.useState(showFromProps), 2), show = _React_useState[0], setShow = _React_useState[1];
    var _React_useState1 = _sliced_to_array(_react.default.useState("top"), 2), position = _React_useState1[0], setPosition = _React_useState1[1];
    var _useIntersect1 = _sliced_to_array((0, _useIntersect.default)({
        threshold: 0,
        rootMargin: "-145px 0px 0px 100px",
        root: ((_boundingRef = boundingRef) === null || _boundingRef === void 0 ? void 0 : _boundingRef.current) || null
    }), 2), ref = _useIntersect1[0], intersectionEntry = _useIntersect1[1];
    (0, _react.useEffect)(function() {
        var timerId;
        // do not use the delay on transition-out
        if (delay && showFromProps) {
            timerId = setTimeout(function() {
                setShow(showFromProps);
            }, delay);
        } else {
            setShow(showFromProps);
        }
        return function() {
            if (timerId) clearTimeout(timerId);
        };
    }, [
        showFromProps,
        delay
    ]);
    (0, _react.useEffect)(function() {
        var _intersectionEntry;
        setPosition(((_intersectionEntry = intersectionEntry) === null || _intersectionEntry === void 0 ? void 0 : _intersectionEntry.isIntersecting) ? "top" : "bottom");
    }, [
        intersectionEntry
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("aside", {
        ref: ref,
        className: [
            "tooltip",
            className,
            "tooltip--position-top"
        ].filter(Boolean).join(" "),
        "aria-hidden": "true"
    }, children), /*#__PURE__*/ _react.default.createElement("aside", {
        className: [
            "tooltip",
            className,
            show && "tooltip--show",
            "tooltip--position-".concat(position)
        ].filter(Boolean).join(" ")
    }, children));
};
var _default = Tooltip;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1Rvb2x0aXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHVzZUludGVyc2VjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VJbnRlcnNlY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IFRvb2x0aXA6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHNob3c6IHNob3dGcm9tUHJvcHMgPSB0cnVlLFxuICAgIGRlbGF5ID0gMzUwLFxuICAgIGJvdW5kaW5nUmVmLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoc2hvd0Zyb21Qcm9wcyk7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGU8J3RvcCcgfCAnYm90dG9tJz4oJ3RvcCcpO1xuXG4gIGNvbnN0IFtyZWYsIGludGVyc2VjdGlvbkVudHJ5XSA9IHVzZUludGVyc2VjdCh7XG4gICAgdGhyZXNob2xkOiAwLFxuICAgIHJvb3RNYXJnaW46ICctMTQ1cHggMHB4IDBweCAxMDBweCcsXG4gICAgcm9vdDogYm91bmRpbmdSZWY/LmN1cnJlbnQgfHwgbnVsbCxcbiAgfSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcklkOiBOb2RlSlMuVGltZW91dDtcblxuICAgIC8vIGRvIG5vdCB1c2UgdGhlIGRlbGF5IG9uIHRyYW5zaXRpb24tb3V0XG4gICAgaWYgKGRlbGF5ICYmIHNob3dGcm9tUHJvcHMpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U2hvdyhzaG93RnJvbVByb3BzKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2hvdyhzaG93RnJvbVByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVySWQpIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9O1xuICB9LCBbc2hvd0Zyb21Qcm9wcywgZGVsYXldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKGludGVyc2VjdGlvbkVudHJ5Py5pc0ludGVyc2VjdGluZyA/ICd0b3AnIDogJ2JvdHRvbScpO1xuICB9LCBbaW50ZXJzZWN0aW9uRW50cnldKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxhc2lkZVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgJ3Rvb2x0aXAnLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAndG9vbHRpcC0tcG9zaXRpb24tdG9wJyxcbiAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2FzaWRlPlxuXG4gICAgICA8YXNpZGVcbiAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgJ3Rvb2x0aXAnLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBzaG93ICYmICd0b29sdGlwLS1zaG93JyxcbiAgICAgICAgICBgdG9vbHRpcC0tcG9zaXRpb24tJHtwb3NpdGlvbn1gLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXSwibmFtZXMiOlsiVG9vbHRpcCIsInByb3BzIiwiYm91bmRpbmdSZWYiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInNob3dGcm9tUHJvcHMiLCJzaG93IiwiZGVsYXkiLCJSZWFjdCIsInVzZVN0YXRlIiwic2V0U2hvdyIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ1c2VJbnRlcnNlY3QiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwicm9vdCIsImN1cnJlbnQiLCJyZWYiLCJpbnRlcnNlY3Rpb25FbnRyeSIsInVzZUVmZmVjdCIsInRpbWVySWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaXNJbnRlcnNlY3RpbmciLCJGcmFnbWVudCIsImFzaWRlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJhcmlhLWhpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEwRUE7OztlQUFBOzs7NkRBMUVpQzttRUFFUjtRQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFVBQTJCLFNBQUNDO1FBZXhCQztJQWRSLElBQ0VDLFlBS0VGLE1BTEZFLFdBQ0FDLFdBSUVILE1BSkZHLFVBQ01DLE1BR0pKLE1BSEZLLE1BQU1ELGdCQUFBQSxpQkFBZ0IsT0FBaEJBLG9CQUdKSixNQUZGTSxPQUFBQSxrQ0FBUSxvQkFDUkwsY0FDRUQsTUFERkM7SUFHRixJQUF3Qk0sbUNBQUFBLGNBQUssQ0FBQ0MsUUFBUSxDQUFDSixvQkFBaENDLE9BQWlCRSxvQkFBWEUsVUFBV0Y7SUFDeEIsSUFBZ0NBLG9DQUFBQSxjQUFLLENBQUNDLFFBQVEsQ0FBbUIsWUFBMURFLFdBQXlCSCxxQkFBZkksY0FBZUo7SUFFaEMsSUFBaUNLLGtDQUFBQSxJQUFBQSxxQkFBWSxFQUFDO1FBQzVDQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsTUFBTWQsRUFBQUEsZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhZSxPQUFPLEtBQUk7SUFDaEMsUUFKT0MsTUFBMEJMLG1CQUFyQk0sb0JBQXFCTjtJQU9qQ08sSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUlDO1FBRUoseUNBQXlDO1FBQ3pDLElBQUlkLFNBQVNGLGVBQWU7WUFDMUJnQixVQUFVQyxXQUFXO2dCQUNuQlosUUFBUUw7WUFDVixHQUFHRTtRQUNMLE9BQU87WUFDTEcsUUFBUUw7UUFDVjtRQUVBLE9BQU87WUFDTCxJQUFJZ0IsU0FBU0UsYUFBYUY7UUFDNUI7SUFDRixHQUFHO1FBQUNoQjtRQUFlRTtLQUFNO0lBRXpCYSxJQUFBQSxnQkFBUyxFQUFDO1lBQ0lEO1FBQVpQLFlBQVlPLEVBQUFBLHFCQUFBQSwrQkFBQUEseUNBQUFBLG1CQUFtQkssY0FBYyxJQUFHLFFBQVE7SUFDMUQsR0FBRztRQUFDTDtLQUFrQjtJQUV0QixxQkFDRSw2QkFBQ1gsY0FBSyxDQUFDaUIsUUFBUSxzQkFDYiw2QkFBQ0M7UUFDQ1IsS0FBS0E7UUFDTGYsV0FBVztZQUNUO1lBQ0FBO1lBQ0E7U0FDRCxDQUFDd0IsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkJDLGVBQVk7T0FFWDFCLHlCQUdILDZCQUFDc0I7UUFDQ3ZCLFdBQVc7WUFDVDtZQUNBQTtZQUNBRyxRQUFRO1lBQ1AscUJBQTZCLE9BQVRLO1NBQ3RCLENBQUNnQixNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztPQUV0QnpCO0FBSVQ7SUFFQSxXQUFlSiJ9