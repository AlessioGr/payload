"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeEditor", {
    enumerable: true,
    get: function() {
        return CodeEditor;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _ShimmerEffect = require("../ShimmerEffect");
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
var LazyEditor = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./CodeEditor"));
    });
});
var CodeEditor = function(props) {
    var _props_height = props.height, height = _props_height === void 0 ? "35vh" : _props_height;
    return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_ShimmerEffect.ShimmerEffect, {
            height: height
        })
    }, /*#__PURE__*/ _react.default.createElement(LazyEditor, _object_spread_props(_object_spread({}, props), {
        height: height
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVFZGl0b3IvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoaW1tZXJFZmZlY3QgfSBmcm9tICcuLi9TaGltbWVyRWZmZWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IExhenlFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9Db2RlRWRpdG9yJykpO1xuXG5leHBvcnQgY29uc3QgQ29kZUVkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaGVpZ2h0ID0gJzM1dmgnIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFNoaW1tZXJFZmZlY3QgaGVpZ2h0PXtoZWlnaHR9IC8+fT5cbiAgICAgIDxMYXp5RWRpdG9yXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAvPlxuICAgIDwvU3VzcGVuc2U+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkNvZGVFZGl0b3IiLCJMYXp5RWRpdG9yIiwibGF6eSIsInByb3BzIiwiaGVpZ2h0IiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIlNoaW1tZXJFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7K0JBTWFBOzs7ZUFBQUE7Ozs2REFOeUI7NkJBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzlCLElBQU1DLDJCQUFhQyxJQUFBQSxXQUFJLEVBQUM7V0FBTTt1REFBQSxRQUFPOzs7QUFFOUIsSUFBTUYsYUFBOEIsU0FBQ0c7SUFDMUMsb0JBQTRCQSxNQUFwQkMsUUFBQUEsb0NBQVM7SUFFakIscUJBQ0UsNkJBQUNDLGVBQVE7UUFBQ0Msd0JBQVUsNkJBQUNDLDRCQUFhO1lBQUNILFFBQVFBOztxQkFDekMsNkJBQUNILG9EQUNLRTtRQUNKQyxRQUFRQTs7QUFJaEIifQ==