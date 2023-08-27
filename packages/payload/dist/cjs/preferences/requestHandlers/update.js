"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
var _update = /*#__PURE__*/ _interop_require_default(require("../operations/update"));
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
function updateHandler(req, res, next) {
    return _updateHandler.apply(this, arguments);
}
function _updateHandler() {
    _updateHandler = _async_to_generator(function(req, res, next) {
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
                        (0, _update.default)({
                            req: req,
                            user: req.user,
                            key: req.params.key,
                            value: req.body.value || req.body
                        })
                    ];
                case 1:
                    doc = _state.sent();
                    return [
                        2,
                        res.status(_httpstatus.default.OK).json(_object_spread_props(_object_spread({}, (0, _formatSuccess.default)(req.t("general:updatedSuccessfully"), "message")), {
                            doc: doc
                        }))
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
    return _updateHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIGZyb20gJy4uLy4uL2V4cHJlc3MvcmVzcG9uc2VzL2Zvcm1hdFN1Y2Nlc3MnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuLi9vcGVyYXRpb25zL3VwZGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxSZXNwb25zZTxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVsnX3ByZWZlcmVuY2UnXT4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgdXBkYXRlKHtcbiAgICAgIHJlcSxcbiAgICAgIHVzZXI6IHJlcS51c2VyLFxuICAgICAga2V5OiByZXEucGFyYW1zLmtleSxcbiAgICAgIHZhbHVlOiByZXEuYm9keS52YWx1ZSB8fCByZXEuYm9keSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spLmpzb24oe1xuICAgICAgLi4uZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlKHJlcS50KCdnZW5lcmFsOnVwZGF0ZWRTdWNjZXNzZnVsbHknKSwgJ21lc3NhZ2UnKSxcbiAgICAgIGRvYyxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gbmV4dChlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ1cGRhdGVIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsImRvYyIsImVycm9yIiwidXBkYXRlIiwidXNlciIsImtleSIsInBhcmFtcyIsInZhbHVlIiwiYm9keSIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJPSyIsImpzb24iLCJmb3JtYXRTdWNjZXNzUmVzcG9uc2UiLCJ0Il0sIm1hcHBpbmdzIjoiOzs7OytCQU9BOzs7ZUFBOEJBOzs7aUVBTlA7b0VBR1c7NkRBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRVdBLGNBQWNDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBcEVIOztTQUFBQTtJQUFBQSxpQkFBZixvQkFBQSxTQUE2QkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtZQUV4RkMsS0FXQ0M7Ozs7Ozs7Ozs7b0JBWEs7O3dCQUFNQyxJQUFBQSxlQUFNLEVBQUM7NEJBQ3ZCTCxLQUFBQTs0QkFDQU0sTUFBTU4sSUFBSU0sSUFBSTs0QkFDZEMsS0FBS1AsSUFBSVEsTUFBTSxDQUFDRCxHQUFHOzRCQUNuQkUsT0FBT1QsSUFBSVUsSUFBSSxDQUFDRCxLQUFLLElBQUlULElBQUlVLElBQUk7d0JBQ25DOzs7b0JBTE1QLE1BQU07b0JBT1o7O3dCQUFPRixJQUFJVSxNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFBRUMsSUFBSSxDQUFDLHdDQUNqQ0MsSUFBQUEsc0JBQXFCLEVBQUNmLElBQUlnQixDQUFDLENBQUMsZ0NBQWdDOzRCQUMvRGIsS0FBQUE7Ozs7b0JBRUtDO29CQUNQOzt3QkFBT0YsS0FBS0U7Ozs7Ozs7O0lBRWhCO1dBaEI4QkwifQ==