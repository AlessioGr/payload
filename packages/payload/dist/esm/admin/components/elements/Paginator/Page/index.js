import React from "react";
var baseClass = "paginator__page";
var Page = function(param) {
    var _param_page = param.page, page = _param_page === void 0 ? 1 : _param_page, isCurrent = param.isCurrent, updatePage = param.updatePage, _param_isFirstPage = param.isFirstPage, isFirstPage = _param_isFirstPage === void 0 ? false : _param_isFirstPage, _param_isLastPage = param.isLastPage, isLastPage = _param_isLastPage === void 0 ? false : _param_isLastPage;
    var classes = [
        baseClass,
        isCurrent && "".concat(baseClass, "--is-current"),
        isFirstPage && "".concat(baseClass, "--is-first-page"),
        isLastPage && "".concat(baseClass, "--is-last-page")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("button", {
        className: classes,
        onClick: function() {
            return updatePage(page);
        },
        type: "button"
    }, page);
};
export default Page;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BhZ2luYXRvci9QYWdlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BhZ2luYXRvcl9fcGFnZSc7XG5cbmNvbnN0IFBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIHBhZ2UgPSAxLFxuICBpc0N1cnJlbnQsXG4gIHVwZGF0ZVBhZ2UsXG4gIGlzRmlyc3RQYWdlID0gZmFsc2UsXG4gIGlzTGFzdFBhZ2UgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgaXNDdXJyZW50ICYmIGAke2Jhc2VDbGFzc30tLWlzLWN1cnJlbnRgLFxuICAgIGlzRmlyc3RQYWdlICYmIGAke2Jhc2VDbGFzc30tLWlzLWZpcnN0LXBhZ2VgLFxuICAgIGlzTGFzdFBhZ2UgJiYgYCR7YmFzZUNsYXNzfS0taXMtbGFzdC1wYWdlYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlUGFnZShwYWdlKX1cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIHtwYWdlfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImJhc2VDbGFzcyIsIlBhZ2UiLCJwYWdlIiwiaXNDdXJyZW50IiwidXBkYXRlUGFnZSIsImlzRmlyc3RQYWdlIiwiaXNMYXN0UGFnZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFHMUIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxPQUF3Qjs0QkFDNUJDLE1BQUFBLGdDQUFPLGlCQUNQQyxrQkFBQUEsV0FDQUMsbUJBQUFBLHVDQUNBQyxhQUFBQSw4Q0FBYyxzREFDZEMsWUFBQUEsNENBQWE7SUFFYixJQUFNQyxVQUFVO1FBQ2RQO1FBQ0FHLGFBQWEsQUFBQyxHQUFZLE9BQVZILFdBQVU7UUFDMUJLLGVBQWUsQUFBQyxHQUFZLE9BQVZMLFdBQVU7UUFDNUJNLGNBQWMsQUFBQyxHQUFZLE9BQVZOLFdBQVU7S0FDNUIsQ0FBQ1EsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0Usb0JBQUNDO1FBQ0NDLFdBQVdMO1FBQ1hNLFNBQVM7bUJBQU1ULFdBQVdGOztRQUMxQlksTUFBSztPQUVKWjtBQUdQO0FBRUEsZUFBZUQsS0FBSyJ9