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
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var CodeCell = function(param) {
    var data = param.data;
    var textToShow = data.length > 100 ? "".concat(data.substring(0, 100), "…") : data;
    return /*#__PURE__*/ _react.default.createElement("code", {
        className: "code-cell"
    }, /*#__PURE__*/ _react.default.createElement("span", null, textToShow));
};
var _default = CodeCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9Db2RlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IENvZGVDZWxsID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHRleHRUb1Nob3cgPSBkYXRhLmxlbmd0aCA+IDEwMCA/IGAke2RhdGEuc3Vic3RyaW5nKDAsIDEwMCl9XFx1MjAyNmAgOiBkYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGNvZGUgY2xhc3NOYW1lPVwiY29kZS1jZWxsXCI+XG4gICAgICA8c3Bhbj57dGV4dFRvU2hvd308L3NwYW4+XG4gICAgPC9jb2RlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29kZUNlbGw7XG4iXSwibmFtZXMiOlsiQ29kZUNlbGwiLCJkYXRhIiwidGV4dFRvU2hvdyIsImxlbmd0aCIsInN1YnN0cmluZyIsImNvZGUiLCJjbGFzc05hbWUiLCJzcGFuIl0sIm1hcHBpbmdzIjoiOzs7OytCQWNBOzs7ZUFBQTs7OzREQWRrQjtRQUVYOzs7Ozs7QUFFUCxJQUFNQSxXQUFXO1FBQUdDLGFBQUFBO0lBQ2xCLElBQU1DLGFBQWFELEtBQUtFLE1BQU0sR0FBRyxNQUFNLEFBQUMsR0FBeUIsT0FBdkJGLEtBQUtHLFNBQVMsQ0FBQyxHQUFHLE1BQUssT0FBVUg7SUFFM0UscUJBQ0UsNkJBQUNJO1FBQUtDLFdBQVU7cUJBQ2QsNkJBQUNDLGNBQU1MO0FBR2I7SUFFQSxXQUFlRiJ9