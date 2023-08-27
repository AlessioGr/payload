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
    Banner: function() {
        return Banner;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactrouterdom = require("react-router-dom");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "banner";
var Banner = function(param) {
    var children = param.children, className = param.className, to = param.to, icon = param.icon, _param_alignIcon = param.alignIcon, alignIcon = _param_alignIcon === void 0 ? "right" : _param_alignIcon, onClick = param.onClick, _param_type = param.type, type = _param_type === void 0 ? "default" : _param_type;
    var classes = [
        baseClass,
        "".concat(baseClass, "--type-").concat(type),
        className && className,
        to && "".concat(baseClass, "--has-link"),
        (to || onClick) && "".concat(baseClass, "--has-action"),
        icon && "".concat(baseClass, "--has-icon"),
        icon && "".concat(baseClass, "--align-icon-").concat(alignIcon)
    ].filter(Boolean).join(" ");
    var RenderedType = "div";
    if (onClick && !to) RenderedType = "button";
    if (to) RenderedType = _reactrouterdom.Link;
    return /*#__PURE__*/ _react.default.createElement(RenderedType, {
        className: classes,
        onClick: onClick,
        to: to || undefined
    }, icon && alignIcon === "left" && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, icon), /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__content")
    }, children), icon && alignIcon === "right" && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, icon));
};
var _default = Banner;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0Jhbm5lci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3BzLCBSZW5kZXJlZFR5cGVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdiYW5uZXInO1xuXG5leHBvcnQgY29uc3QgQmFubmVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICB0byxcbiAgaWNvbixcbiAgYWxpZ25JY29uID0gJ3JpZ2h0JyxcbiAgb25DbGljayxcbiAgdHlwZSA9ICdkZWZhdWx0Jyxcbn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgYCR7YmFzZUNsYXNzfS0tdHlwZS0ke3R5cGV9YCxcbiAgICBjbGFzc05hbWUgJiYgY2xhc3NOYW1lLFxuICAgIHRvICYmIGAke2Jhc2VDbGFzc30tLWhhcy1saW5rYCxcbiAgICAodG8gfHwgb25DbGljaykgJiYgYCR7YmFzZUNsYXNzfS0taGFzLWFjdGlvbmAsXG4gICAgaWNvbiAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtaWNvbmAsXG4gICAgaWNvbiAmJiBgJHtiYXNlQ2xhc3N9LS1hbGlnbi1pY29uLSR7YWxpZ25JY29ufWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBsZXQgUmVuZGVyZWRUeXBlOiBzdHJpbmcgfCBSZWFjdC5Db21wb25lbnRUeXBlPFJlbmRlcmVkVHlwZVByb3BzPiA9ICdkaXYnO1xuXG4gIGlmIChvbkNsaWNrICYmICF0bykgUmVuZGVyZWRUeXBlID0gJ2J1dHRvbic7XG4gIGlmICh0bykgUmVuZGVyZWRUeXBlID0gTGluaztcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJlZFR5cGVcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB0bz17dG8gfHwgdW5kZWZpbmVkfVxuICAgID5cbiAgICAgIHsoaWNvbiAmJiBhbGlnbkljb24gPT09ICdsZWZ0JykgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge2ljb259XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50YH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIHsoaWNvbiAmJiBhbGlnbkljb24gPT09ICdyaWdodCcpICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L1JlbmRlcmVkVHlwZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiJdLCJuYW1lcyI6WyJCYW5uZXIiLCJiYXNlQ2xhc3MiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRvIiwiaWNvbiIsImFsaWduSWNvbiIsIm9uQ2xpY2siLCJ0eXBlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiUmVuZGVyZWRUeXBlIiwiTGluayIsInVuZGVmaW5lZCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJzcGFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVFhQSxNQUFNO2VBQU5BOztJQStDYixPQUFzQjtlQUF0Qjs7OzREQXZEa0I7OEJBQ0c7UUFHZDs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELFNBQTBCO1FBQ3JDRSxpQkFBQUEsVUFDQUMsa0JBQUFBLFdBQ0FDLFdBQUFBLElBQ0FDLGFBQUFBLCtCQUNBQyxXQUFBQSwwQ0FBWSw0QkFDWkMsZ0JBQUFBLDZCQUNBQyxNQUFBQSxnQ0FBTztJQUVQLElBQU1DLFVBQVU7UUFDZFI7UUFDQyxHQUFxQk8sT0FBbkJQLFdBQVUsV0FBYyxPQUFMTztRQUN0QkwsYUFBYUE7UUFDYkMsTUFBTSxBQUFDLEdBQVksT0FBVkgsV0FBVTtRQUNsQkcsQ0FBQUEsTUFBTUcsT0FBTSxLQUFNLEFBQUMsR0FBWSxPQUFWTixXQUFVO1FBQ2hDSSxRQUFRLEFBQUMsR0FBWSxPQUFWSixXQUFVO1FBQ3JCSSxRQUFRLEFBQUMsR0FBMkJDLE9BQXpCTCxXQUFVLGlCQUF5QixPQUFWSztLQUNyQyxDQUFDSSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixJQUFJQyxlQUFnRTtJQUVwRSxJQUFJTixXQUFXLENBQUNILElBQUlTLGVBQWU7SUFDbkMsSUFBSVQsSUFBSVMsZUFBZUMsb0JBQUk7SUFFM0IscUJBQ0UsNkJBQUNEO1FBQ0NWLFdBQVdNO1FBQ1hGLFNBQVNBO1FBQ1RILElBQUlBLE1BQU1XO09BRVQsQUFBQ1YsUUFBUUMsY0FBYyx3QkFDdEIsNkJBQUNVLGNBQUssQ0FBQ0MsUUFBUSxRQUNaWixxQkFHTCw2QkFBQ2E7UUFBS2YsV0FBVyxBQUFDLEdBQVksT0FBVkYsV0FBVTtPQUMzQkMsV0FFRixBQUFDRyxRQUFRQyxjQUFjLHlCQUN0Qiw2QkFBQ1UsY0FBSyxDQUFDQyxRQUFRLFFBQ1paO0FBS1g7SUFFQSxXQUFlTCJ9