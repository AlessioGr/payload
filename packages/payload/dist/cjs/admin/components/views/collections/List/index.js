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
var _uuid = require("uuid");
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reactrouterdom = require("react-router-dom");
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reacti18next = require("react-i18next");
var _Config = require("../../../utilities/Config");
var _Auth = require("../../../utilities/Auth");
var _usePayloadAPI = /*#__PURE__*/ _interop_require_default(require("../../../../hooks/usePayloadAPI"));
var _Default = /*#__PURE__*/ _interop_require_default(require("./Default"));
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../../utilities/RenderCustomComponent"));
var _StepNav = require("../../../elements/StepNav");
var _formatFields = /*#__PURE__*/ _interop_require_default(require("./formatFields"));
var _Preferences = require("../../../utilities/Preferences");
var _SearchParams = require("../../../utilities/SearchParams");
var _TableColumns = require("../../../elements/TableColumns");
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
/**
 * The ListView component is table which lists the collection's documents.
 * The default list view can be found at the {@link DefaultList} component.
 * Users can also create pass their own custom list view component instead
 * of using the default one.
 */ var ListView = function(props) {
    var _permissions_collections, _permissions, _collectionPermissions_create, _collectionPermissions;
    var collection = props.collection, _props_collection = props.collection, slug = _props_collection.slug, plural = _props_collection.labels.plural, _props_collection_admin = _props_collection.admin, defaultLimit = _props_collection_admin.pagination.defaultLimit, tmp = _props_collection_admin.components, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.views, _ref1 = tmp1 === void 0 ? {} : tmp1, CustomList = _ref1.List;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, api = _useConfig_routes.api, admin = _useConfig_routes.admin;
    var preferenceKey = "".concat(collection.slug, "-list");
    var permissions = (0, _Auth.useAuth)().permissions;
    var setStepNav = (0, _StepNav.useStepNav)().setStepNav;
    var _usePreferences = (0, _Preferences.usePreferences)(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var _useSearchParams = (0, _SearchParams.useSearchParams)(), page = _useSearchParams.page, sort = _useSearchParams.sort, limit = _useSearchParams.limit, where = _useSearchParams.where;
    var history = (0, _reactrouterdom.useHistory)();
    var t = (0, _reacti18next.useTranslation)("general").t;
    var _useState = _sliced_to_array((0, _react.useState)(""), 2), fetchURL = _useState[0], setFetchURL = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(function() {
        return (0, _formatFields.default)(collection);
    }), 1), fields = _useState1[0];
    var collectionPermissions = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : _permissions_collections[slug];
    var hasCreatePermission = (_collectionPermissions = collectionPermissions) === null || _collectionPermissions === void 0 ? void 0 : (_collectionPermissions_create = _collectionPermissions.create) === null || _collectionPermissions_create === void 0 ? void 0 : _collectionPermissions_create.permission;
    var newDocumentURL = "".concat(admin, "/collections/").concat(slug, "/create");
    var _usePayloadAPI1 = _sliced_to_array((0, _usePayloadAPI.default)(fetchURL, {
        initialParams: {
            page: 1
        }
    }), 2), data = _usePayloadAPI1[0].data, setParams = _usePayloadAPI1[1].setParams;
    (0, _react.useEffect)(function() {
        setStepNav([
            {
                label: plural
            }
        ]);
    }, [
        setStepNav,
        plural
    ]);
    // /////////////////////////////////////
    // Set up Payload REST API query params
    // /////////////////////////////////////
    var resetParams = (0, _react.useCallback)(function() {
        var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _overrides, _overrides1, _overrides2;
        var params = {
            depth: 0,
            draft: "true",
            page: (_overrides = overrides) === null || _overrides === void 0 ? void 0 : _overrides.page,
            sort: (_overrides1 = overrides) === null || _overrides1 === void 0 ? void 0 : _overrides1.sort,
            where: (_overrides2 = overrides) === null || _overrides2 === void 0 ? void 0 : _overrides2.where,
            limit: limit
        };
        if (page) params.page = page;
        if (sort) params.sort = sort;
        if (where) params.where = where;
        params.invoke = (0, _uuid.v4)();
        setParams(params);
    }, [
        limit,
        page,
        setParams,
        sort,
        where
    ]);
    (0, _react.useEffect)(function() {
        // Performance enhancement
        // Setting the Fetch URL this way
        // prevents a double-fetch
        setFetchURL("".concat(serverURL).concat(api, "/").concat(slug));
        resetParams();
    }, [
        api,
        resetParams,
        serverURL,
        slug
    ]);
    // /////////////////////////////////////
    // Fetch preferences on first load
    // /////////////////////////////////////
    (0, _react.useEffect)(function() {
        _async_to_generator(function() {
            var _params, _currentPreferences, _params1, _currentPreferences1, currentPreferences, params, search, newSearchQuery;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getPreference(preferenceKey)
                        ];
                    case 1:
                        currentPreferences = _state.sent();
                        params = _qs.default.parse(history.location.search, {
                            ignoreQueryPrefix: true,
                            depth: 0
                        });
                        search = _object_spread_props(_object_spread({}, params), {
                            sort: ((_params = params) === null || _params === void 0 ? void 0 : _params.sort) || ((_currentPreferences = currentPreferences) === null || _currentPreferences === void 0 ? void 0 : _currentPreferences.sort),
                            limit: ((_params1 = params) === null || _params1 === void 0 ? void 0 : _params1.limit) || ((_currentPreferences1 = currentPreferences) === null || _currentPreferences1 === void 0 ? void 0 : _currentPreferences1.limit) || defaultLimit
                        });
                        newSearchQuery = _qs.default.stringify(search, {
                            addQueryPrefix: true
                        });
                        if (newSearchQuery.length > 1) {
                            history.replace({
                                search: newSearchQuery
                            });
                        }
                        return [
                            2
                        ];
                }
            });
        })();
    }, [
        collection,
        getPreference,
        preferenceKey,
        history,
        t,
        defaultLimit
    ]);
    // /////////////////////////////////////
    // Set preferences on change
    // /////////////////////////////////////
    (0, _react.useEffect)(function() {
        _async_to_generator(function() {
            var currentPreferences, newPreferences;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getPreference(preferenceKey)
                        ];
                    case 1:
                        currentPreferences = _state.sent();
                        newPreferences = _object_spread_props(_object_spread({}, currentPreferences), {
                            limit: limit,
                            sort: sort
                        });
                        setPreference(preferenceKey, newPreferences);
                        return [
                            2
                        ];
                }
            });
        })();
    }, [
        sort,
        limit,
        preferenceKey,
        setPreference,
        getPreference
    ]);
    // /////////////////////////////////////
    // Prevent going beyond page limit
    // /////////////////////////////////////
    (0, _react.useEffect)(function() {
        var _data;
        if (((_data = data) === null || _data === void 0 ? void 0 : _data.totalDocs) && data.pagingCounter > data.totalDocs) {
            var params = _qs.default.parse(history.location.search, {
                ignoreQueryPrefix: true,
                depth: 0
            });
            var newSearchQuery = _qs.default.stringify(_object_spread_props(_object_spread({}, params), {
                page: data.totalPages
            }), {
                addQueryPrefix: true
            });
            history.replace({
                search: newSearchQuery
            });
        }
    }, [
        data,
        history,
        resetParams
    ]);
    return /*#__PURE__*/ _react.default.createElement(_TableColumns.TableColumnsProvider, {
        collection: collection
    }, /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        DefaultComponent: _Default.default,
        CustomComponent: CustomList,
        componentProps: {
            collection: _object_spread_props(_object_spread({}, collection), {
                fields: fields
            }),
            newDocumentURL: newDocumentURL,
            hasCreatePermission: hasCreatePermission,
            data: data,
            limit: limit || defaultLimit,
            resetParams: resetParams
        }
    }));
};
var _default = ListView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSc7XG5pbXBvcnQgRGVmYXVsdExpc3QgZnJvbSAnLi9EZWZhdWx0JztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3RlcE5hdic7XG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4vZm9ybWF0RmllbGRzJztcbmltcG9ydCB7IExpc3RJbmRleFByb3BzLCBMaXN0UHJlZmVyZW5jZXMsIFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9QcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvVGFibGVDb2x1bW5zJztcbmltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuLyoqXG4gKiBUaGUgTGlzdFZpZXcgY29tcG9uZW50IGlzIHRhYmxlIHdoaWNoIGxpc3RzIHRoZSBjb2xsZWN0aW9uJ3MgZG9jdW1lbnRzLlxuICogVGhlIGRlZmF1bHQgbGlzdCB2aWV3IGNhbiBiZSBmb3VuZCBhdCB0aGUge0BsaW5rIERlZmF1bHRMaXN0fSBjb21wb25lbnQuXG4gKiBVc2VycyBjYW4gYWxzbyBjcmVhdGUgcGFzcyB0aGVpciBvd24gY3VzdG9tIGxpc3QgdmlldyBjb21wb25lbnQgaW5zdGVhZFxuICogb2YgdXNpbmcgdGhlIGRlZmF1bHQgb25lLlxuICovXG5jb25zdCBMaXN0VmlldzogUmVhY3QuRkM8TGlzdEluZGV4UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIHNsdWcsXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgcGx1cmFsLFxuICAgICAgfSxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBkZWZhdWx0TGltaXQsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgTGlzdDogQ3VzdG9tTGlzdCxcbiAgICAgICAgICB9ID0ge30sXG4gICAgICAgIH0gPSB7fSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgc2VydmVyVVJMLCByb3V0ZXM6IHsgYXBpLCBhZG1pbiB9IH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgcHJlZmVyZW5jZUtleSA9IGAke2NvbGxlY3Rpb24uc2x1Z30tbGlzdGA7XG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyBzZXRTdGVwTmF2IH0gPSB1c2VTdGVwTmF2KCk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgeyBwYWdlLCBzb3J0LCBsaW1pdCwgd2hlcmUgfSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IFtmZXRjaFVSTCwgc2V0RmV0Y2hVUkxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtmaWVsZHNdID0gdXNlU3RhdGU8RmllbGRbXT4oKCkgPT4gZm9ybWF0RmllbGRzKGNvbGxlY3Rpb24pKTtcbiAgY29uc3QgY29sbGVjdGlvblBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bc2x1Z107XG4gIGNvbnN0IGhhc0NyZWF0ZVBlcm1pc3Npb24gPSBjb2xsZWN0aW9uUGVybWlzc2lvbnM/LmNyZWF0ZT8ucGVybWlzc2lvbjtcbiAgY29uc3QgbmV3RG9jdW1lbnRVUkwgPSBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtzbHVnfS9jcmVhdGVgO1xuICBjb25zdCBbeyBkYXRhIH0sIHsgc2V0UGFyYW1zIH1dID0gdXNlUGF5bG9hZEFQSShmZXRjaFVSTCwgeyBpbml0aWFsUGFyYW1zOiB7IHBhZ2U6IDEgfSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0ZXBOYXYoW1xuICAgICAge1xuICAgICAgICBsYWJlbDogcGx1cmFsLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfSwgW3NldFN0ZXBOYXYsIHBsdXJhbF0pO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gU2V0IHVwIFBheWxvYWQgUkVTVCBBUEkgcXVlcnkgcGFyYW1zXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBjb25zdCByZXNldFBhcmFtcyA9IHVzZUNhbGxiYWNrPFByb3BzWydyZXNldFBhcmFtcyddPigob3ZlcnJpZGVzID0ge30pID0+IHtcbiAgICBjb25zdCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge1xuICAgICAgZGVwdGg6IDAsXG4gICAgICBkcmFmdDogJ3RydWUnLFxuICAgICAgcGFnZTogb3ZlcnJpZGVzPy5wYWdlLFxuICAgICAgc29ydDogb3ZlcnJpZGVzPy5zb3J0LFxuICAgICAgd2hlcmU6IG92ZXJyaWRlcz8ud2hlcmUsXG4gICAgICBsaW1pdCxcbiAgICB9O1xuXG4gICAgaWYgKHBhZ2UpIHBhcmFtcy5wYWdlID0gcGFnZTtcbiAgICBpZiAoc29ydCkgcGFyYW1zLnNvcnQgPSBzb3J0O1xuICAgIGlmICh3aGVyZSkgcGFyYW1zLndoZXJlID0gd2hlcmU7XG4gICAgcGFyYW1zLmludm9rZSA9IHV1aWQoKTtcblxuICAgIHNldFBhcmFtcyhwYXJhbXMpO1xuICB9LCBbbGltaXQsIHBhZ2UsIHNldFBhcmFtcywgc29ydCwgd2hlcmVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBlcmZvcm1hbmNlIGVuaGFuY2VtZW50XG4gICAgLy8gU2V0dGluZyB0aGUgRmV0Y2ggVVJMIHRoaXMgd2F5XG4gICAgLy8gcHJldmVudHMgYSBkb3VibGUtZmV0Y2hcbiAgICBzZXRGZXRjaFVSTChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z31gKTtcbiAgICByZXNldFBhcmFtcygpO1xuICB9LCBbYXBpLCByZXNldFBhcmFtcywgc2VydmVyVVJMLCBzbHVnXSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBGZXRjaCBwcmVmZXJlbmNlcyBvbiBmaXJzdCBsb2FkXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50UHJlZmVyZW5jZXMgPSBhd2FpdCBnZXRQcmVmZXJlbmNlPExpc3RQcmVmZXJlbmNlcz4ocHJlZmVyZW5jZUtleSk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGhpc3RvcnkubG9jYXRpb24uc2VhcmNoLCB7IGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlLCBkZXB0aDogMCB9KTtcblxuICAgICAgY29uc3Qgc2VhcmNoID0ge1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIHNvcnQ6IHBhcmFtcz8uc29ydCB8fCBjdXJyZW50UHJlZmVyZW5jZXM/LnNvcnQsXG4gICAgICAgIGxpbWl0OiBwYXJhbXM/LmxpbWl0IHx8IGN1cnJlbnRQcmVmZXJlbmNlcz8ubGltaXQgfHwgZGVmYXVsdExpbWl0LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV3U2VhcmNoUXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkoc2VhcmNoLCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pO1xuXG4gICAgICBpZiAobmV3U2VhcmNoUXVlcnkubGVuZ3RoID4gMSkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2Uoe1xuICAgICAgICAgIHNlYXJjaDogbmV3U2VhcmNoUXVlcnksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0sIFtjb2xsZWN0aW9uLCBnZXRQcmVmZXJlbmNlLCBwcmVmZXJlbmNlS2V5LCBoaXN0b3J5LCB0LCBkZWZhdWx0TGltaXRdKTtcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFNldCBwcmVmZXJlbmNlcyBvbiBjaGFuZ2VcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcmVmZXJlbmNlcyA9IGF3YWl0IGdldFByZWZlcmVuY2U8TGlzdFByZWZlcmVuY2VzPihwcmVmZXJlbmNlS2V5KTtcblxuICAgICAgY29uc3QgbmV3UHJlZmVyZW5jZXMgPSB7XG4gICAgICAgIC4uLmN1cnJlbnRQcmVmZXJlbmNlcyxcbiAgICAgICAgbGltaXQsXG4gICAgICAgIHNvcnQsXG4gICAgICB9O1xuXG4gICAgICBzZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VLZXksIG5ld1ByZWZlcmVuY2VzKTtcbiAgICB9KSgpO1xuICB9LCBbc29ydCwgbGltaXQsIHByZWZlcmVuY2VLZXksIHNldFByZWZlcmVuY2UsIGdldFByZWZlcmVuY2VdKTtcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFByZXZlbnQgZ29pbmcgYmV5b25kIHBhZ2UgbGltaXRcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGE/LnRvdGFsRG9jcyAmJiBkYXRhLnBhZ2luZ0NvdW50ZXIgPiBkYXRhLnRvdGFsRG9jcykge1xuICAgICAgY29uc3QgcGFyYW1zID0gcXVlcnlTdHJpbmcucGFyc2UoaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2gsIHtcbiAgICAgICAgaWdub3JlUXVlcnlQcmVmaXg6IHRydWUsXG4gICAgICAgIGRlcHRoOiAwLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXdTZWFyY2hRdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgcGFnZTogZGF0YS50b3RhbFBhZ2VzLFxuICAgICAgfSwgeyBhZGRRdWVyeVByZWZpeDogdHJ1ZSB9KTtcbiAgICAgIGhpc3RvcnkucmVwbGFjZSh7XG4gICAgICAgIHNlYXJjaDogbmV3U2VhcmNoUXVlcnksXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtkYXRhLCBoaXN0b3J5LCByZXNldFBhcmFtc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29sdW1uc1Byb3ZpZGVyIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259PlxuICAgICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TGlzdH1cbiAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21MaXN0fVxuICAgICAgICBjb21wb25lbnRQcm9wcz17e1xuICAgICAgICAgIGNvbGxlY3Rpb246IHsgLi4uY29sbGVjdGlvbiwgZmllbGRzIH0sXG4gICAgICAgICAgbmV3RG9jdW1lbnRVUkwsXG4gICAgICAgICAgaGFzQ3JlYXRlUGVybWlzc2lvbixcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGxpbWl0OiBsaW1pdCB8fCBkZWZhdWx0TGltaXQsXG4gICAgICAgICAgcmVzZXRQYXJhbXMsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvVGFibGVDb2x1bW5zUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0VmlldztcbiJdLCJuYW1lcyI6WyJMaXN0VmlldyIsInByb3BzIiwicGVybWlzc2lvbnMiLCJjb2xsZWN0aW9uUGVybWlzc2lvbnMiLCJjb2xsZWN0aW9uIiwic2x1ZyIsImxhYmVscyIsInBsdXJhbCIsImFkbWluIiwicGFnaW5hdGlvbiIsImRlZmF1bHRMaW1pdCIsImNvbXBvbmVudHMiLCJ2aWV3cyIsIkxpc3QiLCJDdXN0b21MaXN0IiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwicHJlZmVyZW5jZUtleSIsInVzZUF1dGgiLCJzZXRTdGVwTmF2IiwidXNlU3RlcE5hdiIsInVzZVByZWZlcmVuY2VzIiwiZ2V0UHJlZmVyZW5jZSIsInNldFByZWZlcmVuY2UiLCJ1c2VTZWFyY2hQYXJhbXMiLCJwYWdlIiwic29ydCIsImxpbWl0Iiwid2hlcmUiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVN0YXRlIiwiZmV0Y2hVUkwiLCJzZXRGZXRjaFVSTCIsImZvcm1hdEZpZWxkcyIsImZpZWxkcyIsImNvbGxlY3Rpb25zIiwiaGFzQ3JlYXRlUGVybWlzc2lvbiIsImNyZWF0ZSIsInBlcm1pc3Npb24iLCJuZXdEb2N1bWVudFVSTCIsInVzZVBheWxvYWRBUEkiLCJpbml0aWFsUGFyYW1zIiwiZGF0YSIsInNldFBhcmFtcyIsInVzZUVmZmVjdCIsImxhYmVsIiwicmVzZXRQYXJhbXMiLCJ1c2VDYWxsYmFjayIsIm92ZXJyaWRlcyIsInBhcmFtcyIsImRlcHRoIiwiZHJhZnQiLCJpbnZva2UiLCJ1dWlkIiwiY3VycmVudFByZWZlcmVuY2VzIiwic2VhcmNoIiwibmV3U2VhcmNoUXVlcnkiLCJxdWVyeVN0cmluZyIsInBhcnNlIiwibG9jYXRpb24iLCJpZ25vcmVRdWVyeVByZWZpeCIsInN0cmluZ2lmeSIsImFkZFF1ZXJ5UHJlZml4IiwibGVuZ3RoIiwicmVwbGFjZSIsIm5ld1ByZWZlcmVuY2VzIiwidG90YWxEb2NzIiwicGFnaW5nQ291bnRlciIsInRvdGFsUGFnZXMiLCJUYWJsZUNvbHVtbnNQcm92aWRlciIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiLCJEZWZhdWx0TGlzdCIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9MQTs7O2VBQUE7OztvQkFwTDJCOzZEQUM2Qjs4QkFDN0I7eURBQ0g7NEJBQ087c0JBQ0w7b0JBQ0Y7b0VBQ0U7OERBQ0Y7NEVBQ1U7dUJBQ1A7bUVBQ0Y7MkJBRU07NEJBQ0M7NEJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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