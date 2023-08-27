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
import { isNumber } from "../../utilities/isNumber";
import findVersionByID from "../operations/findVersionByID";
export default function findVersionByIDHandler(globalConfig) {
    return function() {
        var _handler = _async_to_generator(function(req, res, next) {
            var _req_query, options, doc, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        options = {
                            req: req,
                            globalConfig: globalConfig,
                            id: req.params.id,
                            depth: isNumber((_req_query = req.query) === null || _req_query === void 0 ? void 0 : _req_query.depth) ? Number(req.query.depth) : undefined
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
        function handler(req, res, next) {
            return _handler.apply(this, arguments);
        }
        return handler;
    }();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9maW5kVmVyc2lvbkJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvaXNOdW1iZXInO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbkJ5SUQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kVmVyc2lvbkJ5SURIYW5kbGVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogRG9jdW1lbnQge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPFJlc3BvbnNlPERvY3VtZW50PiB8IHZvaWQ+IHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgcmVxLFxuICAgICAgZ2xvYmFsQ29uZmlnLFxuICAgICAgaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgICBkZXB0aDogaXNOdW1iZXIocmVxLnF1ZXJ5Py5kZXB0aCkgPyBOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IGZpbmRWZXJzaW9uQnlJRChvcHRpb25zKTtcbiAgICAgIHJldHVybiByZXMuanNvbihkb2MpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvcik7XG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbImlzTnVtYmVyIiwiZmluZFZlcnNpb25CeUlEIiwiZmluZFZlcnNpb25CeUlESGFuZGxlciIsImdsb2JhbENvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwib3B0aW9ucyIsImRvYyIsImVycm9yIiwiaWQiLCJwYXJhbXMiLCJkZXB0aCIsInF1ZXJ5IiwiTnVtYmVyIiwidW5kZWZpbmVkIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFNBQVNBLFFBQVEsUUFBUSwyQkFBMkI7QUFFcEQsT0FBT0MscUJBQXFCLGdDQUFnQztBQUU1RCxlQUFlLFNBQVNDLHVCQUF1QkMsWUFBbUM7SUFDaEY7WUFBc0JDLFdBQWYsb0JBQUEsU0FBdUJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7Z0JBS2hFRixZQUpaRyxTQVFFQyxLQUVDQzs7Ozt3QkFWSEYsVUFBVTs0QkFDZEgsS0FBQUE7NEJBQ0FGLGNBQUFBOzRCQUNBUSxJQUFJTixJQUFJTyxNQUFNLENBQUNELEVBQUU7NEJBQ2pCRSxPQUFPYixVQUFTSyxhQUFBQSxJQUFJUyxLQUFLLGNBQVRULGlDQUFBQSxXQUFXUSxLQUFLLElBQUlFLE9BQU9WLElBQUlTLEtBQUssQ0FBQ0QsS0FBSyxJQUFJRzt3QkFDaEU7Ozs7Ozs7Ozt3QkFHYzs7NEJBQU1mLGdCQUFnQk87Ozt3QkFBNUJDLE1BQU07d0JBQ1o7OzRCQUFPSCxJQUFJVyxJQUFJLENBQUNSOzs7d0JBQ1RDO3dCQUNQOzs0QkFBT0gsS0FBS0c7Ozs7Ozs7O1FBRWhCO2lCQWRzQk4sUUFBUUMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjttQkFBOURIOztlQUFBQTs7QUFleEIifQ==