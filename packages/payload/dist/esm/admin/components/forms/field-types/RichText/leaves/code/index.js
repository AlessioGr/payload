import React from "react";
import LeafButton from "../Button";
import CodeIcon from "../../../../../icons/Code";
var Code = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ React.createElement("code", attributes, children);
};
var code = {
    Button: function() {
        return /*#__PURE__*/ React.createElement(LeafButton, {
            format: "code"
        }, /*#__PURE__*/ React.createElement(CodeIcon, null));
    },
    Leaf: Code
};
export default code;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9jb2RlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlYWZCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBDb2RlSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9Db2RlJztcblxuY29uc3QgQ29kZSA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pID0+IChcbiAgPGNvZGUgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2NvZGU+XG4pO1xuXG5jb25zdCBjb2RlID0ge1xuICBCdXR0b246ICgpID0+IChcbiAgICA8TGVhZkJ1dHRvbiBmb3JtYXQ9XCJjb2RlXCI+XG4gICAgICA8Q29kZUljb24gLz5cbiAgICA8L0xlYWZCdXR0b24+XG4gICksXG4gIExlYWY6IENvZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2RlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGVhZkJ1dHRvbiIsIkNvZGVJY29uIiwiQ29kZSIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImNvZGUiLCJCdXR0b24iLCJmb3JtYXQiLCJMZWFmIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsT0FBT0MsZ0JBQWdCLFlBQVk7QUFDbkMsT0FBT0MsY0FBYyw0QkFBNEI7QUFFakQsSUFBTUMsT0FBTztRQUFHQyxtQkFBQUEsWUFBWUMsaUJBQUFBO3lCQUMxQixvQkFBQ0MsUUFBU0YsWUFBYUM7O0FBR3pCLElBQU1DLE9BQU87SUFDWEMsUUFBUTs2QkFDTixvQkFBQ047WUFBV08sUUFBTzt5QkFDakIsb0JBQUNOOztJQUdMTyxNQUFNTjtBQUNSO0FBRUEsZUFBZUcsS0FBSyJ9