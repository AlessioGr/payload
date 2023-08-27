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
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _validations = require("../../../../../fields/validations");
var _Input = /*#__PURE__*/ _interop_require_default(require("./Input"));
var _getTranslation = require("../../../../../utilities/getTranslation");
var _Locale = require("../../../utilities/Locale");
require("./index.scss");
var _Config = require("../../../utilities/Config");
var _shared = require("../shared");
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
var Textarea = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.textarea : _props_validate, maxLength = props.maxLength, minLength = props.minLength, localized = props.localized, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, placeholder = _ref.placeholder, rows = _ref.rows, description = _ref.description, condition = _ref.condition, rtl = _ref.rtl, label = props.label;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var path = pathFromProps || name;
    var locale = (0, _Locale.useLocale)();
    var localization = (0, _Config.useConfig)().localization;
    var isRTL = (0, _shared.isFieldRTL)({
        fieldRTL: rtl,
        fieldLocalized: localized,
        locale: locale,
        localizationConfig: localization || undefined
    });
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required,
            maxLength: maxLength,
            minLength: minLength
        }));
    }, [
        validate,
        required,
        maxLength,
        minLength
    ]);
    var _useField1 = (0, _useField.default)({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField1.value, showError = _useField1.showError, setValue = _useField1.setValue, errorMessage = _useField1.errorMessage;
    return /*#__PURE__*/ _react.default.createElement(_Input.default, {
        path: path,
        name: name,
        onChange: function(e) {
            setValue(e.target.value);
        },
        showError: showError,
        errorMessage: errorMessage,
        required: required,
        label: label,
        value: value,
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        readOnly: readOnly,
        style: style,
        className: className,
        width: width,
        description: description,
        rows: rows,
        rtl: isRTL
    });
};
var _default = (0, _withCondition.default)(Textarea);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHRhcmVhL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHsgdGV4dGFyZWEgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBUZXh0YXJlYUlucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgaXNGaWVsZFJUTCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IFRleHRhcmVhOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgbmFtZSxcbiAgICByZXF1aXJlZCxcbiAgICB2YWxpZGF0ZSA9IHRleHRhcmVhLFxuICAgIG1heExlbmd0aCxcbiAgICBtaW5MZW5ndGgsXG4gICAgbG9jYWxpemVkLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJvd3MsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIHJ0bCxcbiAgICB9ID0ge30sXG4gICAgbGFiZWwsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCBsb2NhbGUgPSB1c2VMb2NhbGUoKTtcblxuICBjb25zdCB7IGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IGlzUlRMID0gaXNGaWVsZFJUTCh7XG4gICAgZmllbGRSVEw6IHJ0bCxcbiAgICBmaWVsZExvY2FsaXplZDogbG9jYWxpemVkLFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbGl6YXRpb25Db25maWc6IGxvY2FsaXphdGlvbiB8fCB1bmRlZmluZWQsXG4gIH0pO1xuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkLCBtYXhMZW5ndGgsIG1pbkxlbmd0aCB9KTtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZCwgbWF4TGVuZ3RoLCBtaW5MZW5ndGhdKTtcblxuICBjb25zdCB7XG4gICAgdmFsdWUsXG4gICAgc2hvd0Vycm9yLFxuICAgIHNldFZhbHVlLFxuICAgIGVycm9yTWVzc2FnZSxcbiAgfSA9IHVzZUZpZWxkKHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dGFyZWFJbnB1dFxuICAgICAgcGF0aD17cGF0aH1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgfX1cbiAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICBsYWJlbD17bGFiZWx9XG4gICAgICB2YWx1ZT17dmFsdWUgYXMgc3RyaW5nfVxuICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgcm93cz17cm93c31cbiAgICAgIHJ0bD17aXNSVEx9XG4gICAgLz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFRleHRhcmVhKTtcbiJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsInByb3BzIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJuYW1lIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsInRleHRhcmVhIiwibWF4TGVuZ3RoIiwibWluTGVuZ3RoIiwibG9jYWxpemVkIiwiYWRtaW4iLCJyZWFkT25seSIsInN0eWxlIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJkZXNjcmlwdGlvbiIsImNvbmRpdGlvbiIsInJ0bCIsImxhYmVsIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwibG9jYWxlIiwidXNlTG9jYWxlIiwibG9jYWxpemF0aW9uIiwidXNlQ29uZmlnIiwiaXNSVEwiLCJpc0ZpZWxkUlRMIiwiZmllbGRSVEwiLCJmaWVsZExvY2FsaXplZCIsImxvY2FsaXphdGlvbkNvbmZpZyIsInVuZGVmaW5lZCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsInVzZUZpZWxkIiwic2hvd0Vycm9yIiwic2V0VmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJUZXh0YXJlYUlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZ2V0VHJhbnNsYXRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQXdGQTs7O2VBQUE7Ozs2REF4Rm1DOzRCQUNKOytEQUNWO29FQUNLOzJCQUNEOzREQUVDOzhCQUNLO3NCQUNMO1FBRW5CO3NCQUNtQjtzQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNQSxXQUE0QixTQUFDQztJQUNqQyxJQUNFQyxBQUFNQyxnQkFtQkpGLE1BbkJGQyxNQUNBRSxPQWtCRUgsTUFsQkZHLE1BQ0FDLFdBaUJFSixNQWpCRkksNEJBaUJFSixNQWhCRkssVUFBQUEsd0NBQVdDLHFCQUFRLG9CQUNuQkMsWUFlRVAsTUFmRk8sV0FDQUMsWUFjRVIsTUFkRlEsV0FDQUMsWUFhRVQsTUFiRlMsV0FDTyxNQVlMVCxNQVpGVSxjQUFPLGlCQVVILENBQUMsSUFWRSxLQUNMQyxnQkFBQUEsVUFDQUMsYUFBQUEsT0FDQUMsaUJBQUFBLFdBQ0FDLGFBQUFBLE9BQ0FDLG1CQUFBQSxhQUNBQyxZQUFBQSxNQUNBQyxtQkFBQUEsYUFDQUMsaUJBQUFBLFdBQ0FDLFdBQUFBLEtBRUZDLFFBQ0VwQixNQURGb0I7SUFHRixJQUFNLEFBQUVDLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUVSLElBQU1wQixPQUFPQyxpQkFBaUJDO0lBRTlCLElBQU1vQixTQUFTQyxJQUFBQSxpQkFBUztJQUV4QixJQUFNLEFBQUVDLGVBQWlCQyxJQUFBQSxpQkFBUyxJQUExQkQ7SUFDUixJQUFNRSxRQUFRQyxJQUFBQSxrQkFBVSxFQUFDO1FBQ3ZCQyxVQUFVVjtRQUNWVyxnQkFBZ0JyQjtRQUNoQmMsUUFBQUE7UUFDQVEsb0JBQW9CTixnQkFBZ0JPO0lBQ3RDO0lBQ0EsSUFBTUMsbUJBQW1CQyxJQUFBQSxrQkFBVyxFQUFDLFNBQUNDLE9BQU9DO1FBQzNDLE9BQU8vQixTQUFTOEIsT0FBTyx3Q0FBS0M7WUFBU2hDLFVBQUFBO1lBQVVHLFdBQUFBO1lBQVdDLFdBQUFBOztJQUM1RCxHQUFHO1FBQUNIO1FBQVVEO1FBQVVHO1FBQVdDO0tBQVU7SUFFN0MsSUFLSTZCLGFBQUFBLElBQUFBLGlCQUFRLEVBQUM7UUFDWHBDLE1BQUFBO1FBQ0FJLFVBQVU0QjtRQUNWZixXQUFBQTtJQUNGLElBUkVpQixRQUlFRSxXQUpGRixPQUNBRyxZQUdFRCxXQUhGQyxXQUNBQyxXQUVFRixXQUZGRSxVQUNBQyxlQUNFSCxXQURGRztJQU9GLHFCQUNFLDZCQUFDQyxjQUFhO1FBQ1p4QyxNQUFNQTtRQUNORSxNQUFNQTtRQUNOdUMsVUFBVSxTQUFDQztZQUNUSixTQUFTSSxFQUFFQyxNQUFNLENBQUNULEtBQUs7UUFDekI7UUFDQUcsV0FBV0E7UUFDWEUsY0FBY0E7UUFDZHBDLFVBQVVBO1FBQ1ZnQixPQUFPQTtRQUNQZSxPQUFPQTtRQUNQcEIsYUFBYThCLElBQUFBLDhCQUFjLEVBQUM5QixhQUFhTTtRQUN6Q1YsVUFBVUE7UUFDVkMsT0FBT0E7UUFDUEMsV0FBV0E7UUFDWEMsT0FBT0E7UUFDUEcsYUFBYUE7UUFDYkQsTUFBTUE7UUFDTkcsS0FBS1E7O0FBR1g7SUFDQSxXQUFlbUIsSUFBQUEsc0JBQWEsRUFBQy9DIn0=