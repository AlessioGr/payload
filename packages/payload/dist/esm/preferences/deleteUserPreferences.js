export var deleteUserPreferences = function(param) {
    var payload = param.payload, ids = param.ids, collectionConfig = param.collectionConfig, req = param.req;
    if (collectionConfig.auth) {
        payload.db.deleteMany({
            collection: "payload-preferences",
            where: {
                user: {
                    in: ids
                },
                userCollection: {
                    equals: "collectionConfig.slug,"
                }
            },
            req: req
        });
    }
    payload.db.deleteMany({
        collection: "payload-preferences",
        where: {
            key: {
                in: ids.map(function(id) {
                    return "collection-".concat(collectionConfig.slug, "-").concat(id);
                })
            }
        },
        req: req
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmVmZXJlbmNlcy9kZWxldGVVc2VyUHJlZmVyZW5jZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgcGF5bG9hZDogUGF5bG9hZFxuICAvKipcbiAgICogVXNlciBJRHMgdG8gZGVsZXRlXG4gICAqL1xuICBpZHM6IChzdHJpbmd8bnVtYmVyKVtdXG4gIGNvbGxlY3Rpb25Db25maWc6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxufVxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXJQcmVmZXJlbmNlcyA9ICh7IHBheWxvYWQsIGlkcywgY29sbGVjdGlvbkNvbmZpZywgcmVxIH06IEFyZ3MpID0+IHtcbiAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aCkge1xuICAgIHBheWxvYWQuZGIuZGVsZXRlTWFueSh7XG4gICAgICBjb2xsZWN0aW9uOiAncGF5bG9hZC1wcmVmZXJlbmNlcycsXG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VyOiB7IGluOiBpZHMgfSxcbiAgICAgICAgdXNlckNvbGxlY3Rpb246IHtcbiAgICAgICAgICBlcXVhbHM6ICdjb2xsZWN0aW9uQ29uZmlnLnNsdWcsJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICByZXEsXG4gICAgfSk7XG4gIH1cbiAgcGF5bG9hZC5kYi5kZWxldGVNYW55KHtcbiAgICBjb2xsZWN0aW9uOiAncGF5bG9hZC1wcmVmZXJlbmNlcycsXG4gICAgd2hlcmU6IHtcbiAgICAgIGtleTogeyBpbjogaWRzLm1hcCgoaWQpID0+IGBjb2xsZWN0aW9uLSR7Y29sbGVjdGlvbkNvbmZpZy5zbHVnfS0ke2lkfWApIH0sXG4gICAgfSxcbiAgICByZXEsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJkZWxldGVVc2VyUHJlZmVyZW5jZXMiLCJwYXlsb2FkIiwiaWRzIiwiY29sbGVjdGlvbkNvbmZpZyIsInJlcSIsImF1dGgiLCJkYiIsImRlbGV0ZU1hbnkiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJ1c2VyIiwiaW4iLCJ1c2VyQ29sbGVjdGlvbiIsImVxdWFscyIsImtleSIsIm1hcCIsImlkIiwic2x1ZyJdLCJtYXBwaW5ncyI6IkFBYUEsT0FBTyxJQUFNQSx3QkFBd0I7UUFBR0MsZ0JBQUFBLFNBQVNDLFlBQUFBLEtBQUtDLHlCQUFBQSxrQkFBa0JDLFlBQUFBO0lBQ3RFLElBQUlELGlCQUFpQkUsSUFBSSxFQUFFO1FBQ3pCSixRQUFRSyxFQUFFLENBQUNDLFVBQVUsQ0FBQztZQUNwQkMsWUFBWTtZQUNaQyxPQUFPO2dCQUNMQyxNQUFNO29CQUFFQyxJQUFJVDtnQkFBSTtnQkFDaEJVLGdCQUFnQjtvQkFDZEMsUUFBUTtnQkFDVjtZQUNGO1lBQ0FULEtBQUFBO1FBQ0Y7SUFDRjtJQUNBSCxRQUFRSyxFQUFFLENBQUNDLFVBQVUsQ0FBQztRQUNwQkMsWUFBWTtRQUNaQyxPQUFPO1lBQ0xLLEtBQUs7Z0JBQUVILElBQUlULElBQUlhLEdBQUcsQ0FBQyxTQUFDQzsyQkFBTyxBQUFDLGNBQXNDQSxPQUF6QmIsaUJBQWlCYyxJQUFJLEVBQUMsS0FBTSxPQUFIRDs7WUFBTTtRQUMxRTtRQUNBWixLQUFBQTtJQUNGO0FBQ0YsRUFBRSJ9