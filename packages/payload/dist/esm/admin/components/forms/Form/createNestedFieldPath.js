import { fieldAffectsData } from "../../../../fields/config/types";
export var createNestedFieldPath = function(parentPath, field) {
    if (parentPath) {
        if (fieldAffectsData(field)) {
            return "".concat(parentPath, ".").concat(field.name);
        }
        return parentPath;
    }
    if (fieldAffectsData(field)) {
        return field.name;
    }
    return "";
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXN0ZWRGaWVsZFBhdGggPSAocGFyZW50UGF0aDogc3RyaW5nLCBmaWVsZDogRmllbGQpOiBzdHJpbmcgPT4ge1xuICBpZiAocGFyZW50UGF0aCkge1xuICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSkge1xuICAgICAgcmV0dXJuIGAke3BhcmVudFBhdGh9LiR7ZmllbGQubmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRQYXRoO1xuICB9XG5cbiAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgcmV0dXJuIGZpZWxkLm5hbWU7XG4gIH1cblxuICByZXR1cm4gJyc7XG59O1xuIl0sIm5hbWVzIjpbImZpZWxkQWZmZWN0c0RhdGEiLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJwYXJlbnRQYXRoIiwiZmllbGQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFnQkEsZ0JBQWdCLFFBQVEsa0NBQWtDO0FBRTFFLE9BQU8sSUFBTUMsd0JBQXdCLFNBQUNDLFlBQW9CQztJQUN4RCxJQUFJRCxZQUFZO1FBQ2QsSUFBSUYsaUJBQWlCRyxRQUFRO1lBQzNCLE9BQU8sQUFBQyxHQUFnQkEsT0FBZEQsWUFBVyxLQUFjLE9BQVhDLE1BQU1DLElBQUk7UUFDcEM7UUFFQSxPQUFPRjtJQUNUO0lBRUEsSUFBSUYsaUJBQWlCRyxRQUFRO1FBQzNCLE9BQU9BLE1BQU1DLElBQUk7SUFDbkI7SUFFQSxPQUFPO0FBQ1QsRUFBRSJ9