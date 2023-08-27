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
var JSONCell = function(param) {
    var data = param.data;
    var textToShow = data.length > 100 ? "".concat(data.substring(0, 100), "…") : data;
    return /*#__PURE__*/ _react.default.createElement("code", {
        className: "json-cell"
    }, /*#__PURE__*/ _react.default.createElement("span", null, JSON.stringify(textToShow)));
};
var _default = JSONCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9KU09OL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IEpTT05DZWxsID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHRleHRUb1Nob3cgPSBkYXRhLmxlbmd0aCA+IDEwMCA/IGAke2RhdGEuc3Vic3RyaW5nKDAsIDEwMCl9XFx1MjAyNmAgOiBkYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGNvZGUgY2xhc3NOYW1lPVwianNvbi1jZWxsXCI+XG4gICAgICA8c3Bhbj5cbiAgICAgICAge0pTT04uc3RyaW5naWZ5KHRleHRUb1Nob3cpfVxuICAgICAgPC9zcGFuPlxuICAgIDwvY29kZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEpTT05DZWxsO1xuIl0sIm5hbWVzIjpbIkpTT05DZWxsIiwiZGF0YSIsInRleHRUb1Nob3ciLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJjb2RlIiwiY2xhc3NOYW1lIiwic3BhbiIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZ0JBOzs7ZUFBQTs7OzREQWhCa0I7UUFFWDs7Ozs7O0FBRVAsSUFBTUEsV0FBVztRQUFHQyxhQUFBQTtJQUNsQixJQUFNQyxhQUFhRCxLQUFLRSxNQUFNLEdBQUcsTUFBTSxBQUFDLEdBQXlCLE9BQXZCRixLQUFLRyxTQUFTLENBQUMsR0FBRyxNQUFLLE9BQVVIO0lBRTNFLHFCQUNFLDZCQUFDSTtRQUFLQyxXQUFVO3FCQUNkLDZCQUFDQyxjQUNFQyxLQUFLQyxTQUFTLENBQUNQO0FBSXhCO0lBRUEsV0FBZUYifQ==