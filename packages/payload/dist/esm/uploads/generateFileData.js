function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
import filetype from "file-type";
var fromBuffer = filetype.fromBuffer;
import mkdirp from "mkdirp";
import path from "path";
import sanitize from "sanitize-filename";
import sharp from "sharp";
import { FileUploadError, MissingFile } from "../errors";
import getImageSize from "./getImageSize";
import getSafeFileName from "./getSafeFilename";
import resizeAndTransformImageSizes from "./imageResizer";
import canResizeImage from "./canResizeImage";
import isImage from "./isImage";
export var generateFileData = function() {
    var _ref = _async_to_generator(function(param) {
        var config, _param_collection, collectionConfig, req, data, throwOnMissingFile, overwriteExistingFiles, file, _collectionConfig_upload, staticDir, imageSizes, disableLocalStorage, resizeOptions, formatOptions, trimOptions, staticPath, newData, filesToSave, fileData, fileIsAnimated, _fileBuffer, fileSupportsResize, fsSafeName, sharpFile, dimensions, fileBuffer, ext, mime, sharpOptions, metadata, ref, baseFilename, _filesToSave, _ref, sizeData, sizesToSave, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    config = param.config, _param_collection = param.collection, collectionConfig = _param_collection.config, req = param.req, data = param.data, throwOnMissingFile = param.throwOnMissingFile, overwriteExistingFiles = param.overwriteExistingFiles;
                    if (!collectionConfig.upload) {
                        return [
                            2,
                            {
                                data: data,
                                files: []
                            }
                        ];
                    }
                    file = (req.files || {}).file;
                    if (!file) {
                        if (throwOnMissingFile) throw new MissingFile(req.t);
                        return [
                            2,
                            {
                                data: data,
                                files: []
                            }
                        ];
                    }
                    _collectionConfig_upload = collectionConfig.upload, staticDir = _collectionConfig_upload.staticDir, imageSizes = _collectionConfig_upload.imageSizes, disableLocalStorage = _collectionConfig_upload.disableLocalStorage, resizeOptions = _collectionConfig_upload.resizeOptions, formatOptions = _collectionConfig_upload.formatOptions, trimOptions = _collectionConfig_upload.trimOptions;
                    staticPath = staticDir;
                    if (staticDir.indexOf("/") !== 0) {
                        staticPath = path.resolve(config.paths.configDir, staticDir);
                    }
                    if (!disableLocalStorage) {
                        mkdirp.sync(staticPath);
                    }
                    newData = data;
                    filesToSave = [];
                    fileData = {};
                    fileIsAnimated = file.mimetype === "image/gif" || file.mimetype === "image/webp";
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        13,
                        ,
                        14
                    ]);
                    fileSupportsResize = canResizeImage(file.mimetype);
                    sharpOptions = {};
                    if (fileIsAnimated) sharpOptions.animated = true;
                    if (fileSupportsResize && (resizeOptions || formatOptions || trimOptions)) {
                        if (file.tempFilePath) {
                            sharpFile = sharp(file.tempFilePath, sharpOptions).rotate(); // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
                        } else {
                            sharpFile = sharp(file.data, sharpOptions).rotate(); // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
                        }
                        if (resizeOptions) {
                            sharpFile = sharpFile.resize(resizeOptions);
                        }
                        if (formatOptions) {
                            sharpFile = sharpFile.toFormat(formatOptions.format, formatOptions.options);
                        }
                        if (trimOptions) {
                            sharpFile = sharpFile.trim(trimOptions);
                        }
                    }
                    if (!isImage(file.mimetype)) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        getImageSize(file)
                    ];
                case 2:
                    dimensions = _state.sent();
                    fileData.width = dimensions.width;
                    fileData.height = dimensions.height;
                    _state.label = 3;
                case 3:
                    if (!sharpFile) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        sharpFile.metadata()
                    ];
                case 4:
                    metadata = _state.sent();
                    return [
                        4,
                        sharpFile.toBuffer({
                            resolveWithObject: true
                        })
                    ];
                case 5:
                    fileBuffer = _state.sent();
                    return [
                        4,
                        fromBuffer(fileBuffer.data)
                    ];
                case 6:
                    ref = _state.sent(), mime = ref.mime, ext = ref.ext, ref; // This is getting an incorrect gif height back.
                    fileData.width = fileBuffer.info.width;
                    fileData.height = fileBuffer.info.height;
                    fileData.filesize = fileBuffer.info.size;
                    // Animated GIFs + WebP aggregate the height from every frame, so we need to use divide by number of pages
                    if (metadata.pages) {
                        fileData.height = fileBuffer.info.height / metadata.pages;
                        fileData.filesize = fileBuffer.data.length;
                    }
                    return [
                        3,
                        8
                    ];
                case 7:
                    mime = file.mimetype;
                    fileData.filesize = file.size;
                    if (file.name.includes(".")) {
                        ext = file.name.split(".").pop();
                    } else {
                        ext = "";
                    }
                    _state.label = 8;
                case 8:
                    // Adust SVG mime type. fromBuffer modifies it.
                    if (mime === "application/xml" && ext === "svg") mime = "image/svg+xml";
                    fileData.mimeType = mime;
                    baseFilename = sanitize(file.name.substring(0, file.name.lastIndexOf(".")) || file.name);
                    fsSafeName = "".concat(baseFilename).concat(ext ? ".".concat(ext) : "");
                    if (!!overwriteExistingFiles) return [
                        3,
                        10
                    ];
                    return [
                        4,
                        getSafeFileName(req.payload, collectionConfig.slug, staticPath, fsSafeName)
                    ];
                case 9:
                    fsSafeName = _state.sent();
                    _state.label = 10;
                case 10:
                    fileData.filename = fsSafeName;
                    // Original file
                    filesToSave.push({
                        path: "".concat(staticPath, "/").concat(fsSafeName),
                        buffer: ((_fileBuffer = fileBuffer) === null || _fileBuffer === void 0 ? void 0 : _fileBuffer.data) || file.data
                    });
                    if (!(Array.isArray(imageSizes) && fileSupportsResize)) return [
                        3,
                        12
                    ];
                    req.payloadUploadSizes = {};
                    return [
                        4,
                        resizeAndTransformImageSizes({
                            req: req,
                            file: file,
                            dimensions: dimensions,
                            staticPath: staticPath,
                            config: collectionConfig,
                            savedFilename: fsSafeName || file.name,
                            mimeType: fileData.mimeType
                        })
                    ];
                case 11:
                    _ref = _state.sent(), sizeData = _ref.sizeData, sizesToSave = _ref.sizesToSave;
                    fileData.sizes = sizeData;
                    (_filesToSave = filesToSave).push.apply(_filesToSave, _to_consumable_array(sizesToSave));
                    _state.label = 12;
                case 12:
                    return [
                        3,
                        14
                    ];
                case 13:
                    err = _state.sent();
                    console.error(err);
                    throw new FileUploadError(req.t);
                case 14:
                    newData = _object_spread({}, newData, fileData);
                    return [
                        2,
                        {
                            data: newData,
                            files: filesToSave
                        }
                    ];
            }
        });
    });
    return function generateFileData(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2dlbmVyYXRlRmlsZURhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpbGV0eXBlIGZyb20gJ2ZpbGUtdHlwZSc7XG5jb25zdCB7IGZyb21CdWZmZXIgfSA9IGZpbGV0eXBlO1xuaW1wb3J0IG1rZGlycCBmcm9tICdta2RpcnAnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgc2FuaXRpemUgZnJvbSAnc2FuaXRpemUtZmlsZW5hbWUnO1xuaW1wb3J0IHNoYXJwLCB7IFNoYXJwIH0gZnJvbSAnc2hhcnAnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgRmlsZVVwbG9hZEVycm9yLCBNaXNzaW5nRmlsZSB9IGZyb20gJy4uL2Vycm9ycyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IGdldEltYWdlU2l6ZSBmcm9tICcuL2dldEltYWdlU2l6ZSc7XG5pbXBvcnQgZ2V0U2FmZUZpbGVOYW1lIGZyb20gJy4vZ2V0U2FmZUZpbGVuYW1lJztcbmltcG9ydCByZXNpemVBbmRUcmFuc2Zvcm1JbWFnZVNpemVzIGZyb20gJy4vaW1hZ2VSZXNpemVyJztcbmltcG9ydCB7IEZpbGVEYXRhLCBGaWxlVG9TYXZlLCBQcm9iZWRJbWFnZVNpemUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjYW5SZXNpemVJbWFnZSBmcm9tICcuL2NhblJlc2l6ZUltYWdlJztcbmltcG9ydCBpc0ltYWdlIGZyb20gJy4vaXNJbWFnZSc7XG5cbnR5cGUgQXJnczxUPiA9IHtcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb25maWcsXG4gIGNvbGxlY3Rpb246IENvbGxlY3Rpb25cbiAgdGhyb3dPbk1pc3NpbmdGaWxlPzogYm9vbGVhblxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIGRhdGE6IFRcbiAgb3ZlcndyaXRlRXhpc3RpbmdGaWxlcz86IGJvb2xlYW5cbn1cblxudHlwZSBSZXN1bHQ8VD4gPSBQcm9taXNlPHtcbiAgZGF0YTogVFxuICBmaWxlczogRmlsZVRvU2F2ZVtdXG59PlxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVGaWxlRGF0YSA9IGFzeW5jIDxUPih7XG4gIGNvbmZpZyxcbiAgY29sbGVjdGlvbjoge1xuICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgfSxcbiAgcmVxLFxuICBkYXRhLFxuICB0aHJvd09uTWlzc2luZ0ZpbGUsXG4gIG92ZXJ3cml0ZUV4aXN0aW5nRmlsZXMsXG59OiBBcmdzPFQ+KTogUmVzdWx0PFQ+ID0+IHtcbiAgaWYgKCFjb2xsZWN0aW9uQ29uZmlnLnVwbG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhLFxuICAgICAgZmlsZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IGZpbGUgfSA9IHJlcS5maWxlcyB8fCB7fTtcbiAgaWYgKCFmaWxlKSB7XG4gICAgaWYgKHRocm93T25NaXNzaW5nRmlsZSkgdGhyb3cgbmV3IE1pc3NpbmdGaWxlKHJlcS50KTtcblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhLFxuICAgICAgZmlsZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCB7IHN0YXRpY0RpciwgaW1hZ2VTaXplcywgZGlzYWJsZUxvY2FsU3RvcmFnZSwgcmVzaXplT3B0aW9ucywgZm9ybWF0T3B0aW9ucywgdHJpbU9wdGlvbnMgfSA9IGNvbGxlY3Rpb25Db25maWcudXBsb2FkO1xuXG4gIGxldCBzdGF0aWNQYXRoID0gc3RhdGljRGlyO1xuICBpZiAoc3RhdGljRGlyLmluZGV4T2YoJy8nKSAhPT0gMCkge1xuICAgIHN0YXRpY1BhdGggPSBwYXRoLnJlc29sdmUoY29uZmlnLnBhdGhzLmNvbmZpZ0Rpciwgc3RhdGljRGlyKTtcbiAgfVxuXG4gIGlmICghZGlzYWJsZUxvY2FsU3RvcmFnZSkge1xuICAgIG1rZGlycC5zeW5jKHN0YXRpY1BhdGgpO1xuICB9XG5cbiAgbGV0IG5ld0RhdGEgPSBkYXRhO1xuICBjb25zdCBmaWxlc1RvU2F2ZTogRmlsZVRvU2F2ZVtdID0gW107XG4gIGNvbnN0IGZpbGVEYXRhOiBQYXJ0aWFsPEZpbGVEYXRhPiA9IHt9O1xuICBjb25zdCBmaWxlSXNBbmltYXRlZCA9IChmaWxlLm1pbWV0eXBlID09PSAnaW1hZ2UvZ2lmJykgfHwgKGZpbGUubWltZXR5cGUgPT09ICdpbWFnZS93ZWJwJyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBmaWxlU3VwcG9ydHNSZXNpemUgPSBjYW5SZXNpemVJbWFnZShmaWxlLm1pbWV0eXBlKTtcbiAgICBsZXQgZnNTYWZlTmFtZTogc3RyaW5nO1xuICAgIGxldCBzaGFycEZpbGU6IFNoYXJwIHwgdW5kZWZpbmVkO1xuICAgIGxldCBkaW1lbnNpb25zOiBQcm9iZWRJbWFnZVNpemUgfCB1bmRlZmluZWQ7XG4gICAgbGV0IGZpbGVCdWZmZXI7XG4gICAgbGV0IGV4dDtcbiAgICBsZXQgbWltZTogc3RyaW5nO1xuXG4gICAgY29uc3Qgc2hhcnBPcHRpb25zOiBzaGFycC5TaGFycE9wdGlvbnMgPSB7fTtcblxuICAgIGlmIChmaWxlSXNBbmltYXRlZCkgc2hhcnBPcHRpb25zLmFuaW1hdGVkID0gdHJ1ZTtcblxuICAgIGlmIChmaWxlU3VwcG9ydHNSZXNpemUgJiYgKHJlc2l6ZU9wdGlvbnMgfHwgZm9ybWF0T3B0aW9ucyB8fCB0cmltT3B0aW9ucykpIHtcbiAgICAgIGlmIChmaWxlLnRlbXBGaWxlUGF0aCkge1xuICAgICAgICBzaGFycEZpbGUgPSBzaGFycChmaWxlLnRlbXBGaWxlUGF0aCwgc2hhcnBPcHRpb25zKS5yb3RhdGUoKTsgLy8gcGFzcyByb3RhdGUoKSB0byBhdXRvLXJvdGF0ZSBiYXNlZCBvbiBFWElGIGRhdGEuIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXlsb2FkY21zL3BheWxvYWQvcHVsbC8zMDgxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaGFycEZpbGUgPSBzaGFycChmaWxlLmRhdGEsIHNoYXJwT3B0aW9ucykucm90YXRlKCk7IC8vIHBhc3Mgcm90YXRlKCkgdG8gYXV0by1yb3RhdGUgYmFzZWQgb24gRVhJRiBkYXRhLiBodHRwczovL2dpdGh1Yi5jb20vcGF5bG9hZGNtcy9wYXlsb2FkL3B1bGwvMzA4MVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzaXplT3B0aW9ucykge1xuICAgICAgICBzaGFycEZpbGUgPSBzaGFycEZpbGVcbiAgICAgICAgICAucmVzaXplKHJlc2l6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgaWYgKGZvcm1hdE9wdGlvbnMpIHtcbiAgICAgICAgc2hhcnBGaWxlID0gc2hhcnBGaWxlLnRvRm9ybWF0KGZvcm1hdE9wdGlvbnMuZm9ybWF0LCBmb3JtYXRPcHRpb25zLm9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgaWYgKHRyaW1PcHRpb25zKSB7XG4gICAgICAgIHNoYXJwRmlsZSA9IHNoYXJwRmlsZS50cmltKHRyaW1PcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNJbWFnZShmaWxlLm1pbWV0eXBlKSkge1xuICAgICAgZGltZW5zaW9ucyA9IGF3YWl0IGdldEltYWdlU2l6ZShmaWxlKTtcbiAgICAgIGZpbGVEYXRhLndpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgIGZpbGVEYXRhLmhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChzaGFycEZpbGUpIHtcbiAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgc2hhcnBGaWxlLm1ldGFkYXRhKCk7XG4gICAgICBmaWxlQnVmZmVyID0gYXdhaXQgc2hhcnBGaWxlLnRvQnVmZmVyKHsgcmVzb2x2ZVdpdGhPYmplY3Q6IHRydWUgfSk7XG4gICAgICAoeyBtaW1lLCBleHQgfSA9IGF3YWl0IGZyb21CdWZmZXIoZmlsZUJ1ZmZlci5kYXRhKSk7IC8vIFRoaXMgaXMgZ2V0dGluZyBhbiBpbmNvcnJlY3QgZ2lmIGhlaWdodCBiYWNrLlxuICAgICAgZmlsZURhdGEud2lkdGggPSBmaWxlQnVmZmVyLmluZm8ud2lkdGg7XG4gICAgICBmaWxlRGF0YS5oZWlnaHQgPSBmaWxlQnVmZmVyLmluZm8uaGVpZ2h0O1xuICAgICAgZmlsZURhdGEuZmlsZXNpemUgPSBmaWxlQnVmZmVyLmluZm8uc2l6ZTtcblxuICAgICAgLy8gQW5pbWF0ZWQgR0lGcyArIFdlYlAgYWdncmVnYXRlIHRoZSBoZWlnaHQgZnJvbSBldmVyeSBmcmFtZSwgc28gd2UgbmVlZCB0byB1c2UgZGl2aWRlIGJ5IG51bWJlciBvZiBwYWdlc1xuICAgICAgaWYgKG1ldGFkYXRhLnBhZ2VzKSB7XG4gICAgICAgIGZpbGVEYXRhLmhlaWdodCA9IGZpbGVCdWZmZXIuaW5mby5oZWlnaHQgLyBtZXRhZGF0YS5wYWdlcztcbiAgICAgICAgZmlsZURhdGEuZmlsZXNpemUgPSBmaWxlQnVmZmVyLmRhdGEubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBtaW1lID0gZmlsZS5taW1ldHlwZTtcbiAgICAgIGZpbGVEYXRhLmZpbGVzaXplID0gZmlsZS5zaXplO1xuXG4gICAgICBpZiAoZmlsZS5uYW1lLmluY2x1ZGVzKCcuJykpIHtcbiAgICAgICAgZXh0ID0gZmlsZS5uYW1lLnNwbGl0KCcuJykucG9wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleHQgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZHVzdCBTVkcgbWltZSB0eXBlLiBmcm9tQnVmZmVyIG1vZGlmaWVzIGl0LlxuICAgIGlmIChtaW1lID09PSAnYXBwbGljYXRpb24veG1sJyAmJiBleHQgPT09ICdzdmcnKSBtaW1lID0gJ2ltYWdlL3N2Zyt4bWwnO1xuICAgIGZpbGVEYXRhLm1pbWVUeXBlID0gbWltZTtcblxuICAgIGNvbnN0IGJhc2VGaWxlbmFtZSA9IHNhbml0aXplKGZpbGUubmFtZS5zdWJzdHJpbmcoMCwgZmlsZS5uYW1lLmxhc3RJbmRleE9mKCcuJykpIHx8IGZpbGUubmFtZSk7XG4gICAgZnNTYWZlTmFtZSA9IGAke2Jhc2VGaWxlbmFtZX0ke2V4dCA/IGAuJHtleHR9YCA6ICcnfWA7XG5cbiAgICBpZiAoIW92ZXJ3cml0ZUV4aXN0aW5nRmlsZXMpIHtcbiAgICAgIGZzU2FmZU5hbWUgPSBhd2FpdCBnZXRTYWZlRmlsZU5hbWUocmVxLnBheWxvYWQsIGNvbGxlY3Rpb25Db25maWcuc2x1Zywgc3RhdGljUGF0aCwgZnNTYWZlTmFtZSk7XG4gICAgfVxuXG4gICAgZmlsZURhdGEuZmlsZW5hbWUgPSBmc1NhZmVOYW1lO1xuXG4gICAgLy8gT3JpZ2luYWwgZmlsZVxuICAgIGZpbGVzVG9TYXZlLnB1c2goe1xuICAgICAgcGF0aDogYCR7c3RhdGljUGF0aH0vJHtmc1NhZmVOYW1lfWAsXG4gICAgICBidWZmZXI6IGZpbGVCdWZmZXI/LmRhdGEgfHwgZmlsZS5kYXRhLFxuICAgIH0pO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW1hZ2VTaXplcykgJiYgZmlsZVN1cHBvcnRzUmVzaXplKSB7XG4gICAgICByZXEucGF5bG9hZFVwbG9hZFNpemVzID0ge307XG5cbiAgICAgIGNvbnN0IHsgc2l6ZURhdGEsIHNpemVzVG9TYXZlIH0gPSBhd2FpdCByZXNpemVBbmRUcmFuc2Zvcm1JbWFnZVNpemVzKHtcbiAgICAgICAgcmVxLFxuICAgICAgICBmaWxlLFxuICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgICBzdGF0aWNQYXRoLFxuICAgICAgICBjb25maWc6IGNvbGxlY3Rpb25Db25maWcsXG4gICAgICAgIHNhdmVkRmlsZW5hbWU6IGZzU2FmZU5hbWUgfHwgZmlsZS5uYW1lLFxuICAgICAgICBtaW1lVHlwZTogZmlsZURhdGEubWltZVR5cGUsXG4gICAgICB9KTtcblxuICAgICAgZmlsZURhdGEuc2l6ZXMgPSBzaXplRGF0YTtcbiAgICAgIGZpbGVzVG9TYXZlLnB1c2goLi4uc2l6ZXNUb1NhdmUpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHRocm93IG5ldyBGaWxlVXBsb2FkRXJyb3IocmVxLnQpO1xuICB9XG5cbiAgbmV3RGF0YSA9IHtcbiAgICAuLi5uZXdEYXRhLFxuICAgIC4uLmZpbGVEYXRhLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZGF0YTogbmV3RGF0YSxcbiAgICBmaWxlczogZmlsZXNUb1NhdmUsXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbImZpbGV0eXBlIiwiZnJvbUJ1ZmZlciIsIm1rZGlycCIsInBhdGgiLCJzYW5pdGl6ZSIsInNoYXJwIiwiRmlsZVVwbG9hZEVycm9yIiwiTWlzc2luZ0ZpbGUiLCJnZXRJbWFnZVNpemUiLCJnZXRTYWZlRmlsZU5hbWUiLCJyZXNpemVBbmRUcmFuc2Zvcm1JbWFnZVNpemVzIiwiY2FuUmVzaXplSW1hZ2UiLCJpc0ltYWdlIiwiZ2VuZXJhdGVGaWxlRGF0YSIsImNvbmZpZyIsImNvbGxlY3Rpb25Db25maWciLCJyZXEiLCJkYXRhIiwidGhyb3dPbk1pc3NpbmdGaWxlIiwib3ZlcndyaXRlRXhpc3RpbmdGaWxlcyIsImZpbGUiLCJzdGF0aWNEaXIiLCJpbWFnZVNpemVzIiwiZGlzYWJsZUxvY2FsU3RvcmFnZSIsInJlc2l6ZU9wdGlvbnMiLCJmb3JtYXRPcHRpb25zIiwidHJpbU9wdGlvbnMiLCJzdGF0aWNQYXRoIiwibmV3RGF0YSIsImZpbGVzVG9TYXZlIiwiZmlsZURhdGEiLCJmaWxlSXNBbmltYXRlZCIsImZpbGVCdWZmZXIiLCJmaWxlU3VwcG9ydHNSZXNpemUiLCJmc1NhZmVOYW1lIiwic2hhcnBGaWxlIiwiZGltZW5zaW9ucyIsImV4dCIsIm1pbWUiLCJzaGFycE9wdGlvbnMiLCJtZXRhZGF0YSIsImJhc2VGaWxlbmFtZSIsInNpemVEYXRhIiwic2l6ZXNUb1NhdmUiLCJlcnIiLCJjb2xsZWN0aW9uIiwidXBsb2FkIiwiZmlsZXMiLCJ0IiwiaW5kZXhPZiIsInJlc29sdmUiLCJwYXRocyIsImNvbmZpZ0RpciIsInN5bmMiLCJtaW1ldHlwZSIsImFuaW1hdGVkIiwidGVtcEZpbGVQYXRoIiwicm90YXRlIiwicmVzaXplIiwidG9Gb3JtYXQiLCJmb3JtYXQiLCJvcHRpb25zIiwidHJpbSIsIndpZHRoIiwiaGVpZ2h0IiwidG9CdWZmZXIiLCJyZXNvbHZlV2l0aE9iamVjdCIsImluZm8iLCJmaWxlc2l6ZSIsInNpemUiLCJwYWdlcyIsImxlbmd0aCIsIm5hbWUiLCJpbmNsdWRlcyIsInNwbGl0IiwicG9wIiwibWltZVR5cGUiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsInBheWxvYWQiLCJzbHVnIiwiZmlsZW5hbWUiLCJwdXNoIiwiYnVmZmVyIiwiQXJyYXkiLCJpc0FycmF5IiwicGF5bG9hZFVwbG9hZFNpemVzIiwic2F2ZWRGaWxlbmFtZSIsInNpemVzIiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxjQUFjLFlBQVk7QUFDakMsSUFBTSxBQUFFQyxhQUFlRCxTQUFmQztBQUNSLE9BQU9DLFlBQVksU0FBUztBQUM1QixPQUFPQyxVQUFVLE9BQU87QUFDeEIsT0FBT0MsY0FBYyxvQkFBb0I7QUFDekMsT0FBT0MsV0FBc0IsUUFBUTtBQUdyQyxTQUFTQyxlQUFlLEVBQUVDLFdBQVcsUUFBUSxZQUFZO0FBRXpELE9BQU9DLGtCQUFrQixpQkFBaUI7QUFDMUMsT0FBT0MscUJBQXFCLG9CQUFvQjtBQUNoRCxPQUFPQyxrQ0FBa0MsaUJBQWlCO0FBRTFELE9BQU9DLG9CQUFvQixtQkFBbUI7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