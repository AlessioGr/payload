"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
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
var getValueWithDefault = function() {
    var _ref = _async_to_generator(function(param) {
        var value, defaultValue, locale, user;
        return _ts_generator(this, function(_state) {
            value = param.value, defaultValue = param.defaultValue, locale = param.locale, user = param.user;
            if (typeof value !== "undefined") {
                return [
                    2,
                    value
                ];
            }
            if (defaultValue && typeof defaultValue === "function") {
                return [
                    2,
                    defaultValue({
                        locale: locale,
                        user: user
                    })
                ];
            }
            return [
                2,
                defaultValue
            ];
        });
    });
    return function getValueWithDefault(_) {
        return _ref.apply(this, arguments);
    };
}();
var _default = getValueWithDefault;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvZ2V0RGVmYXVsdFZhbHVlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9hdXRoJztcblxudHlwZSBBcmdzID0ge1xuICB2YWx1ZT86IHVua25vd24sXG4gIGRlZmF1bHRWYWx1ZTogdW5rbm93bixcbiAgdXNlcjogVXNlcixcbiAgbG9jYWxlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG59O1xuXG5jb25zdCBnZXRWYWx1ZVdpdGhEZWZhdWx0ID0gYXN5bmMgKHsgdmFsdWUsIGRlZmF1bHRWYWx1ZSwgbG9jYWxlLCB1c2VyIH06IEFyZ3MpOiBQcm9taXNlPHVua25vd24+ID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAoZGVmYXVsdFZhbHVlICYmIHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlKHsgbG9jYWxlLCB1c2VyIH0pO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlV2l0aERlZmF1bHQ7XG4iXSwibmFtZXMiOlsiZ2V0VmFsdWVXaXRoRGVmYXVsdCIsInZhbHVlIiwiZGVmYXVsdFZhbHVlIiwibG9jYWxlIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7OztlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWkEsSUFBTUE7ZUFBc0Isb0JBQUE7WUFBU0MsT0FBT0MsY0FBY0MsUUFBUUM7O1lBQTdCSCxjQUFBQSxPQUFPQyxxQkFBQUEsY0FBY0MsZUFBQUEsUUFBUUMsYUFBQUE7WUFDaEUsSUFBSSxPQUFPSCxVQUFVLGFBQWE7Z0JBQ2hDOztvQkFBT0E7O1lBQ1Q7WUFFQSxJQUFJQyxnQkFBZ0IsT0FBT0EsaUJBQWlCLFlBQVk7Z0JBQ3REOztvQkFBT0EsYUFBYTt3QkFBRUMsUUFBQUE7d0JBQVFDLE1BQUFBO29CQUFLOztZQUNyQztZQUVBOztnQkFBT0Y7OztJQUNUO29CQVZNRjs7OztJQVlOLFdBQWVBIn0=