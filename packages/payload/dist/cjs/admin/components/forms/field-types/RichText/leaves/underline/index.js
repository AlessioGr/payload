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
var _Underline = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/Underline"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Underline = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("u", attributes, children);
};
var underline = {
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "underline"
        }, /*#__PURE__*/ _react.default.createElement(_Underline.default, null));
    },
    Leaf: Underline
};
var _default = underline;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy91bmRlcmxpbmUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGVhZkJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IFVuZGVybGluZUljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvVW5kZXJsaW5lJztcblxuY29uc3QgVW5kZXJsaW5lID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSkgPT4gKFxuICA8dSB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvdT5cbik7XG5cbmNvbnN0IHVuZGVybGluZSA9IHtcbiAgQnV0dG9uOiAoKSA9PiAoXG4gICAgPExlYWZCdXR0b24gZm9ybWF0PVwidW5kZXJsaW5lXCI+XG4gICAgICA8VW5kZXJsaW5lSWNvbiAvPlxuICAgIDwvTGVhZkJ1dHRvbj5cbiAgKSxcbiAgTGVhZjogVW5kZXJsaW5lLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5kZXJsaW5lO1xuIl0sIm5hbWVzIjpbIlVuZGVybGluZSIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsInUiLCJ1bmRlcmxpbmUiLCJCdXR0b24iLCJMZWFmQnV0dG9uIiwiZm9ybWF0IiwiVW5kZXJsaW5lSWNvbiIsIkxlYWYiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUJBOzs7ZUFBQTs7OzREQWpCa0I7NkRBQ0s7Z0VBQ0c7Ozs7OztBQUUxQixJQUFNQSxZQUFZO1FBQUdDLG1CQUFBQSxZQUFZQyxpQkFBQUE7eUJBQy9CLDZCQUFDQyxLQUFNRixZQUFhQzs7QUFHdEIsSUFBTUUsWUFBWTtJQUNoQkMsUUFBUTs2QkFDTiw2QkFBQ0MsZUFBVTtZQUFDQyxRQUFPO3lCQUNqQiw2QkFBQ0Msa0JBQWE7O0lBR2xCQyxNQUFNVDtBQUNSO0lBRUEsV0FBZUkifQ==