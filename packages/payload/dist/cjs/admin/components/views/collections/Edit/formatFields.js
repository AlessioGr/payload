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
var _types = require("../../../../../fields/config/types");
var formatFields = function(collection, isEditing) {
    return isEditing ? collection.fields.filter(function(field) {
        return (0, _types.fieldAffectsData)(field) && field.name !== "id" || true;
    }) : collection.fields;
};
var _default = formatFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0VkaXQvZm9ybWF0RmllbGRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IGZvcm1hdEZpZWxkcyA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBpc0VkaXRpbmc6IGJvb2xlYW4pOiBGaWVsZFtdID0+IChpc0VkaXRpbmdcbiAgPyBjb2xsZWN0aW9uLmZpZWxkcy5maWx0ZXIoKGZpZWxkKSA9PiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkgJiYgZmllbGQubmFtZSAhPT0gJ2lkJykgfHwgdHJ1ZSlcbiAgOiBjb2xsZWN0aW9uLmZpZWxkcyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdEZpZWxkcztcbiJdLCJuYW1lcyI6WyJmb3JtYXRGaWVsZHMiLCJjb2xsZWN0aW9uIiwiaXNFZGl0aW5nIiwiZmllbGRzIiwiZmlsdGVyIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFPQTs7O2VBQUE7OztxQkFOd0M7QUFFeEMsSUFBTUEsZUFBZSxTQUFDQyxZQUF1Q0M7V0FBaUNBLFlBQzFGRCxXQUFXRSxNQUFNLENBQUNDLE1BQU0sQ0FBQyxTQUFDQztlQUFVLEFBQUNDLElBQUFBLHVCQUFnQixFQUFDRCxVQUFVQSxNQUFNRSxJQUFJLEtBQUssUUFBUztTQUN4Rk4sV0FBV0UsTUFBTTs7SUFFckIsV0FBZUgifQ==