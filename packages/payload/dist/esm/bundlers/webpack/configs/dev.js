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
import webpack from "webpack";
import md5 from "md5";
import { getBaseConfig } from "./base";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";
var __filename = fileURLToPath(import.meta.url);
var require = createRequire(import.meta.url);
export var getDevConfig = function(payloadConfig) {
    var baseConfig = getBaseConfig(payloadConfig);
    var webpackConfig = _object_spread_props(_object_spread({}, baseConfig), {
        cache: {
            type: "filesystem",
            // version cache when there are changes to aliases
            version: md5(Object.entries(baseConfig.resolve.alias).join()),
            buildDependencies: {
                config: [
                    __filename
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
            new webpack.HotModuleReplacementPlugin()
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
            require.resolve("style-loader"),
            {
                loader: require.resolve("css-loader"),
                options: {
                    url: function(url) {
                        return !url.startsWith("/");
                    }
                }
            },
            {
                loader: require.resolve("postcss-loader"),
                options: {
                    postcssOptions: {
                        plugins: [
                            require.resolve("postcss-preset-env")
                        ]
                    }
                }
            },
            require.resolve("sass-loader")
        ]
    });
    if (payloadConfig.admin.webpack && typeof payloadConfig.admin.webpack === "function") {
        webpackConfig = payloadConfig.admin.webpack(webpackConfig);
    }
    return webpackConfig;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL2NvbmZpZ3MvZGV2LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWJwYWNrLCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBtZDUgZnJvbSAnbWQ1JztcbmltcG9ydCB7IGdldEJhc2VDb25maWcgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWlyZSB9IGZyb20gJ25vZGU6bW9kdWxlJztcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcblxuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcblxuZXhwb3J0IGNvbnN0IGdldERldkNvbmZpZyA9IChwYXlsb2FkQ29uZmlnOiBTYW5pdGl6ZWRDb25maWcpOiBDb25maWd1cmF0aW9uID0+IHtcblxuICBjb25zdCBiYXNlQ29uZmlnID0gZ2V0QmFzZUNvbmZpZyhwYXlsb2FkQ29uZmlnKSBhcyBhbnk7XG5cbiAgbGV0IHdlYnBhY2tDb25maWc6IENvbmZpZ3VyYXRpb24gPSB7XG4gICAgLi4uYmFzZUNvbmZpZyxcbiAgICBjYWNoZToge1xuICAgICAgdHlwZTogJ2ZpbGVzeXN0ZW0nLFxuICAgICAgLy8gdmVyc2lvbiBjYWNoZSB3aGVuIHRoZXJlIGFyZSBjaGFuZ2VzIHRvIGFsaWFzZXNcbiAgICAgIHZlcnNpb246IG1kNShPYmplY3QuZW50cmllcyhiYXNlQ29uZmlnLnJlc29sdmUuYWxpYXMpLmpvaW4oKSksXG4gICAgICBidWlsZERlcGVuZGVuY2llczoge1xuICAgICAgICBjb25maWc6IFtfX2ZpbGVuYW1lXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBlbnRyeToge1xuICAgICAgLi4uYmFzZUNvbmZpZy5lbnRyeSxcbiAgICAgIG1haW46IFtcbiAgICAgICAgYHdlYnBhY2staG90LW1pZGRsZXdhcmUvY2xpZW50P3BhdGg9JHtwYXlsb2FkQ29uZmlnLnJvdXRlcy5hZG1pbn0vX193ZWJwYWNrX2htcmAsXG4gICAgICAgIC4uLihiYXNlQ29uZmlnLmVudHJ5Lm1haW4gYXMgc3RyaW5nW10pLFxuICAgICAgXSxcbiAgICB9LFxuICAgIG91dHB1dDoge1xuICAgICAgcHVibGljUGF0aDogYCR7cGF5bG9hZENvbmZpZy5yb3V0ZXMuYWRtaW59L2AsXG4gICAgICBwYXRoOiAnLycsXG4gICAgICBmaWxlbmFtZTogJ1tuYW1lXS5qcycsXG4gICAgfSxcbiAgICBkZXZ0b29sOiAnaW5saW5lLXNvdXJjZS1tYXAnLFxuICAgIG1vZGU6ICdkZXZlbG9wbWVudCcsXG4gICAgc3RhdHM6ICdlcnJvcnMtd2FybmluZ3MnLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIC4uLmJhc2VDb25maWcucGx1Z2lucyxcbiAgICAgIG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCksXG4gICAgXSxcbiAgfTtcblxuICB3ZWJwYWNrQ29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICB0ZXN0OiAvXFwuKHNjc3N8Y3NzKSQvLFxuICAgIHNpZGVFZmZlY3RzOiB0cnVlLFxuICAgIC8qXG4gICAgICogVGhlIGxvYWRlcnMgaGVyZSBhcmUgcnVuIGluIHJldmVyc2Ugb3JkZXIuIEhlcmUgaXMgaG93IHlvdXIgbG9hZGVycyBhcmUgYmVpbmcgcHJvY2Vzc2VkOlxuICAgICAqIDEuIHNhc3MtbG9hZGVyOiBUaGlzIGxvYWRlciBjb21waWxlcyB5b3VyIFNDU1MgaW50byBDU1MuXG4gICAgICogMi4gcG9zdGNzcy1sb2FkZXI6IFRoaXMgbG9hZGVyIGFwcGxpZXMgcG9zdGNzcyB0cmFuc2Zvcm1hdGlvbnMgKHdpdGggcHJlc2V0LWVudiBwbHVnaW4gaW4geW91ciBjYXNlKS5cbiAgICAgKiAzLiBjc3MtbG9hZGVyOiBUaGlzIGxvYWRlciBpbnRlcnByZXRzIEBpbXBvcnQgYW5kIHVybCgpIGxpa2UgaW1wb3J0L3JlcXVpcmUoKSBhbmQgd2lsbCByZXNvbHZlIHRoZW0uXG4gICAgICogNC4gc3R5bGUtbG9hZGVyOiBUaGlzIGxvYWRlciBpbmplY3RzIENTUyBpbnRvIHRoZSBET00uXG4gICAgICovXG4gICAgdXNlOiBbXG4gICAgICByZXF1aXJlLnJlc29sdmUoJ3N0eWxlLWxvYWRlcicpLFxuICAgICAge1xuICAgICAgICBsb2FkZXI6IHJlcXVpcmUucmVzb2x2ZSgnY3NzLWxvYWRlcicpLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgdXJsOiAodXJsKSA9PiAoIXVybC5zdGFydHNXaXRoKCcvJykpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbG9hZGVyOiByZXF1aXJlLnJlc29sdmUoJ3Bvc3Rjc3MtbG9hZGVyJyksXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBwb3N0Y3NzT3B0aW9uczoge1xuICAgICAgICAgICAgcGx1Z2luczogW3JlcXVpcmUucmVzb2x2ZSgncG9zdGNzcy1wcmVzZXQtZW52JyldLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcmVxdWlyZS5yZXNvbHZlKCdzYXNzLWxvYWRlcicpLFxuICAgIF0sXG4gIH0pO1xuXG4gIGlmIChwYXlsb2FkQ29uZmlnLmFkbWluLndlYnBhY2sgJiYgdHlwZW9mIHBheWxvYWRDb25maWcuYWRtaW4ud2VicGFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHdlYnBhY2tDb25maWcgPSBwYXlsb2FkQ29uZmlnLmFkbWluLndlYnBhY2sod2VicGFja0NvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gd2VicGFja0NvbmZpZztcbn07XG4iXSwibmFtZXMiOlsid2VicGFjayIsIm1kNSIsImdldEJhc2VDb25maWciLCJmaWxlVVJMVG9QYXRoIiwiY3JlYXRlUmVxdWlyZSIsIl9fZmlsZW5hbWUiLCJ1cmwiLCJyZXF1aXJlIiwiZ2V0RGV2Q29uZmlnIiwicGF5bG9hZENvbmZpZyIsImJhc2VDb25maWciLCJ3ZWJwYWNrQ29uZmlnIiwiY2FjaGUiLCJ0eXBlIiwidmVyc2lvbiIsIk9iamVjdCIsImVudHJpZXMiLCJyZXNvbHZlIiwiYWxpYXMiLCJqb2luIiwiYnVpbGREZXBlbmRlbmNpZXMiLCJjb25maWciLCJlbnRyeSIsIm1haW4iLCJyb3V0ZXMiLCJhZG1pbiIsIm91dHB1dCIsInB1YmxpY1BhdGgiLCJwYXRoIiwiZmlsZW5hbWUiLCJkZXZ0b29sIiwibW9kZSIsInN0YXRzIiwicGx1Z2lucyIsIkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luIiwibW9kdWxlIiwicnVsZXMiLCJwdXNoIiwidGVzdCIsInNpZGVFZmZlY3RzIiwidXNlIiwibG9hZGVyIiwib3B0aW9ucyIsInN0YXJ0c1dpdGgiLCJwb3N0Y3NzT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxhQUFnQyxVQUFVO0FBQ2pELE9BQU9DLFNBQVMsTUFBTTtBQUN0QixTQUFTQyxhQUFhLFFBQVEsU0FBUztBQUV2QyxTQUFTQyxhQUFhLFFBQVEsTUFBTTtBQUNwQyxTQUFTQyxhQUFhLFFBQVEsY0FBYztBQUU1QyxJQUFNQyxhQUFhRixjQUFjLFlBQVlHLEdBQUc7QUFFaEQsSUFBTUMsVUFBVUgsY0FBYyxZQUFZRSxHQUFHO0FBRTdDLE9BQU8sSUFBTUUsZUFBZSxTQUFDQztJQUUzQixJQUFNQyxhQUFhUixjQUFjTztJQUVqQyxJQUFJRSxnQkFBK0Isd0NBQzlCRDtRQUNIRSxPQUFPO1lBQ0xDLE1BQU07WUFDTixrREFBa0Q7WUFDbERDLFNBQVNiLElBQUljLE9BQU9DLE9BQU8sQ0FBQ04sV0FBV08sT0FBTyxDQUFDQyxLQUFLLEVBQUVDLElBQUk7WUFDMURDLG1CQUFtQjtnQkFDakJDLFFBQVE7b0JBQUNoQjtpQkFBVztZQUN0QjtRQUNGO1FBQ0FpQixPQUFPLHdDQUNGWixXQUFXWSxLQUFLO1lBQ25CQyxNQUFNO2dCQUNILHNDQUFnRSxPQUEzQmQsY0FBY2UsTUFBTSxDQUFDQyxLQUFLLEVBQUM7YUFFbEUsQ0FISyxPQUVKLHFCQUFJZixXQUFXWSxLQUFLLENBQUNDLElBQUk7O1FBRzdCRyxRQUFRO1lBQ05DLFlBQVksQUFBQyxHQUE2QixPQUEzQmxCLGNBQWNlLE1BQU0sQ0FBQ0MsS0FBSyxFQUFDO1lBQzFDRyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtRQUNBQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxTQUFTLEFBQ1AscUJBQUd2QixXQUFXdUIsT0FBTyxTQURkO1lBRVAsSUFBSWpDLFFBQVFrQywwQkFBMEI7U0FDdkM7O0lBR0h2QixjQUFjd0IsTUFBTSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQztRQUM5QkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2I7Ozs7OztLQU1DLEdBQ0RDLEtBQUs7WUFDSGpDLFFBQVFVLE9BQU8sQ0FBQztZQUNoQjtnQkFDRXdCLFFBQVFsQyxRQUFRVSxPQUFPLENBQUM7Z0JBQ3hCeUIsU0FBUztvQkFDUHBDLEtBQUssU0FBQ0E7K0JBQVMsQ0FBQ0EsSUFBSXFDLFVBQVUsQ0FBQzs7Z0JBQ2pDO1lBQ0Y7WUFDQTtnQkFDRUYsUUFBUWxDLFFBQVFVLE9BQU8sQ0FBQztnQkFDeEJ5QixTQUFTO29CQUNQRSxnQkFBZ0I7d0JBQ2RYLFNBQVM7NEJBQUMxQixRQUFRVSxPQUFPLENBQUM7eUJBQXNCO29CQUNsRDtnQkFDRjtZQUNGO1lBQ0FWLFFBQVFVLE9BQU8sQ0FBQztTQUNqQjtJQUNIO0lBRUEsSUFBSVIsY0FBY2dCLEtBQUssQ0FBQ3pCLE9BQU8sSUFBSSxPQUFPUyxjQUFjZ0IsS0FBSyxDQUFDekIsT0FBTyxLQUFLLFlBQVk7UUFDcEZXLGdCQUFnQkYsY0FBY2dCLEtBQUssQ0FBQ3pCLE9BQU8sQ0FBQ1c7SUFDOUM7SUFFQSxPQUFPQTtBQUNULEVBQUUifQ==