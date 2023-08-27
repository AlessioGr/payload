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
    CollapsibleProvider: function() {
        return CollapsibleProvider;
    },
    useCollapsible: function() {
        return useCollapsible;
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
var CollapsibleProvider = function(param) {
    var children = param.children, _param_withinCollapsible = param.withinCollapsible, withinCollapsible = _param_withinCollapsible === void 0 ? true : _param_withinCollapsible;
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: withinCollapsible
    }, children);
};
var useCollapsible = function() {
    return (0, _react.useContext)(Context);
};
var _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvbGxhcHNpYmxlL3Byb3ZpZGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcbiAgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCxcbn0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSk7XG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzaWJsZVByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlLCB3aXRoaW5Db2xsYXBzaWJsZT86IGJvb2xlYW4gfT4gPSAoeyBjaGlsZHJlbiwgd2l0aGluQ29sbGFwc2libGUgPSB0cnVlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17d2l0aGluQ29sbGFwc2libGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDb2xsYXBzaWJsZSA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHQ7XG4iXSwibmFtZXMiOlsiQ29sbGFwc2libGVQcm92aWRlciIsInVzZUNvbGxhcHNpYmxlIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsIndpdGhpbkNvbGxhcHNpYmxlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTWFBLG1CQUFtQjtlQUFuQkE7O0lBUUFDLGNBQWM7ZUFBZEE7O0lBRWIsT0FBdUI7ZUFBdkI7Ozs2REFkTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1DLHdCQUFVQyxJQUFBQSxvQkFBYSxFQUFDO0FBRXZCLElBQU1ILHNCQUE2RjtRQUFHSSxpQkFBQUEsMkNBQVVDLG1CQUFBQSwwREFBb0I7SUFDekkscUJBQ0UsNkJBQUNILFFBQVFJLFFBQVE7UUFBQ0MsT0FBT0Y7T0FDdEJEO0FBR1A7QUFFTyxJQUFNSCxpQkFBaUI7V0FBZU8sSUFBQUEsaUJBQVUsRUFBQ047O0lBRXhELFdBQWVBIn0=