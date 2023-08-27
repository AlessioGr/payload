"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    buildConfig: function() {
        return _build.buildConfig;
    },
    sanitizeConfig: function() {
        return _sanitize.sanitizeConfig;
    },
    defaults: function() {
        return _defaults.defaults;
    }
});
var _build = require("../config/build");
_export_star(require("../config/types"), exports);
var _sanitize = require("../config/sanitize");
var _defaults = require("../config/defaults");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHBvcnRzL2NvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBidWlsZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9idWlsZCc7XG5leHBvcnQgKiBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQge1xuICAgIHNhbml0aXplQ29uZmlnXG59IGZyb20gJy4uL2NvbmZpZy9zYW5pdGl6ZSc7XG5cbmV4cG9ydCB7XG4gICAgZGVmYXVsdHNcbn0gZnJvbSAnLi4vY29uZmlnL2RlZmF1bHRzJzsiXSwibmFtZXMiOlsiYnVpbGRDb25maWciLCJzYW5pdGl6ZUNvbmZpZyIsImRlZmF1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFTQSxXQUFXO2VBQVhBLGtCQUFXOztJQUloQkMsY0FBYztlQUFkQSx3QkFBYzs7SUFJZEMsUUFBUTtlQUFSQSxrQkFBUTs7O3FCQVJnQjtxQkFDZDt3QkFJUDt3QkFJQSJ9