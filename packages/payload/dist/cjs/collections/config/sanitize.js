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
var _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
var _isplainobject = require("is-plain-object");
var _sanitize = /*#__PURE__*/ _interop_require_default(require("../../fields/config/sanitize"));
var _auth = /*#__PURE__*/ _interop_require_default(require("../../auth/baseFields/auth"));
var _apiKey = /*#__PURE__*/ _interop_require_default(require("../../auth/baseFields/apiKey"));
var _verification = /*#__PURE__*/ _interop_require_default(require("../../auth/baseFields/verification"));
var _accountLock = /*#__PURE__*/ _interop_require_default(require("../../auth/baseFields/accountLock"));
var _getBaseFields = /*#__PURE__*/ _interop_require_default(require("../../uploads/getBaseFields"));
var _formatLabels = require("../../utilities/formatLabels");
var _defaults = require("./defaults");
var _baseFields = /*#__PURE__*/ _interop_require_default(require("../../versions/baseFields"));
var _TimestampsRequired = /*#__PURE__*/ _interop_require_default(require("../../errors/TimestampsRequired"));
var _mergeBaseFields = /*#__PURE__*/ _interop_require_default(require("../../fields/mergeBaseFields"));
var _extractTranslations = require("../../translations/extractTranslations");
var _types = require("../../fields/config/types");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var translations = (0, _extractTranslations.extractTranslations)([
    "general:createdAt",
    "general:updatedAt"
]);
var sanitizeCollection = function(config, collection) {
    // /////////////////////////////////
    // Make copy of collection config
    // /////////////////////////////////
    var sanitized = (0, _deepmerge.default)(_defaults.defaults, collection, {
        isMergeableObject: _isplainobject.isPlainObject
    });
    if (sanitized.timestamps !== false) {
        // add default timestamps fields only as needed
        var hasUpdatedAt = null;
        var hasCreatedAt = null;
        sanitized.fields.some(function(field) {
            if ((0, _types.fieldAffectsData)(field)) {
                if (field.name === "updatedAt") hasUpdatedAt = true;
                if (field.name === "createdAt") hasCreatedAt = true;
            }
            return hasCreatedAt && hasUpdatedAt;
        });
        if (!hasUpdatedAt) {
            sanitized.fields.push({
                name: "updatedAt",
                label: translations["general:updatedAt"],
                type: "date",
                admin: {
                    hidden: true,
                    disableBulkEdit: true
                }
            });
        }
        if (!hasCreatedAt) {
            sanitized.fields.push({
                name: "createdAt",
                label: translations["general:createdAt"],
                type: "date",
                admin: {
                    hidden: true,
                    disableBulkEdit: true
                }
            });
        }
    }
    sanitized.labels = sanitized.labels || (0, _formatLabels.formatLabels)(sanitized.slug);
    if (sanitized.versions) {
        if (sanitized.versions === true) sanitized.versions = {
            drafts: false
        };
        if (sanitized.timestamps === false) {
            throw new _TimestampsRequired.default(collection);
        }
        if (sanitized.versions.drafts) {
            if (sanitized.versions.drafts === true) {
                sanitized.versions.drafts = {
                    autosave: false
                };
            }
            if (sanitized.versions.drafts.autosave === true) {
                sanitized.versions.drafts.autosave = {
                    interval: 2000
                };
            }
            sanitized.fields = (0, _mergeBaseFields.default)(sanitized.fields, _baseFields.default);
        }
    }
    if (sanitized.upload) {
        if (sanitized.upload === true) sanitized.upload = {};
        sanitized.upload.staticDir = sanitized.upload.staticDir || sanitized.slug;
        sanitized.upload.staticURL = sanitized.upload.staticURL || "/".concat(sanitized.slug);
        sanitized.admin.useAsTitle = sanitized.admin.useAsTitle && sanitized.admin.useAsTitle !== "id" ? sanitized.admin.useAsTitle : "filename";
        var uploadFields = (0, _getBaseFields.default)({
            config: config,
            collection: sanitized
        });
        sanitized.fields = (0, _mergeBaseFields.default)(sanitized.fields, uploadFields);
    }
    if (sanitized.auth) {
        sanitized.auth = (0, _deepmerge.default)(_defaults.authDefaults, typeof sanitized.auth === "object" ? sanitized.auth : {}, {
            isMergeableObject: _isplainobject.isPlainObject
        });
        var authFields = [];
        if (sanitized.auth.useAPIKey) {
            authFields = authFields.concat(_apiKey.default);
        }
        if (!sanitized.auth.disableLocalStrategy) {
            authFields = authFields.concat(_auth.default);
            if (sanitized.auth.verify) {
                if (sanitized.auth.verify === true) sanitized.auth.verify = {};
                authFields = authFields.concat(_verification.default);
            }
            if (sanitized.auth.maxLoginAttempts > 0) {
                authFields = authFields.concat(_accountLock.default);
            }
        }
        sanitized.fields = (0, _mergeBaseFields.default)(sanitized.fields, authFields);
    }
    // /////////////////////////////////
    // Sanitize fields
    // /////////////////////////////////
    var validRelationships = config.collections.map(function(c) {
        return c.slug;
    });
    sanitized.fields = (0, _sanitize.default)(sanitized.fields, validRelationships);
    return sanitized;
};
var _default = sanitizeCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9jb25maWcvc2FuaXRpemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0IH0gZnJvbSAnaXMtcGxhaW4tb2JqZWN0JztcbmltcG9ydCB7IENvbGxlY3Rpb25Db25maWcsIFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzYW5pdGl6ZUZpZWxkcyBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3Nhbml0aXplJztcbmltcG9ydCBiYXNlQXV0aEZpZWxkcyBmcm9tICcuLi8uLi9hdXRoL2Jhc2VGaWVsZHMvYXV0aCc7XG5pbXBvcnQgYmFzZUFQSUtleUZpZWxkcyBmcm9tICcuLi8uLi9hdXRoL2Jhc2VGaWVsZHMvYXBpS2V5JztcbmltcG9ydCBiYXNlVmVyaWZpY2F0aW9uRmllbGRzIGZyb20gJy4uLy4uL2F1dGgvYmFzZUZpZWxkcy92ZXJpZmljYXRpb24nO1xuaW1wb3J0IGJhc2VBY2NvdW50TG9ja0ZpZWxkcyBmcm9tICcuLi8uLi9hdXRoL2Jhc2VGaWVsZHMvYWNjb3VudExvY2snO1xuaW1wb3J0IGdldEJhc2VVcGxvYWRGaWVsZHMgZnJvbSAnLi4vLi4vdXBsb2Fkcy9nZXRCYXNlRmllbGRzJztcbmltcG9ydCB7IGZvcm1hdExhYmVscyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMnO1xuaW1wb3J0IHsgYXV0aERlZmF1bHRzLCBkZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBiYXNlVmVyc2lvbkZpZWxkcyBmcm9tICcuLi8uLi92ZXJzaW9ucy9iYXNlRmllbGRzJztcbmltcG9ydCBUaW1lc3RhbXBzUmVxdWlyZWQgZnJvbSAnLi4vLi4vZXJyb3JzL1RpbWVzdGFtcHNSZXF1aXJlZCc7XG5pbXBvcnQgbWVyZ2VCYXNlRmllbGRzIGZyb20gJy4uLy4uL2ZpZWxkcy9tZXJnZUJhc2VGaWVsZHMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJztcbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbXG4gICdnZW5lcmFsOmNyZWF0ZWRBdCcsXG4gICdnZW5lcmFsOnVwZGF0ZWRBdCcsXG5dKTtcblxuY29uc3Qgc2FuaXRpemVDb2xsZWN0aW9uID0gKGNvbmZpZzogQ29uZmlnLCBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uQ29uZmlnKTogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyA9PiB7XG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBNYWtlIGNvcHkgb2YgY29sbGVjdGlvbiBjb25maWdcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3Qgc2FuaXRpemVkOiBDb2xsZWN0aW9uQ29uZmlnID0gbWVyZ2UoZGVmYXVsdHMsIGNvbGxlY3Rpb24sIHtcbiAgICBpc01lcmdlYWJsZU9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgfSk7XG5cbiAgaWYgKHNhbml0aXplZC50aW1lc3RhbXBzICE9PSBmYWxzZSkge1xuICAgIC8vIGFkZCBkZWZhdWx0IHRpbWVzdGFtcHMgZmllbGRzIG9ubHkgYXMgbmVlZGVkXG4gICAgbGV0IGhhc1VwZGF0ZWRBdCA9IG51bGw7XG4gICAgbGV0IGhhc0NyZWF0ZWRBdCA9IG51bGw7XG4gICAgc2FuaXRpemVkLmZpZWxkcy5zb21lKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICAgIGlmIChmaWVsZC5uYW1lID09PSAndXBkYXRlZEF0JykgaGFzVXBkYXRlZEF0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUgPT09ICdjcmVhdGVkQXQnKSBoYXNDcmVhdGVkQXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0NyZWF0ZWRBdCAmJiBoYXNVcGRhdGVkQXQ7XG4gICAgfSk7XG4gICAgaWYgKCFoYXNVcGRhdGVkQXQpIHtcbiAgICAgIHNhbml0aXplZC5maWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICd1cGRhdGVkQXQnLFxuICAgICAgICBsYWJlbDogdHJhbnNsYXRpb25zWydnZW5lcmFsOnVwZGF0ZWRBdCddLFxuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIGFkbWluOiB7XG4gICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVCdWxrRWRpdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWhhc0NyZWF0ZWRBdCkge1xuICAgICAgc2FuaXRpemVkLmZpZWxkcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGlvbnNbJ2dlbmVyYWw6Y3JlYXRlZEF0J10sXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgYWRtaW46IHtcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgICAgZGlzYWJsZUJ1bGtFZGl0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemVkLmxhYmVscyA9IHNhbml0aXplZC5sYWJlbHMgfHwgZm9ybWF0TGFiZWxzKHNhbml0aXplZC5zbHVnKTtcblxuICBpZiAoc2FuaXRpemVkLnZlcnNpb25zKSB7XG4gICAgaWYgKHNhbml0aXplZC52ZXJzaW9ucyA9PT0gdHJ1ZSkgc2FuaXRpemVkLnZlcnNpb25zID0geyBkcmFmdHM6IGZhbHNlIH07XG5cbiAgICBpZiAoc2FuaXRpemVkLnRpbWVzdGFtcHMgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgVGltZXN0YW1wc1JlcXVpcmVkKGNvbGxlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChzYW5pdGl6ZWQudmVyc2lvbnMuZHJhZnRzKSB7XG4gICAgICBpZiAoc2FuaXRpemVkLnZlcnNpb25zLmRyYWZ0cyA9PT0gdHJ1ZSkge1xuICAgICAgICBzYW5pdGl6ZWQudmVyc2lvbnMuZHJhZnRzID0ge1xuICAgICAgICAgIGF1dG9zYXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNhbml0aXplZC52ZXJzaW9ucy5kcmFmdHMuYXV0b3NhdmUgPT09IHRydWUpIHtcbiAgICAgICAgc2FuaXRpemVkLnZlcnNpb25zLmRyYWZ0cy5hdXRvc2F2ZSA9IHtcbiAgICAgICAgICBpbnRlcnZhbDogMjAwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc2FuaXRpemVkLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhzYW5pdGl6ZWQuZmllbGRzLCBiYXNlVmVyc2lvbkZpZWxkcyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNhbml0aXplZC51cGxvYWQpIHtcbiAgICBpZiAoc2FuaXRpemVkLnVwbG9hZCA9PT0gdHJ1ZSkgc2FuaXRpemVkLnVwbG9hZCA9IHt9O1xuXG4gICAgc2FuaXRpemVkLnVwbG9hZC5zdGF0aWNEaXIgPSBzYW5pdGl6ZWQudXBsb2FkLnN0YXRpY0RpciB8fCBzYW5pdGl6ZWQuc2x1ZztcbiAgICBzYW5pdGl6ZWQudXBsb2FkLnN0YXRpY1VSTCA9IHNhbml0aXplZC51cGxvYWQuc3RhdGljVVJMIHx8IGAvJHtzYW5pdGl6ZWQuc2x1Z31gO1xuICAgIHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlID0gKHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlICYmIHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlICE9PSAnaWQnKSA/IHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlIDogJ2ZpbGVuYW1lJztcblxuICAgIGNvbnN0IHVwbG9hZEZpZWxkcyA9IGdldEJhc2VVcGxvYWRGaWVsZHMoe1xuICAgICAgY29uZmlnLFxuICAgICAgY29sbGVjdGlvbjogc2FuaXRpemVkLFxuICAgIH0pO1xuXG4gICAgc2FuaXRpemVkLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhzYW5pdGl6ZWQuZmllbGRzLCB1cGxvYWRGaWVsZHMpO1xuICB9XG5cbiAgaWYgKHNhbml0aXplZC5hdXRoKSB7XG4gICAgc2FuaXRpemVkLmF1dGggPSBtZXJnZShcbiAgICAgIGF1dGhEZWZhdWx0cyxcbiAgICAgIHR5cGVvZiBzYW5pdGl6ZWQuYXV0aCA9PT0gJ29iamVjdCcgPyBzYW5pdGl6ZWQuYXV0aCA6IHt9LFxuICAgICAge1xuICAgICAgICBpc01lcmdlYWJsZU9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGxldCBhdXRoRmllbGRzID0gW107XG5cbiAgICBpZiAoc2FuaXRpemVkLmF1dGgudXNlQVBJS2V5KSB7XG4gICAgICBhdXRoRmllbGRzID0gYXV0aEZpZWxkcy5jb25jYXQoYmFzZUFQSUtleUZpZWxkcyk7XG4gICAgfVxuXG4gICAgaWYgKCFzYW5pdGl6ZWQuYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSkge1xuICAgICAgYXV0aEZpZWxkcyA9IGF1dGhGaWVsZHMuY29uY2F0KGJhc2VBdXRoRmllbGRzKTtcblxuICAgICAgaWYgKHNhbml0aXplZC5hdXRoLnZlcmlmeSkge1xuICAgICAgICBpZiAoc2FuaXRpemVkLmF1dGgudmVyaWZ5ID09PSB0cnVlKSBzYW5pdGl6ZWQuYXV0aC52ZXJpZnkgPSB7fTtcbiAgICAgICAgYXV0aEZpZWxkcyA9IGF1dGhGaWVsZHMuY29uY2F0KGJhc2VWZXJpZmljYXRpb25GaWVsZHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2FuaXRpemVkLmF1dGgubWF4TG9naW5BdHRlbXB0cyA+IDApIHtcbiAgICAgICAgYXV0aEZpZWxkcyA9IGF1dGhGaWVsZHMuY29uY2F0KGJhc2VBY2NvdW50TG9ja0ZpZWxkcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2FuaXRpemVkLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhzYW5pdGl6ZWQuZmllbGRzLCBhdXRoRmllbGRzKTtcbiAgfVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBTYW5pdGl6ZSBmaWVsZHNcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gY29uZmlnLmNvbGxlY3Rpb25zLm1hcCgoYykgPT4gYy5zbHVnKTtcbiAgc2FuaXRpemVkLmZpZWxkcyA9IHNhbml0aXplRmllbGRzKHNhbml0aXplZC5maWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG5cbiAgcmV0dXJuIHNhbml0aXplZCBhcyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXRpemVDb2xsZWN0aW9uO1xuIl0sIm5hbWVzIjpbInRyYW5zbGF0aW9ucyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJzYW5pdGl6ZUNvbGxlY3Rpb24iLCJjb25maWciLCJjb2xsZWN0aW9uIiwic2FuaXRpemVkIiwibWVyZ2UiLCJkZWZhdWx0cyIsImlzTWVyZ2VhYmxlT2JqZWN0IiwiaXNQbGFpbk9iamVjdCIsInRpbWVzdGFtcHMiLCJoYXNVcGRhdGVkQXQiLCJoYXNDcmVhdGVkQXQiLCJmaWVsZHMiLCJzb21lIiwiZmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsInB1c2giLCJsYWJlbCIsInR5cGUiLCJhZG1pbiIsImhpZGRlbiIsImRpc2FibGVCdWxrRWRpdCIsImxhYmVscyIsImZvcm1hdExhYmVscyIsInNsdWciLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsIlRpbWVzdGFtcHNSZXF1aXJlZCIsImF1dG9zYXZlIiwiaW50ZXJ2YWwiLCJtZXJnZUJhc2VGaWVsZHMiLCJiYXNlVmVyc2lvbkZpZWxkcyIsInVwbG9hZCIsInN0YXRpY0RpciIsInN0YXRpY1VSTCIsInVzZUFzVGl0bGUiLCJ1cGxvYWRGaWVsZHMiLCJnZXRCYXNlVXBsb2FkRmllbGRzIiwiYXV0aCIsImF1dGhEZWZhdWx0cyIsImF1dGhGaWVsZHMiLCJ1c2VBUElLZXkiLCJjb25jYXQiLCJiYXNlQVBJS2V5RmllbGRzIiwiZGlzYWJsZUxvY2FsU3RyYXRlZ3kiLCJiYXNlQXV0aEZpZWxkcyIsInZlcmlmeSIsImJhc2VWZXJpZmljYXRpb25GaWVsZHMiLCJtYXhMb2dpbkF0dGVtcHRzIiwiYmFzZUFjY291bnRMb2NrRmllbGRzIiwidmFsaWRSZWxhdGlvbnNoaXBzIiwiY29sbGVjdGlvbnMiLCJtYXAiLCJjIiwic2FuaXRpemVGaWVsZHMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcUpBOzs7ZUFBQTs7O2dFQXJKa0I7NkJBQ1k7K0RBRUg7MkRBQ0E7NkRBQ0U7bUVBQ007a0VBQ0Q7b0VBQ0Y7NEJBQ0g7d0JBQ1U7aUVBRVQ7eUVBQ0M7c0VBQ0g7bUNBQ1E7cUJBQ0g7Ozs7OztBQUVqQyxJQUFNQSxlQUFlQyxJQUFBQSx3Q0FBbUIsRUFBQztJQUN2QztJQUNBO0NBQ0Q7QUFFRCxJQUFNQyxxQkFBcUIsU0FBQ0MsUUFBZ0JDO0lBQzFDLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBRXBDLElBQU1DLFlBQThCQyxJQUFBQSxrQkFBSyxFQUFDQyxrQkFBUSxFQUFFSCxZQUFZO1FBQzlESSxtQkFBbUJDLDRCQUFhO0lBQ2xDO0lBRUEsSUFBSUosVUFBVUssVUFBVSxLQUFLLE9BQU87UUFDbEMsK0NBQStDO1FBQy9DLElBQUlDLGVBQWU7UUFDbkIsSUFBSUMsZUFBZTtRQUNuQlAsVUFBVVEsTUFBTSxDQUFDQyxJQUFJLENBQUMsU0FBQ0M7WUFDckIsSUFBSUMsSUFBQUEsdUJBQWdCLEVBQUNELFFBQVE7Z0JBQzNCLElBQUlBLE1BQU1FLElB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