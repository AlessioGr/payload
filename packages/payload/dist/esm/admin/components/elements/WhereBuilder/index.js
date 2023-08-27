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
import React, { useState, useReducer } from "react";
import queryString from "qs";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useThrottledEffect from "../../../hooks/useThrottledEffect";
import Button from "../Button";
import reducer from "./reducer";
import Condition from "./Condition";
import fieldTypes from "./field-types";
import flattenTopLevelFields from "../../../../utilities/flattenTopLevelFields";
import { useSearchParams } from "../../utilities/SearchParams";
import validateWhereQuery from "./validateWhereQuery";
import { getTranslation } from "../../../../utilities/getTranslation";
import { transformWhereQuery } from "./transformWhereQuery";
import "./index.scss";
var baseClass = "where-builder";
var reduceFields = function(fields, i18n) {
    return flattenTopLevelFields(fields).reduce(function(reduced, field) {
        if (typeof fieldTypes[field.type] === "object") {
            var formattedField = _object_spread_props(_object_spread({
                label: getTranslation(field.label || field.name, i18n),
                value: field.name
            }, fieldTypes[field.type]), {
                operators: fieldTypes[field.type].operators.map(function(operator) {
                    return _object_spread_props(_object_spread({}, operator), {
                        label: i18n.t("operators:".concat(operator.label))
                    });
                }),
                props: _object_spread({}, field)
            });
            return _to_consumable_array(reduced).concat([
                formattedField
            ]);
        }
        return reduced;
    }, []);
};
/**
 * The WhereBuilder component is used to render the filter controls for a collection's list view.
 * It is part of the {@link ListControls} component which is used to render the controls (search, filter, where).
 */ var WhereBuilder = function(props) {
    var collection = props.collection, _props_modifySearchQuery = props.modifySearchQuery, modifySearchQuery = _props_modifySearchQuery === void 0 ? true : _props_modifySearchQuery, handleChange = props.handleChange, tmp = props.collection, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.labels, plural = (tmp1 === void 0 ? {} : tmp1).plural;
    var history = useHistory();
    var params = useSearchParams();
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    // This handles initializing the where conditions from the search query (URL). That way, if you pass in
    // query params to the URL, the where conditions will be initialized from those and displayed in the UI.
    // Example: /admin/collections/posts?where[or][0][and][0][text][equals]=example%20post
    var _useReducer = _sliced_to_array(useReducer(reducer, params.where, function(whereFromSearch) {
        if (modifySearchQuery && whereFromSearch) {
            if (validateWhereQuery(whereFromSearch)) {
                return whereFromSearch.or;
            }
            // Transform the where query to be in the right format. This will transform something simple like [text][equals]=example%20post to the right format
            var transformedWhere = transformWhereQuery(whereFromSearch);
            if (validateWhereQuery(transformedWhere)) {
                return transformedWhere.or;
            }
            console.warn("Invalid where query in URL. Ignoring.");
        }
        return [];
    }), 2), conditions = _useReducer[0], dispatchConditions = _useReducer[1];
    var _useState = _sliced_to_array(useState(function() {
        return reduceFields(collection.fields, i18n);
    }), 1), reducedFields = _useState[0];
    // This handles updating the search query (URL) when the where conditions change
    useThrottledEffect(function() {
        var _currentParams, _currentParams1, _currentParams2, _currentParams3;
        var currentParams = queryString.parse(history.location.search, {
            ignoreQueryPrefix: true,
            depth: 10
        });
        var paramsToKeep = typeof ((_currentParams = currentParams) === null || _currentParams === void 0 ? void 0 : _currentParams.where) === "object" && "or" in currentParams.where ? currentParams.where.or.reduce(function(keptParams, param) {
            var newParam = _object_spread({}, param);
            if (param.and) {
                delete newParam.and;
            }
            return _to_consumable_array(keptParams).concat([
                newParam
            ]);
        }, []) : [];
        var hasNewWhereConditions = conditions.length > 0;
        var newWhereQuery = _object_spread_props(_object_spread({}, typeof ((_currentParams1 = currentParams) === null || _currentParams1 === void 0 ? void 0 : _currentParams1.where) === "object" && (validateWhereQuery((_currentParams2 = currentParams) === null || _currentParams2 === void 0 ? void 0 : _currentParams2.where) || !hasNewWhereConditions) ? currentParams.where : {}), {
            or: _to_consumable_array(conditions).concat(_to_consumable_array(paramsToKeep))
        });
        if (handleChange) handleChange(newWhereQuery);
        var hasExistingConditions = typeof ((_currentParams3 = currentParams) === null || _currentParams3 === void 0 ? void 0 : _currentParams3.where) === "object" && "or" in currentParams.where;
        if (modifySearchQuery && (hasExistingConditions && !hasNewWhereConditions || hasNewWhereConditions)) {
            history.replace({
                search: queryString.stringify(_object_spread_props(_object_spread({}, currentParams), {
                    page: 1,
                    where: newWhereQuery
                }), {
                    addQueryPrefix: true
                })
            });
        }
    }, 500, [
        conditions,
        modifySearchQuery,
        handleChange
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, conditions.length > 0 && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("filterWhere", {
        label: getTranslation(plural, i18n)
    })), /*#__PURE__*/ React.createElement("ul", {
        className: "".concat(baseClass, "__or-filters")
    }, conditions.map(function(or, orIndex) {
        var _or;
        return /*#__PURE__*/ React.createElement("li", {
            key: orIndex
        }, orIndex !== 0 && /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__label")
        }, t("or")), /*#__PURE__*/ React.createElement("ul", {
            className: "".concat(baseClass, "__and-filters")
        }, Array.isArray((_or = or) === null || _or === void 0 ? void 0 : _or.and) && or.and.map(function(_, andIndex) {
            return /*#__PURE__*/ React.createElement("li", {
                key: andIndex
            }, andIndex !== 0 && /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__label")
            }, t("and")), /*#__PURE__*/ React.createElement(Condition, {
                value: conditions[orIndex].and[andIndex],
                orIndex: orIndex,
                andIndex: andIndex,
                key: andIndex,
                fields: reducedFields,
                dispatch: dispatchConditions
            }));
        })));
    })), /*#__PURE__*/ React.createElement(Button, {
        className: "".concat(baseClass, "__add-or"),
        icon: "plus",
        buttonStyle: "icon-label",
        iconPosition: "left",
        iconStyle: "with-border",
        onClick: function() {
            if (reducedFields.length > 0) dispatchConditions({
                type: "add",
                field: reducedFields[0].value
            });
        }
    }, t("or"))), conditions.length === 0 && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__no-filters")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("noFiltersSet")), /*#__PURE__*/ React.createElement(Button, {
        className: "".concat(baseClass, "__add-first-filter"),
        icon: "plus",
        buttonStyle: "icon-label",
        iconPosition: "left",
        iconStyle: "with-border",
        onClick: function() {
            if (reducedFields.length > 0) dispatchConditions({
                type: "add",
                field: reducedFields[0].value
            });
        }
    }, t("addFilter"))));
};
export default WhereBuilder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3FzJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHVzZVRocm90dGxlZEVmZmVjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaHJvdHRsZWRFZmZlY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBDb25kaXRpb24gZnJvbSAnLi9Db25kaXRpb24nO1xuaW1wb3J0IGZpZWxkVHlwZXMgZnJvbSAnLi9maWVsZC10eXBlcyc7XG5pbXBvcnQgZmxhdHRlblRvcExldmVsRmllbGRzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9mbGF0dGVuVG9wTGV2ZWxGaWVsZHMnO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcyc7XG5pbXBvcnQgdmFsaWRhdGVXaGVyZVF1ZXJ5IGZyb20gJy4vdmFsaWRhdGVXaGVyZVF1ZXJ5JztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdHJhbnNmb3JtV2hlcmVRdWVyeSB9IGZyb20gJy4vdHJhbnNmb3JtV2hlcmVRdWVyeSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3doZXJlLWJ1aWxkZXInO1xuXG5jb25zdCByZWR1Y2VGaWVsZHMgPSAoZmllbGRzLCBpMThuKSA9PiBmbGF0dGVuVG9wTGV2ZWxGaWVsZHMoZmllbGRzKS5yZWR1Y2UoKHJlZHVjZWQsIGZpZWxkKSA9PiB7XG4gIGlmICh0eXBlb2YgZmllbGRUeXBlc1tmaWVsZC50eXBlXSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRGaWVsZCA9IHtcbiAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCB8fCBmaWVsZC5uYW1lLCBpMThuKSxcbiAgICAgIHZhbHVlOiBmaWVsZC5uYW1lLFxuICAgICAgLi4uZmllbGRUeXBlc1tmaWVsZC50eXBlXSxcbiAgICAgIG9wZXJhdG9yczogZmllbGRUeXBlc1tmaWVsZC50eXBlXS5vcGVyYXRvcnMubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgLi4ub3BlcmF0b3IsXG4gICAgICAgIGxhYmVsOiBpMThuLnQoYG9wZXJhdG9yczoke29wZXJhdG9yLmxhYmVsfWApLFxuICAgICAgfVxuICAgICAgKSksXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5maWVsZCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiBbXG4gICAgICAuLi5yZWR1Y2VkLFxuICAgICAgZm9ybWF0dGVkRmllbGQsXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VkO1xufSwgW10pO1xuXG4vKipcbiAqIFRoZSBXaGVyZUJ1aWxkZXIgY29tcG9uZW50IGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBmaWx0ZXIgY29udHJvbHMgZm9yIGEgY29sbGVjdGlvbidzIGxpc3Qgdmlldy5cbiAqIEl0IGlzIHBhcnQgb2YgdGhlIHtAbGluayBMaXN0Q29udHJvbHN9IGNvbXBvbmVudCB3aGljaCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgY29udHJvbHMgKHNlYXJjaCwgZmlsdGVyLCB3aGVyZSkuXG4gKi9cbmNvbnN0IFdoZXJlQnVpbGRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIG1vZGlmeVNlYXJjaFF1ZXJ5ID0gdHJ1ZSxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHBsdXJhbCxcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBwYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIC8vIFRoaXMgaGFuZGxlcyBpbml0aWFsaXppbmcgdGhlIHdoZXJlIGNvbmRpdGlvbnMgZnJvbSB0aGUgc2VhcmNoIHF1ZXJ5IChVUkwpLiBUaGF0IHdheSwgaWYgeW91IHBhc3MgaW5cbiAgLy8gcXVlcnkgcGFyYW1zIHRvIHRoZSBVUkwsIHRoZSB3aGVyZSBjb25kaXRpb25zIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZnJvbSB0aG9zZSBhbmQgZGlzcGxheWVkIGluIHRoZSBVSS5cbiAgLy8gRXhhbXBsZTogL2FkbWluL2NvbGxlY3Rpb25zL3Bvc3RzP3doZXJlW29yXVswXVthbmRdWzBdW3RleHRdW2VxdWFsc109ZXhhbXBsZSUyMHBvc3RcbiAgY29uc3QgW2NvbmRpdGlvbnMsIGRpc3BhdGNoQ29uZGl0aW9uc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHBhcmFtcy53aGVyZSwgKHdoZXJlRnJvbVNlYXJjaCkgPT4ge1xuICAgIGlmIChtb2RpZnlTZWFyY2hRdWVyeSAmJiB3aGVyZUZyb21TZWFyY2gpIHtcbiAgICAgIGlmICh2YWxpZGF0ZVdoZXJlUXVlcnkod2hlcmVGcm9tU2VhcmNoKSkge1xuICAgICAgICByZXR1cm4gd2hlcmVGcm9tU2VhcmNoLm9yO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmFuc2Zvcm0gdGhlIHdoZXJlIHF1ZXJ5IHRvIGJlIGluIHRoZSByaWdodCBmb3JtYXQuIFRoaXMgd2lsbCB0cmFuc2Zvcm0gc29tZXRoaW5nIHNpbXBsZSBsaWtlIFt0ZXh0XVtlcXVhbHNdPWV4YW1wbGUlMjBwb3N0IHRvIHRoZSByaWdodCBmb3JtYXRcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkV2hlcmUgPSB0cmFuc2Zvcm1XaGVyZVF1ZXJ5KHdoZXJlRnJvbVNlYXJjaCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZVdoZXJlUXVlcnkodHJhbnNmb3JtZWRXaGVyZSkpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkV2hlcmUub3I7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCB3aGVyZSBxdWVyeSBpbiBVUkwuIElnbm9yaW5nLicpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH0pO1xuXG4gIGNvbnN0IFtyZWR1Y2VkRmllbGRzXSA9IHVzZVN0YXRlKCgpID0+IHJlZHVjZUZpZWxkcyhjb2xsZWN0aW9uLmZpZWxkcywgaTE4bikpO1xuXG4gIC8vIFRoaXMgaGFuZGxlcyB1cGRhdGluZyB0aGUgc2VhcmNoIHF1ZXJ5IChVUkwpIHdoZW4gdGhlIHdoZXJlIGNvbmRpdGlvbnMgY2hhbmdlXG4gIHVzZVRocm90dGxlZEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGhpc3RvcnkubG9jYXRpb24uc2VhcmNoLCB7IGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlLCBkZXB0aDogMTAgfSkgYXMgeyB3aGVyZTogV2hlcmUgfTtcblxuICAgIGNvbnN0IHBhcmFtc1RvS2VlcCA9IHR5cGVvZiBjdXJyZW50UGFyYW1zPy53aGVyZSA9PT0gJ29iamVjdCcgJiYgJ29yJyBpbiBjdXJyZW50UGFyYW1zLndoZXJlID8gY3VycmVudFBhcmFtcy53aGVyZS5vci5yZWR1Y2UoKGtlcHRQYXJhbXMsIHBhcmFtKSA9PiB7XG4gICAgICBjb25zdCBuZXdQYXJhbSA9IHsgLi4ucGFyYW0gfTtcbiAgICAgIGlmIChwYXJhbS5hbmQpIHtcbiAgICAgICAgZGVsZXRlIG5ld1BhcmFtLmFuZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmtlcHRQYXJhbXMsXG4gICAgICAgIG5ld1BhcmFtLFxuICAgICAgXTtcbiAgICB9LCBbXSkgOiBbXTtcblxuICAgIGNvbnN0IGhhc05ld1doZXJlQ29uZGl0aW9ucyA9IGNvbmRpdGlvbnMubGVuZ3RoID4gMDtcblxuXG4gICAgY29uc3QgbmV3V2hlcmVRdWVyeSA9IHtcbiAgICAgIC4uLnR5cGVvZiBjdXJyZW50UGFyYW1zPy53aGVyZSA9PT0gJ29iamVjdCcgJiYgKHZhbGlkYXRlV2hlcmVRdWVyeShjdXJyZW50UGFyYW1zPy53aGVyZSkgfHwgIWhhc05ld1doZXJlQ29uZGl0aW9ucykgPyBjdXJyZW50UGFyYW1zLndoZXJlIDoge30sXG4gICAgICBvcjogW1xuICAgICAgICAuLi5jb25kaXRpb25zLFxuICAgICAgICAuLi5wYXJhbXNUb0tlZXAsXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBpZiAoaGFuZGxlQ2hhbmdlKSBoYW5kbGVDaGFuZ2UobmV3V2hlcmVRdWVyeSBhcyBXaGVyZSk7XG5cbiAgICBjb25zdCBoYXNFeGlzdGluZ0NvbmRpdGlvbnMgPSB0eXBlb2YgY3VycmVudFBhcmFtcz8ud2hlcmUgPT09ICdvYmplY3QnICYmICdvcicgaW4gY3VycmVudFBhcmFtcy53aGVyZTtcblxuICAgIGlmIChtb2RpZnlTZWFyY2hRdWVyeSAmJiAoKGhhc0V4aXN0aW5nQ29uZGl0aW9ucyAmJiAhaGFzTmV3V2hlcmVDb25kaXRpb25zKSB8fCBoYXNOZXdXaGVyZUNvbmRpdGlvbnMpKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2Uoe1xuICAgICAgICBzZWFyY2g6IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgICAgLi4uY3VycmVudFBhcmFtcyxcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIHdoZXJlOiBuZXdXaGVyZVF1ZXJ5LFxuICAgICAgICB9LCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCA1MDAsIFtjb25kaXRpb25zLCBtb2RpZnlTZWFyY2hRdWVyeSwgaGFuZGxlQ2hhbmdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIHtjb25kaXRpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgICAgICB7dCgnZmlsdGVyV2hlcmUnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWwsIGkxOG4pIH0pIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19vci1maWx0ZXJzYH0+XG4gICAgICAgICAgICB7Y29uZGl0aW9ucy5tYXAoKG9yLCBvckluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e29ySW5kZXh9PlxuICAgICAgICAgICAgICAgIHtvckluZGV4ICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgICAgICAgICAgICB7dCgnb3InKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYW5kLWZpbHRlcnNgfT5cbiAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KG9yPy5hbmQpICYmIG9yLmFuZC5tYXAoKF8sIGFuZEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2FuZEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICB7YW5kSW5kZXggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdhbmQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPENvbmRpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbnNbb3JJbmRleF0uYW5kW2FuZEluZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ySW5kZXg9e29ySW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmRJbmRleD17YW5kSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2FuZEluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtyZWR1Y2VkRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNoQ29uZGl0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hZGQtb3JgfVxuICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgaWNvblN0eWxlPVwid2l0aC1ib3JkZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVkdWNlZEZpZWxkcy5sZW5ndGggPiAwKSBkaXNwYXRjaENvbmRpdGlvbnMoeyB0eXBlOiAnYWRkJywgZmllbGQ6IHJlZHVjZWRGaWVsZHNbMF0udmFsdWUgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCdvcicpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICAgIHtjb25kaXRpb25zLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19uby1maWx0ZXJzYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ25vRmlsdGVyc1NldCcpfTwvZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWRkLWZpcnN0LWZpbHRlcmB9XG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICBpY29uU3R5bGU9XCJ3aXRoLWJvcmRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZWR1Y2VkRmllbGRzLmxlbmd0aCA+IDApIGRpc3BhdGNoQ29uZGl0aW9ucyh7IHR5cGU6ICdhZGQnLCBmaWVsZDogcmVkdWNlZEZpZWxkc1swXS52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2FkZEZpbHRlcicpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaGVyZUJ1aWxkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZHVjZXIiLCJxdWVyeVN0cmluZyIsInVzZUhpc3RvcnkiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVRocm90dGxlZEVmZmVjdCIsIkJ1dHRvbiIsInJlZHVjZXIiLCJDb25kaXRpb24iLCJmaWVsZFR5cGVzIiwiZmxhdHRlblRvcExldmVsRmllbGRzIiwidXNlU2VhcmNoUGFyYW1zIiwidmFsaWRhdGVXaGVyZVF1ZXJ5IiwiZ2V0VHJhbnNsYXRpb24iLCJ0cmFuc2Zvcm1XaGVyZVF1ZXJ5IiwiYmFzZUNsYXNzIiwicmVkdWNlRmllbGRzIiwiZmllbGRzIiwiaTE4biIsInJlZHVjZSIsInJlZHVjZWQiLCJmaWVsZCIsInR5cGUiLCJmb3JtYXR0ZWRGaWVsZCIsImxhYmVsIiwibmFtZSIsInZhbHVlIiwib3BlcmF0b3JzIiwibWFwIiwib3BlcmF0b3IiLCJ0IiwicHJvcHMiLCJXaGVyZUJ1aWxkZXIiLCJjb2xsZWN0aW9uIiwibW9kaWZ5U2VhcmNoUXVlcnkiLCJoYW5kbGVDaGFuZ2UiLCJsYWJlbHMiLCJwbHVyYWwiLCJoaXN0b3J5IiwicGFyYW1zIiwid2hlcmUiLCJ3aGVyZUZyb21TZWFyY2giLCJvciIsInRyYW5zZm9ybWVkV2hlcmUiLCJjb25zb2xlIiwid2FybiIsImNvbmRpdGlvbnMiLCJkaXNwYXRjaENvbmRpdGlvbnMiLCJyZWR1Y2VkRmllbGRzIiwiY3VycmVudFBhcmFtcyIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJpZ25vcmVRdWVyeVByZWZpeCIsImRlcHRoIiwicGFyYW1zVG9LZWVwIiwia2VwdFBhcmFtcyIsInBhcmFtIiwibmV3UGFyYW0iLCJhbmQiLCJoYXNOZXdXaGVyZUNvbmRpdGlvbnMiLCJsZW5ndGgiLCJuZXdXaGVyZVF1ZXJ5IiwiaGFzRXhpc3RpbmdDb25kaXRpb25zIiwicmVwbGFjZSIsInN0cmluZ2lmeSIsInBhZ2UiLCJhZGRRdWVyeVByZWZpeCIsImRpdiIsImNsYXNzTmFtZSIsIkZyYWdtZW50IiwidWwiLCJvckluZGV4IiwibGkiLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJfIiwiYW5kSW5kZXgiLCJkaXNwYXRjaCIsImljb24iLCJidXR0b25TdHlsZSIsImljb25Qb3NpdGlvbiIsImljb25TdHlsZSIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxVQUFVLFFBQVEsUUFBUTtBQUNwRCxPQUFPQyxpQkFBaUIsS0FBSztBQUM3QixTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFFL0MsT0FBT0Msd0JBQXdCLG9DQUFvQztBQUNuRSxPQUFPQyxZQUFZLFlBQVk7QUFDL0IsT0FBT0MsYUFBYSxZQUFZO0FBQ2hDLE9BQU9DLGVBQWUsY0FBYztBQUNwQyxPQUFPQyxnQkFBZ0IsZ0JBQWdCO0FBQ3ZDLE9BQU9DLDJCQUEyQiw4Q0FBOEM7QUFDaEYsU0FBU0MsZUFBZSxRQUFRLCtCQUErQjtBQUMvRCxPQUFPQyx3QkFBd0IsdUJBQXVCO0FBRXRELFNBQVNDLGNBQWMsUUFBUSx1Q0FBdUM7QUFDdEUsU0FBU0MsbUJBQW1CLFFBQVEsd0JBQXdCO0FBRTVELE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLGVBQWUsU0FBQ0MsUUFBUUM7V0FBU1Isc0JBQXNCTyxRQUFRRSxNQUFNLENBQUMsU0FBQ0MsU0FBU0M7UUFDcEYsSUFBSSxPQUFPWixVQUFVLENBQUNZLE1BQU1DLElBQUksQ0FBQyxLQUFLLFVBQVU7WUFDOUMs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