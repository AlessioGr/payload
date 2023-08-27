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
var _ShimmerEffect = require("../ShimmerEffect");
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
var DatePicker = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./DatePicker"));
    });
});
var DatePickerField = function(props) {
    return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_ShimmerEffect.ShimmerEffect, {
            height: 50
        })
    }, /*#__PURE__*/ _react.default.createElement(DatePicker, props));
};
var _default = DatePickerField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RhdGVQaWNrZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoaW1tZXJFZmZlY3QgfSBmcm9tICcuLi9TaGltbWVyRWZmZWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IERhdGVQaWNrZXIgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9EYXRlUGlja2VyJykpO1xuXG5jb25zdCBEYXRlUGlja2VyRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4gKFxuICA8U3VzcGVuc2UgZmFsbGJhY2s9ezxTaGltbWVyRWZmZWN0IGhlaWdodD17NTB9IC8+fT5cbiAgICA8RGF0ZVBpY2tlciB7Li4ucHJvcHN9IC8+XG4gIDwvU3VzcGVuc2U+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEYXRlUGlja2VyRmllbGQ7XG4iXSwibmFtZXMiOlsiRGF0ZVBpY2tlciIsImxhenkiLCJEYXRlUGlja2VyRmllbGQiLCJwcm9wcyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJTaGltbWVyRWZmZWN0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7OytCQVlBOzs7ZUFBQTs7OzZEQVpzQzs2QkFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc5QixJQUFNQSwyQkFBYUMsSUFBQUEsV0FBSSxFQUFDO1dBQU07dURBQUEsUUFBTzs7O0FBRXJDLElBQU1DLGtCQUFtQyxTQUFDQzt5QkFDeEMsNkJBQUNDLGVBQVE7UUFBQ0Msd0JBQVUsNkJBQUNDLDRCQUFhO1lBQUNDLFFBQVE7O3FCQUN6Qyw2QkFBQ1AsWUFBZUc7O0lBSXBCLFdBQWVEIn0=