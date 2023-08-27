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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var _default = function(enabledFunctions, builtInFunctions) {
    var formattedEnabledFunctions = _to_consumable_array(enabledFunctions);
    if (enabledFunctions.indexOf("ul") > -1 || enabledFunctions.indexOf("ol") > -1) {
        formattedEnabledFunctions.push("li");
    }
    return formattedEnabledFunctions.reduce(function(resultingFunctions, func) {
        if (typeof func === "object" && func.name) {
            return _object_spread_props(_object_spread({}, resultingFunctions), _define_property({}, func.name, func));
        }
        if (typeof func === "string" && builtInFunctions[func]) {
            return _object_spread_props(_object_spread({}, resultingFunctions), _define_property({}, func, builtInFunctions[func]));
        }
        return resultingFunctions;
    }, {});
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L21lcmdlQ3VzdG9tRnVuY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoZW5hYmxlZEZ1bmN0aW9ucywgYnVpbHRJbkZ1bmN0aW9ucykgPT4ge1xuICBjb25zdCBmb3JtYXR0ZWRFbmFibGVkRnVuY3Rpb25zID0gWy4uLmVuYWJsZWRGdW5jdGlvbnNdO1xuXG4gIGlmIChlbmFibGVkRnVuY3Rpb25zLmluZGV4T2YoJ3VsJykgPiAtMSB8fCBlbmFibGVkRnVuY3Rpb25zLmluZGV4T2YoJ29sJykgPiAtMSkge1xuICAgIGZvcm1hdHRlZEVuYWJsZWRGdW5jdGlvbnMucHVzaCgnbGknKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXR0ZWRFbmFibGVkRnVuY3Rpb25zLnJlZHVjZSgocmVzdWx0aW5nRnVuY3Rpb25zLCBmdW5jKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBmdW5jID09PSAnb2JqZWN0JyAmJiBmdW5jLm5hbWUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJlc3VsdGluZ0Z1bmN0aW9ucyxcbiAgICAgICAgW2Z1bmMubmFtZV06IGZ1bmMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZnVuYyA9PT0gJ3N0cmluZycgJiYgYnVpbHRJbkZ1bmN0aW9uc1tmdW5jXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucmVzdWx0aW5nRnVuY3Rpb25zLFxuICAgICAgICBbZnVuY106IGJ1aWx0SW5GdW5jdGlvbnNbZnVuY10sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRpbmdGdW5jdGlvbnM7XG4gIH0sIHt9KTtcbn07XG4iXSwibmFtZXMiOlsiZW5hYmxlZEZ1bmN0aW9ucyIsImJ1aWx0SW5GdW5jdGlvbnMiLCJmb3JtYXR0ZWRFbmFibGVkRnVuY3Rpb25zIiwiaW5kZXhPZiIsInB1c2giLCJyZWR1Y2UiLCJyZXN1bHRpbmdGdW5jdGlvbnMiLCJmdW5jIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFBQTs7O2VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUEsV0FBZSxTQUFDQSxrQkFBa0JDO0lBQ2hDLElBQU1DLDRCQUE2QixxQkFBR0Y7SUFFdEMsSUFBSUEsaUJBQWlCRyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUtILGlCQUFpQkcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHO1FBQzlFRCwwQkFBMEJFLElBQUksQ0FBQztJQUNqQztJQUVBLE9BQU9GLDBCQUEwQkcsTUFBTSxDQUFDLFNBQUNDLG9CQUFvQkM7UUFDM0QsSUFBSSxPQUFPQSxTQUFTLFlBQVlBLEtBQUtDLElBQUksRUFBRTtZQUN6QyxPQUFPLHdDQUNGRixxQkFDSCxxQkFBQ0MsS0FBS0MsSUFBSSxFQUFHRDtRQUVqQjtRQUVBLElBQUksT0FBT0EsU0FBUyxZQUFZTixnQkFBZ0IsQ0FBQ00sS0FBSyxFQUFFO1lBQ3RELE9BQU8sd0NBQ0ZELHFCQUNILHFCQUFDQyxNQUFPTixnQkFBZ0IsQ0FBQ00sS0FBSztRQUVsQztRQUVBLE9BQU9EO0lBQ1QsR0FBRyxDQUFDO0FBQ04ifQ==