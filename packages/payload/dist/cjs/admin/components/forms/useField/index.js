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
var _react = require("react");
var _reacti18next = require("react-i18next");
var _Auth = require("../../utilities/Auth");
var _context = require("../Form/context");
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _OperationProvider = require("../../utilities/OperationProvider");
var _useThrottledEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThrottledEffect"));
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
/**
 * Get and set the value of a form field.
 *
 * @see https://payloadcms.com/docs/admin/hooks#usefield
 */ var useField = function(options) {
    var _field, _field1, _field2, _field3, _field4, _field5, _field6;
    var path = options.path, validate = options.validate, _options_disableFormData = options.disableFormData, disableFormData = _options_disableFormData === void 0 ? false : _options_disableFormData, condition = options.condition, hasRows = options.hasRows;
    var submitted = (0, _context.useFormSubmitted)();
    var processing = (0, _context.useFormProcessing)();
    var user = (0, _Auth.useAuth)().user;
    var id = (0, _DocumentInfo.useDocumentInfo)().id;
    var operation = (0, _OperationProvider.useOperation)();
    var field = (0, _context.useFormFields)(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        return fields[path];
    });
    var t = (0, _reacti18next.useTranslation)().t;
    var dispatchField = (0, _context.useFormFields)(function(param) {
        var _param = _sliced_to_array(param, 2), _ = _param[0], dispatch = _param[1];
        return dispatch;
    });
    var _useForm = (0, _context.useForm)(), getData = _useForm.getData, getSiblingData = _useForm.getSiblingData, setModified = _useForm.setModified;
    var value = (_field = field) === null || _field === void 0 ? void 0 : _field.value;
    var initialValue = (_field1 = field) === null || _field1 === void 0 ? void 0 : _field1.initialValue;
    var valid = typeof ((_field2 = field) === null || _field2 === void 0 ? void 0 : _field2.valid) === "boolean" ? field.valid : true;
    var showError = valid === false && submitted;
    // Method to return from `useField`, used to
    // update field values from field component(s)
    var setValue = (0, _react.useCallback)(function(e) {
        var disableModifyingForm = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var val = e && e.target ? e.target.value : e;
        if (!disableModifyingForm) {
            if (typeof setModified === "function") {
                // Update modified state after field value comes back
                // to avoid cursor jump caused by state value / DOM mismatch
                setTimeout(function() {
                    setModified(true);
                }, 10);
            }
        }
        dispatchField({
            type: "UPDATE",
            path: path,
            value: val,
            disableFormData: disableFormData || hasRows && val > 0
        });
    }, [
        setModified,
        path,
        dispatchField,
        disableFormData,
        hasRows
    ]);
    // Store result from hook as ref
    // to prevent unnecessary rerenders
    var result = (0, _react.useMemo)(function() {
        var _field, _field1, _field2;
        return {
            showError: showError,
            errorMessage: (_field = field) === null || _field === void 0 ? void 0 : _field.errorMessage,
            value: value,
            formSubmitted: submitted,
            formProcessing: processing,
            setValue: setValue,
            initialValue: initialValue,
            rows: (_field1 = field) === null || _field1 === void 0 ? void 0 : _field1.rows,
            valid: (_field2 = field) === null || _field2 === void 0 ? void 0 : _field2.valid
        };
    }, [
        (_field3 = field) === null || _field3 === void 0 ? void 0 : _field3.errorMessage,
        (_field4 = field) === null || _field4 === void 0 ? void 0 : _field4.rows,
        (_field5 = field) === null || _field5 === void 0 ? void 0 : _field5.valid,
        processing,
        setValue,
        showError,
        submitted,
        value,
        initialValue
    ]);
    // Throttle the validate function
    (0, _useThrottledEffect.default)(function() {
        var validateField = function() {
            var _ref = _async_to_generator(function() {
                var _field, action, validateOptions, validationResult, _tmp;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            action = {
                                type: "UPDATE",
                                path: path,
                                disableFormData: disableFormData || (hasRows ? typeof value === "number" && value > 0 : false),
                                validate: validate,
                                condition: condition,
                                value: value,
                                valid: false,
                                errorMessage: undefined,
                                rows: (_field = field) === null || _field === void 0 ? void 0 : _field.rows
                            };
                            validateOptions = {
                                id: id,
                                user: user,
                                data: getData(),
                                siblingData: getSiblingData(path),
                                operation: operation,
                                t: t
                            };
                            if (!(typeof validate === "function")) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                validate(value, validateOptions)
                            ];
                        case 1:
                            _tmp = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 2:
                            _tmp = true;
                            _state.label = 3;
                        case 3:
                            validationResult = _tmp;
                            if (typeof validationResult === "string") {
                                action.errorMessage = validationResult;
                                action.valid = false;
                            } else {
                                action.valid = validationResult;
                                action.errorMessage = undefined;
                            }
                            if (typeof dispatchField === "function") {
                                dispatchField(action);
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return function validateField() {
                return _ref.apply(this, arguments);
            };
        }();
        validateField();
    }, 150, [
        value,
        condition,
        disableFormData,
        dispatchField,
        getData,
        getSiblingData,
        id,
        operation,
        path,
        user,
        validate,
        (_field6 = field) === null || _field6 === void 0 ? void 0 : _field6.rows
    ]);
    return result;
};
var _default = useField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL3VzZUZpZWxkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlRm9ybVByb2Nlc3NpbmcsIHVzZUZvcm1TdWJtaXR0ZWQsIHVzZUZvcm0sIHVzZUZvcm1GaWVsZHMgfSBmcm9tICcuLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgT3B0aW9ucywgRmllbGRUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IHVzZU9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9PcGVyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgdXNlVGhyb3R0bGVkRWZmZWN0IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRocm90dGxlZEVmZmVjdCc7XG5pbXBvcnQgdHlwZSB7IFVQREFURSB9IGZyb20gJy4uL0Zvcm0vdHlwZXMnO1xuXG4vKipcbiAqIEdldCBhbmQgc2V0IHRoZSB2YWx1ZSBvZiBhIGZvcm0gZmllbGQuXG4gKlxuICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvYWRtaW4vaG9va3MjdXNlZmllbGRcbiAqL1xuY29uc3QgdXNlRmllbGQgPSA8VCwgPihvcHRpb25zOiBPcHRpb25zKTogRmllbGRUeXBlPFQ+ID0+IHtcbiAgY29uc3Qge1xuICAgIHBhdGgsXG4gICAgdmFsaWRhdGUsXG4gICAgZGlzYWJsZUZvcm1EYXRhID0gZmFsc2UsXG4gICAgY29uZGl0aW9uLFxuICAgIGhhc1Jvd3MsXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN1Ym1pdHRlZCA9IHVzZUZvcm1TdWJtaXR0ZWQoKTtcbiAgY29uc3QgcHJvY2Vzc2luZyA9IHVzZUZvcm1Qcm9jZXNzaW5nKCk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IGlkIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3Qgb3BlcmF0aW9uID0gdXNlT3BlcmF0aW9uKCk7XG4gIGNvbnN0IGZpZWxkID0gdXNlRm9ybUZpZWxkcygoW2ZpZWxkc10pID0+IGZpZWxkc1twYXRoXSk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgZGlzcGF0Y2hGaWVsZCA9IHVzZUZvcm1GaWVsZHMoKFtfLCBkaXNwYXRjaF0pID0+IGRpc3BhdGNoKTtcblxuICBjb25zdCB7IGdldERhdGEsIGdldFNpYmxpbmdEYXRhLCBzZXRNb2RpZmllZCB9ID0gdXNlRm9ybSgpO1xuXG4gIGNvbnN0IHZhbHVlID0gZmllbGQ/LnZhbHVlIGFzIFQ7XG4gIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGZpZWxkPy5pbml0aWFsVmFsdWUgYXMgVDtcbiAgY29uc3QgdmFsaWQgPSB0eXBlb2YgZmllbGQ/LnZhbGlkID09PSAnYm9vbGVhbicgPyBmaWVsZC52YWxpZCA6IHRydWU7XG4gIGNvbnN0IHNob3dFcnJvciA9IHZhbGlkID09PSBmYWxzZSAmJiBzdWJtaXR0ZWQ7XG5cbiAgLy8gTWV0aG9kIHRvIHJldHVybiBmcm9tIGB1c2VGaWVsZGAsIHVzZWQgdG9cbiAgLy8gdXBkYXRlIGZpZWxkIHZhbHVlcyBmcm9tIGZpZWxkIGNvbXBvbmVudChzKVxuICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChlLCBkaXNhYmxlTW9kaWZ5aW5nRm9ybSA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgdmFsID0gKGUgJiYgZS50YXJnZXQpID8gZS50YXJnZXQudmFsdWUgOiBlO1xuXG4gICAgaWYgKCFkaXNhYmxlTW9kaWZ5aW5nRm9ybSkge1xuICAgICAgaWYgKHR5cGVvZiBzZXRNb2RpZmllZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVcGRhdGUgbW9kaWZpZWQgc3RhdGUgYWZ0ZXIgZmllbGQgdmFsdWUgY29tZXMgYmFja1xuICAgICAgICAvLyB0byBhdm9pZCBjdXJzb3IganVtcCBjYXVzZWQgYnkgc3RhdGUgdmFsdWUgLyBET00gbWlzbWF0Y2hcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0TW9kaWZpZWQodHJ1ZSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwYXRjaEZpZWxkKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF0aCxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICBkaXNhYmxlRm9ybURhdGE6IGRpc2FibGVGb3JtRGF0YSB8fCAoaGFzUm93cyAmJiB2YWwgPiAwKSxcbiAgICB9KTtcbiAgfSwgW1xuICAgIHNldE1vZGlmaWVkLFxuICAgIHBhdGgsXG4gICAgZGlzcGF0Y2hGaWVsZCxcbiAgICBkaXNhYmxlRm9ybURhdGEsXG4gICAgaGFzUm93cyxcbiAgXSk7XG5cbiAgLy8gU3RvcmUgcmVzdWx0IGZyb20gaG9vayBhcyByZWZcbiAgLy8gdG8gcHJldmVudCB1bm5lY2Vzc2FyeSByZXJlbmRlcnNcbiAgY29uc3QgcmVzdWx0OiBGaWVsZFR5cGU8VD4gPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgc2hvd0Vycm9yLFxuICAgIGVycm9yTWVzc2FnZTogZmllbGQ/LmVycm9yTWVzc2FnZSxcbiAgICB2YWx1ZSxcbiAgICBmb3JtU3VibWl0dGVkOiBzdWJtaXR0ZWQsXG4gICAgZm9ybVByb2Nlc3Npbmc6IHByb2Nlc3NpbmcsXG4gICAgc2V0VmFsdWUsXG4gICAgaW5pdGlhbFZhbHVlLFxuICAgIHJvd3M6IGZpZWxkPy5yb3dzLFxuICAgIHZhbGlkOiBmaWVsZD8udmFsaWQsXG4gIH0pLCBbXG4gICAgZmllbGQ/LmVycm9yTWVzc2FnZSxcbiAgICBmaWVsZD8ucm93cyxcbiAgICBmaWVsZD8udmFsaWQsXG4gICAgcHJvY2Vzc2luZyxcbiAgICBzZXRWYWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgc3VibWl0dGVkLFxuICAgIHZhbHVlLFxuICAgIGluaXRpYWxWYWx1ZSxcbiAgXSk7XG5cbiAgLy8gVGhyb3R0bGUgdGhlIHZhbGlkYXRlIGZ1bmN0aW9uXG4gIHVzZVRocm90dGxlZEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdmFsaWRhdGVGaWVsZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbjogVVBEQVRFID0ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFJyxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgZGlzYWJsZUZvcm1EYXRhOiBkaXNhYmxlRm9ybURhdGEgfHwgKGhhc1Jvd3MgPyB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlID4gMCA6IGZhbHNlKSxcbiAgICAgICAgdmFsaWRhdGUsXG4gICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgICAgIHJvd3M6IGZpZWxkPy5yb3dzLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgdmFsaWRhdGVPcHRpb25zID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgdXNlcixcbiAgICAgICAgZGF0YTogZ2V0RGF0YSgpLFxuICAgICAgICBzaWJsaW5nRGF0YTogZ2V0U2libGluZ0RhdGEocGF0aCksXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgdCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB0eXBlb2YgdmFsaWRhdGUgPT09ICdmdW5jdGlvbicgPyBhd2FpdCB2YWxpZGF0ZSh2YWx1ZSwgdmFsaWRhdGVPcHRpb25zKSA6IHRydWU7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsaWRhdGlvblJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWN0aW9uLmVycm9yTWVzc2FnZSA9IHZhbGlkYXRpb25SZXN1bHQ7XG4gICAgICAgIGFjdGlvbi52YWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9uLnZhbGlkID0gdmFsaWRhdGlvblJlc3VsdDtcbiAgICAgICAgYWN0aW9uLmVycm9yTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkaXNwYXRjaEZpZWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpc3BhdGNoRmllbGQoYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFsaWRhdGVGaWVsZCgpO1xuICB9LCAxNTAsIFtcbiAgICB2YWx1ZSxcbiAgICBjb25kaXRpb24sXG4gICAgZGlzYWJsZUZvcm1EYXRhLFxuICAgIGRpc3BhdGNoRmllbGQsXG4gICAgZ2V0RGF0YSxcbiAgICBnZXRTaWJsaW5nRGF0YSxcbiAgICBpZCxcbiAgICBvcGVyYXRpb24sXG4gICAgcGF0aCxcbiAgICB1c2VyLFxuICAgIHZhbGlkYXRlLFxuICAgIGZpZWxkPy5yb3dzLFxuICBdKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRmllbGQ7XG4iXSwibmFtZXMiOlsidXNlRmllbGQiLCJvcHRpb25zIiwiZmllbGQiLCJwYXRoIiwidmFsaWRhdGUiLCJkaXNhYmxlRm9ybURhdGEiLCJjb25kaXRpb24iLCJoYXNSb3dzIiwic3VibWl0dGVkIiwidXNlRm9ybVN1Ym1pdHRlZCIsInByb2Nlc3NpbmciLCJ1c2VGb3JtUHJvY2Vzc2luZyIsInVzZXIiLCJ1c2VBdXRoIiwiaWQiLCJ1c2VEb2N1bWVudEluZm8iLCJvcGVyYXRpb24iLCJ1c2VPcGVyYXRpb24iLCJ1c2VGb3JtRmllbGRzIiwiZmllbGRzIiwidCIsInVzZVRyYW5zbGF0aW9uIiwiZGlzcGF0Y2hGaWVsZCIsIl8iLCJkaXNwYXRjaCIsInVzZUZvcm0iLCJnZXREYXRhIiwiZ2V0U2libGluZ0RhdGEiLCJzZXRNb2RpZmllZCIsInZhbHVlIiwiaW5pdGlhbFZhbHVlIiwidmFsaWQiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsInVzZUNhbGxiYWNrIiwiZSIsImRpc2FibGVNb2RpZnlpbmdGb3JtIiwidmFsIiwidGFyZ2V0Iiwic2V0VGltZW91dCIsInR5cGUiLCJyZXN1bHQiLCJ1c2VNZW1vIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdHRlZCIsImZvcm1Qcm9jZXNzaW5nIiwicm93cyIsInVzZVRocm90dGxlZEVmZmVjdCIsInZhbGlkYXRlRmllbGQiLCJhY3Rpb24iLCJ2YWxpZGF0ZU9wdGlvbnMiLCJ2YWxpZGF0aW9uUmVzdWx0IiwidW5kZWZpbmVkIiwiZGF0YSIsInNpYmxpbmdEYXRhIl0sIm1hcHBpbmdzIjoiOzs7OytCQXVKQTs7O2VBQUE7OztxQkF2SnFDOzRCQUNOO29CQUNQO3VCQUNvRDs0QkFFNUM7aUNBQ0g7eUVBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRy9COzs7O0NBSUMsR0FDRCxJQUFNQSxXQUFXLFNBQU1DO1FBb0JQQyxRQUNPQSxTQUNBQSxTQTZDbkJBLFNBQ0FBLFNBQ0FBLFNBNkRBQTtJQWpJRixJQUNFQyxPQUtFRixRQUxGRSxNQUNBQyxXQUlFSCxRQUpGRyxxQ0FJRUgsUUFIRkksaUJBQUFBLHdEQUFrQixrQ0FDbEJDLFlBRUVMLFFBRkZLLFdBQ0FDLFVBQ0VOLFFBREZNO0lBR0YsSUFBTUMsWUFBWUMsSUFBQUEseUJBQWdCO0lBQ2xDLElBQU1DLGFBQWFDLElBQUFBLDBCQUFp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