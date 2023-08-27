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
var _mimeTypeValidator = require("./mimeTypeValidator");
var _extractTranslations = require("../translations/extractTranslations");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var labels = (0, _extractTranslations.extractTranslations)([
    "upload:width",
    "upload:height",
    "upload:fileSize",
    "upload:fileName",
    "upload:sizes"
]);
var getBaseUploadFields = function(param) {
    var config = param.config, collection = param.collection;
    var uploadOptions = typeof collection.upload === "object" ? collection.upload : {};
    var mimeType = {
        name: "mimeType",
        label: "MIME Type",
        type: "text",
        admin: {
            readOnly: true,
            hidden: true
        }
    };
    var url = {
        name: "url",
        label: "URL",
        type: "text",
        admin: {
            readOnly: true,
            hidden: true
        }
    };
    var width = {
        name: "width",
        label: labels["upload:width"],
        type: "number",
        admin: {
            readOnly: true,
            hidden: true
        }
    };
    var height = {
        name: "height",
        label: labels["upload:height"],
        type: "number",
        admin: {
            readOnly: true,
            hidden: true
        }
    };
    var filesize = {
        name: "filesize",
        label: labels["upload:fileSize"],
        type: "number",
        admin: {
            readOnly: true,
            hidden: true
        }
    };
    var filename = {
        name: "filename",
        label: labels["upload:fileName"],
        type: "text",
        index: true,
        unique: true,
        admin: {
            readOnly: true,
            hidden: true,
            disableBulkEdit: true
        }
    };
    var uploadFields = [
        _object_spread_props(_object_spread({}, url), {
            hooks: {
                afterRead: [
                    function(param) {
                        var data = param.data;
                        var _data;
                        if ((_data = data) === null || _data === void 0 ? void 0 : _data.filename) {
                            if (uploadOptions.staticURL.startsWith("/")) {
                                return "".concat(config.serverURL).concat(uploadOptions.staticURL, "/").concat(data.filename);
                            }
                            return "".concat(uploadOptions.staticURL, "/").concat(data.filename);
                        }
                        return undefined;
                    }
                ]
            }
        }),
        filename,
        mimeType,
        filesize,
        width,
        height
    ];
    if (uploadOptions.mimeTypes) {
        mimeType.validate = (0, _mimeTypeValidator.mimeTypeValidator)(uploadOptions.mimeTypes);
    }
    if (uploadOptions.imageSizes) {
        uploadFields = uploadFields.concat([
            {
                name: "sizes",
                label: labels["upload:Sizes"],
                type: "group",
                admin: {
                    hidden: true
                },
                fields: uploadOptions.imageSizes.map(function(size) {
                    return {
                        label: size.name,
                        name: size.name,
                        type: "group",
                        admin: {
                            hidden: true
                        },
                        fields: [
                            _object_spread_props(_object_spread({}, url), {
                                hooks: {
                                    afterRead: [
                                        function(param) {
                                            var data = param.data;
                                            var _data_sizes_size_name, _data_sizes, _data;
                                            var sizeFilename = (_data = data) === null || _data === void 0 ? void 0 : (_data_sizes = _data.sizes) === null || _data_sizes === void 0 ? void 0 : (_data_sizes_size_name = _data_sizes[size.name]) === null || _data_sizes_size_name === void 0 ? void 0 : _data_sizes_size_name.filename;
                                            if (sizeFilename) {
                                                if (uploadOptions.staticURL.startsWith("/")) {
                                                    return "".concat(config.serverURL).concat(uploadOptions.staticURL, "/").concat(sizeFilename);
                                                }
                                                return "".concat(uploadOptions.staticURL, "/").concat(sizeFilename);
                                            }
                                            return undefined;
                                        }
                                    ]
                                }
                            }),
                            width,
                            height,
                            mimeType,
                            filesize,
                            _object_spread_props(_object_spread({}, filename), {
                                unique: false
                            })
                        ]
                    };
                })
            }
        ]);
    }
    return uploadFields;
};
var _default = getBaseUploadFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL2dldEJhc2VGaWVsZHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IG1pbWVUeXBlVmFsaWRhdG9yIH0gZnJvbSAnLi9taW1lVHlwZVZhbGlkYXRvcic7XG5pbXBvcnQgeyBJbmNvbWluZ1VwbG9hZFR5cGUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGV4dHJhY3RUcmFuc2xhdGlvbnMgfSBmcm9tICcuLi90cmFuc2xhdGlvbnMvZXh0cmFjdFRyYW5zbGF0aW9ucyc7XG5cbmNvbnN0IGxhYmVscyA9IGV4dHJhY3RUcmFuc2xhdGlvbnMoWyd1cGxvYWQ6d2lkdGgnLCAndXBsb2FkOmhlaWdodCcsICd1cGxvYWQ6ZmlsZVNpemUnLCAndXBsb2FkOmZpbGVOYW1lJywgJ3VwbG9hZDpzaXplcyddKTtcblxudHlwZSBPcHRpb25zID0ge1xuICBjb25maWc6IENvbmZpZ1xuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uQ29uZmlnXG59XG5cbmNvbnN0IGdldEJhc2VVcGxvYWRGaWVsZHMgPSAoeyBjb25maWcsIGNvbGxlY3Rpb24gfTogT3B0aW9ucyk6IEZpZWxkW10gPT4ge1xuICBjb25zdCB1cGxvYWRPcHRpb25zOiBJbmNvbWluZ1VwbG9hZFR5cGUgPSB0eXBlb2YgY29sbGVjdGlvbi51cGxvYWQgPT09ICdvYmplY3QnID8gY29sbGVjdGlvbi51cGxvYWQgOiB7fTtcblxuICBjb25zdCBtaW1lVHlwZTogRmllbGQgPSB7XG4gICAgbmFtZTogJ21pbWVUeXBlJyxcbiAgICBsYWJlbDogJ01JTUUgVHlwZScsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIGNvbnN0IHVybDogRmllbGQgPSB7XG4gICAgbmFtZTogJ3VybCcsXG4gICAgbGFiZWw6ICdVUkwnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBoaWRkZW46IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCB3aWR0aDogRmllbGQgPSB7XG4gICAgbmFtZTogJ3dpZHRoJyxcbiAgICBsYWJlbDogbGFiZWxzWyd1cGxvYWQ6d2lkdGgnXSxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBoaWRkZW46IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBoZWlnaHQ6IEZpZWxkID0ge1xuICAgIG5hbWU6ICdoZWlnaHQnLFxuICAgIGxhYmVsOiBsYWJlbHNbJ3VwbG9hZDpoZWlnaHQnXSxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBoaWRkZW46IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBmaWxlc2l6ZTogRmllbGQgPSB7XG4gICAgbmFtZTogJ2ZpbGVzaXplJyxcbiAgICBsYWJlbDogbGFiZWxzWyd1cGxvYWQ6ZmlsZVNpemUnXSxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBhZG1pbjoge1xuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBoaWRkZW46IHRydWUsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCBmaWxlbmFtZTogRmllbGQgPSB7XG4gICAgbmFtZTogJ2ZpbGVuYW1lJyxcbiAgICBsYWJlbDogbGFiZWxzWyd1cGxvYWQ6ZmlsZU5hbWUnXSxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIGFkbWluOiB7XG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIGRpc2FibGVCdWxrRWRpdDogdHJ1ZSxcbiAgICB9LFxuICB9O1xuXG4gIGxldCB1cGxvYWRGaWVsZHM6IEZpZWxkW10gPSBbXG4gICAge1xuICAgICAgLi4udXJsLFxuICAgICAgaG9va3M6IHtcbiAgICAgICAgYWZ0ZXJSZWFkOiBbXG4gICAgICAgICAgKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YT8uZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgaWYgKHVwbG9hZE9wdGlvbnMuc3RhdGljVVJMLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb25maWcuc2VydmVyVVJMfSR7dXBsb2FkT3B0aW9ucy5zdGF0aWNVUkx9LyR7ZGF0YS5maWxlbmFtZX1gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBgJHt1cGxvYWRPcHRpb25zLnN0YXRpY1VSTH0vJHtkYXRhLmZpbGVuYW1lfWA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmaWxlbmFtZSxcbiAgICBtaW1lVHlwZSxcbiAgICBmaWxlc2l6ZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gIF07XG5cbiAgaWYgKHVwbG9hZE9wdGlvbnMubWltZVR5cGVzKSB7XG4gICAgbWltZVR5cGUudmFsaWRhdGUgPSBtaW1lVHlwZVZhbGlkYXRvcih1cGxvYWRPcHRpb25zLm1pbWVUeXBlcyk7XG4gIH1cblxuICBpZiAodXBsb2FkT3B0aW9ucy5pbWFnZVNpemVzKSB7XG4gICAgdXBsb2FkRmllbGRzID0gdXBsb2FkRmllbGRzLmNvbmNhdChbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdzaXplcycsXG4gICAgICAgIGxhYmVsOiBsYWJlbHNbJ3VwbG9hZDpTaXplcyddLFxuICAgICAgICB0eXBlOiAnZ3JvdXAnLFxuICAgICAgICBhZG1pbjoge1xuICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZmllbGRzOiB1cGxvYWRPcHRpb25zLmltYWdlU2l6ZXMubWFwKChzaXplKSA9PiAoe1xuICAgICAgICAgIGxhYmVsOiBzaXplLm5hbWUsXG4gICAgICAgICAgbmFtZTogc2l6ZS5uYW1lLFxuICAgICAgICAgIHR5cGU6ICdncm91cCcsXG4gICAgICAgICAgYWRtaW46IHtcbiAgICAgICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi51cmwsXG4gICAgICAgICAgICAgIGhvb2tzOiB7XG4gICAgICAgICAgICAgICAgYWZ0ZXJSZWFkOiBbXG4gICAgICAgICAgICAgICAgICAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2l6ZUZpbGVuYW1lID0gZGF0YT8uc2l6ZXM/LltzaXplLm5hbWVdPy5maWxlbmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2l6ZUZpbGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHVwbG9hZE9wdGlvbnMuc3RhdGljVVJMLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke2NvbmZpZy5zZXJ2ZXJVUkx9JHt1cGxvYWRPcHRpb25zLnN0YXRpY1VSTH0vJHtzaXplRmlsZW5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3VwbG9hZE9wdGlvbnMuc3RhdGljVVJMfS8ke3NpemVGaWxlbmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIG1pbWVUeXBlLFxuICAgICAgICAgICAgZmlsZXNpemUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC4uLmZpbGVuYW1lLFxuICAgICAgICAgICAgICB1bmlxdWU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KSksXG4gICAgICB9LFxuICAgIF0pO1xuICB9XG4gIHJldHVybiB1cGxvYWRGaWVsZHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRCYXNlVXBsb2FkRmllbGRzO1xuIl0sIm5hbWVzIjpbImxhYmVscyIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJnZXRCYXNlVXBsb2FkRmllbGRzIiwiY29uZmlnIiwiY29sbGVjdGlvbiIsInVwbG9hZE9wdGlvbnMiLCJ1cGxvYWQiLCJtaW1lVHlwZSIsIm5hbWUiLCJsYWJlbCIsInR5cGUiLCJhZG1pbiIsInJlYWRPbmx5IiwiaGlkZGVuIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJmaWxlc2l6ZSIsImZpbGVuYW1lIiwiaW5kZXgiLCJ1bmlxdWUiLCJkaXNhYmxlQnVsa0VkaXQiLCJ1cGxvYWRGaWVsZHMiLCJob29rcyIsImFmdGVyUmVhZCIsImRhdGEiLCJzdGF0aWNVUkwiLCJzdGFydHNXaXRoIiwic2VydmVyVVJMIiwidW5kZWZpbmVkIiwibWltZVR5cGVzIiwidmFsaWRhdGUiLCJtaW1lVHlwZVZhbGlkYXRvciIsImltYWdlU2l6ZXMiLCJjb25jYXQiLCJmaWVsZHMiLCJtYXAiLCJzaXplIiwic2l6ZUZpbGVuYW1lIiwic2l6ZXMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUtBOzs7ZUFBQTs7O2lDQTlK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