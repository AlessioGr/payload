export var buildVersionCollectionFields = function(collection) {
    var _collection_versions, _collection, _collection_versions_drafts, _collection_versions1, _collection1;
    var fields = [
        {
            name: "parent",
            type: "relationship",
            index: true,
            relationTo: collection.slug
        },
        {
            name: "version",
            type: "group",
            fields: collection.fields
        },
        {
            name: "createdAt",
            type: "date",
            index: true,
            admin: {
                disabled: true
            }
        },
        {
            name: "updatedAt",
            type: "date",
            index: true,
            admin: {
                disabled: true
            }
        }
    ];
    if (((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_versions = _collection.versions) === null || _collection_versions === void 0 ? void 0 : _collection_versions.drafts) && ((_collection1 = collection) === null || _collection1 === void 0 ? void 0 : (_collection_versions1 = _collection1.versions) === null || _collection_versions1 === void 0 ? void 0 : (_collection_versions_drafts = _collection_versions1.drafts) === null || _collection_versions_drafts === void 0 ? void 0 : _collection_versions_drafts.autosave)) {
        fields.push({
            name: "autosave",
            type: "checkbox",
            index: true
        });
    }
    return fields;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJzaW9ucy9idWlsZENvbGxlY3Rpb25GaWVsZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgYnVpbGRWZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnKTogRmllbGRbXSA9PiB7XG4gIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAncGFyZW50JyxcbiAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICByZWxhdGlvblRvOiBjb2xsZWN0aW9uLnNsdWcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndmVyc2lvbicsXG4gICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgZmllbGRzOiBjb2xsZWN0aW9uLmZpZWxkcyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdjcmVhdGVkQXQnLFxuICAgICAgdHlwZTogJ2RhdGUnLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBhZG1pbjoge1xuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndXBkYXRlZEF0JyxcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgYWRtaW46IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIF07XG5cbiAgaWYgKGNvbGxlY3Rpb24/LnZlcnNpb25zPy5kcmFmdHMgJiYgY29sbGVjdGlvbj8udmVyc2lvbnM/LmRyYWZ0cz8uYXV0b3NhdmUpIHtcbiAgICBmaWVsZHMucHVzaCh7XG4gICAgICBuYW1lOiAnYXV0b3NhdmUnLFxuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGZpZWxkcztcbn07XG4iXSwibmFtZXMiOlsiYnVpbGRWZXJzaW9uQ29sbGVjdGlvbkZpZWxkcyIsImNvbGxlY3Rpb24iLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsImluZGV4IiwicmVsYXRpb25UbyIsInNsdWciLCJhZG1pbiIsImRpc2FibGVkIiwidmVyc2lvbnMiLCJkcmFmdHMiLCJhdXRvc2F2ZSIsInB1c2giXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sSUFBTUEsK0JBQStCLFNBQUNDO1FBK0J2Q0Esc0JBQUFBLGFBQWdDQSw2QkFBQUEsdUJBQUFBO0lBOUJwQyxJQUFNQyxTQUFrQjtRQUN0QjtZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBTztZQUNQQyxZQUFZTCxXQUFXTSxJQUFJO1FBQzdCO1FBQ0E7WUFDRUosTUFBTTtZQUNOQyxNQUFNO1lBQ05GLFFBQVFELFdBQVdDLE1BQU07UUFDM0I7UUFDQTtZQUNFQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBTztZQUNQRyxPQUFPO2dCQUNMQyxVQUFVO1lBQ1o7UUFDRjtRQUNBO1lBQ0VOLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BHLE9BQU87Z0JBQ0xDLFVBQVU7WUFDWjtRQUNGO0tBQ0Q7SUFFRCxJQUFJUixFQUFBQSxjQUFBQSx3QkFBQUEsbUNBQUFBLHVCQUFBQSxZQUFZUyxRQUFRLGNBQXBCVCwyQ0FBQUEscUJBQXNCVSxNQUFNLE9BQUlWLGVBQUFBLHdCQUFBQSxvQ0FBQUEsd0JBQUFBLGFBQVlTLFFBQVEsY0FBcEJULDZDQUFBQSw4QkFBQUEsc0JBQXNCVSxNQUFNLGNBQTVCVixrREFBQUEsNEJBQThCVyxRQUFRLEdBQUU7UUFDMUVWLE9BQU9XLElBQUksQ0FBQztZQUNWVixNQUFNO1lBQ05DLE1BQU07WUFDTkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPSDtBQUNULEVBQUUifQ==