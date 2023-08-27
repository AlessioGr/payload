export var mimeTypeValidator = function(mimeTypes) {
    return function(val, param) {
        var siblingData = param.siblingData;
        if (!siblingData.filename) {
            return true;
        }
        if (!val) {
            return "Invalid file type";
        }
        var cleanedMimeTypes = mimeTypes.map(function(v) {
            return v.replace("*", "");
        });
        return !cleanedMimeTypes.some(function(v) {
            return val.startsWith(v);
        }) ? "Invalid file type: '".concat(val, "'") : true;
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL21pbWVUeXBlVmFsaWRhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRlIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtaW1lVHlwZVZhbGlkYXRvciA9IChtaW1lVHlwZXM6IHN0cmluZ1tdKTogVmFsaWRhdGUgPT4gKHZhbDogc3RyaW5nLCB7IHNpYmxpbmdEYXRhIH0pID0+IHtcbiAgaWYgKCFzaWJsaW5nRGF0YS5maWxlbmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gJ0ludmFsaWQgZmlsZSB0eXBlJztcbiAgfVxuXG4gIGNvbnN0IGNsZWFuZWRNaW1lVHlwZXMgPSBtaW1lVHlwZXMubWFwKCh2KSA9PiB2LnJlcGxhY2UoJyonLCAnJykpO1xuICByZXR1cm4gIWNsZWFuZWRNaW1lVHlwZXMuc29tZSgodikgPT4gdmFsLnN0YXJ0c1dpdGgodikpXG4gICAgPyBgSW52YWxpZCBmaWxlIHR5cGU6ICcke3ZhbH0nYFxuICAgIDogdHJ1ZTtcbn07XG4iXSwibmFtZXMiOlsibWltZVR5cGVWYWxpZGF0b3IiLCJtaW1lVHlwZXMiLCJ2YWwiLCJzaWJsaW5nRGF0YSIsImZpbGVuYW1lIiwiY2xlYW5lZE1pbWVUeXBlcyIsIm1hcCIsInYiLCJyZXBsYWNlIiwic29tZSIsInN0YXJ0c1dpdGgiXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sSUFBTUEsb0JBQW9CLFNBQUNDO1dBQWtDLFNBQUNDO1lBQWVDLG9CQUFBQTtRQUNsRixJQUFJLENBQUNBLFlBQVlDLFFBQVEsRUFBRTtZQUN6QixPQUFPO1FBQ1Q7UUFFQSxJQUFJLENBQUNGLEtBQUs7WUFDUixPQUFPO1FBQ1Q7UUFFQSxJQUFNRyxtQkFBbUJKLFVBQVVLLEdBQUcsQ0FBQyxTQUFDQzttQkFBTUEsRUFBRUMsT0FBTyxDQUFDLEtBQUs7O1FBQzdELE9BQU8sQ0FBQ0gsaUJBQWlCSSxJQUFJLENBQUMsU0FBQ0Y7bUJBQU1MLElBQUlRLFVBQVUsQ0FBQ0g7YUFDaEQsQUFBQyx1QkFBMEIsT0FBSkwsS0FBSSxPQUMzQjtJQUNOO0VBQUUifQ==