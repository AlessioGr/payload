import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";
var baseClass = "error-pill";
export var ErrorPill = function(props) {
    var className = props.className, count = props.count, withMessage = props.withMessage;
    var lessThan3Chars = !withMessage && count < 99;
    var t = useTranslation().t;
    var classes = [
        baseClass,
        lessThan3Chars && "".concat(baseClass, "--fixed-width"),
        className && className
    ].filter(Boolean).join(" ");
    if (count === 0) return null;
    return /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__content")
    }, /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__count")
    }, count), withMessage && " ".concat(count > 1 ? t("general:errors") : t("general:error"))));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0Vycm9yUGlsbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdlcnJvci1waWxsJztcblxuZXhwb3J0IGNvbnN0IEVycm9yUGlsbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjb3VudCwgd2l0aE1lc3NhZ2UgfSA9IHByb3BzO1xuICBjb25zdCBsZXNzVGhhbjNDaGFycyA9ICF3aXRoTWVzc2FnZSAmJiBjb3VudCA8IDk5O1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgbGVzc1RoYW4zQ2hhcnMgJiYgYCR7YmFzZUNsYXNzfS0tZml4ZWQtd2lkdGhgLFxuICAgIGNsYXNzTmFtZSAmJiBjbGFzc05hbWUsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBpZiAoY291bnQgPT09IDApIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnRgfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb3VudGB9Pntjb3VudH08L3NwYW4+XG4gICAgICAgIHt3aXRoTWVzc2FnZSAmJiBgICR7Y291bnQgPiAxID8gdCgnZ2VuZXJhbDplcnJvcnMnKSA6IHQoJ2dlbmVyYWw6ZXJyb3InKX1gfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJiYXNlQ2xhc3MiLCJFcnJvclBpbGwiLCJwcm9wcyIsImNsYXNzTmFtZSIsImNvdW50Iiwid2l0aE1lc3NhZ2UiLCJsZXNzVGhhbjNDaGFycyIsInQiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJzcGFuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUcvQyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixPQUFPLElBQU1DLFlBQTZCLFNBQUNDO0lBQ3pDLElBQVFDLFlBQWtDRCxNQUFsQ0MsV0FBV0MsUUFBdUJGLE1BQXZCRSxPQUFPQyxjQUFnQkgsTUFBaEJHO0lBQzFCLElBQU1DLGlCQUFpQixDQUFDRCxlQUFlRCxRQUFRO0lBQy9DLElBQU0sQUFBRUcsSUFBTVIsaUJBQU5RO0lBRVIsSUFBTUMsVUFBVTtRQUNkUjtRQUNBTSxrQkFBa0IsQUFBQyxHQUFZLE9BQVZOLFdBQVU7UUFDL0JHLGFBQWFBO0tBQ2QsQ0FBQ00sTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIsSUFBSVAsVUFBVSxHQUFHLE9BQU87SUFFeEIscUJBQ0Usb0JBQUNRO1FBQUlULFdBQVdLO3FCQUNkLG9CQUFDSTtRQUFJVCxXQUFXLEFBQUMsR0FBWSxPQUFWSCxXQUFVO3FCQUMzQixvQkFBQ2E7UUFBS1YsV0FBVyxBQUFDLEdBQVksT0FBVkgsV0FBVTtPQUFXSSxRQUN4Q0MsZUFBZSxBQUFDLElBQXdELE9BQXJERCxRQUFRLElBQUlHLEVBQUUsb0JBQW9CQSxFQUFFO0FBSWhFLEVBQUUifQ==