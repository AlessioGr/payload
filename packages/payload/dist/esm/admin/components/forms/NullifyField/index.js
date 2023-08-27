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
import * as React from "react";
import { useTranslation } from "react-i18next";
import { CheckboxInput } from "../field-types/Checkbox/Input";
import { Banner } from "../../elements/Banner";
import { useLocale } from "../../utilities/Locale";
import { useConfig } from "../../utilities/Config";
import { useForm } from "../Form/context";
export var NullifyLocaleField = function(param) {
    var localized = param.localized, path = param.path, fieldValue = param.fieldValue;
    var _useForm = useForm(), dispatchFields = _useForm.dispatchFields, setModified = _useForm.setModified;
    var _useLocale = useLocale(), currentLocale = _useLocale.code;
    var localization = useConfig().localization;
    var _React_useState = _sliced_to_array(React.useState(typeof fieldValue !== "number"), 2), checked = _React_useState[0], setChecked = _React_useState[1];
    var defaultLocale = localization && localization.defaultLocale ? localization.defaultLocale : "en";
    var t = useTranslation("general").t;
    var onChange = function() {
        var useFallback = !checked;
        dispatchFields({
            type: "UPDATE",
            path: path,
            value: useFallback ? null : fieldValue || 0
        });
        setModified(true);
        setChecked(useFallback);
    };
    if (!localized || currentLocale === defaultLocale || localization && !localization.fallback) {
        // hide when field is not localized or editing default locale or when fallback is disabled
        return null;
    }
    if (fieldValue) {
        var hideCheckbox = false;
        if (typeof fieldValue === "number" && fieldValue > 0) hideCheckbox = true;
        if (Array.isArray(fieldValue) && fieldValue.length > 0) hideCheckbox = true;
        if (hideCheckbox) {
            if (checked) setChecked(false); // uncheck when field has value
            return null;
        }
    }
    return /*#__PURE__*/ React.createElement(Banner, null, /*#__PURE__*/ React.createElement(CheckboxInput, {
        id: "field-".concat(path.replace(/\./gi, "__")),
        onToggle: onChange,
        label: t("fallbackToDefaultLocale"),
        checked: checked
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL051bGxpZnlGaWVsZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi9maWVsZC10eXBlcy9DaGVja2JveC9JbnB1dCc7XG5pbXBvcnQgeyBCYW5uZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9CYW5uZXInO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICcuLi9Gb3JtL2NvbnRleHQnO1xuXG50eXBlIE51bGxpZnlMb2NhbGVGaWVsZFByb3BzID0ge1xuICBsb2NhbGl6ZWQ6IGJvb2xlYW5cbiAgcGF0aDogc3RyaW5nXG4gIGZpZWxkVmFsdWU/OiBudWxsIHwgW10gfCBudW1iZXJcbn1cbmV4cG9ydCBjb25zdCBOdWxsaWZ5TG9jYWxlRmllbGQ6IFJlYWN0LkZDPE51bGxpZnlMb2NhbGVGaWVsZFByb3BzPiA9ICh7IGxvY2FsaXplZCwgcGF0aCwgZmllbGRWYWx1ZSB9KSA9PiB7XG4gIGNvbnN0IHsgZGlzcGF0Y2hGaWVsZHMsIHNldE1vZGlmaWVkIH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IHsgY29kZTogY3VycmVudExvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgbG9jYWxpemF0aW9uIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHlwZW9mIGZpZWxkVmFsdWUgIT09ICdudW1iZXInKTtcbiAgY29uc3QgZGVmYXVsdExvY2FsZSA9IChsb2NhbGl6YXRpb24gJiYgbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUpID8gbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUgOiAnZW4nO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlRmFsbGJhY2sgPSAhY2hlY2tlZDtcblxuICAgIGRpc3BhdGNoRmllbGRzKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF0aCxcbiAgICAgIHZhbHVlOiB1c2VGYWxsYmFjayA/IG51bGwgOiAoZmllbGRWYWx1ZSB8fCAwKSxcbiAgICB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgICBzZXRDaGVja2VkKHVzZUZhbGxiYWNrKTtcbiAgfTtcblxuICBpZiAoIWxvY2FsaXplZCB8fCBjdXJyZW50TG9jYWxlID09PSBkZWZhdWx0TG9jYWxlIHx8IChsb2NhbGl6YXRpb24gJiYgIWxvY2FsaXphdGlvbi5mYWxsYmFjaykpIHtcbiAgICAvLyBoaWRlIHdoZW4gZmllbGQgaXMgbm90IGxvY2FsaXplZCBvciBlZGl0aW5nIGRlZmF1bHQgbG9jYWxlIG9yIHdoZW4gZmFsbGJhY2sgaXMgZGlzYWJsZWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChmaWVsZFZhbHVlKSB7XG4gICAgbGV0IGhpZGVDaGVja2JveCA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gJ251bWJlcicgJiYgZmllbGRWYWx1ZSA+IDApIGhpZGVDaGVja2JveCA9IHRydWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRWYWx1ZSkgJiYgZmllbGRWYWx1ZS5sZW5ndGggPiAwKSBoaWRlQ2hlY2tib3ggPSB0cnVlO1xuXG4gICAgaWYgKGhpZGVDaGVja2JveCkge1xuICAgICAgaWYgKGNoZWNrZWQpIHNldENoZWNrZWQoZmFsc2UpOyAvLyB1bmNoZWNrIHdoZW4gZmllbGQgaGFzIHZhbHVlXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCYW5uZXI+XG4gICAgICA8Q2hlY2tib3hJbnB1dFxuICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIG9uVG9nZ2xlPXtvbkNoYW5nZX1cbiAgICAgICAgbGFiZWw9e3QoJ2ZhbGxiYWNrVG9EZWZhdWx0TG9jYWxlJyl9XG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAvPlxuICAgIDwvQmFubmVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRyYW5zbGF0aW9uIiwiQ2hlY2tib3hJbnB1dCIsIkJhbm5lciIsInVzZUxvY2FsZSIsInVzZUNvbmZpZyIsInVzZUZvcm0iLCJOdWxsaWZ5TG9jYWxlRmllbGQiLCJsb2NhbGl6ZWQiLCJwYXRoIiwiZmllbGRWYWx1ZSIsImRpc3BhdGNoRmllbGRzIiwic2V0TW9kaWZpZWQiLCJjb2RlIiwiY3VycmVudExvY2FsZSIsImxvY2FsaXphdGlvbiIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJkZWZhdWx0TG9jYWxlIiwidCIsIm9uQ2hhbmdlIiwidXNlRmFsbGJhY2siLCJ0eXBlIiwidmFsdWUiLCJmYWxsYmFjayIsImhpZGVDaGVja2JveCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImlkIiwicmVwbGFjZSIsIm9uVG9nZ2xlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxZQUFZQSxXQUFXLFFBQVE7QUFDL0IsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxhQUFhLFFBQVEsZ0NBQWdDO0FBQzlELFNBQVNDLE1BQU0sUUFBUSx3QkFBd0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELFNBQVNDLE9BQU8sUUFBUSxrQkFBa0I7QUFPMUMsT0FBTyxJQUFNQyxxQkFBd0Q7UUFBR0Msa0JBQUFBLFdBQVdDLGFBQUFBLE1BQU1DLG1CQUFBQTtJQUN2RixJQUF3Q0osV0FBQUEsV0FBaENLLGlCQUFnQ0wsU0FBaENLLGdCQUFnQkMsY0FBZ0JOLFNBQWhCTTtJQUN4QixJQUFnQ1IsYUFBQUEsYUFBeEJTLEFBQU1DLGdCQUFrQlYsV0FBeEJTO0lBQ1IsSUFBTSxBQUFFRSxlQUFpQlYsWUFBakJVO0lBQ1IsSUFBOEJmLG1DQUFBQSxNQUFNZ0IsUUFBUSxDQUFVLE9BQU9OLGVBQWUsZUFBckVPLFVBQXVCakIsb0JBQWRrQixhQUFjbEI7SUFDOUIsSUFBTW1CLGdCQUFnQixBQUFDSixnQkFBZ0JBLGFBQWFJLGFBQWEsR0FBSUosYUFBYUksYUFBYSxHQUFHO0lBQ2xHLElBQU0sQUFBRUMsSUFBTW5CLGVBQWUsV0FBckJtQjtJQUVSLElBQU1DLFdBQVc7UUFDZixJQUFNQyxjQUFjLENBQUNMO1FBRXJCTixlQUFlO1lBQ2JZLE1BQU07WUFDTmQsTUFBQUE7WUFDQWUsT0FBT0YsY0FBYyxPQUFRWixjQUFjO1FBQzdDO1FBQ0FFLFlBQVk7UUFDWk0sV0FBV0k7SUFDYjtJQUVBLElBQUksQ0FBQ2QsYUFBYU0sa0JBQWtCSyxpQkFBa0JKLGdCQUFnQixDQUFDQSxhQUFhVSxRQUFRLEVBQUc7UUFDN0YsMEZBQTBGO1FBQzFGLE9BQU87SUFDVDtJQUVBLElBQUlmLFlBQVk7UUFDZCxJQUFJZ0IsZUFBZTtRQUNuQixJQUFJLE9BQU9oQixlQUFlLFlBQVlBLGFBQWEsR0FBR2dCLGVBQWU7UUFDckUsSUFBSUMsTUFBTUMsT0FBTyxDQUFDbEIsZUFBZUEsV0FBV21CLE1BQU0sR0FBRyxHQUFHSCxlQUFlO1FBRXZFLElBQUlBLGNBQWM7WUFDaEIsSUFBSVQsU0FBU0MsV0FBVyxRQUFRLCtCQUErQjtZQUMvRCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLG9CQUFDZiw0QkFDQyxvQkFBQ0Q7UUFDQzRCLElBQUksQUFBQyxTQUFtQyxPQUEzQnJCLEtBQUtzQixPQUFPLENBQUMsUUFBUTtRQUNsQ0MsVUFBVVg7UUFDVlksT0FBT2IsRUFBRTtRQUNUSCxTQUFTQTs7QUFJakIsRUFBRSJ9