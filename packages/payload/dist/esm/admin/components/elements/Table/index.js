import React from "react";
import { useTableColumns } from "../TableColumns";
import "./index.scss";
var baseClass = "table";
export var Table = function(param) {
    var data = param.data, columnsFromProps = param.columns;
    var _columns;
    var _useTableColumns = useTableColumns(), columnsFromContext = _useTableColumns.columns;
    var columns = columnsFromProps || columnsFromContext;
    var activeColumns = (_columns = columns) === null || _columns === void 0 ? void 0 : _columns.filter(function(col) {
        return col.active;
    });
    if (!activeColumns || activeColumns.length === 0) {
        return /*#__PURE__*/ React.createElement("div", null, "No columns selected");
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("table", {
        cellPadding: "0",
        cellSpacing: "0"
    }, /*#__PURE__*/ React.createElement("thead", null, /*#__PURE__*/ React.createElement("tr", null, activeColumns.map(function(col, i) {
        return /*#__PURE__*/ React.createElement("th", {
            key: i,
            id: "heading-".concat(col.accessor)
        }, col.components.Heading);
    }))), /*#__PURE__*/ React.createElement("tbody", null, data && data.map(function(row, rowIndex) {
        return /*#__PURE__*/ React.createElement("tr", {
            key: rowIndex,
            className: "row-".concat(rowIndex + 1)
        }, columns.map(function(col, colIndex) {
            var active = col.active;
            if (!active) return null;
            return /*#__PURE__*/ React.createElement("td", {
                key: colIndex,
                className: "cell-".concat(col.accessor)
            }, col.components.renderCell(row, row[col.accessor]));
        }));
    }))));
};
export default Table;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1ucyB9IGZyb20gJy4uL1RhYmxlQ29sdW1ucyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RhYmxlJztcblxuZXhwb3J0IGNvbnN0IFRhYmxlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBkYXRhLCBjb2x1bW5zOiBjb2x1bW5zRnJvbVByb3BzIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbHVtbnM6IGNvbHVtbnNGcm9tQ29udGV4dCxcbiAgfSA9IHVzZVRhYmxlQ29sdW1ucygpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSAoY29sdW1uc0Zyb21Qcm9wcyB8fCBjb2x1bW5zRnJvbUNvbnRleHQpO1xuICBjb25zdCBhY3RpdmVDb2x1bW5zID0gY29sdW1ucz8uZmlsdGVyKChjb2wpID0+IGNvbC5hY3RpdmUpO1xuXG4gIGlmICghYWN0aXZlQ29sdW1ucyB8fCBhY3RpdmVDb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBObyBjb2x1bW5zIHNlbGVjdGVkXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDx0YWJsZVxuICAgICAgICBjZWxsUGFkZGluZz1cIjBcIlxuICAgICAgICBjZWxsU3BhY2luZz1cIjBcIlxuICAgICAgPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge2FjdGl2ZUNvbHVtbnMubWFwKChjb2wsIGkpID0+IChcbiAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGlkPXtgaGVhZGluZy0ke2NvbC5hY2Nlc3Nvcn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbC5jb21wb25lbnRzLkhlYWRpbmd9XG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2RhdGEgJiYgZGF0YS5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICBrZXk9e3Jvd0luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3ctJHtyb3dJbmRleCArIDF9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhY3RpdmUgfSA9IGNvbDtcblxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2VsbC0ke2NvbC5hY2Nlc3Nvcn1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29sLmNvbXBvbmVudHMucmVuZGVyQ2VsbChyb3csIHJvd1tjb2wuYWNjZXNzb3JdKX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVGFibGVDb2x1bW5zIiwiYmFzZUNsYXNzIiwiVGFibGUiLCJkYXRhIiwiY29sdW1ucyIsImNvbHVtbnNGcm9tUHJvcHMiLCJjb2x1bW5zRnJvbUNvbnRleHQiLCJhY3RpdmVDb2x1bW5zIiwiZmlsdGVyIiwiY29sIiwiYWN0aXZlIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFibGUiLCJjZWxsUGFkZGluZyIsImNlbGxTcGFjaW5nIiwidGhlYWQiLCJ0ciIsIm1hcCIsImkiLCJ0aCIsImtleSIsImlkIiwiYWNjZXNzb3IiLCJjb21wb25lbnRzIiwiSGVhZGluZyIsInRib2R5Iiwicm93Iiwicm93SW5kZXgiLCJjb2xJbmRleCIsInRkIiwicmVuZGVyQ2VsbCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBRTFCLFNBQVNDLGVBQWUsUUFBUSxrQkFBa0I7QUFFbEQsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsT0FBTyxJQUFNQyxRQUF5QjtRQUFHQyxhQUFBQSxNQUFNQyxBQUFTQyx5QkFBVEQ7UUFNdkJBO0lBTHRCLElBRUlKLG1CQUFBQSxtQkFERkksQUFBU0UscUJBQ1BOLGlCQURGSTtJQUdGLElBQU1BLFVBQVdDLG9CQUFvQkM7SUFDckMsSUFBTUMsaUJBQWdCSCxXQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVNJLE1BQU0sQ0FBQyxTQUFDQztlQUFRQSxJQUFJQyxNQUFNOztJQUV6RCxJQUFJLENBQUNILGlCQUFpQkEsY0FBY0ksTUFBTSxLQUFLLEdBQUc7UUFDaEQscUJBQ0Usb0JBQUNDLGFBQUk7SUFJVDtJQUVBLHFCQUNFLG9CQUFDQTtRQUFJQyxXQUFXWjtxQkFDZCxvQkFBQ2E7UUFDQ0MsYUFBWTtRQUNaQyxhQUFZO3FCQUVaLG9CQUFDQyw2QkFDQyxvQkFBQ0MsWUFDRVgsY0FBY1ksR0FBRyxDQUFDLFNBQUNWLEtBQUtXOzZCQUN2QixvQkFBQ0M7WUFDQ0MsS0FBS0Y7WUFDTEcsSUFBSSxBQUFDLFdBQXVCLE9BQWJkLElBQUllLFFBQVE7V0FFMUJmLElBQUlnQixVQUFVLENBQUNDLE9BQU87d0JBSy9CLG9CQUFDQyxlQUNFeEIsUUFBUUEsS0FBS2dCLEdBQUcsQ0FBQyxTQUFDUyxLQUFLQzs2QkFDdEIsb0JBQUNYO1lBQ0NJLEtBQUtPO1lBQ0xoQixXQUFXLEFBQUMsT0FBbUIsT0FBYmdCLFdBQVc7V0FFNUJ6QixRQUFRZSxHQUFHLENBQUMsU0FBQ1YsS0FBS3FCO1lBQ2pCLElBQU0sQUFBRXBCLFNBQVdELElBQVhDO1lBRVIsSUFBSSxDQUFDQSxRQUFRLE9BQU87WUFFcEIscUJBQ0Usb0JBQUNxQjtnQkFDQ1QsS0FBS1E7Z0JBQ0xqQixXQUFXLEFBQUMsUUFBb0IsT0FBYkosSUFBSWUsUUFBUTtlQUU5QmYsSUFBSWdCLFVBQVUsQ0FBQ08sVUFBVSxDQUFDSixLQUFLQSxHQUFHLENBQUNuQixJQUFJZSxRQUFRLENBQUM7UUFHdkQ7O0FBT2QsRUFBRTtBQUVGLGVBQWV0QixNQUFNIn0=