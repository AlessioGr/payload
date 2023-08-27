import ObjectID from "bson-objectid";
var generateID = function(param) {
    var value = param.value;
    return value || new ObjectID().toHexString();
};
export var baseIDField = {
    name: "id",
    label: "ID",
    type: "text",
    hooks: {
        beforeChange: [
            generateID
        ]
    },
    admin: {
        disabled: true
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvYmFzZUZpZWxkcy9iYXNlSURGaWVsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2JqZWN0SUQgZnJvbSAnYnNvbi1vYmplY3RpZCc7XG5pbXBvcnQgeyBGaWVsZCwgRmllbGRIb29rIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcblxuY29uc3QgZ2VuZXJhdGVJRDogRmllbGRIb29rID0gKHsgdmFsdWUgfSkgPT4gKHZhbHVlIHx8IG5ldyBPYmplY3RJRCgpLnRvSGV4U3RyaW5nKCkpO1xuXG5leHBvcnQgY29uc3QgYmFzZUlERmllbGQ6IEZpZWxkID0ge1xuICBuYW1lOiAnaWQnLFxuICBsYWJlbDogJ0lEJyxcbiAgdHlwZTogJ3RleHQnLFxuICBob29rczoge1xuICAgIGJlZm9yZUNoYW5nZTogW1xuICAgICAgZ2VuZXJhdGVJRCxcbiAgICBdLFxuICB9LFxuICBhZG1pbjoge1xuICAgIGRpc2FibGVkOiB0cnVlLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJPYmplY3RJRCIsImdlbmVyYXRlSUQiLCJ2YWx1ZSIsInRvSGV4U3RyaW5nIiwiYmFzZUlERmllbGQiLCJuYW1lIiwibGFiZWwiLCJ0eXBlIiwiaG9va3MiLCJiZWZvcmVDaGFuZ2UiLCJhZG1pbiIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxjQUFjLGdCQUFnQjtBQUdyQyxJQUFNQyxhQUF3QjtRQUFHQyxjQUFBQTtXQUFhQSxTQUFTLElBQUlGLFdBQVdHLFdBQVc7O0FBRWpGLE9BQU8sSUFBTUMsY0FBcUI7SUFDaENDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxNQUFNO0lBQ05DLE9BQU87UUFDTEMsY0FBYztZQUNaUjtTQUNEO0lBQ0g7SUFDQVMsT0FBTztRQUNMQyxVQUFVO0lBQ1o7QUFDRixFQUFFIn0=