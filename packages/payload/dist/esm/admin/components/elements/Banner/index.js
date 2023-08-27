import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
var baseClass = "banner";
export var Banner = function(param) {
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
    if (to) RenderedType = Link;
    return /*#__PURE__*/ React.createElement(RenderedType, {
        className: classes,
        onClick: onClick,
        to: to || undefined
    }, icon && alignIcon === "left" && /*#__PURE__*/ React.createElement(React.Fragment, null, icon), /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__content")
    }, children), icon && alignIcon === "right" && /*#__PURE__*/ React.createElement(React.Fragment, null, icon));
};
export default Banner;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0Jhbm5lci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3BzLCBSZW5kZXJlZFR5cGVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdiYW5uZXInO1xuXG5leHBvcnQgY29uc3QgQmFubmVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxuICB0byxcbiAgaWNvbixcbiAgYWxpZ25JY29uID0gJ3JpZ2h0JyxcbiAgb25DbGljayxcbiAgdHlwZSA9ICdkZWZhdWx0Jyxcbn0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgYCR7YmFzZUNsYXNzfS0tdHlwZS0ke3R5cGV9YCxcbiAgICBjbGFzc05hbWUgJiYgY2xhc3NOYW1lLFxuICAgIHRvICYmIGAke2Jhc2VDbGFzc30tLWhhcy1saW5rYCxcbiAgICAodG8gfHwgb25DbGljaykgJiYgYCR7YmFzZUNsYXNzfS0taGFzLWFjdGlvbmAsXG4gICAgaWNvbiAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtaWNvbmAsXG4gICAgaWNvbiAmJiBgJHtiYXNlQ2xhc3N9LS1hbGlnbi1pY29uLSR7YWxpZ25JY29ufWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBsZXQgUmVuZGVyZWRUeXBlOiBzdHJpbmcgfCBSZWFjdC5Db21wb25lbnRUeXBlPFJlbmRlcmVkVHlwZVByb3BzPiA9ICdkaXYnO1xuXG4gIGlmIChvbkNsaWNrICYmICF0bykgUmVuZGVyZWRUeXBlID0gJ2J1dHRvbic7XG4gIGlmICh0bykgUmVuZGVyZWRUeXBlID0gTGluaztcblxuICByZXR1cm4gKFxuICAgIDxSZW5kZXJlZFR5cGVcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICB0bz17dG8gfHwgdW5kZWZpbmVkfVxuICAgID5cbiAgICAgIHsoaWNvbiAmJiBhbGlnbkljb24gPT09ICdsZWZ0JykgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge2ljb259XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250ZW50YH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIHsoaWNvbiAmJiBhbGlnbkljb24gPT09ICdyaWdodCcpICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L1JlbmRlcmVkVHlwZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJiYXNlQ2xhc3MiLCJCYW5uZXIiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRvIiwiaWNvbiIsImFsaWduSWNvbiIsIm9uQ2xpY2siLCJ0eXBlIiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiUmVuZGVyZWRUeXBlIiwidW5kZWZpbmVkIiwiRnJhZ21lbnQiLCJzcGFuIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsSUFBSSxRQUFRLG1CQUFtQjtBQUd4QyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixPQUFPLElBQU1DLFNBQTBCO1FBQ3JDQyxpQkFBQUEsVUFDQUMsa0JBQUFBLFdBQ0FDLFdBQUFBLElBQ0FDLGFBQUFBLCtCQUNBQyxXQUFBQSwwQ0FBWSw0QkFDWkMsZ0JBQUFBLDZCQUNBQyxNQUFBQSxnQ0FBTztJQUVQLElBQU1DLFVBQVU7UUFDZFQ7UUFDQyxHQUFxQlEsT0FBbkJSLFdBQVUsV0FBYyxPQUFMUTtRQUN0QkwsYUFBYUE7UUFDYkMsTUFBTSxBQUFDLEdBQVksT0FBVkosV0FBVTtRQUNsQkksQ0FBQUEsTUFBTUcsT0FBTSxLQUFNLEFBQUMsR0FBWSxPQUFWUCxXQUFVO1FBQ2hDSyxRQUFRLEFBQUMsR0FBWSxPQUFWTCxXQUFVO1FBQ3JCSyxRQUFRLEFBQUMsR0FBMkJDLE9BQXpCTixXQUFVLGlCQUF5QixPQUFWTTtLQUNyQyxDQUFDSSxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixJQUFJQyxlQUFnRTtJQUVwRSxJQUFJTixXQUFXLENBQUNILElBQUlTLGVBQWU7SUFDbkMsSUFBSVQsSUFBSVMsZUFBZWQ7SUFFdkIscUJBQ0Usb0JBQUNjO1FBQ0NWLFdBQVdNO1FBQ1hGLFNBQVNBO1FBQ1RILElBQUlBLE1BQU1VO09BRVQsQUFBQ1QsUUFBUUMsY0FBYyx3QkFDdEIsb0JBQUNSLE1BQU1pQixRQUFRLFFBQ1pWLHFCQUdMLG9CQUFDVztRQUFLYixXQUFXLEFBQUMsR0FBWSxPQUFWSCxXQUFVO09BQzNCRSxXQUVGLEFBQUNHLFFBQVFDLGNBQWMseUJBQ3RCLG9CQUFDUixNQUFNaUIsUUFBUSxRQUNaVjtBQUtYLEVBQUU7QUFFRixlQUFlSixPQUFPIn0=