/* eslint-disable no-nested-ternary */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "generateGraphQLSchema", {
    enumerable: true,
    get: function() {
        return generateGraphQLSchema;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
var _graphql = require("graphql");
var _logger = /*#__PURE__*/ _interop_require_default(require("../utilities/logger"));
var _load = /*#__PURE__*/ _interop_require_default(require("../config/load"));
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
function generateGraphQLSchema() {
    return _generateGraphQLSchema.apply(this, arguments);
}
function _generateGraphQLSchema() {
    _generateGraphQLSchema = _async_to_generator(function() {
        var logger, config;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    logger = (0, _logger.default)();
                    return [
                        4,
                        (0, _load.default)()
                    ];
                case 1:
                    config = _state.sent();
                    config.db = null;
                    return [
                        4,
                        _.default.init({
                            secret: "--unused--",
                            local: true
                        })
                    ];
                case 2:
                    _state.sent();
                    logger.info("Compiling GraphQL schema...");
                    _fs.default.writeFileSync(config.graphQL.schemaOutputFile, (0, _graphql.printSchema)(_.default.schema));
                    logger.info("GraphQL written to ".concat(config.graphQL.schemaOutputFile));
                    return [
                        2
                    ];
            }
        });
    });
    return _generateGraphQLSchema.apply(this, arguments);
}
// when generateGraphQLSchema.js is launched directly
if (module.id === require.main.id) {
    generateGraphQLSchema();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vZ2VuZXJhdGVHcmFwaFFMU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLW5lc3RlZC10ZXJuYXJ5ICovXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgcHJpbnRTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbGl0aWVzL2xvZ2dlcic7XG5pbXBvcnQgbG9hZENvbmZpZyBmcm9tICcuLi9jb25maWcvbG9hZCc7XG5pbXBvcnQgcGF5bG9hZCBmcm9tICcuLic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUdyYXBoUUxTY2hlbWEoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGxvZ2dlciA9IExvZ2dlcigpO1xuICBjb25zdCBjb25maWcgPSBhd2FpdCBsb2FkQ29uZmlnKCk7XG5cbiAgY29uZmlnLmRiID0gbnVsbDtcblxuICBhd2FpdCBwYXlsb2FkLmluaXQoe1xuICAgIHNlY3JldDogJy0tdW51c2VkLS0nLFxuICAgIGxvY2FsOiB0cnVlLFxuICB9KTtcblxuICBsb2dnZXIuaW5mbygnQ29tcGlsaW5nIEdyYXBoUUwgc2NoZW1hLi4uJyk7XG4gIGZzLndyaXRlRmlsZVN5bmMoY29uZmlnLmdyYXBoUUwuc2NoZW1hT3V0cHV0RmlsZSwgcHJpbnRTY2hlbWEocGF5bG9hZC5zY2hlbWEpKTtcbiAgbG9nZ2VyLmluZm8oYEdyYXBoUUwgd3JpdHRlbiB0byAke2NvbmZpZy5ncmFwaFFMLnNjaGVtYU91dHB1dEZpbGV9YCk7XG59XG5cbi8vIHdoZW4gZ2VuZXJhdGVHcmFwaFFMU2NoZW1hLmpzIGlzIGxhdW5jaGVkIGRpcmVjdGx5XG5pZiAobW9kdWxlLmlkID09PSByZXF1aXJlLm1haW4uaWQpIHtcbiAgZ2VuZXJhdGVHcmFwaFFMU2NoZW1hKCk7XG59XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVHcmFwaFFMU2NoZW1hIiwibG9nZ2VyIiwiY29uZmlnIiwiTG9nZ2VyIiwibG9hZENvbmZpZyIsImRiIiwicGF5bG9hZCIsImluaXQiLCJzZWNyZXQiLCJsb2NhbCIsImluZm8iLCJmcyIsIndyaXRlRmlsZVN5bmMiLCJncmFwaFFMIiwic2NoZW1hT3V0cHV0RmlsZSIsInByaW50U2NoZW1hIiwic2NoZW1hIiwibW9kdWxlIiwiaWQiLCJyZXF1aXJlIiwibWFpbiJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQU9kQTs7O2VBQUFBOzs7eURBTlA7dUJBQ2E7NkRBQ1Q7MkRBQ0k7dURBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFRUE7V0FBQUE7O1NBQUFBO0lBQUFBLHlCQUFmLG9CQUFBO1lBQ0NDLFFBQ0FDOzs7O29CQURBRCxTQUFTRSxJQUFBQSxlQUFNO29CQUNOOzt3QkFBTUMsSUFBQUEsYUFBVTs7O29CQUF6QkYsU0FBUztvQkFFZkEsT0FBT0csRUFBRSxHQUFHO29CQUVaOzt3QkFBTUMsU0FBTyxDQUFDQyxJQUFJLENBQUM7NEJBQ2pCQyxRQUFROzRCQUNSQyxPQUFPO3dCQUNUOzs7b0JBSEE7b0JBS0FSLE9BQU9TLElBQUksQ0FBQztvQkFDWkMsV0FBRSxDQUFDQyxhQUFhLENBQUNWLE9BQU9XLE9BQU8sQ0FBQ0MsZ0JBQWdCLEVBQUVDLElBQUFBLG9CQUFXLEVBQUNULFNBQU8sQ0FBQ1UsTUFBTTtvQkFDNUVmLE9BQU9TLElBQUksQ0FBQyxBQUFDLHNCQUFxRCxPQUFoQ1IsT0FBT1csT0FBTyxDQUFDQyxnQkFBZ0I7Ozs7OztJQUNuRTtXQWRzQmQ7O0FBZ0J0QixxREFBcUQ7QUFDckQsSUFBSWlCLE9BQU9DLEVBQUUsS0FBS0MsUUFBUUMsSUFBSSxDQUFDRixFQUFFLEVBQUU7SUFDakNsQjtBQUNGIn0=