function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import passport from "passport";
export default function(config) {
    var defaultMethods = [
        "jwt",
        "anonymous"
    ];
    var methods = config.collections.reduce(function(enabledMethods, collection) {
        if (typeof collection.auth === "object") {
            var collectionMethods = _to_consumable_array(enabledMethods);
            if (Array.isArray(collection.auth.strategies)) {
                collection.auth.strategies.forEach(function(param) {
                    var name = param.name, strategy = param.strategy;
                    collectionMethods.unshift("".concat(collection.slug, "-").concat(name !== null && name !== void 0 ? name : strategy.name));
                });
            }
            if (collection.auth.useAPIKey) {
                collectionMethods.unshift("".concat(collection.slug, "-api-key"));
            }
            return collectionMethods;
        }
        return enabledMethods;
    }, defaultMethods);
    var authenticate = passport.authenticate(methods, {
        session: false
    });
    return authenticate;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvYXV0aGVudGljYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBQYXlsb2FkQXV0aGVudGljYXRlID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiBOZXh0RnVuY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IChjb25maWc6IFNhbml0aXplZENvbmZpZyk6IFBheWxvYWRBdXRoZW50aWNhdGUgPT4ge1xuICBjb25zdCBkZWZhdWx0TWV0aG9kcyA9IFsnand0JywgJ2Fub255bW91cyddO1xuXG4gIGNvbnN0IG1ldGhvZHMgPSBjb25maWcuY29sbGVjdGlvbnMucmVkdWNlKChlbmFibGVkTWV0aG9kcywgY29sbGVjdGlvbikgPT4ge1xuICAgIGlmICh0eXBlb2YgY29sbGVjdGlvbi5hdXRoID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgY29sbGVjdGlvbk1ldGhvZHMgPSBbLi4uZW5hYmxlZE1ldGhvZHNdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uLmF1dGguc3RyYXRlZ2llcykpIHtcbiAgICAgICAgY29sbGVjdGlvbi5hdXRoLnN0cmF0ZWdpZXMuZm9yRWFjaCgoeyBuYW1lLCBzdHJhdGVneSB9KSA9PiB7XG4gICAgICAgICAgY29sbGVjdGlvbk1ldGhvZHMudW5zaGlmdChgJHtjb2xsZWN0aW9uLnNsdWd9LSR7bmFtZSA/PyBzdHJhdGVneS5uYW1lfWApO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbGxlY3Rpb24uYXV0aC51c2VBUElLZXkpIHtcbiAgICAgICAgY29sbGVjdGlvbk1ldGhvZHMudW5zaGlmdChgJHtjb2xsZWN0aW9uLnNsdWd9LWFwaS1rZXlgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb25NZXRob2RzO1xuICAgIH1cblxuICAgIHJldHVybiBlbmFibGVkTWV0aG9kcztcbiAgfSwgZGVmYXVsdE1ldGhvZHMpO1xuXG4gIGNvbnN0IGF1dGhlbnRpY2F0ZSA9IHBhc3Nwb3J0LmF1dGhlbnRpY2F0ZShtZXRob2RzLCB7IHNlc3Npb246IGZhbHNlIH0pO1xuICByZXR1cm4gYXV0aGVudGljYXRlO1xufTtcbiJdLCJuYW1lcyI6WyJwYXNzcG9ydCIsImNvbmZpZyIsImRlZmF1bHRNZXRob2RzIiwibWV0aG9kcyIsImNvbGxlY3Rpb25zIiwicmVkdWNlIiwiZW5hYmxlZE1ldGhvZHMiLCJjb2xsZWN0aW9uIiwiYXV0aCIsImNvbGxlY3Rpb25NZXRob2RzIiwiQXJyYXkiLCJpc0FycmF5Iiwic3RyYXRlZ2llcyIsImZvckVhY2giLCJuYW1lIiwic3RyYXRlZ3kiLCJ1bnNoaWZ0Iiwic2x1ZyIsInVzZUFQSUtleSIsImF1dGhlbnRpY2F0ZSIsInNlc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxjQUFjLFdBQVc7QUFNaEMsZUFBZSxTQUFDQztJQUNkLElBQU1DLGlCQUFpQjtRQUFDO1FBQU87S0FBWTtJQUUzQyxJQUFNQyxVQUFVRixPQUFPRyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxnQkFBZ0JDO1FBQ3pELElBQUksT0FBT0EsV0FBV0MsSUFBSSxLQUFLLFVBQVU7WUFDdkMsSUFBTUMsb0JBQXFCLHFCQUFHSDtZQUU5QixJQUFJSSxNQUFNQyxPQUFPLENBQUNKLFdBQVdDLElBQUksQ0FBQ0ksVUFBVSxHQUFHO2dCQUM3Q0wsV0FBV0MsSUFBSSxDQUFDSSxVQUFVLENBQUNDLE9BQU8sQ0FBQzt3QkFBR0MsYUFBQUEsTUFBTUMsaUJBQUFBO29CQUMxQ04sa0JBQWtCTyxPQUFPLENBQUMsQUFBQyxHQUFxQkYsT0FBbkJQLFdBQVdVLElBQUksRUFBQyxLQUF5QixPQUF0QkgsaUJBQUFBLGtCQUFBQSxPQUFRQyxTQUFTRCxJQUFJO2dCQUN2RTtZQUNGO1lBRUEsSUFBSVAsV0FBV0MsSUFBSSxDQUFDVSxTQUFTLEVBQUU7Z0JBQzdCVCxrQkFBa0JPLE9BQU8sQ0FBQyxBQUFDLEdBQWtCLE9BQWhCVCxXQUFXVSxJQUFJLEVBQUM7WUFDL0M7WUFFQSxPQUFPUjtRQUNUO1FBRUEsT0FBT0g7SUFDVCxHQUFHSjtJQUVILElBQU1pQixlQUFlbkIsU0FBU21CLFlBQVksQ0FBQ2hCLFNBQVM7UUFBRWlCLFNBQVM7SUFBTTtJQUNyRSxPQUFPRDtBQUNULEVBQUUifQ==