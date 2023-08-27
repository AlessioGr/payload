import React from "react";
import { useConfig } from "../../utilities/Config";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
var css = "\n  .graphic-icon path {\n    fill: var(--theme-elevation-1000);\n  }\n";
var PayloadIcon = function() {
    return /*#__PURE__*/ React.createElement("svg", {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg",
        className: "graphic-icon"
    }, /*#__PURE__*/ React.createElement("style", null, css), /*#__PURE__*/ React.createElement("path", {
        d: "M11.5293 0L23 6.90096V19.9978L14.3608 25V11.9032L2.88452 5.00777L11.5293 0Z"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M10.6559 24.2727V14.0518L2 19.0651L10.6559 24.2727Z"
    }));
};
var Icon = function() {
    var _useConfig = useConfig(), tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.graphics, _ref2 = tmp2 === void 0 ? {
        Icon: undefined
    } : tmp2, CustomIcon = _ref2.Icon;
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        CustomComponent: CustomIcon,
        DefaultComponent: PayloadIcon
    });
};
export default Icon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0ljb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5cbmNvbnN0IGNzcyA9IGBcbiAgLmdyYXBoaWMtaWNvbiBwYXRoIHtcbiAgICBmaWxsOiB2YXIoLS10aGVtZS1lbGV2YXRpb24tMTAwMCk7XG4gIH1cbmA7XG5cbmNvbnN0IFBheWxvYWRJY29uOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMjVcIlxuICAgIGhlaWdodD1cIjI1XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI1IDI1XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICBjbGFzc05hbWU9XCJncmFwaGljLWljb25cIlxuICA+XG4gICAgPHN0eWxlPlxuICAgICAge2Nzc31cbiAgICA8L3N0eWxlPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTExLjUyOTMgMEwyMyA2LjkwMDk2VjE5Ljk5NzhMMTQuMzYwOCAyNVYxMS45MDMyTDIuODg0NTIgNS4wMDc3N0wxMS41MjkzIDBaXCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEwLjY1NTkgMjQuMjcyN1YxNC4wNTE4TDIgMTkuMDY1MUwxMC42NTU5IDI0LjI3MjdaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IEljb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgZ3JhcGhpY3M6IHtcbiAgICAgICAgICBJY29uOiBDdXN0b21JY29uLFxuICAgICAgICB9ID0ge1xuICAgICAgICAgIEljb246IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIEN1c3RvbUNvbXBvbmVudD17Q3VzdG9tSWNvbn1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e1BheWxvYWRJY29ufVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29uZmlnIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiY3NzIiwiUGF5bG9hZEljb24iLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJ4bWxucyIsImNsYXNzTmFtZSIsInN0eWxlIiwicGF0aCIsImQiLCJJY29uIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiZ3JhcGhpY3MiLCJ1bmRlZmluZWQiLCJDdXN0b21JY29uIiwiQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsT0FBT0MsMkJBQTJCLHdDQUF3QztBQUUxRSxJQUFNQyxNQUFPO0FBTWIsSUFBTUMsY0FBd0I7eUJBQzVCLG9CQUFDQztRQUNDQyxPQUFNO1FBQ05DLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxPQUFNO1FBQ05DLFdBQVU7cUJBRVYsb0JBQUNDLGVBQ0VSLG9CQUVILG9CQUFDUztRQUNDQyxHQUFFO3NCQUVKLG9CQUFDRDtRQUNDQyxHQUFFOzs7QUFLUixJQUFNQyxPQUFpQjtJQUNyQixJQVVJYixhQUFBQSxhQVRLLE1BU0xBLFdBVEZjLGNBQU8saUJBUUgsQ0FBQyxJQVJFLEtBQ08sWUFBWkMsb0JBQVksa0JBTVIsQ0FBQyxJQU5PLE1BQ0EsYUFBVkMsa0JBQVUsa0JBRU47UUFDRkgsTUFBTUk7SUFDUixJQUpVLE1BQ1JKLEFBQU1LLG1CQUFOTDtJQVFSLHFCQUNFLG9CQUFDWjtRQUNDa0IsaUJBQWlCRDtRQUNqQkUsa0JBQWtCakI7O0FBR3hCO0FBRUEsZUFBZVUsS0FBSyJ9