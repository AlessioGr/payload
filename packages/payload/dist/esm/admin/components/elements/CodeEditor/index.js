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
import React, { Suspense, lazy } from "react";
import { ShimmerEffect } from "../ShimmerEffect";
var LazyEditor = /*#__PURE__*/ lazy(function() {
    return import("./CodeEditor");
});
export var CodeEditor = function(props) {
    var _props_height = props.height, height = _props_height === void 0 ? "35vh" : _props_height;
    return /*#__PURE__*/ React.createElement(Suspense, {
        fallback: /*#__PURE__*/ React.createElement(ShimmerEffect, {
            height: height
        })
    }, /*#__PURE__*/ React.createElement(LazyEditor, _object_spread_props(_object_spread({}, props), {
        height: height
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvZGVFZGl0b3IvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoaW1tZXJFZmZlY3QgfSBmcm9tICcuLi9TaGltbWVyRWZmZWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IExhenlFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9Db2RlRWRpdG9yJykpO1xuXG5leHBvcnQgY29uc3QgQ29kZUVkaXRvcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaGVpZ2h0ID0gJzM1dmgnIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PFNoaW1tZXJFZmZlY3QgaGVpZ2h0PXtoZWlnaHR9IC8+fT5cbiAgICAgIDxMYXp5RWRpdG9yXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAvPlxuICAgIDwvU3VzcGVuc2U+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3VzcGVuc2UiLCJsYXp5IiwiU2hpbW1lckVmZmVjdCIsIkxhenlFZGl0b3IiLCJDb2RlRWRpdG9yIiwicHJvcHMiLCJoZWlnaHQiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFFBQVEsRUFBRUMsSUFBSSxRQUFRLFFBQVE7QUFDOUMsU0FBU0MsYUFBYSxRQUFRLG1CQUFtQjtBQUdqRCxJQUFNQywyQkFBYUYsS0FBSztXQUFNLE1BQU0sQ0FBQzs7QUFFckMsT0FBTyxJQUFNRyxhQUE4QixTQUFDQztJQUMxQyxvQkFBNEJBLE1BQXBCQyxRQUFBQSxvQ0FBUztJQUVqQixxQkFDRSxvQkFBQ047UUFBU08sd0JBQVUsb0JBQUNMO1lBQWNJLFFBQVFBOztxQkFDekMsb0JBQUNILG9EQUNLRTtRQUNKQyxRQUFRQTs7QUFJaEIsRUFBRSJ9