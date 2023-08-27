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
function initAdmin(ctx) {
    return _initAdmin.apply(this, arguments);
}
function _initAdmin() {
    _initAdmin = _async_to_generator(function(ctx) {
        var _, _1, _tmp, _2, _3, _tmp1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!!ctx.config.admin.disable) return [
                        3,
                        4
                    ];
                    if (!(process.env.NODE_ENV === "production")) return [
                        3,
                        2
                    ];
                    _1 = (_ = ctx.express).use;
                    _tmp = [
                        ctx.config.routes.admin
                    ];
                    return [
                        4,
                        ctx.config.admin.bundler.serve(ctx)
                    ];
                case 1:
                    _1.apply(_, _tmp.concat([
                        _state.sent()
                    ]));
                    return [
                        3,
                        4
                    ];
                case 2:
                    _3 = (_2 = ctx.express).use;
                    _tmp1 = [
                        ctx.config.routes.admin
                    ];
                    return [
                        4,
                        ctx.config.admin.bundler.dev(ctx)
                    ];
                case 3:
                    _3.apply(_2, _tmp1.concat([
                        _state.sent()
                    ]));
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _initAdmin.apply(this, arguments);
}
export default initAdmin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL2FkbWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcblxuYXN5bmMgZnVuY3Rpb24gaW5pdEFkbWluKGN0eDogUGF5bG9hZCk6IFByb21pc2U8dm9pZD4ge1xuICBpZiAoIWN0eC5jb25maWcuYWRtaW4uZGlzYWJsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjdHguZXhwcmVzcy51c2UoY3R4LmNvbmZpZy5yb3V0ZXMuYWRtaW4sIGF3YWl0IGN0eC5jb25maWcuYWRtaW4uYnVuZGxlci5zZXJ2ZShjdHgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LmV4cHJlc3MudXNlKGN0eC5jb25maWcucm91dGVzLmFkbWluLCBhd2FpdCBjdHguY29uZmlnLmFkbWluLmJ1bmRsZXIuZGV2KGN0eCkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0QWRtaW47XG4iXSwibmFtZXMiOlsiaW5pdEFkbWluIiwiY3R4IiwiY29uZmlnIiwiYWRtaW4iLCJkaXNhYmxlIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiZXhwcmVzcyIsInVzZSIsInJvdXRlcyIsImJ1bmRsZXIiLCJzZXJ2ZSIsImRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVlQSxVQUFVQyxHQUFZO1dBQXRCRDs7U0FBQUE7SUFBQUEsYUFBZixvQkFBQSxTQUF5QkMsR0FBWTs7Ozs7eUJBQy9CLENBQUNBLElBQUlDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLEVBQXpCOzs7O3lCQUNFQyxDQUFBQSxRQUFRQyxHQUFHLENBQUNDLFFBQVEsS0FBSyxZQUFXLEdBQXBDRjs7Ozt5QkFDRkosS0FBQUEsSUFBSU8sT0FBTyxFQUFDQyxHQUFHOzt3QkFBQ1IsSUFBSUMsTUFBTSxDQUFDUSxNQUFNLENBQUNQLEtBQUs7O29CQUFFOzt3QkFBTUYsSUFBSUMsTUFBTSxDQUFDQyxLQUFLLENBQUNRLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDWDs7O29CQUE5RUEsR0FBQUE7d0JBQXlDOzs7Ozs7O3lCQUV6Q0EsTUFBQUEsSUFBSU8sT0FBTyxFQUFDQyxHQUFHOzt3QkFBQ1IsSUFBSUMsTUFBTSxDQUFDUSxNQUFNLENBQUNQLEtBQUs7O29CQUFFOzt3QkFBTUYsSUFBSUMsTUFBTSxDQUFDQyxLQUFLLENBQUNRLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDWjs7O29CQUE1RUEsR0FBQUE7d0JBQXlDOzs7Ozs7Ozs7SUFHL0M7V0FSZUQ7O0FBVWYsZUFBZUEsVUFBVSJ9