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
import webpack from "webpack";
import { getProdConfig } from "../configs/prod";
export var buildAdmin = function() {
    var _ref = _async_to_generator(function(param) {
        var payloadConfig, webpackConfig;
        return _ts_generator(this, function(_state) {
            payloadConfig = param.payloadConfig;
            try {
                webpackConfig = getProdConfig(payloadConfig);
                webpack(webpackConfig, function(err, stats) {
                    if (err || stats.hasErrors()) {
                        // Handle errors here
                        if (stats) {
                            console.error(stats.toString({
                                chunks: false,
                                colors: true
                            }));
                        } else {
                            console.error(err.message);
                        }
                    }
                });
            } catch (err) {
                console.error(err);
                throw new Error("Error: there was an error building the webpack prod config.");
            }
            return [
                2
            ];
        });
    });
    return function buildAdmin(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL3NjcmlwdHMvYnVpbGQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgeyBnZXRQcm9kQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlncy9wcm9kJztcbmltcG9ydCB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy90eXBlcyc7XG5cbnR5cGUgQnVpbGRBZG1pblR5cGUgPSAob3B0aW9uczogeyBwYXlsb2FkQ29uZmlnOiBTYW5pdGl6ZWRDb25maWcgfSkgPT4gUHJvbWlzZTx2b2lkPjtcbmV4cG9ydCBjb25zdCBidWlsZEFkbWluOiBCdWlsZEFkbWluVHlwZSA9IGFzeW5jICh7IHBheWxvYWRDb25maWcgfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHdlYnBhY2tDb25maWcgPSBnZXRQcm9kQ29uZmlnKHBheWxvYWRDb25maWcpO1xuICAgIHdlYnBhY2sod2VicGFja0NvbmZpZywgKGVyciwgc3RhdHMpID0+IHtcbiAgICAgIGlmIChlcnIgfHwgc3RhdHMuaGFzRXJyb3JzKCkpIHtcbiAgICAgICAgLy8gSGFuZGxlIGVycm9ycyBoZXJlXG5cbiAgICAgICAgaWYgKHN0YXRzKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihzdGF0cy50b1N0cmluZyh7XG4gICAgICAgICAgICBjaHVua3M6IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JzOiB0cnVlLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogdGhlcmUgd2FzIGFuIGVycm9yIGJ1aWxkaW5nIHRoZSB3ZWJwYWNrIHByb2QgY29uZmlnLicpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIndlYnBhY2siLCJnZXRQcm9kQ29uZmlnIiwiYnVpbGRBZG1pbiIsInBheWxvYWRDb25maWciLCJ3ZWJwYWNrQ29uZmlnIiwiZXJyIiwic3RhdHMiLCJoYXNFcnJvcnMiLCJjb25zb2xlIiwiZXJyb3IiLCJ0b1N0cmluZyIsImNodW5rcyIsImNvbG9ycyIsIm1lc3NhZ2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLGFBQWEsVUFBVTtBQUM5QixTQUFTQyxhQUFhLFFBQVEsa0JBQWtCO0FBSWhELE9BQU8sSUFBTUM7ZUFBNkIsb0JBQUE7WUFBU0MsZUFFekNDOztZQUZ5Q0Qsc0JBQUFBO1lBQ2pELElBQUk7Z0JBQ0lDLGdCQUFnQkgsY0FBY0U7Z0JBQ3BDSCxRQUFRSSxlQUFlLFNBQUNDLEtBQUtDO29CQUMzQixJQUFJRCxPQUFPQyxNQUFNQyxTQUFTLElBQUk7d0JBQzVCLHFCQUFxQjt3QkFFckIsSUFBSUQsT0FBTzs0QkFDVEUsUUFBUUMsS0FBSyxDQUFDSCxNQUFNSSxRQUFRLENBQUM7Z0NBQzNCQyxRQUFRO2dDQUNSQyxRQUFROzRCQUNWO3dCQUNGLE9BQU87NEJBQ0xKLFFBQVFDLEtBQUssQ0FBQ0osSUFBSVEsT0FBTzt3QkFDM0I7b0JBQ0Y7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9SLEtBQUs7Z0JBQ1pHLFFBQVFDLEtBQUssQ0FBQ0o7Z0JBQ2QsTUFBTSxJQUFJUyxNQUFNO1lBQ2xCOzs7OztJQUNGO29CQXJCYVo7OztJQXFCWCJ9