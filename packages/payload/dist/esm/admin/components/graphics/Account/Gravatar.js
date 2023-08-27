import React from "react";
import md5 from "md5";
import qs from "qs";
import { useAuth } from "../../utilities/Auth";
var Gravatar = function() {
    var user = useAuth().user;
    var hash = md5(user.email.trim().toLowerCase());
    var query = qs.stringify({
        s: 50,
        r: "g",
        default: "mp"
    });
    return /*#__PURE__*/ React.createElement("img", {
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
export default Gravatar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0FjY291bnQvR3JhdmF0YXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWQ1IGZyb20gJ21kNSc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9BdXRoJztcblxuY29uc3QgR3JhdmF0YXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcblxuICBjb25zdCBoYXNoID0gbWQ1KHVzZXIuZW1haWwudHJpbSgpLnRvTG93ZXJDYXNlKCkpO1xuXG4gIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcbiAgICBzOiA1MCxcbiAgICByOiAnZycsXG4gICAgZGVmYXVsdDogJ21wJyxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW1nXG4gICAgICBjbGFzc05hbWU9XCJncmF2YXRhci1hY2NvdW50XCJcbiAgICAgIHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzUwJScgfX1cbiAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIvJHtoYXNofT8ke3F1ZXJ5fWB9XG4gICAgICBhbHQ9XCJ5YXNcIlxuICAgICAgd2lkdGg9ezI1fVxuICAgICAgaGVpZ2h0PXsyNX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhdmF0YXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZDUiLCJxcyIsInVzZUF1dGgiLCJHcmF2YXRhciIsInVzZXIiLCJoYXNoIiwiZW1haWwiLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJxdWVyeSIsInN0cmluZ2lmeSIsInMiLCJyIiwiZGVmYXVsdCIsImltZyIsImNsYXNzTmFtZSIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixPQUFPQyxTQUFTLE1BQU07QUFDdEIsT0FBT0MsUUFBUSxLQUFLO0FBQ3BCLFNBQVNDLE9BQU8sUUFBUSx1QkFBdUI7QUFFL0MsSUFBTUMsV0FBcUI7SUFDekIsSUFBTSxBQUFFQyxPQUFTRixVQUFURTtJQUVSLElBQU1DLE9BQU9MLElBQUlJLEtBQUtFLEtBQUssQ0FBQ0MsSUFBSSxHQUFHQyxXQUFXO0lBRTlDLElBQU1DLFFBQVFSLEdBQUdTLFNBQVMsQ0FBQztRQUN6QkMsR0FBRztRQUNIQyxHQUFHO1FBQ0hDLFNBQVM7SUFDWDtJQUVBLHFCQUNFLG9CQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLE9BQU87WUFBRUMsY0FBYztRQUFNO1FBQzdCQyxLQUFLLEFBQUMsbUNBQTBDVCxPQUFSSixNQUFLLEtBQVMsT0FBTkk7UUFDaERVLEtBQUk7UUFDSkMsT0FBTztRQUNQQyxRQUFROztBQUdkO0FBRUEsZUFBZWxCLFNBQVMifQ==