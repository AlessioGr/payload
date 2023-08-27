/* eslint-disable no-restricted-syntax, no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateReset", {
    enumerable: true,
    get: function() {
        return migrateReset;
    }
});
var _getMigrations = require("./getMigrations");
var _readMigrationFiles = require("./readMigrationFiles");
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
function migrateReset() {
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
                        (0, _readMigrationFiles.readMigrationFiles)({
                            payload: payload
                        })
                    ];
                case 1:
                    migrationFiles = _state.sent();
                    return [
                        4,
                        (0, _getMigrations.getMigrations)({
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVSZXNldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tYXdhaXQtaW4tbG9vcCAqL1xuaW1wb3J0IHsgRGF0YWJhc2VBZGFwdGVyIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0TWlncmF0aW9ucyB9IGZyb20gJy4vZ2V0TWlncmF0aW9ucyc7XG5pbXBvcnQgeyByZWFkTWlncmF0aW9uRmlsZXMgfSBmcm9tICcuL3JlYWRNaWdyYXRpb25GaWxlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlncmF0ZVJlc2V0KHRoaXM6IERhdGFiYXNlQWRhcHRlcik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCB7IHBheWxvYWQgfSA9IHRoaXM7XG4gIGNvbnN0IG1pZ3JhdGlvbkZpbGVzID0gYXdhaXQgcmVhZE1pZ3JhdGlvbkZpbGVzKHsgcGF5bG9hZCB9KTtcblxuICBjb25zdCB7IGV4aXN0aW5nTWlncmF0aW9ucyB9ID0gYXdhaXQgZ2V0TWlncmF0aW9ucyh7IHBheWxvYWQgfSk7XG5cbiAgaWYgKCFleGlzdGluZ01pZ3JhdGlvbnM/Lmxlbmd0aCkge1xuICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6ICdObyBtaWdyYXRpb25zIHRvIHJlc2V0LicgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHRyYW5zYWN0aW9uSUQ7XG5cbiAgLy8gUm9sbGJhY2sgYWxsIG1pZ3JhdGlvbnMgaW4gb3JkZXJcbiAgZm9yIChjb25zdCBtaWdyYXRpb24gb2YgbWlncmF0aW9uRmlsZXMpIHtcbiAgICAvLyBDcmVhdGUgb3IgdXBkYXRlIG1pZ3JhdGlvbiBpbiBkYXRhYmFzZVxuICAgIGNvbnN0IGV4aXN0aW5nTWlncmF0aW9uID0gZXhpc3RpbmdNaWdyYXRpb25zLmZpbmQoKGV4aXN0aW5nKSA9PiBleGlzdGluZy5uYW1lID09PSBtaWdyYXRpb24ubmFtZSk7XG4gICAgaWYgKGV4aXN0aW5nTWlncmF0aW9uKSB7XG4gICAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiBgTWlncmF0aW5nOiAke21pZ3JhdGlvbi5uYW1lfWAgfSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIHRyYW5zYWN0aW9uSUQgPSBhd2FpdCB0aGlzLmJlZ2luVHJhbnNhY3Rpb24oKTtcbiAgICAgICAgYXdhaXQgbWlncmF0aW9uLmRvd24oeyBwYXlsb2FkIH0pO1xuICAgICAgICBhd2FpdCBwYXlsb2FkLmRlbGV0ZSh7XG4gICAgICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgIGVxdWFsczogZXhpc3RpbmdNaWdyYXRpb24uaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVxOiB7IHRyYW5zYWN0aW9uSUQgfSBhcyBQYXlsb2FkUmVxdWVzdCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuY29tbWl0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb25JRCk7XG4gICAgICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRlZDogICR7bWlncmF0aW9uLm5hbWV9ICgke0RhdGUubm93KCkgLSBzdGFydH1tcylgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucm9sbGJhY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbklEKTtcbiAgICAgICAgcGF5bG9hZC5sb2dnZXIuZXJyb3IoeyBtc2c6IGBFcnJvciBydW5uaW5nIG1pZ3JhdGlvbiAke21pZ3JhdGlvbi5uYW1lfWAsIGVyciB9KTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGVSZXNldCIsImV4aXN0aW5nTWlncmF0aW9ucyIsInBheWxvYWQiLCJtaWdyYXRpb25GaWxlcyIsInRyYW5zYWN0aW9uSUQiLCJyZWFkTWlncmF0aW9uRmlsZXMiLCJnZXRNaWdyYXRpb25zIiwibGVuZ3RoIiwibG9nZ2VyIiwiaW5mbyIsIm1zZyIsIm1pZ3JhdGlvbiIsImV4aXN0aW5nTWlncmF0aW9uIiwic3RhcnQiLCJlcnIiLCJmaW5kIiwiZXhpc3RpbmciLCJuYW1lIiwiRGF0ZSIsIm5vdyIsImJlZ2luVHJhbnNhY3Rpb24iLCJkb3duIiwiZGVsZXRlIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiaWQiLCJlcXVhbHMiLCJyZXEiLCJjb21taXRUcmFuc2FjdGlvbiIsInJvbGxiYWNrVHJhbnNhY3Rpb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEOzs7OytCQU1uQ0E7OztlQUFBQTs7OzZCQUpRO2tDQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBR2JBO1dBQUFBOztTQUFBQTtJQUFBQSxnQkFBZixvQkFBQTtZQU1BQyxxQkFMR0MsU0FDRkMsZ0JBRUVGLG9CQU9KRyxlQUdDLDJCQUFBLG1CQUFBLDhCQUFBLFdBQUE7Ozs7b0JBYkdGLFVBQVksSUFBSSxDQUFoQkE7b0JBQ2U7O3dCQUFNRyxJQUFBQSxzQ0FBa0IsRUFBQzs0QkFBRUgsU0FBQUE7d0JBQVE7OztvQkFBcERDLGlCQUFpQjtvQkFFUTs7d0JBQU1HLElBQUFBLDRCQUFhLEVBQUM7NEJBQUVKLFNBQUFBO3dCQUFROzs7b0JBQXJERCxxQkFBdUIsY0FBdkJBO29CQUVSLElBQUksR0FBQ0Esc0JBQUFBLGdDQUFBQSwwQ0FBQUEsb0JBQW9CTSxNQUFNLEdBQUU7d0JBQy9CTCxRQUFRTSxNQUFNLENBQUNDLElBQUksQ0FBQzs0QkFBRUMsS0FBSzt3QkFBMEI7d0JBQ3JEOzs7b0JBQ0Y7b0JBS0ssa0NBQUEsMkJBQUE7Ozs7Ozs7Ozs7NEJBQU1DLFdBRUhDLG1CQUlJQyxPQWNDQzs7OztvQ0FwQkZILFlBQU47b0NBRUdDLG9CQUFvQlgsbUJBQW1CYyxJQUFJLENBQUMsU0FBQ0M7K0NBQWFBLFNBQVNDLElBQUksS0FBS04sVUFBVU0sSUFBSTs7eUNBQzVGTCxtQkFBQUE7Ozs7b0NBQ0ZWLFFBQVFNLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO3dDQUFFQyxLQUFLLEFBQUMsY0FBNEIsT0FBZkMsVUFBVU0sSUFBSTtvQ0FBRzs7Ozs7Ozs7O29DQUVsREosUUFBUUssS0FBS0MsR0FBRztvQ0FDTjs7d0NBQU0sTUFBS0MsZ0JBQWdCOzs7b0NBQTNDaEIsZ0JBQWdCO29DQUNoQjs7d0NBQU1PLFVBQVVVLElBQUksQ0FBQzs0Q0FBRW5CLFNBQUFBO3dDQUFROzs7b0NBQS9CO29DQUNBOzt3Q0FBTUEsUUFBUW9CLE1BQU0sQ0FBQzs0Q0FDbkJDLFlBQVk7NENBQ1pDLE9BQU87Z0RBQ0xDLElBQUk7b0RBQ0ZDLFFBQVFkLGtCQUFrQmEsRUFBRTtnREFDOUI7NENBQ0Y7NENBQ0FFLEtBQUs7Z0RBQUV2QixlQUFBQTs0Q0FBYzt3Q0FDdkI7OztvQ0FSQTtvQ0FTQTs7d0NBQU0sTUFBS3dCLGlCQUFpQixDQUFDeEI7OztvQ0FBN0I7b0NBQ0FGLFFBQVFNLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDO3dDQUFFQyxLQUFLLEFBQUMsY0FBZ0NRLE9BQW5CUCxVQUFVTSxJQUFJLEVBQUMsTUFBdUIsT0FBbkJDLEtBQUtDLEdBQUcsS0FBS04sT0FBTTtvQ0FBSzs7Ozs7O29DQUM3RUM7b0NBQ1A7O3dDQUFNLE1BQUtlLG1CQUFtQixDQUFDekI7OztvQ0FBL0I7b0NBQ0FGLFFBQVFNLE1BQU0sQ0FBQ3NCLEtBQUssQ0FBQzt3Q0FBRXBCLEtBQUssQUFBQywyQkFBeUMsT0FBZkMsVUFBVU0sSUFBSTt3Q0FBSUgsS0FBQUE7b0NBQUk7b0NBQzdFLE1BQU1BOzs7Ozs7O29CQUdaO29CQTFCSyxZQUFtQlg7OzsyQkFBbkIsNkJBQUEsUUFBQTs7Ozs7Ozs7Ozs7O29CQUFBOzs7Ozs7Ozs7Ozs7b0JBQUE7b0JBQUE7Ozs7Ozs7NkJBQUEsNkJBQUE7NEJBQUE7Ozs0QkFBQTtrQ0FBQTs7Ozs7Ozs7Ozs7O0lBMkJQO1dBekNzQkgifQ==