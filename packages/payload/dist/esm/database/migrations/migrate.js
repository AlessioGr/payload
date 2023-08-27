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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
export function migrate() {
    return _migrate.apply(this, arguments);
}
function _migrate() {
    _migrate = _async_to_generator(function() {
        var payload, migrationFiles, _ref, existingMigrations, latestBatch, newBatch, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _this, _loop, _iterator, _step, err;
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
                    _ref = _state.sent(), existingMigrations = _ref.existingMigrations, latestBatch = _ref.latestBatch;
                    newBatch = latestBatch + 1;
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
                        var migration, existingMigration, start, transactionID, err;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    migration = _step.value;
                                    existingMigration = existingMigrations.find(function(existing) {
                                        return existing.name === migration.name;
                                    });
                                    // Run migration if not found in database
                                    if (existingMigration) {
                                        return [
                                            2,
                                            "continue" // eslint-disable-line no-continue
                                        ];
                                    }
                                    start = Date.now();
                                    transactionID = void 0;
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
                                    return [
                                        4,
                                        _this.beginTransaction()
                                    ];
                                case 2:
                                    transactionID = _state.sent();
                                    return [
                                        4,
                                        migration.up({
                                            payload: payload
                                        })
                                    ];
                                case 3:
                                    _state.sent();
                                    payload.logger.info({
                                        msg: "Migrated:  ".concat(migration.name, " (").concat(Date.now() - start, "ms)")
                                    });
                                    return [
                                        4,
                                        payload.create(_object_spread({
                                            collection: "payload-migrations",
                                            data: {
                                                name: migration.name,
                                                batch: newBatch
                                            }
                                        }, transactionID && {
                                            req: {
                                                transactionID: transactionID
                                            }
                                        }))
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
    return _migrate.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXgsIG5vLWF3YWl0LWluLWxvb3AgKi9cbmltcG9ydCB7IERhdGFiYXNlQWRhcHRlciB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGdldE1pZ3JhdGlvbnMgfSBmcm9tICcuL2dldE1pZ3JhdGlvbnMnO1xuaW1wb3J0IHsgcmVhZE1pZ3JhdGlvbkZpbGVzIH0gZnJvbSAnLi9yZWFkTWlncmF0aW9uRmlsZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1pZ3JhdGUodGhpczogRGF0YWJhc2VBZGFwdGVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHsgcGF5bG9hZCB9ID0gdGhpcztcbiAgY29uc3QgbWlncmF0aW9uRmlsZXMgPSBhd2FpdCByZWFkTWlncmF0aW9uRmlsZXMoeyBwYXlsb2FkIH0pO1xuICBjb25zdCB7IGV4aXN0aW5nTWlncmF0aW9ucywgbGF0ZXN0QmF0Y2ggfSA9IGF3YWl0IGdldE1pZ3JhdGlvbnMoeyBwYXlsb2FkIH0pO1xuXG4gIGNvbnN0IG5ld0JhdGNoID0gbGF0ZXN0QmF0Y2ggKyAxO1xuXG4gIC8vIEV4ZWN1dGUgJ3VwJyBmdW5jdGlvbiBmb3IgZWFjaCBtaWdyYXRpb24gc2VxdWVudGlhbGx5XG4gIGZvciAoY29uc3QgbWlncmF0aW9uIG9mIG1pZ3JhdGlvbkZpbGVzKSB7XG4gICAgY29uc3QgZXhpc3RpbmdNaWdyYXRpb24gPSBleGlzdGluZ01pZ3JhdGlvbnMuZmluZCgoZXhpc3RpbmcpID0+IGV4aXN0aW5nLm5hbWUgPT09IG1pZ3JhdGlvbi5uYW1lKTtcblxuICAgIC8vIFJ1biBtaWdyYXRpb24gaWYgbm90IGZvdW5kIGluIGRhdGFiYXNlXG4gICAgaWYgKGV4aXN0aW5nTWlncmF0aW9uKSB7XG4gICAgICBjb250aW51ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb250aW51ZVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgdHJhbnNhY3Rpb25JRDogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgcGF5bG9hZC5sb2dnZXIuaW5mbyh7IG1zZzogYE1pZ3JhdGluZzogJHttaWdyYXRpb24ubmFtZX1gIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zYWN0aW9uSUQgPSBhd2FpdCB0aGlzLmJlZ2luVHJhbnNhY3Rpb24oKTtcbiAgICAgIGF3YWl0IG1pZ3JhdGlvbi51cCh7IHBheWxvYWQgfSk7XG4gICAgICBwYXlsb2FkLmxvZ2dlci5pbmZvKHsgbXNnOiBgTWlncmF0ZWQ6ICAke21pZ3JhdGlvbi5uYW1lfSAoJHtEYXRlLm5vdygpIC0gc3RhcnR9bXMpYCB9KTtcbiAgICAgIGF3YWl0IHBheWxvYWQuY3JlYXRlKHtcbiAgICAgICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBuYW1lOiBtaWdyYXRpb24ubmFtZSxcbiAgICAgICAgICBiYXRjaDogbmV3QmF0Y2gsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLih0cmFuc2FjdGlvbklEICYmIHsgcmVxOiB7IHRyYW5zYWN0aW9uSUQgfSBhcyBQYXlsb2FkUmVxdWVzdCB9KSxcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgdGhpcy5jb21taXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbklEKTtcbiAgICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICAgIGF3YWl0IHRoaXMucm9sbGJhY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbklEKTtcbiAgICAgIHBheWxvYWQubG9nZ2VyLmVycm9yKHsgbXNnOiBgRXJyb3IgcnVubmluZyBtaWdyYXRpb24gJHttaWdyYXRpb24ubmFtZX1gLCBlcnIgfSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0TWlncmF0aW9ucyIsInJlYWRNaWdyYXRpb25GaWxlcyIsIm1pZ3JhdGUiLCJwYXlsb2FkIiwibWlncmF0aW9uRmlsZXMiLCJleGlzdGluZ01pZ3JhdGlvbnMiLCJsYXRlc3RCYXRjaCIsIm5ld0JhdGNoIiwibWlncmF0aW9uIiwiZXhpc3RpbmdNaWdyYXRpb24iLCJzdGFydCIsInRyYW5zYWN0aW9uSUQiLCJlcnIiLCJmaW5kIiwiZXhpc3RpbmciLCJuYW1lIiwiRGF0ZSIsIm5vdyIsImxvZ2dlciIsImluZm8iLCJtc2ciLCJiZWdpblRyYW5zYWN0aW9uIiwidXAiLCJjcmVhdGUiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImJhdGNoIiwicmVxIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJyb2xsYmFja1RyYW5zYWN0aW9uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLHlEQUF5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxTQUFTQSxhQUFhLFFBQVEsa0JBQWtCO0FBQ2hELFNBQVNDLGtCQUFrQixRQUFRLHVCQUF1QjtBQUcxRCxnQkFBc0JDO1dBQUFBOztTQUFBQTtJQUFBQSxXQUFmLG9CQUFBO1lBQ0dDLFNBQ0ZDLGdCQUNzQyxNQUFwQ0Msb0JBQW9CQyxhQUV0QkMsVUFHRCwyQkFBQSxtQkFBQSw4QkFBQSxXQUFBOzs7O29CQVBHSixVQUFZLElBQUksQ0FBaEJBO29CQUNlOzt3QkFBTUYsbUJBQW1COzRCQUFFRSxTQUFBQTt3QkFBUTs7O29CQUFwREMsaUJBQWlCO29CQUNxQjs7d0JBQU1KLGNBQWM7NEJBQUVHLFNBQUFBO3dCQUFROzs7b0JBQTlCLE9BQUEsZUFBcENFLHFCQUFvQyxLQUFwQ0Esb0JBQW9CQyxjQUFnQixLQUFoQkE7b0JBRXRCQyxXQUFXRCxjQUFjO29CQUcxQixrQ0FBQSwyQkFBQTs7Ozs7Ozs7Ozs0QkFBTUUsV0FDSEMsbUJBT0FDLE9BQ0ZDLGVBaUJLQzs7OztvQ0ExQkFKLFlBQU47b0NBQ0dDLG9CQUFvQkosbUJBQW1CUSxJQUFJLENBQUMsU0FBQ0M7K0NBQWFBLFNBQVNDLElBQUksS0FBS1AsVUFBVU8sSUFBSTs7b0NBRWhHLHlDQUF5QztvQ0FDekMsSUFBSU4sbUJBQW1CO3dDQUNyQjs7NENBQUEsV0FBVSxrQ0FBa0M7O29DQUM5QztvQ0FFTUMsUUFBUU0sS0FBS0MsR0FBRztvQ0FDbEJOLGdCQUFBQSxLQUFBQTtvQ0FFSlIsUUFBUWUsTUFBTSxDQUFDQyxJQUFJLENBQUM7d0NBQUVDLEtBQUssQUFBQyxjQUE0QixPQUFmWixVQUFVTyxJQUFJO29DQUFHOzs7Ozs7Ozs7b0NBR3hDOzt3Q0FBTSxNQUFLTSxnQkFBZ0I7OztvQ0FBM0NWLGdCQUFnQjtvQ0FDaEI7O3dDQUFNSCxVQUFVYyxFQUFFLENBQUM7NENBQUVuQixTQUFBQTt3Q0FBUTs7O29DQUE3QjtvQ0FDQUEsUUFBUWUsTUFBTSxDQUFDQyxJQUFJLENBQUM7d0NBQUVDLEtBQUssQUFBQyxjQUFnQ0osT0FBbkJSLFVBQVVPLElBQUksRUFBQyxNQUF1QixPQUFuQkMsS0FBS0MsR0FBRyxLQUFLUCxPQUFNO29DQUFLO29DQUNwRjs7d0NBQU1QLFFBQVFvQixNQUFNLENBQUM7NENBQ25CQyxZQUFZOzRDQUNaQyxNQUFNO2dEQUNKVixNQUFNUCxVQUFVTyxJQUFJO2dEQUNwQlcsT0FBT25COzRDQUNUOzJDQUNJSSxpQkFBaUI7NENBQUVnQixLQUFLO2dEQUFFaEIsZUFBQUE7NENBQWM7d0NBQW9COzs7b0NBTmxFO29DQVFBOzt3Q0FBTSxNQUFLaUIsaUJBQWlCLENBQUNqQjs7O29DQUE3Qjs7Ozs7O29DQUNPQztvQ0FDUDs7d0NBQU0sTUFBS2lCLG1CQUFtQixDQUFDbEI7OztvQ0FBL0I7b0NBQ0FSLFFBQVFlLE1BQU0sQ0FBQ1ksS0FBSyxDQUFDO3dDQUFFVixLQUFLLEFBQUMsMkJBQXlDLE9BQWZaLFVBQVVPLElBQUk7d0NBQUlILEtBQUFBO29DQUFJO29DQUM3RSxNQUFNQTs7Ozs7OztvQkFFVjtvQkEvQkssWUFBbUJSOzs7MkJBQW5CLDZCQUFBLFFBQUE7Ozs7Ozs7Ozs7OztvQkFBQTs7Ozs7Ozs7Ozs7O29CQUFBO29CQUFBOzs7Ozs7OzZCQUFBLDZCQUFBOzRCQUFBOzs7NEJBQUE7a0NBQUE7Ozs7Ozs7Ozs7OztJQWdDUDtXQXhDc0JGIn0=