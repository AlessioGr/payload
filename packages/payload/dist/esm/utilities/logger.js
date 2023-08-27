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
import pino from "pino";
var defaultLoggerOptions = {
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
            ignore: "pid,hostname",
            translateTime: "HH:MM:ss"
        }
    }
};
var getLogger = function() {
    var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "payload", options = arguments.length > 1 ? arguments[1] : void 0, destination = arguments.length > 2 ? arguments[2] : void 0;
    var _options;
    return pino(_object_spread({
        name: ((_options = options) === null || _options === void 0 ? void 0 : _options.name) || name,
        enabled: process.env.DISABLE_LOGGING !== "true"
    }, options || defaultLoggerOptions), destination);
};
export default getLogger;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvbG9nZ2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwaW5vIGZyb20gJ3Bpbm8nO1xuXG5leHBvcnQgdHlwZSBQYXlsb2FkTG9nZ2VyID0gcGluby5Mb2dnZXI7XG5cbmNvbnN0IGRlZmF1bHRMb2dnZXJPcHRpb25zOiBwaW5vLkxvZ2dlck9wdGlvbnMgPSB7XG4gIHRyYW5zcG9ydDoge1xuICAgIHRhcmdldDogJ3Bpbm8tcHJldHR5JyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBjb2xvcml6ZTogdHJ1ZSxcbiAgICAgIGlnbm9yZTogJ3BpZCxob3N0bmFtZScsXG4gICAgICB0cmFuc2xhdGVUaW1lOiAnSEg6TU06c3MnLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBnZXRMb2dnZXIgPSAobmFtZSA9ICdwYXlsb2FkJywgb3B0aW9ucz86IHBpbm8uTG9nZ2VyT3B0aW9ucywgZGVzdGluYXRpb24/OiBwaW5vLkRlc3RpbmF0aW9uU3RyZWFtKTogUGF5bG9hZExvZ2dlciA9PiBwaW5vKHtcbiAgbmFtZTogb3B0aW9ucz8ubmFtZSB8fCBuYW1lLFxuICBlbmFibGVkOiBwcm9jZXNzLmVudi5ESVNBQkxFX0xPR0dJTkcgIT09ICd0cnVlJyxcbiAgLi4uKG9wdGlvbnMgfHwgZGVmYXVsdExvZ2dlck9wdGlvbnMpLFxufSwgZGVzdGluYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMb2dnZXI7XG4iXSwibmFtZXMiOlsicGlubyIsImRlZmF1bHRMb2dnZXJPcHRpb25zIiwidHJhbnNwb3J0IiwidGFyZ2V0Iiwib3B0aW9ucyIsImNvbG9yaXplIiwiaWdub3JlIiwidHJhbnNsYXRlVGltZSIsImdldExvZ2dlciIsIm5hbWUiLCJkZXN0aW5hdGlvbiIsImVuYWJsZWQiLCJwcm9jZXNzIiwiZW52IiwiRElTQUJMRV9MT0dHSU5HIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsVUFBVSxPQUFPO0FBSXhCLElBQU1DLHVCQUEyQztJQUMvQ0MsV0FBVztRQUNUQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLGVBQWU7UUFDakI7SUFDRjtBQUNGO0FBRUEsSUFBTUMsWUFBWTtRQUFDQyx3RUFBTyxXQUFXTCx3REFBOEJNO1FBQzNETjtXQURtSEosS0FBSztRQUM5SFMsTUFBTUwsRUFBQUEsV0FBQUEscUJBQUFBLCtCQUFBQSxTQUFTSyxJQUFJLEtBQUlBO1FBQ3ZCRSxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGVBQWUsS0FBSztPQUNyQ1YsV0FBV0gsdUJBQ2RTOztBQUVILGVBQWVGLFVBQVUifQ==