/* eslint-disable no-restricted-syntax, no-await-in-loop */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
import { readMigrationFiles } from "./readMigrationFiles";
/**
 * Reset and re-run all migrations.
 */ export function migrateRefresh() {
    return _migrateRefresh.apply(this, arguments);
}
function _migrateRefresh() {
    _migrateRefresh = _async_to_generator(function() {
        var payload, migrationFiles, transactionID, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, migration, start, err, err1;
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
                    // Clear all migrations
                    return [
                        4,
                        payload.delete({
                            collection: "payload-migrations",
                            where: {}
                        })
                    ];
                case 2:
                    _state.sent();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        14,
                        15,
                        16
                    ]);
                    _iterator = migrationFiles[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        13
                    ];
                    migration = _step.value;
                    payload.logger.info({
                        msg: "Migrating: ".concat(migration.name)
                    });
                    _state.label = 5;
                case 5:
                    _state.trys.push([
                        5,
                        10,
                        ,
                        12
                    ]);
                    start = Date.now();
                    return [
                        4,
                        this.beginTransaction()
                    ];
                case 6:
                    transactionID = _state.sent();
                    return [
                        4,
                        migration.up({
                            payload: payload
                        })
                    ];
                case 7:
                    _state.sent();
                    return [
                        4,
                        payload.create({
                            collection: "payload-migrations",
                            data: {
                                name: migration.name,
                                executed: true
                            },
                            req: {
                                transactionID: transactionID
                            }
                        })
                    ];
                case 8:
                    _state.sent();
                    return [
                        4,
                        this.commitTransaction(transactionID)
                    ];
                case 9:
                    _state.sent();
                    payload.logger.info({
                        msg: "Migrated:  ".concat(migration.name, " (").concat(Date.now() - start, "ms)")
                    });
                    return [
                        3,
                        12
                    ];
                case 10:
                    err = _state.sent();
                    return [
                        4,
                        this.rollbackTransaction(transactionID)
                    ];
                case 11:
                    _state.sent();
                    payload.logger.error({
                        msg: "Error running migration ".concat(migration.name),
                        err: err
                    });
                    throw err;
                case 12:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        4
                    ];
                case 13:
                    return [
                        3,
                        16
                    ];
                case 14:
                    err1 = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err1;
                    return [
                        3,
                        16
                    ];
                case 15:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 16:
                    return [
                        2
                    ];
            }
        });
    });
    return _migrateRefresh.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVSZWZyZXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby1hd2FpdC1pbi1sb29wICovXG5pbXBvcnQgeyBEYXRhYmFzZUFkYXB0ZXIgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyByZWFkTWlncmF0aW9uRmlsZXMgfSBmcm9tICcuL3JlYWRNaWdyYXRpb25GaWxlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuXG4vKipcbiAqIFJlc2V0IGFuZCByZS1ydW4gYWxsIG1pZ3JhdGlvbnMuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWdyYXRlUmVmcmVzaCh0aGlzOiBEYXRhYmFzZUFkYXB0ZXIpIHtcbiAgY29uc3QgeyBwYXlsb2FkIH0gPSB0aGlzO1xuICBjb25zdCBtaWdyYXRpb25GaWxlcyA9IGF3YWl0IHJlYWRNaWdyYXRpb25GaWxlcyh7IHBheWxvYWQgfSk7XG5cbiAgLy8gQ2xlYXIgYWxsIG1pZ3JhdGlvbnNcbiAgYXdhaXQgcGF5bG9hZC5kZWxldGUoe1xuICAgIGNvbGxlY3Rpb246ICdwYXlsb2FkLW1pZ3JhdGlvbnMnLFxuICAgIHdoZXJlOiB7fSwgLy8gQWxsIG1pZ3JhdGlvbnNcbiAgfSk7XG4gIGxldCB0cmFuc2FjdGlvbklEO1xuICAvLyBSdW4gYWxsIG1pZ3JhdGlvbnNcbiAgZm9yIChjb25zdCBtaWdyYXRpb24gb2YgbWlncmF0aW9uRmlsZXMpIHtcbiAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiBgTWlncmF0aW5nOiAke21pZ3JhdGlvbi5uYW1lfWAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRyYW5zYWN0aW9uSUQgPSBhd2FpdCB0aGlzLmJlZ2luVHJhbnNhY3Rpb24oKTtcbiAgICAgIGF3YWl0IG1pZ3JhdGlvbi51cCh7IHBheWxvYWQgfSk7XG4gICAgICBhd2FpdCBwYXlsb2FkLmNyZWF0ZSh7XG4gICAgICAgIGNvbGxlY3Rpb246ICdwYXlsb2FkLW1pZ3JhdGlvbnMnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbmFtZTogbWlncmF0aW9uLm5hbWUsXG4gICAgICAgICAgZXhlY3V0ZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcToge1xuICAgICAgICAgIHRyYW5zYWN0aW9uSUQsXG4gICAgICAgIH0gYXMgUGF5bG9hZFJlcXVlc3QsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuY29tbWl0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb25JRCk7XG5cbiAgICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRlZDogICR7bWlncmF0aW9uLm5hbWV9ICgke0RhdGUubm93KCkgLSBzdGFydH1tcylgIH0pO1xuICAgIH0gY2F0Y2ggKGVycjogdW5rbm93bikge1xuICAgICAgYXdhaXQgdGhpcy5yb2xsYmFja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uSUQpO1xuICAgICAgcGF5bG9hZC5sb2dnZXIuZXJyb3Ioe1xuICAgICAgICBtc2c6IGBFcnJvciBydW5uaW5nIG1pZ3JhdGlvbiAke21pZ3JhdGlvbi5uYW1lfWAsXG4gICAgICAgIGVycixcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlYWRNaWdyYXRpb25GaWxlcyIsIm1pZ3JhdGVSZWZyZXNoIiwicGF5bG9hZCIsIm1pZ3JhdGlvbkZpbGVzIiwidHJhbnNhY3Rpb25JRCIsIm1pZ3JhdGlvbiIsInN0YXJ0IiwiZXJyIiwiZGVsZXRlIiwiY29sbGVjdGlvbiIsIndoZXJlIiwibG9nZ2VyIiwiaW5mbyIsIm1zZyIsIm5hbWUiLCJEYXRlIiwibm93IiwiYmVnaW5UcmFuc2FjdGlvbiIsInVwIiwiY3JlYXRlIiwiZGF0YSIsImV4ZWN1dGVkIiwicmVxIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJyb2xsYmFja1RyYW5zYWN0aW9uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxTQUFTQSxrQkFBa0IsUUFBUSx1QkFBdUI7QUFHMUQ7O0NBRUMsR0FDRCxnQkFBc0JDO1dBQUFBOztTQUFBQTtJQUFBQSxrQkFBZixvQkFBQTtZQUNHQyxTQUNGQyxnQkFPRkMsZUFFQywyQkFBQSxtQkFBQSxnQkFBQSxXQUFBLE9BQU1DLFdBR0RDLE9BZ0JDQzs7OztvQkE3QkhMLFVBQVksSUFBSSxDQUFoQkE7b0JBQ2U7O3dCQUFNRixtQkFBbUI7NEJBQUVFLFNBQUFBO3dCQUFROzs7b0JBQXBEQyxpQkFBaUI7b0JBRXZCLHVCQUF1QjtvQkFDdkI7O3dCQUFNRCxRQUFRTSxNQUFNLENBQUM7NEJBQ25CQyxZQUFZOzRCQUNaQyxPQUFPLENBQUM7d0JBQ1Y7OztvQkFIQTtvQkFNSyxrQ0FBQSwyQkFBQTs7Ozs7Ozs7O29CQUFBLFlBQW1CUDs7OzJCQUFuQiw2QkFBQSxRQUFBOzs7O29CQUFNRSxZQUFOO29CQUNISCxRQUFRUyxNQUFNLENBQUNDLElBQUksQ0FBQzt3QkFBRUMsS0FBSyxBQUFDLGNBQTRCLE9BQWZSLFVBQVVTLElBQUk7b0JBQUc7Ozs7Ozs7OztvQkFFbERSLFFBQVFTLEtBQUtDLEdBQUc7b0JBQ047O3dCQUFNLElBQUksQ0FBQ0MsZ0JBQWdCOzs7b0JBQTNDYixnQkFBZ0I7b0JBQ2hCOzt3QkFBTUMsVUFBVWEsRUFBRSxDQUFDOzRCQUFFaEIsU0FBQUE7d0JBQVE7OztvQkFBN0I7b0JBQ0E7O3dCQUFNQSxRQUFRaUIsTUFBTSxDQUFDOzRCQUNuQlYsWUFBWTs0QkFDWlcsTUFBTTtnQ0FDSk4sTUFBTVQsVUFBVVMsSUFBSTtnQ0FDcEJPLFVBQVU7NEJBQ1o7NEJBQ0FDLEtBQUs7Z0NBQ0hsQixlQUFBQTs0QkFDRjt3QkFDRjs7O29CQVRBO29CQVVBOzt3QkFBTSxJQUFJLENBQUNtQixpQkFBaUIsQ0FBQ25COzs7b0JBQTdCO29CQUVBRixRQUFRUyxNQUFNLENBQUNDLElBQUksQ0FBQzt3QkFBRUMsS0FBSyxBQUFDLGNBQWdDRSxPQUFuQlYsVUFBVVMsSUFBSSxFQUFDLE1BQXVCLE9BQW5CQyxLQUFLQyxHQUFHLEtBQUtWLE9BQU07b0JBQUs7Ozs7OztvQkFDN0VDO29CQUNQOzt3QkFBTSxJQUFJLENBQUNpQixtQkFBbUIsQ0FBQ3BCOzs7b0JBQS9CO29CQUNBRixRQUFRUyxNQUFNLENBQUNjLEtBQUssQ0FBQzt3QkFDbkJaLEtBQUssQUFBQywyQkFBeUMsT0FBZlIsVUFBVVMsSUFBSTt3QkFDOUNQLEtBQUFBO29CQUNGO29CQUNBLE1BQU1BOztvQkF6Qkw7Ozs7Ozs7Ozs7OztvQkFBQTtvQkFBQTs7Ozs7Ozs2QkFBQSw2QkFBQTs0QkFBQTs7OzRCQUFBO2tDQUFBOzs7Ozs7Ozs7Ozs7SUE0QlA7V0F2Q3NCTiJ9