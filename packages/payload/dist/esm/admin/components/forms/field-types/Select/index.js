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
import withCondition from "../../withCondition";
import useField from "../../useField";
import { select } from "../../../../../fields/validations";
import SelectInput from "./Input";
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
var Select = function(props) {
    var pathFromProps = props.path, name = props.name, _props_validate = props.validate, validate = _props_validate === void 0 ? select : _props_validate, label = props.label, optionsFromProps = props.options, hasMany = props.hasMany, required = props.required, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, isClearable = _ref.isClearable, condition = _ref.condition, _ref_isSortable = _ref.isSortable, isSortable = _ref_isSortable === void 0 ? true : _ref_isSortable;
    var path = pathFromProps || name;
    var _useState = _sliced_to_array(useState(formatOptions(optionsFromProps)), 2), options = _useState[0], setOptions = _useState[1];
    useEffect(function() {
        setOptions(formatOptions(optionsFromProps));
    }, [
        optionsFromProps
    ]);
    var memoizedValidate = useCallback(function(value, validationOptions) {
        return validate(value, _object_spread_props(_object_spread({}, validationOptions), {
            options: options,
            hasMany: hasMany,
            required: required
        }));
    }, [
        validate,
        required,
        hasMany,
        options
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField.value, showError = _useField.showError, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    var onChange = useCallback(function(selectedOption) {
        if (!readOnly) {
            var newValue;
            if (!selectedOption) {
                newValue = null;
            } else if (hasMany) {
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
            setValue(newValue);
        }
    }, [
        readOnly,
        hasMany,
        setValue
    ]);
    return /*#__PURE__*/ React.createElement(SelectInput, {
        path: path,
        onChange: onChange,
        value: value,
        name: name,
        options: options,
        label: label,
        showError: showError,
        errorMessage: errorMessage,
        required: required,
        readOnly: readOnly,
        description: description,
        style: style,
        className: className,
        width: width,
        hasMany: hasMany,
        isSortable: isSortable,
        isClearable: isClearable
    });
};
export default withCondition(Select);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1NlbGVjdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IHsgc2VsZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IE9wdGlvbiwgT3B0aW9uT2JqZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5jb25zdCBmb3JtYXRPcHRpb25zID0gKG9wdGlvbnM6IE9wdGlvbltdKTogT3B0aW9uT2JqZWN0W10gPT4gb3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgKG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udmFsdWUgPT09ICcnKSkge1xuICAgIHJldHVybiBvcHRpb247XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxhYmVsOiBvcHRpb24sXG4gICAgdmFsdWU6IG9wdGlvbixcbiAgfSBhcyBPcHRpb25PYmplY3Q7XG59KTtcblxuY29uc3QgU2VsZWN0OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgbmFtZSxcbiAgICB2YWxpZGF0ZSA9IHNlbGVjdCxcbiAgICBsYWJlbCxcbiAgICBvcHRpb25zOiBvcHRpb25zRnJvbVByb3BzLFxuICAgIGhhc01hbnksXG4gICAgcmVxdWlyZWQsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgaXNDbGVhcmFibGUsXG4gICAgICBjb25kaXRpb24sXG4gICAgICBpc1NvcnRhYmxlID0gdHJ1ZSxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIGNvbnN0IFtvcHRpb25zLCBzZXRPcHRpb25zXSA9IHVzZVN0YXRlKGZvcm1hdE9wdGlvbnMob3B0aW9uc0Zyb21Qcm9wcykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3B0aW9ucyhmb3JtYXRPcHRpb25zKG9wdGlvbnNGcm9tUHJvcHMpKTtcbiAgfSwgW29wdGlvbnNGcm9tUHJvcHNdKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCB2YWxpZGF0aW9uT3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi52YWxpZGF0aW9uT3B0aW9ucywgb3B0aW9ucywgaGFzTWFueSwgcmVxdWlyZWQgfSk7XG4gIH0sIFt2YWxpZGF0ZSwgcmVxdWlyZWQsIGhhc01hbnksIG9wdGlvbnNdKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIHNldFZhbHVlLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgfSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoc2VsZWN0ZWRPcHRpb24pID0+IHtcbiAgICBpZiAoIXJlYWRPbmx5KSB7XG4gICAgICBsZXQgbmV3VmFsdWU7XG4gICAgICBpZiAoIXNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgIH0gZWxzZSBpZiAoaGFzTWFueSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZE9wdGlvbikpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1ZhbHVlID0gc2VsZWN0ZWRPcHRpb24udmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sIFtcbiAgICByZWFkT25seSxcbiAgICBoYXNNYW55LFxuICAgIHNldFZhbHVlLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RJbnB1dFxuICAgICAgcGF0aD17cGF0aH1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgIHZhbHVlPXt2YWx1ZSBhcyBzdHJpbmcgfCBzdHJpbmdbXX1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgaGFzTWFueT17aGFzTWFueX1cbiAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICBpc0NsZWFyYWJsZT17aXNDbGVhcmFibGV9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oU2VsZWN0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3aXRoQ29uZGl0aW9uIiwidXNlRmllbGQiLCJzZWxlY3QiLCJTZWxlY3RJbnB1dCIsImZvcm1hdE9wdGlvbnMiLCJvcHRpb25zIiwibWFwIiwib3B0aW9uIiwidmFsdWUiLCJsYWJlbCIsIlNlbGVjdCIsInByb3BzIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJuYW1lIiwidmFsaWRhdGUiLCJvcHRpb25zRnJvbVByb3BzIiwiaGFzTWFueSIsInJlcXVpcmVkIiwiYWRtaW4iLCJyZWFkT25seSIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJkZXNjcmlwdGlvbiIsImlzQ2xlYXJhYmxlIiwiY29uZGl0aW9uIiwiaXNTb3J0YWJsZSIsInNldE9wdGlvbnMiLCJtZW1vaXplZFZhbGlkYXRlIiwidmFsaWRhdGlvbk9wdGlvbnMiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRPcHRpb24iLCJuZXdWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDaEUsT0FBT0MsbUJBQW1CLHNCQUFzQjtBQUNoRCxPQUFPQyxjQUFjLGlCQUFpQjtBQUN0QyxTQUFTQyxNQUFNLFFBQVEsb0NBQW9DO0FBRzNELE9BQU9DLGlCQUFpQixVQUFVO0FBRWxDLElBQU1DLGdCQUFnQixTQUFDQztXQUFz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