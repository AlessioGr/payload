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
var _DatePicker = /*#__PURE__*/ _interop_require_default(require("../../../elements/DatePicker"));
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
var baseClass = "date-time-field";
var DateTime = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.date : _props_validate, label = props.label, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, placeholder = _ref.placeholder, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, date = _ref.date, description = _ref.description, condition = _ref.condition;
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
    var _useField1 = (0, _useField.default)({
        path: path,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField1.value, showError = _useField1.showError, errorMessage = _useField1.errorMessage, setValue = _useField1.setValue;
    var classes = [
        "field-type",
        baseClass,
        className,
        showError && "".concat(baseClass, "--has-error"),
        readOnly && "read-only"
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__error-wrap")
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    })), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: path,
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement("div", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        className: "".concat(baseClass, "__input-wrapper")
    }, /*#__PURE__*/ _react.default.createElement(_DatePicker.default, _object_spread_props(_object_spread({}, date), {
        placeholder: (0, _getTranslation.getTranslation)(placeholder, i18n),
        readOnly: readOnly,
        onChange: function(incomingDate) {
            var _incomingDate;
            if (!readOnly) setValue(((_incomingDate = incomingDate) === null || _incomingDate === void 0 ? void 0 : _incomingDate.toISOString()) || null);
        },
        value: value
    }))), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = (0, _withCondition.default)(DateTime);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0RhdGVUaW1lL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EYXRlUGlja2VyJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi4vLi4vRXJyb3InO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBkYXRlIGFzIGRhdGVWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2RhdGUtdGltZS1maWVsZCc7XG5cbmNvbnN0IERhdGVUaW1lOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhdGg6IHBhdGhGcm9tUHJvcHMsXG4gICAgbmFtZSxcbiAgICByZXF1aXJlZCxcbiAgICB2YWxpZGF0ZSA9IGRhdGVWYWxpZGF0aW9uLFxuICAgIGxhYmVsLFxuICAgIGFkbWluOiB7XG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGRhdGUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgcGF0aCA9IHBhdGhGcm9tUHJvcHMgfHwgbmFtZTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHNob3dFcnJvcixcbiAgICBlcnJvck1lc3NhZ2UsXG4gICAgc2V0VmFsdWUsXG4gIH0gPSB1c2VGaWVsZCh7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgc2hvd0Vycm9yICYmIGAke2Jhc2VDbGFzc30tLWhhcy1lcnJvcmAsXG4gICAgcmVhZE9ubHkgJiYgJ3JlYWQtb25seScsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgICB3aWR0aCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Vycm9yLXdyYXBgfT5cbiAgICAgICAgPEVycm9yXG4gICAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8TGFiZWxcbiAgICAgICAgaHRtbEZvcj17cGF0aH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPGRpdlxuICAgICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW5wdXQtd3JhcHBlcmB9XG4gICAgICA+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgey4uLmRhdGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2dldFRyYW5zbGF0aW9uKHBsYWNlaG9sZGVyLCBpMThuKX1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgb25DaGFuZ2U9eyhpbmNvbWluZ0RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVhZE9ubHkpIHNldFZhbHVlKGluY29taW5nRGF0ZT8udG9JU09TdHJpbmcoKSB8fCBudWxsKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSBhcyBEYXRlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8RmllbGREZXNjcmlwdGlvblxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKERhdGVUaW1lKTtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEYXRlVGltZSIsInByb3BzIiwicGF0aCIsInBhdGhGcm9tUHJvcHMiLCJuYW1lIiwicmVxdWlyZWQiLCJ2YWxpZGF0ZSIsImRhdGVWYWxpZGF0aW9uIiwibGFiZWwiLCJhZG1pbiIsInBsYWNlaG9sZGVyIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwibWVtb2l6ZWRWYWxpZGF0ZSIsInVzZUNhbGxiYWNrIiwidmFsdWUiLCJvcHRpb25zIiwidXNlRmllbGQiLCJzaG93RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRWYWx1ZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsIkVycm9yIiwibWVzc2FnZSIsIkxhYmVsIiwiaHRtbEZvciIsImlkIiwicmVwbGFjZSIsIkRhdGVQaWNrZXIiLCJnZXRUcmFuc2xhdGlvbiIsIm9uQ2hhbmdlIiwiaW5jb21pbmdEYXRlIiwidG9JU09TdHJpbmciLCJGaWVsZERlc2NyaXB0aW9uIiwid2l0aENvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3R0E7OztlQUFBOzs7NkRBeEdtQzs0QkFFSjtpRUFDUjtvRUFDRzsrREFDTDs0REFDSDs0REFDQTt1RUFDVzsyQkFDVTs4QkFFUjtRQUV4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsV0FBNEIsU0FBQ0M7SUFDakMsSUFDRUMsQUFBTUMsZ0JBZUpGLE1BZkZDLE1BQ0FFLE9BY0VILE1BZEZHLE1BQ0FDLFdBYUVKLE1BYkZJLDRCQWFFSixNQVpGSyxVQUFBQSx3Q0FBV0MsaUJBQWMsb0JBQ3pCQyxRQVdFUCxNQVhGTyxPQUNPLE1BVUxQLE1BVkZRLGNBQU8saUJBU0gsQ0FBQyxJQVRFLEtBQ0xDLG1CQUFBQSxhQUNBQyxnQkFBQUEsVUFDQUMsYUFBQUEsT0FDQUMsaUJBQUFBLFdBQ0FDLGFBQUFBLE9BQ0FDLFlBQUFBLE1BQ0FDLG1CQUFBQSxhQUNBQyxpQkFBQUE7SUFJSixJQUFNLEFBQUVDLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUVSLElBQU1oQixPQUFPQyxpQkFBaUJDO0lBRTlCLElBQU1nQixtQkFBbUJDLElBQUFBLGtCQUFXLEVBQUMsU0FBQ0MsT0FBT0M7UUFDM0MsT0FBT2pCLFNBQVNnQixPQUFPLHdDQUFLQztZQUFTbEIsVUFBQUE7O0lBQ3ZDLEdBQUc7UUFBQ0M7UUFBVUQ7S0FBUztJQUV2QixJQUtJbUIsYUFBQUEsSUFBQUEsaUJBQVEsRUFBQztRQUNYdEIsTUFBQUE7UUFDQUksVUFBVWM7UUFDVkgsV0FBQUE7SUFDRixJQVJFSyxRQUlFRSxXQUpGRixPQUNBRyxZQUdFRCxXQUhGQyxXQUNBQyxlQUVFRixXQUZGRSxjQUNBQyxXQUNFSCxXQURGRztJQU9GLElBQU1DLFVBQVU7UUFDZDtRQUNBN0I7UUFDQWM7UUFDQVksYUFBYSxBQUFDLEdBQVksT0FBVjFCLFdBQVU7UUFDMUJZLFlBQVk7S0FDYixDQUFDa0IsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0UsNkJBQUNDO1FBQ0NuQixXQUFXZTtRQUNYaEIsT0FBTyx3Q0FDRkE7WUFDSEUsT0FBQUE7O3FCQUdGLDZCQUFDa0I7UUFBSW5CLFdBQVcsQUFBQyxHQUFZLE9BQVZkLFdBQVU7cUJBQzNCLDZCQUFDa0MsY0FBSztRQUNKUixXQUFXQTtRQUNYUyxTQUFTUjt1QkFHYiw2QkFBQ1MsY0FBSztRQUNKQyxTQUFTbEM7UUFDVE0sT0FBT0E7UUFDUEgsVUFBVUE7c0JBRVosNkJBQUMyQjtRQUNDSyxJQUFJLEFBQUMsU0FBbUMsT0FBM0JuQyxLQUFLb0MsT0FBTyxDQUFDLFFBQVE7UUFDbEN6QixXQUFXLEFBQUMsR0FBWSxPQUFWZCxXQUFVO3FCQUV4Qiw2QkFBQ3dDLG1CQUFVLDBDQUNMeEI7UUFDSkwsYUFBYThCLElBQUFBLDhCQUFjLEVBQUM5QixhQUFhUTtRQUN6Q1AsVUFBVUE7UUFDVjhCLFVBQVUsU0FBQ0M7Z0JBQ2VBO1lBQXhCLElBQUksQ0FBQy9CLFVBQVVnQixTQUFTZSxFQUFBQSxnQkFBQUEsMEJBQUFBLG9DQUFBQSxjQUFjQyxXQUFXLE9BQU07UUFDekQ7UUFDQXJCLE9BQU9BO3dCQUdYLDZCQUFDc0IseUJBQWdCO1FBQ2Z0QixPQUFPQTtRQUNQTixhQUFhQTs7QUFJckI7SUFFQSxXQUFlNkIsSUFBQUEsc0JBQWEsRUFBQzdDIn0=