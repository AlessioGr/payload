import React from "react";
import { useTranslation } from "react-i18next";
import { getTranslation } from "../../../../../../../../utilities/getTranslation";
var BlocksCell = function(param) {
    var data = param.data, field = param.field;
    var _useTranslation = useTranslation("fields"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var selectedBlocks = data ? data.map(function(param) {
        var blockType = param.blockType;
        return blockType;
    }) : [];
    var blockLabels = field.blocks.map(function(s) {
        return {
            slug: s.slug,
            label: getTranslation(s.labels.singular, i18n)
        };
    });
    var label = "0 ".concat(getTranslation(field.labels.plural, i18n));
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
        label = "".concat(selectedBlocks.length, " ").concat(getTranslation(field.labels.plural, i18n), " - ").concat(t("fields:itemsAndMore", {
            items: formatBlockList(selectedBlocks.slice(0, itemsToShow)),
            count: more
        }));
    } else if (selectedBlocks.length > 0) {
        label = "".concat(selectedBlocks.length, " ").concat(getTranslation(selectedBlocks.length === 1 ? field.labels.singular : field.labels.plural, i18n), " - ").concat(formatBlockList(selectedBlocks));
    }
    return /*#__PURE__*/ React.createElement("span", null, label);
};
export default BlocksCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9CbG9ja3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgQmxvY2tGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG50eXBlIFByb3BzID0ge1xuICBkYXRhOiBhbnlcbiAgZmllbGQ6IEJsb2NrRmllbGRcbn1cblxuY29uc3QgQmxvY2tzQ2VsbDpSZWFjdC5GQzxQcm9wcz4gPSAoeyBkYXRhLCBmaWVsZCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcbiAgY29uc3Qgc2VsZWN0ZWRCbG9ja3MgPSBkYXRhID8gZGF0YS5tYXAoKHsgYmxvY2tUeXBlIH0pID0+IGJsb2NrVHlwZSkgOiBbXTtcbiAgY29uc3QgYmxvY2tMYWJlbHMgPSBmaWVsZC5ibG9ja3MubWFwKChzKSA9PiAoeyBzbHVnOiBzLnNsdWcsIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihzLmxhYmVscy5zaW5ndWxhciwgaTE4bikgfSkpO1xuXG4gIGxldCBsYWJlbCA9IGAwICR7Z2V0VHJhbnNsYXRpb24oZmllbGQubGFiZWxzLnBsdXJhbCwgaTE4bil9YDtcblxuICBjb25zdCBmb3JtYXRCbG9ja0xpc3QgPSAoYmxvY2tzKSA9PiBibG9ja3MubWFwKChiKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyZWQgPSBibG9ja0xhYmVscy5maWx0ZXIoKGYpID0+IGYuc2x1ZyA9PT0gYik/LlswXTtcbiAgICByZXR1cm4gZmlsdGVyZWQ/LmxhYmVsO1xuICB9KS5qb2luKCcsICcpO1xuXG4gIGNvbnN0IGl0ZW1zVG9TaG93ID0gNTtcbiAgaWYgKHNlbGVjdGVkQmxvY2tzLmxlbmd0aCA+IGl0ZW1zVG9TaG93KSB7XG4gICAgY29uc3QgbW9yZSA9IHNlbGVjdGVkQmxvY2tzLmxlbmd0aCAtIGl0ZW1zVG9TaG93O1xuICAgIGxhYmVsID0gYCR7c2VsZWN0ZWRCbG9ja3MubGVuZ3RofSAke2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVscy5wbHVyYWwsIGkxOG4pfSAtICR7dCgnZmllbGRzOml0ZW1zQW5kTW9yZScsIHsgaXRlbXM6IGZvcm1hdEJsb2NrTGlzdChzZWxlY3RlZEJsb2Nrcy5zbGljZSgwLCBpdGVtc1RvU2hvdykpLCBjb3VudDogbW9yZSB9KX1gO1xuICB9IGVsc2UgaWYgKHNlbGVjdGVkQmxvY2tzLmxlbmd0aCA+IDApIHtcbiAgICBsYWJlbCA9IGAke3NlbGVjdGVkQmxvY2tzLmxlbmd0aH0gJHtnZXRUcmFuc2xhdGlvbihzZWxlY3RlZEJsb2Nrcy5sZW5ndGggPT09IDEgPyBmaWVsZC5sYWJlbHMuc2luZ3VsYXIgOiBmaWVsZC5sYWJlbHMucGx1cmFsLCBpMThuKX0gLSAke2Zvcm1hdEJsb2NrTGlzdChzZWxlY3RlZEJsb2Nrcyl9YDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBCbG9ja3NDZWxsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJnZXRUcmFuc2xhdGlvbiIsIkJsb2Nrc0NlbGwiLCJkYXRhIiwiZmllbGQiLCJ0IiwiaTE4biIsInNlbGVjdGVkQmxvY2tzIiwibWFwIiwiYmxvY2tUeXBlIiwiYmxvY2tMYWJlbHMiLCJibG9ja3MiLCJzIiwic2x1ZyIsImxhYmVsIiwibGFiZWxzIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJmb3JtYXRCbG9ja0xpc3QiLCJiIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJmIiwiam9pbiIsIml0ZW1zVG9TaG93IiwibGVuZ3RoIiwibW9yZSIsIml0ZW1zIiwic2xpY2UiLCJjb3VudCIsInNwYW4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBRS9DLFNBQVNDLGNBQWMsUUFBUSxtREFBbUQ7QUFPbEYsSUFBTUMsYUFBNkI7UUFBR0MsYUFBQUEsTUFBTUMsY0FBQUE7SUFDMUMsSUFBb0JKLGtCQUFBQSxlQUFlLFdBQTNCSyxJQUFZTCxnQkFBWkssR0FBR0MsT0FBU04sZ0JBQVRNO0lBQ1gsSUFBTUMsaUJBQWlCSixPQUFPQSxLQUFLSyxHQUFHLENBQUM7WUFBR0Msa0JBQUFBO2VBQWdCQTtTQUFhLEVBQUU7SUFDekUsSUFBTUMsY0FBY04sTUFBTU8sTUFBTSxDQUFDSCxHQUFHLENBQUMsU0FBQ0k7ZUFBTztZQUFFQyxNQUFNRCxFQUFFQyxJQUFJO1lBQUVDLE9BQU9iLGVBQWVXLEVBQUVHLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFVjtRQUFNOztJQUU1RyxJQUFJUSxRQUFRLEFBQUMsS0FBOEMsT0FBMUNiLGVBQWVHLE1BQU1XLE1BQU0sQ0FBQ0UsTUFBTSxFQUFFWDtJQUVyRCxJQUFNWSxrQkFBa0IsU0FBQ1A7ZUFBV0EsT0FBT0gsR0FBRyxDQUFDLFNBQUNXO2dCQUM3QlQscUJBQ1ZVO1lBRFAsSUFBTUEsWUFBV1Ysc0JBQUFBLFlBQVlXLE1BQU0sQ0FBQyxTQUFDQzt1QkFBTUEsRUFBRVQsSUFBSSxLQUFLTTs0QkFBckNULDBDQUFBQSxtQkFBeUMsQ0FBQyxFQUFFO1lBQzdELFFBQU9VLFlBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBVU4sS0FBSztRQUN4QixHQUFHUyxJQUFJLENBQUM7O0lBRVIsSUFBTUMsY0FBYztJQUNwQixJQUFJakIsZUFBZWtCLE1BQU0sR0FBR0QsYUFBYTtRQUN2QyxJQUFNRSxPQUFPbkIsZUFBZWtCLE1BQU0sR0FBR0Q7UUFDckNWLFFBQVEsQUFBQyxHQUEyQmIsT0FBekJNLGVBQWVrQixNQUFNLEVBQUMsS0FBa0RwQixPQUEvQ0osZUFBZUcsTUFBTVcsTUFBTSxDQUFDRSxNQUFNLEVBQUVYLE9BQU0sT0FBNkcsT0FBeEdELEVBQUUsdUJBQXVCO1lBQUVzQixPQUFPVCxnQkFBZ0JYLGVBQWVxQixLQUFLLENBQUMsR0FBR0o7WUFBZUssT0FBT0g7UUFBSztJQUMxTCxPQUFPLElBQUluQixlQUFla0IsTUFBTSxHQUFHLEdBQUc7UUFDcENYLFFBQVEsQUFBQyxHQUEyQmIsT0FBekJNLGVBQWVrQixNQUFNLEVBQUMsS0FBd0dQLE9BQXJHakIsZUFBZU0sZUFBZWtCLE1BQU0sS0FBSyxJQUFJckIsTUFBTVcsTUFBTSxDQUFDQyxRQUFRLEdBQUdaLE1BQU1XLE1BQU0sQ0FBQ0UsTUFBTSxFQUFFWCxPQUFNLE9BQXFDLE9BQWhDWSxnQkFBZ0JYO0lBQzNKO0lBRUEscUJBQ0Usb0JBQUN1QixjQUFNaEI7QUFFWDtBQUNBLGVBQWVaLFdBQVcifQ==