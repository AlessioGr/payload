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
var _find = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/find"));
var _verifyEmail = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/verifyEmail"));
var _unlock = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/unlock"));
var _create = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/create"));
var _init = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/init"));
var _login = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/login"));
var _refresh = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/refresh"));
var _me = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/me"));
var _registerFirstUser = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/registerFirstUser"));
var _forgotPassword = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/forgotPassword"));
var _resetPassword = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/resetPassword"));
var _findVersions = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findVersions"));
var _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findVersionByID"));
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/restoreVersion"));
var _delete = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/delete"));
var _findByID = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findByID"));
var _update = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/update"));
var _updateByID = /*#__PURE__*/ _interop_require_wildcard(require("./requestHandlers/updateByID"));
var _logout = /*#__PURE__*/ _interop_require_default(require("../auth/requestHandlers/logout"));
var _docAccess = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/docAccess"));
var _deleteByID = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/deleteByID"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var buildEndpoints = function(collection) {
    if (!collection.endpoints) return [];
    var endpoints = _to_consumable_array(collection.endpoints);
    if (collection.auth) {
        if (!collection.auth.disableLocalStrategy) {
            if (collection.auth.verify) {
                endpoints.push({
                    path: "/verify/:token",
                    method: "post",
                    handler: _verifyEmail.default
                });
            }
            if (collection.auth.maxLoginAttempts > 0) {
                endpoints.push({
                    path: "/unlock",
                    method: "post",
                    handler: _unlock.default
                });
            }
            endpoints.push({
                path: "/login",
                method: "post",
                handler: _login.default
            }, {
                path: "/first-register",
                method: "post",
                handler: _registerFirstUser.default
            }, {
                path: "/forgot-password",
                method: "post",
                handler: _forgotPassword.default
            }, {
                path: "/reset-password",
                method: "post",
                handler: _resetPassword.default
            });
        }
        endpoints.push({
            path: "/init",
            method: "get",
            handler: _init.default
        }, {
            path: "/me",
            method: "get",
            handler: _me.default
        }, {
            path: "/logout",
            method: "post",
            handler: _logout.default
        }, {
            path: "/refresh-token",
            method: "post",
            handler: _refresh.default
        });
    }
    if (collection.versions) {
        endpoints.push({
            path: "/versions",
            method: "get",
            handler: _findVersions.default
        }, {
            path: "/versions/:id",
            method: "get",
            handler: _findVersionByID.default
        }, {
            path: "/versions/:id",
            method: "post",
            handler: _restoreVersion.default
        });
    }
    endpoints.push({
        path: "/",
        method: "get",
        handler: _find.default
    }, {
        path: "/",
        method: "post",
        handler: _create.default
    }, {
        path: "/access/:id",
        method: "get",
        handler: _docAccess.default
    }, {
        path: "/:id",
        method: "put",
        handler: _updateByID.deprecatedUpdate
    }, {
        path: "/",
        method: "patch",
        handler: _update.default
    }, {
        path: "/:id",
        method: "patch",
        handler: _updateByID.default
    }, {
        path: "/:id",
        method: "get",
        handler: _findByID.default
    }, {
        path: "/:id",
        method: "delete",
        handler: _deleteByID.default
    }, {
        path: "/",
        method: "delete",
        handler: _delete.default
    });
    return endpoints;
};
var _default = buildEndpoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9idWlsZEVuZHBvaW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZpbmQgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZCc7XG5pbXBvcnQgdmVyaWZ5RW1haWwgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvdmVyaWZ5RW1haWwnO1xuaW1wb3J0IHVubG9jayBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy91bmxvY2snO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9jcmVhdGUnO1xuaW1wb3J0IGluaXRIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL2luaXQnO1xuaW1wb3J0IGxvZ2luSGFuZGxlciBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy9sb2dpbic7XG5pbXBvcnQgcmVmcmVzaEhhbmRsZXIgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvcmVmcmVzaCc7XG5pbXBvcnQgbWVIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL21lJztcbmltcG9ydCByZWdpc3RlckZpcnN0VXNlckhhbmRsZXIgZnJvbSAnLi4vYXV0aC9yZXF1ZXN0SGFuZGxlcnMvcmVnaXN0ZXJGaXJzdFVzZXInO1xuaW1wb3J0IGZvcmdvdFBhc3N3b3JkSGFuZGxlciBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy9mb3Jnb3RQYXNzd29yZCc7XG5pbXBvcnQgcmVzZXRQYXNzd29yZCBmcm9tICcuLi9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZXNldFBhc3N3b3JkJztcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25zJztcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9yZXN0b3JlVmVyc2lvbic7XG5pbXBvcnQgZGVsZXRlSGFuZGxlciBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9kZWxldGUnO1xuaW1wb3J0IGZpbmRCeUlEIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2ZpbmRCeUlEJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlJztcbmltcG9ydCB1cGRhdGVCeUlELCB7IGRlcHJlY2F0ZWRVcGRhdGUgfSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy91cGRhdGVCeUlEJztcbmltcG9ydCBsb2dvdXRIYW5kbGVyIGZyb20gJy4uL2F1dGgvcmVxdWVzdEhhbmRsZXJzL2xvZ291dCc7XG5pbXBvcnQgZG9jQWNjZXNzUmVxdWVzdEhhbmRsZXIgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZG9jQWNjZXNzJztcbmltcG9ydCBkZWxldGVCeUlEIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2RlbGV0ZUJ5SUQnO1xuXG5jb25zdCBidWlsZEVuZHBvaW50cyA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKTogRW5kcG9pbnRbXSA9PiB7XG4gIGlmICghY29sbGVjdGlvbi5lbmRwb2ludHMpIHJldHVybiBbXTtcbiAgY29uc3QgZW5kcG9pbnRzID0gWy4uLmNvbGxlY3Rpb24uZW5kcG9pbnRzXTtcblxuICBpZiAoY29sbGVjdGlvbi5hdXRoKSB7XG4gICAgaWYgKCFjb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kpIHtcbiAgICAgIGlmIChjb2xsZWN0aW9uLmF1dGgudmVyaWZ5KSB7XG4gICAgICAgIGVuZHBvaW50cy5wdXNoKHtcbiAgICAgICAgICBwYXRoOiAnL3ZlcmlmeS86dG9rZW4nLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGhhbmRsZXI6IHZlcmlmeUVtYWlsLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxlY3Rpb24uYXV0aC5tYXhMb2dpbkF0dGVtcHRzID4gMCkge1xuICAgICAgICBlbmRwb2ludHMucHVzaCh7XG4gICAgICAgICAgcGF0aDogJy91bmxvY2snLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGhhbmRsZXI6IHVubG9jayxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGVuZHBvaW50cy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJy9sb2dpbicsXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgaGFuZGxlcjogbG9naW5IYW5kbGVyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJy9maXJzdC1yZWdpc3RlcicsXG4gICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgaGFuZGxlcjogcmVnaXN0ZXJGaXJzdFVzZXJIYW5kbGVyLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogJy9mb3Jnb3QtcGFzc3dvcmQnLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGhhbmRsZXI6IGZvcmdvdFBhc3N3b3JkSGFuZGxlcixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICcvcmVzZXQtcGFzc3dvcmQnLFxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgIGhhbmRsZXI6IHJlc2V0UGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH1cblxuICAgIGVuZHBvaW50cy5wdXNoKFxuICAgICAge1xuICAgICAgICBwYXRoOiAnL2luaXQnLFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoYW5kbGVyOiBpbml0SGFuZGxlcixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvbWUnLFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoYW5kbGVyOiBtZUhhbmRsZXIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnL2xvZ291dCcsXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBoYW5kbGVyOiBsb2dvdXRIYW5kbGVyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy9yZWZyZXNoLXRva2VuJyxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhhbmRsZXI6IHJlZnJlc2hIYW5kbGVyLFxuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgaWYgKGNvbGxlY3Rpb24udmVyc2lvbnMpIHtcbiAgICBlbmRwb2ludHMucHVzaChcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucycsXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIGhhbmRsZXI6IGZpbmRWZXJzaW9ucyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvdmVyc2lvbnMvOmlkJyxcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgaGFuZGxlcjogZmluZFZlcnNpb25CeUlELFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucy86aWQnLFxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgaGFuZGxlcjogcmVzdG9yZVZlcnNpb24sXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBlbmRwb2ludHMucHVzaChcbiAgICB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgaGFuZGxlcjogZmluZCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgaGFuZGxlcjogY3JlYXRlLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy9hY2Nlc3MvOmlkJyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBoYW5kbGVyOiBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvOmlkJyxcbiAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICBoYW5kbGVyOiBkZXByZWNhdGVkVXBkYXRlLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgaGFuZGxlcjogdXBkYXRlLFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy86aWQnLFxuICAgICAgbWV0aG9kOiAncGF0Y2gnLFxuICAgICAgaGFuZGxlcjogdXBkYXRlQnlJRCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvOmlkJyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBoYW5kbGVyOiBmaW5kQnlJRCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvOmlkJyxcbiAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICBoYW5kbGVyOiBkZWxldGVCeUlELFxuICAgIH0sXG4gICAge1xuICAgICAgcGF0aDogJy8nLFxuICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgIGhhbmRsZXI6IGRlbGV0ZUhhbmRsZXIsXG4gICAgfSxcbiAgKTtcblxuICByZXR1cm4gZW5kcG9pbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRFbmRwb2ludHM7XG4iXSwibmFtZXMiOlsiYnVpbGRFbmRwb2ludHMiLCJjb2xsZWN0aW9uIiwiZW5kcG9pbnRzIiwiYXV0aCIsImRpc2FibGVMb2NhbFN0cmF0ZWd5IiwidmVyaWZ5IiwicHVzaCIsInBhdGgiLCJtZXRob2QiLCJoYW5kbGVyIiwidmVyaWZ5RW1haWwiLCJtYXhMb2dpbkF0dGVtcHRzIiwidW5sb2NrIiwibG9naW5IYW5kbGVyIiwicmVnaXN0ZXJGaXJzdFVzZXJIYW5kbGVyIiwiZm9yZ290UGFzc3dvcmRIYW5kbGVyIiwicmVzZXRQYXNzd29yZCIsImluaXRIYW5kbGVyIiwibWVIYW5kbGVyIiwibG9nb3V0SGFuZGxlciIsInJlZnJlc2hIYW5kbGVyIiwidmVyc2lvbnMiLCJmaW5kVmVyc2lvbnMiLCJmaW5kVmVyc2lvbkJ5SUQiLCJyZXN0b3JlVmVyc2lvbiIsImZpbmQiLCJjcmVhdGUiLCJkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlciIsImRlcHJlY2F0ZWRVcGRhdGUiLCJ1cGRhdGUiLCJ1cGRhdGVCeUlEIiwiZmluZEJ5SUQiLCJkZWxldGVCeUlEIiwiZGVsZXRlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxS0E7OztlQUFBOzs7MkRBbktpQjtrRUFDTzs2REFDTDs2REFDQTsyREFDSzs0REFDQzs4REFDRTt5REFDTDt3RUFDZTtxRUFDSDtvRUFDUjttRUFDRDtzRUFDRztxRUFDRDs2REFDRDsrREFDTDs2REFDRjtrRUFDMEI7NkRBQ25CO2dFQUNVO2lFQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCLElBQU1BLGlCQUFpQixTQUFDQztJQUN0QixJQUFJLENBQUNBLFdBQVdDLFNBQVMsRUFBRSxPQUFPLEVBQUU7SUFDcEMsSUFBTUEsWUFBYSxxQkFBR0QsV0FBV0MsU0FBUztJQUUxQyxJQUFJRCxXQUFXRSxJQUFJLEVBQUU7UUFDbkIsSUFBSSxDQUFDRixXQUFXRSxJQUFJLENBQUNDLG9CQUFvQixFQUFFO1lBQ3pDLElBQUlILFdBQVdFLElBQUksQ0FBQ0UsTUFBTSxFQUFFO2dCQUMxQkgsVUFBVUksSUFBSSxDQUFDO29CQUNiQyxNQUFNO29CQUNOQyxRQUFRO29CQUNSQyxTQUFTQyxvQkFBVztnQkFDdEI7WUFDRjtZQUVBLElBQUlULFdBQVdFLElBQUksQ0FBQ1EsZ0JBQWdCLEdBQUcsR0FBRztnQkFDeENULFVBQVVJLElBQUksQ0FBQztvQkFDYkMsTUFBTTtvQkFDTkMsUUFBUTtvQkFDUkMsU0FBU0csZUFBTTtnQkFDakI7WUFDRjtZQUVBVixVQUFVSSxJQUFJLENBQ1o7Z0JBQ0VDLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLFNBQVNJLGNBQVk7WUFDdkIsR0FDQTtnQkFDRU4sTUFBTTtnQkFDTkMsUUFBUTtnQkFDUkMsU0FBU0ssMEJBQXdCO1lBQ25DLEdBQ0E7Z0JBQ0VQLE1BQU07Z0JBQ05DLFFBQVE7Z0JBQ1JDLFNBQVNNLHVCQUFxQjtZQUNoQyxHQUNBO2dCQUNFUixNQUFNO2dCQUNOQyxRQUFRO2dCQUNSQyxTQUFTTyxzQkFBYTtZQUN4QjtRQUVKO1FBRUFkLFVBQVVJLElBQUksQ0FDWjtZQUNFQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsU0FBU1EsYUFBVztRQUN0QixHQUNBO1lBQ0VWLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxTQUFTUyxXQUFTO1FBQ3BCLEdBQ0E7WUFDRVgsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFNBQVNVLGVBQWE7UUFDeEIsR0FDQTtZQUNFWixNQUFNO1lBQ05DLFFBQVE7WUFDUkMsU0FBU1csZ0JBQWM7UUFDekI7SUFFSjtJQUVBLElBQUluQixXQUFXb0IsUUFBUSxFQUFFO1FBQ3ZCbkIsVUFBVUksSUFBSSxDQUNaO1lBQ0VDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxTQUFTYSxxQkFBWTtRQUN2QixHQUNBO1lBQ0VmLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxTQUFTYyx3QkFBZTtRQUMxQixHQUNBO1lBQ0VoQixNQUFNO1lBQ05DLFFBQVE7WUFDUkMsU0FBU2UsdUJBQWM7UUFDekI7SUFFSjtJQUVBdEIsVUFBVUksSUFBSSxDQUNaO1FBQ0VDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTZ0IsYUFBSTtJQUNmLEdBQ0E7UUFDRWxCLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTaUIsZUFBTTtJQUNqQixHQUNBO1FBQ0VuQixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsU0FBU2tCLGtCQUF1QjtJQUNsQyxHQUNBO1FBQ0VwQixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsU0FBU21CLDRCQUFnQjtJQUMzQixHQUNBO1FBQ0VyQixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsU0FBU29CLGVBQU07SUFDakIsR0FDQTtRQUNFdEIsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFNBQVNxQixtQkFBVTtJQUNyQixHQUNBO1FBQ0V2QixNQUFNO1FBQ05DLFFBQVE7UUFDUkMsU0FBU3NCLGlCQUFRO0lBQ25CLEdBQ0E7UUFDRXhCLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTdUIsbUJBQVU7SUFDckIsR0FDQTtRQUNFekIsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLFNBQVN3QixlQUFhO0lBQ3hCO0lBR0YsT0FBTy9CO0FBQ1Q7SUFFQSxXQUFlRiJ9