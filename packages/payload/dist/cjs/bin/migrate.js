"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrate", {
    enumerable: true,
    get: function() {
        return migrate;
    }
});
var _ = /*#__PURE__*/ _interop_require_default(require(".."));
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
var migrate = function() {
    var _ref = _async_to_generator(function(args) {
        var adapter, _1, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Barebones instance to access database adapter
                    return [
                        4,
                        _.default.init({
                            secret: "--unused--",
                            local: true
                        })
                    ];
                case 1:
                    _state.sent();
                    adapter = _.default.db;
                    if (!adapter) {
                        throw new Error("No database adapter found");
                    }
                    _1 = args[0];
                    switch(_1){
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
                        adapter.createMigration(_.default, ".migrations", args[1])
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vbWlncmF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF5bG9hZCBmcm9tICcuLic7XG5cbmV4cG9ydCBjb25zdCBtaWdyYXRlID0gYXN5bmMgKGFyZ3M6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIC8vIEJhcmVib25lcyBpbnN0YW5jZSB0byBhY2Nlc3MgZGF0YWJhc2UgYWRhcHRlclxuICBhd2FpdCBwYXlsb2FkLmluaXQoe1xuICAgIHNlY3JldDogJy0tdW51c2VkLS0nLFxuICAgIGxvY2FsOiB0cnVlLFxuICB9KTtcblxuICBjb25zdCBhZGFwdGVyID0gcGF5bG9hZC5kYjtcblxuICBpZiAoIWFkYXB0ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRhdGFiYXNlIGFkYXB0ZXIgZm91bmQnKTtcbiAgfVxuXG4gIHN3aXRjaCAoYXJnc1swXSkge1xuICAgIGNhc2UgJ21pZ3JhdGUnOlxuICAgICAgYXdhaXQgYWRhcHRlci5taWdyYXRlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaWdyYXRlOnN0YXR1cyc6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVTdGF0dXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21pZ3JhdGU6ZG93bic6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVEb3duKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaWdyYXRlOnJlZnJlc2gnOlxuICAgICAgYXdhaXQgYWRhcHRlci5taWdyYXRlUmVmcmVzaCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlncmF0ZTpyZXNldCc6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVSZXNldCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlncmF0ZTpmcmVzaCc6XG4gICAgICBhd2FpdCBhZGFwdGVyLm1pZ3JhdGVGcmVzaCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlncmF0ZTpjcmVhdGUnOlxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWRhcHRlci5jcmVhdGVNaWdyYXRpb24oXG4gICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAnLm1pZ3JhdGlvbnMnLFxuICAgICAgICAgIGFyZ3NbMV0sXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBjcmVhdGluZyBtaWdyYXRpb246ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbWlncmF0aW9uIGNvbW1hbmQ6ICR7YXJnc1swXX1gKTtcbiAgfVxufTtcblxuLy8gV2hlbiBsYXVuY2hlZCBkaXJlY3RseSBjYWxsIG1pZ3JhdGVcbmlmIChtb2R1bGUuaWQgPT09IHJlcXVpcmUubWFpbi5pZCkge1xuICBjb25zdCBhcmdzID0gcHJvY2Vzcy5hcmd2LnNsaWNlKDIpO1xuICBtaWdyYXRlKGFyZ3MpLnRoZW4oKCkgPT4ge1xuICAgIHByb2Nlc3MuZXhpdCgwKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsibWlncmF0ZSIsImFyZ3MiLCJhZGFwdGVyIiwiZXJyIiwicGF5bG9hZCIsImluaXQiLCJzZWNyZXQiLCJsb2NhbCIsImRiIiwiRXJyb3IiLCJtaWdyYXRlU3RhdHVzIiwibWlncmF0ZURvd24iLCJtaWdyYXRlUmVmcmVzaCIsIm1pZ3JhdGVSZXNldCIsIm1pZ3JhdGVGcmVzaCIsImNyZWF0ZU1pZ3JhdGlvbiIsIm1lc3NhZ2UiLCJtb2R1bGUiLCJpZCIsInJlcXVpcmUiLCJtYWluIiwicHJvY2VzcyIsImFyZ3YiLCJzbGljZSIsInRoZW4iLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7O2VBQUFBOzs7dURBRk87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFNQTtlQUFVLG9CQUFBLFNBQU9DO1lBT3RCQyxhQWdDT0M7Ozs7b0JBdENiLGdEQUFnRDtvQkFDaEQ7O3dCQUFNQyxTQUFPLENBQUNDLElBQUksQ0FBQzs0QkFDakJDLFFBQVE7NEJBQ1JDLE9BQU87d0JBQ1Q7OztvQkFIQTtvQkFLTUwsVUFBVUUsU0FBTyxDQUFDSSxFQUFFO29CQUUxQixJQUFJLENBQUNOLFNBQVM7d0JBQ1osTUFBTSxJQUFJTyxNQUFNO29CQUNsQjt5QkFFUVIsSUFBSSxDQUFDLEVBQUU7OzZCQUNSOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7OzZCQUdBOzRCQUFBOzs7Ozs7Ozs7O29CQWpCSDs7d0JBQU1DLFFBQVFGLE9BQU87OztvQkFBckI7b0JBQ0E7Ozs7O29CQUVBOzt3QkFBTUUsUUFBUVEsYUFBYTs7O29CQUEzQjtvQkFDQTs7Ozs7b0JBRUE7O3dCQUFNUixRQUFRUyxXQUFXOzs7b0JBQXpCO29CQUNBOzs7OztvQkFFQTs7d0JBQU1ULFFBQVFVLGNBQWM7OztvQkFBNUI7b0JBQ0E7Ozs7O29CQUVBOzt3QkFBTVYsUUFBUVcsWUFBWTs7O29CQUExQjtvQkFDQTs7Ozs7b0JBRUE7O3dCQUFNWCxRQUFRWSxZQUFZOzs7b0JBQTFCO29CQUNBOzs7Ozs7Ozs7OztvQkFHRTs7d0JBQU1aLFFBQVFhLGVBQWUsQ0FDM0JYLFNBQU8sRUFDUCxlQUNBSCxJQUFJLENBQUMsRUFBRTs7O29CQUhUOzs7Ozs7b0JBS09FO29CQUNQLE1BQU0sSUFBSU0sTUFBTSxBQUFDLDZCQUF3QyxPQUFaTixJQUFJYSxPQUFPOztvQkFFMUQ7Ozs7O29CQUdBLE1BQU0sSUFBSVAsTUFBTSxBQUFDLDhCQUFxQyxPQUFSUixJQUFJLENBQUMsRUFBRTs7Ozs7OztJQUUzRDtvQkEvQ2FELFFBQWlCQzs7OztBQWlEOUIsc0NBQXNDO0FBQ3RDLElBQUlnQixPQUFPQyxFQUFFLEtBQUtDLFFBQVFDLElBQUksQ0FBQ0YsRUFBRSxFQUFFO0lBQ2pDLElBQU1qQixPQUFPb0IsUUFBUUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7SUFDaEN2QixRQUFRQyxNQUFNdUIsSUFBSSxDQUFDO1FBQ2pCSCxRQUFRSSxJQUFJLENBQUM7SUFDZjtBQUNGIn0=