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
import httpStatus from "http-status";
var errorHandler = function() {
    var _ref = _async_to_generator(function(payload, err, debug, afterErrorHook) {
        var _err_originalError, _err, status, errorMessage, response;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    status = err.originalError.status || httpStatus.INTERNAL_SERVER_ERROR;
                    errorMessage = err.message;
                    payload.logger.error(err.stack);
                    // Internal server errors can contain anything, including potentially sensitive data.
                    // Therefore, error details will be hidden from the response unless `config.debug` is `true`
                    if (!debug && status === httpStatus.INTERNAL_SERVER_ERROR) {
                        errorMessage = "Something went wrong.";
                    }
                    response = {
                        message: errorMessage,
                        locations: err.locations,
                        path: err.path,
                        extensions: {
                            statusCode: status,
                            name: ((_err = err) === null || _err === void 0 ? void 0 : (_err_originalError = _err.originalError) === null || _err_originalError === void 0 ? void 0 : _err_originalError.name) || undefined,
                            data: err && err.originalError && err.originalError.data || undefined,
                            stack: debug ? err.stack : undefined
                        }
                    };
                    if (!afterErrorHook) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        afterErrorHook(err, response, null)
                    ];
                case 1:
                    response = (_state.sent() || {
                        response: response
                    }).response;
                    _state.label = 2;
                case 2:
                    return [
                        2,
                        response
                    ];
            }
        });
    });
    return function errorHandler(payload, err, debug, afterErrorHook) {
        return _ref.apply(this, arguments);
    };
}();
export default errorHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL2Vycm9ySGFuZGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMRm9ybWF0dGVkRXJyb3IgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IEFmdGVyRXJyb3JIb29rIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcblxuY29uc3QgZXJyb3JIYW5kbGVyID0gYXN5bmMgKFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBlcnI6IGFueSxcbiAgZGVidWc6IGJvb2xlYW4sXG4gIGFmdGVyRXJyb3JIb29rOiBBZnRlckVycm9ySG9vayxcbik6IFByb21pc2U8R3JhcGhRTEZvcm1hdHRlZEVycm9yPiA9PiB7XG4gIGNvbnN0IHN0YXR1cyA9IGVyci5vcmlnaW5hbEVycm9yLnN0YXR1cyB8fCBodHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUjtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IGVyci5tZXNzYWdlO1xuXG4gIHBheWxvYWQubG9nZ2VyLmVycm9yKGVyci5zdGFjayk7XG5cbiAgLy8gSW50ZXJuYWwgc2VydmVyIGVycm9ycyBjYW4gY29udGFpbiBhbnl0aGluZywgaW5jbHVkaW5nIHBvdGVudGlhbGx5IHNlbnNpdGl2ZSBkYXRhLlxuICAvLyBUaGVyZWZvcmUsIGVycm9yIGRldGFpbHMgd2lsbCBiZSBoaWRkZW4gZnJvbSB0aGUgcmVzcG9uc2UgdW5sZXNzIGBjb25maWcuZGVidWdgIGlzIGB0cnVlYFxuICBpZiAoIWRlYnVnICYmIHN0YXR1cyA9PT0gaHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IpIHtcbiAgICBlcnJvck1lc3NhZ2UgPSAnU29tZXRoaW5nIHdlbnQgd3JvbmcuJztcbiAgfVxuXG4gIGxldCByZXNwb25zZTogR3JhcGhRTEZvcm1hdHRlZEVycm9yID0ge1xuICAgIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSxcbiAgICBsb2NhdGlvbnM6IGVyci5sb2NhdGlvbnMsXG4gICAgcGF0aDogZXJyLnBhdGgsXG4gICAgZXh0ZW5zaW9uczoge1xuICAgICAgc3RhdHVzQ29kZTogc3RhdHVzLFxuICAgICAgbmFtZTogZXJyPy5vcmlnaW5hbEVycm9yPy5uYW1lIHx8IHVuZGVmaW5lZCxcbiAgICAgIGRhdGE6IChlcnIgJiYgZXJyLm9yaWdpbmFsRXJyb3IgJiYgZXJyLm9yaWdpbmFsRXJyb3IuZGF0YSkgfHwgdW5kZWZpbmVkLFxuICAgICAgc3RhY2s6IGRlYnVnID8gZXJyLnN0YWNrIDogdW5kZWZpbmVkLFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKGFmdGVyRXJyb3JIb29rKSB7XG4gICAgKHsgcmVzcG9uc2UgfSA9IGF3YWl0IGFmdGVyRXJyb3JIb29rKGVyciwgcmVzcG9uc2UsIG51bGwpIHx8IHsgcmVzcG9uc2UgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlcnJvckhhbmRsZXI7XG4iXSwibmFtZXMiOlsiaHR0cFN0YXR1cyIsImVycm9ySGFuZGxlciIsInBheWxvYWQiLCJlcnIiLCJkZWJ1ZyIsImFmdGVyRXJyb3JIb29rIiwic3RhdHVzIiwiZXJyb3JNZXNzYWdlIiwicmVzcG9uc2UiLCJvcmlnaW5hbEVycm9yIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIiwibWVzc2FnZSIsImxvZ2dlciIsImVycm9yIiwic3RhY2siLCJsb2NhdGlvbnMiLCJwYXRoIiwiZXh0ZW5zaW9ucyIsInN0YXR1c0NvZGUiLCJuYW1lIiwidW5kZWZpbmVkIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU9BLGdCQUFnQixjQUFjO0FBSXJDLElBQU1DO2VBQWUsb0JBQUEsU0FDbkJDLFNBQ0FDLEtBQ0FDLE9BQ0FDO1lBbUJVRixvQkFBQUEsTUFqQkpHLFFBQ0ZDLGNBVUFDOzs7O29CQVhFRixTQUFTSCxJQUFJTSxhQUFhLENBQUNILE1BQU0sSUFBSU4sV0FBV1UscUJBQXFCO29CQUN2RUgsZUFBZUosSUFBSVEsT0FBTztvQkFFOUJULFFBQVFVLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDVixJQUFJVyxLQUFLO29CQUU5QixxRkFBcUY7b0JBQ3JGLDRGQUE0RjtvQkFDNUYsSUFBSSxDQUFDVixTQUFTRSxXQUFXTixXQUFXVSxxQkFBcUIsRUFBRTt3QkFDekRILGVBQWU7b0JBQ2pCO29CQUVJQyxXQUFrQzt3QkFDcENHLFNBQVNKO3dCQUNUUSxXQUFXWixJQUFJWSxTQUFTO3dCQUN4QkMsTUFBTWIsSUFBSWEsSUFBSTt3QkFDZEMsWUFBWTs0QkFDVkMsWUFBWVo7NEJBQ1phLE1BQU1oQixFQUFBQSxPQUFBQSxpQkFBQUEsNEJBQUFBLHFCQUFBQSxLQUFLTSxhQUFhLGNBQWxCTix5Q0FBQUEsbUJBQW9CZ0IsSUFBSSxLQUFJQzs0QkFDbENDLE1BQU0sQUFBQ2xCLE9BQU9BLElBQUlNLGFBQWEsSUFBSU4sSUFBSU0sYUFBYSxDQUFDWSxJQUFJLElBQUtEOzRCQUM5RE4sT0FBT1YsUUFBUUQsSUFBSVcsS0FBSyxHQUFHTTt3QkFDN0I7b0JBQ0Y7eUJBRUlmLGdCQUFBQTs7OztvQkFDYzs7d0JBQU1BLGVBQWVGLEtBQUtLLFVBQVU7OztvQkFBakRBLFdBQWEsQ0FBQSxpQkFBNkM7d0JBQUVBLFVBQUFBO29CQUFTLENBQUEsRUFBckVBOzs7b0JBR0w7O3dCQUFPQTs7OztJQUNUO29CQWxDTVAsYUFDSkMsU0FDQUMsS0FDQUMsT0FDQUM7Ozs7QUFnQ0YsZUFBZUosYUFBYSJ9