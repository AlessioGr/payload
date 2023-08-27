function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import useField from "../../useField";
import Label from "../../Label";
import Error from "../../Error";
import FieldDescription from "../../FieldDescription";
import withCondition from "../../withCondition";
import { point } from "../../../../../fields/validations";
import { getTranslation } from "../../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "point";
var PointField = function(props) {
    var name = props.name, pathFromProps = props.path, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? point : _props_validate, label = props.label, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, step = _ref.step, placeholder = _ref.placeholder, description = _ref.description, condition = _ref.condition;
    var path = pathFromProps || name;
    var _useTranslation = useTranslation("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var memoizedValidate = useCallback(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), _useField_value = _useField.value, value = _useField_value === void 0 ? [
        null,
        null
    ] : _useField_value, showError = _useField.showError, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    var handleChange = useCallback(function(e, index) {
        var val = parseFloat(e.target.value);
        if (Number.isNaN(val)) {
            val = e.target.value;
        }
        var coordinates = _to_consumable_array(value);
        coordinates[index] = val;
        setValue(coordinates);
    }, [
        setValue,
        value
    ]);
    var classes = [
        "field-type",
        baseClass,
        className,
        showError && "error",
        readOnly && "read-only"
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ React.createElement("ul", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(Label, {
        htmlFor: "field-longitude-".concat(path.replace(/\./gi, "__")),
        label: "".concat(getTranslation(label || name, i18n), " - ").concat(t("longitude")),
        required: required
    }), /*#__PURE__*/ React.createElement("input", {
        id: "field-longitude-".concat(path.replace(/\./gi, "__")),
        value: value && typeof value[0] === "number" ? value[0] : "",
        onChange: function(e) {
            return handleChange(e, 0);
        },
        disabled: readOnly,
        placeholder: getTranslation(placeholder, i18n),
        type: "number",
        name: "".concat(path, ".longitude"),
        step: step
    })), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(Label, {
        htmlFor: "field-latitude-".concat(path.replace(/\./gi, "__")),
        label: "".concat(getTranslation(label || name, i18n), " - ").concat(t("latitude")),
        required: required
    }), /*#__PURE__*/ React.createElement("input", {
        id: "field-latitude-".concat(path.replace(/\./gi, "__")),
        value: value && typeof value[1] === "number" ? value[1] : "",
        onChange: function(e) {
            return handleChange(e, 1);
        },
        disabled: readOnly,
        placeholder: getTranslation(placeholder, i18n),
        type: "number",
        name: "".concat(path, ".latitude"),
        step: step
    }))), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default withCondition(PointField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1BvaW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IHBvaW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BvaW50JztcblxuY29uc3QgUG9pbnRGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBwb2ludCxcbiAgICBsYWJlbCxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHdpZHRoLFxuICAgICAgc3RlcCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb25kaXRpb24sXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlID0gW251bGwsIG51bGxdLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZDxbbnVtYmVyLCBudW1iZXJdPih7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCBpbmRleDogMCB8IDEpID0+IHtcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKE51bWJlci5pc05hTih2YWwpKSB7XG4gICAgICB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbLi4udmFsdWVdO1xuICAgIGNvb3JkaW5hdGVzW2luZGV4XSA9IHZhbDtcbiAgICBzZXRWYWx1ZShjb29yZGluYXRlcyk7XG4gIH0sIFtzZXRWYWx1ZSwgdmFsdWVdKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgIHJlYWRPbmx5ICYmICdyZWFkLW9ubHknLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj17YGZpZWxkLWxvbmdpdHVkZS0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgICAgbGFiZWw9e2Ake2dldFRyYW5zbGF0aW9uKGxhYmVsIHx8IG5hbWUsIGkxOG4pfSAtICR7dCgnbG9uZ2l0dWRlJyl9YH1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2BmaWVsZC1sb25naXR1ZGUtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgICAgIHZhbHVlPXsodmFsdWUgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnbnVtYmVyJykgPyB2YWx1ZVswXSA6ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgMCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0VHJhbnNsYXRpb24ocGxhY2Vob2xkZXIsIGkxOG4pfVxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPXtgJHtwYXRofS5sb25naXR1ZGVgfVxuICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICBodG1sRm9yPXtgZmllbGQtbGF0aXR1ZGUtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgICAgIGxhYmVsPXtgJHtnZXRUcmFuc2xhdGlvbihsYWJlbCB8fCBuYW1lLCBpMThuKX0gLSAke3QoJ2xhdGl0dWRlJyl9YH1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2BmaWVsZC1sYXRpdHVkZS0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgICAgdmFsdWU9eyh2YWx1ZSAmJiB0eXBlb2YgdmFsdWVbMV0gPT09ICdudW1iZXInKSA/IHZhbHVlWzFdIDogJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAxKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9e2Ake3BhdGh9LmxhdGl0dWRlYH1cbiAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFBvaW50RmllbGQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUZpZWxkIiwiTGFiZWwiLCJFcnJvciIsIkZpZWxkRGVzY3JpcHRpb24iLCJ3aXRoQ29uZGl0aW9uIiwicG9pbnQiLCJnZXRUcmFuc2xhdGlvbiIsImJhc2VDbGFzcyIsIlBvaW50RmllbGQiLCJwcm9wcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJsYWJlbCIsImFkbWluIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwic3RlcCIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJjb25kaXRpb24iLCJ0IiwiaTE4biIsIm1lbW9pemVkVmFsaWRhdGUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsImhhbmRsZUNoYW5nZSIsImUiLCJpbmRleCIsInZhbCIsInBhcnNlRmxvYXQiLCJ0YXJnZXQiLCJOdW1iZXIiLCJpc05hTiIsImNvb3JkaW5hdGVzIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwibWVzc2FnZSIsInVsIiwibGkiLCJodG1sRm9yIiwicmVwbGFjZSIsImlucHV0IiwiaWQiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLFFBQVEsUUFBUTtBQUMzQyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxXQUFXLGNBQWM7QUFDaEMsT0FBT0Msc0JBQXNCLHlCQUF5QjtBQUN0RCxPQUFPQyxtQkFBbUIsc0JB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