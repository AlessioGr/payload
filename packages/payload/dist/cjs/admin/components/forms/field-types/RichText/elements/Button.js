"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    baseClass: function() {
        return baseClass;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _slatereact = require("slate-react");
var _isActive = /*#__PURE__*/ _interop_require_default(require("./isActive"));
var _toggle = /*#__PURE__*/ _interop_require_default(require("./toggle"));
var _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Tooltip"));
require("../buttons.scss");
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
var baseClass = "rich-text__button";
var ElementButton = function(props) {
    var format = props.format, children = props.children, onClick = props.onClick, className = props.className, tooltip = props.tooltip, _props_type = props.type, type = _props_type === void 0 ? "type" : _props_type, _props_el = props.el, el = _props_el === void 0 ? "button" : _props_el;
    var editor = (0, _slatereact.useSlate)();
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), showTooltip = _useState[0], setShowTooltip = _useState[1];
    var defaultOnClick = (0, _react.useCallback)(function(event) {
        event.preventDefault();
        setShowTooltip(false);
        (0, _toggle.default)(editor, format, type);
    }, [
        editor,
        format,
        type
    ]);
    var Tag = el;
    return /*#__PURE__*/ _react.default.createElement(Tag, _object_spread_props(_object_spread({}, el === "button" && {
        type: "button"
    }), {
        className: [
            baseClass,
            className,
            (0, _isActive.default)(editor, format, type) && "".concat(baseClass, "__button--active")
        ].filter(Boolean).join(" "),
        onClick: onClick || defaultOnClick,
        onMouseEnter: function() {
            return setShowTooltip(true);
        },
        onMouseLeave: function() {
            return setShowTooltip(false);
        }
    }), tooltip && /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        show: showTooltip
    }, tooltip), children);
};
var _default = ElementButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL0J1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVsZW1lbnRUeXBlLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCBpc0VsZW1lbnRBY3RpdmUgZnJvbSAnLi9pc0FjdGl2ZSc7XG5pbXBvcnQgdG9nZ2xlRWxlbWVudCBmcm9tICcuL3RvZ2dsZSc7XG5pbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvVG9vbHRpcCc7XG5cbmltcG9ydCAnLi4vYnV0dG9ucy5zY3NzJztcblxuZXhwb3J0IGNvbnN0IGJhc2VDbGFzcyA9ICdyaWNoLXRleHRfX2J1dHRvbic7XG5cbmNvbnN0IEVsZW1lbnRCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZm9ybWF0LFxuICAgIGNoaWxkcmVuLFxuICAgIG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lLFxuICAgIHRvb2x0aXAsXG4gICAgdHlwZSA9ICd0eXBlJyxcbiAgICBlbCA9ICdidXR0b24nLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGUoKTtcbiAgY29uc3QgW3Nob3dUb29sdGlwLCBzZXRTaG93VG9vbHRpcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZGVmYXVsdE9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNob3dUb29sdGlwKGZhbHNlKTtcbiAgICB0b2dnbGVFbGVtZW50KGVkaXRvciwgZm9ybWF0LCB0eXBlKTtcbiAgfSwgW2VkaXRvciwgZm9ybWF0LCB0eXBlXSk7XG5cbiAgY29uc3QgVGFnOiBFbGVtZW50VHlwZSA9IGVsO1xuXG4gIHJldHVybiAoXG4gICAgPFRhZ1xuICAgICAgey4uLmVsID09PSAnYnV0dG9uJyAmJiB7IHR5cGU6ICdidXR0b24nIH19XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGlzRWxlbWVudEFjdGl2ZShlZGl0b3IsIGZvcm1hdCwgdHlwZSkgJiYgYCR7YmFzZUNsYXNzfV9fYnV0dG9uLS1hY3RpdmVgLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgb25DbGljaz17b25DbGljayB8fCBkZWZhdWx0T25DbGlja31cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd1Rvb2x0aXAodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dUb29sdGlwKGZhbHNlKX1cbiAgICA+XG4gICAgICB7dG9vbHRpcCAmJiAoXG4gICAgICAgIDxUb29sdGlwIHNob3c9e3Nob3dUb29sdGlwfT5cbiAgICAgICAgICB7dG9vbHRpcH1cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCdXR0b247XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRWxlbWVudEJ1dHRvbiIsInByb3BzIiwiZm9ybWF0IiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwidG9vbHRpcCIsInR5cGUiLCJlbCIsImVkaXRvciIsInVzZVNsYXRlIiwidXNlU3RhdGUiLCJzaG93VG9vbHRpcCIsInNldFNob3dUb29sdGlwIiwiZGVmYXVsdE9uQ2xpY2siLCJ1c2VDYWxsYmFjayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2dnbGVFbGVtZW50IiwiVGFnIiwiaXNFbGVtZW50QWN0aXZlIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJUb29sdGlwIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFTYUEsU0FBUztlQUFUQTs7SUE4Q2IsT0FBNkI7ZUFBN0I7Ozs2REF2RDBEOzBCQUNqQzsrREFDRzs2REFDRjs4REFFTjtRQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVk7QUFFekIsSUFBTUMsZ0JBQXVDLFNBQUNDO0lBQzVDLElBQ0VDLFNBT0VELE1BUEZDLFFBQ0FDLFdBTUVGLE1BTkZFLFVBQ0FDLFVBS0VILE1BTEZHLFNBQ0FDLFlBSUVKLE1BSkZJLFdBQ0FDLFVBR0VMLE1BSEZLLHVCQUdFTCxNQUZGTSxNQUFBQSxnQ0FBTyxrQ0FFTE4sTUFERk8sSUFBQUEsNEJBQUs7SUFHUCxJQUFNQyxTQUFTQyxJQUFBQSxvQkFBUTtJQUN2QixJQUFzQ0MsNkJBQUFBLElBQUFBLGVBQVEsRUFBQyxZQUF4Q0MsY0FBK0JELGNBQWxCRSxpQkFBa0JGO0lBRXRDLElBQU1HLGlCQUFpQkMsSUFBQUEsa0JBQVcsRUFBQyxTQUFDQztRQUNsQ0EsTUFBTUMsY0FBYztRQUNwQkosZUFBZTtRQUNmSyxJQUFBQSxlQUFhLEVBQUNULFFBQVFQLFFBQVFLO0lBQ2hDLEdBQUc7UUFBQ0U7UUFBUVA7UUFBUUs7S0FBSztJQUV6QixJQUFNWSxNQUFtQlg7SUFFekIscUJBQ0UsNkJBQUNXLDZDQUNLWCxPQUFPLFlBQVk7UUFBRUQsTUFBTTtJQUFTO1FBQ3hDRixXQUFXO1lBQ1ROO1lBQ0FNO1lBQ0FlLElBQUFBLGlCQUFlLEVBQUNYLFFBQVFQLFFBQVFLLFNBQVMsQUFBQyxHQUFZLE9BQVZSLFdBQVU7U0FDdkQsQ0FBQ3NCLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO1FBQ3ZCbkIsU0FBU0EsV0FBV1U7UUFDcEJVLGNBQWM7bUJBQU1YLGVBQWU7O1FBQ25DWSxjQUFjO21CQUFNWixlQUFlOztRQUVsQ1AseUJBQ0MsNkJBQUNvQixnQkFBTztRQUFDQyxNQUFNZjtPQUNaTixVQUdKSDtBQUdQO0lBRUEsV0FBZUgifQ==