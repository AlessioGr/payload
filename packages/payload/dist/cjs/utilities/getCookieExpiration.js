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
var getCookieExpiration = function() {
    var seconds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 7200;
    var currentTime = new Date();
    currentTime.setSeconds(currentTime.getSeconds() + seconds);
    return currentTime;
};
var _default = getCookieExpiration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0Q29va2llRXhwaXJhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRDb29raWVFeHBpcmF0aW9uID0gKHNlY29uZHMgPSA3MjAwKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgY3VycmVudFRpbWUuc2V0U2Vjb25kcyhjdXJyZW50VGltZS5nZXRTZWNvbmRzKCkgKyBzZWNvbmRzKTtcbiAgcmV0dXJuIGN1cnJlbnRUaW1lO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29va2llRXhwaXJhdGlvbjtcbiJdLCJuYW1lcyI6WyJnZXRDb29raWVFeHBpcmF0aW9uIiwic2Vjb25kcyIsImN1cnJlbnRUaW1lIiwiRGF0ZSIsInNldFNlY29uZHMiLCJnZXRTZWNvbmRzIl0sIm1hcHBpbmdzIjoiOzs7OytCQU1BOzs7ZUFBQTs7O0FBTkEsSUFBTUEsc0JBQXNCO1FBQUNDLDJFQUFVO0lBQ3JDLElBQU1DLGNBQWMsSUFBSUM7SUFDeEJELFlBQVlFLFVBQVUsQ0FBQ0YsWUFBWUcsVUFBVSxLQUFLSjtJQUNsRCxPQUFPQztBQUNUO0lBRUEsV0FBZUYifQ==