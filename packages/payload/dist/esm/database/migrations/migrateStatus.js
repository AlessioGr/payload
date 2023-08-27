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
import { Table } from "console-table-printer";
import { readMigrationFiles } from "./readMigrationFiles";
import { getMigrations } from "./getMigrations";
export function migrateStatus() {
    return _migrateStatus.apply(this, arguments);
}
function _migrateStatus() {
    _migrateStatus = _async_to_generator(function() {
        var payload, migrationFiles, existingMigrations, statuses, p;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = this.payload;
                    return [
                        4,
                        readMigrationFiles({
                            payload: payload
                        })
                    ];
                case 1:
                    migrationFiles = _state.sent();
                    return [
                        4,
                        getMigrations({
                            payload: payload
                        })
                    ];
                case 2:
                    existingMigrations = _state.sent().existingMigrations;
                    if (!migrationFiles.length) {
                        payload.logger.info({
                            msg: "No migrations found."
                        });
                        return [
                            2
                        ];
                    }
                    statuses = migrationFiles.map(function(migration) {
                        var _existingMigration;
                        var existingMigration = existingMigrations.find(function(m) {
                            return m.name === migration.name;
                        });
                        return {
                            Ran: existingMigration ? "Yes" : "No",
                            Name: migration.name,
                            Batch: (_existingMigration = existingMigration) === null || _existingMigration === void 0 ? void 0 : _existingMigration.batch
                        };
                    });
                    p = new Table();
                    statuses.forEach(function(s) {
                        p.addRow(s, {
                            color: s.Ran === "Yes" ? "green" : "red"
                        });
                    });
                    p.printTable();
                    return [
                        2
                    ];
            }
        });
    });
    return _migrateStatus.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVTdGF0dXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFibGUgfSBmcm9tICdjb25zb2xlLXRhYmxlLXByaW50ZXInO1xuaW1wb3J0IHsgRGF0YWJhc2VBZGFwdGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgcmVhZE1pZ3JhdGlvbkZpbGVzIH0gZnJvbSAnLi9yZWFkTWlncmF0aW9uRmlsZXMnO1xuaW1wb3J0IHsgZ2V0TWlncmF0aW9ucyB9IGZyb20gJy4vZ2V0TWlncmF0aW9ucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWdyYXRlU3RhdHVzKHRoaXM6IERhdGFiYXNlQWRhcHRlcik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHBheWxvYWQgfSA9IHRoaXM7XG4gIGNvbnN0IG1pZ3JhdGlvbkZpbGVzID0gYXdhaXQgcmVhZE1pZ3JhdGlvbkZpbGVzKHsgcGF5bG9hZCB9KTtcbiAgY29uc3QgeyBleGlzdGluZ01pZ3JhdGlvbnMgfSA9IGF3YWl0IGdldE1pZ3JhdGlvbnMoeyBwYXlsb2FkIH0pO1xuXG4gIGlmICghbWlncmF0aW9uRmlsZXMubGVuZ3RoKSB7XG4gICAgcGF5bG9hZC5sb2dnZXIuaW5mbyh7IG1zZzogJ05vIG1pZ3JhdGlvbnMgZm91bmQuJyB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDb21wYXJlIG1pZ3JhdGlvbiBmaWxlcyB0byBleGlzdGluZyBtaWdyYXRpb25zXG4gIGNvbnN0IHN0YXR1c2VzID0gbWlncmF0aW9uRmlsZXMubWFwKChtaWdyYXRpb24pID0+IHtcbiAgICBjb25zdCBleGlzdGluZ01pZ3JhdGlvbiA9IGV4aXN0aW5nTWlncmF0aW9ucy5maW5kKFxuICAgICAgKG0pID0+IG0ubmFtZSA9PT0gbWlncmF0aW9uLm5hbWUsXG4gICAgKTtcbiAgICByZXR1cm4ge1xuICAgICAgUmFuOiBleGlzdGluZ01pZ3JhdGlvbiA/ICdZZXMnIDogJ05vJyxcbiAgICAgIE5hbWU6IG1pZ3JhdGlvbi5uYW1lLFxuICAgICAgQmF0Y2g6IGV4aXN0aW5nTWlncmF0aW9uPy5iYXRjaCxcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBwID0gbmV3IFRhYmxlKCk7XG5cbiAgc3RhdHVzZXMuZm9yRWFjaCgocykgPT4ge1xuICAgIHAuYWRkUm93KHMsIHtcbiAgICAgIGNvbG9yOiBzLlJhbiA9PT0gJ1llcycgPyAnZ3JlZW4nIDogJ3JlZCcsXG4gICAgfSk7XG4gIH0pO1xuICBwLnByaW50VGFibGUoKTtcbn1cbiJdLCJuYW1lcyI6WyJUYWJsZSIsInJlYWRNaWdyYXRpb25GaWxlcyIsImdldE1pZ3JhdGlvbnMiLCJtaWdyYXRlU3RhdHVzIiwicGF5bG9hZCIsIm1pZ3JhdGlvbkZpbGVzIiwiZXhpc3RpbmdNaWdyYXRpb25zIiwic3RhdHVzZXMiLCJwIiwibGVuZ3RoIiwibG9nZ2VyIiwiaW5mbyIsIm1zZyIsIm1hcCIsIm1pZ3JhdGlvbiIsImV4aXN0aW5nTWlncmF0aW9uIiwiZmluZCIsIm0iLCJuYW1lIiwiUmFuIiwiTmFtZSIsIkJhdGNoIiwiYmF0Y2giLCJmb3JFYWNoIiwicyIsImFkZFJvdyIsImNvbG9yIiwicHJpbnRUYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLEtBQUssUUFBUSx3QkFBd0I7QUFFOUMsU0FBU0Msa0JBQWtCLFFBQVEsdUJBQXVCO0FBQzFELFNBQVNDLGFBQWEsUUFBUSxrQkFBa0I7QUFFaEQsZ0JBQXNCQztXQUFBQTs7U0FBQUE7SUFBQUEsaUJBQWYsb0JBQUE7WUFDR0MsU0FDRkMsZ0JBQ0VDLG9CQVFGQyxVQVdBQzs7OztvQkFyQkVKLFVBQVksSUFBSSxDQUFoQkE7b0JBQ2U7O3dCQUFNSCxtQkFBbUI7NEJBQUVHLFNBQUFBO3dCQUFROzs7b0JBQXBEQyxpQkFBaUI7b0JBQ1E7O3dCQUFNSCxjQUFjOzRCQUFFRSxTQUFBQTt3QkFBUTs7O29CQUFyREUscUJBQXVCLGNBQXZCQTtvQkFFUixJQUFJLENBQUNELGVBQWVJLE1BQU0sRUFBRTt3QkFDMUJMLFFBQVFNLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDOzRCQUFFQyxLQUFLO3dCQUF1Qjt3QkFDbEQ7OztvQkFDRjtvQkFHTUwsV0FBV0YsZUFBZVEsR0FBRyxDQUFDLFNBQUNDOzRCQU8xQkM7d0JBTlQsSUFBTUEsb0JBQW9CVCxtQkFBbUJVLElBQUksQ0FDL0MsU0FBQ0M7bUNBQU1BLEVBQUVDLElBQUksS0FBS0osVUFBVUksSUFBSTs7d0JBRWxDLE9BQU87NEJBQ0xDLEtBQUtKLG9CQUFvQixRQUFROzRCQUNqQ0ssTUFBTU4sVUFBVUksSUFBSTs0QkFDcEJHLEtBQUssR0FBRU4scUJBQUFBLCtCQUFBQSx5Q0FBQUEsbUJBQW1CTyxLQUFLO3dCQUNqQztvQkFDRjtvQkFFTWQsSUFBSSxJQUFJUjtvQkFFZE8sU0FBU2dCLE9BQU8sQ0FBQyxTQUFDQzt3QkFDaEJoQixFQUFFaUIsTUFBTSxDQUFDRCxHQUFHOzRCQUNWRSxPQUFPRixFQUFFTCxHQUFHLEtBQUssUUFBUSxVQUFVO3dCQUNyQztvQkFDRjtvQkFDQVgsRUFBRW1CLFVBQVU7Ozs7OztJQUNkO1dBOUJzQnhCIn0=