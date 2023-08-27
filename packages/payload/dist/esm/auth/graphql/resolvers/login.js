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
import login from "../../operations/login";
function loginResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var options, result;
            return _ts_generator(this, function(_state) {
                options = {
                    collection: collection,
                    data: {
                        email: args.email,
                        password: args.password
                    },
                    req: context.req,
                    res: context.res,
                    depth: 0
                };
                result = login(options);
                return [
                    2,
                    result
                ];
            });
        });
        return _resolver.apply(this, arguments);
    }
    return resolver;
}
export default loginResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2xvZ2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGxvZ2luIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvbG9naW4nO1xuXG5mdW5jdGlvbiBsb2dpblJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pIHtcbiAgYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZXIoXywgYXJncywgY29udGV4dCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgZGF0YToge1xuICAgICAgICBlbWFpbDogYXJncy5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IGFyZ3MucGFzc3dvcmQsXG4gICAgICB9LFxuICAgICAgcmVxOiBjb250ZXh0LnJlcSxcbiAgICAgIHJlczogY29udGV4dC5yZXMsXG4gICAgICBkZXB0aDogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gbG9naW4ob3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9naW5SZXNvbHZlcjtcbiJdLCJuYW1lcyI6WyJsb2dpbiIsImxvZ2luUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwicmVzdWx0IiwiZGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZXEiLCJyZXMiLCJkZXB0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLFdBQVcseUJBQXlCO0FBRTNDLFNBQVNDLGNBQWNDLFVBQXNCO2FBQzVCQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztlQUF6Qkg7O2FBQUFBO1FBQUFBLFlBQWYsb0JBQUEsU0FBd0JDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dCQUNoQ0MsU0FXQUM7O2dCQVhBRCxVQUFVO29CQUNkTCxZQUFBQTtvQkFDQU8sTUFBTTt3QkFDSkMsT0FBT0wsS0FBS0ssS0FBSzt3QkFDakJDLFVBQVVOLEtBQUtNLFFBQVE7b0JBQ3pCO29CQUNBQyxLQUFLTixRQUFRTSxHQUFHO29CQUNoQkMsS0FBS1AsUUFBUU8sR0FBRztvQkFDaEJDLE9BQU87Z0JBQ1Q7Z0JBRU1OLFNBQVNSLE1BQU1PO2dCQUNyQjs7b0JBQU9DOzs7UUFDVDtlQWRlTDs7SUFnQmYsT0FBT0E7QUFDVDtBQUVBLGVBQWVGLGNBQWMifQ==