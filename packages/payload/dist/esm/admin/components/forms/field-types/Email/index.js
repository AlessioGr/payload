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
import withCondition from "../../withCondition";
import useField from "../../useField";
import Label from "../../Label";
import Error from "../../Error";
import FieldDescription from "../../FieldDescription";
import { email } from "../../../../../fields/validations";
import { getTranslation } from "../../../../../utilities/getTranslation";
import "./index.scss";
var Email = function(props) {
    var name = props.name, pathFromProps = props.path, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? email : _props_validate, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, placeholder = _ref.placeholder, autoComplete = _ref.autoComplete, description = _ref.description, condition = _ref.condition, label = props.label;
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
    var fieldType = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    });
    var value = fieldType.value, showError = fieldType.showError, setValue = fieldType.setValue, errorMessage = fieldType.errorMessage;
    var classes = [
        "field-type",
        "email",
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
        id: "field-".concat(path.replace(/\./gi, "__")),
        value: value || "",
        onChange: setValue,
        disabled: Boolean(readOnly),
        placeholder: getTranslation(placeholder, i18n),
        type: "email",
        name: path,
        autoComplete: autoComplete
    }), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default withCondition(Email);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0VtYWlsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJztcbmltcG9ydCB7IGVtYWlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgRW1haWw6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gZW1haWwsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb25kaXRpb24sXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCByZXF1aXJlZCB9KTtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSBmaWVsZFR5cGU7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ2VtYWlsJyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yXG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgPExhYmVsXG4gICAgICAgIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17c2V0VmFsdWV9XG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKHJlYWRPbmx5KX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgbmFtZT17cGF0aH1cbiAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAvPlxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihFbWFpbCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVRyYW5zbGF0aW9uIiwid2l0aENvbmRpdGlvbiIsInVzZUZpZWxkIiwiTGFiZWwiLCJFcnJvciIsIkZpZWxkRGVzY3JpcHRpb24iLCJlbWFpbCIsImdldFRyYW5zbGF0aW9uIiwiRW1haWwiLCJwcm9wcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJjb25kaXRpb24iLCJsYWJlbCIsImkxOG4iLCJtZW1vaXplZFZhbGlkYXRlIiwidmFsdWUiLCJvcHRpb25zIiwiZmllbGRUeXBlIiwic2hvd0Vycm9yIiwic2V0VmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJtZXNzYWdlIiwiaHRtbEZvciIsInJlcGxhY2UiLCJpbnB1dCIsImlkIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLFFBQVEsUUFBUTtBQUMzQyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLE9BQU9DLG1CQUFtQixzQkFBc0I7QUFDaEQsT0FBT0MsY0FBYyxpQkFBaUI7QUFDdEMsT0FBT0MsV0FBVyxjQUFjO0FBQ2hDLE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxzQkFBc0IseUJBQXlCO0FBQ3RELFNBQVNDLEtBQUssUUFBUSxvQ0FBb0M7QUFFMUQsU0FBU0MsY0FBYyxRQUFRLDBDQUEwQztBQUV6RSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsUUFBeUIsU0FBQ0M7SUFDOUIsSUFDRUMsT0FlRUQsTUFmRkMsTUFDQUMsQUFBTUMsZ0JBY0pILE1BZEZFLE1BQ0FFLFdBYUVKLE1BYkZJLDRCQWFFSixNQVpGSyxVQUFBQSx3Q0FBV1IseUJBQ0osTUFXTEcsTUFYRk0sY0FBTyxpQkFTSCxDQUFDLElBVEUsS0FDTEMsZ0JBQUFBLFVBQ0FDLGFBQUFBLE9BQ0FDLGlCQUFBQSxXQUNBQyxhQUFBQSxPQUNBQyxtQkFBQUEsYUFDQUMsb0JBQUFBLGNBQ0FDLG1CQUFBQSxhQUNBQyxpQkFBQUEsV0FFRkMsUUFDRWYsTUFERmU7SUFHRixJQUFNLEFBQUVDLE9BQVN6QixpQkFBVHlCO0lBRVIsSUFBTWQsT0FBT0MsaUJBQWlCRjtJQUU5QixJQUFNZ0IsbUJBQW1CM0IsWUFBWSxTQUFDNEIsT0FBT0M7UUFDM0MsT0FBT2QsU0FBU2EsT0FBTyx3Q0FBS0M7WUFBU2YsVUFBQUE7O0lBQ3ZDLEdBQUc7UUFBQ0M7UUFBVUQ7S0FBUztJQUV2QixJQUFNZ0IsWUFBWTNCLFNBQVM7UUFDekJTLE1BQUFBO1FBQ0FHLFVBQVVZO1FBQ1ZILFdBQUFBO0lBQ0Y7SUFFQSxJQUNFSSxRQUlFRSxVQUpGRixPQUNBRyxZQUdFRCxVQUhGQyxXQUNBQyxXQUVFRixVQUZGRSxVQUNBQyxlQUNFSCxVQURGRztJQUdGLElBQU1DLFVBQVU7UUFDZDtRQUNBO1FBQ0FmO1FBQ0FZLGFBQWE7UUFDYmQsWUFBWTtLQUNiLENBQUNrQixNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSxvQkFBQ0M7UUFDQ25CLFdBQVdlO1FBQ1hoQixPQUFPLHdDQUNGQTtZQUNIRSxPQUFBQTs7cUJBR0Ysb0JBQUNmO1FBQ0MwQixXQUFXQTtRQUNYUSxTQUFTTjtzQkFFWCxvQkFBQzdCO1FBQ0NvQyxTQUFTLEFBQUMsU0FBbUMsT0FBM0I1QixLQUFLNkIsT0FBTyxDQUFDLFFBQVE7UUFDdkNoQixPQUFPQTtRQUNQWCxVQUFVQTtzQkFFWixvQkFBQzRCO1FBQ0NDLElBQUksQUFBQyxTQUFtQyxPQUEzQi9CLEtBQUs2QixPQUFPLENBQUMsUUFBUTtRQUNsQ2IsT0FBT0EsU0FBbUI7UUFDMUJnQixVQUFVWjtRQUNWYSxVQUFVVCxRQUFRbkI7UUFDbEJJLGFBQWFiLGVBQWVhLGFBQWFLO1FBQ3pDb0IsTUFBSztRQUNMbkMsTUFBTUM7UUFDTlUsY0FBY0E7c0JBRWhCLG9CQUFDaEI7UUFDQ3NCLE9BQU9BO1FBQ1BMLGFBQWFBOztBQUlyQjtBQUVBLGVBQWVyQixjQUFjTyxPQUFPIn0=