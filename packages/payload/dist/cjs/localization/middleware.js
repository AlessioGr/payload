"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * sets request locale
 *
 * @param localization
 * @returns {Function}
 */ "default", {
    enumerable: true,
    get: function() {
        return localizationMiddleware;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function localizationMiddleware(localization) {
    var middleware = function(req, res, next) {
        if (localization) {
            var validLocales = _to_consumable_array(localization.localeCodes).concat([
                "all"
            ]);
            var validFallbackLocales = _to_consumable_array(localization.localeCodes).concat([
                "null"
            ]);
            var requestedLocale = req.query.locale || localization.defaultLocale;
            var requestedFallbackLocale = req.query["fallback-locale"] || localization.defaultLocale;
            if (req.body) {
                if (req.body.locale) requestedLocale = req.body.locale;
                if (req.body["fallback-locale"]) {
                    requestedFallbackLocale = req.body["fallback-locale"];
                }
            }
            if (requestedFallbackLocale === "none") requestedFallbackLocale = "null";
            if (requestedLocale === "*" || requestedLocale === "all") {
                requestedLocale = "all";
            }
            if (validLocales.find(function(locale) {
                return locale === requestedLocale;
            })) {
                req.locale = requestedLocale;
            }
            if (validFallbackLocales.find(function(locale) {
                return locale === requestedFallbackLocale;
            })) {
                req.fallbackLocale = requestedFallbackLocale;
            }
        }
        return next();
    };
    return middleware;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sb2NhbGl6YXRpb24vbWlkZGxld2FyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5cbi8qKlxuICogc2V0cyByZXF1ZXN0IGxvY2FsZVxuICpcbiAqIEBwYXJhbSBsb2NhbGl6YXRpb25cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9jYWxpemF0aW9uTWlkZGxld2FyZShsb2NhbGl6YXRpb246IGZhbHNlIHwgU2FuaXRpemVkTG9jYWxpemF0aW9uQ29uZmlnKSB7XG4gIGNvbnN0IG1pZGRsZXdhcmUgPSAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBpZiAobG9jYWxpemF0aW9uKSB7XG4gICAgICBjb25zdCB2YWxpZExvY2FsZXMgPSBbLi4ubG9jYWxpemF0aW9uLmxvY2FsZUNvZGVzLCAnYWxsJ107XG4gICAgICBjb25zdCB2YWxpZEZhbGxiYWNrTG9jYWxlcyA9IFsuLi5sb2NhbGl6YXRpb24ubG9jYWxlQ29kZXMsICdudWxsJ107XG5cbiAgICAgIGxldCByZXF1ZXN0ZWRMb2NhbGUgPSByZXEucXVlcnkubG9jYWxlIHx8IGxvY2FsaXphdGlvbi5kZWZhdWx0TG9jYWxlO1xuICAgICAgbGV0IHJlcXVlc3RlZEZhbGxiYWNrTG9jYWxlID0gcmVxLnF1ZXJ5WydmYWxsYmFjay1sb2NhbGUnXSB8fCBsb2NhbGl6YXRpb24uZGVmYXVsdExvY2FsZTtcblxuICAgICAgaWYgKHJlcS5ib2R5KSB7XG4gICAgICAgIGlmIChyZXEuYm9keS5sb2NhbGUpIHJlcXVlc3RlZExvY2FsZSA9IHJlcS5ib2R5LmxvY2FsZTtcbiAgICAgICAgaWYgKHJlcS5ib2R5WydmYWxsYmFjay1sb2NhbGUnXSkgeyByZXF1ZXN0ZWRGYWxsYmFja0xvY2FsZSA9IHJlcS5ib2R5WydmYWxsYmFjay1sb2NhbGUnXTsgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmVxdWVzdGVkRmFsbGJhY2tMb2NhbGUgPT09ICdub25lJykgcmVxdWVzdGVkRmFsbGJhY2tMb2NhbGUgPSAnbnVsbCc7XG4gICAgICBpZiAocmVxdWVzdGVkTG9jYWxlID09PSAnKicgfHwgcmVxdWVzdGVkTG9jYWxlID09PSAnYWxsJykgeyByZXF1ZXN0ZWRMb2NhbGUgPSAnYWxsJzsgfVxuXG4gICAgICBpZiAodmFsaWRMb2NhbGVzLmZpbmQoKGxvY2FsZSkgPT4gbG9jYWxlID09PSByZXF1ZXN0ZWRMb2NhbGUpKSB7XG4gICAgICAgIHJlcS5sb2NhbGUgPSByZXF1ZXN0ZWRMb2NhbGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdmFsaWRGYWxsYmFja0xvY2FsZXMuZmluZChcbiAgICAgICAgICAobG9jYWxlKSA9PiBsb2NhbGUgPT09IHJlcXVlc3RlZEZhbGxiYWNrTG9jYWxlLFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmVxLmZhbGxiYWNrTG9jYWxlID0gcmVxdWVzdGVkRmFsbGJhY2tMb2NhbGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfTtcblxuICByZXR1cm4gbWlkZGxld2FyZTtcbn1cbiJdLCJuYW1lcyI6WyJsb2NhbGl6YXRpb25NaWRkbGV3YXJlIiwibG9jYWxpemF0aW9uIiwibWlkZGxld2FyZSIsInJlcSIsInJlcyIsIm5leHQiLCJ2YWxpZExvY2FsZXMiLCJsb2NhbGVDb2RlcyIsInZhbGlkRmFsbGJhY2tMb2NhbGVzIiwicmVxdWVzdGVkTG9jYWxlIiwicXVlcnkiLCJsb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwicmVxdWVzdGVkRmFsbGJhY2tMb2NhbGUiLCJib2R5IiwiZmluZCIsImZhbGxiYWNrTG9jYWxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVBOzs7OztDQUtDLEdBQ0Q7OztlQUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBVCxTQUFTQSx1QkFBdUJDLFlBQWlEO0lBQzlGLElBQU1DLGFBQWEsU0FBQ0MsS0FBS0MsS0FBS0M7UUFDNUIsSUFBSUosY0FBYztZQUNoQixJQUFNSyxlQUFlLEFBQUMscUJBQUdMLGFBQWFNLFdBQVcsU0FBNUI7Z0JBQThCO2FBQU07WUFDekQsSUFBTUMsdUJBQXVCLEFBQUMscUJBQUdQLGFBQWFNLFdBQVcsU0FBNUI7Z0JBQThCO2FBQU87WUFFbEUsSUFBSUUsa0JBQWtCTixJQUFJTyxLQUFLLENBQUNDLE1BQU0sSUFBSVYsYUFBYVcsYUFBYTtZQUNwRSxJQUFJQywwQkFBMEJWLElBQUlPLEtBQUssQ0FBQyxrQkFBa0IsSUFBSVQsYUFBYVcsYUFBYTtZQUV4RixJQUFJVCxJQUFJVyxJQUFJLEVBQUU7Z0JBQ1osSUFBSVgsSUFBSVcsSUFBSSxDQUFDSCxNQUFNLEVBQUVGLGtCQUFrQk4sSUFBSVcsSUFBSSxDQUFDSCxNQUFNO2dCQUN0RCxJQUFJUixJQUFJVyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQUVELDBCQUEwQlYsSUFBSVcsSUFBSSxDQUFDLGtCQUFrQjtnQkFBRTtZQUM1RjtZQUVBLElBQUlELDRCQUE0QixRQUFRQSwwQkFBMEI7WUFDbEUsSUFBSUosb0JBQW9CLE9BQU9BLG9CQUFvQixPQUFPO2dCQUFFQSxrQkFBa0I7WUFBTztZQUVyRixJQUFJSCxhQUFhUyxJQUFJLENBQUMsU0FBQ0o7dUJBQVdBLFdBQVdGO2dCQUFrQjtnQkFDN0ROLElBQUlRLE1BQU0sR0FBR0Y7WUFDZjtZQUVBLElBQ0VELHFCQUFxQk8sSUFBSSxDQUN2QixTQUFDSjt1QkFBV0EsV0FBV0U7Z0JBRXpCO2dCQUNBVixJQUFJYSxjQUFjLEdBQUdIO1lBQ3ZCO1FBQ0Y7UUFFQSxPQUFPUjtJQUNUO0lBRUEsT0FBT0g7QUFDVCJ9