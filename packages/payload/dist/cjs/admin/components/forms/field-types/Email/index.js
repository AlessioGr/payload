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
var _reacti18next = require("react-i18next");
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _validations = require("../../../../../fields/validations");
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
var Email = function(props) {
    var name = props.name, pathFromProps = props.path, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.email : _props_validate, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, placeholder = _ref.placeholder, autoComplete = _ref.autoComplete, description = _ref.description, condition = _ref.condition, label = props.label;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var path = pathFromProps || name;
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var fieldType = (0, _useField.default)({
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
    }), /*#__PURE__*/ _react.default.createElement("input", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        value: value || "",
        onChange: setValue,
        disabled: Boolean(readOnly),
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        type: "email",
        name: path,
        autoComplete: autoComplete
    }), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = (0, _withCondition.default)(Email);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0VtYWlsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgRmllbGREZXNjcmlwdGlvbiBmcm9tICcuLi8uLi9GaWVsZERlc2NyaXB0aW9uJztcbmltcG9ydCB7IGVtYWlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgRW1haWw6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gZW1haWwsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBjb25kaXRpb24sXG4gICAgfSA9IHt9LFxuICAgIGxhYmVsLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCByZXF1aXJlZCB9KTtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSBmaWVsZFR5cGU7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgJ2VtYWlsJyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmICdlcnJvcicsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEVycm9yXG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBtZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAgPExhYmVsXG4gICAgICAgIGh0bWxGb3I9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIC8+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9e2BmaWVsZC0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17c2V0VmFsdWV9XG4gICAgICAgIGRpc2FibGVkPXtCb29sZWFuKHJlYWRPbmx5KX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgbmFtZT17cGF0aH1cbiAgICAgICAgYXV0b0NvbXBsZXRlPXthdXRvQ29tcGxldGV9XG4gICAgICAvPlxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihFbWFpbCk7XG4iXSwibmFtZXMiOlsiRW1haWwiLCJwcm9wcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsInJlcXVpcmVkIiwidmFsaWRhdGUiLCJlbWFpbCIsImFkbWluIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsImxhYmVsIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwiZmllbGRUeXBlIiwidXNlRmllbGQiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsIkVycm9yIiwibWVzc2FnZSIsIkxhYmVsIiwiaHRtbEZvciIsInJlcGxhY2UiLCJpbnB1dCIsImlkIiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImdldFRyYW5zbGF0aW9uIiwidHlwZSIsIkZpZWxkRGVzY3JpcHRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQWdHQTs7O2VBQUE7Ozs2REFoR21DOzRCQUNKO29FQUNMOytEQUNMOzREQUNIOzREQUNBO3VFQUNXOzJCQUNQOzhCQUVTO1FBRXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsUUFBeUIsU0FBQ0M7SUFDOUIsSUFDRUMsT0FlRUQsTUFmRkMsTUFDQUMsQUFBTUMsZ0JBY0pILE1BZEZFLE1BQ0FFLFdBYUVKLE1BYkZJLDRCQWFFSixNQVpGSyxVQUFBQSx3Q0FBV0Msa0JBQUssb0JBQ1QsTUFXTE4sTUFYRk8sY0FBTyxpQkFTSCxDQUFDLElBVEUsS0FDTEMsZ0JBQUFBLFVBQ0FDLGFBQUFBLE9BQ0FDLGlCQUFBQSxXQUNBQyxhQUFBQSxPQUNBQyxtQkFBQUEsYUFDQUMsb0JBQUFBLGNBQ0FDLG1CQUFBQSxhQUNBQyxpQkFBQUEsV0FFRkMsUUFDRWhCLE1BREZnQjtJQUdGLElBQU0sQUFBRUMsT0FBU0MsSUFBQUEsNEJBQWMsSUFBdkJEO0lBRVIsSUFBTWYsT0FBT0MsaUJBQWlCRjtJQUU5QixJQUFNa0IsbUJBQW1CQyxJQUFBQSxrQkFBVyxFQUFDLFNBQUNDLE9BQU9DO1FBQzNDLE9BQU9qQixTQUFTZ0IsT0FBTyx3Q0FBS0M7WUFBU2xCLFVBQUFBOztJQUN2QyxHQUFHO1FBQUNDO1FBQVVEO0tBQVM7SUFFdkIsSUFBTW1CLFlBQVlDLElBQUFBLGlCQUFRLEVBQUM7UUFDekJ0QixNQUFBQTtRQUNBRyxVQUFVYztRQUNWSixXQUFBQTtJQUNGO0lBRUEsSUFDRU0sUUFJRUUsVUFKRkYsT0FDQUksWUFHRUYsVUFIRkUsV0FDQUMsV0FFRUgsVUFGRkcsVUFDQUMsZUFDRUosVUFERkk7SUFHRixJQUFNQyxVQUFVO1FBQ2Q7UUFDQTtRQUNBbEI7UUFDQWUsYUFBYTtRQUNiakIsWUFBWTtLQUNiLENBQUNxQixNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixxQkFDRSw2QkFBQ0M7UUFDQ3RCLFdBQVdrQjtRQUNYbkIsT0FBTyx3Q0FDRkE7WUFDSEUsT0FBQUE7O3FCQUdGLDZCQUFDc0IsY0FBSztRQUNKUixXQUFXQTtRQUNYUyxTQUFTUDtzQkFFWCw2QkFBQ1EsY0FBSztRQUNKQyxTQUFTLEFBQUMsU0FBbUMsT0FBM0JsQyxLQUFLbUMsT0FBTyxDQUFDLFFBQVE7UUFDdkNyQixPQUFPQTtRQUNQWixVQUFVQTtzQkFFWiw2QkFBQ2tDO1FBQ0NDLElBQUksQUFBQyxTQUFtQyxPQUEzQnJDLEtBQUttQyxPQUFPLENBQUMsUUFBUTtRQUNsQ2hCLE9BQU9BLFNBQW1CO1FBQzFCbUIsVUFBVWQ7UUFDVmUsVUFBVVgsUUFBUXRCO1FBQ2xCSSxhQUFhOEIsSUFBQUEsOEJBQWMsRUFBQzlCLGFBQWFLO1FBQ3pDMEIsTUFBSztRQUNMMUMsTUFBTUM7UUFDTlcsY0FBY0E7c0JBRWhCLDZCQUFDK0IseUJBQWdCO1FBQ2Z2QixPQUFPQTtRQUNQUCxhQUFhQTs7QUFJckI7SUFFQSxXQUFlK0IsSUFBQUEsc0JBQWEsRUFBQzlDIn0=