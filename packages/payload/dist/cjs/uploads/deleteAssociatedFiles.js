"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "deleteAssociatedFiles", {
    enumerable: true,
    get: function() {
        return deleteAssociatedFiles;
    }
});
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _fs = /*#__PURE__*/ _interop_require_default(require("fs"));
var _errors = require("../errors");
var _fileExists = /*#__PURE__*/ _interop_require_default(require("./fileExists"));
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
var deleteAssociatedFiles = function() {
    var _ref = _async_to_generator(function(param) {
        var config, collectionConfig, _param_files, files, doc, t, overrideDelete, staticDir, staticPath, fileToDelete, err, sizes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, size, sizeToDelete, err1, err2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    config = param.config, collectionConfig = param.collectionConfig, _param_files = param.files, files = _param_files === void 0 ? [] : _param_files, doc = param.doc, t = param.t, overrideDelete = param.overrideDelete;
                    if (!collectionConfig.upload) return [
                        2
                    ];
                    if (!(overrideDelete || files.length > 0)) return [
                        3,
                        14
                    ];
                    staticDir = collectionConfig.upload.staticDir;
                    staticPath = _path.default.resolve(config.paths.configDir, staticDir);
                    fileToDelete = "".concat(staticPath, "/").concat(doc.filename);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        (0, _fileExists.default)(fileToDelete)
                    ];
                case 2:
                    if (_state.sent()) {
                        _fs.default.unlinkSync(fileToDelete);
                    }
                    return [
                        3,
                        4
                    ];
                case 3:
                    err = _state.sent();
                    throw new _errors.ErrorDeletingFile(t);
                case 4:
                    if (!doc.sizes) return [
                        3,
                        14
                    ];
                    sizes = Object.values(doc.sizes);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 5;
                case 5:
                    _state.trys.push([
                        5,
                        12,
                        13,
                        14
                    ]);
                    _iterator = sizes[Symbol.iterator]();
                    _state.label = 6;
                case 6:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        11
                    ];
                    size = _step.value;
                    sizeToDelete = "".concat(staticPath, "/").concat(size.filename);
                    _state.label = 7;
                case 7:
                    _state.trys.push([
                        7,
                        9,
                        ,
                        10
                    ]);
                    return [
                        4,
                        (0, _fileExists.default)(sizeToDelete)
                    ];
                case 8:
                    // eslint-disable-next-line no-await-in-loop
                    if (_state.sent()) {
                        _fs.default.unlinkSync(sizeToDelete);
                    }
                    return [
                        3,
                        10
                    ];
                case 9:
                    err1 = _state.sent();
                    throw new _errors.ErrorDeletingFile(t);
                case 10:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        6
                    ];
                case 11:
                    return [
                        3,
                        14
                    ];
                case 12:
                    err2 = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err2;
                    return [
                        3,
                        14
                    ];
                case 13:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 14:
                    return [
                        2
                    ];
            }
        });
    });
    return function deleteAssociatedFiles(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2RlbGV0ZUFzc29jaWF0ZWRGaWxlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgdHlwZSB7IFRGdW5jdGlvbiB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHsgRXJyb3JEZWxldGluZ0ZpbGUgfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHR5cGUgeyBGaWxlRGF0YSwgRmlsZVRvU2F2ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBmaWxlRXhpc3RzIGZyb20gJy4vZmlsZUV4aXN0cyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWdcbiAgY29sbGVjdGlvbkNvbmZpZzogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBmaWxlcz86IEZpbGVUb1NhdmVbXVxuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHQ6IFRGdW5jdGlvblxuICBvdmVycmlkZURlbGV0ZTogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQXNzb2NpYXRlZEZpbGVzOiAoYXJnczogQXJncykgPT4gUHJvbWlzZTx2b2lkPiA9IGFzeW5jICh7XG4gIGNvbmZpZyxcbiAgY29sbGVjdGlvbkNvbmZpZyxcbiAgZmlsZXMgPSBbXSxcbiAgZG9jLFxuICB0LFxuICBvdmVycmlkZURlbGV0ZSxcbn0pID0+IHtcbiAgaWYgKCFjb2xsZWN0aW9uQ29uZmlnLnVwbG9hZCkgcmV0dXJuO1xuICBpZiAob3ZlcnJpZGVEZWxldGUgfHwgZmlsZXMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHsgc3RhdGljRGlyIH0gPSBjb2xsZWN0aW9uQ29uZmlnLnVwbG9hZDtcbiAgICBjb25zdCBzdGF0aWNQYXRoID0gcGF0aC5yZXNvbHZlKGNvbmZpZy5wYXRocy5jb25maWdEaXIsIHN0YXRpY0Rpcik7XG5cbiAgICBjb25zdCBmaWxlVG9EZWxldGUgPSBgJHtzdGF0aWNQYXRofS8ke2RvYy5maWxlbmFtZX1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChhd2FpdCBmaWxlRXhpc3RzKGZpbGVUb0RlbGV0ZSkpIHtcbiAgICAgICAgZnMudW5saW5rU3luYyhmaWxlVG9EZWxldGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yRGVsZXRpbmdGaWxlKHQpO1xuICAgIH1cblxuICAgIGlmIChkb2Muc2l6ZXMpIHtcbiAgICAgIGNvbnN0IHNpemVzOiBGaWxlRGF0YVtdID0gT2JqZWN0LnZhbHVlcyhkb2Muc2l6ZXMpO1xuICAgICAgLy8gU2luY2UgZm9yRWFjaCB3aWxsIG5vdCB3YWl0IHVudGlsIHVubGluayBpcyBmaW5pc2hlZCBpdCBjb3VsZFxuICAgICAgLy8gaGFwcGVuIHRoYXQgdHdvIG9wZXJhdGlvbnMgd2lsbCB0cnkgdG8gZGVsZXRlIHRoZSBzYW1lIGZpbGUuXG4gICAgICAvLyBUbyBhdm9pZCB0aGlzIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSBcInN5bmNcIiBpbnN0ZWFkXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIGZvciAoY29uc3Qgc2l6ZSBvZiBzaXplcykge1xuICAgICAgICBjb25zdCBzaXplVG9EZWxldGUgPSBgJHtzdGF0aWNQYXRofS8ke3NpemUuZmlsZW5hbWV9YDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICAgIGlmIChhd2FpdCBmaWxlRXhpc3RzKHNpemVUb0RlbGV0ZSkpIHtcbiAgICAgICAgICAgIGZzLnVubGlua1N5bmMoc2l6ZVRvRGVsZXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvckRlbGV0aW5nRmlsZSh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJkZWxldGVBc3NvY2lhdGVkRmlsZXMiLCJjb25maWciLCJjb2xsZWN0aW9uQ29uZmlnIiwiZmlsZXMiLCJkb2MiLCJ0Iiwib3ZlcnJpZGVEZWxldGUiLCJzdGF0aWNEaXIiLCJzdGF0aWNQYXRoIiwiZmlsZVRvRGVsZXRlIiwiZXJyIiwic2l6ZXMiLCJzaXplIiwic2l6ZVRvRGVsZXRlIiwidXBsb2FkIiwibGVuZ3RoIiwicGF0aCIsInJlc29sdmUiLCJwYXRocyIsImNvbmZpZ0RpciIsImZpbGVuYW1lIiwiZmlsZUV4aXN0cyIsImZzIiwidW5saW5rU3luYyIsIkVycm9yRGVsZXRpbmdGaWxlIiwiT2JqZWN0IiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7OytCQWtCYUE7OztlQUFBQTs7OzJEQWxCSTt5REFDRjtzQkFFbUI7aUVBSVg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXaEIsSUFBTUE7ZUFBdUQsb0JBQUE7WUFDbEVDLFFBQ0FDLGdDQUNBQyxPQUNBQyxLQUNBQyxHQUNBQyxnQkFJVUMsV0FDRkMsWUFFQUMsY0FNR0MsS0FLREMsT0FLRCwyQkFBQSxtQkFBQSxnQkFBQSxXQUFBLE9BQU1DLE1BQ0hDLGNBTUdIOzs7O29CQW5DZlQsZUFBQUEsUUFDQUMseUJBQUFBLHVDQUNBQyxPQUFBQSxxREFDQUMsWUFBQUEsS0FDQUMsVUFBQUEsR0FDQUMsdUJBQUFBO29CQUVBLElBQUksQ0FBQ0osaUJBQWlCWSxNQUFNLEVBQUU7Ozt5QkFDMUJSLENBQUFBLGtCQUFrQkgsTUFBTVksTUFBTSxHQUFHLENBQUEsR0FBakNUOzs7O29CQUNNQyxZQUFjTCxpQkFBaUJZLE1BQU0sQ0FBckNQO29CQUNGQyxhQUFhUSxhQUFJLENBQUNDLE9BQU8sQ0FBQ2hCLE9BQU9pQixLQUFLLENBQUNDLFNBQVMsRUFBRVo7b0JBRWxERSxlQUFlLEFBQUMsR0FBZ0JMLE9BQWRJLFlBQVcsS0FBZ0IsT0FBYkosSUFBSWdCLFFBQVE7Ozs7Ozs7OztvQkFHNUM7O3dCQUFNQyxJQUFBQSxtQkFBVSxFQUFDWjs7O29CQUFyQixJQUFJLGVBQWdDO3dCQUNsQ2EsV0FBRSxDQUFDQyxVQUFVLENBQUNkO29CQUNoQjs7Ozs7O29CQUNPQztvQkFDUCxNQUFNLElBQUljLHlCQUFpQixDQUFDbkI7O3lCQUcxQkQsSUFBSU8sS0FBSyxFQUFUUDs7OztvQkFDSU8sUUFBb0JjLE9BQU9DLE1BQU0sQ0FBQ3RCLElBQUlPLEtBQUs7b0JBSzVDLGtDQUFBLDJCQUFBOzs7Ozs7Ozs7b0JBQUEsWUFBY0E7OzsyQkFBZCw2QkFBQSxRQUFBOzs7O29CQUFNQyxPQUFOO29CQUNHQyxlQUFlLEFBQUMsR0FBZ0JELE9BQWRKLFlBQVcsS0FBaUIsT0FBZEksS0FBS1EsUUFBUTs7Ozs7Ozs7O29CQUc3Qzs7d0JBQU1DLElBQUFBLG1CQUFVLEVBQUNSOzs7b0JBRHJCLDRDQUE0QztvQkFDNUMsSUFBSSxlQUFnQzt3QkFDbENTLFdBQUUsQ0FBQ0MsVUFBVSxDQUFDVjtvQkFDaEI7Ozs7OztvQkFDT0g7b0JBQ1AsTUFBTSxJQUFJYyx5QkFBaUIsQ0FBQ25COztvQkFSM0I7Ozs7Ozs7Ozs7OztvQkFBQTtvQkFBQTs7Ozs7Ozs2QkFBQSw2QkFBQTs0QkFBQTs7OzRCQUFBO2tDQUFBOzs7Ozs7Ozs7Ozs7SUFhWDtvQkExQ2FMIn0=