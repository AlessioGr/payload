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
var _Search = /*#__PURE__*/ _interop_require_default(require("../../../../../graphics/Search"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "block-search";
var BlockSearch = function(props) {
    var setSearchTerm = props.setSearchTerm;
    var t = (0, _reacti18next.useTranslation)("fields").t;
    var handleChange = function(e) {
        setSearchTerm(e.target.value);
    };
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: "".concat(baseClass, "__input"),
        placeholder: t("searchForBlock"),
        onChange: handleChange
    }), /*#__PURE__*/ _react.default.createElement(_Search.default, null));
};
var _default = BlockSearch;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9CbG9ja3NEcmF3ZXIvQmxvY2tTZWFyY2gvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZ3JhcGhpY3MvU2VhcmNoJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnYmxvY2stc2VhcmNoJztcblxuY29uc3QgQmxvY2tTZWFyY2g6IFJlYWN0LkZDPHsgc2V0U2VhcmNoVGVybTogKHRlcm06IHN0cmluZykgPT4gdm9pZCB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNldFNlYXJjaFRlcm0gfSA9IHByb3BzO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdmaWVsZHMnKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19pbnB1dGB9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0KCdzZWFyY2hGb3JCbG9jaycpfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDxTZWFyY2hJY29uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1NlYXJjaDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJCbG9ja1NlYXJjaCIsInByb3BzIiwic2V0U2VhcmNoVGVybSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIlNlYXJjaEljb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBNEJBOzs7ZUFBQTs7OzREQTVCa0I7NEJBQ2E7NkRBQ1I7UUFFaEI7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsY0FBbUUsU0FBQ0M7SUFDeEUsSUFBTSxBQUFFQyxnQkFBa0JELE1BQWxCQztJQUNSLElBQU0sQUFBRUMsSUFBTUMsSUFBQUEsNEJBQWMsRUFBQyxVQUFyQkQ7SUFFUixJQUFNRSxlQUFlLFNBQUNDO1FBQ3BCSixjQUFjSSxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDOUI7SUFFQSxxQkFDRSw2QkFBQ0M7UUFBSUMsV0FBV1g7cUJBQ2QsNkJBQUNZO1FBQ0NELFdBQVcsQUFBQyxHQUFZLE9BQVZYLFdBQVU7UUFDeEJhLGFBQWFULEVBQUU7UUFDZlUsVUFBVVI7c0JBRVosNkJBQUNTLGVBQVU7QUFHakI7SUFFQSxXQUFlZCJ9