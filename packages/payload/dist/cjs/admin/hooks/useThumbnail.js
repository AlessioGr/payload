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
var _Config = require("../components/utilities/Config");
var _isImage = /*#__PURE__*/ _interop_require_default(require("../../uploads/isImage"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var absoluteURLPattern = new RegExp("^(?:[a-z]+:)?//", "i");
var base64Pattern = new RegExp(/^data:image\/[a-z]+;base64,/);
var useThumbnail = function(collection, doc) {
    var _collection_upload = collection.upload, staticURL = _collection_upload.staticURL, adminThumbnail = _collection_upload.adminThumbnail;
    var mimeType = doc.mimeType, sizes = doc.sizes, filename = doc.filename, url = doc.url;
    var serverURL = (0, _Config.useConfig)().serverURL;
    var pathURL = "".concat(serverURL).concat(staticURL || "");
    if (absoluteURLPattern.test(staticURL)) {
        pathURL = staticURL;
    }
    if (typeof adminThumbnail === "function") {
        var thumbnailURL = adminThumbnail({
            doc: doc
        });
        if (!thumbnailURL) return false;
        if (absoluteURLPattern.test(thumbnailURL) || base64Pattern.test(thumbnailURL)) {
            return thumbnailURL;
        }
        return "".concat(pathURL, "/").concat(thumbnailURL);
    }
    if ((0, _isImage.default)(mimeType)) {
        var _sizes_adminThumbnail, _sizes, _sizes_adminThumbnail1, _sizes1;
        if (typeof adminThumbnail === "undefined" && url) {
            return url;
        }
        if ((_sizes = sizes) === null || _sizes === void 0 ? void 0 : (_sizes_adminThumbnail = _sizes[adminThumbnail]) === null || _sizes_adminThumbnail === void 0 ? void 0 : _sizes_adminThumbnail.url) {
            return sizes[adminThumbnail].url;
        }
        if ((_sizes1 = sizes) === null || _sizes1 === void 0 ? void 0 : (_sizes_adminThumbnail1 = _sizes1[adminThumbnail]) === null || _sizes_adminThumbnail1 === void 0 ? void 0 : _sizes_adminThumbnail1.filename) {
            return "".concat(pathURL, "/").concat(sizes[adminThumbnail].filename);
        }
        return "".concat(pathURL, "/").concat(filename);
    }
    return false;
};
var _default = useThumbnail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9ob29rcy91c2VUaHVtYm5haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vY29tcG9uZW50cy91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGlzSW1hZ2UgZnJvbSAnLi4vLi4vdXBsb2Fkcy9pc0ltYWdlJztcblxuY29uc3QgYWJzb2x1dGVVUkxQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXig/OlthLXpdKzopPy8vJywgJ2knKTtcbmNvbnN0IGJhc2U2NFBhdHRlcm4gPSBuZXcgUmVnRXhwKC9eZGF0YTppbWFnZVxcL1thLXpdKztiYXNlNjQsLyk7XG5cbmNvbnN0IHVzZVRodW1ibmFpbCA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogc3RyaW5nIHwgZmFsc2UgPT4ge1xuICBjb25zdCB7XG4gICAgdXBsb2FkOiB7XG4gICAgICBzdGF0aWNVUkwsXG4gICAgICBhZG1pblRodW1ibmFpbCxcbiAgICB9LFxuICB9ID0gY29sbGVjdGlvbjtcblxuICBjb25zdCB7XG4gICAgbWltZVR5cGUsXG4gICAgc2l6ZXMsXG4gICAgZmlsZW5hbWUsXG4gICAgdXJsLFxuICB9ID0gZG9jO1xuXG4gIGNvbnN0IHsgc2VydmVyVVJMIH0gPSB1c2VDb25maWcoKTtcbiAgbGV0IHBhdGhVUkwgPSBgJHtzZXJ2ZXJVUkx9JHtzdGF0aWNVUkwgfHwgJyd9YDtcblxuICBpZiAoYWJzb2x1dGVVUkxQYXR0ZXJuLnRlc3Qoc3RhdGljVVJMKSkge1xuICAgIHBhdGhVUkwgPSBzdGF0aWNVUkw7XG4gIH1cblxuICBpZiAodHlwZW9mIGFkbWluVGh1bWJuYWlsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgdGh1bWJuYWlsVVJMID0gYWRtaW5UaHVtYm5haWwoeyBkb2MgfSk7XG5cbiAgICBpZiAoIXRodW1ibmFpbFVSTCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKGFic29sdXRlVVJMUGF0dGVybi50ZXN0KHRodW1ibmFpbFVSTCkgfHwgYmFzZTY0UGF0dGVybi50ZXN0KHRodW1ibmFpbFVSTCkpIHtcbiAgICAgIHJldHVybiB0aHVtYm5haWxVUkw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3BhdGhVUkx9LyR7dGh1bWJuYWlsVVJMfWA7XG4gIH1cblxuICBpZiAoaXNJbWFnZShtaW1lVHlwZSBhcyBzdHJpbmcpKSB7XG4gICAgaWYgKHR5cGVvZiBhZG1pblRodW1ibmFpbCA9PT0gJ3VuZGVmaW5lZCcgJiYgdXJsKSB7XG4gICAgICByZXR1cm4gdXJsIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICBpZiAoc2l6ZXM/LlthZG1pblRodW1ibmFpbF0/LnVybCkge1xuICAgICAgcmV0dXJuIHNpemVzW2FkbWluVGh1bWJuYWlsXS51cmw7XG4gICAgfVxuXG4gICAgaWYgKHNpemVzPy5bYWRtaW5UaHVtYm5haWxdPy5maWxlbmFtZSkge1xuICAgICAgcmV0dXJuIGAke3BhdGhVUkx9LyR7c2l6ZXNbYWRtaW5UaHVtYm5haWxdLmZpbGVuYW1lfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAke3BhdGhVUkx9LyR7ZmlsZW5hbWV9YDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRodW1ibmFpbDtcbiJdLCJuYW1lcyI6WyJhYnNvbHV0ZVVSTFBhdHRlcm4iLCJSZWdFeHAiLCJiYXNlNjRQYXR0ZXJuIiwidXNlVGh1bWJuYWlsIiwiY29sbGVjdGlvbiIsImRvYyIsInVwbG9hZCIsInN0YXRpY1VSTCIsImFkbWluVGh1bWJuYWlsIiwibWltZVR5cGUiLCJzaXplcyIsImZpbGVuYW1lIiwidXJsIiwic2VydmVyVVJMIiwidXNlQ29uZmlnIiwicGF0aFVSTCIsInRlc3QiLCJ0aHVtYm5haWxVUkwiLCJpc0ltYWdlIl0sIm1hcHBpbmdzIjoiOzs7OytCQTREQTs7O2VBQUE7OztzQkE1RDBCOzhEQUVOOzs7Ozs7QUFFcEIsSUFBTUEscUJBQXFCLElBQUlDLE9BQU8sbUJBQW1CO0FBQ3pELElBQU1DLGdCQUFnQixJQUFJRCxPQUFPO0FBRWpDLElBQU1FLGVBQWUsU0FBQ0MsWUFBdUNDO0lBQzNELHlCQUtJRCxXQUpGRSxRQUNFQywrQkFBQUEsV0FDQUMsb0NBQUFBO0lBSUosSUFDRUMsV0FJRUosSUFKRkksVUFDQUMsUUFHRUwsSUFIRkssT0FDQUMsV0FFRU4sSUFGRk0sVUFDQUMsTUFDRVAsSUFERk87SUFHRixJQUFNLEFBQUVDLFlBQWNDLElBQUFBLGlCQUFTLElBQXZCRDtJQUNSLElBQUlFLFVBQVUsQUFBQyxHQUFjUixPQUFaTSxXQUE0QixPQUFoQk4sYUFBYTtJQUUxQyxJQUFJUCxtQkFBbUJnQixJQUFJLENBQUNULFlBQVk7UUFDdENRLFVBQVVSO0lBQ1o7SUFFQSxJQUFJLE9BQU9DLG1CQUFtQixZQUFZO1FBQ3hDLElBQU1TLGVBQWVULGVBQWU7WUFBRUgsS0FBQUE7UUFBSTtRQUUxQyxJQUFJLENBQUNZLGNBQWMsT0FBTztRQUUxQixJQUFJakIsbUJBQW1CZ0IsSUFBSSxDQUFDQyxpQkFBaUJmLGNBQWNjLElBQUksQ0FBQ0MsZUFBZTtZQUM3RSxPQUFPQTtRQUNUO1FBRUEsT0FBTyxBQUFDLEdBQWFBLE9BQVhGLFNBQVEsS0FBZ0IsT0FBYkU7SUFDdkI7SUFFQSxJQUFJQyxJQUFBQSxnQkFBTyxFQUFDVCxXQUFxQjtZQUszQkMsdUJBQUFBLFFBSUFBLHdCQUFBQTtRQVJKLElBQUksT0FBT0YsbUJBQW1CLGVBQWVJLEtBQUs7WUFDaEQsT0FBT0E7UUFDVDtRQUVBLEtBQUlGLFNBQUFBLG1CQUFBQSw4QkFBQUEsd0JBQUFBLE1BQU8sQ0FBQ0YsZUFBZSxjQUF2QkUsNENBQUFBLHNCQUF5QkUsR0FBRyxFQUFFO1lBQ2hDLE9BQU9GLEtBQUssQ0FBQ0YsZUFBZSxDQUFDSSxHQUFHO1FBQ2xDO1FBRUEsS0FBSUYsVUFBQUEsbUJBQUFBLCtCQUFBQSx5QkFBQUEsT0FBTyxDQUFDRixlQUFlLGNBQXZCRSw2Q0FBQUEsdUJBQXlCQyxRQUFRLEVBQUU7WUFDckMsT0FBTyxBQUFDLEdBQWFELE9BQVhLLFNBQVEsS0FBa0MsT0FBL0JMLEtBQUssQ0FBQ0YsZUFBZSxDQUFDRyxRQUFRO1FBQ3JEO1FBRUEsT0FBTyxBQUFDLEdBQWFBLE9BQVhJLFNBQVEsS0FBWSxPQUFUSjtJQUN2QjtJQUVBLE9BQU87QUFDVDtJQUVBLFdBQWVSIn0=