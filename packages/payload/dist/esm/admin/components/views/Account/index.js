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
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import { useStepNav } from "../../elements/StepNav";
import usePayloadAPI from "../../../hooks/usePayloadAPI";
import { useLocale } from "../../utilities/Locale";
import DefaultAccount from "./Default";
import buildStateFromSchema from "../../forms/Form/buildStateFromSchema";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import { usePreferences } from "../../utilities/Preferences";
var AccountView = function() {
    var _docPermissions_update, _docPermissions, _locationState, _data, _data1;
    var _useLocation = useLocation(), locationState = _useLocation.state;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var setStepNav = useStepNav().setStepNav;
    var user = useAuth().user;
    var userRef = useRef(user);
    var _useState = _sliced_to_array(useState(), 2), internalState = _useState[0], setInternalState = _useState[1];
    var _useDocumentInfo = useDocumentInfo(), id = _useDocumentInfo.id, preferencesKey = _useDocumentInfo.preferencesKey, docPermissions = _useDocumentInfo.docPermissions, getDocPermissions = _useDocumentInfo.getDocPermissions, slug = _useDocumentInfo.slug, getDocPreferences = _useDocumentInfo.getDocPreferences;
    var getPreference = usePreferences().getPreference;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api, collections = _useConfig.collections, _useConfig_admin = _useConfig.admin, tmp = _useConfig_admin.components, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.views, _ref1 = tmp1 === void 0 ? {
        Account: undefined
    } : tmp1, CustomAccount = _ref1.Account;
    var t = useTranslation("authentication").t;
    var collection = collections.find(function(coll) {
        return coll.slug === slug;
    });
    var fields = collection.fields;
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
        initialParams: {
            "fallback-locale": "null",
            depth: 0
        },
        initialData: null
    }), 1), _usePayloadAPI_ = _usePayloadAPI[0], data = _usePayloadAPI_.data, isLoadingData = _usePayloadAPI_.isLoading;
    var hasSavePermission = (_docPermissions = docPermissions) === null || _docPermissions === void 0 ? void 0 : (_docPermissions_update = _docPermissions.update) === null || _docPermissions_update === void 0 ? void 0 : _docPermissions_update.permission;
    var dataToRender = ((_locationState = locationState) === null || _locationState === void 0 ? void 0 : _locationState.data) || data;
    var apiURL = "".concat(serverURL).concat(api, "/").concat(slug, "/").concat((_data = data) === null || _data === void 0 ? void 0 : _data.id, "?locale=").concat(locale);
    var action = "".concat(serverURL).concat(api, "/").concat(slug, "/").concat((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.id, "?locale=").concat(locale, "&depth=0");
    var onSave = React.useCallback(function() {
        var _ref = _async_to_generator(function(json) {
            var preferences, state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        getDocPermissions();
                        return [
                            4,
                            getDocPreferences()
                        ];
                    case 1:
                        preferences = _state.sent();
                        return [
                            4,
                            buildStateFromSchema({
                                fieldSchema: collection.fields,
                                preferences: preferences,
                                data: json.doc,
                                user: user,
                                id: id,
                                operation: "update",
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
        return function(json) {
            return _ref.apply(this, arguments);
        };
    }(), [
        collection,
        user,
        id,
        t,
        locale,
        getDocPermissions,
        getDocPreferences
    ]);
    useEffect(function() {
        var nav = [
            {
                label: t("account")
            }
        ];
        setStepNav(nav);
    }, [
        setStepNav,
        t
    ]);
    useEffect(function() {
        var awaitInternalState = function() {
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
                                    operation: "update",
                                    id: id,
                                    user: userRef.current,
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
                            setInternalState(state);
                            return [
                                2
                            ];
                    }
                });
            });
            return function awaitInternalState() {
                return _ref.apply(this, arguments);
            };
        }();
        if (dataToRender) awaitInternalState();
    }, [
        dataToRender,
        fields,
        id,
        locale,
        preferencesKey,
        getPreference,
        t,
        getDocPreferences
    ]);
    var isLoading = !internalState || !docPermissions || isLoadingData;
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        DefaultComponent: DefaultAccount,
        CustomComponent: CustomAccount,
        componentProps: {
            action: action,
            data: data,
            collection: collection,
            permissions: docPermissions,
            hasSavePermission: hasSavePermission,
            initialState: internalState,
            apiURL: apiURL,
            isLoading: isLoading,
            onSave: onSave
        }
    });
};
export default AccountView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB7IHVzZVN0ZXBOYXYgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9TdGVwTmF2JztcbmltcG9ydCB1c2VQYXlsb2FkQVBJIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVBheWxvYWRBUEknO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgRGVmYXVsdEFjY291bnQgZnJvbSAnLi9EZWZhdWx0JztcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2J1aWxkU3RhdGVGcm9tU2NoZW1hJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnO1xuXG5jb25zdCBBY2NvdW50VmlldzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGU6IGxvY2F0aW9uU3RhdGUgfSA9IHVzZUxvY2F0aW9uPHsgZGF0YTogdW5rbm93biB9PigpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgc2V0U3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgdXNlclJlZiA9IHVzZVJlZih1c2VyKTtcbiAgY29uc3QgW2ludGVybmFsU3RhdGUsIHNldEludGVybmFsU3RhdGVdID0gdXNlU3RhdGU8RmllbGRzPigpO1xuICBjb25zdCB7IGlkLCBwcmVmZXJlbmNlc0tleSwgZG9jUGVybWlzc2lvbnMsIGdldERvY1Blcm1pc3Npb25zLCBzbHVnLCBnZXREb2NQcmVmZXJlbmNlcyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcblxuICBjb25zdCB7XG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgICBjb2xsZWN0aW9ucyxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIEFjY291bnQ6IEN1c3RvbUFjY291bnQsXG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgQWNjb3VudDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSA9IHt9LFxuICAgIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKChjb2xsKSA9PiBjb2xsLnNsdWcgPT09IHNsdWcpO1xuXG4gIGNvbnN0IHsgZmllbGRzIH0gPSBjb2xsZWN0aW9uO1xuXG4gIGNvbnN0IFt7IGRhdGEsIGlzTG9hZGluZzogaXNMb2FkaW5nRGF0YSB9XSA9IHVzZVBheWxvYWRBUEkoXG4gICAgYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9LyR7aWR9YCxcbiAgICB7XG4gICAgICBpbml0aWFsUGFyYW1zOiB7XG4gICAgICAgICdmYWxsYmFjay1sb2NhbGUnOiAnbnVsbCcsXG4gICAgICAgIGRlcHRoOiAwLFxuICAgICAgfSxcbiAgICAgIGluaXRpYWxEYXRhOiBudWxsLFxuICAgIH0sXG4gICk7XG5cbiAgY29uc3QgaGFzU2F2ZVBlcm1pc3Npb24gPSBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuICBjb25zdCBkYXRhVG9SZW5kZXIgPSBsb2NhdGlvblN0YXRlPy5kYXRhIHx8IGRhdGE7XG4gIGNvbnN0IGFwaVVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS8ke2RhdGE/LmlkfT9sb2NhbGU9JHtsb2NhbGV9YDtcblxuICBjb25zdCBhY3Rpb24gPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtkYXRhPy5pZH0/bG9jYWxlPSR7bG9jYWxlfSZkZXB0aD0wYDtcblxuICBjb25zdCBvblNhdmUgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoanNvbjogYW55KSA9PiB7XG4gICAgZ2V0RG9jUGVybWlzc2lvbnMoKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKCk7XG4gICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hOiBjb2xsZWN0aW9uLmZpZWxkcywgcHJlZmVyZW5jZXMsIGRhdGE6IGpzb24uZG9jLCB1c2VyLCBpZCwgb3BlcmF0aW9uOiAndXBkYXRlJywgbG9jYWxlLCB0IH0pO1xuICAgIHNldEludGVybmFsU3RhdGUoc3RhdGUpO1xuICB9LCBbY29sbGVjdGlvbiwgdXNlciwgaWQsIHQsIGxvY2FsZSwgZ2V0RG9jUGVybWlzc2lvbnMsIGdldERvY1ByZWZlcmVuY2VzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBbe1xuICAgICAgbGFiZWw6IHQoJ2FjY291bnQnKSxcbiAgICB9XTtcblxuICAgIHNldFN0ZXBOYXYobmF2KTtcbiAgfSwgW3NldFN0ZXBOYXYsIHRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF3YWl0SW50ZXJuYWxTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcblxuICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7XG4gICAgICAgIGZpZWxkU2NoZW1hOiBmaWVsZHMsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICBkYXRhOiBkYXRhVG9SZW5kZXIsXG4gICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIGlkLFxuICAgICAgICB1c2VyOiB1c2VyUmVmLmN1cnJlbnQsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgdCxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBnZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VzS2V5KTtcbiAgICAgIHNldEludGVybmFsU3RhdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBpZiAoZGF0YVRvUmVuZGVyKSBhd2FpdEludGVybmFsU3RhdGUoKTtcbiAgfSwgW2RhdGFUb1JlbmRlciwgZmllbGRzLCBpZCwgbG9jYWxlLCBwcmVmZXJlbmNlc0tleSwgZ2V0UHJlZmVyZW5jZSwgdCwgZ2V0RG9jUHJlZmVyZW5jZXNdKTtcblxuICBjb25zdCBpc0xvYWRpbmcgPSAhaW50ZXJuYWxTdGF0ZSB8fCAhZG9jUGVybWlzc2lvbnMgfHwgaXNMb2FkaW5nRGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRBY2NvdW50fVxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21BY2NvdW50fVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBwZXJtaXNzaW9uczogZG9jUGVybWlzc2lvbnMsXG4gICAgICAgIGhhc1NhdmVQZXJtaXNzaW9uLFxuICAgICAgICBpbml0aWFsU3RhdGU6IGludGVybmFsU3RhdGUsXG4gICAgICAgIGFwaVVSTCxcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBvblNhdmUsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50VmlldztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlTG9jYXRpb24iLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInVzZUF1dGgiLCJ1c2VTdGVwTmF2IiwidXNlUGF5bG9hZEFQSSIsInVzZUxvY2FsZSIsIkRlZmF1bHRBY2NvdW50IiwiYnVpbGRTdGF0ZUZyb21TY2hlbWEiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJ1c2VEb2N1bWVudEluZm8iLCJ1c2VQcmVmZXJlbmNlcyIsIkFjY291bnRWaWV3IiwiZG9jUGVybWlzc2lvbnMiLCJsb2NhdGlvblN0YXRlIiwiZGF0YSIsInN0YXRlIiwiY29kZSIsImxvY2FsZSIsInNldFN0ZXBOYXYiLCJ1c2VyIiwidXNlclJlZiIsImludGVybmFsU3RhdGUiLCJzZXRJbnRlcm5hbFN0YXRlIiwiaWQiLCJwcmVmZXJlbmNlc0tleSIsImdldERvY1Blcm1pc3Npb25zIiwic2x1ZyIsImdldERvY1ByZWZlcmVuY2VzIiwiZ2V0UHJlZmVyZW5jZSIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImNvbGxlY3Rpb25zIiwiYWRtaW4iLCJjb21wb25lbnRzIiwidmlld3MiLCJBY2NvdW50IiwidW5kZWZpbmVkIiwiQ3VzdG9tQWNjb3VudCIsInQiLCJjb2xsZWN0aW9uIiwiZmluZCIsImNvbGwiLCJmaWVsZHMiLCJpbml0aWFsUGFyYW1zIiwiZGVwdGgiLCJpbml0aWFsRGF0YSIsImlzTG9hZGluZyIsImlzTG9hZGluZ0RhdGEiLCJoYXNTYXZlUGVybWlzc2lvbiIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJkYXRhVG9SZW5kZXIiLCJhcGlVUkwiLCJhY3Rpb24iLCJvblNhdmUiLCJ1c2VDYWxsYmFjayIsImpzb24iLCJwcmVmZXJlbmNlcyIsImZpZWxkU2NoZW1hIiwiZG9jIiwib3BlcmF0aW9uIiwibmF2IiwibGFiZWwiLCJhd2FpdEludGVybmFsU3RhdGUiLCJjdXJyZW50IiwiRGVmYXVsdENvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwicGVybWlzc2lvbnMiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sUUFBUSxRQUFRO0FBQzNELFNBQVNDLFdBQVcsUUFBUSxtQkFBbUI7QUFDL0MsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFDL0MsU0FBU0MsVUFBVSxRQUFRLHlCQUF5QjtBQUNwRCxPQUFPQyxtQkFBbUIsK0JBQStCO0FBQ3pELFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsT0FBT0Msb0JBQW9CLFlBQVk7QUFDdkMsT0FBT0MsMEJBQTBC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