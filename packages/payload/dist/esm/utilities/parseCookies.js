export default function parseCookies(req) {
    var list = {};
    var rc = req.headers.cookie;
    if (rc) {
        rc.split(";").forEach(function(cookie) {
            var parts = cookie.split("=");
            list[parts.shift().trim()] = decodeURI(parts.join("="));
        });
    }
    return list;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VDb29raWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcTogUmVxdWVzdCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICBjb25zdCBsaXN0ID0ge307XG4gIGNvbnN0IHJjID0gcmVxLmhlYWRlcnMuY29va2llO1xuXG4gIGlmIChyYykge1xuICAgIHJjLnNwbGl0KCc7JykuZm9yRWFjaCgoY29va2llKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGNvb2tpZS5zcGxpdCgnPScpO1xuICAgICAgbGlzdFtwYXJ0cy5zaGlmdCgpLnRyaW0oKV0gPSBkZWNvZGVVUkkocGFydHMuam9pbignPScpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufVxuIl0sIm5hbWVzIjpbInBhcnNlQ29va2llcyIsInJlcSIsImxpc3QiLCJyYyIsImhlYWRlcnMiLCJjb29raWUiLCJzcGxpdCIsImZvckVhY2giLCJwYXJ0cyIsInNoaWZ0IiwidHJpbSIsImRlY29kZVVSSSIsImpvaW4iXSwibWFwcGluZ3MiOiJBQUVBLGVBQWUsU0FBU0EsYUFBYUMsR0FBWTtJQUMvQyxJQUFNQyxPQUFPLENBQUM7SUFDZCxJQUFNQyxLQUFLRixJQUFJRyxPQUFPLENBQUNDLE1BQU07SUFFN0IsSUFBSUYsSUFBSTtRQUNOQSxHQUFHRyxLQUFLLENBQUMsS0FBS0MsT0FBTyxDQUFDLFNBQUNGO1lBQ3JCLElBQU1HLFFBQVFILE9BQU9DLEtBQUssQ0FBQztZQUMzQkosSUFBSSxDQUFDTSxNQUFNQyxLQUFLLEdBQUdDLElBQUksR0FBRyxHQUFHQyxVQUFVSCxNQUFNSSxJQUFJLENBQUM7UUFDcEQ7SUFDRjtJQUVBLE9BQU9WO0FBQ1QifQ==