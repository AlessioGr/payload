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
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import useIntersect from "../../../hooks/useIntersect";
import { fieldAffectsData, fieldIsPresentationalOnly } from "../../../../fields/config/types";
import { useOperation } from "../../utilities/OperationProvider";
import { getTranslation } from "../../../../utilities/getTranslation";
var baseClass = "render-fields";
var intersectionObserverOptions = {
    rootMargin: "1000px"
};
var RenderFields = function(props) {
    var _entry, _entry_boundingClientRect, _entry1;
    var fieldSchema = props.fieldSchema, fieldTypes = props.fieldTypes, filter = props.filter, permissions = props.permissions, readOnlyOverride = props.readOnly, className = props.className, forceRender = props.forceRender, incomingIndexPath = props.indexPath;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array(useState(Boolean(forceRender)), 2), hasRendered = _useState[0], setHasRendered = _useState[1];
    var _useIntersect = _sliced_to_array(useIntersect(intersectionObserverOptions), 2), intersectionRef = _useIntersect[0], entry = _useIntersect[1];
    var operation = useOperation();
    var isIntersecting = Boolean((_entry = entry) === null || _entry === void 0 ? void 0 : _entry.isIntersecting);
    var isAboveViewport = ((_entry1 = entry) === null || _entry1 === void 0 ? void 0 : (_entry_boundingClientRect = _entry1.boundingClientRect) === null || _entry_boundingClientRect === void 0 ? void 0 : _entry_boundingClientRect.top) < 0;
    var shouldRender = forceRender || isIntersecting || isAboveViewport;
    useEffect(function() {
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
        return /*#__PURE__*/ React.createElement("div", {
            ref: intersectionRef,
            className: classes
        }, hasRendered && fieldSchema.map(function(field, fieldIndex) {
            var _field, _field_admin, _field1;
            var fieldIsPresentational = fieldIsPresentationalOnly(field);
            var FieldComponent = fieldTypes[field.type];
            if (fieldIsPresentational || !((_field = field) === null || _field === void 0 ? void 0 : _field.hidden) && ((_field1 = field) === null || _field1 === void 0 ? void 0 : (_field_admin = _field1.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.disabled) !== true) {
                if (filter && typeof filter === "function" && filter(field) || !filter) {
                    var _field_admin1, _field2, _permissions, _permissions_field_name_read, _permissions_field_name, _field3, _permissions1;
                    if (fieldIsPresentational) {
                        return /*#__PURE__*/ React.createElement(FieldComponent, _object_spread_props(_object_spread({}, field), {
                            key: fieldIndex
                        }));
                    }
                    if ((_field2 = field) === null || _field2 === void 0 ? void 0 : (_field_admin1 = _field2.admin) === null || _field_admin1 === void 0 ? void 0 : _field_admin1.hidden) {
                        FieldComponent = fieldTypes.hidden;
                    }
                    var isFieldAffectingData = fieldAffectsData(field);
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
                            return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
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
                        return /*#__PURE__*/ React.createElement("div", {
                            className: "missing-field",
                            key: fieldIndex
                        }, t("error:noMatchedField", {
                            label: fieldAffectsData(field) ? getTranslation(field.label || field.name, i18n) : field.path
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
export default RenderFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL1JlbmRlckZpZWxkcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcbmltcG9ydCB1c2VJbnRlcnNlY3QgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlSW50ZXJzZWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhLCBmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB1c2VPcGVyYXRpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvT3BlcmF0aW9uUHJvdmlkZXInO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmVuZGVyLWZpZWxkcyc7XG5cbmNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyT3B0aW9ucyA9IHtcbiAgcm9vdE1hcmdpbjogJzEwMDBweCcsXG59O1xuXG5jb25zdCBSZW5kZXJGaWVsZHM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGRTY2hlbWEsXG4gICAgZmllbGRUeXBlcyxcbiAgICBmaWx0ZXIsXG4gICAgcGVybWlzc2lvbnMsXG4gICAgcmVhZE9ubHk6IHJlYWRPbmx5T3ZlcnJpZGUsXG4gICAgY2xhc3NOYW1lLFxuICAgIGZvcmNlUmVuZGVyLFxuICAgIGluZGV4UGF0aDogaW5jb21pbmdJbmRleFBhdGgsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IFtoYXNSZW5kZXJlZCwgc2V0SGFzUmVuZGVyZWRdID0gdXNlU3RhdGUoQm9vbGVhbihmb3JjZVJlbmRlcikpO1xuICBjb25zdCBbaW50ZXJzZWN0aW9uUmVmLCBlbnRyeV0gPSB1c2VJbnRlcnNlY3QoaW50ZXJzZWN0aW9uT2JzZXJ2ZXJPcHRpb25zKTtcbiAgY29uc3Qgb3BlcmF0aW9uID0gdXNlT3BlcmF0aW9uKCk7XG5cbiAgY29uc3QgaXNJbnRlcnNlY3RpbmcgPSBCb29sZWFuKGVudHJ5Py5pc0ludGVyc2VjdGluZyk7XG4gIGNvbnN0IGlzQWJvdmVWaWV3cG9ydCA9IGVudHJ5Py5ib3VuZGluZ0NsaWVudFJlY3Q/LnRvcCA8IDA7XG4gIGNvbnN0IHNob3VsZFJlbmRlciA9IGZvcmNlUmVuZGVyIHx8IGlzSW50ZXJzZWN0aW5nIHx8IGlzQWJvdmVWaWV3cG9ydDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaG91bGRSZW5kZXIgJiYgIWhhc1JlbmRlcmVkKSB7XG4gICAgICBzZXRIYXNSZW5kZXJlZCh0cnVlKTtcbiAgICB9XG4gIH0sIFtzaG91bGRSZW5kZXIsIGhhc1JlbmRlcmVkXSk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgY2xhc3NOYW1lLFxuICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG5cbiAgaWYgKGZpZWxkU2NoZW1hKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtpbnRlcnNlY3Rpb25SZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgID5cbiAgICAgICAge2hhc1JlbmRlcmVkICYmIChcbiAgICAgICAgICBmaWVsZFNjaGVtYS5tYXAoKGZpZWxkLCBmaWVsZEluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZElzUHJlc2VudGF0aW9uYWwgPSBmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5KGZpZWxkKTtcbiAgICAgICAgICAgIGxldCBGaWVsZENvbXBvbmVudCA9IGZpZWxkVHlwZXNbZmllbGQudHlwZV07XG5cbiAgICAgICAgICAgIGlmIChmaWVsZElzUHJlc2VudGF0aW9uYWwgfHwgKCFmaWVsZD8uaGlkZGVuICYmIGZpZWxkPy5hZG1pbj8uZGlzYWJsZWQgIT09IHRydWUpKSB7XG4gICAgICAgICAgICAgIGlmICgoZmlsdGVyICYmIHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgZmlsdGVyKGZpZWxkKSkgfHwgIWZpbHRlcikge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZElzUHJlc2VudGF0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmaWVsZD8uYWRtaW4/LmhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgRmllbGRDb21wb25lbnQgPSBmaWVsZFR5cGVzLmhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpc0ZpZWxkQWZmZWN0aW5nRGF0YSA9IGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRQZXJtaXNzaW9ucyA9IGlzRmllbGRBZmZlY3RpbmdEYXRhID8gcGVybWlzc2lvbnM/LltmaWVsZC5uYW1lXSA6IHBlcm1pc3Npb25zO1xuXG4gICAgICAgICAgICAgICAgbGV0IHsgYWRtaW46IHsgcmVhZE9ubHkgfSA9IHt9IH0gPSBmaWVsZDtcblxuICAgICAgICAgICAgICAgIGlmIChyZWFkT25seU92ZXJyaWRlICYmIHJlYWRPbmx5ICE9PSBmYWxzZSkgcmVhZE9ubHkgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKChpc0ZpZWxkQWZmZWN0aW5nRGF0YSAmJiBwZXJtaXNzaW9ucz8uW2ZpZWxkPy5uYW1lXT8ucmVhZD8ucGVybWlzc2lvbiAhPT0gZmFsc2UpIHx8ICFpc0ZpZWxkQWZmZWN0aW5nRGF0YSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzRmllbGRBZmZlY3RpbmdEYXRhICYmIHBlcm1pc3Npb25zPy5bZmllbGQ/Lm5hbWVdPy5bb3BlcmF0aW9uXT8ucGVybWlzc2lvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoRmllbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21Db21wb25lbnQ9e2ZpZWxkPy5hZG1pbj8uY29tcG9uZW50cz8uRmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0Q29tcG9uZW50PXtGaWVsZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBmaWVsZC5wYXRoIHx8IChpc0ZpZWxkQWZmZWN0aW5nRGF0YSA/IGZpZWxkLm5hbWUgOiAnJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4UGF0aDogaW5jb21pbmdJbmRleFBhdGggPyBgJHtpbmNvbWluZ0luZGV4UGF0aH0uJHtmaWVsZEluZGV4fWAgOiBgJHtmaWVsZEluZGV4fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFkbWluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uKGZpZWxkLmFkbWluIHx8IHt9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGZpZWxkUGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaXNzaW5nLWZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnZXJyb3I6bm9NYXRjaGVkRmllbGQnLCB7IGxhYmVsOiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSA/IGdldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVsIHx8IGZpZWxkLm5hbWUsIGkxOG4pIDogZmllbGQucGF0aCB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9KVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyRmllbGRzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsInVzZUludGVyc2VjdCIsImZpZWxkQWZmZWN0c0RhdGEiLCJmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IiwidXNlT3BlcmF0aW9uIiwiZ2V0VHJhbnNsYXRpb24iLCJiYXNlQ2xhc3MiLCJpbnRlcnNlY3Rpb25PYnNlcnZlck9wdGlvbnMiLCJyb290TWFyZ2luIiwiUmVuZGVyRmllbGRzIiwicHJvcHMiLCJlbnRyeSIsImZpZWxkU2NoZW1hIiwiZmllbGRUeXBlcyIsImZpbHRlciIsInBlcm1pc3Npb25zIiwicmVhZE9ubHkiLCJyZWFkT25seU92ZXJyaWRlIiwiY2xhc3NOYW1lIiwiZm9yY2VSZW5kZXIiLCJpbmRleFBhdGgiLCJpbmNvbWluZ0luZGV4UGF0aCIsInQiLCJpMThuIiwiQm9vbGVhbiIsImhhc1JlbmRlcmVkIiwic2V0SGFzUmVuZGVyZWQiLCJpbnRlcnNlY3Rpb25SZWYiLCJvcGVyYXRpb24iLCJpc0ludGVyc2VjdGluZyIsImlzQWJvdmVWaWV3cG9ydCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInNob3VsZFJlbmRlciIsImNsYXNzZXMiLCJqb2luIiwiZGl2IiwicmVmIiwibWFwIiwiZmllbGQiLCJmaWVsZEluZGV4IiwiZmllbGRJc1ByZXNlbnRhdGlvbmFsIiwiRmllbGRDb21wb25lbnQiLCJ0eXBlIiwiaGlkZGVuIiwiYWRtaW4iLCJkaXNhYmxlZCIsImtleSIsImlzRmllbGRBZmZlY3RpbmdEYXRhIiwiZmllbGRQZXJtaXNzaW9ucyIsIm5hbWUiLCJyZWFkIiwicGVybWlzc2lvbiIsIkN1c3RvbUNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJGaWVsZCIsIkRlZmF1bHRDb21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsInBhdGgiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQ25ELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsT0FBT0MsMkJBQTJCLHdDQUF3QztBQUMxRSxPQUFPQyxrQkFBa0IsOEJBQThCO0FBRXZELFNBQVNDLGdCQUFnQixFQUFFQyx5QkFBeUIsUUFBUSxrQ0FBa0M7QUFDOUYsU0FBU0MsWUFBWSxRQUFRLG9DQUFvQztBQUNqRSxTQUFTQyxjQUFjLFFBQVEsdUNBQXVDO0FBRXRFLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsOEJBQThCO0lBQ2xDQyxZQUFZO0FBQ2Q7QUFFQSxJQUFNQyxlQUFnQyxTQUFDQztRQWlCTkMsUUFDUEEsMkJBQUFBO0lBakJ4QixJQUNFQyxjQVFFRixNQVJGRSxhQUNBQyxhQU9FSCxNQVBGRyxZQUNBQyxTQU1FSixNQU5GSSxRQUNBQyxjQUtFTCxNQUxGSyxhQUNBQyxBQUFVQyxtQkFJUlAsTUFKRk0sVUFDQUUsWUFHRVIsTUFIRlEsV0FDQUMsY0FFRVQsTUFGRlMsYUFDQUMsQUFBV0Msb0JBQ1RYLE1BREZVO0lBR0YsSUFBb0JyQixrQkFBQUEsZUFBZSxZQUEzQnVCLElBQVl2QixnQkFBWnVCLEdBQUdDLE9BQVN4QixnQkFBVHdCO0lBQ1gsSUFBc0N6Qiw2QkFBQUEsU0FBUzBCLFFBQVFMLG1CQUFoRE0sY0FBK0IzQixjQUFsQjRCLGlCQUFrQjVCO0lBQ3RDLElBQWlDRyxpQ0FBQUEsYUFBYU0sa0NBQXZDb0Isa0JBQTBCMUIsa0JBQVRVLFFBQVNWO0lBQ2pDLElBQU0yQixZQUFZeEI7SUFFbEIsSUFBTXlCLGlCQUFpQkwsU0FBUWIsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPa0IsY0FBYztJQUNwRCxJQUFNQyxrQkFBa0JuQixFQUFBQSxVQUFBQSxtQkFBQUEsK0JBQUFBLDRCQUFBQSxRQUFPb0Isa0JBQWtCLGNBQXpCcEIsZ0RBQUFBLDBCQUEyQnFCLEdBQUcsSUFBRztJQUN6RCxJQUFNQyxlQUFlZCxlQUFlVSxrQkFBa0JDO0lBRXREakMsVUFBVTtRQUNSLElBQUlvQyxnQkFBZ0IsQ0FBQ1IsYUFBYTtZQUNoQ0MsZUFBZTtRQUNqQjtJQUNGLEdBQUc7UUFBQ087UUFBY1I7S0FBWTtJQUU5QixJQUFNUyxVQUFVO1FBQ2Q1QjtRQUNBWTtLQUNELENBQUNKLE1BQU0sQ0FBQ1UsU0FBU1csSUFBSSxDQUFDO0lBRXZCLElBQUl2QixhQUFhO1FBQ2YscUJBQ0Usb0JBQUN3QjtZQUNDQyxLQUFLVjtZQUNMVCxXQUFXZ0I7V0FFVlQsZUFDQ2IsWUFBWTBCLEdBQUcsQ0FBQyxTQUFDQyxPQUFPQztnQkFJU0QsUUFBaUJBLGNBQUFBO1lBSGhELElBQU1FLHdCQUF3QnRDLDBCQUEwQm9DO1lBQ3hELElBQUlHLGlCQUFpQjdCLFVBQVUsQ0FBQzBCLE1BQU1JLElBQUksQ0FBQztZQUUzQyxJQUFJRix5QkFBMEIsR0FBQ0YsU0FBQUEsbUJBQUFBLDZCQUFBQSxPQUFPSyxNQUFNLEtBQUlMLEVBQUFBLFVBQUFBLG1CQUFBQSwrQkFBQUEsZUFBQUEsUUFBT00sS0FBSyxjQUFaTixtQ0FBQUEsYUFBY08sUUFBUSxNQUFLLE1BQU87Z0JBQ2hGLElBQUksQUFBQ2hDLFVBQVUsT0FBT0EsV0FBVyxjQUFjQSxPQUFPeUIsVUFBVyxDQUFDekIsUUFBUTt3QkFVcEV5QixlQUFBQSxTQU00Q3hCLGNBTW5CQSw4QkFBQUEseUJBQWN3QixTQUFkeEI7b0JBckI3QixJQUFJMEIsdUJBQXVCO3dCQUN6QixxQkFDRSxvQkFBQ0Msd0RBQ0tIOzRCQUNKUSxLQUFLUDs7b0JBR1g7b0JBRUEsS0FBSUQsVUFBQUEsbUJBQUFBLCtCQUFBQSxnQkFBQUEsUUFBT00sS0FBSyxjQUFaTixvQ0FBQUEsY0FBY0ssTUFBTSxFQUFFO3dCQUN4QkYsaUJBQWlCN0IsV0FBVytCLE1BQU07b0JBQ3BDO29CQUVBLElBQU1JLHVCQUF1QjlDLGlCQUFpQnFDO29CQUU5QyxJQUFNVSxtQkFBbUJELHdCQUF1QmpDLGVBQUFBLHlCQUFBQSxtQ0FBQUEsWUFBYSxDQUFDd0IsTUFBTVcsSUFBSSxDQUFDLEdBQUduQztvQkFFNUUsSUFBYSxNQUFzQndCLE1BQTdCTSxPQUFPLEFBQUU3QixZQUFGLGlCQUFlLENBQUMsSUFBaEIsS0FBRUE7b0JBRWYsSUFBSUMsb0JBQW9CRCxhQUFhLE9BQU9BLFdBQVc7b0JBRXZELElBQUksQUFBQ2dDLHdCQUF3QmpDLEVBQUFBLGdCQUFBQSx5QkFBQUEscUNBQUFBLDBCQUFBQSxhQUFhLEVBQUN3QixVQUFBQSxtQkFBQUEsOEJBQUFBLFFBQU9XLElBQUksQ0FBQyxjQUExQm5DLCtDQUFBQSwrQkFBQUEsd0JBQTRCb0MsSUFBSSxjQUFoQ3BDLG1EQUFBQSw2QkFBa0NxQyxVQUFVLE1BQUssU0FBVSxDQUFDSixzQkFBc0I7NEJBQ2pGakMsbUNBQUFBLDBCQUFjd0IsU0FBZHhCO3dCQUE1QixJQUFJaUMsd0JBQXdCakMsRUFBQUEsZ0JBQUFBLHlCQUFBQSxxQ0FBQUEsMkJBQUFBLGFBQWEsRUFBQ3dCLFVBQUFBLG1CQUFBQSw4QkFBQUEsUUFBT1csSUFBSSxDQUFDLGNBQTFCbkMsZ0RBQUFBLG9DQUFBQSx3QkFBNEIsQ0FBQ2EsVUFBVSxjQUF2Q2Isd0RBQUFBLGtDQUF5Q3FDLFVBQVUsTUFBSyxPQUFPOzRCQUN6RnBDLFdBQVc7d0JBQ2I7d0JBRUEsSUFBSTBCLGdCQUFnQjtnQ0FJR0gseUJBQUFBLGVBQUFBOzRCQUhyQixxQkFDRSxvQkFBQ3ZDO2dDQUNDK0MsS0FBS1A7Z0NBQ0xhLGVBQWUsR0FBRWQsVUFBQUEsbUJBQUFBLCtCQUFBQSxnQkFBQUEsUUFBT00sS0FBSyxjQUFaTixxQ0FBQUEsMEJBQUFBLGNBQWNlLFVBQVUsY0FBeEJmLDhDQUFBQSx3QkFBMEJnQixLQUFLO2dDQUNoREMsa0JBQWtCZDtnQ0FDbEJlLGdCQUFnQix3Q0FDWGxCO29DQUNIbUIsTUFBTW5CLE1BQU1tQixJQUFJLElBQUtWLENBQUFBLHVCQUF1QlQsTUFBTVcsSUFBSSxHQUFHLEVBQUM7b0NBQzFEckMsWUFBQUE7b0NBQ0FPLFdBQVdDLG9CQUFvQixBQUFDLEdBQXVCbUIsT0FBckJuQixtQkFBa0IsS0FBYyxPQUFYbUIsY0FBZSxBQUFDLEdBQWEsT0FBWEE7b0NBQ3pFSyxPQUFPLHdDQUNETixNQUFNTSxLQUFLLElBQUksQ0FBQzt3Q0FDcEI3QixVQUFBQTs7b0NBRUZELGFBQWFrQzs7O3dCQUlyQjt3QkFFQSxxQkFDRSxvQkFBQ2I7NEJBQ0NsQixXQUFVOzRCQUNWNkIsS0FBS1A7MkJBRUpsQixFQUFFLHdCQUF3Qjs0QkFBRXFDLE9BQU96RCxpQkFBaUJxQyxTQUFTbEMsZUFBZWtDLE1BQU1vQixLQUFLLElBQUlwQixNQUFNVyxJQUFJLEVBQUUzQixRQUFRZ0IsTUFBTW1CLElBQUk7d0JBQUM7b0JBR2pJO2dCQUNGO2dCQUVBLE9BQU87WUFDVDtZQUVBLE9BQU87UUFDVDtJQUlSO0lBRUEsT0FBTztBQUNUO0FBRUEsZUFBZWpELGFBQWEifQ==