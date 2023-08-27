"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiValue", {
    enumerable: true,
    get: function() {
        return MultiValue;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactselect = require("react-select");
var _useDraggableSortable = require("../../DraggableSortable/useDraggableSortable");
require("./index.scss");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var baseClass = "multi-value";
var MultiValue = function(props) {
    var className = props.className, isDisabled = props.isDisabled, innerProps = props.innerProps, value = props.data.value, tmp = props.selectProps, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.// @ts-ignore // TODO: Fix types
    customProps, // @ts-ignore // TODO: Fix types
    disableMouseDown = (tmp1 === void 0 ? {} : tmp1).disableMouseDown;
    var _useDraggableSortable1 = (0, _useDraggableSortable.useDraggableSortable)({
        id: value.toString()
    }), attributes = _useDraggableSortable1.attributes, listeners = _useDraggableSortable1.listeners, setNodeRef = _useDraggableSortable1.setNodeRef, transform = _useDraggableSortable1.transform, isDragging = _useDraggableSortable1.isDragging;
    var classes = [
        baseClass,
        className,
        !isDisabled && "draggable",
        isDragging && "".concat(baseClass, "--is-dragging")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement(_reactselect.components.MultiValue, _object_spread_props(_object_spread({}, props), {
        className: classes,
        innerProps: _object_spread_props(_object_spread({}, innerProps, attributes, listeners), {
            ref: setNodeRef,
            onMouseDown: function(e) {
                if (!disableMouseDown) {
                    // we need to prevent the dropdown from opening when clicking on the drag handle, but not when a modal is open (i.e. the 'Relationship' field component)
                    e.stopPropagation();
                }
            },
            style: {
                transform: transform
            }
        })
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L011bHRpVmFsdWUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBNdWx0aVZhbHVlUHJvcHMsXG4gIGNvbXBvbmVudHMgYXMgU2VsZWN0Q29tcG9uZW50cyxcbn0gZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB7IHVzZURyYWdnYWJsZVNvcnRhYmxlIH0gZnJvbSAnLi4vLi4vRHJhZ2dhYmxlU29ydGFibGUvdXNlRHJhZ2dhYmxlU29ydGFibGUnO1xuaW1wb3J0IHR5cGUgeyBPcHRpb24gfSBmcm9tICcuLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ211bHRpLXZhbHVlJztcbmV4cG9ydCBjb25zdCBNdWx0aVZhbHVlOiBSZWFjdC5GQzxNdWx0aVZhbHVlUHJvcHM8T3B0aW9uPj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNsYXNzTmFtZSxcbiAgICBpc0Rpc2FibGVkLFxuICAgIGlubmVyUHJvcHMsXG4gICAgZGF0YToge1xuICAgICAgdmFsdWUsXG4gICAgfSxcbiAgICBzZWxlY3RQcm9wczoge1xuICAgICAgLy8gQHRzLWlnbm9yZSAvLyBUT0RPOiBGaXggdHlwZXNcbiAgICAgIGN1c3RvbVByb3BzOiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLy8gVE9ETzogRml4IHR5cGVzXG4gICAgICAgIGRpc2FibGVNb3VzZURvd24sXG4gICAgICB9ID0ge30sXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIGF0dHJpYnV0ZXMsXG4gICAgbGlzdGVuZXJzLFxuICAgIHNldE5vZGVSZWYsXG4gICAgdHJhbnNmb3JtLFxuICAgIGlzRHJhZ2dpbmcsXG4gIH0gPSB1c2VEcmFnZ2FibGVTb3J0YWJsZSh7XG4gICAgaWQ6IHZhbHVlLnRvU3RyaW5nKCksXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSxcbiAgICAhaXNEaXNhYmxlZCAmJiAnZHJhZ2dhYmxlJyxcbiAgICBpc0RyYWdnaW5nICYmIGAke2Jhc2VDbGFzc30tLWlzLWRyYWdnaW5nYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdENvbXBvbmVudHMuTXVsdGlWYWx1ZVxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgaW5uZXJQcm9wcz17e1xuICAgICAgICAuLi5pbm5lclByb3BzLFxuICAgICAgICAuLi5hdHRyaWJ1dGVzLFxuICAgICAgICAuLi5saXN0ZW5lcnMsXG4gICAgICAgIHJlZjogc2V0Tm9kZVJlZixcbiAgICAgICAgb25Nb3VzZURvd246IChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFkaXNhYmxlTW91c2VEb3duKSB7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHByZXZlbnQgdGhlIGRyb3Bkb3duIGZyb20gb3BlbmluZyB3aGVuIGNsaWNraW5nIG9uIHRoZSBkcmFnIGhhbmRsZSwgYnV0IG5vdCB3aGVuIGEgbW9kYWwgaXMgb3BlbiAoaS5lLiB0aGUgJ1JlbGF0aW9uc2hpcCcgZmllbGQgY29tcG9uZW50KVxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJNdWx0aVZhbHVlIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJjbGFzc05hbWUiLCJpc0Rpc2FibGVkIiwiaW5uZXJQcm9wcyIsImRhdGEiLCJ2YWx1ZSIsInNlbGVjdFByb3BzIiwiY3VzdG9tUHJvcHMiLCJkaXNhYmxlTW91c2VEb3duIiwidXNlRHJhZ2dhYmxlU29ydGFibGUiLCJpZCIsInRvU3RyaW5nIiwiYXR0cmlidXRlcyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJpc0RyYWdnaW5nIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiU2VsZWN0Q29tcG9uZW50cyIsInJlZiIsIm9uTW91c2VEb3duIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQVdhQTs7O2VBQUFBOzs7NERBWEs7MkJBSVg7b0NBQzhCO1FBRzlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUNYLElBQU1ELGFBQWdELFNBQUNFO0lBQzVELElBQ0VDLFlBYUVELE1BYkZDLFdBQ0FDLGFBWUVGLE1BWkZFLFlBQ0FDLGFBV0VILE1BWEZHLFlBQ0FDLEFBQ0VDLFFBU0FMLE1BVkZJLEtBQ0VDLE9BRVcsTUFPWEwsTUFQRk0sb0JBQWEsaUJBTVQsQ0FBQyxJQU5RLEtBRUUsWUFEYixnQ0FBZ0M7SUFDaENDLGFBQWEsQUFDWCxnQ0FBZ0M7SUFDaENDLG9CQUZXLGtCQUdULENBQUMsSUFIUSxNQUVYQTtJQUtOLElBTUlDLHlCQUFBQSxJQUFBQSwwQ0FBb0IsRUFBQztRQUN2QkMsSUFBSUwsTUFBTU0sUUFBUTtJQUNwQixJQVBFQyxhQUtFSCx1QkFMRkcsWUFDQUMsWUFJRUosdUJBSkZJLFdBQ0FDLGFBR0VMLHVCQUhGSyxZQUNBQyxZQUVFTix1QkFGRk0sV0FDQUMsYUFDRVAsdUJBREZPO0lBS0YsSUFBTUMsVUFBVTtRQUNkbEI7UUFDQUU7UUFDQSxDQUFDQyxjQUFjO1FBQ2ZjLGNBQWMsQUFBQyxHQUFZLE9BQVZqQixXQUFVO0tBQzVCLENBQUNtQixNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSw2QkFBQ0MsdUJBQWdCLENBQUN2QixVQUFVLDBDQUN0QkU7UUFDSkMsV0FBV2dCO1FBQ1hkLFlBQVksd0NBQ1BBLFlBQ0FTLFlBQ0FDO1lBQ0hTLEtBQUtSO1lBQ0xTLGFBQWEsU0FBQ0M7Z0JBQ1osSUFBSSxDQUFDaEIsa0JBQWtCO29CQUNyQix3SkFBd0o7b0JBQ3hKZ0IsRUFBRUMsZUFBZTtnQkFDbkI7WUFDRjtZQUNBQyxPQUFPO2dCQUNMWCxXQUFBQTtZQUNGOzs7QUFJUiJ9