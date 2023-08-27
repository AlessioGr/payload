"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "componentSchema", {
    enumerable: true,
    get: function() {
        return componentSchema;
    }
});
var _joi = /*#__PURE__*/ _interop_require_default(require("joi"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var componentSchema = _joi.default.alternatives().try(_joi.default.object().unknown(), _joi.default.func());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvY29tcG9uZW50U2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBqb2kgZnJvbSAnam9pJztcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudFNjaGVtYSA9IGpvaS5hbHRlcm5hdGl2ZXMoKS50cnkoXG4gIGpvaS5vYmplY3QoKS51bmtub3duKCksXG4gIGpvaS5mdW5jKCksXG4pO1xuIl0sIm5hbWVzIjpbImNvbXBvbmVudFNjaGVtYSIsImpvaSIsImFsdGVybmF0aXZlcyIsInRyeSIsIm9iamVjdCIsInVua25vd24iLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7O2VBQUFBOzs7MERBRkc7Ozs7OztBQUVULElBQU1BLGtCQUFrQkMsWUFBRyxDQUFDQyxZQUFZLEdBQUdDLEdBQUcsQ0FDbkRGLFlBQUcsQ0FBQ0csTUFBTSxHQUFHQyxPQUFPLElBQ3BCSixZQUFHLENBQUNLLElBQUkifQ==