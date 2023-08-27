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
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "card";
var Card = function(props) {
    var id = props.id, title = props.title, titleAs = props.titleAs, buttonAriaLabel = props.buttonAriaLabel, actions = props.actions, onClick = props.onClick;
    var classes = [
        baseClass,
        id,
        onClick && "".concat(baseClass, "--has-onclick")
    ].filter(Boolean).join(" ");
    var Tag = titleAs !== null && titleAs !== void 0 ? titleAs : "div";
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        id: id
    }, /*#__PURE__*/ _react.default.createElement(Tag, {
        className: "".concat(baseClass, "__title")
    }, title), actions && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, actions), onClick && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        "aria-label": buttonAriaLabel,
        className: "".concat(baseClass, "__click"),
        buttonStyle: "none",
        onClick: onClick
    }));
};
var _default = Card;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NhcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjYXJkJztcblxuY29uc3QgQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB0aXRsZUFzLCBidXR0b25BcmlhTGFiZWwsIGFjdGlvbnMsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGlkLFxuICAgIG9uQ2xpY2sgJiYgYCR7YmFzZUNsYXNzfS0taGFzLW9uY2xpY2tgLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgY29uc3QgVGFnID0gdGl0bGVBcyA/PyAnZGl2JztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIGlkPXtpZH1cbiAgICA+XG4gICAgICA8VGFnIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGl0bGVgfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9UYWc+XG4gICAgICB7YWN0aW9ucyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25zYH0+XG4gICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtvbkNsaWNrICYmIChcbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9e2J1dHRvbkFyaWFMYWJlbH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NsaWNrYH1cbiAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJDYXJkIiwicHJvcHMiLCJpZCIsInRpdGxlIiwidGl0bGVBcyIsImJ1dHRvbkFyaWFMYWJlbCIsImFjdGlvbnMiLCJvbkNsaWNrIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiVGFnIiwiZGl2IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYXJpYS1sYWJlbCIsImJ1dHRvblN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQTRDQTs7O2VBQUE7Ozs0REE1Q2tCOzZEQUNDO1FBR1o7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsT0FBd0IsU0FBQ0M7SUFDN0IsSUFBUUMsS0FBMERELE1BQTFEQyxJQUFJQyxRQUFzREYsTUFBdERFLE9BQU9DLFVBQStDSCxNQUEvQ0csU0FBU0Msa0JBQXNDSixNQUF0Q0ksaUJBQWlCQyxVQUFxQkwsTUFBckJLLFNBQVNDLFVBQVlOLE1BQVpNO0lBRXRELElBQU1DLFVBQVU7UUFDZFQ7UUFDQUc7UUFDQUssV0FBVyxBQUFDLEdBQVksT0FBVlIsV0FBVTtLQUN6QixDQUFDVSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixJQUFNQyxNQUFNUixvQkFBQUEscUJBQUFBLFVBQVc7SUFFdkIscUJBQ0UsNkJBQUNTO1FBQ0NDLFdBQVdOO1FBQ1hOLElBQUlBO3FCQUVKLDZCQUFDVTtRQUFJRSxXQUFXLEFBQUMsR0FBWSxPQUFWZixXQUFVO09BQzFCSSxRQUVGRyx5QkFDQyw2QkFBQ087UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVmYsV0FBVTtPQUMxQk8sVUFHSkMseUJBQ0MsNkJBQUNRLGVBQU07UUFDTEMsY0FBWVg7UUFDWlMsV0FBVyxBQUFDLEdBQVksT0FBVmYsV0FBVTtRQUN4QmtCLGFBQVk7UUFDWlYsU0FBU0E7O0FBS25CO0lBRUEsV0FBZVAifQ==