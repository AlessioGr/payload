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
import usePayloadAPI from "../../../hooks/usePayloadAPI";
import Eyebrow from "../../elements/Eyebrow";
import { LoadingOverlayToggle } from "../../elements/Loading";
import { useStepNav } from "../../elements/StepNav";
import Meta from "../../utilities/Meta";
import IDLabel from "../../elements/IDLabel";
import { Table } from "../../elements/Table";
import Paginator from "../../elements/Paginator";
import PerPage from "../../elements/PerPage";
import { useSearchParams } from "../../utilities/SearchParams";
import { Gutter } from "../../elements/Gutter";
import { getTranslation } from "../../../../utilities/getTranslation";
import { buildVersionColumns } from "./columns";
import "./index.scss";
var baseClass = "versions";
var Versions = function(param) {
    var collection = param.collection, global = param.global;
    var _collection_admin, _collection, _doc, _doc1, _versionsData, _versionsData1, _versionsData2, _collection_admin_pagination, _collection_admin1, _collection1, _versionsData3;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, admin = _useConfig_routes.admin, api = _useConfig_routes.api;
    var setStepNav = useStepNav().setStepNav;
    var _useRouteMatch = useRouteMatch(), id = _useRouteMatch.params.id;
    var _useTranslation = useTranslation("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array(useState(""), 2), fetchURL = _useState[0], setFetchURL = _useState[1];
    var _useSearchParams = useSearchParams(), page = _useSearchParams.page, sort = _useSearchParams.sort, limit = _useSearchParams.limit;
    var docURL;
    var entityLabel;
    var slug;
    var editURL;
    if (collection) {
        slug = collection.slug;
        docURL = "".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id);
        entityLabel = getTranslation(collection.labels.singular, i18n);
        editURL = "".concat(admin, "/collections/").concat(collection.slug, "/").concat(id);
    }
    if (global) {
        slug = global.slug;
        docURL = "".concat(serverURL).concat(api, "/globals/").concat(slug);
        entityLabel = getTranslation(global.label, i18n);
        editURL = "".concat(admin, "/globals/").concat(global.slug);
    }
    var useAsTitle = ((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : _collection_admin.useAsTitle) || "id";
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI(docURL, {
        initialParams: {
            draft: "true"
        }
    }), 1), _usePayloadAPI_ = _usePayloadAPI[0], doc = _usePayloadAPI_.data;
    var _usePayloadAPI1 = _sliced_to_array(usePayloadAPI(fetchURL), 2), _usePayloadAPI_1 = _usePayloadAPI1[0], versionsData = _usePayloadAPI_1.data, isLoadingVersions = _usePayloadAPI_1.isLoading, setParams = _usePayloadAPI1[1].setParams;
    useEffect(function() {
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
                    label: getTranslation(collection.labels.plural, i18n)
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
                    label: getTranslation(global.label, i18n)
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
    useEffect(function() {
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
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(LoadingOverlayToggle, {
        show: isLoadingVersions,
        name: "versions"
    }), /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: metaTitle,
        description: metaDesc
    }), /*#__PURE__*/ React.createElement(Eyebrow, null), /*#__PURE__*/ React.createElement(Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__intro")
    }, t("showingVersionsFor")), useIDLabel && /*#__PURE__*/ React.createElement(IDLabel, {
        id: (_doc1 = doc) === null || _doc1 === void 0 ? void 0 : _doc1.id
    }), !useIDLabel && /*#__PURE__*/ React.createElement("h1", null, heading)), ((_versionsData = versionsData) === null || _versionsData === void 0 ? void 0 : _versionsData.totalDocs) > 0 && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Table, {
        data: (_versionsData1 = versionsData) === null || _versionsData1 === void 0 ? void 0 : _versionsData1.docs,
        columns: buildVersionColumns(collection, global, t)
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__page-controls")
    }, /*#__PURE__*/ React.createElement(Paginator, {
        limit: versionsData.limit,
        totalPages: versionsData.totalPages,
        page: versionsData.page,
        hasPrevPage: versionsData.hasPrevPage,
        hasNextPage: versionsData.hasNextPage,
        prevPage: versionsData.prevPage,
        nextPage: versionsData.nextPage,
        numberOfNeighbors: 1
    }), ((_versionsData2 = versionsData) === null || _versionsData2 === void 0 ? void 0 : _versionsData2.totalDocs) > 0 && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__page-info")
    }, versionsData.page * versionsData.limit - (versionsData.limit - 1), "-", versionsData.totalPages > 1 && versionsData.totalPages !== versionsData.page ? versionsData.limit * versionsData.page : versionsData.totalDocs, " ", t("of"), " ", versionsData.totalDocs), /*#__PURE__*/ React.createElement(PerPage, {
        limits: (_collection1 = collection) === null || _collection1 === void 0 ? void 0 : (_collection_admin1 = _collection1.admin) === null || _collection_admin1 === void 0 ? void 0 : (_collection_admin_pagination = _collection_admin1.pagination) === null || _collection_admin_pagination === void 0 ? void 0 : _collection_admin_pagination.limits,
        limit: limit ? Number(limit) : 10
    })))), ((_versionsData3 = versionsData) === null || _versionsData3 === void 0 ? void 0 : _versionsData3.totalDocs) === 0 && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__no-versions")
    }, t("noFurtherVersionsFound")))));
};
export default Versions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb25zL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB1c2VQYXlsb2FkQVBJIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVBheWxvYWRBUEknO1xuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheVRvZ2dsZSB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0xvYWRpbmcnO1xuaW1wb3J0IHsgdXNlU3RlcE5hdiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL1N0ZXBOYXYnO1xuaW1wb3J0IHsgU3RlcE5hdkl0ZW0gfSBmcm9tICcuLi8uLi9lbGVtZW50cy9TdGVwTmF2L3R5cGVzJztcbmltcG9ydCBNZXRhIGZyb20gJy4uLy4uL3V0aWxpdGllcy9NZXRhJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgSURMYWJlbCBmcm9tICcuLi8uLi9lbGVtZW50cy9JRExhYmVsJztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvVGFibGUnO1xuaW1wb3J0IFBhZ2luYXRvciBmcm9tICcuLi8uLi9lbGVtZW50cy9QYWdpbmF0b3InO1xuaW1wb3J0IFBlclBhZ2UgZnJvbSAnLi4vLi4vZWxlbWVudHMvUGVyUGFnZSc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IEd1dHRlciB9IGZyb20gJy4uLy4uL2VsZW1lbnRzL0d1dHRlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25Db2x1bW5zIH0gZnJvbSAnLi9jb2x1bW5zJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndmVyc2lvbnMnO1xuXG5jb25zdCBWZXJzaW9uczogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsIH0pID0+IHtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhZG1pbiwgYXBpIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHNldFN0ZXBOYXYgfSA9IHVzZVN0ZXBOYXYoKTtcbiAgY29uc3QgeyBwYXJhbXM6IHsgaWQgfSB9ID0gdXNlUm91dGVNYXRjaDx7IGlkOiBzdHJpbmcgfT4oKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigndmVyc2lvbicpO1xuICBjb25zdCBbZmV0Y2hVUkwsIHNldEZldGNoVVJMXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgeyBwYWdlLCBzb3J0LCBsaW1pdCB9ID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgbGV0IGRvY1VSTDogc3RyaW5nO1xuICBsZXQgZW50aXR5TGFiZWw6IHN0cmluZztcbiAgbGV0IHNsdWc6IHN0cmluZztcbiAgbGV0IGVkaXRVUkw6IHN0cmluZztcblxuICBpZiAoY29sbGVjdGlvbikge1xuICAgICh7IHNsdWcgfSA9IGNvbGxlY3Rpb24pO1xuICAgIGRvY1VSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS8ke2lkfWA7XG4gICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5zaW5ndWxhciwgaTE4bik7XG4gICAgZWRpdFVSTCA9IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vJHtpZH1gO1xuICB9XG5cbiAgaWYgKGdsb2JhbCkge1xuICAgICh7IHNsdWcgfSA9IGdsb2JhbCk7XG4gICAgZG9jVVJMID0gYCR7c2VydmVyVVJMfSR7YXBpfS9nbG9iYWxzLyR7c2x1Z31gO1xuICAgIGVudGl0eUxhYmVsID0gZ2V0VHJhbnNsYXRpb24oZ2xvYmFsLmxhYmVsLCBpMThuKTtcbiAgICBlZGl0VVJMID0gYCR7YWRtaW59L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z31gO1xuICB9XG5cbiAgY29uc3QgdXNlQXNUaXRsZSA9IGNvbGxlY3Rpb24/LmFkbWluPy51c2VBc1RpdGxlIHx8ICdpZCc7XG4gIGNvbnN0IFt7IGRhdGE6IGRvYyB9XSA9IHVzZVBheWxvYWRBUEkoZG9jVVJMLCB7IGluaXRpYWxQYXJhbXM6IHsgZHJhZnQ6ICd0cnVlJyB9IH0pO1xuICBjb25zdCBbeyBkYXRhOiB2ZXJzaW9uc0RhdGEsIGlzTG9hZGluZzogaXNMb2FkaW5nVmVyc2lvbnMgfSwgeyBzZXRQYXJhbXMgfV0gPSB1c2VQYXlsb2FkQVBJKGZldGNoVVJMKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBuYXY6IFN0ZXBOYXZJdGVtW10gPSBbXTtcblxuICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICBsZXQgZG9jTGFiZWwgPSAnJztcblxuICAgICAgaWYgKGRvYykge1xuICAgICAgICBpZiAodXNlQXNUaXRsZSkge1xuICAgICAgICAgIGlmIChkb2NbdXNlQXNUaXRsZV0pIHtcbiAgICAgICAgICAgIGRvY0xhYmVsID0gZG9jW3VzZUFzVGl0bGVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2NMYWJlbCA9IGBbJHt0KCdnZW5lcmFsOnVudGl0bGVkJyl9XWA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY0xhYmVsID0gZG9jLmlkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5hdiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbi5zbHVnfWAsXG4gICAgICAgICAgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnBsdXJhbCwgaTE4biksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogZG9jTGFiZWwsXG4gICAgICAgICAgdXJsOiBlZGl0VVJMLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IHQoJ3ZlcnNpb25zJyksXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWwpIHtcbiAgICAgIG5hdiA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHVybDogZWRpdFVSTCxcbiAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oZ2xvYmFsLmxhYmVsLCBpMThuKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiB0KCd2ZXJzaW9ucycpLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9XG5cbiAgICBzZXRTdGVwTmF2KG5hdik7XG4gIH0sIFtzZXRTdGVwTmF2LCBjb2xsZWN0aW9uLCBnbG9iYWwsIHVzZUFzVGl0bGUsIGRvYywgYWRtaW4sIGlkLCBlZGl0VVJMLCB0LCBpMThuXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBkZXB0aDogMSxcbiAgICAgIHBhZ2U6IHVuZGVmaW5lZCxcbiAgICAgIHNvcnQ6IHVuZGVmaW5lZCxcbiAgICAgIGxpbWl0LFxuICAgICAgd2hlcmU6IHt9LFxuICAgIH07XG5cbiAgICBpZiAocGFnZSkgcGFyYW1zLnBhZ2UgPSBwYWdlO1xuICAgIGlmIChzb3J0KSBwYXJhbXMuc29ydCA9IHNvcnQ7XG5cbiAgICBsZXQgZmV0Y2hVUkxUb1NldDogc3RyaW5nO1xuXG4gICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgIGZldGNoVVJMVG9TZXQgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7Y29sbGVjdGlvbi5zbHVnfS92ZXJzaW9uc2A7XG4gICAgICBwYXJhbXMud2hlcmUgPSB7XG4gICAgICAgIHBhcmVudDoge1xuICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChnbG9iYWwpIHtcbiAgICAgIGZldGNoVVJMVG9TZXQgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30vdmVyc2lvbnNgO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm1hbmNlIGVuaGFuY2VtZW50XG4gICAgLy8gU2V0dGluZyB0aGUgRmV0Y2ggVVJMIHRoaXMgd2F5XG4gICAgLy8gcHJldmVudHMgYSBkb3VibGUtZmV0Y2hcblxuICAgIHNldEZldGNoVVJMKGZldGNoVVJMVG9TZXQpO1xuXG4gICAgc2V0UGFyYW1zKHBhcmFtcyk7XG4gIH0sIFtzZXRQYXJhbXMsIHBhZ2UsIHNvcnQsIGxpbWl0LCBzZXJ2ZXJVUkwsIGFwaSwgaWQsIGdsb2JhbCwgY29sbGVjdGlvbl0pO1xuXG4gIGxldCB1c2VJRExhYmVsID0gZG9jW3VzZUFzVGl0bGVdID09PSBkb2M/LmlkO1xuICBsZXQgaGVhZGluZzogc3RyaW5nO1xuICBsZXQgbWV0YURlc2M6IHN0cmluZztcbiAgbGV0IG1ldGFUaXRsZTogc3RyaW5nO1xuXG4gIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgbWV0YVRpdGxlID0gYCR7dCgndmVyc2lvbnMnKX0gLSAke2RvY1t1c2VBc1RpdGxlXX0gLSAke2VudGl0eUxhYmVsfWA7XG4gICAgbWV0YURlc2MgPSB0KCd2aWV3aW5nVmVyc2lvbnMnLCB7IGRvY3VtZW50VGl0bGU6IGRvY1t1c2VBc1RpdGxlXSwgZW50aXR5TGFiZWwgfSk7XG4gICAgaGVhZGluZyA9IGRvYz8uW3VzZUFzVGl0bGVdIHx8IGBbJHt0KCdnZW5lcmFsOnVudGl0bGVkJyl9XWA7XG4gIH1cblxuICBpZiAoZ2xvYmFsKSB7XG4gICAgbWV0YVRpdGxlID0gYCR7dCgndmVyc2lvbnMnKX0gLSAke2VudGl0eUxhYmVsfWA7XG4gICAgbWV0YURlc2MgPSB0KCd2aWV3aW5nVmVyc2lvbnNHbG9iYWwnLCB7IGVudGl0eUxhYmVsIH0pO1xuICAgIGhlYWRpbmcgPSBlbnRpdHlMYWJlbDtcbiAgICB1c2VJRExhYmVsID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMb2FkaW5nT3ZlcmxheVRvZ2dsZVxuICAgICAgICBzaG93PXtpc0xvYWRpbmdWZXJzaW9uc31cbiAgICAgICAgbmFtZT1cInZlcnNpb25zXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgICAgPE1ldGFcbiAgICAgICAgICB0aXRsZT17bWV0YVRpdGxlfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXttZXRhRGVzY31cbiAgICAgICAgLz5cbiAgICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgICAgPEd1dHRlciBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW50cm9gfT57dCgnc2hvd2luZ1ZlcnNpb25zRm9yJyl9PC9kaXY+XG4gICAgICAgICAgICB7dXNlSURMYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxJRExhYmVsIGlkPXtkb2M/LmlkfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshdXNlSURMYWJlbCAmJiAoXG4gICAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICB7aGVhZGluZ31cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICB7dmVyc2lvbnNEYXRhPy50b3RhbERvY3MgPiAwICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgZGF0YT17dmVyc2lvbnNEYXRhPy5kb2NzfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2J1aWxkVmVyc2lvbkNvbHVtbnMoXG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgZ2xvYmFsLFxuICAgICAgICAgICAgICAgICAgdCxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcGFnZS1jb250cm9sc2B9PlxuICAgICAgICAgICAgICAgIDxQYWdpbmF0b3JcbiAgICAgICAgICAgICAgICAgIGxpbWl0PXt2ZXJzaW9uc0RhdGEubGltaXR9XG4gICAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXt2ZXJzaW9uc0RhdGEudG90YWxQYWdlc31cbiAgICAgICAgICAgICAgICAgIHBhZ2U9e3ZlcnNpb25zRGF0YS5wYWdlfVxuICAgICAgICAgICAgICAgICAgaGFzUHJldlBhZ2U9e3ZlcnNpb25zRGF0YS5oYXNQcmV2UGFnZX1cbiAgICAgICAgICAgICAgICAgIGhhc05leHRQYWdlPXt2ZXJzaW9uc0RhdGEuaGFzTmV4dFBhZ2V9XG4gICAgICAgICAgICAgICAgICBwcmV2UGFnZT17dmVyc2lvbnNEYXRhLnByZXZQYWdlfVxuICAgICAgICAgICAgICAgICAgbmV4dFBhZ2U9e3ZlcnNpb25zRGF0YS5uZXh0UGFnZX1cbiAgICAgICAgICAgICAgICAgIG51bWJlck9mTmVpZ2hib3JzPXsxfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3ZlcnNpb25zRGF0YT8udG90YWxEb2NzID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19wYWdlLWluZm9gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7KHZlcnNpb25zRGF0YS5wYWdlICogdmVyc2lvbnNEYXRhLmxpbWl0KSAtICh2ZXJzaW9uc0RhdGEubGltaXQgLSAxKX1cbiAgICAgICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgICAgICAge3ZlcnNpb25zRGF0YS50b3RhbFBhZ2VzID4gMSAmJiB2ZXJzaW9uc0RhdGEudG90YWxQYWdlcyAhPT0gdmVyc2lvbnNEYXRhLnBhZ2UgPyAodmVyc2lvbnNEYXRhLmxpbWl0ICogdmVyc2lvbnNEYXRhLnBhZ2UpIDogdmVyc2lvbnNEYXRhLnRvdGFsRG9jc31cbiAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgIHt0KCdvZicpfVxuICAgICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAge3ZlcnNpb25zRGF0YS50b3RhbERvY3N9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UGVyUGFnZVxuICAgICAgICAgICAgICAgICAgICAgIGxpbWl0cz17Y29sbGVjdGlvbj8uYWRtaW4/LnBhZ2luYXRpb24/LmxpbWl0c31cbiAgICAgICAgICAgICAgICAgICAgICBsaW1pdD17bGltaXQgPyBOdW1iZXIobGltaXQpIDogMTB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt2ZXJzaW9uc0RhdGE/LnRvdGFsRG9jcyA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbm8tdmVyc2lvbnNgfT5cbiAgICAgICAgICAgICAge3QoJ25vRnVydGhlclZlcnNpb25zRm91bmQnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3V0dGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZlcnNpb25zO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZU1hdGNoIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJ1c2VQYXlsb2FkQVBJIiwiRXllYnJvdyIsIkxvYWRpbmdPdmVybGF5VG9nZ2xlIiwidXNlU3RlcE5hdiIsIk1ldGEiLCJJRExhYmVsIiwiVGFibGUiLCJQYWdpbmF0b3IiLCJQZXJQYWdlIiwidXNlU2VhcmNoUGFyYW1zIiwiR3V0dGVyIiwiZ2V0VHJhbnNsYXRpb24iLCJidWlsZFZlcnNpb25Db2x1bW5zIiwiYmFzZUNsYXNzIiwiVmVyc2lvbnMiLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiZG9jIiwidmVyc2lvbnNEYXRhIiwic2VydmVyVVJMIiwicm91dGVzIiwiYWRtaW4iLCJhcGkiLCJzZXRTdGVwTmF2IiwicGFyYW1zIiwiaWQiLCJ0IiwiaTE4biIsImZldGNoVVJMIiwic2V0RmV0Y2hVUkwiLCJwYWdlIiwic29ydCIsImxpbWl0IiwiZG9jVVJMIiwiZW50aXR5TGFiZWwiLCJzbHVnIiwiZWRpdFVSTCIsImxhYmVscyIsInNpbmd1bGFyIiwibGFiZWwiLCJ1c2VBc1RpdGxlIiwiaW5pdGlhbFBhcmFtcyIsImRyYWZ0IiwiZGF0YSIsImlzTG9hZGluZyIsImlzTG9hZGluZ1ZlcnNpb25zIiwic2V0UGFyYW1zIiwibmF2IiwiZG9jTGFiZWwiLCJ1cmwiLCJwbHVyYWwiLCJkZXB0aCIsInVuZGVmaW5lZCIsIndoZXJlIiwiZmV0Y2hVUkxUb1NldCIsInBhcmVudCIsImVxdWFscyIsInVzZUlETGFiZWwiLCJoZWFkaW5nIiwibWV0YURlc2MiLCJtZXRhVGl0bGUiLCJkb2N1bWVudFRpdGxlIiwiRnJhZ21lbnQiLCJzaG93IiwibmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoZWFkZXIiLCJoMSIsInRvdGFsRG9jcyIsImRvY3MiLCJjb2x1bW5zIiwidG90YWxQYWdlcyIsImhhc1ByZXZQYWdlIiwiaGFzTmV4dFBhZ2UiLCJwcmV2UGFnZSIsIm5leHRQYWdlIiwibnVtYmVyT2ZOZWlnaGJvcnMiLCJsaW1pdHMiLCJwYWdpbmF0aW9uIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNuRCxTQUFTQyxhQUFhLFFBQVEsbUJBQW1CO0FBQ2pELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxPQUFPQyxtQkFBbUIsK0JBQStCO0FBQ3pELE9BQU9DLGFBQWEseUJBQXlCO0FBQzdDLFNBQVNDLG9CQUFvQixRQUFRLHlCQUF5QjtBQUM5RCxTQUFTQyxVQUFVLFFBQVEseUJBQXlCO0FBRXBELE9BQU9DLFVBQVUsdUJBQXVCO0FBRXhDLE9BQU9DLGFBQWEseUJBQXlCO0FBQzdDLFNBQVNDLEtBQUssUUFBUSx1QkFBdUI7QUFDN0MsT0FBT0MsZUFBZSwyQkFBMkI7QUFDakQsT0FBT0MsYUFBYSx5QkFBeUI7QUFDN0MsU0FBU0MsZUFBZSxRQUFRLCtCQUErQjtBQUMvRCxTQUFTQyxNQUFNLFFBQVEsd0JBQXdCO0FBQy9DLFNBQVNDLGNBQWMsUUFBUSx1Q0FBdUM7QUFDdEUsU0FBU0MsbUJBQW1CLFFBQVEsWUFBWTtBQUVoRCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxXQUE0QjtRQUFHQyxtQkFBQUEsWUFBWUMsZUFBQUE7UUEyQjVCRCxtQkFBQUEsYUF3RmtCRSxNQWtDWkEsT0FTaEJDLGVBR1dBLGdCQWtCTEEsZ0JBWWFILDhCQUFBQSxvQkFBQUEsY0FRbkJHO0lBdE1ULElBQThDbkIsYUFBQUEsYUFBdENvQixZQUFzQ3BCLFdBQXRDb0IsK0JBQXNDcEIsV0FBM0JxQixRQUFVQywwQkFBQUEsT0FBT0Msd0JBQUFBO0lBQ3BDLElBQU0sQUFBRUMsYUFBZXBCLGFBQWZvQjtJQUNSLElBQTJCMUIsaUJBQUFBLGlCQUFuQjJCLEFBQVVDLEtBQVM1QixlQUFuQjJCLE9BQVVDO0lBQ2xCLElBQW9CM0Isa0JBQUFBLGVBQWUsWUFBM0I0QixJQUFZNUIsZ0JBQVo0QixHQUFHQyxPQUFTN0IsZ0JBQVQ2QjtJQUNYLElBQWdDL0IsNkJBQUFBLFNBQVMsU0FBbENnQyxXQUF5QmhDLGNBQWZpQyxjQUFlakM7SUFDaEMsSUFBOEJhLG1CQUFBQSxtQkFBdEJxQixPQUFzQnJCLGlCQUF0QnFCLE1BQU1DLE9BQWdCdEIsaUJBQWhCc0IsTUFBTUMsUUFBVXZCLGlCQUFWdUI7SUFFcEIsSUFBSUM7SUFDSixJQUFJQztJQUNKLElBQUlDO0lBQ0osSUFBSUM7SUFFSixJQUFJckIsWUFBWTtRQUNYb0IsT0FBU3BCLFdBQVRvQjtRQUNIRixTQUFTLEFBQUMsR0FBY1gsT0FBWkgsV0FBbUJnQixPQUFQYixLQUFJLEtBQVdHLE9BQVJVLE1BQUssS0FBTSxPQUFIVjtRQUN2Q1MsY0FBY3ZCLGVBQWVJLFdBQVdzQixNQUFNLENBQUNDLFFBQVEsRUFBRVg7UUFDekRTLFVBQVUsQUFBQyxHQUF1QnJCLE9BQXJCTSxPQUFNLGlCQUFrQ0ksT0FBbkJWLFdBQVdvQixJQUFJLEVBQUMsS0FBTSxPQUFIVjtJQUN2RDtJQUVBLElBQUlULFFBQVE7UUFDUG1CLE9BQVNuQixPQUFUbUI7UUFDSEYsU0FBUyxBQUFDLEdBQWNYLE9BQVpILFdBQTJCZ0IsT0FBZmIsS0FBSSxhQUFnQixPQUFMYTtRQUN2Q0QsY0FBY3ZCLGVBQWVLLE9BQU91QixLQUFLLEVBQUVaO1FBQzNDUyxVQUFVLEFBQUMsR0FBbUJwQixPQUFqQkssT0FBTSxhQUF1QixPQUFaTCxPQUFPbUIsSUFBSTtJQUMzQztJQUVBLElBQU1LLGFBQWF6QixFQUFBQSxjQUFBQSx3QkFBQUEsbUNBQUFBLG9CQUFBQSxZQUFZTSxLQUFLLGNBQWpCTix3Q0FBQUEsa0JBQW1CeUIsVUFBVSxLQUFJO0lBQ3BELElBQXdCeEMsa0NBQUFBLGNBQWNpQyxRQUFRO1FBQUVRLGVBQWU7WUFBRUMsT0FBTztRQUFPO0lBQUUsMEJBQXpEMUMsbUJBQWYyQyxBQUFNMUIsc0JBQU4wQjtJQUNULElBQThFM0MsbUNBQUFBLGNBQWM0QixrQ0FBZDVCLG9CQUFyRTJDLEFBQU16QixnQ0FBTnlCLE1BQW9CQyxBQUFXQyxxQ0FBWEQsV0FBZ0MsQUFBRUUsWUFBZTlDLG1CQUFmOEM7SUFFL0RuRCxVQUFVO1FBQ1IsSUFBSW9ELE1BQXFCLEVBQUU7UUFFM0IsSUFBSWhDLFlBQVk7WUFDZCxJQUFJaUMsV0FBVztZQUVmLElBQUkvQixLQUFLO2dCQUNQLElBQUl1QixZQUFZO29CQUNkLElBQUl2QixHQUFHLENBQUN1QixXQUFXLEVBQUU7d0JBQ25CUSxXQUFXL0IsR0FBRyxDQUFDdUIsV0FBVztvQkFDNUIsT0FBTzt3QkFDTFEsV0FBVyxBQUFDLElBQXlCLE9BQXRCdEIsRUFBRSxxQkFBb0I7b0JBQ3ZDO2dCQUNGLE9BQU87b0JBQ0xzQixXQUFXL0IsSUFBSVEsRUFBRTtnQkFDbkI7WUFDRjtZQUVBc0IsTUFBTTtnQkFDSjtvQkFDRUUsS0FBSyxBQUFDLEdBQXVCbEMsT0FBckJNLE9BQU0saUJBQStCLE9BQWhCTixXQUFXb0IsSUFBSTtvQkFDNUNJLE9BQU81QixlQUFlSSxXQUFXc0IsTUFBTSxDQUFDYSxNQUFNLEVBQUV2QjtnQkFDbEQ7Z0JBQ0E7b0JBQ0VZLE9BQU9TO29CQUNQQyxLQUFLYjtnQkFDUDtnQkFDQTtvQkFDRUcsT0FBT2IsRUFBRTtnQkFDWDthQUNEO1FBQ0g7UUFFQSxJQUFJVixRQUFRO1lBQ1YrQixNQUFNO2dCQUNKO29CQUNFRSxLQUFLYjtvQkFDTEcsT0FBTzVCLGVBQWVLLE9BQU91QixLQUFLLEVBQUVaO2dCQUN0QztnQkFDQTtvQkFDRVksT0FBT2IsRUFBRTtnQkFDWDthQUNEO1FBQ0g7UUFFQUgsV0FBV3dCO0lBQ2IsR0FBRztRQUFDeEI7UUFBWVI7UUFBWUM7UUFBUXdCO1FBQVl2QjtRQUFLSTtRQUFPSTtRQUFJVztRQUFTVjtRQUFHQztLQUFLO0lBRWpGaEMsVUFBVTtRQUNSLElBQU02QixTQUFTO1lBQ2IyQixPQUFPO1lBQ1ByQixNQUFNc0I7WUFDTnJCLE1BQU1xQjtZQUNOcEIsT0FBQUE7WUFDQXFCLE9BQU8sQ0FBQztRQUNWO1FBRUEsSUFBSXZCLE1BQU1OLE9BQU9NLElBQUksR0FBR0E7UUFDeEIsSUFBSUMsTUFBTVAsT0FBT08sSUFBSSxHQUFHQTtRQUV4QixJQUFJdUI7UUFFSixJQUFJdkMsWUFBWTtZQUNkdUMsZ0JBQWdCLEFBQUMsR0FBY2hDLE9BQVpILFdBQW1CSixPQUFQTyxLQUFJLEtBQW1CLE9BQWhCUCxXQUFXb0IsSUFBSSxFQUFDO1lBQ3REWCxPQUFPNkIsS0FBSyxHQUFHO2dCQUNiRSxRQUFRO29CQUNOQyxRQUFRL0I7Z0JBQ1Y7WUFDRjtRQUNGO1FBRUEsSUFBSVQsUUFBUTtZQUNWc0MsZ0JBQWdCLEFBQUMsR0FBY2hDLE9BQVpILFdBQTJCSCxPQUFmTSxLQUFJLGFBQXVCLE9BQVpOLE9BQU9tQixJQUFJLEVBQUM7UUFDNUQ7UUFFQSwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLDBCQUEwQjtRQUUxQk4sWUFBWXlCO1FBRVpSLFVBQVV0QjtJQUNaLEdBQUc7UUFBQ3NCO1FBQVdoQjtRQUFNQztRQUFNQztRQUFPYjtRQUFXRztRQUFLRztRQUFJVDtRQUFRRDtLQUFXO0lBRXpFLElBQUkwQyxhQUFheEMsR0FBRyxDQUFDdUIsV0FBVyxPQUFLdkIsT0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFLUSxFQUFFO0lBQzVDLElBQUlpQztJQUNKLElBQUlDO0lBQ0osSUFBSUM7SUFFSixJQUFJN0MsWUFBWTtZQUdKRTtRQUZWMkMsWUFBWSxBQUFDLEdBQXFCM0MsT0FBbkJTLEVBQUUsYUFBWSxPQUEwQlEsT0FBckJqQixHQUFHLENBQUN1QixXQUFXLEVBQUMsT0FBaUIsT0FBWk47UUFDdkR5QixXQUFXakMsRUFBRSxtQkFBbUI7WUFBRW1DLGVBQWU1QyxHQUFHLENBQUN1QixXQUFXO1lBQUVOLGFBQUFBO1FBQVk7UUFDOUV3QixVQUFVekMsRUFBQUEsUUFBQUEsaUJBQUFBLDRCQUFBQSxLQUFLLENBQUN1QixXQUFXLEtBQUksQUFBQyxJQUF5QixPQUF0QmQsRUFBRSxxQkFBb0I7SUFDM0Q7SUFFQSxJQUFJVixRQUFRO1FBQ1Y0QyxZQUFZLEFBQUMsR0FBcUIxQixPQUFuQlIsRUFBRSxhQUFZLE9BQWlCLE9BQVpRO1FBQ2xDeUIsV0FBV2pDLEVBQUUseUJBQXlCO1lBQUVRLGFBQUFBO1FBQVk7UUFDcER3QixVQUFVeEI7UUFDVnVCLGFBQWE7SUFDZjtJQUVBLHFCQUNFLG9CQUFDL0QsTUFBTW9FLFFBQVEsc0JBQ2Isb0JBQUM1RDtRQUNDNkQsTUFBTWxCO1FBQ05tQixNQUFLO3NCQUVQLG9CQUFDQztRQUFJQyxXQUFXckQ7cUJBQ2Qsb0JBQUNUO1FBQ0MrRCxPQUFPUDtRQUNQUSxhQUFhVDtzQkFFZixvQkFBQzFELDhCQUNELG9CQUFDUztRQUFPd0QsV0FBVyxBQUFDLEdBQVksT0FBVnJELFdBQVU7cUJBQzlCLG9CQUFDd0Q7UUFBT0gsV0FBVyxBQUFDLEdBQVksT0FBVnJELFdBQVU7cUJBQzlCLG9CQUFDb0Q7UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVnJELFdBQVU7T0FBV2EsRUFBRSx3QkFDekMrQiw0QkFDQyxvQkFBQ3BEO1FBQVFvQixFQUFFLEdBQUVSLFFBQUFBLGlCQUFBQSw0QkFBQUEsTUFBS1EsRUFBRTtRQUVyQixDQUFDZ0MsNEJBQ0Esb0JBQUNhLFlBQ0VaLFdBS054QyxFQUFBQSxnQkFBQUEsMEJBQUFBLG9DQUFBQSxjQUFjcUQsU0FBUyxJQUFHLG1CQUN6QixvQkFBQzdFLE1BQU1vRSxRQUFRLHNCQUNiLG9CQUFDeEQ7UUFDQ3FDLElBQUksR0FBRXpCLGlCQUFBQSwwQkFBQUEscUNBQUFBLGVBQWNzRCxJQUFJO1FBQ3hCQyxTQUFTN0Qsb0JBQ1BHLFlBQ0FDLFFBQ0FVO3NCQUdKLG9CQUFDdUM7UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVnJELFdBQVU7cUJBQzNCLG9CQUFDTjtRQUNDeUIsT0FBT2QsYUFBYWMsS0FBSztRQUN6QjBDLFlBQVl4RCxhQUFhd0QsVUFBVTtRQUNuQzVDLE1BQU1aLGFBQWFZLElBQUk7UUFDdkI2QyxhQUFhekQsYUFBYXlELFdBQVc7UUFDckNDLGFBQWExRCxhQUFhMEQsV0FBVztRQUNyQ0MsVUFBVTNELGFBQWEyRCxRQUFRO1FBQy9CQyxVQUFVNUQsYUFBYTRELFFBQVE7UUFDL0JDLG1CQUFtQjtRQUVwQjdELEVBQUFBLGlCQUFBQSwwQkFBQUEscUNBQUFBLGVBQWNxRCxTQUFTLElBQUcsbUJBQ3pCLG9CQUFDN0UsTUFBTW9FLFFBQVEsc0JBQ2Isb0JBQUNHO1FBQUlDLFdBQVcsQUFBQyxHQUFZLE9BQVZyRCxXQUFVO09BQzFCLEFBQUNLLGFBQWFZLElBQUksR0FBR1osYUFBYWMsS0FBSyxHQUFLZCxDQUFBQSxhQUFhYyxLQUFLLEdBQUcsQ0FBQSxHQUFHLEtBRXBFZCxhQUFhd0QsVUFBVSxHQUFHLEtBQUt4RCxhQUFhd0QsVUFBVSxLQUFLeEQsYUFBYVksSUFBSSxHQUFJWixhQUFhYyxLQUFLLEdBQUdkLGFBQWFZLElBQUksR0FBSVosYUFBYXFELFNBQVMsRUFDaEosS0FDQTdDLEVBQUUsT0FDRixLQUNBUixhQUFhcUQsU0FBUyxpQkFFekIsb0JBQUMvRDtRQUNDd0UsTUFBTSxHQUFFakUsZUFBQUEsd0JBQUFBLG9DQUFBQSxxQkFBQUEsYUFBWU0sS0FBSyxjQUFqQk4sMENBQUFBLCtCQUFBQSxtQkFBbUJrRSxVQUFVLGNBQTdCbEUsbURBQUFBLDZCQUErQmlFLE1BQU07UUFDN0NoRCxPQUFPQSxRQUFRa0QsT0FBT2xELFNBQVM7V0FPMUNkLEVBQUFBLGlCQUFBQSwwQkFBQUEscUNBQUFBLGVBQWNxRCxTQUFTLE1BQUssbUJBQzNCLG9CQUFDTjtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWckQsV0FBVTtPQUMxQmEsRUFBRTtBQU9qQjtBQUVBLGVBQWVaLFNBQVMifQ==