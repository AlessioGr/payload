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
import crypto from "crypto";
import { ValidationError } from "../../../errors";
var defaultPasswordValidator = function(password) {
    if (!password) return "No password was given";
    if (password.length < 3) return "Password must be at least 3 characters";
    return true;
};
function randomBytes() {
    return new Promise(function(resolve, reject) {
        return crypto.randomBytes(32, function(err, saltBuffer) {
            return err ? reject(err) : resolve(saltBuffer);
        });
    });
}
function pbkdf2Promisified(password, salt) {
    return new Promise(function(resolve, reject) {
        return crypto.pbkdf2(password, salt, 25000, 512, "sha256", function(err, hashRaw) {
            return err ? reject(err) : resolve(hashRaw);
        });
    });
}
export var generatePasswordSaltHash = function() {
    var _ref = _async_to_generator(function(param) {
        var password, validationResult, saltBuffer, salt, hashRaw, hash;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    password = param.password;
                    validationResult = defaultPasswordValidator(password);
                    if (typeof validationResult === "string") {
                        throw new ValidationError([
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwvZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSBcIi4uLy4uLy4uL2Vycm9yc1wiXG5cbmNvbnN0IGRlZmF1bHRQYXNzd29yZFZhbGlkYXRvciA9IChwYXNzd29yZDogc3RyaW5nKTogc3RyaW5nIHwgdHJ1ZSA9PiB7XG4gIGlmICghcGFzc3dvcmQpIHJldHVybiAnTm8gcGFzc3dvcmQgd2FzIGdpdmVuJ1xuICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgMykgcmV0dXJuICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycydcblxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiByYW5kb21CeXRlcygpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gY3J5cHRvLnJhbmRvbUJ5dGVzKDMyLCAoZXJyLCBzYWx0QnVmZmVyKSA9PiAoZXJyID8gcmVqZWN0KGVycikgOiByZXNvbHZlKHNhbHRCdWZmZXIpKSkpO1xufVxuXG5mdW5jdGlvbiBwYmtkZjJQcm9taXNpZmllZChwYXNzd29yZDogc3RyaW5nLCBzYWx0OiBzdHJpbmcpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gY3J5cHRvLnBia2RmMihwYXNzd29yZCwgc2FsdCwgMjUwMDAsIDUxMiwgJ3NoYTI1NicsIChlcnIsIGhhc2hSYXcpID0+IChlcnIgPyByZWplY3QoZXJyKSA6IHJlc29sdmUoaGFzaFJhdykpKSk7XG59XG5cbnR5cGUgQXJncyA9IHtcbiAgcGFzc3dvcmQ6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoID0gYXN5bmMgKHtcbiAgcGFzc3dvcmQsXG59OiBBcmdzKTogUHJvbWlzZTx7IHNhbHQ6IHN0cmluZywgaGFzaDogc3RyaW5nIH0+ID0+IHtcbiAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IGRlZmF1bHRQYXNzd29yZFZhbGlkYXRvcihwYXNzd29yZClcblxuICBpZiAodHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcihbeyBtZXNzYWdlOiB2YWxpZGF0aW9uUmVzdWx0LCBmaWVsZDogJ3Bhc3N3b3JkJyB9XSlcbiAgfVxuXG4gIGNvbnN0IHNhbHRCdWZmZXIgPSBhd2FpdCByYW5kb21CeXRlcygpXG4gIGNvbnN0IHNhbHQgPSBzYWx0QnVmZmVyLnRvU3RyaW5nKCdoZXgnKVxuXG4gIGNvbnN0IGhhc2hSYXcgPSBhd2FpdCBwYmtkZjJQcm9taXNpZmllZChwYXNzd29yZCwgc2FsdClcbiAgY29uc3QgaGFzaCA9IGhhc2hSYXcudG9TdHJpbmcoJ2hleCcpXG5cbiAgcmV0dXJuIHsgc2FsdCwgaGFzaCB9XG59Il0sIm5hbWVzIjpbImNyeXB0byIsIlZhbGlkYXRpb25FcnJvciIsImRlZmF1bHRQYXNzd29yZFZhbGlkYXRvciIsInBhc3N3b3JkIiwibGVuZ3RoIiwicmFuZG9tQnl0ZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImVyciIsInNhbHRCdWZmZXIiLCJwYmtkZjJQcm9taXNpZmllZCIsInNhbHQiLCJwYmtkZjIiLCJoYXNoUmF3IiwiZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoIiwidmFsaWRhdGlvblJlc3VsdCIsImhhc2giLCJtZXNzYWdlIiwiZmllbGQiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFlBQVksU0FBUTtBQUMzQixTQUFTQyxlQUFlLFFBQVEsa0JBQWlCO0FBRWpELElBQU1DLDJCQUEyQixTQUFDQztJQUNoQyxJQUFJLENBQUNBLFVBQVUsT0FBTztJQUN0QixJQUFJQSxTQUFTQyxNQUFNLEdBQUcsR0FBRyxPQUFPO0lBRWhDLE9BQU87QUFDVDtBQUVBLFNBQVNDO0lBQ1AsT0FBTyxJQUFJQyxRQUFRLFNBQUNDLFNBQVNDO2VBQVdSLE9BQU9LLFdBQVcsQ0FBQyxJQUFJLFNBQUNJLEtBQUtDO21CQUFnQkQsTUFBTUQsT0FBT0MsT0FBT0YsUUFBUUc7OztBQUNuSDtBQUVBLFNBQVNDLGtCQUFrQlIsUUFBZ0IsRUFBRVMsSUFBWTtJQUN2RCxPQUFPLElBQUlOLFFBQVEsU0FBQ0MsU0FBU0M7ZUFBV1IsT0FBT2EsTUFBTSxDQUFDVixVQUFVUyxNQUFNLE9BQU8sS0FBSyxVQUFVLFNBQUNILEtBQUtLO21CQUFhTCxNQUFNRCxPQUFPQyxPQUFPRixRQUFRTzs7O0FBQzdJO0FBTUEsT0FBTyxJQUFNQztlQUEyQixvQkFBQTtZQUN0Q1osVUFFTWEsa0JBTUFOLFlBQ0FFLE1BRUFFLFNBQ0FHOzs7O29CQVpOZCxpQkFBQUE7b0JBRU1hLG1CQUFtQmQseUJBQXlCQztvQkFFbEQsSUFBSSxPQUFPYSxxQkFBcUIsVUFBVTt3QkFDeEMsTUFBTSxJQUFJZjs0QkFBaUI7Z0NBQUVpQixTQUFTRjtnQ0FBa0JHLE9BQU87NEJBQVc7O29CQUM1RTtvQkFFbUI7O3dCQUFNZDs7O29CQUFuQkssYUFBYTtvQkFDYkUsT0FBT0YsV0FBV1UsUUFBUSxDQUFDO29CQUVqQjs7d0JBQU1ULGtCQUFrQlIsVUFBVVM7OztvQkFBNUNFLFVBQVU7b0JBQ1ZHLE9BQU9ILFFBQVFNLFFBQVEsQ0FBQztvQkFFOUI7O3dCQUFPOzRCQUFFUixNQUFBQTs0QkFBTUssTUFBQUE7d0JBQUs7Ozs7SUFDdEI7b0JBaEJhRjs7O0lBZ0JaIn0=