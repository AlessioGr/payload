import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import Logo from "../../graphics/Logo";
import MinimalTemplate from "../../templates/Minimal";
import Form from "../../forms/Form";
import Email from "../../forms/field-types/Email";
import Password from "../../forms/field-types/Password";
import FormSubmit from "../../forms/Submit";
import Button from "../../elements/Button";
import Meta from "../../utilities/Meta";
import { FormLoadingOverlayToggle } from "../../elements/Loading";
import "./index.scss";
var baseClass = "login";
var Login = function() {
    var history = useHistory();
    var t = useTranslation("authentication").t;
    var _useAuth = useAuth(), user = _useAuth.user, setToken = _useAuth.setToken;
    var config = useConfig();
    var _config_admin = config.admin, userSlug = _config_admin.user, logoutRoute = _config_admin.logoutRoute, autoLogin = _config_admin.autoLogin, tmp = _config_admin.components, _ref = tmp === void 0 ? {} : tmp, beforeLogin = _ref.beforeLogin, afterLogin = _ref.afterLogin, serverURL = config.serverURL, _config_routes = config.routes, admin = _config_routes.admin, api = _config_routes.api, collections = config.collections;
    var collection = collections.find(function(param) {
        var slug = param.slug;
        return slug === userSlug;
    });
    // Fetch 'redirect' from the query string which denotes the URL the user originally tried to visit. This is set in the Routes.tsx file when a user tries to access a protected route and is redirected to the login screen.
    var query = new URLSearchParams(useLocation().search);
    var redirect = query.get("redirect");
    var onSuccess = function(data) {
        if (data.token) {
            setToken(data.token);
            // Ensure the redirect always starts with the admin route, and concatenate the redirect path
            history.push(admin + (redirect || ""));
        }
    };
    return /*#__PURE__*/ React.createElement(React.Fragment, null, user ? // Logout
    /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: t("login"),
        description: t("loginUser"),
        keywords: t("login")
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("h1", null, t("alreadyLoggedIn")), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement(Trans, {
        i18nKey: "loggedIn",
        t: t
    }, /*#__PURE__*/ React.createElement(Link, {
        to: "".concat(admin).concat(logoutRoute)
    }, t("logOut")))), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(Button, {
        el: "link",
        buttonStyle: "secondary",
        to: admin
    }, t("general:backToDashboard")))) : // Login
    /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: t("login"),
        description: t("loginUser"),
        keywords: t("login")
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__brand")
    }, /*#__PURE__*/ React.createElement(Logo, null)), Array.isArray(beforeLogin) && beforeLogin.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, {
            key: i
        });
    }), !collection.auth.disableLocalStrategy && /*#__PURE__*/ React.createElement(Form, {
        disableSuccessStatus: true,
        waitForAutocomplete: true,
        onSuccess: onSuccess,
        method: "post",
        action: "".concat(serverURL).concat(api, "/").concat(userSlug, "/login"),
        initialData: {
            email: autoLogin && autoLogin.prefillOnly ? autoLogin.email : undefined,
            password: autoLogin && autoLogin.prefillOnly ? autoLogin.password : undefined
        }
    }, /*#__PURE__*/ React.createElement(FormLoadingOverlayToggle, {
        action: "loading",
        name: "login-form"
    }), /*#__PURE__*/ React.createElement(Email, {
        label: t("general:email"),
        name: "email",
        admin: {
            autoComplete: "email"
        },
        required: true
    }), /*#__PURE__*/ React.createElement(Password, {
        label: t("general:password"),
        name: "password",
        autoComplete: "off",
        required: true
    }), /*#__PURE__*/ React.createElement(Link, {
        to: "".concat(admin, "/forgot")
    }, t("forgotPasswordQuestion")), /*#__PURE__*/ React.createElement(FormSubmit, null, t("login"))), Array.isArray(afterLogin) && afterLogin.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, {
            key: i
        });
    })));
};
export default Login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xvZ2luL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vLi4vZ3JhcGhpY3MvTG9nbyc7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nO1xuaW1wb3J0IEVtYWlsIGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0VtYWlsJztcbmltcG9ydCBQYXNzd29yZCBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9QYXNzd29yZCc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnO1xuaW1wb3J0IHsgRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvTG9hZGluZyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2xvZ2luJztcblxuY29uc3QgTG9naW46IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuICBjb25zdCB7IHVzZXIsIHNldFRva2VuIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7XG4gICAgYWRtaW46IHtcbiAgICAgIHVzZXI6IHVzZXJTbHVnLFxuICAgICAgbG9nb3V0Um91dGUsXG4gICAgICBhdXRvTG9naW4sXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGJlZm9yZUxvZ2luLFxuICAgICAgICBhZnRlckxvZ2luLFxuICAgICAgfSA9IHt9LFxuICAgIH0sXG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczoge1xuICAgICAgYWRtaW4sXG4gICAgICBhcGksXG4gICAgfSxcbiAgICBjb2xsZWN0aW9ucyxcbiAgfSA9IGNvbmZpZztcblxuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHVzZXJTbHVnKTtcblxuICAvLyBGZXRjaCAncmVkaXJlY3QnIGZyb20gdGhlIHF1ZXJ5IHN0cmluZyB3aGljaCBkZW5vdGVzIHRoZSBVUkwgdGhlIHVzZXIgb3JpZ2luYWxseSB0cmllZCB0byB2aXNpdC4gVGhpcyBpcyBzZXQgaW4gdGhlIFJvdXRlcy50c3ggZmlsZSB3aGVuIGEgdXNlciB0cmllcyB0byBhY2Nlc3MgYSBwcm90ZWN0ZWQgcm91dGUgYW5kIGlzIHJlZGlyZWN0ZWQgdG8gdGhlIGxvZ2luIHNjcmVlbi5cbiAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZUxvY2F0aW9uKCkuc2VhcmNoKTtcbiAgY29uc3QgcmVkaXJlY3QgPSBxdWVyeS5nZXQoJ3JlZGlyZWN0Jyk7XG5cblxuICBjb25zdCBvblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLnRva2VuKSB7XG4gICAgICBzZXRUb2tlbihkYXRhLnRva2VuKTtcblxuICAgICAgLy8gRW5zdXJlIHRoZSByZWRpcmVjdCBhbHdheXMgc3RhcnRzIHdpdGggdGhlIGFkbWluIHJvdXRlLCBhbmQgY29uY2F0ZW5hdGUgdGhlIHJlZGlyZWN0IHBhdGhcbiAgICAgIGhpc3RvcnkucHVzaChhZG1pbiArIChyZWRpcmVjdCB8fCAnJykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHt1c2VyID8gKFxuICAgICAgICAvLyBMb2dvdXRcbiAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgICAgPE1ldGFcbiAgICAgICAgICAgIHRpdGxlPXt0KCdsb2dpbicpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2xvZ2luVXNlcicpfVxuICAgICAgICAgICAga2V5d29yZHM9e3QoJ2xvZ2luJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICAgICAgPGgxPnt0KCdhbHJlYWR5TG9nZ2VkSW4nKX08L2gxPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICAgIGkxOG5LZXk9XCJsb2dnZWRJblwiXG4gICAgICAgICAgICAgICAgdD17dH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtgJHthZG1pbn0ke2xvZ291dFJvdXRlfWB9Pnt0KCdsb2dPdXQnKX08L0xpbms+XG4gICAgICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICB0bz17YWRtaW59XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmJhY2tUb0Rhc2hib2FyZCcpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgKSA6IChcbiAgICAgICAgLy8gTG9naW5cbiAgICAgICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgICAgPE1ldGFcbiAgICAgICAgICAgIHRpdGxlPXt0KCdsb2dpbicpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2xvZ2luVXNlcicpfVxuICAgICAgICAgICAga2V5d29yZHM9e3QoJ2xvZ2luJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnJhbmRgfT5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkoYmVmb3JlTG9naW4pICYmIGJlZm9yZUxvZ2luLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICAgIHshY29sbGVjdGlvbi5hdXRoLmRpc2FibGVMb2NhbFN0cmF0ZWd5ICYmIChcbiAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgIGRpc2FibGVTdWNjZXNzU3RhdHVzXG4gICAgICAgICAgICAgIHdhaXRGb3JBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgb25TdWNjZXNzPXtvblN1Y2Nlc3N9XG4gICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICBhY3Rpb249e2Ake3NlcnZlclVSTH0ke2FwaX0vJHt1c2VyU2x1Z30vbG9naW5gfVxuICAgICAgICAgICAgICBpbml0aWFsRGF0YT17e1xuICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRvTG9naW4gJiYgYXV0b0xvZ2luLnByZWZpbGxPbmx5ID8gYXV0b0xvZ2luLmVtYWlsIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBhdXRvTG9naW4gJiYgYXV0b0xvZ2luLnByZWZpbGxPbmx5ID8gYXV0b0xvZ2luLnBhc3N3b3JkIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlXG4gICAgICAgICAgICAgICAgYWN0aW9uPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxvZ2luLWZvcm1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8RW1haWxcbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnZ2VuZXJhbDplbWFpbCcpfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgYWRtaW49e3sgYXV0b0NvbXBsZXRlOiAnZW1haWwnIH19XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6cGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2Ake2FkbWlufS9mb3Jnb3RgfT5cbiAgICAgICAgICAgICAgICB7dCgnZm9yZ290UGFzc3dvcmRRdWVzdGlvbicpfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxGb3JtU3VibWl0Pnt0KCdsb2dpbicpfTwvRm9ybVN1Ym1pdD5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KGFmdGVyTG9naW4pICYmIGFmdGVyTG9naW4ubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuXG4gICAgICApfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VIaXN0b3J5IiwidXNlTG9jYXRpb24iLCJUcmFucyIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwidXNlQXV0aCIsIkxvZ28iLCJNaW5pbWFsVGVtcGxhdGUiLCJGb3JtIiwiRW1haWwiLCJQYXNzd29yZCIsIkZvcm1TdWJtaXQiLCJCdXR0b24iLCJNZXRhIiwiRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlIiwiYmFzZUNsYXNzIiwiTG9naW4iLCJoaXN0b3J5IiwidCIsInVzZXIiLCJzZXRUb2tlbiIsImNvbmZpZyIsImFkbWluIiwidXNlclNsdWciLCJsb2dvdXRSb3V0ZSIsImF1dG9Mb2dpbiIsImNvbXBvbmVudHMiLCJiZWZvcmVMb2dpbiIsImFmdGVyTG9naW4iLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJjb2xsZWN0aW9ucyIsImNvbGxlY3Rpb24iLCJmaW5kIiwic2x1ZyIsInF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwicmVkaXJlY3QiLCJnZXQiLCJvblN1Y2Nlc3MiLCJkYXRhIiwidG9rZW4iLCJwdXNoIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJkaXYiLCJoMSIsInAiLCJpMThuS2V5IiwidG8iLCJiciIsImVsIiwiYnV0dG9uU3R5bGUiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJDb21wb25lbnQiLCJpIiwia2V5IiwiYXV0aCIsImRpc2FibGVMb2NhbFN0cmF0ZWd5IiwiZGlzYWJsZVN1Y2Nlc3NTdGF0dXMiLCJ3YWl0Rm9yQXV0b2NvbXBsZXRlIiwibWV0aG9kIiwiYWN0aW9uIiwiaW5pdGlhbERhdGEiLCJlbWFpbCIsInByZWZpbGxPbmx5IiwidW5kZWZpbmVkIiwicGFzc3dvcmQiLCJuYW1lIiwibGFiZWwiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxXQUFXLFFBQVEsbUJBQW1CO0FBQ2pFLFNBQVNDLEtBQUssRUFBRUMsY0FBYyxRQUFRLGdCQUFnQjtBQUN0RCxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFDL0MsT0FBT0MsVUFBVSxzQkFBc0I7QUFDdkMsT0FBT0MscUJBQXFCLDBCQUEwQjtBQUN0RCxPQUFPQyxVQUFVLG1CQUFtQjtBQUNwQyxPQUFPQyxXQUFXLGdDQUFnQztBQUNsRCxPQUFPQyxjQUFjLG1DQUFtQztBQUN4RCxPQUFPQyxnQkFBZ0IscUJBQXFCO0FBQzVDLE9BQU9DLFlBQVksd0JBQXdCO0FBQzNDLE9BQU9DLFVBQVUsdUJBQXVCO0FBQ3hDLFNBQVNDLHdCQUF3QixRQUFRLHlCQUF5QjtBQUVsRSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxRQUFrQjtJQUN0QixJQUFNQyxVQUFVakI7SUFDaEIsSUFBTSxBQUFFa0IsSUFBTWYsZUFBZSxrQkFBckJlO0lBQ1IsSUFBMkJiLFdBQUFBLFdBQW5CYyxPQUFtQmQsU0FBbkJjLE1BQU1DLFdBQWFmLFNBQWJlO0lBQ2QsSUFBTUMsU0FBU2pCO0lBQ2Ysb0JBZ0JJaUIsT0FmRkMsT0FDRUgsQUFBTUkseUJBQU5KLE1BQ0FLLDRCQUFBQSxhQUNBQywwQkFBQUEsV0FDWSxvQkFBWkMsbUJBQVksaUJBR1IsQ0FBQyxJQUhPLEtBQ1ZDLG1CQUFBQSxhQUNBQyxrQkFBQUEsWUFHSkMsWUFNRVIsT0FORlEsNEJBTUVSLE9BTEZTLFFBQ0VSLHVCQUFBQSxP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