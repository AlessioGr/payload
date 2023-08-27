function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
import { adminInit as adminInitTelemetry } from "../../utilities/telemetry/events/adminInit";
import { getEntityPolicies } from "../../utilities/getEntityPolicies";
var allOperations = [
    "create",
    "read",
    "update",
    "delete"
];
function accessOperation(args) {
    return _accessOperation.apply(this, arguments);
}
function _accessOperation() {
    _accessOperation = _async_to_generator(function(args) {
        var req, _args_req, user, config, results, isLoggedIn, userCollectionConfig, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req = args.req, _args_req = args.req, user = _args_req.user, config = _args_req.payload.config;
                    adminInitTelemetry(req);
                    results = {};
                    isLoggedIn = !!user;
                    userCollectionConfig = user && user.collection ? config.collections.find(function(collection) {
                        return collection.slug === user.collection;
                    }) : null;
                    if (!userCollectionConfig) return [
                        3,
                        4
                    ];
                    if (!userCollectionConfig.access.admin) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        userCollectionConfig.access.admin(args)
                    ];
                case 1:
                    _tmp = _state.sent();
                    return [
                        3,
                        3
                    ];
                case 2:
                    _tmp = isLoggedIn;
                    _state.label = 3;
                case 3:
                    results.canAccessAdmin = _tmp;
                    return [
                        3,
                        5
                    ];
                case 4:
                    results.canAccessAdmin = false;
                    _state.label = 5;
                case 5:
                    return [
                        4,
                        Promise.all(config.collections.map(function() {
                            var _ref = _async_to_generator(function(collection) {
                                var collectionOperations, collectionPolicy;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            collectionOperations = _to_consumable_array(allOperations);
                                            if (collection.auth && typeof collection.auth.maxLoginAttempts !== "undefined" && collection.auth.maxLoginAttempts !== 0) {
                                                collectionOperations.push("unlock");
                                            }
                                            if (collection.versions) {
                                                collectionOperations.push("readVersions");
                                            }
                                            return [
                                                4,
                                                getEntityPolicies({
                                                    type: "collection",
                                                    req: req,
                                                    entity: collection,
                                                    operations: collectionOperations
                                                })
                                            ];
                                        case 1:
                                            collectionPolicy = _state.sent();
                                            results.collections = _object_spread_props(_object_spread({}, results.collections), _define_property({}, collection.slug, collectionPolicy));
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(collection) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 6:
                    _state.sent();
                    return [
                        4,
                        Promise.all(config.globals.map(function() {
                            var _ref = _async_to_generator(function(global) {
                                var globalOperations, globalPolicy;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            globalOperations = [
                                                "read",
                                                "update"
                                            ];
                                            if (global.versions) {
                                                globalOperations.push("readVersions");
                                            }
                                            return [
                                                4,
                                                getEntityPolicies({
                                                    type: "global",
                                                    req: req,
                                                    entity: global,
                                                    operations: globalOperations
                                                })
                                            ];
                                        case 1:
                                            globalPolicy = _state.sent();
                                            results.globals = _object_spread_props(_object_spread({}, results.globals), _define_property({}, global.slug, globalPolicy));
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(global) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 7:
                    _state.sent();
                    return [
                        2,
                        results
                    ];
            }
        });
    });
    return _accessOperation.apply(this, arguments);
}
export default accessOperation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvYWNjZXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgUGVybWlzc2lvbnMgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IEFsbE9wZXJhdGlvbnMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBhZG1pbkluaXQgYXMgYWRtaW5Jbml0VGVsZW1ldHJ5IH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL3RlbGVtZXRyeS9ldmVudHMvYWRtaW5Jbml0JztcbmltcG9ydCB7IGdldEVudGl0eVBvbGljaWVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldEVudGl0eVBvbGljaWVzJztcblxuY29uc3QgYWxsT3BlcmF0aW9uczogQWxsT3BlcmF0aW9uc1tdID0gWydjcmVhdGUnLCAncmVhZCcsICd1cGRhdGUnLCAnZGVsZXRlJ107XG5cbnR5cGUgQXJndW1lbnRzID0ge1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFjY2Vzc09wZXJhdGlvbihhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPFBlcm1pc3Npb25zPiB7XG4gIGNvbnN0IHtcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICB1c2VyLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjb25maWcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0gPSBhcmdzO1xuXG4gIGFkbWluSW5pdFRlbGVtZXRyeShyZXEpO1xuXG4gIGNvbnN0IHJlc3VsdHMgPSB7fSBhcyBQZXJtaXNzaW9ucztcblxuICBjb25zdCBpc0xvZ2dlZEluID0gISEodXNlcik7XG4gIGNvbnN0IHVzZXJDb2xsZWN0aW9uQ29uZmlnID0gKHVzZXIgJiYgdXNlci5jb2xsZWN0aW9uKSA/IGNvbmZpZy5jb2xsZWN0aW9ucy5maW5kKChjb2xsZWN0aW9uKSA9PiBjb2xsZWN0aW9uLnNsdWcgPT09IHVzZXIuY29sbGVjdGlvbikgOiBudWxsO1xuXG4gIGlmICh1c2VyQ29sbGVjdGlvbkNvbmZpZykge1xuICAgIHJlc3VsdHMuY2FuQWNjZXNzQWRtaW4gPSB1c2VyQ29sbGVjdGlvbkNvbmZpZy5hY2Nlc3MuYWRtaW4gPyBhd2FpdCB1c2VyQ29sbGVjdGlvbkNvbmZpZy5hY2Nlc3MuYWRtaW4oYXJncykgOiBpc0xvZ2dlZEluO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdHMuY2FuQWNjZXNzQWRtaW4gPSBmYWxzZTtcbiAgfVxuXG4gIGF3YWl0IFByb21pc2UuYWxsKGNvbmZpZy5jb2xsZWN0aW9ucy5tYXAoYXN5bmMgKGNvbGxlY3Rpb24pID0+IHtcbiAgICBjb25zdCBjb2xsZWN0aW9uT3BlcmF0aW9ucyA9IFsuLi5hbGxPcGVyYXRpb25zXTtcblxuICAgIGlmIChjb2xsZWN0aW9uLmF1dGggJiYgKHR5cGVvZiBjb2xsZWN0aW9uLmF1dGgubWF4TG9naW5BdHRlbXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgY29sbGVjdGlvbi5hdXRoLm1heExvZ2luQXR0ZW1wdHMgIT09IDApKSB7XG4gICAgICBjb2xsZWN0aW9uT3BlcmF0aW9ucy5wdXNoKCd1bmxvY2snKTtcbiAgICB9XG5cbiAgICBpZiAoY29sbGVjdGlvbi52ZXJzaW9ucykge1xuICAgICAgY29sbGVjdGlvbk9wZXJhdGlvbnMucHVzaCgncmVhZFZlcnNpb25zJyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29sbGVjdGlvblBvbGljeSA9IGF3YWl0IGdldEVudGl0eVBvbGljaWVzKHtcbiAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgIHJlcSxcbiAgICAgIGVudGl0eTogY29sbGVjdGlvbixcbiAgICAgIG9wZXJhdGlvbnM6IGNvbGxlY3Rpb25PcGVyYXRpb25zLFxuICAgIH0pO1xuICAgIHJlc3VsdHMuY29sbGVjdGlvbnMgPSB7XG4gICAgICAuLi5yZXN1bHRzLmNvbGxlY3Rpb25zLFxuICAgICAgW2NvbGxlY3Rpb24uc2x1Z106IGNvbGxlY3Rpb25Qb2xpY3ksXG4gICAgfTtcbiAgfSkpO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKGNvbmZpZy5nbG9iYWxzLm1hcChhc3luYyAoZ2xvYmFsKSA9PiB7XG4gICAgY29uc3QgZ2xvYmFsT3BlcmF0aW9uczogQWxsT3BlcmF0aW9uc1tdID0gWydyZWFkJywgJ3VwZGF0ZSddO1xuXG4gICAgaWYgKGdsb2JhbC52ZXJzaW9ucykge1xuICAgICAgZ2xvYmFsT3BlcmF0aW9ucy5wdXNoKCdyZWFkVmVyc2lvbnMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBnbG9iYWxQb2xpY3kgPSBhd2FpdCBnZXRFbnRpdHlQb2xpY2llcyh7XG4gICAgICB0eXBlOiAnZ2xvYmFsJyxcbiAgICAgIHJlcSxcbiAgICAgIGVudGl0eTogZ2xvYmFsLFxuICAgICAgb3BlcmF0aW9uczogZ2xvYmFsT3BlcmF0aW9ucyxcbiAgICB9KTtcbiAgICByZXN1bHRzLmdsb2JhbHMgPSB7XG4gICAgICAuLi5yZXN1bHRzLmdsb2JhbHMsXG4gICAgICBbZ2xvYmFsLnNsdWddOiBnbG9iYWxQb2xpY3ksXG4gICAgfTtcbiAgfSkpO1xuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY2Nlc3NPcGVyYXRpb247XG4iXSwibmFtZXMiOlsiYWRtaW5Jbml0IiwiYWRtaW5Jbml0VGVsZW1ldHJ5IiwiZ2V0RW50aXR5UG9saWNpZXMiLCJhbGxPcGVyYXRpb25zIiwiYWNjZXNzT3BlcmF0aW9uIiwiYXJncyIsInJlcSIsInVzZXIiLCJjb25maWciLCJyZXN1bHRzIiwiaXNMb2dnZWRJbiIsInVzZXJDb2xsZWN0aW9uQ29uZmlnIiwicGF5bG9hZCIsImNvbGxlY3Rpb24iLCJjb2xsZWN0aW9ucyIsImZpbmQiLCJzbHVnIiwiYWNjZXNzIiwiYWRtaW4iLCJjYW5BY2Nlc3NBZG1pbiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjb2xsZWN0aW9uT3BlcmF0aW9ucyIsImNvbGxlY3Rpb25Qb2xpY3kiLCJhdXRoIiwibWF4TG9naW5BdHRlbXB0cyIsInB1c2giLCJ2ZXJzaW9ucyIsInR5cGUiLCJlbnRpdHkiLCJvcGVyYXRpb25zIiwiZ2xvYmFscyIsImdsb2JhbCIsImdsb2JhbE9wZXJhdGlvbnMiLCJnbG9iYWxQb2xpY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLFNBQVNBLGFBQWFDLGtCQUFrQixRQUFRLDZDQUE2QztBQUM3RixTQUFTQyxpQkFBaUIsUUFBUSxvQ0FBb0M7QUFFdEUsSUFBTUMsZ0JBQWlDO0lBQUM7SUFBVTtJQUFRO0lBQVU7Q0FBUztTQU05REMsZ0JBQWdCQyxJQUFlO1dBQS9CRDs7U0FBQUE7SUFBQUEsbUJBQWYsb0JBQUEsU0FBK0JDLElBQWU7WUFFMUNDLGdCQUVFQyxNQUVFQyxRQU9BQyxTQUVBQyxZQUNBQzs7OztvQkFkSkwsTUFPRUQsS0FQRkMsaUJBT0VELEtBTkZDLEtBQ0VDLGlCQUFBQSxNQUVFQyxtQkFERkksUUFDRUo7b0JBS05QLG1CQUFtQks7b0JBRWJHLFVBQVUsQ0FBQztvQkFFWEMsYUFBYSxDQUFDLENBQUVIO29CQUNoQkksdUJBQXVCLEFBQUNKLFFBQVFBLEtBQUtNLFVBQVUsR0FBSUwsT0FBT00sV0FBVyxDQUFDQyxJQUFJLENBQUMsU0FBQ0Y7K0JBQWVBLFdBQVdHLElBQUksS0FBS1QsS0FBS00sVUFBVTt5QkFBSTt5QkFFcElGLHNCQUFBQTs7Ozt5QkFDdUJBLHFCQUFxQk0sTUFBTSxDQUFDQyxLQUFLLEVBQWpDUDs7OztvQkFBb0M7O3dCQUFNQSxxQkFBcUJNLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDYjs7OzJCQUF4Qzs7Ozs7OzJCQUFnREs7OztvQkFBN0dELFFBQVFVLGNBQWM7Ozs7OztvQkFFdEJWLFFBQVFVLGNBQWMsR0FBRzs7O29CQUczQjs7d0JBQU1DLFFBQVFDLEdBQUcsQ0FBQ2IsT0FBT00sV0FBVyxDQUFDUSxHQUFHO3VDQUFDLG9CQUFBLFNBQU9UO29DQUN4Q1Usc0JBVUFDOzs7OzRDQVZBRCx1QkFBd0IscUJBQUdwQjs0Q0FFakMsSUFBSVUsV0FBV1ksSUFBSSxJQUFLLE9BQU9aLFdBQVdZLElBQUksQ0FBQ0MsZ0JBQWdCLEtBQUssZUFBZWIsV0FBV1ksSUFBSSxDQUFDQyxnQkFBZ0IsS0FBSyxHQUFJO2dEQUMxSEgscUJBQXFCSSxJQUFJLENBQUM7NENBQzVCOzRDQUVBLElBQUlkLFdBQVdlLFFBQVEsRUFBRTtnREFDdkJMLHFCQUFxQkksSUFBSSxDQUFDOzRDQUM1Qjs0Q0FFeUI7O2dEQUFNekIsa0JBQWtCO29EQUMvQzJCLE1BQU07b0RBQ052QixLQUFBQTtvREFDQXdCLFFBQVFqQjtvREFDUmtCLFlBQVlSO2dEQUNkOzs7NENBTE1DLG1CQUFtQjs0Q0FNekJmLFFBQVFLLFdBQVcsR0FBRyx3Q0FDakJMLFFBQVFLLFdBQVcsR0FDdEIscUJBQUNELFdBQVdHLElBQUksRUFBR1E7Ozs7Ozs0QkFFdkI7NENBckJnRFg7Ozs7OztvQkFBaEQ7b0JBdUJBOzt3QkFBTU8sUUFBUUMsR0FBRyxDQUFDYixPQUFPd0IsT0FBTyxDQUFDVixHQUFHO3VDQUFDLG9CQUFBLFNBQU9XO29DQUNwQ0Msa0JBTUFDOzs7OzRDQU5BRDtnREFBcUM7Z0RBQVE7OzRDQUVuRCxJQUFJRCxPQUFPTCxRQUFRLEVBQUU7Z0RBQ25CTSxpQkFBaUJQLElBQUksQ0FBQzs0Q0FDeEI7NENBRXFCOztnREFBTXpCLGtCQUFrQjtvREFDM0MyQixNQUFNO29EQUNOdkIsS0FBQUE7b0RBQ0F3QixRQUFRRztvREFDUkYsWUFBWUc7Z0RBQ2Q7Ozs0Q0FMTUMsZUFBZTs0Q0FNckIxQixRQUFRdUIsT0FBTyxHQUFHLHdDQUNidkIsUUFBUXVCLE9BQU8sR0FDbEIscUJBQUNDLE9BQU9qQixJQUFJLEVBQUdtQjs7Ozs7OzRCQUVuQjs0Q0FqQjRDRjs7Ozs7O29CQUE1QztvQkFtQkE7O3dCQUFPeEI7Ozs7SUFDVDtXQW5FZUw7O0FBcUVmLGVBQWVBLGdCQUFnQiJ9