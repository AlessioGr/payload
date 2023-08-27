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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactselect = /*#__PURE__*/ _interop_require_default(require("react-select"));
var _creatable = /*#__PURE__*/ _interop_require_default(require("react-select/creatable"));
var _reacti18next = require("react-i18next");
var _sortable = require("@dnd-kit/sortable");
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _getTranslation = require("../../../../utilities/getTranslation");
var _SingleValue = require("./SingleValue");
var _MultiValueLabel = require("./MultiValueLabel");
var _MultiValue = require("./MultiValue");
var _ValueContainer = require("./ValueContainer");
var _ClearIndicator = require("./ClearIndicator");
var _MultiValueRemove = require("./MultiValueRemove");
var _Control = require("./Control");
var _DraggableSortable = /*#__PURE__*/ _interop_require_default(require("../DraggableSortable"));
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var createOption = function(label) {
    return {
        label: label,
        value: label
    };
};
var SelectAdapter = function(props) {
    var _useTranslation = (0, _reacti18next.useTranslation)(), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _React_useState = _sliced_to_array(_react.default.useState(""), 2), inputValue = _React_useState[0], setInputValue = _React_useState[1]; // for creatable select
    var className = props.className, showError = props.showError, options = props.options, onChange = props.onChange, value = props.value, _props_disabled = props.disabled, disabled = _props_disabled === void 0 ? false : _props_disabled, _props_placeholder = props.placeholder, placeholder = _props_placeholder === void 0 ? t("general:selectValue") : _props_placeholder, _props_isSearchable = props.isSearchable, isSearchable = _props_isSearchable === void 0 ? true : _props_isSearchable, _props_isClearable = props.isClearable, isClearable = _props_isClearable === void 0 ? true : _props_isClearable, _props_filterOption = props.filterOption, filterOption = _props_filterOption === void 0 ? undefined : _props_filterOption, _props_numberOnly = props.numberOnly, numberOnly = _props_numberOnly === void 0 ? false : _props_numberOnly, isLoading = props.isLoading, onMenuOpen = props.onMenuOpen, components = props.components, isCreatable = props.isCreatable, selectProps = props.selectProps, noOptionsMessage = props.noOptionsMessage;
    var classes = [
        className,
        "react-select",
        showError && "react-select--error"
    ].filter(Boolean).join(" ");
    if (!isCreatable) {
        return /*#__PURE__*/ _react.default.createElement(_reactselect.default, _object_spread_props(_object_spread({
            isLoading: isLoading,
            placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
            captureMenuScroll: true,
            customProps: selectProps
        }, props), {
            value: value,
            onChange: onChange,
            isDisabled: disabled,
            className: classes,
            classNamePrefix: "rs",
            options: options,
            isSearchable: isSearchable,
            isClearable: isClearable,
            filterOption: filterOption,
            onMenuOpen: onMenuOpen,
            menuPlacement: "auto",
            noOptionsMessage: noOptionsMessage,
            components: _object_spread({
                ValueContainer: _ValueContainer.ValueContainer,
                SingleValue: _SingleValue.SingleValue,
                MultiValue: _MultiValue.MultiValue,
                MultiValueLabel: _MultiValueLabel.MultiValueLabel,
                MultiValueRemove: _MultiValueRemove.MultiValueRemove,
                DropdownIndicator: _Chevron.default,
                ClearIndicator: _ClearIndicator.ClearIndicator,
                Control: _Control.Control
            }, components)
        }));
    }
    var handleKeyDown = function(event) {
        // eslint-disable-next-line no-restricted-globals
        if (numberOnly === true) {
            var acceptableKeys = [
                "Tab",
                "Escape",
                "Backspace",
                "Enter",
                "ArrowRight",
                "ArrowLeft",
                "ArrowUp",
                "ArrowDown"
            ];
            var isNumber = !/[^0-9]/.test(event.key);
            var isActionKey = acceptableKeys.includes(event.key);
            if (!isNumber && !isActionKey) {
                event.preventDefault();
                return;
            }
        }
        if (!value || !inputValue || inputValue.trim() === "") return;
        if (filterOption && !filterOption(null, inputValue)) {
            return;
        }
        switch(event.key){
            case "Enter":
            case "Tab":
                onChange(_to_consumable_array(value).concat([
                    createOption(inputValue)
                ]));
                setInputValue("");
                event.preventDefault();
                break;
            default:
                break;
        }
    };
    return /*#__PURE__*/ _react.default.createElement(_creatable.default, _object_spread_props(_object_spread({
        isLoading: isLoading,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        captureMenuScroll: true
    }, props), {
        value: value,
        onChange: onChange,
        isDisabled: disabled,
        className: classes,
        classNamePrefix: "rs",
        options: options,
        isSearchable: isSearchable,
        isClearable: isClearable,
        filterOption: filterOption,
        onMenuOpen: onMenuOpen,
        menuPlacement: "auto",
        inputValue: inputValue,
        onInputChange: function(newValue) {
            return setInputValue(newValue);
        },
        onKeyDown: handleKeyDown,
        noOptionsMessage: noOptionsMessage,
        components: _object_spread({
            ValueContainer: _ValueContainer.ValueContainer,
            SingleValue: _SingleValue.SingleValue,
            MultiValue: _MultiValue.MultiValue,
            MultiValueLabel: _MultiValueLabel.MultiValueLabel,
            MultiValueRemove: _MultiValueRemove.MultiValueRemove,
            DropdownIndicator: _Chevron.default,
            ClearIndicator: _ClearIndicator.ClearIndicator,
            Control: _Control.Control
        }, components)
    }));
};
var SortableSelect = function(props) {
    var _value, _value1;
    var onChange = props.onChange, value = props.value;
    var ids = [];
    var _item_id;
    if (value) ids = Array.isArray(value) ? value.map(function(item) {
        var _item, _item1;
        return (_item_id = (_item = item) === null || _item === void 0 ? void 0 : _item.id) !== null && _item_id !== void 0 ? _item_id : "".concat((_item1 = item) === null || _item1 === void 0 ? void 0 : _item1.value);
    }) : [
        ((_value = value) === null || _value === void 0 ? void 0 : _value.id) || "".concat((_value1 = value) === null || _value1 === void 0 ? void 0 : _value1.value)
    ];
    return /*#__PURE__*/ _react.default.createElement(_DraggableSortable.default, {
        ids: ids,
        className: "react-select-container",
        onDragEnd: function(param) {
            var moveFromIndex = param.moveFromIndex, moveToIndex = param.moveToIndex;
            var sorted = value;
            if (value && Array.isArray(value)) {
                sorted = (0, _sortable.arrayMove)(value, moveFromIndex, moveToIndex);
            }
            onChange(sorted);
        }
    }, /*#__PURE__*/ _react.default.createElement(SelectAdapter, props));
};
var ReactSelect = function(props) {
    var isMulti = props.isMulti, isSortable = props.isSortable;
    if (isMulti && isSortable) {
        return /*#__PURE__*/ _react.default.createElement(SortableSelect, props);
    }
    return /*#__PURE__*/ _react.default.createElement(SelectAdapter, props);
};
var _default = ReactSelect;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgS2V5Ym9hcmRFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IFByb3BzIGFzIFJlYWN0U2VsZWN0QWRhcHRlclByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgQ2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFNpbmdsZVZhbHVlIH0gZnJvbSAnLi9TaW5nbGVWYWx1ZSc7XG5pbXBvcnQgeyBNdWx0aVZhbHVlTGFiZWwgfSBmcm9tICcuL011bHRpVmFsdWVMYWJlbCc7XG5pbXBvcnQgeyBNdWx0aVZhbHVlIH0gZnJvbSAnLi9NdWx0aVZhbHVlJztcbmltcG9ydCB7IFZhbHVlQ29udGFpbmVyIH0gZnJvbSAnLi9WYWx1ZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBDbGVhckluZGljYXRvciB9IGZyb20gJy4vQ2xlYXJJbmRpY2F0b3InO1xuaW1wb3J0IHsgTXVsdGlWYWx1ZVJlbW92ZSB9IGZyb20gJy4vTXVsdGlWYWx1ZVJlbW92ZSc7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBEcmFnZ2FibGVTb3J0YWJsZSBmcm9tICcuLi9EcmFnZ2FibGVTb3J0YWJsZSc7XG5pbXBvcnQgdHlwZSB7IE9wdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbiA9IChsYWJlbDogc3RyaW5nKSA9PiAoe1xuICBsYWJlbCxcbiAgdmFsdWU6IGxhYmVsLFxufSk7XG5cblxuY29uc3QgU2VsZWN0QWRhcHRlcjogUmVhY3QuRkM8UmVhY3RTZWxlY3RBZGFwdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpOyAvLyBmb3IgY3JlYXRhYmxlIHNlbGVjdFxuXG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIG9wdGlvbnMsXG4gICAgb25DaGFuZ2UsXG4gICAgdmFsdWUsXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICBwbGFjZWhvbGRlciA9IHQoJ2dlbmVyYWw6c2VsZWN0VmFsdWUnKSxcbiAgICBpc1NlYXJjaGFibGUgPSB0cnVlLFxuICAgIGlzQ2xlYXJhYmxlID0gdHJ1ZSxcbiAgICBmaWx0ZXJPcHRpb24gPSB1bmRlZmluZWQsXG4gICAgbnVtYmVyT25seSA9IGZhbHNlLFxuICAgIGlzTG9hZGluZyxcbiAgICBvbk1lbnVPcGVuLFxuICAgIGNvbXBvbmVudHMsXG4gICAgaXNDcmVhdGFibGUsXG4gICAgc2VsZWN0UHJvcHMsXG4gICAgbm9PcHRpb25zTWVzc2FnZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgY2xhc3NOYW1lLFxuICAgICdyZWFjdC1zZWxlY3QnLFxuICAgIHNob3dFcnJvciAmJiAncmVhY3Qtc2VsZWN0LS1lcnJvcicsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBpZiAoIWlzQ3JlYXRhYmxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgIGNhcHR1cmVNZW51U2Nyb2xsXG4gICAgICAgIGN1c3RvbVByb3BzPXtzZWxlY3RQcm9wc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgaXNEaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwicnNcIlxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBpc1NlYXJjaGFibGU9e2lzU2VhcmNoYWJsZX1cbiAgICAgICAgaXNDbGVhcmFibGU9e2lzQ2xlYXJhYmxlfVxuICAgICAgICBmaWx0ZXJPcHRpb249e2ZpbHRlck9wdGlvbn1cbiAgICAgICAgb25NZW51T3Blbj17b25NZW51T3Blbn1cbiAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgICBub09wdGlvbnNNZXNzYWdlPXtub09wdGlvbnNNZXNzYWdlfVxuICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgVmFsdWVDb250YWluZXIsXG4gICAgICAgICAgU2luZ2xlVmFsdWUsXG4gICAgICAgICAgTXVsdGlWYWx1ZSxcbiAgICAgICAgICBNdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgTXVsdGlWYWx1ZVJlbW92ZSxcbiAgICAgICAgICBEcm9wZG93bkluZGljYXRvcjogQ2hldnJvbixcbiAgICAgICAgICBDbGVhckluZGljYXRvcixcbiAgICAgICAgICBDb250cm9sLFxuICAgICAgICAgIC4uLmNvbXBvbmVudHMsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgY29uc3QgaGFuZGxlS2V5RG93bjogS2V5Ym9hcmRFdmVudEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgaWYgKG51bWJlck9ubHkgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGFjY2VwdGFibGVLZXlzID0gWydUYWInLCAnRXNjYXBlJywgJ0JhY2tzcGFjZScsICdFbnRlcicsICdBcnJvd1JpZ2h0JywgJ0Fycm93TGVmdCcsICdBcnJvd1VwJywgJ0Fycm93RG93biddO1xuICAgICAgY29uc3QgaXNOdW1iZXIgPSAhL1teMC05XS8udGVzdChldmVudC5rZXkpO1xuICAgICAgY29uc3QgaXNBY3Rpb25LZXkgPSBhY2NlcHRhYmxlS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpO1xuICAgICAgaWYgKCFpc051bWJlciAmJiAhaXNBY3Rpb25LZXkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXZhbHVlIHx8ICFpbnB1dFZhbHVlIHx8IGlucHV0VmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuO1xuICAgIGlmIChmaWx0ZXJPcHRpb24gJiYgIWZpbHRlck9wdGlvbihudWxsLCBpbnB1dFZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgb25DaGFuZ2UoWy4uLnZhbHVlIGFzIE9wdGlvbltdLCBjcmVhdGVPcHRpb24oaW5wdXRWYWx1ZSldKTtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Q3JlYXRhYmxlU2VsZWN0XG4gICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICBjYXB0dXJlTWVudVNjcm9sbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgaXNEaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBjbGFzc05hbWVQcmVmaXg9XCJyc1wiXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgaXNTZWFyY2hhYmxlPXtpc1NlYXJjaGFibGV9XG4gICAgICBpc0NsZWFyYWJsZT17aXNDbGVhcmFibGV9XG4gICAgICBmaWx0ZXJPcHRpb249e2ZpbHRlck9wdGlvbn1cbiAgICAgIG9uTWVudU9wZW49e29uTWVudU9wZW59XG4gICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgb25JbnB1dENoYW5nZT17KG5ld1ZhbHVlKSA9PiBzZXRJbnB1dFZhbHVlKG5ld1ZhbHVlKX1cbiAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U9e25vT3B0aW9uc01lc3NhZ2V9XG4gICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgIFZhbHVlQ29udGFpbmVyLFxuICAgICAgICBTaW5nbGVWYWx1ZSxcbiAgICAgICAgTXVsdGlWYWx1ZSxcbiAgICAgICAgTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICBNdWx0aVZhbHVlUmVtb3ZlLFxuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogQ2hldnJvbixcbiAgICAgICAgQ2xlYXJJbmRpY2F0b3IsXG4gICAgICAgIENvbnRyb2wsXG4gICAgICAgIC4uLmNvbXBvbmVudHMsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBTb3J0YWJsZVNlbGVjdDogUmVhY3QuRkM8UmVhY3RTZWxlY3RBZGFwdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvbkNoYW5nZSxcbiAgICB2YWx1ZSxcbiAgfSA9IHByb3BzO1xuXG5cbiAgbGV0IGlkczogc3RyaW5nW10gPSBbXTtcbiAgaWYgKHZhbHVlKSBpZHMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCgoaXRlbSkgPT4gaXRlbT8uaWQgPz8gYCR7aXRlbT8udmFsdWV9YCBhcyBzdHJpbmcpIDogW3ZhbHVlPy5pZCB8fCBgJHt2YWx1ZT8udmFsdWV9YCBhcyBzdHJpbmddO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ2dhYmxlU29ydGFibGVcbiAgICAgIGlkcz17aWRzfVxuICAgICAgY2xhc3NOYW1lPVwicmVhY3Qtc2VsZWN0LWNvbnRhaW5lclwiXG4gICAgICBvbkRyYWdFbmQ9eyh7IG1vdmVGcm9tSW5kZXgsIG1vdmVUb0luZGV4IH0pID0+IHtcbiAgICAgICAgbGV0IHNvcnRlZCA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBzb3J0ZWQgPSBhcnJheU1vdmUodmFsdWUsIG1vdmVGcm9tSW5kZXgsIG1vdmVUb0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBvbkNoYW5nZShzb3J0ZWQpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8U2VsZWN0QWRhcHRlciB7Li4ucHJvcHN9IC8+XG4gICAgPC9EcmFnZ2FibGVTb3J0YWJsZT5cbiAgKTtcbn07XG5cbmNvbnN0IFJlYWN0U2VsZWN0OiBSZWFjdC5GQzxSZWFjdFNlbGVjdEFkYXB0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlzTXVsdGksXG4gICAgaXNTb3J0YWJsZSxcbiAgfSA9IHByb3BzO1xuXG4gIGlmIChpc011bHRpICYmIGlzU29ydGFibGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNvcnRhYmxlU2VsZWN0IHsuLi5wcm9wc30gLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0QWRhcHRlciB7Li4ucHJvcHN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFNlbGVjdDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVPcHRpb24iLCJsYWJlbCIsInZhbHVlIiwiU2VsZWN0QWRhcHRlciIsInByb3BzIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsIlJlYWN0IiwidXNlU3RhdGUiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImNsYXNzTmFtZSIsInNob3dFcnJvciIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwicGxhY2Vob2xkZXIiLCJpc1NlYXJjaGFibGUiLCJpc0NsZWFyYWJsZSIsImZpbHRlck9wdGlvbiIsInVuZGVmaW5lZCIsIm51bWJlck9ubHkiLCJpc0xvYWRpbmciLCJvbk1lbnVPcGVuIiwiY29tcG9uZW50cyIsImlzQ3JlYXRhYmxlIiwic2VsZWN0UHJvcHMiLCJub09wdGlvbnNNZXNzYWdlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiU2VsZWN0IiwiZ2V0VHJhbnNsYXRpb24iLCJjYXB0dXJlTWVudVNjcm9sbCIsImN1c3RvbVByb3BzIiwiaXNEaXNhYmxlZCIsImNsYXNzTmFtZVByZWZpeCIsIm1lbnVQbGFjZW1lbnQiLCJWYWx1ZUNvbnRhaW5lciIsIlNpbmdsZVZhbHVlIiwiTXVsdGlWYWx1ZSIsIk11bHRpVmFsdWVMYWJlbCIsIk11bHRpVmFsdWVSZW1vdmUiLCJEcm9wZG93bkluZGljYXRvciIsIkNoZXZyb24iLCJDbGVhckluZGljYXRvciIsIkNvbnRyb2wiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJhY2NlcHRhYmxlS2V5cyIsImlzTnVtYmVyIiwidGVzdCIsImtleSIsImlzQWN0aW9uS2V5IiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJDcmVhdGFibGVTZWxlY3QiLCJvbklucHV0Q2hhbmdlIiwibmV3VmFsdWUiLCJvbktleURvd24iLCJTb3J0YWJsZVNlbGVjdCIsImlkcyIsIml0ZW0iLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpZCIsIkRyYWdnYWJsZVNvcnRhYmxlIiwib25EcmFnRW5kIiwibW92ZUZyb21JbmRleCIsIm1vdmVUb0luZGV4Iiwic29ydGVkIiwiYXJyYXlNb3ZlIiwiUmVhY3RTZWxlY3QiLCJpc011bHRpIiwiaXNTb3J0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF1TUE7OztlQUFBOzs7NERBdk00QztrRUFDekI7Z0VBQ1M7NEJBQ0c7d0JBQ0w7OERBRU47OEJBQ1c7MkJBQ0g7K0JBQ0k7MEJBQ0w7OEJBQ0k7OEJBQ0E7Z0NBQ0U7dUJBQ1Q7d0VBQ007UUFHdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsZUFBZSxTQUFDQztXQUFtQjtRQUN2Q0EsT0FBQUE7UUFDQUMsT0FBT0Q7SUFDVDs7QUFHQSxJQUFNRSxnQkFBbUQsU0FBQ0M7SUFDeEQsSUFBb0JDLGtCQUFBQSxJQUFBQSw0QkFBYyxLQUExQkMsSUFBWUQsZ0JBQVpDLEdBQUdDLE9BQVNGLGdCQUFURTtJQUNYLElBQW9DQyxtQ0FBQUEsY0FBSyxDQUFDQyxRQUFRLENBQUMsU0FBNUNDLGFBQTZCRixvQkFBakJHLGdCQUFpQkgsb0JBQW9CLHVCQUF1QjtJQUUvRSxJQUNFSSxZQWlCRVIsTUFqQkZRLFdBQ0FDLFlBZ0JFVCxNQWhCRlMsV0FDQUMsVUFlRVYsTUFmRlUsU0FDQUMsV0FjRVgsTUFkRlcsVUFDQWIsUUFhRUUsTUFiRkYseUJBYUVFLE1BWkZZLFVBQUFBLHdDQUFXLDhDQVlUWixNQVhGYSxh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