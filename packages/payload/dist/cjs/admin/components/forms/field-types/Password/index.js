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
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _validations = require("../../../../../fields/validations");
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
var Password = function(props) {
    var pathFromProps = props.path, name = props.name, required = props.required, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.password : _props_validate, style = props.style, className = props.className, width = props.width, autoComplete = props.autoComplete, label = props.label, disabled = props.disabled;
    var path = pathFromProps || name;
    var memoizedValidate = (0, _react.useCallback)(function(value, options) {
        var validationResult = validate(value, _object_spread_props(_object_spread({}, options), {
            required: required
        }));
        return validationResult;
    }, [
        validate,
        required
    ]);
    var _useField1 = (0, _useField.default)({
        path: path,
        validate: memoizedValidate
    }), value = _useField1.value, showError = _useField1.showError, formProcessing = _useField1.formProcessing, setValue = _useField1.setValue, errorMessage = _useField1.errorMessage;
    var classes = [
        "field-type",
        "password",
        className,
        showError && "error"
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
        disabled: formProcessing || disabled,
        type: "password",
        autoComplete: autoComplete,
        name: path
    }));
};
var _default = (0, _withCondition.default)(Password);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1Bhc3N3b3JkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRmllbGQgZnJvbSAnLi4vLi4vdXNlRmllbGQnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi8uLi9FcnJvcic7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IHBhc3N3b3JkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgUGFzc3dvcmQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcGF0aDogcGF0aEZyb21Qcm9wcyxcbiAgICBuYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIHZhbGlkYXRlID0gcGFzc3dvcmQsXG4gICAgc3R5bGUsXG4gICAgY2xhc3NOYW1lLFxuICAgIHdpZHRoLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgICBsYWJlbCxcbiAgICBkaXNhYmxlZCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgY29uc3QgbWVtb2l6ZWRWYWxpZGF0ZSA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0ZSh2YWx1ZSwgeyAuLi5vcHRpb25zLCByZXF1aXJlZCB9KTtcbiAgICByZXR1cm4gdmFsaWRhdGlvblJlc3VsdDtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgZm9ybVByb2Nlc3NpbmcsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JNZXNzYWdlLFxuICB9ID0gdXNlRmllbGQoe1xuICAgIHBhdGgsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gIH0pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgICdwYXNzd29yZCcsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDxMYWJlbFxuICAgICAgICBodG1sRm9yPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPXtgZmllbGQtJHtwYXRoLnJlcGxhY2UoL1xcLi9naSwgJ19fJyl9YH1cbiAgICAgICAgdmFsdWU9e3ZhbHVlIGFzIHN0cmluZyB8fCAnJ31cbiAgICAgICAgb25DaGFuZ2U9e3NldFZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17Zm9ybVByb2Nlc3NpbmcgfHwgZGlzYWJsZWR9XG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGF1dG9Db21wbGV0ZT17YXV0b0NvbXBsZXRlfVxuICAgICAgICBuYW1lPXtwYXRofVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oUGFzc3dvcmQpO1xuIl0sIm5hbWVzIjpbIlBhc3N3b3JkIiwicHJvcHMiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsIm5hbWUiLCJyZXF1aXJlZCIsInZhbGlkYXRlIiwicGFzc3dvcmQiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiYXV0b0NvbXBsZXRlIiwibGFiZWwiLCJkaXNhYmxlZCIsIm1lbW9pemVkVmFsaWRhdGUiLCJ1c2VDYWxsYmFjayIsInZhbHVlIiwib3B0aW9ucyIsInZhbGlkYXRpb25SZXN1bHQiLCJ1c2VGaWVsZCIsInNob3dFcnJvciIsImZvcm1Qcm9jZXNzaW5nIiwic2V0VmFsdWUiLCJlcnJvck1lc3NhZ2UiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJFcnJvciIsIm1lc3NhZ2UiLCJMYWJlbCIsImh0bWxGb3IiLCJyZXBsYWNlIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwidHlwZSIsIndpdGhDb25kaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBK0VBOzs7ZUFBQTs7OzZEQS9FbUM7K0RBQ2Q7NERBQ0g7NERBQ0E7b0VBQ1E7MkJBQ0Q7UUFHbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxXQUE0QixTQUFDQztJQUNqQyxJQUNFQyxBQUFNQyxnQkFVSkYsTUFWRkMsTUFDQUUsT0FTRUgsTUFURkcsTUFDQUMsV0FRRUosTUFSRkksNEJBUUVKLE1BUEZLLFVBQUFBLHdDQUFXQyxxQkFBUSxvQkFDbkJDLFFBTUVQLE1BTkZPLE9BQ0FDLFlBS0VSLE1BTEZRLFdBQ0FDLFFBSUVULE1BSkZTLE9BQ0FDLGVBR0VWLE1BSEZVLGNBQ0FDLFFBRUVYLE1BRkZXLE9BQ0FDLFdBQ0VaLE1BREZZO0lBR0YsSUFBTVgsT0FBT0MsaUJBQWlCQztJQUU5QixJQUFNVSxtQkFBbUJDLElBQUFBLGtCQUFXLEVBQUMsU0FBQ0MsT0FBT0M7UUFDM0MsSUFBTUMsbUJBQW1CWixTQUFTVSxPQUFPLHdDQUFLQztZQUFTWixVQUFBQTs7UUFDdkQsT0FBT2E7SUFDVCxHQUFHO1FBQUNaO1FBQVVEO0tBQVM7SUFFdkIsSUFNSWMsYUFBQUEsSUFBQUEsaUJBQVEsRUFBQztRQUNYakIsTUFBQUE7UUFDQUksVUFBVVE7SUFDWixJQVJFRSxRQUtFRyxXQUxGSCxPQUNBSSxZQUlFRCxXQUpGQyxXQUNBQyxpQkFHRUYsV0FIRkUsZ0JBQ0FDLFdBRUVILFdBRkZHLFVBQ0FDLGVBQ0VKLFdBREZJO0lBTUYsSUFBTUMsVUFBVTtRQUNkO1FBQ0E7UUFDQWY7UUFDQVcsYUFBYTtLQUNkLENBQUNLLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLHFCQUNFLDZCQUFDQztRQUNDbkIsV0FBV2U7UUFDWGhCLE9BQU8sd0NBQ0ZBO1lBQ0hFLE9BQUFBOztxQkFHRiw2QkFBQ21CLGNBQUs7UUFDSlQsV0FBV0E7UUFDWFUsU0FBU1A7c0JBRVgsNkJBQUNRLGNBQUs7UUFDSkMsU0FBUyxBQUFDLFNBQW1DLE9BQTNCOUIsS0FBSytCLE9BQU8sQ0FBQyxRQUFRO1FBQ3ZDckIsT0FBT0E7UUFDUFAsVUFBVUE7c0JBRVosNkJBQUM2QjtRQUNDQyxJQUFJLEFBQUMsU0FBbUMsT0FBM0JqQyxLQUFLK0IsT0FBTyxDQUFDLFFBQVE7UUFDbENqQixPQUFPQSxTQUFtQjtRQUMxQm9CLFVBQVVkO1FBQ1ZULFVBQVVRLGtCQUFrQlI7UUFDNUJ3QixNQUFLO1FBQ0wxQixjQUFjQTtRQUNkUCxNQUFNRjs7QUFJZDtJQUVBLFdBQWVvQyxJQUFBQSxzQkFBYSxFQUFDdEMifQ==