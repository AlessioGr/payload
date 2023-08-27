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
var _getCommonBlock = require("./getCommonBlock");
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
var isListActive = function(editor, format) {
    if (!editor.selection) return false;
    var _getCommonBlock1 = _sliced_to_array((0, _getCommonBlock.getCommonBlock)(editor), 2), topmostSelectedNode = _getCommonBlock1[0], topmostSelectedNodePath = _getCommonBlock1[1];
    if (_slate.Editor.isEditor(topmostSelectedNode)) return false;
    var _Array_from = _sliced_to_array(Array.from(_slate.Editor.nodes(editor, {
        at: topmostSelectedNodePath,
        mode: "lowest",
        match: function(node, path) {
            return !_slate.Editor.isEditor(node) && _slate.Element.isElement(node) && node.type === format && path.length >= topmostSelectedNodePath.length - 2;
        }
    })), 1), match = _Array_from[0];
    return !!match;
};
var _default = isListActive;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2lzTGlzdEFjdGl2ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3IsIEVsZW1lbnQgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBnZXRDb21tb25CbG9jayB9IGZyb20gJy4vZ2V0Q29tbW9uQmxvY2snO1xuXG5jb25zdCBpc0xpc3RBY3RpdmUgPSAoZWRpdG9yOiBFZGl0b3IsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGlmICghZWRpdG9yLnNlbGVjdGlvbikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBbdG9wbW9zdFNlbGVjdGVkTm9kZSwgdG9wbW9zdFNlbGVjdGVkTm9kZVBhdGhdID0gZ2V0Q29tbW9uQmxvY2soZWRpdG9yKTtcblxuICBpZiAoRWRpdG9yLmlzRWRpdG9yKHRvcG1vc3RTZWxlY3RlZE5vZGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgW21hdGNoXSA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgIGF0OiB0b3Btb3N0U2VsZWN0ZWROb2RlUGF0aCxcbiAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICBtYXRjaDogKG5vZGUsIHBhdGgpID0+IHtcbiAgICAgIHJldHVybiAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICYmIG5vZGUudHlwZSA9PT0gZm9ybWF0XG4gICAgICAgICYmIHBhdGgubGVuZ3RoID49IHRvcG1vc3RTZWxlY3RlZE5vZGVQYXRoLmxlbmd0aCAtIDI7XG4gICAgfSxcbiAgfSkpO1xuXG4gIHJldHVybiAhIW1hdGNoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNMaXN0QWN0aXZlO1xuIl0sIm5hbWVzIjpbImlzTGlzdEFjdGl2ZSIsImVkaXRvciIsImZvcm1hdCIsInNlbGVjdGlvbiIsImdldENvbW1vbkJsb2NrIiwidG9wbW9zdFNlbGVjdGVkTm9kZSIsInRvcG1vc3RTZWxlY3RlZE5vZGVQYXRoIiwiRWRpdG9yIiwiaXNFZGl0b3IiLCJBcnJheSIsImZyb20iLCJub2RlcyIsImF0IiwibW9kZSIsIm1hdGNoIiwibm9kZSIsInBhdGgiLCJFbGVtZW50IiwiaXNFbGVtZW50IiwidHlwZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF1QkE7OztlQUFBOzs7cUJBdkJnQzs4QkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTUEsZUFBZSxTQUFDQyxRQUFnQkM7SUFDcEMsSUFBSSxDQUFDRCxPQUFPRSxTQUFTLEVBQUUsT0FBTztJQUM5QixJQUF1REMsb0NBQUFBLElBQUFBLDhCQUFjLEVBQUNILGFBQS9ESSxzQkFBZ0RELHFCQUEzQkUsMEJBQTJCRjtJQUV2RCxJQUFJRyxhQUFNLENBQUNDLFFBQVEsQ0FBQ0gsc0JBQXNCLE9BQU87SUFFakQsSUFBZ0JJLCtCQUFBQSxNQUFNQyxJQUFJLENBQUNILGFBQU0sQ0FBQ0ksS0FBSyxDQUFDVixRQUFRO1FBQzlDVyxJQUFJTjtRQUNKTyxNQUFNO1FBQ05DLE9BQU8sU0FBQ0MsTUFBTUM7WUFDWixPQUFPLENBQUNULGFBQU0sQ0FBQ0MsUUFBUSxDQUFDTyxTQUNuQkUsY0FBTyxDQUFDQyxTQUFTLENBQUNILFNBQ2xCQSxLQUFLSSxJQUFJLEtBQUtqQixVQUNkYyxLQUFLSSxNQUFNLElBQUlkLHdCQUF3QmMsTUFBTSxHQUFHO1FBQ3ZEO0lBQ0YsU0FUT04sUUFBU0w7SUFXaEIsT0FBTyxDQUFDLENBQUNLO0FBQ1g7SUFFQSxXQUFlZCJ9