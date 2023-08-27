/* eslint-disable react/destructuring-assignment */ import parseCookies from "../utilities/parseCookies";
var getExtractJWT = function(config) {
    return function(req) {
        if (req && req.get) {
            var jwtFromHeader = req.get("Authorization");
            var origin = req.get("Origin");
            if (jwtFromHeader && jwtFromHeader.indexOf("JWT ") === 0) {
                return jwtFromHeader.replace("JWT ", "");
            }
            var cookies = parseCookies(req);
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
export default getExtractJWT;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2dldEV4dHJhY3RKV1QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZGVzdHJ1Y3R1cmluZy1hc3NpZ25tZW50ICovXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb25maWcgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHBhcnNlQ29va2llcyBmcm9tICcuLi91dGlsaXRpZXMvcGFyc2VDb29raWVzJztcblxuY29uc3QgZ2V0RXh0cmFjdEpXVCA9IChjb25maWc6IFNhbml0aXplZENvbmZpZykgPT4gKHJlcTogUmVxdWVzdCk6IHN0cmluZyB8IG51bGwgPT4ge1xuICBpZiAocmVxICYmIHJlcS5nZXQpIHtcbiAgICBjb25zdCBqd3RGcm9tSGVhZGVyID0gcmVxLmdldCgnQXV0aG9yaXphdGlvbicpO1xuICAgIGNvbnN0IG9yaWdpbiA9IHJlcS5nZXQoJ09yaWdpbicpO1xuXG4gICAgaWYgKGp3dEZyb21IZWFkZXIgJiYgand0RnJvbUhlYWRlci5pbmRleE9mKCdKV1QgJykgPT09IDApIHtcbiAgICAgIHJldHVybiBqd3RGcm9tSGVhZGVyLnJlcGxhY2UoJ0pXVCAnLCAnJyk7XG4gICAgfVxuXG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXEpO1xuICAgIGNvbnN0IHRva2VuQ29va2llTmFtZSA9IGAke2NvbmZpZy5jb29raWVQcmVmaXh9LXRva2VuYDtcblxuICAgIGlmIChjb29raWVzICYmIGNvb2tpZXNbdG9rZW5Db29raWVOYW1lXSkge1xuICAgICAgaWYgKCFvcmlnaW4gfHwgY29uZmlnLmNzcmYubGVuZ3RoID09PSAwIHx8IGNvbmZpZy5jc3JmLmluZGV4T2Yob3JpZ2luKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBjb29raWVzW3Rva2VuQ29va2llTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRFeHRyYWN0SldUO1xuIl0sIm5hbWVzIjpbInBhcnNlQ29va2llcyIsImdldEV4dHJhY3RKV1QiLCJjb25maWciLCJyZXEiLCJnZXQiLCJqd3RGcm9tSGVhZGVyIiwib3JpZ2luIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJjb29raWVzIiwidG9rZW5Db29raWVOYW1lIiwiY29va2llUHJlZml4IiwiY3NyZiIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsaURBQWlELEdBR2pELE9BQU9BLGtCQUFrQiw0QkFBNEI7QUFFckQsSUFBTUMsZ0JBQWdCLFNBQUNDO1dBQTRCLFNBQUNDO1FBQ2xELElBQUlBLE9BQU9BLElBQUlDLEdBQUcsRUFBRTtZQUNsQixJQUFNQyxnQkFBZ0JGLElBQUlDLEdBQUcsQ0FBQztZQUM5QixJQUFNRSxTQUFTSCxJQUFJQyxHQUFHLENBQUM7WUFFdkIsSUFBSUMsaUJBQWlCQSxjQUFjRSxPQUFPLENBQUMsWUFBWSxHQUFHO2dCQUN4RCxPQUFPRixjQUFjRyxPQUFPLENBQUMsUUFBUTtZQUN2QztZQUVBLElBQU1DLFVBQVVULGFBQWFHO1lBQzdCLElBQU1PLGtCQUFrQixBQUFDLEdBQXNCLE9BQXBCUixPQUFPUyxZQUFZLEVBQUM7WUFFL0MsSUFBSUYsV0FBV0EsT0FBTyxDQUFDQyxnQkFBZ0IsRUFBRTtnQkFDdkMsSUFBSSxDQUFDSixVQUFVSixPQUFPVSxJQUFJLENBQUNDLE1BQU0sS0FBSyxLQUFLWCxPQUFPVSxJQUFJLENBQUNMLE9BQU8sQ0FBQ0QsVUFBVSxDQUFDLEdBQUc7b0JBQzNFLE9BQU9HLE9BQU8sQ0FBQ0MsZ0JBQWdCO2dCQUNqQztZQUNGO1FBQ0Y7UUFFQSxPQUFPO0lBQ1Q7O0FBRUEsZUFBZVQsY0FBYyJ9