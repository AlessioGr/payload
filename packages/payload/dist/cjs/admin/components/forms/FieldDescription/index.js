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
var _types = require("./types");
var _getTranslation = require("../../../../utilities/getTranslation");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "field-description";
var FieldDescription = function(props) {
    var className = props.className, description = props.description, value = props.value;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    if ((0, _types.isComponent)(description)) {
        var Description = description;
        return /*#__PURE__*/ _react.default.createElement(Description, {
            value: value
        });
    }
    if (description) {
        return /*#__PURE__*/ _react.default.createElement("div", {
            className: [
                baseClass,
                className
            ].filter(Boolean).join(" ")
        }, typeof description === "function" ? description({
            value: value
        }) : (0, _getTranslation.getTranslation)(description, i18n));
    }
    return null;
};
var _default = FieldDescription;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0ZpZWxkRGVzY3JpcHRpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMsIGlzQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWVsZC1kZXNjcmlwdGlvbic7XG5cbmNvbnN0IEZpZWxkRGVzY3JpcHRpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHZhbHVlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIGlmIChpc0NvbXBvbmVudChkZXNjcmlwdGlvbikpIHtcbiAgICBjb25zdCBEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHJldHVybiA8RGVzY3JpcHRpb24gdmFsdWU9e3ZhbHVlfSAvPjtcbiAgfVxuXG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICAgIGJhc2VDbGFzcyxcbiAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKX1cbiAgICAgID5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGRlc2NyaXB0aW9uKHsgdmFsdWUgfSkgOiBnZXRUcmFuc2xhdGlvbihkZXNjcmlwdGlvbiwgaTE4bil9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZERlc2NyaXB0aW9uO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkZpZWxkRGVzY3JpcHRpb24iLCJwcm9wcyIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJpc0NvbXBvbmVudCIsIkRlc2NyaXB0aW9uIiwiZGl2IiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJnZXRUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFzQ0E7OztlQUFBOzs7NERBdENrQjs0QkFDYTtxQkFDSTs4QkFDSjtRQUN4Qjs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxtQkFBb0MsU0FBQ0M7SUFDekMsSUFDRUMsWUFHRUQsTUFIRkMsV0FDQUMsY0FFRUYsTUFGRkUsYUFDQUMsUUFDRUgsTUFERkc7SUFHRixJQUFNLEFBQUVDLE9BQVNDLElBQUFBLDRCQUFjLElBQXZCRDtJQUVSLElBQUlFLElBQUFBLGtCQUFXLEVBQUNKLGNBQWM7UUFDNUIsSUFBTUssY0FBY0w7UUFDcEIscUJBQU8sNkJBQUNLO1lBQVlKLE9BQU9BOztJQUM3QjtJQUVBLElBQUlELGFBQWE7UUFDZixxQkFDRSw2QkFBQ007WUFDQ1AsV0FBVztnQkFDVEg7Z0JBQ0FHO2FBQ0QsQ0FBQ1EsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7V0FFdEIsT0FBT1QsZ0JBQWdCLGFBQWFBLFlBQVk7WUFBRUMsT0FBQUE7UUFBTSxLQUFLUyxJQUFBQSw4QkFBYyxFQUFDVixhQUFhRTtJQUdoRztJQUVBLE9BQU87QUFDVDtJQUVBLFdBQWVMIn0=