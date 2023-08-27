import React, { forwardRef } from "react";
import "./index.scss";
var baseClass = "gutter";
export var Gutter = /*#__PURE__*/ forwardRef(function(props, ref) {
    var _props_left = props.left, left = _props_left === void 0 ? true : _props_left, _props_right = props.right, right = _props_right === void 0 ? true : _props_right, _props_negativeLeft = props.negativeLeft, negativeLeft = _props_negativeLeft === void 0 ? false : _props_negativeLeft, _props_negativeRight = props.negativeRight, negativeRight = _props_negativeRight === void 0 ? false : _props_negativeRight, className = props.className, children = props.children;
    var shouldPadLeft = left && !negativeLeft;
    var shouldPadRight = right && !negativeRight;
    return /*#__PURE__*/ React.createElement("div", {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0d1dHRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIFJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxudHlwZSBQcm9wcyA9IHtcbiAgbGVmdD86IGJvb2xlYW5cbiAgcmlnaHQ/OiBib29sZWFuXG4gIG5lZ2F0aXZlTGVmdD86IGJvb2xlYW5cbiAgbmVnYXRpdmVSaWdodD86IGJvb2xlYW5cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgcmVmPzogUmVmPEhUTUxEaXZFbGVtZW50PlxufVxuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZ3V0dGVyJztcblxuZXhwb3J0IGNvbnN0IEd1dHRlcjogUmVhY3QuRkM8UHJvcHM+ID0gZm9yd2FyZFJlZjxIVE1MRGl2RWxlbWVudCwgUHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsZWZ0ID0gdHJ1ZSxcbiAgICByaWdodCA9IHRydWUsXG4gICAgbmVnYXRpdmVMZWZ0ID0gZmFsc2UsXG4gICAgbmVnYXRpdmVSaWdodCA9IGZhbHNlLFxuICAgIGNsYXNzTmFtZSxcbiAgICBjaGlsZHJlbixcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHNob3VsZFBhZExlZnQgPSBsZWZ0ICYmICFuZWdhdGl2ZUxlZnQ7XG4gIGNvbnN0IHNob3VsZFBhZFJpZ2h0ID0gcmlnaHQgJiYgIW5lZ2F0aXZlUmlnaHQ7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e3JlZn1cbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBzaG91bGRQYWRMZWZ0ICYmIGAke2Jhc2VDbGFzc30tLWxlZnRgLFxuICAgICAgICBzaG91bGRQYWRSaWdodCAmJiBgJHtiYXNlQ2xhc3N9LS1yaWdodGAsXG4gICAgICAgIG5lZ2F0aXZlTGVmdCAmJiBgJHtiYXNlQ2xhc3N9LS1uZWdhdGl2ZS1sZWZ0YCxcbiAgICAgICAgbmVnYXRpdmVSaWdodCAmJiBgJHtiYXNlQ2xhc3N9LS1uZWdhdGl2ZS1yaWdodGAsXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59KTtcblxuXG5HdXR0ZXIuZGlzcGxheU5hbWUgPSAnR3V0dGVyJztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJiYXNlQ2xhc3MiLCJHdXR0ZXIiLCJwcm9wcyIsInJlZiIsImxlZnQiLCJyaWdodCIsIm5lZ2F0aXZlTGVmdCIsIm5lZ2F0aXZlUmlnaHQiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInNob3VsZFBhZExlZnQiLCJzaG91bGRQYWRSaWdodCIsImRpdiIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVNDLFVBQVUsUUFBYSxRQUFRO0FBQy9DLE9BQU8sZUFBZTtBQVl0QixJQUFNQyxZQUFZO0FBRWxCLE9BQU8sSUFBTUMsdUJBQTBCRixXQUFrQyxTQUFDRyxPQUFPQztJQUMvRSxrQkFPSUQsTUFORkUsTUFBQUEsZ0NBQU8sbUNBTUxGLE1BTEZHLE9BQUFBLGtDQUFRLDJDQUtOSCxNQUpGSSxjQUFBQSxnREFBZSxvREFJYkosTUFIRkssZUFBQUEsa0RBQWdCLDhCQUNoQkMsWUFFRU4sTUFGRk0sV0FDQUMsV0FDRVAsTUFERk87SUFHRixJQUFNQyxnQkFBZ0JOLFFBQVEsQ0FBQ0U7SUFDL0IsSUFBTUssaUJBQWlCTixTQUFTLENBQUNFO0lBRWpDLHFCQUNFLG9CQUFDSztRQUNDVCxLQUFLQTtRQUNMSyxXQUFXO1lBQ1RFLGlCQUFpQixBQUFDLEdBQVksT0FBVlYsV0FBVTtZQUM5Qlcsa0JBQWtCLEFBQUMsR0FBWSxPQUFWWCxXQUFVO1lBQy9CTSxnQkFBZ0IsQUFBQyxHQUFZLE9BQVZOLFdBQVU7WUFDN0JPLGlCQUFpQixBQUFDLEdBQVksT0FBVlAsV0FBVTtZQUM5QlE7U0FDRCxDQUFDSyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztPQUV0Qk47QUFHUCxHQUFHO0FBR0hSLE9BQU9lLFdBQVcsR0FBRyJ9