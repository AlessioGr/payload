import { sendEvent } from "..";
export var serverInit = function(payload) {
    sendEvent({
        payload: payload,
        event: {
            type: "server-init"
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L2V2ZW50cy9zZXJ2ZXJJbml0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbmRFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLi9wYXlsb2FkJztcblxuZXhwb3J0IHR5cGUgU2VydmVySW5pdEV2ZW50ID0ge1xuICB0eXBlOiAnc2VydmVyLWluaXQnXG59O1xuXG5leHBvcnQgY29uc3Qgc2VydmVySW5pdCA9IChwYXlsb2FkOiBQYXlsb2FkKTogdm9pZCA9PiB7XG4gIHNlbmRFdmVudCh7XG4gICAgcGF5bG9hZCxcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogJ3NlcnZlci1pbml0JyxcbiAgICB9LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsic2VuZEV2ZW50Iiwic2VydmVySW5pdCIsInBheWxvYWQiLCJldmVudCIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBUSxLQUFLO0FBTy9CLE9BQU8sSUFBTUMsYUFBYSxTQUFDQztJQUN6QkYsVUFBVTtRQUNSRSxTQUFBQTtRQUNBQyxPQUFPO1lBQ0xDLE1BQU07UUFDUjtJQUNGO0FBQ0YsRUFBRSJ9