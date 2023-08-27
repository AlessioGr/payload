function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import React, { useCallback, useEffect, useState } from "react";
import Error from "../../Error";
import FieldDescription from "../../FieldDescription";
import { json } from "../../../../../fields/validations";
import Label from "../../Label";
import useField from "../../useField";
import withCondition from "../../withCondition";
import { CodeEditor } from "../../../elements/CodeEditor";
import "./index.scss";
var baseClass = "json-field";
var JSONField = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? json : _props_validate, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, editorOptions = _ref.editorOptions, label = props.label;
    var path = pathFromProps || name;
    var _useState = _sliced_to_array(useState(), 2), stringValue = _useState[0], setStringValue = _useState[1];
    var _useState1 = _sliced_to_array(useState(), 2), jsonError = _useState1[0], setJsonError = _useState1[1];
    var memoizedValidate = useCallback(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required,
            jsonError: jsonError
        }));
    }, [
        validate,
        required,
        jsonError
    ]);
    var _useField = useField({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField.value, initialValue = _useField.initialValue, showError = _useField.showError, setValue = _useField.setValue, errorMessage = _useField.errorMessage;
    var handleChange = useCallback(function(val) {
        if (readOnly) return;
        setStringValue(val);
        try {
            setValue(JSON.parse(val.trim() || "{}"));
            setJsonError(undefined);
        } catch (e) {
            setJsonError(e);
        }
    }, [
        readOnly,
        setValue,
        setStringValue
    ]);
    useEffect(function() {
        setStringValue(JSON.stringify(initialValue, null, 2));
    }, [
        initialValue
    ]);
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
        defaultLanguage: "json",
        value: stringValue,
        onChange: handleChange,
        readOnly: readOnly
    }), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default withCondition(JSONField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0pTT04vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2RlRWRpdG9yJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnanNvbi1maWVsZCc7XG5cbmNvbnN0IEpTT05GaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIG5hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBqc29uLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGVkaXRvck9wdGlvbnMsXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcbiAgY29uc3QgW3N0cmluZ1ZhbHVlLCBzZXRTdHJpbmdWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtqc29uRXJyb3IsIHNldEpzb25FcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCByZXF1aXJlZCwganNvbkVycm9yIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkLCBqc29uRXJyb3JdKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgaW5pdGlhbFZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZDxzdHJpbmc+KHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbCkgPT4ge1xuICAgIGlmIChyZWFkT25seSkgcmV0dXJuO1xuICAgIHNldFN0cmluZ1ZhbHVlKHZhbCk7XG5cbiAgICB0cnkge1xuICAgICAgc2V0VmFsdWUoSlNPTi5wYXJzZSh2YWwudHJpbSgpIHx8ICd7fScpKTtcbiAgICAgIHNldEpzb25FcnJvcih1bmRlZmluZWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldEpzb25FcnJvcihlKTtcbiAgICB9XG4gIH0sIFtyZWFkT25seSwgc2V0VmFsdWUsIHNldFN0cmluZ1ZhbHVlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdHJpbmdWYWx1ZShKU09OLnN0cmluZ2lmeShpbml0aWFsVmFsdWUsIG51bGwsIDIpKTtcbiAgfSwgW2luaXRpYWxWYWx1ZV0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgICdmaWVsZC10eXBlJyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yXG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgPExhYmVsXG4gICAgICAgIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGh9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgb3B0aW9ucz17ZWRpdG9yT3B0aW9uc31cbiAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwianNvblwiXG4gICAgICAgIHZhbHVlPXtzdHJpbmdWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oSlNPTkZpZWxkKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJFcnJvciIsIkZpZWxkRGVzY3JpcHRpb24iLCJqc29uIiwiTGFiZWwiLCJ1c2VGaWVsZCIsIndpdGhDb25kaXRpb24iLCJDb2RlRWRpdG9yIiwiYmFzZUNsYXNzIiwiSlNPTkZpZWxkIiwicHJvcHMiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsIm5hbWUiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwiYWRtaW4iLCJyZWFkT25seSIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsImVkaXRvck9wdGlvbnMiLCJsYWJlbCIsInN0cmluZ1ZhbHVlIiwic2V0U3RyaW5nVmFsdWUiLCJqc29uRXJyb3IiLCJzZXRKc29uRXJyb3IiLCJtZW1vaXplZFZhbGlkYXRlIiwidmFsdWUiLCJvcHRpb25zIiwiaW5pdGlhbFZhbHVlIiwic2hvd0Vycm9yIiwic2V0VmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJ0cmltIiwidW5kZWZpbmVkIiwiZSIsInN0cmluZ2lmeSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsIm1lc3NhZ2UiLCJodG1sRm9yIiwiZGVmYXVsdExhbmd1YWdlIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBRWhFLE9BQU9DLFdBQVcsY0FBYztBQUNoQyxPQUFPQyxzQkFBc0IseUJBQXlCO0FBQ3RELFNBQVNDLElBQUksUUFBUSxvQ0FBb0M7QUFDekQsT0FBT0MsV0FBVyxjQUFjO0FBRWhDLE9BQU9DLGNBQWMsaUJBQWlCO0FBQ3RDLE9BQU9DLG1CQUFtQixzQkFBc0I7QUFDaEQsU0FBU0MsVUFBVSxRQUFRLCtCQUErQjtBQUUxRCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxZQUE2QixTQUFDQztJQUNsQyxJQUNFQyxBQUFNQyxnQkFjSkYsTUFkRkMsTUFDQUUsT0FhRUgsTUFiRkcsTUFDQUMsV0FZRUosTUFaRkksNEJBWUVKLE1BWEZLLFVBQUFBLHdDQUFXWix3QkFDSixNQVVMTyxNQVZGTSxjQUFPLGlCQVFILENBQUMsSUFSRSxLQUNMQyxnQkFBQUEsVUFDQUMsYUFBQUEsT0FDQUMsaUJBQUFBLFdBQ0FDLGFBQUFBLE9BQ0FDLG1CQUFBQSxhQUNBQyxpQkFBQUEsV0FDQUMscUJBQUFBLGVBRUZDLFFBQ0VkLE1BREZjO0lBR0YsSUFBTWIsT0FBT0MsaUJBQWlCQztJQUM5QixJQUFzQ2IsNkJBQUFBLGdCQUEvQnlCLGNBQStCekIsY0FBbEIwQixpQkFBa0IxQjtJQUN0QyxJQUFrQ0EsOEJBQUFBLGdCQUEzQjJCLFlBQTJCM0IsZUFBaEI0QixlQUFnQjVCO0lBRWxDLElBQU02QixtQkFBbUIvQixZQUFZLFNBQUNnQyxPQUFPQztRQUMzQyxPQUFPaEIsU0FBU2UsT0FBTyx3Q0FBS0M7WUFBU2pCLFVBQUFBO1lBQVVhLFdBQUFBOztJQUNqRCxHQUFHO1FBQUNaO1FBQVVEO1FBQVVhO0tBQVU7SUFFbEMsSUFNSXRCLFlBQUFBLFNBQWlCO1FBQ25CTSxNQUFBQTtRQUNBSSxVQUFVYztRQUNWUCxXQUFBQTtJQUNGLElBVEVRLFFBS0V6QixVQUxGeUIsT0FDQUUsZUFJRTNCLFVBSkYyQixjQUNBQyxZQUdFNUIsVUFIRjRCLFdBQ0FDLFdBRUU3QixVQUZGNkIsVUFDQUMsZUFDRTlCLFVBREY4QjtJQU9GLElBQU1DLGVBQWV0QyxZQUFZLFNBQUN1QztRQUNoQyxJQUFJcEIsVUFBVTtRQUNkUyxlQUFlVztRQUVmLElBQUk7WUFDRkgsU0FBU0ksS0FBS0MsS0FBSyxDQUFDRixJQUFJRyxJQUFJLE1BQU07WUFDbENaLGFBQWFhO1FBQ2YsRUFBRSxPQUFPQyxHQUFHO1lBQ1ZkLGFBQWFjO1FBQ2Y7SUFDRixHQUFHO1FBQUN6QjtRQUFVaUI7UUFBVVI7S0FBZTtJQUV2QzNCLFVBQVU7UUFDUjJCLGVBQWVZLEtBQUtLLFNBQVMsQ0FBQ1gsY0FBYyxNQUFNO0lBQ3BELEdBQUc7UUFBQ0E7S0FBYTtJQUVqQixJQUFNWSxVQUFVO1FBQ2RwQztRQUNBO1FBQ0FXO1FBQ0FjLGFBQWE7UUFDYmhCLFlBQVk7S0FDYixDQUFDNEIsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0Usb0JBQUNDO1FBQ0M3QixXQUFXeUI7UUFDWDFCLE9BQU8sd0NBQ0ZBO1lBQ0hFLE9BQUFBOztxQkFHRixvQkFBQ25CO1FBQ0NnQyxXQUFXQTtRQUNYZ0IsU0FBU2Q7c0JBRVgsb0JBQUMvQjtRQUNDOEMsU0FBUyxBQUFDLFNBQWEsT0FBTHZDO1FBQ2xCYSxPQUFPQTtRQUNQVixVQUFVQTtzQkFFWixvQkFBQ1A7UUFDQ3dCLFNBQVNSO1FBQ1Q0QixpQkFBZ0I7UUFDaEJyQixPQUFPTDtRQUNQMkIsVUFBVWhCO1FBQ1ZuQixVQUFVQTtzQkFFWixvQkFBQ2Y7UUFDQzRCLE9BQU9BO1FBQ1BULGFBQWFBOztBQUlyQjtBQUVBLGVBQWVmLGNBQWNHLFdBQVcifQ==