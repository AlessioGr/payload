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
import React, { useCallback, useState } from "react";
import { useSlate } from "slate-react";
import isElementActive from "./isActive";
import toggleElement from "./toggle";
import Tooltip from "../../../../elements/Tooltip";
import "../buttons.scss";
export var baseClass = "rich-text__button";
var ElementButton = function(props) {
    var format = props.format, children = props.children, onClick = props.onClick, className = props.className, tooltip = props.tooltip, _props_type = props.type, type = _props_type === void 0 ? "type" : _props_type, _props_el = props.el, el = _props_el === void 0 ? "button" : _props_el;
    var editor = useSlate();
    var _useState = _sliced_to_array(useState(false), 2), showTooltip = _useState[0], setShowTooltip = _useState[1];
    var defaultOnClick = useCallback(function(event) {
        event.preventDefault();
        setShowTooltip(false);
        toggleElement(editor, format, type);
    }, [
        editor,
        format,
        type
    ]);
    var Tag = el;
    return /*#__PURE__*/ React.createElement(Tag, _object_spread_props(_object_spread({}, el === "button" && {
        type: "button"
    }), {
        className: [
            baseClass,
            className,
            isElementActive(editor, format, type) && "".concat(baseClass, "__button--active")
        ].filter(Boolean).join(" "),
        onClick: onClick || defaultOnClick,
        onMouseEnter: function() {
            return setShowTooltip(true);
        },
        onMouseLeave: function() {
            return setShowTooltip(false);
        }
    }), tooltip && /*#__PURE__*/ React.createElement(Tooltip, {
        show: showTooltip
    }, tooltip), children);
};
export default ElementButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL0J1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEVsZW1lbnRUeXBlLCB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTbGF0ZSB9IGZyb20gJ3NsYXRlLXJlYWN0JztcbmltcG9ydCBpc0VsZW1lbnRBY3RpdmUgZnJvbSAnLi9pc0FjdGl2ZSc7XG5pbXBvcnQgdG9nZ2xlRWxlbWVudCBmcm9tICcuL3RvZ2dsZSc7XG5pbXBvcnQgeyBCdXR0b25Qcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvVG9vbHRpcCc7XG5cbmltcG9ydCAnLi4vYnV0dG9ucy5zY3NzJztcblxuZXhwb3J0IGNvbnN0IGJhc2VDbGFzcyA9ICdyaWNoLXRleHRfX2J1dHRvbic7XG5cbmNvbnN0IEVsZW1lbnRCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZm9ybWF0LFxuICAgIGNoaWxkcmVuLFxuICAgIG9uQ2xpY2ssXG4gICAgY2xhc3NOYW1lLFxuICAgIHRvb2x0aXAsXG4gICAgdHlwZSA9ICd0eXBlJyxcbiAgICBlbCA9ICdidXR0b24nLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGUoKTtcbiAgY29uc3QgW3Nob3dUb29sdGlwLCBzZXRTaG93VG9vbHRpcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgZGVmYXVsdE9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFNob3dUb29sdGlwKGZhbHNlKTtcbiAgICB0b2dnbGVFbGVtZW50KGVkaXRvciwgZm9ybWF0LCB0eXBlKTtcbiAgfSwgW2VkaXRvciwgZm9ybWF0LCB0eXBlXSk7XG5cbiAgY29uc3QgVGFnOiBFbGVtZW50VHlwZSA9IGVsO1xuXG4gIHJldHVybiAoXG4gICAgPFRhZ1xuICAgICAgey4uLmVsID09PSAnYnV0dG9uJyAmJiB7IHR5cGU6ICdidXR0b24nIH19XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGlzRWxlbWVudEFjdGl2ZShlZGl0b3IsIGZvcm1hdCwgdHlwZSkgJiYgYCR7YmFzZUNsYXNzfV9fYnV0dG9uLS1hY3RpdmVgLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgb25DbGljaz17b25DbGljayB8fCBkZWZhdWx0T25DbGlja31cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd1Rvb2x0aXAodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dUb29sdGlwKGZhbHNlKX1cbiAgICA+XG4gICAgICB7dG9vbHRpcCAmJiAoXG4gICAgICAgIDxUb29sdGlwIHNob3c9e3Nob3dUb29sdGlwfT5cbiAgICAgICAgICB7dG9vbHRpcH1cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhZz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVsZW1lbnRCdXR0b247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwidXNlU2xhdGUiLCJpc0VsZW1lbnRBY3RpdmUiLCJ0b2dnbGVFbGVtZW50IiwiVG9vbHRpcCIsImJhc2VDbGFzcyIsIkVsZW1lbnRCdXR0b24iLCJwcm9wcyIsImZvcm1hdCIsImNoaWxkcmVuIiwib25DbGljayIsImNsYXNzTmFtZSIsInRvb2x0aXAiLCJ0eXBlIiwiZWwiLCJlZGl0b3IiLCJzaG93VG9vbHRpcCIsInNldFNob3dUb29sdGlwIiwiZGVmYXVsdE9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiVGFnIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJzaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQXNCQyxXQUFXLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQ2xFLFNBQVNDLFFBQVEsUUFBUSxjQUFjO0FBQ3ZDLE9BQU9DLHFCQUFxQixhQUFhO0FBQ3pDLE9BQU9DLG1CQUFtQixXQUFXO0FBRXJDLE9BQU9DLGFBQWEsK0JBQStCO0FBRW5ELE9BQU8sa0JBQWtCO0FBRXpCLE9BQU8sSUFBTUMsWUFBWSxvQkFBb0I7QUFFN0MsSUFBTUMsZ0JBQXVDLFNBQUNDO0lBQzVDLElBQ0VDLFNBT0VELE1BUEZDLFFBQ0FDLFdBTUVGLE1BTkZFLFVBQ0FDLFVBS0VILE1BTEZHLFNBQ0FDLFlBSUVKLE1BSkZJLFdBQ0FDLFVBR0VMLE1BSEZLLHVCQUdFTCxNQUZGTSxNQUFBQSxnQ0FBTyxrQ0FFTE4sTUFERk8sSUFBQUEsNEJBQUs7SUFHUCxJQUFNQyxTQUFTZDtJQUNmLElBQXNDRCw2QkFBQUEsU0FBUyxZQUF4Q2dCLGNBQStCaEIsY0FBbEJpQixpQkFBa0JqQjtJQUV0QyxJQUFNa0IsaUJBQWlCbkIsWUFBWSxTQUFDb0I7UUFDbENBLE1BQU1DLGNBQWM7UUFDcEJILGVBQWU7UUFDZmQsY0FBY1ksUUFBUVAsUUFBUUs7SUFDaEMsR0FBRztRQUFDRTtRQUFRUDtRQUFRSztLQUFLO0lBRXpCLElBQU1RLE1BQW1CUDtJQUV6QixxQkFDRSxvQkFBQ08sNkNBQ0tQLE9BQU8sWUFBWTtRQUFFRCxNQUFNO0lBQVM7UUFDeENGLFdBQVc7WUFDVE47WUFDQU07WUFDQVQsZ0JBQWdCYSxRQUFRUCxRQUFRSyxTQUFTLEFBQUMsR0FBWSxPQUFWUixXQUFVO1NBQ3ZELENBQUNpQixNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUN2QmQsU0FBU0EsV0FBV1E7UUFDcEJPLGNBQWM7bUJBQU1SLGVBQWU7O1FBQ25DUyxjQUFjO21CQUFNVCxlQUFlOztRQUVsQ0wseUJBQ0Msb0JBQUNSO1FBQVF1QixNQUFNWDtPQUNaSixVQUdKSDtBQUdQO0FBRUEsZUFBZUgsY0FBYyJ9