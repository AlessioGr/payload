/* eslint-disable max-classes-per-file */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
var ExtendableError = /*#__PURE__*/ function(Error1) {
    "use strict";
    _inherits(ExtendableError, Error1);
    var _super = _create_super(ExtendableError);
    function ExtendableError(message, status, data, isPublic) {
        _class_call_check(this, ExtendableError);
        var _this;
        _this = _super.call(this, message);
        _define_property(_assert_this_initialized(_this), "status", void 0);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _define_property(_assert_this_initialized(_this), "isPublic", void 0);
        _define_property(_assert_this_initialized(_this), "isOperational", void 0);
        _this.name = _this.constructor.name;
        _this.message = message;
        _this.status = status;
        _this.data = data;
        _this.isPublic = isPublic;
        _this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        Error.captureStackTrace(_assert_this_initialized(_this), _this.constructor);
        return _this;
    }
    return ExtendableError;
}(_wrap_native_super(Error));
/**
 * Class representing an API error.
 * @extends ExtendableError
 */ var APIError = /*#__PURE__*/ function(ExtendableError) {
    "use strict";
    _inherits(APIError, ExtendableError);
    var _super = _create_super(APIError);
    function APIError(message) {
        var status = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _httpstatus.default.INTERNAL_SERVER_ERROR, data = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, isPublic = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        _class_call_check(this, APIError);
        return _super.call(this, message, status, data, isPublic);
    }
    return APIError;
}(ExtendableError);
var _default = APIError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvQVBJRXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcblxuY2xhc3MgRXh0ZW5kYWJsZUVycm9yPFREYXRhIGV4dGVuZHMgb2JqZWN0ID0geyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+IGV4dGVuZHMgRXJyb3Ige1xuICBzdGF0dXM6IG51bWJlcjtcblxuICBkYXRhOiBURGF0YTtcblxuICBpc1B1YmxpYzogYm9vbGVhbjtcblxuICBpc09wZXJhdGlvbmFsOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3RhdHVzOiBudW1iZXIsIGRhdGE6IFREYXRhLCBpc1B1YmxpYzogYm9vbGVhbikge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5pc1B1YmxpYyA9IGlzUHVibGljO1xuICAgIHRoaXMuaXNPcGVyYXRpb25hbCA9IHRydWU7IC8vIFRoaXMgaXMgcmVxdWlyZWQgc2luY2UgYmx1ZWJpcmQgNCBkb2Vzbid0IGFwcGVuZCBpdCBhbnltb3JlLlxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICB9XG59XG5cbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIGFuIEFQSSBlcnJvci5cbiAqIEBleHRlbmRzIEV4dGVuZGFibGVFcnJvclxuICovXG5jbGFzcyBBUElFcnJvcjxURGF0YSBleHRlbmRzIG51bGwgfCBvYmplY3QgPSBudWxsIHwgeyBba2V5OiBzdHJpbmddOiB1bmtub3duIH0+IGV4dGVuZHMgRXh0ZW5kYWJsZUVycm9yPFREYXRhPiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIEFQSSBlcnJvci5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBFcnJvciBtZXNzYWdlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdHVzIC0gSFRUUCBzdGF0dXMgY29kZSBvZiBlcnJvci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSByZXNwb25zZSBkYXRhIHRvIGJlIHJldHVybmVkLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzUHVibGljIC0gV2hldGhlciB0aGUgbWVzc2FnZSBzaG91bGQgYmUgdmlzaWJsZSB0byB1c2VyIG9yIG5vdC5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBzdGF0dXM6IG51bWJlciA9IGh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgIGRhdGE6IFREYXRhID0gbnVsbCxcbiAgICBpc1B1YmxpYyA9IGZhbHNlLFxuICApIHtcbiAgICBzdXBlcihtZXNzYWdlLCBzdGF0dXMsIGRhdGEsIGlzUHVibGljKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUElFcnJvcjtcbiJdLCJuYW1lcyI6WyJFeHRlbmRhYmxlRXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwiZGF0YSIsImlzUHVibGljIiwiaXNPcGVyYXRpb25hbCIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiLCJBUElFcnJvciIsImh0dHBTdGF0dXMiLCJJTlRFUk5BTF9TRVJWRVJfRVJST1IiXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1Qzs7OzsrQkE4Q3ZDOzs7ZUFBQTs7O2lFQTdDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsSUFBQSxBQUFNQSxnQ0FxQkgsQUFyQkg7O2NBQU1BOytCQUFBQTthQUFBQSxnQkFTUUMsT0FBZSxFQUFFQyxNQUFjLEVBQUVDLElBQVcsRUFBRUMsUUFBaUI7Z0NBVHZFSjs7a0NBVUlDO1FBVFJDLGtEQUFBQSxVQUFBQSxLQUFBQTtRQUVBQyxrREFBQUEsUUFBQUEsS0FBQUE7UUFFQUMsa0RBQUFBLFlBQUFBLEtBQUFBO1FBRUFDLGtEQUFBQSxpQkFBQUEsS0FBQUE7UUFJRSxNQUFLQyxJQUFJLEdBQUcsTUFBS0MsV0FBVyxDQUFDRCxJQUFJO1FBQ2pDLE1BQUtMLE9BQU8sR0FBR0E7UUFDZixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsSUFBSSxHQUFHQTtRQUNaLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsYUFBYSxHQUFHLE1BQU0sK0RBQStEO1FBQzFGRyxNQUFNQyxpQkFBaUIsa0NBQU8sTUFBS0YsV0FBVzs7O1dBakI1Q1A7cUJBQTJFUTtBQXFCakY7OztDQUdDLEdBQ0QsSUFBQSxBQUFNRSx5QkFrQkgsQUFsQkg7O2NBQU1BOytCQUFBQTthQUFBQSxTQVNGVCxPQUFlO1lBQ2ZDLFNBQUFBLGlFQUFpQlMsbUJBQVUsQ0FBQ0MscUJBQXFCLEVBQ2pEVCxPQUFBQSxpRUFBYyxNQUNkQyxXQUFBQSxpRUFBVztnQ0FaVE07aUNBY0lULFNBQVNDLFFBQVFDLE1BQU1DOztXQWQzQk07RUFBa0ZWO0lBa0J4RixXQUFlVSJ9