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
var baseClass = "template-minimal";
var Minimal = function(props) {
    var className = props.className, _props_style = props.style, style = _props_style === void 0 ? {} : _props_style, children = props.children, _props_width = props.width, width = _props_width === void 0 ? "normal" : _props_width;
    var classes = [
        className,
        baseClass,
        "".concat(baseClass, "--width-").concat(width)
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("section", {
        className: classes,
        style: style
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, children));
};
var _default = Minimal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RlbXBsYXRlcy9NaW5pbWFsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndGVtcGxhdGUtbWluaW1hbCc7XG5cbmNvbnN0IE1pbmltYWw6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHN0eWxlID0ge30sXG4gICAgY2hpbGRyZW4sXG4gICAgd2lkdGggPSAnbm9ybWFsJyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgY2xhc3NOYW1lLFxuICAgIGJhc2VDbGFzcyxcbiAgICBgJHtiYXNlQ2xhc3N9LS13aWR0aC0ke3dpZHRofWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWluaW1hbDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJNaW5pbWFsIiwicHJvcHMiLCJjbGFzc05hbWUiLCJzdHlsZSIsImNoaWxkcmVuIiwid2lkdGgiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJzZWN0aW9uIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7OytCQWlDQTs7O2VBQUE7Ozs0REFqQ2tCO1FBR1g7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsVUFBMkIsU0FBQ0M7SUFDaEMsSUFDRUMsWUFJRUQsTUFKRkMsMEJBSUVELE1BSEZFLE9BQUFBLGtDQUFRLENBQUMsa0JBQ1RDLFdBRUVILE1BRkZHLHlCQUVFSCxNQURGSSxPQUFBQSxrQ0FBUTtJQUdWLElBQU1DLFVBQVU7UUFDZEo7UUFDQUg7UUFDQyxHQUFzQk0sT0FBcEJOLFdBQVUsWUFBZ0IsT0FBTk07S0FDeEIsQ0FBQ0UsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0UsNkJBQUNDO1FBQ0NSLFdBQVdJO1FBQ1hILE9BQU9BO3FCQUVQLDZCQUFDUTtRQUFJVCxXQUFXLEFBQUMsR0FBWSxPQUFWSCxXQUFVO09BQzFCSztBQUlUO0lBRUEsV0FBZUoifQ==