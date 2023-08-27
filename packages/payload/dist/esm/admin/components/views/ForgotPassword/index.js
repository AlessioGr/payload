function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Trans, useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import MinimalTemplate from "../../templates/Minimal";
import Form from "../../forms/Form";
import Email from "../../forms/field-types/Email";
import FormSubmit from "../../forms/Submit";
import Button from "../../elements/Button";
import Meta from "../../utilities/Meta";
import "./index.scss";
var baseClass = "forgot-password";
var ForgotPassword = function() {
    var _useState = _sliced_to_array(useState(false), 2), hasSubmitted = _useState[0], setHasSubmitted = _useState[1];
    var user = useAuth().user;
    var t = useTranslation("authentication").t;
    var _useConfig = useConfig(), _useConfig_admin = _useConfig.admin, userSlug = _useConfig_admin.user, serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, admin = _useConfig_routes.admin, api = _useConfig_routes.api;
    var handleResponse = function(res) {
        res.json().then(function() {
            setHasSubmitted(true);
        }, function() {
            toast.error(t("emailNotValid"));
        });
    };
    if (user) {
        return /*#__PURE__*/ React.createElement(MinimalTemplate, {
            className: baseClass
        }, /*#__PURE__*/ React.createElement(Meta, {
            title: t("forgotPassword"),
            description: t("forgotPassword"),
            keywords: t("forgotPassword")
        }), /*#__PURE__*/ React.createElement("h1", null, t("alreadyLoggedIn")), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement(Trans, {
            i18nKey: "loggedInChangePassword",
            t: t
        }, /*#__PURE__*/ React.createElement(Link, {
            to: "".concat(admin, "/account")
        }, "account"))), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement(Button, {
            el: "link",
            buttonStyle: "secondary",
            to: admin
        }, t("general:backToDashboard")));
    }
    if (hasSubmitted) {
        return /*#__PURE__*/ React.createElement(MinimalTemplate, {
            className: baseClass
        }, /*#__PURE__*/ React.createElement("h1", null, t("emailSent")), /*#__PURE__*/ React.createElement("p", null, t("checkYourEmailForPasswordReset")));
    }
    return /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Form, {
        handleResponse: handleResponse,
        method: "post",
        action: "".concat(serverURL).concat(api, "/").concat(userSlug, "/forgot-password")
    }, /*#__PURE__*/ React.createElement("h1", null, t("forgotPassword")), /*#__PURE__*/ React.createElement("p", null, t("forgotPasswordEmailInstructions")), /*#__PURE__*/ React.createElement(Email, {
        label: t("general:emailAddress"),
        name: "email",
        admin: {
            autoComplete: "email"
        },
        required: true
    }), /*#__PURE__*/ React.createElement(FormSubmit, null, t("general:submit"))), /*#__PURE__*/ React.createElement(Link, {
        to: "".concat(admin, "/login")
    }, t("backToLogin")));
};
export default ForgotPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0ZvcmdvdFBhc3N3b3JkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IFRyYW5zLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJztcbmltcG9ydCBFbWFpbCBmcm9tICcuLi8uLi9mb3Jtcy9maWVsZC10eXBlcy9FbWFpbCc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL01ldGEnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmb3Jnb3QtcGFzc3dvcmQnO1xuXG5jb25zdCBGb3Jnb3RQYXNzd29yZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtoYXNTdWJtaXR0ZWQsIHNldEhhc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuICBjb25zdCB7XG4gICAgYWRtaW46IHsgdXNlcjogdXNlclNsdWcgfSxcbiAgICBzZXJ2ZXJVUkwsXG4gICAgcm91dGVzOiB7XG4gICAgICBhZG1pbixcbiAgICAgIGFwaSxcbiAgICB9LFxuICB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgaGFuZGxlUmVzcG9uc2UgPSAocmVzKSA9PiB7XG4gICAgcmVzLmpzb24oKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBzZXRIYXNTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgICB9LCAoKSA9PiB7XG4gICAgICAgIHRvYXN0LmVycm9yKHQoJ2VtYWlsTm90VmFsaWQnKSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpZiAodXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT17dCgnZm9yZ290UGFzc3dvcmQnKX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZm9yZ290UGFzc3dvcmQnKX1cbiAgICAgICAgICBrZXl3b3Jkcz17dCgnZm9yZ290UGFzc3dvcmQnKX1cbiAgICAgICAgLz5cblxuICAgICAgICA8aDE+e3QoJ2FscmVhZHlMb2dnZWRJbicpfTwvaDE+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgaTE4bktleT1cImxvZ2dlZEluQ2hhbmdlUGFzc3dvcmRcIlxuICAgICAgICAgICAgdD17dH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayB0bz17YCR7YWRtaW59L2FjY291bnRgfT5hY2NvdW50PC9MaW5rPlxuICAgICAgICAgIDwvVHJhbnM+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBlbD1cImxpbmtcIlxuICAgICAgICAgIGJ1dHRvblN0eWxlPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICB0bz17YWRtaW59XG4gICAgICAgID5cbiAgICAgICAgICB7dCgnZ2VuZXJhbDpiYWNrVG9EYXNoYm9hcmQnKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L01pbmltYWxUZW1wbGF0ZT5cbiAgICApO1xuICB9XG5cbiAgaWYgKGhhc1N1Ym1pdHRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPGgxPnt0KCdlbWFpbFNlbnQnKX08L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7dCgnY2hlY2tZb3VyRW1haWxGb3JQYXNzd29yZFJlc2V0Jyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPEZvcm1cbiAgICAgICAgaGFuZGxlUmVzcG9uc2U9e2hhbmRsZVJlc3BvbnNlfVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgYWN0aW9uPXtgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7dXNlclNsdWd9L2ZvcmdvdC1wYXNzd29yZGB9XG4gICAgICA+XG4gICAgICAgIDxoMT57dCgnZm9yZ290UGFzc3dvcmQnKX08L2gxPlxuICAgICAgICA8cD57dCgnZm9yZ290UGFzc3dvcmRFbWFpbEluc3RydWN0aW9ucycpfTwvcD5cbiAgICAgICAgPEVtYWlsXG4gICAgICAgICAgbGFiZWw9e3QoJ2dlbmVyYWw6ZW1haWxBZGRyZXNzJyl9XG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICBhZG1pbj17eyBhdXRvQ29tcGxldGU6ICdlbWFpbCcgfX1cbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybVN1Ym1pdD57dCgnZ2VuZXJhbDpzdWJtaXQnKX08L0Zvcm1TdWJtaXQ+XG4gICAgICA8L0Zvcm0+XG4gICAgICA8TGluayB0bz17YCR7YWRtaW59L2xvZ2luYH0+e3QoJ2JhY2tUb0xvZ2luJyl9PC9MaW5rPlxuICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ0b2FzdCIsIlRyYW5zIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJ1c2VBdXRoIiwiTWluaW1hbFRlbXBsYXRlIiwiRm9ybSIsIkVtYWlsIiwiRm9ybVN1Ym1pdCIsIkJ1dHRvbiIsIk1ldGEiLCJiYXNlQ2xhc3MiLCJGb3Jnb3RQYXNzd29yZCIsImhhc1N1Ym1pdHRlZCIsInNldEhhc1N1Ym1pdHRlZCIsInVzZXIiLCJ0IiwiYWRtaW4iLCJ1c2VyU2x1ZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImhhbmRsZVJlc3BvbnNlIiwicmVzIiwianNvbiIsInRoZW4iLCJlcnJvciIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsImgxIiwicCIsImkxOG5LZXkiLCJ0byIsImJyIiwiZWwiLCJidXR0b25TdHlsZSIsIm1ldGhvZCIsImFjdGlvbiIsImxhYmVsIiwibmFtZSIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxRQUFRLFFBQVE7QUFDeEMsU0FBU0MsSUFBSSxRQUFRLG1CQUFtQjtBQUN4QyxTQUFTQyxLQUFLLFFBQVEsaUJBQWlCO0FBQ3ZDLFNBQVNDLEtBQUssRUFBRUMsY0FBYyxRQUFRLGdCQUFnQjtBQUN0RCxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFDL0MsT0FBT0MscUJBQXFCLDBCQUEwQjtBQUN0RCxPQUFPQyxVQUFVLG1CQUFtQjtBQUNwQyxPQUFPQyxXQUFXLGdDQUFnQztBQUNsRCxPQUFPQyxnQkFBZ0IscUJBQXFCO0FBQzVDLE9BQU9DLFlBQVksd0JBQXdCO0FBQzNDLE9BQU9DLFVBQVUsdUJBQXVCO0FBRXhDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLGlCQUEyQjtJQUMvQixJQUF3Q2QsNkJBQUFBLFNBQVMsWUFBMUNlLGVBQWlDZixjQUFuQmdCLGtCQUFtQmhCO0lBQ3hDLElBQU0sQUFBRWlCLE9BQVNYLFVBQVRXO0lBQ1IsSUFBTSxBQUFFQyxJQUFNZCxlQUFlLGtCQUFyQmM7SUFDUixJQU9JYixhQUFBQSxnQ0FBQUEsV0FORmMsT0FBU0YsQUFBTUcsNEJBQU5ILE1BQ1RJLFlBS0VoQixXQUxGZ0IsK0JBS0VoQixXQUpGaUIsUUFDRUgsMEJBQUFBLE9BQ0FJLHdCQUFBQTtJQUlKLElBQU1DLGlCQUFpQixTQUFDQztRQUN0QkEsSUFBSUMsSUFBSSxHQUNMQyxJQUFJLENBQUM7WUFDSlgsZ0JBQWdCO1FBQ2xCLEdBQUc7WUFDRGQsTUFBTTBCLEtBQUssQ0FBQ1YsRUFBRTtRQUNoQjtJQUNKO0lBRUEsSUFBSUQsTUFBTTtRQUNSLHFCQUNFLG9CQUFDVjtZQUFnQnNCLFdBQVdoQjt5QkFDMUIsb0JBQUNEO1lBQ0NrQixPQUFPWixFQUFFO1lBQ1RhLGFBQWFiLEVBQUU7WUFDZmMsVUFBVWQsRUFBRTswQkFHZCxvQkFBQ2UsWUFBSWYsRUFBRSxtQ0FDUCxvQkFBQ2dCLHlCQUNDLG9CQUFDL0I7WUFDQ2dDLFNBQVE7WUFDUmpCLEdBQUdBO3lCQUVILG9CQUFDakI7WUFBS21DLElBQUksQUFBQyxHQUFRLE9BQU5qQixPQUFNO1dBQVcsNEJBR2xDLG9CQUFDa0IsMkJBQ0Qsb0JBQUMxQjtZQUNDMkIsSUFBRztZQUNIQyxhQUFZO1lBQ1pILElBQUlqQjtXQUVIRCxFQUFFO0lBSVg7SUFFQSxJQUFJSCxjQUFjO1FBQ2hCLHFCQUNFLG9CQUFDUjtZQUFnQnNCLFdBQVdoQjt5QkFDMUIsb0JBQUNvQixZQUFJZixFQUFFLDZCQUNQLG9CQUFDZ0IsV0FDRWhCLEVBQUU7SUFJWDtJQUVBLHFCQUNFLG9CQUFDWDtRQUFnQnNCLFdBQVdoQjtxQkFDMUIsb0JBQUNMO1FBQ0NnQixnQkFBZ0JBO1FBQ2hCZ0IsUUFBTztRQUNQQyxRQUFRLEFBQUMsR0FBY2xCLE9BQVpGLFdBQW1CRCxPQUFQRyxLQUFJLEtBQVksT0FBVEgsVUFBUztxQkFFdkMsb0JBQUNhLFlBQUlmLEVBQUUsa0NBQ1Asb0JBQUNnQixXQUFHaEIsRUFBRSxtREFDTixvQkFBQ1Q7UUFDQ2lDLE9BQU94QixFQUFFO1FBQ1R5QixNQUFLO1FBQ0x4QixPQUFPO1lBQUV5QixjQUFjO1FBQVE7UUFDL0JDLFVBQUFBO3NCQUVGLG9CQUFDbkMsa0JBQVlRLEVBQUUsbUNBRWpCLG9CQUFDakI7UUFBS21DLElBQUksQUFBQyxHQUFRLE9BQU5qQixPQUFNO09BQVVELEVBQUU7QUFHckM7QUFFQSxlQUFlSixlQUFlIn0=