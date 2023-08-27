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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
import { getMigrations } from "./getMigrations";
import { readMigrationFiles } from "./readMigrationFiles";
export function migrateReset() {
    return _migrateReset.apply(this, arguments);
}
function _migrateReset() {
    _migrateReset = _async_to_generator(function() {
        var _existingMigrations, payload, migrationFiles, existingMigrations, transactionID, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _this, _loop, _iterator, _step, err;
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
                    if (!((_existingMigrations = existingMigrations) === null || _existingMigrations === void 0 ? void 0 : _existingMigrations.length)) {
                        payload.logger.info({
                            msg: "No migrations to reset."
                        });
                        return [
                            2
                        ];
                    }
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        8,
                        9,
                        10
                    ]);
                    _this = this, _loop = function() {
                        var migration, existingMigration, start, err;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    migration = _step.value;
                                    existingMigration = existingMigrations.find(function(existing) {
                                        return existing.name === migration.name;
                                    });
                                    if (!existingMigration) return [
                                        3,
                                        8
                                    ];
                                    payload.logger.info({
                                        msg: "Migrating: ".concat(migration.name)
                                    });
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        6,
                                        ,
                                        8
                                    ]);
                                    start = Date.now();
                                    return [
                                        4,
                                        _this.beginTransaction()
                                    ];
                                case 2:
                                    transactionID = _state.sent();
                                    return [
                                        4,
                                        migration.down({
                                            payload: payload
                                        })
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        4,
                                        payload.delete({
                                            collection: "payload-migrations",
                                            where: {
                                                id: {
                                                    equals: existingMigration.id
                                                }
                                            },
                                            req: {
                                                transactionID: transactionID
                                            }
                                        })
                                    ];
                                case 4:
                                    _state.sent();
                                    return [
                                        4,
                                        _this.commitTransaction(transactionID)
                                    ];
                                case 5:
                                    _state.sent();
                                    payload.logger.info({
                                        msg: "Migrated:  ".concat(migration.name, " (").concat(Date.now() - start, "ms)")
                                    });
                                    return [
                                        3,
                                        8
                                    ];
                                case 6:
                                    err = _state.sent();
                                    return [
                                        4,
                                        _this.rollbackTransaction(transactionID)
                                    ];
                                case 7:
                                    _state.sent();
                                    payload.logger.error({
                                        msg: "Error running migration ".concat(migration.name),
                                        err: err
                                    });
                                    throw err;
                                case 8:
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    _iterator = migrationFiles[Symbol.iterator]();
                    _state.label = 4;
                case 4:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        7
                    ];
                    return [
                        5,
                        _ts_values(_loop())
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        4
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        10
                    ];
                case 9:
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
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
    return _migrateReset.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVSZXNldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tYXdhaXQtaW4tbG9vcCAqL1xuaW1wb3J0IHsgRGF0YWJhc2VBZGFwdGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TWlncmF0aW9ucyB9IGZyb20gJy4vZ2V0TWlncmF0aW9ucyc7XG5pbXBvcnQgeyByZWFkTWlncmF0aW9uRmlsZXMgfSBmcm9tICcuL3JlYWRNaWdyYXRpb25GaWxlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlncmF0ZVJlc2V0KHRoaXM6IERhdGFiYXNlQWRhcHRlcik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHBheWxvYWQgfSA9IHRoaXM7XG4gIGNvbnN0IG1pZ3JhdGlvbkZpbGVzID0gYXdhaXQgcmVhZE1pZ3JhdGlvbkZpbGVzKHsgcGF5bG9hZCB9KTtcblxuICBjb25zdCB7IGV4aXN0aW5nTWlncmF0aW9ucyB9ID0gYXdhaXQgZ2V0TWlncmF0aW9ucyh7IHBheWxvYWQgfSk7XG5cbiAgaWYgKCFleGlzdGluZ01pZ3JhdGlvbnM/Lmxlbmd0aCkge1xuICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6ICdObyBtaWdyYXRpb25zIHRvIHJlc2V0LicgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHRyYW5zYWN0aW9uSUQ7XG5cbiAgLy8gUm9sbGJhY2sgYWxsIG1pZ3JhdGlvbnMgaW4gb3JkZXJcbiAgZm9yIChjb25zdCBtaWdyYXRpb24gb2YgbWlncmF0aW9uRmlsZXMpIHtcbiAgICAvLyBDcmVhdGUgb3IgdXBkYXRlIG1pZ3JhdGlvbiBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IGV4aXN0aW5nTWlncmF0aW9uID0gZXhpc3RpbmdNaWdyYXRpb25zLmZpbmQoKGV4aXN0aW5nKSA9PiBleGlzdGluZy5uYW1lID09PSBtaWdyYXRpb24ubmFtZSk7XG4gICAgaWYgKGV4aXN0aW5nTWlncmF0aW9uKSB7XG4gICAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiBgTWlncmF0aW5nOiAke21pZ3JhdGlvbi5uYW1lfWAgfSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIHRyYW5zYWN0aW9uSUQgPSBhd2FpdCB0aGlzLmJlZ2luVHJhbnNhY3Rpb24oKTtcbiAgICAgICAgYXdhaXQgbWlncmF0aW9uLmRvd24oeyBwYXlsb2FkIH0pO1xuICAgICAgICBhd2FpdCBwYXlsb2FkLmRlbGV0ZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgIGVxdWFsczogZXhpc3RpbmdNaWdyYXRpb24uaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxOiB7IHRyYW5zYWN0aW9uSUQgfSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuY29tbWl0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb25JRCk7XG4gICAgICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRlZDogICR7bWlncmF0aW9uLm5hbWV9ICgke0RhdGUubm93KCkgLSBzdGFydH1tcylgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucm9sbGJhY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbklEKTtcbiAgICAgICAgcGF5bG9hZC5sb2dnZXIuZXJyb3IoeyBtc2c6IGBFcnJvciBydW5uaW5nIG1pZ3JhdGlvbiAke21pZ3JhdGlvbi5uYW1lfWAsIGVyciB9KTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImdldE1pZ3JhdGlvbnMiLCJyZWFkTWlncmF0aW9uRmlsZXMiLCJtaWdyYXRlUmVzZXQiLCJleGlzdGluZ01pZ3JhdGlvbnMiLCJwYXlsb2FkIiwibWlncmF0aW9uRmlsZXMiLCJ0cmFuc2FjdGlvbklEIiwibGVuZ3RoIiwibG9nZ2VyIiwiaW5mbyIsIm1zZyIsIm1pZ3JhdGlvbiIsImV4aXN0aW5nTWlncmF0aW9uIiwic3RhcnQiLCJlcnIiLCJmaW5kIiwiZXhpc3RpbmciLCJuYW1lIiwiRGF0ZSIsIm5vdyIsImJlZ2luVHJhbnNhY3Rpb24iLCJkb3duIiwiZGVsZXRlIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiaWQiLCJlcXVhbHMiLCJyZXEiLCJjb21taXRUcmFuc2FjdGlvbiIsInJvbGxiYWNrVHJhbnNhY3Rpb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekQsU0FBU0EsYUFBYSxRQUFRLGtCQUFrQjtBQUNoRCxTQUFTQyxrQkFBa0IsUUFBUSx1QkFBdUI7QUFHMUQsZ0JBQXNCQztXQUFBQTs7U0FBQUE7SUFBQUEsZ0JBQWYsb0JBQUE7WUFNQUMscUJBTEdDLFNBQ0ZDLGdCQUVFRixvQkFPSkcsZUFHQywyQkFBQSxtQkFBQSw4QkFBQSxXQUFBOzs7O29CQWJHRixVQUFZLElBQUksQ0FBaEJBO29CQUNlOzt3QkFBTUgsbUJBQW1COzRCQUFFRyxTQUFBQTt3QkFBUTs7O29CQUFwREMsaUJBQWlCO29CQUVROzt3QkFBTUwsY0FBYzs0QkFBRUksU0FBQUE7d0JBQVE7OztvQkFBckRELHFCQUF1QixjQUF2QkE7b0JBRVIsSUFBSSxHQUFDQSxzQkFBQUEsZ0NBQUFBLDBDQUFBQSxvQkFBb0JJLE1BQU0sR0FBRTt3QkFDL0JILFFBQVFJLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDOzRCQUFFQyxLQUFLO3dCQUEwQjt3QkFDckQ7OztvQkFDRjtvQkFLSyxrQ0FBQSwyQkFBQTs7Ozs7Ozs7Ozs0QkFBTUMsV0FFSEMsbUJBSUlDLE9BY0NDOzs7O29DQXBCRkgsWUFBTjtvQ0FFR0Msb0JBQW9CVCxtQkFBbUJZLElBQUksQ0FBQyxTQUFDQzsrQ0FBYUEsU0FBU0MsSUFBSSxLQUFLTixVQUFVTSxJQUFJOzt5Q0FDNUZMLG1CQUFBQTs7OztvQ0FDRlIsUUFBUUksTUFBTSxDQUFDQyxJQUFJLENBQUM7d0NBQUVDLEtBQUssQUFBQyxjQUE0QixPQUFmQyxVQUFVTSxJQUFJO29DQUFHOzs7Ozs7Ozs7b0NBRWxESixRQUFRSyxLQUFLQyxHQUFHO29DQUNOOzt3Q0FBTSxNQUFLQyxnQkFBZ0I7OztvQ0FBM0NkLGdCQUFnQjtvQ0FDaEI7O3dDQUFNSyxVQUFVVSxJQUFJLENBQUM7NENBQUVqQixTQUFBQTt3Q0FBUTs7O29DQUEvQjtvQ0FDQTs7d0NBQU1BLFFBQVFrQixNQUFNLENBQUM7NENBQ25CQyxZQUFZOzRDQUNaQyxPQUFPO2dEQUNMQyxJQUFJO29EQUNGQyxRQUFRZCxrQkFBa0JhLEVBQUU7Z0RBQzlCOzRDQUNGOzRDQUNBRSxLQUFLO2dEQUFFckIsZUFBQUE7NENBQWM7d0NBQ3ZCOzs7b0NBUkE7b0NBU0E7O3dDQUFNLE1BQUtzQixpQkFBaUIsQ0FBQ3RCOzs7b0NBQTdCO29DQUNBRixRQUFRSSxNQUFNLENBQUNDLElBQUksQ0FBQzt3Q0FBRUMsS0FBSyxBQUFDLGNBQWdDUSxPQUFuQlAsVUFBVU0sSUFBSSxFQUFDLE1BQXVCLE9BQW5CQyxLQUFLQyxHQUFHLEtBQUtOLE9BQU07b0NBQUs7Ozs7OztvQ0FDN0VDO29DQUNQOzt3Q0FBTSxNQUFLZSxtQkFBbUIsQ0FBQ3ZCOzs7b0NBQS9CO29DQUNBRixRQUFRSSxNQUFNLENBQUNzQixLQUFLLENBQUM7d0NBQUVwQixLQUFLLEFBQUMsMkJBQXlDLE9BQWZDLFVBQVVNLElBQUk7d0NBQUlILEtBQUFBO29DQUFJO29DQUM3RSxNQUFNQTs7Ozs7OztvQkFHWjtvQkExQkssWUFBbUJUOzs7MkJBQW5CLDZCQUFBLFFBQUE7Ozs7Ozs7Ozs7OztvQkFBQTs7Ozs7Ozs7Ozs7O29CQUFBO29CQUFBOzs7Ozs7OzZCQUFBLDZCQUFBOzRCQUFBOzs7NEJBQUE7a0NBQUE7Ozs7Ozs7Ozs7OztJQTJCUDtXQXpDc0JIIn0=