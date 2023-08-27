import React from "react";
import { useTranslation } from "react-i18next";
import useField from "../../../useField";
import "./index.scss";
var baseClass = "section-title";
var SectionTitle = function(props) {
    var path = props.path, readOnly = props.readOnly;
    var _useField = useField({
        path: path
    }), value = _useField.value, setValue = _useField.setValue;
    var t = useTranslation("general").t;
    var classes = [
        baseClass
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("div", {
        className: classes,
        "data-value": value
    }, /*#__PURE__*/ React.createElement("input", {
        className: "".concat(baseClass, "__input"),
        id: path,
        value: value || "",
        placeholder: t("untitled"),
        type: "text",
        name: path,
        onChange: function(e) {
            e.stopPropagation();
            e.preventDefault();
            setValue(e.target.value);
        },
        readOnly: readOnly
    }));
};
export default SectionTitle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9TZWN0aW9uVGl0bGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3NlY3Rpb24tdGl0bGUnO1xuXG5jb25zdCBTZWN0aW9uVGl0bGU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBhdGgsIHJlYWRPbmx5IH0gPSBwcm9wcztcblxuICBjb25zdCB7IHZhbHVlLCBzZXRWYWx1ZSB9ID0gdXNlRmllbGQoeyBwYXRoIH0pO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIGRhdGEtdmFsdWU9e3ZhbHVlfVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lucHV0YH1cbiAgICAgICAgaWQ9e3BhdGh9XG4gICAgICAgIHZhbHVlPXt2YWx1ZSBhcyBzdHJpbmcgfHwgJyd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0KCd1bnRpdGxlZCcpfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25UaXRsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRyYW5zbGF0aW9uIiwidXNlRmllbGQiLCJiYXNlQ2xhc3MiLCJTZWN0aW9uVGl0bGUiLCJwcm9wcyIsInBhdGgiLCJyZWFkT25seSIsInZhbHVlIiwic2V0VmFsdWUiLCJ0IiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS12YWx1ZSIsImlucHV0IiwiaWQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLE9BQU9DLGNBQWMsb0JBQW9CO0FBR3pDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLGVBQWdDLFNBQUNDO0lBQ3JDLElBQVFDLE9BQW1CRCxNQUFuQkMsTUFBTUMsV0FBYUYsTUFBYkU7SUFFZCxJQUE0QkwsWUFBQUEsU0FBUztRQUFFSSxNQUFBQTtJQUFLLElBQXBDRSxRQUFvQk4sVUFBcEJNLE9BQU9DLFdBQWFQLFVBQWJPO0lBQ2YsSUFBTSxBQUFFQyxJQUFNVCxlQUFlLFdBQXJCUztJQUVSLElBQU1DLFVBQVU7UUFDZFI7S0FDRCxDQUFDUyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSxvQkFBQ0M7UUFDQ0MsV0FBV0w7UUFDWE0sY0FBWVQ7cUJBRVosb0JBQUNVO1FBQ0NGLFdBQVcsQUFBQyxHQUFZLE9BQVZiLFdBQVU7UUFDeEJnQixJQUFJYjtRQUNKRSxPQUFPQSxTQUFtQjtRQUMxQlksYUFBYVYsRUFBRTtRQUNmVyxNQUFLO1FBQ0xDLE1BQU1oQjtRQUNOaUIsVUFBVSxTQUFDQztZQUNUQSxFQUFFQyxlQUFlO1lBQ2pCRCxFQUFFRSxjQUFjO1lBQ2hCakIsU0FBU2UsRUFBRUcsTUFBTSxDQUFDbkIsS0FBSztRQUN6QjtRQUNBRCxVQUFVQTs7QUFJbEI7QUFFQSxlQUFlSCxhQUFhIn0=