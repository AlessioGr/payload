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
var AuthenticationError = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(AuthenticationError, APIError);
    var _super = _create_super(AuthenticationError);
    function AuthenticationError(t) {
        _class_call_check(this, AuthenticationError);
        return _super.call(this, t ? t("error:emailOrPasswordIncorrect") : "The email or password provided is incorrect.", _httpstatus.default.UNAUTHORIZED);
    }
    return AuthenticationError;
}(_APIError.default);
var _default = AuthenticationError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvQXV0aGVudGljYXRpb25FcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InO1xuXG5jbGFzcyBBdXRoZW50aWNhdGlvbkVycm9yIGV4dGVuZHMgQVBJRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih0PzogVEZ1bmN0aW9uKSB7XG4gICAgc3VwZXIodCA/IHQoJ2Vycm9yOmVtYWlsT3JQYXNzd29yZEluY29ycmVjdCcpIDogJ1RoZSBlbWFpbCBvciBwYXNzd29yZCBwcm92aWRlZCBpcyBpbmNvcnJlY3QuJywgaHR0cFN0YXR1cy5VTkFVVEhPUklaRUQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhlbnRpY2F0aW9uRXJyb3I7XG4iXSwibmFtZXMiOlsiQXV0aGVudGljYXRpb25FcnJvciIsInQiLCJodHRwU3RhdHVzIiwiVU5BVVRIT1JJWkVEIiwiQVBJRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7K0JBVUE7OztlQUFBOzs7aUVBVnVCOytEQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLG9DQU1ILEFBTkg7O2NBQU1BOytCQUFBQTthQUFBQSxvQkFDUUMsQ0FBYTtnQ0FEckJEO2lDQUVJQyxJQUFJQSxFQUFFLG9DQUFvQyxnREFBZ0RDLG1CQUFVLENBQUNDLFlBQVk7O1dBRnJISDtFQUE0QkksaUJBQVE7SUFNMUMsV0FBZUoifQ==