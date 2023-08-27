import React, { Suspense, lazy } from "react";
import { ShimmerEffect } from "../ShimmerEffect";
var DatePicker = /*#__PURE__*/ lazy(function() {
    return import("./DatePicker");
});
var DatePickerField = function(props) {
    return /*#__PURE__*/ React.createElement(Suspense, {
        fallback: /*#__PURE__*/ React.createElement(ShimmerEffect, {
            height: 50
        })
    }, /*#__PURE__*/ React.createElement(DatePicker, props));
};
export default DatePickerField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RhdGVQaWNrZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoaW1tZXJFZmZlY3QgfSBmcm9tICcuLi9TaGltbWVyRWZmZWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IERhdGVQaWNrZXIgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9EYXRlUGlja2VyJykpO1xuXG5jb25zdCBEYXRlUGlja2VyRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4gKFxuICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxTaGltbWVyRWZmZWN0IGhlaWdodD17NTB9IC8+fT5cbiAgICA8RGF0ZVBpY2tlciB7Li4ucHJvcHN9IC8+XG4gIDwvU3VzcGVuc2U+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyRmllbGQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsImxhenkiLCJTaGltbWVyRWZmZWN0IiwiRGF0ZVBpY2tlciIsIkRhdGVQaWNrZXJGaWVsZCIsInByb3BzIiwiZmFsbGJhY2siLCJoZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVNDLFFBQVEsRUFBRUMsSUFBSSxRQUFRLFFBQVE7QUFDOUMsU0FBU0MsYUFBYSxRQUFRLG1CQUFtQjtBQUdqRCxJQUFNQywyQkFBYUYsS0FBSztXQUFNLE1BQU0sQ0FBQzs7QUFFckMsSUFBTUcsa0JBQW1DLFNBQUNDO3lCQUN4QyxvQkFBQ0w7UUFBU00sd0JBQVUsb0JBQUNKO1lBQWNLLFFBQVE7O3FCQUN6QyxvQkFBQ0osWUFBZUU7O0FBSXBCLGVBQWVELGdCQUFnQiJ9