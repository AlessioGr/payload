"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "combineMerge", {
    enumerable: true,
    get: function() {
        return combineMerge;
    }
});
var _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var combineMerge = function(target, source, options) {
    var destination = target.slice();
    source.forEach(function(item, index) {
        if (typeof destination[index] === "undefined") {
            destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
        } else if (options.isMergeableObject(item)) {
            destination[index] = (0, _deepmerge.default)(target[index], item, options);
        } else if (target.indexOf(item) === -1) {
            destination.push(item);
        }
    });
    return destination;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvY29tYmluZU1lcmdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuXG5leHBvcnQgY29uc3QgY29tYmluZU1lcmdlID0gKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IGRlc3RpbmF0aW9uID0gdGFyZ2V0LnNsaWNlKCk7XG5cbiAgc291cmNlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpbmRleF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBkZXN0aW5hdGlvbltpbmRleF0gPSBvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGl0ZW0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChpdGVtKSkge1xuICAgICAgZGVzdGluYXRpb25baW5kZXhdID0gbWVyZ2UodGFyZ2V0W2luZGV4XSwgaXRlbSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuaW5kZXhPZihpdGVtKSA9PT0gLTEpIHtcbiAgICAgIGRlc3RpbmF0aW9uLnB1c2goaXRlbSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcbiJdLCJuYW1lcyI6WyJjb21iaW5lTWVyZ2UiLCJ0YXJnZXQiLCJzb3VyY2UiLCJvcHRpb25zIiwiZGVzdGluYXRpb24iLCJzbGljZSIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCIsImlzTWVyZ2VhYmxlT2JqZWN0IiwibWVyZ2UiLCJpbmRleE9mIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFFYUE7OztlQUFBQTs7O2dFQUZLOzs7Ozs7QUFFWCxJQUFNQSxlQUFlLFNBQUNDLFFBQVFDLFFBQVFDO0lBQzNDLElBQU1DLGNBQWNILE9BQU9JLEtBQUs7SUFFaENILE9BQU9JLE9BQU8sQ0FBQyxTQUFDQyxNQUFNQztRQUNwQixJQUFJLE9BQU9KLFdBQVcsQ0FBQ0ksTUFBTSxLQUFLLGFBQWE7WUFDN0NKLFdBQVcsQ0FBQ0ksTUFBTSxHQUFHTCxRQUFRTSw2QkFBNkIsQ0FBQ0YsTUFBTUo7UUFDbkUsT0FBTyxJQUFJQSxRQUFRTyxpQkFBaUIsQ0FBQ0gsT0FBTztZQUMxQ0gsV0FBVyxDQUFDSSxNQUFNLEdBQUdHLElBQUFBLGtCQUFLLEVBQUNWLE1BQU0sQ0FBQ08sTUFBTSxFQUFFRCxNQUFNSjtRQUNsRCxPQUFPLElBQUlGLE9BQU9XLE9BQU8sQ0FBQ0wsVUFBVSxDQUFDLEdBQUc7WUFDdENILFlBQVlTLElBQUksQ0FBQ047UUFDbkI7SUFDRjtJQUNBLE9BQU9IO0FBQ1QifQ==