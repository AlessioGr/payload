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
var _UnorderedList = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/UnorderedList"));
var _ListButton = /*#__PURE__*/ _interop_require_default(require("../ListButton"));
require("./index.scss");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var UL = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("ul", _object_spread({
        className: "rich-text-ul"
    }, attributes), children);
};
var ul = {
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_ListButton.default, {
            format: "ul"
        }, /*#__PURE__*/ _react.default.createElement(_UnorderedList.default, null));
    },
    Element: UL
};
var _default = ul;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3VsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVMSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9Vbm9yZGVyZWRMaXN0JztcbmltcG9ydCBMaXN0QnV0dG9uIGZyb20gJy4uL0xpc3RCdXR0b24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IFVMID0gKHsgYXR0cmlidXRlcywgY2hpbGRyZW4gfSkgPT4gKFxuICA8dWxcbiAgICBjbGFzc05hbWU9XCJyaWNoLXRleHQtdWxcIlxuICAgIHsuLi5hdHRyaWJ1dGVzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L3VsPlxuKTtcblxuY29uc3QgdWwgPSB7XG4gIEJ1dHRvbjogKCkgPT4gKFxuICAgIDxMaXN0QnV0dG9uIGZvcm1hdD1cInVsXCI+XG4gICAgICA8VUxJY29uIC8+XG4gICAgPC9MaXN0QnV0dG9uPlxuICApLFxuICBFbGVtZW50OiBVTCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVsO1xuIl0sIm5hbWVzIjpbIlVMIiwiYXR0cmlidXRlcyIsImNoaWxkcmVuIiwidWwiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJMaXN0QnV0dG9uIiwiZm9ybWF0IiwiVUxJY29uIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3QkE7OztlQUFBOzs7NERBeEJrQjtvRUFDQztpRUFDSTtRQUVoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLEtBQUs7UUFBR0MsbUJBQUFBLFlBQVlDLGlCQUFBQTt5QkFDeEIsNkJBQUNDO1FBQ0NDLFdBQVU7T0FDTkgsYUFFSEM7O0FBSUwsSUFBTUMsS0FBSztJQUNURSxRQUFROzZCQUNOLDZCQUFDQyxtQkFBVTtZQUFDQyxRQUFPO3lCQUNqQiw2QkFBQ0Msc0JBQU07O0lBR1hDLFNBQVNUO0FBQ1g7SUFFQSxXQUFlRyJ9