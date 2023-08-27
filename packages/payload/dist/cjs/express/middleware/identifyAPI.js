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
var identifyAPI = function(api) {
    return function(req, _, next) {
        req.payloadAPI = api;
        next();
    };
};
var _default = identifyAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvaWRlbnRpZnlBUEkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaWRlbnRpZnlBUEkgPSAoYXBpKSA9PiB7XG4gIHJldHVybiAocmVxLCBfLCBuZXh0KSA9PiB7XG4gICAgcmVxLnBheWxvYWRBUEkgPSBhcGk7XG4gICAgbmV4dCgpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaWRlbnRpZnlBUEk7XG4iXSwibmFtZXMiOlsiaWRlbnRpZnlBUEkiLCJhcGkiLCJyZXEiLCJfIiwibmV4dCIsInBheWxvYWRBUEkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBT0E7OztlQUFBOzs7QUFQQSxJQUFNQSxjQUFjLFNBQUNDO0lBQ25CLE9BQU8sU0FBQ0MsS0FBS0MsR0FBR0M7UUFDZEYsSUFBSUcsVUFBVSxHQUFHSjtRQUNqQkc7SUFDRjtBQUNGO0lBRUEsV0FBZUoifQ==