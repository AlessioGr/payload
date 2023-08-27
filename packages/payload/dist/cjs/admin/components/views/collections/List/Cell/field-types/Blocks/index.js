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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _getTranslation = require("../../../../../../../../utilities/getTranslation");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var BlocksCell = function(param) {
    var data = param.data, field = param.field;
    var _useTranslation = (0, _reacti18next.useTranslation)("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var selectedBlocks = data ? data.map(function(param) {
        var blockType = param.blockType;
        return blockType;
    }) : [];
    var blockLabels = field.blocks.map(function(s) {
        return {
            slug: s.slug,
            label: (0, _getTranslation.getTranslation)(s.labels.singular, i18n)
        };
    });
    var label = "0 ".concat((0, _getTranslation.getTranslation)(field.labels.plural, i18n));
    var formatBlockList = function(blocks) {
        return blocks.map(function(b) {
            var _blockLabels_filter, _filtered;
            var filtered = (_blockLabels_filter = blockLabels.filter(function(f) {
                return f.slug === b;
            })) === null || _blockLabels_filter === void 0 ? void 0 : _blockLabels_filter[0];
            return (_filtered = filtered) === null || _filtered === void 0 ? void 0 : _filtered.label;
        }).join(", ");
    };
    var itemsToShow = 5;
    if (selectedBlocks.length > itemsToShow) {
        var more = selectedBlocks.length - itemsToShow;
        label = "".concat(selectedBlocks.length, " ").concat((0, _getTranslation.getTranslation)(field.labels.plural, i18n), " - ").concat(t("fields:itemsAndMore", {
            items: formatBlockList(selectedBlocks.slice(0, itemsToShow)),
            count: more
        }));
    } else if (selectedBlocks.length > 0) {
        label = "".concat(selectedBlocks.length, " ").concat((0, _getTranslation.getTranslation)(selectedBlocks.length === 1 ? field.labels.singular : field.labels.plural, i18n), " - ").concat(formatBlockList(selectedBlocks));
    }
    return /*#__PURE__*/ _react.default.createElement("span", null, label);
};
var _default = BlocksCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9CbG9ja3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgQmxvY2tGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG50eXBlIFByb3BzID0ge1xuICBkYXRhOiBhbnlcbiAgZmllbGQ6IEJsb2NrRmllbGRcbn1cblxuY29uc3QgQmxvY2tzQ2VsbDpSZWFjdC5GQzxQcm9wcz4gPSAoeyBkYXRhLCBmaWVsZCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcbiAgY29uc3Qgc2VsZWN0ZWRCbG9ja3MgPSBkYXRhID8gZGF0YS5tYXAoKHsgYmxvY2tUeXBlIH0pID0+IGJsb2NrVHlwZSkgOiBbXTtcbiAgY29uc3QgYmxvY2tMYWJlbHMgPSBmaWVsZC5ibG9ja3MubWFwKChzKSA9PiAoeyBzbHVnOiBzLnNsdWcsIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihzLmxhYmVscy5zaW5ndWxhciwgaTE4bikgfSkpO1xuXG4gIGxldCBsYWJlbCA9IGAwICR7Z2V0VHJhbnNsYXRpb24oZmllbGQubGFiZWxzLnBsdXJhbCwgaTE4bil9YDtcblxuICBjb25zdCBmb3JtYXRCbG9ja0xpc3QgPSAoYmxvY2tzKSA9PiBibG9ja3MubWFwKChiKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBibG9ja0xhYmVscy5maWx0ZXIoKGYpID0+IGYuc2x1ZyA9PT0gYik/LlswXTtcbiAgICByZXR1cm4gZmlsdGVyZWQ/LmxhYmVsO1xuICB9KS5qb2luKCcsICcpO1xuXG4gIGNvbnN0IGl0ZW1zVG9TaG93ID0gNTtcbiAgaWYgKHNlbGVjdGVkQmxvY2tzLmxlbmd0aCA+IGl0ZW1zVG9TaG93KSB7XG4gICAgY29uc3QgbW9yZSA9IHNlbGVjdGVkQmxvY2tzLmxlbmd0aCAtIGl0ZW1zVG9TaG93O1xuICAgIGxhYmVsID0gYCR7c2VsZWN0ZWRCbG9ja3MubGVuZ3RofSAke2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVscy5wbHVyYWwsIGkxOG4pfSAtICR7dCgnZmllbGRzOml0ZW1zQW5kTW9yZScsIHsgaXRlbXM6IGZvcm1hdEJsb2NrTGlzdChzZWxlY3RlZEJsb2Nrcy5zbGljZSgwLCBpdGVtc1RvU2hvdykpLCBjb3VudDogbW9yZSB9KX1gO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkQmxvY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsYWJlbCA9IGAke3NlbGVjdGVkQmxvY2tzLmxlbmd0aH0gJHtnZXRUcmFuc2xhdGlvbihzZWxlY3RlZEJsb2Nrcy5sZW5ndGggPT09IDEgPyBmaWVsZC5sYWJlbHMuc2luZ3VsYXIgOiBmaWVsZC5sYWJlbHMucGx1cmFsLCBpMThuKX0gLSAke2Zvcm1hdEJsb2NrTGlzdChzZWxlY3RlZEJsb2Nrcyl9YDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCbG9ja3NDZWxsO1xuIl0sIm5hbWVzIjpbIkJsb2Nrc0NlbGwiLCJkYXRhIiwiZmllbGQiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJpMThuIiwic2VsZWN0ZWRCbG9ja3MiLCJtYXAiLCJibG9ja1R5cGUiLCJibG9ja0xhYmVscyIsImJsb2NrcyIsInMiLCJzbHVnIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInNpbmd1bGFyIiwicGx1cmFsIiwiZm9ybWF0QmxvY2tMaXN0IiwiYiIsImZpbHRlcmVkIiwiZmlsdGVyIiwiZiIsImpvaW4iLCJpdGVtc1RvU2hvdyIsImxlbmd0aCIsIm1vcmUiLCJpdGVtcyIsInNsaWNlIiwiY291bnQiLCJzcGFuIl0sIm1hcHBpbmdzIjoiOzs7OytCQWtDQTs7O2VBQUE7Ozs0REFsQ2tCOzRCQUNhOzhCQUVBOzs7Ozs7QUFPL0IsSUFBTUEsYUFBNkI7UUFBR0MsYUFBQUEsTUFBTUMsY0FBQUE7SUFDMUMsSUFBb0JDLGtCQUFBQSxJQUFBQSw0QkFBYyxFQUFDLFdBQTNCQyxJQUFZRCxnQkFBWkMsR0FBR0MsT0FBU0YsZ0JBQVRFO0lBQ1gsSUFBTUMsaUJBQWlCTCxPQUFPQSxLQUFLTSxHQUFHLENBQUM7WUFBR0Msa0JBQUFBO2VBQWdCQTtTQUFhLEVBQUU7SUFDekUsSUFBTUMsY0FBY1AsTUFBTVEsTUFBTSxDQUFDSCxHQUFHLENBQUMsU0FBQ0k7ZUFBTztZQUFFQyxNQUFNRCxFQUFFQyxJQUFJO1lBQUVDLE9BQU9DLElBQUFBLDhCQUFjLEVBQUNILEVBQUVJLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFWDtRQUFNOztJQUU1RyxJQUFJUSxRQUFRLEFBQUMsS0FBOEMsT0FBMUNDLElBQUFBLDhCQUFjLEVBQUNaLE1BQU1hLE1BQU0sQ0FBQ0UsTUFBTSxFQUFFWjtJQUVyRCxJQUFNYSxrQkFBa0IsU0FBQ1I7ZUFBV0EsT0FBT0gsR0FBRyxDQUFDLFNBQUNZO2dCQUM3QlYscUJBQ1ZXO1lBRFAsSUFBTUEsWUFBV1gsc0JBQUFBLFlBQVlZLE1BQU0sQ0FBQyxTQUFDQzt1QkFBTUEsRUFBRVYsSUFBSSxLQUFLTzs0QkFBckNWLDBDQUFBQSxtQkFBeUMsQ0FBQyxFQUFFO1lBQzdELFFBQU9XLFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVVAsS0FBSztRQUN4QixHQUFHVSxJQUFJLENBQUM7O0lBRVIsSUFBTUMsY0FBYztJQUNwQixJQUFJbEIsZUFBZW1CLE1BQU0sR0FBR0QsYUFBYTtRQUN2QyxJQUFNRSxPQUFPcEIsZUFBZW1CLE1BQU0sR0FBR0Q7UUFDckNYLFFBQVEsQUFBQyxHQUEyQkMsT0FBekJSLGVBQWVtQixNQUFNLEVBQUMsS0FBa0RyQixPQUEvQ1UsSUFBQUEsOEJBQWMsRUFBQ1osTUFBTWEsTUFBTSxDQUFDRSxNQUFNLEVBQUVaLE9BQU0sT0FBNkcsT0FBeEdELEVBQUUsdUJBQXVCO1lBQUV1QixPQUFPVCxnQkFBZ0JaLGVBQWVzQixLQUFLLENBQUMsR0FBR0o7WUFBZUssT0FBT0g7UUFBSztJQUMxTCxPQUFPLElBQUlwQixlQUFlbUIsTUFBTSxHQUFHLEdBQUc7UUFDcENaLFFBQVEsQUFBQyxHQUEyQkMsT0FBekJSLGVBQWVtQixNQUFNLEVBQUMsS0FBd0dQLE9BQXJHSixJQUFBQSw4QkFBYyxFQUFDUixlQUFlbUIsTUFBTSxLQUFLLElBQUl2QixNQUFNYSxNQUFNLENBQUNDLFFBQVEsR0FBR2QsTUFBTWEsTUFBTSxDQUFDRSxNQUFNLEVBQUVaLE9BQU0sT0FBcUMsT0FBaENhLGdCQUFnQlo7SUFDM0o7SUFFQSxxQkFDRSw2QkFBQ3dCLGNBQU1qQjtBQUVYO0lBQ0EsV0FBZWIifQ==