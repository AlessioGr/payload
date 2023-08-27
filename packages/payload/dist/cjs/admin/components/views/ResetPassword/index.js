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
var _reactrouterdom = require("react-router-dom");
var _reacttoastify = require("react-toastify");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
var _Password = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Password"));
var _ConfirmPassword = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/ConfirmPassword"));
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
var _HiddenInput = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/HiddenInput"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "reset-password";
var ResetPassword = function() {
    var config = (0, _Config.useConfig)();
    var _config_admin = config.admin, userSlug = _config_admin.user, logoutRoute = _config_admin.logoutRoute, serverURL = config.serverURL, _config_routes = config.routes, admin = _config_routes.admin, api = _config_routes.api;
    var token = (0, _reactrouterdom.useParams)().token;
    var history = (0, _reactrouterdom.useHistory)();
    var _useAuth = (0, _Auth.useAuth)(), user = _useAuth.user, setToken = _useAuth.setToken;
    var t = (0, _reacti18next.useTranslation)("authentication").t;
    var onSuccess = function(data) {
        if (data.token) {
            setToken(data.token);
            history.push("".concat(admin));
        } else {
            history.push("".concat(admin, "/login"));
            _reacttoastify.toast.success(t("general:updatedSuccessfully"), {
                autoClose: 3000
            });
        }
    };
    if (user) {
        return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
            className: baseClass
        }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
            title: t("resetPassword"),
            description: t("resetPassword"),
            keywords: t("resetPassword")
        }), /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__wrap")
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t("alreadyLoggedIn")), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
            i18nKey: "loginWithAnotherUser",
            t: t
        }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
            to: "".concat(admin).concat(logoutRoute)
        }, "log out"))), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            el: "link",
            buttonStyle: "secondary",
            to: admin
        }, t("general:backToDashboard"))));
    }
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("resetPassword")), /*#__PURE__*/ _react.default.createElement(_Form.default, {
        onSuccess: onSuccess,
        method: "post",
        action: "".concat(serverURL).concat(api, "/").concat(userSlug, "/reset-password"),
        redirect: admin
    }, /*#__PURE__*/ _react.default.createElement(_Password.default, {
        label: t("newPassword"),
        name: "password",
        autoComplete: "off",
        required: true
    }), /*#__PURE__*/ _react.default.createElement(_ConfirmPassword.default, null), /*#__PURE__*/ _react.default.createElement(_HiddenInput.default, {
        name: "token",
        value: token
    }), /*#__PURE__*/ _react.default.createElement(_Submit.default, null, t("resetPassword")))));
};
var _default = ResetPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1Jlc2V0UGFzc3dvcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCB1c2VIaXN0b3J5LCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nO1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1Bhc3N3b3JkJztcbmltcG9ydCBDb25maXJtUGFzc3dvcmQgZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvQ29uZmlybVBhc3N3b3JkJztcbmltcG9ydCBGb3JtU3VibWl0IGZyb20gJy4uLy4uL2Zvcm1zL1N1Ym1pdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgSGlkZGVuSW5wdXQgZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvSGlkZGVuSW5wdXQnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZXNldC1wYXNzd29yZCc7XG5cbmNvbnN0IFJlc2V0UGFzc3dvcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBhZG1pbjogeyB1c2VyOiB1c2VyU2x1ZywgbG9nb3V0Um91dGUgfSwgc2VydmVyVVJMLCByb3V0ZXM6IHsgYWRtaW4sIGFwaSB9IH0gPSBjb25maWc7XG4gIGNvbnN0IHsgdG9rZW4gfSA9IHVzZVBhcmFtczx7IHRva2VuPzogc3RyaW5nIH0+KCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHsgdXNlciwgc2V0VG9rZW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKTtcblxuICBjb25zdCBvblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLnRva2VuKSB7XG4gICAgICBzZXRUb2tlbihkYXRhLnRva2VuKTtcbiAgICAgIGhpc3RvcnkucHVzaChgJHthZG1pbn1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlzdG9yeS5wdXNoKGAke2FkbWlufS9sb2dpbmApO1xuICAgICAgdG9hc3Quc3VjY2Vzcyh0KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKSwgeyBhdXRvQ2xvc2U6IDMwMDAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGlmICh1c2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgICA8TWV0YVxuICAgICAgICAgIHRpdGxlPXt0KCdyZXNldFBhc3N3b3JkJyl9XG4gICAgICAgICAgZGVzY3JpcHRpb249e3QoJ3Jlc2V0UGFzc3dvcmQnKX1cbiAgICAgICAgICBrZXl3b3Jkcz17dCgncmVzZXRQYXNzd29yZCcpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGgxPnt0KCdhbHJlYWR5TG9nZ2VkSW4nKX08L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPFRyYW5zXG4gICAgICAgICAgICAgIGkxOG5LZXk9XCJsb2dpbldpdGhBbm90aGVyVXNlclwiXG4gICAgICAgICAgICAgIHQ9e3R9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgJHthZG1pbn0ke2xvZ291dFJvdXRlfWB9PmxvZyBvdXQ8L0xpbms+XG4gICAgICAgICAgICA8L1RyYW5zPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBlbD1cImxpbmtcIlxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgdG89e2FkbWlufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCdnZW5lcmFsOmJhY2tUb0Rhc2hib2FyZCcpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPGgxPnt0KCdyZXNldFBhc3N3b3JkJyl9PC9oMT5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBvblN1Y2Nlc3M9e29uU3VjY2Vzc31cbiAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICBhY3Rpb249e2Ake3NlcnZlclVSTH0ke2FwaX0vJHt1c2VyU2x1Z30vcmVzZXQtcGFzc3dvcmRgfVxuICAgICAgICAgIHJlZGlyZWN0PXthZG1pbn1cbiAgICAgICAgPlxuICAgICAgICAgIDxQYXNzd29yZFxuICAgICAgICAgICAgbGFiZWw9e3QoJ25ld1Bhc3N3b3JkJyl9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q29uZmlybVBhc3N3b3JkIC8+XG4gICAgICAgICAgPEhpZGRlbklucHV0XG4gICAgICAgICAgICBuYW1lPVwidG9rZW5cIlxuICAgICAgICAgICAgdmFsdWU9e3Rva2VufVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1TdWJtaXQ+e3QoJ3Jlc2V0UGFzc3dvcmQnKX08L0Zvcm1TdWJtaXQ+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRQYXNzd29yZDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJSZXNldFBhc3N3b3JkIiwiY29uZmlnIiwidXNlQ29uZmlnIiwiYWRtaW4iLCJ1c2VyIiwidXNlclNsdWciLCJsb2dvdXRSb3V0ZSIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInRva2VuIiwidXNlUGFyYW1zIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJ1c2VBdXRoIiwic2V0VG9rZW4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJvblN1Y2Nlc3MiLCJkYXRhIiwicHVzaCIsInRvYXN0Iiwic3VjY2VzcyIsImF1dG9DbG9zZSIsIk1pbmltYWxUZW1wbGF0ZSIsImNsYXNzTmFtZSIsIk1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJkaXYiLCJoMSIsInAiLCJUcmFucyIsImkxOG5LZXkiLCJMaW5rIiwidG8iLCJiciIsIkJ1dHRvbiIsImVsIiwiYnV0dG9uU3R5bGUiLCJGb3JtIiwibWV0aG9kIiwiYWN0aW9uIiwicmVkaXJlY3QiLCJQYXNzd29yZCIsImxhYmVsIiwibmFtZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwiQ29uZmlybVBhc3N3b3JkIiwiSGlk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