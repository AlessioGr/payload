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
var _Copy = /*#__PURE__*/ _interop_require_default(require("../../icons/Copy"));
var _Tooltip = /*#__PURE__*/ _interop_require_default(require("../Tooltip"));
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
var baseClass = "copy-to-clipboard";
var CopyToClipboard = function(param) {
    var value = param.value, defaultMessage = param.defaultMessage, successMessage = param.successMessage;
    var ref = (0, _react.useRef)(null);
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), copied = _useState[0], setCopied = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), hovered = _useState1[0], setHovered = _useState1[1];
    var t = (0, _reacti18next.useTranslation)("general").t;
    if (value) {
        return /*#__PURE__*/ _react.default.createElement("button", {
            onMouseEnter: function() {
                setHovered(true);
                setCopied(false);
            },
            onMouseLeave: function() {
                setHovered(false);
                setCopied(false);
            },
            type: "button",
            className: baseClass,
            onClick: function() {
                if (ref && ref.current) {
                    ref.current.select();
                    ref.current.setSelectionRange(0, value.length + 1);
                    document.execCommand("copy");
                    setCopied(true);
                }
            }
        }, /*#__PURE__*/ _react.default.createElement(_Copy.default, null), /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
            show: hovered || copied,
            delay: copied ? 0 : undefined
        }, copied && (successMessage !== null && successMessage !== void 0 ? successMessage : t("copied")), !copied && (defaultMessage !== null && defaultMessage !== void 0 ? defaultMessage : t("copy"))), /*#__PURE__*/ _react.default.createElement("textarea", {
            readOnly: true,
            tabIndex: -1,
            value: value,
            ref: ref
        }));
    }
    return null;
};
var _default = CopyToClipboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvcHlUb0NsaXBib2FyZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IENvcHkgZnJvbSAnLi4vLi4vaWNvbnMvQ29weSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi9Ub29sdGlwJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvcHktdG8tY2xpcGJvYXJkJztcblxuY29uc3QgQ29weVRvQ2xpcGJvYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICB2YWx1ZSxcbiAgZGVmYXVsdE1lc3NhZ2UsXG4gIHN1Y2Nlc3NNZXNzYWdlLFxufSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGlmICh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgIHNldEhvdmVyZWQodHJ1ZSk7XG4gICAgICAgICAgc2V0Q29waWVkKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SG92ZXJlZChmYWxzZSk7XG4gICAgICAgICAgc2V0Q29waWVkKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHJlZiAmJiByZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuc2VsZWN0KCk7XG4gICAgICAgICAgICByZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB2YWx1ZS5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgICAgICBzZXRDb3BpZWQodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29weSAvPlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIHNob3c9e2hvdmVyZWQgfHwgY29waWVkfVxuICAgICAgICAgIGRlbGF5PXtjb3BpZWQgPyAwIDogdW5kZWZpbmVkfVxuICAgICAgICA+XG4gICAgICAgICAge2NvcGllZCAmJiAoc3VjY2Vzc01lc3NhZ2UgPz8gdCgnY29waWVkJykpfVxuICAgICAgICAgIHshY29waWVkICYmIChkZWZhdWx0TWVzc2FnZSA/PyB0KCdjb3B5JykpfVxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlUb0NsaXBib2FyZDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJDb3B5VG9DbGlwYm9hcmQiLCJ2YWx1ZSIsImRlZmF1bHRNZXNzYWdlIiwic3VjY2Vzc01lc3NhZ2UiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImNvcGllZCIsInNldENvcGllZCIsImhvdmVyZWQiLCJzZXRIb3ZlcmVkIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiYnV0dG9uIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwidHlwZSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJjdXJyZW50Iiwic2VsZWN0Iiwic2V0U2VsZWN0aW9uUmFuZ2UiLCJsZW5ndGgiLCJkb2N1bWVudCIsImV4ZWNDb21tYW5kIiwiQ29weSIsIlRvb2x0aXAiLCJzaG93IiwiZGVsYXkiLCJ1bmRlZmluZWQiLCJ0ZXh0YXJlYSIsInJlYWRPbmx5IiwidGFiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7K0JBK0RBOzs7ZUFBQTs7OzZEQS9Ed0M7NEJBQ1Q7MkRBQ2Q7OERBQ0c7UUFHYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsa0JBQW1DO1FBQ3ZDQyxjQUFBQSxPQUNBQyx1QkFBQUEsZ0JBQ0FDLHVCQUFBQTtJQUVBLElBQU1DLE1BQU1DLElBQUFBLGFBQU0sRUFBQztJQUNuQixJQUE0QkMsNkJBQUFBLElBQUFBLGVBQVEsRUFBQyxZQUE5QkMsU0FBcUJELGNBQWJFLFlBQWFGO0lBQzVCLElBQThCQSw4QkFBQUEsSUFBQUEsZUFBUSxFQUFDLFlBQWhDRyxVQUF1QkgsZUFBZEksYUFBY0o7SUFDOUIsSUFBTSxBQUFFSyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFdBQXJCRDtJQUVSLElBQUlWLE9BQU87UUFDVCxxQkFDRSw2QkFBQ1k7WUFDQ0MsY0FBYztnQkFDWkosV0FBVztnQkFDWEYsVUFBVTtZQUNaO1lBQ0FPLGNBQWM7Z0JBQ1pMLFdBQVc7Z0JBQ1hGLFVBQVU7WUFDWjtZQUNBUSxNQUFLO1lBQ0xDLFdBQVdsQjtZQUNYbUIsU0FBUztnQkFDUCxJQUFJZCxPQUFPQSxJQUFJZSxPQUFPLEVBQUU7b0JBQ3RCZixJQUFJZSxPQUFPLENBQUNDLE1BQU07b0JBQ2xCaEIsSUFBSWUsT0FBTyxDQUFDRSxpQkFBaUIsQ0FBQyxHQUFHcEIsTUFBTXFCLE1BQU0sR0FBRztvQkFDaERDLFNBQVNDLFdBQVcsQ0FBQztvQkFDckJoQixVQUFVO2dCQUNaO1lBQ0Y7eUJBRUEsNkJBQUNpQixhQUFJLHVCQUNMLDZCQUFDQyxnQkFBTztZQUNOQyxNQUFNbEIsV0FBV0Y7WUFDakJxQixPQUFPckIsU0FBUyxJQUFJc0I7V0FFbkJ0QixVQUFXSixDQUFBQSwyQkFBQUEsNEJBQUFBLGlCQUFrQlEsRUFBRSxTQUFRLEdBQ3ZDLENBQUNKLFVBQVdMLENBQUFBLDJCQUFBQSw0QkFBQUEsaUJBQWtCUyxFQUFFLE9BQU0sa0JBRXpDLDZCQUFDbUI7WUFDQ0MsVUFBQUE7WUFDQUMsVUFBVSxDQUFDO1lBQ1gvQixPQUFPQTtZQUNQRyxLQUFLQTs7SUFJYjtJQUVBLE9BQU87QUFDVDtJQUVBLFdBQWVKIn0=