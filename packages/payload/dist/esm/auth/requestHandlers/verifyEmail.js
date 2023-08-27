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
import verifyEmail from "../operations/verifyEmail";
function verifyEmailHandler(req, res, next) {
    return _verifyEmailHandler.apply(this, arguments);
}
function _verifyEmailHandler() {
    _verifyEmailHandler = _async_to_generator(function(req, res, next) {
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
                        verifyEmail({
                            req: req,
                            collection: req.collection,
                            token: req.params.token
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        res.status(httpStatus.OK).json({
                            message: "Email verified successfully."
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
    return _verifyEmailHandler.apply(this, arguments);
}
export default verifyEmailHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy92ZXJpZnlFbWFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHZlcmlmeUVtYWlsIGZyb20gJy4uL29wZXJhdGlvbnMvdmVyaWZ5RW1haWwnO1xuXG5hc3luYyBmdW5jdGlvbiB2ZXJpZnlFbWFpbEhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCB2ZXJpZnlFbWFpbCh7XG4gICAgICByZXEsXG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIHRva2VuOiByZXEucGFyYW1zLnRva2VuLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSylcbiAgICAgIC5qc29uKHtcbiAgICAgICAgbWVzc2FnZTogJ0VtYWlsIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseS4nLFxuICAgICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeUVtYWlsSGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJodHRwU3RhdHVzIiwidmVyaWZ5RW1haWwiLCJ2ZXJpZnlFbWFpbEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwidG9rZW4iLCJwYXJhbXMiLCJzdGF0dXMiLCJPSyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsZ0JBQWdCLGNBQWM7QUFFckMsT0FBT0MsaUJBQWlCLDRCQUE0QjtTQUVyQ0MsbUJBQW1CQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1dBQXpFSDs7U0FBQUE7SUFBQUEsc0JBQWYsb0JBQUEsU0FBa0NDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7WUFZN0VDOzs7Ozs7Ozs7O29CQVZQOzt3QkFBTUwsWUFBWTs0QkFDaEJFLEtBQUFBOzRCQUNBSSxZQUFZSixJQUFJSSxVQUFVOzRCQUMxQkMsT0FBT0wsSUFBSU0sTUFBTSxDQUFDRCxLQUFLO3dCQUN6Qjs7O29CQUpBO29CQU1BOzt3QkFBT0osSUFBSU0sTUFBTSxDQUFDVixXQUFXVyxFQUFFLEVBQzVCQyxJQUFJLENBQUM7NEJBQ0pDLFNBQVM7d0JBQ1g7OztvQkFDS1A7b0JBQ1A7O3dCQUFPRCxLQUFLQzs7Ozs7Ozs7SUFFaEI7V0FmZUo7O0FBaUJmLGVBQWVBLG1CQUFtQiJ9