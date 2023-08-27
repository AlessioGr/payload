import merge from "deepmerge";
import { isPlainObject } from "is-plain-object";
import sanitizeFields from "../../fields/config/sanitize";
import baseAuthFields from "../../auth/baseFields/auth";
import baseAPIKeyFields from "../../auth/baseFields/apiKey";
import baseVerificationFields from "../../auth/baseFields/verification";
import baseAccountLockFields from "../../auth/baseFields/accountLock";
import getBaseUploadFields from "../../uploads/getBaseFields";
import { formatLabels } from "../../utilities/formatLabels";
import { authDefaults, defaults } from "./defaults";
import baseVersionFields from "../../versions/baseFields";
import TimestampsRequired from "../../errors/TimestampsRequired";
import mergeBaseFields from "../../fields/mergeBaseFields";
import { extractTranslations } from "../../translations/extractTranslations";
import { fieldAffectsData } from "../../fields/config/types";
var translations = extractTranslations([
    "general:createdAt",
    "general:updatedAt"
]);
var sanitizeCollection = function(config, collection) {
    // /////////////////////////////////
    // Make copy of collection config
    // /////////////////////////////////
    var sanitized = merge(defaults, collection, {
        isMergeableObject: isPlainObject
    });
    if (sanitized.timestamps !== false) {
        // add default timestamps fields only as needed
        var hasUpdatedAt = null;
        var hasCreatedAt = null;
        sanitized.fields.some(function(field) {
            if (fieldAffectsData(field)) {
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
    sanitized.labels = sanitized.labels || formatLabels(sanitized.slug);
    if (sanitized.versions) {
        if (sanitized.versions === true) sanitized.versions = {
            drafts: false
        };
        if (sanitized.timestamps === false) {
            throw new TimestampsRequired(collection);
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
            sanitized.fields = mergeBaseFields(sanitized.fields, baseVersionFields);
        }
    }
    if (sanitized.upload) {
        if (sanitized.upload === true) sanitized.upload = {};
        sanitized.upload.staticDir = sanitized.upload.staticDir || sanitized.slug;
        sanitized.upload.staticURL = sanitized.upload.staticURL || "/".concat(sanitized.slug);
        sanitized.admin.useAsTitle = sanitized.admin.useAsTitle && sanitized.admin.useAsTitle !== "id" ? sanitized.admin.useAsTitle : "filename";
        var uploadFields = getBaseUploadFields({
            config: config,
            collection: sanitized
        });
        sanitized.fields = mergeBaseFields(sanitized.fields, uploadFields);
    }
    if (sanitized.auth) {
        sanitized.auth = merge(authDefaults, typeof sanitized.auth === "object" ? sanitized.auth : {}, {
            isMergeableObject: isPlainObject
        });
        var authFields = [];
        if (sanitized.auth.useAPIKey) {
            authFields = authFields.concat(baseAPIKeyFields);
        }
        if (!sanitized.auth.disableLocalStrategy) {
            authFields = authFields.concat(baseAuthFields);
            if (sanitized.auth.verify) {
                if (sanitized.auth.verify === true) sanitized.auth.verify = {};
                authFields = authFields.concat(baseVerificationFields);
            }
            if (sanitized.auth.maxLoginAttempts > 0) {
                authFields = authFields.concat(baseAccountLockFields);
            }
        }
        sanitized.fields = mergeBaseFields(sanitized.fields, authFields);
    }
    // /////////////////////////////////
    // Sanitize fields
    // /////////////////////////////////
    var validRelationships = config.collections.map(function(c) {
        return c.slug;
    });
    sanitized.fields = sanitizeFields(sanitized.fields, validRelationships);
    return sanitized;
};
export default sanitizeCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9jb25maWcvc2FuaXRpemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0IH0gZnJvbSAnaXMtcGxhaW4tb2JqZWN0JztcbmltcG9ydCB7IENvbGxlY3Rpb25Db25maWcsIFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBzYW5pdGl6ZUZpZWxkcyBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3Nhbml0aXplJztcbmltcG9ydCBiYXNlQXV0aEZpZWxkcyBmcm9tICcuLi8uLi9hdXRoL2Jhc2VGaWVsZHMvYXV0aCc7XG5pbXBvcnQgYmFzZUFQSUtleUZpZWxkcyBmcm9tICcuLi8uLi9hdXRoL2Jhc2VGaWVsZHMvYXBpS2V5JztcbmltcG9ydCBiYXNlVmVyaWZpY2F0aW9uRmllbGRzIGZyb20gJy4uLy4uL2F1dGgvYmFzZUZpZWxkcy92ZXJpZmljYXRpb24nO1xuaW1wb3J0IGJhc2VBY2NvdW50TG9ja0ZpZWxkcyBmcm9tICcuLi8uLi9hdXRoL2Jhc2VGaWVsZHMvYWNjb3VudExvY2snO1xuaW1wb3J0IGdldEJhc2VVcGxvYWRGaWVsZHMgZnJvbSAnLi4vLi4vdXBsb2Fkcy9nZXRCYXNlRmllbGRzJztcbmltcG9ydCB7IGZvcm1hdExhYmVscyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMnO1xuaW1wb3J0IHsgYXV0aERlZmF1bHRzLCBkZWZhdWx0cyB9IGZyb20gJy4vZGVmYXVsdHMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBiYXNlVmVyc2lvbkZpZWxkcyBmcm9tICcuLi8uLi92ZXJzaW9ucy9iYXNlRmllbGRzJztcbmltcG9ydCBUaW1lc3RhbXBzUmVxdWlyZWQgZnJvbSAnLi4vLi4vZXJyb3JzL1RpbWVzdGFtcHNSZXF1aXJlZCc7XG5pbXBvcnQgbWVyZ2VCYXNlRmllbGRzIGZyb20gJy4uLy4uL2ZpZWxkcy9tZXJnZUJhc2VGaWVsZHMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJztcbmltcG9ydCB7IGZpZWxkQWZmZWN0c0RhdGEgfSBmcm9tICcuLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcblxuY29uc3QgdHJhbnNsYXRpb25zID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbXG4gICdnZW5lcmFsOmNyZWF0ZWRBdCcsXG4gICdnZW5lcmFsOnVwZGF0ZWRBdCcsXG5dKTtcblxuY29uc3Qgc2FuaXRpemVDb2xsZWN0aW9uID0gKGNvbmZpZzogQ29uZmlnLCBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uQ29uZmlnKTogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyA9PiB7XG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBNYWtlIGNvcHkgb2YgY29sbGVjdGlvbiBjb25maWdcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3Qgc2FuaXRpemVkOiBDb2xsZWN0aW9uQ29uZmlnID0gbWVyZ2UoZGVmYXVsdHMsIGNvbGxlY3Rpb24sIHtcbiAgICBpc01lcmdlYWJsZU9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgfSk7XG5cbiAgaWYgKHNhbml0aXplZC50aW1lc3RhbXBzICE9PSBmYWxzZSkge1xuICAgIC8vIGFkZCBkZWZhdWx0IHRpbWVzdGFtcHMgZmllbGRzIG9ubHkgYXMgbmVlZGVkXG4gICAgbGV0IGhhc1VwZGF0ZWRBdCA9IG51bGw7XG4gICAgbGV0IGhhc0NyZWF0ZWRBdCA9IG51bGw7XG4gICAgc2FuaXRpemVkLmZpZWxkcy5zb21lKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgICAgIGlmIChmaWVsZC5uYW1lID09PSAndXBkYXRlZEF0JykgaGFzVXBkYXRlZEF0ID0gdHJ1ZTtcbiAgICAgICAgaWYgKGZpZWxkLm5hbWUgPT09ICdjcmVhdGVkQXQnKSBoYXNDcmVhdGVkQXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc0NyZWF0ZWRBdCAmJiBoYXNVcGRhdGVkQXQ7XG4gICAgfSk7XG4gICAgaWYgKCFoYXNVcGRhdGVkQXQpIHtcbiAgICAgIHNhbml0aXplZC5maWVsZHMucHVzaCh7XG4gICAgICAgIG5hbWU6ICd1cGRhdGVkQXQnLFxuICAgICAgICBsYWJlbDogdHJhbnNsYXRpb25zWydnZW5lcmFsOnVwZGF0ZWRBdCddLFxuICAgICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICAgIGFkbWluOiB7XG4gICAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgICAgIGRpc2FibGVCdWxrRWRpdDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoIWhhc0NyZWF0ZWRBdCkge1xuICAgICAgc2FuaXRpemVkLmZpZWxkcy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgIGxhYmVsOiB0cmFuc2xhdGlvbnNbJ2dlbmVyYWw6Y3JlYXRlZEF0J10sXG4gICAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgICAgYWRtaW46IHtcbiAgICAgICAgICBoaWRkZW46IHRydWUsXG4gICAgICAgICAgZGlzYWJsZUJ1bGtFZGl0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2FuaXRpemVkLmxhYmVscyA9IHNhbml0aXplZC5sYWJlbHMgfHwgZm9ybWF0TGFiZWxzKHNhbml0aXplZC5zbHVnKTtcblxuICBpZiAoc2FuaXRpemVkLnZlcnNpb25zKSB7XG4gICAgaWYgKHNhbml0aXplZC52ZXJzaW9ucyA9PT0gdHJ1ZSkgc2FuaXRpemVkLnZlcnNpb25zID0geyBkcmFmdHM6IGZhbHNlIH07XG5cbiAgICBpZiAoc2FuaXRpemVkLnRpbWVzdGFtcHMgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgVGltZXN0YW1wc1JlcXVpcmVkKGNvbGxlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChzYW5pdGl6ZWQudmVyc2lvbnMuZHJhZnRzKSB7XG4gICAgICBpZiAoc2FuaXRpemVkLnZlcnNpb25zLmRyYWZ0cyA9PT0gdHJ1ZSkge1xuICAgICAgICBzYW5pdGl6ZWQudmVyc2lvbnMuZHJhZnRzID0ge1xuICAgICAgICAgIGF1dG9zYXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNhbml0aXplZC52ZXJzaW9ucy5kcmFmdHMuYXV0b3NhdmUgPT09IHRydWUpIHtcbiAgICAgICAgc2FuaXRpemVkLnZlcnNpb25zLmRyYWZ0cy5hdXRvc2F2ZSA9IHtcbiAgICAgICAgICBpbnRlcnZhbDogMjAwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc2FuaXRpemVkLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhzYW5pdGl6ZWQuZmllbGRzLCBiYXNlVmVyc2lvbkZpZWxkcyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHNhbml0aXplZC51cGxvYWQpIHtcbiAgICBpZiAoc2FuaXRpemVkLnVwbG9hZCA9PT0gdHJ1ZSkgc2FuaXRpemVkLnVwbG9hZCA9IHt9O1xuXG4gICAgc2FuaXRpemVkLnVwbG9hZC5zdGF0aWNEaXIgPSBzYW5pdGl6ZWQudXBsb2FkLnN0YXRpY0RpciB8fCBzYW5pdGl6ZWQuc2x1ZztcbiAgICBzYW5pdGl6ZWQudXBsb2FkLnN0YXRpY1VSTCA9IHNhbml0aXplZC51cGxvYWQuc3RhdGljVVJMIHx8IGAvJHtzYW5pdGl6ZWQuc2x1Z31gO1xuICAgIHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlID0gKHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlICYmIHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlICE9PSAnaWQnKSA/IHNhbml0aXplZC5hZG1pbi51c2VBc1RpdGxlIDogJ2ZpbGVuYW1lJztcblxuICAgIGNvbnN0IHVwbG9hZEZpZWxkcyA9IGdldEJhc2VVcGxvYWRGaWVsZHMoe1xuICAgICAgY29uZmlnLFxuICAgICAgY29sbGVjdGlvbjogc2FuaXRpemVkLFxuICAgIH0pO1xuXG4gICAgc2FuaXRpemVkLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhzYW5pdGl6ZWQuZmllbGRzLCB1cGxvYWRGaWVsZHMpO1xuICB9XG5cbiAgaWYgKHNhbml0aXplZC5hdXRoKSB7XG4gICAgc2FuaXRpemVkLmF1dGggPSBtZXJnZShcbiAgICAgIGF1dGhEZWZhdWx0cyxcbiAgICAgIHR5cGVvZiBzYW5pdGl6ZWQuYXV0aCA9PT0gJ29iamVjdCcgPyBzYW5pdGl6ZWQuYXV0aCA6IHt9LFxuICAgICAge1xuICAgICAgICBpc01lcmdlYWJsZU9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgICAgIH0sXG4gICAgKTtcblxuICAgIGxldCBhdXRoRmllbGRzID0gW107XG5cbiAgICBpZiAoc2FuaXRpemVkLmF1dGgudXNlQVBJS2V5KSB7XG4gICAgICBhdXRoRmllbGRzID0gYXV0aEZpZWxkcy5jb25jYXQoYmFzZUFQSUtleUZpZWxkcyk7XG4gICAgfVxuXG4gICAgaWYgKCFzYW5pdGl6ZWQuYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSkge1xuICAgICAgYXV0aEZpZWxkcyA9IGF1dGhGaWVsZHMuY29uY2F0KGJhc2VBdXRoRmllbGRzKTtcblxuICAgICAgaWYgKHNhbml0aXplZC5hdXRoLnZlcmlmeSkge1xuICAgICAgICBpZiAoc2FuaXRpemVkLmF1dGgudmVyaWZ5ID09PSB0cnVlKSBzYW5pdGl6ZWQuYXV0aC52ZXJpZnkgPSB7fTtcbiAgICAgICAgYXV0aEZpZWxkcyA9IGF1dGhGaWVsZHMuY29uY2F0KGJhc2VWZXJpZmljYXRpb25GaWVsZHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2FuaXRpemVkLmF1dGgubWF4TG9naW5BdHRlbXB0cyA+IDApIHtcbiAgICAgICAgYXV0aEZpZWxkcyA9IGF1dGhGaWVsZHMuY29uY2F0KGJhc2VBY2NvdW50TG9ja0ZpZWxkcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2FuaXRpemVkLmZpZWxkcyA9IG1lcmdlQmFzZUZpZWxkcyhzYW5pdGl6ZWQuZmllbGRzLCBhdXRoRmllbGRzKTtcbiAgfVxuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAvLyBTYW5pdGl6ZSBmaWVsZHNcbiAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gY29uZmlnLmNvbGxlY3Rpb25zLm1hcCgoYykgPT4gYy5zbHVnKTtcbiAgc2FuaXRpemVkLmZpZWxkcyA9IHNhbml0aXplRmllbGRzKHNhbml0aXplZC5maWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG5cbiAgcmV0dXJuIHNhbml0aXplZCBhcyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXRpemVDb2xsZWN0aW9uO1xuIl0sIm5hbWVzIjpbIm1lcmdlIiwiaXNQbGFpbk9iamVjdCIsInNhbml0aXplRmllbGRzIiwiYmFzZUF1dGhGaWVsZHMiLCJiYXNlQVBJS2V5RmllbGRzIiwiYmFzZVZlcmlmaWNhdGlvbkZpZWxkcyIsImJhc2VBY2NvdW50TG9ja0ZpZWxkcyIsImdldEJhc2VVcGxvYWRGaWVsZHMiLCJmb3JtYXRMYWJlbHMiLCJhdXRoRGVmYXVsdHMiLCJkZWZhdWx0cyIsImJhc2VWZXJzaW9uRmllbGRzIiwiVGltZXN0YW1wc1JlcXVpcmVkIiwibWVyZ2VCYXNlRmllbGRzIiwiZXh0cmFjdFRyYW5zbGF0aW9ucyIsImZpZWxkQWZmZWN0c0RhdGEiLCJ0cmFuc2xhdGlvbnMiLCJzYW5pdGl6ZUNvbGxlY3Rpb24iLCJjb25maWciLCJjb2xsZWN0aW9uIiwic2FuaXRpemVkIiwiaXNNZXJnZWFibGVPYmplY3QiLCJ0aW1lc3RhbXBzIiwiaGFzVXBkYXRlZEF0IiwiaGFzQ3JlYXRlZEF0IiwiZmllbGRzIiwic29tZSIsImZpZWxkIiwibmFtZSIsInB1c2giLCJsYWJlbCIsInR5cGUiLCJhZG1pbiIsImhpZGRlbiIsImRpc2FibGVCdWxrRWRpdCIsImxhYmVscyIsInNsdWciLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImF1dG9zYXZlIiwiaW50ZXJ2YWwiLCJ1cGxvYWQiLCJzdGF0aWNEaXIiLCJzdGF0aWNVUkwiLCJ1c2VBc1RpdGxlIiwidXBsb2FkRmllbGRzIiwiYXV0aCIsImF1dGhGaWVsZHMiLCJ1c2VBUElLZXkiLCJjb25jYXQiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsInZlcmlmeSIsIm1heExvZ2luQXR0ZW1wdHMiLCJ2YWxpZFJlbGF0aW9uc2hpcHMiLCJjb2xsZWN0aW9ucyIsIm1hcCIsImMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsWUFBWTtBQUM5QixTQUFTQyxhQUFhLFFBQVEsa0JBQWtCO0FBRWhELE9BQU9DLG9CQUFvQiwrQkFBK0I7QUFDMUQsT0FBT0Msb0JBQW9CLDZCQUE2QjtBQUN4RCxPQUFPQyxzQkFBc0IsK0JBQStCO0FBQzVELE9BQU9DLDRCQUE0QixxQ0FBcUM7QUFDeEUsT0FBT0MsMkJBQTJCLG9DQUFvQztBQUN0RSxPQUFPQyx5QkFBeUIsOEJBQThCO0FBQzlELFNBQVNDLFlBQVksUUFBUSwrQkFBK0I7QUFDNUQsU0FBU0MsWUFBWSxFQUFFQyxRQUFRLFFBQVEsYUFBYTtBQUVwRCxPQUFPQyx1QkFBdUIsNEJBQTRCO0FBQzFELE9BQU9DLHdCQUF3QixrQ0FBa0M7QUFDakUsT0FBT0MscUJBQXFCLCtCQUErQjtBQUMzRCxTQUFTQyxtQkFBbUIsUUFBUSx5Q0FBeUM7QUFDN0UsU0FBU0MsZ0JBQWdCLFFBQVEsNEJBQTRCO0FBRTdELElBQU1DLGVBQWVGLG9CQUFvQjtJQUN2QztJQUNBO0NBQ0Q7QUFFRCxJQUFNRyxxQkFBcUIsU0FBQ0MsUUFBZ0JDO0lBQzFDLG9DQUFv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