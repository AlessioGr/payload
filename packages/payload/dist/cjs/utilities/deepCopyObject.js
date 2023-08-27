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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var deepCopyObject = function(inObject) {
    if (_instanceof(inObject, Date)) return inObject;
    if (_instanceof(inObject, Set)) return new Set(inObject);
    if (_instanceof(inObject, Map)) return new Map(inObject);
    if (typeof inObject !== "object" || inObject === null) {
        return inObject; // Return the value if inObject is not an object
    }
    // Create an array or object to hold the values
    var outObject = Array.isArray(inObject) ? [] : {};
    Object.keys(inObject).forEach(function(key) {
        var value = inObject[key];
        // Recursively (deep) copy for nested objects, including arrays
        outObject[key] = typeof value === "object" && value !== null ? deepCopyObject(value) : value;
    });
    return outObject;
};
var _default = deepCopyObject;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZGVlcENvcHlPYmplY3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVlcENvcHlPYmplY3QgPSAoaW5PYmplY3QpID0+IHtcbiAgaWYgKGluT2JqZWN0IGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIGluT2JqZWN0O1xuXG4gIGlmIChpbk9iamVjdCBpbnN0YW5jZW9mIFNldCkgcmV0dXJuIG5ldyBTZXQoaW5PYmplY3QpO1xuXG4gIGlmIChpbk9iamVjdCBpbnN0YW5jZW9mIE1hcCkgcmV0dXJuIG5ldyBNYXAoaW5PYmplY3QpO1xuXG4gIGlmICh0eXBlb2YgaW5PYmplY3QgIT09ICdvYmplY3QnIHx8IGluT2JqZWN0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGluT2JqZWN0OyAvLyBSZXR1cm4gdGhlIHZhbHVlIGlmIGluT2JqZWN0IGlzIG5vdCBhbiBvYmplY3RcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbiBhcnJheSBvciBvYmplY3QgdG8gaG9sZCB0aGUgdmFsdWVzXG4gIGNvbnN0IG91dE9iamVjdCA9IEFycmF5LmlzQXJyYXkoaW5PYmplY3QpID8gW10gOiB7fTtcblxuICBPYmplY3Qua2V5cyhpbk9iamVjdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBpbk9iamVjdFtrZXldO1xuXG4gICAgLy8gUmVjdXJzaXZlbHkgKGRlZXApIGNvcHkgZm9yIG5lc3RlZCBvYmplY3RzLCBpbmNsdWRpbmcgYXJyYXlzXG4gICAgb3V0T2JqZWN0W2tleV0gPSAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkgPyBkZWVwQ29weU9iamVjdCh2YWx1ZSkgOiB2YWx1ZTtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dE9iamVjdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZXBDb3B5T2JqZWN0O1xuIl0sIm5hbWVzIjpbImRlZXBDb3B5T2JqZWN0IiwiaW5PYmplY3QiLCJEYXRlIiwiU2V0IiwiTWFwIiwib3V0T2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3QkE7OztlQUFBOzs7Ozs7Ozs7O0FBeEJBLElBQU1BLGlCQUFpQixTQUFDQztJQUN0QixJQUFJQSxBQUFRLFlBQVJBLFVBQW9CQyxPQUFNLE9BQU9EO0lBRXJDLElBQUlBLEFBQVEsWUFBUkEsVUFBb0JFLE1BQUssT0FBTyxJQUFJQSxJQUFJRjtJQUU1QyxJQUFJQSxBQUFRLFlBQVJBLFVBQW9CRyxNQUFLLE9BQU8sSUFBSUEsSUFBSUg7SUFFNUMsSUFBSSxPQUFPQSxhQUFhLFlBQVlBLGFBQWEsTUFBTTtRQUNyRCxPQUFPQSxVQUFVLGdEQUFnRDtJQUNuRTtJQUVBLCtDQUErQztJQUMvQyxJQUFNSSxZQUFZQyxNQUFNQyxPQUFPLENBQUNOLFlBQVksRUFBRSxHQUFHLENBQUM7SUFFbERPLE9BQU9DLElBQUksQ0FBQ1IsVUFBVVMsT0FBTyxDQUFDLFNBQUNDO1FBQzdCLElBQU1DLFFBQVFYLFFBQVEsQ0FBQ1UsSUFBSTtRQUUzQiwrREFBK0Q7UUFDL0ROLFNBQVMsQ0FBQ00sSUFBSSxHQUFHLEFBQUMsT0FBT0MsVUFBVSxZQUFZQSxVQUFVLE9BQVFaLGVBQWVZLFNBQVNBO0lBQzNGO0lBRUEsT0FBT1A7QUFDVDtJQUVBLFdBQWVMIn0=