"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NullifyLocaleField", {
    enumerable: true,
    get: function() {
        return NullifyLocaleField;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Input = require("../field-types/Checkbox/Input");
var _Banner = require("../../elements/Banner");
var _Locale = require("../../utilities/Locale");
var _Config = require("../../utilities/Config");
var _context = require("../Form/context");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var NullifyLocaleField = function(param) {
    var localized = param.localized, path = param.path, fieldValue = param.fieldValue;
    var _useForm = (0, _context.useForm)(), dispatchFields = _useForm.dispatchFields, setModified = _useForm.setModified;
    var _useLocale = (0, _Locale.useLocale)(), currentLocale = _useLocale.code;
    var localization = (0, _Config.useConfig)().localization;
    var _React_useState = _sliced_to_array(_react.useState(typeof fieldValue !== "number"), 2), checked = _React_useState[0], setChecked = _React_useState[1];
    var defaultLocale = localization && localization.defaultLocale ? localization.defaultLocale : "en";
    var t = (0, _reacti18next.useTranslation)("general").t;
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
    return /*#__PURE__*/ _react.createElement(_Banner.Banner, null, /*#__PURE__*/ _react.createElement(_Input.CheckboxInput, {
        id: "field-".concat(path.replace(/\./gi, "__")),
        onToggle: onChange,
        label: t("fallbackToDefaultLocale"),
        checked: checked
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL051bGxpZnlGaWVsZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tICcuLi9maWVsZC10eXBlcy9DaGVja2JveC9JbnB1dCc7XG5pbXBvcnQgeyBCYW5uZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9CYW5uZXInO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICcuLi9Gb3JtL2NvbnRleHQnO1xuXG50eXBlIE51bGxpZnlMb2NhbGVGaWVsZFByb3BzID0ge1xuICBsb2NhbGl6ZWQ6IGJvb2xlYW5cbiAgcGF0aDogc3RyaW5nXG4gIGZpZWxkVmFsdWU/OiBudWxsIHwgW10gfCBudW1iZXJcbn1cbmV4cG9ydCBjb25zdCBOdWxsaWZ5TG9jYWxlRmllbGQ6IFJlYWN0LkZDPE51bGxpZnlMb2NhbGVGaWVsZFByb3BzPiA9ICh7IGxvY2FsaXplZCwgcGF0aCwgZmllbGRWYWx1ZSB9KSA9PiB7XG4gIGNvbnN0IHsgZGlzcGF0Y2hGaWVsZHMsIHNldE1vZGlmaWVkIH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IHsgY29kZTogY3VycmVudExvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgbG9jYWxpemF0aW9uIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHlwZW9mIGZpZWxkVmFsdWUgIT09ICdudW1iZXInKTtcbiAgY29uc3QgZGVmYXVsdExvY2FsZSA9IChsb2NhbGl6YXRpb24gJiYgbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUpID8gbG9jYWxpemF0aW9uLmRlZmF1bHRMb2NhbGUgOiAnZW4nO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlRmFsbGJhY2sgPSAhY2hlY2tlZDtcblxuICAgIGRpc3BhdGNoRmllbGRzKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF0aCxcbiAgICAgIHZhbHVlOiB1c2VGYWxsYmFjayA/IG51bGwgOiAoZmllbGRWYWx1ZSB8fCAwKSxcbiAgICB9KTtcbiAgICBzZXRNb2RpZmllZCh0cnVlKTtcbiAgICBzZXRDaGVja2VkKHVzZUZhbGxiYWNrKTtcbiAgfTtcblxuICBpZiAoIWxvY2FsaXplZCB8fCBjdXJyZW50TG9jYWxlID09PSBkZWZhdWx0TG9jYWxlIHx8IChsb2NhbGl6YXRpb24gJiYgIWxvY2FsaXphdGlvbi5mYWxsYmFjaykpIHtcbiAgICAvLyBoaWRlIHdoZW4gZmllbGQgaXMgbm90IGxvY2FsaXplZCBvciBlZGl0aW5nIGRlZmF1bHQgbG9jYWxlIG9yIHdoZW4gZmFsbGJhY2sgaXMgZGlzYWJsZWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChmaWVsZFZhbHVlKSB7XG4gICAgbGV0IGhpZGVDaGVja2JveCA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2YgZmllbGRWYWx1ZSA9PT0gJ251bWJlcicgJiYgZmllbGRWYWx1ZSA+IDApIGhpZGVDaGVja2JveCA9IHRydWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGRWYWx1ZSkgJiYgZmllbGRWYWx1ZS5sZW5ndGggPiAwKSBoaWRlQ2hlY2tib3ggPSB0cnVlO1xuXG4gICAgaWYgKGhpZGVDaGVja2JveCkge1xuICAgICAgaWYgKGNoZWNrZWQpIHNldENoZWNrZWQoZmFsc2UpOyAvLyB1bmNoZWNrIHdoZW4gZmllbGQgaGFzIHZhbHVlXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCYW5uZXI+XG4gICAgICA8Q2hlY2tib3hJbnB1dFxuICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIG9uVG9nZ2xlPXtvbkNoYW5nZX1cbiAgICAgICAgbGFiZWw9e3QoJ2ZhbGxiYWNrVG9EZWZhdWx0TG9jYWxlJyl9XG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAvPlxuICAgIDwvQmFubmVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJOdWxsaWZ5TG9jYWxlRmllbGQiLCJsb2NhbGl6ZWQiLCJwYXRoIiwiZmllbGRWYWx1ZSIsInVzZUZvcm0iLCJkaXNwYXRjaEZpZWxkcyIsInNldE1vZGlmaWVkIiwidXNlTG9jYWxlIiwiY29kZSIsImN1cnJlbnRMb2NhbGUiLCJsb2NhbGl6YXRpb24iLCJ1c2VDb25maWciLCJSZWFjdCIsInVzZVN0YXRlIiwiY2hlY2tlZCIsInNldENoZWNrZWQiLCJkZWZhdWx0TG9jYWxlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwib25DaGFuZ2UiLCJ1c2VGYWxsYmFjayIsInR5cGUiLCJ2YWx1ZSIsImZhbGxiYWNrIiwiaGlkZUNoZWNrYm94IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiQmFubmVyIiwiQ2hlY2tib3hJbnB1dCIsImlkIiwicmVwbGFjZSIsIm9uVG9nZ2xlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYWFBOzs7ZUFBQUE7Ozs2REFiVTs0QkFDUTtxQkFDRDtzQkFDUDtzQkFDRztzQkFDQTt1QkFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakIsSUFBTUEscUJBQXdEO1FBQUdDLGtCQUFBQSxXQUFXQyxhQUFBQSxNQUFNQyxtQkFBQUE7SUFDdkYsSUFBd0NDLFdBQUFBLElBQUFBLGdCQUFPLEtBQXZDQyxpQkFBZ0NELFNBQWhDQyxnQkFBZ0JDLGNBQWdCRixTQUFoQkU7SUFDeEIsSUFBZ0NDLGFBQUFBLElBQUFBLGlCQUFTLEtBQWpDQyxBQUFNQyxnQkFBa0JGLFdBQXhCQztJQUNSLElBQU0sQUFBRUUsZUFBaUJDLElBQUFBLGlCQUFTLElBQTFCRDtJQUNSLElBQThCRSxtQ0FBQUEsT0FBTUMsUUFBUSxDQUFVLE9BQU9WLGVBQWUsZUFBckVXLFVBQXVCRixvQkFBZEcsYUFBY0g7SUFDOUIsSUFBTUksZ0JBQWdCLEFBQUNOLGdCQUFnQkEsYUFBYU0sYUFBYSxHQUFJTixhQUFhTSxhQUFhLEdBQUc7SUFDbEcsSUFBTSxBQUFFQyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFdBQXJCRDtJQUVSLElBQU1FLFdBQVc7UUFDZixJQUFNQyxjQUFjLENBQUNOO1FBRXJCVCxlQUFlO1lBQ2JnQixNQUFNO1lBQ05uQixNQUFBQTtZQUNBb0IsT0FBT0YsY0FBYyxPQUFRakIsY0FBYztRQUM3QztRQUNBRyxZQUFZO1FBQ1pTLFdBQVdLO0lBQ2I7SUFFQSxJQUFJLENBQUNuQixhQUFhUSxrQkFBa0JPLGlCQUFrQk4sZ0JBQWdCLENBQUNBLGFBQWFhLFFBQVEsRUFBRztRQUM3RiwwRkFBMEY7UUFDMUYsT0FBTztJQUNUO0lBRUEsSUFBSXBCLFlBQVk7UUFDZCxJQUFJcUIsZUFBZTtRQUNuQixJQUFJLE9BQU9yQixlQUFlLFlBQVlBLGFBQWEsR0FBR3FCLGVBQWU7UUFDckUsSUFBSUMsTUFBTUMsT0FBTyxDQUFDdkIsZUFBZUEsV0FBV3dCLE1BQU0sR0FBRyxHQUFHSCxlQUFlO1FBRXZFLElBQUlBLGNBQWM7WUFDaEIsSUFBSVYsU0FBU0MsV0FBVyxRQUFRLCtCQUErQjtZQUMvRCxPQUFPO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLHFCQUFDYSxjQUFNLHNCQUNMLHFCQUFDQyxvQkFBYTtRQUNaQyxJQUFJLEFBQUMsU0FBbUMsT0FBM0I1QixLQUFLNkIsT0FBTyxDQUFDLFFBQVE7UUFDbENDLFVBQVViO1FBQ1ZjLE9BQU9oQixFQUFFO1FBQ1RILFNBQVNBOztBQUlqQiJ9