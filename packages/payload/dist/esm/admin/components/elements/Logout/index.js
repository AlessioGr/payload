import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import LogOut from "../../icons/LogOut";
var baseClass = "nav";
var DefaultLogout = function() {
    var t = useTranslation("authentication").t;
    var config = useConfig();
    var admin = config.routes.admin, _config_admin = config.admin, logoutRoute = _config_admin.logoutRoute, logout = _config_admin.components.logout;
    return /*#__PURE__*/ React.createElement(Link, {
        to: "".concat(admin).concat(logoutRoute),
        className: "".concat(baseClass, "__log-out"),
        "aria-label": t("logOut")
    }, /*#__PURE__*/ React.createElement(LogOut, null));
};
var Logout = function() {
    var _useConfig = useConfig(), tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.logout, _ref2 = tmp2 === void 0 ? {
        Button: undefined
    } : tmp2, CustomLogout = _ref2.Button;
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        CustomComponent: CustomLogout,
        DefaultComponent: DefaultLogout
    });
};
export default Logout;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvZ291dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgTG9nT3V0IGZyb20gJy4uLy4uL2ljb25zL0xvZ091dCc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICduYXYnO1xuXG5jb25zdCBEZWZhdWx0TG9nb3V0ID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3Qge1xuICAgIHJvdXRlczogeyBhZG1pbiB9LFxuICAgIGFkbWluOiB7XG4gICAgICBsb2dvdXRSb3V0ZSxcbiAgICAgIGNvbXBvbmVudHM6IHsgbG9nb3V0IH0sXG4gICAgfSxcbiAgfSA9IGNvbmZpZztcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e2Ake2FkbWlufSR7bG9nb3V0Um91dGV9YH1cbiAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbG9nLW91dGB9XG4gICAgICBhcmlhLWxhYmVsPXt0KCdsb2dPdXQnKX1cbiAgICA+XG4gICAgICA8TG9nT3V0IC8+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuY29uc3QgTG9nb3V0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGxvZ291dDogeyBCdXR0b246IEN1c3RvbUxvZ291dCB9ID0ge1xuICAgICAgICAgIEJ1dHRvbjogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Mb2dvdXR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TG9nb3V0fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJMb2dPdXQiLCJiYXNlQ2xhc3MiLCJEZWZhdWx0TG9nb3V0IiwidCIsImNvbmZpZyIsInJvdXRlcyIsImFkbWluIiwibG9nb3V0Um91dGUiLCJjb21wb25lbnRzIiwibG9nb3V0IiwidG8iLCJjbGFzc05hbWUiLCJhcmlhLWxhYmVsIiwiTG9nb3V0IiwiQnV0dG9uIiwidW5kZWZpbmVkIiwiQ3VzdG9tTG9nb3V0IiwiQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLElBQUksUUFBUSxtQkFBbUI7QUFDeEMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELE9BQU9DLDJCQUEyQix3Q0FBd0M7QUFDMUUsT0FBT0MsWUFBWSxxQkFBcUI7QUFFeEMsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxnQkFBZ0I7SUFDcEIsSUFBTSxBQUFFQyxJQUFNTixlQUFlLGtCQUFyQk07SUFDUixJQUFNQyxTQUFTTjtJQUNmLElBQ0VPLEFBQVVDLFFBS1JGLE9BTEZDLE9BQVVDLHVCQUtSRixPQUpGRSxPQUNFQyw0QkFBQUEsYUFDQUMsQUFBY0MsdUJBQWRELFdBQWNDO0lBR2xCLHFCQUNFLG9CQUFDYjtRQUNDYyxJQUFJLEFBQUMsR0FBVUgsT0FBUkQsT0FBb0IsT0FBWkM7UUFDZkksV0FBVyxBQUFDLEdBQVksT0FBVlYsV0FBVTtRQUN4QlcsY0FBWVQsRUFBRTtxQkFFZCxvQkFBQ0g7QUFHUDtBQUVBLElBQU1hLFNBQW1CO0lBQ3ZCLElBUUlmLGFBQUFBLGFBUEssTUFPTEEsV0FQRlEsY0FBTyxpQkFNSCxDQUFDLElBTkUsS0FDTyxZQUFaRSxvQkFBWSxrQkFJUixDQUFDLElBSk8sTUFDRixhQUFSQyxnQkFBUSxrQkFBMkI7UUFDakNLLFFBQVFDO0lBQ1YsSUFGUSxNQUFFRCxBQUFRRSxxQkFBUkY7SUFPaEIscUJBQ0Usb0JBQUNmO1FBQ0NrQixpQkFBaUJEO1FBQ2pCRSxrQkFBa0JoQjs7QUFHeEI7QUFFQSxlQUFlVyxPQUFPIn0=