"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useDrawerSlug", {
    enumerable: true,
    get: function() {
        return useDrawerSlug;
    }
});
var _react = require("react");
var _ = require(".");
var _EditDepth = require("../../utilities/EditDepth");
var useDrawerSlug = function(slug) {
    var uuid = (0, _react.useId)();
    var editDepth = (0, _EditDepth.useEditDepth)();
    return (0, _.formatDrawerSlug)({
        slug: "".concat(slug, "-").concat(uuid),
        depth: editDepth
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0RyYXdlci91c2VEcmF3ZXJTbHVnLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VJZCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZvcm1hdERyYXdlclNsdWcgfSBmcm9tICcuJztcbmltcG9ydCB7IHVzZUVkaXREZXB0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9FZGl0RGVwdGgnO1xuXG5leHBvcnQgY29uc3QgdXNlRHJhd2VyU2x1ZyA9IChzbHVnOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCB1dWlkID0gdXNlSWQoKTtcbiAgY29uc3QgZWRpdERlcHRoID0gdXNlRWRpdERlcHRoKCk7XG4gIHJldHVybiBmb3JtYXREcmF3ZXJTbHVnKHtcbiAgICBzbHVnOiBgJHtzbHVnfS0ke3V1aWR9YCxcbiAgICBkZXB0aDogZWRpdERlcHRoLFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsidXNlRHJhd2VyU2x1ZyIsInNsdWciLCJ1dWlkIiwidXNlSWQiLCJlZGl0RGVwdGgiLCJ1c2VFZGl0RGVwdGgiLCJmb3JtYXREcmF3ZXJTbHVnIiwiZGVwdGgiXSwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7OztxQkFKUztnQkFDVzt5QkFDSjtBQUV0QixJQUFNQSxnQkFBZ0IsU0FBQ0M7SUFDNUIsSUFBTUMsT0FBT0MsSUFBQUEsWUFBSztJQUNsQixJQUFNQyxZQUFZQyxJQUFBQSx1QkFBWTtJQUM5QixPQUFPQyxJQUFBQSxrQkFBZ0IsRUFBQztRQUN0QkwsTUFBTSxBQUFDLEdBQVVDLE9BQVJELE1BQUssS0FBUSxPQUFMQztRQUNqQkssT0FBT0g7SUFDVDtBQUNGIn0=