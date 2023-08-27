/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionByIDResolver;
    }
});
var _findVersionByID = /*#__PURE__*/ _interop_require_default(require("../../operations/findVersionByID"));
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
function findVersionByIDResolver(globalConfig) {
    return function() {
        var _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (args.locale) context.req.locale = args.locale;
                        if (args.fallbackLocale) context.req.fallbackLocale = args.fallbackLocale;
                        options = {
                            id: args.id,
                            globalConfig: globalConfig,
                            req: context.req,
                            draft: args.draft,
                            depth: 0
                        };
                        return [
                            4,
                            (0, _findVersionByID.default)(options)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2dyYXBocWwvcmVzb2x2ZXJzL2ZpbmRWZXJzaW9uQnlJRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZmluZFZlcnNpb25CeUlEIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZmluZFZlcnNpb25CeUlEJztcblxuZXhwb3J0IHR5cGUgUmVzb2x2ZXIgPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBpZDogc3RyaW5nIHwgbnVtYmVyXG4gICAgbG9jYWxlPzogc3RyaW5nXG4gICAgZHJhZnQ/OiBib29sZWFuXG4gICAgZmFsbGJhY2tMb2NhbGU/OiBzdHJpbmdcbiAgfSxcbiAgY29udGV4dDoge1xuICAgIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZVxuICB9XG4pID0+IFByb21pc2U8RG9jdW1lbnQ+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogUmVzb2x2ZXIge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGlmIChhcmdzLmxvY2FsZSkgY29udGV4dC5yZXEubG9jYWxlID0gYXJncy5sb2NhbGU7XG4gICAgaWYgKGFyZ3MuZmFsbGJhY2tMb2NhbGUpIGNvbnRleHQucmVxLmZhbGxiYWNrTG9jYWxlID0gYXJncy5mYWxsYmFja0xvY2FsZTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBpZDogYXJncy5pZCxcbiAgICAgIGdsb2JhbENvbmZpZyxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkcmFmdDogYXJncy5kcmFmdCxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kVmVyc2lvbkJ5SUQob3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbkJ5SURSZXNvbHZlciIsImdsb2JhbENvbmZpZyIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0Iiwib3B0aW9ucyIsInJlc3VsdCIsImxvY2FsZSIsInJlcSIsImZhbGxiYWNrTG9jYWxlIiwiaWQiLCJkcmFmdCIsImRlcHRoIiwiZmluZFZlcnNpb25CeUlEIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7K0JBcUJwQzs7O2VBQXdCQTs7O3NFQWhCSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCYixTQUFTQSx3QkFBd0JDLFlBQW1DO0lBQ2pGO1lBQXNCQyxZQUFmLG9CQUFBLFNBQXdCQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQkFJdkNDLFNBUUFDOzs7O3dCQVhOLElBQUlILEtBQUtJLE1BQU0sRUFBRUgsUUFBUUksR0FBRyxDQUFDRCxNQUFNLEdBQUdKLEtBQUtJLE1BQU07d0JBQ2pELElBQUlKLEtBQUtNLGNBQWMsRUFBRUwsUUFBUUksR0FBRyxDQUFDQyxjQUFjLEdBQUdOLEtBQUtNLGNBQWM7d0JBRW5FSixVQUFVOzRCQUNkSyxJQUFJUCxLQUFLTyxFQUFFOzRCQUNYVixjQUFBQTs0QkFDQVEsS0FBS0osUUFBUUksR0FBRzs0QkFDaEJHLE9BQU9SLEtBQUtRLEtBQUs7NEJBQ2pCQyxPQUFPO3dCQUNUO3dCQUVlOzs0QkFBTUMsSUFBQUEsd0JBQWUsRUFBQ1I7Ozt3QkFBL0JDLFNBQVM7d0JBQ2Y7OzRCQUFPQTs7OztRQUNUO2lCQWRzQkwsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87bUJBQXpCSDs7ZUFBQUE7O0FBZXhCIn0=