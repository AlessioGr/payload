"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getProdConfig", {
    enumerable: true,
    get: function() {
        return getProdConfig;
    }
});
var _minicssextractplugin = /*#__PURE__*/ _interop_require_default(require("mini-css-extract-plugin"));
var _webpackbundleanalyzer = require("webpack-bundle-analyzer");
var _swcminifywebpackplugin = require("swc-minify-webpack-plugin");
var _base = require("./base");
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
var getProdConfig = function(payloadConfig) {
    var baseConfig = (0, _base.getBaseConfig)(payloadConfig);
    var webpackConfig = _object_spread_props(_object_spread({}, baseConfig), {
        output: {
            publicPath: "".concat(payloadConfig.routes.admin, "/"),
            path: payloadConfig.admin.buildPath,
            filename: "[name].[chunkhash].js",
            chunkFilename: "[name].[chunkhash].js"
        },
        mode: "production",
        stats: "errors-only",
        optimization: {
            minimizer: [
                new _swcminifywebpackplugin.SwcMinifyWebpackPlugin()
            ],
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: "styles",
                        test: /\.(sa|sc|c)ss$/,
                        chunks: "all",
                        enforce: true
                    }
                }
            }
        },
        plugins: _to_consumable_array(baseConfig.plugins).concat([
            new _minicssextractplugin.default({
                filename: "[name].[contenthash].css",
                ignoreOrder: true
            })
        ])
    });
    webpackConfig.module.rules.push({
        test: /\.(scss|css)$/,
        sideEffects: true,
        use: [
            _minicssextractplugin.default.loader,
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
    if (process.env.PAYLOAD_ANALYZE_BUNDLE) {
        webpackConfig.plugins.push(new _webpackbundleanalyzer.BundleAnalyzerPlugin());
    }
    if (payloadConfig.admin.webpack && typeof payloadConfig.admin.webpack === "function") {
        webpackConfig = payloadConfig.admin.webpack(webpackConfig);
    }
    return webpackConfig;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL2NvbmZpZ3MvcHJvZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBXZWJwYWNrUGx1Z2luSW5zdGFuY2UgfSBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBNaW5pQ1NTRXh0cmFjdFBsdWdpbiBmcm9tICdtaW5pLWNzcy1leHRyYWN0LXBsdWdpbic7XG5pbXBvcnQgeyBCdW5kbGVBbmFseXplclBsdWdpbiB9IGZyb20gJ3dlYnBhY2stYnVuZGxlLWFuYWx5emVyJztcbmltcG9ydCB7IFN3Y01pbmlmeVdlYnBhY2tQbHVnaW4gfSBmcm9tICdzd2MtbWluaWZ5LXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCB7IGdldEJhc2VDb25maWcgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2RDb25maWcgPSAocGF5bG9hZENvbmZpZzogU2FuaXRpemVkQ29uZmlnKTogQ29uZmlndXJhdGlvbiA9PiB7XG4gIGNvbnN0IGJhc2VDb25maWcgPSBnZXRCYXNlQ29uZmlnKHBheWxvYWRDb25maWcpIGFzIGFueTtcblxuICBsZXQgd2VicGFja0NvbmZpZzogQ29uZmlndXJhdGlvbiA9IHtcbiAgICAuLi5iYXNlQ29uZmlnLFxuICAgIG91dHB1dDoge1xuICAgICAgcHVibGljUGF0aDogYCR7cGF5bG9hZENvbmZpZy5yb3V0ZXMuYWRtaW59L2AsXG4gICAgICBwYXRoOiBwYXlsb2FkQ29uZmlnLmFkbWluLmJ1aWxkUGF0aCxcbiAgICAgIGZpbGVuYW1lOiAnW25hbWVdLltjaHVua2hhc2hdLmpzJyxcbiAgICAgIGNodW5rRmlsZW5hbWU6ICdbbmFtZV0uW2NodW5raGFzaF0uanMnLFxuICAgIH0sXG4gICAgbW9kZTogJ3Byb2R1Y3Rpb24nLFxuICAgIHN0YXRzOiAnZXJyb3JzLW9ubHknLFxuICAgIG9wdGltaXphdGlvbjoge1xuICAgICAgbWluaW1pemVyOiBbbmV3IFN3Y01pbmlmeVdlYnBhY2tQbHVnaW4oKV0sXG4gICAgICBzcGxpdENodW5rczoge1xuICAgICAgICBjYWNoZUdyb3Vwczoge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgbmFtZTogJ3N0eWxlcycsXG4gICAgICAgICAgICB0ZXN0OiAvXFwuKHNhfHNjfGMpc3MkLyxcbiAgICAgICAgICAgIGNodW5rczogJ2FsbCcsXG4gICAgICAgICAgICBlbmZvcmNlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgLi4uYmFzZUNvbmZpZy5wbHVnaW5zLFxuICAgICAgbmV3IE1pbmlDU1NFeHRyYWN0UGx1Z2luKHtcbiAgICAgICAgZmlsZW5hbWU6ICdbbmFtZV0uW2NvbnRlbnRoYXNoXS5jc3MnLFxuICAgICAgICBpZ25vcmVPcmRlcjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH07XG5cbiAgd2VicGFja0NvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgdGVzdDogL1xcLihzY3NzfGNzcykkLyxcbiAgICBzaWRlRWZmZWN0czogdHJ1ZSxcbiAgICB1c2U6IFtcbiAgICAgIE1pbmlDU1NFeHRyYWN0UGx1Z2luLmxvYWRlcixcbiAgICAgIHtcbiAgICAgICAgbG9hZGVyOiByZXF1aXJlLnJlc29sdmUoJ2Nzcy1sb2FkZXInKSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHVybDogKHVybCkgPT4gKCF1cmwuc3RhcnRzV2l0aCgnLycpKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCdwb3N0Y3NzLWxvYWRlcicpLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcG9zdGNzc09wdGlvbnM6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtyZXF1aXJlLnJlc29sdmUoJ3Bvc3Rjc3MtcHJlc2V0LWVudicpXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmUucmVzb2x2ZSgnc2Fzcy1sb2FkZXInKSxcbiAgICBdLFxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuUEFZTE9BRF9BTkFMWVpFX0JVTkRMRSkge1xuICAgIHdlYnBhY2tDb25maWcucGx1Z2lucy5wdXNoKG5ldyBCdW5kbGVBbmFseXplclBsdWdpbigpIGFzIHVua25vd24gYXMgV2VicGFja1BsdWdpbkluc3RhbmNlKTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkQ29uZmlnLmFkbWluLndlYnBhY2sgJiYgdHlwZW9mIHBheWxvYWRDb25maWcuYWRtaW4ud2VicGFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHdlYnBhY2tDb25maWcgPSBwYXlsb2FkQ29uZmlnLmFkbWluLndlYnBhY2sod2VicGFja0NvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gd2VicGFja0NvbmZpZztcbn07XG4iXSwibmFtZXMiOlsiZ2V0UHJvZENvbmZpZyIsInBheWxvYWRDb25maWciLCJiYXNlQ29uZmlnIiwiZ2V0QmFzZUNvbmZpZyIsIndlYnBhY2tDb25maWciLCJvdXRwdXQiLCJwdWJsaWNQYXRoIiwicm91dGVzIiwiYWRtaW4iLCJwYXRoIiwiYnVpbGRQYXRoIiwiZmlsZW5hbWUiLCJjaHVua0ZpbGVuYW1lIiwibW9kZSIsInN0YXRzIiwib3B0aW1pemF0aW9uIiwibWluaW1pemVyIiwiU3djTWluaWZ5V2VicGFja1BsdWdpbiIsInNwbGl0Q2h1bmtzIiwiY2FjaGVHcm91cHMiLCJzdHlsZXMiLCJuYW1lIiwidGVzdCIsImNodW5rcyIsImVuZm9yY2UiLCJwbHVnaW5zIiwiTWluaUNTU0V4dHJhY3RQbHVnaW4iLCJpZ25vcmVPcmRlciIsIm1vZHVsZSIsInJ1bGVzIiwicHVzaCIsInNpZGVFZmZlY3RzIiwidXNlIiwibG9hZGVyIiwicmVxdWlyZSIsInJlc29sdmUiLCJvcHRpb25zIiwidXJsIiwic3RhcnRzV2l0aCIsInBvc3Rjc3NPcHRpb25zIiwicHJvY2VzcyIsImVudiIsIlBBWUxPQURfQU5BTFlaRV9CVU5ETEUiLCJCdW5kbGVBbmFseXplclBsdWdpbiIsIndlYnBhY2siXSwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzs7ZUFBQUE7OzsyRUFOb0I7cUNBQ0k7c0NBQ0U7b0JBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3ZCLElBQU1BLGdCQUFnQixTQUFDQztJQUM1QixJQUFNQyxhQUFhQyxJQUFBQSxtQkFBYSxFQUFDRjtJQUVqQyxJQUFJRyxnQkFBK0Isd0NBQzlCRjtRQUNIRyxRQUFRO1lBQ05DLFlBQVksQUFBQyxHQUE2QixPQUEzQkwsY0FBY00sTUFBTSxDQUFDQyxLQUFLLEVBQUM7WUFDMUNDLE1BQU1SLGNBQWNPLEtBQUssQ0FBQ0UsU0FBUztZQUNuQ0MsVUFBVTtZQUNWQyxlQUFlO1FBQ2pCO1FBQ0FDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxjQUFjO1lBQ1pDLFdBQVc7Z0JBQUMsSUFBSUMsOENBQXNCO2FBQUc7WUFDekNDLGFBQWE7Z0JBQ1hDLGFBQWE7b0JBQ1hDLFFBQVE7d0JBQ05DLE1BQU07d0JBQ05DLE1BQU07d0JBQ05DLFFBQVE7d0JBQ1JDLFNBQVM7b0JBQ1g7Z0JBQ0Y7WUFDRjtRQUNGO1FBQ0FDLFNBQVMsQUFDUCxxQkFBR3ZCLFdBQVd1QixPQUFPLFNBRGQ7WUFFUCxJQUFJQyw2QkFBb0IsQ0FBQztnQkFDdkJmLFVBQVU7Z0JBQ1ZnQixhQUFhO1lBQ2Y7U0FDRDs7SUFHSHZCLGNBQWN3QixNQUFNLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO1FBQzlCUixNQUFNO1FBQ05TLGFBQWE7UUFDYkMsS0FBSztZQUNITiw2QkFBb0IsQ0FBQ08sTUFBTTtZQUMzQjtnQkFDRUEsUUFBUUMsUUFBUUMsT0FBTyxDQUFDO2dCQUN4QkMsU0FBUztvQkFDUEMsS0FBSyxTQUFDQTsrQkFBUyxDQUFDQSxJQUFJQyxVQUFVLENBQUM7O2dCQUNqQztZQUNGO1lBQ0E7Z0JBQ0VMLFFBQVFDLFFBQVFDLE9BQU8sQ0FBQztnQkFDeEJDLFNBQVM7b0JBQ1BHLGdCQUFnQjt3QkFDZGQsU0FBUzs0QkFBQ1MsUUFBUUMsT0FBTyxDQUFDO3lCQUFzQjtvQkFDbEQ7Z0JBQ0Y7WUFDRjtZQUNBRCxRQUFRQyxPQUFPLENBQUM7U0FDakI7SUFDSDtJQUVBLElBQUlLLFFBQVFDLEdBQUcsQ0FBQ0Msc0JBQXNCLEVBQUU7UUFDdEN0QyxjQUFjcUIsT0FBTyxDQUFDSyxJQUFJLENBQUMsSUFBSWEsMkNBQW9CO0lBQ3JEO0lBRUEsSUFBSTFDLGNBQWNPLEtBQUssQ0FBQ29DLE9BQU8sSUFBSSxPQUFPM0MsY0FBY08sS0FBSyxDQUFDb0MsT0FBTyxLQUFLLFlBQVk7UUFDcEZ4QyxnQkFBZ0JILGNBQWNPLEtBQUssQ0FBQ29DLE9BQU8sQ0FBQ3hDO0lBQzlDO0lBRUEsT0FBT0E7QUFDVCJ9