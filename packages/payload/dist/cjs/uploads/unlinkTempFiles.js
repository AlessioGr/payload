"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unlinkTempFiles", {
    enumerable: true,
    get: function() {
        return unlinkTempFiles;
    }
});
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
var _util = require("util");
var _mapAsync = require("../utilities/mapAsync");
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
var unlinkFile = (0, _util.promisify)(_fs.default.unlink);
var unlinkTempFiles = function() {
    var _ref = _async_to_generator(function(param) {
        var req, config, collectionConfig, _config_upload, files, fileArray;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req = param.req, config = param.config, collectionConfig = param.collectionConfig;
                    if (!(((_config_upload = config.upload) === null || _config_upload === void 0 ? void 0 : _config_upload.useTempFiles) && collectionConfig.upload)) return [
                        3,
                        2
                    ];
                    files = req.files;
                    fileArray = Array.isArray(files) ? files : [
                        files
                    ];
                    return [
                        4,
                        (0, _mapAsync.mapAsync)(fileArray, function() {
                            var _ref = _async_to_generator(function(param) {
                                var file, _file;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            file = param.file;
                                            if (!((_file = file) === null || _file === void 0 ? void 0 : _file.tempFilePath)) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                unlinkFile(file.tempFilePath)
                                            ];
                                        case 1:
                                            _state.sent();
                                            _state.label = 2;
                                        case 2:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }())
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return function unlinkTempFiles(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL3VubGlua1RlbXBGaWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgcHJvbWlzaWZ5IH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBtYXBBc3luYyB9IGZyb20gJy4uL3V0aWxpdGllcy9tYXBBc3luYyc7XG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuXG5jb25zdCB1bmxpbmtGaWxlID0gcHJvbWlzaWZ5KGZzLnVubGluayk7XG5cbnR5cGUgQXJncyA9IHtcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBjb25maWc6IFNhbml0aXplZENvbmZpZ1xuICBjb2xsZWN0aW9uQ29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnXG59XG4vKipcbiAqIFJlbW92ZSB0ZW1wIGZpbGVzIGlmIGVuYWJsZWQsIGFzIGV4cHJlc3MtZmlsZXVwbG9hZCBkb2VzIG5vdCBkbyB0aGlzIGF1dG9tYXRpY2FsbHlcbiAqL1xuZXhwb3J0IGNvbnN0IHVubGlua1RlbXBGaWxlczogKGFyZ3M6IEFyZ3MpID0+IFByb21pc2U8dm9pZD4gPSBhc3luYyAoe1xuICByZXEsXG4gIGNvbmZpZyxcbiAgY29sbGVjdGlvbkNvbmZpZyxcbn0pID0+IHtcbiAgaWYgKGNvbmZpZy51cGxvYWQ/LnVzZVRlbXBGaWxlcyAmJiBjb2xsZWN0aW9uQ29uZmlnLnVwbG9hZCkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IHJlcTtcbiAgICBjb25zdCBmaWxlQXJyYXkgPSBBcnJheS5pc0FycmF5KGZpbGVzKSA/IGZpbGVzIDogW2ZpbGVzXTtcbiAgICBhd2FpdCBtYXBBc3luYyhmaWxlQXJyYXksIGFzeW5jICh7IGZpbGUgfSkgPT4ge1xuICAgICAgLy8gU3RpbGwgbmVlZCB0aGlzIGNoZWNrIGJlY2F1c2UgdGhpcyB3aWxsIG5vdCBiZSBwb3B1bGF0ZWQgaWYgdXNpbmcgbG9jYWwgQVBJXG4gICAgICBpZiAoZmlsZT8udGVtcEZpbGVQYXRoKSB7XG4gICAgICAgIGF3YWl0IHVubGlua0ZpbGUoZmlsZS50ZW1wRmlsZVBhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInVubGlua1RlbXBGaWxlcyIsInVubGlua0ZpbGUiLCJwcm9taXNpZnkiLCJmcyIsInVubGluayIsInJlcSIsImNvbmZpZyIsImNvbGxlY3Rpb25Db25maWciLCJmaWxlcyIsImZpbGVBcnJheSIsInVwbG9hZCIsInVzZVRlbXBGaWxlcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcEFzeW5jIiwiZmlsZSIsInRlbXBGaWxlUGF0aCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQmFBOzs7ZUFBQUE7Ozt5REFqQkU7b0JBQ1c7d0JBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekIsSUFBTUMsYUFBYUMsSUFBQUEsZUFBUyxFQUFDQyxXQUFFLENBQUNDLE1BQU07QUFVL0IsSUFBTUo7ZUFBaUQsb0JBQUE7WUFDNURLLEtBQ0FDLFFBQ0FDLGtCQUVJRCxnQkFDTUUsT0FDRkM7Ozs7b0JBTlJKLFlBQUFBLEtBQ0FDLGVBQUFBLFFBQ0FDLHlCQUFBQTt5QkFFSUQsQ0FBQUEsRUFBQUEsaUJBQUFBLE9BQU9JLE1BQU0sY0FBYkoscUNBQUFBLGVBQWVLLFlBQVksS0FBSUosaUJBQWlCRyxNQUFNLEFBQUQsR0FBckRKOzs7O29CQUNNRSxRQUFVSCxJQUFWRztvQkFDRkMsWUFBWUcsTUFBTUMsT0FBTyxDQUFDTCxTQUFTQTt3QkFBU0E7O29CQUNsRDs7d0JBQU1NLElBQUFBLGtCQUFRLEVBQUNMO3VDQUFXLG9CQUFBO29DQUFTTSxNQUU3QkE7Ozs7NENBRjZCQSxhQUFBQTttREFFN0JBLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTUMsWUFBWTs7Ozs0Q0FDcEI7O2dEQUFNZixXQUFXYyxLQUFLQyxZQUFZOzs7NENBQWxDOzs7Ozs7Ozs0QkFFSjs7Ozs7OztvQkFMQTs7Ozs7Ozs7SUFPSjtvQkFmYWhCIn0=