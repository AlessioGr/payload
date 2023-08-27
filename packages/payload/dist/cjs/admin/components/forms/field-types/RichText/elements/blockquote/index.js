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
var _Blockquote = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/Blockquote"));
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
var Blockquote = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ _react.default.createElement("blockquote", _object_spread({
        className: "rich-text-blockquote"
    }, attributes), children);
};
var blockquote = {
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "blockquote"
        }, /*#__PURE__*/ _react.default.createElement(_Blockquote.default, null));
    },
    Element: Blockquote
};
var _default = blockquote;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2Jsb2NrcXVvdGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRWxlbWVudEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IEJsb2NrcXVvdGVJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2ljb25zL0Jsb2NrcXVvdGUnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IEJsb2NrcXVvdGUgPSAoeyBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxibG9ja3F1b3RlXG4gICAgY2xhc3NOYW1lPVwicmljaC10ZXh0LWJsb2NrcXVvdGVcIlxuICAgIHsuLi5hdHRyaWJ1dGVzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2Jsb2NrcXVvdGU+XG4pO1xuXG5jb25zdCBibG9ja3F1b3RlID0ge1xuICBCdXR0b246ICgpID0+IChcbiAgICA8RWxlbWVudEJ1dHRvbiBmb3JtYXQ9XCJibG9ja3F1b3RlXCI+XG4gICAgICA8QmxvY2txdW90ZUljb24gLz5cbiAgICA8L0VsZW1lbnRCdXR0b24+XG4gICksXG4gIEVsZW1lbnQ6IEJsb2NrcXVvdGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBibG9ja3F1b3RlO1xuIl0sIm5hbWVzIjpbIkJsb2NrcXVvdGUiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJibG9ja3F1b3RlIiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiRWxlbWVudEJ1dHRvbiIsImZvcm1hdCIsIkJsb2NrcXVvdGVJY29uIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF3QkE7OztlQUFBOzs7NERBeEJrQjs2REFDUTtpRUFDQztRQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLGFBQWE7UUFBR0MsbUJBQUFBLFlBQVlDLGlCQUFBQTt5QkFDaEMsNkJBQUNDO1FBQ0NDLFdBQVU7T0FDTkgsYUFFSEM7O0FBSUwsSUFBTUMsYUFBYTtJQUNqQkUsUUFBUTs2QkFDTiw2QkFBQ0MsZUFBYTtZQUFDQyxRQUFPO3lCQUNwQiw2QkFBQ0MsbUJBQWM7O0lBR25CQyxTQUFTVDtBQUNYO0lBRUEsV0FBZUcifQ==