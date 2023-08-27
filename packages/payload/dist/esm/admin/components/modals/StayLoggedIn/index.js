import React from "react";
import { useHistory } from "react-router-dom";
import { useModal, Modal } from "@faceless-ui/modal";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import MinimalTemplate from "../../templates/Minimal";
import Button from "../../elements/Button";
import "./index.scss";
var baseClass = "stay-logged-in";
var modalSlug = "stay-logged-in";
var StayLoggedInModal = function(props) {
    var refreshCookie = props.refreshCookie;
    var history = useHistory();
    var config = useConfig();
    var admin = config.routes.admin, logoutRoute = config.admin.logoutRoute;
    var toggleModal = useModal().toggleModal;
    var t = useTranslation("authentication").t;
    return /*#__PURE__*/ React.createElement(Modal, {
        className: baseClass,
        slug: "stay-logged-in"
    }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ React.createElement("h1", null, t("stayLoggedIn")), /*#__PURE__*/ React.createElement("p", null, t("youAreInactive")), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__actions")
    }, /*#__PURE__*/ React.createElement(Button, {
        buttonStyle: "secondary",
        onClick: function() {
            toggleModal(modalSlug);
            history.push("".concat(admin).concat(logoutRoute));
        }
    }, t("logOut")), /*#__PURE__*/ React.createElement(Button, {
        onClick: function() {
            refreshCookie();
            toggleModal(modalSlug);
        }
    }, t("stayLoggedIn")))));
};
export default StayLoggedInModal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL21vZGFscy9TdGF5TG9nZ2VkSW4vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VNb2RhbCwgTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IE1pbmltYWxUZW1wbGF0ZSBmcm9tICcuLi8uLi90ZW1wbGF0ZXMvTWluaW1hbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdzdGF5LWxvZ2dlZC1pbic7XG5cbmNvbnN0IG1vZGFsU2x1ZyA9ICdzdGF5LWxvZ2dlZC1pbic7XG5cbmNvbnN0IFN0YXlMb2dnZWRJbk1vZGFsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWZyZXNoQ29va2llIH0gPSBwcm9wcztcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHsgYWRtaW4gfSxcbiAgICBhZG1pbjoge1xuICAgICAgbG9nb3V0Um91dGUsXG4gICAgfSxcbiAgfSA9IGNvbmZpZztcbiAgY29uc3QgeyB0b2dnbGVNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignYXV0aGVudGljYXRpb24nKTtcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICBzbHVnPVwic3RheS1sb2dnZWQtaW5cIlxuICAgID5cbiAgICAgIDxNaW5pbWFsVGVtcGxhdGUgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190ZW1wbGF0ZWB9PlxuICAgICAgICA8aDE+e3QoJ3N0YXlMb2dnZWRJbicpfTwvaDE+XG4gICAgICAgIDxwPnt0KCd5b3VBcmVJbmFjdGl2ZScpfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2FjdGlvbnNgfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRvZ2dsZU1vZGFsKG1vZGFsU2x1Zyk7XG4gICAgICAgICAgICAgIGhpc3RvcnkucHVzaChgJHthZG1pbn0ke2xvZ291dFJvdXRlfWApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dCgnbG9nT3V0Jyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICByZWZyZXNoQ29va2llKCk7XG4gICAgICAgICAgICB0b2dnbGVNb2RhbChtb2RhbFNsdWcpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ3N0YXlMb2dnZWRJbicpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF5TG9nZ2VkSW5Nb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUhpc3RvcnkiLCJ1c2VNb2RhbCIsIk1vZGFsIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJNaW5pbWFsVGVtcGxhdGUiLCJCdXR0b24iLCJiYXNlQ2xhc3MiLCJtb2RhbFNsdWciLCJTdGF5TG9nZ2VkSW5Nb2RhbCIsInByb3BzIiwicmVmcmVzaENvb2tpZSIsImhpc3RvcnkiLCJjb25maWciLCJyb3V0ZXMiLCJhZG1pbiIsImxvZ291dFJvdXRlIiwidG9nZ2xlTW9kYWwiLCJ0IiwiY2xhc3NOYW1lIiwic2x1ZyIsImgxIiwicCIsImRpdiIsImJ1dHRvblN0eWxlIiwib25DbGljayIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNDLFFBQVEsRUFBRUMsS0FBSyxRQUFRLHFCQUFxQjtBQUNyRCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsT0FBT0MscUJBQXFCLDBCQUEwQjtBQUN0RCxPQUFPQyxZQUFZLHdCQUF3QjtBQUczQyxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLG9CQUFxQyxTQUFDQztJQUMxQyxJQUFNLEFBQUVDLGdCQUFrQkQsTUFBbEJDO0lBQ1IsSUFBTUMsVUFBVVo7SUFDaEIsSUFBTWEsU0FBU1Q7SUFDZixJQUNFVSxBQUFVQyxRQUlSRixPQUpGQyxPQUFVQyxPQUNWQSxBQUNFQyxjQUVBSCxPQUhGRSxNQUNFQztJQUdKLElBQU0sQUFBRUMsY0FBZ0JoQixXQUFoQmdCO0lBQ1IsSUFBTSxBQUFFQyxJQUFNZixlQUFlLGtCQUFyQmU7SUFFUixxQkFDRSxvQkFBQ2hCO1FBQ0NpQixXQUFXWjtRQUNYYSxNQUFLO3FCQUVMLG9CQUFDZjtRQUFnQmMsV0FBVyxBQUFDLEdBQVksT0FBVlosV0FBVTtxQkFDdkMsb0JBQUNjLFlBQUlILEVBQUUsZ0NBQ1Asb0JBQUNJLFdBQUdKLEVBQUUsa0NBQ04sb0JBQUNLO1FBQUlKLFdBQVcsQUFBQyxHQUFZLE9BQVZaLFdBQVU7cUJBQzNCLG9CQUFDRDtRQUNDa0IsYUFBWTtRQUNaQyxTQUFTO1lBQ1BSLFlBQVlUO1lBQ1pJLFFBQVFjLElBQUksQ0FBQyxBQUFDLEdBQVVWLE9BQVJELE9BQW9CLE9BQVpDO1FBQzFCO09BRUNFLEVBQUUsMEJBRUwsb0JBQUNaO1FBQU9tQixTQUFTO1lBQ2ZkO1lBQ0FNLFlBQVlUO1FBQ2Q7T0FFR1UsRUFBRTtBQU1mO0FBRUEsZUFBZVQsa0JBQWtCIn0=