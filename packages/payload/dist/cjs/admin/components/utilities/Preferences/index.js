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
    PreferencesProvider: function() {
        return PreferencesProvider;
    },
    usePreferences: function() {
        return usePreferences;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Config = require("../Config");
var _Auth = require("../Auth");
var _api = require("../../../api");
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
var Context = /*#__PURE__*/ (0, _react.createContext)({});
var requestOptions = function(value, language) {
    return {
        body: JSON.stringify({
            value: value
        }),
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": language
        }
    };
};
var PreferencesProvider = function(param) {
    var children = param.children;
    var contextRef = (0, _react.useRef)({});
    var preferencesRef = (0, _react.useRef)({});
    var config = (0, _Config.useConfig)();
    var user = (0, _Auth.useAuth)().user;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var serverURL = config.serverURL, api = config.routes.api;
    (0, _react.useEffect)(function() {
        if (!user) {
            // clear preferences between users
            preferencesRef.current = {};
        }
    }, [
        user
    ]);
    var getPreference = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(key) {
            var prefs, promise;
            return _ts_generator(this, function(_state) {
                prefs = preferencesRef.current;
                if (typeof prefs[key] !== "undefined") return [
                    2,
                    prefs[key]
                ];
                promise = new Promise(function(resolve) {
                    _async_to_generator(function() {
                        var request, value, preference;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _api.requests.get("".concat(serverURL).concat(api, "/payload-preferences/").concat(key), {
                                            headers: {
                                                "Accept-Language": i18n.language
                                            }
                                        })
                                    ];
                                case 1:
                                    request = _state.sent();
                                    value = null;
                                    if (!(request.status === 200)) return [
                                        3,
                                        3
                                    ];
                                    return [
                                        4,
                                        request.json()
                                    ];
                                case 2:
                                    preference = _state.sent();
                                    value = preference.value;
                                    _state.label = 3;
                                case 3:
                                    preferencesRef.current[key] = value;
                                    resolve(value);
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                });
                prefs[key] = promise;
                return [
                    2,
                    promise
                ];
            });
        });
        return function(key) {
            return _ref.apply(this, arguments);
        };
    }(), [
        i18n.language,
        api,
        preferencesRef,
        serverURL
    ]);
    var setPreference = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(key, value) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        preferencesRef.current[key] = value;
                        return [
                            4,
                            _api.requests.post("".concat(serverURL).concat(api, "/payload-preferences/").concat(key), requestOptions(value, i18n.language))
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return function(key, value) {
            return _ref.apply(this, arguments);
        };
    }(), [
        api,
        i18n.language,
        serverURL
    ]);
    contextRef.current.getPreference = getPreference;
    contextRef.current.setPreference = setPreference;
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: contextRef.current
    }, children);
};
var usePreferences = function() {
    return (0, _react.useContext)(Context);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9QcmVmZXJlbmNlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vQXV0aCc7XG5pbXBvcnQgeyByZXF1ZXN0cyB9IGZyb20gJy4uLy4uLy4uL2FwaSc7XG5cbnR5cGUgUHJlZmVyZW5jZXNDb250ZXh0ID0ge1xuICBnZXRQcmVmZXJlbmNlOiA8VCA9IGFueT4oa2V5OiBzdHJpbmcpID0+IFQgfCBQcm9taXNlPFQ+O1xuICBzZXRQcmVmZXJlbmNlOiA8VCA9IGFueT4oa2V5OiBzdHJpbmcsIHZhbHVlOiBUKSA9PiBQcm9taXNlPHZvaWQ+O1xufVxuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBQcmVmZXJlbmNlc0NvbnRleHQpO1xuXG5jb25zdCByZXF1ZXN0T3B0aW9ucyA9ICh2YWx1ZSwgbGFuZ3VhZ2UpID0+ICh7XG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdmFsdWUgfSksXG4gIGhlYWRlcnM6IHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBsYW5ndWFnZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgUHJlZmVyZW5jZXNQcm92aWRlcjogUmVhY3QuRkM8e2NoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGNvbnRleHRSZWYgPSB1c2VSZWYoe30gYXMgUHJlZmVyZW5jZXNDb250ZXh0KTtcbiAgY29uc3QgcHJlZmVyZW5jZXNSZWYgPSB1c2VSZWYoe30pO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gY29uZmlnO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICAvLyBjbGVhciBwcmVmZXJlbmNlcyBiZXR3ZWVuIHVzZXJzXG4gICAgICBwcmVmZXJlbmNlc1JlZi5jdXJyZW50ID0ge307XG4gICAgfVxuICB9LCBbdXNlcl0pO1xuXG4gIGNvbnN0IGdldFByZWZlcmVuY2UgPSB1c2VDYWxsYmFjayhhc3luYyA8VCA9IGFueT4oa2V5OiBzdHJpbmcpOiBQcm9taXNlPFQ+ID0+IHtcbiAgICBjb25zdCBwcmVmcyA9IHByZWZlcmVuY2VzUmVmLmN1cnJlbnQ7XG4gICAgaWYgKHR5cGVvZiBwcmVmc1trZXldICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIHByZWZzW2tleV07XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiAodmFsdWU6IFQpID0+IHZvaWQpID0+IHtcbiAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCByZXF1ZXN0cy5nZXQoYCR7c2VydmVyVVJMfSR7YXBpfS9wYXlsb2FkLXByZWZlcmVuY2VzLyR7a2V5fWAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBwcmVmZXJlbmNlID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgICAgICAgdmFsdWUgPSBwcmVmZXJlbmNlLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHByZWZlcmVuY2VzUmVmLmN1cnJlbnRba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0pKCk7XG4gICAgfSk7XG4gICAgcHJlZnNba2V5XSA9IHByb21pc2U7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH0sIFtpMThuLmxhbmd1YWdlLCBhcGksIHByZWZlcmVuY2VzUmVmLCBzZXJ2ZXJVUkxdKTtcblxuICBjb25zdCBzZXRQcmVmZXJlbmNlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHByZWZlcmVuY2VzUmVmLmN1cnJlbnRba2V5XSA9IHZhbHVlO1xuICAgIGF3YWl0IHJlcXVlc3RzLnBvc3QoYCR7c2VydmVyVVJMfSR7YXBpfS9wYXlsb2FkLXByZWZlcmVuY2VzLyR7a2V5fWAsIHJlcXVlc3RPcHRpb25zKHZhbHVlLCBpMThuLmxhbmd1YWdlKSk7XG4gIH0sIFthcGksIGkxOG4ubGFuZ3VhZ2UsIHNlcnZlclVSTF0pO1xuXG4gIGNvbnRleHRSZWYuY3VycmVudC5nZXRQcmVmZXJlbmNlID0gZ2V0UHJlZmVyZW5jZTtcbiAgY29udGV4dFJlZi5jdXJyZW50LnNldFByZWZlcmVuY2UgPSBzZXRQcmVmZXJlbmNlO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRSZWYuY3VycmVudH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZVByZWZlcmVuY2VzID0gKCk6IFByZWZlcmVuY2VzQ29udGV4dCA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xuIl0sIm5hbWVzIjpbIlByZWZlcmVuY2VzUHJvdmlkZXIiLCJ1c2VQcmVmZXJlbmNlcyIsIkNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwicmVxdWVzdE9wdGlvbnMiLCJ2YWx1ZSIsImxhbmd1YWdlIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiY2hpbGRyZW4iLCJjb250ZXh0UmVmIiwidXNlUmVmIiwicHJlZmVyZW5jZXNSZWYiLCJjb25maWciLCJ1c2VDb25maWciLCJ1c2VyIiwidXNlQXV0aCIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJnZXRQcmVmZXJlbmNlIiwidXNlQ2FsbGJhY2siLCJrZXkiLCJwcmVmcyIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcXVlc3QiLCJwcmVmZXJlbmNlIiwicmVxdWVzdHMiLCJnZXQiLCJzdGF0dXMiLCJqc29uIiwic2V0UHJlZmVyZW5jZSIsInBvc3QiLCJQcm92aWRlciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBc0JhQSxtQkFBbUI7ZUFBbkJBOztJQXFEQUMsY0FBYztlQUFkQTs7OzZEQTNFb0U7NEJBRWxEO3NCQUNMO29CQUNGO21CQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QixJQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQyxDQUFDO0FBRS9CLElBQU1DLGlCQUFpQixTQUFDQyxPQUFPQztXQUFjO1FBQzNDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFBRUosT0FBQUE7UUFBTTtRQUM3QkssU0FBUztZQUNQLGdCQUFnQjtZQUNoQixtQkFBbUJKO1FBQ3JCO0lBQ0Y7O0FBRU8sSUFBTU4sc0JBQThEO1FBQUdXLGlCQUFBQTtJQUM1RSxJQUFNQyxhQUFhQyxJQUFBQSxhQUFNLEVBQUMsQ0FBQztJQUMzQixJQUFNQyxpQkFBaUJELElBQUFBLGFBQU0sRUFBQyxDQUFDO0lBQy9CLElBQU1FLFNBQVNDLElBQUFBLGlCQUFTO0lBQ3hCLElBQU0sQUFBRUMsT0FBU0MsSUFBQUEsYUFBTyxJQUFoQkQ7SUFDUixJQUFNLEFBQUVFLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUNSLElBQVFFLFlBQStCTixPQUEvQk0sV0FBV0MsQUFBVUMsTUFBVVIsT0FBcEJPLE9BQVVDO0lBRTdCQyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSSxDQUFDUCxNQUFNO1lBQ1Qsa0NBQWtDO1lBQ2xDSCxlQUFlVyxPQUFPLEdBQUcsQ0FBQztRQUM1QjtJQUNGLEdBQUc7UUFBQ1I7S0FBSztJQUVULElBQU1TLGdCQUFnQkMsSUFBQUEsa0JBQVc7bUJBQUMsb0JBQUEsU0FBZ0JDO2dCQUMxQ0MsT0FFQUM7O2dCQUZBRCxRQUFRZixlQUFlVyxPQUFPO2dCQUNwQyxJQUFJLE9BQU9JLEtBQUssQ0FBQ0QsSUFBSSxLQUFLLGFBQWE7O29CQUFPQyxLQUFLLENBQUNELElBQUk7O2dCQUNsREUsVUFBVSxJQUFJQyxRQUFRLFNBQUNDO29CQUMxQixvQkFBQTs0QkFDT0MsU0FLRjVCLE9BRUk2Qjs7OztvQ0FQUTs7d0NBQU1DLGFBQVEsQ0FBQ0MsR0FBRyxDQUFDLEFBQUMsR0FBY2IsT0FBWkYsV0FBdUNPLE9BQTNCTCxLQUFJLHlCQUEyQixPQUFKSyxNQUFPOzRDQUNsRmxCLFNBQVM7Z0RBQ1AsbUJBQW1CUyxLQUFLYixRQUFROzRDQUNsQzt3Q0FDRjs7O29DQUpNMkIsVUFBVTtvQ0FLWjVCLFFBQVE7eUNBQ1I0QixDQUFBQSxRQUFRSSxNQUFNLEtBQUssR0FBRSxHQUFyQko7Ozs7b0NBQ2lCOzt3Q0FBTUEsUUFBUUssSUFBSTs7O29DQUEvQkosYUFBYTtvQ0FDbkI3QixRQUFRNkIsV0FBVzdCLEtBQUs7OztvQ0FFMUJTLGVBQWVXLE9BQU8sQ0FBQ0csSUFBSSxHQUFHdkI7b0NBQzlCMkIsUUFBUTNCOzs7Ozs7b0JBQ1Y7Z0JBQ0Y7Z0JBQ0F3QixLQUFLLENBQUNELElBQUksR0FBR0U7Z0JBQ2I7O29CQUFPQTs7O1FBQ1Q7d0JBckJrREY7OztTQXFCL0M7UUFBQ1QsS0FBS2IsUUFBUTtRQUFFaUI7UUFBS1Q7UUFBZ0JPO0tBQVU7SUFFbEQsSUFBTWtCLGdCQUFnQlosSUFBQUEsa0JBQVc7bUJBQUMsb0JBQUEsU0FBT0MsS0FBYXZCOzs7O3dCQUNwRFMsZUFBZVcsT0FBTyxDQUFDRyxJQUFJLEdBQUd2Qjt3QkFDOUI7OzRCQUFNOEIsYUFBUSxDQUFDSyxJQUFJLENBQUMsQUFBQyxHQUFjakIsT0FBWkYsV0FBdUNPLE9BQTNCTCxLQUFJLHlCQUEyQixPQUFKSyxNQUFPeEIsZUFBZUMsT0FBT2MsS0FBS2IsUUFBUTs7O3dCQUF4Rzs7Ozs7O1FBQ0Y7d0JBSHlDc0IsS0FBYXZCOzs7U0FHbkQ7UUFBQ2tCO1FBQUtKLEtBQUtiLFFBQVE7UUFBRWU7S0FBVTtJQUVsQ1QsV0FBV2EsT0FBTyxDQUFDQyxhQUFhLEdBQUdBO0lBQ25DZCxXQUFXYSxPQUFPLENBQUNjLGFBQWEsR0FBR0E7SUFFbkMscUJBQ0UsNkJBQUNyQyxRQUFRdUMsUUFBUTtRQUFDcEMsT0FBT08sV0FBV2EsT0FBTztPQUN4Q2Q7QUFHUDtBQUVPLElBQU1WLGlCQUFpQjtXQUEwQnlDLElBQUFBLGlCQUFVLEVBQUN4QyJ9