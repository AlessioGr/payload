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
import filetype from "file-type";
var fromFile = filetype.fromFile;
import path from "path";
var getFileByPath = function() {
    var _ref = _async_to_generator(function(filePath) {
        var data, mimetype, size, name, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!(typeof filePath === "string")) return [
                        3,
                        2
                    ];
                    data = fs.readFileSync(filePath);
                    mimetype = fromFile(filePath);
                    size = fs.statSync(filePath).size;
                    name = path.basename(filePath);
                    _tmp = {
                        data: data
                    };
                    return [
                        4,
                        mimetype
                    ];
                case 1:
                    return [
                        2,
                        (_tmp.mimetype = _state.sent().mime, _tmp.name = name, _tmp.size = size, _tmp)
                    ];
                case 2:
                    return [
                        2,
                        undefined
                    ];
            }
        });
    });
    return function getFileByPath(filePath) {
        return _ref.apply(this, arguments);
    };
}();
export default getFileByPath;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2dldEZpbGVCeVBhdGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBmaWxldHlwZSBmcm9tICdmaWxlLXR5cGUnO1xuY29uc3QgeyBmcm9tRmlsZSB9ID0gZmlsZXR5cGU7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEZpbGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZ2V0RmlsZUJ5UGF0aCA9IGFzeW5jIChmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxGaWxlPiA9PiB7XG4gIGlmICh0eXBlb2YgZmlsZVBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gICAgY29uc3QgbWltZXR5cGUgPSBmcm9tRmlsZShmaWxlUGF0aCk7XG4gICAgY29uc3QgeyBzaXplIH0gPSBmcy5zdGF0U3luYyhmaWxlUGF0aCk7XG5cbiAgICBjb25zdCBuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIG1pbWV0eXBlOiAoYXdhaXQgbWltZXR5cGUpLm1pbWUsXG4gICAgICBuYW1lLFxuICAgICAgc2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZpbGVCeVBhdGg7XG4iXSwibmFtZXMiOlsiZnMiLCJmaWxldHlwZSIsImZyb21GaWxlIiwicGF0aCIsImdldEZpbGVCeVBhdGgiLCJmaWxlUGF0aCIsImRhdGEiLCJtaW1ldHlwZSIsInNpemUiLCJuYW1lIiwicmVhZEZpbGVTeW5jIiwic3RhdFN5bmMiLCJiYXNlbmFtZSIsIm1pbWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxRQUFRLEtBQUs7QUFDcEIsT0FBT0MsY0FBYyxZQUFZO0FBQ2pDLElBQU0sQUFBRUMsV0FBYUQsU0FBYkM7QUFDUixPQUFPQyxVQUFVLE9BQU87QUFHeEIsSUFBTUM7ZUFBZ0Isb0JBQUEsU0FBT0M7WUFFbkJDLE1BQ0FDLFVBQ0VDLE1BRUZDOzs7O3lCQUxKLENBQUEsT0FBT0osYUFBYSxRQUFPLEdBQTNCOzs7O29CQUNJQyxPQUFPTixHQUFHVSxZQUFZLENBQUNMO29CQUN2QkUsV0FBV0wsU0FBU0c7b0JBQ2xCRyxPQUFTUixHQUFHVyxRQUFRLENBQUNOLFVBQXJCRztvQkFFRkMsT0FBT04sS0FBS1MsUUFBUSxDQUFDUDs7d0JBR3pCQyxNQUFBQTs7b0JBQ1c7O3dCQUFNQzs7O29CQUZuQjs7OEJBRUVBLFdBQVUsQUFBQyxjQUFnQk0sSUFBSSxPQUMvQkosT0FBQUEsV0FDQUQsT0FBQUE7OztvQkFJSjs7d0JBQU9NOzs7O0lBQ1Q7b0JBakJNVixjQUF1QkM7Ozs7QUFtQjdCLGVBQWVELGNBQWMifQ==