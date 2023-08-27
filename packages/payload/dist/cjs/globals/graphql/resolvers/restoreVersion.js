/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionResolver;
    }
});
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../../operations/restoreVersion"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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
function restoreVersionResolver(globalConfig) {
    return function() {
        var _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        options = {
                            id: args.id,
                            globalConfig: globalConfig,
                            req: context.req,
                            depth: 0
                        };
                        return [
                            4,
                            (0, _restoreVersion.default)(options)
                        ];
                    case 1:
                        result = _state.sent();
                        return [
                            2,
                            result
                        ];
                }
            });
        });
        function resolver(_, args, context) {
            return _resolver.apply(this, arguments);
        }
        return resolver;
    }();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL3Jlc3RvcmVWZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuLi8uLi9vcGVyYXRpb25zL3Jlc3RvcmVWZXJzaW9uJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5cbnR5cGUgUmVzb2x2ZXIgPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2VcbiAgfVxuKSA9PiBQcm9taXNlPERvY3VtZW50PlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzdG9yZVZlcnNpb25SZXNvbHZlcihnbG9iYWxDb25maWc6IFNhbml0aXplZEdsb2JhbENvbmZpZyk6IFJlc29sdmVyIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgaWQ6IGFyZ3MuaWQsXG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICByZXE6IGNvbnRleHQucmVxLFxuICAgICAgZGVwdGg6IDAsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3RvcmVWZXJzaW9uKG9wdGlvbnMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG4iXSwibmFtZXMiOlsicmVzdG9yZVZlcnNpb25SZXNvbHZlciIsImdsb2JhbENvbmZpZyIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0Iiwib3B0aW9ucyIsInJlc3VsdCIsImlkIiwicmVxIiwiZGVwdGgiLCJyZXN0b3JlVmVyc2lvbiJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQWlCcEM7OztlQUF3QkE7OztxRUFiRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFaLFNBQVNBLHVCQUF1QkMsWUFBbUM7SUFDaEY7WUFBc0JDLFlBQWYsb0JBQUEsU0FBd0JDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dCQUN2Q0MsU0FPQUM7Ozs7d0JBUEFELFVBQVU7NEJBQ2RFLElBQUlKLEtBQUtJLEVBQUU7NEJBQ1hQLGNBQUFBOzRCQUNBUSxLQUFLSixRQUFRSSxHQUFHOzRCQUNoQkMsT0FBTzt3QkFDVDt3QkFFZTs7NEJBQU1DLElBQUFBLHVCQUFjLEVBQUNMOzs7d0JBQTlCQyxTQUFTO3dCQUNmOzs0QkFBT0E7Ozs7UUFDVDtpQkFWc0JMLFNBQVNDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO21CQUF6Qkg7O2VBQUFBOztBQVd4QiJ9