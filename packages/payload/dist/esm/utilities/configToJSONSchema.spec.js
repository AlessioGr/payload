import { sanitizeConfig } from "../config/sanitize";
import { configToJSONSchema } from "./configToJSONSchema";
describe("configToJSONSchema", function() {
    it("should handle optional arrays with required fields", function() {
        var _schema_definitions, _schema;
        var config = {
            collections: [
                {
                    slug: "test",
                    fields: [
                        {
                            name: "someRequiredField",
                            type: "array",
                            fields: [
                                {
                                    name: "someRequiredField",
                                    type: "text",
                                    required: true
                                }
                            ]
                        }
                    ],
                    timestamps: false
                }
            ]
        };
        var sanitizedConfig = sanitizeConfig(config);
        var schema = configToJSONSchema(sanitizedConfig);
        expect((_schema = schema) === null || _schema === void 0 ? void 0 : (_schema_definitions = _schema.definitions) === null || _schema_definitions === void 0 ? void 0 : _schema_definitions.test).toStrictEqual({
            title: "Test",
            type: "object",
            additionalProperties: false,
            properties: {
                id: {
                    type: "string"
                },
                someRequiredField: {
                    type: "array",
                    items: {
                        type: "object",
                        additionalProperties: false,
                        properties: {
                            someRequiredField: {
                                type: "string"
                            },
                            id: {
                                type: "string"
                            }
                        },
                        required: [
                            "someRequiredField"
                        ]
                    }
                }
            },
            required: [
                "id"
            ]
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvY29uZmlnVG9KU09OU2NoZW1hLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2FuaXRpemVDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2FuaXRpemUnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGNvbmZpZ1RvSlNPTlNjaGVtYSB9IGZyb20gJy4vY29uZmlnVG9KU09OU2NoZW1hJztcblxuZGVzY3JpYmUoJ2NvbmZpZ1RvSlNPTlNjaGVtYScsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBoYW5kbGUgb3B0aW9uYWwgYXJyYXlzIHdpdGggcmVxdWlyZWQgZmllbGRzJywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZzogQ29uZmlnID0ge1xuICAgICAgY29sbGVjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNsdWc6ICd0ZXN0JyxcbiAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ3NvbWVSZXF1aXJlZEZpZWxkJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3NvbWVSZXF1aXJlZEZpZWxkJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRDb25maWcgPSBzYW5pdGl6ZUNvbmZpZyhjb25maWcpO1xuICAgIGNvbnN0IHNjaGVtYSA9IGNvbmZpZ1RvSlNPTlNjaGVtYShzYW5pdGl6ZWRDb25maWcpO1xuICAgIGV4cGVjdChzY2hlbWE/LmRlZmluaXRpb25zPy50ZXN0KS50b1N0cmljdEVxdWFsKHtcbiAgICAgIHRpdGxlOiAnVGVzdCcsXG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAgc29tZVJlcXVpcmVkRmllbGQ6IHtcbiAgICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiBmYWxzZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgc29tZVJlcXVpcmVkRmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXF1aXJlZDogWydzb21lUmVxdWlyZWRGaWVsZCddLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVxdWlyZWQ6IFsnaWQnXSxcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJzYW5pdGl6ZUNvbmZpZyIsImNvbmZpZ1RvSlNPTlNjaGVtYSIsImRlc2NyaWJlIiwiaXQiLCJzY2hlbWEiLCJjb25maWciLCJjb2xsZWN0aW9ucyIsInNsdWciLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsInJlcXVpcmVkIiwidGltZXN0YW1wcyIsInNhbml0aXplZENvbmZpZyIsImV4cGVjdCIsImRlZmluaXRpb25zIiwidGVzdCIsInRvU3RyaWN0RXF1YWwiLCJ0aXRsZSIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImlkIiwic29tZVJlcXVpcmVkRmllbGQiLCJpdGVtcyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsY0FBYyxRQUFRLHFCQUFxQjtBQUVwRCxTQUFTQyxrQkFBa0IsUUFBUSx1QkFBdUI7QUFFMURDLFNBQVMsc0JBQXNCO0lBQzdCQyxHQUFHLHNEQUFzRDtZQXlCaERDLHFCQUFBQTtRQXhCUCxJQUFNQyxTQUFpQjtZQUNyQkMsYUFBYTtnQkFDWDtvQkFDRUMsTUFBTTtvQkFDTkMsUUFBUTt3QkFDTjs0QkFDRUMsTUFBTTs0QkFDTkMsTUFBTTs0QkFDTkYsUUFBUTtnQ0FDTjtvQ0FDRUMsTUFBTTtvQ0FDTkMsTUFBTTtvQ0FDTkMsVUFBVTtnQ0FDWjs2QkFDRDt3QkFDSDtxQkFDRDtvQkFDREMsWUFBWTtnQkFDZDthQUNEO1FBQ0g7UUFFQSxJQUFNQyxrQkFBa0JiLGVBQWVLO1FBQ3ZDLElBQU1ELFNBQVNILG1CQUFtQlk7UUFDbENDLFFBQU9WLFVBQUFBLG9CQUFBQSwrQkFBQUEsc0JBQUFBLFFBQVFXLFdBQVcsY0FBbkJYLDBDQUFBQSxvQkFBcUJZLElBQUksRUFBRUMsYUFBYSxDQUFDO1lBQzlDQyxPQUFPO1lBQ1BSLE1BQU07WUFDTlMsc0JBQXNCO1lBQ3RCQyxZQUFZO2dCQUNWQyxJQUFJO29CQUNGWCxNQUFNO2dCQUNSO2dCQUNBWSxtQkFBbUI7b0JBQ2pCWixNQUFNO29CQUNOYSxPQUFPO3dCQUNMYixNQUFNO3dCQUNOUyxzQkFBc0I7d0JBQ3RCQyxZQUFZOzRCQUNWRSxtQkFBbUI7Z0NBQ2pCWixNQUFNOzRCQUNSOzRCQUNBVyxJQUFJO2dDQUNGWCxNQUFNOzRCQUNSO3dCQUNGO3dCQUNBQyxVQUFVOzRCQUFDO3lCQUFvQjtvQkFDakM7Z0JBQ0Y7WUFDRjtZQUNBQSxVQUFVO2dCQUFDO2FBQUs7UUFDbEI7SUFDRjtBQUNGIn0=