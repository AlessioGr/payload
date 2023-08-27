export function isNumber(value) {
    if (typeof value === "string" && value.trim() === "") {
        return false;
    }
    return !Number.isNaN(Number(value));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvaXNOdW1iZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAhTnVtYmVyLmlzTmFOKE51bWJlcih2YWx1ZSkpO1xufVxuIl0sIm5hbWVzIjpbImlzTnVtYmVyIiwidmFsdWUiLCJ0cmltIiwiTnVtYmVyIiwiaXNOYU4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBU0EsU0FBU0MsS0FBYztJQUNyQyxJQUFJLE9BQU9BLFVBQVUsWUFBWUEsTUFBTUMsSUFBSSxPQUFPLElBQUk7UUFDcEQsT0FBTztJQUNUO0lBRUEsT0FBTyxDQUFDQyxPQUFPQyxLQUFLLENBQUNELE9BQU9GO0FBQzlCIn0=