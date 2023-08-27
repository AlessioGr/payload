"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resetLoginAttempts", {
    enumerable: true,
    get: function() {
        return resetLoginAttempts;
    }
});
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
var resetLoginAttempts = function() {
    var _ref = _async_to_generator(function(param) {
        var req, payload, doc, collection;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req = param.req, payload = param.payload, doc = param.doc, collection = param.collection;
                    return [
                        4,
                        payload.update({
                            req: req,
                            collection: collection.slug,
                            id: doc.id,
                            data: {
                                loginAttempts: 0,
                                lockUntil: null
                            }
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function resetLoginAttempts(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvcmVzZXRMb2dpbkF0dGVtcHRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLic7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBUeXBlV2l0aElEIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgcGF5bG9hZDogUGF5bG9hZFxuICBkb2M6IFR5cGVXaXRoSUQgJiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG59XG5cbmV4cG9ydCBjb25zdCByZXNldExvZ2luQXR0ZW1wdHMgPSBhc3luYyAoe1xuICByZXEsXG4gIHBheWxvYWQsXG4gIGRvYyxcbiAgY29sbGVjdGlvbixcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgYXdhaXQgcGF5bG9hZC51cGRhdGUoe1xuICAgIHJlcSxcbiAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLnNsdWcsXG4gICAgaWQ6IGRvYy5pZCxcbiAgICBkYXRhOiB7XG4gICAgICBsb2dpbkF0dGVtcHRzOiAwLFxuICAgICAgbG9ja1VudGlsOiBudWxsLFxuICAgIH0sXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJyZXNldExvZ2luQXR0ZW1wdHMiLCJyZXEiLCJwYXlsb2FkIiwiZG9jIiwiY29sbGVjdGlvbiIsInVwZGF0ZSIsInNsdWciLCJpZCIsImRhdGEiLCJsb2dpbkF0dGVtcHRzIiwibG9ja1VudGlsIl0sIm1hcHBpbmdzIjoiOzs7OytCQVdhQTs7O2VBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBTUE7ZUFBcUIsb0JBQUE7WUFDaENDLEtBQ0FDLFNBQ0FDLEtBQ0FDOzs7O29CQUhBSCxZQUFBQSxLQUNBQyxnQkFBQUEsU0FDQUMsWUFBQUEsS0FDQUMsbUJBQUFBO29CQUVBOzt3QkFBTUYsUUFBUUcsTUFBTSxDQUFDOzRCQUNuQkosS0FBQUE7NEJBQ0FHLFlBQVlBLFdBQVdFLElBQUk7NEJBQzNCQyxJQUFJSixJQUFJSSxFQUFFOzRCQUNWQyxNQUFNO2dDQUNKQyxlQUFlO2dDQUNmQyxXQUFXOzRCQUNiO3dCQUNGOzs7b0JBUkE7Ozs7OztJQVNGO29CQWZhViJ9