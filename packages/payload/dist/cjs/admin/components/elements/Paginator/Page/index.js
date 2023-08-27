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
var baseClass = "paginator__page";
var Page = function(param) {
    var _param_page = param.page, page = _param_page === void 0 ? 1 : _param_page, isCurrent = param.isCurrent, updatePage = param.updatePage, _param_isFirstPage = param.isFirstPage, isFirstPage = _param_isFirstPage === void 0 ? false : _param_isFirstPage, _param_isLastPage = param.isLastPage, isLastPage = _param_isLastPage === void 0 ? false : _param_isLastPage;
    var classes = [
        baseClass,
        isCurrent && "".concat(baseClass, "--is-current"),
        isFirstPage && "".concat(baseClass, "--is-first-page"),
        isLastPage && "".concat(baseClass, "--is-last-page")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("button", {
        className: classes,
        onClick: function() {
            return updatePage(page);
        },
        type: "button"
    }, page);
};
var _default = Page;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BhZ2luYXRvcl9fcGFnZSc7XG5cbmNvbnN0IFBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIHBhZ2UgPSAxLFxuICBpc0N1cnJlbnQsXG4gIHVwZGF0ZVBhZ2UsXG4gIGlzRmlyc3RQYWdlID0gZmFsc2UsXG4gIGlzTGFzdFBhZ2UgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgaXNDdXJyZW50ICYmIGAke2Jhc2VDbGFzc30tLWlzLWN1cnJlbnRgLFxuICAgIGlzRmlyc3RQYWdlICYmIGAke2Jhc2VDbGFzc30tLWlzLWZpcnN0LXBhZ2VgLFxuICAgIGlzTGFzdFBhZ2UgJiYgYCR7YmFzZUNsYXNzfS0taXMtbGFzdC1wYWdlYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlUGFnZShwYWdlKX1cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIHtwYWdlfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJQYWdlIiwicGFnZSIsImlzQ3VycmVudCIsInVwZGF0ZVBhZ2UiLCJpc0ZpcnN0UGFnZSIsImlzTGFzdFBhZ2UiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkE4QkE7OztlQUFBOzs7NERBOUJrQjs7Ozs7O0FBR2xCLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsT0FBd0I7NEJBQzVCQyxNQUFBQSxnQ0FBTyxpQkFDUEMsa0JBQUFBLFdBQ0FDLG1CQUFBQSx1Q0FDQUMsYUFBQUEsOENBQWMsc0RBQ2RDLFlBQUFBLDRDQUFhO0lBRWIsSUFBTUMsVUFBVTtRQUNkUDtRQUNBRyxhQUFhLEFBQUMsR0FBWSxPQUFWSCxXQUFVO1FBQzFCSyxlQUFlLEFBQUMsR0FBWSxPQUFWTCxXQUFVO1FBQzVCTSxjQUFjLEFBQUMsR0FBWSxPQUFWTixXQUFVO0tBQzVCLENBQUNRLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLHFCQUNFLDZCQUFDQztRQUNDQyxXQUFXTDtRQUNYTSxTQUFTO21CQUFNVCxXQUFXRjs7UUFDMUJZLE1BQUs7T0FFSlo7QUFHUDtJQUVBLFdBQWVEIn0=