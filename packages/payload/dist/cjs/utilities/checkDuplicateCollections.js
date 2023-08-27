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
var _errors = require("../errors");
var getDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) !== index;
    });
};
var checkDuplicateCollections = function(collections) {
    var duplicateSlugs = getDuplicates(collections.map(function(c) {
        return c.slug;
    }));
    if (duplicateSlugs.length > 0) {
        throw new _errors.DuplicateCollection("slug", duplicateSlugs);
    }
};
var _default = checkDuplicateCollections;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvY2hlY2tEdXBsaWNhdGVDb2xsZWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdXBsaWNhdGVDb2xsZWN0aW9uIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuXG5jb25zdCBnZXREdXBsaWNhdGVzID0gKGFycjogc3RyaW5nW10pID0+IGFyci5maWx0ZXIoKGl0ZW0sIGluZGV4KSA9PiBhcnIuaW5kZXhPZihpdGVtKSAhPT0gaW5kZXgpO1xuXG5jb25zdCBjaGVja0R1cGxpY2F0ZUNvbGxlY3Rpb25zID0gKGNvbGxlY3Rpb25zOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnW10pOiB2b2lkID0+IHtcbiAgY29uc3QgZHVwbGljYXRlU2x1Z3MgPSBnZXREdXBsaWNhdGVzKGNvbGxlY3Rpb25zLm1hcCgoYykgPT4gYy5zbHVnKSk7XG4gIGlmIChkdXBsaWNhdGVTbHVncy5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IER1cGxpY2F0ZUNvbGxlY3Rpb24oJ3NsdWcnLCBkdXBsaWNhdGVTbHVncyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrRHVwbGljYXRlQ29sbGVjdGlvbnM7XG4iXSwibmFtZXMiOlsiZ2V0RHVwbGljYXRlcyIsImFyciIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJjaGVja0R1cGxpY2F0ZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJkdXBsaWNhdGVTbHVncyIsIm1hcCIsImMiLCJzbHVnIiwibGVuZ3RoIiwiRHVwbGljYXRlQ29sbGVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFZQTs7O2VBQUE7OztzQkFab0M7QUFHcEMsSUFBTUEsZ0JBQWdCLFNBQUNDO1dBQWtCQSxJQUFJQyxNQUFNLENBQUMsU0FBQ0MsTUFBTUM7ZUFBVUgsSUFBSUksT0FBTyxDQUFDRixVQUFVQzs7O0FBRTNGLElBQU1FLDRCQUE0QixTQUFDQztJQUNqQyxJQUFNQyxpQkFBaUJSLGNBQWNPLFlBQVlFLEdBQUcsQ0FBQyxTQUFDQztlQUFNQSxFQUFFQyxJQUFJOztJQUNsRSxJQUFJSCxlQUFlSSxNQUFNLEdBQUcsR0FBRztRQUM3QixNQUFNLElBQUlDLDJCQUFtQixDQUFDLFFBQVFMO0lBQ3hDO0FBQ0Y7SUFFQSxXQUFlRiJ9