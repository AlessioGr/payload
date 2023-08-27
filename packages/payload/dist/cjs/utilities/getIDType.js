"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getIDType", {
    enumerable: true,
    get: function() {
        return getIDType;
    }
});
var getIDType = function(idField) {
    if (idField) {
        return idField.type === "number" ? "number" : "text";
    }
    return "ObjectID";
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0SURUeXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBnZXRJRFR5cGUgPSAoaWRGaWVsZDogRmllbGQgfCBudWxsKTogJ251bWJlcicgfCAndGV4dCcgfCAnT2JqZWN0SUQnID0+IHtcbiAgaWYgKGlkRmllbGQpIHtcbiAgICByZXR1cm4gaWRGaWVsZC50eXBlID09PSAnbnVtYmVyJyA/ICdudW1iZXInIDogJ3RleHQnO1xuICB9XG4gIHJldHVybiAnT2JqZWN0SUQnO1xufTtcbiJdLCJuYW1lcyI6WyJnZXRJRFR5cGUiLCJpZEZpZWxkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFFYUE7OztlQUFBQTs7O0FBQU4sSUFBTUEsWUFBWSxTQUFDQztJQUN4QixJQUFJQSxTQUFTO1FBQ1gsT0FBT0EsUUFBUUMsSUFBSSxLQUFLLFdBQVcsV0FBVztJQUNoRDtJQUNBLE9BQU87QUFDVCJ9