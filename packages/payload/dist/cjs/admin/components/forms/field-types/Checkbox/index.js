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
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _validations = require("../../../../../fields/validations");
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _getTranslation = require("../../../../../utilities/getTranslation");
var _Input = require("./Input");
require("./index.scss");
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
var baseClass = "checkbox";
var Checkbox = function(props) {
    var name = props.name, pathFromProps = props.path, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.checkbox : _props_validate, label = props.label, onChange = props.onChange, disableFormData = props.disableFormData, required = props.required, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var path = pathFromProps || name;
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
        disableFormData: disableFormData,
        condition: condition
    }), value = _useField1.value, showError = _useField1.showError, errorMessage = _useField1.errorMessage, setValue = _useField1.setValue;
    var onToggle = (0, _react.useCallback)(function() {
        if (!readOnly) {
            setValue(!value);
            if (typeof onChange === "function") onChange(!value);
        }
    }, [
        onChange,
        readOnly,
        setValue,
        value
    ]);
    var fieldID = "field-".concat(path.replace(/\./gi, "__"));
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            "field-type",
            baseClass,
            showError && "error",
            className,
            value && "".concat(baseClass, "--checked"),
            readOnly && "".concat(baseClass, "--read-only")
        ].filter(Boolean).join(" "),
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__error-wrap")
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    })), /*#__PURE__*/ _react.default.createElement(_Input.CheckboxInput, {
        onToggle: onToggle,
        id: fieldID,
        label: (0, _getTranslation.getTranslation)(label || name, i18n),
        name: path,
        checked: Boolean(value),
        readOnly: readOnly
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = (0, _withCondition.default)(Checkbox);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCB7IGNoZWNrYm94IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tICcuL0lucHV0JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY2hlY2tib3gnO1xuXG5jb25zdCBDaGVja2JveDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgdmFsaWRhdGUgPSBjaGVja2JveCxcbiAgICBsYWJlbCxcbiAgICBvbkNoYW5nZSxcbiAgICBkaXNhYmxlRm9ybURhdGEsXG4gICAgcmVxdWlyZWQsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY29uZGl0aW9uLFxuICAgIH0gPSB7fSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgcmVxdWlyZWQgfSk7XG4gIH0sIFt2YWxpZGF0ZSwgcmVxdWlyZWRdKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBzZXRWYWx1ZSxcbiAgfSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGRpc2FibGVGb3JtRGF0YSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IG9uVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghcmVhZE9ubHkpIHtcbiAgICAgIHNldFZhbHVlKCF2YWx1ZSk7XG4gICAgICBpZiAodHlwZW9mIG9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSBvbkNoYW5nZSghdmFsdWUpO1xuICAgIH1cbiAgfSwgW29uQ2hhbmdlLCByZWFkT25seSwgc2V0VmFsdWUsIHZhbHVlXSk7XG5cbiAgY29uc3QgZmllbGRJRCA9IGBmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICdmaWVsZC10eXBlJyxcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICB2YWx1ZSAmJiBgJHtiYXNlQ2xhc3N9LS1jaGVja2VkYCxcbiAgICAgICAgcmVhZE9ubHkgJiYgYCR7YmFzZUNsYXNzfS0tcmVhZC1vbmx5YCxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Vycm9yLXdyYXBgfT5cbiAgICAgICAgPEVycm9yXG4gICAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q2hlY2tib3hJbnB1dFxuICAgICAgICBvblRvZ2dsZT17b25Ub2dnbGV9XG4gICAgICAgIGlkPXtmaWVsZElEfVxuICAgICAgICBsYWJlbD17Z2V0VHJhbnNsYXRpb24obGFiZWwgfHwgbmFtZSwgaTE4bil9XG4gICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgIGNoZWNrZWQ9e0Jvb2xlYW4odmFsdWUpfVxuICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAvPlxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihDaGVja2JveCk7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiQ2hlY2tib3giLCJwcm9wcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInZhbGlkYXRlIiwiY2hlY2tib3giLCJsYWJlbCIsIm9uQ2hhbmdlIiwiZGlzYWJsZUZvcm1EYXRhIiwicmVxdWlyZWQiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwidXNlRmllbGQiLCJzaG93RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRWYWx1ZSIsIm9uVG9nZ2xlIiwiZmllbGRJRCIsInJlcGxhY2UiLCJkaXYiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkVycm9yIiwibWVzc2FnZSIsIkNoZWNrYm94SW5wdXQiLCJpZCIsImdldFRyYW5zbGF0aW9uIiwiY2hlY2tlZCIsIkZpZWxkRGVzY3JpcHRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9HQTs7O2VBQUE7Ozs2REFwR21DOzRCQUNKOytEQUNWO29FQUNLOzREQUNSOzJCQUNPO3VFQUNJOzhCQUVFO3FCQUNEO1FBRXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxXQUE0QixTQUFDQztJQUNqQyxJQUNFQyxPQWVFRCxNQWZGQyxNQUNBQyxBQUFNQyxnQkFjSkgsTUFkRkUsd0JBY0VGLE1BYkZJLFVBQUFBLHdDQUFXQyxxQkFBUSxvQkFDbkJDLFFBWUVOLE1BWkZNLE9BQ0FDLFdBV0VQLE1BWEZPLFVBQ0FDLGtCQVVFUixNQVZGUSxpQkFDQUMsV0FTRVQsTUFURlMsVUFDTyxNQVFMVCxNQVJGVSxjQUFPLGlCQU9ILENBQUMsSUFQRSxLQUNMQyxnQkFBQUEsVUFDQUMsYUFBQUEsT0FDQUMsaUJBQUFBLFdBQ0FDLGFBQUFBLE9BQ0FDLG1CQUFBQSxhQUNBQyxpQkFBQUE7SUFJSixJQUFNLEFBQUVDLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUVSLElBQU1mLE9BQU9DLGlCQUFpQkY7SUFFOUIsSUFBTWtCLG1CQUFtQkMsSUFBQUEsa0JBQVcsRUFBQyxTQUFDQyxPQUFPQztRQUMzQyxPQUFPbEIsU0FBU2lCLE9BQU8sd0NBQUtDO1lBQVNiLFVBQUFBOztJQUN2QyxHQUFHO1FBQUNMO1FBQVVLO0tBQVM7SUFFdkIsSUFLSWMsYUFBQUEsSUFBQUEsaUJBQVEsRUFBQztRQUNYckIsTUFBQUE7UUFDQUUsVUFBVWU7UUFDVlgsaUJBQUFBO1FBQ0FRLFdBQUFBO0lBQ0YsSUFURUssUUFJRUUsV0FKRkYsT0FDQUcsWUFHRUQsV0FIRkMsV0FDQUMsZUFFRUYsV0FGRkUsY0FDQUMsV0FDRUgsV0FERkc7SUFRRixJQUFNQyxXQUFXUCxJQUFBQSxrQkFBVyxFQUFDO1FBQzNCLElBQUksQ0FBQ1QsVUFBVTtZQUNiZSxTQUFTLENBQUNMO1lBQ1YsSUFBSSxPQUFPZCxhQUFhLFlBQVlBLFNBQVMsQ0FBQ2M7UUFDaEQ7SUFDRixHQUFHO1FBQUNkO1FBQVVJO1FBQVVlO1FBQVVMO0tBQU07SUFFeEMsSUFBTU8sVUFBVSxBQUFDLFNBQW1DLE9BQTNCMUIsS0FBSzJCLE9BQU8sQ0FBQyxRQUFRO0lBRTlDLHFCQUNFLDZCQUFDQztRQUNDakIsV0FBVztZQUNUO1lBQ0FmO1lBQ0EwQixhQUFhO1lBQ2JYO1lBQ0FRLFNBQVMsQUFBQyxHQUFZLE9BQVZ2QixXQUFVO1lBQ3RCYSxZQUFZLEFBQUMsR0FBWSxPQUFWYixXQUFVO1NBQzFCLENBQUNpQyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUN2QnJCLE9BQU8sd0NBQ0ZBO1lBQ0hFLE9BQUFBOztxQkFHRiw2QkFBQ2dCO1FBQUlqQixXQUFXLEFBQUMsR0FBWSxPQUFWZixXQUFVO3FCQUMzQiw2QkFBQ29DLGNBQUs7UUFDSlYsV0FBV0E7UUFDWFcsU0FBU1Y7dUJBR2IsNkJBQUNXLG9CQUFhO1FBQ1pULFVBQVVBO1FBQ1ZVLElBQUlUO1FBQ0p0QixPQUFPZ0MsSUFBQUEsOEJBQWMsRUFBQ2hDLFNBQVNMLE1BQU1nQjtRQUNyQ2hCLE1BQU1DO1FBQ05xQyxTQUFTUCxRQUFRWDtRQUNqQlYsVUFBVUE7c0JBRVosNkJBQUM2Qix5QkFBZ0I7UUFDZm5CLE9BQU9BO1FBQ1BOLGFBQWFBOztBQUlyQjtJQUVBLFdBQWUwQixJQUFBQSxzQkFBYSxFQUFDMUMifQ==