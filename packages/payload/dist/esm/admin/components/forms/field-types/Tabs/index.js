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
import { useTranslation } from "react-i18next";
import RenderFields from "../../RenderFields";
import withCondition from "../../withCondition";
import { tabHasName } from "../../../../../fields/config/types";
import FieldDescription from "../../FieldDescription";
import toKebabCase from "../../../../../utilities/toKebabCase";
import { useCollapsible } from "../../../elements/Collapsible/provider";
import { TabsProvider } from "./provider";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { usePreferences } from "../../../utilities/Preferences";
import { useDocumentInfo } from "../../../utilities/DocumentInfo";
import { createNestedFieldPath } from "../../Form/createNestedFieldPath";
import { WatchChildErrors } from "../../WatchChildErrors";
import { ErrorPill } from "../../../elements/ErrorPill";
import { useFormSubmitted } from "../../Form/context";
import "./index.scss";
var baseClass = "tabs-field";
var Tab = function(param) {
    var tab = param.tab, isActive = param.isActive, setIsActive = param.setIsActive, parentPath = param.parentPath;
    var i18n = useTranslation().i18n;
    var _useState = _sliced_to_array(useState(undefined), 2), errorCount = _useState[0], setErrorCount = _useState[1];
    var hasName = tabHasName(tab);
    var submitted = useFormSubmitted();
    var pathSegments = [];
    if (parentPath) pathSegments.push(parentPath);
    if (hasName) pathSegments.push(tab.name);
    var path = pathSegments.join(".");
    var tabHasErrors = submitted && errorCount > 0;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(WatchChildErrors, {
        setErrorCount: setErrorCount,
        path: path,
        fieldSchema: hasName ? undefined : tab.fields
    }), /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: [
            "".concat(baseClass, "__tab-button"),
            tabHasErrors && "".concat(baseClass, "__tab-button--has-error"),
            isActive && "".concat(baseClass, "__tab-button--active")
        ].filter(Boolean).join(" "),
        onClick: setIsActive
    }, tab.label ? getTranslation(tab.label, i18n) : hasName && tab.name, tabHasErrors && /*#__PURE__*/ React.createElement(ErrorPill, {
        count: errorCount
    })));
};
var TabsField = function(props) {
    var tabs = props.tabs, fieldTypes = props.fieldTypes, path = props.path, permissions = props.permissions, indexPath = props.indexPath, _props_admin = props.admin, readOnly = _props_admin.readOnly, className = _props_admin.className;
    var _usePreferences = usePreferences(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var preferencesKey = useDocumentInfo().preferencesKey;
    var i18n = useTranslation().i18n;
    var isWithinCollapsible = useCollapsible();
    var _useState = _sliced_to_array(useState(0), 2), activeTabIndex = _useState[0], setActiveTabIndex = _useState[1];
    var tabsPrefKey = "tabs-".concat(indexPath);
    useEffect(function() {
        var getInitialPref = function() {
            var _ref = _async_to_generator(function() {
                var _existingPreferences_fields_path, _existingPreferences_fields, _existingPreferences, _existingPreferences_fields_tabsPrefKey, _existingPreferences_fields1, _existingPreferences1, existingPreferences, initialIndex;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getPreference(preferencesKey)
                            ];
                        case 1:
                            existingPreferences = _state.sent();
                            initialIndex = path ? (_existingPreferences = existingPreferences) === null || _existingPreferences === void 0 ? void 0 : (_existingPreferences_fields = _existingPreferences.fields) === null || _existingPreferences_fields === void 0 ? void 0 : (_existingPreferences_fields_path = _existingPreferences_fields[path]) === null || _existingPreferences_fields_path === void 0 ? void 0 : _existingPreferences_fields_path.tabIndex : (_existingPreferences1 = existingPreferences) === null || _existingPreferences1 === void 0 ? void 0 : (_existingPreferences_fields1 = _existingPreferences1.fields) === null || _existingPreferences_fields1 === void 0 ? void 0 : (_existingPreferences_fields_tabsPrefKey = _existingPreferences_fields1[tabsPrefKey]) === null || _existingPreferences_fields_tabsPrefKey === void 0 ? void 0 : _existingPreferences_fields_tabsPrefKey.tabIndex;
                            setActiveTabIndex(initialIndex || 0);
                            return [
                                2
                            ];
                    }
                });
            });
            return function getInitialPref() {
                return _ref.apply(this, arguments);
            };
        }();
        getInitialPref();
    }, [
        path,
        indexPath,
        getPreference,
        preferencesKey,
        tabsPrefKey
    ]);
    var handleTabChange = useCallback(function() {
        var _ref = _async_to_generator(function(incomingTabIndex) {
            var _existingPreferences, _existingPreferences_fields, _existingPreferences1, _existingPreferences2, _existingPreferences_fields1, _existingPreferences3, existingPreferences;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setActiveTabIndex(incomingTabIndex);
                        return [
                            4,
                            getPreference(preferencesKey)
                        ];
                    case 1:
                        existingPreferences = _state.sent();
                        setPreference(preferencesKey, _object_spread({}, existingPreferences, path ? {
                            fields: _object_spread_props(_object_spread({}, ((_existingPreferences = existingPreferences) === null || _existingPreferences === void 0 ? void 0 : _existingPreferences.fields) || {}), _define_property({}, path, _object_spread_props(_object_spread({}, (_existingPreferences1 = existingPreferences) === null || _existingPreferences1 === void 0 ? void 0 : (_existingPreferences_fields = _existingPreferences1.fields) === null || _existingPreferences_fields === void 0 ? void 0 : _existingPreferences_fields[path]), {
                                tabIndex: incomingTabIndex
                            })))
                        } : {
                            fields: _object_spread_props(_object_spread({}, (_existingPreferences2 = existingPreferences) === null || _existingPreferences2 === void 0 ? void 0 : _existingPreferences2.fields), _define_property({}, tabsPrefKey, _object_spread_props(_object_spread({}, (_existingPreferences3 = existingPreferences) === null || _existingPreferences3 === void 0 ? void 0 : (_existingPreferences_fields1 = _existingPreferences3.fields) === null || _existingPreferences_fields1 === void 0 ? void 0 : _existingPreferences_fields1[tabsPrefKey]), {
                                tabIndex: incomingTabIndex
                            })))
                        }));
                        return [
                            2
                        ];
                }
            });
        });
        return function(incomingTabIndex) {
            return _ref.apply(this, arguments);
        };
    }(), [
        preferencesKey,
        getPreference,
        setPreference,
        path,
        tabsPrefKey
    ]);
    var activeTabConfig = tabs[activeTabIndex];
    return /*#__PURE__*/ React.createElement("div", {
        className: [
            className,
            baseClass,
            isWithinCollapsible && "".concat(baseClass, "--within-collapsible")
        ].filter(Boolean).join(" ")
    }, /*#__PURE__*/ React.createElement(TabsProvider, null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__tabs-wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__tabs")
    }, tabs.map(function(tab, tabIndex) {
        return /*#__PURE__*/ React.createElement(Tab, {
            key: tabIndex,
            setIsActive: function() {
                return handleTabChange(tabIndex);
            },
            isActive: activeTabIndex === tabIndex,
            parentPath: path,
            tab: tab
        });
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__content-wrap")
    }, activeTabConfig && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: [
            "".concat(baseClass, "__tab"),
            activeTabConfig.label && "".concat(baseClass, "__tab-").concat(toKebabCase(getTranslation(activeTabConfig.label, i18n)))
        ].filter(Boolean).join(" ")
    }, /*#__PURE__*/ React.createElement(FieldDescription, {
        className: "".concat(baseClass, "__description"),
        description: activeTabConfig.description
    }), /*#__PURE__*/ React.createElement(RenderFields, {
        key: String(activeTabConfig.label),
        forceRender: true,
        readOnly: readOnly,
        permissions: tabHasName(activeTabConfig) ? permissions[activeTabConfig.name].fields : permissions,
        fieldTypes: fieldTypes,
        fieldSchema: activeTabConfig.fields.map(function(field) {
            var pathSegments = [];
            if (path) pathSegments.push(path);
            if (tabHasName(activeTabConfig)) pathSegments.push(activeTabConfig.name);
            return _object_spread_props(_object_spread({}, field), {
                path: createNestedFieldPath(pathSegments.join("."), field)
            });
        }),
        indexPath: indexPath
    }))))));
};
export default withCondition(TabsField);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1RhYnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4uLy4uL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgd2l0aENvbmRpdGlvbiBmcm9tICcuLi8uLi93aXRoQ29uZGl0aW9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFRhYiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IEZpZWxkRGVzY3JpcHRpb24gZnJvbSAnLi4vLi4vRmllbGREZXNjcmlwdGlvbic7XG5pbXBvcnQgdG9LZWJhYkNhc2UgZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL3RvS2ViYWJDYXNlJztcbmltcG9ydCB7IHVzZUNvbGxhcHNpYmxlIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQ29sbGFwc2libGUvcHJvdmlkZXInO1xuaW1wb3J0IHsgVGFic1Byb3ZpZGVyIH0gZnJvbSAnLi9wcm92aWRlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyB1c2VQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9QcmVmZXJlbmNlcyc7XG5pbXBvcnQgeyBEb2N1bWVudFByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcHJlZmVyZW5jZXMvdHlwZXMnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgeyBjcmVhdGVOZXN0ZWRGaWVsZFBhdGggfSBmcm9tICcuLi8uLi9Gb3JtL2NyZWF0ZU5lc3RlZEZpZWxkUGF0aCc7XG5pbXBvcnQgeyBXYXRjaENoaWxkRXJyb3JzIH0gZnJvbSAnLi4vLi4vV2F0Y2hDaGlsZEVycm9ycyc7XG5pbXBvcnQgeyBFcnJvclBpbGwgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9FcnJvclBpbGwnO1xuaW1wb3J0IHsgdXNlRm9ybVN1Ym1pdHRlZCB9IGZyb20gJy4uLy4uL0Zvcm0vY29udGV4dCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RhYnMtZmllbGQnO1xuXG50eXBlIFRhYlByb3BzID0ge1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIHNldElzQWN0aXZlOiAoKSA9PiB2b2lkO1xuICB0YWI6IFRhYjtcbiAgcGFyZW50UGF0aDogc3RyaW5nXG59XG5jb25zdCBUYWI6IFJlYWN0LkZDPFRhYlByb3BzPiA9ICh7IHRhYiwgaXNBY3RpdmUsIHNldElzQWN0aXZlLCBwYXJlbnRQYXRoIH0pID0+IHtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBbZXJyb3JDb3VudCwgc2V0RXJyb3JDb3VudF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBoYXNOYW1lID0gdGFiSGFzTmFtZSh0YWIpO1xuICBjb25zdCBzdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG5cbiAgY29uc3QgcGF0aFNlZ21lbnRzID0gW107XG4gIGlmIChwYXJlbnRQYXRoKSBwYXRoU2VnbWVudHMucHVzaChwYXJlbnRQYXRoKTtcbiAgaWYgKGhhc05hbWUpIHBhdGhTZWdtZW50cy5wdXNoKHRhYi5uYW1lKTtcbiAgY29uc3QgcGF0aCA9IHBhdGhTZWdtZW50cy5qb2luKCcuJyk7XG4gIGNvbnN0IHRhYkhhc0Vycm9ycyA9IHN1Ym1pdHRlZCAmJiBlcnJvckNvdW50ID4gMDtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxXYXRjaENoaWxkRXJyb3JzXG4gICAgICAgIHNldEVycm9yQ291bnQ9e3NldEVycm9yQ291bnR9XG4gICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgIGZpZWxkU2NoZW1hPXtoYXNOYW1lID8gdW5kZWZpbmVkIDogdGFiLmZpZWxkc31cbiAgICAgIC8+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgICBgJHtiYXNlQ2xhc3N9X190YWItYnV0dG9uYCxcbiAgICAgICAgICB0YWJIYXNFcnJvcnMgJiYgYCR7YmFzZUNsYXNzfV9fdGFiLWJ1dHRvbi0taGFzLWVycm9yYCxcbiAgICAgICAgICBpc0FjdGl2ZSAmJiBgJHtiYXNlQ2xhc3N9X190YWItYnV0dG9uLS1hY3RpdmVgLFxuICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgICAgIG9uQ2xpY2s9e3NldElzQWN0aXZlfVxuICAgICAgPlxuICAgICAgICB7dGFiLmxhYmVsID8gZ2V0VHJhbnNsYXRpb24odGFiLmxhYmVsLCBpMThuKSA6IChoYXNOYW1lICYmIHRhYi5uYW1lKX1cbiAgICAgICAge3RhYkhhc0Vycm9ycyAmJiAoXG4gICAgICAgICAgPEVycm9yUGlsbCBjb3VudD17ZXJyb3JDb3VudH0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5jb25zdCBUYWJzRmllbGQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGFicyxcbiAgICBmaWVsZFR5cGVzLFxuICAgIHBhdGgsXG4gICAgcGVybWlzc2lvbnMsXG4gICAgaW5kZXhQYXRoLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBnZXRQcmVmZXJlbmNlLCBzZXRQcmVmZXJlbmNlIH0gPSB1c2VQcmVmZXJlbmNlcygpO1xuICBjb25zdCB7IHByZWZlcmVuY2VzS2V5IH0gPSB1c2VEb2N1bWVudEluZm8oKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGNvbnN0IGlzV2l0aGluQ29sbGFwc2libGUgPSB1c2VDb2xsYXBzaWJsZSgpO1xuICBjb25zdCBbYWN0aXZlVGFiSW5kZXgsIHNldEFjdGl2ZVRhYkluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IHRhYnNQcmVmS2V5ID0gYHRhYnMtJHtpbmRleFBhdGh9YDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldEluaXRpYWxQcmVmID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmdQcmVmZXJlbmNlczogRG9jdW1lbnRQcmVmZXJlbmNlcyA9IGF3YWl0IGdldFByZWZlcmVuY2UocHJlZmVyZW5jZXNLZXkpO1xuICAgICAgY29uc3QgaW5pdGlhbEluZGV4ID0gcGF0aCA/IGV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcz8uW3BhdGhdPy50YWJJbmRleCA6IGV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcz8uW3RhYnNQcmVmS2V5XT8udGFiSW5kZXg7XG4gICAgICBzZXRBY3RpdmVUYWJJbmRleChpbml0aWFsSW5kZXggfHwgMCk7XG4gICAgfTtcbiAgICBnZXRJbml0aWFsUHJlZigpO1xuICB9LCBbcGF0aCwgaW5kZXhQYXRoLCBnZXRQcmVmZXJlbmNlLCBwcmVmZXJlbmNlc0tleSwgdGFic1ByZWZLZXldKTtcblxuICBjb25zdCBoYW5kbGVUYWJDaGFuZ2UgPSB1c2VDYWxsYmFjayhhc3luYyAoaW5jb21pbmdUYWJJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0QWN0aXZlVGFiSW5kZXgoaW5jb21pbmdUYWJJbmRleCk7XG5cbiAgICBjb25zdCBleGlzdGluZ1ByZWZlcmVuY2VzOiBEb2N1bWVudFByZWZlcmVuY2VzID0gYXdhaXQgZ2V0UHJlZmVyZW5jZShwcmVmZXJlbmNlc0tleSk7XG5cbiAgICBzZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VzS2V5LCB7XG4gICAgICAuLi5leGlzdGluZ1ByZWZlcmVuY2VzLFxuICAgICAgLi4ucGF0aCA/IHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzIHx8IHt9LFxuICAgICAgICAgIFtwYXRoXToge1xuICAgICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzPy5bcGF0aF0sXG4gICAgICAgICAgICB0YWJJbmRleDogaW5jb21pbmdUYWJJbmRleCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSA6IHtcbiAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgLi4uZXhpc3RpbmdQcmVmZXJlbmNlcz8uZmllbGRzLFxuICAgICAgICAgIFt0YWJzUHJlZktleV06IHtcbiAgICAgICAgICAgIC4uLmV4aXN0aW5nUHJlZmVyZW5jZXM/LmZpZWxkcz8uW3RhYnNQcmVmS2V5XSxcbiAgICAgICAgICAgIHRhYkluZGV4OiBpbmNvbWluZ1RhYkluZGV4LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbcHJlZmVyZW5jZXNLZXksIGdldFByZWZlcmVuY2UsIHNldFByZWZlcmVuY2UsIHBhdGgsIHRhYnNQcmVmS2V5XSk7XG5cbiAgY29uc3QgYWN0aXZlVGFiQ29uZmlnID0gdGFic1thY3RpdmVUYWJJbmRleF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17W1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYmFzZUNsYXNzLFxuICAgICAgaXNXaXRoaW5Db2xsYXBzaWJsZSAmJiBgJHtiYXNlQ2xhc3N9LS13aXRoaW4tY29sbGFwc2libGVgLFxuICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICA8VGFic1Byb3ZpZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGFicy13cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RhYnNgfT5cbiAgICAgICAgICAgIHt0YWJzLm1hcCgodGFiLCB0YWJJbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxUYWJcbiAgICAgICAgICAgICAgICAgIGtleT17dGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICBzZXRJc0FjdGl2ZT17KCkgPT4gaGFuZGxlVGFiQ2hhbmdlKHRhYkluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmVUYWJJbmRleCA9PT0gdGFiSW5kZXh9XG4gICAgICAgICAgICAgICAgICBwYXJlbnRQYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgICAgdGFiPXt0YWJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2NvbnRlbnQtd3JhcGB9PlxuICAgICAgICAgIHthY3RpdmVUYWJDb25maWcgJiYgKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgICBgJHtiYXNlQ2xhc3N9X190YWJgLFxuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiQ29uZmlnLmxhYmVsICYmIGAke2Jhc2VDbGFzc31fX3RhYi0ke3RvS2ViYWJDYXNlKGdldFRyYW5zbGF0aW9uKGFjdGl2ZVRhYkNvbmZpZy5sYWJlbCwgaTE4bikpfWAsXG4gICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpZWxkRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZGVzY3JpcHRpb25gfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2FjdGl2ZVRhYkNvbmZpZy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNcbiAgICAgICAgICAgICAgICAgIGtleT17U3RyaW5nKGFjdGl2ZVRhYkNvbmZpZy5sYWJlbCl9XG4gICAgICAgICAgICAgICAgICBmb3JjZVJlbmRlclxuICAgICAgICAgICAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e3RhYkhhc05hbWUoYWN0aXZlVGFiQ29uZmlnKSA/IHBlcm1pc3Npb25zW2FjdGl2ZVRhYkNvbmZpZy5uYW1lXS5maWVsZHMgOiBwZXJtaXNzaW9uc31cbiAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZXM9e2ZpZWxkVHlwZXN9XG4gICAgICAgICAgICAgICAgICBmaWVsZFNjaGVtYT17YWN0aXZlVGFiQ29uZmlnLmZpZWxkcy5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXRoKSBwYXRoU2VnbWVudHMucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYkhhc05hbWUoYWN0aXZlVGFiQ29uZmlnKSkgcGF0aFNlZ21lbnRzLnB1c2goYWN0aXZlVGFiQ29uZmlnLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDogY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGhTZWdtZW50cy5qb2luKCcuJyksIGZpZWxkKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgaW5kZXhQYXRoPXtpbmRleFBhdGh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UYWJzUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29uZGl0aW9uKFRhYnNGaWVsZCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlVHJhbnNsYXRpb24iLCJSZW5kZXJGaWVsZHMiLCJ3aXRoQ29uZGl0aW9uIiwidGFiSGFzTmFtZSIsIkZpZWxkRGVzY3JpcHRpb24iLCJ0b0tlYmFiQ2FzZSIsInVzZUNvbGxhcHNpYmxlIiwiVGFic1Byb3ZpZGVyIiwiZ2V0VHJhbnNsYXRpb24iLCJ1c2VQcmVmZXJlbmNlcyIsInVzZURvY3VtZW50SW5mbyIsImNyZWF0ZU5lc3RlZEZpZWxkUGF0aCIsIldhdGNoQ2hpbGRFcnJvcnMiLCJFcnJvclBpbGwiLCJ1c2VGb3JtU3VibWl0dGVkIiwiYmFzZUNsYXNzIiwiVGFiIiwidGFiIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInBhcmVudFBhdGgiLCJpMThuIiwidW5kZWZpbmVkIiwiZXJyb3JDb3VudCIsInNldEVycm9yQ291bnQiLCJoYXNOYW1lIiwic3VibWl0dGVkIiwicGF0aFNlZ21lbnRzIiwicHVzaCIsIm5hbWUiLCJwYXRoIiwiam9pbiIsInRhYkhhc0Vycm9ycyIsIkZyYWdtZW50IiwiZmllbGRTY2hlbWEiLCJmaWVsZHMiLCJidXR0b24iLCJ0eXBlIiwiY2xhc3NOYW1lIiwiZmlsdGVyIiwiQm9vbGVhbiIsIm9uQ2xpY2siLCJsYWJlbCIsImNvdW50IiwiVGFic0ZpZWxkIiwicHJvcHMiLCJ0YWJzIiwiZmllbGRUeXBlcyIsInBlcm1pc3Npb25zIiwiaW5kZXhQYXRoIiwiYWRtaW4iLCJyZWFkT25seSIsImdldFByZWZlcmVuY2UiLCJzZXRQcmVmZXJlbmNlIiwicHJlZmVyZW5jZXNLZXkiLCJpc1dpdGhpbkNvbGxhcHNpYmxlIiwiYWN0aXZlVGFiSW5kZXgiLCJzZXRBY3RpdmVUYWJJbmRleCIsInRhYnNQcmVmS2V5IiwiZ2V0SW5pdGlhbFByZWYiLCJleGlzdGluZ1ByZWZlcmVuY2VzIiwiaW5pdGlhbEluZGV4IiwidGFiSW5kZXgiLCJoYW5kbGVUYWJDaGFuZ2UiLCJpbmNvbWluZ1RhYkluZGV4IiwiYWN0aXZlVGFiQ29uZmlnIiwiZGl2IiwibWFwIiwia2V5IiwiZGVzY3JpcHRpb24iLCJTdHJpbmciLCJmb3JjZVJlbmRlciIsImZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDaEUsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxrQkFBa0IscUJBQXFC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