"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildAfterOperation", {
    enumerable: true,
    get: function() {
        return buildAfterOperation;
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
var buildAfterOperation = function() {
    var _ref = _async_to_generator(function(operationArgs) {
        var operation, args, result, newResult;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    operation = operationArgs.operation, args = operationArgs.args, result = operationArgs.result;
                    newResult = result;
                    return [
                        4,
                        args.collection.config.hooks.afterOperation.reduce(function() {
                            var _ref = _async_to_generator(function(priorHook, hook) {
                                var hookResult;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                priorHook
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                4,
                                                hook({
                                                    operation: operation,
                                                    args: args,
                                                    result: newResult
                                                })
                                            ];
                                        case 2:
                                            hookResult = _state.sent();
                                            if (hookResult !== undefined) {
                                                newResult = hookResult;
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(priorHook, hook) {
                                return _ref.apply(this, arguments);
                            };
                        }(), Promise.resolve())
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        newResult
                    ];
            }
        });
    });
    return function buildAfterOperation(operationArgs) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vdXBkYXRlJztcbmltcG9ydCBkZWxldGVPcGVyYXRpb24gZnJvbSAnLi9kZWxldGUnO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL2NyZWF0ZSc7XG5pbXBvcnQgbG9naW4gZnJvbSAnLi4vLi4vYXV0aC9vcGVyYXRpb25zL2xvZ2luJztcbmltcG9ydCByZWZyZXNoIGZyb20gJy4uLy4uL2F1dGgvb3BlcmF0aW9ucy9yZWZyZXNoJztcbmltcG9ydCBmaW5kQnlJRCBmcm9tICcuL2ZpbmRCeUlEJztcbmltcG9ydCB1cGRhdGVCeUlEIGZyb20gJy4vdXBkYXRlQnlJRCc7XG5pbXBvcnQgZGVsZXRlQnlJRCBmcm9tICcuL2RlbGV0ZUJ5SUQnO1xuaW1wb3J0IHsgQWZ0ZXJPcGVyYXRpb25Ib29rLCBUeXBlV2l0aElEIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBmb3Jnb3RQYXNzd29yZCBmcm9tICcuLi8uLi9hdXRoL29wZXJhdGlvbnMvZm9yZ290UGFzc3dvcmQnO1xuXG5leHBvcnQgdHlwZSBBZnRlck9wZXJhdGlvbk1hcDxcbiAgVCBleHRlbmRzIFR5cGVXaXRoSUQsXG4+ID0ge1xuICBjcmVhdGU6IHR5cGVvZiBjcmVhdGUsIC8vIHRvZG86IHBhc3MgY29ycmVjdCBnZW5lcmljXG4gIGZpbmQ6IHR5cGVvZiBmaW5kPFQ+LFxuICBmaW5kQnlJRDogdHlwZW9mIGZpbmRCeUlEPFQ+LFxuICB1cGRhdGU6IHR5cGVvZiB1cGRhdGUsIC8vIHRvZG86IHBhc3MgY29ycmVjdCBnZW5lcmljXG4gIHVwZGF0ZUJ5SUQ6IHR5cGVvZiB1cGRhdGVCeUlELCAvLyB0b2RvOiBwYXNzIGNvcnJlY3QgZ2VuZXJpY1xuICBkZWxldGU6IHR5cGVvZiBkZWxldGVPcGVyYXRpb24sIC8vIHRvZG86IHBhc3MgY29ycmVjdCBnZW5lcmljXG4gIGRlbGV0ZUJ5SUQ6IHR5cGVvZiBkZWxldGVCeUlELCAvLyB0b2RvOiBwYXNzIGNvcnJlY3QgZ2VuZXJpY1xuICBsb2dpbjogdHlwZW9mIGxvZ2luLFxuICByZWZyZXNoOiB0eXBlb2YgcmVmcmVzaCxcbiAgZm9yZ290UGFzc3dvcmQ6IHR5cGVvZiBmb3Jnb3RQYXNzd29yZCxcbn1cbmV4cG9ydCB0eXBlIEFmdGVyT3BlcmF0aW9uQXJnPFQgZXh0ZW5kcyBUeXBlV2l0aElEPiA9XG4gIHwgeyBvcGVyYXRpb246ICdjcmVhdGUnOyByZXN1bHQ6IEF3YWl0ZWQ8UmV0dXJuVHlwZTxBZnRlck9wZXJhdGlvbk1hcDxUPlsnY3JlYXRlJ10+PiwgYXJnczogUGFyYW1ldGVyczxBZnRlck9wZXJhdGlvbk1hcDxUPlsnY3JlYXRlJ10+WzBdIH1cbiAgfCB7IG9wZXJhdGlvbjogJ2ZpbmQnOyByZXN1bHQ6IEF3YWl0ZWQ8UmV0dXJuVHlwZTxBZnRlck9wZXJhdGlvbk1hcDxUPlsnZmluZCddPj4sIGFyZ3M6IFBhcmFtZXRlcnM8QWZ0ZXJPcGVyYXRpb25NYXA8VD5bJ2ZpbmQnXT5bMF0gfVxuICB8IHsgb3BlcmF0aW9uOiAnZmluZEJ5SUQnOyByZXN1bHQ6IEF3YWl0ZWQ8UmV0dXJuVHlwZTxBZnRlck9wZXJhdGlvbk1hcDxUPlsnZmluZEJ5SUQnXT4+LCBhcmdzOiBQYXJhbWV0ZXJzPEFmdGVyT3BlcmF0aW9uTWFwPFQ+WydmaW5kQnlJRCddPlswXSB9XG4gIHwgeyBvcGVyYXRpb246ICd1cGRhdGUnOyByZXN1bHQ6IEF3YWl0ZWQ8UmV0dXJuVHlwZTxBZnRlck9wZXJhdGlvbk1hcDxUPlsndXBkYXRlJ10+PiwgYXJnczogUGFyYW1ldGVyczxBZnRlck9wZXJhdGlvbk1hcDxUPlsndXBkYXRlJ10+WzBdIH1cbiAgfCB7IG9wZXJhdGlvbjogJ3VwZGF0ZUJ5SUQnOyByZXN1bHQ6IEF3YWl0ZWQ8UmV0dXJuVHlwZTxBZnRlck9wZXJhdGlvbk1hcDxUPlsndXBkYXRlQnlJRCddPj4sIGFyZ3M6IFBhcmFtZXRlcnM8QWZ0ZXJPcGVyYXRpb25NYXA8VD5bJ3VwZGF0ZUJ5SUQnXT5bMF0gfVxuICB8IHsgb3BlcmF0aW9uOiAnZGVsZXRlJzsgcmVzdWx0OiBBd2FpdGVkPFJldHVyblR5cGU8QWZ0ZXJPcGVyYXRpb25NYXA8VD5bJ2RlbGV0ZSddPj4sIGFyZ3M6IFBhcmFtZXRlcnM8QWZ0ZXJPcGVyYXRpb25NYXA8VD5bJ2RlbGV0ZSddPlswXSB9XG4gIHwgeyBvcGVyYXRpb246ICdkZWxldGVCeUlEJzsgcmVzdWx0OiBBd2FpdGVkPFJldHVyblR5cGU8QWZ0ZXJPcGVyYXRpb25NYXA8VD5bJ2RlbGV0ZUJ5SUQnXT4+LCBhcmdzOiBQYXJhbWV0ZXJzPEFmdGVyT3BlcmF0aW9uTWFwPFQ+WydkZWxldGVCeUlEJ10+WzBdIH1cbiAgfCB7IG9wZXJhdGlvbjogJ2xvZ2luJzsgcmVzdWx0OiBBd2FpdGVkPFJldHVyblR5cGU8QWZ0ZXJPcGVyYXRpb25NYXA8VD5bJ2xvZ2luJ10+PiwgYXJnczogUGFyYW1ldGVyczxBZnRlck9wZXJhdGlvbk1hcDxUPlsnbG9naW4nXT5bMF0gfVxuICB8IHsgb3BlcmF0aW9uOiAncmVmcmVzaCc7IHJlc3VsdDogQXdhaXRlZDxSZXR1cm5UeXBlPEFmdGVyT3BlcmF0aW9uTWFwPFQ+WydyZWZyZXNoJ10+PiwgYXJnczogUGFyYW1ldGVyczxBZnRlck9wZXJhdGlvbk1hcDxUPlsncmVmcmVzaCddPlswXSB9XG4gIHwgeyBvcGVyYXRpb246ICdmb3Jnb3RQYXNzd29yZCc7IHJlc3VsdDogQXdhaXRlZDxSZXR1cm5UeXBlPEFmdGVyT3BlcmF0aW9uTWFwPFQ+Wydmb3Jnb3RQYXNzd29yZCddPj4sIGFyZ3M6IFBhcmFtZXRlcnM8QWZ0ZXJPcGVyYXRpb25NYXA8VD5bJ2ZvcmdvdFBhc3N3b3JkJ10+WzBdIH07XG5cbi8vIGV4cG9ydCB0eXBlIEFmdGVyT3BlcmF0aW9uSG9vayA9IHR5cGVvZiBidWlsZEFmdGVyT3BlcmF0aW9uO1xuXG5leHBvcnQgY29uc3QgYnVpbGRBZnRlck9wZXJhdGlvbiA9IGFzeW5jIDxcbiAgVCBleHRlbmRzIFR5cGVXaXRoSUQgPSBhbnksXG4gIE8gZXh0ZW5kcyBrZXlvZiBBZnRlck9wZXJhdGlvbk1hcDxUPiA9IGtleW9mIEFmdGVyT3BlcmF0aW9uTWFwPFQ+XG4+XG4oXG4gIG9wZXJhdGlvbkFyZ3M6IEFmdGVyT3BlcmF0aW9uQXJnPFQ+ICYgeyBvcGVyYXRpb246IE8gfSxcbik6IFByb21pc2U8QXdhaXRlZDxSZXR1cm5UeXBlPEFmdGVyT3BlcmF0aW9uTWFwPFQ+W09dPj4+ID0+IHtcbiAgY29uc3Qge1xuICAgIG9wZXJhdGlvbixcbiAgICBhcmdzLFxuICAgIHJlc3VsdCxcbiAgfSA9IG9wZXJhdGlvbkFyZ3M7XG5cbiAgbGV0IG5ld1Jlc3VsdCA9IHJlc3VsdDtcblxuICBhd2FpdCBhcmdzLmNvbGxlY3Rpb24uY29uZmlnLmhvb2tzLmFmdGVyT3BlcmF0aW9uLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBob29rOiBBZnRlck9wZXJhdGlvbkhvb2s8VD4pID0+IHtcbiAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICBjb25zdCBob29rUmVzdWx0ID0gYXdhaXQgaG9vayh7XG4gICAgICBvcGVyYXRpb24sXG4gICAgICBhcmdzLFxuICAgICAgcmVzdWx0OiBuZXdSZXN1bHQsXG4gICAgfSBhcyBBZnRlck9wZXJhdGlvbkFyZzxUPik7XG5cbiAgICBpZiAoaG9va1Jlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdSZXN1bHQgPSBob29rUmVzdWx0O1xuICAgIH1cbiAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuXG4gIHJldHVybiBuZXdSZXN1bHQ7XG59O1xuIl0sIm5hbWVzIjpbImJ1aWxkQWZ0ZXJPcGVyYXRpb24iLCJvcGVyYXRpb25BcmdzIiwib3BlcmF0aW9uIiwiYXJncyIsInJlc3VsdCIsIm5ld1Jlc3VsdCIsImNvbGxlY3Rpb24iLCJjb25maWciLCJob29rcyIsImFmdGVyT3BlcmF0aW9uIiwicmVkdWNlIiwicHJpb3JIb29rIiwiaG9vayIsImhvb2tSZXN1bHQiLCJ1bmRlZmluZWQiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3Q2FBOzs7ZUFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFNQTtlQUFzQixvQkFBQSxTQUtqQ0M7WUFHRUMsV0FDQUMsTUFDQUMsUUFHRUM7Ozs7b0JBTEZILFlBR0VELGNBSEZDLFdBQ0FDLE9BRUVGLGNBRkZFLE1BQ0FDLFNBQ0VILGNBREZHO29CQUdFQyxZQUFZRDtvQkFFaEI7O3dCQUFNRCxLQUFLRyxVQUFVLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxjQUFjLENBQUNDLE1BQU07dUNBQUMsb0JBQUEsU0FBT0MsV0FBV0M7b0NBR25FQzs7Ozs0Q0FGTjs7Z0RBQU1GOzs7NENBQU47NENBRW1COztnREFBTUMsS0FBSztvREFDNUJWLFdBQUFBO29EQUNBQyxNQUFBQTtvREFDQUMsUUFBUUM7Z0RBQ1Y7Ozs0Q0FKTVEsYUFBYTs0Q0FNbkIsSUFBSUEsZUFBZUMsV0FBVztnREFDNUJULFlBQVlROzRDQUNkOzs7Ozs7NEJBQ0Y7NENBWmdFRixXQUFXQzs7OzZCQVl4RUcsUUFBUUMsT0FBTzs7O29CQVpsQjtvQkFjQTs7d0JBQU9YOzs7O0lBQ1Q7b0JBOUJhTCxvQkFLWEMifQ==