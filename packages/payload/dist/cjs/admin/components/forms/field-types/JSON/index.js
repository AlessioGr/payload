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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _validations = require("../../../../../fields/validations");
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _CodeEditor = require("../../../elements/CodeEditor");
require("./index.scss");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var baseClass = "json-field";
var JSONField = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.json : _props_validate, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, editorOptions = _ref.editorOptions, label = props.label;
    var path = pathFromProps || name;
    var _useState = _sliced_to_array((0, _react.useState)(), 2), stringValue = _useState[0], setStringValue = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(), 2), jsonError = _useState1[0], setJsonError = _useState1[1];
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required,
            jsonError: jsonError
        }));
    }, [
        validate,
        required,
        jsonError
    ]);
    var _useField1 = (0, _useField.default)({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField1.value, initialValue = _useField1.initialValue, showError = _useField1.showError, setValue = _useField1.setValue, errorMessage = _useField1.errorMessage;
    var handleChange = (0, _react.useCallback)(function(val) {
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
    (0, _react.useEffect)(function() {
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
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "field-".concat(path),
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement(_CodeEditor.CodeEditor, {
        options: editorOptions,
        defaultLanguage: "json",
        value: stringValue,
        onChange: handleChange,
        readOnly: readOnly
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = (0, _withCondition.default)(JSONField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0pTT04vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2RlRWRpdG9yJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnanNvbi1maWVsZCc7XG5cbmNvbnN0IEpTT05GaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIG5hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgdmFsaWRhdGUgPSBqc29uLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGVkaXRvck9wdGlvbnMsXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcbiAgY29uc3QgW3N0cmluZ1ZhbHVlLCBzZXRTdHJpbmdWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtqc29uRXJyb3IsIHNldEpzb25FcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCByZXF1aXJlZCwganNvbkVycm9yIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkLCBqc29uRXJyb3JdKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgaW5pdGlhbFZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZDxzdHJpbmc+KHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKHZhbCkgPT4ge1xuICAgIGlmIChyZWFkT25seSkgcmV0dXJuO1xuICAgIHNldFN0cmluZ1ZhbHVlKHZhbCk7XG5cbiAgICB0cnkge1xuICAgICAgc2V0VmFsdWUoSlNPTi5wYXJzZSh2YWwudHJpbSgpIHx8ICd7fScpKTtcbiAgICAgIHNldEpzb25FcnJvcih1bmRlZmluZWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHNldEpzb25FcnJvcihlKTtcbiAgICB9XG4gIH0sIFtyZWFkT25seSwgc2V0VmFsdWUsIHNldFN0cmluZ1ZhbHVlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdHJpbmdWYWx1ZShKU09OLnN0cmluZ2lmeShpbml0aWFsVmFsdWUsIG51bGwsIDIpKTtcbiAgfSwgW2luaXRpYWxWYWx1ZV0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgICdmaWVsZC10eXBlJyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yXG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgPExhYmVsXG4gICAgICAgIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGh9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgb3B0aW9ucz17ZWRpdG9yT3B0aW9uc31cbiAgICAgICAgZGVmYXVsdExhbmd1YWdlPVwianNvblwiXG4gICAgICAgIHZhbHVlPXtzdHJpbmdWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oSlNPTkZpZWxkKTtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJKU09ORmllbGQiLCJwcm9wcyIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwibmFtZSIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJqc29uIiwiYWRtaW4iLCJyZWFkT25seSIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsImVkaXRvck9wdGlvbnMiLCJsYWJlbCIsInVzZVN0YXRlIiwic3RyaW5nVmFsdWUiLCJzZXRTdHJpbmdWYWx1ZSIsImpzb25FcnJvciIsInNldEpzb25FcnJvciIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsInVzZUZpZWxkIiwiaW5pdGlhbFZhbHVlIiwic2hvd0Vycm9yIiwic2V0VmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ2YWwiLCJKU09OIiwicGFyc2UiLCJ0cmltIiwidW5kZWZpbmVkIiwiZSIsInVzZUVmZmVjdCIsInN0cmluZ2lmeSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsIkVycm9yIiwibWVzc2FnZSIsIkxhYmVsIiwiaHRtbEZvciIsIkNvZGVFZGl0b3IiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvbkNoYW5nZSIsIkZpZWxkRGVzY3JpcHRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQTZHQTs7O2VBQUE7Ozs2REE3R3dEOzREQUV0Qzt1RUFDVzsyQkFDUjs0REFDSDsrREFFRztvRUFDSzswQkFDQztRQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLFlBQTZCLFNBQUNDO0lBQ2xDLElBQ0VDLEFBQU1DLGdCQWNKRixNQWRGQyxNQUNBRSxPQWFFSCxNQWJGRyxNQUNBQyxXQVlFSixNQVpGSSw0QkFZRUosTUFYRkssVUFBQUEsd0NBQVdDLGlCQUFJLG9CQUNSLE1BVUxOLE1BVkZPLGNBQU8saUJBUUgsQ0FBQyxJQVJFLEtBQ0xDLGdCQUFBQSxVQUNBQyxhQUFBQSxPQUNBQyxpQkFBQUEsV0FDQUMsYUFBQUEsT0FDQUMsbUJBQUFBLGFBQ0FDLGlCQUFBQSxXQUNBQyxxQkFBQUEsZUFFRkMsUUFDRWYsTUFERmU7SUFHRixJQUFNZCxPQUFPQyxpQkFBaUJDO0lBQzlCLElBQXNDYSw2QkFBQUEsSUFBQUEsZUFBUSxTQUF2Q0MsY0FBK0JELGNBQWxCRSxpQkFBa0JGO0lBQ3RDLElBQWtDQSw4QkFBQUEsSUFBQUEsZUFBUSxTQUFuQ0csWUFBMkJILGVBQWhCSSxlQUFnQko7SUFFbEMsSUFBTUssbUJBQW1CQyxJQUFBQSxrQkFBVyxFQUFDLFNBQUNDLE9BQU9DO1FBQzNDLE9BQU9uQixTQUFTa0IsT0FBTyx3Q0FBS0M7WUFBU3BCLFVBQUFBO1lBQVVlLFdBQUFBOztJQUNqRCxHQUFHO1FBQUNkO1FBQVVEO1FBQVVlO0tBQVU7SUFFbEMsSUFNSU0sYUFBQUEsSUFBQUEsaUJBQVEsRUFBUztRQUNuQnhCLE1BQUFBO1FBQ0FJLFVBQVVnQjtRQUNWUixXQUFBQTtJQUNGLElBVEVVLFFBS0VFLFdBTEZGLE9BQ0FHLGVBSUVELFdBSkZDLGNBQ0FDLFlBR0VGLFdBSEZFLFdBQ0FDLFdBRUVILFdBRkZHLFVBQ0FDLGVBQ0VKLFdBREZJO0lBT0YsSUFBTUMsZUFBZVIsSUFBQUEsa0JBQVcsRUFBQyxTQUFDUztRQUNoQyxJQUFJdkIsVUFBVTtRQUNkVSxlQUFlYTtRQUVmLElBQUk7WUFDRkgsU0FBU0ksS0FBS0MsS0FBSyxDQUFDRixJQUFJRyxJQUFJLE1BQU07WUFDbENkLGFBQWFlO1FBQ2YsRUFBRSxPQUFPQyxHQUFHO1lBQ1ZoQixhQUFhZ0I7UUFDZjtJQUNGLEdBQUc7UUFBQzVCO1FBQVVvQjtRQUFVVjtLQUFlO0lBRXZDbUIsSUFBQUEsZ0JBQVMsRUFBQztRQUNSbkIsZUFBZWMsS0FBS00sU0FBUyxDQUFDWixjQUFjLE1BQU07SUFDcEQsR0FBRztRQUFDQTtLQUFhO0lBRWpCLElBQU1hLFVBQVU7UUFDZHpDO1FBQ0E7UUFDQVk7UUFDQWlCLGFBQWE7UUFDYm5CLFlBQVk7S0FDYixDQUFDZ0MsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0UsNkJBQUNDO1FBQ0NqQyxXQUFXNkI7UUFDWDlCLE9BQU8sd0NBQ0ZBO1lBQ0hFLE9BQUFBOztxQkFHRiw2QkFBQ2lDLGNBQUs7UUFDSmpCLFdBQVdBO1FBQ1hrQixTQUFTaEI7c0JBRVgsNkJBQUNpQixjQUFLO1FBQ0pDLFNBQVMsQUFBQyxTQUFhLE9BQUw5QztRQUNsQmMsT0FBT0E7UUFDUFgsVUFBVUE7c0JBRVosNkJBQUM0QyxzQkFBVTtRQUNUeEIsU0FBU1Y7UUFDVG1DLGlCQUFnQjtRQUNoQjFCLE9BQU9OO1FBQ1BpQyxVQUFVcEI7UUFDVnRCLFVBQVVBO3NCQUVaLDZCQUFDMkMseUJBQWdCO1FBQ2Y1QixPQUFPQTtRQUNQWCxhQUFhQTs7QUFJckI7SUFFQSxXQUFld0MsSUFBQUEsc0JBQWEsRUFBQ3JEIn0=