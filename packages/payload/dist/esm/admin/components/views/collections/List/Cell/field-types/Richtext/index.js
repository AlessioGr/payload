import React from "react";
var RichTextCell = function(param) {
    var data = param.data;
    var _data, _flattenedText;
    var flattenedText = (_data = data) === null || _data === void 0 ? void 0 : _data.map(function(i) {
        var _i_children, _i;
        return (_i = i) === null || _i === void 0 ? void 0 : (_i_children = _i.children) === null || _i_children === void 0 ? void 0 : _i_children.map(function(c) {
            return c.text;
        });
    }).join(" ");
    var textToShow = ((_flattenedText = flattenedText) === null || _flattenedText === void 0 ? void 0 : _flattenedText.length) > 100 ? "".concat(flattenedText.slice(0, 100), "…") : flattenedText;
    return /*#__PURE__*/ React.createElement("span", null, textToShow);
};
export default RichTextCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9SaWNodGV4dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUmljaFRleHRDZWxsID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IGZsYXR0ZW5lZFRleHQgPSBkYXRhPy5tYXAoKGkpID0+IGk/LmNoaWxkcmVuPy5tYXAoKGMpID0+IGMudGV4dCkpLmpvaW4oJyAnKTtcbiAgY29uc3QgdGV4dFRvU2hvdyA9IGZsYXR0ZW5lZFRleHQ/Lmxlbmd0aCA+IDEwMCA/IGAke2ZsYXR0ZW5lZFRleHQuc2xpY2UoMCwgMTAwKX1cXHUyMDI2YCA6IGZsYXR0ZW5lZFRleHQ7XG4gIHJldHVybiAoXG4gICAgPHNwYW4+e3RleHRUb1Nob3d9PC9zcGFuPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmljaFRleHRDZWxsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmljaFRleHRDZWxsIiwiZGF0YSIsImZsYXR0ZW5lZFRleHQiLCJtYXAiLCJpIiwiY2hpbGRyZW4iLCJjIiwidGV4dCIsImpvaW4iLCJ0ZXh0VG9TaG93IiwibGVuZ3RoIiwic2xpY2UiLCJzcGFuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFFMUIsSUFBTUMsZUFBZTtRQUFHQyxhQUFBQTtRQUNBQSxPQUNIQztJQURuQixJQUFNQSxpQkFBZ0JELFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTUUsR0FBRyxDQUFDLFNBQUNDO1lBQU1BLGFBQUFBO2dCQUFBQSxLQUFBQSxlQUFBQSwwQkFBQUEsY0FBQUEsR0FBR0MsUUFBUSxjQUFYRCxrQ0FBQUEsWUFBYUQsR0FBRyxDQUFDLFNBQUNHO21CQUFNQSxFQUFFQyxJQUFJOztPQUFHQyxJQUFJLENBQUM7SUFDN0UsSUFBTUMsYUFBYVAsRUFBQUEsaUJBQUFBLDJCQUFBQSxxQ0FBQUEsZUFBZVEsTUFBTSxJQUFHLE1BQU0sQUFBQyxHQUE4QixPQUE1QlIsY0FBY1MsS0FBSyxDQUFDLEdBQUcsTUFBSyxPQUFVVDtJQUMxRixxQkFDRSxvQkFBQ1UsY0FBTUg7QUFFWDtBQUVBLGVBQWVULGFBQWEifQ==