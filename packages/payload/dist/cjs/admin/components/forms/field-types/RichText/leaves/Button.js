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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _slatereact = require("slate-react");
var _isActive = /*#__PURE__*/ _interop_require_default(require("./isActive"));
var _toggle = /*#__PURE__*/ _interop_require_default(require("./toggle"));
require("../buttons.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "rich-text__button";
var LeafButton = function(param) {
    var format = param.format, children = param.children;
    var editor = (0, _slatereact.useSlate)();
    return /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        className: [
            baseClass,
            (0, _isActive.default)(editor, format) && "".concat(baseClass, "__button--active")
        ].filter(Boolean).join(" "),
        onMouseDown: function(event) {
            event.preventDefault();
            (0, _toggle.default)(editor, format);
        }
    }, children);
};
var _default = LeafButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9CdXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCBpc01hcmtBY3RpdmUgZnJvbSAnLi9pc0FjdGl2ZSc7XG5pbXBvcnQgdG9nZ2xlTGVhZiBmcm9tICcuL3RvZ2dsZSc7XG5cbmltcG9ydCAnLi4vYnV0dG9ucy5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JpY2gtdGV4dF9fYnV0dG9uJztcblxuY29uc3QgTGVhZkJ1dHRvbiA9ICh7IGZvcm1hdCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBpc01hcmtBY3RpdmUoZWRpdG9yLCBmb3JtYXQpICYmIGAke2Jhc2VDbGFzc31fX2J1dHRvbi0tYWN0aXZlYCxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlTGVhZihlZGl0b3IsIGZvcm1hdCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYWZCdXR0b247XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiTGVhZkJ1dHRvbiIsImZvcm1hdCIsImNoaWxkcmVuIiwiZWRpdG9yIiwidXNlU2xhdGUiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwiaXNNYXJrQWN0aXZlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJvbk1vdXNlRG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVMZWFmIl0sIm1hcHBpbmdzIjoiOzs7OytCQTZCQTs7O2VBQUE7Ozs0REE3QmtCOzBCQUNPOytEQUNBOzZEQUNGO1FBRWhCOzs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGFBQWE7UUFBR0MsZUFBQUEsUUFBUUMsaUJBQUFBO0lBQzVCLElBQU1DLFNBQVNDLElBQUFBLG9CQUFRO0lBRXZCLHFCQUNFLDZCQUFDQztRQUNDQyxNQUFLO1FBQ0xDLFdBQVc7WUFDVFI7WUFDQVMsSUFBQUEsaUJBQVksRUFBQ0wsUUFBUUYsV0FBVyxBQUFDLEdBQVksT0FBVkYsV0FBVTtTQUM5QyxDQUFDVSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUN2QkMsYUFBYSxTQUFDQztZQUNaQSxNQUFNQyxjQUFjO1lBQ3BCQyxJQUFBQSxlQUFVLEVBQUNaLFFBQVFGO1FBQ3JCO09BRUNDO0FBR1A7SUFFQSxXQUFlRiJ9