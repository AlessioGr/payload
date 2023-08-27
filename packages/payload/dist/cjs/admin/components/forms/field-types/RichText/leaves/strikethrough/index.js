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
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _Strikethrough = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/Strikethrough"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Strikethrough = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("del", attributes, children);
};
var strikethrough = {
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "strikethrough"
        }, /*#__PURE__*/ _react.default.createElement(_Strikethrough.default, null));
    },
    Leaf: Strikethrough
};
var _default = strikethrough;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9zdHJpa2V0aHJvdWdoL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlYWZCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBTdHJpa2V0aHJvdWdoSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9TdHJpa2V0aHJvdWdoJztcblxuY29uc3QgU3RyaWtldGhyb3VnaCA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pID0+IChcbiAgPGRlbCB7Li4uYXR0cmlidXRlc30+XG4gICAge2NoaWxkcmVufVxuICA8L2RlbD5cbik7XG5cbmNvbnN0IHN0cmlrZXRocm91Z2ggPSB7XG4gIEJ1dHRvbjogKCkgPT4gKFxuICAgIDxMZWFmQnV0dG9uIGZvcm1hdD1cInN0cmlrZXRocm91Z2hcIj5cbiAgICAgIDxTdHJpa2V0aHJvdWdoSWNvbiAvPlxuICAgIDwvTGVhZkJ1dHRvbj5cbiAgKSxcbiAgTGVhZjogU3RyaWtldGhyb3VnaCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmlrZXRocm91Z2g7XG4iXSwibmFtZXMiOlsiU3RyaWtldGhyb3VnaCIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImRlbCIsInN0cmlrZXRocm91Z2giLCJCdXR0b24iLCJMZWFmQnV0dG9uIiwiZm9ybWF0IiwiU3RyaWtldGhyb3VnaEljb24iLCJMZWFmIl0sIm1hcHBpbmdzIjoiOzs7OytCQW1CQTs7O2VBQUE7Ozs0REFuQmtCOzZEQUNLO29FQUNPOzs7Ozs7QUFFOUIsSUFBTUEsZ0JBQWdCO1FBQUdDLG1CQUFBQSxZQUFZQyxpQkFBQUE7eUJBQ25DLDZCQUFDQyxPQUFRRixZQUNOQzs7QUFJTCxJQUFNRSxnQkFBZ0I7SUFDcEJDLFFBQVE7NkJBQ04sNkJBQUNDLGVBQVU7WUFBQ0MsUUFBTzt5QkFDakIsNkJBQUNDLHNCQUFpQjs7SUFHdEJDLE1BQU1UO0FBQ1I7SUFFQSxXQUFlSSJ9