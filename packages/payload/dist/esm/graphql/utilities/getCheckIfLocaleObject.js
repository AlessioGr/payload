export default function(localization) {
    return function(value) {
        return typeof value === "object" && Object.keys(value).some(function(key) {
            return localization.locales.indexOf(key) > -1;
        });
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9nZXRDaGVja0lmTG9jYWxlT2JqZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChsb2NhbGl6YXRpb246IHsgbG9jYWxlczogc3RyaW5nW10gfSkgPT4gKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiA9PiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAmJiBPYmplY3Qua2V5cyh2YWx1ZSkuc29tZSgoa2V5KSA9PiBsb2NhbGl6YXRpb24ubG9jYWxlcy5pbmRleE9mKGtleSkgPiAtMSk7XG4iXSwibmFtZXMiOlsibG9jYWxpemF0aW9uIiwidmFsdWUiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsImtleSIsImxvY2FsZXMiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFNBQUNBO1dBQXdDLFNBQUNDO2VBQTRCLE9BQU9BLFVBQVUsWUFDN0ZDLE9BQU9DLElBQUksQ0FBQ0YsT0FBT0csSUFBSSxDQUFDLFNBQUNDO21CQUFRTCxhQUFhTSxPQUFPLENBQUNDLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDOzs7RUFBRyJ9