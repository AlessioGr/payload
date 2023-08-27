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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var RenderCustomComponent = function(props) {
    var CustomComponent = props.CustomComponent, DefaultComponent = props.DefaultComponent, componentProps = props.componentProps;
    if (CustomComponent) {
        return /*#__PURE__*/ _react.default.createElement(CustomComponent, componentProps);
    }
    return /*#__PURE__*/ _react.default.createElement(DefaultComponent, componentProps);
};
var _default = RenderCustomComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBSZW5kZXJDdXN0b21Db21wb25lbnQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IEN1c3RvbUNvbXBvbmVudCwgRGVmYXVsdENvbXBvbmVudCwgY29tcG9uZW50UHJvcHMgfSA9IHByb3BzO1xuXG4gIGlmIChDdXN0b21Db21wb25lbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEN1c3RvbUNvbXBvbmVudCB7Li4uY29tcG9uZW50UHJvcHN9IC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERlZmF1bHRDb21wb25lbnQgey4uLmNvbXBvbmVudFByb3BzfSAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50O1xuIl0sIm5hbWVzIjpbIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsInByb3BzIiwiQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OytCQWlCQTs7O2VBQUE7Ozs0REFqQmtCOzs7Ozs7QUFHbEIsSUFBTUEsd0JBQXlDLFNBQUNDO0lBQzlDLElBQVFDLGtCQUFzREQsTUFBdERDLGlCQUFpQkMsbUJBQXFDRixNQUFyQ0Usa0JBQWtCQyxpQkFBbUJILE1BQW5CRztJQUUzQyxJQUFJRixpQkFBaUI7UUFDbkIscUJBQ0UsNkJBQUNBLGlCQUFvQkU7SUFFekI7SUFFQSxxQkFDRSw2QkFBQ0Qsa0JBQXFCQztBQUUxQjtJQUVBLFdBQWVKIn0=