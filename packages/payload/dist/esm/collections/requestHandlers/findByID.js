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
import findByID from "../operations/findByID";
export default function findByIDHandler(req, res, next) {
    return _findByIDHandler.apply(this, arguments);
}
function _findByIDHandler() {
    _findByIDHandler = _async_to_generator(function(req, res, next) {
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
                        findByID({
                            req: req,
                            collection: req.collection,
                            id: req.params.id,
                            depth: Number(req.query.depth),
                            draft: req.query.draft === "true"
                        })
                    ];
                case 1:
                    doc = _state.sent();
                    return [
                        2,
                        res.json(doc)
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
    return _findByIDHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZmluZEJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGZpbmRCeUlEIGZyb20gJy4uL29wZXJhdGlvbnMvZmluZEJ5SUQnO1xuXG5leHBvcnQgdHlwZSBGaW5kQnlJRFJlc3VsdCA9IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkb2M6IERvY3VtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmluZEJ5SURIYW5kbGVyKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8UmVzcG9uc2U8RmluZEJ5SURSZXN1bHQ+IHwgdm9pZD4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGZpbmRCeUlEKHtcbiAgICAgIHJlcSxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgICBkZXB0aDogTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCksXG4gICAgICBkcmFmdDogcmVxLnF1ZXJ5LmRyYWZ0ID09PSAndHJ1ZScsXG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcy5qc29uKGRvYyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmluZEJ5SUQiLCJmaW5kQnlJREhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZG9jIiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiaWQiLCJwYXJhbXMiLCJkZXB0aCIsIk51bWJlciIsInF1ZXJ5IiwiZHJhZnQiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsT0FBT0EsY0FBYyx5QkFBeUI7QUFPOUMsd0JBQThCQyxnQkFBZ0JDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBdEVIOztTQUFBQTtJQUFBQSxtQkFBZixvQkFBQSxTQUErQkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtZQUUxRkMsS0FRQ0M7Ozs7Ozs7Ozs7b0JBUks7O3dCQUFNTixTQUFTOzRCQUN6QkUsS0FBQUE7NEJBQ0FLLFlBQVlMLElBQUlLLFVBQVU7NEJBQzFCQyxJQUFJTixJQUFJTyxNQUFNLENBQUNELEVBQUU7NEJBQ2pCRSxPQUFPQyxPQUFPVCxJQUFJVSxLQUFLLENBQUNGLEtBQUs7NEJBQzdCRyxPQUFPWCxJQUFJVSxLQUFLLENBQUNDLEtBQUssS0FBSzt3QkFDN0I7OztvQkFOTVIsTUFBTTtvQkFPWjs7d0JBQU9GLElBQUlXLElBQUksQ0FBQ1Q7OztvQkFDVEM7b0JBQ1A7O3dCQUFPRixLQUFLRTs7Ozs7Ozs7SUFFaEI7V0FiOEJMIn0=