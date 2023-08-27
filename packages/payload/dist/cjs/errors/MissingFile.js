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
var _httpstatus = /*#__PURE__*/ _interop_require_default(require("http-status"));
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
var MissingFile = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(MissingFile, APIError);
    var _super = _create_super(MissingFile);
    function MissingFile(t) {
        _class_call_check(this, MissingFile);
        return _super.call(this, t ? t("error:noFilesUploaded") : "No files were uploaded.", _httpstatus.default.BAD_REQUEST);
    }
    return MissingFile;
}(_APIError.default);
var _default = MissingFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0ZpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHR5cGUgeyBURnVuY3Rpb24gfSBmcm9tICdpMThuZXh0JztcbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJztcblxuY2xhc3MgTWlzc2luZ0ZpbGUgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHQ/OiBURnVuY3Rpb24pIHtcbiAgICBzdXBlcih0ID8gdCgnZXJyb3I6bm9GaWxlc1VwbG9hZGVkJykgOiAnTm8gZmlsZXMgd2VyZSB1cGxvYWRlZC4nLCBodHRwU3RhdHVzLkJBRF9SRVFVRVNUKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaXNzaW5nRmlsZTtcbiJdLCJuYW1lcyI6WyJNaXNzaW5nRmlsZSIsInQiLCJodHRwU3RhdHVzIiwiQkFEX1JFUVVFU1QiLCJBUElFcnJvciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQUE7OztpRUFWdUI7K0RBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsNEJBTUgsQUFOSDs7Y0FBTUE7K0JBQUFBO2FBQUFBLFlBQ1FDLENBQWE7Z0NBRHJCRDtpQ0FFSUMsSUFBSUEsRUFBRSwyQkFBMkIsMkJBQTJCQyxtQkFBVSxDQUFDQyxXQUFXOztXQUZ0Rkg7RUFBb0JJLGlCQUFRO0lBTWxDLFdBQWVKIn0=