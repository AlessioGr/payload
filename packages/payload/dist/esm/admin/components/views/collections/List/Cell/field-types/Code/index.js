import React from "react";
import "./index.scss";
var CodeCell = function(param) {
    var data = param.data;
    var textToShow = data.length > 100 ? "".concat(data.substring(0, 100), "…") : data;
    return /*#__PURE__*/ React.createElement("code", {
        className: "code-cell"
    }, /*#__PURE__*/ React.createElement("span", null, textToShow));
};
export default CodeCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9Db2RlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IENvZGVDZWxsID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHRleHRUb1Nob3cgPSBkYXRhLmxlbmd0aCA+IDEwMCA/IGAke2RhdGEuc3Vic3RyaW5nKDAsIDEwMCl9XFx1MjAyNmAgOiBkYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPGNvZGUgY2xhc3NOYW1lPVwiY29kZS1jZWxsXCI+XG4gICAgICA8c3Bhbj57dGV4dFRvU2hvd308L3NwYW4+XG4gICAgPC9jb2RlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29kZUNlbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb2RlQ2VsbCIsImRhdGEiLCJ0ZXh0VG9TaG93IiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29kZSIsImNsYXNzTmFtZSIsInNwYW4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUUxQixPQUFPLGVBQWU7QUFFdEIsSUFBTUMsV0FBVztRQUFHQyxhQUFBQTtJQUNsQixJQUFNQyxhQUFhRCxLQUFLRSxNQUFNLEdBQUcsTUFBTSxBQUFDLEdBQXlCLE9BQXZCRixLQUFLRyxTQUFTLENBQUMsR0FBRyxNQUFLLE9BQVVIO0lBRTNFLHFCQUNFLG9CQUFDSTtRQUFLQyxXQUFVO3FCQUNkLG9CQUFDQyxjQUFNTDtBQUdiO0FBRUEsZUFBZUYsU0FBUyJ9