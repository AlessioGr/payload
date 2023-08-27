"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getObjectDotNotation", {
    enumerable: true,
    get: function() {
        return getObjectDotNotation;
    }
});
var getObjectDotNotation = function(obj, path, defaultValue) {
    if (!path || !obj) return defaultValue;
    var result = path.split(".").reduce(function(o, i) {
        var _o;
        return (_o = o) === null || _o === void 0 ? void 0 : _o[i];
    }, obj);
    return result === undefined ? defaultValue : result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0T2JqZWN0RG90Tm90YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGdldE9iamVjdERvdE5vdGF0aW9uID0gPFQ+KG9iajogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIHBhdGg6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCk6IFQgPT4ge1xuICBpZiAoIXBhdGggfHwgIW9iaikgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgY29uc3QgcmVzdWx0ID0gcGF0aC5zcGxpdCgnLicpLnJlZHVjZSgobywgaSkgPT4gbz8uW2ldLCBvYmopO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQgYXMgVDtcbn07XG4iXSwibmFtZXMiOlsiZ2V0T2JqZWN0RG90Tm90YXRpb24iLCJvYmoiLCJwYXRoIiwiZGVmYXVsdFZhbHVlIiwicmVzdWx0Iiwic3BsaXQiLCJyZWR1Y2UiLCJvIiwiaSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFBYUE7OztlQUFBQTs7O0FBQU4sSUFBTUEsdUJBQXVCLFNBQUlDLEtBQThCQyxNQUFjQztJQUNsRixJQUFJLENBQUNELFFBQVEsQ0FBQ0QsS0FBSyxPQUFPRTtJQUMxQixJQUFNQyxTQUFTRixLQUFLRyxLQUFLLENBQUMsS0FBS0MsTUFBTSxDQUFDLFNBQUNDLEdBQUdDO1lBQU1EO2dCQUFBQSxLQUFBQSxlQUFBQSx5QkFBQUEsRUFBRyxDQUFDQyxFQUFFO09BQUVQO0lBQ3hELE9BQU9HLFdBQVdLLFlBQVlOLGVBQWVDO0FBQy9DIn0=