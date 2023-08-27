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
var _reactrouterdom = require("react-router-dom");
var _reacttoastify = require("react-toastify");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
var _Email = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types/Email"));
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var baseClass = "forgot-password";
var ForgotPassword = function() {
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), hasSubmitted = _useState[0], setHasSubmitted = _useState[1];
    var user = (0, _Auth.useAuth)().user;
    var t = (0, _reacti18next.useTranslation)("authentication").t;
    var _useConfig = (0, _Config.useConfig)(), _useConfig_admin = _useConfig.admin, userSlug = _useConfig_admin.user, serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, admin = _useConfig_routes.admin, api = _useConfig_routes.api;
    var handleResponse = function(res) {
        res.json().then(function() {
            setHasSubmitted(true);
        }, function() {
            _reacttoastify.toast.error(t("emailNotValid"));
        });
    };
    if (user) {
        return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
            className: baseClass
        }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
            title: t("forgotPassword"),
            description: t("forgotPassword"),
            keywords: t("forgotPassword")
        }), /*#__PURE__*/ _react.default.createElement("h1", null, t("alreadyLoggedIn")), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
            i18nKey: "loggedInChangePassword",
            t: t
        }, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
            to: "".concat(admin, "/account")
        }, "account"))), /*#__PURE__*/ _react.default.createElement("br", null), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            el: "link",
            buttonStyle: "secondary",
            to: admin
        }, t("general:backToDashboard")));
    }
    if (hasSubmitted) {
        return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
            className: baseClass
        }, /*#__PURE__*/ _react.default.createElement("h1", null, t("emailSent")), /*#__PURE__*/ _react.default.createElement("p", null, t("checkYourEmailForPasswordReset")));
    }
    return /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Form.default, {
        handleResponse: handleResponse,
        method: "post",
        action: "".concat(serverURL).concat(api, "/").concat(userSlug, "/forgot-password")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("forgotPassword")), /*#__PURE__*/ _react.default.createElement("p", null, t("forgotPasswordEmailInstructions")), /*#__PURE__*/ _react.default.createElement(_Email.default, {
        label: t("general:emailAddress"),
        name: "email",
        admin: {
            autoComplete: "email"
        },
        required: true
    }), /*#__PURE__*/ _react.default.createElement(_Submit.default, null, t("general:submit"))), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: "".concat(admin, "/login")
    }, t("backToLogin")));
};
var _default = ForgotPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0ZvcmdvdFBhc3N3b3JkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJztcbmltcG9ydCBFbWFpbCBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9FbWFpbCc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmb3Jnb3QtcGFzc3dvcmQnO1xuXG5jb25zdCBGb3Jnb3RQYXNzd29yZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtoYXNTdWJtaXR0ZWQsIHNldEhhc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuICBjb25zdCB7XG4gICAgYWRtaW46IHsgdXNlcjogdXNlclNsdWcgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gICAgcm91dGVzOiB7XG4gICAgICBhZG1pbixcbiAgICAgIGFwaSxcbiAgICB9LFxuICB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzKSA9PiB7XG4gICAgcmVzLmpzb24oKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRIYXNTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRvYXN0LmVycm9yKHQoJ2VtYWlsTm90VmFsaWQnKSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpZiAodXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT17dCgnZm9yZ290UGFzc3dvcmQnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZm9yZ290UGFzc3dvcmQnKX1cbiAgICAgICAgICBrZXl3b3Jkcz17dCgnZm9yZ290UGFzc3dvcmQnKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8aDE+e3QoJ2FscmVhZHlMb2dnZWRJbicpfTwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgaTE4bktleT1cImxvZ2dlZEluQ2hhbmdlUGFzc3dvcmRcIlxuICAgICAgICAgICAgdD17dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayB0bz17YCR7YWRtaW59L2FjY291bnRgfT5hY2NvdW50PC9MaW5rPlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBlbD1cImxpbmtcIlxuICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICB0bz17YWRtaW59XG4gICAgICAgID5cbiAgICAgICAgICB7dCgnZ2VuZXJhbDpiYWNrVG9EYXNoYm9hcmQnKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgICApO1xuICB9XG5cbiAgaWYgKGhhc1N1Ym1pdHRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPGgxPnt0KCdlbWFpbFNlbnQnKX08L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dCgnY2hlY2tZb3VyRW1haWxGb3JQYXNzd29yZFJlc2V0Jyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPEZvcm1cbiAgICAgICAgaGFuZGxlUmVzcG9uc2U9e2hhbmRsZVJlc3BvbnNlfVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgYWN0aW9uPXtgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7dXNlclNsdWd9L2ZvcmdvdC1wYXNzd29yZGB9XG4gICAgICA+XG4gICAgICAgIDxoMT57dCgnZm9yZ290UGFzc3dvcmQnKX08L2gxPlxuICAgICAgICA8cD57dCgnZm9yZ290UGFzc3dvcmRFbWFpbEluc3RydWN0aW9ucycpfTwvcD5cbiAgICAgICAgPEVtYWlsXG4gICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6ZW1haWxBZGRyZXNzJyl9XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBhZG1pbj17eyBhdXRvQ29tcGxldGU6ICdlbWFpbCcgfX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybVN1Ym1pdD57dCgnZ2VuZXJhbDpzdWJtaXQnKX08L0Zvcm1TdWJtaXQ+XG4gICAgICA8L0Zvcm0+XG4gICAgICA8TGluayB0bz17YCR7YWRtaW59L2xvZ2luYH0+e3QoJ2JhY2tUb0xvZ2luJyl9PC9MaW5rPlxuICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRm9yZ290UGFzc3dvcmQiLCJ1c2VTdGF0ZSIsImhhc1N1Ym1pdHRlZCIsInNldEhhc1N1Ym1pdHRlZCIsInVzZXIiLCJ1c2VBdXRoIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwiYWRtaW4iLCJ1c2VyU2x1ZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImhhbmRsZVJlc3BvbnNlIiwicmVzIiwianNvbiIsInRoZW4iLCJ0b2FzdCIsImVycm9yIiwiTWluaW1hbFRlbXBsYXRlIiwiY2xhc3NOYW1lIiwiTWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImgxIiwicCIsIlRyYW5zIiwiaTE4bktleSIsIkxpbmsiLCJ0byIsImJyIiwiQnV0dG9uIiwiZWwiLCJidXR0b25TdHlsZSIsIkZvcm0iLCJtZXRob2QiLCJhY3Rpb24iLCJFbWFpbCIsImxhYmVsIiwibmFtZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwiRm9ybVN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFzR0E7OztlQUFBOzs7NkRBdEdnQzs4QkFDWDs2QkFDQzs0QkFDZ0I7c0JBQ1o7b0JBQ0Y7OERBQ0k7MkRBQ1g7NERBQ0M7NkRBQ0s7NkRBQ0o7MkRBQ0Y7UUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsaUJBQTJCO0lBQy9CLElBQXdDQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDLFlBQTFDQyxlQUFpQ0QsY0FBbkJFLGtCQUFtQkY7SUFDeEMsSUFBTSxBQUFFRyxPQUFTQyxJQUFBQSxhQUFPLElBQWhCRDtJQUNSLElBQU0sQUFBRUUsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxrQkFBckJEO0lBQ1IsSUFPSUUsYUFBQUEsSUFBQUEsaUJBQVMsd0JBQVRBLFdBTkZDLE9BQVNMLEFBQU1NLDRCQUFOTixNQUNUTyxZQUtFSCxXQUxGRywrQkFLRUgsV0FKRkksUUFDRUgsMEJBQUFBLE9BQ0FJLHdCQUFBQTtJQUlKLElBQU1DLGlCQUFpQixTQUFDQztRQUN0QkEsSUFBSUMsSUFBSSxHQUNMQyxJQUFJLENBQUM7WUFDSmQsZ0JBQWdCO1FBQ2xCLEdBQUc7WUFDRGUsb0JBQUssQ0FBQ0MsS0FBSyxDQUFDYixFQUFFO1FBQ2hCO0lBQ0o7SUFFQSxJQUFJRixNQUFNO1FBQ1IscUJBQ0UsNkJBQUNnQixnQkFBZTtZQUFDQyxXQUFXdEI7eUJBQzFCLDZCQUFDdUIsYUFBSTtZQUNIQyxPQUFPakIsRUFBRTtZQUNUa0IsYUFBYWxCLEVBQUU7WUFDZm1CLFVBQVVuQixFQUFFOzBCQUdkLDZCQUFDb0IsWUFBSXBCLEVBQUUsbUNBQ1AsNkJBQUNxQix5QkFDQyw2QkFBQ0MsbUJBQUs7WUFDSkMsU0FBUTtZQUNSdkIsR0FBR0E7eUJBRUgsNkJBQUN3QixvQkFBSTtZQUFDQyxJQUFJLEFBQUMsR0FBUSxPQUFOdEIsT0FBTTtXQUFXLDRCQUdsQyw2QkFBQ3VCLDJCQUNELDZCQUFDQyxlQUFNO1lBQ0xDLElBQUc7WUFDSEMsYUFBWTtZQUNaSixJQUFJdEI7V0FFSEgsRUFBRTtJQUlYO0lBRUEsSUFBSUosY0FBYztRQUNoQixxQkFDRSw2QkFBQ2tCLGdCQUFlO1lBQUNDLFdBQVd0Qjt5QkFDMUIsNkJBQUMyQixZQUFJcEIsRUFBRSw2QkFDUCw2QkFBQ3FCLFdBQ0VyQixFQUFFO0lBSVg7SUFFQSxxQkFDRSw2QkFBQ2MsZ0JBQWU7UUFBQ0MsV0FBV3RCO3FCQUMxQiw2QkFBQ3FDLGFBQUk7UUFDSHRCLGdCQUFnQkE7UUFDaEJ1QixRQUFPO1FBQ1BDLFFBQVEsQUFBQyxHQUFjekIsT0FBWkYsV0FBbUJELE9BQVBHLEtBQUksS0FBWSxPQUFUSCxVQUFTO3FCQUV2Qyw2QkFBQ2dCLFlBQUlwQixFQUFFLGtDQUNQLDZCQUFDcUIsV0FBR3JCLEVBQUUsbURBQ04sNkJBQUNpQyxjQUFLO1FBQ0pDLE9BQU9sQyxFQUFFO1FBQ1RtQyxNQUFLO1FBQ0xoQyxPQUFPO1lBQUVpQyxjQUFjO1FBQVE7UUFDL0JDLFVBQUFBO3NCQUVGLDZCQUFDQyxlQUFVLFFBQUV0QyxFQUFFLG1DQUVqQiw2QkFBQ3dCLG9CQUFJO1FBQUNDLElBQUksQUFBQyxHQUFRLE9BQU50QixPQUFNO09BQVVILEVBQUU7QUFHckM7SUFFQSxXQUFlTiJ9