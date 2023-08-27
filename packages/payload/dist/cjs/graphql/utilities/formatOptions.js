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
var _types = require("../../fields/config/types");
var _formatName = /*#__PURE__*/ _interop_require_default(require("./formatName"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var formatOptions = function(field) {
    return field.options.reduce(function(values, option) {
        if ((0, _types.optionIsObject)(option)) {
            return _object_spread_props(_object_spread({}, values), _define_property({}, (0, _formatName.default)(option.value), {
                value: option.value
            }));
        }
        return _object_spread_props(_object_spread({}, values), _define_property({}, (0, _formatName.default)(option), {
            value: option
        }));
    }, {});
};
var _default = formatOptions;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXRPcHRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9wdGlvbklzT2JqZWN0LCBSYWRpb0ZpZWxkLCBTZWxlY3RGaWVsZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IGZvcm1hdE5hbWUgZnJvbSAnLi9mb3JtYXROYW1lJztcblxuY29uc3QgZm9ybWF0T3B0aW9ucyA9IChmaWVsZDogUmFkaW9GaWVsZCB8IFNlbGVjdEZpZWxkKSA9PiB7XG4gIHJldHVybiBmaWVsZC5vcHRpb25zLnJlZHVjZSgodmFsdWVzLCBvcHRpb24pID0+IHtcbiAgICBpZiAob3B0aW9uSXNPYmplY3Qob3B0aW9uKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbZm9ybWF0TmFtZShvcHRpb24udmFsdWUpXToge1xuICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi52YWx1ZXMsXG4gICAgICBbZm9ybWF0TmFtZShvcHRpb24pXToge1xuICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICB9LCB7fSk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdE9wdGlvbnM7XG4iXSwibmFtZXMiOlsiZm9ybWF0T3B0aW9ucyIsImZpZWxkIiwib3B0aW9ucyIsInJlZHVjZSIsInZhbHVlcyIsIm9wdGlvbiIsIm9wdGlvbklzT2JqZWN0IiwiZm9ybWF0TmFtZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7OytCQXdCQTs7O2VBQUE7OztxQkF4QndEO2lFQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFNQSxnQkFBZ0IsU0FBQ0M7SUFDckIsT0FBT0EsTUFBTUMsT0FBTyxDQUFDQyxNQUFNLENBQUMsU0FBQ0MsUUFBUUM7UUFDbkMsSUFBSUMsSUFBQUEscUJBQWMsRUFBQ0QsU0FBUztZQUMxQixPQUFPLHdDQUNGRCxTQUNILHFCQUFDRyxJQUFBQSxtQkFBVSxFQUFDRixPQUFPRyxLQUFLLEdBQUk7Z0JBQzFCQSxPQUFPSCxPQUFPRyxLQUFLO1lBQ3JCO1FBRUo7UUFFQSxPQUFPLHdDQUNGSixTQUNILHFCQUFDRyxJQUFBQSxtQkFBVSxFQUFDRixTQUFVO1lBQ3BCRyxPQUFPSDtRQUNUO0lBRUosR0FBRyxDQUFDO0FBQ047SUFHQSxXQUFlTCJ9