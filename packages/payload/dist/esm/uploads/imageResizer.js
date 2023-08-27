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
import fs from "fs";
import sanitize from "sanitize-filename";
import sharp from "sharp";
import fileExists from "./fileExists";
/**
 * Sanitize the image name and extract the extension from the source image
 *
 * @param sourceImage - the source image
 * @returns the sanitized name and extension
 */ var getSanitizedImageData = function(sourceImage) {
    var extension = sourceImage.split(".").pop();
    var name = sanitize(sourceImage.substring(0, sourceImage.lastIndexOf(".")) || sourceImage);
    return {
        name: name,
        ext: extension
    };
};
/**
 * Create a new image name based on the output image name, the dimensions and
 * the extension.
 *
 * Ignore the fact that duplicate names could happen if the there is one
 * size with `width AND height` and one with only `height OR width`. Because
 * space is expensive, we will reuse the same image for both sizes.
 *
 * @param outputImageName - the sanitized image name
 * @param bufferInfo - the buffer info
 * @param extension - the extension to use
 * @returns the new image name that is not taken
 */ var createImageName = function(outputImageName, param, extension) {
    var width = param.width, height = param.height;
    return "".concat(outputImageName, "-").concat(width, "x").concat(height, ".").concat(extension);
};
/**
 * Create the result object for the image resize operation based on the
 * provided parameters. If the name is not provided, an empty result object
 * is returned.
 *
 * @param name - the name of the image
 * @param filename - the filename of the image
 * @param width - the width of the image
 * @param height - the height of the image
 * @param filesize - the filesize of the image
 * @param mimeType - the mime type of the image
 * @param sizesToSave - the sizes to save
 * @returns the result object
 */ var createResult = function(name) {
    var filename = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, width = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, height = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, filesize = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, mimeType = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, sizesToSave = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [];
    return {
        sizesToSave: sizesToSave,
        sizeData: _define_property({}, name, {
            width: width,
            height: height,
            filename: filename,
            filesize: filesize,
            mimeType: mimeType
        })
    };
};
/**
 * Check if the image needs to be resized according to the requested dimensions
 * and the original image size. If the resize options withoutEnlargement or withoutReduction are provided,
 * the image will be resized regardless of the requested dimensions, given that the
 * width or height to be resized is provided.
 *
 * @param resizeConfig - object containing the requested dimensions and resize options
 * @param original - the original image size
 * @returns true if the image needs to be resized, false otherwise
 */ var needsResize = function(param, original) {
    var desiredWidth = param.width, desiredHeight = param.height, withoutEnlargement = param.withoutEnlargement, withoutReduction = param.withoutReduction;
    // allow enlargement or prevent reduction (our default is to prevent
    // enlargement and allow reduction)
    if (withoutEnlargement !== undefined || withoutReduction !== undefined) {
        return true; // needs resize
    }
    var isWidthOrHeightNotDefined = !desiredHeight || !desiredWidth;
    if (isWidthOrHeightNotDefined) {
        // If with and height are not defined, it means there is a format conversion
        // and the image needs to be "resized" (transformed).
        return true; // needs resize
    }
    var hasInsufficientWidth = original.width < desiredWidth;
    var hasInsufficientHeight = original.height < desiredHeight;
    if (hasInsufficientWidth && hasInsufficientHeight) {
        // doesn't need resize - prevent enlargement. This should only happen if both width and height are insufficient.
        // if only one dimension is insufficient and the other is sufficient, resizing needs to happen, as the image
        // should be resized to the sufficient dimension.
        return false;
    }
    return true; // needs resize
};
/**
 * For the provided image sizes, handle the resizing and the transforms
 * (format, trim, etc.) of each requested image size and return the result object.
 * This only handles the image sizes. The transforms of the original image
 * are handled in {@link ./generateFileData.ts}.
 *
 * The image will be resized according to the provided
 * resize config. If no image sizes are requested, the resolved data will be empty.
 * For every image that dos not need to be resized, an result object with `null`
 * parameters will be returned.
 *
 * @param resizeConfig - the resize config
 * @returns the result of the resize operation(s)
 */ export default function resizeAndTransformImageSizes(_) {
    return _resizeAndTransformImageSizes.apply(this, arguments);
}
function _resizeAndTransformImageSizes() {
    _resizeAndTransformImageSizes = _async_to_generator(function(param) {
        var req, file, dimensions, staticPath, config, savedFilename, mimeType, imageSizes, sharpBase, results;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req = param.req, file = param.file, dimensions = param.dimensions, staticPath = param.staticPath, config = param.config, savedFilename = param.savedFilename, mimeType = param.mimeType;
                    imageSizes = config.upload.imageSizes;
                    // Noting to resize here so return as early as possible
                    if (!imageSizes) return [
                        2,
                        {
                            sizeData: {},
                            sizesToSave: []
                        }
                    ];
                    sharpBase = sharp(file.tempFilePath || file.data).rotate(); // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
                    return [
                        4,
                        Promise.all(imageSizes.map(function() {
                            var _ref = _async_to_generator(function(imageResizeConfig) {
                                var _mimeInfo, _mimeInfo1, resized, _ref, bufferData, bufferInfo, sanitizedImage, mimeInfo, imageNameWithDimensions, imagePath, width, height, size;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            // This checks if a resize should happen. If not, the resized image will be
                                            // skipped COMPLETELY and thus will not be included in the resulting images.
                                            // All further format/trim options will thus be skipped as well.
                                            if (!needsResize(imageResizeConfig, dimensions)) {
                                                return [
                                                    2,
                                                    createResult(imageResizeConfig.name)
                                                ];
                                            }
                                            resized = sharpBase.clone().resize(imageResizeConfig);
                                            if (imageResizeConfig.formatOptions) {
                                                resized = resized.toFormat(imageResizeConfig.formatOptions.format, imageResizeConfig.formatOptions.options);
                                            }
                                            if (imageResizeConfig.trimOptions) {
                                                resized = resized.trim(imageResizeConfig.trimOptions);
                                            }
                                            return [
                                                4,
                                                resized.toBuffer({
                                                    resolveWithObject: true
                                                })
                                            ];
                                        case 1:
                                            _ref = _state.sent(), bufferData = _ref.data, bufferInfo = _ref.info;
                                            sanitizedImage = getSanitizedImageData(savedFilename);
                                            if (req.payloadUploadSizes) {
                                                req.payloadUploadSizes[imageResizeConfig.name] = bufferData;
                                            }
                                            return [
                                                4,
                                                fromBuffer(bufferData)
                                            ];
                                        case 2:
                                            mimeInfo = _state.sent();
                                            imageNameWithDimensions = createImageName(sanitizedImage.name, bufferInfo, ((_mimeInfo = mimeInfo) === null || _mimeInfo === void 0 ? void 0 : _mimeInfo.ext) || sanitizedImage.ext);
                                            imagePath = "".concat(staticPath, "/").concat(imageNameWithDimensions);
                                            return [
                                                4,
                                                fileExists(imagePath)
                                            ];
                                        case 3:
                                            if (_state.sent()) {
                                                fs.unlinkSync(imagePath);
                                            }
                                            width = bufferInfo.width, height = bufferInfo.height, size = bufferInfo.size;
                                            return [
                                                2,
                                                createResult(imageResizeConfig.name, imageNameWithDimensions, width, height, size, ((_mimeInfo1 = mimeInfo) === null || _mimeInfo1 === void 0 ? void 0 : _mimeInfo1.mime) || mimeType, [
                                                    {
                                                        path: imagePath,
                                                        buffer: bufferData
                                                    }
                                                ])
                                            ];
                                    }
                                });
                            });
                            return function(imageResizeConfig) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    results = _state.sent();
                    return [
                        2,
                        results.reduce(function(acc, result) {
                            var _acc_sizesToSave;
                            Object.assign(acc.sizeData, result.sizeData);
                            (_acc_sizesToSave = acc.sizesToSave).push.apply(_acc_sizesToSave, _to_consumable_array(result.sizesToSave));
                            return acc;
                        }, {
                            sizeData: {},
                            sizesToSave: []
                        })
                    ];
            }
        });
    });
    return _resizeAndTransformImageSizes.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2ltYWdlUmVzaXplci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVcGxvYWRlZEZpbGUgfSBmcm9tICdleHByZXNzLWZpbGV1cGxvYWQnO1xuaW1wb3J0IGZpbGV0eXBlIGZyb20gJ2ZpbGUtdHlwZSc7XG5jb25zdCB7IGZyb21CdWZmZXIgfSA9IGZpbGV0eXBlO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBzYW5pdGl6ZSBmcm9tICdzYW5pdGl6ZS1maWxlbmFtZSc7XG5pbXBvcnQgc2hhcnAgZnJvbSAnc2hhcnAnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IGZpbGVFeGlzdHMgZnJvbSAnLi9maWxlRXhpc3RzJztcbmltcG9ydCB7IEZpbGVTaXplLCBGaWxlU2l6ZXMsIEZpbGVUb1NhdmUsIEltYWdlU2l6ZSwgUHJvYmVkSW1hZ2VTaXplIH0gZnJvbSAnLi90eXBlcyc7XG5cbnR5cGUgUmVzaXplQXJncyA9IHtcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdDtcbiAgZmlsZTogVXBsb2FkZWRGaWxlO1xuICBkaW1lbnNpb25zOiBQcm9iZWRJbWFnZVNpemU7XG4gIHN0YXRpY1BhdGg6IHN0cmluZztcbiAgY29uZmlnOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnO1xuICBzYXZlZEZpbGVuYW1lOiBzdHJpbmc7XG4gIG1pbWVUeXBlOiBzdHJpbmc7XG59O1xuXG4vKiogUmVzdWx0IGZyb20gcmVzaXppbmcgYW5kIHRyYW5zZm9ybWluZyB0aGUgcmVxdWVzdGVkIGltYWdlIHNpemVzICovXG50eXBlIEltYWdlU2l6ZXNSZXN1bHQgPSB7XG4gIHNpemVEYXRhOiBGaWxlU2l6ZXM7XG4gIHNpemVzVG9TYXZlOiBGaWxlVG9TYXZlW107XG59O1xuXG50eXBlIFNhbml0aXplZEltYWdlRGF0YSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBleHQ6IHN0cmluZztcbn07XG5cbi8qKlxuICogU2FuaXRpemUgdGhlIGltYWdlIG5hbWUgYW5kIGV4dHJhY3QgdGhlIGV4dGVuc2lvbiBmcm9tIHRoZSBzb3VyY2UgaW1hZ2VcbiAqXG4gKiBAcGFyYW0gc291cmNlSW1hZ2UgLSB0aGUgc291cmNlIGltYWdlXG4gKiBAcmV0dXJucyB0aGUgc2FuaXRpemVkIG5hbWUgYW5kIGV4dGVuc2lvblxuICovXG5jb25zdCBnZXRTYW5pdGl6ZWRJbWFnZURhdGEgPSAoc291cmNlSW1hZ2U6IHN0cmluZyk6IFNhbml0aXplZEltYWdlRGF0YSA9PiB7XG4gIGNvbnN0IGV4dGVuc2lvbiA9IHNvdXJjZUltYWdlLnNwbGl0KCcuJykucG9wKCk7XG4gIGNvbnN0IG5hbWUgPSBzYW5pdGl6ZShzb3VyY2VJbWFnZS5zdWJzdHJpbmcoMCwgc291cmNlSW1hZ2UubGFzdEluZGV4T2YoJy4nKSkgfHwgc291cmNlSW1hZ2UpO1xuICByZXR1cm4geyBuYW1lLCBleHQ6IGV4dGVuc2lvbiEgfTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGltYWdlIG5hbWUgYmFzZWQgb24gdGhlIG91dHB1dCBpbWFnZSBuYW1lLCB0aGUgZGltZW5zaW9ucyBhbmRcbiAqIHRoZSBleHRlbnNpb24uXG4gKlxuICogSWdub3JlIHRoZSBmYWN0IHRoYXQgZHVwbGljYXRlIG5hbWVzIGNvdWxkIGhhcHBlbiBpZiB0aGUgdGhlcmUgaXMgb25lXG4gKiBzaXplIHdpdGggYHdpZHRoIEFORCBoZWlnaHRgIGFuZCBvbmUgd2l0aCBvbmx5IGBoZWlnaHQgT1Igd2lkdGhgLiBCZWNhdXNlXG4gKiBzcGFjZSBpcyBleHBlbnNpdmUsIHdlIHdpbGwgcmV1c2UgdGhlIHNhbWUgaW1hZ2UgZm9yIGJvdGggc2l6ZXMuXG4gKlxuICogQHBhcmFtIG91dHB1dEltYWdlTmFtZSAtIHRoZSBzYW5pdGl6ZWQgaW1hZ2UgbmFtZVxuICogQHBhcmFtIGJ1ZmZlckluZm8gLSB0aGUgYnVmZmVyIGluZm9cbiAqIEBwYXJhbSBleHRlbnNpb24gLSB0aGUgZXh0ZW5zaW9uIHRvIHVzZVxuICogQHJldHVybnMgdGhlIG5ldyBpbWFnZSBuYW1lIHRoYXQgaXMgbm90IHRha2VuXG4gKi9cbmNvbnN0IGNyZWF0ZUltYWdlTmFtZSA9IChcbiAgb3V0cHV0SW1hZ2VOYW1lOiBzdHJpbmcsXG4gIHsgd2lkdGgsIGhlaWdodCB9OiBzaGFycC5PdXRwdXRJbmZvLFxuICBleHRlbnNpb246IHN0cmluZyxcbikgPT4gYCR7b3V0cHV0SW1hZ2VOYW1lfS0ke3dpZHRofXgke2hlaWdodH0uJHtleHRlbnNpb259YDtcblxuLyoqXG4gKiBDcmVhdGUgdGhlIHJlc3VsdCBvYmplY3QgZm9yIHRoZSBpbWFnZSByZXNpemUgb3BlcmF0aW9uIGJhc2VkIG9uIHRoZVxuICogcHJvdmlkZWQgcGFyYW1ldGVycy4gSWYgdGhlIG5hbWUgaXMgbm90IHByb3ZpZGVkLCBhbiBlbXB0eSByZXN1bHQgb2JqZWN0XG4gKiBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0gbmFtZSAtIHRoZSBuYW1lIG9mIHRoZSBpbWFnZVxuICogQHBhcmFtIGZpbGVuYW1lIC0gdGhlIGZpbGVuYW1lIG9mIHRoZSBpbWFnZVxuICogQHBhcmFtIHdpZHRoIC0gdGhlIHdpZHRoIG9mIHRoZSBpbWFnZVxuICogQHBhcmFtIGhlaWdodCAtIHRoZSBoZWlnaHQgb2YgdGhlIGltYWdlXG4gKiBAcGFyYW0gZmlsZXNpemUgLSB0aGUgZmlsZXNpemUgb2YgdGhlIGltYWdlXG4gKiBAcGFyYW0gbWltZVR5cGUgLSB0aGUgbWltZSB0eXBlIG9mIHRoZSBpbWFnZVxuICogQHBhcmFtIHNpemVzVG9TYXZlIC0gdGhlIHNpemVzIHRvIHNhdmVcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2JqZWN0XG4gKi9cbmNvbnN0IGNyZWF0ZVJlc3VsdCA9IChcbiAgbmFtZTogc3RyaW5nLFxuICBmaWxlbmFtZTogRmlsZVNpemVbJ2ZpbGVuYW1lJ10gPSBudWxsLFxuICB3aWR0aDogRmlsZVNpemVbJ3dpZHRoJ10gPSBudWxsLFxuICBoZWlnaHQ6IEZpbGVTaXplWydoZWlnaHQnXSA9IG51bGwsXG4gIGZpbGVzaXplOiBGaWxlU2l6ZVsnZmlsZXNpemUnXSA9IG51bGwsXG4gIG1pbWVUeXBlOiBGaWxlU2l6ZVsnbWltZVR5cGUnXSA9IG51bGwsXG4gIHNpemVzVG9TYXZlOiBGaWxlVG9TYXZlW10gPSBbXSxcbik6IEltYWdlU2l6ZXNSZXN1bHQgPT4gKHtcbiAgc2l6ZXNUb1NhdmUsXG4gIHNpemVEYXRhOiB7XG4gICAgW25hbWVdOiB7XG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGZpbGVuYW1lLFxuICAgICAgZmlsZXNpemUsXG4gICAgICBtaW1lVHlwZSxcbiAgICB9LFxuICB9LFxufSk7XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGltYWdlIG5lZWRzIHRvIGJlIHJlc2l6ZWQgYWNjb3JkaW5nIHRvIHRoZSByZXF1ZXN0ZWQgZGltZW5zaW9uc1xuICogYW5kIHRoZSBvcmlnaW5hbCBpbWFnZSBzaXplLiBJZiB0aGUgcmVzaXplIG9wdGlvbnMgd2l0aG91dEVubGFyZ2VtZW50IG9yIHdpdGhvdXRSZWR1Y3Rpb24gYXJlIHByb3ZpZGVkLFxuICogdGhlIGltYWdlIHdpbGwgYmUgcmVzaXplZCByZWdhcmRsZXNzIG9mIHRoZSByZXF1ZXN0ZWQgZGltZW5zaW9ucywgZ2l2ZW4gdGhhdCB0aGVcbiAqIHdpZHRoIG9yIGhlaWdodCB0byBiZSByZXNpemVkIGlzIHByb3ZpZGVkLlxuICpcbiAqIEBwYXJhbSByZXNpemVDb25maWcgLSBvYmplY3QgY29udGFpbmluZyB0aGUgcmVxdWVzdGVkIGRpbWVuc2lvbnMgYW5kIHJlc2l6ZSBvcHRpb25zXG4gKiBAcGFyYW0gb3JpZ2luYWwgLSB0aGUgb3JpZ2luYWwgaW1hZ2Ugc2l6ZVxuICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgaW1hZ2UgbmVlZHMgdG8gYmUgcmVzaXplZCwgZmFsc2Ugb3RoZXJ3aXNlXG4gKi9cbmNvbnN0IG5lZWRzUmVzaXplID0gKFxuICB7IHdpZHRoOiBkZXNpcmVkV2lkdGgsIGhlaWdodDogZGVzaXJlZEhlaWdodCwgd2l0aG91dEVubGFyZ2VtZW50LCB3aXRob3V0UmVkdWN0aW9uIH06IEltYWdlU2l6ZSxcbiAgb3JpZ2luYWw6IFByb2JlZEltYWdlU2l6ZSxcbik6IGJvb2xlYW4gPT4ge1xuICAvLyBhbGxvdyBlbmxhcmdlbWVudCBvciBwcmV2ZW50IHJlZHVjdGlvbiAob3VyIGRlZmF1bHQgaXMgdG8gcHJldmVudFxuICAvLyBlbmxhcmdlbWVudCBhbmQgYWxsb3cgcmVkdWN0aW9uKVxuICBpZiAod2l0aG91dEVubGFyZ2VtZW50ICE9PSB1bmRlZmluZWQgfHwgd2l0aG91dFJlZHVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRydWU7IC8vIG5lZWRzIHJlc2l6ZVxuICB9XG5cbiAgY29uc3QgaXNXaWR0aE9ySGVpZ2h0Tm90RGVmaW5lZCA9ICFkZXNpcmVkSGVpZ2h0IHx8ICFkZXNpcmVkV2lkdGg7XG5cbiAgaWYgKGlzV2lkdGhPckhlaWdodE5vdERlZmluZWQpIHtcbiAgICAvLyBJZiB3aXRoIGFuZCBoZWlnaHQgYXJlIG5vdCBkZWZpbmVkLCBpdCBtZWFucyB0aGVyZSBpcyBhIGZvcm1hdCBjb252ZXJzaW9uXG4gICAgLy8gYW5kIHRoZSBpbWFnZSBuZWVkcyB0byBiZSBcInJlc2l6ZWRcIiAodHJhbnNmb3JtZWQpLlxuICAgIHJldHVybiB0cnVlOyAvLyBuZWVkcyByZXNpemVcbiAgfVxuXG4gIGNvbnN0IGhhc0luc3VmZmljaWVudFdpZHRoID0gb3JpZ2luYWwud2lkdGggPCBkZXNpcmVkV2lkdGg7XG4gIGNvbnN0IGhhc0luc3VmZmljaWVudEhlaWdodCA9IG9yaWdpbmFsLmhlaWdodCA8IGRlc2lyZWRIZWlnaHQ7XG4gIGlmIChoYXNJbnN1ZmZpY2llbnRXaWR0aCAmJiBoYXNJbnN1ZmZpY2llbnRIZWlnaHQpIHtcbiAgICAvLyBkb2Vzbid0IG5lZWQgcmVzaXplIC0gcHJldmVudCBlbmxhcmdlbWVudC4gVGhpcyBzaG91bGQgb25seSBoYXBwZW4gaWYgYm90aCB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBpbnN1ZmZpY2llbnQuXG4gICAgLy8gaWYgb25seSBvbmUgZGltZW5zaW9uIGlzIGluc3VmZmljaWVudCBhbmQgdGhlIG90aGVyIGlzIHN1ZmZpY2llbnQsIHJlc2l6aW5nIG5lZWRzIHRvIGhhcHBlbiwgYXMgdGhlIGltYWdlXG4gICAgLy8gc2hvdWxkIGJlIHJlc2l6ZWQgdG8gdGhlIHN1ZmZpY2llbnQgZGltZW5zaW9uLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlOyAvLyBuZWVkcyByZXNpemVcbn07XG5cbi8qKlxuICogRm9yIHRoZSBwcm92aWRlZCBpbWFnZSBzaXplcywgaGFuZGxlIHRoZSByZXNpemluZyBhbmQgdGhlIHRyYW5zZm9ybXNcbiAqIChmb3JtYXQsIHRyaW0sIGV0Yy4pIG9mIGVhY2ggcmVxdWVzdGVkIGltYWdlIHNpemUgYW5kIHJldHVybiB0aGUgcmVzdWx0IG9iamVjdC5cbiAqIFRoaXMgb25seSBoYW5kbGVzIHRoZSBpbWFnZSBzaXplcy4gVGhlIHRyYW5zZm9ybXMgb2YgdGhlIG9yaWdpbmFsIGltYWdlXG4gKiBhcmUgaGFuZGxlZCBpbiB7QGxpbmsgLi9nZW5lcmF0ZUZpbGVEYXRhLnRzfS5cbiAqXG4gKiBUaGUgaW1hZ2Ugd2lsbCBiZSByZXNpemVkIGFjY29yZGluZyB0byB0aGUgcHJvdmlkZWRcbiAqIHJlc2l6ZSBjb25maWcuIElmIG5vIGltYWdlIHNpemVzIGFyZSByZXF1ZXN0ZWQsIHRoZSByZXNvbHZlZCBkYXRhIHdpbGwgYmUgZW1wdHkuXG4gKiBGb3IgZXZlcnkgaW1hZ2UgdGhhdCBkb3Mgbm90IG5lZWQgdG8gYmUgcmVzaXplZCwgYW4gcmVzdWx0IG9iamVjdCB3aXRoIGBudWxsYFxuICogcGFyYW1ldGVycyB3aWxsIGJlIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSByZXNpemVDb25maWcgLSB0aGUgcmVzaXplIGNvbmZpZ1xuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgcmVzaXplIG9wZXJhdGlvbihzKVxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiByZXNpemVBbmRUcmFuc2Zvcm1JbWFnZVNpemVzKHtcbiAgcmVxLFxuICBmaWxlLFxuICBkaW1lbnNpb25zLFxuICBzdGF0aWNQYXRoLFxuICBjb25maWcsXG4gIHNhdmVkRmlsZW5hbWUsXG4gIG1pbWVUeXBlLFxufTogUmVzaXplQXJncyk6IFByb21pc2U8SW1hZ2VTaXplc1Jlc3VsdD4ge1xuICBjb25zdCB7IGltYWdlU2l6ZXMgfSA9IGNvbmZpZy51cGxvYWQ7XG5cbiAgLy8gTm90aW5nIHRvIHJlc2l6ZSBoZXJlIHNvIHJldHVybiBhcyBlYXJseSBhcyBwb3NzaWJsZVxuICBpZiAoIWltYWdlU2l6ZXMpIHJldHVybiB7IHNpemVEYXRhOiB7fSwgc2l6ZXNUb1NhdmU6IFtdIH07XG5cbiAgY29uc3Qgc2hhcnBCYXNlID0gc2hhcnAoZmlsZS50ZW1wRmlsZVBhdGggfHwgZmlsZS5kYXRhKS5yb3RhdGUoKTsgLy8gcGFzcyByb3RhdGUoKSB0byBhdXRvLXJvdGF0ZSBiYXNlZCBvbiBFWElGIGRhdGEuIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXlsb2FkY21zL3BheWxvYWQvcHVsbC8zMDgxXG5cbiAgY29uc3QgcmVzdWx0czogSW1hZ2VTaXplc1Jlc3VsdFtdID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgaW1hZ2VTaXplcy5tYXAoYXN5bmMgKGltYWdlUmVzaXplQ29uZmlnKTogUHJvbWlzZTxJbWFnZVNpemVzUmVzdWx0PiA9PiB7XG4gICAgICAvLyBUaGlzIGNoZWNrcyBpZiBhIHJlc2l6ZSBzaG91bGQgaGFwcGVuLiBJZiBub3QsIHRoZSByZXNpemVkIGltYWdlIHdpbGwgYmVcbiAgICAgIC8vIHNraXBwZWQgQ09NUExFVEVMWSBhbmQgdGh1cyB3aWxsIG5vdCBiZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0aW5nIGltYWdlcy5cbiAgICAgIC8vIEFsbCBmdXJ0aGVyIGZvcm1hdC90cmltIG9wdGlvbnMgd2lsbCB0aHVzIGJlIHNraXBwZWQgYXMgd2VsbC5cbiAgICAgIGlmICghbmVlZHNSZXNpemUoaW1hZ2VSZXNpemVDb25maWcsIGRpbWVuc2lvbnMpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVSZXN1bHQoaW1hZ2VSZXNpemVDb25maWcubmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXNpemVkID0gc2hhcnBCYXNlLmNsb25lKCkucmVzaXplKGltYWdlUmVzaXplQ29uZmlnKTtcblxuICAgICAgaWYgKGltYWdlUmVzaXplQ29uZmlnLmZvcm1hdE9wdGlvbnMpIHtcbiAgICAgICAgcmVzaXplZCA9IHJlc2l6ZWQudG9Gb3JtYXQoXG4gICAgICAgICAgaW1hZ2VSZXNpemVDb25maWcuZm9ybWF0T3B0aW9ucy5mb3JtYXQsXG4gICAgICAgICAgaW1hZ2VSZXNpemVDb25maWcuZm9ybWF0T3B0aW9ucy5vcHRpb25zLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW1hZ2VSZXNpemVDb25maWcudHJpbU9wdGlvbnMpIHtcbiAgICAgICAgcmVzaXplZCA9IHJlc2l6ZWQudHJpbShpbWFnZVJlc2l6ZUNvbmZpZy50cmltT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZGF0YTogYnVmZmVyRGF0YSwgaW5mbzogYnVmZmVySW5mbyB9ID0gYXdhaXQgcmVzaXplZC50b0J1ZmZlcih7XG4gICAgICAgIHJlc29sdmVXaXRoT2JqZWN0OiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNhbml0aXplZEltYWdlID0gZ2V0U2FuaXRpemVkSW1hZ2VEYXRhKHNhdmVkRmlsZW5hbWUpO1xuXG4gICAgICBpZiAocmVxLnBheWxvYWRVcGxvYWRTaXplcykge1xuICAgICAgICByZXEucGF5bG9hZFVwbG9hZFNpemVzW2ltYWdlUmVzaXplQ29uZmlnLm5hbWVdID0gYnVmZmVyRGF0YTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWltZUluZm8gPSBhd2FpdCBmcm9tQnVmZmVyKGJ1ZmZlckRhdGEpO1xuXG4gICAgICBjb25zdCBpbWFnZU5hbWVXaXRoRGltZW5zaW9ucyA9IGNyZWF0ZUltYWdlTmFtZShcbiAgICAgICAgc2FuaXRpemVkSW1hZ2UubmFtZSxcbiAgICAgICAgYnVmZmVySW5mbyxcbiAgICAgICAgbWltZUluZm8/LmV4dCB8fCBzYW5pdGl6ZWRJbWFnZS5leHQsXG4gICAgICApO1xuXG4gICAgICBjb25zdCBpbWFnZVBhdGggPSBgJHtzdGF0aWNQYXRofS8ke2ltYWdlTmFtZVdpdGhEaW1lbnNpb25zfWA7XG5cbiAgICAgIGlmIChhd2FpdCBmaWxlRXhpc3RzKGltYWdlUGF0aCkpIHtcbiAgICAgICAgZnMudW5saW5rU3luYyhpbWFnZVBhdGgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHNpemUgfSA9IGJ1ZmZlckluZm87XG4gICAgICByZXR1cm4gY3JlYXRlUmVzdWx0KFxuICAgICAgICBpbWFnZVJlc2l6ZUNvbmZpZy5uYW1lLFxuICAgICAgICBpbWFnZU5hbWVXaXRoRGltZW5zaW9ucyxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgbWltZUluZm8/Lm1pbWUgfHwgbWltZVR5cGUsXG4gICAgICAgIFt7IHBhdGg6IGltYWdlUGF0aCwgYnVmZmVyOiBidWZmZXJEYXRhIH1dLFxuICAgICAgKTtcbiAgICB9KSxcbiAgKTtcblxuICByZXR1cm4gcmVzdWx0cy5yZWR1Y2UoXG4gICAgKGFjYywgcmVzdWx0KSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKGFjYy5zaXplRGF0YSwgcmVzdWx0LnNpemVEYXRhKTtcbiAgICAgIGFjYy5zaXplc1RvU2F2ZS5wdXNoKC4uLnJlc3VsdC5zaXplc1RvU2F2ZSk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sXG4gICAgeyBzaXplRGF0YToge30sIHNpemVzVG9TYXZlOiBbXSB9LFxuICApO1xufVxuIl0sIm5hbWVzIjpbImZpbGV0eXBlIiwiZnJvbUJ1ZmZlciIsImZzIiwic2FuaXRpemUiLCJzaGFycCIsImZpbGVFeGlzdHMiLCJnZXRTYW5pdGl6ZWRJbWFnZURhdGEiLCJzb3VyY2VJbWFnZSIsImV4dGVuc2lvbiIsInNwbGl0IiwicG9wIiwibmFtZSIsInN1YnN0cmluZyIsImxhc3RJbmRleE9mIiwiZXh0IiwiY3JlYXRlSW1hZ2VOYW1lIiwib3V0cHV0SW1hZ2VOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjcmVhdGVSZXN1bHQiLCJmaWxlbmFtZSIsImZpbGVzaXplIiwibWltZVR5cGUiLCJzaXplc1RvU2F2ZSIsInNpemVEYXRhIiwibmVlZHNSZXNpemUiLCJvcmlnaW5hbCIsImRlc2lyZWRXaWR0aCIsImRlc2lyZWRIZWlnaHQiLCJ3aXRob3V0RW5sYXJnZW1lbnQiLCJ3aXRob3V0UmVkdWN0aW9uIiwidW5kZWZpbmVkIiwiaXNXaWR0aE9ySGVpZ2h0Tm90RGVmaW5lZCIsImhhc0luc3VmZmljaWVudFdpZHRoIiwiaGFzSW5zdWZmaWNpZW50SGVpZ2h0IiwicmVzaXplQW5kVHJhbnNmb3JtSW1hZ2VTaXplcyIsInJlcSIsImZpbGUiLCJkaW1lbnNpb25zIiwic3RhdGljUGF0aCIsImNvbmZpZyIsInNhdmVkRmlsZW5hbWUiLCJpbWFnZVNpemVzIiwic2hhcnBCYXNlIiwicmVzdWx0cyIsInVwbG9hZCIsInRlbXBGaWxlUGF0aCIsImRhdGEiLCJyb3RhdGUiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaW1hZ2VSZXNpemVDb25maWciLCJtaW1lSW5mbyIsInJlc2l6ZWQiLCJidWZmZXJEYXRhIiwiYnVmZmVySW5mbyIsInNhbml0aXplZEltYWdlIiwiaW1hZ2VOYW1lV2l0aERpbWVuc2lvbnMiLCJpbWFnZVBhdGgiLCJzaXplIiwiY2xvbmUiLCJyZXNpemUiLCJmb3JtYXRPcHRpb25zIiwidG9Gb3JtYXQiLCJmb3JtYXQiLCJvcHRpb25zIiwidHJpbU9wdGlvbnMiLCJ0cmltIiwidG9CdWZmZXIiLCJyZXNvbHZlV2l0aE9iamVjdCIsImluZm8iLCJwYXlsb2FkVXBsb2FkU2l6ZXMiLCJ1bmxpbmtTeW5jIiwibWltZSIsInBhdGgiLCJidWZmZXIiLCJyZWR1Y2UiLCJhY2MiLCJyZXN1bHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPQSxjQUFjLFlBQVk7QUFDakMsSUFBTSxBQUFFQyxhQUFlRCxTQUFmQztBQUNSLE9BQU9DLFFBQVEsS0FBSztBQUNwQixPQUFPQyxjQUFjLG9CQUFvQjtBQUN6QyxPQUFPQyxXQUFXLFFBQVE7QUFHMUIsT0FBT0MsZ0JBQWdCLGVBQWU7QUF3QnRDOzs7OztDQUtDLEdBQ0QsSUFBTUMsd0JBQXdCLFNBQUNDO0lBQzdCLElBQU1DLFlBQVlELFlBQVlFLEtBQUssQ0FBQyxLQUFLQyxHQUFHO0lBQzVDLElBQU1DLE9BQU9SLFNBQVNJLFlBQVlLLFNBQVMsQ0FBQyxHQUFHTCxZQUFZTSxXQUFXLENBQUMsU0FBU047SUFDaEYsT0FBTztRQUFFSSxNQUFBQTtRQUFNRyxLQUFLTjtJQUFXO0FBQ2pDO0FBRUE7Ozs7Ozs7Ozs7OztDQVlDLEdBQ0QsSUFBTU8sa0JBQWtCLFNBQ3RCQyx3QkFFQVI7UUFERVMsY0FBQUEsT0FBT0MsZUFBQUE7V0FFTixBQUFDLEdBQXFCRCxPQUFuQkQsaUJBQWdCLEtBQVlFLE9BQVRELE9BQU0sS0FBYVQsT0FBVlUsUUFBTyxLQUFhLE9BQVZW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