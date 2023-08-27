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
import payload from "..";
export var migrate = function() {
    var _ref = _async_to_generator(function(args) {
        var adapter, _, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Barebones instance to access database adapter
                    return [
                        4,
                        payload.init({
                            secret: "--unused--",
                            local: true
                        })
                    ];
                case 1:
                    _state.sent();
                    adapter = payload.db;
                    if (!adapter) {
                        throw new Error("No database adapter found");
                    }
                    _ = args[0];
                    switch(_){
                        case "migrate":
                            return [
                                3,
                                2
                            ];
                        case "migrate:status":
                            return [
                                3,
                                4
                            ];
                        case "migrate:down":
                            return [
                                3,
                                6
                            ];
                        case "migrate:refresh":
                            return [
                                3,
                                8
                            ];
                        case "migrate:reset":
                            return [
                                3,
                                10
                            ];
                        case "migrate:fresh":
                            return [
                                3,
                                12
                            ];
                        case "migrate:create":
                            return [
                                3,
                                14
                            ];
                    }
                    return [
                        3,
                        18
                    ];
                case 2:
                    return [
                        4,
                        adapter.migrate()
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        19
                    ];
                case 4:
                    return [
                        4,
                        adapter.migrateStatus()
                    ];
                case 5:
                    _state.sent();
                    return [
                        3,
                        19
                    ];
                case 6:
                    return [
                        4,
                        adapter.migrateDown()
                    ];
                case 7:
                    _state.sent();
                    return [
                        3,
                        19
                    ];
                case 8:
                    return [
                        4,
                        adapter.migrateRefresh()
                    ];
                case 9:
                    _state.sent();
                    return [
                        3,
                        19
                    ];
                case 10:
                    return [
                        4,
                        adapter.migrateReset()
                    ];
                case 11:
                    _state.sent();
                    return [
                        3,
                        19
                    ];
                case 12:
                    return [
                        4,
                        adapter.migrateFresh()
                    ];
                case 13:
                    _state.sent();
                    return [
                        3,
                        19
                    ];
                case 14:
                    _state.trys.push([
                        14,
                        16,
                        ,
                        17
                    ]);
                    return [
                        4,
                        adapter.createMigration(payload, ".migrations", args[1])
                    ];
                case 15:
                    _state.sent();
                    return [
                        3,
                        17
                    ];
                case 16:
                    err = _state.sent();
                    throw new Error("Error creating migration: ".concat(err.message));
                case 17:
                    return [
                        3,
                        19
                    ];
                case 18:
                    throw new Error("Unknown migration command: ".concat(args[0]));
                case 19:
                    return [
                        2
                    ];
            }
        });
    });
    return function migrate(args) {
        return _ref.apply(this, arguments);
    };
}();
// When launched directly call migrate
if (module.id === require.main.id) {
    var args = process.argv.slice(2);
    migrate(args).then(function() {
        process.exit(0);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vbWlncmF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF5bG9hZCBmcm9tICcuLic7XG5cbmV4cG9ydCBjb25zdCBtaWdyYXRlID0gYXN5bmMgKGFyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIC8vIEJhcmVib25lcyBpbnN0YW5jZSB0byBhY2Nlc3MgZGF0YWJhc2UgYWRhcHRlclxuICBhd2FpdCBwYXlsb2FkLmluaXQoe1xuICAgIHNlY3JldDogJy0tdW51c2VkLS0nLFxuICAgIGxvY2FsOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBhZGFwdGVyID0gcGF5bG9hZC5kYjtcblxuICBpZiAoIWFkYXB0ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRhdGFiYXNlIGFkYXB0ZXIgZm91bmQnKTtcbiAgfVxuXG4gIHN3aXRjaCAoYXJnc1swXSkge1xuICAgIGNhc2UgJ21pZ3JhdGUnOlxuICAgICAgYXdhaXQgYWRhcHRlci5taWdyYXRlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaWdyYXRlOnN0YXR1cyc6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVTdGF0dXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pZ3JhdGU6ZG93bic6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVEb3duKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaWdyYXRlOnJlZnJlc2gnOlxuICAgICAgYXdhaXQgYWRhcHRlci5taWdyYXRlUmVmcmVzaCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlncmF0ZTpyZXNldCc6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVSZXNldCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlncmF0ZTpmcmVzaCc6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVGcmVzaCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlncmF0ZTpjcmVhdGUnOlxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWRhcHRlci5jcmVhdGVNaWdyYXRpb24oXG4gICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAnLm1pZ3JhdGlvbnMnLFxuICAgICAgICAgIGFyZ3NbMV0sXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBjcmVhdGluZyBtaWdyYXRpb246ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbWlncmF0aW9uIGNvbW1hbmQ6ICR7YXJnc1swXX1gKTtcbiAgfVxufTtcblxuLy8gV2hlbiBsYXVuY2hlZCBkaXJlY3RseSBjYWxsIG1pZ3JhdGVcbmlmIChtb2R1bGUuaWQgPT09IHJlcXVpcmUubWFpbi5pZCkge1xuICBjb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1xuICBtaWdyYXRlKGFyZ3MpLnRoZW4oKCkgPT4ge1xuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsicGF5bG9hZCIsIm1pZ3JhdGUiLCJhcmdzIiwiYWRhcHRlciIsImVyciIsImluaXQiLCJzZWNyZXQiLCJsb2NhbCIsImRiIiwiRXJyb3IiLCJtaWdyYXRlU3RhdHVzIiwibWlncmF0ZURvd24iLCJtaWdyYXRlUmVmcmVzaCIsIm1pZ3JhdGVSZXNldCIsIm1pZ3JhdGVGcmVzaCIsImNyZWF0ZU1pZ3JhdGlvbiIsIm1lc3NhZ2UiLCJtb2R1bGUiLCJpZCIsInJlcXVpcmUiLCJtYWluIiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsInRoZW4iLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsYUFBYSxLQUFLO0FBRXpCLE9BQU8sSUFBTUM7ZUFBVSxvQkFBQSxTQUFPQztZQU90QkMsWUFnQ09DOzs7O29CQXRDYixnREFBZ0Q7b0JBQ2hEOzt3QkFBTUosUUFBUUssSUFBSSxDQUFDOzRCQUNqQkMsUUFBUTs0QkFDUkMsT0FBTzt3QkFDVDs7O29CQUhBO29CQUtNSixVQUFVSCxRQUFRUSxFQUFFO29CQUUxQixJQUFJLENBQUNMLFNBQVM7d0JBQ1osTUFBTSxJQUFJTSxNQUFNO29CQUNsQjt3QkFFUVAsSUFBSSxDQUFDLEVBQUU7OzZCQUNSOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7Ozs7Ozs7O29CQWpCSDs7d0JBQU1DLFFBQVFGLE9BQU87OztvQkFBckI7b0JBQ0E7Ozs7O29CQUVBOzt3QkFBTUUsUUFBUU8sYUFBYTs7O29CQUEzQjtvQkFDQTs7Ozs7b0JBRUE7O3dCQUFNUCxRQUFRUSxXQUFXOzs7b0JBQXpCO29CQUNBOzs7OztvQkFFQTs7d0JBQU1SLFFBQVFTLGNBQWM7OztvQkFBNUI7b0JBQ0E7Ozs7O29CQUVBOzt3QkFBTVQsUUFBUVUsWUFBWTs7O29CQUExQjtvQkFDQTs7Ozs7b0JBRUE7O3dCQUFNVixRQUFRVyxZQUFZOzs7b0JBQTFCO29CQUNBOzs7Ozs7Ozs7OztvQkFHRTs7d0JBQU1YLFFBQVFZLGVBQWUsQ0FDM0JmLFNBQ0EsZUFDQUUsSUFBSSxDQUFDLEVBQUU7OztvQkFIVDs7Ozs7O29CQUtPRTtvQkFDUCxNQUFNLElBQUlLLE1BQU0sQUFBQyw2QkFBd0MsT0FBWkwsSUFBSVksT0FBTzs7b0JBRTFEOzs7OztvQkFHQSxNQUFNLElBQUlQLE1BQU0sQUFBQyw4QkFBcUMsT0FBUlAsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7SUFFM0Q7b0JBL0NhRCxRQUFpQkM7OztJQStDNUI7QUFFRixzQ0FBc0M7QUFDdEMsSUFBSWUsT0FBT0MsRUFBRSxLQUFLQyxRQUFRQyxJQUFJLENBQUNGLEVBQUUsRUFBRTtJQUNqQyxJQUFNaEIsT0FBT21CLFFBQVFDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0lBQ2hDdEIsUUFBUUMsTUFBTXNCLElBQUksQ0FBQztRQUNqQkgsUUFBUUksSUFBSSxDQUFDO0lBQ2Y7QUFDRiJ9