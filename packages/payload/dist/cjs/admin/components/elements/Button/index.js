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
var _Plus = /*#__PURE__*/ _interop_require_default(require("../../icons/Plus"));
var _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _Edit = /*#__PURE__*/ _interop_require_default(require("../../icons/Edit"));
var _Swap = /*#__PURE__*/ _interop_require_default(require("../../icons/Swap"));
var _Link = /*#__PURE__*/ _interop_require_default(require("../../icons/Link"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
var icons = {
    plus: _Plus.default,
    x: _X.default,
    chevron: _Chevron.default,
    edit: _Edit.default,
    swap: _Swap.default,
    link: _Link.default
};
var baseClass = "btn";
var ButtonContents = function(param) {
    var children = param.children, icon = param.icon, tooltip = param.tooltip, showTooltip = param.showTooltip;
    var BuiltInIcon = icons[icon];
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, tooltip && /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        className: "".concat(baseClass, "__tooltip"),
        show: showTooltip
    }, tooltip), /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__content")
    }, children && /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__label")
    }, children), icon && /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__icon")
    }, /*#__PURE__*/ (0, _react.isValidElement)(icon) && icon, BuiltInIcon && /*#__PURE__*/ _react.default.createElement(BuiltInIcon, null))));
};
var Button = /*#__PURE__*/ (0, _react.forwardRef)(function(props, ref) {
    var handleClick = function handleClick(event) {
        setShowTooltip(false);
        if (type !== "submit" && onClick) event.preventDefault();
        if (onClick) onClick(event);
    };
    var className = props.className, id = props.id, _props_type = props.type, type = _props_type === void 0 ? "button" : _props_type, _props_el = props.el, el = _props_el === void 0 ? "button" : _props_el, to = props.to, url = props.url, children = props.children, onClick = props.onClick, disabled = props.disabled, icon = props.icon, _props_iconStyle = props.iconStyle, iconStyle = _props_iconStyle === void 0 ? "without-border" : _props_iconStyle, _props_buttonStyle = props.buttonStyle, buttonStyle = _props_buttonStyle === void 0 ? "primary" : _props_buttonStyle, round = props.round, _props_size = props.size, size = _props_size === void 0 ? "medium" : _props_size, _props_iconPosition = props.iconPosition, iconPosition = _props_iconPosition === void 0 ? "right" : _props_iconPosition, newTab = props.newTab, tooltip = props.tooltip, ariaLabel = props["aria-label"];
    var _React_useState = _sliced_to_array(_react.default.useState(false), 2), showTooltip = _React_useState[0], setShowTooltip = _React_useState[1];
    var classes = [
        baseClass,
        className && className,
        buttonStyle && "".concat(baseClass, "--style-").concat(buttonStyle),
        icon && "".concat(baseClass, "--icon"),
        iconStyle && "".concat(baseClass, "--icon-style-").concat(iconStyle),
        icon && !children && "".concat(baseClass, "--icon-only"),
        disabled && "".concat(baseClass, "--disabled"),
        round && "".concat(baseClass, "--round"),
        size && "".concat(baseClass, "--size-").concat(size),
        iconPosition && "".concat(baseClass, "--icon-position-").concat(iconPosition),
        tooltip && "".concat(baseClass, "--has-tooltip")
    ].filter(Boolean).join(" ");
    var buttonProps = {
        id: id,
        type: type,
        className: classes,
        disabled: disabled,
        "aria-disabled": disabled,
        "aria-label": ariaLabel,
        onMouseEnter: tooltip ? function() {
            return setShowTooltip(true);
        } : undefined,
        onMouseLeave: tooltip ? function() {
            return setShowTooltip(false);
        } : undefined,
        onClick: !disabled ? handleClick : undefined,
        rel: newTab ? "noopener noreferrer" : undefined,
        target: newTab ? "_blank" : undefined
    };
    switch(el){
        case "link":
            return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, _object_spread_props(_object_spread({}, buttonProps), {
                to: to || url
            }), /*#__PURE__*/ _react.default.createElement(ButtonContents, {
                icon: icon,
                tooltip: tooltip,
                showTooltip: showTooltip
            }, children));
        case "anchor":
            return /*#__PURE__*/ _react.default.createElement("a", _object_spread_props(_object_spread({}, buttonProps), {
                ref: ref,
                href: url
            }), /*#__PURE__*/ _react.default.createElement(ButtonContents, {
                icon: icon,
                tooltip: tooltip,
                showTooltip: showTooltip
            }, children));
        default:
            var Tag = el; // eslint-disable-line no-case-declarations
            return /*#__PURE__*/ _react.default.createElement(Tag, _object_spread({
                type: "submit",
                ref: ref
            }, buttonProps), /*#__PURE__*/ _react.default.createElement(ButtonContents, {
                icon: icon,
                tooltip: tooltip,
                showTooltip: showTooltip
            }, children));
    }
});
var _default = Button;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0J1dHRvbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIEZyYWdtZW50LCBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCBwbHVzIGZyb20gJy4uLy4uL2ljb25zL1BsdXMnO1xuaW1wb3J0IHggZnJvbSAnLi4vLi4vaWNvbnMvWCc7XG5pbXBvcnQgY2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJztcbmltcG9ydCBlZGl0IGZyb20gJy4uLy4uL2ljb25zL0VkaXQnO1xuaW1wb3J0IHN3YXAgZnJvbSAnLi4vLi4vaWNvbnMvU3dhcCc7XG5pbXBvcnQgbGlua0ljb24gZnJvbSAnLi4vLi4vaWNvbnMvTGluayc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi9Ub29sdGlwJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBpY29ucyA9IHtcbiAgcGx1cyxcbiAgeCxcbiAgY2hldnJvbixcbiAgZWRpdCxcbiAgc3dhcCxcbiAgbGluazogbGlua0ljb24sXG59O1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnYnRuJztcblxuY29uc3QgQnV0dG9uQ29udGVudHMgPSAoeyBjaGlsZHJlbiwgaWNvbiwgdG9vbHRpcCwgc2hvd1Rvb2x0aXAgfSkgPT4ge1xuICBjb25zdCBCdWlsdEluSWNvbiA9IGljb25zW2ljb25dO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge3Rvb2x0aXAgJiYgKFxuICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9vbHRpcGB9XG4gICAgICAgICAgc2hvdz17c2hvd1Rvb2x0aXB9XG4gICAgICAgID5cbiAgICAgICAgICB7dG9vbHRpcH1cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PlxuICAgICAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICAgIHtpY29uICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ljb25gfT5cbiAgICAgICAgICAgIHtpc1ZhbGlkRWxlbWVudChpY29uKSAmJiBpY29ufVxuICAgICAgICAgICAge0J1aWx0SW5JY29uICYmIDxCdWlsdEluSWNvbiAvPn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L3NwYW4+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmNvbnN0IEJ1dHRvbiA9IGZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQgfCBIVE1MQW5jaG9yRWxlbWVudCwgUHJvcHM+KChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgaWQsXG4gICAgdHlwZSA9ICdidXR0b24nLFxuICAgIGVsID0gJ2J1dHRvbicsXG4gICAgdG8sXG4gICAgdXJsLFxuICAgIGNoaWxkcmVuLFxuICAgIG9uQ2xpY2ssXG4gICAgZGlzYWJsZWQsXG4gICAgaWNvbixcbiAgICBpY29uU3R5bGUgPSAnd2l0aG91dC1ib3JkZXInLFxuICAgIGJ1dHRvblN0eWxlID0gJ3ByaW1hcnknLFxuICAgIHJvdW5kLFxuICAgIHNpemUgPSAnbWVkaXVtJyxcbiAgICBpY29uUG9zaXRpb24gPSAncmlnaHQnLFxuICAgIG5ld1RhYixcbiAgICB0b29sdGlwLFxuICAgICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3Nob3dUb29sdGlwLCBzZXRTaG93VG9vbHRpcF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lICYmIGNsYXNzTmFtZSxcbiAgICBidXR0b25TdHlsZSAmJiBgJHtiYXNlQ2xhc3N9LS1zdHlsZS0ke2J1dHRvblN0eWxlfWAsXG4gICAgaWNvbiAmJiBgJHtiYXNlQ2xhc3N9LS1pY29uYCxcbiAgICBpY29uU3R5bGUgJiYgYCR7YmFzZUNsYXNzfS0taWNvbi1zdHlsZS0ke2ljb25TdHlsZX1gLFxuICAgIChpY29uICYmICFjaGlsZHJlbikgJiYgYCR7YmFzZUNsYXNzfS0taWNvbi1vbmx5YCxcbiAgICBkaXNhYmxlZCAmJiBgJHtiYXNlQ2xhc3N9LS1kaXNhYmxlZGAsXG4gICAgcm91bmQgJiYgYCR7YmFzZUNsYXNzfS0tcm91bmRgLFxuICAgIHNpemUgJiYgYCR7YmFzZUNsYXNzfS0tc2l6ZS0ke3NpemV9YCxcbiAgICBpY29uUG9zaXRpb24gJiYgYCR7YmFzZUNsYXNzfS0taWNvbi1wb3NpdGlvbi0ke2ljb25Qb3NpdGlvbn1gLFxuICAgIHRvb2x0aXAgJiYgYCR7YmFzZUNsYXNzfS0taGFzLXRvb2x0aXBgLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBzZXRTaG93VG9vbHRpcChmYWxzZSk7XG4gICAgaWYgKHR5cGUgIT09ICdzdWJtaXQnICYmIG9uQ2xpY2spIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuICB9XG5cbiAgY29uc3QgYnV0dG9uUHJvcHMgPSB7XG4gICAgaWQsXG4gICAgdHlwZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgZGlzYWJsZWQsXG4gICAgJ2FyaWEtZGlzYWJsZWQnOiBkaXNhYmxlZCxcbiAgICAnYXJpYS1sYWJlbCc6IGFyaWFMYWJlbCxcbiAgICBvbk1vdXNlRW50ZXI6IHRvb2x0aXAgPyAoKSA9PiBzZXRTaG93VG9vbHRpcCh0cnVlKSA6IHVuZGVmaW5lZCxcbiAgICBvbk1vdXNlTGVhdmU6IHRvb2x0aXAgPyAoKSA9PiBzZXRTaG93VG9vbHRpcChmYWxzZSkgOiB1bmRlZmluZWQsXG4gICAgb25DbGljazogIWRpc2FibGVkID8gaGFuZGxlQ2xpY2sgOiB1bmRlZmluZWQsXG4gICAgcmVsOiBuZXdUYWIgPyAnbm9vcGVuZXIgbm9yZWZlcnJlcicgOiB1bmRlZmluZWQsXG4gICAgdGFyZ2V0OiBuZXdUYWIgPyAnX2JsYW5rJyA6IHVuZGVmaW5lZCxcbiAgfTtcblxuICBzd2l0Y2ggKGVsKSB7XG4gICAgY2FzZSAnbGluayc6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgIHsuLi5idXR0b25Qcm9wc31cbiAgICAgICAgICB0bz17dG8gfHwgdXJsfVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvbkNvbnRlbnRzXG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgdG9vbHRpcD17dG9vbHRpcH1cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXtzaG93VG9vbHRpcH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9CdXR0b25Db250ZW50cz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKTtcblxuICAgIGNhc2UgJ2FuY2hvcic6XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YVxuICAgICAgICAgIHsuLi5idXR0b25Qcm9wc31cbiAgICAgICAgICByZWY9e3JlZiBhcyBSZWFjdC5MZWdhY3lSZWY8SFRNTEFuY2hvckVsZW1lbnQ+fVxuICAgICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25Db250ZW50c1xuICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgIHRvb2x0aXA9e3Rvb2x0aXB9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvQnV0dG9uQ29udGVudHM+XG4gICAgICAgIDwvYT5cbiAgICAgICk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgY29uc3QgVGFnID0gZWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY2FzZS1kZWNsYXJhdGlvbnNcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRhZ1xuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgIHsuLi5idXR0b25Qcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25Db250ZW50c1xuICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgIHRvb2x0aXA9e3Rvb2x0aXB9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvQnV0dG9uQ29udGVudHM+XG4gICAgICAgIDwvVGFnPlxuICAgICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJpY29ucyIsInBsdXMiLCJ4IiwiY2hldnJvbiIsImVkaXQiLCJzd2FwIiwibGluayIsImxpbmtJY29uIiwiYmFzZUNsYXNzIiwiQnV0dG9uQ29udGVudHMiLCJjaGlsZHJlbiIsImljb24iLCJ0b29sdGlwIiwic2hvd1Rvb2x0aXAiLCJCdWlsdEluSWNvbiIsIkZyYWdtZW50IiwiVG9vbHRpcCIsImNsYXNzTmFtZSIsInNob3ciLCJzcGFuIiwiaXNWYWxpZEVsZW1lbnQiLCJCdXR0b24iLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJoYW5kbGVDbGljayIsImV2ZW50Iiwic2V0U2hvd1Rvb2x0aXAiLCJ0eXBlIiwib25DbGljayIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJlbCIsInRvIiwidXJsIiwiZGlzYWJsZWQiLCJpY29uU3R5bGUiLCJidXR0b25TdHlsZSIsInJvdW5kIiwic2l6ZSIsImljb25Qb3NpdGlvbiIsIm5ld1RhYiIsImFyaWFMYWJlbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJidXR0b25Qcm9wcyIsIm9uTW91c2VFbnRlciIsInVuZGVmaW5lZCIsIm9uTW91c2VMZWF2ZSIsInJlbCIsInRhcmdldCIsIkxpbmsiLCJhIiwiaHJlZiIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3S0E7OztlQUFBOzs7NkRBeEs0RDs4QkFDdkM7MkRBR0o7d0RBQ0g7OERBQ007MkRBQ0g7MkRBQ0E7MkRBQ0k7OERBQ0Q7UUFFYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxRQUFRO0lBQ1pDLE1BQUFBLGFBQUk7SUFDSkMsR0FBQUEsVUFBQztJQUNEQyxTQUFBQSxnQkFBTztJQUNQQyxNQUFBQSxhQUFJO0lBQ0pDLE1BQUFBLGFBQUk7SUFDSkMsTUFBTUMsYUFBUTtBQUNoQjtBQUVBLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsaUJBQWlCO1FBQUdDLGlCQUFBQSxVQUFVQyxhQUFBQSxNQUFNQyxnQkFBQUEsU0FBU0Msb0JBQUFBO0lBQ2pELElBQU1DLGNBQWNkLEtBQUssQ0FBQ1csS0FBSztJQUUvQixxQkFDRSw2QkFBQ0ksZUFBUSxRQUNOSCx5QkFDQyw2QkFBQ0ksZ0JBQU87UUFDTkMsV0FBVyxBQUFDLEdBQVksT0FBVlQsV0FBVTtRQUN4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