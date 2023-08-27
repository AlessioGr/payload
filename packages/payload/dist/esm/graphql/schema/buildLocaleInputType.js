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
import { GraphQLEnumType } from "graphql";
import formatName from "../utilities/formatName";
var buildLocaleInputType = function(localization) {
    return new GraphQLEnumType({
        name: "LocaleInputType",
        values: localization.localeCodes.reduce(function(values, locale) {
            return _object_spread_props(_object_spread({}, values), _define_property({}, formatName(locale), {
                value: locale
            }));
        }, {})
    });
};
export default buildLocaleInputType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZExvY2FsZUlucHV0VHlwZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMRW51bVR5cGUsIEdyYXBoUUxTY2FsYXJUeXBlIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZm9ybWF0TmFtZSBmcm9tICcuLi91dGlsaXRpZXMvZm9ybWF0TmFtZSc7XG5cbmNvbnN0IGJ1aWxkTG9jYWxlSW5wdXRUeXBlID0gKFxuICBsb2NhbGl6YXRpb246IFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZyxcbik6IEdyYXBoUUxFbnVtVHlwZSB8IEdyYXBoUUxTY2FsYXJUeXBlID0+IHtcbiAgcmV0dXJuIG5ldyBHcmFwaFFMRW51bVR5cGUoe1xuICAgIG5hbWU6ICdMb2NhbGVJbnB1dFR5cGUnLFxuICAgIHZhbHVlczogbG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLnJlZHVjZShcbiAgICAgICh2YWx1ZXMsIGxvY2FsZSkgPT4gKHtcbiAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICBbZm9ybWF0TmFtZShsb2NhbGUpXToge1xuICAgICAgICAgIHZhbHVlOiBsb2NhbGUsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIHt9LFxuICAgICksXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRMb2NhbGVJbnB1dFR5cGU7XG4iXSwibmFtZXMiOlsiR3JhcGhRTEVudW1UeXBlIiwiZm9ybWF0TmFtZSIsImJ1aWxkTG9jYWxlSW5wdXRUeXBlIiwibG9jYWxpemF0aW9uIiwibmFtZSIsInZhbHVlcyIsImxvY2FsZUNvZGVzIiwicmVkdWNlIiwibG9jYWxlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxlQUFlLFFBQTJCLFVBQVU7QUFFN0QsT0FBT0MsZ0JBQWdCLDBCQUEwQjtBQUVqRCxJQUFNQyx1QkFBdUIsU0FDM0JDO0lBRUEsT0FBTyxJQUFJSCxnQkFBZ0I7UUFDekJJLE1BQU07UUFDTkMsUUFBUUYsYUFBYUcsV0FBVyxDQUFDQyxNQUFNLENBQ3JDLFNBQUNGLFFBQVFHO21CQUFZLHdDQUNoQkgsU0FDSCxxQkFBQ0osV0FBV08sU0FBVTtnQkFDcEJDLE9BQU9EO1lBQ1Q7V0FFRixDQUFDO0lBRUw7QUFDRjtBQUVBLGVBQWVOLHFCQUFxQiJ9