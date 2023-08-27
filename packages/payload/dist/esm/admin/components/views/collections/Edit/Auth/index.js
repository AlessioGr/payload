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
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../../utilities/Config";
import Email from "../../../../forms/field-types/Email";
import Password from "../../../../forms/field-types/Password";
import Checkbox from "../../../../forms/field-types/Checkbox";
import Button from "../../../../elements/Button";
import ConfirmPassword from "../../../../forms/field-types/ConfirmPassword";
import { useFormModified, useFormFields } from "../../../../forms/Form/context";
import APIKey from "./APIKey";
import "./index.scss";
var baseClass = "auth-fields";
var Auth = function(props) {
    var _enableAPIKey;
    var useAPIKey = props.useAPIKey, requirePassword = props.requirePassword, verify = props.verify, slug = props.collection.slug, collection = props.collection, email = props.email, operation = props.operation, readOnly = props.readOnly;
    var _useState = _sliced_to_array(useState(requirePassword), 2), changingPassword = _useState[0], setChangingPassword = _useState[1];
    var enableAPIKey = useFormFields(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        return fields.enableAPIKey;
    });
    var dispatchFields = useFormFields(function(reducer) {
        return reducer[1];
    });
    var modified = useFormModified();
    var _useTranslation = useTranslation("authentication"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var handleChangePassword = useCallback(function() {
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
    var unlock = useCallback(/*#__PURE__*/ _async_to_generator(function() {
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
                        toast.success(t("successfullyUnlocked"), {
                            autoClose: 3000
                        });
                    } else {
                        toast.error(t("failedToUnlock"));
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
    useEffect(function() {
        if (!modified) {
            setChangingPassword(false);
        }
    }, [
        modified
    ]);
    if (collection.auth.disableLocalStrategy && !collection.auth.useAPIKey) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, !collection.auth.disableLocalStrategy && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Email, {
        required: true,
        name: "email",
        label: t("general:email"),
        admin: {
            autoComplete: "email",
            readOnly: readOnly
        }
    }), (changingPassword || requirePassword) && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__changing-password")
    }, /*#__PURE__*/ React.createElement(Password, {
        autoComplete: "off",
        required: true,
        name: "password",
        label: t("newPassword"),
        disabled: readOnly
    }), /*#__PURE__*/ React.createElement(ConfirmPassword, {
        disabled: readOnly
    }), !requirePassword && /*#__PURE__*/ React.createElement(Button, {
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            return handleChangePassword(false);
        },
        disabled: readOnly
    }, t("general:cancel"))), !changingPassword && !requirePassword && /*#__PURE__*/ React.createElement(Button, {
        id: "change-password",
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            return handleChangePassword(true);
        },
        disabled: readOnly
    }, t("changePassword")), operation === "update" && /*#__PURE__*/ React.createElement(Button, {
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            return unlock();
        },
        disabled: readOnly
    }, t("forceUnlock"))), useAPIKey && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__api-key")
    }, /*#__PURE__*/ React.createElement(Checkbox, {
        label: t("enableAPIKey"),
        name: "enableAPIKey",
        admin: {
            readOnly: readOnly
        }
    }), ((_enableAPIKey = enableAPIKey) === null || _enableAPIKey === void 0 ? void 0 : _enableAPIKey.value) && /*#__PURE__*/ React.createElement(APIKey, {
        readOnly: readOnly
    })), verify && /*#__PURE__*/ React.createElement(Checkbox, {
        label: t("verified"),
        name: "_verified",
        admin: {
            readOnly: readOnly
        }
    }));
};
export default Auth;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvQXV0aC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgRW1haWwgZnJvbSAnLi4vLi4vLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMvRW1haWwnO1xuaW1wb3J0IFBhc3N3b3JkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1Bhc3N3b3JkJztcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9DaGVja2JveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgQ29uZmlybVBhc3N3b3JkIGZyb20gJy4uLy4uLy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvbmZpcm1QYXNzd29yZCc7XG5pbXBvcnQgeyB1c2VGb3JtTW9kaWZpZWQsIHVzZUZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IEFQSUtleSBmcm9tICcuL0FQSUtleSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2F1dGgtZmllbGRzJztcblxuY29uc3QgQXV0aDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdXNlQVBJS2V5LCByZXF1aXJlUGFzc3dvcmQsIHZlcmlmeSwgY29sbGVjdGlvbjogeyBzbHVnIH0sIGNvbGxlY3Rpb24sIGVtYWlsLCBvcGVyYXRpb24sIHJlYWRPbmx5IH0gPSBwcm9wcztcbiAgY29uc3QgW2NoYW5naW5nUGFzc3dvcmQsIHNldENoYW5naW5nUGFzc3dvcmRdID0gdXNlU3RhdGUocmVxdWlyZVBhc3N3b3JkKTtcbiAgY29uc3QgZW5hYmxlQVBJS2V5ID0gdXNlRm9ybUZpZWxkcygoW2ZpZWxkc10pID0+IGZpZWxkcy5lbmFibGVBUElLZXkpO1xuICBjb25zdCBkaXNwYXRjaEZpZWxkcyA9IHVzZUZvcm1GaWVsZHMoKHJlZHVjZXIpID0+IHJlZHVjZXJbMV0pO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuXG4gIGNvbnN0IHtcbiAgICBzZXJ2ZXJVUkwsXG4gICAgcm91dGVzOiB7XG4gICAgICBhcGksXG4gICAgfSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soYXN5bmMgKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVNT1ZFJywgcGF0aDogJ3Bhc3N3b3JkJyB9KTtcbiAgICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFTU9WRScsIHBhdGg6ICdjb25maXJtLXBhc3N3b3JkJyB9KTtcbiAgICB9XG5cbiAgICBzZXRDaGFuZ2luZ1Bhc3N3b3JkKHN0YXRlKTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzXSk7XG5cbiAgY29uc3QgdW5sb2NrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS91bmxvY2tgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSksXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgdG9hc3Quc3VjY2Vzcyh0KCdzdWNjZXNzZnVsbHlVbmxvY2tlZCcpLCB7IGF1dG9DbG9zZTogMzAwMCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3QuZXJyb3IodCgnZmFpbGVkVG9VbmxvY2snKSk7XG4gICAgfVxuICB9LCBbaTE4biwgc2VydmVyVVJMLCBhcGksIHNsdWcsIGVtYWlsLCB0XSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIW1vZGlmaWVkKSB7XG4gICAgICBzZXRDaGFuZ2luZ1Bhc3N3b3JkKGZhbHNlKTtcbiAgICB9XG4gIH0sIFttb2RpZmllZF0pO1xuXG4gIGlmIChjb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kgJiYgIWNvbGxlY3Rpb24uYXV0aC51c2VBUElLZXkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICB7IWNvbGxlY3Rpb24uYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSAmJiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8RW1haWxcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6ZW1haWwnKX1cbiAgICAgICAgICAgIGFkbWluPXt7IGF1dG9Db21wbGV0ZTogJ2VtYWlsJywgcmVhZE9ubHkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsoY2hhbmdpbmdQYXNzd29yZCB8fCByZXF1aXJlUGFzc3dvcmQpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jaGFuZ2luZy1wYXNzd29yZGB9PlxuICAgICAgICAgICAgICA8UGFzc3dvcmRcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnbmV3UGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb25maXJtUGFzc3dvcmQgZGlzYWJsZWQ9e3JlYWRPbmx5fSAvPlxuICAgICAgICAgICAgICB7IXJlcXVpcmVQYXNzd29yZCAmJiAoXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZVBhc3N3b3JkKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dCgnZ2VuZXJhbDpjYW5jZWwnKX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyghY2hhbmdpbmdQYXNzd29yZCAmJiAhcmVxdWlyZVBhc3N3b3JkKSAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGlkPVwiY2hhbmdlLXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VQYXNzd29yZCh0cnVlKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnY2hhbmdlUGFzc3dvcmQnKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAge29wZXJhdGlvbiA9PT0gJ3VwZGF0ZScgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVubG9jaygpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0KCdmb3JjZVVubG9jaycpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICl9XG4gICAgICB7dXNlQVBJS2V5ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FwaS1rZXlgfT5cbiAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgIGxhYmVsPXt0KCdlbmFibGVBUElLZXknKX1cbiAgICAgICAgICAgIG5hbWU9XCJlbmFibGVBUElLZXlcIlxuICAgICAgICAgICAgYWRtaW49e3sgcmVhZE9ubHkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtlbmFibGVBUElLZXk/LnZhbHVlICYmIChcbiAgICAgICAgICAgIDxBUElLZXkgcmVhZE9ubHk9e3JlYWRPbmx5fSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHt2ZXJpZnkgJiYgKFxuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBsYWJlbD17dCgndmVyaWZpZWQnKX1cbiAgICAgICAgICBuYW1lPVwiX3ZlcmlmaWVkXCJcbiAgICAgICAgICBhZG1pbj17eyByZWFkT25seSB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidG9hc3QiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIkVtYWlsIiwiUGFzc3dvcmQiLCJDaGVja2JveCIsIkJ1dHRvbiIsIkNvbmZpcm1QYXNzd29yZCIsInVzZUZvcm1Nb2RpZmllZCIsInVzZUZvcm1GaWVsZHMiLCJBUElLZXkiLCJiYXNlQ2xhc3MiLCJBdXRoIiwicHJvcHMiLCJlbmFibGVBUElLZXkiLCJ1c2VBUElLZXkiLCJyZXF1aXJlUGFzc3dvcmQiLCJ2ZXJpZnkiLCJjb2xsZWN0aW9uIiwic2x1ZyIsImVtYWlsIiwib3BlcmF0aW9uIiwicmVhZE9ubHkiLCJjaGFuZ2luZ1Bhc3N3b3JkIiwic2V0Q2hhbmdpbmdQYXNzd29yZCIsImZpZWxkcyIsImRpc3BhdGNoRmllbGRzIiwicmVkdWNlciIsIm1vZGlmaWVkIiwidCIsImkxOG4iLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsInN0YXRlIiwidHlwZSIsInBhdGgiLCJ1bmxvY2siLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ldGhvZCIsInN0YXR1cyIsInN1Y2Nlc3MiLCJhdXRvQ2xvc2UiLCJlcnJvciIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsImRpdiIsImNsYXNzTmFtZSIsIkZyYWdtZW50IiwicmVxdWlyZWQiLCJuYW1lIiwibGFiZWwiLCJhZG1pbiIsImF1dG9Db21wbGV0ZSIsImRpc2FibGVkIiwic2l6ZSIsImJ1dHRvblN0eWxlIiwib25DbGljayIsImlkIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsUUFBUSxRQUFRO0FBQ2hFLFNBQVNDLEtBQUssUUFBUSxpQkFBaUI7QUFDdkMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEsK0JBQStCO0FBQ3pELE9BQU9DLFdBQVcsc0NBQXNDO0FBQ3hELE9BQU9DLGNBQWMseUNBQXlDO0FBQzlELE9BQU9DLGNBQWMseUNBQXlDO0FBQzlELE9BQU9DLFlBQVksOEJBQThCO0FBQ2pELE9BQU9DLHFCQUFxQixnREFBZ0Q7QUFDNUUsU0FBU0MsZUFBZSxFQUFFQyxhQUFhLFFBQVEsaUNBQWlDO0FBR2hGLE9BQU9DLFlBQVksV0FBVztBQUU5QixPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxPQUF3QixTQUFDQztRQXFIcEJDO0lBcEhULElBQVFDLFlBQXFHRixNQUFyR0UsV0FBV0Msa0JBQTBGSCxNQUExRkcsaUJBQWlCQyxTQUF5RUosTUFBekVJLFFBQVFDLEFB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