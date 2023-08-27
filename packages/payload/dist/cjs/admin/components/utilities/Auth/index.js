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
    AuthProvider: function() {
        return AuthProvider;
    },
    useAuth: function() {
        return useAuth;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _jwtdecode = /*#__PURE__*/ _interop_require_default(require("jwt-decode"));
var _reactrouterdom = require("react-router-dom");
var _modal = /*#__PURE__*/ _interop_require_wildcard(require("@faceless-ui/modal"));
var _reacti18next = require("react-i18next");
var _reacttoastify = require("react-toastify");
var _Config = require("../Config");
var _api = require("../../../api");
var _useDebounce = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useDebounce"));
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
var maxTimeoutTime = 2147483647;
var AuthProvider = function(param) {
    var children = param.children;
    var _user, _user1;
    var _useState = _sliced_to_array((0, _react.useState)(), 2), user = _useState[0], setUser = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(), 2), tokenInMemory = _useState1[0], setTokenInMemory = _useState1[1];
    var pathname = (0, _reactrouterdom.useLocation)().pathname;
    var push = (0, _reactrouterdom.useHistory)().push;
    var config = (0, _Config.useConfig)();
    var _config_admin = config.admin, userSlug = _config_admin.user, logoutInactivityRoute = _config_admin.inactivityRoute, autoLogin = _config_admin.autoLogin, serverURL = config.serverURL, _config_routes = config.routes, admin = _config_routes.admin, api = _config_routes.api;
    var exp = (_user = user) === null || _user === void 0 ? void 0 : _user.exp;
    var _useState2 = _sliced_to_array((0, _react.useState)(), 2), permissions = _useState2[0], setPermissions = _useState2[1];
    var useModal = _modal.useModal;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var _useModal = useModal(), openModal = _useModal.openModal, closeAllModals = _useModal.closeAllModals;
    var _useState3 = _sliced_to_array((0, _react.useState)(0), 2), lastLocationChange = _useState3[0], setLastLocationChange = _useState3[1];
    var debouncedLocationChange = (0, _useDebounce.default)(lastLocationChange, 10000);
    var id = (_user1 = user) === null || _user1 === void 0 ? void 0 : _user1.id;
    var redirectToInactivityRoute = (0, _react.useCallback)(function() {
        if (window.location.pathname.startsWith(admin)) {
            var redirectParam = "?redirect=".concat(encodeURIComponent(window.location.pathname.replace(admin, "")));
            push("".concat(admin).concat(logoutInactivityRoute).concat(redirectParam));
        } else {
            push("".concat(admin).concat(logoutInactivityRoute));
        }
        closeAllModals();
    }, [
        push,
        admin,
        logoutInactivityRoute,
        closeAllModals
    ]);
    var refreshCookie = (0, _react.useCallback)(function(forceRefresh) {
        var now = Math.round(new Date().getTime() / 1000);
        var remainingTime = (exp || 0) - now;
        if (forceRefresh || exp && remainingTime < 120) {
            setTimeout(/*#__PURE__*/ _async_to_generator(function() {
                var request, json, e;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                5,
                                ,
                                6
                            ]);
                            return [
                                4,
                                _api.requests.post("".concat(serverURL).concat(api, "/").concat(userSlug, "/refresh-token"), {
                                    headers: {
                                        "Accept-Language": i18n.language
                                    }
                                })
                            ];
                        case 1:
                            request = _state.sent();
                            if (!(request.status === 200)) return [
                                3,
                                3
                            ];
                            return [
                                4,
                                request.json()
                            ];
                        case 2:
                            json = _state.sent();
                            setUser(json.user);
                            return [
                                3,
                                4
                            ];
                        case 3:
                            setUser(null);
                            redirectToInactivityRoute();
                            _state.label = 4;
                        case 4:
                            return [
                                3,
                                6
                            ];
                        case 5:
                            e = _state.sent();
                            _reacttoastify.toast.error(e.message);
                            return [
                                3,
                                6
                            ];
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            }), 1000);
        }
    }, [
        exp,
        serverURL,
        api,
        userSlug,
        i18n,
        redirectToInactivityRoute
    ]);
    var refreshCookieAsync = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(skipSetUser) {
            var request, json, e;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            4,
                            ,
                            5
                        ]);
                        return [
                            4,
                            _api.requests.post("".concat(serverURL).concat(api, "/").concat(userSlug, "/refresh-token"), {
                                headers: {
                                    "Accept-Language": i18n.language
                                }
                            })
                        ];
                    case 1:
                        request = _state.sent();
                        if (!(request.status === 200)) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            request.json()
                        ];
                    case 2:
                        json = _state.sent();
                        if (!skipSetUser) setUser(json.user);
                        return [
                            2,
                            json.user
                        ];
                    case 3:
                        setUser(null);
                        redirectToInactivityRoute();
                        return [
                            2,
                            null
                        ];
                    case 4:
                        e = _state.sent();
                        _reacttoastify.toast.error("Refreshing token failed: ".concat(e.message));
                        return [
                            2,
                            null
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
        return function(skipSetUser) {
            return _ref.apply(this, arguments);
        };
    }(), [
        serverURL,
        api,
        userSlug,
        i18n,
        redirectToInactivityRoute
    ]);
    var setToken = (0, _react.useCallback)(function(token) {
        var decoded = (0, _jwtdecode.default)(token);
        setUser(decoded);
        setTokenInMemory(token);
    }, []);
    var logOut = (0, _react.useCallback)(function() {
        setUser(null);
        setTokenInMemory(undefined);
        _api.requests.post("".concat(serverURL).concat(api, "/").concat(userSlug, "/logout"));
    }, [
        serverURL,
        api,
        userSlug
    ]);
    var refreshPermissions = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var request, json, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        _api.requests.get("".concat(serverURL).concat(api, "/access"), {
                            headers: {
                                "Accept-Language": i18n.language
                            }
                        })
                    ];
                case 1:
                    request = _state.sent();
                    if (!(request.status === 200)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        request.json()
                    ];
                case 2:
                    json = _state.sent();
                    setPermissions(json);
                    return [
                        3,
                        4
                    ];
                case 3:
                    throw new Error("Fetching permissions failed with status code ".concat(request.status));
                case 4:
                    return [
                        3,
                        6
                    ];
                case 5:
                    e = _state.sent();
                    _reacttoastify.toast.error("Refreshing permissions failed: ".concat(e.message));
                    return [
                        3,
                        6
                    ];
                case 6:
                    return [
                        2
                    ];
            }
        });
    }), [
        serverURL,
        api,
        i18n
    ]);
    // On mount, get user and set
    (0, _react.useEffect)(function() {
        var fetchMe = function() {
            var _ref = _async_to_generator(function() {
                var request, _json, _json1, json, autoLoginResult, _autoLoginJson, autoLoginJson, e;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                11,
                                ,
                                12
                            ]);
                            return [
                                4,
                                _api.requests.get("".concat(serverURL).concat(api, "/").concat(userSlug, "/me"), {
                                    headers: {
                                        "Accept-Language": i18n.language
                                    }
                                })
                            ];
                        case 1:
                            request = _state.sent();
                            if (!(request.status === 200)) return [
                                3,
                                10
                            ];
                            return [
                                4,
                                request.json()
                            ];
                        case 2:
                            json = _state.sent();
                            if (!((_json = json) === null || _json === void 0 ? void 0 : _json.user)) return [
                                3,
                                3
                            ];
                            setUser(json.user);
                            return [
                                3,
                                10
                            ];
                        case 3:
                            if (!((_json1 = json) === null || _json1 === void 0 ? void 0 : _json1.token)) return [
                                3,
                                4
                            ];
                            setToken(json.token);
                            return [
                                3,
                                10
                            ];
                        case 4:
                            if (!(autoLogin && autoLogin.prefillOnly !== true)) return [
                                3,
                                9
                            ];
                            return [
                                4,
                                _api.requests.post("".concat(serverURL).concat(api, "/").concat(userSlug, "/login"), {
                                    body: JSON.stringify({
                                        email: autoLogin.email,
                                        password: autoLogin.password
                                    }),
                                    headers: {
                                        "Accept-Language": i18n.language,
                                        "Content-Type": "application/json"
                                    }
                                })
                            ];
                        case 5:
                            autoLoginResult = _state.sent();
                            if (!(autoLoginResult.status === 200)) return [
                                3,
                                7
                            ];
                            return [
                                4,
                                autoLoginResult.json()
                            ];
                        case 6:
                            autoLoginJson = _state.sent();
                            setUser(autoLoginJson.user);
                            if ((_autoLoginJson = autoLoginJson) === null || _autoLoginJson === void 0 ? void 0 : _autoLoginJson.token) {
                                setToken(autoLoginJson.token);
                            }
                            return [
                                3,
                                8
                            ];
                        case 7:
                            setUser(null);
                            _state.label = 8;
                        case 8:
                            return [
                                3,
                                10
                            ];
                        case 9:
                            setUser(null);
                            _state.label = 10;
                        case 10:
                            return [
                                3,
                                12
                            ];
                        case 11:
                            e = _state.sent();
                            _reacttoastify.toast.error("Fetching user failed: ".concat(e.message));
                            return [
                                3,
                                12
                            ];
                        case 12:
                            return [
                                2
                            ];
                    }
                });
            });
            return function fetchMe() {
                return _ref.apply(this, arguments);
            };
        }();
        fetchMe();
    }, [
        i18n,
        setToken,
        api,
        serverURL,
        userSlug,
        autoLogin
    ]);
    // When location changes, refresh cookie
    (0, _react.useEffect)(function() {
        if (id) {
            refreshCookie();
        }
    }, [
        debouncedLocationChange,
        refreshCookie,
        id
    ]);
    (0, _react.useEffect)(function() {
        setLastLocationChange(Date.now());
    }, [
        pathname
    ]);
    // When user changes, get new access
    (0, _react.useEffect)(function() {
        if (id) {
            refreshPermissions();
        }
    }, [
        i18n,
        id,
        api,
        serverURL,
        refreshPermissions
    ]);
    (0, _react.useEffect)(function() {
        var reminder;
        var now = Math.round(new Date().getTime() / 1000);
        var remainingTime = exp - now;
        if (remainingTime > 0) {
            reminder = setTimeout(function() {
                openModal("stay-logged-in");
            }, (Math.min((remainingTime - 60) * 1000), maxTimeoutTime));
        }
        return function() {
            if (reminder) clearTimeout(reminder);
        };
    }, [
        exp,
        openModal
    ]);
    (0, _react.useEffect)(function() {
        var forceLogOut;
        var now = Math.round(new Date().getTime() / 1000);
        var remainingTime = exp - now;
        if (remainingTime > 0) {
            forceLogOut = setTimeout(function() {
                setUser(null);
                redirectToInactivityRoute();
            }, Math.min(remainingTime * 1000, maxTimeoutTime));
        }
        return function() {
            if (forceLogOut) clearTimeout(forceLogOut);
        };
    }, [
        exp,
        closeAllModals,
        i18n,
        redirectToInactivityRoute
    ]);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            user: user,
            setUser: setUser,
            logOut: logOut,
            refreshCookie: refreshCookie,
            refreshCookieAsync: refreshCookieAsync,
            refreshPermissions: refreshPermissions,
            permissions: permissions,
            setToken: setToken,
            token: tokenInMemory
        }
    }, children);
};
var useAuth = function() {
    return (0, _react.useContext)(Context);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9BdXRoL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAqIGFzIGZhY2VsZXNzdWkgZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IFBlcm1pc3Npb25zLCBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXV0aC90eXBlcyc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9Db25maWcnO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZURlYm91bmNlJztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0KTtcblxuY29uc3QgbWF4VGltZW91dFRpbWUgPSAyMTQ3NDgzNjQ3O1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPigpO1xuICBjb25zdCBbdG9rZW5Jbk1lbW9yeSwgc2V0VG9rZW5Jbk1lbW9yeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgdXNlcjogdXNlclNsdWcsXG4gICAgICBpbmFjdGl2aXR5Um91dGU6IGxvZ291dEluYWN0aXZpdHlSb3V0ZSxcbiAgICAgIGF1dG9Mb2dpbixcbiAgICB9LFxuICAgIHNlcnZlclVSTCxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFkbWluLFxuICAgICAgYXBpLFxuICAgIH0sXG4gIH0gPSBjb25maWc7XG5cbiAgY29uc3QgZXhwID0gdXNlcj8uZXhwO1xuXG4gIGNvbnN0IFtwZXJtaXNzaW9ucywgc2V0UGVybWlzc2lvbnNdID0gdXNlU3RhdGU8UGVybWlzc2lvbnM+KCk7XG4gIGNvbnN0IHsgdXNlTW9kYWwgfSA9IGZhY2VsZXNzdWk7XG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IG9wZW5Nb2RhbCwgY2xvc2VBbGxNb2RhbHMgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IFtsYXN0TG9jYXRpb25DaGFuZ2UsIHNldExhc3RMb2NhdGlvbkNoYW5nZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZGVib3VuY2VkTG9jYXRpb25DaGFuZ2UgPSB1c2VEZWJvdW5jZShsYXN0TG9jYXRpb25DaGFuZ2UsIDEwMDAwKTtcblxuICBjb25zdCBpZCA9IHVzZXI/LmlkO1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9JbmFjdGl2aXR5Um91dGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKGFkbWluKSkge1xuICAgICAgY29uc3QgcmVkaXJlY3RQYXJhbSA9IGA/cmVkaXJlY3Q9JHtlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoYWRtaW4sICcnKSl9YDtcbiAgICAgIHB1c2goYCR7YWRtaW59JHtsb2dvdXRJbmFjdGl2aXR5Um91dGV9JHtyZWRpcmVjdFBhcmFtfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoKGAke2FkbWlufSR7bG9nb3V0SW5hY3Rpdml0eVJvdXRlfWApO1xuICAgIH1cbiAgICBjbG9zZUFsbE1vZGFscygpO1xuICB9LCBbcHVzaCwgYWRtaW4sIGxvZ291dEluYWN0aXZpdHlSb3V0ZSwgY2xvc2VBbGxNb2RhbHNdKTtcblxuICBjb25zdCByZWZyZXNoQ29va2llID0gdXNlQ2FsbGJhY2soKGZvcmNlUmVmcmVzaD86IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBub3cgPSBNYXRoLnJvdW5kKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICBjb25zdCByZW1haW5pbmdUaW1lID0gKGV4cCBhcyBudW1iZXIgfHwgMCkgLSBub3c7XG5cbiAgICBpZiAoZm9yY2VSZWZyZXNoIHx8IChleHAgJiYgcmVtYWluaW5nVGltZSA8IDEyMCkpIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KGAke3NlcnZlclVSTH0ke2FwaX0vJHt1c2VyU2x1Z30vcmVmcmVzaC10b2tlbmAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgICAgIHNldFVzZXIoanNvbi51c2VyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgICAgIHJlZGlyZWN0VG9JbmFjdGl2aXR5Um91dGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0b2FzdC5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH0sIFtleHAsIHNlcnZlclVSTCwgYXBpLCB1c2VyU2x1ZywgaTE4biwgcmVkaXJlY3RUb0luYWN0aXZpdHlSb3V0ZV0pO1xuXG4gIGNvbnN0IHJlZnJlc2hDb29raWVBc3luYyA9IHVzZUNhbGxiYWNrKGFzeW5jIChza2lwU2V0VXNlcj86IGJvb2xlYW4pOiBQcm9taXNlPFVzZXI+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHJlcXVlc3RzLnBvc3QoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3VzZXJTbHVnfS9yZWZyZXNoLXRva2VuYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgICBpZiAoIXNraXBTZXRVc2VyKSBzZXRVc2VyKGpzb24udXNlcik7XG4gICAgICAgIHJldHVybiBqc29uLnVzZXI7XG4gICAgICB9XG5cbiAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICByZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0b2FzdC5lcnJvcihgUmVmcmVzaGluZyB0b2tlbiBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCBbc2VydmVyVVJMLCBhcGksIHVzZXJTbHVnLCBpMThuLCByZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlXSk7XG5cbiAgY29uc3Qgc2V0VG9rZW4gPSB1c2VDYWxsYmFjaygodG9rZW46IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBqd3REZWNvZGU8VXNlcj4odG9rZW4pO1xuICAgIHNldFVzZXIoZGVjb2RlZCk7XG4gICAgc2V0VG9rZW5Jbk1lbW9yeSh0b2tlbik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBzZXRUb2tlbkluTWVtb3J5KHVuZGVmaW5lZCk7XG4gICAgcmVxdWVzdHMucG9zdChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7dXNlclNsdWd9L2xvZ291dGApO1xuICB9LCBbc2VydmVyVVJMLCBhcGksIHVzZXJTbHVnXSk7XG5cbiAgY29uc3QgcmVmcmVzaFBlcm1pc3Npb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcmVxdWVzdHMuZ2V0KGAke3NlcnZlclVSTH0ke2FwaX0vYWNjZXNzYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QganNvbjogUGVybWlzc2lvbnMgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgc2V0UGVybWlzc2lvbnMoanNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZldGNoaW5nIHBlcm1pc3Npb25zIGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICR7cmVxdWVzdC5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdG9hc3QuZXJyb3IoYFJlZnJlc2hpbmcgcGVybWlzc2lvbnMgZmFpbGVkOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sIFtzZXJ2ZXJVUkwsIGFwaSwgaTE4bl0pO1xuXG4gIC8vIE9uIG1vdW50LCBnZXQgdXNlciBhbmQgc2V0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hNZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCByZXF1ZXN0cy5nZXQoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3VzZXJTbHVnfS9tZWAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgICAgICAgIGlmIChqc29uPy51c2VyKSB7XG4gICAgICAgICAgICBzZXRVc2VyKGpzb24udXNlcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uPy50b2tlbikge1xuICAgICAgICAgICAgc2V0VG9rZW4oanNvbi50b2tlbik7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdXRvTG9naW4gJiYgYXV0b0xvZ2luLnByZWZpbGxPbmx5ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBhdXRvIGxvZy1pbiB3aXRoIHRoZSBwcm92aWRlZCBhdXRvTG9naW4gY3JlZGVudGlhbHMuIFRoaXMgaXMgdXNlZCBpbiBkZXYgbW9kZVxuICAgICAgICAgICAgLy8gc28geW91IGRvbid0IGhhdmUgdG8gbG9nIGluIG92ZXIgYW5kIG92ZXIgYWdhaW5cbiAgICAgICAgICAgIGNvbnN0IGF1dG9Mb2dpblJlc3VsdCA9IGF3YWl0IHJlcXVlc3RzLnBvc3QoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3VzZXJTbHVnfS9sb2dpbmAsIHtcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRvTG9naW4uZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dG9Mb2dpbi5wYXNzd29yZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYXV0b0xvZ2luUmVzdWx0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGF1dG9Mb2dpbkpzb24gPSBhd2FpdCBhdXRvTG9naW5SZXN1bHQuanNvbigpO1xuICAgICAgICAgICAgICBzZXRVc2VyKGF1dG9Mb2dpbkpzb24udXNlcik7XG4gICAgICAgICAgICAgIGlmIChhdXRvTG9naW5Kc29uPy50b2tlbikge1xuICAgICAgICAgICAgICAgIHNldFRva2VuKGF1dG9Mb2dpbkpzb24udG9rZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0b2FzdC5lcnJvcihgRmV0Y2hpbmcgdXNlciBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaE1lKCk7XG4gIH0sIFtpMThuLCBzZXRUb2tlbiwgYXBpLCBzZXJ2ZXJVUkwsIHVzZXJTbHVnLCBhdXRvTG9naW5dKTtcblxuICAvLyBXaGVuIGxvY2F0aW9uIGNoYW5nZXMsIHJlZnJlc2ggY29va2llXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlkKSB7XG4gICAgICByZWZyZXNoQ29va2llKCk7XG4gICAgfVxuICB9LCBbZGVib3VuY2VkTG9jYXRpb25DaGFuZ2UsIHJlZnJlc2hDb29raWUsIGlkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMYXN0TG9jYXRpb25DaGFuZ2UoRGF0ZS5ub3coKSk7XG4gIH0sIFtwYXRobmFtZV0pO1xuXG4gIC8vIFdoZW4gdXNlciBjaGFuZ2VzLCBnZXQgbmV3IGFjY2Vzc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgcmVmcmVzaFBlcm1pc3Npb25zKCk7XG4gICAgfVxuICB9LCBbaTE4biwgaWQsIGFwaSwgc2VydmVyVVJMLCByZWZyZXNoUGVybWlzc2lvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCByZW1pbmRlcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gICAgY29uc3Qgbm93ID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgY29uc3QgcmVtYWluaW5nVGltZSA9IGV4cCBhcyBudW1iZXIgLSBub3c7XG5cbiAgICBpZiAocmVtYWluaW5nVGltZSA+IDApIHtcbiAgICAgIHJlbWluZGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9wZW5Nb2RhbCgnc3RheS1sb2dnZWQtaW4nKTtcbiAgICAgIH0sIChNYXRoLm1pbigocmVtYWluaW5nVGltZSAtIDYwKSAqIDEwMDApLCBtYXhUaW1lb3V0VGltZSkpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocmVtaW5kZXIpIGNsZWFyVGltZW91dChyZW1pbmRlcik7XG4gICAgfTtcbiAgfSwgW2V4cCwgb3Blbk1vZGFsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgZm9yY2VMb2dPdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICAgIGNvbnN0IG5vdyA9IE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBleHAgYXMgbnVtYmVyIC0gbm93O1xuXG4gICAgaWYgKHJlbWFpbmluZ1RpbWUgPiAwKSB7XG4gICAgICBmb3JjZUxvZ091dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICByZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlKCk7XG4gICAgICB9LCBNYXRoLm1pbihyZW1haW5pbmdUaW1lICogMTAwMCwgbWF4VGltZW91dFRpbWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGZvcmNlTG9nT3V0KSBjbGVhclRpbWVvdXQoZm9yY2VMb2dPdXQpO1xuICAgIH07XG4gIH0sIFtleHAsIGNsb3NlQWxsTW9kYWxzLCBpMThuLCByZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgdXNlcixcbiAgICAgIHNldFVzZXIsXG4gICAgICBsb2dPdXQsXG4gICAgICByZWZyZXNoQ29va2llLFxuICAgICAgcmVmcmVzaENvb2tpZUFzeW5jLFxuICAgICAgcmVmcmVzaFBlcm1pc3Npb25zLFxuICAgICAgcGVybWlzc2lvbnMsXG4gICAgICBzZXRUb2tlbixcbiAgICAgIHRva2VuOiB0b2tlbkluTWVtb3J5LFxuICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbnR5cGUgVXNlQXV0aDxUID0gVXNlcj4gPSAoKSA9PiBBdXRoQ29udGV4dDxUPjtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGg6IFVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm1heFRpbWVvdXRUaW1lIiwiY2hpbGRyZW4iLCJ1c2VyIiwidXNlU3RhdGUiLCJzZXRVc2VyIiwidG9rZW5Jbk1lbW9yeSIsInNldFRva2VuSW5NZW1vcnkiLCJwYXRobmFtZSIsInVzZUxvY2F0aW9uIiwicHVzaCIsInVzZUhpc3RvcnkiLCJjb25maWciLCJ1c2VDb25maWciLCJhZG1pbiIsInVzZXJTbHVnIiwiaW5hY3Rpdml0eVJvdXRlIiwibG9nb3V0SW5hY3Rpdml0eVJvdXRlIiwiYXV0b0xvZ2luIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwiZXhwIiwicGVybWlzc2lvbnMiLCJzZXRQZXJtaXNzaW9ucyIsInVzZU1vZGFsIiwiZmFjZWxlc3N1aSIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsIm9wZW5Nb2RhbCIsImNsb3NlQWxsTW9kYWxzIiwibGFzdExvY2F0aW9uQ2hhbmdlIiwic2V0TGFzdExvY2F0aW9uQ2hhbmdlIiwiZGVib3VuY2VkTG9jYXRpb25DaGFuZ2UiLCJ1c2VEZWJvdW5jZSIsImlkIiwicmVkaXJlY3RUb0luYWN0aXZpdHlSb3V0ZSIsInVzZUNhbGxiYWNrIiwid2luZG93IiwibG9jYXRpb24iLCJzdGFydHNXaXRoIiwicmVkaXJlY3RQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJyZWZyZXNoQ29va2llIiwiZm9yY2VSZWZyZXNoIiwibm93IiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJyZW1haW5pbmdUaW1lIiwic2V0VGltZW91dCIsInJlcXVlc3QiLCJqc29uIiwiZSIsInJlcXVlc3RzIiwicG9zdCIsImhlYWRlcnMiLCJsYW5ndWFnZSIsInN0YXR1cyIsInRvYXN0IiwiZXJyb3IiLCJtZXNzYWdlIiwicmVmcmVzaENvb2tpZUFzeW5jIiwic2tpcFNldFVzZXIiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVjb2RlZCIsImp3dERlY29kZSIsImxvZ091dCIsInVuZGVmaW5lZCIsInJlZnJlc2hQZXJtaXNzaW9ucyIsImdldCIsIkVycm9yIiwidXNlRWZmZWN0IiwiZmV0Y2hNZSIsImF1dG9Mb2dpblJlc3VsdCIsImF1dG9Mb2dpbkpzb24iLCJwcmVmaWxsT25seSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJwYXNzd29yZCIsInJlbWluZGVyIiwibWluIiwiY2xlYXJUaW1lb3V0IiwiZm9yY2VMb2dPdXQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFnQmFBLFlBQVk7ZUFBWkE7O0lBc1BBQyxPQUFPO2VBQVBBOzs7NkRBdFFzRTtnRUFDN0Q7OEJBQ2tCOzZEQUNaOzRCQUNHOzZCQUNUO3NCQUVJO21CQUNEO2tFQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd4QixJQUFNQyx3QkFBVUMsSUFBQUEsb0JBQWEsRUFBQyxDQUFDO0FBRS9CLElBQU1DLGlCQUFpQjtBQUVoQixJQUFNSixlQUF3RDtRQUFHSyxpQkFBQUE7UUFxQjFEQyxPQVVEQTtJQTlCWCxJQUF3QkMsNkJBQUFBLElBQUFBLGVBQVEsU0FBekJELE9BQWlCQyxjQUFYQyxVQUFXRDtJQUN4QixJQUEwQ0EsOEJBQUFBLElBQUFBLGVBQVEsU0FBM0NFLGdCQUFtQ0YsZUFBcEJHLG1CQUFvQkg7SUFDMUMsSUFBTSxBQUFFSSxXQUFhQyxJQUFBQSwyQkFBVyxJQUF4QkQ7SUFDUixJQUFNLEFBQUVFLE9BQVNDLElBQUFBLDBCQUFVLElBQW5CRDtJQUVSLElBQU1FLFNBQVNDLElBQUFBLGlCQUFTO0lBRXhCLG9CQVdJRCxPQVZGRSxPQUNFWCxBQUFNWSx5QkFBTlosTUFDQWEsQUFBaUJDLHNDQUFqQkQsaUJBQ0FFLDBCQUFBQSxXQUVGQyxZQUtFUCxPQUxGTyw0QkFLRVAsT0FKRlEsUUFDRU4sdUJBQUFBLE9BQ0FPLHFCQUFBQTtJQUlKLElBQU1DLE9BQU1uQixRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1tQixHQUFHO0lBRXJCLElBQXNDbEIsOEJBQUFBLElBQUFBLGVBQVEsU0FBdkNtQixjQUErQm5CLGVBQWxCb0IsaUJBQWtCcEI7SUFDdEMsSUFBTSxBQUFFcUIsV0FBYUMsT0FBYkQ7SUFFUixJQUFNLEFBQUVFLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUNSLElBQXNDRixZQUFBQSxZQUE5QkksWUFBOEJKLFVBQTlCSSxXQUFXQyxpQkFBbUJMLFVBQW5CSztJQUNuQixJQUFvRDFCLDhCQUFBQSxJQUFBQSxlQUFRLEVBQUMsUUFBdEQyQixxQkFBNkMzQixlQUF6QjRCLHdCQUF5QjVCO0lBQ3BELElBQU02QiwwQkFBMEJDLElBQUFBLG9CQUFXLEVBQUNILG9CQUFvQjtJQUVoRSxJQUFNSSxNQUFLaEMsU0FBQUEsa0JBQUFBLDZCQUFBQSxPQUFNZ0MsRUFBRTtJQUVuQixJQUFNQyw0QkFBNEJDLElBQUFBLGtCQUFXLEVBQUM7UUFDNUMsSUFBSUMsT0FBT0MsUUFBUSxDQUFDL0IsUUFBUSxDQUFDZ0MsVUFBVSxDQUFDMUIsUUFBUTtZQUM5QyxJQUFNMkIsZ0JBQWdCLEFBQUMsYUFBNEUsT0FBaEVDLG1CQUFtQkosT0FBT0MsUUFBUSxDQUFDL0IsUUFBUSxDQUFDbUMsT0FBTyxDQUFDN0IsT0FBTztZQUM5RkosS0FBSyxBQUFDLEdBQVVPLE9BQVJILE9BQWdDMkIsT0FBeEJ4Qix1QkFBc0MsT0FBZHdCO1FBQzFDLE9BQU87WUFDTC9CLEtBQUssQUFBQyxHQUFVTyxPQUFSSCxPQUE4QixPQUF0Qkc7UUFDbEI7UUFDQWE7SUFDRixHQUFHO1FBQUNwQjtRQUFNSTtRQUFPRztRQUF1QmE7S0FBZTtJQUV2RCxJQUFNYyxnQkFBZ0JQLElBQUFBLGtCQUFXLEVBQUMsU0FBQ1E7UUFDakMsSUFBTUMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDLEFBQUMsSUFBSUMsT0FBUUMsT0FBTyxLQUFLO1FBQ2hELElBQU1DLGdCQUFnQixBQUFDN0IsQ0FBQUEsT0FBaUIsQ0FBQSxJQUFLd0I7UUFFN0MsSUFBSUQsZ0JBQWlCdkIsT0FBTzZCLGdCQUFnQixLQUFNO1lBQ2hEQyx5QkFBVyxvQkFBQTtvQkFFREMsU0FPRUMsTUFNREM7Ozs7Ozs7Ozs7NEJBYlM7O2dDQUFNQyxhQUFRLENBQUNDLElBQUksQ0FBQyxBQUFDLEdBQWNwQyxPQUFaRixXQUFtQkosT0FBUE0sS0FBSSxLQUFZLE9BQVROLFVBQVMsbUJBQWlCO29DQUNsRjJDLFNBQVM7d0NBQ1AsbUJBQW1CL0IsS0FBS2dDLFFBQVE7b0NBQ2xDO2dDQUNGOzs7NEJBSk1OLFVBQVU7aUNBTVpBLENBQUFBLFFBQVFPLE1BQU0sS0FBSyxHQUFFLEdBQXJCUDs7Ozs0QkFDVzs7Z0NBQU1BLFFBQVFDLElBQUk7Ozs0QkFBekJBLE9BQU87NEJBQ2JqRCxRQUFRaUQsS0FBS25ELElBQUk7Ozs7Ozs0QkFFakJFLFFBQVE7NEJBQ1IrQjs7Ozs7Ozs7NEJBRUttQjs0QkFDUE0sb0JBQUssQ0FBQ0MsS0FBSyxDQUFDUCxFQUFFUSxPQUFPOzs7Ozs7Ozs7OztZQUV6QixJQUFHO1FBQ0w7SUFDRixHQUFHO1FBQUN6QztRQUFLSDtRQUFXRTtRQUFLTjtRQUFVWTtRQUFNUztLQUEwQjtJQUVuRSxJQUFNNEIscUJBQXFCM0IsSUFBQUEsa0JBQVc7bUJBQUMsb0JBQUEsU0FBTzRCO2dCQUVwQ1osU0FPRUMsTUFRREM7Ozs7Ozs7Ozs7d0JBZlM7OzRCQUFNQyxhQUFRLENBQUNDLElBQUksQ0FBQyxBQUFDLEdBQWNwQyxPQUFaRixXQUFtQkosT0FBUE0sS0FBSSxLQUFZLE9BQVROLFVBQVMsbUJBQWlCO2dDQUNsRjJDLFNBQVM7b0NBQ1AsbUJBQW1CL0IsS0FBS2dDLFFBQVE7Z0NBQ2xDOzRCQUNGOzs7d0JBSk1OLFVBQVU7NkJBTVpBLENBQUFBLFFBQVFPLE1BQU0sS0FBSyxHQUFFLEdBQXJCUDs7Ozt3QkFDVzs7NEJBQU1BLFFBQVFDLElBQUk7Ozt3QkFBekJBLE9BQU87d0JBQ2IsSUFBSSxDQUFDVyxhQUFhNUQsUUFBUWlELEtBQUtuRCxJQUFJO3dCQUNuQzs7NEJBQU9tRCxLQUFLbkQsSUFBSTs7O3dCQUdsQkUsUUFBUTt3QkFDUitCO3dCQUNBOzs0QkFBTzs7O3dCQUNBbUI7d0JBQ1BNLG9CQUFLLENBQUNDLEtBQUssQ0FBQyxBQUFDLDRCQUFxQyxPQUFWUCxFQUFFUSxPQUFPO3dCQUNqRDs7NEJBQU87Ozs7Ozs7O1FBRVg7d0JBckI4Q0U7OztTQXFCM0M7UUFBQzlDO1FBQVdFO1FBQUtOO1FBQVVZO1FBQU1TO0tBQTBCO0lBRTlELElBQU04QixXQUFXN0IsSUFBQUEsa0JBQVcsRUFBQyxTQUFDOEI7UUFDNUIsSUFBTUMsVUFBVUMsSUFBQUEsa0JBQVMsRUFBT0Y7UUFDaEM5RCxRQUFRK0Q7UUFDUjdELGlCQUFpQjREO0lBQ25CLEdBQUcsRUFBRTtJQUVMLElBQU1HLFNBQVNqQyxJQUFBQSxrQkFBVyxFQUFDO1FBQ3pCaEMsUUFBUTtRQUNSRSxpQkFBaUJnRTtRQUNqQmYsYUFBUSxDQUFDQyxJQUFJLENBQUMsQUFBQyxHQUFjcEMsT0FBWkYsV0FBbUJKLE9BQVBNLEtBQUksS0FBWSxPQUFUTixVQUFTO0lBQy9DLEdBQUc7UUFBQ0k7UUFBV0U7UUFBS047S0FBUztJQUU3QixJQUFNeUQscUJBQXFCbkMsSUFBQUEsa0JBQVcsZ0JBQUMsb0JBQUE7WUFFN0JnQixTQU9FQyxNQUtEQzs7Ozs7Ozs7OztvQkFaUzs7d0JBQU1DLGFBQVEsQ0FBQ2lCLEdBQUcsQ0FBQyxBQUFDLEdBQWNwRCxPQUFaRixXQUFnQixPQUFKRSxLQUFJLFlBQVU7NEJBQzlEcUMsU0FBUztnQ0FDUCxtQkFBbUIvQixLQUFLZ0MsUUFBUTs0QkFDbEM7d0JBQ0Y7OztvQkFKTU4sVUFBVTt5QkFNWkEsQ0FBQUEsUUFBUU8sTUFBTSxLQUFLLEdBQUUsR0FBckJQOzs7O29CQUN3Qjs7d0JBQU1BLFFBQVFDLElBQUk7OztvQkFBdENBLE9BQW9CO29CQUMxQjlCLGVBQWU4Qjs7Ozs7O29CQUVmLE1BQU0sSUFBSW9CLE1BQU0sQUFBQyxnREFBOEQsT0FBZnJCLFFBQVFPLE1BQU07Ozs7Ozs7b0JBRXpFTDtvQkFDUE0sb0JBQUssQ0FBQ0MsS0FBSyxDQUFDLEFBQUMsa0NBQTJDLE9BQVZQLEVBQUVRLE9BQU87Ozs7Ozs7Ozs7O0lBRTNELElBQUc7UUFBQzVDO1FBQVdFO1FBQUtNO0tBQUs7SUFFekIsNkJBQTZCO0lBQzdCZ0QsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQU1DO3VCQUFVLG9CQUFBO29CQUVOdkIsU0FTQUMsT0FFT0EsUUFKTEEsTUFTRXVCLGlCQWFBQyxnQkFGRUEsZUFZTHZCOzs7Ozs7Ozs7OzRCQXZDUzs7Z0NBQU1DLGFBQVEsQ0FBQ2lCLEdBQUcsQ0FBQyxBQUFDLEdBQWNwRCxPQUFaRixXQUFtQkosT0FBUE0sS0FBSSxLQUFZLE9BQVROLFVBQVMsUUFBTTtvQ0FDdEUyQyxTQUFTO3dDQUNQLG1CQUFtQi9CLEtBQUtnQyxRQUFRO29DQUNsQztnQ0FDRjs7OzRCQUpNTixVQUFVO2lDQU1aQSxDQUFBQSxRQUFRTyxNQUFNLEtBQUssR0FBRSxHQUFyQlA7Ozs7NEJBQ1c7O2dDQUFNQSxRQUFRQyxJQUFJOzs7NEJBQXpCQSxPQUFPO21DQUVUQSxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1uRCxJQUFJOzs7OzRCQUNaRSxRQUFRaUQsS0FBS25ELElBQUk7Ozs7OzttQ0FDUm1ELFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTWEsS0FBSzs7Ozs0QkFDcEJELFNBQVNaLEtBQUthLEtBQUs7Ozs7OztpQ0FDVmpELENBQUFBLGFBQWFBLFVBQVU2RCxXQUFXLEtBQUssSUFBRyxHQUExQzdEOzs7OzRCQUdlOztnQ0FBTXNDLGFBQVEsQ0FBQ0MsSUFBSSxDQUFDLEFBQUMsR0FBY3BDLE9BQVpGLFdBQW1CSixPQUFQTSxLQUFJLEtBQVksT0FBVE4sVUFBUyxXQUFTO29DQUNsRmlFLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3Q0FDbkJDLE9BQU9qRSxVQUFVaUUsS0FBSzt3Q0FDdEJDLFVBQVVsRSxVQUFVa0UsUUFBUTtvQ0FDOUI7b0NBQ0ExQixTQUFTO3dDQUNQLG1CQUFtQi9CLEtBQUtnQyxRQUFRO3dDQUNoQyxnQkFBZ0I7b0NBQ2xCO2dDQUNGOzs7NEJBVE1rQixrQkFBa0I7aUNBVXBCQSxDQUFBQSxnQkFBZ0JqQixNQUFNLEtBQUssR0FBRSxHQUE3QmlCOzs7OzRCQUNvQjs7Z0NBQU1BLGdCQUFnQnZCLElBQUk7Ozs0QkFBMUN3QixnQkFBZ0I7NEJBQ3RCekUsUUFBUXlFLGNBQWMzRSxJQUFJOzRCQUMxQixLQUFJMkUsaUJBQUFBLDJCQUFBQSxxQ0FBQUEsZUFBZVgsS0FBSyxFQUFFO2dDQUN4QkQsU0FBU1ksY0FBY1gsS0FBSzs0QkFDOUI7Ozs7Ozs0QkFFQTlELFFBQVE7Ozs7Ozs7OzRCQUdWQSxRQUFROzs7Ozs7Ozs0QkFHTGtEOzRCQUNQTSxvQkFBSyxDQUFDQyxLQUFLLENBQUMsQUFBQyx5QkFBa0MsT0FBVlAsRUFBRVEsT0FBTzs7Ozs7Ozs7Ozs7WUFFbEQ7NEJBNUNNYTs7OztRQThDTkE7SUFDRixHQUFHO1FBQUNqRDtRQUFNdUM7UUFBVTdDO1FBQUtGO1FBQVdKO1FBQVVHO0tBQVU7SUFFeEQsd0NBQXdDO0lBQ3hDeUQsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUl4QyxJQUFJO1lBQ05TO1FBQ0Y7SUFDRixHQUFHO1FBQUNYO1FBQXlCVztRQUFlVDtLQUFHO0lBRS9Dd0MsSUFBQUEsZ0JBQVMsRUFBQztRQUNSM0Msc0JBQXNCaUIsS0FBS0gsR0FBRztJQUNoQyxHQUFHO1FBQUN0QztLQUFTO0lBRWIsb0NBQW9DO0lBQ3BDbUUsSUFBQUEsZ0JBQVMsRUFBQztRQUNSLElBQUl4QyxJQUFJO1lBQ05xQztRQUNGO0lBQ0YsR0FBRztRQUFDN0M7UUFBTVE7UUFBSWQ7UUFBS0Y7UUFBV3FEO0tBQW1CO0lBRWpERyxJQUFBQSxnQkFBUyxFQUFDO1FBQ1IsSUFBSVU7UUFDSixJQUFNdkMsTUFBTUMsS0FBS0MsS0FBSyxDQUFDLEFBQUMsSUFBSUMsT0FBUUMsT0FBTyxLQUFLO1FBQ2hELElBQU1DLGdCQUFnQjdCLE1BQWdCd0I7UUFFdEMsSUFBSUssZ0JBQWdCLEdBQUc7WUFDckJrQyxXQUFXakMsV0FBVztnQkFDcEJ2QixVQUFVO1lBQ1osR0FBSWtCLENBQUFBLEtBQUt1QyxHQUFHLENBQUMsQUFBQ25DLENBQUFBLGdCQUFnQixFQUFDLElBQUssT0FBT2xELGNBQWE7UUFDMUQ7UUFFQSxPQUFPO1lBQ0wsSUFBSW9GLFVBQVVFLGFBQWFGO1FBQzdCO0lBQ0YsR0FBRztRQUFDL0Q7UUFBS087S0FBVTtJQUVuQjhDLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJYTtRQUNKLElBQU0xQyxNQUFNQyxLQUFLQyxLQUFLLENBQUMsQUFBQyxJQUFJQyxPQUFRQyxPQUFPLEtBQUs7UUFDaEQsSUFBTUMsZ0JBQWdCN0IsTUFBZ0J3QjtRQUV0QyxJQUFJSyxnQkFBZ0IsR0FBRztZQUNyQnFDLGNBQWNwQyxXQUFXO2dCQUN2Qi9DLFFBQVE7Z0JBQ1IrQjtZQUNGLEdBQUdXLEtBQUt1QyxHQUFHLENBQUNuQyxnQkFBZ0IsTUFBTWxEO1FBQ3BDO1FBRUEsT0FBTztZQUNMLElBQUl1RixhQUFhRCxhQUFhQztRQUNoQztJQUNGLEdBQUc7UUFBQ2xFO1FBQUtRO1FBQWdCSDtRQUFNUztLQUEwQjtJQUV6RCxxQkFDRSw2QkFBQ3JDLFFBQVEwRixRQUFRO1FBQUNDLE9BQU87WUFDdkJ2RixNQUFBQTtZQUNBRSxTQUFBQTtZQUNBaUUsUUFBQUE7WUFDQTFCLGVBQUFBO1lBQ0FvQixvQkFBQUE7WUFDQVEsb0JBQUFBO1lBQ0FqRCxhQUFBQTtZQUNBMkMsVUFBQUE7WUFDQUMsT0FBTzdEO1FBQ1Q7T0FFR0o7QUFHUDtBQUlPLElBQU1KLFVBQW1CO1dBQU02RixJQUFBQSxpQkFBVSxFQUFDNUYifQ==