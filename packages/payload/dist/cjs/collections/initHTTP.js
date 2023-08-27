"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initCollectionsHTTP;
    }
});
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _passport = /*#__PURE__*/ _interop_require_default(require("passport"));
var _apiKey = /*#__PURE__*/ _interop_require_default(require("../auth/strategies/apiKey"));
var _bindCollection = /*#__PURE__*/ _interop_require_default(require("./bindCollection"));
var _mountEndpoints = /*#__PURE__*/ _interop_require_default(require("../express/mountEndpoints"));
var _buildEndpoints = /*#__PURE__*/ _interop_require_default(require("./buildEndpoints"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initCollectionsHTTP(ctx) {
    ctx.config.collections = ctx.config.collections.map(function(collection) {
        var formattedCollection = collection;
        var router = _express.default.Router();
        var slug = collection.slug;
        router.all("*", (0, _bindCollection.default)(ctx.collections[formattedCollection.slug]));
        if (collection.auth) {
            var config = ctx.collections[formattedCollection.slug].config;
            if (collection.auth.useAPIKey) {
                _passport.default.use("".concat(config.slug, "-api-key"), (0, _apiKey.default)(ctx, config));
            }
            if (Array.isArray(collection.auth.strategies)) {
                collection.auth.strategies.forEach(function(param, index) {
                    var name = param.name, strategy = param.strategy;
                    var passportStrategy = typeof strategy === "object" ? strategy : strategy(ctx);
                    _passport.default.use("".concat(config.slug, "-").concat(name !== null && name !== void 0 ? name : index), passportStrategy);
                });
            }
        }
        var endpoints = (0, _buildEndpoints.default)(collection);
        (0, _mountEndpoints.default)(ctx.express, router, endpoints);
        ctx.router.use("/".concat(slug), router);
        return formattedCollection;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9pbml0SFRUUC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgYXBpS2V5U3RyYXRlZ3kgZnJvbSAnLi4vYXV0aC9zdHJhdGVnaWVzL2FwaUtleSc7XG5pbXBvcnQgYmluZENvbGxlY3Rpb25NaWRkbGV3YXJlIGZyb20gJy4vYmluZENvbGxlY3Rpb24nO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBtb3VudEVuZHBvaW50cyBmcm9tICcuLi9leHByZXNzL21vdW50RW5kcG9pbnRzJztcbmltcG9ydCBidWlsZEVuZHBvaW50cyBmcm9tICcuL2J1aWxkRW5kcG9pbnRzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdENvbGxlY3Rpb25zSFRUUChjdHg6IFBheWxvYWQpOiB2b2lkIHtcbiAgY3R4LmNvbmZpZy5jb2xsZWN0aW9ucyA9IGN0eC5jb25maWcuY29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cbiAgICBjb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gY29sbGVjdGlvbjtcblxuICAgIHJvdXRlci5hbGwoJyonLCBiaW5kQ29sbGVjdGlvbk1pZGRsZXdhcmUoY3R4LmNvbGxlY3Rpb25zW2Zvcm1hdHRlZENvbGxlY3Rpb24uc2x1Z10pKTtcblxuICAgIGlmIChjb2xsZWN0aW9uLmF1dGgpIHtcbiAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSBjdHguY29sbGVjdGlvbnNbZm9ybWF0dGVkQ29sbGVjdGlvbi5zbHVnXTtcblxuICAgICAgaWYgKGNvbGxlY3Rpb24uYXV0aC51c2VBUElLZXkpIHtcbiAgICAgICAgcGFzc3BvcnQudXNlKGAke2NvbmZpZy5zbHVnfS1hcGkta2V5YCwgYXBpS2V5U3RyYXRlZ3koY3R4LCBjb25maWcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdGlvbi5hdXRoLnN0cmF0ZWdpZXMpKSB7XG4gICAgICAgIGNvbGxlY3Rpb24uYXV0aC5zdHJhdGVnaWVzLmZvckVhY2goKHsgbmFtZSwgc3RyYXRlZ3kgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXNzcG9ydFN0cmF0ZWd5ID0gdHlwZW9mIHN0cmF0ZWd5ID09PSAnb2JqZWN0JyA/IHN0cmF0ZWd5IDogc3RyYXRlZ3koY3R4KTtcbiAgICAgICAgICBwYXNzcG9ydC51c2UoYCR7Y29uZmlnLnNsdWd9LSR7bmFtZSA/PyBpbmRleH1gLCBwYXNzcG9ydFN0cmF0ZWd5KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW5kcG9pbnRzID0gYnVpbGRFbmRwb2ludHMoY29sbGVjdGlvbik7XG4gICAgbW91bnRFbmRwb2ludHMoY3R4LmV4cHJlc3MsIHJvdXRlciwgZW5kcG9pbnRzKTtcblxuICAgIGN0eC5yb3V0ZXIudXNlKGAvJHtzbHVnfWAsIHJvdXRlcik7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkQ29sbGVjdGlvbjtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiaW5pdENvbGxlY3Rpb25zSFRUUCIsImN0eCIsImNvbmZpZyIsImNvbGxlY3Rpb25zIiwibWFwIiwiY29sbGVjdGlvbiIsImZvcm1hdHRlZENvbGxlY3Rpb24iLCJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwic2x1ZyIsImFsbCIsImJpbmRDb2xsZWN0aW9uTWlkZGxld2FyZSIsImF1dGgiLCJ1c2VBUElLZXkiLCJwYXNzcG9ydCIsInVzZSIsImFwaUtleVN0cmF0ZWd5IiwiQXJyYXkiLCJpc0FycmF5Iiwic3RyYXRlZ2llcyIsImZvckVhY2giLCJpbmRleCIsIm5hbWUiLCJzdHJhdGVneSIsInBhc3Nwb3J0U3RyYXRlZ3kiLCJlbmRwb2ludHMiLCJidWlsZEVuZHBvaW50cyIsIm1vdW50RW5kcG9pbnRzIl0sIm1hcHBpbmdzIjoiOzs7OytCQVNBOzs7ZUFBd0JBOzs7OERBVEo7K0RBQ0M7NkRBQ007cUVBQ1U7cUVBRVY7cUVBQ0E7Ozs7OztBQUdaLFNBQVNBLG9CQUFvQkMsR0FBWTtJQUN0REEsSUFBSUMsTUFBTSxDQUFDQyxXQUFXLEdBQUdGLElBQUlDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDQyxHQUFHLENBQUMsU0FBQ0M7UUFDbkQsSUFBTUMsc0JBQXNCRDtRQUU1QixJQUFNRSxTQUFTQyxnQkFBTyxDQUFDQyxNQUFNO1FBQzdCLElBQU0sQUFBRUMsT0FBU0wsV0FBVEs7UUFFUkgsT0FBT0ksR0FBRyxDQUFDLEtBQUtDLElBQUFBLHVCQUF3QixFQUFDWCxJQUFJRSxXQUFXLENBQUNHLG9CQUFvQkksSUFBSSxDQUFDO1FBRWxGLElBQUlMLFdBQVdRLElBQUksRUFBRTtZQUNuQixJQUFNLEFBQUVYLFNBQVdELElBQUlFLFdBQVcsQ0FBQ0csb0JBQW9CSSxJQUFJLENBQUMsQ0FBcERSO1lBRVIsSUFBSUcsV0FBV1EsSUFBSSxDQUFDQyxTQUFTLEVBQUU7Z0JBQzdCQyxpQkFBUSxDQUFDQyxHQUFHLENBQUMsQUFBQyxHQUFjLE9BQVpkLE9BQU9RLElBQUksRUFBQyxhQUFXTyxJQUFBQSxlQUFjLEVBQUNoQixLQUFLQztZQUM3RDtZQUVBLElBQUlnQixNQUFNQyxPQUFPLENBQUNkLFdBQVdRLElBQUksQ0FBQ08sVUFBVSxHQUFHO2dCQUM3Q2YsV0FBV1EsSUFBSSxDQUFDTyxVQUFVLENBQUNDLE9BQU8sQ0FBQyxnQkFBcUJDO3dCQUFsQkMsYUFBQUEsTUFBTUMsaUJBQUFBO29CQUMxQyxJQUFNQyxtQkFBbUIsT0FBT0QsYUFBYSxXQUFXQSxXQUFXQSxTQUFTdkI7b0JBQzVFYyxpQkFBUSxDQUFDQyxHQUFHLENBQUMsQUFBQyxHQUFpQk8sT0FBZnJCLE9BQU9RLElBQUksRUFBQyxLQUFpQixPQUFkYSxpQkFBQUEsa0JBQUFBLE9BQVFELFFBQVNHO2dCQUNsRDtZQUNGO1FBQ0Y7UUFFQSxJQUFNQyxZQUFZQyxJQUFBQSx1QkFBYyxFQUFDdEI7UUFDakN1QixJQUFBQSx1QkFBYyxFQUFDM0IsSUFBSU8sT0FBTyxFQUFFRCxRQUFRbUI7UUFFcEN6QixJQUFJTSxNQUFNLENBQUNTLEdBQUcsQ0FBQyxBQUFDLElBQVEsT0FBTE4sT0FBUUg7UUFFM0IsT0FBT0Q7SUFDVDtBQUNGIn0=