import React from "react";
import LeafButton from "../Button";
import UnderlineIcon from "../../../../../icons/Underline";
var Underline = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ React.createElement("u", attributes, children);
};
var underline = {
    Button: function() {
        return /*#__PURE__*/ React.createElement(LeafButton, {
            format: "underline"
        }, /*#__PURE__*/ React.createElement(UnderlineIcon, null));
    },
    Leaf: Underline
};
export default underline;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy91bmRlcmxpbmUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGVhZkJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IFVuZGVybGluZUljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvVW5kZXJsaW5lJztcblxuY29uc3QgVW5kZXJsaW5lID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSkgPT4gKFxuICA8dSB7Li4uYXR0cmlidXRlc30+e2NoaWxkcmVufTwvdT5cbik7XG5cbmNvbnN0IHVuZGVybGluZSA9IHtcbiAgQnV0dG9uOiAoKSA9PiAoXG4gICAgPExlYWZCdXR0b24gZm9ybWF0PVwidW5kZXJsaW5lXCI+XG4gICAgICA8VW5kZXJsaW5lSWNvbiAvPlxuICAgIDwvTGVhZkJ1dHRvbj5cbiAgKSxcbiAgTGVhZjogVW5kZXJsaW5lLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5kZXJsaW5lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGVhZkJ1dHRvbiIsIlVuZGVybGluZUljb24iLCJVbmRlcmxpbmUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJ1IiwidW5kZXJsaW5lIiwiQnV0dG9uIiwiZm9ybWF0IiwiTGVhZiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGdCQUFnQixZQUFZO0FBQ25DLE9BQU9DLG1CQUFtQixpQ0FBaUM7QUFFM0QsSUFBTUMsWUFBWTtRQUFHQyxtQkFBQUEsWUFBWUMsaUJBQUFBO3lCQUMvQixvQkFBQ0MsS0FBTUYsWUFBYUM7O0FBR3RCLElBQU1FLFlBQVk7SUFDaEJDLFFBQVE7NkJBQ04sb0JBQUNQO1lBQVdRLFFBQU87eUJBQ2pCLG9CQUFDUDs7SUFHTFEsTUFBTVA7QUFDUjtBQUVBLGVBQWVJLFVBQVUifQ==