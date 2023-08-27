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
var _sortable = require("@dnd-kit/sortable");
var _core = require("@dnd-kit/core");
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
var DraggableSortable = function(props) {
    var onDragEnd = props.onDragEnd, ids = props.ids, className = props.className, children = props.children;
    var id = (0, _react.useId)();
    var setNodeRef = (0, _core.useDroppable)({
        id: id
    }).setNodeRef;
    var sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.PointerSensor, {
        activationConstraint: {
            distance: 5
        }
    }), (0, _core.useSensor)(_core.KeyboardSensor, {
        coordinateGetter: _sortable.sortableKeyboardCoordinates
    }));
    var handleDragEnd = (0, _react.useCallback)(function(event) {
        var active = event.active, over = event.over;
        if (!active || !over) return;
        if (typeof onDragEnd === "function") {
            onDragEnd({
                event: event,
                moveFromIndex: ids.findIndex(function(_id) {
                    return _id === active.id;
                }),
                moveToIndex: ids.findIndex(function(_id) {
                    return _id === over.id;
                })
            });
        }
    }, [
        onDragEnd,
        ids
    ]);
    return /*#__PURE__*/ _react.default.createElement(_core.DndContext, {
        onDragEnd: handleDragEnd,
        sensors: sensors,
        collisionDetection: _core.closestCenter
    }, /*#__PURE__*/ _react.default.createElement(_sortable.SortableContext, {
        items: ids
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: className,
        ref: setNodeRef
    }, children)));
};
var _default = DraggableSortable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUlkIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ydGFibGVDb250ZXh0LCBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMgfSBmcm9tICdAZG5kLWtpdC9zb3J0YWJsZSc7XG5pbXBvcnQge1xuICBEcmFnRW5kRXZlbnQsXG4gIHVzZURyb3BwYWJsZSxcbiAgRG5kQ29udGV4dCxcbiAgY2xvc2VzdENlbnRlcixcbiAgS2V5Ym9hcmRTZW5zb3IsXG4gIFBvaW50ZXJTZW5zb3IsXG4gIHVzZVNlbnNvcixcbiAgdXNlU2Vuc29ycyxcbn0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5cbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IERyYWdnYWJsZVNvcnRhYmxlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uRHJhZ0VuZCxcbiAgICBpZHMsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWQgPSB1c2VJZCgpO1xuXG4gIGNvbnN0IHsgc2V0Tm9kZVJlZiB9ID0gdXNlRHJvcHBhYmxlKHtcbiAgICBpZCxcbiAgfSk7XG5cbiAgY29uc3Qgc2Vuc29ycyA9IHVzZVNlbnNvcnMoXG4gICAgdXNlU2Vuc29yKFBvaW50ZXJTZW5zb3IsIHtcbiAgICAgIGFjdGl2YXRpb25Db25zdHJhaW50OiB7XG4gICAgICAgIGRpc3RhbmNlOiA1LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IsIHtcbiAgICAgIGNvb3JkaW5hdGVHZXR0ZXI6IHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcbiAgICB9KSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBEcmFnRW5kRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoIWFjdGl2ZSB8fCAhb3ZlcikgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiBvbkRyYWdFbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uRHJhZ0VuZCh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtb3ZlRnJvbUluZGV4OiBpZHMuZmluZEluZGV4KChfaWQpID0+IF9pZCA9PT0gYWN0aXZlLmlkKSxcbiAgICAgICAgbW92ZVRvSW5kZXg6IGlkcy5maW5kSW5kZXgoKF9pZCkgPT4gX2lkID09PSBvdmVyLmlkKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW29uRHJhZ0VuZCwgaWRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RG5kQ29udGV4dFxuICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgc2Vuc29ycz17c2Vuc29yc31cbiAgICAgIGNvbGxpc2lvbkRldGVjdGlvbj17Y2xvc2VzdENlbnRlcn1cbiAgICA+XG4gICAgICA8U29ydGFibGVDb250ZXh0IGl0ZW1zPXtpZHN9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU29ydGFibGVDb250ZXh0PlxuICAgIDwvRG5kQ29udGV4dD5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlU29ydGFibGU7XG4iXSwibmFtZXMiOlsiRHJhZ2dhYmxlU29ydGFibGUiLCJwcm9wcyIsIm9uRHJhZ0VuZCIsImlkcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaWQiLCJ1c2VJZCIsInNldE5vZGVSZWYiLCJ1c2VEcm9wcGFibGUiLCJzZW5zb3JzIiwidXNlU2Vuc29ycyIsInVzZVNlbnNvciIsIlBvaW50ZXJTZW5zb3IiLCJhY3RpdmF0aW9uQ29uc3RyYWludCIsImRpc3RhbmNlIiwiS2V5Ym9hcmRTZW5zb3IiLCJjb29yZGluYXRlR2V0dGVyIiwic29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzIiwiaGFuZGxlRHJhZ0VuZCIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJhY3RpdmUiLCJvdmVyIiwibW92ZUZyb21JbmRleCIsImZpbmRJbmRleCIsIl9pZCIsIm1vdmVUb0luZGV4IiwiRG5kQ29udGV4dCIsImNvbGxpc2lvbkRldGVjdGlvbiIsImNsb3Nlc3RDZW50ZXIiLCJTb3J0YWJsZUNvbnRleHQiLCJpdGVtcyIsImRpdiIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF5RUE7OztlQUFBOzs7NkRBekUwQzt3QkFDbUI7b0JBVXREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVAsSUFBTUEsb0JBQXFDLFNBQUNDO0lBQzFDLElBQ0VDLFlBSUVELE1BSkZDLFdBQ0FDLE1BR0VGLE1BSEZFLEtBQ0FDLFlBRUVILE1BRkZHLFdBQ0FDLFdBQ0VKLE1BREZJO0lBR0YsSUFBTUMsS0FBS0MsSUFBQUEsWUFBSztJQUVoQixJQUFNLEFBQUVDLGFBQWVDLElBQUFBLGtCQUFZLEVBQUM7UUFDbENILElBQUFBO0lBQ0YsR0FGUUU7SUFJUixJQUFNRSxVQUFVQyxJQUFBQSxnQkFBVSxFQUN4QkMsSUFBQUEsZUFBUyxFQUFDQyxtQkFBYSxFQUFFO1FBQ3ZCQyxzQkFBc0I7WUFDcEJDLFVBQVU7UUFDWjtJQUNGLElBQ0FILElBQUFBLGVBQVMsRUFBQ0ksb0JBQWMsRUFBRTtRQUN4QkMsa0JBQWtCQyxxQ0FBMkI7SUFDL0M7SUFHRixJQUFNQyxnQkFBZ0JDLElBQUFBLGtCQUFXLEVBQUMsU0FBQ0M7UUFDakMsSUFBUUMsU0FBaUJELE1BQWpCQyxRQUFRQyxPQUFTRixNQUFURTtRQUVoQixJQUFJLENBQUNELFVBQVUsQ0FBQ0MsTUFBTTtRQUV0QixJQUFJLE9BQU9yQixjQUFjLFlBQVk7WUFDbkNBLFVBQVU7Z0JBQ1JtQixPQUFBQTtnQkFDQUcsZUFBZXJCLElBQUlzQixTQUFTLENBQUMsU0FBQ0M7MkJBQVFBLFFBQVFKLE9BQU9oQixFQUFFOztnQkFDdkRxQixhQUFheEIsSUFBSXNCLFNBQVMsQ0FBQyxTQUFDQzsyQkFBUUEsUUFBUUgsS0FBS2pCLEVBQUU7O1lBQ3JEO1FBQ0Y7SUFDRixHQUFHO1FBQUNKO1FBQVdDO0tBQUk7SUFFbkIscUJBQ0UsNkJBQUN5QixnQkFBVTtRQUNUMUIsV0FBV2lCO1FBQ1hULFNBQVNBO1FBQ1RtQixvQkFBb0JDLG1CQUFhO3FCQUVqQyw2QkFBQ0MseUJBQWU7UUFBQ0MsT0FBTzdCO3FCQUN0Qiw2QkFBQzhCO1FBQ0M3QixXQUFXQTtRQUNYOEIsS0FBSzFCO09BRUpIO0FBTVg7SUFFQSxXQUFlTCJ9