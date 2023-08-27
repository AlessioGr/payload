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
import httpStatus from "http-status";
import { docAccess } from "../operations/docAccess";
export default function docAccessRequestHandler(req, res, next, globalConfig) {
    return _docAccessRequestHandler.apply(this, arguments);
}
function _docAccessRequestHandler() {
    _docAccessRequestHandler = _async_to_generator(function(req, res, next, globalConfig) {
        var accessResults, error;
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
                        docAccess({
                            req: req,
                            globalConfig: globalConfig
                        })
                    ];
                case 1:
                    accessResults = _state.sent();
                    return [
                        2,
                        res.status(httpStatus.OK).json(accessResults)
                    ];
                case 2:
                    error = _state.sent();
                    return [
                        2,
                        next(error)
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _docAccessRequestHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9kb2NBY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IGRvY0FjY2VzcyB9IGZyb20gJy4uL29wZXJhdGlvbnMvZG9jQWNjZXNzJztcbmltcG9ydCB7IENvbGxlY3Rpb25QZXJtaXNzaW9uLCBHbG9iYWxQZXJtaXNzaW9uIH0gZnJvbSAnLi4vLi4vYXV0aCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24sIGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogUHJvbWlzZTxSZXNwb25zZTxDb2xsZWN0aW9uUGVybWlzc2lvbiB8IEdsb2JhbFBlcm1pc3Npb24+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdHMgPSBhd2FpdCBkb2NBY2Nlc3Moe1xuICAgICAgcmVxLFxuICAgICAgZ2xvYmFsQ29uZmlnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihhY2Nlc3NSZXN1bHRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJodHRwU3RhdHVzIiwiZG9jQWNjZXNzIiwiZG9jQWNjZXNzUmVxdWVzdEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZ2xvYmFsQ29uZmlnIiwiYWNjZXNzUmVzdWx0cyIsImVycm9yIiwic3RhdHVzIiwiT0siLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsZ0JBQWdCLGNBQWM7QUFFckMsU0FBU0MsU0FBUyxRQUFRLDBCQUEwQjtBQUlwRCx3QkFBOEJDLHdCQUF3QkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQixFQUFFQyxZQUFtQztXQUFuSEo7O1NBQUFBO0lBQUFBLDJCQUFmLG9CQUFBLFNBQXVDQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCLEVBQUVDLFlBQW1DO1lBRXZJQyxlQU1DQzs7Ozs7Ozs7OztvQkFOZTs7d0JBQU1QLFVBQVU7NEJBQ3BDRSxLQUFBQTs0QkFDQUcsY0FBQUE7d0JBQ0Y7OztvQkFITUMsZ0JBQWdCO29CQUt0Qjs7d0JBQU9ILElBQUlLLE1BQU0sQ0FBQ1QsV0FBV1UsRUFBRSxFQUFFQyxJQUFJLENBQUNKOzs7b0JBQy9CQztvQkFDUDs7d0JBQU9ILEtBQUtHOzs7Ozs7OztJQUVoQjtXQVg4Qk4ifQ==