function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../utilities/Config";
import Eyebrow from "../../../elements/Eyebrow";
import Form from "../../../forms/Form";
import PreviewButton from "../../../elements/PreviewButton";
import RenderFields from "../../../forms/RenderFields";
import CopyToClipboard from "../../../elements/CopyToClipboard";
import DuplicateDocument from "../../../elements/DuplicateDocument";
import DeleteDocument from "../../../elements/DeleteDocument";
import Meta from "../../../utilities/Meta";
import fieldTypes from "../../../forms/field-types";
import RenderTitle from "../../../elements/RenderTitle";
import LeaveWithoutSaving from "../../../modals/LeaveWithoutSaving";
import Auth from "./Auth";
import VersionsCount from "../../../elements/VersionsCount";
import Upload from "./Upload";
import Autosave from "../../../elements/Autosave";
import Status from "../../../elements/Status";
import { Publish } from "../../../elements/Publish";
import { SaveDraft } from "../../../elements/SaveDraft";
import { Save } from "../../../elements/Save";
import { useDocumentInfo } from "../../../utilities/DocumentInfo";
import { OperationContext } from "../../../utilities/OperationProvider";
import { Gutter } from "../../../elements/Gutter";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { SetStepNav } from "./SetStepNav";
import { FormLoadingOverlayToggle } from "../../../elements/Loading";
import { formatDate } from "../../../../utilities/formatDate";
import { useAuth } from "../../../utilities/Auth";
import "./index.scss";
var baseClass = "collection-edit";
var DefaultEditView = function(props) {
    var _data, _collection_versions, _collection_versions_drafts, _collection_versions1, _data1, _permissions_create, _permissions, _permissions_delete, _permissions1, _collection_versions2, _collection_versions_drafts1, _collection_versions3, _collection_versions4, _collection_versions_drafts2, _collection_versions5, _collection_admin_components_edit, _collection_admin_components, _collection_admin, _collection, _collection_versions6, _collection_admin_components_edit1, _collection_admin_components1, _collection_admin1, _collection1, _collection_admin_components_edit2, _collection_admin_components2, _collection_admin2, _collection2, _collection_admin_components_edit3, _collection_admin_components3, _collection_admin3, _collection3, _collection_versions7, _collection_versions_drafts3, _collection_versions8, _collection_admin_components_edit4, _collection_admin_components4, _collection_admin4, _collection4, _collection_versions9, _collection_versions10, _publishedDoc, _data2, _i18n, _publishedDoc1, _data3, _publishedDoc2, _data4, _i18n1;
    var _useConfig = useConfig(), dateFormat = _useConfig.admin.dateFormat, admin = _useConfig.routes.admin;
    var publishedDoc = useDocumentInfo().publishedDoc;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useAuth = useAuth(), user = _useAuth.user, refreshCookieAsync = _useAuth.refreshCookieAsync;
    var collection = props.collection, isEditing = props.isEditing, data = props.data, onSaveFromProps = props.onSave, permissions = props.permissions, isLoading = props.isLoading, internalState = props.internalState, apiURL = props.apiURL, action = props.action, hasSavePermission = props.hasSavePermission, disableEyebrow = props.disableEyebrow, disableActions = props.disableActions, disableLeaveWithoutSaving = props.disableLeaveWithoutSaving, customHeader = props.customHeader, id = props.id, updatedAt = props.updatedAt;
    var slug = collection.slug, fields = collection.fields, _collection_admin5 = collection.admin, useAsTitle = _collection_admin5.useAsTitle, disableDuplicate = _collection_admin5.disableDuplicate, preview = _collection_admin5.preview, hideAPIURL = _collection_admin5.hideAPIURL, versions = collection.versions, timestamps = collection.timestamps, auth = collection.auth, upload = collection.upload;
    var classes = [
        baseClass,
        isEditing && "".concat(baseClass, "--is-editing")
    ].filter(Boolean).join(" ");
    var onSave = useCallback(function() {
        var _ref = _async_to_generator(function(json) {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(auth && id === user.id)) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            refreshCookieAsync()
                        ];
                    case 1:
                        _state.sent();
                        _state.label = 2;
                    case 2:
                        if (typeof onSaveFromProps === "function") {
                            onSaveFromProps(_object_spread_props(_object_spread({}, json), {
                                operation: id ? "update" : "create"
                            }));
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return function(json) {
            return _ref.apply(this, arguments);
        };
    }(), [
        id,
        onSaveFromProps,
        auth,
        user,
        refreshCookieAsync
    ]);
    var operation = isEditing ? "update" : "create";
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, /*#__PURE__*/ React.createElement(OperationContext.Provider, {
        value: operation
    }, /*#__PURE__*/ React.createElement(Form, {
        className: "".concat(baseClass, "__form"),
        method: id ? "patch" : "post",
        action: action,
        onSuccess: onSave,
        disabled: !hasSavePermission,
        initialState: internalState
    }, /*#__PURE__*/ React.createElement(FormLoadingOverlayToggle, {
        formIsLoading: isLoading,
        action: isLoading ? "loading" : operation,
        name: "collection-edit--".concat(collection.labels.singular),
        loadingSuffix: getTranslation(collection.labels.singular, i18n),
        type: "withoutNav"
    }), !isLoading && /*#__PURE__*/ React.createElement(React.Fragment, null, !disableEyebrow && /*#__PURE__*/ React.createElement(SetStepNav, {
        collection: collection,
        isEditing: isEditing,
        id: (_data = data) === null || _data === void 0 ? void 0 : _data.id
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__main")
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: "".concat(isEditing ? t("editing") : t("creating"), " - ").concat(getTranslation(collection.labels.singular, i18n)),
        description: "".concat(isEditing ? t("editing") : t("creating"), " - ").concat(getTranslation(collection.labels.singular, i18n)),
        keywords: "".concat(getTranslation(collection.labels.singular, i18n), ", Payload, CMS")
    }), !disableEyebrow && /*#__PURE__*/ React.createElement(Eyebrow, null), !(((_collection_versions = collection.versions) === null || _collection_versions === void 0 ? void 0 : _collection_versions.drafts) && ((_collection_versions1 = collection.versions) === null || _collection_versions1 === void 0 ? void 0 : (_collection_versions_drafts = _collection_versions1.drafts) === null || _collection_versions_drafts === void 0 ? void 0 : _collection_versions_drafts.autosave)) && !disableLeaveWithoutSaving && /*#__PURE__*/ React.createElement(LeaveWithoutSaving, null), /*#__PURE__*/ React.createElement(Gutter, {
        className: "".concat(baseClass, "__edit")
    }, /*#__PURE__*/ React.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, customHeader && customHeader, !customHeader && /*#__PURE__*/ React.createElement("h1", null, /*#__PURE__*/ React.createElement(RenderTitle, {
        data: data,
        collection: collection,
        useAsTitle: useAsTitle,
        fallback: "[".concat(t("untitled"), "]")
    }))), auth && /*#__PURE__*/ React.createElement(Auth, {
        useAPIKey: auth.useAPIKey,
        requirePassword: !isEditing,
        verify: auth.verify,
        collection: collection,
        email: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.email,
        operation: operation,
        readOnly: !hasSavePermission
    }), upload && /*#__PURE__*/ React.createElement(Upload, {
        data: data,
        collection: collection,
        internalState: internalState
    }), /*#__PURE__*/ React.createElement(RenderFields, {
        readOnly: !hasSavePermission,
        permissions: permissions.fields,
        filter: function(field) {
            var _field_admin, _field, _field_admin1, _field1;
            return !((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.position) || ((_field1 = field) === null || _field1 === void 0 ? void 0 : (_field_admin1 = _field1.admin) === null || _field_admin1 === void 0 ? void 0 : _field_admin1.position) !== "sidebar";
        },
        fieldTypes: fieldTypes,
        fieldSchema: fields
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__sidebar-wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__sidebar")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__sidebar-sticky-wrap")
    }, !disableActions && /*#__PURE__*/ React.createElement("ul", {
        className: "".concat(baseClass, "__collection-actions")
    }, ((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_create = _permissions.create) === null || _permissions_create === void 0 ? void 0 : _permissions_create.permission) && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(Link, {
        id: "action-create",
        to: "".concat(admin, "/collections/").concat(slug, "/create")
    }, t("createNew"))), !disableDuplicate && isEditing && /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(DuplicateDocument, {
        collection: collection,
        id: id,
        slug: slug
    }))), ((_permissions1 = permissions) === null || _permissions1 === void 0 ? void 0 : (_permissions_delete = _permissions1.delete) === null || _permissions_delete === void 0 ? void 0 : _permissions_delete.permission) && /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement(DeleteDocument, {
        collection: collection,
        id: id,
        buttonId: "action-delete"
    }))), /*#__PURE__*/ React.createElement("div", {
        className: [
            "".concat(baseClass, "__document-actions"),
            (((_collection_versions2 = collection.versions) === null || _collection_versions2 === void 0 ? void 0 : _collection_versions2.drafts) && !((_collection_versions3 = collection.versions) === null || _collection_versions3 === void 0 ? void 0 : (_collection_versions_drafts1 = _collection_versions3.drafts) === null || _collection_versions_drafts1 === void 0 ? void 0 : _collection_versions_drafts1.autosave) || isEditing && preview) && "".concat(baseClass, "__document-actions--has-2")
        ].filter(Boolean).join(" ")
    }, isEditing && preview && (!((_collection_versions4 = collection.versions) === null || _collection_versions4 === void 0 ? void 0 : _collection_versions4.drafts) || ((_collection_versions5 = collection.versions) === null || _collection_versions5 === void 0 ? void 0 : (_collection_versions_drafts2 = _collection_versions5.drafts) === null || _collection_versions_drafts2 === void 0 ? void 0 : _collection_versions_drafts2.autosave)) && /*#__PURE__*/ React.createElement(PreviewButton, {
        generatePreviewURL: preview,
        CustomComponent: (_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : (_collection_admin_components = _collection_admin.components) === null || _collection_admin_components === void 0 ? void 0 : (_collection_admin_components_edit = _collection_admin_components.edit) === null || _collection_admin_components_edit === void 0 ? void 0 : _collection_admin_components_edit.PreviewButton
    }), hasSavePermission && /*#__PURE__*/ React.createElement(React.Fragment, null, ((_collection_versions6 = collection.versions) === null || _collection_versions6 === void 0 ? void 0 : _collection_versions6.drafts) ? /*#__PURE__*/ React.createElement(React.Fragment, null, !collection.versions.drafts.autosave && /*#__PURE__*/ React.createElement(SaveDraft, {
        CustomComponent: (_collection1 = collection) === null || _collection1 === void 0 ? void 0 : (_collection_admin1 = _collection1.admin) === null || _collection_admin1 === void 0 ? void 0 : (_collection_admin_components1 = _collection_admin1.components) === null || _collection_admin_components1 === void 0 ? void 0 : (_collection_admin_components_edit1 = _collection_admin_components1.edit) === null || _collection_admin_components_edit1 === void 0 ? void 0 : _collection_admin_components_edit1.SaveDraftButton
    }), /*#__PURE__*/ React.createElement(Publish, {
        CustomComponent: (_collection2 = collection) === null || _collection2 === void 0 ? void 0 : (_collection_admin2 = _collection2.admin) === null || _collection_admin2 === void 0 ? void 0 : (_collection_admin_components2 = _collection_admin2.components) === null || _collection_admin_components2 === void 0 ? void 0 : (_collection_admin_components_edit2 = _collection_admin_components2.edit) === null || _collection_admin_components_edit2 === void 0 ? void 0 : _collection_admin_components_edit2.PublishButton
    })) : /*#__PURE__*/ React.createElement(Save, {
        CustomComponent: (_collection3 = collection) === null || _collection3 === void 0 ? void 0 : (_collection_admin3 = _collection3.admin) === null || _collection_admin3 === void 0 ? void 0 : (_collection_admin_components3 = _collection_admin3.components) === null || _collection_admin_components3 === void 0 ? void 0 : (_collection_admin_components_edit3 = _collection_admin_components3.edit) === null || _collection_admin_components_edit3 === void 0 ? void 0 : _collection_admin_components_edit3.SaveButton
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__sidebar-fields")
    }, isEditing && preview && ((_collection_versions7 = collection.versions) === null || _collection_versions7 === void 0 ? void 0 : _collection_versions7.drafts) && !((_collection_versions8 = collection.versions) === null || _collection_versions8 === void 0 ? void 0 : (_collection_versions_drafts3 = _collection_versions8.drafts) === null || _collection_versions_drafts3 === void 0 ? void 0 : _collection_versions_drafts3.autosave) && /*#__PURE__*/ React.createElement(PreviewButton, {
        generatePreviewURL: preview,
        CustomComponent: (_collection4 = collection) === null || _collection4 === void 0 ? void 0 : (_collection_admin4 = _collection4.admin) === null || _collection_admin4 === void 0 ? void 0 : (_collection_admin_components4 = _collection_admin4.components) === null || _collection_admin_components4 === void 0 ? void 0 : (_collection_admin_components_edit4 = _collection_admin_components4.edit) === null || _collection_admin_components_edit4 === void 0 ? void 0 : _collection_admin_components_edit4.PreviewButton
    }), ((_collection_versions9 = collection.versions) === null || _collection_versions9 === void 0 ? void 0 : _collection_versions9.drafts) && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Status, null), ((_collection_versions10 = collection.versions) === null || _collection_versions10 === void 0 ? void 0 : _collection_versions10.drafts.autosave) && hasSavePermission && /*#__PURE__*/ React.createElement(Autosave, {
        publishedDocUpdatedAt: ((_publishedDoc = publishedDoc) === null || _publishedDoc === void 0 ? void 0 : _publishedDoc.updatedAt) || ((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.createdAt),
        collection: collection,
        id: id
    })), /*#__PURE__*/ React.createElement(RenderFields, {
        readOnly: !hasSavePermission,
        permissions: permissions.fields,
        filter: function(field) {
            var _field_admin, _field;
            return ((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.position) === "sidebar";
        },
        fieldTypes: fieldTypes,
        fieldSchema: fields
    })), isEditing && /*#__PURE__*/ React.createElement("ul", {
        className: "".concat(baseClass, "__meta")
    }, !hideAPIURL && /*#__PURE__*/ React.createElement("li", {
        className: "".concat(baseClass, "__api-url")
    }, /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__label")
    }, "API URL", " ", /*#__PURE__*/ React.createElement(CopyToClipboard, {
        value: apiURL
    })), /*#__PURE__*/ React.createElement("a", {
        href: apiURL,
        target: "_blank",
        rel: "noopener noreferrer"
    }, apiURL)), versions && /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("version:versions")), /*#__PURE__*/ React.createElement(VersionsCount, {
        collection: collection,
        id: id
    })), timestamps && /*#__PURE__*/ React.createElement(React.Fragment, null, updatedAt && /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("lastModified")), /*#__PURE__*/ React.createElement("div", null, formatDate(data.updatedAt, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language))), (((_publishedDoc1 = publishedDoc) === null || _publishedDoc1 === void 0 ? void 0 : _publishedDoc1.createdAt) || ((_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.createdAt)) && /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("created")), /*#__PURE__*/ React.createElement("div", null, formatDate(((_publishedDoc2 = publishedDoc) === null || _publishedDoc2 === void 0 ? void 0 : _publishedDoc2.createdAt) || ((_data4 = data) === null || _data4 === void 0 ? void 0 : _data4.createdAt), dateFormat, (_i18n1 = i18n) === null || _i18n1 === void 0 ? void 0 : _i18n1.language)))))))))))));
};
export default DefaultEditView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvRGVmYXVsdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi8uLi9mb3Jtcy9Gb3JtJztcbmltcG9ydCBQcmV2aWV3QnV0dG9uIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1ByZXZpZXdCdXR0b24nO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi8uLi9mb3Jtcy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db3B5VG9DbGlwYm9hcmQnO1xuaW1wb3J0IER1cGxpY2F0ZURvY3VtZW50IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0R1cGxpY2F0ZURvY3VtZW50JztcbmltcG9ydCBEZWxldGVEb2N1bWVudCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EZWxldGVEb2N1bWVudCc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgZmllbGRUeXBlcyBmcm9tICcuLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcyc7XG5pbXBvcnQgUmVuZGVyVGl0bGUgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUmVuZGVyVGl0bGUnO1xuaW1wb3J0IExlYXZlV2l0aG91dFNhdmluZyBmcm9tICcuLi8uLi8uLi9tb2RhbHMvTGVhdmVXaXRob3V0U2F2aW5nJztcbmltcG9ydCBBdXRoIGZyb20gJy4vQXV0aCc7XG5pbXBvcnQgVmVyc2lvbnNDb3VudCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9WZXJzaW9uc0NvdW50JztcbmltcG9ydCBVcGxvYWQgZnJvbSAnLi9VcGxvYWQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBBdXRvc2F2ZSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9BdXRvc2F2ZSc7XG5pbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1N0YXR1cyc7XG5pbXBvcnQgeyBQdWJsaXNoIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUHVibGlzaCc7XG5pbXBvcnQgeyBTYXZlRHJhZnQgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9TYXZlRHJhZnQnO1xuaW1wb3J0IHsgU2F2ZSB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1NhdmUnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgeyBPcGVyYXRpb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL09wZXJhdGlvblByb3ZpZGVyJztcbmltcG9ydCB7IEd1dHRlciB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0d1dHRlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBTZXRTdGVwTmF2IH0gZnJvbSAnLi9TZXRTdGVwTmF2JztcbmltcG9ydCB7IEZvcm1Mb2FkaW5nT3ZlcmxheVRvZ2dsZSB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbGxlY3Rpb24tZWRpdCc7XG5cbmNvbnN0IERlZmF1bHRFZGl0VmlldzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWRtaW46IHsgZGF0ZUZvcm1hdCB9LCByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcHVibGlzaGVkRG9jIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7IHVzZXIsIHJlZnJlc2hDb29raWVBc3luYyB9ID0gdXNlQXV0aCgpO1xuXG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIGlzRWRpdGluZyxcbiAgICBkYXRhLFxuICAgIG9uU2F2ZTogb25TYXZlRnJvbVByb3BzLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIGlzTG9hZGluZyxcbiAgICBpbnRlcm5hbFN0YXRlLFxuICAgIGFwaVVSTCxcbiAgICBhY3Rpb24sXG4gICAgaGFzU2F2ZVBlcm1pc3Npb24sXG4gICAgZGlzYWJsZUV5ZWJyb3csXG4gICAgZGlzYWJsZUFjdGlvbnMsXG4gICAgZGlzYWJsZUxlYXZlV2l0aG91dFNhdmluZyxcbiAgICBjdXN0b21IZWFkZXIsXG4gICAgaWQsXG4gICAgdXBkYXRlZEF0LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIHNsdWcsXG4gICAgZmllbGRzLFxuICAgIGFkbWluOiB7XG4gICAgICB1c2VBc1RpdGxlLFxuICAgICAgZGlzYWJsZUR1cGxpY2F0ZSxcbiAgICAgIHByZXZpZXcsXG4gICAgICBoaWRlQVBJVVJMLFxuICAgIH0sXG4gICAgdmVyc2lvbnMsXG4gICAgdGltZXN0YW1wcyxcbiAgICBhdXRoLFxuICAgIHVwbG9hZCxcbiAgfSA9IGNvbGxlY3Rpb247XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgaXNFZGl0aW5nICYmIGAke2Jhc2VDbGFzc30tLWlzLWVkaXRpbmdgLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgY29uc3Qgb25TYXZlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGpzb24pID0+IHtcbiAgICBpZiAoYXV0aCAmJiBpZCA9PT0gdXNlci5pZCkge1xuICAgICAgYXdhaXQgcmVmcmVzaENvb2tpZUFzeW5jKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvblNhdmVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uU2F2ZUZyb21Qcm9wcyh7XG4gICAgICAgIC4uLmpzb24sXG4gICAgICAgIG9wZXJhdGlvbjogaWQgPyAndXBkYXRlJyA6ICdjcmVhdGUnLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbaWQsIG9uU2F2ZUZyb21Qcm9wcywgYXV0aCwgdXNlciwgcmVmcmVzaENvb2tpZUFzeW5jXSk7XG5cbiAgY29uc3Qgb3BlcmF0aW9uID0gaXNFZGl0aW5nID8gJ3VwZGF0ZScgOiAnY3JlYXRlJztcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgPE9wZXJhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e29wZXJhdGlvbn0+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZm9ybWB9XG4gICAgICAgICAgICBtZXRob2Q9e2lkID8gJ3BhdGNoJyA6ICdwb3N0J31cbiAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgICAgb25TdWNjZXNzPXtvblNhdmV9XG4gICAgICAgICAgICBkaXNhYmxlZD17IWhhc1NhdmVQZXJtaXNzaW9ufVxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlPXtpbnRlcm5hbFN0YXRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtTG9hZGluZ092ZXJsYXlUb2dnbGVcbiAgICAgICAgICAgICAgZm9ybUlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICBhY3Rpb249e2lzTG9hZGluZyA/ICdsb2FkaW5nJyA6IG9wZXJhdGlvbn1cbiAgICAgICAgICAgICAgbmFtZT17YGNvbGxlY3Rpb24tZWRpdC0tJHtjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhcn1gfVxuICAgICAgICAgICAgICBsb2FkaW5nU3VmZml4PXtnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bil9XG4gICAgICAgICAgICAgIHR5cGU9XCJ3aXRob3V0TmF2XCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHshZGlzYWJsZUV5ZWJyb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgPFNldFN0ZXBOYXZcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhPy5pZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tYWluYH0+XG4gICAgICAgICAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17YCR7aXNFZGl0aW5nID8gdCgnZWRpdGluZycpIDogdCgnY3JlYXRpbmcnKX0gLSAke2dldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKX1gfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YCR7aXNFZGl0aW5nID8gdCgnZWRpdGluZycpIDogdCgnY3JlYXRpbmcnKX0gLSAke2dldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKX1gfVxuICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcz17YCR7Z2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbi5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pfSwgUGF5bG9hZCwgQ01TYH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7IWRpc2FibGVFeWVicm93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIHsoIShjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMgJiYgY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkgJiYgIWRpc2FibGVMZWF2ZVdpdGhvdXRTYXZpbmcpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPExlYXZlV2l0aG91dFNhdmluZyAvPlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgPEd1dHRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2VkaXRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21IZWFkZXIgJiYgY3VzdG9tSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgIHshY3VzdG9tSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbmRlclRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUFzVGl0bGU9e3VzZUFzVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9e2BbJHt0KCd1bnRpdGxlZCcpfV1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICB7YXV0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEF1dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUFQSUtleT17YXV0aC51c2VBUElLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlUGFzc3dvcmQ9eyFpc0VkaXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZnk9e2F1dGgudmVyaWZ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPXtkYXRhPy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj17b3BlcmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyFoYXNTYXZlUGVybWlzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHt1cGxvYWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxTdGF0ZT17aW50ZXJuYWxTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17IWhhc1NhdmVQZXJtaXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9ucy5maWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXsoZmllbGQpID0+ICghZmllbGQ/LmFkbWluPy5wb3NpdGlvbiB8fCAoZmllbGQ/LmFkbWluPy5wb3NpdGlvbiAhPT0gJ3NpZGViYXInKSl9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9HdXR0ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpZGViYXItd3JhcGB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpZGViYXJgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpZGViYXItc3RpY2t5LXdyYXBgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IWRpc2FibGVBY3Rpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbGxlY3Rpb24tYWN0aW9uc2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBlcm1pc3Npb25zPy5jcmVhdGU/LnBlcm1pc3Npb24pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY3Rpb24tY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7c2x1Z30vY3JlYXRlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjcmVhdGVOZXcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlRHVwbGljYXRlICYmIGlzRWRpdGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHVwbGljYXRlRG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5kZWxldGU/LnBlcm1pc3Npb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVEb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbklkPVwiYWN0aW9uLWRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fZG9jdW1lbnQtYWN0aW9uc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzICYmICFjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHM/LmF1dG9zYXZlKSB8fCAoaXNFZGl0aW5nICYmIHByZXZpZXcpKSAmJiBgJHtiYXNlQ2xhc3N9X19kb2N1bWVudC1hY3Rpb25zLS1oYXMtMmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpc0VkaXRpbmcgJiYgcHJldmlldyAmJiAoIWNvbGxlY3Rpb24udmVyc2lvbnM/LmRyYWZ0cyB8fCBjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHM/LmF1dG9zYXZlKSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJldmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJldmlld1VSTD17cHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21Db21wb25lbnQ9e2NvbGxlY3Rpb24/LmFkbWluPy5jb21wb25lbnRzPy5lZGl0Py5QcmV2aWV3QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc1NhdmVQZXJtaXNzaW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshY29sbGVjdGlvbi52ZXJzaW9ucy5kcmFmdHMuYXV0b3NhdmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTYXZlRHJhZnQgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8uZWRpdD8uU2F2ZURyYWZ0QnV0dG9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQdWJsaXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8uZWRpdD8uUHVibGlzaEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTYXZlIEN1c3RvbUNvbXBvbmVudD17Y29sbGVjdGlvbj8uYWRtaW4/LmNvbXBvbmVudHM/LmVkaXQ/LlNhdmVCdXR0b259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2lkZWJhci1maWVsZHNgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaXNFZGl0aW5nICYmIHByZXZpZXcgJiYgKGNvbGxlY3Rpb24udmVyc2lvbnM/LmRyYWZ0cyAmJiAhY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVByZXZpZXdVUkw9e3ByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8uZWRpdD8uUHJldmlld0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXR1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzLmF1dG9zYXZlICYmIGhhc1NhdmVQZXJtaXNzaW9uKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b3NhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaGVkRG9jVXBkYXRlZEF0PXtwdWJsaXNoZWREb2M/LnVwZGF0ZWRBdCB8fCBkYXRhPy5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyFoYXNTYXZlUGVybWlzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e3Blcm1pc3Npb25zLmZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXsoZmllbGQpID0+IGZpZWxkPy5hZG1pbj8ucG9zaXRpb24gPT09ICdzaWRlYmFyJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTY2hlbWE9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tZXRhYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFoaWRlQVBJVVJMICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FwaS11cmxgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFQSSBVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdmFsdWU9e2FwaVVSTH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2FwaVVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwaVVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlcnNpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ3ZlcnNpb246dmVyc2lvbnMnKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcnNpb25zQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lc3RhbXBzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRBdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ2xhc3RNb2RpZmllZCcpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0RGF0ZShkYXRhLnVwZGF0ZWRBdCwgZGF0ZUZvcm1hdCwgaTE4bj8ubGFuZ3VhZ2UpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHVibGlzaGVkRG9jPy5jcmVhdGVkQXQgfHwgZGF0YT8uY3JlYXRlZEF0KSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ2NyZWF0ZWQnKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdERhdGUocHVibGlzaGVkRG9jPy5jcmVhdGVkQXQgfHwgZGF0YT8uY3JlYXRlZEF0LCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9PcGVyYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRFZGl0VmlldztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwiTGluayIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwiRXllYnJvdyIsIkZvcm0iLCJQcmV2aWV3QnV0dG9uIiwiUmVuZGVyRmllbGRzIiwiQ29weVRvQ2xpcGJvYXJkIiwiRHVwbGljYXRlRG9jdW1lbnQiLCJEZWxldGVEb2N1bWVudCIsIk1ldGEiLCJmaWVsZFR5cGVzIiwiUmVuZGVyVGl0bGUiLCJMZWF2ZVdpdGhvdXRTYXZpbmciLCJBdXRoIiwiVmVyc2lvbnNDb3VudCIsIlVwbG9hZCIsIkF1dG9zYXZlIiwiU3RhdHVzIiwiUHVibGlzaCIsIlNhdmVEcmFmdCIsIlNhdmUiLCJ1c2VEb2N1bWVudEluZm8iLCJPcGVyYXRpb25Db250ZXh0IiwiR3V0dGVyIiwiZ2V0VHJhbnNsYXRpb24iLCJTZXRTdGVwTmF2IiwiRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlIiwiZm9ybWF0RGF0ZSIsInVzZUF1dGgiLCJiYXNlQ2xhc3MiLCJEZWZhdWx0RWRpdFZpZXciLCJwcm9wcyIsImRhdGEiLCJjb2xsZWN0aW9uIiwicGVybWlzc2lvbnMiLCJwdWJsaXNoZWREb2MiLCJpMThuIiwiYWRtaW4iLCJkYXRlRm9ybWF0Iiwicm91dGVzIiwidCIsInVzZXIiLCJyZWZyZXNoQ29va2llQXN5bmMiLCJpc0VkaXRpbmciLCJvblNhdmUiLCJvblNhdmVGcm9tUHJvcHMiLCJpc0xvYWRpbmciLCJpbnRlcm5hbFN0YXRlIiwiYXBpVVJMIiwiYWN0aW9uIiwiaGFzU2F2ZVBlcm1pc3Npb24iLCJkaXNhYmxlRXllYnJvdyIsImRpc2FibGVBY3Rpb25zIiwiZGlzYWJsZUxlYXZlV2l0aG91dFNhdmluZyIsImN1c3RvbUhlYWRlciIsImlkIiwidXBkYXRlZEF0Iiwic2x1ZyIsImZpZWxkcyIsInVzZUFzVGl0bGUiLCJkaXNhYmxlRHVwbGljYXRlIiwicHJldmlldyIsImhpZGVBUElVUkwiLCJ2ZXJzaW9ucyIsInRpbWVzdGFtcHMiLCJhdXRoIiwidXBsb2FkIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwianNvbiIsIm9wZXJhdGlvbiIsIkZyYWdtZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm1ldGhvZCIsIm9uU3VjY2VzcyIsImRpc2FibGVkIiwiaW5pdGlhbFN0YXRlIiwiZm9ybUlzTG9hZGluZyIsIm5hbWUiLCJsYWJlbHMiLCJzaW5ndWxhciIsImxvYWRpbmdTdWZmaXgiLCJ0eXBlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiZHJhZnRzIiwiYXV0b3NhdmUiLCJoZWFkZXIiLCJoMSIsImZhbGxiYWNrIiwidXNlQVBJS2V5IiwicmVxdWlyZVBhc3N3b3JkIiwidmVyaWZ5IiwiZW1haWwiLCJyZWFkT25seSIsImZpZWxkIiwicG9zaXRpb24iLCJmaWVsZFNjaGVtYSIsInVsIiwiY3JlYXRlIiwicGVybWlzc2lvbiIsImxpIiwidG8iLCJkZWxldGUiLCJidXR0b25JZCIsImdlbmVyYXRlUHJldmlld1VSTCIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJlZGl0IiwiU2F2ZURyYWZ0QnV0dG9uIiwiUHVibGlzaEJ1dHRvbiIsIlNhdmVCdXR0b24iLCJwdWJsaXNoZWREb2NVcGRhdGVkQXQiLCJjcmVhdGVkQXQiLCJzcGFuIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJsYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFX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