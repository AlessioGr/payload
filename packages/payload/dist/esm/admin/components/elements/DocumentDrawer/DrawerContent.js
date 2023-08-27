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
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import DefaultEdit from "../../views/collections/Edit/Default";
import X from "../../icons/X";
import buildStateFromSchema from "../../forms/Form/buildStateFromSchema";
import { getTranslation } from "../../../../utilities/getTranslation";
import Button from "../Button";
import { useConfig } from "../../utilities/Config";
import { useLocale } from "../../utilities/Locale";
import { useAuth } from "../../utilities/Auth";
import { DocumentInfoProvider, useDocumentInfo } from "../../utilities/DocumentInfo";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import usePayloadAPI from "../../../hooks/usePayloadAPI";
import formatFields from "../../views/collections/Edit/formatFields";
import { useRelatedCollections } from "../../forms/field-types/Relationship/AddNew/useRelatedCollections";
import IDLabel from "../IDLabel";
import { baseClass } from ".";
var Content = function(param) {
    var collectionSlug = param.collectionSlug, drawerSlug = param.drawerSlug, customHeader = param.customHeader, onSave = param.onSave;
    var _docPermissions_update, _docPermissions, _docPermissions_create, _docPermissions1, _collectionConfig_admin_components_views, _collectionConfig_admin_components, _collectionConfig_admin;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _useModal = useModal(), toggleModal = _useModal.toggleModal, modalState = _useModal.modalState, closeModal = _useModal.closeModal;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useAuth = useAuth(), permissions = _useAuth.permissions, user = _useAuth.user;
    var _useState = _sliced_to_array(useState(), 2), internalState = _useState[0], setInternalState = _useState[1];
    var _useTranslation = useTranslation([
        "fields",
        "general"
    ]), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var hasInitializedState = useRef(false);
    var _useState1 = _sliced_to_array(useState(false), 2), isOpen = _useState1[0], setIsOpen = _useState1[1];
    var _useRelatedCollections = _sliced_to_array(useRelatedCollections(collectionSlug), 1), collectionConfig = _useRelatedCollections[0];
    var _useDocumentInfo = useDocumentInfo(), docPermissions = _useDocumentInfo.docPermissions, id = _useDocumentInfo.id, getDocPreferences = _useDocumentInfo.getDocPreferences;
    var _useState2 = _sliced_to_array(useState(function() {
        return formatFields(collectionConfig, true);
    }), 2), fields = _useState2[0], setFields = _useState2[1];
    // no need to an additional requests when creating new documents
    var initialID = useRef(id);
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI(initialID.current ? "".concat(serverURL).concat(api, "/").concat(collectionSlug, "/").concat(initialID.current) : null, {
        initialParams: {
            "fallback-locale": "null",
            depth: 0,
            draft: "true"
        }
    }), 1), _usePayloadAPI_ = _usePayloadAPI[0], data = _usePayloadAPI_.data, isLoadingDocument = _usePayloadAPI_.isLoading, isError = _usePayloadAPI_.isError;
    useEffect(function() {
        setFields(formatFields(collectionConfig, true));
    }, [
        collectionSlug,
        collectionConfig
    ]);
    useEffect(function() {
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
                                buildStateFromSchema({
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
    useEffect(function() {
        var _modalState_drawerSlug;
        setIsOpen(Boolean((_modalState_drawerSlug = modalState[drawerSlug]) === null || _modalState_drawerSlug === void 0 ? void 0 : _modalState_drawerSlug.isOpen));
    }, [
        modalState,
        drawerSlug
    ]);
    useEffect(function() {
        if (isOpen && !isLoadingDocument && isError) {
            var _data_errors;
            closeModal(drawerSlug);
            toast.error(((_data_errors = data.errors) === null || _data_errors === void 0 ? void 0 : _data_errors[0].message) || t("error:unspecific"));
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
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        DefaultComponent: DefaultEdit,
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
            customHeader: /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__header")
            }, /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__header-content")
            }, /*#__PURE__*/ React.createElement("h2", {
                className: "".concat(baseClass, "__header-text")
            }, !customHeader ? t(!id ? "fields:addNewLabel" : "general:editLabel", {
                label: getTranslation(collectionConfig.labels.singular, i18n)
            }) : customHeader), /*#__PURE__*/ React.createElement(Button, {
                buttonStyle: "none",
                className: "".concat(baseClass, "__header-close"),
                onClick: function() {
                    return toggleModal(drawerSlug);
                },
                "aria-label": t("general:close")
            }, /*#__PURE__*/ React.createElement(X, null))), id && /*#__PURE__*/ React.createElement(IDLabel, {
                id: id.toString()
            }))
        }
    });
};
// First provide the document context using `DocumentInfoProvider`
// this is so we can utilize the `useDocumentInfo` hook in the `Content` component
// this drawer is used for both creating and editing documents
// this means that the `id` may be unknown until the document is created
export var DocumentDrawerContent = function(props) {
    var collectionSlug = props.collectionSlug, idFromProps = props.id, onSaveFromProps = props.onSave;
    var _useRelatedCollections = _sliced_to_array(useRelatedCollections(collectionSlug), 1), collectionConfig = _useRelatedCollections[0];
    var _useState = _sliced_to_array(useState(idFromProps), 2), id = _useState[0], setId = _useState[1];
    var onSave = useCallback(function(args) {
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
    return /*#__PURE__*/ React.createElement(DocumentInfoProvider, {
        collection: collectionConfig,
        id: id
    }, /*#__PURE__*/ React.createElement(Content, _object_spread_props(_object_spread({}, props), {
        onSave: onSave
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyL0RyYXdlckNvbnRlbnQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgRG9jdW1lbnREcmF3ZXJQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IERlZmF1bHRFZGl0IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvRGVmYXVsdCc7XG5pbXBvcnQgWCBmcm9tICcuLi8uLi9pY29ucy9YJztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vdHlwZXMnO1xuaW1wb3J0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyBEb2N1bWVudEluZm9Qcm92aWRlciwgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnO1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSc7XG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvZm9ybWF0RmllbGRzJztcbmltcG9ydCB7IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyB9IGZyb20gJy4uLy4uL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9BZGROZXcvdXNlUmVsYXRlZENvbGxlY3Rpb25zJztcbmltcG9ydCBJRExhYmVsIGZyb20gJy4uL0lETGFiZWwnO1xuaW1wb3J0IHsgYmFzZUNsYXNzIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2F1dGgnO1xuXG5jb25zdCBDb250ZW50OiBSZWFjdC5GQzxEb2N1bWVudERyYXdlclByb3BzPiA9ICh7XG4gIGNvbGxlY3Rpb25TbHVnLFxuICBkcmF3ZXJTbHVnLFxuICBjdXN0b21IZWFkZXIsXG4gIG9uU2F2ZSxcbn0pID0+IHtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdG9nZ2xlTW9kYWwsIG1vZGFsU3RhdGUsIGNsb3NlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgeyBwZXJtaXNzaW9ucywgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbaW50ZXJuYWxTdGF0ZSwgc2V0SW50ZXJuYWxTdGF0ZV0gPSB1c2VTdGF0ZTxGaWVsZHM+KCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oWydmaWVsZHMnLCAnZ2VuZXJhbCddKTtcbiAgY29uc3QgaGFzSW5pdGlhbGl6ZWRTdGF0ZSA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xsZWN0aW9uQ29uZmlnXSA9IHVzZVJlbGF0ZWRDb2xsZWN0aW9ucyhjb2xsZWN0aW9uU2x1Zyk7XG4gIGNvbnN0IHsgZG9jUGVybWlzc2lvbnMsIGlkLCBnZXREb2NQcmVmZXJlbmNlcyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG5cbiAgY29uc3QgW2ZpZWxkcywgc2V0RmllbGRzXSA9IHVzZVN0YXRlKCgpID0+IGZvcm1hdEZpZWxkcyhjb2xsZWN0aW9uQ29uZmlnLCB0cnVlKSk7XG5cbiAgLy8gbm8gbmVlZCB0byBhbiBhZGRpdGlvbmFsIHJlcXVlc3RzIHdoZW4gY3JlYXRpbmcgbmV3IGRvY3VtZW50c1xuICBjb25zdCBpbml0aWFsSUQgPSB1c2VSZWYoaWQpO1xuICBjb25zdCBbeyBkYXRhLCBpc0xvYWRpbmc6IGlzTG9hZGluZ0RvY3VtZW50LCBpc0Vycm9yIH1dID0gdXNlUGF5bG9hZEFQSShcbiAgICAoaW5pdGlhbElELmN1cnJlbnQgPyBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7Y29sbGVjdGlvblNsdWd9LyR7aW5pdGlhbElELmN1cnJlbnR9YCA6IG51bGwpLFxuICAgIHsgaW5pdGlhbFBhcmFtczogeyAnZmFsbGJhY2stbG9jYWxlJzogJ251bGwnLCBkZXB0aDogMCwgZHJhZnQ6ICd0cnVlJyB9IH0sXG4gICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGaWVsZHMoZm9ybWF0RmllbGRzKGNvbGxlY3Rpb25Db25maWcsIHRydWUpKTtcbiAgfSwgW2NvbGxlY3Rpb25TbHVnLCBjb2xsZWN0aW9uQ29uZmlnXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNMb2FkaW5nRG9jdW1lbnQgfHwgaGFzSW5pdGlhbGl6ZWRTdGF0ZS5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXdhaXRJbml0aWFsU3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKCk7XG4gICAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHtcbiAgICAgICAgZmllbGRTY2hlbWE6IGZpZWxkcyxcbiAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHVzZXIsXG4gICAgICAgIG9wZXJhdGlvbjogaWQgPyAndXBkYXRlJyA6ICdjcmVhdGUnLFxuICAgICAgICBpZCxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICB0LFxuICAgICAgfSk7XG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgYXdhaXRJbml0aWFsU3RhdGUoKTtcbiAgICBoYXNJbml0aWFsaXplZFN0YXRlLmN1cnJlbnQgPSB0cnVlO1xuICB9LCBbZGF0YSwgZmllbGRzLCBpZCwgdXNlciwgbG9jYWxlLCBpc0xvYWRpbmdEb2N1bWVudCwgdCwgZ2V0RG9jUHJlZmVyZW5jZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzT3BlbihCb29sZWFuKG1vZGFsU3RhdGVbZHJhd2VyU2x1Z10/LmlzT3BlbikpO1xuICB9LCBbbW9kYWxTdGF0ZSwgZHJhd2VyU2x1Z10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzT3BlbiAmJiAhaXNMb2FkaW5nRG9jdW1lbnQgJiYgaXNFcnJvcikge1xuICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgIHRvYXN0LmVycm9yKGRhdGEuZXJyb3JzPy5bMF0ubWVzc2FnZSB8fCB0KCdlcnJvcjp1bnNwZWNpZmljJykpO1xuICAgIH1cbiAgfSwgW2lzRXJyb3IsIHQsIGlzT3BlbiwgZGF0YSwgZHJhd2VyU2x1ZywgY2xvc2VNb2RhbCwgaXNMb2FkaW5nRG9jdW1lbnRdKTtcblxuICBpZiAoaXNFcnJvcikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgaXNFZGl0aW5nID0gQm9vbGVhbihpZCk7XG4gIGNvbnN0IGFwaVVSTCA9IGlkID8gYCR7c2VydmVyVVJMfSR7YXBpfS8ke2NvbGxlY3Rpb25TbHVnfS8ke2lkfT9sb2NhbGU9JHtsb2NhbGV9YCA6IG51bGw7XG4gIGNvbnN0IGFjdGlvbiA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtjb2xsZWN0aW9uU2x1Z30ke2lkID8gYC8ke2lkfWAgOiAnJ30/bG9jYWxlPSR7bG9jYWxlfSZkZXB0aD0wJmZhbGxiYWNrLWxvY2FsZT1udWxsYDtcbiAgY29uc3QgaGFzU2F2ZVBlcm1pc3Npb24gPSAoaXNFZGl0aW5nICYmIGRvY1Blcm1pc3Npb25zPy51cGRhdGU/LnBlcm1pc3Npb24pIHx8ICghaXNFZGl0aW5nICYmIChkb2NQZXJtaXNzaW9ucyBhcyBDb2xsZWN0aW9uUGVybWlzc2lvbik/LmNyZWF0ZT8ucGVybWlzc2lvbik7XG4gIGNvbnN0IGlzTG9hZGluZyA9ICFpbnRlcm5hbFN0YXRlIHx8ICFkb2NQZXJtaXNzaW9ucyB8fCBpc0xvYWRpbmdEb2N1bWVudDtcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRFZGl0fVxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtjb2xsZWN0aW9uQ29uZmlnLmFkbWluPy5jb21wb25lbnRzPy52aWV3cz8uRWRpdH1cbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIGlzTG9hZGluZyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgaWQsXG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgIHBlcm1pc3Npb25zOiBwZXJtaXNzaW9ucy5jb2xsZWN0aW9uc1tjb2xsZWN0aW9uQ29uZmlnLnNsdWddLFxuICAgICAgICBpc0VkaXRpbmcsXG4gICAgICAgIGFwaVVSTCxcbiAgICAgICAgb25TYXZlLFxuICAgICAgICBpbnRlcm5hbFN0YXRlLFxuICAgICAgICBoYXNTYXZlUGVybWlzc2lvbixcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBkaXNhYmxlRXllYnJvdzogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZUFjdGlvbnM6IHRydWUsXG4gICAgICAgIG1lOiB0cnVlLFxuICAgICAgICBkaXNhYmxlTGVhdmVXaXRob3V0U2F2aW5nOiB0cnVlLFxuICAgICAgICBjdXN0b21IZWFkZXI6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyYH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNvbnRlbnRgfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLXRleHRgfT5cbiAgICAgICAgICAgICAgICB7IWN1c3RvbUhlYWRlciA/IHQoIWlkID8gJ2ZpZWxkczphZGROZXdMYWJlbCcgOiAnZ2VuZXJhbDplZGl0TGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uQ29uZmlnLmxhYmVscy5zaW5ndWxhciwgaTE4bikgfSkgOiBjdXN0b21IZWFkZXJ9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faGVhZGVyLWNsb3NlYH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVNb2RhbChkcmF3ZXJTbHVnKX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdnZW5lcmFsOmNsb3NlJyl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8WCAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lkICYmIChcbiAgICAgICAgICAgICAgPElETGFiZWwgaWQ9e2lkLnRvU3RyaW5nKCl9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gRmlyc3QgcHJvdmlkZSB0aGUgZG9jdW1lbnQgY29udGV4dCB1c2luZyBgRG9jdW1lbnRJbmZvUHJvdmlkZXJgXG4vLyB0aGlzIGlzIHNvIHdlIGNhbiB1dGlsaXplIHRoZSBgdXNlRG9jdW1lbnRJbmZvYCBob29rIGluIHRoZSBgQ29udGVudGAgY29tcG9uZW50XG4vLyB0aGlzIGRyYXdlciBpcyB1c2VkIGZvciBib3RoIGNyZWF0aW5nIGFuZCBlZGl0aW5nIGRvY3VtZW50c1xuLy8gdGhpcyBtZWFucyB0aGF0IHRoZSBgaWRgIG1heSBiZSB1bmtub3duIHVudGlsIHRoZSBkb2N1bWVudCBpcyBjcmVhdGVkXG5leHBvcnQgY29uc3QgRG9jdW1lbnREcmF3ZXJDb250ZW50OiBSZWFjdC5GQzxEb2N1bWVudERyYXdlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb25TbHVnLCBpZDogaWRGcm9tUHJvcHMsIG9uU2F2ZTogb25TYXZlRnJvbVByb3BzIH0gPSBwcm9wcztcbiAgY29uc3QgW2NvbGxlY3Rpb25Db25maWddID0gdXNlUmVsYXRlZENvbGxlY3Rpb25zKGNvbGxlY3Rpb25TbHVnKTtcbiAgY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihpZEZyb21Qcm9wcyk7XG5cbiAgY29uc3Qgb25TYXZlID0gdXNlQ2FsbGJhY2s8RG9jdW1lbnREcmF3ZXJQcm9wc1snb25TYXZlJ10+KChhcmdzKSA9PiB7XG4gICAgc2V0SWQoYXJncy5kb2MuaWQpO1xuXG4gICAgaWYgKHR5cGVvZiBvblNhdmVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uU2F2ZUZyb21Qcm9wcyh7XG4gICAgICAgIC4uLmFyZ3MsXG4gICAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtvblNhdmVGcm9tUHJvcHMsIGNvbGxlY3Rpb25Db25maWddKTtcblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudEluZm9Qcm92aWRlclxuICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbkNvbmZpZ31cbiAgICAgIGlkPXtpZH1cbiAgICA+XG4gICAgICA8Q29udGVudFxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uU2F2ZT17b25TYXZlfVxuICAgICAgLz5cbiAgICA8L0RvY3VtZW50SW5mb1Byb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VNb2RhbCIsInVzZVRyYW5zbGF0aW9uIiwidG9hc3QiLCJEZWZhdWx0RWRpdCIsIlgiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsImdldFRyYW5zbGF0aW9uIiwiQnV0dG9uIiwidXNlQ29uZmlnIiwidXNlTG9jYWxlIiwidXNlQXV0aCIsIkRvY3VtZW50SW5mb1Byb3ZpZGVyIiwidXNlRG9jdW1lbnRJbmZvIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwidXNlUGF5bG9hZEFQSSIsImZvcm1hdEZpZWxkcyIsInVzZVJlbGF0ZWRDb2xsZWN0aW9ucyIsIklETGFiZWwiLCJiYXNlQ2xhc3MiLCJDb250ZW50IiwiY29sbGVjdGlvblNsdWciLCJkcmF3ZXJTbHVnIiwiY3VzdG9tSGVhZGVyIiwib25TYXZlIiwiZG9jUGVybWlzc2lvbnMiLCJjb2xsZWN0aW9uQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwidG9nZ2xlTW9kYWwiLCJtb2RhbFN0YXRlIiwiY2xvc2VNb2RhbCIsImNvZGUiLCJsb2NhbGUiLCJwZXJtaXNzaW9ucyIsInVzZXIiLCJpbnRlcm5hbFN0YXRlIiwic2V0SW50ZXJuYWxTdGF0ZSIsInQiLCJpMThuIiwiaGFzSW5pdGlhbGl6ZWRTdGF0ZSIsImlzT3BlbiIsInNldElzT3BlbiIsImlkIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJmaWVsZHMiLCJzZXRGaWVsZHMiLCJpbml0aWFsSUQiLCJjdXJyZW50IiwiaW5pdGlhbFBhcmFtcyIsImRlcHRoIiwiZHJhZnQiLCJkYXRhIiwiaXNMb2FkaW5nIiwiaXNMb2FkaW5nRG9jdW1lbnQiLCJpc0Vycm9yIiwiYXdhaXRJbml0aWFsU3RhdGUiLCJwcmVmZXJlbmNlcyIsInN0YXRlIiwiZmllbGRTY2hlbWEiLCJvcGVyYXRpb24iLCJCb29sZWFuIiwiZXJyb3IiLCJlcnJvcnMiLCJtZXNzYWdlIiwiaXNFZGl0aW5nIiwiYXBpVVJMIiwiYWN0aW9uIiwiaGFzU2F2ZVBlcm1pc3Npb24iLCJ1cGRhdGUiLCJwZXJtaXNzaW9uIiwiY3JlYXRlIiwiRGVmYXVsdENvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwiRWRpdCIsImNvbXBvbmVudFByb3BzIiwiY29sbGVjdGlvbiIsImNvbGxlY3Rpb25zIiwic2x1ZyIsImRpc2FibGVFeWVicm93IiwiZGlzYWJsZUFjdGlvbnMiLCJtZSIsImRpc2FibGVMZWF2ZVdpdGhvdXRTYXZpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwibGFiZWxzIiwic2luZ3VsYXIiLCJidXR0b25TdHlsZSIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwidG9TdHJpbmciLCJEb2N1bWVudERyYXdlckNvbnRlbnQiLCJwcm9wcyIsImlkRnJvbVByb3BzIiwib25TYXZlRnJvbVByb3BzIiwic2V0SWQiLCJhcmdzIiwiZG9jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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