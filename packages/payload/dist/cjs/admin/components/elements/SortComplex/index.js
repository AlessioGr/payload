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
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _ReactSelect = /*#__PURE__*/ _interop_require_default(require("../ReactSelect"));
var _sortableFieldTypes = /*#__PURE__*/ _interop_require_default(require("../../../../fields/sortableFieldTypes"));
var _SearchParams = require("../../utilities/SearchParams");
var _types = require("../../../../fields/config/types");
var _getTranslation = require("../../../../utilities/getTranslation");
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
var baseClass = "sort-complex";
var SortComplex = function(props) {
    var collection = props.collection, _props_modifySearchQuery = props.modifySearchQuery, modifySearchQuery = _props_modifySearchQuery === void 0 ? true : _props_modifySearchQuery, handleChange = props.handleChange;
    var history = (0, _reactrouterdom.useHistory)();
    var params = (0, _SearchParams.useSearchParams)();
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array((0, _react.useState)(), 2), sortOptions = _useState[0], setSortOptions = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(function() {
        return collection.fields.reduce(function(fields, field) {
            if ((0, _types.fieldAffectsData)(field) && _sortableFieldTypes.default.indexOf(field.type) > -1) {
                return _to_consumable_array(fields).concat([
                    {
                        label: (0, _getTranslation.getTranslation)(field.label || field.name, i18n),
                        value: field.name
                    }
                ]);
            }
            return fields;
        }, []);
    }), 1), sortFields = _useState1[0];
    var _useState2 = _sliced_to_array((0, _react.useState)(sortFields[0]), 2), sortField = _useState2[0], setSortField = _useState2[1];
    var _useState3 = _sliced_to_array((0, _react.useState)(function() {
        return {
            label: t("descending"),
            value: "-"
        };
    }), 1), initialSort = _useState3[0];
    var _useState4 = _sliced_to_array((0, _react.useState)(initialSort), 2), sortOrder = _useState4[0], setSortOrder = _useState4[1];
    (0, _react.useEffect)(function() {
        var _sortField;
        if ((_sortField = sortField) === null || _sortField === void 0 ? void 0 : _sortField.value) {
            var newSortValue = "".concat(sortOrder.value).concat(sortField.value);
            if (handleChange) handleChange(newSortValue);
            if (params.sort !== newSortValue && modifySearchQuery) {
                history.replace({
                    search: _qs.default.stringify(_object_spread_props(_object_spread({}, params), {
                        sort: newSortValue
                    }), {
                        addQueryPrefix: true
                    })
                });
            }
        }
    }, [
        history,
        params,
        sortField,
        sortOrder,
        modifySearchQuery,
        handleChange
    ]);
    (0, _react.useEffect)(function() {
        setSortOptions([
            {
                label: t("ascending"),
                value: ""
            },
            {
                label: t("descending"),
                value: "-"
            }
        ]);
    }, [
        i18n,
        t
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__select")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("columnToSort")), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        value: sortField,
        options: sortFields,
        onChange: setSortField
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__select")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("order")), /*#__PURE__*/ _react.default.createElement(_ReactSelect.default, {
        value: sortOrder,
        options: sortOptions,
        onChange: function(incomingSort) {
            setSortOrder(incomingSort || initialSort);
        }
    })))));
};
var _default = SortComplex;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NvcnRDb21wbGV4L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi9SZWFjdFNlbGVjdCc7XG5pbXBvcnQgc29ydGFibGVGaWVsZFR5cGVzIGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9zb3J0YWJsZUZpZWxkVHlwZXMnO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhLCBPcHRpb25PYmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc29ydC1jb21wbGV4JztcblxuY29uc3QgU29ydENvbXBsZXg6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbixcbiAgICBtb2RpZnlTZWFyY2hRdWVyeSA9IHRydWUsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgW3NvcnRPcHRpb25zLCBzZXRTb3J0T3B0aW9uc10gPSB1c2VTdGF0ZTxPcHRpb25PYmplY3RbXT4oKTtcblxuICBjb25zdCBbc29ydEZpZWxkc10gPSB1c2VTdGF0ZSgoKSA9PiBjb2xsZWN0aW9uLmZpZWxkcy5yZWR1Y2UoKGZpZWxkcywgZmllbGQpID0+IHtcbiAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgc29ydGFibGVGaWVsZFR5cGVzLmluZGV4T2YoZmllbGQudHlwZSkgPiAtMSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uZmllbGRzLFxuICAgICAgICB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCB8fCBmaWVsZC5uYW1lLCBpMThuKSwgdmFsdWU6IGZpZWxkLm5hbWUgfSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBmaWVsZHM7XG4gIH0sIFtdKSk7XG5cbiAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IHVzZVN0YXRlKHNvcnRGaWVsZHNbMF0pO1xuICBjb25zdCBbaW5pdGlhbFNvcnRdID0gdXNlU3RhdGUoKCkgPT4gKHsgbGFiZWw6IHQoJ2Rlc2NlbmRpbmcnKSwgdmFsdWU6ICctJyB9KSk7XG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZShpbml0aWFsU29ydCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc29ydEZpZWxkPy52YWx1ZSkge1xuICAgICAgY29uc3QgbmV3U29ydFZhbHVlID0gYCR7c29ydE9yZGVyLnZhbHVlfSR7c29ydEZpZWxkLnZhbHVlfWA7XG5cbiAgICAgIGlmIChoYW5kbGVDaGFuZ2UpIGhhbmRsZUNoYW5nZShuZXdTb3J0VmFsdWUpO1xuXG4gICAgICBpZiAocGFyYW1zLnNvcnQgIT09IG5ld1NvcnRWYWx1ZSAmJiBtb2RpZnlTZWFyY2hRdWVyeSkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2Uoe1xuICAgICAgICAgIHNlYXJjaDogcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgIHNvcnQ6IG5ld1NvcnRWYWx1ZSxcbiAgICAgICAgICB9LCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtoaXN0b3J5LCBwYXJhbXMsIHNvcnRGaWVsZCwgc29ydE9yZGVyLCBtb2RpZnlTZWFyY2hRdWVyeSwgaGFuZGxlQ2hhbmdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTb3J0T3B0aW9ucyhbeyBsYWJlbDogdCgnYXNjZW5kaW5nJyksIHZhbHVlOiAnJyB9LCB7IGxhYmVsOiB0KCdkZXNjZW5kaW5nJyksIHZhbHVlOiAnLScgfV0pO1xuICB9LCBbaTE4biwgdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NlbGVjdGB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgICAgICAgIHt0KCdjb2x1bW5Ub1NvcnQnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzb3J0RmllbGR9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NvcnRGaWVsZHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTb3J0RmllbGR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zZWxlY3RgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgICAgICB7dCgnb3JkZXInKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzb3J0T3JkZXJ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NvcnRPcHRpb25zfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGluY29taW5nU29ydCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNvcnRPcmRlcihpbmNvbWluZ1NvcnQgfHwgaW5pdGlhbFNvcnQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydENvbXBsZXg7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiU29ydENvbXBsZXgiLCJwcm9wcyIsImNvbGxlY3Rpb24iLCJtb2RpZnlTZWFyY2hRdWVyeSIsImhhbmRsZUNoYW5nZSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwicGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInVzZVN0YXRlIiwic29ydE9wdGlvbnMiLCJzZXRTb3J0T3B0aW9ucyIsImZpZWxkcyIsInJlZHVjZSIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsInNvcnRhYmxlRmllbGRUeXBlcyIsImluZGV4T2YiLCJ0eXBlIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsIm5hbWUiLCJ2YWx1ZSIsInNvcnRGaWVsZHMiLCJzb3J0RmllbGQiLCJzZXRTb3J0RmllbGQiLCJpbml0aWFsU29ydCIsInNvcnRPcmRlciIsInNldFNvcnRPcmRlciIsInVzZUVmZmVjdCIsIm5ld1NvcnRWYWx1ZSIsInNvcnQiLCJyZXBsYWNlIiwic2VhcmNoIiwicXVlcnlTdHJpbmciLCJzdHJpbmdpZnkiLCJhZGRRdWVyeVByZWZpeCIsImRpdiIsImNsYXNzTmFtZSIsIlJlYWN0IiwiRnJhZ21lbnQiLCJSZWFjdFNlbGVjdCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImluY29taW5nU29ydCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkE4RkE7OztlQUFBOzs7NkRBOUYyQzt5REFDbkI7OEJBQ0c7NEJBQ0k7a0VBRVA7eUVBQ087NEJBQ0M7cUJBQ2U7OEJBQ2hCO1FBRXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsY0FBK0IsU0FBQ0M7SUFDcEMsSUFDRUMsYUFHRUQsTUFIRkMsdUNBR0VELE1BRkZFLG1CQUFBQSwwREFBb0IsaUNBQ3BCQyxlQUNFSCxNQURGRztJQUdGLElBQU1DLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLElBQU1DLFNBQVNDLElBQUFBLDZCQUFlO0lBQzlCLElBQW9CQyxrQkFBQUEsSUFBQUEsNEJBQWMsRUFBQyxZQUEzQkMsSUFBWUQsZ0JBQVpDLEdBQUdDLE9BQVNGLGdCQUFURTtJQUNYLElBQXNDQyw2QkFBQUEsSUFBQUEsZUFBUSxTQUF2Q0MsY0FBK0JELGNBQWxCRSxpQkFBa0JGO0lBRXRDLElBQXFCQSw4QkFBQUEsSUFBQUEsZUFBUSxFQUFDO2VBQU1WLFdBQVdhLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLFNBQUNELFFBQVFFO1lBQ3BFLElBQUlDLElBQUFBLHVCQUFnQixFQUFDRCxVQUFVRSwy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