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
var _DatePicker = /*#__PURE__*/ _interop_require_default(require("../../../DatePicker"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "condition-value-date";
var DateField = function(param) {
    var onChange = param.onChange, value = param.value;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_DatePicker.default, {
        onChange: onChange,
        value: value
    }));
};
var _default = DateField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vRGF0ZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuLi8uLi8uLi9EYXRlUGlja2VyJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbmRpdGlvbi12YWx1ZS1kYXRlJztcblxuY29uc3QgRGF0ZUZpZWxkOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICA8RGF0ZVBpY2tlclxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRGF0ZUZpZWxkO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkRhdGVGaWVsZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJEYXRlUGlja2VyIl0sIm1hcHBpbmdzIjoiOzs7OytCQWVBOzs7ZUFBQTs7OzREQWZrQjtpRUFFSzs7Ozs7O0FBRXZCLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsWUFBNkI7UUFBR0MsaUJBQUFBLFVBQVVDLGNBQUFBO3lCQUM5Qyw2QkFBQ0M7UUFBSUMsV0FBV0w7cUJBQ2QsNkJBQUNNLG1CQUFVO1FBQ1RKLFVBQVVBO1FBQ1ZDLE9BQU9BOzs7SUFLYixXQUFlRiJ9