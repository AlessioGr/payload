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
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "condition-value-text";
var Text = function(param) {
    var onChange = param.onChange, value = param.value;
    var t = (0, _reacti18next.useTranslation)("general").t;
    return /*#__PURE__*/ _react.default.createElement("input", {
        placeholder: t("enterAValue"),
        className: baseClass,
        type: "text",
        onChange: function(e) {
            return onChange(e.target.value);
        },
        value: value || ""
    });
};
var _default = Text;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vVGV4dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb25kaXRpb24tdmFsdWUtdGV4dCc7XG5cbmNvbnN0IFRleHQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHBsYWNlaG9sZGVyPXt0KCdlbnRlckFWYWx1ZScpfVxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIHZhbHVlPXt2YWx1ZSB8fCAnJ31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJUZXh0Iiwib25DaGFuZ2UiLCJ2YWx1ZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJ0eXBlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7OztlQUFBOzs7NERBckJrQjs0QkFDYTtRQUd4Qjs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxPQUF3QjtRQUFHQyxpQkFBQUEsVUFBVUMsY0FBQUE7SUFDekMsSUFBTSxBQUFFQyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFdBQXJCRDtJQUNSLHFCQUNFLDZCQUFDRTtRQUNDQyxhQUFhSCxFQUFFO1FBQ2ZJLFdBQVdSO1FBQ1hTLE1BQUs7UUFDTFAsVUFBVSxTQUFDUTttQkFBTVIsU0FBU1EsRUFBRUMsTUFBTSxDQUFDUixLQUFLOztRQUN4Q0EsT0FBT0EsU0FBUzs7QUFHdEI7SUFFQSxXQUFlRiJ9