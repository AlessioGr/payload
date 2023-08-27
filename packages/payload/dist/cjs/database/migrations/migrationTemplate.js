"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrationTemplate", {
    enumerable: true,
    get: function() {
        return migrationTemplate;
    }
});
var migrationTemplate = "\nimport payload, { Payload } from 'payload';\n\nexport async function up(payload: Payload): Promise<void> {\n  // Migration code\n};\n\nexport async function down(payload: Payload): Promise<void> {\n  // Migration code\n};\n";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGlvblRlbXBsYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBtaWdyYXRpb25UZW1wbGF0ZSA9IGBcbmltcG9ydCBwYXlsb2FkLCB7IFBheWxvYWQgfSBmcm9tICdwYXlsb2FkJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwKHBheWxvYWQ6IFBheWxvYWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gTWlncmF0aW9uIGNvZGVcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3duKHBheWxvYWQ6IFBheWxvYWQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gTWlncmF0aW9uIGNvZGVcbn07XG5gO1xuIl0sIm5hbWVzIjpbIm1pZ3JhdGlvblRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7O2VBQUFBOzs7QUFBTixJQUFNQSxvQkFBcUIifQ==