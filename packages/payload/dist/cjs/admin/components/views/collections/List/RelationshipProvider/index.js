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
    RelationshipProvider: function() {
        return RelationshipProvider;
    },
    useListRelationships: function() {
        return useListRelationships;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reacti18next = require("react-i18next");
var _Config = require("../../../../utilities/Config");
var _reducer = require("./reducer");
var _useDebounce = /*#__PURE__*/ _interop_require_default(require("../../../../../hooks/useDebounce"));
var _Locale = require("../../../../utilities/Locale");
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
var Context = /*#__PURE__*/ (0, _react.createContext)({});
var RelationshipProvider = function(param) {
    var children = param.children;
    var _useReducer = _sliced_to_array((0, _react.useReducer)(_reducer.reducer, {}), 2), documents = _useReducer[0], dispatchDocuments = _useReducer[1];
    var debouncedDocuments = (0, _useDebounce.default)(documents, 100);
    var config = (0, _Config.useConfig)();
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var prevLocale = (0, _react.useRef)(locale);
    var serverURL = config.serverURL, api = config.routes.api;
    var loadRelationshipDocs = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
        var reloadAll;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            reloadAll = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : false;
            Object.entries(debouncedDocuments).forEach(function() {
                var _ref = _async_to_generator(function(param) {
                    var _param, slug, docs, idsToLoad, url, params, query, result, json;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _param = _sliced_to_array(param, 2), slug = _param[0], docs = _param[1];
                                idsToLoad = [];
                                Object.entries(docs).forEach(function(param) {
                                    var _param = _sliced_to_array(param, 2), id = _param[0], value = _param[1];
                                    if (value === null || reloadAll) {
                                        idsToLoad.push(id);
                                    }
                                });
                                if (!(idsToLoad.length > 0)) return [
                                    3,
                                    4
                                ];
                                url = "".concat(serverURL).concat(api, "/").concat(slug);
                                params = {
                                    depth: 0,
                                    "where[id][in]": idsToLoad,
                                    locale: locale,
                                    limit: 250
                                };
                                query = _qs.default.stringify(params, {
                                    addQueryPrefix: true
                                });
                                return [
                                    4,
                                    fetch("".concat(url).concat(query), {
                                        credentials: "include",
                                        headers: {
                                            "Accept-Language": i18n.language
                                        }
                                    })
                                ];
                            case 1:
                                result = _state.sent();
                                if (!result.ok) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    result.json()
                                ];
                            case 2:
                                json = _state.sent();
                                if (json.docs) {
                                    dispatchDocuments({
                                        type: "ADD_LOADED",
                                        docs: json.docs,
                                        relationTo: slug,
                                        idsToLoad: idsToLoad
                                    });
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                dispatchDocuments({
                                    type: "ADD_LOADED",
                                    docs: [],
                                    relationTo: slug,
                                    idsToLoad: idsToLoad
                                });
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(_) {
                    return _ref.apply(this, arguments);
                };
            }());
            return [
                2
            ];
        });
    }), [
        debouncedDocuments,
        serverURL,
        api,
        i18n,
        locale
    ]);
    (0, _react.useEffect)(function() {
        loadRelationshipDocs(locale && prevLocale.current !== locale);
        prevLocale.current = locale;
    }, [
        locale,
        loadRelationshipDocs
    ]);
    var getRelationships = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(relationships) {
            return _ts_generator(this, function(_state) {
                dispatchDocuments({
                    type: "REQUEST",
                    docs: relationships
                });
                return [
                    2
                ];
            });
        });
        return function(relationships) {
            return _ref.apply(this, arguments);
        };
    }(), []);
    return /*#__PURE__*/ _react.default.createElement(Context.Provider, {
        value: {
            getRelationships: getRelationships,
            documents: documents
        }
    }, children);
};
var useListRelationships = function() {
    return (0, _react.useContext)(Context);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvUmVsYXRpb25zaGlwUHJvdmlkZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSAncXMnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VEZWJvdW5jZSc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcblxuLy8gZG9jdW1lbnRzIGFyZSBmaXJzdCBzZXQgdG8gbnVsbCB3aGVuIHJlcXVlc3RlZFxuLy8gc2V0IHRvIGZhbHNlIHdoZW4gbm8gZG9jIGlzIHJldHVybmVkXG4vLyBvciBzZXQgdG8gdGhlIGRvY3VtZW50IHJldHVybmVkXG5leHBvcnQgdHlwZSBEb2N1bWVudHMgPSB7XG4gIFtzbHVnOiBzdHJpbmddOiB7XG4gICAgW2lkOiBzdHJpbmcgfCBudW1iZXJdOiBUeXBlV2l0aElEIHwgbnVsbCB8IGZhbHNlXG4gIH1cbn1cblxudHlwZSBMaXN0UmVsYXRpb25zaGlwQ29udGV4dCA9IHtcbiAgZ2V0UmVsYXRpb25zaGlwczogKGRvY3M6IHtcbiAgICByZWxhdGlvblRvOiBzdHJpbmcsXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZ1xuICB9W10pID0+IHZvaWQ7XG4gIGRvY3VtZW50czogRG9jdW1lbnRzXG59XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIExpc3RSZWxhdGlvbnNoaXBDb250ZXh0KTtcblxuZXhwb3J0IGNvbnN0IFJlbGF0aW9uc2hpcFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZG9jdW1lbnRzLCBkaXNwYXRjaERvY3VtZW50c10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHt9KTtcbiAgY29uc3QgZGVib3VuY2VkRG9jdW1lbnRzID0gdXNlRGVib3VuY2UoZG9jdW1lbnRzLCAxMDApO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHByZXZMb2NhbGUgPSB1c2VSZWYobG9jYWxlKTtcblxuICBjb25zdCB7XG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgfSA9IGNvbmZpZztcblxuICBjb25zdCBsb2FkUmVsYXRpb25zaGlwRG9jcyA9IHVzZUNhbGxiYWNrKGFzeW5jIChyZWxvYWRBbGwgPSBmYWxzZSkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGRlYm91bmNlZERvY3VtZW50cykuZm9yRWFjaChhc3luYyAoW3NsdWcsIGRvY3NdKSA9PiB7XG4gICAgICBjb25zdCBpZHNUb0xvYWQ6IChzdHJpbmcgfCBudW1iZXIpW10gPSBbXTtcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZG9jcykuZm9yRWFjaCgoW2lkLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHJlbG9hZEFsbCkge1xuICAgICAgICAgIGlkc1RvTG9hZC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICAgICAgaWYgKGlkc1RvTG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfWA7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAnd2hlcmVbaWRdW2luXSc6IGlkc1RvTG9hZCxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgbGltaXQ6IDI1MCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShwYXJhbXMsIHsgYWRkUXVlcnlQcmVmaXg6IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke3VybH0ke3F1ZXJ5fWAsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgICBpZiAoanNvbi5kb2NzKSB7XG4gICAgICAgICAgICBkaXNwYXRjaERvY3VtZW50cyh7IHR5cGU6ICdBRERfTE9BREVEJywgZG9jczoganNvbi5kb2NzLCByZWxhdGlvblRvOiBzbHVnLCBpZHNUb0xvYWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoRG9jdW1lbnRzKHsgdHlwZTogJ0FERF9MT0FERUQnLCBkb2NzOiBbXSwgcmVsYXRpb25Ubzogc2x1ZywgaWRzVG9Mb2FkIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtkZWJvdW5jZWREb2N1bWVudHMsIHNlcnZlclVSTCwgYXBpLCBpMThuLCBsb2NhbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRSZWxhdGlvbnNoaXBEb2NzKGxvY2FsZSAmJiBwcmV2TG9jYWxlLmN1cnJlbnQgIT09IGxvY2FsZSk7XG4gICAgcHJldkxvY2FsZS5jdXJyZW50ID0gbG9jYWxlO1xuICB9LCBbbG9jYWxlLCBsb2FkUmVsYXRpb25zaGlwRG9jc10pO1xuXG4gIGNvbnN0IGdldFJlbGF0aW9uc2hpcHMgPSB1c2VDYWxsYmFjayhhc3luYyAocmVsYXRpb25zaGlwczogeyByZWxhdGlvblRvOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfVtdKSA9PiB7XG4gICAgZGlzcGF0Y2hEb2N1bWVudHMoeyB0eXBlOiAnUkVRVUVTVCcsIGRvY3M6IHJlbGF0aW9uc2hpcHMgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdldFJlbGF0aW9uc2hpcHMsIGRvY3VtZW50cyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTGlzdFJlbGF0aW9uc2hpcHMgPSAoKTogTGlzdFJlbGF0aW9uc2hpcENvbnRleHQgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWxhdGlvbnNoaXBQcm92aWRlciIsInVzZUxpc3RSZWxhdGlvbnNoaXBzIiwiQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJyZWR1Y2VyIiwiZG9jdW1lbnRzIiwiZGlzcGF0Y2hEb2N1bWVudHMiLCJkZWJvdW5jZWREb2N1bWVudHMiLCJ1c2VEZWJvdW5jZSIsImNvbmZpZyIsInVzZUNvbmZpZyIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUxvY2FsZSIsImNvZGUiLCJsb2NhbGUiLCJwcmV2TG9jYWxlIiwidXNlUmVmIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwibG9hZFJlbGF0aW9uc2hpcERvY3MiLCJ1c2VDYWxsYmFjayIsInJlbG9hZEFsbCIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwic2x1ZyIsImRvY3MiLCJpZHNUb0xvYWQiLCJ1cmwiLCJwYXJhbXMiLCJxdWVyeSIsInJlc3VsdCIsImpzb24iLCJpZCIsInZhbHVlIiwicHVzaCIsImxlbmd0aCIsImRlcHRoIiwibGltaXQiLCJxdWVyeXN0cmluZyIsInN0cmluZ2lmeSIsImFkZFF1ZXJ5UHJlZml4IiwiZmV0Y2giLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJsYW5ndWFnZSIsIm9rIiwidHlwZSIsInJlbGF0aW9uVG8iLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZ2V0UmVsYXRpb25zaGlwcyIsInJlbGF0aW9uc2hpcHMiLCJQcm92aWRlciIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBNEJhQSxvQkFBb0I7ZUFBcEJBOztJQXFFQUMsb0JBQW9CO2VBQXBCQTs7OzZEQWpHZ0Y7eURBQ3JFOzRCQUNPO3NCQUNMO3VCQUVGO2tFQUNBO3NCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CMUIsSUFBTUMsd0JBQVVDLElBQUFBLG9CQUFhLEVBQUMsQ0FBQztBQUV4QixJQUFNSCx1QkFBaUU7UUFBR0ksaUJBQUFBO0lBQy9FLElBQXVDQywrQkFBQUEsSUFBQUEsaUJBQVUs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