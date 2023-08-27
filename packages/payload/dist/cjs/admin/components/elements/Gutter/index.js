"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Gutter", {
    enumerable: true,
    get: function() {
        return Gutter;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
require("./index.scss");
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
var baseClass = "gutter";
var Gutter = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    var _props_left = props.left, left = _props_left === void 0 ? true : _props_left, _props_right = props.right, right = _props_right === void 0 ? true : _props_right, _props_negativeLeft = props.negativeLeft, negativeLeft = _props_negativeLeft === void 0 ? false : _props_negativeLeft, _props_negativeRight = props.negativeRight, negativeRight = _props_negativeRight === void 0 ? false : _props_negativeRight, className = props.className, children = props.children;
    var shouldPadLeft = left && !negativeLeft;
    var shouldPadRight = right && !negativeRight;
    return /*#__PURE__*/ _react.default.createElement("div", {
        ref: ref,
        className: [
            shouldPadLeft && "".concat(baseClass, "--left"),
            shouldPadRight && "".concat(baseClass, "--right"),
            negativeLeft && "".concat(baseClass, "--negative-left"),
            negativeRight && "".concat(baseClass, "--negative-right"),
            className
        ].filter(Boolean).join(" ")
    }, children);
});
Gutter.displayName = "Gutter";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0d1dHRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgbGVmdD86IGJvb2xlYW5cbiAgcmlnaHQ/OiBib29sZWFuXG4gIG5lZ2F0aXZlTGVmdD86IGJvb2xlYW5cbiAgbmVnYXRpdmVSaWdodD86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgcmVmPzogUmVmPEhUTUxEaXZFbGVtZW50PlxufVxuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZ3V0dGVyJztcblxuZXhwb3J0IGNvbnN0IEd1dHRlcjogUmVhY3QuRkM8UHJvcHM+ID0gZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgUHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsZWZ0ID0gdHJ1ZSxcbiAgICByaWdodCA9IHRydWUsXG4gICAgbmVnYXRpdmVMZWZ0ID0gZmFsc2UsXG4gICAgbmVnYXRpdmVSaWdodCA9IGZhbHNlLFxuICAgIGNsYXNzTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHNob3VsZFBhZExlZnQgPSBsZWZ0ICYmICFuZWdhdGl2ZUxlZnQ7XG4gIGNvbnN0IHNob3VsZFBhZFJpZ2h0ID0gcmlnaHQgJiYgIW5lZ2F0aXZlUmlnaHQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBzaG91bGRQYWRMZWZ0ICYmIGAke2Jhc2VDbGFzc30tLWxlZnRgLFxuICAgICAgICBzaG91bGRQYWRSaWdodCAmJiBgJHtiYXNlQ2xhc3N9LS1yaWdodGAsXG4gICAgICAgIG5lZ2F0aXZlTGVmdCAmJiBgJHtiYXNlQ2xhc3N9LS1uZWdhdGl2ZS1sZWZ0YCxcbiAgICAgICAgbmVnYXRpdmVSaWdodCAmJiBgJHtiYXNlQ2xhc3N9LS1uZWdhdGl2ZS1yaWdodGAsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuXG5HdXR0ZXIuZGlzcGxheU5hbWUgPSAnR3V0dGVyJztcbiJdLCJuYW1lcyI6WyJHdXR0ZXIiLCJiYXNlQ2xhc3MiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJsZWZ0IiwicmlnaHQiLCJuZWdhdGl2ZUxlZnQiLCJuZWdhdGl2ZVJpZ2h0IiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJzaG91bGRQYWRMZWZ0Iiwic2hvdWxkUGFkUmlnaHQiLCJkaXYiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7OytCQWVhQTs7O2VBQUFBOzs7NkRBZjBCO1FBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELHVCQUEwQkUsSUFBQUEsaUJBQVUsRUFBd0IsU0FBQ0MsT0FBT0M7SUFDL0Usa0JBT0lELE1BTkZFLE1BQUFBLGdDQUFPLG1DQU1MRixNQUxGRyxPQUFBQSxrQ0FBUSwyQ0FLTkgsTUFKRkksY0FBQUEsZ0RBQWUsb0RBSWJKLE1BSEZLLGVBQUFBLGtEQUFnQiw4QkFDaEJDLFlBRUVOLE1BRkZNLFdBQ0FDLFdBQ0VQLE1BREZPO0lBR0YsSUFBTUMsZ0JBQWdCTixRQUFRLENBQUNFO0lBQy9CLElBQU1LLGlCQUFpQk4sU0FBUyxDQUFDRTtJQUVqQyxxQkFDRSw2QkFBQ0s7UUFDQ1QsS0FBS0E7UUFDTEssV0FBVztZQUNURSxpQkFBaUIsQUFBQyxHQUFZLE9BQVZWLFdBQVU7WUFDOUJXLGtCQUFrQixBQUFDLEdBQVksT0FBVlgsV0FBVTtZQUMvQk0sZ0JBQWdCLEFBQUMsR0FBWSxPQUFWTixXQUFVO1lBQzdCTyxpQkFBaUIsQUFBQyxHQUFZLE9BQVZQLFdBQVU7WUFDOUJRO1NBQ0QsQ0FBQ0ssTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7T0FFdEJOO0FBR1A7QUFHQVYsT0FBT2lCLFdBQVcsR0FBRyJ9