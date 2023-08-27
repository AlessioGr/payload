"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "combineQueries", {
    enumerable: true,
    get: function() {
        return combineQueries;
    }
});
var _auth = require("../auth");
var combineQueries = function(where, access) {
    if (!where && !access) return {};
    var result = {
        and: []
    };
    if (where) result.and.push(where);
    if ((0, _auth.hasWhereAccessResult)(access)) result.and.push(access);
    return result;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9jb21iaW5lUXVlcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNXaGVyZUFjY2Vzc1Jlc3VsdCB9IGZyb20gJy4uL2F1dGgnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjb21iaW5lUXVlcmllcyA9ICh3aGVyZTogV2hlcmUsIGFjY2VzczogV2hlcmUgfCBib29sZWFuKTogV2hlcmUgPT4ge1xuICBpZiAoIXdoZXJlICYmICFhY2Nlc3MpIHJldHVybiB7fTtcblxuICBjb25zdCByZXN1bHQ6IFdoZXJlID0ge1xuICAgIGFuZDogW10sXG4gIH07XG5cbiAgaWYgKHdoZXJlKSByZXN1bHQuYW5kLnB1c2god2hlcmUpO1xuICBpZiAoaGFzV2hlcmVBY2Nlc3NSZXN1bHQoYWNjZXNzKSkgcmVzdWx0LmFuZC5wdXNoKGFjY2Vzcyk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXSwibmFtZXMiOlsiY29tYmluZVF1ZXJpZXMiLCJ3aGVyZSIsImFjY2VzcyIsInJlc3VsdCIsImFuZCIsInB1c2giLCJoYXNXaGVyZUFjY2Vzc1Jlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFHYUE7OztlQUFBQTs7O29CQUh3QjtBQUc5QixJQUFNQSxpQkFBaUIsU0FBQ0MsT0FBY0M7SUFDM0MsSUFBSSxDQUFDRCxTQUFTLENBQUNDLFFBQVEsT0FBTyxDQUFDO0lBRS9CLElBQU1DLFNBQWdCO1FBQ3BCQyxLQUFLLEVBQUU7SUFDVDtJQUVBLElBQUlILE9BQU9FLE9BQU9DLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDSjtJQUMzQixJQUFJSyxJQUFBQSwwQkFBb0IsRUFBQ0osU0FBU0MsT0FBT0MsR0FBRyxDQUFDQyxJQUFJLENBQUNIO0lBRWxELE9BQU9DO0FBQ1QifQ==