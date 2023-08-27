"use client";
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
var _payloadconfig = /*#__PURE__*/ _interop_require_default(require("payload-config"));
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactrouterdom = require("react-router-dom");
var _scrollinfo = require("@faceless-ui/scroll-info");
var _windowinfo = require("@faceless-ui/window-info");
var _modal = require("@faceless-ui/modal");
var _reacttoastify = require("react-toastify");
var _Auth = require("./components/utilities/Auth");
var _Config = require("./components/utilities/Config");
var _Preferences = require("./components/utilities/Preferences");
var _CustomProvider = require("./components/utilities/CustomProvider");
var _SearchParams = require("./components/utilities/SearchParams");
var _Locale = require("./components/utilities/Locale");
var _Routes = /*#__PURE__*/ _interop_require_default(require("./components/Routes"));
var _StepNav = require("./components/elements/StepNav");
var _Theme = require("./components/utilities/Theme");
var _I18n = require("./components/utilities/I18n");
var _LoadingOverlay = require("./components/utilities/LoadingOverlay");
require("./scss/app.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Root = function() {
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Config.ConfigProvider, {
        config: _payloadconfig.default
    }, /*#__PURE__*/ _react.default.createElement(_I18n.I18n, null), /*#__PURE__*/ _react.default.createElement(_windowinfo.WindowInfoProvider, {
        breakpoints: {
            xs: "(max-width: 400px)",
            s: "(max-width: 768px)",
            m: "(max-width: 1024px)",
            l: "(max-width: 1440px)"
        }
    }, /*#__PURE__*/ _react.default.createElement(_scrollinfo.ScrollInfoProvider, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.BrowserRouter, null, /*#__PURE__*/ _react.default.createElement(_modal.ModalProvider, {
        classPrefix: "payload",
        zIndex: "var(--z-modal)",
        transTime: 0
    }, /*#__PURE__*/ _react.default.createElement(_Auth.AuthProvider, null, /*#__PURE__*/ _react.default.createElement(_Preferences.PreferencesProvider, null, /*#__PURE__*/ _react.default.createElement(_Theme.ThemeProvider, null, /*#__PURE__*/ _react.default.createElement(_SearchParams.SearchParamsProvider, null, /*#__PURE__*/ _react.default.createElement(_Locale.LocaleProvider, null, /*#__PURE__*/ _react.default.createElement(_StepNav.StepNavProvider, null, /*#__PURE__*/ _react.default.createElement(_LoadingOverlay.LoadingOverlayProvider, null, /*#__PURE__*/ _react.default.createElement(_CustomProvider.CustomProvider, null, /*#__PURE__*/ _react.default.createElement(_Routes.default, null))))))), /*#__PURE__*/ _react.default.createElement(_modal.ModalContainer, null)))))))), /*#__PURE__*/ _react.default.createElement(_reacttoastify.ToastContainer, {
        position: "bottom-center",
        transition: _reacttoastify.Slide,
        icon: false
    }));
};
var _default = Root;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9Sb290LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1pZ25vcmUgLSBuZWVkIHRvIGRvIHRoaXMgYmVjYXVzZSB0aGlzIGZpbGUgZG9lc24ndCBhY3R1YWxseSBleGlzdFxuaW1wb3J0IGNvbmZpZyBmcm9tICdwYXlsb2FkLWNvbmZpZyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFNjcm9sbEluZm9Qcm92aWRlciB9IGZyb20gJ0BmYWNlbGVzcy11aS9zY3JvbGwtaW5mbyc7XG5pbXBvcnQgeyBXaW5kb3dJbmZvUHJvdmlkZXIgfSBmcm9tICdAZmFjZWxlc3MtdWkvd2luZG93LWluZm8nO1xuaW1wb3J0IHsgTW9kYWxQcm92aWRlciwgTW9kYWxDb250YWluZXIgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIFNsaWRlIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB7IENvbmZpZ1Byb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgUHJlZmVyZW5jZXNQcm92aWRlciB9IGZyb20gJy4vY29tcG9uZW50cy91dGlsaXRpZXMvUHJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgQ3VzdG9tUHJvdmlkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdXRpbGl0aWVzL0N1c3RvbVByb3ZpZGVyJztcbmltcG9ydCB7IFNlYXJjaFBhcmFtc1Byb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy9TZWFyY2hQYXJhbXMnO1xuaW1wb3J0IHsgTG9jYWxlUHJvdmlkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgUm91dGVzIGZyb20gJy4vY29tcG9uZW50cy9Sb3V0ZXMnO1xuaW1wb3J0IHsgU3RlcE5hdlByb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL2VsZW1lbnRzL1N0ZXBOYXYnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJy4vY29tcG9uZW50cy91dGlsaXRpZXMvVGhlbWUnO1xuaW1wb3J0IHsgSTE4biB9IGZyb20gJy4vY29tcG9uZW50cy91dGlsaXRpZXMvSTE4bic7XG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheVByb3ZpZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2FkaW5nT3ZlcmxheSc7XG5cbmltcG9ydCAnLi9zY3NzL2FwcC5zY3NzJztcblxuY29uc3QgUm9vdCA9ICgpID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxDb25maWdQcm92aWRlciBjb25maWc9e2NvbmZpZ30+XG4gICAgICA8STE4biAvPlxuICAgICAgPFdpbmRvd0luZm9Qcm92aWRlciBicmVha3BvaW50cz17e1xuICAgICAgICB4czogJyhtYXgtd2lkdGg6IDQwMHB4KScsXG4gICAgICAgIHM6ICcobWF4LXdpZHRoOiA3NjhweCknLFxuICAgICAgICBtOiAnKG1heC13aWR0aDogMTAyNHB4KScsXG4gICAgICAgIGw6ICcobWF4LXdpZHRoOiAxNDQwcHgpJyxcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxTY3JvbGxJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgIDxNb2RhbFByb3ZpZGVyXG4gICAgICAgICAgICAgIGNsYXNzUHJlZml4PVwicGF5bG9hZFwiXG4gICAgICAgICAgICAgIHpJbmRleD1cInZhcigtLXotbW9kYWwpXCJcbiAgICAgICAgICAgICAgdHJhbnNUaW1lPXswfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDxQcmVmZXJlbmNlc1Byb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hQYXJhbXNQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxlUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RlcE5hdlByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ092ZXJsYXlQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DdXN0b21Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2FkaW5nT3ZlcmxheVByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGVwTmF2UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9TZWFyY2hQYXJhbXNQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgIDxNb2RhbENvbnRhaW5lciAvPlxuICAgICAgICAgICAgICAgIDwvUHJlZmVyZW5jZXNQcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICA8L01vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDwvU2Nyb2xsSW5mb1Byb3ZpZGVyPlxuICAgICAgPC9XaW5kb3dJbmZvUHJvdmlkZXI+XG4gICAgPC9Db25maWdQcm92aWRlcj5cbiAgICA8VG9hc3RDb250YWluZXJcbiAgICAgIHBvc2l0aW9uPVwiYm90dG9tLWNlbnRlclwiXG4gICAgICB0cmFuc2l0aW9uPXtTbGlkZX1cbiAgICAgIGljb249e2ZhbHNlfVxuICAgIC8+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb290O1xuIl0sIm5hbWVzIjpbIlJvb3QiLCJSZWFjdCIsIkZyYWdtZW50IiwiQ29uZmlnUHJvdmlkZXIiLCJjb25maWciLCJJMThuIiwiV2luZG93SW5mb1Byb3ZpZGVyIiwiYnJlYWtwb2ludHMiLCJ4cyIsInMiLCJtIiwibCIsIlNjcm9sbEluZm9Qcm92aWRlciIsIlJvdXRlciIsIk1vZGFsUHJvdmlkZXIiLCJjbGFzc1ByZWZpeCIsInpJbmRleCIsInRyYW5zVGltZSIsIkF1dGhQcm92aWRlciIsIlByZWZlcmVuY2VzUHJvdmlkZXIiLCJUaGVtZVByb3ZpZGVyIiwiU2VhcmNoUGFyYW1zUHJvdmlkZXIiLCJMb2NhbGVQcm92aWRlciIsIlN0ZXBOYXZQcm92aWRlciIsIkxvYWRpbmdPdmVybGF5UHJvdmlkZXIiLCJDdXN0b21Qcm92aWRlciIsIlJvdXRlcyIsIk1vZGFsQ29udGFpbmVyIiwiVG9hc3RDb250YWluZXIiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJTbGlkZSIsImljb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OzsrQkEwRUE7OztlQUFBOzs7b0VBdEVtQjs0REFDRDs4QkFDc0I7MEJBQ0w7MEJBQ0E7cUJBQ1c7NkJBQ1I7b0JBQ1Q7c0JBQ0U7MkJBQ0s7OEJBQ0w7NEJBQ007c0JBQ047NkRBQ1o7dUJBQ2E7cUJBQ0Y7b0JBQ1Q7OEJBQ2tCO1FBRWhDOzs7Ozs7QUFFUCxJQUFNQSxPQUFPO3lCQUNYLDZCQUFDQyxjQUFLLENBQUNDLFFBQVEsc0JBQ2IsNkJBQUNDLHNCQUFjO1FBQUNDLFFBQVFBLHNCQUFNO3FCQUM1Qiw2QkFBQ0MsVUFBSSx1QkFDTCw2QkFBQ0MsOEJBQWtCO1FBQUNDLGFBQWE7WUFDL0JDLElBQUk7WUFDSkMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLEdBQUc7UUFDTDtxQkFFRSw2QkFBQ0MsOEJBQWtCLHNCQUNqQiw2QkFBQ0MsNkJBQU0sc0JBQ0wsNkJBQUNDLG9CQUFhO1FBQ1pDLGFBQVk7UUFDWkMsUUFBTztRQUNQQyxXQUFXO3FCQUVYLDZCQUFDQyxrQkFBWSxzQkFDWCw2QkFBQ0MsZ0NBQW1CLHNCQUNsQiw2QkFBQ0Msb0JBQWEsc0JBQ1osNkJBQUNDLGtDQUFvQixzQkFDbkIsNkJBQUNDLHNCQUFjLHNCQUNiLDZCQUFDQyx3QkFBZSxzQkFDZCw2QkFBQ0Msc0NBQXNCLHNCQUNyQiw2QkFBQ0MsOEJBQWMsc0JBQ2IsNkJBQUNDLGVBQU0sNkJBT25CLDZCQUFDQyxxQkFBYyw4QkFRN0IsNkJBQUNDLDZCQUFjO1FBQ2JDLFVBQVM7UUFDVEMsWUFBWUMsb0JBQUs7UUFDakJDLE1BQU07OztJQUtaLFdBQWVoQyJ9