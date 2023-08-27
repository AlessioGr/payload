"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findOneHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _findOne = /*#__PURE__*/ _interop_require_default(require("../operations/findOne"));
var _isNumber = require("../../utilities/isNumber");
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
function findOneHandler(globalConfig) {
    return function() {
        var _handler = _async_to_generator(function(req, res, next) {
            var _req_query, slug, result, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        slug = globalConfig.slug;
                        return [
                            4,
                            (0, _findOne.default)({
                                req: req,
                                globalConfig: globalConfig,
                                slug: slug,
                                depth: (0, _isNumber.isNumber)((_req_query = req.query) === null || _req_query === void 0 ? void 0 : _req_query.depth) ? Number(req.query.depth) : undefined,
                                draft: req.query.draft === "true"
                            })
                        ];
                    case 1:
                        result = _state.sent();
                        return [
                            2,
                            res.status(_httpstatus.default.OK).json(result)
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
        function handler(req, res, next) {
            return _handler.apply(this, arguments);
        }
        return handler;
    }();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9maW5kT25lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgZmluZE9uZSBmcm9tICcuLi9vcGVyYXRpb25zL2ZpbmRPbmUnO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaXNOdW1iZXInO1xuXG5leHBvcnQgdHlwZSBGaW5kT25lR2xvYmFsUmVzdWx0ID0gUHJvbWlzZTxSZXNwb25zZTxEb2N1bWVudD4gfCB2b2lkPjtcbmV4cG9ydCB0eXBlIEZpbmRPbmVHbG9iYWxSZXNwb25zZSA9IChyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pID0+IEZpbmRPbmVHbG9iYWxSZXN1bHQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRPbmVIYW5kbGVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogRmluZE9uZUdsb2JhbFJlc3BvbnNlIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogRmluZE9uZUdsb2JhbFJlc3VsdCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgc2x1ZyB9ID0gZ2xvYmFsQ29uZmlnO1xuXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kT25lKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBnbG9iYWxDb25maWcsXG4gICAgICAgIHNsdWcsXG4gICAgICAgIGRlcHRoOiBpc051bWJlcihyZXEucXVlcnk/LmRlcHRoKSA/IE51bWJlcihyZXEucXVlcnkuZGVwdGgpIDogdW5kZWZpbmVkLFxuICAgICAgICBkcmFmdDogcmVxLnF1ZXJ5LmRyYWZ0ID09PSAndHJ1ZScsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvcik7XG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbImZpbmRPbmVIYW5kbGVyIiwiZ2xvYmFsQ29uZmlnIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJzbHVnIiwicmVzdWx0IiwiZXJyb3IiLCJmaW5kT25lIiwiZGVwdGgiLCJpc051bWJlciIsInF1ZXJ5IiwiTnVtYmVyIiwidW5kZWZpbmVkIiwiZHJhZnQiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7OytCQVdBOzs7ZUFBd0JBOzs7aUVBVkQ7OERBSUg7d0JBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVixTQUFTQSxlQUFlQyxZQUFtQztJQUN4RTtZQUFzQkMsV0FBZixvQkFBQSxTQUF1QkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtnQkFROURGLFlBTlZHLE1BRUZDLFFBU0NDOzs7Ozs7Ozs7O3dCQVhDRixPQUFTTCxhQUFUSzt3QkFFTzs7NEJBQU1HLElBQUFBLGdCQUFPLEVBQUM7Z0NBQzNCTixLQUFBQTtnQ0FDQUYsY0FBQUE7Z0NBQ0FLLE1BQUFBO2dDQUNBSSxPQUFPQyxJQUFBQSxrQkFBUSxHQUFDUixhQUFBQSxJQUFJUyxLQUFLLGNBQVRULGlDQUFBQSxXQUFXTyxLQUFLLElBQUlHLE9BQU9WLElBQUlTLEtBQUssQ0FBQ0YsS0FBSyxJQUFJSTtnQ0FDOURDLE9BQU9aLElBQUlTLEtBQUssQ0FBQ0csS0FBSyxLQUFLOzRCQUM3Qjs7O3dCQU5NUixTQUFTO3dCQVFmOzs0QkFBT0gsSUFBSVksTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQUVDLElBQUksQ0FBQ1o7Ozt3QkFDL0JDO3dCQUNQOzs0QkFBT0gsS0FBS0c7Ozs7Ozs7O1FBRWhCO2lCQWhCc0JOLFFBQVFDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7bUJBQTlESDs7ZUFBQUE7O0FBaUJ4QiJ9