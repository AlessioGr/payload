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
var InvalidFieldRelationship = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(InvalidFieldRelationship, APIError);
    var _super = _create_super(InvalidFieldRelationship);
    function InvalidFieldRelationship(field, relationship) {
        _class_call_check(this, InvalidFieldRelationship);
        return _super.call(this, "Field ".concat(field.label, " has invalid relationship '").concat(relationship, "'."));
    }
    return InvalidFieldRelationship;
}(APIError);
export default InvalidFieldRelationship;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbGF0aW9uc2hpcEZpZWxkLCBVcGxvYWRGaWVsZCB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InO1xuXG5jbGFzcyBJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAgZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGZpZWxkOiBSZWxhdGlvbnNoaXBGaWVsZCB8IFVwbG9hZEZpZWxkLCByZWxhdGlvbnNoaXA6IHN0cmluZykge1xuICAgIHN1cGVyKGBGaWVsZCAke2ZpZWxkLmxhYmVsfSBoYXMgaW52YWxpZCByZWxhdGlvbnNoaXAgJyR7cmVsYXRpb25zaGlwfScuYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwO1xuIl0sIm5hbWVzIjpbIkFQSUVycm9yIiwiSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwIiwiZmllbGQiLCJyZWxhdGlvbnNoaXAiLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxjQUFjLGFBQWE7QUFFbEMsSUFBQSxBQUFNQyx5Q0FNSCxBQU5IOztjQUFNQTsrQkFBQUE7YUFBQUEseUJBQ1FDLEtBQXNDLEVBQUVDLFlBQW9CO2dDQURwRUY7aUNBRUksQUFBQyxTQUFpREUsT0FBekNELE1BQU1FLEtBQUssRUFBQywrQkFBMEMsT0FBYkQsY0FBYTs7V0FGbkVGO0VBQWlDRDtBQU12QyxlQUFlQyx5QkFBeUIifQ==