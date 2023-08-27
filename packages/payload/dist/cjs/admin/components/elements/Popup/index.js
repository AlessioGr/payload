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
var _windowinfo = require("@faceless-ui/window-info");
var _PopupButton = /*#__PURE__*/ _interop_require_default(require("./PopupButton"));
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
var baseClass = "popup";
var Popup = function(props) {
    var _boundingRef;
    var className = props.className, buttonClassName = props.buttonClassName, render = props.render, _props_size = props.size, size = _props_size === void 0 ? "small" : _props_size, _props_color = props.color, color = _props_color === void 0 ? "light" : _props_color, button = props.button, _props_buttonType = props.buttonType, buttonType = _props_buttonType === void 0 ? "default" : _props_buttonType, children = props.children, _props_showOnHover = props.showOnHover, showOnHover = _props_showOnHover === void 0 ? false : _props_showOnHover, tmp = props.horizontalAlign, horizontalAlignFromProps = tmp === void 0 ? "left" : tmp, tmp1 = props.verticalAlign, verticalAlignFromProps = tmp1 === void 0 ? "top" : tmp1, _props_initActive = props.initActive, initActive = _props_initActive === void 0 ? false : _props_initActive, onToggleOpen = props.onToggleOpen, padding = props.padding, forceOpen = props.forceOpen, boundingRef = props.boundingRef, _props_showScrollbar = props.showScrollbar, showScrollbar = _props_showScrollbar === void 0 ? false : _props_showScrollbar;
    var _useWindowInfo = (0, _windowinfo.useWindowInfo)(), windowWidth = _useWindowInfo.width, windowHeight = _useWindowInfo.height;
    var _useIntersect1 = _sliced_to_array((0, _useIntersect.default)({
        threshold: 1,
        rootMargin: "-100px 0px 0px 0px",
        root: ((_boundingRef = boundingRef) === null || _boundingRef === void 0 ? void 0 : _boundingRef.current) || null
    }), 2), intersectionRef = _useIntersect1[0], intersectionEntry = _useIntersect1[1];
    var buttonRef = (0, _react.useRef)(null);
    var contentRef = (0, _react.useRef)(null);
    var _useState = _sliced_to_array((0, _react.useState)(initActive), 2), active = _useState[0], setActive = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(verticalAlignFromProps), 2), verticalAlign = _useState1[0], setVerticalAlign = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)(horizontalAlignFromProps), 2), horizontalAlign = _useState2[0], setHorizontalAlign = _useState2[1];
    var setPosition = (0, _react.useCallback)(function(param) {
        var _param_horizontal = param.horizontal, horizontal = _param_horizontal === void 0 ? false : _param_horizontal, _param_vertical = param.vertical, vertical = _param_vertical === void 0 ? false : _param_vertical;
        if (contentRef.current) {
            var _boundingRef;
            var bounds = contentRef.current.getBoundingClientRect();
            var contentLeftPos = bounds.left, contentRightPos = bounds.right, contentTopPos = bounds.top, contentBottomPos = bounds.bottom;
            var boundingTopPos = 100;
            var boundingRightPos = window.innerWidth;
            var boundingBottomPos = window.innerHeight;
            var boundingLeftPos = 0;
            if ((_boundingRef = boundingRef) === null || _boundingRef === void 0 ? void 0 : _boundingRef.current) {
                var ref;
                ref = boundingRef.current.getBoundingClientRect(), boundingTopPos = ref.top, boundingRightPos = ref.right, boundingBottomPos = ref.bottom, boundingLeftPos = ref.left, ref;
            }
            if (horizontal) {
                if (contentRightPos > boundingRightPos && contentLeftPos > boundingLeftPos) {
                    setHorizontalAlign("right");
                } else if (contentLeftPos < boundingLeftPos && contentRightPos < boundingRightPos) {
                    setHorizontalAlign("left");
                }
            }
            if (vertical) {
                if (contentTopPos < boundingTopPos && contentBottomPos < boundingBottomPos) {
                    setVerticalAlign("bottom");
                } else if (contentBottomPos > boundingBottomPos && contentTopPos > boundingTopPos) {
                    setVerticalAlign("top");
                }
            }
        }
    }, [
        boundingRef
    ]);
    var handleClickOutside = (0, _react.useCallback)(function(e) {
        if (contentRef.current.contains(e.target)) {
            return;
        }
        setActive(false);
    }, [
        contentRef
    ]);
    (0, _react.useEffect)(function() {
        setPosition({
            horizontal: true
        });
    }, [
        intersectionEntry,
        setPosition,
        windowWidth
    ]);
    (0, _react.useEffect)(function() {
        setPosition({
            vertical: true
        });
    }, [
        intersectionEntry,
        setPosition,
        windowHeight
    ]);
    (0, _react.useEffect)(function() {
        if (typeof onToggleOpen === "function") onToggleOpen(active);
        if (active) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return function() {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        active,
        handleClickOutside,
        onToggleOpen
    ]);
    (0, _react.useEffect)(function() {
        setActive(forceOpen);
    }, [
        forceOpen
    ]);
    var classes = [
        baseClass,
        className,
        "".concat(baseClass, "--size-").concat(size),
        "".concat(baseClass, "--color-").concat(color),
        "".concat(baseClass, "--v-align-").concat(verticalAlign),
        "".concat(baseClass, "--h-align-").concat(horizontalAlign),
        active && "".concat(baseClass, "--active"),
        showScrollbar && "".concat(baseClass, "--show-scrollbar")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement("div", {
        ref: buttonRef,
        className: "".concat(baseClass, "__wrapper")
    }, showOnHover ? /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__on-hover-watch"),
        onMouseEnter: function() {
            return setActive(true);
        },
        onMouseLeave: function() {
            return setActive(false);
        }
    }, /*#__PURE__*/ _react.default.createElement(_PopupButton.default, {
        className: buttonClassName,
        buttonType: buttonType,
        button: button,
        setActive: setActive,
        active: active
    })) : /*#__PURE__*/ _react.default.createElement(_PopupButton.default, {
        className: buttonClassName,
        buttonType: buttonType,
        button: button,
        setActive: setActive,
        active: active
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__content"),
        ref: contentRef
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap"),
        ref: intersectionRef
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__scroll"),
        style: {
            padding: padding
        }
    }, render && render({
        close: function() {
            return setActive(false);
        }
    }), children && children))));
};
var _default = Popup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BvcHVwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVdpbmRvd0luZm8gfSBmcm9tICdAZmFjZWxlc3MtdWkvd2luZG93LWluZm8nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBQb3B1cEJ1dHRvbiBmcm9tICcuL1BvcHVwQnV0dG9uJztcbmltcG9ydCB1c2VJbnRlcnNlY3QgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlSW50ZXJzZWN0JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncG9wdXAnO1xuXG5jb25zdCBQb3B1cDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgYnV0dG9uQ2xhc3NOYW1lLFxuICAgIHJlbmRlcixcbiAgICBzaXplID0gJ3NtYWxsJyxcbiAgICBjb2xvciA9ICdsaWdodCcsXG4gICAgYnV0dG9uLFxuICAgIGJ1dHRvblR5cGUgPSAnZGVmYXVsdCcsXG4gICAgY2hpbGRyZW4sXG4gICAgc2hvd09uSG92ZXIgPSBmYWxzZSxcbiAgICBob3Jpem9udGFsQWxpZ246IGhvcml6b250YWxBbGlnbkZyb21Qcm9wcyA9ICdsZWZ0JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiB2ZXJ0aWNhbEFsaWduRnJvbVByb3BzID0gJ3RvcCcsXG4gICAgaW5pdEFjdGl2ZSA9IGZhbHNlLFxuICAgIG9uVG9nZ2xlT3BlbixcbiAgICBwYWRkaW5nLFxuICAgIGZvcmNlT3BlbixcbiAgICBib3VuZGluZ1JlZixcbiAgICBzaG93U2Nyb2xsYmFyID0gZmFsc2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHdpZHRoOiB3aW5kb3dXaWR0aCwgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgfSA9IHVzZVdpbmRvd0luZm8oKTtcbiAgY29uc3QgW2ludGVyc2VjdGlvblJlZiwgaW50ZXJzZWN0aW9uRW50cnldID0gdXNlSW50ZXJzZWN0KHtcbiAgICB0aHJlc2hvbGQ6IDEsXG4gICAgcm9vdE1hcmdpbjogJy0xMDBweCAwcHggMHB4IDBweCcsXG4gICAgcm9vdDogYm91bmRpbmdSZWY/LmN1cnJlbnQgfHwgbnVsbCxcbiAgfSk7XG5cbiAgY29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBjb250ZW50UmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoaW5pdEFjdGl2ZSk7XG4gIGNvbnN0IFt2ZXJ0aWNhbEFsaWduLCBzZXRWZXJ0aWNhbEFsaWduXSA9IHVzZVN0YXRlKHZlcnRpY2FsQWxpZ25Gcm9tUHJvcHMpO1xuICBjb25zdCBbaG9yaXpvbnRhbEFsaWduLCBzZXRIb3Jpem9udGFsQWxpZ25dID0gdXNlU3RhdGUoaG9yaXpvbnRhbEFsaWduRnJvbVByb3BzKTtcblxuICBjb25zdCBzZXRQb3NpdGlvbiA9IHVzZUNhbGxiYWNrKCh7IGhvcml6b250YWwgPSBmYWxzZSwgdmVydGljYWwgPSBmYWxzZSB9KSA9PiB7XG4gICAgaWYgKGNvbnRlbnRSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgYm91bmRzID0gY29udGVudFJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGxlZnQ6IGNvbnRlbnRMZWZ0UG9zLFxuICAgICAgICByaWdodDogY29udGVudFJpZ2h0UG9zLFxuICAgICAgICB0b3A6IGNvbnRlbnRUb3BQb3MsXG4gICAgICAgIGJvdHRvbTogY29udGVudEJvdHRvbVBvcyxcbiAgICAgIH0gPSBib3VuZHM7XG5cbiAgICAgIGxldCBib3VuZGluZ1RvcFBvcyA9IDEwMDtcbiAgICAgIGxldCBib3VuZGluZ1JpZ2h0UG9zID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBsZXQgYm91bmRpbmdCb3R0b21Qb3MgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBsZXQgYm91bmRpbmdMZWZ0UG9zID0gMDtcblxuICAgICAgaWYgKGJvdW5kaW5nUmVmPy5jdXJyZW50KSB7XG4gICAgICAgICh7XG4gICAgICAgICAgdG9wOiBib3VuZGluZ1RvcFBvcyxcbiAgICAgICAgICByaWdodDogYm91bmRpbmdSaWdodFBvcyxcbiAgICAgICAgICBib3R0b206IGJvdW5kaW5nQm90dG9tUG9zLFxuICAgICAgICAgIGxlZnQ6IGJvdW5kaW5nTGVmdFBvcyxcbiAgICAgICAgfSA9IGJvdW5kaW5nUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICBpZiAoY29udGVudFJpZ2h0UG9zID4gYm91bmRpbmdSaWdodFBvcyAmJiBjb250ZW50TGVmdFBvcyA+IGJvdW5kaW5nTGVmdFBvcykge1xuICAgICAgICAgIHNldEhvcml6b250YWxBbGlnbigncmlnaHQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZW50TGVmdFBvcyA8IGJvdW5kaW5nTGVmdFBvcyAmJiBjb250ZW50UmlnaHRQb3MgPCBib3VuZGluZ1JpZ2h0UG9zKSB7XG4gICAgICAgICAgc2V0SG9yaXpvbnRhbEFsaWduKCdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIGlmIChjb250ZW50VG9wUG9zIDwgYm91bmRpbmdUb3BQb3MgJiYgY29udGVudEJvdHRvbVBvcyA8IGJvdW5kaW5nQm90dG9tUG9zKSB7XG4gICAgICAgICAgc2V0VmVydGljYWxBbGlnbignYm90dG9tJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29udGVudEJvdHRvbVBvcyA+IGJvdW5kaW5nQm90dG9tUG9zICYmIGNvbnRlbnRUb3BQb3MgPiBib3VuZGluZ1RvcFBvcykge1xuICAgICAgICAgIHNldFZlcnRpY2FsQWxpZ24oJ3RvcCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbYm91bmRpbmdSZWZdKTtcblxuICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGlmIChjb250ZW50UmVmLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlKGZhbHNlKTtcbiAgfSwgW2NvbnRlbnRSZWZdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKHsgaG9yaXpvbnRhbDogdHJ1ZSB9KTtcbiAgfSwgW2ludGVyc2VjdGlvbkVudHJ5LCBzZXRQb3NpdGlvbiwgd2luZG93V2lkdGhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBvc2l0aW9uKHsgdmVydGljYWw6IHRydWUgfSk7XG4gIH0sIFtpbnRlcnNlY3Rpb25FbnRyeSwgc2V0UG9zaXRpb24sIHdpbmRvd0hlaWdodF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvblRvZ2dsZU9wZW4gPT09ICdmdW5jdGlvbicpIG9uVG9nZ2xlT3BlbihhY3RpdmUpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbYWN0aXZlLCBoYW5kbGVDbGlja091dHNpZGUsIG9uVG9nZ2xlT3Blbl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0QWN0aXZlKGZvcmNlT3Blbik7XG4gIH0sIFtmb3JjZU9wZW5dKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7YmFzZUNsYXNzfS0tc2l6ZS0ke3NpemV9YCxcbiAgICBgJHtiYXNlQ2xhc3N9LS1jb2xvci0ke2NvbG9yfWAsXG4gICAgYCR7YmFzZUNsYXNzfS0tdi1hbGlnbi0ke3ZlcnRpY2FsQWxpZ259YCxcbiAgICBgJHtiYXNlQ2xhc3N9LS1oLWFsaWduLSR7aG9yaXpvbnRhbEFsaWdufWAsXG4gICAgYWN0aXZlICYmIGAke2Jhc2VDbGFzc30tLWFjdGl2ZWAsXG4gICAgc2hvd1Njcm9sbGJhciAmJiBgJHtiYXNlQ2xhc3N9LS1zaG93LXNjcm9sbGJhcmAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17YnV0dG9uUmVmfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBwZXJgfVxuICAgICAgPlxuICAgICAgICB7c2hvd09uSG92ZXJcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19vbi1ob3Zlci13YXRjaGB9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0QWN0aXZlKHRydWUpfVxuICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQb3B1cEJ1dHRvbiB7Li4ueyBjbGFzc05hbWU6IGJ1dHRvbkNsYXNzTmFtZSwgYnV0dG9uVHlwZSwgYnV0dG9uLCBzZXRBY3RpdmUsIGFjdGl2ZSB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPFBvcHVwQnV0dG9uIHsuLi57IGNsYXNzTmFtZTogYnV0dG9uQ2xhc3NOYW1lLCBidXR0b25UeXBlLCBidXR0b24sIHNldEFjdGl2ZSwgYWN0aXZlIH19IC8+XG4gICAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9XG4gICAgICAgIHJlZj17Y29udGVudFJlZn1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9XG4gICAgICAgICAgcmVmPXtpbnRlcnNlY3Rpb25SZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3Njcm9sbGB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwYWRkaW5nLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cmVuZGVyICYmIHJlbmRlcih7IGNsb3NlOiAoKSA9PiBzZXRBY3RpdmUoZmFsc2UpIH0pfVxuICAgICAgICAgICAge2NoaWxkcmVuICYmIGNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiUG9wdXAiLCJwcm9wcyIsImJvdW5kaW5nUmVmIiwiY2xhc3NOYW1lIiwiYnV0dG9uQ2xhc3NOYW1lIiwicmVuZGVyIiwic2l6ZSIsImNvbG9yIiwiYnV0dG9uIiwiYnV0dG9uVHlwZSIsImNoaWxkcmVuIiwic2hvd09uSG92ZXIiLCJob3Jpem9udGFsQWxpZ25Gcm9tUHJvcHMiLCJob3Jpem9udGFsQWxpZ24iLCJ2ZXJ0aWNhbEFsaWduRnJvbVByb3BzIiwidmVydGljYWxBbGlnbiIsImluaXRBY3RpdmUiLCJvblRvZ2dsZU9wZW4iLCJwYWRkaW5nIiwiZm9yY2VPcGVuIiwic2hvd1Njcm9sbGJhciIsInVzZVdpbmRvd0luZm8iLCJ3aWR0aCIsIndpbmRvd1dpZHRoIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0IiwidXNlSW50ZXJzZWN0IiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsInJvb3QiLCJjdXJyZW50IiwiaW50ZXJzZWN0aW9uUmVmIiwiaW50ZXJzZWN0aW9uRW50cnkiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJjb250ZW50UmVmIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJzZXRWZXJ0aWNhbEFsaWduIiwic2V0SG9yaXpvbnRhbEFsaWduIiwic2V0UG9zaXRpb24iLCJ1c2VDYWxsYmFjayIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJjb250ZW50TGVmdFBvcyIsInJpZ2h0IiwiY29udGVudFJpZ2h0UG9zIiwidG9wIiwiY29udGVudFRvcFBvcyIsImJvdHRvbSIsImNvbnRlbnRCb3R0b21Qb3MiLCJib3VuZGluZ1RvcFBvcyIsImJvdW5kaW5nUmlnaHRQb3MiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYm91bmRpbmdCb3R0b21Qb3MiLCJpbm5lckhlaWdodCIsImJvdW5kaW5nTGVmdFBvcyIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImUiLCJjb250YWlucyIsInRhcmdldCIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJyZWYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJQb3B1cEJ1dHRvbiIsInN0eWxlIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0xBOzs7ZUFBQTs7OzZEQWxMZ0U7MEJBQ2xDO2tFQUVOO21FQUNDO1FBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxRQUF5QixTQUFDQztRQXlCdEJDO0lBeEJSLElBQ0VDLFlBaUJFRixNQWpCRkUsV0FDQUMsa0JBZ0JFSCxNQWhCRkcsaUJBQ0FDLFNBZUVKLE1BZkZJLHNCQWVFSixNQWRGSyxNQUFBQSxnQ0FBTyxzQ0FjTEwsTUFiRk0sT0FBQUEsa0NBQVEsd0JBQ1JDLFNBWUVQLE1BWkZPLDRCQVlFUCxNQVhGUSxZQUFBQSw0Q0FBYSwrQkFDYkMsV0FVRVQsTUFWRlMsK0JBVUVULE1BVEZVLGFBQUFBLDhDQUFjLDRCQUNHQyxNQVFmWCxNQVJGWSxpQkFBaUJELDJCQUFBQSxpQkFBMkIsU0FBM0JBLEtBQ0ZFLE9BT2JiLE1BUEZjLGVBQWVELHlCQUFBQSxrQkFBeUIsUUFBekJBLDBCQU9iYixNQU5GZSxZQUFBQSw0Q0FBYSwyQkFDYkMsZUFLRWhCLE1BTEZnQixjQUNBQyxVQUlFakIsTUFKRmlCLFNBQ0FDLFlBR0VsQixNQUhGa0IsV0FDQWpCLGNBRUVELE1BRkZDLG9DQUVFRCxNQURGbUIsZUFBQUEsa0RBQWdCO0lBR2xCLElBQXFEQyxpQkFBQUEsSUFBQUEseUJBQWEsS0FBMURDLEFBQU9DLGNBQXNDRixlQUE3Q0MsT0FBb0JFLEFBQVFDLGVBQWlCSixlQUF6Qkc7SUFDNUIsSUFBNkNFLGtDQUFBQSxJQUFBQSxxQkFBWSxFQUFDO1FBQ3hEQyxXQUFXO1FBQ1hDLFlBQVk7UUFDWkMsTUFBTTNCLEVBQUFBLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYTRC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