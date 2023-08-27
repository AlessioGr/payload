import React from "react";
import { render } from "@testing-library/react";
import Separator from "./Paginator/Separator";
describe("Elements", function() {
    describe("Paginator", function() {
        it("separator - renders dash", function() {
            var getByText = render(/*#__PURE__*/ React.createElement(Separator, null)).getByText;
            var linkElement = getByText(/—/i); // &mdash;
            expect(linkElement).toBeInTheDocument();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL2VsZW1lbnRzLnNwZWMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdAdGVzdGluZy1saWJyYXJ5L3JlYWN0JztcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSAnLi9QYWdpbmF0b3IvU2VwYXJhdG9yJztcblxuZGVzY3JpYmUoJ0VsZW1lbnRzJywgKCkgPT4ge1xuICBkZXNjcmliZSgnUGFnaW5hdG9yJywgKCkgPT4ge1xuICAgIGl0KCdzZXBhcmF0b3IgLSByZW5kZXJzIGRhc2gnLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGdldEJ5VGV4dCB9ID0gcmVuZGVyKDxTZXBhcmF0b3IgLz4pO1xuICAgICAgY29uc3QgbGlua0VsZW1lbnQgPSBnZXRCeVRleHQoL+KAlC9pKTsgLy8gJm1kYXNoO1xuICAgICAgZXhwZWN0KGxpbmtFbGVtZW50KS50b0JlSW5UaGVEb2N1bWVudCgpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVuZGVyIiwiU2VwYXJhdG9yIiwiZGVzY3JpYmUiLCJpdCIsImdldEJ5VGV4dCIsImxpbmtFbGVtZW50IiwiZXhwZWN0IiwidG9CZUluVGhlRG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxNQUFNLFFBQVEseUJBQXlCO0FBQ2hELE9BQU9DLGVBQWUsd0JBQXdCO0FBRTlDQyxTQUFTLFlBQVk7SUFDbkJBLFNBQVMsYUFBYTtRQUNwQkMsR0FBRyw0QkFBNEI7WUFDN0IsSUFBTSxBQUFFQyxZQUFjSixxQkFBTyxvQkFBQ0Msa0JBQXRCRztZQUNSLElBQU1DLGNBQWNELFVBQVUsT0FBTyxVQUFVO1lBQy9DRSxPQUFPRCxhQUFhRSxpQkFBaUI7UUFDdkM7SUFDRjtBQUNGIn0=