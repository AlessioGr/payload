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
var _graphql = require("graphql");
var buildPaginatedListType = function(name, docType) {
    return new _graphql.GraphQLObjectType({
        name: name,
        fields: {
            docs: {
                type: new _graphql.GraphQLList(docType)
            },
            totalDocs: {
                type: _graphql.GraphQLInt
            },
            offset: {
                type: _graphql.GraphQLInt
            },
            limit: {
                type: _graphql.GraphQLInt
            },
            totalPages: {
                type: _graphql.GraphQLInt
            },
            page: {
                type: _graphql.GraphQLInt
            },
            pagingCounter: {
                type: _graphql.GraphQLInt
            },
            hasPrevPage: {
                type: _graphql.GraphQLBoolean
            },
            hasNextPage: {
                type: _graphql.GraphQLBoolean
            },
            prevPage: {
                type: _graphql.GraphQLInt
            },
            nextPage: {
                type: _graphql.GraphQLInt
            }
        }
    });
};
var _default = buildPaginatedListType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZFBhZ2luYXRlZExpc3RUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMSW50LCBHcmFwaFFMTGlzdCwgR3JhcGhRTE9iamVjdFR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSA9IChuYW1lLCBkb2NUeXBlKSA9PiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lLFxuICBmaWVsZHM6IHtcbiAgICBkb2NzOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoZG9jVHlwZSksXG4gICAgfSxcbiAgICB0b3RhbERvY3M6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIG9mZnNldDogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgbGltaXQ6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIHRvdGFsUGFnZXM6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIHBhZ2luZ0NvdW50ZXI6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIGhhc1ByZXZQYWdlOiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgaGFzTmV4dFBhZ2U6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICBwcmV2UGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgbmV4dFBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkUGFnaW5hdGVkTGlzdFR5cGU7XG4iXSwibmFtZXMiOlsiYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSIsIm5hbWUiLCJkb2NUeXBlIiwiR3JhcGhRTE9iamVjdFR5cGUiLCJmaWVsZHMiLCJkb2NzIiwidHlwZSIsIkdyYXBoUUxMaXN0IiwidG90YWxEb2NzIiwiR3JhcGhRTEludCIsIm9mZnNldCIsImxpbWl0IiwidG90YWxQYWdlcyIsInBhZ2UiLCJwYWdpbmdDb3VudGVyIiwiaGFzUHJldlBhZ2UiLCJHcmFwaFFMQm9vbGVhbiIsImhhc05leHRQYWdlIiwicHJldlBhZ2UiLCJuZXh0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7OztlQUFBOzs7dUJBckIyRTtBQUUzRSxJQUFNQSx5QkFBeUIsU0FBQ0MsTUFBTUM7V0FBWSxJQUFJQywwQkFBaUIsQ0FBQztRQUN0RUYsTUFBQUE7UUFDQUcsUUFBUTtZQUNOQyxNQUFNO2dCQUNKQyxNQUFNLElBQUlDLG9CQUFXLENBQUNMO1lBQ3hCO1lBQ0FNLFdBQVc7Z0JBQUVGLE1BQU1HLG1CQUFVO1lBQUM7WUFDOUJDLFFBQVE7Z0JBQUVKLE1BQU1HLG1CQUFVO1lBQUM7WUFDM0JFLE9BQU87Z0JBQUVMLE1BQU1HLG1CQUFVO1lBQUM7WUFDMUJHLFlBQVk7Z0JBQUVOLE1BQU1HLG1CQUFVO1lBQUM7WUFDL0JJLE1BQU07Z0JBQUVQLE1BQU1HLG1CQUFVO1lBQUM7WUFDekJLLGVBQWU7Z0JBQUVSLE1BQU1HLG1CQUFVO1lBQUM7WUFDbENNLGFBQWE7Z0JBQUVULE1BQU1VLHVCQUFjO1lBQUM7WUFDcENDLGFBQWE7Z0JBQUVYLE1BQU1VLHVCQUFjO1lBQUM7WUFDcENFLFVBQVU7Z0JBQUVaLE1BQU1HLG1CQUFVO1lBQUM7WUFDN0JVLFVBQVU7Z0JBQUViLE1BQU1HLG1CQUFVO1lBQUM7UUFDL0I7SUFDRjs7SUFFQSxXQUFlVCJ9