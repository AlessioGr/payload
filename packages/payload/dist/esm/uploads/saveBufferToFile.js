function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { Readable } from "stream";
import fs from "fs";
/**
 * Save buffer data to a file.
 * @param {Buffer} buffer - buffer to save to a file.
 * @param {string} filePath - path to a file.
 */ var saveBufferToFile = function() {
    var _ref = _async_to_generator(function(buffer, filePath) {
        var streamData, readStream;
        return _ts_generator(this, function(_state) {
            streamData = buffer;
            readStream = new Readable();
            readStream._read = function() {
                readStream.push(streamData);
                streamData = null;
            };
            // Setup file system writable stream.
            return [
                2,
                fs.writeFileSync(filePath, buffer)
            ];
        });
    });
    return function saveBufferToFile(buffer, filePath) {
        return _ref.apply(this, arguments);
    };
}();
export default saveBufferToFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL3NhdmVCdWZmZXJUb0ZpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tICdzdHJlYW0nO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuLyoqXG4gKiBTYXZlIGJ1ZmZlciBkYXRhIHRvIGEgZmlsZS5cbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgLSBidWZmZXIgdG8gc2F2ZSB0byBhIGZpbGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggLSBwYXRoIHRvIGEgZmlsZS5cbiAqL1xuY29uc3Qgc2F2ZUJ1ZmZlclRvRmlsZSA9IGFzeW5jIChidWZmZXI6IEJ1ZmZlciwgZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAvLyBTZXR1cCByZWFkYWJsZSBzdHJlYW0gZnJvbSBidWZmZXIuXG4gIGxldCBzdHJlYW1EYXRhID0gYnVmZmVyO1xuICBjb25zdCByZWFkU3RyZWFtID0gbmV3IFJlYWRhYmxlKCk7XG4gIHJlYWRTdHJlYW0uX3JlYWQgPSAoKSA9PiB7XG4gICAgcmVhZFN0cmVhbS5wdXNoKHN0cmVhbURhdGEpO1xuICAgIHN0cmVhbURhdGEgPSBudWxsO1xuICB9O1xuICAvLyBTZXR1cCBmaWxlIHN5c3RlbSB3cml0YWJsZSBzdHJlYW0uXG4gIHJldHVybiBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBidWZmZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2F2ZUJ1ZmZlclRvRmlsZTtcbiJdLCJuYW1lcyI6WyJSZWFkYWJsZSIsImZzIiwic2F2ZUJ1ZmZlclRvRmlsZSIsImJ1ZmZlciIsImZpbGVQYXRoIiwic3RyZWFtRGF0YSIsInJlYWRTdHJlYW0iLCJfcmVhZCIsInB1c2giLCJ3cml0ZUZpbGVTeW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsUUFBUSxRQUFRLFNBQVM7QUFDbEMsT0FBT0MsUUFBUSxLQUFLO0FBRXBCOzs7O0NBSUMsR0FDRCxJQUFNQztlQUFtQixvQkFBQSxTQUFPQyxRQUFnQkM7WUFFMUNDLFlBQ0VDOztZQURGRCxhQUFhRjtZQUNYRyxhQUFhLElBQUlOO1lBQ3ZCTSxXQUFXQyxLQUFLLEdBQUc7Z0JBQ2pCRCxXQUFXRSxJQUFJLENBQUNIO2dCQUNoQkEsYUFBYTtZQUNmO1lBQ0EscUNBQXFDO1lBQ3JDOztnQkFBT0osR0FBR1EsYUFBYSxDQUFDTCxVQUFVRDs7O0lBQ3BDO29CQVZNRCxpQkFBMEJDLFFBQWdCQzs7OztBQVloRCxlQUFlRixpQkFBaUIifQ==