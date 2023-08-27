"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isValidID", {
    enumerable: true,
    get: function() {
        return isValidID;
    }
});
var _bsonobjectid = /*#__PURE__*/ _interop_require_default(require("bson-objectid"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var isValidID = function(value, type) {
    if (type === "ObjectID") {
        return _bsonobjectid.default.isValid(String(value));
    }
    return type === "text" && typeof value === "string" || type === "number" && typeof value === "number" && !Number.isNaN(value);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvaXNWYWxpZElELnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPYmplY3RJRCBmcm9tICdic29uLW9iamVjdGlkJztcblxuZXhwb3J0IGNvbnN0IGlzVmFsaWRJRCA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLCB0eXBlOiAndGV4dCcgfCAnbnVtYmVyJyB8ICdPYmplY3RJRCcpOiBib29sZWFuID0+IHtcbiAgaWYgKHR5cGUgPT09ICdPYmplY3RJRCcpIHtcbiAgICByZXR1cm4gT2JqZWN0SUQuaXNWYWxpZChTdHJpbmcodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gKHR5cGUgPT09ICd0ZXh0JyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuICAgIHx8ICh0eXBlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFOdW1iZXIuaXNOYU4odmFsdWUpKTtcbn07XG4iXSwibmFtZXMiOlsiaXNWYWxpZElEIiwidmFsdWUiLCJ0eXBlIiwiT2JqZWN0SUQiLCJpc1ZhbGlkIiwiU3RyaW5nIiwiTnVtYmVyIiwiaXNOYU4iXSwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzs7ZUFBQUE7OzttRUFGUTs7Ozs7O0FBRWQsSUFBTUEsWUFBWSxTQUFDQyxPQUF3QkM7SUFDaEQsSUFBSUEsU0FBUyxZQUFZO1FBQ3ZCLE9BQU9DLHFCQUFRLENBQUNDLE9BQU8sQ0FBQ0MsT0FBT0o7SUFDakM7SUFDQSxPQUFPLEFBQUNDLFNBQVMsVUFBVSxPQUFPRCxVQUFVLFlBQ3RDQyxTQUFTLFlBQVksT0FBT0QsVUFBVSxZQUFZLENBQUNLLE9BQU9DLEtBQUssQ0FBQ047QUFDeEUifQ==