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
var _Config = require("../../../utilities/Config");
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _validations = require("../../../../../fields/validations");
var _Input = /*#__PURE__*/ _interop_require_default(require("./Input"));
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
var Upload = function(props) {
    var _useConfig = (0, _Config.useConfig)(), collections = _useConfig.collections, serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var path = props.path, name = props.name, required = props.required, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, label = props.label, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.upload : _props_validate, relationTo = props.relationTo, fieldTypes = props.fieldTypes, filterOptions = props.filterOptions;
    var collection = collections.find(function(coll) {
        return coll.slug === relationTo;
    });
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
        return validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var field = (0, _useField.default)({
        path: path,
        validate: memoizedValidate,
        condition: condition
    });
    var value = field.value, showError = field.showError, setValue = field.setValue, errorMessage = field.errorMessage;
    var onChange = (0, _react.useCallback)(function(incomingValue) {
        var _incomingValue;
        var incomingID = ((_incomingValue = incomingValue) === null || _incomingValue === void 0 ? void 0 : _incomingValue.id) || incomingValue;
        setValue(incomingID);
    }, [
        setValue
    ]);
    if (collection.upload) {
        return /*#__PURE__*/ _react.default.createElement(_Input.default, {
            path: path,
            value: value,
            onChange: onChange,
            description: description,
            label: label,
            required: required,
            showError: showError,
            serverURL: serverURL,
            api: api,
            errorMessage: errorMessage,
            readOnly: readOnly,
            style: style,
            className: className,
            width: width,
            collection: collection,
            fieldTypes: fieldTypes,
            name: name,
            relationTo: relationTo,
            filterOptions: filterOptions
        });
    }
    return null;
};
var _default = (0, _withCondition.default)(Upload);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1VwbG9hZC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IHdpdGhDb25kaXRpb24gZnJvbSAnLi4vLi4vd2l0aENvbmRpdGlvbic7XG5pbXBvcnQgeyB1cGxvYWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvdmFsaWRhdGlvbnMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBVcGxvYWRJbnB1dCBmcm9tICcuL0lucHV0JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBVcGxvYWQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbnMsXG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczoge1xuICAgICAgYXBpLFxuICAgIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCB7XG4gICAgcGF0aCxcbiAgICBuYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGNvbmRpdGlvbixcbiAgICB9ID0ge30sXG4gICAgbGFiZWwsXG4gICAgdmFsaWRhdGUgPSB1cGxvYWQsXG4gICAgcmVsYXRpb25UbyxcbiAgICBmaWVsZFR5cGVzLFxuICAgIGZpbHRlck9wdGlvbnMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSByZWxhdGlvblRvKTtcblxuICBjb25zdCBtZW1vaXplZFZhbGlkYXRlID0gdXNlQ2FsbGJhY2soKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLm9wdGlvbnMsIHJlcXVpcmVkIH0pO1xuICB9LCBbdmFsaWRhdGUsIHJlcXVpcmVkXSk7XG5cbiAgY29uc3QgZmllbGQgPSB1c2VGaWVsZCh7XG4gICAgcGF0aCxcbiAgICB2YWxpZGF0ZTogbWVtb2l6ZWRWYWxpZGF0ZSxcbiAgICBjb25kaXRpb24sXG4gIH0pO1xuXG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JNZXNzYWdlLFxuICB9ID0gZmllbGQ7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjaygoaW5jb21pbmdWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGluY29taW5nSUQgPSBpbmNvbWluZ1ZhbHVlPy5pZCB8fCBpbmNvbWluZ1ZhbHVlO1xuICAgIHNldFZhbHVlKGluY29taW5nSUQpO1xuICB9LCBbXG4gICAgc2V0VmFsdWUsXG4gIF0pO1xuXG4gIGlmIChjb2xsZWN0aW9uLnVwbG9hZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VXBsb2FkSW5wdXRcbiAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZ31cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgc2VydmVyVVJMPXtzZXJ2ZXJVUkx9XG4gICAgICAgIGFwaT17YXBpfVxuICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHJlbGF0aW9uVG89e3JlbGF0aW9uVG99XG4gICAgICAgIGZpbHRlck9wdGlvbnM9e2ZpbHRlck9wdGlvbnN9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFVwbG9hZCk7XG4iXSwibmFtZXMiOlsiVXBsb2FkIiwicHJvcHMiLCJ1c2VDb25maWciLCJjb2xsZWN0aW9ucyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInBhdGgiLCJuYW1lIiwicmVxdWlyZWQiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwibGFiZWwiLCJ2YWxpZGF0ZSIsInVwbG9hZCIsInJlbGF0aW9uVG8iLCJmaWVsZFR5cGVzIiwiZmlsdGVyT3B0aW9ucyIsImNvbGxlY3Rpb24iLCJmaW5kIiwiY29sbCIsInNsdWciLCJtZW1vaXplZFZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsIm9wdGlvbnMiLCJmaWVsZCIsInVzZUZpZWxkIiwic2hvd0Vycm9yIiwic2V0VmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJvbkNoYW5nZSIsImluY29taW5nVmFsdWUiLCJpbmNvbWluZ0lEIiwiaWQiLCJVcGxvYWRJbnB1dCIsIndpdGhDb25kaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBNEZBOzs7ZUFBQTs7OzZEQTVGbUM7c0JBQ1Q7K0RBQ0w7b0VBQ0s7MkJBQ0g7NERBRUM7UUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxTQUEwQixTQUFDQztJQUMvQixJQU1JQyxhQUFBQSxJQUFBQSxpQkFBUyxLQUxYQyxjQUtFRCxXQUxGQyxhQUNBQyxZQUlFRixXQUpGRSxXQUNBQyxBQUNFQyxNQUVBSixXQUhGRyxPQUNFQztJQUlKLElBQ0VDLE9BZ0JFTixNQWhCRk0sTUFDQUMsT0FlRVAsTUFmRk8sTUFDQUMsV0FjRVIsTUFkRlEsVUFDTyxNQWFMUixNQWJGUyxjQUFPLGlCQU9ILENBQUMsSUFQRSxLQUNMQyxnQkFBQUEsVUFDQUMsYUFBQUEsT0FDQUMsaUJBQUFBLFdBQ0FDLGFBQUFBLE9BQ0FDLG1CQUFBQSxhQUNBQyxpQkFBQUEsV0FFRkMsUUFLRWhCLE1BTEZnQix5QkFLRWhCLE1BSkZpQixVQUFBQSx3Q0FBV0MsbUJBQU0sb0JBQ2pCQyxhQUdFbkIsTUFIRm1CLFlBQ0FDLGFBRUVwQixNQUZGb0IsWUFDQUMsZ0JBQ0VyQixNQURGcUI7SUFHRixJQUFNQyxhQUFhcEIsWUFBWXFCLElBQUksQ0FBQyxTQUFDQztlQUFTQSxLQUFLQyxJQUFJLEtBQUtOOztJQUU1RCxJQUFNTyxtQkFBbUJDLElBQUFBLGtCQUFXLEVBQUMsU0FBQ0MsT0FBT0M7UUFDM0MsT0FBT1osU0FBU1csT0FBTyx3Q0FBS0M7WUFBU3JCLFVBQUFBOztJQUN2QyxHQUFHO1FBQUNTO1FBQVVUO0tBQVM7SUFFdkIsSUFBTXNCLFFBQVFDLElBQUFBLGlCQUFRLEVBQUM7UUFDckJ6QixNQUFBQTtRQUNBVyxVQUFVUztRQUNWWCxXQUFBQTtJQUNGO0lBRUEsSUFDRWEsUUFJRUUsTUFKRkYsT0FDQUksWUFHRUYsTUFIRkUsV0FDQUMsV0FFRUgsTUFGRkcsVUFDQUMsZUFDRUosTUFERkk7SUFHRixJQUFNQyxXQUFXUixJQUFBQSxrQkFBVyxFQUFDLFNBQUNTO1lBQ1RBO1FBQW5CLElBQU1DLGFBQWFELEVBQUFBLGlCQUFBQSwyQkFBQUEscUNBQUFBLGVBQWVFLEVBQUUsS0FBSUY7UUFDeENILFNBQVNJO0lBQ1gsR0FBRztRQUNESjtLQUNEO0lBRUQsSUFBSVgsV0FBV0osTUFBTSxFQUFFO1FBQ3JCLHFCQUNFLDZCQUFDcUIsY0FBVztZQUNWakMsTUFBTUE7WUFDTnNCLE9BQU9BO1lBQ1BPLFVBQVVBO1lBQ1ZyQixhQUFhQTtZQUNiRSxPQUFPQTtZQUNQUixVQUFVQTtZQUNWd0IsV0FBV0E7WUFDWDdCLFdBQVdBO1lBQ1hFLEtBQUtBO1lBQ0w2QixjQUFjQTtZQUNkeEIsVUFBVUE7WUFDVkMsT0FBT0E7WUFDUEMsV0FBV0E7WUFDWEMsT0FBT0E7WUFDUFMsWUFBWUE7WUFDWkYsWUFBWUE7WUFDWmIsTUFBTUE7WUFDTlksWUFBWUE7WUFDWkUsZUFBZUE7O0lBR3JCO0lBRUEsT0FBTztBQUNUO0lBQ0EsV0FBZW1CLElBQUFBLHNCQUFhLEVBQUN6QyJ9