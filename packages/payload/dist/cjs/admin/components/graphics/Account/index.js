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
var _Auth = require("../../utilities/Auth");
var _Config = require("../../utilities/Config");
var _Gravatar = /*#__PURE__*/ _interop_require_default(require("./Gravatar"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var css = "\n  .graphic-account .circle1 {\n    fill: var(--theme-elevation-100);\n  }\n\n  .graphic-account .circle2, .graphic-account path {\n    fill: var(--theme-elevation-300);\n  }\n";
var Default = function() {
    return /*#__PURE__*/ _react.default.createElement("svg", {
        className: "graphic-account",
        width: "25",
        height: "25",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 25 25"
    }, /*#__PURE__*/ _react.default.createElement("style", null, css), /*#__PURE__*/ _react.default.createElement("circle", {
        className: "circle1",
        cx: "12.5",
        cy: "12.5",
        r: "11.5"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        className: "circle2",
        cx: "12.5",
        cy: "10.73",
        r: "3.98"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M12.5,24a11.44,11.44,0,0,0,7.66-2.94c-.5-2.71-3.73-4.8-7.66-4.8s-7.16,2.09-7.66,4.8A11.44,11.44,0,0,0,12.5,24Z"
    }));
};
var Account = function() {
    var _useConfig = (0, _Config.useConfig)(), _useConfig_admin = _useConfig.admin, Avatar = _useConfig_admin.avatar;
    var user = (0, _Auth.useAuth)().user;
    if (!user.email || Avatar === "default") return /*#__PURE__*/ _react.default.createElement(Default, null);
    if (Avatar === "gravatar") return /*#__PURE__*/ _react.default.createElement(_Gravatar.default, null);
    if (Avatar) return /*#__PURE__*/ _react.default.createElement(Avatar, null);
    return /*#__PURE__*/ _react.default.createElement(Default, null);
};
var _default = Account;
function isClassComponent(component) {
    return typeof component === "function" && !!component.prototype.isReactComponent;
}
function isFunctionComponent(component) {
    return typeof component === "function" && String(component).includes("return React.createElement");
}
function isReactComponent(component) {
    return isClassComponent(component) || isFunctionComponent(component);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0FjY291bnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgR3JhdmF0YXIgZnJvbSAnLi9HcmF2YXRhcic7XG5cbmNvbnN0IGNzcyA9IGBcbiAgLmdyYXBoaWMtYWNjb3VudCAuY2lyY2xlMSB7XG4gICAgZmlsbDogdmFyKC0tdGhlbWUtZWxldmF0aW9uLTEwMCk7XG4gIH1cblxuICAuZ3JhcGhpYy1hY2NvdW50IC5jaXJjbGUyLCAuZ3JhcGhpYy1hY2NvdW50IHBhdGgge1xuICAgIGZpbGw6IHZhcigtLXRoZW1lLWVsZXZhdGlvbi0zMDApO1xuICB9XG5gO1xuXG5jb25zdCBEZWZhdWx0OiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT1cImdyYXBoaWMtYWNjb3VudFwiXG4gICAgd2lkdGg9XCIyNVwiXG4gICAgaGVpZ2h0PVwiMjVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICA+XG4gICAgPHN0eWxlPlxuICAgICAge2Nzc31cbiAgICA8L3N0eWxlPlxuICAgIDxjaXJjbGVcbiAgICAgIGNsYXNzTmFtZT1cImNpcmNsZTFcIlxuICAgICAgY3g9XCIxMi41XCJcbiAgICAgIGN5PVwiMTIuNVwiXG4gICAgICByPVwiMTEuNVwiXG4gICAgLz5cbiAgICA8Y2lyY2xlXG4gICAgICBjbGFzc05hbWU9XCJjaXJjbGUyXCJcbiAgICAgIGN4PVwiMTIuNVwiXG4gICAgICBjeT1cIjEwLjczXCJcbiAgICAgIHI9XCIzLjk4XCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEyLjUsMjRhMTEuNDQsMTEuNDQsMCwwLDAsNy42Ni0yLjk0Yy0uNS0yLjcxLTMuNzMtNC44LTcuNjYtNC44cy03LjE2LDIuMDktNy42Niw0LjhBMTEuNDQsMTEuNDQsMCwwLDAsMTIuNSwyNFpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgQWNjb3VudCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IGF2YXRhcjogQXZhdGFyIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG5cbiAgaWYgKCF1c2VyLmVtYWlsIHx8IEF2YXRhciA9PT0gJ2RlZmF1bHQnKSByZXR1cm4gPERlZmF1bHQgLz47XG4gIGlmIChBdmF0YXIgPT09ICdncmF2YXRhcicpIHJldHVybiA8R3JhdmF0YXIgLz47XG4gIGlmIChBdmF0YXIpIHJldHVybiA8QXZhdGFyIC8+O1xuICByZXR1cm4gPERlZmF1bHQgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50O1xuXG5mdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbkNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgU3RyaW5nKGNvbXBvbmVudCkuaW5jbHVkZXMoJ3JldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50Jyk7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkgfHwgaXNGdW5jdGlvbkNvbXBvbmVudChjb21wb25lbnQpO1xufVxuIl0sIm5hbWVzIjpbImNzcyIsIkRlZmF1bHQiLCJzdmciLCJjbGFzc05hbWUiLCJ3aWR0aCIsImhlaWdodCIsInhtbG5zIiwidmlld0JveCIsInN0eWxlIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJwYXRoIiwiZCIsIkFjY291bnQiLCJ1c2VDb25maWciLCJhZG1pbiIsImF2YXRhciIsIkF2YXRhciIsInVzZXIiLCJ1c2VBdXRoIiwiZW1haWwiLCJHcmF2YXRhciIsImlzQ2xhc3NDb21wb25lbnQiLCJjb21wb25lbnQiLCJwcm90b3R5cGUiLCJpc1JlYWN0Q29tcG9uZW50IiwiaXNGdW5jdGlvbkNvbXBvbmVudCIsIlN0cmluZyIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7OytCQXdEQTs7O2VBQUE7Ozs0REF4RGtCO29CQUNNO3NCQUNFOytEQUNMOzs7Ozs7QUFFckIsSUFBTUEsTUFBTztBQVViLElBQU1DLFVBQW9CO3lCQUN4Qiw2QkFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxPQUFNO1FBQ05DLFFBQU87UUFDUEMsT0FBTTtRQUNOQyxTQUFRO3FCQUVSLDZCQUFDQyxlQUNFUixvQkFFSCw2QkFBQ1M7UUFDQ04sV0FBVTtRQUNWTyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtzQkFFSiw2QkFBQ0g7UUFDQ04sV0FBVTtRQUNWTyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtzQkFFSiw2QkFBQ0M7UUFDQ0MsR0FBRTs7O0FBS1IsSUFBTUMsVUFBVTtJQUNkLElBRUlDLGFBQUFBLElBQUFBLGlCQUFTLHdCQUFUQSxXQURGQyxPQUFTQyxBQUFRQywwQkFBUkQ7SUFFWCxJQUFNLEFBQUVFLE9BQVNDLElBQUFBLGFBQU8sSUFBaEJEO0lBRVIsSUFBSSxDQUFDQSxLQUFLRSxLQUFLLElBQUlILFdBQVcsV0FBVyxxQkFBTyw2QkFBQ2xCO0lBQ2pELElBQUlrQixXQUFXLFlBQVkscUJBQU8sNkJBQUNJLGlCQUFRO0lBQzNDLElBQUlKLFFBQVEscUJBQU8sNkJBQUNBO0lBQ3BCLHFCQUFPLDZCQUFDbEI7QUFDVjtJQUVBLFdBQWVjO0FBRWYsU0FBU1MsaUJBQWlCQyxTQUFTO0lBQ2pDLE9BQU8sT0FBT0EsY0FBYyxjQUFjLENBQUMsQ0FBQ0EsVUFBVUMsU0FBUyxDQUFDQyxnQkFBZ0I7QUFDbEY7QUFFQSxTQUFTQyxvQkFBb0JILFNBQVM7SUFDcEMsT0FBTyxPQUFPQSxjQUFjLGNBQWNJLE9BQU9KLFdBQVdLLFFBQVEsQ0FBQztBQUN2RTtBQUVBLFNBQVNILGlCQUFpQkYsU0FBUztJQUNqQyxPQUFPRCxpQkFBaUJDLGNBQWNHLG9CQUFvQkg7QUFDNUQifQ==