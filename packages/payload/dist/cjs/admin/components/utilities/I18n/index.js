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
    I18n: function() {
        return I18n;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _i18next = /*#__PURE__*/ _interop_require_default(require("i18next"));
var _react1 = require("@monaco-editor/react");
var _i18nextbrowserlanguagedetector = /*#__PURE__*/ _interop_require_default(require("i18next-browser-languagedetector"));
var _reacti18next = require("react-i18next");
var _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
var _defaultOptions = require("../../../../translations/defaultOptions");
var _Config = require("../Config");
var _getSupportedMonacoLocale = require("../../../utilities/getSupportedMonacoLocale");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var I18n = function() {
    var config = (0, _Config.useConfig)();
    if (_i18next.default.isInitialized) {
        return null;
    }
    _i18next.default.use(new _i18nextbrowserlanguagedetector.default(null, {
        lookupCookie: "lng",
        lookupLocalStorage: "lng"
    })).use(_reacti18next.initReactI18next).init((0, _deepmerge.default)(_defaultOptions.defaultOptions, config.i18n || {}));
    _react1.loader.config({
        "vs/nls": {
            availableLanguages: {
                "*": (0, _getSupportedMonacoLocale.getSupportedMonacoLocale)(_i18next.default.language)
            }
        }
    });
    return null;
};
var _default = I18n;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9JMThuL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBsb2FkZXIgfSBmcm9tICdAbW9uYWNvLWVkaXRvci9yZWFjdCc7XG5pbXBvcnQgTGFuZ3VhZ2VEZXRlY3RvciBmcm9tICdpMThuZXh0LWJyb3dzZXItbGFuZ3VhZ2VkZXRlY3Rvcic7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgZGVlcG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5pbXBvcnQgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9kZWZhdWx0T3B0aW9ucyc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9Db25maWcnO1xuaW1wb3J0IHsgZ2V0U3VwcG9ydGVkTW9uYWNvTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2dldFN1cHBvcnRlZE1vbmFjb0xvY2FsZSc7XG5cbmV4cG9ydCBjb25zdCBJMThuOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG5cbiAgaWYgKGkxOG4uaXNJbml0aWFsaXplZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaTE4blxuICAgIC51c2UobmV3IExhbmd1YWdlRGV0ZWN0b3IobnVsbCwge1xuICAgICAgbG9va3VwQ29va2llOiAnbG5nJyxcbiAgICAgIGxvb2t1cExvY2FsU3RvcmFnZTogJ2xuZycsXG4gICAgfSkpXG4gICAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxuICAgIC5pbml0KGRlZXBtZXJnZShkZWZhdWx0T3B0aW9ucywgY29uZmlnLmkxOG4gfHwge30pKTtcbiAgbG9hZGVyLmNvbmZpZyh7ICd2cy9ubHMnOiB7IGF2YWlsYWJsZUxhbmd1YWdlczogeyAnKic6IGdldFN1cHBvcnRlZE1vbmFjb0xvY2FsZShpMThuLmxhbmd1YWdlKSB9IH0gfSk7XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSTE4bjtcbiJdLCJuYW1lcyI6WyJJMThuIiwiY29uZmlnIiwidXNlQ29uZmlnIiwiaTE4biIsImlzSW5pdGlhbGl6ZWQiLCJ1c2UiLCJMYW5ndWFnZURldGVjdG9yIiwibG9va3VwQ29va2llIiwibG9va3VwTG9jYWxTdG9yYWdlIiwiaW5pdFJlYWN0STE4bmV4dCIsImluaXQiLCJkZWVwbWVyZ2UiLCJkZWZhdWx0T3B0aW9ucyIsImxvYWRlciIsImF2YWlsYWJsZUxhbmd1YWdlcyIsImdldFN1cHBvcnRlZE1vbmFjb0xvY2FsZSIsImxhbmd1YWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVVhQSxJQUFJO2VBQUpBOztJQWtCYixPQUFvQjtlQUFwQjs7OzREQTVCa0I7OERBQ0Q7c0JBQ007cUZBQ007NEJBQ0k7Z0VBQ1g7OEJBQ1M7c0JBQ0w7d0NBQ2U7Ozs7OztBQUVsQyxJQUFNQSxPQUFpQjtJQUM1QixJQUFNQyxTQUFTQyxJQUFBQSxpQkFBUztJQUV4QixJQUFJQyxnQkFBSSxDQUFDQyxhQUFhLEVBQUU7UUFDdEIsT0FBTztJQUNUO0lBRUFELGdCQUFJLENBQ0RFLEdBQUcsQ0FBQyxJQUFJQyx1Q0FBZ0IsQ0FBQyxNQUFNO1FBQzlCQyxjQUFjO1FBQ2RDLG9CQUFvQjtJQUN0QixJQUNDSCxHQUFHLENBQUNJLDhCQUFnQixFQUNwQkMsSUFBSSxDQUFDQyxJQUFBQSxrQkFBUyxFQUFDQyw4QkFBYyxFQUFFWCxPQUFPRSxJQUFJLElBQUksQ0FBQztJQUNsRFUsY0FBTSxDQUFDWixNQUFNLENBQUM7UUFBRSxVQUFVO1lBQUVhLG9CQUFvQjtnQkFBRSxLQUFLQyxJQUFBQSxrREFBd0IsRUFBQ1osZ0JBQUksQ0FBQ2EsUUFBUTtZQUFFO1FBQUU7SUFBRTtJQUNuRyxPQUFPO0FBQ1Q7SUFFQSxXQUFlaEIifQ==