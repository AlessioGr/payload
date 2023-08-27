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
var _executeAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/executeAccess"));
var _defaultAccess = /*#__PURE__*/ _interop_require_default(require("../../auth/defaultAccess"));
var _UnathorizedError = /*#__PURE__*/ _interop_require_default(require("../../errors/UnathorizedError"));
var _NotFound = /*#__PURE__*/ _interop_require_default(require("../../errors/NotFound"));
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
function deleteOperation(args) {
    return _deleteOperation.apply(this, arguments);
}
function _deleteOperation() {
    _deleteOperation = _async_to_generator(function(args) {
        var overrideAccess, req, payload, user, key, where, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    overrideAccess = args.overrideAccess, req = args.req, payload = args.req.payload, user = args.user, key = args.key;
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
                    where = {
                        and: [
                            {
                                key: {
                                    equals: key
                                }
                            },
                            {
                                "user.value": {
                                    equals: user.id
                                }
                            },
                            {
                                "user.relationTo": {
                                    equals: user.collection
                                }
                            }
                        ]
                    };
                    return [
                        4,
                        payload.delete({
                            collection: "payload-preferences",
                            where: where,
                            depth: 0,
                            user: user
                        })
                    ];
                case 3:
                    result = _state.sent();
                    if (result.docs.length === 1) {
                        return [
                            2,
                            result.docs[0]
                        ];
                    }
                    throw new _NotFound.default();
            }
        });
    });
    return _deleteOperation.apply(this, arguments);
}
var _default = deleteOperation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9vcGVyYXRpb25zL2RlbGV0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhlY3V0ZUFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2V4ZWN1dGVBY2Nlc3MnO1xuaW1wb3J0IGRlZmF1bHRBY2Nlc3MgZnJvbSAnLi4vLi4vYXV0aC9kZWZhdWx0QWNjZXNzJztcbmltcG9ydCB7IERvY3VtZW50LCBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBVbmF1dGhvcml6ZWRFcnJvciBmcm9tICcuLi8uLi9lcnJvcnMvVW5hdGhvcml6ZWRFcnJvcic7XG5pbXBvcnQgeyBQcmVmZXJlbmNlUmVxdWVzdCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi8uLi9lcnJvcnMvTm90Rm91bmQnO1xuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVPcGVyYXRpb24oYXJnczogUHJlZmVyZW5jZVJlcXVlc3QpOiBQcm9taXNlPERvY3VtZW50PiB7XG4gIGNvbnN0IHtcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICByZXEsXG4gICAgcmVxOiB7XG4gICAgICBwYXlsb2FkLFxuICAgIH0sXG4gICAgdXNlcixcbiAgICBrZXksXG4gIH0gPSBhcmdzO1xuXG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBVbmF1dGhvcml6ZWRFcnJvcihyZXEudCk7XG4gIH1cblxuICBpZiAoIW92ZXJyaWRlQWNjZXNzKSB7XG4gICAgYXdhaXQgZXhlY3V0ZUFjY2Vzcyh7IHJlcSB9LCBkZWZhdWx0QWNjZXNzKTtcbiAgfVxuXG4gIGNvbnN0IHdoZXJlOiBXaGVyZSA9IHtcbiAgICBhbmQ6IFtcbiAgICAgIHsga2V5OiB7IGVxdWFsczoga2V5IH0gfSxcbiAgICAgIHsgJ3VzZXIudmFsdWUnOiB7IGVxdWFsczogdXNlci5pZCB9IH0sXG4gICAgICB7ICd1c2VyLnJlbGF0aW9uVG8nOiB7IGVxdWFsczogdXNlci5jb2xsZWN0aW9uIH0gfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBheWxvYWQuZGVsZXRlKHtcbiAgICBjb2xsZWN0aW9uOiAncGF5bG9hZC1wcmVmZXJlbmNlcycsXG4gICAgd2hlcmUsXG4gICAgZGVwdGg6IDAsXG4gICAgdXNlcixcbiAgfSk7XG5cbiAgaWYgKHJlc3VsdC5kb2NzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiByZXN1bHQuZG9jc1swXTtcbiAgfVxuICB0aHJvdyBuZXcgTm90Rm91bmQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVsZXRlT3BlcmF0aW9uO1xuIl0sIm5hbWVzIjpbImRlbGV0ZU9wZXJhdGlvbiIsImFyZ3MiLCJvdmVycmlkZUFjY2VzcyIsInJlcSIsInBheWxvYWQiLCJ1c2VyIiwia2V5Iiwid2hlcmUiLCJyZXN1bHQiLCJVbmF1dGhvcml6ZWRFcnJvciIsInQiLCJleGVjdXRlQWNjZXNzIiwiZGVmYXVsdEFjY2VzcyIsImFuZCIsImVxdWFscyIsImlkIiwiY29sbGVjdGlvbiIsImRlbGV0ZSIsImRlcHRoIiwiZG9jcyIsImxlbmd0aCIsIk5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7OytCQStDQTs7O2VBQUE7OztvRUEvQzBCO29FQUNBO3VFQUVJOytEQUVUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRU5BLGdCQUFnQkMsSUFBdUI7V0FBdkNEOztTQUFBQTtJQUFBQSxtQkFBZixvQkFBQSxTQUErQkMsSUFBdUI7WUFFbERDLGdCQUNBQyxLQUVFQyxTQUVGQyxNQUNBQyxLQVdJQyxPQVFBQzs7OztvQkF6QkpOLGlCQU9FRCxLQVBGQyxnQkFDQUMsTUFNRUYsS0FORkUsS0FFRUMsVUFJQUgsS0FMRkUsSUFDRUMsU0FFRkMsT0FFRUosS0FGRkksTUFDQUMsTUFDRUwsS0FERks7b0JBR0YsSUFBSSxDQUFDRCxNQUFNO3dCQUNULE1BQU0sSUFBSUkseUJBQWlCLENBQUNOLElBQUlPLENBQUM7b0JBQ25DO3lCQUVJLENBQUNSLGdCQUFEOzs7O29CQUNGOzt3QkFBTVMsSUFBQUEsc0JBQWEsRUFBQzs0QkFBRVIsS0FBQUE7d0JBQUksR0FBR1Msc0JBQWE7OztvQkFBMUM7OztvQkFHSUwsUUFBZTt3QkFDbkJNLEdBQUc7NEJBQ0Q7Z0NBQUVQLEtBQUs7b0NBQUVRLFFBQVFSO2dDQUFJOzRCQUFFOzRCQUN2QjtnQ0FBRSxjQUFjO29DQUFFUSxRQUFRVCxLQUFLVSxFQUFFO2dDQUFDOzRCQUFFOzRCQUNwQztnQ0FBRSxtQkFBbUI7b0NBQUVELFFBQVFULEtBQUtXLFVBQVU7Z0NBQUM7NEJBQUU7O29CQUVyRDtvQkFFZTs7d0JBQU1aLFFBQVFhLE1BQU0sQ0FBQzs0QkFDbENELFlBQVk7NEJBQ1pULE9BQUFBOzRCQUNBVyxPQUFPOzRCQUNQYixNQUFBQTt3QkFDRjs7O29CQUxNRyxTQUFTO29CQU9mLElBQUlBLE9BQU9XLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7d0JBQzVCOzs0QkFBT1osT0FBT1csSUFBSSxDQUFDLEVBQUU7O29CQUN2QjtvQkFDQSxNQUFNLElBQUlFLGlCQUFROzs7SUFDcEI7V0F0Q2VyQjs7SUF3Q2YsV0FBZUEifQ==