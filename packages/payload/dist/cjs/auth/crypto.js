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
    encrypt: function() {
        return encrypt;
    },
    decrypt: function() {
        return decrypt;
    }
});
var _crypto = /*#__PURE__*/ _interop_require_default(require("crypto"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var algorithm = "aes-256-ctr";
function encrypt(text) {
    var iv = _crypto.default.randomBytes(16);
    var cipher = _crypto.default.createCipheriv(algorithm, this.secret, iv);
    var encrypted = Buffer.concat([
        cipher.update(text),
        cipher.final()
    ]);
    var ivString = iv.toString("hex");
    var encryptedString = encrypted.toString("hex");
    return "".concat(ivString).concat(encryptedString);
}
function decrypt(hash) {
    var iv = hash.slice(0, 32);
    var content = hash.slice(32);
    var decipher = _crypto.default.createDecipheriv(algorithm, this.secret, Buffer.from(iv, "hex"));
    var decrypted = Buffer.concat([
        decipher.update(Buffer.from(content, "hex")),
        decipher.final()
    ]);
    return decrypted.toString();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2NyeXB0by50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5cbmNvbnN0IGFsZ29yaXRobSA9ICdhZXMtMjU2LWN0cic7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNyeXB0KHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGl2ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KTtcbiAgY29uc3QgY2lwaGVyID0gY3J5cHRvLmNyZWF0ZUNpcGhlcml2KGFsZ29yaXRobSwgdGhpcy5zZWNyZXQsIGl2KTtcblxuICBjb25zdCBlbmNyeXB0ZWQgPSBCdWZmZXIuY29uY2F0KFtjaXBoZXIudXBkYXRlKHRleHQpLCBjaXBoZXIuZmluYWwoKV0pO1xuXG4gIGNvbnN0IGl2U3RyaW5nID0gaXYudG9TdHJpbmcoJ2hleCcpO1xuICBjb25zdCBlbmNyeXB0ZWRTdHJpbmcgPSBlbmNyeXB0ZWQudG9TdHJpbmcoJ2hleCcpO1xuXG4gIHJldHVybiBgJHtpdlN0cmluZ30ke2VuY3J5cHRlZFN0cmluZ31gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjcnlwdChoYXNoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpdiA9IGhhc2guc2xpY2UoMCwgMzIpO1xuICBjb25zdCBjb250ZW50ID0gaGFzaC5zbGljZSgzMik7XG5cbiAgY29uc3QgZGVjaXBoZXIgPSBjcnlwdG8uY3JlYXRlRGVjaXBoZXJpdihhbGdvcml0aG0sIHRoaXMuc2VjcmV0LCBCdWZmZXIuZnJvbShpdiwgJ2hleCcpKTtcblxuICBjb25zdCBkZWNyeXB0ZWQgPSBCdWZmZXIuY29uY2F0KFtkZWNpcGhlci51cGRhdGUoQnVmZmVyLmZyb20oY29udGVudCwgJ2hleCcpKSwgZGVjaXBoZXIuZmluYWwoKV0pO1xuXG4gIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoKTtcbn1cbiJdLCJuYW1lcyI6WyJlbmNyeXB0IiwiZGVjcnlwdCIsImFsZ29yaXRobSIsInRleHQiLCJpdiIsImNyeXB0byIsInJhbmRvbUJ5dGVzIiwiY2lwaGVyIiwiY3JlYXRlQ2lwaGVyaXYiLCJzZWNyZXQiLCJlbmNyeXB0ZWQiLCJCdWZmZXIiLCJjb25jYXQiLCJ1cGRhdGUiLCJmaW5hbCIsIml2U3RyaW5nIiwidG9TdHJpbmciLCJlbmNyeXB0ZWRTdHJpbmciLCJoYXNoIiwic2xpY2UiLCJjb250ZW50IiwiZGVjaXBoZXIiLCJjcmVhdGVEZWNpcGhlcml2IiwiZnJvbSIsImRlY3J5cHRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJZ0JBLE9BQU87ZUFBUEE7O0lBWUFDLE9BQU87ZUFBUEE7Ozs2REFoQkc7Ozs7OztBQUVuQixJQUFNQyxZQUFZO0FBRVgsU0FBU0YsUUFBUUcsSUFBWTtJQUNsQyxJQUFNQyxLQUFLQyxlQUFNLENBQUNDLFdBQVcsQ0FBQztJQUM5QixJQUFNQyxTQUFTRixlQUFNLENBQUNHLGNBQWMsQ0FBQ04sV0FBVyxJQUFJLENBQUNPLE1BQU0sRUFBRUw7SUFFN0QsSUFBTU0sWUFBWUMsT0FBT0MsTUFBTSxDQUFDO1FBQUNMLE9BQU9NLE1BQU0sQ0FBQ1Y7UUFBT0ksT0FBT08sS0FBSztLQUFHO0lBRXJFLElBQU1DLFdBQVdYLEdBQUdZLFFBQVEsQ0FBQztJQUM3QixJQUFNQyxrQkFBa0JQLFVBQVVNLFFBQVEsQ0FBQztJQUUzQyxPQUFPLEFBQUMsR0FBYUMsT0FBWEYsVUFBMkIsT0FBaEJFO0FBQ3ZCO0FBRU8sU0FBU2hCLFFBQVFpQixJQUFZO0lBQ2xDLElBQU1kLEtBQUtjLEtBQUtDLEtBQUssQ0FBQyxHQUFHO0lBQ3pCLElBQU1DLFVBQVVGLEtBQUtDLEtBQUssQ0FBQztJQUUzQixJQUFNRSxXQUFXaEIsZUFBTSxDQUFDaUIsZ0JBQWdCLENBQUNwQixXQUFXLElBQUksQ0FBQ08sTUFBTSxFQUFFRSxPQUFPWSxJQUFJLENBQUNuQixJQUFJO0lBRWpGLElBQU1vQixZQUFZYixPQUFPQyxNQUFNLENBQUM7UUFBQ1MsU0FBU1IsTUFBTSxDQUFDRixPQUFPWSxJQUFJLENBQUNILFNBQVM7UUFBU0MsU0FBU1AsS0FBSztLQUFHO0lBRWhHLE9BQU9VLFVBQVVSLFFBQVE7QUFDM0IifQ==