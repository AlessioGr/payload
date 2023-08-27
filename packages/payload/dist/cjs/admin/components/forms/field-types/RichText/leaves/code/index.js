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
var _Code = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/Code"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Code = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("code", attributes, children);
};
var code = {
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "code"
        }, /*#__PURE__*/ _react.default.createElement(_Code.default, null));
    },
    Leaf: Code
};
var _default = code;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2xlYXZlcy9jb2RlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlYWZCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBDb2RlSWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9Db2RlJztcblxuY29uc3QgQ29kZSA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pID0+IChcbiAgPGNvZGUgey4uLmF0dHJpYnV0ZXN9PntjaGlsZHJlbn08L2NvZGU+XG4pO1xuXG5jb25zdCBjb2RlID0ge1xuICBCdXR0b246ICgpID0+IChcbiAgICA8TGVhZkJ1dHRvbiBmb3JtYXQ9XCJjb2RlXCI+XG4gICAgICA8Q29kZUljb24gLz5cbiAgICA8L0xlYWZCdXR0b24+XG4gICksXG4gIExlYWY6IENvZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb2RlO1xuIl0sIm5hbWVzIjpbIkNvZGUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjb2RlIiwiQnV0dG9uIiwiTGVhZkJ1dHRvbiIsImZvcm1hdCIsIkNvZGVJY29uIiwiTGVhZiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFpQkE7OztlQUFBOzs7NERBakJrQjs2REFDSzsyREFDRjs7Ozs7O0FBRXJCLElBQU1BLE9BQU87UUFBR0MsbUJBQUFBLFlBQVlDLGlCQUFBQTt5QkFDMUIsNkJBQUNDLFFBQVNGLFlBQWFDOztBQUd6QixJQUFNQyxPQUFPO0lBQ1hDLFFBQVE7NkJBQ04sNkJBQUNDLGVBQVU7WUFBQ0MsUUFBTzt5QkFDakIsNkJBQUNDLGFBQVE7O0lBR2JDLE1BQU1SO0FBQ1I7SUFFQSxXQUFlRyJ9