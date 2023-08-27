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
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _errors = require("../../errors");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function logout(incomingArgs) {
    return _logout.apply(this, arguments);
}
function _logout() {
    _logout = _async_to_generator(function(incomingArgs) {
        var args, res, _incomingArgs_req, config, user, req, _incomingArgs_collection, collectionConfig, collection, cookieOptions;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    args = incomingArgs;
                    res = incomingArgs.res, _incomingArgs_req = incomingArgs.req, config = _incomingArgs_req.payload.config, user = _incomingArgs_req.user, req = incomingArgs.req, _incomingArgs_collection = incomingArgs.collection, collectionConfig = _incomingArgs_collection.config, collection = incomingArgs.collection;
                    if (!user) throw new _errors.APIError("No User", _httpstatus.default.BAD_REQUEST);
                    if (user.collection !== collectionConfig.slug) throw new _errors.APIError("Incorrect collection", _httpstatus.default.FORBIDDEN);
                    cookieOptions = {
                        path: "/",
                        httpOnly: true,
                        secure: collectionConfig.auth.cookies.secure,
                        sameSite: collectionConfig.auth.cookies.sameSite,
                        domain: undefined
                    };
                    if (collectionConfig.auth.cookies.domain) cookieOptions.domain = collectionConfig.auth.cookies.domain;
                    return [
                        4,
                        collection.config.hooks.afterLogout.reduce(function() {
                            var _ref = _async_to_generator(function(priorHook, hook) {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                priorHook
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                4,
                                                hook({
                                                    req: req,
                                                    res: res,
                                                    context: req.context
                                                })
                                            ];
                                        case 2:
                                            args = _state.sent() || args;
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(priorHook, hook) {
                                return _ref.apply(this, arguments);
                            };
                        }(), Promise.resolve())
                    ];
                case 1:
                    _state.sent();
                    res.clearCookie("".concat(config.cookiePrefix, "-token"), cookieOptions);
                    return [
                        2,
                        req.t("authentication:loggedOutSuccessfully")
                    ];
            }
        });
    });
    return _logout.apply(this, arguments);
}
var _default = logout;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9nb3V0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIEFyZ3VtZW50cyA9IHtcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICByZXM6IFJlc3BvbnNlXG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9nb3V0KGluY29taW5nQXJnczogQXJndW1lbnRzKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgbGV0IGFyZ3MgPSBpbmNvbWluZ0FyZ3M7XG4gIGNvbnN0IHtcbiAgICByZXMsXG4gICAgcmVxOiB7XG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH0sXG4gICAgICB1c2VyLFxuICAgIH0sXG4gICAgcmVxLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIGNvbGxlY3Rpb24sXG4gIH0gPSBpbmNvbWluZ0FyZ3M7XG5cbiAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgQVBJRXJyb3IoJ05vIFVzZXInLCBodHRwU3RhdHVzLkJBRF9SRVFVRVNUKTtcbiAgaWYgKHVzZXIuY29sbGVjdGlvbiAhPT0gY29sbGVjdGlvbkNvbmZpZy5zbHVnKSB0aHJvdyBuZXcgQVBJRXJyb3IoJ0luY29ycmVjdCBjb2xsZWN0aW9uJywgaHR0cFN0YXR1cy5GT1JCSURERU4pO1xuXG4gIGNvbnN0IGNvb2tpZU9wdGlvbnMgPSB7XG4gICAgcGF0aDogJy8nLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNlY3VyZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2VjdXJlLFxuICAgIHNhbWVTaXRlOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguY29va2llcy5zYW1lU2l0ZSxcbiAgICBkb21haW46IHVuZGVmaW5lZCxcbiAgfTtcblxuICBpZiAoY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluKSBjb29raWVPcHRpb25zLmRvbWFpbiA9IGNvbGxlY3Rpb25Db25maWcuYXV0aC5jb29raWVzLmRvbWFpbjtcblxuICBhd2FpdCBjb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5hZnRlckxvZ291dC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgIGFyZ3MgPSAoYXdhaXQgaG9vayh7XG4gICAgICByZXEsXG4gICAgICByZXMsXG4gICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICB9KSkgfHwgYXJncztcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gIHJlcy5jbGVhckNvb2tpZShgJHtjb25maWcuY29va2llUHJlZml4fS10b2tlbmAsIGNvb2tpZU9wdGlvbnMpO1xuXG4gIHJldHVybiByZXEudCgnYXV0aGVudGljYXRpb246bG9nZ2VkT3V0U3VjY2Vzc2Z1bGx5Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ291dDtcbiJdLCJuYW1lcyI6WyJsb2dvdXQiLCJpbmNvbWluZ0FyZ3MiLCJhcmdzIiwicmVzIiwiY29uZmlnIiwidXNlciIsInJlcSIsImNvbGxlY3Rpb25Db25maWciLCJjb2xsZWN0aW9uIiwiY29va2llT3B0aW9ucyIsInBheWxvYWQiLCJBUElFcnJvciIsImh0dHBTdGF0dXMiLCJCQURfUkVRVUVTVCIsInNsdWciLCJGT1JCSURERU4iLCJwYXRoIiwiaHR0cE9ubHkiLCJzZWN1cmUiLCJhdXRoIiwiY29va2llcyIsInNhbWVTaXRlIiwiZG9tYWluIiwidW5kZWZpbmVkIiwiaG9va3MiLCJhZnRlckxvZ291dCIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJjb250ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJjbGVhckNvb2tpZSIsImNvb2tpZVByZWZpeCIsInQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBeURBOzs7ZUFBQTs7O2lFQXpEdUI7c0JBR0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FTVkEsT0FBT0MsWUFBdUI7V0FBOUJEOztTQUFBQTtJQUFBQSxVQUFmLG9CQUFBLFNBQXNCQyxZQUF1QjtZQUN2Q0MsTUFFRkMsd0JBR0lDLFFBRUZDLE1BRUZDLCtCQUVVQyxrQkFFVkMsWUFNSUM7Ozs7b0JBbkJGUCxPQUFPRDtvQkFFVEUsTUFZRUYsYUFaRkUseUJBWUVGLGFBWEZLLEtBRUlGLDJCQURGTSxRQUNFTixRQUVGQyx5QkFBQUEsTUFFRkMsTUFLRUwsYUFMRkssZ0NBS0VMLGFBSkZPLFlBQ1VELDRDQUFSSCxRQUVGSSxhQUNFUCxhQURGTztvQkFHRixJQUFJLENBQUNILE1BQU0sTUFBTSxJQUFJTSxnQkFBUSxDQUFDLFdBQVdDLG1CQUFVLENBQUNDLFdBQVc7b0JBQy9ELElBQUlSLEtBQUtHLFVBQVUsS0FBS0QsaUJBQWlCTyxJQUFJLEVBQUUsTUFBTSxJQUFJSCxnQkFBUSxDQUFDLHdCQUF3QkMsbUJBQVUsQ0FBQ0csU0FBUztvQkFFeEdOLGdCQUFnQjt3QkFDcEJPLE1BQU07d0JBQ05DLFVBQVU7d0JBQ1ZDLFFBQVFYLGlCQUFpQlksSUFBSSxDQUFDQyxPQUFPLENBQUNGLE1BQU07d0JBQzVDRyxVQUFVZCxpQkFBaUJZLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxRQUFRO3dCQUNoREMsUUFBUUM7b0JBQ1Y7b0JBRUEsSUFBSWhCLGlCQUFpQlksSUFBSSxDQUFDQyxPQUFPLENBQUNFLE1BQU0sRUFBRWIsY0FBY2EsTUFBTSxHQUFHZixpQkFBaUJZLElBQUksQ0FBQ0MsT0FBTyxDQUFDRSxNQUFNO29CQUVyRzs7d0JBQU1kLFdBQVdKLE1BQU0sQ0FBQ29CLEtBQUssQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO3VDQUFDLG9CQUFBLFNBQU9DLFdBQVdDOzs7OzRDQUNqRTs7Z0RBQU1EOzs7NENBQU47NENBRVE7O2dEQUFNQyxLQUFLO29EQUNqQnRCLEtBQUFBO29EQUNBSCxLQUFBQTtvREFDQTBCLFNBQVN2QixJQUFJdUIsT0FBTztnREFDdEI7Ozs0Q0FKQTNCLE9BQU8sQUFBQyxpQkFJREE7Ozs7Ozs0QkFDVDs0Q0FSd0R5QixXQUFXQzs7OzZCQVFoRUUsUUFBUUMsT0FBTzs7O29CQVJsQjtvQkFVQTVCLElBQUk2QixXQUFXLENBQUMsQUFBQyxHQUFzQixPQUFwQjVCLE9BQU82QixZQUFZLEVBQUMsV0FBU3hCO29CQUVoRDs7d0JBQU9ILElBQUk0QixDQUFDLENBQUM7Ozs7SUFDZjtXQTNDZWxDOztJQTZDZixXQUFlQSJ9