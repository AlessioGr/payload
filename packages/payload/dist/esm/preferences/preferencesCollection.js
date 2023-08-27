import findOne from "./requestHandlers/findOne";
import update from "./requestHandlers/update";
import deleteHandler from "./requestHandlers/delete";
var preferenceAccess = function(param) {
    var req = param.req;
    var _req_user, _req;
    return {
        "user.value": {
            equals: (_req = req) === null || _req === void 0 ? void 0 : (_req_user = _req.user) === null || _req_user === void 0 ? void 0 : _req_user.id
        }
    };
};
var getPreferencesCollection = function(config) {
    return {
        slug: "payload-preferences",
        admin: {
            hidden: true
        },
        access: {
            read: preferenceAccess,
            delete: preferenceAccess
        },
        fields: [
            {
                name: "user",
                type: "relationship",
                relationTo: config.collections.filter(function(collectionConfig) {
                    return collectionConfig.auth;
                }).map(function(collectionConfig) {
                    return collectionConfig.slug;
                }),
                required: true,
                hooks: {
                    beforeValidate: [
                        function(param) {
                            var req = param.req;
                            var _req, _req1, _req2;
                            if (!((_req = req) === null || _req === void 0 ? void 0 : _req.user)) {
                                return null;
                            }
                            return {
                                value: (_req1 = req) === null || _req1 === void 0 ? void 0 : _req1.user.id,
                                relationTo: (_req2 = req) === null || _req2 === void 0 ? void 0 : _req2.user.collection
                            };
                        }
                    ]
                }
            },
            {
                name: "key",
                type: "text"
            },
            {
                name: "value",
                type: "json"
            }
        ],
        indexes: [
            {
                fields: {
                    "user.value": 1,
                    "user.relationTo": 1,
                    key: 1
                },
                options: {
                    unique: true
                }
            }
        ],
        endpoints: [
            {
                method: "get",
                path: "/:key",
                handler: findOne
            },
            {
                method: "delete",
                path: "/:key",
                handler: deleteHandler
            },
            {
                method: "post",
                path: "/:key",
                handler: update
            }
        ]
    };
};
export default getPreferencesCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlc0NvbGxlY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBBY2Nlc3MsIENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZmluZE9uZSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9maW5kT25lJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlJztcbmltcG9ydCBkZWxldGVIYW5kbGVyIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2RlbGV0ZSc7XG5cbmNvbnN0IHByZWZlcmVuY2VBY2Nlc3M6IEFjY2VzcyA9ICh7IHJlcSB9KSA9PiAoe1xuICAndXNlci52YWx1ZSc6IHtcbiAgICBlcXVhbHM6IHJlcT8udXNlcj8uaWQsXG4gIH0sXG59KTtcblxuY29uc3QgZ2V0UHJlZmVyZW5jZXNDb2xsZWN0aW9uID0gKGNvbmZpZzogQ29uZmlnKTogQ29sbGVjdGlvbkNvbmZpZyA9PiAoe1xuICBzbHVnOiAncGF5bG9hZC1wcmVmZXJlbmNlcycsXG4gIGFkbWluOiB7XG4gICAgaGlkZGVuOiB0cnVlLFxuICB9LFxuICBhY2Nlc3M6IHtcbiAgICByZWFkOiBwcmVmZXJlbmNlQWNjZXNzLFxuICAgIGRlbGV0ZTogcHJlZmVyZW5jZUFjY2VzcyxcbiAgfSxcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3VzZXInLFxuICAgICAgdHlwZTogJ3JlbGF0aW9uc2hpcCcsXG4gICAgICByZWxhdGlvblRvOiBjb25maWcuY29sbGVjdGlvbnNcbiAgICAgICAgLmZpbHRlcigoY29sbGVjdGlvbkNvbmZpZykgPT4gY29sbGVjdGlvbkNvbmZpZy5hdXRoKVxuICAgICAgICAubWFwKChjb2xsZWN0aW9uQ29uZmlnKSA9PiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcpLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBob29rczoge1xuICAgICAgICBiZWZvcmVWYWxpZGF0ZTogW1xuICAgICAgICAgICgoeyByZXEgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXE/LnVzZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogcmVxPy51c2VyLmlkLFxuICAgICAgICAgICAgICByZWxhdGlvblRvOiByZXE/LnVzZXIuY29sbGVjdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2tleScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndmFsdWUnLFxuICAgICAgdHlwZTogJ2pzb24nLFxuICAgIH0sXG4gIF0sXG4gIGluZGV4ZXM6IFtcbiAgICB7XG4gICAgICBmaWVsZHM6IHtcbiAgICAgICAgJ3VzZXIudmFsdWUnOiAxLFxuICAgICAgICAndXNlci5yZWxhdGlvblRvJzogMSxcbiAgICAgICAga2V5OiAxLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBlbmRwb2ludHM6IFtcbiAgICB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgcGF0aDogJy86a2V5JyxcbiAgICAgIGhhbmRsZXI6IGZpbmRPbmUsXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgcGF0aDogJy86a2V5JyxcbiAgICAgIGhhbmRsZXI6IGRlbGV0ZUhhbmRsZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHBhdGg6ICcvOmtleScsXG4gICAgICBoYW5kbGVyOiB1cGRhdGUsXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcmVmZXJlbmNlc0NvbGxlY3Rpb247XG4iXSwibmFtZXMiOlsiZmluZE9uZSIsInVwZGF0ZSIsImRlbGV0ZUhhbmRsZXIiLCJwcmVmZXJlbmNlQWNjZXNzIiwicmVxIiwiZXF1YWxzIiwidXNlciIsImlkIiwiZ2V0UHJlZmVyZW5jZXNDb2xsZWN0aW9uIiwiY29uZmlnIiwic2x1ZyIsImFkbWluIiwiaGlkZGVuIiwiYWNjZXNzIiwicmVhZCIsImRlbGV0ZSIsImZpZWxkcyIsIm5hbWUiLCJ0eXBlIiwicmVsYXRpb25UbyIsImNvbGxlY3Rpb25zIiwiZmlsdGVyIiwiY29sbGVjdGlvbkNvbmZpZyIsImF1dGgiLCJtYXAiLCJyZXF1aXJlZCIsImhvb2tzIiwiYmVmb3JlVmFsaWRhdGUiLCJ2YWx1ZSIsImNvbGxlY3Rpb24iLCJpbmRleGVzIiwia2V5Iiwib3B0aW9ucyIsInVuaXF1ZSIsImVuZHBvaW50cyIsIm1ldGhvZCIsInBhdGgiLCJoYW5kbGVyIl0sIm1hcHBpbmdzIjoiQUFFQSxPQUFPQSxhQUFhLDRCQUE0QjtBQUNoRCxPQUFPQyxZQUFZLDJCQUEyQjtBQUM5QyxPQUFPQyxtQkFBbUIsMkJBQTJCO0FBRXJELElBQU1DLG1CQUEyQjtRQUFHQyxZQUFBQTtRQUV4QkEsV0FBQUE7V0FGbUM7UUFDN0MsY0FBYztZQUNaQyxNQUFNLEdBQUVELE9BQUFBLGlCQUFBQSw0QkFBQUEsWUFBQUEsS0FBS0UsSUFBSSxjQUFURixnQ0FBQUEsVUFBV0csRUFBRTtRQUN2QjtJQUNGOztBQUVBLElBQU1DLDJCQUEyQixTQUFDQztXQUFzQztRQUN0RUMsTUFBTTtRQUNOQyxPQUFPO1lBQ0xDLFFBQVE7UUFDVjtRQUNBQyxRQUFRO1lBQ05DLE1BQU1YO1lBQ05ZLFFBQVFaO1FBQ1Y7UUFDQWEsUUFBUTtZQUNOO2dCQUNFQyxNQUFNO2dCQUNOQyxNQUFNO2dCQUNOQyxZQUFZVixPQUFPVyxXQUFXLENBQzNCQyxNQUFNLENBQUMsU0FBQ0M7MkJBQXFCQSxpQkFBaUJDLElBQUk7bUJBQ2xEQyxHQUFHLENBQUMsU0FBQ0Y7MkJBQXFCQSxpQkFBaUJaLElBQUk7O2dCQUNsRGUsVUFBVTtnQkFDVkMsT0FBTztvQkFDTEMsZ0JBQWdCO3dCQUNiO2dDQUFHdkIsWUFBQUE7Z0NBQ0dBLE1BSUlBLE9BQ0tBOzRCQUxkLElBQUksR0FBQ0EsT0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFLRSxJQUFJLEdBQUU7Z0NBQ2QsT0FBTzs0QkFDVDs0QkFDQSxPQUFPO2dDQUNMc0IsS0FBSyxHQUFFeEIsUUFBQUEsaUJBQUFBLDRCQUFBQSxNQUFLRSxJQUFJLENBQUNDLEVBQUU7Z0NBQ25CWSxVQUFVLEdBQUVmLFFBQUFBLGlCQUFBQSw0QkFBQUEsTUFBS0UsSUFBSSxDQUFDdUIsVUFBVTs0QkFDbEM7d0JBQ0Y7cUJBQ0Q7Z0JBQ0g7WUFDRjtZQUNBO2dCQUNFWixNQUFNO2dCQUNOQyxNQUFNO1lBQ1I7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1NBQ0Q7UUFDRFksU0FBUztZQUNQO2dCQUNFZCxRQUFRO29CQUNOLGNBQWM7b0JBQ2QsbUJBQW1CO29CQUNuQmUsS0FBSztnQkFDUDtnQkFDQUMsU0FBUztvQkFDUEMsUUFBUTtnQkFDVjtZQUNGO1NBQ0Q7UUFDREMsV0FBVztZQUNUO2dCQUNFQyxRQUFRO2dCQUNSQyxNQUFNO2dCQUNOQyxTQUFTckM7WUFDWDtZQUNBO2dCQUNFbUMsUUFBUTtnQkFDUkMsTUFBTTtnQkFDTkMsU0FBU25DO1lBQ1g7WUFDQTtnQkFDRWlDLFFBQVE7Z0JBQ1JDLE1BQU07Z0JBQ05DLFNBQVNwQztZQUNYO1NBQ0Q7SUFDSDs7QUFFQSxlQUFlTyx5QkFBeUIifQ==