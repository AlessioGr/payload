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
var _resetPassword = /*#__PURE__*/ _interop_require_default(require("../../operations/resetPassword"));
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
function resetPasswordResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (args.locale) context.req.locale = args.locale;
                        if (args.fallbackLocale) context.req.fallbackLocale = args.fallbackLocale;
                        options = {
                            collection: collection,
                            data: args,
                            req: context.req,
                            res: context.res,
                            api: "GraphQL",
                            depth: 0
                        };
                        return [
                            4,
                            (0, _resetPassword.default)(options)
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
        return _resolver.apply(this, arguments);
    }
    return resolver;
}
var _default = resetPasswordResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3Jlc2V0UGFzc3dvcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHJlc2V0UGFzc3dvcmQgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9yZXNldFBhc3N3b3JkJztcblxuZnVuY3Rpb24gcmVzZXRQYXNzd29yZFJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pIHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGlmIChhcmdzLmxvY2FsZSkgY29udGV4dC5yZXEubG9jYWxlID0gYXJncy5sb2NhbGU7XG4gICAgaWYgKGFyZ3MuZmFsbGJhY2tMb2NhbGUpIGNvbnRleHQucmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZGF0YTogYXJncyxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICByZXM6IGNvbnRleHQucmVzLFxuICAgICAgYXBpOiAnR3JhcGhRTCcsXG4gICAgICBkZXB0aDogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzZXRQYXNzd29yZChvcHRpb25zKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2V0UGFzc3dvcmRSZXNvbHZlcjtcbiJdLCJuYW1lcyI6WyJyZXNldFBhc3N3b3JkUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwicmVzdWx0IiwibG9jYWxlIiwicmVxIiwiZmFsbGJhY2tMb2NhbGUiLCJkYXRhIiwicmVzIiwiYXBpIiwiZGVwdGgiLCJyZXNldFBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBMEJwQzs7O2VBQUE7OztvRUF4QjBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLFNBQVNBLHNCQUFzQkMsVUFBc0I7YUFDcENDLFNBQVNDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2VBQXpCSDs7YUFBQUE7UUFBQUEsWUFBZixvQkFBQSxTQUF3QkMsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87Z0JBSWhDQyxTQVNBQzs7Ozt3QkFaTixJQUFJSCxLQUFLSSxNQUFNLEVBQUVILFFBQVFJLEdBQUcsQ0FBQ0QsTUFBTSxHQUFHSixLQUFLSSxNQUFNO3dCQUNqRCxJQUFJSixLQUFLTSxjQUFjLEVBQUVMLFFBQVFJLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHTixLQUFLTSxjQUFjO3dCQUVuRUosVUFBVTs0QkFDZEwsWUFBQUE7NEJBQ0FVLE1BQU1QOzRCQUNOSyxLQUFLSixRQUFRSSxHQUFHOzRCQUNoQkcsS0FBS1AsUUFBUU8sR0FBRzs0QkFDaEJDLEtBQUs7NEJBQ0xDLE9BQU87d0JBQ1Q7d0JBRWU7OzRCQUFNQyxJQUFBQSxzQkFBYSxFQUFDVDs7O3dCQUE3QkMsU0FBUzt3QkFFZjs7NEJBQU9BOzs7O1FBQ1Q7ZUFoQmVMOztJQWtCZixPQUFPQTtBQUNUO0lBRUEsV0FBZUYifQ==