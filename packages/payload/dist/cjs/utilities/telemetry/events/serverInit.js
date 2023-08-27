"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "serverInit", {
    enumerable: true,
    get: function() {
        return serverInit;
    }
});
var _ = require("..");
var serverInit = function(payload) {
    (0, _.sendEvent)({
        payload: payload,
        event: {
            type: "server-init"
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L2V2ZW50cy9zZXJ2ZXJJbml0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNlbmRFdmVudCB9IGZyb20gJy4uJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLi9wYXlsb2FkJztcblxuZXhwb3J0IHR5cGUgU2VydmVySW5pdEV2ZW50ID0ge1xuICB0eXBlOiAnc2VydmVyLWluaXQnXG59O1xuXG5leHBvcnQgY29uc3Qgc2VydmVySW5pdCA9IChwYXlsb2FkOiBQYXlsb2FkKTogdm9pZCA9PiB7XG4gIHNlbmRFdmVudCh7XG4gICAgcGF5bG9hZCxcbiAgICBldmVudDoge1xuICAgICAgdHlwZTogJ3NlcnZlci1pbml0JyxcbiAgICB9LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsic2VydmVySW5pdCIsInBheWxvYWQiLCJzZW5kRXZlbnQiLCJldmVudCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBT2FBOzs7ZUFBQUE7OztnQkFQYTtBQU9uQixJQUFNQSxhQUFhLFNBQUNDO0lBQ3pCQyxJQUFBQSxXQUFTLEVBQUM7UUFDUkQsU0FBQUE7UUFDQUUsT0FBTztZQUNMQyxNQUFNO1FBQ1I7SUFDRjtBQUNGIn0=