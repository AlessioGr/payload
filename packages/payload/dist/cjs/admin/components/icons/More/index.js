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
            "icon icon--more",
            className
        ].filter(Boolean).join(" "),
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "16.3872",
        cy: "12.5",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "12.3872",
        cy: "12.5",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ _react.default.createElement("circle", {
        cx: "8.61279",
        cy: "12.5",
        r: "1",
        className: "fill"
    }));
};
var _default = DragHandle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2ljb25zL01vcmUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgRHJhZ0hhbmRsZTogUmVhY3QuRkM8eyBjbGFzc05hbWU/OiBzdHJpbmcgfT4gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPXtbXG4gICAgICAnaWNvbiBpY29uLS1tb3JlJyxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgdmlld0JveD1cIjAgMCAyNSAyNVwiXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gID5cbiAgICA8Y2lyY2xlXG4gICAgICBjeD1cIjE2LjM4NzJcIlxuICAgICAgY3k9XCIxMi41XCJcbiAgICAgIHI9XCIxXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpbGxcIlxuICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCIxMi4zODcyXCJcbiAgICAgIGN5PVwiMTIuNVwiXG4gICAgICByPVwiMVwiXG4gICAgICBjbGFzc05hbWU9XCJmaWxsXCJcbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiOC42MTI3OVwiXG4gICAgICBjeT1cIjEyLjVcIlxuICAgICAgcj1cIjFcIlxuICAgICAgY2xhc3NOYW1lPVwiZmlsbFwiXG4gICAgLz5cbiAgPC9zdmc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEcmFnSGFuZGxlO1xuIl0sIm5hbWVzIjpbIkRyYWdIYW5kbGUiLCJjbGFzc05hbWUiLCJzdmciLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInZpZXdCb3giLCJ4bWxucyIsImNpcmNsZSIsImN4IiwiY3kiLCJyIl0sIm1hcHBpbmdzIjoiOzs7OytCQWtDQTs7O2VBQUE7Ozs0REFsQ2tCO1FBRVg7Ozs7OztBQUVQLElBQU1BLGFBQStDO1FBQUdDLGtCQUFBQTt5QkFDdEQsNkJBQUNDO1FBQ0NELFdBQVc7WUFDVDtZQUNBQTtTQUNELENBQUNFLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO1FBQ3ZCQyxTQUFRO1FBQ1JDLE9BQU07cUJBRU4sNkJBQUNDO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7c0JBRVosNkJBQUNPO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7c0JBRVosNkJBQUNPO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7OztJQUtoQixXQUFlRCJ9