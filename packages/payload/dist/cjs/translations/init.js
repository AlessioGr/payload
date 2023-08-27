"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "i18nInit", {
    enumerable: true,
    get: function() {
        return i18nInit;
    }
});
var _i18next = /*#__PURE__*/ _interop_require_default(require("i18next"));
var _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
var _defaultOptions = require("./defaultOptions");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function i18nInit(options) {
    if (_i18next.default.isInitialized) {
        return _i18next.default;
    }
    _i18next.default.init(_object_spread({}, (0, _deepmerge.default)(_defaultOptions.defaultOptions, options || {})));
    return _i18next.default;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2xhdGlvbnMvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCB0eXBlIHsgaTE4biwgSW5pdE9wdGlvbnMgfSBmcm9tICdpMThuZXh0JztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcbmltcG9ydCB7IGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9kZWZhdWx0T3B0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuSW5pdChvcHRpb25zOiBJbml0T3B0aW9ucyk6IGkxOG4ge1xuICBpZiAoaTE4bmV4dC5pc0luaXRpYWxpemVkKSB7XG4gICAgcmV0dXJuIGkxOG5leHQ7XG4gIH1cbiAgaTE4bmV4dC5pbml0KHtcbiAgICAuLi5kZWVwbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pLFxuICB9KTtcbiAgcmV0dXJuIGkxOG5leHQ7XG59XG4iXSwibmFtZXMiOlsiaTE4bkluaXQiLCJvcHRpb25zIiwiaTE4bmV4dCIsImlzSW5pdGlhbGl6ZWQiLCJpbml0IiwiZGVlcG1lcmdlIiwiZGVmYXVsdE9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBS2dCQTs7O2VBQUFBOzs7OERBTEk7Z0VBRUU7OEJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsU0FBU0EsU0FBU0MsT0FBb0I7SUFDM0MsSUFBSUMsZ0JBQU8sQ0FBQ0MsYUFBYSxFQUFFO1FBQ3pCLE9BQU9ELGdCQUFPO0lBQ2hCO0lBQ0FBLGdCQUFPLENBQUNFLElBQUksQ0FBQyxtQkFDUkMsSUFBQUEsa0JBQVMsRUFBQ0MsOEJBQWMsRUFBRUwsV0FBVyxDQUFDO0lBRTNDLE9BQU9DLGdCQUFPO0FBQ2hCIn0=