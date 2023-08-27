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
import formatErrorResponse from "../responses/formatError";
import APIError from "../../errors/APIError";
// NextFunction must be passed for Express to use this middleware as error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var errorHandler = function(config, logger) {
    return function() {
        var _ref = _async_to_generator(function(err, req, res, next) {
            var response, status, ref, ref1;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        response = formatErrorResponse(err);
                        status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
                        logger.error(err.stack);
                        // Internal server errors can contain anything, including potentially sensitive data.
                        // Therefore, error details will be hidden from the response unless `config.debug` is `true`
                        if (!config.debug && status === httpStatus.INTERNAL_SERVER_ERROR) {
                            response = formatErrorResponse(new APIError("Something went wrong."));
                        }
                        if (config.debug && config.debug === true) {
                            response.stack = err.stack;
                        }
                        if (!(req.collection && typeof req.collection.config.hooks.afterError === "function")) return [
                            3,
                            2
                        ];
                        return [
                            4,
                            req.collection.config.hooks.afterError(err, response, req.context)
                        ];
                    case 1:
                        ref = _state.sent() || {
                            response: response,
                            status: status
                        }, response = ref.response, status = ref.status, ref;
                        _state.label = 2;
                    case 2:
                        if (!(typeof config.hooks.afterError === "function")) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            config.hooks.afterError(err, response, req.context)
                        ];
                    case 3:
                        ref1 = _state.sent() || {
                            response: response,
                            status: status
                        }, response = ref1.response, status = ref1.status, ref1;
                        _state.label = 4;
                    case 4:
                        res.status(status).send(response);
                        return [
                            2
                        ];
                }
            });
        });
        return function(err, req, res, next) {
            return _ref.apply(this, arguments);
        };
    }();
};
export default errorHandler;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvZXJyb3JIYW5kbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ3Bpbm8nO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBmb3JtYXRFcnJvclJlc3BvbnNlLCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tICcuLi9yZXNwb25zZXMvZm9ybWF0RXJyb3InO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi4vLi4vZXJyb3JzL0FQSUVycm9yJztcblxuZXhwb3J0IHR5cGUgRXJyb3JIYW5kbGVyID0gKGVycjogQVBJRXJyb3IsIHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4gUHJvbWlzZTxSZXNwb25zZTxFcnJvclJlc3BvbnNlPiB8IHZvaWQ+XG5cbi8vIE5leHRGdW5jdGlvbiBtdXN0IGJlIHBhc3NlZCBmb3IgRXhwcmVzcyB0byB1c2UgdGhpcyBtaWRkbGV3YXJlIGFzIGVycm9yIGhhbmRsZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IGVycm9ySGFuZGxlciA9IChjb25maWc6IFNhbml0aXplZENvbmZpZywgbG9nZ2VyOiBMb2dnZXIpID0+IGFzeW5jIChlcnI6IEFQSUVycm9yLCByZXE6IFBheWxvYWRSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPFJlc3BvbnNlPEVycm9yUmVzcG9uc2U+IHwgdm9pZD4gPT4ge1xuICBsZXQgcmVzcG9uc2UgPSBmb3JtYXRFcnJvclJlc3BvbnNlKGVycik7XG4gIGxldCBzdGF0dXMgPSBlcnIuc3RhdHVzIHx8IGh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SO1xuXG4gIGxvZ2dlci5lcnJvcihlcnIuc3RhY2spO1xuXG4gIC8vIEludGVybmFsIHNlcnZlciBlcnJvcnMgY2FuIGNvbnRhaW4gYW55dGhpbmcsIGluY2x1ZGluZyBwb3RlbnRpYWxseSBzZW5zaXRpdmUgZGF0YS5cbiAgLy8gVGhlcmVmb3JlLCBlcnJvciBkZXRhaWxzIHdpbGwgYmUgaGlkZGVuIGZyb20gdGhlIHJlc3BvbnNlIHVubGVzcyBgY29uZmlnLmRlYnVnYCBpcyBgdHJ1ZWBcbiAgaWYgKCFjb25maWcuZGVidWcgJiYgc3RhdHVzID09PSBodHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUikge1xuICAgIHJlc3BvbnNlID0gZm9ybWF0RXJyb3JSZXNwb25zZShuZXcgQVBJRXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nLicpKTtcbiAgfVxuXG4gIGlmIChjb25maWcuZGVidWcgJiYgY29uZmlnLmRlYnVnID09PSB0cnVlKSB7XG4gICAgcmVzcG9uc2Uuc3RhY2sgPSBlcnIuc3RhY2s7XG4gIH1cblxuICBpZiAocmVxLmNvbGxlY3Rpb24gJiYgdHlwZW9mIHJlcS5jb2xsZWN0aW9uLmNvbmZpZy5ob29rcy5hZnRlckVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgKHsgcmVzcG9uc2UsIHN0YXR1cyB9ID0gYXdhaXQgcmVxLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmFmdGVyRXJyb3IoZXJyLCByZXNwb25zZSwgcmVxLmNvbnRleHQpIHx8IHsgcmVzcG9uc2UsIHN0YXR1cyB9KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY29uZmlnLmhvb2tzLmFmdGVyRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAoeyByZXNwb25zZSwgc3RhdHVzIH0gPSBhd2FpdCBjb25maWcuaG9va3MuYWZ0ZXJFcnJvcihlcnIsIHJlc3BvbnNlLCByZXEuY29udGV4dCkgfHwgeyByZXNwb25zZSwgc3RhdHVzIH0pO1xuICB9XG5cbiAgcmVzLnN0YXR1cyhzdGF0dXMpLnNlbmQocmVzcG9uc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXJyb3JIYW5kbGVyO1xuIl0sIm5hbWVzIjpbImh0dHBTdGF0dXMiLCJmb3JtYXRFcnJvclJlc3BvbnNlIiwiQVBJRXJyb3IiLCJlcnJvckhhbmRsZXIiLCJjb25maWciLCJsb2dnZXIiLCJlcnIiLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiLCJlcnJvciIsInN0YWNrIiwiZGVidWciLCJjb2xsZWN0aW9uIiwiaG9va3MiLCJhZnRlckVycm9yIiwiY29udGV4dCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxnQkFBZ0IsY0FBYztBQUlyQyxPQUFPQyx5QkFBNEMsMkJBQTJCO0FBRTlFLE9BQU9DLGNBQWMsd0JBQXdCO0FBSTdDLGtGQUFrRjtBQUNsRiw2REFBNkQ7QUFDN0QsSUFBTUMsZUFBZSxTQUFDQyxRQUF5QkM7O21CQUFtQixvQkFBQSxTQUFPQyxLQUFlQyxLQUFxQkMsS0FBZUM7Z0JBQ3RIQyxVQUNBQzs7Ozt3QkFEQUQsV0FBV1Qsb0JBQW9CSzt3QkFDL0JLLFNBQVNMLElBQUlLLE1BQU0sSUFBSVgsV0FBV1kscUJBQXFCO3dCQUUzRFAsT0FBT1EsS0FBSyxDQUFDUCxJQUFJUSxLQUFLO3dCQUV0QixxRkFBcUY7d0JBQ3JGLDRGQUE0Rjt3QkFDNUYsSUFBSSxDQUFDVixPQUFPVyxLQUFLLElBQUlKLFdBQVdYLFdBQVdZLHFCQUFxQixFQUFFOzRCQUNoRUYsV0FBV1Qsb0JBQW9CLElBQUlDLFNBQVM7d0JBQzlDO3dCQUVBLElBQUlFLE9BQU9XLEtBQUssSUFBSVgsT0FBT1csS0FBSyxLQUFLLE1BQU07NEJBQ3pDTCxTQUFTSSxLQUFLLEdBQUdSLElBQUlRLEtBQUs7d0JBQzVCOzZCQUVJUCxDQUFBQSxJQUFJUyxVQUFVLElBQUksT0FBT1QsSUFBSVMsVUFBVSxDQUFDWixNQUFNLENBQUNhLEtBQUssQ0FBQ0MsVUFBVSxLQUFLLFVBQVMsR0FBN0VYOzs7O3dCQUNzQjs7NEJBQU1BLElBQUlTLFVBQVUsQ0FBQ1osTUFBTSxDQUFDYSxLQUFLLENBQUNDLFVBQVUsQ0FBQ1osS0FBS0ksVUFBVUgsSUFBSVksT0FBTzs7OzhCQUF2RSxpQkFBNEU7NEJBQUVULFVBQUFBOzRCQUFVQyxRQUFBQTt3QkFBTyxHQUFwSEQsZUFBQUEsVUFBVUMsYUFBQUE7Ozs2QkFHWCxDQUFBLE9BQU9QLE9BQU9hLEtBQUssQ0FBQ0MsVUFBVSxLQUFLLFVBQVMsR0FBNUM7Ozs7d0JBQ3NCOzs0QkFBTWQsT0FBT2EsS0FBSyxDQUFDQyxVQUFVLENBQUNaLEtBQUtJLFVBQVVILElBQUlZLE9BQU87OzsrQkFBeEQsaUJBQTZEOzRCQUFFVCxVQUFBQTs0QkFBVUMsUUFBQUE7d0JBQU8sR0FBckdELGdCQUFBQSxVQUFVQyxjQUFBQTs7O3dCQUdmSCxJQUFJRyxNQUFNLENBQUNBLFFBQVFTLElBQUksQ0FBQ1Y7Ozs7OztRQUMxQjt3QkF6QnlFSixLQUFlQyxLQUFxQkMsS0FBZUM7Ozs7O0FBMkI1SCxlQUFlTixhQUFhIn0=