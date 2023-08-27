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
import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useWindowInfo } from "@faceless-ui/window-info";
import Eyebrow from "../../../elements/Eyebrow";
import Paginator from "../../../elements/Paginator";
import ListControls from "../../../elements/ListControls";
import ListSelection from "../../../elements/ListSelection";
import Pill from "../../../elements/Pill";
import Button from "../../../elements/Button";
import { Table } from "../../../elements/Table";
import Meta from "../../../utilities/Meta";
import ViewDescription from "../../../elements/ViewDescription";
import PerPage from "../../../elements/PerPage";
import { Gutter } from "../../../elements/Gutter";
import { RelationshipProvider } from "./RelationshipProvider";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { StaggeredShimmers } from "../../../elements/ShimmerEffect";
import { SelectionProvider } from "./SelectionProvider";
import EditMany from "../../../elements/EditMany";
import DeleteMany from "../../../elements/DeleteMany";
import PublishMany from "../../../elements/PublishMany";
import UnpublishMany from "../../../elements/UnpublishMany";
import formatFilesize from "../../../../../uploads/formatFilesize";
import "./index.scss";
var baseClass = "collection-list";
var DefaultList = function(props) {
    var _data, _collection_admin_pagination, _collection_admin, _collection;
    var collection = props.collection, _props_collection = props.collection, _props_collection_labels = _props_collection.labels, singularLabel = _props_collection_labels.singular, pluralLabel = _props_collection_labels.plural, tmp = _props_collection.admin, _ref = tmp === void 0 ? {} : tmp, description = _ref.description, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, BeforeList = _ref1.BeforeList, BeforeListTable = _ref1.BeforeListTable, AfterListTable = _ref1.AfterListTable, AfterList = _ref1.AfterList, data = props.data, newDocumentURL = props.newDocumentURL, limit = props.limit, hasCreatePermission = props.hasCreatePermission, disableEyebrow = props.disableEyebrow, modifySearchParams = props.modifySearchParams, handleSortChange = props.handleSortChange, handleWhereChange = props.handleWhereChange, handlePageChange = props.handlePageChange, handlePerPageChange = props.handlePerPageChange, customHeader = props.customHeader, resetParams = props.resetParams;
    var _useWindowInfo = useWindowInfo(), _useWindowInfo_breakpoints = _useWindowInfo.breakpoints, smallBreak = _useWindowInfo_breakpoints.s;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var formattedDocs = data.docs || [];
    if (collection.upload) {
        var _formattedDocs;
        formattedDocs = (_formattedDocs = formattedDocs) === null || _formattedDocs === void 0 ? void 0 : _formattedDocs.map(function(doc) {
            return _object_spread_props(_object_spread({}, doc), {
                filesize: formatFilesize(doc.filesize)
            });
        });
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, Array.isArray(BeforeList) && BeforeList.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, _object_spread({
            key: i
        }, props));
    }), /*#__PURE__*/ React.createElement(Meta, {
        title: getTranslation(collection.labels.plural, i18n)
    }), /*#__PURE__*/ React.createElement(SelectionProvider, {
        docs: data.docs,
        totalDocs: data.totalDocs
    }, !disableEyebrow && /*#__PURE__*/ React.createElement(Eyebrow, null), /*#__PURE__*/ React.createElement(Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("header", {
        className: "".concat(baseClass, "__header")
    }, customHeader && customHeader, !customHeader && /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement("h1", null, getTranslation(pluralLabel, i18n)), hasCreatePermission && /*#__PURE__*/ React.createElement(Pill, {
        to: newDocumentURL,
        "aria-label": t("createNewLabel", {
            label: getTranslation(singularLabel, i18n)
        })
    }, t("createNew")), !smallBreak && /*#__PURE__*/ React.createElement(ListSelection, {
        label: getTranslation(collection.labels.plural, i18n)
    }), description && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__sub-header")
    }, /*#__PURE__*/ React.createElement(ViewDescription, {
        description: description
    })))), /*#__PURE__*/ React.createElement(ListControls, {
        collection: collection,
        modifySearchQuery: modifySearchParams,
        handleSortChange: handleSortChange,
        handleWhereChange: handleWhereChange,
        resetParams: resetParams
    }), Array.isArray(BeforeListTable) && BeforeListTable.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, _object_spread({
            key: i
        }, props));
    }), !data.docs && /*#__PURE__*/ React.createElement(StaggeredShimmers, {
        className: [
            "".concat(baseClass, "__shimmer"),
            "".concat(baseClass, "__shimmer--rows")
        ].join(" "),
        count: 6
    }), data.docs && data.docs.length > 0 && /*#__PURE__*/ React.createElement(RelationshipProvider, null, /*#__PURE__*/ React.createElement(Table, {
        data: formattedDocs
    })), data.docs && data.docs.length === 0 && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__no-results")
    }, /*#__PURE__*/ React.createElement("p", null, t("noResults", {
        label: getTranslation(pluralLabel, i18n)
    })), hasCreatePermission && newDocumentURL && /*#__PURE__*/ React.createElement(Button, {
        el: "link",
        to: newDocumentURL
    }, t("createNewLabel", {
        label: getTranslation(singularLabel, i18n)
    }))), Array.isArray(AfterListTable) && AfterListTable.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, _object_spread({
            key: i
        }, props));
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__page-controls")
    }, /*#__PURE__*/ React.createElement(Paginator, {
        limit: data.limit,
        totalPages: data.totalPages,
        page: data.page,
        hasPrevPage: data.hasPrevPage,
        hasNextPage: data.hasNextPage,
        prevPage: data.prevPage,
        nextPage: data.nextPage,
        numberOfNeighbors: 1,
        disableHistoryChange: modifySearchParams === false,
        onChange: handlePageChange
    }), ((_data = data) === null || _data === void 0 ? void 0 : _data.totalDocs) > 0 && /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__page-info")
    }, data.page * data.limit - (data.limit - 1), "-", data.totalPages > 1 && data.totalPages !== data.page ? data.limit * data.page : data.totalDocs, " ", t("of"), " ", data.totalDocs), /*#__PURE__*/ React.createElement(PerPage, {
        limits: (_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : (_collection_admin_pagination = _collection_admin.pagination) === null || _collection_admin_pagination === void 0 ? void 0 : _collection_admin_pagination.limits,
        limit: limit,
        modifySearchParams: modifySearchParams,
        handleChange: handlePerPageChange,
        resetPage: data.totalDocs <= data.pagingCounter
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__list-selection")
    }, smallBreak && /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement(ListSelection, {
        label: getTranslation(collection.labels.plural, i18n)
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__list-selection-actions")
    }, /*#__PURE__*/ React.createElement(EditMany, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ React.createElement(PublishMany, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ React.createElement(UnpublishMany, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ React.createElement(DeleteMany, {
        collection: collection,
        resetParams: resetParams
    })))))))), Array.isArray(AfterList) && AfterList.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, _object_spread({
            key: i
        }, props));
    }));
};
export default DefaultList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvRGVmYXVsdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVdpbmRvd0luZm8gfSBmcm9tICdAZmFjZWxlc3MtdWkvd2luZG93LWluZm8nO1xuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgUGFnaW5hdG9yIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1BhZ2luYXRvcic7XG5pbXBvcnQgTGlzdENvbnRyb2xzIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0xpc3RDb250cm9scyc7XG5pbXBvcnQgTGlzdFNlbGVjdGlvbiBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9MaXN0U2VsZWN0aW9uJztcbmltcG9ydCBQaWxsIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1BpbGwnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9UYWJsZSc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IFZpZXdEZXNjcmlwdGlvbiBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9WaWV3RGVzY3JpcHRpb24nO1xuaW1wb3J0IFBlclBhZ2UgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUGVyUGFnZSc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9HdXR0ZXInO1xuaW1wb3J0IHsgUmVsYXRpb25zaGlwUHJvdmlkZXIgfSBmcm9tICcuL1JlbGF0aW9uc2hpcFByb3ZpZGVyJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IFN0YWdnZXJlZFNoaW1tZXJzIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU2hpbW1lckVmZmVjdCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Qcm92aWRlciB9IGZyb20gJy4vU2VsZWN0aW9uUHJvdmlkZXInO1xuaW1wb3J0IEVkaXRNYW55IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0VkaXRNYW55JztcbmltcG9ydCBEZWxldGVNYW55IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RlbGV0ZU1hbnknO1xuaW1wb3J0IFB1Ymxpc2hNYW55IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1B1Ymxpc2hNYW55JztcbmltcG9ydCBVbnB1Ymxpc2hNYW55IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1VucHVibGlzaE1hbnknO1xuaW1wb3J0IGZvcm1hdEZpbGVzaXplIGZyb20gJy4uLy4uLy4uLy4uLy4uL3VwbG9hZHMvZm9ybWF0RmlsZXNpemUnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb2xsZWN0aW9uLWxpc3QnO1xuXG5jb25zdCBEZWZhdWx0TGlzdDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBzaW5ndWxhcjogc2luZ3VsYXJMYWJlbCxcbiAgICAgICAgcGx1cmFsOiBwbHVyYWxMYWJlbCxcbiAgICAgIH0sXG4gICAgICBhZG1pbjoge1xuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgIEJlZm9yZUxpc3QsXG4gICAgICAgICAgQmVmb3JlTGlzdFRhYmxlLFxuICAgICAgICAgIEFmdGVyTGlzdFRhYmxlLFxuICAgICAgICAgIEFmdGVyTGlzdCxcbiAgICAgICAgfSA9IHt9LFxuICAgICAgfSA9IHt9LFxuICAgIH0sXG4gICAgZGF0YSxcbiAgICBuZXdEb2N1bWVudFVSTCxcbiAgICBsaW1pdCxcbiAgICBoYXNDcmVhdGVQZXJtaXNzaW9uLFxuICAgIGRpc2FibGVFeWVicm93LFxuICAgIG1vZGlmeVNlYXJjaFBhcmFtcyxcbiAgICBoYW5kbGVTb3J0Q2hhbmdlLFxuICAgIGhhbmRsZVdoZXJlQ2hhbmdlLFxuICAgIGhhbmRsZVBhZ2VDaGFuZ2UsXG4gICAgaGFuZGxlUGVyUGFnZUNoYW5nZSxcbiAgICBjdXN0b21IZWFkZXIsXG4gICAgcmVzZXRQYXJhbXMsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGJyZWFrcG9pbnRzOiB7IHM6IHNtYWxsQnJlYWsgfSB9ID0gdXNlV2luZG93SW5mbygpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGxldCBmb3JtYXR0ZWREb2NzID0gZGF0YS5kb2NzIHx8IFtdO1xuXG4gIGlmIChjb2xsZWN0aW9uLnVwbG9hZCkge1xuICAgIGZvcm1hdHRlZERvY3MgPSBmb3JtYXR0ZWREb2NzPy5tYXAoKGRvYykgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uZG9jLFxuICAgICAgICBmaWxlc2l6ZTogZm9ybWF0RmlsZXNpemUoZG9jLmZpbGVzaXplKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAge0FycmF5LmlzQXJyYXkoQmVmb3JlTGlzdCkgJiYgQmVmb3JlTGlzdC5tYXAoKENvbXBvbmVudCwgaSkgPT4gKFxuICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuXG4gICAgICA8TWV0YVxuICAgICAgICB0aXRsZT17Z2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbi5sYWJlbHMucGx1cmFsLCBpMThuKX1cbiAgICAgIC8+XG4gICAgICA8U2VsZWN0aW9uUHJvdmlkZXJcbiAgICAgICAgZG9jcz17ZGF0YS5kb2NzfVxuICAgICAgICB0b3RhbERvY3M9e2RhdGEudG90YWxEb2NzfVxuICAgICAgPlxuICAgICAgICB7IWRpc2FibGVFeWVicm93ICYmIChcbiAgICAgICAgICA8RXllYnJvdyAvPlxuICAgICAgICApfVxuICAgICAgICA8R3V0dGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd3JhcGB9PlxuICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXJgfT5cbiAgICAgICAgICAgIHtjdXN0b21IZWFkZXIgJiYgY3VzdG9tSGVhZGVyfVxuICAgICAgICAgICAgeyFjdXN0b21IZWFkZXIgJiYgKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAge2dldFRyYW5zbGF0aW9uKHBsdXJhbExhYmVsLCBpMThuKX1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIHtoYXNDcmVhdGVQZXJtaXNzaW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxQaWxsXG4gICAgICAgICAgICAgICAgICAgIHRvPXtuZXdEb2N1bWVudFVSTH1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnY3JlYXRlTmV3TGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihzaW5ndWxhckxhYmVsLCBpMThuKSB9KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3QoJ2NyZWF0ZU5ldycpfVxuICAgICAgICAgICAgICAgICAgPC9QaWxsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyFzbWFsbEJyZWFrICYmIChcbiAgICAgICAgICAgICAgICAgIDxMaXN0U2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5wbHVyYWwsIGkxOG4pfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc3ViLWhlYWRlcmB9PlxuICAgICAgICAgICAgICAgICAgICA8Vmlld0Rlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxMaXN0Q29udHJvbHNcbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICBtb2RpZnlTZWFyY2hRdWVyeT17bW9kaWZ5U2VhcmNoUGFyYW1zfVxuICAgICAgICAgICAgaGFuZGxlU29ydENoYW5nZT17aGFuZGxlU29ydENoYW5nZX1cbiAgICAgICAgICAgIGhhbmRsZVdoZXJlQ2hhbmdlPXtoYW5kbGVXaGVyZUNoYW5nZX1cbiAgICAgICAgICAgIHJlc2V0UGFyYW1zPXtyZXNldFBhcmFtc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtBcnJheS5pc0FycmF5KEJlZm9yZUxpc3RUYWJsZSkgJiYgQmVmb3JlTGlzdFRhYmxlLm1hcCgoQ29tcG9uZW50LCBpKSA9PiAoXG4gICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7IWRhdGEuZG9jcyAmJiAoXG4gICAgICAgICAgICA8U3RhZ2dlcmVkU2hpbW1lcnNcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbYCR7YmFzZUNsYXNzfV9fc2hpbW1lcmAsIGAke2Jhc2VDbGFzc31fX3NoaW1tZXItLXJvd3NgXS5qb2luKCcgJyl9XG4gICAgICAgICAgICAgIGNvdW50PXs2fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsoZGF0YS5kb2NzICYmIGRhdGEuZG9jcy5sZW5ndGggPiAwKSAmJiAoXG4gICAgICAgICAgICA8UmVsYXRpb25zaGlwUHJvdmlkZXI+XG4gICAgICAgICAgICAgIDxUYWJsZSBkYXRhPXtmb3JtYXR0ZWREb2NzfSAvPlxuICAgICAgICAgICAgPC9SZWxhdGlvbnNoaXBQcm92aWRlcj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkYXRhLmRvY3MgJiYgZGF0YS5kb2NzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbm8tcmVzdWx0c2B9PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7dCgnbm9SZXN1bHRzJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24ocGx1cmFsTGFiZWwsIGkxOG4pIH0pfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIHtoYXNDcmVhdGVQZXJtaXNzaW9uICYmIG5ld0RvY3VtZW50VVJMICYmIChcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBlbD1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgdG89e25ld0RvY3VtZW50VVJMfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt0KCdjcmVhdGVOZXdMYWJlbCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKHNpbmd1bGFyTGFiZWwsIGkxOG4pIH0pfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShBZnRlckxpc3RUYWJsZSkgJiYgQWZ0ZXJMaXN0VGFibGUubWFwKChDb21wb25lbnQsIGkpID0+IChcbiAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3BhZ2UtY29udHJvbHNgfT5cbiAgICAgICAgICAgIDxQYWdpbmF0b3JcbiAgICAgICAgICAgICAgbGltaXQ9e2RhdGEubGltaXR9XG4gICAgICAgICAgICAgIHRvdGFsUGFnZXM9e2RhdGEudG90YWxQYWdlc31cbiAgICAgICAgICAgICAgcGFnZT17ZGF0YS5wYWdlfVxuICAgICAgICAgICAgICBoYXNQcmV2UGFnZT17ZGF0YS5oYXNQcmV2UGFnZX1cbiAgICAgICAgICAgICAgaGFzTmV4dFBhZ2U9e2RhdGEuaGFzTmV4dFBhZ2V9XG4gICAgICAgICAgICAgIHByZXZQYWdlPXtkYXRhLnByZXZQYWdlfVxuICAgICAgICAgICAgICBuZXh0UGFnZT17ZGF0YS5uZXh0UGFnZX1cbiAgICAgICAgICAgICAgbnVtYmVyT2ZOZWlnaGJvcnM9ezF9XG4gICAgICAgICAgICAgIGRpc2FibGVIaXN0b3J5Q2hhbmdlPXttb2RpZnlTZWFyY2hQYXJhbXMgPT09IGZhbHNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGF0YT8udG90YWxEb2NzID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcGFnZS1pbmZvYH0+XG4gICAgICAgICAgICAgICAgICB7KGRhdGEucGFnZSAqIGRhdGEubGltaXQpIC0gKGRhdGEubGltaXQgLSAxKX1cbiAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICAgIHtkYXRhLnRvdGFsUGFnZXMgPiAxICYmIGRhdGEudG90YWxQYWdlcyAhPT0gZGF0YS5wYWdlID8gKGRhdGEubGltaXQgKiBkYXRhLnBhZ2UpIDogZGF0YS50b3RhbERvY3N9XG4gICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAge3QoJ29mJyl9XG4gICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAge2RhdGEudG90YWxEb2NzfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxQZXJQYWdlXG4gICAgICAgICAgICAgICAgICBsaW1pdHM9e2NvbGxlY3Rpb24/LmFkbWluPy5wYWdpbmF0aW9uPy5saW1pdHN9XG4gICAgICAgICAgICAgICAgICBsaW1pdD17bGltaXR9XG4gICAgICAgICAgICAgICAgICBtb2RpZnlTZWFyY2hQYXJhbXM9e21vZGlmeVNlYXJjaFBhcmFtc31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlUGVyUGFnZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHJlc2V0UGFnZT17ZGF0YS50b3RhbERvY3MgPD0gZGF0YS5wYWdpbmdDb3VudGVyfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xpc3Qtc2VsZWN0aW9uYH0+XG4gICAgICAgICAgICAgICAgICB7c21hbGxCcmVhayAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdFNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2dldFRyYW5zbGF0aW9uKGNvbGxlY3Rpb24ubGFiZWxzLnBsdXJhbCwgaTE4bil9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGlzdC1zZWxlY3Rpb24tYWN0aW9uc2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRNYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0UGFyYW1zPXtyZXNldFBhcmFtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHVibGlzaE1hbnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRQYXJhbXM9e3Jlc2V0UGFyYW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVbnB1Ymxpc2hNYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0UGFyYW1zPXtyZXNldFBhcmFtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlTWFueVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldFBhcmFtcz17cmVzZXRQYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR3V0dGVyPlxuICAgICAgPC9TZWxlY3Rpb25Qcm92aWRlcj5cbiAgICAgIHtBcnJheS5pc0FycmF5KEFmdGVyTGlzdCkgJiYgQWZ0ZXJMaXN0Lm1hcCgoQ29tcG9uZW50LCBpKSA9PiAoXG4gICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VXaW5kb3dJbmZvIiwiRXllYnJvdyIsIlBhZ2luYXRvciIsIkxpc3RDb250cm9scyIsIkxpc3RTZWxlY3Rpb24iLCJQaWxsIiwiQnV0dG9uIiwiVGFibGUiLCJNZXRhIiwiVmlld0Rlc2NyaXB0aW9uIiwiUGVyUGFnZSIsIkd1dHRlciIsIlJlbGF0aW9uc2hpcFByb3ZpZGVyIiwiZ2V0VHJhbnNsYXRpb24iLCJTdGFnZ2VyZWRTaGltbWVycyIsIlNlbGVjdGlvblByb3ZpZGVyIiwiRWRpdE1hbnkiLCJEZWxldGVNYW55IiwiUHVibGlzaE1hbnkiLCJVbnB1Ymxpc2hNYW55IiwiZm9ybWF0RmlsZXNpemUiLCJiYXNlQ2xhc3MiLCJEZWZhdWx0TGlzdCIsInByb3BzIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJsYWJlbHMiLCJzaW5ndWxhciIsInNpbmd1bGFyTGFiZWwiLCJwbHVyYWwiLCJwbHVyYWxMYWJlbCIsImFkbWluIiwiZGVzY3JpcHRpb24iLCJjb21wb25lbnRzIiwiQmVmb3JlTGlzdCIsIkJlZm9yZUxpc3RUYWJsZSIsIkFmdGVyTGlzdFRhYmxlIiwiQWZ0ZXJMaXN0IiwibmV3RG9jdW1lbnRVUkwiLCJsaW1pdCIsImhhc0NyZWF0ZVBlcm1pc3Npb24iLCJkaXNhYmxlRXllYnJvdyIsIm1vZGlmeVNlYXJjaFBhcmFtcyIsImhhbmRsZVNvcnRDaGFuZ2UiLCJoYW5kbGVXaGVyZUNoYW5nZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYW5kbGVQZXJQYWdlQ2hhbmdlIiwiY3VzdG9tSGVhZGVyIiwicmVzZXRQYXJhbXMiLCJicmVha3BvaW50cyIsInMiLCJzbWFsbEJyZWFrIiwidCIsImkxOG4iLCJmb3JtYXR0ZWREb2NzIiwiZG9jcyIsInVwbG9hZCIsIm1hcCIsImRvYyIsImZpbGVzaXplIiwiZGl2IiwiY2xhc3NOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiQ29tcG9uZW50IiwiaSIsImtleSIsInRpdGxlIiwidG90YWxEb2NzIiwiaGVhZGVyIiwiaDEiLCJ0byIsImFyaWEtbGFiZWwiLCJsYWJlbCIsIm1vZGlmeVNlYXJjaFF1ZXJ5Iiwiam9pbiIsImNvdW50IiwibGVuZ3RoIiwicCIsImVsIiwidG90YWxQYWdlcyIsInBhZ2UiLCJoYXNQcmV2UGFnZSIsImhhc05leHRQYWdlIiwicHJldlBhZ2UiLCJuZXh0UGFnZSIsIm51bWJlck9mTmVpZ2hib3JzIiwiZGlzYWJsZUhpc3RvcnlDaGFuZ2UiLCJvbkNoYW5nZSIsImxpbWl0cyIsInBhZ2luYXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJyZXNldFBhZ2UiLCJwYWdpbmdDb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxRQUFRLFFBQVE7QUFDeEMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxhQUFhLFFBQVEsMkJBQTJCO0FBQ3pELE9BQU9DLGFBQWEsNEJBQTRCO0FBQ2hELE9BQU9DLGVBQWUsOEJBQThCO0FBQ3BELE9BQU9DLGtCQUFrQixpQ0FBaUM7QUFDMUQsT0FBT0MsbUJBQW1CLGtD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