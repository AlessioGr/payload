/* eslint-disable @typescript-eslint/no-var-requires */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _minimist = /*#__PURE__*/ _interop_require_default(require("minimist"));
var _register = /*#__PURE__*/ _interop_require_default(require("@swc/register"));
var _gettsconfig = require("get-tsconfig");
var _generateTypes = require("./generateTypes");
var _generateGraphQLSchema = require("./generateGraphQLSchema");
var _migrate = require("./migrate");
var _build = require("./build");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _tsConfig_config_compilerOptions, _tsConfig_config, _tsConfig;
var tsConfig = (0, _gettsconfig.getTsconfig)();
var swcOptions = {
    sourceMaps: "inline",
    jsc: {
        parser: {
            syntax: "typescript",
            tsx: true
        },
        paths: undefined,
        baseUrl: _path.default.resolve()
    },
    module: {
        type: "es6"
    },
    ignore: [
        /.*\/node_modules\/.*/
    ]
};
if ((_tsConfig = tsConfig) === null || _tsConfig === void 0 ? void 0 : (_tsConfig_config = _tsConfig.config) === null || _tsConfig_config === void 0 ? void 0 : (_tsConfig_config_compilerOptions = _tsConfig_config.compilerOptions) === null || _tsConfig_config_compilerOptions === void 0 ? void 0 : _tsConfig_config_compilerOptions.paths) {
    var _tsConfig_config_compilerOptions1, _tsConfig_config1, _tsConfig1;
    swcOptions.jsc.paths = tsConfig.config.compilerOptions.paths;
    if ((_tsConfig1 = tsConfig) === null || _tsConfig1 === void 0 ? void 0 : (_tsConfig_config1 = _tsConfig1.config) === null || _tsConfig_config1 === void 0 ? void 0 : (_tsConfig_config_compilerOptions1 = _tsConfig_config1.compilerOptions) === null || _tsConfig_config_compilerOptions1 === void 0 ? void 0 : _tsConfig_config_compilerOptions1.baseUrl) {
        swcOptions.jsc.baseUrl = _path.default.resolve(tsConfig.config.compilerOptions.baseUrl);
    }
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - bad @swc/register types
(0, _register.default)(swcOptions);
var args = (0, _minimist.default)(process.argv.slice(2));
var scriptIndex = args._.findIndex(function(x) {
    return x === "build";
});
var script = scriptIndex === -1 ? args._[0] : args._[scriptIndex];
if (script.startsWith("migrate")) {
    (0, _migrate.migrate)(args._).then(function() {
        return process.exit(0);
    });
} else {
    switch(script.toLowerCase()){
        case "build":
            {
                (0, _build.build)();
                break;
            }
        case "generate:types":
            {
                (0, _generateTypes.generateTypes)();
                break;
            }
        case "generate:graphqlschema":
            {
                (0, _generateGraphQLSchema.generateGraphQLSchema)();
                break;
            }
        default:
            console.log('Unknown script "'.concat(script, '".'));
            break;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcyAqL1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnO1xuaW1wb3J0IHN3Y1JlZ2lzdGVyIGZyb20gJ0Bzd2MvcmVnaXN0ZXInO1xuaW1wb3J0IHsgZ2V0VHNjb25maWcgYXMgZ2V0VFNjb25maWcgfSBmcm9tICdnZXQtdHNjb25maWcnO1xuaW1wb3J0IHsgZ2VuZXJhdGVUeXBlcyB9IGZyb20gJy4vZ2VuZXJhdGVUeXBlcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUdyYXBoUUxTY2hlbWEgfSBmcm9tICcuL2dlbmVyYXRlR3JhcGhRTFNjaGVtYSc7XG5pbXBvcnQgeyBtaWdyYXRlIH0gZnJvbSAnLi9taWdyYXRlJztcbmltcG9ydCB7IGJ1aWxkIH0gZnJvbSBcIi4vYnVpbGRcIjtcblxuY29uc3QgdHNDb25maWcgPSBnZXRUU2NvbmZpZygpO1xuXG5jb25zdCBzd2NPcHRpb25zID0ge1xuICBzb3VyY2VNYXBzOiAnaW5saW5lJyxcbiAganNjOiB7XG4gICAgcGFyc2VyOiB7XG4gICAgICBzeW50YXg6ICd0eXBlc2NyaXB0JyxcbiAgICAgIHRzeDogdHJ1ZSxcbiAgICB9LFxuICAgIHBhdGhzOiB1bmRlZmluZWQsXG4gICAgYmFzZVVybDogcGF0aC5yZXNvbHZlKCksXG4gIH0sXG4gIG1vZHVsZToge1xuICAgIHR5cGU6ICdlczYnLFxuICB9LFxuICBpZ25vcmU6IFtcbiAgICAvLipcXC9ub2RlX21vZHVsZXNcXC8uKi8sIC8vIHBhcnNlIGV2ZXJ5dGhpbmcgYmVzaWRlcyBmaWxlcyB3aXRoaW4gbm9kZV9tb2R1bGVzXG4gIF0sXG59O1xuXG5pZiAodHNDb25maWc/LmNvbmZpZz8uY29tcGlsZXJPcHRpb25zPy5wYXRocykge1xuICBzd2NPcHRpb25zLmpzYy5wYXRocyA9IHRzQ29uZmlnLmNvbmZpZy5jb21waWxlck9wdGlvbnMucGF0aHM7XG5cbiAgaWYgKHRzQ29uZmlnPy5jb25maWc/LmNvbXBpbGVyT3B0aW9ucz8uYmFzZVVybCkge1xuICAgIHN3Y09wdGlvbnMuanNjLmJhc2VVcmwgPSBwYXRoLnJlc29sdmUoXG4gICAgICB0c0NvbmZpZy5jb25maWcuY29tcGlsZXJPcHRpb25zLmJhc2VVcmwsXG4gICAgKTtcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtaWdub3JlIC0gYmFkIEBzd2MvcmVnaXN0ZXIgdHlwZXNcbnN3Y1JlZ2lzdGVyKHN3Y09wdGlvbnMpO1xuXG5jb25zdCBhcmdzID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxuY29uc3Qgc2NyaXB0SW5kZXggPSBhcmdzLl8uZmluZEluZGV4KCh4KSA9PiB4ID09PSAnYnVpbGQnKTtcblxuY29uc3Qgc2NyaXB0ID0gc2NyaXB0SW5kZXggPT09IC0xID8gYXJncy5fWzBdIDogYXJncy5fW3NjcmlwdEluZGV4XTtcblxuaWYgKHNjcmlwdC5zdGFydHNXaXRoKCdtaWdyYXRlJykpIHtcbiAgbWlncmF0ZShhcmdzLl8pLnRoZW4oKCkgPT4gcHJvY2Vzcy5leGl0KDApKTtcbn0gZWxzZSB7XG4gIHN3aXRjaCAoc2NyaXB0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdidWlsZCc6IHtcbiAgICAgIGJ1aWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdnZW5lcmF0ZTp0eXBlcyc6IHtcbiAgICAgIGdlbmVyYXRlVHlwZXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2dlbmVyYXRlOmdyYXBocWxzY2hlbWEnOiB7XG4gICAgICBnZW5lcmF0ZUdyYXBoUUxTY2hlbWEoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhgVW5rbm93biBzY3JpcHQgXCIke3NjcmlwdH1cIi5gKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNDb25maWciLCJnZXRUU2NvbmZpZyIsInN3Y09wdGlvbnMiLCJzb3VyY2VNYXBzIiwianNjIiwicGFyc2VyIiwic3ludGF4IiwidHN4IiwicGF0aHMiLCJ1bmRlZmluZWQiLCJiYXNlVXJsIiwicGF0aCIsInJlc29sdmUiLCJtb2R1bGUiLCJ0eXBlIiwiaWdub3JlIiwiY29uZmlnIiwiY29tcGlsZXJPcHRpb25zIiwic3djUmVnaXN0ZXIiLCJhcmdzIiwibWluaW1pc3QiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwic2NyaXB0SW5kZXgiLCJfIiwiZmluZEluZGV4IiwieCIsInNjcmlwdCIsInN0YXJ0c1dpdGgiLCJtaWdyYXRlIiwidGhlbiIsImV4aXQiLCJ0b0xvd2VyQ2FzZSIsImJ1aWxkIiwiZ2VuZXJhdGVUeXBlcyIsImdlbmVyYXRlR3JhcGhRTFNjaGVtYSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBLHFEQUFxRDs7OzsyREFDcEM7K0RBQ0k7K0RBQ0c7MkJBQ21COzZCQUNiO3FDQUNRO3VCQUNkO3FCQUNGOzs7Ozs7SUFzQmxCQSxrQ0FBQUEsa0JBQUFBO0FBcEJKLElBQU1BLFdBQVdDLElBQUFBLHdCQUFXO0FBRTVCLElBQU1DLGFBQWE7SUFDakJDLFlBQVk7SUFDWkMsS0FBSztRQUNIQyxRQUFRO1lBQ05DLFFBQVE7WUFDUkMsS0FBSztRQUNQO1FBQ0FDLE9BQU9DO1FBQ1BDLFNBQVNDLGFBQUksQ0FBQ0MsT0FBTztJQUN2QjtJQUNBQyxRQUFRO1FBQ05DLE1BQU07SUFDUjtJQUNBQyxRQUFRO1FBQ047S0FDRDtBQUNIO0FBRUEsS0FBSWYsWUFBQUEsc0JBQUFBLGlDQUFBQSxtQkFBQUEsVUFBVWdCLE1BQU0sY0FBaEJoQix3Q0FBQUEsbUNBQUFBLGlCQUFrQmlCLGVBQWUsY0FBakNqQix1REFBQUEsaUNBQW1DUSxLQUFLLEVBQUU7UUFHeENSLG1DQUFBQSxtQkFBQUE7SUFGSkUsV0FBV0UsR0FBRyxDQUFDSSxLQUFLLEdBQUdSLFNBQVNnQixNQUFNLENBQUNDLGVBQWUsQ0FBQ1QsS0FBSztJQUU1RCxLQUFJUixhQUFBQSxzQkFBQUEsa0NBQUFBLG9CQUFBQSxXQUFVZ0IsTUFBTSxjQUFoQmhCLHlDQUFBQSxvQ0FBQUEsa0JBQWtCaUIsZUFBZSxjQUFqQ2pCLHdEQUFBQSxrQ0FBbUNVLE9BQU8sRUFBRTtRQUM5Q1IsV0FBV0UsR0FBRyxDQUFDTSxPQUFPLEdBQUdDLGFBQUksQ0FBQ0MsT0FBTyxDQUNuQ1osU0FBU2dCLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDUCxPQUFPO0lBRTNDO0FBQ0Y7QUFFQSw2REFBNkQ7QUFDN0QsdUNBQXVDO0FBQ3ZDUSxJQUFBQSxpQkFBVyxFQUFDaEI7QUFFWixJQUFNaUIsT0FBT0MsSUFBQUEsaUJBQVEsRUFBQ0MsUUFBUUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7QUFFekMsSUFBTUMsY0FBY0wsS0FBS00sQ0FBQyxDQUFDQyxTQUFTLENBQUMsU0FBQ0M7V0FBTUEsTUFBTTs7QUFFbEQsSUFBTUMsU0FBU0osZ0JBQWdCLENBQUMsSUFBSUwsS0FBS00sQ0FBQyxDQUFDLEVBQUUsR0FBR04sS0FBS00sQ0FBQyxDQUFDRCxZQUFZO0FBRW5FLElBQUlJLE9BQU9DLFVBQVUsQ0FBQyxZQUFZO0lBQ2hDQyxJQUFBQSxnQkFBTyxFQUFDWCxLQUFLTSxDQUFDLEVBQUVNLElBQUksQ0FBQztlQUFNVixRQUFRVyxJQUFJLENBQUM7O0FBQzFDLE9BQU87SUFDTCxPQUFRSixPQUFPSyxXQUFXO1FBQ3hCLEtBQUs7WUFBUztnQkFDWkMsSUFBQUEsWUFBSztnQkFDTDtZQUNGO1FBRUEsS0FBSztZQUFrQjtnQkFDckJDLElBQUFBLDRCQUFhO2dCQUNiO1lBQ0Y7UUFFQSxLQUFLO1lBQTBCO2dCQUM3QkMsSUFBQUEsNENBQXFCO2dCQUNyQjtZQUNGO1FBRUE7WUFDRUMsUUFBUUMsR0FBRyxDQUFDLEFBQUMsbUJBQXlCLE9BQVBWLFFBQU87WUFDdEM7SUFDSjtBQUNGIn0=