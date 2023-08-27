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
import express from "express";
import compression from "compression";
import history from "connect-history-api-fallback";
var router = express.Router();
export var serveAdmin = function() {
    var _ref = _async_to_generator(function(param) {
        var payload;
        return _ts_generator(this, function(_state) {
            payload = param.payload;
            router.use(history());
            router.get("*", function(req, res, next) {
                if (req.path.substr(-1) === "/" && req.path.length > 1) {
                    var query = req.url.slice(req.path.length);
                    res.redirect(301, req.path.slice(0, -1) + query);
                } else {
                    next();
                }
            });
            router.use(compression(payload.config.express.compression));
            router.use(express.static(payload.config.admin.buildPath, {
                redirect: false,
                setHeaders: function(res, path) {
                    var staticFilesRegex = new RegExp(".(svg|css|js|jp(e)?g|png|avif|webp|webm|gif|ico|woff|woff2|ttf|otf)$", "i");
                    if (path.match(staticFilesRegex)) {
                        res.set("Cache-Control", "public, max-age=".concat(60 * 60 * 24 * 365, ", immutable"));
                    }
                }
            }));
            return [
                2,
                router
            ];
        });
    });
    return function serveAdmin(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL3NjcmlwdHMvc2VydmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IGhpc3RvcnkgZnJvbSAnY29ubmVjdC1oaXN0b3J5LWFwaS1mYWxsYmFjayc7XG5pbXBvcnQgdHlwZSB7IFBheWxvYWRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLi9wYXlsb2FkJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxudHlwZSBTZXJ2ZUFkbWluVHlwZSA9IChvcHRpb25zOiB7IHBheWxvYWQ6IFBheWxvYWQgfSkgPT4gUHJvbWlzZTxQYXlsb2FkSGFuZGxlcj47XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZUFkbWluOiBTZXJ2ZUFkbWluVHlwZSA9IGFzeW5jICh7IHBheWxvYWQgfSkgPT4ge1xuICByb3V0ZXIudXNlKGhpc3RvcnkoKSk7XG5cbiAgcm91dGVyLmdldCgnKicsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGlmIChyZXEucGF0aC5zdWJzdHIoLTEpID09PSAnLycgJiYgcmVxLnBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgcXVlcnkgPSByZXEudXJsLnNsaWNlKHJlcS5wYXRoLmxlbmd0aCk7XG4gICAgICByZXMucmVkaXJlY3QoMzAxLCByZXEucGF0aC5zbGljZSgwLCAtMSkgKyBxdWVyeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJvdXRlci51c2UoY29tcHJlc3Npb24ocGF5bG9hZC5jb25maWcuZXhwcmVzcy5jb21wcmVzc2lvbikpO1xuICByb3V0ZXIudXNlKGV4cHJlc3Muc3RhdGljKHBheWxvYWQuY29uZmlnLmFkbWluLmJ1aWxkUGF0aCwge1xuICAgIHJlZGlyZWN0OiBmYWxzZSxcbiAgICBzZXRIZWFkZXJzOiAocmVzLCBwYXRoKSA9PiB7XG4gICAgICBjb25zdCBzdGF0aWNGaWxlc1JlZ2V4ID0gbmV3IFJlZ0V4cCgnLihzdmd8Y3NzfGpzfGpwKGUpP2d8cG5nfGF2aWZ8d2VicHx3ZWJtfGdpZnxpY298d29mZnx3b2ZmMnx0dGZ8b3RmKSQnLCAnaScpO1xuICAgICAgaWYgKHBhdGgubWF0Y2goc3RhdGljRmlsZXNSZWdleCkpIHtcbiAgICAgICAgcmVzLnNldCgnQ2FjaGUtQ29udHJvbCcsIGBwdWJsaWMsIG1heC1hZ2U9JHs2MCAqIDYwICogMjQgKiAzNjV9LCBpbW11dGFibGVgKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHJvdXRlcjtcbn07XG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsImNvbXByZXNzaW9uIiwiaGlzdG9yeSIsInJvdXRlciIsIlJvdXRlciIsInNlcnZlQWRtaW4iLCJwYXlsb2FkIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwibmV4dCIsInBhdGgiLCJzdWJzdHIiLCJsZW5ndGgiLCJxdWVyeSIsInVybCIsInNsaWNlIiwicmVkaXJlY3QiLCJjb25maWciLCJzdGF0aWMiLCJhZG1pbiIsImJ1aWxkUGF0aCIsInNldEhlYWRlcnMiLCJzdGF0aWNGaWxlc1JlZ2V4IiwiUmVnRXhwIiwibWF0Y2giLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxhQUFhLFVBQVU7QUFDOUIsT0FBT0MsaUJBQWlCLGNBQWM7QUFDdEMsT0FBT0MsYUFBYSwrQkFBK0I7QUFJbkQsSUFBTUMsU0FBU0gsUUFBUUksTUFBTTtBQUk3QixPQUFPLElBQU1DO2VBQTZCLG9CQUFBO1lBQVNDOztZQUFBQSxnQkFBQUE7WUFDakRILE9BQU9JLEdBQUcsQ0FBQ0w7WUFFWEMsT0FBT0ssR0FBRyxDQUFDLEtBQUssU0FBQ0MsS0FBS0MsS0FBS0M7Z0JBQ3pCLElBQUlGLElBQUlHLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxPQUFPSixJQUFJRyxJQUFJLENBQUNFLE1BQU0sR0FBRyxHQUFHO29CQUN0RCxJQUFNQyxRQUFRTixJQUFJTyxHQUFHLENBQUNDLEtBQUssQ0FBQ1IsSUFBSUcsSUFBSSxDQUFDRSxNQUFNO29CQUMzQ0osSUFBSVEsUUFBUSxDQUFDLEtBQUtULElBQUlHLElBQUksQ0FBQ0ssS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLRjtnQkFDNUMsT0FBTztvQkFDTEo7Z0JBQ0Y7WUFDRjtZQUVBUixPQUFPSSxHQUFHLENBQUNOLFlBQVlLLFFBQVFhLE1BQU0sQ0FBQ25CLE9BQU8sQ0FBQ0MsV0FBVztZQUN6REUsT0FBT0ksR0FBRyxDQUFDUCxRQUFRb0IsTUFBTSxDQUFDZCxRQUFRYSxNQUFNLENBQUNFLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO2dCQUN4REosVUFBVTtnQkFDVkssWUFBWSxTQUFDYixLQUFLRTtvQkFDaEIsSUFBTVksbUJBQW1CLElBQUlDLE9BQU8sd0VBQXdFO29CQUM1RyxJQUFJYixLQUFLYyxLQUFLLENBQUNGLG1CQUFtQjt3QkFDaENkLElBQUlpQixHQUFHLENBQUMsaUJBQWlCLEFBQUMsbUJBQXFDLE9BQW5CLEtBQUssS0FBSyxLQUFLLEtBQUk7b0JBQ2pFO2dCQUNGO1lBQ0Y7WUFFQTs7Z0JBQU94Qjs7O0lBQ1Q7b0JBeEJhRTs7O0lBd0JYIn0=