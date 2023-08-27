"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
_export_star(require("../auth"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHBvcnRzL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi4vYXV0aCc7Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWMifQ==