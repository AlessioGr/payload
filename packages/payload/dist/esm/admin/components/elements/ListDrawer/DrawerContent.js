function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useModal } from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import { getTranslation } from "../../../../utilities/getTranslation";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import { DocumentInfoProvider } from "../../utilities/DocumentInfo";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import usePayloadAPI from "../../../hooks/usePayloadAPI";
import DefaultList from "../../views/collections/List/Default";
import Label from "../../forms/Label";
import ReactSelect from "../ReactSelect";
import { useDocumentDrawer } from "../DocumentDrawer";
import Pill from "../Pill";
import X from "../../icons/X";
import ViewDescription from "../ViewDescription";
import formatFields from "../../views/collections/List/formatFields";
import { usePreferences } from "../../utilities/Preferences";
import { baseClass } from ".";
import { TableColumnsProvider } from "../TableColumns";
export var ListDrawerContent = function(param) {
    var drawerSlug = param.drawerSlug, onSelect = param.onSelect, customHeader = param.customHeader, collectionSlugs = param.collectionSlugs, selectedCollection = param.selectedCollection, filterOptions = param.filterOptions;
    var _selectedCollectionConfig, _permissions_collections, _permissions, _collectionPermissions_create, _collectionPermissions, _selectedCollectionConfig_admin_components_views, _selectedCollectionConfig_admin_components, _selectedCollectionConfig_admin, _selectedCollectionConfig1, _selectedCollectionConfig_labels, _selectedCollectionConfig2, _selectedCollectionConfig_admin1, _selectedCollectionConfig3, _selectedCollectionConfig_admin_pagination, _selectedCollectionConfig_admin2, _selectedCollectionConfig4;
    var _useTranslation = useTranslation([
        "upload",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var permissions = useAuth().permissions;
    var setPreference = usePreferences().setPreference;
    var _useModal = useModal(), isModalOpen = _useModal.isModalOpen, closeModal = _useModal.closeModal;
    var _useState = _sliced_to_array(useState(), 2), limit = _useState[0], setLimit = _useState[1];
    var _useState1 = _sliced_to_array(useState(null), 2), sort = _useState1[0], setSort = _useState1[1];
    var _useState2 = _sliced_to_array(useState(1), 2), page = _useState2[0], setPage = _useState2[1];
    var _useState3 = _sliced_to_array(useState(null), 2), where = _useState3[0], setWhere = _useState3[1];
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api, collections = _useConfig.collections;
    var enabledCollectionConfigs = collections.filter(function(param) {
        var slug = param.slug;
        return collectionSlugs.includes(slug);
    });
    var _useState4 = _sliced_to_array(useState(function() {
        var _enabledCollectionConfigs;
        return enabledCollectionConfigs.find(function(param) {
            var slug = param.slug;
            return slug === selectedCollection;
        }) || ((_enabledCollectionConfigs = enabledCollectionConfigs) === null || _enabledCollectionConfigs === void 0 ? void 0 : _enabledCollectionConfigs[0]);
    }), 2), selectedCollectionConfig = _useState4[0], setSelectedCollectionConfig = _useState4[1];
    var _useState5 = _sliced_to_array(useState(function() {
        return selectedCollectionConfig ? {
            label: getTranslation(selectedCollectionConfig.labels.singular, i18n),
            value: selectedCollectionConfig.slug
        } : undefined;
    }), 2), selectedOption = _useState5[0], setSelectedOption = _useState5[1];
    var _useState6 = _sliced_to_array(useState(function() {
        return formatFields(selectedCollectionConfig);
    }), 2), fields = _useState6[0], setFields = _useState6[1];
    useEffect(function() {
        setFields(formatFields(selectedCollectionConfig));
    }, [
        selectedCollectionConfig
    ]);
    // allow external control of selected collection, same as the initial state logic above
    useEffect(function() {
        if (selectedCollection) {
            var _enabledCollectionConfigs;
            // if passed a selection, find it and check if it's enabled
            var selectedConfig = enabledCollectionConfigs.find(function(param) {
                var slug = param.slug;
                return slug === selectedCollection;
            }) || ((_enabledCollectionConfigs = enabledCollectionConfigs) === null || _enabledCollectionConfigs === void 0 ? void 0 : _enabledCollectionConfigs[0]);
            setSelectedCollectionConfig(selectedConfig);
        }
    }, [
        selectedCollection,
        enabledCollectionConfigs,
        onSelect,
        t
    ]);
    var preferenceKey = "".concat(selectedCollectionConfig.slug, "-list");
    // this is the 'create new' drawer
    var _useDocumentDrawer = _sliced_to_array(useDocumentDrawer({
        collectionSlug: selectedCollectionConfig.slug
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], _useDocumentDrawer_ = _useDocumentDrawer[2], documentDrawerSlug = _useDocumentDrawer_.drawerSlug;
    useEffect(function() {
        if (selectedOption) {
            setSelectedCollectionConfig(enabledCollectionConfigs.find(function(param) {
                var slug = param.slug;
                return selectedOption.value === slug;
            }));
        }
    }, [
        selectedOption,
        enabledCollectionConfigs
    ]);
    var collectionPermissions = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : _permissions_collections[(_selectedCollectionConfig = selectedCollectionConfig) === null || _selectedCollectionConfig === void 0 ? void 0 : _selectedCollectionConfig.slug];
    var hasCreatePermission = (_collectionPermissions = collectionPermissions) === null || _collectionPermissions === void 0 ? void 0 : (_collectionPermissions_create = _collectionPermissions.create) === null || _collectionPermissions_create === void 0 ? void 0 : _collectionPermissions_create.permission;
    // If modal is open, get active page of upload gallery
    var isOpen = isModalOpen(drawerSlug);
    var apiURL = isOpen ? "".concat(serverURL).concat(api, "/").concat(selectedCollectionConfig.slug) : null;
    var _useReducer = _sliced_to_array(useReducer(function(state) {
        return state + 1;
    }, 0), 2), cacheBust = _useReducer[0], dispatchCacheBust = _useReducer[1]; // used to force a re-fetch even when apiURL is unchanged
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI(apiURL, {}), 2), _usePayloadAPI_ = _usePayloadAPI[0], data = _usePayloadAPI_.data, isError = _usePayloadAPI_.isError, setParams = _usePayloadAPI[1].setParams;
    var moreThanOneAvailableCollection = enabledCollectionConfigs.length > 1;
    useEffect(function() {
        var _filterOptions;
        var params = {};
        if (page) params.page = page;
        params.where = _object_spread({}, where ? _object_spread({}, where) : {}, ((_filterOptions = filterOptions) === null || _filterOptions === void 0 ? void 0 : _filterOptions[selectedCollectionConfig.slug]) ? _object_spread({}, filterOptions[selectedCollectionConfig.slug]) : {});
        if (sort) params.sort = sort;
        if (limit) params.limit = limit;
        if (cacheBust) params.cacheBust = cacheBust;
        setParams(params);
    }, [
        setParams,
        page,
        sort,
        where,
        limit,
        cacheBust,
        filterOptions,
        selectedCollectionConfig
    ]);
    useEffect(function() {
        var newPreferences = {
            limit: limit,
            sort: sort
        };
        setPreference(preferenceKey, newPreferences);
    }, [
        sort,
        limit,
        setPreference,
        preferenceKey
    ]);
    var onCreateNew = useCallback(function(param) {
        var doc = param.doc;
        if (typeof onSelect === "function") {
            onSelect({
                docID: doc.id,
                collectionConfig: selectedCollectionConfig
            });
        }
        dispatchCacheBust();
        closeModal(documentDrawerSlug);
        closeModal(drawerSlug);
    }, [
        closeModal,
        documentDrawerSlug,
        drawerSlug,
        onSelect,
        selectedCollectionConfig
    ]);
    if (!selectedCollectionConfig || isError) {
        return null;
    }
    return /*#__PURE__*/ React.createElement(TableColumnsProvider, {
        collection: selectedCollectionConfig,
        cellProps: [
            {
                link: false,
                onClick: function(param) {
                    var rowColl = param.collection, rowData = param.rowData;
                    if (typeof onSelect === "function") {
                        onSelect({
                            docID: rowData.id,
                            collectionConfig: rowColl
                        });
                    }
                },
                className: "".concat(baseClass, "__first-cell")
            }
        ]
    }, /*#__PURE__*/ React.createElement(DocumentInfoProvider, {
        collection: selectedCollectionConfig
    }, /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        DefaultComponent: DefaultList,
        CustomComponent: (_selectedCollectionConfig1 = selectedCollectionConfig) === null || _selectedCollectionConfig1 === void 0 ? void 0 : (_selectedCollectionConfig_admin = _selectedCollectionConfig1.admin) === null || _selectedCollectionConfig_admin === void 0 ? void 0 : (_selectedCollectionConfig_admin_components = _selectedCollectionConfig_admin.components) === null || _selectedCollectionConfig_admin_components === void 0 ? void 0 : (_selectedCollectionConfig_admin_components_views = _selectedCollectionConfig_admin_components.views) === null || _selectedCollectionConfig_admin_components_views === void 0 ? void 0 : _selectedCollectionConfig_admin_components_views.List,
        componentProps: {
            collection: _object_spread_props(_object_spread({}, selectedCollectionConfig), {
                fields: fields
            }),
            customHeader: /*#__PURE__*/ React.createElement("header", {
                className: "".concat(baseClass, "__header")
            }, /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__header-wrap")
            }, /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__header-content")
            }, /*#__PURE__*/ React.createElement("h2", {
                className: "".concat(baseClass, "__header-text")
            }, !customHeader ? getTranslation((_selectedCollectionConfig2 = selectedCollectionConfig) === null || _selectedCollectionConfig2 === void 0 ? void 0 : (_selectedCollectionConfig_labels = _selectedCollectionConfig2.labels) === null || _selectedCollectionConfig_labels === void 0 ? void 0 : _selectedCollectionConfig_labels.plural, i18n) : customHeader), hasCreatePermission && /*#__PURE__*/ React.createElement(DocumentDrawerToggler, {
                className: "".concat(baseClass, "__create-new-button")
            }, /*#__PURE__*/ React.createElement(Pill, null, t("general:createNew")))), /*#__PURE__*/ React.createElement("button", {
                type: "button",
                onClick: function() {
                    closeModal(drawerSlug);
                },
                className: "".concat(baseClass, "__header-close")
            }, /*#__PURE__*/ React.createElement(X, null))), ((_selectedCollectionConfig3 = selectedCollectionConfig) === null || _selectedCollectionConfig3 === void 0 ? void 0 : (_selectedCollectionConfig_admin1 = _selectedCollectionConfig3.admin) === null || _selectedCollectionConfig_admin1 === void 0 ? void 0 : _selectedCollectionConfig_admin1.description) && /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__sub-header")
            }, /*#__PURE__*/ React.createElement(ViewDescription, {
                description: selectedCollectionConfig.admin.description
            })), moreThanOneAvailableCollection && /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__select-collection-wrap")
            }, /*#__PURE__*/ React.createElement(Label, {
                label: t("selectCollectionToBrowse")
            }), /*#__PURE__*/ React.createElement(ReactSelect, {
                className: "".concat(baseClass, "__select-collection"),
                value: selectedOption,
                onChange: setSelectedOption,
                options: enabledCollectionConfigs.map(function(coll) {
                    return {
                        label: getTranslation(coll.labels.singular, i18n),
                        value: coll.slug
                    };
                })
            }))),
            data: data,
            limit: limit || ((_selectedCollectionConfig4 = selectedCollectionConfig) === null || _selectedCollectionConfig4 === void 0 ? void 0 : (_selectedCollectionConfig_admin2 = _selectedCollectionConfig4.admin) === null || _selectedCollectionConfig_admin2 === void 0 ? void 0 : (_selectedCollectionConfig_admin_pagination = _selectedCollectionConfig_admin2.pagination) === null || _selectedCollectionConfig_admin_pagination === void 0 ? void 0 : _selectedCollectionConfig_admin_pagination.defaultLimit),
            setLimit: setLimit,
            setSort: setSort,
            newDocumentURL: null,
            hasCreatePermission: hasCreatePermission,
            disableEyebrow: true,
            modifySearchParams: false,
            handleSortChange: setSort,
            handleWhereChange: setWhere,
            handlePageChange: setPage,
            handlePerPageChange: setLimit
        }
    })), /*#__PURE__*/ React.createElement(DocumentDrawer, {
        onSave: onCreateNew
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3REcmF3ZXIvRHJhd2VyQ29udGVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IExpc3REcmF3ZXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgRG9jdW1lbnRJbmZvUHJvdmlkZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IERlZmF1bHRMaXN0IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvRGVmYXVsdCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vZm9ybXMvTGFiZWwnO1xuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uL1JlYWN0U2VsZWN0JztcbmltcG9ydCB7IHVzZURvY3VtZW50RHJhd2VyIH0gZnJvbSAnLi4vRG9jdW1lbnREcmF3ZXInO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgWCBmcm9tICcuLi8uLi9pY29ucy9YJztcbmltcG9ydCBWaWV3RGVzY3JpcHRpb24gZnJvbSAnLi4vVmlld0Rlc2NyaXB0aW9uJztcbmltcG9ydCBmb3JtYXRGaWVsZHMgZnJvbSAnLi4vLi4vdmlld3MvY29sbGVjdGlvbnMvTGlzdC9mb3JtYXRGaWVsZHMnO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGJhc2VDbGFzcyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgVGFibGVDb2x1bW5zUHJvdmlkZXIgfSBmcm9tICcuLi9UYWJsZUNvbHVtbnMnO1xuXG5leHBvcnQgY29uc3QgTGlzdERyYXdlckNvbnRlbnQ6IFJlYWN0LkZDPExpc3REcmF3ZXJQcm9wcz4gPSAoe1xuICBkcmF3ZXJTbHVnLFxuICBvblNlbGVjdCxcbiAgY3VzdG9tSGVhZGVyLFxuICBjb2xsZWN0aW9uU2x1Z3MsXG4gIHNlbGVjdGVkQ29sbGVjdGlvbixcbiAgZmlsdGVyT3B0aW9ucyxcbn0pID0+IHtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbihbJ3VwbG9hZCcsICdnZW5lcmFsJ10pO1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgeyBpc01vZGFsT3BlbiwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3doZXJlLCBzZXRXaGVyZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSwgY29sbGVjdGlvbnMgfSA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IGVuYWJsZWRDb2xsZWN0aW9uQ29uZmlncyA9IGNvbGxlY3Rpb25zLmZpbHRlcigoeyBzbHVnIH0pID0+IHtcbiAgICByZXR1cm4gY29sbGVjdGlvblNsdWdzLmluY2x1ZGVzKHNsdWcpO1xuICB9KTtcblxuICBjb25zdCBbc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLCBzZXRTZWxlY3RlZENvbGxlY3Rpb25Db25maWddID0gdXNlU3RhdGU8U2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZz4oKCkgPT4ge1xuICAgIHJldHVybiBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHNlbGVjdGVkQ29sbGVjdGlvbikgfHwgZW5hYmxlZENvbGxlY3Rpb25Db25maWdzPy5bMF07XG4gIH0pO1xuXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGU8eyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCgpID0+IChzZWxlY3RlZENvbGxlY3Rpb25Db25maWcgPyB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihzZWxlY3RlZENvbGxlY3Rpb25Db25maWcubGFiZWxzLnNpbmd1bGFyLCBpMThuKSwgdmFsdWU6IHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnIH0gOiB1bmRlZmluZWQpKTtcblxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGU8RmllbGRbXT4oKCkgPT4gZm9ybWF0RmllbGRzKHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmllbGRzKGZvcm1hdEZpZWxkcyhzZWxlY3RlZENvbGxlY3Rpb25Db25maWcpKTtcbiAgfSwgW3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ10pO1xuXG4gIC8vIGFsbG93IGV4dGVybmFsIGNvbnRyb2wgb2Ygc2VsZWN0ZWQgY29sbGVjdGlvbiwgc2FtZSBhcyB0aGUgaW5pdGlhbCBzdGF0ZSBsb2dpYyBhYm92ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZENvbGxlY3Rpb24pIHtcbiAgICAgIC8vIGlmIHBhc3NlZCBhIHNlbGVjdGlvbiwgZmluZCBpdCBhbmQgY2hlY2sgaWYgaXQncyBlbmFibGVkXG4gICAgICBjb25zdCBzZWxlY3RlZENvbmZpZyA9IGVuYWJsZWRDb2xsZWN0aW9uQ29uZmlncy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB8fCBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3M/LlswXTtcbiAgICAgIHNldFNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZyhzZWxlY3RlZENvbmZpZyk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRDb2xsZWN0aW9uLCBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MsIG9uU2VsZWN0LCB0XSk7XG5cbiAgY29uc3QgcHJlZmVyZW5jZUtleSA9IGAke3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnfS1saXN0YDtcblxuICAvLyB0aGlzIGlzIHRoZSAnY3JlYXRlIG5ldycgZHJhd2VyXG4gIGNvbnN0IFtcbiAgICBEb2N1bWVudERyYXdlcixcbiAgICBEb2N1bWVudERyYXdlclRvZ2dsZXIsXG4gICAge1xuICAgICAgZHJhd2VyU2x1ZzogZG9jdW1lbnREcmF3ZXJTbHVnLFxuICAgIH0sXG4gIF0gPSB1c2VEb2N1bWVudERyYXdlcih7XG4gICAgY29sbGVjdGlvblNsdWc6IHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgc2V0U2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnKGVuYWJsZWRDb2xsZWN0aW9uQ29uZmlncy5maW5kKCh7IHNsdWcgfSkgPT4gc2VsZWN0ZWRPcHRpb24udmFsdWUgPT09IHNsdWcpKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZE9wdGlvbiwgZW5hYmxlZENvbGxlY3Rpb25Db25maWdzXSk7XG5cbiAgY29uc3QgY29sbGVjdGlvblBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnPy5zbHVnXTtcbiAgY29uc3QgaGFzQ3JlYXRlUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8uY3JlYXRlPy5wZXJtaXNzaW9uO1xuXG4gIC8vIElmIG1vZGFsIGlzIG9wZW4sIGdldCBhY3RpdmUgcGFnZSBvZiB1cGxvYWQgZ2FsbGVyeVxuICBjb25zdCBpc09wZW4gPSBpc01vZGFsT3BlbihkcmF3ZXJTbHVnKTtcbiAgY29uc3QgYXBpVVJMID0gaXNPcGVuID8gYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnfWAgOiBudWxsO1xuICBjb25zdCBbY2FjaGVCdXN0LCBkaXNwYXRjaENhY2hlQnVzdF0gPSB1c2VSZWR1Y2VyKChzdGF0ZSkgPT4gc3RhdGUgKyAxLCAwKTsgLy8gdXNlZCB0byBmb3JjZSBhIHJlLWZldGNoIGV2ZW4gd2hlbiBhcGlVUkwgaXMgdW5jaGFuZ2VkXG4gIGNvbnN0IFt7IGRhdGEsIGlzRXJyb3IgfSwgeyBzZXRQYXJhbXMgfV0gPSB1c2VQYXlsb2FkQVBJKGFwaVVSTCwge30pO1xuICBjb25zdCBtb3JlVGhhbk9uZUF2YWlsYWJsZUNvbGxlY3Rpb24gPSBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MubGVuZ3RoID4gMTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtczoge1xuICAgICAgcGFnZT86IG51bWJlclxuICAgICAgc29ydD86IHN0cmluZ1xuICAgICAgd2hlcmU/OiB1bmtub3duXG4gICAgICBsaW1pdD86IG51bWJlclxuICAgICAgY2FjaGVCdXN0PzogbnVtYmVyXG4gICAgfSA9IHt9O1xuXG4gICAgaWYgKHBhZ2UpIHBhcmFtcy5wYWdlID0gcGFnZTtcblxuICAgIHBhcmFtcy53aGVyZSA9IHtcbiAgICAgIC4uLndoZXJlID8geyAuLi53aGVyZSB9IDoge30sXG4gICAgICAuLi5maWx0ZXJPcHRpb25zPy5bc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLnNsdWddID8ge1xuICAgICAgICAuLi5maWx0ZXJPcHRpb25zW3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnXSxcbiAgICAgIH0gOiB7fSxcbiAgICB9O1xuXG4gICAgaWYgKHNvcnQpIHBhcmFtcy5zb3J0ID0gc29ydDtcbiAgICBpZiAobGltaXQpIHBhcmFtcy5saW1pdCA9IGxpbWl0O1xuICAgIGlmIChjYWNoZUJ1c3QpIHBhcmFtcy5jYWNoZUJ1c3QgPSBjYWNoZUJ1c3Q7XG5cbiAgICBzZXRQYXJhbXMocGFyYW1zKTtcbiAgfSwgW3NldFBhcmFtcywgcGFnZSwgc29ydCwgd2hlcmUsIGxpbWl0LCBjYWNoZUJ1c3QsIGZpbHRlck9wdGlvbnMsIHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJlZmVyZW5jZXMgPSB7XG4gICAgICBsaW1pdCxcbiAgICAgIHNvcnQsXG4gICAgfTtcblxuICAgIHNldFByZWZlcmVuY2UocHJlZmVyZW5jZUtleSwgbmV3UHJlZmVyZW5jZXMpO1xuICB9LCBbc29ydCwgbGltaXQsIHNldFByZWZlcmVuY2UsIHByZWZlcmVuY2VLZXldKTtcblxuICBjb25zdCBvbkNyZWF0ZU5ldyA9IHVzZUNhbGxiYWNrKCh7IGRvYyB9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvblNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25TZWxlY3Qoe1xuICAgICAgICBkb2NJRDogZG9jLmlkLFxuICAgICAgICBjb2xsZWN0aW9uQ29uZmlnOiBzZWxlY3RlZENvbGxlY3Rpb25Db25maWcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hDYWNoZUJ1c3QoKTtcbiAgICBjbG9zZU1vZGFsKGRvY3VtZW50RHJhd2VyU2x1Zyk7XG4gICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgfSwgW2Nsb3NlTW9kYWwsIGRvY3VtZW50RHJhd2VyU2x1ZywgZHJhd2VyU2x1Zywgb25TZWxlY3QsIHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ10pO1xuXG4gIGlmICghc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnIHx8IGlzRXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29sdW1uc1Byb3ZpZGVyXG4gICAgICBjb2xsZWN0aW9uPXtzZWxlY3RlZENvbGxlY3Rpb25Db25maWd9XG4gICAgICBjZWxsUHJvcHM9e1t7XG4gICAgICAgIGxpbms6IGZhbHNlLFxuICAgICAgICBvbkNsaWNrOiAoeyBjb2xsZWN0aW9uOiByb3dDb2xsLCByb3dEYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIG9uU2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvblNlbGVjdCh7XG4gICAgICAgICAgICAgIGRvY0lEOiByb3dEYXRhLmlkLFxuICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29uZmlnOiByb3dDb2xsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWU6IGAke2Jhc2VDbGFzc31fX2ZpcnN0LWNlbGxgLFxuICAgICAgfV19XG4gICAgPlxuICAgICAgPERvY3VtZW50SW5mb1Byb3ZpZGVyIGNvbGxlY3Rpb249e3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ30+XG4gICAgICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TGlzdH1cbiAgICAgICAgICBDdXN0b21Db21wb25lbnQ9e3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZz8uYWRtaW4/LmNvbXBvbmVudHM/LnZpZXdzPy5MaXN0fVxuICAgICAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1c3RvbUhlYWRlcjogKFxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci13cmFwYH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLXRleHRgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IWN1c3RvbUhlYWRlciA/IGdldFRyYW5zbGF0aW9uKHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZz8ubGFiZWxzPy5wbHVyYWwsIGkxOG4pIDogY3VzdG9tSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICB7aGFzQ3JlYXRlUGVybWlzc2lvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPERvY3VtZW50RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jcmVhdGUtbmV3LWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmNyZWF0ZU5ldycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXItY2xvc2VgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8WCAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZz8uYWRtaW4/LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zdWItaGVhZGVyYH0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5hZG1pbi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge21vcmVUaGFuT25lQXZhaWxhYmxlQ29sbGVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2VsZWN0LWNvbGxlY3Rpb24td3JhcGB9PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgbGFiZWw9e3QoJ3NlbGVjdENvbGxlY3Rpb25Ub0Jyb3dzZScpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NlbGVjdC1jb2xsZWN0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkT3B0aW9ufSAvLyB0aGlzIGlzIG9ubHkgY2hhbmdpbmcgdGhlIG9wdGlvbnMgd2hpY2ggaXMgbm90IHJlcnVubmluZyBteSBlZmZlY3RcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MubWFwKChjb2xsKSA9PiAoeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbC5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pLCB2YWx1ZTogY29sbC5zbHVnIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBsaW1pdDogbGltaXQgfHwgc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnPy5hZG1pbj8ucGFnaW5hdGlvbj8uZGVmYXVsdExpbWl0LFxuICAgICAgICAgICAgc2V0TGltaXQsXG4gICAgICAgICAgICBzZXRTb3J0LFxuICAgICAgICAgICAgbmV3RG9jdW1lbnRVUkw6IG51bGwsXG4gICAgICAgICAgICBoYXNDcmVhdGVQZXJtaXNzaW9uLFxuICAgICAgICAgICAgZGlzYWJsZUV5ZWJyb3c6IHRydWUsXG4gICAgICAgICAgICBtb2RpZnlTZWFyY2hQYXJhbXM6IGZhbHNlLFxuICAgICAgICAgICAgaGFuZGxlU29ydENoYW5nZTogc2V0U29ydCxcbiAgICAgICAgICAgIGhhbmRsZVdoZXJlQ2hhbmdlOiBzZXRXaGVyZSxcbiAgICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2U6IHNldFBhZ2UsXG4gICAgICAgICAgICBoYW5kbGVQZXJQYWdlQ2hhbmdlOiBzZXRMaW1pdCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Eb2N1bWVudEluZm9Qcm92aWRlcj5cbiAgICAgIDxEb2N1bWVudERyYXdlciBvblNhdmU9e29uQ3JlYXRlTmV3fSAvPlxuICAgIDwvVGFibGVDb2x1bW5zUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJ1c2VNb2RhbCIsInVzZVRyYW5zbGF0aW9uIiwiZ2V0VHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJ1c2VBdXRoIiwiRG9jdW1lbnRJbmZvUHJvdmlkZXIiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJ1c2VQYXlsb2FkQVBJIiwiRGVmYXVsdExpc3QiLCJMYWJlbCIsIlJlYWN0U2VsZWN0IiwidXNlRG9jdW1lbnREcmF3ZXIiLCJQaWxsIiwiWCIsIlZpZXdEZXNjcmlwdGlvbiIsImZvcm1hdEZpZWxkcyIsInVzZVByZWZlcmVuY2VzIiwiYmFzZUNsYXNzIiwiVGFibGVDb2x1bW5zUHJvdmlkZXIiLCJMaXN0RHJhd2VyQ29udGVudCIsImRyYXdlclNsdWciLCJvblNlbGVjdCIsImN1c3RvbUhlYWRlciIsImNvbGxlY3Rpb25TbHVncyIsInNlbGVjdGVkQ29sbGVjdGlvbiIsImZpbHRlck9wdGlvbnMiLCJzZWxlY3RlZENvbGxlY3Rpb25Db25maWciLCJwZXJtaXNzaW9ucyIsImNvbGxlY3Rpb25QZXJtaXNzaW9ucyIsInQiLCJpMThuIiwic2V0UHJlZmVyZW5jZSIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsImxpbWl0Iiwic2V0TGltaXQiLCJzb3J0Iiwic2V0U29ydCIsInBhZ2UiLCJzZXRQYWdlIiwid2hlcmUiLCJzZXRXaGVyZSIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImNvbGxlY3Rpb25zIiwiZW5hYmxlZENvbGxlY3Rpb25Db25maWdzIiwiZmlsdGVyIiwic2x1ZyIsImluY2x1ZGVzIiwiZmluZCIsInNldFNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZyIsImxhYmVsIiwibGFiZWxzIiwic2luZ3VsYXIiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJzZWxlY3RlZENvbmZpZyIsInByZWZlcmVuY2VLZXkiLCJjb2xsZWN0aW9uU2x1ZyIsIkRvY3VtZW50RHJhd2VyIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwiZG9jdW1lbnREcmF3ZXJTbHVnIiwiaGFzQ3JlYXRlUGVybWlzc2lvbiIsImNyZWF0ZSIsInBlcm1pc3Npb24iLCJpc09wZW4iLCJhcGlVUkwiLCJzdGF0ZSIsImNhY2hlQnVzdCIsImRpc3BhdGNoQ2FjaGVCdXN0IiwiZGF0YSIsImlzRXJyb3IiLCJzZXRQYXJhbXMiLCJtb3JlVGhhbk9uZUF2YWlsYWJsZUNvbGxlY3Rpb24iLCJsZW5ndGgiLCJwYXJhbXMiLCJuZXdQcmVmZXJlbmNlcyIsIm9uQ3JlYXRlTmV3IiwiZG9jIiwiZG9jSUQiLCJpZCIsImNvbGxlY3Rpb25Db25maWciLCJjb2xsZWN0aW9uIiwiY2VsbFByb3BzIiwibGluayIsIm9uQ2xpY2siLCJyb3dDb2xsIiwicm93RGF0YSIsImNsYXNzTmFtZSIsIkRlZmF1bHRDb21wb25lbnQiLCJDdXN0b21Db21wb25lbnQiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkxpc3QiLCJjb21wb25lbnRQcm9wcyIsImhlYWRlciIsImRpdiIsImgyIiwicGx1cmFsIiwiYnV0dG9uIiwidHlwZSIsImRlc2NyaXB0aW9uIiwib25DaGFuZ2UiLCJvcHRpb25zIiwibWFwIiwiY29sbCIsInBhZ2luYXRpb24iLCJkZWZhdWx0TGltaXQiLCJuZXdEb2N1bWVudFVSTCIsImRpc2FibGVFeWVicm93IiwibW9kaWZ5U2VhcmNoUGFyYW1zIiwiaGFuZGxlU29ydENoYW5nZSIsImhhbmRsZVdoZXJlQ2hhbmdlIiwiaGFuZGxlUGFnZUNoYW5nZSIsImhhbmRsZVBlclBhZ2VDaGFuZ2UiLCJvblNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDNUUsU0FBU0MsUUFBUSxRQUFRLHFCQUFxQjtBQUM5QyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBRS9DLFNBQVNDLGNBQWMsUUFBUSx1Q0FBdUM7QUFDdEUsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxTQUFTQyxPQUFPLFFBQVEsdUJBQXVCO0FBQy9DLFNBQVNDLG9CQUFvQixRQUFRLCtCQUErQjtBQUNwRSxPQUFPQywyQkFBMkIsd0NBQXdDO0FBQzFFLE9BQU9DLG1CQUFtQiwrQkFBK0I7QUFFekQsT0FBT0MsaUJBQWlCLHVDQUF1QztBQUMvRCxPQUFPQyxXQUFXLG9CQUFvQjtBQUN0QyxPQUFPQyxpQkFBaUIsaUJBQWlCO0FBQ3pDLFNBQVNDLGlCQUFpQixRQUFRLG9CQUFvQjtBQUN0RCxPQUFPQyxVQUFVLFVBQVU7QUFDM0IsT0FBT0MsT0FBTyxnQkFBZ0I7QUFDOUIsT0FBT0MscUJBQXFCLHFCQUFxQjtBQUNqRCxPQUFPQyxrQkFBa0Is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