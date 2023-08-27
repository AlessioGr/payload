/**
 * Function to determine whether two sets are equal or not.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setsAreEqual", {
    enumerable: true,
    get: function() {
        return setsAreEqual;
    }
});
var setsAreEqual = function(lhs, rhs) {
    return lhs.size === rhs.size && Array.from(lhs).every(function(value) {
        return rhs.has(value);
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvc2V0c0FyZUVxdWFsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRnVuY3Rpb24gdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdHdvIHNldHMgYXJlIGVxdWFsIG9yIG5vdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNldHNBcmVFcXVhbCA9IDxUPihsaHM6IFNldDxUPiwgcmhzOiBTZXQ8VD4pID0+IHtcbiAgcmV0dXJuIGxocy5zaXplID09PSByaHMuc2l6ZSAmJiBBcnJheS5mcm9tKGxocykuZXZlcnkoKHZhbHVlKSA9PiByaHMuaGFzKHZhbHVlKSk7XG59O1xuIl0sIm5hbWVzIjpbInNldHNBcmVFcXVhbCIsImxocyIsInJocyIsInNpemUiLCJBcnJheSIsImZyb20iLCJldmVyeSIsInZhbHVlIiwiaGFzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQzs7OzsrQkFDWUE7OztlQUFBQTs7O0FBQU4sSUFBTUEsZUFBZSxTQUFJQyxLQUFhQztJQUMzQyxPQUFPRCxJQUFJRSxJQUFJLEtBQUtELElBQUlDLElBQUksSUFBSUMsTUFBTUMsSUFBSSxDQUFDSixLQUFLSyxLQUFLLENBQUMsU0FBQ0M7ZUFBVUwsSUFBSU0sR0FBRyxDQUFDRDs7QUFDM0UifQ==