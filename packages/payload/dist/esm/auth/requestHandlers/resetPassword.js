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
import resetPassword from "../operations/resetPassword";
function resetPasswordHandler(req, res, next) {
    return _resetPasswordHandler.apply(this, arguments);
}
function _resetPasswordHandler() {
    _resetPasswordHandler = _async_to_generator(function(req, res, next) {
        var result, error;
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
                        resetPassword({
                            collection: req.collection,
                            data: req.body,
                            req: req,
                            res: res
                        })
                    ];
                case 1:
                    result = _state.sent();
                    return [
                        2,
                        res.status(httpStatus.OK).json({
                            message: "Password reset successfully.",
                            token: result.token,
                            user: result.user
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
    return _resetPasswordHandler.apply(this, arguments);
}
export default resetPasswordHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZXNldFBhc3N3b3JkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgcmVzZXRQYXNzd29yZCBmcm9tICcuLi9vcGVyYXRpb25zL3Jlc2V0UGFzc3dvcmQnO1xuXG5hc3luYyBmdW5jdGlvbiByZXNldFBhc3N3b3JkSGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc2V0UGFzc3dvcmQoe1xuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiByZXEuYm9keSxcbiAgICAgIHJlcSxcbiAgICAgIHJlcyxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spXG4gICAgICAuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCByZXNldCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgdG9rZW46IHJlc3VsdC50b2tlbixcbiAgICAgICAgdXNlcjogcmVzdWx0LnVzZXIsXG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzZXRQYXNzd29yZEhhbmRsZXI7XG4iXSwibmFtZXMiOlsiaHR0cFN0YXR1cyIsInJlc2V0UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJyZXN1bHQiLCJlcnJvciIsImNvbGxlY3Rpb24iLCJkYXRhIiwiYm9keSIsInN0YXR1cyIsIk9LIiwianNvbiIsIm1lc3NhZ2UiLCJ0b2tlbiIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxnQkFBZ0IsY0FBYztBQUVyQyxPQUFPQyxtQkFBbUIsOEJBQThCO1NBRXpDQyxxQkFBcUJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBM0VIOztTQUFBQTtJQUFBQSx3QkFBZixvQkFBQSxTQUFvQ0MsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtZQUVoRkMsUUFhQ0M7Ozs7Ozs7Ozs7b0JBYlE7O3dCQUFNTixjQUFjOzRCQUNqQ08sWUFBWUwsSUFBSUssVUFBVTs0QkFDMUJDLE1BQU1OLElBQUlPLElBQUk7NEJBQ2RQLEtBQUFBOzRCQUNBQyxLQUFBQTt3QkFDRjs7O29CQUxNRSxTQUFTO29CQU9mOzt3QkFBT0YsSUFBSU8sTUFBTSxDQUFDWCxXQUFXWSxFQUFFLEVBQzVCQyxJQUFJLENBQUM7NEJBQ0pDLFNBQVM7NEJBQ1RDLE9BQU9ULE9BQU9TLEtBQUs7NEJBQ25CQyxNQUFNVixPQUFPVSxJQUFJO3dCQUNuQjs7O29CQUNLVDtvQkFDUDs7d0JBQU9GLEtBQUtFOzs7Ozs7OztJQUVoQjtXQWxCZUw7O0FBb0JmLGVBQWVBLHFCQUFxQiJ9