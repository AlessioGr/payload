import path, { dirname } from "path";
import MiniCSSExtractPlugin from "mini-css-extract-plugin";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "css-minimizer-webpack-plugin";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";
var __filename = fileURLToPath(import.meta.url);
var _dirname = dirname(__filename);
var require = createRequire(import.meta.url);
export default {
    entry: {
        main: [
            path.resolve(_dirname, "../../admin/components/index.js")
        ]
    },
    externals: {
        react: "react"
    },
    output: {
        path: path.resolve(_dirname, "../../exports/components"),
        publicPath: "/",
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({
                extractComments: false
            }),
            new OptimizeCSSAssetsPlugin({})
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
                            MiniCSSExtractPlugin.loader,
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
        new MiniCSSExtractPlugin({
            filename: "styles.css",
            ignoreOrder: true
        })
    ],
    resolve: {
        mainFiles: [
            "index"
        ],
        alias: {
            "payload-scss-overrides": path.resolve(_dirname, "../../admin/scss/overrides.scss")
        },
        modules: [
            "node_modules",
            path.resolve(_dirname, "../../../node_modules")
        ]
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL2NvbXBvbmVudHMuY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoLCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBNaW5pQ1NTRXh0cmFjdFBsdWdpbiBmcm9tICdtaW5pLWNzcy1leHRyYWN0LXBsdWdpbic7XG5pbXBvcnQgVGVyc2VySlNQbHVnaW4gZnJvbSAndGVyc2VyLXdlYnBhY2stcGx1Z2luJztcbmltcG9ydCB0ZXJzZXIgZnJvbSAndGVyc2VyJzsgLy8gSU1QT1JUQU5UIC0gRE8gTk9UIFJFTU9WRTogVGhpcyBpcyByZXF1aXJlZCBmb3IgcG5wbSdzIGRlZmF1bHQgaXNvbGF0ZWQgbW9kZSB0byB3b3JrIC0gZXZlbiB0aG91Z2ggdGhlIGltcG9ydCBpcyBub3QgdXNlZC4gVGhpcyBpcyBkdWUgdG8gYSB0eXBlc2NyaXB0IGJ1ZzogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy80NzY2MyNpc3N1ZWNvbW1lbnQtMTUxOTEzODE4OS4gKHRzYnVnaXNvbGF0ZWRtb2RlKVxuaW1wb3J0IE9wdGltaXplQ1NTQXNzZXRzUGx1Z2luIGZyb20gJ2Nzcy1taW5pbWl6ZXItd2VicGFjay1wbHVnaW4nO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xuXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xuY29uc3QgX2Rpcm5hbWUgPSBkaXJuYW1lKF9fZmlsZW5hbWUpO1xuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoaW1wb3J0Lm1ldGEudXJsKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBlbnRyeToge1xuICAgIG1haW46IFtwYXRoLnJlc29sdmUoX2Rpcm5hbWUsICcuLi8uLi9hZG1pbi9jb21wb25lbnRzL2luZGV4LmpzJyldLFxuICB9LFxuICBleHRlcm5hbHM6IHtcbiAgICByZWFjdDogJ3JlYWN0JyxcbiAgfSxcbiAgb3V0cHV0OiB7XG4gICAgcGF0aDogcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCAnLi4vLi4vZXhwb3J0cy9jb21wb25lbnRzJyksXG4gICAgcHVibGljUGF0aDogJy8nLFxuICAgIGZpbGVuYW1lOiAnaW5kZXguanMnLFxuICAgIGxpYnJhcnlUYXJnZXQ6ICdjb21tb25qczInLFxuICB9LFxuICBvcHRpbWl6YXRpb246IHtcbiAgICBtaW5pbWl6ZXI6IFtuZXcgVGVyc2VySlNQbHVnaW4oe1xuICAgICAgZXh0cmFjdENvbW1lbnRzOiBmYWxzZSxcbiAgICB9KSwgbmV3IE9wdGltaXplQ1NTQXNzZXRzUGx1Z2luKHt9KV0sXG4gIH0sXG4gIG1vZGU6ICdwcm9kdWN0aW9uJyxcbiAgc3RhdHM6ICdlcnJvcnMtb25seScsXG4gIG1vZHVsZToge1xuICAgIHJ1bGVzOiBbXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC4odHxqKXN4PyQvLFxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgIGZ1bGx5U3BlY2lmaWVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB1c2U6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkZXI6IHJlcXVpcmUucmVzb2x2ZSgnc3djLWxvYWRlcicpLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBvbmVPZjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRlc3Q6IFsvXFwuYm1wJC8sIC9cXC5naWYkLywgL1xcLmpwZT9nJC8sIC9cXC5wbmckL10sXG4gICAgICAgICAgICBsb2FkZXI6IHJlcXVpcmUucmVzb2x2ZSgndXJsLWxvYWRlcicpLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBsaW1pdDogMTAwMDAsXG4gICAgICAgICAgICAgIG5hbWU6ICdzdGF0aWMvbWVkaWEvW25hbWVdLltoYXNoOjhdLltleHRdJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXN0OiAvXFwuKHNhfHNjfGMpc3MkLyxcbiAgICAgICAgICAgIHNpZGVFZmZlY3RzOiB0cnVlLFxuICAgICAgICAgICAgdXNlOiBbXG4gICAgICAgICAgICAgIE1pbmlDU1NFeHRyYWN0UGx1Z2luLmxvYWRlcixcbiAgICAgICAgICAgICAgJ2Nzcy1sb2FkZXInLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9hZGVyOiAncG9zdGNzcy1sb2FkZXInLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgIHBvc3Rjc3NPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAncG9zdGNzcy1wcmVzZXQtZW52JyxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ3Nhc3MtbG9hZGVyJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBleGNsdWRlOiBbL1xcLihqc3xqc3h8bWpzKSQvLCAvXFwuaHRtbCQvLCAvXFwuanNvbiQvXSxcbiAgICAgICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCdmaWxlLWxvYWRlcicpLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBuYW1lOiAnc3RhdGljL21lZGlhL1tuYW1lXS5baGFzaDo4XS5bZXh0XScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBuZXcgTWluaUNTU0V4dHJhY3RQbHVnaW4oe1xuICAgICAgZmlsZW5hbWU6ICdzdHlsZXMuY3NzJyxcbiAgICAgIGlnbm9yZU9yZGVyOiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgbWFpbkZpbGVzOiBbJ2luZGV4J10sXG4gICAgYWxpYXM6IHtcbiAgICAgICdwYXlsb2FkLXNjc3Mtb3ZlcnJpZGVzJzogcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCAnLi4vLi4vYWRtaW4vc2Nzcy9vdmVycmlkZXMuc2NzcycpLFxuICAgIH0sXG4gICAgbW9kdWxlczogWydub2RlX21vZHVsZXMnLCBwYXRoLnJlc29sdmUoX2Rpcm5hbWUsICcuLi8uLi8uLi9ub2RlX21vZHVsZXMnKV0sXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbInBhdGgiLCJkaXJuYW1lIiwiTWluaUNTU0V4dHJhY3RQbHVnaW4iLCJUZXJzZXJKU1BsdWdpbiIsIk9wdGltaXplQ1NTQXNzZXRzUGx1Z2luIiwiZmlsZVVSTFRvUGF0aCIsImNyZWF0ZVJlcXVpcmUiLCJfX2ZpbGVuYW1lIiwidXJsIiwiX2Rpcm5hbWUiLCJyZXF1aXJlIiwiZW50cnkiLCJtYWluIiwicmVzb2x2ZSIsImV4dGVybmFscyIsInJlYWN0Iiwib3V0cHV0IiwicHVibGljUGF0aCIsImZpbGVuYW1lIiwibGlicmFyeVRhcmdldCIsIm9wdGltaXphdGlvbiIsIm1pbmltaXplciIsImV4dHJhY3RDb21tZW50cyIsIm1vZGUiLCJzdGF0cyIsIm1vZHVsZSIsInJ1bGVzIiwidGVzdCIsImV4Y2x1ZGUiLCJmdWxseVNwZWNpZmllZCIsInVzZSIsImxvYWRlciIsIm9uZU9mIiwib3B0aW9ucyIsImxpbWl0IiwibmFtZSIsInNpZGVFZmZlY3RzIiwicG9zdGNzc09wdGlvbnMiLCJwbHVnaW5zIiwiaWdub3JlT3JkZXIiLCJtYWluRmlsZXMiLCJhbGlhcyIsIm1vZHVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFFBQVFDLE9BQU8sUUFBUSxPQUFPO0FBQ3JDLE9BQU9DLDBCQUEwQiwwQkFBMEI7QUFDM0QsT0FBT0Msb0JBQW9CLHdCQUF3QjtBQUVuRCxPQUFPQyw2QkFBNkIsK0JBQStCO0FBQ25FLFNBQVNDLGFBQWEsUUFBUSxNQUFNO0FBQ3BDLFNBQVNDLGFBQWEsUUFBUSxjQUFjO0FBRTVDLElBQU1DLGFBQWFGLGNBQWMsWUFBWUcsR0FBRztBQUNoRCxJQUFNQyxXQUFXUixRQUFRTTtBQUN6QixJQUFNRyxVQUFVSixjQUFjLFlBQVlFLEdBQUc7QUFFN0MsZUFBZTtJQUNiRyxPQUFPO1FBQ0xDLE1BQU07WUFBQ1osS0FBS2EsT0FBTyxDQUFDSixVQUFVO1NBQW1DO0lBQ25FO0lBQ0FLLFdBQVc7UUFDVEMsT0FBTztJQUNUO0lBQ0FDLFFBQVE7UUFDTmhCLE1BQU1BLEtBQUthLE9BQU8sQ0FBQ0osVUFBVTtRQUM3QlEsWUFBWTtRQUNaQyxVQUFVO1FBQ1ZDLGVBQWU7SUFDakI7SUFDQUMsY0FBYztRQUNaQyxXQUFXO1lBQUMsSUFBSWxCLGVBQWU7Z0JBQzdCbUIsaUJBQWlCO1lBQ25CO1lBQUksSUFBSWxCLHdCQUF3QixDQUFDO1NBQUc7SUFDdEM7SUFDQW1CLE1BQU07SUFDTkMsT0FBTztJQUNQQyxRQUFRO1FBQ05DLE9BQU87WUFDTDtnQkFDRUMsTUFBTTtnQkFDTkMsU0FBUztnQkFDVGYsU0FBUztvQkFDUGdCLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLEtBQUs7b0JBQ0g7d0JBQ0VDLFFBQVFyQixRQUFRRyxPQUFPLENBQUM7b0JBQzFCO2lCQUNEO1lBQ0g7WUFDQTtnQkFDRW1CLE9BQU87b0JBQ0w7d0JBQ0VMLE1BQU07NEJBQUM7NEJBQVU7NEJBQVU7NEJBQVk7eUJBQVM7d0JBQ2hESSxRQUFRckIsUUFBUUcsT0FBTyxDQUFDO3dCQUN4Qm9CLFNBQVM7NEJBQ1BDLE9BQU87NEJBQ1BDLE1BQU07d0JBQ1I7b0JBQ0Y7b0JBQ0E7d0JBQ0VSLE1BQU07d0JBQ05TLGFBQWE7d0JBQ2JOLEtBQUs7NEJBQ0g1QixxQkFBcUI2QixNQUFNOzRCQUMzQjs0QkFDQTtnQ0FDRUEsUUFBUTtnQ0FDUkUsU0FBUztvQ0FDUEksZ0JBQWdCO3dDQUNkQyxTQUFTOzRDQUNQO3lDQUNEO29DQUNIO2dDQUNGOzRCQUNGOzRCQUNBO3lCQUNEO29CQUNIO29CQUNBO3dCQUNFVixTQUFTOzRCQUFDOzRCQUFtQjs0QkFBVzt5QkFBVTt3QkFDbERHLFFBQVFyQixRQUFRRyxPQUFPLENBQUM7d0JBQ3hCb0IsU0FBUzs0QkFDUEUsTUFBTTt3QkFDUjtvQkFDRjtpQkFDRDtZQUNIO1NBQ0Q7SUFDSDtJQUNBRyxTQUFTO1FBQ1AsSUFBSXBDLHFCQUFxQjtZQUN2QmdCLFVBQVU7WUFDVnFCLGFBQWE7UUFDZjtLQUNEO0lBQ0QxQixTQUFTO1FBQ1AyQixXQUFXO1lBQUM7U0FBUTtRQUNwQkMsT0FBTztZQUNMLDBCQUEwQnpDLEtBQUthLE9BQU8sQ0FBQ0osVUFBVTtRQUNuRDtRQUNBaUMsU0FBUztZQUFDO1lBQWdCMUMsS0FBS2EsT0FBTyxDQUFDSixVQUFVO1NBQXlCO0lBQzVFO0FBQ0YsRUFBRSJ9