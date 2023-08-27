import React from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import Button from "../Button";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import "./index.scss";
var baseClass = "versions-count";
var VersionsCount = function(param) {
    var collection = param.collection, global = param.global, id = param.id;
    var _versions;
    var _useConfig = useConfig(), admin = _useConfig.routes.admin;
    var versions = useDocumentInfo().versions;
    var t = useTranslation("version").t;
    var versionsURL;
    if (collection) {
        versionsURL = "".concat(admin, "/collections/").concat(collection.slug, "/").concat(id, "/versions");
    }
    if (global) {
        versionsURL = "".concat(admin, "/globals/").concat(global.slug, "/versions");
    }
    var versionCount = ((_versions = versions) === null || _versions === void 0 ? void 0 : _versions.totalDocs) || 0;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, versionCount === 0 && t("versionCount_none"), versionCount > 0 && /*#__PURE__*/ React.createElement(Button, {
        className: "".concat(baseClass, "__button"),
        buttonStyle: "none",
        el: "link",
        to: versionsURL
    }, t(versionCount === 1 ? "versionCount_one" : "versionCount_many", {
        count: versionCount
    })));
};
export default VersionsCount;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1ZlcnNpb25zQ291bnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3ZlcnNpb25zLWNvdW50JztcblxuY29uc3QgVmVyc2lvbnNDb3VudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsLCBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgcm91dGVzOiB7IGFkbWluIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHZlcnNpb25zIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuXG4gIGxldCB2ZXJzaW9uc1VSTDogc3RyaW5nO1xuXG4gIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgdmVyc2lvbnNVUkwgPSBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7aWR9L3ZlcnNpb25zYDtcbiAgfVxuXG4gIGlmIChnbG9iYWwpIHtcbiAgICB2ZXJzaW9uc1VSTCA9IGAke2FkbWlufS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9L3ZlcnNpb25zYDtcbiAgfVxuXG4gIGNvbnN0IHZlcnNpb25Db3VudCA9IHZlcnNpb25zPy50b3RhbERvY3MgfHwgMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAge3ZlcnNpb25Db3VudCA9PT0gMCAmJiB0KCd2ZXJzaW9uQ291bnRfbm9uZScpfVxuICAgICAge3ZlcnNpb25Db3VudCA+IDAgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19idXR0b25gfVxuICAgICAgICAgIGJ1dHRvblN0eWxlPVwibm9uZVwiXG4gICAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgICB0bz17dmVyc2lvbnNVUkx9XG4gICAgICAgID5cbiAgICAgICAgICB7dCh2ZXJzaW9uQ291bnQgPT09IDEgPyAndmVyc2lvbkNvdW50X29uZScgOiAndmVyc2lvbkNvdW50X21hbnknLCB7IGNvdW50OiB2ZXJzaW9uQ291bnQgfSl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWZXJzaW9uc0NvdW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJCdXR0b24iLCJ1c2VEb2N1bWVudEluZm8iLCJiYXNlQ2xhc3MiLCJWZXJzaW9uc0NvdW50IiwiY29sbGVjdGlvbiIsImdsb2JhbCIsImlkIiwidmVyc2lvbnMiLCJyb3V0ZXMiLCJhZG1pbiIsInQiLCJ2ZXJzaW9uc1VSTCIsInNsdWciLCJ2ZXJzaW9uQ291bnQiLCJ0b3RhbERvY3MiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b25TdHlsZSIsImVsIiwidG8iLCJjb3VudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxPQUFPQyxZQUFZLFlBQVk7QUFFL0IsU0FBU0MsZUFBZSxRQUFRLCtCQUErQjtBQUUvRCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxnQkFBaUM7UUFBR0MsbUJBQUFBLFlBQVlDLGVBQUFBLFFBQVFDLFdBQUFBO1FBZXZDQztJQWRyQixJQUE4QlIsYUFBQUEsYUFBdEJTLEFBQVVDLFFBQVlWLFdBQXRCUyxPQUFVQztJQUNsQixJQUFNLEFBQUVGLFdBQWFOLGtCQUFiTTtJQUNSLElBQU0sQUFBRUcsSUFBTVosZUFBZSxXQUFyQlk7SUFFUixJQUFJQztJQUVKLElBQUlQLFlBQVk7UUFDZE8sY0FBYyxBQUFDLEdBQXVCUCxPQUFyQkssT0FBTSxpQkFBa0NILE9BQW5CRixXQUFXUSxJQUFJLEVBQUMsS0FBTSxPQUFITixJQUFHO0lBQzlEO0lBRUEsSUFBSUQsUUFBUTtRQUNWTSxjQUFjLEFBQUMsR0FBbUJOLE9BQWpCSSxPQUFNLGFBQXVCLE9BQVpKLE9BQU9PLElBQUksRUFBQztJQUNoRDtJQUVBLElBQU1DLGVBQWVOLEVBQUFBLFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVU8sU0FBUyxLQUFJO0lBRTVDLHFCQUNFLG9CQUFDQztRQUFJQyxXQUFXZDtPQUNiVyxpQkFBaUIsS0FBS0gsRUFBRSxzQkFDeEJHLGVBQWUsbUJBQ2Qsb0JBQUNiO1FBQ0NnQixXQUFXLEFBQUMsR0FBWSxPQUFWZCxXQUFVO1FBQ3hCZSxhQUFZO1FBQ1pDLElBQUc7UUFDSEMsSUFBSVI7T0FFSEQsRUFBRUcsaUJBQWlCLElBQUkscUJBQXFCLHFCQUFxQjtRQUFFTyxPQUFPUDtJQUFhO0FBS2xHO0FBQ0EsZUFBZVYsY0FBYyJ9