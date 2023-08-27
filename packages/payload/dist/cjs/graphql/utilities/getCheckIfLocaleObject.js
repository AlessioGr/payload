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
var _default = function(localization) {
    return function(value) {
        return typeof value === "object" && Object.keys(value).some(function(key) {
            return localization.locales.indexOf(key) > -1;
        });
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9nZXRDaGVja0lmTG9jYWxlT2JqZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChsb2NhbGl6YXRpb246IHsgbG9jYWxlczogc3RyaW5nW10gfSkgPT4gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAmJiBPYmplY3Qua2V5cyh2YWx1ZSkuc29tZSgoa2V5KSA9PiBsb2NhbGl6YXRpb24ubG9jYWxlcy5pbmRleE9mKGtleSkgPiAtMSk7XG4iXSwibmFtZXMiOlsibG9jYWxpemF0aW9uIiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImtleSIsImxvY2FsZXMiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFBOzs7ZUFBQTs7O0lBQUEsV0FBZSxTQUFDQTtXQUF3QyxTQUFDQztlQUE0QixPQUFPQSxVQUFVLFlBQzdGQyxPQUFPQyxJQUFJLENBQUNGLE9BQU9HLElBQUksQ0FBQyxTQUFDQzttQkFBUUwsYUFBYU0sT0FBTyxDQUFDQyxPQUFPLENBQUNGLE9BQU8sQ0FBQyJ9