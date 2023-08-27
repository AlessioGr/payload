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
import APIError from "./APIError";
var MissingCollectionLabel = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(MissingCollectionLabel, APIError);
    var _super = _create_super(MissingCollectionLabel);
    function MissingCollectionLabel() {
        _class_call_check(this, MissingCollectionLabel);
        return _super.call(this, "payload.config.collection object is missing label");
    }
    return MissingCollectionLabel;
}(APIError);
export default MissingCollectionLabel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvTWlzc2luZ0NvbGxlY3Rpb25MYWJlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcic7XG5cbmNsYXNzIE1pc3NpbmdDb2xsZWN0aW9uTGFiZWwgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdwYXlsb2FkLmNvbmZpZy5jb2xsZWN0aW9uIG9iamVjdCBpcyBtaXNzaW5nIGxhYmVsJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlzc2luZ0NvbGxlY3Rpb25MYWJlbDtcbiJdLCJuYW1lcyI6WyJBUElFcnJvciIsIk1pc3NpbmdDb2xsZWN0aW9uTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsY0FBYyxhQUFhO0FBRWxDLElBQUEsQUFBTUMsdUNBTUgsQUFOSDs7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTtpQ0FFSTs7V0FGSkE7RUFBK0JEO0FBTXJDLGVBQWVDLHVCQUF1QiJ9