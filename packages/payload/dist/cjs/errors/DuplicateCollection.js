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
var DuplicateCollection = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(DuplicateCollection, APIError);
    var _super = _create_super(DuplicateCollection);
    function DuplicateCollection(propertyName, duplicates) {
        _class_call_check(this, DuplicateCollection);
        return _super.call(this, "Collection ".concat(propertyName, ' already in use: "').concat(duplicates.join(", "), '"'));
    }
    return DuplicateCollection;
}(_APIError.default);
var _default = DuplicateCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvRHVwbGljYXRlQ29sbGVjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVBJRXJyb3IgZnJvbSAnLi9BUElFcnJvcic7XG5cbmNsYXNzIER1cGxpY2F0ZUNvbGxlY3Rpb24gZXh0ZW5kcyBBUElFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnR5TmFtZTogc3RyaW5nLCBkdXBsaWNhdGVzOiBzdHJpbmdbXSkge1xuICAgIHN1cGVyKGBDb2xsZWN0aW9uICR7cHJvcGVydHlOYW1lfSBhbHJlYWR5IGluIHVzZTogXCIke2R1cGxpY2F0ZXMuam9pbignLCAnKX1cImApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IER1cGxpY2F0ZUNvbGxlY3Rpb247XG4iXSwibmFtZXMiOlsiRHVwbGljYXRlQ29sbGVjdGlvbiIsInByb3BlcnR5TmFtZSIsImR1cGxpY2F0ZXMiLCJqb2luIiwiQVBJRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7K0JBUUE7OztlQUFBOzs7K0RBUnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFBLEFBQU1BLG9DQU1ILEFBTkg7O2NBQU1BOytCQUFBQTthQUFBQSxvQkFDUUMsWUFBb0IsRUFBRUMsVUFBb0I7Z0NBRGxERjtpQ0FFSSxBQUFDLGNBQThDRSxPQUFqQ0QsY0FBYSxzQkFBMEMsT0FBdEJDLFdBQVdDLElBQUksQ0FBQyxPQUFNOztXQUZ6RUg7RUFBNEJJLGlCQUFRO0lBTTFDLFdBQWVKIn0=