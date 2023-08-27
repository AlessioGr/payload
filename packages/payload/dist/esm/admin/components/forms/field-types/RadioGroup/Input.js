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
import Error from "../../Error";
import Label from "../../Label";
import FieldDescription from "../../FieldDescription";
import RadioInput from "./RadioInput";
import { optionIsObject } from "../../../../../fields/config/types";
import "./index.scss";
var baseClass = "radio-group";
var RadioGroupInput = function(props) {
    var name = props.name, pathFromProps = props.path, required = props.required, label = props.label, readOnly = props.readOnly, _props_layout = props.layout, layout = _props_layout === void 0 ? "horizontal" : _props_layout, style = props.style, className = props.className, width = props.width, description = props.description, onChange = props.onChange, value = props.value, showError = props.showError, errorMessage = props.errorMessage, options = props.options;
    var path = pathFromProps || name;
    var classes = [
        "field-type",
        baseClass,
        className,
        "".concat(baseClass, "--layout-").concat(layout),
        showError && "error",
        readOnly && "".concat(baseClass, "--read-only")
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
        htmlFor: "field-".concat(path),
        label: label,
        required: required
    }), /*#__PURE__*/ React.createElement("ul", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        className: "".concat(baseClass, "--group")
    }, options.map(function(option) {
        var optionValue = "";
        if (optionIsObject(option)) {
            optionValue = option.value;
        } else {
            optionValue = option;
        }
        var isSelected = String(optionValue) === String(value);
        return /*#__PURE__*/ React.createElement("li", {
            key: "".concat(path, " - ").concat(optionValue)
        }, /*#__PURE__*/ React.createElement(RadioInput, {
            path: path,
            isSelected: isSelected,
            option: optionIsObject(option) ? option : {
                label: option,
                value: option
            },
            onChange: readOnly ? undefined : onChange
        }));
    })), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default RadioGroupInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgUmFkaW9JbnB1dCBmcm9tICcuL1JhZGlvSW5wdXQnO1xuaW1wb3J0IHsgb3B0aW9uSXNPYmplY3QsIFJhZGlvRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IERlc2NyaXB0aW9uIH0gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbi90eXBlcyc7XG5pbXBvcnQgeyBPbkNoYW5nZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyYWRpby1ncm91cCc7XG5cbmV4cG9ydCB0eXBlIFJhZGlvR3JvdXBJbnB1dFByb3BzID0gT21pdDxSYWRpb0ZpZWxkLCAndHlwZSc+ICYge1xuICBzaG93RXJyb3I/OiBib29sZWFuXG4gIGVycm9yTWVzc2FnZT86IHN0cmluZ1xuICByZWFkT25seT86IGJvb2xlYW5cbiAgcGF0aD86IHN0cmluZ1xuICByZXF1aXJlZD86IGJvb2xlYW5cbiAgbGF5b3V0PzogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJ1xuICBkZXNjcmlwdGlvbj86IERlc2NyaXB0aW9uXG4gIG9uQ2hhbmdlPzogT25DaGFuZ2VcbiAgdmFsdWU/OiBzdHJpbmdcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICB3aWR0aD86IHN0cmluZ1xufVxuXG5jb25zdCBSYWRpb0dyb3VwSW5wdXQ6IFJlYWN0LkZDPFJhZGlvR3JvdXBJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHJlcXVpcmVkLFxuICAgIGxhYmVsLFxuICAgIHJlYWRPbmx5LFxuICAgIGxheW91dCA9ICdob3Jpem9udGFsJyxcbiAgICBzdHlsZSxcbiAgICBjbGFzc05hbWUsXG4gICAgd2lkdGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgb25DaGFuZ2UsXG4gICAgdmFsdWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgICBvcHRpb25zLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICAgIGAke2Jhc2VDbGFzc30tLWxheW91dC0ke2xheW91dH1gLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgIHJlYWRPbmx5ICYmIGAke2Jhc2VDbGFzc30tLXJlYWQtb25seWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Vycm9yLXdyYXBgfT5cbiAgICAgICAgPEVycm9yXG4gICAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj17YGZpZWxkLSR7cGF0aH1gfVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIC8+XG4gICAgICA8dWxcbiAgICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc30tLWdyb3VwYH1cbiAgICAgID5cbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSAnJztcblxuICAgICAgICAgIGlmIChvcHRpb25Jc09iamVjdChvcHRpb24pKSB7XG4gICAgICAgICAgICBvcHRpb25WYWx1ZSA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9uVmFsdWUgPSBvcHRpb247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IFN0cmluZyhvcHRpb25WYWx1ZSkgPT09IFN0cmluZyh2YWx1ZSk7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17YCR7cGF0aH0gLSAke29wdGlvblZhbHVlfWB9PlxuICAgICAgICAgICAgICA8UmFkaW9JbnB1dFxuICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvcHRpb249e29wdGlvbklzT2JqZWN0KG9wdGlvbikgPyBvcHRpb24gOiB7IGxhYmVsOiBvcHRpb24sIHZhbHVlOiBvcHRpb24gfX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17cmVhZE9ubHkgPyB1bmRlZmluZWQgOiBvbkNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9Hcm91cElucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRXJyb3IiLCJMYWJlbCIsIkZpZWxkRGVzY3JpcHRpb24iLCJSYWRpb0lucHV0Iiwib3B0aW9uSXNPYmplY3QiLCJiYXNlQ2xhc3MiLCJSYWRpb0dyb3VwSW5wdXQiLCJwcm9wcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwibGFiZWwiLCJyZWFkT25seSIsImxheW91dCIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJkZXNjcmlwdGlvbiIsIm9uQ2hhbmdlIiwidmFsdWUiLCJzaG93RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJvcHRpb25zIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwibWVzc2FnZSIsImh0bWxGb3IiLCJ1bCIsImlkIiwicmVwbGFjZSIsIm1hcCIsIm9wdGlvbiIsIm9wdGlvblZhbHVlIiwiaXNTZWxlY3RlZCIsIlN0cmluZyIsImxpIiwia2V5IiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBVyxRQUFRO0FBRTFCLE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxXQUFXLGNBQWM7QUFDaEMsT0FBT0Msc0JBQXNCLHlCQUF5QjtBQUN0RCxPQUFPQyxnQkFBZ0IsZUFBZTtBQUN0QyxTQUFTQyxjQUFjLFFBQW9CLHFDQUFxQztBQUloRixPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQWtCbEIsSUFBTUMsa0JBQWtELFNBQUNDO0lBQ3ZELElBQ0VDLE9BZUVELE1BZkZDLE1BQ0FDLEFBQU1DLGdCQWNKSCxNQWRGRSxNQUNBRSxXQWFFSixNQWJGSSxVQUNBQyxRQVlFTCxNQVpGSyxPQUNBQyxXQVdFTixNQVhGTSwwQkFXRU4sTUFWRk8sUUFBQUEsb0NBQVMsOEJBQ1RDLFFBU0VSLE1BVEZRLE9BQ0FDLFlBUUVULE1BUkZTLFdBQ0FDLFFBT0VWLE1BUEZVLE9BQ0FDLGNBTUVYLE1BTkZXLGFBQ0FDLFdBS0VaLE1BTEZZLFVBQ0FDLFFBSUViLE1BSkZhLE9BQ0FDLFlBR0VkLE1BSEZjLFdBQ0FDLGVBRUVmLE1BRkZlLGNBQ0FDLFVBQ0VoQixNQURGZ0I7SUFHRixJQUFNZCxPQUFPQyxpQkFBaUJGO0lBRTlCLElBQU1nQixVQUFVO1FBQ2Q7UUFDQW5CO1FBQ0FXO1FBQ0MsR0FBdUJGLE9BQXJCVCxXQUFVLGFBQWtCLE9BQVBTO1FBQ3hCTyxhQUFhO1FBQ2JSLFlBQVksQUFBQyxHQUFZLE9BQVZSLFdBQVU7S0FDMUIsQ0FBQ29CLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLHFCQUNFLG9CQUFDQztRQUNDWixXQUFXUTtRQUNYVCxPQUFPLHdDQUNGQTtZQUNIRSxPQUFBQTs7cUJBR0Ysb0JBQUNXO1FBQUlaLFdBQVcsQUFBQyxHQUFZLE9BQVZYLFdBQVU7cUJBQzNCLG9CQUFDTDtRQUNDcUIsV0FBV0E7UUFDWFEsU0FBU1A7dUJBR2Isb0JBQUNyQjtRQUNDNkIsU0FBUyxBQUFDLFNBQWEsT0FBTHJCO1FBQ2xCRyxPQUFPQTtRQUNQRCxVQUFVQTtzQkFFWixvQkFBQ29CO1FBQ0NDLElBQUksQUFBQyxTQUFtQyxPQUEzQnZCLEtBQUt3QixPQUFPLENBQUMsUUFBUTtRQUNsQ2pCLFdBQVcsQUFBQyxHQUFZLE9BQVZYLFdBQVU7T0FFdkJrQixRQUFRVyxHQUFHLENBQUMsU0FBQ0M7UUFDWixJQUFJQyxjQUFjO1FBRWxCLElBQUloQyxlQUFlK0IsU0FBUztZQUMxQkMsY0FBY0QsT0FBT2YsS0FBSztRQUM1QixPQUFPO1lBQ0xnQixjQUFjRDtRQUNoQjtRQUVBLElBQU1FLGFBQWFDLE9BQU9GLGlCQUFpQkUsT0FBT2xCO1FBRWxELHFCQUNFLG9CQUFDbUI7WUFBR0MsS0FBSyxBQUFDLEdBQVlKLE9BQVYzQixNQUFLLE9BQWlCLE9BQVoyQjt5QkFDcEIsb0JBQUNqQztZQUNDTSxNQUFNQTtZQUNONEIsWUFBWUE7WUFDWkYsUUFBUS9CLGVBQWUrQixVQUFVQSxTQUFTO2dCQUFFdkIsT0FBT3VCO2dCQUFRZixPQUFPZTtZQUFPO1lBQ3pFaEIsVUFBVU4sV0FBVzRCLFlBQVl0Qjs7SUFJekMsbUJBRUYsb0JBQUNqQjtRQUNDa0IsT0FBT0E7UUFDUEYsYUFBYUE7O0FBSXJCO0FBRUEsZUFBZVosZ0JBQWdCIn0=