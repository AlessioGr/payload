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
import create from "../../operations/create";
export default function createResolver(collection) {
    return function() {
        var _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (args.locale) {
                            context.req.locale = args.locale;
                        }
                        options = {
                            collection: collection,
                            data: args.data,
                            req: context.req,
                            draft: args.draft,
                            depth: 0
                        };
                        return [
                            4,
                            create(options)
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9jcmVhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBNYXJrT3B0aW9uYWwgfSBmcm9tICd0cy1lc3NlbnRpYWxzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9jcmVhdGUnO1xuXG5leHBvcnQgdHlwZSBSZXNvbHZlcjxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IChfOiB1bmtub3duLCBhcmdzOiB7XG4gIGRhdGE6IE1hcmtPcHRpb25hbDxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10sICdpZCcgfCAndXBkYXRlZEF0JyB8ICdjcmVhdGVkQXQnIHwgJ3NpemVzJz4sXG4gIGxvY2FsZT86IHN0cmluZ1xuICBkcmFmdDogYm9vbGVhblxufSxcbiAgY29udGV4dDoge1xuICAgIHJlcTogUGF5bG9hZFJlcXVlc3QsXG4gICAgcmVzOiBSZXNwb25zZVxuICB9XG4pID0+IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZXNvbHZlcjxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPihcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvbixcbik6IFJlc29sdmVyPFRTbHVnPiB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFyZ3MubG9jYWxlKSB7XG4gICAgICBjb250ZXh0LnJlcS5sb2NhbGUgPSBhcmdzLmxvY2FsZTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGRhdGE6IGFyZ3MuZGF0YSxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkcmFmdDogYXJncy5kcmFmdCxcbiAgICAgIGRlcHRoOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjcmVhdGUob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsImNyZWF0ZVJlc29sdmVyIiwiY29sbGVjdGlvbiIsInJlc29sdmVyIiwiXyIsImFyZ3MiLCJjb250ZXh0Iiwib3B0aW9ucyIsInJlc3VsdCIsImxvY2FsZSIsInJlcSIsImRhdGEiLCJkcmFmdCIsImRlcHRoIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEMsT0FBT0EsWUFBWSwwQkFBMEI7QUFhN0MsZUFBZSxTQUFTQyxlQUN0QkMsVUFBc0I7SUFFdEI7WUFBc0JDLFlBQWYsb0JBQUEsU0FBd0JDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dCQUt2Q0MsU0FRQUM7Ozs7d0JBWk4sSUFBSUgsS0FBS0ksTUFBTSxFQUFFOzRCQUNmSCxRQUFRSSxHQUFHLENBQUNELE1BQU0sR0FBR0osS0FBS0ksTUFBTTt3QkFDbEM7d0JBRU1GLFVBQVU7NEJBQ2RMLFlBQUFBOzRCQUNBUyxNQUFNTixLQUFLTSxJQUFJOzRCQUNmRCxLQUFLSixRQUFRSSxHQUFHOzRCQUNoQkUsT0FBT1AsS0FBS08sS0FBSzs0QkFDakJDLE9BQU87d0JBQ1Q7d0JBRWU7OzRCQUFNYixPQUFPTzs7O3dCQUF0QkMsU0FBUzt3QkFFZjs7NEJBQU9BOzs7O1FBQ1Q7aUJBaEJzQkwsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87bUJBQXpCSDs7ZUFBQUE7O0FBaUJ4QiJ9