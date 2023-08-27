"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
var _filetype = /*#__PURE__*/ _interop_require_default(require("file-type"));
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
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
var fromFile = _filetype.default.fromFile;
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
                    data = _fs.default.readFileSync(filePath);
                    mimetype = fromFile(filePath);
                    size = _fs.default.statSync(filePath).size;
                    name = _path.default.basename(filePath);
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
var _default = getFileByPath;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2dldEZpbGVCeVBhdGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBmaWxldHlwZSBmcm9tICdmaWxlLXR5cGUnO1xuY29uc3QgeyBmcm9tRmlsZSB9ID0gZmlsZXR5cGU7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IEZpbGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZ2V0RmlsZUJ5UGF0aCA9IGFzeW5jIChmaWxlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxGaWxlPiA9PiB7XG4gIGlmICh0eXBlb2YgZmlsZVBhdGggPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gICAgY29uc3QgbWltZXR5cGUgPSBmcm9tRmlsZShmaWxlUGF0aCk7XG4gICAgY29uc3QgeyBzaXplIH0gPSBmcy5zdGF0U3luYyhmaWxlUGF0aCk7XG5cbiAgICBjb25zdCBuYW1lID0gcGF0aC5iYXNlbmFtZShmaWxlUGF0aCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIG1pbWV0eXBlOiAoYXdhaXQgbWltZXR5cGUpLm1pbWUsXG4gICAgICBuYW1lLFxuICAgICAgc2l6ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEZpbGVCeVBhdGg7XG4iXSwibmFtZXMiOlsiZnJvbUZpbGUiLCJmaWxldHlwZSIsImdldEZpbGVCeVBhdGgiLCJmaWxlUGF0aCIsImRhdGEiLCJtaW1ldHlwZSIsInNpemUiLCJuYW1lIiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJzdGF0U3luYyIsInBhdGgiLCJiYXNlbmFtZSIsIm1pbWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBeUJBOzs7ZUFBQTs7O3lEQXpCZTsrREFDTTsyREFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURqQixJQUFNLEFBQUVBLFdBQWFDLGlCQUFRLENBQXJCRDtBQUlSLElBQU1FO2VBQWdCLG9CQUFBLFNBQU9DO1lBRW5CQyxNQUNBQyxVQUNFQyxNQUVGQzs7Ozt5QkFMSixDQUFBLE9BQU9KLGFBQWEsUUFBTyxHQUEzQjs7OztvQkFDSUMsT0FBT0ksV0FBRSxDQUFDQyxZQUFZLENBQUNOO29CQUN2QkUsV0FBV0wsU0FBU0c7b0JBQ2xCRyxPQUFTRSxXQUFFLENBQUNFLFFBQVEsQ0FBQ1AsVUFBckJHO29CQUVGQyxPQUFPSSxhQUFJLENBQUNDLFFBQVEsQ0FBQ1Q7O3dCQUd6QkMsTUFBQUE7O29CQUNXOzt3QkFBTUM7OztvQkFGbkI7OzhCQUVFQSxXQUFVLEFBQUMsY0FBZ0JRLElBQUksT0FDL0JOLE9BQUFBLFdBQ0FELE9BQUFBOzs7b0JBSUo7O3dCQUFPUTs7OztJQUNUO29CQWpCTVosY0FBdUJDOzs7O0lBbUI3QixXQUFlRCJ9