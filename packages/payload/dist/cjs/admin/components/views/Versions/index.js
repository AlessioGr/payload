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
var _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../hooks/usePayloadAPI"));
var _Eyebrow = /*#__PURE__*/ _interop_require_default(require("../../elements/Eyebrow"));
var _Loading = require("../../elements/Loading");
var _StepNav = require("../../elements/StepNav");
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
var _IDLabel = /*#__PURE__*/ _interop_require_default(require("../../elements/IDLabel"));
var _Table = require("../../elements/Table");
var _Paginator = /*#__PURE__*/ _interop_require_default(require("../../elements/Paginator"));
var _PerPage = /*#__PURE__*/ _interop_require_default(require("../../elements/PerPage"));
var _SearchParams = require("../../utilities/SearchParams");
var _Gutter = require("../../elements/Gutter");
var _getTranslation = require("../../../../utilities/getTranslation");
var _columns = require("./columns");
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
var baseClass = "versions";
var Versions = function(param) {
    var collection = param.collection, global = param.global;
    var _collection_admin, _collection, _doc, _doc1, _versionsData, _versionsData1, _versionsData2, _collection_admin_pagination, _collection_admin1, _collection1, _versionsData3;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, admin = _useConfig_routes.admin, api = _useConfig_routes.api;
    var setStepNav = (0, _StepNav.useStepNav)().setStepNav;
    var _useRouteMatch = (0, _reactrouterdom.useRouteMatch)(), id = _useRouteMatch.params.id;
    var _useTranslation = (0, _reacti18next.useTranslation)("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array((0, _react.useState)(""), 2), fetchURL = _useState[0], setFetchURL = _useState[1];
    var _useSearchParams = (0, _SearchParams.useSearchParams)(), page = _useSearchParams.page, sort = _useSearchParams.sort, limit = _useSearchParams.limit;
    var docURL;
    var entityLabel;
    var slug;
    var editURL;
    if (collection) {
        slug = collection.slug;
        docURL = "".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id);
        entityLabel = (0, _getTranslation.getTranslation)(collection.labels.singular, i18n);
        editURL = "".concat(admin, "/collections/").concat(collection.slug, "/").concat(id);
    }
    if (global) {
        slug = global.slug;
        docURL = "".concat(serverURL).concat(api, "/globals/").concat(slug);
        entityLabel = (0, _getTranslation.getTranslation)(global.label, i18n);
        editURL = "".concat(admin, "/globals/").concat(global.slug);
    }
    var useAsTitle = ((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : _collection_admin.useAsTitle) || "id";
    var _usePayloadAPI1 = _sliced_to_array((0, _usePayloadAPI.default)(docURL, {
        initialParams: {
            draft: "true"
        }
    }), 1), _usePayloadAPI_ = _usePayloadAPI1[0], doc = _usePayloadAPI_.data;
    var _usePayloadAPI2 = _sliced_to_array((0, _usePayloadAPI.default)(fetchURL), 2), _usePayloadAPI_1 = _usePayloadAPI2[0], versionsData = _usePayloadAPI_1.data, isLoadingVersions = _usePayloadAPI_1.isLoading, setParams = _usePayloadAPI2[1].setParams;
    (0, _react.useEffect)(function() {
        var nav = [];
        if (collection) {
            var docLabel = "";
            if (doc) {
                if (useAsTitle) {
                    if (doc[useAsTitle]) {
                        docLabel = doc[useAsTitle];
                    } else {
                        docLabel = "[".concat(t("general:untitled"), "]");
                    }
                } else {
                    docLabel = doc.id;
                }
            }
            nav = [
                {
                    url: "".concat(admin, "/collections/").concat(collection.slug),
                    label: (0, _getTranslation.getTranslation)(collection.labels.plural, i18n)
                },
                {
                    label: docLabel,
                    url: editURL
                },
                {
                    label: t("versions")
                }
            ];
        }
        if (global) {
            nav = [
                {
                    url: editURL,
                    label: (0, _getTranslation.getTranslation)(global.label, i18n)
                },
                {
                    label: t("versions")
                }
            ];
        }
        setStepNav(nav);
    }, [
        setStepNav,
        collection,
        global,
        useAsTitle,
        doc,
        admin,
        id,
        editURL,
        t,
        i18n
    ]);
    (0, _react.useEffect)(function() {
        var params = {
            depth: 1,
            page: undefined,
            sort: undefined,
            limit: limit,
            where: {}
        };
        if (page) params.page = page;
        if (sort) params.sort = sort;
        var fetchURLToSet;
        if (collection) {
            fetchURLToSet = "".concat(serverURL).concat(api, "/").concat(collection.slug, "/versions");
            params.where = {
                parent: {
                    equals: id
                }
            };
        }
        if (global) {
            fetchURLToSet = "".concat(serverURL).concat(api, "/globals/").concat(global.slug, "/versions");
        }
        // Performance enhancement
        // Setting the Fetch URL this way
        // prevents a double-fetch
        setFetchURL(fetchURLToSet);
        setParams(params);
    }, [
        setParams,
        page,
        sort,
        limit,
        serverURL,
        api,
        id,
        global,
        collection
    ]);
    var useIDLabel = doc[useAsTitle] === ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.id);
    var heading;
    var metaDesc;
    var metaTitle;
    if (collection) {
        var _doc2;
        metaTitle = "".concat(t("versions"), " - ").concat(doc[useAsTitle], " - ").concat(entityLabel);
        metaDesc = t("viewingVersions", {
            documentTitle: doc[useAsTitle],
            entityLabel: entityLabel
        });
        heading = ((_doc2 = doc) === null || _doc2 === void 0 ? void 0 : _doc2[useAsTitle]) || "[".concat(t("general:untitled"), "]");
    }
    if (global) {
        metaTitle = "".concat(t("versions"), " - ").concat(entityLabel);
        metaDesc = t("viewingVersionsGlobal", {
            entityLabel: entityLabel
        });
        heading = entityLabel;
        useIDLabel = false;
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
        show: isLoadingVersions,
        name: "versions"
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: metaTitle,
        description: metaDesc
    }), /*#__PURE__*/ _react.default.createElement(_Eyebrow.default, null), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__intro")
    }, t("showingVersionsFor")), useIDLabel && /*#__PURE__*/ _react.default.createElement(_IDLabel.default, {
        id: (_doc1 = doc) === null || _doc1 === void 0 ? void 0 : _doc1.id
    }), !useIDLabel && /*#__PURE__*/ _react.default.createElement("h1", null, heading)), ((_versionsData = versionsData) === null || _versionsData === void 0 ? void 0 : _versionsData.totalDocs) > 0 && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Table.Table, {
        data: (_versionsData1 = versionsData) === null || _versionsData1 === void 0 ? void 0 : _versionsData1.docs,
        columns: (0, _columns.buildVersionColumns)(collection, global, t)
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__page-controls")
    }, /*#__PURE__*/ _react.default.createElement(_Paginator.default, {
        limit: versionsData.limit,
        totalPages: versionsData.totalPages,
        page: versionsData.page,
        hasPrevPage: versionsData.hasPrevPage,
        hasNextPage: versionsData.hasNextPage,
        prevPage: versionsData.prevPage,
        nextPage: versionsData.nextPage,
        numberOfNeighbors: 1
    }), ((_versionsData2 = versionsData) === null || _versionsData2 === void 0 ? void 0 : _versionsData2.totalDocs) > 0 && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__page-info")
    }, versionsData.page * versionsData.limit - (versionsData.limit - 1), "-", versionsData.totalPages > 1 && versionsData.totalPages !== versionsData.page ? versionsData.limit * versionsData.page : versionsData.totalDocs, " ", t("of"), " ", versionsData.totalDocs), /*#__PURE__*/ _react.default.createElement(_PerPage.default, {
        limits: (_collection1 = collection) === null || _collection1 === void 0 ? void 0 : (_collection_admin1 = _collection1.admin) === null || _collection_admin1 === void 0 ? void 0 : (_collection_admin_pagination = _collection_admin1.pagination) === null || _collection_admin_pagination === void 0 ? void 0 : _collection_admin_pagination.limits,
        limit: limit ? Number(limit) : 10
    })))), ((_versionsData3 = versionsData) === null || _versionsData3 === void 0 ? void 0 : _versionsData3.totalDocs) === 0 && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__no-versions")
    }, t("noFurtherVersionsFound")))));
};
var _default = Versions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB1c2VQYXlsb2FkQVBJIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVBheWxvYWRBUEknO1xuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheVRvZ2dsZSB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IHsgdXNlU3RlcE5hdiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1N0ZXBOYXYnO1xuaW1wb3J0IHsgU3RlcE5hdkl0ZW0gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9TdGVwTmF2L3R5cGVzJztcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgSURMYWJlbCBmcm9tICcuLi8uLi9lbGVtZW50cy9JRExhYmVsJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvVGFibGUnO1xuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuLi8uLi9lbGVtZW50cy9QYWdpbmF0b3InO1xuaW1wb3J0IFBlclBhZ2UgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGVyUGFnZSc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IEd1dHRlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0d1dHRlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25Db2x1bW5zIH0gZnJvbSAnLi9jb2x1bW5zJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndmVyc2lvbnMnO1xuXG5jb25zdCBWZXJzaW9uczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsIH0pID0+IHtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhZG1pbiwgYXBpIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHNldFN0ZXBOYXYgfSA9IHVzZVN0ZXBOYXYoKTtcbiAgY29uc3QgeyBwYXJhbXM6IHsgaWQgfSB9ID0gdXNlUm91dGVNYXRjaDx7IGlkOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuICBjb25zdCBbZmV0Y2hVUkwsIHNldEZldGNoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgeyBwYWdlLCBzb3J0LCBsaW1pdCB9ID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgbGV0IGRvY1VSTDogc3RyaW5nO1xuICBsZXQgZW50aXR5TGFiZWw6IHN0cmluZztcbiAgbGV0IHNsdWc6IHN0cmluZztcbiAgbGV0IGVkaXRVUkw6IHN0cmluZztcblxuICBpZiAoY29sbGVjdGlvbikge1xuICAgICh7IHNsdWcgfSA9IGNvbGxlY3Rpb24pO1xuICAgIGRvY1VSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS8ke2lkfWA7XG4gICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bik7XG4gICAgZWRpdFVSTCA9IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vJHtpZH1gO1xuICB9XG5cbiAgaWYgKGdsb2JhbCkge1xuICAgICh7IHNsdWcgfSA9IGdsb2JhbCk7XG4gICAgZG9jVVJMID0gYCR7c2VydmVyVVJMfSR7YXBpfS9nbG9iYWxzLyR7c2x1Z31gO1xuICAgIGVudGl0eUxhYmVsID0gZ2V0VHJhbnNsYXRpb24oZ2xvYmFsLmxhYmVsLCBpMThuKTtcbiAgICBlZGl0VVJMID0gYCR7YWRtaW59L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gO1xuICB9XG5cbiAgY29uc3QgdXNlQXNUaXRsZSA9IGNvbGxlY3Rpb24/LmFkbWluPy51c2VBc1RpdGxlIHx8ICdpZCc7XG4gIGNvbnN0IFt7IGRhdGE6IGRvYyB9XSA9IHVzZVBheWxvYWRBUEkoZG9jVVJMLCB7IGluaXRpYWxQYXJhbXM6IHsgZHJhZnQ6ICd0cnVlJyB9IH0pO1xuICBjb25zdCBbeyBkYXRhOiB2ZXJzaW9uc0RhdGEsIGlzTG9hZGluZzogaXNMb2FkaW5nVmVyc2lvbnMgfSwgeyBzZXRQYXJhbXMgfV0gPSB1c2VQYXlsb2FkQVBJKGZldGNoVVJMKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuYXY6IFN0ZXBOYXZJdGVtW10gPSBbXTtcblxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICBsZXQgZG9jTGFiZWwgPSAnJztcblxuICAgICAgaWYgKGRvYykge1xuICAgICAgICBpZiAodXNlQXNUaXRsZSkge1xuICAgICAgICAgIGlmIChkb2NbdXNlQXNUaXRsZV0pIHtcbiAgICAgICAgICAgIGRvY0xhYmVsID0gZG9jW3VzZUFzVGl0bGVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2NMYWJlbCA9IGBbJHt0KCdnZW5lcmFsOnVudGl0bGVkJyl9XWA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY0xhYmVsID0gZG9jLmlkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5hdiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbi5zbHVnfWAsXG4gICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnBsdXJhbCwgaTE4biksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogZG9jTGFiZWwsXG4gICAgICAgICAgdXJsOiBlZGl0VVJMLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHQoJ3ZlcnNpb25zJyksXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWwpIHtcbiAgICAgIG5hdiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogZWRpdFVSTCxcbiAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oZ2xvYmFsLmxhYmVsLCBpMThuKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0KCd2ZXJzaW9ucycpLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG5cbiAgICBzZXRTdGVwTmF2KG5hdik7XG4gIH0sIFtzZXRTdGVwTmF2LCBjb2xsZWN0aW9uLCBnbG9iYWwsIHVzZUFzVGl0bGUsIGRvYywgYWRtaW4sIGlkLCBlZGl0VVJMLCB0LCBpMThuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBkZXB0aDogMSxcbiAgICAgIHBhZ2U6IHVuZGVmaW5lZCxcbiAgICAgIHNvcnQ6IHVuZGVmaW5lZCxcbiAgICAgIGxpbWl0LFxuICAgICAgd2hlcmU6IHt9LFxuICAgIH07XG5cbiAgICBpZiAocGFnZSkgcGFyYW1zLnBhZ2UgPSBwYWdlO1xuICAgIGlmIChzb3J0KSBwYXJhbXMuc29ydCA9IHNvcnQ7XG5cbiAgICBsZXQgZmV0Y2hVUkxUb1NldDogc3RyaW5nO1xuXG4gICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgIGZldGNoVVJMVG9TZXQgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7Y29sbGVjdGlvbi5zbHVnfS92ZXJzaW9uc2A7XG4gICAgICBwYXJhbXMud2hlcmUgPSB7XG4gICAgICAgIHBhcmVudDoge1xuICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChnbG9iYWwpIHtcbiAgICAgIGZldGNoVVJMVG9TZXQgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30vdmVyc2lvbnNgO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1hbmNlIGVuaGFuY2VtZW50XG4gICAgLy8gU2V0dGluZyB0aGUgRmV0Y2ggVVJMIHRoaXMgd2F5XG4gICAgLy8gcHJldmVudHMgYSBkb3VibGUtZmV0Y2hcblxuICAgIHNldEZldGNoVVJMKGZldGNoVVJMVG9TZXQpO1xuXG4gICAgc2V0UGFyYW1zKHBhcmFtcyk7XG4gIH0sIFtzZXRQYXJhbXMsIHBhZ2UsIHNvcnQsIGxpbWl0LCBzZXJ2ZXJVUkwsIGFwaSwgaWQsIGdsb2JhbCwgY29sbGVjdGlvbl0pO1xuXG4gIGxldCB1c2VJRExhYmVsID0gZG9jW3VzZUFzVGl0bGVdID09PSBkb2M/LmlkO1xuICBsZXQgaGVhZGluZzogc3RyaW5nO1xuICBsZXQgbWV0YURlc2M6IHN0cmluZztcbiAgbGV0IG1ldGFUaXRsZTogc3RyaW5nO1xuXG4gIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgbWV0YVRpdGxlID0gYCR7dCgndmVyc2lvbnMnKX0gLSAke2RvY1t1c2VBc1RpdGxlXX0gLSAke2VudGl0eUxhYmVsfWA7XG4gICAgbWV0YURlc2MgPSB0KCd2aWV3aW5nVmVyc2lvbnMnLCB7IGRvY3VtZW50VGl0bGU6IGRvY1t1c2VBc1RpdGxlXSwgZW50aXR5TGFiZWwgfSk7XG4gICAgaGVhZGluZyA9IGRvYz8uW3VzZUFzVGl0bGVdIHx8IGBbJHt0KCdnZW5lcmFsOnVudGl0bGVkJyl9XWA7XG4gIH1cblxuICBpZiAoZ2xvYmFsKSB7XG4gICAgbWV0YVRpdGxlID0gYCR7dCgndmVyc2lvbnMnKX0gLSAke2VudGl0eUxhYmVsfWA7XG4gICAgbWV0YURlc2MgPSB0KCd2aWV3aW5nVmVyc2lvbnNHbG9iYWwnLCB7IGVudGl0eUxhYmVsIH0pO1xuICAgIGhlYWRpbmcgPSBlbnRpdHlMYWJlbDtcbiAgICB1c2VJRExhYmVsID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMb2FkaW5nT3ZlcmxheVRvZ2dsZVxuICAgICAgICBzaG93PXtpc0xvYWRpbmdWZXJzaW9uc31cbiAgICAgICAgbmFtZT1cInZlcnNpb25zXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT17bWV0YVRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhRGVzY31cbiAgICAgICAgLz5cbiAgICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgICAgPEd1dHRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW50cm9gfT57dCgnc2hvd2luZ1ZlcnNpb25zRm9yJyl9PC9kaXY+XG4gICAgICAgICAgICB7dXNlSURMYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxJRExhYmVsIGlkPXtkb2M/LmlkfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshdXNlSURMYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICB7dmVyc2lvbnNEYXRhPy50b3RhbERvY3MgPiAwICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgZGF0YT17dmVyc2lvbnNEYXRhPy5kb2NzfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2J1aWxkVmVyc2lvbkNvbHVtbnMoXG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgZ2xvYmFsLFxuICAgICAgICAgICAgICAgICAgdCxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcGFnZS1jb250cm9sc2B9PlxuICAgICAgICAgICAgICAgIDxQYWdpbmF0b3JcbiAgICAgICAgICAgICAgICAgIGxpbWl0PXt2ZXJzaW9uc0RhdGEubGltaXR9XG4gICAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXt2ZXJzaW9uc0RhdGEudG90YWxQYWdlc31cbiAgICAgICAgICAgICAgICAgIHBhZ2U9e3ZlcnNpb25zRGF0YS5wYWdlfVxuICAgICAgICAgICAgICAgICAgaGFzUHJldlBhZ2U9e3ZlcnNpb25zRGF0YS5oYXNQcmV2UGFnZX1cbiAgICAgICAgICAgICAgICAgIGhhc05leHRQYWdlPXt2ZXJzaW9uc0RhdGEuaGFzTmV4dFBhZ2V9XG4gICAgICAgICAgICAgICAgICBwcmV2UGFnZT17dmVyc2lvbnNEYXRhLnByZXZQYWdlfVxuICAgICAgICAgICAgICAgICAgbmV4dFBhZ2U9e3ZlcnNpb25zRGF0YS5uZXh0UGFnZX1cbiAgICAgICAgICAgICAgICAgIG51bWJlck9mTmVpZ2hib3JzPXsxfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3ZlcnNpb25zRGF0YT8udG90YWxEb2NzID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19wYWdlLWluZm9gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7KHZlcnNpb25zRGF0YS5wYWdlICogdmVyc2lvbnNEYXRhLmxpbWl0KSAtICh2ZXJzaW9uc0RhdGEubGltaXQgLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgICAge3ZlcnNpb25zRGF0YS50b3RhbFBhZ2VzID4gMSAmJiB2ZXJzaW9uc0RhdGEudG90YWxQYWdlcyAhPT0gdmVyc2lvbnNEYXRhLnBhZ2UgPyAodmVyc2lvbnNEYXRhLmxpbWl0ICogdmVyc2lvbnNEYXRhLnBhZ2UpIDogdmVyc2lvbnNEYXRhLnRvdGFsRG9jc31cbiAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdvZicpfVxuICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAge3ZlcnNpb25zRGF0YS50b3RhbERvY3N9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UGVyUGFnZVxuICAgICAgICAgICAgICAgICAgICAgIGxpbWl0cz17Y29sbGVjdGlvbj8uYWRtaW4/LnBhZ2luYXRpb24/LmxpbWl0c31cbiAgICAgICAgICAgICAgICAgICAgICBsaW1pdD17bGltaXQgPyBOdW1iZXIobGltaXQpIDogMTB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt2ZXJzaW9uc0RhdGE/LnRvdGFsRG9jcyA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbm8tdmVyc2lvbnNgfT5cbiAgICAgICAgICAgICAge3QoJ25vRnVydGhlclZlcnNpb25zRm91bmQnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3V0dGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZlcnNpb25zO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlZlcnNpb25zIiwiY29sbGVjdGlvbiIsImdsb2JhbCIsImRvYyIsInZlcnNpb25zRGF0YSIsInVzZUNvbmZpZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFkbWluIiwiYXBpIiwic2V0U3RlcE5hdiIsInVzZVN0ZXBOYXYiLCJ1c2VSb3V0ZU1hdGNoIiwicGFyYW1zIiwiaWQiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlU3RhdGUiLCJmZXRjaFVSTCIsInNldEZldGNoVVJMIiwidXNlU2VhcmNoUGFyYW1zIiwicGFnZSIsInNvcnQiLCJsaW1pdCIsImRvY1VSTCIsImVudGl0eUxhYmVsIiwic2x1ZyIsImVkaXRVUkwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwibGFiZWwiLCJ1c2VBc1RpdGxlIiwidXNlUGF5bG9hZEFQSSIsImluaXRpYWxQYXJhbXMiLCJkcmFmdCIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0xvYWRpbmdWZXJzaW9ucyIsInNldFBhcmFtcyIsInVzZUVmZmVjdCIsIm5hdiIsImRvY0xhYmVsIiwidXJsIiwicGx1cmFsIiwiZGVwdGgiLCJ1bmRlZmluZWQiLCJ3aGVyZSIsImZldGNoVVJMVG9TZXQiLCJwYXJlbnQiLCJlcXVhbHMiLCJ1c2VJRExhYmVsIiwiaGVhZGluZyIsIm1ldGFEZXNjIiwibWV0YVRpdGxlIiwiZG9jdW1lbnRUaXRsZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJMb2FkaW5nT3ZlcmxheVRvZ2dsZSIsInNob3ciLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiTWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJFeWVicm93IiwiR3V0dGVyIiwiaGVhZGVyIiwiSURMYWJlbCIsImgxIiwidG90YWxEb2NzIiwiVGFibGUiLCJkb2NzIiwiY29sdW1ucyIsImJ1aWxkVmVyc2lvbkNvbHVtbnMiLCJQYWdpbmF0b3IiLCJ0b3RhbFBhZ2VzIiwiaGFzUHJldlBhZ2UiLCJoYXNOZXh0UGFnZSIsInByZXZQYWdlIiwibmV4dFBhZ2UiLCJudW1iZXJPZk5laWdoYm9ycyIsIlBlclBhZ2UiLCJsaW1pdHMiLCJwYWdpbmF0aW9uIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7OytCQTBPQTs7O2VBQUE7Ozs2REExTzJDOzhCQUNiOzRCQUNDO3NCQUNMO29FQUNBOzhEQUNOO3VCQUNpQjt1QkFDVjsyREFFVjs4REFFRztxQkFDRTtnRUFDQTs4REFDRjs0QkFDWTtzQkFDVDs4QkFDUTt1QkFDSztRQUU3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsV0FBNEI7UUFBR0MsbUJBQUFBLFlBQVlDLGVBQUFBO1FBMkI1QkQsbUJBQUFBLGFBd0ZrQkUsTUFrQ1pBLE9BU2hCQyxlQUdXQSxnQkFrQkxBLGdCQVlhSCw4QkFBQUEsb0JBQUFBLGNBUW5CRztJQXRNVCxJQUE4Q0MsYUFBQUEsSUFBQUEsaUJBQVMsS0FBL0NDLFlBQXNDRCxXQUF0Q0MsK0JBQXNDRCxXQUEzQkUsUUFBVUMsMEJBQUFBLE9BQU9DLHdCQUFBQTtJQUNwQyxJQUFNLEFBQUVDLGFBQWVDLElBQUFBLG1CQUFVLElBQXpCRDtJQUNSLElBQTJCRSxpQkFBQUEsSUFBQUEsNkJBQWEsS0FBaENDLEFBQVVDLEtBQVNGLGVBQW5C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