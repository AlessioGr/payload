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
import translations from "./index";
export var extractTranslations = function(keys) {
    var result = {};
    keys.forEach(function(key) {
        result[key] = {};
    });
    Object.entries(translations).forEach(function(param) {
        var _param = _sliced_to_array(param, 2), language = _param[0], resource = _param[1];
        keys.forEach(function(key) {
            var _key_split = _sliced_to_array(key.split(":"), 2), section = _key_split[0], target = _key_split[1];
            result[key][language] = resource[section][target];
        });
    });
    return result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2xhdGlvbnMvZXh0cmFjdFRyYW5zbGF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgZXh0cmFjdFRyYW5zbGF0aW9ucyA9IChrZXlzOiBzdHJpbmdbXSk6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0+IHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgcmVzdWx0W2tleV0gPSB7fTtcbiAgfSk7XG4gIE9iamVjdC5lbnRyaWVzKHRyYW5zbGF0aW9ucykuZm9yRWFjaCgoW2xhbmd1YWdlLCByZXNvdXJjZV0pID0+IHtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgW3NlY3Rpb24sIHRhcmdldF0gPSBrZXkuc3BsaXQoJzonKTtcbiAgICAgIHJlc3VsdFtrZXldW2xhbmd1YWdlXSA9IHJlc291cmNlW3NlY3Rpb25dW3RhcmdldF07XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJuYW1lcyI6WyJ0cmFuc2xhdGlvbnMiLCJleHRyYWN0VHJhbnNsYXRpb25zIiwia2V5cyIsInJlc3VsdCIsImZvckVhY2giLCJrZXkiLCJPYmplY3QiLCJlbnRyaWVzIiwibGFuZ3VhZ2UiLCJyZXNvdXJjZSIsInNwbGl0Iiwic2VjdGlvbiIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLGtCQUFrQixVQUFVO0FBRW5DLE9BQU8sSUFBTUMsc0JBQXNCLFNBQUNDO0lBQ2xDLElBQU1DLFNBQVMsQ0FBQztJQUNoQkQsS0FBS0UsT0FBTyxDQUFDLFNBQUNDO1FBQ1pGLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHLENBQUM7SUFDakI7SUFDQUMsT0FBT0MsT0FBTyxDQUFDUCxjQUFjSSxPQUFPLENBQUM7aURBQUVJLHNCQUFVQztRQUMvQ1AsS0FBS0UsT0FBTyxDQUFDLFNBQUNDO1lBQ1osSUFBMEJBLDhCQUFBQSxJQUFJSyxLQUFLLENBQUMsVUFBN0JDLFVBQW1CTixlQUFWTyxTQUFVUDtZQUMxQkYsTUFBTSxDQUFDRSxJQUFJLENBQUNHLFNBQVMsR0FBR0MsUUFBUSxDQUFDRSxRQUFRLENBQUNDLE9BQU87UUFDbkQ7SUFDRjtJQUNBLE9BQU9UO0FBQ1QsRUFBRSJ9