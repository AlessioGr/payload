"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findLocaleFromCode", {
    enumerable: true,
    get: function() {
        return findLocaleFromCode;
    }
});
var findLocaleFromCode = function(localizationConfig, locale) {
    var _localizationConfig;
    if (!((_localizationConfig = localizationConfig) === null || _localizationConfig === void 0 ? void 0 : _localizationConfig.locales) || localizationConfig.locales.length === 0) {
        return null;
    }
    return localizationConfig.locales.find(function(el) {
        var _el;
        return ((_el = el) === null || _el === void 0 ? void 0 : _el.code) === locale;
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZmluZExvY2FsZUZyb21Db2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2FuaXRpemVkTG9jYWxpemF0aW9uQ29uZmlnLCBMb2NhbGUgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuLypcbiByZXR1cm4gdGhlIExvY2FsZSBmb3IgZ2l2ZW4gbG9jYWxlIGNvZGUsIGVsc2UgcmV0dXJuIG51bGxcbiovXG5leHBvcnQgY29uc3QgZmluZExvY2FsZUZyb21Db2RlID0gKFxuICBsb2NhbGl6YXRpb25Db25maWc6IFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZyxcbiAgbG9jYWxlOiBzdHJpbmcsXG4pOiBMb2NhbGUgfCBudWxsID0+IHtcbiAgaWYgKCFsb2NhbGl6YXRpb25Db25maWc/LmxvY2FsZXMgfHwgbG9jYWxpemF0aW9uQ29uZmlnLmxvY2FsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gbG9jYWxpemF0aW9uQ29uZmlnLmxvY2FsZXMuZmluZChcbiAgICAoZWwpID0+IGVsPy5jb2RlID09PSBsb2NhbGUsXG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImZpbmRMb2NhbGVGcm9tQ29kZSIsImxvY2FsaXphdGlvbkNvbmZpZyIsImxvY2FsZSIsImxvY2FsZXMiLCJsZW5ndGgiLCJmaW5kIiwiZWwiLCJjb2RlIl0sIm1hcHBpbmdzIjoiOzs7OytCQUlhQTs7O2VBQUFBOzs7QUFBTixJQUFNQSxxQkFBcUIsU0FDaENDLG9CQUNBQztRQUVLRDtJQUFMLElBQUksR0FBQ0Esc0JBQUFBLGdDQUFBQSwwQ0FBQUEsb0JBQW9CRSxPQUFPLEtBQUlGLG1CQUFtQkUsT0FBTyxDQUFDQyxNQUFNLEtBQUssR0FBRztRQUMzRSxPQUFPO0lBQ1Q7SUFFQSxPQUFPSCxtQkFBbUJFLE9BQU8sQ0FBQ0UsSUFBSSxDQUNwQyxTQUFDQztZQUFPQTtlQUFBQSxFQUFBQSxNQUFBQSxnQkFBQUEsMEJBQUFBLElBQUlDLElBQUksTUFBS0w7O0FBRXpCIn0=