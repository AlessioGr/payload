/* eslint-disable react/destructuring-assignment */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _parseCookies = /*#__PURE__*/ _interop_require_default(require("../utilities/parseCookies"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var getExtractJWT = function(config) {
    return function(req) {
        if (req && req.get) {
            var jwtFromHeader = req.get("Authorization");
            var origin = req.get("Origin");
            if (jwtFromHeader && jwtFromHeader.indexOf("JWT ") === 0) {
                return jwtFromHeader.replace("JWT ", "");
            }
            var cookies = (0, _parseCookies.default)(req);
            var tokenCookieName = "".concat(config.cookiePrefix, "-token");
            if (cookies && cookies[tokenCookieName]) {
                if (!origin || config.csrf.length === 0 || config.csrf.indexOf(origin) > -1) {
                    return cookies[tokenCookieName];
                }
            }
        }
        return null;
    };
};
var _default = getExtractJWT;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2dldEV4dHJhY3RKV1QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHBhcnNlQ29va2llcyBmcm9tICcuLi91dGlsaXRpZXMvcGFyc2VDb29raWVzJztcblxuY29uc3QgZ2V0RXh0cmFjdEpXVCA9IChjb25maWc6IFNhbml0aXplZENvbmZpZykgPT4gKHJlcTogUmVxdWVzdCk6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAocmVxICYmIHJlcS5nZXQpIHtcbiAgICBjb25zdCBqd3RGcm9tSGVhZGVyID0gcmVxLmdldCgnQXV0aG9yaXphdGlvbicpO1xuICAgIGNvbnN0IG9yaWdpbiA9IHJlcS5nZXQoJ09yaWdpbicpO1xuXG4gICAgaWYgKGp3dEZyb21IZWFkZXIgJiYgand0RnJvbUhlYWRlci5pbmRleE9mKCdKV1QgJykgPT09IDApIHtcbiAgICAgIHJldHVybiBqd3RGcm9tSGVhZGVyLnJlcGxhY2UoJ0pXVCAnLCAnJyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXEpO1xuICAgIGNvbnN0IHRva2VuQ29va2llTmFtZSA9IGAke2NvbmZpZy5jb29raWVQcmVmaXh9LXRva2VuYDtcblxuICAgIGlmIChjb29raWVzICYmIGNvb2tpZXNbdG9rZW5Db29raWVOYW1lXSkge1xuICAgICAgaWYgKCFvcmlnaW4gfHwgY29uZmlnLmNzcmYubGVuZ3RoID09PSAwIHx8IGNvbmZpZy5jc3JmLmluZGV4T2Yob3JpZ2luKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBjb29raWVzW3Rva2VuQ29va2llTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRFeHRyYWN0SldUO1xuIl0sIm5hbWVzIjpbImdldEV4dHJhY3RKV1QiLCJjb25maWciLCJyZXEiLCJnZXQiLCJqd3RGcm9tSGVhZGVyIiwib3JpZ2luIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJjb29raWVzIiwicGFyc2VDb29raWVzIiwidG9rZW5Db29raWVOYW1lIiwiY29va2llUHJlZml4IiwiY3NyZiIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlEOzs7OytCQTJCakQ7OztlQUFBOzs7bUVBeEJ5Qjs7Ozs7O0FBRXpCLElBQU1BLGdCQUFnQixTQUFDQztXQUE0QixTQUFDQztRQUNsRCxJQUFJQSxPQUFPQSxJQUFJQyxHQUFHLEVBQUU7WUFDbEIsSUFBTUMsZ0JBQWdCRixJQUFJQyxHQUFHLENBQUM7WUFDOUIsSUFBTUUsU0FBU0gsSUFBSUMsR0FBRyxDQUFDO1lBRXZCLElBQUlDLGlCQUFpQkEsY0FBY0UsT0FBTyxDQUFDLFlBQVksR0FBRztnQkFDeEQsT0FBT0YsY0FBY0csT0FBTyxDQUFDLFFBQVE7WUFDdkM7WUFFQSxJQUFNQyxVQUFVQyxJQUFBQSxxQkFBWSxFQUFDUDtZQUM3QixJQUFNUSxrQkFBa0IsQUFBQyxHQUFzQixPQUFwQlQsT0FBT1UsWUFBWSxFQUFDO1lBRS9DLElBQUlILFdBQVdBLE9BQU8sQ0FBQ0UsZ0JBQWdCLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQ0wsVUFBVUosT0FBT1csSUFBSSxDQUFDQyxNQUFNLEtBQUssS0FBS1osT0FBT1csSUFBSSxDQUFDTixPQUFPLENBQUNELFVBQVUsQ0FBQyxHQUFHO29CQUMzRSxPQUFPRyxPQUFPLENBQUNFLGdCQUFnQjtnQkFDakM7WUFDRjtRQUNGO1FBRUEsT0FBTztJQUNUOztJQUVBLFdBQWVWIn0=