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
var _useThrottledEffect = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThrottledEffect"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _reducer = /*#__PURE__*/ _interop_require_default(require("./reducer"));
var _Condition = /*#__PURE__*/ _interop_require_default(require("./Condition"));
var _fieldtypes = /*#__PURE__*/ _interop_require_default(require("./field-types"));
var _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../../../../utilities/flattenTopLevelFields"));
var _SearchParams = require("../../utilities/SearchParams");
var _validateWhereQuery = /*#__PURE__*/ _interop_require_default(require("./validateWhereQuery"));
var _getTranslation = require("../../../../utilities/getTranslation");
var _transformWhereQuery = require("./transformWhereQuery");
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
var baseClass = "where-builder";
var reduceFields = function(fields, i18n) {
    return (0, _flattenTopLevelFields.default)(fields).reduce(function(reduced, field) {
        if (typeof _fieldtypes.default[field.type] === "object") {
            var formattedField = _object_spread_props(_object_spread({
                label: (0, _getTranslation.getTranslation)(field.label || field.name, i18n),
                value: field.name
            }, _fieldtypes.default[field.type]), {
                operators: _fieldtypes.default[field.type].operators.map(function(operator) {
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
    var history = (0, _reactrouterdom.useHistory)();
    var params = (0, _SearchParams.useSearchParams)();
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    // This handles initializing the where conditions from the search query (URL). That way, if you pass in
    // query params to the URL, the where conditions will be initialized from those and displayed in the UI.
    // Example: /admin/collections/posts?where[or][0][and][0][text][equals]=example%20post
    var _useReducer = _sliced_to_array((0, _react.useReducer)(_reducer.default, params.where, function(whereFromSearch) {
        if (modifySearchQuery && whereFromSearch) {
            if ((0, _validateWhereQuery.default)(whereFromSearch)) {
                return whereFromSearch.or;
            }
            // Transform the where query to be in the right format. This will transform something simple like [text][equals]=example%20post to the right format
            var transformedWhere = (0, _transformWhereQuery.transformWhereQuery)(whereFromSearch);
            if ((0, _validateWhereQuery.default)(transformedWhere)) {
                return transformedWhere.or;
            }
            console.warn("Invalid where query in URL. Ignoring.");
        }
        return [];
    }), 2), conditions = _useReducer[0], dispatchConditions = _useReducer[1];
    var _useState = _sliced_to_array((0, _react.useState)(function() {
        return reduceFields(collection.fields, i18n);
    }), 1), reducedFields = _useState[0];
    // This handles updating the search query (URL) when the where conditions change
    (0, _useThrottledEffect.default)(function() {
        var _currentParams, _currentParams1, _currentParams2, _currentParams3;
        var currentParams = _qs.default.parse(history.location.search, {
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
        var newWhereQuery = _object_spread_props(_object_spread({}, typeof ((_currentParams1 = currentParams) === null || _currentParams1 === void 0 ? void 0 : _currentParams1.where) === "object" && ((0, _validateWhereQuery.default)((_currentParams2 = currentParams) === null || _currentParams2 === void 0 ? void 0 : _currentParams2.where) || !hasNewWhereConditions) ? currentParams.where : {}), {
            or: _to_consumable_array(conditions).concat(_to_consumable_array(paramsToKeep))
        });
        if (handleChange) handleChange(newWhereQuery);
        var hasExistingConditions = typeof ((_currentParams3 = currentParams) === null || _currentParams3 === void 0 ? void 0 : _currentParams3.where) === "object" && "or" in currentParams.where;
        if (modifySearchQuery && (hasExistingConditions && !hasNewWhereConditions || hasNewWhereConditions)) {
            history.replace({
                search: _qs.default.stringify(_object_spread_props(_object_spread({}, currentParams), {
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
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, conditions.length > 0 && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("filterWhere", {
        label: (0, _getTranslation.getTranslation)(plural, i18n)
    })), /*#__PURE__*/ _react.default.createElement("ul", {
        className: "".concat(baseClass, "__or-filters")
    }, conditions.map(function(or, orIndex) {
        var _or;
        return /*#__PURE__*/ _react.default.createElement("li", {
            key: orIndex
        }, orIndex !== 0 && /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__label")
        }, t("or")), /*#__PURE__*/ _react.default.createElement("ul", {
            className: "".concat(baseClass, "__and-filters")
        }, Array.isArray((_or = or) === null || _or === void 0 ? void 0 : _or.and) && or.and.map(function(_, andIndex) {
            return /*#__PURE__*/ _react.default.createElement("li", {
                key: andIndex
            }, andIndex !== 0 && /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(baseClass, "__label")
            }, t("and")), /*#__PURE__*/ _react.default.createElement(_Condition.default, {
                value: conditions[orIndex].and[andIndex],
                orIndex: orIndex,
                andIndex: andIndex,
                key: andIndex,
                fields: reducedFields,
                dispatch: dispatchConditions
            }));
        })));
    })), /*#__PURE__*/ _react.default.createElement(_Button.default, {
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
    }, t("or"))), conditions.length === 0 && /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__no-filters")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("noFiltersSet")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
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
var _default = WhereBuilder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3FzJztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHVzZVRocm90dGxlZEVmZmVjdCBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaHJvdHRsZWRFZmZlY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCBDb25kaXRpb24gZnJvbSAnLi9Db25kaXRpb24nO1xuaW1wb3J0IGZpZWxkVHlwZXMgZnJvbSAnLi9maWVsZC10eXBlcyc7XG5pbXBvcnQgZmxhdHRlblRvcExldmVsRmllbGRzIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9mbGF0dGVuVG9wTGV2ZWxGaWVsZHMnO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcyc7XG5pbXBvcnQgdmFsaWRhdGVXaGVyZVF1ZXJ5IGZyb20gJy4vdmFsaWRhdGVXaGVyZVF1ZXJ5JztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgdHJhbnNmb3JtV2hlcmVRdWVyeSB9IGZyb20gJy4vdHJhbnNmb3JtV2hlcmVRdWVyeSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3doZXJlLWJ1aWxkZXInO1xuXG5jb25zdCByZWR1Y2VGaWVsZHMgPSAoZmllbGRzLCBpMThuKSA9PiBmbGF0dGVuVG9wTGV2ZWxGaWVsZHMoZmllbGRzKS5yZWR1Y2UoKHJlZHVjZWQsIGZpZWxkKSA9PiB7XG4gIGlmICh0eXBlb2YgZmllbGRUeXBlc1tmaWVsZC50eXBlXSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWRGaWVsZCA9IHtcbiAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZC5sYWJlbCB8fCBmaWVsZC5uYW1lLCBpMThuKSxcbiAgICAgIHZhbHVlOiBmaWVsZC5uYW1lLFxuICAgICAgLi4uZmllbGRUeXBlc1tmaWVsZC50eXBlXSxcbiAgICAgIG9wZXJhdG9yczogZmllbGRUeXBlc1tmaWVsZC50eXBlXS5vcGVyYXRvcnMubWFwKChvcGVyYXRvcikgPT4gKHtcbiAgICAgICAgLi4ub3BlcmF0b3IsXG4gICAgICAgIGxhYmVsOiBpMThuLnQoYG9wZXJhdG9yczoke29wZXJhdG9yLmxhYmVsfWApLFxuICAgICAgfVxuICAgICAgKSksXG4gICAgICBwcm9wczoge1xuICAgICAgICAuLi5maWVsZCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiBbXG4gICAgICAuLi5yZWR1Y2VkLFxuICAgICAgZm9ybWF0dGVkRmllbGQsXG4gICAgXTtcbiAgfVxuXG4gIHJldHVybiByZWR1Y2VkO1xufSwgW10pO1xuXG4vKipcbiAqIFRoZSBXaGVyZUJ1aWxkZXIgY29tcG9uZW50IGlzIHVzZWQgdG8gcmVuZGVyIHRoZSBmaWx0ZXIgY29udHJvbHMgZm9yIGEgY29sbGVjdGlvbidzIGxpc3Qgdmlldy5cbiAqIEl0IGlzIHBhcnQgb2YgdGhlIHtAbGluayBMaXN0Q29udHJvbHN9IGNvbXBvbmVudCB3aGljaCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgY29udHJvbHMgKHNlYXJjaCwgZmlsdGVyLCB3aGVyZSkuXG4gKi9cbmNvbnN0IFdoZXJlQnVpbGRlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uLFxuICAgIG1vZGlmeVNlYXJjaFF1ZXJ5ID0gdHJ1ZSxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIHBsdXJhbCxcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCBwYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIC8vIFRoaXMgaGFuZGxlcyBpbml0aWFsaXppbmcgdGhlIHdoZXJlIGNvbmRpdGlvbnMgZnJvbSB0aGUgc2VhcmNoIHF1ZXJ5IChVUkwpLiBUaGF0IHdheSwgaWYgeW91IHBhc3MgaW5cbiAgLy8gcXVlcnkgcGFyYW1zIHRvIHRoZSBVUkwsIHRoZSB3aGVyZSBjb25kaXRpb25zIHdpbGwgYmUgaW5pdGlhbGl6ZWQgZnJvbSB0aG9zZSBhbmQgZGlzcGxheWVkIGluIHRoZSBVSS5cbiAgLy8gRXhhbXBsZTogL2FkbWluL2NvbGxlY3Rpb25zL3Bvc3RzP3doZXJlW29yXVswXVthbmRdWzBdW3RleHRdW2VxdWFsc109ZXhhbXBsZSUyMHBvc3RcbiAgY29uc3QgW2NvbmRpdGlvbnMsIGRpc3BhdGNoQ29uZGl0aW9uc10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHBhcmFtcy53aGVyZSwgKHdoZXJlRnJvbVNlYXJjaCkgPT4ge1xuICAgIGlmIChtb2RpZnlTZWFyY2hRdWVyeSAmJiB3aGVyZUZyb21TZWFyY2gpIHtcbiAgICAgIGlmICh2YWxpZGF0ZVdoZXJlUXVlcnkod2hlcmVGcm9tU2VhcmNoKSkge1xuICAgICAgICByZXR1cm4gd2hlcmVGcm9tU2VhcmNoLm9yO1xuICAgICAgfVxuXG4gICAgICAvLyBUcmFuc2Zvcm0gdGhlIHdoZXJlIHF1ZXJ5IHRvIGJlIGluIHRoZSByaWdodCBmb3JtYXQuIFRoaXMgd2lsbCB0cmFuc2Zvcm0gc29tZXRoaW5nIHNpbXBsZSBsaWtlIFt0ZXh0XVtlcXVhbHNdPWV4YW1wbGUlMjBwb3N0IHRvIHRoZSByaWdodCBmb3JtYXRcbiAgICAgIGNvbnN0IHRyYW5zZm9ybWVkV2hlcmUgPSB0cmFuc2Zvcm1XaGVyZVF1ZXJ5KHdoZXJlRnJvbVNlYXJjaCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZVdoZXJlUXVlcnkodHJhbnNmb3JtZWRXaGVyZSkpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkV2hlcmUub3I7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCB3aGVyZSBxdWVyeSBpbiBVUkwuIElnbm9yaW5nLicpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH0pO1xuXG4gIGNvbnN0IFtyZWR1Y2VkRmllbGRzXSA9IHVzZVN0YXRlKCgpID0+IHJlZHVjZUZpZWxkcyhjb2xsZWN0aW9uLmZpZWxkcywgaTE4bikpO1xuXG4gIC8vIFRoaXMgaGFuZGxlcyB1cGRhdGluZyB0aGUgc2VhcmNoIHF1ZXJ5IChVUkwpIHdoZW4gdGhlIHdoZXJlIGNvbmRpdGlvbnMgY2hhbmdlXG4gIHVzZVRocm90dGxlZEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBhcmFtcyA9IHF1ZXJ5U3RyaW5nLnBhcnNlKGhpc3RvcnkubG9jYXRpb24uc2VhcmNoLCB7IGlnbm9yZVF1ZXJ5UHJlZml4OiB0cnVlLCBkZXB0aDogMTAgfSkgYXMgeyB3aGVyZTogV2hlcmUgfTtcblxuICAgIGNvbnN0IHBhcmFtc1RvS2VlcCA9IHR5cGVvZiBjdXJyZW50UGFyYW1zPy53aGVyZSA9PT0gJ29iamVjdCcgJiYgJ29yJyBpbiBjdXJyZW50UGFyYW1zLndoZXJlID8gY3VycmVudFBhcmFtcy53aGVyZS5vci5yZWR1Y2UoKGtlcHRQYXJhbXMsIHBhcmFtKSA9PiB7XG4gICAgICBjb25zdCBuZXdQYXJhbSA9IHsgLi4ucGFyYW0gfTtcbiAgICAgIGlmIChwYXJhbS5hbmQpIHtcbiAgICAgICAgZGVsZXRlIG5ld1BhcmFtLmFuZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmtlcHRQYXJhbXMsXG4gICAgICAgIG5ld1BhcmFtLFxuICAgICAgXTtcbiAgICB9LCBbXSkgOiBbXTtcblxuICAgIGNvbnN0IGhhc05ld1doZXJlQ29uZGl0aW9ucyA9IGNvbmRpdGlvbnMubGVuZ3RoID4gMDtcblxuXG4gICAgY29uc3QgbmV3V2hlcmVRdWVyeSA9IHtcbiAgICAgIC4uLnR5cGVvZiBjdXJyZW50UGFyYW1zPy53aGVyZSA9PT0gJ29iamVjdCcgJiYgKHZhbGlkYXRlV2hlcmVRdWVyeShjdXJyZW50UGFyYW1zPy53aGVyZSkgfHwgIWhhc05ld1doZXJlQ29uZGl0aW9ucykgPyBjdXJyZW50UGFyYW1zLndoZXJlIDoge30sXG4gICAgICBvcjogW1xuICAgICAgICAuLi5jb25kaXRpb25zLFxuICAgICAgICAuLi5wYXJhbXNUb0tlZXAsXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBpZiAoaGFuZGxlQ2hhbmdlKSBoYW5kbGVDaGFuZ2UobmV3V2hlcmVRdWVyeSBhcyBXaGVyZSk7XG5cbiAgICBjb25zdCBoYXNFeGlzdGluZ0NvbmRpdGlvbnMgPSB0eXBlb2YgY3VycmVudFBhcmFtcz8ud2hlcmUgPT09ICdvYmplY3QnICYmICdvcicgaW4gY3VycmVudFBhcmFtcy53aGVyZTtcblxuICAgIGlmIChtb2RpZnlTZWFyY2hRdWVyeSAmJiAoKGhhc0V4aXN0aW5nQ29uZGl0aW9ucyAmJiAhaGFzTmV3V2hlcmVDb25kaXRpb25zKSB8fCBoYXNOZXdXaGVyZUNvbmRpdGlvbnMpKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2Uoe1xuICAgICAgICBzZWFyY2g6IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgICAgLi4uY3VycmVudFBhcmFtcyxcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIHdoZXJlOiBuZXdXaGVyZVF1ZXJ5LFxuICAgICAgICB9LCB7IGFkZFF1ZXJ5UHJlZml4OiB0cnVlIH0pLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCA1MDAsIFtjb25kaXRpb25zLCBtb2RpZnlTZWFyY2hRdWVyeSwgaGFuZGxlQ2hhbmdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIHtjb25kaXRpb25zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgICAgICB7dCgnZmlsdGVyV2hlcmUnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihwbHVyYWwsIGkxOG4pIH0pIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19vci1maWx0ZXJzYH0+XG4gICAgICAgICAgICB7Y29uZGl0aW9ucy5tYXAoKG9yLCBvckluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e29ySW5kZXh9PlxuICAgICAgICAgICAgICAgIHtvckluZGV4ICE9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICAgICAgICAgICAgICB7dCgnb3InKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYW5kLWZpbHRlcnNgfT5cbiAgICAgICAgICAgICAgICAgIHtBcnJheS5pc0FycmF5KG9yPy5hbmQpICYmIG9yLmFuZC5tYXAoKF8sIGFuZEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2FuZEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICB7YW5kSW5kZXggIT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdhbmQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPENvbmRpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmRpdGlvbnNbb3JJbmRleF0uYW5kW2FuZEluZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ySW5kZXg9e29ySW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmRJbmRleD17YW5kSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2FuZEluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPXtyZWR1Y2VkRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNoQ29uZGl0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hZGQtb3JgfVxuICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgaWNvblN0eWxlPVwid2l0aC1ib3JkZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVkdWNlZEZpZWxkcy5sZW5ndGggPiAwKSBkaXNwYXRjaENvbmRpdGlvbnMoeyB0eXBlOiAnYWRkJywgZmllbGQ6IHJlZHVjZWRGaWVsZHNbMF0udmFsdWUgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCdvcicpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICAgIHtjb25kaXRpb25zLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19uby1maWx0ZXJzYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e3QoJ25vRmlsdGVyc1NldCcpfTwvZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYWRkLWZpcnN0LWZpbHRlcmB9XG4gICAgICAgICAgICBpY29uPVwicGx1c1wiXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICBpY29uU3R5bGU9XCJ3aXRoLWJvcmRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZWR1Y2VkRmllbGRzLmxlbmd0aCA+IDApIGRpc3BhdGNoQ29uZGl0aW9ucyh7IHR5cGU6ICdhZGQnLCBmaWVsZDogcmVkdWNlZEZpZWxkc1swXS52YWx1ZSB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2FkZEZpbHRlcicpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaGVyZUJ1aWxkZXI7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwicmVkdWNlRmllbGRzIiwiZmllbGRzIiwiaTE4biIsImZsYXR0ZW5Ub3BMZXZlbEZpZWxkcyIsInJlZHVjZSIsInJlZHVjZWQiLCJmaWVsZCIsImZpZWxkVHlwZXMiLCJ0eXBlIiwiZm9ybWF0dGVkRmllbGQiLCJsYWJlbCIsImdldFRyYW5zbGF0aW9uIiwibmFtZSIsInZhbHVlIiwib3BlcmF0b3JzIiwibWFwIiwib3BlcmF0b3IiLCJ0IiwicHJvcHMiLCJXaGVyZUJ1aWxkZXIiLCJjb2xsZWN0aW9uIiwibW9kaWZ5U2VhcmNoUXVlcnkiLCJoYW5kbGVDaGFuZ2UiLCJsYWJlbHMiLCJwbHVyYWwiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInBhcmFtcyIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVRyYW5zbGF0aW9uIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJ3aGVyZSIsIndoZXJlRnJvbVNlYXJjaCIsInZhbGlkYXRlV2hlcmVRdWVyeSIsIm9yIiwidHJhbnNmb3JtZWRXaGVyZSIsInRyYW5zZm9ybVdoZXJlUXVlcnkiLCJjb25zb2xlIiwid2FybiIsImNvbmRpdGlvbnMiLCJkaXNwYXRjaENvbmRpdGlvbnMiLCJ1c2VTdGF0ZSIsInJlZHVjZWRGaWVsZHMiLCJ1c2VUaHJvdHRsZWRFZmZlY3QiLCJjdXJyZW50UGFyYW1zIiwicXVlcnlTdHJpbmciLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiaWdub3JlUXVlcnlQcmVmaXgiLCJkZXB0aCIsInBhcmFtc1RvS2VlcCIsImtlcHRQYXJhbXMiLCJwYXJhbSIsIm5ld1BhcmFtIiwiYW5kIiwiaGFzTmV3V2hlcmVDb25kaXRpb25zIiwibGVuZ3RoIiwibmV3V2hlcmVRdWVyeSIsImhhc0V4aXN0aW5nQ29uZGl0aW9ucyIsInJlcGxhY2UiLCJzdHJpbmdpZnkiLCJwYWdlIiwiYWRkUXVlcnlQcmVmaXgiLCJkaXYiLCJjbGFzc05hbWUiLCJSZWFjdCIsIkZyYWdtZW50IiwidWwiLCJvckluZGV4IiwibGkiLCJrZXkiLCJBcnJheSIsImlzQXJyYXkiLCJfIiwiYW5kSW5kZXgiLCJDb25kaXRpb24iLCJkaXNwYXRjaCIsIkJ1dHRvbiIsImljb24iLCJidXR0b25TdHlsZSIsImljb25Qb3NpdGlvbiIsImljb25TdHlsZSIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7K0JBME1BOzs7ZUFBQTs7OzZEQTFNNEM7eURBQ3BCOzhCQUNHOzRCQUNJO3lFQUVBOzZEQUNaOzhEQUNDO2dFQUNFO2lFQUNDOzRFQUNXOzRCQUNGO3lFQUNEOzhCQUVBO21DQUNLO1FBRTdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsZUFBZSxTQUFDQyxRQUFRQztXQUFTQyxJQUFBQSw4QkFBcUIsRUFBQ0YsUUFBUUcsTUFBTSxDQUFDLFNBQUNDLFNBQVNDO1FBQ3BGLElBQUksT0FBT0MsbUJBQVUsQ0FBQ0QsTUFBTUUsSUFBSSxDQUFDLEtBQUssVUFBVTtZQUM5QyxJQUFNQyxpQkFBaUI7Z0JBQ3JCQyxPQUFPQyxJQUFBQSw4QkFBYyxFQUFDTCxNQUFNSSxLQUFLLElBQUlKLE1BQU1NLElBQUksRUFBRVY7Z0JBQ2pEVyxPQUFPUCxNQUFNTSxJQUFJO2VBQ2RMLG1CQUFVLENBQUNELE1BQU1FLElBQUksQ0FBQztnQkFDekJNLFdBQVdQLG1CQUFVLENBQUNELE1BQU1FLElBQUksQ0FBQyxDQUFDTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQzsyQkFBYyx3Q0FDMURBO3dCQUNI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