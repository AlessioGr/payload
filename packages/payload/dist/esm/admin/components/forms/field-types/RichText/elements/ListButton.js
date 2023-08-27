import React, { useCallback } from "react";
import { useSlate } from "slate-react";
import toggleList from "./toggleList";
import isListActive from "./isListActive";
import "../buttons.scss";
export var baseClass = "rich-text__button";
var ListButton = function(param) {
    var format = param.format, children = param.children, onClick = param.onClick, className = param.className;
    var editor = useSlate();
    var defaultOnClick = useCallback(function(event) {
        event.preventDefault();
        toggleList(editor, format);
    }, [
        editor,
        format
    ]);
    return /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: [
            baseClass,
            className,
            isListActive(editor, format) && "".concat(baseClass, "__button--active")
        ].filter(Boolean).join(" "),
        onClick: onClick || defaultOnClick
    }, children);
};
export default ListButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL0xpc3RCdXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNsYXRlIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHRvZ2dsZUxpc3QgZnJvbSAnLi90b2dnbGVMaXN0JztcbmltcG9ydCB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgaXNMaXN0QWN0aXZlIGZyb20gJy4vaXNMaXN0QWN0aXZlJztcblxuaW1wb3J0ICcuLi9idXR0b25zLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgYmFzZUNsYXNzID0gJ3JpY2gtdGV4dF9fYnV0dG9uJztcblxuY29uc3QgTGlzdEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHsgZm9ybWF0LCBjaGlsZHJlbiwgb25DbGljaywgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGUoKTtcblxuICBjb25zdCBkZWZhdWx0T25DbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlTGlzdChlZGl0b3IsIGZvcm1hdCk7XG4gIH0sIFtlZGl0b3IsIGZvcm1hdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGlzTGlzdEFjdGl2ZShlZGl0b3IsIGZvcm1hdCkgJiYgYCR7YmFzZUNsYXNzfV9fYnV0dG9uLS1hY3RpdmVgLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgb25DbGljaz17b25DbGljayB8fCBkZWZhdWx0T25DbGlja31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0QnV0dG9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTbGF0ZSIsInRvZ2dsZUxpc3QiLCJpc0xpc3RBY3RpdmUiLCJiYXNlQ2xhc3MiLCJMaXN0QnV0dG9uIiwiZm9ybWF0IiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZWRpdG9yIiwiZGVmYXVsdE9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYnV0dG9uIiwidHlwZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFTQyxXQUFXLFFBQVEsUUFBUTtBQUMzQyxTQUFTQyxRQUFRLFFBQVEsY0FBYztBQUN2QyxPQUFPQyxnQkFBZ0IsZUFBZTtBQUV0QyxPQUFPQyxrQkFBa0IsaUJBQWlCO0FBRTFDLE9BQU8sa0JBQWtCO0FBRXpCLE9BQU8sSUFBTUMsWUFBWSxvQkFBb0I7QUFFN0MsSUFBTUMsYUFBb0M7UUFBR0MsZUFBQUEsUUFBUUMsaUJBQUFBLFVBQVVDLGdCQUFBQSxTQUFTQyxrQkFBQUE7SUFDdEUsSUFBTUMsU0FBU1Q7SUFFZixJQUFNVSxpQkFBaUJYLFlBQVksU0FBQ1k7UUFDbENBLE1BQU1DLGNBQWM7UUFDcEJYLFdBQVdRLFFBQVFKO0lBQ3JCLEdBQUc7UUFBQ0k7UUFBUUo7S0FBTztJQUVuQixxQkFDRSxvQkFBQ1E7UUFDQ0MsTUFBSztRQUNMTixXQUFXO1lBQ1RMO1lBQ0FLO1lBQ0FOLGFBQWFPLFFBQVFKLFdBQVcsQUFBQyxHQUFZLE9BQVZGLFdBQVU7U0FDOUMsQ0FBQ1ksTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkJWLFNBQVNBLFdBQVdHO09BRW5CSjtBQUdQO0FBRUEsZUFBZUYsV0FBVyJ9