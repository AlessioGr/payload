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
var MissingFieldInputOptions = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(MissingFieldInputOptions, APIError);
    var _super = _create_super(MissingFieldInputOptions);
    function MissingFieldInputOptions(field) {
        _class_call_check(this, MissingFieldInputOptions);
        return _super.call(this, "Field ".concat(field.label, " is missing options."));
    }
    return MissingFieldInputOptions;
}(_APIError.default);
var _default = MissingFieldInputOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0ZpZWxkSW5wdXRPcHRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJhZGlvRmllbGQsIFNlbGVjdEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcic7XG5cbmNsYXNzIE1pc3NpbmdGaWVsZElucHV0T3B0aW9ucyBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IoZmllbGQ6IFNlbGVjdEZpZWxkIHwgUmFkaW9GaWVsZCkge1xuICAgIHN1cGVyKGBGaWVsZCAke2ZpZWxkLmxhYmVsfSBpcyBtaXNzaW5nIG9wdGlvbnMuYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZ0ZpZWxkSW5wdXRPcHRpb25zO1xuIl0sIm5hbWVzIjpbIk1pc3NpbmdGaWVsZElucHV0T3B0aW9ucyIsImZpZWxkIiwibGFiZWwiLCJBUElFcnJvciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFTQTs7O2VBQUE7OzsrREFScUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEseUNBTUgsQUFOSDs7Y0FBTUE7K0JBQUFBO2FBQUFBLHlCQUNRQyxLQUErQjtnQ0FEdkNEO2lDQUVJLEFBQUMsU0FBb0IsT0FBWkMsTUFBTUMsS0FBSyxFQUFDOztXQUZ6QkY7RUFBaUNHLGlCQUFRO0lBTS9DLFdBQWVIIn0=