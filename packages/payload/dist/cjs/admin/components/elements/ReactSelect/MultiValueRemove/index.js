"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultiValueRemove", {
    enumerable: true,
    get: function() {
        return MultiValueRemove;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _X = /*#__PURE__*/ _interop_require_default(require("../../../icons/X"));
var _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../Tooltip"));
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
var baseClass = "multi-value-remove";
var MultiValueRemove = function(props) {
    var _props_innerProps = props.innerProps, className = _props_innerProps.className, onClick = _props_innerProps.onClick, onTouchEnd = _props_innerProps.onTouchEnd;
    var _React_useState = _sliced_to_array(_react.default.useState(false), 2), showTooltip = _React_useState[0], setShowTooltip = _React_useState[1];
    var t = (0, _reacti18next.useTranslation)("general").t;
    return /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        className: [
            baseClass,
            className
        ].filter(Boolean).join(" "),
        onMouseEnter: function() {
            return setShowTooltip(true);
        },
        onMouseLeave: function() {
            return setShowTooltip(false);
        },
        onTouchEnd: onTouchEnd,
        onClick: function(e) {
            setShowTooltip(false);
            onClick(e);
        },
        "aria-label": t("remove")
    }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        className: "".concat(baseClass, "__tooltip"),
        show: showTooltip
    }, t("remove")), /*#__PURE__*/ _react.default.createElement(_X.default, {
        className: "".concat(baseClass, "__icon")
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L011bHRpVmFsdWVSZW1vdmUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgTXVsdGlWYWx1ZVJlbW92ZVByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCBYIGZyb20gJy4uLy4uLy4uL2ljb25zL1gnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vLi4vVG9vbHRpcCc7XG5pbXBvcnQgeyBPcHRpb24gYXMgT3B0aW9uVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbXVsdGktdmFsdWUtcmVtb3ZlJztcblxuZXhwb3J0IGNvbnN0IE11bHRpVmFsdWVSZW1vdmU6IFJlYWN0LkZDPE11bHRpVmFsdWVSZW1vdmVQcm9wczxPcHRpb25UeXBlPiAmIHtcbiAgaW5uZXJQcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydidXR0b24nXVxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlubmVyUHJvcHM6IHtcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvblRvdWNoRW5kLFxuICAgIH0sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbc2hvd1Rvb2x0aXAsIHNldFNob3dUb29sdGlwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNob3dUb29sdGlwKHRydWUpfVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaG93VG9vbHRpcChmYWxzZSl9XG4gICAgICBvblRvdWNoRW5kPXtvblRvdWNoRW5kfVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgc2V0U2hvd1Rvb2x0aXAoZmFsc2UpO1xuICAgICAgICBvbkNsaWNrKGUpO1xuICAgICAgfX1cbiAgICAgIGFyaWEtbGFiZWw9e3QoJ3JlbW92ZScpfVxuICAgID5cbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9vbHRpcGB9XG4gICAgICAgIHNob3c9e3Nob3dUb29sdGlwfVxuICAgICAgPlxuICAgICAgICB7dCgncmVtb3ZlJyl9XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgICA8WCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ljb25gfSAvPlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJNdWx0aVZhbHVlUmVtb3ZlIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJpbm5lclByb3BzIiwiY2xhc3NOYW1lIiwib25DbGljayIsIm9uVG91Y2hFbmQiLCJSZWFjdCIsInVzZVN0YXRlIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImJ1dHRvbiIsInR5cGUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImUiLCJhcmlhLWxhYmVsIiwiVG9vbHRpcCIsInNob3ciLCJYIl0sIm1hcHBpbmdzIjoiOzs7OytCQVdhQTs7O2VBQUFBOzs7NERBWEs7NEJBQ2E7d0RBRWpCOzhEQUNNO1FBR2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQyxZQUFZO0FBRVgsSUFBTUQsbUJBRVIsU0FBQ0U7SUFDSix3QkFNSUEsTUFMRkMsWUFDRUMsOEJBQUFBLFdBQ0FDLDRCQUFBQSxTQUNBQywrQkFBQUE7SUFJSixJQUFzQ0MsbUNBQUFBLGNBQUssQ0FBQ0MsUUFBUSxDQUFDLFlBQTlDQyxjQUErQkYsb0JBQWxCRyxpQkFBa0JIO0lBQ3RDLElBQU0sQUFBRUksSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxXQUFyQkQ7SUFFUixxQkFDRSw2QkFBQ0U7UUFDQ0MsTUFBSztRQUNMVixXQUFXO1lBQ1RIO1lBQ0FHO1NBQ0QsQ0FBQ1csTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkJDLGNBQWM7bUJBQU1SLGVBQWU7O1FBQ25DUyxjQUFjO21CQUFNVCxlQUFlOztRQUNuQ0osWUFBWUE7UUFDWkQsU0FBUyxTQUFDZTtZQUNSVixlQUFlO1lBQ2ZMLFFBQVFlO1FBQ1Y7UUFDQUMsY0FBWVYsRUFBRTtxQkFFZCw2QkFBQ1csZ0JBQU87UUFDTmxCLFdBQVcsQUFBQyxHQUFZLE9BQVZILFdBQVU7UUFDeEJzQixNQUFNZDtPQUVMRSxFQUFFLDBCQUVMLDZCQUFDYSxVQUFDO1FBQUNwQixXQUFXLEFBQUMsR0FBWSxPQUFWSCxXQUFVOztBQUdqQyJ9