import React from "react";
import Chevron from "../../../icons/Chevron";
import "./index.scss";
var baseClass = "clickable-arrow";
var ClickableArrow = function(props) {
    var updatePage = props.updatePage, _props_isDisabled = props.isDisabled, isDisabled = _props_isDisabled === void 0 ? false : _props_isDisabled, _props_direction = props.direction, direction = _props_direction === void 0 ? "right" : _props_direction;
    var classes = [
        baseClass,
        isDisabled && "".concat(baseClass, "--is-disabled"),
        direction && "".concat(baseClass, "--").concat(direction)
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("button", {
        className: classes,
        disabled: isDisabled,
        onClick: !isDisabled ? updatePage : undefined,
        type: "button"
    }, /*#__PURE__*/ React.createElement(Chevron, null));
};
export default ClickableArrow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BhZ2luYXRvci9DbGlja2FibGVBcnJvdy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uLy4uL2ljb25zL0NoZXZyb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjbGlja2FibGUtYXJyb3cnO1xuXG5jb25zdCBDbGlja2FibGVBcnJvdzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1cGRhdGVQYWdlLFxuICAgIGlzRGlzYWJsZWQgPSBmYWxzZSxcbiAgICBkaXJlY3Rpb24gPSAncmlnaHQnLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgaXNEaXNhYmxlZCAmJiBgJHtiYXNlQ2xhc3N9LS1pcy1kaXNhYmxlZGAsXG4gICAgZGlyZWN0aW9uICYmIGAke2Jhc2VDbGFzc30tLSR7ZGlyZWN0aW9ufWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgb25DbGljaz17IWlzRGlzYWJsZWQgPyB1cGRhdGVQYWdlIDogdW5kZWZpbmVkfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgPlxuICAgICAgPENoZXZyb24gLz5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaWNrYWJsZUFycm93O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hldnJvbiIsImJhc2VDbGFzcyIsIkNsaWNrYWJsZUFycm93IiwicHJvcHMiLCJ1cGRhdGVQYWdlIiwiaXNEaXNhYmxlZCIsImRpcmVjdGlvbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImRpc2FibGVkIiwib25DbGljayIsInVuZGVmaW5lZCIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUcxQixPQUFPQyxhQUFhLHlCQUF5QjtBQUU3QyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxpQkFBa0MsU0FBQ0M7SUFDdkMsSUFDRUMsYUFHRUQsTUFIRkMsZ0NBR0VELE1BRkZFLFlBQUFBLDRDQUFhLDhDQUVYRixNQURGRyxXQUFBQSwwQ0FBWTtJQUdkLElBQU1DLFVBQVU7UUFDZE47UUFDQUksY0FBYyxBQUFDLEdBQVksT0FBVkosV0FBVTtRQUMzQkssYUFBYSxBQUFDLEdBQWdCQSxPQUFkTCxXQUFVLE1BQWMsT0FBVks7S0FDL0IsQ0FBQ0UsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0Usb0JBQUNDO1FBQ0NDLFdBQVdMO1FBQ1hNLFVBQVVSO1FBQ1ZTLFNBQVMsQ0FBQ1QsYUFBYUQsYUFBYVc7UUFDcENDLE1BQUs7cUJBRUwsb0JBQUNoQjtBQUdQO0FBRUEsZUFBZUUsZUFBZSJ9