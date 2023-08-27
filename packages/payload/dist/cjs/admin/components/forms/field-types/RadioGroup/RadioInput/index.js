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
var _getTranslation = require("../../../../../../utilities/getTranslation");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "radio-input";
var RadioInput = function(props) {
    var isSelected = props.isSelected, option = props.option, onChange = props.onChange, path = props.path;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var classes = [
        baseClass,
        isSelected && "".concat(baseClass, "--is-selected")
    ].filter(Boolean).join(" ");
    var id = "field-".concat(path, "-").concat(option.value);
    return /*#__PURE__*/ _react.default.createElement("label", {
        htmlFor: id
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement("input", {
        id: id,
        type: "radio",
        checked: isSelected,
        onChange: function() {
            return typeof onChange === "function" ? onChange(option.value) : null;
        }
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__styled-radio")
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__label")
    }, (0, _getTranslation.getTranslation)(option.label, i18n))));
};
var _default = RadioInput;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JhZGlvR3JvdXAvUmFkaW9JbnB1dC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyYWRpby1pbnB1dCc7XG5cbmNvbnN0IFJhZGlvSW5wdXQ6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlzU2VsZWN0ZWQsIG9wdGlvbiwgb25DaGFuZ2UsIHBhdGggfSA9IHByb3BzO1xuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gICAgaXNTZWxlY3RlZCAmJiBgJHtiYXNlQ2xhc3N9LS1pcy1zZWxlY3RlZGAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBjb25zdCBpZCA9IGBmaWVsZC0ke3BhdGh9LSR7b3B0aW9uLnZhbHVlfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWxcbiAgICAgIGh0bWxGb3I9e2lkfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gKHR5cGVvZiBvbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJyA/IG9uQ2hhbmdlKG9wdGlvbi52YWx1ZSkgOiBudWxsKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zdHlsZWQtcmFkaW9gfSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e2dldFRyYW5zbGF0aW9uKG9wdGlvbi5sYWJlbCwgaTE4bil9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhZGlvSW5wdXQ7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiUmFkaW9JbnB1dCIsInByb3BzIiwiaXNTZWxlY3RlZCIsIm9wdGlvbiIsIm9uQ2hhbmdlIiwicGF0aCIsImkxOG4iLCJ1c2VUcmFuc2xhdGlvbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImlkIiwidmFsdWUiLCJsYWJlbCIsImh0bWxGb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwic3BhbiIsImdldFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQXNDQTs7O2VBQUE7Ozs0REF0Q2tCOzRCQUNhOzhCQUVBO1FBRXhCOzs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGFBQThCLFNBQUNDO0lBQ25DLElBQVFDLGFBQXVDRCxNQUF2Q0MsWUFBWUMsU0FBMkJGLE1BQTNCRSxRQUFRQyxXQUFtQkgsTUFBbkJHLFVBQVVDLE9BQVNKLE1BQVRJO0lBQ3RDLElBQU0sQUFBRUMsT0FBU0MsSUFBQUEsNEJBQWMsSUFBdkJEO0lBRVIsSUFBTUUsVUFBVTtRQUNkVDtRQUNBRyxjQUFjLEFBQUMsR0FBWSxPQUFWSCxXQUFVO0tBQzVCLENBQUNVLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLElBQU1DLEtBQUssQUFBQyxTQUFnQlQsT0FBUkUsTUFBSyxLQUFnQixPQUFiRixPQUFPVSxLQUFLO0lBRXhDLHFCQUNFLDZCQUFDQztRQUNDQyxTQUFTSDtxQkFFVCw2QkFBQ0k7UUFBSUMsV0FBV1Q7cUJBQ2QsNkJBQUNVO1FBQ0NOLElBQUlBO1FBQ0pPLE1BQUs7UUFDTEMsU0FBU2xCO1FBQ1RFLFVBQVU7bUJBQU8sT0FBT0EsYUFBYSxhQUFhQSxTQUFTRCxPQUFPVSxLQUFLLElBQUk7O3NCQUU3RSw2QkFBQ1E7UUFBS0osV0FBVyxBQUFDLEdBQVksT0FBVmxCLFdBQVU7c0JBQzlCLDZCQUFDc0I7UUFBS0osV0FBVyxBQUFDLEdBQVksT0FBVmxCLFdBQVU7T0FBV3VCLElBQUFBLDhCQUFjLEVBQUNuQixPQUFPVyxLQUFLLEVBQUVSO0FBSTlFO0lBRUEsV0FBZU4ifQ==