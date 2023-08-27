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
require("./index.scss");
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
var baseClass = "point";
var PointField = function(props) {
    var name = props.name, pathFromProps = props.path, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.point : _props_validate, label = props.label, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, step = _ref.step, placeholder = _ref.placeholder, description = _ref.description, condition = _ref.condition;
    var path = pathFromProps || name;
    var _useTranslation = (0, _reacti18next.useTranslation)("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var _useField1 = (0, _useField.default)({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), _useField_value = _useField1.value, value = _useField_value === void 0 ? [
        null,
        null
    ] : _useField_value, showError = _useField1.showError, setValue = _useField1.setValue, errorMessage = _useField1.errorMessage;
    var handleChange = (0, _react.useCallback)(function(e, index) {
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
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ _react.default.createElement("ul", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "field-longitude-".concat(path.replace(/\./gi, "__")),
        label: "".concat((0, _getTranslation.getTranslation)(label || name, i18n), " - ").concat(t("longitude")),
        required: required
    }), /*#__PURE__*/ _react.default.createElement("input", {
        id: "field-longitude-".concat(path.replace(/\./gi, "__")),
        value: value && typeof value[0] === "number" ? value[0] : "",
        onChange: function(e) {
            return handleChange(e, 0);
        },
        disabled: readOnly,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        type: "number",
        name: "".concat(path, ".longitude"),
        step: step
    })), /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "field-latitude-".concat(path.replace(/\./gi, "__")),
        label: "".concat((0, _getTranslation.getTranslation)(label || name, i18n), " - ").concat(t("latitude")),
        required: required
    }), /*#__PURE__*/ _react.default.createElement("input", {
        id: "field-latitude-".concat(path.replace(/\./gi, "__")),
        value: value && typeof value[1] === "number" ? value[1] : "",
        onChange: function(e) {
            return handleChange(e, 1);
        },
        disabled: readOnly,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        type: "number",
        name: "".concat(path, ".latitude"),
        step: step
    }))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = (0, _withCondition.default)(PointField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1BvaW50L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IHBvaW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BvaW50JztcblxuY29uc3QgUG9pbnRGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBwb2ludCxcbiAgICBsYWJlbCxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHdpZHRoLFxuICAgICAgc3RlcCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb25kaXRpb24sXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlID0gW251bGwsIG51bGxdLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZDxbbnVtYmVyLCBudW1iZXJdPih7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChlLCBpbmRleDogMCB8IDEpID0+IHtcbiAgICBsZXQgdmFsID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKE51bWJlci5pc05hTih2YWwpKSB7XG4gICAgICB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbLi4udmFsdWVdO1xuICAgIGNvb3JkaW5hdGVzW2luZGV4XSA9IHZhbDtcbiAgICBzZXRWYWx1ZShjb29yZGluYXRlcyk7XG4gIH0sIFtzZXRWYWx1ZSwgdmFsdWVdKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgIHJlYWRPbmx5ICYmICdyZWFkLW9ubHknLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxMYWJlbFxuICAgICAgICAgICAgaHRtbEZvcj17YGZpZWxkLWxvbmdpdHVkZS0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgICAgbGFiZWw9e2Ake2dldFRyYW5zbGF0aW9uKGxhYmVsIHx8IG5hbWUsIGkxOG4pfSAtICR7dCgnbG9uZ2l0dWRlJyl9YH1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2BmaWVsZC1sb25naXR1ZGUtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgICAgIHZhbHVlPXsodmFsdWUgJiYgdHlwZW9mIHZhbHVlWzBdID09PSAnbnVtYmVyJykgPyB2YWx1ZVswXSA6ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgMCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0VHJhbnNsYXRpb24ocGxhY2Vob2xkZXIsIGkxOG4pfVxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBuYW1lPXtgJHtwYXRofS5sb25naXR1ZGVgfVxuICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICBodG1sRm9yPXtgZmllbGQtbGF0aXR1ZGUtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgICAgIGxhYmVsPXtgJHtnZXRUcmFuc2xhdGlvbihsYWJlbCB8fCBuYW1lLCBpMThuKX0gLSAke3QoJ2xhdGl0dWRlJyl9YH1cbiAgICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9e2BmaWVsZC1sYXRpdHVkZS0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgICAgdmFsdWU9eyh2YWx1ZSAmJiB0eXBlb2YgdmFsdWVbMV0gPT09ICdudW1iZXInKSA/IHZhbHVlWzFdIDogJyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCAxKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRUcmFuc2xhdGlvbihwbGFjZWhvbGRlciwgaTE4bil9XG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIG5hbWU9e2Ake3BhdGh9LmxhdGl0dWRlYH1cbiAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFBvaW50RmllbGQpO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlBvaW50RmllbGQiLCJwcm9wcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJwb2ludCIsImxhYmVsIiwiYWRtaW4iLCJyZWFkT25seSIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJzdGVwIiwicGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJtZW1vaXplZFZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsIm9wdGlvbnMiLCJ1c2VGaWVsZCIsInNob3dFcnJvciIsInNldFZhbHVlIiwiZXJyb3JNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImluZGV4IiwidmFsIiwicGFyc2VGbG9hdCIsInRhcmdldCIsIk51bWJlciIsImlzTmFOIiwiY29vcmRpbmF0ZXMiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJFcnJvciIsIm1lc3NhZ2UiLCJ1bCIsImxpIiwiTGFiZWwiLCJodG1sRm9yIiwicmVwbGFjZSIsImdldFRyYW5zbGF0aW9uIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJ0eXBlIiwiRmllbGREZXNjcmlwdGlvbiIsIndpdGhDb25kaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBK0hBOzs7ZUFBQTs7OzZEQS9IbUM7NEJBQ0o7K0RBQ1Y7NERBQ0g7NERBQ0E7dUVBQ1c7b0VBQ0g7MkJBQ0o7OEJBRVM7UUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxhQUE4QixTQUFDQztJQUNuQyxJQUNFQyxPQWVFRCxN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