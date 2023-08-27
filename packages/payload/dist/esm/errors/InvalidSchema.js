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
var InvalidSchema = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(InvalidSchema, APIError);
    var _super = _create_super(InvalidSchema);
    function InvalidSchema(message, results) {
        _class_call_check(this, InvalidSchema);
        return _super.call(this, message, httpStatus.INTERNAL_SERVER_ERROR, results);
    }
    return InvalidSchema;
}(APIError);
export default InvalidSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZFNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcic7XG5cbmNsYXNzIEludmFsaWRTY2hlbWEgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgcmVzdWx0czogYW55KSB7XG4gICAgc3VwZXIobWVzc2FnZSwgaHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsIHJlc3VsdHMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludmFsaWRTY2hlbWE7XG4iXSwibmFtZXMiOlsiaHR0cFN0YXR1cyIsIkFQSUVycm9yIiwiSW52YWxpZFNjaGVtYSIsIm1lc3NhZ2UiLCJyZXN1bHRzIiwiSU5URVJOQUxfU0VSVkVSX0VSUk9SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLGdCQUFnQixjQUFjO0FBQ3JDLE9BQU9DLGNBQWMsYUFBYTtBQUVsQyxJQUFBLEFBQU1DLDhCQU1ILEFBTkg7O2NBQU1BOytCQUFBQTthQUFBQSxjQUNRQyxPQUFlLEVBQUVDLE9BQVk7Z0NBRHJDRjtpQ0FFSUMsU0FBU0gsV0FBV0sscUJBQXFCLEVBQUVEOztXQUYvQ0Y7RUFBc0JEO0FBTTVCLGVBQWVDLGNBQWMifQ==