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
var _isActive = /*#__PURE__*/ _interop_require_default(require("./isActive"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var toggleLeaf = function(editor, format) {
    var isActive = (0, _isActive.default)(editor, format);
    if (isActive) {
        _slate.Editor.removeMark(editor, format);
    } else {
        _slate.Editor.addMark(editor, format, true);
    }
};
var _default = toggleLeaf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy90b2dnbGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRvciB9IGZyb20gJ3NsYXRlJztcbmltcG9ydCBpc0xlYWZBY3RpdmUgZnJvbSAnLi9pc0FjdGl2ZSc7XG5cbmNvbnN0IHRvZ2dsZUxlYWYgPSAoZWRpdG9yLCBmb3JtYXQpID0+IHtcbiAgY29uc3QgaXNBY3RpdmUgPSBpc0xlYWZBY3RpdmUoZWRpdG9yLCBmb3JtYXQpO1xuXG4gIGlmIChpc0FjdGl2ZSkge1xuICAgIEVkaXRvci5yZW1vdmVNYXJrKGVkaXRvciwgZm9ybWF0KTtcbiAgfSBlbHNlIHtcbiAgICBFZGl0b3IuYWRkTWFyayhlZGl0b3IsIGZvcm1hdCwgdHJ1ZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZ2dsZUxlYWY7XG4iXSwibmFtZXMiOlsidG9nZ2xlTGVhZiIsImVkaXRvciIsImZvcm1hdCIsImlzQWN0aXZlIiwiaXNMZWFmQWN0aXZlIiwiRWRpdG9yIiwicmVtb3ZlTWFyayIsImFkZE1hcmsiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYUE7OztlQUFBOzs7cUJBYnVCOytEQUNFOzs7Ozs7QUFFekIsSUFBTUEsYUFBYSxTQUFDQyxRQUFRQztJQUMxQixJQUFNQyxXQUFXQyxJQUFBQSxpQkFBWSxFQUFDSCxRQUFRQztJQUV0QyxJQUFJQyxVQUFVO1FBQ1pFLGFBQU0sQ0FBQ0MsVUFBVSxDQUFDTCxRQUFRQztJQUM1QixPQUFPO1FBQ0xHLGFBQU0sQ0FBQ0UsT0FBTyxDQUFDTixRQUFRQyxRQUFRO0lBQ2pDO0FBQ0Y7SUFFQSxXQUFlRiJ9