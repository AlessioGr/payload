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
export var cloneDataFromOriginalDoc = function(originalDocData) {
    if (Array.isArray(originalDocData)) {
        return originalDocData.map(function(row) {
            if (typeof row === "object" && row != null) {
                return _object_spread({}, row);
            }
            return row;
        });
    }
    if (typeof originalDocData === "object" && originalDocData !== null) {
        return _object_spread({}, originalDocData);
    }
    return originalDocData;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlL2Nsb25lRGF0YUZyb21PcmlnaW5hbERvYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2xvbmVEYXRhRnJvbU9yaWdpbmFsRG9jID0gKG9yaWdpbmFsRG9jRGF0YTogdW5rbm93bik6IHVua25vd24gPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW5hbERvY0RhdGEpKSB7XG4gICAgcmV0dXJuIG9yaWdpbmFsRG9jRGF0YS5tYXAoKHJvdykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiByb3cgPT09ICdvYmplY3QnICYmIHJvdyAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucm93LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93O1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvcmlnaW5hbERvY0RhdGEgPT09ICdvYmplY3QnICYmIG9yaWdpbmFsRG9jRGF0YSAhPT0gbnVsbCkge1xuICAgIHJldHVybiB7IC4uLm9yaWdpbmFsRG9jRGF0YSB9O1xuICB9XG5cbiAgcmV0dXJuIG9yaWdpbmFsRG9jRGF0YTtcbn07XG4iXSwibmFtZXMiOlsiY2xvbmVEYXRhRnJvbU9yaWdpbmFsRG9jIiwib3JpZ2luYWxEb2NEYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwicm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxJQUFNQSwyQkFBMkIsU0FBQ0M7SUFDdkMsSUFBSUMsTUFBTUMsT0FBTyxDQUFDRixrQkFBa0I7UUFDbEMsT0FBT0EsZ0JBQWdCRyxHQUFHLENBQUMsU0FBQ0M7WUFDMUIsSUFBSSxPQUFPQSxRQUFRLFlBQVlBLE9BQU8sTUFBTTtnQkFDMUMsT0FBTyxtQkFDRkE7WUFFUDtZQUVBLE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUksT0FBT0osb0JBQW9CLFlBQVlBLG9CQUFvQixNQUFNO1FBQ25FLE9BQU8sbUJBQUtBO0lBQ2Q7SUFFQSxPQUFPQTtBQUNULEVBQUUifQ==