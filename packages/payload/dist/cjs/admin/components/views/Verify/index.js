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
var _reacti18next = require("react-i18next");
var _reactrouterdom = require("react-router-dom");
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _Logo = /*#__PURE__*/ _interop_require_default(require("../../graphics/Logo"));
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
var _Login = /*#__PURE__*/ _interop_require_default(require("../Login"));
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
var baseClass = "verify";
var Verify = function(param) {
    var collection = param.collection;
    var _verifyResult;
    var collectionSlug = collection.slug;
    var user = (0, _Auth.useAuth)().user;
    var token = (0, _reactrouterdom.useParams)().token;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, adminRoute = _useConfig_routes.admin, _useConfig_admin = _useConfig.admin, adminUser = _useConfig_admin.user;
    var _useTranslation = (0, _reacti18next.useTranslation)("authentication"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var isAdminUser = collectionSlug === adminUser;
    var _useState = _sliced_to_array((0, _react.useState)(null), 2), verifyResult = _useState[0], setVerifyResult = _useState[1];
    (0, _react.useEffect)(function() {
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
        return /*#__PURE__*/ _react.default.createElement(_Login.default, null);
    }
    var getText = function() {
        var _verifyResult, _verifyResult1;
        if (((_verifyResult = verifyResult) === null || _verifyResult === void 0 ? void 0 : _verifyResult.status) === 200) return t("verifiedSuccessfully");
        if (((_verifyResult1 = verifyResult) === null || _verifyResult1 === void 0 ? void 0 : _verifyResult1.status) === 202) return t("alreadyActivated");
        return t("unableToVerify");
    };
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: t("verify"),
        description: t("verifyUser"),
        keywords: t("verify")
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__brand")
    }, /*#__PURE__*/ _react.default.createElement(_Logo.default, null)), /*#__PURE__*/ _react.default.createElement("h2", null, getText()), isAdminUser && ((_verifyResult = verifyResult) === null || _verifyResult === void 0 ? void 0 : _verifyResult.status) === 200 && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        el: "link",
        buttonStyle: "secondary",
        to: "".concat(adminRoute, "/login")
    }, t("login")));
};
var _default = Verify;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcmlmeS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi8uLi9ncmFwaGljcy9Mb2dvJztcbmltcG9ydCBNaW5pbWFsVGVtcGxhdGUgZnJvbSAnLi4vLi4vdGVtcGxhdGVzL01pbmltYWwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICd2ZXJpZnknO1xuXG5jb25zdCBWZXJpZnk6IFJlYWN0LkZDPHsgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9PiA9ICh7IGNvbGxlY3Rpb24gfSkgPT4ge1xuICBjb25zdCB7IHNsdWc6IGNvbGxlY3Rpb25TbHVnIH0gPSBjb2xsZWN0aW9uO1xuXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHRva2VuIH0gPSB1c2VQYXJhbXM8e3Rva2VuPzogc3RyaW5nfT4oKTtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhZG1pbjogYWRtaW5Sb3V0ZSB9LCBhZG1pbjogeyB1c2VyOiBhZG1pblVzZXIgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJyk7XG5cbiAgY29uc3QgaXNBZG1pblVzZXIgPSBjb2xsZWN0aW9uU2x1ZyA9PT0gYWRtaW5Vc2VyO1xuICBjb25zdCBbdmVyaWZ5UmVzdWx0LCBzZXRWZXJpZnlSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiB2ZXJpZnlUb2tlbigpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke3NlcnZlclVSTH0vYXBpLyR7Y29sbGVjdGlvblNsdWd9L3ZlcmlmeS8ke3Rva2VufWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0VmVyaWZ5UmVzdWx0KHJlc3VsdCk7XG4gICAgfVxuICAgIHZlcmlmeVRva2VuKCk7XG4gIH0sIFtzZXRWZXJpZnlSZXN1bHQsIGNvbGxlY3Rpb25TbHVnLCBzZXJ2ZXJVUkwsIHRva2VuLCBpMThuXSk7XG5cbiAgaWYgKHVzZXIpIHtcbiAgICByZXR1cm4gPExvZ2luIC8+O1xuICB9XG5cbiAgY29uc3QgZ2V0VGV4dCA9ICgpID0+IHtcbiAgICBpZiAodmVyaWZ5UmVzdWx0Py5zdGF0dXMgPT09IDIwMCkgcmV0dXJuIHQoJ3ZlcmlmaWVkU3VjY2Vzc2Z1bGx5Jyk7XG4gICAgaWYgKHZlcmlmeVJlc3VsdD8uc3RhdHVzID09PSAyMDIpIHJldHVybiB0KCdhbHJlYWR5QWN0aXZhdGVkJyk7XG4gICAgcmV0dXJuIHQoJ3VuYWJsZVRvVmVyaWZ5Jyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxNZXRhXG4gICAgICAgIHRpdGxlPXt0KCd2ZXJpZnknKX1cbiAgICAgICAgZGVzY3JpcHRpb249e3QoJ3ZlcmlmeVVzZXInKX1cbiAgICAgICAga2V5d29yZHM9e3QoJ3ZlcmlmeScpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19icmFuZGB9PlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aDI+XG4gICAgICAgIHtnZXRUZXh0KCl9XG4gICAgICA8L2gyPlxuICAgICAge2lzQWRtaW5Vc2VyICYmIHZlcmlmeVJlc3VsdD8uc3RhdHVzID09PSAyMDAgJiYgKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZWw9XCJsaW5rXCJcbiAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgdG89e2Ake2FkbWluUm91dGV9L2xvZ2luYH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0KCdsb2dpbicpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9NaW5pbWFsVGVtcGxhdGU+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVmVyaWZ5O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlZlcmlmeSIsImNvbGxlY3Rpb24iLCJ2ZXJpZnlSZXN1bHQiLCJzbHVnIiwiY29sbGVjdGlvblNsdWciLCJ1c2VyIiwidXNlQXV0aCIsInRva2VuIiwidXNlUGFyYW1zIiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYWRtaW4iLCJhZG1pblJvdXRlIiwiYWRtaW5Vc2VyIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImlzQWRtaW5Vc2VyIiwidXNlU3RhdGUiLCJzZXRWZXJpZnlSZXN1bHQiLCJ1c2VFZmZlY3QiLCJ2ZXJpZnlUb2tlbiIsInJlc3VsdCIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJMb2dpbiIsImdldFRleHQiLCJzdGF0dXMiLCJNaW5pbWFsVGVtcGxhdGUiLCJjbGFzc05hbWUiLCJNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiZGl2IiwiTG9nbyIsImgyIiwiQnV0dG9uIiwiZWwiLCJidXR0b25TdHlsZSIsInRvIl0sIm1hcHBpbmdzIjoiOzs7OytCQTRFQTs7O2VBQUE7Ozs2REE1RTJDOzRCQUNaOzhCQUNMO3NCQUNBO29CQUNGOzJEQUNQOzhEQUNXOzZEQUNUOzJEQUNGOzREQUVDO1FBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxTQUE4RDtRQUFHQyxtQkFBQUE7UUFnRGpEQztJQS9DcEIsSUFBUUMsQUFBTUMsaUJBQW1CSCxXQUF6QkU7SUFFUixJQUFNLEFBQUVFLE9BQVNDLElBQUFBLGFBQU8sSUFBaEJEO0lBQ1IsSUFBTSxBQUFFRSxRQUFVQyxJQUFBQSx5QkFBUyxJQUFuQkQ7SUFDUixJQUFpRkUsYUFBQUEsSUFBQUEsaUJBQVMsS0FBbEZDLFlBQXlFRCxXQUF6RUMsK0JBQXlFRCxXQUE5REUsUUFBVUMsQUFBT0MsK0JBQVBELDBCQUFvREgsV0FBL0JHLE9BQVNQLEFBQU1TLDZCQUFOVDtJQUMzRCxJQUFvQlUsa0JBQUFBLElBQUFBLDRCQUFjLEVBQUMsbUJBQTNCQyxJQUFZRCxnQkFBWkMsR0FBR0MsT0FBU0YsZ0JBQVRFO0lBRVgsSUFBTUMsY0FBY2QsbUJBQW1CVTtJQUN2QyxJQUF3Q0ssNkJBQUFBLElBQUFBLGVBQVEsRUFBQyxXQUExQ2pCLGVBQWlDaUIsY0FBbkJDLGtCQUFtQkQ7SUFFeENFLElBQUFBLGdCQUFTLEVBQUM7aUJBQ09DO21CQUFBQTs7aUJBQUFBO1lBQUFBLGVBQWYsb0JBQUE7b0JBQ1FDOzs7OzRCQUFTOztnQ0FBTUMsTUFBTSxBQUFDLEdBQW1CcEIsT0FBakJNLFdBQVUsU0FBZ0NILE9BQXpCSCxnQkFBZSxZQUFnQixPQUFORyxRQUFTO29DQUMvRWtCLFFBQVE7b0NBQ1JDLGFBQWE7b0NBQ2JDLFNBQVM7d0NBQ1AsbUJBQW1CVixLQUFLVyxRQUFRO29DQUNsQztnQ0FDRjs7OzRCQU5NTCxTQUFTOzRCQU9mSCxnQkFBZ0JHOzs7Ozs7WUFDbEI7bUJBVGVEOztRQVVmQTtJQUNGLEdBQUc7UUFBQ0Y7UUFBaUJoQjtRQUFnQk07UUFBV0g7UUFBT1U7S0FBSztJQUU1RCxJQUFJWixNQUFNO1FBQ1IscUJBQU8sNkJBQUN3QixjQUFLO0lBQ2Y7SUFFQSxJQUFNQyxVQUFVO1lBQ1Y1QixlQUNBQTtRQURKLElBQUlBLEVBQUFBLGdCQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWM2QixNQUFNLE1BQUssS0FBSyxPQUFPZixFQUFFO1FBQzNDLElBQUlkLEVBQUFBLGlCQUFBQSwwQkFBQUEscUNBQUFBLGVBQWM2QixNQUFNLE1BQUssS0FBSyxPQUFPZixFQUFFO1FBQzNDLE9BQU9BLEVBQUU7SUFDWDtJQUVBLHFCQUNFLDZCQUFDZ0IsZ0JBQWU7UUFBQ0MsV0FBV2xDO3FCQUMxQiw2QkFBQ21DLGFBQUk7UUFDSEMsT0FBT25CLEVBQUU7UUFDVG9CLGFBQWFwQixFQUFFO1FBQ2ZxQixVQUFVckIsRUFBRTtzQkFFZCw2QkFBQ3NCO1FBQUlMLFdBQVcsQUFBQyxHQUFZLE9BQVZsQyxXQUFVO3FCQUMzQiw2QkFBQ3dDLGFBQUksd0JBRVAsNkJBQUNDLFlBQ0VWLFlBRUZaLGVBQWVoQixFQUFBQSxnQkFBQUEsMEJBQUFBLG9DQUFBQSxjQUFjNkIsTUFBTSxNQUFLLHFCQUN2Qyw2QkFBQ1UsZUFBTTtRQUNMQyxJQUFHO1FBQ0hDLGFBQVk7UUFDWkMsSUFBSSxBQUFDLEdBQWEsT0FBWC9CLFlBQVc7T0FFakJHLEVBQUU7QUFLYjtJQUNBLFdBQWVoQiJ9