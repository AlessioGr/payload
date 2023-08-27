/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateResolver;
    }
});
var _update = /*#__PURE__*/ _interop_require_default(require("../../operations/update"));
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
function updateResolver(globalConfig) {
    return function() {
        var _resolver = _async_to_generator(function(_, args, context) {
            var slug, options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (args.locale) context.req.locale = args.locale;
                        if (args.fallbackLocale) context.req.fallbackLocale = args.fallbackLocale;
                        slug = globalConfig.slug;
                        options = {
                            globalConfig: globalConfig,
                            slug: slug,
                            depth: 0,
                            data: args.data,
                            req: context.req,
                            draft: args.draft
                        };
                        return [
                            4,
                            (0, _update.default)(options)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL3VwZGF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgRGVlcFBhcnRpYWwgfSBmcm9tICd0cy1lc3NlbnRpYWxzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuLi8uLi9vcGVyYXRpb25zL3VwZGF0ZSc7XG5cbnR5cGUgUmVzb2x2ZXI8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddPiA9IChcbiAgXzogdW5rbm93bixcbiAgYXJnczoge1xuICAgIGxvY2FsZT86IHN0cmluZ1xuICAgIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gICAgZGF0YT86IERlZXBQYXJ0aWFsPE9taXQ8R2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUU2x1Z10sICdpZCc+PlxuICAgIGRyYWZ0PzogYm9vbGVhblxuICB9LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlXG4gIH1cbikgPT4gUHJvbWlzZTxHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddW1RTbHVnXT5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlUmVzb2x2ZXI8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddPihcbiAgZ2xvYmFsQ29uZmlnOiBTYW5pdGl6ZWRHbG9iYWxDb25maWcsXG4pOiBSZXNvbHZlcjxUU2x1Zz4ge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGlmIChhcmdzLmxvY2FsZSkgY29udGV4dC5yZXEubG9jYWxlID0gYXJncy5sb2NhbGU7XG4gICAgaWYgKGFyZ3MuZmFsbGJhY2tMb2NhbGUpIGNvbnRleHQucmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZTtcblxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gZ2xvYmFsQ29uZmlnO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGdsb2JhbENvbmZpZyxcbiAgICAgIHNsdWcsXG4gICAgICBkZXB0aDogMCxcbiAgICAgIGRhdGE6IGFyZ3MuZGF0YSxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkcmFmdDogYXJncy5kcmFmdCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBkYXRlPFRTbHVnPihvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbInVwZGF0ZVJlc29sdmVyIiwiZ2xvYmFsQ29uZmlnIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJzbHVnIiwib3B0aW9ucyIsInJlc3VsdCIsImxvY2FsZSIsInJlcSIsImZhbGxiYWNrTG9jYWxlIiwiZGVwdGgiLCJkYXRhIiwiZHJhZnQiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7OzsrQkFxQnBDOzs7ZUFBd0JBOzs7NkRBaEJMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JKLFNBQVNBLGVBQ3RCQyxZQUFtQztJQUVuQztZQUFzQkMsWUFBZixvQkFBQSxTQUF3QkMsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87Z0JBSXJDQyxNQUVGQyxTQVNBQzs7Ozt3QkFkTixJQUFJSixLQUFLSyxNQUFNLEVBQUVKLFFBQVFLLEdBQUcsQ0FBQ0QsTUFBTSxHQUFHTCxLQUFLSyxNQUFNO3dCQUNqRCxJQUFJTCxLQUFLTyxjQUFjLEVBQUVOLFFBQVFLLEdBQUcsQ0FBQ0MsY0FBYyxHQUFHUCxLQUFLTyxjQUFjO3dCQUVqRUwsT0FBU0wsYUFBVEs7d0JBRUZDLFVBQVU7NEJBQ2ROLGNBQUFBOzRCQUNBSyxNQUFBQTs0QkFDQU0sT0FBTzs0QkFDUEMsTUFBTVQsS0FBS1MsSUFBSTs0QkFDZkgsS0FBS0wsUUFBUUssR0FBRzs0QkFDaEJJLE9BQU9WLEtBQUtVLEtBQUs7d0JBQ25CO3dCQUVlOzs0QkFBTUMsSUFBQUEsZUFBTSxFQUFRUjs7O3dCQUE3QkMsU0FBUzt3QkFDZjs7NEJBQU9BOzs7O1FBQ1Q7aUJBakJzQk4sU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87bUJBQXpCSDs7ZUFBQUE7O0FBa0J4QiJ9