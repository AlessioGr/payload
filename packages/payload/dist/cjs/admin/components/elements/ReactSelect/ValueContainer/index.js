"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValueContainer", {
    enumerable: true,
    get: function() {
        return ValueContainer;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactselect = require("react-select");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "value-container";
var ValueContainer = function(props) {
    var _customProps;
    var tmp = props.selectProps, // @ts-ignore // TODO: Fix types
    customProps = (tmp === void 0 ? {} : tmp).customProps;
    return /*#__PURE__*/ _react.default.createElement("div", {
        ref: (_customProps = customProps) === null || _customProps === void 0 ? void 0 : _customProps.droppableRef,
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_reactselect.components.ValueContainer, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlYWN0U2VsZWN0L1ZhbHVlQ29udGFpbmVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9uZW50cyBhcyBTZWxlY3RDb21wb25lbnRzLCBWYWx1ZUNvbnRhaW5lclByb3BzIH0gZnJvbSAncmVhY3Qtc2VsZWN0JztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndmFsdWUtY29udGFpbmVyJztcblxuZXhwb3J0IGNvbnN0IFZhbHVlQ29udGFpbmVyOiBSZWFjdC5GQzxWYWx1ZUNvbnRhaW5lclByb3BzPE9wdGlvbiwgYW55Pj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHNlbGVjdFByb3BzOiB7XG4gICAgICAvLyBAdHMtaWdub3JlIC8vIFRPRE86IEZpeCB0eXBlc1xuICAgICAgY3VzdG9tUHJvcHMsXG4gICAgfSA9IHt9LFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e2N1c3RvbVByb3BzPy5kcm9wcGFibGVSZWZ9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICA+XG4gICAgICA8U2VsZWN0Q29tcG9uZW50cy5WYWx1ZUNvbnRhaW5lciB7Li4ucHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlZhbHVlQ29udGFpbmVyIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJjdXN0b21Qcm9wcyIsInNlbGVjdFByb3BzIiwiZGl2IiwicmVmIiwiZHJvcHBhYmxlUmVmIiwiY2xhc3NOYW1lIiwiU2VsZWN0Q29tcG9uZW50cyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFRYUE7OztlQUFBQTs7OzREQVJLOzJCQUNrRDtRQUc3RDs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELGlCQUE2RCxTQUFDRTtRQVVoRUM7SUFUVCxJQUNlLE1BSVhELE1BSkZFLGFBQWEsQUFDWCxnQ0FBZ0M7SUFDaENELGVBRlcsaUJBR1QsQ0FBQyxJQUhRLEtBRVhBO0lBSUoscUJBQ0UsNkJBQUNFO1FBQ0NDLEdBQUcsR0FBRUgsZUFBQUEseUJBQUFBLG1DQUFBQSxhQUFhSSxZQUFZO1FBQzlCQyxXQUFXUDtxQkFFWCw2QkFBQ1EsdUJBQWdCLENBQUNULGNBQWMsRUFBS0U7QUFHM0MifQ==