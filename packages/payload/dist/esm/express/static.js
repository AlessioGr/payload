function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import express from "express";
import passport from "passport";
import path from "path";
import getExecuteStaticAccess from "../auth/getExecuteStaticAccess";
import authenticate from "./middleware/authenticate";
import corsHeaders from "./middleware/corsHeaders";
function initStatic(ctx) {
    Object.entries(ctx.collections).forEach(function(param) {
        var _param = _sliced_to_array(param, 2), _ = _param[0], collection = _param[1];
        var config = collection.config;
        if (config.upload && config.upload.staticURL.startsWith("/")) {
            var _config_upload;
            var router = express.Router();
            router.use(corsHeaders(ctx.config));
            router.use(passport.initialize());
            router.use(authenticate(ctx.config));
            router.use(getExecuteStaticAccess(config));
            if (Array.isArray((_config_upload = config.upload) === null || _config_upload === void 0 ? void 0 : _config_upload.handlers)) {
                router.get("/:filename*", config.upload.handlers);
            }
            var staticPath = path.resolve(ctx.config.paths.configDir, config.upload.staticDir);
            router.use(express.static(staticPath, config.upload.staticOptions || {}));
            ctx.express.use("".concat(config.upload.staticURL), router);
        }
    });
}
export default initStatic;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL3N0YXRpYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBnZXRFeGVjdXRlU3RhdGljQWNjZXNzIGZyb20gJy4uL2F1dGgvZ2V0RXhlY3V0ZVN0YXRpY0FjY2Vzcyc7XG5pbXBvcnQgYXV0aGVudGljYXRlIGZyb20gJy4vbWlkZGxld2FyZS9hdXRoZW50aWNhdGUnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnO1xuaW1wb3J0IGNvcnNIZWFkZXJzIGZyb20gJy4vbWlkZGxld2FyZS9jb3JzSGVhZGVycyc7XG5cbmZ1bmN0aW9uIGluaXRTdGF0aWMoY3R4OiBQYXlsb2FkKTogdm9pZCB7XG4gIE9iamVjdC5lbnRyaWVzKGN0eC5jb2xsZWN0aW9ucykuZm9yRWFjaCgoW18sIGNvbGxlY3Rpb25dKSA9PiB7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IGNvbGxlY3Rpb247XG5cbiAgICBpZiAoY29uZmlnLnVwbG9hZCAmJiBjb25maWcudXBsb2FkLnN0YXRpY1VSTC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgICAgIHJvdXRlci51c2UoY29yc0hlYWRlcnMoY3R4LmNvbmZpZykpO1xuICAgICAgcm91dGVyLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpO1xuICAgICAgcm91dGVyLnVzZShhdXRoZW50aWNhdGUoY3R4LmNvbmZpZykpO1xuXG4gICAgICByb3V0ZXIudXNlKGdldEV4ZWN1dGVTdGF0aWNBY2Nlc3MoY29uZmlnKSk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy51cGxvYWQ/LmhhbmRsZXJzKSkge1xuICAgICAgICByb3V0ZXIuZ2V0KCcvOmZpbGVuYW1lKicsIGNvbmZpZy51cGxvYWQuaGFuZGxlcnMpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdGF0aWNQYXRoID0gcGF0aC5yZXNvbHZlKGN0eC5jb25maWcucGF0aHMuY29uZmlnRGlyLCBjb25maWcudXBsb2FkLnN0YXRpY0Rpcik7XG5cbiAgICAgIHJvdXRlci51c2UoZXhwcmVzcy5zdGF0aWMoc3RhdGljUGF0aCwgY29uZmlnLnVwbG9hZC5zdGF0aWNPcHRpb25zIHx8IHt9KSk7XG5cbiAgICAgIGN0eC5leHByZXNzLnVzZShgJHtjb25maWcudXBsb2FkLnN0YXRpY1VSTH1gLCByb3V0ZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRTdGF0aWM7XG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsInBhc3Nwb3J0IiwicGF0aCIsImdldEV4ZWN1dGVTdGF0aWNBY2Nlc3MiLCJhdXRoZW50aWNhdGUiLCJjb3JzSGVhZGVycyIsImluaXRTdGF0aWMiLCJjdHgiLCJPYmplY3QiLCJlbnRyaWVzIiwiY29sbGVjdGlvbnMiLCJmb3JFYWNoIiwiXyIsImNvbGxlY3Rpb24iLCJjb25maWciLCJ1cGxvYWQiLCJzdGF0aWNVUkwiLCJzdGFydHNXaXRoIiwicm91dGVyIiwiUm91dGVyIiwidXNlIiwiaW5pdGlhbGl6ZSIsIkFycmF5IiwiaXNBcnJheSIsImhhbmRsZXJzIiwiZ2V0Iiwic3RhdGljUGF0aCIsInJlc29sdmUiLCJwYXRocyIsImNvbmZpZ0RpciIsInN0YXRpY0RpciIsInN0YXRpYyIsInN0YXRpY09wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxhQUFhLFVBQVU7QUFDOUIsT0FBT0MsY0FBYyxXQUFXO0FBQ2hDLE9BQU9DLFVBQVUsT0FBTztBQUN4QixPQUFPQyw0QkFBNEIsaUNBQWlDO0FBQ3BFLE9BQU9DLGtCQUFrQiw0QkFBNEI7QUFFckQsT0FBT0MsaUJBQWlCLDJCQUEyQjtBQUVuRCxTQUFTQyxXQUFXQyxHQUFZO0lBQzlCQyxPQUFPQyxPQUFPLENBQUNGLElBQUlHLFdBQVcsRUFBRUMsT0FBTyxDQUFDO2lEQUFFQyxlQUFHQztRQUMzQyxJQUFNLEFBQUVDLFNBQVdELFdBQVhDO1FBRVIsSUFBSUEsT0FBT0MsTUFBTSxJQUFJRCxPQUFPQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDLE1BQU07Z0JBUzFDSDtZQVJsQixJQUFNSSxTQUFTbEIsUUFBUW1CLE1BQU07WUFFN0JELE9BQU9FLEdBQUcsQ0FBQ2YsWUFBWUUsSUFBSU8sTUFBTTtZQUNqQ0ksT0FBT0UsR0FBRyxDQUFDbkIsU0FBU29CLFVBQVU7WUFDOUJILE9BQU9FLEdBQUcsQ0FBQ2hCLGFBQWFHLElBQUlPLE1BQU07WUFFbENJLE9BQU9FLEdBQUcsQ0FBQ2pCLHVCQUF1Qlc7WUFFbEMsSUFBSVEsTUFBTUMsT0FBTyxFQUFDVCxpQkFBQUEsT0FBT0MsTUFBTSxjQUFiRCxxQ0FBQUEsZUFBZVUsUUFBUSxHQUFHO2dCQUMxQ04sT0FBT08sR0FBRyxDQUFDLGVBQWVYLE9BQU9DLE1BQU0sQ0FBQ1MsUUFBUTtZQUNsRDtZQUVBLElBQU1FLGFBQWF4QixLQUFLeUIsT0FBTyxDQUFDcEIsSUFBSU8sTUFBTSxDQUFDYyxLQUFLLENBQUNDLFNBQVMsRUFBRWYsT0FBT0MsTUFBTSxDQUFDZSxTQUFTO1lBRW5GWixPQUFPRSxHQUFHLENBQUNwQixRQUFRK0IsTUFBTSxDQUFDTCxZQUFZWixPQUFPQyxNQUFNLENBQUNpQixhQUFhLElBQUksQ0FBQztZQUV0RXpCLElBQUlQLE9BQU8sQ0FBQ29CLEdBQUcsQ0FBQyxBQUFDLEdBQTBCLE9BQXhCTixPQUFPQyxNQUFNLENBQUNDLFNBQVMsR0FBSUU7UUFDaEQ7SUFDRjtBQUNGO0FBRUEsZUFBZVosV0FBVyJ9