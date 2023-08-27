"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findVersionsHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _findVersions = /*#__PURE__*/ _interop_require_default(require("../operations/findVersions"));
var _isNumber = require("../../utilities/isNumber");
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
function findVersionsHandler(global) {
    return function() {
        var _handler = _async_to_generator(function(req, res, next) {
            var page, parsedPage, options, result, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        if (typeof req.query.page === "string") {
                            parsedPage = parseInt(req.query.page, 10);
                            if (!Number.isNaN(parsedPage)) {
                                page = parsedPage;
                            }
                        }
                        options = {
                            req: req,
                            globalConfig: global,
                            where: req.query.where,
                            page: page,
                            limit: (0, _isNumber.isNumber)(req.query.limit) ? Number(req.query.limit) : undefined,
                            sort: req.query.sort,
                            depth: (0, _isNumber.isNumber)(req.query.depth) ? Number(req.query.depth) : undefined
                        };
                        return [
                            4,
                            (0, _findVersions.default)(options)
                        ];
                    case 1:
                        result = _state.sent();
                        return [
                            2,
                            res.status(_httpstatus.default.OK).json(result)
                        ];
                    case 2:
                        error = _state.sent();
                        return [
                            2,
                            next(error)
                        ];
                    case 3:
                        return [
                            2
                        ];
                }
            });
        });
        function handler(req, res, next) {
            return _handler.apply(this, arguments);
        }
        return handler;
    }();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9maW5kVmVyc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IFR5cGVXaXRoSUQgfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi4vb3BlcmF0aW9ucy9maW5kVmVyc2lvbnMnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pc051bWJlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRWZXJzaW9uc0hhbmRsZXIoZ2xvYmFsOiBTYW5pdGl6ZWRHbG9iYWxDb25maWcpIHtcbiAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXI8VCBleHRlbmRzIFR5cGVXaXRoSUQgPSBhbnk+KHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8UmVzcG9uc2U8UGFnaW5hdGVkRG9jczxUPj4gfCB2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBwYWdlO1xuXG4gICAgICBpZiAodHlwZW9mIHJlcS5xdWVyeS5wYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBwYXJzZWRQYWdlID0gcGFyc2VJbnQocmVxLnF1ZXJ5LnBhZ2UsIDEwKTtcblxuICAgICAgICBpZiAoIU51bWJlci5pc05hTihwYXJzZWRQYWdlKSkge1xuICAgICAgICAgIHBhZ2UgPSBwYXJzZWRQYWdlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJlcSxcbiAgICAgICAgZ2xvYmFsQ29uZmlnOiBnbG9iYWwsXG4gICAgICAgIHdoZXJlOiByZXEucXVlcnkud2hlcmUgYXMgV2hlcmUsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxpbWl0OiBpc051bWJlcihyZXEucXVlcnkubGltaXQpID8gTnVtYmVyKHJlcS5xdWVyeS5saW1pdCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHNvcnQ6IHJlcS5xdWVyeS5zb3J0IGFzIHN0cmluZyxcbiAgICAgICAgZGVwdGg6IGlzTnVtYmVyKHJlcS5xdWVyeS5kZXB0aCkgPyBOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbmRWZXJzaW9ucyhvcHRpb25zKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbihyZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvcik7XG4gICAgfVxuICB9O1xufVxuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9uc0hhbmRsZXIiLCJnbG9iYWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInBhZ2UiLCJwYXJzZWRQYWdlIiwib3B0aW9ucyIsInJlc3VsdCIsImVycm9yIiwicXVlcnkiLCJwYXJzZUludCIsIk51bWJlciIsImlzTmFOIiwiZ2xvYmFsQ29uZmlnIiwid2hlcmUiLCJsaW1pdCIsImlzTnVtYmVyIiwidW5kZWZpbmVkIiwic29ydCIsImRlcHRoIiwiZmluZFZlcnNpb25zIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQXdCQTs7O2lFQVREO21FQUtFO3dCQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVYsU0FBU0Esb0JBQW9CQyxNQUE2QjtJQUN2RTtZQUFzQkMsV0FBZixvQkFBQSxTQUFtREMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtnQkFFeEdDLE1BR0lDLFlBT0ZDLFNBVUFDLFFBR0NDOzs7Ozs7Ozs7O3dCQXJCUCxJQUFJLE9BQU9QLElBQUlRLEtBQUssQ0FBQ0wsSUFBSSxLQUFLLFVBQVU7NEJBQ2hDQyxhQUFhSyxTQUFTVCxJQUFJUSxLQUFLLENBQUNMLElBQUksRUFBRTs0QkFFNUMsSUFBSSxDQUFDTyxPQUFPQyxLQUFLLENBQUNQLGFBQWE7Z0NBQzdCRCxPQUFPQzs0QkFDVDt3QkFDRjt3QkFFTUMsVUFBVTs0QkFDZEwsS0FBQUE7NEJBQ0FZLGNBQWNkOzRCQUNkZSxPQUFPYixJQUFJUSxLQUFLLENBQUNLLEtBQUs7NEJBQ3RCVixNQUFBQTs0QkFDQVcsT0FBT0MsSUFBQUEsa0JBQVEsRUFBQ2YsSUFBSVEsS0FBSyxDQUFDTSxLQUFLLElBQUlKLE9BQU9WLElBQUlRLEtBQUssQ0FBQ00sS0FBSyxJQUFJRTs0QkFDN0RDLE1BQU1qQixJQUFJUSxLQUFLLENBQUNTLElBQUk7NEJBQ3BCQyxPQUFPSCxJQUFBQSxrQkFBUSxFQUFDZixJQUFJUSxLQUFLLENBQUNVLEtBQUssSUFBSVIsT0FBT1YsSUFBSVEsS0FBSyxDQUFDVSxLQUFLLElBQUlGO3dCQUMvRDt3QkFFZTs7NEJBQU1HLElBQUFBLHFCQUFZLEVBQUNkOzs7d0JBQTVCQyxTQUFTO3dCQUVmOzs0QkFBT0wsSUFBSW1CLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUNqQjs7O3dCQUMvQkM7d0JBQ1A7OzRCQUFPTCxLQUFLSzs7Ozs7Ozs7UUFFaEI7aUJBNUJzQlIsUUFBb0NDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7bUJBQTFGSDs7ZUFBQUE7O0FBNkJ4QiJ9