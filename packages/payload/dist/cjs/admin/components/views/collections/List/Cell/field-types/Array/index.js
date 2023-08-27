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
var _getTranslation = require("../../../../../../../../utilities/getTranslation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ArrayCell = function(param) {
    var data = param.data, field = param.field;
    var _field_labels, _field;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var arrayFields = data !== null && data !== void 0 ? data : [];
    var label = "".concat(arrayFields.length, " ").concat((0, _getTranslation.getTranslation)(((_field = field) === null || _field === void 0 ? void 0 : (_field_labels = _field.labels) === null || _field_labels === void 0 ? void 0 : _field_labels.plural) || t("rows"), i18n));
    return /*#__PURE__*/ _react.default.createElement("span", null, label);
};
var _default = ArrayCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9BcnJheS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBBcnJheUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGZpZWxkOiBBcnJheUZpZWxkXG59XG5cbmNvbnN0IEFycmF5Q2VsbDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZGF0YSwgZmllbGQgfSkgPT4ge1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IGFycmF5RmllbGRzID0gZGF0YSA/PyBbXTtcbiAgY29uc3QgbGFiZWwgPSBgJHthcnJheUZpZWxkcy5sZW5ndGh9ICR7Z2V0VHJhbnNsYXRpb24oZmllbGQ/LmxhYmVscz8ucGx1cmFsIHx8IHQoJ3Jvd3MnKSwgaTE4bil9YDtcblxuICByZXR1cm4gKFxuICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnJheUNlbGw7XG4iXSwibmFtZXMiOlsiQXJyYXlDZWxsIiwiZGF0YSIsImZpZWxkIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImFycmF5RmllbGRzIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxlbmd0aCIsImxhYmVscyIsInBsdXJhbCIsInNwYW4iXSwibWFwcGluZ3MiOiI7Ozs7K0JBb0JBOzs7ZUFBQTs7OzREQXBCa0I7NEJBQ2E7OEJBRUE7Ozs7OztBQU8vQixJQUFNQSxZQUE2QjtRQUFHQyxhQUFBQSxNQUFNQyxjQUFBQTtRQUdZQSxlQUFBQTtJQUZ0RCxJQUFvQkMsa0JBQUFBLElBQUFBLDRCQUFjLEVBQUMsWUFBM0JDLElBQVlELGdCQUFaQyxHQUFHQyxPQUFTRixnQkFBVEU7SUFDWCxJQUFNQyxjQUFjTCxpQkFBQUEsa0JBQUFBLE9BQVEsRUFBRTtJQUM5QixJQUFNTSxRQUFRLEFBQUMsR0FBd0JDLE9BQXRCRixZQUFZRyxNQUFNLEVBQUMsS0FBNEQsT0FBekRELElBQUFBLDhCQUFjLEVBQUNOLEVBQUFBLFNBQUFBLG1CQUFBQSw4QkFBQUEsZ0JBQUFBLE9BQU9RLE1BQU0sY0FBYlIsb0NBQUFBLGNBQWVTLE1BQU0sS0FBSVAsRUFBRSxTQUFTQztJQUUxRixxQkFDRSw2QkFBQ08sY0FBTUw7QUFFWDtJQUVBLFdBQWVQIn0=