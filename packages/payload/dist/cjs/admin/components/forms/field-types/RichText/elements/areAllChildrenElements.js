"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "areAllChildrenElements", {
    enumerable: true,
    get: function() {
        return areAllChildrenElements;
    }
});
var _slate = require("slate");
var areAllChildrenElements = function(node) {
    return Array.isArray(node.children) && node.children.every(function(child) {
        return _slate.Element.isElement(child);
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2FyZUFsbENoaWxkcmVuRWxlbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudCwgTm9kZSB9IGZyb20gJ3NsYXRlJztcblxuZXhwb3J0IGNvbnN0IGFyZUFsbENoaWxkcmVuRWxlbWVudHMgPSAobm9kZTogTm9kZSk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShub2RlLmNoaWxkcmVuKSAmJiBub2RlLmNoaWxkcmVuLmV2ZXJ5KChjaGlsZCkgPT4gRWxlbWVudC5pc0VsZW1lbnQoY2hpbGQpKTtcbn07XG4iXSwibmFtZXMiOlsiYXJlQWxsQ2hpbGRyZW5FbGVtZW50cyIsIm5vZGUiLCJBcnJheSIsImlzQXJyYXkiLCJjaGlsZHJlbiIsImV2ZXJ5IiwiY2hpbGQiLCJFbGVtZW50IiwiaXNFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7O2VBQUFBOzs7cUJBRmlCO0FBRXZCLElBQU1BLHlCQUF5QixTQUFDQztJQUNyQyxPQUFPQyxNQUFNQyxPQUFPLENBQUNGLEtBQUtHLFFBQVEsS0FBS0gsS0FBS0csUUFBUSxDQUFDQyxLQUFLLENBQUMsU0FBQ0M7ZUFBVUMsY0FBTyxDQUFDQyxTQUFTLENBQUNGOztBQUMxRiJ9