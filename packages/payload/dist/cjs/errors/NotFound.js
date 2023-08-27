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
var NotFound = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(NotFound, APIError);
    var _super = _create_super(NotFound);
    function NotFound(t) {
        _class_call_check(this, NotFound);
        return _super.call(this, t ? t("error:notFound") : "The requested resource was not found.", _httpstatus.default.NOT_FOUND);
    }
    return NotFound;
}(_APIError.default);
var _default = NotFound;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvTm90Rm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGh0dHBTdGF0dXMgZnJvbSAnaHR0cC1zdGF0dXMnO1xuaW1wb3J0IHR5cGUgeyBURnVuY3Rpb24gfSBmcm9tICdpMThuZXh0JztcbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJztcblxuY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHQ/OiBURnVuY3Rpb24pIHtcbiAgICBzdXBlcih0ID8gdCgnZXJyb3I6bm90Rm91bmQnKSA6ICdUaGUgcmVxdWVzdGVkIHJlc291cmNlIHdhcyBub3QgZm91bmQuJywgaHR0cFN0YXR1cy5OT1RfRk9VTkQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIl0sIm5hbWVzIjpbIk5vdEZvdW5kIiwidCIsImh0dHBTdGF0dXMiLCJOT1RfRk9VTkQiLCJBUElFcnJvciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQUE7OztpRUFWdUI7K0RBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEseUJBTUgsQUFOSDs7Y0FBTUE7K0JBQUFBO2FBQUFBLFNBQ1FDLENBQWE7Z0NBRHJCRDtpQ0FFSUMsSUFBSUEsRUFBRSxvQkFBb0IseUNBQXlDQyxtQkFBVSxDQUFDQyxTQUFTOztXQUYzRkg7RUFBaUJJLGlCQUFRO0lBTS9CLFdBQWVKIn0=