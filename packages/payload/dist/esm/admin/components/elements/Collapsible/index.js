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
import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { useTranslation } from "react-i18next";
import { CollapsibleProvider, useCollapsible } from "./provider";
import Chevron from "../../icons/Chevron";
import DragHandle from "../../icons/Drag";
import "./index.scss";
var baseClass = "collapsible";
export var Collapsible = function(param) {
    var children = param.children, collapsedFromProps = param.collapsed, onToggle = param.onToggle, className = param.className, header = param.header, initCollapsed = param.initCollapsed, dragHandleProps = param.dragHandleProps, actions = param.actions, _param_collapsibleStyle = param.collapsibleStyle, collapsibleStyle = _param_collapsibleStyle === void 0 ? "default" : _param_collapsibleStyle;
    var _useState = _sliced_to_array(useState(Boolean(initCollapsed)), 2), collapsedLocal = _useState[0], setCollapsedLocal = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), hoveringToggle = _useState1[0], setHoveringToggle = _useState1[1];
    var isNested = useCollapsible();
    var t = useTranslation("fields").t;
    var collapsed = typeof collapsedFromProps === "boolean" ? collapsedFromProps : collapsedLocal;
    return /*#__PURE__*/ React.createElement("div", {
        className: [
            baseClass,
            className,
            dragHandleProps && "".concat(baseClass, "--has-drag-handle"),
            collapsed && "".concat(baseClass, "--collapsed"),
            isNested && "".concat(baseClass, "--nested"),
            hoveringToggle && "".concat(baseClass, "--hovered"),
            "".concat(baseClass, "--style-").concat(collapsibleStyle)
        ].filter(Boolean).join(" ")
    }, /*#__PURE__*/ React.createElement(CollapsibleProvider, null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__toggle-wrap"),
        onMouseEnter: function() {
            return setHoveringToggle(true);
        },
        onMouseLeave: function() {
            return setHoveringToggle(false);
        }
    }, dragHandleProps && /*#__PURE__*/ React.createElement("div", _object_spread({
        className: "".concat(baseClass, "__drag")
    }, dragHandleProps.attributes, dragHandleProps.listeners), /*#__PURE__*/ React.createElement(DragHandle, null)), /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: [
            "".concat(baseClass, "__toggle"),
            "".concat(baseClass, "__toggle--").concat(collapsed ? "collapsed" : "open")
        ].filter(Boolean).join(" "),
        onClick: function() {
            if (typeof onToggle === "function") onToggle(!collapsed);
            setCollapsedLocal(!collapsed);
        }
    }, /*#__PURE__*/ React.createElement("span", null, t("toggleBlock"))), header && /*#__PURE__*/ React.createElement("div", {
        className: [
            "".concat(baseClass, "__header-wrap"),
            dragHandleProps && "".concat(baseClass, "__header-wrap--has-drag-handle")
        ].filter(Boolean).join(" ")
    }, header && header), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__actions-wrap")
    }, actions && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, actions), /*#__PURE__*/ React.createElement(Chevron, {
        className: "".concat(baseClass, "__indicator")
    }))), /*#__PURE__*/ React.createElement(AnimateHeight, {
        height: collapsed ? 0 : "auto",
        duration: 200
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__content")
    }, children))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvbGxhcHNpYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0ZUhlaWdodCBmcm9tICdyZWFjdC1hbmltYXRlLWhlaWdodCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IENvbGxhcHNpYmxlUHJvdmlkZXIsIHVzZUNvbGxhcHNpYmxlIH0gZnJvbSAnLi9wcm92aWRlcic7XG5pbXBvcnQgQ2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJztcbmltcG9ydCBEcmFnSGFuZGxlIGZyb20gJy4uLy4uL2ljb25zL0RyYWcnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb2xsYXBzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzaWJsZTogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNvbGxhcHNlZDogY29sbGFwc2VkRnJvbVByb3BzLFxuICBvblRvZ2dsZSxcbiAgY2xhc3NOYW1lLFxuICBoZWFkZXIsXG4gIGluaXRDb2xsYXBzZWQsXG4gIGRyYWdIYW5kbGVQcm9wcyxcbiAgYWN0aW9ucyxcbiAgY29sbGFwc2libGVTdHlsZSA9ICdkZWZhdWx0Jyxcbn0pID0+IHtcbiAgY29uc3QgW2NvbGxhcHNlZExvY2FsLCBzZXRDb2xsYXBzZWRMb2NhbF0gPSB1c2VTdGF0ZShCb29sZWFuKGluaXRDb2xsYXBzZWQpKTtcbiAgY29uc3QgW2hvdmVyaW5nVG9nZ2xlLCBzZXRIb3ZlcmluZ1RvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlzTmVzdGVkID0gdXNlQ29sbGFwc2libGUoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZmllbGRzJyk7XG5cbiAgY29uc3QgY29sbGFwc2VkID0gdHlwZW9mIGNvbGxhcHNlZEZyb21Qcm9wcyA9PT0gJ2Jvb2xlYW4nID8gY29sbGFwc2VkRnJvbVByb3BzIDogY29sbGFwc2VkTG9jYWw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17W1xuICAgICAgYmFzZUNsYXNzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZHJhZ0hhbmRsZVByb3BzICYmIGAke2Jhc2VDbGFzc30tLWhhcy1kcmFnLWhhbmRsZWAsXG4gICAgICBjb2xsYXBzZWQgJiYgYCR7YmFzZUNsYXNzfS0tY29sbGFwc2VkYCxcbiAgICAgIGlzTmVzdGVkICYmIGAke2Jhc2VDbGFzc30tLW5lc3RlZGAsXG4gICAgICBob3ZlcmluZ1RvZ2dsZSAmJiBgJHtiYXNlQ2xhc3N9LS1ob3ZlcmVkYCxcbiAgICAgIGAke2Jhc2VDbGFzc30tLXN0eWxlLSR7Y29sbGFwc2libGVTdHlsZX1gLFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICA8Q29sbGFwc2libGVQcm92aWRlcj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9nZ2xlLXdyYXBgfVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJpbmdUb2dnbGUodHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmluZ1RvZ2dsZShmYWxzZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7ZHJhZ0hhbmRsZVByb3BzICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kcmFnYH1cbiAgICAgICAgICAgICAgey4uLmRyYWdIYW5kbGVQcm9wcy5hdHRyaWJ1dGVzfVxuICAgICAgICAgICAgICB7Li4uZHJhZ0hhbmRsZVByb3BzLmxpc3RlbmVyc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPERyYWdIYW5kbGUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlYCxcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fdG9nZ2xlLS0ke2NvbGxhcHNlZCA/ICdjb2xsYXBzZWQnIDogJ29wZW4nfWAsXG4gICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25Ub2dnbGUgPT09ICdmdW5jdGlvbicpIG9uVG9nZ2xlKCFjb2xsYXBzZWQpO1xuICAgICAgICAgICAgICBzZXRDb2xsYXBzZWRMb2NhbCghY29sbGFwc2VkKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIHt0KCd0b2dnbGVCbG9jaycpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtoZWFkZXIgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9faGVhZGVyLXdyYXBgLFxuICAgICAgICAgICAgICBkcmFnSGFuZGxlUHJvcHMgJiYgYCR7YmFzZUNsYXNzfV9faGVhZGVyLXdyYXAtLWhhcy1kcmFnLWhhbmRsZWAsXG4gICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWN0aW9ucy13cmFwYH0+XG4gICAgICAgICAgICB7YWN0aW9ucyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25zYH0+XG4gICAgICAgICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDaGV2cm9uIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW5kaWNhdG9yYH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgICAgaGVpZ2h0PXtjb2xsYXBzZWQgPyAwIDogJ2F1dG8nfVxuICAgICAgICAgIGR1cmF0aW9uPXsyMDB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0FuaW1hdGVIZWlnaHQ+XG4gICAgICA8L0NvbGxhcHNpYmxlUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBbmltYXRlSGVpZ2h0IiwidXNlVHJhbnNsYXRpb24iLCJDb2xsYXBzaWJsZVByb3ZpZGVyIiwidXNlQ29sbGFwc2libGUiLCJDaGV2cm9uIiwiRHJhZ0hhbmRsZSIsImJhc2VDbGFzcyIsIkNvbGxhcHNpYmxlIiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJjb2xsYXBzZWRGcm9tUHJvcHMiLCJvblRvZ2dsZSIsImNsYXNzTmFtZSIsImhlYWRlciIsImluaXRDb2xsYXBzZWQiLCJkcmFnSGFuZGxlUHJvcHMiLCJhY3Rpb25zIiwiY29sbGFwc2libGVTdHlsZSIsIkJvb2xlYW4iLCJjb2xsYXBzZWRMb2NhbCIsInNldENvbGxhcHNlZExvY2FsIiwiaG92ZXJpbmdUb2dnbGUiLCJzZXRIb3ZlcmluZ1RvZ2dsZSIsImlzTmVzdGVkIiwidCIsImRpdiIsImZpbHRlciIsImpvaW4iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJzcGFuIiwiaGVpZ2h0IiwiZHVyYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxRQUFRLFFBQVE7QUFDeEMsT0FBT0MsbUJBQW1CLHVCQUF1QjtBQUNqRCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBRS9DLFNBQVNDLG1CQUFtQixFQUFFQyxjQUFjLFFBQVEsYUFBYTtBQUNqRSxPQUFPQyxhQUFhLHNCQUFzQjtBQUMxQyxPQUFPQyxnQkFBZ0IsbUJBQW1CO0FBRTFDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLE9BQU8sSUFBTUMsY0FBK0I7UUFDMUNDLGlCQUFBQSxVQUNBQyxBQUFXQywyQkFBWEQsV0FDQUUsaUJBQUFBLFVBQ0FDLGtCQUFBQSxXQUNBQyxlQUFBQSxRQUNBQyxzQkFBQUEsZUFDQUMsd0JBQUFBLGlCQUNBQyxnQkFBQUEseUNBQ0FDLGtCQUFBQSx3REFBbUI7SUFFbkIsSUFBNENsQiw2QkFBQUEsU0FBU21CLFFBQVFKLHFCQUF0REssaUJBQXFDcEIsY0FBckJxQixvQkFBcUJyQjtJQUM1QyxJQUE0Q0EsOEJBQUFBLFNBQVMsWUFBOUNzQixpQkFBcUN0QixlQUFyQnVCLG9CQUFxQnZCO0lBQzVDLElBQU13QixXQUFXcEI7SUFDakIsSUFBTSxBQUFFcUIsSUFBTXZCLGVBQWUsVUFBckJ1QjtJQUVSLElBQU1mLFlBQVksT0FBT0MsdUJBQXVCLFlBQVlBLHFCQUFxQlM7SUFFakYscUJBQ0Usb0JBQUNNO1FBQUliLFdBQVc7WUFDZE47WUFDQU07WUFDQUcsbUJBQW1CLEFBQUMsR0FBWSxPQUFWVCxXQUFVO1lBQ2hDRyxhQUFhLEFBQUMsR0FBWSxPQUFWSCxXQUFVO1lBQzFCaUIsWUFBWSxBQUFDLEdBQVksT0FBVmpCLFdBQVU7WUFDekJlLGtCQUFrQixBQUFDLEdBQVksT0FBVmYsV0FBVTtZQUM5QixHQUFzQlcsT0FBcEJYLFdBQVUsWUFBMkIsT0FBakJXO1NBQ3hCLENBQUNTLE1BQU0sQ0FBQ1IsU0FBU1MsSUFBSSxDQUFDO3FCQUVyQixvQkFBQ3pCLHlDQUNDLG9CQUFDdUI7UUFDQ2IsV0FBVyxBQUFDLEdBQVksT0FBVk4sV0FBVTtRQUN4QnNCLGNBQWM7bUJBQU1OLGtCQUFrQjs7UUFDdENPLGNBQWM7bUJBQU1QLGtCQUFrQjs7T0FFckNQLGlDQUNDLG9CQUFDVTtRQUNDYixXQUFXLEFBQUMsR0FBWSxPQUFWTixXQUFVO09BQ3BCUyxnQkFBZ0JlLFVBQVUsRUFDMUJmLGdCQUFnQmdCLFNBQVMsaUJBRTdCLG9CQUFDMUIsa0NBR0wsb0JBQUMyQjtRQUNDQyxNQUFLO1FBQ0xyQixXQUFXO1lBQ1IsR0FBWSxPQUFWTixXQUFVO1lBQ1osR0FBd0JHLE9BQXRCSCxXQUFVLGNBQTZDLE9BQWpDRyxZQUFZLGNBQWM7U0FDcEQsQ0FBQ2lCLE1BQU0sQ0FBQ1IsU0FBU1MsSUFBSSxDQUFDO1FBQ3ZCTyxTQUFTO1lBQ1AsSUFBSSxPQUFPdkIsYUFBYSxZQUFZQSxTQUFTLENBQUNGO1lBQzlDVyxrQkFBa0IsQ0FBQ1g7UUFDckI7cUJBRUEsb0JBQUMwQixjQUNFWCxFQUFFLGtCQUdOWCx3QkFDQyxvQkFBQ1k7UUFBSWIsV0FBVztZQUNiLEdBQVksT0FBVk4sV0FBVTtZQUNiUyxtQkFBbUIsQUFBQyxHQUFZLE9BQVZULFdBQVU7U0FDakMsQ0FBQ29CLE1BQU0sQ0FBQ1IsU0FBU1MsSUFBSSxDQUFDO09BRXBCZCxVQUFVQSx1QkFHZixvQkFBQ1k7UUFBSWIsV0FBVyxBQUFDLEdBQVksT0FBVk4sV0FBVTtPQUMxQlUseUJBQ0Msb0JBQUNTO1FBQUliLFdBQVcsQUFBQyxHQUFZLE9BQVZOLFdBQVU7T0FDMUJVLHdCQUdMLG9CQUFDWjtRQUFRUSxXQUFXLEFBQUMsR0FBWSxPQUFWTixXQUFVO3dCQUdyQyxvQkFBQ047UUFDQ29DLFFBQVEzQixZQUFZLElBQUk7UUFDeEI0QixVQUFVO3FCQUVWLG9CQUFDWjtRQUFJYixXQUFXLEFBQUMsR0FBWSxPQUFWTixXQUFVO09BQzFCRTtBQU1iLEVBQUUifQ==