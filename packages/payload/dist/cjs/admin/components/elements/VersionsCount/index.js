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
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _DocumentInfo = require("../../utilities/DocumentInfo");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "versions-count";
var VersionsCount = function(param) {
    var collection = param.collection, global = param.global, id = param.id;
    var _versions;
    var _useConfig = (0, _Config.useConfig)(), admin = _useConfig.routes.admin;
    var versions = (0, _DocumentInfo.useDocumentInfo)().versions;
    var t = (0, _reacti18next.useTranslation)("version").t;
    var versionsURL;
    if (collection) {
        versionsURL = "".concat(admin, "/collections/").concat(collection.slug, "/").concat(id, "/versions");
    }
    if (global) {
        versionsURL = "".concat(admin, "/globals/").concat(global.slug, "/versions");
    }
    var versionCount = ((_versions = versions) === null || _versions === void 0 ? void 0 : _versions.totalDocs) || 0;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, versionCount === 0 && t("versionCount_none"), versionCount > 0 && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        className: "".concat(baseClass, "__button"),
        buttonStyle: "none",
        el: "link",
        to: versionsURL
    }, t(versionCount === 1 ? "versionCount_one" : "versionCount_many", {
        count: versionCount
    })));
};
var _default = VersionsCount;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1ZlcnNpb25zQ291bnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3ZlcnNpb25zLWNvdW50JztcblxuY29uc3QgVmVyc2lvbnNDb3VudDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsLCBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgcm91dGVzOiB7IGFkbWluIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHZlcnNpb25zIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuXG4gIGxldCB2ZXJzaW9uc1VSTDogc3RyaW5nO1xuXG4gIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgdmVyc2lvbnNVUkwgPSBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7aWR9L3ZlcnNpb25zYDtcbiAgfVxuXG4gIGlmIChnbG9iYWwpIHtcbiAgICB2ZXJzaW9uc1VSTCA9IGAke2FkbWlufS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9L3ZlcnNpb25zYDtcbiAgfVxuXG4gIGNvbnN0IHZlcnNpb25Db3VudCA9IHZlcnNpb25zPy50b3RhbERvY3MgfHwgMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAge3ZlcnNpb25Db3VudCA9PT0gMCAmJiB0KCd2ZXJzaW9uQ291bnRfbm9uZScpfVxuICAgICAge3ZlcnNpb25Db3VudCA+IDAgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19idXR0b25gfVxuICAgICAgICAgIGJ1dHRvblN0eWxlPVwibm9uZVwiXG4gICAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgICB0bz17dmVyc2lvbnNVUkx9XG4gICAgICAgID5cbiAgICAgICAgICB7dCh2ZXJzaW9uQ291bnQgPT09IDEgPyAndmVyc2lvbkNvdW50X29uZScgOiAndmVyc2lvbkNvdW50X21hbnknLCB7IGNvdW50OiB2ZXJzaW9uQ291bnQgfSl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWZXJzaW9uc0NvdW50O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlZlcnNpb25zQ291bnQiLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiaWQiLCJ2ZXJzaW9ucyIsInVzZUNvbmZpZyIsInJvdXRlcyIsImFkbWluIiwidXNlRG9jdW1lbnRJbmZvIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidmVyc2lvbnNVUkwiLCJzbHVnIiwidmVyc2lvbkNvdW50IiwidG90YWxEb2NzIiwiZGl2IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJlbCIsInRvIiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBNENBOzs7ZUFBQTs7OzREQTVDa0I7NEJBQ2E7c0JBQ0w7NkRBQ1A7NEJBRWE7UUFFekI7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsZ0JBQWlDO1FBQUdDLG1CQUFBQSxZQUFZQyxlQUFBQSxRQUFRQyxXQUFBQTtRQWV2Q0M7SUFkckIsSUFBOEJDLGFBQUFBLElBQUFBLGlCQUFTLEtBQS9CQyxBQUFVQyxRQUFZRixXQUF0QkMsT0FBVUM7SUFDbEIsSUFBTSxBQUFFSCxXQUFhSSxJQUFBQSw2QkFBZSxJQUE1Qko7SUFDUixJQUFNLEFBQUVLLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBRVIsSUFBSUU7SUFFSixJQUFJVixZQUFZO1FBQ2RVLGNBQWMsQUFBQyxHQUF1QlYsT0FBckJNLE9BQU0saUJBQWtDSixPQUFuQkYsV0FBV1csSUFBSSxFQUFDLEtBQU0sT0FBSFQsSUFBRztJQUM5RDtJQUVBLElBQUlELFFBQVE7UUFDVlMsY0FBYyxBQUFDLEdBQW1CVCxPQUFqQkssT0FBTSxhQUF1QixPQUFaTCxPQUFPVSxJQUFJLEVBQUM7SUFDaEQ7SUFFQSxJQUFNQyxlQUFlVCxFQUFBQSxZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVVLFNBQVMsS0FBSTtJQUU1QyxxQkFDRSw2QkFBQ0M7UUFBSUMsV0FBV2pCO09BQ2JjLGlCQUFpQixLQUFLSixFQUFFLHNCQUN4QkksZUFBZSxtQkFDZCw2QkFBQ0ksZUFBTTtRQUNMRCxXQUFXLEFBQUMsR0FBWSxPQUFWakIsV0FBVTtRQUN4Qm1CLGFBQVk7UUFDWkMsSUFBRztRQUNIQyxJQUFJVDtPQUVIRixFQUFFSSxpQkFBaUIsSUFBSSxxQkFBcUIscUJBQXFCO1FBQUVRLE9BQU9SO0lBQWE7QUFLbEc7SUFDQSxXQUFlYiJ9