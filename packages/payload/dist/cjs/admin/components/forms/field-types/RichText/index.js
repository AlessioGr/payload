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
var _ShimmerEffect = require("../../../elements/ShimmerEffect");
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
var RichText = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./RichText"));
    });
});
var RichTextField = function(props) {
    return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_ShimmerEffect.ShimmerEffect, {
            height: "35vh"
        })
    }, /*#__PURE__*/ _react.default.createElement(RichText, props));
};
var _default = RichTextField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgU3VzcGVuc2UsIGxhenkgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaGltbWVyRWZmZWN0IH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU2hpbW1lckVmZmVjdCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBSaWNoVGV4dCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL1JpY2hUZXh0JykpO1xuXG5jb25zdCBSaWNoVGV4dEZpZWxkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IChcbiAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8U2hpbW1lckVmZmVjdCBoZWlnaHQ9XCIzNXZoXCIgLz59PlxuICAgIDxSaWNoVGV4dCB7Li4ucHJvcHN9IC8+XG4gIDwvU3VzcGVuc2U+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSaWNoVGV4dEZpZWxkO1xuIl0sIm5hbWVzIjpbIlJpY2hUZXh0IiwibGF6eSIsIlJpY2hUZXh0RmllbGQiLCJwcm9wcyIsIlN1c3BlbnNlIiwiZmFsbGJhY2siLCJTaGltbWVyRWZmZWN0IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7OytCQVlBOzs7ZUFBQTs7OzZEQVpzQzs2QkFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUc5QixJQUFNQSx5QkFBV0MsSUFBQUEsV0FBSSxFQUFDO1dBQU07dURBQUEsUUFBTzs7O0FBRW5DLElBQU1DLGdCQUFpQyxTQUFDQzt5QkFDdEMsNkJBQUNDLGVBQVE7UUFBQ0Msd0JBQVUsNkJBQUNDLDRCQUFhO1lBQUNDLFFBQU87O3FCQUN4Qyw2QkFBQ1AsVUFBYUc7O0lBSWxCLFdBQWVEIn0=