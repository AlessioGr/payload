import flatley from "flatley";
var flatleyUnflatten = flatley.unflatten;
var reduceFieldsToValues = function(fields, unflatten) {
    var data = {};
    Object.keys(fields).forEach(function(key) {
        if (!fields[key].disableFormData) {
            data[key] = fields[key].value;
        }
    });
    if (unflatten) {
        return flatleyUnflatten(data, {
            safe: true
        });
    }
    return data;
};
export default reduceFieldsToValues;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vcmVkdWNlRmllbGRzVG9WYWx1ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZsYXRsZXkgZnJvbSAnZmxhdGxleSc7XG5jb25zdCB7IHVuZmxhdHRlbjogZmxhdGxleVVuZmxhdHRlbiB9ID0gZmxhdGxleTtcbmltcG9ydCB7IERhdGEsIEZpZWxkcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyA9IChmaWVsZHM6IEZpZWxkcywgdW5mbGF0dGVuPzogYm9vbGVhbik6IERhdGEgPT4ge1xuICBjb25zdCBkYXRhID0ge307XG5cbiAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIWZpZWxkc1trZXldLmRpc2FibGVGb3JtRGF0YSkge1xuICAgICAgZGF0YVtrZXldID0gZmllbGRzW2tleV0udmFsdWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodW5mbGF0dGVuKSB7XG4gICAgcmV0dXJuIGZsYXRsZXlVbmZsYXR0ZW4oZGF0YSwgeyBzYWZlOiB0cnVlIH0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VGaWVsZHNUb1ZhbHVlcztcbiJdLCJuYW1lcyI6WyJmbGF0bGV5IiwidW5mbGF0dGVuIiwiZmxhdGxleVVuZmxhdHRlbiIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwiZmllbGRzIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZGlzYWJsZUZvcm1EYXRhIiwidmFsdWUiLCJzYWZlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxhQUFhLFVBQVU7QUFDOUIsSUFBUUMsQUFBV0MsbUJBQXFCRixRQUFoQ0M7QUFHUixJQUFNRSx1QkFBdUIsU0FBQ0MsUUFBZ0JIO0lBQzVDLElBQU1JLE9BQU8sQ0FBQztJQUVkQyxPQUFPQyxJQUFJLENBQUNILFFBQVFJLE9BQU8sQ0FBQyxTQUFDQztRQUMzQixJQUFJLENBQUNMLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDQyxlQUFlLEVBQUU7WUFDaENMLElBQUksQ0FBQ0ksSUFBSSxHQUFHTCxNQUFNLENBQUNLLElBQUksQ0FBQ0UsS0FBSztRQUMvQjtJQUNGO0lBRUEsSUFBSVYsV0FBVztRQUNiLE9BQU9DLGlCQUFpQkcsTUFBTTtZQUFFTyxNQUFNO1FBQUs7SUFDN0M7SUFFQSxPQUFPUDtBQUNUO0FBRUEsZUFBZUYscUJBQXFCIn0=