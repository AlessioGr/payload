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
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reacti18next = require("react-i18next");
var _Config = require("../../../utilities/Config");
var _Auth = require("../../../utilities/Auth");
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../../elements/ReactSelect"));
var _useField = /*#__PURE__*/ _interop_require_default(require("../../useField"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _Error = /*#__PURE__*/ _interop_require_default(require("../../Error"));
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _validations = require("../../../../../fields/validations");
var _context = require("../../Form/context");
var _optionsReducer = /*#__PURE__*/ _interop_require_default(require("./optionsReducer"));
var _createRelationMap = require("./createRelationMap");
var _useDebouncedCallback = require("../../../../hooks/useDebouncedCallback");
var _wordBoundariesRegex = /*#__PURE__*/ _interop_require_default(require("../../../../../utilities/wordBoundariesRegex"));
var _AddNew = require("./AddNew");
var _findOptionsByValue = require("./findOptionsByValue");
var _GetFilterOptions = require("../../../utilities/GetFilterOptions");
var _SingleValue = require("./select-components/SingleValue");
var _MultiValueLabel = require("./select-components/MultiValueLabel");
var _Locale = require("../../../utilities/Locale");
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
var maxResultsPerRequest = 10;
var baseClass = "relationship";
var Relationship = function(props) {
    var _valueToRender;
    var relationTo = props.relationTo, _props_validate = props.validate, validate = _props_validate === void 0 ? _validations.relationship : _props_validate, path = props.path, name = props.name, required = props.required, label = props.label, hasMany = props.hasMany, filterOptions = props.filterOptions, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, _ref_isSortable = _ref.isSortable, isSortable = _ref_isSortable === void 0 ? true : _ref_isSortable, _ref_allowCreate = _ref.allowCreate, allowCreate = _ref_allowCreate === void 0 ? true : _ref_allowCreate;
    var config = (0, _Config.useConfig)();
    var serverURL = config.serverURL, api = config.routes.api, collections = config.collections;
    var _useTranslation = (0, _reacti18next.useTranslation)("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var permissions = (0, _Auth.useAuth)().permissions;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var formProcessing = (0, _context.useFormProcessing)();
    var hasMultipleRelations = Array.isArray(relationTo);
    var _useReducer = _sliced_to_array((0, _react.useReducer)(_optionsReducer.default, []), 2), options = _useReducer[0], dispatchOptions = _useReducer[1];
    var _useState = _sliced_to_array((0, _react.useState)(-1), 2), lastFullyLoadedRelation = _useState[0], setLastFullyLoadedRelation = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)({}), 2), lastLoadedPage = _useState1[0], setLastLoadedPage = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)(""), 2), errorLoading = _useState2[0], setErrorLoading = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)(), 2), filterOptionsResult = _useState3[0], setFilterOptionsResult = _useState3[1];
    var _useState4 = _sliced_to_array((0, _react.useState)(""), 2), search = _useState4[0], setSearch = _useState4[1];
    var _useState5 = _sliced_to_array((0, _react.useState)(false), 2), isLoading = _useState5[0], setIsLoading = _useState5[1];
    var _useState6 = _sliced_to_array((0, _react.useState)(false), 2), hasLoadedFirstPage = _useState6[0], setHasLoadedFirstPage = _useState6[1];
    var _useState7 = _sliced_to_array((0, _react.useState)(false), 2), enableWordBoundarySearch = _useState7[0], setEnableWordBoundarySearch = _useState7[1];
    var firstRun = (0, _react.useRef)(true);
    var pathOrName = path || name;
    var memoizedValidate = (0, _react.useCallback)(function(value, validationOptions) {
        return validate(value, _object_spread_props(_object_spread({}, validationOptions), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var _useField1 = (0, _useField.default)({
        path: pathOrName,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField1.value, showError = _useField1.showError, errorMessage = _useField1.errorMessage, setValue = _useField1.setValue, initialValue = _useField1.initialValue;
    var _useState8 = _sliced_to_array((0, _react.useState)(false), 2), drawerIsOpen = _useState8[0], setDrawerIsOpen = _useState8[1];
    var getResults = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(param) {
            var lastFullyLoadedRelationArg, searchArg, valueArg, sort, onSuccess, lastFullyLoadedRelationToUse, relations, relationsToFetch, resultsFetched, relationMap;
            return _ts_generator(this, function(_state) {
                lastFullyLoadedRelationArg = param.lastFullyLoadedRelation, searchArg = param.search, valueArg = param.value, sort = param.sort, onSuccess = param.onSuccess;
                if (!permissions) {
                    return [
                        2
                    ];
                }
                lastFullyLoadedRelationToUse = typeof lastFullyLoadedRelationArg !== "undefined" ? lastFullyLoadedRelationArg : -1;
                relations = Array.isArray(relationTo) ? relationTo : [
                    relationTo
                ];
                relationsToFetch = lastFullyLoadedRelationToUse === -1 ? relations : relations.slice(lastFullyLoadedRelationToUse + 1);
                resultsFetched = 0;
                relationMap = (0, _createRelationMap.createRelationMap)({
                    hasMany: hasMany,
                    relationTo: relationTo,
                    value: valueArg
                });
                if (!errorLoading) {
                    relationsToFetch.reduce(function() {
                        var _ref = _async_to_generator(function(priorRelation, relation) {
                            var lastLoadedPageToUse, _collection_admin, _collection, _filterOptionsResult, collection, fieldToSearch, query, response, data;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        if (search !== searchArg) {
                                            lastLoadedPageToUse = 1;
                                        } else {
                                            lastLoadedPageToUse = lastLoadedPage[relation] + 1;
                                        }
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
                                        query = {
                                            where: {
                                                and: [
                                                    {
                                                        id: {
                                                            not_in: relationMap[relation]
                                                        }
                                                    }
                                                ]
                                            },
                                            limit: maxResultsPerRequest,
                                            page: lastLoadedPageToUse,
                                            sort: fieldToSearch,
                                            locale: locale,
                                            depth: 0
                                        };
                                        if (searchArg) {
                                            query.where.and.push(_define_property({}, fieldToSearch, {
                                                like: searchArg
                                            }));
                                        }
                                        if ((_filterOptionsResult = filterOptionsResult) === null || _filterOptionsResult === void 0 ? void 0 : _filterOptionsResult[relation]) {
                                            query.where.and.push(filterOptionsResult[relation]);
                                        }
                                        return [
                                            4,
                                            fetch("".concat(serverURL).concat(api, "/").concat(relation, "?").concat(_qs.default.stringify(query)), {
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
                                        setLastLoadedPage(function(prevState) {
                                            return _object_spread_props(_object_spread({}, prevState), _define_property({}, relation, lastLoadedPageToUse));
                                        });
                                        if (!data.nextPage) {
                                            setLastFullyLoadedRelation(relations.indexOf(relation));
                                        }
                                        if (data.docs.length > 0) {
                                            resultsFetched += data.docs.length;
                                            dispatchOptions({
                                                type: "ADD",
                                                docs: data.docs,
                                                collection: collection,
                                                sort: sort,
                                                i18n: i18n,
                                                config: config
                                            });
                                        }
                                        return [
                                            3,
                                            5
                                        ];
                                    case 4:
                                        if (response.status === 403) {
                                            setLastFullyLoadedRelation(relations.indexOf(relation));
                                            dispatchOptions({
                                                type: "ADD",
                                                docs: [],
                                                collection: collection,
                                                sort: sort,
                                                ids: relationMap[relation],
                                                i18n: i18n,
                                                config: config
                                            });
                                        } else {
                                            setErrorLoading(t("error:unspecific"));
                                        }
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
                    if (typeof onSuccess === "function") onSuccess();
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
        permissions,
        relationTo,
        hasMany,
        errorLoading,
        search,
        lastLoadedPage,
        collections,
        locale,
        filterOptionsResult,
        serverURL,
        api,
        i18n,
        config,
        t
    ]);
    var updateSearch = (0, _useDebouncedCallback.useDebouncedCallback)(function(searchArg, valueArg) {
        getResults({
            search: searchArg,
            value: valueArg,
            sort: true
        });
        setSearch(searchArg);
    }, 300);
    var handleInputChange = (0, _react.useCallback)(function(searchArg, valueArg) {
        if (search !== searchArg) {
            setLastLoadedPage({});
            updateSearch(searchArg, valueArg);
        }
    }, [
        search,
        updateSearch
    ]);
    // ///////////////////////////////////
    // Ensure we have an option for each value
    // ///////////////////////////////////
    (0, _react.useEffect)(function() {
        var relationMap = (0, _createRelationMap.createRelationMap)({
            hasMany: hasMany,
            relationTo: relationTo,
            value: value
        });
        Object.entries(relationMap).reduce(function() {
            var _ref = _async_to_generator(function(priorRelation, param) {
                var _param, relation, ids, idsToLoad, query, response, collection, docs, data;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _param = _sliced_to_array(param, 2), relation = _param[0], ids = _param[1];
                            return [
                                4,
                                priorRelation
                            ];
                        case 1:
                            _state.sent();
                            idsToLoad = ids.filter(function(id) {
                                return !options.find(function(optionGroup) {
                                    var _optionGroup_options, _optionGroup;
                                    return (_optionGroup = optionGroup) === null || _optionGroup === void 0 ? void 0 : (_optionGroup_options = _optionGroup.options) === null || _optionGroup_options === void 0 ? void 0 : _optionGroup_options.find(function(option) {
                                        return option.value === id && option.relationTo === relation;
                                    });
                                });
                            });
                            if (!(idsToLoad.length > 0)) return [
                                3,
                                5
                            ];
                            query = {
                                where: {
                                    id: {
                                        in: idsToLoad
                                    }
                                },
                                depth: 0,
                                locale: locale,
                                limit: idsToLoad.length
                            };
                            if (!!errorLoading) return [
                                3,
                                5
                            ];
                            return [
                                4,
                                fetch("".concat(serverURL).concat(api, "/").concat(relation, "?").concat(_qs.default.stringify(query)), {
                                    credentials: "include",
                                    headers: {
                                        "Accept-Language": i18n.language
                                    }
                                })
                            ];
                        case 2:
                            response = _state.sent();
                            collection = collections.find(function(coll) {
                                return coll.slug === relation;
                            });
                            docs = [];
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
                            docs = data.docs;
                            _state.label = 4;
                        case 4:
                            dispatchOptions({
                                type: "ADD",
                                docs: docs,
                                collection: collection,
                                sort: true,
                                ids: idsToLoad,
                                i18n: i18n,
                                config: config
                            });
                            _state.label = 5;
                        case 5:
                            return [
                                2
                            ];
                    }
                });
            });
            return function(priorRelation, _) {
                return _ref.apply(this, arguments);
            };
        }(), Promise.resolve());
    }, [
        options,
        value,
        hasMany,
        errorLoading,
        collections,
        hasMultipleRelations,
        serverURL,
        api,
        i18n,
        relationTo,
        locale,
        config
    ]);
    // Determine if we should switch to word boundary search
    (0, _react.useEffect)(function() {
        var relations = Array.isArray(relationTo) ? relationTo : [
            relationTo
        ];
        var isIdOnly = relations.reduce(function(idOnly, relation) {
            var _collection_admin, _collection;
            var collection = collections.find(function(coll) {
                return coll.slug === relation;
            });
            var fieldToSearch = ((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_admin = _collection.admin) === null || _collection_admin === void 0 ? void 0 : _collection_admin.useAsTitle) || "id";
            return fieldToSearch === "id" && idOnly;
        }, true);
        setEnableWordBoundarySearch(!isIdOnly);
    }, [
        relationTo,
        collections
    ]);
    // When (`relationTo` || `filterOptionsResult` || `locale`) changes, reset component
    // Note - effect should not run on first run
    (0, _react.useEffect)(function() {
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }
        dispatchOptions({
            type: "CLEAR"
        });
        setLastFullyLoadedRelation(-1);
        setLastLoadedPage({});
        setHasLoadedFirstPage(false);
    }, [
        relationTo,
        filterOptionsResult,
        locale
    ]);
    var onSave = (0, _react.useCallback)(function(args) {
        dispatchOptions({
            type: "UPDATE",
            doc: args.doc,
            collection: args.collectionConfig,
            i18n: i18n,
            config: config
        });
    }, [
        i18n,
        config
    ]);
    var filterOption = (0, _react.useCallback)(function(item, searchFilter) {
        if (!searchFilter) {
            return true;
        }
        var r = (0, _wordBoundariesRegex.default)(searchFilter || "");
        // breaking the labels to search into smaller parts increases performance
        var breakApartThreshold = 250;
        var string = item.label;
        // strings less than breakApartThreshold length won't be chunked
        while(string.length > breakApartThreshold){
            // slicing by the next space after the length of the search input prevents slicing the string up by partial words
            var indexOfSpace = string.indexOf(" ", searchFilter.length);
            if (r.test(string.slice(0, indexOfSpace === -1 ? searchFilter.length : indexOfSpace + 1))) {
                return true;
            }
            string = string.slice(indexOfSpace === -1 ? searchFilter.length : indexOfSpace + 1);
        }
        return r.test(string.slice(-breakApartThreshold));
    }, []);
    var classes = [
        "field-type",
        baseClass,
        className,
        showError && "error",
        errorLoading && "error-loading",
        readOnly && "".concat(baseClass, "--read-only")
    ].filter(Boolean).join(" ");
    var valueToRender = (0, _findOptionsByValue.findOptionsByValue)({
        value: value,
        options: options
    });
    if (!Array.isArray(valueToRender) && ((_valueToRender = valueToRender) === null || _valueToRender === void 0 ? void 0 : _valueToRender.value) === "null") valueToRender.value = null;
    return /*#__PURE__*/ _react.default.createElement("div", {
        id: "field-".concat(pathOrName.replace(/\./gi, "__")),
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ _react.default.createElement(_Error.default, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: pathOrName,
        label: label,
        required: required
    }), /*#__PURE__*/ _react.default.createElement(_GetFilterOptions.GetFilterOptions, {
        filterOptionsResult: filterOptionsResult,
        setFilterOptionsResult: setFilterOptionsResult,
        filterOptions: filterOptions,
        path: pathOrName,
        relationTo: relationTo
    }), !errorLoading && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        backspaceRemovesValue: !drawerIsOpen,
        disabled: readOnly || formProcessing,
        onInputChange: function(newSearch) {
            return handleInputChange(newSearch, value);
        },
        onChange: !readOnly ? function(selected) {
            if (selected === null) {
                setValue(hasMany ? [] : null);
            } else if (hasMany) {
                setValue(selected ? selected.map(function(option) {
                    if (hasMultipleRelations) {
                        return {
                            relationTo: option.relationTo,
                            value: option.value
                        };
                    }
                    return option.value;
                }) : null);
            } else if (hasMultipleRelations) {
                setValue({
                    relationTo: selected.relationTo,
                    value: selected.value
                });
            } else {
                setValue(selected.value);
            }
        } : undefined,
        onMenuScrollToBottom: function() {
            getResults({
                lastFullyLoadedRelation: lastFullyLoadedRelation,
                search: search,
                value: initialValue,
                sort: false
            });
        },
        value: valueToRender !== null && valueToRender !== void 0 ? valueToRender : null,
        showError: showError,
        options: options,
        isMulti: hasMany,
        isSortable: isSortable,
        isLoading: isLoading,
        components: {
            SingleValue: _SingleValue.SingleValue,
            MultiValueLabel: _MultiValueLabel.MultiValueLabel
        },
        customProps: {
            disableMouseDown: drawerIsOpen,
            disableKeyDown: drawerIsOpen,
            setDrawerIsOpen: setDrawerIsOpen,
            onSave: onSave
        },
        onMenuOpen: function() {
            if (!hasLoadedFirstPage) {
                setIsLoading(true);
                getResults({
                    value: initialValue,
                    onSuccess: function() {
                        setHasLoadedFirstPage(true);
                        setIsLoading(false);
                    }
                });
            }
        },
        filterOption: enableWordBoundarySearch ? filterOption : undefined
    }), !readOnly && allowCreate && /*#__PURE__*/ _react.default.createElement(_AddNew.AddNewRelation, {
        path: pathOrName,
        hasMany: hasMany,
        relationTo: relationTo,
        value: value,
        setValue: setValue,
        dispatchOptions: dispatchOptions,
        options: options
    })), errorLoading && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__error-loading")
    }, errorLoading), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        value: value,
        description: description
    }));
};
var _default = (0, _withCondition.default)(Relationship);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1JlYWN0U2VsZWN0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgcmVsYXRpb25zaGlwIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgdXNlRm9ybVByb2Nlc3NpbmcgfSBmcm9tICcuLi8uLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IG9wdGlvbnNSZWR1Y2VyIGZyb20gJy4vb3B0aW9uc1JlZHVjZXInO1xuaW1wb3J0IHsgRmlsdGVyT3B0aW9uc1Jlc3VsdCwgR2V0UmVzdWx0cywgT3B0aW9uLCBQcm9wcywgVmFsdWUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVJlbGF0aW9uTWFwIH0gZnJvbSAnLi9jcmVhdGVSZWxhdGlvbk1hcCc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZWRDYWxsYmFjayB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZURlYm91bmNlZENhbGxiYWNrJztcbmltcG9ydCB3b3JkQm91bmRhcmllc1JlZ2V4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy93b3JkQm91bmRhcmllc1JlZ2V4JztcbmltcG9ydCB7IEFkZE5ld1JlbGF0aW9uIH0gZnJvbSAnLi9BZGROZXcnO1xuaW1wb3J0IHsgZmluZE9wdGlvbnNCeVZhbHVlIH0gZnJvbSAnLi9maW5kT3B0aW9uc0J5VmFsdWUnO1xuaW1wb3J0IHsgR2V0RmlsdGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9HZXRGaWx0ZXJPcHRpb25zJztcbmltcG9ydCB7IFNpbmdsZVZhbHVlIH0gZnJvbSAnLi9zZWxlY3QtY29tcG9uZW50cy9TaW5nbGVWYWx1ZSc7XG5pbXBvcnQgeyBNdWx0aVZhbHVlTGFiZWwgfSBmcm9tICcuL3NlbGVjdC1jb21wb25lbnRzL011bHRpVmFsdWVMYWJlbCc7XG5pbXBvcnQgeyBEb2N1bWVudERyYXdlclByb3BzIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRG9jdW1lbnREcmF3ZXIvdHlwZXMnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgbWF4UmVzdWx0c1BlclJlcXVlc3QgPSAxMDtcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JlbGF0aW9uc2hpcCc7XG5cbmNvbnN0IFJlbGF0aW9uc2hpcDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZWxhdGlvblRvLFxuICAgIHZhbGlkYXRlID0gcmVsYXRpb25zaGlwLFxuICAgIHBhdGgsXG4gICAgbmFtZSxcbiAgICByZXF1aXJlZCxcbiAgICBsYWJlbCxcbiAgICBoYXNNYW55LFxuICAgIGZpbHRlck9wdGlvbnMsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgaXNTb3J0YWJsZSA9IHRydWUsXG4gICAgICBhbGxvd0NyZWF0ZSA9IHRydWUsXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3Qge1xuICAgIHNlcnZlclVSTCxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFwaSxcbiAgICB9LFxuICAgIGNvbGxlY3Rpb25zLFxuICB9ID0gY29uZmlnO1xuXG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgZm9ybVByb2Nlc3NpbmcgPSB1c2VGb3JtUHJvY2Vzc2luZygpO1xuICBjb25zdCBoYXNNdWx0aXBsZVJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25Ubyk7XG4gIGNvbnN0IFtvcHRpb25zLCBkaXNwYXRjaE9wdGlvbnNdID0gdXNlUmVkdWNlcihvcHRpb25zUmVkdWNlciwgW10pO1xuICBjb25zdCBbbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24sIHNldExhc3RGdWxseUxvYWRlZFJlbGF0aW9uXSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW2xhc3RMb2FkZWRQYWdlLCBzZXRMYXN0TG9hZGVkUGFnZV0gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+Pih7fSk7XG4gIGNvbnN0IFtlcnJvckxvYWRpbmcsIHNldEVycm9yTG9hZGluZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaWx0ZXJPcHRpb25zUmVzdWx0LCBzZXRGaWx0ZXJPcHRpb25zUmVzdWx0XSA9IHVzZVN0YXRlPEZpbHRlck9wdGlvbnNSZXN1bHQ+KCk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYXNMb2FkZWRGaXJzdFBhZ2UsIHNldEhhc0xvYWRlZEZpcnN0UGFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbmFibGVXb3JkQm91bmRhcnlTZWFyY2gsIHNldEVuYWJsZVdvcmRCb3VuZGFyeVNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGZpcnN0UnVuID0gdXNlUmVmKHRydWUpO1xuICBjb25zdCBwYXRoT3JOYW1lID0gcGF0aCB8fCBuYW1lO1xuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygodmFsdWUsIHZhbGlkYXRpb25PcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLnZhbGlkYXRpb25PcHRpb25zLCByZXF1aXJlZCB9KTtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIHNldFZhbHVlLFxuICAgIGluaXRpYWxWYWx1ZSxcbiAgfSA9IHVzZUZpZWxkPFZhbHVlIHwgVmFsdWVbXT4oe1xuICAgIHBhdGg6IHBhdGhPck5hbWUsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gICAgY29uZGl0aW9uLFxuICB9KTtcblxuICBjb25zdCBbZHJhd2VySXNPcGVuLCBzZXREcmF3ZXJJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldFJlc3VsdHM6IEdldFJlc3VsdHMgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoe1xuICAgICAgbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb246IGxhc3RGdWxseUxvYWRlZFJlbGF0aW9uQXJnLFxuICAgICAgc2VhcmNoOiBzZWFyY2hBcmcsXG4gICAgICB2YWx1ZTogdmFsdWVBcmcsXG4gICAgICBzb3J0LFxuICAgICAgb25TdWNjZXNzLFxuICAgIH0pID0+IHtcbiAgICAgIGlmICghcGVybWlzc2lvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25Ub1VzZSA9IHR5cGVvZiBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbkFyZyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbkFyZ1xuICAgICAgICA6IC0xO1xuXG4gICAgICBjb25zdCByZWxhdGlvbnMgPSBBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pID8gcmVsYXRpb25UbyA6IFtyZWxhdGlvblRvXTtcbiAgICAgIGNvbnN0IHJlbGF0aW9uc1RvRmV0Y2ggPSBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlID09PSAtMVxuICAgICAgICA/IHJlbGF0aW9uc1xuICAgICAgICA6IHJlbGF0aW9ucy5zbGljZShsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlICsgMSk7XG5cbiAgICAgIGxldCByZXN1bHRzRmV0Y2hlZCA9IDA7XG4gICAgICBjb25zdCByZWxhdGlvbk1hcCA9IGNyZWF0ZVJlbGF0aW9uTWFwKHtcbiAgICAgICAgaGFzTWFueSxcbiAgICAgICAgcmVsYXRpb25UbyxcbiAgICAgICAgdmFsdWU6IHZhbHVlQXJnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghZXJyb3JMb2FkaW5nKSB7XG4gICAgICAgIHJlbGF0aW9uc1RvRmV0Y2gucmVkdWNlKGFzeW5jIChwcmlvclJlbGF0aW9uLCByZWxhdGlvbikgPT4ge1xuICAgICAgICAgIGxldCBsYXN0TG9hZGVkUGFnZVRvVXNlO1xuICAgICAgICAgIGlmIChzZWFyY2ggIT09IHNlYXJjaEFyZykge1xuICAgICAgICAgICAgbGFzdExvYWRlZFBhZ2VUb1VzZSA9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RMb2FkZWRQYWdlVG9Vc2UgPSBsYXN0TG9hZGVkUGFnZVtyZWxhdGlvbl0gKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCBwcmlvclJlbGF0aW9uO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdHNGZXRjaGVkIDwgMTApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKFxuICAgICAgICAgICAgICAoY29sbCkgPT4gY29sbC5zbHVnID09PSByZWxhdGlvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFRvU2VhcmNoID0gY29sbGVjdGlvbj8uYWRtaW4/LnVzZUFzVGl0bGUgfHwgJ2lkJztcblxuICAgICAgICAgICAgY29uc3QgcXVlcnk6IHtcbiAgICAgICAgICAgICAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbiAgICAgICAgICAgICAgd2hlcmU6IFdoZXJlO1xuICAgICAgICAgICAgfSA9IHtcbiAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBhbmQ6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBub3RfaW46IHJlbGF0aW9uTWFwW3JlbGF0aW9uXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGltaXQ6IG1heFJlc3VsdHNQZXJSZXF1ZXN0LFxuICAgICAgICAgICAgICBwYWdlOiBsYXN0TG9hZGVkUGFnZVRvVXNlLFxuICAgICAgICAgICAgICBzb3J0OiBmaWVsZFRvU2VhcmNoLFxuICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHNlYXJjaEFyZykge1xuICAgICAgICAgICAgICBxdWVyeS53aGVyZS5hbmQucHVzaCh7XG4gICAgICAgICAgICAgICAgW2ZpZWxkVG9TZWFyY2hdOiB7XG4gICAgICAgICAgICAgICAgICBsaWtlOiBzZWFyY2hBcmcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXJPcHRpb25zUmVzdWx0Py5bcmVsYXRpb25dKSB7XG4gICAgICAgICAgICAgIHF1ZXJ5LndoZXJlLmFuZC5wdXNoKGZpbHRlck9wdGlvbnNSZXN1bHRbcmVsYXRpb25dKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgYCR7c2VydmVyVVJMfSR7YXBpfS8ke3JlbGF0aW9ufT8ke3FzLnN0cmluZ2lmeShxdWVyeSl9YCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICBjb25zdCBkYXRhOiBQYWdpbmF0ZWREb2NzPHVua25vd24+ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICBzZXRMYXN0TG9hZGVkUGFnZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICAgIFtyZWxhdGlvbl06IGxhc3RMb2FkZWRQYWdlVG9Vc2UsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKCFkYXRhLm5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgc2V0TGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24ocmVsYXRpb25zLmluZGV4T2YocmVsYXRpb24pKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChkYXRhLmRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNGZXRjaGVkICs9IGRhdGEuZG9jcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBkaXNwYXRjaE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERCcsXG4gICAgICAgICAgICAgICAgICBkb2NzOiBkYXRhLmRvY3MsXG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICAgIGkxOG4sXG4gICAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgc2V0TGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24ocmVsYXRpb25zLmluZGV4T2YocmVsYXRpb24pKTtcbiAgICAgICAgICAgICAgZGlzcGF0Y2hPcHRpb25zKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQUREJyxcbiAgICAgICAgICAgICAgICBkb2NzOiBbXSxcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgaWRzOiByZWxhdGlvbk1hcFtyZWxhdGlvbl0sXG4gICAgICAgICAgICAgICAgaTE4bixcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0RXJyb3JMb2FkaW5nKHQoJ2Vycm9yOnVuc3BlY2lmaWMnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvblN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIG9uU3VjY2VzcygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgcGVybWlzc2lvbnMsXG4gICAgICByZWxhdGlvblRvLFxuICAgICAgaGFzTWFueSxcbiAgICAgIGVycm9yTG9hZGluZyxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGxhc3RMb2FkZWRQYWdlLFxuICAgICAgY29sbGVjdGlvbnMsXG4gICAgICBsb2NhbGUsXG4gICAgICBmaWx0ZXJPcHRpb25zUmVzdWx0LFxuICAgICAgc2VydmVyVVJMLFxuICAgICAgYXBpLFxuICAgICAgaTE4bixcbiAgICAgIGNvbmZpZyxcbiAgICAgIHQsXG4gICAgXSxcbiAgKTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2ggPSB1c2VEZWJvdW5jZWRDYWxsYmFjaygoc2VhcmNoQXJnOiBzdHJpbmcsIHZhbHVlQXJnOiBWYWx1ZSB8IFZhbHVlW10pID0+IHtcbiAgICBnZXRSZXN1bHRzKHsgc2VhcmNoOiBzZWFyY2hBcmcsIHZhbHVlOiB2YWx1ZUFyZywgc29ydDogdHJ1ZSB9KTtcbiAgICBzZXRTZWFyY2goc2VhcmNoQXJnKTtcbiAgfSwgMzAwKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IHVzZUNhbGxiYWNrKChzZWFyY2hBcmc6IHN0cmluZywgdmFsdWVBcmc6IFZhbHVlIHwgVmFsdWVbXSkgPT4ge1xuICAgIGlmIChzZWFyY2ggIT09IHNlYXJjaEFyZykge1xuICAgICAgc2V0TGFzdExvYWRlZFBhZ2Uoe30pO1xuICAgICAgdXBkYXRlU2VhcmNoKHNlYXJjaEFyZywgdmFsdWVBcmcpO1xuICAgIH1cbiAgfSwgW3NlYXJjaCwgdXBkYXRlU2VhcmNoXSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gRW5zdXJlIHdlIGhhdmUgYW4gb3B0aW9uIGZvciBlYWNoIHZhbHVlXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbk1hcCA9IGNyZWF0ZVJlbGF0aW9uTWFwKHtcbiAgICAgIGhhc01hbnksXG4gICAgICByZWxhdGlvblRvLFxuICAgICAgdmFsdWUsXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhyZWxhdGlvbk1hcCkucmVkdWNlKGFzeW5jIChwcmlvclJlbGF0aW9uLCBbcmVsYXRpb24sIGlkc10pID0+IHtcbiAgICAgIGF3YWl0IHByaW9yUmVsYXRpb247XG5cbiAgICAgIGNvbnN0IGlkc1RvTG9hZCA9IGlkcy5maWx0ZXIoKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiAhb3B0aW9ucy5maW5kKChvcHRpb25Hcm91cCkgPT4gb3B0aW9uR3JvdXA/Lm9wdGlvbnM/LmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBpZCAmJiBvcHRpb24ucmVsYXRpb25UbyA9PT0gcmVsYXRpb24pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaWRzVG9Mb2FkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgIGluOiBpZHNUb0xvYWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIGxpbWl0OiBpZHNUb0xvYWQubGVuZ3RoLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghZXJyb3JMb2FkaW5nKSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7cmVsYXRpb259PyR7cXMuc3RyaW5naWZ5KHF1ZXJ5KX1gLCB7XG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSByZWxhdGlvbik7XG4gICAgICAgICAgbGV0IGRvY3MgPSBbXTtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGRvY3MgPSBkYXRhLmRvY3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2hPcHRpb25zKHtcbiAgICAgICAgICAgIHR5cGU6ICdBREQnLFxuICAgICAgICAgICAgZG9jcyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICAgICAgaWRzOiBpZHNUb0xvYWQsXG4gICAgICAgICAgICBpMThuLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICB9LCBbXG4gICAgb3B0aW9ucyxcbiAgICB2YWx1ZSxcbiAgICBoYXNNYW55LFxuICAgIGVycm9yTG9hZGluZyxcbiAgICBjb2xsZWN0aW9ucyxcbiAgICBoYXNNdWx0aXBsZVJlbGF0aW9ucyxcbiAgICBzZXJ2ZXJVUkwsXG4gICAgYXBpLFxuICAgIGkxOG4sXG4gICAgcmVsYXRpb25UbyxcbiAgICBsb2NhbGUsXG4gICAgY29uZmlnLFxuICBdKTtcblxuICAvLyBEZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIHN3aXRjaCB0byB3b3JkIGJvdW5kYXJ5IHNlYXJjaFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykgPyByZWxhdGlvblRvIDogW3JlbGF0aW9uVG9dO1xuICAgIGNvbnN0IGlzSWRPbmx5ID0gcmVsYXRpb25zLnJlZHVjZSgoaWRPbmx5LCByZWxhdGlvbikgPT4ge1xuICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGwpID0+IGNvbGwuc2x1ZyA9PT0gcmVsYXRpb24pO1xuICAgICAgY29uc3QgZmllbGRUb1NlYXJjaCA9IGNvbGxlY3Rpb24/LmFkbWluPy51c2VBc1RpdGxlIHx8ICdpZCc7XG4gICAgICByZXR1cm4gZmllbGRUb1NlYXJjaCA9PT0gJ2lkJyAmJiBpZE9ubHk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgc2V0RW5hYmxlV29yZEJvdW5kYXJ5U2VhcmNoKCFpc0lkT25seSk7XG4gIH0sIFtyZWxhdGlvblRvLCBjb2xsZWN0aW9uc10pO1xuXG4gIC8vIFdoZW4gKGByZWxhdGlvblRvYCB8fCBgZmlsdGVyT3B0aW9uc1Jlc3VsdGAgfHwgYGxvY2FsZWApIGNoYW5nZXMsIHJlc2V0IGNvbXBvbmVudFxuICAvLyBOb3RlIC0gZWZmZWN0IHNob3VsZCBub3QgcnVuIG9uIGZpcnN0IHJ1blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hPcHRpb25zKHsgdHlwZTogJ0NMRUFSJyB9KTtcbiAgICBzZXRMYXN0RnVsbHlMb2FkZWRSZWxhdGlvbigtMSk7XG4gICAgc2V0TGFzdExvYWRlZFBhZ2Uoe30pO1xuICAgIHNldEhhc0xvYWRlZEZpcnN0UGFnZShmYWxzZSk7XG4gIH0sIFtyZWxhdGlvblRvLCBmaWx0ZXJPcHRpb25zUmVzdWx0LCBsb2NhbGVdKTtcblxuICBjb25zdCBvblNhdmUgPSB1c2VDYWxsYmFjazxEb2N1bWVudERyYXdlclByb3BzWydvblNhdmUnXT4oKGFyZ3MpID0+IHtcbiAgICBkaXNwYXRjaE9wdGlvbnMoeyB0eXBlOiAnVVBEQVRFJywgZG9jOiBhcmdzLmRvYywgY29sbGVjdGlvbjogYXJncy5jb2xsZWN0aW9uQ29uZmlnLCBpMThuLCBjb25maWcgfSk7XG4gIH0sIFtpMThuLCBjb25maWddKTtcblxuICBjb25zdCBmaWx0ZXJPcHRpb24gPSB1c2VDYWxsYmFjaygoaXRlbTogT3B0aW9uLCBzZWFyY2hGaWx0ZXI6IHN0cmluZykgPT4ge1xuICAgIGlmICghc2VhcmNoRmlsdGVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgciA9IHdvcmRCb3VuZGFyaWVzUmVnZXgoc2VhcmNoRmlsdGVyIHx8ICcnKTtcbiAgICAvLyBicmVha2luZyB0aGUgbGFiZWxzIHRvIHNlYXJjaCBpbnRvIHNtYWxsZXIgcGFydHMgaW5jcmVhc2VzIHBlcmZvcm1hbmNlXG4gICAgY29uc3QgYnJlYWtBcGFydFRocmVzaG9sZCA9IDI1MDtcbiAgICBsZXQgc3RyaW5nID0gaXRlbS5sYWJlbDtcbiAgICAvLyBzdHJpbmdzIGxlc3MgdGhhbiBicmVha0FwYXJ0VGhyZXNob2xkIGxlbmd0aCB3b24ndCBiZSBjaHVua2VkXG4gICAgd2hpbGUgKHN0cmluZy5sZW5ndGggPiBicmVha0FwYXJ0VGhyZXNob2xkKSB7XG4gICAgICAvLyBzbGljaW5nIGJ5IHRoZSBuZXh0IHNwYWNlIGFmdGVyIHRoZSBsZW5ndGggb2YgdGhlIHNlYXJjaCBpbnB1dCBwcmV2ZW50cyBzbGljaW5nIHRoZSBzdHJpbmcgdXAgYnkgcGFydGlhbCB3b3Jkc1xuICAgICAgY29uc3QgaW5kZXhPZlNwYWNlID0gc3RyaW5nLmluZGV4T2YoJyAnLCBzZWFyY2hGaWx0ZXIubGVuZ3RoKTtcbiAgICAgIGlmIChyLnRlc3Qoc3RyaW5nLnNsaWNlKDAsIGluZGV4T2ZTcGFjZSA9PT0gLTEgPyBzZWFyY2hGaWx0ZXIubGVuZ3RoIDogaW5kZXhPZlNwYWNlICsgMSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKGluZGV4T2ZTcGFjZSA9PT0gLTEgPyBzZWFyY2hGaWx0ZXIubGVuZ3RoIDogaW5kZXhPZlNwYWNlICsgMSk7XG4gICAgfVxuICAgIHJldHVybiByLnRlc3Qoc3RyaW5nLnNsaWNlKC1icmVha0FwYXJ0VGhyZXNob2xkKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgIGVycm9yTG9hZGluZyAmJiAnZXJyb3ItbG9hZGluZycsXG4gICAgcmVhZE9ubHkgJiYgYCR7YmFzZUNsYXNzfS0tcmVhZC1vbmx5YCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIGNvbnN0IHZhbHVlVG9SZW5kZXIgPSBmaW5kT3B0aW9uc0J5VmFsdWUoeyB2YWx1ZSwgb3B0aW9ucyB9KTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlVG9SZW5kZXIpICYmIHZhbHVlVG9SZW5kZXI/LnZhbHVlID09PSAnbnVsbCcpIHZhbHVlVG9SZW5kZXIudmFsdWUgPSBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9e2BmaWVsZC0keyhwYXRoT3JOYW1lKS5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDxMYWJlbFxuICAgICAgICBodG1sRm9yPXtwYXRoT3JOYW1lfVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIC8+XG4gICAgICA8R2V0RmlsdGVyT3B0aW9ucyB7Li4ueyBmaWx0ZXJPcHRpb25zUmVzdWx0LCBzZXRGaWx0ZXJPcHRpb25zUmVzdWx0LCBmaWx0ZXJPcHRpb25zLCBwYXRoOiBwYXRoT3JOYW1lLCByZWxhdGlvblRvIH19IC8+XG4gICAgICB7IWVycm9yTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU9eyFkcmF3ZXJJc09wZW59XG4gICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHkgfHwgZm9ybVByb2Nlc3Npbmd9XG4gICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsobmV3U2VhcmNoKSA9PiBoYW5kbGVJbnB1dENoYW5nZShuZXdTZWFyY2gsIHZhbHVlKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXshcmVhZE9ubHkgPyAoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoaGFzTWFueSA/IFtdIDogbnVsbCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzTWFueSkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKHNlbGVjdGVkID8gc2VsZWN0ZWQubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IG9wdGlvbi5yZWxhdGlvblRvLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgfSkgOiBudWxsKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucykge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IHNlbGVjdGVkLnJlbGF0aW9uVG8sXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b209eygpID0+IHtcbiAgICAgICAgICAgICAgZ2V0UmVzdWx0cyh7XG4gICAgICAgICAgICAgICAgbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24sXG4gICAgICAgICAgICAgICAgc2VhcmNoLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICAgICAgc29ydDogZmFsc2UsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvUmVuZGVyID8/IG51bGx9XG4gICAgICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICBpc011bHRpPXtoYXNNYW55fVxuICAgICAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICBTaW5nbGVWYWx1ZSxcbiAgICAgICAgICAgICAgTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGN1c3RvbVByb3BzPXt7XG4gICAgICAgICAgICAgIGRpc2FibGVNb3VzZURvd246IGRyYXdlcklzT3BlbixcbiAgICAgICAgICAgICAgZGlzYWJsZUtleURvd246IGRyYXdlcklzT3BlbixcbiAgICAgICAgICAgICAgc2V0RHJhd2VySXNPcGVuLFxuICAgICAgICAgICAgICBvblNhdmUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25NZW51T3Blbj17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWhhc0xvYWRlZEZpcnN0UGFnZSkge1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBnZXRSZXN1bHRzKHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzTG9hZGVkRmlyc3RQYWdlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGZpbHRlck9wdGlvbj17ZW5hYmxlV29yZEJvdW5kYXJ5U2VhcmNoID8gZmlsdGVyT3B0aW9uIDogdW5kZWZpbmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyFyZWFkT25seSAmJiBhbGxvd0NyZWF0ZSAmJiAoXG4gICAgICAgICAgICA8QWRkTmV3UmVsYXRpb25cbiAgICAgICAgICAgICAgey4uLnsgcGF0aDogcGF0aE9yTmFtZSwgaGFzTWFueSwgcmVsYXRpb25UbywgdmFsdWUsIHNldFZhbHVlLCBkaXNwYXRjaE9wdGlvbnMsIG9wdGlvbnMgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2Vycm9yTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19lcnJvci1sb2FkaW5nYH0+XG4gICAgICAgICAge2Vycm9yTG9hZGluZ31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihSZWxhdGlvbnNoaXApO1xuIl0sIm5hbWVzIjpbIm1heFJlc3VsdHNQZXJSZXF1ZXN0IiwiYmFzZUNsYXNzIiwiUmVsYXRpb25zaGlwIiwicHJvcHMiLCJ2YWx1ZVRvUmVuZGVyIiwicmVsYXRpb25UbyIsInZhbGlkYXRlIiwicmVsYXRpb25zaGlwIiwicGF0aCIsIm5hbWUiLCJyZXF1aXJlZCIsImxhYmVsIiwiaGFzTWFueSIsImZpbHRlck9wdGlvbnMiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwiaXNTb3J0YWJsZSIsImFsbG93Q3JlYXRlIiwiY29uZmlnIiwidXNlQ29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwiY29sbGVjdGlvbnMiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwicGVybWlzc2lvbnMiLCJ1c2VBdXRoIiwidXNlTG9jYWxlIiwiY29kZSIsImxvY2FsZSIsImZvcm1Qcm9jZXNzaW5nIiwidXNlRm9ybVByb2Nlc3NpbmciLCJoYXNNdWx0aXBsZVJlbGF0aW9ucyIsIkFycmF5IiwiaXNBcnJheSIsInVzZVJlZHVjZXIiLCJvcHRpb25zUmVkdWNlciIsIm9wdGlvbnMiLCJkaXNwYXRjaE9wdGlvbnMiLCJ1c2VTdGF0ZSIsImxhc3RGdWxseUxvYWRlZFJlbGF0aW9uIiwic2V0TGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24iLCJsYXN0TG9hZGVkUGFnZSIsInNldExhc3RMb2FkZWRQYWdlIiwiZXJyb3JMb2FkaW5nIiwic2V0RXJyb3JMb2FkaW5nIiwiZmlsdGVyT3B0aW9uc1Jlc3VsdCIsInNldEZpbHRlck9wdGlvbnNSZXN1bHQiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYXNMb2FkZWRGaXJzdFBhZ2UiLCJzZXRIYXNMb2FkZWRGaXJzdFBhZ2UiLCJlbmFibGVXb3JkQm91bmRhcnlTZWFyY2giLCJzZXRFbmFibGVXb3JkQm91bmRhcnlTZWFyY2giLCJmaXJzdFJ1biIsInVzZVJlZiIsInBhdGhPck5hbWUiLCJtZW1vaXplZFZhbGlkYXRlIiwidXNlQ2FsbGJhY2siLCJ2YWx1ZSIsInZhbGlkYXRpb25PcHRpb25zIiwidXNlRmllbGQiLCJzaG93RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZXRWYWx1ZSIsImluaXRpYWxWYWx1ZSIsImRyYXdlcklzT3BlbiIsInNldERyYXdlcklzT3BlbiIsImdldFJlc3VsdHMiLCJsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbkFyZyIsInNlYXJjaEFyZyIsInZhbHVlQXJnIiwic29ydCIsIm9uU3VjY2VzcyIsImxhc3RGdWxseUxvYWRlZFJlbGF0aW9uVG9Vc2UiLCJyZWxhdGlvbnMiLCJyZWxhdGlvbnNUb0ZldGNoIiwicmVzdWx0c0ZldGNoZWQiLCJyZWxhdGlvbk1hcCIsInNsaWNlIiwiY3JlYXRlUmVsYXRpb25NYXAiLCJyZWR1Y2UiLCJwcmlvclJlbGF0aW9uIiwicmVsYXRpb24iLCJsYXN0TG9hZGVkUGFnZVRvVXNlIiwiY29sbGVjdGlvbiIsImZpZWxkVG9TZWFyY2giLCJxdWVyeSIsInJlc3BvbnNlIiwiZGF0YSIsImZpbmQiLCJjb2xsIiwic2x1ZyIsInVzZUFzVGl0bGUiLCJ3aGVyZSIsImFuZCIsImlkIiwibm90X2luIiwibGltaXQiLCJwYWdlIiwiZGVwdGgiLCJwdXNoIiwibGlrZSIsImZldGNoIiwicXMiLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJsYW5ndWFnZSIsIm9rIiwianNvbiIsInByZXZTdGF0ZSIsIm5leHRQYWdlIiwiaW5kZXhPZiIsImRvY3MiLCJsZW5ndGgiLCJ0eXBlIiwic3RhdHVzIiwiaWRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cGRhdGVTZWFyY2giLCJ1c2VEZWJvdW5jZWRDYWxsYmFjayIsImhhbmRsZUlucHV0Q2hhbmdlIiwidXNlRWZmZWN0IiwiT2JqZWN0IiwiZW50cmllcyIsImlkc1RvTG9hZCIsImZpbHRlciIsIm9wdGlvbkdyb3VwIiwib3B0aW9uIiwiaW4iLCJpc0lkT25seSIsImlkT25seSIsImN1cnJlbnQiLCJvblNhdmUiLCJhcmdzIiwiZG9jIiwiY29sbGVjdGlvbkNvbmZpZyIsImZpbHRlck9wdGlvbiIsIml0ZW0iLCJzZWFyY2hGaWx0ZXIiLCJyIiwid29yZEJvdW5kYXJpZXNSZWdleCIsImJyZWFrQXBhcnRUaHJlc2hvbGQiLCJzdHJpbmciLCJpbmRleE9mU3BhY2UiLCJ0ZXN0IiwiY2xhc3NlcyIsIkJvb2xlYW4iLCJqb2luIiwiZmluZE9wdGlvbnNCeVZhbHVlIiwiZGl2IiwicmVwbGFjZSIsIkVycm9yIiwibWVzc2FnZSIsIkxhYmVsIiwiaHRtbEZvciIsIkdldEZpbHRlck9wdGlvbnMiLCJSZWFjdFNlbGVjdCIsImJhY2tzcGFjZVJlbW92ZXNWYWx1ZSIsImRpc2FibGVkIiwib25JbnB1dENoYW5nZSIsIm5ld1NlYXJjaCIsIm9uQ2hhbmdlIiwic2VsZWN0ZWQiLCJtYXAiLCJ1bmRlZmluZWQiLCJvbk1lbnVTY3JvbGxUb0JvdHRvbSIsImlzTXVsdGkiLCJjb21wb25lbnRzIiwiU2luZ2xlVmFsdWUiLCJNdWx0aVZhbHVlTGFiZWwiLCJjdXN0b21Qcm9wcyIsImRpc2FibGVNb3VzZURvd24iLCJkaXNhYmxlS2V5RG93biIsIm9uTWVudU9wZW4iLCJBZGROZXdSZWxhdGlvbiIsIkZpZWxkRGVzY3JpcHRpb24iLCJ3aXRoQ29uZGl0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQXFmQTs7O2VBQUE7Ozs2REFyZjRFO3lEQUM3RDs0QkFDZ0I7c0JBQ0w7b0JBQ0Y7b0VBQ0U7a0VBQ0Y7K0RBQ0g7NERBQ0g7NERBQ0E7dUVBQ1c7MkJBQ0E7dUJBR0s7cUVBQ1A7aUNBRU87b0NBQ0c7MEVBQ0w7c0JBQ0Q7a0NBQ0k7Z0NBQ0Y7MkJBQ0w7K0JBQ0k7c0JBRU47UUFFbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLHVCQUF1QjtBQUU3QixJQUFNQyxZQUFZO0FBRWxCLElB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