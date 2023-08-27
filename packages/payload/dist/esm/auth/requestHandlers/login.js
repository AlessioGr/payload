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
import login from "../operations/login";
export default function loginHandler(req, res, next) {
    return _loginHandler.apply(this, arguments);
}
function _loginHandler() {
    _loginHandler = _async_to_generator(function(req, res, next) {
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
                        login({
                            req: req,
                            res: res,
                            collection: req.collection,
                            data: req.body,
                            depth: parseInt(String(req.query.depth), 10)
                        })
                    ];
                case 1:
                    result = _state.sent();
                    res.status(httpStatus.OK).json({
                        message: "Auth Passed",
                        user: result.user,
                        token: result.token,
                        exp: result.exp
                    });
                    return [
                        3,
                        3
                    ];
                case 2:
                    error = _state.sent();
                    next(error);
                    return [
                        3,
                        3
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _loginHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9sb2dpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IGxvZ2luLCB7IFJlc3VsdCB9IGZyb20gJy4uL29wZXJhdGlvbnMvbG9naW4nO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbkhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxSZXNwb25zZTxSZXN1bHQgJiB7IG1lc3NhZ2U6IHN0cmluZyB9PiB8IHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBsb2dpbih7XG4gICAgICByZXEsXG4gICAgICByZXMsXG4gICAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IHJlcS5ib2R5LFxuICAgICAgZGVwdGg6IHBhcnNlSW50KFN0cmluZyhyZXEucXVlcnkuZGVwdGgpLCAxMCksXG4gICAgfSk7XG5cbiAgICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spXG4gICAgICAuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6ICdBdXRoIFBhc3NlZCcsXG4gICAgICAgIHVzZXI6IHJlc3VsdC51c2VyLFxuICAgICAgICB0b2tlbjogcmVzdWx0LnRva2VuLFxuICAgICAgICBleHA6IHJlc3VsdC5leHAsXG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImh0dHBTdGF0dXMiLCJsb2dpbiIsImxvZ2luSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJyZXN1bHQiLCJlcnJvciIsImNvbGxlY3Rpb24iLCJkYXRhIiwiYm9keSIsImRlcHRoIiwicGFyc2VJbnQiLCJTdHJpbmciLCJxdWVyeSIsInN0YXR1cyIsIk9LIiwianNvbiIsIm1lc3NhZ2UiLCJ1c2VyIiwidG9rZW4iLCJleHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxnQkFBZ0IsY0FBYztBQUVyQyxPQUFPQyxXQUF1QixzQkFBc0I7QUFFcEQsd0JBQThCQyxhQUFhQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1dBQW5FSDs7U0FBQUE7SUFBQUEsZ0JBQWYsb0JBQUEsU0FBNEJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7WUFFdkZDLFFBZUNDOzs7Ozs7Ozs7O29CQWZROzt3QkFBTU4sTUFBTTs0QkFDekJFLEtBQUFBOzRCQUNBQyxLQUFBQTs0QkFDQUksWUFBWUwsSUFBSUssVUFBVTs0QkFDMUJDLE1BQU1OLElBQUlPLElBQUk7NEJBQ2RDLE9BQU9DLFNBQVNDLE9BQU9WLElBQUlXLEtBQUssQ0FBQ0gsS0FBSyxHQUFHO3dCQUMzQzs7O29CQU5NTCxTQUFTO29CQVFmRixJQUFJVyxNQUFNLENBQUNmLFdBQVdnQixFQUFFLEVBQ3JCQyxJQUFJLENBQUM7d0JBQ0pDLFNBQVM7d0JBQ1RDLE1BQU1iLE9BQU9hLElBQUk7d0JBQ2pCQyxPQUFPZCxPQUFPYyxLQUFLO3dCQUNuQkMsS0FBS2YsT0FBT2UsR0FBRztvQkFDakI7Ozs7OztvQkFDS2Q7b0JBQ1BGLEtBQUtFOzs7Ozs7Ozs7OztJQUVUO1dBcEI4QkwifQ==