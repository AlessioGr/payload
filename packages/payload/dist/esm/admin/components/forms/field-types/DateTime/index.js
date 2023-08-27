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
import DatePicker from "../../../elements/DatePicker";
import withCondition from "../../withCondition";
import useField from "../../useField";
import Label from "../../Label";
import Error from "../../Error";
import FieldDescription from "../../FieldDescription";
import { date as dateValidation } from "../../../../../fields/validations";
import { getTranslation } from "../../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "date-time-field";
var DateTime = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? dateValidation : _props_validate, label = props.label, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, placeholder = _ref.placeholder, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, date = _ref.date, description = _ref.description, condition = _ref.condition;
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
        condition: condition
    }), value = _useField.value, showError = _useField.showError, errorMessage = _useField.errorMessage, setValue = _useField.setValue;
    var classes = [
        "field-type",
        baseClass,
        className,
        showError && "".concat(baseClass, "--has-error"),
        readOnly && "read-only"
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__error-wrap")
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    })), /*#__PURE__*/ React.createElement(Label, {
        htmlFor: path,
        label: label,
        required: required
    }), /*#__PURE__*/ React.createElement("div", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        className: "".concat(baseClass, "__input-wrapper")
    }, /*#__PURE__*/ React.createElement(DatePicker, _object_spread_props(_object_spread({}, date), {
        placeholder: getTranslation(placeholder, i18n),
        readOnly: readOnly,
        onChange: function(incomingDate) {
            var _incomingDate;
            if (!readOnly) setValue(((_incomingDate = incomingDate) === null || _incomingDate === void 0 ? void 0 : _incomingDate.toISOString()) || null);
        },
        value: value
    }))), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default withCondition(DateTime);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0RhdGVUaW1lL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EYXRlUGlja2VyJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBkYXRlIGFzIGRhdGVWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2RhdGUtdGltZS1maWVsZCc7XG5cbmNvbnN0IERhdGVUaW1lOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgbmFtZSxcbiAgICByZXF1aXJlZCxcbiAgICB2YWxpZGF0ZSA9IGRhdGVWYWxpZGF0aW9uLFxuICAgIGxhYmVsLFxuICAgIGFkbWluOiB7XG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGRhdGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgc2V0VmFsdWUsXG4gIH0gPSB1c2VGaWVsZCh7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmIGAke2Jhc2VDbGFzc30tLWhhcy1lcnJvcmAsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Vycm9yLXdyYXBgfT5cbiAgICAgICAgPEVycm9yXG4gICAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj17cGF0aH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW5wdXQtd3JhcHBlcmB9XG4gICAgICA+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgey4uLmRhdGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhpbmNvbWluZ0RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVhZE9ubHkpIHNldFZhbHVlKGluY29taW5nRGF0ZT8udG9JU09TdHJpbmcoKSB8fCBudWxsKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSBhcyBEYXRlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKERhdGVUaW1lKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlVHJhbnNsYXRpb24iLCJEYXRlUGlja2VyIiwid2l0aENvbmRpdGlvbiIsInVzZUZpZWxkIiwiTGFiZWwiLCJFcnJvciIsIkZpZWxkRGVzY3JpcHRpb24iLCJkYXRlIiwiZGF0ZVZhbGlkYXRpb24iLCJnZXRUcmFuc2xhdGlvbiIsImJhc2VDbGFzcyIsIkRhdGVUaW1lIiwicHJvcHMiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsIm5hbWUiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwibGFiZWwiLCJhZG1pbiIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiZGVzY3JpcHRpb24iLCJjb25kaXRpb24iLCJpMThuIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInZhbHVlIiwib3B0aW9ucyIsInNob3dFcnJvciIsImVycm9yTWVzc2FnZSIsInNldFZhbHVlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwibWVzc2FnZSIsImh0bWxGb3IiLCJpZCIsInJlcGxhY2UiLCJvbkNoYW5nZSIsImluY29taW5nRGF0ZSIsInRvSVNPU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxRQUFRLFFBQVE7QUFFM0MsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxnQkFBZ0IsK0JBQStCO0FBQ3RELE9BQU9DLG1CQUFtQixzQkFBc0I7QUFDaEQsT0FBT0MsY0FBYyxpQkFBaUI7QUFDdEMsT0FBT0MsV0FBVyxjQUFjO0FBQ2hDLE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxzQkFBc0IseUJBQXlCO0FBQ3RELFNBQVNDLFFBQVFDLGNBQWMsUUFBUSxvQ0FBb0M7QUFFM0UsU0FBU0MsY0FBYyxRQUFRLDBDQUEwQztBQUV6RSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxXQUE0QixTQUFDQztJQUNqQyxJQUNFQyxBQUFNQyxnQkFlSkYsTUFmRkMsTUFDQUUsT0FjRUgsTUFkRkcsTUFDQUMsV0FhRUosTUFiRkksNEJBYUVKLE1BWkZLLFVBQUFBLHdDQUFXVCxrQ0FDWFUsUUFXRU4sTUFYRk0sT0FDTyxNQVVMTixNQVZGTyxjQUFPLGlCQVNILENBQUMsSUFURSxLQUNMQyxtQkFBQUEsYUFDQUMsZ0JBQUFBLFVBQ0FDLGFBQUFBLE9BQ0FDLGlCQUFBQSxXQUNBQyxhQUFBQSxPQUNBakIsWUFBQUEsTUFDQWtCLG1CQUFBQSxhQUNBQyxpQkFBQUE7SUFJSixJQUFNLEFBQUVDLE9BQVMzQixpQkFBVDJCO0lBRVIsSUFBTWQsT0FBT0MsaUJBQWlCQztJQUU5QixJQUFNYSxtQkFBbUI3QixZQUFZLFNBQUM4QixPQUFPQztRQUMzQyxPQUFPYixTQUFTWSxPQUFPLHdDQUFLQztZQUFTZCxVQUFBQTs7SUFDdkMsR0FBRztRQUFDQztRQUFVRDtLQUFTO0lBRXZCLElBS0liLFlBQUFBLFNBQVM7UUFDWFUsTUFBQUE7UUFDQUksVUFBVVc7UUFDVkYsV0FBQUE7SUFDRixJQVJFRyxRQUlFMUIsVUFKRjBCLE9BQ0FFLFlBR0U1QixVQUhGNEIsV0FDQUMsZUFFRTdCLFVBRkY2QixjQUNBQyxXQUNFOUIsVUFERjhCO0lBT0YsSUFBTUMsVUFBVTtRQUNkO1FBQ0F4QjtRQUNBYTtRQUNBUSxhQUFhLEFBQUMsR0FBWSxPQUFWckIsV0FBVTtRQUMxQlcsWUFBWTtLQUNiLENBQUNjLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLHFCQUNFLG9CQUFDQztRQUNDZixXQUFXVztRQUNYWixPQUFPLHdDQUNGQTtZQUNIRSxPQUFBQTs7cUJBR0Ysb0JBQUNjO1FBQUlmLFdBQVcsQUFBQyxHQUFZLE9BQVZiLFdBQVU7cUJBQzNCLG9CQUFDTDtRQUNDMEIsV0FBV0E7UUFDWFEsU0FBU1A7dUJBR2Isb0JBQUM1QjtRQUNDb0MsU0FBUzNCO1FBQ1RLLE9BQU9BO1FBQ1BGLFVBQVVBO3NCQUVaLG9CQUFDc0I7UUFDQ0csSUFBSSxBQUFDLFNBQW1DLE9BQTNCNUIsS0FBSzZCLE9BQU8sQ0FBQyxRQUFRO1FBQ2xDbkIsV0FBVyxBQUFDLEdBQVksT0FBVmIsV0FBVTtxQkFFeEIsb0JBQUNULG9EQUNLTTtRQUNKYSxhQUFhWCxlQUFlVyxhQUFhTztRQUN6Q04sVUFBVUE7UUFDVnNCLFVBQVUsU0FBQ0M7Z0JBQ2VBO1lBQXhCLElBQUksQ0FBQ3ZCLFVBQVVZLFNBQVNXLEVBQUFBLGdCQUFBQSwwQkFBQUEsb0NBQUFBLGNBQWNDLFdBQVcsT0FBTTtRQUN6RDtRQUNBaEIsT0FBT0E7d0JBR1gsb0JBQUN2QjtRQUNDdUIsT0FBT0E7UUFDUEosYUFBYUE7O0FBSXJCO0FBRUEsZUFBZXZCLGNBQWNTLFVBQVUifQ==