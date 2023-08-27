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
    statuses: function() {
        return statuses;
    },
    default: function() {
        return _default;
    }
});
var _extractTranslations = require("../translations/extractTranslations");
var labels = (0, _extractTranslations.extractTranslations)([
    "version:draft",
    "version:published",
    "version:status"
]);
var statuses = [
    {
        label: labels["version:draft"],
        value: "draft"
    },
    {
        label: labels["version:published"],
        value: "published"
    }
];
var baseVersionFields = [
    {
        name: "_status",
        label: labels["version:status"],
        type: "select",
        options: statuses,
        defaultValue: "draft",
        admin: {
            disableBulkEdit: true,
            components: {
                Field: function() {
                    return null;
                }
            }
        }
    }
];
var _default = baseVersionFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9iYXNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBleHRyYWN0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vdHJhbnNsYXRpb25zL2V4dHJhY3RUcmFuc2xhdGlvbnMnO1xuXG5jb25zdCBsYWJlbHMgPSBleHRyYWN0VHJhbnNsYXRpb25zKFsndmVyc2lvbjpkcmFmdCcsICd2ZXJzaW9uOnB1Ymxpc2hlZCcsICd2ZXJzaW9uOnN0YXR1cyddKTtcblxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gW1xuICB7XG4gICAgbGFiZWw6IGxhYmVsc1sndmVyc2lvbjpkcmFmdCddLFxuICAgIHZhbHVlOiAnZHJhZnQnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGxhYmVsc1sndmVyc2lvbjpwdWJsaXNoZWQnXSxcbiAgICB2YWx1ZTogJ3B1Ymxpc2hlZCcsXG4gIH0sXG5dO1xuXG5jb25zdCBiYXNlVmVyc2lvbkZpZWxkczogRmllbGRbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdfc3RhdHVzJyxcbiAgICBsYWJlbDogbGFiZWxzWyd2ZXJzaW9uOnN0YXR1cyddLFxuICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgIG9wdGlvbnM6IHN0YXR1c2VzLFxuICAgIGRlZmF1bHRWYWx1ZTogJ2RyYWZ0JyxcbiAgICBhZG1pbjoge1xuICAgICAgZGlzYWJsZUJ1bGtFZGl0OiB0cnVlLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWVsZDogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VWZXJzaW9uRmllbGRzO1xuIl0sIm5hbWVzIjpbInN0YXR1c2VzIiwibGFiZWxzIiwiZXh0cmFjdFRyYW5zbGF0aW9ucyIsImxhYmVsIiwidmFsdWUiLCJiYXNlVmVyc2lvbkZpZWxkcyIsIm5hbWUiLCJ0eXBlIiwib3B0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImFkbWluIiwiZGlzYWJsZUJ1bGtFZGl0IiwiY29tcG9uZW50cyIsIkZpZWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUthQSxRQUFRO2VBQVJBOztJQTJCYixPQUFpQztlQUFqQzs7O21DQS9Cb0M7QUFFcEMsSUFBTUMsU0FBU0MsSUFBQUEsd0NBQW1CLEVBQUM7SUFBQztJQUFpQjtJQUFxQjtDQUFpQjtBQUVwRixJQUFNRixXQUFXO0lBQ3RCO1FBQ0VHLE9BQU9GLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDOUJHLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU9GLE1BQU0sQ0FBQyxvQkFBb0I7UUFDbENHLE9BQU87SUFDVDtDQUNEO0FBRUQsSUFBTUMsb0JBQTZCO0lBQ2pDO1FBQ0VDLE1BQU07UUFDTkgsT0FBT0YsTUFBTSxDQUFDLGlCQUFpQjtRQUMvQk0sTUFBTTtRQUNOQyxTQUFTUjtRQUNUUyxjQUFjO1FBQ2RDLE9BQU87WUFDTEMsaUJBQWlCO1lBQ2pCQyxZQUFZO2dCQUNWQyxPQUFPOzJCQUFNOztZQUNmO1FBQ0Y7SUFDRjtDQUNEO0lBRUQsV0FBZVIifQ==