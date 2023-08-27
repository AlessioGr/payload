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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacttoastify = require("react-toastify");
var _reacti18next = require("react-i18next");
var _Config = require("../../../../utilities/Config");
var _Email = /*#__PURE__*/ _interop_require_default(require("../../../../forms/field-types/Email"));
var _Password = /*#__PURE__*/ _interop_require_default(require("../../../../forms/field-types/Password"));
var _Checkbox = /*#__PURE__*/ _interop_require_default(require("../../../../forms/field-types/Checkbox"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Button"));
var _ConfirmPassword = /*#__PURE__*/ _interop_require_default(require("../../../../forms/field-types/ConfirmPassword"));
var _context = require("../../../../forms/Form/context");
var _APIKey = /*#__PURE__*/ _interop_require_default(require("./APIKey"));
require("./index.scss");
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
var baseClass = "auth-fields";
var Auth = function(props) {
    var _enableAPIKey;
    var useAPIKey = props.useAPIKey, requirePassword = props.requirePassword, verify = props.verify, slug = props.collection.slug, collection = props.collection, email = props.email, operation = props.operation, readOnly = props.readOnly;
    var _useState = _sliced_to_array((0, _react.useState)(requirePassword), 2), changingPassword = _useState[0], setChangingPassword = _useState[1];
    var enableAPIKey = (0, _context.useFormFields)(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        return fields.enableAPIKey;
    });
    var dispatchFields = (0, _context.useFormFields)(function(reducer) {
        return reducer[1];
    });
    var modified = (0, _context.useFormModified)();
    var _useTranslation = (0, _reacti18next.useTranslation)("authentication"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var handleChangePassword = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(state) {
            return _ts_generator(this, function(_state) {
                if (!state) {
                    dispatchFields({
                        type: "REMOVE",
                        path: "password"
                    });
                    dispatchFields({
                        type: "REMOVE",
                        path: "confirm-password"
                    });
                }
                setChangingPassword(state);
                return [
                    2
                ];
            });
        });
        return function(state) {
            return _ref.apply(this, arguments);
        };
    }(), [
        dispatchFields
    ]);
    var unlock = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var url, response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    url = "".concat(serverURL).concat(api, "/").concat(slug, "/unlock");
                    return [
                        4,
                        fetch(url, {
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept-Language": i18n.language
                            },
                            body: JSON.stringify({
                                email: email
                            }),
                            method: "post"
                        })
                    ];
                case 1:
                    response = _state.sent();
                    if (response.status === 200) {
                        _reacttoastify.toast.success(t("successfullyUnlocked"), {
                            autoClose: 3000
                        });
                    } else {
                        _reacttoastify.toast.error(t("failedToUnlock"));
                    }
                    return [
                        2
                    ];
            }
        });
    }), [
        i18n,
        serverURL,
        api,
        slug,
        email,
        t
    ]);
    (0, _react.useEffect)(function() {
        if (!modified) {
            setChangingPassword(false);
        }
    }, [
        modified
    ]);
    if (collection.auth.disableLocalStrategy && !collection.auth.useAPIKey) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, !collection.auth.disableLocalStrategy && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Email.default, {
        required: true,
        name: "email",
        label: t("general:email"),
        admin: {
            autoComplete: "email",
            readOnly: readOnly
        }
    }), (changingPassword || requirePassword) && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__changing-password")
    }, /*#__PURE__*/ _react.default.createElement(_Password.default, {
        autoComplete: "off",
        required: true,
        name: "password",
        label: t("newPassword"),
        disabled: readOnly
    }), /*#__PURE__*/ _react.default.createElement(_ConfirmPassword.default, {
        disabled: readOnly
    }), !requirePassword && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            return handleChangePassword(false);
        },
        disabled: readOnly
    }, t("general:cancel"))), !changingPassword && !requirePassword && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        id: "change-password",
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            return handleChangePassword(true);
        },
        disabled: readOnly
    }, t("changePassword")), operation === "update" && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            return unlock();
        },
        disabled: readOnly
    }, t("forceUnlock"))), useAPIKey && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__api-key")
    }, /*#__PURE__*/ _react.default.createElement(_Checkbox.default, {
        label: t("enableAPIKey"),
        name: "enableAPIKey",
        admin: {
            readOnly: readOnly
        }
    }), ((_enableAPIKey = enableAPIKey) === null || _enableAPIKey === void 0 ? void 0 : _enableAPIKey.value) && /*#__PURE__*/ _react.default.createElement(_APIKey.default, {
        readOnly: readOnly
    })), verify && /*#__PURE__*/ _react.default.createElement(_Checkbox.default, {
        label: t("verified"),
        name: "_verified",
        admin: {
            readOnly: readOnly
        }
    }));
};
var _default = Auth;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvQXV0aC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgRW1haWwgZnJvbSAnLi4vLi4vLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvRW1haWwnO1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1Bhc3N3b3JkJztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9DaGVja2JveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgQ29uZmlybVBhc3N3b3JkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvbmZpcm1QYXNzd29yZCc7XG5pbXBvcnQgeyB1c2VGb3JtTW9kaWZpZWQsIHVzZUZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IEFQSUtleSBmcm9tICcuL0FQSUtleSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2F1dGgtZmllbGRzJztcblxuY29uc3QgQXV0aDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXNlQVBJS2V5LCByZXF1aXJlUGFzc3dvcmQsIHZlcmlmeSwgY29sbGVjdGlvbjogeyBzbHVnIH0sIGNvbGxlY3Rpb24sIGVtYWlsLCBvcGVyYXRpb24sIHJlYWRPbmx5IH0gPSBwcm9wcztcbiAgY29uc3QgW2NoYW5naW5nUGFzc3dvcmQsIHNldENoYW5naW5nUGFzc3dvcmRdID0gdXNlU3RhdGUocmVxdWlyZVBhc3N3b3JkKTtcbiAgY29uc3QgZW5hYmxlQVBJS2V5ID0gdXNlRm9ybUZpZWxkcygoW2ZpZWxkc10pID0+IGZpZWxkcy5lbmFibGVBUElLZXkpO1xuICBjb25zdCBkaXNwYXRjaEZpZWxkcyA9IHVzZUZvcm1GaWVsZHMoKHJlZHVjZXIpID0+IHJlZHVjZXJbMV0pO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuXG4gIGNvbnN0IHtcbiAgICBzZXJ2ZXJVUkwsXG4gICAgcm91dGVzOiB7XG4gICAgICBhcGksXG4gICAgfSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soYXN5bmMgKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVNT1ZFJywgcGF0aDogJ3Bhc3N3b3JkJyB9KTtcbiAgICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFTU9WRScsIHBhdGg6ICdjb25maXJtLXBhc3N3b3JkJyB9KTtcbiAgICB9XG5cbiAgICBzZXRDaGFuZ2luZ1Bhc3N3b3JkKHN0YXRlKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzXSk7XG5cbiAgY29uc3QgdW5sb2NrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS91bmxvY2tgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSksXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgdG9hc3Quc3VjY2Vzcyh0KCdzdWNjZXNzZnVsbHlVbmxvY2tlZCcpLCB7IGF1dG9DbG9zZTogMzAwMCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IodCgnZmFpbGVkVG9VbmxvY2snKSk7XG4gICAgfVxuICB9LCBbaTE4biwgc2VydmVyVVJMLCBhcGksIHNsdWcsIGVtYWlsLCB0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1vZGlmaWVkKSB7XG4gICAgICBzZXRDaGFuZ2luZ1Bhc3N3b3JkKGZhbHNlKTtcbiAgICB9XG4gIH0sIFttb2RpZmllZF0pO1xuXG4gIGlmIChjb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kgJiYgIWNvbGxlY3Rpb24uYXV0aC51c2VBUElLZXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICB7IWNvbGxlY3Rpb24uYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8RW1haWxcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6ZW1haWwnKX1cbiAgICAgICAgICAgIGFkbWluPXt7IGF1dG9Db21wbGV0ZTogJ2VtYWlsJywgcmVhZE9ubHkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsoY2hhbmdpbmdQYXNzd29yZCB8fCByZXF1aXJlUGFzc3dvcmQpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jaGFuZ2luZy1wYXNzd29yZGB9PlxuICAgICAgICAgICAgICA8UGFzc3dvcmRcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnbmV3UGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb25maXJtUGFzc3dvcmQgZGlzYWJsZWQ9e3JlYWRPbmx5fSAvPlxuICAgICAgICAgICAgICB7IXJlcXVpcmVQYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZVBhc3N3b3JkKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dCgnZ2VuZXJhbDpjYW5jZWwnKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyghY2hhbmdpbmdQYXNzd29yZCAmJiAhcmVxdWlyZVBhc3N3b3JkKSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGlkPVwiY2hhbmdlLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VQYXNzd29yZCh0cnVlKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnY2hhbmdlUGFzc3dvcmQnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge29wZXJhdGlvbiA9PT0gJ3VwZGF0ZScgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVubG9jaygpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0KCdmb3JjZVVubG9jaycpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgICB7dXNlQVBJS2V5ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FwaS1rZXlgfT5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGxhYmVsPXt0KCdlbmFibGVBUElLZXknKX1cbiAgICAgICAgICAgIG5hbWU9XCJlbmFibGVBUElLZXlcIlxuICAgICAgICAgICAgYWRtaW49e3sgcmVhZE9ubHkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtlbmFibGVBUElLZXk/LnZhbHVlICYmIChcbiAgICAgICAgICAgIDxBUElLZXkgcmVhZE9ubHk9e3JlYWRPbmx5fSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHt2ZXJpZnkgJiYgKFxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBsYWJlbD17dCgndmVyaWZpZWQnKX1cbiAgICAgICAgICBuYW1lPVwiX3ZlcmlmaWVkXCJcbiAgICAgICAgICBhZG1pbj17eyByZWFkT25seSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGg7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiQXV0aCIsInByb3BzIiwiZW5hYmxlQVBJS2V5IiwidXNlQVBJS2V5IiwicmVxdWlyZVBhc3N3b3JkIiwidmVyaWZ5IiwiY29sbGVjdGlvbiIsInNsdWciLCJlbWFpbCIsIm9wZXJhdGlvbiIsInJlYWRPbmx5IiwidXNlU3RhdGUiLCJjaGFuZ2luZ1Bhc3N3b3JkIiwic2V0Q2hhbmdpbmdQYXNzd29yZCIsInVzZUZvcm1GaWVsZHMiLCJmaWVsZHMiLCJkaXNwYXRjaEZpZWxkcyIsInJlZHVjZXIiLCJtb2RpZmllZCIsInVzZUZvcm1Nb2RpZmllZCIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VDb25maWciLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsInVzZUNhbGxiYWNrIiwic3RhdGUiLCJ0eXBlIiwicGF0aCIsInVubG9jayIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJsYW5ndWFnZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kIiwic3RhdHVzIiwidG9hc3QiLCJzdWNjZXNzIiwiYXV0b0Nsb3NlIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJhdXRoIiwiZGlzYWJsZUxvY2FsU3RyYXRlZ3kiLCJkaXYiLCJjbGFzc05hbWUiLCJSZWFjdCIsIkZyYWdtZW50IiwiRW1haWwiLCJyZXF1aXJlZCIsIm5hbWUiLCJsYWJlbCIsImFkbWluIiwiYXV0b0NvbXBsZXRlIiwiUGFzc3dvcmQiLCJkaXNhYmxlZCIsIkNvbmZpcm1QYXNzd29yZCIsIkJ1dHRvbiIsInNpemUiLCJidXR0b25TdHlsZSIsIm9uQ2xpY2siLCJpZCIsIkNoZWNrYm94IiwidmFsdWUiLCJBUElLZXkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBdUpBOzs7ZUFBQTs7OzZEQXZKd0Q7NkJBQ2xDOzRCQUNTO3NCQUNMOzREQUNSOytEQUNHOytEQUNBOzZEQUNGO3NFQUNTO3VCQUNtQjs2REFHNUI7UUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLE9BQXdCLFNBQUNDO1FBcUhwQkM7SUFwSFQsSUFBUUMsWUFBcUdGLE1BQXJHRSxXQUFXQyxrQkFBMEZILE1BQTFGRyxpQkFBaUJDLFNBQXlFSixNQUF6RUksUUFBUUMsQUFBY0MsT0FBbUROLE1BQWpFSyxXQUFjQyxNQUFRRCxhQUEyQ0wsTUFBM0NLLFlBQVlFLFFBQStCUCxNQUEvQk8sT0FBT0MsWUFBd0JSLE1BQXhCUSxXQUFXQyxXQUFhVCxNQUFiUztJQUNoRyxJQUFnREMsNkJBQUFBLElBQUFBLGVBQVEsRUFBQ1Asc0JBQWxEUSxtQkFBeUNELGNBQXZCRSxzQkFBdUJGO0lBQ2hELElBQU1ULGVBQWVZLElBQUFBLHNCQUFhLEVB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