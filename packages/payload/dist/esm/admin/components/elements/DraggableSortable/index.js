import React, { useCallback, useId } from "react";
import { SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useDroppable, DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
var DraggableSortable = function(props) {
    var onDragEnd = props.onDragEnd, ids = props.ids, className = props.className, children = props.children;
    var id = useId();
    var setNodeRef = useDroppable({
        id: id
    }).setNodeRef;
    var sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 5
        }
    }), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }));
    var handleDragEnd = useCallback(function(event) {
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
    return /*#__PURE__*/ React.createElement(DndContext, {
        onDragEnd: handleDragEnd,
        sensors: sensors,
        collisionDetection: closestCenter
    }, /*#__PURE__*/ React.createElement(SortableContext, {
        items: ids
    }, /*#__PURE__*/ React.createElement("div", {
        className: className,
        ref: setNodeRef
    }, children)));
};
export default DraggableSortable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUlkIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU29ydGFibGVDb250ZXh0LCBzb3J0YWJsZUtleWJvYXJkQ29vcmRpbmF0ZXMgfSBmcm9tICdAZG5kLWtpdC9zb3J0YWJsZSc7XG5pbXBvcnQge1xuICBEcmFnRW5kRXZlbnQsXG4gIHVzZURyb3BwYWJsZSxcbiAgRG5kQ29udGV4dCxcbiAgY2xvc2VzdENlbnRlcixcbiAgS2V5Ym9hcmRTZW5zb3IsXG4gIFBvaW50ZXJTZW5zb3IsXG4gIHVzZVNlbnNvcixcbiAgdXNlU2Vuc29ycyxcbn0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5cbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IERyYWdnYWJsZVNvcnRhYmxlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG9uRHJhZ0VuZCxcbiAgICBpZHMsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNoaWxkcmVuLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaWQgPSB1c2VJZCgpO1xuXG4gIGNvbnN0IHsgc2V0Tm9kZVJlZiB9ID0gdXNlRHJvcHBhYmxlKHtcbiAgICBpZCxcbiAgfSk7XG5cbiAgY29uc3Qgc2Vuc29ycyA9IHVzZVNlbnNvcnMoXG4gICAgdXNlU2Vuc29yKFBvaW50ZXJTZW5zb3IsIHtcbiAgICAgIGFjdGl2YXRpb25Db25zdHJhaW50OiB7XG4gICAgICAgIGRpc3RhbmNlOiA1LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB1c2VTZW5zb3IoS2V5Ym9hcmRTZW5zb3IsIHtcbiAgICAgIGNvb3JkaW5hdGVHZXR0ZXI6IHNvcnRhYmxlS2V5Ym9hcmRDb29yZGluYXRlcyxcbiAgICB9KSxcbiAgKTtcblxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBEcmFnRW5kRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb3ZlciB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoIWFjdGl2ZSB8fCAhb3ZlcikgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiBvbkRyYWdFbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uRHJhZ0VuZCh7XG4gICAgICAgIGV2ZW50LFxuICAgICAgICBtb3ZlRnJvbUluZGV4OiBpZHMuZmluZEluZGV4KChfaWQpID0+IF9pZCA9PT0gYWN0aXZlLmlkKSxcbiAgICAgICAgbW92ZVRvSW5kZXg6IGlkcy5maW5kSW5kZXgoKF9pZCkgPT4gX2lkID09PSBvdmVyLmlkKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW29uRHJhZ0VuZCwgaWRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RG5kQ29udGV4dFxuICAgICAgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfVxuICAgICAgc2Vuc29ycz17c2Vuc29yc31cbiAgICAgIGNvbGxpc2lvbkRldGVjdGlvbj17Y2xvc2VzdENlbnRlcn1cbiAgICA+XG4gICAgICA8U29ydGFibGVDb250ZXh0IGl0ZW1zPXtpZHN9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgcmVmPXtzZXROb2RlUmVmfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU29ydGFibGVDb250ZXh0PlxuICAgIDwvRG5kQ29udGV4dD5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlU29ydGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUlkIiwiU29ydGFibGVDb250ZXh0Iiwic29ydGFibGVLZXlib2FyZENvb3JkaW5hdGVzIiwidXNlRHJvcHBhYmxlIiwiRG5kQ29udGV4dCIsImNsb3Nlc3RDZW50ZXIiLCJLZXlib2FyZFNlbnNvciIsIlBvaW50ZXJTZW5zb3IiLCJ1c2VTZW5zb3IiLCJ1c2VTZW5zb3JzIiwiRHJhZ2dhYmxlU29ydGFibGUiLCJwcm9wcyIsIm9uRHJhZ0VuZCIsImlkcyIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaWQiLCJzZXROb2RlUmVmIiwic2Vuc29ycyIsImFjdGl2YXRpb25Db25zdHJhaW50IiwiZGlzdGFuY2UiLCJjb29yZGluYXRlR2V0dGVyIiwiaGFuZGxlRHJhZ0VuZCIsImV2ZW50IiwiYWN0aXZlIiwib3ZlciIsIm1vdmVGcm9tSW5kZXgiLCJmaW5kSW5kZXgiLCJfaWQiLCJtb3ZlVG9JbmRleCIsImNvbGxpc2lvbkRldGVjdGlvbiIsIml0ZW1zIiwiZGl2IiwicmVmIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFTQyxXQUFXLEVBQUVDLEtBQUssUUFBUSxRQUFRO0FBQ2xELFNBQVNDLGVBQWUsRUFBRUMsMkJBQTJCLFFBQVEsb0JBQW9CO0FBQ2pGLFNBRUVDLFlBQVksRUFDWkMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLGNBQWMsRUFDZEMsYUFBYSxFQUNiQyxTQUFTLEVBQ1RDLFVBQVUsUUFDTCxnQkFBZ0I7QUFJdkIsSUFBTUMsb0JBQXFDLFNBQUNDO0lBQzFDLElBQ0VDLFlBSUVELE1BSkZDLFdBQ0FDLE1BR0VGLE1BSEZFLEtBQ0FDLFlBRUVILE1BRkZHLFdBQ0FDLFdBQ0VKLE1BREZJO0lBR0YsSUFBTUMsS0FBS2hCO0lBRVgsSUFBTSxBQUFFaUIsYUFBZWQsYUFBYTtRQUNsQ2EsSUFBQUE7SUFDRixHQUZRQztJQUlSLElBQU1DLFVBQVVULFdBQ2RELFVBQVVELGVBQWU7UUFDdkJZLHNCQUFzQjtZQUNwQkMsVUFBVTtRQUNaO0lBQ0YsSUFDQVosVUFBVUYsZ0JBQWdCO1FBQ3hCZSxrQkFBa0JuQjtJQUNwQjtJQUdGLElBQU1vQixnQkFBZ0J2QixZQUFZLFNBQUN3QjtRQUNqQyxJQUFRQyxTQUFpQkQsTUFBakJDLFFBQVFDLE9BQVNGLE1BQVRFO1FBRWhCLElBQUksQ0FBQ0QsVUFBVSxDQUFDQyxNQUFNO1FBRXRCLElBQUksT0FBT2IsY0FBYyxZQUFZO1lBQ25DQSxVQUFVO2dCQUNSVyxPQUFBQTtnQkFDQUcsZUFBZWIsSUFBSWMsU0FBUyxDQUFDLFNBQUNDOzJCQUFRQSxRQUFRSixPQUFPUixFQUFFOztnQkFDdkRhLGFBQWFoQixJQUFJYyxTQUFTLENBQUMsU0FBQ0M7MkJBQVFBLFFBQVFILEtBQUtULEVBQUU7O1lBQ3JEO1FBQ0Y7SUFDRixHQUFHO1FBQUNKO1FBQVdDO0tBQUk7SUFFbkIscUJBQ0Usb0JBQUNUO1FBQ0NRLFdBQVdVO1FBQ1hKLFNBQVNBO1FBQ1RZLG9CQUFvQnpCO3FCQUVwQixvQkFBQ0o7UUFBZ0I4QixPQUFPbEI7cUJBQ3RCLG9CQUFDbUI7UUFDQ2xCLFdBQVdBO1FBQ1htQixLQUFLaEI7T0FFSkY7QUFNWDtBQUVBLGVBQWVMLGtCQUFrQiJ9