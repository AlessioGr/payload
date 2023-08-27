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
import fs from "fs";
import path from "path";
/**
 * Read the migration files from disk
 */ export var readMigrationFiles = function() {
    var _ref = _async_to_generator(function(param) {
        var payload, files;
        return _ts_generator(this, function(_state) {
            payload = param.payload;
            if (!fs.existsSync(payload.db.migrationDir)) return [
                2,
                []
            ];
            files = fs.readdirSync(payload.db.migrationDir).sort().filter(function(f) {
                return f.endsWith(".ts");
            }).map(function(file) {
                return path.resolve(payload.db.migrationDir, file);
            });
            return [
                2,
                files.map(function(filePath) {
                    var _path_basename_split;
                    // eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-dynamic-require
                    var migration = require(filePath);
                    migration.name = (_path_basename_split = path.basename(filePath).split(".")) === null || _path_basename_split === void 0 ? void 0 : _path_basename_split[0];
                    return migration;
                })
            ];
        });
    });
    return function readMigrationFiles(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL3JlYWRNaWdyYXRpb25GaWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBNaWdyYXRpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vaW5kZXgnO1xuXG4vKipcbiAqIFJlYWQgdGhlIG1pZ3JhdGlvbiBmaWxlcyBmcm9tIGRpc2tcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRNaWdyYXRpb25GaWxlcyA9IGFzeW5jICh7XG4gIHBheWxvYWQsXG59OiB7XG4gIHBheWxvYWQ6IFBheWxvYWQ7XG59KTogUHJvbWlzZTxNaWdyYXRpb25bXT4gPT4ge1xuICBpZiAoIWZzLmV4aXN0c1N5bmMocGF5bG9hZC5kYi5taWdyYXRpb25EaXIpKSByZXR1cm4gW107XG5cbiAgY29uc3QgZmlsZXMgPSBmc1xuICAgIC5yZWFkZGlyU3luYyhwYXlsb2FkLmRiLm1pZ3JhdGlvbkRpcilcbiAgICAuc29ydCgpXG4gICAgLmZpbHRlcigoZikgPT4gZi5lbmRzV2l0aCgnLnRzJykpXG4gICAgLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShwYXlsb2FkLmRiLm1pZ3JhdGlvbkRpciwgZmlsZSk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIGZpbGVzLm1hcCgoZmlsZVBhdGgpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcyxpbXBvcnQvbm8tZHluYW1pYy1yZXF1aXJlXG4gICAgY29uc3QgbWlncmF0aW9uID0gcmVxdWlyZShmaWxlUGF0aCkgYXMgTWlncmF0aW9uO1xuICAgIG1pZ3JhdGlvbi5uYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aCkuc3BsaXQoJy4nKT8uWzBdO1xuICAgIHJldHVybiBtaWdyYXRpb247XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJyZWFkTWlncmF0aW9uRmlsZXMiLCJwYXlsb2FkIiwiZmlsZXMiLCJleGlzdHNTeW5jIiwiZGIiLCJtaWdyYXRpb25EaXIiLCJyZWFkZGlyU3luYyIsInNvcnQiLCJmaWx0ZXIiLCJmIiwiZW5kc1dpdGgiLCJtYXAiLCJmaWxlIiwicmVzb2x2ZSIsImZpbGVQYXRoIiwibWlncmF0aW9uIiwicmVxdWlyZSIsIm5hbWUiLCJiYXNlbmFtZSIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsUUFBUSxLQUFLO0FBQ3BCLE9BQU9DLFVBQVUsT0FBTztBQUl4Qjs7Q0FFQyxHQUNELE9BQU8sSUFBTUM7ZUFBcUIsb0JBQUE7WUFDaENDLFNBTU1DOztZQU5ORCxnQkFBQUE7WUFJQSxJQUFJLENBQUNILEdBQUdLLFVBQVUsQ0FBQ0YsUUFBUUcsRUFBRSxDQUFDQyxZQUFZLEdBQUc7Ozs7WUFFdkNILFFBQVFKLEdBQ1hRLFdBQVcsQ0FBQ0wsUUFBUUcsRUFBRSxDQUFDQyxZQUFZLEVBQ25DRSxJQUFJLEdBQ0pDLE1BQU0sQ0FBQyxTQUFDQzt1QkFBTUEsRUFBRUMsUUFBUSxDQUFDO2VBQ3pCQyxHQUFHLENBQUMsU0FBQ0M7Z0JBQ0osT0FBT2IsS0FBS2MsT0FBTyxDQUFDWixRQUFRRyxFQUFFLENBQUNDLFlBQVksRUFBRU87WUFDL0M7WUFFRjs7Z0JBQU9WLE1BQU1TLEdBQUcsQ0FBQyxTQUFDRzt3QkFHQ2Y7b0JBRmpCLHdGQUF3RjtvQkFDeEYsSUFBTWdCLFlBQVlDLFFBQVFGO29CQUMxQkMsVUFBVUUsSUFBSSxJQUFHbEIsdUJBQUFBLEtBQUttQixRQUFRLENBQUNKLFVBQVVLLEtBQUssQ0FBQyxrQkFBOUJwQiwyQ0FBQUEsb0JBQW9DLENBQUMsRUFBRTtvQkFDeEQsT0FBT2dCO2dCQUNUOzs7SUFDRjtvQkFyQmFmOzs7SUFxQlgifQ==