import { GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLObjectType } from "graphql";
var buildPaginatedListType = function(name, docType) {
    return new GraphQLObjectType({
        name: name,
        fields: {
            docs: {
                type: new GraphQLList(docType)
            },
            totalDocs: {
                type: GraphQLInt
            },
            offset: {
                type: GraphQLInt
            },
            limit: {
                type: GraphQLInt
            },
            totalPages: {
                type: GraphQLInt
            },
            page: {
                type: GraphQLInt
            },
            pagingCounter: {
                type: GraphQLInt
            },
            hasPrevPage: {
                type: GraphQLBoolean
            },
            hasNextPage: {
                type: GraphQLBoolean
            },
            prevPage: {
                type: GraphQLInt
            },
            nextPage: {
                type: GraphQLInt
            }
        }
    });
};
export default buildPaginatedListType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9idWlsZFBhZ2luYXRlZExpc3RUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxCb29sZWFuLCBHcmFwaFFMSW50LCBHcmFwaFFMTGlzdCwgR3JhcGhRTE9iamVjdFR5cGUgfSBmcm9tICdncmFwaHFsJztcblxuY29uc3QgYnVpbGRQYWdpbmF0ZWRMaXN0VHlwZSA9IChuYW1lLCBkb2NUeXBlKSA9PiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lLFxuICBmaWVsZHM6IHtcbiAgICBkb2NzOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTExpc3QoZG9jVHlwZSksXG4gICAgfSxcbiAgICB0b3RhbERvY3M6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIG9mZnNldDogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgbGltaXQ6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIHRvdGFsUGFnZXM6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIHBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIHBhZ2luZ0NvdW50ZXI6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICAgIGhhc1ByZXZQYWdlOiB7IHR5cGU6IEdyYXBoUUxCb29sZWFuIH0sXG4gICAgaGFzTmV4dFBhZ2U6IHsgdHlwZTogR3JhcGhRTEJvb2xlYW4gfSxcbiAgICBwcmV2UGFnZTogeyB0eXBlOiBHcmFwaFFMSW50IH0sXG4gICAgbmV4dFBhZ2U6IHsgdHlwZTogR3JhcGhRTEludCB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkUGFnaW5hdGVkTGlzdFR5cGU7XG4iXSwibmFtZXMiOlsiR3JhcGhRTEJvb2xlYW4iLCJHcmFwaFFMSW50IiwiR3JhcGhRTExpc3QiLCJHcmFwaFFMT2JqZWN0VHlwZSIsImJ1aWxkUGFnaW5hdGVkTGlzdFR5cGUiLCJuYW1lIiwiZG9jVHlwZSIsImZpZWxkcyIsImRvY3MiLCJ0eXBlIiwidG90YWxEb2NzIiwib2Zmc2V0IiwibGltaXQiLCJ0b3RhbFBhZ2VzIiwicGFnZSIsInBhZ2luZ0NvdW50ZXIiLCJoYXNQcmV2UGFnZSIsImhhc05leHRQYWdlIiwicHJldlBhZ2UiLCJuZXh0UGFnZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsY0FBYyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsaUJBQWlCLFFBQVEsVUFBVTtBQUVyRixJQUFNQyx5QkFBeUIsU0FBQ0MsTUFBTUM7V0FBWSxJQUFJSCxrQkFBa0I7UUFDdEVFLE1BQUFBO1FBQ0FFLFFBQVE7WUFDTkMsTUFBTTtnQkFDSkMsTUFBTSxJQUFJUCxZQUFZSTtZQUN4QjtZQUNBSSxXQUFXO2dCQUFFRCxNQUFNUjtZQUFXO1lBQzlCVSxRQUFRO2dCQUFFRixNQUFNUjtZQUFXO1lBQzNCVyxPQUFPO2dCQUFFSCxNQUFNUjtZQUFXO1lBQzFCWSxZQUFZO2dCQUFFSixNQUFNUjtZQUFXO1lBQy9CYSxNQUFNO2dCQUFFTCxNQUFNUjtZQUFXO1lBQ3pCYyxlQUFlO2dCQUFFTixNQUFNUjtZQUFXO1lBQ2xDZSxhQUFhO2dCQUFFUCxNQUFNVDtZQUFlO1lBQ3BDaUIsYUFBYTtnQkFBRVIsTUFBTVQ7WUFBZTtZQUNwQ2tCLFVBQVU7Z0JBQUVULE1BQU1SO1lBQVc7WUFDN0JrQixVQUFVO2dCQUFFVixNQUFNUjtZQUFXO1FBQy9CO0lBQ0Y7O0FBRUEsZUFBZUcsdUJBQXVCIn0=