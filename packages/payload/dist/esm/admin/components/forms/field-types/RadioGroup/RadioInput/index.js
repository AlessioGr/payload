import React from "react";
import { useTranslation } from "react-i18next";
import { getTranslation } from "../../../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "radio-input";
var RadioInput = function(props) {
    var isSelected = props.isSelected, option = props.option, onChange = props.onChange, path = props.path;
    var i18n = useTranslation().i18n;
    var classes = [
        baseClass,
        isSelected && "".concat(baseClass, "--is-selected")
    ].filter(Boolean).join(" ");
    var id = "field-".concat(path, "-").concat(option.value);
    return /*#__PURE__*/ React.createElement("label", {
        htmlFor: id
    }, /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, /*#__PURE__*/ React.createElement("input", {
        id: id,
        type: "radio",
        checked: isSelected,
        onChange: function() {
            return typeof onChange === "function" ? onChange(option.value) : null;
        }
    }), /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__styled-radio")
    }), /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__label")
    }, getTranslation(option.label, i18n))));
};
export default RadioInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvUmFkaW9JbnB1dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyYWRpby1pbnB1dCc7XG5cbmNvbnN0IFJhZGlvSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlzU2VsZWN0ZWQsIG9wdGlvbiwgb25DaGFuZ2UsIHBhdGggfSA9IHByb3BzO1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgaXNTZWxlY3RlZCAmJiBgJHtiYXNlQ2xhc3N9LS1pcy1zZWxlY3RlZGAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBjb25zdCBpZCA9IGBmaWVsZC0ke3BhdGh9LSR7b3B0aW9uLnZhbHVlfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWxcbiAgICAgIGh0bWxGb3I9e2lkfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gKHR5cGVvZiBvbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJyA/IG9uQ2hhbmdlKG9wdGlvbi52YWx1ZSkgOiBudWxsKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zdHlsZWQtcmFkaW9gfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e2dldFRyYW5zbGF0aW9uKG9wdGlvbi5sYWJlbCwgaTE4bil9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvSW5wdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsImdldFRyYW5zbGF0aW9uIiwiYmFzZUNsYXNzIiwiUmFkaW9JbnB1dCIsInByb3BzIiwiaXNTZWxlY3RlZCIsIm9wdGlvbiIsIm9uQ2hhbmdlIiwicGF0aCIsImkxOG4iLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJpZCIsInZhbHVlIiwibGFiZWwiLCJodG1sRm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsInNwYW4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBRS9DLFNBQVNDLGNBQWMsUUFBUSw2Q0FBNkM7QUFFNUUsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsYUFBOEIsU0FBQ0M7SUFDbkMsSUFBUUMsYUFBdUNELE1BQXZDQyxZQUFZQyxTQUEyQkYsTUFBM0JFLFFBQVFDLFdBQW1CSCxNQUFuQkcsVUFBVUMsT0FBU0osTUFBVEk7SUFDdEMsSUFBTSxBQUFFQyxPQUFTVCxpQkFBVFM7SUFFUixJQUFNQyxVQUFVO1FBQ2RSO1FBQ0FHLGNBQWMsQUFBQyxHQUFZLE9BQVZILFdBQVU7S0FDNUIsQ0FBQ1MsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIsSUFBTUMsS0FBSyxBQUFDLFNBQWdCUixPQUFSRSxNQUFLLEtBQWdCLE9BQWJGLE9BQU9TLEtBQUs7SUFFeEMscUJBQ0Usb0JBQUNDO1FBQ0NDLFNBQVNIO3FCQUVULG9CQUFDSTtRQUFJQyxXQUFXVDtxQkFDZCxvQkFBQ1U7UUFDQ04sSUFBSUE7UUFDSk8sTUFBSztRQUNMQyxTQUFTakI7UUFDVEUsVUFBVTttQkFBTyxPQUFPQSxhQUFhLGFBQWFBLFNBQVNELE9BQU9TLEtBQUssSUFBSTs7c0JBRTdFLG9CQUFDUTtRQUFLSixXQUFXLEFBQUMsR0FBWSxPQUFWakIsV0FBVTtzQkFDOUIsb0JBQUNxQjtRQUFLSixXQUFXLEFBQUMsR0FBWSxPQUFWakIsV0FBVTtPQUFXRCxlQUFlSyxPQUFPVSxLQUFLLEVBQUVQO0FBSTlFO0FBRUEsZUFBZU4sV0FBVyJ9