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
import refresh from "../../operations/refresh";
import getExtractJWT from "../../getExtractJWT";
function refreshResolver(collection) {
    function resolver(_, args, context) {
        return _resolver.apply(this, arguments);
    }
    function _resolver() {
        _resolver = _async_to_generator(function(_, args, context) {
            var token, extractJWT, options, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        extractJWT = getExtractJWT(context.req.payload.config);
                        token = extractJWT(context.req);
                        if (args.token) {
                            token = args.token;
                        }
                        options = {
                            collection: collection,
                            token: token,
                            req: context.req,
                            res: context.res,
                            depth: 0
                        };
                        return [
                            4,
                            refresh(options)
                        ];
                    case 1:
                        result = _state.sent();
                        return [
                            2,
                            result
                        ];
                }
            });
        });
        return _resolver.apply(this, arguments);
    }
    return resolver;
}
export default refreshResolver;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL2dyYXBocWwvcmVzb2x2ZXJzL3JlZnJlc2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgcmVmcmVzaCBmcm9tICcuLi8uLi9vcGVyYXRpb25zL3JlZnJlc2gnO1xuaW1wb3J0IGdldEV4dHJhY3RKV1QgZnJvbSAnLi4vLi4vZ2V0RXh0cmFjdEpXVCc7XG5cbmZ1bmN0aW9uIHJlZnJlc2hSZXNvbHZlcihjb2xsZWN0aW9uOiBDb2xsZWN0aW9uKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIHJlc29sdmVyKF8sIGFyZ3MsIGNvbnRleHQpIHtcbiAgICBsZXQgdG9rZW47XG5cbiAgICBjb25zdCBleHRyYWN0SldUID0gZ2V0RXh0cmFjdEpXVChjb250ZXh0LnJlcS5wYXlsb2FkLmNvbmZpZyk7XG4gICAgdG9rZW4gPSBleHRyYWN0SldUKGNvbnRleHQucmVxKTtcblxuICAgIGlmIChhcmdzLnRva2VuKSB7XG4gICAgICB0b2tlbiA9IGFyZ3MudG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICB0b2tlbixcbiAgICAgIHJlcTogY29udGV4dC5yZXEsXG4gICAgICByZXM6IGNvbnRleHQucmVzLFxuICAgICAgZGVwdGg6IDAsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlZnJlc2gob3B0aW9ucyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZWZyZXNoUmVzb2x2ZXI7XG4iXSwibmFtZXMiOlsicmVmcmVzaCIsImdldEV4dHJhY3RKV1QiLCJyZWZyZXNoUmVzb2x2ZXIiLCJjb2xsZWN0aW9uIiwicmVzb2x2ZXIiLCJfIiwiYXJncyIsImNvbnRleHQiLCJ0b2tlbiIsImV4dHJhY3RKV1QiLCJvcHRpb25zIiwicmVzdWx0IiwicmVxIiwicGF5bG9hZCIsImNvbmZpZyIsInJlcyIsImRlcHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsYUFBYSwyQkFBMkI7QUFDL0MsT0FBT0MsbUJBQW1CLHNCQUFzQjtBQUVoRCxTQUFTQyxnQkFBZ0JDLFVBQXNCO2FBQzlCQyxTQUFTQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsT0FBTztlQUF6Qkg7O2FBQUFBO1FBQUFBLFlBQWYsb0JBQUEsU0FBd0JDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxPQUFPO2dCQUNsQ0MsT0FFRUMsWUFPQUMsU0FRQUM7Ozs7d0JBZkFGLGFBQWFSLGNBQWNNLFFBQVFLLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNO3dCQUMzRE4sUUFBUUMsV0FBV0YsUUFBUUssR0FBRzt3QkFFOUIsSUFBSU4sS0FBS0UsS0FBSyxFQUFFOzRCQUNkQSxRQUFRRixLQUFLRSxLQUFLO3dCQUNwQjt3QkFFTUUsVUFBVTs0QkFDZFAsWUFBQUE7NEJBQ0FLLE9BQUFBOzRCQUNBSSxLQUFLTCxRQUFRSyxHQUFHOzRCQUNoQkcsS0FBS1IsUUFBUVEsR0FBRzs0QkFDaEJDLE9BQU87d0JBQ1Q7d0JBRWU7OzRCQUFNaEIsUUFBUVU7Ozt3QkFBdkJDLFNBQVM7d0JBRWY7OzRCQUFPQTs7OztRQUNUO2VBckJlUDs7SUF1QmYsT0FBT0E7QUFDVDtBQUVBLGVBQWVGLGdCQUFnQiJ9