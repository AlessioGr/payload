"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNumber", {
    enumerable: true,
    get: function() {
        return isNumber;
    }
});
function isNumber(value) {
    if (typeof value === "string" && value.trim() === "") {
        return false;
    }
    return !Number.isNaN(Number(value));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvaXNOdW1iZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpO1xufVxuIl0sIm5hbWVzIjpbImlzTnVtYmVyIiwidmFsdWUiLCJ0cmltIiwiTnVtYmVyIiwiaXNOYU4iXSwibWFwcGluZ3MiOiI7Ozs7K0JBQWdCQTs7O2VBQUFBOzs7QUFBVCxTQUFTQSxTQUFTQyxLQUFjO0lBQ3JDLElBQUksT0FBT0EsVUFBVSxZQUFZQSxNQUFNQyxJQUFJLE9BQU8sSUFBSTtRQUNwRCxPQUFPO0lBQ1Q7SUFFQSxPQUFPLENBQUNDLE9BQU9DLEtBQUssQ0FBQ0QsT0FBT0Y7QUFDOUIifQ==