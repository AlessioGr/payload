"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "appendVersionToQueryKey", {
    enumerable: true,
    get: function() {
        return appendVersionToQueryKey;
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
var appendVersionToQueryKey = function(query) {
    return Object.entries(query).reduce(function(res, param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], val = _param[1];
        if ([
            "and",
            "or",
            "AND",
            "OR"
        ].includes(key) && Array.isArray(val)) {
            return _object_spread_props(_object_spread({}, res), _define_property({}, key.toLowerCase(), val.map(function(subQuery) {
                return appendVersionToQueryKey(subQuery);
            })));
        }
        if (key !== "id") {
            return _object_spread_props(_object_spread({}, res), _define_property({}, "version.".concat(key), val));
        }
        return _object_spread_props(_object_spread({}, res), {
            _id: val
        });
    }, {});
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92ZXJzaW9ucy9kcmFmdHMvYXBwZW5kVmVyc2lvblRvUXVlcnlLZXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRWZXJzaW9uVG9RdWVyeUtleSA9IChxdWVyeTogV2hlcmUpOiBXaGVyZSA9PiB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhxdWVyeSkucmVkdWNlKChyZXMsIFtrZXksIHZhbF0pID0+IHtcbiAgICBpZiAoWydhbmQnLCAnb3InLCAnQU5EJywgJ09SJ10uaW5jbHVkZXMoa2V5KSAmJiBBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJlcyxcbiAgICAgICAgW2tleS50b0xvd2VyQ2FzZSgpXTogdmFsLm1hcCgoc3ViUXVlcnkpID0+IGFwcGVuZFZlcnNpb25Ub1F1ZXJ5S2V5KHN1YlF1ZXJ5KSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChrZXkgIT09ICdpZCcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJlcyxcbiAgICAgICAgW2B2ZXJzaW9uLiR7a2V5fWBdOiB2YWwsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5yZXMsXG4gICAgICBfaWQ6IHZhbCxcbiAgICB9O1xuICB9LCB7fSk7XG59O1xuIl0sIm5hbWVzIjpbImFwcGVuZFZlcnNpb25Ub1F1ZXJ5S2V5IiwicXVlcnkiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwicmVzIiwia2V5IiwidmFsIiwiaW5jbHVkZXMiLCJBcnJheSIsImlzQXJyYXkiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsInN1YlF1ZXJ5IiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7O2VBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQU1BLDBCQUEwQixTQUFDQztJQUN0QyxPQUFPQyxPQUFPQyxPQUFPLENBQUNGLE9BQU9HLE1BQU0sQ0FBQyxTQUFDQztpREFBTUMsaUJBQUtDO1FBQzlDLElBQUk7WUFBQztZQUFPO1lBQU07WUFBTztTQUFLLENBQUNDLFFBQVEsQ0FBQ0YsUUFBUUcsTUFBTUMsT0FBTyxDQUFDSCxNQUFNO1lBQ2xFLE9BQU8sd0NBQ0ZGLE1BQ0gscUJBQUNDLElBQUlLLFdBQVcsSUFBS0osSUFBSUssR0FBRyxDQUFDLFNBQUNDO3VCQUFhYix3QkFBd0JhOztRQUV2RTtRQUVBLElBQUlQLFFBQVEsTUFBTTtZQUNoQixPQUFPLHdDQUNGRCxNQUNILHFCQUFDLEFBQUMsV0FBYyxPQUFKQyxNQUFRQztRQUV4QjtRQUVBLE9BQU8sd0NBQ0ZGO1lBQ0hTLEtBQUtQOztJQUVULEdBQUcsQ0FBQztBQUNOIn0=