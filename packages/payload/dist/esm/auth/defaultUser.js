import { extractTranslations } from "../translations/extractTranslations";
var labels = extractTranslations([
    "general:user",
    "general:users"
]);
export var defaultUserCollection = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2RlZmF1bHRVc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJztcblxuY29uc3QgbGFiZWxzID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbJ2dlbmVyYWw6dXNlcicsICdnZW5lcmFsOnVzZXJzJ10pO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFVzZXJDb2xsZWN0aW9uOiBDb2xsZWN0aW9uQ29uZmlnID0ge1xuICBzbHVnOiAndXNlcnMnLFxuICBsYWJlbHM6IHtcbiAgICBzaW5ndWxhcjogbGFiZWxzWydnZW5lcmFsOnVzZXInXSxcbiAgICBwbHVyYWw6IGxhYmVsc1snZ2VuZXJhbDp1c2VycyddLFxuICB9LFxuICBhZG1pbjoge1xuICAgIHVzZUFzVGl0bGU6ICdlbWFpbCcsXG4gIH0sXG4gIGF1dGg6IHtcbiAgICB0b2tlbkV4cGlyYXRpb246IDcyMDAsXG4gIH0sXG4gIGZpZWxkczogW10sXG59O1xuIl0sIm5hbWVzIjpbImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJsYWJlbHMiLCJkZWZhdWx0VXNlckNvbGxlY3Rpb24iLCJzbHVnIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJhdXRoIiwidG9rZW5FeHBpcmF0aW9uIiwiZmllbGRzIl0sIm1hcHBpbmdzIjoiQUFDQSxTQUFTQSxtQkFBbUIsUUFBUSxzQ0FBc0M7QUFFMUUsSUFBTUMsU0FBU0Qsb0JBQW9CO0lBQUM7SUFBZ0I7Q0FBZ0I7QUFFcEUsT0FBTyxJQUFNRSx3QkFBMEM7SUFDckRDLE1BQU07SUFDTkYsUUFBUTtRQUNORyxVQUFVSCxNQUFNLENBQUMsZUFBZTtRQUNoQ0ksUUFBUUosTUFBTSxDQUFDLGdCQUFnQjtJQUNqQztJQUNBSyxPQUFPO1FBQ0xDLFlBQVk7SUFDZDtJQUNBQyxNQUFNO1FBQ0pDLGlCQUFpQjtJQUNuQjtJQUNBQyxRQUFRLEVBQUU7QUFDWixFQUFFIn0=