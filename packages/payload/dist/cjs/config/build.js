/* eslint-disable no-use-before-define */ /* eslint-disable no-nested-ternary */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildConfig", {
    enumerable: true,
    get: function() {
        return buildConfig;
    }
});
var _sanitize = require("./sanitize");
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
function buildConfig(config) {
    return _buildConfig.apply(this, arguments);
}
function _buildConfig() {
    _buildConfig = _async_to_generator(function(config) {
        var configAfterPlugins, sanitizedConfig;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!Array.isArray(config.plugins)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        config.plugins.reduce(function() {
                            var _ref = _async_to_generator(function(acc, plugin) {
                                var configAfterPlugin;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                acc
                                            ];
                                        case 1:
                                            configAfterPlugin = _state.sent();
                                            return [
                                                2,
                                                plugin(configAfterPlugin)
                                            ];
                                    }
                                });
                            });
                            return function(acc, plugin) {
                                return _ref.apply(this, arguments);
                            };
                        }(), Promise.resolve(config))
                    ];
                case 1:
                    configAfterPlugins = _state.sent();
                    sanitizedConfig = (0, _sanitize.sanitizeConfig)(configAfterPlugins);
                    return [
                        2,
                        sanitizedConfig
                    ];
                case 2:
                    return [
                        2,
                        (0, _sanitize.sanitizeConfig)(config)
                    ];
            }
        });
    });
    return _buildConfig.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvYnVpbGQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgeyBDb25maWcsIFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgc2FuaXRpemVDb25maWcgfSBmcm9tICcuL3Nhbml0aXplJztcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQnVpbGRzIGFuZCB2YWxpZGF0ZXMgUGF5bG9hZCBjb25maWd1cmF0aW9uXG4gKiBAcGFyYW0gY29uZmlnIFBheWxvYWQgQ29uZmlnXG4gKiBAcmV0dXJucyBCdWlsdCBhbmQgc2FuaXRpemVkIFBheWxvYWQgQ29uZmlnXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBidWlsZENvbmZpZyhjb25maWc6IENvbmZpZyk6IFByb21pc2U8U2FuaXRpemVkQ29uZmlnPiB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy5wbHVnaW5zKSkge1xuICAgIGNvbnN0IGNvbmZpZ0FmdGVyUGx1Z2lucyA9IGF3YWl0IGNvbmZpZy5wbHVnaW5zLnJlZHVjZShcbiAgICAgIGFzeW5jIChhY2MsIHBsdWdpbikgPT4ge1xuICAgICAgICBjb25zdCBjb25maWdBZnRlclBsdWdpbiA9IGF3YWl0IGFjYztcbiAgICAgICAgcmV0dXJuIHBsdWdpbihjb25maWdBZnRlclBsdWdpbik7XG4gICAgICB9LFxuICAgICAgUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyksXG4gICAgKTtcblxuICAgIGNvbnN0IHNhbml0aXplZENvbmZpZyA9IHNhbml0aXplQ29uZmlnKGNvbmZpZ0FmdGVyUGx1Z2lucyk7XG5cbiAgICByZXR1cm4gc2FuaXRpemVkQ29uZmlnO1xuICB9XG5cbiAgcmV0dXJuIHNhbml0aXplQ29uZmlnKGNvbmZpZyk7XG59XG4iXSwibmFtZXMiOlsiYnVpbGRDb25maWciLCJjb25maWciLCJjb25maWdBZnRlclBsdWdpbnMiLCJzYW5pdGl6ZWRDb25maWciLCJBcnJheSIsImlzQXJyYXkiLCJwbHVnaW5zIiwicmVkdWNlIiwiYWNjIiwicGx1Z2luIiwiY29uZmlnQWZ0ZXJQbHVnaW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNhbml0aXplQ29uZmlnIl0sIm1hcHBpbmdzIjoiQUFBQSx1Q0FBdUMsR0FDdkMsb0NBQW9DOzs7OytCQVNkQTs7O2VBQUFBOzs7d0JBUFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBT1RBLFlBQVlDLE1BQWM7V0FBMUJEOztTQUFBQTtJQUFBQSxlQUFmLG9CQUFBLFNBQTJCQyxNQUFjO1lBRXRDQyxvQkFRQUM7Ozs7eUJBVEpDLE1BQU1DLE9BQU8sQ0FBQ0osT0FBT0ssT0FBTyxHQUE1QkY7Ozs7b0JBQ3lCOzt3QkFBTUgsT0FBT0ssT0FBTyxDQUFDQyxNQUFNO3VDQUNwRCxvQkFBQSxTQUFPQyxLQUFLQztvQ0FDSkM7Ozs7NENBQW9COztnREFBTUY7Ozs0Q0FBMUJFLG9CQUFvQjs0Q0FDMUI7O2dEQUFPRCxPQUFPQzs7Ozs0QkFDaEI7NENBSE9GLEtBQUtDOzs7NkJBSVpFLFFBQVFDLE9BQU8sQ0FBQ1g7OztvQkFMWkMscUJBQXFCO29CQVFyQkMsa0JBQWtCVSxJQUFBQSx3QkFBYyxFQUFDWDtvQkFFdkM7O3dCQUFPQzs7O29CQUdUOzt3QkFBT1UsSUFBQUEsd0JBQWMsRUFBQ1o7Ozs7SUFDeEI7V0FoQnNCRCJ9