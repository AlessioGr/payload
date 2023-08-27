/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ function _array_like_to_array(arr, len) {
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
import React, { useReducer, useEffect, useRef, useState, useCallback } from "react";
import isDeepEqual from "deep-equal";
import { serialize } from "object-to-formdata";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../utilities/Auth";
import { useLocale } from "../../utilities/Locale";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import { requests } from "../../../api";
import useThrottledEffect from "../../../hooks/useThrottledEffect";
import { fieldReducer } from "./fieldReducer";
import initContextState from "./initContextState";
import reduceFieldsToValues from "./reduceFieldsToValues";
import getSiblingDataFunc from "./getSiblingData";
import getDataByPathFunc from "./getDataByPath";
import wait from "../../../../utilities/wait";
import buildInitialState from "./buildInitialState";
import errorMessages from "./errorMessages";
import { SubmittedContext, ProcessingContext, ModifiedContext, FormContext, FormFieldsContext, FormWatchContext } from "./context";
import buildStateFromSchema from "./buildStateFromSchema";
import { useOperation } from "../../utilities/OperationProvider";
import { WatchFormErrors } from "./WatchFormErrors";
import { splitPathByArrayFields } from "../../../../utilities/splitPathByArrayFields";
import { setsAreEqual } from "../../../../utilities/setsAreEqual";
import { buildFieldSchemaMap } from "./buildFieldSchemaMap";
import { isNumber } from "../../../../utilities/isNumber";
var baseClass = "form";
var Form = function(props) {
    var _collection, _global;
    var disabled = props.disabled, onSubmit = props.onSubmit, method = props.method, action = props.action, handleResponse = props.handleResponse, onSuccess = props.onSuccess, children = props.children, className = props.className, redirect = props.redirect, disableSuccessStatus = props.disableSuccessStatus, initialState = props.initialState, initialData = props.initialData, waitForAutocomplete = props.waitForAutocomplete;
    var history = useHistory();
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useAuth = useAuth(), refreshCookie = _useAuth.refreshCookie, user = _useAuth.user;
    var _useDocumentInfo = useDocumentInfo(), id = _useDocumentInfo.id, getDocPreferences = _useDocumentInfo.getDocPreferences, collection = _useDocumentInfo.collection, global = _useDocumentInfo.global;
    var operation = useOperation();
    var _useState = _sliced_to_array(useState(false), 2), modified = _useState[0], setModified = _useState[1];
    var _useState1 = _sliced_to_array(useState(false), 2), processing = _useState1[0], setProcessing = _useState1[1];
    var _useState2 = _sliced_to_array(useState(false), 2), submitted = _useState2[0], setSubmitted = _useState2[1];
    var _useState3 = _sliced_to_array(useState(buildInitialState(initialData)), 2), formattedInitialData = _useState3[0], setFormattedInitialData = _useState3[1];
    var formRef = useRef(null);
    var contextRef = useRef({});
    var initialFieldState = {};
    if (formattedInitialData) initialFieldState = formattedInitialData;
    if (initialState) initialFieldState = initialState;
    var fieldsReducer = useReducer(fieldReducer, {}, function() {
        return initialFieldState;
    });
    var _fieldsReducer = _sliced_to_array(fieldsReducer, 2), fields = _fieldsReducer[0], dispatchFields = _fieldsReducer[1];
    contextRef.current.fields = fields;
    contextRef.current.dispatchFields = dispatchFields;
    // Build a current set of child errors for all rows in form state
    var buildRowErrors = useCallback(function() {
        var existingFieldRows = {};
        var newFieldRows = {};
        Object.entries(fields).forEach(function(param) {
            var _param = _sliced_to_array(param, 2), path = _param[0], field = _param[1];
            var pathSegments = splitPathByArrayFields(path);
            for(var i = 0; i < pathSegments.length; i += 1){
                var _fields, _formField;
                var fieldPath = pathSegments.slice(0, i + 1).join(".");
                var formField = (_fields = fields) === null || _fields === void 0 ? void 0 : _fields[fieldPath];
                // Is this an array or blocks field?
                if (Array.isArray((_formField = formField) === null || _formField === void 0 ? void 0 : _formField.rows)) {
                    // Keep a reference to the existing row state
                    existingFieldRows[fieldPath] = formField.rows;
                    // A new row state will be used to compare
                    // against the old state later,
                    // to see if we need to dispatch an update
                    if (!newFieldRows[fieldPath]) {
                        newFieldRows[fieldPath] = formField.rows.map(function(existingRow) {
                            return _object_spread_props(_object_spread({}, existingRow), {
                                childErrorPaths: new Set()
                            });
                        });
                    }
                    var rowIndex = pathSegments[i + 1];
                    var childFieldPath = pathSegments.slice(i + 1).join(".");
                    if (field.valid === false && childFieldPath) {
                        newFieldRows[fieldPath][rowIndex].childErrorPaths.add("".concat(fieldPath, ".").concat(childFieldPath));
                    }
                }
            }
        });
        // Now loop over all fields with rows -
        // if anything changed, dispatch an update for the field
        // with the new row state
        Object.entries(newFieldRows).forEach(function(param) {
            var _param = _sliced_to_array(param, 2), path = _param[0], newRows = _param[1];
            var stateMatches = newRows.every(function(newRow, i) {
                var _existingFieldRows_path_i;
                var existingRowErrorPaths = (_existingFieldRows_path_i = existingFieldRows[path][i]) === null || _existingFieldRows_path_i === void 0 ? void 0 : _existingFieldRows_path_i.childErrorPaths;
                return setsAreEqual(newRow.childErrorPaths, existingRowErrorPaths);
            });
            if (!stateMatches) {
                dispatchFields({
                    type: "UPDATE",
                    path: path,
                    rows: newRows
                });
            }
        });
    }, [
        fields,
        dispatchFields
    ]);
    var validateForm = useCallback(/*#__PURE__*/ _async_to_generator(function() {
        var validatedFieldState, isValid, data, validationPromises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    validatedFieldState = {};
                    isValid = true;
                    data = contextRef.current.getData();
                    validationPromises = Object.entries(contextRef.current.fields).map(function() {
                        var _ref = _async_to_generator(function(param) {
                            var _param, path, field, validatedField, validationResult;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        _param = _sliced_to_array(param, 2), path = _param[0], field = _param[1];
                                        validatedField = _object_spread_props(_object_spread({}, field), {
                                            valid: true
                                        });
                                        if (!(field.passesCondition !== false)) return [
                                            3,
                                            3
                                        ];
                                        validationResult = true;
                                        if (!(typeof field.validate === "function")) return [
                                            3,
                                            2
                                        ];
                                        return [
                                            4,
                                            field.validate(field.value, {
                                                data: data,
                                                siblingData: contextRef.current.getSiblingData(path),
                                                user: user,
                                                id: id,
                                                operation: operation,
                                                t: t
                                            })
                                        ];
                                    case 1:
                                        validationResult = _state.sent();
                                        _state.label = 2;
                                    case 2:
                                        if (typeof validationResult === "string") {
                                            validatedField.errorMessage = validationResult;
                                            validatedField.valid = false;
                                            isValid = false;
                                        }
                                        _state.label = 3;
                                    case 3:
                                        validatedFieldState[path] = validatedField;
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
                        4,
                        Promise.all(validationPromises)
                    ];
                case 1:
                    _state.sent();
                    if (!isDeepEqual(contextRef.current.fields, validatedFieldState)) {
                        dispatchFields({
                            type: "REPLACE_STATE",
                            state: validatedFieldState
                        });
                    }
                    return [
                        2,
                        isValid
                    ];
            }
        });
    }), [
        contextRef,
        id,
        user,
        operation,
        t,
        dispatchFields
    ]);
    var submit = useCallback(/*#__PURE__*/ _async_to_generator(function() {
        var options, e, _options_overrides, overrides, tmp, actionToUse, tmp1, methodToUse, skipValidation, isValid, _tmp, data, formData, res, contentType, isJSON, json, destination, _json_errors_reduce, fieldErrors, nonFieldErrors, message, err;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    options = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {}, e = _arguments.length > 1 ? _arguments[1] : void 0;
                    _options_overrides = options.overrides, overrides = _options_overrides === void 0 ? {} : _options_overrides, tmp = options.action, actionToUse = tmp === void 0 ? action : tmp, tmp1 = options.method, methodToUse = tmp1 === void 0 ? method : tmp1, skipValidation = options.skipValidation;
                    if (disabled) {
                        if (e) {
                            e.preventDefault();
                        }
                        return [
                            2
                        ];
                    }
                    if (e) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                    setProcessing(true);
                    if (!waitForAutocomplete) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        wait(100)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    if (!skipValidation) return [
                        3,
                        3
                    ];
                    _tmp = true;
                    return [
                        3,
                        5
                    ];
                case 3:
                    return [
                        4,
                        contextRef.current.validateForm()
                    ];
                case 4:
                    _tmp = _state.sent();
                    _state.label = 5;
                case 5:
                    isValid = _tmp;
                    contextRef.current.buildRowErrors();
                    if (!skipValidation) setSubmitted(true);
                    // If not valid, prevent submission
                    if (!isValid) {
                        toast.error(t("error:correctInvalidFields"));
                        setProcessing(false);
                        return [
                            2
                        ];
                    }
                    // If submit handler comes through via props, run that
                    if (onSubmit) {
                        data = _object_spread({}, reduceFieldsToValues(fields, true), overrides);
                        onSubmit(fields, data);
                    }
                    formData = contextRef.current.createFormData(overrides);
                    _state.label = 6;
                case 6:
                    _state.trys.push([
                        6,
                        10,
                        ,
                        11
                    ]);
                    return [
                        4,
                        requests[methodToUse.toLowerCase()](actionToUse, {
                            body: formData,
                            headers: {
                                "Accept-Language": i18n.language
                            }
                        })
                    ];
                case 7:
                    res = _state.sent();
                    setModified(false);
                    if (typeof handleResponse === "function") {
                        handleResponse(res);
                        return [
                            2
                        ];
                    }
                    setProcessing(false);
                    contentType = res.headers.get("content-type");
                    isJSON = contentType && contentType.indexOf("application/json") !== -1;
                    json = {};
                    if (!isJSON) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        res.json()
                    ];
                case 8:
                    json = _state.sent();
                    _state.label = 9;
                case 9:
                    if (res.status < 400) {
                        setSubmitted(false);
                        if (typeof onSuccess === "function") onSuccess(json);
                        if (redirect) {
                            destination = {
                                pathname: redirect,
                                state: {}
                            };
                            if (typeof json === "object" && json.message && !disableSuccessStatus) {
                                destination.state = {
                                    status: [
                                        {
                                            message: json.message,
                                            type: "success"
                                        }
                                    ]
                                };
                            }
                            history.push(destination);
                        } else if (!disableSuccessStatus) {
                            toast.success(json.message || t("submissionSuccessful"), {
                                autoClose: 3000
                            });
                        }
                    } else {
                        contextRef.current = _object_spread({}, contextRef.current); // triggers rerender of all components that subscribe to form
                        if (json.message) {
                            toast.error(json.message);
                            return [
                                2
                            ];
                        }
                        if (Array.isArray(json.errors)) {
                            _json_errors_reduce = _sliced_to_array(json.errors.reduce(function(param, err) {
                                var _param = _sliced_to_array(param, 2), fieldErrs = _param[0], nonFieldErrs = _param[1];
                                var _err, _err1;
                                var newFieldErrs = [];
                                var newNonFieldErrs = [];
                                if ((_err = err) === null || _err === void 0 ? void 0 : _err.message) {
                                    newNonFieldErrs.push(err);
                                }
                                if (Array.isArray((_err1 = err) === null || _err1 === void 0 ? void 0 : _err1.data)) {
                                    err.data.forEach(function(dataError) {
                                        var _dataError;
                                        if ((_dataError = dataError) === null || _dataError === void 0 ? void 0 : _dataError.field) {
                                            newFieldErrs.push(dataError);
                                        } else {
                                            newNonFieldErrs.push(dataError);
                                        }
                                    });
                                }
                                return [
                                    _to_consumable_array(fieldErrs).concat(_to_consumable_array(newFieldErrs)),
                                    _to_consumable_array(nonFieldErrs).concat(_to_consumable_array(newNonFieldErrs))
                                ];
                            }, [
                                [],
                                []
                            ]), 2), fieldErrors = _json_errors_reduce[0], nonFieldErrors = _json_errors_reduce[1];
                            fieldErrors.forEach(function(err) {
                                var _contextRef_current_fields, _contextRef_current;
                                dispatchFields(_object_spread_props(_object_spread({
                                    type: "UPDATE"
                                }, ((_contextRef_current = contextRef.current) === null || _contextRef_current === void 0 ? void 0 : (_contextRef_current_fields = _contextRef_current.fields) === null || _contextRef_current_fields === void 0 ? void 0 : _contextRef_current_fields[err.field]) || {}), {
                                    valid: false,
                                    errorMessage: err.message,
                                    path: err.field
                                }));
                            });
                            nonFieldErrors.forEach(function(err) {
                                toast.error(err.message || t("error:unknown"));
                            });
                            return [
                                2
                            ];
                        }
                        message = errorMessages[res.status] || t("error:unknown");
                        toast.error(message);
                    }
                    return [
                        3,
                        11
                    ];
                case 10:
                    err = _state.sent();
                    setProcessing(false);
                    toast.error(err);
                    return [
                        3,
                        11
                    ];
                case 11:
                    return [
                        2
                    ];
            }
        });
    }), [
        action,
        disableSuccessStatus,
        disabled,
        dispatchFields,
        fields,
        handleResponse,
        history,
        method,
        onSubmit,
        onSuccess,
        redirect,
        t,
        i18n,
        waitForAutocomplete
    ]);
    var traverseRowConfigs = React.useCallback(function(param) {
        var pathPrefix = param.pathPrefix, path = param.path, fieldConfig = param.fieldConfig;
        var config = fieldConfig;
        var pathSegments = splitPathByArrayFields(path);
        var configMap = buildFieldSchemaMap(config);
        for(var i = 0; i < pathSegments.length; i += 1){
            var pathSegment = pathSegments[i];
            if (isNumber(pathSegment)) {
                var rowIndex = parseInt(pathSegment, 10);
                var parentFieldPath = pathSegments.slice(0, i).join(".");
                var remainingPath = pathSegments.slice(i + 1).join(".");
                var arrayFieldPath = pathPrefix ? "".concat(pathPrefix, ".").concat(parentFieldPath) : parentFieldPath;
                var parentArrayField = contextRef.current.getField(arrayFieldPath);
                var rowField = parentArrayField.rows[rowIndex];
                if (rowField.blockType) {
                    var blockConfig = configMap.get("".concat(parentFieldPath, ".").concat(rowField.blockType));
                    if (blockConfig) {
                        return traverseRowConfigs({
                            pathPrefix: "".concat(arrayFieldPath, ".").concat(rowIndex),
                            path: remainingPath,
                            fieldConfig: blockConfig
                        });
                    }
                    throw new Error("Block config not found for ".concat(rowField.blockType, " at path ").concat(path));
                } else {
                    return traverseRowConfigs({
                        pathPrefix: "".concat(arrayFieldPath, ".").concat(rowIndex),
                        path: remainingPath,
                        fieldConfig: configMap.get(parentFieldPath)
                    });
                }
            }
        }
        return config;
    }, []);
    var getRowConfigByPath = React.useCallback(function(param) {
        var path = param.path, blockType = param.blockType;
        var _collection, _global;
        var rowConfig = traverseRowConfigs({
            path: path,
            fieldConfig: ((_collection = collection) === null || _collection === void 0 ? void 0 : _collection.fields) || ((_global = global) === null || _global === void 0 ? void 0 : _global.fields)
        });
        var rowFieldConfigs = buildFieldSchemaMap(rowConfig);
        var pathSegments = splitPathByArrayFields(path);
        var fieldKey = pathSegments.at(-1);
        return rowFieldConfigs.get(blockType ? "".concat(fieldKey, ".").concat(blockType) : fieldKey);
    }, [
        traverseRowConfigs,
        (_collection = collection) === null || _collection === void 0 ? void 0 : _collection.fields,
        (_global = global) === null || _global === void 0 ? void 0 : _global.fields
    ]);
    // Array/Block row manipulation
    var addFieldRow = useCallback(function() {
        var _ref = _async_to_generator(function(param) {
            var path, rowIndex, data, _data, preferences, fieldConfig, _data1, subFieldState;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        path = param.path, rowIndex = param.rowIndex, data = param.data;
                        return [
                            4,
                            getDocPreferences()
                        ];
                    case 1:
                        preferences = _state.sent();
                        fieldConfig = getRowConfigByPath({
                            path: path,
                            blockType: (_data = data) === null || _data === void 0 ? void 0 : _data.blockType
                        });
                        if (!fieldConfig) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            buildStateFromSchema({
                                fieldSchema: fieldConfig,
                                data: data,
                                preferences: preferences,
                                operation: operation,
                                id: id,
                                user: user,
                                locale: locale,
                                t: t
                            })
                        ];
                    case 2:
                        subFieldState = _state.sent();
                        dispatchFields({
                            type: "ADD_ROW",
                            rowIndex: rowIndex - 1,
                            path: path,
                            blockType: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.blockType,
                            subFieldState: subFieldState
                        });
                        _state.label = 3;
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function(_) {
            return _ref.apply(this, arguments);
        };
    }(), [
        dispatchFields,
        getDocPreferences,
        id,
        user,
        operation,
        locale,
        t,
        getRowConfigByPath
    ]);
    var removeFieldRow = useCallback(function() {
        var _ref = _async_to_generator(function(param) {
            var path, rowIndex;
            return _ts_generator(this, function(_state) {
                path = param.path, rowIndex = param.rowIndex;
                dispatchFields({
                    type: "REMOVE_ROW",
                    rowIndex: rowIndex,
                    path: path
                });
                return [
                    2
                ];
            });
        });
        return function(_) {
            return _ref.apply(this, arguments);
        };
    }(), [
        dispatchFields
    ]);
    var replaceFieldRow = useCallback(function() {
        var _ref = _async_to_generator(function(param) {
            var path, rowIndex, data, _data, preferences, fieldConfig, _data1, subFieldState;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        path = param.path, rowIndex = param.rowIndex, data = param.data;
                        return [
                            4,
                            getDocPreferences()
                        ];
                    case 1:
                        preferences = _state.sent();
                        fieldConfig = getRowConfigByPath({
                            path: path,
                            blockType: (_data = data) === null || _data === void 0 ? void 0 : _data.blockType
                        });
                        if (!fieldConfig) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            buildStateFromSchema({
                                fieldSchema: fieldConfig,
                                data: data,
                                preferences: preferences,
                                operation: operation,
                                id: id,
                                user: user,
                                locale: locale,
                                t: t
                            })
                        ];
                    case 2:
                        subFieldState = _state.sent();
                        dispatchFields({
                            type: "REPLACE_ROW",
                            rowIndex: rowIndex - 1,
                            path: path,
                            blockType: (_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.blockType,
                            subFieldState: subFieldState
                        });
                        _state.label = 3;
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        return function(_) {
            return _ref.apply(this, arguments);
        };
    }(), [
        dispatchFields,
        getDocPreferences,
        id,
        user,
        operation,
        locale,
        t,
        getRowConfigByPath
    ]);
    var getFields = useCallback(function() {
        return contextRef.current.fields;
    }, [
        contextRef
    ]);
    var getField = useCallback(function(path) {
        return contextRef.current.fields[path];
    }, [
        contextRef
    ]);
    var getData = useCallback(function() {
        return reduceFieldsToValues(contextRef.current.fields, true);
    }, [
        contextRef
    ]);
    var getSiblingData = useCallback(function(path) {
        return getSiblingDataFunc(contextRef.current.fields, path);
    }, [
        contextRef
    ]);
    var getDataByPath = useCallback(function(path) {
        return getDataByPathFunc(contextRef.current.fields, path);
    }, [
        contextRef
    ]);
    var createFormData = useCallback(function() {
        var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _data;
        var data = reduceFieldsToValues(contextRef.current.fields, true);
        var file = (_data = data) === null || _data === void 0 ? void 0 : _data.file;
        if (file) {
            delete data.file;
        }
        var dataWithOverrides = _object_spread({}, data, overrides);
        var dataToSerialize = {
            _payload: JSON.stringify(dataWithOverrides),
            file: file
        };
        // nullAsUndefineds is important to allow uploads and relationship fields to clear themselves
        var formData = serialize(dataToSerialize, {
            indices: true,
            nullsAsUndefineds: false
        });
        return formData;
    }, [
        contextRef
    ]);
    var reset = useCallback(function() {
        var _ref = _async_to_generator(function(fieldSchema, data) {
            var preferences, state;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getDocPreferences()
                        ];
                    case 1:
                        preferences = _state.sent();
                        return [
                            4,
                            buildStateFromSchema({
                                fieldSchema: fieldSchema,
                                preferences: preferences,
                                data: data,
                                user: user,
                                id: id,
                                operation: operation,
                                locale: locale,
                                t: t
                            })
                        ];
                    case 2:
                        state = _state.sent();
                        contextRef.current = _object_spread({}, initContextState);
                        setModified(false);
                        dispatchFields({
                            type: "REPLACE_STATE",
                            state: state
                        });
                        return [
                            2
                        ];
                }
            });
        });
        return function(fieldSchema, data) {
            return _ref.apply(this, arguments);
        };
    }(), [
        id,
        user,
        operation,
        locale,
        t,
        dispatchFields,
        getDocPreferences
    ]);
    var replaceState = useCallback(function(state) {
        contextRef.current = _object_spread({}, initContextState);
        setModified(false);
        dispatchFields({
            type: "REPLACE_STATE",
            state: state
        });
    }, [
        dispatchFields
    ]);
    contextRef.current.submit = submit;
    contextRef.current.getFields = getFields;
    contextRef.current.getField = getField;
    contextRef.current.getData = getData;
    contextRef.current.getSiblingData = getSiblingData;
    contextRef.current.getDataByPath = getDataByPath;
    contextRef.current.validateForm = validateForm;
    contextRef.current.createFormData = createFormData;
    contextRef.current.setModified = setModified;
    contextRef.current.setProcessing = setProcessing;
    contextRef.current.setSubmitted = setSubmitted;
    contextRef.current.disabled = disabled;
    contextRef.current.formRef = formRef;
    contextRef.current.reset = reset;
    contextRef.current.replaceState = replaceState;
    contextRef.current.buildRowErrors = buildRowErrors;
    contextRef.current.addFieldRow = addFieldRow;
    contextRef.current.removeFieldRow = removeFieldRow;
    contextRef.current.replaceFieldRow = replaceFieldRow;
    useEffect(function() {
        if (initialState) {
            contextRef.current = _object_spread({}, initContextState);
            dispatchFields({
                type: "REPLACE_STATE",
                state: initialState
            });
        }
    }, [
        initialState,
        dispatchFields
    ]);
    useEffect(function() {
        if (initialData) {
            contextRef.current = _object_spread({}, initContextState);
            var builtState = buildInitialState(initialData);
            setFormattedInitialData(builtState);
            dispatchFields({
                type: "REPLACE_STATE",
                state: builtState
            });
        }
    }, [
        initialData,
        dispatchFields
    ]);
    useThrottledEffect(function() {
        refreshCookie();
    }, 15000, [
        fields
    ]);
    useEffect(function() {
        contextRef.current = _object_spread({}, contextRef.current); // triggers rerender of all components that subscribe to form
        setModified(false);
    }, [
        locale
    ]);
    var classes = [
        className,
        baseClass
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("form", {
        noValidate: true,
        onSubmit: function(e) {
            return contextRef.current.submit({}, e);
        },
        method: method,
        action: action,
        className: classes,
        ref: formRef
    }, /*#__PURE__*/ React.createElement(FormContext.Provider, {
        value: contextRef.current
    }, /*#__PURE__*/ React.createElement(FormWatchContext.Provider, {
        value: _object_spread({
            fields: fields
        }, contextRef.current)
    }, /*#__PURE__*/ React.createElement(SubmittedContext.Provider, {
        value: submitted
    }, /*#__PURE__*/ React.createElement(ProcessingContext.Provider, {
        value: processing
    }, /*#__PURE__*/ React.createElement(ModifiedContext.Provider, {
        value: modified
    }, /*#__PURE__*/ React.createElement(FormFieldsContext.Provider, {
        value: fieldsReducer
    }, /*#__PURE__*/ React.createElement(WatchFormErrors, {
        buildRowErrors: buildRowErrors
    }), children)))))));
};
export default Form;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzRGVlcEVxdWFsIGZyb20gJ2RlZXAtZXF1YWwnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnb2JqZWN0LXRvLWZvcm1kYXRhJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHVzZVRocm90dGxlZEVmZmVjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaHJvdHRsZWRFZmZlY3QnO1xuaW1wb3J0IHsgZmllbGRSZWR1Y2VyIH0gZnJvbSAnLi9maWVsZFJlZHVjZXInO1xuaW1wb3J0IGluaXRDb250ZXh0U3RhdGUgZnJvbSAnLi9pbml0Q29udGV4dFN0YXRlJztcbmltcG9ydCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyBmcm9tICcuL3JlZHVjZUZpZWxkc1RvVmFsdWVzJztcbmltcG9ydCBnZXRTaWJsaW5nRGF0YUZ1bmMgZnJvbSAnLi9nZXRTaWJsaW5nRGF0YSc7XG5pbXBvcnQgZ2V0RGF0YUJ5UGF0aEZ1bmMgZnJvbSAnLi9nZXREYXRhQnlQYXRoJztcbmltcG9ydCB3YWl0IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy93YWl0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgYnVpbGRJbml0aWFsU3RhdGUgZnJvbSAnLi9idWlsZEluaXRpYWxTdGF0ZSc7XG5pbXBvcnQgZXJyb3JNZXNzYWdlcyBmcm9tICcuL2Vycm9yTWVzc2FnZXMnO1xuaW1wb3J0IHsgQ29udGV4dCwgRmllbGRzLCBDb250ZXh0IGFzIEZvcm1Db250ZXh0VHlwZSwgR2V0RGF0YUJ5UGF0aCwgUHJvcHMsIFJvdywgU3VibWl0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU3VibWl0dGVkQ29udGV4dCwgUHJvY2Vzc2luZ0NvbnRleHQsIE1vZGlmaWVkQ29udGV4dCwgRm9ybUNvbnRleHQsIEZvcm1GaWVsZHNDb250ZXh0LCBGb3JtV2F0Y2hDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuL2J1aWxkU3RhdGVGcm9tU2NoZW1hJztcbmltcG9ydCB7IHVzZU9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9PcGVyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgeyBXYXRjaEZvcm1FcnJvcnMgfSBmcm9tICcuL1dhdGNoRm9ybUVycm9ycyc7XG5pbXBvcnQgeyBzcGxpdFBhdGhCeUFycmF5RmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3NwbGl0UGF0aEJ5QXJyYXlGaWVsZHMnO1xuaW1wb3J0IHsgc2V0c0FyZUVxdWFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3NldHNBcmVFcXVhbCc7XG5pbXBvcnQgeyBidWlsZEZpZWxkU2NoZW1hTWFwIH0gZnJvbSAnLi9idWlsZEZpZWxkU2NoZW1hTWFwJztcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2lzTnVtYmVyJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGRpc2FibGVkLFxuICAgIG9uU3VibWl0LFxuICAgIG1ldGhvZCxcbiAgICBhY3Rpb24sXG4gICAgaGFuZGxlUmVzcG9uc2UsXG4gICAgb25TdWNjZXNzLFxuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSxcbiAgICByZWRpcmVjdCxcbiAgICBkaXNhYmxlU3VjY2Vzc1N0YXR1cyxcbiAgICBpbml0aWFsU3RhdGUsIC8vIGZ1bGx5IGZvcm1lZCBpbml0aWFsIGZpZWxkIHN0YXRlXG4gICAgaW5pdGlhbERhdGEsIC8vIHZhbHVlcyBvbmx5LCBwYXRocyBhcmUgcmVxdWlyZWQgYXMga2V5IC0gZm9ybSBzaG91bGQgYnVpbGQgaW5pdGlhbCBzdGF0ZSBhcyBjb252ZW5pZW5jZVxuICAgIHdhaXRGb3JBdXRvY29tcGxldGUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgeyByZWZyZXNoQ29va2llLCB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgaWQsIGdldERvY1ByZWZlcmVuY2VzLCBjb2xsZWN0aW9uLCBnbG9iYWwgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCBvcGVyYXRpb24gPSB1c2VPcGVyYXRpb24oKTtcblxuICBjb25zdCBbbW9kaWZpZWQsIHNldE1vZGlmaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9ybWF0dGVkSW5pdGlhbERhdGEsIHNldEZvcm1hdHRlZEluaXRpYWxEYXRhXSA9IHVzZVN0YXRlKGJ1aWxkSW5pdGlhbFN0YXRlKGluaXRpYWxEYXRhKSk7XG5cbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKHt9IGFzIEZvcm1Db250ZXh0VHlwZSk7XG5cbiAgbGV0IGluaXRpYWxGaWVsZFN0YXRlID0ge307XG5cbiAgaWYgKGZvcm1hdHRlZEluaXRpYWxEYXRhKSBpbml0aWFsRmllbGRTdGF0ZSA9IGZvcm1hdHRlZEluaXRpYWxEYXRhO1xuICBpZiAoaW5pdGlhbFN0YXRlKSBpbml0aWFsRmllbGRTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBjb25zdCBmaWVsZHNSZWR1Y2VyID0gdXNlUmVkdWNlcihmaWVsZFJlZHVjZXIsIHt9LCAoKSA9PiBpbml0aWFsRmllbGRTdGF0ZSk7XG4gIGNvbnN0IFtmaWVsZHMsIGRpc3BhdGNoRmllbGRzXSA9IGZpZWxkc1JlZHVjZXI7XG5cbiAgY29udGV4dFJlZi5jdXJyZW50LmZpZWxkcyA9IGZpZWxkcztcbiAgY29udGV4dFJlZi5jdXJyZW50LmRpc3BhdGNoRmllbGRzID0gZGlzcGF0Y2hGaWVsZHM7XG5cbiAgLy8gQnVpbGQgYSBjdXJyZW50IHNldCBvZiBjaGlsZCBlcnJvcnMgZm9yIGFsbCByb3dzIGluIGZvcm0gc3RhdGVcbiAgY29uc3QgYnVpbGRSb3dFcnJvcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdGaWVsZFJvd3M6IHsgW3BhdGg6IHN0cmluZ106IFJvd1tdIH0gPSB7fTtcbiAgICBjb25zdCBuZXdGaWVsZFJvd3M6IHsgW3BhdGg6IHN0cmluZ106IFJvd1tdIH0gPSB7fTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGZpZWxkcykuZm9yRWFjaCgoW3BhdGgsIGZpZWxkXSkgPT4ge1xuICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gc3BsaXRQYXRoQnlBcnJheUZpZWxkcyhwYXRoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgZmllbGRQYXRoID0gcGF0aFNlZ21lbnRzLnNsaWNlKDAsIGkgKyAxKS5qb2luKCcuJyk7XG4gICAgICAgIGNvbnN0IGZvcm1GaWVsZCA9IGZpZWxkcz8uW2ZpZWxkUGF0aF07XG5cbiAgICAgICAgLy8gSXMgdGhpcyBhbiBhcnJheSBvciBibG9ja3MgZmllbGQ/XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZvcm1GaWVsZD8ucm93cykpIHtcbiAgICAgICAgICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBleGlzdGluZyByb3cgc3RhdGVcbiAgICAgICAgICBleGlzdGluZ0ZpZWxkUm93c1tmaWVsZFBhdGhdID0gZm9ybUZpZWxkLnJvd3M7XG5cbiAgICAgICAgICAvLyBBIG5ldyByb3cgc3RhdGUgd2lsbCBiZSB1c2VkIHRvIGNvbXBhcmVcbiAgICAgICAgICAvLyBhZ2FpbnN0IHRoZSBvbGQgc3RhdGUgbGF0ZXIsXG4gICAgICAgICAgLy8gdG8gc2VlIGlmIHdlIG5lZWQgdG8gZGlzcGF0Y2ggYW4gdXBkYXRlXG4gICAgICAgICAgaWYgKCFuZXdGaWVsZFJvd3NbZmllbGRQYXRoXSkge1xuICAgICAgICAgICAgbmV3RmllbGRSb3dzW2ZpZWxkUGF0aF0gPSBmb3JtRmllbGQucm93cy5tYXAoKGV4aXN0aW5nUm93KSA9PiAoe1xuICAgICAgICAgICAgICAuLi5leGlzdGluZ1JvdyxcbiAgICAgICAgICAgICAgY2hpbGRFcnJvclBhdGhzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXRoU2VnbWVudHNbaSArIDFdO1xuICAgICAgICAgIGNvbnN0IGNoaWxkRmllbGRQYXRoID0gcGF0aFNlZ21lbnRzLnNsaWNlKGkgKyAxKS5qb2luKCcuJyk7XG5cbiAgICAgICAgICBpZiAoZmllbGQudmFsaWQgPT09IGZhbHNlICYmIGNoaWxkRmllbGRQYXRoKSB7XG4gICAgICAgICAgICBuZXdGaWVsZFJvd3NbZmllbGRQYXRoXVtyb3dJbmRleF0uY2hpbGRFcnJvclBhdGhzLmFkZChgJHtmaWVsZFBhdGh9LiR7Y2hpbGRGaWVsZFBhdGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBOb3cgbG9vcCBvdmVyIGFsbCBmaWVsZHMgd2l0aCByb3dzIC1cbiAgICAvLyBpZiBhbnl0aGluZyBjaGFuZ2VkLCBkaXNwYXRjaCBhbiB1cGRhdGUgZm9yIHRoZSBmaWVsZFxuICAgIC8vIHdpdGggdGhlIG5ldyByb3cgc3RhdGVcbiAgICBPYmplY3QuZW50cmllcyhuZXdGaWVsZFJvd3MpLmZvckVhY2goKFtwYXRoLCBuZXdSb3dzXSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVNYXRjaGVzID0gbmV3Um93cy5ldmVyeSgobmV3Um93LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUm93RXJyb3JQYXRocyA9IGV4aXN0aW5nRmllbGRSb3dzW3BhdGhdW2ldPy5jaGlsZEVycm9yUGF0aHM7XG4gICAgICAgIHJldHVybiBzZXRzQXJlRXF1YWwobmV3Um93LmNoaWxkRXJyb3JQYXRocywgZXhpc3RpbmdSb3dFcnJvclBhdGhzKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXN0YXRlTWF0Y2hlcykge1xuICAgICAgICBkaXNwYXRjaEZpZWxkcyh7XG4gICAgICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICByb3dzOiBuZXdSb3dzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2ZpZWxkcywgZGlzcGF0Y2hGaWVsZHNdKTtcblxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRTdGF0ZSA9IHt9O1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCBkYXRhID0gY29udGV4dFJlZi5jdXJyZW50LmdldERhdGEoKTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25Qcm9taXNlcyA9IE9iamVjdC5lbnRyaWVzKGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMpLm1hcChhc3luYyAoW3BhdGgsIGZpZWxkXSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGQgPSB7XG4gICAgICAgIC4uLmZpZWxkLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChmaWVsZC5wYXNzZXNDb25kaXRpb24gIT09IGZhbHNlKSB7XG4gICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0OiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAodHlwZW9mIGZpZWxkLnZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IGZpZWxkLnZhbGlkYXRlKGZpZWxkLnZhbHVlLCB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgc2libGluZ0RhdGE6IGNvbnRleHRSZWYuY3VycmVudC5nZXRTaWJsaW5nRGF0YShwYXRoKSxcbiAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFsaWRhdGVkRmllbGQuZXJyb3JNZXNzYWdlID0gdmFsaWRhdGlvblJlc3VsdDtcbiAgICAgICAgICB2YWxpZGF0ZWRGaWVsZC52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YWxpZGF0ZWRGaWVsZFN0YXRlW3BhdGhdID0gdmFsaWRhdGVkRmllbGQ7XG4gICAgfSk7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbCh2YWxpZGF0aW9uUHJvbWlzZXMpO1xuXG4gICAgaWYgKCFpc0RlZXBFcXVhbChjb250ZXh0UmVmLmN1cnJlbnQuZmllbGRzLCB2YWxpZGF0ZWRGaWVsZFN0YXRlKSkge1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVQTEFDRV9TVEFURScsIHN0YXRlOiB2YWxpZGF0ZWRGaWVsZFN0YXRlIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9LCBbY29udGV4dFJlZiwgaWQsIHVzZXIsIG9wZXJhdGlvbiwgdCwgZGlzcGF0Y2hGaWVsZHNdKTtcblxuICBjb25zdCBzdWJtaXQgPSB1c2VDYWxsYmFjayhhc3luYyAob3B0aW9uczogU3VibWl0T3B0aW9ucyA9IHt9LCBlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb3ZlcnJpZGVzID0ge30sXG4gICAgICBhY3Rpb246IGFjdGlvblRvVXNlID0gYWN0aW9uLFxuICAgICAgbWV0aG9kOiBtZXRob2RUb1VzZSA9IG1ldGhvZCxcbiAgICAgIHNraXBWYWxpZGF0aW9uLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc2V0UHJvY2Vzc2luZyh0cnVlKTtcblxuICAgIGlmICh3YWl0Rm9yQXV0b2NvbXBsZXRlKSBhd2FpdCB3YWl0KDEwMCk7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gc2tpcFZhbGlkYXRpb24gPyB0cnVlIDogYXdhaXQgY29udGV4dFJlZi5jdXJyZW50LnZhbGlkYXRlRm9ybSgpO1xuICAgIGNvbnRleHRSZWYuY3VycmVudC5idWlsZFJvd0Vycm9ycygpO1xuXG4gICAgaWYgKCFza2lwVmFsaWRhdGlvbikgc2V0U3VibWl0dGVkKHRydWUpO1xuXG4gICAgLy8gSWYgbm90IHZhbGlkLCBwcmV2ZW50IHN1Ym1pc3Npb25cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yOmNvcnJlY3RJbnZhbGlkRmllbGRzJykpO1xuICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBzdWJtaXQgaGFuZGxlciBjb21lcyB0aHJvdWdoIHZpYSBwcm9wcywgcnVuIHRoYXRcbiAgICBpZiAob25TdWJtaXQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIC4uLnJlZHVjZUZpZWxkc1RvVmFsdWVzKGZpZWxkcywgdHJ1ZSksXG4gICAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICAgIH07XG5cbiAgICAgIG9uU3VibWl0KGZpZWxkcywgZGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybURhdGEgPSBjb250ZXh0UmVmLmN1cnJlbnQuY3JlYXRlRm9ybURhdGEob3ZlcnJpZGVzKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0c1ttZXRob2RUb1VzZS50b0xvd2VyQ2FzZSgpXShhY3Rpb25Ub1VzZSwge1xuICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHNldE1vZGlmaWVkKGZhbHNlKTtcblxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBoYW5kbGVSZXNwb25zZShyZXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpO1xuXG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICBjb25zdCBpc0pTT04gPSBjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgIT09IC0xO1xuXG4gICAgICBsZXQganNvbjogYW55ID0ge307XG5cbiAgICAgIGlmIChpc0pTT04pIGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICBpZiAocmVzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb25TdWNjZXNzID09PSAnZnVuY3Rpb24nKSBvblN1Y2Nlc3MoanNvbik7XG5cbiAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XG4gICAgICAgICAgICBwYXRobmFtZTogcmVkaXJlY3QsXG4gICAgICAgICAgICBzdGF0ZToge30sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gJ29iamVjdCcgJiYganNvbi5tZXNzYWdlICYmICFkaXNhYmxlU3VjY2Vzc1N0YXR1cykge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uc3RhdGUgPSB7XG4gICAgICAgICAgICAgIHN0YXR1czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGpzb24ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoaXN0b3J5LnB1c2goZGVzdGluYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKCFkaXNhYmxlU3VjY2Vzc1N0YXR1cykge1xuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoanNvbi5tZXNzYWdlIHx8IHQoJ3N1Ym1pc3Npb25TdWNjZXNzZnVsJyksIHsgYXV0b0Nsb3NlOiAzMDAwIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmNvbnRleHRSZWYuY3VycmVudCB9OyAvLyB0cmlnZ2VycyByZXJlbmRlciBvZiBhbGwgY29tcG9uZW50cyB0aGF0IHN1YnNjcmliZSB0byBmb3JtXG5cbiAgICAgICAgaWYgKGpzb24ubWVzc2FnZSkge1xuICAgICAgICAgIHRvYXN0LmVycm9yKGpzb24ubWVzc2FnZSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uLmVycm9ycykpIHtcbiAgICAgICAgICBjb25zdCBbZmllbGRFcnJvcnMsIG5vbkZpZWxkRXJyb3JzXSA9IGpzb24uZXJyb3JzLnJlZHVjZShcbiAgICAgICAgICAgIChbZmllbGRFcnJzLCBub25GaWVsZEVycnNdLCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3RmllbGRFcnJzID0gW107XG4gICAgICAgICAgICAgIGNvbnN0IG5ld05vbkZpZWxkRXJycyA9IFtdO1xuXG4gICAgICAgICAgICAgIGlmIChlcnI/Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBuZXdOb25GaWVsZEVycnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXJyPy5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGVyci5kYXRhLmZvckVhY2goKGRhdGFFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGFFcnJvcj8uZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGRFcnJzLnB1c2goZGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld05vbkZpZWxkRXJycy5wdXNoKGRhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC4uLmZpZWxkRXJycyxcbiAgICAgICAgICAgICAgICAgIC4uLm5ld0ZpZWxkRXJycyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC4uLm5vbkZpZWxkRXJycyxcbiAgICAgICAgICAgICAgICAgIC4uLm5ld05vbkZpZWxkRXJycyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtbXSwgW11dLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBmaWVsZEVycm9ycy5mb3JFYWNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRmllbGRzKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICAgICAgICAgIC4uLihjb250ZXh0UmVmLmN1cnJlbnQ/LmZpZWxkcz8uW2Vyci5maWVsZF0gfHwge30pLFxuICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IGVyci5maWVsZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbm9uRmllbGRFcnJvcnMuZm9yRWFjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSB8fCB0KCdlcnJvcjp1bmtub3duJykpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yTWVzc2FnZXNbcmVzLnN0YXR1c10gfHwgdCgnZXJyb3I6dW5rbm93bicpO1xuXG4gICAgICAgIHRvYXN0LmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XG5cbiAgICAgIHRvYXN0LmVycm9yKGVycik7XG4gICAgfVxuICB9LCBbXG4gICAgYWN0aW9uLFxuICAgIGRpc2FibGVTdWNjZXNzU3RhdHVzLFxuICAgIGRpc2FibGVkLFxuICAgIGRpc3BhdGNoRmllbGRzLFxuICAgIGZpZWxkcyxcbiAgICBoYW5kbGVSZXNwb25zZSxcbiAgICBoaXN0b3J5LFxuICAgIG1ldGhvZCxcbiAgICBvblN1Ym1pdCxcbiAgICBvblN1Y2Nlc3MsXG4gICAgcmVkaXJlY3QsXG4gICAgdCxcbiAgICBpMThuLFxuICAgIHdhaXRGb3JBdXRvY29tcGxldGUsXG4gIF0pO1xuXG4gIGNvbnN0IHRyYXZlcnNlUm93Q29uZmlncyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh7IHBhdGhQcmVmaXgsIHBhdGgsIGZpZWxkQ29uZmlnIH06IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmllbGRDb25maWc6IEZpZWxkW11cbiAgICBwYXRoUHJlZml4Pzogc3RyaW5nLFxuICB9KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gZmllbGRDb25maWc7XG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gc3BsaXRQYXRoQnlBcnJheUZpZWxkcyhwYXRoKTtcbiAgICBjb25zdCBjb25maWdNYXAgPSBidWlsZEZpZWxkU2NoZW1hTWFwKGNvbmZpZyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGF0aFNlZ21lbnQgPSBwYXRoU2VnbWVudHNbaV07XG5cbiAgICAgIGlmIChpc051bWJlcihwYXRoU2VnbWVudCkpIHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXJzZUludChwYXRoU2VnbWVudCwgMTApO1xuICAgICAgICBjb25zdCBwYXJlbnRGaWVsZFBhdGggPSBwYXRoU2VnbWVudHMuc2xpY2UoMCwgaSkuam9pbignLicpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdQYXRoID0gcGF0aFNlZ21lbnRzLnNsaWNlKGkgKyAxKS5qb2luKCcuJyk7XG4gICAgICAgIGNvbnN0IGFycmF5RmllbGRQYXRoID0gcGF0aFByZWZpeCA/IGAke3BhdGhQcmVmaXh9LiR7cGFyZW50RmllbGRQYXRofWAgOiBwYXJlbnRGaWVsZFBhdGg7XG4gICAgICAgIGNvbnN0IHBhcmVudEFycmF5RmllbGQgPSBjb250ZXh0UmVmLmN1cnJlbnQuZ2V0RmllbGQoYXJyYXlGaWVsZFBhdGgpO1xuICAgICAgICBjb25zdCByb3dGaWVsZCA9IHBhcmVudEFycmF5RmllbGQucm93c1tyb3dJbmRleF07XG5cbiAgICAgICAgaWYgKHJvd0ZpZWxkLmJsb2NrVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGJsb2NrQ29uZmlnID0gY29uZmlnTWFwLmdldChgJHtwYXJlbnRGaWVsZFBhdGh9LiR7cm93RmllbGQuYmxvY2tUeXBlfWApO1xuICAgICAgICAgIGlmIChibG9ja0NvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYXZlcnNlUm93Q29uZmlncyh7XG4gICAgICAgICAgICAgIHBhdGhQcmVmaXg6IGAke2FycmF5RmllbGRQYXRofS4ke3Jvd0luZGV4fWAsXG4gICAgICAgICAgICAgIHBhdGg6IHJlbWFpbmluZ1BhdGgsXG4gICAgICAgICAgICAgIGZpZWxkQ29uZmlnOiBibG9ja0NvbmZpZyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQmxvY2sgY29uZmlnIG5vdCBmb3VuZCBmb3IgJHtyb3dGaWVsZC5ibG9ja1R5cGV9IGF0IHBhdGggJHtwYXRofWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cmF2ZXJzZVJvd0NvbmZpZ3Moe1xuICAgICAgICAgICAgcGF0aFByZWZpeDogYCR7YXJyYXlGaWVsZFBhdGh9LiR7cm93SW5kZXh9YCxcbiAgICAgICAgICAgIHBhdGg6IHJlbWFpbmluZ1BhdGgsXG4gICAgICAgICAgICBmaWVsZENvbmZpZzogY29uZmlnTWFwLmdldChwYXJlbnRGaWVsZFBhdGgpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldFJvd0NvbmZpZ0J5UGF0aCA9IFJlYWN0LnVzZUNhbGxiYWNrKCh7IHBhdGgsIGJsb2NrVHlwZSB9OiB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGJsb2NrVHlwZT86IHN0cmluZ1xuICB9KSA9PiB7XG4gICAgY29uc3Qgcm93Q29uZmlnID0gdHJhdmVyc2VSb3dDb25maWdzKHsgcGF0aCwgZmllbGRDb25maWc6IGNvbGxlY3Rpb24/LmZpZWxkcyB8fCBnbG9iYWw/LmZpZWxkcyB9KTtcbiAgICBjb25zdCByb3dGaWVsZENvbmZpZ3MgPSBidWlsZEZpZWxkU2NoZW1hTWFwKHJvd0NvbmZpZyk7XG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gc3BsaXRQYXRoQnlBcnJheUZpZWxkcyhwYXRoKTtcbiAgICBjb25zdCBmaWVsZEtleSA9IHBhdGhTZWdtZW50cy5hdCgtMSk7XG4gICAgcmV0dXJuIHJvd0ZpZWxkQ29uZmlncy5nZXQoYmxvY2tUeXBlID8gYCR7ZmllbGRLZXl9LiR7YmxvY2tUeXBlfWAgOiBmaWVsZEtleSk7XG4gIH0sIFt0cmF2ZXJzZVJvd0NvbmZpZ3MsIGNvbGxlY3Rpb24/LmZpZWxkcywgZ2xvYmFsPy5maWVsZHNdKTtcblxuICAvLyBBcnJheS9CbG9jayByb3cgbWFuaXB1bGF0aW9uXG4gIGNvbnN0IGFkZEZpZWxkUm93OiBDb250ZXh0WydhZGRGaWVsZFJvdyddID0gdXNlQ2FsbGJhY2soYXN5bmMgKHsgcGF0aCwgcm93SW5kZXgsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IGdldFJvd0NvbmZpZ0J5UGF0aCh7XG4gICAgICBwYXRoLFxuICAgICAgYmxvY2tUeXBlOiBkYXRhPy5ibG9ja1R5cGUsXG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGRDb25maWcpIHtcbiAgICAgIGNvbnN0IHN1YkZpZWxkU3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hOiBmaWVsZENvbmZpZywgZGF0YSwgcHJlZmVyZW5jZXMsIG9wZXJhdGlvbiwgaWQsIHVzZXIsIGxvY2FsZSwgdCB9KTtcbiAgICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ0FERF9ST1cnLCByb3dJbmRleDogcm93SW5kZXggLSAxLCBwYXRoLCBibG9ja1R5cGU6IGRhdGE/LmJsb2NrVHlwZSwgc3ViRmllbGRTdGF0ZSB9KTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaEZpZWxkcywgZ2V0RG9jUHJlZmVyZW5jZXMsIGlkLCB1c2VyLCBvcGVyYXRpb24sIGxvY2FsZSwgdCwgZ2V0Um93Q29uZmlnQnlQYXRoXSk7XG5cbiAgY29uc3QgcmVtb3ZlRmllbGRSb3c6IENvbnRleHRbJ3JlbW92ZUZpZWxkUm93J10gPSB1c2VDYWxsYmFjayhhc3luYyAoeyBwYXRoLCByb3dJbmRleCB9KSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVNT1ZFX1JPVycsIHJvd0luZGV4LCBwYXRoIH0pO1xuICB9LCBbZGlzcGF0Y2hGaWVsZHNdKTtcblxuICBjb25zdCByZXBsYWNlRmllbGRSb3c6IENvbnRleHRbJ3JlcGxhY2VGaWVsZFJvdyddID0gdXNlQ2FsbGJhY2soYXN5bmMgKHsgcGF0aCwgcm93SW5kZXgsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IGdldFJvd0NvbmZpZ0J5UGF0aCh7XG4gICAgICBwYXRoLFxuICAgICAgYmxvY2tUeXBlOiBkYXRhPy5ibG9ja1R5cGUsXG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGRDb25maWcpIHtcbiAgICAgIGNvbnN0IHN1YkZpZWxkU3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hOiBmaWVsZENvbmZpZywgZGF0YSwgcHJlZmVyZW5jZXMsIG9wZXJhdGlvbiwgaWQsIHVzZXIsIGxvY2FsZSwgdCB9KTtcbiAgICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFUExBQ0VfUk9XJywgcm93SW5kZXg6IHJvd0luZGV4IC0gMSwgcGF0aCwgYmxvY2tUeXBlOiBkYXRhPy5ibG9ja1R5cGUsIHN1YkZpZWxkU3RhdGUgfSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hGaWVsZHMsIGdldERvY1ByZWZlcmVuY2VzLCBpZCwgdXNlciwgb3BlcmF0aW9uLCBsb2NhbGUsIHQsIGdldFJvd0NvbmZpZ0J5UGF0aF0pO1xuXG4gIGNvbnN0IGdldEZpZWxkcyA9IHVzZUNhbGxiYWNrKCgpID0+IGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMsIFtjb250ZXh0UmVmXSk7XG4gIGNvbnN0IGdldEZpZWxkID0gdXNlQ2FsbGJhY2soKHBhdGg6IHN0cmluZykgPT4gY29udGV4dFJlZi5jdXJyZW50LmZpZWxkc1twYXRoXSwgW2NvbnRleHRSZWZdKTtcbiAgY29uc3QgZ2V0RGF0YSA9IHVzZUNhbGxiYWNrKCgpID0+IHJlZHVjZUZpZWxkc1RvVmFsdWVzKGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMsIHRydWUpLCBbY29udGV4dFJlZl0pO1xuICBjb25zdCBnZXRTaWJsaW5nRGF0YSA9IHVzZUNhbGxiYWNrKChwYXRoOiBzdHJpbmcpID0+IGdldFNpYmxpbmdEYXRhRnVuYyhjb250ZXh0UmVmLmN1cnJlbnQuZmllbGRzLCBwYXRoKSwgW2NvbnRleHRSZWZdKTtcbiAgY29uc3QgZ2V0RGF0YUJ5UGF0aCA9IHVzZUNhbGxiYWNrPEdldERhdGFCeVBhdGg+KChwYXRoOiBzdHJpbmcpID0+IGdldERhdGFCeVBhdGhGdW5jKGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMsIHBhdGgpLCBbY29udGV4dFJlZl0pO1xuXG4gIGNvbnN0IGNyZWF0ZUZvcm1EYXRhID0gdXNlQ2FsbGJhY2soKG92ZXJyaWRlczogYW55ID0ge30pID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVkdWNlRmllbGRzVG9WYWx1ZXMoY29udGV4dFJlZi5jdXJyZW50LmZpZWxkcywgdHJ1ZSk7XG5cbiAgICBjb25zdCBmaWxlID0gZGF0YT8uZmlsZTtcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICBkZWxldGUgZGF0YS5maWxlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGFXaXRoT3ZlcnJpZGVzID0ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YVRvU2VyaWFsaXplID0ge1xuICAgICAgX3BheWxvYWQ6IEpTT04uc3RyaW5naWZ5KGRhdGFXaXRoT3ZlcnJpZGVzKSxcbiAgICAgIGZpbGUsXG4gICAgfTtcblxuICAgIC8vIG51bGxBc1VuZGVmaW5lZHMgaXMgaW1wb3J0YW50IHRvIGFsbG93IHVwbG9hZHMgYW5kIHJlbGF0aW9uc2hpcCBmaWVsZHMgdG8gY2xlYXIgdGhlbXNlbHZlc1xuICAgIGNvbnN0IGZvcm1EYXRhID0gc2VyaWFsaXplKGRhdGFUb1NlcmlhbGl6ZSwgeyBpbmRpY2VzOiB0cnVlLCBudWxsc0FzVW5kZWZpbmVkczogZmFsc2UgfSk7XG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9LCBbY29udGV4dFJlZl0pO1xuXG4gIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKGZpZWxkU2NoZW1hOiBGaWVsZFtdLCBkYXRhOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpO1xuICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoeyBmaWVsZFNjaGVtYSwgcHJlZmVyZW5jZXMsIGRhdGEsIHVzZXIsIGlkLCBvcGVyYXRpb24sIGxvY2FsZSwgdCB9KTtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmluaXRDb250ZXh0U3RhdGUgfSBhcyBGb3JtQ29udGV4dFR5cGU7XG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpO1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFUExBQ0VfU1RBVEUnLCBzdGF0ZSB9KTtcbiAgfSwgW2lkLCB1c2VyLCBvcGVyYXRpb24sIGxvY2FsZSwgdCwgZGlzcGF0Y2hGaWVsZHMsIGdldERvY1ByZWZlcmVuY2VzXSk7XG5cbiAgY29uc3QgcmVwbGFjZVN0YXRlID0gdXNlQ2FsbGJhY2soKHN0YXRlOiBGaWVsZHMpID0+IHtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmluaXRDb250ZXh0U3RhdGUgfSBhcyBGb3JtQ29udGV4dFR5cGU7XG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpO1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFUExBQ0VfU1RBVEUnLCBzdGF0ZSB9KTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzXSk7XG5cbiAgY29udGV4dFJlZi5jdXJyZW50LnN1Ym1pdCA9IHN1Ym1pdDtcbiAgY29udGV4dFJlZi5jdXJyZW50LmdldEZpZWxkcyA9IGdldEZpZWxkcztcbiAgY29udGV4dFJlZi5jdXJyZW50LmdldEZpZWxkID0gZ2V0RmllbGQ7XG4gIGNvbnRleHRSZWYuY3VycmVudC5nZXREYXRhID0gZ2V0RGF0YTtcbiAgY29udGV4dFJlZi5jdXJyZW50LmdldFNpYmxpbmdEYXRhID0gZ2V0U2libGluZ0RhdGE7XG4gIGNvbnRleHRSZWYuY3VycmVudC5nZXREYXRhQnlQYXRoID0gZ2V0RGF0YUJ5UGF0aDtcbiAgY29udGV4dFJlZi5jdXJyZW50LnZhbGlkYXRlRm9ybSA9IHZhbGlkYXRlRm9ybTtcbiAgY29udGV4dFJlZi5jdXJyZW50LmNyZWF0ZUZvcm1EYXRhID0gY3JlYXRlRm9ybURhdGE7XG4gIGNvbnRleHRSZWYuY3VycmVudC5zZXRNb2RpZmllZCA9IHNldE1vZGlmaWVkO1xuICBjb250ZXh0UmVmLmN1cnJlbnQuc2V0UHJvY2Vzc2luZyA9IHNldFByb2Nlc3Npbmc7XG4gIGNvbnRleHRSZWYuY3VycmVudC5zZXRTdWJtaXR0ZWQgPSBzZXRTdWJtaXR0ZWQ7XG4gIGNvbnRleHRSZWYuY3VycmVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICBjb250ZXh0UmVmLmN1cnJlbnQuZm9ybVJlZiA9IGZvcm1SZWY7XG4gIGNvbnRleHRSZWYuY3VycmVudC5yZXNldCA9IHJlc2V0O1xuICBjb250ZXh0UmVmLmN1cnJlbnQucmVwbGFjZVN0YXRlID0gcmVwbGFjZVN0YXRlO1xuICBjb250ZXh0UmVmLmN1cnJlbnQuYnVpbGRSb3dFcnJvcnMgPSBidWlsZFJvd0Vycm9ycztcbiAgY29udGV4dFJlZi5jdXJyZW50LmFkZEZpZWxkUm93ID0gYWRkRmllbGRSb3c7XG4gIGNvbnRleHRSZWYuY3VycmVudC5yZW1vdmVGaWVsZFJvdyA9IHJlbW92ZUZpZWxkUm93O1xuICBjb250ZXh0UmVmLmN1cnJlbnQucmVwbGFjZUZpZWxkUm93ID0gcmVwbGFjZUZpZWxkUm93O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgICAgY29udGV4dFJlZi5jdXJyZW50ID0geyAuLi5pbml0Q29udGV4dFN0YXRlIH0gYXMgRm9ybUNvbnRleHRUeXBlO1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVQTEFDRV9TVEFURScsIHN0YXRlOiBpbml0aWFsU3RhdGUgfSk7XG4gICAgfVxuICB9LCBbaW5pdGlhbFN0YXRlLCBkaXNwYXRjaEZpZWxkc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmluaXRDb250ZXh0U3RhdGUgfSBhcyBGb3JtQ29udGV4dFR5cGU7XG4gICAgICBjb25zdCBidWlsdFN0YXRlID0gYnVpbGRJbml0aWFsU3RhdGUoaW5pdGlhbERhdGEpO1xuICAgICAgc2V0Rm9ybWF0dGVkSW5pdGlhbERhdGEoYnVpbHRTdGF0ZSk7XG4gICAgICBkaXNwYXRjaEZpZWxkcyh7IHR5cGU6ICdSRVBMQUNFX1NUQVRFJywgc3RhdGU6IGJ1aWx0U3RhdGUgfSk7XG4gICAgfVxuICB9LCBbaW5pdGlhbERhdGEsIGRpc3BhdGNoRmllbGRzXSk7XG5cbiAgdXNlVGhyb3R0bGVkRWZmZWN0KCgpID0+IHtcbiAgICByZWZyZXNoQ29va2llKCk7XG4gIH0sIDE1MDAwLCBbZmllbGRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmNvbnRleHRSZWYuY3VycmVudCB9OyAvLyB0cmlnZ2VycyByZXJlbmRlciBvZiBhbGwgY29tcG9uZW50cyB0aGF0IHN1YnNjcmliZSB0byBmb3JtXG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpO1xuICB9LCBbbG9jYWxlXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBjbGFzc05hbWUsXG4gICAgYmFzZUNsYXNzLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgbm9WYWxpZGF0ZVxuICAgICAgb25TdWJtaXQ9eyhlKSA9PiBjb250ZXh0UmVmLmN1cnJlbnQuc3VibWl0KHt9LCBlKX1cbiAgICAgIG1ldGhvZD17bWV0aG9kfVxuICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgPlxuICAgICAgPEZvcm1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0UmVmLmN1cnJlbnR9PlxuICAgICAgICA8Rm9ybVdhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAuLi5jb250ZXh0UmVmLmN1cnJlbnQsXG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3VibWl0dGVkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3VibWl0dGVkfT5cbiAgICAgICAgICAgIDxQcm9jZXNzaW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvY2Vzc2luZ30+XG4gICAgICAgICAgICAgIDxNb2RpZmllZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21vZGlmaWVkfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2ZpZWxkc1JlZHVjZXJ9PlxuICAgICAgICAgICAgICAgICAgPFdhdGNoRm9ybUVycm9ycyBidWlsZFJvd0Vycm9ycz17YnVpbGRSb3dFcnJvcnN9IC8+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9Gb3JtRmllbGRzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9Nb2RpZmllZENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICA8L1Byb2Nlc3NpbmdDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDwvU3VibWl0dGVkQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9Gb3JtV2F0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJpc0RlZXBFcXVhbCIsInNlcmlhbGl6ZSIsInVzZUhpc3RvcnkiLCJ0b2FzdCIsInVzZVRyYW5zbGF0aW9uIiwidXNlQXV0aCIsInVzZUxvY2FsZSIsInVzZURvY3VtZW50SW5mbyIsInJlcXVlc3RzIiwidXNlVGhyb3R0bGVkRWZmZWN0IiwiZmllbGRSZWR1Y2VyIiwiaW5pdENvbnRleHRTdGF0ZSIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwiZ2V0U2libGluZ0RhdGFGdW5jIiwiZ2V0RGF0YUJ5UGF0aEZ1bmMiLCJ3YWl0IiwiYnVpbGRJbml0aWFsU3RhdGUiLCJlcnJvck1lc3NhZ2VzIiwiU3VibWl0dGVkQ29udGV4dCIsIlByb2Nlc3NpbmdDb250ZXh0IiwiTW9kaWZpZWRDb250ZXh0IiwiRm9ybUNvbnRleHQiLCJGb3JtRmllbGRzQ29udGV4dCIsIkZvcm1XYXRjaENvbnRleHQiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsInVzZU9wZXJhdGlvbiIsIldhdGNoRm9ybUVycm9ycyIsInNwbGl0UGF0aEJ5QXJyYXlGaWVsZHMiLCJzZXRzQXJlRXF1YWwiLCJidWlsZEZpZWxkU2NoZW1hTWFwIiwiaXNOdW1iZXIiLCJiYXNlQ2xhc3MiLCJGb3JtIiwicHJvcHMiLCJjb2xsZWN0aW9uIiwiZ2xvYmFsIiwiZGlzYWJsZWQiLCJvblN1Ym1pdCIsIm1ldGhvZCIsImFjdGlvbiIsImhhbmRsZVJlc3BvbnNlIiwib25TdWNjZXNzIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJyZWRpcmVjdCIsImRpc2FibGVTdWNjZXNzU3RhdHVzIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbERhdGEiLCJ3YWl0Rm9yQXV0b2NvbXBsZXRlIiwiaGlzdG9yeSIsImNvZGUiLCJsb2NhbGUiLCJ0IiwiaTE4biIsInJlZnJlc2hDb29raWUiLCJ1c2VyIiwiaWQiLCJnZXREb2NQcmVmZXJlbmNlcyIsIm9wZXJhdGlvbiIsIm1vZGlmaWVkIiwic2V0TW9kaWZpZWQiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImZvcm1hdHRlZEluaXRpYWxEYXRhIiwic2V0Rm9ybWF0dGVkSW5pdGlhbERhdGEiLCJmb3JtUmVmIiwiY29udGV4dFJlZiIsImluaXRpYWxGaWVsZFN0YXRlIiwiZmllbGRzUmVkdWNlciIsImZpZWxkcyIsImRpc3BhdGNoRmllbGRzIiwiY3VycmVudCIsImJ1aWxkUm93RXJyb3JzIiwiZXhpc3RpbmdGaWVsZFJvd3MiLCJuZXdGaWVsZFJvd3MiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsInBhdGgiLCJmaWVsZCIsInBhdGhTZWdtZW50cyIsImkiLCJsZW5ndGgiLCJmb3JtRmllbGQiLCJmaWVsZFBhdGgiLCJzbGljZSIsImpvaW4iLCJBcnJheSIsImlzQXJyYXkiLCJyb3dzIiwibWFwIiwiZXhpc3RpbmdSb3ciLCJjaGlsZEVycm9yUGF0aHMiLCJTZXQiLCJyb3dJbmRleCIsImNoaWxkRmllbGRQYXRoIiwidmFsaWQiLCJhZGQiLCJuZXdSb3dzIiwic3RhdGVNYXRjaGVzIiwiZXZlcnkiLCJuZXdSb3ciLCJleGlzdGluZ1Jvd0Vycm9yUGF0aHMiLCJ0eXBlIiwidmFsaWRhdGVGb3JtIiwidmFsaWRhdGVkRmllbGRTdGF0ZSIsImlzVmFsaWQiLCJkYXRhIiwidmFsaWRhdGlvblByb21pc2VzIiwiZ2V0RGF0YSIsInZhbGlkYXRlZEZpZWxkIiwidmFsaWRhdGlvblJlc3VsdCIsInBhc3Nlc0NvbmRpdGlvbiIsInZhbGlkYXRlIiwidmFsdWUiLCJzaWJsaW5nRGF0YSIsImdldFNpYmxpbmdEYXRhIiwiZXJyb3JNZXNzYWdlIiwiUHJvbWlzZSIsImFsbCIsInN0YXRlIiwic3VibWl0Iiwib3B0aW9ucyIsImUiLCJvdmVycmlkZXMiLCJhY3Rpb25Ub1VzZSIsIm1ldGhvZFRvVXNlIiwic2tpcFZhbGlkYXRpb24iLCJmb3JtRGF0YSIsInJlcyIsImNvbnRlbnRUeXBlIiwiaXNKU09OIiwianNvbiIsImRlc3RpbmF0aW9uIiwiZmllbGRFcnJvcnMiLCJub25GaWVsZEVycm9ycyIsIm1lc3NhZ2UiLCJlcnIiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImVycm9yIiwiY3JlYXRlRm9ybURhdGEiLCJ0b0xvd2VyQ2FzZSIsImJvZHkiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJnZXQiLCJpbmRleE9mIiwic3RhdHVzIiwicGF0aG5hbWUiLCJwdXNoIiwic3VjY2VzcyIsImF1dG9DbG9zZSIsImVycm9ycyIsInJlZHVjZSIsImZpZWxkRXJycyIsIm5vbkZpZWxkRXJycyIsIm5ld0ZpZWxkRXJycyIsIm5ld05vbkZpZWxkRXJycyIsImRhdGFFcnJvciIsInRyYXZlcnNlUm93Q29uZmlncyIsInBhdGhQcmVmaXgiLCJmaWVsZENvbmZpZyIsImNvbmZpZyIsImNvbmZpZ01hcCIsInBhdGhTZWdtZW50IiwicGFyc2VJbnQiLCJwYXJlbnRGaWVsZFBhdGgiLCJyZW1haW5pbmdQYXRoIiwiYXJyYXlGaWVsZFBhdGgiLCJwYXJlbnRBcnJheUZpZWxkIiwiZ2V0RmllbGQiLCJyb3dGaWVsZCIsImJsb2NrVHlwZSIsImJsb2NrQ29uZmlnIiwiRXJyb3IiLCJnZXRSb3dDb25maWdCeVBhdGgiLCJyb3dDb25maWciLCJyb3dGaWVsZENvbmZpZ3MiLCJmaWVsZEtleSIsImF0IiwiYWRkRmllbGRSb3ciLCJwcmVmZXJlbmNlcyIsInN1YkZpZWxkU3RhdGUiLCJmaWVsZFNjaGVtYSIsInJlbW92ZUZpZWxkUm93IiwicmVwbGFjZUZpZWxkUm93IiwiZ2V0RmllbGRzIiwiZ2V0RGF0YUJ5UGF0aCIsImZpbGUiLCJkYXRhV2l0aE92ZXJyaWRlcyIsImRhdGFUb1NlcmlhbGl6ZSIsIl9wYXlsb2FkIiwiSlNPTiIsInN0cmluZ2lmeSIsImluZGljZXMiLCJudWxsc0FzVW5kZWZpbmVkcyIsInJlc2V0IiwicmVwbGFjZVN0YXRlIiwiYnVpbHRTdGF0ZSIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiZm9ybSIsIm5vVmFsaWRhdGUiLCJyZWYiLCJQcm92aWRlciJdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbEUsT0FBT0EsU0FDTEMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLFFBQy9DLFFBQVE7QUFDZixPQUFPQyxpQkFBaUIsYUFBYTtBQUNyQyxTQUFTQyxTQUFTLFFBQVEscUJBQXFCO0FBQy9DLFNBQVNDLFVBQVUsUUFBUSxtQkFBbUI7QUFDOUMsU0FBU0MsS0FBSyxRQUFRLGlCQUFpQjtBQUN2QyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxTQUFTQyxlQUFlLFFBQVEsK0JBQStCO0FBQy9ELFNBQVNDLFFBQVEsUUFBUSxlQUFlO0FBQ3hDLE9BQU9DLHdCQUF3QixvQ0FBb0M7QUFDbkUsU0FBU0MsWUFBWSxRQUFRLGlCQUFpQjtBQUM5QyxPQUFPQyxzQkFBc0IscUJBQXFCO0FBQ2xELE9BQU9DLDBCQUEwQix5QkFBeUI7QUFDMUQsT0FBT0Msd0JBQXdCLG1CQUFtQjtB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