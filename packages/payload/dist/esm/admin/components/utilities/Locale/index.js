function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import React, { createContext, useContext, useState, useEffect } from "react";
import { useConfig } from "../Config";
import { useAuth } from "../Auth";
import { usePreferences } from "../Preferences";
import { useSearchParams } from "../SearchParams";
import { findLocaleFromCode } from "../../../../utilities/findLocaleFromCode";
var LocaleContext = /*#__PURE__*/ createContext(null);
export var LocaleProvider = function(param) {
    var children = param.children;
    var _searchParams;
    var localization = useConfig().localization;
    var user = useAuth().user;
    var defaultLocale = localization && localization.defaultLocale ? localization.defaultLocale : "en";
    var searchParams = useSearchParams();
    var _useState = _sliced_to_array(useState(((_searchParams = searchParams) === null || _searchParams === void 0 ? void 0 : _searchParams.locale) || defaultLocale), 2), localeCode = _useState[0], setLocaleCode = _useState[1];
    var _useState1 = _sliced_to_array(useState(localization && findLocaleFromCode(localization, localeCode)), 2), locale = _useState1[0], setLocale = _useState1[1];
    var _usePreferences = usePreferences(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var localeFromParams = searchParams.locale;
    useEffect(function() {
        if (!localization) {
            return;
        }
        // set locale from search param
        if (localeFromParams && localization.localeCodes.indexOf(localeFromParams) > -1) {
            setLocaleCode(localeFromParams);
            setLocale(findLocaleFromCode(localization, localeFromParams));
            if (user) setPreference("locale", localeFromParams);
            return;
        }
        // set locale from preferences or default
        _async_to_generator(function() {
            var preferenceLocale, isPreferenceInConfig;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!user) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            getPreference("locale")
                        ];
                    case 1:
                        preferenceLocale = _state.sent();
                        isPreferenceInConfig = preferenceLocale && localization.localeCodes.indexOf(preferenceLocale) > -1;
                        if (isPreferenceInConfig) {
                            setLocaleCode(preferenceLocale);
                            setLocale(findLocaleFromCode(localization, preferenceLocale));
                            return [
                                2
                            ];
                        }
                        setPreference("locale", defaultLocale);
                        _state.label = 2;
                    case 2:
                        setLocaleCode(defaultLocale);
                        setLocale(findLocaleFromCode(localization, defaultLocale));
                        return [
                            2
                        ];
                }
            });
        })();
    }, [
        defaultLocale,
        getPreference,
        localeFromParams,
        setPreference,
        user,
        localization
    ]);
    return /*#__PURE__*/ React.createElement(LocaleContext.Provider, {
        value: locale
    }, children);
};
/**
 * A hook that returns the current locale object.
 */ export var useLocale = function() {
    return useContext(LocaleContext);
};
export default LocaleContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2NhbGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vQXV0aCc7XG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uL1ByZWZlcmVuY2VzJztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uL1NlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyBmaW5kTG9jYWxlRnJvbUNvZGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZmluZExvY2FsZUZyb21Db2RlJztcblxuY29uc3QgTG9jYWxlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBMb2NhbGVQcm92aWRlcjogUmVhY3QuRkM8eyBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7XG4gIGNoaWxkcmVuLFxufSkgPT4ge1xuICBjb25zdCB7IGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGRlZmF1bHRMb2NhbGUgPSAobG9jYWxpemF0aW9uICYmIGxvY2FsaXphdGlvbi5kZWZhdWx0TG9jYWxlKVxuICAgID8gbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGVcbiAgICA6ICdlbic7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBbbG9jYWxlQ29kZSwgc2V0TG9jYWxlQ29kZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFxuICAgIChzZWFyY2hQYXJhbXM/LmxvY2FsZSBhcyBzdHJpbmcpIHx8IGRlZmF1bHRMb2NhbGUsXG4gICk7XG4gIGNvbnN0IFtsb2NhbGUsIHNldExvY2FsZV0gPSB1c2VTdGF0ZTxMb2NhbGUgfCBudWxsPihcbiAgICBsb2NhbGl6YXRpb24gJiYgZmluZExvY2FsZUZyb21Db2RlKGxvY2FsaXphdGlvbiwgbG9jYWxlQ29kZSksXG4gICk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgbG9jYWxlRnJvbVBhcmFtcyA9IHNlYXJjaFBhcmFtcy5sb2NhbGU7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWxvY2FsaXphdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCBsb2NhbGUgZnJvbSBzZWFyY2ggcGFyYW1cbiAgICBpZiAoXG4gICAgICBsb2NhbGVGcm9tUGFyYW1zXG4gICAgICAmJiBsb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMuaW5kZXhPZihsb2NhbGVGcm9tUGFyYW1zIGFzIHN0cmluZykgPiAtMVxuICAgICkge1xuICAgICAgc2V0TG9jYWxlQ29kZShsb2NhbGVGcm9tUGFyYW1zIGFzIHN0cmluZyk7XG4gICAgICBzZXRMb2NhbGUoXG4gICAgICAgIGZpbmRMb2NhbGVGcm9tQ29kZShsb2NhbGl6YXRpb24sIGxvY2FsZUZyb21QYXJhbXMgYXMgc3RyaW5nKSxcbiAgICAgICk7XG4gICAgICBpZiAodXNlcikgc2V0UHJlZmVyZW5jZSgnbG9jYWxlJywgbG9jYWxlRnJvbVBhcmFtcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gc2V0IGxvY2FsZSBmcm9tIHByZWZlcmVuY2VzIG9yIGRlZmF1bHRcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHByZWZlcmVuY2VMb2NhbGU6IHN0cmluZztcbiAgICAgIGxldCBpc1ByZWZlcmVuY2VJbkNvbmZpZzogYm9vbGVhbjtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHByZWZlcmVuY2VMb2NhbGUgPSBhd2FpdCBnZXRQcmVmZXJlbmNlPHN0cmluZz4oJ2xvY2FsZScpO1xuICAgICAgICBpc1ByZWZlcmVuY2VJbkNvbmZpZyA9IHByZWZlcmVuY2VMb2NhbGVcbiAgICAgICAgICAmJiBsb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMuaW5kZXhPZihwcmVmZXJlbmNlTG9jYWxlKSA+IC0xO1xuICAgICAgICBpZiAoaXNQcmVmZXJlbmNlSW5Db25maWcpIHtcbiAgICAgICAgICBzZXRMb2NhbGVDb2RlKHByZWZlcmVuY2VMb2NhbGUpO1xuICAgICAgICAgIHNldExvY2FsZShcbiAgICAgICAgICAgIGZpbmRMb2NhbGVGcm9tQ29kZShsb2NhbGl6YXRpb24sIHByZWZlcmVuY2VMb2NhbGUgYXMgc3RyaW5nKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRQcmVmZXJlbmNlKCdsb2NhbGUnLCBkZWZhdWx0TG9jYWxlKTtcbiAgICAgIH1cbiAgICAgIHNldExvY2FsZUNvZGUoZGVmYXVsdExvY2FsZSk7XG4gICAgICBzZXRMb2NhbGUoZmluZExvY2FsZUZyb21Db2RlKGxvY2FsaXphdGlvbiwgZGVmYXVsdExvY2FsZSkpO1xuICAgIH0pKCk7XG4gIH0sIFtcbiAgICBkZWZhdWx0TG9jYWxlLFxuICAgIGdldFByZWZlcmVuY2UsXG4gICAgbG9jYWxlRnJvbVBhcmFtcyxcbiAgICBzZXRQcmVmZXJlbmNlLFxuICAgIHVzZXIsXG4gICAgbG9jYWxpemF0aW9uLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxMb2NhbGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtsb2NhbGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTG9jYWxlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbi8qKlxuICogQSBob29rIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBsb2NhbGUgb2JqZWN0LlxuICovXG5leHBvcnQgY29uc3QgdXNlTG9jYWxlID0gKCk6IExvY2FsZSB8IG51bGwgPT4gdXNlQ29udGV4dChMb2NhbGVDb250ZXh0KTtcbmV4cG9ydCBkZWZhdWx0IExvY2FsZUNvbnRleHQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29uZmlnIiwidXNlQXV0aCIsInVzZVByZWZlcmVuY2VzIiwidXNlU2VhcmNoUGFyYW1zIiwiZmluZExvY2FsZUZyb21Db2RlIiwiTG9jYWxlQ29udGV4dCIsIkxvY2FsZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWFyY2hQYXJhbXMiLCJsb2NhbGl6YXRpb24iLCJ1c2VyIiwiZGVmYXVsdExvY2FsZSIsImxvY2FsZSIsImxvY2FsZUNvZGUiLCJzZXRMb2NhbGVDb2RlIiwic2V0TG9jYWxlIiwiZ2V0UHJlZmVyZW5jZSIsInNldFByZWZlcmVuY2UiLCJsb2NhbGVGcm9tUGFyYW1zIiwibG9jYWxlQ29kZXMiLCJpbmRleE9mIiwicHJlZmVyZW5jZUxvY2FsZSIsImlzUHJlZmVyZW5jZUluQ29uZmlnIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUxvY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLFFBQVEsUUFBUTtBQUU5RSxTQUFTQyxTQUFTLFFBQVEsWUFBWTtBQUN0QyxTQUFTQyxPQUFPLFFBQVEsVUFBVTtBQUNsQyxTQUFTQyxjQUFjLFFBQVEsaUJBQWlCO0FBQ2hELFNBQVNDLGVBQWUsUUFBUSxrQkFBa0I7QUFDbEQsU0FBU0Msa0JBQWtCLFFBQVEsMkNBQTJDO0FBRTlFLElBQU1DLDhCQUFnQlQsY0FBYztBQUVwQyxPQUFPLElBQU1VLGlCQUEyRDtRQUN0RUMsaUJBQUFBO1FBVUdDO0lBUkgsSUFBTSxBQUFFQyxlQUFpQlQsWUFBakJTO0lBRVIsSUFBTSxBQUFFQyxPQUFTVCxVQUFUUztJQUNSLElBQU1DLGdCQUFnQixBQUFDRixnQkFBZ0JBLGFBQWFFLGFBQWEsR0FDN0RGLGFBQWFFLGFBQWEsR0FDMUI7SUFDSixJQUFNSCxlQUFlTDtJQUNyQixJQUFvQ0wsNkJBQUFBLFNBQ2xDLENBQUEsQ0FBQ1UsZ0JBQUFBLFlBQThCLGNBQTlCQSxvQ0FBQUEsY0FBY0ksTUFBTSxLQUFlRCxvQkFEL0JFLGFBQTZCZixjQUFqQmdCLGdCQUFpQmhCO0lBR3BDLElBQTRCQSw4QkFBQUEsU0FDMUJXLGdCQUFnQkwsbUJBQW1CSyxjQUFjSSxrQkFENUNELFNBQXFCZCxlQUFiaUIsWUFBYWpCO0lBRzVCLElBQXlDSSxrQkFBQUEsa0JBQWpDYyxnQkFBaUNkLGdCQUFqQ2MsZUFBZUMsZ0JBQWtCZixnQkFBbEJlO0lBQ3ZCLElBQU1DLG1CQUFtQlYsYUFBYUksTUFBTTtJQUU1Q2IsVUFBVTtRQUNSLElBQUksQ0FBQ1UsY0FBYztZQUNqQjtRQUNGO1FBRUEsK0JBQStCO1FBQy9CLElBQ0VTLG9CQUNHVCxhQUFhVSxXQUFXLENBQUNDLE9BQU8sQ0FBQ0Ysb0JBQThCLENBQUMsR0FDbkU7WUFDQUosY0FBY0k7WUFDZEgsVUFDRVgsbUJBQW1CSyxjQUFjUztZQUVuQyxJQUFJUixNQUFNTyxjQUFjLFVBQVVDO1lBQ2xDO1FBQ0Y7UUFFQSx5Q0FBeUM7UUFDeEMsb0JBQUE7Z0JBQ0tHLGtCQUNBQzs7Ozs2QkFDQVosTUFBQUE7Ozs7d0JBQ2lCOzs0QkFBTU0sY0FBc0I7Ozt3QkFBL0NLLG1CQUFtQjt3QkFDbkJDLHVCQUF1QkQsb0JBQ2xCWixhQUFhVSxXQUFXLENBQUNDLE9BQU8sQ0FBQ0Msb0JBQW9CLENBQUM7d0JBQzNELElBQUlDLHNCQUFzQjs0QkFDeEJSLGNBQWNPOzRCQUNkTixVQUNFWCxtQkFBbUJLLGNBQWNZOzRCQUVuQzs7O3dCQUNGO3dCQUNBSixjQUFjLFVBQVVOOzs7d0JBRTFCRyxjQUFjSDt3QkFDZEksVUFBVVgsbUJBQW1CSyxjQUFjRTs7Ozs7O1FBQzdDO0lBQ0YsR0FBRztRQUNEQTtRQUNBSztRQUNBRTtRQUNBRDtRQUNBUDtRQUNBRDtLQUNEO0lBRUQscUJBQ0Usb0JBQUNKLGNBQWNrQixRQUFRO1FBQUNDLE9BQU9aO09BQzVCTDtBQUdQLEVBQUU7QUFFRjs7Q0FFQyxHQUNELE9BQU8sSUFBTWtCLFlBQVk7V0FBcUI1QixXQUFXUTtFQUFlO0FBQ3hFLGVBQWVBLGNBQWMifQ==