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
var _defaultAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/defaultAccess"));
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _UnathorizedError = /*#__PURE__*/ _interop_require_default(require("../../errors/UnathorizedError"));
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
function update(args) {
    return _update.apply(this, arguments);
}
function _update() {
    _update = _async_to_generator(function(args) {
        var overrideAccess, user, req, payload, key, value, collection, filter, preference, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    overrideAccess = args.overrideAccess, user = args.user, req = args.req, payload = args.req.payload, key = args.key, value = args.value;
                    collection = "payload-preferences";
                    filter = {
                        key: {
                            equals: key
                        },
                        "user.value": {
                            equals: user.id
                        },
                        "user.relationTo": {
                            equals: user.collection
                        }
                    };
                    preference = {
                        key: key,
                        value: value,
                        user: {
                            value: user.id,
                            relationTo: user.collection
                        }
                    };
                    if (!user) {
                        throw new _UnathorizedError.default(req.t);
                    }
                    if (!!overrideAccess) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        (0, _executeAccess.default)({
                            req: req
                        }, _defaultAccess.default)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        6
                    ]);
                    return [
                        4,
                        payload.db.create({
                            collection: collection,
                            data: preference,
                            req: req
                        })
                    ];
                case 3:
                    _state.sent();
                    return [
                        3,
                        6
                    ];
                case 4:
                    err = _state.sent();
                    return [
                        4,
                        payload.db.updateOne({
                            collection: collection,
                            where: filter,
                            data: preference,
                            req: req
                        })
                    ];
                case 5:
                    _state.sent();
                    return [
                        3,
                        6
                    ];
                case 6:
                    return [
                        2,
                        preference
                    ];
            }
        });
    });
    return _update.apply(this, arguments);
}
var _default = update;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9vcGVyYXRpb25zL3VwZGF0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmVmZXJlbmNlVXBkYXRlUmVxdWVzdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBkZWZhdWx0QWNjZXNzIGZyb20gJy4uLy4uL2F1dGgvZGVmYXVsdEFjY2Vzcyc7XG5pbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2V4ZWN1dGVBY2Nlc3MnO1xuaW1wb3J0IFVuYXV0aG9yaXplZEVycm9yIGZyb20gJy4uLy4uL2Vycm9ycy9VbmF0aG9yaXplZEVycm9yJztcblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlKGFyZ3M6IFByZWZlcmVuY2VVcGRhdGVSZXF1ZXN0KSB7XG4gIGNvbnN0IHtcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICB1c2VyLFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIHBheWxvYWQsXG4gICAgfSxcbiAgICBrZXksXG4gICAgdmFsdWUsXG4gIH0gPSBhcmdzO1xuXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSAncGF5bG9hZC1wcmVmZXJlbmNlcyc7XG5cbiAgY29uc3QgZmlsdGVyID0ge1xuICAgIGtleTogeyBlcXVhbHM6IGtleSB9LFxuICAgICd1c2VyLnZhbHVlJzogeyBlcXVhbHM6IHVzZXIuaWQgfSxcbiAgICAndXNlci5yZWxhdGlvblRvJzogeyBlcXVhbHM6IHVzZXIuY29sbGVjdGlvbiB9LFxuICB9O1xuXG4gIGNvbnN0IHByZWZlcmVuY2UgPSB7XG4gICAga2V5LFxuICAgIHZhbHVlLFxuICAgIHVzZXI6IHtcbiAgICAgIHZhbHVlOiB1c2VyLmlkLFxuICAgICAgcmVsYXRpb25UbzogdXNlci5jb2xsZWN0aW9uLFxuICAgIH0sXG4gIH07XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgdGhyb3cgbmV3IFVuYXV0aG9yaXplZEVycm9yKHJlcS50KTtcbiAgfVxuXG4gIGlmICghb3ZlcnJpZGVBY2Nlc3MpIHtcbiAgICBhd2FpdCBleGVjdXRlQWNjZXNzKHsgcmVxIH0sIGRlZmF1bHRBY2Nlc3MpO1xuICB9XG5cbiAgLy8gVE9ETzogd29ya2Fyb3VuZCB0byBwcmV2ZW50IHJhY2UtY29uZGl0aW9ucyA1MDAgZXJyb3JzIGZyb20gdmlvbGF0aW5nIHVuaXF1ZSBjb25zdHJhaW50c1xuICB0cnkge1xuICAgIGF3YWl0IHBheWxvYWQuZGIuY3JlYXRlKHtcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBkYXRhOiBwcmVmZXJlbmNlLFxuICAgICAgcmVxLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnI6IHVua25vd24pIHtcbiAgICBhd2FpdCBwYXlsb2FkLmRiLnVwZGF0ZU9uZSh7XG4gICAgICBjb2xsZWN0aW9uLFxuICAgICAgd2hlcmU6IGZpbHRlcixcbiAgICAgIGRhdGE6IHByZWZlcmVuY2UsXG4gICAgICByZXEsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcHJlZmVyZW5jZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlO1xuIl0sIm5hbWVzIjpbInVwZGF0ZSIsImFyZ3MiLCJvdmVycmlkZUFjY2VzcyIsInVzZXIiLCJyZXEiLCJwYXlsb2FkIiwia2V5IiwidmFsdWUiLCJjb2xsZWN0aW9uIiwiZmlsdGVyIiwicHJlZmVyZW5jZSIsImVyciIsImVxdWFscyIsImlkIiwicmVsYXRpb25UbyIsIlVuYXV0aG9yaXplZEVycm9yIiwidCIsImV4ZWN1dGVBY2Nlc3MiLCJkZWZhdWx0QWNjZXNzIiwiZGIiLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlT25lIiwid2hlcmUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBNkRBOzs7ZUFBQTs7O29FQTVEMEI7b0VBQ0E7dUVBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFZkEsT0FBT0MsSUFBNkI7V0FBcENEOztTQUFBQTtJQUFBQSxVQUFmLG9CQUFBLFNBQXNCQyxJQUE2QjtZQUUvQ0MsZ0JBQ0FDLE1BQ0FDLEtBRUVDLFNBRUZDLEtBQ0FDLE9BR0lDLFlBRUFDLFFBTUFDLFlBd0JHQzs7OztvQkExQ1BULGlCQVFFRCxLQVJGQyxnQkFDQUMsT0FPRUYsS0FQRkUsTUFDQUMsTUFNRUgsS0FORkcsS0FFRUMsVUFJQUosS0FMRkcsSUFDRUMsU0FFRkMsTUFFRUwsS0FGRkssS0FDQUMsUUFDRU4sS0FERk07b0JBR0lDLGFBQWE7b0JBRWJDLFNBQVM7d0JBQ2JILEtBQUs7NEJBQUVNLFFBQVFOO3dCQUFJO3dCQUNuQixjQUFjOzRCQUFFTSxRQUFRVCxLQUFLVSxFQUFFO3dCQUFDO3dCQUNoQyxtQkFBbUI7NEJBQUVELFFBQVFULEtBQUtLLFVBQVU7d0JBQUM7b0JBQy9DO29CQUVNRSxhQUFhO3dCQUNqQkosS0FBQUE7d0JBQ0FDLE9BQUFBO3dCQUNBSixNQUFNOzRCQUNKSSxPQUFPSixLQUFLVSxFQUFFOzRCQUNkQyxZQUFZWCxLQUFLSyxVQUFVO3dCQUM3QjtvQkFDRjtvQkFFQSxJQUFJLENBQUNMLE1BQU07d0JBQ1QsTUFBTSxJQUFJWSx5QkFBaUIsQ0FBQ1gsSUFBSVksQ0FBQztvQkFDbkM7eUJBRUksQ0FBQ2QsZ0JBQUQ7Ozs7b0JBQ0Y7O3dCQUFNZSxJQUFBQSxzQkFBYSxFQUFDOzRCQUFFYixLQUFBQTt3QkFBSSxHQUFHYyxzQkFBYTs7O29CQUExQzs7Ozs7Ozs7O29CQUtBOzt3QkFBTWIsUUFBUWMsRUFBRSxDQUFDQyxNQUFNLENBQUM7NEJBQ3RCWixZQUFBQTs0QkFDQWEsTUFBTVg7NEJBQ05OLEtBQUFBO3dCQUNGOzs7b0JBSkE7Ozs7OztvQkFLT087b0JBQ1A7O3dCQUFNTixRQUFRYyxFQUFFLENBQUNHLFNBQVMsQ0FBQzs0QkFDekJkLFlBQUFBOzRCQUNBZSxPQUFPZDs0QkFDUFksTUFBTVg7NEJBQ05OLEtBQUFBO3dCQUNGOzs7b0JBTEE7Ozs7OztvQkFRRjs7d0JBQU9NOzs7O0lBQ1Q7V0F0RGVWOztJQXdEZixXQUFlQSJ9