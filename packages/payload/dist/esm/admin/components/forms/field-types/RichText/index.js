import React, { Suspense, lazy } from "react";
import { ShimmerEffect } from "../../../elements/ShimmerEffect";
var RichText = /*#__PURE__*/ lazy(function() {
    return import("./RichText");
});
var RichTextField = function(props) {
    return /*#__PURE__*/ React.createElement(Suspense, {
        fallback: /*#__PURE__*/ React.createElement(ShimmerEffect, {
            height: "35vh"
        })
    }, /*#__PURE__*/ React.createElement(RichText, props));
};
export default RichTextField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaGltbWVyRWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU2hpbW1lckVmZmVjdCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBSaWNoVGV4dCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL1JpY2hUZXh0JykpO1xuXG5jb25zdCBSaWNoVGV4dEZpZWxkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IChcbiAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8U2hpbW1lckVmZmVjdCBoZWlnaHQ9XCIzNXZoXCIgLz59PlxuICAgIDxSaWNoVGV4dCB7Li4ucHJvcHN9IC8+XG4gIDwvU3VzcGVuc2U+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dEZpZWxkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJsYXp5IiwiU2hpbW1lckVmZmVjdCIsIlJpY2hUZXh0IiwiUmljaFRleHRGaWVsZCIsInByb3BzIiwiZmFsbGJhY2siLCJoZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVNDLFFBQVEsRUFBRUMsSUFBSSxRQUFRLFFBQVE7QUFDOUMsU0FBU0MsYUFBYSxRQUFRLGtDQUFrQztBQUdoRSxJQUFNQyx5QkFBV0YsS0FBSztXQUFNLE1BQU0sQ0FBQzs7QUFFbkMsSUFBTUcsZ0JBQWlDLFNBQUNDO3lCQUN0QyxvQkFBQ0w7UUFBU00sd0JBQVUsb0JBQUNKO1lBQWNLLFFBQU87O3FCQUN4QyxvQkFBQ0osVUFBYUU7O0FBSWxCLGVBQWVELGNBQWMifQ==