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
import { code } from "../../../../../fields/validations";
import Error from "../../Error";
import FieldDescription from "../../FieldDescription";
import Label from "../../Label";
import useField from "../../useField";
import withCondition from "../../withCondition";
import { CodeEditor } from "../../../elements/CodeEditor";
import "./index.scss";
var prismToMonacoLanguageMap = {
    js: "javascript",
    ts: "typescript"
};
var baseClass = "code-field";
var Code = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? code : _props_validate, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, language = _ref.language, description = _ref.description, condition = _ref.condition, editorOptions = _ref.editorOptions, label = props.label;
    var path = pathFromProps || name;
    var memoizedValidate = useCallback(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField.value, showError = _useField.showError, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    var classes = [
        baseClass,
        "field-type",
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
        htmlFor: "field-".concat(path),
        label: label,
        required: required
    }), /*#__PURE__*/ React.createElement(CodeEditor, {
        options: editorOptions,
        defaultLanguage: prismToMonacoLanguageMap[language] || language,
        value: value || "",
        onChange: readOnly ? function() {
            return null;
        } : function(val) {
            return setValue(val);
        },
        readOnly: readOnly
    }), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default withCondition(Code);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvZGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2RlRWRpdG9yJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBwcmlzbVRvTW9uYWNvTGFuZ3VhZ2VNYXAgPSB7XG4gIGpzOiAnamF2YXNjcmlwdCcsXG4gIHRzOiAndHlwZXNjcmlwdCcsXG59O1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY29kZS1maWVsZCc7XG5cbmNvbnN0IENvZGU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICBuYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gY29kZSxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHdpZHRoLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGVkaXRvck9wdGlvbnMsXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZCh7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgICdmaWVsZC10eXBlJyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yXG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgPExhYmVsXG4gICAgICAgIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGh9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgb3B0aW9ucz17ZWRpdG9yT3B0aW9uc31cbiAgICAgICAgZGVmYXVsdExhbmd1YWdlPXtwcmlzbVRvTW9uYWNvTGFuZ3VhZ2VNYXBbbGFuZ3VhZ2VdIHx8IGxhbmd1YWdlfVxuICAgICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17cmVhZE9ubHkgPyAoKSA9PiBudWxsIDogKHZhbCkgPT4gc2V0VmFsdWUodmFsKX1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oQ29kZSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsImNvZGUiLCJFcnJvciIsIkZpZWxkRGVzY3JpcHRpb24iLCJMYWJlbCIsInVzZUZpZWxkIiwid2l0aENvbmRpdGlvbiIsIkNvZGVFZGl0b3IiLCJwcmlzbVRvTW9uYWNvTGFuZ3VhZ2VNYXAiLCJqcyIsInRzIiwiYmFzZUNsYXNzIiwiQ29kZSIsInByb3BzIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJuYW1lIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImFkbWluIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwibGFuZ3VhZ2UiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsImVkaXRvck9wdGlvbnMiLCJsYWJlbCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsIm1lc3NhZ2UiLCJodG1sRm9yIiwiZGVmYXVsdExhbmd1YWdlIiwib25DaGFuZ2UiLCJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLFFBQVEsUUFBUTtBQUUzQyxTQUFTQyxJQUFJLFFBQVEsb0NBQW9DO0FBQ3pELE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxzQkFBc0IseUJBQXlCO0FBQ3RELE9BQU9DLFdBQVcsY0FBYztBQUVoQyxPQUFPQyxjQUFjLGlCQUFpQjtBQUN0QyxPQUFPQyxtQkFBbUIsc0JBQXNCO0FBQ2hELFNBQVNDLFVBQVUsUUFBUSwrQkFBK0I7QUFFMUQsT0FBTyxlQUFlO0FBRXRCLElBQU1DLDJCQUEyQjtJQUMvQkMsSUFBSTtJQUNKQyxJQUFJO0FBQ047QUFFQSxJQUFNQyxZQUFZO0FBRWxCLElBQU1DLE9BQXdCLFNBQUNDO0lBQzdCLElBQ0VDLEFBQU1DLGdCQWVKRixNQWZGQyxNQUNBRSxPQWNFSCxNQWRGRyxNQUNBQyxXQWFFSixNQWJGSSw0QkFhRUosTUFaRkssVUFBQUEsd0NBQVdqQix3QkFDSixNQVdMWSxNQVhGTSxjQUFPLGlCQVNILENBQUMsSUFURSxLQUNMQyxnQkFBQUEsVUFDQUMsYUFBQUEsT0FDQUMsaUJBQUFBLFdBQ0FDLGFBQUFBLE9BQ0FDLGdCQUFBQSxVQUNBQyxtQkFBQUEsYUFDQUMsaUJBQUFBLFdBQ0FDLHFCQUFBQSxlQUVGQyxRQUNFZixNQURGZTtJQUdGLElBQU1kLE9BQU9DLGlCQUFpQkM7SUFFOUIsSUFBTWEsbUJBQW1CN0IsWUFBWSxTQUFDOEIsT0FBT0M7UUFDM0MsT0FBT2IsU0FBU1ksT0FBTyx3Q0FBS0M7WUFBU2QsVUFBQUE7O0lBQ3ZDLEdBQUc7UUFBQ0M7UUFBVUQ7S0FBUztJQUV2QixJQUtJWixZQUFBQSxTQUFTO1FBQ1hTLE1BQUFBO1FBQ0FJLFVBQVVXO1FBQ1ZILFdBQUFBO0lBQ0YsSUFSRUksUUFJRXpCLFVBSkZ5QixPQUNBRSxZQUdFM0IsVUFIRjJCLFdBQ0FDLFdBRUU1QixVQUZGNEIsVUFDQUMsZUFDRTdCLFVBREY2QjtJQU9GLElBQU1DLFVBQVU7UUFDZHhCO1FBQ0E7UUFDQVc7UUFDQVUsYUFBYTtRQUNiWixZQUFZO0tBQ2IsQ0FBQ2dCLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLHFCQUNFLG9CQUFDQztRQUNDakIsV0FBV2E7UUFDWGQsT0FBTyx3Q0FDRkE7WUFDSEUsT0FBQUE7O3FCQUdGLG9CQUFDckI7UUFDQzhCLFdBQVdBO1FBQ1hRLFNBQVNOO3NCQUVYLG9CQUFDOUI7UUFDQ3FDLFNBQVMsQUFBQyxTQUFhLE9BQUwzQjtRQUNsQmMsT0FBT0E7UUFDUFgsVUFBVUE7c0JBRVosb0JBQUNWO1FBQ0N3QixTQUFTSjtRQUNUZSxpQkFBaUJsQyx3QkFBd0IsQ0FBQ2dCLFNBQVMsSUFBSUE7UUFDdkRNLE9BQU9BLFNBQW1CO1FBQzFCYSxVQUFVdkIsV0FBVzttQkFBTTtZQUFPLFNBQUN3QjttQkFBUVgsU0FBU1c7O1FBQ3BEeEIsVUFBVUE7c0JBRVosb0JBQUNqQjtRQUNDMkIsT0FBT0E7UUFDUEwsYUFBYUE7O0FBSXJCO0FBRUEsZUFBZW5CLGNBQWNNLE1BQU0ifQ==