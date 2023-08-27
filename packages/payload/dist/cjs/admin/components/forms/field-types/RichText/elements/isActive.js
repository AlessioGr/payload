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
var _slate = require("slate");
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
var isElementActive = function(editor, format) {
    var blockType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    if (!editor.selection) return false;
    var _Array_from = _sliced_to_array(Array.from(_slate.Editor.nodes(editor, {
        at: _slate.Editor.unhangRange(editor, editor.selection),
        match: function(n) {
            return !_slate.Editor.isEditor(n) && _slate.Element.isElement(n) && n[blockType] === format;
        }
    })), 1), match = _Array_from[0];
    return !!match;
};
var _default = isElementActive;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2lzQWN0aXZlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3IsIEVsZW1lbnQgfSBmcm9tICdzbGF0ZSc7XG5cbmNvbnN0IGlzRWxlbWVudEFjdGl2ZSA9IChlZGl0b3I6IEVkaXRvciwgZm9ybWF0OiBzdHJpbmcsIGJsb2NrVHlwZSA9ICd0eXBlJyk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWVkaXRvci5zZWxlY3Rpb24pIHJldHVybiBmYWxzZTtcblxuICBjb25zdCBbbWF0Y2hdID0gQXJyYXkuZnJvbShFZGl0b3Iubm9kZXMoZWRpdG9yLCB7XG4gICAgYXQ6IEVkaXRvci51bmhhbmdSYW5nZShlZGl0b3IsIGVkaXRvci5zZWxlY3Rpb24pLFxuICAgIG1hdGNoOiAobikgPT4gIUVkaXRvci5pc0VkaXRvcihuKSAmJiBFbGVtZW50LmlzRWxlbWVudChuKSAmJiBuW2Jsb2NrVHlwZV0gPT09IGZvcm1hdCxcbiAgfSkpO1xuXG4gIHJldHVybiAhIW1hdGNoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbGVtZW50QWN0aXZlO1xuIl0sIm5hbWVzIjpbImlzRWxlbWVudEFjdGl2ZSIsImVkaXRvciIsImZvcm1hdCIsImJsb2NrVHlwZSIsInNlbGVjdGlvbiIsIkFycmF5IiwiZnJvbSIsIkVkaXRvciIsIm5vZGVzIiwiYXQiLCJ1bmhhbmdSYW5nZSIsIm1hdGNoIiwibiIsImlzRWRpdG9yIiwiRWxlbWVudCIsImlzRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFhQTs7O2VBQUE7OztxQkFiZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQU1BLGtCQUFrQixTQUFDQyxRQUFnQkM7UUFBZ0JDLDZFQUFZO0lBQ25FLElBQUksQ0FBQ0YsT0FBT0csU0FBUyxFQUFFLE9BQU87SUFFOUIsSUFBZ0JDLCtCQUFBQSxNQUFNQyxJQUFJLENBQUNDLGFBQU0sQ0FBQ0MsS0FBSyxDQUFDUCxRQUFRO1FBQzlDUSxJQUFJRixhQUFNLENBQUNHLFdBQVcsQ0FBQ1QsUUFBUUEsT0FBT0csU0FBUztRQUMvQ08sT0FBTyxTQUFDQzttQkFBTSxDQUFDTCxhQUFNLENBQUNNLFFBQVEsQ0FBQ0QsTUFBTUUsY0FBTyxDQUFDQyxTQUFTLENBQUNILE1BQU1BLENBQUMsQ0FBQ1QsVUFBVSxLQUFLRDs7SUFDaEYsU0FIT1MsUUFBU047SUFLaEIsT0FBTyxDQUFDLENBQUNNO0FBQ1g7SUFFQSxXQUFlWCJ9