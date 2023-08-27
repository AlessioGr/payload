import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Trans, useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import MinimalTemplate from "../../templates/Minimal";
import Form from "../../forms/Form";
import Password from "../../forms/field-types/Password";
import ConfirmPassword from "../../forms/field-types/ConfirmPassword";
import FormSubmit from "../../forms/Submit";
import Button from "../../elements/Button";
import Meta from "../../utilities/Meta";
import HiddenInput from "../../forms/field-types/HiddenInput";
import "./index.scss";
var baseClass = "reset-password";
var ResetPassword = function() {
    var config = useConfig();
    var _config_admin = config.admin, userSlug = _config_admin.user, logoutRoute = _config_admin.logoutRoute, serverURL = config.serverURL, _config_routes = config.routes, admin = _config_routes.admin, api = _config_routes.api;
    var token = useParams().token;
    var history = useHistory();
    var _useAuth = useAuth(), user = _useAuth.user, setToken = _useAuth.setToken;
    var t = useTranslation("authentication").t;
    var onSuccess = function(data) {
        if (data.token) {
            setToken(data.token);
            history.push("".concat(admin));
        } else {
            history.push("".concat(admin, "/login"));
            toast.success(t("general:updatedSuccessfully"), {
                autoClose: 3000
            });
        }
    };
    if (user) {
        return /*#__PURE__*/ React.createElement(MinimalTemplate, {
            className: baseClass
        }, /*#__PURE__*/ React.createElement(Meta, {
            title: t("resetPassword"),
            description: t("resetPassword"),
            keywords: t("resetPassword")
        }), /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__wrap")
        }, /*#__PURE__*/ React.createElement("h1", null, t("alreadyLoggedIn")), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement(Trans, {
            i18nKey: "loginWithAnotherUser",
            t: t
        }, /*#__PURE__*/ React.createElement(Link, {
            to: "".concat(admin).concat(logoutRoute)
        }, "log out"))), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(Button, {
            el: "link",
            buttonStyle: "secondary",
            to: admin
        }, t("general:backToDashboard"))));
    }
    return /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("h1", null, t("resetPassword")), /*#__PURE__*/ React.createElement(Form, {
        onSuccess: onSuccess,
        method: "post",
        action: "".concat(serverURL).concat(api, "/").concat(userSlug, "/reset-password"),
        redirect: admin
    }, /*#__PURE__*/ React.createElement(Password, {
        label: t("newPassword"),
        name: "password",
        autoComplete: "off",
        required: true
    }), /*#__PURE__*/ React.createElement(ConfirmPassword, null), /*#__PURE__*/ React.createElement(HiddenInput, {
        name: "token",
        value: token
    }), /*#__PURE__*/ React.createElement(FormSubmit, null, t("resetPassword")))));
};
export default ResetPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1Jlc2V0UGFzc3dvcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCB1c2VIaXN0b3J5LCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nO1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1Bhc3N3b3JkJztcbmltcG9ydCBDb25maXJtUGFzc3dvcmQgZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvQ29uZmlybVBhc3N3b3JkJztcbmltcG9ydCBGb3JtU3VibWl0IGZyb20gJy4uLy4uL2Zvcm1zL1N1Ym1pdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgSGlkZGVuSW5wdXQgZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvSGlkZGVuSW5wdXQnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZXNldC1wYXNzd29yZCc7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBhZG1pbjogeyB1c2VyOiB1c2VyU2x1ZywgbG9nb3V0Um91dGUgfSwgc2VydmVyVVJMLCByb3V0ZXM6IHsgYWRtaW4sIGFwaSB9IH0gPSBjb25maWc7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVBhcmFtczx7IHRva2VuPzogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHsgdXNlciwgc2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKTtcblxuICBjb25zdCBvblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLnRva2VuKSB7XG4gICAgICBzZXRUb2tlbihkYXRhLnRva2VuKTtcbiAgICAgIGhpc3RvcnkucHVzaChgJHthZG1pbn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlzdG9yeS5wdXNoKGAke2FkbWlufS9sb2dpbmApO1xuICAgICAgdG9hc3Quc3VjY2Vzcyh0KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKSwgeyBhdXRvQ2xvc2U6IDMwMDAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmICh1c2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPXt0KCdyZXNldFBhc3N3b3JkJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e3QoJ3Jlc2V0UGFzc3dvcmQnKX1cbiAgICAgICAgICBrZXl3b3Jkcz17dCgncmVzZXRQYXNzd29yZCcpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGgxPnt0KCdhbHJlYWR5TG9nZ2VkSW4nKX08L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPFRyYW5zXG4gICAgICAgICAgICAgIGkxOG5LZXk9XCJsb2dpbldpdGhBbm90aGVyVXNlclwiXG4gICAgICAgICAgICAgIHQ9e3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgJHthZG1pbn0ke2xvZ291dFJvdXRlfWB9PmxvZyBvdXQ8L0xpbms+XG4gICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBlbD1cImxpbmtcIlxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgdG89e2FkbWlufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCdnZW5lcmFsOmJhY2tUb0Rhc2hib2FyZCcpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPGgxPnt0KCdyZXNldFBhc3N3b3JkJyl9PC9oMT5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Y2Nlc3M9e29uU3VjY2Vzc31cbiAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICBhY3Rpb249e2Ake3NlcnZlclVSTH0ke2FwaX0vJHt1c2VyU2x1Z30vcmVzZXQtcGFzc3dvcmRgfVxuICAgICAgICAgIHJlZGlyZWN0PXthZG1pbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxQYXNzd29yZFxuICAgICAgICAgICAgbGFiZWw9e3QoJ25ld1Bhc3N3b3JkJyl9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29uZmlybVBhc3N3b3JkIC8+XG4gICAgICAgICAgPEhpZGRlbklucHV0XG4gICAgICAgICAgICBuYW1lPVwidG9rZW5cIlxuICAgICAgICAgICAgdmFsdWU9e3Rva2VufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1TdWJtaXQ+e3QoJ3Jlc2V0UGFzc3dvcmQnKX08L0Zvcm1TdWJtaXQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRQYXNzd29yZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VIaXN0b3J5IiwidXNlUGFyYW1zIiwidG9hc3QiLCJUcmFucyIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwidXNlQXV0aCIsIk1pbmltYWxUZW1wbGF0ZSIsIkZvcm0iLCJQYXNzd29yZCIsIkNvbmZpcm1QYXNzd29yZCIsIkZvcm1TdWJtaXQiLCJCdXR0b24iLCJNZXRhIiwiSGlkZGVuSW5wdXQiLCJiYXNlQ2xhc3MiLCJSZXNldFBhc3N3b3JkIiwiY29uZmlnIiwiYWRtaW4iLCJ1c2VyIiwidXNlclNsdWciLCJsb2dvdXRSb3V0ZSIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInRva2VuIiwiaGlzdG9yeSIsInNldFRva2VuIiwidCIsIm9uU3VjY2VzcyIsImRhdGEiLCJwdXNoIiwic3VjY2VzcyIsImF1dG9DbG9zZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImRpdiIsImgxIiwicCIsImkxOG5LZXkiLCJ0byIsImJyIiwiZWwiLCJidXR0b25TdHlsZSIsIm1ldGhvZCIsImFjdGlvbiIsInJlZGlyZWN0IiwibGFiZWwiLCJu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