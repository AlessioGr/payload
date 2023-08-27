"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildVersionGlobalFields", {
    enumerable: true,
    get: function() {
        return buildVersionGlobalFields;
    }
});
var buildVersionGlobalFields = function(global) {
    var _global_versions, _global, _global_versions_drafts, _global_versions1, _global1;
    var fields = [
        {
            name: "version",
            type: "group",
            fields: global.fields
        },
        {
            name: "createdAt",
            type: "date",
            admin: {
                disabled: true
            }
        },
        {
            name: "updatedAt",
            type: "date",
            admin: {
                disabled: true
            }
        }
    ];
    if (((_global = global) === null || _global === void 0 ? void 0 : (_global_versions = _global.versions) === null || _global_versions === void 0 ? void 0 : _global_versions.drafts) && ((_global1 = global) === null || _global1 === void 0 ? void 0 : (_global_versions1 = _global1.versions) === null || _global_versions1 === void 0 ? void 0 : (_global_versions_drafts = _global_versions1.drafts) === null || _global_versions_drafts === void 0 ? void 0 : _global_versions_drafts.autosave)) {
        fields.push({
            name: "autosave",
            type: "checkbox",
            index: true
        });
    }
    return fields;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9idWlsZEdsb2JhbEZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRWZXJzaW9uR2xvYmFsRmllbGRzID0gKGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogRmllbGRbXSA9PiB7XG4gIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAndmVyc2lvbicsXG4gICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgZmllbGRzOiBnbG9iYWwuZmllbGRzLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICBhZG1pbjoge1xuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIGlmIChnbG9iYWw/LnZlcnNpb25zPy5kcmFmdHMgJiYgZ2xvYmFsPy52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkge1xuICAgIGZpZWxkcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdhdXRvc2F2ZScsXG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufTtcbiJdLCJuYW1lcyI6WyJidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMiLCJnbG9iYWwiLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsImFkbWluIiwiZGlzYWJsZWQiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImF1dG9zYXZlIiwicHVzaCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7OytCQUdhQTs7O2VBQUFBOzs7QUFBTixJQUFNQSwyQkFBMkIsU0FBQ0M7UUF1Qm5DQSxrQkFBQUEsU0FBNEJBLHlCQUFBQSxtQkFBQUE7SUF0QmhDLElBQU1DLFNBQWtCO1FBQ3RCO1lBQ0VDLE1BQU07WUFDTkMsTUFBTTtZQUNORixRQUFRRCxPQUFPQyxNQUFNO1FBQ3ZCO1FBQ0E7WUFDRUMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU87Z0JBQ0xDLFVBQVU7WUFDWjtRQUNGO1FBQ0E7WUFDRUgsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLE9BQU87Z0JBQ0xDLFVBQVU7WUFDWjtRQUNGO0tBQ0Q7SUFFRCxJQUFJTCxFQUFBQSxVQUFBQSxvQkFBQUEsK0JBQUFBLG1CQUFBQSxRQUFRTSxRQUFRLGNBQWhCTix1Q0FBQUEsaUJBQWtCTyxNQUFNLE9BQUlQLFdBQUFBLG9CQUFBQSxnQ0FBQUEsb0JBQUFBLFNBQVFNLFFBQVEsY0FBaEJOLHlDQUFBQSwwQkFBQUEsa0JBQWtCTyxNQUFNLGNBQXhCUCw4Q0FBQUEsd0JBQTBCUSxRQUFRLEdBQUU7UUFDbEVQLE9BQU9RLElBQUksQ0FBQztZQUNWUCxNQUFNO1lBQ05DLE1BQU07WUFDTk8sT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPVDtBQUNUIn0=