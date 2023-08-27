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
import { NotFound } from "../../errors";
import deleteByID from "../operations/deleteByID";
export default function deleteByIDHandler(req, res, next) {
    return _deleteByIDHandler.apply(this, arguments);
}
function _deleteByIDHandler() {
    _deleteByIDHandler = _async_to_generator(function(req, res, next) {
        var doc, error;
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
                        deleteByID({
                            req: req,
                            collection: req.collection,
                            id: req.params.id,
                            depth: parseInt(String(req.query.depth), 10)
                        })
                    ];
                case 1:
                    doc = _state.sent();
                    if (!doc) {
                        res.status(httpStatus.NOT_FOUND).json(new NotFound(req.t));
                    }
                    res.status(httpStatus.OK).send(doc);
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
    return _deleteByIDHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZGVsZXRlQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgTm90Rm91bmQgfSBmcm9tICcuLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgZGVsZXRlQnlJRCBmcm9tICcuLi9vcGVyYXRpb25zL2RlbGV0ZUJ5SUQnO1xuXG5leHBvcnQgdHlwZSBEZWxldGVSZXN1bHQgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgZG9jOiBEb2N1bWVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQnlJREhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxSZXNwb25zZTxEZWxldGVSZXN1bHQ+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGRlbGV0ZUJ5SUQoe1xuICAgICAgcmVxLFxuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICBpZDogcmVxLnBhcmFtcy5pZCxcbiAgICAgIGRlcHRoOiBwYXJzZUludChTdHJpbmcocmVxLnF1ZXJ5LmRlcHRoKSwgMTApLFxuICAgIH0pO1xuXG4gICAgaWYgKCFkb2MpIHtcbiAgICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5OT1RfRk9VTkQpXG4gICAgICAgIC5qc29uKG5ldyBOb3RGb3VuZChyZXEudCkpO1xuICAgIH1cblxuICAgIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSylcbiAgICAgIC5zZW5kKGRvYyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbmV4dChlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJodHRwU3RhdHVzIiwiTm90Rm91bmQiLCJkZWxldGVCeUlEIiwiZGVsZXRlQnlJREhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZG9jIiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiaWQiLCJwYXJhbXMiLCJkZXB0aCIsInBhcnNlSW50IiwiU3RyaW5nIiwicXVlcnkiLCJzdGF0dXMiLCJOT1RfRk9VTkQiLCJqc29uIiwidCIsIk9LIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLGdCQUFnQixjQUFjO0FBRXJDLFNBQVNDLFFBQVEsUUFBUSxlQUFlO0FBRXhDLE9BQU9DLGdCQUFnQiwyQkFBMkI7QUFPbEQsd0JBQThCQyxrQkFBa0JDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBeEVIOztTQUFBQTtJQUFBQSxxQkFBZixvQkFBQSxTQUFpQ0MsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtZQUU1RkMsS0FjQ0M7Ozs7Ozs7Ozs7b0JBZEs7O3dCQUFNTixXQUFXOzRCQUMzQkUsS0FBQUE7NEJBQ0FLLFlBQVlMLElBQUlLLFVBQVU7NEJBQzFCQyxJQUFJTixJQUFJTyxNQUFNLENBQUNELEVBQUU7NEJBQ2pCRSxPQUFPQyxTQUFTQyxPQUFPVixJQUFJVyxLQUFLLENBQUNILEtBQUssR0FBRzt3QkFDM0M7OztvQkFMTUwsTUFBTTtvQkFPWixJQUFJLENBQUNBLEtBQUs7d0JBQ1JGLElBQUlXLE1BQU0sQ0FBQ2hCLFdBQVdpQixTQUFTLEVBQzVCQyxJQUFJLENBQUMsSUFBSWpCLFNBQVNHLElBQUllLENBQUM7b0JBQzVCO29CQUVBZCxJQUFJVyxNQUFNLENBQUNoQixXQUFXb0IsRUFBRSxFQUNyQkMsSUFBSSxDQUFDZDs7Ozs7O29CQUNEQztvQkFDUEYsS0FBS0U7Ozs7Ozs7Ozs7O0lBRVQ7V0FuQjhCTCJ9