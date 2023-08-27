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
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _minicssextractplugin = /*#__PURE__*/ _interop_require_default(require("mini-css-extract-plugin"));
var _terserwebpackplugin = /*#__PURE__*/ _interop_require_default(require("terser-webpack-plugin"));
var _cssminimizerwebpackplugin = /*#__PURE__*/ _interop_require_default(require("css-minimizer-webpack-plugin"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = {
    entry: {
        main: [
            _path.default.resolve(__dirname, "../../admin/components/index.js")
        ]
    },
    externals: {
        react: "react"
    },
    output: {
        path: _path.default.resolve(__dirname, "../../exports/components"),
        publicPath: "/",
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    optimization: {
        minimizer: [
            new _terserwebpackplugin.default({
                extractComments: false
            }),
            new _cssminimizerwebpackplugin.default({})
        ]
    },
    mode: "production",
    stats: "errors-only",
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                /*resolve: {
                    fullySpecified: false
                },*/ use: [
                    {
                        loader: require.resolve("swc-loader")
                    }
                ]
            },
            {
                oneOf: [
                    {
                        test: [
                            /\.bmp$/,
                            /\.gif$/,
                            /\.jpe?g$/,
                            /\.png$/
                        ],
                        loader: require.resolve("url-loader"),
                        options: {
                            limit: 10000,
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    },
                    {
                        test: /\.(sa|sc|c)ss$/,
                        sideEffects: true,
                        use: [
                            _minicssextractplugin.default.loader,
                            "css-loader",
                            {
                                loader: "postcss-loader",
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            "postcss-preset-env"
                                        ]
                                    }
                                }
                            },
                            "sass-loader"
                        ]
                    },
                    {
                        exclude: [
                            /\.(js|jsx|mjs)$/,
                            /\.html$/,
                            /\.json$/
                        ],
                        loader: require.resolve("file-loader"),
                        options: {
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new _minicssextractplugin.default({
            filename: "styles.css",
            ignoreOrder: true
        })
    ],
    resolve: {
        mainFiles: [
            "index"
        ],
        alias: {
            "payload-scss-overrides": _path.default.resolve(__dirname, "../../admin/scss/overrides.scss")
        },
        modules: [
            "node_modules",
            _path.default.resolve(__dirname, "../../../node_modules")
        ]
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL2NvbXBvbmVudHMuY2pzLmNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBNaW5pQ1NTRXh0cmFjdFBsdWdpbiBmcm9tICdtaW5pLWNzcy1leHRyYWN0LXBsdWdpbic7XG5pbXBvcnQgVGVyc2VySlNQbHVnaW4gZnJvbSAndGVyc2VyLXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCB0ZXJzZXIgZnJvbSAndGVyc2VyJzsgLy8gSU1QT1JUQU5UIC0gRE8gTk9UIFJFTU9WRTogVGhpcyBpcyByZXF1aXJlZCBmb3IgcG5wbSdzIGRlZmF1bHQgaXNvbGF0ZWQgbW9kZSB0byB3b3JrIC0gZXZlbiB0aG91Z2ggdGhlIGltcG9ydCBpcyBub3QgdXNlZC4gVGhpcyBpcyBkdWUgdG8gYSB0eXBlc2NyaXB0IGJ1ZzogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy80NzY2MyNpc3N1ZWNvbW1lbnQtMTUxOTEzODE4OS4gKHRzYnVnaXNvbGF0ZWRtb2RlKVxuaW1wb3J0IE9wdGltaXplQ1NTQXNzZXRzUGx1Z2luIGZyb20gJ2Nzcy1taW5pbWl6ZXItd2VicGFjay1wbHVnaW4nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBlbnRyeToge1xuICAgICAgICBtYWluOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvaW5kZXguanMnKV0sXG4gICAgfSxcbiAgICBleHRlcm5hbHM6IHtcbiAgICAgICAgcmVhY3Q6ICdyZWFjdCcsXG4gICAgfSxcbiAgICBvdXRwdXQ6IHtcbiAgICAgICAgcGF0aDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL2V4cG9ydHMvY29tcG9uZW50cycpLFxuICAgICAgICBwdWJsaWNQYXRoOiAnLycsXG4gICAgICAgIGZpbGVuYW1lOiAnaW5kZXguanMnLFxuICAgICAgICBsaWJyYXJ5VGFyZ2V0OiAnY29tbW9uanMyJyxcbiAgICB9LFxuICAgIG9wdGltaXphdGlvbjoge1xuICAgICAgICBtaW5pbWl6ZXI6IFtuZXcgVGVyc2VySlNQbHVnaW4oe1xuICAgICAgICAgICAgZXh0cmFjdENvbW1lbnRzOiBmYWxzZSxcbiAgICAgICAgfSksIG5ldyBPcHRpbWl6ZUNTU0Fzc2V0c1BsdWdpbih7fSldLFxuICAgIH0sXG4gICAgbW9kZTogJ3Byb2R1Y3Rpb24nLFxuICAgIHN0YXRzOiAnZXJyb3JzLW9ubHknLFxuICAgIG1vZHVsZToge1xuICAgICAgICBydWxlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC4odHxqKXN4PyQvLFxuICAgICAgICAgICAgICAgIGV4Y2x1ZGU6IC9ub2RlX21vZHVsZXMvLFxuICAgICAgICAgICAgICAgIC8qcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBmdWxseVNwZWNpZmllZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LCovXG4gICAgICAgICAgICAgICAgdXNlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCdzd2MtbG9hZGVyJyksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb25lT2Y6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdDogWy9cXC5ibXAkLywgL1xcLmdpZiQvLCAvXFwuanBlP2ckLywgL1xcLnBuZyQvXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCd1cmwtbG9hZGVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzdGF0aWMvbWVkaWEvW25hbWVdLltoYXNoOjhdLltleHRdJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlc3Q6IC9cXC4oc2F8c2N8YylzcyQvLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZUVmZmVjdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW5pQ1NTRXh0cmFjdFBsdWdpbi5sb2FkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Nzcy1sb2FkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyOiAncG9zdGNzcy1sb2FkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Y3NzT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Bvc3Rjc3MtcHJlc2V0LWVudicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2Fzcy1sb2FkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZTogWy9cXC4oanN8anN4fG1qcykkLywgL1xcLmh0bWwkLywgL1xcLmpzb24kL10sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI6IHJlcXVpcmUucmVzb2x2ZSgnZmlsZS1sb2FkZXInKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnc3RhdGljL21lZGlhL1tuYW1lXS5baGFzaDo4XS5bZXh0XScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICBuZXcgTWluaUNTU0V4dHJhY3RQbHVnaW4oe1xuICAgICAgICAgICAgZmlsZW5hbWU6ICdzdHlsZXMuY3NzJyxcbiAgICAgICAgICAgIGlnbm9yZU9yZGVyOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgbWFpbkZpbGVzOiBbJ2luZGV4J10sXG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICAncGF5bG9hZC1zY3NzLW92ZXJyaWRlcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi9hZG1pbi9zY3NzL292ZXJyaWRlcy5zY3NzJyksXG4gICAgICAgIH0sXG4gICAgICAgIG1vZHVsZXM6IFsnbm9kZV9tb2R1bGVzJywgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uL25vZGVfbW9kdWxlcycpXSxcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJlbnRyeSIsIm1haW4iLCJwYXRoIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImV4dGVybmFscyIsInJlYWN0Iiwib3V0cHV0IiwicHVibGljUGF0aCIsImZpbGVuYW1lIiwibGlicmFyeVRhcmdldCIsIm9wdGltaXphdGlvbiIsIm1pbmltaXplciIsIlRlcnNlckpTUGx1Z2luIiwiZXh0cmFjdENvbW1lbnRzIiwiT3B0aW1pemVDU1NBc3NldHNQbHVnaW4iLCJtb2RlIiwic3RhdHMiLCJtb2R1bGUiLCJydWxlcyIsInRlc3QiLCJleGNsdWRlIiwidXNlIiwibG9hZGVyIiwicmVxdWlyZSIsIm9uZU9mIiwib3B0aW9ucyIsImxpbWl0IiwibmFtZSIsInNpZGVFZmZlY3RzIiwiTWluaUNTU0V4dHJhY3RQbHVnaW4iLCJwb3N0Y3NzT3B0aW9ucyIsInBsdWdpbnMiLCJpZ25vcmVPcmRlciIsIm1haW5GaWxlcyIsImFsaWFzIiwibW9kdWxlcyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFPQTs7O2VBQUE7OzsyREFQaUI7MkVBQ2dCOzBFQUNOO2dGQUVTOzs7Ozs7SUFHcEMsV0FBZTtJQUNYQSxPQUFPO1FBQ0hDLE1BQU07WUFBQ0MsYUFBSSxDQUFDQyxPQUFPLENBQUNDLFdBQVc7U0FBbUM7SUFDdEU7SUFDQUMsV0FBVztRQUNQQyxPQUFPO0lBQ1g7SUFDQUMsUUFBUTtRQUNKTCxNQUFNQSxhQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVztRQUM5QkksWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLGVBQWU7SUFDbkI7SUFDQUMsY0FBYztRQUNWQyxXQUFXO1lBQUMsSUFBSUMsNEJBQWMsQ0FBQztnQkFDM0JDLGlCQUFpQjtZQUNyQjtZQUFJLElBQUlDLGtDQUF1QixDQUFDLENBQUM7U0FBRztJQUN4QztJQUNBQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsUUFBUTtRQUNKQyxPQUFPO1lBQ0g7Z0JBQ0lDLE1BQU07Z0JBQ05DLFNBQVM7Z0JBQ1Q7O2tCQUVFLEdBQ0ZDLEtBQUs7b0JBQ0Q7d0JBQ0lDLFFBQVFDLFFBQVFyQixPQUFPLENBQUM7b0JBQzVCO2lCQUNIO1lBQ0w7WUFDQTtnQkFDSXNCLE9BQU87b0JBQ0g7d0JBQ0lMLE1BQU07NEJBQUM7NEJBQVU7NEJBQVU7NEJBQVk7eUJBQVM7d0JBQ2hERyxRQUFRQyxRQUFRckIsT0FBTyxDQUFDO3dCQUN4QnVCLFNBQVM7NEJBQ0xDLE9BQU87NEJBQ1BDLE1BQU07d0JBQ1Y7b0JBQ0o7b0JBQ0E7d0JBQ0lSLE1BQU07d0JBQ05TLGFBQWE7d0JBQ2JQLEtBQUs7NEJBQ0RRLDZCQUFvQixDQUFDUCxNQUFNOzRCQUMzQjs0QkFDQTtnQ0FDSUEsUUFBUTtnQ0FDUkcsU0FBUztvQ0FDTEssZ0JBQWdCO3dDQUNaQyxTQUFTOzRDQUNMO3lDQUNIO29DQUNMO2dDQUNKOzRCQUNKOzRCQUNBO3lCQUNIO29CQUNMO29CQUNBO3dCQUNJWCxTQUFTOzRCQUFDOzRCQUFtQjs0QkFBVzt5QkFBVTt3QkFDbERFLFFBQVFDLFFBQVFyQixPQUFPLENBQUM7d0JBQ3hCdUIsU0FBUzs0QkFDTEUsTUFBTTt3QkFDVjtvQkFDSjtpQkFDSDtZQUNMO1NBQ0g7SUFDTDtJQUNBSSxTQUFTO1FBQ0wsSUFBSUYsNkJBQW9CLENBQUM7WUFDckJyQixVQUFVO1lBQ1Z3QixhQUFhO1FBQ2pCO0tBQ0g7SUFDRDlCLFNBQVM7UUFDTCtCLFdBQVc7WUFBQztTQUFRO1FBQ3BCQyxPQUFPO1lBQ0gsMEJBQTBCakMsYUFBSSxDQUFDQyxPQUFPLENBQUNDLFdBQVc7UUFDdEQ7UUFDQWdDLFNBQVM7WUFBQztZQUFnQmxDLGFBQUksQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXO1NBQXlCO0lBQy9FO0FBQ0oifQ==