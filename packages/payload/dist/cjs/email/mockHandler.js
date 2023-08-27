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
var _nodemailer = /*#__PURE__*/ _interop_require_default(require("nodemailer"));
var _defaults = require("./defaults");
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
var mockEmailHandler = function() {
    var _ref = _async_to_generator(function(emailConfig) {
        var _emailConfig, _emailConfig1, testAccount, smtpOptions;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _nodemailer.default.createTestAccount()
                    ];
                case 1:
                    testAccount = _state.sent();
                    smtpOptions = _object_spread_props(_object_spread({}, emailConfig), {
                        host: "smtp.ethereal.email",
                        port: 587,
                        secure: false,
                        fromName: ((_emailConfig = emailConfig) === null || _emailConfig === void 0 ? void 0 : _emailConfig.fromName) || _defaults.defaults.fromName,
                        fromAddress: ((_emailConfig1 = emailConfig) === null || _emailConfig1 === void 0 ? void 0 : _emailConfig1.fromAddress) || _defaults.defaults.fromAddress,
                        auth: {
                            user: testAccount.user,
                            pass: testAccount.pass
                        }
                    });
                    return [
                        2,
                        {
                            account: testAccount,
                            transport: _nodemailer.default.createTransport(smtpOptions)
                        }
                    ];
            }
        });
    });
    return function mockEmailHandler(emailConfig) {
        return _ref.apply(this, arguments);
    };
}();
var _default = mockEmailHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbWFpbC9tb2NrSGFuZGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcbmltcG9ydCB7IEVtYWlsT3B0aW9ucyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBNb2NrRW1haWxIYW5kbGVyIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IGRlZmF1bHRzIGFzIGVtYWlsRGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzJztcblxuY29uc3QgbW9ja0VtYWlsSGFuZGxlciA9IGFzeW5jIChlbWFpbENvbmZpZzogRW1haWxPcHRpb25zKTogUHJvbWlzZTxNb2NrRW1haWxIYW5kbGVyPiA9PiB7XG4gIGNvbnN0IHRlc3RBY2NvdW50ID0gYXdhaXQgbm9kZW1haWxlci5jcmVhdGVUZXN0QWNjb3VudCgpO1xuXG4gIGNvbnN0IHNtdHBPcHRpb25zID0ge1xuICAgIC4uLmVtYWlsQ29uZmlnLFxuICAgIGhvc3Q6ICdzbXRwLmV0aGVyZWFsLmVtYWlsJyxcbiAgICBwb3J0OiA1ODcsXG4gICAgc2VjdXJlOiBmYWxzZSxcbiAgICBmcm9tTmFtZTogZW1haWxDb25maWc/LmZyb21OYW1lIHx8IGVtYWlsRGVmYXVsdHMuZnJvbU5hbWUsXG4gICAgZnJvbUFkZHJlc3M6IGVtYWlsQ29uZmlnPy5mcm9tQWRkcmVzcyB8fCBlbWFpbERlZmF1bHRzLmZyb21BZGRyZXNzLFxuICAgIGF1dGg6IHtcbiAgICAgIHVzZXI6IHRlc3RBY2NvdW50LnVzZXIsXG4gICAgICBwYXNzOiB0ZXN0QWNjb3VudC5wYXNzLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhY2NvdW50OiB0ZXN0QWNjb3VudCxcbiAgICB0cmFuc3BvcnQ6IG5vZGVtYWlsZXIuY3JlYXRlVHJhbnNwb3J0KHNtdHBPcHRpb25zKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vY2tFbWFpbEhhbmRsZXI7XG4iXSwibmFtZXMiOlsibW9ja0VtYWlsSGFuZGxlciIsImVtYWlsQ29uZmlnIiwidGVzdEFjY291bnQiLCJzbXRwT3B0aW9ucyIsIm5vZGVtYWlsZXIiLCJjcmVhdGVUZXN0QWNjb3VudCIsImhvc3QiLCJwb3J0Iiwic2VjdXJlIiwiZnJvbU5hbWUiLCJlbWFpbERlZmF1bHRzIiwiZnJvbUFkZHJlc3MiLCJhdXRoIiwidXNlciIsInBhc3MiLCJhY2NvdW50IiwidHJhbnNwb3J0IiwiY3JlYXRlVHJhbnNwb3J0Il0sIm1hcHBpbmdzIjoiOzs7OytCQTRCQTs7O2VBQUE7OztpRUE1QnVCO3dCQUltQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUMsSUFBTUE7ZUFBbUIsb0JBQUEsU0FBT0M7WUFRbEJBLGNBQ0dBLGVBUlRDLGFBRUFDOzs7O29CQUZjOzt3QkFBTUMsbUJBQVUsQ0FBQ0MsaUJBQWlCOzs7b0JBQWhESCxjQUFjO29CQUVkQyxjQUFjLHdDQUNmRjt3QkFDSEssTUFBTTt3QkFDTkMsTUFBTTt3QkFDTkMsUUFBUTt3QkFDUkMsVUFBVVIsRUFBQUEsZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhUSxRQUFRLEtBQUlDLGtCQUFhLENBQUNELFFBQVE7d0JBQ3pERSxhQUFhVixFQUFBQSxnQkFBQUEseUJBQUFBLG9DQUFBQSxjQUFhVSxXQUFXLEtBQUlELGtCQUFhLENBQUNDLFdBQVc7d0JBQ2xFQyxNQUFNOzRCQUNKQyxNQUFNWCxZQUFZVyxJQUFJOzRCQUN0QkMsTUFBTVosWUFBWVksSUFBSTt3QkFDeEI7O29CQUdGOzt3QkFBTzs0QkFDTEMsU0FBU2I7NEJBQ1RjLFdBQVdaLG1CQUFVLENBQUNhLGVBQWUsQ0FBQ2Q7d0JBQ3hDOzs7O0lBQ0Y7b0JBcEJNSCxpQkFBMEJDOzs7O0lBc0JoQyxXQUFlRCJ9