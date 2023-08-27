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
var _types = require("../../fields/config/types");
var isFieldNullable = function(field, force) {
    var hasReadAccessControl = field.access && field.access.read;
    var condition = field.admin && field.admin.condition;
    return !(force && (0, _types.fieldAffectsData)(field) && "required" in field && field.required && !field.localized && !condition && !hasReadAccessControl);
};
var _default = isFieldNullable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3NjaGVtYS9pc0ZpZWxkTnVsbGFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRBZmZlY3RpbmdEYXRhLCBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmNvbnN0IGlzRmllbGROdWxsYWJsZSA9IChmaWVsZDogRmllbGRBZmZlY3RpbmdEYXRhLCBmb3JjZTogYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBoYXNSZWFkQWNjZXNzQ29udHJvbCA9IGZpZWxkLmFjY2VzcyAmJiBmaWVsZC5hY2Nlc3MucmVhZDtcbiAgY29uc3QgY29uZGl0aW9uID0gZmllbGQuYWRtaW4gJiYgZmllbGQuYWRtaW4uY29uZGl0aW9uO1xuICByZXR1cm4gIShmb3JjZSAmJiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiAncmVxdWlyZWQnIGluIGZpZWxkICYmIGZpZWxkLnJlcXVpcmVkICYmICFmaWVsZC5sb2NhbGl6ZWQgJiYgIWNvbmRpdGlvbiAmJiAhaGFzUmVhZEFjY2Vzc0NvbnRyb2wpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNGaWVsZE51bGxhYmxlO1xuIl0sIm5hbWVzIjpbImlzRmllbGROdWxsYWJsZSIsImZpZWxkIiwiZm9yY2UiLCJoYXNSZWFkQWNjZXNzQ29udHJvbCIsImFjY2VzcyIsInJlYWQiLCJjb25kaXRpb24iLCJhZG1pbiIsImZpZWxkQWZmZWN0c0RhdGEiLCJyZXF1aXJlZCIsImxvY2FsaXplZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFRQTs7O2VBQUE7OztxQkFScUQ7QUFFckQsSUFBTUEsa0JBQWtCLFNBQUNDLE9BQTJCQztJQUNsRCxJQUFNQyx1QkFBdUJGLE1BQU1HLE1BQU0sSUFBSUgsTUFBTUcsTUFBTSxDQUFDQyxJQUFJO0lBQzlELElBQU1DLFlBQVlMLE1BQU1NLEtBQUssSUFBSU4sTUFBTU0sS0FBSyxDQUFDRCxTQUFTO0lBQ3RELE9BQU8sQ0FBRUosQ0FBQUEsU0FBU00sSUFBQUEsdUJBQWdCLEVBQUNQLFVBQVUsY0FBY0EsU0FBU0EsTUFBTVEsUUFBUSxJQUFJLENBQUNSLE1BQU1TLFNBQVMsSUFBSSxDQUFDSixhQUFhLENBQUNILG9CQUFtQjtBQUM5STtJQUVBLFdBQWVIIn0=