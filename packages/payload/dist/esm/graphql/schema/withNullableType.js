import { GraphQLNonNull } from "graphql";
var withNullableType = function(field, type) {
    var forceNullable = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var hasReadAccessControl = field.access && field.access.read;
    var condition = field.admin && field.admin.condition;
    var isTimestamp = field.name === "createdAt" || field.name === "updatedAt";
    if (!forceNullable && "required" in field && field.required && !field.localized && !condition && !hasReadAccessControl && !isTimestamp) {
        return new GraphQLNonNull(type);
    }
    return type;
};
export default withNullableType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS93aXRoTnVsbGFibGVUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgRmllbGRBZmZlY3RpbmdEYXRhIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IHdpdGhOdWxsYWJsZVR5cGUgPSAoZmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSwgdHlwZTogR3JhcGhRTFR5cGUsIGZvcmNlTnVsbGFibGUgPSBmYWxzZSk6IEdyYXBoUUxUeXBlID0+IHtcbiAgY29uc3QgaGFzUmVhZEFjY2Vzc0NvbnRyb2wgPSBmaWVsZC5hY2Nlc3MgJiYgZmllbGQuYWNjZXNzLnJlYWQ7XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGZpZWxkLmFkbWluICYmIGZpZWxkLmFkbWluLmNvbmRpdGlvbjtcbiAgY29uc3QgaXNUaW1lc3RhbXAgPSBmaWVsZC5uYW1lID09PSAnY3JlYXRlZEF0JyB8fCBmaWVsZC5uYW1lID09PSAndXBkYXRlZEF0JztcblxuICBpZiAoIWZvcmNlTnVsbGFibGUgJiYgJ3JlcXVpcmVkJyBpbiBmaWVsZCAmJiBmaWVsZC5yZXF1aXJlZCAmJiAhZmllbGQubG9jYWxpemVkICYmICFjb25kaXRpb24gJiYgIWhhc1JlYWRBY2Nlc3NDb250cm9sICYmICFpc1RpbWVzdGFtcCkge1xuICAgIHJldHVybiBuZXcgR3JhcGhRTE5vbk51bGwodHlwZSk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhOdWxsYWJsZVR5cGU7XG4iXSwibmFtZXMiOlsiR3JhcGhRTE5vbk51bGwiLCJ3aXRoTnVsbGFibGVUeXBlIiwiZmllbGQiLCJ0eXBlIiwiZm9yY2VOdWxsYWJsZSIsImhhc1JlYWRBY2Nlc3NDb250cm9sIiwiYWNjZXNzIiwicmVhZCIsImNvbmRpdGlvbiIsImFkbWluIiwiaXNUaW1lc3RhbXAiLCJuYW1lIiwicmVxdWlyZWQiLCJsb2NhbGl6ZWQiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGNBQWMsUUFBcUIsVUFBVTtBQUd0RCxJQUFNQyxtQkFBbUIsU0FBQ0MsT0FBMkJDO1FBQW1CQyxpRkFBZ0I7SUFDdEYsSUFBTUMsdUJBQXVCSCxNQUFNSSxNQUFNLElBQUlKLE1BQU1JLE1BQU0sQ0FBQ0MsSUFBSTtJQUM5RCxJQUFNQyxZQUFZTixNQUFNTyxLQUFLLElBQUlQLE1BQU1PLEtBQUssQ0FBQ0QsU0FBUztJQUN0RCxJQUFNRSxjQUFjUixNQUFNUyxJQUFJLEtBQUssZUFBZVQsTUFBTVMsSUFBSSxLQUFLO0lBRWpFLElBQUksQ0FBQ1AsaUJBQWlCLGNBQWNGLFNBQVNBLE1BQU1VLFFBQVEsSUFBSSxDQUFDVixNQUFNVyxTQUFTLElBQUksQ0FBQ0wsYUFBYSxDQUFDSCx3QkFBd0IsQ0FBQ0ssYUFBYTtRQUN0SSxPQUFPLElBQUlWLGVBQWVHO0lBQzVCO0lBRUEsT0FBT0E7QUFDVDtBQUVBLGVBQWVGLGlCQUFpQiJ9