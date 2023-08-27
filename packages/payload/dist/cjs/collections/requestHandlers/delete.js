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
var _delete = /*#__PURE__*/ _interop_require_default(require("../operations/delete"));
var _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
var _getTranslation = require("../../utilities/getTranslation");
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
        var result, message, total, message1, error;
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
                            collection: req.collection,
                            where: req.query.where,
                            depth: parseInt(String(req.query.depth), 10)
                        })
                    ];
                case 1:
                    result = _state.sent();
                    if (result.errors.length === 0) {
                        message = req.t("general:deletedCountSuccessfully", {
                            count: result.docs.length,
                            label: (0, _getTranslation.getTranslation)(req.collection.config.labels[result.docs.length > 1 ? "plural" : "singular"], req.i18n)
                        });
                        res.status(_httpstatus.default.OK).json(_object_spread({}, (0, _formatSuccess.default)(message, "message"), result));
                        return [
                            2
                        ];
                    }
                    total = result.docs.length + result.errors.length;
                    message1 = req.t("error:unableToDeleteCount", {
                        count: result.errors.length,
                        total: total,
                        label: (0, _getTranslation.getTranslation)(req.collection.config.labels[total > 1 ? "plural" : "singular"], req.i18n)
                    });
                    res.status(_httpstatus.default.BAD_REQUEST).json(_object_spread({
                        message: message1
                    }, result));
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
    return _deleteHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9yZXF1ZXN0SGFuZGxlcnMvZGVsZXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBEb2N1bWVudCwgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgZGVsZXRlT3BlcmF0aW9uIGZyb20gJy4uL29wZXJhdGlvbnMvZGVsZXRlJztcbmltcG9ydCBmb3JtYXRTdWNjZXNzUmVzcG9uc2UgZnJvbSAnLi4vLi4vZXhwcmVzcy9yZXNwb25zZXMvZm9ybWF0U3VjY2Vzcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmV4cG9ydCB0eXBlIERlbGV0ZVJlc3VsdCA9IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkb2M6IERvY3VtZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBkZWxldGVIYW5kbGVyKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8UmVzcG9uc2U8RGVsZXRlUmVzdWx0PiB8IHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkZWxldGVPcGVyYXRpb24oe1xuICAgICAgcmVxLFxuICAgICAgY29sbGVjdGlvbjogcmVxLmNvbGxlY3Rpb24sXG4gICAgICB3aGVyZTogcmVxLnF1ZXJ5LndoZXJlIGFzIFdoZXJlLFxuICAgICAgZGVwdGg6IHBhcnNlSW50KFN0cmluZyhyZXEucXVlcnkuZGVwdGgpLCAxMCksXG4gICAgfSk7XG5cbiAgICBpZiAocmVzdWx0LmVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXEudCgnZ2VuZXJhbDpkZWxldGVkQ291bnRTdWNjZXNzZnVsbHknLCB7XG4gICAgICAgIGNvdW50OiByZXN1bHQuZG9jcy5sZW5ndGgsXG4gICAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihyZXEuY29sbGVjdGlvbi5jb25maWcubGFiZWxzW3Jlc3VsdC5kb2NzLmxlbmd0aCA+IDEgPyAncGx1cmFsJyA6ICdzaW5ndWxhciddLCByZXEuaTE4biksXG4gICAgICB9KTtcblxuICAgICAgcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHtcbiAgICAgICAgLi4uZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlKG1lc3NhZ2UsICdtZXNzYWdlJyksXG4gICAgICAgIC4uLnJlc3VsdCxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsID0gcmVzdWx0LmRvY3MubGVuZ3RoICsgcmVzdWx0LmVycm9ycy5sZW5ndGg7XG4gICAgY29uc3QgbWVzc2FnZSA9IHJlcS50KCdlcnJvcjp1bmFibGVUb0RlbGV0ZUNvdW50Jywge1xuICAgICAgY291bnQ6IHJlc3VsdC5lcnJvcnMubGVuZ3RoLFxuICAgICAgdG90YWwsXG4gICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24ocmVxLmNvbGxlY3Rpb24uY29uZmlnLmxhYmVsc1t0b3RhbCA+IDEgPyAncGx1cmFsJyA6ICdzaW5ndWxhciddLCByZXEuaTE4biksXG4gICAgfSk7XG5cbiAgICByZXMuc3RhdHVzKGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpLmpzb24oe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIC4uLnJlc3VsdCxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRlbGV0ZUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVzdWx0IiwibWVzc2FnZSIsInRvdGFsIiwiZXJyb3IiLCJkZWxldGVPcGVyYXRpb24iLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJxdWVyeSIsImRlcHRoIiwicGFyc2VJbnQiLCJTdHJpbmciLCJlcnJvcnMiLCJsZW5ndGgiLCJ0IiwiY291bnQiLCJkb2NzIiwibGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImNvbmZpZyIsImxhYmVscyIsImkxOG4iLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwiZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIiwiQkFEX1JFUVVFU1QiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYUE7OztlQUE4QkE7OztpRUFaUDs2REFHSztvRUFDTTs4QkFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FPREEsY0FBY0MsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtXQUFwRUg7O1NBQUFBO0lBQUFBLGlCQUFmLG9CQUFBLFNBQTZCQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBRXhGQyxRQVFFQyxTQVlGQyxPQUNBRCxVQVVDRTs7Ozs7Ozs7OztvQkEvQlE7O3dCQUFNQyxJQUFBQSxlQUFlLEVBQUM7NEJBQ25DUCxLQUFBQTs0QkFDQVEsWUFBWVIsSUFBSVEsVUFBVTs0QkFDMUJDLE9BQU9ULElBQUlVLEtBQUssQ0FBQ0QsS0FBSzs0QkFDdEJFLE9BQU9DLFNBQVNDLE9BQU9iLElBQUlVLEtBQUssQ0FBQ0MsS0FBSyxHQUFHO3dCQUMzQzs7O29CQUxNUixTQUFTO29CQU9mLElBQUlBLE9BQU9XLE1BQU0sQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7d0JBQ3hCWCxVQUFVSixJQUFJZ0IsQ0FBQyxDQUFDLG9DQUFvQzs0QkFDeERDLE9BQU9kLE9BQU9lLElBQUksQ0FBQ0gsTUFBTTs0QkFDekJJLE9BQU9DLElBQUFBLDhCQUFjLEVBQUNwQixJQUFJUSxVQUFVLENBQUNhLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDbkIsT0FBT2UsSUFBSSxDQUFDSCxNQUFNLEdBQUcsSUFBSSxXQUFXLFdBQVcsRUFBRWYsSUFBSXVCLElBQUk7d0JBQzlHO3dCQUVBdEIsSUFBSXVCLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUMsbUJBQzFCQyxJQUFBQSxzQkFBcUIsRUFBQ3hCLFNBQVMsWUFDL0JEO3dCQUVMOzs7b0JBQ0Y7b0JBRU1FLFFBQVFGLE9BQU9lLElBQUksQ0FBQ0gsTUFBTSxHQUFHWixPQUFPVyxNQUFNLENBQUNDLE1BQU07b0JBQ2pEWCxXQUFVSixJQUFJZ0IsQ0FBQyxDQUFDLDZCQUE2Qjt3QkFDakRDLE9BQU9kLE9BQU9XLE1BQU0sQ0FBQ0MsTUFBTTt3QkFDM0JWLE9BQUFBO3dCQUNBYyxPQUFPQyxJQUFBQSw4QkFBYyxFQUFDcEIsSUFBSVEsVUFBVSxDQUFDYSxNQUFNLENBQUNDLE1BQU0sQ0FBQ2pCLFFBQVEsSUFBSSxXQUFXLFdBQVcsRUFBRUwsSUFBSXVCLElBQUk7b0JBQ2pHO29CQUVBdEIsSUFBSXVCLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0ksV0FBVyxFQUFFRixJQUFJLENBQUM7d0JBQ3RDdkIsU0FBQUE7dUJBQ0dEOzs7Ozs7b0JBRUVHO29CQUNQSixLQUFLSTs7Ozs7Ozs7Ozs7SUFFVDtXQXBDOEJQIn0=