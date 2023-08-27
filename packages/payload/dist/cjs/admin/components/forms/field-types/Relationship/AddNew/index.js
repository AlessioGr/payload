"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AddNewRelation", {
    enumerable: true,
    get: function() {
        return AddNewRelation;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Button"));
var _Popup = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Popup"));
var _useRelatedCollections = require("./useRelatedCollections");
var _Auth = require("../../../../utilities/Auth");
var _Plus = /*#__PURE__*/ _interop_require_default(require("../../../../icons/Plus"));
var _getTranslation = require("../../../../../../utilities/getTranslation");
var _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../../../elements/Tooltip"));
var _DocumentDrawer = require("../../../../elements/DocumentDrawer");
var _Config = require("../../../../utilities/Config");
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var baseClass = "relationship-add-new";
var AddNewRelation = function(param) {
    var path = param.path, hasMany = param.hasMany, relationTo = param.relationTo, value = param.value, setValue = param.setValue, dispatchOptions = param.dispatchOptions;
    var _collectionConfig;
    var relatedCollections = (0, _useRelatedCollections.useRelatedCollections)(relationTo);
    var permissions = (0, _Auth.useAuth)().permissions;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), show = _useState[0], setShow = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(), 2), selectedCollection = _useState1[0], setSelectedCollection = _useState1[1];
    var relatedToMany = relatedCollections.length > 1;
    var _useState2 = _sliced_to_array((0, _react.useState)(function() {
        return !relatedToMany ? relatedCollections[0] : undefined;
    }), 2), collectionConfig = _useState2[0], setCollectionConfig = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)(false), 2), popupOpen = _useState3[0], setPopupOpen = _useState3[1];
    var _useTranslation = (0, _reacti18next.useTranslation)("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState4 = _sliced_to_array((0, _react.useState)(false), 2), showTooltip = _useState4[0], setShowTooltip = _useState4[1];
    var config = (0, _Config.useConfig)();
    var _useDocumentDrawer = _sliced_to_array((0, _DocumentDrawer.useDocumentDrawer)({
        collectionSlug: (_collectionConfig = collectionConfig) === null || _collectionConfig === void 0 ? void 0 : _collectionConfig.slug
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], _useDocumentDrawer_ = _useDocumentDrawer[2], toggleDrawer = _useDocumentDrawer_.toggleDrawer, isDrawerOpen = _useDocumentDrawer_.isDrawerOpen;
    var onSave = (0, _react.useCallback)(function(param) {
        var operation = param.operation, doc = param.doc;
        if (operation === "create") {
            var newValue = Array.isArray(relationTo) ? {
                relationTo: collectionConfig.slug,
                value: doc.id
            } : doc.id;
            // ensure the value is not already in the array
            var isNewValue = Array.isArray(relationTo) && Array.isArray(value) ? !value.some(function(v) {
                return v && typeof v === "object" && v.value === doc.id;
            }) : value !== doc.id;
            if (isNewValue) {
                dispatchOptions({
                    type: "ADD",
                    collection: collectionConfig,
                    docs: [
                        doc
                    ],
                    sort: true,
                    i18n: i18n,
                    config: config
                });
                if (hasMany) {
                    setValue(_to_consumable_array(Array.isArray(value) ? value : []).concat([
                        newValue
                    ]));
                } else {
                    setValue(newValue);
                }
            }
            setSelectedCollection(undefined);
        }
    }, [
        relationTo,
        collectionConfig,
        dispatchOptions,
        i18n,
        hasMany,
        setValue,
        value,
        config
    ]);
    var onPopopToggle = (0, _react.useCallback)(function(state) {
        setPopupOpen(state);
    }, []);
    (0, _react.useEffect)(function() {
        if (permissions) {
            if (relatedCollections.length === 1) {
                setShow(permissions.collections[relatedCollections[0].slug].create.permission);
            } else {
                setShow(relatedCollections.some(function(collection) {
                    return permissions.collections[collection.slug].create.permission;
                }));
            }
        }
    }, [
        permissions,
        relatedCollections
    ]);
    (0, _react.useEffect)(function() {
        if (relatedToMany && selectedCollection) {
            setCollectionConfig(relatedCollections.find(function(collection) {
                return collection.slug === selectedCollection;
            }));
        }
    }, [
        selectedCollection,
        relatedToMany,
        relatedCollections
    ]);
    (0, _react.useEffect)(function() {
        if (relatedToMany && collectionConfig) {
            // the drawer must be rendered on the page before before opening it
            // this is why 'selectedCollection' is different from 'collectionConfig'
            toggleDrawer();
            setSelectedCollection(undefined);
        }
    }, [
        toggleDrawer,
        relatedToMany,
        collectionConfig
    ]);
    (0, _react.useEffect)(function() {
        if (relatedToMany && !isDrawerOpen) {
            setCollectionConfig(undefined);
        }
    }, [
        isDrawerOpen,
        relatedToMany
    ]);
    if (show) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: baseClass,
            id: "".concat(path, "-add-new")
        }, relatedCollections.length === 1 && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
            className: "".concat(baseClass, "__add-button"),
            onMouseEnter: function() {
                return setShowTooltip(true);
            },
            onMouseLeave: function() {
                return setShowTooltip(false);
            },
            onClick: function() {
                return setShowTooltip(false);
            }
        }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
            className: "".concat(baseClass, "__tooltip"),
            show: showTooltip
        }, t("addNewLabel", {
            label: (0, _getTranslation.getTranslation)(relatedCollections[0].labels.singular, i18n)
        })), /*#__PURE__*/ _react.default.createElement(_Plus.default, null)), /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
            onSave: onSave
        })), relatedCollections.length > 1 && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Popup.default, {
            buttonType: "custom",
            horizontalAlign: "center",
            onToggleOpen: onPopopToggle,
            button: /*#__PURE__*/ _react.default.createElement(_Button.default, {
                className: "".concat(baseClass, "__add-button"),
                buttonStyle: "none",
                tooltip: popupOpen ? undefined : t("addNew")
            }, /*#__PURE__*/ _react.default.createElement(_Plus.default, null)),
            render: function(param) {
                var closePopup = param.close;
                return /*#__PURE__*/ _react.default.createElement("ul", {
                    className: "".concat(baseClass, "__relations")
                }, relatedCollections.map(function(relatedCollection) {
                    if (permissions.collections[relatedCollection.slug].create.permission) {
                        return /*#__PURE__*/ _react.default.createElement("li", {
                            key: relatedCollection.slug
                        }, /*#__PURE__*/ _react.default.createElement("button", {
                            type: "button",
                            className: "".concat(baseClass, "__relation-button ").concat(baseClass, "__relation-button--").concat(relatedCollection.slug),
                            onClick: function() {
                                closePopup();
                                setSelectedCollection(relatedCollection.slug);
                            }
                        }, (0, _getTranslation.getTranslation)(relatedCollection.labels.singular, i18n)));
                    }
                    return null;
                }));
            }
        }), collectionConfig && permissions.collections[collectionConfig.slug].create.permission && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
            onSave: onSave
        })));
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9CdXR0b24nO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL1BvcHVwJztcbmltcG9ydCB7IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyB9IGZyb20gJy4vdXNlUmVsYXRlZENvbGxlY3Rpb25zJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgUGx1cyBmcm9tICcuLi8uLi8uLi8uLi9pY29ucy9QbHVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL1Rvb2x0aXAnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnREcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9Eb2N1bWVudERyYXdlcic7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IFByb3BzIGFzIEVkaXRWaWV3UHJvcHMgfSBmcm9tICcuLi8uLi8uLi8uLi92aWV3cy9jb2xsZWN0aW9ucy9FZGl0L3R5cGVzJztcbmltcG9ydCB7IFZhbHVlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZWxhdGlvbnNoaXAtYWRkLW5ldyc7XG5cbmV4cG9ydCBjb25zdCBBZGROZXdSZWxhdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHtcbiAgcGF0aCxcbiAgaGFzTWFueSxcbiAgcmVsYXRpb25UbyxcbiAgdmFsdWUsXG4gIHNldFZhbHVlLFxuICBkaXNwYXRjaE9wdGlvbnMsXG59KSA9PiB7XG4gIGNvbnN0IHJlbGF0ZWRDb2xsZWN0aW9ucyA9IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyhyZWxhdGlvblRvKTtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucyB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzZWxlY3RlZENvbGxlY3Rpb24sIHNldFNlbGVjdGVkQ29sbGVjdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IHJlbGF0ZWRUb01hbnkgPSByZWxhdGVkQ29sbGVjdGlvbnMubGVuZ3RoID4gMTtcbiAgY29uc3QgW2NvbGxlY3Rpb25Db25maWcsIHNldENvbGxlY3Rpb25Db25maWddID0gdXNlU3RhdGU8U2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZz4oKCkgPT4gKCFyZWxhdGVkVG9NYW55ID8gcmVsYXRlZENvbGxlY3Rpb25zWzBdIDogdW5kZWZpbmVkKSk7XG4gIGNvbnN0IFtwb3B1cE9wZW4sIHNldFBvcHVwT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuICBjb25zdCBbc2hvd1Rvb2x0aXAsIHNldFNob3dUb29sdGlwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgW1xuICAgIERvY3VtZW50RHJhd2VyLFxuICAgIERvY3VtZW50RHJhd2VyVG9nZ2xlcixcbiAgICB7IHRvZ2dsZURyYXdlciwgaXNEcmF3ZXJPcGVuIH0sXG4gIF0gPSB1c2VEb2N1bWVudERyYXdlcih7XG4gICAgY29sbGVjdGlvblNsdWc6IGNvbGxlY3Rpb25Db25maWc/LnNsdWcsXG4gIH0pO1xuXG4gIGNvbnN0IG9uU2F2ZTogRWRpdFZpZXdQcm9wc1snb25TYXZlJ10gPSB1c2VDYWxsYmFjaygoe1xuICAgIG9wZXJhdGlvbixcbiAgICBkb2MsXG4gIH0pID0+IHtcbiAgICBpZiAob3BlcmF0aW9uID09PSAnY3JlYXRlJykge1xuICAgICAgY29uc3QgbmV3VmFsdWU6IFZhbHVlID0gQXJyYXkuaXNBcnJheShyZWxhdGlvblRvKSA/IHtcbiAgICAgICAgcmVsYXRpb25UbzogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgICB2YWx1ZTogZG9jLmlkLFxuICAgICAgfSA6IGRvYy5pZDtcblxuICAgICAgLy8gZW5zdXJlIHRoZSB2YWx1ZSBpcyBub3QgYWxyZWFkeSBpbiB0aGUgYXJyYXlcbiAgICAgIGNvbnN0IGlzTmV3VmFsdWUgPSBBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pICYmIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgICAgID8gIXZhbHVlLnNvbWUoKHYpID0+IHYgJiYgdHlwZW9mIHYgPT09ICdvYmplY3QnICYmIHYudmFsdWUgPT09IGRvYy5pZClcbiAgICAgICAgOiB2YWx1ZSAhPT0gZG9jLmlkO1xuXG4gICAgICBpZiAoaXNOZXdWYWx1ZSkge1xuICAgICAgICBkaXNwYXRjaE9wdGlvbnMoe1xuICAgICAgICAgIHR5cGU6ICdBREQnLFxuICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgICAgZG9jczogW1xuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgc29ydDogdHJ1ZSxcbiAgICAgICAgICBpMThuLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpZiAoaGFzTWFueSkge1xuICAgICAgICAgIHNldFZhbHVlKFsuLi4oQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFtdKSwgbmV3VmFsdWVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0U2VsZWN0ZWRDb2xsZWN0aW9uKHVuZGVmaW5lZCk7XG4gICAgfVxuICB9LCBbcmVsYXRpb25UbywgY29sbGVjdGlvbkNvbmZpZywgZGlzcGF0Y2hPcHRpb25zLCBpMThuLCBoYXNNYW55LCBzZXRWYWx1ZSwgdmFsdWUsIGNvbmZpZ10pO1xuXG4gIGNvbnN0IG9uUG9wb3BUb2dnbGUgPSB1c2VDYWxsYmFjaygoc3RhdGUpID0+IHtcbiAgICBzZXRQb3B1cE9wZW4oc3RhdGUpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGVybWlzc2lvbnMpIHtcbiAgICAgIGlmIChyZWxhdGVkQ29sbGVjdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHNldFNob3cocGVybWlzc2lvbnMuY29sbGVjdGlvbnNbcmVsYXRlZENvbGxlY3Rpb25zWzBdLnNsdWddLmNyZWF0ZS5wZXJtaXNzaW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFNob3cocmVsYXRlZENvbGxlY3Rpb25zLnNvbWUoKGNvbGxlY3Rpb24pID0+IHBlcm1pc3Npb25zLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb24uc2x1Z10uY3JlYXRlLnBlcm1pc3Npb24pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwZXJtaXNzaW9ucywgcmVsYXRlZENvbGxlY3Rpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVsYXRlZFRvTWFueSAmJiBzZWxlY3RlZENvbGxlY3Rpb24pIHtcbiAgICAgIHNldENvbGxlY3Rpb25Db25maWcocmVsYXRlZENvbGxlY3Rpb25zLmZpbmQoKGNvbGxlY3Rpb24pID0+IGNvbGxlY3Rpb24uc2x1ZyA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSk7XG4gICAgfVxuICB9LCBbc2VsZWN0ZWRDb2xsZWN0aW9uLCByZWxhdGVkVG9NYW55LCByZWxhdGVkQ29sbGVjdGlvbnNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWxhdGVkVG9NYW55ICYmIGNvbGxlY3Rpb25Db25maWcpIHtcbiAgICAgIC8vIHRoZSBkcmF3ZXIgbXVzdCBiZSByZW5kZXJlZCBvbiB0aGUgcGFnZSBiZWZvcmUgYmVmb3JlIG9wZW5pbmcgaXRcbiAgICAgIC8vIHRoaXMgaXMgd2h5ICdzZWxlY3RlZENvbGxlY3Rpb24nIGlzIGRpZmZlcmVudCBmcm9tICdjb2xsZWN0aW9uQ29uZmlnJ1xuICAgICAgdG9nZ2xlRHJhd2VyKCk7XG4gICAgICBzZXRTZWxlY3RlZENvbGxlY3Rpb24odW5kZWZpbmVkKTtcbiAgICB9XG4gIH0sIFt0b2dnbGVEcmF3ZXIsIHJlbGF0ZWRUb01hbnksIGNvbGxlY3Rpb25Db25maWddKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWxhdGVkVG9NYW55ICYmICFpc0RyYXdlck9wZW4pIHtcbiAgICAgIHNldENvbGxlY3Rpb25Db25maWcodW5kZWZpbmVkKTtcbiAgICB9XG4gIH0sIFtpc0RyYXdlck9wZW4sIHJlbGF0ZWRUb01hbnldKTtcblxuICBpZiAoc2hvdykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICBpZD17YCR7cGF0aH0tYWRkLW5ld2B9XG4gICAgICA+XG4gICAgICAgIHtyZWxhdGVkQ29sbGVjdGlvbnMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8RG9jdW1lbnREcmF3ZXJUb2dnbGVyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWRkLWJ1dHRvbmB9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd1Rvb2x0aXAodHJ1ZSl9XG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2hvd1Rvb2x0aXAoZmFsc2UpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VG9vbHRpcChmYWxzZSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b29sdGlwYH1cbiAgICAgICAgICAgICAgICBzaG93PXtzaG93VG9vbHRpcH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0KCdhZGROZXdMYWJlbCcsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKHJlbGF0ZWRDb2xsZWN0aW9uc1swXS5sYWJlbHMuc2luZ3VsYXIsIGkxOG4pIH0pfVxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICAgIDxQbHVzIC8+XG4gICAgICAgICAgICA8L0RvY3VtZW50RHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgICAgIDxEb2N1bWVudERyYXdlciBvblNhdmU9e29uU2F2ZX0gLz5cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7cmVsYXRlZENvbGxlY3Rpb25zLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgICBidXR0b25UeXBlPVwiY3VzdG9tXCJcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgb25Ub2dnbGVPcGVuPXtvblBvcG9wVG9nZ2xlfVxuICAgICAgICAgICAgICBidXR0b249eyhcbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FkZC1idXR0b25gfVxuICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXA9e3BvcHVwT3BlbiA/IHVuZGVmaW5lZCA6IHQoJ2FkZE5ldycpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQbHVzIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgICByZW5kZXI9eyh7IGNsb3NlOiBjbG9zZVBvcHVwIH0pID0+IChcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZWxhdGlvbnNgfT5cbiAgICAgICAgICAgICAgICAgIHtyZWxhdGVkQ29sbGVjdGlvbnMubWFwKChyZWxhdGVkQ29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbnMuY29sbGVjdGlvbnNbcmVsYXRlZENvbGxlY3Rpb24uc2x1Z10uY3JlYXRlLnBlcm1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cmVsYXRlZENvbGxlY3Rpb24uc2x1Z30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3JlbGF0aW9uLWJ1dHRvbiAke2Jhc2VDbGFzc31fX3JlbGF0aW9uLWJ1dHRvbi0tJHtyZWxhdGVkQ29sbGVjdGlvbi5zbHVnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRDb2xsZWN0aW9uKHJlbGF0ZWRDb2xsZWN0aW9uLnNsdWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VHJhbnNsYXRpb24ocmVsYXRlZENvbGxlY3Rpb24ubGFiZWxzLnNpbmd1bGFyLCBpMThuKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2NvbGxlY3Rpb25Db25maWcgJiYgcGVybWlzc2lvbnMuY29sbGVjdGlvbnNbY29sbGVjdGlvbkNvbmZpZy5zbHVnXS5jcmVhdGUucGVybWlzc2lvbiAmJiAoXG4gICAgICAgICAgICAgIDxEb2N1bWVudERyYXdlclxuICAgICAgICAgICAgICAgIG9uU2F2ZT17b25TYXZlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG4iXSwibmFtZXMiOlsiQWRkTmV3UmVsYXRpb24iLCJiYXNlQ2xhc3MiLCJwYXRoIiwiaGFzTWFueSIsInJlbGF0aW9uVG8iLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGlzcGF0Y2hPcHRpb25zIiwiY29sbGVjdGlvbkNvbmZpZyIsInJlbGF0ZWRDb2xsZWN0aW9ucyIsInVzZVJlbGF0ZWRDb2xsZWN0aW9ucyIsInBlcm1pc3Npb25zIiwidXNlQXV0aCIsInVzZVN0YXRlIiwic2hvdyIsInNldFNob3ciLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJzZXRTZWxlY3RlZENvbGxlY3Rpb24iLCJyZWxhdGVkVG9NYW55IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwic2V0Q29sbGVjdGlvbkNvbmZpZyIsInBvcHVwT3BlbiIsInNldFBvcHVwT3BlbiIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJzaG93VG9vbHRpcCIsInNldFNob3dUb29sdGlwIiwiY29uZmlnIiwidXNlQ29uZmlnIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJjb2xsZWN0aW9uU2x1ZyIsInNsdWciLCJEb2N1bWVudERyYXdlciIsIkRvY3VtZW50RHJhd2VyVG9nZ2xlciIsInRvZ2dsZURyYXdlciIsImlzRHJhd2VyT3BlbiIsIm9uU2F2ZSIsInVzZUNhbGxiYWNrIiwib3BlcmF0aW9uIiwiZG9jIiwibmV3VmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJpZCIsImlzTmV3VmFsdWUiLCJzb21lIiwidiIsInR5cGUiLCJjb2xsZWN0aW9uIiwiZG9jcyIsInNvcnQiLCJvblBvcG9wVG9nZ2xlIiwic3RhdGUiLCJ1c2VFZmZlY3QiLCJjb2xsZWN0aW9ucyIsImNyZWF0ZSIsInBlcm1pc3Npb24iLCJmaW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiRnJhZ21lbnQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwiVG9vbHRpcCIsImxhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbHMiLCJzaW5ndWxhciIsIlBsdXMiLCJQb3B1cCIsImJ1dHRvblR5cGUiLCJob3Jpem9udGFsQWxpZ24iLCJvblRvZ2dsZU9wZW4iLCJidXR0b24iLCJCdXR0b24iLCJidXR0b25TdHlsZSIsInRvb2x0aXAiLCJyZW5kZXIiLCJjbG9zZSIsImNsb3NlUG9wdXAiLCJ1bCIsIm1hcCIsInJlbGF0ZWRDb2xsZWN0aW9uIiwibGkiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBb0JhQTs7O2VBQUFBOzs7NkRBcEJxRDs0QkFDbkM7NkRBQ1o7NERBR0Q7cUNBQ29CO29CQUNkOzJEQUNQOzhCQUNjOzhEQUNYOzhCQUNjO3NCQUNSO1FBSW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELGlCQUFrQztRQUM3Q0UsYUFBQUEsTUFDQUMsZ0JBQUFBLFNBQ0FDLG1CQUFBQSxZQUNBQyxjQUFBQSxPQUNBQyxpQkFBQUEsVUFDQUMsd0JBQUFBO1FBa0JrQkM7SUFoQmxCLElBQU1DLHFCQUFxQkMsSUFBQUEsNENBQXFCLEVBQUNOO0lBQ2pELElBQU0sQUFBRU8sY0FBZ0JDLElBQUFBLGFBQU8sSUFBdkJEO0lBQ1IsSUFBd0JFLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUMsWUFBMUJDLE9BQWlCRCxjQUFYRSxVQUFXRjtJQUN4QixJQUFvREEsOEJBQUFBLElBQUFBLGVBQVEsU0FBckRHLHFCQUE2Q0gsZUFBekJJLHdCQUF5Qko7SUFDcEQsSUFBTUssZ0JBQWdCVCxtQkFBbUJVLE1BQU0sR0FBRztJQUNsRCxJQUFnRE4sOEJBQUFBLElBQUFBLGVBQVEsRUFBNEI7ZUFBTyxDQUFDSyxnQkFBZ0JULGtCQUFrQixDQUFDLEVBQUUsR0FBR1c7WUFBN0haLG1CQUF5Q0ssZUFBdkJRLHNCQUF1QlI7SUFDaEQsSUFBa0NBLDhCQUFBQSxJQUFBQSxlQUFRLEVBQUMsWUFBcENTLFlBQTJCVCxlQUFoQlUsZUFBZ0JWO0lBQ2xDLElBQW9CVyxrQkFBQUEsSUFBQUEsNEJBQWMsRUFBQyxXQUEzQkMsSUFBWUQsZ0JBQVpDLEdBQUdDLE9B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