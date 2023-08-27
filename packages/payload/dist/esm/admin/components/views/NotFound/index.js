import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import Eyebrow from "../../elements/Eyebrow";
import { useStepNav } from "../../elements/StepNav";
import Button from "../../elements/Button";
import Meta from "../../utilities/Meta";
import { Gutter } from "../../elements/Gutter";
var baseClass = "not-found";
var NotFound = function() {
    var setStepNav = useStepNav().setStepNav;
    var _useConfig = useConfig(), admin = _useConfig.routes.admin;
    var t = useTranslation("general").t;
    useEffect(function() {
        setStepNav([
            {
                label: t("notFound")
            }
        ]);
    }, [
        setStepNav,
        t
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Meta, {
        title: t("notFound"),
        description: t("pageNotFound"),
        keywords: "404 ".concat(t("notFound"))
    }), /*#__PURE__*/ React.createElement(Eyebrow, null), /*#__PURE__*/ React.createElement(Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ React.createElement("h1", null, t("nothingFound")), /*#__PURE__*/ React.createElement("p", null, t("sorryNotFound")), /*#__PURE__*/ React.createElement(Button, {
        el: "link",
        to: "".concat(admin)
    }, t("backToDashboard"))));
};
export default NotFound;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL05vdEZvdW5kL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvU3RlcE5hdic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9HdXR0ZXInO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbm90LWZvdW5kJztcblxuY29uc3QgTm90Rm91bmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHNldFN0ZXBOYXYgfSA9IHVzZVN0ZXBOYXYoKTtcbiAgY29uc3QgeyByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0ZXBOYXYoW3tcbiAgICAgIGxhYmVsOiB0KCdub3RGb3VuZCcpLFxuICAgIH1dKTtcbiAgfSwgW3NldFN0ZXBOYXYsIHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPE1ldGFcbiAgICAgICAgdGl0bGU9e3QoJ25vdEZvdW5kJyl9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt0KCdwYWdlTm90Rm91bmQnKX1cbiAgICAgICAga2V5d29yZHM9e2A0MDQgJHt0KCdub3RGb3VuZCcpfWB9XG4gICAgICAvPlxuICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIDxoMT57dCgnbm90aGluZ0ZvdW5kJyl9PC9oMT5cbiAgICAgICAgPHA+e3QoJ3NvcnJ5Tm90Rm91bmQnKX08L3A+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBlbD1cImxpbmtcIlxuICAgICAgICAgIHRvPXtgJHthZG1pbn1gfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ2JhY2tUb0Rhc2hib2FyZCcpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvR3V0dGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIkV5ZWJyb3ciLCJ1c2VTdGVwTmF2IiwiQnV0dG9uIiwiTWV0YSIsIkd1dHRlciIsImJhc2VDbGFzcyIsIk5vdEZvdW5kIiwic2V0U3RlcE5hdiIsInJvdXRlcyIsImFkbWluIiwidCIsImxhYmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiaDEiLCJwIiwiZWwiLCJ0byJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsU0FBUyxRQUFRLFFBQVE7QUFDekMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELE9BQU9DLGFBQWEseUJBQXlCO0FBQzdDLFNBQVNDLFVBQVUsUUFBUSx5QkFBeUI7QUFDcEQsT0FBT0MsWUFBWSx3QkFBd0I7QUFDM0MsT0FBT0MsVUFBVSx1QkFBdUI7QUFDeEMsU0FBU0MsTUFBTSxRQUFRLHdCQUF3QjtBQUUvQyxJQUFNQyxZQUFZO0FBRWxCLElBQU1DLFdBQXFCO0lBQ3pCLElBQU0sQUFBRUMsYUFBZU4sYUFBZk07SUFDUixJQUE4QlIsYUFBQUEsYUFBdEJTLEFBQVVDLFFBQVlWLFdBQXRCUyxPQUFVQztJQUNsQixJQUFNLEFBQUVDLElBQU1aLGVBQWUsV0FBckJZO0lBRVJiLFVBQVU7UUFDUlUsV0FBVztZQUFDO2dCQUNWSSxPQUFPRCxFQUFFO1lBQ1g7U0FBRTtJQUNKLEdBQUc7UUFBQ0g7UUFBWUc7S0FBRTtJQUVsQixxQkFDRSxvQkFBQ0U7UUFBSUMsV0FBV1I7cUJBQ2Qsb0JBQUNGO1FBQ0NXLE9BQU9KLEVBQUU7UUFDVEssYUFBYUwsRUFBRTtRQUNmTSxVQUFVLEFBQUMsT0FBb0IsT0FBZE4sRUFBRTtzQkFFckIsb0JBQUNWLDhCQUNELG9CQUFDSTtRQUFPUyxXQUFXLEFBQUMsR0FBWSxPQUFWUixXQUFVO3FCQUM5QixvQkFBQ1ksWUFBSVAsRUFBRSxnQ0FDUCxvQkFBQ1EsV0FBR1IsRUFBRSxpQ0FDTixvQkFBQ1I7UUFDQ2lCLElBQUc7UUFDSEMsSUFBSSxBQUFDLEdBQVEsT0FBTlg7T0FFTkMsRUFBRTtBQUtiO0FBRUEsZUFBZUosU0FBUyJ9