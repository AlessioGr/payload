"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasTransport: function() {
        return hasTransport;
    },
    hasTransportOptions: function() {
        return hasTransportOptions;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function hasTransport(emailConfig) {
    return emailConfig.transport !== undefined;
}
function hasTransportOptions(emailConfig) {
    return emailConfig.transportOptions !== undefined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvdHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwcmVzcywgTmV4dEZ1bmN0aW9uLCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgRGVlcFJlcXVpcmVkIH0gZnJvbSAndHMtZXNzZW50aWFscyc7XG5pbXBvcnQgeyBUcmFuc3BvcnRlciB9IGZyb20gJ25vZGVtYWlsZXInO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBFeHByZXNzRmlsZVVwbG9hZE9wdGlvbnMgfSBmcm9tICdleHByZXNzLWZpbGV1cGxvYWQnO1xuaW1wb3J0IHR5cGUgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnd2VicGFjayc7XG5pbXBvcnQgU01UUENvbm5lY3Rpb24gZnJvbSAnbm9kZW1haWxlci9saWIvc210cC1jb25uZWN0aW9uJztcbmltcG9ydCBHcmFwaFFMIGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERlc3RpbmF0aW9uU3RyZWFtLCBMb2dnZXJPcHRpb25zIH0gZnJvbSAncGlubyc7XG5pbXBvcnQgdHlwZSB7IEluaXRPcHRpb25zIGFzIGkxOG5Jbml0T3B0aW9ucyB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHsgVmFsaWRhdGUgfSBmcm9tICcuLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi9wYXlsb2FkJztcbmltcG9ydCB7IEFmdGVyRXJyb3JIb29rLCBDb2xsZWN0aW9uQ29uZmlnLCBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IEdsb2JhbENvbmZpZywgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2F1dGgvdHlwZXMnO1xuaW1wb3J0IHsgRGF0YWJhc2VBZGFwdGVyIH0gZnJvbSAnLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkQnVuZGxlciB9IGZyb20gJy4uL2J1bmRsZXJzL3R5cGVzJztcblxudHlwZSBQcmV0dGlmeTxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF06IFRbS107XG59ICYgTm9uTnVsbGFibGU8dW5rbm93bj47XG5cbnR5cGUgRW1haWwgPSB7XG4gIGZyb21OYW1lOiBzdHJpbmc7XG4gIGZyb21BZGRyZXNzOiBzdHJpbmc7XG4gIGxvZ01vY2tDcmVkZW50aWFscz86IGJvb2xlYW47XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbmV4cG9ydCB0eXBlIFBsdWdpbiA9IChjb25maWc6IENvbmZpZykgPT4gUHJvbWlzZTxDb25maWc+IHwgQ29uZmlnO1xuXG50eXBlIEdlbmVyYXRlUHJldmlld1VSTE9wdGlvbnMgPSB7XG4gIGxvY2FsZTogc3RyaW5nO1xuICB0b2tlbjogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgR2VuZXJhdGVQcmV2aWV3VVJMID0gKFxuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICBvcHRpb25zOiBHZW5lcmF0ZVByZXZpZXdVUkxPcHRpb25zXG4pID0+IFByb21pc2U8c3RyaW5nIHwgbnVsbD4gfCBzdHJpbmcgfCBudWxsO1xuXG5leHBvcnQgdHlwZSBFbWFpbFRyYW5zcG9ydCA9IEVtYWlsICYge1xuICB0cmFuc3BvcnQ6IFRyYW5zcG9ydGVyO1xuICB0cmFuc3BvcnRPcHRpb25zPzogU01UUENvbm5lY3Rpb24uT3B0aW9ucztcbn07XG5cbmV4cG9ydCB0eXBlIEVtYWlsVHJhbnNwb3J0T3B0aW9ucyA9IEVtYWlsICYge1xuICB0cmFuc3BvcnQ/OiBUcmFuc3BvcnRlcjtcbiAgdHJhbnNwb3J0T3B0aW9uczogU01UUENvbm5lY3Rpb24uT3B0aW9ucztcbn07XG5cbmV4cG9ydCB0eXBlIEVtYWlsT3B0aW9ucyA9IEVtYWlsVHJhbnNwb3J0IHwgRW1haWxUcmFuc3BvcnRPcHRpb25zIHwgRW1haWw7XG5cbi8qKlxuICogdHlwZSBndWFyZCBmb3IgRW1haWxPcHRpb25zXG4gKiBAcGFyYW0gZW1haWxDb25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1RyYW5zcG9ydChcbiAgZW1haWxDb25maWc6IEVtYWlsT3B0aW9ucyxcbik6IGVtYWlsQ29uZmlnIGlzIEVtYWlsVHJhbnNwb3J0IHtcbiAgcmV0dXJuIChlbWFpbENvbmZpZyBhcyBFbWFpbFRyYW5zcG9ydCkudHJhbnNwb3J0ICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogdHlwZSBndWFyZCBmb3IgRW1haWxPcHRpb25zXG4gKiBAcGFyYW0gZW1haWxDb25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc1RyYW5zcG9ydE9wdGlvbnMoXG4gIGVtYWlsQ29uZmlnOiBFbWFpbE9wdGlvbnMsXG4pOiBlbWFpbENvbmZpZyBpcyBFbWFpbFRyYW5zcG9ydE9wdGlvbnMge1xuICByZXR1cm4gKGVtYWlsQ29uZmlnIGFzIEVtYWlsVHJhbnNwb3J0T3B0aW9ucykudHJhbnNwb3J0T3B0aW9ucyAhPT0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgdHlwZSBHcmFwaFFMRXh0ZW5zaW9uID0gKFxuICBncmFwaFFMOiB0eXBlb2YgR3JhcGhRTCxcbiAgcGF5bG9hZDogUGF5bG9hZFxuKSA9PiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuZXhwb3J0IHR5cGUgSW5pdE9wdGlvbnMgPSB7XG4gIC8qKiBFeHByZXNzIGFwcCBmb3IgUGF5bG9hZCB0byB1c2UgKi9cbiAgZXhwcmVzcz86IEV4cHJlc3M7XG5cbiAgLyoqIFNlY3VyZSBzdHJpbmcgdGhhdCBQYXlsb2FkIHdpbGwgdXNlIGZvciBhbnkgZW5jcnlwdGlvbiB3b3JrZmxvd3MgKi9cbiAgc2VjcmV0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyYXRpb24gZm9yIFBheWxvYWQncyBlbWFpbCBmdW5jdGlvbmFsaXR5XG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2VtYWlsL292ZXJ2aWV3XG4gICAqL1xuICBlbWFpbD86IEVtYWlsT3B0aW9ucztcblxuICAvKipcbiAgICogTWFrZSBQYXlsb2FkIHN0YXJ0IGluIGxvY2FsLW9ubHkgbW9kZS5cbiAgICpcbiAgICogVGhpcyB3aWxsIGJ5cGFzcyBzZXR0aW5nIHVwIFJFU1QgYW5kIEdyYXBoUUwgQVBJIHJvdXRlcy5cbiAgICogRXhwcmVzcyB3aWxsIG5vdCBiZSByZXF1aXJlZCBpZiBzZXQgdG8gYHRydWVgLlxuICAgKi9cbiAgbG9jYWw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGltbWVkaWF0ZWx5IGZvbGxvd2luZyBzdGFydHVwIHRoYXQgcmVjZWl2ZXMgdGhlIFBheWxvYWQgaW5zdGFuY2UgYXMgaXQncyBvbmx5IGFyZ3VtZW50LlxuICAgKi9cbiAgb25Jbml0PzogKHBheWxvYWQ6IFBheWxvYWQpID0+IFByb21pc2U8dm9pZD4gfCB2b2lkO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IG9wdGlvbnMgZm9yIHRoZSBidWlsdC1pbiBQaW5vIGxvZ2dlciB0aGF0IFBheWxvYWQgdXNlcyBmb3IgaW50ZXJuYWwgbG9nZ2luZy5cbiAgICpcbiAgICogU2VlIFBpbm8gRG9jcyBmb3Igb3B0aW9uczogaHR0cHM6Ly9nZXRwaW5vLmlvLyMvZG9jcy9hcGk/aWQ9b3B0aW9uc1xuICAgKi9cbiAgbG9nZ2VyT3B0aW9ucz86IExvZ2dlck9wdGlvbnM7XG4gIGxvZ2dlckRlc3RpbmF0aW9uPzogRGVzdGluYXRpb25TdHJlYW07XG5cbiAgLyoqXG4gICAqIFNvbWV0aW1lcywgd2l0aCB0aGUgbG9jYWwgQVBJLCB5b3UgbWlnaHQgbmVlZCB0byBwYXNzIGEgY29uZmlnIGZpbGUgZGlyZWN0bHksIGZvciBleGFtcGxlLCBzZXJ2ZXJsZXNzIG9uIFZlcmNlbFxuICAgKiBUaGUgcGFzc2VkIGNvbmZpZyBzaG91bGQgbWF0Y2ggdGhlIGNvbmZpZyBmaWxlLCBhbmQgaWYgaXQgZG9lc24ndCwgdGhlcmUgY291bGQgYmUgbWlzbWF0Y2hlcyBiZXR3ZWVuIHRoZSBhZG1pbiBVSVxuICAgKiBhbmQgdGhlIGJhY2tlbmQgZnVuY3Rpb25hbGl0eVxuICAgKi9cbiAgY29uZmlnPzogUHJvbWlzZTxTYW5pdGl6ZWRDb25maWc+O1xufTtcblxuLyoqXG4gKiBUaGlzIHJlc3VsdCBpcyBjYWxjdWxhdGVkIG9uIHRoZSBzZXJ2ZXJcbiAqIGFuZCB0aGVuIHNlbnQgdG8gdGhlIGNsaWVudCBhbGxvd2luZyB0aGUgZGFzaGJvYXJkIHRvIHNob3cgYWNjZXNzaWJsZSBkYXRhIGFuZCBhY3Rpb25zLlxuICpcbiAqIElmIHRoZSByZXN1bHQgaXMgYHRydWVgLCB0aGUgdXNlciBoYXMgYWNjZXNzLlxuICogSWYgdGhlIHJlc3VsdCBpcyBhbiBvYmplY3QsIGl0IGlzIGludGVycHJldGVkIGFzIGEgTW9uZ29EQiBxdWVyeS5cbiAqXG4gKiBAZXhhbXBsZSBgeyBjcmVhdGVkQnk6IHsgZXF1YWxzOiBpZCB9IH1gXG4gKlxuICogQGV4YW1wbGUgYHsgdGVuYW50OiB7IGluOiB0ZW5hbnRJZHMgfSB9YFxuICpcbiAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2FjY2Vzcy1jb250cm9sL292ZXJ2aWV3XG4gKi9cbmV4cG9ydCB0eXBlIEFjY2Vzc1Jlc3VsdCA9IGJvb2xlYW4gfCBXaGVyZTtcblxuZXhwb3J0IHR5cGUgQWNjZXNzQXJnczxUID0gYW55LCBVID0gYW55PiA9IHtcbiAgLyoqIFRoZSBvcmlnaW5hbCByZXF1ZXN0IHRoYXQgcmVxdWlyZXMgYW4gYWNjZXNzIGNoZWNrICovXG4gIHJlcTogUGF5bG9hZFJlcXVlc3Q8VT47XG4gIC8qKiBJRCBvZiB0aGUgcmVzb3VyY2UgYmVpbmcgYWNjZXNzZWQgKi9cbiAgaWQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgcmVsZXZhbnQgcmVzb3VyY2UgdGhhdCBpcyBiZWluZyBhY2Nlc3NlZC5cbiAgICpcbiAgICogYGRhdGFgIGlzIG51bGwgd2hlbiBhIGxpc3QgaXMgcmVxdWVzdGVkXG4gICAqL1xuICBkYXRhPzogVDtcbn07XG5cbi8qKlxuICogQWNjZXNzIGZ1bmN0aW9uIHJ1bnMgb24gdGhlIHNlcnZlclxuICogYW5kIGlzIHNlbnQgdG8gdGhlIGNsaWVudCBhbGxvd2luZyB0aGUgZGFzaGJvYXJkIHRvIHNob3cgYWNjZXNzaWJsZSBkYXRhIGFuZCBhY3Rpb25zLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2FjY2Vzcy1jb250cm9sL292ZXJ2aWV3XG4gKi9cbmV4cG9ydCB0eXBlIEFjY2VzczxUID0gYW55LCBVID0gYW55PiA9IChcbiAgYXJnczogQWNjZXNzQXJnczxULCBVPlxuKSA9PiBBY2Nlc3NSZXN1bHQgfCBQcm9taXNlPEFjY2Vzc1Jlc3VsdD47XG5cbi8qKiBFcXVpdmFsZW50IHRvIGV4cHJlc3MgbWlkZGxld2FyZSwgYnV0IHdpdGggYW4gZW5oYW5jZWQgcmVxdWVzdCBvYmplY3QgKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bG9hZEhhbmRsZXIge1xuICAocmVxOiBQYXlsb2FkUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogdm9pZDtcbn1cblxuLyoqXG4gKiBEb2NzOiBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvcmVzdC1hcGkvb3ZlcnZpZXcjY3VzdG9tLWVuZHBvaW50c1xuICovXG5leHBvcnQgdHlwZSBFbmRwb2ludCA9IHtcbiAgLyoqXG4gICAqIFBhdHRlcm4gdGhhdCBzaG91bGQgbWF0Y2ggdGhlIHBhdGggb2YgdGhlIGluY29taW5nIHJlcXVlc3RcbiAgICpcbiAgICogQ29tcGF0aWJsZSB3aXRoIHRoZSBFeHByZXNzIHJvdXRlclxuICAgKi9cbiAgcGF0aDogc3RyaW5nO1xuICAvKiogSFRUUCBtZXRob2QgKG9yIFwiYWxsXCIpICovXG4gIG1ldGhvZDpcbiAgfCAnZ2V0J1xuICB8ICdoZWFkJ1xuICB8ICdwb3N0J1xuICB8ICdwdXQnXG4gIHwgJ3BhdGNoJ1xuICB8ICdkZWxldGUnXG4gIHwgJ2Nvbm5lY3QnXG4gIHwgJ29wdGlvbnMnO1xuICAvKipcbiAgICogTWlkZGxld2FyZSB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIHBhdGgvbWV0aG9kIG1hdGNoZXNcbiAgICpcbiAgICogQ29tcGF0aWJsZSB3aXRoIEV4cHJlc3MgbWlkZGxld2FyZVxuICAgKi9cbiAgaGFuZGxlcjogUGF5bG9hZEhhbmRsZXIgfCBQYXlsb2FkSGFuZGxlcltdO1xuICAvKipcbiAgICogU2V0IHRvIGB0cnVlYCB0byBkaXNhYmxlIHRoZSBQYXlsb2FkIG1pZGRsZXdhcmUgZm9yIHRoaXMgZW5kcG9pbnRcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHJvb3Q/OiBib29sZWFuO1xuICAvKiogRXh0ZW5zaW9uIHBvaW50IHRvIGFkZCB5b3VyIGN1c3RvbSBkYXRhLiAqL1xuICBjdXN0b20/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xufTtcblxuZXhwb3J0IHR5cGUgQWRtaW5WaWV3ID0gUmVhY3QuQ29tcG9uZW50VHlwZTx7XG4gIHVzZXI6IFVzZXI7XG4gIGNhbkFjY2Vzc0FkbWluOiBib29sZWFuO1xufT47XG5cbmV4cG9ydCB0eXBlIEFkbWluUm91dGUgPSB7XG4gIENvbXBvbmVudDogQWRtaW5WaWV3O1xuICBwYXRoOiBzdHJpbmc7XG4gIC8qKiBXaGV0aGVyIHRoZSBwYXRoIHNob3VsZCBiZSBtYXRjaGVkIGV4YWN0bHkgb3IgYXMgYSBwcmVmaXggKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICBzdHJpY3Q/OiBib29sZWFuO1xuICBzZW5zaXRpdmU/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgTG9jYWxlID0ge1xuICAvKipcbiAgICogbGFiZWwgb2Ygc3VwcG9ydGVkIGxvY2FsZVxuICAgKiBAZXhhbXBsZSBcIkVuZ2xpc2hcIlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIHZhbHVlIG9mIHN1cHBvcnRlZCBsb2NhbGVcbiAgICogQGV4YW1wbGUgXCJlblwiXG4gICAqL1xuICBjb2RlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBpZiB0cnVlLCBkZWZhdWx0cyB0ZXh0QWxpZ21uZW50IG9uIHRleHQgZmllbGRzIHRvIFJUTFxuICAgKi9cbiAgcnRsPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIEJhc2VMb2NhbGl6YXRpb25Db25maWcgPSB7XG4gIC8qKlxuICAgKiBMb2NhbGUgZm9yIHVzZXJzIHRoYXQgaGF2ZSBub3QgZXhwcmVzc2VkIHRoZWlyIHByZWZlcmVuY2UgZm9yIGEgc3BlY2lmaWMgbG9jYWxlXG4gICAqIEBleGFtcGxlIGBcImVuXCJgXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlOiBzdHJpbmc7XG4gIC8qKiBTZXQgdG8gYHRydWVgIHRvIGxldCBtaXNzaW5nIHZhbHVlcyBpbiBsb2NhbGlzZWQgZmllbGRzIGZhbGwgYmFjayB0byB0aGUgdmFsdWVzIGluIGBkZWZhdWx0TG9jYWxlYCAqL1xuICBmYWxsYmFjaz86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBMb2NhbGl6YXRpb25Db25maWdXaXRoTm9MYWJlbHMgPSBQcmV0dGlmeTxcbiAgQmFzZUxvY2FsaXphdGlvbkNvbmZpZyAmIHtcbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIHN1cHBvcnRlZCBsb2NhbGVzXG4gICAgICogQGV4YW1wbGUgYFtcImVuXCIsIFwiZXNcIiwgXCJmclwiLCBcIm5sXCIsIFwiZGVcIiwgXCJqcFwiXWBcbiAgICAgKi9cbiAgICBsb2NhbGVzOiBzdHJpbmdbXTtcbiAgfVxuPjtcblxuZXhwb3J0IHR5cGUgTG9jYWxpemF0aW9uQ29uZmlnV2l0aExhYmVscyA9IFByZXR0aWZ5PFxuICBCYXNlTG9jYWxpemF0aW9uQ29uZmlnICYge1xuICAgIC8qKlxuICAgICAqIExpc3Qgb2Ygc3VwcG9ydGVkIGxvY2FsZXMgd2l0aCBsYWJlbHNcbiAgICAgKiBAZXhhbXBsZSB7XG4gICAgICogIGxhYmVsOiAnRW5nbGlzaCcsXG4gICAgICogIHZhbHVlOiAnZW4nLFxuICAgICAqICBydGw6IGZhbHNlXG4gICAgICogfVxuICAgICAqL1xuICAgIGxvY2FsZXM6IExvY2FsZVtdO1xuICB9XG4+O1xuXG5leHBvcnQgdHlwZSBTYW5pdGl6ZWRMb2NhbGl6YXRpb25Db25maWcgPSBQcmV0dGlmeTxcbkxvY2FsaXphdGlvbkNvbmZpZ1dpdGhMYWJlbHMgJiB7XG4gIC8qKlxuICAgKiBMaXN0IG9mIHN1cHBvcnRlZCBsb2NhbGVzXG4gICAqIEBleGFtcGxlIGBbXCJlblwiLCBcImVzXCIsIFwiZnJcIiwgXCJubFwiLCBcImRlXCIsIFwianBcIl1gXG4gICAqL1xuICBsb2NhbGVDb2Rlczogc3RyaW5nW107XG59XG4+O1xuXG4vKipcbiAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2NvbmZpZ3VyYXRpb24vbG9jYWxpemF0aW9uI2xvY2FsaXphdGlvblxuICovXG5leHBvcnQgdHlwZSBMb2NhbGl6YXRpb25Db25maWcgPSBQcmV0dGlmeTxcbiAgTG9jYWxpemF0aW9uQ29uZmlnV2l0aE5vTGFiZWxzIHwgTG9jYWxpemF0aW9uQ29uZmlnV2l0aExhYmVsc1xuPjtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjZW50cmFsIGNvbmZpZ3VyYXRpb25cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcGF5bG9hZGNtcy5jb20vZG9jcy9jb25maWd1cmF0aW9uL292ZXJ2aWV3XG4gKi9cbmV4cG9ydCB0eXBlIENvbmZpZyA9IHtcbiAgLyoqIENvbmZpZ3VyZSBhZG1pbiBkYXNoYm9hcmQgKi9cbiAgYWRtaW4/OiB7XG4gICAgLyoqIFRoZSBzbHVnIG9mIGEgQ29sbGVjdGlvbiB0aGF0IHlvdSB3YW50IGJlIHVzZWQgdG8gbG9nIGluIHRvIHRoZSBBZG1pbiBkYXNoYm9hcmQuICovXG4gICAgdXNlcj86IHN0cmluZztcbiAgICAvKiogQmFzZSBtZXRhIGRhdGEgdG8gdXNlIGZvciB0aGUgQWRtaW4gcGFuZWwuIEluY2x1ZGVkIHByb3BlcnRpZXMgYXJlIHRpdGxlU3VmZml4LCBvZ0ltYWdlLCBhbmQgZmF2aWNvbi4gKi9cbiAgICBtZXRhPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTdHJpbmcgdG8gYXBwZW5kIHRvIHRoZSA8dGl0bGU+IG9mIGFkbWluIHBhZ2VzXG4gICAgICAgKiBAZXhhbXBsZSBgXCIgLSBNeSBCcmFuZFwiYFxuICAgICAgICovXG4gICAgICB0aXRsZVN1ZmZpeD86IHN0cmluZztcbiAgICAgIC8qKlxuICAgICAgICogUHVibGljIHBhdGggdG8gYW4gaW1hZ2VcbiAgICAgICAqXG4gICAgICAgKiBUaGlzIGltYWdlIG1heSBiZSBkaXNwbGF5ZWQgYXMgcHJldmlldyB3aGVuIHRoZSBsaW5rIGlzIHNoYXJlZCBvbiBzb2NpYWwgbWVkaWFcbiAgICAgICAqL1xuICAgICAgb2dJbWFnZT86IHN0cmluZztcbiAgICAgIC8qKlxuICAgICAgICogUHVibGljIHBhdGggdG8gYW4gaWNvblxuICAgICAgICpcbiAgICAgICAqIFRoaXMgaW1hZ2UgbWF5IGJlIGRpc3BsYXllZCBpbiB0aGUgYnJvd3NlciBuZXh0IHRvIHRoZSB0aXRsZSBvZiB0aGUgcGFnZVxuICAgICAgICovXG4gICAgICBmYXZpY29uPzogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhbiBhYnNvbHV0ZSBwYXRoIGZvciB3aGVyZSB0byBzdG9yZSB0aGUgYnVpbHQgQWRtaW4gcGFuZWwgYnVuZGxlIHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IFwiL2J1aWxkXCJcbiAgICAgKiAqL1xuICAgIGJ1aWxkUGF0aD86IHN0cmluZ1xuICAgIC8qKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIGVudGlyZSBBZG1pbiBwYW5lbCB3aWxsIGJlIGRpc2FibGVkLiAqL1xuICAgIGRpc2FibGU/OiBib29sZWFuO1xuICAgIC8qKiBSZXBsYWNlIHRoZSBlbnRpcmV0eSBvZiB0aGUgaW5kZXguaHRtbCBmaWxlIHVzZWQgYnkgdGhlIEFkbWluIHBhbmVsLiBSZWZlcmVuY2UgdGhlIGJhc2UgaW5kZXguaHRtbCBmaWxlIHRvIGVuc3VyZSB5b3VyIHJlcGxhY2VtZW50IGhhcyB0aGUgYXBwcm9wcmlhdGUgSFRNTCBlbGVtZW50cy4gKi9cbiAgICBpbmRleEhUTUw/OiBzdHJpbmc7XG4gICAgLyoqIEFic29sdXRlIHBhdGggdG8gYSBzdHlsZXNoZWV0IHRoYXQgeW91IGNhbiB1c2UgdG8gb3ZlcnJpZGUgLyBjdXN0b21pemUgdGhlIEFkbWluIHBhbmVsIHN0eWxpbmcuICovXG4gICAgY3NzPzogc3RyaW5nO1xuICAgIC8qKiBHbG9iYWwgZGF0ZSBmb3JtYXQgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIGFsbCBkYXRlcyBpbiB0aGUgQWRtaW4gcGFuZWwuIEFueSB2YWxpZCBkYXRlLWZucyBmb3JtYXQgcGF0dGVybiBjYW4gYmUgdXNlZC4gKi9cbiAgICBkYXRlRm9ybWF0Pzogc3RyaW5nO1xuICAgIC8qKiBTZXQgYWNjb3VudCBwcm9maWxlIHBpY3R1cmUuIE9wdGlvbnM6IGdyYXZhdGFyLCBkZWZhdWx0IG9yIGEgY3VzdG9tIFJlYWN0IGNvbXBvbmVudC4gKi9cbiAgICBhdmF0YXI/OiAnZGVmYXVsdCcgfCAnZ3JhdmF0YXInIHwgUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xuICAgIC8qKiBUaGUgcm91dGUgZm9yIHRoZSBsb2dvdXQgcGFnZS4gKi9cbiAgICBsb2dvdXRSb3V0ZT86IHN0cmluZztcbiAgICAvKiogVGhlIHJvdXRlIHRoZSB1c2VyIHdpbGwgYmUgcmVkaXJlY3RlZCB0byBhZnRlciBiZWluZyBpbmFjdGl2ZSBmb3IgdG9vIGxvbmcuICovXG4gICAgaW5hY3Rpdml0eVJvdXRlPzogc3RyaW5nO1xuICAgIC8qKiBBdXRvbWF0aWNhbGx5IGxvZyBpbiBhcyBhIHVzZXIgd2hlbiB2aXNpdGluZyB0aGUgYWRtaW4gZGFzaGJvYXJkLiAqL1xuICAgIGF1dG9Mb2dpbj86IGZhbHNlIHwge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZW1haWwgYWRkcmVzcyBvZiB0aGUgdXNlciB0byBsb2dpbiBhc1xuICAgICAgICpcbiAgICAgICAqL1xuICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgIC8qKiBUaGUgcGFzc3dvcmQgb2YgdGhlIHVzZXIgdG8gbG9naW4gYXMgKi9cbiAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAvKipcbiAgICAgICAqIElmIHNldCB0byB0cnVlLCB0aGUgbG9naW4gY3JlZGVudGlhbHMgd2lsbCBiZSBwcmVmaWxsZWQgYnV0IHRoZSB1c2VyIHdpbGwgc3RpbGwgbmVlZCB0byBjbGljayB0aGUgbG9naW4gYnV0dG9uLlxuICAgICAgICpcbiAgICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICAqL1xuICAgICAgcHJlZmlsbE9ubHk/OiBib29sZWFuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgZXh0cmEgYW5kL29yIHJlcGxhY2UgYnVpbHQtaW4gY29tcG9uZW50cyB3aXRoIGN1c3RvbSBjb21wb25lbnRzXG4gICAgICpcbiAgICAgKiBAc2VlIGh0dHBzOi8vcGF5bG9hZGNtcy5jb20vZG9jcy9hZG1pbi9jb21wb25lbnRzXG4gICAgICovXG4gICAgY29tcG9uZW50cz86IHtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGN1c3RvbSByb3V0ZXMgaW4gdGhlIGFkbWluIGRhc2hib2FyZFxuICAgICAgICovXG4gICAgICByb3V0ZXM/OiBBZG1pblJvdXRlW107XG4gICAgICAvKipcbiAgICAgICAqIFdyYXAgdGhlIGFkbWluIGRhc2hib2FyZCBpbiBjdXN0b20gY29udGV4dCBwcm92aWRlcnNcbiAgICAgICAqL1xuICAgICAgcHJvdmlkZXJzPzogUmVhY3QuQ29tcG9uZW50VHlwZTx7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfT5bXTtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGN1c3RvbSBjb21wb25lbnRzIGJlZm9yZSB0aGUgY29sbGVjdGlvbiBvdmVydmlld1xuICAgICAgICovXG4gICAgICBiZWZvcmVEYXNoYm9hcmQ/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT5bXTtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGN1c3RvbSBjb21wb25lbnRzIGFmdGVyIHRoZSBjb2xsZWN0aW9uIG92ZXJ2aWV3XG4gICAgICAgKi9cbiAgICAgIGFmdGVyRGFzaGJvYXJkPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+W107XG4gICAgICAvKipcbiAgICAgICAqIEFkZCBjdXN0b20gY29tcG9uZW50cyBiZWZvcmUgdGhlIGVtYWlsL3Bhc3N3b3JkIGZpZWxkXG4gICAgICAgKi9cbiAgICAgIGJlZm9yZUxvZ2luPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+W107XG4gICAgICAvKipcbiAgICAgICAqIEFkZCBjdXN0b20gY29tcG9uZW50cyBhZnRlciB0aGUgZW1haWwvcGFzc3dvcmQgZmllbGRcbiAgICAgICAqL1xuICAgICAgYWZ0ZXJMb2dpbj86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PltdO1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgY3VzdG9tIGNvbXBvbmVudHMgYmVmb3JlIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG4gICAgICAgKi9cbiAgICAgIGJlZm9yZU5hdkxpbmtzPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+W107XG4gICAgICAvKipcbiAgICAgICAqIEFkZCBjdXN0b20gY29tcG9uZW50cyBhZnRlciB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICAgICAgICovXG4gICAgICBhZnRlck5hdkxpbmtzPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+W107XG4gICAgICAvKipcbiAgICAgICAqIFJlcGxhY2UgdGhlIG5hdmlnYXRpb24gd2l0aCBhIGN1c3RvbSBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgTmF2PzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xuICAgICAgLyoqIFJlcGxhY2UgbG9nb3V0IHJlbGF0ZWQgY29tcG9uZW50cyAqL1xuICAgICAgbG9nb3V0Pzoge1xuICAgICAgICAvKiogUmVwbGFjZSB0aGUgbG9nb3V0IGJ1dHRvbiAgKi9cbiAgICAgICAgQnV0dG9uPzogUmVhY3QuQ29tcG9uZW50VHlwZTxhbnk+O1xuICAgICAgfTtcbiAgICAgIC8qKiBSZXBsYWNlIGdyYXBoaWNhbCBjb21wb25lbnRzICovXG4gICAgICBncmFwaGljcz86IHtcbiAgICAgICAgLyoqIFJlcGxhY2UgdGhlIGljb24gaW4gdGhlIG5hdmlnYXRpb24gKi9cbiAgICAgICAgSWNvbj86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PjtcbiAgICAgICAgLyoqIFJlcGxhY2UgdGhlIGxvZ28gb24gdGhlIGxvZ2luIHBhZ2UgKi9cbiAgICAgICAgTG9nbz86IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PjtcbiAgICAgIH07XG4gICAgICAvKiBSZXBsYWNlIGNvbXBsZXRlIHBhZ2VzICovXG4gICAgICB2aWV3cz86IHtcbiAgICAgICAgLyoqIFJlcGxhY2UgdGhlIGFjY291bnQgc2NyZWVuICovXG4gICAgICAgIEFjY291bnQ/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG4gICAgICAgIC8qKiBSZXBsYWNlIHRoZSBhZG1pbiBob21lcGFnZSAqL1xuICAgICAgICBEYXNoYm9hcmQ/OiBSZWFjdC5Db21wb25lbnRUeXBlPGFueT47XG4gICAgICB9O1xuICAgIH07XG4gICAgLyoqIEN1c3RvbWl6ZSB0aGUgV2VicGFjayBjb25maWcgdGhhdCdzIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIEFkbWluIHBhbmVsLiAqL1xuICAgIHdlYnBhY2s/OiAoY29uZmlnOiBDb25maWd1cmF0aW9uKSA9PiBDb25maWd1cmF0aW9uO1xuICAgIC8qKiBDdXN0b21pemUgdGhlIGJ1bmRsZXIgdXNlZCB0byBydW4geW91ciBhZG1pbiBwYW5lbC4gKi9cbiAgICBidW5kbGVyPzogUGF5bG9hZEJ1bmRsZXI7XG4gIH07XG4gIC8qKlxuICAgKiBNYW5hZ2UgdGhlIGRhdGFtb2RlbCBvZiB5b3VyIGFwcGxpY2F0aW9uXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2NvbmZpZ3VyYXRpb24vY29sbGVjdGlvbnMjY29sbGVjdGlvbi1jb25maWdzXG4gICAqL1xuICBjb2xsZWN0aW9ucz86IENvbGxlY3Rpb25Db25maWdbXTtcbiAgLyoqIEN1c3RvbSBSRVNUIGVuZHBvaW50cyAqL1xuICBlbmRwb2ludHM/OiBFbmRwb2ludFtdO1xuICAvKipcbiAgICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvY29uZmlndXJhdGlvbi9nbG9iYWxzI2dsb2JhbC1jb25maWdzXG4gICAqL1xuICBnbG9iYWxzPzogR2xvYmFsQ29uZmlnW107XG5cbiAgLyoqXG4gICAqIEVtYWlsIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy4gVGhpcyB2YWx1ZSBpcyBvdmVycmlkZGVuIGJ5IGBlbWFpbGAgaW4gUGF5bG9hZC5pbml0IGlmIHBhc3NlZC5cbiAgICpcbiAgICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvZW1haWwvb3ZlcnZpZXdcbiAgICovXG4gIGVtYWlsPzogRW1haWxPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBDb250cm9sIHRoZSBiZWhhdmlvdXIgb2YgdGhlIGFkbWluIGludGVybmF0aW9uYWxpc2F0aW9uLlxuICAgKlxuICAgKiBTZWUgaTE4bmV4dCBvcHRpb25zLlxuICAgKlxuICAgKiBAZGVmYXVsdFxuICAgKiB7XG4gICAqICAgZmFsbGJhY2tMbmc6ICdlbicsXG4gICAqICAgZGVidWc6IGZhbHNlLFxuICAgKiAgIHN1cHBvcnRlZExuZ3M6IE9iamVjdC5rZXlzKHRyYW5zbGF0aW9ucyksXG4gICAqICAgcmVzb3VyY2VzOiB0cmFuc2xhdGlvbnMsXG4gICAqIH1cbiAgICovXG4gIGkxOG4/OiBpMThuSW5pdE9wdGlvbnM7XG4gIC8qKlxuICAgKiBEZWZpbmUgdGhlIGFic29sdXRlIFVSTCBvZiB5b3VyIGFwcCBpbmNsdWRpbmcgdGhlIHByb3RvY29sLCBmb3IgZXhhbXBsZSBgaHR0cHM6Ly9leGFtcGxlLm9yZ2AuXG4gICAqIE5vIHBhdGhzIGFsbG93ZWQsIG9ubHkgcHJvdG9jb2wsIGRvbWFpbiBhbmQgKG9wdGlvbmFsbHkpIHBvcnQuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2NvbmZpZ3VyYXRpb24vb3ZlcnZpZXcjb3B0aW9uc1xuICAgKi9cbiAgc2VydmVyVVJMPzogc3RyaW5nO1xuICAvKipcbiAgICogUHJlZml4IGEgc3RyaW5nIHRvIGFsbCBjb29raWVzIHRoYXQgUGF5bG9hZCBzZXRzLlxuICAgKlxuICAgKiBAZGVmYXVsdCBcInBheWxvYWRcIlxuICAgKi9cbiAgY29va2llUHJlZml4Pzogc3RyaW5nO1xuICAvKiogQSB3aGl0ZWxpc3QgYXJyYXkgb2YgVVJMcyB0byBhbGxvdyBQYXlsb2FkIGNvb2tpZXMgdG8gYmUgYWNjZXB0ZWQgZnJvbSBhcyBhIGZvcm0gb2YgQ1NSRiBwcm90ZWN0aW9uLiAqL1xuICBjc3JmPzogc3RyaW5nW107XG4gIC8qKiBFaXRoZXIgYSB3aGl0ZWxpc3QgYXJyYXkgb2YgVVJMUyB0byBhbGxvdyBDT1JTIHJlcXVlc3RzIGZyb20sIG9yIGEgd2lsZGNhcmQgc3RyaW5nICgnKicpIHRvIGFjY2VwdCBpbmNvbWluZyByZXF1ZXN0cyBmcm9tIGFueSBkb21haW4uICovXG4gIGNvcnM/OiBzdHJpbmdbXSB8ICcqJztcbiAgLyoqIENvbnRyb2wgdGhlIHJvdXRpbmcgc3RydWN0dXJlIHRoYXQgUGF5bG9hZCBiaW5kcyBpdHNlbGYgdG8uICovXG4gIHJvdXRlcz86IHtcbiAgICAvKiogQGRlZmF1bHQgXCIvYXBpXCIgICovXG4gICAgYXBpPzogc3RyaW5nO1xuICAgIC8qKiBAZGVmYXVsdCBcIi9hZG1pblwiICovXG4gICAgYWRtaW4/OiBzdHJpbmc7XG4gICAgLyoqIEBkZWZhdWx0IFwiL2dyYXBocWxcIiAgKi9cbiAgICBncmFwaFFMPzogc3RyaW5nO1xuICAgIC8qKiBAZGVmYXVsdCBcIi9wbGF5Z3JvdW5kXCIgKi9cbiAgICBncmFwaFFMUGxheWdyb3VuZD86IHN0cmluZztcbiAgfTtcbiAgLyoqIENvbnRyb2wgaG93IHR5cGVzY3JpcHQgaW50ZXJmYWNlcyBhcmUgZ2VuZXJhdGVkIGZyb20geW91ciBjb2xsZWN0aW9ucy4gKi9cbiAgdHlwZXNjcmlwdD86IHtcbiAgICAvKiogRmlsZW5hbWUgdG8gd3JpdGUgdGhlIGdlbmVyYXRlZCB0eXBlcyB0byAqL1xuICAgIG91dHB1dEZpbGU/OiBzdHJpbmc7XG4gIH07XG4gIC8qKiBFbmFibGUgdG8gZXhwb3NlIG1vcmUgZGV0YWlsZWQgZXJyb3IgaW5mb3JtYXRpb24uICovXG4gIGRlYnVnPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEV4cHJlc3Mtc3BlY2lmaWMgbWlkZGxld2FyZSBvcHRpb25zIHN1Y2ggYXMgY29tcHJlc3Npb24gYW5kIEpTT04gcGFyc2luZy5cbiAgICpcbiAgICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvY29uZmlndXJhdGlvbi9leHByZXNzXG4gICAqL1xuICBleHByZXNzPzoge1xuICAgIC8qKiBDb250cm9sIHRoZSB3YXkgSlNPTiBpcyBwYXJzZWQgKi9cbiAgICBqc29uPzoge1xuICAgICAgLyoqIERlZmF1bHRzIHRvIDJNQiAgKi9cbiAgICAgIGxpbWl0PzogbnVtYmVyO1xuICAgIH07XG4gICAgLyoqIENvbnRyb2wgdGhlIHdheSByZXNwb25zZXMgYXJlIGNvbXByZXNzZWQgKi9cbiAgICBjb21wcmVzc2lvbj86IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHVua25vd247XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBleHByZXNzLm1pZGRsZXdhcmUgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uIFBsZWFzZSBtaWdyYXRlIHRvIGV4cHJlc3MucG9zdE1pZGRsZXdhcmUuXG4gICAgICovXG4gICAgbWlkZGxld2FyZT86IGFueVtdO1xuICAgIHByZU1pZGRsZXdhcmU/OiBhbnlbXTtcbiAgICBwb3N0TWlkZGxld2FyZT86IGFueVtdO1xuICB9O1xuICAvKipcbiAgICogSWYgYSB1c2VyIGRvZXMgbm90IHNwZWNpZnkgYGRlcHRoYCB3aGlsZSByZXF1ZXN0aW5nIGEgcmVzb3VyY2UsIHRoaXMgZGVwdGggd2lsbCBiZSB1c2VkLlxuICAgKlxuICAgKiBAc2VlIGh0dHBzOi8vcGF5bG9hZGNtcy5jb20vZG9jcy9nZXR0aW5nLXN0YXJ0ZWQvY29uY2VwdHMjZGVwdGhcbiAgICpcbiAgICogQGRlZmF1bHQgMlxuICAgKi9cbiAgZGVmYXVsdERlcHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIG1heGltdW0gYWxsb3dlZCBkZXB0aCB0byBiZSBwZXJtaXR0ZWQgYXBwbGljYXRpb24td2lkZS4gVGhpcyBzZXR0aW5nIGhlbHBzIHByZXZlbnQgYWdhaW5zdCBtYWxpY2lvdXMgcXVlcmllcy5cbiAgICpcbiAgICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvZ2V0dGluZy1zdGFydGVkL2NvbmNlcHRzI2RlcHRoXG4gICAqXG4gICAqIEBkZWZhdWx0IDEwXG4gICAqL1xuICBtYXhEZXB0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBtYXhpbXVtIGFsbG93ZWQgZGVwdGggdG8gYmUgcGVybWl0dGVkIGFwcGxpY2F0aW9uLXdpZGUuIFRoaXMgc2V0dGluZyBoZWxwcyBwcmV2ZW50IGFnYWluc3QgbWFsaWNpb3VzIHF1ZXJpZXMuXG4gICAqXG4gICAqIEBkZWZhdWx0IDQwMDAwXG4gICAqL1xuICBkZWZhdWx0TWF4VGV4dExlbmd0aD86IG51bWJlcjtcbiAgLyoqIEF1dG9tYXRpY2FsbHkgaW5kZXggYWxsIHNvcnRhYmxlIHRvcC1sZXZlbCBmaWVsZHMgaW4gdGhlIGRhdGFiYXNlIHRvIGltcHJvdmUgc29ydCBwZXJmb3JtYW5jZSBhbmQgYWRkIGRhdGFiYXNlIGNvbXBhdGliaWxpdHkgZm9yIEF6dXJlIENvc21vcyBhbmQgc2ltaWxhci4gKi9cbiAgaW5kZXhTb3J0YWJsZUZpZWxkcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBMaW1pdCBoZWF2eSB1c2FnZVxuICAgKlxuICAgKiBAZGVmYXVsdFxuICAgKiB7XG4gICAqICAgd2luZG93OiAxNSAqIDYwICogMTAwLCAvLyAxLjUgbWludXRlcyxcbiAgICogICBtYXg6IDUwMCxcbiAgICogfVxuICAgKi9cbiAgcmF0ZUxpbWl0Pzoge1xuICAgIHdpbmRvdz86IG51bWJlcjtcbiAgICBtYXg/OiBudW1iZXI7XG4gICAgdHJ1c3RQcm94eT86IGJvb2xlYW47XG4gICAgc2tpcD86IChyZXE6IFBheWxvYWRSZXF1ZXN0KSA9PiBib29sZWFuO1xuICB9O1xuICAvKipcbiAgICogQ3VzdG9taXplIHRoZSBoYW5kbGluZyBvZiBpbmNvbWluZyBmaWxlIHVwbG9hZHMgZm9yIGNvbGxlY3Rpb25zIHRoYXQgaGF2ZSB1cGxvYWRzIGVuYWJsZWQuXG4gICAqL1xuICB1cGxvYWQ/OiBFeHByZXNzRmlsZVVwbG9hZE9wdGlvbnM7XG4gIC8qKlxuICAgKiBUcmFuc2xhdGUgeW91ciBjb250ZW50IHRvIGRpZmZlcmVudCBsYW5ndWFnZXMvbG9jYWxlcy5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2UgLy8gZGlzYWJsZSBsb2NhbGl6YXRpb25cbiAgICovXG4gIGxvY2FsaXphdGlvbj86IExvY2FsaXphdGlvbkNvbmZpZyB8IGZhbHNlO1xuICAvKipcbiAgICogTWFuYWdlIHRoZSBHcmFwaFFMIEFQSVxuICAgKlxuICAgKiBZb3UgY2FuIGFkZCB5b3VyIG93biBHcmFwaFFMIHF1ZXJpZXMgYW5kIG11dGF0aW9ucyB0byBQYXlsb2FkLCBtYWtpbmcgdXNlIG9mIGFsbCB0aGUgdHlwZXMgdGhhdCBQYXlsb2FkIGhhcyBkZWZpbmVkIGZvciB5b3UuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2FjY2Vzcy1jb250cm9sL292ZXJ2aWV3XG4gICAqL1xuICBncmFwaFFMPzoge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBrZXlzIHRvIGN1c3RvbSBHcmFwaFFMIG11dGF0aW9uc1xuICAgICAqXG4gICAgICogQHNlZSBodHRwczovL3BheWxvYWRjbXMuY29tL2RvY3MvYWNjZXNzLWNvbnRyb2wvb3ZlcnZpZXdcbiAgICAgKi9cbiAgICBtdXRhdGlvbnM/OiBHcmFwaFFMRXh0ZW5zaW9uO1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBrZXlzIHRvIGN1c3RvbSBHcmFwaFFMIHF1ZXJpZXNcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2FjY2Vzcy1jb250cm9sL292ZXJ2aWV3XG4gICAgICovXG4gICAgcXVlcmllcz86IEdyYXBoUUxFeHRlbnNpb247XG4gICAgbWF4Q29tcGxleGl0eT86IG51bWJlcjtcbiAgICBkaXNhYmxlUGxheWdyb3VuZEluUHJvZHVjdGlvbj86IGJvb2xlYW47XG4gICAgZGlzYWJsZT86IGJvb2xlYW47XG4gICAgc2NoZW1hT3V0cHV0RmlsZT86IHN0cmluZztcbiAgfTtcbiAgLyoqXG4gICAqIFJlcGxhY2UgdGhlIGJ1aWx0LWluIGNvbXBvbmVudHMgd2l0aCBjdXN0b20gb25lc1xuICAgKi9cbiAgY29tcG9uZW50cz86IHsgW2tleTogc3RyaW5nXTogSlNYLkVsZW1lbnQgfCAoKCkgPT4gSlNYLkVsZW1lbnQpIH07XG4gIC8qKlxuICAgKiBUYXAgaW50byBQYXlsb2FkLXdpZGUgaG9va3MuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL2hvb2tzL292ZXJ2aWV3XG4gICAqL1xuICBob29rcz86IHtcbiAgICBhZnRlckVycm9yPzogQWZ0ZXJFcnJvckhvb2s7XG4gIH07XG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBQYXlsb2FkIHBsdWdpbnMuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9wYXlsb2FkY21zLmNvbS9kb2NzL3BsdWdpbnMvb3ZlcnZpZXdcbiAgICovXG4gIHBsdWdpbnM/OiBQbHVnaW5bXTtcbiAgLyoqIFNlbmQgYW5vbnltb3VzIHRlbGVtZXRyeSBkYXRhIGFib3V0IGdlbmVyYWwgdXNhZ2UuICovXG4gIHRlbGVtZXRyeT86IGJvb2xlYW47XG4gIC8qKiBBIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGltbWVkaWF0ZWx5IGZvbGxvd2luZyBzdGFydHVwIHRoYXQgcmVjZWl2ZXMgdGhlIFBheWxvYWQgaW5zdGFuY2UgYXMgaXRzIG9ubHkgYXJndW1lbnQuICovXG4gIG9uSW5pdD86IChwYXlsb2FkOiBQYXlsb2FkKSA9PiBQcm9taXNlPHZvaWQ+IHwgdm9pZDtcbiAgLyoqIEV4dGVuc2lvbiBwb2ludCB0byBhZGQgeW91ciBjdXN0b20gZGF0YS4gKi9cbiAgY3VzdG9tPzogUmVjb3JkPHN0cmluZywgYW55PjtcbiAgLyoqIFBhc3MgaW4gYSBkYXRhYmFzZSBhZGFwdGVyIGZvciB1c2Ugb24gdGhpcyBwcm9qZWN0LiAqL1xuICBkYjogKGFyZ3M6IHsgcGF5bG9hZDogUGF5bG9hZCB9KSA9PiBEYXRhYmFzZUFkYXB0ZXJcbn07XG5cbmV4cG9ydCB0eXBlIFNhbml0aXplZENvbmZpZyA9IE9taXQ8XG4gIERlZXBSZXF1aXJlZDxDb25maWc+LFxuICAnY29sbGVjdGlvbnMnIHwgJ2dsb2JhbHMnIHwgJ2VuZHBvaW50JyB8ICdsb2NhbGl6YXRpb24nXG4+ICYge1xuICBjb2xsZWN0aW9uczogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1tdO1xuICBnbG9iYWxzOiBTYW5pdGl6ZWRHbG9iYWxDb25maWdbXTtcbiAgZW5kcG9pbnRzOiBFbmRwb2ludFtdO1xuICBwYXRoczoge1xuICAgIGNvbmZpZ0Rpcjogc3RyaW5nO1xuICAgIGNvbmZpZzogc3RyaW5nO1xuICAgIHJhd0NvbmZpZzogc3RyaW5nO1xuICB9O1xuICBsb2NhbGl6YXRpb246IGZhbHNlIHwgU2FuaXRpemVkTG9jYWxpemF0aW9uQ29uZmlnO1xufTtcblxuZXhwb3J0IHR5cGUgRW50aXR5RGVzY3JpcHRpb24gPVxuICB8IHN0cmluZ1xuICB8IFJlY29yZDxzdHJpbmcsIHN0cmluZz5cbiAgfCAoKCkgPT4gc3RyaW5nKVxuICB8IFJlYWN0LkNvbXBvbmVudFR5cGU8YW55PjtcbiJdLCJuYW1lcyI6WyJoYXNUcmFuc3BvcnQiLCJoYXNUcmFuc3BvcnRPcHRpb25zIiwiZW1haWxDb25maWciLCJ0cmFuc3BvcnQiLCJ1bmRlZmluZWQiLCJ0cmFuc3BvcnRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQTJEZ0JBLFlBQVk7ZUFBWkE7O0lBVUFDLG1CQUFtQjtlQUFuQkE7Ozs0REE5REU7Ozs7OztBQW9EWCxTQUFTRCxhQUNkRSxXQUF5QjtJQUV6QixPQUFPLEFBQUNBLFlBQStCQyxTQUFTLEtBQUtDO0FBQ3ZEO0FBTU8sU0FBU0gsb0JBQ2RDLFdBQXlCO0lBRXpCLE9BQU8sQUFBQ0EsWUFBc0NHLGdCQUFnQixLQUFLRDtBQUNyRSJ9