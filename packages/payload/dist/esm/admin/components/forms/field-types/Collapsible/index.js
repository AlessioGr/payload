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
import React, { useCallback, useEffect, useState } from "react";
import RenderFields from "../../RenderFields";
import withCondition from "../../withCondition";
import { Collapsible } from "../../../elements/Collapsible";
import { usePreferences } from "../../../utilities/Preferences";
import { useDocumentInfo } from "../../../utilities/DocumentInfo";
import FieldDescription from "../../FieldDescription";
import { RowLabel } from "../../RowLabel";
import { createNestedFieldPath } from "../../Form/createNestedFieldPath";
import { WatchChildErrors } from "../../WatchChildErrors";
import { useFormSubmitted } from "../../Form/context";
import { ErrorPill } from "../../../elements/ErrorPill";
import "./index.scss";
var baseClass = "collapsible-field";
var CollapsibleField = function(props) {
    var label = props.label, fields = props.fields, fieldTypes = props.fieldTypes, path = props.path, permissions = props.permissions, indexPath = props.indexPath, _props_admin = props.admin, readOnly = _props_admin.readOnly, className = _props_admin.className, initCollapsed = _props_admin.initCollapsed, description = _props_admin.description;
    var _usePreferences = usePreferences(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var preferencesKey = useDocumentInfo().preferencesKey;
    var _useState = _sliced_to_array(useState(), 2), collapsedOnMount = _useState[0], setCollapsedOnMount = _useState[1];
    var fieldPreferencesKey = "collapsible-".concat(indexPath.replace(/\./gi, "__"));
    var _useState1 = _sliced_to_array(useState(0), 2), errorCount = _useState1[0], setErrorCount = _useState1[1];
    var submitted = useFormSubmitted();
    var onToggle = useCallback(function() {
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
    useEffect(function() {
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
    return /*#__PURE__*/ React.createElement("div", {
        id: "field-".concat(fieldPreferencesKey).concat(path ? "-".concat(path.replace(/\./gi, "__")) : "")
    }, /*#__PURE__*/ React.createElement(WatchChildErrors, {
        setErrorCount: setErrorCount,
        path: path,
        fieldSchema: fields
    }), /*#__PURE__*/ React.createElement(Collapsible, {
        initCollapsed: collapsedOnMount,
        className: classes,
        collapsibleStyle: errorCount > 0 ? "error" : "default",
        header: /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__row-label-wrap")
        }, /*#__PURE__*/ React.createElement(RowLabel, {
            path: path,
            label: label
        }), errorCount > 0 && /*#__PURE__*/ React.createElement(ErrorPill, {
            count: errorCount,
            withMessage: true
        })),
        onToggle: onToggle
    }, /*#__PURE__*/ React.createElement(RenderFields, {
        forceRender: true,
        readOnly: readOnly,
        permissions: permissions,
        fieldTypes: fieldTypes,
        indexPath: indexPath,
        fieldSchema: fields.map(function(field) {
            return _object_spread_props(_object_spread({}, field), {
                path: createNestedFieldPath(path, field)
            });
        })
    })), /*#__PURE__*/ React.createElement(FieldDescription, {
        description: description
    }));
};
export default withCondition(CollapsibleField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NvbGxhcHNpYmxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4uLy4uL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZSB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0NvbGxhcHNpYmxlJztcbmltcG9ydCB7IHVzZVByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL1ByZWZlcmVuY2VzJztcbmltcG9ydCB7IERvY3VtZW50UHJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9wcmVmZXJlbmNlcy90eXBlcyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCBGaWVsZERlc2NyaXB0aW9uIGZyb20gJy4uLy4uL0ZpZWxkRGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgUm93TGFiZWwgfSBmcm9tICcuLi8uLi9Sb3dMYWJlbCc7XG5pbXBvcnQgeyBjcmVhdGVOZXN0ZWRGaWVsZFBhdGggfSBmcm9tICcuLi8uLi9Gb3JtL2NyZWF0ZU5lc3RlZEZpZWxkUGF0aCc7XG5pbXBvcnQgeyBXYXRjaENoaWxkRXJyb3JzIH0gZnJvbSAnLi4vLi4vV2F0Y2hDaGlsZEVycm9ycyc7XG5pbXBvcnQgeyB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IEVycm9yUGlsbCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Vycm9yUGlsbCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbGxhcHNpYmxlLWZpZWxkJztcblxuY29uc3QgQ29sbGFwc2libGVGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbCxcbiAgICBmaWVsZHMsXG4gICAgZmllbGRUeXBlcyxcbiAgICBwYXRoLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIGluZGV4UGF0aCxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHksXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpbml0Q29sbGFwc2VkLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgeyBwcmVmZXJlbmNlc0tleSB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IFtjb2xsYXBzZWRPbk1vdW50LCBzZXRDb2xsYXBzZWRPbk1vdW50XSA9IHVzZVN0YXRlPGJvb2xlYW4+KCk7XG4gIGNvbnN0IGZpZWxkUHJlZmVyZW5jZXNLZXkgPSBgY29sbGFwc2libGUtJHtpbmRleFBhdGgucmVwbGFjZSgvXFwuL2dpLCAnX18nKX1gO1xuICBjb25zdCBbZXJyb3JDb3VudCwgc2V0RXJyb3JDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc3VibWl0dGVkID0gdXNlRm9ybVN1Ym1pdHRlZCgpO1xuXG4gIGNvbnN0IG9uVG9nZ2xlID0gdXNlQ2FsbGJhY2soYXN5bmMgKG5ld0NvbGxhcHNlZFN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdQcmVmZXJlbmNlczogRG9jdW1lbnRQcmVmZXJlbmNlcyA9IGF3YWl0IGdldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXkpO1xuXG4gICAgc2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSwge1xuICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcyxcbiAgICAgIC4uLnBhdGggPyB7XG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcyB8fCB7fSxcbiAgICAgICAgICBbcGF0aF06IHtcbiAgICAgICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcz8uW3BhdGhdLFxuICAgICAgICAgICAgY29sbGFwc2VkOiBuZXdDb2xsYXBzZWRTdGF0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSA6IHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzIHx8IHt9LFxuICAgICAgICAgIFtmaWVsZFByZWZlcmVuY2VzS2V5XToge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzPy5bZmllbGRQcmVmZXJlbmNlc0tleV0sXG4gICAgICAgICAgICBjb2xsYXBzZWQ6IG5ld0NvbGxhcHNlZFN0YXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbcHJlZmVyZW5jZXNLZXksIGZpZWxkUHJlZmVyZW5jZXNLZXksIGdldFByZWZlcmVuY2UsIHNldFByZWZlcmVuY2UsIHBhdGhdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSW5pdGlhbFN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcHJlZmVyZW5jZXMgPSBhd2FpdCBnZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VzS2V5KTtcbiAgICAgIGlmIChwcmVmZXJlbmNlcykge1xuICAgICAgICBjb25zdCBpbml0Q29sbGFwc2VkRnJvbVByZWYgPSBwYXRoID8gcHJlZmVyZW5jZXM/LmZpZWxkcz8uW3BhdGhdPy5jb2xsYXBzZWQgOiBwcmVmZXJlbmNlcz8uZmllbGRzPy5bZmllbGRQcmVmZXJlbmNlc0tleV0/LmNvbGxhcHNlZDtcbiAgICAgICAgc2V0Q29sbGFwc2VkT25Nb3VudChCb29sZWFuKGluaXRDb2xsYXBzZWRGcm9tUHJlZikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Q29sbGFwc2VkT25Nb3VudCh0eXBlb2YgaW5pdENvbGxhcHNlZCA9PT0gJ2Jvb2xlYW4nID8gaW5pdENvbGxhcHNlZCA6IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hJbml0aWFsU3RhdGUoKTtcbiAgfSwgW2dldFByZWZlcmVuY2UsIHByZWZlcmVuY2VzS2V5LCBmaWVsZFByZWZlcmVuY2VzS2V5LCBpbml0Q29sbGFwc2VkLCBwYXRoXSk7XG5cbiAgaWYgKHR5cGVvZiBjb2xsYXBzZWRPbk1vdW50ICE9PSAnYm9vbGVhbicpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGZpZWxkSGFzRXJyb3JzID0gc3VibWl0dGVkICYmIGVycm9yQ291bnQgPiAwO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgJ2ZpZWxkLXR5cGUnLFxuICAgIGJhc2VDbGFzcyxcbiAgICBjbGFzc05hbWUsXG4gICAgZmllbGRIYXNFcnJvcnMgPyBgJHtiYXNlQ2xhc3N9LS1oYXMtZXJyb3JgIDogYCR7YmFzZUNsYXNzfS0taGFzLW5vLWVycm9yYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD17YGZpZWxkLSR7ZmllbGRQcmVmZXJlbmNlc0tleX0ke3BhdGggPyBgLSR7cGF0aC5yZXBsYWNlKC9cXC4vZ2ksICdfXycpfWAgOiAnJ31gfT5cbiAgICAgIDxXYXRjaENoaWxkRXJyb3JzXG4gICAgICAgIHNldEVycm9yQ291bnQ9e3NldEVycm9yQ291bnR9XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZHN9XG4gICAgICAvPlxuICAgICAgPENvbGxhcHNpYmxlXG4gICAgICAgIGluaXRDb2xsYXBzZWQ9e2NvbGxhcHNlZE9uTW91bnR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgICAgY29sbGFwc2libGVTdHlsZT17ZXJyb3JDb3VudCA+IDAgPyAnZXJyb3InIDogJ2RlZmF1bHQnfVxuICAgICAgICBoZWFkZXI9eyhcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fcm93LWxhYmVsLXdyYXBgfT5cbiAgICAgICAgICAgIDxSb3dMYWJlbFxuICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Vycm9yQ291bnQgPiAwICYmIChcbiAgICAgICAgICAgICAgPEVycm9yUGlsbFxuICAgICAgICAgICAgICAgIGNvdW50PXtlcnJvckNvdW50fVxuICAgICAgICAgICAgICAgIHdpdGhNZXNzYWdlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBvblRvZ2dsZT17b25Ub2dnbGV9XG4gICAgICA+XG4gICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICBmb3JjZVJlbmRlclxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnN9XG4gICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICBpbmRleFBhdGg9e2luZGV4UGF0aH1cbiAgICAgICAgICBmaWVsZFNjaGVtYT17ZmllbGRzLm1hcCgoZmllbGQpID0+ICh7XG4gICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgIHBhdGg6IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCksXG4gICAgICAgICAgfSkpfVxuICAgICAgICAvPlxuICAgICAgPC9Db2xsYXBzaWJsZT5cbiAgICAgIDxGaWVsZERlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKENvbGxhcHNpYmxlRmllbGQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJlbmRlckZpZWxkcyIsIndpdGhDb25kaXRpb24iLCJDb2xsYXBzaWJsZSIsInVzZVByZWZlcmVuY2VzIiwidXNlRG9jdW1lbnRJbmZvIiwiRmllbGREZXNjcmlwdGlvbiIsIlJvd0xhYmVsIiwiY3JlYXRlTmVzdGVkRmllbGRQYXRoIiwiV2F0Y2hDaGlsZEVycm9ycyIsInVzZUZvcm1TdWJtaXR0ZWQiLCJFcnJvclBpbGwiLCJiYXNlQ2xhc3MiLCJDb2xsYXBzaWJsZUZpZWxkIiwicHJvcHMiLCJsYWJlbCIsImZpZWxkcyIsImZpZWxkVHlwZXMiLCJwYXRoIiwicGVybWlzc2lvbnMiLCJpbmRleFBhdGgiLCJhZG1pbiIsInJlYWRPbmx5IiwiY2xhc3NOYW1lIiwiaW5pdENvbGxhcHNlZCIsImRlc2NyaXB0aW9uIiwiZ2V0UHJlZmVyZW5jZSIsInNldFByZWZlcmVuY2UiLCJwcmVmZXJlbmNlc0tleSIsImNvbGxhcHNlZE9uTW91bnQiLCJzZXRDb2xsYXBzZWRPbk1vdW50IiwiZmllbGRQcmVmZXJlbmNlc0tleSIsInJlcGxhY2UiLCJlcnJvckNvdW50Iiwic2V0RXJyb3JDb3VudCIsInN1Ym1pdHRlZCIsIm9uVG9nZ2xlIiwibmV3Q29sbGFwc2VkU3RhdGUiLCJleGlzdGluZ1ByZWZlcmVuY2VzIiwiY29sbGFwc2VkIiwiZmV0Y2hJbml0aWFsU3RhdGUiLCJwcmVmZXJlbmNlcyIsImluaXRDb2xsYXBzZWRGcm9tUHJlZiIsIkJvb2xlYW4iLCJmaWVsZEhhc0Vycm9ycyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJqb2luIiwiZGl2IiwiaWQiLCJmaWVsZFNjaGVtYSIsImNvbGxhcHNpYmxlU3R5bGUiLCJoZWFkZXIiLCJjb3VudCIsIndpdGhNZXNzYWdlIiwiZm9yY2VSZW5kZXIiLCJtYXAiLCJmaWVsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsV0FBVyxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQ2hFLE9BQU9DLGtCQUFrQixxQkFBcUI7QUFDOUMsT0FBT0MsbUJBQW1CLHNCQUFzQjtBQUVoRCxTQUFTQyxXQUFXLFFBQVEsZ0NBQWdDO0FBQzVELFNBQVNDLGNBQWMsUUFBUSxpQ0FBaUM7QUFFaEUsU0FBU0MsZUFBZSxRQUFRLGtDQUFrQztBQUNsRSxPQUFPQyxzQkFBc0IseUJBQXlCO0FBQ3RELFNBQVNDLFFBQVEsUUFBUSxpQkFBaUI7QUFDMUMsU0FBU0MscUJBQXFCLFFBQVEsbUNBQW1DO0FBQ3pFLFNBQVNDLGdCQUFnQixRQUFRLHlCQUF5QjtBQUMxRCxTQUFTQyxnQkFBZ0IsUUFBUSxxQkFBcUI7QUFDdEQsU0FBU0MsU0FBUyxRQUFRLDhCQUE4QjtBQUV4RCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxtQkFBb0MsU0FBQ0M7SUFDekMsSUFDRUMsUUFZRUQsTUFaRkMsT0FDQUMsU0FXRUYsTUFYRkUsUUFDQUMsYUFVRUgsTUFWRkcsWUFDQUMsT0FTRUosTUFURkksTUFDQUMsY0FRRUwsTUFSRkssYUFDQUMsWUFPRU4sTUFQRk0sMEJBT0VOLE1BTkZPLE9BQ0VDLHdCQUFB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