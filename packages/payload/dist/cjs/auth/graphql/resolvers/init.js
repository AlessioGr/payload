"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _init = /*#__PURE__*/ _interop_require_default(require("../../operations/init"));
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
function initResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var options;
            return _ts_generator(this, function(_state) {
                options = {
                    collection: collection,
                    req: context.req
                };
                return [
                    2,
                    (0, _init.default)(options)
                ];
            });
        });
        return _resolver.apply(this, arguments);
    }
    return resolver;
}
var _default = initResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL2luaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXQgZnJvbSAnLi4vLi4vb3BlcmF0aW9ucy9pbml0JztcblxuZnVuY3Rpb24gaW5pdFJlc29sdmVyKGNvbGxlY3Rpb246IHN0cmluZykge1xuICBhc3luYyBmdW5jdGlvbiByZXNvbHZlcihfLCBhcmdzLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICByZXE6IGNvbnRleHQucmVxLFxuICAgIH07XG5cbiAgICByZXR1cm4gaW5pdChvcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiByZXNvbHZlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdFJlc29sdmVyO1xuIl0sIm5hbWVzIjpbImluaXRSZXNvbHZlciIsImNvbGxlY3Rpb24iLCJyZXNvbHZlciIsIl8iLCJhcmdzIiwiY29udGV4dCIsIm9wdGlvbnMiLCJyZXEiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7OytCQWVBOzs7ZUFBQTs7OzJEQWZpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixTQUFTQSxhQUFhQyxVQUFrQjthQUN2QkMsU0FBU0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU87ZUFBekJIOzthQUFBQTtRQUFBQSxZQUFmLG9CQUFBLFNBQXdCQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztnQkFDaENDOztnQkFBQUEsVUFBVTtvQkFDZEwsWUFBQUE7b0JBQ0FNLEtBQUtGLFFBQVFFLEdBQUc7Z0JBQ2xCO2dCQUVBOztvQkFBT0MsSUFBQUEsYUFBSSxFQUFDRjs7O1FBQ2Q7ZUFQZUo7O0lBU2YsT0FBT0E7QUFDVDtJQUVBLFdBQWVGIn0=