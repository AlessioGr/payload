import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";
var baseClass = "condition-value-text";
var Text = function(param) {
    var onChange = param.onChange, value = param.value;
    var t = useTranslation("general").t;
    return /*#__PURE__*/ React.createElement("input", {
        placeholder: t("enterAValue"),
        className: baseClass,
        type: "text",
        onChange: function(e) {
            return onChange(e.target.value);
        },
        value: value || ""
    });
};
export default Text;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vVGV4dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb25kaXRpb24tdmFsdWUtdGV4dCc7XG5cbmNvbnN0IFRleHQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHBsYWNlaG9sZGVyPXt0KCdlbnRlckFWYWx1ZScpfVxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRyYW5zbGF0aW9uIiwiYmFzZUNsYXNzIiwiVGV4dCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsInR5cGUiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUcvQyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxPQUF3QjtRQUFHQyxpQkFBQUEsVUFBVUMsY0FBQUE7SUFDekMsSUFBTSxBQUFFQyxJQUFNTCxlQUFlLFdBQXJCSztJQUNSLHFCQUNFLG9CQUFDQztRQUNDQyxhQUFhRixFQUFFO1FBQ2ZHLFdBQVdQO1FBQ1hRLE1BQUs7UUFDTE4sVUFBVSxTQUFDTzttQkFBTVAsU0FBU08sRUFBRUMsTUFBTSxDQUFDUCxLQUFLOztRQUN4Q0EsT0FBT0EsU0FBUzs7QUFHdEI7QUFFQSxlQUFlRixLQUFLIn0=