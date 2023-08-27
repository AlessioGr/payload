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
var TextareaInput = function(props) {
    var path = props.path, required = props.required, readOnly = props.readOnly, style = props.style, className = props.className, width = props.width, placeholder = props.placeholder, description = props.description, label = props.label, showError = props.showError, value = props.value, errorMessage = props.errorMessage, onChange = props.onChange, rows = props.rows, rtl = props.rtl;
    var i18n = useTranslation().i18n;
    var classes = [
        "field-type",
        "textarea",
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
    }), /*#__PURE__*/ React.createElement("label", {
        className: "textarea-outer",
        htmlFor: "field-".concat(path.replace(/\./gi, "__"))
    }, /*#__PURE__*/ React.createElement("div", {
        className: "textarea-inner"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "textarea-clone",
        "data-value": value || placeholder || ""
    }), /*#__PURE__*/ React.createElement("textarea", {
        className: "textarea-element",
        id: "field-".concat(path.replace(/\./gi, "__")),
        value: value || "",
        onChange: onChange,
        disabled: readOnly,
        placeholder: getTranslation(placeholder, i18n),
        name: path,
        rows: rows,
        "data-rtl": rtl
    }))), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default TextareaInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHRhcmVhL0lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJztcbmltcG9ydCB7IFRleHRhcmVhRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IERlc2NyaXB0aW9uIH0gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuZXhwb3J0IHR5cGUgVGV4dEFyZWFJbnB1dFByb3BzID0gT21pdDxUZXh0YXJlYUZpZWxkLCAndHlwZSc+ICYge1xuICBzaG93RXJyb3I/OiBib29sZWFuXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZ1xuICByZWFkT25seT86IGJvb2xlYW5cbiAgcGF0aDogc3RyaW5nXG4gIHJlcXVpcmVkPzogYm9vbGVhblxuICB2YWx1ZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IERlc2NyaXB0aW9uXG4gIG9uQ2hhbmdlPzogKGU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkXG4gIHBsYWNlaG9sZGVyPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHN0cmluZ1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHdpZHRoPzogc3RyaW5nXG4gIHJvd3M/OiBudW1iZXJcbiAgcnRsPzogYm9vbGVhbjtcbn1cblxuY29uc3QgVGV4dGFyZWFJbnB1dDogUmVhY3QuRkM8VGV4dEFyZWFJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aCxcbiAgICByZXF1aXJlZCxcbiAgICByZWFkT25seSxcbiAgICBzdHlsZSxcbiAgICBjbGFzc05hbWUsXG4gICAgd2lkdGgsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbGFiZWwsXG4gICAgc2hvd0Vycm9yLFxuICAgIHZhbHVlLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBvbkNoYW5nZSxcbiAgICByb3dzLFxuICAgIHJ0bCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICAndGV4dGFyZWEnLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICByZWFkT25seSAmJiAncmVhZC1vbmx5JyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RXJyb3JcbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIC8+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYS1vdXRlclwiXG4gICAgICAgIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhLWlubmVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dGFyZWEtY2xvbmVcIlxuICAgICAgICAgICAgZGF0YS12YWx1ZT17dmFsdWUgfHwgcGxhY2Vob2xkZXIgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhLWVsZW1lbnRcIlxuICAgICAgICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgICAgZGF0YS1ydGw9e3J0bH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUlucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJMYWJlbCIsIkVycm9yIiwiRmllbGREZXNjcmlwdGlvbiIsImdldFRyYW5zbGF0aW9uIiwiVGV4dGFyZWFJbnB1dCIsInByb3BzIiwicGF0aCIsInJlcXVpcmVkIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsImxhYmVsIiwic2hvd0Vycm9yIiwidmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJvbkNoYW5nZSIsInJvd3MiLCJydGwiLCJpMThuIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwibWVzc2FnZSIsImh0bWxGb3IiLCJyZXBsYWNlIiwiZGF0YS12YWx1ZSIsInRleHRhcmVhIiwiaWQiLCJkaXNhYmxlZCIsIm5hbWUiLCJkYXRhLXJ0bCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFdBQTRCLFFBQVE7QUFDM0MsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxXQUFXLGNBQWM7QUFDaEMsT0FBT0MsV0FBVyxjQUFjO0FBQ2hDLE9BQU9DLHNCQUFzQix5QkFBeUI7QUFHdEQsU0FBU0MsY0FBYyxRQUFRLDBDQUEwQztBQUV6RSxPQUFPLGVBQWU7QUFtQnRCLElBQU1DLGdCQUE4QyxTQUFDQztJQUNuRCxJQUNFQyxPQWVFRCxNQWZGQyxNQUNBQyxXQWNFRixNQWRGRSxVQUNBQyxXQWFFSCxNQWJGRyxVQUNBQyxRQVlFSixNQVpGSSxPQUNBQyxZQVdFTCxNQVhGSyxXQUNBQyxRQVVFTixNQVZGTSxPQUNBQyxjQVNFUCxNQVRGTyxhQUNBQyxjQVFFUixNQVJGUSxhQUNBQyxRQU9FVCxNQVBGUyxPQUNBQyxZQU1FVixNQU5GVSxXQUNBQyxRQUtFWCxNQUxGVyxPQUNBQyxlQUlFWixNQUpGWSxjQUNBQyxXQUdFYixNQUhGYSxVQUNBQyxPQUVFZCxNQUZGYyxNQUNBQyxNQUNFZixNQURGZTtJQUdGLElBQU0sQUFBRUMsT0FBU3RCLGlCQUFUc0I7SUFFUixJQUFNQyxVQUFVO1FBQ2Q7UUFDQTtRQUNBWjtRQUNBSyxhQUFhO1FBQ2JQLFlBQVk7S0FDYixDQUFDZSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSxvQkFBQ0M7UUFDQ2hCLFdBQVdZO1FBQ1hiLE9BQU8sd0NBQ0ZBO1lBQ0hFLE9BQUFBOztxQkFHRixvQkFBQ1Y7UUFDQ2MsV0FBV0E7UUFDWFksU0FBU1Y7c0JBRVgsb0JBQUNqQjtRQUNDNEIsU0FBUyxBQUFDLFNBQW1DLE9BQTNCdEIsS0FBS3VCLE9BQU8sQ0FBQyxRQUFRO1FBQ3ZDZixPQUFPQTtRQUNQUCxVQUFVQTtzQkFFWixvQkFBQ087UUFDQ0osV0FBVTtRQUNWa0IsU0FBUyxBQUFDLFNBQW1DLE9BQTNCdEIsS0FBS3VCLE9BQU8sQ0FBQyxRQUFRO3FCQUV2QyxvQkFBQ0g7UUFBSWhCLFdBQVU7cUJBQ2Isb0JBQUNnQjtRQUNDaEIsV0FBVTtRQUNWb0IsY0FBWWQsU0FBU0osZUFBZTtzQkFFdEMsb0JBQUNtQjtRQUNDckIsV0FBVTtRQUNWc0IsSUFBSSxBQUFDLFNBQW1DLE9BQTNCMUIsS0FBS3VCLE9BQU8sQ0FBQyxRQUFRO1FBQ2xDYixPQUFPQSxTQUFTO1FBQ2hCRSxVQUFVQTtRQUNWZSxVQUFVekI7UUFDVkksYUFBYVQsZUFBZVMsYUFBYVM7UUFDekNhLE1BQU01QjtRQUNOYSxNQUFNQTtRQUNOZ0IsWUFBVWY7d0JBSWhCLG9CQUFDbEI7UUFDQ2MsT0FBT0E7UUFDUEgsYUFBYUE7O0FBSXJCO0FBRUEsZUFBZVQsY0FBYyJ9