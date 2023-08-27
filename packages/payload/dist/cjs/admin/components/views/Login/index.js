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
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _Logo = /*#__PURE__*/ _interop_require_default(require("../../graphics/Logo"));
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
var _Email = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Email"));
var _Password = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Password"));
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
var _Loading = require("../../elements/Loading");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "login";
var Login = function() {
    var history = (0, _reactrouterdom.useHistory)();
    var t = (0, _reacti18next.useTranslation)("authentication").t;
    var _useAuth = (0, _Auth.useAuth)(), user = _useAuth.user, setToken = _useAuth.setToken;
    var config = (0, _Config.useConfig)();
    var _config_admin = config.admin, userSlug = _config_admin.user, logoutRoute = _config_admin.logoutRoute, autoLogin = _config_admin.autoLogin, tmp = _config_admin.components, _ref = tmp === void 0 ? {} : tmp, beforeLogin = _ref.beforeLogin, afterLogin = _ref.afterLogin, serverURL = config.serverURL, _config_routes = config.routes, admin = _config_routes.admin, api = _config_routes.api, collections = config.collections;
    var collection = collections.find(function(param) {
        var slug = param.slug;
        return slug === userSlug;
    });
    // Fetch 'redirect' from the query string which denotes the URL the user originally tried to visit. This is set in the Routes.tsx file when a user tries to access a protected route and is redirected to the login screen.
    var query = new URLSearchParams((0, _reactrouterdom.useLocation)().search);
    var redirect = query.get("redirect");
    var onSuccess = function(data) {
        if (data.token) {
            setToken(data.token);
            // Ensure the redirect always starts with the admin route, and concatenate the redirect path
            history.push(admin + (redirect || ""));
        }
    };
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, user ? // Logout
    /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: t("login"),
        description: t("loginUser"),
        keywords: t("login")
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("alreadyLoggedIn")), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
        i18nKey: "loggedIn",
        t: t
    }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: "".concat(admin).concat(logoutRoute)
    }, t("logOut")))), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        el: "link",
        buttonStyle: "secondary",
        to: admin
    }, t("general:backToDashboard")))) : // Login
    /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: t("login"),
        description: t("loginUser"),
        keywords: t("login")
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__brand")
    }, /*#__PURE__*/ _react.default.createElement(_Logo.default, null)), Array.isArray(beforeLogin) && beforeLogin.map(function(Component, i) {
        return /*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        });
    }), !collection.auth.disableLocalStrategy && /*#__PURE__*/ _react.default.createElement(_Form.default, {
        disableSuccessStatus: true,
        waitForAutocomplete: true,
        onSuccess: onSuccess,
        method: "post",
        action: "".concat(serverURL).concat(api, "/").concat(userSlug, "/login"),
        initialData: {
            email: autoLogin && autoLogin.prefillOnly ? autoLogin.email : undefined,
            password: autoLogin && autoLogin.prefillOnly ? autoLogin.password : undefined
        }
    }, /*#__PURE__*/ _react.default.createElement(_Loading.FormLoadingOverlayToggle, {
        action: "loading",
        name: "login-form"
    }), /*#__PURE__*/ _react.default.createElement(_Email.default, {
        label: t("general:email"),
        name: "email",
        admin: {
            autoComplete: "email"
        },
        required: true
    }), /*#__PURE__*/ _react.default.createElement(_Password.default, {
        label: t("general:password"),
        name: "password",
        autoComplete: "off",
        required: true
    }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: "".concat(admin, "/forgot")
    }, t("forgotPasswordQuestion")), /*#__PURE__*/ _react.default.createElement(_Submit.default, null, t("login"))), Array.isArray(afterLogin) && afterLogin.map(function(Component, i) {
        return /*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        });
    })));
};
var _default = Login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xvZ2luL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vZ3JhcGhpY3MvTG9nbyc7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nO1xuaW1wb3J0IEVtYWlsIGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0VtYWlsJztcbmltcG9ydCBQYXNzd29yZCBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9QYXNzd29yZCc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnO1xuaW1wb3J0IHsgRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvTG9hZGluZyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2xvZ2luJztcblxuY29uc3QgTG9naW46IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuICBjb25zdCB7IHVzZXIsIHNldFRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7XG4gICAgYWRtaW46IHtcbiAgICAgIHVzZXI6IHVzZXJTbHVnLFxuICAgICAgbG9nb3V0Um91dGUsXG4gICAgICBhdXRvTG9naW4sXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGJlZm9yZUxvZ2luLFxuICAgICAgICBhZnRlckxvZ2luLFxuICAgICAgfSA9IHt9LFxuICAgIH0sXG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczoge1xuICAgICAgYWRtaW4sXG4gICAgICBhcGksXG4gICAgfSxcbiAgICBjb2xsZWN0aW9ucyxcbiAgfSA9IGNvbmZpZztcblxuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHVzZXJTbHVnKTtcblxuICAvLyBGZXRjaCAncmVkaXJlY3QnIGZyb20gdGhlIHF1ZXJ5IHN0cmluZyB3aGljaCBkZW5vdGVzIHRoZSBVUkwgdGhlIHVzZXIgb3JpZ2luYWxseSB0cmllZCB0byB2aXNpdC4gVGhpcyBpcyBzZXQgaW4gdGhlIFJvdXRlcy50c3ggZmlsZSB3aGVuIGEgdXNlciB0cmllcyB0byBhY2Nlc3MgYSBwcm90ZWN0ZWQgcm91dGUgYW5kIGlzIHJlZGlyZWN0ZWQgdG8gdGhlIGxvZ2luIHNjcmVlbi5cbiAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZUxvY2F0aW9uKCkuc2VhcmNoKTtcbiAgY29uc3QgcmVkaXJlY3QgPSBxdWVyeS5nZXQoJ3JlZGlyZWN0Jyk7XG5cblxuICBjb25zdCBvblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLnRva2VuKSB7XG4gICAgICBzZXRUb2tlbihkYXRhLnRva2VuKTtcblxuICAgICAgLy8gRW5zdXJlIHRoZSByZWRpcmVjdCBhbHdheXMgc3RhcnRzIHdpdGggdGhlIGFkbWluIHJvdXRlLCBhbmQgY29uY2F0ZW5hdGUgdGhlIHJlZGlyZWN0IHBhdGhcbiAgICAgIGhpc3RvcnkucHVzaChhZG1pbiArIChyZWRpcmVjdCB8fCAnJykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHt1c2VyID8gKFxuICAgICAgICAvLyBMb2dvdXRcbiAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgICAgPE1ldGFcbiAgICAgICAgICAgIHRpdGxlPXt0KCdsb2dpbicpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2xvZ2luVXNlcicpfVxuICAgICAgICAgICAga2V5d29yZHM9e3QoJ2xvZ2luJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICAgICAgPGgxPnt0KCdhbHJlYWR5TG9nZ2VkSW4nKX08L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJsb2dnZWRJblwiXG4gICAgICAgICAgICAgICAgdD17dH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgJHthZG1pbn0ke2xvZ291dFJvdXRlfWB9Pnt0KCdsb2dPdXQnKX08L0xpbms+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICB0bz17YWRtaW59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmJhY2tUb0Rhc2hib2FyZCcpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgKSA6IChcbiAgICAgICAgLy8gTG9naW5cbiAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgICAgPE1ldGFcbiAgICAgICAgICAgIHRpdGxlPXt0KCdsb2dpbicpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2xvZ2luVXNlcicpfVxuICAgICAgICAgICAga2V5d29yZHM9e3QoJ2xvZ2luJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnJhbmRgfT5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkoYmVmb3JlTG9naW4pICYmIGJlZm9yZUxvZ2luLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICAgIHshY29sbGVjdGlvbi5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5ICYmIChcbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIGRpc2FibGVTdWNjZXNzU3RhdHVzXG4gICAgICAgICAgICAgIHdhaXRGb3JBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgb25TdWNjZXNzPXtvblN1Y2Nlc3N9XG4gICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICBhY3Rpb249e2Ake3NlcnZlclVSTH0ke2FwaX0vJHt1c2VyU2x1Z30vbG9naW5gfVxuICAgICAgICAgICAgICBpbml0aWFsRGF0YT17e1xuICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRvTG9naW4gJiYgYXV0b0xvZ2luLnByZWZpbGxPbmx5ID8gYXV0b0xvZ2luLmVtYWlsIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRvTG9naW4gJiYgYXV0b0xvZ2luLnByZWZpbGxPbmx5ID8gYXV0b0xvZ2luLnBhc3N3b3JkIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlXG4gICAgICAgICAgICAgICAgYWN0aW9uPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvZ2luLWZvcm1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8RW1haWxcbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnZ2VuZXJhbDplbWFpbCcpfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYWRtaW49e3sgYXV0b0NvbXBsZXRlOiAnZW1haWwnIH19XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6cGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2Ake2FkbWlufS9mb3Jnb3RgfT5cbiAgICAgICAgICAgICAgICB7dCgnZm9yZ290UGFzc3dvcmRRdWVzdGlvbicpfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxGb3JtU3VibWl0Pnt0KCdsb2dpbicpfTwvRm9ybVN1Ym1pdD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KGFmdGVyTG9naW4pICYmIGFmdGVyTG9naW4ubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuXG4gICAgICApfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJMb2dpbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlQXV0aCIsInVzZXIiLCJzZXRUb2tlbiIsImNvbmZpZyIsInVzZUNvbmZpZyIsImFkbWluIiwidXNlclNsdWciLCJsb2dvdXRSb3V0ZSIsImF1dG9Mb2dpbiIsImNvbXBvbmVudHMiLCJiZWZvcmVMb2dpbiIsImFmdGVyTG9naW4iLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJjb2xsZWN0aW9ucyIsImNvbGxlY3Rpb24iLCJmaW5kIiwic2x1ZyIsInF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwidXNlTG9jYXRpb24iLCJzZWFyY2giLCJyZWRpcmVjdCIsImdldCIsIm9uU3VjY2VzcyIsImRhdGEiLCJ0b2tlbiIsInB1c2giLCJSZWFjdCIsIkZyYWdtZW50IiwiTWluaW1hbFRlbXBsYXRlIiwiY2xhc3NOYW1lIiwiTWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImRpdiIsImgxIiwicCIsIlRyYW5zIiwiaTE4bktleSIsIkxpbmsiLCJ0byIsImJyIiwiQnV0dG9uIiwiZWwiLCJidXR0b25TdHlsZSIsIkxvZ28iLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJDb21wb25lbnQiLCJpIiwia2V5IiwiYXV0aCIsImRpc2FibGVMb2NhbFN0cmF0ZWd5IiwiRm9ybSIsImRpc2FibGVTdWNjZXNzU3RhdHVzIiwid2FpdEZvckF1dG9jb21wbGV0ZSIsIm1ldGhvZCIsImFjdGlvbiIsImluaXRpYWxEYXRhIiwiZW1haWwiLCJwcmVmaWxsT25seSIsInVuZGVmaW5lZCIsInBhc3N3b3JkIiwiRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlIiwibmFtZSIsIkVtYWlsIiwibGFiZWwiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsIlBhc3N3b3JkIiwiRm9ybVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkE4SUE7OztlQUFBOzs7NERBOUlrQjs4QkFDNEI7NEJBQ1I7c0JBQ1o7b0JBQ0Y7MkRBQ1A7OERBQ1c7MkRBQ1g7NERBQ0M7K0RBQ0c7NkRBQ0U7NkRBQ0o7MkRBQ0Y7dUJBQ3dCO1FBRWxDOzs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLFFBQWtCO0lBQ3RCLElBQU1DLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLElBQU0sQUFBRUMsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxrQkFBckJEO0lBQ1IsSUFBMkJFLFdBQUFBLElBQUFBLGFBQU8sS0FBMUJDLE9BQW1CRCxTQUFuQkMsTUFBTUMsV0FBYUYsU0FBYkU7SUFDZCxJQUFNQyxTQUFTQyxJQUFBQSxpQkFBUztJQUN4QixvQkFnQklELE9BZkZFLE9BQ0VKLEFBQU1LLHlCQUFOTCxNQUNBTSw0QkFBQUEsYUFDQUMsMEJBQUFBLFdBQ1ksb0JBQVpDLG1CQUFZLGlCQUdSLENBQUMsSUFITyxLQUNWQyxtQkFBQUEsYUFDQUMsa0JBQUFBLFlBR0pDLFlBTUVULE9BTkZTLDRCQU1FVCxPQUxGVSxRQUNFUix1QkFBQUEsT0FDQVMscUJBQUFBLEtBRUZDLGNBQ0VaLE9BREZZO0lBR0YsSUFBTUMsYUFBYUQsWUFBWUUsSUFBSSxDQUFDO1lBQUdDLGFBQUFBO2VBQVdBLFNBQVNaOztJQUUzRCwyTkFBMk47SUFDM04sSUFBTWEsUUFBUSxJQUFJQyxnQkFBZ0JDLElBQUFBLDJCQUFXLElBQUdDLE1BQU07SUFDdEQsSUFBTUMsV0FBV0osTUFBTUssR0FBRyxDQUFDO0lBRzNCLElBQU1DLFlBQVksU0FBQ0M7UUFDakIsSUFBSUEsS0FBS0MsS0FBSyxFQUFFO1lBQ2R6QixTQUFT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