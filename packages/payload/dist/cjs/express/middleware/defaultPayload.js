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
var _setRequestContext = require("../setRequestContext");
function defaultPayload(req, res, next) {
    (0, _setRequestContext.setRequestContext)(req);
    next();
}
var _default = defaultPayload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leHByZXNzL21pZGRsZXdhcmUvZGVmYXVsdFBheWxvYWQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgc2V0UmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi9zZXRSZXF1ZXN0Q29udGV4dCc7XG5cbmZ1bmN0aW9uIGRlZmF1bHRQYXlsb2FkKHJlcTogUGF5bG9hZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICBzZXRSZXF1ZXN0Q29udGV4dChyZXEpO1xuICBuZXh0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRQYXlsb2FkO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRQYXlsb2FkIiwicmVxIiwicmVzIiwibmV4dCIsInNldFJlcXVlc3RDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7OytCQVNBOzs7ZUFBQTs7O2lDQVBrQztBQUVsQyxTQUFTQSxlQUFlQyxHQUFtQixFQUFFQyxHQUFhLEVBQUVDLElBQWtCO0lBQzVFQyxJQUFBQSxvQ0FBaUIsRUFBQ0g7SUFDbEJFO0FBQ0Y7SUFFQSxXQUFlSCJ9