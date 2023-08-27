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
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _StepNav = require("../../elements/StepNav");
var _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../hooks/usePayloadAPI"));
var _Locale = require("../../utilities/Locale");
var _Default = /*#__PURE__*/ _interop_require_default(require("./Default"));
var _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/buildStateFromSchema"));
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _Preferences = require("../../utilities/Preferences");
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
var AccountView = function() {
    var _docPermissions_update, _docPermissions, _locationState, _data, _data1;
    var _useLocation = (0, _reactrouterdom.useLocation)(), locationState = _useLocation.state;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var setStepNav = (0, _StepNav.useStepNav)().setStepNav;
    var user = (0, _Auth.useAuth)().user;
    var userRef = (0, _react.useRef)(user);
    var _useState = _sliced_to_array((0, _react.useState)(), 2), internalState = _useState[0], setInternalState = _useState[1];
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), id = _useDocumentInfo.id, preferencesKey = _useDocumentInfo.preferencesKey, docPermissions = _useDocumentInfo.docPermissions, getDocPermissions = _useDocumentInfo.getDocPermissions, slug = _useDocumentInfo.slug, getDocPreferences = _useDocumentInfo.getDocPreferences;
    var getPreference = (0, _Preferences.usePreferences)().getPreference;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api, collections = _useConfig.collections, _useConfig_admin = _useConfig.admin, tmp = _useConfig_admin.components, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.views, _ref1 = tmp1 === void 0 ? {
        Account: undefined
    } : tmp1, CustomAccount = _ref1.Account;
    var t = (0, _reacti18next.useTranslation)("authentication").t;
    var collection = collections.find(function(coll) {
        return coll.slug === slug;
    });
    var fields = collection.fields;
    var _usePayloadAPI1 = _sliced_to_array((0, _usePayloadAPI.default)("".concat(serverURL).concat(api, "/").concat(slug, "/").concat(id), {
        initialParams: {
            "fallback-locale": "null",
            depth: 0
        },
        initialData: null
    }), 1), _usePayloadAPI_ = _usePayloadAPI1[0], data = _usePayloadAPI_.data, isLoadingData = _usePayloadAPI_.isLoading;
    var hasSavePermission = (_docPermissions = docPermissions) === null || _docPermissions === void 0 ? void 0 : (_docPermissions_update = _docPermissions.update) === null || _docPermissions_update === void 0 ? void 0 : _docPermissions_update.permission;
    var dataToRender = ((_locationState = locationState) === null || _locationState === void 0 ? void 0 : _locationState.data) || data;
    var apiURL = "".concat(serverURL).concat(api, "/").concat(slug, "/").concat((_data = data) === null || _data === void 0 ? void 0 : _data.id, "?locale=").concat(locale);
    var action = "".concat(serverURL).concat(api, "/").concat(slug, "/").concat((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.id, "?locale=").concat(locale, "&depth=0");
    var onSave = _react.default.useCallback(function() {
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
                            (0, _buildStateFromSchema.default)({
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
    (0, _react.useEffect)(function() {
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
    (0, _react.useEffect)(function() {
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
                                (0, _buildStateFromSchema.default)({
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
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        DefaultComponent: _Default.default,
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
var _default = AccountView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0FjY291bnQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB7IHVzZVN0ZXBOYXYgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9TdGVwTmF2JztcbmltcG9ydCB1c2VQYXlsb2FkQVBJIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVBheWxvYWRBUEknO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgRGVmYXVsdEFjY291bnQgZnJvbSAnLi9EZWZhdWx0JztcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2J1aWxkU3RhdGVGcm9tU2NoZW1hJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnO1xuXG5jb25zdCBBY2NvdW50VmlldzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc3RhdGU6IGxvY2F0aW9uU3RhdGUgfSA9IHVzZUxvY2F0aW9uPHsgZGF0YTogdW5rbm93biB9PigpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgc2V0U3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgdXNlclJlZiA9IHVzZVJlZih1c2VyKTtcbiAgY29uc3QgW2ludGVybmFsU3RhdGUsIHNldEludGVybmFsU3RhdGVdID0gdXNlU3RhdGU8RmllbGRzPigpO1xuICBjb25zdCB7IGlkLCBwcmVmZXJlbmNlc0tleSwgZG9jUGVybWlzc2lvbnMsIGdldERvY1Blcm1pc3Npb25zLCBzbHVnLCBnZXREb2NQcmVmZXJlbmNlcyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcblxuICBjb25zdCB7XG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgICBjb2xsZWN0aW9ucyxcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIEFjY291bnQ6IEN1c3RvbUFjY291bnQsXG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgQWNjb3VudDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSA9IHt9LFxuICAgIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdhdXRoZW50aWNhdGlvbicpO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKChjb2xsKSA9PiBjb2xsLnNsdWcgPT09IHNsdWcpO1xuXG4gIGNvbnN0IHsgZmllbGRzIH0gPSBjb2xsZWN0aW9uO1xuXG4gIGNvbnN0IFt7IGRhdGEsIGlzTG9hZGluZzogaXNMb2FkaW5nRGF0YSB9XSA9IHVzZVBheWxvYWRBUEkoXG4gICAgYCR7c2VydmVyVVJMfSR7YXBpfS8ke3NsdWd9LyR7aWR9YCxcbiAgICB7XG4gICAgICBpbml0aWFsUGFyYW1zOiB7XG4gICAgICAgICdmYWxsYmFjay1sb2NhbGUnOiAnbnVsbCcsXG4gICAgICAgIGRlcHRoOiAwLFxuICAgICAgfSxcbiAgICAgIGluaXRpYWxEYXRhOiBudWxsLFxuICAgIH0sXG4gICk7XG5cbiAgY29uc3QgaGFzU2F2ZVBlcm1pc3Npb24gPSBkb2NQZXJtaXNzaW9ucz8udXBkYXRlPy5wZXJtaXNzaW9uO1xuICBjb25zdCBkYXRhVG9SZW5kZXIgPSBsb2NhdGlvblN0YXRlPy5kYXRhIHx8IGRhdGE7XG4gIGNvbnN0IGFwaVVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfS8ke2RhdGE/LmlkfT9sb2NhbGU9JHtsb2NhbGV9YDtcblxuICBjb25zdCBhY3Rpb24gPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z30vJHtkYXRhPy5pZH0/bG9jYWxlPSR7bG9jYWxlfSZkZXB0aD0wYDtcblxuICBjb25zdCBvblNhdmUgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoanNvbjogYW55KSA9PiB7XG4gICAgZ2V0RG9jUGVybWlzc2lvbnMoKTtcbiAgICBjb25zdCBwcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKCk7XG4gICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hOiBjb2xsZWN0aW9uLmZpZWxkcywgcHJlZmVyZW5jZXMsIGRhdGE6IGpzb24uZG9jLCB1c2VyLCBpZCwgb3BlcmF0aW9uOiAndXBkYXRlJywgbG9jYWxlLCB0IH0pO1xuICAgIHNldEludGVybmFsU3RhdGUoc3RhdGUpO1xuICB9LCBbY29sbGVjdGlvbiwgdXNlciwgaWQsIHQsIGxvY2FsZSwgZ2V0RG9jUGVybWlzc2lvbnMsIGdldERvY1ByZWZlcmVuY2VzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuYXYgPSBbe1xuICAgICAgbGFiZWw6IHQoJ2FjY291bnQnKSxcbiAgICB9XTtcblxuICAgIHNldFN0ZXBOYXYobmF2KTtcbiAgfSwgW3NldFN0ZXBOYXYsIHRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF3YWl0SW50ZXJuYWxTdGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcblxuICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7XG4gICAgICAgIGZpZWxkU2NoZW1hOiBmaWVsZHMsXG4gICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICBkYXRhOiBkYXRhVG9SZW5kZXIsXG4gICAgICAgIG9wZXJhdGlvbjogJ3VwZGF0ZScsXG4gICAgICAgIGlkLFxuICAgICAgICB1c2VyOiB1c2VyUmVmLmN1cnJlbnQsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgdCxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCBnZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VzS2V5KTtcbiAgICAgIHNldEludGVybmFsU3RhdGUoc3RhdGUpO1xuICAgIH07XG5cbiAgICBpZiAoZGF0YVRvUmVuZGVyKSBhd2FpdEludGVybmFsU3RhdGUoKTtcbiAgfSwgW2RhdGFUb1JlbmRlciwgZmllbGRzLCBpZCwgbG9jYWxlLCBwcmVmZXJlbmNlc0tleSwgZ2V0UHJlZmVyZW5jZSwgdCwgZ2V0RG9jUHJlZmVyZW5jZXNdKTtcblxuICBjb25zdCBpc0xvYWRpbmcgPSAhaW50ZXJuYWxTdGF0ZSB8fCAhZG9jUGVybWlzc2lvbnMgfHwgaXNMb2FkaW5nRGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHRBY2NvdW50fVxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21BY2NvdW50fVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBkYXRhLFxuICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICBwZXJtaXNzaW9uczogZG9jUGVybWlzc2lvbnMsXG4gICAgICAgIGhhc1NhdmVQZXJtaXNzaW9uLFxuICAgICAgICBpbml0aWFsU3RhdGU6IGludGVybmFsU3RhdGUsXG4gICAgICAgIGFwaVVSTCxcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBvblNhdmUsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvdW50VmlldztcbiJdLCJuYW1lcyI6WyJBY2NvdW50VmlldyIsImRvY1Blcm1pc3Npb25zIiwibG9jYXRpb25TdGF0ZSIsImRhdGEiLCJ1c2VMb2NhdGlvbiIsInN0YXRlIiwidXNlTG9jYWxlIiwiY29kZSIsImxvY2FsZSIsInNldFN0ZXBOYXYiLCJ1c2VTdGVwTmF2IiwidXNlciIsInVzZUF1dGgiLCJ1c2VyUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbnRlcm5hbFN0YXRlIiwic2V0SW50ZXJuYWxTdGF0ZSIsInVzZURvY3VtZW50SW5mbyIsImlkIiwicHJlZmVyZW5jZXNLZXkiLCJnZXREb2NQZXJtaXNzaW9ucyIsInNsdWciLCJnZXREb2NQcmVmZXJlbmNlcyIsImdldFByZWZlcmVuY2UiLCJ1c2VQcmVmZXJlbmNlcyIsInVzZUNvbmZpZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImNvbGxlY3Rpb25zIiwiYWRtaW4iLCJjb21wb25lbnRzIiwidmlld3MiLCJBY2NvdW50IiwidW5kZWZpbmVkIiwiQ3VzdG9tQWNjb3VudCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNvbGxlY3Rpb24iLCJmaW5kIiwiY29sbCIsImZpZWxkcyIsInVzZVBheWxvYWRBUEkiLCJpbml0aWFsUGFyYW1zIiwiZGVwdGgiLCJpbml0aWFsRGF0YSIsImlzTG9hZGluZyIsImlzTG9hZGluZ0RhdGEiLCJoYXNTYXZlUGVybWlzc2lvbiIsInVwZGF0ZSIsInBlcm1pc3Npb24iLCJkYXRhVG9SZW5kZXIiLCJhcGlVUkwiLCJhY3Rpb24iLCJvblNhdmUiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwianNvbiIsInByZWZlcmVuY2VzIiwiYnVpbGRTdGF0ZUZyb21TY2hlbWEiLCJmaWVsZFNjaGVtYSIsImRvYyIsIm9wZXJhdGlvbiIsInVzZUVmZmVjdCIsIm5hdiIsImxhYmVsIiwiYXdhaXRJbnRlcm5hbFN0YXRlIiwiY3VycmVudCIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiLCJEZWZhdWx0QWNjb3VudCIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwicGVybWlzc2lvbnMiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBeUhBOzs7ZUFBQTs7OzZEQXpIbUQ7OEJBQ3ZCOzRCQUNHO3NCQUNMO29CQUNGO3VCQUNHO29FQUNEO3NCQUNBOzhEQUNDOzJFQUNNOzRFQUNDOzRCQUNGOzJCQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNQSxjQUF3QjtRQTBDRkMsd0JBQUFBLGlCQUNMQyxnQkFDd0JDLE9BRUFBO0lBN0M3QyxJQUFpQ0MsZUFBQUEsSUFBQUEsMkJBQVcsS0FBcENDLEFBQU9ILGdCQUFrQkUsYUFBekJDO0lBQ1IsSUFBeUJDLGFBQUFBLElBQUFBLGlCQUFTLEtBQTFCQyxB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