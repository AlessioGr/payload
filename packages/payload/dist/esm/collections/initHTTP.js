import express from "express";
import passport from "passport";
import apiKeyStrategy from "../auth/strategies/apiKey";
import bindCollectionMiddleware from "./bindCollection";
import mountEndpoints from "../express/mountEndpoints";
import buildEndpoints from "./buildEndpoints";
export default function initCollectionsHTTP(ctx) {
    ctx.config.collections = ctx.config.collections.map(function(collection) {
        var formattedCollection = collection;
        var router = express.Router();
        var slug = collection.slug;
        router.all("*", bindCollectionMiddleware(ctx.collections[formattedCollection.slug]));
        if (collection.auth) {
            var config = ctx.collections[formattedCollection.slug].config;
            if (collection.auth.useAPIKey) {
                passport.use("".concat(config.slug, "-api-key"), apiKeyStrategy(ctx, config));
            }
            if (Array.isArray(collection.auth.strategies)) {
                collection.auth.strategies.forEach(function(param, index) {
                    var name = param.name, strategy = param.strategy;
                    var passportStrategy = typeof strategy === "object" ? strategy : strategy(ctx);
                    passport.use("".concat(config.slug, "-").concat(name !== null && name !== void 0 ? name : index), passportStrategy);
                });
            }
        }
        var endpoints = buildEndpoints(collection);
        mountEndpoints(ctx.express, router, endpoints);
        ctx.router.use("/".concat(slug), router);
        return formattedCollection;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9pbml0SFRUUC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgYXBpS2V5U3RyYXRlZ3kgZnJvbSAnLi4vYXV0aC9zdHJhdGVnaWVzL2FwaUtleSc7XG5pbXBvcnQgYmluZENvbGxlY3Rpb25NaWRkbGV3YXJlIGZyb20gJy4vYmluZENvbGxlY3Rpb24nO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3R5cGVzJztcbmltcG9ydCBtb3VudEVuZHBvaW50cyBmcm9tICcuLi9leHByZXNzL21vdW50RW5kcG9pbnRzJztcbmltcG9ydCBidWlsZEVuZHBvaW50cyBmcm9tICcuL2J1aWxkRW5kcG9pbnRzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdENvbGxlY3Rpb25zSFRUUChjdHg6IFBheWxvYWQpOiB2b2lkIHtcbiAgY3R4LmNvbmZpZy5jb2xsZWN0aW9ucyA9IGN0eC5jb25maWcuY29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG5cbiAgICBjb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuICAgIGNvbnN0IHsgc2x1ZyB9ID0gY29sbGVjdGlvbjtcblxuICAgIHJvdXRlci5hbGwoJyonLCBiaW5kQ29sbGVjdGlvbk1pZGRsZXdhcmUoY3R4LmNvbGxlY3Rpb25zW2Zvcm1hdHRlZENvbGxlY3Rpb24uc2x1Z10pKTtcblxuICAgIGlmIChjb2xsZWN0aW9uLmF1dGgpIHtcbiAgICAgIGNvbnN0IHsgY29uZmlnIH0gPSBjdHguY29sbGVjdGlvbnNbZm9ybWF0dGVkQ29sbGVjdGlvbi5zbHVnXTtcblxuICAgICAgaWYgKGNvbGxlY3Rpb24uYXV0aC51c2VBUElLZXkpIHtcbiAgICAgICAgcGFzc3BvcnQudXNlKGAke2NvbmZpZy5zbHVnfS1hcGkta2V5YCwgYXBpS2V5U3RyYXRlZ3koY3R4LCBjb25maWcpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY29sbGVjdGlvbi5hdXRoLnN0cmF0ZWdpZXMpKSB7XG4gICAgICAgIGNvbGxlY3Rpb24uYXV0aC5zdHJhdGVnaWVzLmZvckVhY2goKHsgbmFtZSwgc3RyYXRlZ3kgfSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXNzcG9ydFN0cmF0ZWd5ID0gdHlwZW9mIHN0cmF0ZWd5ID09PSAnb2JqZWN0JyA/IHN0cmF0ZWd5IDogc3RyYXRlZ3koY3R4KTtcbiAgICAgICAgICBwYXNzcG9ydC51c2UoYCR7Y29uZmlnLnNsdWd9LSR7bmFtZSA/PyBpbmRleH1gLCBwYXNzcG9ydFN0cmF0ZWd5KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZW5kcG9pbnRzID0gYnVpbGRFbmRwb2ludHMoY29sbGVjdGlvbik7XG4gICAgbW91bnRFbmRwb2ludHMoY3R4LmV4cHJlc3MsIHJvdXRlciwgZW5kcG9pbnRzKTtcblxuICAgIGN0eC5yb3V0ZXIudXNlKGAvJHtzbHVnfWAsIHJvdXRlcik7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkQ29sbGVjdGlvbjtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInBhc3Nwb3J0IiwiYXBpS2V5U3RyYXRlZ3kiLCJiaW5kQ29sbGVjdGlvbk1pZGRsZXdhcmUiLCJtb3VudEVuZHBvaW50cyIsImJ1aWxkRW5kcG9pbnRzIiwiaW5pdENvbGxlY3Rpb25zSFRUUCIsImN0eCIsImNvbmZpZyIsImNvbGxlY3Rpb25zIiwibWFwIiwiY29sbGVjdGlvbiIsImZvcm1hdHRlZENvbGxlY3Rpb24iLCJyb3V0ZXIiLCJSb3V0ZXIiLCJzbHVnIiwiYWxsIiwiYXV0aCIsInVzZUFQSUtleSIsInVzZSIsIkFycmF5IiwiaXNBcnJheSIsInN0cmF0ZWdpZXMiLCJmb3JFYWNoIiwiaW5kZXgiLCJuYW1lIiwic3RyYXRlZ3kiLCJwYXNzcG9ydFN0cmF0ZWd5IiwiZW5kcG9pbnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxhQUFhLFVBQVU7QUFDOUIsT0FBT0MsY0FBYyxXQUFXO0FBQ2hDLE9BQU9DLG9CQUFvQiw0QkFBNEI7QUFDdkQsT0FBT0MsOEJBQThCLG1CQUFtQjtBQUV4RCxPQUFPQyxvQkFBb0IsNEJBQTRCO0FBQ3ZELE9BQU9DLG9CQUFvQixtQkFBbUI7QUFHOUMsZUFBZSxTQUFTQyxvQkFBb0JDLEdBQVk7SUFDdERBLElBQUlDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHRixJQUFJQyxNQUFNLENBQUNDLFdBQVcsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDO1FBQ25ELElBQU1DLHNCQUFzQkQ7UUFFNUIsSUFBTUUsU0FBU2IsUUFBUWMsTUFBTTtRQUM3QixJQUFNLEFBQUVDLE9BQVNKLFdBQVRJO1FBRVJGLE9BQU9HLEdBQUcsQ0FBQyxLQUFLYix5QkFBeUJJLElBQUlFLFdBQVcsQ0FBQ0csb0JBQW9CRyxJQUFJLENBQUM7UUFFbEYsSUFBSUosV0FBV00sSUFBSSxFQUFFO1lBQ25CLElBQU0sQUFBRVQsU0FBV0QsSUFBSUUsV0FBVyxDQUFDRyxvQkFBb0JHLElBQUksQ0FBQyxDQUFwRFA7WUFFUixJQUFJRyxXQUFXTSxJQUFJLENBQUNDLFNBQVMsRUFBRTtnQkFDN0JqQixTQUFTa0IsR0FBRyxDQUFDLEFBQUMsR0FBYyxPQUFaWCxPQUFPTyxJQUFJLEVBQUMsYUFBV2IsZUFBZUssS0FBS0M7WUFDN0Q7WUFFQSxJQUFJWSxNQUFNQyxPQUFPLENBQUNWLFdBQVdNLElBQUksQ0FBQ0ssVUFBVSxHQUFHO2dCQUM3Q1gsV0FBV00sSUFBSSxDQUFDSyxVQUFVLENBQUNDLE9BQU8sQ0FBQyxnQkFBcUJDO3dCQUFsQkMsYUFBQUEsTUFBTUMsaUJBQUFBO29CQUMxQyxJQUFNQyxtQkFBbUIsT0FBT0QsYUFBYSxXQUFXQSxXQUFXQSxTQUFTbkI7b0JBQzVFTixTQUFTa0IsR0FBRyxDQUFDLEFBQUMsR0FBaUJNLE9BQWZqQixPQUFPTyxJQUFJLEVBQUMsS0FBaUIsT0FBZFUsaUJBQUFBLGtCQUFBQSxPQUFRRCxRQUFTRztnQkFDbEQ7WUFDRjtRQUNGO1FBRUEsSUFBTUMsWUFBWXZCLGVBQWVNO1FBQ2pDUCxlQUFlRyxJQUFJUCxPQUFPLEVBQUVhLFFBQVFlO1FBRXBDckIsSUFBSU0sTUFBTSxDQUFDTSxHQUFHLENBQUMsQUFBQyxJQUFRLE9BQUxKLE9BQVFGO1FBRTNCLE9BQU9EO0lBQ1Q7QUFDRiJ9