"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CheckboxInput", {
    enumerable: true,
    get: function() {
        return CheckboxInput;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _Check = /*#__PURE__*/ _interop_require_default(require("../../../icons/Check"));
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _Line = /*#__PURE__*/ _interop_require_default(require("../../../icons/Line"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "custom-checkbox";
var CheckboxInput = function(props) {
    var onToggle = props.onToggle, checked = props.checked, partialChecked = props.partialChecked, inputRef = props.inputRef, name = props.name, id = props.id, label = props.label, ariaLabel = props["aria-label"], readOnly = props.readOnly, required = props.required;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: [
            baseClass,
            (checked || partialChecked) && "".concat(baseClass, "--checked"),
            readOnly && "".concat(baseClass, "--read-only")
        ].filter(Boolean).join(" ")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__input")
    }, /*#__PURE__*/ _react.default.createElement("input", {
        ref: inputRef,
        id: id,
        type: "checkbox",
        name: name,
        "aria-label": ariaLabel,
        checked: Boolean(checked),
        disabled: readOnly,
        onInput: onToggle
    }), /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__icon ").concat(!partialChecked ? "check" : "partial")
    }, !partialChecked && /*#__PURE__*/ _react.default.createElement(_Check.default, null), partialChecked && /*#__PURE__*/ _react.default.createElement(_Line.default, null))), label && /*#__PURE__*/ _react.default.createElement(_Label.default, {
        htmlFor: id,
        label: label,
        required: required
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0NoZWNrYm94L0lucHV0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoZWNrIGZyb20gJy4uLy4uLy4uL2ljb25zL0NoZWNrJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgTGluZSBmcm9tICcuLi8uLi8uLi9pY29ucy9MaW5lJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnY3VzdG9tLWNoZWNrYm94JztcblxudHlwZSBDaGVja2JveElucHV0UHJvcHMgPSB7XG4gIG9uVG9nZ2xlOiBSZWFjdC5Gb3JtRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+XG4gIGlucHV0UmVmPzogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDxIVE1MSW5wdXRFbGVtZW50PlxuICByZWFkT25seT86IGJvb2xlYW5cbiAgY2hlY2tlZD86IGJvb2xlYW5cbiAgcGFydGlhbENoZWNrZWQ/OiBib29sZWFuXG4gIG5hbWU/OiBzdHJpbmdcbiAgaWQ/OiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbiAgJ2FyaWEtbGFiZWwnPzogc3RyaW5nXG4gIHJlcXVpcmVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgQ2hlY2tib3hJbnB1dDogUmVhY3QuRkM8Q2hlY2tib3hJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgb25Ub2dnbGUsXG4gICAgY2hlY2tlZCxcbiAgICBwYXJ0aWFsQ2hlY2tlZCxcbiAgICBpbnB1dFJlZixcbiAgICBuYW1lLFxuICAgIGlkLFxuICAgIGxhYmVsLFxuICAgICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuICAgIHJlYWRPbmx5LFxuICAgIHJlcXVpcmVkLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICAoY2hlY2tlZCB8fCBwYXJ0aWFsQ2hlY2tlZCkgJiYgYCR7YmFzZUNsYXNzfS0tY2hlY2tlZGAsXG4gICAgICAgIHJlYWRPbmx5ICYmIGAke2Jhc2VDbGFzc30tLXJlYWQtb25seWAsXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lucHV0YH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgICAgY2hlY2tlZD17Qm9vbGVhbihjaGVja2VkKX1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgb25JbnB1dD17b25Ub2dnbGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9faWNvbiAkeyFwYXJ0aWFsQ2hlY2tlZCA/ICdjaGVjaycgOiAncGFydGlhbCd9YH0+XG4gICAgICAgICAgeyFwYXJ0aWFsQ2hlY2tlZCAmJiAoXG4gICAgICAgICAgICA8Q2hlY2sgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtwYXJ0aWFsQ2hlY2tlZCAmJiAoXG4gICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAge2xhYmVsICYmIChcbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkNoZWNrYm94SW5wdXQiLCJiYXNlQ2xhc3MiLCJwcm9wcyIsIm9uVG9nZ2xlIiwiY2hlY2tlZCIsInBhcnRpYWxDaGVja2VkIiwiaW5wdXRSZWYiLCJuYW1lIiwiaWQiLCJsYWJlbCIsImFyaWFMYWJlbCIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImlucHV0IiwicmVmIiwidHlwZSIsImFyaWEtbGFiZWwiLCJkaXNhYmxlZCIsIm9uSW5wdXQiLCJzcGFuIiwiQ2hlY2siLCJMaW5lIiwiTGFiZWwiLCJodG1sRm9yIl0sIm1hcHBpbmdzIjoiOzs7OytCQXNCYUE7OztlQUFBQTs7OzREQXRCSzs0REFDQTs0REFDQTsyREFDRDtRQUVWOzs7Ozs7QUFFUCxJQUFNQyxZQUFZO0FBZVgsSUFBTUQsZ0JBQThDLFNBQUNFO0lBQzFELElBQ0VDLFdBVUVELE1BVkZDLFVBQ0FDLFVBU0VGLE1BVEZFLFNBQ0FDLGlCQVFFSCxNQVJGRyxnQkFDQUMsV0FPRUosTUFQRkksVUFDQUMsT0FNRUwsTUFORkssTUFDQUMsS0FLRU4sTUFMRk0sSUFDQUMsUUFJRVAsTUFKRk8sT0FDQSxBQUFjQyxZQUdaUixNQUhGLGVBQ0FTLFdBRUVULE1BRkZTLFVBQ0FDLFdBQ0VWLE1BREZVO0lBR0YscUJBQ0UsNkJBQUNDO1FBQ0NDLFdBQVc7WUFDVGI7WUFDQ0csQ0FBQUEsV0FBV0MsY0FBYSxLQUFNLEFBQUMsR0FBWSxPQUFWSixXQUFVO1lBQzVDVSxZQUFZLEFBQUMsR0FBWSxPQUFWVixXQUFVO1NBQzFCLENBQUNjLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO3FCQUV2Qiw2QkFBQ0o7UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVmIsV0FBVTtxQkFDM0IsNkJBQUNpQjtRQUNDQyxLQUFLYjtRQUNMRSxJQUFJQTtRQUNKWSxNQUFLO1FBQ0xiLE1BQU1BO1FBQ05jLGNBQVlYO1FBQ1pOLFNBQVNZLFFBQVFaO1FBQ2pCa0IsVUFBVVg7UUFDVlksU0FBU3BCO3NCQUVYLDZCQUFDcUI7UUFBS1YsV0FBVyxBQUFDLEdBQXFCLE9BQW5CYixXQUFVLFdBQStDLE9BQXRDLENBQUNJLGlCQUFpQixVQUFVO09BQ2hFLENBQUNBLGdDQUNBLDZCQUFDb0IsY0FBSyxTQUVQcEIsZ0NBQ0MsNkJBQUNxQixhQUFJLFdBSVZqQix1QkFDQyw2QkFBQ2tCLGNBQUs7UUFDSkMsU0FBU3BCO1FBQ1RDLE9BQU9BO1FBQ1BHLFVBQVVBOztBQUtwQiJ9