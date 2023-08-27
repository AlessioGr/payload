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
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _Config = require("../../../utilities/Config");
var _Eyebrow = /*#__PURE__*/ _interop_require_default(require("../../../elements/Eyebrow"));
var _Form = /*#__PURE__*/ _interop_require_default(require("../../../forms/Form"));
var _PreviewButton = /*#__PURE__*/ _interop_require_default(require("../../../elements/PreviewButton"));
var _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../../forms/RenderFields"));
var _CopyToClipboard = /*#__PURE__*/ _interop_require_default(require("../../../elements/CopyToClipboard"));
var _DuplicateDocument = /*#__PURE__*/ _interop_require_default(require("../../../elements/DuplicateDocument"));
var _DeleteDocument = /*#__PURE__*/ _interop_require_default(require("../../../elements/DeleteDocument"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../../utilities/Meta"));
var _fieldtypes = /*#__PURE__*/ _interop_require_default(require("../../../forms/field-types"));
var _RenderTitle = /*#__PURE__*/ _interop_require_default(require("../../../elements/RenderTitle"));
var _LeaveWithoutSaving = /*#__PURE__*/ _interop_require_default(require("../../../modals/LeaveWithoutSaving"));
var _Auth = /*#__PURE__*/ _interop_require_default(require("./Auth"));
var _VersionsCount = /*#__PURE__*/ _interop_require_default(require("../../../elements/VersionsCount"));
var _Upload = /*#__PURE__*/ _interop_require_default(require("./Upload"));
var _Autosave = /*#__PURE__*/ _interop_require_default(require("../../../elements/Autosave"));
var _Status = /*#__PURE__*/ _interop_require_default(require("../../../elements/Status"));
var _Publish = require("../../../elements/Publish");
var _SaveDraft = require("../../../elements/SaveDraft");
var _Save = require("../../../elements/Save");
var _DocumentInfo = require("../../../utilities/DocumentInfo");
var _OperationProvider = require("../../../utilities/OperationProvider");
var _Gutter = require("../../../elements/Gutter");
var _getTranslation = require("../../../../../utilities/getTranslation");
var _SetStepNav = require("./SetStepNav");
var _Loading = require("../../../elements/Loading");
var _formatDate = require("../../../../utilities/formatDate");
var _Auth1 = require("../../../utilities/Auth");
require("./index.scss");
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
var baseClass = "collection-edit";
var DefaultEditView = function(props) {
    var _data, _collection_versions, _collection_versions_drafts, _collection_versions1, _data1, _permissions_create, _permissions, _permissions_delete, _permissions1, _collection_versions2, _collection_versions_drafts1, _collection_versions3, _collection_versions4, _collection_versions_drafts2, _collection_versions5, _collection_admin_components_edit, _collection_admin_components, _collection_admin, _collection, _collection_versions6, _collection_admin_components_edit1, _collection_admin_components1, _collection_admin1, _collection1, _collection_admin_components_edit2, _collection_admin_components2, _collection_admin2, _collection2, _collection_admin_components_edit3, _collection_admin_components3, _collection_admin3, _collection3, _collection_versions7, _collection_versions_drafts3, _collection_versions8, _collection_admin_components_edit4, _collection_admin_components4, _collection_admin4, _collection4, _collection_versions9, _collection_versions10, _publishedDoc, _data2, _i18n, _publishedDoc1, _data3, _publishedDoc2, _data4, _i18n1;
    var _useConfig = (0, _Config.useConfig)(), dateFormat = _useConfig.admin.dateFormat, admin = _useConfig.routes.admin;
    var publishedDoc = (0, _DocumentInfo.useDocumentInfo)().publishedDoc;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useAuth = (0, _Auth1.useAuth)(), user = _useAuth.user, refreshCookieAsync = _useAuth.refreshCookieAsync;
    var collection = props.collection, isEditing = props.isEditing, data = props.data, onSaveFromProps = props.onSave, permissions = props.permissions, isLoading = props.isLoading, internalState = props.internalState, apiURL = props.apiURL, action = props.action, hasSavePermission = props.hasSavePermission, disableEyebrow = props.disableEyebrow, disableActions = props.disableActions, disableLeaveWithoutSaving = props.disableLeaveWithoutSaving, customHeader = props.customHeader, id = props.id, updatedAt = props.updatedAt;
    var slug = collection.slug, fields = collection.fields, _collection_admin5 = collection.admin, useAsTitle = _collection_admin5.useAsTitle, disableDuplicate = _collection_admin5.disableDuplicate, preview = _collection_admin5.preview, hideAPIURL = _collection_admin5.hideAPIURL, versions = collection.versions, timestamps = collection.timestamps, auth = collection.auth, upload = collection.upload;
    var classes = [
        baseClass,
        isEditing && "".concat(baseClass, "--is-editing")
    ].filter(Boolean).join(" ");
    var onSave = (0, _react.useCallback)(function() {
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
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement(_OperationProvider.OperationContext.Provider, {
        value: operation
    }, /*#__PURE__*/ _react.default.createElement(_Form.default, {
        className: "".concat(baseClass, "__form"),
        method: id ? "patch" : "post",
        action: action,
        onSuccess: onSave,
        disabled: !hasSavePermission,
        initialState: internalState
    }, /*#__PURE__*/ _react.default.createElement(_Loading.FormLoadingOverlayToggle, {
        formIsLoading: isLoading,
        action: isLoading ? "loading" : operation,
        name: "collection-edit--".concat(collection.labels.singular),
        loadingSuffix: (0, _getTranslation.getTranslation)(collection.labels.singular, i18n),
        type: "withoutNav"
    }), !isLoading && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !disableEyebrow && /*#__PURE__*/ _react.default.createElement(_SetStepNav.SetStepNav, {
        collection: collection,
        isEditing: isEditing,
        id: (_data = data) === null || _data === void 0 ? void 0 : _data.id
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__main")
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: "".concat(isEditing ? t("editing") : t("creating"), " - ").concat((0, _getTranslation.getTranslation)(collection.labels.singular, i18n)),
        description: "".concat(isEditing ? t("editing") : t("creating"), " - ").concat((0, _getTranslation.getTranslation)(collection.labels.singular, i18n)),
        keywords: "".concat((0, _getTranslation.getTranslation)(collection.labels.singular, i18n), ", Payload, CMS")
    }), !disableEyebrow && /*#__PURE__*/ _react.default.createElement(_Eyebrow.default, null), !(((_collection_versions = collection.versions) === null || _collection_versions === void 0 ? void 0 : _collection_versions.drafts) && ((_collection_versions1 = collection.versions) === null || _collection_versions1 === void 0 ? void 0 : (_collection_versions_drafts = _collection_versions1.drafts) === null || _collection_versions_drafts === void 0 ? void 0 : _collection_versions_drafts.autosave)) && !disableLeaveWithoutSaving && /*#__PURE__*/ _react.default.createElement(_LeaveWithoutSaving.default, null), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: "".concat(baseClass, "__edit")
    }, /*#__PURE__*/ _react.default.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, customHeader && customHeader, !customHeader && /*#__PURE__*/ _react.default.createElement("h1", null, /*#__PURE__*/ _react.default.createElement(_RenderTitle.default, {
        data: data,
        collection: collection,
        useAsTitle: useAsTitle,
        fallback: "[".concat(t("untitled"), "]")
    }))), auth && /*#__PURE__*/ _react.default.createElement(_Auth.default, {
        useAPIKey: auth.useAPIKey,
        requirePassword: !isEditing,
        verify: auth.verify,
        collection: collection,
        email: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.email,
        operation: operation,
        readOnly: !hasSavePermission
    }), upload && /*#__PURE__*/ _react.default.createElement(_Upload.default, {
        data: data,
        collection: collection,
        internalState: internalState
    }), /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        readOnly: !hasSavePermission,
        permissions: permissions.fields,
        filter: function(field) {
            var _field_admin, _field, _field_admin1, _field1;
            return !((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.position) || ((_field1 = field) === null || _field1 === void 0 ? void 0 : (_field_admin1 = _field1.admin) === null || _field_admin1 === void 0 ? void 0 : _field_admin1.position) !== "sidebar";
        },
        fieldTypes: _fieldtypes.default,
        fieldSchema: fields
    }))), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__sidebar-wrap")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__sidebar")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__sidebar-sticky-wrap")
    }, !disableActions && /*#__PURE__*/ _react.default.createElement("ul", {
        className: "".concat(baseClass, "__collection-actions")
    }, ((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_create = _permissions.create) === null || _permissions_create === void 0 ? void 0 : _permissions_create.permission) && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        id: "action-create",
        to: "".concat(admin, "/collections/").concat(slug, "/create")
    }, t("createNew"))), !disableDuplicate && isEditing && /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement(_DuplicateDocument.default, {
        collection: collection,
        id: id,
        slug: slug
    }))), ((_permissions1 = permissions) === null || _permissions1 === void 0 ? void 0 : (_permissions_delete = _permissions1.delete) === null || _permissions_delete === void 0 ? void 0 : _permissions_delete.permission) && /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement(_DeleteDocument.default, {
        collection: collection,
        id: id,
        buttonId: "action-delete"
    }))), /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            "".concat(baseClass, "__document-actions"),
            (((_collection_versions2 = collection.versions) === null || _collection_versions2 === void 0 ? void 0 : _collection_versions2.drafts) && !((_collection_versions3 = collection.versions) === null || _collection_versions3 === void 0 ? void 0 : (_collection_versions_drafts1 = _collection_versions3.drafts) === null || _collection_versions_drafts1 === void 0 ? void 0 : _collection_versions_drafts1.autosave) || isEditing && preview) && "".concat(baseClass, "__document-actions--has-2")
        ].filter(Boolean).join(" ")
    }, isEditing && preview && (!((_collection_versions4 = collection.versions) === null || _collection_versions4 === void 0 ? void 0 : _collection_versions4.drafts) || ((_collection_versions5 = collection.versions) === null || _collection_versions5 === void 0 ? void 0 : (_collection_versions_drafts2 = _collection_versions5.drafts) === null || _collection_versions_drafts2 === void 0 ? void 0 : _collection_versions_drafts2.autosave)) && /*#__PURE__*/ _react.default.createElement(_PreviewButton.default, {
        generatePreviewURL: preview,
        CustomComponent: (_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : (_collection_admin_components = _collection_admin.components) === null || _collection_admin_components === void 0 ? void 0 : (_collection_admin_components_edit = _collection_admin_components.edit) === null || _collection_admin_components_edit === void 0 ? void 0 : _collection_admin_components_edit.PreviewButton
    }), hasSavePermission && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, ((_collection_versions6 = collection.versions) === null || _collection_versions6 === void 0 ? void 0 : _collection_versions6.drafts) ? /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, !collection.versions.drafts.autosave && /*#__PURE__*/ _react.default.createElement(_SaveDraft.SaveDraft, {
        CustomComponent: (_collection1 = collection) === null || _collection1 === void 0 ? void 0 : (_collection_admin1 = _collection1.admin) === null || _collection_admin1 === void 0 ? void 0 : (_collection_admin_components1 = _collection_admin1.components) === null || _collection_admin_components1 === void 0 ? void 0 : (_collection_admin_components_edit1 = _collection_admin_components1.edit) === null || _collection_admin_components_edit1 === void 0 ? void 0 : _collection_admin_components_edit1.SaveDraftButton
    }), /*#__PURE__*/ _react.default.createElement(_Publish.Publish, {
        CustomComponent: (_collection2 = collection) === null || _collection2 === void 0 ? void 0 : (_collection_admin2 = _collection2.admin) === null || _collection_admin2 === void 0 ? void 0 : (_collection_admin_components2 = _collection_admin2.components) === null || _collection_admin_components2 === void 0 ? void 0 : (_collection_admin_components_edit2 = _collection_admin_components2.edit) === null || _collection_admin_components_edit2 === void 0 ? void 0 : _collection_admin_components_edit2.PublishButton
    })) : /*#__PURE__*/ _react.default.createElement(_Save.Save, {
        CustomComponent: (_collection3 = collection) === null || _collection3 === void 0 ? void 0 : (_collection_admin3 = _collection3.admin) === null || _collection_admin3 === void 0 ? void 0 : (_collection_admin_components3 = _collection_admin3.components) === null || _collection_admin_components3 === void 0 ? void 0 : (_collection_admin_components_edit3 = _collection_admin_components3.edit) === null || _collection_admin_components_edit3 === void 0 ? void 0 : _collection_admin_components_edit3.SaveButton
    }))), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__sidebar-fields")
    }, isEditing && preview && ((_collection_versions7 = collection.versions) === null || _collection_versions7 === void 0 ? void 0 : _collection_versions7.drafts) && !((_collection_versions8 = collection.versions) === null || _collection_versions8 === void 0 ? void 0 : (_collection_versions_drafts3 = _collection_versions8.drafts) === null || _collection_versions_drafts3 === void 0 ? void 0 : _collection_versions_drafts3.autosave) && /*#__PURE__*/ _react.default.createElement(_PreviewButton.default, {
        generatePreviewURL: preview,
        CustomComponent: (_collection4 = collection) === null || _collection4 === void 0 ? void 0 : (_collection_admin4 = _collection4.admin) === null || _collection_admin4 === void 0 ? void 0 : (_collection_admin_components4 = _collection_admin4.components) === null || _collection_admin_components4 === void 0 ? void 0 : (_collection_admin_components_edit4 = _collection_admin_components4.edit) === null || _collection_admin_components_edit4 === void 0 ? void 0 : _collection_admin_components_edit4.PreviewButton
    }), ((_collection_versions9 = collection.versions) === null || _collection_versions9 === void 0 ? void 0 : _collection_versions9.drafts) && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Status.default, null), ((_collection_versions10 = collection.versions) === null || _collection_versions10 === void 0 ? void 0 : _collection_versions10.drafts.autosave) && hasSavePermission && /*#__PURE__*/ _react.default.createElement(_Autosave.default, {
        publishedDocUpdatedAt: ((_publishedDoc = publishedDoc) === null || _publishedDoc === void 0 ? void 0 : _publishedDoc.updatedAt) || ((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.createdAt),
        collection: collection,
        id: id
    })), /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        readOnly: !hasSavePermission,
        permissions: permissions.fields,
        filter: function(field) {
            var _field_admin, _field;
            return ((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.position) === "sidebar";
        },
        fieldTypes: _fieldtypes.default,
        fieldSchema: fields
    })), isEditing && /*#__PURE__*/ _react.default.createElement("ul", {
        className: "".concat(baseClass, "__meta")
    }, !hideAPIURL && /*#__PURE__*/ _react.default.createElement("li", {
        className: "".concat(baseClass, "__api-url")
    }, /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__label")
    }, "API URL", " ", /*#__PURE__*/ _react.default.createElement(_CopyToClipboard.default, {
        value: apiURL
    })), /*#__PURE__*/ _react.default.createElement("a", {
        href: apiURL,
        target: "_blank",
        rel: "noopener noreferrer"
    }, apiURL)), versions && /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("version:versions")), /*#__PURE__*/ _react.default.createElement(_VersionsCount.default, {
        collection: collection,
        id: id
    })), timestamps && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, updatedAt && /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("lastModified")), /*#__PURE__*/ _react.default.createElement("div", null, (0, _formatDate.formatDate)(data.updatedAt, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language))), (((_publishedDoc1 = publishedDoc) === null || _publishedDoc1 === void 0 ? void 0 : _publishedDoc1.createdAt) || ((_data3 = data) === null || _data3 === void 0 ? void 0 : _data3.createdAt)) && /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("created")), /*#__PURE__*/ _react.default.createElement("div", null, (0, _formatDate.formatDate)(((_publishedDoc2 = publishedDoc) === null || _publishedDoc2 === void 0 ? void 0 : _publishedDoc2.createdAt) || ((_data4 = data) === null || _data4 === void 0 ? void 0 : _data4.createdAt), dateFormat, (_i18n1 = i18n) === null || _i18n1 === void 0 ? void 0 : _i18n1.language)))))))))))));
};
var _default = DefaultEditView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvRGVmYXVsdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi8uLi9mb3Jtcy9Gb3JtJztcbmltcG9ydCBQcmV2aWV3QnV0dG9uIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1ByZXZpZXdCdXR0b24nO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi8uLi9mb3Jtcy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db3B5VG9DbGlwYm9hcmQnO1xuaW1wb3J0IER1cGxpY2F0ZURvY3VtZW50IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0R1cGxpY2F0ZURvY3VtZW50JztcbmltcG9ydCBEZWxldGVEb2N1bWVudCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9EZWxldGVEb2N1bWVudCc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgZmllbGRUeXBlcyBmcm9tICcuLi8uLi8uLi9mb3Jtcy9maWVsZC10eXBlcyc7XG5pbXBvcnQgUmVuZGVyVGl0bGUgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUmVuZGVyVGl0bGUnO1xuaW1wb3J0IExlYXZlV2l0aG91dFNhdmluZyBmcm9tICcuLi8uLi8uLi9tb2RhbHMvTGVhdmVXaXRob3V0U2F2aW5nJztcbmltcG9ydCBBdXRoIGZyb20gJy4vQXV0aCc7XG5pbXBvcnQgVmVyc2lvbnNDb3VudCBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9WZXJzaW9uc0NvdW50JztcbmltcG9ydCBVcGxvYWQgZnJvbSAnLi9VcGxvYWQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBBdXRvc2F2ZSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9BdXRvc2F2ZSc7XG5pbXBvcnQgU3RhdHVzIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1N0YXR1cyc7XG5pbXBvcnQgeyBQdWJsaXNoIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUHVibGlzaCc7XG5pbXBvcnQgeyBTYXZlRHJhZnQgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9TYXZlRHJhZnQnO1xuaW1wb3J0IHsgU2F2ZSB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1NhdmUnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgeyBPcGVyYXRpb25Db250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL09wZXJhdGlvblByb3ZpZGVyJztcbmltcG9ydCB7IEd1dHRlciB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0d1dHRlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBTZXRTdGVwTmF2IH0gZnJvbSAnLi9TZXRTdGVwTmF2JztcbmltcG9ydCB7IEZvcm1Mb2FkaW5nT3ZlcmxheVRvZ2dsZSB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbGxlY3Rpb24tZWRpdCc7XG5cbmNvbnN0IERlZmF1bHRFZGl0VmlldzogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWRtaW46IHsgZGF0ZUZvcm1hdCB9LCByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcHVibGlzaGVkRG9jIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7IHVzZXIsIHJlZnJlc2hDb29raWVBc3luYyB9ID0gdXNlQXV0aCgpO1xuXG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIGlzRWRpdGluZyxcbiAgICBkYXRhLFxuICAgIG9uU2F2ZTogb25TYXZlRnJvbVByb3BzLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIGlzTG9hZGluZyxcbiAgICBpbnRlcm5hbFN0YXRlLFxuICAgIGFwaVVSTCxcbiAgICBhY3Rpb24sXG4gICAgaGFzU2F2ZVBlcm1pc3Npb24sXG4gICAgZGlzYWJsZUV5ZWJyb3csXG4gICAgZGlzYWJsZUFjdGlvbnMsXG4gICAgZGlzYWJsZUxlYXZlV2l0aG91dFNhdmluZyxcbiAgICBjdXN0b21IZWFkZXIsXG4gICAgaWQsXG4gICAgdXBkYXRlZEF0LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIHNsdWcsXG4gICAgZmllbGRzLFxuICAgIGFkbWluOiB7XG4gICAgICB1c2VBc1RpdGxlLFxuICAgICAgZGlzYWJsZUR1cGxpY2F0ZSxcbiAgICAgIHByZXZpZXcsXG4gICAgICBoaWRlQVBJVVJMLFxuICAgIH0sXG4gICAgdmVyc2lvbnMsXG4gICAgdGltZXN0YW1wcyxcbiAgICBhdXRoLFxuICAgIHVwbG9hZCxcbiAgfSA9IGNvbGxlY3Rpb247XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgaXNFZGl0aW5nICYmIGAke2Jhc2VDbGFzc30tLWlzLWVkaXRpbmdgLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgY29uc3Qgb25TYXZlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGpzb24pID0+IHtcbiAgICBpZiAoYXV0aCAmJiBpZCA9PT0gdXNlci5pZCkge1xuICAgICAgYXdhaXQgcmVmcmVzaENvb2tpZUFzeW5jKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvblNhdmVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uU2F2ZUZyb21Qcm9wcyh7XG4gICAgICAgIC4uLmpzb24sXG4gICAgICAgIG9wZXJhdGlvbjogaWQgPyAndXBkYXRlJyA6ICdjcmVhdGUnLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbaWQsIG9uU2F2ZUZyb21Qcm9wcywgYXV0aCwgdXNlciwgcmVmcmVzaENvb2tpZUFzeW5jXSk7XG5cbiAgY29uc3Qgb3BlcmF0aW9uID0gaXNFZGl0aW5nID8gJ3VwZGF0ZScgOiAnY3JlYXRlJztcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgPE9wZXJhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e29wZXJhdGlvbn0+XG4gICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZm9ybWB9XG4gICAgICAgICAgICBtZXRob2Q9e2lkID8gJ3BhdGNoJyA6ICdwb3N0J31cbiAgICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgICAgb25TdWNjZXNzPXtvblNhdmV9XG4gICAgICAgICAgICBkaXNhYmxlZD17IWhhc1NhdmVQZXJtaXNzaW9ufVxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlPXtpbnRlcm5hbFN0YXRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb3JtTG9hZGluZ092ZXJsYXlUb2dnbGVcbiAgICAgICAgICAgICAgZm9ybUlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgICBhY3Rpb249e2lzTG9hZGluZyA/ICdsb2FkaW5nJyA6IG9wZXJhdGlvbn1cbiAgICAgICAgICAgICAgbmFtZT17YGNvbGxlY3Rpb24tZWRpdC0tJHtjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhcn1gfVxuICAgICAgICAgICAgICBsb2FkaW5nU3VmZml4PXtnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bil9XG4gICAgICAgICAgICAgIHR5cGU9XCJ3aXRob3V0TmF2XCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHshZGlzYWJsZUV5ZWJyb3cgJiYgKFxuICAgICAgICAgICAgICAgICAgPFNldFN0ZXBOYXZcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nPXtpc0VkaXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtkYXRhPy5pZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tYWluYH0+XG4gICAgICAgICAgICAgICAgICA8TWV0YVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17YCR7aXNFZGl0aW5nID8gdCgnZWRpdGluZycpIDogdCgnY3JlYXRpbmcnKX0gLSAke2dldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKX1gfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17YCR7aXNFZGl0aW5nID8gdCgnZWRpdGluZycpIDogdCgnY3JlYXRpbmcnKX0gLSAke2dldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKX1gfVxuICAgICAgICAgICAgICAgICAgICBrZXl3b3Jkcz17YCR7Z2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbi5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pfSwgUGF5bG9hZCwgQ01TYH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7IWRpc2FibGVFeWVicm93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIHsoIShjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMgJiYgY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkgJiYgIWRpc2FibGVMZWF2ZVdpdGhvdXRTYXZpbmcpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPExlYXZlV2l0aG91dFNhdmluZyAvPlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgPEd1dHRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2VkaXRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlcmB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjdXN0b21IZWFkZXIgJiYgY3VzdG9tSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICAgIHshY3VzdG9tSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbmRlclRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUFzVGl0bGU9e3VzZUFzVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9e2BbJHt0KCd1bnRpdGxlZCcpfV1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICB7YXV0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEF1dGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUFQSUtleT17YXV0aC51c2VBUElLZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlUGFzc3dvcmQ9eyFpc0VkaXRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJpZnk9e2F1dGgudmVyaWZ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPXtkYXRhPy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj17b3BlcmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyFoYXNTYXZlUGVybWlzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHt1cGxvYWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWxTdGF0ZT17aW50ZXJuYWxTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17IWhhc1NhdmVQZXJtaXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9ucy5maWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXsoZmllbGQpID0+ICghZmllbGQ/LmFkbWluPy5wb3NpdGlvbiB8fCAoZmllbGQ/LmFkbWluPy5wb3NpdGlvbiAhPT0gJ3NpZGViYXInKSl9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9HdXR0ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpZGViYXItd3JhcGB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpZGViYXJgfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpZGViYXItc3RpY2t5LXdyYXBgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IWRpc2FibGVBY3Rpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbGxlY3Rpb24tYWN0aW9uc2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7KHBlcm1pc3Npb25zPy5jcmVhdGU/LnBlcm1pc3Npb24pICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY3Rpb24tY3JlYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17YCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7c2x1Z30vY3JlYXRlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdjcmVhdGVOZXcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFkaXNhYmxlRHVwbGljYXRlICYmIGlzRWRpdGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHVwbGljYXRlRG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5kZWxldGU/LnBlcm1pc3Npb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVEb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbklkPVwiYWN0aW9uLWRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fZG9jdW1lbnQtYWN0aW9uc2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICgoY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzICYmICFjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHM/LmF1dG9zYXZlKSB8fCAoaXNFZGl0aW5nICYmIHByZXZpZXcpKSAmJiBgJHtiYXNlQ2xhc3N9X19kb2N1bWVudC1hY3Rpb25zLS1oYXMtMmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhpc0VkaXRpbmcgJiYgcHJldmlldyAmJiAoIWNvbGxlY3Rpb24udmVyc2lvbnM/LmRyYWZ0cyB8fCBjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHM/LmF1dG9zYXZlKSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJldmlld0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJldmlld1VSTD17cHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21Db21wb25lbnQ9e2NvbGxlY3Rpb24/LmFkbWluPy5jb21wb25lbnRzPy5lZGl0Py5QcmV2aWV3QnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc1NhdmVQZXJtaXNzaW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshY29sbGVjdGlvbi52ZXJzaW9ucy5kcmFmdHMuYXV0b3NhdmUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTYXZlRHJhZnQgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8uZWRpdD8uU2F2ZURyYWZ0QnV0dG9ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQdWJsaXNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8uZWRpdD8uUHVibGlzaEJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTYXZlIEN1c3RvbUNvbXBvbmVudD17Y29sbGVjdGlvbj8uYWRtaW4/LmNvbXBvbmVudHM/LmVkaXQ/LlNhdmVCdXR0b259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2lkZWJhci1maWVsZHNgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoaXNFZGl0aW5nICYmIHByZXZpZXcgJiYgKGNvbGxlY3Rpb24udmVyc2lvbnM/LmRyYWZ0cyAmJiAhY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZXZpZXdCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZVByZXZpZXdVUkw9e3ByZXZpZXd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8uZWRpdD8uUHJldmlld0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXR1cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzLmF1dG9zYXZlICYmIGhhc1NhdmVQZXJtaXNzaW9uKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b3NhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaGVkRG9jVXBkYXRlZEF0PXtwdWJsaXNoZWREb2M/LnVwZGF0ZWRBdCB8fCBkYXRhPy5jcmVhdGVkQXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyFoYXNTYXZlUGVybWlzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e3Blcm1pc3Npb25zLmZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXsoZmllbGQpID0+IGZpZWxkPy5hZG1pbj8ucG9zaXRpb24gPT09ICdzaWRlYmFyJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTY2hlbWE9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VkaXRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tZXRhYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFoaWRlQVBJVVJMICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FwaS11cmxgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFQSSBVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdmFsdWU9e2FwaVVSTH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2FwaVVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FwaVVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZlcnNpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ3ZlcnNpb246dmVyc2lvbnMnKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcnNpb25zQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lc3RhbXBzICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRBdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ2xhc3RNb2RpZmllZCcpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57Zm9ybWF0RGF0ZShkYXRhLnVwZGF0ZWRBdCwgZGF0ZUZvcm1hdCwgaTE4bj8ubGFuZ3VhZ2UpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHVibGlzaGVkRG9jPy5jcmVhdGVkQXQgfHwgZGF0YT8uY3JlYXRlZEF0KSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ2NyZWF0ZWQnKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2Zvcm1hdERhdGUocHVibGlzaGVkRG9jPy5jcmVhdGVkQXQgfHwgZGF0YT8uY3JlYXRlZEF0LCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9PcGVyYXRpb25Db250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRFZGl0VmlldztcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEZWZhdWx0RWRpdFZpZXciLCJwcm9wcyIsImRhdGEiLCJjb2xsZWN0aW9uIiwicGVybWlzc2lvbnMiLCJwdWJsaXNoZWREb2MiLCJpMThuIiwidXNlQ29uZmlnIiwiYWRtaW4iLCJkYXRlRm9ybWF0Iiwicm91dGVzIiwidXNlRG9jdW1lbnRJbmZvIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidXNlQXV0aCIsInVzZXIiLCJyZWZyZXNoQ29va2llQXN5bmMiLCJpc0VkaXRpbmciLCJvblNhdmUiLCJvblNhdmVGcm9tUHJvcHMiLCJpc0xvYWRpbmciLCJpbnRlcm5hbFN0YXRlIiwiYXBpVVJMIiwiYWN0aW9uIiwiaGFzU2F2ZVBlcm1pc3Npb24iLCJkaXNhYmxlRXllYnJvdyIsImRpc2FibGVBY3Rpb25zIiwiZGlzYWJsZUxlYXZlV2l0aG91dFNhdmluZyIsImN1c3RvbUhlYWRlciIsImlkIiwidXBkYXRlZEF0Iiwic2x1ZyIsImZpZWxkcyIsInVzZUFzVGl0bGUiLCJkaXNhYmxlRHVwbGljYXRlIiwicHJldmlldyIsImhpZGVBUElVUkwiLCJ2ZXJzaW9ucyIsInRpbWVzdGFtcHMiLCJhdXRoIiwidXBsb2FkIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwidXNlQ2FsbGJhY2siLCJqc29uIiwib3BlcmF0aW9uIiwiUmVhY3QiLCJGcmFnbWVudCIsImRpdiIsImNsYXNzTmFtZSIsIk9wZXJhdGlvbkNvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIiwiRm9ybSIsIm1ldGhvZCIsIm9uU3VjY2VzcyIsImRpc2FibGVkIiwiaW5pdGlhbFN0YXRlIiwiRm9ybUxvYWRpbmdPdmVybGF5VG9nZ2xlIiwiZm9ybUlzTG9hZGluZyIsIm5hbWUiLCJsYWJlbHMiLCJzaW5ndWxhciIsImxvYWRpbmdTdWZmaXgiLCJnZXRUcmFuc2xhdGlvbiIsInR5cGUiLCJTZXRTdGVwTmF2IiwiTWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsIkV5ZWJyb3ciLCJkcmFmdHMiLCJhdXRvc2F2ZSIsIkxlYXZlV2l0aG91dFNhdmluZyIsIkd1dHRlciIsImhlYWRlciIsImgxIiwiUmVuZGVyVGl0bGUiLCJmYWxsYmFjayIsIkF1dGgiLCJ1c2VBUElLZXkiLCJyZXF1aXJlUGFzc3dvcmQiLCJ2ZXJpZnkiLCJlbWFpbCIsInJlYWRPbmx5IiwiVXBsb2FkIiwiUmVuZGVyRmllbGRzIiwiZmllbGQiLCJwb3NpdGlvbiIsImZpZWxkVHlwZXMiLCJmaWVsZFNjaGVtYSIsInVsIiwiY3JlYXRlIiwicGVybWlzc2lvbiIsImxpIiwiTGluayIsInRvIiwiRHVwbGljYXRlRG9jdW1lbnQiLCJkZWxldGUiLCJEZWxldGVEb2N1bWVudCIsImJ1dHRvbklkIiwiUHJldmlld0J1dHRvbiIsImdlbmVyYXRlUHJldmlld1VSTCIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJlZGl0IiwiU2F2ZURyYWZ0IiwiU2F2ZURyYWZ0QnV0dG9uIiwiUHVibGlzaCIsIlB1Ymxpc2hCdXR0b24iLCJTYXZlIiwiU2F2ZUJ1dHRvbiIsIlN0YXR1cyIsIkF1dG9zYXZlIiwicHVibGlzaGVkRG9jVXBkYXRlZEF0IiwiY3JlYXRlZEF0Iiwic3BhbiIsIkNvcHlUb0NsaXBib2FyZCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiVmVyc2lvbnNDb3VudCIsImZvcm1hdERhdGUiLCJsYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkE0VkE7OztlQUFBOzs7NkRBNVZtQzs4QkFDZDs0QkFDVTtzQkFDTDs4REFDTjsyREFDSDtvRUFDUzttRUFDRDtzRUFDRzt3RUFDRTtxRUFDSDsyREFDVjtpRUFDTTtrRUFDQzt5RUFDTzsyREFDZDtvRUFDUzs2REFDUDsrREFFRTs2REFDRjt1QkFDSzt5QkFDRTtvQkFDTDs0QkFDVztpQ0FDQztzQkFDVjs4QkFDUTswQkFDSjt1QkFDYzsw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