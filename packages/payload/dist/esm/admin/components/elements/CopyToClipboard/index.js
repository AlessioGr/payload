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
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Copy from "../../icons/Copy";
import Tooltip from "../Tooltip";
import "./index.scss";
var baseClass = "copy-to-clipboard";
var CopyToClipboard = function(param) {
    var value = param.value, defaultMessage = param.defaultMessage, successMessage = param.successMessage;
    var ref = useRef(null);
    var _useState = _sliced_to_array(useState(false), 2), copied = _useState[0], setCopied = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), hovered = _useState1[0], setHovered = _useState1[1];
    var t = useTranslation("general").t;
    if (value) {
        return /*#__PURE__*/ React.createElement("button", {
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
        }, /*#__PURE__*/ React.createElement(Copy, null), /*#__PURE__*/ React.createElement(Tooltip, {
            show: hovered || copied,
            delay: copied ? 0 : undefined
        }, copied && (successMessage !== null && successMessage !== void 0 ? successMessage : t("copied")), !copied && (defaultMessage !== null && defaultMessage !== void 0 ? defaultMessage : t("copy"))), /*#__PURE__*/ React.createElement("textarea", {
            readOnly: true,
            tabIndex: -1,
            value: value,
            ref: ref
        }));
    }
    return null;
};
export default CopyToClipboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0NvcHlUb0NsaXBib2FyZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IENvcHkgZnJvbSAnLi4vLi4vaWNvbnMvQ29weSc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi9Ub29sdGlwJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvcHktdG8tY2xpcGJvYXJkJztcblxuY29uc3QgQ29weVRvQ2xpcGJvYXJkOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICB2YWx1ZSxcbiAgZGVmYXVsdE1lc3NhZ2UsXG4gIHN1Y2Nlc3NNZXNzYWdlLFxufSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcGllZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGlmICh2YWx1ZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgIHNldEhvdmVyZWQodHJ1ZSk7XG4gICAgICAgICAgc2V0Q29waWVkKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgc2V0SG92ZXJlZChmYWxzZSk7XG4gICAgICAgICAgc2V0Q29waWVkKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgaWYgKHJlZiAmJiByZWYuY3VycmVudCkge1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuc2VsZWN0KCk7XG4gICAgICAgICAgICByZWYuY3VycmVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCB2YWx1ZS5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgICAgICBzZXRDb3BpZWQodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29weSAvPlxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIHNob3c9e2hvdmVyZWQgfHwgY29waWVkfVxuICAgICAgICAgIGRlbGF5PXtjb3BpZWQgPyAwIDogdW5kZWZpbmVkfVxuICAgICAgICA+XG4gICAgICAgICAge2NvcGllZCAmJiAoc3VjY2Vzc01lc3NhZ2UgPz8gdCgnY29waWVkJykpfVxuICAgICAgICAgIHshY29waWVkICYmIChkZWZhdWx0TWVzc2FnZSA/PyB0KCdjb3B5JykpfVxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlUb0NsaXBib2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJDb3B5IiwiVG9vbHRpcCIsImJhc2VDbGFzcyIsIkNvcHlUb0NsaXBib2FyZCIsInZhbHVlIiwiZGVmYXVsdE1lc3NhZ2UiLCJzdWNjZXNzTWVzc2FnZSIsInJlZiIsImNvcGllZCIsInNldENvcGllZCIsImhvdmVyZWQiLCJzZXRIb3ZlcmVkIiwidCIsImJ1dHRvbiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInR5cGUiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY3VycmVudCIsInNlbGVjdCIsInNldFNlbGVjdGlvblJhbmdlIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsInNob3ciLCJkZWxheSIsInVuZGVmaW5lZCIsInRleHRhcmVhIiwicmVhZE9ubHkiLCJ0YWJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLE1BQU0sRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDaEQsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxVQUFVLG1CQUFtQjtBQUNwQyxPQUFPQyxhQUFhLGFBQWE7QUFHakMsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsa0JBQW1DO1FBQ3ZDQyxjQUFBQSxPQUNBQyx1QkFBQUEsZ0JBQ0FDLHVCQUFBQTtJQUVBLElBQU1DLE1BQU1WLE9BQU87SUFDbkIsSUFBNEJDLDZCQUFBQSxTQUFTLFlBQTlCVSxTQUFxQlYsY0FBYlcsWUFBYVg7SUFDNUIsSUFBOEJBLDhCQUFBQSxTQUFTLFlBQWhDWSxVQUF1QlosZUFBZGEsYUFBY2I7SUFDOUIsSUFBTSxBQUFFYyxJQUFNYixlQUFlLFdBQXJCYTtJQUVSLElBQUlSLE9BQU87UUFDVCxxQkFDRSxvQkFBQ1M7WUFDQ0MsY0FBYztnQkFDWkgsV0FBVztnQkFDWEYsVUFBVTtZQUNaO1lBQ0FNLGNBQWM7Z0JBQ1pKLFdBQVc7Z0JBQ1hGLFVBQVU7WUFDWjtZQUNBTyxNQUFLO1lBQ0xDLFdBQVdmO1lBQ1hnQixTQUFTO2dCQUNQLElBQUlYLE9BQU9BLElBQUlZLE9BQU8sRUFBRTtvQkFDdEJaLElBQUlZLE9BQU8sQ0FBQ0MsTUFBTTtvQkFDbEJiLElBQUlZLE9BQU8sQ0FBQ0UsaUJBQWlCLENBQUMsR0FBR2pCLE1BQU1rQixNQUFNLEdBQUc7b0JBQ2hEQyxTQUFTQyxXQUFXLENBQUM7b0JBQ3JCZixVQUFVO2dCQUNaO1lBQ0Y7eUJBRUEsb0JBQUNULDJCQUNELG9CQUFDQztZQUNDd0IsTUFBTWYsV0FBV0Y7WUFDakJrQixPQUFPbEIsU0FBUyxJQUFJbUI7V0FFbkJuQixVQUFXRixDQUFBQSwyQkFBQUEsNEJBQUFBLGlCQUFrQk0sRUFBRSxTQUFRLEdBQ3ZDLENBQUNKLFVBQVdILENBQUFBLDJCQUFBQSw0QkFBQUEsaUJBQWtCTyxFQUFFLE9BQU0sa0JBRXpDLG9CQUFDZ0I7WUFDQ0MsVUFBQUE7WUFDQUMsVUFBVSxDQUFDO1lBQ1gxQixPQUFPQTtZQUNQRyxLQUFLQTs7SUFJYjtJQUVBLE9BQU87QUFDVDtBQUVBLGVBQWVKLGdCQUFnQiJ9