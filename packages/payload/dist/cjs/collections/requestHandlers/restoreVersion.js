"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../operations/restoreVersion"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
function restoreVersionHandler(req, res, next) {
    return _restoreVersionHandler.apply(this, arguments);
}
function _restoreVersionHandler() {
    _restoreVersionHandler = _async_to_generator(function(req, res, next) {
        var options, doc, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    options = {
                        req: req,
                        collection: req.collection,
                        id: req.params.id,
                        depth: Number(req.query.depth),
                        payload: req.payload
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
                        (0, _restoreVersion.default)(options)
                    ];
                case 2:
                    doc = _state.sent();
                    res.status(_httpstatus.default.OK).json(_object_spread_props(_object_spread({}, (0, _formatSuccess.default)(req.t("version:restoredSuccessfully"), "message")), {
                        doc: doc
                    }));
                    return [
                        3,
                        4
                    ];
                case 3:
                    error = _state.sent();
                    next(error);
                    return [
                        3,
                        4
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _restoreVersionHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvcmVzdG9yZVZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGZvcm1hdFN1Y2Nlc3NSZXNwb25zZSBmcm9tICcuLi8uLi9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRTdWNjZXNzJztcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuLi9vcGVyYXRpb25zL3Jlc3RvcmVWZXJzaW9uJztcblxuZXhwb3J0IHR5cGUgUmVzdG9yZVJlc3VsdCA9IHtcbiAgbWVzc2FnZTogc3RyaW5nXG4gIGRvYzogRG9jdW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVWZXJzaW9uSGFuZGxlcihyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPFJlc3BvbnNlPFJlc3RvcmVSZXN1bHQ+IHwgdm9pZD4ge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHJlcSxcbiAgICBjb2xsZWN0aW9uOiByZXEuY29sbGVjdGlvbixcbiAgICBpZDogcmVxLnBhcmFtcy5pZCxcbiAgICBkZXB0aDogTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCksXG4gICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBkb2MgPSBhd2FpdCByZXN0b3JlVmVyc2lvbihvcHRpb25zKTtcbiAgICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spXG4gICAgICAuanNvbih7XG4gICAgICAgIC4uLmZvcm1hdFN1Y2Nlc3NSZXNwb25zZShyZXEudCgndmVyc2lvbjpyZXN0b3JlZFN1Y2Nlc3NmdWxseScpLCAnbWVzc2FnZScpLFxuICAgICAgICBkb2MsXG4gICAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlc3RvcmVWZXJzaW9uSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJvcHRpb25zIiwiZG9jIiwiZXJyb3IiLCJjb2xsZWN0aW9uIiwiaWQiLCJwYXJhbXMiLCJkZXB0aCIsIk51bWJlciIsInF1ZXJ5IiwicGF5bG9hZCIsInJlc3RvcmVWZXJzaW9uIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsImZvcm1hdFN1Y2Nlc3NSZXNwb25zZSIsInQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBWUE7OztlQUE4QkE7OztpRUFYUDtvRUFHVztxRUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FPR0Esc0JBQXNCQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1dBQTVFSDs7U0FBQUE7SUFBQUEseUJBQWYsb0JBQUEsU0FBcUNDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7WUFDbEdDLFNBU0VDLEtBTUNDOzs7O29CQWZIRixVQUFVO3dCQUNkSCxLQUFBQTt3QkFDQU0sWUFBWU4sSUFBSU0sVUFBVTt3QkFDMUJDLElBQUlQLElBQUlRLE1BQU0sQ0FBQ0QsRUFBRTt3QkFDakJFLE9BQU9DLE9BQU9WLElBQUlXLEtBQUssQ0FBQ0YsS0FBSzt3QkFDN0JHLFNBQVNaLElBQUlZLE9BQU87b0JBQ3RCOzs7Ozs7Ozs7b0JBR2M7O3dCQUFNQyxJQUFBQSx1QkFBYyxFQUFDVjs7O29CQUEzQkMsTUFBTTtvQkFDWkgsSUFBSWEsTUFBTSxDQUFDQyxtQkFBVSxDQUFDQyxFQUFFLEVBQ3JCQyxJQUFJLENBQUMsd0NBQ0RDLElBQUFBLHNCQUFxQixFQUFDbEIsSUFBSW1CLENBQUMsQ0FBQyxpQ0FBaUM7d0JBQ2hFZixLQUFBQTs7Ozs7OztvQkFFR0M7b0JBQ1BILEtBQUtHOzs7Ozs7Ozs7OztJQUVUO1dBbkI4Qk4ifQ==