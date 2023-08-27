function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useModal } from "@faceless-ui/modal";
import { useConfig } from "../../utilities/Config";
import { Drawer, DrawerToggler } from "../Drawer";
import { SelectAllStatus, useSelection } from "../../views/collections/List/SelectionProvider";
import { getTranslation } from "../../../../utilities/getTranslation";
import { useAuth } from "../../utilities/Auth";
import { FieldSelect } from "../FieldSelect";
import FormSubmit from "../../forms/Submit";
import Form from "../../forms/Form";
import { useForm } from "../../forms/Form/context";
import RenderFields from "../../forms/RenderFields";
import { OperationContext } from "../../utilities/OperationProvider";
import fieldTypes from "../../forms/field-types";
import X from "../../icons/X";
import "./index.scss";
var baseClass = "edit-many";
var Submit = function(param) {
    var action = param.action, disabled = param.disabled;
    var submit = useForm().submit;
    var t = useTranslation("general").t;
    var save = useCallback(function() {
        submit({
            skipValidation: true,
            method: "PATCH",
            action: action
        });
    }, [
        action,
        submit
    ]);
    return /*#__PURE__*/ React.createElement(FormSubmit, {
        className: "".concat(baseClass, "__save"),
        onClick: save,
        disabled: disabled
    }, t("save"));
};
var Publish = function(param) {
    var action = param.action, disabled = param.disabled;
    var submit = useForm().submit;
    var t = useTranslation("version").t;
    var save = useCallback(function() {
        submit({
            skipValidation: true,
            method: "PATCH",
            overrides: {
                _status: "published"
            },
            action: action
        });
    }, [
        action,
        submit
    ]);
    return /*#__PURE__*/ React.createElement(FormSubmit, {
        className: "".concat(baseClass, "__publish"),
        onClick: save,
        disabled: disabled
    }, t("publishChanges"));
};
var SaveDraft = function(param) {
    var action = param.action, disabled = param.disabled;
    var submit = useForm().submit;
    var t = useTranslation("version").t;
    var save = useCallback(function() {
        submit({
            skipValidation: true,
            method: "PATCH",
            overrides: {
                _status: "draft"
            },
            action: action
        });
    }, [
        action,
        submit
    ]);
    return /*#__PURE__*/ React.createElement(FormSubmit, {
        className: "".concat(baseClass, "__draft"),
        onClick: save,
        disabled: disabled
    }, t("saveDraft"));
};
var EditMany = function(props) {
    var _permissions_collections, _permissions, _collectionPermissions_update, _collectionPermissions;
    var resetParams = props.resetParams, collection = props.collection, tmp = props.collection, _ref = tmp === void 0 ? {} : tmp, slug = _ref.slug, plural = _ref.labels.plural, fields = _ref.fields;
    var permissions = useAuth().permissions;
    var closeModal = useModal().closeModal;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _useSelection = useSelection(), selectAll = _useSelection.selectAll, count = _useSelection.count, getQueryParams = _useSelection.getQueryParams;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array(useState([]), 2), selected = _useState[0], setSelected = _useState[1];
    var collectionPermissions = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : _permissions_collections[slug];
    var hasUpdatePermission = (_collectionPermissions = collectionPermissions) === null || _collectionPermissions === void 0 ? void 0 : (_collectionPermissions_update = _collectionPermissions.update) === null || _collectionPermissions_update === void 0 ? void 0 : _collectionPermissions_update.permission;
    var drawerSlug = "edit-".concat(slug);
    if (selectAll === SelectAllStatus.None || !hasUpdatePermission) {
        return null;
    }
    var onSuccess = function() {
        resetParams({
            page: selectAll === SelectAllStatus.AllAvailable ? 1 : undefined
        });
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(DrawerToggler, {
        slug: drawerSlug,
        className: "".concat(baseClass, "__toggle"),
        "aria-label": t("edit"),
        onClick: function() {
            setSelected([]);
        }
    }, t("edit")), /*#__PURE__*/ React.createElement(Drawer, {
        slug: drawerSlug,
        header: null
    }, /*#__PURE__*/ React.createElement(OperationContext.Provider, {
        value: "update"
    }, /*#__PURE__*/ React.createElement(Form, {
        className: "".concat(baseClass, "__form"),
        onSuccess: onSuccess
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__main")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__header")
    }, /*#__PURE__*/ React.createElement("h2", {
        className: "".concat(baseClass, "__header__title")
    }, t("editingLabel", {
        label: getTranslation(plural, i18n),
        count: count
    })), /*#__PURE__*/ React.createElement("button", {
        className: "".concat(baseClass, "__header__close"),
        id: "close-drawer__".concat(drawerSlug),
        type: "button",
        onClick: function() {
            return closeModal(drawerSlug);
        },
        "aria-label": t("close")
    }, /*#__PURE__*/ React.createElement(X, null))), /*#__PURE__*/ React.createElement(FieldSelect, {
        fields: fields,
        setSelected: setSelected
    }), /*#__PURE__*/ React.createElement(RenderFields, {
        fieldTypes: fieldTypes,
        fieldSchema: selected
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__sidebar-wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__sidebar")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__sidebar-sticky-wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__document-actions")
    }, /*#__PURE__*/ React.createElement(Submit, {
        action: "".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams()),
        disabled: selected.length === 0
    }), collection.versions && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Publish, {
        action: "".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams()),
        disabled: selected.length === 0
    }), /*#__PURE__*/ React.createElement(SaveDraft, {
        action: "".concat(serverURL).concat(api, "/").concat(slug).concat(getQueryParams()),
        disabled: selected.length === 0
    })))))))))));
};
export default EditMany;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0VkaXRNYW55L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZU1vZGFsIH0gZnJvbSAnQGZhY2VsZXNzLXVpL21vZGFsJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgRHJhd2VyLCBEcmF3ZXJUb2dnbGVyIH0gZnJvbSAnLi4vRHJhd2VyJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB7IEZpZWxkU2VsZWN0IH0gZnJvbSAnLi4vRmllbGRTZWxlY3QnO1xuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi4vLi4vZm9ybXMvU3VibWl0JztcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4uLy4uL2Zvcm1zL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgeyBPcGVyYXRpb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL09wZXJhdGlvblByb3ZpZGVyJztcbmltcG9ydCBmaWVsZFR5cGVzIGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzJztcbmltcG9ydCBYIGZyb20gJy4uLy4uL2ljb25zL1gnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdlZGl0LW1hbnknO1xuXG5jb25zdCBTdWJtaXQ6IFJlYWN0LkZDPHtkaXNhYmxlZDogYm9vbGVhbiwgYWN0aW9uOiBzdHJpbmd9PiA9ICh7IGFjdGlvbiwgZGlzYWJsZWQgfSkgPT4ge1xuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3Qgc2F2ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzdWJtaXQoe1xuICAgICAgc2tpcFZhbGlkYXRpb246IHRydWUsXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICBhY3Rpb24sXG4gICAgfSk7XG4gIH0sIFthY3Rpb24sIHN1Ym1pdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXRcbiAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2F2ZWB9XG4gICAgICBvbkNsaWNrPXtzYXZlfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgID5cbiAgICAgIHt0KCdzYXZlJyl9XG4gICAgPC9Gb3JtU3VibWl0PlxuICApO1xufTtcbmNvbnN0IFB1Ymxpc2g6IFJlYWN0LkZDPHtkaXNhYmxlZDogYm9vbGVhbiwgYWN0aW9uOiBzdHJpbmd9PiA9ICh7IGFjdGlvbiwgZGlzYWJsZWQgfSkgPT4ge1xuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJyk7XG5cbiAgY29uc3Qgc2F2ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzdWJtaXQoe1xuICAgICAgc2tpcFZhbGlkYXRpb246IHRydWUsXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgX3N0YXR1czogJ3B1Ymxpc2hlZCcsXG4gICAgICB9LFxuICAgICAgYWN0aW9uLFxuICAgIH0pO1xuICB9LCBbYWN0aW9uLCBzdWJtaXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtU3VibWl0XG4gICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3B1Ymxpc2hgfVxuICAgICAgb25DbGljaz17c2F2ZX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICA+XG4gICAgICB7dCgncHVibGlzaENoYW5nZXMnKX1cbiAgICA8L0Zvcm1TdWJtaXQ+XG4gICk7XG59O1xuY29uc3QgU2F2ZURyYWZ0OiBSZWFjdC5GQzx7ZGlzYWJsZWQ6IGJvb2xlYW4sIGFjdGlvbjogc3RyaW5nfT4gPSAoeyBhY3Rpb24sIGRpc2FibGVkIH0pID0+IHtcbiAgY29uc3QgeyBzdWJtaXQgfSA9IHVzZUZvcm0oKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuXG4gIGNvbnN0IHNhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc3VibWl0KHtcbiAgICAgIHNraXBWYWxpZGF0aW9uOiB0cnVlLFxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgIF9zdGF0dXM6ICdkcmFmdCcsXG4gICAgICB9LFxuICAgICAgYWN0aW9uLFxuICAgIH0pO1xuICB9LCBbYWN0aW9uLCBzdWJtaXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtU3VibWl0XG4gICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2RyYWZ0YH1cbiAgICAgIG9uQ2xpY2s9e3NhdmV9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgPlxuICAgICAge3QoJ3NhdmVEcmFmdCcpfVxuICAgIDwvRm9ybVN1Ym1pdD5cbiAgKTtcbn07XG5jb25zdCBFZGl0TWFueTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZXNldFBhcmFtcyxcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIHNsdWcsXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgcGx1cmFsLFxuICAgICAgfSxcbiAgICAgIGZpZWxkcyxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgc2VsZWN0QWxsLCBjb3VudCwgZ2V0UXVlcnlQYXJhbXMgfSA9IHVzZVNlbGVjdGlvbigpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb25QZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW3NsdWddO1xuICBjb25zdCBoYXNVcGRhdGVQZXJtaXNzaW9uID0gY29sbGVjdGlvblBlcm1pc3Npb25zPy51cGRhdGU/LnBlcm1pc3Npb247XG5cbiAgY29uc3QgZHJhd2VyU2x1ZyA9IGBlZGl0LSR7c2x1Z31gO1xuXG4gIGlmIChzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5Ob25lIHx8ICFoYXNVcGRhdGVQZXJtaXNzaW9uKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBvblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgcmVzZXRQYXJhbXMoeyBwYWdlOiBzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxBdmFpbGFibGUgPyAxIDogdW5kZWZpbmVkIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8RHJhd2VyVG9nZ2xlclxuICAgICAgICBzbHVnPXtkcmF3ZXJTbHVnfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZWB9XG4gICAgICAgIGFyaWEtbGFiZWw9e3QoJ2VkaXQnKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldFNlbGVjdGVkKFtdKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3QoJ2VkaXQnKX1cbiAgICAgIDwvRHJhd2VyVG9nZ2xlcj5cbiAgICAgIDxEcmF3ZXJcbiAgICAgICAgc2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgICAgaGVhZGVyPXtudWxsfVxuICAgICAgPlxuICAgICAgICA8T3BlcmF0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT1cInVwZGF0ZVwiPlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Zvcm1gfVxuICAgICAgICAgICAgb25TdWNjZXNzPXtvblN1Y2Nlc3N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX21haW5gfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcl9fdGl0bGVgfT5cbiAgICAgICAgICAgICAgICAgIHt0KCdlZGl0aW5nTGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWwsIGkxOG4pLCBjb3VudCB9KX1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyX19jbG9zZWB9XG4gICAgICAgICAgICAgICAgICBpZD17YGNsb3NlLWRyYXdlcl9fJHtkcmF3ZXJTbHVnfWB9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNsb3NlTW9kYWwoZHJhd2VyU2x1Zyl9XG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdjbG9zZScpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxYIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8RmllbGRTZWxlY3RcbiAgICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgICAgICAgIGZpZWxkU2NoZW1hPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpZGViYXItd3JhcGB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zaWRlYmFyYH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2lkZWJhci1zdGlja3ktd3JhcGB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZG9jdW1lbnQtYWN0aW9uc2B9PlxuICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17YCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9JHtnZXRRdWVyeVBhcmFtcygpfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VsZWN0ZWQubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgeyBjb2xsZWN0aW9uLnZlcnNpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFB1Ymxpc2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2Ake3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfSR7Z2V0UXVlcnlQYXJhbXMoKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZC5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTYXZlRHJhZnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2Ake3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfSR7Z2V0UXVlcnlQYXJhbXMoKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZC5sZW5ndGggPT09IDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L09wZXJhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L0RyYXdlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRNYW55O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwidXNlTW9kYWwiLCJ1c2VDb25maWciLCJEcmF3ZXIiLCJEcmF3ZXJUb2dnbGVyIiwiU2VsZWN0QWxsU3RhdHVzIiwidXNlU2VsZWN0aW9uIiwiZ2V0VHJhbnNsYXRpb24iLCJ1c2VBdXRoIiwiRmllbGRTZWxlY3QiLCJGb3JtU3VibWl0IiwiRm9ybSIsInVzZUZvcm0iLCJSZW5kZXJGaWVsZHMiLCJPcGVyYXRpb25Db250ZXh0IiwiZmllbGRUeXBlcyIsIlgiLCJiYXNlQ2xhc3MiLCJTdWJtaXQiLCJhY3Rpb24iLCJkaXNhYmxlZCIsInN1Ym1pdCIsInQiLCJzYXZlIiwic2tpcFZhbGlkYXRpb24iLCJtZXRob2QiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiUHVibGlzaCIsIm92ZXJyaWRlcyIsIl9zdGF0dXMiLCJTYXZlRHJhZnQiLCJFZGl0TWFueSIsInByb3BzIiwicGVybWlzc2lvbnMiLCJjb2xsZWN0aW9uUGVybWlzc2lvbnMiLCJyZXNldFBhcmFtcyIsImNvbGxlY3Rpb24iLCJzbHVnIiwibGFiZWxzIiwicGx1cmFsIiwiZmllbGRzIiwiY2xvc2VNb2RhbCIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInNlbGVjdEFsbCIsImNvdW50IiwiZ2V0UXVlcnlQYXJhbXMiLCJpMThuIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImNvbGxlY3Rpb25zIiwiaGFzVXBkYXRlUGVybWlzc2lvbiIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJkcmF3ZXJTbHVnIiwiTm9uZSIsIm9uU3VjY2VzcyIsInBhZ2UiLCJBbGxBdmFpbGFibGUiLCJ1bmRlZmluZWQiLCJkaXYiLCJhcmlhLWxhYmVsIiwiaGVhZGVyIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImgyIiwibGFiZWwiLCJidXR0b24iLCJpZCIsInR5cGUiLCJm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