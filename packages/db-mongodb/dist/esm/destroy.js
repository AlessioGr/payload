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
import mongoose from "mongoose";
export var destroy = function() {
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
                        mongoose.connection.dropDatabase()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        mongoose.connection.close()
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZXN0cm95LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBEZXN0cm95IH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBNb25nb29zZUFkYXB0ZXIgfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGRlc3Ryb3k6IERlc3Ryb3kgPSBhc3luYyBmdW5jdGlvbiBkZXN0cm95KFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4pIHtcbiAgaWYgKHRoaXMubW9uZ29NZW1vcnlTZXJ2ZXIpIHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0aW9uLmRyb3BEYXRhYmFzZSgpO1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICBhd2FpdCB0aGlzLm1vbmdvTWVtb3J5U2VydmVyLnN0b3AoKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRlc3Ryb3kiLCJtb25nb01lbW9yeVNlcnZlciIsImNvbm5lY3Rpb24iLCJkcm9wRGF0YWJhc2UiLCJjbG9zZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxjQUFjLFdBQVc7QUFJaEMsT0FBTyxJQUFNQztRQUFrQ0EsV0FBZixvQkFBQTs7Ozt5QkFHMUIsSUFBSSxDQUFDQyxpQkFBaUIsRUFBdEI7Ozs7b0JBQ0Y7O3dCQUFNRixTQUFTRyxVQUFVLENBQUNDLFlBQVk7OztvQkFBdEM7b0JBQ0E7O3dCQUFNSixTQUFTRyxVQUFVLENBQUNFLEtBQUs7OztvQkFBL0I7b0JBQ0E7O3dCQUFNLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNJLElBQUk7OztvQkFBakM7Ozs7Ozs7O0lBRUo7YUFSK0NMO2VBQUFBOztXQUFBQTtJQVE3QyJ9