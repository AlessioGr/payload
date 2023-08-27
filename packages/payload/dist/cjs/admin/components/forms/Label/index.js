"use client";
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
var _reacti18next = require("react-i18next");
var _getTranslation = require("../../../../utilities/getTranslation");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Label = function(props) {
    var label = props.label, _props_required = props.required, required = _props_required === void 0 ? false : _props_required, htmlFor = props.htmlFor;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    if (label) {
        return /*#__PURE__*/ _react.default.createElement("label", {
            htmlFor: htmlFor,
            className: "field-label"
        }, (0, _getTranslation.getTranslation)(label, i18n), required && /*#__PURE__*/ _react.default.createElement("span", {
            className: "required"
        }, "*"));
    }
    return null;
};
var _default = Label;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0xhYmVsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBMYWJlbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbCwgcmVxdWlyZWQgPSBmYWxzZSwgaHRtbEZvcixcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgaWYgKGxhYmVsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtodG1sRm9yfVxuICAgICAgICBjbGFzc05hbWU9XCJmaWVsZC1sYWJlbFwiXG4gICAgICA+XG4gICAgICAgIHsgZ2V0VHJhbnNsYXRpb24obGFiZWwsIGkxOG4pIH1cbiAgICAgICAge3JlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj59XG4gICAgICA8L2xhYmVsPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIl0sIm5hbWVzIjpbIkxhYmVsIiwicHJvcHMiLCJsYWJlbCIsInJlcXVpcmVkIiwiaHRtbEZvciIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImNsYXNzTmFtZSIsImdldFRyYW5zbGF0aW9uIiwic3BhbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OytCQThCQTs7O2VBQUE7Ozs0REE1QmtCOzRCQUNhOzhCQUVBO1FBRXhCOzs7Ozs7QUFFUCxJQUFNQSxRQUF5QixTQUFDQztJQUM5QixJQUNFQyxRQUNFRCxNQURGQyx5QkFDRUQsTUFES0UsVUFBQUEsd0NBQVcseUJBQU9DLFVBQ3ZCSCxNQUR1Qkc7SUFFM0IsSUFBTSxBQUFFQyxPQUFTQyxJQUFBQSw0QkFBYyxJQUF2QkQ7SUFFUixJQUFJSCxPQUFPO1FBQ1QscUJBQ0UsNkJBQUNBO1lBQ0NFLFNBQVNBO1lBQ1RHLFdBQVU7V0FFUkMsSUFBQUEsOEJBQWMsRUFBQ04sT0FBT0csT0FDdkJGLDBCQUFZLDZCQUFDTTtZQUFLRixXQUFVO1dBQVc7SUFHOUM7SUFFQSxPQUFPO0FBQ1Q7SUFFQSxXQUFlUCJ9