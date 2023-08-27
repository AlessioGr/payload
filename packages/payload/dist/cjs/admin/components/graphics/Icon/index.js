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
var _Config = require("../../utilities/Config");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var css = "\n  .graphic-icon path {\n    fill: var(--theme-elevation-1000);\n  }\n";
var PayloadIcon = function() {
    return /*#__PURE__*/ _react.default.createElement("svg", {
        width: "25",
        height: "25",
        viewBox: "0 0 25 25",
        xmlns: "http://www.w3.org/2000/svg",
        className: "graphic-icon"
    }, /*#__PURE__*/ _react.default.createElement("style", null, css), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M11.5293 0L23 6.90096V19.9978L14.3608 25V11.9032L2.88452 5.00777L11.5293 0Z"
    }), /*#__PURE__*/ _react.default.createElement("path", {
        d: "M10.6559 24.2727V14.0518L2 19.0651L10.6559 24.2727Z"
    }));
};
var Icon = function() {
    var _useConfig = (0, _Config.useConfig)(), tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {} : tmp1, tmp2 = _ref1.graphics, _ref2 = tmp2 === void 0 ? {
        Icon: undefined
    } : tmp2, CustomIcon = _ref2.Icon;
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomIcon,
        DefaultComponent: PayloadIcon
    });
};
var _default = Icon;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2dyYXBoaWNzL0ljb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5cbmNvbnN0IGNzcyA9IGBcbiAgLmdyYXBoaWMtaWNvbiBwYXRoIHtcbiAgICBmaWxsOiB2YXIoLS10aGVtZS1lbGV2YXRpb24tMTAwMCk7XG4gIH1cbmA7XG5cbmNvbnN0IFBheWxvYWRJY29uOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPHN2Z1xuICAgIHdpZHRoPVwiMjVcIlxuICAgIGhlaWdodD1cIjI1XCJcbiAgICB2aWV3Qm94PVwiMCAwIDI1IDI1XCJcbiAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICBjbGFzc05hbWU9XCJncmFwaGljLWljb25cIlxuICA+XG4gICAgPHN0eWxlPlxuICAgICAge2Nzc31cbiAgICA8L3N0eWxlPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTExLjUyOTMgMEwyMyA2LjkwMDk2VjE5Ljk5NzhMMTQuMzYwOCAyNVYxMS45MDMyTDIuODg0NTIgNS4wMDc3N0wxMS41MjkzIDBaXCJcbiAgICAvPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEwLjY1NTkgMjQuMjcyN1YxNC4wNTE4TDIgMTkuMDY1MUwxMC42NTU5IDI0LjI3MjdaXCJcbiAgICAvPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IEljb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgZ3JhcGhpY3M6IHtcbiAgICAgICAgICBJY29uOiBDdXN0b21JY29uLFxuICAgICAgICB9ID0ge1xuICAgICAgICAgIEljb246IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJDdXN0b21Db21wb25lbnRcbiAgICAgIEN1c3RvbUNvbXBvbmVudD17Q3VzdG9tSWNvbn1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e1BheWxvYWRJY29ufVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIl0sIm5hbWVzIjpbImNzcyIsIlBheWxvYWRJY29uIiwic3ZnIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwieG1sbnMiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhdGgiLCJkIiwiSWNvbiIsInVzZUNvbmZpZyIsImFkbWluIiwiY29tcG9uZW50cyIsImdyYXBoaWNzIiwidW5kZWZpbmVkIiwiQ3VzdG9tSWNvbiIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBbURBOzs7ZUFBQTs7OzREQW5Ea0I7c0JBQ1E7NEVBQ1E7Ozs7OztBQUVsQyxJQUFNQSxNQUFPO0FBTWIsSUFBTUMsY0FBd0I7eUJBQzVCLDZCQUFDQztRQUNDQyxPQUFNO1FBQ05DLFFBQU87UUFDUEMsU0FBUTtRQUNSQyxPQUFNO1FBQ05DLFdBQVU7cUJBRVYsNkJBQUNDLGVBQ0VSLG9CQUVILDZCQUFDUztRQUNDQyxHQUFFO3NCQUVKLDZCQUFDRDtRQUNDQyxHQUFFOzs7QUFLUixJQUFNQyxPQUFpQjtJQUNyQixJQVVJQyxhQUFBQSxJQUFBQSxpQkFBUyxLQVRKLE1BU0xBLFdBVEZDLGNBQU8saUJBUUgsQ0FBQyxJQVJFLEtBQ08sWUFBWkMsb0JBQVksa0JBTVIsQ0FBQyxJQU5PLE1BQ0EsYUFBVkMsa0JBQVUsa0JBRU47UUFDRkosTUFBTUs7SUFDUixJQUpVLE1BQ1JMLEFBQU1NLG1CQUFOTjtJQVFSLHFCQUNFLDZCQUFDTyw4QkFBcUI7UUFDcEJDLGlCQUFpQkY7UUFDakJHLGtCQUFrQm5COztBQUd4QjtJQUVBLFdBQWVVIn0=