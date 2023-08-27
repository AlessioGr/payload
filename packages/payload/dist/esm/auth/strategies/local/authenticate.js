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
import crypto from "crypto";
import scmp from "scmp";
export var authenticateLocalStrategy = function() {
    var _ref = _async_to_generator(function(param) {
        var doc, password, salt, hash, res, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    doc = param.doc, password = param.password;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        4,
                        ,
                        5
                    ]);
                    salt = doc.salt, hash = doc.hash;
                    if (!(typeof salt === "string" && typeof hash === "string")) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        new Promise(function(resolve, reject) {
                            crypto.pbkdf2(password, salt, 25000, 512, "sha256", function(e, hashBuffer) {
                                if (e) reject(null);
                                if (scmp(hashBuffer, Buffer.from(hash, "hex"))) {
                                    resolve(doc);
                                } else {
                                    reject(null);
                                }
                            });
                        })
                    ];
                case 2:
                    res = _state.sent();
                    return [
                        2,
                        res
                    ];
                case 3:
                    return [
                        2,
                        null
                    ];
                case 4:
                    err = _state.sent();
                    return [
                        2,
                        null
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return function authenticateLocalStrategy(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvYXV0aGVudGljYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCBzY21wIGZyb20gJ3NjbXAnO1xuaW1wb3J0IHsgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5cbnR5cGUgRG9jID0gVHlwZVdpdGhJRCAmIFJlY29yZDxzdHJpbmcsIHVua25vd24+XG5cbnR5cGUgQXJncyA9IHtcbiAgZG9jOiBEb2NcbiAgcGFzc3dvcmQ6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRlTG9jYWxTdHJhdGVneSA9IGFzeW5jICh7XG4gIGRvYyxcbiAgcGFzc3dvcmQsXG59OiBBcmdzKTogUHJvbWlzZTxEb2MgfCBudWxsPiA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBzYWx0LCBoYXNoIH0gPSBkb2M7XG5cbiAgICBpZiAodHlwZW9mIHNhbHQgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBoYXNoID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgbmV3IFByb21pc2U8RG9jIHwgbnVsbD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjcnlwdG8ucGJrZGYyKHBhc3N3b3JkLCBzYWx0LCAyNTAwMCwgNTEyLCAnc2hhMjU2JywgKGUsIGhhc2hCdWZmZXIpID0+IHtcbiAgICAgICAgICBpZiAoZSkgcmVqZWN0KG51bGwpO1xuXG4gICAgICAgICAgaWYgKHNjbXAoaGFzaEJ1ZmZlciwgQnVmZmVyLmZyb20oaGFzaCwgJ2hleCcpKSkge1xuICAgICAgICAgICAgcmVzb2x2ZShkb2MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJjcnlwdG8iLCJzY21wIiwiYXV0aGVudGljYXRlTG9jYWxTdHJhdGVneSIsImRvYyIsInBhc3N3b3JkIiwic2FsdCIsImhhc2giLCJyZXMiLCJlcnIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBia2RmMiIsImUiLCJoYXNoQnVmZmVyIiwiQnVmZmVyIiwiZnJvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFlBQVksU0FBUztBQUM1QixPQUFPQyxVQUFVLE9BQU87QUFVeEIsT0FBTyxJQUFNQztlQUE0QixvQkFBQTtZQUN2Q0MsS0FDQUMsVUFHVUMsTUFBTUMsTUFHTkMsS0FnQkRDOzs7O29CQXZCVEwsWUFBQUEsS0FDQUMsaUJBQUFBOzs7Ozs7Ozs7b0JBR1VDLE9BQWVGLElBQWZFLE1BQU1DLE9BQVNILElBQVRHO3lCQUVWLENBQUEsT0FBT0QsU0FBUyxZQUFZLE9BQU9DLFNBQVMsUUFBTyxHQUFuRDs7OztvQkFDVTs7d0JBQU0sSUFBSUcsUUFBb0IsU0FBQ0MsU0FBU0M7NEJBQ2xEWCxPQUFPWSxNQUFNLENBQUNSLFVBQVVDLE1BQU0sT0FBTyxLQUFLLFVBQVUsU0FBQ1EsR0FBR0M7Z0NBQ3RELElBQUlELEdBQUdGLE9BQU87Z0NBRWQsSUFBSVYsS0FBS2EsWUFBWUMsT0FBT0MsSUFBSSxDQUFDVixNQUFNLFNBQVM7b0NBQzlDSSxRQUFRUDtnQ0FDVixPQUFPO29DQUNMUSxPQUFPO2dDQUNUOzRCQUNGO3dCQUNGOzs7b0JBVk1KLE1BQU07b0JBWVo7O3dCQUFPQTs7O29CQUdUOzt3QkFBTzs7O29CQUNBQztvQkFDUDs7d0JBQU87Ozs7Ozs7O0lBRVg7b0JBM0JhTjs7O0lBMkJYIn0=