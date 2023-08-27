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
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../../utilities/RenderCustomComponent"));
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../../ReactSelect"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../Button"));
var _Date = /*#__PURE__*/ _interop_require_default(require("./Date"));
var _Number = /*#__PURE__*/ _interop_require_default(require("./Number"));
var _Text = /*#__PURE__*/ _interop_require_default(require("./Text"));
var _Relationship = /*#__PURE__*/ _interop_require_default(require("./Relationship"));
var _Select = require("./Select");
var _useDebounce = /*#__PURE__*/ _interop_require_default(require("../../../../hooks/useDebounce"));
require("./index.scss");
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
var valueFields = {
    Date: _Date.default,
    Number: _Number.default,
    Text: _Text.default,
    Relationship: _Relationship.default,
    Select: _Select.Select
};
var baseClass = "condition";
var Condition = function(props) {
    var _value, _operatorAndValue, _operatorAndValue1, _activeField, _activeField1, _activeField_props_admin_components, _activeField_props_admin, _activeField_props, _activeField2, _activeField3;
    var fields = props.fields, dispatch = props.dispatch, value = props.value, orIndex = props.orIndex, andIndex = props.andIndex;
    var fieldValue = Object.keys(value)[0];
    var operatorAndValue = ((_value = value) === null || _value === void 0 ? void 0 : _value[fieldValue]) ? Object.entries(value[fieldValue])[0] : undefined;
    var operatorValue = (_operatorAndValue = operatorAndValue) === null || _operatorAndValue === void 0 ? void 0 : _operatorAndValue[0];
    var queryValue = (_operatorAndValue1 = operatorAndValue) === null || _operatorAndValue1 === void 0 ? void 0 : _operatorAndValue1[1];
    var _useState = _sliced_to_array((0, _react.useState)(function() {
        return fields.find(function(field) {
            return fieldValue === field.value;
        });
    }), 2), activeField = _useState[0], setActiveField = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(queryValue), 2), internalValue = _useState1[0], setInternalValue = _useState1[1];
    var debouncedValue = (0, _useDebounce.default)(internalValue, 300);
    (0, _react.useEffect)(function() {
        var newActiveField = fields.find(function(field) {
            return fieldValue === field.value;
        });
        if (newActiveField) {
            setActiveField(newActiveField);
        }
    }, [
        fieldValue,
        fields
    ]);
    (0, _react.useEffect)(function() {
        dispatch({
            type: "update",
            orIndex: orIndex,
            andIndex: andIndex,
            value: debouncedValue || ""
        });
    }, [
        debouncedValue,
        dispatch,
        orIndex,
        andIndex
    ]);
    var booleanSelect = [
        "exists"
    ].includes(operatorValue) || activeField.props.type === "checkbox";
    var ValueComponent = booleanSelect ? _Select.Select : valueFields[(_activeField = activeField) === null || _activeField === void 0 ? void 0 : _activeField.component] || valueFields.Text;
    var selectOptions;
    if (booleanSelect) {
        selectOptions = [
            "true",
            "false"
        ];
    } else if ("options" in ((_activeField1 = activeField) === null || _activeField1 === void 0 ? void 0 : _activeField1.props)) {
        selectOptions = activeField.props.options;
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__inputs")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__field")
    }, /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        value: fields.find(function(field) {
            return fieldValue === field.value;
        }),
        options: fields,
        onChange: function(field) {
            return dispatch({
                type: "update",
                orIndex: orIndex,
                andIndex: andIndex,
                field: field.value
            });
        }
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__operator")
    }, /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        disabled: !fieldValue,
        value: activeField.operators.find(function(operator) {
            return operatorValue === operator.value;
        }),
        options: activeField.operators,
        onChange: function(operator) {
            dispatch({
                type: "update",
                orIndex: orIndex,
                andIndex: andIndex,
                operator: operator.value
            });
        }
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__value")
    }, /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: (_activeField2 = activeField) === null || _activeField2 === void 0 ? void 0 : (_activeField_props = _activeField2.props) === null || _activeField_props === void 0 ? void 0 : (_activeField_props_admin = _activeField_props.admin) === null || _activeField_props_admin === void 0 ? void 0 : (_activeField_props_admin_components = _activeField_props_admin.components) === null || _activeField_props_admin_components === void 0 ? void 0 : _activeField_props_admin_components.Filter,
        DefaultComponent: ValueComponent,
        componentProps: _object_spread_props(_object_spread({}, (_activeField3 = activeField) === null || _activeField3 === void 0 ? void 0 : _activeField3.props), {
            options: selectOptions,
            operator: operatorValue,
            value: internalValue,
            onChange: setInternalValue
        })
    }))), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        icon: "x",
        className: "".concat(baseClass, "__actions-remove"),
        round: true,
        buttonStyle: "icon-label",
        iconStyle: "with-border",
        onClick: function() {
            return dispatch({
                type: "remove",
                orIndex: orIndex,
                andIndex: andIndex
            });
        }
    }), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        icon: "plus",
        className: "".concat(baseClass, "__actions-add"),
        round: true,
        buttonStyle: "icon-label",
        iconStyle: "with-border",
        onClick: function() {
            return dispatch({
                type: "add",
                field: fields[0].value,
                relation: "and",
                orIndex: orIndex,
                andIndex: andIndex + 1
            });
        }
    }))));
};
var _default = Condition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vUmVhY3RTZWxlY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9CdXR0b24nO1xuaW1wb3J0IERhdGUgZnJvbSAnLi9EYXRlJztcbmltcG9ydCBOdW1iZXIgZnJvbSAnLi9OdW1iZXInO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBSZWxhdGlvbnNoaXAgZnJvbSAnLi9SZWxhdGlvbnNoaXAnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZURlYm91bmNlJztcbmltcG9ydCB7IEZpZWxkQ29uZGl0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IHZhbHVlRmllbGRzID0ge1xuICBEYXRlLFxuICBOdW1iZXIsXG4gIFRleHQsXG4gIFJlbGF0aW9uc2hpcCxcbiAgU2VsZWN0LFxufTtcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbmRpdGlvbic7XG5cbmNvbnN0IENvbmRpdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgZGlzcGF0Y2gsXG4gICAgdmFsdWUsXG4gICAgb3JJbmRleCxcbiAgICBhbmRJbmRleCxcbiAgfSA9IHByb3BzO1xuICBjb25zdCBmaWVsZFZhbHVlID0gT2JqZWN0LmtleXModmFsdWUpWzBdO1xuICBjb25zdCBvcGVyYXRvckFuZFZhbHVlID0gdmFsdWU/LltmaWVsZFZhbHVlXSA/IE9iamVjdC5lbnRyaWVzKHZhbHVlW2ZpZWxkVmFsdWVdKVswXSA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBvcGVyYXRvclZhbHVlID0gb3BlcmF0b3JBbmRWYWx1ZT8uWzBdO1xuICBjb25zdCBxdWVyeVZhbHVlID0gb3BlcmF0b3JBbmRWYWx1ZT8uWzFdO1xuXG4gIGNvbnN0IFthY3RpdmVGaWVsZCwgc2V0QWN0aXZlRmllbGRdID0gdXNlU3RhdGU8RmllbGRDb25kaXRpb24+KCgpID0+IGZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRWYWx1ZSA9PT0gZmllbGQudmFsdWUpKTtcbiAgY29uc3QgW2ludGVybmFsVmFsdWUsIHNldEludGVybmFsVmFsdWVdID0gdXNlU3RhdGUocXVlcnlWYWx1ZSk7XG4gIGNvbnN0IGRlYm91bmNlZFZhbHVlID0gdXNlRGVib3VuY2UoaW50ZXJuYWxWYWx1ZSwgMzAwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0FjdGl2ZUZpZWxkID0gZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZFZhbHVlID09PSBmaWVsZC52YWx1ZSk7XG5cbiAgICBpZiAobmV3QWN0aXZlRmllbGQpIHtcbiAgICAgIHNldEFjdGl2ZUZpZWxkKG5ld0FjdGl2ZUZpZWxkKTtcbiAgICB9XG4gIH0sIFtmaWVsZFZhbHVlLCBmaWVsZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICd1cGRhdGUnLFxuICAgICAgb3JJbmRleCxcbiAgICAgIGFuZEluZGV4LFxuICAgICAgdmFsdWU6IGRlYm91bmNlZFZhbHVlIHx8ICcnLFxuICAgIH0pO1xuICB9LCBbZGVib3VuY2VkVmFsdWUsIGRpc3BhdGNoLCBvckluZGV4LCBhbmRJbmRleF0pO1xuXG4gIGNvbnN0IGJvb2xlYW5TZWxlY3QgPSBbJ2V4aXN0cyddLmluY2x1ZGVzKG9wZXJhdG9yVmFsdWUpIHx8IGFjdGl2ZUZpZWxkLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCc7XG4gIGNvbnN0IFZhbHVlQ29tcG9uZW50ID0gYm9vbGVhblNlbGVjdCA/IFNlbGVjdCA6ICh2YWx1ZUZpZWxkc1thY3RpdmVGaWVsZD8uY29tcG9uZW50XSB8fCB2YWx1ZUZpZWxkcy5UZXh0KTtcblxuICBsZXQgc2VsZWN0T3B0aW9ucztcbiAgaWYgKGJvb2xlYW5TZWxlY3QpIHtcbiAgICBzZWxlY3RPcHRpb25zID0gWyd0cnVlJywgJ2ZhbHNlJ107XG4gIH0gZWxzZSBpZiAoJ29wdGlvbnMnIGluIGFjdGl2ZUZpZWxkPy5wcm9wcykge1xuICAgIHNlbGVjdE9wdGlvbnMgPSBhY3RpdmVGaWVsZC5wcm9wcy5vcHRpb25zO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbnB1dHNgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZmllbGRgfT5cbiAgICAgICAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZFZhbHVlID09PSBmaWVsZC52YWx1ZSl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWVsZCkgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgIG9ySW5kZXgsXG4gICAgICAgICAgICAgICAgYW5kSW5kZXgsXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX29wZXJhdG9yYH0+XG4gICAgICAgICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFmaWVsZFZhbHVlfVxuICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlRmllbGQub3BlcmF0b3JzLmZpbmQoKG9wZXJhdG9yKSA9PiBvcGVyYXRvclZhbHVlID09PSBvcGVyYXRvci52YWx1ZSl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2FjdGl2ZUZpZWxkLm9wZXJhdG9yc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvcGVyYXRvcikgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgICAgb3JJbmRleCxcbiAgICAgICAgICAgICAgICAgIGFuZEluZGV4LFxuICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IG9wZXJhdG9yLnZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdmFsdWVgfT5cbiAgICAgICAgICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgICAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXthY3RpdmVGaWVsZD8ucHJvcHM/LmFkbWluPy5jb21wb25lbnRzPy5GaWx0ZXJ9XG4gICAgICAgICAgICAgIERlZmF1bHRDb21wb25lbnQ9e1ZhbHVlQ29tcG9uZW50fVxuICAgICAgICAgICAgICBjb21wb25lbnRQcm9wcz17e1xuICAgICAgICAgICAgICAgIC4uLmFjdGl2ZUZpZWxkPy5wcm9wcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBzZWxlY3RPcHRpb25zLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBvcGVyYXRvclZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcm5hbFZhbHVlLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZXRJbnRlcm5hbFZhbHVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25zYH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cInhcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25zLXJlbW92ZWB9XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIGljb25TdHlsZT1cIndpdGgtYm9yZGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgIG9ySW5kZXgsXG4gICAgICAgICAgICAgIGFuZEluZGV4LFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbnMtYWRkYH1cbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgaWNvblN0eWxlPVwid2l0aC1ib3JkZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkc1swXS52YWx1ZSxcbiAgICAgICAgICAgICAgcmVsYXRpb246ICdhbmQnLFxuICAgICAgICAgICAgICBvckluZGV4LFxuICAgICAgICAgICAgICBhbmRJbmRleDogYW5kSW5kZXggKyAxLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbjtcbiJdLCJuYW1lcyI6WyJ2YWx1ZUZpZWxkcyIsIkRhdGUiLCJOdW1iZXIiLCJUZXh0IiwiUmVsYXRpb25zaGlwIiwiU2VsZWN0IiwiYmFzZUNsYXNzIiwiQ29uZGl0aW9uIiwicHJvcHMiLCJ2YWx1ZSIsIm9wZXJhdG9yQW5kVmFsdWUiLCJhY3RpdmVGaWVsZCIsImZpZWxkcyIsImRpc3BhdGNoIiwib3JJbmRleCIsImFuZEluZGV4IiwiZmllbGRWYWx1ZSIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwidW5kZWZpbmVkIiwib3BlcmF0b3JWYWx1ZSIsInF1ZXJ5VmFsdWUiLCJ1c2VTdGF0ZSIsImZpbmQiLCJmaWVsZCIsInNldEFjdGl2ZUZpZWxkIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJkZWJvdW5jZWRWYWx1ZSIsInVzZURlYm91bmNlIiwidXNlRWZmZWN0IiwibmV3QWN0aXZlRmllbGQiLCJ0eXBlIiwiYm9vbGVhblNlbGVjdCIsImluY2x1ZGVzIiwiVmFsdWVDb21wb25lbnQiLCJjb21wb25lbnQiLCJzZWxlY3RPcHRpb25zIiwib3B0aW9ucyIsImRpdiIsImNsYXNzTmFtZSIsIlJlYWN0U2VsZWN0Iiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsIm9wZXJhdG9ycyIsIm9wZXJhdG9yIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiQ3VzdG9tQ29tcG9uZW50IiwiYWRtaW4iLCJjb21wb25lbnRzIiwiRmlsdGVyIiwiRGVmYXVsdENvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiQnV0dG9uIiwiaWNvbiIsInJvdW5kIiwiYnV0dG9uU3R5bGUiLCJpY29uU3R5bGUiLCJvbkNsaWNrIiwicmVsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBb0pBOzs7ZUFBQTs7OzZEQXBKMkM7NEVBRVQ7a0VBQ1Y7NkRBQ0w7MkRBQ0Y7NkRBQ0U7MkRBQ0Y7bUVBQ1E7c0JBQ0Y7a0VBQ0M7UUFHakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsY0FBYztJQUNsQkMsTUFBQUEsYUFBSTtJQUNKQyxRQUFBQSxlQUFNO0lBQ05DLE1BQUFBLGFBQUk7SUFDSkMsY0FBQUEscUJBQVk7SUFDWkMsUUFBQUEsY0FBTTtBQUNSO0FBRUEsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxZQUE2QixTQUFDQztRQVNUQyxRQUVIQyxtQkFDSEEsb0JBd0IwQ0MsY0FLckNBLGVBcUNLQSxxQ0FBQUEsMEJBQUFBLG9CQUFBQSxlQUdaQTtJQWhGakIsSUFDRUMsU0FLRUosTUFMRkksUUFDQUMsV0FJRUwsTUFKRkssVUFDQUosUUFHRUQsTUFIRkMsT0FDQUssVUFFRU4sTUFGRk0sU0FDQUMsV0FDRVAsTUFERk87SUFFRixJQUFNQyxhQUFhQyxPQUFPQyxJQUFJLENBQUNULE1BQU0sQ0FBQyxFQUFFO0lBQ3hDLElBQU1DLG1CQUFtQkQsRUFBQUEsU0FBQUEsbUJBQUFBLDZCQUFBQSxNQUFPLENBQUNPLFdBQVcsSUFBR0MsT0FBT0UsT0FBTyxDQUFDVixLQUFLLENBQUNPLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBR0k7SUFFdEYsSUFBTUMsaUJBQWdCWCxvQkFBQUEsOEJBQUFBLHdDQUFBQSxpQkFBa0IsQ0FBQyxFQUFFO0lBQzND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