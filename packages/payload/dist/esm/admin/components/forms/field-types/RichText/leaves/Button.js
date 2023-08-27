import React from "react";
import { useSlate } from "slate-react";
import isMarkActive from "./isActive";
import toggleLeaf from "./toggle";
import "../buttons.scss";
var baseClass = "rich-text__button";
var LeafButton = function(param) {
    var format = param.format, children = param.children;
    var editor = useSlate();
    return /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: [
            baseClass,
            isMarkActive(editor, format) && "".concat(baseClass, "__button--active")
        ].filter(Boolean).join(" "),
        onMouseDown: function(event) {
            event.preventDefault();
            toggleLeaf(editor, format);
        }
    }, children);
};
export default LeafButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9CdXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCBpc01hcmtBY3RpdmUgZnJvbSAnLi9pc0FjdGl2ZSc7XG5pbXBvcnQgdG9nZ2xlTGVhZiBmcm9tICcuL3RvZ2dsZSc7XG5cbmltcG9ydCAnLi4vYnV0dG9ucy5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JpY2gtdGV4dF9fYnV0dG9uJztcblxuY29uc3QgTGVhZkJ1dHRvbiA9ICh7IGZvcm1hdCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBpc01hcmtBY3RpdmUoZWRpdG9yLCBmb3JtYXQpICYmIGAke2Jhc2VDbGFzc31fX2J1dHRvbi0tYWN0aXZlYCxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgIG9uTW91c2VEb3duPXsoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9nZ2xlTGVhZihlZGl0b3IsIGZvcm1hdCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExlYWZCdXR0b247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTbGF0ZSIsImlzTWFya0FjdGl2ZSIsInRvZ2dsZUxlYWYiLCJiYXNlQ2xhc3MiLCJMZWFmQnV0dG9uIiwiZm9ybWF0IiwiY2hpbGRyZW4iLCJlZGl0b3IiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJvbk1vdXNlRG93biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxRQUFRLFFBQVEsY0FBYztBQUN2QyxPQUFPQyxrQkFBa0IsYUFBYTtBQUN0QyxPQUFPQyxnQkFBZ0IsV0FBVztBQUVsQyxPQUFPLGtCQUFrQjtBQUV6QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLGFBQWE7UUFBR0MsZUFBQUEsUUFBUUMsaUJBQUFBO0lBQzVCLElBQU1DLFNBQVNQO0lBRWYscUJBQ0Usb0JBQUNRO1FBQ0NDLE1BQUs7UUFDTEMsV0FBVztZQUNUUDtZQUNBRixhQUFhTSxRQUFRRixXQUFXLEFBQUMsR0FBWSxPQUFWRixXQUFVO1NBQzlDLENBQUNRLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO1FBQ3ZCQyxhQUFhLFNBQUNDO1lBQ1pBLE1BQU1DLGNBQWM7WUFDcEJkLFdBQVdLLFFBQVFGO1FBQ3JCO09BRUNDO0FBR1A7QUFFQSxlQUFlRixXQUFXIn0=