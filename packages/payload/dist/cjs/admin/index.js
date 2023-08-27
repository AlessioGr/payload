// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - need to do this because this file doesn't actually exist
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _client = require("react-dom/client");
var _Root = /*#__PURE__*/ _interop_require_default(require("./Root"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var container = document.getElementById("app");
var root = (0, _client.createRoot)(container); // createRoot(container!) if you use TypeScript
root.render(/*#__PURE__*/ _react.default.createElement(_Root.default, null));
// Needed for Hot Module Replacement
if ("hot" in module && typeof module.hot === "object" && "accept" in module.hot && typeof module.hot.accept === "function") {
    module.hot.accept();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZG1pbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLWlnbm9yZSAtIG5lZWQgdG8gZG8gdGhpcyBiZWNhdXNlIHRoaXMgZmlsZSBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9Sb290JztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTsgLy8gY3JlYXRlUm9vdChjb250YWluZXIhKSBpZiB5b3UgdXNlIFR5cGVTY3JpcHRcbnJvb3QucmVuZGVyKDxSb290IC8+KTtcblxuLy8gTmVlZGVkIGZvciBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZiAoJ2hvdCcgaW4gbW9kdWxlICYmIHR5cGVvZiBtb2R1bGUuaG90ID09PSAnb2JqZWN0JyAmJiAnYWNjZXB0JyBpbiBtb2R1bGUuaG90ICYmIHR5cGVvZiAobW9kdWxlLmhvdC5hY2NlcHQpID09PSAnZnVuY3Rpb24nKSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG4iXSwibmFtZXMiOlsiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIiwiUm9vdCIsIm1vZHVsZSIsImhvdCIsImFjY2VwdCJdLCJtYXBwaW5ncyI6IkFBQUEsNkRBQTZEO0FBQzdELHdFQUF3RTs7Ozs7NERBQ3REO3NCQUNTOzJEQUNWOzs7Ozs7QUFFakIsSUFBTUEsWUFBWUMsU0FBU0MsY0FBYyxDQUFDO0FBQzFDLElBQU1DLE9BQU9DLElBQUFBLGtCQUFVLEVBQUNKLFlBQVksK0NBQStDO0FBQ25GRyxLQUFLRSxNQUFNLGVBQUMsNkJBQUNDLGFBQUk7QUFFakIsb0NBQW9DO0FBQ3BDLElBQUksU0FBU0MsVUFBVSxPQUFPQSxPQUFPQyxHQUFHLEtBQUssWUFBWSxZQUFZRCxPQUFPQyxHQUFHLElBQUksT0FBUUQsT0FBT0MsR0FBRyxDQUFDQyxNQUFNLEtBQU0sWUFBWTtJQUM1SEYsT0FBT0MsR0FBRyxDQUFDQyxNQUFNO0FBQ25CIn0=