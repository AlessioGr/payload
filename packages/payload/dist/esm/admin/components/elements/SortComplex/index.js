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
import React, { useState, useEffect } from "react";
import queryString from "qs";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactSelect from "../ReactSelect";
import sortableFieldTypes from "../../../../fields/sortableFieldTypes";
import { useSearchParams } from "../../utilities/SearchParams";
import { fieldAffectsData } from "../../../../fields/config/types";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "sort-complex";
var SortComplex = function(props) {
    var collection = props.collection, _props_modifySearchQuery = props.modifySearchQuery, modifySearchQuery = _props_modifySearchQuery === void 0 ? true : _props_modifySearchQuery, handleChange = props.handleChange;
    var history = useHistory();
    var params = useSearchParams();
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array(useState(), 2), sortOptions = _useState[0], setSortOptions = _useState[1];
    var _useState1 = _sliced_to_array(useState(function() {
        return collection.fields.reduce(function(fields, field) {
            if (fieldAffectsData(field) && sortableFieldTypes.indexOf(field.type) > -1) {
                return _to_consumable_array(fields).concat([
                    {
                        label: getTranslation(field.label || field.name, i18n),
                        value: field.name
                    }
                ]);
            }
            return fields;
        }, []);
    }), 1), sortFields = _useState1[0];
    var _useState2 = _sliced_to_array(useState(sortFields[0]), 2), sortField = _useState2[0], setSortField = _useState2[1];
    var _useState3 = _sliced_to_array(useState(function() {
        return {
            label: t("descending"),
            value: "-"
        };
    }), 1), initialSort = _useState3[0];
    var _useState4 = _sliced_to_array(useState(initialSort), 2), sortOrder = _useState4[0], setSortOrder = _useState4[1];
    useEffect(function() {
        var _sortField;
        if ((_sortField = sortField) === null || _sortField === void 0 ? void 0 : _sortField.value) {
            var newSortValue = "".concat(sortOrder.value).concat(sortField.value);
            if (handleChange) handleChange(newSortValue);
            if (params.sort !== newSortValue && modifySearchQuery) {
                history.replace({
                    search: queryString.stringify(_object_spread_props(_object_spread({}, params), {
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
    useEffect(function() {
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
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__select")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("columnToSort")), /*#__PURE__*/ React.createElement(ReactSelect, {
        value: sortField,
        options: sortFields,
        onChange: setSortField
    })), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__select")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("order")), /*#__PURE__*/ React.createElement(ReactSelect, {
        value: sortOrder,
        options: sortOptions,
        onChange: function(incomingSort) {
            setSortOrder(incomingSort || initialSort);
        }
    })))));
};
export default SortComplex;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NvcnRDb21wbGV4L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBSZWFjdFNlbGVjdCBmcm9tICcuLi9SZWFjdFNlbGVjdCc7XG5pbXBvcnQgc29ydGFibGVGaWVsZFR5cGVzIGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9zb3J0YWJsZUZpZWxkVHlwZXMnO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyBmaWVsZEFmZmVjdHNEYXRhLCBPcHRpb25PYmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnc29ydC1jb21wbGV4JztcblxuY29uc3QgU29ydENvbXBsZXg6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbixcbiAgICBtb2RpZnlTZWFyY2hRdWVyeSA9IHRydWUsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgY29uc3QgW3NvcnRPcHRpb25zLCBzZXRTb3J0T3B0aW9uc10gPSB1c2VTdGF0ZTxPcHRpb25PYmplY3RbXT4oKTtcblxuICBjb25zdCBbc29ydEZpZWxkc10gPSB1c2VTdGF0ZSgoKSA9PiBjb2xsZWN0aW9uLmZpZWxkcy5yZWR1Y2UoKGZpZWxkcywgZmllbGQpID0+IHtcbiAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgc29ydGFibGVGaWVsZFR5cGVzLmluZGV4T2YoZmllbGQudHlwZSkgPiAtMSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uZmllbGRzLFxuICAgICAgICB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCB8fCBmaWVsZC5uYW1lLCBpMThuKSwgdmFsdWU6IGZpZWxkLm5hbWUgfSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiBmaWVsZHM7XG4gIH0sIFtdKSk7XG5cbiAgY29uc3QgW3NvcnRGaWVsZCwgc2V0U29ydEZpZWxkXSA9IHVzZVN0YXRlKHNvcnRGaWVsZHNbMF0pO1xuICBjb25zdCBbaW5pdGlhbFNvcnRdID0gdXNlU3RhdGUoKCkgPT4gKHsgbGFiZWw6IHQoJ2Rlc2NlbmRpbmcnKSwgdmFsdWU6ICctJyB9KSk7XG4gIGNvbnN0IFtzb3J0T3JkZXIsIHNldFNvcnRPcmRlcl0gPSB1c2VTdGF0ZShpbml0aWFsU29ydCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc29ydEZpZWxkPy52YWx1ZSkge1xuICAgICAgY29uc3QgbmV3U29ydFZhbHVlID0gYCR7c29ydE9yZGVyLnZhbHVlfSR7c29ydEZpZWxkLnZhbHVlfWA7XG5cbiAgICAgIGlmIChoYW5kbGVDaGFuZ2UpIGhhbmRsZUNoYW5nZShuZXdTb3J0VmFsdWUpO1xuXG4gICAgICBpZiAocGFyYW1zLnNvcnQgIT09IG5ld1NvcnRWYWx1ZSAmJiBtb2RpZnlTZWFyY2hRdWVyeSkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2Uoe1xuICAgICAgICAgIHNlYXJjaDogcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcbiAgICAgICAgICAgIHNvcnQ6IG5ld1NvcnRWYWx1ZSxcbiAgICAgICAgICB9LCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtoaXN0b3J5LCBwYXJhbXMsIHNvcnRGaWVsZCwgc29ydE9yZGVyLCBtb2RpZnlTZWFyY2hRdWVyeSwgaGFuZGxlQ2hhbmdlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTb3J0T3B0aW9ucyhbeyBsYWJlbDogdCgnYXNjZW5kaW5nJyksIHZhbHVlOiAnJyB9LCB7IGxhYmVsOiB0KCdkZXNjZW5kaW5nJyksIHZhbHVlOiAnLScgfV0pO1xuICB9LCBbaTE4biwgdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NlbGVjdGB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgICAgICAgIHt0KCdjb2x1bW5Ub1NvcnQnKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzb3J0RmllbGR9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NvcnRGaWVsZHN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTb3J0RmllbGR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zZWxlY3RgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgICAgICB7dCgnb3JkZXInKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFJlYWN0U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtzb3J0T3JkZXJ9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e3NvcnRPcHRpb25zfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGluY29taW5nU29ydCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNvcnRPcmRlcihpbmNvbWluZ1NvcnQgfHwgaW5pdGlhbFNvcnQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydENvbXBsZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInF1ZXJ5U3RyaW5nIiwidXNlSGlzdG9yeSIsInVzZVRyYW5zbGF0aW9uIiwiUmVhY3RTZWxlY3QiLCJzb3J0YWJsZUZpZWxkVHlwZXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJmaWVsZEFmZmVjdHNEYXRhIiwiZ2V0VHJhbnNsYXRpb24iLCJiYXNlQ2xhc3MiLCJTb3J0Q29tcGxleCIsInByb3BzIiwiY29sbGVjdGlvbiIsIm1vZGlmeVNlYXJjaFF1ZXJ5IiwiaGFuZGxlQ2hhbmdlIiwiaGlzdG9yeSIsInBhcmFtcyIsInQiLCJpMThuIiwic29ydE9wdGlvbnMiLCJzZXRTb3J0T3B0aW9ucyIsImZpZWxkcyIsInJlZHVjZSIsImZpZWxkIiwiaW5kZXhPZiIsInR5cGUiLCJsYWJlbCIsIm5hbWUiLCJ2YWx1ZSIsInNvcnRGaWVsZHMiLCJzb3J0RmllbGQiLCJzZXRTb3J0RmllbGQiLCJpbml0aWFsU29ydCIsInNvcnRPcmRlciIsInNldFNvcnRPcmRlciIsIm5ld1NvcnRWYWx1ZSIsInNvcnQiLCJyZXBsYWNlIiwic2VhcmNoIiwic3RyaW5naWZ5IiwiYWRkUXVlcnlQcmVmaXgiLCJkaXYiLCJjbGFzc05hbWUiLCJGcmFnbWVudCIsIm9wdGlvbnMiLCJvbkNoYW5nZSIsImluY29taW5nU29ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLFNBQVMsUUFBUSxRQUFRO0FBQ25ELE9BQU9DLGlCQUFpQixLQUFLO0FBQzdCLFNBQVNDLFVBQVUsUUFBUSxtQkFBbUI7QUFDOUMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUUvQyxPQUFPQyxpQkFBaUIsaUJBQWlCO0FBQ3pDLE9BQU9DLHdCQUF3Qix3Q0FBd0M7QUFDdkUsU0FBU0MsZUFBZSxRQUFRLCtCQUErQjtBQUMvRCxTQUFTQyxnQkFBZ0IsUUFBc0Isa0NBQWtDO0FBQ2pGLFNBQVNDLGNBQWMsUUFBUSx1Q0FBdUM7QUFFdEUsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsY0FBK0IsU0FBQ0M7SUFDcEMsSUFDRUMsYUFHRUQsTUFIRkMsdUNBR0VELE1BRkZFLG1CQUFBQSwwREFBb0IsaUNBQ3BCQyxlQUNFSCxNQURGRztJQUdGLElBQU1DLFVBQVViO0lBQ2hCLElBQU1jLFNBQVNWO0lBQ2YsSUFBb0JILGtCQUFBQSxlQUFlLFlBQTNCYyxJQUFZZCxnQkFBWmMsR0FBR0MsT0FBU2YsZ0JBQVRlO0lBQ1gsSUFBc0NuQiw2QkFBQUEsZ0JBQS9Cb0IsY0FBK0JwQixjQUFsQnFCLGlCQUFrQnJCO0lBRXRD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