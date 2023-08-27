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
var _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
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
var TimestampsRequired = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(TimestampsRequired, APIError);
    var _super = _create_super(TimestampsRequired);
    function TimestampsRequired(collection) {
        _class_call_check(this, TimestampsRequired);
        return _super.call(this, "Timestamps are required in the collection ".concat(collection.slug, " because you have opted in to Versions."));
    }
    return TimestampsRequired;
}(_APIError.default);
var _default = TimestampsRequired;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvVGltZXN0YW1wc1JlcXVpcmVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InO1xuXG5jbGFzcyBUaW1lc3RhbXBzUmVxdWlyZWQgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb246IENvbGxlY3Rpb25Db25maWcpIHtcbiAgICBzdXBlcihgVGltZXN0YW1wcyBhcmUgcmVxdWlyZWQgaW4gdGhlIGNvbGxlY3Rpb24gJHtjb2xsZWN0aW9uLnNsdWd9IGJlY2F1c2UgeW91IGhhdmUgb3B0ZWQgaW4gdG8gVmVyc2lvbnMuYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZXN0YW1wc1JlcXVpcmVkO1xuIl0sIm5hbWVzIjpbIlRpbWVzdGFtcHNSZXF1aXJlZCIsImNvbGxlY3Rpb24iLCJzbHVnIiwiQVBJRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7OztlQUFBOzs7K0RBUnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLG1DQU1ILEFBTkg7O2NBQU1BOytCQUFBQTthQUFBQSxtQkFDUUMsVUFBNEI7Z0NBRHBDRDtpQ0FFSSxBQUFDLDZDQUE0RCxPQUFoQkMsV0FBV0MsSUFBSSxFQUFDOztXQUZqRUY7RUFBMkJHLGlCQUFRO0lBTXpDLFdBQWVIIn0=