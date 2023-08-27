/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findResolver;
    }
});
var _find = /*#__PURE__*/ _interop_require_default(require("../../operations/find"));
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
function findResolver(collection) {
    return function() {
        var _resolver = _async_to_generator(function(_, args, context) {
            var options, results;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (args.locale) context.req.locale = args.locale;
                        if (args.fallbackLocale) context.req.fallbackLocale = args.fallbackLocale;
                        options = {
                            collection: collection,
                            where: args.where,
                            limit: args.limit,
                            page: args.page,
                            sort: args.sort,
                            req: context.req,
                            draft: args.draft,
                            depth: 0
                        };
                        return [
                            4,
                            (0, _find.default)(options)
                        ];
                    case 1:
                        results = _state.sent();
                        return [
                            2,
                            results
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9maW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBmaW5kIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZmluZCc7XG5cbmV4cG9ydCB0eXBlIFJlc29sdmVyID0gKF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICBkcmFmdDogYm9vbGVhblxuICAgIHdoZXJlPzogV2hlcmVcbiAgICBsaW1pdD86IG51bWJlcixcbiAgICBwYWdlPzogbnVtYmVyLFxuICAgIHNvcnQ/OiBzdHJpbmdcbiAgICBmYWxsYmFja0xvY2FsZT86IHN0cmluZ1xuICB9LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlXG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbikgPT4gUHJvbWlzZTxQYWdpbmF0ZWREb2NzPGFueT4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRSZXNvbHZlcihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKTogUmVzb2x2ZXIge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGlmIChhcmdzLmxvY2FsZSkgY29udGV4dC5yZXEubG9jYWxlID0gYXJncy5sb2NhbGU7XG4gICAgaWYgKGFyZ3MuZmFsbGJhY2tMb2NhbGUpIGNvbnRleHQucmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgd2hlcmU6IGFyZ3Mud2hlcmUsXG4gICAgICBsaW1pdDogYXJncy5saW1pdCxcbiAgICAgIHBhZ2U6IGFyZ3MucGFnZSxcbiAgICAgIHNvcnQ6IGFyZ3Muc29ydCxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkcmFmdDogYXJncy5kcmFmdCxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZmluZChvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwicmVzdWx0cyIsImxvY2FsZSIsInJlcSIsImZhbGxiYWNrTG9jYWxlIiwid2hlcmUiLCJsaW1pdCIsInBhZ2UiLCJzb3J0IiwiZHJhZnQiLCJkZXB0aCIsImZpbmQiXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7OzsrQkF5QnBDOzs7ZUFBd0JBOzs7MkRBcEJQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JGLFNBQVNBLGFBQWFDLFVBQXNCO0lBQ3pEO1lBQXNCQyxZQUFmLG9CQUFBLFNBQXdCQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQkFJdkNDLFNBV0FDOzs7O3dCQWROLElBQUlILEtBQUtJLE1BQU0sRUFBRUgsUUFBUUksR0FBRyxDQUFDRCxNQUFNLEdBQUdKLEtBQUtJLE1BQU07d0JBQ2pELElBQUlKLEtBQUtNLGNBQWMsRUFBRUwsUUFBUUksR0FBRyxDQUFDQyxjQUFjLEdBQUdOLEtBQUtNLGNBQWM7d0JBRW5FSixVQUFVOzRCQUNkTCxZQUFBQTs0QkFDQVUsT0FBT1AsS0FBS08sS0FBSzs0QkFDakJDLE9BQU9SLEtBQUtRLEtBQUs7NEJBQ2pCQyxNQUFNVCxLQUFLUyxJQUFJOzRCQUNmQyxNQUFNVixLQUFLVSxJQUFJOzRCQUNmTCxLQUFLSixRQUFRSSxHQUFHOzRCQUNoQk0sT0FBT1gsS0FBS1csS0FBSzs0QkFDakJDLE9BQU87d0JBQ1Q7d0JBRWdCOzs0QkFBTUMsSUFBQUEsYUFBSSxFQUFDWDs7O3dCQUFyQkMsVUFBVTt3QkFDaEI7OzRCQUFPQTs7OztRQUNUO2lCQWpCc0JMLFNBQVNDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO21CQUF6Qkg7O2VBQUFBOztBQWtCeEIifQ==