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
    DraggableSortableItem: function() {
        return DraggableSortableItem;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _useDraggableSortable = require("../useDraggableSortable");
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
var DraggableSortableItem = function(props) {
    var id = props.id, disabled = props.disabled, children = props.children;
    var _useDraggableSortable1 = (0, _useDraggableSortable.useDraggableSortable)({
        id: id,
        disabled: disabled
    }), attributes = _useDraggableSortable1.attributes, listeners = _useDraggableSortable1.listeners, setNodeRef = _useDraggableSortable1.setNodeRef, transform = _useDraggableSortable1.transform, isDragging = _useDraggableSortable1.isDragging;
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, children({
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
var _default = DraggableSortableItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL0RyYWdnYWJsZVNvcnRhYmxlSXRlbS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlRHJhZ2dhYmxlQXJndW1lbnRzIH0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5pbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEcmFnZ2FibGVTb3J0YWJsZSB9IGZyb20gJy4uL3VzZURyYWdnYWJsZVNvcnRhYmxlJztcbmltcG9ydCB7IENoaWxkRnVuY3Rpb24gfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IERyYWdnYWJsZVNvcnRhYmxlSXRlbTogUmVhY3QuRkM8VXNlRHJhZ2dhYmxlQXJndW1lbnRzICYge1xuICBjaGlsZHJlbjogQ2hpbGRGdW5jdGlvblxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGRpc2FibGVkLFxuICAgIGNoaWxkcmVuLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBhdHRyaWJ1dGVzLCBsaXN0ZW5lcnMsIHNldE5vZGVSZWYsIHRyYW5zZm9ybSwgaXNEcmFnZ2luZyB9ID0gdXNlRHJhZ2dhYmxlU29ydGFibGUoe1xuICAgIGlkLFxuICAgIGRpc2FibGVkLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIHtjaGlsZHJlbih7XG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLFxuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBjdXJzb3I6IGlzRHJhZ2dpbmcgPyAnZ3JhYmJpbmcnIDogJ2dyYWInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxpc3RlbmVycyxcbiAgICAgICAgc2V0Tm9kZVJlZixcbiAgICAgICAgdHJhbnNmb3JtLFxuICAgICAgfSl9XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnYWJsZVNvcnRhYmxlSXRlbTtcbiJdLCJuYW1lcyI6WyJEcmFnZ2FibGVTb3J0YWJsZUl0ZW0iLCJwcm9wcyIsImlkIiwiZGlzYWJsZWQiLCJjaGlsZHJlbiIsInVzZURyYWdnYWJsZVNvcnRhYmxlIiwiYXR0cmlidXRlcyIsImxpc3RlbmVycyIsInNldE5vZGVSZWYiLCJ0cmFuc2Zvcm0iLCJpc0RyYWdnaW5nIiwiRnJhZ21lbnQiLCJzdHlsZSIsImN1cnNvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLYUEscUJBQXFCO2VBQXJCQTs7SUErQmIsT0FBcUM7ZUFBckM7Ozs2REFuQ2dDO29DQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc5QixJQUFNQSx3QkFFUixTQUFDQztJQUNKLElBQ0VDLEtBR0VELE1BSEZDLElBQ0FDLFdBRUVGLE1BRkZFLFVBQ0FDLFdBQ0VILE1BREZHO0lBR0YsSUFBcUVDLHlCQUFBQSxJQUFBQSwwQ0FBb0IsRUFBQztRQUN4RkgsSUFBQUE7UUFDQUMsVUFBQUE7SUFDRixJQUhRRyxhQUE2REQsdUJBQTdEQyxZQUFZQyxZQUFpREYsdUJBQWpERSxXQUFXQyxhQUFzQ0gsdUJBQXRDRyxZQUFZQyxZQUEwQkosdUJBQTFCSSxXQUFXQyxhQUFlTCx1QkFBZks7SUFLdEQscUJBQ0UsNkJBQUNDLGVBQVEsUUFDTlAsU0FBUztRQUNSRSxZQUFZLHdDQUNQQTtZQUNITSxPQUFPO2dCQUNMQyxRQUFRSCxhQUFhLGFBQWE7WUFDcEM7O1FBRUZILFdBQUFBO1FBQ0FDLFlBQUFBO1FBQ0FDLFdBQUFBO0lBQ0Y7QUFHTjtJQUVBLFdBQWVUIn0=