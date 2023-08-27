"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var Label = function(props) {
    var label = props.label, _props_required = props.required, required = _props_required === void 0 ? false : _props_required, htmlFor = props.htmlFor;
    var i18n = useTranslation().i18n;
    if (label) {
        return /*#__PURE__*/ React.createElement("label", {
            htmlFor: htmlFor,
            className: "field-label"
        }, getTranslation(label, i18n), required && /*#__PURE__*/ React.createElement("span", {
            className: "required"
        }, "*"));
    }
    return null;
};
export default Label;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0xhYmVsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBMYWJlbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbCwgcmVxdWlyZWQgPSBmYWxzZSwgaHRtbEZvcixcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgaWYgKGxhYmVsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtodG1sRm9yfVxuICAgICAgICBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiXG4gICAgICA+XG4gICAgICAgIHsgZ2V0VHJhbnNsYXRpb24obGFiZWwsIGkxOG4pIH1cbiAgICAgICAge3JlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj59XG4gICAgICA8L2xhYmVsPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJnZXRUcmFuc2xhdGlvbiIsIkxhYmVsIiwicHJvcHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiaHRtbEZvciIsImkxOG4iLCJjbGFzc05hbWUiLCJzcGFuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBRS9DLFNBQVNDLGNBQWMsUUFBUSx1Q0FBdUM7QUFFdEUsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFFBQXlCLFNBQUNDO0lBQzlCLElBQ0VDLFFBQ0VELE1BREZDLHlCQUNFRCxNQURLRSxVQUFBQSx3Q0FBVyx5QkFBT0MsVUFDdkJILE1BRHVCRztJQUUzQixJQUFNLEFBQUVDLE9BQVNQLGlCQUFUTztJQUVSLElBQUlILE9BQU87UUFDVCxxQkFDRSxvQkFBQ0E7WUFDQ0UsU0FBU0E7WUFDVEUsV0FBVTtXQUVSUCxlQUFlRyxPQUFPRyxPQUN2QkYsMEJBQVksb0JBQUNJO1lBQUtELFdBQVU7V0FBVztJQUc5QztJQUVBLE9BQU87QUFDVDtBQUVBLGVBQWVOLE1BQU0ifQ==