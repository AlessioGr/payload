"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findOneHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _findOne = /*#__PURE__*/ _interop_require_default(require("../operations/findOne"));
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
function findOneHandler(req, res, next) {
    return _findOneHandler.apply(this, arguments);
}
function _findOneHandler() {
    _findOneHandler = _async_to_generator(function(req, res, next) {
        var result, error;
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
                        (0, _findOne.default)({
                            req: req,
                            user: req.user,
                            key: req.params.key
                        })
                    ];
                case 1:
                    result = _state.sent();
                    return [
                        2,
                        res.status(_httpstatus.default.OK).json(result || {
                            message: req.t("general:notFound"),
                            value: null
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
    return _findOneHandler.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9yZXF1ZXN0SGFuZGxlcnMvZmluZE9uZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IGZpbmRPbmUgZnJvbSAnLi4vb3BlcmF0aW9ucy9maW5kT25lJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmluZE9uZUhhbmRsZXIocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTxSZXNwb25zZTxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVsnX3ByZWZlcmVuY2UnXT4gfCB2b2lkPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmluZE9uZSh7XG4gICAgICByZXEsXG4gICAgICB1c2VyOiByZXEudXNlcixcbiAgICAgIGtleTogcmVxLnBhcmFtcy5rZXksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhodHRwU3RhdHVzLk9LKS5qc29uKHJlc3VsdCB8fCB7IG1lc3NhZ2U6IHJlcS50KCdnZW5lcmFsOm5vdEZvdW5kJyksIHZhbHVlOiBudWxsIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXh0KGVycm9yKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZpbmRPbmVIYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsInJlc3VsdCIsImVycm9yIiwiZmluZE9uZSIsInVzZXIiLCJrZXkiLCJwYXJhbXMiLCJzdGF0dXMiLCJodHRwU3RhdHVzIiwiT0siLCJqc29uIiwibWVzc2FnZSIsInQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFNQTs7O2VBQThCQTs7O2lFQUxQOzhEQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRVVBLGVBQWVDLEdBQW1CLEVBQUVDLEdBQWEsRUFBRUMsSUFBa0I7V0FBckVIOztTQUFBQTtJQUFBQSxrQkFBZixvQkFBQSxTQUE4QkMsR0FBbUIsRUFBRUMsR0FBYSxFQUFFQyxJQUFrQjtZQUV6RkMsUUFPQ0M7Ozs7Ozs7Ozs7b0JBUFE7O3dCQUFNQyxJQUFBQSxnQkFBTyxFQUFDOzRCQUMzQkwsS0FBQUE7NEJBQ0FNLE1BQU1OLElBQUlNLElBQUk7NEJBQ2RDLEtBQUtQLElBQUlRLE1BQU0sQ0FBQ0QsR0FBRzt3QkFDckI7OztvQkFKTUosU0FBUztvQkFNZjs7d0JBQU9GLElBQUlRLE1BQU0sQ0FBQ0MsbUJBQVUsQ0FBQ0MsRUFBRSxFQUFFQyxJQUFJLENBQUNULFVBQVU7NEJBQUVVLFNBQVNiLElBQUljLENBQUMsQ0FBQzs0QkFBcUJDLE9BQU87d0JBQUs7OztvQkFDM0ZYO29CQUNQOzt3QkFBT0YsS0FBS0U7Ozs7Ozs7O0lBRWhCO1dBWjhCTCJ9