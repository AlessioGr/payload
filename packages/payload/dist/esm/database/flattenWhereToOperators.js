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
// Take a where query and flatten it to all top-level operators
var flattenWhereToOperators = function(query) {
    return Object.entries(query).reduce(function(flattenedConstraints, param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], val = _param[1];
        if ((key === "and" || key === "or") && Array.isArray(val)) {
            return _to_consumable_array(flattenedConstraints).concat(_to_consumable_array(val.reduce(function(subVals, subVal) {
                return _to_consumable_array(subVals).concat(_to_consumable_array(flattenWhereToOperators(subVal)));
            }, [])));
        }
        return _to_consumable_array(flattenedConstraints).concat([
            val
        ]);
    }, []);
};
export default flattenWhereToOperators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9mbGF0dGVuV2hlcmVUb09wZXJhdG9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaGVyZSwgV2hlcmVGaWVsZCB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gVGFrZSBhIHdoZXJlIHF1ZXJ5IGFuZCBmbGF0dGVuIGl0IHRvIGFsbCB0b3AtbGV2ZWwgb3BlcmF0b3JzXG5jb25zdCBmbGF0dGVuV2hlcmVUb09wZXJhdG9ycyA9IChxdWVyeTogV2hlcmUpOiBXaGVyZUZpZWxkW10gPT4gT2JqZWN0LmVudHJpZXMocXVlcnkpLnJlZHVjZSgoZmxhdHRlbmVkQ29uc3RyYWludHMsIFtrZXksIHZhbF0pID0+IHtcbiAgaWYgKChrZXkgPT09ICdhbmQnIHx8IGtleSA9PT0gJ29yJykgJiYgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmZsYXR0ZW5lZENvbnN0cmFpbnRzLFxuICAgICAgLi4udmFsLnJlZHVjZSgoc3ViVmFscywgc3ViVmFsKSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uc3ViVmFscyxcbiAgICAgICAgICAuLi5mbGF0dGVuV2hlcmVUb09wZXJhdG9ycyhzdWJWYWwpLFxuICAgICAgICBdO1xuICAgICAgfSwgW10pLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gW1xuICAgIC4uLmZsYXR0ZW5lZENvbnN0cmFpbnRzLFxuICAgIHZhbCxcbiAgXTtcbn0sIFtdKTtcblxuZXhwb3J0IGRlZmF1bHQgZmxhdHRlbldoZXJlVG9PcGVyYXRvcnM7XG4iXSwibmFtZXMiOlsiZmxhdHRlbldoZXJlVG9PcGVyYXRvcnMiLCJxdWVyeSIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJmbGF0dGVuZWRDb25zdHJhaW50cyIsImtleSIsInZhbCIsIkFycmF5IiwiaXNBcnJheSIsInN1YlZhbHMiLCJzdWJWYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwrREFBK0Q7QUFDL0QsSUFBTUEsMEJBQTBCLFNBQUNDO1dBQStCQyxPQUFPQyxPQUFPLENBQUNGLE9BQU9HLE1BQU0sQ0FBQyxTQUFDQztpREFBdUJDLGlCQUFLQztRQUN4SCxJQUFJLEFBQUNELENBQUFBLFFBQVEsU0FBU0EsUUFBUSxJQUFHLEtBQU1FLE1BQU1DLE9BQU8sQ0FBQ0YsTUFBTTtZQUN6RCxPQUFPLEFBQ0wscUJBQUdGLDZCQUNILHFCQUFHRSxJQUFJSCxNQUFNLENBQUMsU0FBQ00sU0FBU0M7Z0JBQ3RCLE9BQU8sQUFDTCxxQkFBR0QsZ0JBQ0gscUJBQUdWLHdCQUF3Qlc7WUFFL0IsR0FBRyxFQUFFO1FBRVQ7UUFFQSxPQUFPLEFBQ0wscUJBQUdOLDZCQURFO1lBRUxFO1NBQ0Q7SUFDSCxHQUFHLEVBQUU7O0FBRUwsZUFBZVAsd0JBQXdCIn0=