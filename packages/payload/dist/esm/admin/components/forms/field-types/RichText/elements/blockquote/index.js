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
import React from "react";
import ElementButton from "../Button";
import BlockquoteIcon from "../../../../../icons/Blockquote";
import "./index.scss";
var Blockquote = function(param) {
    var attributes = param.attributes, children = param.children;
    return /*#__PURE__*/ React.createElement("blockquote", _object_spread({
        className: "rich-text-blockquote"
    }, attributes), children);
};
var blockquote = {
    Button: function() {
        return /*#__PURE__*/ React.createElement(ElementButton, {
            format: "blockquote"
        }, /*#__PURE__*/ React.createElement(BlockquoteIcon, null));
    },
    Element: Blockquote
};
export default blockquote;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL2Jsb2NrcXVvdGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRWxlbWVudEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IEJsb2NrcXVvdGVJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uL2ljb25zL0Jsb2NrcXVvdGUnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IEJsb2NrcXVvdGUgPSAoeyBhdHRyaWJ1dGVzLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxibG9ja3F1b3RlXG4gICAgY2xhc3NOYW1lPVwicmljaC10ZXh0LWJsb2NrcXVvdGVcIlxuICAgIHsuLi5hdHRyaWJ1dGVzfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2Jsb2NrcXVvdGU+XG4pO1xuXG5jb25zdCBibG9ja3F1b3RlID0ge1xuICBCdXR0b246ICgpID0+IChcbiAgICA8RWxlbWVudEJ1dHRvbiBmb3JtYXQ9XCJibG9ja3F1b3RlXCI+XG4gICAgICA8QmxvY2txdW90ZUljb24gLz5cbiAgICA8L0VsZW1lbnRCdXR0b24+XG4gICksXG4gIEVsZW1lbnQ6IEJsb2NrcXVvdGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBibG9ja3F1b3RlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRWxlbWVudEJ1dHRvbiIsIkJsb2NrcXVvdGVJY29uIiwiQmxvY2txdW90ZSIsImF0dHJpYnV0ZXMiLCJjaGlsZHJlbiIsImJsb2NrcXVvdGUiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJmb3JtYXQiLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLG1CQUFtQixZQUFZO0FBQ3RDLE9BQU9DLG9CQUFvQixrQ0FBa0M7QUFFN0QsT0FBTyxlQUFlO0FBRXRCLElBQU1DLGFBQWE7UUFBR0MsbUJBQUFBLFlBQVlDLGlCQUFBQTt5QkFDaEMsb0JBQUNDO1FBQ0NDLFdBQVU7T0FDTkgsYUFFSEM7O0FBSUwsSUFBTUMsYUFBYTtJQUNqQkUsUUFBUTs2QkFDTixvQkFBQ1A7WUFBY1EsUUFBTzt5QkFDcEIsb0JBQUNQOztJQUdMUSxTQUFTUDtBQUNYO0FBRUEsZUFBZUcsV0FBVyJ9