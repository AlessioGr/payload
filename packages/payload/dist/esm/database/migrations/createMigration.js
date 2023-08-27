/* eslint-disable no-restricted-syntax, no-await-in-loop */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
import { migrationTemplate } from "./migrationTemplate";
export var createMigration = function() {
    var _createMigration = _async_to_generator(function(payload, migrationDir, migrationName) {
        var dir, _toISOString_split, yyymmdd, hhmmss, formattedDate, formattedTime, timestamp, formattedName, fileName, filePath;
        return _ts_generator(this, function(_state) {
            dir = migrationDir || ".migrations"; // TODO: Verify path after linking
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            _toISOString_split = _sliced_to_array(new Date().toISOString().split("T"), 2), yyymmdd = _toISOString_split[0], hhmmss = _toISOString_split[1];
            formattedDate = yyymmdd.replace(/\D/g, "");
            formattedTime = hhmmss.split(".")[0].replace(/\D/g, "");
            timestamp = "".concat(formattedDate, "_").concat(formattedTime);
            formattedName = migrationName.replace(/\W/g, "_");
            fileName = "".concat(timestamp, "_").concat(formattedName, ".ts");
            filePath = "".concat(dir, "/").concat(fileName);
            fs.writeFileSync(filePath, migrationTemplate);
            payload.logger.info({
                msg: "Migration created at ".concat(filePath)
            });
            return [
                2
            ];
        });
    });
    function createMigration(payload, migrationDir, migrationName) {
        return _createMigration.apply(this, arguments);
    }
    return createMigration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL2NyZWF0ZU1pZ3JhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tYXdhaXQtaW4tbG9vcCAqL1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7IG1pZ3JhdGlvblRlbXBsYXRlIH0gZnJvbSAnLi9taWdyYXRpb25UZW1wbGF0ZSc7XG5pbXBvcnQgeyBDcmVhdGVNaWdyYXRpb24gfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNaWdyYXRpb246IENyZWF0ZU1pZ3JhdGlvbiA9IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1pZ3JhdGlvbihcbiAgcGF5bG9hZCxcbiAgbWlncmF0aW9uRGlyLFxuICBtaWdyYXRpb25OYW1lLFxuKSB7XG4gIGNvbnN0IGRpciA9IG1pZ3JhdGlvbkRpciB8fCAnLm1pZ3JhdGlvbnMnOyAvLyBUT0RPOiBWZXJpZnkgcGF0aCBhZnRlciBsaW5raW5nXG4gIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XG4gICAgZnMubWtkaXJTeW5jKGRpcik7XG4gIH1cblxuICBjb25zdCBbeXl5bW1kZCwgaGhtbXNzXSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpO1xuICBjb25zdCBmb3JtYXR0ZWREYXRlID0geXl5bW1kZC5yZXBsYWNlKC9cXEQvZywgJycpO1xuICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gaGhtbXNzLnNwbGl0KCcuJylbMF0ucmVwbGFjZSgvXFxEL2csICcnKTtcblxuICBjb25zdCB0aW1lc3RhbXAgPSBgJHtmb3JtYXR0ZWREYXRlfV8ke2Zvcm1hdHRlZFRpbWV9YDtcblxuICBjb25zdCBmb3JtYXR0ZWROYW1lID0gbWlncmF0aW9uTmFtZS5yZXBsYWNlKC9cXFcvZywgJ18nKTtcbiAgY29uc3QgZmlsZU5hbWUgPSBgJHt0aW1lc3RhbXB9XyR7Zm9ybWF0dGVkTmFtZX0udHNgO1xuICBjb25zdCBmaWxlUGF0aCA9IGAke2Rpcn0vJHtmaWxlTmFtZX1gO1xuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBtaWdyYXRpb25UZW1wbGF0ZSk7XG4gIHBheWxvYWQubG9nZ2VyLmluZm8oeyBtc2c6IGBNaWdyYXRpb24gY3JlYXRlZCBhdCAke2ZpbGVQYXRofWAgfSk7XG59O1xuIl0sIm5hbWVzIjpbImZzIiwibWlncmF0aW9uVGVtcGxhdGUiLCJjcmVhdGVNaWdyYXRpb24iLCJwYXlsb2FkIiwibWlncmF0aW9uRGlyIiwibWlncmF0aW9uTmFtZSIsImRpciIsInl5eW1tZGQiLCJoaG1tc3MiLCJmb3JtYXR0ZWREYXRlIiwiZm9ybWF0dGVkVGltZSIsInRpbWVzdGFtcCIsImZvcm1hdHRlZE5hbWUiLCJmaWxlTmFtZSIsImZpbGVQYXRoIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInNwbGl0IiwicmVwbGFjZSIsIndyaXRlRmlsZVN5bmMiLCJsb2dnZXIiLCJpbmZvIiwibXNnIl0sIm1hcHBpbmdzIjoiQUFBQSx5REFBeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3pELE9BQU9BLFFBQVEsS0FBSztBQUNwQixTQUFTQyxpQkFBaUIsUUFBUSxzQkFBc0I7QUFHeEQsT0FBTyxJQUFNQztRQUFrREEsbUJBQWYsb0JBQUEsU0FDOUNDLE9BQU8sRUFDUEMsWUFBWSxFQUNaQyxhQUFhO1lBRVBDLEtBS29CLG9CQUFuQkMsU0FBU0MsUUFDVkMsZUFDQUMsZUFFQUMsV0FFQUMsZUFDQUMsVUFDQUM7O1lBYkFSLE1BQU1GLGdCQUFnQixlQUFlLGtDQUFrQztZQUM3RSxJQUFJLENBQUNKLEdBQUdlLFVBQVUsQ0FBQ1QsTUFBTTtnQkFDdkJOLEdBQUdnQixTQUFTLENBQUNWO1lBQ2Y7WUFFMEIsc0NBQUEsSUFBSVcsT0FBT0MsV0FBVyxHQUFHQyxLQUFLLENBQUMsVUFBbERaLFVBQW1CLHVCQUFWQyxTQUFVO1lBQ3BCQyxnQkFBZ0JGLFFBQVFhLE9BQU8sQ0FBQyxPQUFPO1lBQ3ZDVixnQkFBZ0JGLE9BQU9XLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUMsT0FBTztZQUVwRFQsWUFBWSxBQUFDLEdBQW1CRCxPQUFqQkQsZUFBYyxLQUFpQixPQUFkQztZQUVoQ0UsZ0JBQWdCUCxjQUFjZSxPQUFPLENBQUMsT0FBTztZQUM3Q1AsV0FBVyxBQUFDLEdBQWVELE9BQWJELFdBQVUsS0FBaUIsT0FBZEMsZUFBYztZQUN6Q0UsV0FBVyxBQUFDLEdBQVNELE9BQVBQLEtBQUksS0FBWSxPQUFUTztZQUMzQmIsR0FBR3FCLGFBQWEsQ0FBQ1AsVUFBVWI7WUFDM0JFLFFBQVFtQixNQUFNLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxBQUFDLHdCQUFnQyxPQUFUVjtZQUFXOzs7OztJQUNoRTthQXJCK0RaLGdCQUM3REMsT0FBTyxFQUNQQyxZQUFZLEVBQ1pDLGFBQWE7ZUFIZ0RIOztXQUFBQTtJQXFCN0QifQ==