function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
import { toWords } from "../../utilities/formatLabels";
import sanitizeFields from "../../fields/config/sanitize";
import defaultAccess from "../../auth/defaultAccess";
import baseVersionFields from "../../versions/baseFields";
import mergeBaseFields from "../../fields/mergeBaseFields";
import translations from "../../translations";
import { fieldAffectsData } from "../../fields/config/types";
var sanitizeGlobals = function(collections, globals) {
    var sanitizedGlobals = globals.map(function(global) {
        var sanitizedGlobal = _object_spread({}, global);
        sanitizedGlobal.label = sanitizedGlobal.label || toWords(sanitizedGlobal.slug);
        var _sanitizedGlobal_endpoints;
        // /////////////////////////////////
        // Ensure that collection has required object structure
        // /////////////////////////////////
        sanitizedGlobal.endpoints = (_sanitizedGlobal_endpoints = sanitizedGlobal.endpoints) !== null && _sanitizedGlobal_endpoints !== void 0 ? _sanitizedGlobal_endpoints : [];
        if (!sanitizedGlobal.hooks) sanitizedGlobal.hooks = {};
        if (!sanitizedGlobal.access) sanitizedGlobal.access = {};
        if (!sanitizedGlobal.admin) sanitizedGlobal.admin = {};
        if (!sanitizedGlobal.access.read) sanitizedGlobal.access.read = defaultAccess;
        if (!sanitizedGlobal.access.update) sanitizedGlobal.access.update = defaultAccess;
        if (!sanitizedGlobal.hooks.beforeValidate) sanitizedGlobal.hooks.beforeValidate = [];
        if (!sanitizedGlobal.hooks.beforeChange) sanitizedGlobal.hooks.beforeChange = [];
        if (!sanitizedGlobal.hooks.afterChange) sanitizedGlobal.hooks.afterChange = [];
        if (!sanitizedGlobal.hooks.beforeRead) sanitizedGlobal.hooks.beforeRead = [];
        if (!sanitizedGlobal.hooks.afterRead) sanitizedGlobal.hooks.afterRead = [];
        if (sanitizedGlobal.versions) {
            if (sanitizedGlobal.versions === true) sanitizedGlobal.versions = {
                drafts: false
            };
            if (sanitizedGlobal.versions.drafts) {
                if (sanitizedGlobal.versions.drafts === true) {
                    sanitizedGlobal.versions.drafts = {
                        autosave: false
                    };
                }
                if (sanitizedGlobal.versions.drafts.autosave === true) {
                    sanitizedGlobal.versions.drafts.autosave = {
                        interval: 2000
                    };
                }
                sanitizedGlobal.fields = mergeBaseFields(sanitizedGlobal.fields, baseVersionFields);
            }
        }
        if (!sanitizedGlobal.custom) sanitizedGlobal.custom = {};
        // /////////////////////////////////
        // Sanitize fields
        // /////////////////////////////////
        var hasUpdatedAt = null;
        var hasCreatedAt = null;
        sanitizedGlobal.fields.some(function(field) {
            if (fieldAffectsData(field)) {
                if (field.name === "updatedAt") hasUpdatedAt = true;
                if (field.name === "createdAt") hasCreatedAt = true;
            }
            return hasCreatedAt && hasUpdatedAt;
        });
        if (!hasUpdatedAt) {
            sanitizedGlobal.fields.push({
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
            sanitizedGlobal.fields.push({
                name: "createdAt",
                label: translations["general:createdAt"],
                type: "date",
                admin: {
                    hidden: true,
                    disableBulkEdit: true
                }
            });
        }
        var validRelationships = collections.map(function(c) {
            return c.slug;
        });
        sanitizedGlobal.fields = sanitizeFields(sanitizedGlobal.fields, validRelationships);
        return sanitizedGlobal;
    });
    return sanitizedGlobals;
};
export default sanitizeGlobals;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL2NvbmZpZy9zYW5pdGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b1dvcmRzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdExhYmVscyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBzYW5pdGl6ZUZpZWxkcyBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3Nhbml0aXplJztcbmltcG9ydCB7IEdsb2JhbENvbmZpZywgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgZGVmYXVsdEFjY2VzcyBmcm9tICcuLi8uLi9hdXRoL2RlZmF1bHRBY2Nlc3MnO1xuaW1wb3J0IGJhc2VWZXJzaW9uRmllbGRzIGZyb20gJy4uLy4uL3ZlcnNpb25zL2Jhc2VGaWVsZHMnO1xuaW1wb3J0IG1lcmdlQmFzZUZpZWxkcyBmcm9tICcuLi8uLi9maWVsZHMvbWVyZ2VCYXNlRmllbGRzJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuY29uc3Qgc2FuaXRpemVHbG9iYWxzID0gKGNvbGxlY3Rpb25zOiBDb2xsZWN0aW9uQ29uZmlnW10sIGdsb2JhbHM6IEdsb2JhbENvbmZpZ1tdKTogU2FuaXRpemVkR2xvYmFsQ29uZmlnW10gPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRHbG9iYWxzID0gZ2xvYmFscy5tYXAoKGdsb2JhbCkgPT4ge1xuICAgIGNvbnN0IHNhbml0aXplZEdsb2JhbCA9IHsgLi4uZ2xvYmFsIH07XG5cbiAgICBzYW5pdGl6ZWRHbG9iYWwubGFiZWwgPSBzYW5pdGl6ZWRHbG9iYWwubGFiZWwgfHwgdG9Xb3JkcyhzYW5pdGl6ZWRHbG9iYWwuc2x1Zyk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAvLyBFbnN1cmUgdGhhdCBjb2xsZWN0aW9uIGhhcyByZXF1aXJlZCBvYmplY3Qgc3RydWN0dXJlXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBzYW5pdGl6ZWRHbG9iYWwuZW5kcG9pbnRzID0gc2FuaXRpemVkR2xvYmFsLmVuZHBvaW50cyA/PyBbXTtcbiAgICBpZiAoIXNhbml0aXplZEdsb2JhbC5ob29rcykgc2FuaXRpemVkR2xvYmFsLmhvb2tzID0ge307XG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuYWNjZXNzKSBzYW5pdGl6ZWRHbG9iYWwuYWNjZXNzID0ge307XG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuYWRtaW4pIHNhbml0aXplZEdsb2JhbC5hZG1pbiA9IHt9O1xuXG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuYWNjZXNzLnJlYWQpIHNhbml0aXplZEdsb2JhbC5hY2Nlc3MucmVhZCA9IGRlZmF1bHRBY2Nlc3M7XG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuYWNjZXNzLnVwZGF0ZSkgc2FuaXRpemVkR2xvYmFsLmFjY2Vzcy51cGRhdGUgPSBkZWZhdWx0QWNjZXNzO1xuXG4gICAgaWYgKCFzYW5pdGl6ZWRHbG9iYWwuaG9va3MuYmVmb3JlVmFsaWRhdGUpIHNhbml0aXplZEdsb2JhbC5ob29rcy5iZWZvcmVWYWxpZGF0ZSA9IFtdO1xuICAgIGlmICghc2FuaXRpemVkR2xvYmFsLmhvb2tzLmJlZm9yZUNoYW5nZSkgc2FuaXRpemVkR2xvYmFsLmhvb2tzLmJlZm9yZUNoYW5nZSA9IFtdO1xuICAgIGlmICghc2FuaXRpemVkR2xvYmFsLmhvb2tzLmFmdGVyQ2hhbmdlKSBzYW5pdGl6ZWRHbG9iYWwuaG9va3MuYWZ0ZXJDaGFuZ2UgPSBbXTtcbiAgICBpZiAoIXNhbml0aXplZEdsb2JhbC5ob29rcy5iZWZvcmVSZWFkKSBzYW5pdGl6ZWRHbG9iYWwuaG9va3MuYmVmb3JlUmVhZCA9IFtdO1xuICAgIGlmICghc2FuaXRpemVkR2xvYmFsLmhvb2tzLmFmdGVyUmVhZCkgc2FuaXRpemVkR2xvYmFsLmhvb2tzLmFmdGVyUmVhZCA9IFtdO1xuXG4gICAgaWYgKHNhbml0aXplZEdsb2JhbC52ZXJzaW9ucykge1xuICAgICAgaWYgKHNhbml0aXplZEdsb2JhbC52ZXJzaW9ucyA9PT0gdHJ1ZSkgc2FuaXRpemVkR2xvYmFsLnZlcnNpb25zID0geyBkcmFmdHM6IGZhbHNlIH07XG5cbiAgICAgIGlmIChzYW5pdGl6ZWRHbG9iYWwudmVyc2lvbnMuZHJhZnRzKSB7XG4gICAgICAgIGlmIChzYW5pdGl6ZWRHbG9iYWwudmVyc2lvbnMuZHJhZnRzID09PSB0cnVlKSB7XG4gICAgICAgICAgc2FuaXRpemVkR2xvYmFsLnZlcnNpb25zLmRyYWZ0cyA9IHtcbiAgICAgICAgICAgIGF1dG9zYXZlOiBmYWxzZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNhbml0aXplZEdsb2JhbC52ZXJzaW9ucy5kcmFmdHMuYXV0b3NhdmUgPT09IHRydWUpIHtcbiAgICAgICAgICBzYW5pdGl6ZWRHbG9iYWwudmVyc2lvbnMuZHJhZnRzLmF1dG9zYXZlID0ge1xuICAgICAgICAgICAgaW50ZXJ2YWw6IDIwMDAsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNhbml0aXplZEdsb2JhbC5maWVsZHMgPSBtZXJnZUJhc2VGaWVsZHMoc2FuaXRpemVkR2xvYmFsLmZpZWxkcywgYmFzZVZlcnNpb25GaWVsZHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc2FuaXRpemVkR2xvYmFsLmN1c3RvbSkgc2FuaXRpemVkR2xvYmFsLmN1c3RvbSA9IHt9O1xuXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gU2FuaXRpemUgZmllbGRzXG4gICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgbGV0IGhhc1VwZGF0ZWRBdCA9IG51bGw7XG4gICAgbGV0IGhhc0NyZWF0ZWRBdCA9IG51bGw7XG4gICAgc2FuaXRpemVkR2xvYmFsLmZpZWxkcy5zb21lKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICAgIGlmIChmaWVsZC5uYW1lID09PSAndXBkYXRlZEF0JykgaGFzVXBkYXRlZEF0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUgPT09ICdjcmVhdGVkQXQnKSBoYXNDcmVhdGVkQXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0NyZWF0ZWRBdCAmJiBoYXNVcGRhdGVkQXQ7XG4gICAgfSk7XG4gICAgaWYgKCFoYXNVcGRhdGVkQXQpIHtcbiAgICAgIHNhbml0aXplZEdsb2JhbC5maWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICd1cGRhdGVkQXQnLFxuICAgICAgICBsYWJlbDogdHJhbnNsYXRpb25zWydnZW5lcmFsOnVwZGF0ZWRBdCddLFxuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIGFkbWluOiB7XG4gICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVCdWxrRWRpdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWhhc0NyZWF0ZWRBdCkge1xuICAgICAgc2FuaXRpemVkR2xvYmFsLmZpZWxkcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGlvbnNbJ2dlbmVyYWw6Y3JlYXRlZEF0J10sXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgYWRtaW46IHtcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgICAgZGlzYWJsZUJ1bGtFZGl0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gY29sbGVjdGlvbnMubWFwKChjKSA9PiBjLnNsdWcpO1xuICAgIHNhbml0aXplZEdsb2JhbC5maWVsZHMgPSBzYW5pdGl6ZUZpZWxkcyhzYW5pdGl6ZWRHbG9iYWwuZmllbGRzLCB2YWxpZFJlbGF0aW9uc2hpcHMpO1xuXG4gICAgcmV0dXJuIHNhbml0aXplZEdsb2JhbCBhcyBTYW5pdGl6ZWRHbG9iYWxDb25maWc7XG4gIH0pO1xuXG4gIHJldHVybiBzYW5pdGl6ZWRHbG9iYWxzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXRpemVHbG9iYWxzO1xuIl0sIm5hbWVzIjpbInRvV29yZHMiLCJzYW5pdGl6ZUZpZWxkcyIsImRlZmF1bHRBY2Nlc3MiLCJiYXNlVmVyc2lvbkZpZWxkcyIsIm1lcmdlQmFzZUZpZWxkcyIsInRyYW5zbGF0aW9ucyIsImZpZWxkQWZmZWN0c0RhdGEiLCJzYW5pdGl6ZUdsb2JhbHMiLCJjb2xsZWN0aW9ucyIsImdsb2JhbHMiLCJzYW5pdGl6ZWRHbG9iYWxzIiwibWFwIiwiZ2xvYmFsIiwic2FuaXRpemVkR2xvYmFsIiwibGFiZWwiLCJzbHVnIiwiZW5kcG9pbnRzIiwiaG9va3MiLCJhY2Nlc3MiLCJhZG1pbiIsInJlYWQiLCJ1cGRhdGUiLCJiZWZvcmVWYWxpZGF0ZSIsImJlZm9yZUNoYW5nZSIsImFmdGVyQ2hhbmdlIiwiYmVmb3JlUmVhZCIsImFmdGVyUmVhZCIsInZlcnNpb25zIiwiZHJhZnRzIiwiYXV0b3NhdmUiLCJpbnRlcnZhbCIsImZpZWxkcyIsImN1c3RvbSIsImhhc1VwZGF0ZWRBdCIsImhhc0NyZWF0ZWRBdCIsInNvbWUiLCJmaWVsZCIsIm5hbWUiLCJwdXNoIiwidHlwZSIsImhpZGRlbiIsImRpc2FibGVCdWxrRWRpdCIsInZhbGlkUmVsYXRpb25zaGlwcyIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxPQUFPLFFBQVEsK0JBQStC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