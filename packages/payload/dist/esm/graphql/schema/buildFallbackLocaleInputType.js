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
import { GraphQLEnumType } from "graphql";
import formatName from "../utilities/formatName";
var buildFallbackLocaleInputType = function(localization) {
    return new GraphQLEnumType({
        name: "FallbackLocaleInputType",
        values: _to_consumable_array(localization.localeCodes).concat([
            "none"
        ]).reduce(function(values, locale) {
            return _object_spread_props(_object_spread({}, values), _define_property({}, formatName(locale), {
                value: locale
            }));
        }, {})
    });
};
export default buildFallbackLocaleInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZEZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxFbnVtVHlwZSB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgU2FuaXRpemVkTG9jYWxpemF0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4uL3V0aWxpdGllcy9mb3JtYXROYW1lJztcblxuY29uc3QgYnVpbGRGYWxsYmFja0xvY2FsZUlucHV0VHlwZSA9IChcbiAgbG9jYWxpemF0aW9uOiBTYW5pdGl6ZWRMb2NhbGl6YXRpb25Db25maWcsXG4pOiBHcmFwaFFMRW51bVR5cGUgPT4ge1xuICByZXR1cm4gbmV3IEdyYXBoUUxFbnVtVHlwZSh7XG4gICAgbmFtZTogJ0ZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlJyxcbiAgICB2YWx1ZXM6IFsuLi5sb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMsICdub25lJ10ucmVkdWNlKFxuICAgICAgKHZhbHVlcywgbG9jYWxlKSA9PiAoe1xuICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgIFtmb3JtYXROYW1lKGxvY2FsZSldOiB7XG4gICAgICAgICAgdmFsdWU6IGxvY2FsZSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAge30sXG4gICAgKSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZEZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlO1xuIl0sIm5hbWVzIjpbIkdyYXBoUUxFbnVtVHlwZSIsImZvcm1hdE5hbWUiLCJidWlsZEZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIiwibG9jYWxpemF0aW9uIiwibmFtZSIsInZhbHVlcyIsImxvY2FsZUNvZGVzIiwicmVkdWNlIiwibG9jYWxlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsZUFBZSxRQUFRLFVBQVU7QUFFMUMsT0FBT0MsZ0JBQWdCLDBCQUEwQjtBQUVqRCxJQUFNQywrQkFBK0IsU0FDbkNDO0lBRUEsT0FBTyxJQUFJSCxnQkFBZ0I7UUFDekJJLE1BQU07UUFDTkMsUUFBUSxBQUFDLHFCQUFHRixhQUFhRyxXQUFXLFNBQTVCO1lBQThCO1NBQU8sRUFBQ0MsTUFBTSxDQUNsRCxTQUFDRixRQUFRRzttQkFBWSx3Q0FDaEJILFNBQ0gscUJBQUNKLFdBQVdPLFNBQVU7Z0JBQ3BCQyxPQUFPRDtZQUNUO1dBRUYsQ0FBQztJQUVMO0FBQ0Y7QUFFQSxlQUFlTiw2QkFBNkIifQ==