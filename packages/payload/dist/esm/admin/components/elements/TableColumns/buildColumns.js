function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
import React from "react";
import Cell from "../../views/collections/List/Cell";
import SortColumn from "../SortColumn";
import { fieldIsPresentationalOnly } from "../../../../fields/config/types";
import flattenFields from "../../../../utilities/flattenTopLevelFields";
import SelectAll from "../../views/collections/List/SelectAll";
import SelectRow from "../../views/collections/List/SelectRow";
var buildColumns = function(param) {
    var collection = param.collection, columns = param.columns, cellProps = param.cellProps;
    var _cellProps_, _cellProps;
    // sort the fields to the order of activeColumns
    var sortedFields = flattenFields(collection.fields, true).sort(function(a, b) {
        var aIndex = columns.findIndex(function(column) {
            return column.accessor === a.name;
        });
        var bIndex = columns.findIndex(function(column) {
            return column.accessor === b.name;
        });
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
    });
    var firstActiveColumn = sortedFields.find(function(field) {
        var _columns_find;
        return (_columns_find = columns.find(function(column) {
            return column.accessor === field.name;
        })) === null || _columns_find === void 0 ? void 0 : _columns_find.active;
    });
    var colIndex = -1;
    var cols = sortedFields.map(function(field) {
        var _columns_find, _firstActiveColumn, _cellProps;
        var isActive = ((_columns_find = columns.find(function(column) {
            return column.accessor === field.name;
        })) === null || _columns_find === void 0 ? void 0 : _columns_find.active) || false;
        var isFirstActive = ((_firstActiveColumn = firstActiveColumn) === null || _firstActiveColumn === void 0 ? void 0 : _firstActiveColumn.name) === field.name;
        if (isActive) {
            colIndex += 1;
        }
        var props = ((_cellProps = cellProps) === null || _cellProps === void 0 ? void 0 : _cellProps[colIndex]) || {};
        return {
            active: isActive,
            accessor: field.name,
            name: field.name,
            label: field.label,
            components: {
                Heading: /*#__PURE__*/ React.createElement(SortColumn, {
                    label: field.label || field.name,
                    name: field.name,
                    disable: "disableSort" in field && Boolean(field.disableSort) || fieldIsPresentationalOnly(field) || undefined
                }),
                renderCell: function(rowData, cellData) {
                    return /*#__PURE__*/ React.createElement(Cell, _object_spread({
                        key: JSON.stringify(cellData),
                        field: field,
                        colIndex: colIndex,
                        collection: collection,
                        rowData: rowData,
                        cellData: cellData,
                        link: isFirstActive
                    }, props));
                }
            }
        };
    });
    if (((_cellProps = cellProps) === null || _cellProps === void 0 ? void 0 : (_cellProps_ = _cellProps[0]) === null || _cellProps_ === void 0 ? void 0 : _cellProps_.link) !== false) {
        cols.unshift({
            active: true,
            label: null,
            name: "",
            accessor: "_select",
            components: {
                Heading: /*#__PURE__*/ React.createElement(SelectAll, null),
                renderCell: function(rowData) {
                    return /*#__PURE__*/ React.createElement(SelectRow, {
                        id: rowData.id
                    });
                }
            }
        });
    }
    return cols;
};
export default buildColumns;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9idWlsZENvbHVtbnMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2VsbCBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L0NlbGwnO1xuaW1wb3J0IFNvcnRDb2x1bW4gZnJvbSAnLi4vU29ydENvbHVtbic7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uL1RhYmxlL3R5cGVzJztcbmltcG9ydCB7IGZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBmbGF0dGVuRmllbGRzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9mbGF0dGVuVG9wTGV2ZWxGaWVsZHMnO1xuaW1wb3J0IHsgUHJvcHMgYXMgQ2VsbFByb3BzIH0gZnJvbSAnLi4vLi4vdmlld3MvY29sbGVjdGlvbnMvTGlzdC9DZWxsL3R5cGVzJztcbmltcG9ydCBTZWxlY3RBbGwgZnJvbSAnLi4vLi4vdmlld3MvY29sbGVjdGlvbnMvTGlzdC9TZWxlY3RBbGwnO1xuaW1wb3J0IFNlbGVjdFJvdyBmcm9tICcuLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9MaXN0L1NlbGVjdFJvdyc7XG5cbmNvbnN0IGJ1aWxkQ29sdW1ucyA9ICh7XG4gIGNvbGxlY3Rpb24sXG4gIGNvbHVtbnMsXG4gIGNlbGxQcm9wcyxcbn06IHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyxcbiAgY29sdW1uczogUGljazxDb2x1bW4sICdhY2Nlc3NvcicgfCAnYWN0aXZlJz5bXSxcbiAgY2VsbFByb3BzOiBQYXJ0aWFsPENlbGxQcm9wcz5bXVxufSk6IENvbHVtbltdID0+IHtcbiAgLy8gc29ydCB0aGUgZmllbGRzIHRvIHRoZSBvcmRlciBvZiBhY3RpdmVDb2x1bW5zXG4gIGNvbnN0IHNvcnRlZEZpZWxkcyA9IGZsYXR0ZW5GaWVsZHMoY29sbGVjdGlvbi5maWVsZHMsIHRydWUpLnNvcnQoKGEsIGIpID0+IHtcbiAgICBjb25zdCBhSW5kZXggPSBjb2x1bW5zLmZpbmRJbmRleCgoY29sdW1uKSA9PiBjb2x1bW4uYWNjZXNzb3IgPT09IGEubmFtZSk7XG4gICAgY29uc3QgYkluZGV4ID0gY29sdW1ucy5maW5kSW5kZXgoKGNvbHVtbikgPT4gY29sdW1uLmFjY2Vzc29yID09PSBiLm5hbWUpO1xuICAgIGlmIChhSW5kZXggPT09IC0xICYmIGJJbmRleCA9PT0gLTEpIHJldHVybiAwO1xuICAgIGlmIChhSW5kZXggPT09IC0xKSByZXR1cm4gMTtcbiAgICBpZiAoYkluZGV4ID09PSAtMSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiBhSW5kZXggLSBiSW5kZXg7XG4gIH0pO1xuXG4gIGNvbnN0IGZpcnN0QWN0aXZlQ29sdW1uID0gc29ydGVkRmllbGRzLmZpbmQoKGZpZWxkKSA9PiBjb2x1bW5zLmZpbmQoKGNvbHVtbikgPT4gY29sdW1uLmFjY2Vzc29yID09PSBmaWVsZC5uYW1lKT8uYWN0aXZlKTtcblxuICBsZXQgY29sSW5kZXggPSAtMTtcbiAgY29uc3QgY29sczogQ29sdW1uW10gPSBzb3J0ZWRGaWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGlzQWN0aXZlID0gY29sdW1ucy5maW5kKChjb2x1bW4pID0+IGNvbHVtbi5hY2Nlc3NvciA9PT0gZmllbGQubmFtZSk/LmFjdGl2ZSB8fCBmYWxzZTtcbiAgICBjb25zdCBpc0ZpcnN0QWN0aXZlID0gZmlyc3RBY3RpdmVDb2x1bW4/Lm5hbWUgPT09IGZpZWxkLm5hbWU7XG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICBjb2xJbmRleCArPSAxO1xuICAgIH1cbiAgICBjb25zdCBwcm9wcyA9IGNlbGxQcm9wcz8uW2NvbEluZGV4XSB8fCB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZlOiBpc0FjdGl2ZSxcbiAgICAgIGFjY2Vzc29yOiBmaWVsZC5uYW1lLFxuICAgICAgbmFtZTogZmllbGQubmFtZSxcbiAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVhZGluZzogKFxuICAgICAgICAgIDxTb3J0Q29sdW1uXG4gICAgICAgICAgICBsYWJlbD17ZmllbGQubGFiZWwgfHwgZmllbGQubmFtZX1cbiAgICAgICAgICAgIG5hbWU9e2ZpZWxkLm5hbWV9XG4gICAgICAgICAgICBkaXNhYmxlPXtcbiAgICAgICAgICAgICAgKCdkaXNhYmxlU29ydCcgaW4gZmllbGQgJiYgQm9vbGVhbihmaWVsZC5kaXNhYmxlU29ydCkpXG4gICAgICAgICAgICAgIHx8IGZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkoZmllbGQpXG4gICAgICAgICAgICAgIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICksXG4gICAgICAgIHJlbmRlckNlbGw6IChyb3dEYXRhLCBjZWxsRGF0YSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2VsbFxuICAgICAgICAgICAgICBrZXk9e0pTT04uc3RyaW5naWZ5KGNlbGxEYXRhKX1cbiAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICBjb2xJbmRleD17Y29sSW5kZXh9XG4gICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgIHJvd0RhdGE9e3Jvd0RhdGF9XG4gICAgICAgICAgICAgIGNlbGxEYXRhPXtjZWxsRGF0YX1cbiAgICAgICAgICAgICAgbGluaz17aXNGaXJzdEFjdGl2ZX1cbiAgICAgICAgICAgICAgey4uLihwcm9wcyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuXG4gIGlmIChjZWxsUHJvcHM/LlswXT8ubGluayAhPT0gZmFsc2UpIHtcbiAgICBjb2xzLnVuc2hpZnQoe1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgbGFiZWw6IG51bGwsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGFjY2Vzc29yOiAnX3NlbGVjdCcsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhlYWRpbmc6IChcbiAgICAgICAgICA8U2VsZWN0QWxsIC8+XG4gICAgICAgICksXG4gICAgICAgIHJlbmRlckNlbGw6IChyb3dEYXRhKSA9PiAoXG4gICAgICAgICAgPFNlbGVjdFJvd1xuICAgICAgICAgICAgaWQ9e3Jvd0RhdGEuaWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY29scztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkQ29sdW1ucztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNlbGwiLCJTb3J0Q29sdW1uIiwiZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSIsImZsYXR0ZW5GaWVsZHMiLCJTZWxlY3RBbGwiLCJTZWxlY3RSb3ciLCJidWlsZENvbHVtbnMiLCJjb2xsZWN0aW9uIiwiY29sdW1ucyIsImNlbGxQcm9wcyIsInNvcnRlZEZpZWxkcyIsImZpZWxkcyIsInNvcnQiLCJhIiwiYiIsImFJbmRleCIsImZpbmRJbmRleCIsImNvbHVtbiIsImFjY2Vzc29yIiwibmFtZSIsImJJbmRleCIsImZpcnN0QWN0aXZlQ29sdW1uIiwiZmluZCIsImZpZWxkIiwiYWN0aXZlIiwiY29sSW5kZXgiLCJjb2xzIiwibWFwIiwiaXNBY3RpdmUiLCJpc0ZpcnN0QWN0aXZlIiwicHJvcHMiLCJsYWJlbCIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwiZGlzYWJsZSIsIkJvb2xlYW4iLCJkaXNhYmxlU29ydCIsInVuZGVmaW5lZCIsInJlbmRlckNlbGwiLCJyb3dEYXRhIiwiY2VsbERhdGEiLCJrZXkiLCJKU09OIiwic3RyaW5naWZ5IiwibGluayIsInVuc2hpZnQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixPQUFPQyxVQUFVLG9DQUFvQztBQUNyRCxPQUFPQyxnQkFBZ0IsZ0JBQWdCO0FBR3ZDLFNBQVNDLHlCQUF5QixRQUFRLGtDQUFrQztBQUM1RSxPQUFPQyxtQkFBbUIsOENBQThDO0FBRXhFLE9BQU9DLGVBQWUseUNBQXlDO0FBQy9ELE9BQU9DLGVBQWUseUNBQXlDO0FBRS9ELElBQU1DLGVBQWU7UUFDbkJDLG1CQUFBQSxZQUNBQyxnQkFBQUEsU0FDQUMsa0JBQUFBO1FBNkRJQSxhQUFBQTtJQXZESixnREFBZ0Q7SUFDaEQsSUFBTUMsZUFBZVAsY0FBY0ksV0FBV0ksTUFBTSxFQUFFLE1BQU1DLElBQUksQ0FBQyxTQUFDQyxHQUFHQztRQUNuRSxJQUFNQyxTQUFTUCxRQUFRUSxTQUFTLENBQUMsU0FBQ0M7bUJBQVdBLE9BQU9DLFFBQVEsS0FBS0wsRUFBRU0sSUFBSTs7UUFDdkUsSUFBTUMsU0FBU1osUUFBUVEsU0FBUyxDQUFDLFNBQUNDO21CQUFXQSxPQUFPQyxRQUFRLEtBQUtKLEVBQUVLLElBQUk7O1FBQ3ZFLElBQUlKLFdBQVcsQ0FBQyxLQUFLSyxXQUFXLENBQUMsR0FBRyxPQUFPO1FBQzNDLElBQUlMLFdBQVcsQ0FBQyxHQUFHLE9BQU87UUFDMUIsSUFBSUssV0FBVyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzNCLE9BQU9MLFNBQVNLO0lBQ2xCO0lBRUEsSUFBTUMsb0JBQW9CWCxhQUFhWSxJQUFJLENBQUMsU0FBQ0M7WUFBVWY7Z0JBQUFBLGdCQUFBQSxRQUFRYyxJQUFJLENBQUMsU0FBQ0w7bUJBQVdBLE9BQU9DLFFBQVEsS0FBS0ssTUFBTUosSUFBSTt3QkFBdkRYLG9DQUFBQSxjQUEwRGdCLE1BQU07O0lBRXZILElBQUlDLFdBQVcsQ0FBQztJQUNoQixJQUFNQyxPQUFpQmhCLGFBQWFpQixHQUFHLENBQUMsU0FBQ0o7WUFDdEJmLGVBQ0thLG9CQUlSWjtRQUxkLElBQU1tQixXQUFXcEIsRUFBQUEsZ0JBQUFBLFFBQVFjLElBQUksQ0FBQyxTQUFDTDttQkFBV0EsT0FBT0MsUUFBUSxLQUFLSyxNQUFNSixJQUFJO3dCQUF2RFgsb0NBQUFBLGNBQTBEZ0IsTUFBTSxLQUFJO1FBQ3JGLElBQU1LLGdCQUFnQlIsRUFBQUEscUJBQUFBLCtCQUFBQSx5Q0FBQUEsbUJBQW1CRixJQUFJLE1BQUtJLE1BQU1KLElBQUk7UUFDNUQsSUFBSVMsVUFBVTtZQUNaSCxZQUFZO1FBQ2Q7UUFDQSxJQUFNSyxRQUFRckIsRUFBQUEsYUFBQUEsdUJBQUFBLGlDQUFBQSxVQUFXLENBQUNnQixTQUFTLEtBQUksQ0FBQztRQUN4QyxPQUFPO1lBQ0xELFFBQVFJO1lBQ1JWLFVBQVVLLE1BQU1KLElBQUk7WUFDcEJBLE1BQU1JLE1BQU1KLElBQUk7WUFDaEJZLE9BQU9SLE1BQU1RLEtBQUs7WUFDbEJDLFlBQVk7Z0JBQ1ZDLHVCQUNFLG9CQUFDaEM7b0JBQ0M4QixPQUFPUixNQUFNUSxLQUFLLElBQUlSLE1BQU1KLElBQUk7b0JBQ2hDQSxNQUFNSSxNQUFNSixJQUFJO29CQUNoQmUsU0FDRSxBQUFDLGlCQUFpQlgsU0FBU1ksUUFBUVosTUFBTWEsV0FBVyxLQUNqRGxDLDBCQUEwQnFCLFVBQzFCYzs7Z0JBSVRDLFlBQVksU0FBQ0MsU0FBU0M7b0JBQ3BCLHFCQUNFLG9CQUFDeEM7d0JBQ0N5QyxLQUFLQyxLQUFLQyxTQUFTLENBQUNIO3dCQUNwQmpCLE9BQU9BO3dCQUNQRSxVQUFVQTt3QkFDVmxCLFlBQVlBO3dCQUNaZ0MsU0FBU0E7d0JBQ1RDLFVBQVVBO3dCQUNWSSxNQUFNZjt1QkFDREM7Z0JBR1g7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxJQUFJckIsRUFBQUEsYUFBQUEsdUJBQUFBLGtDQUFBQSxjQUFBQSxVQUFXLENBQUMsRUFBRSxjQUFkQSxrQ0FBQUEsWUFBZ0JtQyxJQUFJLE1BQUssT0FBTztRQUNsQ2xCLEtBQUttQixPQUFPLENBQUM7WUFDWHJCLFFBQVE7WUFDUk8sT0FBTztZQUNQWixNQUFNO1lBQ05ELFVBQVU7WUFDVmMsWUFBWTtnQkFDVkMsdUJBQ0Usb0JBQUM3QjtnQkFFSGtDLFlBQVksU0FBQ0M7eUNBQ1gsb0JBQUNsQzt3QkFDQ3lDLElBQUlQLFFBQVFPLEVBQUU7OztZQUdwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPcEI7QUFDVDtBQUVBLGVBQWVwQixhQUFhIn0=