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
import forgotPassword from "../operations/forgotPassword";
export default function forgotPasswordHandler(req, res, next) {
    return _forgotPasswordHandler.apply(this, arguments);
}
function _forgotPasswordHandler() {
    _forgotPasswordHandler = _async_to_generator(function(req, res, next) {
        var error;
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
                        forgotPassword({
                            req: req,
                            collection: req.collection,
                            data: {
                                email: req.body.email
                            },
                            disableEmail: req.body.disableEmail,
                            expiration: req.body.expiration
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        res.status(httpStatus.OK).json({
                            message: "Success"
                        })
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
    return _forgotPasswordHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9mb3Jnb3RQYXNzd29yZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IGZvcmdvdFBhc3N3b3JkIGZyb20gJy4uL29wZXJhdGlvbnMvZm9yZ290UGFzc3dvcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmb3Jnb3RQYXNzd29yZEhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBmb3Jnb3RQYXNzd29yZCh7XG4gICAgICByZXEsXG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IHsgZW1haWw6IHJlcS5ib2R5LmVtYWlsIH0sXG4gICAgICBkaXNhYmxlRW1haWw6IHJlcS5ib2R5LmRpc2FibGVFbWFpbCxcbiAgICAgIGV4cGlyYXRpb246IHJlcS5ib2R5LmV4cGlyYXRpb24sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKVxuICAgICAgLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJodHRwU3RhdHVzIiwiZm9yZ290UGFzc3dvcmQiLCJmb3Jnb3RQYXNzd29yZEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImVtYWlsIiwiYm9keSIsImRpc2FibGVFbWFpbCIsImV4cGlyYXRpb24iLCJzdGF0dXMiLCJPSyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsZ0JBQWdCLGNBQWM7QUFFckMsT0FBT0Msb0JBQW9CLCtCQUErQjtBQUUxRCx3QkFBOEJDLHNCQUFzQkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtXQUE1RUg7O1NBQUFBO0lBQUFBLHlCQUFmLG9CQUFBLFNBQXFDQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBYy9GQzs7Ozs7Ozs7OztvQkFaUDs7d0JBQU1MLGVBQWU7NEJBQ25CRSxLQUFBQTs0QkFDQUksWUFBWUosSUFBSUksVUFBVTs0QkFDMUJDLE1BQU07Z0NBQUVDLE9BQU9OLElBQUlPLElBQUksQ0FBQ0QsS0FBSzs0QkFBQzs0QkFDOUJFLGNBQWNSLElBQUlPLElBQUksQ0FBQ0MsWUFBWTs0QkFDbkNDLFlBQVlULElBQUlPLElBQUksQ0FBQ0UsVUFBVTt3QkFDakM7OztvQkFOQTtvQkFRQTs7d0JBQU9SLElBQUlTLE1BQU0sQ0FBQ2IsV0FBV2MsRUFBRSxFQUM1QkMsSUFBSSxDQUFDOzRCQUNKQyxTQUFTO3dCQUNYOzs7b0JBQ0tWO29CQUNQOzt3QkFBT0QsS0FBS0M7Ozs7Ozs7O0lBRWhCO1dBakI4QkoifQ==