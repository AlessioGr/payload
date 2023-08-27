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
    RowProvider: function() {
        return RowProvider;
    },
    useRow: function() {
        return useRow;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
var Context = /*#__PURE__*/ (0, _react.createContext)(false);
var RowProvider = function(param) {
    var children = param.children, _param_withinRow = param.withinRow, withinRow = _param_withinRow === void 0 ? true : _param_withinRow;
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: withinRow
    }, children);
};
var useRow = function() {
    return (0, _react.useContext)(Context);
};
var _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1Jvdy9wcm92aWRlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsXG59IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoZmFsc2UpO1xuXG5leHBvcnQgY29uc3QgUm93UHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGUsIHdpdGhpblJvdz86IGJvb2xlYW4gfT4gPSAoeyBjaGlsZHJlbiwgd2l0aGluUm93ID0gdHJ1ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3dpdGhpblJvd30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVJvdyA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHQ7XG4iXSwibmFtZXMiOlsiUm93UHJvdmlkZXIiLCJ1c2VSb3ciLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNoaWxkcmVuIiwid2l0aGluUm93IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTWFBLFdBQVc7ZUFBWEE7O0lBUUFDLE1BQU07ZUFBTkE7O0lBRWIsT0FBdUI7ZUFBdkI7Ozs2REFkTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1DLHdCQUFVQyxJQUFBQSxvQkFBYSxFQUFDO0FBRXZCLElBQU1ILGNBQTZFO1FBQUdJLGlCQUFBQSxtQ0FBVUMsV0FBQUEsMENBQVk7SUFDakgscUJBQ0UsNkJBQUNILFFBQVFJLFFBQVE7UUFBQ0MsT0FBT0Y7T0FDdEJEO0FBR1A7QUFFTyxJQUFNSCxTQUFTO1dBQWVPLElBQUFBLGlCQUFVLEVBQUNOOztJQUVoRCxXQUFlQSJ9