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
import React, { useEffect } from "react";
import useIntersect from "../../../hooks/useIntersect";
import "./index.scss";
var Tooltip = function(props) {
    var _boundingRef;
    var className = props.className, children = props.children, tmp = props.show, showFromProps = tmp === void 0 ? true : tmp, _props_delay = props.delay, delay = _props_delay === void 0 ? 350 : _props_delay, boundingRef = props.boundingRef;
    var _React_useState = _sliced_to_array(React.useState(showFromProps), 2), show = _React_useState[0], setShow = _React_useState[1];
    var _React_useState1 = _sliced_to_array(React.useState("top"), 2), position = _React_useState1[0], setPosition = _React_useState1[1];
    var _useIntersect = _sliced_to_array(useIntersect({
        threshold: 0,
        rootMargin: "-145px 0px 0px 100px",
        root: ((_boundingRef = boundingRef) === null || _boundingRef === void 0 ? void 0 : _boundingRef.current) || null
    }), 2), ref = _useIntersect[0], intersectionEntry = _useIntersect[1];
    useEffect(function() {
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
    useEffect(function() {
        var _intersectionEntry;
        setPosition(((_intersectionEntry = intersectionEntry) === null || _intersectionEntry === void 0 ? void 0 : _intersectionEntry.isIntersecting) ? "top" : "bottom");
    }, [
        intersectionEntry
    ]);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("aside", {
        ref: ref,
        className: [
            "tooltip",
            className,
            "tooltip--position-top"
        ].filter(Boolean).join(" "),
        "aria-hidden": "true"
    }, children), /*#__PURE__*/ React.createElement("aside", {
        className: [
            "tooltip",
            className,
            show && "tooltip--show",
            "tooltip--position-".concat(position)
        ].filter(Boolean).join(" ")
    }, children));
};
export default Tooltip;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1Rvb2x0aXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHVzZUludGVyc2VjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VJbnRlcnNlY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IFRvb2x0aXA6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICAgIHNob3c6IHNob3dGcm9tUHJvcHMgPSB0cnVlLFxuICAgIGRlbGF5ID0gMzUwLFxuICAgIGJvdW5kaW5nUmVmLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoc2hvd0Zyb21Qcm9wcyk7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGU8J3RvcCcgfCAnYm90dG9tJz4oJ3RvcCcpO1xuXG4gIGNvbnN0IFtyZWYsIGludGVyc2VjdGlvbkVudHJ5XSA9IHVzZUludGVyc2VjdCh7XG4gICAgdGhyZXNob2xkOiAwLFxuICAgIHJvb3RNYXJnaW46ICctMTQ1cHggMHB4IDBweCAxMDBweCcsXG4gICAgcm9vdDogYm91bmRpbmdSZWY/LmN1cnJlbnQgfHwgbnVsbCxcbiAgfSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0aW1lcklkOiBOb2RlSlMuVGltZW91dDtcblxuICAgIC8vIGRvIG5vdCB1c2UgdGhlIGRlbGF5IG9uIHRyYW5zaXRpb24tb3V0XG4gICAgaWYgKGRlbGF5ICYmIHNob3dGcm9tUHJvcHMpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0U2hvdyhzaG93RnJvbVByb3BzKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2hvdyhzaG93RnJvbVByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHRpbWVySWQpIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9O1xuICB9LCBbc2hvd0Zyb21Qcm9wcywgZGVsYXldKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKGludGVyc2VjdGlvbkVudHJ5Py5pc0ludGVyc2VjdGluZyA/ICd0b3AnIDogJ2JvdHRvbScpO1xuICB9LCBbaW50ZXJzZWN0aW9uRW50cnldKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxhc2lkZVxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgJ3Rvb2x0aXAnLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAndG9vbHRpcC0tcG9zaXRpb24tdG9wJyxcbiAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2FzaWRlPlxuXG4gICAgICA8YXNpZGVcbiAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgJ3Rvb2x0aXAnLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICBzaG93ICYmICd0b29sdGlwLS1zaG93JyxcbiAgICAgICAgICBgdG9vbHRpcC0tcG9zaXRpb24tJHtwb3NpdGlvbn1gLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYXNpZGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VJbnRlcnNlY3QiLCJUb29sdGlwIiwicHJvcHMiLCJib3VuZGluZ1JlZiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwic2hvd0Zyb21Qcm9wcyIsInNob3ciLCJkZWxheSIsInVzZVN0YXRlIiwic2V0U2hvdyIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwicm9vdCIsImN1cnJlbnQiLCJyZWYiLCJpbnRlcnNlY3Rpb25FbnRyeSIsInRpbWVySWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaXNJbnRlcnNlY3RpbmciLCJGcmFnbWVudCIsImFzaWRlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJhcmlhLWhpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFNBQVMsUUFBUSxRQUFRO0FBRXpDLE9BQU9DLGtCQUFrQiw4QkFBOEI7QUFFdkQsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFVBQTJCLFNBQUNDO1FBZXhCQztJQWRSLElBQ0VDLFlBS0VGLE1BTEZFLFdBQ0FDLFdBSUVILE1BSkZHLFVBQ01DLE1BR0pKLE1BSEZLLE1BQU1ELGdCQUFBQSxpQkFBZ0IsT0FBaEJBLG9CQUdKSixNQUZGTSxPQUFBQSxrQ0FBUSxvQkFDUkwsY0FDRUQsTUFERkM7SUFHRixJQUF3QkwsbUNBQUFBLE1BQU1XLFFBQVEsQ0FBQ0gsb0JBQWhDQyxPQUFpQlQsb0JBQVhZLFVBQVdaO0lBQ3hCLElBQWdDQSxvQ0FBQUEsTUFBTVcsUUFBUSxDQUFtQixZQUExREUsV0FBeUJiLHFCQUFmYyxjQUFlZDtJQUVoQyxJQUFpQ0UsaUNBQUFBLGFBQWE7UUFDNUNhLFdBQVc7UUFDWEMsWUFBWTtRQUNaQyxNQUFNWixFQUFBQSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFhLE9BQU8sS0FBSTtJQUNoQyxRQUpPQyxNQUEwQmpCLGtCQUFyQmtCLG9CQUFxQmxCO0lBT2pDRCxVQUFVO1FBQ1IsSUFBSW9CO1FBRUoseUNBQXlDO1FBQ3pDLElBQUlYLFNBQVNGLGVBQWU7WUFDMUJhLFVBQVVDLFdBQVc7Z0JBQ25CVixRQUFRSjtZQUNWLEdBQUdFO1FBQ0wsT0FBTztZQUNMRSxRQUFRSjtRQUNWO1FBRUEsT0FBTztZQUNMLElBQUlhLFNBQVNFLGFBQWFGO1FBQzVCO0lBQ0YsR0FBRztRQUFDYjtRQUFlRTtLQUFNO0lBRXpCVCxVQUFVO1lBQ0ltQjtRQUFaTixZQUFZTSxFQUFBQSxxQkFBQUEsK0JBQUFBLHlDQUFBQSxtQkFBbUJJLGNBQWMsSUFBRyxRQUFRO0lBQzFELEdBQUc7UUFBQ0o7S0FBa0I7SUFFdEIscUJBQ0Usb0JBQUNwQixNQUFNeUIsUUFBUSxzQkFDYixvQkFBQ0M7UUFDQ1AsS0FBS0E7UUFDTGIsV0FBVztZQUNUO1lBQ0FBO1lBQ0E7U0FDRCxDQUFDcUIsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkJDLGVBQVk7T0FFWHZCLHlCQUdILG9CQUFDbUI7UUFDQ3BCLFdBQVc7WUFDVDtZQUNBQTtZQUNBRyxRQUFRO1lBQ1AscUJBQTZCLE9BQVRJO1NBQ3RCLENBQUNjLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO09BRXRCdEI7QUFJVDtBQUVBLGVBQWVKLFFBQVEifQ==