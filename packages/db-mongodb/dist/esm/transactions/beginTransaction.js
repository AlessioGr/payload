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
import { v4 as uuid } from "uuid";
import { APIError } from "payload/errors";
var transactionsNotAvailable;
export var beginTransaction = function() {
    var _beginTransaction = _async_to_generator(function() {
        var options, id, _;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    options = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {};
                    id = null;
                    if (!this.connection) {
                        throw new APIError("beginTransaction called while no connection to the database exists");
                    }
                    if (transactionsNotAvailable) return [
                        2,
                        id
                    ];
                    if (!!this.connection.get("replicaSet")) return [
                        3,
                        1
                    ];
                    transactionsNotAvailable = true;
                    this.payload.logger.warn("Database transactions for MongoDB are only available when connecting to a replica set. Operations will continue without using transactions.");
                    return [
                        3,
                        6
                    ];
                case 1:
                    id = uuid();
                    if (!!this.sessions[id]) return [
                        3,
                        3
                    ];
                    _ = this.sessions;
                    return [
                        4,
                        this.connection.getClient().startSession()
                    ];
                case 2:
                    _[id] = _state.sent();
                    _state.label = 3;
                case 3:
                    if (!this.sessions[id].inTransaction()) return [
                        3,
                        4
                    ];
                    this.payload.logger.warn("beginTransaction called while transaction already exists");
                    return [
                        3,
                        6
                    ];
                case 4:
                    return [
                        4,
                        this.sessions[id].startTransaction(options)
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        2,
                        id
                    ];
            }
        });
    });
    function beginTransaction() {
        return _beginTransaction.apply(this, arguments);
    }
    return beginTransaction;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2FjdGlvbnMvYmVnaW5UcmFuc2FjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFRyYW5zYWN0aW9uT3B0aW9ucyB9IGZyb20gJ21vbmdvZGInO1xuaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgQmVnaW5UcmFuc2FjdGlvbiB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICdwYXlsb2FkL2Vycm9ycyc7XG5cbmxldCB0cmFuc2FjdGlvbnNOb3RBdmFpbGFibGU6IGJvb2xlYW47XG5leHBvcnQgY29uc3QgYmVnaW5UcmFuc2FjdGlvbjogQmVnaW5UcmFuc2FjdGlvbiA9IGFzeW5jIGZ1bmN0aW9uIGJlZ2luVHJhbnNhY3Rpb24oXG4gIG9wdGlvbnM6IFRyYW5zYWN0aW9uT3B0aW9ucyA9IHt9LFxuKSB7XG4gIGxldCBpZCA9IG51bGw7XG4gIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEFQSUVycm9yKCdiZWdpblRyYW5zYWN0aW9uIGNhbGxlZCB3aGlsZSBubyBjb25uZWN0aW9uIHRvIHRoZSBkYXRhYmFzZSBleGlzdHMnKTtcbiAgfVxuXG4gIGlmICh0cmFuc2FjdGlvbnNOb3RBdmFpbGFibGUpIHJldHVybiBpZDtcblxuICBpZiAoIXRoaXMuY29ubmVjdGlvbi5nZXQoJ3JlcGxpY2FTZXQnKSkge1xuICAgIHRyYW5zYWN0aW9uc05vdEF2YWlsYWJsZSA9IHRydWU7XG4gICAgdGhpcy5wYXlsb2FkLmxvZ2dlci53YXJuKCdEYXRhYmFzZSB0cmFuc2FjdGlvbnMgZm9yIE1vbmdvREIgYXJlIG9ubHkgYXZhaWxhYmxlIHdoZW4gY29ubmVjdGluZyB0byBhIHJlcGxpY2Egc2V0LiBPcGVyYXRpb25zIHdpbGwgY29udGludWUgd2l0aG91dCB1c2luZyB0cmFuc2FjdGlvbnMuJyk7XG4gIH0gZWxzZSB7XG4gICAgaWQgPSB1dWlkKCk7XG4gICAgaWYgKCF0aGlzLnNlc3Npb25zW2lkXSkge1xuICAgICAgdGhpcy5zZXNzaW9uc1tpZF0gPSBhd2FpdCB0aGlzLmNvbm5lY3Rpb24uZ2V0Q2xpZW50KCkuc3RhcnRTZXNzaW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlc3Npb25zW2lkXS5pblRyYW5zYWN0aW9uKCkpIHtcbiAgICAgIHRoaXMucGF5bG9hZC5sb2dnZXIud2FybignYmVnaW5UcmFuc2FjdGlvbiBjYWxsZWQgd2hpbGUgdHJhbnNhY3Rpb24gYWxyZWFkeSBleGlzdHMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5zZXNzaW9uc1tpZF0uc3RhcnRUcmFuc2FjdGlvbihvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkO1xufTtcbiJdLCJuYW1lcyI6WyJ2NCIsInV1aWQiLCJBUElFcnJvciIsInRyYW5zYWN0aW9uc05vdEF2YWlsYWJsZSIsImJlZ2luVHJhbnNhY3Rpb24iLCJvcHRpb25zIiwiaWQiLCJjb25uZWN0aW9uIiwiZ2V0IiwicGF5bG9hZCIsImxvZ2dlciIsIndhcm4iLCJzZXNzaW9ucyIsImdldENsaWVudCIsInN0YXJ0U2Vzc2lvbiIsImluVHJhbnNhY3Rpb24iLCJzdGFydFRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsTUFBTUMsSUFBSSxRQUFRLE9BQU87QUFFbEMsU0FBU0MsUUFBUSxRQUFRLGlCQUFpQjtBQUUxQyxJQUFJQztBQUNKLE9BQU8sSUFBTUM7UUFBb0RBLG9CQUFmLG9CQUFBO1lBQ2hEQyxTQUVJQzs7Ozs7b0JBRkpELFVBQUFBLG9FQUE4QixDQUFDO29CQUUzQkMsS0FBSztvQkFDVCxJQUFJLENBQUMsSUFBSSxDQUFDQyxVQUFVLEVBQUU7d0JBQ3BCLE1BQU0sSUFBSUwsU0FBUztvQkFDckI7b0JBRUEsSUFBSUMsMEJBQTBCOzt3QkFBT0c7O3lCQUVqQyxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxHQUFHLENBQUMsZUFBckI7Ozs7b0JBQ0ZMLDJCQUEyQjtvQkFDM0IsSUFBSSxDQUFDTSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDOzs7Ozs7b0JBRXpCTCxLQUFLTDt5QkFDRCxDQUFDLElBQUksQ0FBQ1csUUFBUSxDQUFDTixHQUFHLEVBQWxCOzs7O3dCQUNGLElBQUksQ0FBQ00sUUFBUTtvQkFBTzs7d0JBQU0sSUFBSSxDQUFDTCxVQUFVLENBQUNNLFNBQVMsR0FBR0MsWUFBWTs7O29CQUFsRSxDQUFhLENBQUNSLEdBQUcsR0FBRzs7O3lCQUVsQixJQUFJLENBQUNNLFFBQVEsQ0FBQ04sR0FBRyxDQUFDUyxhQUFhLElBQS9COzs7O29CQUNGLElBQUksQ0FBQ04sT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQzs7Ozs7O29CQUV6Qjs7d0JBQU0sSUFBSSxDQUFDQyxRQUFRLENBQUNOLEdBQUcsQ0FBQ1UsZ0JBQWdCLENBQUNYOzs7b0JBQXpDOzs7b0JBR0o7O3dCQUFPQzs7OztJQUNUO2FBekJpRUY7ZUFBQUE7O1dBQUFBO0lBeUIvRCJ9