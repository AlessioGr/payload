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
var _passport = /*#__PURE__*/ _interop_require_default(require("passport"));
var _passportanonymous = /*#__PURE__*/ _interop_require_default(require("passport-anonymous"));
var _jwt = /*#__PURE__*/ _interop_require_default(require("./strategies/jwt"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function initAuth(ctx) {
    _passport.default.use(new _passportanonymous.default.Strategy());
    _passport.default.use("jwt", (0, _jwt.default)(ctx));
}
var _default = initAuth;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2luaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhc3Nwb3J0IGZyb20gJ3Bhc3Nwb3J0JztcbmltcG9ydCBBbm9ueW1vdXNTdHJhdGVneSBmcm9tICdwYXNzcG9ydC1hbm9ueW1vdXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnO1xuaW1wb3J0IGp3dFN0cmF0ZWd5IGZyb20gJy4vc3RyYXRlZ2llcy9qd3QnO1xuXG5mdW5jdGlvbiBpbml0QXV0aChjdHg6IFBheWxvYWQpOiB2b2lkIHtcbiAgcGFzc3BvcnQudXNlKG5ldyBBbm9ueW1vdXNTdHJhdGVneS5TdHJhdGVneSgpKTtcbiAgcGFzc3BvcnQudXNlKCdqd3QnLCBqd3RTdHJhdGVneShjdHgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEF1dGg7XG4iXSwibmFtZXMiOlsiaW5pdEF1dGgiLCJjdHgiLCJwYXNzcG9ydCIsInVzZSIsIkFub255bW91c1N0cmF0ZWd5IiwiU3RyYXRlZ3kiLCJqd3RTdHJhdGVneSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFVQTs7O2VBQUE7OzsrREFWcUI7d0VBQ1M7MERBRU47Ozs7OztBQUV4QixTQUFTQSxTQUFTQyxHQUFZO0lBQzVCQyxpQkFBUSxDQUFDQyxHQUFHLENBQUMsSUFBSUMsMEJBQWlCLENBQUNDLFFBQVE7SUFDM0NILGlCQUFRLENBQUNDLEdBQUcsQ0FBQyxPQUFPRyxJQUFBQSxZQUFXLEVBQUNMO0FBQ2xDO0lBRUEsV0FBZUQifQ==