"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getLocalizedSortProperty", {
    enumerable: true,
    get: function() {
        return getLocalizedSortProperty;
    }
});
var _types = require("payload/types");
var _utilities = require("payload/utilities");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var getLocalizedSortProperty = function(param) {
    var incomingSegments = param.segments, config = param.config, incomingFields = param.fields, locale = param.locale, incomingResult = param.result;
    // If localization is not enabled, accept exactly
    // what is sent in
    if (!config.localization) {
        return incomingSegments.join(".");
    }
    // Flatten incoming fields (row, etc)
    var fields = (0, _utilities.flattenTopLevelFields)(incomingFields);
    var segments = _to_consumable_array(incomingSegments);
    // Retrieve first segment, and remove from segments
    var firstSegment = segments.shift();
    // Attempt to find a matched field
    var matchedField = fields.find(function(field) {
        return (0, _types.fieldAffectsData)(field) && field.name === firstSegment;
    });
    if (matchedField && !(0, _types.fieldIsPresentationalOnly)(matchedField)) {
        var nextFields;
        var remainingSegments = _to_consumable_array(segments);
        var localizedSegment = matchedField.name;
        if (matchedField.localized) {
            // Check to see if next segment is a locale
            if (segments.length > 0) {
                var nextSegmentIsLocale = config.localization.localeCodes.includes(remainingSegments[0]);
                // If next segment is locale, remove it from remaining segments
                // and use it to localize the current segment
                if (nextSegmentIsLocale) {
                    var nextSegment = remainingSegments.shift();
                    localizedSegment = "".concat(matchedField.name, ".").concat(nextSegment);
                }
            } else {
                // If no more segments, but field is localized, use default locale
                localizedSegment = "".concat(matchedField.name, ".").concat(locale);
            }
        }
        // If there are subfields, pass them through
        if (matchedField.type === "tab" || matchedField.type === "group" || matchedField.type === "array") {
            nextFields = matchedField.fields;
        }
        if (matchedField.type === "blocks") {
            nextFields = matchedField.blocks.reduce(function(flattenedBlockFields, block) {
                return _to_consumable_array(flattenedBlockFields).concat(_to_consumable_array(block.fields.filter(function(blockField) {
                    return (0, _types.fieldAffectsData)(blockField) && blockField.name !== "blockType" && blockField.name !== "blockName" || !(0, _types.fieldAffectsData)(blockField);
                })));
            }, []);
        }
        var result = incomingResult ? "".concat(incomingResult, ".").concat(localizedSegment) : localizedSegment;
        if (nextFields) {
            return getLocalizedSortProperty({
                segments: remainingSegments,
                config: config,
                fields: nextFields,
                locale: locale,
                result: result
            });
        }
        return result;
    }
    return incomingSegments.join(".");
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL2dldExvY2FsaXplZFNvcnRQcm9wZXJ0eS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICdwYXlsb2FkL2NvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCwgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHsgZmxhdHRlblRvcExldmVsRmllbGRzIH0gZnJvbSAncGF5bG9hZC91dGlsaXRpZXMnO1xuXG50eXBlIEFyZ3MgPSB7XG4gIHNlZ21lbnRzOiBzdHJpbmdbXVxuICBjb25maWc6IFNhbml0aXplZENvbmZpZ1xuICBmaWVsZHM6IEZpZWxkW11cbiAgbG9jYWxlOiBzdHJpbmdcbiAgcmVzdWx0Pzogc3RyaW5nXG59XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhbGl6ZWRTb3J0UHJvcGVydHkgPSAoe1xuICBzZWdtZW50czogaW5jb21pbmdTZWdtZW50cyxcbiAgY29uZmlnLFxuICBmaWVsZHM6IGluY29taW5nRmllbGRzLFxuICBsb2NhbGUsXG4gIHJlc3VsdDogaW5jb21pbmdSZXN1bHQsXG59OiBBcmdzKTogc3RyaW5nID0+IHtcbiAgLy8gSWYgbG9jYWxpemF0aW9uIGlzIG5vdCBlbmFibGVkLCBhY2NlcHQgZXhhY3RseVxuICAvLyB3aGF0IGlzIHNlbnQgaW5cbiAgaWYgKCFjb25maWcubG9jYWxpemF0aW9uKSB7XG4gICAgcmV0dXJuIGluY29taW5nU2VnbWVudHMuam9pbignLicpO1xuICB9XG5cbiAgLy8gRmxhdHRlbiBpbmNvbWluZyBmaWVsZHMgKHJvdywgZXRjKVxuICBjb25zdCBmaWVsZHMgPSBmbGF0dGVuVG9wTGV2ZWxGaWVsZHMoaW5jb21pbmdGaWVsZHMpO1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gWy4uLmluY29taW5nU2VnbWVudHNdO1xuXG4gIC8vIFJldHJpZXZlIGZpcnN0IHNlZ21lbnQsIGFuZCByZW1vdmUgZnJvbSBzZWdtZW50c1xuICBjb25zdCBmaXJzdFNlZ21lbnQgPSBzZWdtZW50cy5zaGlmdCgpO1xuXG4gIC8vIEF0dGVtcHQgdG8gZmluZCBhIG1hdGNoZWQgZmllbGRcbiAgY29uc3QgbWF0Y2hlZEZpZWxkID0gZmllbGRzLmZpbmQoKGZpZWxkKSA9PiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSBmaXJzdFNlZ21lbnQpO1xuXG4gIGlmIChtYXRjaGVkRmllbGQgJiYgIWZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkobWF0Y2hlZEZpZWxkKSkge1xuICAgIGxldCBuZXh0RmllbGRzOiBGaWVsZFtdO1xuICAgIGNvbnN0IHJlbWFpbmluZ1NlZ21lbnRzID0gWy4uLnNlZ21lbnRzXTtcbiAgICBsZXQgbG9jYWxpemVkU2VnbWVudCA9IG1hdGNoZWRGaWVsZC5uYW1lO1xuXG4gICAgaWYgKG1hdGNoZWRGaWVsZC5sb2NhbGl6ZWQpIHtcbiAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBuZXh0IHNlZ21lbnQgaXMgYSBsb2NhbGVcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5leHRTZWdtZW50SXNMb2NhbGUgPSBjb25maWcubG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLmluY2x1ZGVzKHJlbWFpbmluZ1NlZ21lbnRzWzBdKTtcblxuICAgICAgICAvLyBJZiBuZXh0IHNlZ21lbnQgaXMgbG9jYWxlLCByZW1vdmUgaXQgZnJvbSByZW1haW5pbmcgc2VnbWVudHNcbiAgICAgICAgLy8gYW5kIHVzZSBpdCB0byBsb2NhbGl6ZSB0aGUgY3VycmVudCBzZWdtZW50XG4gICAgICAgIGlmIChuZXh0U2VnbWVudElzTG9jYWxlKSB7XG4gICAgICAgICAgY29uc3QgbmV4dFNlZ21lbnQgPSByZW1haW5pbmdTZWdtZW50cy5zaGlmdCgpO1xuICAgICAgICAgIGxvY2FsaXplZFNlZ21lbnQgPSBgJHttYXRjaGVkRmllbGQubmFtZX0uJHtuZXh0U2VnbWVudH1gO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBubyBtb3JlIHNlZ21lbnRzLCBidXQgZmllbGQgaXMgbG9jYWxpemVkLCB1c2UgZGVmYXVsdCBsb2NhbGVcbiAgICAgICAgbG9jYWxpemVkU2VnbWVudCA9IGAke21hdGNoZWRGaWVsZC5uYW1lfS4ke2xvY2FsZX1gO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGFyZSBzdWJmaWVsZHMsIHBhc3MgdGhlbSB0aHJvdWdoXG4gICAgaWYgKG1hdGNoZWRGaWVsZC50eXBlID09PSAndGFiJyB8fCBtYXRjaGVkRmllbGQudHlwZSA9PT0gJ2dyb3VwJyB8fCBtYXRjaGVkRmllbGQudHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgbmV4dEZpZWxkcyA9IG1hdGNoZWRGaWVsZC5maWVsZHM7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoZWRGaWVsZC50eXBlID09PSAnYmxvY2tzJykge1xuICAgICAgbmV4dEZpZWxkcyA9IG1hdGNoZWRGaWVsZC5ibG9ja3MucmVkdWNlKChmbGF0dGVuZWRCbG9ja0ZpZWxkcywgYmxvY2spID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5mbGF0dGVuZWRCbG9ja0ZpZWxkcyxcbiAgICAgICAgICAuLi5ibG9jay5maWVsZHMuZmlsdGVyKChibG9ja0ZpZWxkKSA9PiAoZmllbGRBZmZlY3RzRGF0YShibG9ja0ZpZWxkKSAmJiAoYmxvY2tGaWVsZC5uYW1lICE9PSAnYmxvY2tUeXBlJyAmJiBibG9ja0ZpZWxkLm5hbWUgIT09ICdibG9ja05hbWUnKSkgfHwgIWZpZWxkQWZmZWN0c0RhdGEoYmxvY2tGaWVsZCkpLFxuICAgICAgICBdO1xuICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGluY29taW5nUmVzdWx0ID8gYCR7aW5jb21pbmdSZXN1bHR9LiR7bG9jYWxpemVkU2VnbWVudH1gIDogbG9jYWxpemVkU2VnbWVudDtcblxuICAgIGlmIChuZXh0RmllbGRzKSB7XG4gICAgICByZXR1cm4gZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5KHtcbiAgICAgICAgc2VnbWVudHM6IHJlbWFpbmluZ1NlZ21lbnRzLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGZpZWxkczogbmV4dEZpZWxkcyxcbiAgICAgICAgbG9jYWxlLFxuICAgICAgICByZXN1bHQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGluY29taW5nU2VnbWVudHMuam9pbignLicpO1xufTtcbiJdLCJuYW1lcyI6WyJnZXRMb2NhbGl6ZWRTb3J0UHJvcGVydHkiLCJzZWdtZW50cyIsImluY29taW5nU2VnbWVudHMiLCJjb25maWciLCJmaWVsZHMiLCJpbmNvbWluZ0ZpZWxkcyIsImxvY2FsZSIsInJlc3VsdCIsImluY29taW5nUmVzdWx0IiwibG9jYWxpemF0aW9uIiwiam9pbiIsImZsYXR0ZW5Ub3BMZXZlbEZpZWxkcyIsImZpcnN0U2VnbWVudCIsInNoaWZ0IiwibWF0Y2hlZEZpZWxkIiwiZmluZCIsImZpZWxkIiwiZmllbGRBZmZlY3RzRGF0YSIsIm5hbWUiLCJmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5IiwibmV4dEZpZWxkcyIsInJlbWFpbmluZ1NlZ21lbnRzIiwibG9jYWxpemVkU2VnbWVudCIsImxvY2FsaXplZCIsImxlbmd0aCIsIm5leHRTZWdtZW50SXNMb2NhbGUiLCJsb2NhbGVDb2RlcyIsImluY2x1ZGVzIiwibmV4dFNlZ21lbnQiLCJ0eXBlIiwiYmxvY2tzIiwicmVkdWNlIiwiZmxhdHRlbmVkQmxvY2tGaWVsZHMiLCJibG9jayIsImZpbHRlciIsImJsb2NrRmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBWWFBOzs7ZUFBQUE7OztxQkFYc0Q7eUJBQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVUvQixJQUFNQSwyQkFBMkI7UUFD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