import React from "react";
import StepNav from "../StepNav";
import { Gutter } from "../Gutter";
import "./index.scss";
var baseClass = "eyebrow";
var Eyebrow = function(param) {
    var actions = param.actions;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement(StepNav, null), actions));
};
export default Eyebrow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0V5ZWJyb3cvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RlcE5hdiBmcm9tICcuLi9TdGVwTmF2JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi9HdXR0ZXInO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdleWVicm93JztcblxuY29uc3QgRXllYnJvdzogUmVhY3QuRkM8UHJvcHM+ID0gKHsgYWN0aW9ucyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICA8U3RlcE5hdiAvPlxuICAgICAge2FjdGlvbnN9XG4gICAgPC9HdXR0ZXI+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRXllYnJvdztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0ZXBOYXYiLCJHdXR0ZXIiLCJiYXNlQ2xhc3MiLCJFeWVicm93IiwiYWN0aW9ucyIsImRpdiIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGFBQWEsYUFBYTtBQUVqQyxTQUFTQyxNQUFNLFFBQVEsWUFBWTtBQUVuQyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxVQUEyQjtRQUFHQyxnQkFBQUE7eUJBQ2xDLG9CQUFDQztRQUFJQyxXQUFXSjtxQkFDZCxvQkFBQ0Q7UUFBT0ssV0FBVyxBQUFDLEdBQVksT0FBVkosV0FBVTtxQkFDOUIsb0JBQUNGLGdCQUNBSTs7QUFLUCxlQUFlRCxRQUFRIn0=