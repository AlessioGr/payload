"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "commitTransaction", {
    enumerable: true,
    get: function() {
        return commitTransaction;
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
var commitTransaction = function() {
    var _commitTransaction = _async_to_generator(function(id) {
        var _this_session_id;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!this.connection.get("replicaSet")) {
                        return [
                            2
                        ];
                    }
                    if (!((_this_session_id = this.session[id]) === null || _this_session_id === void 0 ? void 0 : _this_session_id.inTransaction())) {
                        this.payload.logger.warn("commitTransaction called when no transaction exists");
                        return [
                            2
                        ];
                    }
                    return [
                        4,
                        this.session[id].commitTransaction()
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
    function commitTransaction(id) {
        return _commitTransaction.apply(this, arguments);
    }
    return commitTransaction;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2FjdGlvbnMvY29tbWl0VHJhbnNhY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWl0VHJhbnNhY3Rpb24gfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcblxuXG5leHBvcnQgY29uc3QgY29tbWl0VHJhbnNhY3Rpb246IENvbW1pdFRyYW5zYWN0aW9uID0gYXN5bmMgZnVuY3Rpb24gY29tbWl0VHJhbnNhY3Rpb24oaWQpIHtcbiAgaWYgKCF0aGlzLmNvbm5lY3Rpb24uZ2V0KCdyZXBsaWNhU2V0JykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF0aGlzLnNlc3Npb25baWRdPy5pblRyYW5zYWN0aW9uKCkpIHtcbiAgICB0aGlzLnBheWxvYWQubG9nZ2VyLndhcm4oJ2NvbW1pdFRyYW5zYWN0aW9uIGNhbGxlZCB3aGVuIG5vIHRyYW5zYWN0aW9uIGV4aXN0cycpO1xuICAgIHJldHVybjtcbiAgfVxuICBhd2FpdCB0aGlzLnNlc3Npb25baWRdLmNvbW1pdFRyYW5zYWN0aW9uKCk7XG4gIGF3YWl0IHRoaXMuc2Vzc2lvbltpZF0uZW5kU2Vzc2lvbigpO1xuICBkZWxldGUgdGhpcy5zZXNzaW9uW2lkXTtcbn07XG4iXSwibmFtZXMiOlsiY29tbWl0VHJhbnNhY3Rpb24iLCJpZCIsImNvbm5lY3Rpb24iLCJnZXQiLCJzZXNzaW9uIiwiaW5UcmFuc2FjdGlvbiIsInBheWxvYWQiLCJsb2dnZXIiLCJ3YXJuIiwiZW5kU2Vzc2lvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFHYUE7OztlQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQU1BO1FBQXNEQSxxQkFBZixvQkFBQSxTQUFpQ0MsRUFBRTtZQUloRjs7OztvQkFITCxJQUFJLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUNDLEdBQUcsQ0FBQyxlQUFlO3dCQUN0Qzs7O29CQUNGO29CQUNBLElBQUksR0FBQyxtQkFBQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0gsR0FBRyxjQUFoQix1Q0FBQSxpQkFBa0JJLGFBQWEsS0FBSTt3QkFDdEMsSUFBSSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO3dCQUN6Qjs7O29CQUNGO29CQUNBOzt3QkFBTSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0gsR0FBRyxDQUFDRCxpQkFBaUI7OztvQkFBeEM7b0JBQ0E7O3dCQUFNLElBQUksQ0FBQ0ksT0FBTyxDQUFDSCxHQUFHLENBQUNRLFVBQVU7OztvQkFBakM7b0JBQ0EsT0FBTyxJQUFJLENBQUNMLE9BQU8sQ0FBQ0gsR0FBRzs7Ozs7O0lBQ3pCO2FBWG1FRCxrQkFBa0JDLEVBQUU7ZUFBcEJEOztXQUFBQSJ9