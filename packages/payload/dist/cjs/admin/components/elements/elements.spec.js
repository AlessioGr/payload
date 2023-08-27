"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _react1 = require("@testing-library/react");
var _Separator = /*#__PURE__*/ _interop_require_default(require("./Paginator/Separator"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
describe("Elements", function() {
    describe("Paginator", function() {
        it("separator - renders dash", function() {
            var getByText = (0, _react1.render)(/*#__PURE__*/ _react.default.createElement(_Separator.default, null)).getByText;
            var linkElement = getByText(/—/i); // &mdash;
            expect(linkElement).toBeInTheDocument();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL2VsZW1lbnRzLnNwZWMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdAdGVzdGluZy1saWJyYXJ5L3JlYWN0JztcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSAnLi9QYWdpbmF0b3IvU2VwYXJhdG9yJztcblxuZGVzY3JpYmUoJ0VsZW1lbnRzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnUGFnaW5hdG9yJywgKCkgPT4ge1xuICAgIGl0KCdzZXBhcmF0b3IgLSByZW5kZXJzIGRhc2gnLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGdldEJ5VGV4dCB9ID0gcmVuZGVyKDxTZXBhcmF0b3IgLz4pO1xuICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBnZXRCeVRleHQoL+KAlC9pKTsgLy8gJm1kYXNoO1xuICAgICAgZXhwZWN0KGxpbmtFbGVtZW50KS50b0JlSW5UaGVEb2N1bWVudCgpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJnZXRCeVRleHQiLCJyZW5kZXIiLCJTZXBhcmF0b3IiLCJsaW5rRWxlbWVudCIsImV4cGVjdCIsInRvQmVJblRoZURvY3VtZW50Il0sIm1hcHBpbmdzIjoiOzs7OzREQUFrQjtzQkFDSztnRUFDRDs7Ozs7O0FBRXRCQSxTQUFTLFlBQVk7SUFDbkJBLFNBQVMsYUFBYTtRQUNwQkMsR0FBRyw0QkFBNEI7WUFDN0IsSUFBTSxBQUFFQyxZQUFjQyxJQUFBQSxjQUFNLGdCQUFDLDZCQUFDQyxrQkFBUyxTQUEvQkY7WUFDUixJQUFNRyxjQUFjSCxVQUFVLE9BQU8sVUFBVTtZQUMvQ0ksT0FBT0QsYUFBYUUsaUJBQWlCO1FBQ3ZDO0lBQ0Y7QUFDRiJ9