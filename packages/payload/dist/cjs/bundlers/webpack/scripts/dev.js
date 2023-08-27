"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "devAdmin", {
    enumerable: true,
    get: function() {
        return devAdmin;
    }
});
var _webpack = /*#__PURE__*/ _interop_require_default(require("webpack"));
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _webpackdevmiddleware = /*#__PURE__*/ _interop_require_default(require("webpack-dev-middleware"));
var _webpackhotmiddleware = /*#__PURE__*/ _interop_require_default(require("webpack-hot-middleware"));
var _connecthistoryapifallback = /*#__PURE__*/ _interop_require_default(require("connect-history-api-fallback"));
var _dev = require("../configs/dev");
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
var router = _express.default.Router();
var devAdmin = function() {
    var _ref = _async_to_generator(function(param) {
        var payload, webpackConfig, compiler;
        return _ts_generator(this, function(_state) {
            payload = param.payload;
            router.use((0, _connecthistoryapifallback.default)());
            try {
                webpackConfig = (0, _dev.getDevConfig)(payload.config);
                compiler = (0, _webpack.default)(webpackConfig);
                router.use((0, _webpackdevmiddleware.default)(compiler, {
                    publicPath: "/"
                }));
                router.use((0, _webpackhotmiddleware.default)(compiler));
            } catch (err) {
                console.error(err);
                throw new Error("Error: there was an error creating the webpack dev server.");
            }
            return [
                2,
                router
            ];
        });
    });
    return function devAdmin(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL3NjcmlwdHMvZGV2LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWJwYWNrIGZyb20gJ3dlYnBhY2snO1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgd2VicGFja0Rldk1pZGRsZXdhcmUgZnJvbSAnd2VicGFjay1kZXYtbWlkZGxld2FyZSc7XG5pbXBvcnQgd2VicGFja0hvdE1pZGRsZXdhcmUgZnJvbSAnd2VicGFjay1ob3QtbWlkZGxld2FyZSc7XG5pbXBvcnQgaGlzdG9yeSBmcm9tICdjb25uZWN0LWhpc3RvcnktYXBpLWZhbGxiYWNrJztcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgZ2V0RGV2Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlncy9kZXYnO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG50eXBlIERldkFkbWluVHlwZSA9IChvcHRpb25zOiB7IHBheWxvYWQ6IFBheWxvYWQgfSkgPT4gUHJvbWlzZTxQYXlsb2FkSGFuZGxlcj47XG5leHBvcnQgY29uc3QgZGV2QWRtaW46IERldkFkbWluVHlwZSA9IGFzeW5jICh7IHBheWxvYWQgfSkgPT4ge1xuICByb3V0ZXIudXNlKGhpc3RvcnkoKSk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB3ZWJwYWNrQ29uZmlnID0gZ2V0RGV2Q29uZmlnKHBheWxvYWQuY29uZmlnKTtcbiAgICBjb25zdCBjb21waWxlciA9IHdlYnBhY2sod2VicGFja0NvbmZpZyk7XG5cbiAgICByb3V0ZXIudXNlKHdlYnBhY2tEZXZNaWRkbGV3YXJlKGNvbXBpbGVyLCB7XG4gICAgICBwdWJsaWNQYXRoOiAnLycsXG4gICAgfSkpO1xuXG4gICAgcm91dGVyLnVzZSh3ZWJwYWNrSG90TWlkZGxld2FyZShjb21waWxlcikpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvcjogdGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIHRoZSB3ZWJwYWNrIGRldiBzZXJ2ZXIuJyk7XG4gIH1cblxuICByZXR1cm4gcm91dGVyO1xufTtcbiJdLCJuYW1lcyI6WyJkZXZBZG1pbiIsInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJwYXlsb2FkIiwid2VicGFja0NvbmZpZyIsImNvbXBpbGVyIiwidXNlIiwiaGlzdG9yeSIsImdldERldkNvbmZpZyIsImNvbmZpZyIsIndlYnBhY2siLCJ3ZWJwYWNrRGV2TWlkZGxld2FyZSIsInB1YmxpY1BhdGgiLCJ3ZWJwYWNrSG90TWlkZGxld2FyZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQVlhQTs7O2VBQUFBOzs7OERBWk87OERBQ0E7MkVBQ2E7MkVBQ0E7Z0ZBQ2I7bUJBR1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTUMsU0FBU0MsZ0JBQU8sQ0FBQ0MsTUFBTTtBQUd0QixJQUFNSDtlQUF5QixvQkFBQTtZQUFTSSxTQUlyQ0MsZUFDQUM7O1lBTHFDRixnQkFBQUE7WUFDN0NILE9BQU9NLEdBQUcsQ0FBQ0MsSUFBQUEsa0NBQU87WUFFbEIsSUFBSTtnQkFDSUgsZ0JBQWdCSSxJQUFBQSxpQkFBWSxFQUFDTCxRQUFRTSxNQUFNO2dCQUMzQ0osV0FBV0ssSUFBQUEsZ0JBQU8sRUFBQ047Z0JBRXpCSixPQUFPTSxHQUFHLENBQUNLLElBQUFBLDZCQUFvQixFQUFDTixVQUFVO29CQUN4Q08sWUFBWTtnQkFDZDtnQkFFQVosT0FBT00sR0FBRyxDQUFDTyxJQUFBQSw2QkFBb0IsRUFBQ1I7WUFDbEMsRUFBRSxPQUFPUyxLQUFLO2dCQUNaQyxRQUFRQyxLQUFLLENBQUNGO2dCQUNkLE1BQU0sSUFBSUcsTUFBTTtZQUNsQjtZQUVBOztnQkFBT2pCOzs7SUFDVDtvQkFsQmFEIn0=