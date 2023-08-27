"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "transformWhereQuery", {
    enumerable: true,
    get: function() {
        return transformWhereQuery;
    }
});
var transformWhereQuery = function(whereQuery) {
    if (!whereQuery) {
        return {};
    }
    // Check if 'whereQuery' has 'or' field but no 'and'. This is the case for "correct" queries
    if (whereQuery.or && !whereQuery.and) {
        return {
            or: whereQuery.or.map(function(query) {
                // ...but if the or query does not have an and, we need to add it
                if (!query.and) {
                    return {
                        and: [
                            query
                        ]
                    };
                }
                return query;
            })
        };
    }
    // Check if 'whereQuery' has 'and' field but no 'or'.
    if (whereQuery.and && !whereQuery.or) {
        return {
            or: [
                {
                    and: whereQuery.and
                }
            ]
        };
    }
    // Check if 'whereQuery' has neither 'or' nor 'and'.
    if (!whereQuery.or && !whereQuery.and) {
        return {
            or: [
                {
                    and: [
                        whereQuery
                    ]
                }
            ]
        };
    }
    // If 'whereQuery' has 'or' and 'and', just return it as it is.
    return whereQuery;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci90cmFuc2Zvcm1XaGVyZVF1ZXJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5cbi8qKlxuICogU29tZXRoaW5nIGxpa2UgW29yXVswXVthbmRdWzBdW3RleHRdW2VxdWFsc109ZXhhbXBsZSUyMHBvc3Qgd2lsbCB3b3JrIGFuZCBwYXNzIHRocm91Z2ggdGhlIHZhbGlkYXRlV2hlcmVRdWVyeSBjaGVjay5cbiAqIEhvd2V2ZXIsIHNvbWV0aGluZyBsaWtlIFt0ZXh0XVtlcXVhbHNdPWV4YW1wbGUlMjBwb3N0IHdpbGwgbm90IHdvcmsgYW5kIHdpbGwgZmFpbCB0aGUgdmFsaWRhdGVXaGVyZVF1ZXJ5IGNoZWNrLFxuICogZXZlbiB0aG91Z2ggaXQgaXMgYSB2YWxpZCBXaGVyZSBxdWVyeS4gVGhpcyBuZWVkcyB0byBiZSB0cmFuc2Zvcm1lZCBoZXJlLlxuICovXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtV2hlcmVRdWVyeSA9ICh3aGVyZVF1ZXJ5KTogV2hlcmUgPT4ge1xuICBpZiAoIXdoZXJlUXVlcnkpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgLy8gQ2hlY2sgaWYgJ3doZXJlUXVlcnknIGhhcyAnb3InIGZpZWxkIGJ1dCBubyAnYW5kJy4gVGhpcyBpcyB0aGUgY2FzZSBmb3IgXCJjb3JyZWN0XCIgcXVlcmllc1xuICBpZiAod2hlcmVRdWVyeS5vciAmJiAhd2hlcmVRdWVyeS5hbmQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3I6IHdoZXJlUXVlcnkub3IubWFwKChxdWVyeSkgPT4ge1xuICAgICAgICAvLyAuLi5idXQgaWYgdGhlIG9yIHF1ZXJ5IGRvZXMgbm90IGhhdmUgYW4gYW5kLCB3ZSBuZWVkIHRvIGFkZCBpdFxuICAgICAgICBpZighcXVlcnkuYW5kKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFuZDogW3F1ZXJ5XVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgICB9KSxcbiAgICB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgJ3doZXJlUXVlcnknIGhhcyAnYW5kJyBmaWVsZCBidXQgbm8gJ29yJy5cbiAgaWYgKHdoZXJlUXVlcnkuYW5kICYmICF3aGVyZVF1ZXJ5Lm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhbmQ6IHdoZXJlUXVlcnkuYW5kLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgJ3doZXJlUXVlcnknIGhhcyBuZWl0aGVyICdvcicgbm9yICdhbmQnLlxuICBpZiAoIXdoZXJlUXVlcnkub3IgJiYgIXdoZXJlUXVlcnkuYW5kKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBhbmQ6IFt3aGVyZVF1ZXJ5XSwgLy8gdG9wLWxldmVsIHNpYmxpbmdzIGFyZSBjb25zaWRlcmVkICdhbmQnXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvLyBJZiAnd2hlcmVRdWVyeScgaGFzICdvcicgYW5kICdhbmQnLCBqdXN0IHJldHVybiBpdCBhcyBpdCBpcy5cbiAgcmV0dXJuIHdoZXJlUXVlcnk7XG59O1xuIl0sIm5hbWVzIjpbInRyYW5zZm9ybVdoZXJlUXVlcnkiLCJ3aGVyZVF1ZXJ5Iiwib3IiLCJhbmQiLCJtYXAiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFPYUE7OztlQUFBQTs7O0FBQU4sSUFBTUEsc0JBQXNCLFNBQUNDO0lBQ2xDLElBQUksQ0FBQ0EsWUFBWTtRQUNmLE9BQU8sQ0FBQztJQUNWO0lBQ0EsNEZBQTRGO0lBQzVGLElBQUlBLFdBQVdDLEVBQUUsSUFBSSxDQUFDRCxXQUFXRSxHQUFHLEVBQUU7UUFDcEMsT0FBTztZQUNMRCxJQUFJRCxXQUFXQyxFQUFFLENBQUNFLEdBQUcsQ0FBQyxTQUFDQztnQkFDckIsaUVBQWlFO2dCQUNqRSxJQUFHLENBQUNBLE1BQU1GLEdBQUcsRUFBRTtvQkFDYixPQUFPO3dCQUNMQSxLQUFLOzRCQUFDRTt5QkFBTTtvQkFDZDtnQkFDRjtnQkFDQSxPQUFPQTtZQUNUO1FBQ0Y7SUFDRjtJQUVBLHFEQUFxRDtJQUNyRCxJQUFJSixXQUFXRSxHQUFHLElBQUksQ0FBQ0YsV0FBV0MsRUFBRSxFQUFFO1FBQ3BDLE9BQU87WUFDTEEsSUFBSTtnQkFDRjtvQkFDRUMsS0FBS0YsV0FBV0UsR0FBRztnQkFDckI7YUFDRDtRQUNIO0lBQ0Y7SUFFQSxvREFBb0Q7SUFDcEQsSUFBSSxDQUFDRixXQUFXQyxFQUFFLElBQUksQ0FBQ0QsV0FBV0UsR0FBRyxFQUFFO1FBQ3JDLE9BQU87WUFDTEQsSUFBSTtnQkFDRjtvQkFDRUMsS0FBSzt3QkFBQ0Y7cUJBQVc7Z0JBQ25CO2FBQ0Q7UUFDSDtJQUNGO0lBRUEsK0RBQStEO0lBQy9ELE9BQU9BO0FBQ1QifQ==