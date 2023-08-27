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
import forgotPassword from "../../operations/forgotPassword";
function forgotPasswordResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var options;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        options = {
                            collection: collection,
                            data: {
                                email: args.email
                            },
                            req: context.req,
                            disableEmail: args.disableEmail,
                            expiration: args.expiration
                        };
                        return [
                            4,
                            forgotPassword(options)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2,
                            true
                        ];
                }
            });
        });
        return _resolver.apply(this, arguments);
    }
    return resolver;
}
export default forgotPasswordResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2ZvcmdvdFBhc3N3b3JkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZvcmdvdFBhc3N3b3JkIGZyb20gJy4uLy4uL29wZXJhdGlvbnMvZm9yZ290UGFzc3dvcmQnO1xuXG5mdW5jdGlvbiBmb3Jnb3RQYXNzd29yZFJlc29sdmVyKGNvbGxlY3Rpb246IENvbGxlY3Rpb24pOiBhbnkge1xuICBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGVtYWlsOiBhcmdzLmVtYWlsLFxuICAgICAgfSxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkaXNhYmxlRW1haWw6IGFyZ3MuZGlzYWJsZUVtYWlsLFxuICAgICAgZXhwaXJhdGlvbjogYXJncy5leHBpcmF0aW9uLFxuICAgIH07XG5cbiAgICBhd2FpdCBmb3Jnb3RQYXNzd29yZChvcHRpb25zKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yZ290UGFzc3dvcmRSZXNvbHZlcjtcbiJdLCJuYW1lcyI6WyJmb3Jnb3RQYXNzd29yZCIsImZvcmdvdFBhc3N3b3JkUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwiZGF0YSIsImVtYWlsIiwicmVxIiwiZGlzYWJsZUVtYWlsIiwiZXhwaXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLG9CQUFvQixrQ0FBa0M7QUFFN0QsU0FBU0MsdUJBQXVCQyxVQUFzQjthQUNyQ0MsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87ZUFBekJIOzthQUFBQTtRQUFBQSxZQUFmLG9CQUFBLFNBQXdCQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQkFDaENDOzs7O3dCQUFBQSxVQUFVOzRCQUNkTCxZQUFBQTs0QkFDQU0sTUFBTTtnQ0FDSkMsT0FBT0osS0FBS0ksS0FBSzs0QkFDbkI7NEJBQ0FDLEtBQUtKLFFBQVFJLEdBQUc7NEJBQ2hCQyxjQUFjTixLQUFLTSxZQUFZOzRCQUMvQkMsWUFBWVAsS0FBS08sVUFBVTt3QkFDN0I7d0JBRUE7OzRCQUFNWixlQUFlTzs7O3dCQUFyQjt3QkFDQTs7NEJBQU87Ozs7UUFDVDtlQWJlSjs7SUFlZixPQUFPQTtBQUNUO0FBRUEsZUFBZUYsdUJBQXVCIn0=