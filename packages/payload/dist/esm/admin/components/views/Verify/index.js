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
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import Logo from "../../graphics/Logo";
import MinimalTemplate from "../../templates/Minimal";
import Button from "../../elements/Button";
import Meta from "../../utilities/Meta";
import Login from "../Login";
import "./index.scss";
var baseClass = "verify";
var Verify = function(param) {
    var collection = param.collection;
    var _verifyResult;
    var collectionSlug = collection.slug;
    var user = useAuth().user;
    var token = useParams().token;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, adminRoute = _useConfig_routes.admin, _useConfig_admin = _useConfig.admin, adminUser = _useConfig_admin.user;
    var _useTranslation = useTranslation("authentication"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var isAdminUser = collectionSlug === adminUser;
    var _useState = _sliced_to_array(useState(null), 2), verifyResult = _useState[0], setVerifyResult = _useState[1];
    useEffect(function() {
        function verifyToken() {
            return _verifyToken.apply(this, arguments);
        }
        function _verifyToken() {
            _verifyToken = _async_to_generator(function() {
                var result;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                fetch("".concat(serverURL, "/api/").concat(collectionSlug, "/verify/").concat(token), {
                                    method: "POST",
                                    credentials: "include",
                                    headers: {
                                        "Accept-Language": i18n.language
                                    }
                                })
                            ];
                        case 1:
                            result = _state.sent();
                            setVerifyResult(result);
                            return [
                                2
                            ];
                    }
                });
            });
            return _verifyToken.apply(this, arguments);
        }
        verifyToken();
    }, [
        setVerifyResult,
        collectionSlug,
        serverURL,
        token,
        i18n
    ]);
    if (user) {
        return /*#__PURE__*/ React.createElement(Login, null);
    }
    var getText = function() {
        var _verifyResult, _verifyResult1;
        if (((_verifyResult = verifyResult) === null || _verifyResult === void 0 ? void 0 : _verifyResult.status) === 200) return t("verifiedSuccessfully");
        if (((_verifyResult1 = verifyResult) === null || _verifyResult1 === void 0 ? void 0 : _verifyResult1.status) === 202) return t("alreadyActivated");
        return t("unableToVerify");
    };
    return /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: t("verify"),
        description: t("verifyUser"),
        keywords: t("verify")
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__brand")
    }, /*#__PURE__*/ React.createElement(Logo, null)), /*#__PURE__*/ React.createElement("h2", null, getText()), isAdminUser && ((_verifyResult = verifyResult) === null || _verifyResult === void 0 ? void 0 : _verifyResult.status) === 200 && /*#__PURE__*/ React.createElement(Button, {
        el: "link",
        buttonStyle: "secondary",
        to: "".concat(adminRoute, "/login")
    }, t("login")));
};
export default Verify;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcmlmeS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9ncmFwaGljcy9Mb2dvJztcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICd2ZXJpZnknO1xuXG5jb25zdCBWZXJpZnk6IFJlYWN0LkZDPHsgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9PiA9ICh7IGNvbGxlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB7IHNsdWc6IGNvbGxlY3Rpb25TbHVnIH0gPSBjb2xsZWN0aW9uO1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHRva2VuIH0gPSB1c2VQYXJhbXM8e3Rva2VuPzogc3RyaW5nfT4oKTtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhZG1pbjogYWRtaW5Sb3V0ZSB9LCBhZG1pbjogeyB1c2VyOiBhZG1pblVzZXIgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJyk7XG5cbiAgY29uc3QgaXNBZG1pblVzZXIgPSBjb2xsZWN0aW9uU2x1ZyA9PT0gYWRtaW5Vc2VyO1xuICBjb25zdCBbdmVyaWZ5UmVzdWx0LCBzZXRWZXJpZnlSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB2ZXJpZnlUb2tlbigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke3NlcnZlclVSTH0vYXBpLyR7Y29sbGVjdGlvblNsdWd9L3ZlcmlmeS8ke3Rva2VufWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0VmVyaWZ5UmVzdWx0KHJlc3VsdCk7XG4gICAgfVxuICAgIHZlcmlmeVRva2VuKCk7XG4gIH0sIFtzZXRWZXJpZnlSZXN1bHQsIGNvbGxlY3Rpb25TbHVnLCBzZXJ2ZXJVUkwsIHRva2VuLCBpMThuXSk7XG5cbiAgaWYgKHVzZXIpIHtcbiAgICByZXR1cm4gPExvZ2luIC8+O1xuICB9XG5cbiAgY29uc3QgZ2V0VGV4dCA9ICgpID0+IHtcbiAgICBpZiAodmVyaWZ5UmVzdWx0Py5zdGF0dXMgPT09IDIwMCkgcmV0dXJuIHQoJ3ZlcmlmaWVkU3VjY2Vzc2Z1bGx5Jyk7XG4gICAgaWYgKHZlcmlmeVJlc3VsdD8uc3RhdHVzID09PSAyMDIpIHJldHVybiB0KCdhbHJlYWR5QWN0aXZhdGVkJyk7XG4gICAgcmV0dXJuIHQoJ3VuYWJsZVRvVmVyaWZ5Jyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPXt0KCd2ZXJpZnknKX1cbiAgICAgICAgZGVzY3JpcHRpb249e3QoJ3ZlcmlmeVVzZXInKX1cbiAgICAgICAga2V5d29yZHM9e3QoJ3ZlcmlmeScpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19icmFuZGB9PlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDI+XG4gICAgICAgIHtnZXRUZXh0KCl9XG4gICAgICA8L2gyPlxuICAgICAge2lzQWRtaW5Vc2VyICYmIHZlcmlmeVJlc3VsdD8uc3RhdHVzID09PSAyMDAgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdG89e2Ake2FkbWluUm91dGV9L2xvZ2luYH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0KCdsb2dpbicpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVBhcmFtcyIsInVzZUNvbmZpZyIsInVzZUF1dGgiLCJMb2dvIiwiTWluaW1hbFRlbXBsYXRlIiwiQnV0dG9uIiwiTWV0YSIsIkxvZ2luIiwiYmFzZUNsYXNzIiwiVmVyaWZ5IiwiY29sbGVjdGlvbiIsInZlcmlmeVJlc3VsdCIsInNsdWciLCJjb2xsZWN0aW9uU2x1ZyIsInVzZXIiLCJ0b2tlbiIsInNlcnZlclVSTCIsInJvdXRlcyIsImFkbWluIiwiYWRtaW5Sb3V0ZSIsImFkbWluVXNlciIsInQiLCJpMThuIiwiaXNBZG1pblVzZXIiLCJzZXRWZXJpZnlSZXN1bHQiLCJ2ZXJpZnlUb2tlbiIsInJlc3VsdCIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJnZXRUZXh0Iiwic3RhdHVzIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiZGl2IiwiaDIiLCJlbCIsImJ1dHRvblN0eWxlIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNuRCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSxtQkFBbUI7QUFDN0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxTQUFTQyxPQUFPLFFBQVEsdUJBQXVCO0FBQy9DLE9BQU9DLFVBQVUsc0JBQXNCO0FBQ3ZDLE9BQU9DLHFCQUFxQiwwQkFBMEI7QUFDdEQsT0FBT0MsWUFBWSx3QkFBd0I7QUFDM0MsT0FBT0MsVUFBVSx1QkFBdUI7QUFFeEMsT0FBT0MsV0FBVyxXQUFXO0FBRTdCLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLFNBQThEO1FBQUdDLG1CQUFBQTtRQWdEakRDO0lBL0NwQixJQUFRQyxBQUFNQyxpQkFBbUJILFdBQXpCRTtJQUVSLElBQU0sQUFBRUUsT0FBU1osVUFBVFk7SUFDUixJQUFNLEFBQUVDLFFBQVVmLFlBQVZlO0lBQ1IsSUFBaUZkLGFBQUFBLGFBQXpFZSxZQUF5RWYsV0FBekVlLCtCQUF5RWYsV0FBOURnQixRQUFVQyxBQUFPQywrQkFBUEQsMEJBQW9EakIsV0FBL0JpQixPQUFTSixBQUFNTSw2QkFBTk47SUFDM0QsSUFBb0JmLGtCQUFBQSxlQUFlLG1CQUEzQnNCLElBQVl0QixnQkFBWnNCLEdBQUdDLE9BQVN2QixnQkFBVHVCO0lBRVgsSUFBTUMsY0FBY1YsbUJBQW1CTztJQUN2QyxJQUF3Q3RCLDZCQUFBQSxTQUFTLFdBQTFDYSxlQUFpQ2IsY0FBbkIwQixrQkFBbUIxQjtJQUV4Q0QsVUFBVTtpQkFDTzRCO21CQUFBQTs7aUJBQUFBO1lBQUFBLGVBQWYsb0JBQUE7b0JBQ1FDOzs7OzRCQUFTOztnQ0FBTUMsTUFBTSxBQUFDLEdBQW1CZCxPQUFqQkcsV0FBVSxTQUFnQ0QsT0FBekJGLGdCQUFlLFlBQWdCLE9BQU5FLFFBQVM7b0NBQy9FYSxRQUFRO29DQUNSQyxhQUFhO29DQUNiQyxTQUFTO3dDQUNQLG1CQUFtQlIsS0FBS1MsUUFBUTtvQ0FDbEM7Z0NBQ0Y7Ozs0QkFOTUwsU0FBUzs0QkFPZkYsZ0JBQWdCRTs7Ozs7O1lBQ2xCO21CQVRlRDs7UUFVZkE7SUFDRixHQUFHO1FBQUNEO1FBQWlCWDtRQUFnQkc7UUFBV0Q7UUFBT087S0FBSztJQUU1RCxJQUFJUixNQUFNO1FBQ1IscUJBQU8sb0JBQUNQO0lBQ1Y7SUFFQSxJQUFNeUIsVUFBVTtZQUNWckIsZUFDQUE7UUFESixJQUFJQSxFQUFBQSxnQkFBQUEsMEJBQUFBLG9DQUFBQSxjQUFjc0IsTUFBTSxNQUFLLEtBQUssT0FBT1osRUFBRTtRQUMzQyxJQUFJVixFQUFBQSxpQkFBQUEsMEJBQUFBLHFDQUFBQSxlQUFjc0IsTUFBTSxNQUFLLEtBQUssT0FBT1osRUFBRTtRQUMzQyxPQUFPQSxFQUFFO0lBQ1g7SUFFQSxxQkFDRSxvQkFBQ2pCO1FBQWdCOEIsV0FBVzFCO3FCQUMxQixvQkFBQ0Y7UUFDQzZCLE9BQU9kLEVBQUU7UUFDVGUsYUFBYWYsRUFBRTtRQUNmZ0IsVUFBVWhCLEVBQUU7c0JBRWQsb0JBQUNpQjtRQUFJSixXQUFXLEFBQUMsR0FBWSxPQUFWMUIsV0FBVTtxQkFDM0Isb0JBQUNMLDRCQUVILG9CQUFDb0MsWUFDRVAsWUFFRlQsZUFBZVosRUFBQUEsZ0JBQUFBLDBCQUFBQSxvQ0FBQUEsY0FBY3NCLE1BQU0sTUFBSyxxQkFDdkMsb0JBQUM1QjtRQUNDbUMsSUFBRztRQUNIQyxhQUFZO1FBQ1pDLElBQUksQUFBQyxHQUFhLE9BQVh2QixZQUFXO09BRWpCRSxFQUFFO0FBS2I7QUFDQSxlQUFlWixPQUFPIn0=