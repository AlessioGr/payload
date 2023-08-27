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
var _flatley = /*#__PURE__*/ _interop_require_default(require("flatley"));
var _reduceFieldsToValues = /*#__PURE__*/ _interop_require_default(require("./reduceFieldsToValues"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var unflatten = _flatley.default.unflatten;
var getSiblingData = function(fields, path) {
    if (path.indexOf(".") === -1) {
        return (0, _reduceFieldsToValues.default)(fields, true);
    }
    var siblingFields = {};
    // Determine if the last segment of the path is an array-based row
    var pathSegments = path.split(".");
    var lastSegment = pathSegments[pathSegments.length - 1];
    var lastSegmentIsRowIndex = !Number.isNaN(Number(lastSegment));
    var parentFieldPath;
    if (lastSegmentIsRowIndex) {
        // If the last segment is a row index,
        // the sibling data is that row's contents
        // so create a parent field path that will
        // retrieve all contents of that row index only
        parentFieldPath = "".concat(path, ".");
    } else {
        // Otherwise, the last path segment is a field name
        // and it should be removed
        parentFieldPath = path.substring(0, path.lastIndexOf(".") + 1);
    }
    Object.keys(fields).forEach(function(fieldKey) {
        if (!fields[fieldKey].disableFormData && fieldKey.indexOf(parentFieldPath) === 0) {
            siblingFields[fieldKey.replace(parentFieldPath, "")] = fields[fieldKey].value;
        }
    });
    return unflatten(siblingFields, {
        safe: true
    });
};
var _default = getSiblingData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vZ2V0U2libGluZ0RhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZsYXRsZXkgZnJvbSAnZmxhdGxleSc7XG5jb25zdCB7IHVuZmxhdHRlbiB9ID0gZmxhdGxleTtcbmltcG9ydCB7IEZpZWxkcywgRGF0YSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHJlZHVjZUZpZWxkc1RvVmFsdWVzIGZyb20gJy4vcmVkdWNlRmllbGRzVG9WYWx1ZXMnO1xuXG5jb25zdCBnZXRTaWJsaW5nRGF0YSA9IChmaWVsZHM6IEZpZWxkcywgcGF0aDogc3RyaW5nKTogRGF0YSA9PiB7XG4gIGlmIChwYXRoLmluZGV4T2YoJy4nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gcmVkdWNlRmllbGRzVG9WYWx1ZXMoZmllbGRzLCB0cnVlKTtcbiAgfVxuICBjb25zdCBzaWJsaW5nRmllbGRzID0ge307XG5cbiAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBsYXN0IHNlZ21lbnQgb2YgdGhlIHBhdGggaXMgYW4gYXJyYXktYmFzZWQgcm93XG4gIGNvbnN0IHBhdGhTZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgY29uc3QgbGFzdFNlZ21lbnQgPSBwYXRoU2VnbWVudHNbcGF0aFNlZ21lbnRzLmxlbmd0aCAtIDFdO1xuICBjb25zdCBsYXN0U2VnbWVudElzUm93SW5kZXggPSAhTnVtYmVyLmlzTmFOKE51bWJlcihsYXN0U2VnbWVudCkpO1xuXG4gIGxldCBwYXJlbnRGaWVsZFBhdGg6IHN0cmluZztcblxuICBpZiAobGFzdFNlZ21lbnRJc1Jvd0luZGV4KSB7XG4gICAgLy8gSWYgdGhlIGxhc3Qgc2VnbWVudCBpcyBhIHJvdyBpbmRleCxcbiAgICAvLyB0aGUgc2libGluZyBkYXRhIGlzIHRoYXQgcm93J3MgY29udGVudHNcbiAgICAvLyBzbyBjcmVhdGUgYSBwYXJlbnQgZmllbGQgcGF0aCB0aGF0IHdpbGxcbiAgICAvLyByZXRyaWV2ZSBhbGwgY29udGVudHMgb2YgdGhhdCByb3cgaW5kZXggb25seVxuICAgIHBhcmVudEZpZWxkUGF0aCA9IGAke3BhdGh9LmA7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCB0aGUgbGFzdCBwYXRoIHNlZ21lbnQgaXMgYSBmaWVsZCBuYW1lXG4gICAgLy8gYW5kIGl0IHNob3VsZCBiZSByZW1vdmVkXG4gICAgcGFyZW50RmllbGRQYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcGF0aC5sYXN0SW5kZXhPZignLicpICsgMSk7XG4gIH1cblxuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goKGZpZWxkS2V5KSA9PiB7XG4gICAgaWYgKCFmaWVsZHNbZmllbGRLZXldLmRpc2FibGVGb3JtRGF0YSAmJiBmaWVsZEtleS5pbmRleE9mKHBhcmVudEZpZWxkUGF0aCkgPT09IDApIHtcbiAgICAgIHNpYmxpbmdGaWVsZHNbZmllbGRLZXkucmVwbGFjZShwYXJlbnRGaWVsZFBhdGgsICcnKV0gPSBmaWVsZHNbZmllbGRLZXldLnZhbHVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHVuZmxhdHRlbihzaWJsaW5nRmllbGRzLCB7IHNhZmU6IHRydWUgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRTaWJsaW5nRGF0YTtcbiJdLCJuYW1lcyI6WyJ1bmZsYXR0ZW4iLCJmbGF0bGV5IiwiZ2V0U2libGluZ0RhdGEiLCJmaWVsZHMiLCJwYXRoIiwiaW5kZXhPZiIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwic2libGluZ0ZpZWxkcyIsInBhdGhTZWdtZW50cyIsInNwbGl0IiwibGFzdFNlZ21lbnQiLCJsZW5ndGgiLCJsYXN0U2VnbWVudElzUm93SW5kZXgiLCJOdW1iZXIiLCJpc05hTiIsInBhcmVudEZpZWxkUGF0aCIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmaWVsZEtleSIsImRpc2FibGVGb3JtRGF0YSIsInJlcGxhY2UiLCJ2YWx1ZSIsInNhZmUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBdUNBOzs7ZUFBQTs7OzhEQXZDb0I7MkVBR2E7Ozs7OztBQUZqQyxJQUFNLEFBQUVBLFlBQWNDLGdCQUFPLENBQXJCRDtBQUlSLElBQU1FLGlCQUFpQixTQUFDQyxRQUFnQkM7SUFDdEMsSUFBSUEsS0FBS0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHO1FBQzVCLE9BQU9DLElBQUFBLDZCQUFvQixFQUFDSCxRQUFRO0lBQ3RDO0lBQ0EsSUFBTUksZ0JBQWdCLENBQUM7SUFFdkIsa0VBQWtFO0lBQ2xFLElBQU1DLGVBQWVKLEtBQUtLLEtBQUssQ0FBQztJQUNoQyxJQUFNQyxjQUFjRixZQUFZLENBQUNBLGFBQWFHLE1BQU0sR0FBRyxFQUFFO0lBQ3pELElBQU1DLHdCQUF3QixDQUFDQyxPQUFPQyxLQUFLLENBQUNELE9BQU9IO0lBRW5ELElBQUlLO0lBRUosSUFBSUgsdUJBQXVCO1FBQ3pCLHNDQUFzQztRQUN0QywwQ0FBMEM7UUFDMUMsMENBQTBDO1FBQzFDLCtDQUErQztRQUMvQ0csa0JBQWtCLEFBQUMsR0FBTyxPQUFMWCxNQUFLO0lBQzVCLE9BQU87UUFDTCxtREFBbUQ7UUFDbkQsMkJBQTJCO1FBQzNCVyxrQkFBa0JYLEtBQUtZLFNBQVMsQ0FBQyxHQUFHWixLQUFLYSxXQUFXLENBQUMsT0FBTztJQUM5RDtJQUVBQyxPQUFPQyxJQUFJLENBQUNoQixRQUFRaUIsT0FBTyxDQUFDLFNBQUNDO1FBQzNCLElBQUksQ0FBQ2xCLE1BQU0sQ0FBQ2tCLFNBQVMsQ0FBQ0MsZUFBZSxJQUFJRCxTQUFTaEIsT0FBTyxDQUFDVSxxQkFBcUIsR0FBRztZQUNoRlIsYUFBYSxDQUFDYyxTQUFTRSxPQUFPLENBQUNSLGlCQUFpQixJQUFJLEdBQUdaLE1BQU0sQ0FBQ2tCLFNBQVMsQ0FBQ0csS0FBSztRQUMvRTtJQUNGO0lBRUEsT0FBT3hCLFVBQVVPLGVBQWU7UUFBRWtCLE1BQU07SUFBSztBQUMvQztJQUVBLFdBQWV2QiJ9