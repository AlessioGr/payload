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
import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import qs from "qs";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../utilities/Config";
import { useAuth } from "../../../utilities/Auth";
import withCondition from "../../withCondition";
import ReactSelect from "../../../elements/ReactSelect";
import useField from "../../useField";
import Label from "../../Label";
import Error from "../../Error";
import FieldDescription from "../../FieldDescription";
import { relationship } from "../../../../../fields/validations";
import { useFormProcessing } from "../../Form/context";
import optionsReducer from "./optionsReducer";
import { createRelationMap } from "./createRelationMap";
import { useDebouncedCallback } from "../../../../hooks/useDebouncedCallback";
import wordBoundariesRegex from "../../../../../utilities/wordBoundariesRegex";
import { AddNewRelation } from "./AddNew";
import { findOptionsByValue } from "./findOptionsByValue";
import { GetFilterOptions } from "../../../utilities/GetFilterOptions";
import { SingleValue } from "./select-components/SingleValue";
import { MultiValueLabel } from "./select-components/MultiValueLabel";
import { useLocale } from "../../../utilities/Locale";
import "./index.scss";
var maxResultsPerRequest = 10;
var baseClass = "relationship";
var Relationship = function(props) {
    var _valueToRender;
    var relationTo = props.relationTo, _props_validate = props.validate, validate = _props_validate === void 0 ? relationship : _props_validate, path = props.path, name = props.name, required = props.required, label = props.label, hasMany = props.hasMany, filterOptions = props.filterOptions, tmp = props.admin, _ref = tmp === void 0 ? {} : tmp, readOnly = _ref.readOnly, style = _ref.style, className = _ref.className, width = _ref.width, description = _ref.description, condition = _ref.condition, _ref_isSortable = _ref.isSortable, isSortable = _ref_isSortable === void 0 ? true : _ref_isSortable, _ref_allowCreate = _ref.allowCreate, allowCreate = _ref_allowCreate === void 0 ? true : _ref_allowCreate;
    var config = useConfig();
    var serverURL = config.serverURL, api = config.routes.api, collections = config.collections;
    var _useTranslation = useTranslation("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var permissions = useAuth().permissions;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var formProcessing = useFormProcessing();
    var hasMultipleRelations = Array.isArray(relationTo);
    var _useReducer = _sliced_to_array(useReducer(optionsReducer, []), 2), options = _useReducer[0], dispatchOptions = _useReducer[1];
    var _useState = _sliced_to_array(useState(-1), 2), lastFullyLoadedRelation = _useState[0], setLastFullyLoadedRelation = _useState[1];
    var _useState1 = _sliced_to_array(useState({}), 2), lastLoadedPage = _useState1[0], setLastLoadedPage = _useState1[1];
    var _useState2 = _sliced_to_array(useState(""), 2), errorLoading = _useState2[0], setErrorLoading = _useState2[1];
    var _useState3 = _sliced_to_array(useState(), 2), filterOptionsResult = _useState3[0], setFilterOptionsResult = _useState3[1];
    var _useState4 = _sliced_to_array(useState(""), 2), search = _useState4[0], setSearch = _useState4[1];
    var _useState5 = _sliced_to_array(useState(false), 2), isLoading = _useState5[0], setIsLoading = _useState5[1];
    var _useState6 = _sliced_to_array(useState(false), 2), hasLoadedFirstPage = _useState6[0], setHasLoadedFirstPage = _useState6[1];
    var _useState7 = _sliced_to_array(useState(false), 2), enableWordBoundarySearch = _useState7[0], setEnableWordBoundarySearch = _useState7[1];
    var firstRun = useRef(true);
    var pathOrName = path || name;
    var memoizedValidate = useCallback(function(value, validationOptions) {
        return validate(value, _object_spread_props(_object_spread({}, validationOptions), {
            required: required
        }));
    }, [
        validate,
        required
    ]);
    var _useField = useField({
        path: pathOrName,
        validate: memoizedValidate,
        condition: condition
    }), value = _useField.value, showError = _useField.showError, errorMessage = _useField.errorMessage, setValue = _useField.setValue, initialValue = _useField.initialValue;
    var _useState8 = _sliced_to_array(useState(false), 2), drawerIsOpen = _useState8[0], setDrawerIsOpen = _useState8[1];
    var getResults = useCallback(function() {
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
                relationMap = createRelationMap({
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
                                            fetch("".concat(serverURL).concat(api, "/").concat(relation, "?").concat(qs.stringify(query)), {
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
    var updateSearch = useDebouncedCallback(function(searchArg, valueArg) {
        getResults({
            search: searchArg,
            value: valueArg,
            sort: true
        });
        setSearch(searchArg);
    }, 300);
    var handleInputChange = useCallback(function(searchArg, valueArg) {
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
    useEffect(function() {
        var relationMap = createRelationMap({
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
                                fetch("".concat(serverURL).concat(api, "/").concat(relation, "?").concat(qs.stringify(query)), {
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
    useEffect(function() {
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
    useEffect(function() {
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
    var onSave = useCallback(function(args) {
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
    var filterOption = useCallback(function(item, searchFilter) {
        if (!searchFilter) {
            return true;
        }
        var r = wordBoundariesRegex(searchFilter || "");
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
    var valueToRender = findOptionsByValue({
        value: value,
        options: options
    });
    if (!Array.isArray(valueToRender) && ((_valueToRender = valueToRender) === null || _valueToRender === void 0 ? void 0 : _valueToRender.value) === "null") valueToRender.value = null;
    return /*#__PURE__*/ React.createElement("div", {
        id: "field-".concat(pathOrName.replace(/\./gi, "__")),
        className: classes,
        style: _object_spread_props(_object_spread({}, style), {
            width: width
        })
    }, /*#__PURE__*/ React.createElement(Error, {
        showError: showError,
        message: errorMessage
    }), /*#__PURE__*/ React.createElement(Label, {
        htmlFor: pathOrName,
        label: label,
        required: required
    }), /*#__PURE__*/ React.createElement(GetFilterOptions, {
        filterOptionsResult: filterOptionsResult,
        setFilterOptionsResult: setFilterOptionsResult,
        filterOptions: filterOptions,
        path: pathOrName,
        relationTo: relationTo
    }), !errorLoading && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement(ReactSelect, {
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
            SingleValue: SingleValue,
            MultiValueLabel: MultiValueLabel
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
    }), !readOnly && allowCreate && /*#__PURE__*/ React.createElement(AddNewRelation, {
        path: pathOrName,
        hasMany: hasMany,
        relationTo: relationTo,
        value: value,
        setValue: setValue,
        dispatchOptions: dispatchOptions,
        options: options
    })), errorLoading && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__error-loading")
    }, errorLoading), /*#__PURE__*/ React.createElement(FieldDescription, {
        value: value,
        description: description
    }));
};
export default withCondition(Relationship);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL3dpdGhDb25kaXRpb24nO1xuaW1wb3J0IFJlYWN0U2VsZWN0IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1JlYWN0U2VsZWN0JztcbmltcG9ydCB1c2VGaWVsZCBmcm9tICcuLi8uLi91c2VGaWVsZCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IEVycm9yIGZyb20gJy4uLy4uL0Vycm9yJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgcmVsYXRpb25zaGlwIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL3ZhbGlkYXRpb25zJztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgdXNlRm9ybVByb2Nlc3NpbmcgfSBmcm9tICcuLi8uLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IG9wdGlvbnNSZWR1Y2VyIGZyb20gJy4vb3B0aW9uc1JlZHVjZXInO1xuaW1wb3J0IHsgRmlsdGVyT3B0aW9uc1Jlc3VsdCwgR2V0UmVzdWx0cywgT3B0aW9uLCBQcm9wcywgVmFsdWUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGNyZWF0ZVJlbGF0aW9uTWFwIH0gZnJvbSAnLi9jcmVhdGVSZWxhdGlvbk1hcCc7XG5pbXBvcnQgeyB1c2VEZWJvdW5jZWRDYWxsYmFjayB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZURlYm91bmNlZENhbGxiYWNrJztcbmltcG9ydCB3b3JkQm91bmRhcmllc1JlZ2V4IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy93b3JkQm91bmRhcmllc1JlZ2V4JztcbmltcG9ydCB7IEFkZE5ld1JlbGF0aW9uIH0gZnJvbSAnLi9BZGROZXcnO1xuaW1wb3J0IHsgZmluZE9wdGlvbnNCeVZhbHVlIH0gZnJvbSAnLi9maW5kT3B0aW9uc0J5VmFsdWUnO1xuaW1wb3J0IHsgR2V0RmlsdGVyT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9HZXRGaWx0ZXJPcHRpb25zJztcbmltcG9ydCB7IFNpbmdsZVZhbHVlIH0gZnJvbSAnLi9zZWxlY3QtY29tcG9uZW50cy9TaW5nbGVWYWx1ZSc7XG5pbXBvcnQgeyBNdWx0aVZhbHVlTGFiZWwgfSBmcm9tICcuL3NlbGVjdC1jb21wb25lbnRzL011bHRpVmFsdWVMYWJlbCc7XG5pbXBvcnQgeyBEb2N1bWVudERyYXdlclByb3BzIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRG9jdW1lbnREcmF3ZXIvdHlwZXMnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgbWF4UmVzdWx0c1BlclJlcXVlc3QgPSAxMDtcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JlbGF0aW9uc2hpcCc7XG5cbmNvbnN0IFJlbGF0aW9uc2hpcDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZWxhdGlvblRvLFxuICAgIHZhbGlkYXRlID0gcmVsYXRpb25zaGlwLFxuICAgIHBhdGgsXG4gICAgbmFtZSxcbiAgICByZXF1aXJlZCxcbiAgICBsYWJlbCxcbiAgICBoYXNNYW55LFxuICAgIGZpbHRlck9wdGlvbnMsXG4gICAgYWRtaW46IHtcbiAgICAgIHJlYWRPbmx5LFxuICAgICAgc3R5bGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB3aWR0aCxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgaXNTb3J0YWJsZSA9IHRydWUsXG4gICAgICBhbGxvd0NyZWF0ZSA9IHRydWUsXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3Qge1xuICAgIHNlcnZlclVSTCxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFwaSxcbiAgICB9LFxuICAgIGNvbGxlY3Rpb25zLFxuICB9ID0gY29uZmlnO1xuXG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgZm9ybVByb2Nlc3NpbmcgPSB1c2VGb3JtUHJvY2Vzc2luZygpO1xuICBjb25zdCBoYXNNdWx0aXBsZVJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25Ubyk7XG4gIGNvbnN0IFtvcHRpb25zLCBkaXNwYXRjaE9wdGlvbnNdID0gdXNlUmVkdWNlcihvcHRpb25zUmVkdWNlciwgW10pO1xuICBjb25zdCBbbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24sIHNldExhc3RGdWxseUxvYWRlZFJlbGF0aW9uXSA9IHVzZVN0YXRlKC0xKTtcbiAgY29uc3QgW2xhc3RMb2FkZWRQYWdlLCBzZXRMYXN0TG9hZGVkUGFnZV0gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+Pih7fSk7XG4gIGNvbnN0IFtlcnJvckxvYWRpbmcsIHNldEVycm9yTG9hZGluZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmaWx0ZXJPcHRpb25zUmVzdWx0LCBzZXRGaWx0ZXJPcHRpb25zUmVzdWx0XSA9IHVzZVN0YXRlPEZpbHRlck9wdGlvbnNSZXN1bHQ+KCk7XG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoYXNMb2FkZWRGaXJzdFBhZ2UsIHNldEhhc0xvYWRlZEZpcnN0UGFnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlbmFibGVXb3JkQm91bmRhcnlTZWFyY2gsIHNldEVuYWJsZVdvcmRCb3VuZGFyeVNlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGZpcnN0UnVuID0gdXNlUmVmKHRydWUpO1xuICBjb25zdCBwYXRoT3JOYW1lID0gcGF0aCB8fCBuYW1lO1xuXG4gIGNvbnN0IG1lbW9pemVkVmFsaWRhdGUgPSB1c2VDYWxsYmFjaygodmFsdWUsIHZhbGlkYXRpb25PcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIHZhbGlkYXRlKHZhbHVlLCB7IC4uLnZhbGlkYXRpb25PcHRpb25zLCByZXF1aXJlZCB9KTtcbiAgfSwgW3ZhbGlkYXRlLCByZXF1aXJlZF0pO1xuXG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgZXJyb3JNZXNzYWdlLFxuICAgIHNldFZhbHVlLFxuICAgIGluaXRpYWxWYWx1ZSxcbiAgfSA9IHVzZUZpZWxkPFZhbHVlIHwgVmFsdWVbXT4oe1xuICAgIHBhdGg6IHBhdGhPck5hbWUsXG4gICAgdmFsaWRhdGU6IG1lbW9pemVkVmFsaWRhdGUsXG4gICAgY29uZGl0aW9uLFxuICB9KTtcblxuICBjb25zdCBbZHJhd2VySXNPcGVuLCBzZXREcmF3ZXJJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGdldFJlc3VsdHM6IEdldFJlc3VsdHMgPSB1c2VDYWxsYmFjayhcbiAgICBhc3luYyAoe1xuICAgICAgbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb246IGxhc3RGdWxseUxvYWRlZFJlbGF0aW9uQXJnLFxuICAgICAgc2VhcmNoOiBzZWFyY2hBcmcsXG4gICAgICB2YWx1ZTogdmFsdWVBcmcsXG4gICAgICBzb3J0LFxuICAgICAgb25TdWNjZXNzLFxuICAgIH0pID0+IHtcbiAgICAgIGlmICghcGVybWlzc2lvbnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25Ub1VzZSA9IHR5cGVvZiBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbkFyZyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbkFyZ1xuICAgICAgICA6IC0xO1xuXG4gICAgICBjb25zdCByZWxhdGlvbnMgPSBBcnJheS5pc0FycmF5KHJlbGF0aW9uVG8pID8gcmVsYXRpb25UbyA6IFtyZWxhdGlvblRvXTtcbiAgICAgIGNvbnN0IHJlbGF0aW9uc1RvRmV0Y2ggPSBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlID09PSAtMVxuICAgICAgICA/IHJlbGF0aW9uc1xuICAgICAgICA6IHJlbGF0aW9ucy5zbGljZShsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlICsgMSk7XG5cbiAgICAgIGxldCByZXN1bHRzRmV0Y2hlZCA9IDA7XG4gICAgICBjb25zdCByZWxhdGlvbk1hcCA9IGNyZWF0ZVJlbGF0aW9uTWFwKHtcbiAgICAgICAgaGFzTWFueSxcbiAgICAgICAgcmVsYXRpb25UbyxcbiAgICAgICAgdmFsdWU6IHZhbHVlQXJnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghZXJyb3JMb2FkaW5nKSB7XG4gICAgICAgIHJlbGF0aW9uc1RvRmV0Y2gucmVkdWNlKGFzeW5jIChwcmlvclJlbGF0aW9uLCByZWxhdGlvbikgPT4ge1xuICAgICAgICAgIGxldCBsYXN0TG9hZGVkUGFnZVRvVXNlO1xuICAgICAgICAgIGlmIChzZWFyY2ggIT09IHNlYXJjaEFyZykge1xuICAgICAgICAgICAgbGFzdExvYWRlZFBhZ2VUb1VzZSA9IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhc3RMb2FkZWRQYWdlVG9Vc2UgPSBsYXN0TG9hZGVkUGFnZVtyZWxhdGlvbl0gKyAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhd2FpdCBwcmlvclJlbGF0aW9uO1xuXG4gICAgICAgICAgaWYgKHJlc3VsdHNGZXRjaGVkIDwgMTApIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKFxuICAgICAgICAgICAgICAoY29sbCkgPT4gY29sbC5zbHVnID09PSByZWxhdGlvbixcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFRvU2VhcmNoID0gY29sbGVjdGlvbj8uYWRtaW4/LnVzZUFzVGl0bGUgfHwgJ2lkJztcblxuICAgICAgICAgICAgY29uc3QgcXVlcnk6IHtcbiAgICAgICAgICAgICAgW2tleTogc3RyaW5nXTogdW5rbm93bjtcbiAgICAgICAgICAgICAgd2hlcmU6IFdoZXJlO1xuICAgICAgICAgICAgfSA9IHtcbiAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICBhbmQ6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBub3RfaW46IHJlbGF0aW9uTWFwW3JlbGF0aW9uXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGltaXQ6IG1heFJlc3VsdHNQZXJSZXF1ZXN0LFxuICAgICAgICAgICAgICBwYWdlOiBsYXN0TG9hZGVkUGFnZVRvVXNlLFxuICAgICAgICAgICAgICBzb3J0OiBmaWVsZFRvU2VhcmNoLFxuICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHNlYXJjaEFyZykge1xuICAgICAgICAgICAgICBxdWVyeS53aGVyZS5hbmQucHVzaCh7XG4gICAgICAgICAgICAgICAgW2ZpZWxkVG9TZWFyY2hdOiB7XG4gICAgICAgICAgICAgICAgICBsaWtlOiBzZWFyY2hBcmcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXJPcHRpb25zUmVzdWx0Py5bcmVsYXRpb25dKSB7XG4gICAgICAgICAgICAgIHF1ZXJ5LndoZXJlLmFuZC5wdXNoKGZpbHRlck9wdGlvbnNSZXN1bHRbcmVsYXRpb25dKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgYCR7c2VydmVyVVJMfSR7YXBpfS8ke3JlbGF0aW9ufT8ke3FzLnN0cmluZ2lmeShxdWVyeSl9YCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICBjb25zdCBkYXRhOiBQYWdpbmF0ZWREb2NzPHVua25vd24+ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICBzZXRMYXN0TG9hZGVkUGFnZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICAgIFtyZWxhdGlvbl06IGxhc3RMb2FkZWRQYWdlVG9Vc2UsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKCFkYXRhLm5leHRQYWdlKSB7XG4gICAgICAgICAgICAgICAgc2V0TGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24ocmVsYXRpb25zLmluZGV4T2YocmVsYXRpb24pKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChkYXRhLmRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdHNGZXRjaGVkICs9IGRhdGEuZG9jcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICBkaXNwYXRjaE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERCcsXG4gICAgICAgICAgICAgICAgICBkb2NzOiBkYXRhLmRvY3MsXG4gICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgICAgICAgIGkxOG4sXG4gICAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgc2V0TGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24ocmVsYXRpb25zLmluZGV4T2YocmVsYXRpb24pKTtcbiAgICAgICAgICAgICAgZGlzcGF0Y2hPcHRpb25zKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnQUREJyxcbiAgICAgICAgICAgICAgICBkb2NzOiBbXSxcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHNvcnQsXG4gICAgICAgICAgICAgICAgaWRzOiByZWxhdGlvbk1hcFtyZWxhdGlvbl0sXG4gICAgICAgICAgICAgICAgaTE4bixcbiAgICAgICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0RXJyb3JMb2FkaW5nKHQoJ2Vycm9yOnVuc3BlY2lmaWMnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvblN1Y2Nlc3MgPT09ICdmdW5jdGlvbicpIG9uU3VjY2VzcygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgcGVybWlzc2lvbnMsXG4gICAgICByZWxhdGlvblRvLFxuICAgICAgaGFzTWFueSxcbiAgICAgIGVycm9yTG9hZGluZyxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGxhc3RMb2FkZWRQYWdlLFxuICAgICAgY29sbGVjdGlvbnMsXG4gICAgICBsb2NhbGUsXG4gICAgICBmaWx0ZXJPcHRpb25zUmVzdWx0LFxuICAgICAgc2VydmVyVVJMLFxuICAgICAgYXBpLFxuICAgICAgaTE4bixcbiAgICAgIGNvbmZpZyxcbiAgICAgIHQsXG4gICAgXSxcbiAgKTtcblxuICBjb25zdCB1cGRhdGVTZWFyY2ggPSB1c2VEZWJvdW5jZWRDYWxsYmFjaygoc2VhcmNoQXJnOiBzdHJpbmcsIHZhbHVlQXJnOiBWYWx1ZSB8IFZhbHVlW10pID0+IHtcbiAgICBnZXRSZXN1bHRzKHsgc2VhcmNoOiBzZWFyY2hBcmcsIHZhbHVlOiB2YWx1ZUFyZywgc29ydDogdHJ1ZSB9KTtcbiAgICBzZXRTZWFyY2goc2VhcmNoQXJnKTtcbiAgfSwgMzAwKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IHVzZUNhbGxiYWNrKChzZWFyY2hBcmc6IHN0cmluZywgdmFsdWVBcmc6IFZhbHVlIHwgVmFsdWVbXSkgPT4ge1xuICAgIGlmIChzZWFyY2ggIT09IHNlYXJjaEFyZykge1xuICAgICAgc2V0TGFzdExvYWRlZFBhZ2Uoe30pO1xuICAgICAgdXBkYXRlU2VhcmNoKHNlYXJjaEFyZywgdmFsdWVBcmcpO1xuICAgIH1cbiAgfSwgW3NlYXJjaCwgdXBkYXRlU2VhcmNoXSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gRW5zdXJlIHdlIGhhdmUgYW4gb3B0aW9uIGZvciBlYWNoIHZhbHVlXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZWxhdGlvbk1hcCA9IGNyZWF0ZVJlbGF0aW9uTWFwKHtcbiAgICAgIGhhc01hbnksXG4gICAgICByZWxhdGlvblRvLFxuICAgICAgdmFsdWUsXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhyZWxhdGlvbk1hcCkucmVkdWNlKGFzeW5jIChwcmlvclJlbGF0aW9uLCBbcmVsYXRpb24sIGlkc10pID0+IHtcbiAgICAgIGF3YWl0IHByaW9yUmVsYXRpb247XG5cbiAgICAgIGNvbnN0IGlkc1RvTG9hZCA9IGlkcy5maWx0ZXIoKGlkKSA9PiB7XG4gICAgICAgIHJldHVybiAhb3B0aW9ucy5maW5kKChvcHRpb25Hcm91cCkgPT4gb3B0aW9uR3JvdXA/Lm9wdGlvbnM/LmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBpZCAmJiBvcHRpb24ucmVsYXRpb25UbyA9PT0gcmVsYXRpb24pKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaWRzVG9Mb2FkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgIGluOiBpZHNUb0xvYWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIGxpbWl0OiBpZHNUb0xvYWQubGVuZ3RoLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghZXJyb3JMb2FkaW5nKSB7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtzZXJ2ZXJVUkx9JHthcGl9LyR7cmVsYXRpb259PyR7cXMuc3RyaW5naWZ5KHF1ZXJ5KX1gLCB7XG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogaTE4bi5sYW5ndWFnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnMuZmluZCgoY29sbCkgPT4gY29sbC5zbHVnID09PSByZWxhdGlvbik7XG4gICAgICAgICAgbGV0IGRvY3MgPSBbXTtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGRvY3MgPSBkYXRhLmRvY3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2hPcHRpb25zKHtcbiAgICAgICAgICAgIHR5cGU6ICdBREQnLFxuICAgICAgICAgICAgZG9jcyxcbiAgICAgICAgICAgIGNvbGxlY3Rpb24sXG4gICAgICAgICAgICBzb3J0OiB0cnVlLFxuICAgICAgICAgICAgaWRzOiBpZHNUb0xvYWQsXG4gICAgICAgICAgICBpMThuLFxuICAgICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICB9LCBbXG4gICAgb3B0aW9ucyxcbiAgICB2YWx1ZSxcbiAgICBoYXNNYW55LFxuICAgIGVycm9yTG9hZGluZyxcbiAgICBjb2xsZWN0aW9ucyxcbiAgICBoYXNNdWx0aXBsZVJlbGF0aW9ucyxcbiAgICBzZXJ2ZXJVUkwsXG4gICAgYXBpLFxuICAgIGkxOG4sXG4gICAgcmVsYXRpb25UbyxcbiAgICBsb2NhbGUsXG4gICAgY29uZmlnLFxuICBdKTtcblxuICAvLyBEZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIHN3aXRjaCB0byB3b3JkIGJvdW5kYXJ5IHNlYXJjaFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykgPyByZWxhdGlvblRvIDogW3JlbGF0aW9uVG9dO1xuICAgIGNvbnN0IGlzSWRPbmx5ID0gcmVsYXRpb25zLnJlZHVjZSgoaWRPbmx5LCByZWxhdGlvbikgPT4ge1xuICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGwpID0+IGNvbGwuc2x1ZyA9PT0gcmVsYXRpb24pO1xuICAgICAgY29uc3QgZmllbGRUb1NlYXJjaCA9IGNvbGxlY3Rpb24/LmFkbWluPy51c2VBc1RpdGxlIHx8ICdpZCc7XG4gICAgICByZXR1cm4gZmllbGRUb1NlYXJjaCA9PT0gJ2lkJyAmJiBpZE9ubHk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgc2V0RW5hYmxlV29yZEJvdW5kYXJ5U2VhcmNoKCFpc0lkT25seSk7XG4gIH0sIFtyZWxhdGlvblRvLCBjb2xsZWN0aW9uc10pO1xuXG4gIC8vIFdoZW4gKGByZWxhdGlvblRvYCB8fCBgZmlsdGVyT3B0aW9uc1Jlc3VsdGAgfHwgYGxvY2FsZWApIGNoYW5nZXMsIHJlc2V0IGNvbXBvbmVudFxuICAvLyBOb3RlIC0gZWZmZWN0IHNob3VsZCBub3QgcnVuIG9uIGZpcnN0IHJ1blxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChmaXJzdFJ1bi5jdXJyZW50KSB7XG4gICAgICBmaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZGlzcGF0Y2hPcHRpb25zKHsgdHlwZTogJ0NMRUFSJyB9KTtcbiAgICBzZXRMYXN0RnVsbHlMb2FkZWRSZWxhdGlvbigtMSk7XG4gICAgc2V0TGFzdExvYWRlZFBhZ2Uoe30pO1xuICAgIHNldEhhc0xvYWRlZEZpcnN0UGFnZShmYWxzZSk7XG4gIH0sIFtyZWxhdGlvblRvLCBmaWx0ZXJPcHRpb25zUmVzdWx0LCBsb2NhbGVdKTtcblxuICBjb25zdCBvblNhdmUgPSB1c2VDYWxsYmFjazxEb2N1bWVudERyYXdlclByb3BzWydvblNhdmUnXT4oKGFyZ3MpID0+IHtcbiAgICBkaXNwYXRjaE9wdGlvbnMoeyB0eXBlOiAnVVBEQVRFJywgZG9jOiBhcmdzLmRvYywgY29sbGVjdGlvbjogYXJncy5jb2xsZWN0aW9uQ29uZmlnLCBpMThuLCBjb25maWcgfSk7XG4gIH0sIFtpMThuLCBjb25maWddKTtcblxuICBjb25zdCBmaWx0ZXJPcHRpb24gPSB1c2VDYWxsYmFjaygoaXRlbTogT3B0aW9uLCBzZWFyY2hGaWx0ZXI6IHN0cmluZykgPT4ge1xuICAgIGlmICghc2VhcmNoRmlsdGVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgciA9IHdvcmRCb3VuZGFyaWVzUmVnZXgoc2VhcmNoRmlsdGVyIHx8ICcnKTtcbiAgICAvLyBicmVha2luZyB0aGUgbGFiZWxzIHRvIHNlYXJjaCBpbnRvIHNtYWxsZXIgcGFydHMgaW5jcmVhc2VzIHBlcmZvcm1hbmNlXG4gICAgY29uc3QgYnJlYWtBcGFydFRocmVzaG9sZCA9IDI1MDtcbiAgICBsZXQgc3RyaW5nID0gaXRlbS5sYWJlbDtcbiAgICAvLyBzdHJpbmdzIGxlc3MgdGhhbiBicmVha0FwYXJ0VGhyZXNob2xkIGxlbmd0aCB3b24ndCBiZSBjaHVua2VkXG4gICAgd2hpbGUgKHN0cmluZy5sZW5ndGggPiBicmVha0FwYXJ0VGhyZXNob2xkKSB7XG4gICAgICAvLyBzbGljaW5nIGJ5IHRoZSBuZXh0IHNwYWNlIGFmdGVyIHRoZSBsZW5ndGggb2YgdGhlIHNlYXJjaCBpbnB1dCBwcmV2ZW50cyBzbGljaW5nIHRoZSBzdHJpbmcgdXAgYnkgcGFydGlhbCB3b3Jkc1xuICAgICAgY29uc3QgaW5kZXhPZlNwYWNlID0gc3RyaW5nLmluZGV4T2YoJyAnLCBzZWFyY2hGaWx0ZXIubGVuZ3RoKTtcbiAgICAgIGlmIChyLnRlc3Qoc3RyaW5nLnNsaWNlKDAsIGluZGV4T2ZTcGFjZSA9PT0gLTEgPyBzZWFyY2hGaWx0ZXIubGVuZ3RoIDogaW5kZXhPZlNwYWNlICsgMSkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKGluZGV4T2ZTcGFjZSA9PT0gLTEgPyBzZWFyY2hGaWx0ZXIubGVuZ3RoIDogaW5kZXhPZlNwYWNlICsgMSk7XG4gICAgfVxuICAgIHJldHVybiByLnRlc3Qoc3RyaW5nLnNsaWNlKC1icmVha0FwYXJ0VGhyZXNob2xkKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICAgIHNob3dFcnJvciAmJiAnZXJyb3InLFxuICAgIGVycm9yTG9hZGluZyAmJiAnZXJyb3ItbG9hZGluZycsXG4gICAgcmVhZE9ubHkgJiYgYCR7YmFzZUNsYXNzfS0tcmVhZC1vbmx5YCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIGNvbnN0IHZhbHVlVG9SZW5kZXIgPSBmaW5kT3B0aW9uc0J5VmFsdWUoeyB2YWx1ZSwgb3B0aW9ucyB9KTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlVG9SZW5kZXIpICYmIHZhbHVlVG9SZW5kZXI/LnZhbHVlID09PSAnbnVsbCcpIHZhbHVlVG9SZW5kZXIudmFsdWUgPSBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9e2BmaWVsZC0keyhwYXRoT3JOYW1lKS5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWB9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxFcnJvclxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgLz5cbiAgICAgIDxMYWJlbFxuICAgICAgICBodG1sRm9yPXtwYXRoT3JOYW1lfVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgIC8+XG4gICAgICA8R2V0RmlsdGVyT3B0aW9ucyB7Li4ueyBmaWx0ZXJPcHRpb25zUmVzdWx0LCBzZXRGaWx0ZXJPcHRpb25zUmVzdWx0LCBmaWx0ZXJPcHRpb25zLCBwYXRoOiBwYXRoT3JOYW1lLCByZWxhdGlvblRvIH19IC8+XG4gICAgICB7IWVycm9yTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgICAgICBiYWNrc3BhY2VSZW1vdmVzVmFsdWU9eyFkcmF3ZXJJc09wZW59XG4gICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHkgfHwgZm9ybVByb2Nlc3Npbmd9XG4gICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsobmV3U2VhcmNoKSA9PiBoYW5kbGVJbnB1dENoYW5nZShuZXdTZWFyY2gsIHZhbHVlKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXshcmVhZE9ubHkgPyAoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoaGFzTWFueSA/IFtdIDogbnVsbCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzTWFueSkge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKHNlbGVjdGVkID8gc2VsZWN0ZWQubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IG9wdGlvbi5yZWxhdGlvblRvLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgfSkgOiBudWxsKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucykge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKHtcbiAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IHNlbGVjdGVkLnJlbGF0aW9uVG8sXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b209eygpID0+IHtcbiAgICAgICAgICAgICAgZ2V0UmVzdWx0cyh7XG4gICAgICAgICAgICAgICAgbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24sXG4gICAgICAgICAgICAgICAgc2VhcmNoLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICAgICAgc29ydDogZmFsc2UsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvUmVuZGVyID8/IG51bGx9XG4gICAgICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICBpc011bHRpPXtoYXNNYW55fVxuICAgICAgICAgICAgaXNTb3J0YWJsZT17aXNTb3J0YWJsZX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICAgICAgY29tcG9uZW50cz17e1xuICAgICAgICAgICAgICBTaW5nbGVWYWx1ZSxcbiAgICAgICAgICAgICAgTXVsdGlWYWx1ZUxhYmVsLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGN1c3RvbVByb3BzPXt7XG4gICAgICAgICAgICAgIGRpc2FibGVNb3VzZURvd246IGRyYXdlcklzT3BlbixcbiAgICAgICAgICAgICAgZGlzYWJsZUtleURvd246IGRyYXdlcklzT3BlbixcbiAgICAgICAgICAgICAgc2V0RHJhd2VySXNPcGVuLFxuICAgICAgICAgICAgICBvblNhdmUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25NZW51T3Blbj17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWhhc0xvYWRlZEZpcnN0UGFnZSkge1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBnZXRSZXN1bHRzKHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbml0aWFsVmFsdWUsXG4gICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SGFzTG9hZGVkRmlyc3RQYWdlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGZpbHRlck9wdGlvbj17ZW5hYmxlV29yZEJvdW5kYXJ5U2VhcmNoID8gZmlsdGVyT3B0aW9uIDogdW5kZWZpbmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgeyFyZWFkT25seSAmJiBhbGxvd0NyZWF0ZSAmJiAoXG4gICAgICAgICAgICA8QWRkTmV3UmVsYXRpb25cbiAgICAgICAgICAgICAgey4uLnsgcGF0aDogcGF0aE9yTmFtZSwgaGFzTWFueSwgcmVsYXRpb25UbywgdmFsdWUsIHNldFZhbHVlLCBkaXNwYXRjaE9wdGlvbnMsIG9wdGlvbnMgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge2Vycm9yTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19lcnJvci1sb2FkaW5nYH0+XG4gICAgICAgICAge2Vycm9yTG9hZGluZ31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aENvbmRpdGlvbihSZWxhdGlvbnNoaXApO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlUmVmIiwidXNlU3RhdGUiLCJxcyIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwidXNlQXV0aCIsIndpdGhDb25kaXRpb24iLCJSZWFjdFNlbGVjdCIsInVzZUZpZWxkIiwiTGFiZWwiLCJFcnJvciIsIkZpZWxkRGVzY3JpcHRpb24iLCJyZWxhdGlvbnNoaXAiLCJ1c2VGb3JtUHJvY2Vzc2luZyIsIm9wdGlvbnNSZWR1Y2VyIiwiY3JlYXRlUmVsYXRpb25NYXAiLCJ1c2VEZWJvdW5jZWRDYWxsYmFjayIsIndvcmRCb3VuZGFyaWVzUmVnZXgiLCJBZGROZXdSZWxhdGlvbiIsImZpbmRPcHRpb25zQnlWYWx1ZSIsIkdldEZpbHRlck9wdGlvbnMiLCJTaW5nbGVWYWx1ZSIsIk11bHRpVmFsdWVMYWJlbCIsInVzZUxvY2FsZSIsIm1heFJlc3VsdHNQZXJSZXF1ZXN0IiwiYmFzZUNsYXNzIiwiUmVsYXRpb25zaGlwIiwicHJvcHMiLCJ2YWx1ZVRvUmVuZGVyIiwicmVsYXRpb25UbyIsInZhbGlkYXRlIiwicGF0aCIsIm5hbWUiLCJyZXF1aXJlZCIsImxhYmVsIiwiaGFzTWFueSIsImZpbHRlck9wdGlvbnMiLCJhZG1pbiIsInJlYWRPbmx5Iiwic3R5bGUiLCJjbGFzc05hbWUiLCJ3aWR0aCIsImRlc2NyaXB0aW9uIiwiY29uZGl0aW9uIiwiaXNTb3J0YWJsZSIsImFsbG93Q3JlYXRlIiwiY29uZmlnIiwic2VydmVyVVJMIiwicm91dGVzIiwiYXBpIiwiY29sbGVjdGlvbnMiLCJ0IiwiaTE4biIsInBlcm1pc3Npb25zIiwiY29kZSIsImxvY2FsZSIsImZvcm1Qcm9jZXNzaW5nIiwiaGFzTXVsdGlwbGVSZWxhdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJvcHRpb25zIiwiZGlzcGF0Y2hPcHRpb25zIiwibGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24iLCJzZXRMYXN0RnVsbHlMb2FkZWRSZWxhdGlvbiIsImxhc3RMb2FkZWRQYWdlIiwic2V0TGFzdExvYWRlZFBhZ2UiLCJlcnJvckxvYWRpbmciLCJzZXRFcnJvckxvYWRpbmciLCJmaWx0ZXJPcHRpb25zUmVzdWx0Iiwic2V0RmlsdGVyT3B0aW9uc1Jlc3VsdCIsInNlYXJjaCIsInNldFNlYXJjaCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhc0xvYWRlZEZpcnN0UGFnZSIsInNldEhhc0xvYWRlZEZpcnN0UGFnZSIsImVuYWJsZVdvcmRCb3VuZGFyeVNlYXJjaCIsInNldEVuYWJsZVdvcmRCb3VuZGFyeVNlYXJjaCIsImZpcnN0UnVuIiwicGF0aE9yTmFtZSIsIm1lbW9pemVkVmFsaWRhdGUiLCJ2YWx1ZSIsInZhbGlkYXRpb25PcHRpb25zIiwic2hvd0Vycm9yIiwiZXJyb3JNZXNzYWdlIiwic2V0VmFsdWUiLCJpbml0aWFsVmFsdWUiLCJkcmF3ZXJJc09wZW4iLCJzZXREcmF3ZXJJc09wZW4iLCJnZXRSZXN1bHRzIiwibGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25BcmciLCJzZWFyY2hBcmciLCJ2YWx1ZUFyZyIsInNvcnQiLCJvblN1Y2Nlc3MiLCJsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlIiwicmVsYXRpb25zIiwicmVsYXRpb25zVG9GZXRjaCIsInJlc3VsdHNGZXRjaGVkIiwicmVsYXRpb25NYXAiLCJzbGljZSIsInJlZHVjZSIsInByaW9yUmVsYXRpb24iLCJyZWxhdGlvbiIsImxhc3RMb2FkZWRQYWdlVG9Vc2UiLCJjb2xsZWN0aW9uIiwiZmllbGRUb1NlYXJjaCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJkYXRhIiwiZmluZCIsImNvbGwiLCJzbHVnIiwidXNlQXNUaXRsZSIsIndoZXJlIiwiYW5kIiwiaWQiLCJub3RfaW4iLCJsaW1pdCIsInBhZ2UiLCJkZXB0aCIsInB1c2giLCJsaWtlIiwiZmV0Y2giLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJsYW5ndWFnZSIsIm9rIiwianNvbiIsInByZXZTdGF0ZSIsIm5leHRQYWdlIiwiaW5kZXhPZiIsImRvY3MiLCJsZW5ndGgiLCJ0eXBlIiwic3RhdHVzIiwiaWRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1cGRhdGVTZWFyY2giLCJoYW5kbGVJbnB1dENoYW5nZSIsIk9iamVjdCIsImVudHJpZXMiLCJpZHNUb0xvYWQiLCJmaWx0ZXIiLCJvcHRpb25Hcm91cCIsIm9wdGlvbiIsImluIiwiaXNJZE9ubHkiLCJpZE9ubHkiLCJjdXJyZW50Iiwib25TYXZlIiwiYXJncyIsImRvYyIsImNvbGxlY3Rpb25Db25maWciLCJmaWx0ZXJPcHRpb24iLCJpdGVtIiwic2VhcmNoRmlsdGVyIiwiciIsImJyZWFrQXBhcnRUaHJlc2hvbGQiLCJzdHJpbmciLCJpbmRleE9mU3BhY2UiLCJ0ZXN0IiwiY2xhc3NlcyIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwicmVwbGFjZSIsIm1lc3NhZ2UiLCJodG1sRm9yIiwiYmFja3NwYWNlUmVtb3Zlc1ZhbHVlIiwiZGlzYWJsZWQiLCJvbklucHV0Q2hhbmdlIiwibmV3U2VhcmNoIiwib25DaGFuZ2UiLCJzZWxlY3RlZCIsIm1hcCIsInVuZGVmaW5lZCIsIm9uTWVudVNjcm9sbFRvQm90dG9tIiwiaXNNdWx0aSIsImNvbXBvbmVudHMiLCJjdXN0b21Qcm9wcyIsImRpc2FibGVNb3VzZURvd24iLCJkaXNhYmxlS2V5RG93biIsIm9uTWVudU9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDcEYsT0FBT0MsUUFBUSxLQUFLO0FBQ3BCLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLDRCQUE0QjtBQUN0RCxTQUFTQyxPQUFPLFFBQVEsMEJBQTBCO0FBQ2xELE9BQU9DLG1CQUFtQixzQkFBc0I7QUFDaEQsT0FBT0MsaUJBQWlCLGdDQUFnQztBQUN4RCxPQUFP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