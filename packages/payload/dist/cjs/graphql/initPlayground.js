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
var _graphqlplaygroundmiddlewareexpress = /*#__PURE__*/ _interop_require_default(require("graphql-playground-middleware-express"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initPlayground(ctx) {
    if (!ctx.config.graphQL.disable && !ctx.config.graphQL.disablePlaygroundInProduction && process.env.NODE_ENV === "production" || process.env.NODE_ENV !== "production") {
        // @ts-ignore
        ctx.router.get(ctx.config.routes.graphQLPlayground, (_graphqlplaygroundmiddlewareexpress.default.default || _graphqlplaygroundmiddlewareexpress.default)({
            endpoint: "".concat(ctx.config.routes.api).concat(ctx.config.routes.graphQL),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore ISettings interface has all properties required for some reason
            settings: {
                "request.credentials": "include"
            }
        }));
    }
}
var _default = initPlayground;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL2luaXRQbGF5Z3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncmFwaFFMUGxheWdyb3VuZCBmcm9tICdncmFwaHFsLXBsYXlncm91bmQtbWlkZGxld2FyZS1leHByZXNzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcblxuZnVuY3Rpb24gaW5pdFBsYXlncm91bmQoY3R4OiBQYXlsb2FkKTogdm9pZCB7XG4gIGlmICgoIWN0eC5jb25maWcuZ3JhcGhRTC5kaXNhYmxlICYmICFjdHguY29uZmlnLmdyYXBoUUwuZGlzYWJsZVBsYXlncm91bmRJblByb2R1Y3Rpb24gJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjdHgucm91dGVyLmdldChjdHguY29uZmlnLnJvdXRlcy5ncmFwaFFMUGxheWdyb3VuZCwgKGdyYXBoUUxQbGF5Z3JvdW5kLmRlZmF1bHQgfHwgZ3JhcGhRTFBsYXlncm91bmQpKHtcbiAgICAgIGVuZHBvaW50OiBgJHtjdHguY29uZmlnLnJvdXRlcy5hcGl9JHtjdHguY29uZmlnLnJvdXRlcy5ncmFwaFFMfWAsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlIElTZXR0aW5ncyBpbnRlcmZhY2UgaGFzIGFsbCBwcm9wZXJ0aWVzIHJlcXVpcmVkIGZvciBzb21lIHJlYXNvblxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgJ3JlcXVlc3QuY3JlZGVudGlhbHMnOiAnaW5jbHVkZScsXG4gICAgICB9LFxuICAgIH0pKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0UGxheWdyb3VuZDtcbiJdLCJuYW1lcyI6WyJpbml0UGxheWdyb3VuZCIsImN0eCIsImNvbmZpZyIsImdyYXBoUUwiLCJkaXNhYmxlIiwiZGlzYWJsZVBsYXlncm91bmRJblByb2R1Y3Rpb24iLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJyb3V0ZXIiLCJnZXQiLCJyb3V0ZXMiLCJncmFwaFFMUGxheWdyb3VuZCIsImRlZmF1bHQiLCJlbmRwb2ludCIsImFwaSIsInNldHRpbmdzIl0sIm1hcHBpbmdzIjoiOzs7OytCQWlCQTs7O2VBQUE7Ozt5RkFqQjhCOzs7Ozs7QUFHOUIsU0FBU0EsZUFBZUMsR0FBWTtJQUNsQyxJQUFJLEFBQUMsQ0FBQ0EsSUFBSUMsTUFBTSxDQUFDQyxPQUFPLENBQUNDLE9BQU8sSUFBSSxDQUFDSCxJQUFJQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0UsNkJBQTZCLElBQUlDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLGdCQUFpQkYsUUFBUUMsR0FBRyxDQUFDQyxRQUFRLEtBQUssY0FBYztRQUN4SyxhQUFhO1FBQ2JQLElBQUlRLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDVCxJQUFJQyxNQUFNLENBQUNTLE1BQU0sQ0FBQ0MsaUJBQWlCLEVBQUUsQUFBQ0EsQ0FBQUEsMkNBQWlCLENBQUNDLE9BQU8sSUFBSUQsMkNBQWlCLEFBQUQsRUFBRztZQUNuR0UsVUFBVSxBQUFDLEdBQTBCYixPQUF4QkEsSUFBSUMsTUFBTSxDQUFDUyxNQUFNLENBQUNJLEdBQUcsRUFBNkIsT0FBMUJkLElBQUlDLE1BQU0sQ0FBQ1MsTUFBTSxDQUFDUixPQUFPO1lBQzlELDZEQUE2RDtZQUM3RCw2RUFBNkU7WUFDN0VhLFVBQVU7Z0JBQ1IsdUJBQXVCO1lBQ3pCO1FBQ0Y7SUFDRjtBQUNGO0lBRUEsV0FBZWhCIn0=