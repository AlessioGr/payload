import { sendEvent } from "..";
import { oneWayHash } from "../oneWayHash";
export var adminInit = function(req) {
    var _user;
    var user = req.user, payload = req.payload;
    var host = req.headers.host;
    var domainID;
    var userID;
    if (host) {
        domainID = oneWayHash(host, payload.secret);
    }
    if (user && typeof ((_user = user) === null || _user === void 0 ? void 0 : _user.id) === "string") {
        userID = oneWayHash(user.id, payload.secret);
    }
    sendEvent({
        payload: payload,
        event: {
            type: "admin-init",
            domainID: domainID,
            userID: userID
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L2V2ZW50cy9hZG1pbkluaXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IHNlbmRFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IG9uZVdheUhhc2ggfSBmcm9tICcuLi9vbmVXYXlIYXNoJztcblxuZXhwb3J0IHR5cGUgQWRtaW5Jbml0RXZlbnQgPSB7XG4gIHR5cGU6ICdhZG1pbi1pbml0J1xuICBkb21haW5JRD86IHN0cmluZ1xuICB1c2VySUQ/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNvbnN0IGFkbWluSW5pdCA9IChyZXE6IFBheWxvYWRSZXF1ZXN0KTogdm9pZCA9PiB7XG4gIGNvbnN0IHsgdXNlciwgcGF5bG9hZCB9ID0gcmVxO1xuICBjb25zdCB7IGhvc3QgfSA9IHJlcS5oZWFkZXJzO1xuXG4gIGxldCBkb21haW5JRDogc3RyaW5nO1xuICBsZXQgdXNlcklEOiBzdHJpbmc7XG5cbiAgaWYgKGhvc3QpIHtcbiAgICBkb21haW5JRCA9IG9uZVdheUhhc2goaG9zdCwgcGF5bG9hZC5zZWNyZXQpO1xuICB9XG5cbiAgaWYgKHVzZXIgJiYgdHlwZW9mIHVzZXI/LmlkID09PSAnc3RyaW5nJykge1xuICAgIHVzZXJJRCA9IG9uZVdheUhhc2godXNlci5pZCwgcGF5bG9hZC5zZWNyZXQpO1xuICB9XG5cbiAgc2VuZEV2ZW50KHtcbiAgICBwYXlsb2FkLFxuICAgIGV2ZW50OiB7XG4gICAgICB0eXBlOiAnYWRtaW4taW5pdCcsXG4gICAgICBkb21haW5JRCxcbiAgICAgIHVzZXJJRCxcbiAgICB9LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsic2VuZEV2ZW50Iiwib25lV2F5SGFzaCIsImFkbWluSW5pdCIsInJlcSIsInVzZXIiLCJwYXlsb2FkIiwiaG9zdCIsImhlYWRlcnMiLCJkb21haW5JRCIsInVzZXJJRCIsInNlY3JldCIsImlkIiwiZXZlbnQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiQUFDQSxTQUFTQSxTQUFTLFFBQVEsS0FBSztBQUMvQixTQUFTQyxVQUFVLFFBQVEsZ0JBQWdCO0FBUTNDLE9BQU8sSUFBTUMsWUFBWSxTQUFDQztRQVdMQztJQVZuQixJQUFRQSxPQUFrQkQsSUFBbEJDLE1BQU1DLFVBQVlGLElBQVpFO0lBQ2QsSUFBTSxBQUFFQyxPQUFTSCxJQUFJSSxPQUFPLENBQXBCRDtJQUVSLElBQUlFO0lBQ0osSUFBSUM7SUFFSixJQUFJSCxNQUFNO1FBQ1JFLFdBQVdQLFdBQVdLLE1BQU1ELFFBQVFLLE1BQU07SUFDNUM7SUFFQSxJQUFJTixRQUFRLFNBQU9BLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTU8sRUFBRSxNQUFLLFVBQVU7UUFDeENGLFNBQVNSLFdBQVdHLEtBQUtPLEVBQUUsRUFBRU4sUUFBUUssTUFBTTtJQUM3QztJQUVBVixVQUFVO1FBQ1JLLFNBQUFBO1FBQ0FPLE9BQU87WUFDTEMsTUFBTTtZQUNOTCxVQUFBQTtZQUNBQyxRQUFBQTtRQUNGO0lBQ0Y7QUFDRixFQUFFIn0=