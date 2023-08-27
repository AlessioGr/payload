"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "destroy", {
    enumerable: true,
    get: function() {
        return destroy;
    }
});
var _mongoose = /*#__PURE__*/ _interop_require_default(require("mongoose"));
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
var destroy = function() {
    var _destroy = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.mongoMemoryServer) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        _mongoose.default.connection.dropDatabase()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _mongoose.default.connection.close()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        this.mongoMemoryServer.stop()
                    ];
                case 3:
                    _state.sent();
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    function destroy() {
        return _destroy.apply(this, arguments);
    }
    return destroy;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXN0cm95LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBEZXN0cm95IH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGRlc3Ryb3k6IERlc3Ryb3kgPSBhc3luYyBmdW5jdGlvbiBkZXN0cm95KFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4pIHtcbiAgaWYgKHRoaXMubW9uZ29NZW1vcnlTZXJ2ZXIpIHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0aW9uLmRyb3BEYXRhYmFzZSgpO1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICBhd2FpdCB0aGlzLm1vbmdvTWVtb3J5U2VydmVyLnN0b3AoKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJkZXN0cm95IiwibW9uZ29NZW1vcnlTZXJ2ZXIiLCJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkcm9wRGF0YWJhc2UiLCJjbG9zZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7K0JBSWFBOzs7ZUFBQUE7OzsrREFKUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlkLElBQU1BO1FBQWtDQSxXQUFmLG9CQUFBOzs7O3lCQUcxQixJQUFJLENBQUNDLGlCQUFpQixFQUF0Qjs7OztvQkFDRjs7d0JBQU1DLGlCQUFRLENBQUNDLFVBQVUsQ0FBQ0MsWUFBWTs7O29CQUF0QztvQkFDQTs7d0JBQU1GLGlCQUFRLENBQUNDLFVBQVUsQ0FBQ0UsS0FBSzs7O29CQUEvQjtvQkFDQTs7d0JBQU0sSUFBSSxDQUFDSixpQkFBaUIsQ0FBQ0ssSUFBSTs7O29CQUFqQzs7Ozs7Ozs7SUFFSjthQVIrQ047ZUFBQUE7O1dBQUFBIn0=