"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSupportedDateLocale", {
    enumerable: true,
    get: function() {
        return getSupportedDateLocale;
    }
});
var getSupportedDateLocale = function() {
    var locale = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "enUS";
    var formattedLocales = {
        en: "enUS",
        my: "enUS",
        ua: "uk",
        zh: "zhCN"
    };
    return formattedLocales[locale] || locale;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvZm9ybWF0RGF0ZS9nZXRTdXBwb3J0ZWREYXRlTG9jYWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRTdXBwb3J0ZWREYXRlTG9jYWxlID0gKGxvY2FsZSA9ICdlblVTJyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGZvcm1hdHRlZExvY2FsZXMgPSB7XG4gICAgZW46ICdlblVTJyxcbiAgICBteTogJ2VuVVMnLCAvLyBCdXJtZXNlIGlzIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkXG4gICAgdWE6ICd1aycsXG4gICAgemg6ICd6aENOJyxcbiAgfTtcblxuICByZXR1cm4gZm9ybWF0dGVkTG9jYWxlc1tsb2NhbGVdIHx8IGxvY2FsZTtcbn07XG4iXSwibmFtZXMiOlsiZ2V0U3VwcG9ydGVkRGF0ZUxvY2FsZSIsImxvY2FsZSIsImZvcm1hdHRlZExvY2FsZXMiLCJlbiIsIm15IiwidWEiLCJ6aCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFBYUE7OztlQUFBQTs7O0FBQU4sSUFBTUEseUJBQXlCO1FBQUNDLDBFQUFTO0lBQzlDLElBQU1DLG1CQUFtQjtRQUN2QkMsSUFBSTtRQUNKQyxJQUFJO1FBQ0pDLElBQUk7UUFDSkMsSUFBSTtJQUNOO0lBRUEsT0FBT0osZ0JBQWdCLENBQUNELE9BQU8sSUFBSUE7QUFDckMifQ==