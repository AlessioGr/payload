/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */ "use strict";
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
var _deepequal = /*#__PURE__*/ _interop_require_default(require("deep-equal"));
var _objecttoformdata = require("object-to-formdata");
var _reactrouterdom = require("react-router-dom");
var _reacttoastify = require("react-toastify");
var _reacti18next = require("react-i18next");
var _Auth = require("../../utilities/Auth");
var _Locale = require("../../utilities/Locale");
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _api = require("../../../api");
var _useThrottledEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThrottledEffect"));
var _fieldReducer = require("./fieldReducer");
var _initContextState = /*#__PURE__*/ _interop_require_default(require("./initContextState"));
var _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("./reduceFieldsToValues"));
var _getSiblingData = /*#__PURE__*/ _interop_require_default(require("./getSiblingData"));
var _getDataByPath = /*#__PURE__*/ _interop_require_default(require("./getDataByPath"));
var _wait = /*#__PURE__*/ _interop_require_default(require("../../../../utilities/wait"));
var _buildInitialState = /*#__PURE__*/ _interop_require_default(require("./buildInitialState"));
var _errorMessages = /*#__PURE__*/ _interop_require_default(require("./errorMessages"));
var _context = require("./context");
var _buildStateFromSchema = /*#__PURE__*/ _interop_require_default(require("./buildStateFromSchema"));
var _OperationProvider = require("../../utilities/OperationProvider");
var _WatchFormErrors = require("./WatchFormErrors");
var _splitPathByArrayFields = require("../../../../utilities/splitPathByArrayFields");
var _setsAreEqual = require("../../../../utilities/setsAreEqual");
var _buildFieldSchemaMap = require("./buildFieldSchemaMap");
var _isNumber = require("../../../../utilities/isNumber");
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
var baseClass = "form";
var Form = function(props) {
    var _collection, _global;
    var disabled = props.disabled, onSubmit = props.onSubmit, method = props.method, action = props.action, handleResponse = props.handleResponse, onSuccess = props.onSuccess, children = props.children, className = props.className, redirect = props.redirect, disableSuccessStatus = props.disableSuccessStatus, initialState = props.initialState, initialData = props.initialData, waitForAutocomplete = props.waitForAutocomplete;
    var history = (0, _reactrouterdom.useHistory)();
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useAuth = (0, _Auth.useAuth)(), refreshCookie = _useAuth.refreshCookie, user = _useAuth.user;
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), id = _useDocumentInfo.id, getDocPreferences = _useDocumentInfo.getDocPreferences, collection = _useDocumentInfo.collection, global = _useDocumentInfo.global;
    var operation = (0, _OperationProvider.useOperation)();
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), modified = _useState[0], setModified = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), processing = _useState1[0], setProcessing = _useState1[1];
    var _useState2 = _sliced_to_array((0, _react.useState)(false), 2), submitted = _useState2[0], setSubmitted = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)((0, _buildInitialState.default)(initialData)), 2), formattedInitialData = _useState3[0], setFormattedInitialData = _useState3[1];
    var formRef = (0, _react.useRef)(null);
    var contextRef = (0, _react.useRef)({});
    var initialFieldState = {};
    if (formattedInitialData) initialFieldState = formattedInitialData;
    if (initialState) initialFieldState = initialState;
    var fieldsReducer = (0, _react.useReducer)(_fieldReducer.fieldReducer, {}, function() {
        return initialFieldState;
    });
    var _fieldsReducer = _sliced_to_array(fieldsReducer, 2), fields = _fieldsReducer[0], dispatchFields = _fieldsReducer[1];
    contextRef.current.fields = fields;
    contextRef.current.dispatchFields = dispatchFields;
    // Build a current set of child errors for all rows in form state
    var buildRowErrors = (0, _react.useCallback)(function() {
        var existingFieldRows = {};
        var newFieldRows = {};
        Object.entries(fields).forEach(function(param) {
            var _param = _sliced_to_array(param, 2), path = _param[0], field = _param[1];
            var pathSegments = (0, _splitPathByArrayFields.splitPathByArrayFields)(path);
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
                return (0, _setsAreEqual.setsAreEqual)(newRow.childErrorPaths, existingRowErrorPaths);
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
    var validateForm = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
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
                    if (!(0, _deepequal.default)(contextRef.current.fields, validatedFieldState)) {
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
    var submit = (0, _react.useCallback)(/*#__PURE__*/ _async_to_generator(function() {
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
                        (0, _wait.default)(100)
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
                        _reacttoastify.toast.error(t("error:correctInvalidFields"));
                        setProcessing(false);
                        return [
                            2
                        ];
                    }
                    // If submit handler comes through via props, run that
                    if (onSubmit) {
                        data = _object_spread({}, (0, _reduceFieldsToValues.default)(fields, true), overrides);
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
                        _api.requests[methodToUse.toLowerCase()](actionToUse, {
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
                            _reacttoastify.toast.success(json.message || t("submissionSuccessful"), {
                                autoClose: 3000
                            });
                        }
                    } else {
                        contextRef.current = _object_spread({}, contextRef.current); // triggers rerender of all components that subscribe to form
                        if (json.message) {
                            _reacttoastify.toast.error(json.message);
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
                                _reacttoastify.toast.error(err.message || t("error:unknown"));
                            });
                            return [
                                2
                            ];
                        }
                        message = _errorMessages.default[res.status] || t("error:unknown");
                        _reacttoastify.toast.error(message);
                    }
                    return [
                        3,
                        11
                    ];
                case 10:
                    err = _state.sent();
                    setProcessing(false);
                    _reacttoastify.toast.error(err);
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
    var traverseRowConfigs = _react.default.useCallback(function(param) {
        var pathPrefix = param.pathPrefix, path = param.path, fieldConfig = param.fieldConfig;
        var config = fieldConfig;
        var pathSegments = (0, _splitPathByArrayFields.splitPathByArrayFields)(path);
        var configMap = (0, _buildFieldSchemaMap.buildFieldSchemaMap)(config);
        for(var i = 0; i < pathSegments.length; i += 1){
            var pathSegment = pathSegments[i];
            if ((0, _isNumber.isNumber)(pathSegment)) {
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
    var getRowConfigByPath = _react.default.useCallback(function(param) {
        var path = param.path, blockType = param.blockType;
        var _collection, _global;
        var rowConfig = traverseRowConfigs({
            path: path,
            fieldConfig: ((_collection = collection) === null || _collection === void 0 ? void 0 : _collection.fields) || ((_global = global) === null || _global === void 0 ? void 0 : _global.fields)
        });
        var rowFieldConfigs = (0, _buildFieldSchemaMap.buildFieldSchemaMap)(rowConfig);
        var pathSegments = (0, _splitPathByArrayFields.splitPathByArrayFields)(path);
        var fieldKey = pathSegments.at(-1);
        return rowFieldConfigs.get(blockType ? "".concat(fieldKey, ".").concat(blockType) : fieldKey);
    }, [
        traverseRowConfigs,
        (_collection = collection) === null || _collection === void 0 ? void 0 : _collection.fields,
        (_global = global) === null || _global === void 0 ? void 0 : _global.fields
    ]);
    // Array/Block row manipulation
    var addFieldRow = (0, _react.useCallback)(function() {
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
                            (0, _buildStateFromSchema.default)({
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
    var removeFieldRow = (0, _react.useCallback)(function() {
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
    var replaceFieldRow = (0, _react.useCallback)(function() {
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
                            (0, _buildStateFromSchema.default)({
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
    var getFields = (0, _react.useCallback)(function() {
        return contextRef.current.fields;
    }, [
        contextRef
    ]);
    var getField = (0, _react.useCallback)(function(path) {
        return contextRef.current.fields[path];
    }, [
        contextRef
    ]);
    var getData = (0, _react.useCallback)(function() {
        return (0, _reduceFieldsToValues.default)(contextRef.current.fields, true);
    }, [
        contextRef
    ]);
    var getSiblingData = (0, _react.useCallback)(function(path) {
        return (0, _getSiblingData.default)(contextRef.current.fields, path);
    }, [
        contextRef
    ]);
    var getDataByPath = (0, _react.useCallback)(function(path) {
        return (0, _getDataByPath.default)(contextRef.current.fields, path);
    }, [
        contextRef
    ]);
    var createFormData = (0, _react.useCallback)(function() {
        var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var _data;
        var data = (0, _reduceFieldsToValues.default)(contextRef.current.fields, true);
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
        var formData = (0, _objecttoformdata.serialize)(dataToSerialize, {
            indices: true,
            nullsAsUndefineds: false
        });
        return formData;
    }, [
        contextRef
    ]);
    var reset = (0, _react.useCallback)(function() {
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
                            (0, _buildStateFromSchema.default)({
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
                        contextRef.current = _object_spread({}, _initContextState.default);
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
    var replaceState = (0, _react.useCallback)(function(state) {
        contextRef.current = _object_spread({}, _initContextState.default);
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
    (0, _react.useEffect)(function() {
        if (initialState) {
            contextRef.current = _object_spread({}, _initContextState.default);
            dispatchFields({
                type: "REPLACE_STATE",
                state: initialState
            });
        }
    }, [
        initialState,
        dispatchFields
    ]);
    (0, _react.useEffect)(function() {
        if (initialData) {
            contextRef.current = _object_spread({}, _initContextState.default);
            var builtState = (0, _buildInitialState.default)(initialData);
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
    (0, _useThrottledEffect.default)(function() {
        refreshCookie();
    }, 15000, [
        fields
    ]);
    (0, _react.useEffect)(function() {
        contextRef.current = _object_spread({}, contextRef.current); // triggers rerender of all components that subscribe to form
        setModified(false);
    }, [
        locale
    ]);
    var classes = [
        className,
        baseClass
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("form", {
        noValidate: true,
        onSubmit: function(e) {
            return contextRef.current.submit({}, e);
        },
        method: method,
        action: action,
        className: classes,
        ref: formRef
    }, /*#__PURE__*/ _react.default.createElement(_context.FormContext.Provider, {
        value: contextRef.current
    }, /*#__PURE__*/ _react.default.createElement(_context.FormWatchContext.Provider, {
        value: _object_spread({
            fields: fields
        }, contextRef.current)
    }, /*#__PURE__*/ _react.default.createElement(_context.SubmittedContext.Provider, {
        value: submitted
    }, /*#__PURE__*/ _react.default.createElement(_context.ProcessingContext.Provider, {
        value: processing
    }, /*#__PURE__*/ _react.default.createElement(_context.ModifiedContext.Provider, {
        value: modified
    }, /*#__PURE__*/ _react.default.createElement(_context.FormFieldsContext.Provider, {
        value: fieldsReducer
    }, /*#__PURE__*/ _react.default.createElement(_WatchFormErrors.WatchFormErrors, {
        buildRowErrors: buildRowErrors
    }), children)))))));
};
var _default = Form;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L25vLW5vbmludGVyYWN0aXZlLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGlzRGVlcEVxdWFsIGZyb20gJ2RlZXAtZXF1YWwnO1xuaW1wb3J0IHsgc2VyaWFsaXplIH0gZnJvbSAnb2JqZWN0LXRvLWZvcm1kYXRhJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQXV0aCc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi8uLi8uLi9hcGknO1xuaW1wb3J0IHVzZVRocm90dGxlZEVmZmVjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaHJvdHRsZWRFZmZlY3QnO1xuaW1wb3J0IHsgZmllbGRSZWR1Y2VyIH0gZnJvbSAnLi9maWVsZFJlZHVjZXInO1xuaW1wb3J0IGluaXRDb250ZXh0U3RhdGUgZnJvbSAnLi9pbml0Q29udGV4dFN0YXRlJztcbmltcG9ydCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyBmcm9tICcuL3JlZHVjZUZpZWxkc1RvVmFsdWVzJztcbmltcG9ydCBnZXRTaWJsaW5nRGF0YUZ1bmMgZnJvbSAnLi9nZXRTaWJsaW5nRGF0YSc7XG5pbXBvcnQgZ2V0RGF0YUJ5UGF0aEZ1bmMgZnJvbSAnLi9nZXREYXRhQnlQYXRoJztcbmltcG9ydCB3YWl0IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy93YWl0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgYnVpbGRJbml0aWFsU3RhdGUgZnJvbSAnLi9idWlsZEluaXRpYWxTdGF0ZSc7XG5pbXBvcnQgZXJyb3JNZXNzYWdlcyBmcm9tICcuL2Vycm9yTWVzc2FnZXMnO1xuaW1wb3J0IHsgQ29udGV4dCwgRmllbGRzLCBDb250ZXh0IGFzIEZvcm1Db250ZXh0VHlwZSwgR2V0RGF0YUJ5UGF0aCwgUHJvcHMsIFJvdywgU3VibWl0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgU3VibWl0dGVkQ29udGV4dCwgUHJvY2Vzc2luZ0NvbnRleHQsIE1vZGlmaWVkQ29udGV4dCwgRm9ybUNvbnRleHQsIEZvcm1GaWVsZHNDb250ZXh0LCBGb3JtV2F0Y2hDb250ZXh0IH0gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCBidWlsZFN0YXRlRnJvbVNjaGVtYSBmcm9tICcuL2J1aWxkU3RhdGVGcm9tU2NoZW1hJztcbmltcG9ydCB7IHVzZU9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9PcGVyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgeyBXYXRjaEZvcm1FcnJvcnMgfSBmcm9tICcuL1dhdGNoRm9ybUVycm9ycyc7XG5pbXBvcnQgeyBzcGxpdFBhdGhCeUFycmF5RmllbGRzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3NwbGl0UGF0aEJ5QXJyYXlGaWVsZHMnO1xuaW1wb3J0IHsgc2V0c0FyZUVxdWFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3NldHNBcmVFcXVhbCc7XG5pbXBvcnQgeyBidWlsZEZpZWxkU2NoZW1hTWFwIH0gZnJvbSAnLi9idWlsZEZpZWxkU2NoZW1hTWFwJztcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2lzTnVtYmVyJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Zvcm0nO1xuXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGRpc2FibGVkLFxuICAgIG9uU3VibWl0LFxuICAgIG1ldGhvZCxcbiAgICBhY3Rpb24sXG4gICAgaGFuZGxlUmVzcG9uc2UsXG4gICAgb25TdWNjZXNzLFxuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzTmFtZSxcbiAgICByZWRpcmVjdCxcbiAgICBkaXNhYmxlU3VjY2Vzc1N0YXR1cyxcbiAgICBpbml0aWFsU3RhdGUsIC8vIGZ1bGx5IGZvcm1lZCBpbml0aWFsIGZpZWxkIHN0YXRlXG4gICAgaW5pdGlhbERhdGEsIC8vIHZhbHVlcyBvbmx5LCBwYXRocyBhcmUgcmVxdWlyZWQgYXMga2V5IC0gZm9ybSBzaG91bGQgYnVpbGQgaW5pdGlhbCBzdGF0ZSBhcyBjb252ZW5pZW5jZVxuICAgIHdhaXRGb3JBdXRvY29tcGxldGUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgeyByZWZyZXNoQ29va2llLCB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgaWQsIGdldERvY1ByZWZlcmVuY2VzLCBjb2xsZWN0aW9uLCBnbG9iYWwgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCBvcGVyYXRpb24gPSB1c2VPcGVyYXRpb24oKTtcblxuICBjb25zdCBbbW9kaWZpZWQsIHNldE1vZGlmaWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Byb2Nlc3NpbmcsIHNldFByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9ybWF0dGVkSW5pdGlhbERhdGEsIHNldEZvcm1hdHRlZEluaXRpYWxEYXRhXSA9IHVzZVN0YXRlKGJ1aWxkSW5pdGlhbFN0YXRlKGluaXRpYWxEYXRhKSk7XG5cbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKHt9IGFzIEZvcm1Db250ZXh0VHlwZSk7XG5cbiAgbGV0IGluaXRpYWxGaWVsZFN0YXRlID0ge307XG5cbiAgaWYgKGZvcm1hdHRlZEluaXRpYWxEYXRhKSBpbml0aWFsRmllbGRTdGF0ZSA9IGZvcm1hdHRlZEluaXRpYWxEYXRhO1xuICBpZiAoaW5pdGlhbFN0YXRlKSBpbml0aWFsRmllbGRTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICBjb25zdCBmaWVsZHNSZWR1Y2VyID0gdXNlUmVkdWNlcihmaWVsZFJlZHVjZXIsIHt9LCAoKSA9PiBpbml0aWFsRmllbGRTdGF0ZSk7XG4gIGNvbnN0IFtmaWVsZHMsIGRpc3BhdGNoRmllbGRzXSA9IGZpZWxkc1JlZHVjZXI7XG5cbiAgY29udGV4dFJlZi5jdXJyZW50LmZpZWxkcyA9IGZpZWxkcztcbiAgY29udGV4dFJlZi5jdXJyZW50LmRpc3BhdGNoRmllbGRzID0gZGlzcGF0Y2hGaWVsZHM7XG5cbiAgLy8gQnVpbGQgYSBjdXJyZW50IHNldCBvZiBjaGlsZCBlcnJvcnMgZm9yIGFsbCByb3dzIGluIGZvcm0gc3RhdGVcbiAgY29uc3QgYnVpbGRSb3dFcnJvcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdGaWVsZFJvd3M6IHsgW3BhdGg6IHN0cmluZ106IFJvd1tdIH0gPSB7fTtcbiAgICBjb25zdCBuZXdGaWVsZFJvd3M6IHsgW3BhdGg6IHN0cmluZ106IFJvd1tdIH0gPSB7fTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGZpZWxkcykuZm9yRWFjaCgoW3BhdGgsIGZpZWxkXSkgPT4ge1xuICAgICAgY29uc3QgcGF0aFNlZ21lbnRzID0gc3BsaXRQYXRoQnlBcnJheUZpZWxkcyhwYXRoKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoU2VnbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgZmllbGRQYXRoID0gcGF0aFNlZ21lbnRzLnNsaWNlKDAsIGkgKyAxKS5qb2luKCcuJyk7XG4gICAgICAgIGNvbnN0IGZvcm1GaWVsZCA9IGZpZWxkcz8uW2ZpZWxkUGF0aF07XG5cbiAgICAgICAgLy8gSXMgdGhpcyBhbiBhcnJheSBvciBibG9ja3MgZmllbGQ/XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZvcm1GaWVsZD8ucm93cykpIHtcbiAgICAgICAgICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBleGlzdGluZyByb3cgc3RhdGVcbiAgICAgICAgICBleGlzdGluZ0ZpZWxkUm93c1tmaWVsZFBhdGhdID0gZm9ybUZpZWxkLnJvd3M7XG5cbiAgICAgICAgICAvLyBBIG5ldyByb3cgc3RhdGUgd2lsbCBiZSB1c2VkIHRvIGNvbXBhcmVcbiAgICAgICAgICAvLyBhZ2FpbnN0IHRoZSBvbGQgc3RhdGUgbGF0ZXIsXG4gICAgICAgICAgLy8gdG8gc2VlIGlmIHdlIG5lZWQgdG8gZGlzcGF0Y2ggYW4gdXBkYXRlXG4gICAgICAgICAgaWYgKCFuZXdGaWVsZFJvd3NbZmllbGRQYXRoXSkge1xuICAgICAgICAgICAgbmV3RmllbGRSb3dzW2ZpZWxkUGF0aF0gPSBmb3JtRmllbGQucm93cy5tYXAoKGV4aXN0aW5nUm93KSA9PiAoe1xuICAgICAgICAgICAgICAuLi5leGlzdGluZ1JvdyxcbiAgICAgICAgICAgICAgY2hpbGRFcnJvclBhdGhzOiBuZXcgU2V0KCksXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXRoU2VnbWVudHNbaSArIDFdO1xuICAgICAgICAgIGNvbnN0IGNoaWxkRmllbGRQYXRoID0gcGF0aFNlZ21lbnRzLnNsaWNlKGkgKyAxKS5qb2luKCcuJyk7XG5cbiAgICAgICAgICBpZiAoZmllbGQudmFsaWQgPT09IGZhbHNlICYmIGNoaWxkRmllbGRQYXRoKSB7XG4gICAgICAgICAgICBuZXdGaWVsZFJvd3NbZmllbGRQYXRoXVtyb3dJbmRleF0uY2hpbGRFcnJvclBhdGhzLmFkZChgJHtmaWVsZFBhdGh9LiR7Y2hpbGRGaWVsZFBhdGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBOb3cgbG9vcCBvdmVyIGFsbCBmaWVsZHMgd2l0aCByb3dzIC1cbiAgICAvLyBpZiBhbnl0aGluZyBjaGFuZ2VkLCBkaXNwYXRjaCBhbiB1cGRhdGUgZm9yIHRoZSBmaWVsZFxuICAgIC8vIHdpdGggdGhlIG5ldyByb3cgc3RhdGVcbiAgICBPYmplY3QuZW50cmllcyhuZXdGaWVsZFJvd3MpLmZvckVhY2goKFtwYXRoLCBuZXdSb3dzXSkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVNYXRjaGVzID0gbmV3Um93cy5ldmVyeSgobmV3Um93LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nUm93RXJyb3JQYXRocyA9IGV4aXN0aW5nRmllbGRSb3dzW3BhdGhdW2ldPy5jaGlsZEVycm9yUGF0aHM7XG4gICAgICAgIHJldHVybiBzZXRzQXJlRXF1YWwobmV3Um93LmNoaWxkRXJyb3JQYXRocywgZXhpc3RpbmdSb3dFcnJvclBhdGhzKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXN0YXRlTWF0Y2hlcykge1xuICAgICAgICBkaXNwYXRjaEZpZWxkcyh7XG4gICAgICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICAgICAgcGF0aCxcbiAgICAgICAgICByb3dzOiBuZXdSb3dzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW2ZpZWxkcywgZGlzcGF0Y2hGaWVsZHNdKTtcblxuICBjb25zdCB2YWxpZGF0ZUZvcm0gPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRTdGF0ZSA9IHt9O1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBjb25zdCBkYXRhID0gY29udGV4dFJlZi5jdXJyZW50LmdldERhdGEoKTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25Qcm9taXNlcyA9IE9iamVjdC5lbnRyaWVzKGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMpLm1hcChhc3luYyAoW3BhdGgsIGZpZWxkXSkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVkRmllbGQgPSB7XG4gICAgICAgIC4uLmZpZWxkLFxuICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChmaWVsZC5wYXNzZXNDb25kaXRpb24gIT09IGZhbHNlKSB7XG4gICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0OiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAodHlwZW9mIGZpZWxkLnZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IGZpZWxkLnZhbGlkYXRlKGZpZWxkLnZhbHVlLCB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgc2libGluZ0RhdGE6IGNvbnRleHRSZWYuY3VycmVudC5nZXRTaWJsaW5nRGF0YShwYXRoKSxcbiAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgIHQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdmFsaWRhdGVkRmllbGQuZXJyb3JNZXNzYWdlID0gdmFsaWRhdGlvblJlc3VsdDtcbiAgICAgICAgICB2YWxpZGF0ZWRGaWVsZC52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YWxpZGF0ZWRGaWVsZFN0YXRlW3BhdGhdID0gdmFsaWRhdGVkRmllbGQ7XG4gICAgfSk7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbCh2YWxpZGF0aW9uUHJvbWlzZXMpO1xuXG4gICAgaWYgKCFpc0RlZXBFcXVhbChjb250ZXh0UmVmLmN1cnJlbnQuZmllbGRzLCB2YWxpZGF0ZWRGaWVsZFN0YXRlKSkge1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVQTEFDRV9TVEFURScsIHN0YXRlOiB2YWxpZGF0ZWRGaWVsZFN0YXRlIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9LCBbY29udGV4dFJlZiwgaWQsIHVzZXIsIG9wZXJhdGlvbiwgdCwgZGlzcGF0Y2hGaWVsZHNdKTtcblxuICBjb25zdCBzdWJtaXQgPSB1c2VDYWxsYmFjayhhc3luYyAob3B0aW9uczogU3VibWl0T3B0aW9ucyA9IHt9LCBlKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgb3ZlcnJpZGVzID0ge30sXG4gICAgICBhY3Rpb246IGFjdGlvblRvVXNlID0gYWN0aW9uLFxuICAgICAgbWV0aG9kOiBtZXRob2RUb1VzZSA9IG1ldGhvZCxcbiAgICAgIHNraXBWYWxpZGF0aW9uLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc2V0UHJvY2Vzc2luZyh0cnVlKTtcblxuICAgIGlmICh3YWl0Rm9yQXV0b2NvbXBsZXRlKSBhd2FpdCB3YWl0KDEwMCk7XG5cbiAgICBjb25zdCBpc1ZhbGlkID0gc2tpcFZhbGlkYXRpb24gPyB0cnVlIDogYXdhaXQgY29udGV4dFJlZi5jdXJyZW50LnZhbGlkYXRlRm9ybSgpO1xuICAgIGNvbnRleHRSZWYuY3VycmVudC5idWlsZFJvd0Vycm9ycygpO1xuXG4gICAgaWYgKCFza2lwVmFsaWRhdGlvbikgc2V0U3VibWl0dGVkKHRydWUpO1xuXG4gICAgLy8gSWYgbm90IHZhbGlkLCBwcmV2ZW50IHN1Ym1pc3Npb25cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRvYXN0LmVycm9yKHQoJ2Vycm9yOmNvcnJlY3RJbnZhbGlkRmllbGRzJykpO1xuICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBzdWJtaXQgaGFuZGxlciBjb21lcyB0aHJvdWdoIHZpYSBwcm9wcywgcnVuIHRoYXRcbiAgICBpZiAob25TdWJtaXQpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIC4uLnJlZHVjZUZpZWxkc1RvVmFsdWVzKGZpZWxkcywgdHJ1ZSksXG4gICAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICAgIH07XG5cbiAgICAgIG9uU3VibWl0KGZpZWxkcywgZGF0YSk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybURhdGEgPSBjb250ZXh0UmVmLmN1cnJlbnQuY3JlYXRlRm9ybURhdGEob3ZlcnJpZGVzKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0c1ttZXRob2RUb1VzZS50b0xvd2VyQ2FzZSgpXShhY3Rpb25Ub1VzZSwge1xuICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHNldE1vZGlmaWVkKGZhbHNlKTtcblxuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVSZXNwb25zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBoYW5kbGVSZXNwb25zZShyZXMpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFByb2Nlc3NpbmcoZmFsc2UpO1xuXG4gICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICBjb25zdCBpc0pTT04gPSBjb250ZW50VHlwZSAmJiBjb250ZW50VHlwZS5pbmRleE9mKCdhcHBsaWNhdGlvbi9qc29uJykgIT09IC0xO1xuXG4gICAgICBsZXQganNvbjogYW55ID0ge307XG5cbiAgICAgIGlmIChpc0pTT04pIGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgICBpZiAocmVzLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb25TdWNjZXNzID09PSAnZnVuY3Rpb24nKSBvblN1Y2Nlc3MoanNvbik7XG5cbiAgICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSB7XG4gICAgICAgICAgICBwYXRobmFtZTogcmVkaXJlY3QsXG4gICAgICAgICAgICBzdGF0ZToge30sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gJ29iamVjdCcgJiYganNvbi5tZXNzYWdlICYmICFkaXNhYmxlU3VjY2Vzc1N0YXR1cykge1xuICAgICAgICAgICAgZGVzdGluYXRpb24uc3RhdGUgPSB7XG4gICAgICAgICAgICAgIHN0YXR1czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGpzb24ubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoaXN0b3J5LnB1c2goZGVzdGluYXRpb24pO1xuICAgICAgICB9IGVsc2UgaWYgKCFkaXNhYmxlU3VjY2Vzc1N0YXR1cykge1xuICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoanNvbi5tZXNzYWdlIHx8IHQoJ3N1Ym1pc3Npb25TdWNjZXNzZnVsJyksIHsgYXV0b0Nsb3NlOiAzMDAwIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmNvbnRleHRSZWYuY3VycmVudCB9OyAvLyB0cmlnZ2VycyByZXJlbmRlciBvZiBhbGwgY29tcG9uZW50cyB0aGF0IHN1YnNjcmliZSB0byBmb3JtXG5cbiAgICAgICAgaWYgKGpzb24ubWVzc2FnZSkge1xuICAgICAgICAgIHRvYXN0LmVycm9yKGpzb24ubWVzc2FnZSk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uLmVycm9ycykpIHtcbiAgICAgICAgICBjb25zdCBbZmllbGRFcnJvcnMsIG5vbkZpZWxkRXJyb3JzXSA9IGpzb24uZXJyb3JzLnJlZHVjZShcbiAgICAgICAgICAgIChbZmllbGRFcnJzLCBub25GaWVsZEVycnNdLCBlcnIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3RmllbGRFcnJzID0gW107XG4gICAgICAgICAgICAgIGNvbnN0IG5ld05vbkZpZWxkRXJycyA9IFtdO1xuXG4gICAgICAgICAgICAgIGlmIChlcnI/Lm1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBuZXdOb25GaWVsZEVycnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXJyPy5kYXRhKSkge1xuICAgICAgICAgICAgICAgIGVyci5kYXRhLmZvckVhY2goKGRhdGFFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGFFcnJvcj8uZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmllbGRFcnJzLnB1c2goZGF0YUVycm9yKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld05vbkZpZWxkRXJycy5wdXNoKGRhdGFFcnJvcik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC4uLmZpZWxkRXJycyxcbiAgICAgICAgICAgICAgICAgIC4uLm5ld0ZpZWxkRXJycyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC4uLm5vbkZpZWxkRXJycyxcbiAgICAgICAgICAgICAgICAgIC4uLm5ld05vbkZpZWxkRXJycyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtbXSwgW11dLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBmaWVsZEVycm9ycy5mb3JFYWNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoRmllbGRzKHtcbiAgICAgICAgICAgICAgdHlwZTogJ1VQREFURScsXG4gICAgICAgICAgICAgIC4uLihjb250ZXh0UmVmLmN1cnJlbnQ/LmZpZWxkcz8uW2Vyci5maWVsZF0gfHwge30pLFxuICAgICAgICAgICAgICB2YWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UsXG4gICAgICAgICAgICAgIHBhdGg6IGVyci5maWVsZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbm9uRmllbGRFcnJvcnMuZm9yRWFjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihlcnIubWVzc2FnZSB8fCB0KCdlcnJvcjp1bmtub3duJykpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yTWVzc2FnZXNbcmVzLnN0YXR1c10gfHwgdCgnZXJyb3I6dW5rbm93bicpO1xuXG4gICAgICAgIHRvYXN0LmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0UHJvY2Vzc2luZyhmYWxzZSk7XG5cbiAgICAgIHRvYXN0LmVycm9yKGVycik7XG4gICAgfVxuICB9LCBbXG4gICAgYWN0aW9uLFxuICAgIGRpc2FibGVTdWNjZXNzU3RhdHVzLFxuICAgIGRpc2FibGVkLFxuICAgIGRpc3BhdGNoRmllbGRzLFxuICAgIGZpZWxkcyxcbiAgICBoYW5kbGVSZXNwb25zZSxcbiAgICBoaXN0b3J5LFxuICAgIG1ldGhvZCxcbiAgICBvblN1Ym1pdCxcbiAgICBvblN1Y2Nlc3MsXG4gICAgcmVkaXJlY3QsXG4gICAgdCxcbiAgICBpMThuLFxuICAgIHdhaXRGb3JBdXRvY29tcGxldGUsXG4gIF0pO1xuXG4gIGNvbnN0IHRyYXZlcnNlUm93Q29uZmlncyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh7IHBhdGhQcmVmaXgsIHBhdGgsIGZpZWxkQ29uZmlnIH06IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmllbGRDb25maWc6IEZpZWxkW11cbiAgICBwYXRoUHJlZml4Pzogc3RyaW5nLFxuICB9KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gZmllbGRDb25maWc7XG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gc3BsaXRQYXRoQnlBcnJheUZpZWxkcyhwYXRoKTtcbiAgICBjb25zdCBjb25maWdNYXAgPSBidWlsZEZpZWxkU2NoZW1hTWFwKGNvbmZpZyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhTZWdtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcGF0aFNlZ21lbnQgPSBwYXRoU2VnbWVudHNbaV07XG5cbiAgICAgIGlmIChpc051bWJlcihwYXRoU2VnbWVudCkpIHtcbiAgICAgICAgY29uc3Qgcm93SW5kZXggPSBwYXJzZUludChwYXRoU2VnbWVudCwgMTApO1xuICAgICAgICBjb25zdCBwYXJlbnRGaWVsZFBhdGggPSBwYXRoU2VnbWVudHMuc2xpY2UoMCwgaSkuam9pbignLicpO1xuICAgICAgICBjb25zdCByZW1haW5pbmdQYXRoID0gcGF0aFNlZ21lbnRzLnNsaWNlKGkgKyAxKS5qb2luKCcuJyk7XG4gICAgICAgIGNvbnN0IGFycmF5RmllbGRQYXRoID0gcGF0aFByZWZpeCA/IGAke3BhdGhQcmVmaXh9LiR7cGFyZW50RmllbGRQYXRofWAgOiBwYXJlbnRGaWVsZFBhdGg7XG4gICAgICAgIGNvbnN0IHBhcmVudEFycmF5RmllbGQgPSBjb250ZXh0UmVmLmN1cnJlbnQuZ2V0RmllbGQoYXJyYXlGaWVsZFBhdGgpO1xuICAgICAgICBjb25zdCByb3dGaWVsZCA9IHBhcmVudEFycmF5RmllbGQucm93c1tyb3dJbmRleF07XG5cbiAgICAgICAgaWYgKHJvd0ZpZWxkLmJsb2NrVHlwZSkge1xuICAgICAgICAgIGNvbnN0IGJsb2NrQ29uZmlnID0gY29uZmlnTWFwLmdldChgJHtwYXJlbnRGaWVsZFBhdGh9LiR7cm93RmllbGQuYmxvY2tUeXBlfWApO1xuICAgICAgICAgIGlmIChibG9ja0NvbmZpZykge1xuICAgICAgICAgICAgcmV0dXJuIHRyYXZlcnNlUm93Q29uZmlncyh7XG4gICAgICAgICAgICAgIHBhdGhQcmVmaXg6IGAke2FycmF5RmllbGRQYXRofS4ke3Jvd0luZGV4fWAsXG4gICAgICAgICAgICAgIHBhdGg6IHJlbWFpbmluZ1BhdGgsXG4gICAgICAgICAgICAgIGZpZWxkQ29uZmlnOiBibG9ja0NvbmZpZyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQmxvY2sgY29uZmlnIG5vdCBmb3VuZCBmb3IgJHtyb3dGaWVsZC5ibG9ja1R5cGV9IGF0IHBhdGggJHtwYXRofWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cmF2ZXJzZVJvd0NvbmZpZ3Moe1xuICAgICAgICAgICAgcGF0aFByZWZpeDogYCR7YXJyYXlGaWVsZFBhdGh9LiR7cm93SW5kZXh9YCxcbiAgICAgICAgICAgIHBhdGg6IHJlbWFpbmluZ1BhdGgsXG4gICAgICAgICAgICBmaWVsZENvbmZpZzogY29uZmlnTWFwLmdldChwYXJlbnRGaWVsZFBhdGgpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdldFJvd0NvbmZpZ0J5UGF0aCA9IFJlYWN0LnVzZUNhbGxiYWNrKCh7IHBhdGgsIGJsb2NrVHlwZSB9OiB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGJsb2NrVHlwZT86IHN0cmluZ1xuICB9KSA9PiB7XG4gICAgY29uc3Qgcm93Q29uZmlnID0gdHJhdmVyc2VSb3dDb25maWdzKHsgcGF0aCwgZmllbGRDb25maWc6IGNvbGxlY3Rpb24/LmZpZWxkcyB8fCBnbG9iYWw/LmZpZWxkcyB9KTtcbiAgICBjb25zdCByb3dGaWVsZENvbmZpZ3MgPSBidWlsZEZpZWxkU2NoZW1hTWFwKHJvd0NvbmZpZyk7XG4gICAgY29uc3QgcGF0aFNlZ21lbnRzID0gc3BsaXRQYXRoQnlBcnJheUZpZWxkcyhwYXRoKTtcbiAgICBjb25zdCBmaWVsZEtleSA9IHBhdGhTZWdtZW50cy5hdCgtMSk7XG4gICAgcmV0dXJuIHJvd0ZpZWxkQ29uZmlncy5nZXQoYmxvY2tUeXBlID8gYCR7ZmllbGRLZXl9LiR7YmxvY2tUeXBlfWAgOiBmaWVsZEtleSk7XG4gIH0sIFt0cmF2ZXJzZVJvd0NvbmZpZ3MsIGNvbGxlY3Rpb24/LmZpZWxkcywgZ2xvYmFsPy5maWVsZHNdKTtcblxuICAvLyBBcnJheS9CbG9jayByb3cgbWFuaXB1bGF0aW9uXG4gIGNvbnN0IGFkZEZpZWxkUm93OiBDb250ZXh0WydhZGRGaWVsZFJvdyddID0gdXNlQ2FsbGJhY2soYXN5bmMgKHsgcGF0aCwgcm93SW5kZXgsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IGdldFJvd0NvbmZpZ0J5UGF0aCh7XG4gICAgICBwYXRoLFxuICAgICAgYmxvY2tUeXBlOiBkYXRhPy5ibG9ja1R5cGUsXG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGRDb25maWcpIHtcbiAgICAgIGNvbnN0IHN1YkZpZWxkU3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hOiBmaWVsZENvbmZpZywgZGF0YSwgcHJlZmVyZW5jZXMsIG9wZXJhdGlvbiwgaWQsIHVzZXIsIGxvY2FsZSwgdCB9KTtcbiAgICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ0FERF9ST1cnLCByb3dJbmRleDogcm93SW5kZXggLSAxLCBwYXRoLCBibG9ja1R5cGU6IGRhdGE/LmJsb2NrVHlwZSwgc3ViRmllbGRTdGF0ZSB9KTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaEZpZWxkcywgZ2V0RG9jUHJlZmVyZW5jZXMsIGlkLCB1c2VyLCBvcGVyYXRpb24sIGxvY2FsZSwgdCwgZ2V0Um93Q29uZmlnQnlQYXRoXSk7XG5cbiAgY29uc3QgcmVtb3ZlRmllbGRSb3c6IENvbnRleHRbJ3JlbW92ZUZpZWxkUm93J10gPSB1c2VDYWxsYmFjayhhc3luYyAoeyBwYXRoLCByb3dJbmRleCB9KSA9PiB7XG4gICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVNT1ZFX1JPVycsIHJvd0luZGV4LCBwYXRoIH0pO1xuICB9LCBbZGlzcGF0Y2hGaWVsZHNdKTtcblxuICBjb25zdCByZXBsYWNlRmllbGRSb3c6IENvbnRleHRbJ3JlcGxhY2VGaWVsZFJvdyddID0gdXNlQ2FsbGJhY2soYXN5bmMgKHsgcGF0aCwgcm93SW5kZXgsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IHByZWZlcmVuY2VzID0gYXdhaXQgZ2V0RG9jUHJlZmVyZW5jZXMoKTtcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IGdldFJvd0NvbmZpZ0J5UGF0aCh7XG4gICAgICBwYXRoLFxuICAgICAgYmxvY2tUeXBlOiBkYXRhPy5ibG9ja1R5cGUsXG4gICAgfSk7XG5cbiAgICBpZiAoZmllbGRDb25maWcpIHtcbiAgICAgIGNvbnN0IHN1YkZpZWxkU3RhdGUgPSBhd2FpdCBidWlsZFN0YXRlRnJvbVNjaGVtYSh7IGZpZWxkU2NoZW1hOiBmaWVsZENvbmZpZywgZGF0YSwgcHJlZmVyZW5jZXMsIG9wZXJhdGlvbiwgaWQsIHVzZXIsIGxvY2FsZSwgdCB9KTtcbiAgICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFUExBQ0VfUk9XJywgcm93SW5kZXg6IHJvd0luZGV4IC0gMSwgcGF0aCwgYmxvY2tUeXBlOiBkYXRhPy5ibG9ja1R5cGUsIHN1YkZpZWxkU3RhdGUgfSk7XG4gICAgfVxuICB9LCBbZGlzcGF0Y2hGaWVsZHMsIGdldERvY1ByZWZlcmVuY2VzLCBpZCwgdXNlciwgb3BlcmF0aW9uLCBsb2NhbGUsIHQsIGdldFJvd0NvbmZpZ0J5UGF0aF0pO1xuXG4gIGNvbnN0IGdldEZpZWxkcyA9IHVzZUNhbGxiYWNrKCgpID0+IGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMsIFtjb250ZXh0UmVmXSk7XG4gIGNvbnN0IGdldEZpZWxkID0gdXNlQ2FsbGJhY2soKHBhdGg6IHN0cmluZykgPT4gY29udGV4dFJlZi5jdXJyZW50LmZpZWxkc1twYXRoXSwgW2NvbnRleHRSZWZdKTtcbiAgY29uc3QgZ2V0RGF0YSA9IHVzZUNhbGxiYWNrKCgpID0+IHJlZHVjZUZpZWxkc1RvVmFsdWVzKGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMsIHRydWUpLCBbY29udGV4dFJlZl0pO1xuICBjb25zdCBnZXRTaWJsaW5nRGF0YSA9IHVzZUNhbGxiYWNrKChwYXRoOiBzdHJpbmcpID0+IGdldFNpYmxpbmdEYXRhRnVuYyhjb250ZXh0UmVmLmN1cnJlbnQuZmllbGRzLCBwYXRoKSwgW2NvbnRleHRSZWZdKTtcbiAgY29uc3QgZ2V0RGF0YUJ5UGF0aCA9IHVzZUNhbGxiYWNrPEdldERhdGFCeVBhdGg+KChwYXRoOiBzdHJpbmcpID0+IGdldERhdGFCeVBhdGhGdW5jKGNvbnRleHRSZWYuY3VycmVudC5maWVsZHMsIHBhdGgpLCBbY29udGV4dFJlZl0pO1xuXG4gIGNvbnN0IGNyZWF0ZUZvcm1EYXRhID0gdXNlQ2FsbGJhY2soKG92ZXJyaWRlczogYW55ID0ge30pID0+IHtcbiAgICBjb25zdCBkYXRhID0gcmVkdWNlRmllbGRzVG9WYWx1ZXMoY29udGV4dFJlZi5jdXJyZW50LmZpZWxkcywgdHJ1ZSk7XG5cbiAgICBjb25zdCBmaWxlID0gZGF0YT8uZmlsZTtcblxuICAgIGlmIChmaWxlKSB7XG4gICAgICBkZWxldGUgZGF0YS5maWxlO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGFXaXRoT3ZlcnJpZGVzID0ge1xuICAgICAgLi4uZGF0YSxcbiAgICAgIC4uLm92ZXJyaWRlcyxcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YVRvU2VyaWFsaXplID0ge1xuICAgICAgX3BheWxvYWQ6IEpTT04uc3RyaW5naWZ5KGRhdGFXaXRoT3ZlcnJpZGVzKSxcbiAgICAgIGZpbGUsXG4gICAgfTtcblxuICAgIC8vIG51bGxBc1VuZGVmaW5lZHMgaXMgaW1wb3J0YW50IHRvIGFsbG93IHVwbG9hZHMgYW5kIHJlbGF0aW9uc2hpcCBmaWVsZHMgdG8gY2xlYXIgdGhlbXNlbHZlc1xuICAgIGNvbnN0IGZvcm1EYXRhID0gc2VyaWFsaXplKGRhdGFUb1NlcmlhbGl6ZSwgeyBpbmRpY2VzOiB0cnVlLCBudWxsc0FzVW5kZWZpbmVkczogZmFsc2UgfSk7XG4gICAgcmV0dXJuIGZvcm1EYXRhO1xuICB9LCBbY29udGV4dFJlZl0pO1xuXG4gIGNvbnN0IHJlc2V0ID0gdXNlQ2FsbGJhY2soYXN5bmMgKGZpZWxkU2NoZW1hOiBGaWVsZFtdLCBkYXRhOiB1bmtub3duKSA9PiB7XG4gICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXREb2NQcmVmZXJlbmNlcygpO1xuICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgYnVpbGRTdGF0ZUZyb21TY2hlbWEoeyBmaWVsZFNjaGVtYSwgcHJlZmVyZW5jZXMsIGRhdGEsIHVzZXIsIGlkLCBvcGVyYXRpb24sIGxvY2FsZSwgdCB9KTtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmluaXRDb250ZXh0U3RhdGUgfSBhcyBGb3JtQ29udGV4dFR5cGU7XG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpO1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFUExBQ0VfU1RBVEUnLCBzdGF0ZSB9KTtcbiAgfSwgW2lkLCB1c2VyLCBvcGVyYXRpb24sIGxvY2FsZSwgdCwgZGlzcGF0Y2hGaWVsZHMsIGdldERvY1ByZWZlcmVuY2VzXSk7XG5cbiAgY29uc3QgcmVwbGFjZVN0YXRlID0gdXNlQ2FsbGJhY2soKHN0YXRlOiBGaWVsZHMpID0+IHtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmluaXRDb250ZXh0U3RhdGUgfSBhcyBGb3JtQ29udGV4dFR5cGU7XG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpO1xuICAgIGRpc3BhdGNoRmllbGRzKHsgdHlwZTogJ1JFUExBQ0VfU1RBVEUnLCBzdGF0ZSB9KTtcbiAgfSwgW2Rpc3BhdGNoRmllbGRzXSk7XG5cbiAgY29udGV4dFJlZi5jdXJyZW50LnN1Ym1pdCA9IHN1Ym1pdDtcbiAgY29udGV4dFJlZi5jdXJyZW50LmdldEZpZWxkcyA9IGdldEZpZWxkcztcbiAgY29udGV4dFJlZi5jdXJyZW50LmdldEZpZWxkID0gZ2V0RmllbGQ7XG4gIGNvbnRleHRSZWYuY3VycmVudC5nZXREYXRhID0gZ2V0RGF0YTtcbiAgY29udGV4dFJlZi5jdXJyZW50LmdldFNpYmxpbmdEYXRhID0gZ2V0U2libGluZ0RhdGE7XG4gIGNvbnRleHRSZWYuY3VycmVudC5nZXREYXRhQnlQYXRoID0gZ2V0RGF0YUJ5UGF0aDtcbiAgY29udGV4dFJlZi5jdXJyZW50LnZhbGlkYXRlRm9ybSA9IHZhbGlkYXRlRm9ybTtcbiAgY29udGV4dFJlZi5jdXJyZW50LmNyZWF0ZUZvcm1EYXRhID0gY3JlYXRlRm9ybURhdGE7XG4gIGNvbnRleHRSZWYuY3VycmVudC5zZXRNb2RpZmllZCA9IHNldE1vZGlmaWVkO1xuICBjb250ZXh0UmVmLmN1cnJlbnQuc2V0UHJvY2Vzc2luZyA9IHNldFByb2Nlc3Npbmc7XG4gIGNvbnRleHRSZWYuY3VycmVudC5zZXRTdWJtaXR0ZWQgPSBzZXRTdWJtaXR0ZWQ7XG4gIGNvbnRleHRSZWYuY3VycmVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICBjb250ZXh0UmVmLmN1cnJlbnQuZm9ybVJlZiA9IGZvcm1SZWY7XG4gIGNvbnRleHRSZWYuY3VycmVudC5yZXNldCA9IHJlc2V0O1xuICBjb250ZXh0UmVmLmN1cnJlbnQucmVwbGFjZVN0YXRlID0gcmVwbGFjZVN0YXRlO1xuICBjb250ZXh0UmVmLmN1cnJlbnQuYnVpbGRSb3dFcnJvcnMgPSBidWlsZFJvd0Vycm9ycztcbiAgY29udGV4dFJlZi5jdXJyZW50LmFkZEZpZWxkUm93ID0gYWRkRmllbGRSb3c7XG4gIGNvbnRleHRSZWYuY3VycmVudC5yZW1vdmVGaWVsZFJvdyA9IHJlbW92ZUZpZWxkUm93O1xuICBjb250ZXh0UmVmLmN1cnJlbnQucmVwbGFjZUZpZWxkUm93ID0gcmVwbGFjZUZpZWxkUm93O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgICAgY29udGV4dFJlZi5jdXJyZW50ID0geyAuLi5pbml0Q29udGV4dFN0YXRlIH0gYXMgRm9ybUNvbnRleHRUeXBlO1xuICAgICAgZGlzcGF0Y2hGaWVsZHMoeyB0eXBlOiAnUkVQTEFDRV9TVEFURScsIHN0YXRlOiBpbml0aWFsU3RhdGUgfSk7XG4gICAgfVxuICB9LCBbaW5pdGlhbFN0YXRlLCBkaXNwYXRjaEZpZWxkc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmluaXRDb250ZXh0U3RhdGUgfSBhcyBGb3JtQ29udGV4dFR5cGU7XG4gICAgICBjb25zdCBidWlsdFN0YXRlID0gYnVpbGRJbml0aWFsU3RhdGUoaW5pdGlhbERhdGEpO1xuICAgICAgc2V0Rm9ybWF0dGVkSW5pdGlhbERhdGEoYnVpbHRTdGF0ZSk7XG4gICAgICBkaXNwYXRjaEZpZWxkcyh7IHR5cGU6ICdSRVBMQUNFX1NUQVRFJywgc3RhdGU6IGJ1aWx0U3RhdGUgfSk7XG4gICAgfVxuICB9LCBbaW5pdGlhbERhdGEsIGRpc3BhdGNoRmllbGRzXSk7XG5cbiAgdXNlVGhyb3R0bGVkRWZmZWN0KCgpID0+IHtcbiAgICByZWZyZXNoQ29va2llKCk7XG4gIH0sIDE1MDAwLCBbZmllbGRzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb250ZXh0UmVmLmN1cnJlbnQgPSB7IC4uLmNvbnRleHRSZWYuY3VycmVudCB9OyAvLyB0cmlnZ2VycyByZXJlbmRlciBvZiBhbGwgY29tcG9uZW50cyB0aGF0IHN1YnNjcmliZSB0byBmb3JtXG4gICAgc2V0TW9kaWZpZWQoZmFsc2UpO1xuICB9LCBbbG9jYWxlXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBjbGFzc05hbWUsXG4gICAgYmFzZUNsYXNzLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybVxuICAgICAgbm9WYWxpZGF0ZVxuICAgICAgb25TdWJtaXQ9eyhlKSA9PiBjb250ZXh0UmVmLmN1cnJlbnQuc3VibWl0KHt9LCBlKX1cbiAgICAgIG1ldGhvZD17bWV0aG9kfVxuICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgPlxuICAgICAgPEZvcm1Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0UmVmLmN1cnJlbnR9PlxuICAgICAgICA8Rm9ybVdhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICAuLi5jb250ZXh0UmVmLmN1cnJlbnQsXG4gICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8U3VibWl0dGVkQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3VibWl0dGVkfT5cbiAgICAgICAgICAgIDxQcm9jZXNzaW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cHJvY2Vzc2luZ30+XG4gICAgICAgICAgICAgIDxNb2RpZmllZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21vZGlmaWVkfT5cbiAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2ZpZWxkc1JlZHVjZXJ9PlxuICAgICAgICAgICAgICAgICAgPFdhdGNoRm9ybUVycm9ycyBidWlsZFJvd0Vycm9ycz17YnVpbGRSb3dFcnJvcnN9IC8+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9Gb3JtRmllbGRzQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgICAgICAgPC9Nb2RpZmllZENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgICAgICA8L1Byb2Nlc3NpbmdDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIDwvU3VibWl0dGVkQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9Gb3JtV2F0Y2hDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9Gb3JtQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkZvcm0iLCJwcm9wcyIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJkaXNhYmxlZCIsIm9uU3VibWl0IiwibWV0aG9kIiwiYWN0aW9uIiwiaGFuZGxlUmVzcG9uc2UiLCJvblN1Y2Nlc3MiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInJlZGlyZWN0IiwiZGlzYWJsZVN1Y2Nlc3NTdGF0dXMiLCJpbml0aWFsU3RhdGUiLCJpbml0aWFsRGF0YSIsIndhaXRGb3JBdXRvY29tcGxldGUiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZUxvY2FsZSIsImNvZGUiLCJsb2NhbGUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwidXNlQXV0aCIsInJlZnJlc2hDb29raWUiLCJ1c2VyIiwidXNlRG9jdW1lbnRJbmZvIiwiaWQiLCJnZXREb2NQcmVmZXJlbmNlcyIsIm9wZXJhdGlvbiIsInVzZU9wZXJhdGlvbiIsInVzZVN0YXRlIiwibW9kaWZpZWQiLCJzZXRNb2RpZmllZCIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiYnVpbGRJbml0aWFsU3RhdGUiLCJmb3JtYXR0ZWRJbml0aWFsRGF0YSIsInNldEZvcm1hdHRlZEluaXRpYWxEYXRhIiwiZm9ybVJlZiIsInVzZVJlZiIsImNvbnRleHRSZWYiLCJpbml0aWFsRmllbGRTdGF0ZSIsImZpZWxkc1JlZHVjZXIiLCJ1c2VSZWR1Y2VyIiwiZmllbGRSZWR1Y2VyIiwiZmllbGRzIiwiZGlzcGF0Y2hGaWVsZHMiLCJjdXJyZW50IiwiYnVpbGRSb3dFcnJvcnMiLCJ1c2VDYWxsYmFjayIsImV4aXN0aW5nRmllbGRSb3dzIiwibmV3RmllbGRSb3dzIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJwYXRoIiwiZmllbGQiLCJwYXRoU2VnbWVudHMiLCJzcGxpdFBhdGhCeUFycmF5RmllbGRzIiwiaSIsImxlbmd0aCIsImZvcm1GaWVsZCIsImZpZWxkUGF0aCIsInNsaWNlIiwiam9pbiIsIkFycmF5IiwiaXNBcnJheSIsInJvd3MiLCJtYXAiLCJleGlzdGluZ1JvdyIsImNoaWxkRXJyb3JQYXRocyIsIlNldCIsInJvd0luZGV4IiwiY2hpbGRGaWVsZFBhdGgiLCJ2YWxpZCIsImFkZCIsIm5ld1Jvd3MiLCJzdGF0ZU1hdGNoZXMiLCJldmVyeSIsIm5ld1JvdyIsImV4aXN0aW5nUm93RXJyb3JQYXRocyIsInNldHNBcmVFcXVhbCIsInR5cGUiLCJ2YWxpZGF0ZUZvcm0iLCJ2YWxpZGF0ZWRGaWVsZFN0YXRlIiwiaXNWYWxpZCIsImRhdGEiLCJ2YWxpZGF0aW9uUHJvbWlzZXMiLCJnZXREYXRhIiwidmFsaWRhdGVkRmllbGQiLCJ2YWxpZGF0aW9uUmVzdWx0IiwicGFzc2VzQ29uZGl0aW9uIiwidmFsaWRhdGUiLCJ2YWx1ZSIsInNpYmxpbmdEYXRhIiwiZ2V0U2libGluZ0RhdGEiLCJlcnJvck1lc3NhZ2UiLCJQcm9taXNlIiwiYWxsIiwiaXNEZWVwRXF1YWwiLCJzdGF0ZSIsInN1Ym1pdCIsIm9wdGlvbnMiLCJlIiwib3ZlcnJpZGVzIiwiYWN0aW9uVG9Vc2UiLCJtZXRob2RUb1VzZSIsInNraXBWYWxpZGF0aW9uIiwiZm9ybURhdGEiLCJyZXMiLCJjb250ZW50VHlwZSIsImlzSlNPTiIsImpzb24iLCJkZXN0aW5hdGlvbiIsImZpZWxkRXJyb3JzIiwibm9uRmllbGRFcnJvcnMiLCJtZXNzYWdlIiwiZXJyIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3YWl0IiwidG9hc3QiLCJlcnJvciIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwiY3JlYXRlRm9ybURhdGEiLCJyZXF1ZXN0cyIsInRvTG93ZXJDYXNlIiwiYm9keSIsImhlYWRlcnMiLCJsYW5ndWFnZSIsImdldCIsImluZGV4T2YiLCJzdGF0dXMiLCJwYXRobmFtZSIsInB1c2giLCJzdWNjZXNzIiwiYXV0b0Nsb3NlIiwiZXJyb3JzIiwicmVkdWNlIiwiZmllbGRFcnJzIiwibm9uRmllbGRFcnJzIiwibmV3RmllbGRFcnJzIiwibmV3Tm9uRmllbGRFcnJzIiwiZGF0YUVycm9yIiwiZXJyb3JNZXNzYWdlcyIsInRyYXZlcnNlUm93Q29uZmlncyIsIlJlYWN0IiwicGF0aFByZWZpeCIsImZpZWxkQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnTWFwIiwiYnVpbGRGaWVsZFNjaGVtYU1hcCIsInBhdGhTZWdtZW50IiwiaXNOdW1iZXIiLCJwYXJzZUludCIsInBhcmVudEZpZWxkUGF0aCIsInJlbWFpbmluZ1BhdGgiLCJhcnJheUZpZWxkUGF0aCIsInBhcmVudEFycmF5RmllbGQiLCJnZXRGaWVsZCIsInJvd0ZpZWxkIiwiYmxvY2tUeXBlIiwiYmxvY2tDb25maWciLCJFcnJvciIsImdldFJvd0NvbmZpZ0J5UGF0aCIsInJvd0NvbmZpZyIsInJvd0ZpZWxkQ29uZmlncyIsImZpZWxkS2V5IiwiYXQiLCJhZGRGaWVsZFJvdyIsInByZWZlcmVuY2VzIiwic3ViRmllbGRTdGF0ZSIsImJ1aWxkU3RhdGVGcm9tU2NoZW1hIiwiZmllbGRTY2hlbWEiLCJyZW1vdmVGaWVsZFJvdyIsInJlcGxhY2VGaWVsZFJvdyIsImdldEZpZWxkcyIsImdldFNpYmxpbmdEYXRhRnVuYyIsImdldERhdGFCeVBhdGgiLCJnZXREYXRhQnlQYXRoRnVuYyIsImZpbGUiLCJkYXRhV2l0aE92ZXJyaWRlcyIsImRhdGFUb1NlcmlhbGl6ZSIsIl9wYXlsb2FkIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlcmlhbGl6ZSIsImluZGljZXMiLCJudWxsc0FzVW5kZWZpbmVkcyIsInJlc2V0IiwiaW5pdENvbnRleHRTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsInVzZUVmZmVjdCIsImJ1aWx0U3RhdGUiLCJ1c2VUaHJvdHRsZWRFZmZlY3QiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImZvcm0iLCJub1ZhbGlkYXRlIiwicmVmIiwiRm9ybUNvbnRleHQiLCJQcm92aWRlciIsIkZvcm1XYXRjaENvbnRleHQiLCJTdWJtaXR0ZWRDb250ZXh0IiwiUHJvY2Vzc2luZ0NvbnRleHQiLCJNb2RpZmllZENvbnRleHQiLCJGb3JtRmllbGRzQ29udGV4dCIsIldhdGNoRm9ybUVycm9ycyJdLCJtYXBwaW5ncyI6IkFBQUEsa0VBQWtFOzs7OytCQThqQmxFOzs7ZUFBQTs7OzZEQTNqQk87Z0VBQ2lCO2dDQUNFOzhCQUNDOzZCQUNMOzRCQUNTO29CQUNQO3NCQUNFOzRCQUNNO21CQUNQO3lFQUNNOzRCQUNGO3VFQUNBOzJFQUNJO3FFQUNGO29FQUNEOzJEQUNiO3dFQUVhO29FQUNKO3VCQUU2RjsyRUFDdEY7aUNBQ0o7K0JBQ0c7c0NBQ087NEJBQ1Y7bUNBQ087d0JBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNQSxZQUFZO0FBRWxCLElBQU1DLE9BQXdCLFNBQUNDO1FBNlhMQyxhQUFvQkM7SUE1WDVDLElBQ0VDLFdBYUVILE1BYkZHLFVBQ0FDLFdBWUVKLE1BWkZJLFVBQ0FDLFNBV0VMLE1BWEZLLFFBQ0FDLFNBVUVOLE1BVkZNLFFBQ0FDLGlCQVNFUCxNQVRGTyxnQkFDQUMsWUFRRVIsTUFSRlEsV0FDQUMsV0FPRVQsTUFQRlMsVUFDQUMsWUFNRVYsTUFORlUsV0FDQUMsV0FLRVgsTUFMRlcsVUFDQUMs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