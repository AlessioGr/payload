/* eslint-disable import/no-dynamic-require */ /* eslint-disable global-require */ // eslint-disable-next-line import/no-extraneous-dependencies
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
import path from "path";
import Logger from "../utilities/logger";
import findConfig from "./find";
import validate from "./validate";
import { clientFiles } from "./clientFiles";
import { createRequire } from "module";
var require = createRequire(import.meta.url);
var loadConfig = function() {
    var _ref = _async_to_generator(function(logger) {
        var localLogger, configPath, configPromise, config;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    localLogger = logger !== null && logger !== void 0 ? logger : Logger();
                    configPath = findConfig();
                    clientFiles.forEach(function(ext) {
                        require.extensions[ext] = function() {
                            return null;
                        };
                    });
                    return [
                        4,
                        import(configPath)
                    ];
                case 1:
                    configPromise = _state.sent();
                    return [
                        4,
                        configPromise
                    ];
                case 2:
                    config = _state.sent();
                    if (!config.default) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        config.default
                    ];
                case 3:
                    config = _state.sent();
                    _state.label = 4;
                case 4:
                    if (!(process.env.NODE_ENV !== "production")) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        validate(config, localLogger)
                    ];
                case 5:
                    config = _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        2,
                        _object_spread_props(_object_spread({}, config), {
                            paths: {
                                configDir: path.dirname(configPath),
                                config: configPath,
                                rawConfig: configPath
                            }
                        })
                    ];
            }
        });
    });
    return function loadConfig(logger) {
        return _ref.apply(this, arguments);
    };
}();
export default loadConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvbG9hZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgcGlubyBmcm9tICdwaW5vJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vdXRpbGl0aWVzL2xvZ2dlcic7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBmaW5kQ29uZmlnIGZyb20gJy4vZmluZCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5pbXBvcnQgeyBjbGllbnRGaWxlcyB9IGZyb20gJy4vY2xpZW50RmlsZXMnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ21vZHVsZSc7XG5cbmNvbnN0IHJlcXVpcmUgPSBjcmVhdGVSZXF1aXJlKGltcG9ydC5tZXRhLnVybCk7XG5cbmNvbnN0IGxvYWRDb25maWcgPSBhc3luYyAobG9nZ2VyPzogcGluby5Mb2dnZXIpOiBQcm9taXNlPFNhbml0aXplZENvbmZpZz4gPT4ge1xuICBjb25zdCBsb2NhbExvZ2dlciA9IGxvZ2dlciA/PyBMb2dnZXIoKTtcblxuICBjb25zdCBjb25maWdQYXRoID0gZmluZENvbmZpZygpO1xuXG4gIGNsaWVudEZpbGVzLmZvckVhY2goKGV4dCkgPT4ge1xuICAgIHJlcXVpcmUuZXh0ZW5zaW9uc1tleHRdID0gKCkgPT4gbnVsbDtcbiAgfSk7XG5cbiAgY29uc3QgY29uZmlnUHJvbWlzZSA9IGF3YWl0IGltcG9ydChjb25maWdQYXRoKTtcblxuICBsZXQgY29uZmlnID0gYXdhaXQgY29uZmlnUHJvbWlzZTtcblxuICBpZiAoY29uZmlnLmRlZmF1bHQpIGNvbmZpZyA9IGF3YWl0IGNvbmZpZy5kZWZhdWx0O1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uZmlnID0gYXdhaXQgdmFsaWRhdGUoY29uZmlnLCBsb2NhbExvZ2dlcik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLmNvbmZpZyxcbiAgICBwYXRoczoge1xuICAgICAgY29uZmlnRGlyOiBwYXRoLmRpcm5hbWUoY29uZmlnUGF0aCksXG4gICAgICBjb25maWc6IGNvbmZpZ1BhdGgsXG4gICAgICByYXdDb25maWc6IGNvbmZpZ1BhdGgsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb25maWc7XG4iXSwibmFtZXMiOlsicGF0aCIsIkxvZ2dlciIsImZpbmRDb25maWciLCJ2YWxpZGF0ZSIsImNsaWVudEZpbGVzIiwiY3JlYXRlUmVxdWlyZSIsInJlcXVpcmUiLCJ1cmwiLCJsb2FkQ29uZmlnIiwibG9nZ2VyIiwibG9jYWxMb2dnZXIiLCJjb25maWdQYXRoIiwiY29uZmlnUHJvbWlzZSIsImNvbmZpZyIsImZvckVhY2giLCJleHQiLCJleHRlbnNpb25zIiwiZGVmYXVsdCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInBhdGhzIiwiY29uZmlnRGlyIiwiZGlybmFtZSIsInJhd0NvbmZpZyJdLCJtYXBwaW5ncyI6IkFBQUEsNENBQTRDLEdBQzVDLGlDQUFpQyxHQUNqQyw2REFBNkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM3RCxPQUFPQSxVQUFVLE9BQU87QUFFeEIsT0FBT0MsWUFBWSxzQkFBc0I7QUFFekMsT0FBT0MsZ0JBQWdCLFNBQVM7QUFDaEMsT0FBT0MsY0FBYyxhQUFhO0FBQ2xDLFNBQVNDLFdBQVcsUUFBUSxnQkFBZ0I7QUFDNUMsU0FBU0MsYUFBYSxRQUFRLFNBQVM7QUFFdkMsSUFBTUMsVUFBVUQsY0FBYyxZQUFZRSxHQUFHO0FBRTdDLElBQU1DO2VBQWEsb0JBQUEsU0FBT0M7WUFDbEJDLGFBRUFDLFlBTUFDLGVBRUZDOzs7O29CQVZFSCxjQUFjRCxtQkFBQUEsb0JBQUFBLFNBQVVSO29CQUV4QlUsYUFBYVQ7b0JBRW5CRSxZQUFZVSxPQUFPLENBQUMsU0FBQ0M7d0JBQ25CVCxRQUFRVSxVQUFVLENBQUNELElBQUksR0FBRzttQ0FBTTs7b0JBQ2xDO29CQUVzQjs7d0JBQU0sTUFBTSxDQUFDSjs7O29CQUE3QkMsZ0JBQWdCO29CQUVUOzt3QkFBTUE7OztvQkFBZkMsU0FBUzt5QkFFVEEsT0FBT0ksT0FBTyxFQUFkSjs7OztvQkFBeUI7O3dCQUFNQSxPQUFPSSxPQUFPOzs7b0JBQTdCSixTQUFTOzs7eUJBRXpCSyxDQUFBQSxRQUFRQyxHQUFHLENBQUNDLFFBQVEsS0FBSyxZQUFXLEdBQXBDRjs7OztvQkFDTzs7d0JBQU1mLFNBQVNVLFFBQVFIOzs7b0JBQWhDRyxTQUFTOzs7b0JBR1g7O3dCQUFPLHdDQUNGQTs0QkFDSFEsT0FBTztnQ0FDTEMsV0FBV3RCLEtBQUt1QixPQUFPLENBQUNaO2dDQUN4QkUsUUFBUUY7Z0NBQ1JhLFdBQVdiOzRCQUNiOzs7OztJQUVKO29CQTNCTUgsV0FBb0JDOzs7O0FBNkIxQixlQUFlRCxXQUFXIn0=