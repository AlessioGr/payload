import React from "react";
import { useTranslation } from "react-i18next";
import ReactSelect from "../../../elements/ReactSelect";
import "./index.scss";
var baseClass = "select-version-locales";
var SelectLocales = function(param) {
    var onChange = param.onChange, value = param.value, options = param.options;
    var t = useTranslation("version").t;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("showLocales")), /*#__PURE__*/ React.createElement(ReactSelect, {
        isMulti: true,
        placeholder: t("selectLocales"),
        onChange: onChange,
        value: value.map(function(param) {
            var code = param.code;
            return {
                value: code,
                label: code
            };
        }),
        options: options.map(function(param) {
            var code = param.code;
            return {
                value: code,
                label: code
            };
        })
    }));
};
export default SelectLocales;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vU2VsZWN0TG9jYWxlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUmVhY3RTZWxlY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc2VsZWN0LXZlcnNpb24tbG9jYWxlcyc7XG5cbmNvbnN0IFNlbGVjdExvY2FsZXM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQ2hhbmdlLCB2YWx1ZSwgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgIHt0KCdzaG93TG9jYWxlcycpfVxuICAgICAgPC9kaXY+XG4gICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgaXNNdWx0aVxuICAgICAgICBwbGFjZWhvbGRlcj17dCgnc2VsZWN0TG9jYWxlcycpfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZS5tYXAoKHsgY29kZSB9KSA9PiAoeyB2YWx1ZTogY29kZSwgbGFiZWw6IGNvZGUgfSkpfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zLm1hcCgoeyBjb2RlIH0pID0+ICh7IHZhbHVlOiBjb2RlLCBsYWJlbDogY29kZSB9KSl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TG9jYWxlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRyYW5zbGF0aW9uIiwiUmVhY3RTZWxlY3QiLCJiYXNlQ2xhc3MiLCJTZWxlY3RMb2NhbGVzIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNNdWx0aSIsInBsYWNlaG9sZGVyIiwibWFwIiwiY29kZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxpQkFBaUIsZ0NBQWdDO0FBR3hELE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLGdCQUFpQztRQUFHQyxpQkFBQUEsVUFBVUMsY0FBQUEsT0FBT0MsZ0JBQUFBO0lBQ3pELElBQU0sQUFBRUMsSUFBTVAsZUFBZSxXQUFyQk87SUFFUixxQkFDRSxvQkFBQ0M7UUFBSUMsV0FBV1A7cUJBQ2Qsb0JBQUNNO1FBQUlDLFdBQVcsQUFBQyxHQUFZLE9BQVZQLFdBQVU7T0FDMUJLLEVBQUUsK0JBRUwsb0JBQUNOO1FBQ0NTLFNBQUFBO1FBQ0FDLGFBQWFKLEVBQUU7UUFDZkgsVUFBVUE7UUFDVkMsT0FBT0EsTUFBTU8sR0FBRyxDQUFDO2dCQUFHQyxhQUFBQTttQkFBWTtnQkFBRVIsT0FBT1E7Z0JBQU1DLE9BQU9EO1lBQUs7O1FBQzNEUCxTQUFTQSxRQUFRTSxHQUFHLENBQUM7Z0JBQUdDLGFBQUFBO21CQUFZO2dCQUFFUixPQUFPUTtnQkFBTUMsT0FBT0Q7WUFBSzs7O0FBSXZFO0FBRUEsZUFBZVYsY0FBYyJ9