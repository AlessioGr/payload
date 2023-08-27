/* eslint-disable no-param-reassign */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
import findOne from "../../operations/findOne";
export default function findOneResolver(globalConfig) {
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
                            req: context.req,
                            draft: args.draft
                        };
                        return [
                            4,
                            findOne(options)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2ZpbmRPbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cblxuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IGZpbmRPbmUgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9maW5kT25lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZE9uZVJlc29sdmVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogRG9jdW1lbnQge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGlmIChhcmdzLmxvY2FsZSkgY29udGV4dC5yZXEubG9jYWxlID0gYXJncy5sb2NhbGU7XG4gICAgaWYgKGFyZ3MuZmFsbGJhY2tMb2NhbGUpIGNvbnRleHQucmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZTtcblxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gZ2xvYmFsQ29uZmlnO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGdsb2JhbENvbmZpZyxcbiAgICAgIHNsdWcsXG4gICAgICBkZXB0aDogMCxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkcmFmdDogYXJncy5kcmFmdCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmluZE9uZShvcHRpb25zKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbImZpbmRPbmUiLCJmaW5kT25lUmVzb2x2ZXIiLCJnbG9iYWxDb25maWciLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsInNsdWciLCJvcHRpb25zIiwicmVzdWx0IiwibG9jYWxlIiwicmVxIiwiZmFsbGJhY2tMb2NhbGUiLCJkZXB0aCIsImRyYWZ0Il0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEMsT0FBT0EsYUFBYSwyQkFBMkI7QUFFL0MsZUFBZSxTQUFTQyxnQkFBZ0JDLFlBQW1DO0lBQ3pFO1lBQXNCQyxZQUFmLG9CQUFBLFNBQXdCQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQkFJckNDLE1BRUZDLFNBUUFDOzs7O3dCQWJOLElBQUlKLEtBQUtLLE1BQU0sRUFBRUosUUFBUUssR0FBRyxDQUFDRCxNQUFNLEdBQUdMLEtBQUtLLE1BQU07d0JBQ2pELElBQUlMLEtBQUtPLGNBQWMsRUFBRU4sUUFBUUssR0FBRyxDQUFDQyxjQUFjLEdBQUdQLEtBQUtPLGNBQWM7d0JBRWpFTCxPQUFTTCxhQUFUSzt3QkFFRkMsVUFBVTs0QkFDZE4sY0FBQUE7NEJBQ0FLLE1BQUFBOzRCQUNBTSxPQUFPOzRCQUNQRixLQUFLTCxRQUFRSyxHQUFHOzRCQUNoQkcsT0FBT1QsS0FBS1MsS0FBSzt3QkFDbkI7d0JBRWU7OzRCQUFNZCxRQUFRUTs7O3dCQUF2QkMsU0FBUzt3QkFDZjs7NEJBQU9BOzs7O1FBQ1Q7aUJBaEJzQk4sU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87bUJBQXpCSDs7ZUFBQUE7O0FBaUJ4QiJ9