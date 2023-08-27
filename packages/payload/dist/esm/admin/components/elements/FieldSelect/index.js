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
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { fieldAffectsData, fieldHasSubFields, tabHasName } from "../../../../fields/config/types";
import ReactSelect from "../ReactSelect";
import { getTranslation } from "../../../../utilities/getTranslation";
import Label from "../../forms/Label";
import { useForm } from "../../forms/Form/context";
import { createNestedFieldPath } from "../../forms/Form/createNestedFieldPath";
import "./index.scss";
var baseClass = "field-select";
var combineLabel = function(prefix, field, i18n) {
    return "".concat(prefix === "" ? "" : "".concat(prefix, " > ")).concat(getTranslation(field.label || field.name, i18n) || "");
};
var reduceFields = function(fields, i18n) {
    var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", labelPrefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
    return fields.reduce(function(fieldsToUse, field) {
        var _field_admin, _field_admin1, _field_admin2;
        // escape for a variety of reasons
        if (fieldAffectsData(field) && (((_field_admin = field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.disableBulkEdit) || field.unique || field.hidden || ((_field_admin1 = field.admin) === null || _field_admin1 === void 0 ? void 0 : _field_admin1.hidden) || ((_field_admin2 = field.admin) === null || _field_admin2 === void 0 ? void 0 : _field_admin2.readOnly))) {
            return fieldsToUse;
        }
        if (!(field.type === "array" || field.type === "blocks") && fieldHasSubFields(field)) {
            return _to_consumable_array(fieldsToUse).concat(_to_consumable_array(reduceFields(field.fields, i18n, createNestedFieldPath(path, field), combineLabel(labelPrefix, field, i18n))));
        }
        if (field.type === "tabs") {
            return _to_consumable_array(fieldsToUse).concat(_to_consumable_array(field.tabs.reduce(function(tabFields, tab) {
                return _to_consumable_array(tabFields).concat(_to_consumable_array(reduceFields(tab.fields, i18n, tabHasName(tab) ? createNestedFieldPath(path, field) : path, combineLabel(labelPrefix, field, i18n))));
            }, [])));
        }
        var formattedField = {
            label: combineLabel(labelPrefix, field, i18n),
            value: _object_spread_props(_object_spread({}, field), {
                path: createNestedFieldPath(path, field)
            })
        };
        return _to_consumable_array(fieldsToUse).concat([
            formattedField
        ]);
    }, []);
};
export var FieldSelect = function(param) {
    var fields = param.fields, setSelected = param.setSelected;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array(useState(function() {
        return reduceFields(fields, i18n);
    }), 1), options = _useState[0];
    var _useForm = useForm(), getFields = _useForm.getFields, dispatchFields = _useForm.dispatchFields;
    var handleChange = function(selected) {
        var activeFields = getFields();
        if (selected === null) {
            setSelected([]);
        } else {
            setSelected(selected.map(function(param) {
                var value = param.value;
                return value;
            }));
        }
        // remove deselected values from form state
        if (selected === null || Object.keys(activeFields).length > selected.length) {
            Object.keys(activeFields).forEach(function(path) {
                if (selected === null || !selected.find(function(field) {
                    return field.value.path === path;
                })) {
                    dispatchFields({
                        type: "REMOVE",
                        path: path
                    });
                }
            });
        }
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Label, {
        label: t("fields:selectFieldsToEdit")
    }), /*#__PURE__*/ React.createElement(ReactSelect, {
        options: options,
        isMulti: true,
        onChange: handleChange
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0ZpZWxkU2VsZWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHtcbiAgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsXG4gIGZpZWxkSGFzU3ViRmllbGRzLCBGaWVsZFdpdGhQYXRoLFxuICB0YWJIYXNOYW1lLFxufSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi9SZWFjdFNlbGVjdCc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vZm9ybXMvTGFiZWwnO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVOZXN0ZWRGaWVsZFBhdGggfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NyZWF0ZU5lc3RlZEZpZWxkUGF0aCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2ZpZWxkLXNlbGVjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkczogRmllbGRbXTtcbiAgc2V0U2VsZWN0ZWQ6IChmaWVsZHM6IEZpZWxkV2l0aFBhdGhbXSkgPT4gdm9pZFxufVxuXG5jb25zdCBjb21iaW5lTGFiZWwgPSAocHJlZml4LCBmaWVsZCwgaTE4bik6IHN0cmluZyA9PiAoXG4gIGAke3ByZWZpeCA9PT0gJycgPyAnJyA6IGAke3ByZWZpeH0gPiBgfSR7Z2V0VHJhbnNsYXRpb24oZmllbGQubGFiZWwgfHwgZmllbGQubmFtZSwgaTE4bikgfHwgJyd9YFxuKTtcbmNvbnN0IHJlZHVjZUZpZWxkcyA9IChmaWVsZHM6IEZpZWxkW10sIGkxOG4sIHBhdGggPSAnJywgbGFiZWxQcmVmaXggPSAnJyk6IHtsYWJlbDogc3RyaW5nLCB2YWx1ZTogRmllbGRXaXRoUGF0aH1bXSA9PiAoXG4gIGZpZWxkcy5yZWR1Y2UoKGZpZWxkc1RvVXNlLCBmaWVsZCkgPT4ge1xuICAgIC8vIGVzY2FwZSBmb3IgYSB2YXJpZXR5IG9mIHJlYXNvbnNcbiAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgKGZpZWxkLmFkbWluPy5kaXNhYmxlQnVsa0VkaXQgfHwgZmllbGQudW5pcXVlIHx8IGZpZWxkLmhpZGRlbiB8fCBmaWVsZC5hZG1pbj8uaGlkZGVuIHx8IGZpZWxkLmFkbWluPy5yZWFkT25seSkpIHtcbiAgICAgIHJldHVybiBmaWVsZHNUb1VzZTtcbiAgICB9XG4gICAgaWYgKCEoZmllbGQudHlwZSA9PT0gJ2FycmF5JyB8fCBmaWVsZC50eXBlID09PSAnYmxvY2tzJykgJiYgZmllbGRIYXNTdWJGaWVsZHMoZmllbGQpKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5maWVsZHNUb1VzZSxcbiAgICAgICAgLi4ucmVkdWNlRmllbGRzKGZpZWxkLmZpZWxkcywgaTE4biwgY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGgsIGZpZWxkKSwgY29tYmluZUxhYmVsKGxhYmVsUHJlZml4LCBmaWVsZCwgaTE4bikpLFxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uZmllbGRzVG9Vc2UsXG4gICAgICAgIC4uLmZpZWxkLnRhYnMucmVkdWNlKCh0YWJGaWVsZHMsIHRhYikgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi50YWJGaWVsZHMsXG4gICAgICAgICAgICAuLi4ocmVkdWNlRmllbGRzKHRhYi5maWVsZHMsIGkxOG4sIHRhYkhhc05hbWUodGFiKSA/IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCkgOiBwYXRoLCBjb21iaW5lTGFiZWwobGFiZWxQcmVmaXgsIGZpZWxkLCBpMThuKSkpLFxuICAgICAgICAgIF07XG4gICAgICAgIH0sIFtdKSxcbiAgICAgIF07XG4gICAgfVxuICAgIGNvbnN0IGZvcm1hdHRlZEZpZWxkID0ge1xuICAgICAgbGFiZWw6IGNvbWJpbmVMYWJlbChsYWJlbFByZWZpeCwgZmllbGQsIGkxOG4pLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgLi4uZmllbGQsXG4gICAgICAgIHBhdGg6IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCksXG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uZmllbGRzVG9Vc2UsXG4gICAgICBmb3JtYXR0ZWRGaWVsZCxcbiAgICBdO1xuICB9LCBbXSkpO1xuZXhwb3J0IGNvbnN0IEZpZWxkU2VsZWN0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBmaWVsZHMsXG4gIHNldFNlbGVjdGVkLFxufSkgPT4ge1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlKCgpID0+IHJlZHVjZUZpZWxkcyhmaWVsZHMsIGkxOG4pKTtcbiAgY29uc3QgeyBnZXRGaWVsZHMsIGRpc3BhdGNoRmllbGRzIH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChzZWxlY3RlZCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUZpZWxkcyA9IGdldEZpZWxkcygpO1xuICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgc2V0U2VsZWN0ZWQoW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChzZWxlY3RlZC5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGRlc2VsZWN0ZWQgdmFsdWVzIGZyb20gZm9ybSBzdGF0ZVxuICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCB8fCBPYmplY3Qua2V5cyhhY3RpdmVGaWVsZHMpLmxlbmd0aCA+IHNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgT2JqZWN0LmtleXMoYWN0aXZlRmllbGRzKS5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCB8fCAhc2VsZWN0ZWQuZmluZCgoZmllbGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZmllbGQudmFsdWUucGF0aCA9PT0gcGF0aDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBkaXNwYXRjaEZpZWxkcyh7XG4gICAgICAgICAgICB0eXBlOiAnUkVNT1ZFJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPExhYmVsIGxhYmVsPXt0KCdmaWVsZHM6c2VsZWN0RmllbGRzVG9FZGl0Jyl9IC8+XG4gICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgaXNNdWx0aVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwiZmllbGRBZmZlY3RzRGF0YSIsImZpZWxkSGFzU3ViRmllbGRzIiwidGFiSGFzTmFtZSIsIlJlYWN0U2VsZWN0IiwiZ2V0VHJhbnNsYXRpb24iLCJMYWJlbCIsInVzZUZvcm0iLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJiYXNlQ2xhc3MiLCJjb21iaW5lTGFiZWwiLCJwcmVmaXgiLCJmaWVsZCIsImkxOG4iLCJsYWJlbCIsIm5hbWUiLCJyZWR1Y2VGaWVsZHMiLCJmaWVsZHMiLCJwYXRoIiwibGFiZWxQcmVmaXgiLCJyZWR1Y2UiLCJmaWVsZHNUb1VzZSIsImFkbWluIiwiZGlzYWJsZUJ1bGtFZGl0IiwidW5pcXVlIiwiaGlkZGVuIiwicmVhZE9ubHkiLCJ0eXBlIiwidGFicyIsInRhYkZpZWxkcyIsInRhYiIsImZvcm1hdHRlZEZpZWxkIiwidmFsdWUiLCJGaWVsZFNlbGVjdCIsInNldFNlbGVjdGVkIiwidCIsIm9wdGlvbnMiLCJnZXRGaWVsZHMiLCJkaXNwYXRjaEZpZWxkcyIsImhhbmRsZUNoYW5nZSIsInNlbGVjdGVkIiwiYWN0aXZlRmllbGRzIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZvckVhY2giLCJmaW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNNdWx0aSIsIm9uQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFFBQVEsUUFBUSxRQUFRO0FBQ3hDLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FDU0MsZ0JBQWdCLEVBQ3ZCQyxpQkFBaUIsRUFDakJDLFVBQVUsUUFDTCxrQ0FBa0M7QUFDekMsT0FBT0MsaUJBQWlCLGlCQUFpQjtBQUN6QyxTQUFTQyxjQUFjLFFBQVEsdUNBQXVDO0FBQ3RFLE9BQU9DLFdBQVcsb0JBQW9CO0FBQ3RDLFNBQVNDLE9BQU8sUUFBUSwyQkFBMkI7QUFDbkQsU0FBU0MscUJBQXFCLFFBQVEseUNBQXlDO0FBRS9FLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBT2xCLElBQU1DLGVBQWUsU0FBQ0MsUUFBUUMsT0FBT0M7V0FDbkMsQUFBQyxHQUF3Q1IsT0FBdENNLFdBQVcsS0FBSyxLQUFLLEFBQUMsR0FBUyxPQUFQQSxR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