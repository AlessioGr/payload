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
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Unauthorized = function() {
    var t = (0, _reacti18next.useTranslation)("general").t;
    var config = (0, _Config.useConfig)();
    var admin = config.routes.admin, logoutRoute = config.admin.logoutRoute;
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: "unauthorized"
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: t("error:unauthorized"),
        description: t("error:unauthorized"),
        keywords: t("error:unauthorized")
    }), /*#__PURE__*/ _react.default.createElement("h2", null, t("error:unauthorized")), /*#__PURE__*/ _react.default.createElement("p", null, t("error:notAllowedToAccessPage")), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        el: "link",
        to: "".concat(admin).concat(logoutRoute)
    }, t("authentication:logOut")));
};
var _default = Unauthorized;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1VuYXV0aG9yaXplZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJztcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnO1xuXG5jb25zdCBVbmF1dGhvcml6ZWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFkbWluIH0sXG4gICAgYWRtaW46IHtcbiAgICAgIGxvZ291dFJvdXRlLFxuICAgIH0sXG4gIH0gPSBjb25maWc7XG4gIHJldHVybiAoXG4gICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9XCJ1bmF1dGhvcml6ZWRcIj5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPXt0KCdlcnJvcjp1bmF1dGhvcml6ZWQnKX1cbiAgICAgICAgZGVzY3JpcHRpb249e3QoJ2Vycm9yOnVuYXV0aG9yaXplZCcpfVxuICAgICAgICBrZXl3b3Jkcz17dCgnZXJyb3I6dW5hdXRob3JpemVkJyl9XG4gICAgICAvPlxuICAgICAgPGgyPnt0KCdlcnJvcjp1bmF1dGhvcml6ZWQnKX08L2gyPlxuICAgICAgPHA+e3QoJ2Vycm9yOm5vdEFsbG93ZWRUb0FjY2Vzc1BhZ2UnKX08L3A+XG4gICAgICA8YnIgLz5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgdG89e2Ake2FkbWlufSR7bG9nb3V0Um91dGV9YH1cbiAgICAgID5cbiAgICAgICAge3QoJ2F1dGhlbnRpY2F0aW9uOmxvZ091dCcpfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVbmF1dGhvcml6ZWQ7XG4iXSwibmFtZXMiOlsiVW5hdXRob3JpemVkIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiY29uZmlnIiwidXNlQ29uZmlnIiwicm91dGVzIiwiYWRtaW4iLCJsb2dvdXRSb3V0ZSIsIk1pbmltYWxUZW1wbGF0ZSIsImNsYXNzTmFtZSIsIk1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwia2V5d29yZHMiLCJoMiIsInAiLCJiciIsIkJ1dHRvbiIsImVsIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7K0JBb0NBOzs7ZUFBQTs7OzREQXBDa0I7NEJBQ2E7c0JBQ0w7NkRBQ1A7MkRBQ0Y7OERBQ1c7Ozs7OztBQUU1QixJQUFNQSxlQUF5QjtJQUM3QixJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBQ1IsSUFBTUUsU0FBU0MsSUFBQUEsaUJBQVM7SUFDeEIsSUFDRUMsQUFBVUMsUUFJUkgsT0FKRkUsT0FBVUMsT0FDVkEsQUFDRUMsY0FFQUosT0FIRkcsTUFDRUM7SUFHSixxQkFDRSw2QkFBQ0MsZ0JBQWU7UUFBQ0MsV0FBVTtxQkFDekIsNkJBQUNDLGFBQUk7UUFDSEMsT0FBT1YsRUFBRTtRQUNUVyxhQUFhWCxFQUFFO1FBQ2ZZLFVBQVVaLEVBQUU7c0JBRWQsNkJBQUNhLFlBQUliLEVBQUUsc0NBQ1AsNkJBQUNjLFdBQUdkLEVBQUUsZ0RBQ04sNkJBQUNlLDJCQUNELDZCQUFDQyxlQUFNO1FBQ0xDLElBQUc7UUFDSEMsSUFBSSxBQUFDLEdBQVVaLE9BQVJELE9BQW9CLE9BQVpDO09BRWROLEVBQUU7QUFJWDtJQUVBLFdBQWVEIn0=