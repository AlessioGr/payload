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
var _StepNav = /*#__PURE__*/ _interop_require_default(require("../StepNav"));
var _Gutter = require("../Gutter");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "eyebrow";
var Eyebrow = function(param) {
    var actions = param.actions;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement(_StepNav.default, null), actions));
};
var _default = Eyebrow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0V5ZWJyb3cvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RlcE5hdiBmcm9tICcuLi9TdGVwTmF2JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi9HdXR0ZXInO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdleWVicm93JztcblxuY29uc3QgRXllYnJvdzogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWN0aW9ucyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICA8U3RlcE5hdiAvPlxuICAgICAge2FjdGlvbnN9XG4gICAgPC9HdXR0ZXI+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXllYnJvdztcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJFeWVicm93IiwiYWN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsIkd1dHRlciIsIlN0ZXBOYXYiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0JBOzs7ZUFBQTs7OzREQWxCa0I7OERBQ0U7c0JBRUc7UUFFaEI7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsVUFBMkI7UUFBR0MsZ0JBQUFBO3lCQUNsQyw2QkFBQ0M7UUFBSUMsV0FBV0o7cUJBQ2QsNkJBQUNLLGNBQU07UUFBQ0QsV0FBVyxBQUFDLEdBQVksT0FBVkosV0FBVTtxQkFDOUIsNkJBQUNNLGdCQUFPLFNBQ1BKOztJQUtQLFdBQWVEIn0=