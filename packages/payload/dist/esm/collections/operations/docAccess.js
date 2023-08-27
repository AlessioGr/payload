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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
import { getEntityPolicies } from "../../utilities/getEntityPolicies";
var allOperations = [
    "create",
    "read",
    "update",
    "delete"
];
export function docAccess(args) {
    return _docAccess.apply(this, arguments);
}
function _docAccess() {
    _docAccess = _async_to_generator(function(args) {
        var id, req, _args_req, config, collectionOperations;
        return _ts_generator(this, function(_state) {
            id = args.id, req = args.req, _args_req = args.req, config = _args_req.collection.config;
            collectionOperations = _to_consumable_array(allOperations);
            if (config.auth && typeof config.auth.maxLoginAttempts !== "undefined" && config.auth.maxLoginAttempts !== 0) {
                collectionOperations.push("unlock");
            }
            if (config.versions) {
                collectionOperations.push("readVersions");
            }
            return [
                2,
                getEntityPolicies({
                    type: "collection",
                    req: req,
                    entity: config,
                    operations: collectionOperations,
                    id: id
                })
            ];
        });
    });
    return _docAccess.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2RvY0FjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGxPcGVyYXRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvblBlcm1pc3Npb24gfSBmcm9tICcuLi8uLi9hdXRoJztcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IGdldEVudGl0eVBvbGljaWVzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2dldEVudGl0eVBvbGljaWVzJztcblxuY29uc3QgYWxsT3BlcmF0aW9uczogQWxsT3BlcmF0aW9uc1tdID0gWydjcmVhdGUnLCAncmVhZCcsICd1cGRhdGUnLCAnZGVsZXRlJ107XG5cbnR5cGUgQXJndW1lbnRzID0ge1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIGlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvY0FjY2VzcyhhcmdzOiBBcmd1bWVudHMpOiBQcm9taXNlPENvbGxlY3Rpb25QZXJtaXNzaW9uPiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICBjb2xsZWN0aW9uOiB7XG4gICAgICAgIGNvbmZpZyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IGFyZ3M7XG5cbiAgY29uc3QgY29sbGVjdGlvbk9wZXJhdGlvbnMgPSBbLi4uYWxsT3BlcmF0aW9uc107XG5cbiAgaWYgKGNvbmZpZy5hdXRoICYmICh0eXBlb2YgY29uZmlnLmF1dGgubWF4TG9naW5BdHRlbXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uZmlnLmF1dGgubWF4TG9naW5BdHRlbXB0cyAhPT0gMCkpIHtcbiAgICBjb2xsZWN0aW9uT3BlcmF0aW9ucy5wdXNoKCd1bmxvY2snKTtcbiAgfVxuXG4gIGlmIChjb25maWcudmVyc2lvbnMpIHtcbiAgICBjb2xsZWN0aW9uT3BlcmF0aW9ucy5wdXNoKCdyZWFkVmVyc2lvbnMnKTtcbiAgfVxuXG4gIHJldHVybiBnZXRFbnRpdHlQb2xpY2llcyh7XG4gICAgdHlwZTogJ2NvbGxlY3Rpb24nLFxuICAgIHJlcSxcbiAgICBlbnRpdHk6IGNvbmZpZyxcbiAgICBvcGVyYXRpb25zOiBjb2xsZWN0aW9uT3BlcmF0aW9ucyxcbiAgICBpZCxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZ2V0RW50aXR5UG9saWNpZXMiLCJhbGxPcGVyYXRpb25zIiwiZG9jQWNjZXNzIiwiYXJncyIsImlkIiwicmVxIiwiY29uZmlnIiwiY29sbGVjdGlvbk9wZXJhdGlvbnMiLCJjb2xsZWN0aW9uIiwiYXV0aCIsIm1heExvZ2luQXR0ZW1wdHMiLCJwdXNoIiwidmVyc2lvbnMiLCJ0eXBlIiwiZW50aXR5Iiwib3BlcmF0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxTQUFTQSxpQkFBaUIsUUFBUSxvQ0FBb0M7QUFFdEUsSUFBTUMsZ0JBQWlDO0lBQUM7SUFBVTtJQUFRO0lBQVU7Q0FBUztBQU83RSxnQkFBc0JDLFVBQVVDLElBQWU7V0FBekJEOztTQUFBQTtJQUFBQSxhQUFmLG9CQUFBLFNBQXlCQyxJQUFlO1lBRTNDQyxJQUNBQyxnQkFHSUMsUUFLQUM7O1lBVEpILEtBT0VELEtBUEZDLElBQ0FDLE1BTUVGLEtBTkZFLGlCQU1FRixLQUxGRSxLQUVJQyxtQkFERkUsV0FDRUY7WUFLQUMsdUJBQXdCLHFCQUFHTjtZQUVqQyxJQUFJSyxPQUFPRyxJQUFJLElBQUssT0FBT0gsT0FBT0csSUFBSSxDQUFDQyxnQkFBZ0IsS0FBSyxlQUFlSixPQUFPRyxJQUFJLENBQUNDLGdCQUFnQixLQUFLLEdBQUk7Z0JBQzlHSCxxQkFBcUJJLElBQUksQ0FBQztZQUM1QjtZQUVBLElBQUlMLE9BQU9NLFFBQVEsRUFBRTtnQkFDbkJMLHFCQUFxQkksSUFBSSxDQUFDO1lBQzVCO1lBRUE7O2dCQUFPWCxrQkFBa0I7b0JBQ3ZCYSxNQUFNO29CQUNOUixLQUFBQTtvQkFDQVMsUUFBUVI7b0JBQ1JTLFlBQVlSO29CQUNaSCxJQUFBQTtnQkFDRjs7O0lBQ0Y7V0E1QnNCRiJ9