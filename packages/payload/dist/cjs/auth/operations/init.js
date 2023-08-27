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
function init(args) {
    return _init.apply(this, arguments);
}
function _init() {
    _init = _async_to_generator(function(args) {
        var payload, slug, doc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    payload = args.req.payload, slug = args.collection;
                    return [
                        4,
                        payload.db.findOne({
                            collection: slug
                        })
                    ];
                case 1:
                    doc = _state.sent();
                    return [
                        2,
                        !!doc
                    ];
            }
        });
    });
    return _init.apply(this, arguments);
}
var _default = init;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KGFyZ3M6IHsgcmVxOiBQYXlsb2FkUmVxdWVzdCwgY29sbGVjdGlvbjogc3RyaW5nIH0pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3Qge1xuICAgIHJlcTogeyBwYXlsb2FkIH0sXG4gICAgY29sbGVjdGlvbjogc2x1ZyxcbiAgfSA9IGFyZ3M7XG5cbiAgY29uc3QgZG9jID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kT25lKHtcbiAgICBjb2xsZWN0aW9uOiBzbHVnLFxuICB9KTtcblxuICByZXR1cm4gISFkb2M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iXSwibmFtZXMiOlsiaW5pdCIsImFyZ3MiLCJwYXlsb2FkIiwic2x1ZyIsImRvYyIsInJlcSIsImNvbGxlY3Rpb24iLCJkYiIsImZpbmRPbmUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBZUE7OztlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBYmVBLEtBQUtDLElBQWlEO1dBQXRERDs7U0FBQUE7SUFBQUEsUUFBZixvQkFBQSxTQUFvQkMsSUFBaUQ7WUFFMURDLFNBQ0tDLE1BR1JDOzs7O29CQUpHRixVQUVMRCxLQUZGSSxJQUFPSCxTQUNLQyxPQUNWRixLQURGSztvQkFHVTs7d0JBQU1KLFFBQVFLLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDOzRCQUNuQ0YsWUFBWUg7d0JBQ2Q7OztvQkFGTUMsTUFBTTtvQkFJWjs7d0JBQU8sQ0FBQyxDQUFDQTs7OztJQUNYO1dBWGVKOztJQWFmLFdBQWVBIn0=