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
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import qs from "qs";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useConfig } from "../Config";
import { usePreferences } from "../Preferences";
import { useAuth } from "../Auth";
var Context = /*#__PURE__*/ createContext({});
export var useDocumentInfo = function() {
    return useContext(Context);
};
export var DocumentInfoProvider = function(param) {
    var children = param.children, global = param.global, collection = param.collection, idFromProps = param.id, getIDFromParams = param.idFromParams;
    var _useParams = useParams(), idFromParams = _useParams.id;
    var id = idFromProps || (getIDFromParams ? idFromParams : null);
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var _usePreferences = usePreferences(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var i18n = useTranslation().i18n;
    var permissions = useAuth().permissions;
    var _useState = _sliced_to_array(useState(null), 2), publishedDoc = _useState[0], setPublishedDoc = _useState[1];
    var _useState1 = _sliced_to_array(useState(null), 2), versions = _useState1[0], setVersions = _useState1[1];
    var _useState2 = _sliced_to_array(useState(null), 2), unpublishedVersions = _useState2[0], setUnpublishedVersions = _useState2[1];
    var _useState3 = _sliced_to_array(useState(null), 2), docPermissions = _useState3[0], setDocPermissions = _useState3[1];
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
    var getVersions = useCallback(/*#__PURE__*/ _async_to_generator(function() {
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
                        publishedFetchURL = "".concat(baseURL, "/globals/").concat(global.slug, "?").concat(qs.stringify(publishedVersionParams));
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
                        publishedFetchURL = "".concat(baseURL, "/").concat(collection.slug, "?").concat(qs.stringify(publishedVersionParams));
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
                        fetch("".concat(versionFetchURL, "?").concat(qs.stringify(versionParams)), {
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
                        fetch("".concat(versionFetchURL, "?").concat(qs.stringify(newerVersionParams)), {
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
    var getDocPermissions = React.useCallback(/*#__PURE__*/ _async_to_generator(function() {
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
    var getDocPreferences = useCallback(/*#__PURE__*/ _async_to_generator(function() {
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
    var setDocFieldPreferences = useCallback(function() {
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
    useEffect(function() {
        getVersions();
    }, [
        getVersions
    ]);
    useEffect(function() {
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
    return /*#__PURE__*/ React.createElement(Context.Provider, {
        value: value
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9Eb2N1bWVudEluZm8vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uL0NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7IFBhZ2luYXRlZERvY3MgfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5pbXBvcnQgeyBDb250ZXh0VHlwZSwgRG9jdW1lbnRQZXJtaXNzaW9ucywgUHJvcHMsIFZlcnNpb24gfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFR5cGVXaXRoSUQgfSBmcm9tICcuLi8uLi8uLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBUeXBlV2l0aFRpbWVzdGFtcHMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBEb2N1bWVudFByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJlZmVyZW5jZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXNlUHJlZmVyZW5jZXMgfSBmcm9tICcuLi9QcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vQXV0aCc7XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENvbnRleHRUeXBlKTtcblxuZXhwb3J0IGNvbnN0IHVzZURvY3VtZW50SW5mbyA9ICgpOiBDb250ZXh0VHlwZSA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xuXG5leHBvcnQgY29uc3QgRG9jdW1lbnRJbmZvUHJvdmlkZXI6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBnbG9iYWwsXG4gIGNvbGxlY3Rpb24sXG4gIGlkOiBpZEZyb21Qcm9wcyxcbiAgaWRGcm9tUGFyYW1zOiBnZXRJREZyb21QYXJhbXMsXG59KSA9PiB7XG4gIGNvbnN0IHsgaWQ6IGlkRnJvbVBhcmFtcyB9ID0gdXNlUGFyYW1zPHtpZDogc3RyaW5nfT4oKTtcbiAgY29uc3QgaWQgPSBpZEZyb21Qcm9wcyB8fCAoZ2V0SURGcm9tUGFyYW1zID8gaWRGcm9tUGFyYW1zIDogbnVsbCk7XG5cbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGkgfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFtwdWJsaXNoZWREb2MsIHNldFB1Ymxpc2hlZERvY10gPSB1c2VTdGF0ZTxUeXBlV2l0aElEICYgVHlwZVdpdGhUaW1lc3RhbXBzPihudWxsKTtcbiAgY29uc3QgW3ZlcnNpb25zLCBzZXRWZXJzaW9uc10gPSB1c2VTdGF0ZTxQYWdpbmF0ZWREb2NzPFZlcnNpb24+PihudWxsKTtcbiAgY29uc3QgW3VucHVibGlzaGVkVmVyc2lvbnMsIHNldFVucHVibGlzaGVkVmVyc2lvbnNdID0gdXNlU3RhdGU8UGFnaW5hdGVkRG9jczxWZXJzaW9uPj4obnVsbCk7XG4gIGNvbnN0IFtkb2NQZXJtaXNzaW9ucywgc2V0RG9jUGVybWlzc2lvbnNdID0gdXNlU3RhdGU8RG9jdW1lbnRQZXJtaXNzaW9ucz4obnVsbCk7XG5cbiAgY29uc3QgYmFzZVVSTCA9IGAke3NlcnZlclVSTH0ke2FwaX1gO1xuICBsZXQgc2x1Zzogc3RyaW5nO1xuICBsZXQgcGx1cmFsVHlwZTogJ2dsb2JhbHMnIHwgJ2NvbGxlY3Rpb25zJztcbiAgbGV0IHByZWZlcmVuY2VzS2V5OiBzdHJpbmc7XG5cbiAgaWYgKGdsb2JhbCkge1xuICAgIHNsdWcgPSBnbG9iYWwuc2x1ZztcbiAgICBwbHVyYWxUeXBlID0gJ2dsb2JhbHMnO1xuICAgIHByZWZlcmVuY2VzS2V5ID0gYGdsb2JhbC0ke3NsdWd9YDtcbiAgfVxuXG4gIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgc2x1ZyA9IGNvbGxlY3Rpb24uc2x1ZztcbiAgICBwbHVyYWxUeXBlID0gJ2NvbGxlY3Rpb25zJztcblxuICAgIGlmIChpZCkge1xuICAgICAgcHJlZmVyZW5jZXNLZXkgPSBgY29sbGVjdGlvbi0ke3NsdWd9LSR7aWR9YDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBnZXRWZXJzaW9ucyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBsZXQgdmVyc2lvbkZldGNoVVJMO1xuICAgIGxldCBwdWJsaXNoZWRGZXRjaFVSTDtcbiAgICBsZXQgZHJhZnRzRW5hYmxlZCA9IGZhbHNlO1xuICAgIGxldCBzaG91bGRGZXRjaFZlcnNpb25zID0gZmFsc2U7XG4gICAgbGV0IHVucHVibGlzaGVkVmVyc2lvbkpTT04gPSBudWxsO1xuICAgIGxldCB2ZXJzaW9uSlNPTiA9IG51bGw7XG4gICAgbGV0IHNob3VsZEZldGNoID0gdHJ1ZTtcblxuICAgIGNvbnN0IHZlcnNpb25QYXJhbXMgPSB7XG4gICAgICB3aGVyZToge1xuICAgICAgICBhbmQ6IFtdLFxuICAgICAgfSxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCBwdWJsaXNoZWRWZXJzaW9uUGFyYW1zOiB7IHdoZXJlOiBXaGVyZSwgZGVwdGg6IG51bWJlciB9ID0ge1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgYW5kOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgb3I6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9zdGF0dXM6IHtcbiAgICAgICAgICAgICAgICAgIGVxdWFsczogJ3B1Ymxpc2hlZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9zdGF0dXM6IHtcbiAgICAgICAgICAgICAgICAgIGV4aXN0czogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBkZXB0aDogMCxcbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbCkge1xuICAgICAgZHJhZnRzRW5hYmxlZCA9IEJvb2xlYW4oZ2xvYmFsPy52ZXJzaW9ucz8uZHJhZnRzKTtcbiAgICAgIHNob3VsZEZldGNoVmVyc2lvbnMgPSBCb29sZWFuKGdsb2JhbD8udmVyc2lvbnMpO1xuICAgICAgdmVyc2lvbkZldGNoVVJMID0gYCR7YmFzZVVSTH0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9uc2A7XG4gICAgICBwdWJsaXNoZWRGZXRjaFVSTCA9IGAke2Jhc2VVUkx9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30/JHtxcy5zdHJpbmdpZnkocHVibGlzaGVkVmVyc2lvblBhcmFtcyl9YDtcbiAgICB9XG5cbiAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgZHJhZnRzRW5hYmxlZCA9IEJvb2xlYW4oY29sbGVjdGlvbj8udmVyc2lvbnM/LmRyYWZ0cyk7XG4gICAgICBzaG91bGRGZXRjaFZlcnNpb25zID0gQm9vbGVhbihjb2xsZWN0aW9uPy52ZXJzaW9ucyk7XG4gICAgICB2ZXJzaW9uRmV0Y2hVUkwgPSBgJHtiYXNlVVJMfS8ke2NvbGxlY3Rpb24uc2x1Z30vdmVyc2lvbnNgO1xuXG4gICAgICBwdWJsaXNoZWRWZXJzaW9uUGFyYW1zLndoZXJlLmFuZC5wdXNoKHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICBlcXVhbHM6IGlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHB1Ymxpc2hlZEZldGNoVVJMID0gYCR7YmFzZVVSTH0vJHtjb2xsZWN0aW9uLnNsdWd9PyR7cXMuc3RyaW5naWZ5KHB1Ymxpc2hlZFZlcnNpb25QYXJhbXMpfWA7XG5cbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgc2hvdWxkRmV0Y2ggPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmVyc2lvblBhcmFtcy53aGVyZS5hbmQucHVzaCh7XG4gICAgICAgIHBhcmVudDoge1xuICAgICAgICAgIGVxdWFsczogaWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkRmV0Y2gpIHtcbiAgICAgIGxldCBwdWJsaXNoZWRKU09OO1xuXG4gICAgICBpZiAoZHJhZnRzRW5hYmxlZCkge1xuICAgICAgICBwdWJsaXNoZWRKU09OID0gYXdhaXQgZmV0Y2gocHVibGlzaGVkRmV0Y2hVUkwsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICAgICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICBwdWJsaXNoZWRKU09OID0gcHVibGlzaGVkSlNPTj8uZG9jcz8uWzBdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRGZXRjaFZlcnNpb25zKSB7XG4gICAgICAgIHZlcnNpb25KU09OID0gYXdhaXQgZmV0Y2goYCR7dmVyc2lvbkZldGNoVVJMfT8ke3FzLnN0cmluZ2lmeSh2ZXJzaW9uUGFyYW1zKX1gLCB7XG4gICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gICAgICAgIGlmIChwdWJsaXNoZWRKU09OPy51cGRhdGVkQXQpIHtcbiAgICAgICAgICBjb25zdCBuZXdlclZlcnNpb25QYXJhbXMgPSB7XG4gICAgICAgICAgICAuLi52ZXJzaW9uUGFyYW1zLFxuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgLi4udmVyc2lvblBhcmFtcy53aGVyZSxcbiAgICAgICAgICAgICAgYW5kOiBbXG4gICAgICAgICAgICAgICAgLi4udmVyc2lvblBhcmFtcy53aGVyZS5hbmQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlZEF0OiB7XG4gICAgICAgICAgICAgICAgICAgIGdyZWF0ZXJfdGhhbjogcHVibGlzaGVkSlNPTj8udXBkYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gR2V0IGFueSBuZXdlciB2ZXJzaW9ucyBhdmFpbGFibGVcbiAgICAgICAgICBjb25zdCBuZXdlclZlcnNpb25SZXMgPSBhd2FpdCBmZXRjaChgJHt2ZXJzaW9uRmV0Y2hVUkx9PyR7cXMuc3RyaW5naWZ5KG5ld2VyVmVyc2lvblBhcmFtcyl9YCwge1xuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKG5ld2VyVmVyc2lvblJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgdW5wdWJsaXNoZWRWZXJzaW9uSlNPTiA9IGF3YWl0IG5ld2VyVmVyc2lvblJlcy5qc29uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldFB1Ymxpc2hlZERvYyhwdWJsaXNoZWRKU09OKTtcbiAgICAgIHNldFZlcnNpb25zKHZlcnNpb25KU09OKTtcbiAgICAgIHNldFVucHVibGlzaGVkVmVyc2lvbnModW5wdWJsaXNoZWRWZXJzaW9uSlNPTik7XG4gICAgfVxuICB9LCBbaTE4biwgZ2xvYmFsLCBjb2xsZWN0aW9uLCBpZCwgYmFzZVVSTF0pO1xuXG4gIGNvbnN0IGdldERvY1Blcm1pc3Npb25zID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGxldCBkb2NBY2Nlc3NVUkw6IHN0cmluZztcbiAgICBpZiAocGx1cmFsVHlwZSA9PT0gJ2dsb2JhbHMnKSB7XG4gICAgICBkb2NBY2Nlc3NVUkwgPSBgL2dsb2JhbHMvJHtzbHVnfS9hY2Nlc3NgO1xuICAgIH0gZWxzZSBpZiAocGx1cmFsVHlwZSA9PT0gJ2NvbGxlY3Rpb25zJyAmJiBpZCkge1xuICAgICAgZG9jQWNjZXNzVVJMID0gYC8ke3NsdWd9L2FjY2Vzcy8ke2lkfWA7XG4gICAgfVxuXG4gICAgaWYgKGRvY0FjY2Vzc1VSTCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyVVJMfSR7YXBpfSR7ZG9jQWNjZXNzVVJMfWAsIHtcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHNldERvY1Blcm1pc3Npb25zKGpzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmYWxsYmFjayB0byBwZXJtaXNzaW9ucyBmcm9tIHRoZSBlbnRpdHkgdHlwZVxuICAgICAgLy8gKGkuZS4gY3JlYXRlIGhhcyBubyBpZClcbiAgICAgIHNldERvY1Blcm1pc3Npb25zKHBlcm1pc3Npb25zW3BsdXJhbFR5cGVdW3NsdWddKTtcbiAgICB9XG4gIH0sIFtzZXJ2ZXJVUkwsIGFwaSwgcGx1cmFsVHlwZSwgc2x1ZywgaWQsIHBlcm1pc3Npb25zLCBpMThuLmxhbmd1YWdlXSk7XG5cbiAgY29uc3QgZ2V0RG9jUHJlZmVyZW5jZXMgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgcmV0dXJuIGdldFByZWZlcmVuY2U8RG9jdW1lbnRQcmVmZXJlbmNlcz4ocHJlZmVyZW5jZXNLZXkpO1xuICB9LCBbZ2V0UHJlZmVyZW5jZSwgcHJlZmVyZW5jZXNLZXldKTtcblxuICBjb25zdCBzZXREb2NGaWVsZFByZWZlcmVuY2VzID0gdXNlQ2FsbGJhY2s8Q29udGV4dFR5cGVbJ3NldERvY0ZpZWxkUHJlZmVyZW5jZXMnXT4oYXN5bmMgKHBhdGgsIGZpZWxkUHJlZmVyZW5jZXMpID0+IHtcbiAgICBjb25zdCBhbGxQcmVmZXJlbmNlcyA9IGF3YWl0IGdldERvY1ByZWZlcmVuY2VzKCk7XG5cbiAgICBpZiAocHJlZmVyZW5jZXNLZXkpIHtcbiAgICAgIHNldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXksIHtcbiAgICAgICAgLi4uYWxsUHJlZmVyZW5jZXMsXG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIC4uLihhbGxQcmVmZXJlbmNlcz8uZmllbGRzIHx8IHt9KSxcbiAgICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAgIC4uLmFsbFByZWZlcmVuY2VzPy5maWVsZHM/LltwYXRoXSxcbiAgICAgICAgICAgIC4uLmZpZWxkUHJlZmVyZW5jZXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NldFByZWZlcmVuY2UsIHByZWZlcmVuY2VzS2V5LCBnZXREb2NQcmVmZXJlbmNlc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VmVyc2lvbnMoKTtcbiAgfSwgW2dldFZlcnNpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREb2NQZXJtaXNzaW9ucygpO1xuICB9LCBbZ2V0RG9jUGVybWlzc2lvbnNdKTtcblxuICBjb25zdCB2YWx1ZTogQ29udGV4dFR5cGUgPSB7XG4gICAgc2x1ZyxcbiAgICBwcmVmZXJlbmNlc0tleSxcbiAgICBnbG9iYWwsXG4gICAgY29sbGVjdGlvbixcbiAgICB2ZXJzaW9ucyxcbiAgICB1bnB1Ymxpc2hlZFZlcnNpb25zLFxuICAgIGdldFZlcnNpb25zLFxuICAgIHB1Ymxpc2hlZERvYyxcbiAgICBpZCxcbiAgICBnZXREb2NQZXJtaXNzaW9ucyxcbiAgICBkb2NQZXJtaXNzaW9ucyxcbiAgICBzZXREb2NGaWVsZFByZWZlcmVuY2VzLFxuICAgIGdldERvY1ByZWZlcmVuY2VzLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicXMiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVBhcmFtcyIsInVzZUNvbmZpZyIsInVzZVByZWZlcmVuY2VzIiwidXNlQXV0aCIsIkNvbnRleHQiLCJ1c2VEb2N1bWVudEluZm8iLCJEb2N1bWVudEluZm9Qcm92aWRlciIsImNoaWxkcmVuIiwiZ2xvYmFsIiwiY29sbGVjdGlvbiIsImlkIiwiaWRGcm9tUHJvcHMiLCJpZEZyb21QYXJhbXMiLCJnZXRJREZyb21QYXJhbXMiLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJnZXRQcmVmZXJlbmNlIiwic2V0UHJlZmVyZW5jZSIsImkxOG4iLCJwZXJtaXNzaW9ucyIsInB1Ymxpc2hlZERvYyIsInNldFB1Ymxpc2hlZERvYyIsInZlcnNpb25zIiwic2V0VmVyc2lvbnMiLCJ1bnB1Ymxpc2hlZFZlcnNpb25zIiwic2V0VW5wdWJsaXNoZWRWZXJzaW9ucyIsImRvY1Blcm1pc3Npb25zIiwic2V0RG9jUGVybWlzc2lvbnMiLCJiYXNlVVJMIiwic2x1ZyIsInBsdXJhbFR5cGUiLCJwcmVmZXJlbmNlc0tleSIsImdldFZlcnNpb25zIiwidmVyc2lvbkZldGNoVVJMIiwicHVibGlzaGVkRmV0Y2hVUkwiLCJkcmFmdHNFbmFibGVkIiwic2hvdWxkRmV0Y2hWZXJzaW9ucyIsInVucHVibGlzaGVkVmVyc2lvbkpTT04iLCJ2ZXJzaW9uSlNPTiIsInNob3VsZEZldGNoIiwidmVyc2lvblBhcmFtcyIsInB1Ymxpc2hlZFZlcnNpb25QYXJhbXMiLCJwdWJsaXNoZWRKU09OIiwibmV3ZXJWZXJzaW9uUGFyYW1zIiwibmV3ZXJWZXJzaW9uUmVzIiwid2hlcmUiLCJhbmQiLCJkZXB0aCIsIm9yIiwiX3N0YXR1cyIsImVxdWFscyIsImV4aXN0cyIsIkJvb2xlYW4iLCJkcmFmdHMiLCJzdHJpbmdpZnkiLCJwdXNoIiwicGFyZW50IiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJsYW5ndWFnZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZG9jcyIsInVwZGF0ZWRBdCIsImdyZWF0ZXJfdGhhbiIsInN0YXR1cyIsImdldERvY1Blcm1pc3Npb25zIiwiZG9jQWNjZXNzVVJMIiwiZ2V0RG9jUHJlZmVyZW5jZXMiLCJzZXREb2NGaWVsZFByZWZlcmVuY2VzIiwicGF0aCIsImZpZWxkUHJlZmVyZW5jZXMiLCJhbGxQcmVmZXJlbmNlcyIsImZpZWxkcyIsInZhbHVlIiwiUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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