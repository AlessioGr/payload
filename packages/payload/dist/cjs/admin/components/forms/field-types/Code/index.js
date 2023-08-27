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
var _validations = require("../../../../../fields/validations");
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _CodeEditor = require("../../../elements/CodeEditor");
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
var prismToMonacoLanguageMap = {
    js: "javascript",
    ts: "typescript"
};
var baseClass = "code-field";
var Code = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.code : _props_validate, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, language = _ref.language, description = _ref.description, condition = _ref.condition, editorOptions = _ref.editorOptions, label = props.label;
    var path = pathFromProps || name;
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var _useField1 = (0, _useField.default)({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField1.value, showError = _useField1.showError, setValue = _useField1.setValue, errorMessage = _useField1.errorMessage;
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
        defaultLanguage: prismToMonacoLanguageMap[language] || language,
        value: value || "",
        onChange: readOnly ? function() {
            return null;
        } : function(val) {
            return setValue(val);
        },
        readOnly: readOnly
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = (0, _withCondition.default)(Code);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvZGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29kZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IENvZGVFZGl0b3IgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2RlRWRpdG9yJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBwcmlzbVRvTW9uYWNvTGFuZ3VhZ2VNYXAgPSB7XG4gIGpzOiAnamF2YXNjcmlwdCcsXG4gIHRzOiAndHlwZXNjcmlwdCcsXG59O1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY29kZS1maWVsZCc7XG5cbmNvbnN0IENvZGU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICBuYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gY29kZSxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHdpZHRoLFxuICAgICAgbGFuZ3VhZ2UsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIGVkaXRvck9wdGlvbnMsXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZCh7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgICdmaWVsZC10eXBlJyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yXG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgPExhYmVsXG4gICAgICAgIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGh9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPENvZGVFZGl0b3JcbiAgICAgICAgb3B0aW9ucz17ZWRpdG9yT3B0aW9uc31cbiAgICAgICAgZGVmYXVsdExhbmd1YWdlPXtwcmlzbVRvTW9uYWNvTGFuZ3VhZ2VNYXBbbGFuZ3VhZ2VdIHx8IGxhbmd1YWdlfVxuICAgICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17cmVhZE9ubHkgPyAoKSA9PiBudWxsIDogKHZhbCkgPT4gc2V0VmFsdWUodmFsKX1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgLz5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oQ29kZSk7XG4iXSwibmFtZXMiOlsicHJpc21Ub01vbmFjb0xhbmd1YWdlTWFwIiwianMiLCJ0cyIsImJhc2VDbGFzcyIsIkNvZGUiLCJwcm9wcyIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwibmFtZSIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJjb2RlIiwiYWRtaW4iLCJyZWFkT25seSIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwiZWRpdG9yT3B0aW9ucyIsImxhYmVsIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwidXNlRmllbGQiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsIkVycm9yIiwibWVzc2FnZSIsIkxhYmVsIiwiaHRtbEZvciIsIkNvZGVFZGl0b3IiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvbkNoYW5nZSIsInZhbCIsIkZpZWxkRGVzY3JpcHRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQWdHQTs7O2VBQUE7Ozs2REFoR21DOzJCQUVkOzREQUNIO3VFQUNXOzREQUNYOytEQUVHO29FQUNLOzBCQUNDO1FBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsMkJBQTJCO0lBQy9CQyxJQUFJO0lBQ0pDLElBQUk7QUFDTjtBQUVBLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsT0FBd0IsU0FBQ0M7SUFDN0IsSUFDRUMsQUFBTUMsZ0JBZUpGLE1BZkZDLE1BQ0FFLE9BY0VILE1BZEZHLE1BQ0FDLFdBYUVKLE1BYkZJLDRCQWFFSixNQVpGSyxVQUFBQSx3Q0FBV0MsaUJBQUksb0JBQ1IsTUFXTE4sTUFYRk8sY0FBTyxpQkFTSCxDQUFDLElBVEUsS0FDTEMsZ0JBQUFBLFVBQ0FDLGFBQUFBLE9BQ0FDLGlCQUFBQSxXQUNBQyxhQUFBQSxPQUNBQyxnQkFBQUEsVUFDQUMsbUJBQUFBLGFBQ0FDLGlCQUFBQSxXQUNBQyxxQkFBQUEsZUFFRkMsUUFDRWhCLE1BREZnQjtJQUdGLElBQU1mLE9BQU9DLGlCQUFpQkM7SUFFOUIsSUFBTWMsbUJBQW1CQyxJQUFBQSxrQkFBVyxFQUFDLFNBQUNDLE9BQU9DO1FBQzNDLE9BQU9mLFNBQVNjLE9BQU8sd0NBQUtDO1lBQVNoQixVQUFBQTs7SUFDdkMsR0FBRztRQUFDQztRQUFVRDtLQUFTO0lBRXZCLElBS0lpQixhQUFBQSxJQUFBQSxpQkFBUSxFQUFDO1FBQ1hwQixNQUFBQTtRQUNBSSxVQUFVWTtRQUNWSCxXQUFBQTtJQUNGLElBUkVLLFFBSUVFLFdBSkZGLE9BQ0FHLFlBR0VELFdBSEZDLFdBQ0FDLFdBRUVGLFdBRkZFLFVBQ0FDLGVBQ0VILFdBREZHO0lBT0YsSUFBTUMsVUFBVTtRQUNkM0I7UUFDQTtRQUNBWTtRQUNBWSxhQUFhO1FBQ2JkLFlBQVk7S0FDYixDQUFDa0IsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0UsNkJBQUNDO1FBQ0NuQixXQUFXZTtRQUNYaEIsT0FBTyx3Q0FDRkE7WUFDSEUsT0FBQUE7O3FCQUdGLDZCQUFDbUIsY0FBSztRQUNKUixXQUFXQTtRQUNYUyxTQUFTUDtzQkFFWCw2QkFBQ1EsY0FBSztRQUNKQyxTQUFTLEFBQUMsU0FBYSxPQUFMaEM7UUFDbEJlLE9BQU9BO1FBQ1BaLFVBQVVBO3NCQUVaLDZCQUFDOEIsc0JBQVU7UUFDVGQsU0FBU0w7UUFDVG9CLGlCQUFpQnhDLHdCQUF3QixDQUFDaUIsU0FBUyxJQUFJQTtRQUN2RE8sT0FBT0EsU0FBbUI7UUFDMUJpQixVQUFVNUIsV0FBVzttQkFBTTtZQUFPLFNBQUM2QjttQkFBUWQsU0FBU2M7O1FBQ3BEN0IsVUFBVUE7c0JBRVosNkJBQUM4Qix5QkFBZ0I7UUFDZm5CLE9BQU9BO1FBQ1BOLGFBQWFBOztBQUlyQjtJQUVBLFdBQWUwQixJQUFBQSxzQkFBYSxFQUFDeEMifQ==