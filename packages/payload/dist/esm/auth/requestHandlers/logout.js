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
import logout from "../operations/logout";
export default function logoutHandler(req, res, next) {
    return _logoutHandler.apply(this, arguments);
}
function _logoutHandler() {
    _logoutHandler = _async_to_generator(function(req, res, next) {
        var message, error;
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
                        logout({
                            collection: req.collection,
                            res: res,
                            req: req
                        })
                    ];
                case 1:
                    message = _state.sent();
                    return [
                        2,
                        res.status(httpStatus.OK).json({
                            message: message
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
    return _logoutHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9sb2dvdXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCBsb2dvdXQgZnJvbSAnLi4vb3BlcmF0aW9ucy9sb2dvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dvdXRIYW5kbGVyKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8UmVzcG9uc2U8eyBtZXNzYWdlOiBzdHJpbmd9PiB8IHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgbG9nb3V0KHtcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgcmVzLFxuICAgICAgcmVxLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbih7IG1lc3NhZ2UgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiaHR0cFN0YXR1cyIsImxvZ291dCIsImxvZ291dEhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwibWVzc2FnZSIsImVycm9yIiwiY29sbGVjdGlvbiIsInN0YXR1cyIsIk9LIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLGdCQUFnQixjQUFjO0FBRXJDLE9BQU9DLFlBQVksdUJBQXVCO0FBRTFDLHdCQUE4QkMsY0FBY0MsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtXQUFwRUg7O1NBQUFBO0lBQUFBLGlCQUFmLG9CQUFBLFNBQTZCQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBRXhGQyxTQU9DQzs7Ozs7Ozs7OztvQkFQUzs7d0JBQU1OLE9BQU87NEJBQzNCTyxZQUFZTCxJQUFJSyxVQUFVOzRCQUMxQkosS0FBQUE7NEJBQ0FELEtBQUFBO3dCQUNGOzs7b0JBSk1HLFVBQVU7b0JBTWhCOzt3QkFBT0YsSUFBSUssTUFBTSxDQUFDVCxXQUFXVSxFQUFFLEVBQUVDLElBQUksQ0FBQzs0QkFBRUwsU0FBQUE7d0JBQVE7OztvQkFDekNDO29CQUNQOzt3QkFBT0YsS0FBS0U7Ozs7Ozs7O0lBRWhCO1dBWjhCTCJ9