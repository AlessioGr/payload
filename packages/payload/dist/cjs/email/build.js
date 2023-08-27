"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return buildEmail;
    }
});
var _nodemailer = /*#__PURE__*/ _interop_require_default(require("nodemailer"));
var _types = require("../config/types");
var _errors = require("../errors");
var _mockHandler = /*#__PURE__*/ _interop_require_default(require("./mockHandler"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function handleTransport(transport, email, logger) {
    return _handleTransport.apply(this, arguments);
}
function _handleTransport() {
    _handleTransport = _async_to_generator(function(transport, email, logger) {
        var err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        transport.verify()
                    ];
                case 1:
                    _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    err = _state.sent();
                    logger.error("There is an error with the email configuration you have provided. ".concat(err));
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2,
                        _object_spread_props(_object_spread({}, email), {
                            transport: transport
                        })
                    ];
            }
        });
    });
    return _handleTransport.apply(this, arguments);
}
var ensureConfigHasFrom = function(emailConfig) {
    var _emailConfig, _emailConfig1;
    if (!((_emailConfig = emailConfig) === null || _emailConfig === void 0 ? void 0 : _emailConfig.fromName) || !((_emailConfig1 = emailConfig) === null || _emailConfig1 === void 0 ? void 0 : _emailConfig1.fromAddress)) {
        throw new _errors.InvalidConfiguration("Email fromName and fromAddress must be configured when transport is configured");
    }
};
var handleMockAccount = function() {
    var _ref = _async_to_generator(function(emailConfig, logger) {
        var mockAccount, _emailConfig, _mockAccount_account, web, user, pass, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        (0, _mockHandler.default)(emailConfig)
                    ];
                case 1:
                    mockAccount = _state.sent();
                    _mockAccount_account = mockAccount.account, web = _mockAccount_account.web, user = _mockAccount_account.user, pass = _mockAccount_account.pass;
                    if ((_emailConfig = emailConfig) === null || _emailConfig === void 0 ? void 0 : _emailConfig.logMockCredentials) {
                        logger.info("E-mail configured with mock configuration");
                        logger.info("Log into mock email provider at ".concat(web));
                        logger.info("Mock email account username: ".concat(user));
                        logger.info("Mock email account password: ".concat(pass));
                    }
                    return [
                        3,
                        3
                    ];
                case 2:
                    err = _state.sent();
                    logger.error({
                        msg: "There was a problem setting up the mock email handler",
                        err: err
                    });
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2,
                        mockAccount
                    ];
            }
        });
    });
    return function handleMockAccount(emailConfig, logger) {
        return _ref.apply(this, arguments);
    };
}();
function buildEmail(emailConfig, logger) {
    return _buildEmail.apply(this, arguments);
}
function _buildEmail() {
    _buildEmail = _async_to_generator(function(emailConfig, logger) {
        var email, transport, email1, transport1;
        return _ts_generator(this, function(_state) {
            if (!emailConfig) {
                return [
                    2,
                    handleMockAccount(emailConfig, logger)
                ];
            }
            if ((0, _types.hasTransport)(emailConfig) && emailConfig.transport) {
                ensureConfigHasFrom(emailConfig);
                email = _object_spread({}, emailConfig);
                transport = emailConfig.transport;
                return [
                    2,
                    handleTransport(transport, email, logger)
                ];
            }
            if ((0, _types.hasTransportOptions)(emailConfig) && emailConfig.transportOptions) {
                ensureConfigHasFrom(emailConfig);
                email1 = _object_spread({}, emailConfig);
                transport1 = _nodemailer.default.createTransport(emailConfig.transportOptions);
                return [
                    2,
                    handleTransport(transport1, email1, logger)
                ];
            }
            return [
                2,
                handleMockAccount(emailConfig, logger)
            ];
        });
    });
    return _buildEmail.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbWFpbC9idWlsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciwgeyBUcmFuc3BvcnRlciB9IGZyb20gJ25vZGVtYWlsZXInO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAncGlubyc7XG5pbXBvcnQgeyBFbWFpbE9wdGlvbnMsIEVtYWlsVHJhbnNwb3J0LCBoYXNUcmFuc3BvcnQsIGhhc1RyYW5zcG9ydE9wdGlvbnMgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgSW52YWxpZENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IG1vY2tIYW5kbGVyIGZyb20gJy4vbW9ja0hhbmRsZXInO1xuaW1wb3J0IHsgQnVpbGRFbWFpbFJlc3VsdCwgTW9ja0VtYWlsSGFuZGxlciB9IGZyb20gJy4vdHlwZXMnO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVUcmFuc3BvcnQodHJhbnNwb3J0OiBUcmFuc3BvcnRlciwgZW1haWw6IEVtYWlsVHJhbnNwb3J0LCBsb2dnZXI6IExvZ2dlcik6IEJ1aWxkRW1haWxSZXN1bHQge1xuICB0cnkge1xuICAgIGF3YWl0IHRyYW5zcG9ydC52ZXJpZnkoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgbG9nZ2VyLmVycm9yKFxuICAgICAgYFRoZXJlIGlzIGFuIGVycm9yIHdpdGggdGhlIGVtYWlsIGNvbmZpZ3VyYXRpb24geW91IGhhdmUgcHJvdmlkZWQuICR7ZXJyfWAsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7IC4uLmVtYWlsLCB0cmFuc3BvcnQgfTtcbn1cblxuY29uc3QgZW5zdXJlQ29uZmlnSGFzRnJvbSA9IChlbWFpbENvbmZpZzogRW1haWxPcHRpb25zKSA9PiB7XG4gIGlmICghZW1haWxDb25maWc/LmZyb21OYW1lIHx8ICFlbWFpbENvbmZpZz8uZnJvbUFkZHJlc3MpIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZENvbmZpZ3VyYXRpb24oJ0VtYWlsIGZyb21OYW1lIGFuZCBmcm9tQWRkcmVzcyBtdXN0IGJlIGNvbmZpZ3VyZWQgd2hlbiB0cmFuc3BvcnQgaXMgY29uZmlndXJlZCcpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVNb2NrQWNjb3VudCA9IGFzeW5jIChlbWFpbENvbmZpZzogRW1haWxPcHRpb25zLCBsb2dnZXI6IExvZ2dlcikgPT4ge1xuICBsZXQgbW9ja0FjY291bnQ6IE1vY2tFbWFpbEhhbmRsZXI7XG4gIHRyeSB7XG4gICAgbW9ja0FjY291bnQgPSBhd2FpdCBtb2NrSGFuZGxlcihlbWFpbENvbmZpZyk7XG4gICAgY29uc3QgeyBhY2NvdW50OiB7IHdlYiwgdXNlciwgcGFzcyB9IH0gPSBtb2NrQWNjb3VudDtcbiAgICBpZiAoZW1haWxDb25maWc/LmxvZ01vY2tDcmVkZW50aWFscykge1xuICAgICAgbG9nZ2VyLmluZm8oJ0UtbWFpbCBjb25maWd1cmVkIHdpdGggbW9jayBjb25maWd1cmF0aW9uJyk7XG4gICAgICBsb2dnZXIuaW5mbyhgTG9nIGludG8gbW9jayBlbWFpbCBwcm92aWRlciBhdCAke3dlYn1gKTtcbiAgICAgIGxvZ2dlci5pbmZvKGBNb2NrIGVtYWlsIGFjY291bnQgdXNlcm5hbWU6ICR7dXNlcn1gKTtcbiAgICAgIGxvZ2dlci5pbmZvKGBNb2NrIGVtYWlsIGFjY291bnQgcGFzc3dvcmQ6ICR7cGFzc31gKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGxvZ2dlci5lcnJvcih7IG1zZzogJ1RoZXJlIHdhcyBhIHByb2JsZW0gc2V0dGluZyB1cCB0aGUgbW9jayBlbWFpbCBoYW5kbGVyJywgZXJyIH0pO1xuICB9XG4gIHJldHVybiBtb2NrQWNjb3VudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGJ1aWxkRW1haWwoZW1haWxDb25maWc6IEVtYWlsT3B0aW9ucyB8IHVuZGVmaW5lZCwgbG9nZ2VyOiBMb2dnZXIpOiBCdWlsZEVtYWlsUmVzdWx0IHtcbiAgaWYgKCFlbWFpbENvbmZpZykge1xuICAgIHJldHVybiBoYW5kbGVNb2NrQWNjb3VudChlbWFpbENvbmZpZywgbG9nZ2VyKTtcbiAgfVxuXG4gIGlmIChoYXNUcmFuc3BvcnQoZW1haWxDb25maWcpICYmIGVtYWlsQ29uZmlnLnRyYW5zcG9ydCkge1xuICAgIGVuc3VyZUNvbmZpZ0hhc0Zyb20oZW1haWxDb25maWcpO1xuICAgIGNvbnN0IGVtYWlsID0geyAuLi5lbWFpbENvbmZpZyB9O1xuICAgIGNvbnN0IHsgdHJhbnNwb3J0IH0gOiB7dHJhbnNwb3J0OiBUcmFuc3BvcnRlcn0gPSBlbWFpbENvbmZpZztcbiAgICByZXR1cm4gaGFuZGxlVHJhbnNwb3J0KHRyYW5zcG9ydCwgZW1haWwsIGxvZ2dlcik7XG4gIH1cblxuICBpZiAoaGFzVHJhbnNwb3J0T3B0aW9ucyhlbWFpbENvbmZpZykgJiYgZW1haWxDb25maWcudHJhbnNwb3J0T3B0aW9ucykge1xuICAgIGVuc3VyZUNvbmZpZ0hhc0Zyb20oZW1haWxDb25maWcpO1xuICAgIGNvbnN0IGVtYWlsID0geyAuLi5lbWFpbENvbmZpZyB9IGFzIEVtYWlsVHJhbnNwb3J0O1xuICAgIGNvbnN0IHRyYW5zcG9ydCA9IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KGVtYWlsQ29uZmlnLnRyYW5zcG9ydE9wdGlvbnMpO1xuICAgIHJldHVybiBoYW5kbGVUcmFuc3BvcnQodHJhbnNwb3J0LCBlbWFpbCwgbG9nZ2VyKTtcbiAgfVxuXG4gIHJldHVybiBoYW5kbGVNb2NrQWNjb3VudChlbWFpbENvbmZpZywgbG9nZ2VyKTtcbn1cbiJdLCJuYW1lcyI6WyJidWlsZEVtYWlsIiwiaGFuZGxlVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiZW1haWwiLCJsb2dnZXIiLCJlcnIiLCJ2ZXJpZnkiLCJlcnJvciIsImVuc3VyZUNvbmZpZ0hhc0Zyb20iLCJlbWFpbENvbmZpZyIsImZyb21OYW1lIiwiZnJvbUFkZHJlc3MiLCJJbnZhbGlkQ29uZmlndXJhdGlvbiIsImhhbmRsZU1vY2tBY2NvdW50IiwibW9ja0FjY291bnQiLCJ3ZWIiLCJ1c2VyIiwicGFzcyIsIm1vY2tIYW5kbGVyIiwiYWNjb3VudCIsImxvZ01vY2tDcmVkZW50aWFscyIsImluZm8iLCJtc2ciLCJoYXNUcmFuc3BvcnQiLCJoYXNUcmFuc3BvcnRPcHRpb25zIiwidHJhbnNwb3J0T3B0aW9ucyIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUcmFuc3BvcnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBMENBOzs7ZUFBOEJBOzs7aUVBMUNVO3FCQUV3QztzQkFDM0M7a0VBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBR1RDLGdCQUFnQkMsU0FBc0IsRUFBRUMsS0FBcUIsRUFBRUMsTUFBYztXQUE3RUg7O1NBQUFBO0lBQUFBLG1CQUFmLG9CQUFBLFNBQStCQyxTQUFzQixFQUFFQyxLQUFxQixFQUFFQyxNQUFjO1lBR2pGQzs7Ozs7Ozs7OztvQkFEUDs7d0JBQU1ILFVBQVVJLE1BQU07OztvQkFBdEI7Ozs7OztvQkFDT0Q7b0JBQ1BELE9BQU9HLEtBQUssQ0FDVixBQUFDLHFFQUF3RSxPQUFKRjs7Ozs7O29CQUl6RTs7d0JBQU8sd0NBQUtGOzRCQUFPRCxXQUFBQTs7Ozs7SUFDckI7V0FWZUQ7O0FBWWYsSUFBTU8sc0JBQXNCLFNBQUNDO1FBQ3RCQSxjQUEwQkE7SUFBL0IsSUFBSSxHQUFDQSxlQUFBQSx5QkFBQUEsbUNBQUFBLGFBQWFDLFFBQVEsS0FBSSxHQUFDRCxnQkFBQUEseUJBQUFBLG9DQUFBQSxjQUFhRSxXQUFXLEdBQUU7UUFDdkQsTUFBTSxJQUFJQyw0QkFBb0IsQ0FBQztJQUNqQztBQUNGO0FBRUEsSUFBTUM7ZUFBb0Isb0JBQUEsU0FBT0osYUFBMkJMO1lBQ3REVSxhQUlFTCxvQ0FEZU0sS0FBS0MsTUFBTUMsTUFPdkJaOzs7Ozs7Ozs7O29CQVJPOzt3QkFBTWEsSUFBQUEsb0JBQVcsRUFBQ1Q7OztvQkFBaENLLGNBQWM7MkNBQzJCQSxZQUFqQ0ssU0FBV0osMkJBQUFBLEtBQUtDLDRCQUFBQSxNQUFNQyw0QkFBQUE7b0JBQzlCLEtBQUlSLGVBQUFBLHlCQUFBQSxtQ0FBQUEsYUFBYVcsa0JBQWtCLEVBQUU7d0JBQ25DaEIsT0FBT2lCLElBQUksQ0FBQzt3QkFDWmpCLE9BQU9pQixJQUFJLENBQUMsQUFBQyxtQ0FBc0MsT0FBSk47d0JBQy9DWCxPQUFPaUIsSUFBSSxDQUFDLEFBQUMsZ0NBQW9DLE9BQUxMO3dCQUM1Q1osT0FBT2lCLElBQUksQ0FBQyxBQUFDLGdDQUFvQyxPQUFMSjtvQkFDOUM7Ozs7OztvQkFDT1o7b0JBQ1BELE9BQU9HLEtBQUssQ0FBQzt3QkFBRWUsS0FBSzt3QkFBeURqQixLQUFBQTtvQkFBSTs7Ozs7O29CQUVuRjs7d0JBQU9TOzs7O0lBQ1Q7b0JBZk1ELGtCQUEyQkosYUFBMkJMOzs7O1NBaUI5QkosV0FBV1MsV0FBcUMsRUFBRUwsTUFBYztXQUFoRUo7O1NBQUFBO0lBQUFBLGNBQWYsb0JBQUEsU0FBMEJTLFdBQXFDLEVBQUVMLE1BQWM7WUFPcEZELE9BQ0VELFdBTUZDLFFBQ0FEOztZQWRSLElBQUksQ0FBQ08sYUFBYTtnQkFDaEI7O29CQUFPSSxrQkFBa0JKLGFBQWFMOztZQUN4QztZQUVBLElBQUltQixJQUFBQSxtQkFBWSxFQUFDZCxnQkFBZ0JBLFlBQVlQLFNBQVMsRUFBRTtnQkFDdERNLG9CQUFvQkM7Z0JBQ2ROLFFBQVEsbUJBQUtNO2dCQUNYUCxZQUF5Q08sWUFBekNQO2dCQUNSOztvQkFBT0QsZ0JBQWdCQyxXQUFXQyxPQUFPQzs7WUFDM0M7WUFFQSxJQUFJb0IsSUFBQUEsMEJBQW1CLEVBQUNmLGdCQUFnQkEsWUFBWWdCLGdCQUFnQixFQUFFO2dCQUNwRWpCLG9CQUFvQkM7Z0JBQ2ROLFNBQVEsbUJBQUtNO2dCQUNiUCxhQUFZd0IsbUJBQVUsQ0FBQ0MsZUFBZSxDQUFDbEIsWUFBWWdCLGdCQUFnQjtnQkFDekU7O29CQUFPeEIsZ0JBQWdCQyxZQUFXQyxRQUFPQzs7WUFDM0M7WUFFQTs7Z0JBQU9TLGtCQUFrQkosYUFBYUw7OztJQUN4QztXQXBCOEJKIn0=