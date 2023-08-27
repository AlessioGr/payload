import React from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import DefaultNav from "../../elements/Nav";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import Meta from "../../utilities/Meta";
import "./index.scss";
var baseClass = "template-default";
var Default = function(param) {
    var children = param.children, className = param.className;
    var _useConfig = useConfig(), tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {
        Nav: undefined
    } : tmp1, CustomNav = _ref1.Nav;
    var t = useTranslation("general").t;
    var classes = [
        baseClass,
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: t("dashboard"),
        description: "".concat(t("dashboard"), " Payload"),
        keywords: "".concat(t("dashboard"), ", Payload")
    }), /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        DefaultComponent: DefaultNav,
        CustomComponent: CustomNav
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__wrap")
    }, children));
};
export default Default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3RlbXBsYXRlcy9EZWZhdWx0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IERlZmF1bHROYXYgZnJvbSAnLi4vLi4vZWxlbWVudHMvTmF2JztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICd0ZW1wbGF0ZS1kZWZhdWx0JztcblxuY29uc3QgRGVmYXVsdDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBOYXY6IEN1c3RvbU5hdixcbiAgICAgIH0gPSB7XG4gICAgICAgIE5hdjogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICB9ID0ge30sXG4gIH0gPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPE1ldGFcbiAgICAgICAgdGl0bGU9e3QoJ2Rhc2hib2FyZCcpfVxuICAgICAgICBkZXNjcmlwdGlvbj17YCR7dCgnZGFzaGJvYXJkJyl9IFBheWxvYWRgfVxuICAgICAgICBrZXl3b3Jkcz17YCR7dCgnZGFzaGJvYXJkJyl9LCBQYXlsb2FkYH1cbiAgICAgIC8+XG4gICAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHROYXZ9XG4gICAgICAgIEN1c3RvbUNvbXBvbmVudD17Q3VzdG9tTmF2fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwiRGVmYXVsdE5hdiIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIk1ldGEiLCJiYXNlQ2xhc3MiLCJEZWZhdWx0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJOYXYiLCJ1bmRlZmluZWQiLCJDdXN0b21OYXYiLCJ0IiwiY2xhc3NlcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiRGVmYXVsdENvbXBvbmVudCIsIkN1c3RvbUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUNuRCxPQUFPQyxnQkFBZ0IscUJBQXFCO0FBQzVDLE9BQU9DLDJCQUEyQix3Q0FBd0M7QUFDMUUsT0FBT0MsVUFBVSx1QkFBdUI7QUFHeEMsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsVUFBMkI7UUFBR0MsaUJBQUFBLFVBQVVDLGtCQUFBQTtJQUM1QyxJQVFJUCxhQUFBQSxhQVBLLE1BT0xBLFdBUEZRLGNBQU8saUJBTUgsQ0FBQyxJQU5FLEtBQ08sWUFBWkMsb0JBQVksa0JBRVI7UUFDRkMsS0FBS0M7SUFDUCxJQUpZLE1BQ1ZELEFBQUtFLGtCQUFMRjtJQU1OLElBQU0sQUFBRUcsSUFBTWQsZUFBZSxXQUFyQmM7SUFFUixJQUFNQyxVQUFVO1FBQ2RWO1FBQ0FHO0tBQ0QsQ0FBQ1EsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIscUJBQ0Usb0JBQUNDO1FBQUlYLFdBQVdPO3FCQUNkLG9CQUFDWDtRQUNDZ0IsT0FBT04sRUFBRTtRQUNUTyxhQUFhLEFBQUMsR0FBaUIsT0FBZlAsRUFBRSxjQUFhO1FBQy9CUSxVQUFVLEFBQUMsR0FBaUIsT0FBZlIsRUFBRSxjQUFhO3NCQUU5QixvQkFBQ1g7UUFDQ29CLGtCQUFrQnJCO1FBQ2xCc0IsaUJBQWlCWDtzQkFFbkIsb0JBQUNNO1FBQUlYLFdBQVcsQUFBQyxHQUFZLE9BQVZILFdBQVU7T0FDMUJFO0FBSVQ7QUFFQSxlQUFlRCxRQUFRIn0=