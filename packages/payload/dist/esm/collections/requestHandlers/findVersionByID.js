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
import findVersionByID from "../operations/findVersionByID";
export default function findVersionByIDHandler(req, res, next) {
    return _findVersionByIDHandler.apply(this, arguments);
}
function _findVersionByIDHandler() {
    _findVersionByIDHandler = _async_to_generator(function(req, res, next) {
        var options, doc, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    options = {
                        req: req,
                        collection: req.collection,
                        id: req.params.id,
                        payload: req.payload,
                        depth: parseInt(String(req.query.depth), 10)
                    };
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        findVersionByID(options)
                    ];
                case 2:
                    doc = _state.sent();
                    return [
                        2,
                        res.json(doc)
                    ];
                case 3:
                    error = _state.sent();
                    return [
                        2,
                        next(error)
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _findVersionByIDHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25CeUlELnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbkJ5SUQnO1xuXG5leHBvcnQgdHlwZSBGaW5kQnlJRFJlc3VsdCA9IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkb2M6IERvY3VtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmluZFZlcnNpb25CeUlESGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPFJlc3BvbnNlPEZpbmRCeUlEUmVzdWx0PiB8IHZvaWQ+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICByZXEsXG4gICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgZGVwdGg6IHBhcnNlSW50KFN0cmluZyhyZXEucXVlcnkuZGVwdGgpLCAxMCksXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBmaW5kVmVyc2lvbkJ5SUQob3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlcy5qc29uKGRvYyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmluZFZlcnNpb25CeUlEIiwiZmluZFZlcnNpb25CeUlESGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJvcHRpb25zIiwiZG9jIiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiaWQiLCJwYXJhbXMiLCJwYXlsb2FkIiwiZGVwdGgiLCJwYXJzZUludCIsIlN0cmluZyIsInF1ZXJ5IiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE9BQU9BLHFCQUFxQixnQ0FBZ0M7QUFPNUQsd0JBQThCQyx1QkFBdUJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBN0VIOztTQUFBQTtJQUFBQSwwQkFBZixvQkFBQSxTQUFzQ0MsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtZQUNuR0MsU0FTRUMsS0FFQ0M7Ozs7b0JBWEhGLFVBQVU7d0JBQ2RILEtBQUFBO3dCQUNBTSxZQUFZTixJQUFJTSxVQUFVO3dCQUMxQkMsSUFBSVAsSUFBSVEsTUFBTSxDQUFDRCxFQUFFO3dCQUNqQkUsU0FBU1QsSUFBSVMsT0FBTzt3QkFDcEJDLE9BQU9DLFNBQVNDLE9BQU9aLElBQUlhLEtBQUssQ0FBQ0gsS0FBSyxHQUFHO29CQUMzQzs7Ozs7Ozs7O29CQUdjOzt3QkFBTVosZ0JBQWdCSzs7O29CQUE1QkMsTUFBTTtvQkFDWjs7d0JBQU9ILElBQUlhLElBQUksQ0FBQ1Y7OztvQkFDVEM7b0JBQ1A7O3dCQUFPSCxLQUFLRzs7Ozs7Ozs7SUFFaEI7V0FmOEJOIn0=