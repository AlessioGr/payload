import React from "react";
import { useTranslation } from "react-i18next";
import { isComponent } from "./types";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "field-description";
var FieldDescription = function(props) {
    var className = props.className, description = props.description, value = props.value;
    var i18n = useTranslation().i18n;
    if (isComponent(description)) {
        var Description = description;
        return /*#__PURE__*/ React.createElement(Description, {
            value: value
        });
    }
    if (description) {
        return /*#__PURE__*/ React.createElement("div", {
            className: [
                baseClass,
                className
            ].filter(Boolean).join(" ")
        }, typeof description === "function" ? description({
            value: value
        }) : getTranslation(description, i18n));
    }
    return null;
};
export default FieldDescription;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0ZpZWxkRGVzY3JpcHRpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMsIGlzQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWVsZC1kZXNjcmlwdGlvbic7XG5cbmNvbnN0IEZpZWxkRGVzY3JpcHRpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHZhbHVlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGlmIChpc0NvbXBvbmVudChkZXNjcmlwdGlvbikpIHtcbiAgICBjb25zdCBEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHJldHVybiA8RGVzY3JpcHRpb24gdmFsdWU9e3ZhbHVlfSAvPjtcbiAgfVxuXG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgID5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGRlc2NyaXB0aW9uKHsgdmFsdWUgfSkgOiBnZXRUcmFuc2xhdGlvbihkZXNjcmlwdGlvbiwgaTE4bil9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZERlc2NyaXB0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJpc0NvbXBvbmVudCIsImdldFRyYW5zbGF0aW9uIiwiYmFzZUNsYXNzIiwiRmllbGREZXNjcmlwdGlvbiIsInByb3BzIiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJ2YWx1ZSIsImkxOG4iLCJEZXNjcmlwdGlvbiIsImRpdiIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFnQkMsV0FBVyxRQUFRLFVBQVU7QUFDN0MsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUN0RSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxtQkFBb0MsU0FBQ0M7SUFDekMsSUFDRUMsWUFHRUQsTUFIRkMsV0FDQUMsY0FFRUYsTUFGRkUsYUFDQUMsUUFDRUgsTUFERkc7SUFHRixJQUFNLEFBQUVDLE9BQVNULGlCQUFUUztJQUVSLElBQUlSLFlBQVlNLGNBQWM7UUFDNUIsSUFBTUcsY0FBY0g7UUFDcEIscUJBQU8sb0JBQUNHO1lBQVlGLE9BQU9BOztJQUM3QjtJQUVBLElBQUlELGFBQWE7UUFDZixxQkFDRSxvQkFBQ0k7WUFDQ0wsV0FBVztnQkFDVEg7Z0JBQ0FHO2FBQ0QsQ0FBQ00sTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7V0FFdEIsT0FBT1AsZ0JBQWdCLGFBQWFBLFlBQVk7WUFBRUMsT0FBQUE7UUFBTSxLQUFLTixlQUFlSyxhQUFhRTtJQUdoRztJQUVBLE9BQU87QUFDVDtBQUVBLGVBQWVMLGlCQUFpQiJ9