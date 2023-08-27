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
import i18next from "i18next";
import deepmerge from "deepmerge";
import { defaultOptions } from "./defaultOptions";
export function i18nInit(options) {
    if (i18next.isInitialized) {
        return i18next;
    }
    i18next.init(_object_spread({}, deepmerge(defaultOptions, options || {})));
    return i18next;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2xhdGlvbnMvaW5pdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCB0eXBlIHsgaTE4biwgSW5pdE9wdGlvbnMgfSBmcm9tICdpMThuZXh0JztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcbmltcG9ydCB7IGRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9kZWZhdWx0T3B0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpMThuSW5pdChvcHRpb25zOiBJbml0T3B0aW9ucyk6IGkxOG4ge1xuICBpZiAoaTE4bmV4dC5pc0luaXRpYWxpemVkKSB7XG4gICAgcmV0dXJuIGkxOG5leHQ7XG4gIH1cbiAgaTE4bmV4dC5pbml0KHtcbiAgICAuLi5kZWVwbWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgfHwge30pLFxuICB9KTtcbiAgcmV0dXJuIGkxOG5leHQ7XG59XG4iXSwibmFtZXMiOlsiaTE4bmV4dCIsImRlZXBtZXJnZSIsImRlZmF1bHRPcHRpb25zIiwiaTE4bkluaXQiLCJvcHRpb25zIiwiaXNJbml0aWFsaXplZCIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxhQUFhLFVBQVU7QUFFOUIsT0FBT0MsZUFBZSxZQUFZO0FBQ2xDLFNBQVNDLGNBQWMsUUFBUSxtQkFBbUI7QUFFbEQsT0FBTyxTQUFTQyxTQUFTQyxPQUFvQjtJQUMzQyxJQUFJSixRQUFRSyxhQUFhLEVBQUU7UUFDekIsT0FBT0w7SUFDVDtJQUNBQSxRQUFRTSxJQUFJLENBQUMsbUJBQ1JMLFVBQVVDLGdCQUFnQkUsV0FBVyxDQUFDO0lBRTNDLE9BQU9KO0FBQ1QifQ==