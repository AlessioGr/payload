/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _verifyEmail = /*#__PURE__*/ _interop_require_default(require("../../operations/verifyEmail"));
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
function verifyEmailResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var options, success;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (args.locale) context.req.locale = args.locale;
                        if (args.fallbackLocale) context.req.fallbackLocale = args.fallbackLocale;
                        options = {
                            collection: collection,
                            token: args.token,
                            req: context.req,
                            res: context.res,
                            api: "GraphQL"
                        };
                        return [
                            4,
                            (0, _verifyEmail.default)(options)
                        ];
                    case 1:
                        success = _state.sent();
                        return [
                            2,
                            success
                        ];
                }
            });
        });
        return _resolver.apply(this, arguments);
    }
    return resolver;
}
var _default = verifyEmailResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3ZlcmlmeUVtYWlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB2ZXJpZnlFbWFpbCBmcm9tICcuLi8uLi9vcGVyYXRpb25zL3ZlcmlmeUVtYWlsJztcblxuZnVuY3Rpb24gdmVyaWZ5RW1haWxSZXNvbHZlcihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBpZiAoYXJncy5sb2NhbGUpIGNvbnRleHQucmVxLmxvY2FsZSA9IGFyZ3MubG9jYWxlO1xuICAgIGlmIChhcmdzLmZhbGxiYWNrTG9jYWxlKSBjb250ZXh0LnJlcS5mYWxsYmFja0xvY2FsZSA9IGFyZ3MuZmFsbGJhY2tMb2NhbGU7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIHRva2VuOiBhcmdzLnRva2VuLFxuICAgICAgcmVxOiBjb250ZXh0LnJlcSxcbiAgICAgIHJlczogY29udGV4dC5yZXMsXG4gICAgICBhcGk6ICdHcmFwaFFMJyxcbiAgICB9O1xuXG4gICAgY29uc3Qgc3VjY2VzcyA9IGF3YWl0IHZlcmlmeUVtYWlsKG9wdGlvbnMpO1xuICAgIHJldHVybiBzdWNjZXNzO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlFbWFpbFJlc29sdmVyO1xuIl0sIm5hbWVzIjpbInZlcmlmeUVtYWlsUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwic3VjY2VzcyIsImxvY2FsZSIsInJlcSIsImZhbGxiYWNrTG9jYWxlIiwidG9rZW4iLCJyZXMiLCJhcGkiLCJ2ZXJpZnlFbWFpbCJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQXdCcEM7OztlQUFBOzs7a0VBdEJ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixTQUFTQSxvQkFBb0JDLFVBQXNCO2FBQ2xDQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztlQUF6Qkg7O2FBQUFBO1FBQUFBLFlBQWYsb0JBQUEsU0FBd0JDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dCQUloQ0MsU0FRQUM7Ozs7d0JBWE4sSUFBSUgsS0FBS0ksTUFBTSxFQUFFSCxRQUFRSSxHQUFHLENBQUNELE1BQU0sR0FBR0osS0FBS0ksTUFBTTt3QkFDakQsSUFBSUosS0FBS00sY0FBYyxFQUFFTCxRQUFRSSxHQUFHLENBQUNDLGNBQWMsR0FBR04sS0FBS00sY0FBYzt3QkFFbkVKLFVBQVU7NEJBQ2RMLFlBQUFBOzRCQUNBVSxPQUFPUCxLQUFLTyxLQUFLOzRCQUNqQkYsS0FBS0osUUFBUUksR0FBRzs0QkFDaEJHLEtBQUtQLFFBQVFPLEdBQUc7NEJBQ2hCQyxLQUFLO3dCQUNQO3dCQUVnQjs7NEJBQU1DLElBQUFBLG9CQUFXLEVBQUNSOzs7d0JBQTVCQyxVQUFVO3dCQUNoQjs7NEJBQU9BOzs7O1FBQ1Q7ZUFkZUw7O0lBZ0JmLE9BQU9BO0FBQ1Q7SUFFQSxXQUFlRiJ9