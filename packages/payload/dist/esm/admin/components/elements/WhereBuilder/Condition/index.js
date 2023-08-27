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
import React, { useState, useEffect } from "react";
import RenderCustomComponent from "../../../utilities/RenderCustomComponent";
import ReactSelect from "../../ReactSelect";
import Button from "../../Button";
import Date from "./Date";
import Number from "./Number";
import Text from "./Text";
import Relationship from "./Relationship";
import { Select } from "./Select";
import useDebounce from "../../../../hooks/useDebounce";
import "./index.scss";
var valueFields = {
    Date: Date,
    Number: Number,
    Text: Text,
    Relationship: Relationship,
    Select: Select
};
var baseClass = "condition";
var Condition = function(props) {
    var _value, _operatorAndValue, _operatorAndValue1, _activeField, _activeField1, _activeField_props_admin_components, _activeField_props_admin, _activeField_props, _activeField2, _activeField3;
    var fields = props.fields, dispatch = props.dispatch, value = props.value, orIndex = props.orIndex, andIndex = props.andIndex;
    var fieldValue = Object.keys(value)[0];
    var operatorAndValue = ((_value = value) === null || _value === void 0 ? void 0 : _value[fieldValue]) ? Object.entries(value[fieldValue])[0] : undefined;
    var operatorValue = (_operatorAndValue = operatorAndValue) === null || _operatorAndValue === void 0 ? void 0 : _operatorAndValue[0];
    var queryValue = (_operatorAndValue1 = operatorAndValue) === null || _operatorAndValue1 === void 0 ? void 0 : _operatorAndValue1[1];
    var _useState = _sliced_to_array(useState(function() {
        return fields.find(function(field) {
            return fieldValue === field.value;
        });
    }), 2), activeField = _useState[0], setActiveField = _useState[1];
    var _useState1 = _sliced_to_array(useState(queryValue), 2), internalValue = _useState1[0], setInternalValue = _useState1[1];
    var debouncedValue = useDebounce(internalValue, 300);
    useEffect(function() {
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
    useEffect(function() {
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
    var ValueComponent = booleanSelect ? Select : valueFields[(_activeField = activeField) === null || _activeField === void 0 ? void 0 : _activeField.component] || valueFields.Text;
    var selectOptions;
    if (booleanSelect) {
        selectOptions = [
            "true",
            "false"
        ];
    } else if ("options" in ((_activeField1 = activeField) === null || _activeField1 === void 0 ? void 0 : _activeField1.props)) {
        selectOptions = activeField.props.options;
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__inputs")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__field")
    }, /*#__PURE__*/ React.createElement(ReactSelect, {
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
    })), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__operator")
    }, /*#__PURE__*/ React.createElement(ReactSelect, {
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
    })), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__value")
    }, /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        CustomComponent: (_activeField2 = activeField) === null || _activeField2 === void 0 ? void 0 : (_activeField_props = _activeField2.props) === null || _activeField_props === void 0 ? void 0 : (_activeField_props_admin = _activeField_props.admin) === null || _activeField_props_admin === void 0 ? void 0 : (_activeField_props_admin_components = _activeField_props_admin.components) === null || _activeField_props_admin_components === void 0 ? void 0 : _activeField_props_admin_components.Filter,
        DefaultComponent: ValueComponent,
        componentProps: _object_spread_props(_object_spread({}, (_activeField3 = activeField) === null || _activeField3 === void 0 ? void 0 : _activeField3.props), {
            options: selectOptions,
            operator: operatorValue,
            value: internalValue,
            onChange: setInternalValue
        })
    }))), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, /*#__PURE__*/ React.createElement(Button, {
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
    }), /*#__PURE__*/ React.createElement(Button, {
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
export default Condition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vUmVhY3RTZWxlY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9CdXR0b24nO1xuaW1wb3J0IERhdGUgZnJvbSAnLi9EYXRlJztcbmltcG9ydCBOdW1iZXIgZnJvbSAnLi9OdW1iZXInO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBSZWxhdGlvbnNoaXAgZnJvbSAnLi9SZWxhdGlvbnNoaXAnO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZURlYm91bmNlJztcbmltcG9ydCB7IEZpZWxkQ29uZGl0aW9uIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IHZhbHVlRmllbGRzID0ge1xuICBEYXRlLFxuICBOdW1iZXIsXG4gIFRleHQsXG4gIFJlbGF0aW9uc2hpcCxcbiAgU2VsZWN0LFxufTtcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbmRpdGlvbic7XG5cbmNvbnN0IENvbmRpdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgZGlzcGF0Y2gsXG4gICAgdmFsdWUsXG4gICAgb3JJbmRleCxcbiAgICBhbmRJbmRleCxcbiAgfSA9IHByb3BzO1xuICBjb25zdCBmaWVsZFZhbHVlID0gT2JqZWN0LmtleXModmFsdWUpWzBdO1xuICBjb25zdCBvcGVyYXRvckFuZFZhbHVlID0gdmFsdWU/LltmaWVsZFZhbHVlXSA/IE9iamVjdC5lbnRyaWVzKHZhbHVlW2ZpZWxkVmFsdWVdKVswXSA6IHVuZGVmaW5lZDtcblxuICBjb25zdCBvcGVyYXRvclZhbHVlID0gb3BlcmF0b3JBbmRWYWx1ZT8uWzBdO1xuICBjb25zdCBxdWVyeVZhbHVlID0gb3BlcmF0b3JBbmRWYWx1ZT8uWzFdO1xuXG4gIGNvbnN0IFthY3RpdmVGaWVsZCwgc2V0QWN0aXZlRmllbGRdID0gdXNlU3RhdGU8RmllbGRDb25kaXRpb24+KCgpID0+IGZpZWxkcy5maW5kKChmaWVsZCkgPT4gZmllbGRWYWx1ZSA9PT0gZmllbGQudmFsdWUpKTtcbiAgY29uc3QgW2ludGVybmFsVmFsdWUsIHNldEludGVybmFsVmFsdWVdID0gdXNlU3RhdGUocXVlcnlWYWx1ZSk7XG4gIGNvbnN0IGRlYm91bmNlZFZhbHVlID0gdXNlRGVib3VuY2UoaW50ZXJuYWxWYWx1ZSwgMzAwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0FjdGl2ZUZpZWxkID0gZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZFZhbHVlID09PSBmaWVsZC52YWx1ZSk7XG5cbiAgICBpZiAobmV3QWN0aXZlRmllbGQpIHtcbiAgICAgIHNldEFjdGl2ZUZpZWxkKG5ld0FjdGl2ZUZpZWxkKTtcbiAgICB9XG4gIH0sIFtmaWVsZFZhbHVlLCBmaWVsZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICd1cGRhdGUnLFxuICAgICAgb3JJbmRleCxcbiAgICAgIGFuZEluZGV4LFxuICAgICAgdmFsdWU6IGRlYm91bmNlZFZhbHVlIHx8ICcnLFxuICAgIH0pO1xuICB9LCBbZGVib3VuY2VkVmFsdWUsIGRpc3BhdGNoLCBvckluZGV4LCBhbmRJbmRleF0pO1xuXG4gIGNvbnN0IGJvb2xlYW5TZWxlY3QgPSBbJ2V4aXN0cyddLmluY2x1ZGVzKG9wZXJhdG9yVmFsdWUpIHx8IGFjdGl2ZUZpZWxkLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCc7XG4gIGNvbnN0IFZhbHVlQ29tcG9uZW50ID0gYm9vbGVhblNlbGVjdCA/IFNlbGVjdCA6ICh2YWx1ZUZpZWxkc1thY3RpdmVGaWVsZD8uY29tcG9uZW50XSB8fCB2YWx1ZUZpZWxkcy5UZXh0KTtcblxuICBsZXQgc2VsZWN0T3B0aW9ucztcbiAgaWYgKGJvb2xlYW5TZWxlY3QpIHtcbiAgICBzZWxlY3RPcHRpb25zID0gWyd0cnVlJywgJ2ZhbHNlJ107XG4gIH0gZWxzZSBpZiAoJ29wdGlvbnMnIGluIGFjdGl2ZUZpZWxkPy5wcm9wcykge1xuICAgIHNlbGVjdE9wdGlvbnMgPSBhY3RpdmVGaWVsZC5wcm9wcy5vcHRpb25zO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbnB1dHNgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZmllbGRgfT5cbiAgICAgICAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17ZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZFZhbHVlID09PSBmaWVsZC52YWx1ZSl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWVsZCkgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgIG9ySW5kZXgsXG4gICAgICAgICAgICAgICAgYW5kSW5kZXgsXG4gICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX29wZXJhdG9yYH0+XG4gICAgICAgICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFmaWVsZFZhbHVlfVxuICAgICAgICAgICAgICB2YWx1ZT17YWN0aXZlRmllbGQub3BlcmF0b3JzLmZpbmQoKG9wZXJhdG9yKSA9PiBvcGVyYXRvclZhbHVlID09PSBvcGVyYXRvci52YWx1ZSl9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2FjdGl2ZUZpZWxkLm9wZXJhdG9yc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhvcGVyYXRvcikgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd1cGRhdGUnLFxuICAgICAgICAgICAgICAgICAgb3JJbmRleCxcbiAgICAgICAgICAgICAgICAgIGFuZEluZGV4LFxuICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IG9wZXJhdG9yLnZhbHVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdmFsdWVgfT5cbiAgICAgICAgICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgICAgICAgICAgQ3VzdG9tQ29tcG9uZW50PXthY3RpdmVGaWVsZD8ucHJvcHM/LmFkbWluPy5jb21wb25lbnRzPy5GaWx0ZXJ9XG4gICAgICAgICAgICAgIERlZmF1bHRDb21wb25lbnQ9e1ZhbHVlQ29tcG9uZW50fVxuICAgICAgICAgICAgICBjb21wb25lbnRQcm9wcz17e1xuICAgICAgICAgICAgICAgIC4uLmFjdGl2ZUZpZWxkPy5wcm9wcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBzZWxlY3RPcHRpb25zLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBvcGVyYXRvclZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBpbnRlcm5hbFZhbHVlLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBzZXRJbnRlcm5hbFZhbHVlLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25zYH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cInhcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY3Rpb25zLXJlbW92ZWB9XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIGljb25TdHlsZT1cIndpdGgtYm9yZGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ3JlbW92ZScsXG4gICAgICAgICAgICAgIG9ySW5kZXgsXG4gICAgICAgICAgICAgIGFuZEluZGV4LFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbnMtYWRkYH1cbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgaWNvblN0eWxlPVwid2l0aC1ib3JkZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiAnYWRkJyxcbiAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkc1swXS52YWx1ZSxcbiAgICAgICAgICAgICAgcmVsYXRpb246ICdhbmQnLFxuICAgICAgICAgICAgICBvckluZGV4LFxuICAgICAgICAgICAgICBhbmRJbmRleDogYW5kSW5kZXggKyAxLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiUmVhY3RTZWxlY3QiLCJCdXR0b24iLCJEYXRlIiwiTnVtYmVyIiwiVGV4dCIsIlJlbGF0aW9uc2hpcCIsIlNlbGVjdCIsInVzZURlYm91bmNlIiwidmFsdWVGaWVsZHMiLCJiYXNlQ2xhc3MiLCJDb25kaXRpb24iLCJwcm9wcyIsInZhbHVlIiwib3BlcmF0b3JBbmRWYWx1ZSIsImFjdGl2ZUZpZWxkIiwiZmllbGRzIiwiZGlzcGF0Y2giLCJvckluZGV4IiwiYW5kSW5kZXgiLCJmaWVsZFZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJ1bmRlZmluZWQiLCJvcGVyYXRvclZhbHVlIiwicXVlcnlWYWx1ZSIsImZpbmQiLCJmaWVsZCIsInNldEFjdGl2ZUZpZWxkIiwiaW50ZXJuYWxWYWx1ZSIsInNldEludGVybmFsVmFsdWUiLCJkZWJvdW5jZWRWYWx1ZSIsIm5ld0FjdGl2ZUZpZWxkIiwidHlwZSIsImJvb2xlYW5TZWxlY3QiLCJpbmNsdWRlcyIsIlZhbHVlQ29tcG9uZW50IiwiY29tcG9uZW50Iiwic2VsZWN0T3B0aW9ucyIsIm9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNoYW5nZSIsImRpc2FibGVkIiwib3BlcmF0b3JzIiwib3BlcmF0b3IiLCJDdXN0b21Db21wb25lbnQiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJGaWx0ZXIiLCJEZWZhdWx0Q29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiLCJpY29uIiwicm91bmQiLCJidXR0b25TdHlsZSIsImljb25TdHlsZSIsIm9uQ2xpY2siLCJyZWxhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLFNBQVMsUUFBUSxRQUFRO0FBRW5ELE9BQU9DLDJCQUEyQiwyQ0FBMkM7QUFDN0UsT0FBT0MsaUJBQWlCLG9CQUFvQjtBQUM1QyxPQUFPQyxZQUFZLGVBQWU7QUFDbEMsT0FBT0MsVUFBVSxTQUFTO0FBQzFCLE9BQU9DLFlBQVksV0FBVztBQUM5QixPQUFPQyxVQUFVLFNBQVM7QUFDMUIsT0FBT0Msa0JBQWtCLGlCQUFpQjtBQUMxQyxTQUFTQyxNQUFNLFFBQVEsV0FBVztBQUNsQyxPQUFPQyxpQkFBaUIsZ0NBQWdDO0FBR3hELE9BQU8sZUFBZTtBQUV0QixJQUFNQyxjQUFjO0lBQ2xCTixNQUFBQTtJQUNBQyxRQUFBQTtJQUNBQyxNQUFBQTtJQUNBQyxjQUFBQTtJQUNBQyxRQUFBQTtBQUNGO0FBRUEsSUFBTUcsWUFBWTtBQUVsQixJQUFNQyxZQUE2QixTQUFDQztRQVNUQyxRQUVIQyxtQkFDSEEsb0JBd0IwQ0MsY0FLckNBLGVBcUNLQSxxQ0FBQUEsMEJBQUFBLG9CQUFBQSxlQUdaQTtJQWhGakIsSUFDRUMsU0FLRUosTUFMRkksUUFDQUMsV0FJRUwsTUFKRkssVUFDQUosUUFHRUQsTUFIRkMsT0FDQUssVUFFRU4sTUFGRk0sU0FDQUMsV0FDRVAsTUFERk87SUFFRixJQUFNQyxhQUFhQyxPQUFPQyxJQUFJLENBQUNULE1BQU0sQ0FBQyxFQUFFO0lBQ3hDLElBQU1DLG1CQUFtQkQsRUFBQUEsU0FBQUEsbUJBQUFBLDZCQUFBQSxNQUFPLENBQUNP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