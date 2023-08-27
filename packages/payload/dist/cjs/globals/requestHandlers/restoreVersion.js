"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionHandler;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
var _formatSuccess = /*#__PURE__*/ _interop_require_default(require("../../express/responses/formatSuccess"));
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../operations/restoreVersion"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function restoreVersionHandler(globalConfig) {
    return function() {
        var _handler = _async_to_generator(function(req, res, next) {
            var options, doc, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        options = {
                            req: req,
                            globalConfig: globalConfig,
                            id: req.params.id,
                            depth: Number(req.query.depth)
                        };
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            (0, _restoreVersion.default)(options)
                        ];
                    case 2:
                        doc = _state.sent();
                        return [
                            2,
                            res.status(_httpstatus.default.OK).json(_object_spread_props(_object_spread({}, (0, _formatSuccess.default)(req.t("version:restoredSuccessfully"), "message")), {
                                doc: doc
                            }))
                        ];
                    case 3:
                        error = _state.sent();
                        return [
                            2,
                            next(error)
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        function handler(req, res, next) {
            return _handler.apply(this, arguments);
        }
        return handler;
    }();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL3JlcXVlc3RIYW5kbGVycy9yZXN0b3JlVmVyc2lvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgZm9ybWF0U3VjY2Vzc1Jlc3BvbnNlIGZyb20gJy4uLy4uL2V4cHJlc3MvcmVzcG9uc2VzL2Zvcm1hdFN1Y2Nlc3MnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCByZXN0b3JlVmVyc2lvbiBmcm9tICcuLi9vcGVyYXRpb25zL3Jlc3RvcmVWZXJzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzdG9yZVZlcnNpb25IYW5kbGVyKGdsb2JhbENvbmZpZzogU2FuaXRpemVkR2xvYmFsQ29uZmlnKSB7XG4gIHJldHVybiBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbik6IFByb21pc2U8UmVzcG9uc2U8RG9jdW1lbnQ+IHwgdm9pZD4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByZXEsXG4gICAgICBnbG9iYWxDb25maWcsXG4gICAgICBpZDogcmVxLnBhcmFtcy5pZCxcbiAgICAgIGRlcHRoOiBOdW1iZXIocmVxLnF1ZXJ5LmRlcHRoKSxcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IHJlc3RvcmVWZXJzaW9uKG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoaHR0cFN0YXR1cy5PSykuanNvbih7XG4gICAgICAgIC4uLmZvcm1hdFN1Y2Nlc3NSZXNwb25zZShyZXEudCgndmVyc2lvbjpyZXN0b3JlZFN1Y2Nlc3NmdWxseScpLCAnbWVzc2FnZScpLFxuICAgICAgICBkb2MsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICAgIH1cbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJyZXN0b3JlVmVyc2lvbkhhbmRsZXIiLCJnbG9iYWxDb25maWciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibmV4dCIsIm9wdGlvbnMiLCJkb2MiLCJlcnJvciIsImlkIiwicGFyYW1zIiwiZGVwdGgiLCJOdW1iZXIiLCJxdWVyeSIsInJlc3RvcmVWZXJzaW9uIiwic3RhdHVzIiwiaHR0cFN0YXR1cyIsIk9LIiwianNvbiIsImZvcm1hdFN1Y2Nlc3NSZXNwb25zZSIsInQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBUUE7OztlQUF3QkE7OztpRUFQRDtvRUFDVztxRUFJUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWixTQUFTQSxzQkFBc0JDLFlBQW1DO0lBQy9FO1lBQXNCQyxXQUFmLG9CQUFBLFNBQXVCQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO2dCQUM1RUMsU0FRRUMsS0FLQ0M7Ozs7d0JBYkhGLFVBQVU7NEJBQ2RILEtBQUFBOzRCQUNBRixjQUFBQTs0QkFDQVEsSUFBSU4sSUFBSU8sTUFBTSxDQUFDRCxFQUFFOzRCQUNqQkUsT0FBT0MsT0FBT1QsSUFBSVUsS0FBSyxDQUFDRixLQUFLO3dCQUMvQjs7Ozs7Ozs7O3dCQUdjOzs0QkFBTUcsSUFBQUEsdUJBQWMsRUFBQ1I7Ozt3QkFBM0JDLE1BQU07d0JBQ1o7OzRCQUFPSCxJQUFJVyxNQUFNLENBQUNDLG1CQUFVLENBQUNDLEVBQUUsRUFBRUMsSUFBSSxDQUFDLHdDQUNqQ0MsSUFBQUEsc0JBQXFCLEVBQUNoQixJQUFJaUIsQ0FBQyxDQUFDLGlDQUFpQztnQ0FDaEViLEtBQUFBOzs7O3dCQUVLQzt3QkFDUDs7NEJBQU9ILEtBQUtHOzs7Ozs7OztRQUVoQjtpQkFqQnNCTixRQUFRQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO21CQUE5REg7O2VBQUFBOztBQWtCeEIifQ==