"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "killTransaction", {
    enumerable: true,
    get: function() {
        return killTransaction;
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
function killTransaction(req) {
    return _killTransaction.apply(this, arguments);
}
function _killTransaction() {
    _killTransaction = _async_to_generator(function(req) {
        var transactionID, payload;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    transactionID = req.transactionID, payload = req.payload;
                    if (!transactionID) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        payload.db.rollbackTransaction(req.transactionID)
                    ];
                case 1:
                    _state.sent();
                    delete req.transactionID;
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return _killTransaction.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMva2lsbFRyYW5zYWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcyc7XG5cbi8qKlxuICogUm9sbGJhY2sgdGhlIHRyYW5zYWN0aW9uIGZyb20gdGhlIHJlcSB1c2luZyB0aGUgZGIgYWRhcHRlciBhbmQgcmVtb3ZlcyBpdCBmcm9tIHRoZSByZXFcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGtpbGxUcmFuc2FjdGlvbihyZXE6IFBheWxvYWRSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHtcbiAgICB0cmFuc2FjdGlvbklELFxuICAgIHBheWxvYWQsXG4gIH0gPSByZXE7XG4gIGlmICh0cmFuc2FjdGlvbklEKSB7XG4gICAgYXdhaXQgcGF5bG9hZC5kYi5yb2xsYmFja1RyYW5zYWN0aW9uKHJlcS50cmFuc2FjdGlvbklEKTtcbiAgICBkZWxldGUgcmVxLnRyYW5zYWN0aW9uSUQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJraWxsVHJhbnNhY3Rpb24iLCJyZXEiLCJ0cmFuc2FjdGlvbklEIiwicGF5bG9hZCIsImRiIiwicm9sbGJhY2tUcmFuc2FjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFLc0JBOzs7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FBQUEsZ0JBQWdCQyxHQUFtQjtXQUFuQ0Q7O1NBQUFBO0lBQUFBLG1CQUFmLG9CQUFBLFNBQStCQyxHQUFtQjtZQUVyREMsZUFDQUM7Ozs7b0JBREFELGdCQUVFRCxJQUZGQyxlQUNBQyxVQUNFRixJQURGRTt5QkFFRUQsZUFBQUE7Ozs7b0JBQ0Y7O3dCQUFNQyxRQUFRQyxFQUFFLENBQUNDLG1CQUFtQixDQUFDSixJQUFJQyxhQUFhOzs7b0JBQXREO29CQUNBLE9BQU9ELElBQUlDLGFBQWE7Ozs7Ozs7O0lBRTVCO1dBVHNCRiJ9