"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "initTransaction", {
    enumerable: true,
    get: function() {
        return initTransaction;
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
function initTransaction(req) {
    return _initTransaction.apply(this, arguments);
}
function _initTransaction() {
    _initTransaction = _async_to_generator(function(req) {
        var transactionID, payload;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    transactionID = req.transactionID, payload = req.payload;
                    if (!(!transactionID && typeof payload.db.beginTransaction === "function")) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        payload.db.beginTransaction()
                    ];
                case 1:
                    req.transactionID = _state.sent();
                    if (req.transactionID) {
                        return [
                            2,
                            true
                        ];
                    }
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        false
                    ];
            }
        });
    });
    return _initTransaction.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvaW5pdFRyYW5zYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcyc7XG5cbi8qKlxuICogU3RhcnRzIGEgbmV3IHRyYW5zYWN0aW9uIHVzaW5nIHRoZSBkYiBhZGFwdGVyIHdpdGggYSByYW5kb20gaWQgYW5kIHRoZW4gYXNzaWducyBpdCB0byB0aGUgcmVxLnRyYW5zYWN0aW9uXG4gKiBAcmV0dXJucyB0cnVlIGlmIGJlZ2lubmluZyBhIHRyYW5zYWN0aW9uIGFuZCBmYWxzZSB3aGVuIHJlcSBhbHJlYWR5IGhhcyBhIHRyYW5zYWN0aW9uIHRvIHVzZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdFRyYW5zYWN0aW9uKHJlcTogUGF5bG9hZFJlcXVlc3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3Qge1xuICAgIHRyYW5zYWN0aW9uSUQsXG4gICAgcGF5bG9hZCxcbiAgfSA9IHJlcTtcbiAgaWYgKCF0cmFuc2FjdGlvbklEICYmIHR5cGVvZiBwYXlsb2FkLmRiLmJlZ2luVHJhbnNhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXEudHJhbnNhY3Rpb25JRCA9IGF3YWl0IHBheWxvYWQuZGIuYmVnaW5UcmFuc2FjdGlvbigpO1xuICAgIGlmIChyZXEudHJhbnNhY3Rpb25JRCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiJdLCJuYW1lcyI6WyJpbml0VHJhbnNhY3Rpb24iLCJyZXEiLCJ0cmFuc2FjdGlvbklEIiwicGF5bG9hZCIsImRiIiwiYmVnaW5UcmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFNc0JBOzs7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FBQUEsZ0JBQWdCQyxHQUFtQjtXQUFuQ0Q7O1NBQUFBO0lBQUFBLG1CQUFmLG9CQUFBLFNBQStCQyxHQUFtQjtZQUVyREMsZUFDQUM7Ozs7b0JBREFELGdCQUVFRCxJQUZGQyxlQUNBQyxVQUNFRixJQURGRTt5QkFFRSxDQUFBLENBQUNELGlCQUFpQixPQUFPQyxRQUFRQyxFQUFFLENBQUNDLGdCQUFnQixLQUFLLFVBQVMsR0FBbEU7Ozs7b0JBQ2tCOzt3QkFBTUYsUUFBUUMsRUFBRSxDQUFDQyxnQkFBZ0I7OztvQkFBckRKLElBQUlDLGFBQWEsR0FBRztvQkFDcEIsSUFBSUQsSUFBSUMsYUFBYSxFQUFFO3dCQUNyQjs7NEJBQU87O29CQUNUOzs7b0JBRUY7O3dCQUFPOzs7O0lBQ1Q7V0Fac0JGIn0=