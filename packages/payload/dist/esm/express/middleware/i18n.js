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
import i18nHTTPMiddleware from "i18next-http-middleware";
import deepmerge from "deepmerge";
import { defaultOptions } from "../../translations/defaultOptions";
var i18nMiddleware = function(options) {
    i18next.use(new i18nHTTPMiddleware.LanguageDetector(defaultOptions.detection)).init(_object_spread({
        preload: defaultOptions.supportedLngs
    }, deepmerge(defaultOptions, options || {})));
    return i18nHTTPMiddleware.handle(i18next);
};
export { i18nMiddleware };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvaTE4bi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCB0eXBlIHsgSW5pdE9wdGlvbnMgfSBmcm9tICdpMThuZXh0JztcbmltcG9ydCBpMThuSFRUUE1pZGRsZXdhcmUgZnJvbSAnaTE4bmV4dC1odHRwLW1pZGRsZXdhcmUnO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IHsgSGFuZGxlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuLi8uLi90cmFuc2xhdGlvbnMvZGVmYXVsdE9wdGlvbnMnO1xuXG5jb25zdCBpMThuTWlkZGxld2FyZSA9IChvcHRpb25zOiBJbml0T3B0aW9ucyk6IEhhbmRsZXIgPT4ge1xuICBpMThuZXh0LnVzZShuZXcgaTE4bkhUVFBNaWRkbGV3YXJlLkxhbmd1YWdlRGV0ZWN0b3IoZGVmYXVsdE9wdGlvbnMuZGV0ZWN0aW9uKSlcbiAgICAuaW5pdCh7XG4gICAgICBwcmVsb2FkOiBkZWZhdWx0T3B0aW9ucy5zdXBwb3J0ZWRMbmdzLFxuICAgICAgLi4uZGVlcG1lcmdlKGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIHx8IHt9KSxcbiAgICB9KTtcblxuICByZXR1cm4gaTE4bkhUVFBNaWRkbGV3YXJlLmhhbmRsZShpMThuZXh0KTtcbn07XG5cbmV4cG9ydCB7IGkxOG5NaWRkbGV3YXJlIH07XG4iXSwibmFtZXMiOlsiaTE4bmV4dCIsImkxOG5IVFRQTWlkZGxld2FyZSIsImRlZXBtZXJnZSIsImRlZmF1bHRPcHRpb25zIiwiaTE4bk1pZGRsZXdhcmUiLCJvcHRpb25zIiwidXNlIiwiTGFuZ3VhZ2VEZXRlY3RvciIsImRldGVjdGlvbiIsImluaXQiLCJwcmVsb2FkIiwic3VwcG9ydGVkTG5ncyIsImhhbmRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLGFBQWEsVUFBVTtBQUU5QixPQUFPQyx3QkFBd0IsMEJBQTBCO0FBQ3pELE9BQU9DLGVBQWUsWUFBWTtBQUVsQyxTQUFTQyxjQUFjLFFBQVEsb0NBQW9DO0FBRW5FLElBQU1DLGlCQUFpQixTQUFDQztJQUN0QkwsUUFBUU0sR0FBRyxDQUFDLElBQUlMLG1CQUFtQk0sZ0JBQWdCLENBQUNKLGVBQWVLLFNBQVMsR0FDekVDLElBQUksQ0FBQztRQUNKQyxTQUFTUCxlQUFlUSxhQUFhO09BQ2xDVCxVQUFVQyxnQkFBZ0JFLFdBQVcsQ0FBQztJQUc3QyxPQUFPSixtQkFBbUJXLE1BQU0sQ0FBQ1o7QUFDbkM7QUFFQSxTQUFTSSxjQUFjLEdBQUcifQ==