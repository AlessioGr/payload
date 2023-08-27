"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _findOne = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/findOne"));
var _update = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/update"));
var _delete = /*#__PURE__*/ _interop_require_default(require("./requestHandlers/delete"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
                handler: _findOne.default
            },
            {
                method: "delete",
                path: "/:key",
                handler: _delete.default
            },
            {
                method: "post",
                path: "/:key",
                handler: _update.default
            }
        ]
    };
};
var _default = getPreferencesCollection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9wcmVmZXJlbmNlc0NvbGxlY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBBY2Nlc3MsIENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZmluZE9uZSBmcm9tICcuL3JlcXVlc3RIYW5kbGVycy9maW5kT25lJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi9yZXF1ZXN0SGFuZGxlcnMvdXBkYXRlJztcbmltcG9ydCBkZWxldGVIYW5kbGVyIGZyb20gJy4vcmVxdWVzdEhhbmRsZXJzL2RlbGV0ZSc7XG5cbmNvbnN0IHByZWZlcmVuY2VBY2Nlc3M6IEFjY2VzcyA9ICh7IHJlcSB9KSA9PiAoe1xuICAndXNlci52YWx1ZSc6IHtcbiAgICBlcXVhbHM6IHJlcT8udXNlcj8uaWQsXG4gIH0sXG59KTtcblxuY29uc3QgZ2V0UHJlZmVyZW5jZXNDb2xsZWN0aW9uID0gKGNvbmZpZzogQ29uZmlnKTogQ29sbGVjdGlvbkNvbmZpZyA9PiAoe1xuICBzbHVnOiAncGF5bG9hZC1wcmVmZXJlbmNlcycsXG4gIGFkbWluOiB7XG4gICAgaGlkZGVuOiB0cnVlLFxuICB9LFxuICBhY2Nlc3M6IHtcbiAgICByZWFkOiBwcmVmZXJlbmNlQWNjZXNzLFxuICAgIGRlbGV0ZTogcHJlZmVyZW5jZUFjY2VzcyxcbiAgfSxcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ3VzZXInLFxuICAgICAgdHlwZTogJ3JlbGF0aW9uc2hpcCcsXG4gICAgICByZWxhdGlvblRvOiBjb25maWcuY29sbGVjdGlvbnNcbiAgICAgICAgLmZpbHRlcigoY29sbGVjdGlvbkNvbmZpZykgPT4gY29sbGVjdGlvbkNvbmZpZy5hdXRoKVxuICAgICAgICAubWFwKChjb2xsZWN0aW9uQ29uZmlnKSA9PiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcpLFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBob29rczoge1xuICAgICAgICBiZWZvcmVWYWxpZGF0ZTogW1xuICAgICAgICAgICgoeyByZXEgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXE/LnVzZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB2YWx1ZTogcmVxPy51c2VyLmlkLFxuICAgICAgICAgICAgICByZWxhdGlvblRvOiByZXE/LnVzZXIuY29sbGVjdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2tleScsXG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAndmFsdWUnLFxuICAgICAgdHlwZTogJ2pzb24nLFxuICAgIH0sXG4gIF0sXG4gIGluZGV4ZXM6IFtcbiAgICB7XG4gICAgICBmaWVsZHM6IHtcbiAgICAgICAgJ3VzZXIudmFsdWUnOiAxLFxuICAgICAgICAndXNlci5yZWxhdGlvblRvJzogMSxcbiAgICAgICAga2V5OiAxLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBlbmRwb2ludHM6IFtcbiAgICB7XG4gICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgcGF0aDogJy86a2V5JyxcbiAgICAgIGhhbmRsZXI6IGZpbmRPbmUsXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgcGF0aDogJy86a2V5JyxcbiAgICAgIGhhbmRsZXI6IGRlbGV0ZUhhbmRsZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHBhdGg6ICcvOmtleScsXG4gICAgICBoYW5kbGVyOiB1cGRhdGUsXG4gICAgfSxcbiAgXSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcmVmZXJlbmNlc0NvbGxlY3Rpb247XG4iXSwibmFtZXMiOlsicHJlZmVyZW5jZUFjY2VzcyIsInJlcSIsImVxdWFscyIsInVzZXIiLCJpZCIsImdldFByZWZlcmVuY2VzQ29sbGVjdGlvbiIsImNvbmZpZyIsInNsdWciLCJhZG1pbiIsImhpZGRlbiIsImFjY2VzcyIsInJlYWQiLCJkZWxldGUiLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsInJlbGF0aW9uVG8iLCJjb2xsZWN0aW9ucyIsImZpbHRlciIsImNvbGxlY3Rpb25Db25maWciLCJhdXRoIiwibWFwIiwicmVxdWlyZWQiLCJob29rcyIsImJlZm9yZVZhbGlkYXRlIiwidmFsdWUiLCJjb2xsZWN0aW9uIiwiaW5kZXhlcyIsImtleSIsIm9wdGlvbnMiLCJ1bmlxdWUiLCJlbmRwb2ludHMiLCJtZXRob2QiLCJwYXRoIiwiaGFuZGxlciIsImZpbmRPbmUiLCJkZWxldGVIYW5kbGVyIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7OytCQW1GQTs7O2VBQUE7Ozs4REFqRm9COzZEQUNEOzZEQUNPOzs7Ozs7QUFFMUIsSUFBTUEsbUJBQTJCO1FBQUdDLFlBQUFBO1FBRXhCQSxXQUFBQTtXQUZtQztRQUM3QyxjQUFjO1lBQ1pDLE1BQU0sR0FBRUQsT0FBQUEsaUJBQUFBLDRCQUFBQSxZQUFBQSxLQUFLRSxJQUFJLGNBQVRGLGdDQUFBQSxVQUFXRyxFQUFFO1FBQ3ZCO0lBQ0Y7O0FBRUEsSUFBTUMsMkJBQTJCLFNBQUNDO1dBQXNDO1FBQ3RFQyxNQUFNO1FBQ05DLE9BQU87WUFDTEMsUUFBUTtRQUNWO1FBQ0FDLFFBQVE7WUFDTkMsTUFBTVg7WUFDTlksUUFBUVo7UUFDVjtRQUNBYSxRQUFRO1lBQ047Z0JBQ0VDLE1BQU07Z0JBQ05DLE1BQU07Z0JBQ05DLFlBQVlWLE9BQU9XLFdBQVcsQ0FDM0JDLE1BQU0sQ0FBQyxTQUFDQzsyQkFBcUJBLGlCQUFpQkMsSUFBSTttQkFDbERDLEdBQUcsQ0FBQyxTQUFDRjsyQkFBcUJBLGlCQUFpQlosSUFBSTs7Z0JBQ2xEZSxVQUFVO2dCQUNWQyxPQUFPO29CQUNMQyxnQkFBZ0I7d0JBQ2I7Z0NBQUd2QixZQUFBQTtnQ0FDR0EsTUFJSUEsT0FDS0E7NEJBTGQsSUFBSSxHQUFDQSxPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtFLElBQUksR0FBRTtnQ0FDZCxPQUFPOzRCQUNUOzRCQUNBLE9BQU87Z0NBQ0xzQixLQUFLLEdBQUV4QixRQUFBQSxpQkFBQUEsNEJBQUFBLE1BQUtFLElBQUksQ0FBQ0MsRUFBRTtnQ0FDbkJZLFVBQVUsR0FBRWYsUUFBQUEsaUJBQUFBLDRCQUFBQSxNQUFLRSxJQUFJLENBQUN1QixVQUFVOzRCQUNsQzt3QkFDRjtxQkFDRDtnQkFDSDtZQUNGO1lBQ0E7Z0JBQ0VaLE1BQU07Z0JBQ05DLE1BQU07WUFDUjtZQUNBO2dCQUNFRCxNQUFNO2dCQUNOQyxNQUFNO1lBQ1I7U0FDRDtRQUNEWSxTQUFTO1lBQ1A7Z0JBQ0VkLFFBQVE7b0JBQ04sY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CZSxLQUFLO2dCQUNQO2dCQUNBQyxTQUFTO29CQUNQQyxRQUFRO2dCQUNWO1lBQ0Y7U0FDRDtRQUNEQyxXQUFXO1lBQ1Q7Z0JBQ0VDLFFBQVE7Z0JBQ1JDLE1BQU07Z0JBQ05DLFNBQVNDLGdCQUFPO1lBQ2xCO1lBQ0E7Z0JBQ0VILFFBQVE7Z0JBQ1JDLE1BQU07Z0JBQ05DLFNBQVNFLGVBQWE7WUFDeEI7WUFDQTtnQkFDRUosUUFBUTtnQkFDUkMsTUFBTTtnQkFDTkMsU0FBU0csZUFBTTtZQUNqQjtTQUNEO0lBQ0g7O0lBRUEsV0FBZWhDIn0=