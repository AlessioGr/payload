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
var _reacti18next = require("react-i18next");
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "select-version-locales";
var SelectLocales = function(param) {
    var onChange = param.onChange, value = param.value, options = param.options;
    var t = (0, _reacti18next.useTranslation)("version").t;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("showLocales")), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        isMulti: true,
        placeholder: t("selectLocales"),
        onChange: onChange,
        value: value.map(function(param) {
            var code = param.code;
            return {
                value: code,
                label: code
            };
        }),
        options: options.map(function(param) {
            var code = param.code;
            return {
                value: code,
                label: code
            };
        })
    }));
};
var _default = SelectLocales;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vU2VsZWN0TG9jYWxlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUmVhY3RTZWxlY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc2VsZWN0LXZlcnNpb24tbG9jYWxlcyc7XG5cbmNvbnN0IFNlbGVjdExvY2FsZXM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQ2hhbmdlLCB2YWx1ZSwgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgIHt0KCdzaG93TG9jYWxlcycpfVxuICAgICAgPC9kaXY+XG4gICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgaXNNdWx0aVxuICAgICAgICBwbGFjZWhvbGRlcj17dCgnc2VsZWN0TG9jYWxlcycpfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZS5tYXAoKHsgY29kZSB9KSA9PiAoeyB2YWx1ZTogY29kZSwgbGFiZWw6IGNvZGUgfSkpfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zLm1hcCgoeyBjb2RlIH0pID0+ICh7IHZhbHVlOiBjb2RlLCBsYWJlbDogY29kZSB9KSl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TG9jYWxlcztcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJTZWxlY3RMb2NhbGVzIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJSZWFjdFNlbGVjdCIsImlzTXVsdGkiLCJwbGFjZWhvbGRlciIsIm1hcCIsImNvZGUiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkE0QkE7OztlQUFBOzs7NERBNUJrQjs0QkFDYTtrRUFDUDtRQUdqQjs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxnQkFBaUM7UUFBR0MsaUJBQUFBLFVBQVVDLGNBQUFBLE9BQU9DLGdCQUFBQTtJQUN6RCxJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBRVIscUJBQ0UsNkJBQUNFO1FBQUlDLFdBQVdSO3FCQUNkLDZCQUFDTztRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWUixXQUFVO09BQzFCSyxFQUFFLCtCQUVMLDZCQUFDSSxvQkFBVztRQUNWQyxTQUFBQTtRQUNBQyxhQUFhTixFQUFFO1FBQ2ZILFVBQVVBO1FBQ1ZDLE9BQU9BLE1BQU1TLEdBQUcsQ0FBQztnQkFBR0MsYUFBQUE7bUJBQVk7Z0JBQUVWLE9BQU9VO2dCQUFNQyxPQUFPRDtZQUFLOztRQUMzRFQsU0FBU0EsUUFBUVEsR0FBRyxDQUFDO2dCQUFHQyxhQUFBQTttQkFBWTtnQkFBRVYsT0FBT1U7Z0JBQU1DLE9BQU9EO1lBQUs7OztBQUl2RTtJQUVBLFdBQWVaIn0=