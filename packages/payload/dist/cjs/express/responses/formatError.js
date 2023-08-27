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
var _APIError = /*#__PURE__*/ _interop_require_default(require("../../errors/APIError"));
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var formatErrorResponse = function(incoming) {
    if (incoming) {
        if (_instanceof(incoming, _APIError.default) && incoming.data) {
            return {
                errors: [
                    {
                        name: incoming.name,
                        message: incoming.message,
                        data: incoming.data
                    }
                ]
            };
        }
        // mongoose
        if (!(_instanceof(incoming, _APIError.default) || _instanceof(incoming, Error)) && incoming.errors) {
            return {
                errors: Object.keys(incoming.errors).reduce(function(acc, key) {
                    acc.push({
                        field: incoming.errors[key].path,
                        message: incoming.errors[key].message
                    });
                    return acc;
                }, [])
            };
        }
        if (Array.isArray(incoming.message)) {
            return {
                errors: incoming.message
            };
        }
        if (incoming.name) {
            return {
                errors: [
                    {
                        message: incoming.message
                    }
                ]
            };
        }
    }
    return {
        errors: [
            {
                message: "An unknown error occurred."
            }
        ]
    };
};
var _default = formatErrorResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi4vLi4vZXJyb3JzL0FQSUVycm9yJztcblxuZXhwb3J0IHR5cGUgRXJyb3JSZXNwb25zZSA9IHsgZXJyb3JzOiB1bmtub3duW10sIGRhdGE/OiBhbnksIHN0YWNrPzogc3RyaW5nIH07XG5cbmNvbnN0IGZvcm1hdEVycm9yUmVzcG9uc2UgPSAoaW5jb21pbmc6IEVycm9yIHwgQVBJRXJyb3IgfCB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSk6IEVycm9yUmVzcG9uc2UgPT4ge1xuICBpZiAoaW5jb21pbmcpIHtcbiAgICBpZiAoaW5jb21pbmcgaW5zdGFuY2VvZiBBUElFcnJvciAmJiBpbmNvbWluZy5kYXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFt7XG4gICAgICAgICAgbmFtZTogaW5jb21pbmcubmFtZSxcbiAgICAgICAgICBtZXNzYWdlOiBpbmNvbWluZy5tZXNzYWdlLFxuICAgICAgICAgIGRhdGE6IGluY29taW5nLmRhdGEsXG4gICAgICAgIH1dLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBtb25nb29zZVxuICAgIGlmICghKGluY29taW5nIGluc3RhbmNlb2YgQVBJRXJyb3IgfHwgaW5jb21pbmcgaW5zdGFuY2VvZiBFcnJvcikgJiYgaW5jb21pbmcuZXJyb3JzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IE9iamVjdC5rZXlzKGluY29taW5nLmVycm9ycylcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICBmaWVsZDogaW5jb21pbmcuZXJyb3JzW2tleV0ucGF0aCxcbiAgICAgICAgICAgICAgbWVzc2FnZTogaW5jb21pbmcuZXJyb3JzW2tleV0ubWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGluY29taW5nLm1lc3NhZ2UpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IGluY29taW5nLm1lc3NhZ2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpbmNvbWluZy5uYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlOiBpbmNvbWluZy5tZXNzYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzOiBbXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRFcnJvclJlc3BvbnNlO1xuIl0sIm5hbWVzIjpbImZvcm1hdEVycm9yUmVzcG9uc2UiLCJpbmNvbWluZyIsIkFQSUVycm9yIiwiZGF0YSIsImVycm9ycyIsIm5hbWUiLCJtZXNzYWdlIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwicHVzaCIsImZpZWxkIiwicGF0aCIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3REE7OztlQUFBOzs7K0RBeERxQjs7Ozs7Ozs7Ozs7OztBQUlyQixJQUFNQSxzQkFBc0IsU0FBQ0M7SUFDM0IsSUFBSUEsVUFBVTtRQUNaLElBQUlBLEFBQVEsWUFBUkEsVUFBb0JDLGlCQUFRLEtBQUlELFNBQVNFLElBQUksRUFBRTtZQUNqRCxPQUFPO2dCQUNMQyxRQUFRO29CQUFDO3dCQUNQQyxNQUFNSixTQUFTSSxJQUFJO3dCQUNuQkMsU0FBU0wsU0FBU0ssT0FBTzt3QkFDekJILE1BQU1GLFNBQVNFLElBQUk7b0JBQ3JCO2lCQUFFO1lBQ0o7UUFDRjtRQUVBLFdBQVc7UUFDWCxJQUFJLENBQUVGLENBQUFBLEFBQVEsWUFBUkEsVUFBb0JDLGlCQUFRLEtBQUlELEFBQVEsWUFBUkEsVUFBb0JNLE1BQUksS0FBTU4sU0FBU0csTUFBTSxFQUFFO1lBQ25GLE9BQU87Z0JBQ0xBLFFBQVFJLE9BQU9DLElBQUksQ0FBQ1IsU0FBU0csTUFBTSxFQUNoQ00sTUFBTSxDQUFDLFNBQUNDLEtBQUtDO29CQUNaRCxJQUFJRSxJQUFJLENBQUM7d0JBQ1BDLE9BQU9iLFNBQVNHLE1BQU0sQ0FBQ1EsSUFBSSxDQUFDRyxJQUFJO3dCQUNoQ1QsU0FBU0wsU0FBU0csTUFBTSxDQUFDUSxJQUFJLENBQUNOLE9BQU87b0JBQ3ZDO29CQUNBLE9BQU9LO2dCQUNULEdBQUcsRUFBRTtZQUNUO1FBQ0Y7UUFFQSxJQUFJSyxNQUFNQyxPQUFPLENBQUNoQixTQUFTSyxPQUFPLEdBQUc7WUFDbkMsT0FBTztnQkFDTEYsUUFBUUgsU0FBU0ssT0FBTztZQUMxQjtRQUNGO1FBRUEsSUFBSUwsU0FBU0ksSUFBSSxFQUFFO1lBQ2pCLE9BQU87Z0JBQ0xELFFBQVE7b0JBQ047d0JBQ0VFLFNBQVNMLFNBQVNLLE9BQU87b0JBQzNCO2lCQUNEO1lBQ0g7UUFDRjtJQUNGO0lBRUEsT0FBTztRQUNMRixRQUFRO1lBQ047Z0JBQ0VFLFNBQVM7WUFDWDtTQUNEO0lBQ0g7QUFDRjtJQUVBLFdBQWVOIn0=