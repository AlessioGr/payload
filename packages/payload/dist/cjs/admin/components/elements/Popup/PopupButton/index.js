"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
        return /*#__PURE__*/ _react.default.createElement("div", {
            role: "button",
            tabIndex: 0,
            onKeyDown: function(e) {
                if (e.key === "Enter") handleClick();
            },
            onClick: handleClick,
            className: classes
        }, button);
    }
    return /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        onClick: function() {
            return setActive(!active);
        },
        className: classes
    }, button);
};
var _default = PopupButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BvcHVwL1BvcHVwQnV0dG9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncG9wdXAtYnV0dG9uJztcblxuY29uc3QgUG9wdXBCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGJ1dHRvblR5cGUsXG4gICAgYnV0dG9uLFxuICAgIHNldEFjdGl2ZSxcbiAgICBhY3RpdmUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgYCR7YmFzZUNsYXNzfS0tJHtidXR0b25UeXBlfWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmUoIWFjdGl2ZSk7XG4gIH07XG5cbiAgaWYgKGJ1dHRvblR5cGUgPT09ICdub25lJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGJ1dHRvblR5cGUgPT09ICdjdXN0b20nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBvbktleURvd249eyhlKSA9PiB7IGlmIChlLmtleSA9PT0gJ0VudGVyJykgaGFuZGxlQ2xpY2soKTsgfX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgID5cbiAgICAgICAge2J1dHRvbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKCFhY3RpdmUpfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgID5cbiAgICAgIHtidXR0b259XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJQb3B1cEJ1dHRvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwiYnV0dG9uVHlwZSIsImJ1dHRvbiIsInNldEFjdGl2ZSIsImFjdGl2ZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImhhbmRsZUNsaWNrIiwiZGl2Iiwicm9sZSIsInRhYkluZGV4Iiwib25LZXlEb3duIiwiZSIsImtleSIsIm9uQ2xpY2siLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7OytCQXVEQTs7O2VBQUE7Ozs0REF2RGtCO1FBR1g7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsY0FBK0IsU0FBQ0M7SUFDcEMsSUFDRUMsWUFLRUQsTUFMRkMsV0FDQUMsYUFJRUYsTUFKRkUsWUFDQUMsU0FHRUgsTUFIRkcsUUFDQUMsWUFFRUosTUFGRkksV0FDQUMsU0FDRUwsTUFERks7SUFHRixJQUFNQyxVQUFVO1FBQ2RSO1FBQ0FHO1FBQ0MsR0FBZ0JDLE9BQWRKLFdBQVUsTUFBZSxPQUFYSTtLQUNsQixDQUFDSyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixJQUFNQyxjQUFjO1FBQ2xCTixVQUFVLENBQUNDO0lBQ2I7SUFFQSxJQUFJSCxlQUFlLFFBQVE7UUFDekIsT0FBTztJQUNUO0lBRUEsSUFBSUEsZUFBZSxVQUFVO1FBQzNCLHFCQUNFLDZCQUFDUztZQUNDQyxNQUFLO1lBQ0xDLFVBQVU7WUFDVkMsV0FBVyxTQUFDQztnQkFBUSxJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBU047WUFBZTtZQUMxRE8sU0FBU1A7WUFDVFQsV0FBV0s7V0FFVkg7SUFHUDtJQUVBLHFCQUNFLDZCQUFDQTtRQUNDZSxNQUFLO1FBQ0xELFNBQVM7bUJBQU1iLFVBQVUsQ0FBQ0M7O1FBQzFCSixXQUFXSztPQUVWSDtBQUdQO0lBRUEsV0FBZUoifQ==