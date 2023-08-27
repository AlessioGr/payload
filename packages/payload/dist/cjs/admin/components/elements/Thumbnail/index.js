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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _File = /*#__PURE__*/ _interop_require_default(require("../../graphics/File"));
var _useThumbnail = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useThumbnail"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "thumbnail";
var Thumbnail = function(props) {
    var doc = props.doc, filename = props.doc.filename, collection = props.collection, size = props.size, _props_className = props.className, className = _props_className === void 0 ? "" : _props_className;
    var thumbnailSRC = (0, _useThumbnail.default)(collection, doc);
    var classes = [
        baseClass,
        "".concat(baseClass, "--size-").concat(size || "medium"),
        className
    ].join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, thumbnailSRC && /*#__PURE__*/ _react.default.createElement("img", {
        src: thumbnailSRC,
        alt: filename
    }), !thumbnailSRC && /*#__PURE__*/ _react.default.createElement(_File.default, null));
};
var _default = Thumbnail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RodW1ibmFpbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgRmlsZUdyYXBoaWMgZnJvbSAnLi4vLi4vZ3JhcGhpY3MvRmlsZSc7XG5pbXBvcnQgdXNlVGh1bWJuYWlsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRodW1ibmFpbCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RodW1ibmFpbCc7XG5cbmNvbnN0IFRodW1ibmFpbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgZG9jOiB7XG4gICAgICBmaWxlbmFtZSxcbiAgICB9LFxuICAgIGNvbGxlY3Rpb24sXG4gICAgc2l6ZSxcbiAgICBjbGFzc05hbWUgPSAnJyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHRodW1ibmFpbFNSQyA9IHVzZVRodW1ibmFpbChjb2xsZWN0aW9uLCBkb2MpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGAke2Jhc2VDbGFzc30tLXNpemUtJHtzaXplIHx8ICdtZWRpdW0nfWAsXG4gICAgY2xhc3NOYW1lLFxuICBdLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHt0aHVtYm5haWxTUkMgJiYgKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXt0aHVtYm5haWxTUkN9XG4gICAgICAgICAgYWx0PXtmaWxlbmFtZSBhcyBzdHJpbmd9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyF0aHVtYm5haWxTUkMgJiYgKFxuICAgICAgICA8RmlsZUdyYXBoaWMgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlRodW1ibmFpbCIsInByb3BzIiwiZG9jIiwiZmlsZW5hbWUiLCJjb2xsZWN0aW9uIiwic2l6ZSIsImNsYXNzTmFtZSIsInRodW1ibmFpbFNSQyIsInVzZVRodW1ibmFpbCIsImNsYXNzZXMiLCJqb2luIiwiZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwiRmlsZUdyYXBoaWMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMENBOzs7ZUFBQTs7OzREQTFDa0I7MkRBRU07bUVBQ0M7UUFFbEI7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsWUFBNkIsU0FBQ0M7SUFDbEMsSUFDRUMsTUFPRUQsTUFQRkMsS0FDQUEsQUFDRUMsV0FLQUYsTUFORkMsSUFDRUMsVUFFRkMsYUFHRUgsTUFIRkcsWUFDQUMsT0FFRUosTUFGRkkseUJBRUVKLE1BREZLLFdBQUFBLDBDQUFZO0lBR2QsSUFBTUMsZUFBZUMsSUFBQUEscUJBQVksRUFBQ0osWUFBWUY7SUFFOUMsSUFBTU8sVUFBVTtRQUNkVjtRQUNDLEdBQXFCTSxPQUFuQk4sV0FBVSxXQUEwQixPQUFqQk0sUUFBUTtRQUM5QkM7S0FDRCxDQUFDSSxJQUFJLENBQUM7SUFFUCxxQkFDRSw2QkFBQ0M7UUFBSUwsV0FBV0c7T0FDYkYsOEJBQ0MsNkJBQUNLO1FBQ0NDLEtBQUtOO1FBQ0xPLEtBQUtYO1FBR1IsQ0FBQ0ksOEJBQ0EsNkJBQUNRLGFBQVc7QUFJcEI7SUFDQSxXQUFlZiJ9