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
var _reacti18next = require("react-i18next");
var _Config = require("../../../../utilities/Config");
var _optionsReducer = /*#__PURE__*/ _interop_require_default(require("./optionsReducer"));
var _useDebounce = /*#__PURE__*/ _interop_require_default(require("../../../../../hooks/useDebounce"));
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../ReactSelect"));
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
var baseClass = "condition-value-relationship";
var maxResultsPerRequest = 10;
var RelationshipField = function(props) {
    var onChange = props.onChange, value = props.value, relationTo = props.relationTo, hasMany = props.hasMany, tmp = props.admin, isSortable = (tmp === void 0 ? {} : tmp).isSortable;
    var _useConfig = (0, _Config.useConfig)(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api, collections = _useConfig.collections;
    var hasMultipleRelations = Array.isArray(relationTo);
    var _useReducer = _sliced_to_array((0, _react.useReducer)(_optionsReducer.default, []), 2), options = _useReducer[0], dispatchOptions = _useReducer[1];
    var _useState = _sliced_to_array((0, _react.useState)(-1), 2), lastFullyLoadedRelation = _useState[0], setLastFullyLoadedRelation = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(1), 2), lastLoadedPage = _useState1[0], setLastLoadedPage = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)(""), 2), search = _useState2[0], setSearch = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)(""), 2), errorLoading = _useState3[0], setErrorLoading = _useState3[1];
    var _useState4 = _sliced_to_array((0, _react.useState)(false), 2), hasLoadedFirstOptions = _useState4[0], setHasLoadedFirstOptions = _useState4[1];
    var debouncedSearch = (0, _useDebounce.default)(search, 300);
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var addOptions = (0, _react.useCallback)(function(data, relation) {
        var collection = collections.find(function(coll) {
            return coll.slug === relation;
        });
        dispatchOptions({
            type: "ADD",
            data: data,
            relation: relation,
            hasMultipleRelations: hasMultipleRelations,
            collection: collection,
            i18n: i18n
        });
    }, [
        collections,
        hasMultipleRelations,
        i18n
    ]);
    var getResults = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(param) {
            var lastFullyLoadedRelationArg, lastLoadedPageArg, searchArg, lastLoadedPageToUse, lastFullyLoadedRelationToUse, relations, relationsToFetch, resultsFetched;
            return _ts_generator(this, function(_state) {
                lastFullyLoadedRelationArg = param.lastFullyLoadedRelation, lastLoadedPageArg = param.lastLoadedPage, searchArg = param.search;
                lastLoadedPageToUse = typeof lastLoadedPageArg !== "undefined" ? lastLoadedPageArg : 1;
                lastFullyLoadedRelationToUse = typeof lastFullyLoadedRelationArg !== "undefined" ? lastFullyLoadedRelationArg : -1;
                relations = Array.isArray(relationTo) ? relationTo : [
                    relationTo
                ];
                relationsToFetch = lastFullyLoadedRelationToUse === -1 ? relations : relations.slice(lastFullyLoadedRelationToUse + 1);
                resultsFetched = 0;
                if (!errorLoading) {
                    relationsToFetch.reduce(function() {
                        var _ref = _async_to_generator(function(priorRelation, relation) {
                            var _collection_admin, _collection, collection, fieldToSearch, searchParam, response, data;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            priorRelation
                                        ];
                                    case 1:
                                        _state.sent();
                                        if (!(resultsFetched < 10)) return [
                                            3,
                                            5
                                        ];
                                        collection = collections.find(function(coll) {
                                            return coll.slug === relation;
                                        });
                                        fieldToSearch = ((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : _collection_admin.useAsTitle) || "id";
                                        searchParam = searchArg ? "&where[".concat(fieldToSearch, "][like]=").concat(searchArg) : "";
                                        return [
                                            4,
                                            fetch("".concat(serverURL).concat(api, "/").concat(relation, "?limit=").concat(maxResultsPerRequest, "&page=").concat(lastLoadedPageToUse, "&depth=0").concat(searchParam), {
                                                credentials: "include",
                                                headers: {
                                                    "Accept-Language": i18n.language
                                                }
                                            })
                                        ];
                                    case 2:
                                        response = _state.sent();
                                        if (!response.ok) return [
                                            3,
                                            4
                                        ];
                                        return [
                                            4,
                                            response.json()
                                        ];
                                    case 3:
                                        data = _state.sent();
                                        if (data.docs.length > 0) {
                                            resultsFetched += data.docs.length;
                                            addOptions(data, relation);
                                            setLastLoadedPage(data.page);
                                            if (!data.nextPage) {
                                                setLastFullyLoadedRelation(relations.indexOf(relation));
                                                // If there are more relations to search, need to reset lastLoadedPage to 1
                                                // both locally within function and state
                                                if (relations.indexOf(relation) + 1 < relations.length) {
                                                    lastLoadedPageToUse = 1;
                                                }
                                            }
                                        }
                                        return [
                                            3,
                                            5
                                        ];
                                    case 4:
                                        setErrorLoading(t("errors:unspecific"));
                                        _state.label = 5;
                                    case 5:
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(priorRelation, relation) {
                            return _ref.apply(this, arguments);
                        };
                    }(), Promise.resolve());
                }
                return [
                    2
                ];
            });
        });
        return function(_) {
            return _ref.apply(this, arguments);
        };
    }(), [
        i18n,
        relationTo,
        errorLoading,
        collections,
        serverURL,
        api,
        addOptions,
        t
    ]);
    var findOptionsByValue = (0, _react.useCallback)(function() {
        if (value) {
            if (hasMany) {
                if (Array.isArray(value)) {
                    return value.map(function(val) {
                        if (hasMultipleRelations) {
                            var matchedOption;
                            options.forEach(function(opt) {
                                if (opt.options) {
                                    opt.options.some(function(subOpt) {
                                        var _subOpt;
                                        if (((_subOpt = subOpt) === null || _subOpt === void 0 ? void 0 : _subOpt.value) === val.value) {
                                            matchedOption = subOpt;
                                            return true;
                                        }
                                        return false;
                                    });
                                }
                            });
                            return matchedOption;
                        }
                        return options.find(function(opt) {
                            return opt.value === val;
                        });
                    });
                }
                return undefined;
            }
            if (hasMultipleRelations) {
                var matchedOption;
                var valueWithRelation = value;
                options.forEach(function(opt) {
                    var _opt;
                    if ((_opt = opt) === null || _opt === void 0 ? void 0 : _opt.options) {
                        opt.options.some(function(subOpt) {
                            var _subOpt;
                            if (((_subOpt = subOpt) === null || _subOpt === void 0 ? void 0 : _subOpt.value) === valueWithRelation.value) {
                                matchedOption = subOpt;
                                return true;
                            }
                            return false;
                        });
                    }
                });
                return matchedOption;
            }
            return options.find(function(opt) {
                return opt.value === value;
            });
        }
        return undefined;
    }, [
        hasMany,
        hasMultipleRelations,
        value,
        options
    ]);
    var handleInputChange = (0, _react.useCallback)(function(newSearch) {
        if (search !== newSearch) {
            setSearch(newSearch);
        }
    }, [
        search
    ]);
    var addOptionByID = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(id, relation) {
            var response, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(!errorLoading && id !== "null")) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            fetch("".concat(serverURL).concat(api, "/").concat(relation, "/").concat(id, "?depth=0"), {
                                credentials: "include",
                                headers: {
                                    "Accept-Language": i18n.language
                                }
                            })
                        ];
                    case 1:
                        response = _state.sent();
                        if (!response.ok) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            response.json()
                        ];
                    case 2:
                        data = _state.sent();
                        addOptions({
                            docs: [
                                data
                            ]
                        }, relation);
                        return [
                            3,
                            4
                        ];
                    case 3:
                        console.error(t("error:loadingDocument", {
                            id: id
                        }));
                        _state.label = 4;
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function(id, relation) {
            return _ref.apply(this, arguments);
        };
    }(), [
        i18n,
        addOptions,
        api,
        errorLoading,
        serverURL,
        t
    ]);
    // ///////////////////////////
    // Get results when search input changes
    // ///////////////////////////
    (0, _react.useEffect)(function() {
        dispatchOptions({
            type: "CLEAR",
            required: true,
            i18n: i18n
        });
        setHasLoadedFirstOptions(true);
        setLastLoadedPage(1);
        setLastFullyLoadedRelation(-1);
        getResults({
            search: debouncedSearch
        });
    }, [
        getResults,
        debouncedSearch,
        relationTo,
        i18n
    ]);
    // ///////////////////////////
    // Format options once first options have been retrieved
    // ///////////////////////////
    (0, _react.useEffect)(function() {
        if (value && hasLoadedFirstOptions) {
            if (hasMany) {
                var matchedOptions = findOptionsByValue();
                (matchedOptions || []).forEach(function(option, i) {
                    if (!option) {
                        if (hasMultipleRelations) {
                            addOptionByID(value[i].value, value[i].relationTo);
                        } else {
                            addOptionByID(value[i], relationTo);
                        }
                    }
                });
            } else {
                var matchedOption = findOptionsByValue();
                if (!matchedOption) {
                    if (hasMultipleRelations) {
                        var valueWithRelation = value;
                        addOptionByID(valueWithRelation.value, valueWithRelation.relationTo);
                    } else {
                        addOptionByID(value, relationTo);
                    }
                }
            }
        }
    }, [
        addOptionByID,
        findOptionsByValue,
        hasMany,
        hasMultipleRelations,
        relationTo,
        value,
        hasLoadedFirstOptions
    ]);
    var classes = [
        "field-type",
        baseClass,
        errorLoading && "error-loading"
    ].filter(Boolean).join(" ");
    var valueToRender = findOptionsByValue() || value;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, !errorLoading && /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        placeholder: t("selectValue"),
        onInputChange: handleInputChange,
        onChange: function(selected) {
            if (hasMany) {
                onChange(selected ? selected.map(function(option) {
                    if (hasMultipleRelations) {
                        return {
                            relationTo: option.relationTo,
                            value: option.value
                        };
                    }
                    return option.value;
                }) : null);
            } else if (hasMultipleRelations) {
                onChange({
                    relationTo: selected.relationTo,
                    value: selected.value
                });
            } else {
                onChange(selected.value);
            }
        },
        onMenuScrollToBottom: function() {
            getResults({
                lastFullyLoadedRelation: lastFullyLoadedRelation,
                lastLoadedPage: lastLoadedPage + 1
            });
        },
        value: valueToRender,
        options: options,
        isMulti: hasMany,
        isSortable: isSortable
    }), errorLoading && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__error-loading")
    }, errorLoading));
};
var _default = RelationshipField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vUmVsYXRpb25zaGlwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyBQcm9wcywgVmFsdWVXaXRoUmVsYXRpb24sIEdldFJlc3VsdHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBvcHRpb25zUmVkdWNlciBmcm9tICcuL29wdGlvbnNSZWR1Y2VyJztcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VEZWJvdW5jZSc7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vLi4vUmVhY3RTZWxlY3QnO1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vUmVhY3RTZWxlY3QvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb25kaXRpb24tdmFsdWUtcmVsYXRpb25zaGlwJztcblxuY29uc3QgbWF4UmVzdWx0c1BlclJlcXVlc3QgPSAxMDtcblxuY29uc3QgUmVsYXRpb25zaGlwRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCB2YWx1ZSwgcmVsYXRpb25UbywgaGFzTWFueSwgYWRtaW46IHsgaXNTb3J0YWJsZSB9ID0ge30gfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBzZXJ2ZXJVUkwsXG4gICAgcm91dGVzOiB7XG4gICAgICBhcGksXG4gICAgfSxcbiAgICBjb2xsZWN0aW9ucyxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IGhhc011bHRpcGxlUmVsYXRpb25zID0gQXJyYXkuaXNBcnJheShyZWxhdGlvblRvKTtcbiAgY29uc3QgW29wdGlvbnMsIGRpc3BhdGNoT3B0aW9uc10gPSB1c2VSZWR1Y2VyKG9wdGlvbnNSZWR1Y2VyLCBbXSk7XG4gIGNvbnN0IFtsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbiwgc2V0TGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25dID0gdXNlU3RhdGUoLTEpO1xuICBjb25zdCBbbGFzdExvYWRlZFBhZ2UsIHNldExhc3RMb2FkZWRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3JMb2FkaW5nLCBzZXRFcnJvckxvYWRpbmddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaGFzTG9hZGVkRmlyc3RPcHRpb25zLCBzZXRIYXNMb2FkZWRGaXJzdE9wdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkZWJvdW5jZWRTZWFyY2ggPSB1c2VEZWJvdW5jZShzZWFyY2gsIDMwMCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBjb25zdCBhZGRPcHRpb25zID0gdXNlQ2FsbGJhY2soKGRhdGEsIHJlbGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGwpID0+IGNvbGwuc2x1ZyA9PT0gcmVsYXRpb24pO1xuICAgIGRpc3BhdGNoT3B0aW9ucyh7IHR5cGU6ICdBREQnLCBkYXRhLCByZWxhdGlvbiwgaGFzTXVsdGlwbGVSZWxhdGlvbnMsIGNvbGxlY3Rpb24sIGkxOG4gfSk7XG4gIH0sIFtjb2xsZWN0aW9ucywgaGFzTXVsdGlwbGVSZWxhdGlvbnMsIGkxOG5dKTtcblxuICBjb25zdCBnZXRSZXN1bHRzID0gdXNlQ2FsbGJhY2s8R2V0UmVzdWx0cz4oYXN5bmMgKHtcbiAgICBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbjogbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25BcmcsXG4gICAgbGFzdExvYWRlZFBhZ2U6IGxhc3RMb2FkZWRQYWdlQXJnLFxuICAgIHNlYXJjaDogc2VhcmNoQXJnLFxuICB9KSA9PiB7XG4gICAgbGV0IGxhc3RMb2FkZWRQYWdlVG9Vc2UgPSB0eXBlb2YgbGFzdExvYWRlZFBhZ2VBcmcgIT09ICd1bmRlZmluZWQnID8gbGFzdExvYWRlZFBhZ2VBcmcgOiAxO1xuICAgIGNvbnN0IGxhc3RGdWxseUxvYWRlZFJlbGF0aW9uVG9Vc2UgPSB0eXBlb2YgbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25BcmcgIT09ICd1bmRlZmluZWQnID8gbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25BcmcgOiAtMTtcblxuICAgIGNvbnN0IHJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykgPyByZWxhdGlvblRvIDogW3JlbGF0aW9uVG9dO1xuICAgIGNvbnN0IHJlbGF0aW9uc1RvRmV0Y2ggPSBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlID09PSAtMSA/IHJlbGF0aW9ucyA6IHJlbGF0aW9ucy5zbGljZShsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlICsgMSk7XG5cbiAgICBsZXQgcmVzdWx0c0ZldGNoZWQgPSAwO1xuXG4gICAgaWYgKCFlcnJvckxvYWRpbmcpIHtcbiAgICAgIHJlbGF0aW9uc1RvRmV0Y2gucmVkdWNlKGFzeW5jIChwcmlvclJlbGF0aW9uLCByZWxhdGlvbikgPT4ge1xuICAgICAgICBhd2FpdCBwcmlvclJlbGF0aW9uO1xuXG4gICAgICAgIGlmIChyZXN1bHRzRmV0Y2hlZCA8IDEwKSB7XG4gICAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGwpID0+IGNvbGwuc2x1ZyA9PT0gcmVsYXRpb24pO1xuICAgICAgICAgIGNvbnN0IGZpZWxkVG9TZWFyY2ggPSBjb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZSB8fCAnaWQnO1xuICAgICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtID0gc2VhcmNoQXJnID8gYCZ3aGVyZVske2ZpZWxkVG9TZWFyY2h9XVtsaWtlXT0ke3NlYXJjaEFyZ31gIDogJyc7XG5cbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3NlcnZlclVSTH0ke2FwaX0vJHtyZWxhdGlvbn0/bGltaXQ9JHttYXhSZXN1bHRzUGVyUmVxdWVzdH0mcGFnZT0ke2xhc3RMb2FkZWRQYWdlVG9Vc2V9JmRlcHRoPTAke3NlYXJjaFBhcmFtfWAsIHtcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YTogUGFnaW5hdGVkRG9jcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXN1bHRzRmV0Y2hlZCArPSBkYXRhLmRvY3MubGVuZ3RoO1xuICAgICAgICAgICAgICBhZGRPcHRpb25zKGRhdGEsIHJlbGF0aW9uKTtcbiAgICAgICAgICAgICAgc2V0TGFzdExvYWRlZFBhZ2UoZGF0YS5wYWdlKTtcblxuICAgICAgICAgICAgICBpZiAoIWRhdGEubmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICBzZXRMYXN0RnVsbHlMb2FkZWRSZWxhdGlvbihyZWxhdGlvbnMuaW5kZXhPZihyZWxhdGlvbikpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgcmVsYXRpb25zIHRvIHNlYXJjaCwgbmVlZCB0byByZXNldCBsYXN0TG9hZGVkUGFnZSB0byAxXG4gICAgICAgICAgICAgICAgLy8gYm90aCBsb2NhbGx5IHdpdGhpbiBmdW5jdGlvbiBhbmQgc3RhdGVcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25zLmluZGV4T2YocmVsYXRpb24pICsgMSA8IHJlbGF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGxhc3RMb2FkZWRQYWdlVG9Vc2UgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvckxvYWRpbmcodCgnZXJyb3JzOnVuc3BlY2lmaWMnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgfVxuICB9LCBbaTE4biwgcmVsYXRpb25UbywgZXJyb3JMb2FkaW5nLCBjb2xsZWN0aW9ucywgc2VydmVyVVJMLCBhcGksIGFkZE9wdGlvbnMsIHRdKTtcblxuICBjb25zdCBmaW5kT3B0aW9uc0J5VmFsdWUgPSB1c2VDYWxsYmFjaygoKTogT3B0aW9uIHwgT3B0aW9uW10gPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGhhc01hbnkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgICAgICAgbGV0IG1hdGNoZWRPcHRpb246IE9wdGlvbjtcblxuICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcHQub3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgb3B0Lm9wdGlvbnMuc29tZSgoc3ViT3B0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJPcHQ/LnZhbHVlID09PSB2YWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkT3B0aW9uID0gc3ViT3B0O1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZCgob3B0KSA9PiBvcHQudmFsdWUgPT09IHZhbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgbGV0IG1hdGNoZWRPcHRpb246IE9wdGlvbjtcblxuICAgICAgICBjb25zdCB2YWx1ZVdpdGhSZWxhdGlvbiA9IHZhbHVlIGFzIFZhbHVlV2l0aFJlbGF0aW9uO1xuXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0KSA9PiB7XG4gICAgICAgICAgaWYgKG9wdD8ub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0Lm9wdGlvbnMuc29tZSgoc3ViT3B0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzdWJPcHQ/LnZhbHVlID09PSB2YWx1ZVdpdGhSZWxhdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRPcHRpb24gPSBzdWJPcHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZCgob3B0KSA9PiBvcHQudmFsdWUgPT09IHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LCBbaGFzTWFueSwgaGFzTXVsdGlwbGVSZWxhdGlvbnMsIHZhbHVlLCBvcHRpb25zXSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3U2VhcmNoKSA9PiB7XG4gICAgaWYgKHNlYXJjaCAhPT0gbmV3U2VhcmNoKSB7XG4gICAgICBzZXRTZWFyY2gobmV3U2VhcmNoKTtcbiAgICB9XG4gIH0sIFtzZWFyY2hdKTtcblxuICBjb25zdCBhZGRPcHRpb25CeUlEID0gdXNlQ2FsbGJhY2soYXN5bmMgKGlkLCByZWxhdGlvbikgPT4ge1xuICAgIGlmICghZXJyb3JMb2FkaW5nICYmIGlkICE9PSAnbnVsbCcpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyVVJMfSR7YXBpfS8ke3JlbGF0aW9ufS8ke2lkfT9kZXB0aD0wYCwge1xuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGFkZE9wdGlvbnMoeyBkb2NzOiBbZGF0YV0gfSwgcmVsYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0KCdlcnJvcjpsb2FkaW5nRG9jdW1lbnQnLCB7IGlkIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpMThuLCBhZGRPcHRpb25zLCBhcGksIGVycm9yTG9hZGluZywgc2VydmVyVVJMLCB0XSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEdldCByZXN1bHRzIHdoZW4gc2VhcmNoIGlucHV0IGNoYW5nZXNcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaE9wdGlvbnMoe1xuICAgICAgdHlwZTogJ0NMRUFSJyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgaTE4bixcbiAgICB9KTtcblxuICAgIHNldEhhc0xvYWRlZEZpcnN0T3B0aW9ucyh0cnVlKTtcbiAgICBzZXRMYXN0TG9hZGVkUGFnZSgxKTtcbiAgICBzZXRMYXN0RnVsbHlMb2FkZWRSZWxhdGlvbigtMSk7XG4gICAgZ2V0UmVzdWx0cyh7IHNlYXJjaDogZGVib3VuY2VkU2VhcmNoIH0pO1xuICB9LCBbZ2V0UmVzdWx0cywgZGVib3VuY2VkU2VhcmNoLCByZWxhdGlvblRvLCBpMThuXSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEZvcm1hdCBvcHRpb25zIG9uY2UgZmlyc3Qgb3B0aW9ucyBoYXZlIGJlZW4gcmV0cmlldmVkXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlICYmIGhhc0xvYWRlZEZpcnN0T3B0aW9ucykge1xuICAgICAgaWYgKGhhc01hbnkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZE9wdGlvbnMgPSBmaW5kT3B0aW9uc0J5VmFsdWUoKTtcblxuICAgICAgICAobWF0Y2hlZE9wdGlvbnMgYXMgT3B0aW9uW10gfHwgW10pLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgICAgICAgYWRkT3B0aW9uQnlJRCh2YWx1ZVtpXS52YWx1ZSwgdmFsdWVbaV0ucmVsYXRpb25Ubyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhZGRPcHRpb25CeUlEKHZhbHVlW2ldLCByZWxhdGlvblRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZE9wdGlvbiA9IGZpbmRPcHRpb25zQnlWYWx1ZSgpO1xuXG4gICAgICAgIGlmICghbWF0Y2hlZE9wdGlvbikge1xuICAgICAgICAgIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVXaXRoUmVsYXRpb24gPSB2YWx1ZSBhcyBWYWx1ZVdpdGhSZWxhdGlvbjtcbiAgICAgICAgICAgIGFkZE9wdGlvbkJ5SUQodmFsdWVXaXRoUmVsYXRpb24udmFsdWUsIHZhbHVlV2l0aFJlbGF0aW9uLnJlbGF0aW9uVG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRPcHRpb25CeUlEKHZhbHVlLCByZWxhdGlvblRvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFthZGRPcHRpb25CeUlELCBmaW5kT3B0aW9uc0J5VmFsdWUsIGhhc01hbnksIGhhc011bHRpcGxlUmVsYXRpb25zLCByZWxhdGlvblRvLCB2YWx1ZSwgaGFzTG9hZGVkRmlyc3RPcHRpb25zXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgYmFzZUNsYXNzLFxuICAgIGVycm9yTG9hZGluZyAmJiAnZXJyb3ItbG9hZGluZycsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBjb25zdCB2YWx1ZVRvUmVuZGVyID0gKGZpbmRPcHRpb25zQnlWYWx1ZSgpIHx8IHZhbHVlKSBhcyBPcHRpb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7IWVycm9yTG9hZGluZyAmJiAoXG4gICAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdzZWxlY3RWYWx1ZScpfVxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGlmIChoYXNNYW55KSB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkID8gc2VsZWN0ZWQubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IG9wdGlvbi5yZWxhdGlvblRvLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICB9KSA6IG51bGwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucykge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgcmVsYXRpb25Ubzogc2VsZWN0ZWQucmVsYXRpb25UbyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b209eygpID0+IHtcbiAgICAgICAgICAgIGdldFJlc3VsdHMoeyBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbiwgbGFzdExvYWRlZFBhZ2U6IGxhc3RMb2FkZWRQYWdlICsgMSB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvUmVuZGVyfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgaXNNdWx0aT17aGFzTWFueX1cbiAgICAgICAgICBpc1NvcnRhYmxlPXtpc1NvcnRhYmxlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtlcnJvckxvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZXJyb3ItbG9hZGluZ2B9PlxuICAgICAgICAgIHtlcnJvckxvYWRpbmd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aW9uc2hpcEZpZWxkO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIm1heFJlc3VsdHNQZXJSZXF1ZXN0IiwiUmVsYXRpb25zaGlwRmllbGQiLCJwcm9wcyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJyZWxhdGlvblRvIiwiaGFzTWFueSIsImFkbWluIiwiaXNTb3J0YWJsZSIsInVzZUNvbmZpZyIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImNvbGxlY3Rpb25zIiwiaGFzTXVsdGlwbGVSZWxhdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJ1c2VSZWR1Y2VyIiwib3B0aW9uc1JlZHVjZXIiLCJvcHRpb25zIiwiZGlzcGF0Y2hPcHRpb25zIiwidXNlU3RhdGUiLCJsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbiIsInNldExhc3RGdWxseUxvYWRlZFJlbGF0aW9uIiwibGFzdExvYWRlZFBhZ2UiLCJzZXRMYXN0TG9hZGVkUGFnZSIsInNlYXJjaCIsInNldFNlYXJjaCIsImVycm9yTG9hZGluZyIsInNldEVycm9yTG9hZGluZyIsImhhc0xvYWRlZEZpcnN0T3B0aW9ucyIsInNldEhhc0xvYWRlZEZpcnN0T3B0aW9ucyIsImRlYm91bmNlZFNlYXJjaCIsInVzZURlYm91bmNlIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImFkZE9wdGlvbnMiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJyZWxhdGlvbiIsImNvbGxlY3Rpb24iLCJmaW5kIiwiY29sbCIsInNsdWciLCJ0eXBlIiwiZ2V0UmVzdWx0cyIsImxhc3RGdWxseUxvYWRlZFJlbGF0aW9uQXJnIiwibGFzdExvYWRlZFBhZ2VBcmciLCJzZWFyY2hBcmciLCJsYXN0TG9hZGVkUGFnZVRvVXNlIiwibGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25Ub1VzZSIsInJlbGF0aW9ucyIsInJlbGF0aW9uc1RvRmV0Y2giLCJyZXN1bHRzRmV0Y2hlZCIsInNsaWNlIiwicmVkdWNlIiwicHJpb3JSZWxhdGlvbiIsImZpZWxkVG9TZWFyY2giLCJzZWFyY2hQYXJhbSIsInJlc3BvbnNlIiwidXNlQXNUaXRsZSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJvayIsImpzb24iLCJkb2NzIiwibGVuZ3RoIiwicGFnZSIsIm5leHRQYWdlIiwiaW5kZXhPZiIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmluZE9wdGlvbnNCeVZhbHVlIiwibWFwIiwidmFsIiwibWF0Y2hlZE9wdGlvbiIsImZvckVhY2giLCJvcHQiLCJzb21lIiwic3ViT3B0IiwidW5kZWZpbmVkIiwidmFsdWVXaXRoUmVsYXRpb24iLCJoYW5kbGVJbnB1dENoYW5nZSIsIm5ld1NlYXJjaCIsImFkZE9wdGlvbkJ5SUQiLCJpZCIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInJlcXVpcmVkIiwibWF0Y2hlZE9wdGlvbnMiLCJvcHRpb24iLCJpIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwidmFsdWVUb1JlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJvbklucHV0Q2hhbmdlIiwic2VsZWN0ZWQiLCJvbk1lbnVTY3JvbGxUb0JvdHRvbSIsImlzTXVsdGkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBd1JBOzs7ZUFBQTs7OzZEQXhSb0U7NEJBQ3JDO3NCQUNMO3FFQUVDO2tFQUNIO2tFQUNBO1FBSWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsdUJBQXVCO0FBRTdCLElBQU1DLG9CQUFxQyxTQUFDQztJQUMxQyxJQUFRQyxXQUFxRUQsTUFBckVDLFVBQVVDLFFBQTJERixNQUEzREUsT0FBT0MsYUFBb0RILE1BQXBERyxZQUFZQyxVQUF3Q0osTUFBeENJLFNBQWdCLE1BQXdCSixNQUEvQkssT0FBTyxBQUFFQyxjQUFGLGlCQUFpQixDQUFDLElBQWxCLEtBQUVBO0lBRXZELElBTUlDLGFBQUFBLElBQUFBLGlCQUFTLEtBTFhDLFlBS0VELFdBTEZDLFdBQ0FDLEFBQ0VDLE1BR0FILFdBSkZFLE9BQ0VDLEtBRUZDLGNBQ0VKLFdBREZJO0lBR0YsSUFBTUMsdUJBQXVCQyxNQUFNQyxPQUFPLENBQUNYO0lBQzNDLElBQW1DWSwrQkFBQUEsSUFBQUEsaUJBQVUsRUFBQ0MsdUJBQWMsRUFBRSxFQUFFLE9BQXpEQyxVQUE0QkYsZ0JBQW5CRyxrQkFBbUJIO0lBQ25DLElBQThESSw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDLENBQUMsUUFBakVDLDBCQUF1REQsY0FBOUJFLDZC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