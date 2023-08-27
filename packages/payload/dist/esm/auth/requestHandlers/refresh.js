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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
import getExtractJWT from "../getExtractJWT";
import refresh from "../operations/refresh";
export default function refreshHandler(req, res, next) {
    return _refreshHandler.apply(this, arguments);
}
function _refreshHandler() {
    _refreshHandler = _async_to_generator(function(req, res, next) {
        var token, extractJWT, result, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    extractJWT = getExtractJWT(req.payload.config);
                    token = extractJWT(req);
                    if (req.body.token) {
                        token = req.body.token;
                    }
                    return [
                        4,
                        refresh({
                            req: req,
                            res: res,
                            collection: req.collection,
                            token: token
                        })
                    ];
                case 1:
                    result = _state.sent();
                    return [
                        2,
                        res.status(200).json(_object_spread({
                            message: "Token refresh successful"
                        }, result))
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
    return _refreshHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy9yZWZyZXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3BvbnNlLCBOZXh0RnVuY3Rpb24gfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBnZXRFeHRyYWN0SldUIGZyb20gJy4uL2dldEV4dHJhY3RKV1QnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCByZWZyZXNoIGZyb20gJy4uL29wZXJhdGlvbnMvcmVmcmVzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hIYW5kbGVyKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgbGV0IHRva2VuO1xuXG4gICAgY29uc3QgZXh0cmFjdEpXVCA9IGdldEV4dHJhY3RKV1QocmVxLnBheWxvYWQuY29uZmlnKTtcbiAgICB0b2tlbiA9IGV4dHJhY3RKV1QocmVxKTtcblxuICAgIGlmIChyZXEuYm9keS50b2tlbikge1xuICAgICAgdG9rZW4gPSByZXEuYm9keS50b2tlbjtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZWZyZXNoKHtcbiAgICAgIHJlcSxcbiAgICAgIHJlcyxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgdG9rZW4sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgbWVzc2FnZTogJ1Rva2VuIHJlZnJlc2ggc3VjY2Vzc2Z1bCcsXG4gICAgICAuLi5yZXN1bHQsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0RXh0cmFjdEpXVCIsInJlZnJlc2giLCJyZWZyZXNoSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJ0b2tlbiIsImV4dHJhY3RKV1QiLCJyZXN1bHQiLCJlcnJvciIsInBheWxvYWQiLCJjb25maWciLCJib2R5IiwiY29sbGVjdGlvbiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLG1CQUFtQixtQkFBbUI7QUFFN0MsT0FBT0MsYUFBYSx3QkFBd0I7QUFFNUMsd0JBQThCQyxlQUFlQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1dBQXJFSDs7U0FBQUE7SUFBQUEsa0JBQWYsb0JBQUEsU0FBOEJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7WUFFM0ZDLE9BRUVDLFlBT0FDLFFBV0NDOzs7Ozs7Ozs7O29CQWxCREYsYUFBYVAsY0FBY0csSUFBSU8sT0FBTyxDQUFDQyxNQUFNO29CQUNuREwsUUFBUUMsV0FBV0o7b0JBRW5CLElBQUlBLElBQUlTLElBQUksQ0FBQ04sS0FBSyxFQUFFO3dCQUNsQkEsUUFBUUgsSUFBSVMsSUFBSSxDQUFDTixLQUFLO29CQUN4QjtvQkFFZTs7d0JBQU1MLFFBQVE7NEJBQzNCRSxLQUFBQTs0QkFDQUMsS0FBQUE7NEJBQ0FTLFlBQVlWLElBQUlVLFVBQVU7NEJBQzFCUCxPQUFBQTt3QkFDRjs7O29CQUxNRSxTQUFTO29CQU9mOzt3QkFBT0osSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQzs0QkFDMUJDLFNBQVM7MkJBQ05SOzs7b0JBRUVDO29CQUNQOzt3QkFBT0osS0FBS0k7Ozs7Ozs7O0lBRWhCO1dBekI4QlAifQ==