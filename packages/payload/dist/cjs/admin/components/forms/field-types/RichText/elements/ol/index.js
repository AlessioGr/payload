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
var _ListButton = /*#__PURE__*/ _interop_require_default(require("../ListButton"));
var _OrderedList = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/OrderedList"));
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
var OL = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("ol", _object_spread({
        className: "rich-text-ol"
    }, attributes), children);
};
var ol = {
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_ListButton.default, {
            format: "ol"
        }, /*#__PURE__*/ _react.default.createElement(_OrderedList.default, null));
    },
    Element: OL
};
var _default = ol;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL29sL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpc3RCdXR0b24gZnJvbSAnLi4vTGlzdEJ1dHRvbic7XG5pbXBvcnQgT0xJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2ljb25zL09yZGVyZWRMaXN0JztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBPTCA9ICh7IGF0dHJpYnV0ZXMsIGNoaWxkcmVuIH0pID0+IChcbiAgPG9sXG4gICAgY2xhc3NOYW1lPVwicmljaC10ZXh0LW9sXCJcbiAgICB7Li4uYXR0cmlidXRlc31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9vbD5cbik7XG5cbmNvbnN0IG9sID0ge1xuICBCdXR0b246ICgpID0+IChcbiAgICA8TGlzdEJ1dHRvbiBmb3JtYXQ9XCJvbFwiPlxuICAgICAgPE9MSWNvbiAvPlxuICAgIDwvTGlzdEJ1dHRvbj5cbiAgKSxcbiAgRWxlbWVudDogT0wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbDtcbiJdLCJuYW1lcyI6WyJPTCIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsIm9sIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiTGlzdEJ1dHRvbiIsImZvcm1hdCIsIk9MSWNvbiIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBd0JBOzs7ZUFBQTs7OzREQXhCa0I7aUVBQ0s7a0VBQ0o7UUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLEtBQUs7UUFBR0MsbUJBQUFBLFlBQVlDLGlCQUFBQTt5QkFDeEIsNkJBQUNDO1FBQ0NDLFdBQVU7T0FDTkgsYUFFSEM7O0FBSUwsSUFBTUMsS0FBSztJQUNURSxRQUFROzZCQUNOLDZCQUFDQyxtQkFBVTtZQUFDQyxRQUFPO3lCQUNqQiw2QkFBQ0Msb0JBQU07O0lBR1hDLFNBQVNUO0FBQ1g7SUFFQSxXQUFlRyJ9