"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sanitizeQueryValue", {
    enumerable: true,
    get: function() {
        return sanitizeQueryValue;
    }
});
var _mongoose = /*#__PURE__*/ _interop_require_default(require("mongoose"));
var _createArrayFromCommaDelineated = require("../utilities/createArrayFromCommaDelineated");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var sanitizeQueryValue = function(param) {
    var field = param.field, path = param.path, operator = param.operator, val = param.val, hasCustomID = param.hasCustomID;
    var formattedValue = val;
    // Disregard invalid _ids
    if (path === "_id" && typeof val === "string" && val.split(",").length === 1) {
        if (!hasCustomID) {
            var isValid = _mongoose.default.Types.ObjectId.isValid(val);
            if (!isValid) {
                return undefined;
            }
        }
        if (field.type === "number") {
            var parsedNumber = parseFloat(val);
            if (Number.isNaN(parsedNumber)) {
                return undefined;
            }
        }
    }
    // Cast incoming values as proper searchable types
    if (field.type === "checkbox" && typeof val === "string") {
        if (val.toLowerCase() === "true") formattedValue = true;
        if (val.toLowerCase() === "false") formattedValue = false;
    }
    if ([
        "all",
        "not_in",
        "in"
    ].includes(operator) && typeof formattedValue === "string") {
        formattedValue = (0, _createArrayFromCommaDelineated.createArrayFromCommaDelineated)(formattedValue);
        if (field.type === "number") {
            formattedValue = formattedValue.map(function(arrayVal) {
                return parseFloat(arrayVal);
            });
        }
    }
    if (field.type === "number" && typeof formattedValue === "string") {
        formattedValue = Number(val);
    }
    if (field.type === "date" && typeof val === "string") {
        formattedValue = new Date(val);
        if (Number.isNaN(Date.parse(formattedValue))) {
            return undefined;
        }
    }
    if ([
        "relationship",
        "upload"
    ].includes(field.type)) {
        if (val === "null") {
            formattedValue = null;
        }
        if (operator === "in" && Array.isArray(formattedValue)) {
            formattedValue = formattedValue.reduce(function(formattedValues, inVal) {
                var newValues = [
                    inVal
                ];
                if (_mongoose.default.Types.ObjectId.isValid(inVal)) newValues.push(new _mongoose.default.Types.ObjectId(inVal));
                var parsedNumber = parseFloat(inVal);
                if (!Number.isNaN(parsedNumber)) newValues.push(parsedNumber);
                return _to_consumable_array(formattedValues).concat(_to_consumable_array(newValues));
            }, []);
        }
    }
    // Set up specific formatting necessary by operators
    if (operator === "near") {
        var lng;
        var lat;
        var maxDistance;
        var minDistance;
        if (Array.isArray(formattedValue)) {
            var ref;
            ref = _sliced_to_array(formattedValue, 4), lng = ref[0], lat = ref[1], maxDistance = ref[2], minDistance = ref[3], ref;
        }
        if (typeof formattedValue === "string") {
            var ref1;
            ref1 = _sliced_to_array((0, _createArrayFromCommaDelineated.createArrayFromCommaDelineated)(formattedValue), 4), lng = ref1[0], lat = ref1[1], maxDistance = ref1[2], minDistance = ref1[3], ref1;
        }
        if (lng == null || lat == null || maxDistance == null && minDistance == null) {
            formattedValue = undefined;
        } else {
            formattedValue = {
                $geometry: {
                    type: "Point",
                    coordinates: [
                        parseFloat(lng),
                        parseFloat(lat)
                    ]
                }
            };
            if (maxDistance) formattedValue.$maxDistance = parseFloat(maxDistance);
            if (minDistance) formattedValue.$minDistance = parseFloat(minDistance);
        }
    }
    if (operator === "within" || operator === "intersects") {
        formattedValue = {
            $geometry: formattedValue
        };
    }
    if (path !== "_id" || path === "_id" && hasCustomID && field.type === "text") {
        if (operator === "contains") {
            formattedValue = {
                $regex: formattedValue,
                $options: "i"
            };
        }
    }
    if (operator === "exists") {
        formattedValue = formattedValue === "true" || formattedValue === true;
    }
    return formattedValue;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL3Nhbml0aXplUXVlcnlWYWx1ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgRmllbGQsIFRhYkFzRmllbGQgfSBmcm9tICdwYXlsb2FkL2Rpc3QvZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVBcnJheUZyb21Db21tYURlbGluZWF0ZWQgfSBmcm9tICcuLi91dGlsaXRpZXMvY3JlYXRlQXJyYXlGcm9tQ29tbWFEZWxpbmVhdGVkJztcblxudHlwZSBTYW5pdGl6ZVF1ZXJ5VmFsdWVBcmdzID0ge1xuICBmaWVsZDogRmllbGQgfCBUYWJBc0ZpZWxkXG4gIHBhdGg6IHN0cmluZ1xuICBvcGVyYXRvcjogc3RyaW5nLFxuICB2YWw6IGFueVxuICBoYXNDdXN0b21JRDogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3Qgc2FuaXRpemVRdWVyeVZhbHVlID0gKHsgZmllbGQsIHBhdGgsIG9wZXJhdG9yLCB2YWwsIGhhc0N1c3RvbUlEIH06IFNhbml0aXplUXVlcnlWYWx1ZUFyZ3MpOiB1bmtub3duID0+IHtcbiAgbGV0IGZvcm1hdHRlZFZhbHVlID0gdmFsO1xuXG4gIC8vIERpc3JlZ2FyZCBpbnZhbGlkIF9pZHNcbiAgaWYgKHBhdGggPT09ICdfaWQnICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZhbC5zcGxpdCgnLCcpLmxlbmd0aCA9PT0gMSkge1xuICAgIGlmICghaGFzQ3VzdG9tSUQpIHtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSBtb25nb29zZS5UeXBlcy5PYmplY3RJZC5pc1ZhbGlkKHZhbCk7XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgcGFyc2VkTnVtYmVyID0gcGFyc2VGbG9hdCh2YWwpO1xuXG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZE51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDYXN0IGluY29taW5nIHZhbHVlcyBhcyBwcm9wZXIgc2VhcmNoYWJsZSB0eXBlc1xuICBpZiAoZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94JyAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh2YWwudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSBmb3JtYXR0ZWRWYWx1ZSA9IHRydWU7XG4gICAgaWYgKHZhbC50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnKSBmb3JtYXR0ZWRWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKFsnYWxsJywgJ25vdF9pbicsICdpbiddLmluY2x1ZGVzKG9wZXJhdG9yKSAmJiB0eXBlb2YgZm9ybWF0dGVkVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgZm9ybWF0dGVkVmFsdWUgPSBjcmVhdGVBcnJheUZyb21Db21tYURlbGluZWF0ZWQoZm9ybWF0dGVkVmFsdWUpO1xuXG4gICAgaWYgKGZpZWxkLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlZFZhbHVlLm1hcCgoYXJyYXlWYWwpID0+IHBhcnNlRmxvYXQoYXJyYXlWYWwpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZmllbGQudHlwZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGZvcm1hdHRlZFZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIGZvcm1hdHRlZFZhbHVlID0gTnVtYmVyKHZhbCk7XG4gIH1cblxuICBpZiAoZmllbGQudHlwZSA9PT0gJ2RhdGUnICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgZm9ybWF0dGVkVmFsdWUgPSBuZXcgRGF0ZSh2YWwpO1xuICAgIGlmIChOdW1iZXIuaXNOYU4oRGF0ZS5wYXJzZShmb3JtYXR0ZWRWYWx1ZSkpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG5cbiAgaWYgKFsncmVsYXRpb25zaGlwJywgJ3VwbG9hZCddLmluY2x1ZGVzKGZpZWxkLnR5cGUpKSB7XG4gICAgaWYgKHZhbCA9PT0gJ251bGwnKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wZXJhdG9yID09PSAnaW4nICYmIEFycmF5LmlzQXJyYXkoZm9ybWF0dGVkVmFsdWUpKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdHRlZFZhbHVlLnJlZHVjZSgoZm9ybWF0dGVkVmFsdWVzLCBpblZhbCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdWYWx1ZXMgPSBbaW5WYWxdO1xuICAgICAgICBpZiAobW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQuaXNWYWxpZChpblZhbCkpIG5ld1ZhbHVlcy5wdXNoKG5ldyBtb25nb29zZS5UeXBlcy5PYmplY3RJZChpblZhbCkpO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZE51bWJlciA9IHBhcnNlRmxvYXQoaW5WYWwpO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWROdW1iZXIpKSBuZXdWYWx1ZXMucHVzaChwYXJzZWROdW1iZXIpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uZm9ybWF0dGVkVmFsdWVzLFxuICAgICAgICAgIC4uLm5ld1ZhbHVlcyxcbiAgICAgICAgXTtcbiAgICAgIH0sIFtdKTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgdXAgc3BlY2lmaWMgZm9ybWF0dGluZyBuZWNlc3NhcnkgYnkgb3BlcmF0b3JzXG5cbiAgaWYgKG9wZXJhdG9yID09PSAnbmVhcicpIHtcbiAgICBsZXQgbG5nO1xuICAgIGxldCBsYXQ7XG4gICAgbGV0IG1heERpc3RhbmNlO1xuICAgIGxldCBtaW5EaXN0YW5jZTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGZvcm1hdHRlZFZhbHVlKSkge1xuICAgICAgW2xuZywgbGF0LCBtYXhEaXN0YW5jZSwgbWluRGlzdGFuY2VdID0gZm9ybWF0dGVkVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBmb3JtYXR0ZWRWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIFtsbmcsIGxhdCwgbWF4RGlzdGFuY2UsIG1pbkRpc3RhbmNlXSA9IGNyZWF0ZUFycmF5RnJvbUNvbW1hRGVsaW5lYXRlZChmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGxuZyA9PSBudWxsIHx8IGxhdCA9PSBudWxsIHx8IChtYXhEaXN0YW5jZSA9PSBudWxsICYmIG1pbkRpc3RhbmNlID09IG51bGwpKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSB7XG4gICAgICAgICRnZW9tZXRyeTogeyB0eXBlOiAnUG9pbnQnLCBjb29yZGluYXRlczogW3BhcnNlRmxvYXQobG5nKSwgcGFyc2VGbG9hdChsYXQpXSB9LFxuICAgICAgfTtcblxuICAgICAgaWYgKG1heERpc3RhbmNlKSBmb3JtYXR0ZWRWYWx1ZS4kbWF4RGlzdGFuY2UgPSBwYXJzZUZsb2F0KG1heERpc3RhbmNlKTtcbiAgICAgIGlmIChtaW5EaXN0YW5jZSkgZm9ybWF0dGVkVmFsdWUuJG1pbkRpc3RhbmNlID0gcGFyc2VGbG9hdChtaW5EaXN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wZXJhdG9yID09PSAnd2l0aGluJyB8fCBvcGVyYXRvciA9PT0gJ2ludGVyc2VjdHMnKSB7XG4gICAgZm9ybWF0dGVkVmFsdWUgPSB7XG4gICAgICAkZ2VvbWV0cnk6IGZvcm1hdHRlZFZhbHVlLFxuICAgIH07XG4gIH1cblxuICBpZiAocGF0aCAhPT0gJ19pZCcgfHwgKHBhdGggPT09ICdfaWQnICYmIGhhc0N1c3RvbUlEICYmIGZpZWxkLnR5cGUgPT09ICd0ZXh0JykpIHtcbiAgICBpZiAob3BlcmF0b3IgPT09ICdjb250YWlucycpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0geyAkcmVnZXg6IGZvcm1hdHRlZFZhbHVlLCAkb3B0aW9uczogJ2knIH07XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wZXJhdG9yID09PSAnZXhpc3RzJykge1xuICAgIGZvcm1hdHRlZFZhbHVlID0gKGZvcm1hdHRlZFZhbHVlID09PSAndHJ1ZScgfHwgZm9ybWF0dGVkVmFsdWUgPT09IHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xufTtcbiJdLCJuYW1lcyI6WyJzYW5pdGl6ZVF1ZXJ5VmFsdWUiLCJmaWVsZCIsInBhdGgiLCJvcGVyYXRvciIsInZhbCIsImhhc0N1c3RvbUlEIiwiZm9ybWF0dGVkVmFsdWUiLCJzcGxpdCIsImxlbmd0aCIsImlzVmFsaWQiLCJtb25nb29zZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJ1bmRlZmluZWQiLCJ0eXBlIiwicGFyc2VkTnVtYmVyIiwicGFyc2VGbG9hdCIsIk51bWJlciIsImlzTmFOIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNyZWF0ZUFycmF5RnJvbUNvbW1hRGVsaW5lYXRlZCIsIm1hcCIsImFycmF5VmFsIiwiRGF0ZSIsInBhcnNlIiwiQXJyYXkiLCJpc0FycmF5IiwicmVkdWNlIiwiZm9ybWF0dGVkVmFsdWVzIiwiaW5WYWwiLCJuZXdWYWx1ZXMiLCJwdXNoIiwibG5nIiwibGF0IiwibWF4RGlzdGFuY2UiLCJtaW5EaXN0YW5jZSIsIiRnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiJG1heERpc3RhbmNlIiwiJG1pbkRpc3RhbmNlIiwiJHJlZ2V4IiwiJG9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBWWFBOzs7ZUFBQUE7OzsrREFaUTs4Q0FFMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVeEMsSUFBTUEscUJBQXFCO1FBQUdDLGNBQUFBLE9BQU9DLGFB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