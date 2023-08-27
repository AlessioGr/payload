import React from "react";
import { useTranslation } from "react-i18next";
import "./index.scss";
var baseClass = "condition-value-number";
var NumberField = function(param) {
    var onChange = param.onChange, value = param.value;
    var t = useTranslation("general").t;
    return /*#__PURE__*/ React.createElement("input", {
        placeholder: t("enterAValue"),
        className: baseClass,
        type: "number",
        onChange: function(e) {
            return onChange(e.target.value);
        },
        value: value
    });
};
export default NumberField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vTnVtYmVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbmRpdGlvbi12YWx1ZS1udW1iZXInO1xuXG5jb25zdCBOdW1iZXJGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgcGxhY2Vob2xkZXI9e3QoJ2VudGVyQVZhbHVlJyl9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckZpZWxkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJiYXNlQ2xhc3MiLCJOdW1iZXJGaWVsZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsImNsYXNzTmFtZSIsInR5cGUiLCJlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUcvQyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxjQUErQjtRQUFHQyxpQkFBQUEsVUFBVUMsY0FBQUE7SUFDaEQsSUFBTSxBQUFFQyxJQUFNTCxlQUFlLFdBQXJCSztJQUNSLHFCQUNFLG9CQUFDQztRQUNDQyxhQUFhRixFQUFFO1FBQ2ZHLFdBQVdQO1FBQ1hRLE1BQUs7UUFDTE4sVUFBVSxTQUFDTzttQkFBTVAsU0FBU08sRUFBRUMsTUFBTSxDQUFDUCxLQUFLOztRQUN4Q0EsT0FBT0E7O0FBR2I7QUFFQSxlQUFlRixZQUFZIn0=