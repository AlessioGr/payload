"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "timestamp", {
    enumerable: true,
    get: function() {
        return timestamp;
    }
});
var timestamp = function(label) {
    if (!process.env.PAYLOAD_TIME) process.env.PAYLOAD_TIME = String(new Date().getTime());
    var now = new Date();
    console.log("[".concat(now.getTime() - Number(process.env.PAYLOAD_TIME), "ms] ").concat(label));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGltZXN0YW1wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB0aW1lc3RhbXAgPSAobGFiZWwpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmVudi5QQVlMT0FEX1RJTUUpIHByb2Nlc3MuZW52LlBBWUxPQURfVElNRSA9IFN0cmluZyhuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnNvbGUubG9nKGBbJHtub3cuZ2V0VGltZSgpIC0gTnVtYmVyKHByb2Nlc3MuZW52LlBBWUxPQURfVElNRSl9bXNdICR7bGFiZWx9YCk7XG59O1xuIl0sIm5hbWVzIjpbInRpbWVzdGFtcCIsImxhYmVsIiwicHJvY2VzcyIsImVudiIsIlBBWUxPQURfVElNRSIsIlN0cmluZyIsIkRhdGUiLCJnZXRUaW1lIiwibm93IiwiY29uc29sZSIsImxvZyIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFBYUE7OztlQUFBQTs7O0FBQU4sSUFBTUEsWUFBWSxTQUFDQztJQUN4QixJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFRixRQUFRQyxHQUFHLENBQUNDLFlBQVksR0FBR0MsT0FBTyxJQUFJQyxPQUFPQyxPQUFPO0lBQ25GLElBQU1DLE1BQU0sSUFBSUY7SUFDaEJHLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLElBQTBEVCxPQUF2RE8sSUFBSUQsT0FBTyxLQUFLSSxPQUFPVCxRQUFRQyxHQUFHLENBQUNDLFlBQVksR0FBRSxRQUFZLE9BQU5IO0FBQ3pFIn0=