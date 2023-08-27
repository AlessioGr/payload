import React from "react";
import "./index.scss";
var baseClass = "popup-button";
var PopupButton = function(props) {
    var className = props.className, buttonType = props.buttonType, button = props.button, setActive = props.setActive, active = props.active;
    var classes = [
        baseClass,
        className,
        "".concat(baseClass, "--").concat(buttonType)
    ].filter(Boolean).join(" ");
    var handleClick = function() {
        setActive(!active);
    };
    if (buttonType === "none") {
        return null;
    }
    if (buttonType === "custom") {
        return /*#__PURE__*/ React.createElement("div", {
            role: "button",
            tabIndex: 0,
            onKeyDown: function(e) {
                if (e.key === "Enter") handleClick();
            },
            onClick: handleClick,
            className: classes
        }, button);
    }
    return /*#__PURE__*/ React.createElement("button", {
        type: "button",
        onClick: function() {
            return setActive(!active);
        },
        className: classes
    }, button);
};
export default PopupButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BvcHVwL1BvcHVwQnV0dG9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncG9wdXAtYnV0dG9uJztcblxuY29uc3QgUG9wdXBCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGJ1dHRvblR5cGUsXG4gICAgYnV0dG9uLFxuICAgIHNldEFjdGl2ZSxcbiAgICBhY3RpdmUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7YmFzZUNsYXNzfS0tJHtidXR0b25UeXBlfWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gIH07XG5cbiAgaWYgKGJ1dHRvblR5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGJ1dHRvblR5cGUgPT09ICdjdXN0b20nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBvbktleURvd249eyhlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgaGFuZGxlQ2xpY2soKTsgfX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgID5cbiAgICAgICAge2J1dHRvbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgID5cbiAgICAgIHtidXR0b259XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImJhc2VDbGFzcyIsIlBvcHVwQnV0dG9uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJidXR0b25UeXBlIiwiYnV0dG9uIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiaGFuZGxlQ2xpY2siLCJkaXYiLCJyb2xlIiwidGFiSW5kZXgiLCJvbktleURvd24iLCJlIiwia2V5Iiwib25DbGljayIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUcxQixPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxjQUErQixTQUFDQztJQUNwQyxJQUNFQyxZQUtFRCxNQUxGQyxXQUNBQyxhQUlFRixNQUpGRSxZQUNBQyxTQUdFSCxNQUhGRyxRQUNBQyxZQUVFSixNQUZGSSxXQUNBQyxTQUNFTCxNQURGSztJQUdGLElBQU1DLFVBQVU7UUFDZFI7UUFDQUc7UUFDQyxHQUFnQkMsT0FBZEosV0FBVSxNQUFlLE9BQVhJO0tBQ2xCLENBQUNLLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLElBQU1DLGNBQWM7UUFDbEJOLFVBQVUsQ0FBQ0M7SUFDYjtJQUVBLElBQUlILGVBQWUsUUFBUTtRQUN6QixPQUFPO0lBQ1Q7SUFFQSxJQUFJQSxlQUFlLFVBQVU7UUFDM0IscUJBQ0Usb0JBQUNTO1lBQ0NDLE1BQUs7WUFDTEMsVUFBVTtZQUNWQyxXQUFXLFNBQUNDO2dCQUFRLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTTjtZQUFlO1lBQzFETyxTQUFTUDtZQUNUVCxXQUFXSztXQUVWSDtJQUdQO0lBRUEscUJBQ0Usb0JBQUNBO1FBQ0NlLE1BQUs7UUFDTEQsU0FBUzttQkFBTWIsVUFBVSxDQUFDQzs7UUFDMUJKLFdBQVdLO09BRVZIO0FBR1A7QUFFQSxlQUFlSixZQUFZIn0=