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
var _Config = require("../../utilities/Config");
var _Eyebrow = /*#__PURE__*/ _interop_require_default(require("../../elements/Eyebrow"));
var _Form = /*#__PURE__*/ _interop_require_default(require("../../forms/Form"));
var _PreviewButton = /*#__PURE__*/ _interop_require_default(require("../../elements/PreviewButton"));
var _Save = require("../../elements/Save");
var _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../forms/RenderFields"));
var _CopyToClipboard = /*#__PURE__*/ _interop_require_default(require("../../elements/CopyToClipboard"));
var _fieldtypes = /*#__PURE__*/ _interop_require_default(require("../../forms/field-types"));
var _RenderTitle = /*#__PURE__*/ _interop_require_default(require("../../elements/RenderTitle"));
var _LeaveWithoutSaving = /*#__PURE__*/ _interop_require_default(require("../../modals/LeaveWithoutSaving"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
var _Auth = /*#__PURE__*/ _interop_require_default(require("../collections/Edit/Auth"));
var _OperationProvider = require("../../utilities/OperationProvider");
var _ToggleTheme = require("./ToggleTheme");
var _Gutter = require("../../elements/Gutter");
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../elements/ReactSelect"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../forms/Label"));
var _Loading = require("../../elements/Loading");
var _formatDate = require("../../../utilities/formatDate");
var _Auth1 = require("../../utilities/Auth");
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
var baseClass = "account";
var DefaultAccount = function(props) {
    var _collection_versions, _collection_versions_drafts, _collection_versions1, _data, _permissions_create, _permissions, _collection_versions2, _collection_versions_drafts1, _collection_versions3, _collection_admin_components_edit, _collection_admin_components, _collection_admin, _collection, _collection_admin_components_edit1, _collection_admin_components1, _collection_admin1, _collection1, _data1, _i18n, _i18n1;
    var collection = props.collection, data = props.data, permissions = props.permissions, hasSavePermission = props.hasSavePermission, apiURL = props.apiURL, initialState = props.initialState, isLoading = props.isLoading, action = props.action, onSaveFromProps = props.onSave;
    var slug = collection.slug, fields = collection.fields, _collection_admin2 = collection.admin, useAsTitle = _collection_admin2.useAsTitle, preview = _collection_admin2.preview, timestamps = collection.timestamps, auth = collection.auth;
    var refreshCookieAsync = (0, _Auth1.useAuth)().refreshCookieAsync;
    var _useConfig = (0, _Config.useConfig)(), dateFormat = _useConfig.admin.dateFormat, admin = _useConfig.routes.admin;
    var _useTranslation = (0, _reacti18next.useTranslation)("authentication"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var languageOptions = Object.entries(i18n.options.resources).map(function(param) {
        var _param = _sliced_to_array(param, 2), language = _param[0], resource = _param[1];
        return {
            label: resource.general.thisLanguage,
            value: language
        };
    });
    var onSave = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        refreshCookieAsync()
                    ];
                case 1:
                    _state.sent();
                    if (typeof onSaveFromProps === "function") {
                        onSaveFromProps();
                    }
                    return [
                        2
                    ];
            }
        });
    }), [
        onSaveFromProps,
        refreshCookieAsync
    ]);
    var classes = [
        baseClass
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
        name: "account",
        show: isLoading,
        type: "withoutNav"
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, !isLoading && /*#__PURE__*/ _react.default.createElement(_OperationProvider.OperationContext.Provider, {
        value: "update"
    }, /*#__PURE__*/ _react.default.createElement(_Form.default, {
        className: "".concat(baseClass, "__form"),
        method: "patch",
        action: action,
        onSuccess: onSave,
        initialState: initialState,
        disabled: !hasSavePermission
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__main")
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: t("account"),
        description: t("accountOfCurrentUser"),
        keywords: t("account")
    }), /*#__PURE__*/ _react.default.createElement(_Eyebrow.default, null), !(((_collection_versions = collection.versions) === null || _collection_versions === void 0 ? void 0 : _collection_versions.drafts) && ((_collection_versions1 = collection.versions) === null || _collection_versions1 === void 0 ? void 0 : (_collection_versions_drafts = _collection_versions1.drafts) === null || _collection_versions_drafts === void 0 ? void 0 : _collection_versions_drafts.autosave)) && /*#__PURE__*/ _react.default.createElement(_LeaveWithoutSaving.default, null), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__edit")
    }, /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: "".concat(baseClass, "__header")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, /*#__PURE__*/ _react.default.createElement(_RenderTitle.default, {
        data: data,
        collection: collection,
        useAsTitle: useAsTitle,
        fallback: "[".concat(t("general:untitled"), "]")
    })), /*#__PURE__*/ _react.default.createElement(_Auth.default, {
        useAPIKey: auth.useAPIKey,
        collection: collection,
        email: (_data = data) === null || _data === void 0 ? void 0 : _data.email,
        operation: "update",
        readOnly: !hasSavePermission
    }), /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        permissions: permissions.fields,
        readOnly: !hasSavePermission,
        filter: function(field) {
            var _field_admin, _field;
            return ((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.position) !== "sidebar";
        },
        fieldTypes: _fieldtypes.default,
        fieldSchema: fields
    })), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: "".concat(baseClass, "__payload-settings")
    }, /*#__PURE__*/ _react.default.createElement("h3", null, t("general:payloadSettings")), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__language")
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: "language-select",
        label: t("general:language")
    }), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        inputId: "language-select",
        value: languageOptions.find(function(language) {
            return language.value === i18n.language;
        }),
        options: languageOptions,
        onChange: function(param) {
            var value = param.value;
            return i18n.changeLanguage(value);
        }
    })), /*#__PURE__*/ _react.default.createElement(_ToggleTheme.ToggleTheme, null)))), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__sidebar-wrap")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__sidebar")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__sidebar-sticky-wrap")
    }, /*#__PURE__*/ _react.default.createElement("ul", {
        className: "".concat(baseClass, "__collection-actions")
    }, ((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_create = _permissions.create) === null || _permissions_create === void 0 ? void 0 : _permissions_create.permission) && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: "".concat(admin, "/collections/").concat(slug, "/create")
    }, t("general:createNew"))))), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__document-actions").concat(preview ? " ".concat(baseClass, "__document-actions--with-preview") : "")
    }, preview && (!((_collection_versions2 = collection.versions) === null || _collection_versions2 === void 0 ? void 0 : _collection_versions2.drafts) || ((_collection_versions3 = collection.versions) === null || _collection_versions3 === void 0 ? void 0 : (_collection_versions_drafts1 = _collection_versions3.drafts) === null || _collection_versions_drafts1 === void 0 ? void 0 : _collection_versions_drafts1.autosave)) && /*#__PURE__*/ _react.default.createElement(_PreviewButton.default, {
        generatePreviewURL: preview,
        CustomComponent: (_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : (_collection_admin_components = _collection_admin.components) === null || _collection_admin_components === void 0 ? void 0 : (_collection_admin_components_edit = _collection_admin_components.edit) === null || _collection_admin_components_edit === void 0 ? void 0 : _collection_admin_components_edit.PreviewButton
    }), hasSavePermission && /*#__PURE__*/ _react.default.createElement(_Save.Save, {
        CustomComponent: (_collection1 = collection) === null || _collection1 === void 0 ? void 0 : (_collection_admin1 = _collection1.admin) === null || _collection_admin1 === void 0 ? void 0 : (_collection_admin_components1 = _collection_admin1.components) === null || _collection_admin_components1 === void 0 ? void 0 : (_collection_admin_components_edit1 = _collection_admin_components1.edit) === null || _collection_admin_components_edit1 === void 0 ? void 0 : _collection_admin_components_edit1.SaveButton
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__sidebar-fields")
    }, /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        permissions: permissions.fields,
        readOnly: !hasSavePermission,
        filter: function(field) {
            var _field_admin, _field;
            return ((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.position) === "sidebar";
        },
        fieldTypes: _fieldtypes.default,
        fieldSchema: fields
    })), /*#__PURE__*/ _react.default.createElement("ul", {
        className: "".concat(baseClass, "__meta")
    }, /*#__PURE__*/ _react.default.createElement("li", {
        className: "".concat(baseClass, "__api-url")
    }, /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__label")
    }, "API URL", " ", /*#__PURE__*/ _react.default.createElement(_CopyToClipboard.default, {
        value: apiURL
    })), /*#__PURE__*/ _react.default.createElement("a", {
        href: apiURL,
        target: "_blank",
        rel: "noopener noreferrer"
    }, apiURL)), /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, "ID"), /*#__PURE__*/ _react.default.createElement("div", null, (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.id)), timestamps && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, data.updatedAt && /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("general:lastModified")), /*#__PURE__*/ _react.default.createElement("div", null, (0, _formatDate.formatDate)(data.updatedAt, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language))), data.createdAt && /*#__PURE__*/ _react.default.createElement("li", null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("general:created")), /*#__PURE__*/ _react.default.createElement("div", null, (0, _formatDate.formatDate)(data.createdAt, dateFormat, (_i18n1 = i18n) === null || _i18n1 === void 0 ? void 0 : _i18n1.language))))))))))));
};
var _default = DefaultAccount;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvRGVmYXVsdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJztcbmltcG9ydCBQcmV2aWV3QnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL1ByZXZpZXdCdXR0b24nO1xuaW1wb3J0IHsgU2F2ZSB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1NhdmUnO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi9mb3Jtcy9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICcuLi8uLi9lbGVtZW50cy9Db3B5VG9DbGlwYm9hcmQnO1xuaW1wb3J0IGZpZWxkVHlwZXMgZnJvbSAnLi4vLi4vZm9ybXMvZmllbGQtdHlwZXMnO1xuaW1wb3J0IFJlbmRlclRpdGxlIGZyb20gJy4uLy4uL2VsZW1lbnRzL1JlbmRlclRpdGxlJztcbmltcG9ydCBMZWF2ZVdpdGhvdXRTYXZpbmcgZnJvbSAnLi4vLi4vbW9kYWxzL0xlYXZlV2l0aG91dFNhdmluZyc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgQXV0aCBmcm9tICcuLi9jb2xsZWN0aW9ucy9FZGl0L0F1dGgnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IE9wZXJhdGlvbkNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvT3BlcmF0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgVG9nZ2xlVGhlbWUgfSBmcm9tICcuL1RvZ2dsZVRoZW1lJztcbmltcG9ydCB7IEd1dHRlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0d1dHRlcic7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vZWxlbWVudHMvUmVhY3RTZWxlY3QnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL2Zvcm1zL0xhYmVsJztcbmltcG9ydCB0eXBlIHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi90cmFuc2xhdGlvbnMvdHlwZSc7XG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheVRvZ2dsZSB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2FjY291bnQnO1xuXG5jb25zdCBEZWZhdWx0QWNjb3VudDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIGRhdGEsXG4gICAgcGVybWlzc2lvbnMsXG4gICAgaGFzU2F2ZVBlcm1pc3Npb24sXG4gICAgYXBpVVJMLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBpc0xvYWRpbmcsXG4gICAgYWN0aW9uLFxuICAgIG9uU2F2ZTogb25TYXZlRnJvbVByb3BzLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIHNsdWcsXG4gICAgZmllbGRzLFxuICAgIGFkbWluOiB7XG4gICAgICB1c2VBc1RpdGxlLFxuICAgICAgcHJldmlldyxcbiAgICB9LFxuICAgIHRpbWVzdGFtcHMsXG4gICAgYXV0aCxcbiAgfSA9IGNvbGxlY3Rpb247XG5cbiAgY29uc3QgeyByZWZyZXNoQ29va2llQXN5bmMgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyBhZG1pbjogeyBkYXRlRm9ybWF0IH0sIHJvdXRlczogeyBhZG1pbiB9IH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKTtcblxuICBjb25zdCBsYW5ndWFnZU9wdGlvbnMgPSBPYmplY3QuZW50cmllcyhpMThuLm9wdGlvbnMucmVzb3VyY2VzKS5tYXAoKFtsYW5ndWFnZSwgcmVzb3VyY2VdKSA9PiAoXG4gICAgeyBsYWJlbDogKHJlc291cmNlIGFzIFRyYW5zbGF0aW9uKS5nZW5lcmFsLnRoaXNMYW5ndWFnZSwgdmFsdWU6IGxhbmd1YWdlIH1cbiAgKSk7XG5cbiAgY29uc3Qgb25TYXZlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHJlZnJlc2hDb29raWVBc3luYygpO1xuICAgIGlmICh0eXBlb2Ygb25TYXZlRnJvbVByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvblNhdmVGcm9tUHJvcHMoKTtcbiAgICB9XG4gIH0sIFtvblNhdmVGcm9tUHJvcHMsIHJlZnJlc2hDb29raWVBc3luY10pO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TG9hZGluZ092ZXJsYXlUb2dnbGVcbiAgICAgICAgbmFtZT1cImFjY291bnRcIlxuICAgICAgICBzaG93PXtpc0xvYWRpbmd9XG4gICAgICAgIHR5cGU9XCJ3aXRob3V0TmF2XCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICAgIHshaXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8T3BlcmF0aW9uQ29udGV4dC5Qcm92aWRlciB2YWx1ZT1cInVwZGF0ZVwiPlxuICAgICAgICAgICAgPEZvcm1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19mb3JtYH1cbiAgICAgICAgICAgICAgbWV0aG9kPVwicGF0Y2hcIlxuICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAgICAgb25TdWNjZXNzPXtvblNhdmV9XG4gICAgICAgICAgICAgIGluaXRpYWxTdGF0ZT17aW5pdGlhbFN0YXRlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWhhc1NhdmVQZXJtaXNzaW9ufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbWFpbmB9PlxuICAgICAgICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICAgICAgICB0aXRsZT17dCgnYWNjb3VudCcpfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2FjY291bnRPZkN1cnJlbnRVc2VyJyl9XG4gICAgICAgICAgICAgICAgICBrZXl3b3Jkcz17dCgnYWNjb3VudCcpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgICAgICAgICAgICB7IShjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMgJiYgY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkgJiYgKFxuICAgICAgICAgICAgICAgICAgPExlYXZlV2l0aG91dFNhdmluZyAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2VkaXRgfT5cbiAgICAgICAgICAgICAgICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VBc1RpdGxlPXt1c2VBc1RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9e2BbJHt0KCdnZW5lcmFsOnVudGl0bGVkJyl9XWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPEF1dGhcbiAgICAgICAgICAgICAgICAgICAgICB1c2VBUElLZXk9e2F1dGgudXNlQVBJS2V5fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgZW1haWw9e2RhdGE/LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbj1cInVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyFoYXNTYXZlUGVybWlzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlbmRlckZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9ucy5maWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9eyFoYXNTYXZlUGVybWlzc2lvbn1cbiAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI9eyhmaWVsZCkgPT4gZmllbGQ/LmFkbWluPy5wb3NpdGlvbiAhPT0gJ3NpZGViYXInfVxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGRTY2hlbWE9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvR3V0dGVyPlxuICAgICAgICAgICAgICAgICAgPEd1dHRlclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3BheWxvYWQtc2V0dGluZ3NgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3QoJ2dlbmVyYWw6cGF5bG9hZFNldHRpbmdzJyl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhbmd1YWdlYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibGFuZ3VhZ2Utc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdnZW5lcmFsOmxhbmd1YWdlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0SWQ9XCJsYW5ndWFnZS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhbmd1YWdlT3B0aW9ucy5maW5kKChsYW5ndWFnZSkgPT4gKGxhbmd1YWdlLnZhbHVlID09PSBpMThuLmxhbmd1YWdlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtsYW5ndWFnZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdmFsdWUgfSkgPT4gKGkxOG4uY2hhbmdlTGFuZ3VhZ2UodmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFRvZ2dsZVRoZW1lIC8+XG4gICAgICAgICAgICAgICAgICA8L0d1dHRlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zaWRlYmFyLXdyYXBgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2lkZWJhcmB9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpZGViYXItc3RpY2t5LXdyYXBgfT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29sbGVjdGlvbi1hY3Rpb25zYH0+XG4gICAgICAgICAgICAgICAgICAgICAgeyhwZXJtaXNzaW9ucz8uY3JlYXRlPy5wZXJtaXNzaW9uKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayB0bz17YCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7c2x1Z30vY3JlYXRlYH0+e3QoJ2dlbmVyYWw6Y3JlYXRlTmV3Jyl9PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kb2N1bWVudC1hY3Rpb25zJHtwcmV2aWV3ID8gYCAke2Jhc2VDbGFzc31fX2RvY3VtZW50LWFjdGlvbnMtLXdpdGgtcHJldmlld2AgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7KHByZXZpZXcgJiYgKCFjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMgfHwgY29sbGVjdGlvbi52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmV2aWV3QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJldmlld1VSTD17cHJldmlld31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8uZWRpdD8uUHJldmlld0J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICB7aGFzU2F2ZVBlcm1pc3Npb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uPy5hZG1pbj8uY29tcG9uZW50cz8uZWRpdD8uU2F2ZUJ1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zaWRlYmFyLWZpZWxkc2B9PlxuICAgICAgICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9ucy5maWVsZHN9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seT17IWhhc1NhdmVQZXJtaXNzaW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXsoZmllbGQpID0+IGZpZWxkPy5hZG1pbj8ucG9zaXRpb24gPT09ICdzaWRlYmFyJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tZXRhYH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYXBpLXVybGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBUEkgVVJMXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdmFsdWU9e2FwaVVSTH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2FwaVVSTH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthcGlVUkx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT5JRDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZGF0YT8uaWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGltZXN0YW1wcyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLnVwZGF0ZWRBdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ2dlbmVyYWw6bGFzdE1vZGlmaWVkJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXREYXRlKGRhdGEudXBkYXRlZEF0LCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuY3JlYXRlZEF0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT57dCgnZ2VuZXJhbDpjcmVhdGVkJyl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pntmb3JtYXREYXRlKGRhdGEuY3JlYXRlZEF0LCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICA8L09wZXJhdGlvbkNvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdEFjY291bnQ7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRGVmYXVsdEFjY291bnQiLCJwcm9wcyIsImNvbGxlY3Rpb24iLCJkYXRhIiwicGVybWlzc2lvbnMiLCJpMThuIiwiaGFzU2F2ZVBlcm1pc3Npb24iLCJhcGlVUkwiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJhY3Rpb24iLCJvblNhdmUiLCJvblNhdmVGcm9tUHJvcHMiLCJzbHVnIiwiZmllbGRzIiwiYWRtaW4iLCJ1c2VBc1RpdGxlIiwicHJldmlldyIsInRpbWVzdGFtcHMiLCJhdXRoIiwicmVmcmVzaENvb2tpZUFzeW5jIiwidXNlQXV0aCIsInVzZUNvbmZpZyIsImRhdGVGb3JtYXQiLCJyb3V0ZXMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJsYW5ndWFnZU9wdGlvbnMiLCJPYmplY3QiLCJlbnRyaWVzIiwib3B0aW9ucyIsInJlc291cmNlcyIsIm1hcCIsImxhbmd1YWdlIiwicmVzb3VyY2UiLCJsYWJlbCIsImdlbmVyYWwiLCJ0aGlzTGFuZ3VhZ2UiLCJ2YWx1ZSIsInVzZUNhbGxiYWNrIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiUmVhY3QiLCJGcmFnbWVudCIsIkxvYWRpbmdPdmVybGF5VG9nZ2xlIiwibmFtZSIsInNob3ciLCJ0eXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwiT3BlcmF0aW9uQ29udGV4dCIsIlByb3ZpZGVyIiwiRm9ybSIsIm1ldGhvZCIsIm9uU3VjY2VzcyIsImRpc2FibGVkIiwiTWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJrZXl3b3JkcyIsIkV5ZWJyb3ciLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImF1dG9zYXZlIiwiTGVhdmVXaXRob3V0U2F2aW5nIiwiR3V0dGVyIiwiaDEiLCJSZW5kZXJUaXRsZSIsImZhbGxiYWNrIiwiQXV0aCIsInVzZUFQSUtleSIsImVtYWlsIiwib3BlcmF0aW9uIiwicmVhZE9ubHkiLCJSZW5kZXJGaWVsZHMiLCJmaWVsZCIsInBvc2l0aW9uIiwiZmllbGRUeXBlcyIsImZpZWxkU2NoZW1hIiwiaDMiLCJMYWJlbCIsImh0bWxGb3IiLCJSZWFjdFNlbGVjdCIsImlucHV0SWQiLCJmaW5kIiwib25DaGFuZ2UiLCJjaGFuZ2VMYW5ndWFnZSIsIlRvZ2dsZVRoZW1lIiwidWwiLCJjcmVhdGUiLCJwZXJtaXNzaW9uIiwibGkiLCJMaW5rIiwidG8iLCJQcmV2aWV3QnV0dG9uIiwiZ2VuZXJhdGVQcmV2aWV3VVJMIiwiQ3VzdG9tQ29tcG9uZW50IiwiY29tcG9uZW50cyIsImVkaXQiLCJTYXZlIiwiU2F2ZUJ1dHRvbiIsInNwYW4iLCJDb3B5VG9DbGlwYm9hcmQiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsImlkIiwidXBkYXRlZEF0IiwiZm9ybWF0RGF0ZSIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFpT0E7OztlQUFBOzs7NkRBak9tQzs4QkFDZDs0QkFDVTtzQkFDTDs4REFDTjsyREFDSDtvRUFDUztvQkFDTDttRUFDSTtzRUFDRztpRUFDTDtrRUFDQzt5RUFDTzsyREFDZDsyREFDQTtpQ0FFZ0I7MkJBQ0w7c0JBQ0w7a0VBQ0M7NERBQ047dUJBRW1COzBCQUNWO3FCQUNIO1FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMs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