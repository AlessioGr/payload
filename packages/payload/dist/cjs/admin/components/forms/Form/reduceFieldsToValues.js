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
var _flatley = /*#__PURE__*/ _interop_require_default(require("flatley"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var flatleyUnflatten = _flatley.default.unflatten;
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
var _default = reduceFieldsToValues;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vcmVkdWNlRmllbGRzVG9WYWx1ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZsYXRsZXkgZnJvbSAnZmxhdGxleSc7XG5jb25zdCB7IHVuZmxhdHRlbjogZmxhdGxleVVuZmxhdHRlbiB9ID0gZmxhdGxleTtcbmltcG9ydCB7IERhdGEsIEZpZWxkcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCByZWR1Y2VGaWVsZHNUb1ZhbHVlcyA9IChmaWVsZHM6IEZpZWxkcywgdW5mbGF0dGVuPzogYm9vbGVhbik6IERhdGEgPT4ge1xuICBjb25zdCBkYXRhID0ge307XG5cbiAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIWZpZWxkc1trZXldLmRpc2FibGVGb3JtRGF0YSkge1xuICAgICAgZGF0YVtrZXldID0gZmllbGRzW2tleV0udmFsdWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodW5mbGF0dGVuKSB7XG4gICAgcmV0dXJuIGZsYXRsZXlVbmZsYXR0ZW4oZGF0YSwgeyBzYWZlOiB0cnVlIH0pO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VGaWVsZHNUb1ZhbHVlcztcbiJdLCJuYW1lcyI6WyJ1bmZsYXR0ZW4iLCJmbGF0bGV5VW5mbGF0dGVuIiwiZmxhdGxleSIsInJlZHVjZUZpZWxkc1RvVmFsdWVzIiwiZmllbGRzIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZGlzYWJsZUZvcm1EYXRhIiwidmFsdWUiLCJzYWZlIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9CQTs7O2VBQUE7Ozs4REFwQm9COzs7Ozs7QUFDcEIsSUFBUUEsQUFBV0MsbUJBQXFCQyxnQkFBTyxDQUF2Q0Y7QUFHUixJQUFNRyx1QkFBdUIsU0FBQ0MsUUFBZ0JKO0lBQzVDLElBQU1LLE9BQU8sQ0FBQztJQUVkQyxPQUFPQyxJQUFJLENBQUNILFFBQVFJLE9BQU8sQ0FBQyxTQUFDQztRQUMzQixJQUFJLENBQUNMLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDQyxlQUFlLEVBQUU7WUFDaENMLElBQUksQ0FBQ0ksSUFBSSxHQUFHTCxNQUFNLENBQUNLLElBQUksQ0FBQ0UsS0FBSztRQUMvQjtJQUNGO0lBRUEsSUFBSVgsV0FBVztRQUNiLE9BQU9DLGlCQUFpQkksTUFBTTtZQUFFTyxNQUFNO1FBQUs7SUFDN0M7SUFFQSxPQUFPUDtBQUNUO0lBRUEsV0FBZUYifQ==