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
function mountEndpoints(express, router, endpoints) {
    endpoints.forEach(function(endpoint) {
        if (!endpoint.root) {
            router[endpoint.method](endpoint.path, endpoint.handler);
        } else {
            express[endpoint.method](endpoint.path, endpoint.handler);
        }
    });
}
var _default = mountEndpoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL21vdW50RW5kcG9pbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4cHJlc3MsIFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgRW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuXG5mdW5jdGlvbiBtb3VudEVuZHBvaW50cyhleHByZXNzOiBFeHByZXNzLCByb3V0ZXI6IFJvdXRlciwgZW5kcG9pbnRzOiBFbmRwb2ludFtdKTogdm9pZCB7XG4gIGVuZHBvaW50cy5mb3JFYWNoKChlbmRwb2ludCkgPT4ge1xuICAgIGlmICghZW5kcG9pbnQucm9vdCkge1xuICAgICAgcm91dGVyW2VuZHBvaW50Lm1ldGhvZF0oZW5kcG9pbnQucGF0aCwgZW5kcG9pbnQuaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cHJlc3NbZW5kcG9pbnQubWV0aG9kXShlbmRwb2ludC5wYXRoLCBlbmRwb2ludC5oYW5kbGVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtb3VudEVuZHBvaW50cztcbiJdLCJuYW1lcyI6WyJtb3VudEVuZHBvaW50cyIsImV4cHJlc3MiLCJyb3V0ZXIiLCJlbmRwb2ludHMiLCJmb3JFYWNoIiwiZW5kcG9pbnQiLCJyb290IiwibWV0aG9kIiwicGF0aCIsImhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYUE7OztlQUFBOzs7QUFWQSxTQUFTQSxlQUFlQyxPQUFnQixFQUFFQyxNQUFjLEVBQUVDLFNBQXFCO0lBQzdFQSxVQUFVQyxPQUFPLENBQUMsU0FBQ0M7UUFDakIsSUFBSSxDQUFDQSxTQUFTQyxJQUFJLEVBQUU7WUFDbEJKLE1BQU0sQ0FBQ0csU0FBU0UsTUFBTSxDQUFDLENBQUNGLFNBQVNHLElBQUksRUFBRUgsU0FBU0ksT0FBTztRQUN6RCxPQUFPO1lBQ0xSLE9BQU8sQ0FBQ0ksU0FBU0UsTUFBTSxDQUFDLENBQUNGLFNBQVNHLElBQUksRUFBRUgsU0FBU0ksT0FBTztRQUMxRDtJQUNGO0FBQ0Y7SUFFQSxXQUFlVCJ9