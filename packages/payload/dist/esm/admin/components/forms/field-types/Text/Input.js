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
import React from "react";
import { useTranslation } from "react-i18next";
import Label from "../../Label";
import Error from "../../Error";
import FieldDescription from "../../FieldDescription";
import { getTranslation } from "../../../../../utilities/getTranslation";
import "./index.scss";
var TextInput = function(props) {
    var showError = props.showError, errorMessage = props.errorMessage, placeholder = props.placeholder, readOnly = props.readOnly, path = props.path, label = props.label, required = props.required, value = props.value, onChange = props.onChange, onKeyDown = props.onKeyDown, description = props.description, style = props.style, className = props.className, width = props.width, inputRef = props.inputRef, rtl = props.rtl;
    var i18n = useTranslation().i18n;
    var classes = [
        "field-type",
        "text",
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
    }), /*#__PURE__*/ React.createElement(Label, {
        htmlFor: "field-".concat(path.replace(/\./gi, "__")),
        label: label,
        required: required
    }), /*#__PURE__*/ React.createElement("input", {
        ref: inputRef,
        id: "field-".concat(path.replace(/\./gi, "__")),
        value: value || "",
        onChange: onChange,
        onKeyDown: onKeyDown,
        disabled: readOnly,
        placeholder: getTranslation(placeholder, i18n),
        type: "text",
        name: path,
        "data-rtl": rtl
    }), /*#__PURE__*/ React.createElement(FieldDescription, {
        className: "field-description-".concat(path.replace(/\./gi, "__")),
        value: value,
        description: description
    }));
};
export default TextInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHQvSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvbiB9IGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCB0eXBlIFRleHRJbnB1dFByb3BzID0gT21pdDxUZXh0RmllbGQsICd0eXBlJz4gJiB7XG4gIHNob3dFcnJvcj86IGJvb2xlYW47XG4gIGVycm9yTWVzc2FnZT86IHN0cmluZztcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBwYXRoOiBzdHJpbmc7XG4gIHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgdmFsdWU/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogRGVzY3JpcHRpb247XG4gIG9uQ2hhbmdlPzogKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xuICBvbktleURvd24/OiBSZWFjdC5LZXlib2FyZEV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgcGxhY2Vob2xkZXI/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgc3RyaW5nO1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXM7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgd2lkdGg/OiBzdHJpbmc7XG4gIGlucHV0UmVmPzogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PjtcbiAgcnRsPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFRleHRJbnB1dDogUmVhY3QuRkM8VGV4dElucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzaG93RXJyb3IsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIHJlYWRPbmx5LFxuICAgIHBhdGgsXG4gICAgbGFiZWwsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgb25LZXlEb3duLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHN0eWxlLFxuICAgIGNsYXNzTmFtZSxcbiAgICB3aWR0aCxcbiAgICBpbnB1dFJlZixcbiAgICBydGwsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ3RleHQnLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICByZWFkT25seSAmJiAncmVhZC1vbmx5JyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RXJyb3JcbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIC8+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e29uS2V5RG93bn1cbiAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICBwbGFjZWhvbGRlcj17Z2V0VHJhbnNsYXRpb24ocGxhY2Vob2xkZXIsIGkxOG4pfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgIGRhdGEtcnRsPXtydGx9XG4gICAgICAvPlxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQtZGVzY3JpcHRpb24tJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJMYWJlbCIsIkVycm9yIiwiRmllbGREZXNjcmlwdGlvbiIsImdldFRyYW5zbGF0aW9uIiwiVGV4dElucHV0IiwicHJvcHMiLCJzaG93RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5IiwicGF0aCIsImxhYmVsIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiaW5wdXRSZWYiLCJydGwiLCJpMThuIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwibWVzc2FnZSIsImh0bWxGb3IiLCJyZXBsYWNlIiwiaW5wdXQiLCJyZWYiLCJpZCIsImRpc2FibGVkIiwidHlwZSIsIm5hbWUiLCJkYXRhLXJ0bCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFdBQTRCLFFBQVE7QUFDM0MsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxXQUFXLGNBQWM7QUFDaEMsT0FBT0MsV0FBVyxjQUFjO0FBQ2hDLE9BQU9DLHNCQUFzQix5QkFBeUI7QUFHdEQsU0FBU0MsY0FBYyxRQUFRLDBDQUEwQztBQUV6RSxPQUFPLGVBQWU7QUFvQnRCLElBQU1DLFlBQXNDLFNBQUNDO0lBQzNDLElBQ0VDLFlBZ0JFRCxNQWhCRkMsV0FDQUMsZUFlRUYsTUFmRkUsY0FDQUMsY0FjRUgsTUFkRkcsYUFDQUMsV0FhRUosTUFiRkksVUFDQUMsT0FZRUwsTUFaRkssTUFDQUMsUUFXRU4sTUFYRk0sT0FDQUMsV0FVRVAsTUFWRk8sVUFDQUMsUUFTRVIsTUFURlEsT0FDQUMsV0FRRVQsTUFSRlMsVUFDQUMsWUFPRVYsTUFQRlUsV0FDQUMsY0FNRVgsTUFORlcsYUFDQUMsUUFLRVosTUFMRlksT0FDQUMsWUFJRWIsTUFKRmEsV0FDQUMsUUFHRWQsTUFIRmMsT0FDQUMsV0FFRWYsTUFGRmUsVUFDQUMsTUFDRWhCLE1BREZnQjtJQUdGLElBQU0sQUFBRUMsT0FBU3ZCLGlCQUFUdUI7SUFFUixJQUFNQyxVQUFVO1FBQ2Q7UUFDQTtRQUNBTDtRQUNBWixhQUFhO1FBQ2JHLFlBQVk7S0FDYixDQUFDZSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSxvQkFBQ0M7UUFDQ1QsV0FBV0s7UUFDWE4sT0FBTyx3Q0FDRkE7WUFDSEUsT0FBQUE7O3FCQUdGLG9CQUFDbEI7UUFDQ0ssV0FBV0E7UUFDWHNCLFNBQVNyQjtzQkFFWCxvQkFBQ1A7UUFDQzZCLFNBQVMsQUFBQyxTQUFtQyxPQUEzQm5CLEtBQUtvQixPQUFPLENBQUMsUUFBUTtRQUN2Q25CLE9BQU9BO1FBQ1BDLFVBQVVBO3NCQUVaLG9CQUFDbUI7UUFDQ0MsS0FBS1o7UUFDTGEsSUFBSSxBQUFDLFNBQW1DLE9BQTNCdkIsS0FBS29CLE9BQU8sQ0FBQyxRQUFRO1FBQ2xDakIsT0FBT0EsU0FBUztRQUNoQkMsVUFBVUE7UUFDVkMsV0FBV0E7UUFDWG1CLFVBQVV6QjtRQUNWRCxhQUFhTCxlQUFlSyxhQUFhYztRQUN6Q2EsTUFBSztRQUNMQyxNQUFNMUI7UUFDTjJCLFlBQVVoQjtzQkFFWixvQkFBQ25CO1FBQ0NnQixXQUFXLEFBQUMscUJBQStDLE9BQTNCUixLQUFLb0IsT0FBTyxDQUFDLFFBQVE7UUFDckRqQixPQUFPQTtRQUNQRyxhQUFhQTs7QUFJckI7QUFFQSxlQUFlWixVQUFVIn0=