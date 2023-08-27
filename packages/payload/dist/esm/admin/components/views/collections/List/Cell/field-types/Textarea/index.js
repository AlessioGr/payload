import React from "react";
var TextareaCell = function(param) {
    var data = param.data;
    var _data;
    var textToShow = ((_data = data) === null || _data === void 0 ? void 0 : _data.length) > 100 ? "".concat(data.substr(0, 100), "…") : data;
    return /*#__PURE__*/ React.createElement("span", null, textToShow);
};
export default TextareaCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9UZXh0YXJlYS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGV4dGFyZWFDZWxsID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHRleHRUb1Nob3cgPSBkYXRhPy5sZW5ndGggPiAxMDAgPyBgJHtkYXRhLnN1YnN0cigwLCAxMDApfVxcdTIwMjZgIDogZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8c3Bhbj57dGV4dFRvU2hvd308L3NwYW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUNlbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUZXh0YXJlYUNlbGwiLCJkYXRhIiwidGV4dFRvU2hvdyIsImxlbmd0aCIsInN1YnN0ciIsInNwYW4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUUxQixJQUFNQyxlQUFlO1FBQUdDLGFBQUFBO1FBQ0hBO0lBQW5CLElBQU1DLGFBQWFELEVBQUFBLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTUUsTUFBTSxJQUFHLE1BQU0sQUFBQyxHQUFzQixPQUFwQkYsS0FBS0csTUFBTSxDQUFDLEdBQUcsTUFBSyxPQUFVSDtJQUN6RSxxQkFDRSxvQkFBQ0ksY0FBTUg7QUFFWDtBQUVBLGVBQWVGLGFBQWEifQ==