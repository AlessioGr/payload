export var getObjectDotNotation = function(obj, path, defaultValue) {
    if (!path || !obj) return defaultValue;
    var result = path.split(".").reduce(function(o, i) {
        var _o;
        return (_o = o) === null || _o === void 0 ? void 0 : _o[i];
    }, obj);
    return result === undefined ? defaultValue : result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0T2JqZWN0RG90Tm90YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldE9iamVjdERvdE5vdGF0aW9uID0gPFQ+KG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCk6IFQgPT4ge1xuICBpZiAoIXBhdGggfHwgIW9iaikgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgY29uc3QgcmVzdWx0ID0gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgobywgaSkgPT4gbz8uW2ldLCBvYmopO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQgYXMgVDtcbn07XG4iXSwibmFtZXMiOlsiZ2V0T2JqZWN0RG90Tm90YXRpb24iLCJvYmoiLCJwYXRoIiwiZGVmYXVsdFZhbHVlIiwicmVzdWx0Iiwic3BsaXQiLCJyZWR1Y2UiLCJvIiwiaSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFNQSx1QkFBdUIsU0FBSUMsS0FBOEJDLE1BQWNDO0lBQ2xGLElBQUksQ0FBQ0QsUUFBUSxDQUFDRCxLQUFLLE9BQU9FO0lBQzFCLElBQU1DLFNBQVNGLEtBQUtHLEtBQUssQ0FBQyxLQUFLQyxNQUFNLENBQUMsU0FBQ0MsR0FBR0M7WUFBTUQ7Z0JBQUFBLEtBQUFBLGVBQUFBLHlCQUFBQSxFQUFHLENBQUNDLEVBQUU7T0FBRVA7SUFDeEQsT0FBT0csV0FBV0ssWUFBWU4sZUFBZUM7QUFDL0MsRUFBRSJ9