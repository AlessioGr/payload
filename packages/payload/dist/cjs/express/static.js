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
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _passport = /*#__PURE__*/ _interop_require_default(require("passport"));
var _path = /*#__PURE__*/ _interop_require_default(require("path"));
var _getExecuteStaticAccess = /*#__PURE__*/ _interop_require_default(require("../auth/getExecuteStaticAccess"));
var _authenticate = /*#__PURE__*/ _interop_require_default(require("./middleware/authenticate"));
var _corsHeaders = /*#__PURE__*/ _interop_require_default(require("./middleware/corsHeaders"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function initStatic(ctx) {
    Object.entries(ctx.collections).forEach(function(param) {
        var _param = _sliced_to_array(param, 2), _ = _param[0], collection = _param[1];
        var config = collection.config;
        if (config.upload && config.upload.staticURL.startsWith("/")) {
            var _config_upload;
            var router = _express.default.Router();
            router.use((0, _corsHeaders.default)(ctx.config));
            router.use(_passport.default.initialize());
            router.use((0, _authenticate.default)(ctx.config));
            router.use((0, _getExecuteStaticAccess.default)(config));
            if (Array.isArray((_config_upload = config.upload) === null || _config_upload === void 0 ? void 0 : _config_upload.handlers)) {
                router.get("/:filename*", config.upload.handlers);
            }
            var staticPath = _path.default.resolve(ctx.config.paths.configDir, config.upload.staticDir);
            router.use(_express.default.static(staticPath, config.upload.staticOptions || {}));
            ctx.express.use("".concat(config.upload.staticURL), router);
        }
    });
}
var _default = initStatic;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL3N0YXRpYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBnZXRFeGVjdXRlU3RhdGljQWNjZXNzIGZyb20gJy4uL2F1dGgvZ2V0RXhlY3V0ZVN0YXRpY0FjY2Vzcyc7XG5pbXBvcnQgYXV0aGVudGljYXRlIGZyb20gJy4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnO1xuaW1wb3J0IGNvcnNIZWFkZXJzIGZyb20gJy4vbWlkZGxld2FyZS9jb3JzSGVhZGVycyc7XG5cbmZ1bmN0aW9uIGluaXRTdGF0aWMoY3R4OiBQYXlsb2FkKTogdm9pZCB7XG4gIE9iamVjdC5lbnRyaWVzKGN0eC5jb2xsZWN0aW9ucykuZm9yRWFjaCgoW18sIGNvbGxlY3Rpb25dKSA9PiB7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IGNvbGxlY3Rpb247XG5cbiAgICBpZiAoY29uZmlnLnVwbG9hZCAmJiBjb25maWcudXBsb2FkLnN0YXRpY1VSTC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICAgIHJvdXRlci51c2UoY29yc0hlYWRlcnMoY3R4LmNvbmZpZykpO1xuICAgICAgcm91dGVyLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuICAgICAgcm91dGVyLnVzZShhdXRoZW50aWNhdGUoY3R4LmNvbmZpZykpO1xuXG4gICAgICByb3V0ZXIudXNlKGdldEV4ZWN1dGVTdGF0aWNBY2Nlc3MoY29uZmlnKSk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy51cGxvYWQ/LmhhbmRsZXJzKSkge1xuICAgICAgICByb3V0ZXIuZ2V0KCcvOmZpbGVuYW1lKicsIGNvbmZpZy51cGxvYWQuaGFuZGxlcnMpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGF0aWNQYXRoID0gcGF0aC5yZXNvbHZlKGN0eC5jb25maWcucGF0aHMuY29uZmlnRGlyLCBjb25maWcudXBsb2FkLnN0YXRpY0Rpcik7XG5cbiAgICAgIHJvdXRlci51c2UoZXhwcmVzcy5zdGF0aWMoc3RhdGljUGF0aCwgY29uZmlnLnVwbG9hZC5zdGF0aWNPcHRpb25zIHx8IHt9KSk7XG5cbiAgICAgIGN0eC5leHByZXNzLnVzZShgJHtjb25maWcudXBsb2FkLnN0YXRpY1VSTH1gLCByb3V0ZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRTdGF0aWM7XG4iXSwibmFtZXMiOlsiaW5pdFN0YXRpYyIsImN0eCIsIk9iamVjdCIsImVudHJpZXMiLCJjb2xsZWN0aW9ucyIsImZvckVhY2giLCJfIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsInVwbG9hZCIsInN0YXRpY1VSTCIsInN0YXJ0c1dpdGgiLCJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwidXNlIiwiY29yc0hlYWRlcnMiLCJwYXNzcG9ydCIsImluaXRpYWxpemUiLCJhdXRoZW50aWNhdGUiLCJnZXRFeGVjdXRlU3RhdGljQWNjZXNzIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFuZGxlcnMiLCJnZXQiLCJzdGF0aWNQYXRoIiwicGF0aCIsInJlc29sdmUiLCJwYXRocyIsImNvbmZpZ0RpciIsInN0YXRpY0RpciIsInN0YXRpYyIsInN0YXRpY09wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0NBOzs7ZUFBQTs7OzhEQWxDb0I7K0RBQ0M7MkRBQ0o7NkVBQ2tCO21FQUNWO2tFQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLFNBQVNBLFdBQVdDLEdBQVk7SUFDOUJDLE9BQU9DLE9BQU8sQ0FBQ0YsSUFBSUcsV0FBVyxFQUFFQyxPQUFPLENBQUM7aURBQUVDLGVBQUdDO1FBQzNDLElBQU0sQUFBRUMsU0FBV0QsV0FBWEM7UUFFUixJQUFJQSxPQUFPQyxNQUFNLElBQUlELE9BQU9DLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxVQUFVLENBQUMsTUFBTTtnQkFTMUNIO1lBUmxCLElBQU1JLFNBQVNDLGdCQUFPLENBQUNDLE1BQU07WUFFN0JGLE9BQU9HLEdBQUcsQ0FBQ0MsSUFBQUEsb0JBQVcsRUFBQ2YsSUFBSU8sTUFBTTtZQUNqQ0ksT0FBT0csR0FBRyxDQUFDRSxpQkFBUSxDQUFDQyxVQUFVO1lBQzlCTixPQUFPRyxHQUFHLENBQUNJLElBQUFBLHFCQUFZLEVBQUNsQixJQUFJTyxNQUFNO1lBRWxDSSxPQUFPRyxHQUFHLENBQUNLLElBQUFBLCtCQUFzQixFQUFDWjtZQUVsQyxJQUFJYSxNQUFNQyxPQUFPLEVBQUNkLGlCQUFBQSxPQUFPQyxNQUFNLGNBQWJELHFDQUFBQSxlQUFlZSxRQUFRLEdBQUc7Z0JBQzFDWCxPQUFPWSxHQUFHLENBQUMsZUFBZWhCLE9BQU9DLE1BQU0sQ0FBQ2MsUUFBUTtZQUNsRDtZQUVBLElBQU1FLGFBQWFDLGFBQUksQ0FBQ0MsT0FBTyxDQUFDMUIsSUFBSU8sTUFBTSxDQUFDb0IsS0FBSyxDQUFDQyxTQUFTLEVBQUVyQixPQUFPQyxNQUFNLENBQUNxQixTQUFTO1lBRW5GbEIsT0FBT0csR0FBRyxDQUFDRixnQkFBTyxDQUFDa0IsTUFBTSxDQUFDTixZQUFZakIsT0FBT0MsTUFBTSxDQUFDdUIsYUFBYSxJQUFJLENBQUM7WUFFdEUvQixJQUFJWSxPQUFPLENBQUNFLEdBQUcsQ0FBQyxBQUFDLEdBQTBCLE9BQXhCUCxPQUFPQyxNQUFNLENBQUNDLFNBQVMsR0FBSUU7UUFDaEQ7SUFDRjtBQUNGO0lBRUEsV0FBZVoifQ==