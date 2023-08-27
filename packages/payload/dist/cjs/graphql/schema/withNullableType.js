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
var _graphql = require("graphql");
var withNullableType = function(field, type) {
    var forceNullable = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var hasReadAccessControl = field.access && field.access.read;
    var condition = field.admin && field.admin.condition;
    var isTimestamp = field.name === "createdAt" || field.name === "updatedAt";
    if (!forceNullable && "required" in field && field.required && !field.localized && !condition && !hasReadAccessControl && !isTimestamp) {
        return new _graphql.GraphQLNonNull(type);
    }
    return type;
};
var _default = withNullableType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS93aXRoTnVsbGFibGVUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgRmllbGRBZmZlY3RpbmdEYXRhIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IHdpdGhOdWxsYWJsZVR5cGUgPSAoZmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSwgdHlwZTogR3JhcGhRTFR5cGUsIGZvcmNlTnVsbGFibGUgPSBmYWxzZSk6IEdyYXBoUUxUeXBlID0+IHtcbiAgY29uc3QgaGFzUmVhZEFjY2Vzc0NvbnRyb2wgPSBmaWVsZC5hY2Nlc3MgJiYgZmllbGQuYWNjZXNzLnJlYWQ7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGZpZWxkLmFkbWluICYmIGZpZWxkLmFkbWluLmNvbmRpdGlvbjtcbiAgY29uc3QgaXNUaW1lc3RhbXAgPSBmaWVsZC5uYW1lID09PSAnY3JlYXRlZEF0JyB8fCBmaWVsZC5uYW1lID09PSAndXBkYXRlZEF0JztcblxuICBpZiAoIWZvcmNlTnVsbGFibGUgJiYgJ3JlcXVpcmVkJyBpbiBmaWVsZCAmJiBmaWVsZC5yZXF1aXJlZCAmJiAhZmllbGQubG9jYWxpemVkICYmICFjb25kaXRpb24gJiYgIWhhc1JlYWRBY2Nlc3NDb250cm9sICYmICFpc1RpbWVzdGFtcCkge1xuICAgIHJldHVybiBuZXcgR3JhcGhRTE5vbk51bGwodHlwZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhOdWxsYWJsZVR5cGU7XG4iXSwibmFtZXMiOlsid2l0aE51bGxhYmxlVHlwZSIsImZpZWxkIiwidHlwZSIsImZvcmNlTnVsbGFibGUiLCJoYXNSZWFkQWNjZXNzQ29udHJvbCIsImFjY2VzcyIsInJlYWQiLCJjb25kaXRpb24iLCJhZG1pbiIsImlzVGltZXN0YW1wIiwibmFtZSIsInJlcXVpcmVkIiwibG9jYWxpemVkIiwiR3JhcGhRTE5vbk51bGwiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZUE7OztlQUFBOzs7dUJBZjRDO0FBRzVDLElBQU1BLG1CQUFtQixTQUFDQyxPQUEyQkM7UUFBbUJDLGlGQUFnQjtJQUN0RixJQUFNQyx1QkFBdUJILE1BQU1JLE1BQU0sSUFBSUosTUFBTUksTUFBTSxDQUFDQyxJQUFJO0lBQzlELElBQU1DLFlBQVlOLE1BQU1PLEtBQUssSUFBSVAsTUFBTU8sS0FBSyxDQUFDRCxTQUFTO0lBQ3RELElBQU1FLGNBQWNSLE1BQU1TLElBQUksS0FBSyxlQUFlVCxNQUFNUyxJQUFJLEtBQUs7SUFFakUsSUFBSSxDQUFDUCxpQkFBaUIsY0FBY0YsU0FBU0EsTUFBTVUsUUFBUSxJQUFJLENBQUNWLE1BQU1XLFNBQVMsSUFBSSxDQUFDTCxhQUFhLENBQUNILHdCQUF3QixDQUFDSyxhQUFhO1FBQ3RJLE9BQU8sSUFBSUksdUJBQWMsQ0FBQ1g7SUFDNUI7SUFFQSxPQUFPQTtBQUNUO0lBRUEsV0FBZUYifQ==