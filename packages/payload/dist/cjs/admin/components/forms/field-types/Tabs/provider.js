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
    TabsProvider: function() {
        return TabsProvider;
    },
    useTabs: function() {
        return useTabs;
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
var TabsProvider = function(param) {
    var children = param.children, _param_withinTab = param.withinTab, withinTab = _param_withinTab === void 0 ? true : _param_withinTab;
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: withinTab
    }, children);
};
var useTabs = function() {
    return (0, _react.useContext)(Context);
};
var _default = Context;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RhYnMvcHJvdmlkZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LFxufSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGZhbHNlKTtcblxuZXhwb3J0IGNvbnN0IFRhYnNQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSwgd2l0aGluVGFiPzogYm9vbGVhbiB9PiA9ICh7IGNoaWxkcmVuLCB3aXRoaW5UYWIgPSB0cnVlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17d2l0aGluVGFifT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlVGFicyA9ICgpOiBib29sZWFuID0+IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHQ7XG4iXSwibmFtZXMiOlsiVGFic1Byb3ZpZGVyIiwidXNlVGFicyIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJ3aXRoaW5UYWIiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNYUEsWUFBWTtlQUFaQTs7SUFRQUMsT0FBTztlQUFQQTs7SUFFYixPQUF1QjtlQUF2Qjs7OzZEQWRPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsd0JBQVVDLElBQUFBLG9CQUFhLEVBQUM7QUFFdkIsSUFBTUgsZUFBOEU7UUFBR0ksaUJBQUFBLG1DQUFVQyxXQUFBQSwwQ0FBWTtJQUNsSCxxQkFDRSw2QkFBQ0gsUUFBUUksUUFBUTtRQUFDQyxPQUFPRjtPQUN0QkQ7QUFHUDtBQUVPLElBQU1ILFVBQVU7V0FBZU8sSUFBQUEsaUJBQVUsRUFBQ047O0lBRWpELFdBQWVBIn0=