/* eslint-disable @typescript-eslint/no-var-requires */ var _tsConfig_config_compilerOptions, _tsConfig_config, _tsConfig;
import path from "path";
import minimist from "minimist";
import swcRegister from "@swc/register";
import { getTsconfig as getTSconfig } from "get-tsconfig";
import { generateTypes } from "./generateTypes";
import { generateGraphQLSchema } from "./generateGraphQLSchema";
import { migrate } from "./migrate";
import { build } from "./build";
var tsConfig = getTSconfig();
var swcOptions = {
    sourceMaps: "inline",
    jsc: {
        parser: {
            syntax: "typescript",
            tsx: true
        },
        paths: undefined,
        baseUrl: path.resolve()
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
        swcOptions.jsc.baseUrl = path.resolve(tsConfig.config.compilerOptions.baseUrl);
    }
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - bad @swc/register types
swcRegister(swcOptions);
var args = minimist(process.argv.slice(2));
var scriptIndex = args._.findIndex(function(x) {
    return x === "build";
});
var script = scriptIndex === -1 ? args._[0] : args._[scriptIndex];
if (script.startsWith("migrate")) {
    migrate(args._).then(function() {
        return process.exit(0);
    });
} else {
    switch(script.toLowerCase()){
        case "build":
            {
                build();
                break;
            }
        case "generate:types":
            {
                generateTypes();
                break;
            }
        case "generate:graphqlschema":
            {
                generateGraphQLSchema();
                break;
            }
        default:
            console.log('Unknown script "'.concat(script, '".'));
            break;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iaW4vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlcyAqL1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbWluaW1pc3QgZnJvbSAnbWluaW1pc3QnO1xuaW1wb3J0IHN3Y1JlZ2lzdGVyIGZyb20gJ0Bzd2MvcmVnaXN0ZXInO1xuaW1wb3J0IHsgZ2V0VHNjb25maWcgYXMgZ2V0VFNjb25maWcgfSBmcm9tICdnZXQtdHNjb25maWcnO1xuaW1wb3J0IHsgZ2VuZXJhdGVUeXBlcyB9IGZyb20gJy4vZ2VuZXJhdGVUeXBlcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZUdyYXBoUUxTY2hlbWEgfSBmcm9tICcuL2dlbmVyYXRlR3JhcGhRTFNjaGVtYSc7XG5pbXBvcnQgeyBtaWdyYXRlIH0gZnJvbSAnLi9taWdyYXRlJztcbmltcG9ydCB7IGJ1aWxkIH0gZnJvbSBcIi4vYnVpbGRcIjtcblxuY29uc3QgdHNDb25maWcgPSBnZXRUU2NvbmZpZygpO1xuXG5jb25zdCBzd2NPcHRpb25zID0ge1xuICBzb3VyY2VNYXBzOiAnaW5saW5lJyxcbiAganNjOiB7XG4gICAgcGFyc2VyOiB7XG4gICAgICBzeW50YXg6ICd0eXBlc2NyaXB0JyxcbiAgICAgIHRzeDogdHJ1ZSxcbiAgICB9LFxuICAgIHBhdGhzOiB1bmRlZmluZWQsXG4gICAgYmFzZVVybDogcGF0aC5yZXNvbHZlKCksXG4gIH0sXG4gIG1vZHVsZToge1xuICAgIHR5cGU6ICdlczYnLFxuICB9LFxuICBpZ25vcmU6IFtcbiAgICAvLipcXC9ub2RlX21vZHVsZXNcXC8uKi8sIC8vIHBhcnNlIGV2ZXJ5dGhpbmcgYmVzaWRlcyBmaWxlcyB3aXRoaW4gbm9kZV9tb2R1bGVzXG4gIF0sXG59O1xuXG5pZiAodHNDb25maWc/LmNvbmZpZz8uY29tcGlsZXJPcHRpb25zPy5wYXRocykge1xuICBzd2NPcHRpb25zLmpzYy5wYXRocyA9IHRzQ29uZmlnLmNvbmZpZy5jb21waWxlck9wdGlvbnMucGF0aHM7XG5cbiAgaWYgKHRzQ29uZmlnPy5jb25maWc/LmNvbXBpbGVyT3B0aW9ucz8uYmFzZVVybCkge1xuICAgIHN3Y09wdGlvbnMuanNjLmJhc2VVcmwgPSBwYXRoLnJlc29sdmUoXG4gICAgICB0c0NvbmZpZy5jb25maWcuY29tcGlsZXJPcHRpb25zLmJhc2VVcmwsXG4gICAgKTtcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtaWdub3JlIC0gYmFkIEBzd2MvcmVnaXN0ZXIgdHlwZXNcbnN3Y1JlZ2lzdGVyKHN3Y09wdGlvbnMpO1xuXG5jb25zdCBhcmdzID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxuY29uc3Qgc2NyaXB0SW5kZXggPSBhcmdzLl8uZmluZEluZGV4KCh4KSA9PiB4ID09PSAnYnVpbGQnKTtcblxuY29uc3Qgc2NyaXB0ID0gc2NyaXB0SW5kZXggPT09IC0xID8gYXJncy5fWzBdIDogYXJncy5fW3NjcmlwdEluZGV4XTtcblxuaWYgKHNjcmlwdC5zdGFydHNXaXRoKCdtaWdyYXRlJykpIHtcbiAgbWlncmF0ZShhcmdzLl8pLnRoZW4oKCkgPT4gcHJvY2Vzcy5leGl0KDApKTtcbn0gZWxzZSB7XG4gIHN3aXRjaCAoc2NyaXB0LnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdidWlsZCc6IHtcbiAgICAgIGJ1aWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdnZW5lcmF0ZTp0eXBlcyc6IHtcbiAgICAgIGdlbmVyYXRlVHlwZXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2dlbmVyYXRlOmdyYXBocWxzY2hlbWEnOiB7XG4gICAgICBnZW5lcmF0ZUdyYXBoUUxTY2hlbWEoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmxvZyhgVW5rbm93biBzY3JpcHQgXCIke3NjcmlwdH1cIi5gKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNDb25maWciLCJwYXRoIiwibWluaW1pc3QiLCJzd2NSZWdpc3RlciIsImdldFRzY29uZmlnIiwiZ2V0VFNjb25maWciLCJnZW5lcmF0ZVR5cGVzIiwiZ2VuZXJhdGVHcmFwaFFMU2NoZW1hIiwibWlncmF0ZSIsImJ1aWxkIiwic3djT3B0aW9ucyIsInNvdXJjZU1hcHMiLCJqc2MiLCJwYXJzZXIiLCJzeW50YXgiLCJ0c3giLCJwYXRocyIsInVuZGVmaW5lZCIsImJhc2VVcmwiLCJyZXNvbHZlIiwibW9kdWxlIiwidHlwZSIsImlnbm9yZSIsImNvbmZpZyIsImNvbXBpbGVyT3B0aW9ucyIsImFyZ3MiLCJwcm9jZXNzIiwiYXJndiIsInNsaWNlIiwic2NyaXB0SW5kZXgiLCJfIiwiZmluZEluZGV4IiwieCIsInNjcmlwdCIsInN0YXJ0c1dpdGgiLCJ0aGVuIiwiZXhpdCIsInRvTG93ZXJDYXNlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFELE9BOEJqREEsa0NBQUFBLGtCQUFBQTtBQTdCSixPQUFPQyxVQUFVLE9BQU87QUFDeEIsT0FBT0MsY0FBYyxXQUFXO0FBQ2hDLE9BQU9DLGlCQUFpQixnQkFBZ0I7QUFDeEMsU0FBU0MsZUFBZUMsV0FBVyxRQUFRLGVBQWU7QUFDMUQsU0FBU0MsYUFBYSxRQUFRLGtCQUFrQjtBQUNoRCxTQUFTQyxxQkFBcUIsUUFBUSwwQkFBMEI7QUFDaEUsU0FBU0MsT0FBTyxRQUFRLFlBQVk7QUFDcEMsU0FBU0MsS0FBSyxRQUFRLFVBQVU7QUFFaEMsSUFBTVQsV0FBV0s7QUFFakIsSUFBTUssYUFBYTtJQUNqQkMsWUFBWTtJQUNaQyxLQUFLO1FBQ0hDLFFBQVE7WUFDTkMsUUFBUTtZQUNSQyxLQUFLO1FBQ1A7UUFDQUMsT0FBT0M7UUFDUEMsU0FBU2pCLEtBQUtrQixPQUFPO0lBQ3ZCO0lBQ0FDLFFBQVE7UUFDTkMsTUFBTTtJQUNSO0lBQ0FDLFFBQVE7UUFDTjtLQUNEO0FBQ0g7QUFFQSxLQUFJdEIsWUFBQUEsc0JBQUFBLGlDQUFBQSxtQkFBQUEsVUFBVXVCLE1BQU0sY0FBaEJ2Qix3Q0FBQUEsbUNBQUFBLGlCQUFrQndCLGVBQWUsY0FBakN4Qix1REFBQUEsaUNBQW1DZ0IsS0FBSyxFQUFFO1FBR3hDaEIsbUNBQUFBLG1CQUFBQTtJQUZKVSxXQUFXRSxHQUFHLENBQUNJLEtBQUssR0FBR2hCLFNBQVN1QixNQUFNLENBQUNDLGVBQWUsQ0FBQ1IsS0FBSztJQUU1RCxLQUFJaEIsYUFBQUEsc0JBQUFBLGtDQUFBQSxvQkFBQUEsV0FBVXVCLE1BQU0sY0FBaEJ2Qix5Q0FBQUEsb0NBQUFBLGtCQUFrQndCLGVBQWUsY0FBakN4Qix3REFBQUEsa0NBQW1Da0IsT0FBTyxFQUFFO1FBQzlDUixXQUFXRSxHQUFHLENBQUNNLE9BQU8sR0FBR2pCLEtBQUtrQixPQUFPLENBQ25DbkIsU0FBU3VCLE1BQU0sQ0FBQ0MsZUFBZSxDQUFDTixPQUFPO0lBRTNDO0FBQ0Y7QUFFQSw2REFBNkQ7QUFDN0QsdUNBQXVDO0FBQ3ZDZixZQUFZTztBQUVaLElBQU1lLE9BQU92QixTQUFTd0IsUUFBUUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7QUFFekMsSUFBTUMsY0FBY0osS0FBS0ssQ0FBQyxDQUFDQyxTQUFTLENBQUMsU0FBQ0M7V0FBTUEsTUFBTTs7QUFFbEQsSUFBTUMsU0FBU0osZ0JBQWdCLENBQUMsSUFBSUosS0FBS0ssQ0FBQyxDQUFDLEVBQUUsR0FBR0wsS0FBS0ssQ0FBQyxDQUFDRCxZQUFZO0FBRW5FLElBQUlJLE9BQU9DLFVBQVUsQ0FBQyxZQUFZO0lBQ2hDMUIsUUFBUWlCLEtBQUtLLENBQUMsRUFBRUssSUFBSSxDQUFDO2VBQU1ULFFBQVFVLElBQUksQ0FBQzs7QUFDMUMsT0FBTztJQUNMLE9BQVFILE9BQU9JLFdBQVc7UUFDeEIsS0FBSztZQUFTO2dCQUNaNUI7Z0JBQ0E7WUFDRjtRQUVBLEtBQUs7WUFBa0I7Z0JBQ3JCSDtnQkFDQTtZQUNGO1FBRUEsS0FBSztZQUEwQjtnQkFDN0JDO2dCQUNBO1lBQ0Y7UUFFQTtZQUNFK0IsUUFBUUMsR0FBRyxDQUFDLEFBQUMsbUJBQXlCLE9BQVBOLFFBQU87WUFDdEM7SUFDSjtBQUNGIn0=