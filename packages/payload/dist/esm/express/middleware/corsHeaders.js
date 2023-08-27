export default function(config) {
    return function(req, res, next) {
        if (config.cors) {
            res.header("Access-Control-Allow-Methods", "PUT, PATCH, POST, GET, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Encoding, x-apollo-tracing");
            if (config.cors === "*") {
                res.setHeader("Access-Control-Allow-Origin", "*");
            } else if (Array.isArray(config.cors) && config.cors.indexOf(req.headers.origin) > -1) {
                res.header("Access-Control-Allow-Credentials", "true");
                res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
            }
        }
        next();
    };
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvY29yc0hlYWRlcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UsIE5leHRGdW5jdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnKSA9PiAoXG4gIChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikgPT4ge1xuICAgIGlmIChjb25maWcuY29ycykge1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQVVQsIFBBVENILCBQT1NULCBHRVQsIERFTEVURSwgT1BUSU9OUycpO1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uLCBDb250ZW50LUVuY29kaW5nLCB4LWFwb2xsby10cmFjaW5nJyk7XG5cbiAgICAgIGlmIChjb25maWcuY29ycyA9PT0gJyonKSB7XG4gICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsICcqJyk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY29uZmlnLmNvcnMpICYmIGNvbmZpZy5jb3JzLmluZGV4T2YocmVxLmhlYWRlcnMub3JpZ2luKSA+IC0xKSB7XG4gICAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJywgJ3RydWUnKTtcbiAgICAgICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgcmVxLmhlYWRlcnMub3JpZ2luKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0KCk7XG4gIH0pO1xuIl0sIm5hbWVzIjpbImNvbmZpZyIsInJlcSIsInJlcyIsIm5leHQiLCJjb3JzIiwiaGVhZGVyIiwic2V0SGVhZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5kZXhPZiIsImhlYWRlcnMiLCJvcmlnaW4iXSwibWFwcGluZ3MiOiJBQUdBLGVBQWUsU0FBQ0E7V0FDZCxTQUFDQyxLQUFjQyxLQUFlQztRQUM1QixJQUFJSCxPQUFPSSxJQUFJLEVBQUU7WUFDZkYsSUFBSUcsTUFBTSxDQUFDLGdDQUFnQztZQUMzQ0gsSUFBSUcsTUFBTSxDQUFDLGdDQUFnQztZQUUzQyxJQUFJTCxPQUFPSSxJQUFJLEtBQUssS0FBSztnQkFDdkJGLElBQUlJLFNBQVMsQ0FBQywrQkFBK0I7WUFDL0MsT0FBTyxJQUFJQyxNQUFNQyxPQUFPLENBQUNSLE9BQU9JLElBQUksS0FBS0osT0FBT0ksSUFBSSxDQUFDSyxPQUFPLENBQUNSLElBQUlTLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsR0FBRztnQkFDckZULElBQUlHLE1BQU0sQ0FBQyxvQ0FBb0M7Z0JBQy9DSCxJQUFJSSxTQUFTLENBQUMsK0JBQStCTCxJQUFJUyxPQUFPLENBQUNDLE1BQU07WUFDakU7UUFDRjtRQUVBUjtJQUNGO0VBQUcifQ==