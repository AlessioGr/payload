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
var _Config = require("../../utilities/Config");
var _Nav = /*#__PURE__*/ _interop_require_default(require("../../elements/Nav"));
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "template-default";
var Default = function(param) {
    var children = param.children, className = param.className;
    var _useConfig = (0, _Config.useConfig)(), tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {
        Nav: undefined
    } : tmp1, CustomNav = _ref1.Nav;
    var t = (0, _reacti18next.useTranslation)("general").t;
    var classes = [
        baseClass,
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: t("dashboard"),
        description: "".concat(t("dashboard"), " Payload"),
        keywords: "".concat(t("dashboard"), ", Payload")
    }), /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        DefaultComponent: _Nav.default,
        CustomComponent: CustomNav
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, children));
};
var _default = Default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RlbXBsYXRlcy9EZWZhdWx0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IERlZmF1bHROYXYgZnJvbSAnLi4vLi4vZWxlbWVudHMvTmF2JztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICd0ZW1wbGF0ZS1kZWZhdWx0JztcblxuY29uc3QgRGVmYXVsdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBOYXY6IEN1c3RvbU5hdixcbiAgICAgIH0gPSB7XG4gICAgICAgIE5hdjogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICB9ID0ge30sXG4gIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPE1ldGFcbiAgICAgICAgdGl0bGU9e3QoJ2Rhc2hib2FyZCcpfVxuICAgICAgICBkZXNjcmlwdGlvbj17YCR7dCgnZGFzaGJvYXJkJyl9IFBheWxvYWRgfVxuICAgICAgICBrZXl3b3Jkcz17YCR7dCgnZGFzaGJvYXJkJyl9LCBQYXlsb2FkYH1cbiAgICAgIC8+XG4gICAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHROYXZ9XG4gICAgICAgIEN1c3RvbUNvbXBvbmVudD17Q3VzdG9tTmF2fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEZWZhdWx0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJ1c2VDb25maWciLCJhZG1pbiIsImNvbXBvbmVudHMiLCJOYXYiLCJ1bmRlZmluZWQiLCJDdXN0b21OYXYiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCIsIkRlZmF1bHROYXYiLCJDdXN0b21Db21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBK0NBOzs7ZUFBQTs7OzREQS9Da0I7NEJBQ2E7c0JBQ0w7MERBQ0g7NEVBQ1c7MkRBQ2pCO1FBR1Y7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsVUFBMkI7UUFBR0MsaUJBQUFBLFVBQVVDLGtCQUFBQTtJQUM1QyxJQVFJQyxhQUFBQSxJQUFBQSxpQkFBUyxLQVBKLE1BT0xBLFdBUEZDLGNBQU8saUJBTUgsQ0FBQyxJQU5FLEtBQ08sWUFBWkMsb0JBQVksa0JBRVI7UUFDRkMsS0FBS0M7SUFDUCxJQUpZLE1BQ1ZELEFBQUtFLGtCQUFMRjtJQU1OLElBQU0sQUFBRUcsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxXQUFyQkQ7SUFFUixJQUFNRSxVQUFVO1FBQ2RaO1FBQ0FHO0tBQ0QsQ0FBQ1UsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0UsNkJBQUNDO1FBQUliLFdBQVdTO3FCQUNkLDZCQUFDSyxhQUFJO1FBQ0hDLE9BQU9SLEVBQUU7UUFDVFMsYUFBYSxBQUFDLEdBQWlCLE9BQWZULEVBQUUsY0FBYTtRQUMvQlUsVUFBVSxBQUFDLEdBQWlCLE9BQWZWLEVBQUUsY0FBYTtzQkFFOUIsNkJBQUNXLDhCQUFxQjtRQUNwQkMsa0JBQWtCQyxZQUFVO1FBQzVCQyxpQkFBaUJmO3NCQUVuQiw2QkFBQ087UUFBSWIsV0FBVyxBQUFDLEdBQVksT0FBVkgsV0FBVTtPQUMxQkU7QUFJVDtJQUVBLFdBQWVEIn0=