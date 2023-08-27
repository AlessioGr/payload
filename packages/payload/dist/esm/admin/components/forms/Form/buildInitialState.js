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
var buildInitialState = function(data) {
    if (data) {
        return Object.entries(data).reduce(function(state, param) {
            var _param = _sliced_to_array(param, 2), path = _param[0], value = _param[1];
            return _object_spread_props(_object_spread({}, state), _define_property({}, path, {
                value: value,
                initialValue: value,
                valid: true
            }));
        }, {});
    }
    return undefined;
};
export default buildInitialState;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRJbml0aWFsU3RhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVpbGRJbml0aWFsU3RhdGUgPSAoZGF0YSkgPT4ge1xuICBpZiAoZGF0YSkge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhkYXRhKS5yZWR1Y2UoKHN0YXRlLCBbcGF0aCwgdmFsdWVdKSA9PiAoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBbcGF0aF06IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGluaXRpYWxWYWx1ZTogdmFsdWUsXG4gICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSwge30pO1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSW5pdGlhbFN0YXRlO1xuIl0sIm5hbWVzIjpbImJ1aWxkSW5pdGlhbFN0YXRlIiwiZGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJyZWR1Y2UiLCJzdGF0ZSIsInBhdGgiLCJ2YWx1ZSIsImluaXRpYWxWYWx1ZSIsInZhbGlkIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLG9CQUFvQixTQUFDQztJQUN6QixJQUFJQSxNQUFNO1FBQ1IsT0FBT0MsT0FBT0MsT0FBTyxDQUFDRixNQUFNRyxNQUFNLENBQUMsU0FBQ0M7cURBQVFDLGtCQUFNQzttQkFBWSx3Q0FDekRGLFFBQ0gscUJBQUNDLE1BQU87Z0JBQ05DLE9BQUFBO2dCQUNBQyxjQUFjRDtnQkFDZEUsT0FBTztZQUNUO1dBQ0UsQ0FBQztJQUNQO0lBRUEsT0FBT0M7QUFDVDtBQUVBLGVBQWVWLGtCQUFrQiJ9