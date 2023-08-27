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
import AnimateHeight from "react-animate-height";
import { useTranslation } from "react-i18next";
import { useWindowInfo } from "@faceless-ui/window-info";
import { fieldAffectsData } from "../../../../fields/config/types";
import SearchFilter from "../SearchFilter";
import ColumnSelector from "../ColumnSelector";
import WhereBuilder from "../WhereBuilder";
import SortComplex from "../SortComplex";
import Button from "../Button";
import { useSearchParams } from "../../utilities/SearchParams";
import validateWhereQuery from "../WhereBuilder/validateWhereQuery";
import flattenFields from "../../../../utilities/flattenTopLevelFields";
import { getTextFieldsToBeSearched } from "./getTextFieldsToBeSearched";
import { getTranslation } from "../../../../utilities/getTranslation";
import Pill from "../Pill";
import Chevron from "../../icons/Chevron";
import EditMany from "../EditMany";
import DeleteMany from "../DeleteMany";
import PublishMany from "../PublishMany";
import UnpublishMany from "../UnpublishMany";
import "./index.scss";
var baseClass = "list-controls";
var getUseAsTitle = function(collection) {
    var useAsTitle = collection.admin.useAsTitle, fields = collection.fields;
    var topLevelFields = flattenFields(fields);
    return topLevelFields.find(function(field) {
        return fieldAffectsData(field) && field.name === useAsTitle;
    });
};
/**
 * The ListControls component is used to render the controls (search, filter, where)
 * for a collection's list view. You can find those directly above the table which lists
 * the collection's documents.
 */ var ListControls = function(props) {
    var _params;
    var collection = props.collection, _props_enableColumns = props.enableColumns, enableColumns = _props_enableColumns === void 0 ? true : _props_enableColumns, _props_enableSort = props.enableSort, enableSort = _props_enableSort === void 0 ? false : _props_enableSort, handleSortChange = props.handleSortChange, handleWhereChange = props.handleWhereChange, _props_modifySearchQuery = props.modifySearchQuery, modifySearchQuery = _props_modifySearchQuery === void 0 ? true : _props_modifySearchQuery, resetParams = props.resetParams, _props_collection = props.collection, fields = _props_collection.fields, listSearchableFields = _props_collection.admin.listSearchableFields;
    var params = useSearchParams();
    var shouldInitializeWhereOpened = validateWhereQuery((_params = params) === null || _params === void 0 ? void 0 : _params.where);
    var _useState = _sliced_to_array(useState(getUseAsTitle(collection)), 2), titleField = _useState[0], setTitleField = _useState[1];
    useEffect(function() {
        setTitleField(getUseAsTitle(collection));
    }, [
        collection
    ]);
    var _useState1 = _sliced_to_array(useState(getTextFieldsToBeSearched(listSearchableFields, fields)), 1), textFieldsToBeSearched = _useState1[0];
    var _useState2 = _sliced_to_array(useState(shouldInitializeWhereOpened ? "where" : undefined), 2), visibleDrawer = _useState2[0], setVisibleDrawer = _useState2[1];
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useWindowInfo = useWindowInfo(), _useWindowInfo_breakpoints = _useWindowInfo.breakpoints, smallBreak = _useWindowInfo_breakpoints.s;
    var _ref;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement(SearchFilter, {
        fieldName: titleField && fieldAffectsData(titleField) ? titleField.name : undefined,
        handleChange: handleWhereChange,
        modifySearchQuery: modifySearchQuery,
        fieldLabel: (_ref = titleField && fieldAffectsData(titleField) && getTranslation(titleField.label || titleField.name, i18n)) !== null && _ref !== void 0 ? _ref : undefined,
        listSearchableFields: textFieldsToBeSearched
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__buttons")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__buttons-wrap")
    }, !smallBreak && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(EditMany, {
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
    })), enableColumns && /*#__PURE__*/ React.createElement(Pill, {
        pillStyle: "light",
        className: "".concat(baseClass, "__toggle-columns ").concat(visibleDrawer === "columns" ? "".concat(baseClass, "__buttons-active") : ""),
        onClick: function() {
            return setVisibleDrawer(visibleDrawer !== "columns" ? "columns" : undefined);
        },
        "aria-expanded": visibleDrawer === "columns",
        "aria-controls": "".concat(baseClass, "-columns"),
        icon: /*#__PURE__*/ React.createElement(Chevron, null)
    }, t("columns")), /*#__PURE__*/ React.createElement(Pill, {
        pillStyle: "light",
        className: "".concat(baseClass, "__toggle-where ").concat(visibleDrawer === "where" ? "".concat(baseClass, "__buttons-active") : ""),
        onClick: function() {
            return setVisibleDrawer(visibleDrawer !== "where" ? "where" : undefined);
        },
        "aria-expanded": visibleDrawer === "where",
        "aria-controls": "".concat(baseClass, "-where"),
        icon: /*#__PURE__*/ React.createElement(Chevron, null)
    }, t("filters")), enableSort && /*#__PURE__*/ React.createElement(Button, {
        className: "".concat(baseClass, "__toggle-sort"),
        buttonStyle: visibleDrawer === "sort" ? undefined : "secondary",
        onClick: function() {
            return setVisibleDrawer(visibleDrawer !== "sort" ? "sort" : undefined);
        },
        "aria-expanded": visibleDrawer === "sort",
        "aria-controls": "".concat(baseClass, "-sort"),
        icon: "chevron",
        iconStyle: "none"
    }, t("sort"))))), enableColumns && /*#__PURE__*/ React.createElement(AnimateHeight, {
        className: "".concat(baseClass, "__columns"),
        height: visibleDrawer === "columns" ? "auto" : 0,
        id: "".concat(baseClass, "-columns")
    }, /*#__PURE__*/ React.createElement(ColumnSelector, {
        collection: collection
    })), /*#__PURE__*/ React.createElement(AnimateHeight, {
        className: "".concat(baseClass, "__where"),
        height: visibleDrawer === "where" ? "auto" : 0,
        id: "".concat(baseClass, "-where")
    }, /*#__PURE__*/ React.createElement(WhereBuilder, {
        collection: collection,
        modifySearchQuery: modifySearchQuery,
        handleChange: handleWhereChange
    })), enableSort && /*#__PURE__*/ React.createElement(AnimateHeight, {
        className: "".concat(baseClass, "__sort"),
        height: visibleDrawer === "sort" ? "auto" : 0,
        id: "".concat(baseClass, "-sort")
    }, /*#__PURE__*/ React.createElement(SortComplex, {
        modifySearchQuery: modifySearchQuery,
        collection: collection,
        handleChange: handleSortChange
    })));
};
export default ListControls;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3RDb250cm9scy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0ZUhlaWdodCBmcm9tICdyZWFjdC1hbmltYXRlLWhlaWdodCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlV2luZG93SW5mbyB9IGZyb20gJ0BmYWNlbGVzcy11aS93aW5kb3ctaW5mbyc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gJy4uL1NlYXJjaEZpbHRlcic7XG5pbXBvcnQgQ29sdW1uU2VsZWN0b3IgZnJvbSAnLi4vQ29sdW1uU2VsZWN0b3InO1xuaW1wb3J0IFdoZXJlQnVpbGRlciBmcm9tICcuLi9XaGVyZUJ1aWxkZXInO1xuaW1wb3J0IFNvcnRDb21wbGV4IGZyb20gJy4uL1NvcnRDb21wbGV4JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcbmltcG9ydCB2YWxpZGF0ZVdoZXJlUXVlcnkgZnJvbSAnLi4vV2hlcmVCdWlsZGVyL3ZhbGlkYXRlV2hlcmVRdWVyeSc7XG5pbXBvcnQgZmxhdHRlbkZpZWxkcyBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzJztcbmltcG9ydCB7IGdldFRleHRGaWVsZHNUb0JlU2VhcmNoZWQgfSBmcm9tICcuL2dldFRleHRGaWVsZHNUb0JlU2VhcmNoZWQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgQ2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJztcbmltcG9ydCBFZGl0TWFueSBmcm9tICcuLi9FZGl0TWFueSc7XG5pbXBvcnQgRGVsZXRlTWFueSBmcm9tICcuLi9EZWxldGVNYW55JztcbmltcG9ydCBQdWJsaXNoTWFueSBmcm9tICcuLi9QdWJsaXNoTWFueSc7XG5pbXBvcnQgVW5wdWJsaXNoTWFueSBmcm9tICcuLi9VbnB1Ymxpc2hNYW55JztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsaXN0LWNvbnRyb2xzJztcblxuY29uc3QgZ2V0VXNlQXNUaXRsZSA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgdXNlQXNUaXRsZSxcbiAgICB9LFxuICAgIGZpZWxkcyxcbiAgfSA9IGNvbGxlY3Rpb247XG5cbiAgY29uc3QgdG9wTGV2ZWxGaWVsZHMgPSBmbGF0dGVuRmllbGRzKGZpZWxkcyk7XG4gIHJldHVybiB0b3BMZXZlbEZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gdXNlQXNUaXRsZSk7XG59O1xuXG4vKipcbiAqIFRoZSBMaXN0Q29udHJvbHMgY29tcG9uZW50IGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBjb250cm9scyAoc2VhcmNoLCBmaWx0ZXIsIHdoZXJlKVxuICogZm9yIGEgY29sbGVjdGlvbidzIGxpc3Qgdmlldy4gWW91IGNhbiBmaW5kIHRob3NlIGRpcmVjdGx5IGFib3ZlIHRoZSB0YWJsZSB3aGljaCBsaXN0c1xuICogdGhlIGNvbGxlY3Rpb24ncyBkb2N1bWVudHMuXG4gKi9cbmNvbnN0IExpc3RDb250cm9sczogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIGVuYWJsZUNvbHVtbnMgPSB0cnVlLFxuICAgIGVuYWJsZVNvcnQgPSBmYWxzZSxcbiAgICBoYW5kbGVTb3J0Q2hhbmdlLFxuICAgIGhhbmRsZVdoZXJlQ2hhbmdlLFxuICAgIG1vZGlmeVNlYXJjaFF1ZXJ5ID0gdHJ1ZSxcbiAgICByZXNldFBhcmFtcyxcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBmaWVsZHMsXG4gICAgICBhZG1pbjoge1xuICAgICAgICBsaXN0U2VhcmNoYWJsZUZpZWxkcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBzaG91bGRJbml0aWFsaXplV2hlcmVPcGVuZWQgPSB2YWxpZGF0ZVdoZXJlUXVlcnkocGFyYW1zPy53aGVyZSk7XG5cbiAgY29uc3QgW3RpdGxlRmllbGQsIHNldFRpdGxlRmllbGRdID0gdXNlU3RhdGUoZ2V0VXNlQXNUaXRsZShjb2xsZWN0aW9uKSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGl0bGVGaWVsZChnZXRVc2VBc1RpdGxlKGNvbGxlY3Rpb24pKTtcbiAgfSwgW2NvbGxlY3Rpb25dKTtcblxuICBjb25zdCBbdGV4dEZpZWxkc1RvQmVTZWFyY2hlZF0gPSB1c2VTdGF0ZShnZXRUZXh0RmllbGRzVG9CZVNlYXJjaGVkKGxpc3RTZWFyY2hhYmxlRmllbGRzLCBmaWVsZHMpKTtcbiAgY29uc3QgW3Zpc2libGVEcmF3ZXIsIHNldFZpc2libGVEcmF3ZXJdID0gdXNlU3RhdGU8J3doZXJlJyB8ICdzb3J0JyB8ICdjb2x1bW5zJz4oc2hvdWxkSW5pdGlhbGl6ZVdoZXJlT3BlbmVkID8gJ3doZXJlJyA6IHVuZGVmaW5lZCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgeyBicmVha3BvaW50czogeyBzOiBzbWFsbEJyZWFrIH0gfSA9IHVzZVdpbmRvd0luZm8oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPFNlYXJjaEZpbHRlclxuICAgICAgICAgIGZpZWxkTmFtZT17dGl0bGVGaWVsZCAmJiBmaWVsZEFmZmVjdHNEYXRhKHRpdGxlRmllbGQpID8gdGl0bGVGaWVsZC5uYW1lIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlV2hlcmVDaGFuZ2V9XG4gICAgICAgICAgbW9kaWZ5U2VhcmNoUXVlcnk9e21vZGlmeVNlYXJjaFF1ZXJ5fVxuICAgICAgICAgIGZpZWxkTGFiZWw9eyh0aXRsZUZpZWxkICYmIGZpZWxkQWZmZWN0c0RhdGEodGl0bGVGaWVsZCkgJiYgZ2V0VHJhbnNsYXRpb24odGl0bGVGaWVsZC5sYWJlbCB8fCB0aXRsZUZpZWxkLm5hbWUsIGkxOG4pKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgbGlzdFNlYXJjaGFibGVGaWVsZHM9e3RleHRGaWVsZHNUb0JlU2VhcmNoZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19idXR0b25zYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2J1dHRvbnMtd3JhcGB9PlxuICAgICAgICAgICAgeyAhc21hbGxCcmVhayAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RWRpdE1hbnlcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICByZXNldFBhcmFtcz17cmVzZXRQYXJhbXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UHVibGlzaE1hbnlcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICByZXNldFBhcmFtcz17cmVzZXRQYXJhbXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VW5wdWJsaXNoTWFueVxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgIHJlc2V0UGFyYW1zPXtyZXNldFBhcmFtc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEZWxldGVNYW55XG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgcmVzZXRQYXJhbXM9e3Jlc2V0UGFyYW1zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2VuYWJsZUNvbHVtbnMgJiYgKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIHBpbGxTdHlsZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZS1jb2x1bW5zICR7dmlzaWJsZURyYXdlciA9PT0gJ2NvbHVtbnMnID8gYCR7YmFzZUNsYXNzfV9fYnV0dG9ucy1hY3RpdmVgIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlRHJhd2VyKHZpc2libGVEcmF3ZXIgIT09ICdjb2x1bW5zJyA/ICdjb2x1bW5zJyA6IHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17dmlzaWJsZURyYXdlciA9PT0gJ2NvbHVtbnMnfVxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2Ake2Jhc2VDbGFzc30tY29sdW1uc2B9XG4gICAgICAgICAgICAgICAgaWNvbj17PENoZXZyb24gLz59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnY29sdW1ucycpfVxuICAgICAgICAgICAgICA8L1BpbGw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgcGlsbFN0eWxlPVwibGlnaHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZS13aGVyZSAke3Zpc2libGVEcmF3ZXIgPT09ICd3aGVyZScgPyBgJHtiYXNlQ2xhc3N9X19idXR0b25zLWFjdGl2ZWAgOiAnJ31gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlRHJhd2VyKHZpc2libGVEcmF3ZXIgIT09ICd3aGVyZScgPyAnd2hlcmUnIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17dmlzaWJsZURyYXdlciA9PT0gJ3doZXJlJ31cbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7YmFzZUNsYXNzfS13aGVyZWB9XG4gICAgICAgICAgICAgIGljb249ezxDaGV2cm9uIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnZmlsdGVycycpfVxuICAgICAgICAgICAgPC9QaWxsPlxuICAgICAgICAgICAge2VuYWJsZVNvcnQgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGUtc29ydGB9XG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9e3Zpc2libGVEcmF3ZXIgPT09ICdzb3J0JyA/IHVuZGVmaW5lZCA6ICdzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGVEcmF3ZXIodmlzaWJsZURyYXdlciAhPT0gJ3NvcnQnID8gJ3NvcnQnIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXt2aXNpYmxlRHJhd2VyID09PSAnc29ydCd9XG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7YmFzZUNsYXNzfS1zb3J0YH1cbiAgICAgICAgICAgICAgICBpY29uPVwiY2hldnJvblwiXG4gICAgICAgICAgICAgICAgaWNvblN0eWxlPVwibm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnc29ydCcpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZW5hYmxlQ29sdW1ucyAmJiAoXG4gICAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb2x1bW5zYH1cbiAgICAgICAgICBoZWlnaHQ9e3Zpc2libGVEcmF3ZXIgPT09ICdjb2x1bW5zJyA/ICdhdXRvJyA6IDB9XG4gICAgICAgICAgaWQ9e2Ake2Jhc2VDbGFzc30tY29sdW1uc2B9XG4gICAgICAgID5cbiAgICAgICAgICA8Q29sdW1uU2VsZWN0b3IgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgPC9BbmltYXRlSGVpZ2h0PlxuICAgICAgKX1cbiAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd2hlcmVgfVxuICAgICAgICBoZWlnaHQ9e3Zpc2libGVEcmF3ZXIgPT09ICd3aGVyZScgPyAnYXV0bycgOiAwfVxuICAgICAgICBpZD17YCR7YmFzZUNsYXNzfS13aGVyZWB9XG4gICAgICA+XG4gICAgICAgIDxXaGVyZUJ1aWxkZXJcbiAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIG1vZGlmeVNlYXJjaFF1ZXJ5PXttb2RpZnlTZWFyY2hRdWVyeX1cbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZVdoZXJlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9BbmltYXRlSGVpZ2h0PlxuICAgICAge2VuYWJsZVNvcnQgJiYgKFxuICAgICAgICA8QW5pbWF0ZUhlaWdodFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc29ydGB9XG4gICAgICAgICAgaGVpZ2h0PXt2aXNpYmxlRHJhd2VyID09PSAnc29ydCcgPyAnYXV0bycgOiAwfVxuICAgICAgICAgIGlkPXtgJHtiYXNlQ2xhc3N9LXNvcnRgfVxuICAgICAgICA+XG4gICAgICAgICAgPFNvcnRDb21wbGV4XG4gICAgICAgICAgICBtb2RpZnlTZWFyY2hRdWVyeT17bW9kaWZ5U2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVTb3J0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQW5pbWF0ZUhlaWdodD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Q29udHJvbHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFuaW1hdGVIZWlnaHQiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVdpbmRvd0luZm8iLCJmaWVsZEFmZmVjdHNEYXRhIiwiU2VhcmNoRmlsdGVyIiwiQ29sdW1uU2VsZWN0b3IiLCJXaGVyZUJ1aWxkZXIiLCJTb3J0Q29tcGxleCIsIkJ1dHRvbiIsInVzZVNlYXJjaFBhcmFtcyIsInZhbGlkYXRlV2hlcmVRdWVyeSIsImZsYXR0ZW5GaWVsZHMiLCJnZXRUZXh0RmllbGRzVG9CZVNlYXJjaGVkIiwiZ2V0VHJhbnNsYXRpb24iLCJQaWxsIiwiQ2hldnJvbiIsIkVkaXRNYW55IiwiRGVsZXRlTWFueSIsIlB1Ymxpc2hNYW55IiwiVW5wdWJsaXNoTWFueSIsImJhc2VDbGFzcyIsImdldFVzZUFzVGl0bGUiLCJjb2xsZWN0aW9uIiwiYWRtaW4iLCJ1c2VBc1RpdGxlIiwiZmllbGRzIiwidG9wTGV2ZWxGaWVsZHMiLCJmaW5kIiwiZmllbGQiLCJuYW1lIiwiTGlzdENvbnRyb2xzIiwicHJvcHMiLCJwYXJhbXMiLCJlbmFibGVDb2x1bW5zIiwiZW5hYmxlU29ydCIsImhhbmRsZVNvcnRDaGFuZ2UiLCJoYW5kbGVXaGVyZUNoYW5nZSIsIm1vZGlmeVNlYXJjaFF1ZXJ5IiwicmVzZXRQYXJhbXMiLCJsaXN0U2VhcmNoYWJsZUZpZWxkcyIsInNob3VsZEluaXRpYWxpemVXaGVyZU9wZW5lZCIsIndoZXJlIiwidGl0bGVGaWVsZCIsInNldFRpdGxlRmllbGQiLCJ0ZXh0RmllbGRzVG9CZVNlYXJjaGVkIiwidW5kZWZpbmVkIiwidmlzaWJsZURyYXdlciIsInNldFZpc2libGVEcmF3ZXIiLCJ0IiwiaTE4biIsImJyZWFrcG9pbnRzIiwicyIsInNtYWxsQnJlYWsiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWVsZE5hbWUiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZExhYmVsIiwibGFiZWwiLCJGcmFnbWVudCIsInBpbGxTdHlsZSIsIm9uQ2xpY2siLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1jb250cm9scyIsImljb24iLCJidXR0b25TdHlsZSIsImljb25TdHlsZSIsImhlaWdodCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNuRCxPQUFPQyxtQkFBbUIsdUJBQXVCO0FBQ2pELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsYUFBYSxRQUFRLDJC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