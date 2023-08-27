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
import { docHasTimestamps } from "../types";
export var getLatestGlobalVersion = function() {
    var _ref = _async_to_generator(function(param) {
        var payload, config, slug, where, locale, req, _config_versions, latestVersion, global, globalExists;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = param.payload, config = param.config, slug = param.slug, where = param.where, locale = param.locale, req = param.req;
                    if (!((_config_versions = config.versions) === null || _config_versions === void 0 ? void 0 : _config_versions.drafts)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        payload.db.findGlobalVersions({
                            global: slug,
                            limit: 1,
                            sort: "-updatedAt",
                            locale: locale,
                            req: req
                        })
                    ];
                case 1:
                    // eslint-disable-next-line prefer-destructuring
                    latestVersion = _state.sent().docs[0];
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        payload.db.findGlobal({
                            slug: slug,
                            where: where,
                            locale: locale,
                            req: req
                        })
                    ];
                case 3:
                    global = _state.sent();
                    globalExists = Boolean(global);
                    if (!latestVersion || docHasTimestamps(global) && latestVersion.updatedAt < global.updatedAt) {
                        return [
                            2,
                            {
                                global: global,
                                globalExists: globalExists
                            }
                        ];
                    }
                    return [
                        2,
                        {
                            global: _object_spread_props(_object_spread({}, latestVersion.version), {
                                updatedAt: latestVersion.updatedAt,
                                createdAt: latestVersion.createdAt
                            }),
                            globalExists: globalExists
                        }
                    ];
            }
        });
    });
    return function getLatestGlobalVersion(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9nZXRMYXRlc3RHbG9iYWxWZXJzaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcbmltcG9ydCB7IGRvY0hhc1RpbWVzdGFtcHMsIERvY3VtZW50LCBQYXlsb2FkUmVxdWVzdCwgV2hlcmUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgcGF5bG9hZDogUGF5bG9hZFxuICB3aGVyZTogV2hlcmVcbiAgc2x1Zzogc3RyaW5nXG4gIGNvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG4gIGxvY2FsZT86IHN0cmluZ1xuICByZXE/OiBQYXlsb2FkUmVxdWVzdFxufVxuXG5leHBvcnQgY29uc3QgZ2V0TGF0ZXN0R2xvYmFsVmVyc2lvbiA9IGFzeW5jICh7XG4gIHBheWxvYWQsXG4gIGNvbmZpZyxcbiAgc2x1ZyxcbiAgd2hlcmUsXG4gIGxvY2FsZSxcbiAgcmVxLFxufTogQXJncyk6IFByb21pc2U8e2dsb2JhbDogRG9jdW1lbnQsIGdsb2JhbEV4aXN0czogYm9vbGVhbn0+ID0+IHtcbiAgbGV0IGxhdGVzdFZlcnNpb247XG5cbiAgaWYgKGNvbmZpZy52ZXJzaW9ucz8uZHJhZnRzKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgbGF0ZXN0VmVyc2lvbiA9IChhd2FpdCBwYXlsb2FkLmRiLmZpbmRHbG9iYWxWZXJzaW9ucyh7XG4gICAgICBnbG9iYWw6IHNsdWcsXG4gICAgICBsaW1pdDogMSxcbiAgICAgIHNvcnQ6ICctdXBkYXRlZEF0JyxcbiAgICAgIGxvY2FsZSxcbiAgICAgIHJlcSxcbiAgICB9KSkuZG9jc1swXTtcbiAgfVxuXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IHBheWxvYWQuZGIuZmluZEdsb2JhbCh7XG4gICAgc2x1ZyxcbiAgICB3aGVyZSxcbiAgICBsb2NhbGUsXG4gICAgcmVxLFxuICB9KTtcbiAgY29uc3QgZ2xvYmFsRXhpc3RzID0gQm9vbGVhbihnbG9iYWwpO1xuXG4gIGlmICghbGF0ZXN0VmVyc2lvbiB8fCAoZG9jSGFzVGltZXN0YW1wcyhnbG9iYWwpICYmIGxhdGVzdFZlcnNpb24udXBkYXRlZEF0IDwgZ2xvYmFsLnVwZGF0ZWRBdCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2xvYmFsLFxuICAgICAgZ2xvYmFsRXhpc3RzLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdsb2JhbDoge1xuICAgICAgLi4ubGF0ZXN0VmVyc2lvbi52ZXJzaW9uLFxuICAgICAgdXBkYXRlZEF0OiBsYXRlc3RWZXJzaW9uLnVwZGF0ZWRBdCxcbiAgICAgIGNyZWF0ZWRBdDogbGF0ZXN0VmVyc2lvbi5jcmVhdGVkQXQsXG4gICAgfSxcbiAgICBnbG9iYWxFeGlzdHMsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImRvY0hhc1RpbWVzdGFtcHMiLCJnZXRMYXRlc3RHbG9iYWxWZXJzaW9uIiwicGF5bG9hZCIsImNvbmZpZyIsInNsdWciLCJ3aGVyZSIsImxvY2FsZSIsInJlcSIsImxhdGVzdFZlcnNpb24iLCJnbG9iYWwiLCJnbG9iYWxFeGlzdHMiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImRiIiwiZmluZEdsb2JhbFZlcnNpb25zIiwibGltaXQiLCJzb3J0IiwiZG9jcyIsImZpbmRHbG9iYWwiLCJCb29sZWFuIiwidXBkYXRlZEF0IiwidmVyc2lvbiIsImNyZWF0ZWRBdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxTQUFTQSxnQkFBZ0IsUUFBeUMsV0FBVztBQVk3RSxPQUFPLElBQU1DO2VBQXlCLG9CQUFBO1lBQ3BDQyxTQUNBQyxRQUNBQyxNQUNBQyxPQUNBQyxRQUNBQyxLQUlJSixrQkFGQUssZUFhRUMsUUFNQUM7Ozs7b0JBMUJOUixnQkFBQUEsU0FDQUMsZUFBQUEsUUFDQUMsYUFBQUEsTUFDQUMsY0FBQUEsT0FDQUMsZUFBQUEsUUFDQUMsWUFBQUE7MkJBSUlKLG1CQUFBQSxPQUFPUSxRQUFRLGNBQWZSLHVDQUFBQSxpQkFBaUJTLE1BQU07Ozs7b0JBRVI7O3dCQUFNVixRQUFRVyxFQUFFLENBQUNDLGtCQUFrQixDQUFDOzRCQUNuREwsUUFBUUw7NEJBQ1JXLE9BQU87NEJBQ1BDLE1BQU07NEJBQ05WLFFBQUFBOzRCQUNBQyxLQUFBQTt3QkFDRjs7O29CQVBBLGdEQUFnRDtvQkFDaERDLGdCQUFnQixBQUFDLGNBTWJTLElBQUksQ0FBQyxFQUFFOzs7b0JBR0U7O3dCQUFNZixRQUFRVyxFQUFFLENBQUNLLFVBQVUsQ0FBQzs0QkFDekNkLE1BQUFBOzRCQUNBQyxPQUFBQTs0QkFDQUMsUUFBQUE7NEJBQ0FDLEtBQUFBO3dCQUNGOzs7b0JBTE1FLFNBQVM7b0JBTVRDLGVBQWVTLFFBQVFWO29CQUU3QixJQUFJLENBQUNELGlCQUFrQlIsaUJBQWlCUyxXQUFXRCxjQUFjWSxTQUFTLEdBQUdYLE9BQU9XLFNBQVMsRUFBRzt3QkFDOUY7OzRCQUFPO2dDQUNMWCxRQUFBQTtnQ0FDQUMsY0FBQUE7NEJBQ0Y7O29CQUNGO29CQUVBOzt3QkFBTzs0QkFDTEQsUUFBUSx3Q0FDSEQsY0FBY2EsT0FBTztnQ0FDeEJELFdBQVdaLGNBQWNZLFNBQVM7Z0NBQ2xDRSxXQUFXZCxjQUFjYyxTQUFTOzs0QkFFcENaLGNBQUFBO3dCQUNGOzs7O0lBQ0Y7b0JBNUNhVDs7O0lBNENYIn0=