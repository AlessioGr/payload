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
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import * as facelessui from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useConfig } from "../Config";
import { requests } from "../../../api";
import useDebounce from "../../../hooks/useDebounce";
var Context = /*#__PURE__*/ createContext({});
var maxTimeoutTime = 2147483647;
export var AuthProvider = function(param) {
    var children = param.children;
    var _user, _user1;
    var _useState = _sliced_to_array(useState(), 2), user = _useState[0], setUser = _useState[1];
    var _useState1 = _sliced_to_array(useState(), 2), tokenInMemory = _useState1[0], setTokenInMemory = _useState1[1];
    var pathname = useLocation().pathname;
    var push = useHistory().push;
    var config = useConfig();
    var _config_admin = config.admin, userSlug = _config_admin.user, logoutInactivityRoute = _config_admin.inactivityRoute, autoLogin = _config_admin.autoLogin, serverURL = config.serverURL, _config_routes = config.routes, admin = _config_routes.admin, api = _config_routes.api;
    var exp = (_user = user) === null || _user === void 0 ? void 0 : _user.exp;
    var _useState2 = _sliced_to_array(useState(), 2), permissions = _useState2[0], setPermissions = _useState2[1];
    var useModal = facelessui.useModal;
    var i18n = useTranslation().i18n;
    var _useModal = useModal(), openModal = _useModal.openModal, closeAllModals = _useModal.closeAllModals;
    var _useState3 = _sliced_to_array(useState(0), 2), lastLocationChange = _useState3[0], setLastLocationChange = _useState3[1];
    var debouncedLocationChange = useDebounce(lastLocationChange, 10000);
    var id = (_user1 = user) === null || _user1 === void 0 ? void 0 : _user1.id;
    var redirectToInactivityRoute = useCallback(function() {
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
    var refreshCookie = useCallback(function(forceRefresh) {
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
                                requests.post("".concat(serverURL).concat(api, "/").concat(userSlug, "/refresh-token"), {
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
                            toast.error(e.message);
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
    var refreshCookieAsync = useCallback(function() {
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
                            requests.post("".concat(serverURL).concat(api, "/").concat(userSlug, "/refresh-token"), {
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
                        toast.error("Refreshing token failed: ".concat(e.message));
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
    var setToken = useCallback(function(token) {
        var decoded = jwtDecode(token);
        setUser(decoded);
        setTokenInMemory(token);
    }, []);
    var logOut = useCallback(function() {
        setUser(null);
        setTokenInMemory(undefined);
        requests.post("".concat(serverURL).concat(api, "/").concat(userSlug, "/logout"));
    }, [
        serverURL,
        api,
        userSlug
    ]);
    var refreshPermissions = useCallback(/*#__PURE__*/ _async_to_generator(function() {
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
                        requests.get("".concat(serverURL).concat(api, "/access"), {
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
                    toast.error("Refreshing permissions failed: ".concat(e.message));
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
    useEffect(function() {
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
                                requests.get("".concat(serverURL).concat(api, "/").concat(userSlug, "/me"), {
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
                                requests.post("".concat(serverURL).concat(api, "/").concat(userSlug, "/login"), {
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
                            toast.error("Fetching user failed: ".concat(e.message));
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
    useEffect(function() {
        if (id) {
            refreshCookie();
        }
    }, [
        debouncedLocationChange,
        refreshCookie,
        id
    ]);
    useEffect(function() {
        setLastLocationChange(Date.now());
    }, [
        pathname
    ]);
    // When user changes, get new access
    useEffect(function() {
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
    useEffect(function() {
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
    useEffect(function() {
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
    return /*#__PURE__*/ React.createElement(Context.Provider, {
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
export var useAuth = function() {
    return useContext(Context);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9BdXRoL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgand0RGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCAqIGFzIGZhY2VsZXNzdWkgZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IFBlcm1pc3Npb25zLCBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXV0aC90eXBlcyc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi9Db25maWcnO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZURlYm91bmNlJztcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0KTtcblxuY29uc3QgbWF4VGltZW91dFRpbWUgPSAyMTQ3NDgzNjQ3O1xuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPigpO1xuICBjb25zdCBbdG9rZW5Jbk1lbW9yeSwgc2V0VG9rZW5Jbk1lbW9yeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHsgcHVzaCB9ID0gdXNlSGlzdG9yeSgpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgdXNlcjogdXNlclNsdWcsXG4gICAgICBpbmFjdGl2aXR5Um91dGU6IGxvZ291dEluYWN0aXZpdHlSb3V0ZSxcbiAgICAgIGF1dG9Mb2dpbixcbiAgICB9LFxuICAgIHNlcnZlclVSTCxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFkbWluLFxuICAgICAgYXBpLFxuICAgIH0sXG4gIH0gPSBjb25maWc7XG5cbiAgY29uc3QgZXhwID0gdXNlcj8uZXhwO1xuXG4gIGNvbnN0IFtwZXJtaXNzaW9ucywgc2V0UGVybWlzc2lvbnNdID0gdXNlU3RhdGU8UGVybWlzc2lvbnM+KCk7XG4gIGNvbnN0IHsgdXNlTW9kYWwgfSA9IGZhY2VsZXNzdWk7XG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IG9wZW5Nb2RhbCwgY2xvc2VBbGxNb2RhbHMgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IFtsYXN0TG9jYXRpb25DaGFuZ2UsIHNldExhc3RMb2NhdGlvbkNoYW5nZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgZGVib3VuY2VkTG9jYXRpb25DaGFuZ2UgPSB1c2VEZWJvdW5jZShsYXN0TG9jYXRpb25DaGFuZ2UsIDEwMDAwKTtcblxuICBjb25zdCBpZCA9IHVzZXI/LmlkO1xuXG4gIGNvbnN0IHJlZGlyZWN0VG9JbmFjdGl2aXR5Um91dGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKGFkbWluKSkge1xuICAgICAgY29uc3QgcmVkaXJlY3RQYXJhbSA9IGA/cmVkaXJlY3Q9JHtlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoYWRtaW4sICcnKSl9YDtcbiAgICAgIHB1c2goYCR7YWRtaW59JHtsb2dvdXRJbmFjdGl2aXR5Um91dGV9JHtyZWRpcmVjdFBhcmFtfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdXNoKGAke2FkbWlufSR7bG9nb3V0SW5hY3Rpdml0eVJvdXRlfWApO1xuICAgIH1cbiAgICBjbG9zZUFsbE1vZGFscygpO1xuICB9LCBbcHVzaCwgYWRtaW4sIGxvZ291dEluYWN0aXZpdHlSb3V0ZSwgY2xvc2VBbGxNb2RhbHNdKTtcblxuICBjb25zdCByZWZyZXNoQ29va2llID0gdXNlQ2FsbGJhY2soKGZvcmNlUmVmcmVzaD86IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBub3cgPSBNYXRoLnJvdW5kKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICBjb25zdCByZW1haW5pbmdUaW1lID0gKGV4cCBhcyBudW1iZXIgfHwgMCkgLSBub3c7XG5cbiAgICBpZiAoZm9yY2VSZWZyZXNoIHx8IChleHAgJiYgcmVtYWluaW5nVGltZSA8IDEyMCkpIHtcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KGAke3NlcnZlclVSTH0ke2FwaX0vJHt1c2VyU2x1Z30vcmVmcmVzaC10b2tlbmAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgICAgIHNldFVzZXIoanNvbi51c2VyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgICAgIHJlZGlyZWN0VG9JbmFjdGl2aXR5Um91dGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB0b2FzdC5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH0sIFtleHAsIHNlcnZlclVSTCwgYXBpLCB1c2VyU2x1ZywgaTE4biwgcmVkaXJlY3RUb0luYWN0aXZpdHlSb3V0ZV0pO1xuXG4gIGNvbnN0IHJlZnJlc2hDb29raWVBc3luYyA9IHVzZUNhbGxiYWNrKGFzeW5jIChza2lwU2V0VXNlcj86IGJvb2xlYW4pOiBQcm9taXNlPFVzZXI+ID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHJlcXVlc3RzLnBvc3QoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3VzZXJTbHVnfS9yZWZyZXNoLXRva2VuYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgICBpZiAoIXNraXBTZXRVc2VyKSBzZXRVc2VyKGpzb24udXNlcik7XG4gICAgICAgIHJldHVybiBqc29uLnVzZXI7XG4gICAgICB9XG5cbiAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICByZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlKCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0b2FzdC5lcnJvcihgUmVmcmVzaGluZyB0b2tlbiBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCBbc2VydmVyVVJMLCBhcGksIHVzZXJTbHVnLCBpMThuLCByZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlXSk7XG5cbiAgY29uc3Qgc2V0VG9rZW4gPSB1c2VDYWxsYmFjaygodG9rZW46IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRlY29kZWQgPSBqd3REZWNvZGU8VXNlcj4odG9rZW4pO1xuICAgIHNldFVzZXIoZGVjb2RlZCk7XG4gICAgc2V0VG9rZW5Jbk1lbW9yeSh0b2tlbik7XG4gIH0sIFtdKTtcblxuICBjb25zdCBsb2dPdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VXNlcihudWxsKTtcbiAgICBzZXRUb2tlbkluTWVtb3J5KHVuZGVmaW5lZCk7XG4gICAgcmVxdWVzdHMucG9zdChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7dXNlclNsdWd9L2xvZ291dGApO1xuICB9LCBbc2VydmVyVVJMLCBhcGksIHVzZXJTbHVnXSk7XG5cbiAgY29uc3QgcmVmcmVzaFBlcm1pc3Npb25zID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgcmVxdWVzdHMuZ2V0KGAke3NlcnZlclVSTH0ke2FwaX0vYWNjZXNzYCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QganNvbjogUGVybWlzc2lvbnMgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICAgICAgc2V0UGVybWlzc2lvbnMoanNvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZldGNoaW5nIHBlcm1pc3Npb25zIGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICR7cmVxdWVzdC5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdG9hc3QuZXJyb3IoYFJlZnJlc2hpbmcgcGVybWlzc2lvbnMgZmFpbGVkOiAke2UubWVzc2FnZX1gKTtcbiAgICB9XG4gIH0sIFtzZXJ2ZXJVUkwsIGFwaSwgaTE4bl0pO1xuXG4gIC8vIE9uIG1vdW50LCBnZXQgdXNlciBhbmQgc2V0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hNZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCByZXF1ZXN0cy5nZXQoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3VzZXJTbHVnfS9tZWAsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgICAgICAgIGlmIChqc29uPy51c2VyKSB7XG4gICAgICAgICAgICBzZXRVc2VyKGpzb24udXNlcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChqc29uPy50b2tlbikge1xuICAgICAgICAgICAgc2V0VG9rZW4oanNvbi50b2tlbik7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdXRvTG9naW4gJiYgYXV0b0xvZ2luLnByZWZpbGxPbmx5ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBhdXRvIGxvZy1pbiB3aXRoIHRoZSBwcm92aWRlZCBhdXRvTG9naW4gY3JlZGVudGlhbHMuIFRoaXMgaXMgdXNlZCBpbiBkZXYgbW9kZVxuICAgICAgICAgICAgLy8gc28geW91IGRvbid0IGhhdmUgdG8gbG9nIGluIG92ZXIgYW5kIG92ZXIgYWdhaW5cbiAgICAgICAgICAgIGNvbnN0IGF1dG9Mb2dpblJlc3VsdCA9IGF3YWl0IHJlcXVlc3RzLnBvc3QoYCR7c2VydmVyVVJMfSR7YXBpfS8ke3VzZXJTbHVnfS9sb2dpbmAsIHtcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiBhdXRvTG9naW4uZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGF1dG9Mb2dpbi5wYXNzd29yZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYXV0b0xvZ2luUmVzdWx0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGF1dG9Mb2dpbkpzb24gPSBhd2FpdCBhdXRvTG9naW5SZXN1bHQuanNvbigpO1xuICAgICAgICAgICAgICBzZXRVc2VyKGF1dG9Mb2dpbkpzb24udXNlcik7XG4gICAgICAgICAgICAgIGlmIChhdXRvTG9naW5Kc29uPy50b2tlbikge1xuICAgICAgICAgICAgICAgIHNldFRva2VuKGF1dG9Mb2dpbkpzb24udG9rZW4pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0b2FzdC5lcnJvcihgRmV0Y2hpbmcgdXNlciBmYWlsZWQ6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaE1lKCk7XG4gIH0sIFtpMThuLCBzZXRUb2tlbiwgYXBpLCBzZXJ2ZXJVUkwsIHVzZXJTbHVnLCBhdXRvTG9naW5dKTtcblxuICAvLyBXaGVuIGxvY2F0aW9uIGNoYW5nZXMsIHJlZnJlc2ggY29va2llXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlkKSB7XG4gICAgICByZWZyZXNoQ29va2llKCk7XG4gICAgfVxuICB9LCBbZGVib3VuY2VkTG9jYXRpb25DaGFuZ2UsIHJlZnJlc2hDb29raWUsIGlkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMYXN0TG9jYXRpb25DaGFuZ2UoRGF0ZS5ub3coKSk7XG4gIH0sIFtwYXRobmFtZV0pO1xuXG4gIC8vIFdoZW4gdXNlciBjaGFuZ2VzLCBnZXQgbmV3IGFjY2Vzc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpZCkge1xuICAgICAgcmVmcmVzaFBlcm1pc3Npb25zKCk7XG4gICAgfVxuICB9LCBbaTE4biwgaWQsIGFwaSwgc2VydmVyVVJMLCByZWZyZXNoUGVybWlzc2lvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCByZW1pbmRlcjogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0VGltZW91dD47XG4gICAgY29uc3Qgbm93ID0gTWF0aC5yb3VuZCgobmV3IERhdGUoKSkuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgY29uc3QgcmVtYWluaW5nVGltZSA9IGV4cCBhcyBudW1iZXIgLSBub3c7XG5cbiAgICBpZiAocmVtYWluaW5nVGltZSA+IDApIHtcbiAgICAgIHJlbWluZGVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9wZW5Nb2RhbCgnc3RheS1sb2dnZWQtaW4nKTtcbiAgICAgIH0sIChNYXRoLm1pbigocmVtYWluaW5nVGltZSAtIDYwKSAqIDEwMDApLCBtYXhUaW1lb3V0VGltZSkpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocmVtaW5kZXIpIGNsZWFyVGltZW91dChyZW1pbmRlcik7XG4gICAgfTtcbiAgfSwgW2V4cCwgb3Blbk1vZGFsXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgZm9yY2VMb2dPdXQ6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuICAgIGNvbnN0IG5vdyA9IE1hdGgucm91bmQoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBleHAgYXMgbnVtYmVyIC0gbm93O1xuXG4gICAgaWYgKHJlbWFpbmluZ1RpbWUgPiAwKSB7XG4gICAgICBmb3JjZUxvZ091dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgICByZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlKCk7XG4gICAgICB9LCBNYXRoLm1pbihyZW1haW5pbmdUaW1lICogMTAwMCwgbWF4VGltZW91dFRpbWUpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGZvcmNlTG9nT3V0KSBjbGVhclRpbWVvdXQoZm9yY2VMb2dPdXQpO1xuICAgIH07XG4gIH0sIFtleHAsIGNsb3NlQWxsTW9kYWxzLCBpMThuLCByZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgdXNlcixcbiAgICAgIHNldFVzZXIsXG4gICAgICBsb2dPdXQsXG4gICAgICByZWZyZXNoQ29va2llLFxuICAgICAgcmVmcmVzaENvb2tpZUFzeW5jLFxuICAgICAgcmVmcmVzaFBlcm1pc3Npb25zLFxuICAgICAgcGVybWlzc2lvbnMsXG4gICAgICBzZXRUb2tlbixcbiAgICAgIHRva2VuOiB0b2tlbkluTWVtb3J5LFxuICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbnR5cGUgVXNlQXV0aDxUID0gVXNlcj4gPSAoKSA9PiBBdXRoQ29udGV4dDxUPjtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGg6IFVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiand0RGVjb2RlIiwidXNlSGlzdG9yeSIsInVzZUxvY2F0aW9uIiwiZmFjZWxlc3N1aSIsInVzZVRyYW5zbGF0aW9uIiwidG9hc3QiLCJ1c2VDb25maWciLCJyZXF1ZXN0cyIsInVzZURlYm91bmNlIiwiQ29udGV4dCIsIm1heFRpbWVvdXRUaW1lIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInRva2VuSW5NZW1vcnkiLCJzZXRUb2tlbkluTWVtb3J5IiwicGF0aG5hbWUiLCJwdXNoIiwiY29uZmlnIiwiYWRtaW4iLCJ1c2VyU2x1ZyIsImluYWN0aXZpdHlSb3V0ZSIsImxvZ291dEluYWN0aXZpdHlSb3V0ZSIsImF1dG9Mb2dpbiIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImV4cCIsInBlcm1pc3Npb25zIiwic2V0UGVybWlzc2lvbnMiLCJ1c2VNb2RhbCIsImkxOG4iLCJvcGVuTW9kYWwiLCJjbG9zZUFsbE1vZGFscyIsImxhc3RMb2NhdGlvbkNoYW5nZSIsInNldExhc3RMb2NhdGlvbkNoYW5nZSIsImRlYm91bmNlZExvY2F0aW9uQ2hhbmdlIiwiaWQiLCJyZWRpcmVjdFRvSW5hY3Rpdml0eVJvdXRlIiwid2luZG93IiwibG9jYXRpb24iLCJzdGFydHNXaXRoIiwicmVkaXJlY3RQYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJyZWZyZXNoQ29va2llIiwiZm9yY2VSZWZyZXNoIiwibm93IiwiTWF0aCIsInJvdW5kIiwiRGF0ZSIsImdldFRpbWUiLCJyZW1haW5pbmdUaW1lIiwic2V0VGltZW91dCIsInJlcXVlc3QiLCJqc29uIiwiZSIsInBvc3QiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiLCJyZWZyZXNoQ29va2llQXN5bmMiLCJza2lwU2V0VXNlciIsInNldFRva2VuIiwidG9rZW4iLCJkZWNvZGVkIiwibG9nT3V0IiwidW5kZWZpbmVkIiwicmVmcmVzaFBlcm1pc3Npb25zIiwiZ2V0IiwiRXJyb3IiLCJmZXRjaE1lIiwiYXV0b0xvZ2luUmVzdWx0IiwiYXV0b0xvZ2luSnNvbiIsInByZWZpbGxPbmx5IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsInBhc3N3b3JkIiwicmVtaW5kZXIiLCJtaW4iLCJjbGVhclRpbWVvdXQiLCJmb3JjZUxvZ091dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDM0YsT0FBT0MsZUFBZSxhQUFhO0FBQ25DLFNBQVNDLFVBQVUsRUFBRUMsV0FBVyxRQUFRLG1CQUFtQjtBQUMzRCxZQUFZQyxnQkFBZ0IscUJBQXFCO0FBQ2pELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsS0FBSyxRQUFRLGlCQUFpQjtBQUV2QyxTQUFTQyxTQUFTLFFBQVEsWUFBWTtBQUN0QyxTQUFTQyxRQUFRLFFBQVEsZUFBZTtBQUN4QyxPQUFPQyxpQkFBaUIsNkJBQTZCO0FBR3JELElBQU1DLHdCQUFVZCxjQUFjLENB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