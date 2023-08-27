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
var _reactrouterdom = require("react-router-dom");
var _reacttoastify = require("react-toastify");
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _context = require("../../forms/Form/context");
var _Locale = require("../../utilities/Locale");
var _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("../../forms/Form/reduceFieldsToValues"));
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _useDebounce = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useDebounce"));
require("./index.scss");
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
var baseClass = "autosave";
var Autosave = function(param) {
    var collection = param.collection, global = param.global, id = param.id, publishedDocUpdatedAt = param.publishedDocUpdatedAt;
    var _collection, _collection_versions_drafts, _collection_versions, _global, _global_versions_drafts, _global_versions;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, _useConfig_routes = _useConfig.routes, api = _useConfig_routes.api, admin = _useConfig_routes.admin;
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), versions = _useDocumentInfo.versions, getVersions = _useDocumentInfo.getVersions;
    var _useAllFormFields = _sliced_to_array((0, _context.useAllFormFields)(), 1), fields = _useAllFormFields[0];
    var modified = (0, _context.useFormModified)();
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var replace = (0, _reactrouterdom.useHistory)().replace;
    var _useTranslation = (0, _reacti18next.useTranslation)("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var interval = 800;
    if (((_collection = collection) === null || _collection === void 0 ? void 0 : _collection.versions.drafts) && ((_collection_versions = collection.versions) === null || _collection_versions === void 0 ? void 0 : (_collection_versions_drafts = _collection_versions.drafts) === null || _collection_versions_drafts === void 0 ? void 0 : _collection_versions_drafts.autosave)) interval = collection.versions.drafts.autosave.interval;
    if (((_global = global) === null || _global === void 0 ? void 0 : _global.versions.drafts) && ((_global_versions = global.versions) === null || _global_versions === void 0 ? void 0 : (_global_versions_drafts = _global_versions.drafts) === null || _global_versions_drafts === void 0 ? void 0 : _global_versions_drafts.autosave)) interval = global.versions.drafts.autosave.interval;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), saving = _useState[0], setSaving = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(), 2), lastSaved = _useState1[0], setLastSaved = _useState1[1];
    var debouncedFields = (0, _useDebounce.default)(fields, interval);
    var fieldRef = (0, _react.useRef)(fields);
    var modifiedRef = (0, _react.useRef)(modified);
    var localeRef = (0, _react.useRef)(locale);
    // Store fields in ref so the autosave func
    // can always retrieve the most to date copies
    // after the timeout has executed
    fieldRef.current = fields;
    // Store modified in ref so the autosave func
    // can bail out if modified becomes false while
    // timing out during autosave
    modifiedRef.current = modified;
    var createCollectionDoc = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var res, json;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetch("".concat(serverURL).concat(api, "/").concat(collection.slug, "?locale=").concat(locale, "&fallback-locale=null&depth=0&draft=true&autosave=true"), {
                            method: "POST",
                            credentials: "include",
                            headers: {
                                "Content-Type": "application/json",
                                "Accept-Language": i18n.language
                            },
                            body: JSON.stringify({})
                        })
                    ];
                case 1:
                    res = _state.sent();
                    if (!(res.status === 201)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        res.json()
                    ];
                case 2:
                    json = _state.sent();
                    replace("".concat(admin, "/collections/").concat(collection.slug, "/").concat(json.doc.id), {
                        state: {
                            data: json.doc
                        }
                    });
                    return [
                        3,
                        4
                    ];
                case 3:
                    _reacttoastify.toast.error(t("error:autosaving"));
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    }), [
        i18n,
        serverURL,
        api,
        collection,
        locale,
        replace,
        admin,
        t
    ]);
    (0, _react.useEffect)(function() {
        // If no ID, but this is used for a collection doc,
        // Immediately save it and set lastSaved
        if (!id && collection) {
            createCollectionDoc();
        }
    }, [
        id,
        collection,
        createCollectionDoc
    ]);
    // When debounced fields change, autosave
    (0, _react.useEffect)(function() {
        var autosave = function() {
            var _ref = _async_to_generator(function() {
                var url, method;
                return _ts_generator(this, function(_state) {
                    if (modified) {
                        setSaving(true);
                        ;
                        ;
                        if (collection && id) {
                            url = "".concat(serverURL).concat(api, "/").concat(collection.slug, "/").concat(id, "?draft=true&autosave=true&locale=").concat(localeRef.current);
                            method = "PATCH";
                        }
                        if (global) {
                            url = "".concat(serverURL).concat(api, "/globals/").concat(global.slug, "?draft=true&autosave=true&locale=").concat(localeRef.current);
                            method = "POST";
                        }
                        if (url) {
                            setTimeout(/*#__PURE__*/ _async_to_generator(function() {
                                var body, res;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (!modifiedRef.current) return [
                                                3,
                                                2
                                            ];
                                            body = _object_spread_props(_object_spread({}, (0, _reduceFieldsToValues.default)(fieldRef.current, true)), {
                                                _status: "draft"
                                            });
                                            return [
                                                4,
                                                fetch(url, {
                                                    method: method,
                                                    credentials: "include",
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "Accept-Language": i18n.language
                                                    },
                                                    body: JSON.stringify(body)
                                                })
                                            ];
                                        case 1:
                                            res = _state.sent();
                                            if (res.status === 200) {
                                                setLastSaved(new Date().getTime());
                                                getVersions();
                                            }
                                            _state.label = 2;
                                        case 2:
                                            setSaving(false);
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), 1000);
                        }
                    }
                    return [
                        2
                    ];
                });
            });
            return function autosave() {
                return _ref.apply(this, arguments);
            };
        }();
        autosave();
    }, [
        i18n,
        debouncedFields,
        modified,
        serverURL,
        api,
        collection,
        global,
        id,
        getVersions,
        localeRef,
        modifiedRef
    ]);
    (0, _react.useEffect)(function() {
        var _versions_docs, _versions;
        if ((_versions = versions) === null || _versions === void 0 ? void 0 : (_versions_docs = _versions.docs) === null || _versions_docs === void 0 ? void 0 : _versions_docs[0]) {
            setLastSaved(new Date(versions.docs[0].updatedAt).getTime());
        } else if (publishedDocUpdatedAt) {
            setLastSaved(new Date(publishedDocUpdatedAt).getTime());
        }
    }, [
        publishedDocUpdatedAt,
        versions
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, saving && t("saving"), !saving && lastSaved && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, t("lastSavedAgo", {
        distance: Math.round((Number(new Date(lastSaved)) - Number(new Date())) / 1000 / 60)
    })));
};
var _default = Autosave;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0F1dG9zYXZlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgdXNlRm9ybU1vZGlmaWVkLCB1c2VBbGxGb3JtRmllbGRzIH0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Mb2NhbGUnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL3JlZHVjZUZpZWxkc1RvVmFsdWVzJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZURlYm91bmNlJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnYXV0b3NhdmUnO1xuXG5jb25zdCBBdXRvc2F2ZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY29sbGVjdGlvbiwgZ2xvYmFsLCBpZCwgcHVibGlzaGVkRG9jVXBkYXRlZEF0IH0pID0+IHtcbiAgY29uc3QgeyBzZXJ2ZXJVUkwsIHJvdXRlczogeyBhcGksIGFkbWluIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHZlcnNpb25zLCBnZXRWZXJzaW9ucyB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IFtmaWVsZHNdID0gdXNlQWxsRm9ybUZpZWxkcygpO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgcmVwbGFjZSB9ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJyk7XG5cbiAgbGV0IGludGVydmFsID0gODAwO1xuICBpZiAoY29sbGVjdGlvbj8udmVyc2lvbnMuZHJhZnRzICYmIGNvbGxlY3Rpb24udmVyc2lvbnM/LmRyYWZ0cz8uYXV0b3NhdmUpIGludGVydmFsID0gY29sbGVjdGlvbi52ZXJzaW9ucy5kcmFmdHMuYXV0b3NhdmUuaW50ZXJ2YWw7XG4gIGlmIChnbG9iYWw/LnZlcnNpb25zLmRyYWZ0cyAmJiBnbG9iYWwudmVyc2lvbnM/LmRyYWZ0cz8uYXV0b3NhdmUpIGludGVydmFsID0gZ2xvYmFsLnZlcnNpb25zLmRyYWZ0cy5hdXRvc2F2ZS5pbnRlcnZhbDtcblxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbGFzdFNhdmVkLCBzZXRMYXN0U2F2ZWRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuICBjb25zdCBkZWJvdW5jZWRGaWVsZHMgPSB1c2VEZWJvdW5jZShmaWVsZHMsIGludGVydmFsKTtcbiAgY29uc3QgZmllbGRSZWYgPSB1c2VSZWYoZmllbGRzKTtcbiAgY29uc3QgbW9kaWZpZWRSZWYgPSB1c2VSZWYobW9kaWZpZWQpO1xuICBjb25zdCBsb2NhbGVSZWYgPSB1c2VSZWYobG9jYWxlKTtcblxuICAvLyBTdG9yZSBmaWVsZHMgaW4gcmVmIHNvIHRoZSBhdXRvc2F2ZSBmdW5jXG4gIC8vIGNhbiBhbHdheXMgcmV0cmlldmUgdGhlIG1vc3QgdG8gZGF0ZSBjb3BpZXNcbiAgLy8gYWZ0ZXIgdGhlIHRpbWVvdXQgaGFzIGV4ZWN1dGVkXG4gIGZpZWxkUmVmLmN1cnJlbnQgPSBmaWVsZHM7XG5cbiAgLy8gU3RvcmUgbW9kaWZpZWQgaW4gcmVmIHNvIHRoZSBhdXRvc2F2ZSBmdW5jXG4gIC8vIGNhbiBiYWlsIG91dCBpZiBtb2RpZmllZCBiZWNvbWVzIGZhbHNlIHdoaWxlXG4gIC8vIHRpbWluZyBvdXQgZHVyaW5nIGF1dG9zYXZlXG4gIG1vZGlmaWVkUmVmLmN1cnJlbnQgPSBtb2RpZmllZDtcblxuICBjb25zdCBjcmVhdGVDb2xsZWN0aW9uRG9jID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3NlcnZlclVSTH0ke2FwaX0vJHtjb2xsZWN0aW9uLnNsdWd9P2xvY2FsZT0ke2xvY2FsZX0mZmFsbGJhY2stbG9jYWxlPW51bGwmZGVwdGg9MCZkcmFmdD10cnVlJmF1dG9zYXZlPXRydWVgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt9KSxcbiAgICB9KTtcblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgcmVwbGFjZShgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtjb2xsZWN0aW9uLnNsdWd9LyR7anNvbi5kb2MuaWR9YCwge1xuICAgICAgICBzdGF0ZToge1xuICAgICAgICAgIGRhdGE6IGpzb24uZG9jLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yOmF1dG9zYXZpbmcnKSk7XG4gICAgfVxuICB9LCBbaTE4biwgc2VydmVyVVJMLCBhcGksIGNvbGxlY3Rpb24sIGxvY2FsZSwgcmVwbGFjZSwgYWRtaW4sIHRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIElmIG5vIElELCBidXQgdGhpcyBpcyB1c2VkIGZvciBhIGNvbGxlY3Rpb24gZG9jLFxuICAgIC8vIEltbWVkaWF0ZWx5IHNhdmUgaXQgYW5kIHNldCBsYXN0U2F2ZWRcbiAgICBpZiAoIWlkICYmIGNvbGxlY3Rpb24pIHtcbiAgICAgIGNyZWF0ZUNvbGxlY3Rpb25Eb2MoKTtcbiAgICB9XG4gIH0sIFtpZCwgY29sbGVjdGlvbiwgY3JlYXRlQ29sbGVjdGlvbkRvY10pO1xuXG4gIC8vIFdoZW4gZGVib3VuY2VkIGZpZWxkcyBjaGFuZ2UsIGF1dG9zYXZlXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhdXRvc2F2ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChtb2RpZmllZCkge1xuICAgICAgICBzZXRTYXZpbmcodHJ1ZSk7XG5cbiAgICAgICAgbGV0IHVybDogc3RyaW5nO1xuICAgICAgICBsZXQgbWV0aG9kOiBzdHJpbmc7XG5cbiAgICAgICAgaWYgKGNvbGxlY3Rpb24gJiYgaWQpIHtcbiAgICAgICAgICB1cmwgPSBgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7Y29sbGVjdGlvbi5zbHVnfS8ke2lkfT9kcmFmdD10cnVlJmF1dG9zYXZlPXRydWUmbG9jYWxlPSR7bG9jYWxlUmVmLmN1cnJlbnR9YDtcbiAgICAgICAgICBtZXRob2QgPSAnUEFUQ0gnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICAgIHVybCA9IGAke3NlcnZlclVSTH0ke2FwaX0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfT9kcmFmdD10cnVlJmF1dG9zYXZlPXRydWUmbG9jYWxlPSR7bG9jYWxlUmVmLmN1cnJlbnR9YDtcbiAgICAgICAgICBtZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobW9kaWZpZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgICAgIC4uLnJlZHVjZUZpZWxkc1RvVmFsdWVzKGZpZWxkUmVmLmN1cnJlbnQsIHRydWUpLFxuICAgICAgICAgICAgICAgIF9zdGF0dXM6ICdkcmFmdCcsXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBzZXRMYXN0U2F2ZWQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICAgICAgICAgICAgICAgIGdldFZlcnNpb25zKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0U2F2aW5nKGZhbHNlKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBhdXRvc2F2ZSgpO1xuICB9LCBbaTE4biwgZGVib3VuY2VkRmllbGRzLCBtb2RpZmllZCwgc2VydmVyVVJMLCBhcGksIGNvbGxlY3Rpb24sIGdsb2JhbCwgaWQsIGdldFZlcnNpb25zLCBsb2NhbGVSZWYsIG1vZGlmaWVkUmVmXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmVyc2lvbnM/LmRvY3M/LlswXSkge1xuICAgICAgc2V0TGFzdFNhdmVkKG5ldyBEYXRlKHZlcnNpb25zLmRvY3NbMF0udXBkYXRlZEF0KS5nZXRUaW1lKCkpO1xuICAgIH0gZWxzZSBpZiAocHVibGlzaGVkRG9jVXBkYXRlZEF0KSB7XG4gICAgICBzZXRMYXN0U2F2ZWQobmV3IERhdGUocHVibGlzaGVkRG9jVXBkYXRlZEF0KS5nZXRUaW1lKCkpO1xuICAgIH1cbiAgfSwgW3B1Ymxpc2hlZERvY1VwZGF0ZWRBdCwgdmVyc2lvbnNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAge3NhdmluZyAmJiB0KCdzYXZpbmcnKX1cbiAgICAgIHsoIXNhdmluZyAmJiBsYXN0U2F2ZWQpICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHt0KCdsYXN0U2F2ZWRBZ28nLCB7XG4gICAgICAgICAgICBkaXN0YW5jZTogTWF0aC5yb3VuZCgoTnVtYmVyKG5ldyBEYXRlKGxhc3RTYXZlZCkpIC0gTnVtYmVyKG5ldyBEYXRlKCkpKSAvIDEwMDAgLyA2MCksXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0b3NhdmU7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiQXV0b3NhdmUiLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiaWQiLCJwdWJsaXNoZWREb2NVcGRhdGVkQXQiLCJ1c2VDb25maWciLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJhZG1pbiIsInVzZURvY3VtZW50SW5mbyIsInZlcnNpb25zIiwiZ2V0VmVyc2lvbnMiLCJ1c2VBbGxGb3JtRmllbGRzIiwiZmllbGRzIiwibW9kaWZpZWQiLCJ1c2VGb3JtTW9kaWZpZWQiLCJ1c2VMb2NhbGUiLCJjb2RlIiwibG9jYWxlIiwicmVwbGFjZSIsInVzZUhpc3RvcnkiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwiaW50ZXJ2YWwiLCJkcmFmdHMiLCJhdXRvc2F2ZSIsInVzZVN0YXRlIiwic2F2aW5nIiwic2V0U2F2aW5nIiwibGFzdFNhdmVkIiwic2V0TGFzdFNhdmVkIiwiZGVib3VuY2VkRmllbGRzIiwidXNlRGVib3VuY2UiLCJmaWVsZFJlZiIsInVzZVJlZiIsIm1vZGlmaWVkUmVmIiwibG9jYWxlUmVmIiwiY3VycmVudCIsImNyZWF0ZUNvbGxlY3Rpb25Eb2MiLCJ1c2VDYWxsYmFjayIsInJlcyIsImpzb24iLCJmZXRjaCIsInNsdWciLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJsYW5ndWFnZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiZG9jIiwic3RhdGUiLCJkYXRhIiwidG9hc3QiLCJlcnJvciIsInVzZUVmZmVjdCIsInVybCIsInNldFRpbWVvdXQiLCJyZWR1Y2VGaWVsZHNUb1ZhbHVlcyIsIl9zdGF0dXMiLCJEYXRlIiwiZ2V0VGltZSIsImRvY3MiLCJ1cGRhdGVkQXQiLCJkaXYiLCJjbGFzc05hbWUiLCJSZWFjdCIsIkZyYWdtZW50IiwiZGlzdGFuY2UiLCJNYXRoIiwicm91bmQiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBd0pBOzs7ZUFBQTs7OzhCQXhKMkI7NkJBQ0w7NkRBQzBDOzRCQUNqQztzQkFDTDt1QkFDd0I7c0JBQ3hCOzJFQUVPOzRCQUNEO2tFQUNSO1FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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