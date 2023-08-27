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
import httpStatus from "http-status";
import APIError from "./APIError";
var UnauthorizedError = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(UnauthorizedError, APIError);
    var _super = _create_super(UnauthorizedError);
    function UnauthorizedError(t) {
        _class_call_check(this, UnauthorizedError);
        return _super.call(this, t ? t("error:unauthorized") : "Unauthorized, you must be logged in to make this request.", httpStatus.UNAUTHORIZED);
    }
    return UnauthorizedError;
}(APIError);
export default UnauthorizedError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvVW5hdGhvcml6ZWRFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InO1xuXG5jbGFzcyBVbmF1dGhvcml6ZWRFcnJvciBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IodD86IFRGdW5jdGlvbikge1xuICAgIHN1cGVyKHQgPyB0KCdlcnJvcjp1bmF1dGhvcml6ZWQnKSA6ICdVbmF1dGhvcml6ZWQsIHlvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBtYWtlIHRoaXMgcmVxdWVzdC4nLCBodHRwU3RhdHVzLlVOQVVUSE9SSVpFRCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVW5hdXRob3JpemVkRXJyb3I7XG4iXSwibmFtZXMiOlsiaHR0cFN0YXR1cyIsIkFQSUVycm9yIiwiVW5hdXRob3JpemVkRXJyb3IiLCJ0IiwiVU5BVVRIT1JJWkVEIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLGdCQUFnQixjQUFjO0FBRXJDLE9BQU9DLGNBQWMsYUFBYTtBQUVsQyxJQUFBLEFBQU1DLGtDQU1ILEFBTkg7O2NBQU1BOytCQUFBQTthQUFBQSxrQkFDUUMsQ0FBYTtnQ0FEckJEO2lDQUVJQyxJQUFJQSxFQUFFLHdCQUF3Qiw2REFBNkRILFdBQVdJLFlBQVk7O1dBRnRIRjtFQUEwQkQ7QUFNaEMsZUFBZUMsa0JBQWtCIn0=