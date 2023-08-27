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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _md5 = /*#__PURE__*/ _interop_require_default(require("md5"));
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _Auth = require("../../utilities/Auth");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Gravatar = function() {
    var user = (0, _Auth.useAuth)().user;
    var hash = (0, _md5.default)(user.email.trim().toLowerCase());
    var query = _qs.default.stringify({
        s: 50,
        r: "g",
        default: "mp"
    });
    return /*#__PURE__*/ _react.default.createElement("img", {
        className: "gravatar-account",
        style: {
            borderRadius: "50%"
        },
        src: "https://www.gravatar.com/avatar/".concat(hash, "?").concat(query),
        alt: "yas",
        width: 25,
        height: 25
    });
};
var _default = Gravatar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0FjY291bnQvR3JhdmF0YXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWQ1IGZyb20gJ21kNSc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJztcblxuY29uc3QgR3JhdmF0YXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcblxuICBjb25zdCBoYXNoID0gbWQ1KHVzZXIuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xuXG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcbiAgICBzOiA1MCxcbiAgICByOiAnZycsXG4gICAgZGVmYXVsdDogJ21wJyxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBjbGFzc05hbWU9XCJncmF2YXRhci1hY2NvdW50XCJcbiAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScgfX1cbiAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJHtoYXNofT8ke3F1ZXJ5fWB9XG4gICAgICBhbHQ9XCJ5YXNcIlxuICAgICAgd2lkdGg9ezI1fVxuICAgICAgaGVpZ2h0PXsyNX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhdmF0YXI7XG4iXSwibmFtZXMiOlsiR3JhdmF0YXIiLCJ1c2VyIiwidXNlQXV0aCIsImhhc2giLCJtZDUiLCJlbWFpbCIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInF1ZXJ5IiwicXMiLCJzdHJpbmdpZnkiLCJzIiwiciIsImRlZmF1bHQiLCJpbWciLCJjbGFzc05hbWUiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7OytCQTRCQTs7O2VBQUE7Ozs0REE1QmtCOzBEQUNGO3lEQUNEO29CQUNTOzs7Ozs7QUFFeEIsSUFBTUEsV0FBcUI7SUFDekIsSUFBTSxBQUFFQyxPQUFTQyxJQUFBQSxhQUFPLElBQWhCRDtJQUVSLElBQU1FLE9BQU9DLElBQUFBLFlBQUcsRUFBQ0gsS0FBS0ksS0FBSyxDQUFDQyxJQUFJLEdBQUdDLFdBQVc7SUFFOUMsSUFBTUMsUUFBUUMsV0FBRSxDQUFDQyxTQUFTLENBQUM7UUFDekJDLEdBQUc7UUFDSEMsR0FBRztRQUNIQyxTQUFTO0lBQ1g7SUFFQSxxQkFDRSw2QkFBQ0M7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQUVDLGNBQWM7UUFBTTtRQUM3QkMsS0FBSyxBQUFDLG1DQUEwQ1YsT0FBUkwsTUFBSyxLQUFTLE9BQU5LO1FBQ2hEVyxLQUFJO1FBQ0pDLE9BQU87UUFDUEMsUUFBUTs7QUFHZDtJQUVBLFdBQWVyQiJ9