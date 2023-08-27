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
var _Auth = require("../../utilities/Auth");
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../hooks/usePayloadAPI"));
var _Eyebrow = /*#__PURE__*/ _interop_require_default(require("../../elements/Eyebrow"));
var _StepNav = require("../../elements/StepNav");
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
var _Compare = /*#__PURE__*/ _interop_require_default(require("./Compare"));
var _shared = require("./shared");
var _Restore = /*#__PURE__*/ _interop_require_default(require("./Restore"));
var _SelectLocales = /*#__PURE__*/ _interop_require_default(require("./SelectLocales"));
var _RenderFieldsToDiff = /*#__PURE__*/ _interop_require_default(require("./RenderFieldsToDiff"));
var _fields = /*#__PURE__*/ _interop_require_default(require("./RenderFieldsToDiff/fields"));
var _getTranslation = require("../../../../utilities/getTranslation");
var _types = require("../../../../fields/config/types");
var _Locale = require("../../utilities/Locale");
var _Gutter = require("../../elements/Gutter");
var _formatDate = require("../../../utilities/formatDate");
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var baseClass = "view-version";
var VersionView = function(param) {
    var collection = param.collection, global = param.global;
    var _compareValue, _compareValue1, _doc, _i18n, _compareDoc, _compareValue2, _compareValue3, _docPermissions_update, _docPermissions, _doc1, _doc2, _doc3;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, admin = _useConfig_routes.admin, api = _useConfig_routes.api, dateFormat = _useConfig.admin.dateFormat, localization = _useConfig.localization;
    var setStepNav = (0, _StepNav.useStepNav)().setStepNav;
    var _useRouteMatch = (0, _reactrouterdom.useRouteMatch)(), _useRouteMatch_params = _useRouteMatch.params, id = _useRouteMatch_params.id, versionID = _useRouteMatch_params.versionID;
    var _useState = _sliced_to_array((0, _react.useState)(_shared.mostRecentVersionOption), 2), compareValue = _useState[0], setCompareValue = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(function() {
        return localization ? localization.locales : [];
    }), 1), localeOptions = _useState1[0];
    var _useState2 = _sliced_to_array((0, _react.useState)(localeOptions), 2), locales = _useState2[0], setLocales = _useState2[1];
    var permissions = (0, _Auth.useAuth)().permissions;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var _useTranslation = (0, _reacti18next.useTranslation)("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var docPermissions = (0, _DocumentInfo.useDocumentInfo)().docPermissions;
    var originalDocFetchURL;
    var versionFetchURL;
    var entityLabel;
    var fields;
    var fieldPermissions;
    var compareBaseURL;
    var slug;
    var parentID;
    if (collection) {
        slug = collection.slug;
        originalDocFetchURL = "".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id);
        versionFetchURL = "".concat(serverURL).concat(api, "/").concat(slug, "/versions/").concat(versionID);
        compareBaseURL = "".concat(serverURL).concat(api, "/").concat(slug, "/versions");
        entityLabel = (0, _getTranslation.getTranslation)(collection.labels.singular, i18n);
        parentID = id;
        fields = collection.fields;
        fieldPermissions = permissions.collections[collection.slug].fields;
    }
    if (global) {
        slug = global.slug;
        originalDocFetchURL = "".concat(serverURL).concat(api, "/globals/").concat(slug);
        versionFetchURL = "".concat(serverURL).concat(api, "/globals/").concat(slug, "/versions/").concat(versionID);
        compareBaseURL = "".concat(serverURL).concat(api, "/globals/").concat(slug, "/versions");
        entityLabel = (0, _getTranslation.getTranslation)(global.label, i18n);
        fields = global.fields;
        fieldPermissions = permissions.globals[global.slug].fields;
    }
    var compareFetchURL = ((_compareValue = compareValue) === null || _compareValue === void 0 ? void 0 : _compareValue.value) === "mostRecent" || ((_compareValue1 = compareValue) === null || _compareValue1 === void 0 ? void 0 : _compareValue1.value) === "published" ? originalDocFetchURL : "".concat(compareBaseURL, "/").concat(compareValue.value);
    var _usePayloadAPI1 = _sliced_to_array((0, _usePayloadAPI.default)(versionFetchURL, {
        initialParams: {
            locale: "*",
            depth: 1
        }
    }), 1), _usePayloadAPI_ = _usePayloadAPI1[0], doc = _usePayloadAPI_.data, isLoadingData = _usePayloadAPI_.isLoading;
    var _usePayloadAPI2 = _sliced_to_array((0, _usePayloadAPI.default)(originalDocFetchURL, {
        initialParams: {
            locale: "*",
            depth: 1
        }
    }), 1), _usePayloadAPI_1 = _usePayloadAPI2[0], publishedDoc = _usePayloadAPI_1.data;
    var _usePayloadAPI3 = _sliced_to_array((0, _usePayloadAPI.default)(originalDocFetchURL, {
        initialParams: {
            locale: "*",
            depth: 1,
            draft: true
        }
    }), 1), _usePayloadAPI_2 = _usePayloadAPI3[0], mostRecentDoc = _usePayloadAPI_2.data;
    var _usePayloadAPI4 = _sliced_to_array((0, _usePayloadAPI.default)(compareFetchURL, {
        initialParams: {
            locale: "*",
            depth: 1,
            draft: "true"
        }
    }), 1), _usePayloadAPI_3 = _usePayloadAPI4[0], compareDoc = _usePayloadAPI_3.data;
    (0, _react.useEffect)(function() {
        var nav = [];
        if (collection) {
            var _doc, _i18n;
            var docLabel = "";
            if (mostRecentDoc) {
                var useAsTitle = collection.admin.useAsTitle;
                if (useAsTitle !== "id") {
                    var titleField = collection.fields.find(function(field) {
                        return (0, _types.fieldAffectsData)(field) && field.name === useAsTitle;
                    });
                    if (titleField && mostRecentDoc[useAsTitle]) {
                        if (titleField.localized) {
                            var _mostRecentDoc_useAsTitle;
                            docLabel = (_mostRecentDoc_useAsTitle = mostRecentDoc[useAsTitle]) === null || _mostRecentDoc_useAsTitle === void 0 ? void 0 : _mostRecentDoc_useAsTitle[locale];
                        } else {
                            docLabel = mostRecentDoc[useAsTitle];
                        }
                    } else {
                        docLabel = "[".concat(t("general:untitled"), "]");
                    }
                } else {
                    docLabel = mostRecentDoc.id;
                }
            }
            nav = [
                {
                    url: "".concat(admin, "/collections/").concat(collection.slug),
                    label: (0, _getTranslation.getTranslation)(collection.labels.plural, i18n)
                },
                {
                    label: docLabel,
                    url: "".concat(admin, "/collections/").concat(collection.slug, "/").concat(id)
                },
                {
                    label: "Versions",
                    url: "".concat(admin, "/collections/").concat(collection.slug, "/").concat(id, "/versions")
                },
                {
                    label: ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.createdAt) ? (0, _formatDate.formatDate)(doc.createdAt, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language) : ""
                }
            ];
        }
        if (global) {
            var _doc1, _i18n1;
            nav = [
                {
                    url: "".concat(admin, "/globals/").concat(global.slug),
                    label: global.label
                },
                {
                    label: "Versions",
                    url: "".concat(admin, "/globals/").concat(global.slug, "/versions")
                },
                {
                    label: ((_doc1 = doc) === null || _doc1 === void 0 ? void 0 : _doc1.createdAt) ? (0, _formatDate.formatDate)(doc.createdAt, dateFormat, (_i18n1 = i18n) === null || _i18n1 === void 0 ? void 0 : _i18n1.language) : ""
                }
            ];
        }
        setStepNav(nav);
    }, [
        setStepNav,
        collection,
        global,
        dateFormat,
        doc,
        mostRecentDoc,
        admin,
        id,
        locale,
        t,
        i18n
    ]);
    var metaTitle;
    var metaDesc;
    var formattedCreatedAt = ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.createdAt) ? (0, _formatDate.formatDate)(doc.createdAt, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language) : "";
    if (collection) {
        var _collection_admin, _collection;
        var useAsTitle = ((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : _collection_admin.useAsTitle) || "id";
        metaTitle = "".concat(t("version"), " - ").concat(formattedCreatedAt, " - ").concat(doc[useAsTitle], " - ").concat(entityLabel);
        metaDesc = t("viewingVersion", {
            documentTitle: doc[useAsTitle],
            entityLabel: entityLabel
        });
    }
    if (global) {
        metaTitle = "".concat(t("version"), " - ").concat(formattedCreatedAt, " - ").concat(entityLabel);
        metaDesc = t("viewingVersionGlobal", {
            entityLabel: entityLabel
        });
    }
    var comparison = (_compareDoc = compareDoc) === null || _compareDoc === void 0 ? void 0 : _compareDoc.version;
    if (((_compareValue2 = compareValue) === null || _compareValue2 === void 0 ? void 0 : _compareValue2.value) === "mostRecent") {
        comparison = mostRecentDoc;
    }
    if (((_compareValue3 = compareValue) === null || _compareValue3 === void 0 ? void 0 : _compareValue3.value) === "published") {
        comparison = publishedDoc;
    }
    var canUpdate = (_docPermissions = docPermissions) === null || _docPermissions === void 0 ? void 0 : (_docPermissions_update = _docPermissions.update) === null || _docPermissions_update === void 0 ? void 0 : _docPermissions_update.permission;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: metaTitle,
        description: metaDesc
    }), /*#__PURE__*/ _react.default.createElement(_Eyebrow.default, null), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__intro")
    }, t("versionCreatedOn", {
        version: t(((_doc1 = doc) === null || _doc1 === void 0 ? void 0 : _doc1.autosave) ? "autosavedVersion" : "version")
    })), /*#__PURE__*/ _react.default.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, /*#__PURE__*/ _react.default.createElement("h2", null, formattedCreatedAt), canUpdate && /*#__PURE__*/ _react.default.createElement(_Restore.default, {
        className: "".concat(baseClass, "__restore"),
        collection: collection,
        global: global,
        originalDocID: id,
        versionID: versionID,
        versionDate: formattedCreatedAt
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__controls")
    }, /*#__PURE__*/ _react.default.createElement(_Compare.default, {
        publishedDoc: publishedDoc,
        versionID: versionID,
        baseURL: compareBaseURL,
        parentID: parentID,
        value: compareValue,
        onChange: setCompareValue
    }), localization && /*#__PURE__*/ _react.default.createElement(_SelectLocales.default, {
        onChange: setLocales,
        options: localeOptions,
        value: locales
    })), ((_doc2 = doc) === null || _doc2 === void 0 ? void 0 : _doc2.version) && /*#__PURE__*/ _react.default.createElement(_RenderFieldsToDiff.default, {
        locales: locales ? locales.map(function(param) {
            var code = param.code;
            return code;
        }) : [],
        fields: fields,
        fieldComponents: _fields.default,
        fieldPermissions: fieldPermissions,
        version: (_doc3 = doc) === null || _doc3 === void 0 ? void 0 : _doc3.version,
        comparison: comparison
    }))));
};
var _default = VersionView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vVmVyc2lvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJztcbmltcG9ydCBFeWVicm93IGZyb20gJy4uLy4uL2VsZW1lbnRzL0V5ZWJyb3cnO1xuaW1wb3J0IHsgdXNlU3RlcE5hdiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1N0ZXBOYXYnO1xuaW1wb3J0IHsgU3RlcE5hdkl0ZW0gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9TdGVwTmF2L3R5cGVzJztcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJztcbmltcG9ydCB7IExvY2FsZU9wdGlvbiwgQ29tcGFyZU9wdGlvbiwgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBDb21wYXJlVmVyc2lvbiBmcm9tICcuL0NvbXBhcmUnO1xuaW1wb3J0IHsgbW9zdFJlY2VudFZlcnNpb25PcHRpb24gfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgUmVzdG9yZSBmcm9tICcuL1Jlc3RvcmUnO1xuaW1wb3J0IFNlbGVjdExvY2FsZXMgZnJvbSAnLi9TZWxlY3RMb2NhbGVzJztcbmltcG9ydCBSZW5kZXJGaWVsZHNUb0RpZmYgZnJvbSAnLi9SZW5kZXJGaWVsZHNUb0RpZmYnO1xuaW1wb3J0IGZpZWxkQ29tcG9uZW50cyBmcm9tICcuL1JlbmRlckZpZWxkc1RvRGlmZi9maWVsZHMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgRmllbGQsIEZpZWxkQWZmZWN0aW5nRGF0YSwgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRmllbGRQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL2F1dGgnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9HdXR0ZXInO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndmlldy12ZXJzaW9uJztcblxuY29uc3QgVmVyc2lvblZpZXc6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbGxlY3Rpb24sIGdsb2JhbCB9KSA9PiB7XG4gIGNvbnN0IHsgc2VydmVyVVJMLCByb3V0ZXM6IHsgYWRtaW4sIGFwaSB9LCBhZG1pbjogeyBkYXRlRm9ybWF0IH0sIGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgc2V0U3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpO1xuICBjb25zdCB7IHBhcmFtczogeyBpZCwgdmVyc2lvbklEIH0gfSA9IHVzZVJvdXRlTWF0Y2g8eyBpZD86IHN0cmluZywgdmVyc2lvbklEOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgW2NvbXBhcmVWYWx1ZSwgc2V0Q29tcGFyZVZhbHVlXSA9IHVzZVN0YXRlPENvbXBhcmVPcHRpb24+KG1vc3RSZWNlbnRWZXJzaW9uT3B0aW9uKTtcbiAgY29uc3QgW2xvY2FsZU9wdGlvbnNdID0gdXNlU3RhdGU8TG9jYWxlT3B0aW9uW10+KCgpID0+IChsb2NhbGl6YXRpb24gPyBsb2NhbGl6YXRpb24ubG9jYWxlcyA6IFtdKSk7XG4gIGNvbnN0IFtsb2NhbGVzLCBzZXRMb2NhbGVzXSA9IHVzZVN0YXRlPExvY2FsZU9wdGlvbltdPihsb2NhbGVPcHRpb25zKTtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKTtcbiAgY29uc3QgeyBkb2NQZXJtaXNzaW9ucyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG5cbiAgbGV0IG9yaWdpbmFsRG9jRmV0Y2hVUkw6IHN0cmluZztcbiAgbGV0IHZlcnNpb25GZXRjaFVSTDogc3RyaW5nO1xuICBsZXQgZW50aXR5TGFiZWw6IHN0cmluZztcbiAgbGV0IGZpZWxkczogRmllbGRbXTtcbiAgbGV0IGZpZWxkUGVybWlzc2lvbnM6IFJlY29yZDxzdHJpbmcsIEZpZWxkUGVybWlzc2lvbnM+O1xuICBsZXQgY29tcGFyZUJhc2VVUkw6IHN0cmluZztcbiAgbGV0IHNsdWc6IHN0cmluZztcbiAgbGV0IHBhcmVudElEOiBzdHJpbmc7XG5cbiAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAoeyBzbHVnIH0gPSBjb2xsZWN0aW9uKTtcbiAgICBvcmlnaW5hbERvY0ZldGNoVVJMID0gYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9LyR7aWR9YDtcbiAgICB2ZXJzaW9uRmV0Y2hVUkwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vdmVyc2lvbnMvJHt2ZXJzaW9uSUR9YDtcbiAgICBjb21wYXJlQmFzZVVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS92ZXJzaW9uc2A7XG4gICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bik7XG4gICAgcGFyZW50SUQgPSBpZDtcbiAgICBmaWVsZHMgPSBjb2xsZWN0aW9uLmZpZWxkcztcbiAgICBmaWVsZFBlcm1pc3Npb25zID0gcGVybWlzc2lvbnMuY29sbGVjdGlvbnNbY29sbGVjdGlvbi5zbHVnXS5maWVsZHM7XG4gIH1cblxuICBpZiAoZ2xvYmFsKSB7XG4gICAgKHsgc2x1ZyB9ID0gZ2xvYmFsKTtcbiAgICBvcmlnaW5hbERvY0ZldGNoVVJMID0gYCR7c2VydmVyVVJMfSR7YXBpfS9nbG9iYWxzLyR7c2x1Z31gO1xuICAgIHZlcnNpb25GZXRjaFVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0vZ2xvYmFscy8ke3NsdWd9L3ZlcnNpb25zLyR7dmVyc2lvbklEfWA7XG4gICAgY29tcGFyZUJhc2VVUkwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtzbHVnfS92ZXJzaW9uc2A7XG4gICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihnbG9iYWwubGFiZWwsIGkxOG4pO1xuICAgIGZpZWxkcyA9IGdsb2JhbC5maWVsZHM7XG4gICAgZmllbGRQZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zLmdsb2JhbHNbZ2xvYmFsLnNsdWddLmZpZWxkcztcbiAgfVxuXG4gIGNvbnN0IGNvbXBhcmVGZXRjaFVSTCA9IGNvbXBhcmVWYWx1ZT8udmFsdWUgPT09ICdtb3N0UmVjZW50JyB8fCBjb21wYXJlVmFsdWU/LnZhbHVlID09PSAncHVibGlzaGVkJyA/IG9yaWdpbmFsRG9jRmV0Y2hVUkwgOiBgJHtjb21wYXJlQmFzZVVSTH0vJHtjb21wYXJlVmFsdWUudmFsdWV9YDtcblxuICBjb25zdCBbeyBkYXRhOiBkb2MsIGlzTG9hZGluZzogaXNMb2FkaW5nRGF0YSB9XSA9IHVzZVBheWxvYWRBUEkodmVyc2lvbkZldGNoVVJMLCB7IGluaXRpYWxQYXJhbXM6IHsgbG9jYWxlOiAnKicsIGRlcHRoOiAxIH0gfSk7XG4gIGNvbnN0IFt7IGRhdGE6IHB1Ymxpc2hlZERvYyB9XSA9IHVzZVBheWxvYWRBUEkob3JpZ2luYWxEb2NGZXRjaFVSTCwgeyBpbml0aWFsUGFyYW1zOiB7IGxvY2FsZTogJyonLCBkZXB0aDogMSB9IH0pO1xuICBjb25zdCBbeyBkYXRhOiBtb3N0UmVjZW50RG9jIH1dID0gdXNlUGF5bG9hZEFQSShvcmlnaW5hbERvY0ZldGNoVVJMLCB7IGluaXRpYWxQYXJhbXM6IHsgbG9jYWxlOiAnKicsIGRlcHRoOiAxLCBkcmFmdDogdHJ1ZSB9IH0pO1xuICBjb25zdCBbeyBkYXRhOiBjb21wYXJlRG9jIH1dID0gdXNlUGF5bG9hZEFQSShjb21wYXJlRmV0Y2hVUkwsIHsgaW5pdGlhbFBhcmFtczogeyBsb2NhbGU6ICcqJywgZGVwdGg6IDEsIGRyYWZ0OiAndHJ1ZScgfSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuYXY6IFN0ZXBOYXZJdGVtW10gPSBbXTtcblxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICBsZXQgZG9jTGFiZWwgPSAnJztcblxuICAgICAgaWYgKG1vc3RSZWNlbnREb2MpIHtcbiAgICAgICAgY29uc3QgeyB1c2VBc1RpdGxlIH0gPSBjb2xsZWN0aW9uLmFkbWluO1xuXG4gICAgICAgIGlmICh1c2VBc1RpdGxlICE9PSAnaWQnKSB7XG4gICAgICAgICAgY29uc3QgdGl0bGVGaWVsZCA9IGNvbGxlY3Rpb24uZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSB1c2VBc1RpdGxlKSBhcyBGaWVsZEFmZmVjdGluZ0RhdGE7XG5cbiAgICAgICAgICBpZiAodGl0bGVGaWVsZCAmJiBtb3N0UmVjZW50RG9jW3VzZUFzVGl0bGVdKSB7XG4gICAgICAgICAgICBpZiAodGl0bGVGaWVsZC5sb2NhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgZG9jTGFiZWwgPSBtb3N0UmVjZW50RG9jW3VzZUFzVGl0bGVdPy5bbG9jYWxlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvY0xhYmVsID0gbW9zdFJlY2VudERvY1t1c2VBc1RpdGxlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jTGFiZWwgPSBgWyR7dCgnZ2VuZXJhbDp1bnRpdGxlZCcpfV1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2NMYWJlbCA9IG1vc3RSZWNlbnREb2MuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmF2ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9YCxcbiAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbi5sYWJlbHMucGx1cmFsLCBpMThuKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBkb2NMYWJlbCxcbiAgICAgICAgICB1cmw6IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vJHtpZH1gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdWZXJzaW9ucycsXG4gICAgICAgICAgdXJsOiBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7aWR9L3ZlcnNpb25zYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBkb2M/LmNyZWF0ZWRBdCA/IGZvcm1hdERhdGUoZG9jLmNyZWF0ZWRBdCwgZGF0ZUZvcm1hdCwgaTE4bj8ubGFuZ3VhZ2UpIDogJycsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWwpIHtcbiAgICAgIG5hdiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogYCR7YWRtaW59L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gLFxuICAgICAgICAgIGxhYmVsOiBnbG9iYWwubGFiZWwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1ZlcnNpb25zJyxcbiAgICAgICAgICB1cmw6IGAke2FkbWlufS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9L3ZlcnNpb25zYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBkb2M/LmNyZWF0ZWRBdCA/IGZvcm1hdERhdGUoZG9jLmNyZWF0ZWRBdCwgZGF0ZUZvcm1hdCwgaTE4bj8ubGFuZ3VhZ2UpIDogJycsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIHNldFN0ZXBOYXYobmF2KTtcbiAgfSwgW3NldFN0ZXBOYXYsIGNvbGxlY3Rpb24sIGdsb2JhbCwgZGF0ZUZvcm1hdCwgZG9jLCBtb3N0UmVjZW50RG9jLCBhZG1pbiwgaWQsIGxvY2FsZSwgdCwgaTE4bl0pO1xuXG4gIGxldCBtZXRhVGl0bGU6IHN0cmluZztcbiAgbGV0IG1ldGFEZXNjOiBzdHJpbmc7XG4gIGNvbnN0IGZvcm1hdHRlZENyZWF0ZWRBdCA9IGRvYz8uY3JlYXRlZEF0ID8gZm9ybWF0RGF0ZShkb2MuY3JlYXRlZEF0LCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSkgOiAnJztcblxuICBpZiAoY29sbGVjdGlvbikge1xuICAgIGNvbnN0IHVzZUFzVGl0bGUgPSBjb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZSB8fCAnaWQnO1xuICAgIG1ldGFUaXRsZSA9IGAke3QoJ3ZlcnNpb24nKX0gLSAke2Zvcm1hdHRlZENyZWF0ZWRBdH0gLSAke2RvY1t1c2VBc1RpdGxlXX0gLSAke2VudGl0eUxhYmVsfWA7XG4gICAgbWV0YURlc2MgPSB0KCd2aWV3aW5nVmVyc2lvbicsIHsgZG9jdW1lbnRUaXRsZTogZG9jW3VzZUFzVGl0bGVdLCBlbnRpdHlMYWJlbCB9KTtcbiAgfVxuXG4gIGlmIChnbG9iYWwpIHtcbiAgICBtZXRhVGl0bGUgPSBgJHt0KCd2ZXJzaW9uJyl9IC0gJHtmb3JtYXR0ZWRDcmVhdGVkQXR9IC0gJHtlbnRpdHlMYWJlbH1gO1xuICAgIG1ldGFEZXNjID0gdCgndmlld2luZ1ZlcnNpb25HbG9iYWwnLCB7IGVudGl0eUxhYmVsIH0pO1xuICB9XG5cbiAgbGV0IGNvbXBhcmlzb24gPSBjb21wYXJlRG9jPy52ZXJzaW9uO1xuXG4gIGlmIChjb21wYXJlVmFsdWU/LnZhbHVlID09PSAnbW9zdFJlY2VudCcpIHtcbiAgICBjb21wYXJpc29uID0gbW9zdFJlY2VudERvYztcbiAgfVxuXG4gIGlmIChjb21wYXJlVmFsdWU/LnZhbHVlID09PSAncHVibGlzaGVkJykge1xuICAgIGNvbXBhcmlzb24gPSBwdWJsaXNoZWREb2M7XG4gIH1cblxuICBjb25zdCBjYW5VcGRhdGUgPSBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9e21ldGFUaXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YURlc2N9XG4gICAgICAgIC8+XG4gICAgICAgIDxFeWVicm93IC8+XG4gICAgICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ludHJvYH0+XG4gICAgICAgICAgICB7dCgndmVyc2lvbkNyZWF0ZWRPbicsIHsgdmVyc2lvbjogdChkb2M/LmF1dG9zYXZlID8gJ2F1dG9zYXZlZFZlcnNpb24nIDogJ3ZlcnNpb24nKSB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIHtmb3JtYXR0ZWRDcmVhdGVkQXR9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAge2NhblVwZGF0ZSAmJiAoXG4gICAgICAgICAgICAgIDxSZXN0b3JlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZXN0b3JlYH1cbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgIGdsb2JhbD17Z2xvYmFsfVxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRG9jSUQ9e2lkfVxuICAgICAgICAgICAgICAgIHZlcnNpb25JRD17dmVyc2lvbklEfVxuICAgICAgICAgICAgICAgIHZlcnNpb25EYXRlPXtmb3JtYXR0ZWRDcmVhdGVkQXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250cm9sc2B9PlxuICAgICAgICAgICAgPENvbXBhcmVWZXJzaW9uXG4gICAgICAgICAgICAgIHB1Ymxpc2hlZERvYz17cHVibGlzaGVkRG9jfVxuICAgICAgICAgICAgICB2ZXJzaW9uSUQ9e3ZlcnNpb25JRH1cbiAgICAgICAgICAgICAgYmFzZVVSTD17Y29tcGFyZUJhc2VVUkx9XG4gICAgICAgICAgICAgIHBhcmVudElEPXtwYXJlbnRJRH1cbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhcmVWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENvbXBhcmVWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7bG9jYWxpemF0aW9uICYmIChcbiAgICAgICAgICAgICAgPFNlbGVjdExvY2FsZXNcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0TG9jYWxlc31cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtsb2NhbGVPcHRpb25zfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhbGVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtkb2M/LnZlcnNpb24gJiYgKFxuICAgICAgICAgICAgPFJlbmRlckZpZWxkc1RvRGlmZlxuICAgICAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzID8gbG9jYWxlcy5tYXAoKHsgY29kZSB9KSA9PiBjb2RlKSA6IFtdfVxuICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgZmllbGRDb21wb25lbnRzPXtmaWVsZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgIGZpZWxkUGVybWlzc2lvbnM9e2ZpZWxkUGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgIHZlcnNpb249e2RvYz8udmVyc2lvbn1cbiAgICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HdXR0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyc2lvblZpZXc7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiVmVyc2lvblZpZXciLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiY29tcGFyZVZhbHVlIiwiZG9jIiwiaTE4biIsImNvbXBhcmVEb2MiLCJkb2NQZXJtaXNzaW9ucyIsInVzZUNvbmZpZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFkbWluIiwiYXBpIiwiZGF0ZUZvcm1hdCIsImxvY2FsaXphdGlvbiIsInNldFN0ZXBOYXYiLCJ1c2VTdGVwTmF2IiwidXNlUm91dGVNYXRjaCIsInBhcmFtcyIsImlkIiwidmVyc2lvbklEIiwidXNlU3RhdGUiLCJtb3N0UmVjZW50VmVyc2lvbk9wdGlvbiIsInNldENvbXBhcmVWYWx1ZSIsImxvY2FsZXMiLCJsb2NhbGVPcHRpb25zIiwic2V0TG9jYWxlcyIsInBlcm1pc3Npb25zIiwidXNlQXV0aCIsInVzZUxvY2FsZSIsImNvZGUiLCJsb2NhbGUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ1c2VEb2N1bWVudEluZm8iLCJvcmlnaW5hbERvY0ZldGNoVVJMIiwidmVyc2lvbkZldGNoVVJMIiwiZW50aXR5TGFiZWwiLCJmaWVsZHMiLCJmaWVsZFBlcm1pc3Npb25zIiwiY29tcGFyZUJhc2VVUkwiLCJzbHVnIiwicGFyZW50SUQiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwiY29sbGVjdGlvbnMiLCJsYWJlbCIsImdsb2JhbHMiLCJjb21wYXJlRmV0Y2hVUkwiLCJ2YWx1ZSIsInVzZVBheWxvYWRBUEkiLCJpbml0aWFsUGFyYW1zIiwiZGVwdGgiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nRGF0YSIsInB1Ymxpc2hlZERvYyIsImRyYWZ0IiwibW9zdFJlY2VudERvYyIsInVzZUVmZmVjdCIsIm5hdiIsImRvY0xhYmVsIiwidXNlQXNUaXRsZSIsInRpdGxlRmllbGQiLCJmaW5kIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsImxvY2FsaXplZCIsInVybCIsInBsdXJhbCIsImNyZWF0ZWRBdCIsImZvcm1hdERhdGUiLCJsYW5ndWFnZSIsIm1ldGFUaXRsZSIsIm1ldGFEZXNjIiwiZm9ybWF0dGVkQ3JlYXRlZEF0IiwiZG9jdW1lbnRUaXRsZSIsImNvbXBhcmlzb24iLCJ2ZXJzaW9uIiwiY2FuVXBkYXRlIiwidXBkYXRlIiwicGVybWlzc2lvbiIsIlJlYWN0IiwiRnJhZ21lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkV5ZWJyb3ciLCJHdXR0ZXIiLCJhdXRvc2F2ZSIsImhlYWRlciIsImgyIiwiUmVzdG9yZSIsIm9yaWdpbmFsRG9jSUQiLCJ2ZXJzaW9uRGF0ZSIsIkNvbXBhcmVWZXJzaW9uIiwiYmFzZVVSTCIsIm9uQ2hhbmdlIiwiU2VsZWN0TG9jYWxlcyIsIm9wdGlvbnMiLCJSZW5kZXJGaWVsZHNUb0RpZmYiLCJtYXAiLCJmaWVsZENvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBc09BOzs7ZUFBQTs7OzZEQXRPMkM7OEJBQ2I7NEJBQ0M7c0JBQ0w7b0JBQ0Y7NEJBQ1E7b0VBQ047OERBQ047dUJBQ087MkRBRVY7OERBRVU7c0JBQ2E7OERBQ3BCO29FQUNNO3lFQUNLOzZEQUNIOzhCQUNHO3FCQUM2QjtzQkFFbEM7c0JBQ0g7MEJBQ0k7UUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGNBQStCO1FBQUdDLG1CQUFBQSxZQUFZQyxlQUFBQTtRQTBDMUJDLGVBQXdDQSxnQkF5RXJDQyxNQUF1REMsT0FhakVDLGFBRWJILGdCQUlBQSxnQkFJY0ksd0JBQUFBLGlCQVk0QkgsT0FtQ3JDQSxPQU1ZQTtJQTlMckIsSUFBbUZJLGFBQUFBLElBQUFBLGlCQUFTLEtBQXBGQyxZQUEyRUQsV0FBM0VDLCtCQUEyRUQsV0FBaEVFLFFBQVVDLDBCQUFBQSxPQUFPQyx3QkFBQUEsS0FBT0QsQUFBU0UsYUFBK0JMLFdBQXhDRyxNQUFTRSxZQUFjQyxlQUFpQk4sV0FBakJNO0lBQ2xFLElBQU0sQUFBRUMsYUFBZUMsSUFBQUEsbUJBQVUsSUFBekJEO0lBQ1IsSUFBc0NFLGlCQUFBQSxJQUFBQSw2QkFBYSw2QkFBYkEsZUFBOUJDLFFBQVVDLDJCQUFBQSxJQUFJQyxrQ0FBQUE7SUFDdEIsSUFBd0NDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQWdCQywrQkFBdUIsT0FBaEZuQixlQUFpQ2tCLGNBQW5CRSxrQkFBbUJGO0lBQ3hDLElBQXdCQSw4QkFBQUEsSUFBQUEsZUFBUSxFQUFpQjtlQUFPUCxlQUFlQSxhQUFhVSxPQUFPLEdB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