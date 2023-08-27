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
import { iterateFields } from "./iterateFields";
var buildStateFromSchema = function() {
    var _ref = _async_to_generator(function(args) {
        var fieldSchema, tmp, fullData, user, id, operation, locale, t, preferences, state;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fieldSchema = args.fieldSchema, tmp = args.data, fullData = tmp === void 0 ? {} : tmp, user = args.user, id = args.id, operation = args.operation, locale = args.locale, t = args.t, preferences = args.preferences;
                    if (!fieldSchema) return [
                        3,
                        2
                    ];
                    state = {};
                    return [
                        4,
                        iterateFields({
                            state: state,
                            fields: fieldSchema,
                            id: id,
                            locale: locale,
                            operation: operation,
                            path: "",
                            user: user,
                            data: fullData,
                            fullData: fullData,
                            parentPassesCondition: true,
                            t: t,
                            preferences: preferences
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        state
                    ];
                case 2:
                    return [
                        2,
                        {}
                    ];
            }
        });
    });
    return function buildStateFromSchema(args) {
        return _ref.apply(this, arguments);
    };
}();
export default buildStateFromSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBURnVuY3Rpb24gfSBmcm9tICdpMThuZXh0JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9hdXRoJztcbmltcG9ydCB7IEZpZWxkIGFzIEZpZWxkU2NoZW1hIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZHMsIERhdGEgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpdGVyYXRlRmllbGRzIH0gZnJvbSAnLi9pdGVyYXRlRmllbGRzJztcblxudHlwZSBBcmdzID0ge1xuICBmaWVsZFNjaGVtYTogRmllbGRTY2hlbWFbXVxuICBkYXRhPzogRGF0YSxcbiAgc2libGluZ0RhdGE/OiBEYXRhLFxuICB1c2VyPzogVXNlcixcbiAgaWQ/OiBzdHJpbmcgfCBudW1iZXIsXG4gIG9wZXJhdGlvbj86ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgbG9jYWxlOiBzdHJpbmdcbiAgdDogVEZ1bmN0aW9uXG4gIHByZWZlcmVuY2VzOiB7XG4gICAgW2tleTogc3RyaW5nXTogdW5rbm93blxuICB9XG59XG5cbmNvbnN0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hID0gYXN5bmMgKGFyZ3M6IEFyZ3MpOiBQcm9taXNlPEZpZWxkcz4gPT4ge1xuICBjb25zdCB7XG4gICAgZmllbGRTY2hlbWEsXG4gICAgZGF0YTogZnVsbERhdGEgPSB7fSxcbiAgICB1c2VyLFxuICAgIGlkLFxuICAgIG9wZXJhdGlvbixcbiAgICBsb2NhbGUsXG4gICAgdCxcbiAgICBwcmVmZXJlbmNlcyxcbiAgfSA9IGFyZ3M7XG5cbiAgaWYgKGZpZWxkU2NoZW1hKSB7XG4gICAgY29uc3Qgc3RhdGU6IEZpZWxkcyA9IHt9O1xuXG4gICAgYXdhaXQgaXRlcmF0ZUZpZWxkcyh7XG4gICAgICBzdGF0ZSxcbiAgICAgIGZpZWxkczogZmllbGRTY2hlbWEsXG4gICAgICBpZCxcbiAgICAgIGxvY2FsZSxcbiAgICAgIG9wZXJhdGlvbixcbiAgICAgIHBhdGg6ICcnLFxuICAgICAgdXNlcixcbiAgICAgIGRhdGE6IGZ1bGxEYXRhLFxuICAgICAgZnVsbERhdGEsXG4gICAgICBwYXJlbnRQYXNzZXNDb25kaXRpb246IHRydWUsXG4gICAgICB0LFxuICAgICAgcHJlZmVyZW5jZXMsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4ge307XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkU3RhdGVGcm9tU2NoZW1hO1xuIl0sIm5hbWVzIjpbIml0ZXJhdGVGaWVsZHMiLCJidWlsZFN0YXRlRnJvbVNjaGVtYSIsImFyZ3MiLCJmaWVsZFNjaGVtYSIsImZ1bGxEYXRhIiwidXNlciIsImlkIiwib3BlcmF0aW9uIiwibG9jYWxlIiwidCIsInByZWZlcmVuY2VzIiwic3RhdGUiLCJkYXRhIiwiZmllbGRzIiwicGF0aCIsInBhcmVudFBhc3Nlc0NvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLFNBQVNBLGFBQWEsUUFBUSxrQkFBa0I7QUFnQmhELElBQU1DO2VBQXVCLG9CQUFBLFNBQU9DO1lBRWhDQyxhQUNNQyxLQUFBQSxVQUNOQyxNQUNBQyxJQUNBQyxXQUNBQyxRQUNBQyxHQUNBQyxhQUlNQzs7OztvQkFYTlIsY0FRRUQsS0FSRkMsYUFDTUMsTUFPSkYsS0FQRlUsTUFBTVIsV0FBQUEsaUJBQVcsQ0FBQyxJQUFaQSxLQUNOQyxPQU1FSCxLQU5GRyxNQUNBQyxLQUtFSixLQUxGSSxJQUNBQyxZQUlFTCxLQUpGSyxXQUNBQyxTQUdFTixLQUhGTSxRQUNBQyxJQUVFUCxLQUZGTyxHQUNBQyxjQUNFUixLQURGUTt5QkFHRVAsYUFBQUE7Ozs7b0JBQ0lRLFFBQWdCLENBQUM7b0JBRXZCOzt3QkFBTVgsY0FBYzs0QkFDbEJXLE9BQUFBOzRCQUNBRSxRQUFRVjs0QkFDUkcsSUFBQUE7NEJBQ0FFLFFBQUFBOzRCQUNBRCxXQUFBQTs0QkFDQU8sTUFBTTs0QkFDTlQsTUFBQUE7NEJBQ0FPLE1BQU1SOzRCQUNOQSxVQUFBQTs0QkFDQVcsdUJBQXVCOzRCQUN2Qk4sR0FBQUE7NEJBQ0FDLGFBQUFBO3dCQUNGOzs7b0JBYkE7b0JBZUE7O3dCQUFPQzs7O29CQUdUOzt3QkFBTyxDQUFDOzs7O0lBQ1Y7b0JBbENNVixxQkFBOEJDOzs7O0FBcUNwQyxlQUFlRCxxQkFBcUIifQ==