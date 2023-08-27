"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Select", {
    enumerable: true,
    get: function() {
        return Select;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../ReactSelect"));
var _getTranslation = require("../../../../../../utilities/getTranslation");
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
var formatOptions = function(options) {
    return options.map(function(option) {
        if (typeof option === "object" && (option.value || option.value === "")) {
            return option;
        }
        return {
            label: option,
            value: option
        };
    });
};
var Select = function(param) {
    var onChange = param.onChange, value = param.value, optionsFromProps = param.options, operator = param.operator;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var _React_useState = _sliced_to_array(_react.default.useState(formatOptions(optionsFromProps)), 2), options = _React_useState[0], setOptions = _React_useState[1];
    var isMulti = [
        "in",
        "not_in"
    ].includes(operator);
    var valueToRender;
    if (isMulti && Array.isArray(value)) {
        valueToRender = value.map(function(val) {
            var _matchingOption;
            var matchingOption = options.find(function(option) {
                return option.value === val;
            });
            var _matchingOption_value;
            return {
                label: matchingOption ? (0, _getTranslation.getTranslation)(matchingOption.label, i18n) : val,
                value: (_matchingOption_value = (_matchingOption = matchingOption) === null || _matchingOption === void 0 ? void 0 : _matchingOption.value) !== null && _matchingOption_value !== void 0 ? _matchingOption_value : val
            };
        });
    } else if (value) {
        var _matchingOption;
        var matchingOption = options.find(function(option) {
            return option.value === value;
        });
        var _matchingOption_value;
        valueToRender = {
            label: matchingOption ? (0, _getTranslation.getTranslation)(matchingOption.label, i18n) : value,
            value: (_matchingOption_value = (_matchingOption = matchingOption) === null || _matchingOption === void 0 ? void 0 : _matchingOption.value) !== null && _matchingOption_value !== void 0 ? _matchingOption_value : value
        };
    }
    var onSelect = _react.default.useCallback(function(selectedOption) {
        var newValue;
        if (!selectedOption) {
            newValue = null;
        } else if (isMulti) {
            if (Array.isArray(selectedOption)) {
                newValue = selectedOption.map(function(option) {
                    return option.value;
                });
            } else {
                newValue = [];
            }
        } else {
            newValue = selectedOption.value;
        }
        onChange(newValue);
    }, [
        isMulti,
        onChange
    ]);
    _react.default.useEffect(function() {
        setOptions(formatOptions(optionsFromProps));
    }, [
        optionsFromProps
    ]);
    _react.default.useEffect(function() {
        if (!isMulti && Array.isArray(value)) {
            onChange(value[0]);
        }
    }, [
        isMulti,
        onChange,
        value
    ]);
    return /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        onChange: onSelect,
        value: valueToRender,
        options: options.map(function(option) {
            return _object_spread_props(_object_spread({}, option), {
                label: (0, _getTranslation.getTranslation)(option.label, i18n)
            });
        }),
        isMulti: isMulti
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vU2VsZWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uLy4uLy4uL1JlYWN0U2VsZWN0JztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBPcHRpb24sIE9wdGlvbk9iamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5jb25zdCBmb3JtYXRPcHRpb25zID0gKG9wdGlvbnM6IE9wdGlvbltdKTogT3B0aW9uT2JqZWN0W10gPT4gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgKG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udmFsdWUgPT09ICcnKSkge1xuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxhYmVsOiBvcHRpb24sXG4gICAgdmFsdWU6IG9wdGlvbixcbiAgfSBhcyBPcHRpb25PYmplY3Q7XG59KTtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIHZhbHVlLCBvcHRpb25zOiBvcHRpb25zRnJvbVByb3BzLCBvcGVyYXRvciB9KSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZm9ybWF0T3B0aW9ucyhvcHRpb25zRnJvbVByb3BzKSk7XG5cbiAgY29uc3QgaXNNdWx0aSA9IFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXMob3BlcmF0b3IpO1xuICBsZXQgdmFsdWVUb1JlbmRlcjtcblxuICBpZiAoaXNNdWx0aSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlVG9SZW5kZXIgPSB2YWx1ZS5tYXAoKHZhbCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hpbmdPcHRpb24gPSBvcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSB2YWwpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWw6IG1hdGNoaW5nT3B0aW9uID8gZ2V0VHJhbnNsYXRpb24obWF0Y2hpbmdPcHRpb24ubGFiZWwsIGkxOG4pIDogdmFsLFxuICAgICAgICB2YWx1ZTogbWF0Y2hpbmdPcHRpb24/LnZhbHVlID8/IHZhbCxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHZhbHVlKTtcbiAgICB2YWx1ZVRvUmVuZGVyID0ge1xuICAgICAgbGFiZWw6IG1hdGNoaW5nT3B0aW9uID8gZ2V0VHJhbnNsYXRpb24obWF0Y2hpbmdPcHRpb24ubGFiZWwsIGkxOG4pIDogdmFsdWUsXG4gICAgICB2YWx1ZTogbWF0Y2hpbmdPcHRpb24/LnZhbHVlID8/IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBvblNlbGVjdCA9IFJlYWN0LnVzZUNhbGxiYWNrKChzZWxlY3RlZE9wdGlvbikgPT4ge1xuICAgIGxldCBuZXdWYWx1ZTtcbiAgICBpZiAoIXNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICBuZXdWYWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChpc011bHRpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbikpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzZWxlY3RlZE9wdGlvbi5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gc2VsZWN0ZWRPcHRpb24udmFsdWU7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICB9LCBbXG4gICAgaXNNdWx0aSxcbiAgICBvbkNoYW5nZSxcbiAgXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcHRpb25zKGZvcm1hdE9wdGlvbnMob3B0aW9uc0Zyb21Qcm9wcykpO1xuICB9LCBbb3B0aW9uc0Zyb21Qcm9wc10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc011bHRpICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZVswXSk7XG4gICAgfVxuICB9LCBbaXNNdWx0aSwgb25DaGFuZ2UsIHZhbHVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3RTZWxlY3RcbiAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cbiAgICAgIHZhbHVlPXt2YWx1ZVRvUmVuZGVyfVxuICAgICAgb3B0aW9ucz17b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHsgLi4ub3B0aW9uLCBsYWJlbDogZ2V0VHJhbnNsYXRpb24ob3B0aW9uLmxhYmVsLCBpMThuKSB9KSl9XG4gICAgICBpc011bHRpPXtpc011bHRpfVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlNlbGVjdCIsImZvcm1hdE9wdGlvbnMiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwidmFsdWUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwib3B0aW9uc0Zyb21Qcm9wcyIsIm9wZXJhdG9yIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldE9wdGlvbnMiLCJpc011bHRpIiwiaW5jbHVkZXMiLCJ2YWx1ZVRvUmVuZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwidmFsIiwibWF0Y2hpbmdPcHRpb24iLCJmaW5kIiwiZ2V0VHJhbnNsYXRpb24iLCJvblNlbGVjdCIsInVzZUNhbGxiYWNrIiwic2VsZWN0ZWRPcHRpb24iLCJuZXdWYWx1ZSIsInVzZUVmZmVjdCIsIlJlYWN0U2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7OytCQW1CYUE7OztlQUFBQTs7OzREQW5CSzs0QkFFYTtrRUFDUDs4QkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0IsSUFBTUMsZ0JBQWdCLFNBQUNDO1dBQXNDQSxRQUFRQyxHQUFHLENBQUMsU0FBQ0M7UUFDeEUsSUFBSSxPQUFPQSxXQUFXLFlBQWFBLENBQUFBLE9BQU9DLEtBQUssSUFBSUQsT0FBT0MsS0FBSyxLQUFLLEVBQUMsR0FBSTtZQUN2RSxPQUFPRDtRQUNUO1FBRUEsT0FBTztZQUNMRSxPQUFPRjtZQUNQQyxPQUFPRDtRQUNUO0lBQ0Y7O0FBRU8sSUFBTUosU0FBMEI7UUFBR08saUJBQUFBLFVBQVVGLGNBQUFBLE9BQU9ILEFBQVNNLHlCQUFUTixTQUEyQk8saUJBQUFBO0lBQ3BGLElBQU0sQUFBRUMsT0FBU0MsSUFBQUEsNEJBQWMsSUFBdkJEO0lBQ1IsSUFBOEJFLG1DQUFBQSxjQUFLLENBQUNDLFFBQVEsQ0FBQ1osY0FBY08sd0JBQXBETixVQUF1QlUsb0JBQWRFLGFBQWNGO0lBRTlCLElBQU1HLFVBQVU7UUFBQztRQUFNO0tBQVMsQ0FBQ0MsUUFBUSxDQUFDUDtJQUMxQyxJQUFJUTtJQUVKLElBQUlGLFdBQVdHLE1BQU1DLE9BQU8sQ0FBQ2QsUUFBUTtRQUNuQ1ksZ0JBQWdCWixNQUFNRixHQUFHLENBQUMsU0FBQ2lCO2dCQUloQkM7WUFIVCxJQUFNQSxpQkFBaUJuQixRQUFRb0IsSUFBSSxDQUFDLFNBQUNsQjt1QkFBV0EsT0FBT0MsS0FBSyxLQUFLZTs7Z0JBR3hEQztZQUZULE9BQU87Z0JBQ0xmLE9BQU9lLGlCQUFpQkUsSUFBQUEsOEJBQWMsRUFBQ0YsZUFBZWYsS0FBSyxFQUFFSSxRQUFRVTtnQkFDckVmLE9BQU9nQixDQUFBQSx5QkFBQUEsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCaEIsS0FBSyxjQUFyQmdCLG1DQUFBQSx3QkFBeUJEO1lBQ2xDO1FBQ0Y7SUFDRixPQUFPLElBQUlmLE9BQU87WUFJUGdCO1FBSFQsSUFBTUEsaUJBQWlCbkIsUUFBUW9CLElBQUksQ0FBQyxTQUFDbEI7bUJBQVdBLE9BQU9DLEtBQUssS0FBS0E7O1lBR3hEZ0I7UUFGVEosZ0JBQWdCO1lBQ2RYLE9BQU9lLGlCQUFpQkUsSUFBQUEsOEJBQWMsRUFBQ0YsZUFBZWYsS0FBSyxFQUFFSSxRQUFRTDtZQUNyRUEsT0FBT2dCLENBQUFBLHlCQUFBQSxrQkFBQUEsNEJBQUFBLHNDQUFBQSxnQkFBZ0JoQixLQUFLLGNBQXJCZ0IsbUNBQUFBLHdCQUF5QmhCO1FBQ2xDO0lBQ0Y7SUFFQSxJQUFNbUIsV0FBV1osY0FBSyxDQUFDYSxXQUFXLENBQUMsU0FBQ0M7UUFDbEMsSUFBSUM7UUFDSixJQUFJLENBQUNELGdCQUFnQjtZQUNuQkMsV0FBVztRQUNiLE9BQU8sSUFBSVosU0FBUztZQUNsQixJQUFJRyxNQUFNQyxPQUFPLENBQUNPLGlCQUFpQjtnQkFDakNDLFdBQVdELGVBQWV2QixHQUFHLENBQUMsU0FBQ0M7MkJBQVdBLE9BQU9DLEtBQUs7O1lBQ3hELE9BQU87Z0JBQ0xzQixXQUFXLEVBQUU7WUFDZjtRQUNGLE9BQU87WUFDTEEsV0FBV0QsZUFBZXJCLEtBQUs7UUFDakM7UUFFQUUsU0FBU29CO0lBQ1gsR0FBRztRQUNEWjtRQUNBUjtLQUNEO0lBRURLLGNBQUssQ0FBQ2dCLFNBQVMsQ0FBQztRQUNkZCxXQUFXYixjQUFjTztJQUMzQixHQUFHO1FBQUNBO0tBQWlCO0lBRXJCSSxjQUFLLENBQUNnQixTQUFTLENBQUM7UUFDZCxJQUFJLENBQUNiLFdBQVdHLE1BQU1DLE9BQU8sQ0FBQ2QsUUFBUTtZQUNwQ0UsU0FBU0YsS0FBSyxDQUFDLEVBQUU7UUFDbkI7SUFDRixHQUFHO1FBQUNVO1FBQVNSO1FBQVVGO0tBQU07SUFFN0IscUJBQ0UsNkJBQUN3QixvQkFBVztRQUNWdEIsVUFBVWlCO1FBQ1ZuQixPQUFPWTtRQUNQZixTQUFTQSxRQUFRQyxHQUFHLENBQUMsU0FBQ0M7bUJBQVksd0NBQUtBO2dCQUFRRSxPQUFPaUIsSUFBQUEsOEJBQWMsRUFBQ25CLE9BQU9FLEtBQUssRUFBRUk7OztRQUNuRkssU0FBU0E7O0FBR2YifQ==