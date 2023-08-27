import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import Minimal from "../../templates/Minimal";
import Button from "../../elements/Button";
import Meta from "../../utilities/Meta";
import "./index.scss";
var baseClass = "logout";
var Logout = function(props) {
    var inactivity = props.inactivity;
    var logOut = useAuth().logOut;
    var _useConfig = useConfig(), admin = _useConfig.routes.admin;
    var t = useTranslation("authentication").t;
    // Fetch 'redirect' from the query string which denotes the URL the user originally tried to visit. This is set in the Routes.tsx file when a user tries to access a protected route and is redirected to the login screen.
    var query = new URLSearchParams(useLocation().search);
    var redirect = query.get("redirect");
    useEffect(function() {
        logOut();
    }, [
        logOut
    ]);
    return /*#__PURE__*/ React.createElement(Minimal, {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: t("logout"),
        description: t("logoutUser"),
        keywords: t("logout")
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, inactivity && /*#__PURE__*/ React.createElement("h2", null, t("loggedOutInactivity")), !inactivity && /*#__PURE__*/ React.createElement("h2", null, t("loggedOutSuccessfully")), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(Button, {
        el: "anchor",
        buttonStyle: "secondary",
        url: "".concat(admin, "/login").concat(redirect && redirect.length > 0 ? "?redirect=".concat(encodeURIComponent(redirect)) : "")
    }, t("logBackIn"))));
};
export default Logout;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xvZ291dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IE1pbmltYWwgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsb2dvdXQnO1xuXG5jb25zdCBMb2dvdXQ6IFJlYWN0LkZDPHtpbmFjdGl2aXR5PzogYm9vbGVhbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW5hY3Rpdml0eSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBsb2dPdXQgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJyk7XG5cbiAgLy8gRmV0Y2ggJ3JlZGlyZWN0JyBmcm9tIHRoZSBxdWVyeSBzdHJpbmcgd2hpY2ggZGVub3RlcyB0aGUgVVJMIHRoZSB1c2VyIG9yaWdpbmFsbHkgdHJpZWQgdG8gdmlzaXQuIFRoaXMgaXMgc2V0IGluIHRoZSBSb3V0ZXMudHN4IGZpbGUgd2hlbiBhIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGEgcHJvdGVjdGVkIHJvdXRlIGFuZCBpcyByZWRpcmVjdGVkIHRvIHRoZSBsb2dpbiBzY3JlZW4uXG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VMb2NhdGlvbigpLnNlYXJjaCk7XG4gIGNvbnN0IHJlZGlyZWN0ID0gcXVlcnkuZ2V0KCdyZWRpcmVjdCcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9nT3V0KCk7XG4gIH0sIFtsb2dPdXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxNaW5pbWFsIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPXt0KCdsb2dvdXQnKX1cbiAgICAgICAgZGVzY3JpcHRpb249e3QoJ2xvZ291dFVzZXInKX1cbiAgICAgICAga2V5d29yZHM9e3QoJ2xvZ291dCcpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIHtpbmFjdGl2aXR5ICYmIChcbiAgICAgICAgICA8aDI+e3QoJ2xvZ2dlZE91dEluYWN0aXZpdHknKX08L2gyPlxuICAgICAgICApfVxuICAgICAgICB7IWluYWN0aXZpdHkgJiYgKFxuICAgICAgICAgIDxoMj57dCgnbG9nZ2VkT3V0U3VjY2Vzc2Z1bGx5Jyl9PC9oMj5cbiAgICAgICAgKX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBlbD1cImFuY2hvclwiXG4gICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIHVybD17YCR7YWRtaW59L2xvZ2luJHtyZWRpcmVjdCAmJiByZWRpcmVjdC5sZW5ndGggPiAwID8gYD9yZWRpcmVjdD0ke2VuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdCl9YCA6ICcnfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7dCgnbG9nQmFja0luJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9NaW5pbWFsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VMb2NhdGlvbiIsInVzZUNvbmZpZyIsInVzZUF1dGgiLCJNaW5pbWFsIiwiQnV0dG9uIiwiTWV0YSIsImJhc2VDbGFzcyIsIkxvZ291dCIsInByb3BzIiwiaW5hY3Rpdml0eSIsImxvZ091dCIsInJvdXRlcyIsImFkbWluIiwidCIsInF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwicmVkaXJlY3QiLCJnZXQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJkaXYiLCJoMiIsImJyIiwiZWwiLCJidXR0b25TdHlsZSIsInVybCIsImxlbmd0aCIsImVuY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsU0FBUyxRQUFRLFFBQVE7QUFDekMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxXQUFXLFFBQVEsbUJBQW1CO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsU0FBU0MsT0FBTyxRQUFRLHVCQUF1QjtBQUMvQyxPQUFPQyxhQUFhLDBCQUEwQjtBQUM5QyxPQUFPQyxZQUFZLHdCQUF3QjtBQUMzQyxPQUFPQyxVQUFVLHVCQUF1QjtBQUV4QyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxTQUEyQyxTQUFDQztJQUNoRCxJQUFNLEFBQUVDLGFBQWVELE1BQWZDO0lBRVIsSUFBTSxBQUFFQyxTQUFXUixVQUFYUTtJQUNSLElBQThCVCxhQUFBQSxhQUF0QlUsQUFBVUMsUUFBWVgsV0FBdEJVLE9BQVVDO0lBQ2xCLElBQU0sQUFBRUMsSUFBTWQsZUFBZSxrQkFBckJjO0lBRVIsMk5BQTJOO0lBQzNOLElBQU1DLFFBQVEsSUFBSUMsZ0JBQWdCZixjQUFjZ0IsTUFBTTtJQUN0RCxJQUFNQyxXQUFXSCxNQUFNSSxHQUFHLENBQUM7SUFFM0JwQixVQUFVO1FBQ1JZO0lBQ0YsR0FBRztRQUFDQTtLQUFPO0lBRVgscUJBQ0Usb0JBQUNQO1FBQVFnQixXQUFXYjtxQkFDbEIsb0JBQUNEO1FBQ0NlLE9BQU9QLEVBQUU7UUFDVFEsYUFBYVIsRUFBRTtRQUNmUyxVQUFVVCxFQUFFO3NCQUVkLG9CQUFDVTtRQUFJSixXQUFXLEFBQUMsR0FBWSxPQUFWYixXQUFVO09BQzFCRyw0QkFDQyxvQkFBQ2UsWUFBSVgsRUFBRSx5QkFFUixDQUFDSiw0QkFDQSxvQkFBQ2UsWUFBSVgsRUFBRSx5Q0FFVCxvQkFBQ1ksMkJBQ0Qsb0JBQUNyQjtRQUNDc0IsSUFBRztRQUNIQyxhQUFZO1FBQ1pDLEtBQUssQUFBQyxHQUFnQlgsT0FBZEwsT0FBTSxVQUEyRixPQUFuRkssWUFBWUEsU0FBU1ksTUFBTSxHQUFHLElBQUksQUFBQyxhQUF5QyxPQUE3QkMsbUJBQW1CYixhQUFjO09BRXJHSixFQUFFO0FBS2I7QUFFQSxlQUFlTixPQUFPIn0=