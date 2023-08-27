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
var _errors = require("../../errors");
var _initTransaction = require("../../utilities/initTransaction");
var _killTransaction = require("../../utilities/killTransaction");
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
function registerFirstUser(args) {
    return _registerFirstUser.apply(this, arguments);
}
function _registerFirstUser() {
    _registerFirstUser = _async_to_generator(function(args) {
        var _args_collection, config, _args_collection_config, slug, verify, payload, req, data, shouldCommit, doc, result, token, resultToReturn, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _args_collection = args.collection, config = _args_collection.config, _args_collection_config = _args_collection.config, slug = _args_collection_config.slug, verify = _args_collection_config.auth.verify, payload = args.req.payload, req = args.req, data = args.data;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        10,
                        ,
                        12
                    ]);
                    return [
                        4,
                        (0, _initTransaction.initTransaction)(req)
                    ];
                case 2:
                    shouldCommit = _state.sent();
                    return [
                        4,
                        payload.db.findOne({
                            collection: config.slug,
                            req: req
                        })
                    ];
                case 3:
                    doc = _state.sent();
                    if (doc) throw new _errors.Forbidden(req.t);
                    return [
                        4,
                        payload.create({
                            req: req,
                            collection: slug,
                            data: data,
                            overrideAccess: true
                        })
                    ];
                case 4:
                    result = _state.sent();
                    if (!verify) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        payload.update({
                            id: result.id,
                            collection: slug,
                            data: {
                                _verified: true
                            }
                        })
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        4,
                        payload.login(_object_spread_props(_object_spread({}, args), {
                            collection: slug
                        }))
                    ];
                case 7:
                    token = _state.sent().token;
                    resultToReturn = _object_spread_props(_object_spread({}, result), {
                        token: token
                    });
                    if (!shouldCommit) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        2,
                        {
                            message: "Registered and logged in successfully. Welcome!",
                            user: resultToReturn
                        }
                    ];
                case 10:
                    error = _state.sent();
                    return [
                        4,
                        (0, _killTransaction.killTransaction)(req)
                    ];
                case 11:
                    _state.sent();
                    throw error;
                case 12:
                    return [
                        2
                    ];
            }
        });
    });
    return _registerFirstUser.apply(this, arguments);
}
var _default = registerFirstUser;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvcmVnaXN0ZXJGaXJzdFVzZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IE1hcmtPcHRpb25hbCB9IGZyb20gJ3RzLWVzc2VudGlhbHMnO1xuaW1wb3J0IHsgRm9yYmlkZGVuIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5cbmV4cG9ydCB0eXBlIEFyZ3VtZW50czxUIGV4dGVuZHMgeyBbZmllbGQ6IHN0cmluZyB8IG51bWJlciB8IHN5bWJvbF06IHVua25vd24gfT4gPSB7XG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgZGF0YTogTWFya09wdGlvbmFsPFQsICdpZCcgfCAndXBkYXRlZEF0JyB8ICdjcmVhdGVkQXQnIHwgJ3NpemVzJz4gJiB7XG4gICAgZW1haWw6IHN0cmluZ1xuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgfVxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHJlczogUmVzcG9uc2Vcbn1cblxuZXhwb3J0IHR5cGUgUmVzdWx0PFQ+ID0ge1xuICBtZXNzYWdlOiBzdHJpbmcsXG4gIHVzZXI6IFRcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJGaXJzdFVzZXI8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXT4oXG4gIGFyZ3M6IEFyZ3VtZW50czxHZW5lcmF0ZWRUeXBlc1snY29sbGVjdGlvbnMnXVtUU2x1Z10+LFxuKTogUHJvbWlzZTxSZXN1bHQ8R2VuZXJhdGVkVHlwZXNbJ2NvbGxlY3Rpb25zJ11bVFNsdWddPj4ge1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbjoge1xuICAgICAgY29uZmlnLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIHNsdWcsXG4gICAgICAgIGF1dGg6IHtcbiAgICAgICAgICB2ZXJpZnksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVxOiB7XG4gICAgICBwYXlsb2FkLFxuICAgIH0sXG4gICAgcmVxLFxuICAgIGRhdGEsXG4gIH0gPSBhcmdzO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSk7XG5cbiAgICBjb25zdCBkb2MgPSBhd2FpdCBwYXlsb2FkLmRiLmZpbmRPbmUoe1xuICAgICAgY29sbGVjdGlvbjogY29uZmlnLnNsdWcsXG4gICAgICByZXEsXG4gICAgfSk7XG5cbiAgICBpZiAoZG9jKSB0aHJvdyBuZXcgRm9yYmlkZGVuKHJlcS50KTtcblxuICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBSZWdpc3RlciBmaXJzdCB1c2VyXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGF5bG9hZC5jcmVhdGU8VFNsdWc+KHtcbiAgICAgIHJlcSxcbiAgICAgIGNvbGxlY3Rpb246IHNsdWcgYXMgVFNsdWcsXG4gICAgICBkYXRhLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3M6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBhdXRvLXZlcmlmeSAoaWYgYXBwbGljYWJsZSlcbiAgICBpZiAodmVyaWZ5KSB7XG4gICAgICBhd2FpdCBwYXlsb2FkLnVwZGF0ZSh7XG4gICAgICAgIGlkOiByZXN1bHQuaWQsXG4gICAgICAgIGNvbGxlY3Rpb246IHNsdWcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBfdmVyaWZpZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gTG9nIGluIG5ldyB1c2VyXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gYXdhaXQgcGF5bG9hZC5sb2dpbih7XG4gICAgICAuLi5hcmdzLFxuICAgICAgY29sbGVjdGlvbjogc2x1ZyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlc3VsdFRvUmV0dXJuID0ge1xuICAgICAgLi4ucmVzdWx0LFxuICAgICAgdG9rZW4sXG4gICAgfTtcblxuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICdSZWdpc3RlcmVkIGFuZCBsb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5LiBXZWxjb21lIScsXG4gICAgICB1c2VyOiByZXN1bHRUb1JldHVybixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdGVyRmlyc3RVc2VyO1xuIl0sIm5hbWVzIjpbInJlZ2lzdGVyRmlyc3RVc2VyIiwiYXJncyIsImNvbmZpZyIsInNsdWciLCJ2ZXJpZnkiLCJwYXlsb2FkIiwicmVxIiwiZGF0YSIsInNob3VsZENvbW1pdCIsImRvYyIsInJlc3VsdCIsInRva2VuIiwicmVzdWx0VG9SZXR1cm4iLCJlcnJvciIsImNvbGxlY3Rpb24iLCJhdXRoIiwiaW5pdFRyYW5zYWN0aW9uIiwiZGIiLCJmaW5kT25lIiwiRm9yYmlkZGVuIiwidCIsImNyZWF0ZSIsIm92ZXJyaWRlQWNjZXNzIiwidXBkYXRlIiwiaWQiLCJfdmVyaWZpZWQiLCJsb2dpbiIsImNvbW1pdFRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25JRCIsIm1lc3NhZ2UiLCJ1c2VyIiwia2lsbFRyYW5zYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQXNHQTs7O2VBQUE7OztzQkFuRzBCOytCQUdNOytCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FpQmpCQSxrQkFDYkMsSUFBcUQ7V0FEeENEOztTQUFBQTtJQUFBQSxxQkFBZixvQkFBQSxTQUNFQyxJQUFxRDs4QkFJakRDLGlDQUVFQyxNQUVFQyxRQUtKQyxTQUVGQyxLQUNBQyxNQUlNQyxjQUVBQyxLQVdBQyxRQXNCRUMsT0FLRkMsZ0JBV0NDOzs7O3VDQXRETFosS0FkRmEsWUFDRVosMEJBQUFBLG1EQUNBQSxRQUNFQywrQkFBQUEsTUFFRUMsaUNBREZXLEtBQ0VYLFFBS0pDLFVBSUFKLEtBTEZLLElBQ0VELFNBRUZDLE1BRUVMLEtBRkZLLEtBQ0FDLE9BQ0VOLEtBREZNOzs7Ozs7Ozs7b0JBSXFCOzt3QkFBTVMsSUFBQUEsZ0NBQWUsRUFBQ1Y7OztvQkFBckNFLGVBQWU7b0JBRVQ7O3dCQUFNSCxRQUFRWSxFQUFFLENBQUNDLE9BQU8sQ0FBQzs0QkFDbkNKLFlBQVlaLE9BQU9DLElBQUk7NEJBQ3ZCRyxLQUFBQTt3QkFDRjs7O29CQUhNRyxNQUFNO29CQUtaLElBQUlBLEtBQUssTUFBTSxJQUFJVSxpQkFBUyxDQUFDYixJQUFJYyxDQUFDO29CQU1uQjs7d0JBQU1mLFFBQVFnQixNQUFNLENBQVE7NEJBQ3pDZixLQUFBQTs0QkFDQVEsWUFBWVg7NEJBQ1pJLE1BQUFBOzRCQUNBZSxnQkFBZ0I7d0JBQ2xCOzs7b0JBTE1aLFNBQVM7eUJBUVhOLFFBQUFBOzs7O29CQUNGOzt3QkFBTUMsUUFBUWtCLE1BQU0sQ0FBQzs0QkFDbkJDLElBQUlkLE9BQU9jLEVBQUU7NEJBQ2JWLFlBQVlYOzRCQUNaSSxNQUFNO2dDQUNKa0IsV0FBVzs0QkFDYjt3QkFDRjs7O29CQU5BOzs7b0JBYWdCOzt3QkFBTXBCLFFBQVFxQixLQUFLLENBQUMsd0NBQ2pDekI7NEJBQ0hhLFlBQVlYOzs7O29CQUZOUSxRQUFVLGNBQVZBO29CQUtGQyxpQkFBaUIsd0NBQ2xCRjt3QkFDSEMsT0FBQUE7O3lCQUdFSCxjQUFBQTs7OztvQkFBYzs7d0JBQU1ILFFBQVFZLEVBQUUsQ0FBQ1UsaUJBQWlCLENBQUNyQixJQUFJc0IsYUFBYTs7O29CQUFwRDs7O29CQUVsQjs7d0JBQU87NEJBQ0xDLFNBQVM7NEJBQ1RDLE1BQU1sQjt3QkFDUjs7O29CQUNPQztvQkFDUDs7d0JBQU1rQixJQUFBQSxnQ0FBZSxFQUFDekI7OztvQkFBdEI7b0JBQ0EsTUFBTU87Ozs7Ozs7SUFFVjtXQTVFZWI7O0lBOEVmLFdBQWVBIn0=