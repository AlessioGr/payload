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
import crypto from "crypto";
import { APIError } from "../../errors";
import { buildAfterOperation } from "../../collections/operations/utils";
function forgotPassword(incomingArgs) {
    return _forgotPassword.apply(this, arguments);
}
function _forgotPassword() {
    _forgotPassword = _async_to_generator(function(incomingArgs) {
        var args, _args_collection, collectionConfig, data, disableEmail, expiration, _args_req, t, payload, _args_req_payload, config, email, emailOptions, req, token, user, serverURL, html, subject;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!Object.prototype.hasOwnProperty.call(incomingArgs.data, "email")) {
                        throw new APIError("Missing email.", 400);
                    }
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
                                                    operation: "forgotPassword",
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
                    _args_collection = args.collection, collectionConfig = _args_collection.config, data = args.data, disableEmail = args.disableEmail, expiration = args.expiration, _args_req = args.req, t = _args_req.t, payload = _args_req.payload, _args_req_payload = _args_req.payload, config = _args_req_payload.config, email = _args_req_payload.sendEmail, emailOptions = _args_req_payload.emailOptions, req = args.req;
                    token = crypto.randomBytes(20);
                    token = token.toString("hex");
                    if (!data.email) {
                        throw new APIError("Missing email.");
                    }
                    return [
                        4,
                        payload.db.findOne({
                            collection: collectionConfig.slug,
                            where: {
                                email: {
                                    equals: data.email.toLowerCase()
                                }
                            }
                        })
                    ];
                case 2:
                    user = _state.sent();
                    if (!user) return [
                        2,
                        null
                    ];
                    user.resetPasswordToken = token;
                    user.resetPasswordExpiration = new Date(expiration || Date.now() + 3600000); // 1 hour
                    return [
                        4,
                        payload.update({
                            collection: collectionConfig.slug,
                            id: user.id,
                            data: user
                        })
                    ];
                case 3:
                    user = _state.sent();
                    if (!!disableEmail) return [
                        3,
                        8
                    ];
                    serverURL = config.serverURL !== null && config.serverURL !== "" ? config.serverURL : "".concat(req.protocol, "://").concat(req.get("host"));
                    html = "".concat(t("authentication:youAreReceivingResetPassword"), '\n    <a href="').concat(serverURL).concat(config.routes.admin, "/reset/").concat(token, '">\n     ').concat(serverURL).concat(config.routes.admin, "/reset/").concat(token, "\n    </a>\n    ").concat(t("authentication:youDidNotRequestPassword"));
                    if (!(typeof collectionConfig.auth.forgotPassword.generateEmailHTML === "function")) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        collectionConfig.auth.forgotPassword.generateEmailHTML({
                            req: req,
                            token: token,
                            user: user
                        })
                    ];
                case 4:
                    html = _state.sent();
                    _state.label = 5;
                case 5:
                    subject = t("authentication:resetYourPassword");
                    if (!(typeof collectionConfig.auth.forgotPassword.generateEmailSubject === "function")) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        collectionConfig.auth.forgotPassword.generateEmailSubject({
                            req: req,
                            token: token,
                            user: user
                        })
                    ];
                case 6:
                    subject = _state.sent();
                    _state.label = 7;
                case 7:
                    email({
                        from: '"'.concat(emailOptions.fromName, '" <').concat(emailOptions.fromAddress, ">"),
                        to: data.email,
                        subject: subject,
                        html: html
                    });
                    _state.label = 8;
                case 8:
                    // /////////////////////////////////////
                    // afterForgotPassword - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        collectionConfig.hooks.afterForgotPassword.reduce(function() {
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
                                                    context: req.context
                                                })
                                            ];
                                        case 2:
                                            _state.sent();
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
                case 9:
                    _state.sent();
                    return [
                        4,
                        buildAfterOperation({
                            operation: "forgotPassword",
                            args: args,
                            result: token
                        })
                    ];
                case 10:
                    // /////////////////////////////////////
                    // afterOperation - Collection
                    // /////////////////////////////////////
                    token = _state.sent();
                    return [
                        2,
                        token
                    ];
            }
        });
    });
    return _forgotPassword.apply(this, arguments);
}
export default forgotPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvZm9yZ290UGFzc3dvcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgYnVpbGRBZnRlck9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvdXRpbHMnO1xuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgZGF0YToge1xuICAgIGVtYWlsOiBzdHJpbmdcbiAgICBba2V5OiBzdHJpbmddOiB1bmtub3duXG4gIH1cbiAgZGlzYWJsZUVtYWlsPzogYm9vbGVhblxuICBleHBpcmF0aW9uPzogbnVtYmVyXG4gIHJlcTogUGF5bG9hZFJlcXVlc3Rcbn1cblxuZXhwb3J0IHR5cGUgUmVzdWx0ID0gc3RyaW5nO1xuXG5hc3luYyBmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZChpbmNvbWluZ0FyZ3M6IEFyZ3VtZW50cyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbmNvbWluZ0FyZ3MuZGF0YSwgJ2VtYWlsJykpIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoJ01pc3NpbmcgZW1haWwuJywgNDAwKTtcbiAgfVxuXG4gIGxldCBhcmdzID0gaW5jb21pbmdBcmdzO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gYmVmb3JlT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYXdhaXQgYXJncy5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5iZWZvcmVPcGVyYXRpb24ucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGhvb2spID0+IHtcbiAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICBhcmdzID0gKGF3YWl0IGhvb2soe1xuICAgICAgYXJncyxcbiAgICAgIG9wZXJhdGlvbjogJ2ZvcmdvdFBhc3N3b3JkJyxcbiAgICAgIGNvbnRleHQ6IGFyZ3MucmVxLmNvbnRleHQsXG4gICAgfSkpIHx8IGFyZ3M7XG4gIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgIH0sXG4gICAgZGF0YSxcbiAgICBkaXNhYmxlRW1haWwsXG4gICAgZXhwaXJhdGlvbixcbiAgICByZXE6IHtcbiAgICAgIHQsXG4gICAgICBwYXlsb2FkLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjb25maWcsXG4gICAgICAgIHNlbmRFbWFpbDogZW1haWwsXG4gICAgICAgIGVtYWlsT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICByZXEsXG4gIH0gPSBhcmdzO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gRm9yZ2V0IHBhc3N3b3JkXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICBsZXQgdG9rZW46IHN0cmluZyB8IEJ1ZmZlciA9IGNyeXB0by5yYW5kb21CeXRlcygyMCk7XG4gIHRva2VuID0gdG9rZW4udG9TdHJpbmcoJ2hleCcpO1xuXG4gIHR5cGUgVXNlckRvYyA9IHtcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyXG4gICAgcmVzZXRQYXNzd29yZFRva2VuPzogc3RyaW5nLFxuICAgIHJlc2V0UGFzc3dvcmRFeHBpcmF0aW9uPzogRGF0ZSxcbiAgfVxuXG4gIGlmICghZGF0YS5lbWFpbCkge1xuICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyBlbWFpbC4nKTtcbiAgfVxuXG4gIGxldCB1c2VyID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kT25lPFVzZXJEb2M+KHtcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgd2hlcmU6IHsgZW1haWw6IHsgZXF1YWxzOiAoZGF0YS5lbWFpbCBhcyBzdHJpbmcpLnRvTG93ZXJDYXNlKCkgfSB9LFxuICB9KTtcblxuXG4gIGlmICghdXNlcikgcmV0dXJuIG51bGw7XG5cbiAgdXNlci5yZXNldFBhc3N3b3JkVG9rZW4gPSB0b2tlbjtcbiAgdXNlci5yZXNldFBhc3N3b3JkRXhwaXJhdGlvbiA9IG5ldyBEYXRlKGV4cGlyYXRpb24gfHwgRGF0ZS5ub3coKSArIDM2MDAwMDApOyAvLyAxIGhvdXJcblxuICB1c2VyID0gYXdhaXQgcGF5bG9hZC51cGRhdGUoe1xuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICBpZDogdXNlci5pZCxcbiAgICBkYXRhOiB1c2VyLFxuICB9KTtcblxuICBpZiAoIWRpc2FibGVFbWFpbCkge1xuICAgIGNvbnN0IHNlcnZlclVSTCA9IChjb25maWcuc2VydmVyVVJMICE9PSBudWxsICYmIGNvbmZpZy5zZXJ2ZXJVUkwgIT09ICcnKSA/IGNvbmZpZy5zZXJ2ZXJVUkwgOiBgJHtyZXEucHJvdG9jb2x9Oi8vJHtyZXEuZ2V0KCdob3N0Jyl9YDtcblxuICAgIGxldCBodG1sID0gYCR7dCgnYXV0aGVudGljYXRpb246eW91QXJlUmVjZWl2aW5nUmVzZXRQYXNzd29yZCcpfVxuICAgIDxhIGhyZWY9XCIke3NlcnZlclVSTH0ke2NvbmZpZy5yb3V0ZXMuYWRtaW59L3Jlc2V0LyR7dG9rZW59XCI+XG4gICAgICR7c2VydmVyVVJMfSR7Y29uZmlnLnJvdXRlcy5hZG1pbn0vcmVzZXQvJHt0b2tlbn1cbiAgICA8L2E+XG4gICAgJHt0KCdhdXRoZW50aWNhdGlvbjp5b3VEaWROb3RSZXF1ZXN0UGFzc3dvcmQnKX1gO1xuXG4gICAgaWYgKHR5cGVvZiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguZm9yZ290UGFzc3dvcmQuZ2VuZXJhdGVFbWFpbEhUTUwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGh0bWwgPSBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmF1dGguZm9yZ290UGFzc3dvcmQuZ2VuZXJhdGVFbWFpbEhUTUwoe1xuICAgICAgICByZXEsXG4gICAgICAgIHRva2VuLFxuICAgICAgICB1c2VyLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHN1YmplY3QgPSB0KCdhdXRoZW50aWNhdGlvbjpyZXNldFlvdXJQYXNzd29yZCcpO1xuXG4gICAgaWYgKHR5cGVvZiBjb2xsZWN0aW9uQ29uZmlnLmF1dGguZm9yZ290UGFzc3dvcmQuZ2VuZXJhdGVFbWFpbFN1YmplY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHN1YmplY3QgPSBhd2FpdCBjb2xsZWN0aW9uQ29uZmlnLmF1dGguZm9yZ290UGFzc3dvcmQuZ2VuZXJhdGVFbWFpbFN1YmplY3Qoe1xuICAgICAgICByZXEsXG4gICAgICAgIHRva2VuLFxuICAgICAgICB1c2VyLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZW1haWwoe1xuICAgICAgZnJvbTogYFwiJHtlbWFpbE9wdGlvbnMuZnJvbU5hbWV9XCIgPCR7ZW1haWxPcHRpb25zLmZyb21BZGRyZXNzfT5gLFxuICAgICAgdG86IGRhdGEuZW1haWwsXG4gICAgICBzdWJqZWN0LFxuICAgICAgaHRtbCxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gYWZ0ZXJGb3Jnb3RQYXNzd29yZCAtIENvbGxlY3Rpb25cbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gIGF3YWl0IGNvbGxlY3Rpb25Db25maWcuaG9va3MuYWZ0ZXJGb3Jnb3RQYXNzd29yZC5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgIGF3YWl0IHByaW9ySG9vaztcbiAgICBhd2FpdCBob29rKHsgYXJncywgY29udGV4dDogcmVxLmNvbnRleHQgfSk7XG4gIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIGFmdGVyT3BlcmF0aW9uIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdG9rZW4gPSBhd2FpdCBidWlsZEFmdGVyT3BlcmF0aW9uKHtcbiAgICBvcGVyYXRpb246ICdmb3Jnb3RQYXNzd29yZCcsXG4gICAgYXJncyxcbiAgICByZXN1bHQ6IHRva2VuLFxuICB9KTtcblxuICByZXR1cm4gdG9rZW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcmdvdFBhc3N3b3JkO1xuIl0sIm5hbWVzIjpbImNyeXB0byIsIkFQSUVycm9yIiwiYnVpbGRBZnRlck9wZXJhdGlvbiIsImZvcmdvdFBhc3N3b3JkIiwiaW5jb21pbmdBcmdzIiwiYXJncyIsImNvbGxlY3Rpb25Db25maWciLCJkYXRhIiwiZGlzYWJsZUVtYWlsIiwiZXhwaXJhdGlvbiIsInQiLCJwYXlsb2FkIiwiY29uZmlnIiwiZW1haWwiLCJlbWFpbE9wdGlvbnMiLCJyZXEiLCJ0b2tlbiIsInVzZXIiLCJzZXJ2ZXJVUkwiLCJodG1sIiwic3ViamVjdCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImNvbGxlY3Rpb24iLCJob29rcyIsImJlZm9yZU9wZXJhdGlvbiIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJvcGVyYXRpb24iLCJjb250ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZW5kRW1haWwiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwiZGIiLCJmaW5kT25lIiwic2x1ZyIsIndoZXJlIiwiZXF1YWxzIiwidG9Mb3dlckNhc2UiLCJyZXNldFBhc3N3b3JkVG9rZW4iLCJyZXNldFBhc3N3b3JkRXhwaXJhdGlvbiIsIkRhdGUiLCJub3ciLCJ1cGRhdGUiLCJpZCIsInByb3RvY29sIiwiZ2V0Iiwicm91dGVzIiwiYWRtaW4iLCJhdXRoIiwiZ2VuZXJhdGVFbWFpbEhUTUwiLCJnZW5lcmF0ZUVtYWlsU3ViamVjdCIsImZyb20iLCJmcm9tTmFtZSIsImZyb21BZGRyZXNzIiwidG8iLCJhZnRlckZvcmdvdFBhc3N3b3JkIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsWUFBWSxTQUFTO0FBQzVCLFNBQVNDLFFBQVEsUUFBUSxlQUFlO0FBR3hDLFNBQVNDLG1CQUFtQixRQUFRLHFDQUFxQztTQWUxREMsZUFBZUMsWUFBdUI7V0FBdENEOztTQUFBQTtJQUFBQSxrQkFBZixvQkFBQSxTQUE4QkMsWUFBdUI7WUFLL0NDLHdCQWtCUUMsa0JBRVZDLE1BQ0FDLGNBQ0FDLHVCQUVFQyxHQUNBQyw0QkFFRUMsUUFDV0MsT0FDWEMsY0FHSkMsS0FPRUMsT0FhQUMsTUFrQklDLFdBRUZDLE1BY0FDOzs7O29CQTFGTixJQUFJLENBQUNDLE9BQU9DLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUNwQixhQUFhRyxJQUFJLEVBQUUsVUFBVTt3QkFDckUsTUFBTSxJQUFJTixTQUFTLGtCQUFrQjtvQkFDdkM7b0JBRUlJLE9BQU9EO29CQUVYLHdDQUF3QztvQkFDeEMsK0JBQStCO29CQUMvQix3Q0FBd0M7b0JBRXhDOzt3QkFBTUMsS0FBS29CLFVBQVUsQ0FBQ2IsTUFBTSxDQUFDYyxLQUFLLENBQUNDLGVB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