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
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _LogOut = /*#__PURE__*/ _interop_require_default(require("../../icons/LogOut"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "nav";
var DefaultLogout = function() {
    var t = (0, _reacti18next.useTranslation)("authentication").t;
    var config = (0, _Config.useConfig)();
    var admin = config.routes.admin, _config_admin = config.admin, logoutRoute = _config_admin.logoutRoute, logout = _config_admin.components.logout;
    return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: "".concat(admin).concat(logoutRoute),
        className: "".concat(baseClass, "__log-out"),
        "aria-label": t("logOut")
    }, /*#__PURE__*/ _react.default.createElement(_LogOut.default, null));
};
var Logout = function() {
    var _useConfig = (0, _Config.useConfig)(), tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.logout, _ref2 = tmp2 === void 0 ? {
        Button: undefined
    } : tmp2, CustomLogout = _ref2.Button;
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomLogout,
        DefaultComponent: DefaultLogout
    });
};
var _default = Logout;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvZ291dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgTG9nT3V0IGZyb20gJy4uLy4uL2ljb25zL0xvZ091dCc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICduYXYnO1xuXG5jb25zdCBEZWZhdWx0TG9nb3V0ID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3Qge1xuICAgIHJvdXRlczogeyBhZG1pbiB9LFxuICAgIGFkbWluOiB7XG4gICAgICBsb2dvdXRSb3V0ZSxcbiAgICAgIGNvbXBvbmVudHM6IHsgbG9nb3V0IH0sXG4gICAgfSxcbiAgfSA9IGNvbmZpZztcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e2Ake2FkbWlufSR7bG9nb3V0Um91dGV9YH1cbiAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbG9nLW91dGB9XG4gICAgICBhcmlhLWxhYmVsPXt0KCdsb2dPdXQnKX1cbiAgICA+XG4gICAgICA8TG9nT3V0IC8+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuY29uc3QgTG9nb3V0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGxvZ291dDogeyBCdXR0b246IEN1c3RvbUxvZ291dCB9ID0ge1xuICAgICAgICAgIEJ1dHRvbjogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Mb2dvdXR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TG9nb3V0fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQ7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRGVmYXVsdExvZ291dCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNvbmZpZyIsInVzZUNvbmZpZyIsInJvdXRlcyIsImFkbWluIiwibG9nb3V0Um91dGUiLCJjb21wb25lbnRzIiwibG9nb3V0IiwiTGluayIsInRvIiwiY2xhc3NOYW1lIiwiYXJpYS1sYWJlbCIsIkxvZ091dCIsIkxvZ291dCIsIkJ1dHRvbiIsInVuZGVmaW5lZCIsIkN1c3RvbUxvZ291dCIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaURBOzs7ZUFBQTs7OzREQWpEa0I7OEJBQ0c7NEJBQ1U7c0JBQ0w7NEVBQ1E7NkRBQ2Y7Ozs7OztBQUVuQixJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGdCQUFnQjtJQUNwQixJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsa0JBQXJCRDtJQUNSLElBQU1FLFNBQVNDLElBQUFBLGlCQUFTO0lBQ3hCLElBQ0VDLEFBQVVDLFFBS1JILE9BTEZFLE9BQVVDLHVCQUtSSCxPQUpGRyxPQUNFQyw0QkFBQUEsYUFDQUMsQUFBY0MsdUJBQWRELFdBQWNDO0lBR2xCLHFCQUNFLDZCQUFDQyxvQkFBSTtRQUNIQyxJQUFJLEFBQUMsR0FBVUosT0FBUkQsT0FBb0IsT0FBWkM7UUFDZkssV0FBVyxBQUFDLEdBQVksT0FBVmIsV0FBVTtRQUN4QmMsY0FBWVosRUFBRTtxQkFFZCw2QkFBQ2EsZUFBTTtBQUdiO0FBRUEsSUFBTUMsU0FBbUI7SUFDdkIsSUFRSVgsYUFBQUEsSUFBQUEsaUJBQVMsS0FQSixNQU9MQSxXQVBGRSxjQUFPLGlCQU1ILENBQUMsSUFORSxLQUNPLFlBQVpFLG9CQUFZLGtCQUlSLENBQUMsSUFKTyxNQUNGLGFBQVJDLGdCQUFRLGtCQUEyQjtRQUNqQ08sUUFBUUM7SUFDVixJQUZRLE1BQUVELEFBQVFFLHFCQUFSRjtJQU9oQixxQkFDRSw2QkFBQ0csOEJBQXFCO1FBQ3BCQyxpQkFBaUJGO1FBQ2pCRyxrQkFBa0JyQjs7QUFHeEI7SUFFQSxXQUFlZSJ9