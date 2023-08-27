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
var _Italic = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/Italic"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Italic = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("em", attributes, children);
};
var italic = {
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "italic"
        }, /*#__PURE__*/ _react.default.createElement(_Italic.default, null));
    },
    Leaf: Italic
};
var _default = italic;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9pdGFsaWMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGVhZkJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IEl0YWxpY0ljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvSXRhbGljJztcblxuY29uc3QgSXRhbGljID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZW0gey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2VtPlxuKTtcblxuY29uc3QgaXRhbGljID0ge1xuICBCdXR0b246ICgpID0+IChcbiAgICA8TGVhZkJ1dHRvbiBmb3JtYXQ9XCJpdGFsaWNcIj5cbiAgICAgIDxJdGFsaWNJY29uIC8+XG4gICAgPC9MZWFmQnV0dG9uPlxuICApLFxuICBMZWFmOiBJdGFsaWMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpdGFsaWM7XG4iXSwibmFtZXMiOlsiSXRhbGljIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwiZW0iLCJpdGFsaWMiLCJCdXR0b24iLCJMZWFmQnV0dG9uIiwiZm9ybWF0IiwiSXRhbGljSWNvbiIsIkxlYWYiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUJBOzs7ZUFBQTs7OzREQWpCa0I7NkRBQ0s7NkRBQ0E7Ozs7OztBQUV2QixJQUFNQSxTQUFTO1FBQUdDLG1CQUFBQSxZQUFZQyxpQkFBQUE7eUJBQzVCLDZCQUFDQyxNQUFPRixZQUFhQzs7QUFHdkIsSUFBTUUsU0FBUztJQUNiQyxRQUFROzZCQUNOLDZCQUFDQyxlQUFVO1lBQUNDLFFBQU87eUJBQ2pCLDZCQUFDQyxlQUFVOztJQUdmQyxNQUFNVDtBQUNSO0lBRUEsV0FBZUkifQ==