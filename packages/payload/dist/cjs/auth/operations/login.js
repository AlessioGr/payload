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
var _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
var _errors = require("../../errors");
var _getCookieExpiration = /*#__PURE__*/ _interop_require_default(require("../../utilities/getCookieExpiration"));
var _isLocked = /*#__PURE__*/ _interop_require_default(require("../isLocked"));
var _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/sanitizeInternalFields"));
var _afterRead = require("../../fields/hooks/afterRead");
var _unlock = /*#__PURE__*/ _interop_require_default(require("./unlock"));
var _utils = require("../../collections/operations/utils");
var _incrementLoginAttempts = require("../strategies/local/incrementLoginAttempts");
var _authenticate = require("../strategies/local/authenticate");
var _getFieldsToSign = require("./getFieldsToSign");
var _initTransaction = require("../../utilities/initTransaction");
var _killTransaction = require("../../utilities/killTransaction");
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
function login(incomingArgs) {
    return _login.apply(this, arguments);
}
function _login() {
    _login = _async_to_generator(function(incomingArgs) {
        var args, _args_collection, collectionConfig, data, _args_req, payload, _args_req_payload, secret, config, req, depth, overrideAccess, showHiddenFields, shouldCommit, unsanitizedEmail, password, email, user, authResult, maxLoginAttemptsEnabled, fieldsToSign, token, cookieOptions, result, error;
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
                                                    operation: "login",
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
                    _args_collection = args.collection, collectionConfig = _args_collection.config, data = args.data, _args_req = args.req, payload = _args_req.payload, _args_req_payload = _args_req.payload, secret = _args_req_payload.secret, config = _args_req_payload.config, req = args.req, depth = args.depth, overrideAccess = args.overrideAccess, showHiddenFields = args.showHiddenFields;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        20,
                        ,
                        22
                    ]);
                    return [
                        4,
                        (0, _initTransaction.initTransaction)(req)
                    ];
                case 3:
                    shouldCommit = _state.sent();
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
                                                    operation: "login",
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
                case 4:
                    _state.sent();
                    unsanitizedEmail = data.email, password = data.password;
                    email = unsanitizedEmail ? unsanitizedEmail.toLowerCase().trim() : null;
                    return [
                        4,
                        payload.db.findOne({
                            collection: collectionConfig.slug,
                            where: {
                                email: {
                                    equals: email.toLowerCase()
                                }
                            },
                            req: req
                        })
                    ];
                case 5:
                    user = _state.sent();
                    if (!user || args.collection.config.auth.verify && user._verified === false) {
                        throw new _errors.AuthenticationError(req.t);
                    }
                    if (user && (0, _isLocked.default)(user.lockUntil)) {
                        throw new _errors.LockedAuth(req.t);
                    }
                    return [
                        4,
                        (0, _authenticate.authenticateLocalStrategy)({
                            password: password,
                            doc: user
                        })
                    ];
                case 6:
                    authResult = _state.sent();
                    user = (0, _sanitizeInternalFields.default)(user);
                    maxLoginAttemptsEnabled = args.collection.config.auth.maxLoginAttempts > 0;
                    if (!!authResult) return [
                        3,
                        9
                    ];
                    if (!maxLoginAttemptsEnabled) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        (0, _incrementLoginAttempts.incrementLoginAttempts)({
                            req: req,
                            payload: req.payload,
                            doc: user,
                            collection: collectionConfig
                        })
                    ];
                case 7:
                    _state.sent();
                    _state.label = 8;
                case 8:
                    throw new _errors.AuthenticationError(req.t);
                case 9:
                    if (!maxLoginAttemptsEnabled) return [
                        3,
                        11
                    ];
                    return [
                        4,
                        (0, _unlock.default)({
                            collection: {
                                config: collectionConfig
                            },
                            req: req,
                            data: data,
                            overrideAccess: true
                        })
                    ];
                case 10:
                    _state.sent();
                    _state.label = 11;
                case 11:
                    fieldsToSign = (0, _getFieldsToSign.getFieldsToSign)({
                        collectionConfig: collectionConfig,
                        user: user,
                        email: email
                    });
                    return [
                        4,
                        collectionConfig.hooks.beforeLogin.reduce(function() {
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
                                                    user: user,
                                                    req: args.req,
                                                    context: args.req.context
                                                })
                                            ];
                                        case 2:
                                            user = _state.sent() || user;
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
                case 12:
                    _state.sent();
                    token = _jsonwebtoken.default.sign(fieldsToSign, secret, {
                        expiresIn: collectionConfig.auth.tokenExpiration
                    });
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
                        args.res.cookie("".concat(config.cookiePrefix, "-token"), token, cookieOptions);
                    }
                    req.user = user;
                    // /////////////////////////////////////
                    // afterLogin - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        collectionConfig.hooks.afterLogin.reduce(function() {
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
                                                    user: user,
                                                    req: args.req,
                                                    token: token,
                                                    context: args.req.context
                                                })
                                            ];
                                        case 2:
                                            user = _state.sent() || user;
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
                case 13:
                    _state.sent();
                    return [
                        4,
                        (0, _afterRead.afterRead)({
                            depth: depth,
                            doc: user,
                            entityConfig: collectionConfig,
                            overrideAccess: overrideAccess,
                            req: req,
                            showHiddenFields: showHiddenFields,
                            context: req.context
                        })
                    ];
                case 14:
                    // /////////////////////////////////////
                    // afterRead - Fields
                    // /////////////////////////////////////
                    user = _state.sent();
                    // /////////////////////////////////////
                    // afterRead - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        collectionConfig.hooks.afterRead.reduce(function() {
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
                                                    doc: user,
                                                    context: req.context
                                                })
                                            ];
                                        case 2:
                                            user = _state.sent() || user;
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
                case 15:
                    _state.sent();
                    // /////////////////////////////////////
                    // afterRead - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        collectionConfig.hooks.afterRead.reduce(function() {
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
                                                    doc: user,
                                                    context: req.context
                                                })
                                            ];
                                        case 2:
                                            user = _state.sent() || user;
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
                case 16:
                    _state.sent();
                    result = {
                        token: token,
                        user: user,
                        exp: _jsonwebtoken.default.decode(token).exp
                    };
                    return [
                        4,
                        (0, _utils.buildAfterOperation)({
                            operation: "login",
                            args: args,
                            result: result
                        })
                    ];
                case 17:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    result = _state.sent();
                    if (collectionConfig.auth.removeTokenFromResponses) {
                        delete result.token;
                    }
                    if (!shouldCommit) return [
                        3,
                        19
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 18:
                    _state.sent();
                    _state.label = 19;
                case 19:
                    return [
                        2,
                        result
                    ];
                case 20:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 21:
                    _state.sent();
                    throw error;
                case 22:
                    return [
                        2
                    ];
            }
        });
    });
    return _login.apply(this, arguments);
}
var _default = login;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbG9naW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgQ29va2llT3B0aW9ucywgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRXJyb3IsIExvY2tlZEF1dGggfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCBnZXRDb29raWVFeHBpcmF0aW9uIGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRDb29raWVFeHBpcmF0aW9uJztcbmltcG9ydCBpc0xvY2tlZCBmcm9tICcuLi9pc0xvY2tlZCc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuLi8uLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBhZnRlclJlYWQgfSBmcm9tICcuLi8uLi9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkJztcbmltcG9ydCB1bmxvY2sgZnJvbSAnLi91bmxvY2snO1xuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvdXRpbHMnO1xuaW1wb3J0IHsgaW5jcmVtZW50TG9naW5BdHRlbXB0cyB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvbG9jYWwvaW5jcmVtZW50TG9naW5BdHRlbXB0cyc7XG5pbXBvcnQgeyBhdXRoZW50aWNhdGVMb2NhbFN0cmF0ZWd5IH0gZnJvbSAnLi4vc3RyYXRlZ2llcy9sb2NhbC9hdXRoZW50aWNhdGUnO1xuaW1wb3J0IHsgZ2V0RmllbGRzVG9TaWduIH0gZnJvbSAnLi9nZXRGaWVsZHNUb1NpZ24nO1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJztcblxuZXhwb3J0IHR5cGUgUmVzdWx0ID0ge1xuICB1c2VyPzogVXNlcixcbiAgdG9rZW4/OiBzdHJpbmcsXG4gIGV4cD86IG51bWJlcixcbn1cblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uLFxuICBkYXRhOiB7XG4gICAgZW1haWw6IHN0cmluZ1xuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgfVxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHJlcz86IFJlc3BvbnNlXG4gIGRlcHRoPzogbnVtYmVyXG4gIG92ZXJyaWRlQWNjZXNzPzogYm9vbGVhblxuICBzaG93SGlkZGVuRmllbGRzPzogYm9vbGVhblxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2dpbjxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgaW5jb21pbmdBcmdzOiBBcmd1bWVudHMsXG4pOiBQcm9taXNlPFJlc3VsdCAmIHsgdXNlcjogR2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddIH0+IHtcbiAgbGV0IGFyZ3MgPSBpbmNvbWluZ0FyZ3M7XG5cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBiZWZvcmVPcGVyYXRpb24gLSBDb2xsZWN0aW9uXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmJlZm9yZU9wZXJhdGlvbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgIGFyZ3MgPSAoYXdhaXQgaG9vayh7XG4gICAgICBhcmdzLFxuICAgICAgb3BlcmF0aW9uOiAnbG9naW4nLFxuICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICB9KSkgfHwgYXJncztcbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9uOiB7XG4gICAgICBjb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgfSxcbiAgICBkYXRhLFxuICAgIHJlcToge1xuICAgICAgcGF5bG9hZCxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgc2VjcmV0LFxuICAgICAgICBjb25maWcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVxLFxuICAgIGRlcHRoLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gIH0gPSBhcmdzO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGFyZ3MuY29sbGVjdGlvbi5jb25maWcuaG9va3MuYmVmb3JlT3BlcmF0aW9uLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rKSA9PiB7XG4gICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgIGFyZ3MgPSAoYXdhaXQgaG9vayh7XG4gICAgICAgIGFyZ3MsXG4gICAgICAgIG9wZXJhdGlvbjogJ2xvZ2luJyxcbiAgICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICAgIH0pKSB8fCBhcmdzO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBMb2dpblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGNvbnN0IHsgZW1haWw6IHVuc2FuaXRpemVkRW1haWwsIHBhc3N3b3JkIH0gPSBkYXRhO1xuXG4gICAgY29uc3QgZW1haWwgPSB1bnNhbml0aXplZEVtYWlsID8gKHVuc2FuaXRpemVkRW1haWwgYXMgc3RyaW5nKS50b0xvd2VyQ2FzZSgpLnRyaW0oKSA6IG51bGw7XG5cbiAgICBsZXQgdXNlciA9IGF3YWl0IHBheWxvYWQuZGIuZmluZE9uZTxhbnk+KHtcbiAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiB7IGVxdWFsczogZW1haWwudG9Mb3dlckNhc2UoKSB9IH0sXG4gICAgICByZXEsXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIgfHwgKGFyZ3MuY29sbGVjdGlvbi5jb25maWcuYXV0aC52ZXJpZnkgJiYgdXNlci5fdmVyaWZpZWQgPT09IGZhbHNlKSkge1xuICAgICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IocmVxLnQpO1xuICAgIH1cblxuICAgIGlmICh1c2VyICYmIGlzTG9ja2VkKHVzZXIubG9ja1VudGlsKSkge1xuICAgICAgdGhyb3cgbmV3IExvY2tlZEF1dGgocmVxLnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGF1dGhSZXN1bHQgPSBhd2FpdCBhdXRoZW50aWNhdGVMb2NhbFN0cmF0ZWd5KHsgcGFzc3dvcmQsIGRvYzogdXNlciB9KTtcblxuICAgIHVzZXIgPSBzYW5pdGl6ZUludGVybmFsRmllbGRzKHVzZXIpO1xuXG4gICAgY29uc3QgbWF4TG9naW5BdHRlbXB0c0VuYWJsZWQgPSBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmF1dGgubWF4TG9naW5BdHRlbXB0cyA+IDA7XG5cbiAgICBpZiAoIWF1dGhSZXN1bHQpIHtcbiAgICAgIGlmIChtYXhMb2dpbkF0dGVtcHRzRW5hYmxlZCkge1xuICAgICAgICBhd2FpdCBpbmNyZW1lbnRMb2dpbkF0dGVtcHRzKHtcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgICAgICAgZG9jOiB1c2VyLFxuICAgICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBuZXcgQXV0aGVudGljYXRpb25FcnJvcihyZXEudCk7XG4gICAgfVxuXG4gICAgaWYgKG1heExvZ2luQXR0ZW1wdHNFbmFibGVkKSB7XG4gICAgICBhd2FpdCB1bmxvY2soe1xuICAgICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICB9LFxuICAgICAgICByZXEsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzVG9TaWduID0gZ2V0RmllbGRzVG9TaWduKHtcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICB1c2VyLFxuICAgICAgZW1haWwsXG5cbiAgICB9KTtcblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYmVmb3JlTG9naW4ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgdXNlciA9IChhd2FpdCBob29rKHtcbiAgICAgICAgdXNlcixcbiAgICAgICAgcmVxOiBhcmdzLnJlcSxcbiAgICAgICAgY29udGV4dDogYXJncy5yZXEuY29udGV4dCxcbiAgICAgIH0pKSB8fCB1c2VyO1xuICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oXG4gICAgICBmaWVsZHNUb1NpZ24sXG4gICAgICBzZWNyZXQsXG4gICAgICB7XG4gICAgICAgIGV4cGlyZXNJbjogY29sbGVjdGlvbkNvbmZpZy5hdXRoLnRva2VuRXhwaXJhdGlvbixcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGlmIChhcmdzLnJlcykge1xuICAgICAgY29uc3QgY29va2llT3B0aW9uczogQ29va2llT3B0aW9ucyA9IHtcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgZXhwaXJlczogZ2V0Q29va2llRXhwaXJhdGlvbihjb2xsZWN0aW9uQ29uZmlnLmF1dGgudG9rZW5FeHBpcmF0aW9uKSxcbiAgICAgICAgc2VjdXJlOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguY29va2llcy5zZWN1cmUsXG4gICAgICAgIHNhbWVTaXRlOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguY29va2llcy5zYW1lU2l0ZSxcbiAgICAgICAgZG9tYWluOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluKSBjb29raWVPcHRpb25zLmRvbWFpbiA9IGNvbGxlY3Rpb25Db25maWcuYXV0aC5jb29raWVzLmRvbWFpbjtcblxuICAgICAgYXJncy5yZXMuY29va2llKGAke2NvbmZpZy5jb29raWVQcmVmaXh9LXRva2VuYCwgdG9rZW4sIGNvb2tpZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJlcS51c2VyID0gdXNlcjtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlckxvZ2luIC0gQ29sbGVjdGlvblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJMb2dpbi5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICB1c2VyID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHJlcTogYXJncy5yZXEsXG4gICAgICAgIHRva2VuLFxuICAgICAgICBjb250ZXh0OiBhcmdzLnJlcS5jb250ZXh0LFxuICAgICAgfSkgfHwgdXNlcjtcbiAgICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gYWZ0ZXJSZWFkIC0gRmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgdXNlciA9IGF3YWl0IGFmdGVyUmVhZCh7XG4gICAgICBkZXB0aCxcbiAgICAgIGRvYzogdXNlcixcbiAgICAgIGVudGl0eUNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgcmVxLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICB1c2VyID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZG9jOiB1c2VyLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pIHx8IHVzZXI7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIGFmdGVyUmVhZCAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmhvb2tzLmFmdGVyUmVhZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICB1c2VyID0gYXdhaXQgaG9vayh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZG9jOiB1c2VyLFxuICAgICAgICBjb250ZXh0OiByZXEuY29udGV4dCxcbiAgICAgIH0pIHx8IHVzZXI7XG4gICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gICAgbGV0IHJlc3VsdDogUmVzdWx0ICYgeyB1c2VyOiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10gfSA9IHtcbiAgICAgIHRva2VuLFxuICAgICAgdXNlcixcbiAgICAgIGV4cDogKGp3dC5kZWNvZGUodG9rZW4pIGFzIGp3dC5Kd3RQYXlsb2FkKS5leHAsXG4gICAgfTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBhZnRlck9wZXJhdGlvbiAtIENvbGxlY3Rpb25cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICByZXN1bHQgPSBhd2FpdCBidWlsZEFmdGVyT3BlcmF0aW9uPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT4oe1xuICAgICAgb3BlcmF0aW9uOiAnbG9naW4nLFxuICAgICAgYXJncyxcbiAgICAgIHJlc3VsdCxcbiAgICB9KTtcblxuICAgIGlmIChjb2xsZWN0aW9uQ29uZmlnLmF1dGgucmVtb3ZlVG9rZW5Gcm9tUmVzcG9uc2VzKSB7XG4gICAgICBkZWxldGUgcmVzdWx0LnRva2VuO1xuICAgIH1cblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZXR1cm4gcmVzdWx0c1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcbiAgICBhd2FpdCBraWxsVHJhbnNhY3Rpb24ocmVxKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiJdLCJuYW1lcyI6WyJsb2dpbiIsImluY29taW5nQXJncyIsImFyZ3MiLCJjb2xsZWN0aW9uQ29uZmlnIiwiZGF0YSIsInBheWxvYWQiLCJzZWNyZXQiLCJjb25maWciLCJyZXEiLCJkZXB0aCIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsInNob3VsZENvbW1pdCIsInVuc2FuaXRpemVkRW1haWwiLCJwYXNzd29yZCIsImVtYWlsIiwidXNlciIsImF1dGhSZXN1bHQiLCJtYXhMb2dpbkF0dGVtcHRzRW5hYmxlZCIsImZpZWxkc1RvU2lnbiIsInRva2VuIiwiY29va2llT3B0aW9ucyIsInJlc3VsdCIsImVycm9yIiwiY29sbGVjdGlvbiIsImhvb2tzIiwiYmVmb3JlT3BlcmF0aW9uIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsIm9wZXJhdGlvbiIsImNvbnRleHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImluaXRUcmFuc2FjdGlvbiIsInRvTG93ZXJDYXNlIiwidHJpbSIsImRiIiwiZmluZE9uZSIsInNsdWciLCJ3aGVyZSIsImVxdWFscyIsImF1dGgiLCJ2ZXJpZnkiLCJfdmVyaWZpZWQiLCJBdXRoZW50aWNhdGlvbkVycm9yIiwidCIsImlzTG9ja2VkIiwibG9ja1VudGlsIiwiTG9ja2VkQXV0aCIsImF1dGhlbnRpY2F0ZUxvY2FsU3RyYXRlZ3kiLCJkb2MiLCJzYW5pdGl6ZUludGVybmFsRmllbGRzIiwibWF4TG9naW5BdHRlbXB0cyIsImluY3JlbWVudExvZ2luQXR0ZW1wdHMiLCJ1bmxvY2siLCJnZXRGaWVsZHNUb1NpZ24iLCJiZWZvcmVMb2dpbiIsImp3dCIsInNpZ24iLCJleHBpcmVzSW4iLCJ0b2tlbkV4cGlyYXRpb24iLCJyZXMiLCJwYXRoIiwiaHR0cE9ubHkiLCJleHBpcmVzIiwiZ2V0Q29va2llRXhwaXJhdGlvbiIsInNlY3VyZSIsImNvb2tpZXMiLCJzYW1lU2l0ZSIsImRvbWFpbiIsInVuZGVmaW5lZCIsImNvb2tpZSIsImNvb2tpZVByZWZpeCIsImFmdGVyTG9naW4iLCJhZnRlclJlYWQiLCJlbnRpdHlDb25maWciLCJleHAiLCJkZWNvZGUiLCJidWlsZEFmdGVyT3BlcmF0aW9uIiwicmVtb3ZlVG9rZW5Gcm9tUmVzcG9uc2VzIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJ0cmFuc2FjdGlvbklEIiwia2lsbFRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9SQTs7O2VBQUE7OzttRUFwUmdCO3NCQUdnQzswRUFFaEI7K0RBQ1g7NkVBQ2M7eUJBR1Q7NkRBQ1A7cUJBQ2lCO3NDQUNHOzRCQUNHOytCQUNWOytCQUNBOytCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBcUJqQkEsTUFDYkMsWUFBdUI7V0FEVkQ7O1NBQUFBO0lBQUFBLFNBQWYsb0JBQUEsU0FDRUMsWUFBdUI7WUFFbkJDLHdCQWtCUUMsa0JBRVZDLGlC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