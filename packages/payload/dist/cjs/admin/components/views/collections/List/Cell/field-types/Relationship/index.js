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
var _reacti18next = require("react-i18next");
var _Config = require("../../../../../../utilities/Config");
var _useIntersect = /*#__PURE__*/ _interop_require_default(require("../../../../../../../hooks/useIntersect"));
var _RelationshipProvider = require("../../../RelationshipProvider");
var _getTranslation = require("../../../../../../../../utilities/getTranslation");
var _useTitle = require("../../../../../../../hooks/useTitle");
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
var baseClass = "relationship-cell";
var totalToShow = 3;
var RelationshipCell = function(props) {
    var _entry_boundingClientRect, _entry, _field;
    var field = props.field, cellData = props.data;
    var config = (0, _Config.useConfig)();
    var collections = config.collections, routes = config.routes;
    var _useIntersect1 = _sliced_to_array((0, _useIntersect.default)(), 2), intersectionRef = _useIntersect1[0], entry = _useIntersect1[1];
    var _useState = _sliced_to_array((0, _react.useState)([]), 2), values = _useState[0], setValues = _useState[1];
    var _useListRelationships = (0, _RelationshipProvider.useListRelationships)(), getRelationships = _useListRelationships.getRelationships, documents = _useListRelationships.documents;
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), hasRequested = _useState1[0], setHasRequested = _useState1[1];
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var isAboveViewport = ((_entry = entry) === null || _entry === void 0 ? void 0 : (_entry_boundingClientRect = _entry.boundingClientRect) === null || _entry_boundingClientRect === void 0 ? void 0 : _entry_boundingClientRect.top) < window.innerHeight;
    (0, _react.useEffect)(function() {
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
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass,
        ref: intersectionRef
    }, values.map(function(param, i) {
        var relationTo = param.relationTo, value = param.value;
        var document = documents[relationTo][value];
        var relatedCollection = collections.find(function(param) {
            var slug = param.slug;
            return slug === relationTo;
        });
        var label = (0, _useTitle.formatUseAsTitle)({
            doc: document === false ? null : document,
            collection: relatedCollection,
            i18n: i18n,
            config: config
        });
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {
            key: i
        }, document === false && "".concat(t("untitled"), " - ID: ").concat(value), document === null && "".concat(t("loading"), "..."), document && (label || "".concat(t("untitled"), " - ID: ").concat(value)), values.length > i + 1 && ", ");
    }), Array.isArray(cellData) && cellData.length > totalToShow && t("fields:itemsAndMore", {
        items: "",
        count: cellData.length - totalToShow
    }), values.length === 0 && t("noLabel", {
        label: (0, _getTranslation.getTranslation)(((_field = field) === null || _field === void 0 ? void 0 : _field.label) || "", i18n)
    }));
};
var _default = RelationshipCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9SZWxhdGlvbnNoaXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHVzZUludGVyc2VjdCBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9ob29rcy91c2VJbnRlcnNlY3QnO1xuaW1wb3J0IHsgdXNlTGlzdFJlbGF0aW9uc2hpcHMgfSBmcm9tICcuLi8uLi8uLi9SZWxhdGlvbnNoaXBQcm92aWRlcic7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgeyBmb3JtYXRVc2VBc1RpdGxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vaG9va3MvdXNlVGl0bGUnO1xuaW1wb3J0IHsgUHJvcHMgYXMgRGVmYXVsdENlbGxQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG50eXBlIFZhbHVlID0geyByZWxhdGlvblRvOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfTtcbmNvbnN0IGJhc2VDbGFzcyA9ICdyZWxhdGlvbnNoaXAtY2VsbCc7XG5jb25zdCB0b3RhbFRvU2hvdyA9IDM7XG5cbmNvbnN0IFJlbGF0aW9uc2hpcENlbGw6IFJlYWN0LkZDPHtcbiAgZmllbGQ6IERlZmF1bHRDZWxsUHJvcHNbJ2ZpZWxkJ11cbiAgZGF0YTogRGVmYXVsdENlbGxQcm9wc1snY2VsbERhdGEnXVxufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBmaWVsZCwgZGF0YTogY2VsbERhdGEgfSA9IHByb3BzO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBjb2xsZWN0aW9ucywgcm91dGVzIH0gPSBjb25maWc7XG4gIGNvbnN0IFtpbnRlcnNlY3Rpb25SZWYsIGVudHJ5XSA9IHVzZUludGVyc2VjdCgpO1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGU8VmFsdWVbXT4oW10pO1xuICBjb25zdCB7IGdldFJlbGF0aW9uc2hpcHMsIGRvY3VtZW50cyB9ID0gdXNlTGlzdFJlbGF0aW9uc2hpcHMoKTtcbiAgY29uc3QgW2hhc1JlcXVlc3RlZCwgc2V0SGFzUmVxdWVzdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IGlzQWJvdmVWaWV3cG9ydCA9IGVudHJ5Py5ib3VuZGluZ0NsaWVudFJlY3Q/LnRvcCA8IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjZWxsRGF0YSAmJiBpc0Fib3ZlVmlld3BvcnQgJiYgIWhhc1JlcXVlc3RlZCkge1xuICAgICAgY29uc3QgZm9ybWF0dGVkVmFsdWVzOiBWYWx1ZVtdID0gW107XG5cbiAgICAgIGNvbnN0IGFycmF5Q2VsbERhdGEgPSBBcnJheS5pc0FycmF5KGNlbGxEYXRhKSA/IGNlbGxEYXRhIDogW2NlbGxEYXRhXTtcbiAgICAgIGFycmF5Q2VsbERhdGEuc2xpY2UoMCwgKGFycmF5Q2VsbERhdGEubGVuZ3RoIDwgdG90YWxUb1Nob3cgPyBhcnJheUNlbGxEYXRhLmxlbmd0aCA6IHRvdGFsVG9TaG93KSkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGNlbGwgPT09ICdvYmplY3QnICYmICdyZWxhdGlvblRvJyBpbiBjZWxsICYmICd2YWx1ZScgaW4gY2VsbCkge1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlcy5wdXNoKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgodHlwZW9mIGNlbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBjZWxsID09PSAnc3RyaW5nJykgJiYgJ3JlbGF0aW9uVG8nIGluIGZpZWxkICYmIHR5cGVvZiBmaWVsZC5yZWxhdGlvblRvID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlcy5wdXNoKHtcbiAgICAgICAgICAgIHZhbHVlOiBjZWxsLFxuICAgICAgICAgICAgcmVsYXRpb25UbzogZmllbGQucmVsYXRpb25UbyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBnZXRSZWxhdGlvbnNoaXBzKGZvcm1hdHRlZFZhbHVlcyk7XG4gICAgICBzZXRIYXNSZXF1ZXN0ZWQodHJ1ZSk7XG4gICAgICBzZXRWYWx1ZXMoZm9ybWF0dGVkVmFsdWVzKTtcbiAgICB9XG4gIH0sIFtjZWxsRGF0YSwgZmllbGQsIGNvbGxlY3Rpb25zLCBpc0Fib3ZlVmlld3BvcnQsIHJvdXRlcy5hcGksIGhhc1JlcXVlc3RlZCwgZ2V0UmVsYXRpb25zaGlwc10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICByZWY9e2ludGVyc2VjdGlvblJlZn1cbiAgICA+XG4gICAgICB7dmFsdWVzLm1hcCgoeyByZWxhdGlvblRvLCB2YWx1ZSB9LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50ID0gZG9jdW1lbnRzW3JlbGF0aW9uVG9dW3ZhbHVlXTtcbiAgICAgICAgY29uc3QgcmVsYXRlZENvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gcmVsYXRpb25Ubyk7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBmb3JtYXRVc2VBc1RpdGxlKHtcbiAgICAgICAgICBkb2M6IGRvY3VtZW50ID09PSBmYWxzZSA/IG51bGwgOiBkb2N1bWVudCxcbiAgICAgICAgICBjb2xsZWN0aW9uOiByZWxhdGVkQ29sbGVjdGlvbixcbiAgICAgICAgICBpMThuLFxuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgIHtkb2N1bWVudCA9PT0gZmFsc2UgJiYgYCR7dCgndW50aXRsZWQnKX0gLSBJRDogJHt2YWx1ZX1gfVxuICAgICAgICAgICAge2RvY3VtZW50ID09PSBudWxsICYmIGAke3QoJ2xvYWRpbmcnKX0uLi5gfVxuICAgICAgICAgICAge2RvY3VtZW50ICYmIChsYWJlbCB8fCBgJHt0KCd1bnRpdGxlZCcpfSAtIElEOiAke3ZhbHVlfWApfVxuICAgICAgICAgICAge3ZhbHVlcy5sZW5ndGggPiBpICsgMSAmJiAnLCAnfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICAgIHtcbiAgICAgICAgQXJyYXkuaXNBcnJheShjZWxsRGF0YSkgJiYgY2VsbERhdGEubGVuZ3RoID4gdG90YWxUb1Nob3dcbiAgICAgICAgJiYgdCgnZmllbGRzOml0ZW1zQW5kTW9yZScsIHsgaXRlbXM6ICcnLCBjb3VudDogY2VsbERhdGEubGVuZ3RoIC0gdG90YWxUb1Nob3cgfSlcbiAgICAgIH1cbiAgICAgIHt2YWx1ZXMubGVuZ3RoID09PSAwICYmIHQoJ25vTGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihmaWVsZD8ubGFiZWwgfHwgJycsIGkxOG4pIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVsYXRpb25zaGlwQ2VsbDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJ0b3RhbFRvU2hvdyIsIlJlbGF0aW9uc2hpcENlbGwiLCJwcm9wcyIsImVudHJ5IiwiZmllbGQiLCJkYXRhIiwiY2VsbERhdGEiLCJjb25maWciLCJ1c2VDb25maWciLCJjb2xsZWN0aW9ucyIsInJvdXRlcyIsInVzZUludGVyc2VjdCIsImludGVyc2VjdGlvblJlZiIsInVzZVN0YXRlIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlTGlzdFJlbGF0aW9uc2hpcHMiLCJnZXRSZWxhdGlvbnNoaXBzIiwiZG9jdW1lbnRzIiwiaGFzUmVxdWVzdGVkIiwic2V0SGFzUmVxdWVzdGVkIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImlzQWJvdmVWaWV3cG9ydCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwidXNlRWZmZWN0IiwiZm9ybWF0dGVkVmFsdWVzIiwiYXJyYXlDZWxsRGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInNsaWNlIiwibGVuZ3RoIiwiZm9yRWFjaCIsImNlbGwiLCJwdXNoIiwicmVsYXRpb25UbyIsInZhbHVlIiwiYXBpIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwibWFwIiwiaSIsImRvY3VtZW50IiwicmVsYXRlZENvbGxlY3Rpb24iLCJmaW5kIiwic2x1ZyIsImxhYmVsIiwiZm9ybWF0VXNlQXNUaXRsZSIsImRvYyIsImNvbGxlY3Rpb24iLCJSZWFjdCIsIkZyYWdtZW50Iiwia2V5IiwiaXRlbXMiLCJjb3VudCIsImdldFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQXNGQTs7O2VBQUE7Ozs2REF0RjJDOzRCQUNaO3NCQUNMO21FQUNEO29DQUNZOzhCQUNOO3dCQUNFO1FBRzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1AsSUFBTUEsWUFBWTtBQUNsQixJQUFNQyxjQUFjO0FBRXBCLElBQU1DLG1CQUdELFNBQUNDO1FBVW9C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