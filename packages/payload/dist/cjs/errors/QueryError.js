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
var QueryError = /*#__PURE__*/ function(APIError) {
    "use strict";
    _inherits(QueryError, APIError);
    var _super = _create_super(QueryError);
    function QueryError(results, t) {
        _class_call_check(this, QueryError);
        var message = t ? t("error:unspecific", {
            count: results.length
        }) : "The following path".concat(results.length === 1 ? "" : "s", " cannot be queried:");
        return _super.call(this, "".concat(message, " ").concat(results.map(function(err) {
            return err.path;
        }).join(", ")), _httpstatus.default.BAD_REQUEST, results);
    }
    return QueryError;
}(_APIError.default);
var _default = QueryError;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvUXVlcnlFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHR0cFN0YXR1cyBmcm9tICdodHRwLXN0YXR1cyc7XG5pbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IEFQSUVycm9yIGZyb20gJy4vQVBJRXJyb3InO1xuXG5jbGFzcyBRdWVyeUVycm9yIGV4dGVuZHMgQVBJRXJyb3I8eyBwYXRoOiBzdHJpbmcgfVtdPiB7XG4gIGNvbnN0cnVjdG9yKHJlc3VsdHM6IHsgcGF0aDogc3RyaW5nIH1bXSwgdD86IFRGdW5jdGlvbikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSB0ID8gdCgnZXJyb3I6dW5zcGVjaWZpYycsIHsgY291bnQ6IHJlc3VsdHMubGVuZ3RoIH0pIDogYFRoZSBmb2xsb3dpbmcgcGF0aCR7cmVzdWx0cy5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gY2Fubm90IGJlIHF1ZXJpZWQ6YDtcbiAgICBzdXBlcihcbiAgICAgIGAke21lc3NhZ2V9ICR7cmVzdWx0cy5tYXAoKGVycikgPT4gZXJyLnBhdGgpLmpvaW4oJywgJyl9YCxcbiAgICAgIGh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICByZXN1bHRzLFxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlcnlFcnJvcjtcbiJdLCJuYW1lcyI6WyJRdWVyeUVycm9yIiwicmVzdWx0cyIsInQiLCJtZXNzYWdlIiwiY291bnQiLCJsZW5ndGgiLCJtYXAiLCJlcnIiLCJwYXRoIiwiam9pbiIsImh0dHBTdGF0dXMiLCJCQURfUkVRVUVTVCIsIkFQSUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQWVBOzs7ZUFBQTs7O2lFQWZ1QjsrREFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBQSxBQUFNQSwyQkFXSCxBQVhIOztjQUFNQTsrQkFBQUE7YUFBQUEsV0FDUUMsT0FBMkIsRUFBRUMsQ0FBYTtnQ0FEbERGO1FBRUYsSUFBTUcsVUFBVUQsSUFBSUEsRUFBRSxvQkFBb0I7WUFBRUUsT0FBT0gsUUFBUUksTUFBTTtRQUFDLEtBQUssQUFBQyxxQkFBb0QsT0FBaENKLFFBQVFJLE1BQU0sS0FBSyxJQUFJLEtBQUssS0FBSTtpQ0FFMUgsQUFBQyxHQUFhSixPQUFYRSxTQUFRLEtBQTZDLE9BQTFDRixRQUFRSyxHQUFHLENBQUMsU0FBQ0M7bUJBQVFBLElBQUlDLElBQUk7V0FBRUMsSUFBSSxDQUFDLFFBQ2xEQyxtQkFBVSxDQUFDQyxXQUFXLEVBQ3RCVjs7V0FOQUQ7RUFBbUJZLGlCQUFRO0lBV2pDLFdBQWVaIn0=