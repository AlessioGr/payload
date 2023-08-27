"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "i18nMiddleware", {
    enumerable: true,
    get: function() {
        return i18nMiddleware;
    }
});
var _i18next = /*#__PURE__*/ _interop_require_default(require("i18next"));
var _i18nexthttpmiddleware = /*#__PURE__*/ _interop_require_default(require("i18next-http-middleware"));
var _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
var _defaultOptions = require("../../translations/defaultOptions");
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
var i18nMiddleware = function(options) {
    _i18next.default.use(new _i18nexthttpmiddleware.default.LanguageDetector(_defaultOptions.defaultOptions.detection)).init(_object_spread({
        preload: _defaultOptions.defaultOptions.supportedLngs
    }, (0, _deepmerge.default)(_defaultOptions.defaultOptions, options || {})));
    return _i18nexthttpmiddleware.default.handle(_i18next.default);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvaTE4bi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCB0eXBlIHsgSW5pdE9wdGlvbnMgfSBmcm9tICdpMThuZXh0JztcbmltcG9ydCBpMThuSFRUUE1pZGRsZXdhcmUgZnJvbSAnaTE4bmV4dC1odHRwLW1pZGRsZXdhcmUnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvZGVmYXVsdE9wdGlvbnMnO1xuXG5jb25zdCBpMThuTWlkZGxld2FyZSA9IChvcHRpb25zOiBJbml0T3B0aW9ucyk6IEhhbmRsZXIgPT4ge1xuICBpMThuZXh0LnVzZShuZXcgaTE4bkhUVFBNaWRkbGV3YXJlLkxhbmd1YWdlRGV0ZWN0b3IoZGVmYXVsdE9wdGlvbnMuZGV0ZWN0aW9uKSlcbiAgICAuaW5pdCh7XG4gICAgICBwcmVsb2FkOiBkZWZhdWx0T3B0aW9ucy5zdXBwb3J0ZWRMbmdzLFxuICAgICAgLi4uZGVlcG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KSxcbiAgICB9KTtcblxuICByZXR1cm4gaTE4bkhUVFBNaWRkbGV3YXJlLmhhbmRsZShpMThuZXh0KTtcbn07XG5cbmV4cG9ydCB7IGkxOG5NaWRkbGV3YXJlIH07XG4iXSwibmFtZXMiOlsiaTE4bk1pZGRsZXdhcmUiLCJvcHRpb25zIiwiaTE4bmV4dCIsInVzZSIsImkxOG5IVFRQTWlkZGxld2FyZSIsIkxhbmd1YWdlRGV0ZWN0b3IiLCJkZWZhdWx0T3B0aW9ucyIsImRldGVjdGlvbiIsImluaXQiLCJwcmVsb2FkIiwic3VwcG9ydGVkTG5ncyIsImRlZXBtZXJnZSIsImhhbmRsZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQlNBOzs7ZUFBQUE7Ozs4REFqQlc7NEVBRVc7Z0VBQ1Q7OEJBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTUEsaUJBQWlCLFNBQUNDO0lBQ3RCQyxnQkFBTyxDQUFDQyxHQUFHLENBQUMsSUFBSUMsOEJBQWtCLENBQUNDLGdCQUFnQixDQUFDQyw4QkFBYyxDQUFDQyxTQUFTLEdBQ3pFQyxJQUFJLENBQUM7UUFDSkMsU0FBU0gsOEJBQWMsQ0FBQ0ksYUFBYTtPQUNsQ0MsSUFBQUEsa0JBQVMsRUFBQ0wsOEJBQWMsRUFBRUwsV0FBVyxDQUFDO0lBRzdDLE9BQU9HLDhCQUFrQixDQUFDUSxNQUFNLENBQUNWLGdCQUFPO0FBQzFDIn0=