"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "rollbackTransaction", {
    enumerable: true,
    get: function() {
        return rollbackTransaction;
    }
});
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
var rollbackTransaction = function() {
    var _rollbackTransaction = _async_to_generator(function() {
        var id, _this_session_id;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    id = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : "";
                    if (!((_this_session_id = this.session[id]) === null || _this_session_id === void 0 ? void 0 : _this_session_id.inTransaction())) {
                        this.payload.logger.warn("rollbackTransaction called when no transaction exists");
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        this.session[id].abortTransaction()
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        this.session[id].endSession()
                    ];
                case 2:
                    _state.sent();
                    delete this.session[id];
                    return [
                        2
                    ];
            }
        });
    });
    function rollbackTransaction() {
        return _rollbackTransaction.apply(this, arguments);
    }
    return rollbackTransaction;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2FjdGlvbnMvcm9sbGJhY2tUcmFuc2FjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb2xsYmFja1RyYW5zYWN0aW9uIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IHJvbGxiYWNrVHJhbnNhY3Rpb246IFJvbGxiYWNrVHJhbnNhY3Rpb24gPSBhc3luYyBmdW5jdGlvbiByb2xsYmFja1RyYW5zYWN0aW9uKGlkID0gJycpIHtcbiAgaWYgKCF0aGlzLnNlc3Npb25baWRdPy5pblRyYW5zYWN0aW9uKCkpIHtcbiAgICB0aGlzLnBheWxvYWQubG9nZ2VyLndhcm4oJ3JvbGxiYWNrVHJhbnNhY3Rpb24gY2FsbGVkIHdoZW4gbm8gdHJhbnNhY3Rpb24gZXhpc3RzJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGF3YWl0IHRoaXMuc2Vzc2lvbltpZF0uYWJvcnRUcmFuc2FjdGlvbigpO1xuICBhd2FpdCB0aGlzLnNlc3Npb25baWRdLmVuZFNlc3Npb24oKTtcbiAgZGVsZXRlIHRoaXMuc2Vzc2lvbltpZF07XG59O1xuIl0sIm5hbWVzIjpbInJvbGxiYWNrVHJhbnNhY3Rpb24iLCJpZCIsInNlc3Npb24iLCJpblRyYW5zYWN0aW9uIiwicGF5bG9hZCIsImxvZ2dlciIsIndhcm4iLCJhYm9ydFRyYW5zYWN0aW9uIiwiZW5kU2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFHYUE7OztlQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQU1BO1FBQTBEQSx1QkFBZixvQkFBQTtZQUFtQ0MsSUFDcEY7Ozs7O29CQURvRkEsS0FBQUEsb0VBQUs7b0JBQzlGLElBQUksR0FBQyxtQkFBQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0QsR0FBRyxjQUFoQix1Q0FBQSxpQkFBa0JFLGFBQWEsS0FBSTt3QkFDdEMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO3dCQUN6Qjs7O29CQUNGO29CQUNBOzt3QkFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDTSxnQkFBZ0I7OztvQkFBdkM7b0JBQ0E7O3dCQUFNLElBQUksQ0FBQ0wsT0FBTyxDQUFDRCxHQUFHLENBQUNPLFVBQVU7OztvQkFBakM7b0JBQ0EsT0FBTyxJQUFJLENBQUNOLE9BQU8sQ0FBQ0QsR0FBRzs7Ozs7O0lBQ3pCO2FBUnVFRDtlQUFBQTs7V0FBQUEifQ==