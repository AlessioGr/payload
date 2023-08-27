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
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../utilities/Auth";
import { useFormProcessing, useFormSubmitted, useForm, useFormFields } from "../Form/context";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import { useOperation } from "../../utilities/OperationProvider";
import useThrottledEffect from "../../../hooks/useThrottledEffect";
/**
 * Get and set the value of a form field.
 *
 * @see https://payloadcms.com/docs/admin/hooks#usefield
 */ var useField = function(options) {
    var _field, _field1, _field2, _field3, _field4, _field5, _field6;
    var path = options.path, validate = options.validate, _options_disableFormData = options.disableFormData, disableFormData = _options_disableFormData === void 0 ? false : _options_disableFormData, condition = options.condition, hasRows = options.hasRows;
    var submitted = useFormSubmitted();
    var processing = useFormProcessing();
    var user = useAuth().user;
    var id = useDocumentInfo().id;
    var operation = useOperation();
    var field = useFormFields(function(param) {
        var _param = _sliced_to_array(param, 1), fields = _param[0];
        return fields[path];
    });
    var t = useTranslation().t;
    var dispatchField = useFormFields(function(param) {
        var _param = _sliced_to_array(param, 2), _ = _param[0], dispatch = _param[1];
        return dispatch;
    });
    var _useForm = useForm(), getData = _useForm.getData, getSiblingData = _useForm.getSiblingData, setModified = _useForm.setModified;
    var value = (_field = field) === null || _field === void 0 ? void 0 : _field.value;
    var initialValue = (_field1 = field) === null || _field1 === void 0 ? void 0 : _field1.initialValue;
    var valid = typeof ((_field2 = field) === null || _field2 === void 0 ? void 0 : _field2.valid) === "boolean" ? field.valid : true;
    var showError = valid === false && submitted;
    // Method to return from `useField`, used to
    // update field values from field component(s)
    var setValue = useCallback(function(e) {
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
    var result = useMemo(function() {
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
    useThrottledEffect(function() {
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
export default useField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL3VzZUZpZWxkL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlRm9ybVByb2Nlc3NpbmcsIHVzZUZvcm1TdWJtaXR0ZWQsIHVzZUZvcm0sIHVzZUZvcm1GaWVsZHMgfSBmcm9tICcuLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgT3B0aW9ucywgRmllbGRUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IHVzZU9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9PcGVyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgdXNlVGhyb3R0bGVkRWZmZWN0IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRocm90dGxlZEVmZmVjdCc7XG5pbXBvcnQgdHlwZSB7IFVQREFURSB9IGZyb20gJy4uL0Zvcm0vdHlwZXMnO1xuXG4vKipcbiAqIEdldCBhbmQgc2V0IHRoZSB2YWx1ZSBvZiBhIGZvcm0gZmllbGQuXG4gKlxuICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvYWRtaW4vaG9va3MjdXNlZmllbGRcbiAqL1xuY29uc3QgdXNlRmllbGQgPSA8VCwgPihvcHRpb25zOiBPcHRpb25zKTogRmllbGRUeXBlPFQ+ID0+IHtcbiAgY29uc3Qge1xuICAgIHBhdGgsXG4gICAgdmFsaWRhdGUsXG4gICAgZGlzYWJsZUZvcm1EYXRhID0gZmFsc2UsXG4gICAgY29uZGl0aW9uLFxuICAgIGhhc1Jvd3MsXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHN1Ym1pdHRlZCA9IHVzZUZvcm1TdWJtaXR0ZWQoKTtcbiAgY29uc3QgcHJvY2Vzc2luZyA9IHVzZUZvcm1Qcm9jZXNzaW5nKCk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IGlkIH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3Qgb3BlcmF0aW9uID0gdXNlT3BlcmF0aW9uKCk7XG4gIGNvbnN0IGZpZWxkID0gdXNlRm9ybUZpZWxkcygoW2ZpZWxkc10pID0+IGZpZWxkc1twYXRoXSk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgZGlzcGF0Y2hGaWVsZCA9IHVzZUZvcm1GaWVsZHMoKFtfLCBkaXNwYXRjaF0pID0+IGRpc3BhdGNoKTtcblxuICBjb25zdCB7IGdldERhdGEsIGdldFNpYmxpbmdEYXRhLCBzZXRNb2RpZmllZCB9ID0gdXNlRm9ybSgpO1xuXG4gIGNvbnN0IHZhbHVlID0gZmllbGQ/LnZhbHVlIGFzIFQ7XG4gIGNvbnN0IGluaXRpYWxWYWx1ZSA9IGZpZWxkPy5pbml0aWFsVmFsdWUgYXMgVDtcbiAgY29uc3QgdmFsaWQgPSB0eXBlb2YgZmllbGQ/LnZhbGlkID09PSAnYm9vbGVhbicgPyBmaWVsZC52YWxpZCA6IHRydWU7XG4gIGNvbnN0IHNob3dFcnJvciA9IHZhbGlkID09PSBmYWxzZSAmJiBzdWJtaXR0ZWQ7XG5cbiAgLy8gTWV0aG9kIHRvIHJldHVybiBmcm9tIGB1c2VGaWVsZGAsIHVzZWQgdG9cbiAgLy8gdXBkYXRlIGZpZWxkIHZhbHVlcyBmcm9tIGZpZWxkIGNvbXBvbmVudChzKVxuICBjb25zdCBzZXRWYWx1ZSA9IHVzZUNhbGxiYWNrKChlLCBkaXNhYmxlTW9kaWZ5aW5nRm9ybSA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgdmFsID0gKGUgJiYgZS50YXJnZXQpID8gZS50YXJnZXQudmFsdWUgOiBlO1xuXG4gICAgaWYgKCFkaXNhYmxlTW9kaWZ5aW5nRm9ybSkge1xuICAgICAgaWYgKHR5cGVvZiBzZXRNb2RpZmllZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBVcGRhdGUgbW9kaWZpZWQgc3RhdGUgYWZ0ZXIgZmllbGQgdmFsdWUgY29tZXMgYmFja1xuICAgICAgICAvLyB0byBhdm9pZCBjdXJzb3IganVtcCBjYXVzZWQgYnkgc3RhdGUgdmFsdWUgLyBET00gbWlzbWF0Y2hcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0TW9kaWZpZWQodHJ1ZSk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNwYXRjaEZpZWxkKHtcbiAgICAgIHR5cGU6ICdVUERBVEUnLFxuICAgICAgcGF0aCxcbiAgICAgIHZhbHVlOiB2YWwsXG4gICAgICBkaXNhYmxlRm9ybURhdGE6IGRpc2FibGVGb3JtRGF0YSB8fCAoaGFzUm93cyAmJiB2YWwgPiAwKSxcbiAgICB9KTtcbiAgfSwgW1xuICAgIHNldE1vZGlmaWVkLFxuICAgIHBhdGgsXG4gICAgZGlzcGF0Y2hGaWVsZCxcbiAgICBkaXNhYmxlRm9ybURhdGEsXG4gICAgaGFzUm93cyxcbiAgXSk7XG5cbiAgLy8gU3RvcmUgcmVzdWx0IGZyb20gaG9vayBhcyByZWZcbiAgLy8gdG8gcHJldmVudCB1bm5lY2Vzc2FyeSByZXJlbmRlcnNcbiAgY29uc3QgcmVzdWx0OiBGaWVsZFR5cGU8VD4gPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgc2hvd0Vycm9yLFxuICAgIGVycm9yTWVzc2FnZTogZmllbGQ/LmVycm9yTWVzc2FnZSxcbiAgICB2YWx1ZSxcbiAgICBmb3JtU3VibWl0dGVkOiBzdWJtaXR0ZWQsXG4gICAgZm9ybVByb2Nlc3Npbmc6IHByb2Nlc3NpbmcsXG4gICAgc2V0VmFsdWUsXG4gICAgaW5pdGlhbFZhbHVlLFxuICAgIHJvd3M6IGZpZWxkPy5yb3dzLFxuICAgIHZhbGlkOiBmaWVsZD8udmFsaWQsXG4gIH0pLCBbXG4gICAgZmllbGQ/LmVycm9yTWVzc2FnZSxcbiAgICBmaWVsZD8ucm93cyxcbiAgICBmaWVsZD8udmFsaWQsXG4gICAgcHJvY2Vzc2luZyxcbiAgICBzZXRWYWx1ZSxcbiAgICBzaG93RXJyb3IsXG4gICAgc3VibWl0dGVkLFxuICAgIHZhbHVlLFxuICAgIGluaXRpYWxWYWx1ZSxcbiAgXSk7XG5cbiAgLy8gVGhyb3R0bGUgdGhlIHZhbGlkYXRlIGZ1bmN0aW9uXG4gIHVzZVRocm90dGxlZEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdmFsaWRhdGVGaWVsZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbjogVVBEQVRFID0ge1xuICAgICAgICB0eXBlOiAnVVBEQVRFJyxcbiAgICAgICAgcGF0aCxcbiAgICAgICAgZGlzYWJsZUZvcm1EYXRhOiBkaXNhYmxlRm9ybURhdGEgfHwgKGhhc1Jvd3MgPyB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlID4gMCA6IGZhbHNlKSxcbiAgICAgICAgdmFsaWRhdGUsXG4gICAgICAgIGNvbmRpdGlvbixcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgICAgIHJvd3M6IGZpZWxkPy5yb3dzLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgdmFsaWRhdGVPcHRpb25zID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgdXNlcixcbiAgICAgICAgZGF0YTogZ2V0RGF0YSgpLFxuICAgICAgICBzaWJsaW5nRGF0YTogZ2V0U2libGluZ0RhdGEocGF0aCksXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgdCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB0eXBlb2YgdmFsaWRhdGUgPT09ICdmdW5jdGlvbicgPyBhd2FpdCB2YWxpZGF0ZSh2YWx1ZSwgdmFsaWRhdGVPcHRpb25zKSA6IHRydWU7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsaWRhdGlvblJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWN0aW9uLmVycm9yTWVzc2FnZSA9IHZhbGlkYXRpb25SZXN1bHQ7XG4gICAgICAgIGFjdGlvbi52YWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9uLnZhbGlkID0gdmFsaWRhdGlvblJlc3VsdDtcbiAgICAgICAgYWN0aW9uLmVycm9yTWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBkaXNwYXRjaEZpZWxkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpc3BhdGNoRmllbGQoYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFsaWRhdGVGaWVsZCgpO1xuICB9LCAxNTAsIFtcbiAgICB2YWx1ZSxcbiAgICBjb25kaXRpb24sXG4gICAgZGlzYWJsZUZvcm1EYXRhLFxuICAgIGRpc3BhdGNoRmllbGQsXG4gICAgZ2V0RGF0YSxcbiAgICBnZXRTaWJsaW5nRGF0YSxcbiAgICBpZCxcbiAgICBvcGVyYXRpb24sXG4gICAgcGF0aCxcbiAgICB1c2VyLFxuICAgIHZhbGlkYXRlLFxuICAgIGZpZWxkPy5yb3dzLFxuICBdKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRmllbGQ7XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VBdXRoIiwidXNlRm9ybVByb2Nlc3NpbmciLCJ1c2VGb3JtU3VibWl0dGVkIiwidXNlRm9ybSIsInVzZUZvcm1GaWVsZHMiLCJ1c2VEb2N1bWVudEluZm8iLCJ1c2VPcGVyYXRpb24iLCJ1c2VUaHJvdHRsZWRFZmZlY3QiLCJ1c2VGaWVsZCIsIm9wdGlvbnMiLCJmaWVsZCIsInBhdGgiLCJ2YWxpZGF0ZSIsImRpc2FibGVGb3JtRGF0YSIsImNvbmRpdGlvbiIsImhhc1Jvd3MiLCJzdWJtaXR0ZWQiLCJwcm9jZXNzaW5nIiwidXNlciIsImlkIiwib3BlcmF0aW9uIiwiZmllbGRzIiwidCIsImRpc3BhdGNoRmllbGQiLCJfIiwiZGlzcGF0Y2giLCJnZXREYXRhIiwiZ2V0U2libGluZ0RhdGEiLCJzZXRNb2RpZmllZCIsInZhbHVlIiwiaW5pdGlhbFZhbHVlIiwidmFsaWQiLCJzaG93RXJyb3IiLCJzZXRWYWx1ZSIsImUiLCJkaXNhYmxlTW9kaWZ5aW5nRm9ybSIsInZhbCIsInRhcmdldCIsInNldFRpbWVvdXQiLCJ0eXBlIiwicmVzdWx0IiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdHRlZCIsImZvcm1Qcm9jZXNzaW5nIiwicm93cyIsInZhbGlkYXRlRmllbGQiLCJhY3Rpb24iLCJ2YWxpZGF0ZU9wdGlvbnMiLCJ2YWxpZGF0aW9uUmVzdWx0IiwidW5kZWZpbmVkIiwiZGF0YSIsInNpYmxpbmdEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVcsRUFBRUMsT0FBTyxRQUFRLFFBQVE7QUFDN0MsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxPQUFPLFFBQVEsdUJBQXVCO0FBQy9DLFNBQVNDLGlCQUFpQixFQUFFQyxnQkFBZ0IsRUFBRUMsT0FBTyxFQUFFQyxhQUFhLFFBQVEsa0JBQWtCO0FBRTlGLFNBQVNDLGVBQWUsUUFBUSwrQkFBK0I7QUFDL0QsU0FBU0MsWUFBWSxRQUFRLG9DQUFvQztBQUNqRSxPQUFPQyx3QkFBd0Isb0NBQW9DO0FBR25FOzs7O0NBSUMsR0FDRCxJQUFNQyxXQUFXLFNBQU1DO1FBb0JQQyxRQUNPQSxTQUNBQSxTQTZDbkJBLFNBQ0FBLFNBQ0FB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