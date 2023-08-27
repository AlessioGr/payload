import React, { useId } from "react";
import { useTranslation } from "react-i18next";
import Pill from "../Pill";
import Plus from "../../icons/Plus";
import X from "../../icons/X";
import { getTranslation } from "../../../../utilities/getTranslation";
import { useEditDepth } from "../../utilities/EditDepth";
import DraggableSortable from "../DraggableSortable";
import { useTableColumns } from "../TableColumns";
import "./index.scss";
var baseClass = "column-selector";
var ColumnSelector = function(props) {
    var collection = props.collection;
    var _useTableColumns = useTableColumns(), columns = _useTableColumns.columns, toggleColumn = _useTableColumns.toggleColumn, moveColumn = _useTableColumns.moveColumn;
    var i18n = useTranslation().i18n;
    var uuid = useId();
    var editDepth = useEditDepth();
    if (!columns) {
        return null;
    }
    return /*#__PURE__*/ React.createElement(DraggableSortable, {
        className: baseClass,
        ids: columns.map(function(col) {
            return col.accessor;
        }),
        onDragEnd: function(param) {
            var moveFromIndex = param.moveFromIndex, moveToIndex = param.moveToIndex;
            moveColumn({
                fromIndex: moveFromIndex,
                toIndex: moveToIndex
            });
        }
    }, columns.map(function(col, i) {
        var accessor = col.accessor, active = col.active, label = col.label, name = col.name;
        if (col.accessor === "_select") return null;
        return /*#__PURE__*/ React.createElement(Pill, {
            draggable: true,
            id: accessor,
            onClick: function() {
                toggleColumn(accessor);
            },
            alignIcon: "left",
            key: "".concat(collection.slug, "-").concat(col.name || i).concat(editDepth ? "-".concat(editDepth, "-") : "").concat(uuid),
            icon: active ? /*#__PURE__*/ React.createElement(X, null) : /*#__PURE__*/ React.createElement(Plus, null),
            "aria-checked": active,
            className: [
                "".concat(baseClass, "__column"),
                active && "".concat(baseClass, "__column--active")
            ].filter(Boolean).join(" ")
        }, getTranslation(label || name, i18n));
    }));
};
export default ColumnSelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvbHVtblNlbGVjdG9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgUGx1cyBmcm9tICcuLi8uLi9pY29ucy9QbHVzJztcbmltcG9ydCBYIGZyb20gJy4uLy4uL2ljb25zL1gnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuaW1wb3J0IERyYWdnYWJsZVNvcnRhYmxlIGZyb20gJy4uL0RyYWdnYWJsZVNvcnRhYmxlJztcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1ucyB9IGZyb20gJy4uL1RhYmxlQ29sdW1ucyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbHVtbi1zZWxlY3Rvcic7XG5cbmNvbnN0IENvbHVtblNlbGVjdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb24sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgY29sdW1ucyxcbiAgICB0b2dnbGVDb2x1bW4sXG4gICAgbW92ZUNvbHVtbixcbiAgfSA9IHVzZVRhYmxlQ29sdW1ucygpO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgdXVpZCA9IHVzZUlkKCk7XG4gIGNvbnN0IGVkaXREZXB0aCA9IHVzZUVkaXREZXB0aCgpO1xuXG4gIGlmICghY29sdW1ucykgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZVNvcnRhYmxlXG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIGlkcz17Y29sdW1ucy5tYXAoKGNvbCkgPT4gY29sLmFjY2Vzc29yKX1cbiAgICAgIG9uRHJhZ0VuZD17KHsgbW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXggfSkgPT4ge1xuICAgICAgICBtb3ZlQ29sdW1uKHtcbiAgICAgICAgICBmcm9tSW5kZXg6IG1vdmVGcm9tSW5kZXgsXG4gICAgICAgICAgdG9JbmRleDogbW92ZVRvSW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgYWNjZXNzb3IsXG4gICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgIH0gPSBjb2w7XG5cbiAgICAgICAgaWYgKGNvbC5hY2Nlc3NvciA9PT0gJ19zZWxlY3QnKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIGlkPXthY2Nlc3Nvcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlQ29sdW1uKGFjY2Vzc29yKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhbGlnbkljb249XCJsZWZ0XCJcbiAgICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS0ke2NvbC5uYW1lIHx8IGl9JHtlZGl0RGVwdGggPyBgLSR7ZWRpdERlcHRofS1gIDogJyd9JHt1dWlkfWB9XG4gICAgICAgICAgICBpY29uPXthY3RpdmUgPyA8WCAvPiA6IDxQbHVzIC8+fVxuICAgICAgICAgICAgYXJpYS1jaGVja2VkPXthY3RpdmV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fY29sdW1uYCxcbiAgICAgICAgICAgICAgYWN0aXZlICYmIGAke2Jhc2VDbGFzc31fX2NvbHVtbi0tYWN0aXZlYCxcbiAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0VHJhbnNsYXRpb24obGFiZWwgfHwgbmFtZSwgaTE4bil9XG4gICAgICAgICAgPC9QaWxsPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9EcmFnZ2FibGVTb3J0YWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtblNlbGVjdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlSWQiLCJ1c2VUcmFuc2xhdGlvbiIsIlBpbGwiLCJQbHVzIiwiWCIsImdldFRyYW5zbGF0aW9uIiwidXNlRWRpdERlcHRoIiwiRHJhZ2dhYmxlU29ydGFibGUiLCJ1c2VUYWJsZUNvbHVtbnMiLCJiYXNlQ2xhc3MiLCJDb2x1bW5TZWxlY3RvciIsInByb3BzIiwiY29sbGVjdGlvbiIsImNvbHVtbnMiLCJ0b2dnbGVDb2x1bW4iLCJtb3ZlQ29sdW1uIiwiaTE4biIsInV1aWQiLCJlZGl0RGVwdGgiLCJjbGFzc05hbWUiLCJpZHMiLCJtYXAiLCJjb2wiLCJhY2Nlc3NvciIsIm9uRHJhZ0VuZCIsIm1vdmVGcm9tSW5kZXgiLCJtb3ZlVG9JbmRleCIsImZyb21JbmRleCIsInRvSW5kZXgiLCJpIiwiYWN0aXZlIiwibGFiZWwiLCJuYW1lIiwiZHJhZ2dhYmxlIiwiaWQiLCJvbkNsaWNrIiwiYWxpZ25JY29uIiwia2V5Iiwic2x1ZyIsImljb24iLCJhcmlhLWNoZWNrZWQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsS0FBSyxRQUFRLFFBQVE7QUFDckMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxVQUFVLFVBQVU7QUFDM0IsT0FBT0MsVUFBVSxtQkFBbUI7QUFDcEMsT0FBT0MsT0FBTyxnQkFBZ0I7QUFFOUIsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUN0RSxTQUFTQyxZQUFZLFFBQVEsNEJBQTRCO0FBQ3pELE9BQU9DLHVCQUF1Qix1QkFBdUI7QUFDckQsU0FBU0MsZUFBZSxRQUFRLGtCQUFrQjtBQUVsRCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxpQkFBa0MsU0FBQ0M7SUFDdkMsSUFBTSxBQUNKQyxhQUNFRCxNQURGQztJQUdGLElBSUlKLG1CQUFBQSxtQkFIRkssVUFHRUwsaUJBSEZLLFNBQ0FDLGVBRUVOLGlCQUZGTSxjQUNBQyxhQUNFUCxpQkFERk87SUFHRixJQUFNLEFBQUVDLE9BQVNmLGlCQUFUZTtJQUNSLElBQU1DLE9BQU9qQjtJQUNiLElBQU1rQixZQUFZWjtJQUVsQixJQUFJLENBQUNPLFNBQVM7UUFBRSxPQUFPO0lBQU07SUFFN0IscUJBQ0Usb0JBQUNOO1FBQ0NZLFdBQVdWO1FBQ1hXLEtBQUtQLFFBQVFRLEdBQUcsQ0FBQyxTQUFDQzttQkFBUUEsSUFBSUMsUUFBUTs7UUFDdENDLFdBQVc7Z0JBQUdDLHNCQUFBQSxlQUFlQyxvQkFBQUE7WUFDM0JYLFdBQVc7Z0JBQ1RZLFdBQVdGO2dCQUNYRyxTQUFTRjtZQUNYO1FBQ0Y7T0FFQ2IsUUFBUVEsR0FBRyxDQUFDLFNBQUNDLEtBQUtPO1FBQ2pCLElBQ0VOLFdBSUVELElBSkZDLFVBQ0FPLFNBR0VSLElBSEZRLFFBQ0FDLFFBRUVULElBRkZTLE9BQ0FDLE9BQ0VWLElBREZVO1FBR0YsSUFBSVYsSUFBSUMsUUFBUSxLQUFLLFdBQVcsT0FBTztRQUV2QyxxQkFDRSxvQkFBQ3JCO1lBQ0MrQixXQUFBQTtZQUNBQyxJQUFJWDtZQUNKWSxTQUFTO2dCQUNQckIsYUFBYVM7WUFDZjtZQUNBYSxXQUFVO1lBQ1ZDLEtBQUssQUFBQyxHQUFxQmYsT0FBbkJWLFdBQVcwQixJQUFJLEVBQUMsS0FBbUJwQixPQUFoQkksSUFBSVUsSUFBSSxJQUFJSCxHQUF3Q1osT0FBcENDLFlBQVksQUFBQyxJQUFhLE9BQVZBLFdBQVUsT0FBSyxJQUFVLE9BQUxEO1lBQy9Fc0IsTUFBTVQsdUJBQVMsb0JBQUMxQix5QkFBTyxvQkFBQ0Q7WUFDeEJxQyxnQkFBY1Y7WUFDZFgsV0FBVztnQkFDUixHQUFZLE9BQVZWLFdBQVU7Z0JBQ2JxQixVQUFVLEFBQUMsR0FBWSxPQUFWckIsV0FBVTthQUN4QixDQUFDZ0MsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7V0FFdEJ0QyxlQUFlMEIsU0FBU0MsTUFBTWhCO0lBR3JDO0FBR047QUFFQSxlQUFlTixlQUFlIn0=