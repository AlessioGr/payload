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
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _Default = /*#__PURE__*/ _interop_require_default(require("./Default"));
var _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/buildStateFromSchema"));
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
var GlobalView = function(props) {
    var _locationState, _global_versions, _dataToRender;
    var _useLocation = (0, _reactrouterdom.useLocation)(), locationState = _useLocation.state;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var setStepNav = (0, _StepNav.useStepNav)().setStepNav;
    var user = (0, _Auth.useAuth)().user;
    var _useState = _sliced_to_array((0, _react.useState)(), 2), initialState = _useState[0], setInitialState = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(), 2), updatedAt = _useState1[0], setUpdatedAt = _useState1[1];
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), getVersions = _useDocumentInfo.getVersions, preferencesKey = _useDocumentInfo.preferencesKey, docPermissions = _useDocumentInfo.docPermissions, getDocPermissions = _useDocumentInfo.getDocPermissions, getDocPreferences = _useDocumentInfo.getDocPreferences;
    var getPreference = (0, _Preferences.usePreferences)().getPreference;
    var t = (0, _reacti18next.useTranslation)().t;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var global = props.global;
    var slug = global.slug, label = global.label, fields = global.fields, tmp = global.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.views, _ref2 = tmp2 === void 0 ? {} : tmp2, CustomEdit = _ref2.Edit;
    var onSave = (0, _react.useCallback)(function() {
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
                            (0, _buildStateFromSchema.default)({
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
    var _usePayloadAPI1 = _sliced_to_array((0, _usePayloadAPI.default)("".concat(serverURL).concat(api, "/globals/").concat(slug), {
        initialParams: {
            "fallback-locale": "null",
            depth: 0,
            draft: "true"
        },
        initialData: null
    }), 1), _usePayloadAPI_ = _usePayloadAPI1[0], data = _usePayloadAPI_.data, isLoadingData = _usePayloadAPI_.isLoading;
    var dataToRender = ((_locationState = locationState) === null || _locationState === void 0 ? void 0 : _locationState.data) || data;
    (0, _react.useEffect)(function() {
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
    (0, _react.useEffect)(function() {
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
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        DefaultComponent: _Default.default,
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
var _default = GlobalView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0dsb2JhbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvU3RlcE5hdic7XG5pbXBvcnQgdXNlUGF5bG9hZEFQSSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VQYXlsb2FkQVBJJztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcbmltcG9ydCBEZWZhdWx0R2xvYmFsIGZyb20gJy4vRGVmYXVsdCc7XG5pbXBvcnQgYnVpbGRTdGF0ZUZyb21TY2hlbWEgZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9idWlsZFN0YXRlRnJvbVNjaGVtYSc7XG5pbXBvcnQgeyBJbmRleFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvUHJlZmVyZW5jZXMnO1xuXG5jb25zdCBHbG9iYWxWaWV3OiBSZWFjdC5GQzxJbmRleFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHN0YXRlOiBsb2NhdGlvblN0YXRlIH0gPSB1c2VMb2NhdGlvbjx7IGRhdGE/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB9PigpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgc2V0U3RlcE5hdiB9ID0gdXNlU3RlcE5hdigpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgW2luaXRpYWxTdGF0ZSwgc2V0SW5pdGlhbFN0YXRlXSA9IHVzZVN0YXRlPEZpZWxkcz4oKTtcbiAgY29uc3QgW3VwZGF0ZWRBdCwgc2V0VXBkYXRlZEF0XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgeyBnZXRWZXJzaW9ucywgcHJlZmVyZW5jZXNLZXksIGRvY1Blcm1pc3Npb25zLCBnZXREb2NQZXJtaXNzaW9ucywgZ2V0RG9jUHJlZmVyZW5jZXMgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCB7IGdldFByZWZlcmVuY2UgfSA9IHVzZVByZWZlcmVuY2VzKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCB7XG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczoge1xuICAgICAgYXBpLFxuICAgIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCB7IGdsb2JhbCB9ID0gcHJvcHM7XG5cbiAgY29uc3Qge1xuICAgIHNsdWcsXG4gICAgbGFiZWwsXG4gICAgZmllbGRzLFxuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgRWRpdDogQ3VzdG9tRWRpdCxcbiAgICAgICAgfSA9IHt9LFxuICAgICAgfSA9IHt9LFxuICAgIH0gPSB7fSxcbiAgfSA9IGdsb2JhbDtcblxuICBjb25zdCBvblNhdmUgPSB1c2VDYWxsYmFjayhhc3luYyAoanNvbikgPT4ge1xuICAgIGdldFZlcnNpb25zKCk7XG4gICAgZ2V0RG9jUGVybWlzc2lvbnMoKTtcbiAgICBzZXRVcGRhdGVkQXQoanNvbj8ucmVzdWx0Py51cGRhdGVkQXQpO1xuICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hKHsgZmllbGRTY2hlbWE6IGZpZWxkcywgcHJlZmVyZW5jZXMsIGRhdGE6IGpzb24ucmVzdWx0LCBvcGVyYXRpb246ICd1cGRhdGUnLCB1c2VyLCBsb2NhbGUsIHQgfSk7XG4gICAgc2V0SW5pdGlhbFN0YXRlKHN0YXRlKTtcbiAgfSwgW2dldFZlcnNpb25zLCBmaWVsZHMsIHVzZXIsIGxvY2FsZSwgdCwgZ2V0RG9jUGVybWlzc2lvbnMsIGdldERvY1ByZWZlcmVuY2VzXSk7XG5cbiAgY29uc3QgW3sgZGF0YSwgaXNMb2FkaW5nOiBpc0xvYWRpbmdEYXRhIH1dID0gdXNlUGF5bG9hZEFQSShcbiAgICBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtzbHVnfWAsXG4gICAgeyBpbml0aWFsUGFyYW1zOiB7ICdmYWxsYmFjay1sb2NhbGUnOiAnbnVsbCcsIGRlcHRoOiAwLCBkcmFmdDogJ3RydWUnIH0sIGluaXRpYWxEYXRhOiBudWxsIH0sXG4gICk7XG5cbiAgY29uc3QgZGF0YVRvUmVuZGVyID0gbG9jYXRpb25TdGF0ZT8uZGF0YSB8fCBkYXRhO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gW3tcbiAgICAgIGxhYmVsLFxuICAgIH1dO1xuXG4gICAgc2V0U3RlcE5hdihuYXYpO1xuICB9LCBbc2V0U3RlcE5hdiwgbGFiZWxdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGF3YWl0SW5pdGlhbFN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpO1xuICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hOiBmaWVsZHMsIHByZWZlcmVuY2VzLCBkYXRhOiBkYXRhVG9SZW5kZXIsIHVzZXIsIG9wZXJhdGlvbjogJ3VwZGF0ZScsIGxvY2FsZSwgdCB9KTtcbiAgICAgIGF3YWl0IGdldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXkpO1xuICAgICAgc2V0SW5pdGlhbFN0YXRlKHN0YXRlKTtcbiAgICB9O1xuXG4gICAgaWYgKGRhdGFUb1JlbmRlcikgYXdhaXRJbml0aWFsU3RhdGUoKTtcbiAgfSwgW2RhdGFUb1JlbmRlciwgZmllbGRzLCB1c2VyLCBsb2NhbGUsIGdldFByZWZlcmVuY2UsIHByZWZlcmVuY2VzS2V5LCB0LCBnZXREb2NQcmVmZXJlbmNlc10pO1xuXG4gIGNvbnN0IGlzTG9hZGluZyA9ICFpbml0aWFsU3RhdGUgfHwgIWRvY1Blcm1pc3Npb25zIHx8IGlzTG9hZGluZ0RhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0R2xvYmFsfVxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21FZGl0fVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICBkYXRhOiBkYXRhVG9SZW5kZXIsXG4gICAgICAgIHBlcm1pc3Npb25zOiBkb2NQZXJtaXNzaW9ucyxcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBnbG9iYWwsXG4gICAgICAgIG9uU2F2ZSxcbiAgICAgICAgYXBpVVJMOiBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtzbHVnfT9sb2NhbGU9JHtsb2NhbGV9JHtnbG9iYWwudmVyc2lvbnM/LmRyYWZ0cyA/ICcmZHJhZnQ9dHJ1ZScgOiAnJ31gLFxuICAgICAgICBhY3Rpb246IGAke3NlcnZlclVSTH0ke2FwaX0vZ2xvYmFscy8ke3NsdWd9P2xvY2FsZT0ke2xvY2FsZX0mZGVwdGg9MCZmYWxsYmFjay1sb2NhbGU9bnVsbGAsXG4gICAgICAgIHVwZGF0ZWRBdDogdXBkYXRlZEF0IHx8IGRhdGFUb1JlbmRlcj8udXBkYXRlZEF0LFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFZpZXc7XG4iXSwibmFtZXMiOlsiR2xvYmFsVmlldyIsInByb3BzIiwibG9jYXRpb25TdGF0ZSIsImdsb2JhbCIsImRhdGFUb1JlbmRlciIsInVzZUxvY2F0aW9uIiwic3RhdGUiLCJ1c2VMb2NhbGUiLCJjb2RlIiwibG9jYWxlIiwic2V0U3RlcE5hdiIsInVzZVN0ZXBOYXYiLCJ1c2VyIiwidXNlQXV0aCIsInVzZVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwidXBkYXRlZEF0Iiwic2V0VXBkYXRlZEF0IiwidXNlRG9jdW1lbnRJbmZvIiwiZ2V0VmVyc2lvbnMiLCJwcmVmZXJlbmNlc0tleSIsImRvY1Blcm1pc3Npb25zIiwiZ2V0RG9jUGVybWlzc2lvbnMiLCJnZXREb2NQcmVmZXJlbmNlcyIsImdldFByZWZlcmVuY2UiLCJ1c2VQcmVmZXJlbmNlcyIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInNsdWciLCJsYWJlbCIsImZpZWxkcyIsImFkbWluIiwiY29tcG9uZW50cyIsInZpZXdzIiwiRWRpdCIsIkN1c3RvbUVkaXQiLCJvblNhdmUiLCJ1c2VDYWxsYmFjayIsImpzb24iLCJwcmVmZXJlbmNlcyIsInJlc3VsdCIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwiZmllbGRTY2hlbWEiLCJkYXRhIiwib3BlcmF0aW9uIiwidXNlUGF5bG9hZEFQSSIsImluaXRpYWxQYXJhbXMiLCJkZXB0aCIsImRyYWZ0IiwiaW5pdGlhbERhdGEiLCJpc0xvYWRpbmciLCJpc0xvYWRpbmdEYXRhIiwidXNlRWZmZWN0IiwibmF2IiwiYXdhaXRJbml0aWFsU3RhdGUiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0Q29tcG9uZW50IiwiRGVmYXVsdEdsb2JhbCIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwicGVybWlzc2lvbnMiLCJhcGlVUkwiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3R0E7OztlQUFBOzs7NkRBeEd3RDs4QkFDNUI7NEJBQ0c7c0JBQ0w7b0JBQ0Y7dUJBQ0c7b0VBQ0Q7c0JBQ0E7NEVBQ1E7OERBQ1I7MkVBQ087NEJBRUQ7MkJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1BLGFBQW1DLFNBQUNDO1FBK0NuQkMsZ0JBa0MrQ0Msa0JBRXRDQztJQWxGOUIsSUFBaUNDLGVBQUFBLElBQUFBLDJCQUFXLEtBQXBDQyxBQUFPSixnQkFBa0JHLGFBQXpCQztJQUNSLElBQXlCQyxhQUFBQSxJQUFBQSxpQkFBUyxLQUExQkMsQUFBTUMsU0FBV0YsV0FBakJDO0lBQ1IsSUFBTSxBQUFFRSxhQUFlQyxJQUFBQSxtQkFBVSxJQUF6QkQ7SUFDUixJQUFNLEFBQUVFLE9BQVNDLElBQUFBLGFBQU8sSUFBaEJEO0lBQ1IsSUFBd0NFLDZCQUFBQSxJQUFBQSxlQUFRLFNBQXpDQyxlQUFpQ0QsY0FBbkJFLGtCQUFtQkY7SUFDeEMsSUFBa0NBLDhCQUFBQSxJQUFB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