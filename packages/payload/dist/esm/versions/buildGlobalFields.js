export var buildVersionGlobalFields = function(global) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9idWlsZEdsb2JhbEZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRWZXJzaW9uR2xvYmFsRmllbGRzID0gKGdsb2JhbDogU2FuaXRpemVkR2xvYmFsQ29uZmlnKTogRmllbGRbXSA9PiB7XG4gIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAndmVyc2lvbicsXG4gICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgZmllbGRzOiBnbG9iYWwuZmllbGRzLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICB0eXBlOiAnZGF0ZScsXG4gICAgICBhZG1pbjoge1xuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICBdO1xuXG4gIGlmIChnbG9iYWw/LnZlcnNpb25zPy5kcmFmdHMgJiYgZ2xvYmFsPy52ZXJzaW9ucz8uZHJhZnRzPy5hdXRvc2F2ZSkge1xuICAgIGZpZWxkcy5wdXNoKHtcbiAgICAgIG5hbWU6ICdhdXRvc2F2ZScsXG4gICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZmllbGRzO1xufTtcbiJdLCJuYW1lcyI6WyJidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMiLCJnbG9iYWwiLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsImFkbWluIiwiZGlzYWJsZWQiLCJ2ZXJzaW9ucyIsImRyYWZ0cyIsImF1dG9zYXZlIiwicHVzaCIsImluZGV4Il0sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLElBQU1BLDJCQUEyQixTQUFDQztRQXVCbkNBLGtCQUFBQSxTQUE0QkEseUJBQUFBLG1CQUFBQTtJQXRCaEMsSUFBTUMsU0FBa0I7UUFDdEI7WUFDRUMsTUFBTTtZQUNOQyxNQUFNO1lBQ05GLFFBQVFELE9BQU9DLE1BQU07UUFDdkI7UUFDQTtZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBTztnQkFDTEMsVUFBVTtZQUNaO1FBQ0Y7UUFDQTtZQUNFSCxNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBTztnQkFDTEMsVUFBVTtZQUNaO1FBQ0Y7S0FDRDtJQUVELElBQUlMLEVBQUFBLFVBQUFBLG9CQUFBQSwrQkFBQUEsbUJBQUFBLFFBQVFNLFFBQVEsY0FBaEJOLHVDQUFBQSxpQkFBa0JPLE1BQU0sT0FBSVAsV0FBQUEsb0JBQUFBLGdDQUFBQSxvQkFBQUEsU0FBUU0sUUFBUSxjQUFoQk4seUNBQUFBLDBCQUFBQSxrQkFBa0JPLE1BQU0sY0FBeEJQLDhDQUFBQSx3QkFBMEJRLFFBQVEsR0FBRTtRQUNsRVAsT0FBT1EsSUFBSSxDQUFDO1lBQ1ZQLE1BQU07WUFDTkMsTUFBTTtZQUNOTyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLE9BQU9UO0FBQ1QsRUFBRSJ9