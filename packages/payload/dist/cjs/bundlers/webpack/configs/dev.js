"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDevConfig", {
    enumerable: true,
    get: function() {
        return getDevConfig;
    }
});
var _webpack = /*#__PURE__*/ _interop_require_default(require("webpack"));
var _md5 = /*#__PURE__*/ _interop_require_default(require("md5"));
var _base = require("./base");
var _url = require("url");
var _nodemodule = require("node:module");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var __filename1 = (0, _url.fileURLToPath)(require("url").pathToFileURL(__filename).toString());
var require1 = (0, _nodemodule.createRequire)(require("url").pathToFileURL(__filename).toString());
var getDevConfig = function(payloadConfig) {
    var baseConfig = (0, _base.getBaseConfig)(payloadConfig);
    var webpackConfig = _object_spread_props(_object_spread({}, baseConfig), {
        cache: {
            type: "filesystem",
            // version cache when there are changes to aliases
            version: (0, _md5.default)(Object.entries(baseConfig.resolve.alias).join()),
            buildDependencies: {
                config: [
                    __filename1
                ]
            }
        },
        entry: _object_spread_props(_object_spread({}, baseConfig.entry), {
            main: [
                "webpack-hot-middleware/client?path=".concat(payloadConfig.routes.admin, "/__webpack_hmr")
            ].concat(_to_consumable_array(baseConfig.entry.main))
        }),
        output: {
            publicPath: "".concat(payloadConfig.routes.admin, "/"),
            path: "/",
            filename: "[name].js"
        },
        devtool: "inline-source-map",
        mode: "development",
        stats: "errors-warnings",
        plugins: _to_consumable_array(baseConfig.plugins).concat([
            new _webpack.default.HotModuleReplacementPlugin()
        ])
    });
    webpackConfig.module.rules.push({
        test: /\.(scss|css)$/,
        sideEffects: true,
        /*
     * The loaders here are run in reverse order. Here is how your loaders are being processed:
     * 1. sass-loader: This loader compiles your SCSS into CSS.
     * 2. postcss-loader: This loader applies postcss transformations (with preset-env plugin in your case).
     * 3. css-loader: This loader interprets @import and url() like import/require() and will resolve them.
     * 4. style-loader: This loader injects CSS into the DOM.
     */ use: [
            require1.resolve("style-loader"),
            {
                loader: require1.resolve("css-loader"),
                options: {
                    url: function(url) {
                        return !url.startsWith("/");
                    }
                }
            },
            {
                loader: require1.resolve("postcss-loader"),
                options: {
                    postcssOptions: {
                        plugins: [
                            require1.resolve("postcss-preset-env")
                        ]
                    }
                }
            },
            require1.resolve("sass-loader")
        ]
    });
    if (payloadConfig.admin.webpack && typeof payloadConfig.admin.webpack === "function") {
        webpackConfig = payloadConfig.admin.webpack(webpackConfig);
    }
    return webpackConfig;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL2NvbmZpZ3MvZGV2LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWJwYWNrLCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBtZDUgZnJvbSAnbWQ1JztcbmltcG9ydCB7IGdldEJhc2VDb25maWcgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ25vZGU6bW9kdWxlJztcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcblxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcblxuZXhwb3J0IGNvbnN0IGdldERldkNvbmZpZyA9IChwYXlsb2FkQ29uZmlnOiBTYW5pdGl6ZWRDb25maWcpOiBDb25maWd1cmF0aW9uID0+IHtcblxuICBjb25zdCBiYXNlQ29uZmlnID0gZ2V0QmFzZUNvbmZpZyhwYXlsb2FkQ29uZmlnKSBhcyBhbnk7XG5cbiAgbGV0IHdlYnBhY2tDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XG4gICAgLi4uYmFzZUNvbmZpZyxcbiAgICBjYWNoZToge1xuICAgICAgdHlwZTogJ2ZpbGVzeXN0ZW0nLFxuICAgICAgLy8gdmVyc2lvbiBjYWNoZSB3aGVuIHRoZXJlIGFyZSBjaGFuZ2VzIHRvIGFsaWFzZXNcbiAgICAgIHZlcnNpb246IG1kNShPYmplY3QuZW50cmllcyhiYXNlQ29uZmlnLnJlc29sdmUuYWxpYXMpLmpvaW4oKSksXG4gICAgICBidWlsZERlcGVuZGVuY2llczoge1xuICAgICAgICBjb25maWc6IFtfX2ZpbGVuYW1lXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlbnRyeToge1xuICAgICAgLi4uYmFzZUNvbmZpZy5lbnRyeSxcbiAgICAgIG1haW46IFtcbiAgICAgICAgYHdlYnBhY2staG90LW1pZGRsZXdhcmUvY2xpZW50P3BhdGg9JHtwYXlsb2FkQ29uZmlnLnJvdXRlcy5hZG1pbn0vX193ZWJwYWNrX2htcmAsXG4gICAgICAgIC4uLihiYXNlQ29uZmlnLmVudHJ5Lm1haW4gYXMgc3RyaW5nW10pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG91dHB1dDoge1xuICAgICAgcHVibGljUGF0aDogYCR7cGF5bG9hZENvbmZpZy5yb3V0ZXMuYWRtaW59L2AsXG4gICAgICBwYXRoOiAnLycsXG4gICAgICBmaWxlbmFtZTogJ1tuYW1lXS5qcycsXG4gICAgfSxcbiAgICBkZXZ0b29sOiAnaW5saW5lLXNvdXJjZS1tYXAnLFxuICAgIG1vZGU6ICdkZXZlbG9wbWVudCcsXG4gICAgc3RhdHM6ICdlcnJvcnMtd2FybmluZ3MnLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIC4uLmJhc2VDb25maWcucGx1Z2lucyxcbiAgICAgIG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCksXG4gICAgXSxcbiAgfTtcblxuICB3ZWJwYWNrQ29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICB0ZXN0OiAvXFwuKHNjc3N8Y3NzKSQvLFxuICAgIHNpZGVFZmZlY3RzOiB0cnVlLFxuICAgIC8qXG4gICAgICogVGhlIGxvYWRlcnMgaGVyZSBhcmUgcnVuIGluIHJldmVyc2Ugb3JkZXIuIEhlcmUgaXMgaG93IHlvdXIgbG9hZGVycyBhcmUgYmVpbmcgcHJvY2Vzc2VkOlxuICAgICAqIDEuIHNhc3MtbG9hZGVyOiBUaGlzIGxvYWRlciBjb21waWxlcyB5b3VyIFNDU1MgaW50byBDU1MuXG4gICAgICogMi4gcG9zdGNzcy1sb2FkZXI6IFRoaXMgbG9hZGVyIGFwcGxpZXMgcG9zdGNzcyB0cmFuc2Zvcm1hdGlvbnMgKHdpdGggcHJlc2V0LWVudiBwbHVnaW4gaW4geW91ciBjYXNlKS5cbiAgICAgKiAzLiBjc3MtbG9hZGVyOiBUaGlzIGxvYWRlciBpbnRlcnByZXRzIEBpbXBvcnQgYW5kIHVybCgpIGxpa2UgaW1wb3J0L3JlcXVpcmUoKSBhbmQgd2lsbCByZXNvbHZlIHRoZW0uXG4gICAgICogNC4gc3R5bGUtbG9hZGVyOiBUaGlzIGxvYWRlciBpbmplY3RzIENTUyBpbnRvIHRoZSBET00uXG4gICAgICovXG4gICAgdXNlOiBbXG4gICAgICByZXF1aXJlLnJlc29sdmUoJ3N0eWxlLWxvYWRlcicpLFxuICAgICAge1xuICAgICAgICBsb2FkZXI6IHJlcXVpcmUucmVzb2x2ZSgnY3NzLWxvYWRlcicpLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgdXJsOiAodXJsKSA9PiAoIXVybC5zdGFydHNXaXRoKCcvJykpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbG9hZGVyOiByZXF1aXJlLnJlc29sdmUoJ3Bvc3Rjc3MtbG9hZGVyJyksXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwb3N0Y3NzT3B0aW9uczoge1xuICAgICAgICAgICAgcGx1Z2luczogW3JlcXVpcmUucmVzb2x2ZSgncG9zdGNzcy1wcmVzZXQtZW52JyldLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVxdWlyZS5yZXNvbHZlKCdzYXNzLWxvYWRlcicpLFxuICAgIF0sXG4gIH0pO1xuXG4gIGlmIChwYXlsb2FkQ29uZmlnLmFkbWluLndlYnBhY2sgJiYgdHlwZW9mIHBheWxvYWRDb25maWcuYWRtaW4ud2VicGFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHdlYnBhY2tDb25maWcgPSBwYXlsb2FkQ29uZmlnLmFkbWluLndlYnBhY2sod2VicGFja0NvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gd2VicGFja0NvbmZpZztcbn07XG4iXSwibmFtZXMiOlsiZ2V0RGV2Q29uZmlnIiwiX19maWxlbmFtZSIsImZpbGVVUkxUb1BhdGgiLCJyZXF1aXJlIiwiY3JlYXRlUmVxdWlyZSIsInBheWxvYWRDb25maWciLCJiYXNlQ29uZmlnIiwiZ2V0QmFzZUNvbmZpZyIsIndlYnBhY2tDb25maWciLCJjYWNoZSIsInR5cGUiLCJ2ZXJzaW9uIiwibWQ1IiwiT2JqZWN0IiwiZW50cmllcyIsInJlc29sdmUiLCJhbGlhcyIsImpvaW4iLCJidWlsZERlcGVuZGVuY2llcyIsImNvbmZpZyIsImVudHJ5IiwibWFpbiIsInJvdXRlcyIsImFkbWluIiwib3V0cHV0IiwicHVibGljUGF0aCIsInBhdGgiLCJmaWxlbmFtZSIsImRldnRvb2wiLCJtb2RlIiwic3RhdHMiLCJwbHVnaW5zIiwid2VicGFjayIsIkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luIiwibW9kdWxlIiwicnVsZXMiLCJwdXNoIiwidGVzdCIsInNpZGVFZmZlY3RzIiwidXNlIiwibG9hZGVyIiwib3B0aW9ucyIsInVybCIsInN0YXJ0c1dpdGgiLCJwb3N0Y3NzT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFXYUE7OztlQUFBQTs7OzhEQVgwQjswREFDdkI7b0JBQ2M7bUJBRUE7MEJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQU1DLGNBQWFDLElBQUFBLGtCQUFhLEVBQUM7QUFFakMsSUFBTUMsV0FBVUMsSUFBQUEseUJBQWEsRUFBQztBQUV2QixJQUFNSixlQUFlLFNBQUNLO0lBRTNCLElBQU1DLGFBQWFDLElBQUFBLG1CQUFhLEVBQUNGO0lBRWpDLElBQUlHLGdCQUErQix3Q0FDOUJGO1FBQ0hHLE9BQU87WUFDTEMsTUFBTTtZQUNOLGtEQUFrRDtZQUNsREMsU0FBU0MsSUFBQUEsWUFBRyxFQUFDQyxPQUFPQyxPQUFPLENBQUNSLFdBQVdTLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFQyxJQUFJO1lBQzFEQyxtQkFBbUI7Z0JBQ2pCQyxRQUFRO29CQUFDbEI7aUJBQVc7WUFDdEI7UUFDRjtRQUNBbUIsT0FBTyx3Q0FDRmQsV0FBV2MsS0FBSztZQUNuQkMsTUFBTTtnQkFDSCxzQ0FBZ0UsT0FBM0JoQixjQUFjaUIsTUFBTSxDQUFDQyxLQUFLLEVBQUM7YUFFbEUsQ0FISyxPQUVKLHFCQUFJakIsV0FBV2MsS0FBSyxDQUFDQyxJQUFJOztRQUc3QkcsUUFBUTtZQUNOQyxZQUFZLEFBQUMsR0FBNkIsT0FBM0JwQixjQUFjaUIsTUFBTSxDQUFDQyxLQUFLLEVBQUM7WUFDMUNHLE1BQU07WUFDTkMsVUFBVTtRQUNaO1FBQ0FDLFNBQVM7UUFDVEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFNBQVMsQUFDUCxxQkFBR3pCLFdBQVd5QixPQUFPLFNBRGQ7WUFFUCxJQUFJQyxnQkFBTyxDQUFDQywwQkFBMEI7U0FDdkM7O0lBR0h6QixjQUFjMEIsTUFBTSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQztRQUM5QkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2I7Ozs7OztLQU1DLEdBQ0RDLEtBQUs7WUFDSHBDLFNBQVFZLE9BQU8sQ0FBQztZQUNoQjtnQkFDRXlCLFFBQVFyQyxTQUFRWSxPQUFPLENBQUM7Z0JBQ3hCMEIsU0FBUztvQkFDUEMsS0FBSyxTQUFDQTsrQkFBUyxDQUFDQSxJQUFJQyxVQUFVLENBQUM7O2dCQUNqQztZQUNGO1lBQ0E7Z0JBQ0VILFFBQVFyQyxTQUFRWSxPQUFPLENBQUM7Z0JBQ3hCMEIsU0FBUztvQkFDUEcsZ0JBQWdCO3dCQUNkYixTQUFTOzRCQUFDNUIsU0FBUVksT0FBTyxDQUFDO3lCQUFzQjtvQkFDbEQ7Z0JBQ0Y7WUFDRjtZQUNBWixTQUFRWSxPQUFPLENBQUM7U0FDakI7SUFDSDtJQUVBLElBQUlWLGNBQWNrQixLQUFLLENBQUNTLE9BQU8sSUFBSSxPQUFPM0IsY0FBY2tCLEtBQUssQ0FBQ1MsT0FBTyxLQUFLLFlBQVk7UUFDcEZ4QixnQkFBZ0JILGNBQWNrQixLQUFLLENBQUNTLE9BQU8sQ0FBQ3hCO0lBQzlDO0lBRUEsT0FBT0E7QUFDVCJ9