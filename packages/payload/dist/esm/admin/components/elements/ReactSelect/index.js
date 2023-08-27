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
import React from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { useTranslation } from "react-i18next";
import { arrayMove } from "@dnd-kit/sortable";
import Chevron from "../../icons/Chevron";
import { getTranslation } from "../../../../utilities/getTranslation";
import { SingleValue } from "./SingleValue";
import { MultiValueLabel } from "./MultiValueLabel";
import { MultiValue } from "./MultiValue";
import { ValueContainer } from "./ValueContainer";
import { ClearIndicator } from "./ClearIndicator";
import { MultiValueRemove } from "./MultiValueRemove";
import { Control } from "./Control";
import DraggableSortable from "../DraggableSortable";
import "./index.scss";
var createOption = function(label) {
    return {
        label: label,
        value: label
    };
};
var SelectAdapter = function(props) {
    var _useTranslation = useTranslation(), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _React_useState = _sliced_to_array(React.useState(""), 2), inputValue = _React_useState[0], setInputValue = _React_useState[1]; // for creatable select
    var className = props.className, showError = props.showError, options = props.options, onChange = props.onChange, value = props.value, _props_disabled = props.disabled, disabled = _props_disabled === void 0 ? false : _props_disabled, _props_placeholder = props.placeholder, placeholder = _props_placeholder === void 0 ? t("general:selectValue") : _props_placeholder, _props_isSearchable = props.isSearchable, isSearchable = _props_isSearchable === void 0 ? true : _props_isSearchable, _props_isClearable = props.isClearable, isClearable = _props_isClearable === void 0 ? true : _props_isClearable, _props_filterOption = props.filterOption, filterOption = _props_filterOption === void 0 ? undefined : _props_filterOption, _props_numberOnly = props.numberOnly, numberOnly = _props_numberOnly === void 0 ? false : _props_numberOnly, isLoading = props.isLoading, onMenuOpen = props.onMenuOpen, components = props.components, isCreatable = props.isCreatable, selectProps = props.selectProps, noOptionsMessage = props.noOptionsMessage;
    var classes = [
        className,
        "react-select",
        showError && "react-select--error"
    ].filter(Boolean).join(" ");
    if (!isCreatable) {
        return /*#__PURE__*/ React.createElement(Select, _object_spread_props(_object_spread({
            isLoading: isLoading,
            placeholder: getTranslation(placeholder, i18n),
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
                ValueContainer: ValueContainer,
                SingleValue: SingleValue,
                MultiValue: MultiValue,
                MultiValueLabel: MultiValueLabel,
                MultiValueRemove: MultiValueRemove,
                DropdownIndicator: Chevron,
                ClearIndicator: ClearIndicator,
                Control: Control
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
    return /*#__PURE__*/ React.createElement(CreatableSelect, _object_spread_props(_object_spread({
        isLoading: isLoading,
        placeholder: getTranslation(placeholder, i18n),
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
            ValueContainer: ValueContainer,
            SingleValue: SingleValue,
            MultiValue: MultiValue,
            MultiValueLabel: MultiValueLabel,
            MultiValueRemove: MultiValueRemove,
            DropdownIndicator: Chevron,
            ClearIndicator: ClearIndicator,
            Control: Control
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
    return /*#__PURE__*/ React.createElement(DraggableSortable, {
        ids: ids,
        className: "react-select-container",
        onDragEnd: function(param) {
            var moveFromIndex = param.moveFromIndex, moveToIndex = param.moveToIndex;
            var sorted = value;
            if (value && Array.isArray(value)) {
                sorted = arrayMove(value, moveFromIndex, moveToIndex);
            }
            onChange(sorted);
        }
    }, /*#__PURE__*/ React.createElement(SelectAdapter, props));
};
var ReactSelect = function(props) {
    var isMulti = props.isMulti, isSortable = props.isSortable;
    if (isMulti && isSortable) {
        return /*#__PURE__*/ React.createElement(SortableSelect, props);
    }
    return /*#__PURE__*/ React.createElement(SelectAdapter, props);
};
export default ReactSelect;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgS2V5Ym9hcmRFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgQ3JlYXRhYmxlU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9jcmVhdGFibGUnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IGFycmF5TW92ZSB9IGZyb20gJ0BkbmQta2l0L3NvcnRhYmxlJztcbmltcG9ydCB7IFByb3BzIGFzIFJlYWN0U2VsZWN0QWRhcHRlclByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgQ2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFNpbmdsZVZhbHVlIH0gZnJvbSAnLi9TaW5nbGVWYWx1ZSc7XG5pbXBvcnQgeyBNdWx0aVZhbHVlTGFiZWwgfSBmcm9tICcuL011bHRpVmFsdWVMYWJlbCc7XG5pbXBvcnQgeyBNdWx0aVZhbHVlIH0gZnJvbSAnLi9NdWx0aVZhbHVlJztcbmltcG9ydCB7IFZhbHVlQ29udGFpbmVyIH0gZnJvbSAnLi9WYWx1ZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBDbGVhckluZGljYXRvciB9IGZyb20gJy4vQ2xlYXJJbmRpY2F0b3InO1xuaW1wb3J0IHsgTXVsdGlWYWx1ZVJlbW92ZSB9IGZyb20gJy4vTXVsdGlWYWx1ZVJlbW92ZSc7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi9Db250cm9sJztcbmltcG9ydCBEcmFnZ2FibGVTb3J0YWJsZSBmcm9tICcuLi9EcmFnZ2FibGVTb3J0YWJsZSc7XG5pbXBvcnQgdHlwZSB7IE9wdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGNyZWF0ZU9wdGlvbiA9IChsYWJlbDogc3RyaW5nKSA9PiAoe1xuICBsYWJlbCxcbiAgdmFsdWU6IGxhYmVsLFxufSk7XG5cblxuY29uc3QgU2VsZWN0QWRhcHRlcjogUmVhY3QuRkM8UmVhY3RTZWxlY3RBZGFwdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpOyAvLyBmb3IgY3JlYXRhYmxlIHNlbGVjdFxuXG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIG9wdGlvbnMsXG4gICAgb25DaGFuZ2UsXG4gICAgdmFsdWUsXG4gICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICBwbGFjZWhvbGRlciA9IHQoJ2dlbmVyYWw6c2VsZWN0VmFsdWUnKSxcbiAgICBpc1NlYXJjaGFibGUgPSB0cnVlLFxuICAgIGlzQ2xlYXJhYmxlID0gdHJ1ZSxcbiAgICBmaWx0ZXJPcHRpb24gPSB1bmRlZmluZWQsXG4gICAgbnVtYmVyT25seSA9IGZhbHNlLFxuICAgIGlzTG9hZGluZyxcbiAgICBvbk1lbnVPcGVuLFxuICAgIGNvbXBvbmVudHMsXG4gICAgaXNDcmVhdGFibGUsXG4gICAgc2VsZWN0UHJvcHMsXG4gICAgbm9PcHRpb25zTWVzc2FnZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgY2xhc3NOYW1lLFxuICAgICdyZWFjdC1zZWxlY3QnLFxuICAgIHNob3dFcnJvciAmJiAncmVhY3Qtc2VsZWN0LS1lcnJvcicsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBpZiAoIWlzQ3JlYXRhYmxlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgIGNhcHR1cmVNZW51U2Nyb2xsXG4gICAgICAgIGN1c3RvbVByb3BzPXtzZWxlY3RQcm9wc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgaXNEaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwicnNcIlxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBpc1NlYXJjaGFibGU9e2lzU2VhcmNoYWJsZX1cbiAgICAgICAgaXNDbGVhcmFibGU9e2lzQ2xlYXJhYmxlfVxuICAgICAgICBmaWx0ZXJPcHRpb249e2ZpbHRlck9wdGlvbn1cbiAgICAgICAgb25NZW51T3Blbj17b25NZW51T3Blbn1cbiAgICAgICAgbWVudVBsYWNlbWVudD1cImF1dG9cIlxuICAgICAgICBub09wdGlvbnNNZXNzYWdlPXtub09wdGlvbnNNZXNzYWdlfVxuICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgVmFsdWVDb250YWluZXIsXG4gICAgICAgICAgU2luZ2xlVmFsdWUsXG4gICAgICAgICAgTXVsdGlWYWx1ZSxcbiAgICAgICAgICBNdWx0aVZhbHVlTGFiZWwsXG4gICAgICAgICAgTXVsdGlWYWx1ZVJlbW92ZSxcbiAgICAgICAgICBEcm9wZG93bkluZGljYXRvcjogQ2hldnJvbixcbiAgICAgICAgICBDbGVhckluZGljYXRvcixcbiAgICAgICAgICBDb250cm9sLFxuICAgICAgICAgIC4uLmNvbXBvbmVudHMsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cbiAgY29uc3QgaGFuZGxlS2V5RG93bjogS2V5Ym9hcmRFdmVudEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgaWYgKG51bWJlck9ubHkgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGFjY2VwdGFibGVLZXlzID0gWydUYWInLCAnRXNjYXBlJywgJ0JhY2tzcGFjZScsICdFbnRlcicsICdBcnJvd1JpZ2h0JywgJ0Fycm93TGVmdCcsICdBcnJvd1VwJywgJ0Fycm93RG93biddO1xuICAgICAgY29uc3QgaXNOdW1iZXIgPSAhL1teMC05XS8udGVzdChldmVudC5rZXkpO1xuICAgICAgY29uc3QgaXNBY3Rpb25LZXkgPSBhY2NlcHRhYmxlS2V5cy5pbmNsdWRlcyhldmVudC5rZXkpO1xuICAgICAgaWYgKCFpc051bWJlciAmJiAhaXNBY3Rpb25LZXkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXZhbHVlIHx8ICFpbnB1dFZhbHVlIHx8IGlucHV0VmFsdWUudHJpbSgpID09PSAnJykgcmV0dXJuO1xuICAgIGlmIChmaWx0ZXJPcHRpb24gJiYgIWZpbHRlck9wdGlvbihudWxsLCBpbnB1dFZhbHVlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgY2FzZSAnVGFiJzpcbiAgICAgICAgb25DaGFuZ2UoWy4uLnZhbHVlIGFzIE9wdGlvbltdLCBjcmVhdGVPcHRpb24oaW5wdXRWYWx1ZSldKTtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8Q3JlYXRhYmxlU2VsZWN0XG4gICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICBjYXB0dXJlTWVudVNjcm9sbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgaXNEaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBjbGFzc05hbWVQcmVmaXg9XCJyc1wiXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgaXNTZWFyY2hhYmxlPXtpc1NlYXJjaGFibGV9XG4gICAgICBpc0NsZWFyYWJsZT17aXNDbGVhcmFibGV9XG4gICAgICBmaWx0ZXJPcHRpb249e2ZpbHRlck9wdGlvbn1cbiAgICAgIG9uTWVudU9wZW49e29uTWVudU9wZW59XG4gICAgICBtZW51UGxhY2VtZW50PVwiYXV0b1wiXG4gICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgb25JbnB1dENoYW5nZT17KG5ld1ZhbHVlKSA9PiBzZXRJbnB1dFZhbHVlKG5ld1ZhbHVlKX1cbiAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgIG5vT3B0aW9uc01lc3NhZ2U9e25vT3B0aW9uc01lc3NhZ2V9XG4gICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgIFZhbHVlQ29udGFpbmVyLFxuICAgICAgICBTaW5nbGVWYWx1ZSxcbiAgICAgICAgTXVsdGlWYWx1ZSxcbiAgICAgICAgTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICBNdWx0aVZhbHVlUmVtb3ZlLFxuICAgICAgICBEcm9wZG93bkluZGljYXRvcjogQ2hldnJvbixcbiAgICAgICAgQ2xlYXJJbmRpY2F0b3IsXG4gICAgICAgIENvbnRyb2wsXG4gICAgICAgIC4uLmNvbXBvbmVudHMsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5jb25zdCBTb3J0YWJsZVNlbGVjdDogUmVhY3QuRkM8UmVhY3RTZWxlY3RBZGFwdGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBvbkNoYW5nZSxcbiAgICB2YWx1ZSxcbiAgfSA9IHByb3BzO1xuXG5cbiAgbGV0IGlkczogc3RyaW5nW10gPSBbXTtcbiAgaWYgKHZhbHVlKSBpZHMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCgoaXRlbSkgPT4gaXRlbT8uaWQgPz8gYCR7aXRlbT8udmFsdWV9YCBhcyBzdHJpbmcpIDogW3ZhbHVlPy5pZCB8fCBgJHt2YWx1ZT8udmFsdWV9YCBhcyBzdHJpbmddO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8RHJhZ2dhYmxlU29ydGFibGVcbiAgICAgIGlkcz17aWRzfVxuICAgICAgY2xhc3NOYW1lPVwicmVhY3Qtc2VsZWN0LWNvbnRhaW5lclwiXG4gICAgICBvbkRyYWdFbmQ9eyh7IG1vdmVGcm9tSW5kZXgsIG1vdmVUb0luZGV4IH0pID0+IHtcbiAgICAgICAgbGV0IHNvcnRlZCA9IHZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICBzb3J0ZWQgPSBhcnJheU1vdmUodmFsdWUsIG1vdmVGcm9tSW5kZXgsIG1vdmVUb0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBvbkNoYW5nZShzb3J0ZWQpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8U2VsZWN0QWRhcHRlciB7Li4ucHJvcHN9IC8+XG4gICAgPC9EcmFnZ2FibGVTb3J0YWJsZT5cbiAgKTtcbn07XG5cbmNvbnN0IFJlYWN0U2VsZWN0OiBSZWFjdC5GQzxSZWFjdFNlbGVjdEFkYXB0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlzTXVsdGksXG4gICAgaXNTb3J0YWJsZSxcbiAgfSA9IHByb3BzO1xuXG4gIGlmIChpc011bHRpICYmIGlzU29ydGFibGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNvcnRhYmxlU2VsZWN0IHsuLi5wcm9wc30gLz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U2VsZWN0QWRhcHRlciB7Li4ucHJvcHN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFNlbGVjdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlbGVjdCIsIkNyZWF0YWJsZVNlbGVjdCIsInVzZVRyYW5zbGF0aW9uIiwiYXJyYXlNb3ZlIiwiQ2hldnJvbiIsImdldFRyYW5zbGF0aW9uIiwiU2luZ2xlVmFsdWUiLCJNdWx0aVZhbHVlTGFiZWwiLCJNdWx0aVZhbHVlIiwiVmFsdWVDb250YWluZXIiLCJDbGVhckluZGljYXRvciIsIk11bHRpVmFsdWVSZW1vdmUiLCJDb250cm9sIiwiRHJhZ2dhYmxlU29ydGFibGUiLCJjcmVhdGVPcHRpb24iLCJsYWJlbCIsInZhbHVlIiwiU2VsZWN0QWRhcHRlciIsInByb3BzIiwidCIsImkxOG4iLCJ1c2VTdGF0ZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiY2xhc3NOYW1lIiwic2hvd0Vycm9yIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJwbGFjZWhvbGRlciIsImlzU2VhcmNoYWJsZSIsImlzQ2xlYXJhYmxlIiwiZmlsdGVyT3B0aW9uIiwidW5kZWZpbmVkIiwibnVtYmVyT25seSIsImlzTG9hZGluZyIsIm9uTWVudU9wZW4iLCJjb21wb25lbnRzIiwiaXNDcmVhdGFibGUiLCJzZWxlY3RQcm9wcyIsIm5vT3B0aW9uc01lc3NhZ2UiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJjYXB0dXJlTWVudVNjcm9sbCIsImN1c3RvbVByb3BzIiwiaXNEaXNhYmxlZCIsImNsYXNzTmFtZVByZWZpeCIsIm1lbnVQbGFjZW1lbnQiLCJEcm9wZG93bkluZGljYXRvciIsImhhbmRsZUtleURvd24iLCJldmVudCIsImFjY2VwdGFibGVLZXlzIiwiaXNOdW1iZXIiLCJ0ZXN0Iiwia2V5IiwiaXNBY3Rpb25LZXkiLCJpbmNsdWRlcyIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsIm9uSW5wdXRDaGFuZ2UiLCJuZXdWYWx1ZSIsIm9uS2V5RG93biIsIlNvcnRhYmxlU2VsZWN0IiwiaWRzIiwiaXRlbSIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsImlkIiwib25EcmFnRW5kIiwibW92ZUZyb21JbmRleCIsIm1vdmVUb0luZGV4Iiwic29ydGVkIiwiUmVhY3RTZWxlY3QiLCJpc011bHRpIiwiaXNTb3J0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFxQyxRQUFRO0FBQ3BELE9BQU9DLFlBQVksZUFBZTtBQUNsQyxPQUFPQyxxQkFBcUIseUJBQXlCO0FBQ3JELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLG9CQUFvQjtBQUU5QyxPQUFPQyxhQUFhLHNCQUFzQjtBQUMxQyxTQUFTQyxjQUFjLFFBQVEsdUNBQXVDO0FBQ3RFLFNBQVNDLFdBQVcsUUFBUSxnQkFBZ0I7QUFDNUMsU0FBU0MsZUFBZSxRQUFRLG9CQUFvQjtBQUNwRCxTQUFTQyxVQUFVLFFBQVEsZUFBZTtBQUMxQyxTQUFTQyxjQUFjLFFBQVEsbUJBQW1CO0FBQ2xELFNBQVNDLGNBQWMsUUFBUSxtQkFBbUI7QUFDbEQsU0FBU0MsZ0JBQWdCLFFBQVEscUJBQXFCO0FBQ3RELFNBQVNDLE9BQU8sUUFBUSxZQUFZO0FBQ3BDLE9BQU9DLHVCQUF1Qix1QkFBdUI7QUFHckQsT0FBTyxlQUFlO0FBRXRCLElBQU1DLGVBQWUsU0FBQ0M7V0FBbUI7UUFDdkNBLE9BQUFBO1FBQ0FDLE9BQU9EO0lBQ1Q7O0FBR0EsSUFBTUUsZ0JBQW1E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