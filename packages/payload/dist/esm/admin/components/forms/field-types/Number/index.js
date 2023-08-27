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
import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useField from "../../useField";
import Label from "../../Label";
import Error from "../../Error";
import FieldDescription from "../../FieldDescription";
import withCondition from "../../withCondition";
import { number } from "../../../../../fields/validations";
import { getTranslation } from "../../../../../utilities/getTranslation";
import ReactSelect from "../../../elements/ReactSelect";
import { isNumber } from "../../../../../utilities/isNumber";
import "./index.scss";
var NumberField = function(props) {
    var name = props.name, pathFromProps = props.path, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? number : _props_validate, label = props.label, max = props.max, min = props.min, hasMany = props.hasMany, minRows = props.minRows, maxRows = props.maxRows, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, step = _ref.step, placeholder = _ref.placeholder, description = _ref.description, condition = _ref.condition;
    var _useTranslation = useTranslation(), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var path = pathFromProps || name;
    var memoizedValidate = useCallback(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            min: min,
            max: max,
            required: required
        }));
    }, [
        validate,
        min,
        max,
        required
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField.value, showError = _useField.showError, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    var handleChange = useCallback(function(e) {
        var val = parseFloat(e.target.value);
        if (Number.isNaN(val)) {
            setValue("");
        } else {
            setValue(val);
        }
    }, [
        setValue
    ]);
    var classes = [
        "field-type",
        "number",
        className,
        showError && "error",
        readOnly && "read-only",
        hasMany && "has-many"
    ].filter(Boolean).join(" ");
    var _useState = _sliced_to_array(useState([]), 2), valueToRender = _useState[0], setValueToRender = _useState[1]; // Only for hasMany
    var handleHasManyChange = useCallback(function(selectedOption) {
        if (!readOnly) {
            var newValue;
            if (!selectedOption) {
                newValue = [];
            } else if (Array.isArray(selectedOption)) {
                newValue = selectedOption.map(function(option) {
                    var _option_value;
                    return Number(((_option_value = option.value) === null || _option_value === void 0 ? void 0 : _option_value.value) || option.value);
                });
            } else {
                var _selectedOption_value;
                newValue = [
                    Number(((_selectedOption_value = selectedOption.value) === null || _selectedOption_value === void 0 ? void 0 : _selectedOption_value.value) || selectedOption.value)
                ];
            }
            setValue(newValue);
        }
    }, [
        readOnly,
        setValue
    ]);
    // useeffect update valueToRender:
    useEffect(function() {
        if (hasMany && Array.isArray(value)) {
            setValueToRender(value.map(function(val, index) {
                var _val;
                return {
                    label: "".concat(val),
                    value: {
                        value: ((_val = val) === null || _val === void 0 ? void 0 : _val.value) || val,
                        toString: function() {
                            return "".concat(val).concat(index);
                        }
                    },
                    id: "".concat(val).concat(index)
                };
            }));
        }
    }, [
        value,
        hasMany
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ React.createElement(Label, {
        htmlFor: "field-".concat(path.replace(/\./gi, "__")),
        label: label,
        required: required
    }), hasMany ? /*#__PURE__*/ React.createElement(ReactSelect, {
        className: "field-".concat(path.replace(/\./gi, "__")),
        placeholder: t("general:enterAValue"),
        onChange: handleHasManyChange,
        value: valueToRender,
        showError: showError,
        disabled: readOnly,
        options: [],
        isCreatable: true,
        isMulti: true,
        isSortable: true,
        isClearable: true,
        noOptionsMessage: function(param) {
            var inputValue = param.inputValue;
            var isOverHasMany = Array.isArray(value) && value.length >= maxRows;
            if (isOverHasMany) {
                return t("validation:limitReached", {
                    value: value.length + 1,
                    max: maxRows
                });
            }
            return t("general:noOptions");
        },
        filterOption: function(option, rawInput) {
            // eslint-disable-next-line no-restricted-globals
            var isOverHasMany = Array.isArray(value) && value.length >= maxRows;
            return isNumber(rawInput) && !isOverHasMany;
        },
        numberOnly: true
    }) : /*#__PURE__*/ React.createElement("input", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        value: typeof value === "number" ? value : "",
        onChange: handleChange,
        disabled: readOnly,
        placeholder: getTranslation(placeholder, i18n),
        type: "number",
        name: path,
        step: step,
        onWheel: function(e) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            e.target.blur();
        }
    }), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default withCondition(NumberField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL051bWJlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1JlYWN0U2VsZWN0L3R5cGVzJztcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdCc7XG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9pc051bWJlcic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgTnVtYmVyRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gbnVtYmVyLFxuICAgIGxhYmVsLFxuICAgIG1heCxcbiAgICBtaW4sXG4gICAgaGFzTWFueSxcbiAgICBtaW5Sb3dzLFxuICAgIG1heFJvd3MsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIHN0ZXAsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY29uZGl0aW9uLFxuICAgIH0gPSB7fSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgbWluLCBtYXgsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIG1pbiwgbWF4LCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JNZXNzYWdlLFxuICB9ID0gdXNlRmllbGQ8bnVtYmVyIHwgbnVtYmVyW10+KHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBjb25zdCB2YWwgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsKSkge1xuICAgICAgc2V0VmFsdWUoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRWYWx1ZSh2YWwpO1xuICAgIH1cbiAgfSwgW3NldFZhbHVlXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ251bWJlcicsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgIHJlYWRPbmx5ICYmICdyZWFkLW9ubHknLFxuICAgIGhhc01hbnkgJiYgJ2hhcy1tYW55JyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIGNvbnN0IFt2YWx1ZVRvUmVuZGVyLCBzZXRWYWx1ZVRvUmVuZGVyXSA9IHVzZVN0YXRlPHtsYWJlbDogc3RyaW5nLCB2YWx1ZToge3ZhbHVlOiBudW1iZXJ9LCBpZDogc3RyaW5nfVtdPihbXSk7IC8vIE9ubHkgZm9yIGhhc01hbnlcblxuICBjb25zdCBoYW5kbGVIYXNNYW55Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gICAgaWYgKCFyZWFkT25seSkge1xuICAgICAgbGV0IG5ld1ZhbHVlO1xuICAgICAgaWYgKCFzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLm1hcCgob3B0aW9uKSA9PiBOdW1iZXIob3B0aW9uLnZhbHVlPy52YWx1ZSB8fCBvcHRpb24udmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW051bWJlcihzZWxlY3RlZE9wdGlvbi52YWx1ZT8udmFsdWUgfHwgc2VsZWN0ZWRPcHRpb24udmFsdWUpXTtcbiAgICAgIH1cblxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfSwgW1xuICAgIHJlYWRPbmx5LFxuICAgIHNldFZhbHVlLFxuICBdKTtcblxuICAvLyB1c2VlZmZlY3QgdXBkYXRlIHZhbHVlVG9SZW5kZXI6XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhhc01hbnkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHNldFZhbHVlVG9SZW5kZXIodmFsdWUubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IGAke3ZhbH1gLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB2YWx1ZTogKHZhbCBhcyBhbnkpPy52YWx1ZSB8fCB2YWwsXG4gICAgICAgICAgICB0b1N0cmluZzogKCkgPT4gYCR7dmFsfSR7aW5kZXh9YCxcbiAgICAgICAgICB9LCAvLyBZb3UncmUgcHJvYmFibHkgd29uZGVyaW5nLCB3aHkgdGhlIGhlbGwgaXMgdGhpcyBkb25lIHRoYXQgd2F5PyBXZWxsLCBSZWFjdC1zZWxlY3QgYXV0b21hdGljYWxseSB1c2VzIFwibGFiZWwtdmFsdWVcIiBhcyBhIGtleSwgc28gd2Ugd2lsbCBnZXQgdGhhdCByZWFjdCBkdXBsaWNhdGUga2V5IHdhcm5pbmcgaWYgd2UganVzdCBwYXNzIGluIHRoZSB2YWx1ZSBhcyBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIHRoZSBzYW1lLiBTbyB3ZSBuZWVkIHRvIGFwcGVuZCB0aGUgaW5kZXggdG8gdGhlIHRvU3RyaW5nKCkgb2YgdGhlIHZhbHVlIHRvIGF2b2lkIHRoYXQgd2FybmluZywgYXMgaXQgdXNlcyB0aGF0IGFzIHRoZSBrZXkuXG4gICAgICAgICAgaWQ6IGAke3ZhbH0ke2luZGV4fWAsIC8vIGFwcGVuZCBpbmRleCB0byBhdm9pZCBkdXBsaWNhdGUga2V5cyBidXQgYWxsb3cgZHVwbGljYXRlIG51bWJlcnNcbiAgICAgICAgfTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgaGFzTWFueV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDxMYWJlbFxuICAgICAgICBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAge2hhc01hbnkgPyAoXG4gICAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ2dlbmVyYWw6ZW50ZXJBVmFsdWUnKX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSGFzTWFueUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWVUb1JlbmRlciBhcyBPcHRpb25bXX1cbiAgICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgb3B0aW9ucz17W119XG4gICAgICAgICAgaXNDcmVhdGFibGVcbiAgICAgICAgICBpc011bHRpXG4gICAgICAgICAgaXNTb3J0YWJsZVxuICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgbm9PcHRpb25zTWVzc2FnZT17KHsgaW5wdXRWYWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc092ZXJIYXNNYW55ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID49IG1heFJvd3M7XG4gICAgICAgICAgICBpZiAoaXNPdmVySGFzTWFueSkge1xuICAgICAgICAgICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpsaW1pdFJlYWNoZWQnLCB7IHZhbHVlOiB2YWx1ZS5sZW5ndGggKyAxLCBtYXg6IG1heFJvd3MgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdCgnZ2VuZXJhbDpub09wdGlvbnMnKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGZpbHRlck9wdGlvbj17KG9wdGlvbiwgcmF3SW5wdXQpID0+IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICAgICAgICAgIGNvbnN0IGlzT3Zlckhhc01hbnkgPSBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPj0gbWF4Um93cztcbiAgICAgICAgICAgIHJldHVybiBpc051bWJlcihyYXdJbnB1dCkgJiYgIWlzT3Zlckhhc01hbnk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBudW1iZXJPbmx5XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgICAgdmFsdWU9e3R5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6ICcnfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT17cGF0aH1cbiAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgIG9uV2hlZWw9eyhlKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oTnVtYmVyRmllbGQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlRmllbGQiLCJMYWJlbCIsIkVycm9yIiwiRmllbGREZXNjcmlwdGlvbiIsIndpdGhDb25kaXRpb24iLCJudW1iZXIiLCJnZXRUcmFuc2xhdGlvbiIsIlJlYWN0U2VsZWN0IiwiaXNOdW1iZXIiLCJOdW1iZXJGaWVsZCIsInByb3BzIiwibmFtZSIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImxhYmVsIiwibWF4IiwibWluIiwiaGFzTWFueSIsIm1pblJvd3MiLCJtYXhSb3dzIiwiYWRtaW4iLCJyZWFkT25seSIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJzdGVwIiwicGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsInQiLCJpMThuIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInZhbHVlIiwib3B0aW9ucyIsInNob3dFcnJvciIsInNldFZhbHVlIiwiZXJyb3JNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbCIsInBhcnNlRmxvYXQiLCJ0YXJnZXQiLCJOdW1iZXIiLCJpc05hTiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInZhbHVlVG9SZW5kZXIiLCJzZXRWYWx1ZVRvUmVuZGVyIiwiaGFuZGxlSGFzTWFueUNoYW5nZSIsInNlbGVjdGVkT3B0aW9uIiwibmV3VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInRvU3RyaW5nIiwiaWQiLCJkaXYiLCJtZXNzYWdlIiwiaHRtbEZvciIsInJlcGxhY2UiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwiaXNDcmVhdGFibGUiLCJpc011bHRpIiwiaXNTb3J0YWJsZSIsImlzQ2xlYXJhYmxlIiwibm9PcHRpb25zTWVzc2FnZSIsImlucHV0VmFsdWUiLCJpc092ZXJIYXNNYW55IiwibGVuZ3RoIiwiZmlsdGVyT3B0aW9uIiwicmF3SW5wdXQiLCJudW1iZXJPbmx5IiwiaW5wdXQiLCJ0eXBlIiwib25XaGVlbCIsImJsdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQ2hFLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsT0FBT0MsY0FBYyxpQkFBaUI7QUFDdEMsT0FBT0MsV0FBVyxjQUFjO0FBQ2hDLE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxzQkFBc0IseUJBQXlCO0FBQ3RELE9BQU9DLG1CQUFtQixzQkFBc0I7QUFDaEQsU0FBU0MsTUFBTSxRQUFRLG9DQUFvQztBQUUzRCxTQUFTQyxjQUFjLFFBQVEsMENBQTBDO0FBRXpFLE9BQU9DLGlCQUFpQixnQ0FBZ0M7QUFDeEQsU0FBU0MsUUFBUSxRQUFRLG9DQUFvQztBQUU3RCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsY0FBK0IsU0FBQ0M7SUFDcEMsSUFDRUMsT0FvQkVELE1BcEJGQyxNQUNBQyxBQUFNQyxnQkFtQkpILE1BbkJGRSxNQUNBRSxXQWtCRUosTUFsQkZJLDRCQWtCRUosTUFqQkZLLFVBQUFBLHdDQUFXViwwQkFDWFcsUUFnQkVOLE1BaEJGTSxPQUNBQyxNQWVFUCxN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