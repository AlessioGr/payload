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
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import usePayloadAPI from "../../../hooks/usePayloadAPI";
import Eyebrow from "../../elements/Eyebrow";
import { useStepNav } from "../../elements/StepNav";
import Meta from "../../utilities/Meta";
import CompareVersion from "./Compare";
import { mostRecentVersionOption } from "./shared";
import Restore from "./Restore";
import SelectLocales from "./SelectLocales";
import RenderFieldsToDiff from "./RenderFieldsToDiff";
import fieldComponents from "./RenderFieldsToDiff/fields";
import { getTranslation } from "../../../../utilities/getTranslation";
import { fieldAffectsData } from "../../../../fields/config/types";
import { useLocale } from "../../utilities/Locale";
import { Gutter } from "../../elements/Gutter";
import { formatDate } from "../../../utilities/formatDate";
import "./index.scss";
var baseClass = "view-version";
var VersionView = function(param) {
    var collection = param.collection, global = param.global;
    var _compareValue, _compareValue1, _doc, _i18n, _compareDoc, _compareValue2, _compareValue3, _docPermissions_update, _docPermissions, _doc1, _doc2, _doc3;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, admin = _useConfig_routes.admin, api = _useConfig_routes.api, dateFormat = _useConfig.admin.dateFormat, localization = _useConfig.localization;
    var setStepNav = useStepNav().setStepNav;
    var _useRouteMatch = useRouteMatch(), _useRouteMatch_params = _useRouteMatch.params, id = _useRouteMatch_params.id, versionID = _useRouteMatch_params.versionID;
    var _useState = _sliced_to_array(useState(mostRecentVersionOption), 2), compareValue = _useState[0], setCompareValue = _useState[1];
    var _useState1 = _sliced_to_array(useState(function() {
        return localization ? localization.locales : [];
    }), 1), localeOptions = _useState1[0];
    var _useState2 = _sliced_to_array(useState(localeOptions), 2), locales = _useState2[0], setLocales = _useState2[1];
    var permissions = useAuth().permissions;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useTranslation = useTranslation("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var docPermissions = useDocumentInfo().docPermissions;
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
        entityLabel = getTranslation(collection.labels.singular, i18n);
        parentID = id;
        fields = collection.fields;
        fieldPermissions = permissions.collections[collection.slug].fields;
    }
    if (global) {
        slug = global.slug;
        originalDocFetchURL = "".concat(serverURL).concat(api, "/globals/").concat(slug);
        versionFetchURL = "".concat(serverURL).concat(api, "/globals/").concat(slug, "/versions/").concat(versionID);
        compareBaseURL = "".concat(serverURL).concat(api, "/globals/").concat(slug, "/versions");
        entityLabel = getTranslation(global.label, i18n);
        fields = global.fields;
        fieldPermissions = permissions.globals[global.slug].fields;
    }
    var compareFetchURL = ((_compareValue = compareValue) === null || _compareValue === void 0 ? void 0 : _compareValue.value) === "mostRecent" || ((_compareValue1 = compareValue) === null || _compareValue1 === void 0 ? void 0 : _compareValue1.value) === "published" ? originalDocFetchURL : "".concat(compareBaseURL, "/").concat(compareValue.value);
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI(versionFetchURL, {
        initialParams: {
            locale: "*",
            depth: 1
        }
    }), 1), _usePayloadAPI_ = _usePayloadAPI[0], doc = _usePayloadAPI_.data, isLoadingData = _usePayloadAPI_.isLoading;
    var _usePayloadAPI1 = _sliced_to_array(usePayloadAPI(originalDocFetchURL, {
        initialParams: {
            locale: "*",
            depth: 1
        }
    }), 1), _usePayloadAPI_1 = _usePayloadAPI1[0], publishedDoc = _usePayloadAPI_1.data;
    var _usePayloadAPI2 = _sliced_to_array(usePayloadAPI(originalDocFetchURL, {
        initialParams: {
            locale: "*",
            depth: 1,
            draft: true
        }
    }), 1), _usePayloadAPI_2 = _usePayloadAPI2[0], mostRecentDoc = _usePayloadAPI_2.data;
    var _usePayloadAPI3 = _sliced_to_array(usePayloadAPI(compareFetchURL, {
        initialParams: {
            locale: "*",
            depth: 1,
            draft: "true"
        }
    }), 1), _usePayloadAPI_3 = _usePayloadAPI3[0], compareDoc = _usePayloadAPI_3.data;
    useEffect(function() {
        var nav = [];
        if (collection) {
            var _doc, _i18n;
            var docLabel = "";
            if (mostRecentDoc) {
                var useAsTitle = collection.admin.useAsTitle;
                if (useAsTitle !== "id") {
                    var titleField = collection.fields.find(function(field) {
                        return fieldAffectsData(field) && field.name === useAsTitle;
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
                    label: getTranslation(collection.labels.plural, i18n)
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
                    label: ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.createdAt) ? formatDate(doc.createdAt, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language) : ""
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
                    label: ((_doc1 = doc) === null || _doc1 === void 0 ? void 0 : _doc1.createdAt) ? formatDate(doc.createdAt, dateFormat, (_i18n1 = i18n) === null || _i18n1 === void 0 ? void 0 : _i18n1.language) : ""
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
    var formattedCreatedAt = ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.createdAt) ? formatDate(doc.createdAt, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language) : "";
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
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: metaTitle,
        description: metaDesc
    }), /*#__PURE__*/ React.createElement(Eyebrow, null), /*#__PURE__*/ React.createElement(Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__intro")
    }, t("versionCreatedOn", {
        version: t(((_doc1 = doc) === null || _doc1 === void 0 ? void 0 : _doc1.autosave) ? "autosavedVersion" : "version")
    })), /*#__PURE__*/ React.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, /*#__PURE__*/ React.createElement("h2", null, formattedCreatedAt), canUpdate && /*#__PURE__*/ React.createElement(Restore, {
        className: "".concat(baseClass, "__restore"),
        collection: collection,
        global: global,
        originalDocID: id,
        versionID: versionID,
        versionDate: formattedCreatedAt
    })), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__controls")
    }, /*#__PURE__*/ React.createElement(CompareVersion, {
        publishedDoc: publishedDoc,
        versionID: versionID,
        baseURL: compareBaseURL,
        parentID: parentID,
        value: compareValue,
        onChange: setCompareValue
    }), localization && /*#__PURE__*/ React.createElement(SelectLocales, {
        onChange: setLocales,
        options: localeOptions,
        value: locales
    })), ((_doc2 = doc) === null || _doc2 === void 0 ? void 0 : _doc2.version) && /*#__PURE__*/ React.createElement(RenderFieldsToDiff, {
        locales: locales ? locales.map(function(param) {
            var code = param.code;
            return code;
        }) : [],
        fields: fields,
        fieldComponents: fieldComponents,
        fieldPermissions: fieldPermissions,
        version: (_doc3 = doc) === null || _doc3 === void 0 ? void 0 : _doc3.version,
        comparison: comparison
    }))));
};
export default VersionView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vVmVyc2lvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJztcbmltcG9ydCBFeWVicm93IGZyb20gJy4uLy4uL2VsZW1lbnRzL0V5ZWJyb3cnO1xuaW1wb3J0IHsgdXNlU3RlcE5hdiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1N0ZXBOYXYnO1xuaW1wb3J0IHsgU3RlcE5hdkl0ZW0gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9TdGVwTmF2L3R5cGVzJztcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJztcbmltcG9ydCB7IExvY2FsZU9wdGlvbiwgQ29tcGFyZU9wdGlvbiwgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBDb21wYXJlVmVyc2lvbiBmcm9tICcuL0NvbXBhcmUnO1xuaW1wb3J0IHsgbW9zdFJlY2VudFZlcnNpb25PcHRpb24gfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgUmVzdG9yZSBmcm9tICcuL1Jlc3RvcmUnO1xuaW1wb3J0IFNlbGVjdExvY2FsZXMgZnJvbSAnLi9TZWxlY3RMb2NhbGVzJztcbmltcG9ydCBSZW5kZXJGaWVsZHNUb0RpZmYgZnJvbSAnLi9SZW5kZXJGaWVsZHNUb0RpZmYnO1xuaW1wb3J0IGZpZWxkQ29tcG9uZW50cyBmcm9tICcuL1JlbmRlckZpZWxkc1RvRGlmZi9maWVsZHMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgRmllbGQsIEZpZWxkQWZmZWN0aW5nRGF0YSwgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRmllbGRQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uLy4uLy4uL2F1dGgnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9HdXR0ZXInO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndmlldy12ZXJzaW9uJztcblxuY29uc3QgVmVyc2lvblZpZXc6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbGxlY3Rpb24sIGdsb2JhbCB9KSA9PiB7XG4gIGNvbnN0IHsgc2VydmVyVVJMLCByb3V0ZXM6IHsgYWRtaW4sIGFwaSB9LCBhZG1pbjogeyBkYXRlRm9ybWF0IH0sIGxvY2FsaXphdGlvbiB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgc2V0U3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpO1xuICBjb25zdCB7IHBhcmFtczogeyBpZCwgdmVyc2lvbklEIH0gfSA9IHVzZVJvdXRlTWF0Y2g8eyBpZD86IHN0cmluZywgdmVyc2lvbklEOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgW2NvbXBhcmVWYWx1ZSwgc2V0Q29tcGFyZVZhbHVlXSA9IHVzZVN0YXRlPENvbXBhcmVPcHRpb24+KG1vc3RSZWNlbnRWZXJzaW9uT3B0aW9uKTtcbiAgY29uc3QgW2xvY2FsZU9wdGlvbnNdID0gdXNlU3RhdGU8TG9jYWxlT3B0aW9uW10+KCgpID0+IChsb2NhbGl6YXRpb24gPyBsb2NhbGl6YXRpb24ubG9jYWxlcyA6IFtdKSk7XG4gIGNvbnN0IFtsb2NhbGVzLCBzZXRMb2NhbGVzXSA9IHVzZVN0YXRlPExvY2FsZU9wdGlvbltdPihsb2NhbGVPcHRpb25zKTtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKTtcbiAgY29uc3QgeyBkb2NQZXJtaXNzaW9ucyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG5cbiAgbGV0IG9yaWdpbmFsRG9jRmV0Y2hVUkw6IHN0cmluZztcbiAgbGV0IHZlcnNpb25GZXRjaFVSTDogc3RyaW5nO1xuICBsZXQgZW50aXR5TGFiZWw6IHN0cmluZztcbiAgbGV0IGZpZWxkczogRmllbGRbXTtcbiAgbGV0IGZpZWxkUGVybWlzc2lvbnM6IFJlY29yZDxzdHJpbmcsIEZpZWxkUGVybWlzc2lvbnM+O1xuICBsZXQgY29tcGFyZUJhc2VVUkw6IHN0cmluZztcbiAgbGV0IHNsdWc6IHN0cmluZztcbiAgbGV0IHBhcmVudElEOiBzdHJpbmc7XG5cbiAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAoeyBzbHVnIH0gPSBjb2xsZWN0aW9uKTtcbiAgICBvcmlnaW5hbERvY0ZldGNoVVJMID0gYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9LyR7aWR9YDtcbiAgICB2ZXJzaW9uRmV0Y2hVUkwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vdmVyc2lvbnMvJHt2ZXJzaW9uSUR9YDtcbiAgICBjb21wYXJlQmFzZVVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS92ZXJzaW9uc2A7XG4gICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bik7XG4gICAgcGFyZW50SUQgPSBpZDtcbiAgICBmaWVsZHMgPSBjb2xsZWN0aW9uLmZpZWxkcztcbiAgICBmaWVsZFBlcm1pc3Npb25zID0gcGVybWlzc2lvbnMuY29sbGVjdGlvbnNbY29sbGVjdGlvbi5zbHVnXS5maWVsZHM7XG4gIH1cblxuICBpZiAoZ2xvYmFsKSB7XG4gICAgKHsgc2x1ZyB9ID0gZ2xvYmFsKTtcbiAgICBvcmlnaW5hbERvY0ZldGNoVVJMID0gYCR7c2VydmVyVVJMfSR7YXBpfS9nbG9iYWxzLyR7c2x1Z31gO1xuICAgIHZlcnNpb25GZXRjaFVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0vZ2xvYmFscy8ke3NsdWd9L3ZlcnNpb25zLyR7dmVyc2lvbklEfWA7XG4gICAgY29tcGFyZUJhc2VVUkwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtzbHVnfS92ZXJzaW9uc2A7XG4gICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihnbG9iYWwubGFiZWwsIGkxOG4pO1xuICAgIGZpZWxkcyA9IGdsb2JhbC5maWVsZHM7XG4gICAgZmllbGRQZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zLmdsb2JhbHNbZ2xvYmFsLnNsdWddLmZpZWxkcztcbiAgfVxuXG4gIGNvbnN0IGNvbXBhcmVGZXRjaFVSTCA9IGNvbXBhcmVWYWx1ZT8udmFsdWUgPT09ICdtb3N0UmVjZW50JyB8fCBjb21wYXJlVmFsdWU/LnZhbHVlID09PSAncHVibGlzaGVkJyA/IG9yaWdpbmFsRG9jRmV0Y2hVUkwgOiBgJHtjb21wYXJlQmFzZVVSTH0vJHtjb21wYXJlVmFsdWUudmFsdWV9YDtcblxuICBjb25zdCBbeyBkYXRhOiBkb2MsIGlzTG9hZGluZzogaXNMb2FkaW5nRGF0YSB9XSA9IHVzZVBheWxvYWRBUEkodmVyc2lvbkZldGNoVVJMLCB7IGluaXRpYWxQYXJhbXM6IHsgbG9jYWxlOiAnKicsIGRlcHRoOiAxIH0gfSk7XG4gIGNvbnN0IFt7IGRhdGE6IHB1Ymxpc2hlZERvYyB9XSA9IHVzZVBheWxvYWRBUEkob3JpZ2luYWxEb2NGZXRjaFVSTCwgeyBpbml0aWFsUGFyYW1zOiB7IGxvY2FsZTogJyonLCBkZXB0aDogMSB9IH0pO1xuICBjb25zdCBbeyBkYXRhOiBtb3N0UmVjZW50RG9jIH1dID0gdXNlUGF5bG9hZEFQSShvcmlnaW5hbERvY0ZldGNoVVJMLCB7IGluaXRpYWxQYXJhbXM6IHsgbG9jYWxlOiAnKicsIGRlcHRoOiAxLCBkcmFmdDogdHJ1ZSB9IH0pO1xuICBjb25zdCBbeyBkYXRhOiBjb21wYXJlRG9jIH1dID0gdXNlUGF5bG9hZEFQSShjb21wYXJlRmV0Y2hVUkwsIHsgaW5pdGlhbFBhcmFtczogeyBsb2NhbGU6ICcqJywgZGVwdGg6IDEsIGRyYWZ0OiAndHJ1ZScgfSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuYXY6IFN0ZXBOYXZJdGVtW10gPSBbXTtcblxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICBsZXQgZG9jTGFiZWwgPSAnJztcblxuICAgICAgaWYgKG1vc3RSZWNlbnREb2MpIHtcbiAgICAgICAgY29uc3QgeyB1c2VBc1RpdGxlIH0gPSBjb2xsZWN0aW9uLmFkbWluO1xuXG4gICAgICAgIGlmICh1c2VBc1RpdGxlICE9PSAnaWQnKSB7XG4gICAgICAgICAgY29uc3QgdGl0bGVGaWVsZCA9IGNvbGxlY3Rpb24uZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSB1c2VBc1RpdGxlKSBhcyBGaWVsZEFmZmVjdGluZ0RhdGE7XG5cbiAgICAgICAgICBpZiAodGl0bGVGaWVsZCAmJiBtb3N0UmVjZW50RG9jW3VzZUFzVGl0bGVdKSB7XG4gICAgICAgICAgICBpZiAodGl0bGVGaWVsZC5sb2NhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgZG9jTGFiZWwgPSBtb3N0UmVjZW50RG9jW3VzZUFzVGl0bGVdPy5bbG9jYWxlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvY0xhYmVsID0gbW9zdFJlY2VudERvY1t1c2VBc1RpdGxlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jTGFiZWwgPSBgWyR7dCgnZ2VuZXJhbDp1bnRpdGxlZCcpfV1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb2NMYWJlbCA9IG1vc3RSZWNlbnREb2MuaWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmF2ID0gW1xuICAgICAgICB7XG4gICAgICAgICAgdXJsOiBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9YCxcbiAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbi5sYWJlbHMucGx1cmFsLCBpMThuKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBkb2NMYWJlbCxcbiAgICAgICAgICB1cmw6IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vJHtpZH1gLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdWZXJzaW9ucycsXG4gICAgICAgICAgdXJsOiBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7aWR9L3ZlcnNpb25zYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBkb2M/LmNyZWF0ZWRBdCA/IGZvcm1hdERhdGUoZG9jLmNyZWF0ZWRBdCwgZGF0ZUZvcm1hdCwgaTE4bj8ubGFuZ3VhZ2UpIDogJycsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWwpIHtcbiAgICAgIG5hdiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogYCR7YWRtaW59L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gLFxuICAgICAgICAgIGxhYmVsOiBnbG9iYWwubGFiZWwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ1ZlcnNpb25zJyxcbiAgICAgICAgICB1cmw6IGAke2FkbWlufS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9L3ZlcnNpb25zYCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBkb2M/LmNyZWF0ZWRBdCA/IGZvcm1hdERhdGUoZG9jLmNyZWF0ZWRBdCwgZGF0ZUZvcm1hdCwgaTE4bj8ubGFuZ3VhZ2UpIDogJycsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIHNldFN0ZXBOYXYobmF2KTtcbiAgfSwgW3NldFN0ZXBOYXYsIGNvbGxlY3Rpb24sIGdsb2JhbCwgZGF0ZUZvcm1hdCwgZG9jLCBtb3N0UmVjZW50RG9jLCBhZG1pbiwgaWQsIGxvY2FsZSwgdCwgaTE4bl0pO1xuXG4gIGxldCBtZXRhVGl0bGU6IHN0cmluZztcbiAgbGV0IG1ldGFEZXNjOiBzdHJpbmc7XG4gIGNvbnN0IGZvcm1hdHRlZENyZWF0ZWRBdCA9IGRvYz8uY3JlYXRlZEF0ID8gZm9ybWF0RGF0ZShkb2MuY3JlYXRlZEF0LCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSkgOiAnJztcblxuICBpZiAoY29sbGVjdGlvbikge1xuICAgIGNvbnN0IHVzZUFzVGl0bGUgPSBjb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZSB8fCAnaWQnO1xuICAgIG1ldGFUaXRsZSA9IGAke3QoJ3ZlcnNpb24nKX0gLSAke2Zvcm1hdHRlZENyZWF0ZWRBdH0gLSAke2RvY1t1c2VBc1RpdGxlXX0gLSAke2VudGl0eUxhYmVsfWA7XG4gICAgbWV0YURlc2MgPSB0KCd2aWV3aW5nVmVyc2lvbicsIHsgZG9jdW1lbnRUaXRsZTogZG9jW3VzZUFzVGl0bGVdLCBlbnRpdHlMYWJlbCB9KTtcbiAgfVxuXG4gIGlmIChnbG9iYWwpIHtcbiAgICBtZXRhVGl0bGUgPSBgJHt0KCd2ZXJzaW9uJyl9IC0gJHtmb3JtYXR0ZWRDcmVhdGVkQXR9IC0gJHtlbnRpdHlMYWJlbH1gO1xuICAgIG1ldGFEZXNjID0gdCgndmlld2luZ1ZlcnNpb25HbG9iYWwnLCB7IGVudGl0eUxhYmVsIH0pO1xuICB9XG5cbiAgbGV0IGNvbXBhcmlzb24gPSBjb21wYXJlRG9jPy52ZXJzaW9uO1xuXG4gIGlmIChjb21wYXJlVmFsdWU/LnZhbHVlID09PSAnbW9zdFJlY2VudCcpIHtcbiAgICBjb21wYXJpc29uID0gbW9zdFJlY2VudERvYztcbiAgfVxuXG4gIGlmIChjb21wYXJlVmFsdWU/LnZhbHVlID09PSAncHVibGlzaGVkJykge1xuICAgIGNvbXBhcmlzb24gPSBwdWJsaXNoZWREb2M7XG4gIH1cblxuICBjb25zdCBjYW5VcGRhdGUgPSBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgIDxNZXRhXG4gICAgICAgICAgdGl0bGU9e21ldGFUaXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YURlc2N9XG4gICAgICAgIC8+XG4gICAgICAgIDxFeWVicm93IC8+XG4gICAgICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2ludHJvYH0+XG4gICAgICAgICAgICB7dCgndmVyc2lvbkNyZWF0ZWRPbicsIHsgdmVyc2lvbjogdChkb2M/LmF1dG9zYXZlID8gJ2F1dG9zYXZlZFZlcnNpb24nIDogJ3ZlcnNpb24nKSB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIHtmb3JtYXR0ZWRDcmVhdGVkQXR9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAge2NhblVwZGF0ZSAmJiAoXG4gICAgICAgICAgICAgIDxSZXN0b3JlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZXN0b3JlYH1cbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgIGdsb2JhbD17Z2xvYmFsfVxuICAgICAgICAgICAgICAgIG9yaWdpbmFsRG9jSUQ9e2lkfVxuICAgICAgICAgICAgICAgIHZlcnNpb25JRD17dmVyc2lvbklEfVxuICAgICAgICAgICAgICAgIHZlcnNpb25EYXRlPXtmb3JtYXR0ZWRDcmVhdGVkQXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250cm9sc2B9PlxuICAgICAgICAgICAgPENvbXBhcmVWZXJzaW9uXG4gICAgICAgICAgICAgIHB1Ymxpc2hlZERvYz17cHVibGlzaGVkRG9jfVxuICAgICAgICAgICAgICB2ZXJzaW9uSUQ9e3ZlcnNpb25JRH1cbiAgICAgICAgICAgICAgYmFzZVVSTD17Y29tcGFyZUJhc2VVUkx9XG4gICAgICAgICAgICAgIHBhcmVudElEPXtwYXJlbnRJRH1cbiAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhcmVWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENvbXBhcmVWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7bG9jYWxpemF0aW9uICYmIChcbiAgICAgICAgICAgICAgPFNlbGVjdExvY2FsZXNcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2V0TG9jYWxlc31cbiAgICAgICAgICAgICAgICBvcHRpb25zPXtsb2NhbGVPcHRpb25zfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhbGVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtkb2M/LnZlcnNpb24gJiYgKFxuICAgICAgICAgICAgPFJlbmRlckZpZWxkc1RvRGlmZlxuICAgICAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzID8gbG9jYWxlcy5tYXAoKHsgY29kZSB9KSA9PiBjb2RlKSA6IFtdfVxuICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgZmllbGRDb21wb25lbnRzPXtmaWVsZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgIGZpZWxkUGVybWlzc2lvbnM9e2ZpZWxkUGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgIHZlcnNpb249e2RvYz8udmVyc2lvbn1cbiAgICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HdXR0ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyc2lvblZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlTWF0Y2giLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInVzZUF1dGgiLCJ1c2VEb2N1bWVudEluZm8iLCJ1c2VQYXlsb2FkQVBJIiwiRXllYnJvdyIsInVzZVN0ZXBOYXYiLCJNZXRhIiwiQ29tcGFyZVZlcnNpb24iLCJtb3N0UmVjZW50VmVyc2lvbk9wdGlvbiIsIlJlc3RvcmUiLCJTZWxlY3RMb2NhbGVzIiwiUmVuZGVyRmllbGRzVG9EaWZmIiwiZmllbGRDb21wb25lbnRzIiwiZ2V0VHJhbnNsYXRpb24iLCJmaWVsZEFmZmVjdHNEYXRhIiwidXNlTG9jYWxlIiwiR3V0dGVyIiwiZm9ybWF0RGF0ZSIsImJhc2VDbGFzcyIsIlZlcnNpb25WaWV3IiwiY29sbGVjdGlvbiIsImdsb2JhbCIsImNvbXBhcmVWYWx1ZSIsImRvYyIsImkxOG4iLCJjb21wYXJlRG9jIiwiZG9jUGVybWlzc2lvbnMiLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhZG1pbiIsImFwaSIsImRhdGVGb3JtYXQiLCJsb2NhbGl6YXRpb24iLCJzZXRTdGVwTmF2IiwicGFyYW1zIiwiaWQiLCJ2ZXJzaW9uSUQiLCJzZXRDb21wYXJlVmFsdWUiLCJsb2NhbGVzIiwibG9jYWxlT3B0aW9ucyIsInNldExvY2FsZXMiLCJwZXJtaXNzaW9ucyIsImNvZGUiLCJsb2NhbGUiLCJ0Iiwib3JpZ2luYWxEb2NGZXRjaFVSTCIsInZlcnNpb25GZXRjaFVSTCIsImVudGl0eUxhYmVsIiwiZmllbGRzIiwiZmllbGRQZXJtaXNzaW9ucyIsImNvbXBhcmVCYXNlVVJMIiwic2x1ZyIsInBhcmVudElEIiwibGFiZWxzIiwic2luZ3VsYXIiLCJjb2xsZWN0aW9ucyIsImxhYmVsIiwiZ2xvYmFscyIsImNvbXBhcmVGZXRjaFVSTCIsInZhbHVlIiwiaW5pdGlhbFBhcmFtcyIsImRlcHRoIiwiZGF0YSIsImlzTG9hZGluZyIsImlzTG9hZGluZ0RhdGEiLCJwdWJsaXNoZWREb2MiLCJkcmFmdCIsIm1vc3RSZWNlbnREb2MiLCJuYXYiLCJkb2NMYWJlbCIsInVzZUFzVGl0bGUiLCJ0aXRsZUZpZWxkIiwiZmluZCIsImZpZWxkIiwibmFtZSIsImxvY2FsaXplZCIsInVybCIsInBsdXJhbCIsImNyZWF0ZWRBdCIsImxhbmd1YWdlIiwibWV0YVRpdGxlIiwibWV0YURlc2MiLCJmb3JtYXR0ZWRDcmVhdGVkQXQiLCJkb2N1bWVudFRpdGxlIiwiY29tcGFyaXNvbiIsInZlcnNpb24iLCJjYW5VcGRhdGUiLCJ1cGRhdGUiLCJwZXJtaXNzaW9uIiwiRnJhZ21lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXV0b3NhdmUiLCJoZWFkZXIiLCJoMiIsIm9yaWdpbmFsRG9jSUQiLCJ2ZXJzaW9uRGF0ZSIsImJhc2VVUkwiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQ25ELFNBQVNDLGFBQWEsUUFBUSxtQkFBbUI7QUFDakQsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFDL0MsU0FBU0MsZUFBZSxRQUFRLCtCQUErQjtBQUMvRCxPQUFPQyxtQkFBbUIsK0JBQStCO0FBQ3pELE9BQU9DLGFBQWEseUJBQXlCO0FBQzdDLFNBQVNDLFVBQVUsUUFBUSx5QkFBeUI7QUFFcEQsT0FBT0MsVUFBVSx1QkFBdUI7QUFFeEMsT0FBT0Msb0JBQW9CLFlBQVk7QUFDdkMsU0FBU0MsdUJBQXVCLFFBQVEsV0FBVztBQUNuRCxPQUFPQyxhQUFhLFlBQVk7QUFDaEMsT0FBT0MsbUJBQW1CLGtCQUFrQjtBQUM1QyxPQUFPQyx3QkFBd0IsdUJBQXVCO0FBQ3RELE9BQU9DLHFCQUFxQiw4QkFBOEI7QUFDMUQsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUN0RSxTQUFvQ0MsZ0JBQWdCLFFBQVEsa0NBQWtDO0FBRTlGLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsU0FBU0MsTUFBTSxRQUFRLHdCQUF3QjtBQUMvQyxTQUFTQyxVQUFVLFFBQVEsZ0NBQWdDO0FBRTNELE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLGNBQStCO1FBQUdDLG1CQUFBQSxZQUFZQyxlQUFBQTtRQTBDMUJDLGVBQXdDQSxnQkF5RXJDQyxNQUF1REMsT0FhakVDLGFBRWJILGdCQUlBQSxnQkFJY0ksd0JBQUFBLGlCQVk0QkgsT0Ft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