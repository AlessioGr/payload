import React from "react";
import LeafButton from "../Button";
import BoldIcon from "../../../../../icons/Bold";
var Bold = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ React.createElement("strong", attributes, children);
};
var bold = {
    Button: function() {
        return /*#__PURE__*/ React.createElement(LeafButton, {
            format: "bold"
        }, /*#__PURE__*/ React.createElement(BoldIcon, null));
    },
    Leaf: Bold
};
export default bold;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9ib2xkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlYWZCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBCb2xkSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9Cb2xkJztcblxuY29uc3QgQm9sZCA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pID0+IChcbiAgPHN0cm9uZyB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvc3Ryb25nPlxuKTtcblxuY29uc3QgYm9sZCA9IHtcbiAgQnV0dG9uOiAoKSA9PiAoXG4gICAgPExlYWZCdXR0b24gZm9ybWF0PVwiYm9sZFwiPlxuICAgICAgPEJvbGRJY29uIC8+XG4gICAgPC9MZWFmQnV0dG9uPlxuICApLFxuICBMZWFmOiBCb2xkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYm9sZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxlYWZCdXR0b24iLCJCb2xkSWNvbiIsIkJvbGQiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJzdHJvbmciLCJib2xkIiwiQnV0dG9uIiwiZm9ybWF0IiwiTGVhZiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGdCQUFnQixZQUFZO0FBQ25DLE9BQU9DLGNBQWMsNEJBQTRCO0FBRWpELElBQU1DLE9BQU87UUFBR0MsbUJBQUFBLFlBQVlDLGlCQUFBQTt5QkFDMUIsb0JBQUNDLFVBQVdGLFlBQWFDOztBQUczQixJQUFNRSxPQUFPO0lBQ1hDLFFBQVE7NkJBQ04sb0JBQUNQO1lBQVdRLFFBQU87eUJBQ2pCLG9CQUFDUDs7SUFHTFEsTUFBTVA7QUFDUjtBQUVBLGVBQWVJLEtBQUsifQ==