function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import APIError from "../../errors/APIError";
var formatErrorResponse = function(incoming) {
    if (incoming) {
        if (_instanceof(incoming, APIError) && incoming.data) {
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
        if (!(_instanceof(incoming, APIError) || _instanceof(incoming, Error)) && incoming.errors) {
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
export default formatErrorResponse;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi4vLi4vZXJyb3JzL0FQSUVycm9yJztcblxuZXhwb3J0IHR5cGUgRXJyb3JSZXNwb25zZSA9IHsgZXJyb3JzOiB1bmtub3duW10sIGRhdGE/OiBhbnksIHN0YWNrPzogc3RyaW5nIH07XG5cbmNvbnN0IGZvcm1hdEVycm9yUmVzcG9uc2UgPSAoaW5jb21pbmc6IEVycm9yIHwgQVBJRXJyb3IgfCB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSk6IEVycm9yUmVzcG9uc2UgPT4ge1xuICBpZiAoaW5jb21pbmcpIHtcbiAgICBpZiAoaW5jb21pbmcgaW5zdGFuY2VvZiBBUElFcnJvciAmJiBpbmNvbWluZy5kYXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFt7XG4gICAgICAgICAgbmFtZTogaW5jb21pbmcubmFtZSxcbiAgICAgICAgICBtZXNzYWdlOiBpbmNvbWluZy5tZXNzYWdlLFxuICAgICAgICAgIGRhdGE6IGluY29taW5nLmRhdGEsXG4gICAgICAgIH1dLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBtb25nb29zZVxuICAgIGlmICghKGluY29taW5nIGluc3RhbmNlb2YgQVBJRXJyb3IgfHwgaW5jb21pbmcgaW5zdGFuY2VvZiBFcnJvcikgJiYgaW5jb21pbmcuZXJyb3JzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IE9iamVjdC5rZXlzKGluY29taW5nLmVycm9ycylcbiAgICAgICAgICAucmVkdWNlKChhY2MsIGtleSkgPT4ge1xuICAgICAgICAgICAgYWNjLnB1c2goe1xuICAgICAgICAgICAgICBmaWVsZDogaW5jb21pbmcuZXJyb3JzW2tleV0ucGF0aCxcbiAgICAgICAgICAgICAgbWVzc2FnZTogaW5jb21pbmcuZXJyb3JzW2tleV0ubWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGluY29taW5nLm1lc3NhZ2UpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IGluY29taW5nLm1lc3NhZ2UsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpbmNvbWluZy5uYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlOiBpbmNvbWluZy5tZXNzYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzOiBbXG4gICAgICB7XG4gICAgICAgIG1lc3NhZ2U6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLicsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRFcnJvclJlc3BvbnNlO1xuIl0sIm5hbWVzIjpbIkFQSUVycm9yIiwiZm9ybWF0RXJyb3JSZXNwb25zZSIsImluY29taW5nIiwiZGF0YSIsImVycm9ycyIsIm5hbWUiLCJtZXNzYWdlIiwiRXJyb3IiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwicHVzaCIsImZpZWxkIiwicGF0aCIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU9BLGNBQWMsd0JBQXdCO0FBSTdDLElBQU1DLHNCQUFzQixTQUFDQztJQUMzQixJQUFJQSxVQUFVO1FBQ1osSUFBSUEsQUFBUSxZQUFSQSxVQUFvQkYsYUFBWUUsU0FBU0MsSUFBSSxFQUFFO1lBQ2pELE9BQU87Z0JBQ0xDLFFBQVE7b0JBQUM7d0JBQ1BDLE1BQU1ILFNBQVNHLElBQUk7d0JBQ25CQyxTQUFTSixTQUFTSSxPQUFPO3dCQUN6QkgsTUFBTUQsU0FBU0MsSUFBSTtvQkFDckI7aUJBQUU7WUFDSjtRQUNGO1FBRUEsV0FBVztRQUNYLElBQUksQ0FBRUQsQ0FBQUEsQUFBUSxZQUFSQSxVQUFvQkYsYUFBWUUsQUFBUSxZQUFSQSxVQUFvQkssTUFBSSxLQUFNTCxTQUFTRSxNQUFNLEVBQUU7WUFDbkYsT0FBTztnQkFDTEEsUUFBUUksT0FBT0MsSUFBSSxDQUFDUCxTQUFTRSxNQUFNLEVBQ2hDTSxNQUFNLENBQUMsU0FBQ0MsS0FBS0M7b0JBQ1pELElBQUlFLElBQUksQ0FBQzt3QkFDUEMsT0FBT1osU0FBU0UsTUFBTSxDQUFDUSxJQUFJLENBQUNHLElBQUk7d0JBQ2hDVCxTQUFTSixTQUFTRSxNQUFNLENBQUNRLElBQUksQ0FBQ04sT0FBTztvQkFDdkM7b0JBQ0EsT0FBT0s7Z0JBQ1QsR0FBRyxFQUFFO1lBQ1Q7UUFDRjtRQUVBLElBQUlLLE1BQU1DLE9BQU8sQ0FBQ2YsU0FBU0ksT0FBTyxHQUFHO1lBQ25DLE9BQU87Z0JBQ0xGLFFBQVFGLFNBQVNJLE9BQU87WUFDMUI7UUFDRjtRQUVBLElBQUlKLFNBQVNHLElBQUksRUFBRTtZQUNqQixPQUFPO2dCQUNMRCxRQUFRO29CQUNOO3dCQUNFRSxTQUFTSixTQUFTSSxPQUFPO29CQUMzQjtpQkFDRDtZQUNIO1FBQ0Y7SUFDRjtJQUVBLE9BQU87UUFDTEYsUUFBUTtZQUNOO2dCQUNFRSxTQUFTO1lBQ1g7U0FDRDtJQUNIO0FBQ0Y7QUFFQSxlQUFlTCxvQkFBb0IifQ==