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
import { textarea } from "../../../../../fields/validations";
import TextareaInput from "./Input";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { useLocale } from "../../../utilities/Locale";
import "./index.scss";
import { useConfig } from "../../../utilities/Config";
import { isFieldRTL } from "../shared";
var Textarea = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? textarea : _props_validate, maxLength = props.maxLength, minLength = props.minLength, localized = props.localized, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, placeholder = _ref.placeholder, rows = _ref.rows, description = _ref.description, condition = _ref.condition, rtl = _ref.rtl, label = props.label;
    var i18n = useTranslation().i18n;
    var path = pathFromProps || name;
    var locale = useLocale();
    var localization = useConfig().localization;
    var isRTL = isFieldRTL({
        fieldRTL: rtl,
        fieldLocalized: localized,
        locale: locale,
        localizationConfig: localization || undefined
    });
    var memoizedValidate = useCallback(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required,
            maxLength: maxLength,
            minLength: minLength
        }));
    }, [
        validate,
        required,
        maxLength,
        minLength
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField.value, showError = _useField.showError, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    return /*#__PURE__*/ React.createElement(TextareaInput, {
        path: path,
        name: name,
        onChange: function(e) {
            setValue(e.target.value);
        },
        showError: showError,
        errorMessage: errorMessage,
        required: required,
        label: label,
        value: value,
        placeholder: getTranslation(placeholder, i18n),
        readOnly: readOnly,
        style: style,
        className: className,
        width: width,
        description: description,
        rows: rows,
        rtl: isRTL
    });
};
export default withCondition(Textarea);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHRhcmVhL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgdGV4dGFyZWEgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBUZXh0YXJlYUlucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgaXNGaWVsZFJUTCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IFRleHRhcmVhOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgbmFtZSxcbiAgICByZXF1aXJlZCxcbiAgICB2YWxpZGF0ZSA9IHRleHRhcmVhLFxuICAgIG1heExlbmd0aCxcbiAgICBtaW5MZW5ndGgsXG4gICAgbG9jYWxpemVkLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJvd3MsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIHJ0bCxcbiAgICB9ID0ge30sXG4gICAgbGFiZWwsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCBsb2NhbGUgPSB1c2VMb2NhbGUoKTtcblxuICBjb25zdCB7IGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IGlzUlRMID0gaXNGaWVsZFJUTCh7XG4gICAgZmllbGRSVEw6IHJ0bCxcbiAgICBmaWVsZExvY2FsaXplZDogbG9jYWxpemVkLFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbGl6YXRpb25Db25maWc6IGxvY2FsaXphdGlvbiB8fCB1bmRlZmluZWQsXG4gIH0pO1xuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCB9KTtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZCwgbWF4TGVuZ3RoLCBtaW5MZW5ndGhdKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIHNldFZhbHVlLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgfSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dGFyZWFJbnB1dFxuICAgICAgcGF0aD17cGF0aH1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgfX1cbiAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nfVxuICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgcm93cz17cm93c31cbiAgICAgIHJ0bD17aXNSVEx9XG4gICAgLz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFRleHRhcmVhKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VGaWVsZCIsIndpdGhDb25kaXRpb24iLCJ0ZXh0YXJlYSIsIlRleHRhcmVhSW5wdXQiLCJnZXRUcmFuc2xhdGlvbiIsInVzZUxvY2FsZSIsInVzZUNvbmZpZyIsImlzRmllbGRSVEwiLCJUZXh0YXJlYSIsInByb3BzIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJuYW1lIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsIm1heExlbmd0aCIsIm1pbkxlbmd0aCIsImxvY2FsaXplZCIsImFkbWluIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJyb3dzIiwiZGVzY3JpcHRpb24iLCJjb25kaXRpb24iLCJydGwiLCJsYWJlbCIsImkxOG4iLCJsb2NhbGUiLCJsb2NhbGl6YXRpb24iLCJpc1JUTCIsImZpZWxkUlRMIiwiZmllbGRMb2NhbGl6ZWQiLCJsb2NhbGl6YXRpb25Db25maWciLCJ1bmRlZmluZWQiLCJtZW1vaXplZFZhbGlkYXRlIiwidmFsdWUiLCJvcHRpb25zIiwic2hvd0Vycm9yIiwic2V0VmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLFFBQVEsUUFBUTtBQUMzQyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLE9BQU9DLG1CQUFtQixzQkFBc0I7QUFDaEQsU0FBU0MsUUFBUSxRQUFRLG9DQUFvQztBQUU3RCxPQUFPQyxtQkFBbUIsVUFBVTtBQUNwQyxTQUFTQyxjQUFjLFFBQVEsMENBQTBDO0FBQ3pFLFNBQVNDLFNBQVMsUUFBUSw0QkFBNEI7QUFFdEQsT0FBTyxlQUFlO0FBQ3RCLFNBQVNDLFNBQVMsUUFBUSw0QkFBNEI7QUFDdEQsU0FBU0MsVUFBVSxRQUFRLFlBQVk7QUFFdkMsSUFBTUMsV0FBNEIsU0FBQ0M7SUFDakMsSUFDRUMsQUFBTUMsZ0JBbUJKRixNQW5CRkMsTUFDQUUsT0FrQkVILE1BbEJGRyxNQUNBQyxXQWlCRUosTUFqQkZJLDRCQWlCRUosTUFoQkZLLFVBQUFBLHdDQUFXWiw0QkFDWGEsWUFlRU4sTUFmRk0sV0FDQUMsWUFjRVAsTUFkRk8sV0FDQUMsWUFhRVIsTUFiRlEsV0FDTyxNQVlMUixNQVpGUyxjQUFPLGlCQVVILENBQUMsSUFWRSxLQUNMQyxnQkFBQUEsVUFDQUMsYUFBQUEsT0FDQUMsaUJBQUFBLFdBQ0FDLGFBQUFBLE9BQ0FDLG1CQUFBQSxhQUNBQyxZQUFBQSxNQUNBQyxtQkFBQUEsYUFDQUMsaUJBQUFBLFdBQ0FDLFdBQUFBLEtBRUZDLFFBQ0VuQixNQURGbUI7SUFHRixJQUFNLEFBQUVDLE9BQVM5QixpQkFBVDhCO0lBRVIsSUFBTW5CLE9BQU9DLGlCQUFpQkM7SUFFOUIsSUFBTWtCLFNBQVN6QjtJQUVmLElBQU0sQUFBRTBCLGVBQWlCekIsWUFBakJ5QjtJQUNSLElBQU1DLFFBQVF6QixXQUFXO1FBQ3ZCMEIsVUFBVU47UUFDVk8sZ0JBQWdCakI7UUFDaEJhLFFBQUFBO1FBQ0FLLG9CQUFvQkosZ0JBQWdCSztJQUN0QztJQUNBLElBQU1DLG1CQUFtQnZDLFlBQVksU0FBQ3dDLE9BQU9DO1FBQzNDLE9BQU96QixTQUFTd0IsT0FBTyx3Q0FBS0M7WUFBUzFCLFVBQUFBO1lBQVVFLFdBQUFBO1lBQVdDLFdBQUFBOztJQUM1RCxHQUFHO1FBQUNGO1FBQVVEO1FBQVVFO1FBQVdDO0tBQVU7SUFFN0MsSUFLSWhCLFlBQUFBLFNBQVM7UUFDWFUsTUFBQUE7UUFDQUksVUFBVXVCO1FBQ1ZYLFdBQUFBO0lBQ0YsSUFSRVksUUFJRXRDLFVBSkZzQyxPQUNBRSxZQUdFeEMsVUFIRndDLFdBQ0FDLFdBRUV6QyxVQUZGeUMsVUFDQUMsZUFDRTFDLFVBREYwQztJQU9GLHFCQUNFLG9CQUFDdkM7UUFDQ08sTUFBTUE7UUFDTkUsTUFBTUE7UUFDTitCLFVBQVUsU0FBQ0M7WUFDVEgsU0FBU0csRUFBRUMsTUFBTSxDQUFDUCxLQUFLO1FBQ3pCO1FBQ0FFLFdBQVdBO1FBQ1hFLGNBQWNBO1FBQ2Q3QixVQUFVQTtRQUNWZSxPQUFPQTtRQUNQVSxPQUFPQTtRQUNQZixhQUFhbkIsZUFBZW1CLGFBQWFNO1FBQ3pDVixVQUFVQTtRQUNWQyxPQUFPQTtRQUNQQyxXQUFXQTtRQUNYQyxPQUFPQTtRQUNQRyxhQUFhQTtRQUNiRCxNQUFNQTtRQUNORyxLQUFLSzs7QUFHWDtBQUNBLGVBQWUvQixjQUFjTyxVQUFVIn0=