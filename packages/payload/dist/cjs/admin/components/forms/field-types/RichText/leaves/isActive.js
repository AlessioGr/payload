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
var isLeafActive = function(editor, format) {
    var leaves = _slate.Editor.marks(editor);
    return leaves ? leaves[format] === true : false;
};
var _default = isLeafActive;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9pc0FjdGl2ZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAnc2xhdGUnO1xuXG5jb25zdCBpc0xlYWZBY3RpdmUgPSAoZWRpdG9yLCBmb3JtYXQpID0+IHtcbiAgY29uc3QgbGVhdmVzID0gRWRpdG9yLm1hcmtzKGVkaXRvcik7XG4gIHJldHVybiBsZWF2ZXMgPyBsZWF2ZXNbZm9ybWF0XSA9PT0gdHJ1ZSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNMZWFmQWN0aXZlO1xuIl0sIm5hbWVzIjpbImlzTGVhZkFjdGl2ZSIsImVkaXRvciIsImZvcm1hdCIsImxlYXZlcyIsIkVkaXRvciIsIm1hcmtzIl0sIm1hcHBpbmdzIjoiOzs7OytCQU9BOzs7ZUFBQTs7O3FCQVB1QjtBQUV2QixJQUFNQSxlQUFlLFNBQUNDLFFBQVFDO0lBQzVCLElBQU1DLFNBQVNDLGFBQU0sQ0FBQ0MsS0FBSyxDQUFDSjtJQUM1QixPQUFPRSxTQUFTQSxNQUFNLENBQUNELE9BQU8sS0FBSyxPQUFPO0FBQzVDO0lBRUEsV0FBZUYifQ==