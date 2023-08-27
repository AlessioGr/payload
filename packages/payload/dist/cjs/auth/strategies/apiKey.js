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
var _passportheaderapikey = /*#__PURE__*/ _interop_require_default(require("passport-headerapikey"));
var _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
var _find = /*#__PURE__*/ _interop_require_default(require("../../collections/operations/find"));
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
var _default = function(payload, config) {
    var secret = payload.secret;
    var opts = {
        header: "Authorization",
        prefix: "".concat(config.slug, " API-Key ")
    };
    // @ts-ignore
    return new (_passportheaderapikey.default.default || _passportheaderapikey.default)(opts, true, function() {
        var _ref = _async_to_generator(function(apiKey, done, req) {
            var apiKeyIndex, where, userQuery, user, err;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        apiKeyIndex = _crypto.default.createHmac("sha1", secret).update(apiKey).digest("hex");
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        where = {};
                        if (config.auth.verify) {
                            where.and = [
                                {
                                    // TODO: Search for index
                                    apiKeyIndex: {
                                        equals: apiKeyIndex
                                    }
                                },
                                {
                                    _verified: {
                                        not_equals: false
                                    }
                                }
                            ];
                        } else {
                            where.apiKeyIndex = {
                                equals: apiKeyIndex
                            };
                        }
                        return [
                            4,
                            (0, _find.default)({
                                where: where,
                                collection: {
                                    config: config
                                },
                                req: req,
                                overrideAccess: true,
                                depth: config.auth.depth
                            })
                        ];
                    case 2:
                        userQuery = _state.sent();
                        if (userQuery.docs && userQuery.docs.length > 0) {
                            user = userQuery.docs[0];
                            user.collection = config.slug;
                            user._strategy = "api-key";
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
        return function(apiKey, done, req) {
            return _ref.apply(this, arguments);
        };
    }());
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvYXBpS2V5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXNzcG9ydEFQSUtleSBmcm9tICdwYXNzcG9ydC1oZWFkZXJhcGlrZXknO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi9wYXlsb2FkJztcbmltcG9ydCBmaW5kIGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL29wZXJhdGlvbnMvZmluZCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKHBheWxvYWQ6IFBheWxvYWQsIGNvbmZpZzogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyk6IFBhc3Nwb3J0QVBJS2V5ID0+IHtcbiAgY29uc3QgeyBzZWNyZXQgfSA9IHBheWxvYWQ7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgaGVhZGVyOiAnQXV0aG9yaXphdGlvbicsXG4gICAgcHJlZml4OiBgJHtjb25maWcuc2x1Z30gQVBJLUtleSBgLFxuICB9O1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIG5ldyAoUGFzc3BvcnRBUElLZXkuZGVmYXVsdCB8fCBQYXNzcG9ydEFQSUtleSkob3B0cywgdHJ1ZSwgYXN5bmMgKGFwaUtleSwgZG9uZSwgcmVxKSA9PiB7XG4gICAgY29uc3QgYXBpS2V5SW5kZXggPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhMScsIHNlY3JldClcbiAgICAgIC51cGRhdGUoYXBpS2V5KVxuICAgICAgLmRpZ2VzdCgnaGV4Jyk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgd2hlcmU6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICAgIGlmIChjb25maWcuYXV0aC52ZXJpZnkpIHtcbiAgICAgICAgd2hlcmUuYW5kID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIFRPRE86IFNlYXJjaCBmb3IgaW5kZXhcbiAgICAgICAgICAgIGFwaUtleUluZGV4OiB7XG4gICAgICAgICAgICAgIGVxdWFsczogYXBpS2V5SW5kZXgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgX3ZlcmlmaWVkOiB7XG4gICAgICAgICAgICAgIG5vdF9lcXVhbHM6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hlcmUuYXBpS2V5SW5kZXggPSB7XG4gICAgICAgICAgZXF1YWxzOiBhcGlLZXlJbmRleCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXJRdWVyeSA9IGF3YWl0IGZpbmQoe1xuICAgICAgICB3aGVyZSxcbiAgICAgICAgY29sbGVjdGlvbjoge1xuICAgICAgICAgIGNvbmZpZyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVxOiByZXEgYXMgUGF5bG9hZFJlcXVlc3QsXG4gICAgICAgIG92ZXJyaWRlQWNjZXNzOiB0cnVlLFxuICAgICAgICBkZXB0aDogY29uZmlnLmF1dGguZGVwdGgsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHVzZXJRdWVyeS5kb2NzICYmIHVzZXJRdWVyeS5kb2NzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJRdWVyeS5kb2NzWzBdO1xuICAgICAgICB1c2VyLmNvbGxlY3Rpb24gPSBjb25maWcuc2x1ZztcbiAgICAgICAgdXNlci5fc3RyYXRlZ3kgPSAnYXBpLWtleSc7XG4gICAgICAgIGRvbmUobnVsbCwgdXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb25lKG51bGwsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRvbmUobnVsbCwgZmFsc2UpO1xuICAgIH1cbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbInBheWxvYWQiLCJjb25maWciLCJzZWNyZXQiLCJvcHRzIiwiaGVhZGVyIiwicHJlZml4Iiwic2x1ZyIsIlBhc3Nwb3J0QVBJS2V5IiwiZGVmYXVsdCIsImFwaUtleSIsImRvbmUiLCJyZXEiLCJhcGlLZXlJbmRleCIsIndoZXJlIiwidXNlclF1ZXJ5IiwidXNlciIsImVyciIsImNyeXB0byIsImNyZWF0ZUhtYWMiLCJ1cGRhdGUiLCJkaWdlc3QiLCJhdXRoIiwidmVyaWZ5IiwiYW5kIiwiZXF1YWxzIiwiX3ZlcmlmaWVkIiwibm90X2VxdWFscyIsImZpbmQiLCJjb2xsZWN0aW9uIiwib3ZlcnJpZGVBY2Nlc3MiLCJkZXB0aCIsImRvY3MiLCJsZW5ndGgiLCJfc3RyYXRlZ3kiXSwibWFwcGluZ3MiOiI7Ozs7K0JBT0E7OztlQUFBOzs7MkVBUDJCOzZEQUNSOzJEQUdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR2pCLFdBQWUsU0FBQ0EsU0FBa0JDO0lBQ2hDLElBQU0sQUFBRUMsU0FBV0YsUUFBWEU7SUFDUixJQUFNQyxPQUFPO1FBQ1hDLFFBQVE7UUFDUkMsUUFBUSxBQUFDLEdBQWMsT0FBWkosT0FBT0ssSUFBSSxFQUFDO0lBQ3pCO0lBRUEsYUFBYTtJQUNiLE9BQU8sSUFBS0MsQ0FBQUEsNkJBQWMsQ0FBQ0MsT0FBTyxJQUFJRCw2QkFBYyxBQUFELEVBQUdKLE1BQU07bUJBQU0sb0JBQUEsU0FBT00sUUFBUUMsTUFBTUM7Z0JBQy9FQyxhQUtFQyxPQW9CQUMsV0FXRUMsTUFPREM7Ozs7d0JBM0NISixjQUFjSyxlQUFNLENBQUNDLFVBQVUsQ0FBQyxRQUFRaEIsUUFDM0NpQixNQUFNLENBQUNWLFFBQ1BXLE1BQU0sQ0FBQzs7Ozs7Ozs7O3dCQUdGUCxRQUFnQyxDQUFDO3dCQUN2QyxJQUFJWixPQUFPb0IsSUFBSSxDQUFDQyxNQUFNLEVBQUU7NEJBQ3RCVCxNQUFNVSxHQUFHLEdBQUc7Z0NBQ1Y7b0NBQ0UseUJBQXlCO29DQUN6QlgsYUFBYTt3Q0FDWFksUUFBUVo7b0NBQ1Y7Z0NBQ0Y7Z0NBQ0E7b0NBQ0VhLFdBQVc7d0NBQ1RDLFlBQVk7b0NBQ2Q7Z0NBQ0Y7NkJBQ0Q7d0JBQ0gsT0FBTzs0QkFDTGIsTUFBTUQsV0FBVyxHQUFHO2dDQUNsQlksUUFBUVo7NEJBQ1Y7d0JBQ0Y7d0JBQ2tCOzs0QkFBTWUsSUFBQUEsYUFBSSxFQUFDO2dDQUMzQmQsT0FBQUE7Z0NBQ0FlLFlBQVk7b0NBQ1YzQixRQUFBQTtnQ0FDRjtnQ0FDQVUsS0FBS0E7Z0NBQ0xrQixnQkFBZ0I7Z0NBQ2hCQyxPQUFPN0IsT0FBT29CLElBQUksQ0FBQ1MsS0FBSzs0QkFDMUI7Ozt3QkFSTWhCLFlBQVk7d0JBVWxCLElBQUlBLFVBQVVpQixJQUFJLElBQUlqQixVQUFVaUIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsR0FBRzs0QkFDekNqQixPQUFPRCxVQUFVaUIsSUFBSSxDQUFDLEVBQUU7NEJBQzlCaEIsS0FBS2EsVUFBVSxHQUFHM0IsT0FBT0ssSUFBSTs0QkFDN0JTLEtBQUtrQixTQUFTLEdBQUc7NEJBQ2pCdkIsS0FBSyxNQUFNSzt3QkFDYixPQUFPOzRCQUNMTCxLQUFLLE1BQU07d0JBQ2I7Ozs7Ozt3QkFDT007d0JBQ1BOLEtBQUssTUFBTTs7Ozs7Ozs7Ozs7UUFFZjt3QkEvQ3lFRCxRQUFRQyxNQUFNQzs7OztBQWdEekYifQ==