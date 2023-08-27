"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "generatePasswordSaltHash", {
    enumerable: true,
    get: function() {
        return generatePasswordSaltHash;
    }
});
var _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
var _errors = require("../../../errors");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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
var defaultPasswordValidator = function(password) {
    if (!password) return "No password was given";
    if (password.length < 3) return "Password must be at least 3 characters";
    return true;
};
function randomBytes() {
    return new Promise(function(resolve, reject) {
        return _crypto.default.randomBytes(32, function(err, saltBuffer) {
            return err ? reject(err) : resolve(saltBuffer);
        });
    });
}
function pbkdf2Promisified(password, salt) {
    return new Promise(function(resolve, reject) {
        return _crypto.default.pbkdf2(password, salt, 25000, 512, "sha256", function(err, hashRaw) {
            return err ? reject(err) : resolve(hashRaw);
        });
    });
}
var generatePasswordSaltHash = function() {
    var _ref = _async_to_generator(function(param) {
        var password, validationResult, saltBuffer, salt, hashRaw, hash;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    password = param.password;
                    validationResult = defaultPasswordValidator(password);
                    if (typeof validationResult === "string") {
                        throw new _errors.ValidationError([
                            {
                                message: validationResult,
                                field: "password"
                            }
                        ]);
                    }
                    return [
                        4,
                        randomBytes()
                    ];
                case 1:
                    saltBuffer = _state.sent();
                    salt = saltBuffer.toString("hex");
                    return [
                        4,
                        pbkdf2Promisified(password, salt)
                    ];
                case 2:
                    hashRaw = _state.sent();
                    hash = hashRaw.toString("hex");
                    return [
                        2,
                        {
                            salt: salt,
                            hash: hash
                        }
                    ];
            }
        });
    });
    return function generatePasswordSaltHash(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSBcIi4uLy4uLy4uL2Vycm9yc1wiXG5cbmNvbnN0IGRlZmF1bHRQYXNzd29yZFZhbGlkYXRvciA9IChwYXNzd29yZDogc3RyaW5nKTogc3RyaW5nIHwgdHJ1ZSA9PiB7XG4gIGlmICghcGFzc3dvcmQpIHJldHVybiAnTm8gcGFzc3dvcmQgd2FzIGdpdmVuJ1xuICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgMykgcmV0dXJuICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycydcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiByYW5kb21CeXRlcygpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gY3J5cHRvLnJhbmRvbUJ5dGVzKDMyLCAoZXJyLCBzYWx0QnVmZmVyKSA9PiAoZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKHNhbHRCdWZmZXIpKSkpO1xufVxuXG5mdW5jdGlvbiBwYmtkZjJQcm9taXNpZmllZChwYXNzd29yZDogc3RyaW5nLCBzYWx0OiBzdHJpbmcpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gY3J5cHRvLnBia2RmMihwYXNzd29yZCwgc2FsdCwgMjUwMDAsIDUxMiwgJ3NoYTI1NicsIChlcnIsIGhhc2hSYXcpID0+IChlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoaGFzaFJhdykpKSk7XG59XG5cbnR5cGUgQXJncyA9IHtcbiAgcGFzc3dvcmQ6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoID0gYXN5bmMgKHtcbiAgcGFzc3dvcmQsXG59OiBBcmdzKTogUHJvbWlzZTx7IHNhbHQ6IHN0cmluZywgaGFzaDogc3RyaW5nIH0+ID0+IHtcbiAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IGRlZmF1bHRQYXNzd29yZFZhbGlkYXRvcihwYXNzd29yZClcblxuICBpZiAodHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihbeyBtZXNzYWdlOiB2YWxpZGF0aW9uUmVzdWx0LCBmaWVsZDogJ3Bhc3N3b3JkJyB9XSlcbiAgfVxuXG4gIGNvbnN0IHNhbHRCdWZmZXIgPSBhd2FpdCByYW5kb21CeXRlcygpXG4gIGNvbnN0IHNhbHQgPSBzYWx0QnVmZmVyLnRvU3RyaW5nKCdoZXgnKVxuXG4gIGNvbnN0IGhhc2hSYXcgPSBhd2FpdCBwYmtkZjJQcm9taXNpZmllZChwYXNzd29yZCwgc2FsdClcbiAgY29uc3QgaGFzaCA9IGhhc2hSYXcudG9TdHJpbmcoJ2hleCcpXG5cbiAgcmV0dXJuIHsgc2FsdCwgaGFzaCB9XG59Il0sIm5hbWVzIjpbImdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCIsImRlZmF1bHRQYXNzd29yZFZhbGlkYXRvciIsInBhc3N3b3JkIiwibGVuZ3RoIiwicmFuZG9tQnl0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyeXB0byIsImVyciIsInNhbHRCdWZmZXIiLCJwYmtkZjJQcm9taXNpZmllZCIsInNhbHQiLCJwYmtkZjIiLCJoYXNoUmF3IiwidmFsaWRhdGlvblJlc3VsdCIsImhhc2giLCJWYWxpZGF0aW9uRXJyb3IiLCJtZXNzYWdlIiwiZmllbGQiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFzQmFBOzs7ZUFBQUE7Ozs2REF0Qk07c0JBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBTUMsMkJBQTJCLFNBQUNDO0lBQ2hDLElBQUksQ0FBQ0EsVUFBVSxPQUFPO0lBQ3RCLElBQUlBLFNBQVNDLE1BQU0sR0FBRyxHQUFHLE9BQU87SUFFaEMsT0FBTztBQUNUO0FBRUEsU0FBU0M7SUFDUCxPQUFPLElBQUlDLFFBQVEsU0FBQ0MsU0FBU0M7ZUFBV0MsZUFBTSxDQUFDSixXQUFXLENBQUMsSUFBSSxTQUFDSyxLQUFLQzttQkFBZ0JELE1BQU1GLE9BQU9FLE9BQU9ILFFBQVFJOzs7QUFDbkg7QUFFQSxTQUFTQyxrQkFBa0JULFFBQWdCLEVBQUVVLElBQVk7SUFDdkQsT0FBTyxJQUFJUCxRQUFRLFNBQUNDLFNBQVNDO2VBQVdDLGVBQU0sQ0FBQ0ssTUFBTSxDQUFDWCxVQUFVVSxNQUFNLE9BQU8sS0FBSyxVQUFVLFNBQUNILEtBQUtLO21CQUFhTCxNQUFNRixPQUFPRSxPQUFPSCxRQUFRUTs7O0FBQzdJO0FBTU8sSUFBTWQ7ZUFBMkIsb0JBQUE7WUFDdENFLFVBRU1hLGtCQU1BTCxZQUNBRSxNQUVBRSxTQUNBRTs7OztvQkFaTmQsaUJBQUFBO29CQUVNYSxtQkFBbUJkLHlCQUF5QkM7b0JBRWxELElBQUksT0FBT2EscUJBQXFCLFVBQVU7d0JBQ3hDLE1BQU0sSUFBSUUsdUJBQWU7NEJBQUU7Z0NBQUVDLFNBQVNIO2dDQUFrQkksT0FBTzs0QkFBVzs7b0JBQzVFO29CQUVtQjs7d0JBQU1mOzs7b0JBQW5CTSxhQUFhO29CQUNiRSxPQUFPRixXQUFXVSxRQUFRLENBQUM7b0JBRWpCOzt3QkFBTVQsa0JBQWtCVCxVQUFVVTs7O29CQUE1Q0UsVUFBVTtvQkFDVkUsT0FBT0YsUUFBUU0sUUFBUSxDQUFDO29CQUU5Qjs7d0JBQU87NEJBQUVSLE1BQUFBOzRCQUFNSSxNQUFBQTt3QkFBSzs7OztJQUN0QjtvQkFoQmFoQiJ9