function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../../../../utilities/Config";
import useIntersect from "../../../../../../../hooks/useIntersect";
import { useListRelationships } from "../../../RelationshipProvider";
import { getTranslation } from "../../../../../../../../utilities/getTranslation";
import { formatUseAsTitle } from "../../../../../../../hooks/useTitle";
import "./index.scss";
var baseClass = "relationship-cell";
var totalToShow = 3;
var RelationshipCell = function(props) {
    var _entry_boundingClientRect, _entry, _field;
    var field = props.field, cellData = props.data;
    var config = useConfig();
    var collections = config.collections, routes = config.routes;
    var _useIntersect = _sliced_to_array(useIntersect(), 2), intersectionRef = _useIntersect[0], entry = _useIntersect[1];
    var _useState = _sliced_to_array(useState([]), 2), values = _useState[0], setValues = _useState[1];
    var _useListRelationships = useListRelationships(), getRelationships = _useListRelationships.getRelationships, documents = _useListRelationships.documents;
    var _useState1 = _sliced_to_array(useState(false), 2), hasRequested = _useState1[0], setHasRequested = _useState1[1];
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var isAboveViewport = ((_entry = entry) === null || _entry === void 0 ? void 0 : (_entry_boundingClientRect = _entry.boundingClientRect) === null || _entry_boundingClientRect === void 0 ? void 0 : _entry_boundingClientRect.top) < window.innerHeight;
    useEffect(function() {
        if (cellData && isAboveViewport && !hasRequested) {
            var formattedValues = [];
            var arrayCellData = Array.isArray(cellData) ? cellData : [
                cellData
            ];
            arrayCellData.slice(0, arrayCellData.length < totalToShow ? arrayCellData.length : totalToShow).forEach(function(cell) {
                if (typeof cell === "object" && "relationTo" in cell && "value" in cell) {
                    formattedValues.push(cell);
                }
                if ((typeof cell === "number" || typeof cell === "string") && "relationTo" in field && typeof field.relationTo === "string") {
                    formattedValues.push({
                        value: cell,
                        relationTo: field.relationTo
                    });
                }
            });
            getRelationships(formattedValues);
            setHasRequested(true);
            setValues(formattedValues);
        }
    }, [
        cellData,
        field,
        collections,
        isAboveViewport,
        routes.api,
        hasRequested,
        getRelationships
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass,
        ref: intersectionRef
    }, values.map(function(param, i) {
        var relationTo = param.relationTo, value = param.value;
        var document = documents[relationTo][value];
        var relatedCollection = collections.find(function(param) {
            var slug = param.slug;
            return slug === relationTo;
        });
        var label = formatUseAsTitle({
            doc: document === false ? null : document,
            collection: relatedCollection,
            i18n: i18n,
            config: config
        });
        return /*#__PURE__*/ React.createElement(React.Fragment, {
            key: i
        }, document === false && "".concat(t("untitled"), " - ID: ").concat(value), document === null && "".concat(t("loading"), "..."), document && (label || "".concat(t("untitled"), " - ID: ").concat(value)), values.length > i + 1 && ", ");
    }), Array.isArray(cellData) && cellData.length > totalToShow && t("fields:itemsAndMore", {
        items: "",
        count: cellData.length - totalToShow
    }), values.length === 0 && t("noLabel", {
        label: getTranslation(((_field = field) === null || _field === void 0 ? void 0 : _field.label) || "", i18n)
    }));
};
export default RelationshipCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9SZWxhdGlvbnNoaXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHVzZUludGVyc2VjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9ob29rcy91c2VJbnRlcnNlY3QnO1xuaW1wb3J0IHsgdXNlTGlzdFJlbGF0aW9uc2hpcHMgfSBmcm9tICcuLi8uLi8uLi9SZWxhdGlvbnNoaXBQcm92aWRlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBmb3JtYXRVc2VBc1RpdGxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlVGl0bGUnO1xuaW1wb3J0IHsgUHJvcHMgYXMgRGVmYXVsdENlbGxQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG50eXBlIFZhbHVlID0geyByZWxhdGlvblRvOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfTtcbmNvbnN0IGJhc2VDbGFzcyA9ICdyZWxhdGlvbnNoaXAtY2VsbCc7XG5jb25zdCB0b3RhbFRvU2hvdyA9IDM7XG5cbmNvbnN0IFJlbGF0aW9uc2hpcENlbGw6IFJlYWN0LkZDPHtcbiAgZmllbGQ6IERlZmF1bHRDZWxsUHJvcHNbJ2ZpZWxkJ11cbiAgZGF0YTogRGVmYXVsdENlbGxQcm9wc1snY2VsbERhdGEnXVxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBmaWVsZCwgZGF0YTogY2VsbERhdGEgfSA9IHByb3BzO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBjb2xsZWN0aW9ucywgcm91dGVzIH0gPSBjb25maWc7XG4gIGNvbnN0IFtpbnRlcnNlY3Rpb25SZWYsIGVudHJ5XSA9IHVzZUludGVyc2VjdCgpO1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGU8VmFsdWVbXT4oW10pO1xuICBjb25zdCB7IGdldFJlbGF0aW9uc2hpcHMsIGRvY3VtZW50cyB9ID0gdXNlTGlzdFJlbGF0aW9uc2hpcHMoKTtcbiAgY29uc3QgW2hhc1JlcXVlc3RlZCwgc2V0SGFzUmVxdWVzdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IGlzQWJvdmVWaWV3cG9ydCA9IGVudHJ5Py5ib3VuZGluZ0NsaWVudFJlY3Q/LnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjZWxsRGF0YSAmJiBpc0Fib3ZlVmlld3BvcnQgJiYgIWhhc1JlcXVlc3RlZCkge1xuICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWVzOiBWYWx1ZVtdID0gW107XG5cbiAgICAgIGNvbnN0IGFycmF5Q2VsbERhdGEgPSBBcnJheS5pc0FycmF5KGNlbGxEYXRhKSA/IGNlbGxEYXRhIDogW2NlbGxEYXRhXTtcbiAgICAgIGFycmF5Q2VsbERhdGEuc2xpY2UoMCwgKGFycmF5Q2VsbERhdGEubGVuZ3RoIDwgdG90YWxUb1Nob3cgPyBhcnJheUNlbGxEYXRhLmxlbmd0aCA6IHRvdGFsVG9TaG93KSkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNlbGwgPT09ICdvYmplY3QnICYmICdyZWxhdGlvblRvJyBpbiBjZWxsICYmICd2YWx1ZScgaW4gY2VsbCkge1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlcy5wdXNoKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIGNlbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBjZWxsID09PSAnc3RyaW5nJykgJiYgJ3JlbGF0aW9uVG8nIGluIGZpZWxkICYmIHR5cGVvZiBmaWVsZC5yZWxhdGlvblRvID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBjZWxsLFxuICAgICAgICAgICAgcmVsYXRpb25UbzogZmllbGQucmVsYXRpb25UbyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBnZXRSZWxhdGlvbnNoaXBzKGZvcm1hdHRlZFZhbHVlcyk7XG4gICAgICBzZXRIYXNSZXF1ZXN0ZWQodHJ1ZSk7XG4gICAgICBzZXRWYWx1ZXMoZm9ybWF0dGVkVmFsdWVzKTtcbiAgICB9XG4gIH0sIFtjZWxsRGF0YSwgZmllbGQsIGNvbGxlY3Rpb25zLCBpc0Fib3ZlVmlld3BvcnQsIHJvdXRlcy5hcGksIGhhc1JlcXVlc3RlZCwgZ2V0UmVsYXRpb25zaGlwc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICByZWY9e2ludGVyc2VjdGlvblJlZn1cbiAgICA+XG4gICAgICB7dmFsdWVzLm1hcCgoeyByZWxhdGlvblRvLCB2YWx1ZSB9LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZG9jdW1lbnRzW3JlbGF0aW9uVG9dW3ZhbHVlXTtcbiAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gcmVsYXRpb25Ubyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBmb3JtYXRVc2VBc1RpdGxlKHtcbiAgICAgICAgICBkb2M6IGRvY3VtZW50ID09PSBmYWxzZSA/IG51bGwgOiBkb2N1bWVudCxcbiAgICAgICAgICBjb2xsZWN0aW9uOiByZWxhdGVkQ29sbGVjdGlvbixcbiAgICAgICAgICBpMThuLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgIHtkb2N1bWVudCA9PT0gZmFsc2UgJiYgYCR7dCgndW50aXRsZWQnKX0gLSBJRDogJHt2YWx1ZX1gfVxuICAgICAgICAgICAge2RvY3VtZW50ID09PSBudWxsICYmIGAke3QoJ2xvYWRpbmcnKX0uLi5gfVxuICAgICAgICAgICAge2RvY3VtZW50ICYmIChsYWJlbCB8fCBgJHt0KCd1bnRpdGxlZCcpfSAtIElEOiAke3ZhbHVlfWApfVxuICAgICAgICAgICAge3ZhbHVlcy5sZW5ndGggPiBpICsgMSAmJiAnLCAnfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIHtcbiAgICAgICAgQXJyYXkuaXNBcnJheShjZWxsRGF0YSkgJiYgY2VsbERhdGEubGVuZ3RoID4gdG90YWxUb1Nob3dcbiAgICAgICAgJiYgdCgnZmllbGRzOml0ZW1zQW5kTW9yZScsIHsgaXRlbXM6ICcnLCBjb3VudDogY2VsbERhdGEubGVuZ3RoIC0gdG90YWxUb1Nob3cgfSlcbiAgICAgIH1cbiAgICAgIHt2YWx1ZXMubGVuZ3RoID09PSAwICYmIHQoJ25vTGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZD8ubGFiZWwgfHwgJycsIGkxOG4pIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsYXRpb25zaGlwQ2VsbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJ1c2VJbnRlcnNlY3QiLCJ1c2VMaXN0UmVsYXRpb25zaGlwcyIsImdldFRyYW5zbGF0aW9uIiwiZm9ybWF0VXNlQXNUaXRsZSIsImJhc2VDbGFzcyIsInRvdGFsVG9TaG93IiwiUmVsYXRpb25zaGlwQ2VsbCIsInByb3BzIiwiZW50cnkiLCJmaWVsZCIsImRhdGEiLCJjZWxsRGF0YSIsImNvbmZpZyIsImNvbGxlY3Rpb25zIiwicm91dGVzIiwiaW50ZXJzZWN0aW9uUmVmIiwidmFsdWVzIiwic2V0VmFsdWVzIiwiZ2V0UmVsYXRpb25zaGlwcyIsImRvY3VtZW50cyIsImhhc1JlcXVlc3RlZCIsInNldEhhc1JlcXVlc3RlZCIsInQiLCJpMThuIiwiaXNBYm92ZVZpZXdwb3J0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJmb3JtYXR0ZWRWYWx1ZXMiLCJhcnJheUNlbGxEYXRhIiwiQXJyYXkiLCJpc0FycmF5Iiwic2xpY2UiLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2VsbCIsInB1c2giLCJyZWxhdGlvblRvIiwidmFsdWUiLCJhcGkiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJtYXAiLCJpIiwiZG9jdW1lbnQiLCJyZWxhdGVkQ29sbGVjdGlvbiIsImZpbmQiLCJzbHVnIiwibGFiZWwiLCJkb2MiLCJjb2xsZWN0aW9uIiwiRnJhZ21lbnQiLCJrZXkiLCJpdGVtcyIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxTQUFTLFFBQVEsUUFBUTtBQUNuRCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSxxQ0FBcUM7QUFDL0QsT0FBT0Msa0JBQWtCLDBDQUEwQztBQUNuRSxTQUFTQyxvQkFBb0IsUUFBUSxnQ0FBZ0M7QUFDckUsU0FBU0MsY0FBYyxR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