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
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import useField from "../../useField";
import Label from "../../Label";
import Error from "../../Error";
import { useFormFields } from "../../Form/context";
import "./index.scss";
var ConfirmPassword = function(props) {
    var disabled = props.disabled;
    var password = useFormFields(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        return fields.password;
    });
    var t = useTranslation("fields").t;
    var validate = useCallback(function(value) {
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
    var _useField = useField({
        path: "confirm-password",
        disableFormData: true,
        validate: validate
    }), value = _useField.value, showError = _useField.showError, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    var classes = [
        "field-type",
        "confirm-password",
        showError && "error"
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ React.createElement(Label, {
        htmlFor: "field-confirm-password",
        label: t("authentication:confirmPassword"),
        required: true
    }), /*#__PURE__*/ React.createElement("input", {
        value: value || "",
        onChange: setValue,
        type: "password",
        autoComplete: "off",
        id: "field-confirm-password",
        name: "confirm-password",
        disabled: !!disabled
    }));
};
export default ConfirmPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvbmZpcm1QYXNzd29yZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCB7IHVzZUZvcm1GaWVsZHMgfSBmcm9tICcuLi8uLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgRm9ybUZpZWxkIH0gZnJvbSAnLi4vLi4vRm9ybS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgQ29uZmlybVBhc3N3b3JkOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGRpc2FibGVkLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGFzc3dvcmQgPSB1c2VGb3JtRmllbGRzPEZvcm1GaWVsZD4oKFtmaWVsZHNdKSA9PiBmaWVsZHMucGFzc3dvcmQpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICBjb25zdCB2YWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuIHQoJ3ZhbGlkYXRpb246cmVxdWlyZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IHBhc3N3b3JkPy52YWx1ZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHQoJ3Bhc3N3b3Jkc0RvTm90TWF0Y2gnKTtcbiAgfSwgW3Bhc3N3b3JkLCB0XSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZCh7XG4gICAgcGF0aDogJ2NvbmZpcm0tcGFzc3dvcmQnLFxuICAgIGRpc2FibGVGb3JtRGF0YTogdHJ1ZSxcbiAgICB2YWxpZGF0ZSxcbiAgfSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ2NvbmZpcm0tcGFzc3dvcmQnLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICA8RXJyb3JcbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIC8+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj1cImZpZWxkLWNvbmZpcm0tcGFzc3dvcmRcIlxuICAgICAgICBsYWJlbD17dCgnYXV0aGVudGljYXRpb246Y29uZmlybVBhc3N3b3JkJyl9XG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlPXt2YWx1ZSBhcyBzdHJpbmcgfHwgJyd9XG4gICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgaWQ9XCJmaWVsZC1jb25maXJtLXBhc3N3b3JkXCJcbiAgICAgICAgbmFtZT1cImNvbmZpcm0tcGFzc3dvcmRcIlxuICAgICAgICBkaXNhYmxlZD17ISFkaXNhYmxlZH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25maXJtUGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVRyYW5zbGF0aW9uIiwidXNlRmllbGQiLCJMYWJlbCIsIkVycm9yIiwidXNlRm9ybUZpZWxkcyIsIkNvbmZpcm1QYXNzd29yZCIsInByb3BzIiwiZGlzYWJsZWQiLCJwYXNzd29yZCIsImZpZWxkcyIsInQiLCJ2YWxpZGF0ZSIsInZhbHVlIiwicGF0aCIsImRpc2FibGVGb3JtRGF0YSIsInNob3dFcnJvciIsInNldFZhbHVlIiwiZXJyb3JNZXNzYWdlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsImh0bWxGb3IiLCJsYWJlbCIsInJlcXVpcmVkIiwiaW5wdXQiLCJvbkNoYW5nZSIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJpZCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLFFBQVEsUUFBUTtBQUMzQyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxXQUFXLGNBQWM7QUFDaEMsU0FBU0MsYUFBYSxRQUFRLHFCQUFxQjtBQUluRCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsa0JBQW1DLFNBQUNDO0lBQ3hDLElBQU0sQUFDSkMsV0FDRUQsTUFERkM7SUFHRixJQUFNQyxXQUFXSixjQUF5QjtpREFBRUs7ZUFBWUEsT0FBT0QsUUFBUTs7SUFDdkUsSUFBTSxBQUFFRSxJQUFNVixlQUFlLFVBQXJCVTtJQUVSLElBQU1DLFdBQVdaLFlBQVksU0FBQ2E7WUFLZEo7UUFKZCxJQUFJLENBQUNJLE9BQU87WUFDVixPQUFPRixFQUFFO1FBQ1g7UUFFQSxJQUFJRSxZQUFVSixZQUFBQSxzQkFBQUEsZ0NBQUFBLFVBQVVJLEtBQUssR0FBRTtZQUM3QixPQUFPO1FBQ1Q7UUFFQSxPQUFPRixFQUFFO0lBQ1gsR0FBRztRQUFDRjtRQUFVRTtLQUFFO0lBRWhCLElBS0lULFlBQUFBLFNBQVM7UUFDWFksTUFBTTtRQUNOQyxpQkFBaUI7UUFDakJILFVBQUFBO0lBQ0YsSUFSRUMsUUFJRVgsVUFKRlcsT0FDQUcsWUFHRWQsVUFIRmMsV0FDQUMsV0FFRWYsVUFGRmUsVUFDQUMsZUFDRWhCLFVBREZnQjtJQU9GLElBQU1DLFVBQVU7UUFDZDtRQUNBO1FBQ0FILGFBQWE7S0FDZCxDQUFDSSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSxvQkFBQ0M7UUFBSUMsV0FBV0w7cUJBQ2Qsb0JBQUNmO1FBQ0NZLFdBQVdBO1FBQ1hTLFNBQVNQO3NCQUVYLG9CQUFDZjtRQUNDdUIsU0FBUTtRQUNSQyxPQUFPaEIsRUFBRTtRQUNUaUIsVUFBQUE7c0JBRUYsb0JBQUNDO1FBQ0NoQixPQUFPQSxTQUFtQjtRQUMxQmlCLFVBQVViO1FBQ1ZjLE1BQUs7UUFDTEMsY0FBYTtRQUNiQyxJQUFHO1FBQ0hDLE1BQUs7UUFDTDFCLFVBQVUsQ0FBQyxDQUFDQTs7QUFJcEI7QUFFQSxlQUFlRixnQkFBZ0IifQ==