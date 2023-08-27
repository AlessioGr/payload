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
export default function docAccessRequestHandler(req, res, next) {
    return _docAccessRequestHandler.apply(this, arguments);
}
function _docAccessRequestHandler() {
    _docAccessRequestHandler = _async_to_generator(function(req, res, next) {
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
                            id: req.params.id
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZG9jQWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBkb2NBY2Nlc3MgfSBmcm9tICcuLi9vcGVyYXRpb25zL2RvY0FjY2Vzcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uUGVybWlzc2lvbiwgR2xvYmFsUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uL2F1dGgnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPFJlc3BvbnNlPENvbGxlY3Rpb25QZXJtaXNzaW9uIHwgR2xvYmFsUGVybWlzc2lvbj4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYWNjZXNzUmVzdWx0cyA9IGF3YWl0IGRvY0FjY2Vzcyh7XG4gICAgICByZXEsXG4gICAgICBpZDogcmVxLnBhcmFtcy5pZCxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oYWNjZXNzUmVzdWx0cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiaHR0cFN0YXR1cyIsImRvY0FjY2VzcyIsImRvY0FjY2Vzc1JlcXVlc3RIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImFjY2Vzc1Jlc3VsdHMiLCJlcnJvciIsImlkIiwicGFyYW1zIiwic3RhdHVzIiwiT0siLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsZ0JBQWdCLGNBQWM7QUFFckMsU0FBU0MsU0FBUyxRQUFRLDBCQUEwQjtBQUdwRCx3QkFBOEJDLHdCQUF3QkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtXQUE5RUg7O1NBQUFBO0lBQUFBLDJCQUFmLG9CQUFBLFNBQXVDQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBRWxHQyxlQU1DQzs7Ozs7Ozs7OztvQkFOZTs7d0JBQU1OLFVBQVU7NEJBQ3BDRSxLQUFBQTs0QkFDQUssSUFBSUwsSUFBSU0sTUFBTSxDQUFDRCxFQUFFO3dCQUNuQjs7O29CQUhNRixnQkFBZ0I7b0JBS3RCOzt3QkFBT0YsSUFBSU0sTUFBTSxDQUFDVixXQUFXVyxFQUFFLEVBQUVDLElBQUksQ0FBQ047OztvQkFDL0JDO29CQUNQOzt3QkFBT0YsS0FBS0U7Ozs7Ozs7O0lBRWhCO1dBWDhCTCJ9