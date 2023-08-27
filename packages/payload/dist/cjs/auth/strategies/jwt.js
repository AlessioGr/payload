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
var _passportjwt = /*#__PURE__*/ _interop_require_default(require("passport-jwt"));
var _getExtractJWT = /*#__PURE__*/ _interop_require_default(require("../getExtractJWT"));
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
var JwtStrategy = _passportjwt.default.Strategy;
var _default = function(param) {
    var secret = param.secret, config = param.config, collections = param.collections;
    var opts = {
        passReqToCallback: true,
        jwtFromRequest: (0, _getExtractJWT.default)(config),
        secretOrKey: secret
    };
    return new JwtStrategy(opts, function() {
        var _ref = _async_to_generator(function(req, token, done) {
            var collection, parsedURL, isGraphQL, user, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (req.user) {
                            done(null, req.user);
                        }
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        collection = collections[token.collection];
                        parsedURL = _url.default.parse(req.url);
                        isGraphQL = parsedURL.pathname === config.routes.graphQL;
                        return [
                            4,
                            req.payload.findByID({
                                id: token.id,
                                collection: token.collection,
                                req: req,
                                depth: isGraphQL ? 0 : collection.config.auth.depth
                            })
                        ];
                    case 2:
                        user = _state.sent();
                        if (user && (!collection.config.auth.verify || user._verified)) {
                            user.collection = collection.config.slug;
                            user._strategy = "local-jwt";
                            done(null, user);
                        } else {
                            done(null, false);
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        err = _state.sent();
                        done(null, false);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function(req, token, done) {
            return _ref.apply(this, arguments);
        };
    }());
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvand0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCBwYXNzcG9ydEp3dCwgeyBTdHJhdGVneU9wdGlvbnMgfSBmcm9tICdwYXNzcG9ydC1qd3QnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgYXMgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ3Bhc3Nwb3J0LXN0cmF0ZWd5JztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi9wYXlsb2FkJztcbmltcG9ydCBnZXRFeHRyYWN0SldUIGZyb20gJy4uL2dldEV4dHJhY3RKV1QnO1xuXG5jb25zdCBKd3RTdHJhdGVneSA9IHBhc3Nwb3J0Snd0LlN0cmF0ZWd5O1xuXG5leHBvcnQgZGVmYXVsdCAoeyBzZWNyZXQsIGNvbmZpZywgY29sbGVjdGlvbnMgfTogUGF5bG9hZCk6IFBhc3Nwb3J0U3RyYXRlZ3kgPT4ge1xuICBjb25zdCBvcHRzOiBTdHJhdGVneU9wdGlvbnMgPSB7XG4gICAgcGFzc1JlcVRvQ2FsbGJhY2s6IHRydWUsXG4gICAgand0RnJvbVJlcXVlc3Q6IGdldEV4dHJhY3RKV1QoY29uZmlnKSxcbiAgICBzZWNyZXRPcktleTogc2VjcmV0LFxuICB9O1xuXG4gIHJldHVybiBuZXcgSnd0U3RyYXRlZ3kob3B0cywgYXN5bmMgKHJlcSwgdG9rZW4sIGRvbmUpID0+IHtcbiAgICBpZiAocmVxLnVzZXIpIHtcbiAgICAgIGRvbmUobnVsbCwgcmVxLnVzZXIpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb2xsZWN0aW9uID0gY29sbGVjdGlvbnNbdG9rZW4uY29sbGVjdGlvbl07XG5cbiAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IHVybC5wYXJzZShyZXEudXJsKTtcbiAgICAgIGNvbnN0IGlzR3JhcGhRTCA9IHBhcnNlZFVSTC5wYXRobmFtZSA9PT0gY29uZmlnLnJvdXRlcy5ncmFwaFFMO1xuXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxLnBheWxvYWQuZmluZEJ5SUQoe1xuICAgICAgICBpZDogdG9rZW4uaWQsXG4gICAgICAgIGNvbGxlY3Rpb246IHRva2VuLmNvbGxlY3Rpb24sXG4gICAgICAgIHJlcSxcbiAgICAgICAgZGVwdGg6IGlzR3JhcGhRTCA/IDAgOiBjb2xsZWN0aW9uLmNvbmZpZy5hdXRoLmRlcHRoLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh1c2VyICYmICghY29sbGVjdGlvbi5jb25maWcuYXV0aC52ZXJpZnkgfHwgdXNlci5fdmVyaWZpZWQpKSB7XG4gICAgICAgIHVzZXIuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uY29uZmlnLnNsdWc7XG4gICAgICAgIHVzZXIuX3N0cmF0ZWd5ID0gJ2xvY2FsLWp3dCc7XG4gICAgICAgIGRvbmUobnVsbCwgdXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKG51bGwsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRvbmUobnVsbCwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkp3dFN0cmF0ZWd5IiwicGFzc3BvcnRKd3QiLCJTdHJhdGVneSIsInNlY3JldCIsImNvbmZpZyIsImNvbGxlY3Rpb25zIiwib3B0cyIsInBhc3NSZXFUb0NhbGxiYWNrIiwiand0RnJvbVJlcXVlc3QiLCJnZXRFeHRyYWN0SldUIiwic2VjcmV0T3JLZXkiLCJyZXEiLCJ0b2tlbiIsImRvbmUiLCJjb2xsZWN0aW9uIiwicGFyc2VkVVJMIiwiaXNHcmFwaFFMIiwidXNlciIsImVyciIsInVybCIsInBhcnNlIiwicGF0aG5hbWUiLCJyb3V0ZXMiLCJncmFwaFFMIiwicGF5bG9hZCIsImZpbmRCeUlEIiwiaWQiLCJkZXB0aCIsImF1dGgiLCJ2ZXJpZnkiLCJfdmVyaWZpZWQiLCJzbHVnIiwiX3N0cmF0ZWd5Il0sIm1hcHBpbmdzIjoiOzs7OytCQVFBOzs7ZUFBQTs7OzBEQVJnQjtrRUFDNkI7b0VBR25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGNBQWNDLG9CQUFXLENBQUNDLFFBQVE7SUFFeEMsV0FBZTtRQUFHQyxlQUFBQSxRQUFRQyxlQUFBQSxRQUFRQyxvQkFBQUE7SUFDaEMsSUFBTUMsT0FBd0I7UUFDNUJDLG1CQUFtQjtRQUNuQkMsZ0JBQWdCQyxJQUFBQSxzQkFBYSxFQUFDTDtRQUM5Qk0sYUFBYVA7SUFDZjtJQUVBLE9BQU8sSUFBSUgsWUFBWU07bUJBQU0sb0JBQUEsU0FBT0ssS0FBS0MsT0FBT0M7Z0JBTXRDQyxZQUVBQyxXQUNBQyxXQUVBQyxNQWNDQzs7Ozt3QkF4QlQsSUFBSVAsSUFBSU0sSUFBSSxFQUFFOzRCQUNaSixLQUFLLE1BQU1GLElBQUlNLElBQUk7d0JBQ3JCOzs7Ozs7Ozs7d0JBR1FILGFBQWFULFdBQVcsQ0FBQ08sTUFBTUUsVUFBVSxDQUFDO3dCQUUxQ0MsWUFBWUksWUFBRyxDQUFDQyxLQUFLLENBQUNULElBQUlRLEdBQUc7d0JBQzdCSCxZQUFZRCxVQUFVTSxRQUFRLEtBQUtqQixPQUFPa0IsTUFBTSxDQUFDQyxPQUFPO3dCQUVqRDs7NEJBQU1aLElBQUlhLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO2dDQUN0Q0MsSUFBSWQsTUFBTWMsRUFBRTtnQ0FDWlosWUFBWUYsTUFBTUUsVUFBVTtnQ0FDNUJILEtBQUFBO2dDQUNBZ0IsT0FBT1gsWUFBWSxJQUFJRixXQUFXVixNQUFNLENBQUN3QixJQUFJLENBQUNELEtBQUs7NEJBQ3JEOzs7d0JBTE1WLE9BQU87d0JBT2IsSUFBSUEsUUFBUyxDQUFBLENBQUNILFdBQVdWLE1BQU0sQ0FBQ3dCLElBQUksQ0FBQ0MsTUFBTSxJQUFJWixLQUFLYSxTQUFTLEFBQUQsR0FBSTs0QkFDOURiLEtBQUtILFVBQVUsR0FBR0EsV0FBV1YsTUFBTSxDQUFDMkIsSUFBSTs0QkFDeENkLEtBQUtlLFNBQVMsR0FBRzs0QkFDakJuQixLQUFLLE1BQU1JO3dCQUNiLE9BQU87NEJBQ0xKLEtBQUssTUFBTTt3QkFDYjs7Ozs7O3dCQUNPSzt3QkFDUEwsS0FBSyxNQUFNOzs7Ozs7Ozs7OztRQUVmO3dCQTVCb0NGLEtBQUtDLE9BQU9DOzs7O0FBNkJsRCJ9