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
var _reactanimateheight = /*#__PURE__*/ _interop_require_default(require("react-animate-height"));
var _reacti18next = require("react-i18next");
var _windowinfo = require("@faceless-ui/window-info");
var _types = require("../../../../fields/config/types");
var _SearchFilter = /*#__PURE__*/ _interop_require_default(require("../SearchFilter"));
var _ColumnSelector = /*#__PURE__*/ _interop_require_default(require("../ColumnSelector"));
var _WhereBuilder = /*#__PURE__*/ _interop_require_default(require("../WhereBuilder"));
var _SortComplex = /*#__PURE__*/ _interop_require_default(require("../SortComplex"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _SearchParams = require("../../utilities/SearchParams");
var _validateWhereQuery = /*#__PURE__*/ _interop_require_default(require("../WhereBuilder/validateWhereQuery"));
var _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../../../utilities/flattenTopLevelFields"));
var _getTextFieldsToBeSearched = require("./getTextFieldsToBeSearched");
var _getTranslation = require("../../../../utilities/getTranslation");
var _Pill = /*#__PURE__*/ _interop_require_default(require("../Pill"));
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _EditMany = /*#__PURE__*/ _interop_require_default(require("../EditMany"));
var _DeleteMany = /*#__PURE__*/ _interop_require_default(require("../DeleteMany"));
var _PublishMany = /*#__PURE__*/ _interop_require_default(require("../PublishMany"));
var _UnpublishMany = /*#__PURE__*/ _interop_require_default(require("../UnpublishMany"));
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
var baseClass = "list-controls";
var getUseAsTitle = function(collection) {
    var useAsTitle = collection.admin.useAsTitle, fields = collection.fields;
    var topLevelFields = (0, _flattenTopLevelFields.default)(fields);
    return topLevelFields.find(function(field) {
        return (0, _types.fieldAffectsData)(field) && field.name === useAsTitle;
    });
};
/**
 * The ListControls component is used to render the controls (search, filter, where)
 * for a collection's list view. You can find those directly above the table which lists
 * the collection's documents.
 */ var ListControls = function(props) {
    var _params;
    var collection = props.collection, _props_enableColumns = props.enableColumns, enableColumns = _props_enableColumns === void 0 ? true : _props_enableColumns, _props_enableSort = props.enableSort, enableSort = _props_enableSort === void 0 ? false : _props_enableSort, handleSortChange = props.handleSortChange, handleWhereChange = props.handleWhereChange, _props_modifySearchQuery = props.modifySearchQuery, modifySearchQuery = _props_modifySearchQuery === void 0 ? true : _props_modifySearchQuery, resetParams = props.resetParams, _props_collection = props.collection, fields = _props_collection.fields, listSearchableFields = _props_collection.admin.listSearchableFields;
    var params = (0, _SearchParams.useSearchParams)();
    var shouldInitializeWhereOpened = (0, _validateWhereQuery.default)((_params = params) === null || _params === void 0 ? void 0 : _params.where);
    var _useState = _sliced_to_array((0, _react.useState)(getUseAsTitle(collection)), 2), titleField = _useState[0], setTitleField = _useState[1];
    (0, _react.useEffect)(function() {
        setTitleField(getUseAsTitle(collection));
    }, [
        collection
    ]);
    var _useState1 = _sliced_to_array((0, _react.useState)((0, _getTextFieldsToBeSearched.getTextFieldsToBeSearched)(listSearchableFields, fields)), 1), textFieldsToBeSearched = _useState1[0];
    var _useState2 = _sliced_to_array((0, _react.useState)(shouldInitializeWhereOpened ? "where" : undefined), 2), visibleDrawer = _useState2[0], setVisibleDrawer = _useState2[1];
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useWindowInfo = (0, _windowinfo.useWindowInfo)(), _useWindowInfo_breakpoints = _useWindowInfo.breakpoints, smallBreak = _useWindowInfo_breakpoints.s;
    var _ref;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement(_SearchFilter.default, {
        fieldName: titleField && (0, _types.fieldAffectsData)(titleField) ? titleField.name : undefined,
        handleChange: handleWhereChange,
        modifySearchQuery: modifySearchQuery,
        fieldLabel: (_ref = titleField && (0, _types.fieldAffectsData)(titleField) && (0, _getTranslation.getTranslation)(titleField.label || titleField.name, i18n)) !== null && _ref !== void 0 ? _ref : undefined,
        listSearchableFields: textFieldsToBeSearched
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__buttons")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__buttons-wrap")
    }, !smallBreak && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_EditMany.default, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ _react.default.createElement(_PublishMany.default, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ _react.default.createElement(_UnpublishMany.default, {
        collection: collection,
        resetParams: resetParams
    }), /*#__PURE__*/ _react.default.createElement(_DeleteMany.default, {
        collection: collection,
        resetParams: resetParams
    })), enableColumns && /*#__PURE__*/ _react.default.createElement(_Pill.default, {
        pillStyle: "light",
        className: "".concat(baseClass, "__toggle-columns ").concat(visibleDrawer === "columns" ? "".concat(baseClass, "__buttons-active") : ""),
        onClick: function() {
            return setVisibleDrawer(visibleDrawer !== "columns" ? "columns" : undefined);
        },
        "aria-expanded": visibleDrawer === "columns",
        "aria-controls": "".concat(baseClass, "-columns"),
        icon: /*#__PURE__*/ _react.default.createElement(_Chevron.default, null)
    }, t("columns")), /*#__PURE__*/ _react.default.createElement(_Pill.default, {
        pillStyle: "light",
        className: "".concat(baseClass, "__toggle-where ").concat(visibleDrawer === "where" ? "".concat(baseClass, "__buttons-active") : ""),
        onClick: function() {
            return setVisibleDrawer(visibleDrawer !== "where" ? "where" : undefined);
        },
        "aria-expanded": visibleDrawer === "where",
        "aria-controls": "".concat(baseClass, "-where"),
        icon: /*#__PURE__*/ _react.default.createElement(_Chevron.default, null)
    }, t("filters")), enableSort && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        className: "".concat(baseClass, "__toggle-sort"),
        buttonStyle: visibleDrawer === "sort" ? undefined : "secondary",
        onClick: function() {
            return setVisibleDrawer(visibleDrawer !== "sort" ? "sort" : undefined);
        },
        "aria-expanded": visibleDrawer === "sort",
        "aria-controls": "".concat(baseClass, "-sort"),
        icon: "chevron",
        iconStyle: "none"
    }, t("sort"))))), enableColumns && /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        className: "".concat(baseClass, "__columns"),
        height: visibleDrawer === "columns" ? "auto" : 0,
        id: "".concat(baseClass, "-columns")
    }, /*#__PURE__*/ _react.default.createElement(_ColumnSelector.default, {
        collection: collection
    })), /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        className: "".concat(baseClass, "__where"),
        height: visibleDrawer === "where" ? "auto" : 0,
        id: "".concat(baseClass, "-where")
    }, /*#__PURE__*/ _react.default.createElement(_WhereBuilder.default, {
        collection: collection,
        modifySearchQuery: modifySearchQuery,
        handleChange: handleWhereChange
    })), enableSort && /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        className: "".concat(baseClass, "__sort"),
        height: visibleDrawer === "sort" ? "auto" : 0,
        id: "".concat(baseClass, "-sort")
    }, /*#__PURE__*/ _react.default.createElement(_SortComplex.default, {
        modifySearchQuery: modifySearchQuery,
        collection: collection,
        handleChange: handleSortChange
    })));
};
var _default = ListControls;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3RDb250cm9scy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0ZUhlaWdodCBmcm9tICdyZWFjdC1hbmltYXRlLWhlaWdodCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlV2luZG93SW5mbyB9IGZyb20gJ0BmYWNlbGVzcy11aS93aW5kb3ctaW5mbyc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gJy4uL1NlYXJjaEZpbHRlcic7XG5pbXBvcnQgQ29sdW1uU2VsZWN0b3IgZnJvbSAnLi4vQ29sdW1uU2VsZWN0b3InO1xuaW1wb3J0IFdoZXJlQnVpbGRlciBmcm9tICcuLi9XaGVyZUJ1aWxkZXInO1xuaW1wb3J0IFNvcnRDb21wbGV4IGZyb20gJy4uL1NvcnRDb21wbGV4JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcbmltcG9ydCB2YWxpZGF0ZVdoZXJlUXVlcnkgZnJvbSAnLi4vV2hlcmVCdWlsZGVyL3ZhbGlkYXRlV2hlcmVRdWVyeSc7XG5pbXBvcnQgZmxhdHRlbkZpZWxkcyBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzJztcbmltcG9ydCB7IGdldFRleHRGaWVsZHNUb0JlU2VhcmNoZWQgfSBmcm9tICcuL2dldFRleHRGaWVsZHNUb0JlU2VhcmNoZWQnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgQ2hldnJvbiBmcm9tICcuLi8uLi9pY29ucy9DaGV2cm9uJztcbmltcG9ydCBFZGl0TWFueSBmcm9tICcuLi9FZGl0TWFueSc7XG5pbXBvcnQgRGVsZXRlTWFueSBmcm9tICcuLi9EZWxldGVNYW55JztcbmltcG9ydCBQdWJsaXNoTWFueSBmcm9tICcuLi9QdWJsaXNoTWFueSc7XG5pbXBvcnQgVW5wdWJsaXNoTWFueSBmcm9tICcuLi9VbnB1Ymxpc2hNYW55JztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsaXN0LWNvbnRyb2xzJztcblxuY29uc3QgZ2V0VXNlQXNUaXRsZSA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgdXNlQXNUaXRsZSxcbiAgICB9LFxuICAgIGZpZWxkcyxcbiAgfSA9IGNvbGxlY3Rpb247XG5cbiAgY29uc3QgdG9wTGV2ZWxGaWVsZHMgPSBmbGF0dGVuRmllbGRzKGZpZWxkcyk7XG4gIHJldHVybiB0b3BMZXZlbEZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSA9PT0gdXNlQXNUaXRsZSk7XG59O1xuXG4vKipcbiAqIFRoZSBMaXN0Q29udHJvbHMgY29tcG9uZW50IGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBjb250cm9scyAoc2VhcmNoLCBmaWx0ZXIsIHdoZXJlKVxuICogZm9yIGEgY29sbGVjdGlvbidzIGxpc3Qgdmlldy4gWW91IGNhbiBmaW5kIHRob3NlIGRpcmVjdGx5IGFib3ZlIHRoZSB0YWJsZSB3aGljaCBsaXN0c1xuICogdGhlIGNvbGxlY3Rpb24ncyBkb2N1bWVudHMuXG4gKi9cbmNvbnN0IExpc3RDb250cm9sczogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIGVuYWJsZUNvbHVtbnMgPSB0cnVlLFxuICAgIGVuYWJsZVNvcnQgPSBmYWxzZSxcbiAgICBoYW5kbGVTb3J0Q2hhbmdlLFxuICAgIGhhbmRsZVdoZXJlQ2hhbmdlLFxuICAgIG1vZGlmeVNlYXJjaFF1ZXJ5ID0gdHJ1ZSxcbiAgICByZXNldFBhcmFtcyxcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBmaWVsZHMsXG4gICAgICBhZG1pbjoge1xuICAgICAgICBsaXN0U2VhcmNoYWJsZUZpZWxkcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBzaG91bGRJbml0aWFsaXplV2hlcmVPcGVuZWQgPSB2YWxpZGF0ZVdoZXJlUXVlcnkocGFyYW1zPy53aGVyZSk7XG5cbiAgY29uc3QgW3RpdGxlRmllbGQsIHNldFRpdGxlRmllbGRdID0gdXNlU3RhdGUoZ2V0VXNlQXNUaXRsZShjb2xsZWN0aW9uKSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGl0bGVGaWVsZChnZXRVc2VBc1RpdGxlKGNvbGxlY3Rpb24pKTtcbiAgfSwgW2NvbGxlY3Rpb25dKTtcblxuICBjb25zdCBbdGV4dEZpZWxkc1RvQmVTZWFyY2hlZF0gPSB1c2VTdGF0ZShnZXRUZXh0RmllbGRzVG9CZVNlYXJjaGVkKGxpc3RTZWFyY2hhYmxlRmllbGRzLCBmaWVsZHMpKTtcbiAgY29uc3QgW3Zpc2libGVEcmF3ZXIsIHNldFZpc2libGVEcmF3ZXJdID0gdXNlU3RhdGU8J3doZXJlJyB8ICdzb3J0JyB8ICdjb2x1bW5zJz4oc2hvdWxkSW5pdGlhbGl6ZVdoZXJlT3BlbmVkID8gJ3doZXJlJyA6IHVuZGVmaW5lZCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgeyBicmVha3BvaW50czogeyBzOiBzbWFsbEJyZWFrIH0gfSA9IHVzZVdpbmRvd0luZm8oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgPFNlYXJjaEZpbHRlclxuICAgICAgICAgIGZpZWxkTmFtZT17dGl0bGVGaWVsZCAmJiBmaWVsZEFmZmVjdHNEYXRhKHRpdGxlRmllbGQpID8gdGl0bGVGaWVsZC5uYW1lIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlV2hlcmVDaGFuZ2V9XG4gICAgICAgICAgbW9kaWZ5U2VhcmNoUXVlcnk9e21vZGlmeVNlYXJjaFF1ZXJ5fVxuICAgICAgICAgIGZpZWxkTGFiZWw9eyh0aXRsZUZpZWxkICYmIGZpZWxkQWZmZWN0c0RhdGEodGl0bGVGaWVsZCkgJiYgZ2V0VHJhbnNsYXRpb24odGl0bGVGaWVsZC5sYWJlbCB8fCB0aXRsZUZpZWxkLm5hbWUsIGkxOG4pKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgbGlzdFNlYXJjaGFibGVGaWVsZHM9e3RleHRGaWVsZHNUb0JlU2VhcmNoZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19idXR0b25zYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2J1dHRvbnMtd3JhcGB9PlxuICAgICAgICAgICAgeyAhc21hbGxCcmVhayAmJiAoXG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8RWRpdE1hbnlcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICByZXNldFBhcmFtcz17cmVzZXRQYXJhbXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UHVibGlzaE1hbnlcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICByZXNldFBhcmFtcz17cmVzZXRQYXJhbXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VW5wdWJsaXNoTWFueVxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgIHJlc2V0UGFyYW1zPXtyZXNldFBhcmFtc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEZWxldGVNYW55XG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgcmVzZXRQYXJhbXM9e3Jlc2V0UGFyYW1zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2VuYWJsZUNvbHVtbnMgJiYgKFxuICAgICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICAgIHBpbGxTdHlsZT1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZS1jb2x1bW5zICR7dmlzaWJsZURyYXdlciA9PT0gJ2NvbHVtbnMnID8gYCR7YmFzZUNsYXNzfV9fYnV0dG9ucy1hY3RpdmVgIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlRHJhd2VyKHZpc2libGVEcmF3ZXIgIT09ICdjb2x1bW5zJyA/ICdjb2x1bW5zJyA6IHVuZGVmaW5lZCl9XG4gICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17dmlzaWJsZURyYXdlciA9PT0gJ2NvbHVtbnMnfVxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e2Ake2Jhc2VDbGFzc30tY29sdW1uc2B9XG4gICAgICAgICAgICAgICAgaWNvbj17PENoZXZyb24gLz59XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnY29sdW1ucycpfVxuICAgICAgICAgICAgICA8L1BpbGw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFBpbGxcbiAgICAgICAgICAgICAgcGlsbFN0eWxlPVwibGlnaHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RvZ2dsZS13aGVyZSAke3Zpc2libGVEcmF3ZXIgPT09ICd3aGVyZScgPyBgJHtiYXNlQ2xhc3N9X19idXR0b25zLWFjdGl2ZWAgOiAnJ31gfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlRHJhd2VyKHZpc2libGVEcmF3ZXIgIT09ICd3aGVyZScgPyAnd2hlcmUnIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17dmlzaWJsZURyYXdlciA9PT0gJ3doZXJlJ31cbiAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7YmFzZUNsYXNzfS13aGVyZWB9XG4gICAgICAgICAgICAgIGljb249ezxDaGV2cm9uIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnZmlsdGVycycpfVxuICAgICAgICAgICAgPC9QaWxsPlxuICAgICAgICAgICAge2VuYWJsZVNvcnQgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGUtc29ydGB9XG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9e3Zpc2libGVEcmF3ZXIgPT09ICdzb3J0JyA/IHVuZGVmaW5lZCA6ICdzZWNvbmRhcnknfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGVEcmF3ZXIodmlzaWJsZURyYXdlciAhPT0gJ3NvcnQnID8gJ3NvcnQnIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXt2aXNpYmxlRHJhd2VyID09PSAnc29ydCd9XG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz17YCR7YmFzZUNsYXNzfS1zb3J0YH1cbiAgICAgICAgICAgICAgICBpY29uPVwiY2hldnJvblwiXG4gICAgICAgICAgICAgICAgaWNvblN0eWxlPVwibm9uZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dCgnc29ydCcpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7ZW5hYmxlQ29sdW1ucyAmJiAoXG4gICAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb2x1bW5zYH1cbiAgICAgICAgICBoZWlnaHQ9e3Zpc2libGVEcmF3ZXIgPT09ICdjb2x1bW5zJyA/ICdhdXRvJyA6IDB9XG4gICAgICAgICAgaWQ9e2Ake2Jhc2VDbGFzc30tY29sdW1uc2B9XG4gICAgICAgID5cbiAgICAgICAgICA8Q29sdW1uU2VsZWN0b3IgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgPC9BbmltYXRlSGVpZ2h0PlxuICAgICAgKX1cbiAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fd2hlcmVgfVxuICAgICAgICBoZWlnaHQ9e3Zpc2libGVEcmF3ZXIgPT09ICd3aGVyZScgPyAnYXV0bycgOiAwfVxuICAgICAgICBpZD17YCR7YmFzZUNsYXNzfS13aGVyZWB9XG4gICAgICA+XG4gICAgICAgIDxXaGVyZUJ1aWxkZXJcbiAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIG1vZGlmeVNlYXJjaFF1ZXJ5PXttb2RpZnlTZWFyY2hRdWVyeX1cbiAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZVdoZXJlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9BbmltYXRlSGVpZ2h0PlxuICAgICAge2VuYWJsZVNvcnQgJiYgKFxuICAgICAgICA8QW5pbWF0ZUhlaWdodFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc29ydGB9XG4gICAgICAgICAgaGVpZ2h0PXt2aXNpYmxlRHJhd2VyID09PSAnc29ydCcgPyAnYXV0bycgOiAwfVxuICAgICAgICAgIGlkPXtgJHtiYXNlQ2xhc3N9LXNvcnRgfVxuICAgICAgICA+XG4gICAgICAgICAgPFNvcnRDb21wbGV4XG4gICAgICAgICAgICBtb2RpZnlTZWFyY2hRdWVyeT17bW9kaWZ5U2VhcmNoUXVlcnl9XG4gICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVTb3J0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQW5pbWF0ZUhlaWdodD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Q29udHJvbHM7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiZ2V0VXNlQXNUaXRsZSIsImNvbGxlY3Rpb24iLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJmaWVsZHMiLCJ0b3BMZXZlbEZpZWxkcyIsImZsYXR0ZW5GaWVsZHMiLCJmaW5kIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsIkxpc3RDb250cm9scyIsInByb3BzIiwicGFyYW1zIiwiZW5hYmxlQ29sdW1ucyIsImVuYWJsZVNvcnQiLCJoYW5kbGVTb3J0Q2hhbmdlIiwiaGFuZGxlV2hlcmVDaGFuZ2UiLCJtb2RpZnlTZWFyY2hRdWVyeSIsInJlc2V0UGFyYW1zIiwibGlzdFNlYXJjaGFibGVGaWVsZHMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJzaG91bGRJbml0aWFsaXplV2hlcmVPcGVuZWQiLCJ2YWxpZGF0ZVdoZXJlUXVlcnkiLCJ3aGVyZSIsInVzZVN0YXRlIiwidGl0bGVGaWVsZCIsInNldFRpdGxlRmllbGQiLCJ1c2VFZmZlY3QiLCJnZXRUZXh0RmllbGRzVG9CZVNlYXJjaGVkIiwidGV4dEZpZWxkc1RvQmVTZWFyY2hlZCIsInVuZGVmaW5lZCIsInZpc2libGVEcmF3ZXIiLCJzZXRWaXNpYmxlRHJhd2VyIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInVzZVdpbmRvd0luZm8iLCJicmVha3BvaW50cyIsInMiLCJzbWFsbEJyZWFrIiwiZGl2IiwiY2xhc3NOYW1lIiwiU2VhcmNoRmlsdGVyIiwiZmllbGROYW1lIiwiaGFuZGxlQ2hhbmdlIiwiZmllbGRMYWJlbCIsImdldFRyYW5zbGF0aW9uIiwibGFiZWwiLCJSZWFjdCIsIkZyYWdtZW50IiwiRWRpdE1hbnkiLCJQdWJsaXNoTWFueSIsIlVucHVibGlzaE1hbnkiLCJEZWxldGVNYW55IiwiUGlsbCIsInBpbGxTdHlsZSIsIm9uQ2xpY2siLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1jb250cm9scyIsImljb24iLCJDaGV2cm9uIiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJpY29uU3R5bGUiLCJBbmltYXRlSGVpZ2h0IiwiaGVpZ2h0IiwiaWQiLCJDb2x1bW5TZWxlY3RvciIsIldoZXJlQnVpbGRlciIsIlNvcnRDb21wbGV4Il0sIm1hcHBpbmdzIjoiOzs7OytCQXNMQTs7O2VBQUE7Ozs2REF0TDJDO3lFQUNqQjs0QkFDSzswQkFDRDtxQkFDRzttRUFDUjtxRUFDRTttRUFDRjtrRUFDRDs2REFDTDs0QkFFYTt5RUFDRDs0RUFDTDt5Q0FDZ0I7OEJBQ1g7MkRBQ2Q7OERBQ0c7K0RBQ0M7aUVBQ0U7a0VBQ0M7b0VBQ0U7UUFHbkI7Ozs7Ozs7Ozs7Ozs7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