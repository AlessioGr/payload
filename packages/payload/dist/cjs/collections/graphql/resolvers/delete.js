/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getDeleteResolver;
    }
});
var _deleteByID = /*#__PURE__*/ _interop_require_default(require("../../operations/deleteByID"));
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
function getDeleteResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
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
                            depth: 0
                        };
                        return [
                            4,
                            (0, _deleteByID.default)(options)
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
        return _resolver.apply(this, arguments);
    }
    return resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9ncmFwaHFsL3Jlc29sdmVycy9kZWxldGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZGVsZXRlQnlJRCBmcm9tICcuLi8uLi9vcGVyYXRpb25zL2RlbGV0ZUJ5SUQnO1xuXG5leHBvcnQgdHlwZSBSZXNvbHZlcjxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddPiA9IChcbiAgXzogdW5rbm93bixcbiAgYXJnczoge1xuICAgIGxvY2FsZT86IHN0cmluZ1xuICAgIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gIH0sXG4gIGNvbnRleHQ6IHtcbiAgICByZXE6IFBheWxvYWRSZXF1ZXN0LFxuICAgIHJlczogUmVzcG9uc2VcbiAgfVxuKSA9PiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydjb2xsZWN0aW9ucyddW1RTbHVnXT5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGVsZXRlUmVzb2x2ZXI8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb24sXG4pOiBSZXNvbHZlcjxUU2x1Zz4ge1xuICBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgaWYgKGFyZ3MubG9jYWxlKSBjb250ZXh0LnJlcS5sb2NhbGUgPSBhcmdzLmxvY2FsZTtcbiAgICBpZiAoYXJncy5mYWxsYmFja0xvY2FsZSkgY29udGV4dC5yZXEuZmFsbGJhY2tMb2NhbGUgPSBhcmdzLmZhbGxiYWNrTG9jYWxlO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBpZDogYXJncy5pZCxcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICBkZXB0aDogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZGVsZXRlQnlJRChvcHRpb25zKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gcmVzb2x2ZXI7XG59XG4iXSwibmFtZXMiOlsiZ2V0RGVsZXRlUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJvcHRpb25zIiwicmVzdWx0IiwibG9jYWxlIiwicmVxIiwiZmFsbGJhY2tMb2NhbGUiLCJpZCIsImRlcHRoIiwiZGVsZXRlQnlJRCJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQW1CcEM7OztlQUF3QkE7OztpRUFkRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNSLFNBQVNBLGtCQUN0QkMsVUFBc0I7YUFFUEMsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87ZUFBekJIOzthQUFBQTtRQUFBQSxZQUFmLG9CQUFBLFNBQXdCQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQkFJaENDLFNBT0FDOzs7O3dCQVZOLElBQUlILEtBQUtJLE1BQU0sRUFBRUgsUUFBUUksR0FBRyxDQUFDRCxNQUFNLEdBQUdKLEtBQUtJLE1BQU07d0JBQ2pELElBQUlKLEtBQUtNLGNBQWMsRUFBRUwsUUFBUUksR0FBRyxDQUFDQyxjQUFjLEdBQUdOLEtBQUtNLGNBQWM7d0JBRW5FSixVQUFVOzRCQUNkTCxZQUFBQTs0QkFDQVUsSUFBSVAsS0FBS08sRUFBRTs0QkFDWEYsS0FBS0osUUFBUUksR0FBRzs0QkFDaEJHLE9BQU87d0JBQ1Q7d0JBRWU7OzRCQUFNQyxJQUFBQSxtQkFBVSxFQUFDUDs7O3dCQUExQkMsU0FBUzt3QkFFZjs7NEJBQU9BOzs7O1FBQ1Q7ZUFkZUw7O0lBZ0JmLE9BQU9BO0FBQ1QifQ==