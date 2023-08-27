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
var ValidationError = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(ValidationError, APIError);
    var _super = _create_super(ValidationError);
    function ValidationError(results, t) {
        _class_call_check(this, ValidationError);
        var message = t ? t("error:followingFieldsInvalid", {
            count: results.length
        }) : "The following field".concat(results.length === 1 ? " is" : "s are", " invalid:");
        return _super.call(this, "".concat(message, " ").concat(results.map(function(f) {
            return f.field;
        }).join(", ")), _httpstatus.default.BAD_REQUEST, results);
    }
    return ValidationError;
}(_APIError.default);
var _default = ValidationError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvVmFsaWRhdGlvbkVycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwU3RhdHVzIGZyb20gJ2h0dHAtc3RhdHVzJztcbmltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcic7XG5cbmNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEFQSUVycm9yPHsgbWVzc2FnZTogc3RyaW5nOyBmaWVsZDogc3RyaW5nIH1bXT4ge1xuICBjb25zdHJ1Y3RvcihyZXN1bHRzOiB7IG1lc3NhZ2U6IHN0cmluZzsgZmllbGQ6IHN0cmluZyB9W10sIHQ/OiBURnVuY3Rpb24pIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdFxuICAgICAgPyB0KCdlcnJvcjpmb2xsb3dpbmdGaWVsZHNJbnZhbGlkJywgeyBjb3VudDogcmVzdWx0cy5sZW5ndGggfSlcbiAgICAgIDogYFRoZSBmb2xsb3dpbmcgZmllbGQke3Jlc3VsdHMubGVuZ3RoID09PSAxID8gJyBpcycgOiAncyBhcmUnfSBpbnZhbGlkOmA7XG4gICAgc3VwZXIoYCR7bWVzc2FnZX0gJHtyZXN1bHRzLm1hcCgoZikgPT4gZi5maWVsZCkuam9pbignLCAnKX1gLCBodHRwU3RhdHVzLkJBRF9SRVFVRVNULCByZXN1bHRzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWYWxpZGF0aW9uRXJyb3I7XG4iXSwibmFtZXMiOlsiVmFsaWRhdGlvbkVycm9yIiwicmVzdWx0cyIsInQiLCJtZXNzYWdlIiwiY291bnQiLCJsZW5ndGgiLCJtYXAiLCJmIiwiZmllbGQiLCJqb2luIiwiaHR0cFN0YXR1cyIsIkJBRF9SRVFVRVNUIiwiQVBJRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYUE7OztlQUFBOzs7aUVBYnVCOytEQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLGdDQVNILEFBVEg7O2NBQU1BOytCQUFBQTthQUFBQSxnQkFDUUMsT0FBNkMsRUFBRUMsQ0FBYTtnQ0FEcEVGO1FBRUYsSUFBTUcsVUFBVUQsSUFDWkEsRUFBRSxnQ0FBZ0M7WUFBRUUsT0FBT0gsUUFBUUksTUFBTTtRQUFDLEtBQzFELEFBQUMsc0JBQTRELE9BQXZDSixRQUFRSSxNQUFNLEtBQUssSUFBSSxRQUFRLFNBQVE7aUNBQzNELEFBQUMsR0FBYUosT0FBWEUsU0FBUSxLQUEwQyxPQUF2Q0YsUUFBUUssR0FBRyxDQUFDLFNBQUNDO21CQUFNQSxFQUFFQyxLQUFLO1dBQUVDLElBQUksQ0FBQyxRQUFTQyxtQkFBVSxDQUFDQyxXQUFXLEVBQUVWOztXQUxwRkQ7RUFBd0JZLGlCQUFRO0lBU3RDLFdBQWVaIn0=