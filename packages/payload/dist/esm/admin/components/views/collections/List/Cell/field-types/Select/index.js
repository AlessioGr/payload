import React from "react";
import { useTranslation } from "react-i18next";
import { optionsAreObjects } from "../../../../../../../../fields/config/types";
import { getTranslation } from "../../../../../../../../utilities/getTranslation";
var SelectCell = function(param) {
    var data = param.data, field = param.field;
    var i18n = useTranslation().i18n;
    var findLabel = function(items) {
        return items.map(function(i) {
            var _field_options_filter_, _field_options_filter;
            var found = (_field_options_filter = field.options.filter(function(f) {
                return f.value === i;
            })) === null || _field_options_filter === void 0 ? void 0 : (_field_options_filter_ = _field_options_filter[0]) === null || _field_options_filter_ === void 0 ? void 0 : _field_options_filter_.label;
            return getTranslation(found, i18n);
        }).join(", ");
    };
    var content = "";
    if (optionsAreObjects(field.options)) {
        content = Array.isArray(data) ? findLabel(data) // hasMany
         : findLabel([
            data
        ]);
    } else {
        content = Array.isArray(data) ? data.join(", ") // hasMany
         : data;
    }
    return /*#__PURE__*/ React.createElement("span", null, content);
};
export default SelectCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9TZWxlY3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgT3B0aW9uT2JqZWN0LCBvcHRpb25zQXJlT2JqZWN0cywgU2VsZWN0RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGF0YTogYW55XG4gIGZpZWxkOiBTZWxlY3RGaWVsZFxufVxuXG5jb25zdCBTZWxlY3RDZWxsOlJlYWN0LkZDPFByb3BzPiA9ICh7IGRhdGEsIGZpZWxkIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgZmluZExhYmVsID0gKGl0ZW1zOiBzdHJpbmdbXSkgPT4gaXRlbXMubWFwKChpKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSAoZmllbGQub3B0aW9ucyBhcyBPcHRpb25PYmplY3RbXSlcbiAgICAgIC5maWx0ZXIoKGY6IE9wdGlvbk9iamVjdCkgPT4gZi52YWx1ZSA9PT0gaSk/LlswXT8ubGFiZWw7XG4gICAgcmV0dXJuIGdldFRyYW5zbGF0aW9uKGZvdW5kLCBpMThuKTtcbiAgfSkuam9pbignLCAnKTtcblxuICBsZXQgY29udGVudCA9ICcnO1xuICBpZiAob3B0aW9uc0FyZU9iamVjdHMoZmllbGQub3B0aW9ucykpIHtcbiAgICBjb250ZW50ID0gQXJyYXkuaXNBcnJheShkYXRhKVxuICAgICAgPyBmaW5kTGFiZWwoZGF0YSkgLy8gaGFzTWFueVxuICAgICAgOiBmaW5kTGFiZWwoW2RhdGFdKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gQXJyYXkuaXNBcnJheShkYXRhKVxuICAgICAgPyBkYXRhLmpvaW4oJywgJykgLy8gaGFzTWFueVxuICAgICAgOiBkYXRhO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENlbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsIm9wdGlvbnNBcmVPYmplY3RzIiwiZ2V0VHJhbnNsYXRpb24iLCJTZWxlY3RDZWxsIiwiZGF0YSIsImZpZWxkIiwiaTE4biIsImZpbmRMYWJlbCIsIml0ZW1zIiwibWFwIiwiaSIsImZvdW5kIiwib3B0aW9ucyIsImZpbHRlciIsImYiLCJ2YWx1ZSIsImxhYmVsIiwiam9pbiIsImNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJzcGFuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUF1QkMsaUJBQWlCLFFBQXFCLDhDQUE4QztBQUMzRyxTQUFTQyxjQUFjLFFBQVEsbURBQW1EO0FBT2xGLElBQU1DLGFBQTZCO1FBQUdDLGFBQUFBLE1BQU1DLGNBQUFBO0lBQzFDLElBQU0sQUFBRUMsT0FBU04saUJBQVRNO0lBQ1IsSUFBTUMsWUFBWSxTQUFDQztlQUFvQkEsTUFBTUMsR0FBRyxDQUFDLFNBQUNDO2dCQUNsQyx3QkFBQTtZQUFkLElBQU1DLFNBQVEsd0JBQUEsQUFBQ04sTUFBTU8sT0FBTyxDQUN6QkMsTUFBTSxDQUFDLFNBQUNDO3VCQUFvQkEsRUFBRUMsS0FBSyxLQUFLTDs0QkFEN0IsNkNBQUEseUJBQUEscUJBQ2lDLENBQUMsRUFBRSxjQURwQyw2Q0FBQSx1QkFDc0NNLEtBQUs7WUFDekQsT0FBT2QsZUFBZVMsT0FBT0w7UUFDL0IsR0FBR1csSUFBSSxDQUFDOztJQUVSLElBQUlDLFVBQVU7SUFDZCxJQUFJakIsa0JBQWtCSSxNQUFNTyxPQUFPLEdBQUc7UUFDcENNLFVBQVVDLE1BQU1DLE9BQU8sQ0FBQ2hCLFFBQ3BCRyxVQUFVSCxNQUFNLFVBQVU7V0FDMUJHLFVBQVU7WUFBQ0g7U0FBSztJQUN0QixPQUFPO1FBQ0xjLFVBQVVDLE1BQU1DLE9BQU8sQ0FBQ2hCLFFBQ3BCQSxLQUFLYSxJQUFJLENBQUMsTUFBTSxVQUFVO1dBQzFCYjtJQUNOO0lBRUEscUJBQ0Usb0JBQUNpQixjQUNFSDtBQUdQO0FBRUEsZUFBZWYsV0FBVyJ9