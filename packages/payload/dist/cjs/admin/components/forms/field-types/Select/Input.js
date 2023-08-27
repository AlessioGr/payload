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
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
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
var SelectInput = function(props) {
    var showError = props.showError, errorMessage = props.errorMessage, readOnly = props.readOnly, path = props.path, label = props.label, required = props.required, value = props.value, onChange = props.onChange, description = props.description, style = props.style, className = props.className, width = props.width, options = props.options, hasMany = props.hasMany, isSortable = props.isSortable, isClearable = props.isClearable;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var classes = [
        "field-type",
        "select",
        className,
        showError && "error",
        readOnly && "read-only"
    ].filter(Boolean).join(" ");
    var valueToRender;
    if (hasMany && Array.isArray(value)) {
        valueToRender = value.map(function(val) {
            var _matchingOption;
            var matchingOption = options.find(function(option) {
                return option.value === val;
            });
            var _matchingOption_value;
            return {
                label: matchingOption ? (0, _getTranslation.getTranslation)(matchingOption.label, i18n) : val,
                value: (_matchingOption_value = (_matchingOption = matchingOption) === null || _matchingOption === void 0 ? void 0 : _matchingOption.value) !== null && _matchingOption_value !== void 0 ? _matchingOption_value : val
            };
        });
    } else if (value) {
        var _matchingOption;
        var matchingOption = options.find(function(option) {
            return option.value === value;
        });
        var _matchingOption_value;
        valueToRender = {
            label: matchingOption ? (0, _getTranslation.getTranslation)(matchingOption.label, i18n) : value,
            value: (_matchingOption_value = (_matchingOption = matchingOption) === null || _matchingOption === void 0 ? void 0 : _matchingOption.value) !== null && _matchingOption_value !== void 0 ? _matchingOption_value : value
        };
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        id: "field-".concat(path.replace(/\./gi, "__")),
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
    }), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        onChange: onChange,
        value: valueToRender,
        showError: showError,
        disabled: readOnly,
        options: options.map(function(option) {
            return _object_spread_props(_object_spread({}, option), {
                label: (0, _getTranslation.getTranslation)(option.label, i18n)
            });
        }),
        isMulti: hasMany,
        isSortable: isSortable,
        isClearable: isClearable
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = SelectInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1NlbGVjdC9JbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgT3B0aW9uT2JqZWN0LCBTZWxlY3RGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRGVzY3JpcHRpb24gfSBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uL3R5cGVzJztcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdCc7XG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9SZWFjdFNlbGVjdC90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuZXhwb3J0IHR5cGUgU2VsZWN0SW5wdXRQcm9wcyA9IE9taXQ8U2VsZWN0RmllbGQsICd0eXBlJyB8ICd2YWx1ZScgfCAnb3B0aW9ucyc+ICYge1xuICBzaG93RXJyb3I/OiBib29sZWFuXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZ1xuICByZWFkT25seT86IGJvb2xlYW5cbiAgcGF0aDogc3RyaW5nXG4gIHJlcXVpcmVkPzogYm9vbGVhblxuICB2YWx1ZT86IHN0cmluZyB8IHN0cmluZ1tdXG4gIGRlc2NyaXB0aW9uPzogRGVzY3JpcHRpb25cbiAgb25DaGFuZ2U/OiAodmFsdWU6IE9wdGlvbikgPT4gdm9pZFxuICBzdHlsZT86IFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgY2xhc3NOYW1lPzogc3RyaW5nXG4gIHdpZHRoPzogc3RyaW5nXG4gIGhhc01hbnk/OiBib29sZWFuXG4gIGlzU29ydGFibGU/OiBib29sZWFuXG4gIG9wdGlvbnM/OiBPcHRpb25PYmplY3RbXVxuICBpc0NsZWFyYWJsZT86IGJvb2xlYW5cbn1cblxuY29uc3QgU2VsZWN0SW5wdXQ6IFJlYWN0LkZDPFNlbGVjdElucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBzaG93RXJyb3IsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIHJlYWRPbmx5LFxuICAgIHBhdGgsXG4gICAgbGFiZWwsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgc3R5bGUsXG4gICAgY2xhc3NOYW1lLFxuICAgIHdpZHRoLFxuICAgIG9wdGlvbnMsXG4gICAgaGFzTWFueSxcbiAgICBpc1NvcnRhYmxlLFxuICAgIGlzQ2xlYXJhYmxlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgICdzZWxlY3QnLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzaG93RXJyb3IgJiYgJ2Vycm9yJyxcbiAgICByZWFkT25seSAmJiAncmVhZC1vbmx5JyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIGxldCB2YWx1ZVRvUmVuZGVyO1xuXG4gIGlmIChoYXNNYW55ICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFsdWVUb1JlbmRlciA9IHZhbHVlLm1hcCgodmFsKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IG9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHZhbCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYWJlbDogbWF0Y2hpbmdPcHRpb24gPyBnZXRUcmFuc2xhdGlvbihtYXRjaGluZ09wdGlvbi5sYWJlbCwgaTE4bikgOiB2YWwsXG4gICAgICAgIHZhbHVlOiBtYXRjaGluZ09wdGlvbj8udmFsdWUgPz8gdmFsLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgIGNvbnN0IG1hdGNoaW5nT3B0aW9uID0gb3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUpO1xuICAgIHZhbHVlVG9SZW5kZXIgPSB7XG4gICAgICBsYWJlbDogbWF0Y2hpbmdPcHRpb24gPyBnZXRUcmFuc2xhdGlvbihtYXRjaGluZ09wdGlvbi5sYWJlbCwgaTE4bikgOiB2YWx1ZSxcbiAgICAgIHZhbHVlOiBtYXRjaGluZ09wdGlvbj8udmFsdWUgPz8gdmFsdWUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RXJyb3JcbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIG1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIC8+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgLz5cbiAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZVRvUmVuZGVyIGFzIE9wdGlvbn1cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKHsgLi4ub3B0aW9uLCBsYWJlbDogZ2V0VHJhbnNsYXRpb24ob3B0aW9uLmxhYmVsLCBpMThuKSB9KSl9XG4gICAgICAgIGlzTXVsdGk9e2hhc01hbnl9XG4gICAgICAgIGlzU29ydGFibGU9e2lzU29ydGFibGV9XG4gICAgICAgIGlzQ2xlYXJhYmxlPXtpc0NsZWFyYWJsZX1cbiAgICAgIC8+XG4gICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RJbnB1dDtcbiJdLCJuYW1lcyI6WyJTZWxlY3RJbnB1dCIsInByb3BzIiwic2hvd0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwicmVhZE9ubHkiLCJwYXRoIiwibGFiZWwiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJvcHRpb25zIiwiaGFzTWFueSIsImlzU29ydGFibGUiLCJpc0NsZWFyYWJsZSIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInZhbHVlVG9SZW5kZXIiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJ2YWwiLCJtYXRjaGluZ09wdGlvbiIsImZpbmQiLCJvcHRpb24iLCJnZXRUcmFuc2xhdGlvbiIsImRpdiIsImlkIiwicmVwbGFjZSIsIkVycm9yIiwibWVzc2FnZSIsIkxhYmVsIiwiaHRtbEZvciIsIlJlYWN0U2VsZWN0IiwiZGlzYWJsZWQiLCJpc011bHRpIiwiRmllbGREZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFtSEE7OztlQUFBOzs7NERBbkhrQjs0QkFDYTs0REFDYjs0REFDQTt1RUFDVztrRUFHTDs4QkFFTztRQUV4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CUCxJQUFNQSxjQUEwQyxTQUFDQztJQUMvQyxJQUNFQyxZQWdCRUQsTUFoQkZDLFdBQ0FDLGVBZUVGLE1BZkZFLGNBQ0FDLFdBY0VILE1BZEZHLFVBQ0FDLE9BYUVKLE1BYkZJLE1BQ0FDLFFBWUVMLE1BWkZLLE9BQ0FDLFdBV0VOLE1BWEZNLFVBQ0FDLFFBVUVQLE1BVkZPLE9BQ0FDLFdBU0VSLE1BVEZRLFVBQ0FDLGNBUUVULE1BUkZTLGFBQ0FDLFFBT0VWLE1BUEZVLE9BQ0FDLFlBTUVYLE1BTkZXLFdBQ0FDLFFBS0VaLE1BTEZZLE9BQ0FDLFVBSUViLE1BSkZhLFNBQ0FDLFVBR0VkLE1BSEZjLFNBQ0FDLGFBRUVmLE1BRkZlLFlBQ0FDLGNBQ0VoQixNQURGZ0I7SUFHRixJQUFNLEFBQUVDLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUVSLElBQU1FLFVBQVU7UUFDZDtRQUNBO1FBQ0FSO1FBQ0FWLGFBQWE7UUFDYkUsWUFBWTtLQUNiLENBQUNpQixNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixJQUFJQztJQUVKLElBQUlULFdBQVdVLE1BQU1DLE9BQU8sQ0FBQ2xCLFFBQVE7UUFDbkNnQixnQkFBZ0JoQixNQUFNbUIsR0FBRyxDQUFDLFNBQUNDO2dCQUloQkM7WUFIVCxJQUFNQSxpQkFBaUJmLFFBQVFnQixJQUFJLENBQUMsU0FBQ0M7dUJBQVdBLE9BQU92QixLQUFLLEtBQUtvQjs7Z0JBR3hEQztZQUZULE9BQU87Z0JBQ0x2QixPQUFPdUIsaUJBQWlCRyxJQUFBQSw4QkFBYyxFQUFDSCxlQUFldkIsS0FBSyxFQUFFWSxRQUFRVTtnQkFDckVwQixPQUFPcUIsQ0FBQUEseUJBQUFBLGtCQUFBQSw0QkFBQUEsc0NBQUFBLGdCQUFnQnJCLEtBQUssY0FBckJxQixtQ0FBQUEsd0JBQXlCRDtZQUNsQztRQUNGO0lBQ0YsT0FBTyxJQUFJcEIsT0FBTztZQUlQcUI7UUFIVCxJQUFNQSxpQkFBaUJmLFFBQVFnQixJQUFJLENBQUMsU0FBQ0M7bUJBQVdBLE9BQU92QixLQUFLLEtBQUtBOztZQUd4RHFCO1FBRlRMLGdCQUFnQjtZQUNkbEIsT0FBT3VCLGlCQUFpQkcsSUFBQUEsOEJBQWMsRUFBQ0gsZUFBZXZCLEtBQUssRUFBRVksUUFBUVY7WUFDckVBLE9BQU9xQixDQUFBQSx5QkFBQUEsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCckIsS0FBSyxjQUFyQnFCLG1DQUFBQSx3QkFBeUJyQjtRQUNsQztJQUNGO0lBRUEscUJBQ0UsNkJBQUN5QjtRQUNDQyxJQUFJLEFBQUMsU0FBbUMsT0FBM0I3QixLQUFLOEIsT0FBTyxDQUFDLFFBQVE7UUFDbEN2QixXQUFXUTtRQUNYVCxPQUFPLHdDQUNGQTtZQUNIRSxPQUFBQTs7cUJBR0YsNkJBQUN1QixjQUFLO1FBQ0psQyxXQUFXQTtRQUNYbUMsU0FBU2xDO3NCQUVYLDZCQUFDbUMsY0FBSztRQUNKQyxTQUFTLEFBQUMsU0FBbUMsT0FBM0JsQyxLQUFLOEIsT0FBTyxDQUFDLFFBQVE7UUFDdkM3QixPQUFPQTtRQUNQQyxVQUFVQTtzQkFFWiw2QkFBQ2lDLG9CQUFXO1FBQ1YvQixVQUFVQTtRQUNWRCxPQUFPZ0I7UUFDUHRCLFdBQVdBO1FBQ1h1QyxVQUFVckM7UUFDVlUsU0FBU0EsUUFBUWEsR0FBRyxDQUFDLFNBQUNJO21CQUFZLHdDQUFLQTtnQkFBUXpCLE9BQU8wQixJQUFBQSw4QkFBYyxFQUFDRCxPQUFPekIsS0FBSyxFQUFFWTs7O1FBQ25Gd0IsU0FBUzNCO1FBQ1RDLFlBQVlBO1FBQ1pDLGFBQWFBO3NCQUVmLDZCQUFDMEIseUJBQWdCO1FBQ2ZuQyxPQUFPQTtRQUNQRSxhQUFhQTs7QUFJckI7SUFFQSxXQUFlViJ9