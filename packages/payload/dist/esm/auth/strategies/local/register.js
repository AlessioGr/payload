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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
import { ValidationError } from "../../../errors";
import { generatePasswordSaltHash } from "./generatePasswordSaltHash";
export var registerLocalStrategy = function() {
    var _ref = _async_to_generator(function(param) {
        var collection, doc, password, payload, req, existingUser, _ref, salt, hash, sanitizedDoc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, doc = param.doc, password = param.password, payload = param.payload, req = param.req;
                    return [
                        4,
                        payload.find({
                            collection: collection.slug,
                            depth: 0,
                            where: {
                                email: {
                                    equals: doc.email
                                }
                            }
                        })
                    ];
                case 1:
                    existingUser = _state.sent();
                    if (existingUser.docs.length > 0) {
                        throw new ValidationError([
                            {
                                message: "A user with the given email is already registered",
                                field: "email"
                            }
                        ]);
                    }
                    return [
                        4,
                        generatePasswordSaltHash({
                            password: password
                        })
                    ];
                case 2:
                    _ref = _state.sent(), salt = _ref.salt, hash = _ref.hash;
                    sanitizedDoc = _object_spread({}, doc);
                    if (sanitizedDoc.password) delete sanitizedDoc.password;
                    return [
                        2,
                        payload.db.create({
                            collection: collection.slug,
                            data: _object_spread_props(_object_spread({}, sanitizedDoc), {
                                salt: salt,
                                hash: hash
                            }),
                            req: req
                        })
                    ];
            }
        });
    });
    return function registerLocalStrategy(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvcmVnaXN0ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLic7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCB9IGZyb20gJy4vZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHBhc3N3b3JkOiBzdHJpbmdcbiAgcGF5bG9hZDogUGF5bG9hZFxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG59XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlckxvY2FsU3RyYXRlZ3kgPSBhc3luYyAoe1xuICBjb2xsZWN0aW9uLFxuICBkb2MsXG4gIHBhc3N3b3JkLFxuICBwYXlsb2FkLFxuICByZXEsXG59OiBBcmdzKTogUHJvbWlzZTxSZWNvcmQ8c3RyaW5nLCB1bmtub3duPj4gPT4ge1xuICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwYXlsb2FkLmZpbmQoe1xuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24uc2x1ZyxcbiAgICBkZXB0aDogMCxcbiAgICB3aGVyZToge1xuICAgICAgZW1haWw6IHtcbiAgICAgICAgZXF1YWxzOiBkb2MuZW1haWwsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGlmIChleGlzdGluZ1VzZXIuZG9jcy5sZW5ndGggPiAwKSB7XG4gICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihbeyBtZXNzYWdlOiAnQSB1c2VyIHdpdGggdGhlIGdpdmVuIGVtYWlsIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCcsIGZpZWxkOiAnZW1haWwnIH1dKTtcbiAgfVxuXG4gIGNvbnN0IHsgc2FsdCwgaGFzaCB9ID0gYXdhaXQgZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoKHsgcGFzc3dvcmQgfSk7XG5cbiAgY29uc3Qgc2FuaXRpemVkRG9jID0geyAuLi5kb2MgfTtcbiAgaWYgKHNhbml0aXplZERvYy5wYXNzd29yZCkgZGVsZXRlIHNhbml0aXplZERvYy5wYXNzd29yZDtcblxuICByZXR1cm4gcGF5bG9hZC5kYi5jcmVhdGUoe1xuICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24uc2x1ZyxcbiAgICBkYXRhOiB7XG4gICAgICAuLi5zYW5pdGl6ZWREb2MsXG4gICAgICBzYWx0LFxuICAgICAgaGFzaCxcbiAgICB9LFxuICAgIHJlcSxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIlZhbGlkYXRpb25FcnJvciIsImdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCIsInJlZ2lzdGVyTG9jYWxTdHJhdGVneSIsImNvbGxlY3Rpb24iLCJkb2MiLCJwYXNzd29yZCIsInBheWxvYWQiLCJyZXEiLCJleGlzdGluZ1VzZXIiLCJzYWx0IiwiaGFzaCIsInNhbml0aXplZERvYyIsImZpbmQiLCJzbHVnIiwiZGVwdGgiLCJ3aGVyZSIsImVtYWlsIiwiZXF1YWxzIiwiZG9jcyIsImxlbmd0aCIsIm1lc3NhZ2UiLCJmaWVsZCIsImRiIiwiY3JlYXRlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxlQUFlLFFBQVEsa0JBQWtCO0FBR2xELFNBQVNDLHdCQUF3QixRQUFRLDZCQUE2QjtBQVd0RSxPQUFPLElBQU1DO2VBQXdCLG9CQUFBO1lBQ25DQyxZQUNBQyxLQUNBQyxVQUNBQyxTQUNBQyxLQUVNQyxjQWNpQixNQUFmQyxNQUFNQyxNQUVSQzs7OztvQkF0Qk5SLG1CQUFBQSxZQUNBQyxZQUFBQSxLQUNBQyxpQkFBQUEsVUFDQUMsZ0JBQUFBLFNBQ0FDLFlBQUFBO29CQUVxQjs7d0JBQU1ELFFBQVFNLElBQUksQ0FBQzs0QkFDdENULFlBQVlBLFdBQVdVLElBQUk7NEJBQzNCQyxPQUFPOzRCQUNQQyxPQUFPO2dDQUNMQyxPQUFPO29DQUNMQyxRQUFRYixJQUFJWSxLQUFLO2dDQUNuQjs0QkFDRjt3QkFDRjs7O29CQVJNUixlQUFlO29CQVVyQixJQUFJQSxhQUFhVSxJQUFJLENBQUNDLE1BQU0sR0FBRyxHQUFHO3dCQUNoQyxNQUFNLElBQUluQjs0QkFBaUI7Z0NBQUVvQixTQUFTO2dDQUFxREMsT0FBTzs0QkFBUTs7b0JBQzVHO29CQUV1Qjs7d0JBQU1wQix5QkFBeUI7NEJBQUVJLFVBQUFBO3dCQUFTOzs7b0JBQTFDLE9BQUEsZUFBZkksT0FBZSxLQUFmQSxNQUFNQyxPQUFTLEtBQVRBO29CQUVSQyxlQUFlLG1CQUFLUDtvQkFDMUIsSUFBSU8sYUFBYU4sUUFBUSxFQUFFLE9BQU9NLGFBQWFOLFFBQVE7b0JBRXZEOzt3QkFBT0MsUUFBUWdCLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDOzRCQUN2QnBCLFlBQVlBLFdBQVdVLElBQUk7NEJBQzNCVyxNQUFNLHdDQUNEYjtnQ0FDSEYsTUFBQUE7Z0NBQ0FDLE1BQUFBOzs0QkFFRkgsS0FBQUE7d0JBQ0Y7Ozs7SUFDRjtvQkFuQ2FMOzs7SUFtQ1gifQ==