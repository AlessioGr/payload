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
function verifyEmail(args) {
    return _verifyEmail.apply(this, arguments);
}
function _verifyEmail() {
    _verifyEmail = _async_to_generator(function(args) {
        var req, token, collection, user;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req = args.req, token = args.token, collection = args.collection;
                    if (!Object.prototype.hasOwnProperty.call(args, "token")) {
                        throw new _errors.APIError("Missing required data.", _httpstatus.default.BAD_REQUEST);
                    }
                    return [
                        4,
                        req.payload.db.findOne({
                            collection: collection.config.slug,
                            where: {
                                _verificationToken: {
                                    equals: token
                                }
                            }
                        })
                    ];
                case 1:
                    user = _state.sent();
                    if (!user) throw new _errors.APIError("Verification token is invalid.", _httpstatus.default.BAD_REQUEST);
                    if (user && user._verified === true) throw new _errors.APIError("This account has already been activated.", _httpstatus.default.ACCEPTED);
                    return [
                        4,
                        req.payload.db.updateOne({
                            collection: collection.config.slug,
                            id: user.id,
                            data: {
                                _verified: true,
                                _verificationToken: null
                            },
                            req: req
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        true
                    ];
            }
        });
    });
    return _verifyEmail.apply(this, arguments);
}
var _default = verifyEmail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvdmVyaWZ5RW1haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBBcmdzID0ge1xuICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICB0b2tlbjogc3RyaW5nXG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbn1cblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RW1haWwoYXJnczogQXJncyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICBjb25zdCB7XG4gICAgcmVxLFxuICAgIHRva2VuLFxuICAgIGNvbGxlY3Rpb24sXG4gIH0gPSBhcmdzO1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmdzLCAndG9rZW4nKSkge1xuICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyByZXF1aXJlZCBkYXRhLicsIGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICB9XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHJlcS5wYXlsb2FkLmRiLmZpbmRPbmU8YW55Pih7XG4gICAgY29sbGVjdGlvbjogY29sbGVjdGlvbi5jb25maWcuc2x1ZyxcbiAgICB3aGVyZToge1xuICAgICAgX3ZlcmlmaWNhdGlvblRva2VuOiB7IGVxdWFsczogdG9rZW4gfSxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXVzZXIpIHRocm93IG5ldyBBUElFcnJvcignVmVyaWZpY2F0aW9uIHRva2VuIGlzIGludmFsaWQuJywgaHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gIGlmICh1c2VyICYmIHVzZXIuX3ZlcmlmaWVkID09PSB0cnVlKSB0aHJvdyBuZXcgQVBJRXJyb3IoJ1RoaXMgYWNjb3VudCBoYXMgYWxyZWFkeSBiZWVuIGFjdGl2YXRlZC4nLCBodHRwU3RhdHVzLkFDQ0VQVEVEKTtcblxuICBhd2FpdCByZXEucGF5bG9hZC5kYi51cGRhdGVPbmUoe1xuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24uY29uZmlnLnNsdWcsXG4gICAgaWQ6IHVzZXIuaWQsXG4gICAgZGF0YToge1xuICAgICAgX3ZlcmlmaWVkOiB0cnVlLFxuICAgICAgX3ZlcmlmaWNhdGlvblRva2VuOiBudWxsLFxuICAgIH0sXG4gICAgcmVxLFxuICB9KTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5RW1haWw7XG4iXSwibmFtZXMiOlsidmVyaWZ5RW1haWwiLCJhcmdzIiwicmVxIiwidG9rZW4iLCJjb2xsZWN0aW9uIiwidXNlciIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkFQSUVycm9yIiwiaHR0cFN0YXR1cyIsIkJBRF9SRVFVRVNUIiwicGF5bG9hZCIsImRiIiwiZmluZE9uZSIsImNvbmZpZyIsInNsdWciLCJ3aGVyZSIsIl92ZXJpZmljYXRpb25Ub2tlbiIsImVxdWFscyIsIl92ZXJpZmllZCIsIkFDQ0VQVEVEIiwidXBkYXRlT25lIiwiaWQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7OytCQTRDQTs7O2VBQUE7OztpRUE1Q3VCO3NCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBVVZBLFlBQVlDLElBQVU7V0FBdEJEOztTQUFBQTtJQUFBQSxlQUFmLG9CQUFBLFNBQTJCQyxJQUFVO1lBRWpDQyxLQUNBQyxPQUNBQyxZQU1JQzs7OztvQkFSSkgsTUFHRUQsS0FIRkMsS0FDQUMsUUFFRUYsS0FGRkUsT0FDQUMsYUFDRUgsS0FERkc7b0JBRUYsSUFBSSxDQUFDRSxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDUixNQUFNLFVBQVU7d0JBQ3hELE1BQU0sSUFBSVMsZ0JBQVEsQ0FBQywwQkFBMEJDLG1CQUFVLENBQUNDLFdBQVc7b0JBQ3JFO29CQUVhOzt3QkFBTVYsSUFBSVcsT0FBTyxDQUFDQyxFQUFFLENBQUNDLE9BQU8sQ0FBTTs0QkFDN0NYLFlBQVlBLFdBQVdZLE1BQU0sQ0FBQ0MsSUFBSTs0QkFDbENDLE9BQU87Z0NBQ0xDLG9CQUFvQjtvQ0FBRUMsUUFBUWpCO2dDQUFNOzRCQUN0Qzt3QkFDRjs7O29CQUxNRSxPQUFPO29CQU9iLElBQUksQ0FBQ0EsTUFBTSxNQUFNLElBQUlLLGdCQUFRLENBQUMsa0NBQWtDQyxtQkFBVSxDQUFDQyxXQUFXO29CQUN0RixJQUFJUCxRQUFRQSxLQUFLZ0IsU0FBUyxLQUFLLE1BQU0sTUFBTSxJQUFJWCxnQkFBUSxDQUFDLDRDQUE0Q0MsbUJBQVUsQ0FBQ1csUUFBUTtvQkFFdkg7O3dCQUFNcEIsSUFBSVcsT0FBTyxDQUFDQyxFQUFFLENBQUNTLFNBQVMsQ0FBQzs0QkFDN0JuQixZQUFZQSxXQUFXWSxNQUFNLENBQUNDLElBQUk7NEJBQ2xDTyxJQUFJbkIsS0FBS21CLEVBQUU7NEJBQ1hDLE1BQU07Z0NBQ0pKLFdBQVc7Z0NBQ1hGLG9CQUFvQjs0QkFDdEI7NEJBQ0FqQixLQUFBQTt3QkFDRjs7O29CQVJBO29CQVVBOzt3QkFBTzs7OztJQUNUO1dBL0JlRjs7SUFpQ2YsV0FBZUEifQ==