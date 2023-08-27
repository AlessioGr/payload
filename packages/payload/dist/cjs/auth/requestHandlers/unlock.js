"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unlockHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _unlock = /*#__PURE__*/ _interop_require_default(require("../operations/unlock"));
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
function unlockHandler(req, res, next) {
    return _unlockHandler.apply(this, arguments);
}
function _unlockHandler() {
    _unlockHandler = _async_to_generator(function(req, res, next) {
        var error;
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
                        (0, _unlock.default)({
                            req: req,
                            collection: req.collection,
                            data: {
                                email: req.body.email
                            }
                        })
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        res.status(_httpstatus.default.OK).json({
                            message: "Success"
                        })
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
    return _unlockHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL3JlcXVlc3RIYW5kbGVycy91bmxvY2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB1bmxvY2sgZnJvbSAnLi4vb3BlcmF0aW9ucy91bmxvY2snO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1bmxvY2tIYW5kbGVyKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgYXdhaXQgdW5sb2NrKHtcbiAgICAgIHJlcSxcbiAgICAgIGNvbGxlY3Rpb246IHJlcS5jb2xsZWN0aW9uLFxuICAgICAgZGF0YTogeyBlbWFpbDogcmVxLmJvZHkuZW1haWwgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKGh0dHBTdGF0dXMuT0spXG4gICAgICAuanNvbih7XG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVubG9ja0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZXJyb3IiLCJ1bmxvY2siLCJjb2xsZWN0aW9uIiwiZGF0YSIsImVtYWlsIiwiYm9keSIsInN0YXR1cyIsImh0dHBTdGF0dXMiLCJPSyIsImpzb24iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7OytCQUtBOzs7ZUFBOEJBOzs7aUVBSlA7NkRBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFV0EsY0FBY0MsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtXQUFwRUg7O1NBQUFBO0lBQUFBLGlCQUFmLG9CQUFBLFNBQTZCQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO1lBWXZGQzs7Ozs7Ozs7OztvQkFWUDs7d0JBQU1DLElBQUFBLGVBQU0sRUFBQzs0QkFDWEosS0FBQUE7NEJBQ0FLLFlBQVlMLElBQUlLLFVBQVU7NEJBQzFCQyxNQUFNO2dDQUFFQyxPQUFPUCxJQUFJUSxJQUFJLENBQUNELEtBQUs7NEJBQUM7d0JBQ2hDOzs7b0JBSkE7b0JBTUE7O3dCQUFPTixJQUFJUSxNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFDNUJDLElBQUksQ0FBQzs0QkFDSkMsU0FBUzt3QkFDWDs7O29CQUNLVjtvQkFDUDs7d0JBQU9ELEtBQUtDOzs7Ozs7OztJQUVoQjtXQWY4QkoifQ==