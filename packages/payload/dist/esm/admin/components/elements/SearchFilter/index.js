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
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "qs";
import { useTranslation } from "react-i18next";
import Search from "../../icons/Search";
import useDebounce from "../../../hooks/useDebounce";
import { useSearchParams } from "../../utilities/SearchParams";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "search-filter";
var SearchFilter = function(props) {
    var _props_fieldName = props.fieldName, fieldName = _props_fieldName === void 0 ? "id" : _props_fieldName, _props_fieldLabel = props.fieldLabel, fieldLabel = _props_fieldLabel === void 0 ? "ID" : _props_fieldLabel, _props_modifySearchQuery = props.modifySearchQuery, modifySearchQuery = _props_modifySearchQuery === void 0 ? true : _props_modifySearchQuery, listSearchableFields = props.listSearchableFields, handleChange = props.handleChange;
    var params = useSearchParams();
    var history = useHistory();
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useState = _sliced_to_array(useState(""), 2), search = _useState[0], setSearch = _useState[1];
    var _useState1 = _sliced_to_array(useState(""), 2), previousSearch = _useState1[0], setPreviousSearch = _useState1[1];
    var placeholder = useRef(t("searchBy", {
        label: getTranslation(fieldLabel, i18n)
    }));
    var debouncedSearch = useDebounce(search, 300);
    useEffect(function() {
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
                    search: queryString.stringify(_object_spread_props(_object_spread({}, params), {
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
    useEffect(function() {
        var _listSearchableFields;
        if (((_listSearchableFields = listSearchableFields) === null || _listSearchableFields === void 0 ? void 0 : _listSearchableFields.length) > 0) {
            placeholder.current = listSearchableFields.reduce(function(prev, curr, i) {
                if (i === 0) {
                    return "".concat(t("searchBy", {
                        label: getTranslation(curr.label || curr.name, i18n)
                    }));
                }
                if (i === listSearchableFields.length - 1) {
                    return "".concat(prev, " ").concat(t("or"), " ").concat(getTranslation(curr.label || curr.name, i18n));
                }
                return "".concat(prev, ", ").concat(getTranslation(curr.label || curr.name, i18n));
            }, "");
        } else {
            placeholder.current = t("searchBy", {
                label: getTranslation(fieldLabel, i18n)
            });
        }
    }, [
        t,
        listSearchableFields,
        i18n,
        fieldLabel
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("input", {
        className: "".concat(baseClass, "__input"),
        placeholder: placeholder.current,
        type: "text",
        value: search || "",
        onChange: function(e) {
            return setSearch(e.target.value);
        }
    }), /*#__PURE__*/ React.createElement(Search, null));
};
export default SearchFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NlYXJjaEZpbHRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vLi4vaWNvbnMvU2VhcmNoJztcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VEZWJvdW5jZSc7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvU2VhcmNoUGFyYW1zJztcbmltcG9ydCB7IFdoZXJlLCBXaGVyZUZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdzZWFyY2gtZmlsdGVyJztcblxuY29uc3QgU2VhcmNoRmlsdGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGZpZWxkTmFtZSA9ICdpZCcsXG4gICAgZmllbGRMYWJlbCA9ICdJRCcsXG4gICAgbW9kaWZ5U2VhcmNoUXVlcnkgPSB0cnVlLFxuICAgIGxpc3RTZWFyY2hhYmxlRmllbGRzLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3ByZXZpb3VzU2VhcmNoLCBzZXRQcmV2aW91c1NlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgcGxhY2Vob2xkZXIgPSB1c2VSZWYodCgnc2VhcmNoQnknLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZExhYmVsLCBpMThuKSB9KSk7XG5cbiAgY29uc3QgZGVib3VuY2VkU2VhcmNoID0gdXNlRGVib3VuY2Uoc2VhcmNoLCAzMDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3V2hlcmU6IFdoZXJlID0geyAuLi50eXBlb2YgcGFyYW1zPy53aGVyZSA9PT0gJ29iamVjdCcgPyBwYXJhbXMud2hlcmUgYXMgV2hlcmUgOiB7fSB9O1xuICAgIGNvbnN0IGZpZWxkTmFtZXNUb1NlYXJjaCA9IGxpc3RTZWFyY2hhYmxlRmllbGRzPy5sZW5ndGggPiAwID8gWy4uLihsaXN0U2VhcmNoYWJsZUZpZWxkcykubWFwKCh7IG5hbWUgfSkgPT4gbmFtZSldIDogW2ZpZWxkTmFtZV07XG5cbiAgICBmaWVsZE5hbWVzVG9TZWFyY2guZm9yRWFjaCgoZmllbGROYW1lVG9TZWFyY2gpID0+IHtcbiAgICAgIGNvbnN0IGhhc09yUXVlcnkgPSBBcnJheS5pc0FycmF5KG5ld1doZXJlLm9yKTtcbiAgICAgIGNvbnN0IGV4aXN0aW5nRmllbGRTZWFyY2hJbmRleCA9IGhhc09yUXVlcnkgPyBuZXdXaGVyZS5vci5maW5kSW5kZXgoKGNvbmRpdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gKGNvbmRpdGlvbj8uW2ZpZWxkTmFtZVRvU2VhcmNoXSBhcyBXaGVyZUZpZWxkKT8ubGlrZTtcbiAgICAgIH0pIDogLTE7XG4gICAgICBpZiAoZGVib3VuY2VkU2VhcmNoKSB7XG4gICAgICAgIGlmICghaGFzT3JRdWVyeSkgbmV3V2hlcmUub3IgPSBbXTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdGaWVsZFNlYXJjaEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAobmV3V2hlcmUub3JbZXhpc3RpbmdGaWVsZFNlYXJjaEluZGV4XVtmaWVsZE5hbWVUb1NlYXJjaF0gYXMgV2hlcmVGaWVsZCkubGlrZSA9IGRlYm91bmNlZFNlYXJjaDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdXaGVyZS5vci5wdXNoKHtcbiAgICAgICAgICAgIFtmaWVsZE5hbWVUb1NlYXJjaF06IHtcbiAgICAgICAgICAgICAgbGlrZTogZGVib3VuY2VkU2VhcmNoLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChleGlzdGluZ0ZpZWxkU2VhcmNoSW5kZXggPiAtMSkge1xuICAgICAgICBuZXdXaGVyZS5vci5zcGxpY2UoZXhpc3RpbmdGaWVsZFNlYXJjaEluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChkZWJvdW5jZWRTZWFyY2ggIT09IHByZXZpb3VzU2VhcmNoKSB7XG4gICAgICBpZiAoaGFuZGxlQ2hhbmdlKSBoYW5kbGVDaGFuZ2UobmV3V2hlcmUgYXMgV2hlcmUpO1xuXG4gICAgICBpZiAobW9kaWZ5U2VhcmNoUXVlcnkpIHtcbiAgICAgICAgaGlzdG9yeS5yZXBsYWNlKHtcbiAgICAgICAgICBzZWFyY2g6IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgICAgd2hlcmU6IG5ld1doZXJlLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc2V0UHJldmlvdXNTZWFyY2goZGVib3VuY2VkU2VhcmNoKTtcbiAgICB9XG4gIH0sIFtkZWJvdW5jZWRTZWFyY2gsIHByZXZpb3VzU2VhcmNoLCBoaXN0b3J5LCBmaWVsZE5hbWUsIHBhcmFtcywgaGFuZGxlQ2hhbmdlLCBtb2RpZnlTZWFyY2hRdWVyeSwgbGlzdFNlYXJjaGFibGVGaWVsZHNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsaXN0U2VhcmNoYWJsZUZpZWxkcz8ubGVuZ3RoID4gMCkge1xuICAgICAgcGxhY2Vob2xkZXIuY3VycmVudCA9IGxpc3RTZWFyY2hhYmxlRmllbGRzLnJlZHVjZTxzdHJpbmc+KChwcmV2LCBjdXJyLCBpKSA9PiB7XG4gICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGAke3QoJ3NlYXJjaEJ5JywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY3Vyci5sYWJlbCB8fCBjdXJyLm5hbWUsIGkxOG4pIH0pfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IGxpc3RTZWFyY2hhYmxlRmllbGRzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXR1cm4gYCR7cHJldn0gJHt0KCdvcicpfSAke2dldFRyYW5zbGF0aW9uKGN1cnIubGFiZWwgfHwgY3Vyci5uYW1lLCBpMThuKX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtwcmV2fSwgJHtnZXRUcmFuc2xhdGlvbihjdXJyLmxhYmVsIHx8IGN1cnIubmFtZSwgaTE4bil9YDtcbiAgICAgIH0sICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxhY2Vob2xkZXIuY3VycmVudCA9IHQoJ3NlYXJjaEJ5JywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oZmllbGRMYWJlbCwgaTE4bikgfSk7XG4gICAgfVxuICB9LCBbdCwgbGlzdFNlYXJjaGFibGVGaWVsZHMsIGkxOG4sIGZpZWxkTGFiZWxdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faW5wdXRgfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXIuY3VycmVudH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17c2VhcmNoIHx8ICcnfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPFNlYXJjaCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRmlsdGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VIaXN0b3J5IiwicXVlcnlTdHJpbmciLCJ1c2VUcmFuc2xhdGlvbiIsIlNlYXJjaCIsInVzZURlYm91bmNlIiwidXNlU2VhcmNoUGFyYW1zIiwiZ2V0VHJhbnNsYXRpb24iLCJiYXNlQ2xhc3MiLCJTZWFyY2hGaWx0ZXIiLCJwcm9wcyIsImZpZWxkTmFtZSIsImZpZWxkTGFiZWwiLCJtb2RpZnlTZWFyY2hRdWVyeSIsImxpc3RTZWFyY2hhYmxlRmllbGRzIiwiaGFuZGxlQ2hhbmdlIiwicGFyYW1zIiwiaGlzdG9yeSIsInQiLCJpMThuIiwic2VhcmNoIiwic2V0U2VhcmNoIiwicHJldmlvdXNTZWFyY2giLCJzZXRQcmV2aW91c1NlYXJjaCIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJkZWJvdW5jZWRTZWFyY2giLCJuZXdXaGVyZSIsIndoZXJlIiwiZmllbGROYW1lc1RvU2VhcmNoIiwibGVuZ3RoIiwibWFwIiwibmFtZSIsImZvckVhY2giLCJmaWVsZE5hbWVUb1NlYXJjaCIsImhhc09yUXVlcnkiLCJBcnJheSIsImlzQXJyYXkiLCJvciIsImV4aXN0aW5nRmllbGRTZWFyY2hJbmRleCIsImZpbmRJbmRleCIsImNvbmRpdGlvbiIsImxpa2UiLCJwdXNoIiwic3BsaWNlIiwicmVwbGFjZSIsInN0cmluZ2lmeSIsInBhZ2UiLCJjdXJyZW50IiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQzNELFNBQVNDLFVBQVUsUUFBUSxtQkFBbUI7QUFDOUMsT0FBT0MsaUJBQWlCLEtBQUs7QUFDN0IsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUUvQyxPQUFPQyxZQUFZLHFCQUFxQjtBQUN4QyxPQUFPQyxpQkFBaUIsNkJBQTZCO0FBQ3JELFNBQVNDLGVBQWUsUUFBUSwrQkFBK0I7QUFFL0QsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUV0RSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxlQUFnQyxTQUFDQztJQUNyQyx1QkFNSUEsTUFMRkMsV0FBQUEsMENBQVksNkNBS1ZELE1BSkZFLFlBQUFBLDRDQUFhLHFEQUlYRixNQUhGRyxtQkFBQUEsMERBQW9CLGlDQUNwQkMsdUJBRUVKLE1BRkZJLHNCQUNBQyxlQUNFTCxNQURGSztJQUdGLElBQU1DLFNBQVNWO0lBQ2YsSUFBTVcsVUFBVWhCO0lBQ2hCLElBQW9CRSxrQkFBQUEsZUFBZSxZQUEzQmUsSUFBWWYsZ0JBQVplLEdBQUdDLE9BQVNoQixnQkFBVGdCO0lBRVgsSUFBNEJuQiw2QkFBQUEsU0FBUyxTQUE5Qm9CLFNBQXFCcEIsY0FBYnFCLFlBQWFyQjtJQUM1QixJQUE0Q0EsOEJBQUFBLFNBQVMsU0FBOUNzQixpQkFBcUN0QixlQUFyQnVCLG9CQUFxQnZCO0lBRTVDLElBQU13QixjQUFjekIsT0FBT21CLEVBQUUs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