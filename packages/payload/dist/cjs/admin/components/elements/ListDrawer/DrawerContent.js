"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ListDrawerContent", {
    enumerable: true,
    get: function() {
        return ListDrawerContent;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _getTranslation = require("../../../../utilities/getTranslation");
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../hooks/usePayloadAPI"));
var _Default = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/Default"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../forms/Label"));
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../ReactSelect"));
var _DocumentDrawer = require("../DocumentDrawer");
var _Pill = /*#__PURE__*/ _interop_require_default(require("../Pill"));
var _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
var _ViewDescription = /*#__PURE__*/ _interop_require_default(require("../ViewDescription"));
var _formatFields = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/formatFields"));
var _Preferences = require("../../utilities/Preferences");
var _ = require(".");
var _TableColumns = require("../TableColumns");
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
var ListDrawerContent = function(param) {
    var drawerSlug = param.drawerSlug, onSelect = param.onSelect, customHeader = param.customHeader, collectionSlugs = param.collectionSlugs, selectedCollection = param.selectedCollection, filterOptions = param.filterOptions;
    var _selectedCollectionConfig, _permissions_collections, _permissions, _collectionPermissions_create, _collectionPermissions, _selectedCollectionConfig_admin_components_views, _selectedCollectionConfig_admin_components, _selectedCollectionConfig_admin, _selectedCollectionConfig1, _selectedCollectionConfig_labels, _selectedCollectionConfig2, _selectedCollectionConfig_admin1, _selectedCollectionConfig3, _selectedCollectionConfig_admin_pagination, _selectedCollectionConfig_admin2, _selectedCollectionConfig4;
    var _useTranslation = (0, _reacti18next.useTranslation)([
        "upload",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var permissions = (0, _Auth.useAuth)().permissions;
    var setPreference = (0, _Preferences.usePreferences)().setPreference;
    var _useModal = (0, _modal.useModal)(), isModalOpen = _useModal.isModalOpen, closeModal = _useModal.closeModal;
    var _useState = _sliced_to_array((0, _react.useState)(), 2), limit = _useState[0], setLimit = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(null), 2), sort = _useState1[0], setSort = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)(1), 2), page = _useState2[0], setPage = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)(null), 2), where = _useState3[0], setWhere = _useState3[1];
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api, collections = _useConfig.collections;
    var enabledCollectionConfigs = collections.filter(function(param) {
        var slug = param.slug;
        return collectionSlugs.includes(slug);
    });
    var _useState4 = _sliced_to_array((0, _react.useState)(function() {
        var _enabledCollectionConfigs;
        return enabledCollectionConfigs.find(function(param) {
            var slug = param.slug;
            return slug === selectedCollection;
        }) || ((_enabledCollectionConfigs = enabledCollectionConfigs) === null || _enabledCollectionConfigs === void 0 ? void 0 : _enabledCollectionConfigs[0]);
    }), 2), selectedCollectionConfig = _useState4[0], setSelectedCollectionConfig = _useState4[1];
    var _useState5 = _sliced_to_array((0, _react.useState)(function() {
        return selectedCollectionConfig ? {
            label: (0, _getTranslation.getTranslation)(selectedCollectionConfig.labels.singular, i18n),
            value: selectedCollectionConfig.slug
        } : undefined;
    }), 2), selectedOption = _useState5[0], setSelectedOption = _useState5[1];
    var _useState6 = _sliced_to_array((0, _react.useState)(function() {
        return (0, _formatFields.default)(selectedCollectionConfig);
    }), 2), fields = _useState6[0], setFields = _useState6[1];
    (0, _react.useEffect)(function() {
        setFields((0, _formatFields.default)(selectedCollectionConfig));
    }, [
        selectedCollectionConfig
    ]);
    // allow external control of selected collection, same as the initial state logic above
    (0, _react.useEffect)(function() {
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
    var _useDocumentDrawer = _sliced_to_array((0, _DocumentDrawer.useDocumentDrawer)({
        collectionSlug: selectedCollectionConfig.slug
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], _useDocumentDrawer_ = _useDocumentDrawer[2], documentDrawerSlug = _useDocumentDrawer_.drawerSlug;
    (0, _react.useEffect)(function() {
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
    var _useReducer = _sliced_to_array((0, _react.useReducer)(function(state) {
        return state + 1;
    }, 0), 2), cacheBust = _useReducer[0], dispatchCacheBust = _useReducer[1]; // used to force a re-fetch even when apiURL is unchanged
    var _usePayloadAPI1 = _sliced_to_array((0, _usePayloadAPI.default)(apiURL, {}), 2), _usePayloadAPI_ = _usePayloadAPI1[0], data = _usePayloadAPI_.data, isError = _usePayloadAPI_.isError, setParams = _usePayloadAPI1[1].setParams;
    var moreThanOneAvailableCollection = enabledCollectionConfigs.length > 1;
    (0, _react.useEffect)(function() {
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
    (0, _react.useEffect)(function() {
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
    var onCreateNew = (0, _react.useCallback)(function(param) {
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
    return /*#__PURE__*/ _react.default.createElement(_TableColumns.TableColumnsProvider, {
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
                className: "".concat(_.baseClass, "__first-cell")
            }
        ]
    }, /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
        collection: selectedCollectionConfig
    }, /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        DefaultComponent: _Default.default,
        CustomComponent: (_selectedCollectionConfig1 = selectedCollectionConfig) === null || _selectedCollectionConfig1 === void 0 ? void 0 : (_selectedCollectionConfig_admin = _selectedCollectionConfig1.admin) === null || _selectedCollectionConfig_admin === void 0 ? void 0 : (_selectedCollectionConfig_admin_components = _selectedCollectionConfig_admin.components) === null || _selectedCollectionConfig_admin_components === void 0 ? void 0 : (_selectedCollectionConfig_admin_components_views = _selectedCollectionConfig_admin_components.views) === null || _selectedCollectionConfig_admin_components_views === void 0 ? void 0 : _selectedCollectionConfig_admin_components_views.List,
        componentProps: {
            collection: _object_spread_props(_object_spread({}, selectedCollectionConfig), {
                fields: fields
            }),
            customHeader: /*#__PURE__*/ _react.default.createElement("header", {
                className: "".concat(_.baseClass, "__header")
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(_.baseClass, "__header-wrap")
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(_.baseClass, "__header-content")
            }, /*#__PURE__*/ _react.default.createElement("h2", {
                className: "".concat(_.baseClass, "__header-text")
            }, !customHeader ? (0, _getTranslation.getTranslation)((_selectedCollectionConfig2 = selectedCollectionConfig) === null || _selectedCollectionConfig2 === void 0 ? void 0 : (_selectedCollectionConfig_labels = _selectedCollectionConfig2.labels) === null || _selectedCollectionConfig_labels === void 0 ? void 0 : _selectedCollectionConfig_labels.plural, i18n) : customHeader), hasCreatePermission && /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
                className: "".concat(_.baseClass, "__create-new-button")
            }, /*#__PURE__*/ _react.default.createElement(_Pill.default, null, t("general:createNew")))), /*#__PURE__*/ _react.default.createElement("button", {
                type: "button",
                onClick: function() {
                    closeModal(drawerSlug);
                },
                className: "".concat(_.baseClass, "__header-close")
            }, /*#__PURE__*/ _react.default.createElement(_X.default, null))), ((_selectedCollectionConfig3 = selectedCollectionConfig) === null || _selectedCollectionConfig3 === void 0 ? void 0 : (_selectedCollectionConfig_admin1 = _selectedCollectionConfig3.admin) === null || _selectedCollectionConfig_admin1 === void 0 ? void 0 : _selectedCollectionConfig_admin1.description) && /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(_.baseClass, "__sub-header")
            }, /*#__PURE__*/ _react.default.createElement(_ViewDescription.default, {
                description: selectedCollectionConfig.admin.description
            })), moreThanOneAvailableCollection && /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(_.baseClass, "__select-collection-wrap")
            }, /*#__PURE__*/ _react.default.createElement(_Label.default, {
                label: t("selectCollectionToBrowse")
            }), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
                className: "".concat(_.baseClass, "__select-collection"),
                value: selectedOption,
                onChange: setSelectedOption,
                options: enabledCollectionConfigs.map(function(coll) {
                    return {
                        label: (0, _getTranslation.getTranslation)(coll.labels.singular, i18n),
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
    })), /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
        onSave: onCreateNew
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3REcmF3ZXIvRHJhd2VyQ29udGVudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IExpc3REcmF3ZXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgRG9jdW1lbnRJbmZvUHJvdmlkZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IERlZmF1bHRMaXN0IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvRGVmYXVsdCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vZm9ybXMvTGFiZWwnO1xuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uL1JlYWN0U2VsZWN0JztcbmltcG9ydCB7IHVzZURvY3VtZW50RHJhd2VyIH0gZnJvbSAnLi4vRG9jdW1lbnREcmF3ZXInO1xuaW1wb3J0IFBpbGwgZnJvbSAnLi4vUGlsbCc7XG5pbXBvcnQgWCBmcm9tICcuLi8uLi9pY29ucy9YJztcbmltcG9ydCBWaWV3RGVzY3JpcHRpb24gZnJvbSAnLi4vVmlld0Rlc2NyaXB0aW9uJztcbmltcG9ydCBmb3JtYXRGaWVsZHMgZnJvbSAnLi4vLi4vdmlld3MvY29sbGVjdGlvbnMvTGlzdC9mb3JtYXRGaWVsZHMnO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGJhc2VDbGFzcyB9IGZyb20gJy4nO1xuaW1wb3J0IHsgVGFibGVDb2x1bW5zUHJvdmlkZXIgfSBmcm9tICcuLi9UYWJsZUNvbHVtbnMnO1xuXG5leHBvcnQgY29uc3QgTGlzdERyYXdlckNvbnRlbnQ6IFJlYWN0LkZDPExpc3REcmF3ZXJQcm9wcz4gPSAoe1xuICBkcmF3ZXJTbHVnLFxuICBvblNlbGVjdCxcbiAgY3VzdG9tSGVhZGVyLFxuICBjb2xsZWN0aW9uU2x1Z3MsXG4gIHNlbGVjdGVkQ29sbGVjdGlvbixcbiAgZmlsdGVyT3B0aW9ucyxcbn0pID0+IHtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbihbJ3VwbG9hZCcsICdnZW5lcmFsJ10pO1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgeyBpc01vZGFsT3BlbiwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZTxudW1iZXI+KCk7XG4gIGNvbnN0IFtzb3J0LCBzZXRTb3J0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW3doZXJlLCBzZXRXaGVyZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSwgY29sbGVjdGlvbnMgfSA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IGVuYWJsZWRDb2xsZWN0aW9uQ29uZmlncyA9IGNvbGxlY3Rpb25zLmZpbHRlcigoeyBzbHVnIH0pID0+IHtcbiAgICByZXR1cm4gY29sbGVjdGlvblNsdWdzLmluY2x1ZGVzKHNsdWcpO1xuICB9KTtcblxuICBjb25zdCBbc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLCBzZXRTZWxlY3RlZENvbGxlY3Rpb25Db25maWddID0gdXNlU3RhdGU8U2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZz4oKCkgPT4ge1xuICAgIHJldHVybiBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHNlbGVjdGVkQ29sbGVjdGlvbikgfHwgZW5hYmxlZENvbGxlY3Rpb25Db25maWdzPy5bMF07XG4gIH0pO1xuXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGU8eyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCgpID0+IChzZWxlY3RlZENvbGxlY3Rpb25Db25maWcgPyB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihzZWxlY3RlZENvbGxlY3Rpb25Db25maWcubGFiZWxzLnNpbmd1bGFyLCBpMThuKSwgdmFsdWU6IHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnIH0gOiB1bmRlZmluZWQpKTtcblxuICBjb25zdCBbZmllbGRzLCBzZXRGaWVsZHNdID0gdXNlU3RhdGU8RmllbGRbXT4oKCkgPT4gZm9ybWF0RmllbGRzKHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmllbGRzKGZvcm1hdEZpZWxkcyhzZWxlY3RlZENvbGxlY3Rpb25Db25maWcpKTtcbiAgfSwgW3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ10pO1xuXG4gIC8vIGFsbG93IGV4dGVybmFsIGNvbnRyb2wgb2Ygc2VsZWN0ZWQgY29sbGVjdGlvbiwgc2FtZSBhcyB0aGUgaW5pdGlhbCBzdGF0ZSBsb2dpYyBhYm92ZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZENvbGxlY3Rpb24pIHtcbiAgICAgIC8vIGlmIHBhc3NlZCBhIHNlbGVjdGlvbiwgZmluZCBpdCBhbmQgY2hlY2sgaWYgaXQncyBlbmFibGVkXG4gICAgICBjb25zdCBzZWxlY3RlZENvbmZpZyA9IGVuYWJsZWRDb2xsZWN0aW9uQ29uZmlncy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB8fCBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3M/LlswXTtcbiAgICAgIHNldFNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZyhzZWxlY3RlZENvbmZpZyk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRDb2xsZWN0aW9uLCBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MsIG9uU2VsZWN0LCB0XSk7XG5cbiAgY29uc3QgcHJlZmVyZW5jZUtleSA9IGAke3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnfS1saXN0YDtcblxuICAvLyB0aGlzIGlzIHRoZSAnY3JlYXRlIG5ldycgZHJhd2VyXG4gIGNvbnN0IFtcbiAgICBEb2N1bWVudERyYXdlcixcbiAgICBEb2N1bWVudERyYXdlclRvZ2dsZXIsXG4gICAge1xuICAgICAgZHJhd2VyU2x1ZzogZG9jdW1lbnREcmF3ZXJTbHVnLFxuICAgIH0sXG4gIF0gPSB1c2VEb2N1bWVudERyYXdlcih7XG4gICAgY29sbGVjdGlvblNsdWc6IHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgc2V0U2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnKGVuYWJsZWRDb2xsZWN0aW9uQ29uZmlncy5maW5kKCh7IHNsdWcgfSkgPT4gc2VsZWN0ZWRPcHRpb24udmFsdWUgPT09IHNsdWcpKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZE9wdGlvbiwgZW5hYmxlZENvbGxlY3Rpb25Db25maWdzXSk7XG5cbiAgY29uc3QgY29sbGVjdGlvblBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnPy5zbHVnXTtcbiAgY29uc3QgaGFzQ3JlYXRlUGVybWlzc2lvbiA9IGNvbGxlY3Rpb25QZXJtaXNzaW9ucz8uY3JlYXRlPy5wZXJtaXNzaW9uO1xuXG4gIC8vIElmIG1vZGFsIGlzIG9wZW4sIGdldCBhY3RpdmUgcGFnZSBvZiB1cGxvYWQgZ2FsbGVyeVxuICBjb25zdCBpc09wZW4gPSBpc01vZGFsT3BlbihkcmF3ZXJTbHVnKTtcbiAgY29uc3QgYXBpVVJMID0gaXNPcGVuID8gYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnfWAgOiBudWxsO1xuICBjb25zdCBbY2FjaGVCdXN0LCBkaXNwYXRjaENhY2hlQnVzdF0gPSB1c2VSZWR1Y2VyKChzdGF0ZSkgPT4gc3RhdGUgKyAxLCAwKTsgLy8gdXNlZCB0byBmb3JjZSBhIHJlLWZldGNoIGV2ZW4gd2hlbiBhcGlVUkwgaXMgdW5jaGFuZ2VkXG4gIGNvbnN0IFt7IGRhdGEsIGlzRXJyb3IgfSwgeyBzZXRQYXJhbXMgfV0gPSB1c2VQYXlsb2FkQVBJKGFwaVVSTCwge30pO1xuICBjb25zdCBtb3JlVGhhbk9uZUF2YWlsYWJsZUNvbGxlY3Rpb24gPSBlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MubGVuZ3RoID4gMTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtczoge1xuICAgICAgcGFnZT86IG51bWJlclxuICAgICAgc29ydD86IHN0cmluZ1xuICAgICAgd2hlcmU/OiB1bmtub3duXG4gICAgICBsaW1pdD86IG51bWJlclxuICAgICAgY2FjaGVCdXN0PzogbnVtYmVyXG4gICAgfSA9IHt9O1xuXG4gICAgaWYgKHBhZ2UpIHBhcmFtcy5wYWdlID0gcGFnZTtcblxuICAgIHBhcmFtcy53aGVyZSA9IHtcbiAgICAgIC4uLndoZXJlID8geyAuLi53aGVyZSB9IDoge30sXG4gICAgICAuLi5maWx0ZXJPcHRpb25zPy5bc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnLnNsdWddID8ge1xuICAgICAgICAuLi5maWx0ZXJPcHRpb25zW3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5zbHVnXSxcbiAgICAgIH0gOiB7fSxcbiAgICB9O1xuXG4gICAgaWYgKHNvcnQpIHBhcmFtcy5zb3J0ID0gc29ydDtcbiAgICBpZiAobGltaXQpIHBhcmFtcy5saW1pdCA9IGxpbWl0O1xuICAgIGlmIChjYWNoZUJ1c3QpIHBhcmFtcy5jYWNoZUJ1c3QgPSBjYWNoZUJ1c3Q7XG5cbiAgICBzZXRQYXJhbXMocGFyYW1zKTtcbiAgfSwgW3NldFBhcmFtcywgcGFnZSwgc29ydCwgd2hlcmUsIGxpbWl0LCBjYWNoZUJ1c3QsIGZpbHRlck9wdGlvbnMsIHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJlZmVyZW5jZXMgPSB7XG4gICAgICBsaW1pdCxcbiAgICAgIHNvcnQsXG4gICAgfTtcblxuICAgIHNldFByZWZlcmVuY2UocHJlZmVyZW5jZUtleSwgbmV3UHJlZmVyZW5jZXMpO1xuICB9LCBbc29ydCwgbGltaXQsIHNldFByZWZlcmVuY2UsIHByZWZlcmVuY2VLZXldKTtcblxuICBjb25zdCBvbkNyZWF0ZU5ldyA9IHVzZUNhbGxiYWNrKCh7IGRvYyB9KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBvblNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25TZWxlY3Qoe1xuICAgICAgICBkb2NJRDogZG9jLmlkLFxuICAgICAgICBjb2xsZWN0aW9uQ29uZmlnOiBzZWxlY3RlZENvbGxlY3Rpb25Db25maWcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hDYWNoZUJ1c3QoKTtcbiAgICBjbG9zZU1vZGFsKGRvY3VtZW50RHJhd2VyU2x1Zyk7XG4gICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgfSwgW2Nsb3NlTW9kYWwsIGRvY3VtZW50RHJhd2VyU2x1ZywgZHJhd2VyU2x1Zywgb25TZWxlY3QsIHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ10pO1xuXG4gIGlmICghc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnIHx8IGlzRXJyb3IpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29sdW1uc1Byb3ZpZGVyXG4gICAgICBjb2xsZWN0aW9uPXtzZWxlY3RlZENvbGxlY3Rpb25Db25maWd9XG4gICAgICBjZWxsUHJvcHM9e1t7XG4gICAgICAgIGxpbms6IGZhbHNlLFxuICAgICAgICBvbkNsaWNrOiAoeyBjb2xsZWN0aW9uOiByb3dDb2xsLCByb3dEYXRhIH0pID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIG9uU2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBvblNlbGVjdCh7XG4gICAgICAgICAgICAgIGRvY0lEOiByb3dEYXRhLmlkLFxuICAgICAgICAgICAgICBjb2xsZWN0aW9uQ29uZmlnOiByb3dDb2xsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWU6IGAke2Jhc2VDbGFzc31fX2ZpcnN0LWNlbGxgLFxuICAgICAgfV19XG4gICAgPlxuICAgICAgPERvY3VtZW50SW5mb1Byb3ZpZGVyIGNvbGxlY3Rpb249e3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZ30+XG4gICAgICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TGlzdH1cbiAgICAgICAgICBDdXN0b21Db21wb25lbnQ9e3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZz8uYWRtaW4/LmNvbXBvbmVudHM/LnZpZXdzPy5MaXN0fVxuICAgICAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgICAgICAgIC4uLnNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZyxcbiAgICAgICAgICAgICAgZmllbGRzLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1c3RvbUhlYWRlcjogKFxuICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2hlYWRlci13cmFwYH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLXRleHRgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IWN1c3RvbUhlYWRlciA/IGdldFRyYW5zbGF0aW9uKHNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZz8ubGFiZWxzPy5wbHVyYWwsIGkxOG4pIDogY3VzdG9tSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICB7aGFzQ3JlYXRlUGVybWlzc2lvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPERvY3VtZW50RHJhd2VyVG9nZ2xlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jcmVhdGUtbmV3LWJ1dHRvbmB9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdnZW5lcmFsOmNyZWF0ZU5ldycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QaWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19oZWFkZXItY2xvc2VgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8WCAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZz8uYWRtaW4/LmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zdWItaGVhZGVyYH0+XG4gICAgICAgICAgICAgICAgICAgIDxWaWV3RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e3NlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZy5hZG1pbi5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge21vcmVUaGFuT25lQXZhaWxhYmxlQ29sbGVjdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2VsZWN0LWNvbGxlY3Rpb24td3JhcGB9PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgbGFiZWw9e3QoJ3NlbGVjdENvbGxlY3Rpb25Ub0Jyb3dzZScpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NlbGVjdC1jb2xsZWN0aW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldFNlbGVjdGVkT3B0aW9ufSAvLyB0aGlzIGlzIG9ubHkgY2hhbmdpbmcgdGhlIG9wdGlvbnMgd2hpY2ggaXMgbm90IHJlcnVubmluZyBteSBlZmZlY3RcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MubWFwKChjb2xsKSA9PiAoeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbC5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pLCB2YWx1ZTogY29sbC5zbHVnIH0pKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICBsaW1pdDogbGltaXQgfHwgc2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnPy5hZG1pbj8ucGFnaW5hdGlvbj8uZGVmYXVsdExpbWl0LFxuICAgICAgICAgICAgc2V0TGltaXQsXG4gICAgICAgICAgICBzZXRTb3J0LFxuICAgICAgICAgICAgbmV3RG9jdW1lbnRVUkw6IG51bGwsXG4gICAgICAgICAgICBoYXNDcmVhdGVQZXJtaXNzaW9uLFxuICAgICAgICAgICAgZGlzYWJsZUV5ZWJyb3c6IHRydWUsXG4gICAgICAgICAgICBtb2RpZnlTZWFyY2hQYXJhbXM6IGZhbHNlLFxuICAgICAgICAgICAgaGFuZGxlU29ydENoYW5nZTogc2V0U29ydCxcbiAgICAgICAgICAgIGhhbmRsZVdoZXJlQ2hhbmdlOiBzZXRXaGVyZSxcbiAgICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2U6IHNldFBhZ2UsXG4gICAgICAgICAgICBoYW5kbGVQZXJQYWdlQ2hhbmdlOiBzZXRMaW1pdCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Eb2N1bWVudEluZm9Qcm92aWRlcj5cbiAgICAgIDxEb2N1bWVudERyYXdlciBvblNhdmU9e29uQ3JlYXRlTmV3fSAvPlxuICAgIDwvVGFibGVDb2x1bW5zUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkxpc3REcmF3ZXJDb250ZW50IiwiZHJhd2VyU2x1ZyIsIm9uU2VsZWN0IiwiY3VzdG9tSGVhZGVyIiwiY29sbGVjdGlvblNsdWdzIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwiZmlsdGVyT3B0aW9ucyIsInNlbGVjdGVkQ29sbGVjdGlvbkNvbmZpZyIsInBlcm1pc3Npb25zIiwiY29sbGVjdGlvblBlcm1pc3Npb25zIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInVzZUF1dGgiLCJzZXRQcmVmZXJlbmNlIiwidXNlUHJlZmVyZW5jZXMiLCJ1c2VNb2RhbCIsImlzTW9kYWxPcGVuIiwiY2xvc2VNb2RhbCIsInVzZVN0YXRlIiwibGltaXQiLCJzZXRMaW1pdCIsInNvcnQiLCJzZXRTb3J0IiwicGFnZSIsInNldFBhZ2UiLCJ3aGVyZSIsInNldFdoZXJlIiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwiY29sbGVjdGlvbnMiLCJlbmFibGVkQ29sbGVjdGlvbkNvbmZpZ3MiLCJmaWx0ZXIiLCJzbHVnIiwiaW5jbHVkZXMiLCJmaW5kIiwic2V0U2VsZWN0ZWRDb2xsZWN0aW9uQ29uZmlnIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiZm9ybWF0RmllbGRzIiwiZmllbGRzIiwic2V0RmllbGRzIiwidXNlRWZmZWN0Iiwic2VsZWN0ZWRDb25maWciLCJwcmVmZXJlbmNlS2V5IiwidXNlRG9jdW1lbnREcmF3ZXIiLCJjb2xsZWN0aW9uU2x1ZyIsIkRvY3VtZW50RHJhd2VyIiwiRG9jdW1lbnREcmF3ZXJUb2dnbGVyIiwiZG9jdW1lbnREcmF3ZXJTbHVnIiwiaGFzQ3JlYXRlUGVybWlzc2lvbiIsImNyZWF0ZSIsInBlcm1pc3Npb24iLCJpc09wZW4iLCJhcGlVUkwiLCJ1c2VSZWR1Y2VyIiwic3RhdGUiLCJjYWNoZUJ1c3QiLCJkaXNwYXRjaENhY2hlQnVzdCIsInVzZVBheWxvYWRBUEkiLCJkYXRhIiwiaXNFcnJvciIsInNldFBhcmFtcyIsIm1vcmVUaGFuT25lQXZhaWxhYmxlQ29sbGVjdGlvbiIsImxlbmd0aCIsInBhcmFtcyIsIm5ld1ByZWZlcmVuY2VzIiwib25DcmVhdGVOZXciLCJ1c2VDYWxsYmFjayIsImRvYyIsImRvY0lEIiwiaWQiLCJjb2xsZWN0aW9uQ29uZmlnIiwiVGFibGVDb2x1bW5zUHJvdmlkZXIiLCJjb2xsZWN0aW9uIiwiY2VsbFByb3BzIiwibGluayIsIm9uQ2xpY2siLCJyb3dDb2xsIiwicm93RGF0YSIsImNsYXNzTmFtZSIsImJhc2VDbGFzcyIsIkRvY3VtZW50SW5mb1Byb3ZpZGVyIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCIsIkRlZmF1bHRMaXN0IiwiQ3VzdG9tQ29tcG9uZW50IiwiYWRtaW4iLCJjb21wb25lbnRzIiwidmlld3MiLCJMaXN0IiwiY29tcG9uZW50UHJvcHMiLCJoZWFkZXIiLCJkaXYiLCJoMiIsInBsdXJhbCIsIlBpbGwiLCJidXR0b24iLCJ0eXBlIiwiWCIsImRlc2NyaXB0aW9uIiwiVmlld0Rlc2NyaXB0aW9uIiwiTGFiZWwiLCJSZWFjdFNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9ucyIsIm1hcCIsImNvbGwiLCJwYWdpbmF0aW9uIiwiZGVmYXVsdExpbWl0IiwibmV3RG9jdW1lbnRVUkwiLCJkaXNhYmxlRXllYnJvdyIsIm1vZGlmeVNlYXJjaFBhcmFtcyIsImhhbmRsZVNvcnRDaGFuZ2UiLCJoYW5kbGVXaGVyZUNoYW5nZSIsImhhbmRsZVBhZ2VDaGFuZ2UiLCJoYW5kbGVQZXJQYWdlQ2hhbmdlIiwib25TYXZlIl0sIm1hcHBpbmdzIjoiOzs7OytCQXdCYUE7OztlQUFBQTs7OzZEQXhCdUQ7cUJBQzNDOzRCQUNNOzhCQUVBO3NCQUNMO29CQUNGOzRCQUNhOzRFQUNIO29FQUNSOzhEQUVGOzREQUNOO2tFQUNNOzhCQUNVOzJEQUNqQjt3REFDSDtzRUFDYzttRUFDSDsyQkFDTTtnQkFFTDs0QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTUEsb0JBQStDO1FBQzFEQyxtQkFBQUEsWUFDQUMsaUJBQUFBLFVBQ0FDLHFCQUFBQSxjQUNBQyx3QkFBQUEsaUJBQ0FDLDJCQUFBQSxvQkFDQUMsc0JBQUFBO1FBd0R5REMsMkJBQTNCQywwQkFBQUEsY0FDRkMsK0JBQUFBLHdCQThFSEYsa0RBQUFBLDRDQUFBQSxpQ0FBQUEsNEJBVzJCQSxrQ0FBQUEsNEJBc0JyQ0Esa0NBQUFBLDRCQW1CV0EsNENBQUFBLGtDQUFBQTtJQXpMMUIsSUFBb0JHLGtCQUFBQSxJQUFBQSw0QkFBYyxFQUFDO1FBQUM7UUFBVTtLQUFVLEdBQWhEQyxJQUFZRCxnQkFBWkMsR0FBR0MsT0FBU0YsZ0JBQVRF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