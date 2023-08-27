"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _types = require("../../../../../../../../fields/config/types");
var _getTranslation = require("../../../../../../../../utilities/getTranslation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var SelectCell = function(param) {
    var data = param.data, field = param.field;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var findLabel = function(items) {
        return items.map(function(i) {
            var _field_options_filter_, _field_options_filter;
            var found = (_field_options_filter = field.options.filter(function(f) {
                return f.value === i;
            })) === null || _field_options_filter === void 0 ? void 0 : (_field_options_filter_ = _field_options_filter[0]) === null || _field_options_filter_ === void 0 ? void 0 : _field_options_filter_.label;
            return (0, _getTranslation.getTranslation)(found, i18n);
        }).join(", ");
    };
    var content = "";
    if ((0, _types.optionsAreObjects)(field.options)) {
        content = Array.isArray(data) ? findLabel(data) // hasMany
         : findLabel([
            data
        ]);
    } else {
        content = Array.isArray(data) ? data.join(", ") // hasMany
         : data;
    }
    return /*#__PURE__*/ _react.default.createElement("span", null, content);
};
var _default = SelectCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9TZWxlY3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgT3B0aW9uT2JqZWN0LCBvcHRpb25zQXJlT2JqZWN0cywgU2VsZWN0RmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxudHlwZSBQcm9wcyA9IHtcbiAgZGF0YTogYW55XG4gIGZpZWxkOiBTZWxlY3RGaWVsZFxufVxuXG5jb25zdCBTZWxlY3RDZWxsOlJlYWN0LkZDPFByb3BzPiA9ICh7IGRhdGEsIGZpZWxkIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgZmluZExhYmVsID0gKGl0ZW1zOiBzdHJpbmdbXSkgPT4gaXRlbXMubWFwKChpKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSAoZmllbGQub3B0aW9ucyBhcyBPcHRpb25PYmplY3RbXSlcbiAgICAgIC5maWx0ZXIoKGY6IE9wdGlvbk9iamVjdCkgPT4gZi52YWx1ZSA9PT0gaSk/LlswXT8ubGFiZWw7XG4gICAgcmV0dXJuIGdldFRyYW5zbGF0aW9uKGZvdW5kLCBpMThuKTtcbiAgfSkuam9pbignLCAnKTtcblxuICBsZXQgY29udGVudCA9ICcnO1xuICBpZiAob3B0aW9uc0FyZU9iamVjdHMoZmllbGQub3B0aW9ucykpIHtcbiAgICBjb250ZW50ID0gQXJyYXkuaXNBcnJheShkYXRhKVxuICAgICAgPyBmaW5kTGFiZWwoZGF0YSkgLy8gaGFzTWFueVxuICAgICAgOiBmaW5kTGFiZWwoW2RhdGFdKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gQXJyYXkuaXNBcnJheShkYXRhKVxuICAgICAgPyBkYXRhLmpvaW4oJywgJykgLy8gaGFzTWFueVxuICAgICAgOiBkYXRhO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIHtjb250ZW50fVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdENlbGw7XG4iXSwibmFtZXMiOlsiU2VsZWN0Q2VsbCIsImRhdGEiLCJmaWVsZCIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImZpbmRMYWJlbCIsIml0ZW1zIiwibWFwIiwiaSIsImZvdW5kIiwib3B0aW9ucyIsImZpbHRlciIsImYiLCJ2YWx1ZSIsImxhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJqb2luIiwiY29udGVudCIsIm9wdGlvbnNBcmVPYmplY3RzIiwiQXJyYXkiLCJpc0FycmF5Iiwic3BhbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFvQ0E7OztlQUFBOzs7NERBcENrQjs0QkFDYTtxQkFDOEI7OEJBQzlCOzs7Ozs7QUFPL0IsSUFBTUEsYUFBNkI7UUFBR0MsYUFBQUEsTUFBTUMsY0FBQUE7SUFDMUMsSUFBTSxBQUFFQyxPQUFTQyxJQUFBQSw0QkFBYyxJQUF2QkQ7SUFDUixJQUFNRSxZQUFZLFNBQUNDO2VBQW9CQSxNQUFNQyxHQUFHLENBQUMsU0FBQ0M7Z0JBQ2xDLHdCQUFBO1lBQWQsSUFBTUMsU0FBUSx3QkFBQSxBQUFDUCxNQUFNUSxPQUFPLENBQ3pCQyxNQUFNLENBQUMsU0FBQ0M7dUJBQW9CQSxFQUFFQyxLQUFLLEtBQUtMOzRCQUQ3Qiw2Q0FBQSx5QkFBQSxxQkFDaUMsQ0FBQyxFQUFFLGNBRHBDLDZDQUFBLHVCQUNzQ00sS0FBSztZQUN6RCxPQUFPQyxJQUFBQSw4QkFBYyxFQUFDTixPQUFPTjtRQUMvQixHQUFHYSxJQUFJLENBQUM7O0lBRVIsSUFBSUMsVUFBVTtJQUNkLElBQUlDLElBQUFBLHdCQUFpQixFQUFDaEIsTUFBTVEsT0FBTyxHQUFHO1FBQ3BDTyxVQUFVRSxNQUFNQyxPQUFPLENBQUNuQixRQUNwQkksVUFBVUosTUFBTSxVQUFVO1dBQzFCSSxVQUFVO1lBQUNKO1NBQUs7SUFDdEIsT0FBTztRQUNMZ0IsVUFBVUUsTUFBTUMsT0FBTyxDQUFDbkIsUUFDcEJBLEtBQUtlLElBQUksQ0FBQyxNQUFNLFVBQVU7V0FDMUJmO0lBQ047SUFFQSxxQkFDRSw2QkFBQ29CLGNBQ0VKO0FBR1A7SUFFQSxXQUFlakIifQ==