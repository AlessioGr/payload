"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SingleValue", {
    enumerable: true,
    get: function() {
        return SingleValue;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactselect = require("react-select");
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
var baseClass = "react-select--single-value";
var SingleValue = function(props) {
    var children = props.children, className = props.className;
    return /*#__PURE__*/ _react.default.createElement(_reactselect.components.SingleValue, _object_spread_props(_object_spread({}, props), {
        className: [
            baseClass,
            className
        ].filter(Boolean).join(" ")
    }), children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L1NpbmdsZVZhbHVlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9uZW50cyBhcyBTZWxlY3RDb21wb25lbnRzLCBTaW5nbGVWYWx1ZVByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JlYWN0LXNlbGVjdC0tc2luZ2xlLXZhbHVlJztcblxuZXhwb3J0IGNvbnN0IFNpbmdsZVZhbHVlOiBSZWFjdC5GQzxTaW5nbGVWYWx1ZVByb3BzPE9wdGlvbj4+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RDb21wb25lbnRzLlNpbmdsZVZhbHVlXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2VsZWN0Q29tcG9uZW50cy5TaW5nbGVWYWx1ZT5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiU2luZ2xlVmFsdWUiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiU2VsZWN0Q29tcG9uZW50cyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7OytCQU1hQTs7O2VBQUFBOzs7NERBTks7MkJBQytDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2pFLElBQU1DLFlBQVk7QUFFWCxJQUFNRCxjQUFrRCxTQUFDRTtJQUM5RCxJQUNFQyxXQUVFRCxNQUZGQyxVQUNBQyxZQUNFRixNQURGRTtJQUdGLHFCQUNFLDZCQUFDQyx1QkFBZ0IsQ0FBQ0wsV0FBVywwQ0FDdkJFO1FBQ0pFLFdBQVc7WUFDVEg7WUFDQUc7U0FDRCxDQUFDRSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUV0Qkw7QUFHUCJ9