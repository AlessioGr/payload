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
var _reactrouterdom = require("react-router-dom");
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reacti18next = require("react-i18next");
var _Search = /*#__PURE__*/ _interop_require_default(require("../../icons/Search"));
var _useDebounce = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useDebounce"));
var _SearchParams = require("../../utilities/SearchParams");
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
var baseClass = "search-filter";
var SearchFilter = function(props) {
    var _props_fieldName = props.fieldName, fieldName = _props_fieldName === void 0 ? "id" : _props_fieldName, _props_fieldLabel = props.fieldLabel, fieldLabel = _props_fieldLabel === void 0 ? "ID" : _props_fieldLabel, _props_modifySearchQuery = props.modifySearchQuery, modifySearchQuery = _props_modifySearchQuery === void 0 ? true : _props_modifySearchQuery, listSearchableFields = props.listSearchableFields, handleChange = props.handleChange;
    var params = (0, _SearchParams.useSearchParams)();
    var history = (0, _reactrouterdom.useHistory)();
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array((0, _react.useState)(""), 2), search = _useState[0], setSearch = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)(""), 2), previousSearch = _useState1[0], setPreviousSearch = _useState1[1];
    var placeholder = (0, _react.useRef)(t("searchBy", {
        label: (0, _getTranslation.getTranslation)(fieldLabel, i18n)
    }));
    var debouncedSearch = (0, _useDebounce.default)(search, 300);
    (0, _react.useEffect)(function() {
        var _params, _listSearchableFields;
        var newWhere = _object_spread({}, typeof ((_params = params) === null || _params === void 0 ? void 0 : _params.where) === "object" ? params.where : {});
        var fieldNamesToSearch = ((_listSearchableFields = listSearchableFields) === null || _listSearchableFields === void 0 ? void 0 : _listSearchableFields.length) > 0 ? _to_consumable_array(listSearchableFields.map(function(param) {
            var name = param.name;
            return name;
        })) : [
            fieldName
        ];
        fieldNamesToSearch.forEach(function(fieldNameToSearch) {
            var hasOrQuery = Array.isArray(newWhere.or);
            var existingFieldSearchIndex = hasOrQuery ? newWhere.or.findIndex(function(condition) {
                var _this, _condition;
                return (_this = (_condition = condition) === null || _condition === void 0 ? void 0 : _condition[fieldNameToSearch]) === null || _this === void 0 ? void 0 : _this.like;
            }) : -1;
            if (debouncedSearch) {
                if (!hasOrQuery) newWhere.or = [];
                if (existingFieldSearchIndex > -1) {
                    newWhere.or[existingFieldSearchIndex][fieldNameToSearch].like = debouncedSearch;
                } else {
                    newWhere.or.push(_define_property({}, fieldNameToSearch, {
                        like: debouncedSearch
                    }));
                }
            } else if (existingFieldSearchIndex > -1) {
                newWhere.or.splice(existingFieldSearchIndex, 1);
            }
        });
        if (debouncedSearch !== previousSearch) {
            if (handleChange) handleChange(newWhere);
            if (modifySearchQuery) {
                history.replace({
                    search: _qs.default.stringify(_object_spread_props(_object_spread({}, params), {
                        page: 1,
                        where: newWhere
                    }))
                });
            }
            setPreviousSearch(debouncedSearch);
        }
    }, [
        debouncedSearch,
        previousSearch,
        history,
        fieldName,
        params,
        handleChange,
        modifySearchQuery,
        listSearchableFields
    ]);
    (0, _react.useEffect)(function() {
        var _listSearchableFields;
        if (((_listSearchableFields = listSearchableFields) === null || _listSearchableFields === void 0 ? void 0 : _listSearchableFields.length) > 0) {
            placeholder.current = listSearchableFields.reduce(function(prev, curr, i) {
                if (i === 0) {
                    return "".concat(t("searchBy", {
                        label: (0, _getTranslation.getTranslation)(curr.label || curr.name, i18n)
                    }));
                }
                if (i === listSearchableFields.length - 1) {
                    return "".concat(prev, " ").concat(t("or"), " ").concat((0, _getTranslation.getTranslation)(curr.label || curr.name, i18n));
                }
                return "".concat(prev, ", ").concat((0, _getTranslation.getTranslation)(curr.label || curr.name, i18n));
            }, "");
        } else {
            placeholder.current = t("searchBy", {
                label: (0, _getTranslation.getTranslation)(fieldLabel, i18n)
            });
        }
    }, [
        t,
        listSearchableFields,
        i18n,
        fieldLabel
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: "".concat(baseClass, "__input"),
        placeholder: placeholder.current,
        type: "text",
        value: search || "",
        onChange: function(e) {
            return setSearch(e.target.value);
        }
    }), /*#__PURE__*/ _react.default.createElement(_Search.default, null));
};
var _default = SearchFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NlYXJjaEZpbHRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vLi4vaWNvbnMvU2VhcmNoJztcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VEZWJvdW5jZSc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IFdoZXJlLCBXaGVyZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdzZWFyY2gtZmlsdGVyJztcblxuY29uc3QgU2VhcmNoRmlsdGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGZpZWxkTmFtZSA9ICdpZCcsXG4gICAgZmllbGRMYWJlbCA9ICdJRCcsXG4gICAgbW9kaWZ5U2VhcmNoUXVlcnkgPSB0cnVlLFxuICAgIGxpc3RTZWFyY2hhYmxlRmllbGRzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ByZXZpb3VzU2VhcmNoLCBzZXRQcmV2aW91c1NlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgcGxhY2Vob2xkZXIgPSB1c2VSZWYodCgnc2VhcmNoQnknLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZExhYmVsLCBpMThuKSB9KSk7XG5cbiAgY29uc3QgZGVib3VuY2VkU2VhcmNoID0gdXNlRGVib3VuY2Uoc2VhcmNoLCAzMDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3V2hlcmU6IFdoZXJlID0geyAuLi50eXBlb2YgcGFyYW1zPy53aGVyZSA9PT0gJ29iamVjdCcgPyBwYXJhbXMud2hlcmUgYXMgV2hlcmUgOiB7fSB9O1xuICAgIGNvbnN0IGZpZWxkTmFtZXNUb1NlYXJjaCA9IGxpc3RTZWFyY2hhYmxlRmllbGRzPy5sZW5ndGggPiAwID8gWy4uLihsaXN0U2VhcmNoYWJsZUZpZWxkcykubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSldIDogW2ZpZWxkTmFtZV07XG5cbiAgICBmaWVsZE5hbWVzVG9TZWFyY2guZm9yRWFjaCgoZmllbGROYW1lVG9TZWFyY2gpID0+IHtcbiAgICAgIGNvbnN0IGhhc09yUXVlcnkgPSBBcnJheS5pc0FycmF5KG5ld1doZXJlLm9yKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nRmllbGRTZWFyY2hJbmRleCA9IGhhc09yUXVlcnkgPyBuZXdXaGVyZS5vci5maW5kSW5kZXgoKGNvbmRpdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gKGNvbmRpdGlvbj8uW2ZpZWxkTmFtZVRvU2VhcmNoXSBhcyBXaGVyZUZpZWxkKT8ubGlrZTtcbiAgICAgIH0pIDogLTE7XG4gICAgICBpZiAoZGVib3VuY2VkU2VhcmNoKSB7XG4gICAgICAgIGlmICghaGFzT3JRdWVyeSkgbmV3V2hlcmUub3IgPSBbXTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdGaWVsZFNlYXJjaEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAobmV3V2hlcmUub3JbZXhpc3RpbmdGaWVsZFNlYXJjaEluZGV4XVtmaWVsZE5hbWVUb1NlYXJjaF0gYXMgV2hlcmVGaWVsZCkubGlrZSA9IGRlYm91bmNlZFNlYXJjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdXaGVyZS5vci5wdXNoKHtcbiAgICAgICAgICAgIFtmaWVsZE5hbWVUb1NlYXJjaF06IHtcbiAgICAgICAgICAgICAgbGlrZTogZGVib3VuY2VkU2VhcmNoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChleGlzdGluZ0ZpZWxkU2VhcmNoSW5kZXggPiAtMSkge1xuICAgICAgICBuZXdXaGVyZS5vci5zcGxpY2UoZXhpc3RpbmdGaWVsZFNlYXJjaEluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkZWJvdW5jZWRTZWFyY2ggIT09IHByZXZpb3VzU2VhcmNoKSB7XG4gICAgICBpZiAoaGFuZGxlQ2hhbmdlKSBoYW5kbGVDaGFuZ2UobmV3V2hlcmUgYXMgV2hlcmUpO1xuXG4gICAgICBpZiAobW9kaWZ5U2VhcmNoUXVlcnkpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHtcbiAgICAgICAgICBzZWFyY2g6IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgd2hlcmU6IG5ld1doZXJlLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2V0UHJldmlvdXNTZWFyY2goZGVib3VuY2VkU2VhcmNoKTtcbiAgICB9XG4gIH0sIFtkZWJvdW5jZWRTZWFyY2gsIHByZXZpb3VzU2VhcmNoLCBoaXN0b3J5LCBmaWVsZE5hbWUsIHBhcmFtcywgaGFuZGxlQ2hhbmdlLCBtb2RpZnlTZWFyY2hRdWVyeSwgbGlzdFNlYXJjaGFibGVGaWVsZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsaXN0U2VhcmNoYWJsZUZpZWxkcz8ubGVuZ3RoID4gMCkge1xuICAgICAgcGxhY2Vob2xkZXIuY3VycmVudCA9IGxpc3RTZWFyY2hhYmxlRmllbGRzLnJlZHVjZTxzdHJpbmc+KChwcmV2LCBjdXJyLCBpKSA9PiB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGAke3QoJ3NlYXJjaEJ5JywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY3Vyci5sYWJlbCB8fCBjdXJyLm5hbWUsIGkxOG4pIH0pfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IGxpc3RTZWFyY2hhYmxlRmllbGRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXR1cm4gYCR7cHJldn0gJHt0KCdvcicpfSAke2dldFRyYW5zbGF0aW9uKGN1cnIubGFiZWwgfHwgY3Vyci5uYW1lLCBpMThuKX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtwcmV2fSwgJHtnZXRUcmFuc2xhdGlvbihjdXJyLmxhYmVsIHx8IGN1cnIubmFtZSwgaTE4bil9YDtcbiAgICAgIH0sICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxhY2Vob2xkZXIuY3VycmVudCA9IHQoJ3NlYXJjaEJ5JywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oZmllbGRMYWJlbCwgaTE4bikgfSk7XG4gICAgfVxuICB9LCBbdCwgbGlzdFNlYXJjaGFibGVGaWVsZHMsIGkxOG4sIGZpZWxkTGFiZWxdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW5wdXRgfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIuY3VycmVudH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17c2VhcmNoIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPFNlYXJjaCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRmlsdGVyO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlNlYXJjaEZpbHRlciIsInByb3BzIiwiZmllbGROYW1lIiwiZmllbGRMYWJlbCIsIm1vZGlmeVNlYXJjaFF1ZXJ5IiwibGlzdFNlYXJjaGFibGVGaWVsZHMiLCJoYW5kbGVDaGFuZ2UiLCJwYXJhbXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInNldFNlYXJjaCIsInByZXZpb3VzU2VhcmNoIiwic2V0UHJldmlvdXNTZWFyY2giLCJwbGFjZWhvbGRlciIsInVzZVJlZiIsImxhYmVsIiwiZ2V0VHJhbnNsYXRpb24iLCJkZWJvdW5jZWRTZWFyY2giLCJ1c2VEZWJvdW5jZSIsInVzZUVmZmVjdCIsIm5ld1doZXJlIiwid2hlcmUiLCJmaWVsZE5hbWVzVG9TZWFyY2giLCJsZW5ndGgiLCJtYXAiLCJuYW1lIiwiZm9yRWFjaCIsImZpZWxkTmFtZVRvU2VhcmNoIiwiaGFzT3JRdWVyeSIsIkFycmF5IiwiaXNBcnJheSIsIm9yIiwiZXhpc3RpbmdGaWVsZFNlYXJjaEluZGV4IiwiZmluZEluZGV4IiwiY29uZGl0aW9uIiwibGlrZSIsInB1c2giLCJzcGxpY2UiLCJyZXBsYWNlIiwicXVlcnlTdHJpbmciLCJzdHJpbmdpZnkiLCJwYWdlIiwiY3VycmVudCIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiaSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7OytCQTRHQTs7O2VBQUE7Ozs2REE1R21EOzhCQUN4Qjt5REFDSDs0QkFDTzs2REFFWjtrRUFDSzs0QkFDUTs4QkFFRDtRQUV4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGVBQWdDLFNBQUNDO0lBQ3JDLHVCQU1JQSxNQUxGQyxXQUFBQSwwQ0FBWSw2Q0FLVkQsTUFKRkUsWUFBQUEsNENBQWEscURBSVhGLE1BSEZHLG1CQUFBQSwwREFBb0IsaUNBQ3BCQyx1QkFFRUosTUFGRkksc0JBQ0FDLGVBQ0VMLE1BREZLO0lBR0YsSUFBTUMsU0FBU0MsSUFBQUEsNkJBQWU7SUFDOUIsSUFBTUMsVUFBVUMsSUFBQUEsMEJBQVU7SUFDMUIsSUFBb0JDLGtCQUFBQSxJQUFBQSw0QkFBYyxFQUFDLFlBQTNCQyxJQUFZRCxnQkFBWkMsR0FBR0MsT0FBU0YsZ0JBQVRFO0lBRVgsSUFBNEJDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUMsU0FBOUJDLFNBQXFCRCxjQUFiRSxZQUFhRjtJQUM1QixJQUE0Q0EsOEJBQUFBLElBQUFBLGVBQVEsRUFBQyxTQUE5Q0csaUJBQXFDSCxlQUFyQkksb0JBQXFCSjtJQUU1QyxJQUFNSyxjQUFjQyxJQUFBQSxhQUFNLEVBQUNSLEVBQUUsWUFBWTtRQUFFUyxPQUFPQyxJQUFBQSw4QkFBYyxFQUFDbkIsWUFBWVU7SUFBTTtJQUVuRixJQUFNVSxrQkFBa0JDLElBQUFBLG9CQUFXLEVBQUNULFFBQVE7SUFF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