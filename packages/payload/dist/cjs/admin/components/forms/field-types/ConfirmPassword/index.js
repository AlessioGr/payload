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
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _context = require("../../Form/context");
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
var ConfirmPassword = function(props) {
    var disabled = props.disabled;
    var password = (0, _context.useFormFields)(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        return fields.password;
    });
    var t = (0, _reacti18next.useTranslation)("fields").t;
    var validate = (0, _react.useCallback)(function(value) {
        var _password;
        if (!value) {
            return t("validation:required");
        }
        if (value === ((_password = password) === null || _password === void 0 ? void 0 : _password.value)) {
            return true;
        }
        return t("passwordsDoNotMatch");
    }, [
        password,
        t
    ]);
    var _useField1 = (0, _useField.default)({
        path: "confirm-password",
        disableFormData: true,
        validate: validate
    }), value = _useField1.value, showError = _useField1.showError, setValue = _useField1.setValue, errorMessage = _useField1.errorMessage;
    var classes = [
        "field-type",
        "confirm-password",
        showError && "error"
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "field-confirm-password",
        label: t("authentication:confirmPassword"),
        required: true
    }), /*#__PURE__*/ _react.default.createElement("input", {
        value: value || "",
        onChange: setValue,
        type: "password",
        autoComplete: "off",
        id: "field-confirm-password",
        name: "confirm-password",
        disabled: !!disabled
    }));
};
var _default = ConfirmPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvbmZpcm1QYXNzd29yZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCB7IHVzZUZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vRm9ybS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgQ29uZmlybVBhc3N3b3JkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGRpc2FibGVkLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGFzc3dvcmQgPSB1c2VGb3JtRmllbGRzPEZvcm1GaWVsZD4oKFtmaWVsZHNdKSA9PiBmaWVsZHMucGFzc3dvcmQpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICBjb25zdCB2YWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IHBhc3N3b3JkPy52YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHQoJ3Bhc3N3b3Jkc0RvTm90TWF0Y2gnKTtcbiAgfSwgW3Bhc3N3b3JkLCB0XSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZCh7XG4gICAgcGF0aDogJ2NvbmZpcm0tcGFzc3dvcmQnLFxuICAgIGRpc2FibGVGb3JtRGF0YTogdHJ1ZSxcbiAgICB2YWxpZGF0ZSxcbiAgfSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ2NvbmZpcm0tcGFzc3dvcmQnLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICA8RXJyb3JcbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIC8+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj1cImZpZWxkLWNvbmZpcm0tcGFzc3dvcmRcIlxuICAgICAgICBsYWJlbD17dCgnYXV0aGVudGljYXRpb246Y29uZmlybVBhc3N3b3JkJyl9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXt2YWx1ZSBhcyBzdHJpbmcgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgaWQ9XCJmaWVsZC1jb25maXJtLXBhc3N3b3JkXCJcbiAgICAgICAgbmFtZT1cImNvbmZpcm0tcGFzc3dvcmRcIlxuICAgICAgICBkaXNhYmxlZD17ISFkaXNhYmxlZH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtUGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsiQ29uZmlybVBhc3N3b3JkIiwicHJvcHMiLCJkaXNhYmxlZCIsInBhc3N3b3JkIiwidXNlRm9ybUZpZWxkcyIsImZpZWxkcyIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsInVzZUZpZWxkIiwicGF0aCIsImRpc2FibGVGb3JtRGF0YSIsInNob3dFcnJvciIsInNldFZhbHVlIiwiZXJyb3JNZXNzYWdlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwiY2xhc3NOYW1lIiwiRXJyb3IiLCJtZXNzYWdlIiwiTGFiZWwiLCJodG1sRm9yIiwibGFiZWwiLCJyZXF1aXJlZCIsImlucHV0Iiwib25DaGFuZ2UiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7OytCQXdFQTs7O2VBQUE7Ozs2REF4RW1DOzRCQUNKOytEQUNWOzREQUNIOzREQUNBO3VCQUNZO1FBSXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsa0JBQW1DLFNBQUNDO0lBQ3hDLElBQU0sQUFDSkMsV0FDRUQsTUFERkM7SUFHRixJQUFNQyxXQUFXQyxJQUFBQSxzQkFBYSxFQUFZO2lEQUFFQztlQUFZQSxPQUFPRixRQUFROztJQUN2RSxJQUFNLEFBQUVHLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsVUFBckJEO0lBRVIsSUFBTUUsV0FBV0MsSUFBQUEsa0JBQVcsRUFBQyxTQUFDQztZQUtkUDtRQUpkLElBQUksQ0FBQ08sT0FBTztZQUNWLE9BQU9KLEVBQUU7UUFDWDtRQUVBLElBQUlJLFlBQVVQLFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVU8sS0FBSyxHQUFFO1lBQzdCLE9BQU87UUFDVDtRQUVBLE9BQU9KLEVBQUU7SUFDWCxHQUFHO1FBQUNIO1FBQVVHO0tBQUU7SUFFaEIsSUFLSUssYUFBQUEsSUFBQUEsaUJBQVEsRUFBQztRQUNYQyxNQUFNO1FBQ05DLGlCQUFpQjtRQUNqQkwsVUFBQUE7SUFDRixJQVJFRSxRQUlFQyxXQUpGRCxPQUNBSSxZQUdFSCxXQUhGRyxXQUNBQyxXQUVFSixXQUZGSSxVQUNBQyxlQUNFTCxXQURGSztJQU9GLElBQU1DLFVBQVU7UUFDZDtRQUNBO1FBQ0FILGFBQWE7S0FDZCxDQUFDSSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSw2QkFBQ0M7UUFBSUMsV0FBV0w7cUJBQ2QsNkJBQUNNLGNBQUs7UUFDSlQsV0FBV0E7UUFDWFUsU0FBU1I7c0JBRVgsNkJBQUNTLGNBQUs7UUFDSkMsU0FBUTtRQUNSQyxPQUFPckIsRUFBRTtRQUNUc0IsVUFBQUE7c0JBRUYsNkJBQUNDO1FBQ0NuQixPQUFPQSxTQUFtQjtRQUMxQm9CLFVBQVVmO1FBQ1ZnQixNQUFLO1FBQ0xDLGNBQWE7UUFDYkMsSUFBRztRQUNIQyxNQUFLO1FBQ0xoQyxVQUFVLENBQUMsQ0FBQ0E7O0FBSXBCO0lBRUEsV0FBZUYifQ==