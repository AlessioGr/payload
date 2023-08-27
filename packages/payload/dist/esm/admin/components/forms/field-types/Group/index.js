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
import React from "react";
import { useTranslation } from "react-i18next";
import RenderFields from "../../RenderFields";
import withCondition from "../../withCondition";
import FieldDescription from "../../FieldDescription";
import { useCollapsible } from "../../../elements/Collapsible/provider";
import { GroupProvider, useGroup } from "./provider";
import { useRow } from "../Row/provider";
import { useTabs } from "../Tabs/provider";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { createNestedFieldPath } from "../../Form/createNestedFieldPath";
import { useFormSubmitted } from "../../Form/context";
import { WatchChildErrors } from "../../WatchChildErrors";
import { ErrorPill } from "../../../elements/ErrorPill";
import "./index.scss";
var baseClass = "group-field";
var Group = function(props) {
    var _permissions;
    var label = props.label, fields = props.fields, name = props.name, pathFromProps = props.path, fieldTypes = props.fieldTypes, indexPath = props.indexPath, _props_admin = props.admin, readOnly = _props_admin.readOnly, style = _props_admin.style, className = _props_admin.className, width = _props_admin.width, description = _props_admin.description, _props_admin_hideGutter = _props_admin.hideGutter, hideGutter = _props_admin_hideGutter === void 0 ? false : _props_admin_hideGutter, permissions = props.permissions;
    var isWithinCollapsible = useCollapsible();
    var isWithinGroup = useGroup();
    var isWithinRow = useRow();
    var isWithinTab = useTabs();
    var i18n = useTranslation().i18n;
    var submitted = useFormSubmitted();
    var _React_useState = _sliced_to_array(React.useState(undefined), 2), errorCount = _React_useState[0], setErrorCount = _React_useState[1];
    var groupHasErrors = submitted && errorCount > 0;
    var path = pathFromProps || name;
    return /*#__PURE__*/ React.createElement("div", {
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
    }, /*#__PURE__*/ React.createElement(WatchChildErrors, {
        setErrorCount: setErrorCount,
        path: path,
        fieldSchema: fields
    }), /*#__PURE__*/ React.createElement(GroupProvider, null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__header")
    }, (label || description) && /*#__PURE__*/ React.createElement("header", null, label && /*#__PURE__*/ React.createElement("h3", {
        className: "".concat(baseClass, "__title")
    }, getTranslation(label, i18n)), /*#__PURE__*/ React.createElement(FieldDescription, {
        className: "field-description-".concat(path.replace(/\./gi, "__")),
        value: null,
        description: description
    })), groupHasErrors && /*#__PURE__*/ React.createElement(ErrorPill, {
        count: errorCount,
        withMessage: true
    })), /*#__PURE__*/ React.createElement(RenderFields, {
        permissions: (_permissions = permissions) === null || _permissions === void 0 ? void 0 : _permissions.fields,
        readOnly: readOnly,
        fieldTypes: fieldTypes,
        indexPath: indexPath,
        fieldSchema: fields.map(function(subField) {
            return _object_spread_props(_object_spread({}, subField), {
                path: createNestedFieldPath(path, subField)
            });
        })
    }))));
};
export default withCondition(Group);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0dyb3VwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBSZW5kZXJGaWVsZHMgZnJvbSAnLi4vLi4vUmVuZGVyRmllbGRzJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlQ29sbGFwc2libGUgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2xsYXBzaWJsZS9wcm92aWRlcic7XG5pbXBvcnQgeyBHcm91cFByb3ZpZGVyLCB1c2VHcm91cCB9IGZyb20gJy4vcHJvdmlkZXInO1xuaW1wb3J0IHsgdXNlUm93IH0gZnJvbSAnLi4vUm93L3Byb3ZpZGVyJztcbmltcG9ydCB7IHVzZVRhYnMgfSBmcm9tICcuLi9UYWJzL3Byb3ZpZGVyJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCB9IGZyb20gJy4uLy4uL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoJztcbmltcG9ydCB7IHVzZUZvcm1TdWJtaXR0ZWQgfSBmcm9tICcuLi8uLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgV2F0Y2hDaGlsZEVycm9ycyB9IGZyb20gJy4uLy4uL1dhdGNoQ2hpbGRFcnJvcnMnO1xuaW1wb3J0IHsgRXJyb3JQaWxsIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRXJyb3JQaWxsJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZ3JvdXAtZmllbGQnO1xuXG5jb25zdCBHcm91cDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbCxcbiAgICBmaWVsZHMsXG4gICAgbmFtZSxcbiAgICBwYXRoOiBwYXRoRnJvbVByb3BzLFxuICAgIGZpZWxkVHlwZXMsXG4gICAgaW5kZXhQYXRoLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgd2lkdGgsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGhpZGVHdXR0ZXIgPSBmYWxzZSxcbiAgICB9LFxuICAgIHBlcm1pc3Npb25zLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaXNXaXRoaW5Db2xsYXBzaWJsZSA9IHVzZUNvbGxhcHNpYmxlKCk7XG4gIGNvbnN0IGlzV2l0aGluR3JvdXAgPSB1c2VHcm91cCgpO1xuICBjb25zdCBpc1dpdGhpblJvdyA9IHVzZVJvdygpO1xuICBjb25zdCBpc1dpdGhpblRhYiA9IHVzZVRhYnMoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBzdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG4gIGNvbnN0IFtlcnJvckNvdW50LCBzZXRFcnJvckNvdW50XSA9IFJlYWN0LnVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IGdyb3VwSGFzRXJyb3JzID0gc3VibWl0dGVkICYmIGVycm9yQ291bnQgPiAwO1xuXG4gIGNvbnN0IHBhdGggPSBwYXRoRnJvbVByb3BzIHx8IG5hbWU7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD17YGZpZWxkLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgJ2ZpZWxkLXR5cGUnLFxuICAgICAgICBiYXNlQ2xhc3MsXG4gICAgICAgIGlzV2l0aGluQ29sbGFwc2libGUgJiYgYCR7YmFzZUNsYXNzfS0td2l0aGluLWNvbGxhcHNpYmxlYCxcbiAgICAgICAgaXNXaXRoaW5Hcm91cCAmJiBgJHtiYXNlQ2xhc3N9LS13aXRoaW4tZ3JvdXBgLFxuICAgICAgICBpc1dpdGhpblJvdyAmJiBgJHtiYXNlQ2xhc3N9LS13aXRoaW4tcm93YCxcbiAgICAgICAgaXNXaXRoaW5UYWIgJiYgYCR7YmFzZUNsYXNzfS0td2l0aGluLXRhYmAsXG4gICAgICAgICghaGlkZUd1dHRlciAmJiBpc1dpdGhpbkdyb3VwKSAmJiBgJHtiYXNlQ2xhc3N9LS1ndXR0ZXJgLFxuICAgICAgICBncm91cEhhc0Vycm9ycyAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtZXJyb3JgLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxXYXRjaENoaWxkRXJyb3JzXG4gICAgICAgIHNldEVycm9yQ291bnQ9e3NldEVycm9yQ291bnR9XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZHN9XG4gICAgICAvPlxuICAgICAgPEdyb3VwUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICAgICAgeyhsYWJlbCB8fCBkZXNjcmlwdGlvbikgJiYgKFxuICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190aXRsZWB9PntnZXRUcmFuc2xhdGlvbihsYWJlbCwgaTE4bil9PC9oMz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWVsZC1kZXNjcmlwdGlvbi0ke3BhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e251bGx9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2dyb3VwSGFzRXJyb3JzICYmIChcbiAgICAgICAgICAgICAgPEVycm9yUGlsbFxuICAgICAgICAgICAgICAgIGNvdW50PXtlcnJvckNvdW50fVxuICAgICAgICAgICAgICAgIHdpdGhNZXNzYWdlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9ucz8uZmllbGRzfVxuICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICAgICAgZmllbGRTY2hlbWE9e2ZpZWxkcy5tYXAoKHN1YkZpZWxkKSA9PiAoe1xuICAgICAgICAgICAgICAuLi5zdWJGaWVsZCxcbiAgICAgICAgICAgICAgcGF0aDogY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGgsIHN1YkZpZWxkKSxcbiAgICAgICAgICAgIH0pKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvR3JvdXBQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhDb25kaXRpb24oR3JvdXApO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJSZW5kZXJGaWVsZHMiLCJ3aXRoQ29uZGl0aW9uIiwiRmllbGREZXNjcmlwdGlvbiIsInVzZUNvbGxhcHNpYmxlIiwiR3JvdXBQcm92aWRlciIsInVzZUdyb3VwIiwidXNlUm93IiwidXNlVGFicyIsImdldFRyYW5zbGF0aW9uIiwiY3JlYXRlTmVzdGVkRmllbGRQYXRoIiwidXNlRm9ybVN1Ym1pdHRlZCIsIldhdGNoQ2hpbGRFcnJvcnMiLCJFcnJvclBpbGwiLCJiYXNlQ2xhc3MiLCJHcm91cCIsInByb3BzIiwicGVybWlzc2lvbnMiLCJsYWJlbCIsImZpZWxkcyIsIm5hbWUiLCJwYXRoIiwicGF0aEZyb21Qcm9wcyIsImZpZWxkVHlwZXMiLCJpbmRleFBhdGgiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiaGlkZUd1dHRlciIsImlzV2l0aGluQ29sbGFwc2libGUiLCJpc1dpdGhpbkdyb3VwIiwiaXNXaXRoaW5Sb3ciLCJpc1dpdGhpblRhYiIsImkxOG4iLCJzdWJtaXR0ZWQiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImVycm9yQ291bnQiLCJzZXRFcnJvckNvdW50IiwiZ3JvdXBIYXNFcnJvcnMiLCJkaXYiLCJpZCIsInJlcGxhY2UiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImZpZWxkU2NoZW1hIiwiaGVhZGVyIiwiaDMiLCJ2YWx1ZSIsImNvdW50Iiwid2l0aE1lc3NhZ2UiLCJtYXAiLCJzdWJGaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FB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