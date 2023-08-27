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
var _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../elements/Tooltip"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "field-error";
var Error = function(props) {
    var _props_showError = props.showError, showError = _props_showError === void 0 ? false : _props_showError, message = props.message;
    if (showError) {
        return /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
            className: baseClass,
            delay: 0
        }, message);
    }
    return null;
};
var _default = Error;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Vycm9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vLi4vZWxlbWVudHMvVG9vbHRpcCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWVsZC1lcnJvcic7XG5cbmNvbnN0IEVycm9yOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHNob3dFcnJvciA9IGZhbHNlLFxuICAgIG1lc3NhZ2UsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoc2hvd0Vycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICBkZWxheT17MH1cbiAgICAgID5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRXJyb3IiLCJwcm9wcyIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJUb29sdGlwIiwiY2xhc3NOYW1lIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBNEJBOzs7ZUFBQTs7OzREQTVCa0I7OERBQ0U7UUFHYjs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxRQUF5QixTQUFDQztJQUM5Qix1QkFHSUEsTUFGRkMsV0FBQUEsMENBQVksMEJBQ1pDLFVBQ0VGLE1BREZFO0lBR0YsSUFBSUQsV0FBVztRQUNiLHFCQUNFLDZCQUFDRSxnQkFBTztZQUNOQyxXQUFXTjtZQUNYTyxPQUFPO1dBRU5IO0lBR1A7SUFFQSxPQUFPO0FBQ1Q7SUFFQSxXQUFlSCJ9