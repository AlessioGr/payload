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
var _path = /*#__PURE__*/ _interop_require_wildcard(require("path"));
var _minicssextractplugin = /*#__PURE__*/ _interop_require_default(require("mini-css-extract-plugin"));
var _terserwebpackplugin = /*#__PURE__*/ _interop_require_default(require("terser-webpack-plugin"));
var _cssminimizerwebpackplugin = /*#__PURE__*/ _interop_require_default(require("css-minimizer-webpack-plugin"));
var _url = require("url");
var _nodemodule = require("node:module");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var __filename1 = (0, _url.fileURLToPath)(require("url").pathToFileURL(__filename).toString());
var _dirname = (0, _path.dirname)(__filename1);
var require1 = (0, _nodemodule.createRequire)(require("url").pathToFileURL(__filename).toString());
var _default = {
    entry: {
        main: [
            _path.default.resolve(_dirname, "../../admin/components/index.js")
        ]
    },
    externals: {
        react: "react"
    },
    output: {
        path: _path.default.resolve(_dirname, "../../exports/components"),
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
                resolve: {
                    fullySpecified: false
                },
                use: [
                    {
                        loader: require1.resolve("swc-loader")
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
                        loader: require1.resolve("url-loader"),
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
                        loader: require1.resolve("file-loader"),
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
            "payload-scss-overrides": _path.default.resolve(_dirname, "../../admin/scss/overrides.scss")
        },
        modules: [
            "node_modules",
            _path.default.resolve(_dirname, "../../../node_modules")
        ]
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL2NvbXBvbmVudHMuY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoLCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBNaW5pQ1NTRXh0cmFjdFBsdWdpbiBmcm9tICdtaW5pLWNzcy1leHRyYWN0LXBsdWdpbic7XG5pbXBvcnQgVGVyc2VySlNQbHVnaW4gZnJvbSAndGVyc2VyLXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCB0ZXJzZXIgZnJvbSAndGVyc2VyJzsgLy8gSU1QT1JUQU5UIC0gRE8gTk9UIFJFTU9WRTogVGhpcyBpcyByZXF1aXJlZCBmb3IgcG5wbSdzIGRlZmF1bHQgaXNvbGF0ZWQgbW9kZSB0byB3b3JrIC0gZXZlbiB0aG91Z2ggdGhlIGltcG9ydCBpcyBub3QgdXNlZC4gVGhpcyBpcyBkdWUgdG8gYSB0eXBlc2NyaXB0IGJ1ZzogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy80NzY2MyNpc3N1ZWNvbW1lbnQtMTUxOTEzODE4OS4gKHRzYnVnaXNvbGF0ZWRtb2RlKVxuaW1wb3J0IE9wdGltaXplQ1NTQXNzZXRzUGx1Z2luIGZyb20gJ2Nzcy1taW5pbWl6ZXItd2VicGFjay1wbHVnaW4nO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbnRyeToge1xuICAgIG1haW46IFtwYXRoLnJlc29sdmUoX2Rpcm5hbWUsICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2luZGV4LmpzJyldLFxuICB9LFxuICBleHRlcm5hbHM6IHtcbiAgICByZWFjdDogJ3JlYWN0JyxcbiAgfSxcbiAgb3V0cHV0OiB7XG4gICAgcGF0aDogcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCAnLi4vLi4vZXhwb3J0cy9jb21wb25lbnRzJyksXG4gICAgcHVibGljUGF0aDogJy8nLFxuICAgIGZpbGVuYW1lOiAnaW5kZXguanMnLFxuICAgIGxpYnJhcnlUYXJnZXQ6ICdjb21tb25qczInLFxuICB9LFxuICBvcHRpbWl6YXRpb246IHtcbiAgICBtaW5pbWl6ZXI6IFtuZXcgVGVyc2VySlNQbHVnaW4oe1xuICAgICAgZXh0cmFjdENvbW1lbnRzOiBmYWxzZSxcbiAgICB9KSwgbmV3IE9wdGltaXplQ1NTQXNzZXRzUGx1Z2luKHt9KV0sXG4gIH0sXG4gIG1vZGU6ICdwcm9kdWN0aW9uJyxcbiAgc3RhdHM6ICdlcnJvcnMtb25seScsXG4gIG1vZHVsZToge1xuICAgIHJ1bGVzOiBbXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC4odHxqKXN4PyQvLFxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGZ1bGx5U3BlY2lmaWVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB1c2U6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkZXI6IHJlcXVpcmUucmVzb2x2ZSgnc3djLWxvYWRlcicpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvbmVPZjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRlc3Q6IFsvXFwuYm1wJC8sIC9cXC5naWYkLywgL1xcLmpwZT9nJC8sIC9cXC5wbmckL10sXG4gICAgICAgICAgICBsb2FkZXI6IHJlcXVpcmUucmVzb2x2ZSgndXJsLWxvYWRlcicpLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBsaW1pdDogMTAwMDAsXG4gICAgICAgICAgICAgIG5hbWU6ICdzdGF0aWMvbWVkaWEvW25hbWVdLltoYXNoOjhdLltleHRdJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0OiAvXFwuKHNhfHNjfGMpc3MkLyxcbiAgICAgICAgICAgIHNpZGVFZmZlY3RzOiB0cnVlLFxuICAgICAgICAgICAgdXNlOiBbXG4gICAgICAgICAgICAgIE1pbmlDU1NFeHRyYWN0UGx1Z2luLmxvYWRlcixcbiAgICAgICAgICAgICAgJ2Nzcy1sb2FkZXInLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9hZGVyOiAncG9zdGNzcy1sb2FkZXInLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgIHBvc3Rjc3NPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAncG9zdGNzcy1wcmVzZXQtZW52JyxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ3Nhc3MtbG9hZGVyJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBleGNsdWRlOiBbL1xcLihqc3xqc3h8bWpzKSQvLCAvXFwuaHRtbCQvLCAvXFwuanNvbiQvXSxcbiAgICAgICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCdmaWxlLWxvYWRlcicpLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBuYW1lOiAnc3RhdGljL21lZGlhL1tuYW1lXS5baGFzaDo4XS5bZXh0XScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBuZXcgTWluaUNTU0V4dHJhY3RQbHVnaW4oe1xuICAgICAgZmlsZW5hbWU6ICdzdHlsZXMuY3NzJyxcbiAgICAgIGlnbm9yZU9yZGVyOiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgbWFpbkZpbGVzOiBbJ2luZGV4J10sXG4gICAgYWxpYXM6IHtcbiAgICAgICdwYXlsb2FkLXNjc3Mtb3ZlcnJpZGVzJzogcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCAnLi4vLi4vYWRtaW4vc2Nzcy9vdmVycmlkZXMuc2NzcycpLFxuICAgIH0sXG4gICAgbW9kdWxlczogWydub2RlX21vZHVsZXMnLCBwYXRoLnJlc29sdmUoX2Rpcm5hbWUsICcuLi8uLi8uLi9ub2RlX21vZHVsZXMnKV0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIl9fZmlsZW5hbWUiLCJmaWxlVVJMVG9QYXRoIiwiX2Rpcm5hbWUiLCJkaXJuYW1lIiwicmVxdWlyZSIsImNyZWF0ZVJlcXVpcmUiLCJlbnRyeSIsIm1haW4iLCJwYXRoIiwicmVzb2x2ZSIsImV4dGVybmFscyIsInJlYWN0Iiwib3V0cHV0IiwicHVibGljUGF0aCIsImZpbGVuYW1lIiwibGlicmFyeVRhcmdldCIsIm9wdGltaXphdGlvbiIsIm1pbmltaXplciIsIlRlcnNlckpTUGx1Z2luIiwiZXh0cmFjdENvbW1lbnRzIiwiT3B0aW1pemVDU1NBc3NldHNQbHVnaW4iLCJtb2RlIiwic3RhdHMiLCJtb2R1bGUiLCJydWxlcyIsInRlc3QiLCJleGNsdWRlIiwiZnVsbHlTcGVjaWZpZWQiLCJ1c2UiLCJsb2FkZXIiLCJvbmVPZiIsIm9wdGlvbnMiLCJsaW1pdCIsIm5hbWUiLCJzaWRlRWZmZWN0cyIsIk1pbmlDU1NFeHRyYWN0UGx1Z2luIiwicG9zdGNzc09wdGlvbnMiLCJwbHVnaW5zIiwiaWdub3JlT3JkZXIiLCJtYWluRmlsZXMiLCJhbGlhcyIsIm1vZHVsZXMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBWUE7OztlQUFBOzs7NERBWjhCOzJFQUNHOzBFQUNOO2dGQUVTO21CQUNOOzBCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTUEsY0FBYUMsSUFBQUEsa0JBQWEsRUFBQztBQUNqQyxJQUFNQyxXQUFXQyxJQUFBQSxhQUFPLEVBQUNIO0FBQ3pCLElBQU1JLFdBQVVDLElBQUFBLHlCQUFhLEVBQUM7SUFFOUIsV0FBZTtJQUNiQyxPQUFPO1FBQ0xDLE1BQU07WUFBQ0MsYUFBSSxDQUFDQyxPQUFPLENBQUNQLFVBQVU7U0FBbUM7SUFDbkU7SUFDQVEsV0FBVztRQUNUQyxPQUFPO0lBQ1Q7SUFDQUMsUUFBUTtRQUNOSixNQUFNQSxhQUFJLENBQUNDLE9BQU8sQ0FBQ1AsVUFBVTtRQUM3QlcsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLGVBQWU7SUFDakI7SUFDQUMsY0FBYztRQUNaQyxXQUFXO1lBQUMsSUFBSUMsNEJBQWMsQ0FBQztnQkFDN0JDLGlCQUFpQjtZQUNuQjtZQUFJLElBQUlDLGtDQUF1QixDQUFDLENBQUM7U0FBRztJQUN0QztJQUNBQyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsUUFBUTtRQUNOQyxPQUFPO1lBQ0w7Z0JBQ0VDLE1BQU07Z0JBQ05DLFNBQVM7Z0JBQ1RqQixTQUFTO29CQUNQa0IsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsS0FBSztvQkFDSDt3QkFDRUMsUUFBUXpCLFNBQVFLLE9BQU8sQ0FBQztvQkFDMUI7aUJBQ0Q7WUFDSDtZQUNBO2dCQUNFcUIsT0FBTztvQkFDTDt3QkFDRUwsTUFBTTs0QkFBQzs0QkFBVTs0QkFBVTs0QkFBWTt5QkFBUzt3QkFDaERJLFFBQVF6QixTQUFRSyxPQUFPLENBQUM7d0JBQ3hCc0IsU0FBUzs0QkFDUEMsT0FBTzs0QkFDUEMsTUFBTTt3QkFDUjtvQkFDRjtvQkFDQTt3QkFDRVIsTUFBTTt3QkFDTlMsYUFBYTt3QkFDYk4sS0FBSzs0QkFDSE8sNkJBQW9CLENBQUNOLE1BQU07NEJBQzNCOzRCQUNBO2dDQUNFQSxRQUFRO2dDQUNSRSxTQUFTO29DQUNQSyxnQkFBZ0I7d0NBQ2RDLFNBQVM7NENBQ1A7eUNBQ0Q7b0NBQ0g7Z0NBQ0Y7NEJBQ0Y7NEJBQ0E7eUJBQ0Q7b0JBQ0g7b0JBQ0E7d0JBQ0VYLFNBQVM7NEJBQUM7NEJBQW1COzRCQUFXO3lCQUFVO3dCQUNsREcsUUFBUXpCLFNBQVFLLE9BQU8sQ0FBQzt3QkFDeEJzQixTQUFTOzRCQUNQRSxNQUFNO3dCQUNSO29CQUNGO2lCQUNEO1lBQ0g7U0FDRDtJQUNIO0lBQ0FJLFNBQVM7UUFDUCxJQUFJRiw2QkFBb0IsQ0FBQztZQUN2QnJCLFVBQVU7WUFDVndCLGFBQWE7UUFDZjtLQUNEO0lBQ0Q3QixTQUFTO1FBQ1A4QixXQUFXO1lBQUM7U0FBUTtRQUNwQkMsT0FBTztZQUNMLDBCQUEwQmhDLGFBQUksQ0FBQ0MsT0FBTyxDQUFDUCxVQUFVO1FBQ25EO1FBQ0F1QyxTQUFTO1lBQUM7WUFBZ0JqQyxhQUFJLENBQUNDLE9BQU8sQ0FBQ1AsVUFBVTtTQUF5QjtJQUM1RTtBQUNGIn0=