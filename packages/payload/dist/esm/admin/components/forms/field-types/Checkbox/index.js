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
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import useField from "../../useField";
import withCondition from "../../withCondition";
import Error from "../../Error";
import { checkbox } from "../../../../../fields/validations";
import FieldDescription from "../../FieldDescription";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { CheckboxInput } from "./Input";
import "./index.scss";
var baseClass = "checkbox";
var Checkbox = function(props) {
    var name = props.name, pathFromProps = props.path, _props_validate = props.validate, validate = _props_validate === void 0 ? checkbox : _props_validate, label = props.label, onChange = props.onChange, disableFormData = props.disableFormData, required = props.required, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition;
    var i18n = useTranslation().i18n;
    var path = pathFromProps || name;
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
        disableFormData: disableFormData,
        condition: condition
    }), value = _useField.value, showError = _useField.showError, errorMessage = _useField.errorMessage, setValue = _useField.setValue;
    var onToggle = useCallback(function() {
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
    return /*#__PURE__*/ React.createElement("div", {
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
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__error-wrap")
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    })), /*#__PURE__*/ React.createElement(CheckboxInput, {
        onToggle: onToggle,
        id: fieldID,
        label: getTranslation(label || name, i18n),
        name: path,
        checked: Boolean(value),
        readOnly: readOnly
    }), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default withCondition(Checkbox);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCB7IGNoZWNrYm94IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IENoZWNrYm94SW5wdXQgfSBmcm9tICcuL0lucHV0JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY2hlY2tib3gnO1xuXG5jb25zdCBDaGVja2JveDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgdmFsaWRhdGUgPSBjaGVja2JveCxcbiAgICBsYWJlbCxcbiAgICBvbkNoYW5nZSxcbiAgICBkaXNhYmxlRm9ybURhdGEsXG4gICAgcmVxdWlyZWQsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY29uZGl0aW9uLFxuICAgIH0gPSB7fSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4ub3B0aW9ucywgcmVxdWlyZWQgfSk7XG4gIH0sIFt2YWxpZGF0ZSwgcmVxdWlyZWRdKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBzZXRWYWx1ZSxcbiAgfSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGRpc2FibGVGb3JtRGF0YSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IG9uVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghcmVhZE9ubHkpIHtcbiAgICAgIHNldFZhbHVlKCF2YWx1ZSk7XG4gICAgICBpZiAodHlwZW9mIG9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSBvbkNoYW5nZSghdmFsdWUpO1xuICAgIH1cbiAgfSwgW29uQ2hhbmdlLCByZWFkT25seSwgc2V0VmFsdWUsIHZhbHVlXSk7XG5cbiAgY29uc3QgZmllbGRJRCA9IGBmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICdmaWVsZC10eXBlJyxcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICB2YWx1ZSAmJiBgJHtiYXNlQ2xhc3N9LS1jaGVja2VkYCxcbiAgICAgICAgcmVhZE9ubHkgJiYgYCR7YmFzZUNsYXNzfS0tcmVhZC1vbmx5YCxcbiAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Vycm9yLXdyYXBgfT5cbiAgICAgICAgPEVycm9yXG4gICAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q2hlY2tib3hJbnB1dFxuICAgICAgICBvblRvZ2dsZT17b25Ub2dnbGV9XG4gICAgICAgIGlkPXtmaWVsZElEfVxuICAgICAgICBsYWJlbD17Z2V0VHJhbnNsYXRpb24obGFiZWwgfHwgbmFtZSwgaTE4bil9XG4gICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgIGNoZWNrZWQ9e0Jvb2xlYW4odmFsdWUpfVxuICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAvPlxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihDaGVja2JveCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVRyYW5zbGF0aW9uIiwidXNlRmllbGQiLCJ3aXRoQ29uZGl0aW9uIiwiRXJyb3IiLCJjaGVja2JveCIsIkZpZWxkRGVzY3JpcHRpb24iLCJnZXRUcmFuc2xhdGlvbiIsIkNoZWNrYm94SW5wdXQiLCJiYXNlQ2xhc3MiLCJDaGVja2JveCIsInByb3BzIiwibmFtZSIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwidmFsaWRhdGUiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiZGlzYWJsZUZvcm1EYXRhIiwicmVxdWlyZWQiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwiaTE4biIsIm1lbW9pemVkVmFsaWRhdGUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzaG93RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRWYWx1ZSIsIm9uVG9nZ2xlIiwiZmllbGRJRCIsInJlcGxhY2UiLCJkaXYiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIm1lc3NhZ2UiLCJpZCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLFFBQVEsUUFBUTtBQUMzQyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLE9BQU9DLG1CQUFtQixzQkFBc0I7QUFDaEQsT0FBT0MsV0FBVyxjQUFjO0FBQ2hDLFNBQVNDLFFBQVEsUUFBUSxvQ0FBb0M7QUFDN0QsT0FBT0Msc0JBQXNCLHlCQUF5QjtBQUV0RCxTQUFTQyxjQUFjLFFBQVEsMENBQTBDO0FBQ3pFLFNBQVNDLGFBQWEsUUFBUSxVQUFVO0FBRXhDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLFdBQTRCLFNBQUNDO0lBQ2pDLElBQ0VDLE9BZUVELE1BZkZDLE1BQ0FDLEFBQU1DLGdCQWNKSCxNQWRGRSx3QkFjRUYsTUFiRkksVUFBQUEsd0NBQVdWLDRCQUNYVyxRQVlFTCxNQVpGSyxPQUNBQyxXQVdFTixNQVhGTSxVQUNBQyxrQkFVRVAsTUFWRk8saUJBQ0FDLFdBU0VSLE1BVEZRLFVBQ08sTUFRTFIsTUFSRlMsY0FBTyxpQkFPSCxDQUFDLElBUEUsS0FDTEMsZ0JBQUFBLFVBQ0FDLGFBQUFBLE9BQ0FDLGlCQUFBQSxXQUNBQyxhQUFBQSxPQUNBQyxtQkFBQUEsYUFDQUMsaUJBQUFBO0lBSUosSUFBTSxBQUFFQyxPQUFTMUIsaUJBQVQwQjtJQUVSLElBQU1kLE9BQU9DLGlCQUFpQkY7SUFFOUIsSUFBTWdCLG1CQUFtQjVCLFlBQVksU0FBQzZCLE9BQU9DO1FBQzNDLE9BQU9mLFNBQVNjLE9BQU8sd0NBQUtDO1lBQVNYLFVBQUFBOztJQUN2QyxHQUFHO1FBQUNKO1FBQVVJO0tBQVM7SUFFdkIsSUFLSWpCLFlBQUFBLFNBQVM7UUFDWFcsTUFBQUE7UUFDQUUsVUFBVWE7UUFDVlYsaUJBQUFBO1FBQ0FRLFdBQUFBO0lBQ0YsSUFURUcsUUFJRTNCLFVBSkYyQixPQUNBRSxZQUdFN0IsVUFIRjZCLFdBQ0FDLGVBRUU5QixVQUZGOEIsY0FDQUMsV0FDRS9CLFVBREYrQjtJQVFGLElBQU1DLFdBQVdsQyxZQUFZO1FBQzNCLElBQUksQ0FBQ3FCLFVBQVU7WUFDYlksU0FBUyxDQUFDSjtZQUNWLElBQUksT0FBT1osYUFBYSxZQUFZQSxTQUFTLENBQUNZO1FBQ2hEO0lBQ0YsR0FBRztRQUFDWjtRQUFVSTtRQUFVWTtRQUFVSjtLQUFNO0lBRXhDLElBQU1NLFVBQVUsQUFBQyxTQUFtQyxPQUEzQnRCLEtBQUt1QixPQUFPLENBQUMsUUFBUTtJQUU5QyxxQkFDRSxvQkFBQ0M7UUFDQ2QsV0FBVztZQUNUO1lBQ0FkO1lBQ0FzQixhQUFhO1lBQ2JSO1lBQ0FNLFNBQVMsQUFBQyxHQUFZLE9BQVZwQixXQUFVO1lBQ3RCWSxZQUFZLEFBQUMsR0FBWSxPQUFWWixXQUFVO1NBQzFCLENBQUM2QixNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUN2QmxCLE9BQU8sd0NBQ0ZBO1lBQ0hFLE9BQUFBOztxQkFHRixvQkFBQ2E7UUFBSWQsV0FBVyxBQUFDLEdBQVksT0FBVmQsV0FBVTtxQkFDM0Isb0JBQUNMO1FBQ0MyQixXQUFXQTtRQUNYVSxTQUFTVDt1QkFHYixvQkFBQ3hCO1FBQ0MwQixVQUFVQTtRQUNWUSxJQUFJUDtRQUNKbkIsT0FBT1QsZUFBZVMsU0FBU0osTUFBTWU7UUFDckNmLE1BQU1DO1FBQ044QixTQUFTSixRQUFRVjtRQUNqQlIsVUFBVUE7c0JBRVosb0JBQUNmO1FBQ0N1QixPQUFPQTtRQUNQSixhQUFhQTs7QUFJckI7QUFFQSxlQUFldEIsY0FBY08sVUFBVSJ9