"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "uploadFiles", {
    enumerable: true,
    get: function() {
        return uploadFiles;
    }
});
var _errors = require("../errors");
var _saveBufferToFile = /*#__PURE__*/ _interop_require_default(require("./saveBufferToFile"));
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
var uploadFiles = function() {
    var _ref = _async_to_generator(function(payload, files, t) {
        var err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        2,
                        ,
                        3
                    ]);
                    return [
                        4,
                        Promise.all(files.map(function() {
                            var _ref = _async_to_generator(function(param) {
                                var buffer, path;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            buffer = param.buffer, path = param.path;
                                            return [
                                                4,
                                                (0, _saveBufferToFile.default)(buffer, path)
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    err = _state.sent();
                    payload.logger.error(err);
                    throw new _errors.FileUploadError(t);
                case 3:
                    return [
                        2
                    ];
            }
        });
    });
    return function uploadFiles(payload, files, t) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL3VwbG9hZEZpbGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHNhdmVCdWZmZXJUb0ZpbGUgZnJvbSAnLi9zYXZlQnVmZmVyVG9GaWxlJztcbmltcG9ydCB7IEZpbGVUb1NhdmUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGVzID0gYXN5bmMgKHBheWxvYWQ6IFBheWxvYWQsIGZpbGVzOiBGaWxlVG9TYXZlW10sIHQ6IFRGdW5jdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IFByb21pc2UuYWxsKGZpbGVzLm1hcChhc3luYyAoeyBidWZmZXIsIHBhdGggfSkgPT4ge1xuICAgICAgYXdhaXQgc2F2ZUJ1ZmZlclRvRmlsZShidWZmZXIsIHBhdGgpO1xuICAgIH0pKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcGF5bG9hZC5sb2dnZXIuZXJyb3IoZXJyKTtcbiAgICB0aHJvdyBuZXcgRmlsZVVwbG9hZEVycm9yKHQpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInVwbG9hZEZpbGVzIiwicGF5bG9hZCIsImZpbGVzIiwidCIsImVyciIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJidWZmZXIiLCJwYXRoIiwic2F2ZUJ1ZmZlclRvRmlsZSIsImxvZ2dlciIsImVycm9yIiwiRmlsZVVwbG9hZEVycm9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQU1hQTs7O2VBQUFBOzs7c0JBTG1CO3VFQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRCLElBQU1BO2VBQWMsb0JBQUEsU0FBT0MsU0FBa0JDLE9BQXFCQztZQUs5REM7Ozs7Ozs7Ozs7b0JBSFA7O3dCQUFNQyxRQUFRQyxHQUFHLENBQUNKLE1BQU1LLEdBQUc7dUNBQUMsb0JBQUE7b0NBQVNDLFFBQVFDOzs7OzRDQUFSRCxlQUFBQSxRQUFRQyxhQUFBQTs0Q0FDM0M7O2dEQUFNQyxJQUFBQSx5QkFBZ0IsRUFBQ0YsUUFBUUM7Ozs0Q0FBL0I7Ozs7Ozs0QkFDRjs7Ozs7OztvQkFGQTs7Ozs7O29CQUdPTDtvQkFDUEgsUUFBUVUsTUFBTSxDQUFDQyxLQUFLLENBQUNSO29CQUNyQixNQUFNLElBQUlTLHVCQUFlLENBQUNWOzs7Ozs7O0lBRTlCO29CQVRhSCxZQUFxQkMsU0FBa0JDLE9BQXFCQyJ9