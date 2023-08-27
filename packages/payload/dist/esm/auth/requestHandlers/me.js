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
import me from "../operations/me";
export default function meHandler(req, res, next) {
    return _meHandler.apply(this, arguments);
}
function _meHandler() {
    _meHandler = _async_to_generator(function(req, res, next) {
        var response, err;
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
                        me({
                            req: req,
                            collection: req.collection
                        })
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        2,
                        res.status(200).json(response)
                    ];
                case 2:
                    err = _state.sent();
                    return [
                        2,
                        next(err)
                    ];
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return _meHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9tZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IG1lIGZyb20gJy4uL29wZXJhdGlvbnMvbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtZUhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1lKHtcbiAgICAgIHJlcSxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgIH0pO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNwb25zZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBuZXh0KGVycik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtZSIsIm1lSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJyZXNwb25zZSIsImVyciIsImNvbGxlY3Rpb24iLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsT0FBT0EsUUFBUSxtQkFBbUI7QUFFbEMsd0JBQThCQyxVQUFVQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1dBQWhFSDs7U0FBQUE7SUFBQUEsYUFBZixvQkFBQSxTQUF5QkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtZQUVwRkMsVUFLQ0M7Ozs7Ozs7Ozs7b0JBTFU7O3dCQUFNTixHQUFHOzRCQUN4QkUsS0FBQUE7NEJBQ0FLLFlBQVlMLElBQUlLLFVBQVU7d0JBQzVCOzs7b0JBSE1GLFdBQVc7b0JBSWpCOzt3QkFBT0YsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7OztvQkFDckJDO29CQUNQOzt3QkFBT0YsS0FBS0U7Ozs7Ozs7O0lBRWhCO1dBVjhCTCJ9