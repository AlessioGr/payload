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
var _reactrouternavigationprompt = /*#__PURE__*/ _interop_require_default(require("react-router-navigation-prompt"));
var _reacti18next = require("react-i18next");
var _Auth = require("../../utilities/Auth");
var _context = require("../../forms/Form/context");
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var modalSlug = "leave-without-saving";
var LeaveWithoutSaving = function() {
    var modified = (0, _context.useFormModified)();
    var user = (0, _Auth.useAuth)().user;
    var t = (0, _reacti18next.useTranslation)("general").t;
    return /*#__PURE__*/ _react.default.createElement(_reactrouternavigationprompt.default, {
        when: Boolean(modified && user)
    }, function(param) {
        var onConfirm = param.onConfirm, onCancel = param.onCancel;
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: modalSlug
        }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
            className: "".concat(modalSlug, "__template")
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t("leaveWithoutSaving")), /*#__PURE__*/ _react.default.createElement("p", null, t("changesNotSaved")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            onClick: onCancel,
            buttonStyle: "secondary"
        }, t("stayOnThisPage")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            onClick: onConfirm
        }, t("leaveAnyway"))));
    });
};
var _default = LeaveWithoutSaving;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL21vZGFscy9MZWF2ZVdpdGhvdXRTYXZpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvblByb21wdCBmcm9tICdyZWFjdC1yb3V0ZXItbmF2aWdhdGlvbi1wcm9tcHQnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgbW9kYWxTbHVnID0gJ2xlYXZlLXdpdGhvdXQtc2F2aW5nJztcblxuY29uc3QgTGVhdmVXaXRob3V0U2F2aW5nOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgbW9kaWZpZWQgPSB1c2VGb3JtTW9kaWZpZWQoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZpZ2F0aW9uUHJvbXB0IHdoZW49e0Jvb2xlYW4obW9kaWZpZWQgJiYgdXNlcil9PlxuICAgICAgeyh7IG9uQ29uZmlybSwgb25DYW5jZWwgfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kYWxTbHVnfT5cbiAgICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7bW9kYWxTbHVnfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICAgIDxoMT57dCgnbGVhdmVXaXRob3V0U2F2aW5nJyl9PC9oMT5cbiAgICAgICAgICAgIDxwPnt0KCdjaGFuZ2VzTm90U2F2ZWQnKX08L3A+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsfVxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0KCdzdGF5T25UaGlzUGFnZScpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlybX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3QoJ2xlYXZlQW55d2F5Jyl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvTmF2aWdhdGlvblByb21wdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYXZlV2l0aG91dFNhdmluZztcbiJdLCJuYW1lcyI6WyJtb2RhbFNsdWciLCJMZWF2ZVdpdGhvdXRTYXZpbmciLCJtb2RpZmllZCIsInVzZUZvcm1Nb2RpZmllZCIsInVzZXIiLCJ1c2VBdXRoIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiTmF2aWdhdGlvblByb21wdCIsIndoZW4iLCJCb29sZWFuIiwib25Db25maXJtIiwib25DYW5jZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJNaW5pbWFsVGVtcGxhdGUiLCJoMSIsInAiLCJCdXR0b24iLCJvbkNsaWNrIiwiYnV0dG9uU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMENBOzs7ZUFBQTs7OzREQTFDa0I7a0ZBQ1c7NEJBQ0U7b0JBQ1A7dUJBQ1E7OERBQ0o7NkRBQ1Q7UUFFWjs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxxQkFBK0I7SUFDbkMsSUFBTUMsV0FBV0MsSUFBQUEsd0JBQWU7SUFDaEMsSUFBTSxBQUFFQyxPQUFTQyxJQUFBQSxhQUFPLElBQWhCRDtJQUNSLElBQU0sQUFBRUUsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxXQUFyQkQ7SUFFUixxQkFDRSw2QkFBQ0Usb0NBQWdCO1FBQUNDLE1BQU1DLFFBQVFSLFlBQVlFO09BQ3pDO1lBQUdPLGtCQUFBQSxXQUFXQyxpQkFBQUE7NkJBQ2IsNkJBQUNDO1lBQUlDLFdBQVdkO3lCQUNkLDZCQUFDZSxnQkFBZTtZQUFDRCxXQUFXLEFBQUMsR0FBWSxPQUFWZCxXQUFVO3lCQUN2Qyw2QkFBQ2dCLFlBQUlWLEVBQUUsc0NBQ1AsNkJBQUNXLFdBQUdYLEVBQUUsbUNBQ04sNkJBQUNZLGVBQU07WUFDTEMsU0FBU1A7WUFDVFEsYUFBWTtXQUVYZCxFQUFFLGtDQUVMLDZCQUFDWSxlQUFNO1lBQ0xDLFNBQVNSO1dBRVJMLEVBQUU7O0FBT2pCO0lBRUEsV0FBZUwifQ==