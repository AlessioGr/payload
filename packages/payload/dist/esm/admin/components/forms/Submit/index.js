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
import React, { forwardRef } from "react";
import { useForm, useFormProcessing } from "../Form/context";
import Button from "../../elements/Button";
import "./index.scss";
var baseClass = "form-submit";
var FormSubmit = /*#__PURE__*/ forwardRef(function(props, ref) {
    var children = props.children, id = props.buttonId, disabledFromProps = props.disabled, _props_type = props.type, type = _props_type === void 0 ? "submit" : _props_type;
    var processing = useFormProcessing();
    var disabled = useForm().disabled;
    var canSave = !(disabledFromProps || processing || disabled);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Button, _object_spread_props(_object_spread({
        ref: ref
    }, props), {
        id: id,
        type: type,
        disabled: canSave ? undefined : true
    }), children));
});
export default FormSubmit;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1N1Ym1pdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtUHJvY2Vzc2luZyB9IGZyb20gJy4uL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Zvcm0tc3VibWl0JztcblxuY29uc3QgRm9ybVN1Ym1pdCA9IGZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIFByb3BzPigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBidXR0b25JZDogaWQsIGRpc2FibGVkOiBkaXNhYmxlZEZyb21Qcm9wcywgdHlwZSA9ICdzdWJtaXQnIH0gPSBwcm9wcztcbiAgY29uc3QgcHJvY2Vzc2luZyA9IHVzZUZvcm1Qcm9jZXNzaW5nKCk7XG4gIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHVzZUZvcm0oKTtcbiAgY29uc3QgY2FuU2F2ZSA9ICEoZGlzYWJsZWRGcm9tUHJvcHMgfHwgcHJvY2Vzc2luZyB8fCBkaXNhYmxlZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICBkaXNhYmxlZD17Y2FuU2F2ZSA/IHVuZGVmaW5lZCA6IHRydWV9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1TdWJtaXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlRm9ybSIsInVzZUZvcm1Qcm9jZXNzaW5nIiwiQnV0dG9uIiwiYmFzZUNsYXNzIiwiRm9ybVN1Ym1pdCIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJidXR0b25JZCIsImlkIiwiZGlzYWJsZWQiLCJkaXNhYmxlZEZyb21Qcm9wcyIsInR5cGUiLCJwcm9jZXNzaW5nIiwiY2FuU2F2ZSIsImRpdiIsImNsYXNzTmFtZSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFVBQVUsUUFBUSxRQUFRO0FBQzFDLFNBQVNDLE9BQU8sRUFBRUMsaUJBQWlCLFFBQVEsa0JBQWtCO0FBQzdELE9BQU9DLFlBQVksd0JBQXdCO0FBRzNDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLDJCQUFhTCxXQUFxQyxTQUFDTSxPQUFPQztJQUM5RCxJQUFRQyxXQUF5RUYsTUFBekVFLFVBQVVDLEFBQVVDLEtBQXFESixNQUEvREcsVUFBY0UsQUFBVUMsb0JBQXVDTixNQUFqREssd0JBQWlETCxNQUFwQk8sTUFBQUEsZ0NBQU87SUFDcEUsSUFBTUMsYUFBYVo7SUFDbkIsSUFBTSxBQUFFUyxXQUFhVixVQUFiVTtJQUNSLElBQU1JLFVBQVUsQ0FBRUgsQ0FBQUEscUJBQXFCRSxjQUFjSCxRQUFPO0lBRTVELHFCQUNFLG9CQUFDSztRQUFJQyxXQUFXYjtxQkFDZCxvQkFBQ0Q7UUFDQ0ksS0FBS0E7T0FDREQ7UUFDSkksSUFBSUE7UUFDSkcsTUFBTUE7UUFDTkYsVUFBVUksVUFBVUcsWUFBWTtRQUUvQlY7QUFJVDtBQUVBLGVBQWVILFdBQVcifQ==