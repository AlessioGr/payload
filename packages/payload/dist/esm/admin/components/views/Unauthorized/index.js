import React from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import Button from "../../elements/Button";
import Meta from "../../utilities/Meta";
import MinimalTemplate from "../../templates/Minimal";
var Unauthorized = function() {
    var t = useTranslation("general").t;
    var config = useConfig();
    var admin = config.routes.admin, logoutRoute = config.admin.logoutRoute;
    return /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: "unauthorized"
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: t("error:unauthorized"),
        description: t("error:unauthorized"),
        keywords: t("error:unauthorized")
    }), /*#__PURE__*/ React.createElement("h2", null, t("error:unauthorized")), /*#__PURE__*/ React.createElement("p", null, t("error:notAllowedToAccessPage")), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(Button, {
        el: "link",
        to: "".concat(admin).concat(logoutRoute)
    }, t("authentication:logOut")));
};
export default Unauthorized;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1VuYXV0aG9yaXplZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJztcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnO1xuXG5jb25zdCBVbmF1dGhvcml6ZWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7XG4gICAgcm91dGVzOiB7IGFkbWluIH0sXG4gICAgYWRtaW46IHtcbiAgICAgIGxvZ291dFJvdXRlLFxuICAgIH0sXG4gIH0gPSBjb25maWc7XG4gIHJldHVybiAoXG4gICAgPE1pbmltYWxUZW1wbGF0ZSBjbGFzc05hbWU9XCJ1bmF1dGhvcml6ZWRcIj5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPXt0KCdlcnJvcjp1bmF1dGhvcml6ZWQnKX1cbiAgICAgICAgZGVzY3JpcHRpb249e3QoJ2Vycm9yOnVuYXV0aG9yaXplZCcpfVxuICAgICAgICBrZXl3b3Jkcz17dCgnZXJyb3I6dW5hdXRob3JpemVkJyl9XG4gICAgICAvPlxuICAgICAgPGgyPnt0KCdlcnJvcjp1bmF1dGhvcml6ZWQnKX08L2gyPlxuICAgICAgPHA+e3QoJ2Vycm9yOm5vdEFsbG93ZWRUb0FjY2Vzc1BhZ2UnKX08L3A+XG4gICAgICA8YnIgLz5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgdG89e2Ake2FkbWlufSR7bG9nb3V0Um91dGV9YH1cbiAgICAgID5cbiAgICAgICAge3QoJ2F1dGhlbnRpY2F0aW9uOmxvZ091dCcpfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVbmF1dGhvcml6ZWQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIkJ1dHRvbiIsIk1ldGEiLCJNaW5pbWFsVGVtcGxhdGUiLCJVbmF1dGhvcml6ZWQiLCJ0IiwiY29uZmlnIiwicm91dGVzIiwiYWRtaW4iLCJsb2dvdXRSb3V0ZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImgyIiwicCIsImJyIiwiZWwiLCJ0byJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxPQUFPQyxZQUFZLHdCQUF3QjtBQUMzQyxPQUFPQyxVQUFVLHVCQUF1QjtBQUN4QyxPQUFPQyxxQkFBcUIsMEJBQTBCO0FBRXRELElBQU1DLGVBQXlCO0lBQzdCLElBQU0sQUFBRUMsSUFBTU4sZUFBZSxXQUFyQk07SUFDUixJQUFNQyxTQUFTTjtJQUNmLElBQ0VPLEFBQVVDLFFBSVJGLE9BSkZDLE9BQVVDLE9BQ1ZBLEFBQ0VDLGNBRUFILE9BSEZFLE1BQ0VDO0lBR0oscUJBQ0Usb0JBQUNOO1FBQWdCTyxXQUFVO3FCQUN6QixvQkFBQ1I7UUFDQ1MsT0FBT04sRUFBRTtRQUNUTyxhQUFhUCxFQUFFO1FBQ2ZRLFVBQVVSLEVBQUU7c0JBRWQsb0JBQUNTLFlBQUlULEVBQUUsc0NBQ1Asb0JBQUNVLFdBQUdWLEVBQUUsZ0RBQ04sb0JBQUNXLDJCQUNELG9CQUFDZjtRQUNDZ0IsSUFBRztRQUNIQyxJQUFJLEFBQUMsR0FBVVQsT0FBUkQsT0FBb0IsT0FBWkM7T0FFZEosRUFBRTtBQUlYO0FBRUEsZUFBZUQsYUFBYSJ9