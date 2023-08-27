"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DocumentDrawerContent", {
    enumerable: true,
    get: function() {
        return DocumentDrawerContent;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _reacttoastify = require("react-toastify");
var _Default = /*#__PURE__*/ _interop_require_default(require("../../views/collections/Edit/Default"));
var _X = /*#__PURE__*/ _interop_require_default(require("../../icons/X"));
var _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/buildStateFromSchema"));
var _getTranslation = require("../../../../utilities/getTranslation");
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _Config = require("../../utilities/Config");
var _Locale = require("../../utilities/Locale");
var _Auth = require("../../utilities/Auth");
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../hooks/usePayloadAPI"));
var _formatFields = /*#__PURE__*/ _interop_require_default(require("../../views/collections/Edit/formatFields"));
var _useRelatedCollections = require("../../forms/field-types/Relationship/AddNew/useRelatedCollections");
var _IDLabel = /*#__PURE__*/ _interop_require_default(require("../IDLabel"));
var _ = require(".");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var Content = function(param) {
    var collectionSlug = param.collectionSlug, drawerSlug = param.drawerSlug, customHeader = param.customHeader, onSave = param.onSave;
    var _docPermissions_update, _docPermissions, _docPermissions_create, _docPermissions1, _collectionConfig_admin_components_views, _collectionConfig_admin_components, _collectionConfig_admin;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _useModal = (0, _modal.useModal)(), toggleModal = _useModal.toggleModal, modalState = _useModal.modalState, closeModal = _useModal.closeModal;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var _useAuth = (0, _Auth.useAuth)(), permissions = _useAuth.permissions, user = _useAuth.user;
    var _useState = _sliced_to_array((0, _react.useState)(), 2), internalState = _useState[0], setInternalState = _useState[1];
    var _useTranslation = (0, _reacti18next.useTranslation)([
        "fields",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var hasInitializedState = (0, _react.useRef)(false);
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), isOpen = _useState1[0], setIsOpen = _useState1[1];
    var _useRelatedCollections1 = _sliced_to_array((0, _useRelatedCollections.useRelatedCollections)(collectionSlug), 1), collectionConfig = _useRelatedCollections1[0];
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), docPermissions = _useDocumentInfo.docPermissions, id = _useDocumentInfo.id, getDocPreferences = _useDocumentInfo.getDocPreferences;
    var _useState2 = _sliced_to_array((0, _react.useState)(function() {
        return (0, _formatFields.default)(collectionConfig, true);
    }), 2), fields = _useState2[0], setFields = _useState2[1];
    // no need to an additional requests when creating new documents
    var initialID = (0, _react.useRef)(id);
    var _usePayloadAPI1 = _sliced_to_array((0, _usePayloadAPI.default)(initialID.current ? "".concat(serverURL).concat(api, "/").concat(collectionSlug, "/").concat(initialID.current) : null, {
        initialParams: {
            "fallback-locale": "null",
            depth: 0,
            draft: "true"
        }
    }), 1), _usePayloadAPI_ = _usePayloadAPI1[0], data = _usePayloadAPI_.data, isLoadingDocument = _usePayloadAPI_.isLoading, isError = _usePayloadAPI_.isError;
    (0, _react.useEffect)(function() {
        setFields((0, _formatFields.default)(collectionConfig, true));
    }, [
        collectionSlug,
        collectionConfig
    ]);
    (0, _react.useEffect)(function() {
        if (isLoadingDocument || hasInitializedState.current) {
            return;
        }
        var awaitInitialState = function() {
            var _ref = _async_to_generator(function() {
                var preferences, state;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getDocPreferences()
                            ];
                        case 1:
                            preferences = _state.sent();
                            return [
                                4,
                                (0, _buildStateFromSchema.default)({
                                    fieldSchema: fields,
                                    preferences: preferences,
                                    data: data,
                                    user: user,
                                    operation: id ? "update" : "create",
                                    id: id,
                                    locale: locale,
                                    t: t
                                })
                            ];
                        case 2:
                            state = _state.sent();
                            setInternalState(state);
                            return [
                                2
                            ];
                    }
                });
            });
            return function awaitInitialState() {
                return _ref.apply(this, arguments);
            };
        }();
        awaitInitialState();
        hasInitializedState.current = true;
    }, [
        data,
        fields,
        id,
        user,
        locale,
        isLoadingDocument,
        t,
        getDocPreferences
    ]);
    (0, _react.useEffect)(function() {
        var _modalState_drawerSlug;
        setIsOpen(Boolean((_modalState_drawerSlug = modalState[drawerSlug]) === null || _modalState_drawerSlug === void 0 ? void 0 : _modalState_drawerSlug.isOpen));
    }, [
        modalState,
        drawerSlug
    ]);
    (0, _react.useEffect)(function() {
        if (isOpen && !isLoadingDocument && isError) {
            var _data_errors;
            closeModal(drawerSlug);
            _reacttoastify.toast.error(((_data_errors = data.errors) === null || _data_errors === void 0 ? void 0 : _data_errors[0].message) || t("error:unspecific"));
        }
    }, [
        isError,
        t,
        isOpen,
        data,
        drawerSlug,
        closeModal,
        isLoadingDocument
    ]);
    if (isError) return null;
    var isEditing = Boolean(id);
    var apiURL = id ? "".concat(serverURL).concat(api, "/").concat(collectionSlug, "/").concat(id, "?locale=").concat(locale) : null;
    var action = "".concat(serverURL).concat(api, "/").concat(collectionSlug).concat(id ? "/".concat(id) : "", "?locale=").concat(locale, "&depth=0&fallback-locale=null");
    var hasSavePermission = isEditing && ((_docPermissions = docPermissions) === null || _docPermissions === void 0 ? void 0 : (_docPermissions_update = _docPermissions.update) === null || _docPermissions_update === void 0 ? void 0 : _docPermissions_update.permission) || !isEditing && ((_docPermissions1 = docPermissions) === null || _docPermissions1 === void 0 ? void 0 : (_docPermissions_create = _docPermissions1.create) === null || _docPermissions_create === void 0 ? void 0 : _docPermissions_create.permission);
    var isLoading = !internalState || !docPermissions || isLoadingDocument;
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        DefaultComponent: _Default.default,
        CustomComponent: (_collectionConfig_admin = collectionConfig.admin) === null || _collectionConfig_admin === void 0 ? void 0 : (_collectionConfig_admin_components = _collectionConfig_admin.components) === null || _collectionConfig_admin_components === void 0 ? void 0 : (_collectionConfig_admin_components_views = _collectionConfig_admin_components.views) === null || _collectionConfig_admin_components_views === void 0 ? void 0 : _collectionConfig_admin_components_views.Edit,
        componentProps: {
            isLoading: isLoading,
            data: data,
            id: id,
            collection: collectionConfig,
            permissions: permissions.collections[collectionConfig.slug],
            isEditing: isEditing,
            apiURL: apiURL,
            onSave: onSave,
            internalState: internalState,
            hasSavePermission: hasSavePermission,
            action: action,
            disableEyebrow: true,
            disableActions: true,
            me: true,
            disableLeaveWithoutSaving: true,
            customHeader: /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(_.baseClass, "__header")
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(_.baseClass, "__header-content")
            }, /*#__PURE__*/ _react.default.createElement("h2", {
                className: "".concat(_.baseClass, "__header-text")
            }, !customHeader ? t(!id ? "fields:addNewLabel" : "general:editLabel", {
                label: (0, _getTranslation.getTranslation)(collectionConfig.labels.singular, i18n)
            }) : customHeader), /*#__PURE__*/ _react.default.createElement(_Button.default, {
                buttonStyle: "none",
                className: "".concat(_.baseClass, "__header-close"),
                onClick: function() {
                    return toggleModal(drawerSlug);
                },
                "aria-label": t("general:close")
            }, /*#__PURE__*/ _react.default.createElement(_X.default, null))), id && /*#__PURE__*/ _react.default.createElement(_IDLabel.default, {
                id: id.toString()
            }))
        }
    });
};
var DocumentDrawerContent = function(props) {
    var collectionSlug = props.collectionSlug, idFromProps = props.id, onSaveFromProps = props.onSave;
    var _useRelatedCollections1 = _sliced_to_array((0, _useRelatedCollections.useRelatedCollections)(collectionSlug), 1), collectionConfig = _useRelatedCollections1[0];
    var _useState = _sliced_to_array((0, _react.useState)(idFromProps), 2), id = _useState[0], setId = _useState[1];
    var onSave = (0, _react.useCallback)(function(args) {
        setId(args.doc.id);
        if (typeof onSaveFromProps === "function") {
            onSaveFromProps(_object_spread_props(_object_spread({}, args), {
                collectionConfig: collectionConfig
            }));
        }
    }, [
        onSaveFromProps,
        collectionConfig
    ]);
    return /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
        collection: collectionConfig,
        id: id
    }, /*#__PURE__*/ _react.default.createElement(Content, _object_spread_props(_object_spread({}, props), {
        onSave: onSave
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyL0RyYXdlckNvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgRG9jdW1lbnREcmF3ZXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IERlZmF1bHRFZGl0IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvRGVmYXVsdCc7XG5pbXBvcnQgWCBmcm9tICcuLi8uLi9pY29ucy9YJztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vdHlwZXMnO1xuaW1wb3J0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyBEb2N1bWVudEluZm9Qcm92aWRlciwgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnO1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSc7XG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvZm9ybWF0RmllbGRzJztcbmltcG9ydCB7IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvdXNlUmVsYXRlZENvbGxlY3Rpb25zJztcbmltcG9ydCBJRExhYmVsIGZyb20gJy4uL0lETGFiZWwnO1xuaW1wb3J0IHsgYmFzZUNsYXNzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2F1dGgnO1xuXG5jb25zdCBDb250ZW50OiBSZWFjdC5GQzxEb2N1bWVudERyYXdlclByb3BzPiA9ICh7XG4gIGNvbGxlY3Rpb25TbHVnLFxuICBkcmF3ZXJTbHVnLFxuICBjdXN0b21IZWFkZXIsXG4gIG9uU2F2ZSxcbn0pID0+IHtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdG9nZ2xlTW9kYWwsIG1vZGFsU3RhdGUsIGNsb3NlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucywgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbaW50ZXJuYWxTdGF0ZSwgc2V0SW50ZXJuYWxTdGF0ZV0gPSB1c2VTdGF0ZTxGaWVsZHM+KCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oWydmaWVsZHMnLCAnZ2VuZXJhbCddKTtcbiAgY29uc3QgaGFzSW5pdGlhbGl6ZWRTdGF0ZSA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xsZWN0aW9uQ29uZmlnXSA9IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyhjb2xsZWN0aW9uU2x1Zyk7XG4gIGNvbnN0IHsgZG9jUGVybWlzc2lvbnMsIGlkLCBnZXREb2NQcmVmZXJlbmNlcyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG5cbiAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKCgpID0+IGZvcm1hdEZpZWxkcyhjb2xsZWN0aW9uQ29uZmlnLCB0cnVlKSk7XG5cbiAgLy8gbm8gbmVlZCB0byBhbiBhZGRpdGlvbmFsIHJlcXVlc3RzIHdoZW4gY3JlYXRpbmcgbmV3IGRvY3VtZW50c1xuICBjb25zdCBpbml0aWFsSUQgPSB1c2VSZWYoaWQpO1xuICBjb25zdCBbeyBkYXRhLCBpc0xvYWRpbmc6IGlzTG9hZGluZ0RvY3VtZW50LCBpc0Vycm9yIH1dID0gdXNlUGF5bG9hZEFQSShcbiAgICAoaW5pdGlhbElELmN1cnJlbnQgPyBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7Y29sbGVjdGlvblNsdWd9LyR7aW5pdGlhbElELmN1cnJlbnR9YCA6IG51bGwpLFxuICAgIHsgaW5pdGlhbFBhcmFtczogeyAnZmFsbGJhY2stbG9jYWxlJzogJ251bGwnLCBkZXB0aDogMCwgZHJhZnQ6ICd0cnVlJyB9IH0sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWVsZHMoZm9ybWF0RmllbGRzKGNvbGxlY3Rpb25Db25maWcsIHRydWUpKTtcbiAgfSwgW2NvbGxlY3Rpb25TbHVnLCBjb2xsZWN0aW9uQ29uZmlnXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNMb2FkaW5nRG9jdW1lbnQgfHwgaGFzSW5pdGlhbGl6ZWRTdGF0ZS5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXdhaXRJbml0aWFsU3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKCk7XG4gICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHtcbiAgICAgICAgZmllbGRTY2hlbWE6IGZpZWxkcyxcbiAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIG9wZXJhdGlvbjogaWQgPyAndXBkYXRlJyA6ICdjcmVhdGUnLFxuICAgICAgICBpZCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICB0LFxuICAgICAgfSk7XG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgYXdhaXRJbml0aWFsU3RhdGUoKTtcbiAgICBoYXNJbml0aWFsaXplZFN0YXRlLmN1cnJlbnQgPSB0cnVlO1xuICB9LCBbZGF0YSwgZmllbGRzLCBpZCwgdXNlciwgbG9jYWxlLCBpc0xvYWRpbmdEb2N1bWVudCwgdCwgZ2V0RG9jUHJlZmVyZW5jZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihCb29sZWFuKG1vZGFsU3RhdGVbZHJhd2VyU2x1Z10/LmlzT3BlbikpO1xuICB9LCBbbW9kYWxTdGF0ZSwgZHJhd2VyU2x1Z10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3BlbiAmJiAhaXNMb2FkaW5nRG9jdW1lbnQgJiYgaXNFcnJvcikge1xuICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgIHRvYXN0LmVycm9yKGRhdGEuZXJyb3JzPy5bMF0ubWVzc2FnZSB8fCB0KCdlcnJvcjp1bnNwZWNpZmljJykpO1xuICAgIH1cbiAgfSwgW2lzRXJyb3IsIHQsIGlzT3BlbiwgZGF0YSwgZHJhd2VyU2x1ZywgY2xvc2VNb2RhbCwgaXNMb2FkaW5nRG9jdW1lbnRdKTtcblxuICBpZiAoaXNFcnJvcikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgaXNFZGl0aW5nID0gQm9vbGVhbihpZCk7XG4gIGNvbnN0IGFwaVVSTCA9IGlkID8gYCR7c2VydmVyVVJMfSR7YXBpfS8ke2NvbGxlY3Rpb25TbHVnfS8ke2lkfT9sb2NhbGU9JHtsb2NhbGV9YCA6IG51bGw7XG4gIGNvbnN0IGFjdGlvbiA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtjb2xsZWN0aW9uU2x1Z30ke2lkID8gYC8ke2lkfWAgOiAnJ30/bG9jYWxlPSR7bG9jYWxlfSZkZXB0aD0wJmZhbGxiYWNrLWxvY2FsZT1udWxsYDtcbiAgY29uc3QgaGFzU2F2ZVBlcm1pc3Npb24gPSAoaXNFZGl0aW5nICYmIGRvY1Blcm1pc3Npb25zPy51cGRhdGU/LnBlcm1pc3Npb24pIHx8ICghaXNFZGl0aW5nICYmIChkb2NQZXJtaXNzaW9ucyBhcyBDb2xsZWN0aW9uUGVybWlzc2lvbik/LmNyZWF0ZT8ucGVybWlzc2lvbik7XG4gIGNvbnN0IGlzTG9hZGluZyA9ICFpbnRlcm5hbFN0YXRlIHx8ICFkb2NQZXJtaXNzaW9ucyB8fCBpc0xvYWRpbmdEb2N1bWVudDtcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRFZGl0fVxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uQ29uZmlnLmFkbWluPy5jb21wb25lbnRzPy52aWV3cz8uRWRpdH1cbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgIHBlcm1pc3Npb25zOiBwZXJtaXNzaW9ucy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uQ29uZmlnLnNsdWddLFxuICAgICAgICBpc0VkaXRpbmcsXG4gICAgICAgIGFwaVVSTCxcbiAgICAgICAgb25TYXZlLFxuICAgICAgICBpbnRlcm5hbFN0YXRlLFxuICAgICAgICBoYXNTYXZlUGVybWlzc2lvbixcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBkaXNhYmxlRXllYnJvdzogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZUFjdGlvbnM6IHRydWUsXG4gICAgICAgIG1lOiB0cnVlLFxuICAgICAgICBkaXNhYmxlTGVhdmVXaXRob3V0U2F2aW5nOiB0cnVlLFxuICAgICAgICBjdXN0b21IZWFkZXI6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLXRleHRgfT5cbiAgICAgICAgICAgICAgICB7IWN1c3RvbUhlYWRlciA/IHQoIWlkID8gJ2ZpZWxkczphZGROZXdMYWJlbCcgOiAnZ2VuZXJhbDplZGl0TGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uQ29uZmlnLmxhYmVscy5zaW5ndWxhciwgaTE4bikgfSkgOiBjdXN0b21IZWFkZXJ9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNsb3NlYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVNb2RhbChkcmF3ZXJTbHVnKX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdnZW5lcmFsOmNsb3NlJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8WCAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lkICYmIChcbiAgICAgICAgICAgICAgPElETGFiZWwgaWQ9e2lkLnRvU3RyaW5nKCl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gRmlyc3QgcHJvdmlkZSB0aGUgZG9jdW1lbnQgY29udGV4dCB1c2luZyBgRG9jdW1lbnRJbmZvUHJvdmlkZXJgXG4vLyB0aGlzIGlzIHNvIHdlIGNhbiB1dGlsaXplIHRoZSBgdXNlRG9jdW1lbnRJbmZvYCBob29rIGluIHRoZSBgQ29udGVudGAgY29tcG9uZW50XG4vLyB0aGlzIGRyYXdlciBpcyB1c2VkIGZvciBib3RoIGNyZWF0aW5nIGFuZCBlZGl0aW5nIGRvY3VtZW50c1xuLy8gdGhpcyBtZWFucyB0aGF0IHRoZSBgaWRgIG1heSBiZSB1bmtub3duIHVudGlsIHRoZSBkb2N1bWVudCBpcyBjcmVhdGVkXG5leHBvcnQgY29uc3QgRG9jdW1lbnREcmF3ZXJDb250ZW50OiBSZWFjdC5GQzxEb2N1bWVudERyYXdlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb25TbHVnLCBpZDogaWRGcm9tUHJvcHMsIG9uU2F2ZTogb25TYXZlRnJvbVByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgW2NvbGxlY3Rpb25Db25maWddID0gdXNlUmVsYXRlZENvbGxlY3Rpb25zKGNvbGxlY3Rpb25TbHVnKTtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihpZEZyb21Qcm9wcyk7XG5cbiAgY29uc3Qgb25TYXZlID0gdXNlQ2FsbGJhY2s8RG9jdW1lbnREcmF3ZXJQcm9wc1snb25TYXZlJ10+KChhcmdzKSA9PiB7XG4gICAgc2V0SWQoYXJncy5kb2MuaWQpO1xuXG4gICAgaWYgKHR5cGVvZiBvblNhdmVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uU2F2ZUZyb21Qcm9wcyh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtvblNhdmVGcm9tUHJvcHMsIGNvbGxlY3Rpb25Db25maWddKTtcblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudEluZm9Qcm92aWRlclxuICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbkNvbmZpZ31cbiAgICAgIGlkPXtpZH1cbiAgICA+XG4gICAgICA8Q29udGVudFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uU2F2ZT17b25TYXZlfVxuICAgICAgLz5cbiAgICA8L0RvY3VtZW50SW5mb1Byb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJEb2N1bWVudERyYXdlckNvbnRlbnQiLCJDb250ZW50IiwiY29sbGVjdGlvblNsdWciLCJkcmF3ZXJTbHVnIiwiY3VzdG9tSGVhZGVyIiwib25TYXZlIiwiZG9jUGVybWlzc2lvbnMiLCJjb2xsZWN0aW9uQ29uZmlnIiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwidXNlTW9kYWwiLCJ0b2dnbGVNb2RhbCIsIm1vZGFsU3RhdGUiLCJjbG9zZU1vZGFsIiwidXNlTG9jYWxlIiwiY29kZSIsImxvY2FsZSIsInVzZUF1dGgiLCJwZXJtaXNzaW9ucyIsInVzZXIiLCJ1c2VTdGF0ZSIsImludGVybmFsU3RhdGUiLCJzZXRJbnRlcm5hbFN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImhhc0luaXRpYWxpemVkU3RhdGUiLCJ1c2VSZWYiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VSZWxhdGVkQ29sbGVjdGlvbnMiLCJ1c2VEb2N1bWVudEluZm8iLCJpZCIsImdldERvY1ByZWZlcmVuY2VzIiwiZm9ybWF0RmllbGRzIiwiZmllbGRzIiwic2V0RmllbGRzIiwiaW5pdGlhbElEIiwidXNlUGF5bG9hZEFQSSIsImN1cnJlbnQiLCJpbml0aWFsUGFyYW1zIiwiZGVwdGgiLCJkcmFmdCIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0xvYWRpbmdEb2N1bWVudCIsImlzRXJyb3IiLCJ1c2VFZmZlY3QiLCJhd2FpdEluaXRpYWxTdGF0ZSIsInByZWZlcmVuY2VzIiwic3RhdGUiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsImZpZWxkU2NoZW1hIiwib3BlcmF0aW9uIiwiQm9vbGVhbiIsInRvYXN0IiwiZXJyb3IiLCJlcnJvcnMiLCJtZXNzYWdlIiwiaXNFZGl0aW5nIiwiYXBpVVJMIiwiYWN0aW9uIiwiaGFzU2F2ZVBlcm1pc3Npb24iLCJ1cGRhdGUiLCJwZXJtaXNzaW9uIiwiY3JlYXRlIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCIsIkRlZmF1bHRFZGl0IiwiQ3VzdG9tQ29tcG9uZW50IiwiYWRtaW4iLCJjb21wb25lbnRzIiwidmlld3MiLCJFZGl0IiwiY29tcG9uZW50UHJvcHMiLCJjb2xsZWN0aW9uIiwiY29sbGVjdGlvbnMiLCJzbHVnIiwiZGlzYWJsZUV5ZWJyb3ciLCJkaXNhYmxlQWN0aW9ucyIsIm1lIiwiZGlzYWJsZUxlYXZlV2l0aG91dFNhdmluZyIsImRpdiIsImNsYXNzTmFtZSIsImJhc2VDbGFzcyIsImgyIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCIsIlgiLCJJRExhYmVsIiwidG9TdHJpbmciLCJwcm9wcyIsImlkRnJvbVByb3BzIiwib25TYXZlRnJvbVByb3BzIiwic2V0SWQiLCJ1c2VDYWxsYmFjayIsImFyZ3MiLCJkb2MiLCJEb2N1bWVudEluZm9Qcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFpSmFBOzs7ZUFBQUE7Ozs2REFqSm1EO3FCQUN2Qzs0QkFDTTs2QkFDVDs4REFFRTt3REFDVjsyRUFFbUI7OEJB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