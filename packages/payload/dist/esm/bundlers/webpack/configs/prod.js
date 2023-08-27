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
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { SwcMinifyWebpackPlugin } from "swc-minify-webpack-plugin";
import { getBaseConfig } from "./base";
export var getProdConfig = function(payloadConfig) {
    var baseConfig = getBaseConfig(payloadConfig);
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
                new SwcMinifyWebpackPlugin()
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
            new MiniCSSExtractPlugin({
                filename: "[name].[contenthash].css",
                ignoreOrder: true
            })
        ])
    });
    webpackConfig.module.rules.push({
        test: /\.(scss|css)$/,
        sideEffects: true,
        use: [
            MiniCSSExtractPlugin.loader,
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
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
    }
    if (payloadConfig.admin.webpack && typeof payloadConfig.admin.webpack === "function") {
        webpackConfig = payloadConfig.admin.webpack(webpackConfig);
    }
    return webpackConfig;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL2NvbmZpZ3MvcHJvZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBXZWJwYWNrUGx1Z2luSW5zdGFuY2UgfSBmcm9tICd3ZWJwYWNrJztcbmltcG9ydCBNaW5pQ1NTRXh0cmFjdFBsdWdpbiBmcm9tICdtaW5pLWNzcy1leHRyYWN0LXBsdWdpbic7XG5pbXBvcnQgeyBCdW5kbGVBbmFseXplclBsdWdpbiB9IGZyb20gJ3dlYnBhY2stYnVuZGxlLWFuYWx5emVyJztcbmltcG9ydCB7IFN3Y01pbmlmeVdlYnBhY2tQbHVnaW4gfSBmcm9tICdzd2MtbWluaWZ5LXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCB7IGdldEJhc2VDb25maWcgfSBmcm9tICcuL2Jhc2UnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGdldFByb2RDb25maWcgPSAocGF5bG9hZENvbmZpZzogU2FuaXRpemVkQ29uZmlnKTogQ29uZmlndXJhdGlvbiA9PiB7XG4gIGNvbnN0IGJhc2VDb25maWcgPSBnZXRCYXNlQ29uZmlnKHBheWxvYWRDb25maWcpIGFzIGFueTtcblxuICBsZXQgd2VicGFja0NvbmZpZzogQ29uZmlndXJhdGlvbiA9IHtcbiAgICAuLi5iYXNlQ29uZmlnLFxuICAgIG91dHB1dDoge1xuICAgICAgcHVibGljUGF0aDogYCR7cGF5bG9hZENvbmZpZy5yb3V0ZXMuYWRtaW59L2AsXG4gICAgICBwYXRoOiBwYXlsb2FkQ29uZmlnLmFkbWluLmJ1aWxkUGF0aCxcbiAgICAgIGZpbGVuYW1lOiAnW25hbWVdLltjaHVua2hhc2hdLmpzJyxcbiAgICAgIGNodW5rRmlsZW5hbWU6ICdbbmFtZV0uW2NodW5raGFzaF0uanMnLFxuICAgIH0sXG4gICAgbW9kZTogJ3Byb2R1Y3Rpb24nLFxuICAgIHN0YXRzOiAnZXJyb3JzLW9ubHknLFxuICAgIG9wdGltaXphdGlvbjoge1xuICAgICAgbWluaW1pemVyOiBbbmV3IFN3Y01pbmlmeVdlYnBhY2tQbHVnaW4oKV0sXG4gICAgICBzcGxpdENodW5rczoge1xuICAgICAgICBjYWNoZUdyb3Vwczoge1xuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgbmFtZTogJ3N0eWxlcycsXG4gICAgICAgICAgICB0ZXN0OiAvXFwuKHNhfHNjfGMpc3MkLyxcbiAgICAgICAgICAgIGNodW5rczogJ2FsbCcsXG4gICAgICAgICAgICBlbmZvcmNlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgLi4uYmFzZUNvbmZpZy5wbHVnaW5zLFxuICAgICAgbmV3IE1pbmlDU1NFeHRyYWN0UGx1Z2luKHtcbiAgICAgICAgZmlsZW5hbWU6ICdbbmFtZV0uW2NvbnRlbnRoYXNoXS5jc3MnLFxuICAgICAgICBpZ25vcmVPcmRlcjogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH07XG5cbiAgd2VicGFja0NvbmZpZy5tb2R1bGUucnVsZXMucHVzaCh7XG4gICAgdGVzdDogL1xcLihzY3NzfGNzcykkLyxcbiAgICBzaWRlRWZmZWN0czogdHJ1ZSxcbiAgICB1c2U6IFtcbiAgICAgIE1pbmlDU1NFeHRyYWN0UGx1Z2luLmxvYWRlcixcbiAgICAgIHtcbiAgICAgICAgbG9hZGVyOiByZXF1aXJlLnJlc29sdmUoJ2Nzcy1sb2FkZXInKSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIHVybDogKHVybCkgPT4gKCF1cmwuc3RhcnRzV2l0aCgnLycpKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCdwb3N0Y3NzLWxvYWRlcicpLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcG9zdGNzc09wdGlvbnM6IHtcbiAgICAgICAgICAgIHBsdWdpbnM6IFtyZXF1aXJlLnJlc29sdmUoJ3Bvc3Rjc3MtcHJlc2V0LWVudicpXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJlcXVpcmUucmVzb2x2ZSgnc2Fzcy1sb2FkZXInKSxcbiAgICBdLFxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuUEFZTE9BRF9BTkFMWVpFX0JVTkRMRSkge1xuICAgIHdlYnBhY2tDb25maWcucGx1Z2lucy5wdXNoKG5ldyBCdW5kbGVBbmFseXplclBsdWdpbigpIGFzIHVua25vd24gYXMgV2VicGFja1BsdWdpbkluc3RhbmNlKTtcbiAgfVxuXG4gIGlmIChwYXlsb2FkQ29uZmlnLmFkbWluLndlYnBhY2sgJiYgdHlwZW9mIHBheWxvYWRDb25maWcuYWRtaW4ud2VicGFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHdlYnBhY2tDb25maWcgPSBwYXlsb2FkQ29uZmlnLmFkbWluLndlYnBhY2sod2VicGFja0NvbmZpZyk7XG4gIH1cblxuICByZXR1cm4gd2VicGFja0NvbmZpZztcbn07XG4iXSwibmFtZXMiOlsiTWluaUNTU0V4dHJhY3RQbHVnaW4iLCJCdW5kbGVBbmFseXplclBsdWdpbiIsIlN3Y01pbmlmeVdlYnBhY2tQbHVnaW4iLCJnZXRCYXNlQ29uZmlnIiwiZ2V0UHJvZENvbmZpZyIsInBheWxvYWRDb25maWciLCJiYXNlQ29uZmlnIiwid2VicGFja0NvbmZpZyIsIm91dHB1dCIsInB1YmxpY1BhdGgiLCJyb3V0ZXMiLCJhZG1pbiIsInBhdGgiLCJidWlsZFBhdGgiLCJmaWxlbmFtZSIsImNodW5rRmlsZW5hbWUiLCJtb2RlIiwic3RhdHMiLCJvcHRpbWl6YXRpb24iLCJtaW5pbWl6ZXIiLCJzcGxpdENodW5rcyIsImNhY2hlR3JvdXBzIiwic3R5bGVzIiwibmFtZSIsInRlc3QiLCJjaHVua3MiLCJlbmZvcmNlIiwicGx1Z2lucyIsImlnbm9yZU9yZGVyIiwibW9kdWxlIiwicnVsZXMiLCJwdXNoIiwic2lkZUVmZmVjdHMiLCJ1c2UiLCJsb2FkZXIiLCJyZXF1aXJlIiwicmVzb2x2ZSIsIm9wdGlvbnMiLCJ1cmwiLCJzdGFydHNXaXRoIiwicG9zdGNzc09wdGlvbnMiLCJwcm9jZXNzIiwiZW52IiwiUEFZTE9BRF9BTkFMWVpFX0JVTkRMRSIsIndlYnBhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBT0EsMEJBQTBCLDBCQUEwQjtBQUMzRCxTQUFTQyxvQkFBb0IsUUFBUSwwQkFBMEI7QUFDL0QsU0FBU0Msc0JBQXNCLFFBQVEsNEJBQTRCO0FBQ25FLFNBQVNDLGFBQWEsUUFBUSxTQUFTO0FBR3ZDLE9BQU8sSUFBTUMsZ0JBQWdCLFNBQUNDO0lBQzVCLElBQU1DLGFBQWFILGNBQWNFO0lBRWpDLElBQUlFLGdCQUErQix3Q0FDOUJEO1FBQ0hFLFFBQVE7WUFDTkMsWUFBWSxBQUFDLEdBQTZCLE9BQTNCSixjQUFjSyxNQUFNLENBQUNDLEtBQUssRUFBQztZQUMxQ0MsTUFBTVAsY0FBY00sS0FBSyxDQUFDRSxTQUFTO1lBQ25DQyxVQUFVO1lBQ1ZDLGVBQWU7UUFDakI7UUFDQUMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGNBQWM7WUFDWkMsV0FBVztnQkFBQyxJQUFJakI7YUFBeUI7WUFDekNrQixhQUFhO2dCQUNYQyxhQUFhO29CQUNYQyxRQUFRO3dCQUNOQyxNQUFNO3dCQUNOQyxNQUFNO3dCQUNOQyxRQUFRO3dCQUNSQyxTQUFTO29CQUNYO2dCQUNGO1lBQ0Y7UUFDRjtRQUNBQyxTQUFTLEFBQ1AscUJBQUdyQixXQUFXcUIsT0FBTyxTQURkO1lBRVAsSUFBSTNCLHFCQUFxQjtnQkFDdkJjLFVBQVU7Z0JBQ1ZjLGFBQWE7WUFDZjtTQUNEOztJQUdIckIsY0FBY3NCLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUM7UUFDOUJQLE1BQU07UUFDTlEsYUFBYTtRQUNiQyxLQUFLO1lBQ0hqQyxxQkFBcUJrQyxNQUFNO1lBQzNCO2dCQUNFQSxRQUFRQyxRQUFRQyxPQUFPLENBQUM7Z0JBQ3hCQyxTQUFTO29CQUNQQyxLQUFLLFNBQUNBOytCQUFTLENBQUNBLElBQUlDLFVBQVUsQ0FBQzs7Z0JBQ2pDO1lBQ0Y7WUFDQTtnQkFDRUwsUUFBUUMsUUFBUUMsT0FBTyxDQUFDO2dCQUN4QkMsU0FBUztvQkFDUEcsZ0JBQWdCO3dCQUNkYixTQUFTOzRCQUFDUSxRQUFRQyxPQUFPLENBQUM7eUJBQXNCO29CQUNsRDtnQkFDRjtZQUNGO1lBQ0FELFFBQVFDLE9BQU8sQ0FBQztTQUNqQjtJQUNIO0lBRUEsSUFBSUssUUFBUUMsR0FBRyxDQUFDQyxzQkFBc0IsRUFBRTtRQUN0Q3BDLGNBQWNvQixPQUFPLENBQUNJLElBQUksQ0FBQyxJQUFJOUI7SUFDakM7SUFFQSxJQUFJSSxjQUFjTSxLQUFLLENBQUNpQyxPQUFPLElBQUksT0FBT3ZDLGNBQWNNLEtBQUssQ0FBQ2lDLE9BQU8sS0FBSyxZQUFZO1FBQ3BGckMsZ0JBQWdCRixjQUFjTSxLQUFLLENBQUNpQyxPQUFPLENBQUNyQztJQUM5QztJQUVBLE9BQU9BO0FBQ1QsRUFBRSJ9