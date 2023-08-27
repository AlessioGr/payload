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
import { Editor, Element } from "slate";
import { getCommonBlock } from "./getCommonBlock";
var isListActive = function(editor, format) {
    if (!editor.selection) return false;
    var _getCommonBlock = _sliced_to_array(getCommonBlock(editor), 2), topmostSelectedNode = _getCommonBlock[0], topmostSelectedNodePath = _getCommonBlock[1];
    if (Editor.isEditor(topmostSelectedNode)) return false;
    var _Array_from = _sliced_to_array(Array.from(Editor.nodes(editor, {
        at: topmostSelectedNodePath,
        mode: "lowest",
        match: function(node, path) {
            return !Editor.isEditor(node) && Element.isElement(node) && node.type === format && path.length >= topmostSelectedNodePath.length - 2;
        }
    })), 1), match = _Array_from[0];
    return !!match;
};
export default isListActive;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2lzTGlzdEFjdGl2ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3IsIEVsZW1lbnQgfSBmcm9tICdzbGF0ZSc7XG5pbXBvcnQgeyBnZXRDb21tb25CbG9jayB9IGZyb20gJy4vZ2V0Q29tbW9uQmxvY2snO1xuXG5jb25zdCBpc0xpc3RBY3RpdmUgPSAoZWRpdG9yOiBFZGl0b3IsIGZvcm1hdDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGlmICghZWRpdG9yLnNlbGVjdGlvbikgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBbdG9wbW9zdFNlbGVjdGVkTm9kZSwgdG9wbW9zdFNlbGVjdGVkTm9kZVBhdGhdID0gZ2V0Q29tbW9uQmxvY2soZWRpdG9yKTtcblxuICBpZiAoRWRpdG9yLmlzRWRpdG9yKHRvcG1vc3RTZWxlY3RlZE5vZGUpKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgW21hdGNoXSA9IEFycmF5LmZyb20oRWRpdG9yLm5vZGVzKGVkaXRvciwge1xuICAgIGF0OiB0b3Btb3N0U2VsZWN0ZWROb2RlUGF0aCxcbiAgICBtb2RlOiAnbG93ZXN0JyxcbiAgICBtYXRjaDogKG5vZGUsIHBhdGgpID0+IHtcbiAgICAgIHJldHVybiAhRWRpdG9yLmlzRWRpdG9yKG5vZGUpXG4gICAgICAgICYmIEVsZW1lbnQuaXNFbGVtZW50KG5vZGUpXG4gICAgICAgICYmIG5vZGUudHlwZSA9PT0gZm9ybWF0XG4gICAgICAgICYmIHBhdGgubGVuZ3RoID49IHRvcG1vc3RTZWxlY3RlZE5vZGVQYXRoLmxlbmd0aCAtIDI7XG4gICAgfSxcbiAgfSkpO1xuXG4gIHJldHVybiAhIW1hdGNoO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNMaXN0QWN0aXZlO1xuIl0sIm5hbWVzIjpbIkVkaXRvciIsIkVsZW1lbnQiLCJnZXRDb21tb25CbG9jayIsImlzTGlzdEFjdGl2ZSIsImVkaXRvciIsImZvcm1hdCIsInNlbGVjdGlvbiIsInRvcG1vc3RTZWxlY3RlZE5vZGUiLCJ0b3Btb3N0U2VsZWN0ZWROb2RlUGF0aCIsImlzRWRpdG9yIiwiQXJyYXkiLCJmcm9tIiwibm9kZXMiLCJhdCIsIm1vZGUiLCJtYXRjaCIsIm5vZGUiLCJwYXRoIiwiaXNFbGVtZW50IiwidHlwZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLE1BQU0sRUFBRUMsT0FBTyxRQUFRLFFBQVE7QUFDeEMsU0FBU0MsY0FBYyxRQUFRLG1CQUFtQjtBQUVsRCxJQUFNQyxlQUFlLFNBQUNDLFFBQWdCQztJQUNwQyxJQUFJLENBQUNELE9BQU9FLFNBQVMsRUFBRSxPQUFPO0lBQzlCLElBQXVESixtQ0FBQUEsZUFBZUUsYUFBL0RHLHNCQUFnREwsb0JBQTNCTSwwQkFBMkJOO0lBRXZELElBQUlGLE9BQU9TLFFBQVEsQ0FBQ0Ysc0JBQXNCLE9BQU87SUFFakQsSUFBZ0JHLCtCQUFBQSxNQUFNQyxJQUFJLENBQUNYLE9BQU9ZLEtBQUssQ0FBQ1IsUUFBUTtRQUM5Q1MsSUFBSUw7UUFDSk0sTUFBTTtRQUNOQyxPQUFPLFNBQUNDLE1BQU1DO1lBQ1osT0FBTyxDQUFDakIsT0FBT1MsUUFBUSxDQUFDTyxTQUNuQmYsUUFBUWlCLFNBQVMsQ0FBQ0YsU0FDbEJBLEtBQUtHLElBQUksS0FBS2QsVUFDZFksS0FBS0csTUFBTSxJQUFJWix3QkFBd0JZLE1BQU0sR0FBRztRQUN2RDtJQUNGLFNBVE9MLFFBQVNMO0lBV2hCLE9BQU8sQ0FBQyxDQUFDSztBQUNYO0FBRUEsZUFBZVosYUFBYSJ9