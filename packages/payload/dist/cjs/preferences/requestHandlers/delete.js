"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return deleteHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
var _delete = /*#__PURE__*/ _interop_require_default(require("../operations/delete"));
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
function deleteHandler(req, res, next) {
    return _deleteHandler.apply(this, arguments);
}
function _deleteHandler() {
    _deleteHandler = _async_to_generator(function(req, res, next) {
        var error;
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
                        (0, _delete.default)({
                            req: req,
                            user: req.user,
                            key: req.params.key
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        res.status(_httpstatus.default.OK).json(_object_spread({}, (0, _formatSuccess.default)(req.t("deletedSuccessfully"), "message")))
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
    return _deleteHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9yZXF1ZXN0SGFuZGxlcnMvZGVsZXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIGZyb20gJy4uLy4uL2V4cHJlc3MvcmVzcG9uc2VzL2Zvcm1hdFN1Y2Nlc3MnO1xuaW1wb3J0IGRlbGV0ZU9wZXJhdGlvbiBmcm9tICcuLi9vcGVyYXRpb25zL2RlbGV0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxSZXNwb25zZTx7bWVzc2FnZTogc3RyaW5nfT4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgZGVsZXRlT3BlcmF0aW9uKHtcbiAgICAgIHJlcSxcbiAgICAgIHVzZXI6IHJlcS51c2VyLFxuICAgICAga2V5OiByZXEucGFyYW1zLmtleSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oe1xuICAgICAgLi4uZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlKHJlcS50KCdkZWxldGVkU3VjY2Vzc2Z1bGx5JyksICdtZXNzYWdlJyksXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZGVsZXRlSGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiLCJlcnJvciIsImRlbGV0ZU9wZXJhdGlvbiIsInVzZXIiLCJrZXkiLCJwYXJhbXMiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIiwidCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFNQTs7O2VBQThCQTs7O2lFQUxQO29FQUVXOzZEQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVFQSxjQUFjQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1dBQXBFSDs7U0FBQUE7SUFBQUEsaUJBQWYsb0JBQUEsU0FBNkJDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7WUFXdkZDOzs7Ozs7Ozs7O29CQVRQOzt3QkFBTUMsSUFBQUEsZUFBZSxFQUFDOzRCQUNwQkosS0FBQUE7NEJBQ0FLLE1BQU1MLElBQUlLLElBQUk7NEJBQ2RDLEtBQUtOLElBQUlPLE1BQU0sQ0FBQ0QsR0FBRzt3QkFDckI7OztvQkFKQTtvQkFNQTs7d0JBQU9MLElBQUlPLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUMsbUJBQ2pDQyxJQUFBQSxzQkFBcUIsRUFBQ1osSUFBSWEsQ0FBQyxDQUFDLHdCQUF3Qjs7O29CQUVsRFY7b0JBQ1A7O3dCQUFPRCxLQUFLQzs7Ozs7Ozs7SUFFaEI7V0FkOEJKIn0=