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
var _useTitle = /*#__PURE__*/ _interop_require_default(require("../../../hooks/useTitle"));
var _IDLabel = /*#__PURE__*/ _interop_require_default(require("../IDLabel"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "render-title";
var RenderTitle = function(props) {
    var _data, _data1;
    var collection = props.collection, titleFromProps = props.title, data = props.data, _props_fallback = props.fallback, fallback = _props_fallback === void 0 ? "[untitled]" : _props_fallback;
    var titleFromForm = (0, _useTitle.default)(collection);
    var title = titleFromForm;
    if (!title) title = (_data = data) === null || _data === void 0 ? void 0 : _data.id;
    if (!title) title = fallback;
    title = titleFromProps || title;
    var idAsTitle = title === ((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1.id);
    if (idAsTitle) {
        var _data2;
        return /*#__PURE__*/ _react.default.createElement(_IDLabel.default, {
            id: (_data2 = data) === null || _data2 === void 0 ? void 0 : _data2.id
        });
    }
    return /*#__PURE__*/ _react.default.createElement("span", {
        className: baseClass
    }, title);
};
var _default = RenderTitle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1JlbmRlclRpdGxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB1c2VUaXRsZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2VUaXRsZSc7XG5pbXBvcnQgSURMYWJlbCBmcm9tICcuLi9JRExhYmVsJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JlbmRlci10aXRsZSc7XG5cbmNvbnN0IFJlbmRlclRpdGxlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb24sXG4gICAgdGl0bGU6IHRpdGxlRnJvbVByb3BzLFxuICAgIGRhdGEsXG4gICAgZmFsbGJhY2sgPSAnW3VudGl0bGVkXScsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgdGl0bGVGcm9tRm9ybSA9IHVzZVRpdGxlKGNvbGxlY3Rpb24pO1xuXG4gIGxldCB0aXRsZSA9IHRpdGxlRnJvbUZvcm07XG4gIGlmICghdGl0bGUpIHRpdGxlID0gZGF0YT8uaWQ7XG4gIGlmICghdGl0bGUpIHRpdGxlID0gZmFsbGJhY2s7XG4gIHRpdGxlID0gdGl0bGVGcm9tUHJvcHMgfHwgdGl0bGU7XG5cbiAgY29uc3QgaWRBc1RpdGxlID0gdGl0bGUgPT09IGRhdGE/LmlkO1xuXG4gIGlmIChpZEFzVGl0bGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPElETGFiZWwgaWQ9e2RhdGE/LmlkfSAvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIHt0aXRsZX1cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJUaXRsZTtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJSZW5kZXJUaXRsZSIsInByb3BzIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJ0aXRsZSIsInRpdGxlRnJvbVByb3BzIiwiZmFsbGJhY2siLCJ0aXRsZUZyb21Gb3JtIiwidXNlVGl0bGUiLCJpZCIsImlkQXNUaXRsZSIsIklETGFiZWwiLCJzcGFuIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7OytCQW9DQTs7O2VBQUE7Ozs0REFwQ2tCOytEQUVHOzhEQUNEOzs7Ozs7QUFFcEIsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxjQUErQixTQUFDQztRQVVoQkMsT0FJUUE7SUFiNUIsSUFDRUMsYUFJRUYsTUFKRkUsWUFDQUMsQUFBT0MsaUJBR0xKLE1BSEZHLE9BQ0FGLE9BRUVELE1BRkZDLHdCQUVFRCxNQURGSyxVQUFBQSx3Q0FBVztJQUViLElBQU1DLGdCQUFnQkMsSUFBQUEsaUJBQVEsRUFBQ0w7SUFFL0IsSUFBSUMsUUFBUUc7SUFDWixJQUFJLENBQUNILE9BQU9BLFNBQVFGLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTU8sRUFBRTtJQUM1QixJQUFJLENBQUNMLE9BQU9BLFFBQVFFO0lBQ3BCRixRQUFRQyxrQkFBa0JEO0lBRTFCLElBQU1NLFlBQVlOLFlBQVVGLFNBQUFBLGtCQUFBQSw2QkFBQUEsT0FBTU8sRUFBRTtJQUVwQyxJQUFJQyxXQUFXO1lBRUVSO1FBRGYscUJBQ0UsNkJBQUNTLGdCQUFPO1lBQUNGLEVBQUUsR0FBRVAsU0FBQUEsa0JBQUFBLDZCQUFBQSxPQUFNTyxFQUFFOztJQUV6QjtJQUVBLHFCQUNFLDZCQUFDRztRQUFLQyxXQUFXZDtPQUNkSztBQUdQO0lBRUEsV0FBZUoifQ==