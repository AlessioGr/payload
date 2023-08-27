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
import { Editor, Node } from "slate";
import { isBlockElement } from "./isBlockElement";
export var getCommonBlock = function(editor, match) {
    var range = Editor.unhangRange(editor, editor.selection, {
        voids: true
    });
    var _Node_common = _sliced_to_array(Node.common(editor, range.anchor.path, range.focus.path), 2), common = _Node_common[0], path = _Node_common[1];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (isBlockElement(editor, common) || Editor.isEditor(common)) {
        return [
            common,
            path
        ];
    }
    return Editor.above(editor, {
        at: path,
        match: match || function(n) {
            return isBlockElement(editor, n) || Editor.isEditor(n);
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2dldENvbW1vbkJsb2NrLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0b3IsIE5vZGUsIE5vZGVFbnRyeSwgTm9kZU1hdGNoIH0gZnJvbSAnc2xhdGUnO1xuaW1wb3J0IHsgRWxlbWVudE5vZGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0Jsb2NrRWxlbWVudCB9IGZyb20gJy4vaXNCbG9ja0VsZW1lbnQnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tbW9uQmxvY2sgPSAoZWRpdG9yOiBFZGl0b3IsIG1hdGNoPzogTm9kZU1hdGNoPE5vZGU+KTogTm9kZUVudHJ5PE5vZGU+ID0+IHtcbiAgY29uc3QgcmFuZ2UgPSBFZGl0b3IudW5oYW5nUmFuZ2UoZWRpdG9yLCBlZGl0b3Iuc2VsZWN0aW9uLCB7IHZvaWRzOiB0cnVlIH0pO1xuXG4gIGNvbnN0IFtjb21tb24sIHBhdGhdID0gTm9kZS5jb21tb24oXG4gICAgZWRpdG9yLFxuICAgIHJhbmdlLmFuY2hvci5wYXRoLFxuICAgIHJhbmdlLmZvY3VzLnBhdGgsXG4gICk7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIGlmIChpc0Jsb2NrRWxlbWVudChlZGl0b3IsIGNvbW1vbikgfHwgRWRpdG9yLmlzRWRpdG9yKGNvbW1vbikpIHtcbiAgICByZXR1cm4gW2NvbW1vbiwgcGF0aF07XG4gIH1cblxuXG4gIHJldHVybiBFZGl0b3IuYWJvdmUoZWRpdG9yLCB7XG4gICAgYXQ6IHBhdGgsXG4gICAgbWF0Y2g6IG1hdGNoIHx8ICgobjogRWxlbWVudE5vZGUpID0+IGlzQmxvY2tFbGVtZW50KGVkaXRvciwgbikgfHwgRWRpdG9yLmlzRWRpdG9yKG4pKSxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkVkaXRvciIsIk5vZGUiLCJpc0Jsb2NrRWxlbWVudCIsImdldENvbW1vbkJsb2NrIiwiZWRpdG9yIiwibWF0Y2giLCJyYW5nZSIsInVuaGFuZ1JhbmdlIiwic2VsZWN0aW9uIiwidm9pZHMiLCJjb21tb24iLCJhbmNob3IiLCJwYXRoIiwiZm9jdXMiLCJpc0VkaXRvciIsImFib3ZlIiwiYXQiLCJuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsTUFBTSxFQUFFQyxJQUFJLFFBQThCLFFBQVE7QUFFM0QsU0FBU0MsY0FBYyxRQUFRLG1CQUFtQjtBQUVsRCxPQUFPLElBQU1DLGlCQUFpQixTQUFDQyxRQUFnQkM7SUFDN0MsSUFBTUMsUUFBUU4sT0FBT08sV0FBVyxDQUFDSCxRQUFRQSxPQUFPSSxTQUFTLEVBQUU7UUFBRUMsT0FBTztJQUFLO0lBRXpFLElBQXVCUixnQ0FBQUEsS0FBS1MsTUFBTSxDQUNoQ04sUUFDQUUsTUFBTUssTUFBTSxDQUFDQyxJQUFJLEVBQ2pCTixNQUFNTyxLQUFLLENBQUNELElBQUksT0FIWEYsU0FBZ0JULGlCQUFSVyxPQUFRWDtJQU12Qiw2REFBNkQ7SUFDN0QsYUFBYTtJQUNiLElBQUlDLGVBQWVFLFFBQVFNLFdBQVdWLE9BQU9jLFFBQVEsQ0FBQ0osU0FBUztRQUM3RCxPQUFPO1lBQUNBO1lBQVFFO1NBQUs7SUFDdkI7SUFHQSxPQUFPWixPQUFPZSxLQUFLLENBQUNYLFFBQVE7UUFDMUJZLElBQUlKO1FBQ0pQLE9BQU9BLFNBQVUsU0FBQ1k7bUJBQW1CZixlQUFlRSxRQUFRYSxNQUFNakIsT0FBT2MsUUFBUSxDQUFDRzs7SUFDcEY7QUFDRixFQUFFIn0=