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
var _url = /*#__PURE__*/ _interop_require_default(require("url"));
var _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
var _errors = require("../../errors");
var _getCookieExpiration = /*#__PURE__*/ _interop_require_default(require("../../utilities/getCookieExpiration"));
var _utils = require("../../collections/operations/utils");
var _getFieldsToSign = require("./getFieldsToSign");
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
function refresh(incomingArgs) {
    return _refresh.apply(this, arguments);
}
function _refresh() {
    _refresh = _async_to_generator(function(incomingArgs) {
        var _args_req, _args, _user, args, _args_collection, collectionConfig, _args_req1, _args_req_payload, secret, config, parsedURL, isGraphQL, user, fieldsToSign, refreshedToken, exp, cookieOptions, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    args = incomingArgs;
                    // /////////////////////////////////////
                    // beforeOperation - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        args.collection.config.hooks.beforeOperation.reduce(function() {
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
                                                    args: args,
                                                    operation: "refresh",
                                                    context: args.req.context
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
                    _args_collection = args.collection, collectionConfig = _args_collection.config, _args_req1 = args.req, _args_req_payload = _args_req1.payload, secret = _args_req_payload.secret, config = _args_req_payload.config;
                    if (typeof args.token !== "string") throw new _errors.Forbidden(args.req.t);
                    parsedURL = _url.default.parse(args.req.url);
                    isGraphQL = parsedURL.pathname === config.routes.graphQL;
                    return [
                        4,
                        args.req.payload.findByID({
                            id: args.req.user.id,
                            collection: args.req.user.collection,
                            req: args.req,
                            depth: isGraphQL ? 0 : args.collection.config.auth.depth
                        })
                    ];
                case 2:
                    user = _state.sent();
                    fieldsToSign = (0, _getFieldsToSign.getFieldsToSign)({
                        collectionConfig: collectionConfig,
                        user: (_args = args) === null || _args === void 0 ? void 0 : (_args_req = _args.req) === null || _args_req === void 0 ? void 0 : _args_req.user,
                        email: (_user = user) === null || _user === void 0 ? void 0 : _user.email
                    });
                    refreshedToken = _jsonwebtoken.default.sign(fieldsToSign, secret, {
                        expiresIn: collectionConfig.auth.tokenExpiration
                    });
                    exp = _jsonwebtoken.default.decode(refreshedToken).exp;
                    if (args.res) {
                        cookieOptions = {
                            path: "/",
                            httpOnly: true,
                            expires: (0, _getCookieExpiration.default)(collectionConfig.auth.tokenExpiration),
                            secure: collectionConfig.auth.cookies.secure,
                            sameSite: collectionConfig.auth.cookies.sameSite,
                            domain: undefined
                        };
                        if (collectionConfig.auth.cookies.domain) cookieOptions.domain = collectionConfig.auth.cookies.domain;
                        args.res.cookie("".concat(config.cookiePrefix, "-token"), refreshedToken, cookieOptions);
                    }
                    result = {
                        user: user,
                        refreshedToken: refreshedToken,
                        exp: exp
                    };
                    // /////////////////////////////////////
                    // After Refresh - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        collectionConfig.hooks.afterRefresh.reduce(function() {
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
                                                    req: args.req,
                                                    res: args.res,
                                                    exp: exp,
                                                    token: refreshedToken,
                                                    context: args.req.context
                                                })
                                            ];
                                        case 2:
                                            result = _state.sent() || result;
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
                case 3:
                    _state.sent();
                    return [
                        4,
                        (0, _utils.buildAfterOperation)({
                            operation: "refresh",
                            args: args,
                            result: result
                        })
                    ];
                case 4:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    result = _state.sent();
                    // /////////////////////////////////////
                    // Return results
                    // /////////////////////////////////////
                    if (collectionConfig.auth.removeTokenFromResponses) {
                        delete result.refreshedToken;
                    }
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _refresh.apply(this, arguments);
}
var _default = refresh;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvcmVmcmVzaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiwgQmVmb3JlT3BlcmF0aW9uSG9vayB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBGb3JiaWRkZW4gfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IGdldENvb2tpZUV4cGlyYXRpb24gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldENvb2tpZUV4cGlyYXRpb24nO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0RmllbGRzVG9TaWduIH0gZnJvbSAnLi9nZXRGaWVsZHNUb1NpZ24nO1xuXG5leHBvcnQgdHlwZSBSZXN1bHQgPSB7XG4gIGV4cDogbnVtYmVyLFxuICB1c2VyOiBEb2N1bWVudCxcbiAgcmVmcmVzaGVkVG9rZW46IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb24sXG4gIHRva2VuOiBzdHJpbmdcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICByZXM/OiBSZXNwb25zZVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoKGluY29taW5nQXJnczogQXJndW1lbnRzKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgbGV0IGFyZ3MgPSBpbmNvbWluZ0FyZ3M7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vazogQmVmb3JlT3BlcmF0aW9uSG9vayB8IFByb21pc2U8dm9pZD4sIGhvb2s6IEJlZm9yZU9wZXJhdGlvbkhvb2spID0+IHtcbiAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgYXJncyxcbiAgICAgIG9wZXJhdGlvbjogJ3JlZnJlc2gnLFxuICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICB9KSkgfHwgYXJncztcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gUmVmcmVzaFxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIHJlcToge1xuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBzZWNyZXQsXG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IGFyZ3M7XG5cbiAgaWYgKHR5cGVvZiBhcmdzLnRva2VuICE9PSAnc3RyaW5nJykgdGhyb3cgbmV3IEZvcmJpZGRlbihhcmdzLnJlcS50KTtcblxuICBjb25zdCBwYXJzZWRVUkwgPSB1cmwucGFyc2UoYXJncy5yZXEudXJsKTtcbiAgY29uc3QgaXNHcmFwaFFMID0gcGFyc2VkVVJMLnBhdGhuYW1lID09PSBjb25maWcucm91dGVzLmdyYXBoUUw7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGFyZ3MucmVxLnBheWxvYWQuZmluZEJ5SUQoe1xuICAgIGlkOiBhcmdzLnJlcS51c2VyLmlkLFxuICAgIGNvbGxlY3Rpb246IGFyZ3MucmVxLnVzZXIuY29sbGVjdGlvbixcbiAgICByZXE6IGFyZ3MucmVxLFxuICAgIGRlcHRoOiBpc0dyYXBoUUwgPyAwIDogYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5hdXRoLmRlcHRoLFxuICB9KTtcblxuICBjb25zdCBmaWVsZHNUb1NpZ24gPSBnZXRGaWVsZHNUb1NpZ24oe1xuICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgdXNlcjogYXJncz8ucmVxPy51c2VyLFxuICAgIGVtYWlsOiB1c2VyPy5lbWFpbCBhcyBzdHJpbmcsXG4gIH0pO1xuXG4gIGNvbnN0IHJlZnJlc2hlZFRva2VuID0gand0LnNpZ24oXG4gICAgZmllbGRzVG9TaWduLFxuICAgIHNlY3JldCxcbiAgICB7XG4gICAgICBleHBpcmVzSW46IGNvbGxlY3Rpb25Db25maWcuYXV0aC50b2tlbkV4cGlyYXRpb24sXG4gICAgfSxcbiAgKTtcblxuICBjb25zdCBleHAgPSAoand0LmRlY29kZShyZWZyZXNoZWRUb2tlbikgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pLmV4cCBhcyBudW1iZXI7XG5cbiAgaWYgKGFyZ3MucmVzKSB7XG4gICAgY29uc3QgY29va2llT3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgICAgZXhwaXJlczogZ2V0Q29va2llRXhwaXJhdGlvbihjb2xsZWN0aW9uQ29uZmlnLmF1dGgudG9rZW5FeHBpcmF0aW9uKSxcbiAgICAgIHNlY3VyZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2VjdXJlLFxuICAgICAgc2FtZVNpdGU6IGNvbGxlY3Rpb25Db25maWcuYXV0aC5jb29raWVzLnNhbWVTaXRlLFxuICAgICAgZG9tYWluOiB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIGlmIChjb2xsZWN0aW9uQ29uZmlnLmF1dGguY29va2llcy5kb21haW4pIGNvb2tpZU9wdGlvbnMuZG9tYWluID0gY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluO1xuXG4gICAgYXJncy5yZXMuY29va2llKGAke2NvbmZpZy5jb29raWVQcmVmaXh9LXRva2VuYCwgcmVmcmVzaGVkVG9rZW4sIGNvb2tpZU9wdGlvbnMpO1xuICB9XG5cbiAgbGV0IHJlc3VsdDogUmVzdWx0ID0ge1xuICAgIHVzZXIsXG4gICAgcmVmcmVzaGVkVG9rZW4sXG4gICAgZXhwLFxuICB9O1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gQWZ0ZXIgUmVmcmVzaCAtIENvbGxlY3Rpb25cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJSZWZyZXNoLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgcmVzdWx0ID0gKGF3YWl0IGhvb2soe1xuICAgICAgcmVxOiBhcmdzLnJlcSxcbiAgICAgIHJlczogYXJncy5yZXMsXG4gICAgICBleHAsXG4gICAgICB0b2tlbjogcmVmcmVzaGVkVG9rZW4sXG4gICAgICBjb250ZXh0OiBhcmdzLnJlcS5jb250ZXh0LFxuICAgIH0pKSB8fCByZXN1bHQ7XG4gIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gYWZ0ZXJPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICByZXN1bHQgPSBhd2FpdCBidWlsZEFmdGVyT3BlcmF0aW9uKHtcbiAgICBvcGVyYXRpb246ICdyZWZyZXNoJyxcbiAgICBhcmdzLFxuICAgIHJlc3VsdCxcbiAgfSk7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBSZXR1cm4gcmVzdWx0c1xuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aC5yZW1vdmVUb2tlbkZyb21SZXNwb25zZXMpIHtcbiAgICBkZWxldGUgcmVzdWx0LnJlZnJlc2hlZFRva2VuO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVmcmVzaDtcbiJdLCJuYW1lcyI6WyJyZWZyZXNoIiwiaW5jb21pbmdBcmdzIiwiYXJncyIsInVzZXIiLCJjb2xsZWN0aW9uQ29uZmlnIiwic2VjcmV0IiwiY29uZmlnIiwicGFyc2VkVVJMIiwiaXNHcmFwaFFMIiwiZmllbGRzVG9TaWduIiwicmVmcmVzaGVkVG9rZW4iLCJleHAiLCJjb29raWVPcHRpb25zIiwicmVzdWx0IiwiY29sbGVjdGlvbiIsImhvb2tzIiwiYmVmb3JlT3BlcmF0aW9uIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsIm9wZXJhdGlvbiIsImNvbnRleHQiLCJyZXEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBheWxvYWQiLCJ0b2tlbiIsIkZvcmJpZGRlbiIsInQiLCJ1cmwiLCJwYXJzZSIsInBhdGhuYW1lIiwicm91dGVzIiwiZ3JhcGhRTCIsImZpbmRCeUlEIiwiaWQiLCJkZXB0aCIsImF1dGgiLCJnZXRGaWVsZHNUb1NpZ24iLCJlbWFpbCIsImp3dCIsInNpZ24iLCJleHBpcmVzSW4iLCJ0b2tlbkV4cGlyYXRpb24iLCJkZWNvZGUiLCJyZXMiLCJwYXRoIiwiaHR0cE9ubHkiLCJleHBpcmVzIiwiZ2V0Q29va2llRXhwaXJhdGlvbiIsInNlY3VyZSIsImNvb2tpZXMiLCJzYW1lU2l0ZSIsImRvbWFpbiIsInVuZGVmaW5lZCIsImNvb2tpZSIsImNvb2tpZVByZWZpeCIsImFmdGVyUmVmcmVzaCIsImJ1aWxkQWZ0ZXJPcGVyYXRpb24iLCJyZW1vdmVUb2tlbkZyb21SZXNwb25zZXMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZ0pBOzs7ZUFBQTs7OzBEQWhKZ0I7bUVBQ0E7c0JBR1U7MEVBQ007cUJBR0k7K0JBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FlakJBLFFBQVFDLFlBQXVCO1dBQS9CRDs7U0FBQUE7SUFBQUEsV0FBZixvQkFBQSxTQUF1QkMsWUFBdUI7WUErQ3BDQyxXQUFBQSxPQUNDQyxPQS9DTEQsd0JBc0JRRSxpREFJTkMsUUFDQUMsUUFPQUMsV0FDQUMsV0FFQUwsTUFPQU0sY0FNQUMsZ0JBUUFDLEtBR0VDLGVBY0pDOzs7O29CQTNFQVgsT0FBT0Q7b0JBRVgsd0NBQXdDO29CQUN4QywrQkFBK0I7b0JBQy9CLHdDQUF3QztvQkFFeEM7O3dCQUFNQyxLQUFLWSxVQUFVLENBQUNSLE1BQU0sQ0FBQ1MsS0FBSyxDQUFDQyxlQUFlLENBQUNDLE1BQU07dUNBQUMsb0JBQUEsU0FBT0MsV0FBZ0RDOzs7OzRDQUMvRzs7Z0RBQU1EOzs7NENBQU47NENBRVE7O2dEQUFNQyxLQUFLO29EQUNqQmpCLE1BQUFBO29EQUNBa0IsV0FBVztvREFDWEMsU0FBU25CLEtBQUtvQixHQUFHLENBQUNELE9BQU87Z0RBQzNCOzs7NENBSkFuQixPQUFPLEFBQUMsaUJBSURBOzs7Ozs7NEJBQ1Q7NENBUmlFZ0IsV0FBZ0RDOzs7NkJBUTlHSSxRQUFRQyxPQUFPOzs7b0JBUmxCO3VDQXdCSXRCLEtBVEZZLFlBQ1VWLG9DQUFSRSxxQkFRQUosS0FORm9CLG9DQUNFRyxTQUNFcEIsMkJBQUFBLFFBQ0FDLDJCQUFBQTtvQkFLTixJQUFJLE9BQU9KLEtBQUt3QixLQUFLLEtBQUssVUFB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