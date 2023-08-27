"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "oneWayHash", {
    enumerable: true,
    get: function() {
        return oneWayHash;
    }
});
var _crypto = require("crypto");
var oneWayHash = function(data, secret) {
    var hash = (0, _crypto.createHash)("sha256");
    // prepend value with payload secret. This ensure one-way.
    hash.update(secret);
    // Update is an append operation, not a replacement. The secret from the prior
    // update is still present!
    hash.update(data);
    return hash.digest("hex");
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L29uZVdheUhhc2gudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluYXJ5TGlrZSwgY3JlYXRlSGFzaCB9IGZyb20gJ2NyeXB0byc7XG5cbmV4cG9ydCBjb25zdCBvbmVXYXlIYXNoID0gKGRhdGE6IEJpbmFyeUxpa2UsIHNlY3JldDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgaGFzaCA9IGNyZWF0ZUhhc2goJ3NoYTI1NicpO1xuXG4gIC8vIHByZXBlbmQgdmFsdWUgd2l0aCBwYXlsb2FkIHNlY3JldC4gVGhpcyBlbnN1cmUgb25lLXdheS5cbiAgaGFzaC51cGRhdGUoc2VjcmV0KTtcblxuICAvLyBVcGRhdGUgaXMgYW4gYXBwZW5kIG9wZXJhdGlvbiwgbm90IGEgcmVwbGFjZW1lbnQuIFRoZSBzZWNyZXQgZnJvbSB0aGUgcHJpb3JcbiAgLy8gdXBkYXRlIGlzIHN0aWxsIHByZXNlbnQhXG4gIGhhc2gudXBkYXRlKGRhdGEpO1xuICByZXR1cm4gaGFzaC5kaWdlc3QoJ2hleCcpO1xufTtcbiJdLCJuYW1lcyI6WyJvbmVXYXlIYXNoIiwiZGF0YSIsInNlY3JldCIsImhhc2giLCJjcmVhdGVIYXNoIiwidXBkYXRlIiwiZGlnZXN0Il0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7O2VBQUFBOzs7c0JBRjBCO0FBRWhDLElBQU1BLGFBQWEsU0FBQ0MsTUFBa0JDO0lBQzNDLElBQU1DLE9BQU9DLElBQUFBLGtCQUFVLEVBQUM7SUFFeEIsMERBQTBEO0lBQzFERCxLQUFLRSxNQUFNLENBQUNIO0lBRVosOEVBQThFO0lBQzlFLDJCQUEyQjtJQUMzQkMsS0FBS0UsTUFBTSxDQUFDSjtJQUNaLE9BQU9FLEtBQUtHLE1BQU0sQ0FBQztBQUNyQiJ9