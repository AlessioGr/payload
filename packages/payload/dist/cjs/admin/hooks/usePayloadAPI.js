"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = require("react");
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reacti18next = require("react-i18next");
var _Locale = require("../components/utilities/Locale");
var _api = require("../api");
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
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
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
var usePayloadAPI = function(url) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_initialParams = options.initialParams, initialParams = _options_initialParams === void 0 ? {} : _options_initialParams, _options_initialData = options.initialData, initialData = _options_initialData === void 0 ? {} : _options_initialData;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var _useState = _sliced_to_array((0, _react.useState)(initialData), 2), data = _useState[0], setData = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(initialParams), 2), params = _useState1[0], setParams = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)(true), 2), isLoading = _useState2[0], setIsLoading = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)(false), 2), isError = _useState3[0], setIsError = _useState3[1];
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var search = _qs.default.stringify(_object_spread({
        locale: locale
    }, typeof params === "object" ? params : {}), {
        addQueryPrefix: true
    });
    (0, _react.useEffect)(function() {
        var abortController = new AbortController();
        var fetchData = function() {
            var _ref = _async_to_generator(function() {
                var response, json, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            setIsError(false);
                            setIsLoading(true);
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                4,
                                ,
                                5
                            ]);
                            return [
                                4,
                                _api.requests.get("".concat(url).concat(search), {
                                    signal: abortController.signal,
                                    headers: {
                                        "Accept-Language": i18n.language
                                    }
                                })
                            ];
                        case 2:
                            response = _state.sent();
                            if (response.status > 201) {
                                setIsError(true);
                            }
                            return [
                                4,
                                response.json()
                            ];
                        case 3:
                            json = _state.sent();
                            setData(json);
                            setIsLoading(false);
                            return [
                                3,
                                5
                            ];
                        case 4:
                            error = _state.sent();
                            if (!abortController.signal.aborted) {
                                setIsError(true);
                                setIsLoading(false);
                            }
                            return [
                                3,
                                5
                            ];
                        case 5:
                            return [
                                2
                            ];
                    }
                });
            });
            return function fetchData() {
                return _ref.apply(this, arguments);
            };
        }();
        if (url) {
            fetchData();
        } else {
            setIsError(false);
            setIsLoading(false);
        }
        return function() {
            abortController.abort();
        };
    }, [
        url,
        locale,
        search,
        i18n.language
    ]);
    return [
        {
            data: data,
            isLoading: isLoading,
            isError: isError
        },
        {
            setParams: setParams
        }
    ];
};
var _default = usePayloadAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VQYXlsb2FkQVBJLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3FzJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdGllcy9Mb2NhbGUnO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi9hcGknO1xuXG50eXBlIFJlc3VsdCA9IFtcbiAge1xuICAgIGlzTG9hZGluZzogYm9vbGVhblxuICAgIGlzRXJyb3I6IGJvb2xlYW5cbiAgICBkYXRhOiBhbnlcbiAgfSxcbiAge1xuICAgIHNldFBhcmFtczogUmVhY3QuRGlzcGF0Y2g8dW5rbm93bj5cbiAgfVxuXVxuXG50eXBlIE9wdGlvbnMgPSB7XG4gIGluaXRpYWxQYXJhbXM/OiB1bmtub3duXG4gIGluaXRpYWxEYXRhPzogYW55XG59XG5cbnR5cGUgVXNlUGF5bG9hZEFQSSA9ICh1cmw6IHN0cmluZywgb3B0aW9ucz86IE9wdGlvbnMpID0+IFJlc3VsdDtcblxuY29uc3QgdXNlUGF5bG9hZEFQSTogVXNlUGF5bG9hZEFQSSA9ICh1cmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICBjb25zdCB7XG4gICAgaW5pdGlhbFBhcmFtcyA9IHt9LFxuICAgIGluaXRpYWxEYXRhID0ge30sXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xuICBjb25zdCBbcGFyYW1zLCBzZXRQYXJhbXNdID0gdXNlU3RhdGUoaW5pdGlhbFBhcmFtcyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG5cbiAgY29uc3Qgc2VhcmNoID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHtcbiAgICBsb2NhbGUsXG4gICAgLi4uKHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnID8gcGFyYW1zIDoge30pLFxuICB9LCB7XG4gICAgYWRkUXVlcnlQcmVmaXg6IHRydWUsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgc2V0SXNFcnJvcihmYWxzZSk7XG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KGAke3VybH0ke3NlYXJjaH1gLCB7XG4gICAgICAgICAgc2lnbmFsOiBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPiAyMDEpIHtcbiAgICAgICAgICBzZXRJc0Vycm9yKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgc2V0RGF0YShqc29uKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmICghYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgICAgc2V0SXNFcnJvcih0cnVlKTtcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh1cmwpIHtcbiAgICAgIGZldGNoRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0Vycm9yKGZhbHNlKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgIH07XG4gIH0sIFt1cmwsIGxvY2FsZSwgc2VhcmNoLCBpMThuLmxhbmd1YWdlXSk7XG5cbiAgcmV0dXJuIFt7IGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciB9LCB7IHNldFBhcmFtcyB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVBheWxvYWRBUEk7XG4iXSwibmFtZXMiOlsidXNlUGF5bG9hZEFQSSIsInVybCIsIm9wdGlvbnMiLCJpbml0aWFsUGFyYW1zIiwiaW5pdGlhbERhdGEiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VTdGF0ZSIsImRhdGEiLCJzZXREYXRhIiwicGFyYW1zIiwic2V0UGFyYW1zIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJ1c2VMb2NhbGUiLCJjb2RlIiwibG9jYWxlIiwic2VhcmNoIiwicXVlcnlTdHJpbmciLCJzdHJpbmdpZnkiLCJhZGRRdWVyeVByZWZpeCIsInVzZUVmZmVjdCIsImFib3J0Q29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwianNvbiIsImVycm9yIiwicmVxdWVzdHMiLCJnZXQiLCJzaWduYWwiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJzdGF0dXMiLCJhYm9ydGVkIiwiYWJvcnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBeUZBOzs7ZUFBQTs7O3FCQXpG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