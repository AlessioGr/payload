"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getUniqueListBy;
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
function getUniqueListBy(arr, key) {
    return _to_consumable_array(new Map(arr.map(function(item) {
        return [
            item[key],
            item
        ];
    })).values());
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0VW5pcXVlTGlzdEJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVuaXF1ZUxpc3RCeTxUPihhcnI6IFRbXSwga2V5OiBzdHJpbmcpOiBUW10ge1xuICByZXR1cm4gWy4uLm5ldyBNYXAoYXJyLm1hcCgoaXRlbSkgPT4gW2l0ZW1ba2V5XSwgaXRlbV0pKS52YWx1ZXMoKV07XG59XG4iXSwibmFtZXMiOlsiZ2V0VW5pcXVlTGlzdEJ5IiwiYXJyIiwia2V5IiwiTWFwIiwibWFwIiwiaXRlbSIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFBQTs7O2VBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULFNBQVNBLGdCQUFtQkMsR0FBUSxFQUFFQyxHQUFXO0lBQzlELE9BQVEscUJBQUcsSUFBSUMsSUFBSUYsSUFBSUcsR0FBRyxDQUFDLFNBQUNDO2VBQVM7WUFBQ0EsSUFBSSxDQUFDSCxJQUFJO1lBQUVHO1NBQUs7UUFBR0MsTUFBTTtBQUNqRSJ9