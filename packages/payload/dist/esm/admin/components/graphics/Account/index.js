import React from "react";
import { useAuth } from "../../utilities/Auth";
import { useConfig } from "../../utilities/Config";
import Gravatar from "./Gravatar";
var css = "\n  .graphic-account .circle1 {\n    fill: var(--theme-elevation-100);\n  }\n\n  .graphic-account .circle2, .graphic-account path {\n    fill: var(--theme-elevation-300);\n  }\n";
var Default = function() {
    return /*#__PURE__*/ React.createElement("svg", {
        className: "graphic-account",
        width: "25",
        height: "25",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 25 25"
    }, /*#__PURE__*/ React.createElement("style", null, css), /*#__PURE__*/ React.createElement("circle", {
        className: "circle1",
        cx: "12.5",
        cy: "12.5",
        r: "11.5"
    }), /*#__PURE__*/ React.createElement("circle", {
        className: "circle2",
        cx: "12.5",
        cy: "10.73",
        r: "3.98"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M12.5,24a11.44,11.44,0,0,0,7.66-2.94c-.5-2.71-3.73-4.8-7.66-4.8s-7.16,2.09-7.66,4.8A11.44,11.44,0,0,0,12.5,24Z"
    }));
};
var Account = function() {
    var _useConfig = useConfig(), _useConfig_admin = _useConfig.admin, Avatar = _useConfig_admin.avatar;
    var user = useAuth().user;
    if (!user.email || Avatar === "default") return /*#__PURE__*/ React.createElement(Default, null);
    if (Avatar === "gravatar") return /*#__PURE__*/ React.createElement(Gravatar, null);
    if (Avatar) return /*#__PURE__*/ React.createElement(Avatar, null);
    return /*#__PURE__*/ React.createElement(Default, null);
};
export default Account;
function isClassComponent(component) {
    return typeof component === "function" && !!component.prototype.isReactComponent;
}
function isFunctionComponent(component) {
    return typeof component === "function" && String(component).includes("return React.createElement");
}
function isReactComponent(component) {
    return isClassComponent(component) || isFunctionComponent(component);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0FjY291bnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgR3JhdmF0YXIgZnJvbSAnLi9HcmF2YXRhcic7XG5cbmNvbnN0IGNzcyA9IGBcbiAgLmdyYXBoaWMtYWNjb3VudCAuY2lyY2xlMSB7XG4gICAgZmlsbDogdmFyKC0tdGhlbWUtZWxldmF0aW9uLTEwMCk7XG4gIH1cblxuICAuZ3JhcGhpYy1hY2NvdW50IC5jaXJjbGUyLCAuZ3JhcGhpYy1hY2NvdW50IHBhdGgge1xuICAgIGZpbGw6IHZhcigtLXRoZW1lLWVsZXZhdGlvbi0zMDApO1xuICB9XG5gO1xuXG5jb25zdCBEZWZhdWx0OiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT1cImdyYXBoaWMtYWNjb3VudFwiXG4gICAgd2lkdGg9XCIyNVwiXG4gICAgaGVpZ2h0PVwiMjVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICA+XG4gICAgPHN0eWxlPlxuICAgICAge2Nzc31cbiAgICA8L3N0eWxlPlxuICAgIDxjaXJjbGVcbiAgICAgIGNsYXNzTmFtZT1cImNpcmNsZTFcIlxuICAgICAgY3g9XCIxMi41XCJcbiAgICAgIGN5PVwiMTIuNVwiXG4gICAgICByPVwiMTEuNVwiXG4gICAgLz5cbiAgICA8Y2lyY2xlXG4gICAgICBjbGFzc05hbWU9XCJjaXJjbGUyXCJcbiAgICAgIGN4PVwiMTIuNVwiXG4gICAgICBjeT1cIjEwLjczXCJcbiAgICAgIHI9XCIzLjk4XCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEyLjUsMjRhMTEuNDQsMTEuNDQsMCwwLDAsNy42Ni0yLjk0Yy0uNS0yLjcxLTMuNzMtNC44LTcuNjYtNC44cy03LjE2LDIuMDktNy42Niw0LjhBMTEuNDQsMTEuNDQsMCwwLDAsMTIuNSwyNFpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3QgQWNjb3VudCA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluOiB7IGF2YXRhcjogQXZhdGFyIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG5cbiAgaWYgKCF1c2VyLmVtYWlsIHx8IEF2YXRhciA9PT0gJ2RlZmF1bHQnKSByZXR1cm4gPERlZmF1bHQgLz47XG4gIGlmIChBdmF0YXIgPT09ICdncmF2YXRhcicpIHJldHVybiA8R3JhdmF0YXIgLz47XG4gIGlmIChBdmF0YXIpIHJldHVybiA8QXZhdGFyIC8+O1xuICByZXR1cm4gPERlZmF1bHQgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50O1xuXG5mdW5jdGlvbiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICByZXR1cm4gdHlwZW9mIGNvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJyAmJiAhIWNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbkNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgU3RyaW5nKGNvbXBvbmVudCkuaW5jbHVkZXMoJ3JldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50Jyk7XG59XG5cbmZ1bmN0aW9uIGlzUmVhY3RDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIHJldHVybiBpc0NsYXNzQ29tcG9uZW50KGNvbXBvbmVudCkgfHwgaXNGdW5jdGlvbkNvbXBvbmVudChjb21wb25lbnQpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQXV0aCIsInVzZUNvbmZpZyIsIkdyYXZhdGFyIiwiY3NzIiwiRGVmYXVsdCIsInN2ZyIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwieG1sbnMiLCJ2aWV3Qm94Iiwic3R5bGUiLCJjaXJjbGUiLCJjeCIsImN5IiwiciIsInBhdGgiLCJkIiwiQWNjb3VudCIsImFkbWluIiwiYXZhdGFyIiwiQXZhdGFyIiwidXNlciIsImVtYWlsIiwiaXNDbGFzc0NvbXBvbmVudCIsImNvbXBvbmVudCIsInByb3RvdHlwZSIsImlzUmVhY3RDb21wb25lbnQiLCJpc0Z1bmN0aW9uQ29tcG9uZW50IiwiU3RyaW5nIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxPQUFPLFFBQVEsdUJBQXVCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsT0FBT0MsY0FBYyxhQUFhO0FBRWxDLElBQU1DLE1BQU87QUFVYixJQUFNQyxVQUFvQjt5QkFDeEIsb0JBQUNDO1FBQ0NDLFdBQVU7UUFDVkMsT0FBTTtRQUNOQyxRQUFPO1FBQ1BDLE9BQU07UUFDTkMsU0FBUTtxQkFFUixvQkFBQ0MsZUFDRVIsb0JBRUgsb0JBQUNTO1FBQ0NOLFdBQVU7UUFDVk8sSUFBRztRQUNIQyxJQUFHO1FBQ0hDLEdBQUU7c0JBRUosb0JBQUNIO1FBQ0NOLFdBQVU7UUFDVk8sSUFBRztRQUNIQyxJQUFHO1FBQ0hDLEdBQUU7c0JBRUosb0JBQUNDO1FBQ0NDLEdBQUU7OztBQUtSLElBQU1DLFVBQVU7SUFDZCxJQUVJakIsYUFBQUEsZ0NBQUFBLFdBREZrQixPQUFTQyxBQUFRQywwQkFBUkQ7SUFFWCxJQUFNLEFBQUVFLE9BQVN0QixVQUFUc0I7SUFFUixJQUFJLENBQUNBLEtBQUtDLEtBQUssSUFBSUYsV0FBVyxXQUFXLHFCQUFPLG9CQUFDakI7SUFDakQsSUFBSWlCLFdBQVcsWUFBWSxxQkFBTyxvQkFBQ25CO0lBQ25DLElBQUltQixRQUFRLHFCQUFPLG9CQUFDQTtJQUNwQixxQkFBTyxvQkFBQ2pCO0FBQ1Y7QUFFQSxlQUFlYyxRQUFRO0FBRXZCLFNBQVNNLGlCQUFpQkMsU0FBUztJQUNqQyxPQUFPLE9BQU9BLGNBQWMsY0FBYyxDQUFDLENBQUNBLFVBQVVDLFNBQVMsQ0FBQ0MsZ0JBQWdCO0FBQ2xGO0FBRUEsU0FBU0Msb0JBQW9CSCxTQUFTO0lBQ3BDLE9BQU8sT0FBT0EsY0FBYyxjQUFjSSxPQUFPSixXQUFXSyxRQUFRLENBQUM7QUFDdkU7QUFFQSxTQUFTSCxpQkFBaUJGLFNBQVM7SUFDakMsT0FBT0QsaUJBQWlCQyxjQUFjRyxvQkFBb0JIO0FBQzVEIn0=