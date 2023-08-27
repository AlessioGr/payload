"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return canResizeImage;
    }
});
function canResizeImage(mimeType) {
    return [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp"
    ].indexOf(mimeType) > -1;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2NhblJlc2l6ZUltYWdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhblJlc2l6ZUltYWdlKG1pbWVUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFsnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnLCAnaW1hZ2UvZ2lmJywgJ2ltYWdlL3dlYnAnXS5pbmRleE9mKG1pbWVUeXBlKSA+IC0xO1xufVxuIl0sIm5hbWVzIjpbImNhblJlc2l6ZUltYWdlIiwibWltZVR5cGUiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFBOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQSxlQUFlQyxRQUFnQjtJQUNyRCxPQUFPO1FBQUM7UUFBYztRQUFhO1FBQWE7S0FBYSxDQUFDQyxPQUFPLENBQUNELFlBQVksQ0FBQztBQUNyRiJ9