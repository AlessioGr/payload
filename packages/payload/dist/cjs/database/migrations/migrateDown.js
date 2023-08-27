/* eslint-disable no-restricted-syntax, no-await-in-loop */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrateDown", {
    enumerable: true,
    get: function() {
        return migrateDown;
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
function migrateDown() {
    return _migrateDown.apply(this, arguments);
}
function _migrateDown() {
    _migrateDown = _async_to_generator(function() {
        var _migrationsToRollback, payload, migrationFiles, _ref, existingMigrations, latestBatch, migrationsToRollback, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _this, _loop, _iterator, _step, err;
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
                    _ref = _state.sent(), existingMigrations = _ref.existingMigrations, latestBatch = _ref.latestBatch;
                    migrationsToRollback = existingMigrations.filter(function(migration) {
                        return migration.batch === latestBatch;
                    });
                    if (!((_migrationsToRollback = migrationsToRollback) === null || _migrationsToRollback === void 0 ? void 0 : _migrationsToRollback.length)) {
                        payload.logger.info({
                            msg: "No migrations to rollback."
                        });
                        return [
                            2
                        ];
                    }
                    payload.logger.info({
                        msg: "Rolling back batch ".concat(latestBatch, " consisting of ").concat(migrationsToRollback.length, " migrations.")
                    });
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
                        var migration, migrationFile, start, transactionID, err;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    migration = _step.value;
                                    migrationFile = migrationFiles.find(function(m) {
                                        return m.name === migration.name;
                                    });
                                    if (!migrationFile) {
                                        throw new Error("Migration ".concat(migration.name, " not found locally."));
                                    }
                                    start = Date.now();
                                    transactionID = void 0;
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        6,
                                        ,
                                        8
                                    ]);
                                    payload.logger.info({
                                        msg: "Migrating: ".concat(migrationFile.name)
                                    });
                                    return [
                                        4,
                                        _this.beginTransaction()
                                    ];
                                case 2:
                                    transactionID = _state.sent();
                                    return [
                                        4,
                                        migrationFile.down({
                                            payload: payload
                                        })
                                    ];
                                case 3:
                                    _state.sent();
                                    payload.logger.info({
                                        msg: "Migrated:  ".concat(migrationFile.name, " (").concat(Date.now() - start, "ms)")
                                    });
                                    // Waiting for implementation here
                                    return [
                                        4,
                                        payload.delete({
                                            collection: "payload-migrations",
                                            id: migration.id,
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
                                        msg: "Error running migration ".concat(migrationFile.name),
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
                    _iterator = migrationsToRollback[Symbol.iterator]();
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
    return _migrateDown.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGVEb3duLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby1hd2FpdC1pbi1sb29wICovXG5pbXBvcnQgeyBEYXRhYmFzZUFkYXB0ZXIgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRNaWdyYXRpb25zIH0gZnJvbSAnLi9nZXRNaWdyYXRpb25zJztcbmltcG9ydCB7IHJlYWRNaWdyYXRpb25GaWxlcyB9IGZyb20gJy4vcmVhZE1pZ3JhdGlvbkZpbGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtaWdyYXRlRG93bih0aGlzOiBEYXRhYmFzZUFkYXB0ZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgeyBwYXlsb2FkIH0gPSB0aGlzO1xuICBjb25zdCBtaWdyYXRpb25GaWxlcyA9IGF3YWl0IHJlYWRNaWdyYXRpb25GaWxlcyh7IHBheWxvYWQgfSk7XG5cbiAgY29uc3Qge1xuICAgIGV4aXN0aW5nTWlncmF0aW9ucyxcbiAgICBsYXRlc3RCYXRjaCxcbiAgfSA9IGF3YWl0IGdldE1pZ3JhdGlvbnMoe1xuICAgIHBheWxvYWQsXG4gIH0pO1xuXG5cbiAgY29uc3QgbWlncmF0aW9uc1RvUm9sbGJhY2sgPSBleGlzdGluZ01pZ3JhdGlvbnMuZmlsdGVyKChtaWdyYXRpb24pID0+IG1pZ3JhdGlvbi5iYXRjaCA9PT0gbGF0ZXN0QmF0Y2gpO1xuICBpZiAoIW1pZ3JhdGlvbnNUb1JvbGxiYWNrPy5sZW5ndGgpIHtcbiAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiAnTm8gbWlncmF0aW9ucyB0byByb2xsYmFjay4nIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiBgUm9sbGluZyBiYWNrIGJhdGNoICR7bGF0ZXN0QmF0Y2h9IGNvbnNpc3Rpbmcgb2YgJHttaWdyYXRpb25zVG9Sb2xsYmFjay5sZW5ndGh9IG1pZ3JhdGlvbnMuYCB9KTtcblxuICBmb3IgKGNvbnN0IG1pZ3JhdGlvbiBvZiBtaWdyYXRpb25zVG9Sb2xsYmFjaykge1xuICAgIGNvbnN0IG1pZ3JhdGlvbkZpbGUgPSBtaWdyYXRpb25GaWxlcy5maW5kKChtKSA9PiBtLm5hbWUgPT09IG1pZ3JhdGlvbi5uYW1lKTtcbiAgICBpZiAoIW1pZ3JhdGlvbkZpbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWlncmF0aW9uICR7bWlncmF0aW9uLm5hbWV9IG5vdCBmb3VuZCBsb2NhbGx5LmApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgdHJhbnNhY3Rpb25JRDtcblxuICAgIHRyeSB7XG4gICAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiBgTWlncmF0aW5nOiAke21pZ3JhdGlvbkZpbGUubmFtZX1gIH0pO1xuICAgICAgdHJhbnNhY3Rpb25JRCA9IGF3YWl0IHRoaXMuYmVnaW5UcmFuc2FjdGlvbigpO1xuICAgICAgYXdhaXQgbWlncmF0aW9uRmlsZS5kb3duKHsgcGF5bG9hZCB9KTtcbiAgICAgIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRlZDogICR7bWlncmF0aW9uRmlsZS5uYW1lfSAoJHtEYXRlLm5vdygpIC0gc3RhcnR9bXMpYCB9KTtcbiAgICAgIC8vIFdhaXRpbmcgZm9yIGltcGxlbWVudGF0aW9uIGhlcmVcbiAgICAgIGF3YWl0IHBheWxvYWQuZGVsZXRlKHtcbiAgICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgICAgIGlkOiBtaWdyYXRpb24uaWQsXG4gICAgICAgIHJlcToge1xuICAgICAgICAgIHRyYW5zYWN0aW9uSUQsXG4gICAgICAgIH0gYXMgUGF5bG9hZFJlcXVlc3QsXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHRoaXMuY29tbWl0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb25JRCk7XG4gICAgfSBjYXRjaCAoZXJyOiB1bmtub3duKSB7XG4gICAgICBhd2FpdCB0aGlzLnJvbGxiYWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb25JRCk7XG4gICAgICBwYXlsb2FkLmxvZ2dlci5lcnJvcih7XG4gICAgICAgIG1zZzogYEVycm9yIHJ1bm5pbmcgbWlncmF0aW9uICR7bWlncmF0aW9uRmlsZS5uYW1lfWAsXG4gICAgICAgIGVycixcbiAgICAgIH0pO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm1pZ3JhdGVEb3duIiwibWlncmF0aW9uc1RvUm9sbGJhY2siLCJwYXlsb2FkIiwibWlncmF0aW9uRmlsZXMiLCJleGlzdGluZ01pZ3JhdGlvbnMiLCJsYXRlc3RCYXRjaCIsInJlYWRNaWdyYXRpb25GaWxlcyIsImdldE1pZ3JhdGlvbnMiLCJmaWx0ZXIiLCJtaWdyYXRpb24iLCJiYXRjaCIsImxlbmd0aCIsImxvZ2dlciIsImluZm8iLCJtc2ciLCJtaWdyYXRpb25GaWxlIiwic3RhcnQiLCJ0cmFuc2FjdGlvbklEIiwiZXJyIiwiZmluZCIsIm0iLCJuYW1lIiwiRXJyb3IiLCJEYXRlIiwibm93IiwiYmVnaW5UcmFuc2FjdGlvbiIsImRvd24iLCJkZWxldGUiLCJjb2xsZWN0aW9uIiwiaWQiLCJyZXEiLCJjb21taXRUcmFuc2FjdGlvbiIsInJvbGxiYWNrVHJhbnNhY3Rpb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEseURBQXlEOzs7OytCQU1uQ0E7OztlQUFBQTs7OzZCQUpRO2tDQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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