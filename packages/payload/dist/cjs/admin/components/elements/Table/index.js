"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Table: function() {
        return Table;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _TableColumns = require("../TableColumns");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "table";
var Table = function(param) {
    var data = param.data, columnsFromProps = param.columns;
    var _columns;
    var _useTableColumns = (0, _TableColumns.useTableColumns)(), columnsFromContext = _useTableColumns.columns;
    var columns = columnsFromProps || columnsFromContext;
    var activeColumns = (_columns = columns) === null || _columns === void 0 ? void 0 : _columns.filter(function(col) {
        return col.active;
    });
    if (!activeColumns || activeColumns.length === 0) {
        return /*#__PURE__*/ _react.default.createElement("div", null, "No columns selected");
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("table", {
        cellPadding: "0",
        cellSpacing: "0"
    }, /*#__PURE__*/ _react.default.createElement("thead", null, /*#__PURE__*/ _react.default.createElement("tr", null, activeColumns.map(function(col, i) {
        return /*#__PURE__*/ _react.default.createElement("th", {
            key: i,
            id: "heading-".concat(col.accessor)
        }, col.components.Heading);
    }))), /*#__PURE__*/ _react.default.createElement("tbody", null, data && data.map(function(row, rowIndex) {
        return /*#__PURE__*/ _react.default.createElement("tr", {
            key: rowIndex,
            className: "row-".concat(rowIndex + 1)
        }, columns.map(function(col, colIndex) {
            var active = col.active;
            if (!active) return null;
            return /*#__PURE__*/ _react.default.createElement("td", {
                key: colIndex,
                className: "cell-".concat(col.accessor)
            }, col.components.renderCell(row, row[col.accessor]));
        }));
    }))));
};
var _default = Table;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1ucyB9IGZyb20gJy4uL1RhYmxlQ29sdW1ucyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RhYmxlJztcblxuZXhwb3J0IGNvbnN0IFRhYmxlOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBkYXRhLCBjb2x1bW5zOiBjb2x1bW5zRnJvbVByb3BzIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbHVtbnM6IGNvbHVtbnNGcm9tQ29udGV4dCxcbiAgfSA9IHVzZVRhYmxlQ29sdW1ucygpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSAoY29sdW1uc0Zyb21Qcm9wcyB8fCBjb2x1bW5zRnJvbUNvbnRleHQpO1xuICBjb25zdCBhY3RpdmVDb2x1bW5zID0gY29sdW1ucz8uZmlsdGVyKChjb2wpID0+IGNvbC5hY3RpdmUpO1xuXG4gIGlmICghYWN0aXZlQ29sdW1ucyB8fCBhY3RpdmVDb2x1bW5zLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBObyBjb2x1bW5zIHNlbGVjdGVkXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDx0YWJsZVxuICAgICAgICBjZWxsUGFkZGluZz1cIjBcIlxuICAgICAgICBjZWxsU3BhY2luZz1cIjBcIlxuICAgICAgPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge2FjdGl2ZUNvbHVtbnMubWFwKChjb2wsIGkpID0+IChcbiAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGlkPXtgaGVhZGluZy0ke2NvbC5hY2Nlc3Nvcn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvbC5jb21wb25lbnRzLkhlYWRpbmd9XG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2RhdGEgJiYgZGF0YS5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICBrZXk9e3Jvd0luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3ctJHtyb3dJbmRleCArIDF9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbHVtbnMubWFwKChjb2wsIGNvbEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhY3RpdmUgfSA9IGNvbDtcblxuICAgICAgICAgICAgICAgIGlmICghYWN0aXZlKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2VsbC0ke2NvbC5hY2Nlc3Nvcn1gfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29sLmNvbXBvbmVudHMucmVuZGVyQ2VsbChyb3csIHJvd1tjb2wuYWNjZXNzb3JdKX1cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIl0sIm5hbWVzIjpbIlRhYmxlIiwiYmFzZUNsYXNzIiwiZGF0YSIsImNvbHVtbnMiLCJjb2x1bW5zRnJvbVByb3BzIiwidXNlVGFibGVDb2x1bW5zIiwiY29sdW1uc0Zyb21Db250ZXh0IiwiYWN0aXZlQ29sdW1ucyIsImZpbHRlciIsImNvbCIsImFjdGl2ZSIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlIiwiY2VsbFBhZGRpbmciLCJjZWxsU3BhY2luZyIsInRoZWFkIiwidHIiLCJtYXAiLCJpIiwidGgiLCJrZXkiLCJpZCIsImFjY2Vzc29yIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ0Ym9keSIsInJvdyIsInJvd0luZGV4IiwiY29sSW5kZXgiLCJ0ZCIsInJlbmRlckNlbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUWFBLEtBQUs7ZUFBTEE7O0lBOERiLE9BQXFCO2VBQXJCOzs7NERBdEVrQjs0QkFFYztRQUV6Qjs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELFFBQXlCO1FBQUdFLGFBQUFBLE1BQU1DLEFBQVNDLHlCQUFURDtRQU12QkE7SUFMdEIsSUFFSUUsbUJBQUFBLElBQUFBLDZCQUFlLEtBRGpCRixBQUFTRyxxQkFDUEQsaUJBREZGO0lBR0YsSUFBTUEsVUFBV0Msb0JBQW9CRTtJQUNyQyxJQUFNQyxpQkFBZ0JKLFdBQUFBLHFCQUFBQSwrQkFBQUEsU0FBU0ssTUFBTSxDQUFDLFNBQUNDO2VBQVFBLElBQUlDLE1BQU07O0lBRXpELElBQUksQ0FBQ0gsaUJBQWlCQSxjQUFjSSxNQUFNLEtBQUssR0FBRztRQUNoRCxxQkFDRSw2QkFBQ0MsYUFBSTtJQUlUO0lBRUEscUJBQ0UsNkJBQUNBO1FBQUlDLFdBQVdaO3FCQUNkLDZCQUFDYTtRQUNDQyxhQUFZO1FBQ1pDLGFBQVk7cUJBRVosNkJBQUNDLDZCQUNDLDZCQUFDQyxZQUNFWCxjQUFjWSxHQUFHLENBQUMsU0FBQ1YsS0FBS1c7NkJBQ3ZCLDZCQUFDQztZQUNDQyxLQUFLRjtZQUNMRyxJQUFJLEFBQUMsV0FBdUIsT0FBYmQsSUFBSWUsUUFBUTtXQUUxQmYsSUFBSWdCLFVBQVUsQ0FBQ0MsT0FBTzt3QkFLL0IsNkJBQUNDLGVBQ0V6QixRQUFRQSxLQUFLaUIsR0FBRyxDQUFDLFNBQUNTLEtBQUtDOzZCQUN0Qiw2QkFBQ1g7WUFDQ0ksS0FBS087WUFDTGhCLFdBQVcsQUFBQyxPQUFtQixPQUFiZ0IsV0FBVztXQUU1QjFCLFFBQVFnQixHQUFHLENBQUMsU0FBQ1YsS0FBS3FCO1lBQ2pCLElBQU0sQUFBRXBCLFNBQVdELElBQVhDO1lBRVIsSUFBSSxDQUFDQSxRQUFRLE9BQU87WUFFcEIscUJBQ0UsNkJBQUNxQjtnQkFDQ1QsS0FBS1E7Z0JBQ0xqQixXQUFXLEFBQUMsUUFBb0IsT0FBYkosSUFBSWUsUUFBUTtlQUU5QmYsSUFBSWdCLFVBQVUsQ0FBQ08sVUFBVSxDQUFDSixLQUFLQSxHQUFHLENBQUNuQixJQUFJZSxRQUFRLENBQUM7UUFHdkQ7O0FBT2Q7SUFFQSxXQUFleEIifQ==