"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return formatBytes;
    }
});
function formatBytes(bytes) {
    var decimals = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (bytes === 0) return "0 bytes";
    var k = 1024;
    var dm = decimals < 0 ? 0 : decimals;
    var sizes = [
        " bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(dm))).concat(sizes[i]);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2Zvcm1hdEZpbGVzaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdEJ5dGVzKGJ5dGVzOiBudW1iZXIsIGRlY2ltYWxzID0gMCk6IHN0cmluZyB7XG4gIGlmIChieXRlcyA9PT0gMCkgcmV0dXJuICcwIGJ5dGVzJztcblxuICBjb25zdCBrID0gMTAyNDtcbiAgY29uc3QgZG0gPSBkZWNpbWFscyA8IDAgPyAwIDogZGVjaW1hbHM7XG4gIGNvbnN0IHNpemVzID0gWycgYnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcblxuICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG5cbiAgcmV0dXJuIGAke3BhcnNlRmxvYXQoKGJ5dGVzIC8gKGsgKiogaSkpLnRvRml4ZWQoZG0pKX0ke3NpemVzW2ldfWA7XG59XG4iXSwibmFtZXMiOlsiZm9ybWF0Qnl0ZXMiLCJieXRlcyIsImRlY2ltYWxzIiwiayIsImRtIiwic2l6ZXMiLCJpIiwiTWF0aCIsImZsb29yIiwibG9nIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBQUE7OztlQUF3QkE7OztBQUFULFNBQVNBLFlBQVlDLEtBQWE7UUFBRUMsV0FBQUEsaUVBQVc7SUFDNUQsSUFBSUQsVUFBVSxHQUFHLE9BQU87SUFFeEIsSUFBTUUsSUFBSTtJQUNWLElBQU1DLEtBQUtGLFdBQVcsSUFBSSxJQUFJQTtJQUM5QixJQUFNRyxRQUFRO1FBQUM7UUFBVTtRQUFNO1FBQU07UUFBTTtRQUFNO1FBQU07UUFBTTtRQUFNO0tBQUs7SUFFeEUsSUFBTUMsSUFBSUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxHQUFHLENBQUNSLFNBQVNNLEtBQUtFLEdBQUcsQ0FBQ047SUFFaEQsT0FBTyxBQUFDLEdBQStDRSxPQUE3Q0ssV0FBVyxBQUFDVCxDQUFBQSxRQUFTRSxLQUFBQSxJQUFBQSxHQUFLRyxFQUFDLEVBQUdLLE9BQU8sQ0FBQ1AsTUFBZ0IsT0FBVEMsS0FBSyxDQUFDQyxFQUFFO0FBQ2pFIn0=