"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _errors = require("../errors");
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
var executeAccess = function() {
    var _ref = _async_to_generator(function(operation, access) {
        var result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!access) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        access(operation)
                    ];
                case 1:
                    result = _state.sent();
                    if (!result) {
                        if (!operation.disableErrors) throw new _errors.Forbidden(operation.req.t);
                    }
                    return [
                        2,
                        result
                    ];
                case 2:
                    if (operation.req.user) {
                        return [
                            2,
                            true
                        ];
                    }
                    if (!operation.disableErrors) throw new _errors.Forbidden(operation.req.t);
                    return [
                        2,
                        false
                    ];
            }
        });
    });
    return function executeAccess(operation, access) {
        return _ref.apply(this, arguments);
    };
}();
var _default = executeAccess;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2V4ZWN1dGVBY2Nlc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9yYmlkZGVuIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCB7IEFjY2VzcywgQWNjZXNzUmVzdWx0IH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcblxuY29uc3QgZXhlY3V0ZUFjY2VzcyA9IGFzeW5jIChvcGVyYXRpb24sIGFjY2VzczogQWNjZXNzKTogUHJvbWlzZTxBY2Nlc3NSZXN1bHQ+ID0+IHtcbiAgaWYgKGFjY2Vzcykge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFjY2VzcyhvcGVyYXRpb24pO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIGlmICghb3BlcmF0aW9uLmRpc2FibGVFcnJvcnMpIHRocm93IG5ldyBGb3JiaWRkZW4ob3BlcmF0aW9uLnJlcS50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKG9wZXJhdGlvbi5yZXEudXNlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFvcGVyYXRpb24uZGlzYWJsZUVycm9ycykgdGhyb3cgbmV3IEZvcmJpZGRlbihvcGVyYXRpb24ucmVxLnQpO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGVjdXRlQWNjZXNzO1xuIl0sIm5hbWVzIjpbImV4ZWN1dGVBY2Nlc3MiLCJvcGVyYXRpb24iLCJhY2Nlc3MiLCJyZXN1bHQiLCJkaXNhYmxlRXJyb3JzIiwiRm9yYmlkZGVuIiwicmVxIiwidCIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBc0JBOzs7ZUFBQTs7O3NCQXRCMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BO2VBQWdCLG9CQUFBLFNBQU9DLFdBQVdDO1lBRTlCQzs7Ozt5QkFESkQsUUFBQUE7Ozs7b0JBQ2E7O3dCQUFNQSxPQUFPRDs7O29CQUF0QkUsU0FBUztvQkFFZixJQUFJLENBQUNBLFFBQVE7d0JBQ1gsSUFBSSxDQUFDRixVQUFVRyxhQUFhLEVBQUUsTUFBTSxJQUFJQyxpQkFBUyxDQUFDSixVQUFVSyxHQUFHLENBQUNDLENBQUM7b0JBQ25FO29CQUVBOzt3QkFBT0o7OztvQkFHVCxJQUFJRixVQUFVSyxHQUFHLENBQUNFLElBQUksRUFBRTt3QkFDdEI7OzRCQUFPOztvQkFDVDtvQkFFQSxJQUFJLENBQUNQLFVBQVVHLGFBQWEsRUFBRSxNQUFNLElBQUlDLGlCQUFTLENBQUNKLFVBQVVLLEdBQUcsQ0FBQ0MsQ0FBQztvQkFDakU7O3dCQUFPOzs7O0lBQ1Q7b0JBakJNUCxjQUF1QkMsV0FBV0M7Ozs7SUFtQnhDLFdBQWVGIn0=