"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "formatDate", {
    enumerable: true,
    get: function() {
        return formatDate;
    }
});
var _datefns = require("date-fns");
var _locale = /*#__PURE__*/ _interop_require_wildcard(require("date-fns/locale"));
var _getSupportedDateLocale = require("./getSupportedDateLocale");
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
var formatDate = function(date, pattern, locale) {
    var theDate = new Date(date);
    var currentLocale = _locale[(0, _getSupportedDateLocale.getSupportedDateLocale)(locale)];
    return (0, _datefns.format)(theDate, pattern, {
        locale: currentLocale
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvZm9ybWF0RGF0ZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgKiBhcyBMb2NhbGUgZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcbmltcG9ydCB7IGdldFN1cHBvcnRlZERhdGVMb2NhbGUgfSBmcm9tICcuL2dldFN1cHBvcnRlZERhdGVMb2NhbGUnO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlOiBEYXRlIHwgbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkLCBwYXR0ZXJuOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHRoZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgY3VycmVudExvY2FsZSA9IExvY2FsZVtnZXRTdXBwb3J0ZWREYXRlTG9jYWxlKGxvY2FsZSldO1xuICByZXR1cm4gZm9ybWF0KHRoZURhdGUsIHBhdHRlcm4sIHsgbG9jYWxlOiBjdXJyZW50TG9jYWxlIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJmb3JtYXREYXRlIiwiZGF0ZSIsInBhdHRlcm4iLCJsb2NhbGUiLCJ0aGVEYXRlIiwiRGF0ZSIsImN1cnJlbnRMb2NhbGUiLCJMb2NhbGUiLCJnZXRTdXBwb3J0ZWREYXRlTG9jYWxlIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7OytCQUlhQTs7O2VBQUFBOzs7dUJBSlU7OERBQ0M7c0NBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBTUEsYUFBYSxTQUFDQyxNQUEwQ0MsU0FBaUJDO0lBQ3BGLElBQU1DLFVBQVUsSUFBSUMsS0FBS0o7SUFDekIsSUFBTUssZ0JBQWdCQyxPQUFNLENBQUNDLElBQUFBLDhDQUFzQixFQUFDTCxRQUFRO0lBQzVELE9BQU9NLElBQUFBLGVBQU0sRUFBQ0wsU0FBU0YsU0FBUztRQUFFQyxRQUFRRztJQUFjO0FBQzFEIn0=