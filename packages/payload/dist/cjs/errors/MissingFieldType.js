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
var _types = require("../fields/config/types");
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
var MissingFieldType = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(MissingFieldType, APIError);
    var _super = _create_super(MissingFieldType);
    function MissingFieldType(field) {
        _class_call_check(this, MissingFieldType);
        return _super.call(this, "Field".concat((0, _types.fieldAffectsData)(field) ? ' "'.concat(field.name, '"') : "", " is either missing a field type or it does not match an available field type"));
    }
    return MissingFieldType;
}(_APIError.default);
var _default = MissingFieldType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0ZpZWxkVHlwZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCwgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InO1xuXG5jbGFzcyBNaXNzaW5nRmllbGRUeXBlIGV4dGVuZHMgQVBJRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihmaWVsZDogRmllbGQpIHtcbiAgICBzdXBlcihgRmllbGQke2ZpZWxkQWZmZWN0c0RhdGEoZmllbGQpID8gYCBcIiR7ZmllbGQubmFtZX1cImAgOiAnJ30gaXMgZWl0aGVyIG1pc3NpbmcgYSBmaWVsZCB0eXBlIG9yIGl0IGRvZXMgbm90IG1hdGNoIGFuIGF2YWlsYWJsZSBmaWVsZCB0eXBlYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZ0ZpZWxkVHlwZTtcbiJdLCJuYW1lcyI6WyJNaXNzaW5nRmllbGRUeXBlIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsIkFQSUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQVNBOzs7ZUFBQTs7O3FCQVR3QzsrREFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsaUNBTUgsQUFOSDs7Y0FBTUE7K0JBQUFBO2FBQUFBLGlCQUNRQyxLQUFZO2dDQURwQkQ7aUNBRUksQUFBQyxRQUF5RCxPQUFsREUsSUFBQUEsdUJBQWdCLEVBQUNELFNBQVMsQUFBQyxLQUFlLE9BQVhBLE1BQU1FLElBQUksRUFBQyxPQUFLLElBQUc7O1dBRjlESDtFQUF5QkksaUJBQVE7SUFNdkMsV0FBZUoifQ==