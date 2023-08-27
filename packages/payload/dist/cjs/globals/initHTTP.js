"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initGlobals;
    }
});
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _mountEndpoints = /*#__PURE__*/ _interop_require_default(require("../express/mountEndpoints"));
var _buildEndpoints = /*#__PURE__*/ _interop_require_default(require("./buildEndpoints"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initGlobals(ctx) {
    if (ctx.config.globals) {
        ctx.config.globals.forEach(function(global) {
            var router = _express.default.Router();
            var slug = global.slug;
            var endpoints = (0, _buildEndpoints.default)(global);
            (0, _mountEndpoints.default)(ctx.express, router, endpoints);
            ctx.router.use("/globals/".concat(slug), router);
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9nbG9iYWxzL2luaXRIVFRQLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IG1vdW50RW5kcG9pbnRzIGZyb20gJy4uL2V4cHJlc3MvbW91bnRFbmRwb2ludHMnO1xuaW1wb3J0IGJ1aWxkRW5kcG9pbnRzIGZyb20gJy4vYnVpbGRFbmRwb2ludHMnO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0R2xvYmFscyhjdHg6IFBheWxvYWQpOiB2b2lkIHtcbiAgaWYgKGN0eC5jb25maWcuZ2xvYmFscykge1xuICAgIGN0eC5jb25maWcuZ2xvYmFscy5mb3JFYWNoKChnbG9iYWw6IFNhbml0aXplZEdsb2JhbENvbmZpZykgPT4ge1xuICAgICAgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbiAgICAgIGNvbnN0IHsgc2x1ZyB9ID0gZ2xvYmFsO1xuXG4gICAgICBjb25zdCBlbmRwb2ludHMgPSBidWlsZEVuZHBvaW50cyhnbG9iYWwpO1xuICAgICAgbW91bnRFbmRwb2ludHMoY3R4LmV4cHJlc3MsIHJvdXRlciwgZW5kcG9pbnRzKTtcblxuICAgICAgY3R4LnJvdXRlci51c2UoYC9nbG9iYWxzLyR7c2x1Z31gLCByb3V0ZXIpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiaW5pdEdsb2JhbHMiLCJjdHgiLCJjb25maWciLCJnbG9iYWxzIiwiZm9yRWFjaCIsImdsb2JhbCIsInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJzbHVnIiwiZW5kcG9pbnRzIiwiYnVpbGRFbmRwb2ludHMiLCJtb3VudEVuZHBvaW50cyIsInVzZSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFNQTs7O2VBQXdCQTs7OzhEQU5KO3FFQUNPO3FFQUNBOzs7Ozs7QUFJWixTQUFTQSxZQUFZQyxHQUFZO0lBQzlDLElBQUlBLElBQUlDLE1BQU0sQ0FBQ0MsT0FBTyxFQUFFO1FBQ3RCRixJQUFJQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDO1lBQzFCLElBQU1DLFNBQVNDLGdCQUFPLENBQUNDLE1BQU07WUFDN0IsSUFBTSxBQUFFQyxPQUFTSixPQUFUSTtZQUVSLElBQU1DLFlBQVlDLElBQUFBLHVCQUFjLEVBQUNOO1lBQ2pDTyxJQUFBQSx1QkFBYyxFQUFDWCxJQUFJTSxPQUFPLEVBQUVELFFBQVFJO1lBRXBDVCxJQUFJSyxNQUFNLENBQUNPLEdBQUcsQ0FBQyxBQUFDLFlBQWdCLE9BQUxKLE9BQVFIO1FBQ3JDO0lBQ0Y7QUFDRiJ9