/* eslint-disable no-param-reassign */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
import { transaction } from "./transaction";
import { migrate } from "./migrations/migrate";
import { migrateStatus } from "./migrations/migrateStatus";
import { migrateDown } from "./migrations/migrateDown";
import { migrateRefresh } from "./migrations/migrateRefresh";
import { migrateReset } from "./migrations/migrateReset";
import { createMigration } from "./migrations/createMigration";
var beginTransaction = function() {
    var _ref = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                null
            ];
        });
    });
    return function beginTransaction() {
        return _ref.apply(this, arguments);
    };
}();
var rollbackTransaction = function() {
    var _ref = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                null
            ];
        });
    });
    return function rollbackTransaction() {
        return _ref.apply(this, arguments);
    };
}();
var commitTransaction = function() {
    var _ref = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            return [
                2,
                null
            ];
        });
    });
    return function commitTransaction() {
        return _ref.apply(this, arguments);
    };
}();
export function createDatabaseAdapter(args) {
    // Need to implement DB Webpack config extensions here
    if (args.webpack) {
        var existingWebpackConfig = args.payload.config.admin.webpack ? args.payload.config.admin.webpack : function(webpackConfig) {
            return webpackConfig;
        };
        args.payload.config.admin.webpack = function(webpackConfig) {
            return args.webpack(existingWebpackConfig(webpackConfig));
        };
    }
    return _object_spread({
        transaction: transaction,
        migrate: migrate,
        createMigration: createMigration,
        migrateStatus: migrateStatus,
        migrateDown: migrateDown,
        migrateRefresh: migrateRefresh,
        migrateReset: migrateReset,
        migrateFresh: /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    null
                ];
            });
        }),
        // Default 'null' transaction functions
        beginTransaction: beginTransaction,
        commitTransaction: commitTransaction,
        rollbackTransaction: rollbackTransaction
    }, args);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9jcmVhdGVBZGFwdGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgeyBNYXJrT3B0aW9uYWwgfSBmcm9tICd0cy1lc3NlbnRpYWxzJztcbmltcG9ydCB7IHRyYW5zYWN0aW9uIH0gZnJvbSAnLi90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBtaWdyYXRlIH0gZnJvbSAnLi9taWdyYXRpb25zL21pZ3JhdGUnO1xuaW1wb3J0IHsgbWlncmF0ZVN0YXR1cyB9IGZyb20gJy4vbWlncmF0aW9ucy9taWdyYXRlU3RhdHVzJztcbmltcG9ydCB7IG1pZ3JhdGVEb3duIH0gZnJvbSAnLi9taWdyYXRpb25zL21pZ3JhdGVEb3duJztcbmltcG9ydCB7IG1pZ3JhdGVSZWZyZXNoIH0gZnJvbSAnLi9taWdyYXRpb25zL21pZ3JhdGVSZWZyZXNoJztcbmltcG9ydCB7IG1pZ3JhdGVSZXNldCB9IGZyb20gJy4vbWlncmF0aW9ucy9taWdyYXRlUmVzZXQnO1xuaW1wb3J0IHsgQmVnaW5UcmFuc2FjdGlvbiwgQ29tbWl0VHJhbnNhY3Rpb24sIERhdGFiYXNlQWRhcHRlciwgUm9sbGJhY2tUcmFuc2FjdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlTWlncmF0aW9uIH0gZnJvbSAnLi9taWdyYXRpb25zL2NyZWF0ZU1pZ3JhdGlvbic7XG5cbmNvbnN0IGJlZ2luVHJhbnNhY3Rpb246IEJlZ2luVHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiBudWxsO1xuY29uc3Qgcm9sbGJhY2tUcmFuc2FjdGlvbjogUm9sbGJhY2tUcmFuc2FjdGlvbiA9IGFzeW5jICgpID0+IG51bGw7XG5jb25zdCBjb21taXRUcmFuc2FjdGlvbjogQ29tbWl0VHJhbnNhY3Rpb24gPSBhc3luYyAoKSA9PiBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0YWJhc2VBZGFwdGVyPFQgZXh0ZW5kcyBEYXRhYmFzZUFkYXB0ZXI+KGFyZ3M6IE1hcmtPcHRpb25hbDxULFxuICB8ICd0cmFuc2FjdGlvbidcbiAgfCAnbWlncmF0ZSdcbiAgfCAnY3JlYXRlTWlncmF0aW9uJ1xuICB8ICdtaWdyYXRlU3RhdHVzJ1xuICB8ICdtaWdyYXRlRG93bidcbiAgfCAnbWlncmF0ZVJlZnJlc2gnXG4gIHwgJ21pZ3JhdGVSZXNldCdcbiAgfCAnbWlncmF0ZUZyZXNoJ1xuICB8ICdtaWdyYXRpb25EaXInXG4+KTogVCB7XG4gIC8vIE5lZWQgdG8gaW1wbGVtZW50IERCIFdlYnBhY2sgY29uZmlnIGV4dGVuc2lvbnMgaGVyZVxuICBpZiAoYXJncy53ZWJwYWNrKSB7XG4gICAgY29uc3QgZXhpc3RpbmdXZWJwYWNrQ29uZmlnID0gYXJncy5wYXlsb2FkLmNvbmZpZy5hZG1pbi53ZWJwYWNrID8gYXJncy5wYXlsb2FkLmNvbmZpZy5hZG1pbi53ZWJwYWNrIDogKHdlYnBhY2tDb25maWcpID0+IHdlYnBhY2tDb25maWc7XG4gICAgYXJncy5wYXlsb2FkLmNvbmZpZy5hZG1pbi53ZWJwYWNrID0gKHdlYnBhY2tDb25maWc6IENvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgIHJldHVybiBhcmdzLndlYnBhY2soXG4gICAgICAgIGV4aXN0aW5nV2VicGFja0NvbmZpZyh3ZWJwYWNrQ29uZmlnKSxcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHJhbnNhY3Rpb24sXG4gICAgbWlncmF0ZSxcbiAgICBjcmVhdGVNaWdyYXRpb24sXG4gICAgbWlncmF0ZVN0YXR1cyxcbiAgICBtaWdyYXRlRG93bixcbiAgICBtaWdyYXRlUmVmcmVzaCxcbiAgICBtaWdyYXRlUmVzZXQsXG4gICAgbWlncmF0ZUZyZXNoOiBhc3luYyAoKSA9PiBudWxsLFxuXG4gICAgLy8gRGVmYXVsdCAnbnVsbCcgdHJhbnNhY3Rpb24gZnVuY3Rpb25zXG4gICAgYmVnaW5UcmFuc2FjdGlvbixcbiAgICBjb21taXRUcmFuc2FjdGlvbixcbiAgICByb2xsYmFja1RyYW5zYWN0aW9uLFxuXG4gICAgLi4uYXJncyxcbiAgfSBhcyBUO1xufVxuIl0sIm5hbWVzIjpbInRyYW5zYWN0aW9uIiwibWlncmF0ZSIsIm1pZ3JhdGVTdGF0dXMiLCJtaWdyYXRlRG93biIsIm1pZ3JhdGVSZWZyZXNoIiwibWlncmF0ZVJlc2V0IiwiY3JlYXRlTWlncmF0aW9uIiwiYmVnaW5UcmFuc2FjdGlvbiIsInJvbGxiYWNrVHJhbnNhY3Rpb24iLCJjb21taXRUcmFuc2FjdGlvbiIsImNyZWF0ZURhdGFiYXNlQWRhcHRlciIsImFyZ3MiLCJ3ZWJwYWNrIiwiZXhpc3RpbmdXZWJwYWNrQ29uZmlnIiwicGF5bG9hZCIsImNvbmZpZyIsImFkbWluIiwid2VicGFja0NvbmZpZyIsIm1pZ3JhdGVGcmVzaCJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdwQyxTQUFTQSxXQUFXLFFBQVEsZ0JBQWdCO0FBQzVDLFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFDL0MsU0FBU0MsYUFBYSxRQUFRLDZCQUE2QjtBQUMzRCxTQUFTQyxXQUFXLFFBQVEsMkJBQTJCO0FBQ3ZELFNBQVNDLGNBQWMsUUFBUSw4QkFBOEI7QUFDN0QsU0FBU0MsWUFBWSxRQUFRLDRCQUE0QjtBQUV6RCxTQUFTQyxlQUFlLFFBQVEsK0JBQStCO0FBRS9ELElBQU1DO2VBQXFDLG9CQUFBOztZQUFZOztnQkFBQTs7OztvQkFBakRBOzs7O0FBQ04sSUFBTUM7ZUFBMkMsb0JBQUE7O1lBQVk7O2dCQUFBOzs7O29CQUF2REE7Ozs7QUFDTixJQUFNQztlQUF1QyxvQkFBQTs7WUFBWTs7Z0JBQUE7Ozs7b0JBQW5EQTs7OztBQUVOLE9BQU8sU0FBU0Msc0JBQWlEQyxJQVVoRTtJQUNDLHNEQUFzRDtJQUN0RCxJQUFJQSxLQUFLQyxPQUFPLEVBQUU7UUFDaEIsSUFBTUMsd0JBQXdCRixLQUFLRyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDSixPQUFPLEdBQUdELEtBQUtHLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUNKLE9BQU8sR0FBRyxTQUFDSzttQkFBa0JBOztRQUN6SE4sS0FBS0csT0FBTyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0osT0FBTyxHQUFHLFNBQUNLO1lBQ25DLE9BQU9OLEtBQUtDLE9BQU8sQ0FDakJDLHNCQUFzQkk7UUFFMUI7SUFDRjtJQUVBLE9BQU87UUFDTGpCLGFBQUFBO1FBQ0FDLFNBQUFBO1FBQ0FLLGlCQUFBQTtRQUNBSixlQUFBQTtRQUNBQyxhQUFBQTtRQUNBQyxnQkFBQUE7UUFDQUMsY0FBQUE7UUFDQWEsNEJBQWMsb0JBQUE7O2dCQUFZOztvQkFBQTs7OztRQUUxQix1Q0FBdUM7UUFDdkNYLGtCQUFBQTtRQUNBRSxtQkFBQUE7UUFDQUQscUJBQUFBO09BRUdHO0FBRVAifQ==