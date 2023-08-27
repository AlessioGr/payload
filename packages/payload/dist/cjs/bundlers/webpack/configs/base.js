"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getBaseConfig", {
    enumerable: true,
    get: function() {
        return getBaseConfig;
    }
});
var _htmlwebpackplugin = /*#__PURE__*/ _interop_require_default(require("html-webpack-plugin"));
var _webpack = /*#__PURE__*/ _interop_require_default(require("webpack"));
var _url = require("url");
var _path = /*#__PURE__*/ _interop_require_wildcard(require("path"));
var _nodemodule = require("node:module");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var _dirname = (0, _path.dirname)(__filename1);
var mockModulePath = _path.default.resolve(_dirname, "../../mocks/emptyModule.js");
var mockDotENVPath = _path.default.resolve(_dirname, "../../mocks/dotENV.js");
var nodeModulesPath = _path.default.resolve(_dirname, "../../../../node_modules");
var adminFolderPath = _path.default.resolve(_dirname, "../../../admin");
var bundlerPath = _path.default.resolve(_dirname, "../bundler");
var require1 = (0, _nodemodule.createRequire)(require("url").pathToFileURL(__filename).toString());
var getBaseConfig = function(payloadConfig) {
    return {
        entry: {
            main: [
                adminFolderPath
            ]
        },
        resolveLoader: {
            modules: [
                "node_modules",
                _path.default.join(_dirname, nodeModulesPath)
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(t|j)sx?$/,
                    exclude: /\/node_modules\/(?!.+\.tsx?$).*$/,
                    use: [
                        {
                            loader: require1.resolve("swc-loader"),
                            options: {
                                jsc: {
                                    parser: {
                                        syntax: "typescript",
                                        tsx: true
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    oneOf: [
                        {
                            test: /\.(?:ico|gif|png|jpg|jpeg|woff(2)?|eot|ttf|otf|svg)$/i,
                            type: "asset/resource"
                        }
                    ]
                }
            ]
        },
        resolve: {
            fallback: {
                path: require1.resolve("path-browserify"),
                crypto: false,
                https: false,
                http: false
            },
            modules: [
                "node_modules",
                _path.default.resolve(_dirname, nodeModulesPath)
            ],
            alias: _define_property({
                "payload-config": payloadConfig.paths.rawConfig,
                payload$: mockModulePath,
                "payload-user-css": payloadConfig.admin.css,
                dotenv: mockDotENVPath
            }, bundlerPath, mockModulePath),
            extensions: [
                ".ts",
                ".tsx",
                ".js",
                ".json"
            ]
        },
        plugins: [
            new _webpack.default.ProvidePlugin({
                process: require1.resolve("process/browser")
            }),
            new _webpack.default.DefinePlugin(Object.entries(process.env).reduce(function(values, param) {
                var _param = _sliced_to_array(param, 2), key = _param[0], val = _param[1];
                if (key.indexOf("PAYLOAD_PUBLIC_") === 0) {
                    return _object_spread_props(_object_spread({}, values), _define_property({}, "process.env.".concat(key), "'".concat(val, "'")));
                }
                return values;
            }, {})),
            new _htmlwebpackplugin.default({
                template: payloadConfig.admin.indexHTML,
                filename: _path.default.normalize("./index.html")
            }),
            new _webpack.default.HotModuleReplacementPlugin()
        ]
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9idW5kbGVycy93ZWJwYWNrL2NvbmZpZ3MvYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHRtbFdlYnBhY2tQbHVnaW4gZnJvbSAnaHRtbC13ZWJwYWNrLXBsdWdpbic7XG5pbXBvcnQgd2VicGFjaywgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcbmltcG9ydCBwYXRoLCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGNyZWF0ZVJlcXVpcmUgfSBmcm9tICdub2RlOm1vZHVsZSc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XG5cbmNvbnN0IG1vY2tNb2R1bGVQYXRoID0gcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCAnLi4vLi4vbW9ja3MvZW1wdHlNb2R1bGUuanMnKTtcbmNvbnN0IG1vY2tEb3RFTlZQYXRoID0gcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCAnLi4vLi4vbW9ja3MvZG90RU5WLmpzJyk7XG5cbmNvbnN0IG5vZGVNb2R1bGVzUGF0aCA9IHBhdGgucmVzb2x2ZShfZGlybmFtZSwgJy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcycpO1xuY29uc3QgYWRtaW5Gb2xkZXJQYXRoID0gcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCAnLi4vLi4vLi4vYWRtaW4nKTtcbmNvbnN0IGJ1bmRsZXJQYXRoID0gcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCAnLi4vYnVuZGxlcicpO1xuXG5jb25zdCByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShpbXBvcnQubWV0YS51cmwpO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRCYXNlQ29uZmlnID0gKHBheWxvYWRDb25maWc6IFNhbml0aXplZENvbmZpZyk6IENvbmZpZ3VyYXRpb24gPT4gKHtcbiAgZW50cnk6IHtcbiAgICBtYWluOiBbXG4gICAgICBhZG1pbkZvbGRlclBhdGgsXG4gICAgXSxcbiAgfSxcbiAgcmVzb2x2ZUxvYWRlcjoge1xuICAgIG1vZHVsZXM6IFsnbm9kZV9tb2R1bGVzJywgcGF0aC5qb2luKF9kaXJuYW1lLCBub2RlTW9kdWxlc1BhdGgpXSxcbiAgfSxcbiAgbW9kdWxlOiB7XG4gICAgcnVsZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdGVzdDogL1xcLih0fGopc3g/JC8sXG4gICAgICAgIGV4Y2x1ZGU6IC9cXC9ub2RlX21vZHVsZXNcXC8oPyEuK1xcLnRzeD8kKS4qJC8sXG4gICAgICAgIHVzZTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRlcjogcmVxdWlyZS5yZXNvbHZlKCdzd2MtbG9hZGVyJyksXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGpzYzoge1xuICAgICAgICAgICAgICAgIHBhcnNlcjoge1xuICAgICAgICAgICAgICAgICAgc3ludGF4OiAndHlwZXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgICB0c3g6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG9uZU9mOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGVzdDogL1xcLig/Omljb3xnaWZ8cG5nfGpwZ3xqcGVnfHdvZmYoMik/fGVvdHx0dGZ8b3RmfHN2ZykkL2ksXG4gICAgICAgICAgICB0eXBlOiAnYXNzZXQvcmVzb3VyY2UnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBmYWxsYmFjazoge1xuICAgICAgcGF0aDogcmVxdWlyZS5yZXNvbHZlKCdwYXRoLWJyb3dzZXJpZnknKSxcbiAgICAgIGNyeXB0bzogZmFsc2UsXG4gICAgICBodHRwczogZmFsc2UsXG4gICAgICBodHRwOiBmYWxzZSxcbiAgICB9LFxuICAgIG1vZHVsZXM6IFsnbm9kZV9tb2R1bGVzJywgcGF0aC5yZXNvbHZlKF9kaXJuYW1lLCBub2RlTW9kdWxlc1BhdGgpXSxcbiAgICBhbGlhczoge1xuICAgICAgJ3BheWxvYWQtY29uZmlnJzogcGF5bG9hZENvbmZpZy5wYXRocy5yYXdDb25maWcsXG4gICAgICBwYXlsb2FkJDogbW9ja01vZHVsZVBhdGgsXG4gICAgICAncGF5bG9hZC11c2VyLWNzcyc6IHBheWxvYWRDb25maWcuYWRtaW4uY3NzLFxuICAgICAgZG90ZW52OiBtb2NrRG90RU5WUGF0aCxcbiAgICAgIFtidW5kbGVyUGF0aF06IG1vY2tNb2R1bGVQYXRoLFxuICAgIH0sXG4gICAgZXh0ZW5zaW9uczogWycudHMnLCAnLnRzeCcsICcuanMnLCAnLmpzb24nXSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIG5ldyB3ZWJwYWNrLlByb3ZpZGVQbHVnaW4oXG4gICAgICB7IHByb2Nlc3M6IHJlcXVpcmUucmVzb2x2ZSgncHJvY2Vzcy9icm93c2VyJykgfSxcbiAgICApLFxuICAgIG5ldyB3ZWJwYWNrLkRlZmluZVBsdWdpbihcbiAgICAgIE9iamVjdC5lbnRyaWVzKHByb2Nlc3MuZW52KS5yZWR1Y2UoXG4gICAgICAgICh2YWx1ZXMsIFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1BBWUxPQURfUFVCTElDXycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHtcbiAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICBbYHByb2Nlc3MuZW52LiR7a2V5fWBdOiBgJyR7dmFsfSdgLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfSxcbiAgICAgICAge30sXG4gICAgICApLFxuICAgICksXG4gICAgbmV3IEh0bWxXZWJwYWNrUGx1Z2luKHtcbiAgICAgIHRlbXBsYXRlOiBwYXlsb2FkQ29uZmlnLmFkbWluLmluZGV4SFRNTCxcbiAgICAgIGZpbGVuYW1lOiBwYXRoLm5vcm1hbGl6ZSgnLi9pbmRleC5odG1sJyksXG4gICAgfSksXG4gICAgbmV3IHdlYnBhY2suSG90TW9kdWxlUmVwbGFjZW1lbnRQbHVnaW4oKSxcbiAgXSxcbn0pO1xuIl0sIm5hbWVzIjpbImdldEJhc2VDb25maWciLCJfX2ZpbGVuYW1lIiwiZmlsZVVSTFRvUGF0aCIsIl9kaXJuYW1lIiwiZGlybmFtZSIsIm1vY2tNb2R1bGVQYXRoIiwicGF0aCIsInJlc29sdmUiLCJtb2NrRG90RU5WUGF0aCIsIm5vZGVNb2R1bGVzUGF0aCIsImFkbWluRm9sZGVyUGF0aCIsImJ1bmRsZXJQYXRoIiwicmVxdWlyZSIsImNyZWF0ZVJlcXVpcmUiLCJwYXlsb2FkQ29uZmlnIiwiZW50cnkiLCJtYWluIiwicmVzb2x2ZUxvYWRlciIsIm1vZHVsZXMiLCJqb2luIiwibW9kdWxlIiwicnVsZXMiLCJ0ZXN0IiwiZXhjbHVkZSIsInVzZSIsImxvYWRlciIsIm9wdGlvbnMiLCJqc2MiLCJwYXJzZXIiLCJzeW50YXgiLCJ0c3giLCJvbmVPZiIsInR5cGUiLCJmYWxsYmFjayIsImNyeXB0byIsImh0dHBzIiwiaHR0cCIsImFsaWFzIiwicGF0aHMiLCJyYXdDb25maWciLCJwYXlsb2FkJCIsImFkbWluIiwiY3NzIiwiZG90ZW52IiwiZXh0ZW5zaW9ucyIsInBsdWdpbnMiLCJ3ZWJwYWNrIiwiUHJvdmlkZVBsdWdpbiIsInByb2Nlc3MiLCJEZWZpbmVQbHVnaW4iLCJPYmplY3QiLCJlbnRyaWVzIiwiZW52IiwicmVkdWNlIiwidmFsdWVzIiwia2V5IiwidmFsIiwiaW5kZXhPZiIsIkh0bWxXZWJwYWNrUGx1Z2luIiwidGVtcGxhdGUiLCJpbmRleEhUTUwiLCJmaWxlbmFtZSIsIm5vcm1hbGl6ZSIsIkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9CYUE7OztlQUFBQTs7O3dFQXBCaUI7OERBQ1M7bUJBRVQ7NERBQ0E7MEJBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQU1DLGNBQWFDLElBQUFBLGtCQUFhLEVBQUM7QUFDakMsSUFBTUMsV0FBV0MsSUFBQUEsYUFBTyxFQUFDSDtBQUV6QixJQUFNSSxpQkFBaUJDLGFBQUksQ0FBQ0MsT0FBTyxDQUFDSixVQUFVO0FBQzlDLElBQU1LLGlCQUFpQkYsYUFBSSxDQUFDQyxPQUFPLENBQUNKLFVBQVU7QUFFOUMsSUFBTU0sa0JBQWtCSCxhQUFJLENBQUNDLE9BQU8sQ0FBQ0osVUFBVTtBQUMvQyxJQUFNTyxrQkFBa0JKLGFBQUksQ0FBQ0MsT0FBTyxDQUFDSixVQUFVO0FBQy9DLElBQU1RLGNBQWNMLGFBQUksQ0FBQ0MsT0FBTyxDQUFDSixVQUFVO0FBRTNDLElBQU1TLFdBQVVDLElBQUFBLHlCQUFhLEVBQUM7QUFHdkIsSUFBTWIsZ0JBQWdCLFNBQUNjO1dBQW1EO1FBQy9FQyxPQUFPO1lBQ0xDLE1BQU07Z0JBQ0pOO2FBQ0Q7UUFDSDtRQUNBTyxlQUFlO1lBQ2JDLFNBQVM7Z0JBQUM7Z0JBQWdCWixhQUFJLENBQUNhLElBQUksQ0FBQ2hCLFVBQVVNO2FBQWlCO1FBQ2pFO1FBQ0FXLFFBQVE7WUFDTkMsT0FBTztnQkFDTDtvQkFDRUMsTUFBTTtvQkFDTkMsU0FBUztvQkFDVEMsS0FBSzt3QkFDSDs0QkFDRUMsUUFBUWIsU0FBUUwsT0FBTyxDQUFDOzRCQUN4Qm1CLFNBQVM7Z0NBQ1BDLEtBQUs7b0NBQ0hDLFFBQVE7d0NBQ05DLFFBQVE7d0NBQ1JDLEtBQUs7b0NBQ1A7Z0NBQ0Y7NEJBQ0Y7d0JBQ0Y7cUJBQ0Q7Z0JBQ0g7Z0JBQ0E7b0JBQ0VDLE9BQU87d0JBQ0w7NEJBQ0VULE1BQU07NEJBQ05VLE1BQU07d0JBQ1I7cUJBQ0Q7Z0JBQ0g7YUFDRDtRQUNIO1FBQ0F6QixTQUFTO1lBQ1AwQixVQUFVO2dCQUNSM0IsTUFBTU0sU0FBUUwsT0FBTyxDQUFDO2dCQUN0QjJCLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ1BDLE1BQU07WUFDUjtZQUNBbEIsU0FBUztnQkFBQztnQkFBZ0JaLGFBQUksQ0FBQ0MsT0FBTyxDQUFDSixVQUFVTTthQUFpQjtZQUNsRTRCLE9BS0U7Z0JBSkEsa0JBQWtCdkIsY0FBY3dCLEtBQUssQ0FBQ0MsU0FBUztnQkFDL0NDLFVBQVVuQztnQkFDVixvQkFBb0JTLGNBQWMyQixLQUFLLENBQUNDLEdBQUc7Z0JBQzNDQyxRQUFRbkM7ZUFDUEcsYUFBY047WUFFakJ1QyxZQUFZO2dCQUFDO2dCQUFPO2dCQUFRO2dCQUFPO2FBQVE7UUFDN0M7UUFDQUMsU0FBUztZQUNQLElBQUlDLGdCQUFPLENBQUNDLGFBQWEsQ0FDdkI7Z0JBQUVDLFNBQVNwQyxTQUFRTCxPQUFPLENBQUM7WUFBbUI7WUFFaEQsSUFBSXVDLGdCQUFPLENBQUNHLFlBQVksQ0FDdEJDLE9BQU9DLE9BQU8sQ0FBQ0gsUUFBUUksR0FBRyxFQUFFQyxNQUFNLENBQ2hDLFNBQUNDO3lEQUFTQyxpQkFBS0M7Z0JBQ2IsSUFBSUQsSUFBSUUsT0FBTyxDQUFDLHVCQUF1QixHQUFHO29CQUN4QyxPQUFRLHdDQUNISCxTQUNILHFCQUFDLEFBQUMsZUFBa0IsT0FBSkMsTUFBUSxBQUFDLElBQU8sT0FBSkMsS0FBSTtnQkFFcEM7Z0JBRUEsT0FBT0Y7WUFDVCxHQUNBLENBQUM7WUFHTCxJQUFJSSwwQkFBaUIsQ0FBQztnQkFDcEJDLFVBQVU3QyxjQUFjMkIsS0FBSyxDQUFDbUIsU0FBUztnQkFDdkNDLFVBQVV2RCxhQUFJLENBQUN3RCxTQUFTLENBQUM7WUFDM0I7WUFDQSxJQUFJaEIsZ0JBQU8sQ0FBQ2lCLDBCQUEwQjtTQUN2QztJQUNIIn0=