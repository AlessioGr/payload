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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _getTranslation = require("../../../../../utilities/getTranslation");
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
var TextareaInput = function(props) {
    var path = props.path, required = props.required, readOnly = props.readOnly, style = props.style, className = props.className, width = props.width, placeholder = props.placeholder, description = props.description, label = props.label, showError = props.showError, value = props.value, errorMessage = props.errorMessage, onChange = props.onChange, rows = props.rows, rtl = props.rtl;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var classes = [
        "field-type",
        "textarea",
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
    }), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "field-".concat(path.replace(/\./gi, "__")),
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement("label", {
        className: "textarea-outer",
        htmlFor: "field-".concat(path.replace(/\./gi, "__"))
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "textarea-inner"
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "textarea-clone",
        "data-value": value || placeholder || ""
    }), /*#__PURE__*/ _react.default.createElement("textarea", {
        className: "textarea-element",
        id: "field-".concat(path.replace(/\./gi, "__")),
        value: value || "",
        onChange: onChange,
        disabled: readOnly,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        name: path,
        rows: rows,
        "data-rtl": rtl
    }))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = TextareaInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHRhcmVhL0lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJztcbmltcG9ydCB7IFRleHRhcmVhRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IERlc2NyaXB0aW9uIH0gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuZXhwb3J0IHR5cGUgVGV4dEFyZWFJbnB1dFByb3BzID0gT21pdDxUZXh0YXJlYUZpZWxkLCAndHlwZSc+ICYge1xuICBzaG93RXJyb3I/OiBib29sZWFuXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZ1xuICByZWFkT25seT86IGJvb2xlYW5cbiAgcGF0aDogc3RyaW5nXG4gIHJlcXVpcmVkPzogYm9vbGVhblxuICB2YWx1ZT86IHN0cmluZ1xuICBkZXNjcmlwdGlvbj86IERlc2NyaXB0aW9uXG4gIG9uQ2hhbmdlPzogKGU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PiB2b2lkXG4gIHBsYWNlaG9sZGVyPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHN0cmluZ1xuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHdpZHRoPzogc3RyaW5nXG4gIHJvd3M/OiBudW1iZXJcbiAgcnRsPzogYm9vbGVhbjtcbn1cblxuY29uc3QgVGV4dGFyZWFJbnB1dDogUmVhY3QuRkM8VGV4dEFyZWFJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aCxcbiAgICByZXF1aXJlZCxcbiAgICByZWFkT25seSxcbiAgICBzdHlsZSxcbiAgICBjbGFzc05hbWUsXG4gICAgd2lkdGgsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgbGFiZWwsXG4gICAgc2hvd0Vycm9yLFxuICAgIHZhbHVlLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBvbkNoYW5nZSxcbiAgICByb3dzLFxuICAgIHJ0bCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICAndGV4dGFyZWEnLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICByZWFkT25seSAmJiAncmVhZC1vbmx5JyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RXJyb3JcbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIC8+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbFxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0YXJlYS1vdXRlclwiXG4gICAgICAgIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhLWlubmVyXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dGFyZWEtY2xvbmVcIlxuICAgICAgICAgICAgZGF0YS12YWx1ZT17dmFsdWUgfHwgcGxhY2Vob2xkZXIgfHwgJyd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhLWVsZW1lbnRcIlxuICAgICAgICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlIHx8ICcnfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgICAgZGF0YS1ydGw9e3J0bH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUlucHV0O1xuIl0sIm5hbWVzIjpbIlRleHRhcmVhSW5wdXQiLCJwcm9wcyIsInBhdGgiLCJyZXF1aXJlZCIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJsYWJlbCIsInNob3dFcnJvciIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwib25DaGFuZ2UiLCJyb3dzIiwicnRsIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwiRXJyb3IiLCJtZXNzYWdlIiwiTGFiZWwiLCJodG1sRm9yIiwicmVwbGFjZSIsImRhdGEtdmFsdWUiLCJ0ZXh0YXJlYSIsImlkIiwiZGlzYWJsZWQiLCJnZXRUcmFuc2xhdGlvbiIsIm5hbWUiLCJkYXRhLXJ0bCIsIkZpZWxkRGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBd0dBOzs7ZUFBQTs7OzREQXhHbUM7NEJBQ0o7NERBQ2I7NERBQ0E7dUVBQ1c7OEJBR0U7UUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQlAsSUFBTUEsZ0JBQThDLFNBQUNDO0lBQ25ELElBQ0VDLE9BZUVELE1BZkZDLE1BQ0FDLFdBY0VGLE1BZEZFLFVBQ0FDLFdBYUVILE1BYkZHLFVBQ0FDLFFBWUVKLE1BWkZJLE9BQ0FDLFlBV0VMLE1BWEZLLFdBQ0FDLFFBVUVOLE1BVkZNLE9BQ0FDLGNBU0VQLE1BVEZPLGFBQ0FDLGNBUUVSLE1BUkZRLGFBQ0FDLFFBT0VULE1BUEZTLE9BQ0FDLFlBTUVWLE1BTkZVLFdBQ0FDLFFBS0VYLE1BTEZXLE9BQ0FDLGVBSUVaLE1BSkZZLGNBQ0FDLFdBR0ViLE1BSEZhLFVBQ0FDLE9BRUVkLE1BRkZjLE1BQ0FDLE1BQ0VmLE1BREZlO0lBR0YsSUFBTSxBQUFFQyxPQUFTQyxJQUFBQSw0QkFBYyxJQUF2QkQ7SUFFUixJQUFNRSxVQUFVO1FBQ2Q7UUFDQTtRQUNBYjtRQUNBSyxhQUFhO1FBQ2JQLFlBQVk7S0FDYixDQUFDZ0IsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0UsNkJBQUNDO1FBQ0NqQixXQUFXYTtRQUNYZCxPQUFPLHdDQUNGQTtZQUNIRSxPQUFBQTs7cUJBR0YsNkJBQUNpQixjQUFLO1FBQ0piLFdBQVdBO1FBQ1hjLFNBQVNaO3NCQUVYLDZCQUFDYSxjQUFLO1FBQ0pDLFNBQVMsQUFBQyxTQUFtQyxPQUEzQnpCLEtBQUswQixPQUFPLENBQUMsUUFBUTtRQUN2Q2xCLE9BQU9BO1FBQ1BQLFVBQVVBO3NCQUVaLDZCQUFDTztRQUNDSixXQUFVO1FBQ1ZxQixTQUFTLEFBQUMsU0FBbUMsT0FBM0J6QixLQUFLMEIsT0FBTyxDQUFDLFFBQVE7cUJBRXZDLDZCQUFDTDtRQUFJakIsV0FBVTtxQkFDYiw2QkFBQ2lCO1FBQ0NqQixXQUFVO1FBQ1Z1QixjQUFZakIsU0FBU0osZUFBZTtzQkFFdEMsNkJBQUNzQjtRQUNDeEIsV0FBVTtRQUNWeUIsSUFBSSxBQUFDLFNBQW1DLE9BQTNCN0IsS0FBSzBCLE9BQU8sQ0FBQyxRQUFRO1FBQ2xDaEIsT0FBT0EsU0FBUztRQUNoQkUsVUFBVUE7UUFDVmtCLFVBQVU1QjtRQUNWSSxhQUFheUIsSUFBQUEsOEJBQWMsRUFBQ3pCLGFBQWFTO1FBQ3pDaUIsTUFBTWhDO1FBQ05hLE1BQU1BO1FBQ05vQixZQUFVbkI7d0JBSWhCLDZCQUFDb0IseUJBQWdCO1FBQ2Z4QixPQUFPQTtRQUNQSCxhQUFhQTs7QUFJckI7SUFFQSxXQUFlVCJ9