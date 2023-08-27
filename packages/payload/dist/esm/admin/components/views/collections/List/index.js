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
import { v4 as uuid } from "uuid";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "qs";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../utilities/Config";
import { useAuth } from "../../../utilities/Auth";
import usePayloadAPI from "../../../../hooks/usePayloadAPI";
import DefaultList from "./Default";
import RenderCustomComponent from "../../../utilities/RenderCustomComponent";
import { useStepNav } from "../../../elements/StepNav";
import formatFields from "./formatFields";
import { usePreferences } from "../../../utilities/Preferences";
import { useSearchParams } from "../../../utilities/SearchParams";
import { TableColumnsProvider } from "../../../elements/TableColumns";
/**
 * The ListView component is table which lists the collection's documents.
 * The default list view can be found at the {@link DefaultList} component.
 * Users can also create pass their own custom list view component instead
 * of using the default one.
 */ var ListView = function(props) {
    var _permissions_collections, _permissions, _collectionPermissions_create, _collectionPermissions;
    var collection = props.collection, _props_collection = props.collection, slug = _props_collection.slug, plural = _props_collection.labels.plural, _props_collection_admin = _props_collection.admin, defaultLimit = _props_collection_admin.pagination.defaultLimit, tmp = _props_collection_admin.components, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.views, _ref1 = tmp1 === void 0 ? {} : tmp1, CustomList = _ref1.List;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, api = _useConfig_routes.api, admin = _useConfig_routes.admin;
    var preferenceKey = "".concat(collection.slug, "-list");
    var permissions = useAuth().permissions;
    var setStepNav = useStepNav().setStepNav;
    var _usePreferences = usePreferences(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var _useSearchParams = useSearchParams(), page = _useSearchParams.page, sort = _useSearchParams.sort, limit = _useSearchParams.limit, where = _useSearchParams.where;
    var history = useHistory();
    var t = useTranslation("general").t;
    var _useState = _sliced_to_array(useState(""), 2), fetchURL = _useState[0], setFetchURL = _useState[1];
    var _useState1 = _sliced_to_array(useState(function() {
        return formatFields(collection);
    }), 1), fields = _useState1[0];
    var collectionPermissions = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : _permissions_collections[slug];
    var hasCreatePermission = (_collectionPermissions = collectionPermissions) === null || _collectionPermissions === void 0 ? void 0 : (_collectionPermissions_create = _collectionPermissions.create) === null || _collectionPermissions_create === void 0 ? void 0 : _collectionPermissions_create.permission;
    var newDocumentURL = "".concat(admin, "/collections/").concat(slug, "/create");
    var _usePayloadAPI = _sliced_to_array(usePayloadAPI(fetchURL, {
        initialParams: {
            page: 1
        }
    }), 2), data = _usePayloadAPI[0].data, setParams = _usePayloadAPI[1].setParams;
    useEffect(function() {
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
    var resetParams = useCallback(function() {
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
        params.invoke = uuid();
        setParams(params);
    }, [
        limit,
        page,
        setParams,
        sort,
        where
    ]);
    useEffect(function() {
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
    useEffect(function() {
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
                        params = queryString.parse(history.location.search, {
                            ignoreQueryPrefix: true,
                            depth: 0
                        });
                        search = _object_spread_props(_object_spread({}, params), {
                            sort: ((_params = params) === null || _params === void 0 ? void 0 : _params.sort) || ((_currentPreferences = currentPreferences) === null || _currentPreferences === void 0 ? void 0 : _currentPreferences.sort),
                            limit: ((_params1 = params) === null || _params1 === void 0 ? void 0 : _params1.limit) || ((_currentPreferences1 = currentPreferences) === null || _currentPreferences1 === void 0 ? void 0 : _currentPreferences1.limit) || defaultLimit
                        });
                        newSearchQuery = queryString.stringify(search, {
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
    useEffect(function() {
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
    useEffect(function() {
        var _data;
        if (((_data = data) === null || _data === void 0 ? void 0 : _data.totalDocs) && data.pagingCounter > data.totalDocs) {
            var params = queryString.parse(history.location.search, {
                ignoreQueryPrefix: true,
                depth: 0
            });
            var newSearchQuery = queryString.stringify(_object_spread_props(_object_spread({}, params), {
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
    return /*#__PURE__*/ React.createElement(TableColumnsProvider, {
        collection: collection
    }, /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        DefaultComponent: DefaultList,
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
export default ListView;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHVzZVBheWxvYWRBUEkgZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvdXNlUGF5bG9hZEFQSSc7XG5pbXBvcnQgRGVmYXVsdExpc3QgZnJvbSAnLi9EZWZhdWx0JztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvU3RlcE5hdic7XG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4vZm9ybWF0RmllbGRzJztcbmltcG9ydCB7IExpc3RJbmRleFByb3BzLCBMaXN0UHJlZmVyZW5jZXMsIFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9QcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uc1Byb3ZpZGVyIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvVGFibGVDb2x1bW5zJztcbmltcG9ydCB0eXBlIHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuLyoqXG4gKiBUaGUgTGlzdFZpZXcgY29tcG9uZW50IGlzIHRhYmxlIHdoaWNoIGxpc3RzIHRoZSBjb2xsZWN0aW9uJ3MgZG9jdW1lbnRzLlxuICogVGhlIGRlZmF1bHQgbGlzdCB2aWV3IGNhbiBiZSBmb3VuZCBhdCB0aGUge0BsaW5rIERlZmF1bHRMaXN0fSBjb21wb25lbnQuXG4gKiBVc2VycyBjYW4gYWxzbyBjcmVhdGUgcGFzcyB0aGVpciBvd24gY3VzdG9tIGxpc3QgdmlldyBjb21wb25lbnQgaW5zdGVhZFxuICogb2YgdXNpbmcgdGhlIGRlZmF1bHQgb25lLlxuICovXG5jb25zdCBMaXN0VmlldzogUmVhY3QuRkM8TGlzdEluZGV4UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIHNsdWcsXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgcGx1cmFsLFxuICAgICAgfSxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIHBhZ2luYXRpb246IHtcbiAgICAgICAgICBkZWZhdWx0TGltaXQsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgTGlzdDogQ3VzdG9tTGlzdCxcbiAgICAgICAgICB9ID0ge30sXG4gICAgICAgIH0gPSB7fSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgc2VydmVyVVJMLCByb3V0ZXM6IHsgYXBpLCBhZG1pbiB9IH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgcHJlZmVyZW5jZUtleSA9IGAke2NvbGxlY3Rpb24uc2x1Z30tbGlzdGA7XG4gIGNvbnN0IHsgcGVybWlzc2lvbnMgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyBzZXRTdGVwTmF2IH0gPSB1c2VTdGVwTmF2KCk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgeyBwYWdlLCBzb3J0LCBsaW1pdCwgd2hlcmUgfSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IFtmZXRjaFVSTCwgc2V0RmV0Y2hVUkxdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IFtmaWVsZHNdID0gdXNlU3RhdGU8RmllbGRbXT4oKCkgPT4gZm9ybWF0RmllbGRzKGNvbGxlY3Rpb24pKTtcbiAgY29uc3QgY29sbGVjdGlvblBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bc2x1Z107XG4gIGNvbnN0IGhhc0NyZWF0ZVBlcm1pc3Npb24gPSBjb2xsZWN0aW9uUGVybWlzc2lvbnM/LmNyZWF0ZT8ucGVybWlzc2lvbjtcbiAgY29uc3QgbmV3RG9jdW1lbnRVUkwgPSBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtzbHVnfS9jcmVhdGVgO1xuICBjb25zdCBbeyBkYXRhIH0sIHsgc2V0UGFyYW1zIH1dID0gdXNlUGF5bG9hZEFQSShmZXRjaFVSTCwgeyBpbml0aWFsUGFyYW1zOiB7IHBhZ2U6IDEgfSB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0ZXBOYXYoW1xuICAgICAge1xuICAgICAgICBsYWJlbDogcGx1cmFsLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfSwgW3NldFN0ZXBOYXYsIHBsdXJhbF0pO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gU2V0IHVwIFBheWxvYWQgUkVTVCBBUEkgcXVlcnkgcGFyYW1zXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBjb25zdCByZXNldFBhcmFtcyA9IHVzZUNhbGxiYWNrPFByb3BzWydyZXNldFBhcmFtcyddPigob3ZlcnJpZGVzID0ge30pID0+IHtcbiAgICBjb25zdCBwYXJhbXM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge1xuICAgICAgZGVwdGg6IDAsXG4gICAgICBkcmFmdDogJ3RydWUnLFxuICAgICAgcGFnZTogb3ZlcnJpZGVzPy5wYWdlLFxuICAgICAgc29ydDogb3ZlcnJpZGVzPy5zb3J0LFxuICAgICAgd2hlcmU6IG92ZXJyaWRlcz8ud2hlcmUsXG4gICAgICBsaW1pdCxcbiAgICB9O1xuXG4gICAgaWYgKHBhZ2UpIHBhcmFtcy5wYWdlID0gcGFnZTtcbiAgICBpZiAoc29ydCkgcGFyYW1zLnNvcnQgPSBzb3J0O1xuICAgIGlmICh3aGVyZSkgcGFyYW1zLndoZXJlID0gd2hlcmU7XG4gICAgcGFyYW1zLmludm9rZSA9IHV1aWQoKTtcblxuICAgIHNldFBhcmFtcyhwYXJhbXMpO1xuICB9LCBbbGltaXQsIHBhZ2UsIHNldFBhcmFtcywgc29ydCwgd2hlcmVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBlcmZvcm1hbmNlIGVuaGFuY2VtZW50XG4gICAgLy8gU2V0dGluZyB0aGUgRmV0Y2ggVVJMIHRoaXMgd2F5XG4gICAgLy8gcHJldmVudHMgYSBkb3VibGUtZmV0Y2hcbiAgICBzZXRGZXRjaFVSTChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7c2x1Z31gKTtcbiAgICByZXNldFBhcmFtcygpO1xuICB9LCBbYXBpLCByZXNldFBhcmFtcywgc2VydmVyVVJMLCBzbHVnXSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBGZXRjaCBwcmVmZXJlbmNlcyBvbiBmaXJzdCBsb2FkXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50UHJlZmVyZW5jZXMgPSBhd2FpdCBnZXRQcmVmZXJlbmNlPExpc3RQcmVmZXJlbmNlcz4ocHJlZmVyZW5jZUtleSk7XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGhpc3RvcnkubG9jYXRpb24uc2VhcmNoLCB7IGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlLCBkZXB0aDogMCB9KTtcblxuICAgICAgY29uc3Qgc2VhcmNoID0ge1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIHNvcnQ6IHBhcmFtcz8uc29ydCB8fCBjdXJyZW50UHJlZmVyZW5jZXM/LnNvcnQsXG4gICAgICAgIGxpbWl0OiBwYXJhbXM/LmxpbWl0IHx8IGN1cnJlbnRQcmVmZXJlbmNlcz8ubGltaXQgfHwgZGVmYXVsdExpbWl0LFxuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV3U2VhcmNoUXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkoc2VhcmNoLCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pO1xuXG4gICAgICBpZiAobmV3U2VhcmNoUXVlcnkubGVuZ3RoID4gMSkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2Uoe1xuICAgICAgICAgIHNlYXJjaDogbmV3U2VhcmNoUXVlcnksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0sIFtjb2xsZWN0aW9uLCBnZXRQcmVmZXJlbmNlLCBwcmVmZXJlbmNlS2V5LCBoaXN0b3J5LCB0LCBkZWZhdWx0TGltaXRdKTtcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFNldCBwcmVmZXJlbmNlcyBvbiBjaGFuZ2VcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcmVmZXJlbmNlcyA9IGF3YWl0IGdldFByZWZlcmVuY2U8TGlzdFByZWZlcmVuY2VzPihwcmVmZXJlbmNlS2V5KTtcblxuICAgICAgY29uc3QgbmV3UHJlZmVyZW5jZXMgPSB7XG4gICAgICAgIC4uLmN1cnJlbnRQcmVmZXJlbmNlcyxcbiAgICAgICAgbGltaXQsXG4gICAgICAgIHNvcnQsXG4gICAgICB9O1xuXG4gICAgICBzZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VLZXksIG5ld1ByZWZlcmVuY2VzKTtcbiAgICB9KSgpO1xuICB9LCBbc29ydCwgbGltaXQsIHByZWZlcmVuY2VLZXksIHNldFByZWZlcmVuY2UsIGdldFByZWZlcmVuY2VdKTtcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFByZXZlbnQgZ29pbmcgYmV5b25kIHBhZ2UgbGltaXRcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGE/LnRvdGFsRG9jcyAmJiBkYXRhLnBhZ2luZ0NvdW50ZXIgPiBkYXRhLnRvdGFsRG9jcykge1xuICAgICAgY29uc3QgcGFyYW1zID0gcXVlcnlTdHJpbmcucGFyc2UoaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2gsIHtcbiAgICAgICAgaWdub3JlUXVlcnlQcmVmaXg6IHRydWUsXG4gICAgICAgIGRlcHRoOiAwLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXdTZWFyY2hRdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgcGFnZTogZGF0YS50b3RhbFBhZ2VzLFxuICAgICAgfSwgeyBhZGRRdWVyeVByZWZpeDogdHJ1ZSB9KTtcbiAgICAgIGhpc3RvcnkucmVwbGFjZSh7XG4gICAgICAgIHNlYXJjaDogbmV3U2VhcmNoUXVlcnksXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtkYXRhLCBoaXN0b3J5LCByZXNldFBhcmFtc10pO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29sdW1uc1Byb3ZpZGVyIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259PlxuICAgICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0TGlzdH1cbiAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21MaXN0fVxuICAgICAgICBjb21wb25lbnRQcm9wcz17e1xuICAgICAgICAgIGNvbGxlY3Rpb246IHsgLi4uY29sbGVjdGlvbiwgZmllbGRzIH0sXG4gICAgICAgICAgbmV3RG9jdW1lbnRVUkwsXG4gICAgICAgICAgaGFzQ3JlYXRlUGVybWlzc2lvbixcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGxpbWl0OiBsaW1pdCB8fCBkZWZhdWx0TGltaXQsXG4gICAgICAgICAgcmVzZXRQYXJhbXMsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvVGFibGVDb2x1bW5zUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0VmlldztcbiJdLCJuYW1lcyI6WyJ2NCIsInV1aWQiLCJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VIaXN0b3J5IiwicXVlcnlTdHJpbmciLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInVzZUF1dGgiLCJ1c2VQYXlsb2FkQVBJIiwiRGVmYXVsdExpc3QiLCJSZW5kZXJDdXN0b21Db21wb25lbnQiLCJ1c2VTdGVwTmF2IiwiZm9ybWF0RmllbGRzIiwidXNlUHJlZmVyZW5jZXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJUYWJsZUNvbHVtbnNQcm92aWRlciIsIkxpc3RWaWV3IiwicHJvcHMiLCJwZXJtaXNzaW9ucyIsImNvbGxlY3Rpb25QZXJtaXNzaW9ucyIsImNvbGxlY3Rpb24iLCJzbHVnIiwibGFiZWxzIiwicGx1cmFsIiwiYWRtaW4iLCJwYWdpbmF0aW9uIiwiZGVmYXVsdExpbWl0IiwiY29tcG9uZW50cyIsInZpZXdzIiwiTGlzdCIsIkN1c3RvbUxpc3QiLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJwcmVmZXJlbmNlS2V5Iiwic2V0U3RlcE5hdiIsImdldFByZWZlcmVuY2UiLCJzZXRQcmVmZXJlbmNlIiwicGFnZSIsInNvcnQiLCJsaW1pdCIsIndoZXJlIiwiaGlzdG9yeSIsInQiLCJmZXRjaFVSTCIsInNldEZldGNoVVJMIiwiZmllbGRzIiwiY29sbGVjdGlvbnMiLCJoYXNDcmVhdGVQZXJtaXNzaW9uIiwiY3JlYXRlIiwicGVybWlzc2lvbiIsIm5ld0RvY3VtZW50VVJMIiwiaW5pdGlhbFBhcmFtcyIsImRhdGEiLCJzZXRQYXJhbXMiLCJsYWJlbCIsInJlc2V0UGFyYW1zIiwib3ZlcnJpZGVzIiwicGFyYW1zIiwiZGVwdGgiLCJkcmFmdCIsImludm9rZSIsImN1cnJlbnRQcmVmZXJlbmNlcyIsInNlYXJjaCIsIm5ld1NlYXJjaFF1ZXJ5IiwicGFyc2UiLCJsb2NhdGlvbiIsImlnbm9yZVF1ZXJ5UHJlZml4Iiwic3RyaW5naWZ5IiwiYWRkUXVlcnlQcmVmaXgiLCJsZW5ndGgiLCJyZXBsYWNlIiwibmV3UHJlZmVyZW5jZXMiLCJ0b3RhbERvY3MiLCJwYWdpbmdDb3VudGVyIiwidG90YWxQYWdlcyIsIkRlZmF1bHRDb21wb25lbnQiLCJDdXN0b21Db21wb25lbnQiLCJjb21wb25lbnRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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