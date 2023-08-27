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
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _validations = require("../../../../../fields/validations");
var _getTranslation = require("../../../../../utilities/getTranslation");
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
var _isNumber = require("../../../../../utilities/isNumber");
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
var NumberField = function(props) {
    var name = props.name, pathFromProps = props.path, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.number : _props_validate, label = props.label, max = props.max, min = props.min, hasMany = props.hasMany, minRows = props.minRows, maxRows = props.maxRows, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, step = _ref.step, placeholder = _ref.placeholder, description = _ref.description, condition = _ref.condition;
    var _useTranslation = (0, _reacti18next.useTranslation)(), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var path = pathFromProps || name;
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
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
    var _useField1 = (0, _useField.default)({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField1.value, showError = _useField1.showError, setValue = _useField1.setValue, errorMessage = _useField1.errorMessage;
    var handleChange = (0, _react.useCallback)(function(e) {
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
    var _useState = _sliced_to_array((0, _react.useState)([]), 2), valueToRender = _useState[0], setValueToRender = _useState[1]; // Only for hasMany
    var handleHasManyChange = (0, _react.useCallback)(function(selectedOption) {
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
    (0, _react.useEffect)(function() {
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
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "field-".concat(path.replace(/\./gi, "__")),
        label: label,
        required: required
    }), hasMany ? /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
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
            return (0, _isNumber.isNumber)(rawInput) && !isOverHasMany;
        },
        numberOnly: true
    }) : /*#__PURE__*/ _react.default.createElement("input", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        value: typeof value === "number" ? value : "",
        onChange: handleChange,
        disabled: readOnly,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        type: "number",
        name: path,
        step: step,
        onWheel: function(e) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            e.target.blur();
        }
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = (0, _withCondition.default)(NumberField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL051bWJlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1JlYWN0U2VsZWN0L3R5cGVzJztcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdCc7XG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9pc051bWJlcic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgTnVtYmVyRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gbnVtYmVyLFxuICAgIGxhYmVsLFxuICAgIG1heCxcbiAgICBtaW4sXG4gICAgaGFzTWFueSxcbiAgICBtaW5Sb3dzLFxuICAgIG1heFJvd3MsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIHN0ZXAsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY29uZGl0aW9uLFxuICAgIH0gPSB7fSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgbWluLCBtYXgsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIG1pbiwgbWF4LCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JNZXNzYWdlLFxuICB9ID0gdXNlRmllbGQ8bnVtYmVyIHwgbnVtYmVyW10+KHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcbiAgICBjb25zdCB2YWwgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIGlmIChOdW1iZXIuaXNOYU4odmFsKSkge1xuICAgICAgc2V0VmFsdWUoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRWYWx1ZSh2YWwpO1xuICAgIH1cbiAgfSwgW3NldFZhbHVlXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ251bWJlcicsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgIHJlYWRPbmx5ICYmICdyZWFkLW9ubHknLFxuICAgIGhhc01hbnkgJiYgJ2hhcy1tYW55JyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIGNvbnN0IFt2YWx1ZVRvUmVuZGVyLCBzZXRWYWx1ZVRvUmVuZGVyXSA9IHVzZVN0YXRlPHtsYWJlbDogc3RyaW5nLCB2YWx1ZToge3ZhbHVlOiBudW1iZXJ9LCBpZDogc3RyaW5nfVtdPihbXSk7IC8vIE9ubHkgZm9yIGhhc01hbnlcblxuICBjb25zdCBoYW5kbGVIYXNNYW55Q2hhbmdlID0gdXNlQ2FsbGJhY2soKHNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gICAgaWYgKCFyZWFkT25seSkge1xuICAgICAgbGV0IG5ld1ZhbHVlO1xuICAgICAgaWYgKCFzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdGVkT3B0aW9uKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLm1hcCgob3B0aW9uKSA9PiBOdW1iZXIob3B0aW9uLnZhbHVlPy52YWx1ZSB8fCBvcHRpb24udmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW051bWJlcihzZWxlY3RlZE9wdGlvbi52YWx1ZT8udmFsdWUgfHwgc2VsZWN0ZWRPcHRpb24udmFsdWUpXTtcbiAgICAgIH1cblxuICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfSwgW1xuICAgIHJlYWRPbmx5LFxuICAgIHNldFZhbHVlLFxuICBdKTtcblxuICAvLyB1c2VlZmZlY3QgdXBkYXRlIHZhbHVlVG9SZW5kZXI6XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhhc01hbnkgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHNldFZhbHVlVG9SZW5kZXIodmFsdWUubWFwKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IGAke3ZhbH1gLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB2YWx1ZTogKHZhbCBhcyBhbnkpPy52YWx1ZSB8fCB2YWwsXG4gICAgICAgICAgICB0b1N0cmluZzogKCkgPT4gYCR7dmFsfSR7aW5kZXh9YCxcbiAgICAgICAgICB9LCAvLyBZb3UncmUgcHJvYmFibHkgd29uZGVyaW5nLCB3aHkgdGhlIGhlbGwgaXMgdGhpcyBkb25lIHRoYXQgd2F5PyBXZWxsLCBSZWFjdC1zZWxlY3QgYXV0b21hdGljYWxseSB1c2VzIFwibGFiZWwtdmFsdWVcIiBhcyBhIGtleSwgc28gd2Ugd2lsbCBnZXQgdGhhdCByZWFjdCBkdXBsaWNhdGUga2V5IHdhcm5pbmcgaWYgd2UganVzdCBwYXNzIGluIHRoZSB2YWx1ZSBhcyBtdWx0aXBsZSB2YWx1ZXMgY2FuIGJlIHRoZSBzYW1lLiBTbyB3ZSBuZWVkIHRvIGFwcGVuZCB0aGUgaW5kZXggdG8gdGhlIHRvU3RyaW5nKCkgb2YgdGhlIHZhbHVlIHRvIGF2b2lkIHRoYXQgd2FybmluZywgYXMgaXQgdXNlcyB0aGF0IGFzIHRoZSBrZXkuXG4gICAgICAgICAgaWQ6IGAke3ZhbH0ke2luZGV4fWAsIC8vIGFwcGVuZCBpbmRleCB0byBhdm9pZCBkdXBsaWNhdGUga2V5cyBidXQgYWxsb3cgZHVwbGljYXRlIG51bWJlcnNcbiAgICAgICAgfTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgaGFzTWFueV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDxMYWJlbFxuICAgICAgICBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAge2hhc01hbnkgPyAoXG4gICAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ2dlbmVyYWw6ZW50ZXJBVmFsdWUnKX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSGFzTWFueUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWVUb1JlbmRlciBhcyBPcHRpb25bXX1cbiAgICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgb3B0aW9ucz17W119XG4gICAgICAgICAgaXNDcmVhdGFibGVcbiAgICAgICAgICBpc011bHRpXG4gICAgICAgICAgaXNTb3J0YWJsZVxuICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgbm9PcHRpb25zTWVzc2FnZT17KHsgaW5wdXRWYWx1ZSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc092ZXJIYXNNYW55ID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID49IG1heFJvd3M7XG4gICAgICAgICAgICBpZiAoaXNPdmVySGFzTWFueSkge1xuICAgICAgICAgICAgICByZXR1cm4gdCgndmFsaWRhdGlvbjpsaW1pdFJlYWNoZWQnLCB7IHZhbHVlOiB2YWx1ZS5sZW5ndGggKyAxLCBtYXg6IG1heFJvd3MgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdCgnZ2VuZXJhbDpub09wdGlvbnMnKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGZpbHRlck9wdGlvbj17KG9wdGlvbiwgcmF3SW5wdXQpID0+IHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICAgICAgICAgIGNvbnN0IGlzT3Zlckhhc01hbnkgPSBBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPj0gbWF4Um93cztcbiAgICAgICAgICAgIHJldHVybiBpc051bWJlcihyYXdJbnB1dCkgJiYgIWlzT3Zlckhhc01hbnk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBudW1iZXJPbmx5XG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgICAgdmFsdWU9e3R5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6ICcnfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT17cGF0aH1cbiAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgIG9uV2hlZWw9eyhlKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBlLnRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oTnVtYmVyRmllbGQpO1xuIl0sIm5hbWVzIjpbIk51bWJlckZpZWxkIiwicHJvcHMiLCJuYW1lIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwibnVtYmVyIiwibGFiZWwiLCJtYXgiLCJtaW4iLCJoYXNNYW55IiwibWluUm93cyIsIm1heFJvd3MiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsInN0ZXAiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsInVzZUZpZWxkIiwic2hvd0Vycm9yIiwic2V0VmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidmFsIiwicGFyc2VGbG9hdCIsInRhcmdldCIsIk51bWJlciIsImlzTmFOIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwidXNlU3RhdGUiLCJ2YWx1ZVRvUmVuZGVyIiwic2V0VmFsdWVUb1JlbmRlciIsImhhbmRsZUhhc01hbnlDaGFuZ2UiLCJzZWxlY3RlZE9wdGlvbiIsIm5ld1ZhbHVlIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwib3B0aW9uIiwidXNlRWZmZWN0IiwiaW5kZXgiLCJ0b1N0cmluZyIsImlkIiwiZGl2IiwiRXJyb3IiLCJtZXNzYWdlIiwiTGFiZWwiLCJodG1sRm9yIiwicmVwbGFjZSIsIlJlYWN0U2VsZWN0Iiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImlzQ3JlYXRhYmxlIiwiaXNNdWx0aSIsImlzU29ydGFibGUiLCJpc0NsZWFyYWJsZSIsIm5vT3B0aW9uc01lc3NhZ2UiLCJpbnB1dFZhbHVlIiwiaXNPdmVySGFzTWFueSIsImxlbmd0aCIsImZpbHRlck9wdGlvbiIsInJhd0lucHV0IiwiaXNOdW1iZXIiLCJudW1iZXJPbmx5IiwiaW5wdXQiLCJnZXRUcmFuc2xhdGlvbiIsInR5cGUiLCJvbldoZWVsIiwiYmx1ciIsIkZpZWxkRGVzY3JpcHRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQXlMQTs7O2VBQUE7Ozs2REF6THdEOzRCQUN6QjsrREFDVjs0REFDSDs0REFDQTt1RUFDVztvRUFDSDsyQkFDSDs4QkFFUTtrRUFFUDt3QkFDQztRQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxjQUErQixTQUFDQztJQUNwQyxJQUNFQyxPQW9CRUQsTUFwQkZDLE1BQ0FDLEFBQU1DLGdCQW1CSkgsTUFuQkZFLE1BQ0FFLFdBa0JFSixNQWxCRkksNEJBa0JFSixNQWpCRkssVUFBQUEsd0NBQVdDLG1CQUFNLG9CQUNqQkMsUUFnQkVQLE1BaEJGTyxPQUNBQyxNQWVFUixNQWZGUSxLQUNBQyxNQWNFVCxNQWRGUyxLQUNBQyxVQWFFVixNQWJGVSxTQUNBQyxVQVlFWCxNQVpGVyxTQUNBQyxVQVdFWixNQVhGWSxTQUNPLE1BVUxaLE1BVkZhLGNBQU8saUJBU0gsQ0FBQyxJQVRFLEtBQ0xDLGdCQUFBQSxVQUNBQyxhQUFBQSxPQUNBQyxpQkFBQUEsV0FDQUMsYUFBQUEsT0FDQUMsWUFBQUEsTUFDQUMsbUJBQUFBLGFBQ0FD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