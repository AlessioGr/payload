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
var _errors = require("../../errors");
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../executeAccess"));
var _resetLoginAttempts = require("../strategies/local/resetLoginAttempts");
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
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
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
function unlock(args) {
    return _unlock.apply(this, arguments);
}
function _unlock() {
    _unlock = _async_to_generator(function(args) {
        var _args_collection, collectionConfig, req, _args_req, payload, locale, overrideAccess, shouldCommit, options, data, user, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!Object.prototype.hasOwnProperty.call(args.data, "email")) {
                        throw new _errors.APIError("Missing email.");
                    }
                    _args_collection = args.collection, collectionConfig = _args_collection.config, req = args.req, _args_req = args.req, payload = _args_req.payload, locale = _args_req.locale, overrideAccess = args.overrideAccess;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        11,
                        ,
                        13
                    ]);
                    return [
                        4,
                        (0, _initTransaction.initTransaction)(req)
                    ];
                case 2:
                    shouldCommit = _state.sent();
                    if (!!overrideAccess) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        (0, _executeAccess.default)({
                            req: req
                        }, collectionConfig.access.unlock)
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    options = _object_spread({}, args);
                    data = options.data;
                    // /////////////////////////////////////
                    // Unlock
                    // /////////////////////////////////////
                    if (!data.email) {
                        throw new _errors.APIError("Missing email.");
                    }
                    return [
                        4,
                        req.payload.db.findOne({
                            collection: collectionConfig.slug,
                            where: {
                                email: {
                                    equals: data.email.toLowerCase()
                                }
                            },
                            locale: locale,
                            req: req
                        })
                    ];
                case 5:
                    user = _state.sent();
                    if (!user) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        (0, _resetLoginAttempts.resetLoginAttempts)({
                            req: req,
                            payload: req.payload,
                            collection: collectionConfig,
                            doc: user
                        })
                    ];
                case 6:
                    _state.sent();
                    result = true;
                    return [
                        3,
                        8
                    ];
                case 7:
                    result = null;
                    _state.label = 8;
                case 8:
                    if (!shouldCommit) return [
                        3,
                        10
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 9:
                    _state.sent();
                    _state.label = 10;
                case 10:
                    return [
                        2,
                        result
                    ];
                case 11:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 12:
                    _state.sent();
                    throw error;
                case 13:
                    return [
                        2
                    ];
            }
        });
    });
    return _unlock.apply(this, arguments);
}
var _default = unlock;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvdW5sb2NrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCBleGVjdXRlQWNjZXNzIGZyb20gJy4uL2V4ZWN1dGVBY2Nlc3MnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgcmVzZXRMb2dpbkF0dGVtcHRzIH0gZnJvbSAnLi4vc3RyYXRlZ2llcy9sb2NhbC9yZXNldExvZ2luQXR0ZW1wdHMnO1xuaW1wb3J0IHsgaW5pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2luaXRUcmFuc2FjdGlvbic7XG5pbXBvcnQgeyBraWxsVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uJztcblxuZXhwb3J0IHR5cGUgQXJncyA9IHtcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvblxuICBkYXRhOiB7XG4gICAgZW1haWw6IHN0cmluZ1xuICB9XG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVubG9jayhhcmdzOiBBcmdzKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3MuZGF0YSwgJ2VtYWlsJykpIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoJ01pc3NpbmcgZW1haWwuJyk7XG4gIH1cblxuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgIH0sXG4gICAgcmVxLFxuICAgIHJlcToge1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGxvY2FsZSxcbiAgICB9LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICB9ID0gYXJncztcblxuICB0cnkge1xuICAgIGNvbnN0IHNob3VsZENvbW1pdCA9IGF3YWl0IGluaXRUcmFuc2FjdGlvbihyZXEpO1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIC8vIEFjY2Vzc1xuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIGlmICghb3ZlcnJpZGVBY2Nlc3MpIHtcbiAgICAgIGF3YWl0IGV4ZWN1dGVBY2Nlc3MoeyByZXEgfSwgY29sbGVjdGlvbkNvbmZpZy5hY2Nlc3MudW5sb2NrKTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0geyAuLi5hcmdzIH07XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gVW5sb2NrXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgaWYgKCFkYXRhLmVtYWlsKSB7XG4gICAgICB0aHJvdyBuZXcgQVBJRXJyb3IoJ01pc3NpbmcgZW1haWwuJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLmZpbmRPbmUoe1xuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgd2hlcmU6IHsgZW1haWw6IHsgZXF1YWxzOiBkYXRhLmVtYWlsLnRvTG93ZXJDYXNlKCkgfSB9LFxuICAgICAgbG9jYWxlLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICh1c2VyKSB7XG4gICAgICBhd2FpdCByZXNldExvZ2luQXR0ZW1wdHMoe1xuICAgICAgICByZXEsXG4gICAgICAgIHBheWxvYWQ6IHJlcS5wYXlsb2FkLFxuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLFxuICAgICAgICBkb2M6IHVzZXIsXG4gICAgICB9KTtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZENvbW1pdCkgYXdhaXQgcGF5bG9hZC5kYi5jb21taXRUcmFuc2FjdGlvbihyZXEudHJhbnNhY3Rpb25JRCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVubG9jaztcbiJdLCJuYW1lcyI6WyJ1bmxvY2siLCJhcmdzIiwiY29sbGVjdGlvbkNvbmZpZyIsInJlcSIsInBheWxvYWQiLCJsb2NhbGUiLCJvdmVycmlkZUFjY2VzcyIsInNob3VsZENvbW1pdCIsIm9wdGlvbnMiLCJkYXRhIiwidXNlciIsInJlc3VsdCIsImVycm9yIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiQVBJRXJyb3IiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwiaW5pdFRyYW5zYWN0aW9uIiwiZXhlY3V0ZUFjY2VzcyIsImFjY2VzcyIsImVtYWlsIiwiZGIiLCJmaW5kT25lIiwic2x1ZyIsIndoZXJlIiwiZXF1YWxzIiwidG9Mb3dlckNhc2UiLCJyZXNldExvZ2luQXR0ZW1wdHMiLCJkb2MiLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiLCJraWxsVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBdUZBOzs7ZUFBQTs7O3NCQXZGeUI7b0VBQ0M7a0NBR1M7K0JBQ0g7K0JBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBV2pCQSxPQUFPQyxJQUFVO1dBQWpCRDs7U0FBQUE7SUFBQUEsVUFBZixvQkFBQSxTQUFzQkMsSUFBVTs4QkFPbEJDLGtCQUVWQyxnQkFFRUMsU0FDQUMsUUFFRkMsZ0JBSU1DLGNBVUFDLFNBRUVDLE1BVUZDLE1BT0ZDLFFBaUJHQzs7OztvQkEvRFQsSUFBSSxDQUFDQyxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDZixLQUFLUSxJQUFJLEVBQUUsVUFBVTt3QkFDN0QsTUFBTSxJQUFJUSxnQkFBUSxDQUFDO29CQUNyQjt1Q0FZSWhCLEtBVEZpQixZQUNVaEIsb0NBQVJpQixRQUVGaEIsTUFNRUYsS0FORkUsaUJBTUVGLEtBTEZFLEtBQ0VDLG9CQUFBQSxTQUNBQyxtQkFBQUEsUUFFRkMsaUJBQ0VMLEtBREZLOzs7Ozs7Ozs7b0JBSXFCOzt3QkFBTWMsSUFBQUEsZ0NBQWUsRUFBQ2pCOzs7b0JBQXJDSSxlQUFlO3lCQU1qQixDQUFDRCxnQkFBRDs7OztvQkFDRjs7d0JBQU1lLElBQUFBLHNCQUFhLEVBQUM7NEJBQUVsQixLQUFBQTt3QkFBSSxHQUFHRCxpQkFBaUJvQixNQUFNLENBQUN0QixNQUFNOzs7b0JBQTNEOzs7b0JBR0lRLFVBQVUsbUJBQUtQO29CQUViUSxPQUFTRCxRQUFUQztvQkFFUix3Q0FBd0M7b0JBQ3hDLFNBQVM7b0JBQ1Qsd0NBQXdDO29CQUV4QyxJQUFJLENBQUNBLEtBQUtjLEtBQUssRUFBRTt3QkFDZixNQUFNLElBQUlOLGdCQUFRLENBQUM7b0JBQ3JCO29CQUVhOzt3QkFBTWQsSUFBSUMsT0FBTyxDQUFDb0IsRUFBRSxDQUFDQyxPQUFPLENBQUM7NEJBQ3hDUCxZQUFZaEIsaUJBQWlCd0IsSUFBSTs0QkFDakNDLE9BQU87Z0NBQUVKLE9BQU87b0NBQUVLLFFBQVFuQixLQUFLYyxLQUFLLENBQUNNLFdBQVc7Z0NBQUc7NEJBQUU7NEJBQ3JEeEIsUUFBQUE7NEJBQ0FGLEtBQUFBO3dCQUNGOzs7b0JBTE1PLE9BQU87eUJBU1RBLE1BQUFBOzs7O29CQUNGOzt3QkFBTW9CLElBQUFBLHNDQUFrQixFQUFDOzRCQUN2QjNCLEtBQUFBOzRCQUNBQyxTQUFTRCxJQUFJQyxPQUFPOzRCQUNwQmMsWUFBWWhCOzRCQUNaNkIsS0FBS3JCO3dCQUNQOzs7b0JBTEE7b0JBTUFDLFNBQVM7Ozs7OztvQkFFVEEsU0FBUzs7O3lCQUdQSixjQUFBQTs7OztvQkFBYzs7d0JBQU1ILFFBQVFvQixFQUFFLENBQUNRLGlCQUFpQixDQUFDN0IsSUFBSThCLGFBQWE7OztvQkFBcEQ7OztvQkFFbEI7O3dCQUFPdEI7OztvQkFDQUM7b0JBQ1A7O3dCQUFNc0IsSUFBQUEsZ0NBQWUsRUFBQy9COzs7b0JBQXRCO29CQUNBLE1BQU1TOzs7Ozs7O0lBRVY7V0FwRWVaOztJQXNFZixXQUFlQSJ9