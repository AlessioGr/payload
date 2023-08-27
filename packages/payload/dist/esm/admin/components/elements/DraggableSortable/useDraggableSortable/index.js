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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import { useSortable } from "@dnd-kit/sortable";
export var useDraggableSortable = function(props) {
    var id = props.id, disabled = props.disabled;
    var _useSortable = useSortable({
        id: id,
        disabled: disabled
    }), attributes = _useSortable.attributes, listeners = _useSortable.listeners, setNodeRef = _useSortable.setNodeRef, transform = _useSortable.transform, isDragging = _useSortable.isDragging;
    return {
        attributes: _object_spread_props(_object_spread({}, attributes), {
            style: {
                cursor: isDragging ? "grabbing" : "grab"
            }
        }),
        isDragging: isDragging,
        listeners: listeners,
        setNodeRef: setNodeRef,
        transform: transform && "translate3d(".concat(transform.x, "px, ").concat(transform.y, "px, 0)")
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL3VzZURyYWdnYWJsZVNvcnRhYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTb3J0YWJsZSB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IFVzZURyYWdnYWJsZUFyZ3VtZW50cyB9IGZyb20gJ0BkbmQta2l0L2NvcmUnO1xuaW1wb3J0IHsgVXNlRHJhZ2dhYmxlU29ydGFibGVSZXR1cm4gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHVzZURyYWdnYWJsZVNvcnRhYmxlID0gKHByb3BzOiBVc2VEcmFnZ2FibGVBcmd1bWVudHMpOiBVc2VEcmFnZ2FibGVTb3J0YWJsZVJldHVybiA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICBkaXNhYmxlZCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgYXR0cmlidXRlcywgbGlzdGVuZXJzLCBzZXROb2RlUmVmLCB0cmFuc2Zvcm0sIGlzRHJhZ2dpbmcgfSA9IHVzZVNvcnRhYmxlKHtcbiAgICBpZCxcbiAgICBkaXNhYmxlZCxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAuLi5hdHRyaWJ1dGVzLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgY3Vyc29yOiBpc0RyYWdnaW5nID8gJ2dyYWJiaW5nJyA6ICdncmFiJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpc0RyYWdnaW5nLFxuICAgIGxpc3RlbmVycyxcbiAgICBzZXROb2RlUmVmLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtICYmIGB0cmFuc2xhdGUzZCgke3RyYW5zZm9ybS54fXB4LCAke3RyYW5zZm9ybS55fXB4LCAwKWAsIC8vIHRyYW5zbGF0ZTNkIGlzIGZhc3RlciB0aGFuIHRyYW5zbGF0ZSBpbiBtb3N0IGJyb3dzZXJzXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVNvcnRhYmxlIiwidXNlRHJhZ2dhYmxlU29ydGFibGUiLCJwcm9wcyIsImlkIiwiZGlzYWJsZWQiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwic2V0Tm9kZVJlZiIsInRyYW5zZm9ybSIsImlzRHJhZ2dpbmciLCJzdHlsZSIsImN1cnNvciIsIngiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBVyxRQUFRLG9CQUFvQjtBQUloRCxPQUFPLElBQU1DLHVCQUF1QixTQUFDQztJQUNuQyxJQUNFQyxLQUVFRCxNQUZGQyxJQUNBQyxXQUNFRixNQURGRTtJQUdGLElBQXFFSixlQUFBQSxZQUFZO1FBQy9FRyxJQUFBQTtRQUNBQyxVQUFBQTtJQUNGLElBSFFDLGFBQTZETCxhQUE3REssWUFBWUMsWUFBaUROLGFBQWpETSxXQUFXQyxhQUFzQ1AsYUFBdENPLFlBQVlDLFlBQTBCUixhQUExQlEsV0FBV0MsYUFBZVQsYUFBZlM7SUFLdEQsT0FBTztRQUNMSixZQUFZLHdDQUNQQTtZQUNISyxPQUFPO2dCQUNMQyxRQUFRRixhQUFhLGFBQWE7WUFDcEM7O1FBRUZBLFlBQUFBO1FBQ0FILFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FDLFdBQVdBLGFBQWEsQUFBQyxlQUFnQ0EsT0FBbEJBLFVBQVVJLENBQUMsRUFBQyxRQUFrQixPQUFaSixVQUFVSyxDQUFDLEVBQUM7SUFDdkU7QUFDRixFQUFFIn0=