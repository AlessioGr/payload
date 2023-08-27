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
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _validations = require("../../../../../fields/validations");
var _Input = /*#__PURE__*/ _interop_require_default(require("./Input"));
var _Locale = require("../../../utilities/Locale");
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
var Text = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.text : _props_validate, label = props.label, minLength = props.minLength, maxLength = props.maxLength, localized = props.localized, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, placeholder = _ref.placeholder, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, rtl = _ref.rtl, inputRef = props.inputRef;
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
            minLength: minLength,
            maxLength: maxLength,
            required: required
        }));
    }, [
        validate,
        minLength,
        maxLength,
        required
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
        placeholder: placeholder,
        readOnly: readOnly,
        style: style,
        className: className,
        width: width,
        description: description,
        inputRef: inputRef,
        rtl: isRTL
    });
};
var _default = (0, _withCondition.default)(Text);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RleHQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IHRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgaXNGaWVsZFJUTCB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IFRleHQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICBuYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gdGV4dCxcbiAgICBsYWJlbCxcbiAgICBtaW5MZW5ndGgsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGxvY2FsaXplZCxcbiAgICBhZG1pbjoge1xuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICAgIHJ0bCxcbiAgICB9ID0ge30sXG4gICAgaW5wdXRSZWYsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBwYXRoID0gcGF0aEZyb21Qcm9wcyB8fCBuYW1lO1xuICBjb25zdCBsb2NhbGUgPSB1c2VMb2NhbGUoKTtcblxuICBjb25zdCB7IGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IGlzUlRMID0gaXNGaWVsZFJUTCh7XG4gICAgZmllbGRSVEw6IHJ0bCxcbiAgICBmaWVsZExvY2FsaXplZDogbG9jYWxpemVkLFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbGl6YXRpb25Db25maWc6IGxvY2FsaXphdGlvbiB8fCB1bmRlZmluZWQsXG4gIH0pO1xuXG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIHJldHVybiB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCBtaW5MZW5ndGgsIG1heExlbmd0aCwgcmVxdWlyZWQgfSk7XG4gIH0sIFt2YWxpZGF0ZSwgbWluTGVuZ3RoLCBtYXhMZW5ndGgsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvck1lc3NhZ2UsXG4gIH0gPSB1c2VGaWVsZDxzdHJpbmc+KHtcbiAgICBwYXRoLFxuICAgIHZhbGlkYXRlOiBtZW1vaXplZFZhbGlkYXRlLFxuICAgIGNvbmRpdGlvbixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGV4dElucHV0XG4gICAgICBwYXRoPXtwYXRofVxuICAgICAgbmFtZT17bmFtZX1cbiAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICB9fVxuICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxuICAgICAgcnRsPXtpc1JUTH1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihUZXh0KTtcbiJdLCJuYW1lcyI6WyJUZXh0IiwicHJvcHMiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsIm5hbWUiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwidGV4dCIsImxhYmVsIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwibG9jYWxpemVkIiwiYWRtaW4iLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwicnRsIiwiaW5wdXRSZWYiLCJsb2NhbGUiLCJ1c2VMb2NhbGUiLCJsb2NhbGl6YXRpb24iLCJ1c2VDb25maWciLCJpc1JUTCIsImlzRmllbGRSVEwiLCJmaWVsZFJUTCIsImZpZWxkTG9jYWxpemVkIiwibG9jYWxpemF0aW9uQ29uZmlnIiwidW5kZWZpbmVkIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwidXNlRmllbGQiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImVycm9yTWVzc2FnZSIsIlRleHRJbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIndpdGhDb25kaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBb0ZBOzs7ZUFBQTs7OzZEQXBGbUM7K0RBQ2Q7b0VBQ0s7MkJBQ0w7NERBRUM7c0JBQ0k7c0JBQ0E7c0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUEsT0FBd0IsU0FBQ0M7SUFDN0IsSUFDRUMsQUFBTUMsZ0JBbUJKRixNQW5CRkMsTUFDQUUsT0FrQkVILE1BbEJGRyxNQUNBQyxXQWlCRUosTUFqQkZJLDRCQWlCRUosTUFoQkZLLFVBQUFBLHdDQUFXQyxpQkFBSSxvQkFDZkMsUUFlRVAsTUFmRk8sT0FDQUMsWUFjRVIsTUFkRlEsV0FDQUMsWUFhRVQsTUFiRlMsV0FDQUMsWUFZRVYsTUFaRlUsV0FDTyxNQVdMVixNQVhGVyxjQUFPLGlCQVNILENBQUMsSUFURSxLQUNMQyxtQkFBQUEsYUFDQUMsZ0JBQUFBLFVBQ0FDLGFBQUFBLE9BQ0FDLGlCQUFBQSxXQUNBQyxhQUFBQSxPQUNBQyxtQkFBQUEsYUFDQUMsaUJBQUFBLFdBQ0FDLFdBQUFBLEtBRUZDLFdBQ0VwQixNQURGb0I7SUFHRixJQUFNbkIsT0FBT0MsaUJBQWlCQztJQUM5QixJQUFNa0IsU0FBU0MsSUFBQUEsaUJBQVM7SUFFeEIsSUFBTSxBQUFFQyxlQUFpQkMsSUFBQUEsaUJBQVMsSUFBMUJEO0lBQ1IsSUFBTUUsUUFBUUMsSUFBQUEsa0JBQVUsRUFBQztRQUN2QkMsVUFBVVI7UUFDVlMsZ0JBQWdCbEI7UUFDaEJXLFFBQUFBO1FBQ0FRLG9CQUFvQk4sZ0JBQWdCTztJQUN0QztJQUdBLElBQU1DLG1CQUFtQkMsSUFBQUEsa0JBQVcsRUFBQyxTQUFDQyxPQUFPQztRQUMzQyxPQUFPN0IsU0FBUzRCLE9BQU8sd0NBQUtDO1lBQVMxQixXQUFBQTtZQUFXQyxXQUFBQTtZQUFXTCxVQUFBQTs7SUFDN0QsR0FBRztRQUFDQztRQUFVRztRQUFXQztRQUFXTDtLQUFTO0lBRTdDLElBS0krQixhQUFBQSxJQUFBQSxpQkFBUSxFQUFTO1FBQ25CbEMsTUFBQUE7UUFDQUksVUFBVTBCO1FBQ1ZiLFdBQUFBO0lBQ0YsSUFSRWUsUUFJRUUsV0FKRkYsT0FDQUcsWUFHRUQsV0FIRkMsV0FDQUMsV0FFRUYsV0FGRkUsVUFDQUMsZUFDRUgsV0FERkc7SUFPRixxQkFDRSw2QkFBQ0MsY0FBUztRQUNSdEMsTUFBTUE7UUFDTkUsTUFBTUE7UUFDTnFDLFVBQVUsU0FBQ0M7WUFDVEosU0FBU0ksRUFBRUMsTUFBTSxDQUFDVCxLQUFLO1FBQ3pCO1FBQ0FHLFdBQVdBO1FBQ1hFLGNBQWNBO1FBQ2RsQyxVQUFVQTtRQUNWRyxPQUFPQTtRQUNQMEIsT0FBT0E7UUFDUHJCLGFBQWFBO1FBQ2JDLFVBQVVBO1FBQ1ZDLE9BQU9BO1FBQ1BDLFdBQVdBO1FBQ1hDLE9BQU9BO1FBQ1BDLGFBQWFBO1FBQ2JHLFVBQVVBO1FBQ1ZELEtBQUtNOztBQUdYO0lBRUEsV0FBZWtCLElBQUFBLHNCQUFhLEVBQUM1QyJ9