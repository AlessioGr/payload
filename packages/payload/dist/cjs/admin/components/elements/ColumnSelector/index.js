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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Pill = /*#__PURE__*/ _interop_require_default(require("../Pill"));
var _Plus = /*#__PURE__*/ _interop_require_default(require("../../icons/Plus"));
var _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
var _getTranslation = require("../../../../utilities/getTranslation");
var _EditDepth = require("../../utilities/EditDepth");
var _DraggableSortable = /*#__PURE__*/ _interop_require_default(require("../DraggableSortable"));
var _TableColumns = require("../TableColumns");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var baseClass = "column-selector";
var ColumnSelector = function(props) {
    var collection = props.collection;
    var _useTableColumns = (0, _TableColumns.useTableColumns)(), columns = _useTableColumns.columns, toggleColumn = _useTableColumns.toggleColumn, moveColumn = _useTableColumns.moveColumn;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var uuid = (0, _react.useId)();
    var editDepth = (0, _EditDepth.useEditDepth)();
    if (!columns) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement(_DraggableSortable.default, {
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
        return /*#__PURE__*/ _react.default.createElement(_Pill.default, {
            draggable: true,
            id: accessor,
            onClick: function() {
                toggleColumn(accessor);
            },
            alignIcon: "left",
            key: "".concat(collection.slug, "-").concat(col.name || i).concat(editDepth ? "-".concat(editDepth, "-") : "").concat(uuid),
            icon: active ? /*#__PURE__*/ _react.default.createElement(_X.default, null) : /*#__PURE__*/ _react.default.createElement(_Plus.default, null),
            "aria-checked": active,
            className: [
                "".concat(baseClass, "__column"),
                active && "".concat(baseClass, "__column--active")
            ].filter(Boolean).join(" ")
        }, (0, _getTranslation.getTranslation)(label || name, i18n));
    }));
};
var _default = ColumnSelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvbHVtblNlbGVjdG9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlSWQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgUGx1cyBmcm9tICcuLi8uLi9pY29ucy9QbHVzJztcbmltcG9ydCBYIGZyb20gJy4uLy4uL2ljb25zL1gnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuaW1wb3J0IERyYWdnYWJsZVNvcnRhYmxlIGZyb20gJy4uL0RyYWdnYWJsZVNvcnRhYmxlJztcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1ucyB9IGZyb20gJy4uL1RhYmxlQ29sdW1ucyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbHVtbi1zZWxlY3Rvcic7XG5cbmNvbnN0IENvbHVtblNlbGVjdG9yOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb24sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgY29sdW1ucyxcbiAgICB0b2dnbGVDb2x1bW4sXG4gICAgbW92ZUNvbHVtbixcbiAgfSA9IHVzZVRhYmxlQ29sdW1ucygpO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgdXVpZCA9IHVzZUlkKCk7XG4gIGNvbnN0IGVkaXREZXB0aCA9IHVzZUVkaXREZXB0aCgpO1xuXG4gIGlmICghY29sdW1ucykgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZVNvcnRhYmxlXG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIGlkcz17Y29sdW1ucy5tYXAoKGNvbCkgPT4gY29sLmFjY2Vzc29yKX1cbiAgICAgIG9uRHJhZ0VuZD17KHsgbW92ZUZyb21JbmRleCwgbW92ZVRvSW5kZXggfSkgPT4ge1xuICAgICAgICBtb3ZlQ29sdW1uKHtcbiAgICAgICAgICBmcm9tSW5kZXg6IG1vdmVGcm9tSW5kZXgsXG4gICAgICAgICAgdG9JbmRleDogbW92ZVRvSW5kZXgsXG4gICAgICAgIH0pO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y29sdW1ucy5tYXAoKGNvbCwgaSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgYWNjZXNzb3IsXG4gICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgIH0gPSBjb2w7XG5cbiAgICAgICAgaWYgKGNvbC5hY2Nlc3NvciA9PT0gJ19zZWxlY3QnKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICBkcmFnZ2FibGVcbiAgICAgICAgICAgIGlkPXthY2Nlc3Nvcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlQ29sdW1uKGFjY2Vzc29yKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhbGlnbkljb249XCJsZWZ0XCJcbiAgICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS0ke2NvbC5uYW1lIHx8IGl9JHtlZGl0RGVwdGggPyBgLSR7ZWRpdERlcHRofS1gIDogJyd9JHt1dWlkfWB9XG4gICAgICAgICAgICBpY29uPXthY3RpdmUgPyA8WCAvPiA6IDxQbHVzIC8+fVxuICAgICAgICAgICAgYXJpYS1jaGVja2VkPXthY3RpdmV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fY29sdW1uYCxcbiAgICAgICAgICAgICAgYWN0aXZlICYmIGAke2Jhc2VDbGFzc31fX2NvbHVtbi0tYWN0aXZlYCxcbiAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0VHJhbnNsYXRpb24obGFiZWwgfHwgbmFtZSwgaTE4bil9XG4gICAgICAgICAgPC9QaWxsPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9EcmFnZ2FibGVTb3J0YWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtblNlbGVjdG9yO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkNvbHVtblNlbGVjdG9yIiwicHJvcHMiLCJjb2xsZWN0aW9uIiwidXNlVGFibGVDb2x1bW5zIiwiY29sdW1ucyIsInRvZ2dsZUNvbHVtbiIsIm1vdmVDb2x1bW4iLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJ1dWlkIiwidXNlSWQiLCJlZGl0RGVwdGgiLCJ1c2VFZGl0RGVwdGgiLCJEcmFnZ2FibGVTb3J0YWJsZSIsImNsYXNzTmFtZSIsImlkcyIsIm1hcCIsImNvbCIsImFjY2Vzc29yIiwib25EcmFnRW5kIiwibW92ZUZyb21JbmRleCIsIm1vdmVUb0luZGV4IiwiZnJvbUluZGV4IiwidG9JbmRleCIsImkiLCJhY3RpdmUiLCJsYWJlbCIsIm5hbWUiLCJQaWxsIiwiZHJhZ2dhYmxlIiwiaWQiLCJvbkNsaWNrIiwiYWxpZ25JY29uIiwia2V5Iiwic2x1ZyIsImljb24iLCJYIiwiUGx1cyIsImFyaWEtY2hlY2tlZCIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZ2V0VHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBNkVBOzs7ZUFBQTs7OzZEQTdFNkI7NEJBQ0U7MkRBQ2Q7MkRBQ0E7d0RBQ0g7OEJBRWlCO3lCQUNGO3dFQUNDOzRCQUNFO1FBRXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGlCQUFrQyxTQUFDQztJQUN2QyxJQUFNLEFBQ0pDLGFBQ0VELE1BREZDO0lBR0YsSUFJSUMsbUJBQUFBLElBQUFBLDZCQUFlLEtBSGpCQyxVQUdFRCxpQkFIRkMsU0FDQUMsZUFFRUYsaUJBRkZFLGNBQ0FDLGFBQ0VILGlCQURGRztJQUdGLElBQU0sQUFBRUMsT0FBU0MsSUFBQUEsNEJBQWMsSUFBdkJEO0lBQ1IsSUFBTUUsT0FBT0MsSUFBQUEsWUFBSztJQUNsQixJQUFNQyxZQUFZQyxJQUFBQSx1QkFBWTtJQUU5QixJQUFJLENBQUNSLFNBQVM7UUFBRSxPQUFPO0lBQU07SUFFN0IscUJBQ0UsNkJBQUNTLDBCQUFpQjtRQUNoQkMsV0FBV2Y7UUFDWGdCLEtBQUtYLFFBQVFZLEdBQUcsQ0FBQyxTQUFDQzttQkFBUUEsSUFBSUMsUUFBUTs7UUFDdENDLFdBQVc7Z0JBQUdDLHNCQUFBQSxlQUFlQyxvQkFBQUE7WUFDM0JmLFdBQVc7Z0JBQ1RnQixXQUFXRjtnQkFDWEcsU0FBU0Y7WUFDWDtRQUNGO09BRUNqQixRQUFRWSxHQUFHLENBQUMsU0FBQ0MsS0FBS087UUFDakIsSUFDRU4sV0FJRUQsSUFKRkMsVUFDQU8sU0FHRVIsSUFIRlEsUUFDQUMsUUFFRVQsSUFGRlMsT0FDQUMsT0FDRVYsSUFERlU7UUFHRixJQUFJVixJQUFJQyxRQUFRLEtBQUssV0FBVyxPQUFPO1FBRXZDLHFCQUNFLDZCQUFDVSxhQUFJO1lBQ0hDLFdBQUFBO1lBQ0FDLElBQUlaO1lBQ0phLFNBQVM7Z0JBQ1AxQixhQUFhYTtZQUNmO1lBQ0FjLFdBQVU7WUFDVkMsS0FBSyxBQUFDLEdBQXFCaEIsT0FBbkJmLFdBQVdnQyxJQUFJLEVBQUMsS0FBbUJ2QixPQUFoQk0sSUFBSVUsSUFBSSxJQUFJSCxHQUF3Q2YsT0FBcENFLFlBQVksQUFBQyxJQUFhLE9BQVZBLFdBQVUsT0FBSyxJQUFVLE9BQUxGO1lBQy9FMEIsTUFBTVYsdUJBQVMsNkJBQUNXLFVBQUMsd0JBQU0sNkJBQUNDLGFBQUk7WUFDNUJDLGdCQUFjYjtZQUNkWCxXQUFXO2dCQUNSLEdBQVksT0FBVmYsV0FBVTtnQkFDYjBCLFVBQVUsQUFBQyxHQUFZLE9BQVYxQixXQUFVO2FBQ3hCLENBQUN3QyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztXQUV0QkMsSUFBQUEsOEJBQWMsRUFBQ2hCLFNBQVNDLE1BQU1wQjtJQUdyQztBQUdOO0lBRUEsV0FBZVAifQ==