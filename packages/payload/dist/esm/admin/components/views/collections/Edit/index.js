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
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Redirect, useRouteMatch, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../utilities/Config";
import { useAuth } from "../../../utilities/Auth";
import usePayloadAPI from "../../../../hooks/usePayloadAPI";
import RenderCustomComponent from "../../../utilities/RenderCustomComponent";
import DefaultEdit from "./Default";
import formatFields from "./formatFields";
import buildStateFromSchema from "../../../forms/Form/buildStateFromSchema";
import { useLocale } from "../../../utilities/Locale";
import { useDocumentInfo } from "../../../utilities/DocumentInfo";
import { EditDepthContext } from "../../../utilities/EditDepth";
var EditView = function(props) {
    var _docPermissions_update, _docPermissions, _docPermissions_create, _docPermissions1, _data;
    var incomingCollection = props.collection, isEditing = props.isEditing;
    var slug = incomingCollection.slug, tmp = incomingCollection.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.views, _ref2 = tmp2 === void 0 ? {} : tmp2, CustomEdit = _ref2.Edit;
    var _useState = _sliced_to_array(useState(function() {
        return formatFields(incomingCollection, isEditing);
    }), 1), fields = _useState[0];
    var _useState1 = _sliced_to_array(useState(function() {
        return _object_spread_props(_object_spread({}, incomingCollection), {
            fields: fields
        });
    }), 1), collection = _useState1[0];
    var _useState2 = _sliced_to_array(useState(), 2), redirect = _useState2[0], setRedirect = _useState2[1];
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, admin = _useConfig_routes.admin, api = _useConfig_routes.api;
    var _useRouteMatch = useRouteMatch(), tmp3 = _useRouteMatch.params, id = (tmp3 === void 0 ? {} : tmp3).id;
    var history = useHistory();
    var _useState3 = _sliced_to_array(useState(), 2), internalState = _useState3[0], setInternalState = _useState3[1];
    var _useState4 = _sliced_to_array(useState(), 2), updatedAt = _useState4[0], setUpdatedAt = _useState4[1];
    var user = useAuth().user;
    var userRef = useRef(user);
    var _useDocumentInfo = useDocumentInfo(), getVersions = _useDocumentInfo.getVersions, getDocPermissions = _useDocumentInfo.getDocPermissions, docPermissions = _useDocumentInfo.docPermissions, getDocPreferences = _useDocumentInfo.getDocPreferences;
    var t = useTranslation("general").t;
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI(isEditing ? "".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id) : null, {
        initialParams: {
            "fallback-locale": "null",
            depth: 0,
            draft: "true"
        },
        initialData: null
    }), 1), _usePayloadAPI_ = _usePayloadAPI[0], data = _usePayloadAPI_.data, isLoadingData = _usePayloadAPI_.isLoading, isError = _usePayloadAPI_.isError;
    var buildState = useCallback(function() {
        var _ref = _async_to_generator(function(doc, overrides) {
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
                            buildStateFromSchema(_object_spread({
                                fieldSchema: overrides.fieldSchema,
                                preferences: preferences,
                                data: doc || {},
                                user: userRef.current,
                                id: id,
                                operation: "update",
                                locale: locale,
                                t: t
                            }, overrides))
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
        return function(doc, overrides) {
            return _ref.apply(this, arguments);
        };
    }(), [
        getDocPreferences,
        id,
        locale,
        t
    ]);
    var onSave = useCallback(function() {
        var _ref = _async_to_generator(function(json) {
            var _json_doc, _json, _json_doc1, _json1;
            return _ts_generator(this, function(_state) {
                getVersions();
                getDocPermissions();
                setUpdatedAt((_json = json) === null || _json === void 0 ? void 0 : (_json_doc = _json.doc) === null || _json_doc === void 0 ? void 0 : _json_doc.updatedAt);
                if (!isEditing) {
                    ;
                    setRedirect("".concat(admin, "/collections/").concat(collection.slug, "/").concat((_json1 = json) === null || _json1 === void 0 ? void 0 : (_json_doc1 = _json1.doc) === null || _json_doc1 === void 0 ? void 0 : _json_doc1.id));
                } else {
                    buildState(json.doc, {
                        fieldSchema: collection.fields
                    });
                }
                return [
                    2
                ];
            });
        });
        return function(json) {
            return _ref.apply(this, arguments);
        };
    }(), [
        admin,
        getVersions,
        isEditing,
        buildState,
        getDocPermissions,
        collection
    ]);
    useEffect(function() {
        if (fields && (isEditing ? data : true)) {
            var awaitInternalState = function() {
                var _ref = _async_to_generator(function() {
                    var _data;
                    return _ts_generator(this, function(_state) {
                        setUpdatedAt((_data = data) === null || _data === void 0 ? void 0 : _data.updatedAt);
                        buildState(data, {
                            operation: isEditing ? "update" : "create",
                            fieldSchema: fields
                        });
                        return [
                            2
                        ];
                    });
                });
                return function awaitInternalState() {
                    return _ref.apply(this, arguments);
                };
            }();
            awaitInternalState();
        }
    }, [
        isEditing,
        data,
        buildState,
        fields
    ]);
    useEffect(function() {
        if (redirect) {
            history.push(redirect);
        }
    }, [
        history,
        redirect
    ]);
    if (isError) {
        return /*#__PURE__*/ React.createElement(Redirect, {
            to: "".concat(admin, "/not-found")
        });
    }
    var apiURL = "".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id, "?locale=").concat(locale).concat(collection.versions.drafts ? "&draft=true" : "");
    var action = "".concat(serverURL).concat(api, "/").concat(slug).concat(isEditing ? "/".concat(id) : "", "?locale=").concat(locale, "&depth=0&fallback-locale=null");
    var hasSavePermission = isEditing && ((_docPermissions = docPermissions) === null || _docPermissions === void 0 ? void 0 : (_docPermissions_update = _docPermissions.update) === null || _docPermissions_update === void 0 ? void 0 : _docPermissions_update.permission) || !isEditing && ((_docPermissions1 = docPermissions) === null || _docPermissions1 === void 0 ? void 0 : (_docPermissions_create = _docPermissions1.create) === null || _docPermissions_create === void 0 ? void 0 : _docPermissions_create.permission);
    var isLoading = !internalState || !docPermissions || isLoadingData;
    return /*#__PURE__*/ React.createElement(EditDepthContext.Provider, {
        value: 1
    }, /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        DefaultComponent: DefaultEdit,
        CustomComponent: CustomEdit,
        componentProps: {
            id: id,
            isLoading: isLoading,
            data: data,
            collection: collection,
            permissions: docPermissions,
            isEditing: isEditing,
            onSave: onSave,
            internalState: internalState,
            hasSavePermission: hasSavePermission,
            apiURL: apiURL,
            action: action,
            updatedAt: updatedAt || ((_data = data) === null || _data === void 0 ? void 0 : _data.updatedAt)
        }
    }));
};
export default EditView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIHVzZVJvdXRlTWF0Y2gsIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJztcblxuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcbmltcG9ydCBEZWZhdWx0RWRpdCBmcm9tICcuL0RlZmF1bHQnO1xuaW1wb3J0IGZvcm1hdEZpZWxkcyBmcm9tICcuL2Zvcm1hdEZpZWxkcyc7XG5pbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi4vLi4vLi4vZm9ybXMvRm9ybS9idWlsZFN0YXRlRnJvbVNjaGVtYSc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IEluZGV4UHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHsgRmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vZm9ybXMvRm9ybS90eXBlcyc7XG5pbXBvcnQgeyBFZGl0RGVwdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0VkaXREZXB0aCc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2F1dGgnO1xuXG5jb25zdCBFZGl0VmlldzogUmVhY3QuRkM8SW5kZXhQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjb2xsZWN0aW9uOiBpbmNvbWluZ0NvbGxlY3Rpb24sIGlzRWRpdGluZyB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIHNsdWcsXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICBFZGl0OiBDdXN0b21FZGl0LFxuICAgICAgICB9ID0ge30sXG4gICAgICB9ID0ge30sXG4gICAgfSA9IHt9LFxuICB9ID0gaW5jb21pbmdDb2xsZWN0aW9uO1xuXG4gIGNvbnN0IFtmaWVsZHNdID0gdXNlU3RhdGUoKCkgPT4gZm9ybWF0RmllbGRzKGluY29taW5nQ29sbGVjdGlvbiwgaXNFZGl0aW5nKSk7XG4gIGNvbnN0IFtjb2xsZWN0aW9uXSA9IHVzZVN0YXRlKCgpID0+ICh7IC4uLmluY29taW5nQ29sbGVjdGlvbiwgZmllbGRzIH0pKTtcbiAgY29uc3QgW3JlZGlyZWN0LCBzZXRSZWRpcmVjdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3QgeyBjb2RlOiBsb2NhbGUgfSA9IHVzZUxvY2FsZSgpO1xuICBjb25zdCB7IHNlcnZlclVSTCwgcm91dGVzOiB7IGFkbWluLCBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgcGFyYW1zOiB7IGlkIH0gPSB7fSB9ID0gdXNlUm91dGVNYXRjaDxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PigpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBbaW50ZXJuYWxTdGF0ZSwgc2V0SW50ZXJuYWxTdGF0ZV0gPSB1c2VTdGF0ZTxGaWVsZHM+KCk7XG4gIGNvbnN0IFt1cGRhdGVkQXQsIHNldFVwZGF0ZWRBdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB1c2VyUmVmID0gdXNlUmVmKHVzZXIpO1xuICBjb25zdCB7IGdldFZlcnNpb25zLCBnZXREb2NQZXJtaXNzaW9ucywgZG9jUGVybWlzc2lvbnMsIGdldERvY1ByZWZlcmVuY2VzIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IFt7IGRhdGEsIGlzTG9hZGluZzogaXNMb2FkaW5nRGF0YSwgaXNFcnJvciB9XSA9IHVzZVBheWxvYWRBUEkoXG4gICAgKGlzRWRpdGluZyA/IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS8ke2lkfWAgOiBudWxsKSxcbiAgICB7IGluaXRpYWxQYXJhbXM6IHsgJ2ZhbGxiYWNrLWxvY2FsZSc6ICdudWxsJywgZGVwdGg6IDAsIGRyYWZ0OiAndHJ1ZScgfSwgaW5pdGlhbERhdGE6IG51bGwgfSxcbiAgKTtcblxuICBjb25zdCBidWlsZFN0YXRlID0gdXNlQ2FsbGJhY2soYXN5bmMgKGRvYywgb3ZlcnJpZGVzPzogUGFydGlhbDxQYXJhbWV0ZXJzPHR5cGVvZiBidWlsZFN0YXRlRnJvbVNjaGVtYT5bMF0+KSA9PiB7XG4gICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpO1xuXG4gICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7XG4gICAgICBmaWVsZFNjaGVtYTogb3ZlcnJpZGVzLmZpZWxkU2NoZW1hLFxuICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICBkYXRhOiBkb2MgfHwge30sXG4gICAgICB1c2VyOiB1c2VyUmVmLmN1cnJlbnQsXG4gICAgICBpZCxcbiAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICBsb2NhbGUsXG4gICAgICB0LFxuICAgICAgLi4ub3ZlcnJpZGVzLFxuICAgIH0pO1xuXG4gICAgc2V0SW50ZXJuYWxTdGF0ZShzdGF0ZSk7XG4gIH0sIFtnZXREb2NQcmVmZXJlbmNlcywgaWQsIGxvY2FsZSwgdF0pO1xuXG4gIGNvbnN0IG9uU2F2ZSA9IHVzZUNhbGxiYWNrKGFzeW5jIChqc29uOiB7XG4gICAgZG9jXG4gIH0pID0+IHtcbiAgICBnZXRWZXJzaW9ucygpO1xuICAgIGdldERvY1Blcm1pc3Npb25zKCk7XG4gICAgc2V0VXBkYXRlZEF0KGpzb24/LmRvYz8udXBkYXRlZEF0KTtcbiAgICBpZiAoIWlzRWRpdGluZykge1xuICAgICAgc2V0UmVkaXJlY3QoYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7Y29sbGVjdGlvbi5zbHVnfS8ke2pzb24/LmRvYz8uaWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1aWxkU3RhdGUoanNvbi5kb2MsIHtcbiAgICAgICAgZmllbGRTY2hlbWE6IGNvbGxlY3Rpb24uZmllbGRzLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbYWRtaW4sIGdldFZlcnNpb25zLCBpc0VkaXRpbmcsIGJ1aWxkU3RhdGUsIGdldERvY1Blcm1pc3Npb25zLCBjb2xsZWN0aW9uXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZmllbGRzICYmIChpc0VkaXRpbmcgPyBkYXRhIDogdHJ1ZSkpIHtcbiAgICAgIGNvbnN0IGF3YWl0SW50ZXJuYWxTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgc2V0VXBkYXRlZEF0KGRhdGE/LnVwZGF0ZWRBdCk7XG4gICAgICAgIGJ1aWxkU3RhdGUoZGF0YSwge1xuICAgICAgICAgIG9wZXJhdGlvbjogaXNFZGl0aW5nID8gJ3VwZGF0ZScgOiAnY3JlYXRlJyxcbiAgICAgICAgICBmaWVsZFNjaGVtYTogZmllbGRzLFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGF3YWl0SW50ZXJuYWxTdGF0ZSgpO1xuICAgIH1cbiAgfSwgW2lzRWRpdGluZywgZGF0YSwgYnVpbGRTdGF0ZSwgZmllbGRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIGhpc3RvcnkucHVzaChyZWRpcmVjdCk7XG4gICAgfVxuICB9LCBbaGlzdG9yeSwgcmVkaXJlY3RdKTtcblxuICBpZiAoaXNFcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVkaXJlY3QgdG89e2Ake2FkbWlufS9ub3QtZm91bmRgfSAvPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBhcGlVUkwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtpZH0/bG9jYWxlPSR7bG9jYWxlfSR7Y29sbGVjdGlvbi52ZXJzaW9ucy5kcmFmdHMgPyAnJmRyYWZ0PXRydWUnIDogJyd9YDtcbiAgY29uc3QgYWN0aW9uID0gYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9JHtpc0VkaXRpbmcgPyBgLyR7aWR9YCA6ICcnfT9sb2NhbGU9JHtsb2NhbGV9JmRlcHRoPTAmZmFsbGJhY2stbG9jYWxlPW51bGxgO1xuICBjb25zdCBoYXNTYXZlUGVybWlzc2lvbiA9IChpc0VkaXRpbmcgJiYgZG9jUGVybWlzc2lvbnM/LnVwZGF0ZT8ucGVybWlzc2lvbikgfHwgKCFpc0VkaXRpbmcgJiYgKGRvY1Blcm1pc3Npb25zIGFzIENvbGxlY3Rpb25QZXJtaXNzaW9uKT8uY3JlYXRlPy5wZXJtaXNzaW9uKTtcbiAgY29uc3QgaXNMb2FkaW5nID0gIWludGVybmFsU3RhdGUgfHwgIWRvY1Blcm1pc3Npb25zIHx8IGlzTG9hZGluZ0RhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8RWRpdERlcHRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17MX0+XG4gICAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRFZGl0fVxuICAgICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbUVkaXR9XG4gICAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICBwZXJtaXNzaW9uczogZG9jUGVybWlzc2lvbnMsXG4gICAgICAgICAgaXNFZGl0aW5nLFxuICAgICAgICAgIG9uU2F2ZSxcbiAgICAgICAgICBpbnRlcm5hbFN0YXRlLFxuICAgICAgICAgIGhhc1NhdmVQZXJtaXNzaW9uLFxuICAgICAgICAgIGFwaVVSTCxcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgdXBkYXRlZEF0OiB1cGRhdGVkQXQgfHwgZGF0YT8udXBkYXRlZEF0LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L0VkaXREZXB0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRWRpdFZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwiUmVkaXJlY3QiLCJ1c2VSb3V0ZU1hdGNoIiwidXNlSGlzdG9yeSIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwidXNlQXV0aCIsInVzZVBheWxvYWRBUEkiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0RWRpdCIsImZvcm1hdEZpZWxkcyIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwidXNlTG9jYWxlIiwidXNlRG9jdW1lbnRJbmZvIiwiRWRpdERlcHRoQ29udGV4dCIsIkVkaXRWaWV3IiwicHJvcHMiLCJkb2NQZXJtaXNzaW9ucyIsImRhdGEiLCJjb2xsZWN0aW9uIiwiaW5jb21pbmdDb2xsZWN0aW9uIiwiaXNFZGl0aW5nIiwic2x1ZyIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwiRWRpdCIsIkN1c3RvbUVkaXQiLCJmaWVsZHMiLCJyZWRpcmVjdCIsInNldFJlZGlyZWN0IiwiY29kZSIsImxvY2FsZSIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInBhcmFtcyIsImlkIiwiaGlzdG9yeSIsImludGVybmFsU3RhdGUiLCJzZXRJbnRlcm5hbFN0YXRlIiwidXBkYXRlZEF0Iiwic2V0VXBkYXRlZEF0IiwidXNlciIsInVzZXJSZWYiLCJnZXRWZXJzaW9ucyIsImdldERvY1Blcm1pc3Npb25zIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJ0IiwiaW5pdGlhbFBhcmFtcyIsImRlcHRoIiwiZHJhZnQiLCJpbml0aWFsRGF0YSIsImlzTG9hZGluZyIsImlzTG9hZGluZ0RhdGEiLCJpc0Vycm9yIiwiYnVpbGRTdGF0ZSIsImRvYyIsIm92ZXJyaWRlcyIsInByZWZlcmVuY2VzIiwic3RhdGUiLCJmaWVsZFNjaGVtYSIsImN1cnJlbnQiLCJvcGVyYXRpb24iLCJvblNhdmUiLCJqc29uIiwiYXdhaXRJbnRlcm5hbFN0YXRlIiwicHVzaCIsInRvIiwiYXBpVVJMIiwidmVyc2lvbnMiLCJkcmFmdHMiLCJhY3Rpb24iLCJoYXNTYXZlUGVybWlzc2lvbiIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJjcmVhdGUiLCJQcm92aWRlciIsInZhbHVlIiwiRGVmYXVsdENvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwicGVybWlzc2lvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFFBQVEsRUFBRUMsU0FB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