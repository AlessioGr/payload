import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { SelectAllStatus, useSelection } from "../../views/collections/List/SelectionProvider";
import "./index.scss";
var baseClass = "list-selection";
var ListSelection = function(param) {
    var label = param.label;
    var _useSelection = useSelection(), toggleAll = _useSelection.toggleAll, count = _useSelection.count, totalDocs = _useSelection.totalDocs, selectAll = _useSelection.selectAll;
    var t = useTranslation("general").t;
    if (count === 0) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("span", null, t("selectedCount", {
        label: label,
        count: count
    })), selectAll !== SelectAllStatus.AllAvailable && /*#__PURE__*/ React.createElement(Fragment, null, " ", "—", /*#__PURE__*/ React.createElement("button", {
        className: "".concat(baseClass, "__button"),
        type: "button",
        onClick: function() {
            return toggleAll(true);
        },
        "aria-label": t("selectAll", {
            label: label,
            count: count
        })
    }, t("selectAll", {
        label: label,
        count: totalDocs
    }))));
};
export default ListSelection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3RTZWxlY3Rpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsaXN0LXNlbGVjdGlvbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxhYmVsOiBzdHJpbmdcbn1cbmNvbnN0IExpc3RTZWxlY3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGxhYmVsIH0pID0+IHtcbiAgY29uc3QgeyB0b2dnbGVBbGwsIGNvdW50LCB0b3RhbERvY3MsIHNlbGVjdEFsbCB9ID0gdXNlU2VsZWN0aW9uKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBpZiAoY291bnQgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8c3Bhbj57dCgnc2VsZWN0ZWRDb3VudCcsIHsgbGFiZWwsIGNvdW50IH0pfTwvc3Bhbj5cbiAgICAgIHsgc2VsZWN0QWxsICE9PSBTZWxlY3RBbGxTdGF0dXMuQWxsQXZhaWxhYmxlICYmIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgJm1kYXNoO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnV0dG9uYH1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQWxsKHRydWUpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc2VsZWN0QWxsJywgeyBsYWJlbCwgY291bnQgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ3NlbGVjdEFsbCcsIHsgbGFiZWwsIGNvdW50OiB0b3RhbERvY3MgfSl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RTZWxlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsInVzZVRyYW5zbGF0aW9uIiwiU2VsZWN0QWxsU3RhdHVzIiwidXNlU2VsZWN0aW9uIiwiYmFzZUNsYXNzIiwiTGlzdFNlbGVjdGlvbiIsImxhYmVsIiwidG9nZ2xlQWxsIiwiY291bnQiLCJ0b3RhbERvY3MiLCJzZWxlY3RBbGwiLCJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsIkFsbEF2YWlsYWJsZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiYXJpYS1sYWJlbCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsUUFBUSxRQUFRLFFBQVE7QUFDeEMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxlQUFlLEVBQUVDLFlBQVksUUFBUSxpREFBaUQ7QUFFL0YsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFLbEIsSUFBTUMsZ0JBQWlDO1FBQUdDLGNBQUFBO0lBQ3hDLElBQW1ESCxnQkFBQUEsZ0JBQTNDSSxZQUEyQ0osY0FBM0NJLFdBQVdDLFFBQWdDTCxjQUFoQ0ssT0FBT0MsWUFBeUJOLGNBQXpCTSxXQUFXQyxZQUFjUCxjQUFkTztJQUNyQyxJQUFNLEFBQUVDLElBQU1WLGVBQWUsV0FBckJVO0lBRVIsSUFBSUgsVUFBVSxHQUFHO1FBQ2YsT0FBTztJQUNUO0lBRUEscUJBQ0Usb0JBQUNJO1FBQUlDLFdBQVdUO3FCQUNkLG9CQUFDVSxjQUFNSCxFQUFFLGlCQUFpQjtRQUFFTCxPQUFBQTtRQUFPRSxPQUFBQTtJQUFNLEtBQ3ZDRSxjQUFjUixnQkFBZ0JhLFlBQVksa0JBQzFDLG9CQUFDZixnQkFDRSxLQUFJLG1CQUVMLG9CQUFDZ0I7UUFDQ0gsV0FBVyxBQUFDLEdBQVksT0FBVlQsV0FBVTtRQUN4QmEsTUFBSztRQUNMQyxTQUFTO21CQUFNWCxVQUFVOztRQUN6QlksY0FBWVIsRUFBRSxhQUFhO1lBQUVMLE9BQUFBO1lBQU9FLE9BQUFBO1FBQU07T0FFekNHLEVBQUUsYUFBYTtRQUFFTCxPQUFBQTtRQUFPRSxPQUFPQztJQUFVO0FBTXREO0FBRUEsZUFBZUosY0FBYyJ9