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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _SelectionProvider = require("../../views/collections/List/SelectionProvider");
require("./index.scss");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var baseClass = "list-selection";
var ListSelection = function(param) {
    var label = param.label;
    var _useSelection = (0, _SelectionProvider.useSelection)(), toggleAll = _useSelection.toggleAll, count = _useSelection.count, totalDocs = _useSelection.totalDocs, selectAll = _useSelection.selectAll;
    var t = (0, _reacti18next.useTranslation)("general").t;
    if (count === 0) {
        return null;
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("span", null, t("selectedCount", {
        label: label,
        count: count
    })), selectAll !== _SelectionProvider.SelectAllStatus.AllAvailable && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, " ", "—", /*#__PURE__*/ _react.default.createElement("button", {
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
var _default = ListSelection;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xpc3RTZWxlY3Rpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBTZWxlY3RBbGxTdGF0dXMsIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXInO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsaXN0LXNlbGVjdGlvbic7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxhYmVsOiBzdHJpbmdcbn1cbmNvbnN0IExpc3RTZWxlY3Rpb246IFJlYWN0LkZDPFByb3BzPiA9ICh7IGxhYmVsIH0pID0+IHtcbiAgY29uc3QgeyB0b2dnbGVBbGwsIGNvdW50LCB0b3RhbERvY3MsIHNlbGVjdEFsbCB9ID0gdXNlU2VsZWN0aW9uKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBpZiAoY291bnQgPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8c3Bhbj57dCgnc2VsZWN0ZWRDb3VudCcsIHsgbGFiZWwsIGNvdW50IH0pfTwvc3Bhbj5cbiAgICAgIHsgc2VsZWN0QWxsICE9PSBTZWxlY3RBbGxTdGF0dXMuQWxsQXZhaWxhYmxlICYmIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgJm1kYXNoO1xuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYnV0dG9uYH1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQWxsKHRydWUpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc2VsZWN0QWxsJywgeyBsYWJlbCwgY291bnQgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ3NlbGVjdEFsbCcsIHsgbGFiZWwsIGNvdW50OiB0b3RhbERvY3MgfSl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApIH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RTZWxlY3Rpb247XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiTGlzdFNlbGVjdGlvbiIsImxhYmVsIiwidXNlU2VsZWN0aW9uIiwidG9nZ2xlQWxsIiwiY291bnQiLCJ0b3RhbERvY3MiLCJzZWxlY3RBbGwiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiU2VsZWN0QWxsU3RhdHVzIiwiQWxsQXZhaWxhYmxlIiwiRnJhZ21lbnQiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImFyaWEtbGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7K0JBd0NBOzs7ZUFBQTs7OzZEQXhDZ0M7NEJBQ0Q7aUNBQ2U7UUFFdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBS2xCLElBQU1DLGdCQUFpQztRQUFHQyxjQUFBQTtJQUN4QyxJQUFtREMsZ0JBQUFBLElBQUFBLCtCQUFZLEtBQXZEQyxZQUEyQ0QsY0FBM0NDLFdBQVdDLFFBQWdDRixjQUFoQ0UsT0FBT0MsWUFBeUJILGNBQXpCRyxXQUFXQyxZQUFjSixjQUFkSTtJQUNyQyxJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBRVIsSUFBSUgsVUFBVSxHQUFHO1FBQ2YsT0FBTztJQUNUO0lBRUEscUJBQ0UsNkJBQUNLO1FBQUlDLFdBQVdYO3FCQUNkLDZCQUFDWSxjQUFNSixFQUFFLGlCQUFpQjtRQUFFTixPQUFBQTtRQUFPRyxPQUFBQTtJQUFNLEtBQ3ZDRSxjQUFjTSxrQ0FBZSxDQUFDQyxZQUFZLGtCQUMxQyw2QkFBQ0MsZUFBUSxRQUNOLEtBQUksbUJBRUwsNkJBQUNDO1FBQ0NMLFdBQVcsQUFBQyxHQUFZLE9BQVZYLFdBQVU7UUFDeEJpQixNQUFLO1FBQ0xDLFNBQVM7bUJBQU1kLFVBQVU7O1FBQ3pCZSxjQUFZWCxFQUFFLGFBQWE7WUFBRU4sT0FBQUE7WUFBT0csT0FBQUE7UUFBTTtPQUV6Q0csRUFBRSxhQUFhO1FBQUVOLE9BQUFBO1FBQU9HLE9BQU9DO0lBQVU7QUFNdEQ7SUFFQSxXQUFlTCJ9