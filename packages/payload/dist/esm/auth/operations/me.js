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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
import jwt from "jsonwebtoken";
import getExtractJWT from "../getExtractJWT";
function me(_) {
    return _me.apply(this, arguments);
}
function _me() {
    _me = _async_to_generator(function(param) {
        var req, collection, extractJWT, response, user, token, decoded;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req = param.req, collection = param.collection;
                    extractJWT = getExtractJWT(req.payload.config);
                    response = {
                        user: null
                    };
                    if (req.user) {
                        user = _object_spread({}, req.user);
                        if (user.collection !== collection.config.slug) {
                            return [
                                2,
                                {
                                    user: null
                                }
                            ];
                        }
                        delete user.collection;
                        response = {
                            user: user,
                            collection: req.user.collection
                        };
                        token = extractJWT(req);
                        if (token) {
                            decoded = jwt.decode(token);
                            if (decoded) response.exp = decoded.exp;
                            if (!collection.config.auth.removeTokenFromResponses) response.token = token;
                        }
                    }
                    // /////////////////////////////////////
                    // After Me - Collection
                    // /////////////////////////////////////
                    return [
                        4,
                        collection.config.hooks.afterMe.reduce(function() {
                            var _ref = _async_to_generator(function(priorHook, hook) {
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
                                                    req: req,
                                                    response: response,
                                                    context: req.context
                                                })
                                            ];
                                        case 2:
                                            response = _state.sent() || response;
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
                        response
                    ];
            }
        });
    });
    return _me.apply(this, arguments);
}
export default me;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvbWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCBnZXRFeHRyYWN0SldUIGZyb20gJy4uL2dldEV4dHJhY3RKV1QnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IENvbGxlY3Rpb24gfSBmcm9tICcuLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBSZXN1bHQgPSB7XG4gIHVzZXI/OiBVc2VyLFxuICBjb2xsZWN0aW9uPzogc3RyaW5nLFxuICB0b2tlbj86IHN0cmluZyxcbiAgZXhwPzogbnVtYmVyLFxufVxuXG5leHBvcnQgdHlwZSBBcmd1bWVudHMgPSB7XG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgY29sbGVjdGlvbjogQ29sbGVjdGlvblxufVxuXG5hc3luYyBmdW5jdGlvbiBtZSh7XG4gIHJlcSxcbiAgY29sbGVjdGlvbixcbn06IEFyZ3VtZW50cyk6IFByb21pc2U8UmVzdWx0PiB7XG4gIGNvbnN0IGV4dHJhY3RKV1QgPSBnZXRFeHRyYWN0SldUKHJlcS5wYXlsb2FkLmNvbmZpZyk7XG4gIGxldCByZXNwb25zZTogUmVzdWx0ID0ge1xuICAgIHVzZXI6IG51bGwsXG4gIH07XG5cbiAgaWYgKHJlcS51c2VyKSB7XG4gICAgY29uc3QgdXNlciA9IHsgLi4ucmVxLnVzZXIgfTtcblxuICAgIGlmICh1c2VyLmNvbGxlY3Rpb24gIT09IGNvbGxlY3Rpb24uY29uZmlnLnNsdWcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVzZXI6IG51bGwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlbGV0ZSB1c2VyLmNvbGxlY3Rpb247XG5cbiAgICByZXNwb25zZSA9IHtcbiAgICAgIHVzZXIsXG4gICAgICBjb2xsZWN0aW9uOiByZXEudXNlci5jb2xsZWN0aW9uLFxuICAgIH07XG5cbiAgICBjb25zdCB0b2tlbiA9IGV4dHJhY3RKV1QocmVxKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dC5kZWNvZGUodG9rZW4pIGFzIGp3dC5Kd3RQYXlsb2FkO1xuICAgICAgaWYgKGRlY29kZWQpIHJlc3BvbnNlLmV4cCA9IGRlY29kZWQuZXhwO1xuICAgICAgaWYgKCFjb2xsZWN0aW9uLmNvbmZpZy5hdXRoLnJlbW92ZVRva2VuRnJvbVJlc3BvbnNlcykgcmVzcG9uc2UudG9rZW4gPSB0b2tlbjtcbiAgICB9XG4gIH1cblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIEFmdGVyIE1lIC0gQ29sbGVjdGlvblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgYXdhaXQgY29sbGVjdGlvbi5jb25maWcuaG9va3MuYWZ0ZXJNZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgaG9vaykgPT4ge1xuICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgIHJlc3BvbnNlID0gYXdhaXQgaG9vayh7XG4gICAgICByZXEsXG4gICAgICByZXNwb25zZSxcbiAgICAgIGNvbnRleHQ6IHJlcS5jb250ZXh0LFxuICAgIH0pIHx8IHJlc3BvbnNlO1xuICB9LCBQcm9taXNlLnJlc29sdmUoKSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZTtcbiJdLCJuYW1lcyI6WyJqd3QiLCJnZXRFeHRyYWN0SldUIiwibWUiLCJyZXEiLCJjb2xsZWN0aW9uIiwiZXh0cmFjdEpXVCIsInJlc3BvbnNlIiwidXNlciIsInRva2VuIiwiZGVjb2RlZCIsInBheWxvYWQiLCJjb25maWciLCJzbHVnIiwiZGVjb2RlIiwiZXhwIiwiYXV0aCIsInJlbW92ZVRva2VuRnJvbVJlc3BvbnNlcyIsImhvb2tzIiwiYWZ0ZXJNZSIsInJlZHVjZSIsInByaW9ySG9vayIsImhvb2siLCJjb250ZXh0IiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBUyxlQUFlO0FBRS9CLE9BQU9DLG1CQUFtQixtQkFBbUI7U0FnQjlCQyxHQUFHLENBR047V0FIR0E7O1NBQUFBO0lBQUFBLE1BQWYsb0JBQUEsU0FBa0IsS0FHTjtZQUZWQyxLQUNBQyxZQUVNQyxZQUNGQyxVQUtJQyxNQWVBQyxPQUdFQzs7OztvQkEzQlZOLE1BRGdCLE1BQ2hCQSxLQUNBQyxhQUZnQixNQUVoQkE7b0JBRU1DLGFBQWFKLGNBQWNFLElBQUlPLE9BQU8sQ0FBQ0MsTUFBTTtvQkFDL0NMLFdBQW1CO3dCQUNyQkMsTUFBTTtvQkFDUjtvQkFFQSxJQUFJSixJQUFJSSxJQUFJLEVBQUU7d0JBQ05BLE9BQU8sbUJBQUtKLElBQUlJLElBQUk7d0JBRTFCLElBQUlBLEtBQUtILFVBQVUsS0FBS0EsV0FBV08sTUFBTSxDQUFDQyxJQUFJLEVBQUU7NEJBQzlDOztnQ0FBTztvQ0FDTEwsTUFBTTtnQ0FDUjs7d0JBQ0Y7d0JBRUEsT0FBT0EsS0FBS0gsVUFBVTt3QkFFdEJFLFdBQVc7NEJBQ1RDLE1BQUFBOzRCQUNBSCxZQUFZRCxJQUFJSSxJQUFJLENBQUNILFVBQVU7d0JBQ2pDO3dCQUVNSSxRQUFRSCxXQUFXRjt3QkFFekIsSUFBSUssT0FBTzs0QkFDSEMsVUFBVVQsSUFBSWEsTUFBTSxDQUFDTDs0QkFDM0IsSUFBSUMsU0FBU0gsU0FBU1EsR0FBRyxHQUFHTCxRQUFRSyxHQUFHOzRCQUN2QyxJQUFJLENBQUNWLFdBQVdPLE1BQU0sQ0FBQ0ksSUFBSSxDQUFDQyx3QkFBd0IsRUFBRVYsU0FBU0UsS0FBSyxHQUFHQTt3QkFDekU7b0JBQ0Y7b0JBRUEsd0NBQXdDO29CQUN4Qyx3QkFBd0I7b0JBQ3hCLHdDQUF3QztvQkFFeEM7O3dCQUFNSixXQUFXTyxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNO3VDQUFDLG9CQUFBLFNBQU9DLFdBQVdDOzs7OzRDQUM3RDs7Z0RBQU1EOzs7NENBQU47NENBRVc7O2dEQUFNQyxLQUFLO29EQUNwQmxCLEtBQUFBO29EQUNBRyxVQUFBQTtvREFDQWdCLFNBQVNuQixJQUFJbUIsT0FBTztnREFDdEI7Ozs0Q0FKQWhCLFdBQVcsaUJBSUxBOzs7Ozs7NEJBQ1I7NENBUm9EYyxXQUFXQzs7OzZCQVE1REUsUUFBUUMsT0FBTzs7O29CQVJsQjtvQkFVQTs7d0JBQU9sQjs7OztJQUNUO1dBakRlSjs7QUFtRGYsZUFBZUEsR0FBRyJ9