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
import Label from "../../Label";
import Error from "../../Error";
import withCondition from "../../withCondition";
import { password } from "../../../../../fields/validations";
import "./index.scss";
var Password = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? password : _props_validate, style = props.style, className = props.className, width = props.width, autoComplete = props.autoComplete, label = props.label, disabled = props.disabled;
    var path = pathFromProps || name;
    var memoizedValidate = useCallback(function(value, options) {
        var validationResult = validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
        return validationResult;
    }, [
        validate,
        required
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate
    }), value = _useField.value, showError = _useField.showError, formProcessing = _useField.formProcessing, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    var classes = [
        "field-type",
        "password",
        className,
        showError && "error"
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
        disabled: formProcessing || disabled,
        type: "password",
        autoComplete: autoComplete,
        name: path
    }));
};
export default withCondition(Password);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1Bhc3N3b3JkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IHBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgUGFzc3dvcmQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICBuYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gcGFzc3dvcmQsXG4gICAgc3R5bGUsXG4gICAgY2xhc3NOYW1lLFxuICAgIHdpZHRoLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgICBsYWJlbCxcbiAgICBkaXNhYmxlZCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCByZXF1aXJlZCB9KTtcbiAgICByZXR1cm4gdmFsaWRhdGlvblJlc3VsdDtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgZm9ybVByb2Nlc3NpbmcsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JNZXNzYWdlLFxuICB9ID0gdXNlRmllbGQoe1xuICAgIHBhdGgsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgICdwYXNzd29yZCcsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDxMYWJlbFxuICAgICAgICBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZyB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9e3NldFZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17Zm9ybVByb2Nlc3NpbmcgfHwgZGlzYWJsZWR9XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICBuYW1lPXtwYXRofVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oUGFzc3dvcmQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VGaWVsZCIsIkxhYmVsIiwiRXJyb3IiLCJ3aXRoQ29uZGl0aW9uIiwicGFzc3dvcmQiLCJQYXNzd29yZCIsInByb3BzIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJuYW1lIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJhdXRvQ29tcGxldGUiLCJsYWJlbCIsImRpc2FibGVkIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInZhbHVlIiwib3B0aW9ucyIsInZhbGlkYXRpb25SZXN1bHQiLCJzaG93RXJyb3IiLCJmb3JtUHJvY2Vzc2luZyIsInNldFZhbHVlIiwiZXJyb3JNZXNzYWdlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwibWVzc2FnZSIsImh0bWxGb3IiLCJyZXBsYWNlIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFdBQVcsUUFBUSxRQUFRO0FBQzNDLE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxXQUFXLGNBQWM7QUFDaEMsT0FBT0MsbUJBQW1CLHNCQUFzQjtBQUNoRCxTQUFTQyxRQUFRLFFBQVEsb0NBQW9DO0FBRzdELE9BQU8sZUFBZTtBQUV0QixJQUFNQyxXQUE0QixTQUFDQztJQUNqQyxJQUNFQyxBQUFNQyxnQkFVSkYsTUFWRkMsTUFDQUUsT0FTRUgsTUFURkcsTUFDQUMsV0FRRUosTUFSRkksNEJBUUVKLE1BUEZLLFVBQUFBLHdDQUFXUCw0QkFDWFEsUUFNRU4sTUFORk0sT0FDQUMsWUFLRVAsTUFMRk8sV0FDQUMsUUFJRVIsTUFKRlEsT0FDQUMsZUFHRVQsTUFIRlMsY0FDQUMsUUFFRVYsTUFGRlUsT0FDQUMsV0FDRVgsTUFERlc7SUFHRixJQUFNVixPQUFPQyxpQkFBaUJDO0lBRTlCLElBQU1TLG1CQUFtQm5CLFlBQVksU0FBQ29CLE9BQU9DO1FBQzNDLElBQU1DLG1CQUFtQlYsU0FBU1EsT0FBTyx3Q0FBS0M7WUFBU1YsVUFBQUE7O1FBQ3ZELE9BQU9XO0lBQ1QsR0FBRztRQUFDVjtRQUFVRDtLQUFTO0lBRXZCLElBTUlWLFlBQUFBLFNBQVM7UUFDWE8sTUFBQUE7UUFDQUksVUFBVU87SUFDWixJQVJFQyxRQUtFbkIsVUFMRm1CLE9BQ0FHLFlBSUV0QixVQUpGc0IsV0FDQUMsaUJBR0V2QixVQUhGdUIsZ0JBQ0FDLFdBRUV4QixVQUZGd0IsVUFDQUMsZUFDRXpCLFVBREZ5QjtJQU1GLElBQU1DLFVBQVU7UUFDZDtRQUNBO1FBQ0FiO1FBQ0FTLGFBQWE7S0FDZCxDQUFDSyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSxvQkFBQ0M7UUFDQ2pCLFdBQVdhO1FBQ1hkLE9BQU8sd0NBQ0ZBO1lBQ0hFLE9BQUFBOztxQkFHRixvQkFBQ1o7UUFDQ29CLFdBQVdBO1FBQ1hTLFNBQVNOO3NCQUVYLG9CQUFDeEI7UUFDQytCLFNBQVMsQUFBQyxTQUFtQyxPQUEzQnpCLEtBQUswQixPQUFPLENBQUMsUUFBUTtRQUN2Q2pCLE9BQU9BO1FBQ1BOLFVBQVVBO3NCQUVaLG9CQUFDd0I7UUFDQ0MsSUFBSSxBQUFDLFNBQW1DLE9BQTNCNUIsS0FBSzBCLE9BQU8sQ0FBQyxRQUFRO1FBQ2xDZCxPQUFPQSxTQUFtQjtRQUMxQmlCLFVBQVVaO1FBQ1ZQLFVBQVVNLGtCQUFrQk47UUFDNUJvQixNQUFLO1FBQ0x0QixjQUFjQTtRQUNkTixNQUFNRjs7QUFJZDtBQUVBLGVBQWVKLGNBQWNFLFVBQVUifQ==