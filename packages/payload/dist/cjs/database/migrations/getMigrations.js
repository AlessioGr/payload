"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getMigrations", {
    enumerable: true,
    get: function() {
        return getMigrations;
    }
});
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
function getMigrations(_) {
    return _getMigrations.apply(this, arguments);
}
function _getMigrations() {
    _getMigrations = _async_to_generator(function(param) {
        var payload, _existingMigrations_, _existingMigrations, migrationQuery, existingMigrations, latestBatch;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = param.payload;
                    return [
                        4,
                        payload.find({
                            collection: "payload-migrations",
                            sort: "-name",
                            where: {
                                and: [
                                    {
                                        batch: {
                                            not_equals: "-1"
                                        }
                                    },
                                    {
                                        batch: {
                                            not_equals: -1
                                        }
                                    }
                                ]
                            }
                        })
                    ];
                case 1:
                    migrationQuery = _state.sent();
                    existingMigrations = migrationQuery.docs;
                    latestBatch = Number((_existingMigrations = existingMigrations) === null || _existingMigrations === void 0 ? void 0 : (_existingMigrations_ = _existingMigrations[0]) === null || _existingMigrations_ === void 0 ? void 0 : _existingMigrations_.batch) || 0;
                    return [
                        2,
                        {
                            existingMigrations: existingMigrations.map(function(m) {
                                return _object_spread_props(_object_spread({}, m), {
                                    // Cast to number to accomodate postgres numeric field type. Stores as string.
                                    batch: Number(m.batch)
                                });
                            }),
                            latestBatch: Number(latestBatch)
                        }
                    ];
            }
        });
    });
    return _getMigrations.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL2dldE1pZ3JhdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7IE1pZ3JhdGlvbkRhdGEgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNaWdyYXRpb25zKHtcbiAgcGF5bG9hZCxcbn06IHtcbiAgcGF5bG9hZDogUGF5bG9hZDtcbn0pOiBQcm9taXNlPHsgZXhpc3RpbmdNaWdyYXRpb25zOiBNaWdyYXRpb25EYXRhW10sIGxhdGVzdEJhdGNoOiBudW1iZXIgfT4ge1xuICBjb25zdCBtaWdyYXRpb25RdWVyeSA9IGF3YWl0IHBheWxvYWQuZmluZCh7XG4gICAgY29sbGVjdGlvbjogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gICAgc29ydDogJy1uYW1lJyxcbiAgICB3aGVyZToge1xuICAgICAgYW5kOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiYXRjaDoge1xuICAgICAgICAgICAgbm90X2VxdWFsczogJy0xJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmF0Y2g6IHtcbiAgICAgICAgICAgIG5vdF9lcXVhbHM6IC0xLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgZXhpc3RpbmdNaWdyYXRpb25zID0gbWlncmF0aW9uUXVlcnkuZG9jcyBhcyB1bmtub3duIGFzIE1pZ3JhdGlvbkRhdGFbXTtcblxuICAvLyBHZXQgdGhlIGhpZ2hlc3QgYmF0Y2ggbnVtYmVyIGZyb20gZXhpc3RpbmcgbWlncmF0aW9uc1xuICBjb25zdCBsYXRlc3RCYXRjaCA9IE51bWJlcihleGlzdGluZ01pZ3JhdGlvbnM/LlswXT8uYmF0Y2gpIHx8IDA7XG5cbiAgcmV0dXJuIHtcbiAgICBleGlzdGluZ01pZ3JhdGlvbnM6IGV4aXN0aW5nTWlncmF0aW9ucy5tYXAoKG0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm0sXG4gICAgICAgIC8vIENhc3QgdG8gbnVtYmVyIHRvIGFjY29tb2RhdGUgcG9zdGdyZXMgbnVtZXJpYyBmaWVsZCB0eXBlLiBTdG9yZXMgYXMgc3RyaW5nLlxuICAgICAgICBiYXRjaDogTnVtYmVyKG0uYmF0Y2gpLFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBsYXRlc3RCYXRjaDogTnVtYmVyKGxhdGVzdEJhdGNoKSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRNaWdyYXRpb25zIiwicGF5bG9hZCIsImV4aXN0aW5nTWlncmF0aW9ucyIsIm1pZ3JhdGlvblF1ZXJ5IiwibGF0ZXN0QmF0Y2giLCJmaW5kIiwiY29sbGVjdGlvbiIsInNvcnQiLCJ3aGVyZSIsImFuZCIsImJhdGNoIiwibm90X2VxdWFscyIsImRvY3MiLCJOdW1iZXIiLCJtYXAiLCJtIl0sIm1hcHBpbmdzIjoiOzs7OytCQUdzQkE7OztlQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FBQUEsY0FBYyxDQUluQztXQUpxQkE7O1NBQUFBO0lBQUFBLGlCQUFmLG9CQUFBLFNBQTZCLEtBSW5DO1lBSENDLFNBMkIyQkMsc0JBQUFBLHFCQXZCckJDLGdCQW9CQUQsb0JBR0FFOzs7O29CQTNCTkgsVUFEa0MsTUFDbENBO29CQUl1Qjs7d0JBQU1BLFFBQVFJLElBQUksQ0FBQzs0QkFDeENDLFlBQVk7NEJBQ1pDLE1BQU07NEJBQ05DLE9BQU87Z0NBQ0xDLEdBQUc7b0NBQ0Q7d0NBQ0VDLE9BQU87NENBQ0xDLFlBQVk7d0NBQ2Q7b0NBQ0Y7b0NBQ0E7d0NBQ0VELE9BQU87NENBQ0xDLFlBQVksQ0FBQzt3Q0FDZjtvQ0FDRjs7NEJBR0o7d0JBQ0Y7OztvQkFsQk1SLGlCQUFpQjtvQkFvQmpCRCxxQkFBcUJDLGVBQWVTLElBQUk7b0JBR3hDUixjQUFjUyxRQUFPWCxzQkFBQUEsZ0NBQUFBLDJDQUFBQSx1QkFBQUEsbUJBQW9CLENBQUMsRUFBRSxjQUF2QkEsMkNBQUFBLHFCQUF5QlEsS0FBSyxLQUFLO29CQUU5RDs7d0JBQU87NEJBQ0xSLG9CQUFvQkEsbUJBQW1CWSxHQUFHLENBQUMsU0FBQ0M7Z0NBQzFDLE9BQU8sd0NBQ0ZBO29DQUNILDhFQUE4RTtvQ0FDOUVMLE9BQU9HLE9BQU9FLEVBQUVMLEtBQUs7OzRCQUV6Qjs0QkFDQU4sYUFBYVMsT0FBT1Q7d0JBQ3RCOzs7O0lBQ0Y7V0F4Q3NCSiJ9