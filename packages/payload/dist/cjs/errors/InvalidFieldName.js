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
var InvalidFieldName = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(InvalidFieldName, APIError);
    var _super = _create_super(InvalidFieldName);
    function InvalidFieldName(field, fieldName) {
        _class_call_check(this, InvalidFieldName);
        return _super.call(this, "Field ".concat(field.label, " has invalid name '").concat(fieldName, "'. Field names can not include periods (.) and must be alphanumeric."));
    }
    return InvalidFieldName;
}(_APIError.default);
var _default = InvalidFieldName;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZEZpZWxkTmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZEFmZmVjdGluZ0RhdGEgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBBUElFcnJvciBmcm9tICcuL0FQSUVycm9yJztcblxuY2xhc3MgSW52YWxpZEZpZWxkTmFtZSBleHRlbmRzIEFQSUVycm9yIHtcbiAgY29uc3RydWN0b3IoZmllbGQ6IEZpZWxkQWZmZWN0aW5nRGF0YSwgZmllbGROYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgRmllbGQgJHtmaWVsZC5sYWJlbH0gaGFzIGludmFsaWQgbmFtZSAnJHtmaWVsZE5hbWV9Jy4gRmllbGQgbmFtZXMgY2FuIG5vdCBpbmNsdWRlIHBlcmlvZHMgKC4pIGFuZCBtdXN0IGJlIGFscGhhbnVtZXJpYy5gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnZhbGlkRmllbGROYW1lO1xuIl0sIm5hbWVzIjpbIkludmFsaWRGaWVsZE5hbWUiLCJmaWVsZCIsImZpZWxkTmFtZSIsImxhYmVsIiwiQVBJRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7K0JBU0E7OztlQUFBOzs7K0RBUnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLGlDQU1ILEFBTkg7O2NBQU1BOytCQUFBQTthQUFBQSxpQkFDUUMsS0FBeUIsRUFBRUMsU0FBaUI7Z0NBRHBERjtpQ0FFSSxBQUFDLFNBQXlDRSxPQUFqQ0QsTUFBTUUsS0FBSyxFQUFDLHVCQUErQixPQUFWRCxXQUFVOztXQUZ4REY7RUFBeUJJLGlCQUFRO0lBTXZDLFdBQWVKIn0=