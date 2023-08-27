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
    SearchParamsProvider: function() {
        return SearchParamsProvider;
    },
    useSearchParams: function() {
        return useSearchParams;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reactrouterdom = require("react-router-dom");
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
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
var Context = /*#__PURE__*/ (0, _react.createContext)({});
var SearchParamsProvider = function(param) {
    var children = param.children;
    var location = (0, _reactrouterdom.useLocation)();
    var params = _qs.default.parse(location.search, {
        ignoreQueryPrefix: true,
        depth: 10
    });
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: params
    }, children);
};
var useSearchParams = function() {
    return (0, _react.useContext)(Context);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9TZWFyY2hQYXJhbXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxcyBmcm9tICdxcyc7XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaFBhcmFtc1Byb3ZpZGVyOiBSZWFjdC5GQzx7Y2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGV9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IHFzLnBhcnNlKFxuICAgIGxvY2F0aW9uLnNlYXJjaCxcbiAgICB7IGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlLCBkZXB0aDogMTAgfSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwYXJhbXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTZWFyY2hQYXJhbXMgPSAoKTogcXMuUGFyc2VkUXMgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJTZWFyY2hQYXJhbXNQcm92aWRlciIsInVzZVNlYXJjaFBhcmFtcyIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJsb2NhdGlvbiIsInVzZUxvY2F0aW9uIiwicGFyYW1zIiwicXMiLCJwYXJzZSIsInNlYXJjaCIsImlnbm9yZVF1ZXJ5UHJlZml4IiwiZGVwdGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNYUEsb0JBQW9CO2VBQXBCQTs7SUFlQUMsZUFBZTtlQUFmQTs7OzZEQXJCb0M7OEJBQ3JCO3lEQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZixJQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQyxDQUFDO0FBRXhCLElBQU1ILHVCQUErRDtRQUFHSSxpQkFBQUE7SUFDN0UsSUFBTUMsV0FBV0MsSUFBQUEsMkJBQVc7SUFFNUIsSUFBTUMsU0FBU0MsV0FBRSxDQUFDQyxLQUFLLENBQ3JCSixTQUFTSyxNQUFNLEVBQ2Y7UUFBRUMsbUJBQW1CO1FBQU1DLE9BQU87SUFBRztJQUd2QyxxQkFDRSw2QkFBQ1YsUUFBUVcsUUFBUTtRQUFDQyxPQUFPUDtPQUN0Qkg7QUFHUDtBQUVPLElBQU1ILGtCQUFrQjtXQUFtQmMsSUFBQUEsaUJBQVUsRUFBQ2IifQ==