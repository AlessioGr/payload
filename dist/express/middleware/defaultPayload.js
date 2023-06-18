"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultRequest_1 = require("../defaultRequest");
function defaultPayload(req, res, next) {
    (0, defaultRequest_1.populateDefaultRequest)(req);
    next();
}
exports.default = defaultPayload;
//# sourceMappingURL=defaultPayload.js.map