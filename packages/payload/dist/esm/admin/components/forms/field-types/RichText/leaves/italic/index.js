import React from "react";
import LeafButton from "../Button";
import ItalicIcon from "../../../../../icons/Italic";
var Italic = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ React.createElement("em", attributes, children);
};
var italic = {
    Button: function() {
        return /*#__PURE__*/ React.createElement(LeafButton, {
            format: "italic"
        }, /*#__PURE__*/ React.createElement(ItalicIcon, null));
    },
    Leaf: Italic
};
export default italic;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9pdGFsaWMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGVhZkJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IEl0YWxpY0ljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvSXRhbGljJztcblxuY29uc3QgSXRhbGljID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZW0gey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2VtPlxuKTtcblxuY29uc3QgaXRhbGljID0ge1xuICBCdXR0b246ICgpID0+IChcbiAgICA8TGVhZkJ1dHRvbiBmb3JtYXQ9XCJpdGFsaWNcIj5cbiAgICAgIDxJdGFsaWNJY29uIC8+XG4gICAgPC9MZWFmQnV0dG9uPlxuICApLFxuICBMZWFmOiBJdGFsaWMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpdGFsaWM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMZWFmQnV0dG9uIiwiSXRhbGljSWNvbiIsIkl0YWxpYyIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImVtIiwiaXRhbGljIiwiQnV0dG9uIiwiZm9ybWF0IiwiTGVhZiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGdCQUFnQixZQUFZO0FBQ25DLE9BQU9DLGdCQUFnQiw4QkFBOEI7QUFFckQsSUFBTUMsU0FBUztRQUFHQyxtQkFBQUEsWUFBWUMsaUJBQUFBO3lCQUM1QixvQkFBQ0MsTUFBT0YsWUFBYUM7O0FBR3ZCLElBQU1FLFNBQVM7SUFDYkMsUUFBUTs2QkFDTixvQkFBQ1A7WUFBV1EsUUFBTzt5QkFDakIsb0JBQUNQOztJQUdMUSxNQUFNUDtBQUNSO0FBRUEsZUFBZUksT0FBTyJ9