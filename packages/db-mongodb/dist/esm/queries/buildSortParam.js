function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import { getLocalizedSortProperty } from "./getLocalizedSortProperty";
export var buildSortParam = function(param) {
    var sort = param.sort, config = param.config, fields = param.fields, timestamps = param.timestamps, locale = param.locale;
    var sortProperty;
    var sortDirection = "desc";
    if (!sort) {
        if (timestamps) {
            sortProperty = "createdAt";
        } else {
            sortProperty = "_id";
        }
    } else if (sort.indexOf("-") === 0) {
        sortProperty = sort.substring(1);
    } else {
        sortProperty = sort;
        sortDirection = "asc";
    }
    if (sortProperty === "id") {
        sortProperty = "_id";
    } else {
        sortProperty = getLocalizedSortProperty({
            segments: sortProperty.split("."),
            config: config,
            fields: fields,
            locale: locale
        });
    }
    return _define_property({}, sortProperty, sortDirection);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9xdWVyaWVzL2J1aWxkU29ydFBhcmFtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2luYXRlT3B0aW9ucyB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJ3BheWxvYWQvY29uZmlnJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgeyBnZXRMb2NhbGl6ZWRTb3J0UHJvcGVydHkgfSBmcm9tICcuL2dldExvY2FsaXplZFNvcnRQcm9wZXJ0eSc7XG5cbnR5cGUgQXJncyA9IHtcbiAgc29ydDogc3RyaW5nXG4gIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnXG4gIGZpZWxkczogRmllbGRbXVxuICB0aW1lc3RhbXBzOiBib29sZWFuXG4gIGxvY2FsZTogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIFNvcnRBcmdzID0ge1xuICBwcm9wZXJ0eTogc3RyaW5nXG4gIGRpcmVjdGlvbjogU29ydERpcmVjdGlvblxufVtdXG5cbmV4cG9ydCB0eXBlIFNvcnREaXJlY3Rpb24gPSAnYXNjJyB8ICdkZXNjJztcblxuZXhwb3J0IGNvbnN0IGJ1aWxkU29ydFBhcmFtID0gKHsgc29ydCwgY29uZmlnLCBmaWVsZHMsIHRpbWVzdGFtcHMsIGxvY2FsZSB9OiBBcmdzKTogUGFnaW5hdGVPcHRpb25zWydzb3J0J10gPT4ge1xuICBsZXQgc29ydFByb3BlcnR5OiBzdHJpbmc7XG4gIGxldCBzb3J0RGlyZWN0aW9uOiBTb3J0RGlyZWN0aW9uID0gJ2Rlc2MnO1xuXG4gIGlmICghc29ydCkge1xuICAgIGlmICh0aW1lc3RhbXBzKSB7XG4gICAgICBzb3J0UHJvcGVydHkgPSAnY3JlYXRlZEF0JztcbiAgICB9IGVsc2Uge1xuICAgICAgc29ydFByb3BlcnR5ID0gJ19pZCc7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNvcnQuaW5kZXhPZignLScpID09PSAwKSB7XG4gICAgc29ydFByb3BlcnR5ID0gc29ydC5zdWJzdHJpbmcoMSk7XG4gIH0gZWxzZSB7XG4gICAgc29ydFByb3BlcnR5ID0gc29ydDtcbiAgICBzb3J0RGlyZWN0aW9uID0gJ2FzYyc7XG4gIH1cblxuICBpZiAoc29ydFByb3BlcnR5ID09PSAnaWQnKSB7XG4gICAgc29ydFByb3BlcnR5ID0gJ19pZCc7XG4gIH0gZWxzZSB7XG4gICAgc29ydFByb3BlcnR5ID0gZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5KHtcbiAgICAgIHNlZ21lbnRzOiBzb3J0UHJvcGVydHkuc3BsaXQoJy4nKSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIGZpZWxkcyxcbiAgICAgIGxvY2FsZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IFtzb3J0UHJvcGVydHldOiBzb3J0RGlyZWN0aW9uIH07XG59O1xuIl0sIm5hbWVzIjpbImdldExvY2FsaXplZFNvcnRQcm9wZXJ0eSIsImJ1aWxkU29ydFBhcmFtIiwic29ydCIsImNvbmZpZyIsImZpZWxkcyIsInRpbWVzdGFtcHMiLCJsb2NhbGUiLCJzb3J0UHJvcGVydHkiLCJzb3J0RGlyZWN0aW9uIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsInNlZ21lbnRzIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSxTQUFTQSx3QkFBd0IsUUFBUSw2QkFBNkI7QUFpQnRFLE9BQU8sSUFBTUMsaUJBQWlCO1FBQUdDLGFBQUFBLE1BQU1DLGVBQUFBLFFBQVFDLGVBQUFBLFFBQVFDLG1CQUFBQSxZQUFZQyxlQUFBQTtJQUNqRSxJQUFJQztJQUNKLElBQUlDLGdCQUErQjtJQUVuQyxJQUFJLENBQUNOLE1BQU07UUFDVCxJQUFJRyxZQUFZO1lBQ2RFLGVBQWU7UUFDakIsT0FBTztZQUNMQSxlQUFlO1FBQ2pCO0lBQ0YsT0FBTyxJQUFJTCxLQUFLTyxPQUFPLENBQUMsU0FBUyxHQUFHO1FBQ2xDRixlQUFlTCxLQUFLUSxTQUFTLENBQUM7SUFDaEMsT0FBTztRQUNMSCxlQUFlTDtRQUNmTSxnQkFBZ0I7SUFDbEI7SUFFQSxJQUFJRCxpQkFBaUIsTUFBTTtRQUN6QkEsZUFBZTtJQUNqQixPQUFPO1FBQ0xBLGVBQWVQLHlCQUF5QjtZQUN0Q1csVUFBVUosYUFBYUssS0FBSyxDQUFDO1lBQzdCVCxRQUFBQTtZQUNBQyxRQUFBQTtZQUNBRSxRQUFBQTtRQUNGO0lBQ0Y7SUFFQSxPQUFTLHFCQUFDQyxjQUFlQztBQUMzQixFQUFFIn0=