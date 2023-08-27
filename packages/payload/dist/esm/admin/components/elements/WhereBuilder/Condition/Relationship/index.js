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
import React, { useReducer, useState, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../../utilities/Config";
import optionsReducer from "./optionsReducer";
import useDebounce from "../../../../../hooks/useDebounce";
import ReactSelect from "../../../ReactSelect";
import "./index.scss";
var baseClass = "condition-value-relationship";
var maxResultsPerRequest = 10;
var RelationshipField = function(props) {
    var onChange = props.onChange, value = props.value, relationTo = props.relationTo, hasMany = props.hasMany, tmp = props.admin, isSortable = (tmp === void 0 ? {} : tmp).isSortable;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api, collections = _useConfig.collections;
    var hasMultipleRelations = Array.isArray(relationTo);
    var _useReducer = _sliced_to_array(useReducer(optionsReducer, []), 2), options = _useReducer[0], dispatchOptions = _useReducer[1];
    var _useState = _sliced_to_array(useState(-1), 2), lastFullyLoadedRelation = _useState[0], setLastFullyLoadedRelation = _useState[1];
    var _useState1 = _sliced_to_array(useState(1), 2), lastLoadedPage = _useState1[0], setLastLoadedPage = _useState1[1];
    var _useState2 = _sliced_to_array(useState(""), 2), search = _useState2[0], setSearch = _useState2[1];
    var _useState3 = _sliced_to_array(useState(""), 2), errorLoading = _useState3[0], setErrorLoading = _useState3[1];
    var _useState4 = _sliced_to_array(useState(false), 2), hasLoadedFirstOptions = _useState4[0], setHasLoadedFirstOptions = _useState4[1];
    var debouncedSearch = useDebounce(search, 300);
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var addOptions = useCallback(function(data, relation) {
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
    var getResults = useCallback(function() {
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
    var findOptionsByValue = useCallback(function() {
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
    var handleInputChange = useCallback(function(newSearch) {
        if (search !== newSearch) {
            setSearch(newSearch);
        }
    }, [
        search
    ]);
    var addOptionByID = useCallback(function() {
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
    useEffect(function() {
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
    useEffect(function() {
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
    return /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, !errorLoading && /*#__PURE__*/ React.createElement(ReactSelect, {
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
    }), errorLoading && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__error-loading")
    }, errorLoading));
};
export default RelationshipField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vUmVsYXRpb25zaGlwL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyBQcm9wcywgVmFsdWVXaXRoUmVsYXRpb24sIEdldFJlc3VsdHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBvcHRpb25zUmVkdWNlciBmcm9tICcuL29wdGlvbnNSZWR1Y2VyJztcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VEZWJvdW5jZSc7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vLi4vUmVhY3RTZWxlY3QnO1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vUmVhY3RTZWxlY3QvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb25kaXRpb24tdmFsdWUtcmVsYXRpb25zaGlwJztcblxuY29uc3QgbWF4UmVzdWx0c1BlclJlcXVlc3QgPSAxMDtcblxuY29uc3QgUmVsYXRpb25zaGlwRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCB2YWx1ZSwgcmVsYXRpb25UbywgaGFzTWFueSwgYWRtaW46IHsgaXNTb3J0YWJsZSB9ID0ge30gfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBzZXJ2ZXJVUkwsXG4gICAgcm91dGVzOiB7XG4gICAgICBhcGksXG4gICAgfSxcbiAgICBjb2xsZWN0aW9ucyxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IGhhc011bHRpcGxlUmVsYXRpb25zID0gQXJyYXkuaXNBcnJheShyZWxhdGlvblRvKTtcbiAgY29uc3QgW29wdGlvbnMsIGRpc3BhdGNoT3B0aW9uc10gPSB1c2VSZWR1Y2VyKG9wdGlvbnNSZWR1Y2VyLCBbXSk7XG4gIGNvbnN0IFtsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbiwgc2V0TGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25dID0gdXNlU3RhdGUoLTEpO1xuICBjb25zdCBbbGFzdExvYWRlZFBhZ2UsIHNldExhc3RMb2FkZWRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3JMb2FkaW5nLCBzZXRFcnJvckxvYWRpbmddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaGFzTG9hZGVkRmlyc3RPcHRpb25zLCBzZXRIYXNMb2FkZWRGaXJzdE9wdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkZWJvdW5jZWRTZWFyY2ggPSB1c2VEZWJvdW5jZShzZWFyY2gsIDMwMCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBjb25zdCBhZGRPcHRpb25zID0gdXNlQ2FsbGJhY2soKGRhdGEsIHJlbGF0aW9uKSA9PiB7XG4gICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGwpID0+IGNvbGwuc2x1ZyA9PT0gcmVsYXRpb24pO1xuICAgIGRpc3BhdGNoT3B0aW9ucyh7IHR5cGU6ICdBREQnLCBkYXRhLCByZWxhdGlvbiwgaGFzTXVsdGlwbGVSZWxhdGlvbnMsIGNvbGxlY3Rpb24sIGkxOG4gfSk7XG4gIH0sIFtjb2xsZWN0aW9ucywgaGFzTXVsdGlwbGVSZWxhdGlvbnMsIGkxOG5dKTtcblxuICBjb25zdCBnZXRSZXN1bHRzID0gdXNlQ2FsbGJhY2s8R2V0UmVzdWx0cz4oYXN5bmMgKHtcbiAgICBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbjogbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25BcmcsXG4gICAgbGFzdExvYWRlZFBhZ2U6IGxhc3RMb2FkZWRQYWdlQXJnLFxuICAgIHNlYXJjaDogc2VhcmNoQXJnLFxuICB9KSA9PiB7XG4gICAgbGV0IGxhc3RMb2FkZWRQYWdlVG9Vc2UgPSB0eXBlb2YgbGFzdExvYWRlZFBhZ2VBcmcgIT09ICd1bmRlZmluZWQnID8gbGFzdExvYWRlZFBhZ2VBcmcgOiAxO1xuICAgIGNvbnN0IGxhc3RGdWxseUxvYWRlZFJlbGF0aW9uVG9Vc2UgPSB0eXBlb2YgbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25BcmcgIT09ICd1bmRlZmluZWQnID8gbGFzdEZ1bGx5TG9hZGVkUmVsYXRpb25BcmcgOiAtMTtcblxuICAgIGNvbnN0IHJlbGF0aW9ucyA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25UbykgPyByZWxhdGlvblRvIDogW3JlbGF0aW9uVG9dO1xuICAgIGNvbnN0IHJlbGF0aW9uc1RvRmV0Y2ggPSBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlID09PSAtMSA/IHJlbGF0aW9ucyA6IHJlbGF0aW9ucy5zbGljZShsYXN0RnVsbHlMb2FkZWRSZWxhdGlvblRvVXNlICsgMSk7XG5cbiAgICBsZXQgcmVzdWx0c0ZldGNoZWQgPSAwO1xuXG4gICAgaWYgKCFlcnJvckxvYWRpbmcpIHtcbiAgICAgIHJlbGF0aW9uc1RvRmV0Y2gucmVkdWNlKGFzeW5jIChwcmlvclJlbGF0aW9uLCByZWxhdGlvbikgPT4ge1xuICAgICAgICBhd2FpdCBwcmlvclJlbGF0aW9uO1xuXG4gICAgICAgIGlmIChyZXN1bHRzRmV0Y2hlZCA8IDEwKSB7XG4gICAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGNvbGwpID0+IGNvbGwuc2x1ZyA9PT0gcmVsYXRpb24pO1xuICAgICAgICAgIGNvbnN0IGZpZWxkVG9TZWFyY2ggPSBjb2xsZWN0aW9uPy5hZG1pbj8udXNlQXNUaXRsZSB8fCAnaWQnO1xuICAgICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtID0gc2VhcmNoQXJnID8gYCZ3aGVyZVske2ZpZWxkVG9TZWFyY2h9XVtsaWtlXT0ke3NlYXJjaEFyZ31gIDogJyc7XG5cbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3NlcnZlclVSTH0ke2FwaX0vJHtyZWxhdGlvbn0/bGltaXQ9JHttYXhSZXN1bHRzUGVyUmVxdWVzdH0mcGFnZT0ke2xhc3RMb2FkZWRQYWdlVG9Vc2V9JmRlcHRoPTAke3NlYXJjaFBhcmFtfWAsIHtcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YTogUGFnaW5hdGVkRG9jcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLmRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXN1bHRzRmV0Y2hlZCArPSBkYXRhLmRvY3MubGVuZ3RoO1xuICAgICAgICAgICAgICBhZGRPcHRpb25zKGRhdGEsIHJlbGF0aW9uKTtcbiAgICAgICAgICAgICAgc2V0TGFzdExvYWRlZFBhZ2UoZGF0YS5wYWdlKTtcblxuICAgICAgICAgICAgICBpZiAoIWRhdGEubmV4dFBhZ2UpIHtcbiAgICAgICAgICAgICAgICBzZXRMYXN0RnVsbHlMb2FkZWRSZWxhdGlvbihyZWxhdGlvbnMuaW5kZXhPZihyZWxhdGlvbikpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG1vcmUgcmVsYXRpb25zIHRvIHNlYXJjaCwgbmVlZCB0byByZXNldCBsYXN0TG9hZGVkUGFnZSB0byAxXG4gICAgICAgICAgICAgICAgLy8gYm90aCBsb2NhbGx5IHdpdGhpbiBmdW5jdGlvbiBhbmQgc3RhdGVcbiAgICAgICAgICAgICAgICBpZiAocmVsYXRpb25zLmluZGV4T2YocmVsYXRpb24pICsgMSA8IHJlbGF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgIGxhc3RMb2FkZWRQYWdlVG9Vc2UgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvckxvYWRpbmcodCgnZXJyb3JzOnVuc3BlY2lmaWMnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG4gICAgfVxuICB9LCBbaTE4biwgcmVsYXRpb25UbywgZXJyb3JMb2FkaW5nLCBjb2xsZWN0aW9ucywgc2VydmVyVVJMLCBhcGksIGFkZE9wdGlvbnMsIHRdKTtcblxuICBjb25zdCBmaW5kT3B0aW9uc0J5VmFsdWUgPSB1c2VDYWxsYmFjaygoKTogT3B0aW9uIHwgT3B0aW9uW10gPT4ge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGhhc01hbnkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLm1hcCgodmFsKSA9PiB7XG4gICAgICAgICAgICBpZiAoaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgICAgICAgbGV0IG1hdGNoZWRPcHRpb246IE9wdGlvbjtcblxuICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcHQub3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgb3B0Lm9wdGlvbnMuc29tZSgoc3ViT3B0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJPcHQ/LnZhbHVlID09PSB2YWwudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkT3B0aW9uID0gc3ViT3B0O1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZCgob3B0KSA9PiBvcHQudmFsdWUgPT09IHZhbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgbGV0IG1hdGNoZWRPcHRpb246IE9wdGlvbjtcblxuICAgICAgICBjb25zdCB2YWx1ZVdpdGhSZWxhdGlvbiA9IHZhbHVlIGFzIFZhbHVlV2l0aFJlbGF0aW9uO1xuXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0KSA9PiB7XG4gICAgICAgICAgaWYgKG9wdD8ub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0Lm9wdGlvbnMuc29tZSgoc3ViT3B0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChzdWJPcHQ/LnZhbHVlID09PSB2YWx1ZVdpdGhSZWxhdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRPcHRpb24gPSBzdWJPcHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG9wdGlvbnMuZmluZCgob3B0KSA9PiBvcHQudmFsdWUgPT09IHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LCBbaGFzTWFueSwgaGFzTXVsdGlwbGVSZWxhdGlvbnMsIHZhbHVlLCBvcHRpb25zXSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3U2VhcmNoKSA9PiB7XG4gICAgaWYgKHNlYXJjaCAhPT0gbmV3U2VhcmNoKSB7XG4gICAgICBzZXRTZWFyY2gobmV3U2VhcmNoKTtcbiAgICB9XG4gIH0sIFtzZWFyY2hdKTtcblxuICBjb25zdCBhZGRPcHRpb25CeUlEID0gdXNlQ2FsbGJhY2soYXN5bmMgKGlkLCByZWxhdGlvbikgPT4ge1xuICAgIGlmICghZXJyb3JMb2FkaW5nICYmIGlkICE9PSAnbnVsbCcpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7c2VydmVyVVJMfSR7YXBpfS8ke3JlbGF0aW9ufS8ke2lkfT9kZXB0aD0wYCwge1xuICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGFkZE9wdGlvbnMoeyBkb2NzOiBbZGF0YV0gfSwgcmVsYXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0KCdlcnJvcjpsb2FkaW5nRG9jdW1lbnQnLCB7IGlkIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpMThuLCBhZGRPcHRpb25zLCBhcGksIGVycm9yTG9hZGluZywgc2VydmVyVVJMLCB0XSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEdldCByZXN1bHRzIHdoZW4gc2VhcmNoIGlucHV0IGNoYW5nZXNcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaE9wdGlvbnMoe1xuICAgICAgdHlwZTogJ0NMRUFSJyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgaTE4bixcbiAgICB9KTtcblxuICAgIHNldEhhc0xvYWRlZEZpcnN0T3B0aW9ucyh0cnVlKTtcbiAgICBzZXRMYXN0TG9hZGVkUGFnZSgxKTtcbiAgICBzZXRMYXN0RnVsbHlMb2FkZWRSZWxhdGlvbigtMSk7XG4gICAgZ2V0UmVzdWx0cyh7IHNlYXJjaDogZGVib3VuY2VkU2VhcmNoIH0pO1xuICB9LCBbZ2V0UmVzdWx0cywgZGVib3VuY2VkU2VhcmNoLCByZWxhdGlvblRvLCBpMThuXSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEZvcm1hdCBvcHRpb25zIG9uY2UgZmlyc3Qgb3B0aW9ucyBoYXZlIGJlZW4gcmV0cmlldmVkXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlICYmIGhhc0xvYWRlZEZpcnN0T3B0aW9ucykge1xuICAgICAgaWYgKGhhc01hbnkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZE9wdGlvbnMgPSBmaW5kT3B0aW9uc0J5VmFsdWUoKTtcblxuICAgICAgICAobWF0Y2hlZE9wdGlvbnMgYXMgT3B0aW9uW10gfHwgW10pLmZvckVhY2goKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICBpZiAoaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgICAgICAgYWRkT3B0aW9uQnlJRCh2YWx1ZVtpXS52YWx1ZSwgdmFsdWVbaV0ucmVsYXRpb25Ubyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhZGRPcHRpb25CeUlEKHZhbHVlW2ldLCByZWxhdGlvblRvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlZE9wdGlvbiA9IGZpbmRPcHRpb25zQnlWYWx1ZSgpO1xuXG4gICAgICAgIGlmICghbWF0Y2hlZE9wdGlvbikge1xuICAgICAgICAgIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWVXaXRoUmVsYXRpb24gPSB2YWx1ZSBhcyBWYWx1ZVdpdGhSZWxhdGlvbjtcbiAgICAgICAgICAgIGFkZE9wdGlvbkJ5SUQodmFsdWVXaXRoUmVsYXRpb24udmFsdWUsIHZhbHVlV2l0aFJlbGF0aW9uLnJlbGF0aW9uVG8pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRPcHRpb25CeUlEKHZhbHVlLCByZWxhdGlvblRvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFthZGRPcHRpb25CeUlELCBmaW5kT3B0aW9uc0J5VmFsdWUsIGhhc01hbnksIGhhc011bHRpcGxlUmVsYXRpb25zLCByZWxhdGlvblRvLCB2YWx1ZSwgaGFzTG9hZGVkRmlyc3RPcHRpb25zXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAnZmllbGQtdHlwZScsXG4gICAgYmFzZUNsYXNzLFxuICAgIGVycm9yTG9hZGluZyAmJiAnZXJyb3ItbG9hZGluZycsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBjb25zdCB2YWx1ZVRvUmVuZGVyID0gKGZpbmRPcHRpb25zQnlWYWx1ZSgpIHx8IHZhbHVlKSBhcyBPcHRpb247XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG4gICAgICB7IWVycm9yTG9hZGluZyAmJiAoXG4gICAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdzZWxlY3RWYWx1ZScpfVxuICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgIGlmIChoYXNNYW55KSB7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkID8gc2VsZWN0ZWQubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0aW9uVG86IG9wdGlvbi5yZWxhdGlvblRvLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgICB9KSA6IG51bGwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNNdWx0aXBsZVJlbGF0aW9ucykge1xuICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgcmVsYXRpb25Ubzogc2VsZWN0ZWQucmVsYXRpb25UbyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2VsZWN0ZWQudmFsdWUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb25DaGFuZ2Uoc2VsZWN0ZWQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b209eygpID0+IHtcbiAgICAgICAgICAgIGdldFJlc3VsdHMoeyBsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbiwgbGFzdExvYWRlZFBhZ2U6IGxhc3RMb2FkZWRQYWdlICsgMSB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvUmVuZGVyfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgaXNNdWx0aT17aGFzTWFueX1cbiAgICAgICAgICBpc1NvcnRhYmxlPXtpc1NvcnRhYmxlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtlcnJvckxvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZXJyb3ItbG9hZGluZ2B9PlxuICAgICAgICAgIHtlcnJvckxvYWRpbmd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aW9uc2hpcEZpZWxkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIm9wdGlvbnNSZWR1Y2VyIiwidXNlRGVib3VuY2UiLCJSZWFjdFNlbGVjdCIsImJhc2VDbGFzcyIsIm1heFJlc3VsdHNQZXJSZXF1ZXN0IiwiUmVsYXRpb25zaGlwRmllbGQiLCJwcm9wcyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJyZWxhdGlvblRvIiwiaGFzTWFueSIsImFkbWluIiwiaXNTb3J0YWJsZSIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsImNvbGxlY3Rpb25zIiwiaGFzTXVsdGlwbGVSZWxhdGlvbnMiLCJBcnJheSIsImlzQXJyYXkiLCJvcHRpb25zIiwiZGlzcGF0Y2hPcHRpb25zIiwibGFzdEZ1bGx5TG9hZGVkUmVsYXRpb24iLCJzZXRMYXN0RnVsbHlMb2FkZWRSZWxhdGlvbiIsImxhc3RMb2FkZWRQYWdlIiwic2V0TGFzdExvYWRlZFBhZ2UiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJlcnJvckxvYWRpbmciLCJzZXRFcnJvckxvYWRpbmciLCJoYXNMb2FkZWRGaXJzdE9wdGlvbnMiLCJzZXRIYXNMb2FkZWRGaXJzdE9wdGlvbnMiLCJkZWJvdW5jZWRTZWFyY2giLCJ0IiwiaTE4biIsImFkZE9wdGlvbnMiLCJkYXRhIiwicmVsYXRpb24iLCJjb2xsZWN0aW9uIiwiZmluZCIsImNvbGwiLCJzbHVnIiwidHlwZSIsImdldFJlc3VsdHMiLCJsYXN0RnVsbHlMb2FkZWRSZWxhdGlvbkFyZyIsImxhc3RMb2FkZWRQYWdlQXJnIiwic2VhcmNoQXJnIiwibGFzdExvYWRlZFBhZ2VUb1VzZSIsImxhc3RGdWxseUxvYWRlZFJlbGF0aW9uVG9Vc2UiLCJyZWxhdGlvbnMiLCJyZWxhdGlvbnNUb0ZldGNoIiwicmVzdWx0c0ZldGNoZWQiLCJzbGljZSIsInJlZHVjZSIsInByaW9yUmVsYXRpb24iLCJmaWVsZFRvU2VhcmNoIiwic2VhcmNoUGFyYW0iLCJyZXNwb25zZSIsInVzZUFzVGl0bGUiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImxhbmd1YWdlIiwib2siLCJqc29uIiwiZG9jcyIsImxlbmd0aCIsInBhZ2UiLCJuZXh0UGFnZSIsImluZGV4T2YiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZpbmRPcHRpb25zQnlWYWx1ZSIsIm1hcCIsInZhbCIsIm1hdGNoZWRPcHRpb24iLCJmb3JFYWNoIiwib3B0Iiwic29tZSIsInN1Yk9wdCIsInVuZGVmaW5lZCIsInZhbHVlV2l0aFJlbGF0aW9uIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJuZXdTZWFyY2giLCJhZGRPcHRpb25CeUlEIiwiaWQiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXF1aXJlZCIsIm1hdGNoZWRPcHRpb25zIiwib3B0aW9uIiwiaSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInZhbHVlVG9SZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsIm9uSW5wdXRDaGFuZ2UiLCJzZWxlY3RlZCIsIm9uTWVudVNjcm9sbFRvQm90dG9tIiwiaXNNdWx0aSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxVQUFVLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxTQUFTLFFBQVEsUUFBUTtBQUM1RSxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSwrQkFBK0I7QUFFekQsT0FBT0Msb0JBQW9CLG1CQUFtQjtBQUM5QyxPQUFPQyxpQkFBaUIsbUNBQW1DO0FBQzNELE9BQU9DLGlCQUFpQix1QkFBdUI7QUFJL0MsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsdUJBQXVCO0FBRTdCLElBQU1DLG9CQUFxQyxTQUFDQztJQUMxQyxJQUFRQyxXQUFxRUQsTUFBckVDLFVBQVVDLFFBQTJERixNQUEzREUsT0FBT0MsYUFBb0RILE1BQXBERyxZQUFZQyxVQUF3Q0osTUFBeENJLFNBQWdCLE1BQXdCSixNQUEvQkssT0FBTyxBQUFFQyxjQUFGLGlCQUFpQixDQUFDLElBQWxCLEtBQUVBO0lBRXZELElBTUliLGFBQUFBLGFBTEZjLFlBS0VkLFdBTEZjLFdBQ0FDLEFBQ0VDLE1BR0FoQixXQUpGZSxPQUNFQyxLQUVGQyxjQUNFakIsV0FERmlCO0lBR0YsSUFBTUMsdUJBQXVCQyxNQUFNQyxPQUFPLENBQUNWO0lBQzNDLElBQW1DZiwrQkFBQUEsV0FBV00sZ0JBQWdCLEVBQUUsT0FB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