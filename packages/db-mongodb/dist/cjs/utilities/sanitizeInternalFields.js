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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var internalFields = [
    "__v"
];
var sanitizeInternalFields = function(incomingDoc) {
    return Object.entries(incomingDoc).reduce(function(newDoc, param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], val = _param[1];
        if (key === "_id") {
            return _object_spread_props(_object_spread({}, newDoc), {
                id: val
            });
        }
        if (internalFields.indexOf(key) > -1) {
            return newDoc;
        }
        return _object_spread_props(_object_spread({}, newDoc), _define_property({}, key, val));
    }, {});
};
var _default = sanitizeInternalFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbnRlcm5hbEZpZWxkcyA9IFsnX192J107XG5cbmNvbnN0IHNhbml0aXplSW50ZXJuYWxGaWVsZHMgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHVua25vd24+PihpbmNvbWluZ0RvYzogVCk6IFQgPT4gT2JqZWN0LmVudHJpZXMoaW5jb21pbmdEb2MpLnJlZHVjZSgobmV3RG9jLCBba2V5LCB2YWxdKTogVCA9PiB7XG4gIGlmIChrZXkgPT09ICdfaWQnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm5ld0RvYyxcbiAgICAgIGlkOiB2YWwsXG4gICAgfTtcbiAgfVxuXG4gIGlmIChpbnRlcm5hbEZpZWxkcy5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgIHJldHVybiBuZXdEb2M7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLm5ld0RvYyxcbiAgICBba2V5XTogdmFsLFxuICB9O1xufSwge30gYXMgVCk7XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplSW50ZXJuYWxGaWVsZHM7XG4iXSwibmFtZXMiOlsiaW50ZXJuYWxGaWVsZHMiLCJzYW5pdGl6ZUludGVybmFsRmllbGRzIiwiaW5jb21pbmdEb2MiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwibmV3RG9jIiwia2V5IiwidmFsIiwiaWQiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9CQTs7O2VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcEJBLElBQU1BLGlCQUFpQjtJQUFDO0NBQU07QUFFOUIsSUFBTUMseUJBQXlCLFNBQW9DQztXQUFzQkMsT0FBT0MsT0FBTyxDQUFDRixhQUFhRyxNQUFNLENBQUMsU0FBQ0M7aURBQVNDLGlCQUFLQztRQUN6SSxJQUFJRCxRQUFRLE9BQU87WUFDakIsT0FBTyx3Q0FDRkQ7Z0JBQ0hHLElBQUlEOztRQUVSO1FBRUEsSUFBSVIsZUFBZVUsT0FBTyxDQUFDSCxPQUFPLENBQUMsR0FBRztZQUNwQyxPQUFPRDtRQUNUO1FBRUEsT0FBTyx3Q0FDRkEsU0FDSCxxQkFBQ0MsS0FBTUM7SUFFWCxHQUFHLENBQUM7O0lBRUosV0FBZVAifQ==