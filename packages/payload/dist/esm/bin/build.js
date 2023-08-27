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
import loadConfig from "../config/load";
export var build = function() {
    var _ref = _async_to_generator(function() {
        var config;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        loadConfig()
                    ];
                case 1:
                    config = _state.sent();
                    return [
                        4,
                        config.admin.bundler.build(config)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function build() {
        return _ref.apply(this, arguments);
    };
}();
// when build.js is launched directly
if (module.id === require.main.id) {
    build();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vYnVpbGQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvYWRDb25maWcgZnJvbSAnLi4vY29uZmlnL2xvYWQnO1xuXG5leHBvcnQgY29uc3QgYnVpbGQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IGF3YWl0IGxvYWRDb25maWcoKTsgLy8gV2lsbCB0aHJvdyBpdHMgb3duIGVycm9yIGlmIGl0IGZhaWxzXG5cbiAgYXdhaXQgY29uZmlnLmFkbWluLmJ1bmRsZXIuYnVpbGQoY29uZmlnKTtcbn07XG5cbi8vIHdoZW4gYnVpbGQuanMgaXMgbGF1bmNoZWQgZGlyZWN0bHlcbmlmIChtb2R1bGUuaWQgPT09IHJlcXVpcmUubWFpbi5pZCkge1xuICBidWlsZCgpO1xufVxuIl0sIm5hbWVzIjpbImxvYWRDb25maWciLCJidWlsZCIsImNvbmZpZyIsImFkbWluIiwiYnVuZGxlciIsIm1vZHVsZSIsImlkIiwicmVxdWlyZSIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxnQkFBZ0IsaUJBQWlCO0FBRXhDLE9BQU8sSUFBTUM7ZUFBUSxvQkFBQTtZQUNiQzs7OztvQkFBUzs7d0JBQU1GOzs7b0JBQWZFLFNBQVM7b0JBRWY7O3dCQUFNQSxPQUFPQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0gsS0FBSyxDQUFDQzs7O29CQUFqQzs7Ozs7O0lBQ0Y7b0JBSmFEOzs7SUFJWDtBQUVGLHFDQUFxQztBQUNyQyxJQUFJSSxPQUFPQyxFQUFFLEtBQUtDLFFBQVFDLElBQUksQ0FBQ0YsRUFBRSxFQUFFO0lBQ2pDTDtBQUNGIn0=