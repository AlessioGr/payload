import { extractTranslations } from "../translations/extractTranslations";
var labels = extractTranslations([
    "version:draft",
    "version:published",
    "version:status"
]);
export var statuses = [
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
export default baseVersionFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9iYXNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBleHRyYWN0VHJhbnNsYXRpb25zIH0gZnJvbSAnLi4vdHJhbnNsYXRpb25zL2V4dHJhY3RUcmFuc2xhdGlvbnMnO1xuXG5jb25zdCBsYWJlbHMgPSBleHRyYWN0VHJhbnNsYXRpb25zKFsndmVyc2lvbjpkcmFmdCcsICd2ZXJzaW9uOnB1Ymxpc2hlZCcsICd2ZXJzaW9uOnN0YXR1cyddKTtcblxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gW1xuICB7XG4gICAgbGFiZWw6IGxhYmVsc1sndmVyc2lvbjpkcmFmdCddLFxuICAgIHZhbHVlOiAnZHJhZnQnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IGxhYmVsc1sndmVyc2lvbjpwdWJsaXNoZWQnXSxcbiAgICB2YWx1ZTogJ3B1Ymxpc2hlZCcsXG4gIH0sXG5dO1xuXG5jb25zdCBiYXNlVmVyc2lvbkZpZWxkczogRmllbGRbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdfc3RhdHVzJyxcbiAgICBsYWJlbDogbGFiZWxzWyd2ZXJzaW9uOnN0YXR1cyddLFxuICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgIG9wdGlvbnM6IHN0YXR1c2VzLFxuICAgIGRlZmF1bHRWYWx1ZTogJ2RyYWZ0JyxcbiAgICBhZG1pbjoge1xuICAgICAgZGlzYWJsZUJ1bGtFZGl0OiB0cnVlLFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWVsZDogKCkgPT4gbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VWZXJzaW9uRmllbGRzO1xuIl0sIm5hbWVzIjpbImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJsYWJlbHMiLCJzdGF0dXNlcyIsImxhYmVsIiwidmFsdWUiLCJiYXNlVmVyc2lvbkZpZWxkcyIsIm5hbWUiLCJ0eXBlIiwib3B0aW9ucyIsImRlZmF1bHRWYWx1ZSIsImFkbWluIiwiZGlzYWJsZUJ1bGtFZGl0IiwiY29tcG9uZW50cyIsIkZpZWxkIl0sIm1hcHBpbmdzIjoiQUFDQSxTQUFTQSxtQkFBbUIsUUFBUSxzQ0FBc0M7QUFFMUUsSUFBTUMsU0FBU0Qsb0JBQW9CO0lBQUM7SUFBaUI7SUFBcUI7Q0FBaUI7QUFFM0YsT0FBTyxJQUFNRSxXQUFXO0lBQ3RCO1FBQ0VDLE9BQU9GLE1BQU0sQ0FBQyxnQkFBZ0I7UUFDOUJHLE9BQU87SUFDVDtJQUNBO1FBQ0VELE9BQU9GLE1BQU0sQ0FBQyxvQkFBb0I7UUFDbENHLE9BQU87SUFDVDtDQUNELENBQUM7QUFFRixJQUFNQyxvQkFBNkI7SUFDakM7UUFDRUMsTUFBTTtRQUNOSCxPQUFPRixNQUFNLENBQUMsaUJBQWlCO1FBQy9CTSxNQUFNO1FBQ05DLFNBQVNOO1FBQ1RPLGNBQWM7UUFDZEMsT0FBTztZQUNMQyxpQkFBaUI7WUFDakJDLFlBQVk7Z0JBQ1ZDLE9BQU87MkJBQU07O1lBQ2Y7UUFDRjtJQUNGO0NBQ0Q7QUFFRCxlQUFlUixrQkFBa0IifQ==