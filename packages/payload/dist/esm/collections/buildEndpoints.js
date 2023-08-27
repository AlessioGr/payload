function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import find from "./requestHandlers/find";
import verifyEmail from "../auth/requestHandlers/verifyEmail";
import unlock from "../auth/requestHandlers/unlock";
import create from "./requestHandlers/create";
import initHandler from "../auth/requestHandlers/init";
import loginHandler from "../auth/requestHandlers/login";
import refreshHandler from "../auth/requestHandlers/refresh";
import meHandler from "../auth/requestHandlers/me";
import registerFirstUserHandler from "../auth/requestHandlers/registerFirstUser";
import forgotPasswordHandler from "../auth/requestHandlers/forgotPassword";
import resetPassword from "../auth/requestHandlers/resetPassword";
import findVersions from "./requestHandlers/findVersions";
import findVersionByID from "./requestHandlers/findVersionByID";
import restoreVersion from "./requestHandlers/restoreVersion";
import deleteHandler from "./requestHandlers/delete";
import findByID from "./requestHandlers/findByID";
import update from "./requestHandlers/update";
import updateByID, { deprecatedUpdate } from "./requestHandlers/updateByID";
import logoutHandler from "../auth/requestHandlers/logout";
import docAccessRequestHandler from "./requestHandlers/docAccess";
import deleteByID from "./requestHandlers/deleteByID";
var buildEndpoints = function(collection) {
    if (!collection.endpoints) return [];
    var endpoints = _to_consumable_array(collection.endpoints);
    if (collection.auth) {
        if (!collection.auth.disableLocalStrategy) {
            if (collection.auth.verify) {
                endpoints.push({
                    path: "/verify/:token",
                    method: "post",
                    handler: verifyEmail
                });
            }
            if (collection.auth.maxLoginAttempts > 0) {
                endpoints.push({
                    path: "/unlock",
                    method: "post",
                    handler: unlock
                });
            }
            endpoints.push({
                path: "/login",
                method: "post",
                handler: loginHandler
            }, {
                path: "/first-register",
                method: "post",
                handler: registerFirstUserHandler
            }, {
                path: "/forgot-password",
                method: "post",
                handler: forgotPasswordHandler
            }, {
                path: "/reset-password",
                method: "post",
                handler: resetPassword
            });
        }
        endpoints.push({
            path: "/init",
            method: "get",
            handler: initHandler
        }, {
            path: "/me",
            method: "get",
            handler: meHandler
        }, {
            path: "/logout",
            method: "post",
            handler: logoutHandler
        }, {
            path: "/refresh-token",
            method: "post",
            handler: refreshHandler
        });
    }
    if (collection.versions) {
        endpoints.push({
            path: "/versions",
            method: "get",
            handler: findVersions
        }, {
            path: "/versions/:id",
            method: "get",
            handler: findVersionByID
        }, {
            path: "/versions/:id",
            method: "post",
            handler: restoreVersion
        });
    }
    endpoints.push({
        path: "/",
        method: "get",
        handler: find
    }, {
        path: "/",
        method: "post",
        handler: create
    }, {
        path: "/access/:id",
        method: "get",
        handler: docAccessRequestHandler
    }, {
        path: "/:id",
        method: "put",
        handler: deprecatedUpdate
    }, {
        path: "/",
        method: "patch",
        handler: update
    }, {
        path: "/:id",
        method: "patch",
        handler: updateByID
    }, {
        path: "/:id",
        method: "get",
        handler: findByID
    }, {
        path: "/:id",
        method: "delete",
        handler: deleteByID
    }, {
        path: "/",
        method: "delete",
        handler: deleteHandler
    });
    return endpoints;
};
export default buildEndpoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9idWlsZEVuZHBvaW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZCc7XG5pbXBvcnQgdmVyaWZ5RW1haWwgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvdmVyaWZ5RW1haWwnO1xuaW1wb3J0IHVubG9jayBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy91bmxvY2snO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9jcmVhdGUnO1xuaW1wb3J0IGluaXRIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL2luaXQnO1xuaW1wb3J0IGxvZ2luSGFuZGxlciBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy9sb2dpbic7XG5pbXBvcnQgcmVmcmVzaEhhbmRsZXIgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvcmVmcmVzaCc7XG5pbXBvcnQgbWVIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL21lJztcbmltcG9ydCByZWdpc3RlckZpcnN0VXNlckhhbmRsZXIgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvcmVnaXN0ZXJGaXJzdFVzZXInO1xuaW1wb3J0IGZvcmdvdFBhc3N3b3JkSGFuZGxlciBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy9mb3Jnb3RQYXNzd29yZCc7XG5pbXBvcnQgcmVzZXRQYXNzd29yZCBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZXNldFBhc3N3b3JkJztcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25zJztcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9yZXN0b3JlVmVyc2lvbic7XG5pbXBvcnQgZGVsZXRlSGFuZGxlciBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9kZWxldGUnO1xuaW1wb3J0IGZpbmRCeUlEIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2ZpbmRCeUlEJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlJztcbmltcG9ydCB1cGRhdGVCeUlELCB7IGRlcHJlY2F0ZWRVcGRhdGUgfSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy91cGRhdGVCeUlEJztcbmltcG9ydCBsb2dvdXRIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL2xvZ291dCc7XG5pbXBvcnQgZG9jQWNjZXNzUmVxdWVzdEhhbmRsZXIgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZG9jQWNjZXNzJztcbmltcG9ydCBkZWxldGVCeUlEIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2RlbGV0ZUJ5SUQnO1xuXG5jb25zdCBidWlsZEVuZHBvaW50cyA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKTogRW5kcG9pbnRbXSA9PiB7XG4gIGlmICghY29sbGVjdGlvbi5lbmRwb2ludHMpIHJldHVybiBbXTtcbiAgY29uc3QgZW5kcG9pbnRzID0gWy4uLmNvbGxlY3Rpb24uZW5kcG9pbnRzXTtcblxuICBpZiAoY29sbGVjdGlvbi5hdXRoKSB7XG4gICAgaWYgKCFjb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kpIHtcbiAgICAgIGlmIChjb2xsZWN0aW9uLmF1dGgudmVyaWZ5KSB7XG4gICAgICAgIGVuZHBvaW50cy5wdXNoKHtcbiAgICAgICAgICBwYXRoOiAnL3ZlcmlmeS86dG9rZW4nLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGhhbmRsZXI6IHZlcmlmeUVtYWlsLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxlY3Rpb24uYXV0aC5tYXhMb2dpbkF0dGVtcHRzID4gMCkge1xuICAgICAgICBlbmRwb2ludHMucHVzaCh7XG4gICAgICAgICAgcGF0aDogJy91bmxvY2snLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGhhbmRsZXI6IHVubG9jayxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGVuZHBvaW50cy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgaGFuZGxlcjogbG9naW5IYW5kbGVyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJy9maXJzdC1yZWdpc3RlcicsXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgaGFuZGxlcjogcmVnaXN0ZXJGaXJzdFVzZXJIYW5kbGVyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJy9mb3Jnb3QtcGFzc3dvcmQnLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGhhbmRsZXI6IGZvcmdvdFBhc3N3b3JkSGFuZGxlcixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICcvcmVzZXQtcGFzc3dvcmQnLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGhhbmRsZXI6IHJlc2V0UGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH1cblxuICAgIGVuZHBvaW50cy5wdXNoKFxuICAgICAge1xuICAgICAgICBwYXRoOiAnL2luaXQnLFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoYW5kbGVyOiBpbml0SGFuZGxlcixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvbWUnLFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoYW5kbGVyOiBtZUhhbmRsZXIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnL2xvZ291dCcsXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoYW5kbGVyOiBsb2dvdXRIYW5kbGVyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy9yZWZyZXNoLXRva2VuJyxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhhbmRsZXI6IHJlZnJlc2hIYW5kbGVyLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgaWYgKGNvbGxlY3Rpb24udmVyc2lvbnMpIHtcbiAgICBlbmRwb2ludHMucHVzaChcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucycsXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIGhhbmRsZXI6IGZpbmRWZXJzaW9ucyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvdmVyc2lvbnMvOmlkJyxcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgaGFuZGxlcjogZmluZFZlcnNpb25CeUlELFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucy86aWQnLFxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgaGFuZGxlcjogcmVzdG9yZVZlcnNpb24sXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBlbmRwb2ludHMucHVzaChcbiAgICB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgaGFuZGxlcjogZmluZCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGFuZGxlcjogY3JlYXRlLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9hY2Nlc3MvOmlkJyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBoYW5kbGVyOiBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvOmlkJyxcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICBoYW5kbGVyOiBkZXByZWNhdGVkVXBkYXRlLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgaGFuZGxlcjogdXBkYXRlLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy86aWQnLFxuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgaGFuZGxlcjogdXBkYXRlQnlJRCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvOmlkJyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBoYW5kbGVyOiBmaW5kQnlJRCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvOmlkJyxcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICBoYW5kbGVyOiBkZWxldGVCeUlELFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgIGhhbmRsZXI6IGRlbGV0ZUhhbmRsZXIsXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gZW5kcG9pbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRFbmRwb2ludHM7XG4iXSwibmFtZXMiOlsiZmluZCIsInZlcmlmeUVtYWlsIiwidW5sb2NrIiwiY3JlYXRlIiwiaW5pdEhhbmRsZXIiLCJsb2dpbkhhbmRsZXIiLCJyZWZyZXNoSGFuZGxlciIsIm1lSGFuZGxlciIsInJlZ2lzdGVyRmlyc3RVc2VySGFuZGxlciIsImZvcmdvdFBhc3N3b3JkSGFuZGxlciIsInJlc2V0UGFzc3dvcmQiLCJmaW5kVmVyc2lvbnMiLCJmaW5kVmVyc2lvbkJ5SUQiLCJyZXN0b3JlVmVyc2lvbiIsImRlbGV0ZUhhbmRsZXIiLCJmaW5kQnlJRCIsInVwZGF0ZSIsInVwZGF0ZUJ5SUQiLCJkZXByZWNhdGVkVXBkYXRlIiwibG9nb3V0SGFuZGxlciIsImRvY0FjY2Vzc1JlcXVlc3RIYW5kbGVyIiwiZGVsZXRlQnlJRCIsImJ1aWxkRW5kcG9pbnRzIiwiY29sbGVjdGlvbiIsImVuZHBvaW50cyIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsInZlcmlmeSIsInB1c2giLCJwYXRoIiwibWV0aG9kIiwiaGFuZGxlciIsIm1heExvZ2luQXR0ZW1wdHMiLCJ2ZXJzaW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU9BLFVBQVUseUJBQXlCO0FBQzFDLE9BQU9DLGlCQUFpQixzQ0FBc0M7QUFDOUQsT0FBT0MsWUFBWSxpQ0FBaUM7QUFDcEQsT0FBT0MsWUFBWSwyQkFBMkI7QUFDOUMsT0FBT0MsaUJBQWlCLCtCQUErQjtBQUN2RCxPQUFPQyxrQkFBa0IsZ0NBQWdDO0FBQ3pELE9BQU9DLG9CQUFvQixrQ0FBa0M7QUFDN0QsT0FBT0MsZUFBZSw2QkFBNkI7QUFDbkQsT0FBT0MsOEJBQThCLDRDQUE0QztBQUNqRixPQUFPQywyQkFBMkIseUNBQXlDO0FBQzNFLE9BQU9DLG1CQUFtQix3Q0FBd0M7QUFDbEUsT0FBT0Msa0JBQWtCLGlDQUFpQztBQUMxRCxPQUFPQyxxQkFBcUIsb0NBQW9DO0FBQ2hFLE9BQU9DLG9CQUFvQixtQ0FBbUM7QUFDOUQsT0FBT0MsbUJBQW1CLDJCQUEyQjtBQUNyRCxPQUFPQyxjQUFjLDZCQUE2QjtBQUNsRCxPQUFPQyxZQUFZLDJCQUEyQjtBQUM5QyxPQUFPQyxjQUFjQyxnQkFBZ0IsUUFBUSwrQkFBK0I7QUFDNUUsT0FBT0MsbUJBQW1CLGlDQUFpQztBQUMzRCxPQUFPQyw2QkFBNkIsOEJBQThCO0FBQ2xFLE9BQU9DLGdCQUFnQiwrQkFBK0I7QUFFdEQsSUFBTUMsaUJBQWlCLFNBQUNDO0lBQ3RCLElBQUksQ0FBQ0EsV0FBV0MsU0FBUyxFQUFFLE9BQU8sRUFBRTtJQUNwQyxJQUFNQSxZQUFhLHFCQUFHRCxXQUFXQyxTQUFTO0lBRTFDLElBQUlELFdBQVdFLElBQUksRUFBRTtRQUNuQixJQUFJLENBQUNGLFdBQVdFLElBQUksQ0FBQ0Msb0JBQW9CLEVBQUU7WUFDekMsSUFBSUgsV0FBV0UsSUFBSSxDQUFDRSxNQUFNLEVBQUU7Z0JBQzFCSCxVQUFVSSxJQUFJLENBQUM7b0JBQ2JDLE1BQU07b0JBQ05DLFFBQVE7b0JBQ1JDLFNBQVM5QjtnQkFDWDtZQUNGO1lBRUEsSUFBSXNCLFdBQVdFLElBQUksQ0FBQ08sZ0JBQWdCLEdBQUcsR0FBRztnQkFDeENSLFVBQVVJLElBQUksQ0FBQztvQkFDYkMsTUFBTTtvQkFDTkMsUUFBUTtvQkFDUkMsU0FBUzdCO2dCQUNYO1lBQ0Y7WUFFQXNCLFVBQVVJLElBQUksQ0FDWjtnQkFDRUMsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsU0FBUzFCO1lBQ1gsR0FDQTtnQkFDRXdCLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLFNBQVN2QjtZQUNYLEdBQ0E7Z0JBQ0VxQixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxTQUFTdEI7WUFDWCxHQUNBO2dCQUNFb0IsTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsU0FBU3JCO1lBQ1g7UUFFSjtRQUVBYyxVQUFVSSxJQUFJLENBQ1o7WUFDRUMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFNBQVMzQjtRQUNYLEdBQ0E7WUFDRXlCLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxTQUFTeEI7UUFDWCxHQUNBO1lBQ0VzQixNQUFNO1lBQ05DLFFBQVE7WUFDUkMsU0FBU1o7UUFDWCxHQUNBO1lBQ0VVLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxTQUFTekI7UUFDWDtJQUVKO0lBRUEsSUFBSWlCLFdBQVdVLFFBQVEsRUFBRTtRQUN2QlQsVUFBVUksSUFBSSxDQUNaO1lBQ0VDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxTQUFTcEI7UUFDWCxHQUNBO1lBQ0VrQixNQUFNO1lBQ05DLFFBQVE7WUFDUkMsU0FBU25CO1FBQ1gsR0FDQTtZQUNFaUIsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFNBQVNsQjtRQUNYO0lBRUo7SUFFQVcsVUFBVUksSUFBSSxDQUNaO1FBQ0VDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTL0I7SUFDWCxHQUNBO1FBQ0U2QixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsU0FBUzVCO0lBQ1gsR0FDQTtRQUNFMEIsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFNBQVNYO0lBQ1gsR0FDQTtRQUNFUyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsU0FBU2I7SUFDWCxHQUNBO1FBQ0VXLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTZjtJQUNYLEdBQ0E7UUFDRWEsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFNBQVNkO0lBQ1gsR0FDQTtRQUNFWSxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsU0FBU2hCO0lBQ1gsR0FDQTtRQUNFYyxNQUFNO1FBQ05DLFFBQVE7UUFDUkMsU0FBU1Y7SUFDWCxHQUNBO1FBQ0VRLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTakI7SUFDWDtJQUdGLE9BQU9VO0FBQ1Q7QUFFQSxlQUFlRixlQUFlIn0=