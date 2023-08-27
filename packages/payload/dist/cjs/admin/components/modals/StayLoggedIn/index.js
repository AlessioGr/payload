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
var _reactrouterdom = require("react-router-dom");
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "stay-logged-in";
var modalSlug = "stay-logged-in";
var StayLoggedInModal = function(props) {
    var refreshCookie = props.refreshCookie;
    var history = (0, _reactrouterdom.useHistory)();
    var config = (0, _Config.useConfig)();
    var admin = config.routes.admin, logoutRoute = config.admin.logoutRoute;
    var toggleModal = (0, _modal.useModal)().toggleModal;
    var t = (0, _reacti18next.useTranslation)("authentication").t;
    return /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        className: baseClass,
        slug: "stay-logged-in"
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("stayLoggedIn")), /*#__PURE__*/ _react.default.createElement("p", null, t("youAreInactive")), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        onClick: function() {
            toggleModal(modalSlug);
            history.push("".concat(admin).concat(logoutRoute));
        }
    }, t("logOut")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: function() {
            refreshCookie();
            toggleModal(modalSlug);
        }
    }, t("stayLoggedIn")))));
};
var _default = StayLoggedInModal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL21vZGFscy9TdGF5TG9nZ2VkSW4vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VNb2RhbCwgTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdzdGF5LWxvZ2dlZC1pbic7XG5cbmNvbnN0IG1vZGFsU2x1ZyA9ICdzdGF5LWxvZ2dlZC1pbic7XG5cbmNvbnN0IFN0YXlMb2dnZWRJbk1vZGFsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWZyZXNoQ29va2llIH0gPSBwcm9wcztcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHsgYWRtaW4gfSxcbiAgICBhZG1pbjoge1xuICAgICAgbG9nb3V0Um91dGUsXG4gICAgfSxcbiAgfSA9IGNvbmZpZztcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBzbHVnPVwic3RheS1sb2dnZWQtaW5cIlxuICAgID5cbiAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190ZW1wbGF0ZWB9PlxuICAgICAgICA8aDE+e3QoJ3N0YXlMb2dnZWRJbicpfTwvaDE+XG4gICAgICAgIDxwPnt0KCd5b3VBcmVJbmFjdGl2ZScpfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbnNgfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG4gICAgICAgICAgICAgIGhpc3RvcnkucHVzaChgJHthZG1pbn0ke2xvZ291dFJvdXRlfWApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnbG9nT3V0Jyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByZWZyZXNoQ29va2llKCk7XG4gICAgICAgICAgICB0b2dnbGVNb2RhbChtb2RhbFNsdWcpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ3N0YXlMb2dnZWRJbicpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF5TG9nZ2VkSW5Nb2RhbDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJtb2RhbFNsdWciLCJTdGF5TG9nZ2VkSW5Nb2RhbCIsInByb3BzIiwicmVmcmVzaENvb2tpZSIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiY29uZmlnIiwidXNlQ29uZmlnIiwicm91dGVzIiwiYWRtaW4iLCJsb2dvdXRSb3V0ZSIsInRvZ2dsZU1vZGFsIiwidXNlTW9kYWwiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJNb2RhbCIsImNsYXNzTmFtZSIsInNsdWciLCJNaW5pbWFsVGVtcGxhdGUiLCJoMSIsInAiLCJkaXYiLCJCdXR0b24iLCJidXR0b25TdHlsZSIsIm9uQ2xpY2siLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7OytCQTJEQTs7O2VBQUE7Ozs0REEzRGtCOzhCQUNTO3FCQUNLOzRCQUNEO3NCQUNMOzhEQUNFOzZEQUNUO1FBR1o7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxvQkFBcUMsU0FBQ0M7SUFDMUMsSUFBTSxBQUFFQyxnQkFBa0JELE1BQWxCQztJQUNSLElBQU1DLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLElBQU1DLFNBQVNDLElBQUFBLGlCQUFTO0lBQ3hCLElBQ0VDLEFBQVVDLFFBSVJILE9BSkZFLE9BQVVDLE9BQ1ZBLEFBQ0VDLGNBRUFKLE9BSEZHLE1BQ0VDO0lBR0osSUFBTSxBQUFFQyxjQUFnQkMsSUFBQUEsZUFBUSxJQUF4QkQ7SUFDUixJQUFNLEFBQUVFLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsa0JBQXJCRDtJQUVSLHFCQUNFLDZCQUFDRSxZQUFLO1FBQ0pDLFdBQVdqQjtRQUNYa0IsTUFBSztxQkFFTCw2QkFBQ0MsZ0JBQWU7UUFBQ0YsV0FBVyxBQUFDLEdBQVksT0FBVmpCLFdBQVU7cUJBQ3ZDLDZCQUFDb0IsWUFBSU4sRUFBRSxnQ0FDUCw2QkFBQ08sV0FBR1AsRUFBRSxrQ0FDTiw2QkFBQ1E7UUFBSUwsV0FBVyxBQUFDLEdBQVksT0FBVmpCLFdBQVU7cUJBQzNCLDZCQUFDdUIsZUFBTTtRQUNMQyxhQUFZO1FBQ1pDLFNBQVM7WUFDUGIsWUFBWVg7WUFDWkksUUFBUXFCLElBQUksQ0FBQyxBQUFDLEdBQVVmLE9BQVJELE9BQW9CLE9BQVpDO1FBQzFCO09BRUNHLEVBQUUsMEJBRUwsNkJBQUNTLGVBQU07UUFBQ0UsU0FBUztZQUNmckI7WUFDQVEsWUFBWVg7UUFDZDtPQUVHYSxFQUFFO0FBTWY7SUFFQSxXQUFlWiJ9