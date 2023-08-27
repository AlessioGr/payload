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
import findVersionByID from "../../operations/findVersionByID";
export default function findVersionByIDResolver(collection) {
    return function() {
        var _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (args.locale) context.req.locale = args.locale;
                        if (args.fallbackLocale) context.req.fallbackLocale = args.fallbackLocale;
                        options = {
                            collection: collection,
                            id: args.id,
                            req: context.req,
                            draft: args.draft,
                            depth: 0
                        };
                        return [
                            4,
                            findVersionByID(options)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9maW5kVmVyc2lvbkJ5SUQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uLCBUeXBlV2l0aElEIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZmluZFZlcnNpb25CeUlEIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCB0eXBlIHsgVHlwZVdpdGhWZXJzaW9uIH0gZnJvbSAnLi4vLi4vLi4vdmVyc2lvbnMvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBSZXNvbHZlcjxUIGV4dGVuZHMgVHlwZVdpdGhJRCA9IGFueT4gPSAoXG4gIF86IHVua25vd24sXG4gIGFyZ3M6IHtcbiAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICBmYWxsYmFja0xvY2FsZT86IHN0cmluZ1xuICAgIGRyYWZ0OiBib29sZWFuXG4gICAgaWQ6IG51bWJlciB8IHN0cmluZ1xuICB9LFxuICBjb250ZXh0OiB7XG4gICAgcmVxOiBQYXlsb2FkUmVxdWVzdCxcbiAgICByZXM6IFJlc3BvbnNlXG4gIH1cbikgPT4gUHJvbWlzZTxUeXBlV2l0aFZlcnNpb248VD4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRWZXJzaW9uQnlJRFJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pOiBSZXNvbHZlciB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFyZ3MubG9jYWxlKSBjb250ZXh0LnJlcS5sb2NhbGUgPSBhcmdzLmxvY2FsZTtcbiAgICBpZiAoYXJncy5mYWxsYmFja0xvY2FsZSkgY29udGV4dC5yZXEuZmFsbGJhY2tMb2NhbGUgPSBhcmdzLmZhbGxiYWNrTG9jYWxlO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBpZDogYXJncy5pZCxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkcmFmdDogYXJncy5kcmFmdCxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaW5kVmVyc2lvbkJ5SUQob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9uQnlJRCIsImZpbmRWZXJzaW9uQnlJRFJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0Iiwib3B0aW9ucyIsInJlc3VsdCIsImxvY2FsZSIsInJlcSIsImZhbGxiYWNrTG9jYWxlIiwiaWQiLCJkcmFmdCIsImRlcHRoIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEMsT0FBT0EscUJBQXFCLG1DQUFtQztBQWlCL0QsZUFBZSxTQUFTQyx3QkFBd0JDLFVBQXNCO0lBQ3BFO1lBQXNCQyxZQUFmLG9CQUFBLFNBQXdCQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQkFJdkNDLFNBUUFDOzs7O3dCQVhOLElBQUlILEtBQUtJLE1BQU0sRUFBRUgsUUFBUUksR0FBRyxDQUFDRCxNQUFNLEdBQUdKLEtBQUtJLE1BQU07d0JBQ2pELElBQUlKLEtBQUtNLGNBQWMsRUFBRUwsUUFBUUksR0FBRyxDQUFDQyxjQUFjLEdBQUdOLEtBQUtNLGNBQWM7d0JBRW5FSixVQUFVOzRCQUNkTCxZQUFBQTs0QkFDQVUsSUFBSVAsS0FBS08sRUFBRTs0QkFDWEYsS0FBS0osUUFBUUksR0FBRzs0QkFDaEJHLE9BQU9SLEtBQUtRLEtBQUs7NEJBQ2pCQyxPQUFPO3dCQUNUO3dCQUVlOzs0QkFBTWQsZ0JBQWdCTzs7O3dCQUEvQkMsU0FBUzt3QkFFZjs7NEJBQU9BOzs7O1FBQ1Q7aUJBZnNCTCxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTzttQkFBekJIOztlQUFBQTs7QUFnQnhCIn0=