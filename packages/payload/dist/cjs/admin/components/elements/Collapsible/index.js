"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Collapsible", {
    enumerable: true,
    get: function() {
        return Collapsible;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reactanimateheight = /*#__PURE__*/ _interop_require_default(require("react-animate-height"));
var _reacti18next = require("react-i18next");
var _provider = require("./provider");
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _Drag = /*#__PURE__*/ _interop_require_default(require("../../icons/Drag"));
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
var baseClass = "collapsible";
var Collapsible = function(param) {
    var children = param.children, collapsedFromProps = param.collapsed, onToggle = param.onToggle, className = param.className, header = param.header, initCollapsed = param.initCollapsed, dragHandleProps = param.dragHandleProps, actions = param.actions, _param_collapsibleStyle = param.collapsibleStyle, collapsibleStyle = _param_collapsibleStyle === void 0 ? "default" : _param_collapsibleStyle;
    var _useState = _sliced_to_array((0, _react.useState)(Boolean(initCollapsed)), 2), collapsedLocal = _useState[0], setCollapsedLocal = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), hoveringToggle = _useState1[0], setHoveringToggle = _useState1[1];
    var isNested = (0, _provider.useCollapsible)();
    var t = (0, _reacti18next.useTranslation)("fields").t;
    var collapsed = typeof collapsedFromProps === "boolean" ? collapsedFromProps : collapsedLocal;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            className,
            dragHandleProps && "".concat(baseClass, "--has-drag-handle"),
            collapsed && "".concat(baseClass, "--collapsed"),
            isNested && "".concat(baseClass, "--nested"),
            hoveringToggle && "".concat(baseClass, "--hovered"),
            "".concat(baseClass, "--style-").concat(collapsibleStyle)
        ].filter(Boolean).join(" ")
    }, /*#__PURE__*/ _react.default.createElement(_provider.CollapsibleProvider, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__toggle-wrap"),
        onMouseEnter: function() {
            return setHoveringToggle(true);
        },
        onMouseLeave: function() {
            return setHoveringToggle(false);
        }
    }, dragHandleProps && /*#__PURE__*/ _react.default.createElement("div", _object_spread({
        className: "".concat(baseClass, "__drag")
    }, dragHandleProps.attributes, dragHandleProps.listeners), /*#__PURE__*/ _react.default.createElement(_Drag.default, null)), /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        className: [
            "".concat(baseClass, "__toggle"),
            "".concat(baseClass, "__toggle--").concat(collapsed ? "collapsed" : "open")
        ].filter(Boolean).join(" "),
        onClick: function() {
            if (typeof onToggle === "function") onToggle(!collapsed);
            setCollapsedLocal(!collapsed);
        }
    }, /*#__PURE__*/ _react.default.createElement("span", null, t("toggleBlock"))), header && /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            "".concat(baseClass, "__header-wrap"),
            dragHandleProps && "".concat(baseClass, "__header-wrap--has-drag-handle")
        ].filter(Boolean).join(" ")
    }, header && header), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__actions-wrap")
    }, actions && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, actions), /*#__PURE__*/ _react.default.createElement(_Chevron.default, {
        className: "".concat(baseClass, "__indicator")
    }))), /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        height: collapsed ? 0 : "auto",
        duration: 200
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__content")
    }, children))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvbGxhcHNpYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0ZUhlaWdodCBmcm9tICdyZWFjdC1hbmltYXRlLWhlaWdodCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENvbGxhcHNpYmxlUHJvdmlkZXIsIHVzZUNvbGxhcHNpYmxlIH0gZnJvbSAnLi9wcm92aWRlcic7XG5pbXBvcnQgQ2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJztcbmltcG9ydCBEcmFnSGFuZGxlIGZyb20gJy4uLy4uL2ljb25zL0RyYWcnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb2xsYXBzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzaWJsZTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNvbGxhcHNlZDogY29sbGFwc2VkRnJvbVByb3BzLFxuICBvblRvZ2dsZSxcbiAgY2xhc3NOYW1lLFxuICBoZWFkZXIsXG4gIGluaXRDb2xsYXBzZWQsXG4gIGRyYWdIYW5kbGVQcm9wcyxcbiAgYWN0aW9ucyxcbiAgY29sbGFwc2libGVTdHlsZSA9ICdkZWZhdWx0Jyxcbn0pID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZExvY2FsLCBzZXRDb2xsYXBzZWRMb2NhbF0gPSB1c2VTdGF0ZShCb29sZWFuKGluaXRDb2xsYXBzZWQpKTtcbiAgY29uc3QgW2hvdmVyaW5nVG9nZ2xlLCBzZXRIb3ZlcmluZ1RvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlzTmVzdGVkID0gdXNlQ29sbGFwc2libGUoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJyk7XG5cbiAgY29uc3QgY29sbGFwc2VkID0gdHlwZW9mIGNvbGxhcHNlZEZyb21Qcm9wcyA9PT0gJ2Jvb2xlYW4nID8gY29sbGFwc2VkRnJvbVByb3BzIDogY29sbGFwc2VkTG9jYWw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17W1xuICAgICAgYmFzZUNsYXNzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZHJhZ0hhbmRsZVByb3BzICYmIGAke2Jhc2VDbGFzc30tLWhhcy1kcmFnLWhhbmRsZWAsXG4gICAgICBjb2xsYXBzZWQgJiYgYCR7YmFzZUNsYXNzfS0tY29sbGFwc2VkYCxcbiAgICAgIGlzTmVzdGVkICYmIGAke2Jhc2VDbGFzc30tLW5lc3RlZGAsXG4gICAgICBob3ZlcmluZ1RvZ2dsZSAmJiBgJHtiYXNlQ2xhc3N9LS1ob3ZlcmVkYCxcbiAgICAgIGAke2Jhc2VDbGFzc30tLXN0eWxlLSR7Y29sbGFwc2libGVTdHlsZX1gLFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICA8Q29sbGFwc2libGVQcm92aWRlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9nZ2xlLXdyYXBgfVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJpbmdUb2dnbGUodHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmluZ1RvZ2dsZShmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJhZ0hhbmRsZVByb3BzICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kcmFnYH1cbiAgICAgICAgICAgICAgey4uLmRyYWdIYW5kbGVQcm9wcy5hdHRyaWJ1dGVzfVxuICAgICAgICAgICAgICB7Li4uZHJhZ0hhbmRsZVByb3BzLmxpc3RlbmVyc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERyYWdIYW5kbGUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlYCxcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlLS0ke2NvbGxhcHNlZCA/ICdjb2xsYXBzZWQnIDogJ29wZW4nfWAsXG4gICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25Ub2dnbGUgPT09ICdmdW5jdGlvbicpIG9uVG9nZ2xlKCFjb2xsYXBzZWQpO1xuICAgICAgICAgICAgICBzZXRDb2xsYXBzZWRMb2NhbCghY29sbGFwc2VkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHt0KCd0b2dnbGVCbG9jaycpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtoZWFkZXIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9faGVhZGVyLXdyYXBgLFxuICAgICAgICAgICAgICBkcmFnSGFuZGxlUHJvcHMgJiYgYCR7YmFzZUNsYXNzfV9faGVhZGVyLXdyYXAtLWhhcy1kcmFnLWhhbmRsZWAsXG4gICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9ucy13cmFwYH0+XG4gICAgICAgICAgICB7YWN0aW9ucyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25zYH0+XG4gICAgICAgICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDaGV2cm9uIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW5kaWNhdG9yYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgICAgaGVpZ2h0PXtjb2xsYXBzZWQgPyAwIDogJ2F1dG8nfVxuICAgICAgICAgIGR1cmF0aW9uPXsyMDB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0FuaW1hdGVIZWlnaHQ+XG4gICAgICA8L0NvbGxhcHNpYmxlUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkNvbGxhcHNpYmxlIiwiYmFzZUNsYXNzIiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJjb2xsYXBzZWRGcm9tUHJvcHMiLCJvblRvZ2dsZSIsImNsYXNzTmFtZSIsImhlYWRlciIsImluaXRDb2xsYXBzZWQiLCJkcmFnSGFuZGxlUHJvcHMiLCJhY3Rpb25zIiwiY29sbGFwc2libGVTdHlsZSIsInVzZVN0YXRlIiwiQm9vbGVhbiIsImNvbGxhcHNlZExvY2FsIiwic2V0Q29sbGFwc2VkTG9jYWwiLCJob3ZlcmluZ1RvZ2dsZSIsInNldEhvdmVyaW5nVG9nZ2xlIiwiaXNOZXN0ZWQiLCJ1c2VDb2xsYXBzaWJsZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImRpdiIsImZpbHRlciIsImpvaW4iLCJDb2xsYXBzaWJsZVByb3ZpZGVyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYXR0cmlidXRlcyIsImxpc3RlbmVycyIsIkRyYWdIYW5kbGUiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInNwYW4iLCJDaGV2cm9uIiwiQW5pbWF0ZUhlaWdodCIsImhlaWdodCIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQVlhQTs7O2VBQUFBOzs7NkRBWm1CO3lFQUNOOzRCQUNLO3dCQUVxQjs4REFDaEM7MkRBQ0c7UUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELGNBQStCO1FBQzFDRSxpQkFBQUEsVUFDQUMsQUFBV0MsMkJBQVhELFdBQ0FFLGlCQUFBQSxVQUNBQyxrQkFBQUEsV0FDQUMsZUFBQUEsUUFDQUMsc0JBQUFBLGVBQ0FDLHdCQUFBQSxpQkFDQUMsZ0JBQUFBLHlDQUNBQyxrQkFBQUEsd0RBQW1CO0lBRW5CLElBQTRDQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDQyxRQUFRTCxxQkFBdERNLGlCQUFxQ0YsY0FBckJHLG9CQUFxQkg7SUFDNUMsSUFBNENBLDhCQUFBQSxJQUFBQSxlQUFRLEVBQUMsWUFBOUNJLGlCQUFxQ0osZUFBckJLLG9CQUFxQkw7SUFDNUMsSUFBTU0sV0FBV0MsSUFBQUEsd0JBQWM7SUFDL0IsSUFBTSxBQUFFQyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFVBQXJCRDtJQUVSLElBQU1qQixZQUFZLE9BQU9DLHVCQUF1QixZQUFZQSxxQkFBcUJVO0lBRWpGLHFCQUNFLDZCQUFDUTtRQUFJaEIsV0FBVztZQUNkTDtZQUNBSztZQUNBRyxtQkFBbUIsQUFBQyxHQUFZLE9BQVZSLFdBQVU7WUFDaENFLGFBQWEsQUFBQyxHQUFZLE9BQVZGLFdBQVU7WUFDMUJpQixZQUFZLEFBQUMsR0FBWSxPQUFWakIsV0FBVTtZQUN6QmUsa0JBQWtCLEFBQUMsR0FBWSxPQUFWZixXQUFVO1lBQzlCLEdBQXNCVSxPQUFwQlYsV0FBVSxZQUEyQixPQUFqQlU7U0FDeEIsQ0FBQ1ksTUFBTSxDQUFDVixTQUFTVyxJQUFJLENBQUM7cUJBRXJCLDZCQUFDQyw2QkFBbUIsc0JBQ2xCLDZCQUFDSDtRQUNDaEIsV0FBVyxBQUFDLEdBQVksT0FBVkwsV0FBVTtRQUN4QnlCLGNBQWM7bUJBQU1ULGtCQUFrQjs7UUFDdENVLGNBQWM7bUJBQU1WLGtCQUFrQjs7T0FFckNSLGlDQUNDLDZCQUFDYTtRQUNDaEIsV0FBVyxBQUFDLEdBQVksT0FBVkwsV0FBVTtPQUNwQlEsZ0JBQWdCbUIsVUFBVSxFQUMxQm5CLGdCQUFnQm9CLFNBQVMsaUJBRTdCLDZCQUFDQyxhQUFVLHdCQUdmLDZCQUFDQztRQUNDQyxNQUFLO1FBQ0wxQixXQUFXO1lBQ1IsR0FBWSxPQUFWTCxXQUFVO1lBQ1osR0FBd0JFLE9BQXRCRixXQUFVLGNBQTZDLE9BQWpDRSxZQUFZLGNBQWM7U0FDcEQsQ0FBQ29CLE1BQU0sQ0FBQ1YsU0FBU1csSUFBSSxDQUFDO1FBQ3ZCUyxTQUFTO1lBQ1AsSUFBSSxPQUFPNUIsYUFBYSxZQUFZQSxTQUFTLENBQUNGO1lBQzlDWSxrQkFBa0IsQ0FBQ1o7UUFDckI7cUJBRUEsNkJBQUMrQixjQUNFZCxFQUFFLGtCQUdOYix3QkFDQyw2QkFBQ2U7UUFBSWhCLFdBQVc7WUFDYixHQUFZLE9BQVZMLFdBQVU7WUFDYlEsbUJBQW1CLEFBQUMsR0FBWSxPQUFWUixXQUFVO1NBQ2pDLENBQUNzQixNQUFNLENBQUNWLFNBQVNXLElBQUksQ0FBQztPQUVwQmpCLFVBQVVBLHVCQUdmLDZCQUFDZTtRQUFJaEIsV0FBVyxBQUFDLEdBQVksT0FBVkwsV0FBVTtPQUMxQlMseUJBQ0MsNkJBQUNZO1FBQUloQixXQUFXLEFBQUMsR0FBWSxPQUFWTCxXQUFVO09BQzFCUyx3QkFHTCw2QkFBQ3lCLGdCQUFPO1FBQUM3QixXQUFXLEFBQUMsR0FBWSxPQUFWTCxXQUFVO3dCQUdyQyw2QkFBQ21DLDJCQUFhO1FBQ1pDLFFBQVFsQyxZQUFZLElBQUk7UUFDeEJtQyxVQUFVO3FCQUVWLDZCQUFDaEI7UUFBSWhCLFdBQVcsQUFBQyxHQUFZLE9BQVZMLFdBQVU7T0FDMUJDO0FBTWIifQ==