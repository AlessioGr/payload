"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findByIDResolver;
    }
});
var _findByID = /*#__PURE__*/ _interop_require_default(require("../../operations/findByID"));
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
function findByIDResolver(collection) {
    return function() {
        var _resolver = _async_to_generator(function(_, args, context) {
            var req, options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        req = context.req;
                        if (args.locale) req.locale = args.locale;
                        if (args.fallbackLocale) req.fallbackLocale = args.fallbackLocale;
                        options = {
                            collection: collection,
                            id: args.id,
                            req: req,
                            draft: args.draft,
                            depth: 0
                        };
                        return [
                            4,
                            (0, _findByID.default)(options)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9maW5kQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgU2NoZW1hQ29uZmlnIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZpbmRCeUlEIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZmluZEJ5SUQnO1xuXG5leHBvcnQgdHlwZSBSZXNvbHZlcjxUPiA9IChfOiB1bmtub3duLCBhcmdzOiB7XG4gIGxvY2FsZT86IHN0cmluZ1xuICBkcmFmdDogYm9vbGVhblxuICBpZDogc3RyaW5nXG4gIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG59LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlXG4gIH1cbikgPT4gUHJvbWlzZTxUPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQnlJRFJlc29sdmVyPFQgZXh0ZW5kcyBrZXlvZiBTY2hlbWFDb25maWdbJ2NvbGxlY3Rpb25zJ10+KGNvbGxlY3Rpb246IENvbGxlY3Rpb24pOiBSZXNvbHZlcjxTY2hlbWFDb25maWdbJ2NvbGxlY3Rpb25zJ11bVF0+IHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcbiAgICBpZiAoYXJncy5sb2NhbGUpIHJlcS5sb2NhbGUgPSBhcmdzLmxvY2FsZTtcbiAgICBpZiAoYXJncy5mYWxsYmFja0xvY2FsZSkgcmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgaWQ6IGFyZ3MuaWQsXG4gICAgICByZXEsXG4gICAgICBkcmFmdDogYXJncy5kcmFmdCxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kQnlJRChvcHRpb25zKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG4iXSwibmFtZXMiOlsiZmluZEJ5SURSZXNvbHZlciIsImNvbGxlY3Rpb24iLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsInJlcSIsIm9wdGlvbnMiLCJyZXN1bHQiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsImlkIiwiZHJhZnQiLCJkZXB0aCIsImZpbmRCeUlEIl0sIm1hcHBpbmdzIjoiOzs7OytCQWlCQTs7O2VBQXdCQTs7OytEQWRIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY04sU0FBU0EsaUJBQThEQyxVQUFzQjtJQUMxRztZQUFzQkMsWUFBZixvQkFBQSxTQUF3QkMsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87Z0JBQ3JDQyxLQUlGQyxTQVFBQzs7Ozt3QkFaRUYsTUFBUUQsUUFBUkM7d0JBQ1IsSUFBSUYsS0FBS0ssTUFBTSxFQUFFSCxJQUFJRyxNQUFNLEdBQUdMLEtBQUtLLE1BQU07d0JBQ3pDLElBQUlMLEtBQUtNLGNBQWMsRUFBRUosSUFBSUksY0FBYyxHQUFHTixLQUFLTSxjQUFjO3dCQUUzREgsVUFBVTs0QkFDZE4sWUFBQUE7NEJBQ0FVLElBQUlQLEtBQUtPLEVBQUU7NEJBQ1hMLEtBQUFBOzRCQUNBTSxPQUFPUixLQUFLUSxLQUFLOzRCQUNqQkMsT0FBTzt3QkFDVDt3QkFFZTs7NEJBQU1DLElBQUFBLGlCQUFRLEVBQUNQOzs7d0JBQXhCQyxTQUFTO3dCQUVmOzs0QkFBT0E7Ozs7UUFDVDtpQkFoQnNCTixTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTzttQkFBekJIOztlQUFBQTs7QUFpQnhCIn0=