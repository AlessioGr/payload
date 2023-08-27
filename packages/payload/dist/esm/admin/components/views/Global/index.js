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
import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import { useStepNav } from "../../elements/StepNav";
import usePayloadAPI from "../../../hooks/usePayloadAPI";
import { useLocale } from "../../utilities/Locale";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import DefaultGlobal from "./Default";
import buildStateFromSchema from "../../forms/Form/buildStateFromSchema";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import { usePreferences } from "../../utilities/Preferences";
var GlobalView = function(props) {
    var _locationState, _global_versions, _dataToRender;
    var _useLocation = useLocation(), locationState = _useLocation.state;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var setStepNav = useStepNav().setStepNav;
    var user = useAuth().user;
    var _useState = _sliced_to_array(useState(), 2), initialState = _useState[0], setInitialState = _useState[1];
    var _useState1 = _sliced_to_array(useState(), 2), updatedAt = _useState1[0], setUpdatedAt = _useState1[1];
    var _useDocumentInfo = useDocumentInfo(), getVersions = _useDocumentInfo.getVersions, preferencesKey = _useDocumentInfo.preferencesKey, docPermissions = _useDocumentInfo.docPermissions, getDocPermissions = _useDocumentInfo.getDocPermissions, getDocPreferences = _useDocumentInfo.getDocPreferences;
    var getPreference = usePreferences().getPreference;
    var t = useTranslation().t;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var global = props.global;
    var slug = global.slug, label = global.label, fields = global.fields, tmp = global.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.views, _ref2 = tmp2 === void 0 ? {} : tmp2, CustomEdit = _ref2.Edit;
    var onSave = useCallback(function() {
        var _ref = _async_to_generator(function(json) {
            var _json_result, _json, preferences, state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        getVersions();
                        getDocPermissions();
                        setUpdatedAt((_json = json) === null || _json === void 0 ? void 0 : (_json_result = _json.result) === null || _json_result === void 0 ? void 0 : _json_result.updatedAt);
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
                                data: json.result,
                                operation: "update",
                                user: user,
                                locale: locale,
                                t: t
                            })
                        ];
                    case 2:
                        state = _state.sent();
                        setInitialState(state);
                        return [
                            2
                        ];
                }
            });
        });
        return function(json) {
            return _ref.apply(this, arguments);
        };
    }(), [
        getVersions,
        fields,
        user,
        locale,
        t,
        getDocPermissions,
        getDocPreferences
    ]);
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI("".concat(serverURL).concat(api, "/globals/").concat(slug), {
        initialParams: {
            "fallback-locale": "null",
            depth: 0,
            draft: "true"
        },
        initialData: null
    }), 1), _usePayloadAPI_ = _usePayloadAPI[0], data = _usePayloadAPI_.data, isLoadingData = _usePayloadAPI_.isLoading;
    var dataToRender = ((_locationState = locationState) === null || _locationState === void 0 ? void 0 : _locationState.data) || data;
    useEffect(function() {
        var nav = [
            {
                label: label
            }
        ];
        setStepNav(nav);
    }, [
        setStepNav,
        label
    ]);
    useEffect(function() {
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
                                    data: dataToRender,
                                    user: user,
                                    operation: "update",
                                    locale: locale,
                                    t: t
                                })
                            ];
                        case 2:
                            state = _state.sent();
                            return [
                                4,
                                getPreference(preferencesKey)
                            ];
                        case 3:
                            _state.sent();
                            setInitialState(state);
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
        if (dataToRender) awaitInitialState();
    }, [
        dataToRender,
        fields,
        user,
        locale,
        getPreference,
        preferencesKey,
        t,
        getDocPreferences
    ]);
    var isLoading = !initialState || !docPermissions || isLoadingData;
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        DefaultComponent: DefaultGlobal,
        CustomComponent: CustomEdit,
        componentProps: {
            isLoading: isLoading,
            data: dataToRender,
            permissions: docPermissions,
            initialState: initialState,
            global: global,
            onSave: onSave,
            apiURL: "".concat(serverURL).concat(api, "/globals/").concat(slug, "?locale=").concat(locale).concat(((_global_versions = global.versions) === null || _global_versions === void 0 ? void 0 : _global_versions.drafts) ? "&draft=true" : ""),
            action: "".concat(serverURL).concat(api, "/globals/").concat(slug, "?locale=").concat(locale, "&depth=0&fallback-locale=null"),
            updatedAt: updatedAt || ((_dataToRender = dataToRender) === null || _dataToRender === void 0 ? void 0 : _dataToRender.updatedAt)
        }
    });
};
export default GlobalView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0dsb2JhbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvU3RlcE5hdic7XG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcbmltcG9ydCBEZWZhdWx0R2xvYmFsIGZyb20gJy4vRGVmYXVsdCc7XG5pbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9idWlsZFN0YXRlRnJvbVNjaGVtYSc7XG5pbXBvcnQgeyBJbmRleFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnO1xuXG5jb25zdCBHbG9iYWxWaWV3OiBSZWFjdC5GQzxJbmRleFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHN0YXRlOiBsb2NhdGlvblN0YXRlIH0gPSB1c2VMb2NhdGlvbjx7IGRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PigpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgc2V0U3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW2luaXRpYWxTdGF0ZSwgc2V0SW5pdGlhbFN0YXRlXSA9IHVzZVN0YXRlPEZpZWxkcz4oKTtcbiAgY29uc3QgW3VwZGF0ZWRBdCwgc2V0VXBkYXRlZEF0XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgeyBnZXRWZXJzaW9ucywgcHJlZmVyZW5jZXNLZXksIGRvY1Blcm1pc3Npb25zLCBnZXREb2NQZXJtaXNzaW9ucywgZ2V0RG9jUHJlZmVyZW5jZXMgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCB7IGdldFByZWZlcmVuY2UgfSA9IHVzZVByZWZlcmVuY2VzKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCB7XG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczoge1xuICAgICAgYXBpLFxuICAgIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCB7IGdsb2JhbCB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIHNsdWcsXG4gICAgbGFiZWwsXG4gICAgZmllbGRzLFxuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgRWRpdDogQ3VzdG9tRWRpdCxcbiAgICAgICAgfSA9IHt9LFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IGdsb2JhbDtcblxuICBjb25zdCBvblNhdmUgPSB1c2VDYWxsYmFjayhhc3luYyAoanNvbikgPT4ge1xuICAgIGdldFZlcnNpb25zKCk7XG4gICAgZ2V0RG9jUGVybWlzc2lvbnMoKTtcbiAgICBzZXRVcGRhdGVkQXQoanNvbj8ucmVzdWx0Py51cGRhdGVkQXQpO1xuICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHsgZmllbGRTY2hlbWE6IGZpZWxkcywgcHJlZmVyZW5jZXMsIGRhdGE6IGpzb24ucmVzdWx0LCBvcGVyYXRpb246ICd1cGRhdGUnLCB1c2VyLCBsb2NhbGUsIHQgfSk7XG4gICAgc2V0SW5pdGlhbFN0YXRlKHN0YXRlKTtcbiAgfSwgW2dldFZlcnNpb25zLCBmaWVsZHMsIHVzZXIsIGxvY2FsZSwgdCwgZ2V0RG9jUGVybWlzc2lvbnMsIGdldERvY1ByZWZlcmVuY2VzXSk7XG5cbiAgY29uc3QgW3sgZGF0YSwgaXNMb2FkaW5nOiBpc0xvYWRpbmdEYXRhIH1dID0gdXNlUGF5bG9hZEFQSShcbiAgICBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtzbHVnfWAsXG4gICAgeyBpbml0aWFsUGFyYW1zOiB7ICdmYWxsYmFjay1sb2NhbGUnOiAnbnVsbCcsIGRlcHRoOiAwLCBkcmFmdDogJ3RydWUnIH0sIGluaXRpYWxEYXRhOiBudWxsIH0sXG4gICk7XG5cbiAgY29uc3QgZGF0YVRvUmVuZGVyID0gbG9jYXRpb25TdGF0ZT8uZGF0YSB8fCBkYXRhO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gW3tcbiAgICAgIGxhYmVsLFxuICAgIH1dO1xuXG4gICAgc2V0U3RlcE5hdihuYXYpO1xuICB9LCBbc2V0U3RlcE5hdiwgbGFiZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF3YWl0SW5pdGlhbFN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpO1xuICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hOiBmaWVsZHMsIHByZWZlcmVuY2VzLCBkYXRhOiBkYXRhVG9SZW5kZXIsIHVzZXIsIG9wZXJhdGlvbjogJ3VwZGF0ZScsIGxvY2FsZSwgdCB9KTtcbiAgICAgIGF3YWl0IGdldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXkpO1xuICAgICAgc2V0SW5pdGlhbFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgaWYgKGRhdGFUb1JlbmRlcikgYXdhaXRJbml0aWFsU3RhdGUoKTtcbiAgfSwgW2RhdGFUb1JlbmRlciwgZmllbGRzLCB1c2VyLCBsb2NhbGUsIGdldFByZWZlcmVuY2UsIHByZWZlcmVuY2VzS2V5LCB0LCBnZXREb2NQcmVmZXJlbmNlc10pO1xuXG4gIGNvbnN0IGlzTG9hZGluZyA9ICFpbml0aWFsU3RhdGUgfHwgIWRvY1Blcm1pc3Npb25zIHx8IGlzTG9hZGluZ0RhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0R2xvYmFsfVxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21FZGl0fVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBkYXRhOiBkYXRhVG9SZW5kZXIsXG4gICAgICAgIHBlcm1pc3Npb25zOiBkb2NQZXJtaXNzaW9ucyxcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBnbG9iYWwsXG4gICAgICAgIG9uU2F2ZSxcbiAgICAgICAgYXBpVVJMOiBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtzbHVnfT9sb2NhbGU9JHtsb2NhbGV9JHtnbG9iYWwudmVyc2lvbnM/LmRyYWZ0cyA/ICcmZHJhZnQ9dHJ1ZScgOiAnJ31gLFxuICAgICAgICBhY3Rpb246IGAke3NlcnZlclVSTH0ke2FwaX0vZ2xvYmFscy8ke3NsdWd9P2xvY2FsZT0ke2xvY2FsZX0mZGVwdGg9MCZmYWxsYmFjay1sb2NhbGU9bnVsbGAsXG4gICAgICAgIHVwZGF0ZWRBdDogdXBkYXRlZEF0IHx8IGRhdGFUb1JlbmRlcj8udXBkYXRlZEF0LFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFZpZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNhbGxiYWNrIiwidXNlTG9jYXRpb24iLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInVzZUF1dGgiLCJ1c2VTdGVwTmF2IiwidXNlUGF5bG9hZEFQSSIsInVzZUxvY2FsZSIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRHbG9iYWwiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsInVzZURvY3VtZW50SW5mbyIsInVzZVByZWZlcmVuY2VzIiwiR2xvYmFsVmlldyIsInByb3BzIiwibG9jYXRpb25TdGF0ZSIsImdsb2JhbCIsImRhdGFUb1JlbmRlciIsInN0YXRlIiwiY29kZSIsImxvY2FsZSIsInNldFN0ZXBOYXYiLCJ1c2VyIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwidXBkYXRlZEF0Iiwic2V0VXBkYXRlZEF0IiwiZ2V0VmVyc2lvbnMiLCJwcmVmZXJlbmNlc0tleSIsImRvY1Blcm1pc3Npb25zIiwiZ2V0RG9jUGVybWlzc2lvbnMiLCJnZXREb2NQcmVmZXJlbmNlcyIsImdldFByZWZlcmVuY2UiLCJ0Iiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwic2x1ZyIsImxhYmVsIiwiZmllbGRzIiwiYWRtaW4iLCJjb21wb25lbnRzIiwidmlld3MiLCJFZGl0IiwiQ3VzdG9tRWRpdCIsIm9uU2F2ZSIsImpzb24iLCJwcmVmZXJlbmNlcyIsInJlc3VsdCIsImZpZWxkU2NoZW1hIiwiZGF0YSIsIm9wZXJhdGlvbiIsImluaXRpYWxQYXJhbXMiLCJkZXB0aCIsImRyYWZ0IiwiaW5pdGlhbERhdGEiLCJpc0xvYWRpbmciLCJpc0xvYWRpbmdEYXRhIiwibmF2IiwiYXdhaXRJbml0aWFsU3RhdGUiLCJEZWZhdWx0Q29tcG9uZW50IiwiQ3VzdG9tQ29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiLCJwZXJtaXNzaW9ucyIsImFwaVVSTCIsInZlcnNpb25zIiwiZHJhZnRzIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLFFBQVEsUUFBUTtBQUNoRSxTQUFTQyxXQUFXLFFBQVEsbUJBQW1CO0FBQy9DLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxTQUFTQyxPQUFPLFFBQVEsdUJBQXVCO0FBQy9DLFNBQVNDLFVBQVUsUUFBUSx5QkFBeUI7QUFDcEQsT0FBT0MsbUJBQW1CLCtCQUErQjtBQUN6RCxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELE9BQU9DLDJCQUEyQix3Q0FBd0M7QUFDMUUsT0FBT0MsbUJBQW1CLFlBQVk7QUFDdEMsT0FBT0MsMEJBQTBCLHdDQUF3QztBQUV6RSxTQUFTQyxlQUFlLFFBQVEsK0JBQStCO0FBRS9ELFNBQVNDLGNBQWMsUUFBUSw4QkFBOEI7QUFFN0QsSUFBTUMsYUFBbUMsU0FBQ0M7UUErQ25CQyxnQkFrQytDQyxrQkFFdENDO0lBbEY5QixJQUFpQ2hCLGVBQUFBLGVBQXpCaUIs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