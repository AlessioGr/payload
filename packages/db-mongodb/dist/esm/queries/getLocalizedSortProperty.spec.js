import { sanitizeConfig } from "payload/config";
import { getLocalizedSortProperty } from "./getLocalizedSortProperty";
var config = {
    localization: {
        locales: [
            "en",
            "es"
        ]
    }
};
describe("get localized sort property", function() {
    it("passes through a non-localized sort property", function() {
        var result = getLocalizedSortProperty({
            segments: [
                "title"
            ],
            config: sanitizeConfig(config),
            fields: [
                {
                    name: "title",
                    type: "text"
                }
            ],
            locale: "en"
        });
        expect(result).toStrictEqual("title");
    });
    it("properly localizes an un-localized sort property", function() {
        var result = getLocalizedSortProperty({
            segments: [
                "title"
            ],
            config: sanitizeConfig(config),
            fields: [
                {
                    name: "title",
                    type: "text",
                    localized: true
                }
            ],
            locale: "en"
        });
        expect(result).toStrictEqual("title.en");
    });
    it("keeps specifically asked-for localized sort properties", function() {
        var result = getLocalizedSortProperty({
            segments: [
                "title",
                "es"
            ],
            config: sanitizeConfig(config),
            fields: [
                {
                    name: "title",
                    type: "text",
                    localized: true
                }
            ],
            locale: "en"
        });
        expect(result).toStrictEqual("title.es");
    });
    it("properly localizes nested sort properties", function() {
        var result = getLocalizedSortProperty({
            segments: [
                "group",
                "title"
            ],
            config: sanitizeConfig(config),
            fields: [
                {
                    name: "group",
                    type: "group",
                    fields: [
                        {
                            name: "title",
                            type: "text",
                            localized: true
                        }
                    ]
                }
            ],
            locale: "en"
        });
        expect(result).toStrictEqual("group.title.en");
    });
    it("keeps requested locale with nested sort properties", function() {
        var result = getLocalizedSortProperty({
            segments: [
                "group",
                "title",
                "es"
            ],
            config: sanitizeConfig(config),
            fields: [
                {
                    name: "group",
                    type: "group",
                    fields: [
                        {
                            name: "title",
                            type: "text",
                            localized: true
                        }
                    ]
                }
            ],
            locale: "en"
        });
        expect(result).toStrictEqual("group.title.es");
    });
    it("properly localizes field within row", function() {
        var result = getLocalizedSortProperty({
            segments: [
                "title"
            ],
            config: sanitizeConfig(config),
            fields: [
                {
                    type: "row",
                    fields: [
                        {
                            name: "title",
                            type: "text",
                            localized: true
                        }
                    ]
                }
            ],
            locale: "en"
        });
        expect(result).toStrictEqual("title.en");
    });
    it("properly localizes field within named tab", function() {
        var result = getLocalizedSortProperty({
            segments: [
                "tab",
                "title"
            ],
            config: sanitizeConfig(config),
            fields: [
                {
                    type: "tabs",
                    tabs: [
                        {
                            name: "tab",
                            fields: [
                                {
                                    name: "title",
                                    type: "text",
                                    localized: true
                                }
                            ]
                        }
                    ]
                }
            ],
            locale: "en"
        });
        expect(result).toStrictEqual("tab.title.en");
    });
    it("properly localizes field within unnamed tab", function() {
        var result = getLocalizedSortProperty({
            segments: [
                "title"
            ],
            config: sanitizeConfig(config),
            fields: [
                {
                    type: "tabs",
                    tabs: [
                        {
                            label: "Tab",
                            fields: [
                                {
                                    name: "title",
                                    type: "text",
                                    localized: true
                                }
                            ]
                        }
                    ]
                }
            ],
            locale: "en"
        });
        expect(result).toStrictEqual("title.en");
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL2dldExvY2FsaXplZFNvcnRQcm9wZXJ0eS5zcGVjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNhbml0aXplQ29uZmlnIH0gZnJvbSAncGF5bG9hZC9jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAncGF5bG9hZC9jb25maWcnO1xuaW1wb3J0IHsgZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5IH0gZnJvbSAnLi9nZXRMb2NhbGl6ZWRTb3J0UHJvcGVydHknO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGxvY2FsaXphdGlvbjoge1xuICAgIGxvY2FsZXM6IFsnZW4nLCAnZXMnXSxcbiAgfSxcbn0gYXMgQ29uZmlnO1xuXG5kZXNjcmliZSgnZ2V0IGxvY2FsaXplZCBzb3J0IHByb3BlcnR5JywgKCkgPT4ge1xuICBpdCgncGFzc2VzIHRocm91Z2ggYSBub24tbG9jYWxpemVkIHNvcnQgcHJvcGVydHknLCAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5KHtcbiAgICAgIHNlZ21lbnRzOiBbJ3RpdGxlJ10sXG4gICAgICBjb25maWc6IHNhbml0aXplQ29uZmlnKGNvbmZpZyksXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0aXRsZScsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGxvY2FsZTogJ2VuJyxcbiAgICB9KTtcblxuICAgIGV4cGVjdChyZXN1bHQpLnRvU3RyaWN0RXF1YWwoJ3RpdGxlJyk7XG4gIH0pO1xuXG4gIGl0KCdwcm9wZXJseSBsb2NhbGl6ZXMgYW4gdW4tbG9jYWxpemVkIHNvcnQgcHJvcGVydHknLCAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5KHtcbiAgICAgIHNlZ21lbnRzOiBbJ3RpdGxlJ10sXG4gICAgICBjb25maWc6IHNhbml0aXplQ29uZmlnKGNvbmZpZyksXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICd0aXRsZScsXG4gICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIGxvY2FsaXplZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBsb2NhbGU6ICdlbicsXG4gICAgfSk7XG5cbiAgICBleHBlY3QocmVzdWx0KS50b1N0cmljdEVxdWFsKCd0aXRsZS5lbicpO1xuICB9KTtcblxuICBpdCgna2VlcHMgc3BlY2lmaWNhbGx5IGFza2VkLWZvciBsb2NhbGl6ZWQgc29ydCBwcm9wZXJ0aWVzJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGdldExvY2FsaXplZFNvcnRQcm9wZXJ0eSh7XG4gICAgICBzZWdtZW50czogWyd0aXRsZScsICdlcyddLFxuICAgICAgY29uZmlnOiBzYW5pdGl6ZUNvbmZpZyhjb25maWcpLFxuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAndGl0bGUnLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBsb2NhbGl6ZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbG9jYWxlOiAnZW4nLFxuICAgIH0pO1xuXG4gICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCgndGl0bGUuZXMnKTtcbiAgfSk7XG5cbiAgaXQoJ3Byb3Blcmx5IGxvY2FsaXplcyBuZXN0ZWQgc29ydCBwcm9wZXJ0aWVzJywgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGdldExvY2FsaXplZFNvcnRQcm9wZXJ0eSh7XG4gICAgICBzZWdtZW50czogWydncm91cCcsICd0aXRsZSddLFxuICAgICAgY29uZmlnOiBzYW5pdGl6ZUNvbmZpZyhjb25maWcpLFxuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZ3JvdXAnLFxuICAgICAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgbG9jYWxpemVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGxvY2FsZTogJ2VuJyxcbiAgICB9KTtcblxuICAgIGV4cGVjdChyZXN1bHQpLnRvU3RyaWN0RXF1YWwoJ2dyb3VwLnRpdGxlLmVuJyk7XG4gIH0pO1xuXG4gIGl0KCdrZWVwcyByZXF1ZXN0ZWQgbG9jYWxlIHdpdGggbmVzdGVkIHNvcnQgcHJvcGVydGllcycsICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBnZXRMb2NhbGl6ZWRTb3J0UHJvcGVydHkoe1xuICAgICAgc2VnbWVudHM6IFsnZ3JvdXAnLCAndGl0bGUnLCAnZXMnXSxcbiAgICAgIGNvbmZpZzogc2FuaXRpemVDb25maWcoY29uZmlnKSxcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2dyb3VwJyxcbiAgICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIGxvY2FsaXplZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBsb2NhbGU6ICdlbicsXG4gICAgfSk7XG5cbiAgICBleHBlY3QocmVzdWx0KS50b1N0cmljdEVxdWFsKCdncm91cC50aXRsZS5lcycpO1xuICB9KTtcblxuICBpdCgncHJvcGVybHkgbG9jYWxpemVzIGZpZWxkIHdpdGhpbiByb3cnLCAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5KHtcbiAgICAgIHNlZ21lbnRzOiBbJ3RpdGxlJ10sXG4gICAgICBjb25maWc6IHNhbml0aXplQ29uZmlnKGNvbmZpZyksXG4gICAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdyb3cnLFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgIGxvY2FsaXplZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBsb2NhbGU6ICdlbicsXG4gICAgfSk7XG5cbiAgICBleHBlY3QocmVzdWx0KS50b1N0cmljdEVxdWFsKCd0aXRsZS5lbicpO1xuICB9KTtcblxuICBpdCgncHJvcGVybHkgbG9jYWxpemVzIGZpZWxkIHdpdGhpbiBuYW1lZCB0YWInLCAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5KHtcbiAgICAgIHNlZ21lbnRzOiBbJ3RhYicsICd0aXRsZSddLFxuICAgICAgY29uZmlnOiBzYW5pdGl6ZUNvbmZpZyhjb25maWcpLFxuICAgICAgZmllbGRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAndGFicycsXG4gICAgICAgICAgdGFiczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAndGFiJyxcbiAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgIGxvY2FsaXplZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGxvY2FsZTogJ2VuJyxcbiAgICB9KTtcblxuICAgIGV4cGVjdChyZXN1bHQpLnRvU3RyaWN0RXF1YWwoJ3RhYi50aXRsZS5lbicpO1xuICB9KTtcblxuICBpdCgncHJvcGVybHkgbG9jYWxpemVzIGZpZWxkIHdpdGhpbiB1bm5hbWVkIHRhYicsICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBnZXRMb2NhbGl6ZWRTb3J0UHJvcGVydHkoe1xuICAgICAgc2VnbWVudHM6IFsndGl0bGUnXSxcbiAgICAgIGNvbmZpZzogc2FuaXRpemVDb25maWcoY29uZmlnKSxcbiAgICAgIGZpZWxkczogW1xuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ3RhYnMnLFxuICAgICAgICAgIHRhYnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdUYWInLFxuICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgbG9jYWxpemVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbG9jYWxlOiAnZW4nLFxuICAgIH0pO1xuXG4gICAgZXhwZWN0KHJlc3VsdCkudG9TdHJpY3RFcXVhbCgndGl0bGUuZW4nKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJzYW5pdGl6ZUNvbmZpZyIsImdldExvY2FsaXplZFNvcnRQcm9wZXJ0eSIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsImxvY2FsZXMiLCJkZXNjcmliZSIsIml0IiwicmVzdWx0Iiwic2VnbWVudHMiLCJmaWVsZHMiLCJuYW1lIiwidHlwZSIsImxvY2FsZSIsImV4cGVjdCIsInRvU3RyaWN0RXF1YWwiLCJsb2NhbGl6ZWQiLCJ0YWJzIiwibGFiZWwiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGNBQWMsUUFBUSxpQkFBaUI7QUFFaEQsU0FBU0Msd0JBQXdCLFFBQVEsNkJBQTZCO0FBRXRFLElBQU1DLFNBQVM7SUFDYkMsY0FBYztRQUNaQyxTQUFTO1lBQUM7WUFBTTtTQUFLO0lBQ3ZCO0FBQ0Y7QUFFQUMsU0FBUywrQkFBK0I7SUFDdENDLEdBQUcsZ0RBQWdEO1FBQ2pELElBQU1DLFNBQVNOLHlCQUF5QjtZQUN0Q08sVUFBVTtnQkFBQzthQUFRO1lBQ25CTixRQUFRRixlQUFlRTtZQUN2Qk8sUUFBUTtnQkFDTjtvQkFDRUMsTUFBTTtvQkFDTkMsTUFBTTtnQkFDUjthQUNEO1lBQ0RDLFFBQVE7UUFDVjtRQUVBQyxPQUFPTixRQUFRTyxhQUFhLENBQUM7SUFDL0I7SUFFQVIsR0FBRyxvREFBb0Q7UUFDckQsSUFBTUMsU0FBU04seUJBQXlCO1lBQ3RDTyxVQUFVO2dCQUFDO2FBQVE7WUFDbkJOLFFBQVFGLGVBQWVFO1lBQ3ZCTyxRQUFRO2dCQUNOO29CQUNFQyxNQUFNO29CQUNOQyxNQUFNO29CQUNOSSxXQUFXO2dCQUNiO2FBQ0Q7WUFDREgsUUFBUTtRQUNWO1FBRUFDLE9BQU9OLFFBQVFPLGFBQWEsQ0FBQztJQUMvQjtJQUVBUixHQUFHLDBEQUEwRDtRQUMzRCxJQUFNQyxTQUFTTix5QkFBeUI7WUFDdENPLFVBQVU7Z0JBQUM7Z0JBQVM7YUFBSztZQUN6Qk4sUUFBUUYsZUFBZUU7WUFDdkJPLFFBQVE7Z0JBQ047b0JBQ0VDLE1BQU07b0JBQ05DLE1BQU07b0JBQ05JLFdBQVc7Z0JBQ2I7YUFDRDtZQUNESCxRQUFRO1FBQ1Y7UUFFQUMsT0FBT04sUUFBUU8sYUFBYSxDQUFDO0lBQy9CO0lBRUFSLEdBQUcsNkNBQTZDO1FBQzlDLElBQU1DLFNBQVNOLHlCQUF5QjtZQUN0Q08sVUFBVTtnQkFBQztnQkFBUzthQUFRO1lBQzVCTixRQUFRRixlQUFlRTtZQUN2Qk8sUUFBUTtnQkFDTjtvQkFDRUMsTUFBTTtvQkFDTkMsTUFBTTtvQkFDTkYsUUFBUTt3QkFDTjs0QkFDRUMsTUFBTTs0QkFDTkMsTUFBTTs0QkFDTkksV0FBVzt3QkFDYjtxQkFDRDtnQkFDSDthQUNEO1lBQ0RILFFBQVE7UUFDVjtRQUVBQyxPQUFPTixRQUFRTyxhQUFhLENBQUM7SUFDL0I7SUFFQVIsR0FBRyxzREFBc0Q7UUFDdkQsSUFBTUMsU0FBU04seUJBQXlCO1lBQ3RDTyxVQUFVO2dCQUFDO2dCQUFTO2dCQUFTO2FBQUs7WUFDbENOLFFBQVFGLGVBQWVFO1lBQ3ZCTyxRQUFRO2dCQUNOO29CQUNFQyxNQUFNO29CQUNOQyxNQUFNO29CQUNORixRQUFRO3dCQUNOOzRCQUNFQyxNQUFNOzRCQUNOQyxNQUFNOzRCQUNOSSxXQUFXO3dCQUNiO3FCQUNEO2dCQUNIO2FBQ0Q7WUFDREgsUUFBUTtRQUNWO1FBRUFDLE9BQU9OLFFBQVFPLGFBQWEsQ0FBQztJQUMvQjtJQUVBUixHQUFHLHVDQUF1QztRQUN4QyxJQUFNQyxTQUFTTix5QkFBeUI7WUFDdENPLFVBQVU7Z0JBQUM7YUFBUTtZQUNuQk4sUUFBUUYsZUFBZUU7WUFDdkJPLFFBQVE7Z0JBQ047b0JBQ0VFLE1BQU07b0JBQ05GLFFBQVE7d0JBQ047NEJBQ0VDLE1BQU07NEJBQ05DLE1BQU07NEJBQ05JLFdBQVc7d0JBQ2I7cUJBQ0Q7Z0JBQ0g7YUFDRDtZQUNESCxRQUFRO1FBQ1Y7UUFFQUMsT0FBT04sUUFBUU8sYUFBYSxDQUFDO0lBQy9CO0lBRUFSLEdBQUcsNkNBQTZDO1FBQzlDLElBQU1DLFNBQVNOLHlCQUF5QjtZQUN0Q08sVUFBVTtnQkFBQztnQkFBTzthQUFRO1lBQzFCTixRQUFRRixlQUFlRTtZQUN2Qk8sUUFBUTtnQkFDTjtvQkFDRUUsTUFBTTtvQkFDTkssTUFBTTt3QkFDSjs0QkFDRU4sTUFBTTs0QkFDTkQsUUFBUTtnQ0FDTjtvQ0FDRUMsTUFBTTtvQ0FDTkMsTUFBTTtvQ0FDTkksV0FBVztnQ0FDYjs2QkFDRDt3QkFDSDtxQkFDRDtnQkFDSDthQUNEO1lBQ0RILFFBQVE7UUFDVjtRQUVBQyxPQUFPTixRQUFRTyxhQUFhLENBQUM7SUFDL0I7SUFFQVIsR0FBRywrQ0FBK0M7UUFDaEQsSUFBTUMsU0FBU04seUJBQXlCO1lBQ3RDTyxVQUFVO2dCQUFDO2FBQVE7WUFDbkJOLFFBQVFGLGVBQWVFO1lBQ3ZCTyxRQUFRO2dCQUNOO29CQUNFRSxNQUFNO29CQUNOSyxNQUFNO3dCQUNKOzRCQUNFQyxPQUFPOzRCQUNQUixRQUFRO2dDQUNOO29DQUNFQyxNQUFNO29DQUNOQyxNQUFNO29DQUNOSSxXQUFXO2dDQUNiOzZCQUNEO3dCQUNIO3FCQUNEO2dCQUNIO2FBQ0Q7WUFDREgsUUFBUTtRQUNWO1FBRUFDLE9BQU9OLFFBQVFPLGFBQWEsQ0FBQztJQUMvQjtBQUNGIn0=