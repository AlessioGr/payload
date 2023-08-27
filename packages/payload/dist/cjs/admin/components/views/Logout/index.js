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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _reactrouterdom = require("react-router-dom");
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var baseClass = "logout";
var Logout = function(props) {
    var inactivity = props.inactivity;
    var logOut = (0, _Auth.useAuth)().logOut;
    var _useConfig = (0, _Config.useConfig)(), admin = _useConfig.routes.admin;
    var t = (0, _reacti18next.useTranslation)("authentication").t;
    // Fetch 'redirect' from the query string which denotes the URL the user originally tried to visit. This is set in the Routes.tsx file when a user tries to access a protected route and is redirected to the login screen.
    var query = new URLSearchParams((0, _reactrouterdom.useLocation)().search);
    var redirect = query.get("redirect");
    (0, _react.useEffect)(function() {
        logOut();
    }, [
        logOut
    ]);
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: t("logout"),
        description: t("logoutUser"),
        keywords: t("logout")
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, inactivity && /*#__PURE__*/ _react.default.createElement("h2", null, t("loggedOutInactivity")), !inactivity && /*#__PURE__*/ _react.default.createElement("h2", null, t("loggedOutSuccessfully")), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        el: "anchor",
        buttonStyle: "secondary",
        url: "".concat(admin, "/login").concat(redirect && redirect.length > 0 ? "?redirect=".concat(encodeURIComponent(redirect)) : "")
    }, t("logBackIn"))));
};
var _default = Logout;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0xvZ291dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IE1pbmltYWwgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsb2dvdXQnO1xuXG5jb25zdCBMb2dvdXQ6IFJlYWN0LkZDPHtpbmFjdGl2aXR5PzogYm9vbGVhbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW5hY3Rpdml0eSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBsb2dPdXQgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJyk7XG5cbiAgLy8gRmV0Y2ggJ3JlZGlyZWN0JyBmcm9tIHRoZSBxdWVyeSBzdHJpbmcgd2hpY2ggZGVub3RlcyB0aGUgVVJMIHRoZSB1c2VyIG9yaWdpbmFsbHkgdHJpZWQgdG8gdmlzaXQuIFRoaXMgaXMgc2V0IGluIHRoZSBSb3V0ZXMudHN4IGZpbGUgd2hlbiBhIHVzZXIgdHJpZXMgdG8gYWNjZXNzIGEgcHJvdGVjdGVkIHJvdXRlIGFuZCBpcyByZWRpcmVjdGVkIHRvIHRoZSBsb2dpbiBzY3JlZW4uXG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VMb2NhdGlvbigpLnNlYXJjaCk7XG4gIGNvbnN0IHJlZGlyZWN0ID0gcXVlcnkuZ2V0KCdyZWRpcmVjdCcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9nT3V0KCk7XG4gIH0sIFtsb2dPdXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxNaW5pbWFsIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPXt0KCdsb2dvdXQnKX1cbiAgICAgICAgZGVzY3JpcHRpb249e3QoJ2xvZ291dFVzZXInKX1cbiAgICAgICAga2V5d29yZHM9e3QoJ2xvZ291dCcpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIHtpbmFjdGl2aXR5ICYmIChcbiAgICAgICAgICA8aDI+e3QoJ2xvZ2dlZE91dEluYWN0aXZpdHknKX08L2gyPlxuICAgICAgICApfVxuICAgICAgICB7IWluYWN0aXZpdHkgJiYgKFxuICAgICAgICAgIDxoMj57dCgnbG9nZ2VkT3V0U3VjY2Vzc2Z1bGx5Jyl9PC9oMj5cbiAgICAgICAgKX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBlbD1cImFuY2hvclwiXG4gICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgIHVybD17YCR7YWRtaW59L2xvZ2luJHtyZWRpcmVjdCAmJiByZWRpcmVjdC5sZW5ndGggPiAwID8gYD9yZWRpcmVjdD0ke2VuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdCl9YCA6ICcnfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7dCgnbG9nQmFja0luJyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9NaW5pbWFsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nb3V0O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkxvZ291dCIsInByb3BzIiwiaW5hY3Rpdml0eSIsImxvZ091dCIsInVzZUF1dGgiLCJ1c2VDb25maWciLCJyb3V0ZXMiLCJhZG1pbiIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwidXNlTG9jYXRpb24iLCJzZWFyY2giLCJyZWRpcmVjdCIsImdldCIsInVzZUVmZmVjdCIsIk1pbmltYWwiLCJjbGFzc05hbWUiLCJNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiZGl2IiwiaDIiLCJiciIsIkJ1dHRvbiIsImVsIiwiYnV0dG9uU3R5bGUiLCJ1cmwiLCJsZW5ndGgiLCJlbmNvZGVVUklDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBdURBOzs7ZUFBQTs7OzZEQXZEaUM7NEJBQ0Y7OEJBQ0g7c0JBQ0Y7b0JBQ0Y7OERBQ0o7NkRBQ0Q7MkRBQ0Y7UUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxTQUEyQyxTQUFDQztJQUNoRCxJQUFNLEFBQUVDLGFBQWVELE1BQWZDO0lBRVIsSUFBTSxBQUFFQyxTQUFXQyxJQUFBQSxhQUFPLElBQWxCRDtJQUNSLElBQThCRSxhQUFBQSxJQUFBQSxpQkFBUyxLQUEvQkMsQUFBVUMsUUFBWUYsV0FBdEJDLE9BQVVDO0lBQ2xCLElBQU0sQUFBRUMsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxrQkFBckJEO0lBRVIsMk5BQTJOO0lBQzNOLElBQU1FLFFBQVEsSUFBSUMsZ0JBQWdCQyxJQUFBQSwyQkFBVyxJQUFHQyxNQUFNO0lBQ3RELElBQU1DLFdBQVdKLE1BQU1LLEdBQUcsQ0FBQztJQUUzQkMsSUFBQUEsZ0JBQVMsRUFBQztRQUNSYjtJQUNGLEdBQUc7UUFBQ0E7S0FBTztJQUVYLHFCQUNFLDZCQUFDYyxnQkFBTztRQUFDQyxXQUFXbkI7cUJBQ2xCLDZCQUFDb0IsYUFBSTtRQUNIQyxPQUFPWixFQUFFO1FBQ1RhLGFBQWFiLEVBQUU7UUFDZmMsVUFBVWQsRUFBRTtzQkFFZCw2QkFBQ2U7UUFBSUwsV0FBVyxBQUFDLEdBQVksT0FBVm5CLFdBQVU7T0FDMUJHLDRCQUNDLDZCQUFDc0IsWUFBSWhCLEVBQUUseUJBRVIsQ0FBQ04sNEJBQ0EsNkJBQUNzQixZQUFJaEIsRUFBRSx5Q0FFVCw2QkFBQ2lCLDJCQUNELDZCQUFDQyxlQUFNO1FBQ0xDLElBQUc7UUFDSEMsYUFBWTtRQUNaQyxLQUFLLEFBQUMsR0FBZ0JmLE9BQWRQLE9BQU0sVUFBMkYsT0FBbkZPLFlBQVlBLFNBQVNnQixNQUFNLEdBQUcsSUFBSSxBQUFDLGFBQXlDLE9BQTdCQyxtQkFBbUJqQixhQUFjO09BRXJHTixFQUFFO0FBS2I7SUFFQSxXQUFlUiJ9