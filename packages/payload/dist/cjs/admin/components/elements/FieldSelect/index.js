"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FieldSelect", {
    enumerable: true,
    get: function() {
        return FieldSelect;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _types = require("../../../../fields/config/types");
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../ReactSelect"));
var _getTranslation = require("../../../../utilities/getTranslation");
var _Label = /*#__PURE__*/ _interop_require_default(require("../../forms/Label"));
var _context = require("../../forms/Form/context");
var _createNestedFieldPath = require("../../forms/Form/createNestedFieldPath");
require("./index.scss");
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
var baseClass = "field-select";
var combineLabel = function(prefix, field, i18n) {
    return "".concat(prefix === "" ? "" : "".concat(prefix, " > ")).concat((0, _getTranslation.getTranslation)(field.label || field.name, i18n) || "");
};
var reduceFields = function(fields, i18n) {
    var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", labelPrefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "";
    return fields.reduce(function(fieldsToUse, field) {
        var _field_admin, _field_admin1, _field_admin2;
        // escape for a variety of reasons
        if ((0, _types.fieldAffectsData)(field) && (((_field_admin = field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.disableBulkEdit) || field.unique || field.hidden || ((_field_admin1 = field.admin) === null || _field_admin1 === void 0 ? void 0 : _field_admin1.hidden) || ((_field_admin2 = field.admin) === null || _field_admin2 === void 0 ? void 0 : _field_admin2.readOnly))) {
            return fieldsToUse;
        }
        if (!(field.type === "array" || field.type === "blocks") && (0, _types.fieldHasSubFields)(field)) {
            return _to_consumable_array(fieldsToUse).concat(_to_consumable_array(reduceFields(field.fields, i18n, (0, _createNestedFieldPath.createNestedFieldPath)(path, field), combineLabel(labelPrefix, field, i18n))));
        }
        if (field.type === "tabs") {
            return _to_consumable_array(fieldsToUse).concat(_to_consumable_array(field.tabs.reduce(function(tabFields, tab) {
                return _to_consumable_array(tabFields).concat(_to_consumable_array(reduceFields(tab.fields, i18n, (0, _types.tabHasName)(tab) ? (0, _createNestedFieldPath.createNestedFieldPath)(path, field) : path, combineLabel(labelPrefix, field, i18n))));
            }, [])));
        }
        var formattedField = {
            label: combineLabel(labelPrefix, field, i18n),
            value: _object_spread_props(_object_spread({}, field), {
                path: (0, _createNestedFieldPath.createNestedFieldPath)(path, field)
            })
        };
        return _to_consumable_array(fieldsToUse).concat([
            formattedField
        ]);
    }, []);
};
var FieldSelect = function(param) {
    var fields = param.fields, setSelected = param.setSelected;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array((0, _react.useState)(function() {
        return reduceFields(fields, i18n);
    }), 1), options = _useState[0];
    var _useForm = (0, _context.useForm)(), getFields = _useForm.getFields, dispatchFields = _useForm.dispatchFields;
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
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, {
        label: t("fields:selectFieldsToEdit")
    }), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        options: options,
        isMulti: true,
        onChange: handleChange
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0ZpZWxkU2VsZWN0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHtcbiAgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsXG4gIGZpZWxkSGFzU3ViRmllbGRzLCBGaWVsZFdpdGhQYXRoLFxuICB0YWJIYXNOYW1lLFxufSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi9SZWFjdFNlbGVjdCc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vZm9ybXMvTGFiZWwnO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0vY29udGV4dCc7XG5pbXBvcnQgeyBjcmVhdGVOZXN0ZWRGaWVsZFBhdGggfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NyZWF0ZU5lc3RlZEZpZWxkUGF0aCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2ZpZWxkLXNlbGVjdCc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkczogRmllbGRbXTtcbiAgc2V0U2VsZWN0ZWQ6IChmaWVsZHM6IEZpZWxkV2l0aFBhdGhbXSkgPT4gdm9pZFxufVxuXG5jb25zdCBjb21iaW5lTGFiZWwgPSAocHJlZml4LCBmaWVsZCwgaTE4bik6IHN0cmluZyA9PiAoXG4gIGAke3ByZWZpeCA9PT0gJycgPyAnJyA6IGAke3ByZWZpeH0gPiBgfSR7Z2V0VHJhbnNsYXRpb24oZmllbGQubGFiZWwgfHwgZmllbGQubmFtZSwgaTE4bikgfHwgJyd9YFxuKTtcbmNvbnN0IHJlZHVjZUZpZWxkcyA9IChmaWVsZHM6IEZpZWxkW10sIGkxOG4sIHBhdGggPSAnJywgbGFiZWxQcmVmaXggPSAnJyk6IHtsYWJlbDogc3RyaW5nLCB2YWx1ZTogRmllbGRXaXRoUGF0aH1bXSA9PiAoXG4gIGZpZWxkcy5yZWR1Y2UoKGZpZWxkc1RvVXNlLCBmaWVsZCkgPT4ge1xuICAgIC8vIGVzY2FwZSBmb3IgYSB2YXJpZXR5IG9mIHJlYXNvbnNcbiAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgKGZpZWxkLmFkbWluPy5kaXNhYmxlQnVsa0VkaXQgfHwgZmllbGQudW5pcXVlIHx8IGZpZWxkLmhpZGRlbiB8fCBmaWVsZC5hZG1pbj8uaGlkZGVuIHx8IGZpZWxkLmFkbWluPy5yZWFkT25seSkpIHtcbiAgICAgIHJldHVybiBmaWVsZHNUb1VzZTtcbiAgICB9XG4gICAgaWYgKCEoZmllbGQudHlwZSA9PT0gJ2FycmF5JyB8fCBmaWVsZC50eXBlID09PSAnYmxvY2tzJykgJiYgZmllbGRIYXNTdWJGaWVsZHMoZmllbGQpKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5maWVsZHNUb1VzZSxcbiAgICAgICAgLi4ucmVkdWNlRmllbGRzKGZpZWxkLmZpZWxkcywgaTE4biwgY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGgsIGZpZWxkKSwgY29tYmluZUxhYmVsKGxhYmVsUHJlZml4LCBmaWVsZCwgaTE4bikpLFxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uZmllbGRzVG9Vc2UsXG4gICAgICAgIC4uLmZpZWxkLnRhYnMucmVkdWNlKCh0YWJGaWVsZHMsIHRhYikgPT4ge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi50YWJGaWVsZHMsXG4gICAgICAgICAgICAuLi4ocmVkdWNlRmllbGRzKHRhYi5maWVsZHMsIGkxOG4sIHRhYkhhc05hbWUodGFiKSA/IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCkgOiBwYXRoLCBjb21iaW5lTGFiZWwobGFiZWxQcmVmaXgsIGZpZWxkLCBpMThuKSkpLFxuICAgICAgICAgIF07XG4gICAgICAgIH0sIFtdKSxcbiAgICAgIF07XG4gICAgfVxuICAgIGNvbnN0IGZvcm1hdHRlZEZpZWxkID0ge1xuICAgICAgbGFiZWw6IGNvbWJpbmVMYWJlbChsYWJlbFByZWZpeCwgZmllbGQsIGkxOG4pLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgLi4uZmllbGQsXG4gICAgICAgIHBhdGg6IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCksXG4gICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uZmllbGRzVG9Vc2UsXG4gICAgICBmb3JtYXR0ZWRGaWVsZCxcbiAgICBdO1xuICB9LCBbXSkpO1xuZXhwb3J0IGNvbnN0IEZpZWxkU2VsZWN0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBmaWVsZHMsXG4gIHNldFNlbGVjdGVkLFxufSkgPT4ge1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlKCgpID0+IHJlZHVjZUZpZWxkcyhmaWVsZHMsIGkxOG4pKTtcbiAgY29uc3QgeyBnZXRGaWVsZHMsIGRpc3BhdGNoRmllbGRzIH0gPSB1c2VGb3JtKCk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChzZWxlY3RlZCkgPT4ge1xuICAgIGNvbnN0IGFjdGl2ZUZpZWxkcyA9IGdldEZpZWxkcygpO1xuICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCkge1xuICAgICAgc2V0U2VsZWN0ZWQoW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZChzZWxlY3RlZC5tYXAoKHsgdmFsdWUgfSkgPT4gdmFsdWUpKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIGRlc2VsZWN0ZWQgdmFsdWVzIGZyb20gZm9ybSBzdGF0ZVxuICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCB8fCBPYmplY3Qua2V5cyhhY3RpdmVGaWVsZHMpLmxlbmd0aCA+IHNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgT2JqZWN0LmtleXMoYWN0aXZlRmllbGRzKS5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGlmIChzZWxlY3RlZCA9PT0gbnVsbCB8fCAhc2VsZWN0ZWQuZmluZCgoZmllbGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZmllbGQudmFsdWUucGF0aCA9PT0gcGF0aDtcbiAgICAgICAgfSkpIHtcbiAgICAgICAgICBkaXNwYXRjaEZpZWxkcyh7XG4gICAgICAgICAgICB0eXBlOiAnUkVNT1ZFJyxcbiAgICAgICAgICAgIHBhdGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPExhYmVsIGxhYmVsPXt0KCdmaWVsZHM6c2VsZWN0RmllbGRzVG9FZGl0Jyl9IC8+XG4gICAgICA8UmVhY3RTZWxlY3RcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgaXNNdWx0aVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiRmllbGRTZWxlY3QiLCJiYXNlQ2xhc3MiLCJjb21iaW5lTGFiZWwiLCJwcmVmaXgiLCJmaWVsZCIsImkxOG4iLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVsIiwibmFtZSIsInJlZHVjZUZpZWxkcyIsImZpZWxkcyIsInBhdGgiLCJsYWJlbFByZWZpeCIsInJlZHVjZSIsImZpZWxkc1RvVXNlIiwiZmllbGRBZmZlY3RzRGF0YSIsImFkbWluIiwiZGlzYWJsZUJ1bGtFZGl0IiwidW5pcXVlIiwiaGlkZGVuIiwicmVhZE9ubHkiLCJ0eXBlIiwiZmllbGRIYXNTdWJGaWVsZHMiLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJ0YWJzIiwidGFiRmllbGRzIiwidGFiIiwidGFiSGFzTmFtZSIsImZvcm1hdHRlZEZpZWxkIiwidmFsdWUiLCJzZXRTZWxlY3RlZCIsInVzZVRyYW5zbGF0aW9uIiwidCIsInVzZVN0YXRlIiwib3B0aW9ucyIsInVzZUZvcm0iLCJnZXRGaWVsZHMiLCJkaXNwYXRjaEZpZWxkcyIsImhhbmRsZUNoYW5nZSIsInNlbGVjdGVkIiwiYWN0aXZlRmllbGRzIiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZvckVhY2giLCJmaW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiTGFiZWwiLCJSZWFjdFNlbGVjdCIsImlzTXVsdGkiLCJvbkNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkE2RGFBOzs7ZUFBQUE7Ozs2REE3RG1COzRCQUNEO3FCQUt4QjtrRUFDaUI7OEJBQ087NERBQ2I7dUJBQ007cUNBQ2M7UUFFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQU9sQixJQUFNQyxlQUFlLFNBQUNDLFFBQVFDLE9BQU9DO1dBQ25DLEFBQUMsR0FBd0NDLE9BQXRDSCxXQUFXLEtBQUssS0FBSyxBQUFDLEdBQVMsT0FBUEEsUUFBTyxRQUE2RCxPQUF0REcsSUFBQUEsOEJBQWMsRUFBQ0YsTUFBTUcsS0FBSyxJQUFJSCxNQUFNSSxJQUFJLEVBQUVILFNBQVM7O0FBRTlGLElBQU1JLGVBQWUsU0FBQ0MsUUFBaUJMO1FBQU1NLHdFQUFPLElBQUlDLCtFQUFjO1dBQ3BFRixPQUFPRyxNQUFNLENBQUMsU0FBQ0Ms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