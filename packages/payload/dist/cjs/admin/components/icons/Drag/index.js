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
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var DragHandle = function(param) {
    var className = param.className;
    return /*#__PURE__*/ _react.default.createElement("svg", {
        className: [
            "icon icon--drag-handle",
            className
        ].filter(Boolean).join(" "),
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "10.468",
        cy: "14.5",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "14.532",
        cy: "14.5",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "10.468",
        cy: "11.35",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "14.532",
        cy: "11.35",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "10.468",
        cy: "8.3",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "14.532",
        cy: "8.3",
        r: "1",
        className: "fill"
    }));
};
var _default = DragHandle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2ljb25zL0RyYWcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgRHJhZ0hhbmRsZTogUmVhY3QuRkM8eyBjbGFzc05hbWU/OiBzdHJpbmcgfT4gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPXtbXG4gICAgICAnaWNvbiBpY29uLS1kcmFnLWhhbmRsZScsXG4gICAgICBjbGFzc05hbWUsXG4gICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCIxMC40NjhcIlxuICAgICAgY3k9XCIxNC41XCJcbiAgICAgIHI9XCIxXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpbGxcIlxuICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCIxNC41MzJcIlxuICAgICAgY3k9XCIxNC41XCJcbiAgICAgIHI9XCIxXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpbGxcIlxuICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCIxMC40NjhcIlxuICAgICAgY3k9XCIxMS4zNVwiXG4gICAgICByPVwiMVwiXG4gICAgICBjbGFzc05hbWU9XCJmaWxsXCJcbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiMTQuNTMyXCJcbiAgICAgIGN5PVwiMTEuMzVcIlxuICAgICAgcj1cIjFcIlxuICAgICAgY2xhc3NOYW1lPVwiZmlsbFwiXG4gICAgLz5cbiAgICA8Y2lyY2xlXG4gICAgICBjeD1cIjEwLjQ2OFwiXG4gICAgICBjeT1cIjguM1wiXG4gICAgICByPVwiMVwiXG4gICAgICBjbGFzc05hbWU9XCJmaWxsXCJcbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiMTQuNTMyXCJcbiAgICAgIGN5PVwiOC4zXCJcbiAgICAgIHI9XCIxXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpbGxcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0hhbmRsZTtcbiJdLCJuYW1lcyI6WyJEcmFnSGFuZGxlIiwiY2xhc3NOYW1lIiwic3ZnIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJ2aWV3Qm94IiwieG1sbnMiLCJjaXJjbGUiLCJjeCIsImN5IiwiciJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFvREE7OztlQUFBOzs7NERBcERrQjtRQUVYOzs7Ozs7QUFFUCxJQUFNQSxhQUErQztRQUFHQyxrQkFBQUE7eUJBQ3RELDZCQUFDQztRQUNDRCxXQUFXO1lBQ1Q7WUFDQUE7U0FDRCxDQUFDRSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztRQUN2QkMsU0FBUTtRQUNSQyxPQUFNO3FCQUVOLDZCQUFDQztRQUNDQyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtRQUNGVixXQUFVO3NCQUVaLDZCQUFDTztRQUNDQyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtRQUNGVixXQUFVO3NCQUVaLDZCQUFDTztRQUNDQyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtRQUNGVixXQUFVO3NCQUVaLDZCQUFDTztRQUNDQyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtRQUNGVixXQUFVO3NCQUVaLDZCQUFDTztRQUNDQyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtRQUNGVixXQUFVO3NCQUVaLDZCQUFDTztRQUNDQyxJQUFHO1FBQ0hDLElBQUc7UUFDSEMsR0FBRTtRQUNGVixXQUFVOzs7SUFLaEIsV0FBZUQifQ==