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
var _types = require("./types");
var _getTranslation = require("../../../../utilities/getTranslation");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ViewDescription = function(props) {
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var description = props.description;
    if ((0, _types.isComponent)(description)) {
        var Description = description;
        return /*#__PURE__*/ _react.default.createElement(Description, null);
    }
    if (description) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: "view-description"
        }, typeof description === "function" ? description() : (0, _getTranslation.getTranslation)(description, i18n));
    }
    return null;
};
var _default = ViewDescription;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1ZpZXdEZXNjcmlwdGlvbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcywgaXNDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBWaWV3RGVzY3JpcHRpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHtcbiAgICBkZXNjcmlwdGlvbixcbiAgfSA9IHByb3BzO1xuXG4gIGlmIChpc0NvbXBvbmVudChkZXNjcmlwdGlvbikpIHtcbiAgICBjb25zdCBEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHJldHVybiA8RGVzY3JpcHRpb24gLz47XG4gIH1cblxuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJ2aWV3LWRlc2NyaXB0aW9uXCJcbiAgICAgID5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGRlc2NyaXB0aW9uKCkgOiBnZXRUcmFuc2xhdGlvbihkZXNjcmlwdGlvbiwgaTE4bikgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlld0Rlc2NyaXB0aW9uO1xuIl0sIm5hbWVzIjpbIlZpZXdEZXNjcmlwdGlvbiIsInByb3BzIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiZGVzY3JpcHRpb24iLCJpc0NvbXBvbmVudCIsIkRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ2V0VHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBK0JBOzs7ZUFBQTs7OzREQS9Ca0I7NEJBQ2E7cUJBQ0k7OEJBQ0o7UUFFeEI7Ozs7OztBQUVQLElBQU1BLGtCQUFtQyxTQUFDQztJQUN4QyxJQUFNLEFBQUVDLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUNSLElBQU0sQUFDSkUsY0FDRUgsTUFERkc7SUFHRixJQUFJQyxJQUFBQSxrQkFBVyxFQUFDRCxjQUFjO1FBQzVCLElBQU1FLGNBQWNGO1FBQ3BCLHFCQUFPLDZCQUFDRTtJQUNWO0lBRUEsSUFBSUYsYUFBYTtRQUNmLHFCQUNFLDZCQUFDRztZQUNDQyxXQUFVO1dBRVQsT0FBT0osZ0JBQWdCLGFBQWFBLGdCQUFnQkssSUFBQUEsOEJBQWMsRUFBQ0wsYUFBYUY7SUFHdkY7SUFFQSxPQUFPO0FBQ1Q7SUFFQSxXQUFlRiJ9