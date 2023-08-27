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
import useField from "../../useField";
import withCondition from "../../withCondition";
import { text } from "../../../../../fields/validations";
import TextInput from "./Input";
import { useLocale } from "../../../utilities/Locale";
import { useConfig } from "../../../utilities/Config";
import { isFieldRTL } from "../shared";
var Text = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? text : _props_validate, label = props.label, minLength = props.minLength, maxLength = props.maxLength, localized = props.localized, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, placeholder = _ref.placeholder, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, rtl = _ref.rtl, inputRef = props.inputRef;
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
            minLength: minLength,
            maxLength: maxLength,
            required: required
        }));
    }, [
        validate,
        minLength,
        maxLength,
        required
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField.value, showError = _useField.showError, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    return /*#__PURE__*/ React.createElement(TextInput, {
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
        placeholder: placeholder,
        readOnly: readOnly,
        style: style,
        className: className,
        width: width,
        description: description,
        inputRef: inputRef,
        rtl: isRTL
    });
};
export default withCondition(Text);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IHRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgaXNGaWVsZFJUTCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IFRleHQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICBuYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gdGV4dCxcbiAgICBsYWJlbCxcbiAgICBtaW5MZW5ndGgsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGxvY2FsaXplZCxcbiAgICBhZG1pbjoge1xuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIHJ0bCxcbiAgICB9ID0ge30sXG4gICAgaW5wdXRSZWYsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuICBjb25zdCBsb2NhbGUgPSB1c2VMb2NhbGUoKTtcblxuICBjb25zdCB7IGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IGlzUlRMID0gaXNGaWVsZFJUTCh7XG4gICAgZmllbGRSVEw6IHJ0bCxcbiAgICBmaWVsZExvY2FsaXplZDogbG9jYWxpemVkLFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbGl6YXRpb25Db25maWc6IGxvY2FsaXphdGlvbiB8fCB1bmRlZmluZWQsXG4gIH0pO1xuXG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCBtaW5MZW5ndGgsIG1heExlbmd0aCwgcmVxdWlyZWQgfSk7XG4gIH0sIFt2YWxpZGF0ZSwgbWluTGVuZ3RoLCBtYXhMZW5ndGgsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZDxzdHJpbmc+KHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dElucHV0XG4gICAgICBwYXRoPXtwYXRofVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICB9fVxuICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxuICAgICAgcnRsPXtpc1JUTH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihUZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRmllbGQiLCJ3aXRoQ29uZGl0aW9uIiwidGV4dCIsIlRleHRJbnB1dCIsInVzZUxvY2FsZSIsInVzZUNvbmZpZyIsImlzRmllbGRSVEwiLCJUZXh0IiwicHJvcHMiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsIm5hbWUiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwibGFiZWwiLCJtaW5MZW5ndGgiLCJtYXhMZW5ndGgiLCJsb2NhbGl6ZWQiLCJhZG1pbiIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiZGVzY3JpcHRpb24iLCJjb25kaXRpb24iLCJydGwiLCJpbnB1dFJlZiIsImxvY2FsZSIsImxvY2FsaXphdGlvbiIsImlzUlRMIiwiZmllbGRSVEwiLCJmaWVsZExvY2FsaXplZCIsImxvY2FsaXphdGlvbkNvbmZpZyIsInVuZGVmaW5lZCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFdBQVcsUUFBUSxRQUFRO0FBQzNDLE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLE9BQU9DLG1CQUFtQixzQkFBc0I7QUFDaEQsU0FBU0MsSUFBSSxRQUFRLG9DQUFvQztBQUV6RCxPQUFPQyxlQUFlLFVBQVU7QUFDaEMsU0FBU0MsU0FBUyxRQUFRLDRCQUE0QjtBQUN0RCxTQUFTQyxTQUFTLFFBQVEsNEJBQTRCO0FBQ3RELFNBQVNDLFVBQVUsUUFBUSxZQUFZO0FBRXZDLElBQU1DLE9BQXdCLFNBQUNDO0lBQzdCLElBQ0VDLEFBQU1DLGdCQW1CSkYsTUFuQkZDLE1BQ0FFLE9Ba0JFSCxNQWxCRkcsTUFDQUMsV0FpQkVKLE1BakJGSSw0QkFpQkVKLE1BaEJGSyxVQUFBQSx3Q0FBV1gsd0JBQ1hZLFFBZUVOLE1BZkZNLE9BQ0FDLFlBY0VQLE1BZEZPLFdBQ0FDLFlBYUVSLE1BYkZRLFdBQ0FDLFlBWUVULE1BWkZTLFdBQ08sTUFXTFQsTUFYRlUsY0FBTyxpQkFTSCxDQUFDLElBVEUsS0FDTEMsbUJBQUFBLGFBQ0FDLGdCQUFBQSxVQUNBQyxhQUFBQSxPQUNBQyxpQkFBQUEsV0FDQUMsYUFBQUEsT0FDQUMsbUJBQUFBLGFBQ0FDLGlCQUFBQSxXQUNBQyxXQUFBQSxLQUVGQyxXQUNFbkIsTUFERm1CO0lBR0YsSUFBTWxCLE9BQU9DLGlCQUFpQkM7SUFDOUIsSUFBTWlCLFNBQVN4QjtJQUVmLElBQU0sQUFBRXlCLGVBQWlCeEIsWUFBakJ3QjtJQUNSLElBQU1DLFFBQVF4QixXQUFXO1FBQ3ZCeUIsVUFBVUw7UUFDVk0sZ0JBQWdCZjtRQUNoQlcsUUFBQUE7UUFDQUssb0JBQW9CSixnQkFBZ0JLO0lBQ3RDO0lBR0EsSUFBTUMsbUJBQW1CcEMsWUFBWSxTQUFDcUMsT0FBT0M7UUFDM0MsT0FBT3hCLFNBQVN1QixPQUFPLHdDQUFLQztZQUFTdEIsV0FBQUE7WUFBV0MsV0FBQUE7WUFBV0osVUFBQUE7O0lBQzdELEdBQUc7UUFBQ0M7UUFBVUU7UUFBV0M7UUFBV0o7S0FBUztJQUU3QyxJQUtJWixZQUFBQSxTQUFpQjtRQUNuQlMsTUFBQUE7UUFDQUksVUFBVXNCO1FBQ1ZWLFdBQUFBO0lBQ0YsSUFSRVcsUUFJRXBDLFVBSkZvQyxPQUNBRSxZQUdFdEMsVUFIRnNDLFdBQ0FDLFdBRUV2QyxVQUZGdUMsVUFDQUMsZUFDRXhDLFVBREZ3QztJQU9GLHFCQUNFLG9CQUFDckM7UUFDQ00sTUFBTUE7UUFDTkUsTUFBTUE7UUFDTjhCLFVBQVUsU0FBQ0M7WUFDVEgsU0FBU0csRUFBRUMsTUFBTSxDQUFDUCxLQUFLO1FBQ3pCO1FBQ0FFLFdBQVdBO1FBQ1hFLGNBQWNBO1FBQ2Q1QixVQUFVQTtRQUNWRSxPQUFPQTtRQUNQc0IsT0FBT0E7UUFDUGpCLGFBQWFBO1FBQ2JDLFVBQVVBO1FBQ1ZDLE9BQU9BO1FBQ1BDLFdBQVdBO1FBQ1hDLE9BQU9BO1FBQ1BDLGFBQWFBO1FBQ2JHLFVBQVVBO1FBQ1ZELEtBQUtJOztBQUdYO0FBRUEsZUFBZTdCLGNBQWNNLE1BQU0ifQ==