"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClearIndicator", {
    enumerable: true,
    get: function() {
        return ClearIndicator;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _X = /*#__PURE__*/ _interop_require_default(require("../../../icons/X"));
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
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var baseClass = "clear-indicator";
var ClearIndicator = function(props) {
    var ref = props.innerProps.ref, restInnerProps = _object_without_properties(props.innerProps, [
        "ref"
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", _object_spread({
        className: baseClass,
        ref: ref
    }, restInnerProps), /*#__PURE__*/ _react.default.createElement(_X.default, {
        className: "".concat(baseClass, "__icon")
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L0NsZWFySW5kaWNhdG9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2xlYXJJbmRpY2F0b3JQcm9wcyB9IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgWCBmcm9tICcuLi8uLi8uLi9pY29ucy9YJztcbmltcG9ydCB7IE9wdGlvbiBhcyBPcHRpb25UeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY2xlYXItaW5kaWNhdG9yJztcblxuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yOiBSZWFjdC5GQzxDbGVhckluZGljYXRvclByb3BzPE9wdGlvblR5cGUsIHRydWU+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaW5uZXJQcm9wczogeyByZWYsIC4uLnJlc3RJbm5lclByb3BzIH0sXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICB7Li4ucmVzdElubmVyUHJvcHN9XG4gICAgPlxuICAgICAgPFggY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pY29uYH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQ2xlYXJJbmRpY2F0b3IiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsImlubmVyUHJvcHMiLCJyZWYiLCJyZXN0SW5uZXJQcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsIlgiXSwibWFwcGluZ3MiOiI7Ozs7K0JBUWFBOzs7ZUFBQUE7Ozs0REFSSzt3REFFSjtRQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELGlCQUFrRSxTQUFDRTtJQUM5RSxJQUNFQyxBQUFjQyxNQUNaRixNQURGQyxXQUFjQyxLQUFRQyw0Q0FDcEJILE1BREZDO1FBQWNDOztJQUdoQixxQkFDRSw2QkFBQ0U7UUFDQ0MsV0FBV047UUFDWEcsS0FBS0E7T0FDREMsK0JBRUosNkJBQUNHLFVBQUM7UUFBQ0QsV0FBVyxBQUFDLEdBQVksT0FBVk4sV0FBVTs7QUFHakMifQ==