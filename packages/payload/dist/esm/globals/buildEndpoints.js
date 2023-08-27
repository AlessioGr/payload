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
import findVersions from "./requestHandlers/findVersions";
import findVersionByID from "./requestHandlers/findVersionByID";
import restoreVersion from "./requestHandlers/restoreVersion";
import update from "./requestHandlers/update";
import findOne from "./requestHandlers/findOne";
import docAccessRequestHandler from "./requestHandlers/docAccess";
var buildEndpoints = function(global) {
    if (!global.endpoints) return [];
    var endpoints = _to_consumable_array(global.endpoints);
    if (global.versions) {
        endpoints.push({
            path: "/versions",
            method: "get",
            handler: findVersions(global)
        }, {
            path: "/versions/:id",
            method: "get",
            handler: findVersionByID(global)
        }, {
            path: "/versions/:id",
            method: "post",
            handler: restoreVersion(global)
        });
    }
    endpoints.push({
        path: "/access",
        method: "get",
        handler: function() {
            var _ref = _async_to_generator(function(req, res, next) {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        docAccessRequestHandler(req, res, next, global)
                    ];
                });
            });
            return function(req, res, next) {
                return _ref.apply(this, arguments);
            };
        }()
    }, {
        path: "/",
        method: "get",
        handler: findOne(global)
    }, {
        path: "/",
        method: "post",
        handler: update(global)
    });
    return endpoints;
};
export default buildEndpoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL2J1aWxkRW5kcG9pbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZHBvaW50IH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25zJztcbmltcG9ydCBmaW5kVmVyc2lvbkJ5SUQgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9yZXN0b3JlVmVyc2lvbic7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL3VwZGF0ZSc7XG5pbXBvcnQgZmluZE9uZSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9maW5kT25lJztcbmltcG9ydCBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlciBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9kb2NBY2Nlc3MnO1xuXG5jb25zdCBidWlsZEVuZHBvaW50cyA9IChnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZyk6IEVuZHBvaW50W10gPT4ge1xuICBpZiAoIWdsb2JhbC5lbmRwb2ludHMpIHJldHVybiBbXTtcbiAgY29uc3QgZW5kcG9pbnRzID0gWy4uLmdsb2JhbC5lbmRwb2ludHNdO1xuXG4gIGlmIChnbG9iYWwudmVyc2lvbnMpIHtcbiAgICBlbmRwb2ludHMucHVzaChcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucycsXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIGhhbmRsZXI6IGZpbmRWZXJzaW9ucyhnbG9iYWwpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy92ZXJzaW9ucy86aWQnLFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICBoYW5kbGVyOiBmaW5kVmVyc2lvbkJ5SUQoZ2xvYmFsKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvdmVyc2lvbnMvOmlkJyxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIGhhbmRsZXI6IHJlc3RvcmVWZXJzaW9uKGdsb2JhbCksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBlbmRwb2ludHMucHVzaChcbiAgICB7XG4gICAgICBwYXRoOiAnL2FjY2VzcycsXG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgaGFuZGxlcjogYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiBkb2NBY2Nlc3NSZXF1ZXN0SGFuZGxlcihyZXEsIHJlcywgbmV4dCwgZ2xvYmFsKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICBoYW5kbGVyOiBmaW5kT25lKGdsb2JhbCksXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGhhbmRsZXI6IHVwZGF0ZShnbG9iYWwpLFxuICAgIH0sXG4gICk7XG5cbiAgcmV0dXJuIGVuZHBvaW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRW5kcG9pbnRzO1xuIl0sIm5hbWVzIjpbImZpbmRWZXJzaW9ucyIsImZpbmRWZXJzaW9uQnlJRCIsInJlc3RvcmVWZXJzaW9uIiwidXBkYXRlIiwiZmluZE9uZSIsImRvY0FjY2Vzc1JlcXVlc3RIYW5kbGVyIiwiYnVpbGRFbmRwb2ludHMiLCJnbG9iYWwiLCJlbmRwb2ludHMiLCJ2ZXJzaW9ucyIsInB1c2giLCJwYXRoIiwibWV0aG9kIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0Esa0JBQWtCLGlDQUFpQztBQUMxRCxPQUFPQyxxQkFBcUIsb0NBQW9DO0FBQ2hFLE9BQU9DLG9CQUFvQixtQ0FBbUM7QUFFOUQsT0FBT0MsWUFBWSwyQkFBMkI7QUFDOUMsT0FBT0MsYUFBYSw0QkFBNEI7QUFDaEQsT0FBT0MsNkJBQTZCLDhCQUE4QjtBQUVsRSxJQUFNQyxpQkFBaUIsU0FBQ0M7SUFDdEIsSUFBSSxDQUFDQSxPQUFPQyxTQUFTLEVBQUUsT0FBTyxFQUFFO0lBQ2hDLElBQU1BLFlBQWEscUJBQUdELE9BQU9DLFNBQVM7SUFFdEMsSUFBSUQsT0FBT0UsUUFBUSxFQUFFO1FBQ25CRCxVQUFVRSxJQUFJLENBQ1o7WUFDRUMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFNBQVNiLGFBQWFPO1FBQ3hCLEdBQ0E7WUFDRUksTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFNBQVNaLGdCQUFnQk07UUFDM0IsR0FDQTtZQUNFSSxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsU0FBU1gsZUFBZUs7UUFDMUI7SUFFSjtJQUVBQyxVQUFVRSxJQUFJLENBQ1o7UUFDRUMsTUFBTTtRQUNOQyxRQUFRO1FBQ1JDLE9BQU87dUJBQUUsb0JBQUEsU0FBT0MsS0FBS0MsS0FBS0M7O29CQUFTWDs7d0JBQUFBLHdCQUF3QlMsS0FBS0MsS0FBS0MsTUFBTVQ7Ozs7NEJBQTNETyxLQUFLQyxLQUFLQzs7OztJQUM1QixHQUNBO1FBQ0VMLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTVCxRQUFRRztJQUNuQixHQUNBO1FBQ0VJLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxTQUFTVixPQUFPSTtJQUNsQjtJQUdGLE9BQU9DO0FBQ1Q7QUFFQSxlQUFlRixlQUFlIn0=