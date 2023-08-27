"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "defaultUserCollection", {
    enumerable: true,
    get: function() {
        return defaultUserCollection;
    }
});
var _extractTranslations = require("../translations/extractTranslations");
var labels = (0, _extractTranslations.extractTranslations)([
    "general:user",
    "general:users"
]);
var defaultUserCollection = {
    slug: "users",
    labels: {
        singular: labels["general:user"],
        plural: labels["general:users"]
    },
    admin: {
        useAsTitle: "email"
    },
    auth: {
        tokenExpiration: 7200
    },
    fields: []
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2RlZmF1bHRVc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJztcblxuY29uc3QgbGFiZWxzID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbJ2dlbmVyYWw6dXNlcicsICdnZW5lcmFsOnVzZXJzJ10pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFVzZXJDb2xsZWN0aW9uOiBDb2xsZWN0aW9uQ29uZmlnID0ge1xuICBzbHVnOiAndXNlcnMnLFxuICBsYWJlbHM6IHtcbiAgICBzaW5ndWxhcjogbGFiZWxzWydnZW5lcmFsOnVzZXInXSxcbiAgICBwbHVyYWw6IGxhYmVsc1snZ2VuZXJhbDp1c2VycyddLFxuICB9LFxuICBhZG1pbjoge1xuICAgIHVzZUFzVGl0bGU6ICdlbWFpbCcsXG4gIH0sXG4gIGF1dGg6IHtcbiAgICB0b2tlbkV4cGlyYXRpb246IDcyMDAsXG4gIH0sXG4gIGZpZWxkczogW10sXG59O1xuIl0sIm5hbWVzIjpbImRlZmF1bHRVc2VyQ29sbGVjdGlvbiIsImxhYmVscyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJzbHVnIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJhdXRoIiwidG9rZW5FeHBpcmF0aW9uIiwiZmllbGRzIl0sIm1hcHBpbmdzIjoiOzs7OytCQUthQTs7O2VBQUFBOzs7bUNBSnVCO0FBRXBDLElBQU1DLFNBQVNDLElBQUFBLHdDQUFtQixFQUFDO0lBQUM7SUFBZ0I7Q0FBZ0I7QUFFN0QsSUFBTUYsd0JBQTBDO0lBQ3JERyxNQUFNO0lBQ05GLFFBQVE7UUFDTkcsVUFBVUgsTUFBTSxDQUFDLGVBQWU7UUFDaENJLFFBQVFKLE1BQU0sQ0FBQyxnQkFBZ0I7SUFDakM7SUFDQUssT0FBTztRQUNMQyxZQUFZO0lBQ2Q7SUFDQUMsTUFBTTtRQUNKQyxpQkFBaUI7SUFDbkI7SUFDQUMsUUFBUSxFQUFFO0FBQ1oifQ==