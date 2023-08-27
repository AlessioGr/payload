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
export var transaction = function() {
    var _transaction = _async_to_generator(function(callback, options) {
        var id, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        this.beginTransaction(options)
                    ];
                case 1:
                    id = _state.sent();
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        5,
                        ,
                        7
                    ]);
                    return [
                        4,
                        callback()
                    ];
                case 3:
                    _state.sent();
                    return [
                        4,
                        this.commitTransaction(id)
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 5:
                    err = _state.sent();
                    return [
                        4,
                        this.rollbackTransaction(id)
                    ];
                case 6:
                    _state.sent();
                    return [
                        3,
                        7
                    ];
                case 7:
                    return [
                        2
                    ];
            }
        });
    });
    function transaction(callback, options) {
        return _transaction.apply(this, arguments);
    }
    return transaction;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS90cmFuc2FjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uID0gYXN5bmMgZnVuY3Rpb24gdHJhbnNhY3Rpb24oXG4gIGNhbGxiYWNrOiAoKSA9PiBQcm9taXNlPHVua25vd24+LFxuICBvcHRpb25zLFxuKSB7XG4gIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5iZWdpblRyYW5zYWN0aW9uKG9wdGlvbnMpO1xuICB0cnkge1xuICAgIGF3YWl0IGNhbGxiYWNrKCk7XG4gICAgYXdhaXQgdGhpcy5jb21taXRUcmFuc2FjdGlvbihpZCk7XG4gIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgIGF3YWl0IHRoaXMucm9sbGJhY2tUcmFuc2FjdGlvbihpZCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsidHJhbnNhY3Rpb24iLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJpZCIsImVyciIsImJlZ2luVHJhbnNhY3Rpb24iLCJjb21taXRUcmFuc2FjdGlvbiIsInJvbGxiYWNrVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLElBQU1BO1FBQTBDQSxlQUFmLG9CQUFBLFNBQ3RDQyxRQUFnQyxFQUNoQ0MsT0FBTztZQUVEQyxJQUlHQzs7OztvQkFKRTs7d0JBQU0sSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0g7OztvQkFBakNDLEtBQUs7Ozs7Ozs7OztvQkFFVDs7d0JBQU1GOzs7b0JBQU47b0JBQ0E7O3dCQUFNLElBQUksQ0FBQ0ssaUJBQWlCLENBQUNIOzs7b0JBQTdCOzs7Ozs7b0JBQ09DO29CQUNQOzt3QkFBTSxJQUFJLENBQUNHLG1CQUFtQixDQUFDSjs7O29CQUEvQjs7Ozs7Ozs7Ozs7SUFFSjthQVh1REgsWUFDckRDLFFBQWdDLEVBQ2hDQyxPQUFPO2VBRjhDRjs7V0FBQUE7SUFXckQifQ==