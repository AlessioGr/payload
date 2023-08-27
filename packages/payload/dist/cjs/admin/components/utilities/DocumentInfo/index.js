"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useDocumentInfo: function() {
        return useDocumentInfo;
    },
    DocumentInfoProvider: function() {
        return DocumentInfoProvider;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reacti18next = require("react-i18next");
var _reactrouterdom = require("react-router-dom");
var _Config = require("../Config");
var _Preferences = require("../Preferences");
var _Auth = require("../Auth");
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
var Context = /*#__PURE__*/ (0, _react.createContext)({});
var useDocumentInfo = function() {
    return (0, _react.useContext)(Context);
};
var DocumentInfoProvider = function(param) {
    var children = param.children, global = param.global, collection = param.collection, idFromProps = param.id, getIDFromParams = param.idFromParams;
    var _useParams = (0, _reactrouterdom.useParams)(), idFromParams = _useParams.id;
    var id = idFromProps || (getIDFromParams ? idFromParams : null);
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _usePreferences = (0, _Preferences.usePreferences)(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var permissions = (0, _Auth.useAuth)().permissions;
    var _useState = _sliced_to_array((0, _react.useState)(null), 2), publishedDoc = _useState[0], setPublishedDoc = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(null), 2), versions = _useState1[0], setVersions = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)(null), 2), unpublishedVersions = _useState2[0], setUnpublishedVersions = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)(null), 2), docPermissions = _useState3[0], setDocPermissions = _useState3[1];
    var baseURL = "".concat(serverURL).concat(api);
    var slug;
    var pluralType;
    var preferencesKey;
    if (global) {
        slug = global.slug;
        pluralType = "globals";
        preferencesKey = "global-".concat(slug);
    }
    if (collection) {
        slug = collection.slug;
        pluralType = "collections";
        if (id) {
            preferencesKey = "collection-".concat(slug, "-").concat(id);
        }
    }
    var getVersions = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var versionFetchURL, publishedFetchURL, draftsEnabled, shouldFetchVersions, unpublishedVersionJSON, versionJSON, shouldFetch, versionParams, publishedVersionParams, _global_versions, _global, _global1, _collection_versions, _collection, _collection1, publishedJSON, _publishedJSON_docs, _publishedJSON, _publishedJSON1, _publishedJSON2, newerVersionParams, newerVersionRes;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    draftsEnabled = false;
                    shouldFetchVersions = false;
                    unpublishedVersionJSON = null;
                    versionJSON = null;
                    shouldFetch = true;
                    versionParams = {
                        where: {
                            and: []
                        },
                        depth: 0
                    };
                    publishedVersionParams = {
                        where: {
                            and: [
                                {
                                    or: [
                                        {
                                            _status: {
                                                equals: "published"
                                            }
                                        },
                                        {
                                            _status: {
                                                exists: false
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        depth: 0
                    };
                    if (global) {
                        ;
                        draftsEnabled = Boolean((_global = global) === null || _global === void 0 ? void 0 : (_global_versions = _global.versions) === null || _global_versions === void 0 ? void 0 : _global_versions.drafts);
                        shouldFetchVersions = Boolean((_global1 = global) === null || _global1 === void 0 ? void 0 : _global1.versions);
                        versionFetchURL = "".concat(baseURL, "/globals/").concat(global.slug, "/versions");
                        publishedFetchURL = "".concat(baseURL, "/globals/").concat(global.slug, "?").concat(_qs.default.stringify(publishedVersionParams));
                    }
                    if (collection) {
                        ;
                        draftsEnabled = Boolean((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_versions = _collection.versions) === null || _collection_versions === void 0 ? void 0 : _collection_versions.drafts);
                        shouldFetchVersions = Boolean((_collection1 = collection) === null || _collection1 === void 0 ? void 0 : _collection1.versions);
                        versionFetchURL = "".concat(baseURL, "/").concat(collection.slug, "/versions");
                        publishedVersionParams.where.and.push({
                            id: {
                                equals: id
                            }
                        });
                        publishedFetchURL = "".concat(baseURL, "/").concat(collection.slug, "?").concat(_qs.default.stringify(publishedVersionParams));
                        if (!id) {
                            shouldFetch = false;
                        }
                        versionParams.where.and.push({
                            parent: {
                                equals: id
                            }
                        });
                    }
                    if (!shouldFetch) return [
                        3,
                        7
                    ];
                    if (!draftsEnabled) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        fetch(publishedFetchURL, {
                            credentials: "include",
                            headers: {
                                "Accept-Language": i18n.language
                            }
                        }).then(function(res) {
                            return res.json();
                        })
                    ];
                case 1:
                    publishedJSON = _state.sent();
                    if (collection) {
                        ;
                        publishedJSON = (_publishedJSON = publishedJSON) === null || _publishedJSON === void 0 ? void 0 : (_publishedJSON_docs = _publishedJSON.docs) === null || _publishedJSON_docs === void 0 ? void 0 : _publishedJSON_docs[0];
                    }
                    _state.label = 2;
                case 2:
                    if (!shouldFetchVersions) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        fetch("".concat(versionFetchURL, "?").concat(_qs.default.stringify(versionParams)), {
                            credentials: "include",
                            headers: {
                                "Accept-Language": i18n.language
                            }
                        }).then(function(res) {
                            return res.json();
                        })
                    ];
                case 3:
                    versionJSON = _state.sent();
                    if (!((_publishedJSON1 = publishedJSON) === null || _publishedJSON1 === void 0 ? void 0 : _publishedJSON1.updatedAt)) return [
                        3,
                        6
                    ];
                    newerVersionParams = _object_spread_props(_object_spread({}, versionParams), {
                        where: _object_spread_props(_object_spread({}, versionParams.where), {
                            and: _to_consumable_array(versionParams.where.and).concat([
                                {
                                    updatedAt: {
                                        greater_than: (_publishedJSON2 = publishedJSON) === null || _publishedJSON2 === void 0 ? void 0 : _publishedJSON2.updatedAt
                                    }
                                }
                            ])
                        })
                    });
                    return [
                        4,
                        fetch("".concat(versionFetchURL, "?").concat(_qs.default.stringify(newerVersionParams)), {
                            credentials: "include",
                            headers: {
                                "Accept-Language": i18n.language
                            }
                        })
                    ];
                case 4:
                    newerVersionRes = _state.sent();
                    if (!(newerVersionRes.status === 200)) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        newerVersionRes.json()
                    ];
                case 5:
                    unpublishedVersionJSON = _state.sent();
                    _state.label = 6;
                case 6:
                    setPublishedDoc(publishedJSON);
                    setVersions(versionJSON);
                    setUnpublishedVersions(unpublishedVersionJSON);
                    _state.label = 7;
                case 7:
                    return [
                        2
                    ];
            }
        });
    }), [
        i18n,
        global,
        collection,
        id,
        baseURL
    ]);
    var getDocPermissions = _react.default.useCallback(/*#__PURE__*/ _async_to_generator(function() {
        var docAccessURL, res, json;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (pluralType === "globals") {
                        docAccessURL = "/globals/".concat(slug, "/access");
                    } else if (pluralType === "collections" && id) {
                        docAccessURL = "/".concat(slug, "/access/").concat(id);
                    }
                    if (!docAccessURL) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        fetch("".concat(serverURL).concat(api).concat(docAccessURL), {
                            credentials: "include",
                            headers: {
                                "Accept-Language": i18n.language
                            }
                        })
                    ];
                case 1:
                    res = _state.sent();
                    return [
                        4,
                        res.json()
                    ];
                case 2:
                    json = _state.sent();
                    setDocPermissions(json);
                    return [
                        3,
                        4
                    ];
                case 3:
                    // fallback to permissions from the entity type
                    // (i.e. create has no id)
                    setDocPermissions(permissions[pluralType][slug]);
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    }), [
        serverURL,
        api,
        pluralType,
        slug,
        id,
        permissions,
        i18n.language
    ]);
    var getDocPreferences = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                getPreference(preferencesKey)
            ];
        });
    }), [
        getPreference,
        preferencesKey
    ]);
    var setDocFieldPreferences = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(path, fieldPreferences) {
            var allPreferences, _allPreferences, _allPreferences_fields, _allPreferences1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getDocPreferences()
                        ];
                    case 1:
                        allPreferences = _state.sent();
                        if (preferencesKey) {
                            ;
                            setPreference(preferencesKey, _object_spread_props(_object_spread({}, allPreferences), {
                                fields: _object_spread_props(_object_spread({}, ((_allPreferences = allPreferences) === null || _allPreferences === void 0 ? void 0 : _allPreferences.fields) || {}), _define_property({}, path, _object_spread({}, (_allPreferences1 = allPreferences) === null || _allPreferences1 === void 0 ? void 0 : (_allPreferences_fields = _allPreferences1.fields) === null || _allPreferences_fields === void 0 ? void 0 : _allPreferences_fields[path], fieldPreferences)))
                            }));
                        }
                        return [
                            2
                        ];
                }
            });
        });
        return function(path, fieldPreferences) {
            return _ref.apply(this, arguments);
        };
    }(), [
        setPreference,
        preferencesKey,
        getDocPreferences
    ]);
    (0, _react.useEffect)(function() {
        getVersions();
    }, [
        getVersions
    ]);
    (0, _react.useEffect)(function() {
        getDocPermissions();
    }, [
        getDocPermissions
    ]);
    var value = {
        slug: slug,
        preferencesKey: preferencesKey,
        global: global,
        collection: collection,
        versions: versions,
        unpublishedVersions: unpublishedVersions,
        getVersions: getVersions,
        publishedDoc: publishedDoc,
        id: id,
        getDocPermissions: getDocPermissions,
        docPermissions: docPermissions,
        setDocFieldPreferences: setDocFieldPreferences,
        getDocPreferences: getDocPreferences
    };
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: value
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Eb2N1bWVudEluZm8vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uL0NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBDb250ZXh0VHlwZSwgRG9jdW1lbnRQZXJtaXNzaW9ucywgUHJvcHMsIFZlcnNpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFR5cGVXaXRoSUQgfSBmcm9tICcuLi8uLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBUeXBlV2l0aFRpbWVzdGFtcHMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBEb2N1bWVudFByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlZmVyZW5jZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi9QcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vQXV0aCc7XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvbnRleHRUeXBlKTtcblxuZXhwb3J0IGNvbnN0IHVzZURvY3VtZW50SW5mbyA9ICgpOiBDb250ZXh0VHlwZSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRJbmZvUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBnbG9iYWwsXG4gIGNvbGxlY3Rpb24sXG4gIGlkOiBpZEZyb21Qcm9wcyxcbiAgaWRGcm9tUGFyYW1zOiBnZXRJREZyb21QYXJhbXMsXG59KSA9PiB7XG4gIGNvbnN0IHsgaWQ6IGlkRnJvbVBhcmFtcyB9ID0gdXNlUGFyYW1zPHtpZDogc3RyaW5nfT4oKTtcbiAgY29uc3QgaWQgPSBpZEZyb21Qcm9wcyB8fCAoZ2V0SURGcm9tUGFyYW1zID8gaWRGcm9tUGFyYW1zIDogbnVsbCk7XG5cbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFtwdWJsaXNoZWREb2MsIHNldFB1Ymxpc2hlZERvY10gPSB1c2VTdGF0ZTxUeXBlV2l0aElEICYgVHlwZVdpdGhUaW1lc3RhbXBzPihudWxsKTtcbiAgY29uc3QgW3ZlcnNpb25zLCBzZXRWZXJzaW9uc10gPSB1c2VTdGF0ZTxQYWdpbmF0ZWREb2NzPFZlcnNpb24+PihudWxsKTtcbiAgY29uc3QgW3VucHVibGlzaGVkVmVyc2lvbnMsIHNldFVucHVibGlzaGVkVmVyc2lvbnNdID0gdXNlU3RhdGU8UGFnaW5hdGVkRG9jczxWZXJzaW9uPj4obnVsbCk7XG4gIGNvbnN0IFtkb2NQZXJtaXNzaW9ucywgc2V0RG9jUGVybWlzc2lvbnNdID0gdXNlU3RhdGU8RG9jdW1lbnRQZXJtaXNzaW9ucz4obnVsbCk7XG5cbiAgY29uc3QgYmFzZVVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX1gO1xuICBsZXQgc2x1Zzogc3RyaW5nO1xuICBsZXQgcGx1cmFsVHlwZTogJ2dsb2JhbHMnIHwgJ2NvbGxlY3Rpb25zJztcbiAgbGV0IHByZWZlcmVuY2VzS2V5OiBzdHJpbmc7XG5cbiAgaWYgKGdsb2JhbCkge1xuICAgIHNsdWcgPSBnbG9iYWwuc2x1ZztcbiAgICBwbHVyYWxUeXBlID0gJ2dsb2JhbHMnO1xuICAgIHByZWZlcmVuY2VzS2V5ID0gYGdsb2JhbC0ke3NsdWd9YDtcbiAgfVxuXG4gIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgc2x1ZyA9IGNvbGxlY3Rpb24uc2x1ZztcbiAgICBwbHVyYWxUeXBlID0gJ2NvbGxlY3Rpb25zJztcblxuICAgIGlmIChpZCkge1xuICAgICAgcHJlZmVyZW5jZXNLZXkgPSBgY29sbGVjdGlvbi0ke3NsdWd9LSR7aWR9YDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRWZXJzaW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdmVyc2lvbkZldGNoVVJMO1xuICAgIGxldCBwdWJsaXNoZWRGZXRjaFVSTDtcbiAgICBsZXQgZHJhZnRzRW5hYmxlZCA9IGZhbHNlO1xuICAgIGxldCBzaG91bGRGZXRjaFZlcnNpb25zID0gZmFsc2U7XG4gICAgbGV0IHVucHVibGlzaGVkVmVyc2lvbkpTT04gPSBudWxsO1xuICAgIGxldCB2ZXJzaW9uSlNPTiA9IG51bGw7XG4gICAgbGV0IHNob3VsZEZldGNoID0gdHJ1ZTtcblxuICAgIGNvbnN0IHZlcnNpb25QYXJhbXMgPSB7XG4gICAgICB3aGVyZToge1xuICAgICAgICBhbmQ6IFtdLFxuICAgICAgfSxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCBwdWJsaXNoZWRWZXJzaW9uUGFyYW1zOiB7IHdoZXJlOiBXaGVyZSwgZGVwdGg6IG51bWJlciB9ID0ge1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgYW5kOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3I6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9zdGF0dXM6IHtcbiAgICAgICAgICAgICAgICAgIGVxdWFsczogJ3B1Ymxpc2hlZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9zdGF0dXM6IHtcbiAgICAgICAgICAgICAgICAgIGV4aXN0czogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBkZXB0aDogMCxcbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbCkge1xuICAgICAgZHJhZnRzRW5hYmxlZCA9IEJvb2xlYW4oZ2xvYmFsPy52ZXJzaW9ucz8uZHJhZnRzKTtcbiAgICAgIHNob3VsZEZldGNoVmVyc2lvbnMgPSBCb29sZWFuKGdsb2JhbD8udmVyc2lvbnMpO1xuICAgICAgdmVyc2lvbkZldGNoVVJMID0gYCR7YmFzZVVSTH0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9uc2A7XG4gICAgICBwdWJsaXNoZWRGZXRjaFVSTCA9IGAke2Jhc2VVUkx9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30/JHtxcy5zdHJpbmdpZnkocHVibGlzaGVkVmVyc2lvblBhcmFtcyl9YDtcbiAgICB9XG5cbiAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgZHJhZnRzRW5hYmxlZCA9IEJvb2xlYW4oY29sbGVjdGlvbj8udmVyc2lvbnM/LmRyYWZ0cyk7XG4gICAgICBzaG91bGRGZXRjaFZlcnNpb25zID0gQm9vbGVhbihjb2xsZWN0aW9uPy52ZXJzaW9ucyk7XG4gICAgICB2ZXJzaW9uRmV0Y2hVUkwgPSBgJHtiYXNlVVJMfS8ke2NvbGxlY3Rpb24uc2x1Z30vdmVyc2lvbnNgO1xuXG4gICAgICBwdWJsaXNoZWRWZXJzaW9uUGFyYW1zLndoZXJlLmFuZC5wdXNoKHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICBlcXVhbHM6IGlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHB1Ymxpc2hlZEZldGNoVVJMID0gYCR7YmFzZVVSTH0vJHtjb2xsZWN0aW9uLnNsdWd9PyR7cXMuc3RyaW5naWZ5KHB1Ymxpc2hlZFZlcnNpb25QYXJhbXMpfWA7XG5cbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgc2hvdWxkRmV0Y2ggPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmVyc2lvblBhcmFtcy53aGVyZS5hbmQucHVzaCh7XG4gICAgICAgIHBhcmVudDoge1xuICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkRmV0Y2gpIHtcbiAgICAgIGxldCBwdWJsaXNoZWRKU09OO1xuXG4gICAgICBpZiAoZHJhZnRzRW5hYmxlZCkge1xuICAgICAgICBwdWJsaXNoZWRKU09OID0gYXdhaXQgZmV0Y2gocHVibGlzaGVkRmV0Y2hVUkwsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICAgICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICBwdWJsaXNoZWRKU09OID0gcHVibGlzaGVkSlNPTj8uZG9jcz8uWzBdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRGZXRjaFZlcnNpb25zKSB7XG4gICAgICAgIHZlcnNpb25KU09OID0gYXdhaXQgZmV0Y2goYCR7dmVyc2lvbkZldGNoVVJMfT8ke3FzLnN0cmluZ2lmeSh2ZXJzaW9uUGFyYW1zKX1gLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgICAgIGlmIChwdWJsaXNoZWRKU09OPy51cGRhdGVkQXQpIHtcbiAgICAgICAgICBjb25zdCBuZXdlclZlcnNpb25QYXJhbXMgPSB7XG4gICAgICAgICAgICAuLi52ZXJzaW9uUGFyYW1zLFxuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgLi4udmVyc2lvblBhcmFtcy53aGVyZSxcbiAgICAgICAgICAgICAgYW5kOiBbXG4gICAgICAgICAgICAgICAgLi4udmVyc2lvblBhcmFtcy53aGVyZS5hbmQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlZEF0OiB7XG4gICAgICAgICAgICAgICAgICAgIGdyZWF0ZXJfdGhhbjogcHVibGlzaGVkSlNPTj8udXBkYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gR2V0IGFueSBuZXdlciB2ZXJzaW9ucyBhdmFpbGFibGVcbiAgICAgICAgICBjb25zdCBuZXdlclZlcnNpb25SZXMgPSBhd2FpdCBmZXRjaChgJHt2ZXJzaW9uRmV0Y2hVUkx9PyR7cXMuc3RyaW5naWZ5KG5ld2VyVmVyc2lvblBhcmFtcyl9YCwge1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5ld2VyVmVyc2lvblJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgdW5wdWJsaXNoZWRWZXJzaW9uSlNPTiA9IGF3YWl0IG5ld2VyVmVyc2lvblJlcy5qc29uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFB1Ymxpc2hlZERvYyhwdWJsaXNoZWRKU09OKTtcbiAgICAgIHNldFZlcnNpb25zKHZlcnNpb25KU09OKTtcbiAgICAgIHNldFVucHVibGlzaGVkVmVyc2lvbnModW5wdWJsaXNoZWRWZXJzaW9uSlNPTik7XG4gICAgfVxuICB9LCBbaTE4biwgZ2xvYmFsLCBjb2xsZWN0aW9uLCBpZCwgYmFzZVVSTF0pO1xuXG4gIGNvbnN0IGdldERvY1Blcm1pc3Npb25zID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGxldCBkb2NBY2Nlc3NVUkw6IHN0cmluZztcbiAgICBpZiAocGx1cmFsVHlwZSA9PT0gJ2dsb2JhbHMnKSB7XG4gICAgICBkb2NBY2Nlc3NVUkwgPSBgL2dsb2JhbHMvJHtzbHVnfS9hY2Nlc3NgO1xuICAgIH0gZWxzZSBpZiAocGx1cmFsVHlwZSA9PT0gJ2NvbGxlY3Rpb25zJyAmJiBpZCkge1xuICAgICAgZG9jQWNjZXNzVVJMID0gYC8ke3NsdWd9L2FjY2Vzcy8ke2lkfWA7XG4gICAgfVxuXG4gICAgaWYgKGRvY0FjY2Vzc1VSTCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyVVJMfSR7YXBpfSR7ZG9jQWNjZXNzVVJMfWAsIHtcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldERvY1Blcm1pc3Npb25zKGpzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmYWxsYmFjayB0byBwZXJtaXNzaW9ucyBmcm9tIHRoZSBlbnRpdHkgdHlwZVxuICAgICAgLy8gKGkuZS4gY3JlYXRlIGhhcyBubyBpZClcbiAgICAgIHNldERvY1Blcm1pc3Npb25zKHBlcm1pc3Npb25zW3BsdXJhbFR5cGVdW3NsdWddKTtcbiAgICB9XG4gIH0sIFtzZXJ2ZXJVUkwsIGFwaSwgcGx1cmFsVHlwZSwgc2x1ZywgaWQsIHBlcm1pc3Npb25zLCBpMThuLmxhbmd1YWdlXSk7XG5cbiAgY29uc3QgZ2V0RG9jUHJlZmVyZW5jZXMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFByZWZlcmVuY2U8RG9jdW1lbnRQcmVmZXJlbmNlcz4ocHJlZmVyZW5jZXNLZXkpO1xuICB9LCBbZ2V0UHJlZmVyZW5jZSwgcHJlZmVyZW5jZXNLZXldKTtcblxuICBjb25zdCBzZXREb2NGaWVsZFByZWZlcmVuY2VzID0gdXNlQ2FsbGJhY2s8Q29udGV4dFR5cGVbJ3NldERvY0ZpZWxkUHJlZmVyZW5jZXMnXT4oYXN5bmMgKHBhdGgsIGZpZWxkUHJlZmVyZW5jZXMpID0+IHtcbiAgICBjb25zdCBhbGxQcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKCk7XG5cbiAgICBpZiAocHJlZmVyZW5jZXNLZXkpIHtcbiAgICAgIHNldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXksIHtcbiAgICAgICAgLi4uYWxsUHJlZmVyZW5jZXMsXG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIC4uLihhbGxQcmVmZXJlbmNlcz8uZmllbGRzIHx8IHt9KSxcbiAgICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAgIC4uLmFsbFByZWZlcmVuY2VzPy5maWVsZHM/LltwYXRoXSxcbiAgICAgICAgICAgIC4uLmZpZWxkUHJlZmVyZW5jZXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NldFByZWZlcmVuY2UsIHByZWZlcmVuY2VzS2V5LCBnZXREb2NQcmVmZXJlbmNlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VmVyc2lvbnMoKTtcbiAgfSwgW2dldFZlcnNpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREb2NQZXJtaXNzaW9ucygpO1xuICB9LCBbZ2V0RG9jUGVybWlzc2lvbnNdKTtcblxuICBjb25zdCB2YWx1ZTogQ29udGV4dFR5cGUgPSB7XG4gICAgc2x1ZyxcbiAgICBwcmVmZXJlbmNlc0tleSxcbiAgICBnbG9iYWwsXG4gICAgY29sbGVjdGlvbixcbiAgICB2ZXJzaW9ucyxcbiAgICB1bnB1Ymxpc2hlZFZlcnNpb25zLFxuICAgIGdldFZlcnNpb25zLFxuICAgIHB1Ymxpc2hlZERvYyxcbiAgICBpZCxcbiAgICBnZXREb2NQZXJtaXNzaW9ucyxcbiAgICBkb2NQZXJtaXNzaW9ucyxcbiAgICBzZXREb2NGaWVsZFByZWZlcmVuY2VzLFxuICAgIGdldERvY1ByZWZlcmVuY2VzLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZURvY3VtZW50SW5mbyIsIkRvY3VtZW50SW5mb1Byb3ZpZGVyIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY2hpbGRyZW4iLCJnbG9iYWwiLCJjb2xsZWN0aW9uIiwiaWQiLCJpZEZyb21Qcm9wcyIsImlkRnJvbVBhcmFtcyIsImdldElERnJvbVBhcmFtcyIsInVzZVBhcmFtcyIsInVzZUNvbmZpZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInVzZVByZWZlcmVuY2VzIiwiZ2V0UHJlZmVyZW5jZSIsInNldFByZWZlcmVuY2UiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJwZXJtaXNzaW9ucyIsInVzZUF1dGgiLCJ1c2VTdGF0ZSIsInB1Ymxpc2hlZERvYyIsInNldFB1Ymxpc2hlZERvYyIsInZlcnNpb25zIiwic2V0VmVyc2lvbnMiLCJ1bnB1Ymxpc2hlZFZlcnNpb25zIiwic2V0VW5wdWJsaXNoZWRWZXJzaW9ucyIsImRvY1Blcm1pc3Npb25zIiwic2V0RG9jUGVybWlzc2lvbnMiLCJiYXNlVVJMIiwic2x1ZyIsInBsdXJhbFR5cGUiLCJwcmVmZXJlbmNlc0tleSIsImdldFZlcnNpb25zIiwidXNlQ2FsbGJhY2siLCJ2ZXJzaW9uRmV0Y2hVUkwiLCJwdWJsaXNoZWRGZXRjaFVSTCIsImRyYWZ0c0VuYWJsZWQiLCJzaG91bGRGZXRjaFZlcnNpb25zIiwidW5wdWJsaXNoZWRWZXJzaW9uSlNPTiIsInZlcnNpb25KU09OIiwic2hvdWxkRmV0Y2giLCJ2ZXJzaW9uUGFyYW1zIiwicHVibGlzaGVkVmVyc2lvblBhcmFtcyIsInB1Ymxpc2hlZEpTT04iLCJuZXdlclZlcnNpb25QYXJhbXMiLCJuZXdlclZlcnNpb25SZXMiLCJ3aGVyZSIsImFuZCIsImRlcHRoIiwib3IiLCJfc3RhdHVzIiwiZXF1YWxzIiwiZXhpc3RzIiwiQm9vbGVhbiIsImRyYWZ0cyIsInFzIiwic3RyaW5naWZ5IiwicHVzaCIsInBhcmVudCIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJ0aGVuIiwicmVzIiwianNvbiIsImRvY3MiLCJ1cGRhdGVkQXQiLCJncmVhdGVyX3RoYW4iLCJzdGF0dXMiLCJnZXREb2NQZXJtaXNzaW9ucyIsIlJlYWN0IiwiZG9jQWNjZXNzVVJMIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJzZXREb2NGaWVsZFByZWZlcmVuY2VzIiwicGF0aCIsImZpZWxkUHJlZmVyZW5jZXMiLCJhbGxQcmVmZXJlbmNlcyIsImZpZWxkcyIsInVzZUVmZmVjdCIsInZhbHVlIiwiUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBa0JhQSxlQUFlO2VB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