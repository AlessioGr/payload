"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getPayload: function() {
        return _payload.getPayload;
    },
    Payload: function() {
        return Payload;
    },
    default: function() {
        return _default;
    }
});
var _initHTTP = require("./initHTTP");
var _payload = require("./payload");
require("isomorphic-fetch");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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
var Payload = /*#__PURE__*/ function(BasePayload) {
    "use strict";
    _inherits(Payload, BasePayload);
    var _super = _create_super(Payload);
    function Payload() {
        _class_call_check(this, Payload);
        return _super.apply(this, arguments);
    }
    _create_class(Payload, [
        {
            key: "init",
            value: function init(options) {
                var _this = this;
                return _async_to_generator(function() {
                    var payload;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    (0, _initHTTP.initHTTP)(options)
                                ];
                            case 1:
                                payload = _state.sent();
                                Object.assign(_this, payload);
                                if (!!options.local) return [
                                    3,
                                    5
                                ];
                                if (!(typeof options.onInit === "function")) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    options.onInit(_this)
                                ];
                            case 2:
                                _state.sent();
                                _state.label = 3;
                            case 3:
                                if (!(typeof _this.config.onInit === "function")) return [
                                    3,
                                    5
                                ];
                                return [
                                    4,
                                    _this.config.onInit(_this)
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                return [
                                    2,
                                    payload
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Payload;
}(_payload.BasePayload);
var payload = new Payload();
var _default = payload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBJbml0T3B0aW9ucyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGluaXRIVFRQIH0gZnJvbSAnLi9pbml0SFRUUCc7XG5pbXBvcnQgeyBQYXlsb2FkIGFzIExvY2FsUGF5bG9hZCwgQmFzZVBheWxvYWQgfSBmcm9tICcuL3BheWxvYWQnO1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuZXhwb3J0IHR5cGUgeyBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4vZXhwcmVzcy90eXBlcyc7XG5cbmV4cG9ydCB7IGdldFBheWxvYWQgfSBmcm9tICcuL3BheWxvYWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBQYXlsb2FkIGV4dGVuZHMgQmFzZVBheWxvYWQ8R2VuZXJhdGVkVHlwZXM+IHtcbiAgYXN5bmMgaW5pdChvcHRpb25zOiBJbml0T3B0aW9ucyk6IFByb21pc2U8TG9jYWxQYXlsb2FkPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IGluaXRIVFRQKG9wdGlvbnMpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGF5bG9hZCk7XG5cbiAgICBpZiAoIW9wdGlvbnMubG9jYWwpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXQgPT09ICdmdW5jdGlvbicpIGF3YWl0IG9wdGlvbnMub25Jbml0KHRoaXMpO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vbkluaXQgPT09ICdmdW5jdGlvbicpIGF3YWl0IHRoaXMuY29uZmlnLm9uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxufVxuXG5jb25zdCBwYXlsb2FkID0gbmV3IFBheWxvYWQoKTtcblxuZXhwb3J0IGRlZmF1bHQgcGF5bG9hZDsiXSwibmFtZXMiOlsiZ2V0UGF5bG9hZCIsIlBheWxvYWQiLCJpbml0Iiwib3B0aW9ucyIsInBheWxvYWQiLCJpbml0SFRUUCIsIk9iamVjdCIsImFzc2lnbiIsImxvY2FsIiwib25Jbml0IiwiY29uZmlnIiwiQmFzZVBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBT1NBLFVBQVU7ZUFBVkEsbUJBQVU7O0lBR05DLE9BQU87ZUFBUEE7O0lBZ0JiLE9BQXVCO2VBQXZCOzs7d0JBeEJ5Qjt1QkFDNEI7UUFDOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQUEsQUFBTUEsd0JBY1YsQUFkSTs7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDTEMsS0FBQUE7bUJBQU4sU0FBTUEsS0FBS0MsT0FBb0I7O3VCQUEvQixvQkFBQTt3QkFDUUM7Ozs7Z0NBQVU7O29DQUFNQyxJQUFBQSxrQkFBUSxFQUFDRjs7O2dDQUF6QkMsVUFBVTtnQ0FDaEJFLE9BQU9DLE1BQU0sUUFBT0g7cUNBRWhCLENBQUNELFFBQVFLLEtBQUssRUFBZDs7OztxQ0FDRSxDQUFBLE9BQU9MLFFBQVFNLE1BQU0sS0FBSyxVQUFTLEdBQW5DOzs7O2dDQUFzQzs7b0NBQU1OLFFBQVFNLE1BQU07OztnQ0FBcEI7OztxQ0FDdEMsQ0FBQSxPQUFPLE1BQUtDLE1BQU0sQ0FBQ0QsTUFBTSxLQUFLLFVBQVMsR0FBdkM7Ozs7Z0NBQTBDOztvQ0FBTSxNQUFLQyxNQUFNLENBQUNELE1BQU07OztnQ0FBeEI7OztnQ0FHaEQ7O29DQUFPTDs7OztnQkFDVDs7OztXQVhXSDtFQUFnQlUsb0JBQVc7QUFjeEMsSUFBTVAsVUFBVSxJQUFJSDtJQUVwQixXQUFlRyJ9