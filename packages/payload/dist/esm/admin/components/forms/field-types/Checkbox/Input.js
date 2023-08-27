import React from "react";
import Check from "../../../icons/Check";
import Label from "../../Label";
import Line from "../../../icons/Line";
import "./index.scss";
var baseClass = "custom-checkbox";
export var CheckboxInput = function(props) {
    var onToggle = props.onToggle, checked = props.checked, partialChecked = props.partialChecked, inputRef = props.inputRef, name = props.name, id = props.id, label = props.label, ariaLabel = props["aria-label"], readOnly = props.readOnly, required = props.required;
    return /*#__PURE__*/ React.createElement("div", {
        className: [
            baseClass,
            (checked || partialChecked) && "".concat(baseClass, "--checked"),
            readOnly && "".concat(baseClass, "--read-only")
        ].filter(Boolean).join(" ")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__input")
    }, /*#__PURE__*/ React.createElement("input", {
        ref: inputRef,
        id: id,
        type: "checkbox",
        name: name,
        "aria-label": ariaLabel,
        checked: Boolean(checked),
        disabled: readOnly,
        onInput: onToggle
    }), /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__icon ").concat(!partialChecked ? "check" : "partial")
    }, !partialChecked && /*#__PURE__*/ React.createElement(Check, null), partialChecked && /*#__PURE__*/ React.createElement(Line, null))), label && /*#__PURE__*/ React.createElement(Label, {
        htmlFor: id,
        label: label,
        required: required
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L0lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoZWNrIGZyb20gJy4uLy4uLy4uL2ljb25zL0NoZWNrJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgTGluZSBmcm9tICcuLi8uLi8uLi9pY29ucy9MaW5lJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY3VzdG9tLWNoZWNrYm94JztcblxudHlwZSBDaGVja2JveElucHV0UHJvcHMgPSB7XG4gIG9uVG9nZ2xlOiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+XG4gIGlucHV0UmVmPzogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PlxuICByZWFkT25seT86IGJvb2xlYW5cbiAgY2hlY2tlZD86IGJvb2xlYW5cbiAgcGFydGlhbENoZWNrZWQ/OiBib29sZWFuXG4gIG5hbWU/OiBzdHJpbmdcbiAgaWQ/OiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbiAgJ2FyaWEtbGFiZWwnPzogc3RyaW5nXG4gIHJlcXVpcmVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgQ2hlY2tib3hJbnB1dDogUmVhY3QuRkM8Q2hlY2tib3hJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb25Ub2dnbGUsXG4gICAgY2hlY2tlZCxcbiAgICBwYXJ0aWFsQ2hlY2tlZCxcbiAgICBpbnB1dFJlZixcbiAgICBuYW1lLFxuICAgIGlkLFxuICAgIGxhYmVsLFxuICAgICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuICAgIHJlYWRPbmx5LFxuICAgIHJlcXVpcmVkLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICAoY2hlY2tlZCB8fCBwYXJ0aWFsQ2hlY2tlZCkgJiYgYCR7YmFzZUNsYXNzfS0tY2hlY2tlZGAsXG4gICAgICAgIHJlYWRPbmx5ICYmIGAke2Jhc2VDbGFzc30tLXJlYWQtb25seWAsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lucHV0YH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgICAgY2hlY2tlZD17Qm9vbGVhbihjaGVja2VkKX1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgb25JbnB1dD17b25Ub2dnbGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faWNvbiAkeyFwYXJ0aWFsQ2hlY2tlZCA/ICdjaGVjaycgOiAncGFydGlhbCd9YH0+XG4gICAgICAgICAgeyFwYXJ0aWFsQ2hlY2tlZCAmJiAoXG4gICAgICAgICAgICA8Q2hlY2sgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwYXJ0aWFsQ2hlY2tlZCAmJiAoXG4gICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hlY2siLCJMYWJlbCIsIkxpbmUiLCJiYXNlQ2xhc3MiLCJDaGVja2JveElucHV0IiwicHJvcHMiLCJvblRvZ2dsZSIsImNoZWNrZWQiLCJwYXJ0aWFsQ2hlY2tlZCIsImlucHV0UmVmIiwibmFtZSIsImlkIiwibGFiZWwiLCJhcmlhTGFiZWwiLCJyZWFkT25seSIsInJlcXVpcmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJpbnB1dCIsInJlZiIsInR5cGUiLCJhcmlhLWxhYmVsIiwiZGlzYWJsZWQiLCJvbklucHV0Iiwic3BhbiIsImh0bWxGb3IiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixPQUFPQyxXQUFXLHVCQUF1QjtBQUN6QyxPQUFPQyxXQUFXLGNBQWM7QUFDaEMsT0FBT0MsVUFBVSxzQkFBc0I7QUFFdkMsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFlbEIsT0FBTyxJQUFNQyxnQkFBOEMsU0FBQ0M7SUFDMUQsSUFDRUMsV0FVRUQsTUFWRkMsVUFDQUMsVUFTRUYsTUFURkUsU0FDQUMsaUJBUUVILE1BUkZHLGdCQUNBQyxXQU9FSixNQVBGSSxVQUNBQyxPQU1FTCxNQU5GSyxNQUNBQyxLQUtFTixNQUxGTSxJQUNBQyxRQUlFUCxNQUpGTyxPQUNBLEFBQWNDLFlBR1pSLE1BSEYsZUFDQVMsV0FFRVQsTUFGRlMsVUFDQUMsV0FDRVYsTUFERlU7SUFHRixxQkFDRSxvQkFBQ0M7UUFDQ0MsV0FBVztZQUNUZDtZQUNDSSxDQUFBQSxXQUFXQyxjQUFhLEtBQU0sQUFBQyxHQUFZLE9BQVZMLFdBQVU7WUFDNUNXLFlBQVksQUFBQyxHQUFZLE9BQVZYLFdBQVU7U0FDMUIsQ0FBQ2UsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7cUJBRXZCLG9CQUFDSjtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWZCxXQUFVO3FCQUMzQixvQkFBQ2tCO1FBQ0NDLEtBQUtiO1FBQ0xFLElBQUlBO1FBQ0pZLE1BQUs7UUFDTGIsTUFBTUE7UUFDTmMsY0FBWVg7UUFDWk4sU0FBU1ksUUFBUVo7UUFDakJrQixVQUFVWDtRQUNWWSxTQUFTcEI7c0JBRVgsb0JBQUNxQjtRQUFLVixXQUFXLEFBQUMsR0FBcUIsT0FBbkJkLFdBQVUsV0FBK0MsT0FBdEMsQ0FBQ0ssaUJBQWlCLFVBQVU7T0FDaEUsQ0FBQ0EsZ0NBQ0Esb0JBQUNSLGNBRUZRLGdDQUNDLG9CQUFDTixlQUlOVSx1QkFDQyxvQkFBQ1g7UUFDQzJCLFNBQVNqQjtRQUNUQyxPQUFPQTtRQUNQRyxVQUFVQTs7QUFLcEIsRUFBRSJ9