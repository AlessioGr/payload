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
import { radio } from "../../../../../fields/validations";
import RadioGroupInput from "./Input";
var RadioGroup = function(props) {
    var name = props.name, pathFromProps = props.path, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? radio : _props_validate, label = props.label, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, _ref_layout = _ref.layout, layout = _ref_layout === void 0 ? "horizontal" : _ref_layout, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, options = props.options;
    var path = pathFromProps || name;
    var memoizedValidate = useCallback(function(value, validationOptions) {
        return validate(value, _object_spread_props(_object_spread({}, validationOptions), {
            options: options,
            required: required
        }));
    }, [
        validate,
        options,
        required
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField.value, showError = _useField.showError, errorMessage = _useField.errorMessage, setValue = _useField.setValue;
    return /*#__PURE__*/ React.createElement(RadioGroupInput, {
        path: path,
        name: name,
        onChange: readOnly ? undefined : setValue,
        value: value,
        showError: showError,
        errorMessage: errorMessage,
        required: required,
        label: label,
        layout: layout,
        style: style,
        className: className,
        width: width,
        description: description,
        options: options
    });
};
export default withCondition(RadioGroup);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IHJhZGlvIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgUmFkaW9Hcm91cElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5jb25zdCBSYWRpb0dyb3VwOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICByZXF1aXJlZCxcbiAgICB2YWxpZGF0ZSA9IHJhZGlvLFxuICAgIGxhYmVsLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIGxheW91dCA9ICdob3Jpem9udGFsJyxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICB9ID0ge30sXG4gICAgb3B0aW9ucyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgdmFsaWRhdGlvbk9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gdmFsaWRhdGUodmFsdWUsIHsgLi4udmFsaWRhdGlvbk9wdGlvbnMsIG9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIG9wdGlvbnMsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgc2V0VmFsdWUsXG4gIH0gPSB1c2VGaWVsZDxzdHJpbmc+KHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmFkaW9Hcm91cElucHV0XG4gICAgICBwYXRoPXtwYXRofVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIG9uQ2hhbmdlPXtyZWFkT25seSA/IHVuZGVmaW5lZCA6IHNldFZhbHVlfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFJhZGlvR3JvdXApO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VGaWVsZCIsIndpdGhDb25kaXRpb24iLCJyYWRpbyIsIlJhZGlvR3JvdXBJbnB1dCIsIlJhZGlvR3JvdXAiLCJwcm9wcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJsYWJlbCIsImFkbWluIiwicmVhZE9ubHkiLCJsYXlvdXQiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiZGVzY3JpcHRpb24iLCJjb25kaXRpb24iLCJvcHRpb25zIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInZhbHVlIiwidmFsaWRhdGlvbk9wdGlvbnMiLCJzaG93RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxRQUFRLFFBQVE7QUFDM0MsT0FBT0MsY0FBYyxpQkFBaUI7QUFDdEMsT0FBT0MsbUJBQW1CLHNCQUFzQjtBQUNoRCxTQUFTQyxLQUFLLFFBQVEsb0NBQW9DO0FBRTFELE9BQU9DLHFCQUFxQixVQUFVO0FBRXRDLElBQU1DLGFBQThCLFNBQUNDO0lBQ25DLElBQ0VDLE9BZUVELE1BZkZDLE1BQ0FDLEFBQU1DLGdCQWNKSCxNQWRGRSxNQUNBRSxXQWFFSixNQWJGSSw0QkFhRUosTUFaRkssVUFBQUEsd0NBQVdSLHlCQUNYUyxRQVdFTixNQVhGTSxPQUNPLE1BVUxOLE1BVkZPLGNBQU8saUJBUUgsQ0FBQyxJQVJFLEtBQ0xDLGdCQUFBQSw2QkFDQUMsUUFBQUEsa0NBQVMsNEJBQ1RDLGFBQUFBLE9BQ0FDLGlCQUFBQSxXQUNBQyxhQUFBQSxPQUNBQyxtQkFBQUEsYUFDQUMsaUJBQUFBLFdBRUZDLFVBQ0VmLE1BREZlO0lBR0YsSUFBTWIsT0FBT0MsaUJBQWlCRjtJQUU5QixJQUFNZSxtQkFBbUJ0QixZQUFZLFNBQUN1QixPQUFPQztRQUMzQyxPQUFPYixTQUFTWSxPQUFPLHdDQUFLQztZQUFtQkgsU0FBQUE7WUFBU1gsVUFBQUE7O0lBQzFELEdBQUc7UUFBQ0M7UUFBVVU7UUFBU1g7S0FBUztJQUVoQyxJQUtJVCxZQUFBQSxTQUFpQjtRQUNuQk8sTUFBQUE7UUFDQUcsVUFBVVc7UUFDVkYsV0FBQUE7SUFDRixJQVJFRyxRQUlFdEIsVUFKRnNCLE9BQ0FFLFlBR0V4QixVQUhGd0IsV0FDQUMsZUFFRXpCLFVBRkZ5QixjQUNBQyxXQUNFMUIsVUFERjBCO0lBT0YscUJBQ0Usb0JBQUN2QjtRQUNDSSxNQUFNQTtRQUNORCxNQUFNQTtRQUNOcUIsVUFBVWQsV0FBV2UsWUFBWUY7UUFDakNKLE9BQU9BO1FBQ1BFLFdBQVdBO1FBQ1hDLGNBQWNBO1FBQ2RoQixVQUFVQTtRQUNWRSxPQUFPQTtRQUNQRyxRQUFRQTtRQUNSQyxPQUFPQTtRQUNQQyxXQUFXQTtRQUNYQyxPQUFPQTtRQUNQQyxhQUFhQTtRQUNiRSxTQUFTQTs7QUFHZjtBQUVBLGVBQWVuQixjQUFjRyxZQUFZIn0=