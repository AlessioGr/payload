"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setsAreEqual", {
    enumerable: true,
    get: function() {
        return setsAreEqual;
    }
});
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
var setsAreEqual = function(xs, ys) {
    return xs.size === ys.size && _to_consumable_array(xs).every(function(x) {
        return ys.has(x);
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvc2V0c0FyZUVxdWFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXRzQXJlRXF1YWwgPSAoeHM6IFNldDx1bmtub3duPiwgeXM6IFNldDx1bmtub3duPikgPT4geHMuc2l6ZSA9PT0geXMuc2l6ZVxuICAmJiBbLi4ueHNdLmV2ZXJ5KCh4KSA9PiB5cy5oYXMoeCkpO1xuIl0sIm5hbWVzIjpbInNldHNBcmVFcXVhbCIsInhzIiwieXMiLCJzaXplIiwiZXZlcnkiLCJ4IiwiaGFzIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7O2VBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBTUEsZUFBZSxTQUFDQyxJQUFrQkM7V0FBcUJELEdBQUdFLElBQUksS0FBS0QsR0FBR0MsSUFBSSxJQUNsRixBQUFDLHFCQUFHRixJQUFJRyxLQUFLLENBQUMsU0FBQ0M7ZUFBTUgsR0FBR0ksR0FBRyxDQUFDRCJ9