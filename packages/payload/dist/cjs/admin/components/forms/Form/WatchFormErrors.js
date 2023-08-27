"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "WatchFormErrors", {
    enumerable: true,
    get: function() {
        return WatchFormErrors;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _useThrottledEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThrottledEffect"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var WatchFormErrors = function(param) {
    var buildRowErrors = param.buildRowErrors;
    (0, _useThrottledEffect.default)(function() {
        buildRowErrors();
    }, 250, [
        buildRowErrors
    ]);
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vV2F0Y2hGb3JtRXJyb3JzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlVGhyb3R0bGVkRWZmZWN0IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRocm90dGxlZEVmZmVjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGJ1aWxkUm93RXJyb3JzOiAoKSA9PiB2b2lkO1xufTtcbmV4cG9ydCBjb25zdCBXYXRjaEZvcm1FcnJvcnM6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGJ1aWxkUm93RXJyb3JzIH0pID0+IHtcbiAgdXNlVGhyb3R0bGVkRWZmZWN0KCgpID0+IHtcbiAgICBidWlsZFJvd0Vycm9ycygpO1xuICB9LCAyNTAsIFtidWlsZFJvd0Vycm9yc10pO1xuXG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJXYXRjaEZvcm1FcnJvcnMiLCJidWlsZFJvd0Vycm9ycyIsInVzZVRocm90dGxlZEVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFNYUE7OztlQUFBQTs7OzZEQU5VO3lFQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEIsSUFBTUEsa0JBQW1DO1FBQUdDLHVCQUFBQTtJQUNqREMsSUFBQUEsMkJBQWtCLEVBQUM7UUFDakJEO0lBQ0YsR0FBRyxLQUFLO1FBQUNBO0tBQWU7SUFFeEIsT0FBTztBQUNUIn0=