import React from "react";
import "./index.scss";
var DragHandle = function(param) {
    var className = param.className;
    return /*#__PURE__*/ React.createElement("svg", {
        className: [
            "icon icon--drag-handle",
            className
        ].filter(Boolean).join(" "),
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ React.createElement("circle", {
        cx: "10.468",
        cy: "14.5",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: "14.532",
        cy: "14.5",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: "10.468",
        cy: "11.35",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: "14.532",
        cy: "11.35",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: "10.468",
        cy: "8.3",
        r: "1",
        className: "fill"
    }), /*#__PURE__*/ React.createElement("circle", {
        cx: "14.532",
        cy: "8.3",
        r: "1",
        className: "fill"
    }));
};
export default DragHandle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2ljb25zL0RyYWcvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgRHJhZ0hhbmRsZTogUmVhY3QuRkM8eyBjbGFzc05hbWU/OiBzdHJpbmcgfT4gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPXtbXG4gICAgICAnaWNvbiBpY29uLS1kcmFnLWhhbmRsZScsXG4gICAgICBjbGFzc05hbWUsXG4gICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgIHZpZXdCb3g9XCIwIDAgMjUgMjVcIlxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICA+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCIxMC40NjhcIlxuICAgICAgY3k9XCIxNC41XCJcbiAgICAgIHI9XCIxXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpbGxcIlxuICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCIxNC41MzJcIlxuICAgICAgY3k9XCIxNC41XCJcbiAgICAgIHI9XCIxXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpbGxcIlxuICAgIC8+XG4gICAgPGNpcmNsZVxuICAgICAgY3g9XCIxMC40NjhcIlxuICAgICAgY3k9XCIxMS4zNVwiXG4gICAgICByPVwiMVwiXG4gICAgICBjbGFzc05hbWU9XCJmaWxsXCJcbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiMTQuNTMyXCJcbiAgICAgIGN5PVwiMTEuMzVcIlxuICAgICAgcj1cIjFcIlxuICAgICAgY2xhc3NOYW1lPVwiZmlsbFwiXG4gICAgLz5cbiAgICA8Y2lyY2xlXG4gICAgICBjeD1cIjEwLjQ2OFwiXG4gICAgICBjeT1cIjguM1wiXG4gICAgICByPVwiMVwiXG4gICAgICBjbGFzc05hbWU9XCJmaWxsXCJcbiAgICAvPlxuICAgIDxjaXJjbGVcbiAgICAgIGN4PVwiMTQuNTMyXCJcbiAgICAgIGN5PVwiOC4zXCJcbiAgICAgIHI9XCIxXCJcbiAgICAgIGNsYXNzTmFtZT1cImZpbGxcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0hhbmRsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRyYWdIYW5kbGUiLCJjbGFzc05hbWUiLCJzdmciLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInZpZXdCb3giLCJ4bWxucyIsImNpcmNsZSIsImN4IiwiY3kiLCJyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFFMUIsT0FBTyxlQUFlO0FBRXRCLElBQU1DLGFBQStDO1FBQUdDLGtCQUFBQTt5QkFDdEQsb0JBQUNDO1FBQ0NELFdBQVc7WUFDVDtZQUNBQTtTQUNELENBQUNFLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO1FBQ3ZCQyxTQUFRO1FBQ1JDLE9BQU07cUJBRU4sb0JBQUNDO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7c0JBRVosb0JBQUNPO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7c0JBRVosb0JBQUNPO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7c0JBRVosb0JBQUNPO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7c0JBRVosb0JBQUNPO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7c0JBRVosb0JBQUNPO1FBQ0NDLElBQUc7UUFDSEMsSUFBRztRQUNIQyxHQUFFO1FBQ0ZWLFdBQVU7OztBQUtoQixlQUFlRCxXQUFXIn0=