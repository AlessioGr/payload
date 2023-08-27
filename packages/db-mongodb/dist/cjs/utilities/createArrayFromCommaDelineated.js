"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createArrayFromCommaDelineated", {
    enumerable: true,
    get: function() {
        return createArrayFromCommaDelineated;
    }
});
function createArrayFromCommaDelineated(input) {
    if (Array.isArray(input)) return input;
    if (input.indexOf(",") > -1) {
        return input.split(",");
    }
    return [
        input
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvY3JlYXRlQXJyYXlGcm9tQ29tbWFEZWxpbmVhdGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcnJheUZyb21Db21tYURlbGluZWF0ZWQoaW5wdXQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIGlmIChpbnB1dC5pbmRleE9mKCcsJykgPiAtMSkge1xuICAgIHJldHVybiBpbnB1dC5zcGxpdCgnLCcpO1xuICB9XG4gIHJldHVybiBbaW5wdXRdO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUFycmF5RnJvbUNvbW1hRGVsaW5lYXRlZCIsImlucHV0IiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7OytCQUFnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsK0JBQStCQyxLQUFhO0lBQzFELElBQUlDLE1BQU1DLE9BQU8sQ0FBQ0YsUUFBUSxPQUFPQTtJQUNqQyxJQUFJQSxNQUFNRyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUc7UUFDM0IsT0FBT0gsTUFBTUksS0FBSyxDQUFDO0lBQ3JCO0lBQ0EsT0FBTztRQUFDSjtLQUFNO0FBQ2hCIn0=