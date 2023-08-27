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
var _reacti18next = require("react-i18next");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _useIntersect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useIntersect"));
var _types = require("../../../../fields/config/types");
var _OperationProvider = require("../../utilities/OperationProvider");
var _getTranslation = require("../../../../utilities/getTranslation");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var baseClass = "render-fields";
var intersectionObserverOptions = {
    rootMargin: "1000px"
};
var RenderFields = function(props) {
    var _entry, _entry_boundingClientRect, _entry1;
    var fieldSchema = props.fieldSchema, fieldTypes = props.fieldTypes, filter = props.filter, permissions = props.permissions, readOnlyOverride = props.readOnly, className = props.className, forceRender = props.forceRender, incomingIndexPath = props.indexPath;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array((0, _react.useState)(Boolean(forceRender)), 2), hasRendered = _useState[0], setHasRendered = _useState[1];
    var _useIntersect1 = _sliced_to_array((0, _useIntersect.default)(intersectionObserverOptions), 2), intersectionRef = _useIntersect1[0], entry = _useIntersect1[1];
    var operation = (0, _OperationProvider.useOperation)();
    var isIntersecting = Boolean((_entry = entry) === null || _entry === void 0 ? void 0 : _entry.isIntersecting);
    var isAboveViewport = ((_entry1 = entry) === null || _entry1 === void 0 ? void 0 : (_entry_boundingClientRect = _entry1.boundingClientRect) === null || _entry_boundingClientRect === void 0 ? void 0 : _entry_boundingClientRect.top) < 0;
    var shouldRender = forceRender || isIntersecting || isAboveViewport;
    (0, _react.useEffect)(function() {
        if (shouldRender && !hasRendered) {
            setHasRendered(true);
        }
    }, [
        shouldRender,
        hasRendered
    ]);
    var classes = [
        baseClass,
        className
    ].filter(Boolean).join(" ");
    if (fieldSchema) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            ref: intersectionRef,
            className: classes
        }, hasRendered && fieldSchema.map(function(field, fieldIndex) {
            var _field, _field_admin, _field1;
            var fieldIsPresentational = (0, _types.fieldIsPresentationalOnly)(field);
            var FieldComponent = fieldTypes[field.type];
            if (fieldIsPresentational || !((_field = field) === null || _field === void 0 ? void 0 : _field.hidden) && ((_field1 = field) === null || _field1 === void 0 ? void 0 : (_field_admin = _field1.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.disabled) !== true) {
                if (filter && typeof filter === "function" && filter(field) || !filter) {
                    var _field_admin1, _field2, _permissions, _permissions_field_name_read, _permissions_field_name, _field3, _permissions1;
                    if (fieldIsPresentational) {
                        return /*#__PURE__*/ _react.default.createElement(FieldComponent, _object_spread_props(_object_spread({}, field), {
                            key: fieldIndex
                        }));
                    }
                    if ((_field2 = field) === null || _field2 === void 0 ? void 0 : (_field_admin1 = _field2.admin) === null || _field_admin1 === void 0 ? void 0 : _field_admin1.hidden) {
                        FieldComponent = fieldTypes.hidden;
                    }
                    var isFieldAffectingData = (0, _types.fieldAffectsData)(field);
                    var fieldPermissions = isFieldAffectingData ? (_permissions = permissions) === null || _permissions === void 0 ? void 0 : _permissions[field.name] : permissions;
                    var tmp = field.admin, readOnly = (tmp === void 0 ? {} : tmp).readOnly;
                    if (readOnlyOverride && readOnly !== false) readOnly = true;
                    if (isFieldAffectingData && ((_permissions1 = permissions) === null || _permissions1 === void 0 ? void 0 : (_permissions_field_name = _permissions1[(_field3 = field) === null || _field3 === void 0 ? void 0 : _field3.name]) === null || _permissions_field_name === void 0 ? void 0 : (_permissions_field_name_read = _permissions_field_name.read) === null || _permissions_field_name_read === void 0 ? void 0 : _permissions_field_name_read.permission) !== false || !isFieldAffectingData) {
                        var _permissions_field_name_operation, _permissions_field_name1, _field4, _permissions2;
                        if (isFieldAffectingData && ((_permissions2 = permissions) === null || _permissions2 === void 0 ? void 0 : (_permissions_field_name1 = _permissions2[(_field4 = field) === null || _field4 === void 0 ? void 0 : _field4.name]) === null || _permissions_field_name1 === void 0 ? void 0 : (_permissions_field_name_operation = _permissions_field_name1[operation]) === null || _permissions_field_name_operation === void 0 ? void 0 : _permissions_field_name_operation.permission) === false) {
                            readOnly = true;
                        }
                        if (FieldComponent) {
                            var _field_admin_components, _field_admin2, _field5;
                            return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
                                key: fieldIndex,
                                CustomComponent: (_field5 = field) === null || _field5 === void 0 ? void 0 : (_field_admin2 = _field5.admin) === null || _field_admin2 === void 0 ? void 0 : (_field_admin_components = _field_admin2.components) === null || _field_admin_components === void 0 ? void 0 : _field_admin_components.Field,
                                DefaultComponent: FieldComponent,
                                componentProps: _object_spread_props(_object_spread({}, field), {
                                    path: field.path || (isFieldAffectingData ? field.name : ""),
                                    fieldTypes: fieldTypes,
                                    indexPath: incomingIndexPath ? "".concat(incomingIndexPath, ".").concat(fieldIndex) : "".concat(fieldIndex),
                                    admin: _object_spread_props(_object_spread({}, field.admin || {}), {
                                        readOnly: readOnly
                                    }),
                                    permissions: fieldPermissions
                                })
                            });
                        }
                        return /*#__PURE__*/ _react.default.createElement("div", {
                            className: "missing-field",
                            key: fieldIndex
                        }, t("error:noMatchedField", {
                            label: (0, _types.fieldAffectsData)(field) ? (0, _getTranslation.getTranslation)(field.label || field.name, i18n) : field.path
                        }));
                    }
                }
                return null;
            }
            return null;
        }));
    }
    return null;
};
var _default = RenderFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1JlbmRlckZpZWxkcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcbmltcG9ydCB1c2VJbnRlcnNlY3QgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlSW50ZXJzZWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhLCBmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB1c2VPcGVyYXRpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvT3BlcmF0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmVuZGVyLWZpZWxkcyc7XG5cbmNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyT3B0aW9ucyA9IHtcbiAgcm9vdE1hcmdpbjogJzEwMDBweCcsXG59O1xuXG5jb25zdCBSZW5kZXJGaWVsZHM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGRTY2hlbWEsXG4gICAgZmllbGRUeXBlcyxcbiAgICBmaWx0ZXIsXG4gICAgcGVybWlzc2lvbnMsXG4gICAgcmVhZE9ubHk6IHJlYWRPbmx5T3ZlcnJpZGUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZvcmNlUmVuZGVyLFxuICAgIGluZGV4UGF0aDogaW5jb21pbmdJbmRleFBhdGgsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IFtoYXNSZW5kZXJlZCwgc2V0SGFzUmVuZGVyZWRdID0gdXNlU3RhdGUoQm9vbGVhbihmb3JjZVJlbmRlcikpO1xuICBjb25zdCBbaW50ZXJzZWN0aW9uUmVmLCBlbnRyeV0gPSB1c2VJbnRlcnNlY3QoaW50ZXJzZWN0aW9uT2JzZXJ2ZXJPcHRpb25zKTtcbiAgY29uc3Qgb3BlcmF0aW9uID0gdXNlT3BlcmF0aW9uKCk7XG5cbiAgY29uc3QgaXNJbnRlcnNlY3RpbmcgPSBCb29sZWFuKGVudHJ5Py5pc0ludGVyc2VjdGluZyk7XG4gIGNvbnN0IGlzQWJvdmVWaWV3cG9ydCA9IGVudHJ5Py5ib3VuZGluZ0NsaWVudFJlY3Q/LnRvcCA8IDA7XG4gIGNvbnN0IHNob3VsZFJlbmRlciA9IGZvcmNlUmVuZGVyIHx8IGlzSW50ZXJzZWN0aW5nIHx8IGlzQWJvdmVWaWV3cG9ydDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG91bGRSZW5kZXIgJiYgIWhhc1JlbmRlcmVkKSB7XG4gICAgICBzZXRIYXNSZW5kZXJlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtzaG91bGRSZW5kZXIsIGhhc1JlbmRlcmVkXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgaWYgKGZpZWxkU2NoZW1hKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtpbnRlcnNlY3Rpb25SZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgID5cbiAgICAgICAge2hhc1JlbmRlcmVkICYmIChcbiAgICAgICAgICBmaWVsZFNjaGVtYS5tYXAoKGZpZWxkLCBmaWVsZEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZElzUHJlc2VudGF0aW9uYWwgPSBmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5KGZpZWxkKTtcbiAgICAgICAgICAgIGxldCBGaWVsZENvbXBvbmVudCA9IGZpZWxkVHlwZXNbZmllbGQudHlwZV07XG5cbiAgICAgICAgICAgIGlmIChmaWVsZElzUHJlc2VudGF0aW9uYWwgfHwgKCFmaWVsZD8uaGlkZGVuICYmIGZpZWxkPy5hZG1pbj8uZGlzYWJsZWQgIT09IHRydWUpKSB7XG4gICAgICAgICAgICAgIGlmICgoZmlsdGVyICYmIHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgZmlsdGVyKGZpZWxkKSkgfHwgIWZpbHRlcikge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZElzUHJlc2VudGF0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWVsZD8uYWRtaW4/LmhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgRmllbGRDb21wb25lbnQgPSBmaWVsZFR5cGVzLmhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0ZpZWxkQWZmZWN0aW5nRGF0YSA9IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRQZXJtaXNzaW9ucyA9IGlzRmllbGRBZmZlY3RpbmdEYXRhID8gcGVybWlzc2lvbnM/LltmaWVsZC5uYW1lXSA6IHBlcm1pc3Npb25zO1xuXG4gICAgICAgICAgICAgICAgbGV0IHsgYWRtaW46IHsgcmVhZE9ubHkgfSA9IHt9IH0gPSBmaWVsZDtcblxuICAgICAgICAgICAgICAgIGlmIChyZWFkT25seU92ZXJyaWRlICYmIHJlYWRPbmx5ICE9PSBmYWxzZSkgcmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKChpc0ZpZWxkQWZmZWN0aW5nRGF0YSAmJiBwZXJtaXNzaW9ucz8uW2ZpZWxkPy5uYW1lXT8ucmVhZD8ucGVybWlzc2lvbiAhPT0gZmFsc2UpIHx8ICFpc0ZpZWxkQWZmZWN0aW5nRGF0YSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzRmllbGRBZmZlY3RpbmdEYXRhICYmIHBlcm1pc3Npb25zPy5bZmllbGQ/Lm5hbWVdPy5bb3BlcmF0aW9uXT8ucGVybWlzc2lvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoRmllbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21Db21wb25lbnQ9e2ZpZWxkPy5hZG1pbj8uY29tcG9uZW50cz8uRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0Q29tcG9uZW50PXtGaWVsZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBmaWVsZC5wYXRoIHx8IChpc0ZpZWxkQWZmZWN0aW5nRGF0YSA/IGZpZWxkLm5hbWUgOiAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4UGF0aDogaW5jb21pbmdJbmRleFBhdGggPyBgJHtpbmNvbWluZ0luZGV4UGF0aH0uJHtmaWVsZEluZGV4fWAgOiBgJHtmaWVsZEluZGV4fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkbWluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uKGZpZWxkLmFkbWluIHx8IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGZpZWxkUGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaXNzaW5nLWZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnZXJyb3I6bm9NYXRjaGVkRmllbGQnLCB7IGxhYmVsOiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSA/IGdldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVsIHx8IGZpZWxkLm5hbWUsIGkxOG4pIDogZmllbGQucGF0aCB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyRmllbGRzO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsImludGVyc2VjdGlvbk9ic2VydmVyT3B0aW9ucyIsInJvb3RNYXJnaW4iLCJSZW5kZXJGaWVsZHMiLCJwcm9wcyIsImVudHJ5IiwiZmllbGRTY2hlbWEiLCJmaWVsZFR5cGVzIiwiZmlsdGVyIiwicGVybWlzc2lvbnMiLCJyZWFkT25seSIsInJlYWRPbmx5T3ZlcnJpZGUiLCJjbGFzc05hbWUiLCJmb3JjZVJlbmRlciIsImluZGV4UGF0aCIsImluY29taW5nSW5kZXhQYXRoIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInVzZVN0YXRlIiwiQm9vbGVhbiIsImhhc1JlbmRlcmVkIiwic2V0SGFzUmVuZGVyZWQiLCJ1c2VJbnRlcnNlY3QiLCJpbnRlcnNlY3Rpb25SZWYiLCJvcGVyYXRpb24iLCJ1c2VPcGVyYXRpb24iLCJpc0ludGVyc2VjdGluZyIsImlzQWJvdmVWaWV3cG9ydCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNob3VsZFJlbmRlciIsInVzZUVmZmVjdCIsImNsYXNzZXMiLCJqb2luIiwiZGl2IiwicmVmIiwibWFwIiwiZmllbGQiLCJmaWVsZEluZGV4IiwiZmllbGRJc1ByZXNlbnRhdGlvbmFsIiwiZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSIsIkZpZWxkQ29tcG9uZW50IiwidHlwZSIsImhpZGRlbiIsImFkbWluIiwiZGlzYWJsZWQiLCJrZXkiLCJpc0ZpZWxkQWZmZWN0aW5nRGF0YSIsImZpZWxkQWZmZWN0c0RhdGEiLCJmaWVsZFBlcm1pc3Npb25zIiwibmFtZSIsInJlYWQiLCJwZXJtaXNzaW9uIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiQ3VzdG9tQ29tcG9uZW50IiwiY29tcG9uZW50cyIsIkZpZWxkIiwiRGVmYXVsdENvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwicGF0aCIsImxhYmVsIiwiZ2V0VHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBbUlBOzs7ZUFBQTs7OzZEQW5JMkM7NEJBQ1o7NEVBQ0c7bUVBQ1Q7cUJBRW1DO2lDQUMvQjs4QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyw4QkFBOEI7SUFDbENDLFlBQVk7QUFDZDtBQUVBLElBQU1DLGVBQWdDLFNBQUNDO1FBaUJOQyxRQUNQQSwyQkFBQUE7SUFqQnhCLElBQ0VDLGNBUUVGLE1BUkZFLGFBQ0FDLGFBT0VILE1BUEZHLFlBQ0FDLFNBTUVKLE1BTkZJLFFBQ0FDLGNBS0VMLE1BTEZLLGFBQ0FDLEFBQVVDLG1CQUlSUCxNQUpGTSxVQUNBRSxZQUdFUixNQUhGUSxXQUNBQyxjQUVFVCxNQUZGUyxhQUNBQyxBQUFXQyxvQkFDVFgsTUFERlU7SUFHRixJQUFvQkUsa0JBQUFBLElBQUFBLDRCQUFjLEVBQUMsWUFBM0JDLElBQVlELGdCQUFaQyxHQUFHQyxPQUFTRixnQkFBVEU7SUFDWCxJQUFzQ0MsNkJBQUFBLElBQUFBLGVBQVEsRUFBQ0MsUUFBUVAsbUJBQWhEUSxjQUErQkYsY0FBbEJHLGlCQUFrQkg7SUFDdEMsSUFBaUNJLGtDQUFBQSxJQUFBQSxxQkFBWSxFQUFDdEIsa0NBQXZDdUIsa0JBQTBCRCxtQkFBVGxCLFFBQVNrQjtJQUNqQyxJQUFNRSxZQUFZQyxJQUFBQSwrQkFBWTtJQUU5QixJQUFNQyxpQkFBaUJQLFNBQVFmLFNBQUFBLG1CQUFBQSw2QkFBQUEsT0FB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