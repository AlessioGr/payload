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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../RenderFields"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _provider = require("../../../elements/Collapsible/provider");
var _provider1 = require("./provider");
var _provider2 = require("../Row/provider");
var _provider3 = require("../Tabs/provider");
var _getTranslation = require("../../../../../utilities/getTranslation");
var _createNestedFieldPath = require("../../Form/createNestedFieldPath");
var _context = require("../../Form/context");
var _WatchChildErrors = require("../../WatchChildErrors");
var _ErrorPill = require("../../../elements/ErrorPill");
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
var baseClass = "group-field";
var Group = function(props) {
    var _permissions;
    var label = props.label, fields = props.fields, name = props.name, pathFromProps = props.path, fieldTypes = props.fieldTypes, indexPath = props.indexPath, _props_admin = props.admin, readOnly = _props_admin.readOnly, style = _props_admin.style, className = _props_admin.className, width = _props_admin.width, description = _props_admin.description, _props_admin_hideGutter = _props_admin.hideGutter, hideGutter = _props_admin_hideGutter === void 0 ? false : _props_admin_hideGutter, permissions = props.permissions;
    var isWithinCollapsible = (0, _provider.useCollapsible)();
    var isWithinGroup = (0, _provider1.useGroup)();
    var isWithinRow = (0, _provider2.useRow)();
    var isWithinTab = (0, _provider3.useTabs)();
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var submitted = (0, _context.useFormSubmitted)();
    var _React_useState = _sliced_to_array(_react.default.useState(undefined), 2), errorCount = _React_useState[0], setErrorCount = _React_useState[1];
    var groupHasErrors = submitted && errorCount > 0;
    var path = pathFromProps || name;
    return /*#__PURE__*/ _react.default.createElement("div", {
        id: "field-".concat(path.replace(/\./gi, "__")),
        className: [
            "field-type",
            baseClass,
            isWithinCollapsible && "".concat(baseClass, "--within-collapsible"),
            isWithinGroup && "".concat(baseClass, "--within-group"),
            isWithinRow && "".concat(baseClass, "--within-row"),
            isWithinTab && "".concat(baseClass, "--within-tab"),
            !hideGutter && isWithinGroup && "".concat(baseClass, "--gutter"),
            groupHasErrors && "".concat(baseClass, "--has-error"),
            className
        ].filter(Boolean).join(" "),
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ _react.default.createElement(_WatchChildErrors.WatchChildErrors, {
        setErrorCount: setErrorCount,
        path: path,
        fieldSchema: fields
    }), /*#__PURE__*/ _react.default.createElement(_provider1.GroupProvider, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__header")
    }, (label || description) && /*#__PURE__*/ _react.default.createElement("header", null, label && /*#__PURE__*/ _react.default.createElement("h3", {
        className: "".concat(baseClass, "__title")
    }, (0, _getTranslation.getTranslation)(label, i18n)), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        className: "field-description-".concat(path.replace(/\./gi, "__")),
        value: null,
        description: description
    })), groupHasErrors && /*#__PURE__*/ _react.default.createElement(_ErrorPill.ErrorPill, {
        count: errorCount,
        withMessage: true
    })), /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        permissions: (_permissions = permissions) === null || _permissions === void 0 ? void 0 : _permissions.fields,
        readOnly: readOnly,
        fieldTypes: fieldTypes,
        indexPath: indexPath,
        fieldSchema: fields.map(function(subField) {
            return _object_spread_props(_object_spread({}, subField), {
                path: (0, _createNestedFieldPath.createNestedFieldPath)(path, subField)
            });
        })
    }))));
};
var _default = (0, _withCondition.default)(Group);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0dyb3VwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi4vLi4vUmVuZGVyRmllbGRzJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlQ29sbGFwc2libGUgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2xsYXBzaWJsZS9wcm92aWRlcic7XG5pbXBvcnQgeyBHcm91cFByb3ZpZGVyLCB1c2VHcm91cCB9IGZyb20gJy4vcHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlUm93IH0gZnJvbSAnLi4vUm93L3Byb3ZpZGVyJztcbmltcG9ydCB7IHVzZVRhYnMgfSBmcm9tICcuLi9UYWJzL3Byb3ZpZGVyJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCB9IGZyb20gJy4uLy4uL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoJztcbmltcG9ydCB7IHVzZUZvcm1TdWJtaXR0ZWQgfSBmcm9tICcuLi8uLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgV2F0Y2hDaGlsZEVycm9ycyB9IGZyb20gJy4uLy4uL1dhdGNoQ2hpbGRFcnJvcnMnO1xuaW1wb3J0IHsgRXJyb3JQaWxsIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRXJyb3JQaWxsJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZ3JvdXAtZmllbGQnO1xuXG5jb25zdCBHcm91cDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbCxcbiAgICBmaWVsZHMsXG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIGZpZWxkVHlwZXMsXG4gICAgaW5kZXhQYXRoLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGhpZGVHdXR0ZXIgPSBmYWxzZSxcbiAgICB9LFxuICAgIHBlcm1pc3Npb25zLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaXNXaXRoaW5Db2xsYXBzaWJsZSA9IHVzZUNvbGxhcHNpYmxlKCk7XG4gIGNvbnN0IGlzV2l0aGluR3JvdXAgPSB1c2VHcm91cCgpO1xuICBjb25zdCBpc1dpdGhpblJvdyA9IHVzZVJvdygpO1xuICBjb25zdCBpc1dpdGhpblRhYiA9IHVzZVRhYnMoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBzdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG4gIGNvbnN0IFtlcnJvckNvdW50LCBzZXRFcnJvckNvdW50XSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IGdyb3VwSGFzRXJyb3JzID0gc3VibWl0dGVkICYmIGVycm9yQ291bnQgPiAwO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgJ2ZpZWxkLXR5cGUnLFxuICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgIGlzV2l0aGluQ29sbGFwc2libGUgJiYgYCR7YmFzZUNsYXNzfS0td2l0aGluLWNvbGxhcHNpYmxlYCxcbiAgICAgICAgaXNXaXRoaW5Hcm91cCAmJiBgJHtiYXNlQ2xhc3N9LS13aXRoaW4tZ3JvdXBgLFxuICAgICAgICBpc1dpdGhpblJvdyAmJiBgJHtiYXNlQ2xhc3N9LS13aXRoaW4tcm93YCxcbiAgICAgICAgaXNXaXRoaW5UYWIgJiYgYCR7YmFzZUNsYXNzfS0td2l0aGluLXRhYmAsXG4gICAgICAgICghaGlkZUd1dHRlciAmJiBpc1dpdGhpbkdyb3VwKSAmJiBgJHtiYXNlQ2xhc3N9LS1ndXR0ZXJgLFxuICAgICAgICBncm91cEhhc0Vycm9ycyAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtZXJyb3JgLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxXYXRjaENoaWxkRXJyb3JzXG4gICAgICAgIHNldEVycm9yQ291bnQ9e3NldEVycm9yQ291bnR9XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZHN9XG4gICAgICAvPlxuICAgICAgPEdyb3VwUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICAgICAgeyhsYWJlbCB8fCBkZXNjcmlwdGlvbikgJiYgKFxuICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190aXRsZWB9PntnZXRUcmFuc2xhdGlvbihsYWJlbCwgaTE4bil9PC9oMz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWVsZC1kZXNjcmlwdGlvbi0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e251bGx9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2dyb3VwSGFzRXJyb3JzICYmIChcbiAgICAgICAgICAgICAgPEVycm9yUGlsbFxuICAgICAgICAgICAgICAgIGNvdW50PXtlcnJvckNvdW50fVxuICAgICAgICAgICAgICAgIHdpdGhNZXNzYWdlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9ucz8uZmllbGRzfVxuICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICAgICAgZmllbGRTY2hlbWE9e2ZpZWxkcy5tYXAoKHN1YkZpZWxkKSA9PiAoe1xuICAgICAgICAgICAgICAuLi5zdWJGaWVsZCxcbiAgICAgICAgICAgICAgcGF0aDogY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGgsIHN1YkZpZWxkKSxcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR3JvdXBQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oR3JvdXApO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkdyb3VwIiwicHJvcHMiLCJwZXJtaXNzaW9ucyIsImxhYmVsIiwiZmllbGRzIiwibmFtZSIsInBhdGgiLCJwYXRoRnJvbVByb3BzIiwiZmllbGRUeXBlcyIsImluZGV4UGF0aCIsImFkbWluIiwicmVhZE9ubHkiLCJzdHlsZSIsImNsYXNzTmFtZSIsIndpZHRoIiwiZGVzY3JpcHRpb24iLCJoaWRlR3V0dGVyIiwiaXNXaXRoaW5Db2xsYXBzaWJsZSIsInVzZUNvbGxhcHNpYmxlIiwiaXNXaXRoaW5Hcm91cCIsInVzZUdyb3VwIiwiaXNXaXRoaW5Sb3ciLCJ1c2VSb3ciLCJpc1dpdGhpblRhYiIsInVzZVRhYnMiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJzdWJtaXR0ZWQiLCJ1c2VGb3JtU3VibWl0dGVkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImVycm9yQ291bnQiLCJzZXRFcnJvckNvdW50IiwiZ3JvdXBIYXNFcnJvcnMiLCJkaXYiLCJpZCIsInJlcGxhY2UiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIldhdGNoQ2hpbGRFcnJvcnMiLCJmaWVsZFNjaGVtYSIsIkdyb3VwUHJvdmlkZXIiLCJoZWFkZXIiLCJoMyIsImdldFRyYW5zbGF0aW9uIiwiRmllbGREZXNjcmlwdGlvbiIsInZhbHVlIiwiRXJyb3JQaWxsIiwiY291bnQiLCJ3aXRoTWVzc2FnZSIsIlJlbmRlckZpZWxkcyIsIm1hcCIsInN1YkZpZWxkIiwiY3JlYXRlTmVzdGVkRmllbGRQYXRoIiwid2l0aENvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFnSEE7OztlQUFBOzs7NERBaEhrQjs0QkFDYTttRUFDTjtvRUFDQzt1RUFDRzt3QkFFRTt5QkFDUzt5QkFDakI7eUJBQ0M7OEJBQ087cUNBQ087dUJBQ0w7Z0NBQ0E7eUJBQ1A7UUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7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