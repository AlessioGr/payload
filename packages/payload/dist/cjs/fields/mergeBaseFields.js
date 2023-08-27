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
var _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
var _types = require("./config/types");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
var mergeBaseFields = function(fields, baseFields) {
    var mergedFields = _to_consumable_array(fields || []);
    baseFields.forEach(function(baseField) {
        var matchedIndex = null;
        if ((0, _types.fieldAffectsData)(baseField)) {
            var match = mergedFields.find(function(field, i) {
                if ((0, _types.fieldAffectsData)(field) && field.name === baseField.name) {
                    matchedIndex = i;
                    return true;
                }
                return false;
            });
            if (match) {
                var matchCopy = _object_spread({}, match);
                mergedFields.splice(matchedIndex, 1);
                var mergedField = (0, _deepmerge.default)(baseField, matchCopy);
                if ((0, _types.fieldHasSubFields)(baseField) && (0, _types.fieldHasSubFields)(matchCopy)) {
                    mergedField.fields = mergeBaseFields(matchCopy.fields, baseField.fields);
                }
                mergedFields.push(mergedField);
            } else {
                mergedFields.push(baseField);
            }
        }
    });
    return mergedFields;
};
var _default = mergeBaseFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvbWVyZ2VCYXNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsIGZpZWxkSGFzU3ViRmllbGRzLCBGaWVsZFdpdGhTdWJGaWVsZHMgfSBmcm9tICcuL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IG1lcmdlQmFzZUZpZWxkcyA9IChmaWVsZHM6IEZpZWxkW10sIGJhc2VGaWVsZHM6IEZpZWxkW10pOiBGaWVsZFtdID0+IHtcbiAgY29uc3QgbWVyZ2VkRmllbGRzID0gWy4uLmZpZWxkcyB8fCBbXV07XG5cbiAgYmFzZUZpZWxkcy5mb3JFYWNoKChiYXNlRmllbGQpID0+IHtcbiAgICBsZXQgbWF0Y2hlZEluZGV4ID0gbnVsbDtcblxuICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGJhc2VGaWVsZCkpIHtcbiAgICAgIGNvbnN0IG1hdGNoID0gbWVyZ2VkRmllbGRzLmZpbmQoKGZpZWxkLCBpKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5uYW1lID09PSBiYXNlRmllbGQubmFtZSkge1xuICAgICAgICAgIG1hdGNoZWRJbmRleCA9IGk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoQ29weTogRmllbGQgPSB7IC4uLm1hdGNoIH07XG4gICAgICAgIG1lcmdlZEZpZWxkcy5zcGxpY2UobWF0Y2hlZEluZGV4LCAxKTtcblxuICAgICAgICBjb25zdCBtZXJnZWRGaWVsZCA9IG1lcmdlPEZpZWxkPihiYXNlRmllbGQsIG1hdGNoQ29weSk7XG5cbiAgICAgICAgaWYgKGZpZWxkSGFzU3ViRmllbGRzKGJhc2VGaWVsZCkgJiYgZmllbGRIYXNTdWJGaWVsZHMobWF0Y2hDb3B5KSkge1xuICAgICAgICAgIChtZXJnZWRGaWVsZCBhcyBGaWVsZFdpdGhTdWJGaWVsZHMpLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhtYXRjaENvcHkuZmllbGRzLCBiYXNlRmllbGQuZmllbGRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lcmdlZEZpZWxkcy5wdXNoKG1lcmdlZEZpZWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lcmdlZEZpZWxkcy5wdXNoKGJhc2VGaWVsZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbWVyZ2VkRmllbGRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VCYXNlRmllbGRzO1xuIl0sIm5hbWVzIjpbIm1lcmdlQmFzZUZpZWxkcyIsImZpZWxkcyIsImJhc2VGaWVsZHMiLCJtZXJnZWRGaWVsZHMiLCJmb3JFYWNoIiwiYmFzZUZpZWxkIiwibWF0Y2hlZEluZGV4IiwiZmllbGRBZmZlY3RzRGF0YSIsIm1hdGNoIiwiZmluZCIsImZpZWxkIiwiaSIsIm5hbWUiLCJtYXRjaENvcHkiLCJzcGxpY2UiLCJtZXJnZWRGaWVsZCIsIm1lcmdlIiwiZmllbGRIYXNTdWJGaWVsZHMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7OytCQXVDQTs7O2VBQUE7OztnRUF2Q2tCO3FCQUM2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0UsSUFBTUEsa0JBQWtCLFNBQUNDLFFBQWlCQztJQUN4QyxJQUFNQyxlQUFnQixxQkFBR0YsVUFBVSxFQUFFO0lBRXJDQyxXQUFXRSxPQUFPLENBQUMsU0FBQ0M7UUFDbEIsSUFBSUMsZUFBZTtRQUVuQixJQUFJQyxJQUFBQSx1QkFBZ0IsRUFBQ0YsWUFBWTtZQUMvQixJQUFNRyxRQUFRTCxhQUFhTSxJQUFJLENBQUMsU0FBQ0MsT0FBT0M7Z0JBQ3RDLElBQUlKLElBQUFBLHVCQUFnQixFQUFDRyxVQUFVQSxNQUFNRSxJQUFJLEtBQUtQLFVBQVVPLElBQUksRUFBRTtvQkFDNUROLGVBQWVLO29CQUNmLE9BQU87Z0JBQ1Q7Z0JBRUEsT0FBTztZQUNUO1lBRUEsSUFBSUgsT0FBTztnQkFDVCxJQUFNSyxZQUFtQixtQkFBS0w7Z0JBQzlCTCxhQUFhVyxNQUFNLENBQUNSLGNBQWM7Z0JBRWxDLElBQU1TLGNBQWNDLElBQUFBLGtCQUFLLEVBQVFYLFdBQVdRO2dCQUU1QyxJQUFJSSxJQUFBQSx3QkFBaUIsRUFBQ1osY0FBY1ksSUFBQUEsd0JBQWlCLEVBQUNKLFlBQVk7b0JBQy9ERSxZQUFtQ2QsTUFBTSxHQUFHRCxnQkFBZ0JhLFVBQVVaLE1BQU0sRUFBRUksVUFBVUosTUFBTTtnQkFDakc7Z0JBRUFFLGFBQWFlLElBQUksQ0FBQ0g7WUFDcEIsT0FBTztnQkFDTFosYUFBYWUsSUFBSSxDQUFDYjtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPRjtBQUNUO0lBRUEsV0FBZUgifQ==