"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "traverseFields", {
    enumerable: true,
    get: function() {
        return traverseFields;
    }
});
var _promise = require("./promise");
var traverseFields = function(param) {
    var currentDepth = param.currentDepth, depth = param.depth, doc = param.doc, fieldPromises = param.fieldPromises, fields = param.fields, findMany = param.findMany, flattenLocales = param.flattenLocales, overrideAccess = param.overrideAccess, populationPromises = param.populationPromises, req = param.req, siblingDoc = param.siblingDoc, showHiddenFields = param.showHiddenFields, context = param.context;
    fields.forEach(function(field) {
        fieldPromises.push((0, _promise.promise)({
            currentDepth: currentDepth,
            depth: depth,
            doc: doc,
            field: field,
            fieldPromises: fieldPromises,
            findMany: findMany,
            flattenLocales: flattenLocales,
            overrideAccess: overrideAccess,
            populationPromises: populationPromises,
            req: req,
            siblingDoc: siblingDoc,
            showHiddenFields: showHiddenFields,
            context: context
        }));
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL3RyYXZlcnNlRmllbGRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBUYWJBc0ZpZWxkIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHByb21pc2UgfSBmcm9tICcuL3Byb21pc2UnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgY3VycmVudERlcHRoOiBudW1iZXJcbiAgZGVwdGg6IG51bWJlclxuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGZpZWxkUHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXVxuICBmaWVsZHM6IChGaWVsZCB8IFRhYkFzRmllbGQpW11cbiAgZmluZE1hbnk6IGJvb2xlYW5cbiAgZmxhdHRlbkxvY2FsZXM6IGJvb2xlYW5cbiAgcG9wdWxhdGlvblByb21pc2VzOiBQcm9taXNlPHZvaWQ+W11cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICBzaWJsaW5nRG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG4gIGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0XG59XG5cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUZpZWxkcyA9ICh7XG4gIGN1cnJlbnREZXB0aCxcbiAgZGVwdGgsXG4gIGRvYyxcbiAgZmllbGRQcm9taXNlcyxcbiAgZmllbGRzLFxuICBmaW5kTWFueSxcbiAgZmxhdHRlbkxvY2FsZXMsXG4gIG92ZXJyaWRlQWNjZXNzLFxuICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gIHJlcSxcbiAgc2libGluZ0RvYyxcbiAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgY29udGV4dCxcbn06IEFyZ3MpOiB2b2lkID0+IHtcbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgZmllbGRQcm9taXNlcy5wdXNoKHByb21pc2Uoe1xuICAgICAgY3VycmVudERlcHRoLFxuICAgICAgZGVwdGgsXG4gICAgICBkb2MsXG4gICAgICBmaWVsZCxcbiAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICBmaW5kTWFueSxcbiAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgICByZXEsXG4gICAgICBzaWJsaW5nRG9jLFxuICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgIGNvbnRleHQsXG4gICAgfSkpO1xuICB9KTtcbn07XG4iXSwibmFtZXMiOlsidHJhdmVyc2VGaWVsZHMiLCJjdXJyZW50RGVwdGgiLCJkZXB0aCIsImRvYyIsImZpZWxkUHJvbWlzZXMiLCJmaWVsZHMiLCJmaW5kTWFueSIsImZsYXR0ZW5Mb2NhbGVzIiwib3ZlcnJpZGVBY2Nlc3MiLCJwb3B1bGF0aW9uUHJvbWlzZXMiLCJyZXEiLCJzaWJsaW5nRG9jIiwic2hvd0hpZGRlbkZpZWxkcyIsImNvbnRleHQiLCJmb3JFYWNoIiwiZmllbGQiLCJwdXNoIiwicHJvbWlzZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFvQmFBOzs7ZUFBQUE7Ozt1QkFuQlc7QUFtQmpCLElBQU1BLGlCQUFpQjtRQUM1QkMscUJBQUFBLGNBQ0FDLGNBQUFBLE9BQ0FDLFlBQUFBLEtBQ0FDLHNCQUFBQSxlQUNBQyxlQUFBQSxRQUNBQyxpQkFBQUEsVUFDQUMsdUJBQUFBLGdCQUNBQyx1QkFBQUEsZ0JBQ0FDLDJCQUFBQSxvQkFDQUMsWUFBQUEsS0FDQUMsbUJBQUFBLFlBQ0FDLHlCQUFBQSxrQkFDQUMsZ0JBQUFBO0lBRUFSLE9BQU9TLE9BQU8sQ0FBQyxTQUFDQztRQUNkWCxjQUFjWSxJQUFJLENBQUNDLElBQUFBLGdCQUFPLEVBQUM7WUFDekJoQixjQUFBQTtZQUNBQyxPQUFBQTtZQUNBQyxLQUFBQTtZQUNBWSxPQUFBQTtZQUNBWCxlQUFBQTtZQUNBRSxVQUFBQTtZQUNBQyxnQkFBQUE7WUFDQUMsZ0JBQUFBO1lBQ0FDLG9CQUFBQTtZQUNBQyxLQUFBQTtZQUNBQyxZQUFBQTtZQUNBQyxrQkFBQUE7WUFDQUMsU0FBQUE7UUFDRjtJQUNGO0FBQ0YifQ==