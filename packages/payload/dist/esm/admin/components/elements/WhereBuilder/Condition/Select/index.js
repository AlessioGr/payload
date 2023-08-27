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
import React from "react";
import { useTranslation } from "react-i18next";
import ReactSelect from "../../../ReactSelect";
import { getTranslation } from "../../../../../../utilities/getTranslation";
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
export var Select = function(param) {
    var onChange = param.onChange, value = param.value, optionsFromProps = param.options, operator = param.operator;
    var i18n = useTranslation().i18n;
    var _React_useState = _sliced_to_array(React.useState(formatOptions(optionsFromProps)), 2), options = _React_useState[0], setOptions = _React_useState[1];
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
                label: matchingOption ? getTranslation(matchingOption.label, i18n) : val,
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
            label: matchingOption ? getTranslation(matchingOption.label, i18n) : value,
            value: (_matchingOption_value = (_matchingOption = matchingOption) === null || _matchingOption === void 0 ? void 0 : _matchingOption.value) !== null && _matchingOption_value !== void 0 ? _matchingOption_value : value
        };
    }
    var onSelect = React.useCallback(function(selectedOption) {
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
    React.useEffect(function() {
        setOptions(formatOptions(optionsFromProps));
    }, [
        optionsFromProps
    ]);
    React.useEffect(function() {
        if (!isMulti && Array.isArray(value)) {
            onChange(value[0]);
        }
    }, [
        isMulti,
        onChange,
        value
    ]);
    return /*#__PURE__*/ React.createElement(ReactSelect, {
        onChange: onSelect,
        value: valueToRender,
        options: options.map(function(option) {
            return _object_spread_props(_object_spread({}, option), {
                label: getTranslation(option.label, i18n)
            });
        }),
        isMulti: isMulti
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vU2VsZWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uLy4uLy4uL1JlYWN0U2VsZWN0JztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBPcHRpb24sIE9wdGlvbk9iamVjdCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5jb25zdCBmb3JtYXRPcHRpb25zID0gKG9wdGlvbnM6IE9wdGlvbltdKTogT3B0aW9uT2JqZWN0W10gPT4gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgKG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udmFsdWUgPT09ICcnKSkge1xuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxhYmVsOiBvcHRpb24sXG4gICAgdmFsdWU6IG9wdGlvbixcbiAgfSBhcyBPcHRpb25PYmplY3Q7XG59KTtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIHZhbHVlLCBvcHRpb25zOiBvcHRpb25zRnJvbVByb3BzLCBvcGVyYXRvciB9KSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZm9ybWF0T3B0aW9ucyhvcHRpb25zRnJvbVByb3BzKSk7XG5cbiAgY29uc3QgaXNNdWx0aSA9IFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXMob3BlcmF0b3IpO1xuICBsZXQgdmFsdWVUb1JlbmRlcjtcblxuICBpZiAoaXNNdWx0aSAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHZhbHVlVG9SZW5kZXIgPSB2YWx1ZS5tYXAoKHZhbCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hpbmdPcHRpb24gPSBvcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSB2YWwpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWw6IG1hdGNoaW5nT3B0aW9uID8gZ2V0VHJhbnNsYXRpb24obWF0Y2hpbmdPcHRpb24ubGFiZWwsIGkxOG4pIDogdmFsLFxuICAgICAgICB2YWx1ZTogbWF0Y2hpbmdPcHRpb24/LnZhbHVlID8/IHZhbCxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodmFsdWUpIHtcbiAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHZhbHVlKTtcbiAgICB2YWx1ZVRvUmVuZGVyID0ge1xuICAgICAgbGFiZWw6IG1hdGNoaW5nT3B0aW9uID8gZ2V0VHJhbnNsYXRpb24obWF0Y2hpbmdPcHRpb24ubGFiZWwsIGkxOG4pIDogdmFsdWUsXG4gICAgICB2YWx1ZTogbWF0Y2hpbmdPcHRpb24/LnZhbHVlID8/IHZhbHVlLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBvblNlbGVjdCA9IFJlYWN0LnVzZUNhbGxiYWNrKChzZWxlY3RlZE9wdGlvbikgPT4ge1xuICAgIGxldCBuZXdWYWx1ZTtcbiAgICBpZiAoIXNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICBuZXdWYWx1ZSA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChpc011bHRpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbikpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzZWxlY3RlZE9wdGlvbi5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gc2VsZWN0ZWRPcHRpb24udmFsdWU7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3VmFsdWUpO1xuICB9LCBbXG4gICAgaXNNdWx0aSxcbiAgICBvbkNoYW5nZSxcbiAgXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRPcHRpb25zKGZvcm1hdE9wdGlvbnMob3B0aW9uc0Zyb21Qcm9wcykpO1xuICB9LCBbb3B0aW9uc0Zyb21Qcm9wc10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc011bHRpICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZVswXSk7XG4gICAgfVxuICB9LCBbaXNNdWx0aSwgb25DaGFuZ2UsIHZhbHVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3RTZWxlY3RcbiAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdH1cbiAgICAgIHZhbHVlPXt2YWx1ZVRvUmVuZGVyfVxuICAgICAgb3B0aW9ucz17b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHsgLi4ub3B0aW9uLCBsYWJlbDogZ2V0VHJhbnNsYXRpb24ob3B0aW9uLmxhYmVsLCBpMThuKSB9KSl9XG4gICAgICBpc011bHRpPXtpc011bHRpfVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJSZWFjdFNlbGVjdCIsImdldFRyYW5zbGF0aW9uIiwiZm9ybWF0T3B0aW9ucyIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJ2YWx1ZSIsImxhYmVsIiwiU2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb25zRnJvbVByb3BzIiwib3BlcmF0b3IiLCJpMThuIiwidXNlU3RhdGUiLCJzZXRPcHRpb25zIiwiaXNNdWx0aSIsImluY2x1ZGVzIiwidmFsdWVUb1JlbmRlciIsIkFycmF5IiwiaXNBcnJheSIsInZhbCIsIm1hdGNoaW5nT3B0aW9uIiwiZmluZCIsIm9uU2VsZWN0IiwidXNlQ2FsbGJhY2siLCJzZWxlY3RlZE9wdGlvbiIsIm5ld1ZhbHVlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUUxQixTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLE9BQU9DLGlCQUFpQix1QkFBdUI7QUFDL0MsU0FBU0MsY0FBYyxRQUFRLDZDQUE2QztBQUk1RSxJQUFNQyxnQkFBZ0IsU0FBQ0M7V0FBc0NBLFFBQVFDLEdBQUcsQ0FBQyxTQUFDQztRQUN4RSxJQUFJLE9BQU9BLFdBQVcsWUFBYUEsQ0FBQUEsT0FBT0MsS0FBSyxJQUFJRCxPQUFPQyxLQUFLLEtBQUssRUFBQyxHQUFJO1lBQ3ZFLE9BQU9EO1FBQ1Q7UUFFQSxPQUFPO1lBQ0xFLE9BQU9GO1lBQ1BDLE9BQU9EO1FBQ1Q7SUFDRjs7QUFFQSxPQUFPLElBQU1HLFNBQTBCO1FBQUdDLGlCQUFBQSxVQUFVSCxjQUFBQSxPQUFPSCxBQUFTTyx5QkFBVFAsU0FBMkJRLGlCQUFBQTtJQUNwRixJQUFNLEFBQUVDLE9BQVNiLGlCQUFUYTtJQUNSLElBQThCZCxtQ0FBQUEsTUFBTWUsUUFBUSxDQUFDWCxjQUFjUSx3QkFBcERQLFVBQXVCTCxvQkFBZGdCLGFBQWNoQjtJQUU5QixJQUFNaUIsVUFBVTtRQUFDO1FBQU07S0FBUyxDQUFDQyxRQUFRLENBQUNMO0lBQzFDLElBQUlNO0lBRUosSUFBSUYsV0FBV0csTUFBTUMsT0FBTyxDQUFDYixRQUFRO1FBQ25DVyxnQkFBZ0JYLE1BQU1GLEdBQUcsQ0FBQyxTQUFDZ0I7Z0JBSWhCQztZQUhULElBQU1BLGlCQUFpQmxCLFFBQVFtQixJQUFJLENBQUMsU0FBQ2pCO3VCQUFXQSxPQUFPQyxLQUFLLEtBQUtjOztnQkFHeERDO1lBRlQsT0FBTztnQkFDTGQsT0FBT2MsaUJBQWlCcEIsZUFBZW9CLGVBQWVkLEtBQUssRUFBRUssUUFBUVE7Z0JBQ3JFZCxPQUFPZSxDQUFBQSx5QkFBQUEsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCZixLQUFLLGNBQXJCZSxtQ0FBQUEsd0JBQXlCRDtZQUNsQztRQUNGO0lBQ0YsT0FBTyxJQUFJZCxPQUFPO1lBSVBlO1FBSFQsSUFBTUEsaUJBQWlCbEIsUUFBUW1CLElBQUksQ0FBQyxTQUFDakI7bUJBQVdBLE9BQU9DLEtBQUssS0FBS0E7O1lBR3hEZTtRQUZUSixnQkFBZ0I7WUFDZFYsT0FBT2MsaUJBQWlCcEIsZUFBZW9CLGVBQWVkLEtBQUssRUFBRUssUUFBUU47WUFDckVBLE9BQU9lLENBQUFBLHlCQUFBQSxrQkFBQUEsNEJBQUFBLHNDQUFBQSxnQkFBZ0JmLEtBQUssY0FBckJlLG1DQUFBQSx3QkFBeUJmO1FBQ2xDO0lBQ0Y7SUFFQSxJQUFNaUIsV0FBV3pCLE1BQU0wQixXQUFXLENBQUMsU0FBQ0M7UUFDbEMsSUFBSUM7UUFDSixJQUFJLENBQUNELGdCQUFnQjtZQUNuQkMsV0FBVztRQUNiLE9BQU8sSUFBSVgsU0FBUztZQUNsQixJQUFJRyxNQUFNQyxPQUFPLENBQUNNLGlCQUFpQjtnQkFDakNDLFdBQVdELGVBQWVyQixHQUFHLENBQUMsU0FBQ0M7MkJBQVdBLE9BQU9DLEtBQUs7O1lBQ3hELE9BQU87Z0JBQ0xvQixXQUFXLEVBQUU7WUFDZjtRQUNGLE9BQU87WUFDTEEsV0FBV0QsZUFBZW5CLEtBQUs7UUFDakM7UUFFQUcsU0FBU2lCO0lBQ1gsR0FBRztRQUNEWDtRQUNBTjtLQUNEO0lBRURYLE1BQU02QixTQUFTLENBQUM7UUFDZGIsV0FBV1osY0FBY1E7SUFDM0IsR0FBRztRQUFDQTtLQUFpQjtJQUVyQlosTUFBTTZCLFNBQVMsQ0FBQztRQUNkLElBQUksQ0FBQ1osV0FBV0csTUFBTUMsT0FBTyxDQUFDYixRQUFRO1lBQ3BDRyxTQUFTSCxLQUFLLENBQUMsRUFBRTtRQUNuQjtJQUNGLEdBQUc7UUFBQ1M7UUFBU047UUFBVUg7S0FBTTtJQUU3QixxQkFDRSxvQkFBQ047UUFDQ1MsVUFBVWM7UUFDVmpCLE9BQU9XO1FBQ1BkLFNBQVNBLFFBQVFDLEdBQUcsQ0FBQyxTQUFDQzttQkFBWSx3Q0FBS0E7Z0JBQVFFLE9BQU9OLGVBQWVJLE9BQU9FLEtBQUssRUFBRUs7OztRQUNuRkcsU0FBU0E7O0FBR2YsRUFBRSJ9