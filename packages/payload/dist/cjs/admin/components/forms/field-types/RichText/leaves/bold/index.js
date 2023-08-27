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
var _Bold = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/Bold"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Bold = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("strong", attributes, children);
};
var bold = {
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "bold"
        }, /*#__PURE__*/ _react.default.createElement(_Bold.default, null));
    },
    Leaf: Bold
};
var _default = bold;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9ib2xkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlYWZCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBCb2xkSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9Cb2xkJztcblxuY29uc3QgQm9sZCA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pID0+IChcbiAgPHN0cm9uZyB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvc3Ryb25nPlxuKTtcblxuY29uc3QgYm9sZCA9IHtcbiAgQnV0dG9uOiAoKSA9PiAoXG4gICAgPExlYWZCdXR0b24gZm9ybWF0PVwiYm9sZFwiPlxuICAgICAgPEJvbGRJY29uIC8+XG4gICAgPC9MZWFmQnV0dG9uPlxuICApLFxuICBMZWFmOiBCb2xkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYm9sZDtcbiJdLCJuYW1lcyI6WyJCb2xkIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwic3Ryb25nIiwiYm9sZCIsIkJ1dHRvbiIsIkxlYWZCdXR0b24iLCJmb3JtYXQiLCJCb2xkSWNvbiIsIkxlYWYiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUJBOzs7ZUFBQTs7OzREQWpCa0I7NkRBQ0s7MkRBQ0Y7Ozs7OztBQUVyQixJQUFNQSxPQUFPO1FBQUdDLG1CQUFBQSxZQUFZQyxpQkFBQUE7eUJBQzFCLDZCQUFDQyxVQUFXRixZQUFhQzs7QUFHM0IsSUFBTUUsT0FBTztJQUNYQyxRQUFROzZCQUNOLDZCQUFDQyxlQUFVO1lBQUNDLFFBQU87eUJBQ2pCLDZCQUFDQyxhQUFROztJQUdiQyxNQUFNVDtBQUNSO0lBRUEsV0FBZUkifQ==