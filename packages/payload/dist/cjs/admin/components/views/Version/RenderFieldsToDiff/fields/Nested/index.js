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
var _ = /*#__PURE__*/ _interop_require_default(require("../.."));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _getTranslation = require("../../../../../../../utilities/getTranslation");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "nested-diff";
var Nested = function(param) {
    var version = param.version, comparison = param.comparison, permissions = param.permissions, field = param.field, locale = param.locale, locales = param.locales, fieldComponents = param.fieldComponents, _param_disableGutter = param.disableGutter, disableGutter = _param_disableGutter === void 0 ? false : _param_disableGutter;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, field.label && /*#__PURE__*/ _react.default.createElement(_Label.default, null, locale && /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__locale-label")
    }, locale), (0, _getTranslation.getTranslation)(field.label, i18n)), /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            "".concat(baseClass, "__wrap"),
            !disableGutter && "".concat(baseClass, "__wrap--gutter")
        ].filter(Boolean).join(" ")
    }, /*#__PURE__*/ _react.default.createElement(_.default, {
        locales: locales,
        version: version,
        comparison: comparison,
        fieldPermissions: permissions,
        fields: field.fields,
        fieldComponents: fieldComponents
    })));
};
var _default = Nested;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9OZXN0ZWQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFJlbmRlckZpZWxkc1RvRGlmZiBmcm9tICcuLi8uLic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgeyBGaWVsZFdpdGhTdWJGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbmVzdGVkLWRpZmYnO1xuXG5jb25zdCBOZXN0ZWQ6IFJlYWN0LkZDPFByb3BzICYgeyBmaWVsZDogRmllbGRXaXRoU3ViRmllbGRzfT4gPSAoe1xuICB2ZXJzaW9uLFxuICBjb21wYXJpc29uLFxuICBwZXJtaXNzaW9ucyxcbiAgZmllbGQsXG4gIGxvY2FsZSxcbiAgbG9jYWxlcyxcbiAgZmllbGRDb21wb25lbnRzLFxuICBkaXNhYmxlR3V0dGVyID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAge2ZpZWxkLmxhYmVsICYmIChcbiAgICAgICAgPExhYmVsPlxuICAgICAgICAgIHtsb2NhbGUgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGUtbGFiZWxgfT57bG9jYWxlfTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCwgaTE4bil9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e1tcbiAgICAgICAgYCR7YmFzZUNsYXNzfV9fd3JhcGAsXG4gICAgICAgICFkaXNhYmxlR3V0dGVyICYmIGAke2Jhc2VDbGFzc31fX3dyYXAtLWd1dHRlcmAsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignICcpfVxuICAgICAgPlxuICAgICAgICA8UmVuZGVyRmllbGRzVG9EaWZmXG4gICAgICAgICAgbG9jYWxlcz17bG9jYWxlc31cbiAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9ufVxuICAgICAgICAgIGNvbXBhcmlzb249e2NvbXBhcmlzb259XG4gICAgICAgICAgZmllbGRQZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgZmllbGRzPXtmaWVsZC5maWVsZHN9XG4gICAgICAgICAgZmllbGRDb21wb25lbnRzPXtmaWVsZENvbXBvbmVudHN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5lc3RlZDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJOZXN0ZWQiLCJ2ZXJzaW9uIiwiY29tcGFyaXNvbiIsInBlcm1pc3Npb25zIiwiZmllbGQiLCJsb2NhbGUiLCJsb2NhbGVzIiwiZmllbGRDb21wb25lbnRzIiwiZGlzYWJsZUd1dHRlciIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiTGFiZWwiLCJzcGFuIiwiZ2V0VHJhbnNsYXRpb24iLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIlJlbmRlckZpZWxkc1RvRGlmZiIsImZpZWxkUGVybWlzc2lvbnMiLCJmaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcURBOzs7ZUFBQTs7OzREQXJEa0I7NEJBQ2E7dURBQ0E7NERBRWI7OEJBRWE7UUFFeEI7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsU0FBeUQ7UUFDN0RDLGdCQUFBQSxTQUNBQyxtQkFBQUEsWUFDQUMsb0JBQUFBLGFBQ0FDLGNBQUFBLE9BQ0FDLGVBQUFBLFFBQ0FDLGdCQUFBQSxTQUNBQyx3QkFBQUEsOENBQ0FDLGVBQUFBLGtEQUFnQjtJQUVoQixJQUFNLEFBQUVDLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUVSLHFCQUNFLDZCQUFDRTtRQUFJQyxXQUFXYjtPQUNiSyxNQUFNUyxLQUFLLGtCQUNWLDZCQUFDQyxjQUFLLFFBQ0hULHdCQUNDLDZCQUFDVTtRQUFLSCxXQUFXLEFBQUMsR0FBWSxPQUFWYixXQUFVO09BQWtCTSxTQUVqRFcsSUFBQUEsOEJBQWMsRUFBQ1osTUFBTVMsS0FBSyxFQUFFSixzQkFHakMsNkJBQUNFO1FBQUlDLFdBQVc7WUFDYixHQUFZLE9BQVZiLFdBQVU7WUFDYixDQUFDUyxpQkFBaUIsQUFBQyxHQUFZLE9BQVZULFdBQVU7U0FDaEMsQ0FBQ2tCLE1BQU0sQ0FBQ0MsU0FDTkMsSUFBSSxDQUFDO3FCQUVOLDZCQUFDQyxTQUFrQjtRQUNqQmQsU0FBU0E7UUFDVEwsU0FBU0E7UUFDVEMsWUFBWUE7UUFDWm1CLGtCQUFrQmxCO1FBQ2xCbUIsUUFBUWxCLE1BQU1rQixNQUFNO1FBQ3BCZixpQkFBaUJBOztBQUszQjtJQUVBLFdBQWVQIn0=