"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return parseCookies;
    }
});
function parseCookies(req) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VDb29raWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcTogUmVxdWVzdCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICBjb25zdCBsaXN0ID0ge307XG4gIGNvbnN0IHJjID0gcmVxLmhlYWRlcnMuY29va2llO1xuXG4gIGlmIChyYykge1xuICAgIHJjLnNwbGl0KCc7JykuZm9yRWFjaCgoY29va2llKSA9PiB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGNvb2tpZS5zcGxpdCgnPScpO1xuICAgICAgbGlzdFtwYXJ0cy5zaGlmdCgpLnRyaW0oKV0gPSBkZWNvZGVVUkkocGFydHMuam9pbignPScpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaXN0O1xufVxuIl0sIm5hbWVzIjpbInBhcnNlQ29va2llcyIsInJlcSIsImxpc3QiLCJyYyIsImhlYWRlcnMiLCJjb29raWUiLCJzcGxpdCIsImZvckVhY2giLCJwYXJ0cyIsInNoaWZ0IiwidHJpbSIsImRlY29kZVVSSSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7K0JBRUE7OztlQUF3QkE7OztBQUFULFNBQVNBLGFBQWFDLEdBQVk7SUFDL0MsSUFBTUMsT0FBTyxDQUFDO0lBQ2QsSUFBTUMsS0FBS0YsSUFBSUcsT0FBTyxDQUFDQyxNQUFNO0lBRTdCLElBQUlGLElBQUk7UUFDTkEsR0FBR0csS0FBSyxDQUFDLEtBQUtDLE9BQU8sQ0FBQyxTQUFDRjtZQUNyQixJQUFNRyxRQUFRSCxPQUFPQyxLQUFLLENBQUM7WUFDM0JKLElBQUksQ0FBQ00sTUFBTUMsS0FBSyxHQUFHQyxJQUFJLEdBQUcsR0FBR0MsVUFBVUgsTUFBTUksSUFBSSxDQUFDO1FBQ3BEO0lBQ0Y7SUFFQSxPQUFPVjtBQUNUIn0=