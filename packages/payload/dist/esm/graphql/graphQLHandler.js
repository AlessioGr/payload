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
// @ts-ignore // TODO: Broke with pnpm/workspaces/esm. Fix this
import { createHandler } from "graphql-http/lib/use/express";
import errorHandler from "./errorHandler";
var graphQLHandler = function(req, res) {
    var payload = req.payload;
    var afterErrorHook = typeof payload.config.hooks.afterError === "function" ? payload.config.hooks.afterError : null;
    return createHandler({
        schema: payload.schema,
        onOperation: function() {
            var _ref = _async_to_generator(function(request, args, result) {
                var response, _tmp, errors;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            if (!(typeof payload.extensions === "function")) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                payload.extensions({
                                    req: request,
                                    args: args,
                                    result: result
                                })
                            ];
                        case 1:
                            _tmp = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 2:
                            _tmp = result;
                            _state.label = 3;
                        case 3:
                            response = _tmp;
                            if (!response.errors) return [
                                3,
                                5
                            ];
                            return [
                                4,
                                Promise.all(result.errors.map(function(error) {
                                    return errorHandler(payload, error, payload.config.debug, afterErrorHook);
                                }))
                            ];
                        case 4:
                            errors = _state.sent();
                            // errors type should be FormattedGraphQLError[] but onOperation has a return type of ExecutionResult instead of FormattedExecutionResult
                            return [
                                2,
                                _object_spread_props(_object_spread({}, response), {
                                    errors: errors
                                })
                            ];
                        case 5:
                            return [
                                2,
                                response
                            ];
                    }
                });
            });
            return function(request, args, result) {
                return _ref.apply(this, arguments);
            };
        }(),
        context: {
            req: req,
            res: res
        },
        validationRules: function(request, args, defaultRules) {
            return defaultRules.concat(payload.validationRules(args));
        }
    });
};
export default graphQLHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL2dyYXBoUUxIYW5kbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG4vLyBAdHMtaWdub3JlIC8vIFRPRE86IEJyb2tlIHdpdGggcG5wbS93b3Jrc3BhY2VzL2VzbS4gRml4IHRoaXNcbmltcG9ydCB7IGNyZWF0ZUhhbmRsZXIgfSBmcm9tICdncmFwaHFsLWh0dHAvbGliL3VzZS9leHByZXNzJztcbmltcG9ydCB7IEdyYXBoUUxFcnJvciB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCBlcnJvckhhbmRsZXIgZnJvbSAnLi9lcnJvckhhbmRsZXInO1xuXG5jb25zdCBncmFwaFFMSGFuZGxlciA9IChyZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XG4gIGNvbnN0IHsgcGF5bG9hZCB9ID0gcmVxO1xuXG4gIGNvbnN0IGFmdGVyRXJyb3JIb29rID0gdHlwZW9mIHBheWxvYWQuY29uZmlnLmhvb2tzLmFmdGVyRXJyb3IgPT09ICdmdW5jdGlvbicgPyBwYXlsb2FkLmNvbmZpZy5ob29rcy5hZnRlckVycm9yIDogbnVsbDtcblxuICByZXR1cm4gY3JlYXRlSGFuZGxlcihcbiAgICB7XG4gICAgICBzY2hlbWE6IHBheWxvYWQuc2NoZW1hLFxuICAgICAgb25PcGVyYXRpb246IGFzeW5jIChyZXF1ZXN0LCBhcmdzLCByZXN1bHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0eXBlb2YgcGF5bG9hZC5leHRlbnNpb25zID09PSAnZnVuY3Rpb24nID8gYXdhaXQgcGF5bG9hZC5leHRlbnNpb25zKHtcbiAgICAgICAgICByZXE6IHJlcXVlc3QsXG4gICAgICAgICAgYXJncyxcbiAgICAgICAgICByZXN1bHQsXG4gICAgICAgIH0pIDogcmVzdWx0O1xuICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzKSB7XG4gICAgICAgICAgY29uc3QgZXJyb3JzID0gYXdhaXQgUHJvbWlzZS5hbGwocmVzdWx0LmVycm9ycy5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JIYW5kbGVyKHBheWxvYWQsIGVycm9yLCBwYXlsb2FkLmNvbmZpZy5kZWJ1ZywgYWZ0ZXJFcnJvckhvb2spO1xuICAgICAgICAgIH0pKSBhcyBHcmFwaFFMRXJyb3JbXTtcbiAgICAgICAgICAvLyBlcnJvcnMgdHlwZSBzaG91bGQgYmUgRm9ybWF0dGVkR3JhcGhRTEVycm9yW10gYnV0IG9uT3BlcmF0aW9uIGhhcyBhIHJldHVybiB0eXBlIG9mIEV4ZWN1dGlvblJlc3VsdCBpbnN0ZWFkIG9mIEZvcm1hdHRlZEV4ZWN1dGlvblJlc3VsdFxuICAgICAgICAgIHJldHVybiB7IC4uLnJlc3BvbnNlLCBlcnJvcnMgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9LFxuICAgICAgY29udGV4dDogeyByZXEsIHJlcyB9LFxuICAgICAgdmFsaWRhdGlvblJ1bGVzOiAocmVxdWVzdCwgYXJncywgZGVmYXVsdFJ1bGVzKSA9PiBkZWZhdWx0UnVsZXMuY29uY2F0KHBheWxvYWQudmFsaWRhdGlvblJ1bGVzKGFyZ3MpKSxcbiAgICB9LFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhRTEhhbmRsZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlSGFuZGxlciIsImVycm9ySGFuZGxlciIsImdyYXBoUUxIYW5kbGVyIiwicmVxIiwicmVzIiwicGF5bG9hZCIsImFmdGVyRXJyb3JIb29rIiwiY29uZmlnIiwiaG9va3MiLCJhZnRlckVycm9yIiwic2NoZW1hIiwib25PcGVyYXRpb24iLCJyZXF1ZXN0IiwiYXJncyIsInJlc3VsdCIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZXh0ZW5zaW9ucyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJlcnJvciIsImRlYnVnIiwiY29udGV4dCIsInZhbGlkYXRpb25SdWxlcyIsImRlZmF1bHRSdWxlcyIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrREFBK0Q7QUFDL0QsU0FBU0EsYUFBYSxRQUFRLCtCQUErQjtBQUc3RCxPQUFPQyxrQkFBa0IsaUJBQWlCO0FBRTFDLElBQU1DLGlCQUFpQixTQUFDQyxLQUFxQkM7SUFDM0MsSUFBTSxBQUFFQyxVQUFZRixJQUFaRTtJQUVSLElBQU1DLGlCQUFpQixPQUFPRCxRQUFRRSxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsVUFBVSxLQUFLLGFBQWFKLFFBQVFFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEdBQUc7SUFFakgsT0FBT1QsY0FDTDtRQUNFVSxRQUFRTCxRQUFRSyxNQUFNO1FBQ3RCQyxXQUFXO3VCQUFFLG9CQUFBLFNBQU9DLFNBQVNDLE1BQU1DO29CQUMzQkMsZ0JBTUVDOzs7O2lDQU5TLENBQUEsT0FBT1gsUUFBUVksVUFBVSxLQUFLLFVBQVMsR0FBdkM7Ozs7NEJBQTJDOztnQ0FBTVosUUFBUVksVUFBVSxDQUFDO29DQUNuRmQsS0FBS1M7b0NBQ0xDLE1BQUFBO29DQUNBQyxRQUFBQTtnQ0FDRjs7O21DQUo0RDs7Ozs7O21DQUl2REE7Ozs0QkFKQ0M7aUNBS0ZBLFNBQVNDLE1BQU0sRUFBZkQ7Ozs7NEJBQ2E7O2dDQUFNRyxRQUFRQyxHQUFHLENBQUNMLE9BQU9FLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDO29DQUNsRCxPQUFPcEIsYUFBYUksU0FBU2dCLE9BQU9oQixRQUFRRSxNQUFNLENBQUNlLEtBQUssRUFBRWhCO2dDQUM1RDs7OzRCQUZNVSxTQUFTOzRCQUdmLHlJQUF5STs0QkFDekk7O2dDQUFPLHdDQUFLRDtvQ0FBVUMsUUFBQUE7Ozs7NEJBRXhCOztnQ0FBT0Q7Ozs7WUFDVDs0QkFkb0JILFNBQVNDLE1BQU1DOzs7O1FBZW5DUyxTQUFTO1lBQUVwQixLQUFBQTtZQUFLQyxLQUFBQTtRQUFJO1FBQ3BCb0IsaUJBQWlCLFNBQUNaLFNBQVNDLE1BQU1ZO21CQUFpQkEsYUFBYUMsTUFBTSxDQUFDckIsUUFBUW1CLGVBQWUsQ0FBQ1g7O0lBQ2hHO0FBRUo7QUFFQSxlQUFlWCxlQUFlIn0=