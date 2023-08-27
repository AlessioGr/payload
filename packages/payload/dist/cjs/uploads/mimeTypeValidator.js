"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "mimeTypeValidator", {
    enumerable: true,
    get: function() {
        return mimeTypeValidator;
    }
});
var mimeTypeValidator = function(mimeTypes) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL21pbWVUeXBlVmFsaWRhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRlIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtaW1lVHlwZVZhbGlkYXRvciA9IChtaW1lVHlwZXM6IHN0cmluZ1tdKTogVmFsaWRhdGUgPT4gKHZhbDogc3RyaW5nLCB7IHNpYmxpbmdEYXRhIH0pID0+IHtcbiAgaWYgKCFzaWJsaW5nRGF0YS5maWxlbmFtZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCF2YWwpIHtcbiAgICByZXR1cm4gJ0ludmFsaWQgZmlsZSB0eXBlJztcbiAgfVxuXG4gIGNvbnN0IGNsZWFuZWRNaW1lVHlwZXMgPSBtaW1lVHlwZXMubWFwKCh2KSA9PiB2LnJlcGxhY2UoJyonLCAnJykpO1xuICByZXR1cm4gIWNsZWFuZWRNaW1lVHlwZXMuc29tZSgodikgPT4gdmFsLnN0YXJ0c1dpdGgodikpXG4gICAgPyBgSW52YWxpZCBmaWxlIHR5cGU6ICcke3ZhbH0nYFxuICAgIDogdHJ1ZTtcbn07XG4iXSwibmFtZXMiOlsibWltZVR5cGVWYWxpZGF0b3IiLCJtaW1lVHlwZXMiLCJ2YWwiLCJzaWJsaW5nRGF0YSIsImZpbGVuYW1lIiwiY2xlYW5lZE1pbWVUeXBlcyIsIm1hcCIsInYiLCJyZXBsYWNlIiwic29tZSIsInN0YXJ0c1dpdGgiXSwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzs7ZUFBQUE7OztBQUFOLElBQU1BLG9CQUFvQixTQUFDQztXQUFrQyxTQUFDQztZQUFlQyxvQkFBQUE7UUFDbEYsSUFBSSxDQUFDQSxZQUFZQyxRQUFRLEVBQUU7WUFDekIsT0FBTztRQUNUO1FBRUEsSUFBSSxDQUFDRixLQUFLO1lBQ1IsT0FBTztRQUNUO1FBRUEsSUFBTUcsbUJBQW1CSixVQUFVSyxHQUFHLENBQUMsU0FBQ0M7bUJBQU1BLEVBQUVDLE9BQU8sQ0FBQyxLQUFLOztRQUM3RCxPQUFPLENBQUNILGlCQUFpQkksSUFBSSxDQUFDLFNBQUNGO21CQUFNTCxJQUFJUSxVQUFVLENBQUNIO2FBQ2hELEFBQUMsdUJBQTBCLE9BQUpMLEtBQUksT0FDM0I7SUFDTiJ9