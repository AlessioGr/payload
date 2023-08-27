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
var _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../RenderFields"));
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../withCondition"));
var _Collapsible = require("../../../elements/Collapsible");
var _Preferences = require("../../../utilities/Preferences");
var _DocumentInfo = require("../../../utilities/DocumentInfo");
var _FieldDescription = /*#__PURE__*/ _interop_require_default(require("../../FieldDescription"));
var _RowLabel = require("../../RowLabel");
var _createNestedFieldPath = require("../../Form/createNestedFieldPath");
var _WatchChildErrors = require("../../WatchChildErrors");
var _context = require("../../Form/context");
var _ErrorPill = require("../../../elements/ErrorPill");
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
var baseClass = "collapsible-field";
var CollapsibleField = function(props) {
    var label = props.label, fields = props.fields, fieldTypes = props.fieldTypes, path = props.path, permissions = props.permissions, indexPath = props.indexPath, _props_admin = props.admin, readOnly = _props_admin.readOnly, className = _props_admin.className, initCollapsed = _props_admin.initCollapsed, description = _props_admin.description;
    var _usePreferences = (0, _Preferences.usePreferences)(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var preferencesKey = (0, _DocumentInfo.useDocumentInfo)().preferencesKey;
    var _useState = _sliced_to_array((0, _react.useState)(), 2), collapsedOnMount = _useState[0], setCollapsedOnMount = _useState[1];
    var fieldPreferencesKey = "collapsible-".concat(indexPath.replace(/\./gi, "__"));
    var _useState1 = _sliced_to_array((0, _react.useState)(0), 2), errorCount = _useState1[0], setErrorCount = _useState1[1];
    var submitted = (0, _context.useFormSubmitted)();
    var onToggle = (0, _react.useCallback)(function() {
        var _ref = _async_to_generator(function(newCollapsedState) {
            var _existingPreferences, _existingPreferences_fields, _existingPreferences1, _existingPreferences2, _existingPreferences_fields1, _existingPreferences3, existingPreferences;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            getPreference(preferencesKey)
                        ];
                    case 1:
                        existingPreferences = _state.sent();
                        setPreference(preferencesKey, _object_spread({}, existingPreferences, path ? {
                            fields: _object_spread_props(_object_spread({}, ((_existingPreferences = existingPreferences) === null || _existingPreferences === void 0 ? void 0 : _existingPreferences.fields) || {}), _define_property({}, path, _object_spread_props(_object_spread({}, (_existingPreferences1 = existingPreferences) === null || _existingPreferences1 === void 0 ? void 0 : (_existingPreferences_fields = _existingPreferences1.fields) === null || _existingPreferences_fields === void 0 ? void 0 : _existingPreferences_fields[path]), {
                                collapsed: newCollapsedState
                            })))
                        } : {
                            fields: _object_spread_props(_object_spread({}, ((_existingPreferences2 = existingPreferences) === null || _existingPreferences2 === void 0 ? void 0 : _existingPreferences2.fields) || {}), _define_property({}, fieldPreferencesKey, _object_spread_props(_object_spread({}, (_existingPreferences3 = existingPreferences) === null || _existingPreferences3 === void 0 ? void 0 : (_existingPreferences_fields1 = _existingPreferences3.fields) === null || _existingPreferences_fields1 === void 0 ? void 0 : _existingPreferences_fields1[fieldPreferencesKey]), {
                                collapsed: newCollapsedState
                            })))
                        }));
                        return [
                            2
                        ];
                }
            });
        });
        return function(newCollapsedState) {
            return _ref.apply(this, arguments);
        };
    }(), [
        preferencesKey,
        fieldPreferencesKey,
        getPreference,
        setPreference,
        path
    ]);
    (0, _react.useEffect)(function() {
        var fetchInitialState = function() {
            var _ref = _async_to_generator(function() {
                var preferences, _preferences_fields_path, _preferences_fields, _preferences, _preferences_fields_fieldPreferencesKey, _preferences_fields1, _preferences1, initCollapsedFromPref;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getPreference(preferencesKey)
                            ];
                        case 1:
                            preferences = _state.sent();
                            if (preferences) {
                                ;
                                initCollapsedFromPref = path ? (_preferences = preferences) === null || _preferences === void 0 ? void 0 : (_preferences_fields = _preferences.fields) === null || _preferences_fields === void 0 ? void 0 : (_preferences_fields_path = _preferences_fields[path]) === null || _preferences_fields_path === void 0 ? void 0 : _preferences_fields_path.collapsed : (_preferences1 = preferences) === null || _preferences1 === void 0 ? void 0 : (_preferences_fields1 = _preferences1.fields) === null || _preferences_fields1 === void 0 ? void 0 : (_preferences_fields_fieldPreferencesKey = _preferences_fields1[fieldPreferencesKey]) === null || _preferences_fields_fieldPreferencesKey === void 0 ? void 0 : _preferences_fields_fieldPreferencesKey.collapsed;
                                setCollapsedOnMount(Boolean(initCollapsedFromPref));
                            } else {
                                setCollapsedOnMount(typeof initCollapsed === "boolean" ? initCollapsed : false);
                            }
                            return [
                                2
                            ];
                    }
                });
            });
            return function fetchInitialState() {
                return _ref.apply(this, arguments);
            };
        }();
        fetchInitialState();
    }, [
        getPreference,
        preferencesKey,
        fieldPreferencesKey,
        initCollapsed,
        path
    ]);
    if (typeof collapsedOnMount !== "boolean") return null;
    var fieldHasErrors = submitted && errorCount > 0;
    var classes = [
        "field-type",
        baseClass,
        className,
        fieldHasErrors ? "".concat(baseClass, "--has-error") : "".concat(baseClass, "--has-no-error")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        id: "field-".concat(fieldPreferencesKey).concat(path ? "-".concat(path.replace(/\./gi, "__")) : "")
    }, /*#__PURE__*/ _react.default.createElement(_WatchChildErrors.WatchChildErrors, {
        setErrorCount: setErrorCount,
        path: path,
        fieldSchema: fields
    }), /*#__PURE__*/ _react.default.createElement(_Collapsible.Collapsible, {
        initCollapsed: collapsedOnMount,
        className: classes,
        collapsibleStyle: errorCount > 0 ? "error" : "default",
        header: /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__row-label-wrap")
        }, /*#__PURE__*/ _react.default.createElement(_RowLabel.RowLabel, {
            path: path,
            label: label
        }), errorCount > 0 && /*#__PURE__*/ _react.default.createElement(_ErrorPill.ErrorPill, {
            count: errorCount,
            withMessage: true
        })),
        onToggle: onToggle
    }, /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        forceRender: true,
        readOnly: readOnly,
        permissions: permissions,
        fieldTypes: fieldTypes,
        indexPath: indexPath,
        fieldSchema: fields.map(function(field) {
            return _object_spread_props(_object_spread({}, field), {
                path: (0, _createNestedFieldPath.createNestedFieldPath)(path, field)
            });
        })
    })), /*#__PURE__*/ _react.default.createElement(_FieldDescription.default, {
        description: description
    }));
};
var _default = (0, _withCondition.default)(CollapsibleField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvbGxhcHNpYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4uLy4uL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZSB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0NvbGxhcHNpYmxlJztcbmltcG9ydCB7IHVzZVByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL1ByZWZlcmVuY2VzJztcbmltcG9ydCB7IERvY3VtZW50UHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9wcmVmZXJlbmNlcy90eXBlcyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgUm93TGFiZWwgfSBmcm9tICcuLi8uLi9Sb3dMYWJlbCc7XG5pbXBvcnQgeyBjcmVhdGVOZXN0ZWRGaWVsZFBhdGggfSBmcm9tICcuLi8uLi9Gb3JtL2NyZWF0ZU5lc3RlZEZpZWxkUGF0aCc7XG5pbXBvcnQgeyBXYXRjaENoaWxkRXJyb3JzIH0gZnJvbSAnLi4vLi4vV2F0Y2hDaGlsZEVycm9ycyc7XG5pbXBvcnQgeyB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IEVycm9yUGlsbCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Vycm9yUGlsbCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbGxhcHNpYmxlLWZpZWxkJztcblxuY29uc3QgQ29sbGFwc2libGVGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbCxcbiAgICBmaWVsZHMsXG4gICAgZmllbGRUeXBlcyxcbiAgICBwYXRoLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIGluZGV4UGF0aCxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpbml0Q29sbGFwc2VkLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgeyBwcmVmZXJlbmNlc0tleSB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IFtjb2xsYXBzZWRPbk1vdW50LCBzZXRDb2xsYXBzZWRPbk1vdW50XSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gIGNvbnN0IGZpZWxkUHJlZmVyZW5jZXNLZXkgPSBgY29sbGFwc2libGUtJHtpbmRleFBhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gO1xuICBjb25zdCBbZXJyb3JDb3VudCwgc2V0RXJyb3JDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc3VibWl0dGVkID0gdXNlRm9ybVN1Ym1pdHRlZCgpO1xuXG4gIGNvbnN0IG9uVG9nZ2xlID0gdXNlQ2FsbGJhY2soYXN5bmMgKG5ld0NvbGxhcHNlZFN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdQcmVmZXJlbmNlczogRG9jdW1lbnRQcmVmZXJlbmNlcyA9IGF3YWl0IGdldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXkpO1xuXG4gICAgc2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSwge1xuICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcyxcbiAgICAgIC4uLnBhdGggPyB7XG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcyB8fCB7fSxcbiAgICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcz8uW3BhdGhdLFxuICAgICAgICAgICAgY29sbGFwc2VkOiBuZXdDb2xsYXBzZWRTdGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSA6IHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzIHx8IHt9LFxuICAgICAgICAgIFtmaWVsZFByZWZlcmVuY2VzS2V5XToge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzPy5bZmllbGRQcmVmZXJlbmNlc0tleV0sXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IG5ld0NvbGxhcHNlZFN0YXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbcHJlZmVyZW5jZXNLZXksIGZpZWxkUHJlZmVyZW5jZXNLZXksIGdldFByZWZlcmVuY2UsIHNldFByZWZlcmVuY2UsIHBhdGhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW5pdGlhbFN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VzS2V5KTtcbiAgICAgIGlmIChwcmVmZXJlbmNlcykge1xuICAgICAgICBjb25zdCBpbml0Q29sbGFwc2VkRnJvbVByZWYgPSBwYXRoID8gcHJlZmVyZW5jZXM/LmZpZWxkcz8uW3BhdGhdPy5jb2xsYXBzZWQgOiBwcmVmZXJlbmNlcz8uZmllbGRzPy5bZmllbGRQcmVmZXJlbmNlc0tleV0/LmNvbGxhcHNlZDtcbiAgICAgICAgc2V0Q29sbGFwc2VkT25Nb3VudChCb29sZWFuKGluaXRDb2xsYXBzZWRGcm9tUHJlZikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q29sbGFwc2VkT25Nb3VudCh0eXBlb2YgaW5pdENvbGxhcHNlZCA9PT0gJ2Jvb2xlYW4nID8gaW5pdENvbGxhcHNlZCA6IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hJbml0aWFsU3RhdGUoKTtcbiAgfSwgW2dldFByZWZlcmVuY2UsIHByZWZlcmVuY2VzS2V5LCBmaWVsZFByZWZlcmVuY2VzS2V5LCBpbml0Q29sbGFwc2VkLCBwYXRoXSk7XG5cbiAgaWYgKHR5cGVvZiBjb2xsYXBzZWRPbk1vdW50ICE9PSAnYm9vbGVhbicpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGZpZWxkSGFzRXJyb3JzID0gc3VibWl0dGVkICYmIGVycm9yQ291bnQgPiAwO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgZmllbGRIYXNFcnJvcnMgPyBgJHtiYXNlQ2xhc3N9LS1oYXMtZXJyb3JgIDogYCR7YmFzZUNsYXNzfS0taGFzLW5vLWVycm9yYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD17YGZpZWxkLSR7ZmllbGRQcmVmZXJlbmNlc0tleX0ke3BhdGggPyBgLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWAgOiAnJ31gfT5cbiAgICAgIDxXYXRjaENoaWxkRXJyb3JzXG4gICAgICAgIHNldEVycm9yQ291bnQ9e3NldEVycm9yQ291bnR9XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZHN9XG4gICAgICAvPlxuICAgICAgPENvbGxhcHNpYmxlXG4gICAgICAgIGluaXRDb2xsYXBzZWQ9e2NvbGxhcHNlZE9uTW91bnR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgY29sbGFwc2libGVTdHlsZT17ZXJyb3JDb3VudCA+IDAgPyAnZXJyb3InIDogJ2RlZmF1bHQnfVxuICAgICAgICBoZWFkZXI9eyhcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcm93LWxhYmVsLXdyYXBgfT5cbiAgICAgICAgICAgIDxSb3dMYWJlbFxuICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9yQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgPEVycm9yUGlsbFxuICAgICAgICAgICAgICAgIGNvdW50PXtlcnJvckNvdW50fVxuICAgICAgICAgICAgICAgIHdpdGhNZXNzYWdlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBvblRvZ2dsZT17b25Ub2dnbGV9XG4gICAgICA+XG4gICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICBmb3JjZVJlbmRlclxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICBpbmRleFBhdGg9e2luZGV4UGF0aH1cbiAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRzLm1hcCgoZmllbGQpID0+ICh7XG4gICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgIHBhdGg6IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCksXG4gICAgICAgICAgfSkpfVxuICAgICAgICAvPlxuICAgICAgPC9Db2xsYXBzaWJsZT5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKENvbGxhcHNpYmxlRmllbGQpO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkNvbGxhcHNpYmxlRmllbGQiLCJwcm9wcyIsImxhYmVsIiwiZmllbGRzIiwiZmllbGRUeXBlcyIsInBhdGgiLCJwZXJtaXNzaW9ucyIsImluZGV4UGF0aCIsImFkbWluIiwicmVhZE9ubHkiLCJjbGFzc05hbWUiLCJpbml0Q29sbGFwc2VkIiwiZGVzY3JpcHRpb24iLCJ1c2VQcmVmZXJlbmNlcyIsImdldFByZWZlcmVuY2UiLCJzZXRQcmVmZXJlbmNlIiwicHJlZmVyZW5jZXNLZXkiLCJ1c2VEb2N1bWVudEluZm8iLCJ1c2VTdGF0ZSIsImNvbGxhcHNlZE9uTW91bnQiLCJzZXRDb2xsYXBzZWRPbk1vdW50IiwiZmllbGRQcmVmZXJlbmNlc0tleSIsInJlcGxhY2UiLCJlcnJvckNvdW50Iiwic2V0RXJyb3JDb3VudCIsInN1Ym1pdHRlZCIsInVzZUZvcm1TdWJtaXR0ZWQiLCJvblRvZ2dsZSIsInVzZUNhbGxiYWNrIiwibmV3Q29sbGFwc2VkU3RhdGUiLCJleGlzdGluZ1ByZWZlcmVuY2VzIiwiY29sbGFwc2VkIiwidXNlRWZmZWN0IiwiZmV0Y2hJbml0aWFsU3RhdGUiLCJwcmVmZXJlbmNlcyIsImluaXRDb2xsYXBzZWRGcm9tUHJlZiIsIkJvb2xlYW4iLCJmaWVsZEhhc0Vycm9ycyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJqb2luIiwiZGl2IiwiaWQiLCJXYXRjaENoaWxkRXJyb3JzIiwiZmllbGRTY2hlbWEiLCJDb2xsYXBzaWJsZSIsImNvbGxhcHNpYmxlU3R5bGUiLCJoZWFkZXIiLCJSb3dMYWJlbCIsIkVycm9yUGlsbCIsImNvdW50Iiwid2l0aE1lc3NhZ2UiLCJSZW5kZXJGaWVsZHMiLCJmb3JjZVJlbmRlciIsIm1hcCIsImZpZWxkIiwiY3JlYXRlTmVzdGVkRmllbGRQYXRoIiwiRmllbGREZXNjcmlwdGlvbiIsIndpdGhDb25kaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBMElBOzs7ZUFBQTs7OzZEQTFJd0Q7bUVBQy9CO29FQUNDOzJCQUVFOzJCQUNHOzRCQUVDO3VFQUNIO3dCQUNKO3FDQUNhO2dDQUNMO3VCQUNBO3lCQUNQO1FBRW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLG1CQUFvQyxTQUFDQztJQUN6QyxJQUNFQyxRQVlFRCxNQVpGQyxPQUNBQyxTQVdFRixNQVhGRSxRQUNBQyxhQVVFSCxNQVZGRyxZQUNBQyxPQVNFSixNQVRGSSxNQUNBQyxjQVFFTCxNQVJGSyxhQUNBQyxZQU9FTixNQVBGTSwwQkFPRU4sTUFORk8sT0FDRUMsd0JBQUFBLFVBQ0FDLHlCQUFBQSxXQUNBQyw2QkFBQUEsZUFDQUMsMkJBQUFBO0lBSUosSUFBeUNDLGtCQUFBQSxJQUFBQSwyQkFBYyxLQUEvQ0MsZ0JBQWlDRCxnQkFBakNDLGVBQWVDLGdCQUFrQkYsZ0JBQWxCRTtJQUN2QixJQUFNLEFBQUVDLGlCQUFtQkMsSUFBQUEsNkJBQWUsSUFBbENEO0lBQ1IsSUFBZ0RFLDZCQUFBQSxJQUFBQSxlQUFRLFNBQWpEQyxtQkFBeUNELGNBQXZCRSxzQkFBdUJGO0lBQ2hELElBQU1HLHNCQUFzQixBQUFDLGVBQThD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