import React from "react";
import NavigationPrompt from "react-router-navigation-prompt";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../utilities/Auth";
import { useFormModified } from "../../forms/Form/context";
import MinimalTemplate from "../../templates/Minimal";
import Button from "../../elements/Button";
import "./index.scss";
var modalSlug = "leave-without-saving";
var LeaveWithoutSaving = function() {
    var modified = useFormModified();
    var user = useAuth().user;
    var t = useTranslation("general").t;
    return /*#__PURE__*/ React.createElement(NavigationPrompt, {
        when: Boolean(modified && user)
    }, function(param) {
        var onConfirm = param.onConfirm, onCancel = param.onCancel;
        return /*#__PURE__*/ React.createElement("div", {
            className: modalSlug
        }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
            className: "".concat(modalSlug, "__template")
        }, /*#__PURE__*/ React.createElement("h1", null, t("leaveWithoutSaving")), /*#__PURE__*/ React.createElement("p", null, t("changesNotSaved")), /*#__PURE__*/ React.createElement(Button, {
            onClick: onCancel,
            buttonStyle: "secondary"
        }, t("stayOnThisPage")), /*#__PURE__*/ React.createElement(Button, {
            onClick: onConfirm
        }, t("leaveAnyway"))));
    });
};
export default LeaveWithoutSaving;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL21vZGFscy9MZWF2ZVdpdGhvdXRTYXZpbmcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvblByb21wdCBmcm9tICdyZWFjdC1yb3V0ZXItbmF2aWdhdGlvbi1wcm9tcHQnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgbW9kYWxTbHVnID0gJ2xlYXZlLXdpdGhvdXQtc2F2aW5nJztcblxuY29uc3QgTGVhdmVXaXRob3V0U2F2aW5nOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgbW9kaWZpZWQgPSB1c2VGb3JtTW9kaWZpZWQoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZpZ2F0aW9uUHJvbXB0IHdoZW49e0Jvb2xlYW4obW9kaWZpZWQgJiYgdXNlcil9PlxuICAgICAgeyh7IG9uQ29uZmlybSwgb25DYW5jZWwgfSkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kYWxTbHVnfT5cbiAgICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7bW9kYWxTbHVnfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICAgIDxoMT57dCgnbGVhdmVXaXRob3V0U2F2aW5nJyl9PC9oMT5cbiAgICAgICAgICAgIDxwPnt0KCdjaGFuZ2VzTm90U2F2ZWQnKX08L3A+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2FuY2VsfVxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0KCdzdGF5T25UaGlzUGFnZScpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlybX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3QoJ2xlYXZlQW55d2F5Jyl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvTmF2aWdhdGlvblByb21wdD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYXZlV2l0aG91dFNhdmluZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmlnYXRpb25Qcm9tcHQiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUF1dGgiLCJ1c2VGb3JtTW9kaWZpZWQiLCJNaW5pbWFsVGVtcGxhdGUiLCJCdXR0b24iLCJtb2RhbFNsdWciLCJMZWF2ZVdpdGhvdXRTYXZpbmciLCJtb2RpZmllZCIsInVzZXIiLCJ0Iiwid2hlbiIsIkJvb2xlYW4iLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsIm9uQ2xpY2siLCJidXR0b25TdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLHNCQUFzQixpQ0FBaUM7QUFDOUQsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxPQUFPLFFBQVEsdUJBQXVCO0FBQy9DLFNBQVNDLGVBQWUsUUFBUSwyQkFBMkI7QUFDM0QsT0FBT0MscUJBQXFCLDBCQUEwQjtBQUN0RCxPQUFPQyxZQUFZLHdCQUF3QjtBQUUzQyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxxQkFBK0I7SUFDbkMsSUFBTUMsV0FBV0w7SUFDakIsSUFBTSxBQUFFTSxPQUFTUCxVQUFUTztJQUNSLElBQU0sQUFBRUMsSUFBTVQsZUFBZSxXQUFyQlM7SUFFUixxQkFDRSxvQkFBQ1Y7UUFBaUJXLE1BQU1DLFFBQVFKLFlBQVlDO09BQ3pDO1lBQUdJLGtCQUFBQSxXQUFXQyxpQkFBQUE7NkJBQ2Isb0JBQUNDO1lBQUlDLFdBQVdWO3lCQUNkLG9CQUFDRjtZQUFnQlksV0FBVyxBQUFDLEdBQVksT0FBVlYsV0FBVTt5QkFDdkMsb0JBQUNXLFlBQUlQLEVBQUUsc0NBQ1Asb0JBQUNRLFdBQUdSLEVBQUUsbUNBQ04sb0JBQUNMO1lBQ0NjLFNBQVNMO1lBQ1RNLGFBQVk7V0FFWFYsRUFBRSxrQ0FFTCxvQkFBQ0w7WUFDQ2MsU0FBU047V0FFUkgsRUFBRTs7QUFPakI7QUFFQSxlQUFlSCxtQkFBbUIifQ==