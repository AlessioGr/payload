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
var FileUploadError = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(FileUploadError, APIError);
    var _super = _create_super(FileUploadError);
    function FileUploadError(t) {
        _class_call_check(this, FileUploadError);
        return _super.call(this, t ? t("error:problemUploadingFile") : "There was a problem while uploading the file.", httpStatus.BAD_REQUEST);
    }
    return FileUploadError;
}(APIError);
export default FileUploadError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvRmlsZVVwbG9hZEVycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcic7XG5cbmNsYXNzIEZpbGVVcGxvYWRFcnJvciBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IodD86IFRGdW5jdGlvbikge1xuICAgIHN1cGVyKHQgPyB0KCdlcnJvcjpwcm9ibGVtVXBsb2FkaW5nRmlsZScpIDogJ1RoZXJlIHdhcyBhIHByb2JsZW0gd2hpbGUgdXBsb2FkaW5nIHRoZSBmaWxlLicsIGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRFcnJvcjtcbiJdLCJuYW1lcyI6WyJodHRwU3RhdHVzIiwiQVBJRXJyb3IiLCJGaWxlVXBsb2FkRXJyb3IiLCJ0IiwiQkFEX1JFUVVFU1QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsZ0JBQWdCLGNBQWM7QUFFckMsT0FBT0MsY0FBYyxhQUFhO0FBRWxDLElBQUEsQUFBTUMsZ0NBTUgsQUFOSDs7Y0FBTUE7K0JBQUFBO2FBQUFBLGdCQUNRQyxDQUFhO2dDQURyQkQ7aUNBRUlDLElBQUlBLEVBQUUsZ0NBQWdDLGlEQUFpREgsV0FBV0ksV0FBVzs7V0FGakhGO0VBQXdCRDtBQU05QixlQUFlQyxnQkFBZ0IifQ==