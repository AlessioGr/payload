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
import React, { Fragment } from "react";
import { useDraggableSortable } from "../useDraggableSortable";
export var DraggableSortableItem = function(props) {
    var id = props.id, disabled = props.disabled, children = props.children;
    var _useDraggableSortable = useDraggableSortable({
        id: id,
        disabled: disabled
    }), attributes = _useDraggableSortable.attributes, listeners = _useDraggableSortable.listeners, setNodeRef = _useDraggableSortable.setNodeRef, transform = _useDraggableSortable.transform, isDragging = _useDraggableSortable.isDragging;
    return /*#__PURE__*/ React.createElement(Fragment, null, children({
        attributes: _object_spread_props(_object_spread({}, attributes), {
            style: {
                cursor: isDragging ? "grabbing" : "grab"
            }
        }),
        listeners: listeners,
        setNodeRef: setNodeRef,
        transform: transform
    }));
};
export default DraggableSortableItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL0RyYWdnYWJsZVNvcnRhYmxlSXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlRHJhZ2dhYmxlQXJndW1lbnRzIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEcmFnZ2FibGVTb3J0YWJsZSB9IGZyb20gJy4uL3VzZURyYWdnYWJsZVNvcnRhYmxlJztcbmltcG9ydCB7IENoaWxkRnVuY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IERyYWdnYWJsZVNvcnRhYmxlSXRlbTogUmVhY3QuRkM8VXNlRHJhZ2dhYmxlQXJndW1lbnRzICYge1xuICBjaGlsZHJlbjogQ2hpbGRGdW5jdGlvblxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGRpc2FibGVkLFxuICAgIGNoaWxkcmVuLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBsaXN0ZW5lcnMsIHNldE5vZGVSZWYsIHRyYW5zZm9ybSwgaXNEcmFnZ2luZyB9ID0gdXNlRHJhZ2dhYmxlU29ydGFibGUoe1xuICAgIGlkLFxuICAgIGRpc2FibGVkLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtjaGlsZHJlbih7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBjdXJzb3I6IGlzRHJhZ2dpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxpc3RlbmVycyxcbiAgICAgICAgc2V0Tm9kZVJlZixcbiAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgfSl9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZVNvcnRhYmxlSXRlbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlRHJhZ2dhYmxlU29ydGFibGUiLCJEcmFnZ2FibGVTb3J0YWJsZUl0ZW0iLCJwcm9wcyIsImlkIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsImF0dHJpYnV0ZXMiLCJsaXN0ZW5lcnMiLCJzZXROb2RlUmVmIiwidHJhbnNmb3JtIiwiaXNEcmFnZ2luZyIsInN0eWxlIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsU0FBU0MsUUFBUSxRQUFRLFFBQVE7QUFDeEMsU0FBU0Msb0JBQW9CLFFBQVEsMEJBQTBCO0FBRy9ELE9BQU8sSUFBTUMsd0JBRVIsU0FBQ0M7SUFDSixJQUNFQyxLQUdFRCxNQUhGQyxJQUNBQyxXQUVFRixNQUZGRSxVQUNBQyxXQUNFSCxNQURGRztJQUdGLElBQXFFTCx3QkFBQUEscUJBQXFCO1FBQ3hGRyxJQUFBQTtRQUNBQyxVQUFBQTtJQUNGLElBSFFFLGFBQTZETixzQkFBN0RNLFlBQVlDLFlBQWlEUCxzQkFBakRPLFdBQVdDLGFBQXNDUixzQkFBdENRLFlBQVlDLFlBQTBCVCxzQkFBMUJTLFdBQVdDLGFBQWVWLHNCQUFmVTtJQUt0RCxxQkFDRSxvQkFBQ1gsZ0JBQ0VNLFNBQVM7UUFDUkMsWUFBWSx3Q0FDUEE7WUFDSEssT0FBTztnQkFDTEMsUUFBUUYsYUFBYSxhQUFhO1lBQ3BDOztRQUVGSCxXQUFBQTtRQUNBQyxZQUFBQTtRQUNBQyxXQUFBQTtJQUNGO0FBR04sRUFBRTtBQUVGLGVBQWVSLHNCQUFzQiJ9