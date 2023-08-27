function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useAuth } from "../../utilities/Auth";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import Chevron from "../../icons/Chevron";
import Menu from "../../icons/Menu";
import CloseMenu from "../../icons/CloseMenu";
import Icon from "../../graphics/Icon";
import Account from "../../graphics/Account";
import Localizer from "../Localizer";
import NavGroup from "../NavGroup";
import Logout from "../Logout";
import { EntityType, groupNavItems } from "../../../utilities/groupNavItems";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "nav";
var DefaultNav = function() {
    var _useAuth = useAuth(), permissions = _useAuth.permissions, user = _useAuth.user;
    var _useState = _sliced_to_array(useState(false), 2), menuActive = _useState[0], setMenuActive = _useState[1];
    var _useState1 = _sliced_to_array(useState([]), 2), groups = _useState1[0], setGroups = _useState1[1];
    var history = useHistory();
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useConfig = useConfig(), collections = _useConfig.collections, globals = _useConfig.globals, admin = _useConfig.routes.admin, _useConfig_admin = _useConfig.admin, _useConfig_admin_components = _useConfig_admin.components, beforeNavLinks = _useConfig_admin_components.beforeNavLinks, afterNavLinks = _useConfig_admin_components.afterNavLinks;
    var classes = [
        baseClass,
        menuActive && "".concat(baseClass, "--menu-active")
    ].filter(Boolean).join(" ");
    useEffect(function() {
        setGroups(groupNavItems(_to_consumable_array(collections.filter(function(param) {
            var hidden = param.admin.hidden;
            return !(typeof hidden === "function" ? hidden({
                user: user
            }) : hidden);
        }).map(function(collection) {
            var entityToGroup = {
                type: EntityType.collection,
                entity: collection
            };
            return entityToGroup;
        })).concat(_to_consumable_array(globals.filter(function(param) {
            var hidden = param.admin.hidden;
            return !(typeof hidden === "function" ? hidden({
                user: user
            }) : hidden);
        }).map(function(global) {
            var entityToGroup = {
                type: EntityType.global,
                entity: global
            };
            return entityToGroup;
        }))), permissions, i18n));
    }, [
        collections,
        globals,
        permissions,
        i18n,
        i18n.language,
        user
    ]);
    useEffect(function() {
        return history.listen(function() {
            setMenuActive(false);
        });
    }, [
        history
    ]);
    return /*#__PURE__*/ React.createElement("aside", {
        className: classes
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__scroll")
    }, /*#__PURE__*/ React.createElement("header", null, /*#__PURE__*/ React.createElement(Link, {
        to: admin,
        className: "".concat(baseClass, "__brand"),
        "aria-label": t("dashboard")
    }, /*#__PURE__*/ React.createElement(Icon, null)), /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: "".concat(baseClass, "__mobile-menu-btn"),
        onClick: function() {
            return setMenuActive(!menuActive);
        }
    }, menuActive && /*#__PURE__*/ React.createElement(CloseMenu, null), !menuActive && /*#__PURE__*/ React.createElement(Menu, null))), /*#__PURE__*/ React.createElement("nav", {
        className: "".concat(baseClass, "__wrap")
    }, Array.isArray(beforeNavLinks) && beforeNavLinks.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, {
            key: i
        });
    }), groups.map(function(param, key) {
        var label = param.label, entities = param.entities;
        return /*#__PURE__*/ React.createElement(NavGroup, {
            key: key,
            label: label
        }, entities.map(function(param, i) {
            var entity = param.entity, type = param.type;
            var entityLabel;
            var href;
            var id;
            if (type === EntityType.collection) {
                href = "".concat(admin, "/collections/").concat(entity.slug);
                entityLabel = getTranslation(entity.labels.plural, i18n);
                id = "nav-".concat(entity.slug);
            }
            if (type === EntityType.global) {
                href = "".concat(admin, "/globals/").concat(entity.slug);
                entityLabel = getTranslation(entity.label, i18n);
                id = "nav-global-".concat(entity.slug);
            }
            return /*#__PURE__*/ React.createElement(NavLink, {
                id: id,
                className: "".concat(baseClass, "__link"),
                activeClassName: "active",
                key: i,
                to: href
            }, /*#__PURE__*/ React.createElement(Chevron, null), entityLabel);
        }));
    }), Array.isArray(afterNavLinks) && afterNavLinks.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, {
            key: i
        });
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__controls")
    }, /*#__PURE__*/ React.createElement(Localizer, null), /*#__PURE__*/ React.createElement(Link, {
        to: "".concat(admin, "/account"),
        className: "".concat(baseClass, "__account"),
        "aria-label": t("authentication:account")
    }, /*#__PURE__*/ React.createElement(Account, null)), /*#__PURE__*/ React.createElement(Logout, null)))));
};
var Nav = function() {
    var _useConfig = useConfig(), tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {
        Nav: undefined
    } : tmp1, CustomNav = _ref1.Nav;
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        CustomComponent: CustomNav,
        DefaultComponent: DefaultNav
    });
};
export default Nav;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL05hdi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vaWNvbnMvTWVudSc7XG5pbXBvcnQgQ2xvc2VNZW51IGZyb20gJy4uLy4uL2ljb25zL0Nsb3NlTWVudSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9ncmFwaGljcy9JY29uJztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uLy4uL2dyYXBoaWNzL0FjY291bnQnO1xuaW1wb3J0IExvY2FsaXplciBmcm9tICcuLi9Mb2NhbGl6ZXInO1xuaW1wb3J0IE5hdkdyb3VwIGZyb20gJy4uL05hdkdyb3VwJztcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vTG9nb3V0JztcbmltcG9ydCB7IEVudGl0eVRvR3JvdXAsIEVudGl0eVR5cGUsIEdyb3VwLCBncm91cE5hdkl0ZW1zIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2dyb3VwTmF2SXRlbXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICduYXYnO1xuXG5jb25zdCBEZWZhdWx0TmF2ID0gKCkgPT4ge1xuICBjb25zdCB7IHBlcm1pc3Npb25zLCB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dyb3Vwcywgc2V0R3JvdXBzXSA9IHVzZVN0YXRlPEdyb3VwW10+KFtdKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbnMsXG4gICAgZ2xvYmFscyxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFkbWluLFxuICAgIH0sXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgYmVmb3JlTmF2TGlua3MsXG4gICAgICAgIGFmdGVyTmF2TGlua3MsXG4gICAgICB9LFxuICAgIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBtZW51QWN0aXZlICYmIGAke2Jhc2VDbGFzc30tLW1lbnUtYWN0aXZlYCxcbiAgXS5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0R3JvdXBzKGdyb3VwTmF2SXRlbXMoW1xuICAgICAgLi4uY29sbGVjdGlvbnNcbiAgICAgICAgLmZpbHRlcigoeyBhZG1pbjogeyBoaWRkZW4gfSB9KSA9PiAhKHR5cGVvZiBoaWRkZW4gPT09ICdmdW5jdGlvbicgPyBoaWRkZW4oeyB1c2VyIH0pIDogaGlkZGVuKSlcbiAgICAgICAgLm1hcCgoY29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudGl0eVRvR3JvdXA6IEVudGl0eVRvR3JvdXAgPSB7XG4gICAgICAgICAgICB0eXBlOiBFbnRpdHlUeXBlLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICBlbnRpdHk6IGNvbGxlY3Rpb24sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBlbnRpdHlUb0dyb3VwO1xuICAgICAgICB9KSxcbiAgICAgIC4uLmdsb2JhbHNcbiAgICAgICAgLmZpbHRlcigoeyBhZG1pbjogeyBoaWRkZW4gfSB9KSA9PiAhKHR5cGVvZiBoaWRkZW4gPT09ICdmdW5jdGlvbicgPyBoaWRkZW4oeyB1c2VyIH0pIDogaGlkZGVuKSlcbiAgICAgICAgLm1hcCgoZ2xvYmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50aXR5VG9Hcm91cDogRW50aXR5VG9Hcm91cCA9IHtcbiAgICAgICAgICAgIHR5cGU6IEVudGl0eVR5cGUuZ2xvYmFsLFxuICAgICAgICAgICAgZW50aXR5OiBnbG9iYWwsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBlbnRpdHlUb0dyb3VwO1xuICAgICAgICB9KSxcbiAgICBdLCBwZXJtaXNzaW9ucywgaTE4bikpO1xuICB9LCBbY29sbGVjdGlvbnMsIGdsb2JhbHMsIHBlcm1pc3Npb25zLCBpMThuLCBpMThuLmxhbmd1YWdlLCB1c2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKCgpID0+IHtcbiAgICBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgfSksIFtoaXN0b3J5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zY3JvbGxgfT5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89e2FkbWlufVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19icmFuZGB9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdkYXNoYm9hcmQnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9iaWxlLW1lbnUtYnRuYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51QWN0aXZlICYmIChcbiAgICAgICAgICAgICAgPENsb3NlTWVudSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshbWVudUFjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShiZWZvcmVOYXZMaW5rcykgJiYgYmVmb3JlTmF2TGlua3MubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgICAge2dyb3Vwcy5tYXAoKHsgbGFiZWwsIGVudGl0aWVzIH0sIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE5hdkdyb3VwIHsuLi57IGtleSwgbGFiZWwgfX0+XG4gICAgICAgICAgICAgICAge2VudGl0aWVzLm1hcCgoeyBlbnRpdHksIHR5cGUgfSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eUxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICBsZXQgaHJlZjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmc7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBFbnRpdHlUeXBlLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZiA9IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke2VudGl0eS5zbHVnfWA7XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUxhYmVsID0gZ2V0VHJhbnNsYXRpb24oZW50aXR5LmxhYmVscy5wbHVyYWwsIGkxOG4pO1xuICAgICAgICAgICAgICAgICAgICBpZCA9IGBuYXYtJHtlbnRpdHkuc2x1Z31gO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gRW50aXR5VHlwZS5nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZiA9IGAke2FkbWlufS9nbG9iYWxzLyR7ZW50aXR5LnNsdWd9YDtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWwsIGkxOG4pO1xuICAgICAgICAgICAgICAgICAgICBpZCA9IGBuYXYtZ2xvYmFsLSR7ZW50aXR5LnNsdWd9YDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saW5rYH1cbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICB0bz17aHJlZn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2VudGl0eUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L05hdkdyb3VwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShhZnRlck5hdkxpbmtzKSAmJiBhZnRlck5hdkxpbmtzLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250cm9sc2B9PlxuICAgICAgICAgICAgPExvY2FsaXplciAvPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89e2Ake2FkbWlufS9hY2NvdW50YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY2NvdW50YH1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnYXV0aGVudGljYXRpb246YWNjb3VudCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWNjb3VudCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExvZ291dCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXG5jb25zdCBOYXY6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTmF2OiBDdXN0b21OYXYsXG4gICAgICB9ID0ge1xuICAgICAgICBOYXY6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgfSA9IHt9LFxuICB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbU5hdn1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHROYXZ9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIk5hdkxpbmsiLCJ1c2VIaXN0b3J5IiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJ1c2VBdXRoIiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiQ2hldnJvbiIsIk1lbnUiLCJDbG9zZU1lbnUiLCJJY29uIiwiQWNjb3VudCIsIkxvY2FsaXplciIsIk5hdkdyb3VwIiwiTG9nb3V0IiwiRW50aXR5VHlwZSIsImdyb3VwTmF2SXRlbXMiLCJnZXRUcmFuc2xhdGlvbiIsImJhc2VDbGFzcyIsIkRlZmF1bHROYXYiLCJwZXJtaXNzaW9ucyIsInVzZXIiLCJtZW51QWN0aXZlIiwic2V0TWVudUFjdGl2ZSIsImdyb3VwcyIsInNldEdyb3VwcyIsImhpc3RvcnkiLCJ0IiwiaTE4biIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsInJvdXRlcyIsImFkbWluIiwiY29tcG9uZW50cyIsImJlZm9yZU5hdkxpbmtzIiwiYWZ0ZXJOYXZMaW5rcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImhpZGRlbiIsIm1hcCIsImNvbGxlY3Rpb24iLCJlbnRpdHlUb0dyb3VwIiwidHlwZSIsImVudGl0eSIsImdsb2JhbCIsImxhbmd1YWdlIiwibGlzdGVuIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkZXIiLCJ0byIsImFyaWEtbGFiZWwiLCJidXR0b24iLCJvbkNsaWNrIiwibmF2IiwiQXJyYXkiLCJpc0FycmF5IiwiQ29tcG9uZW50IiwiaSIsImtleSIsImxhYmVsIiwiZW50aXRpZXMiLCJlbnRpdHlMYWJlbCIsImhyZWYiLCJpZCIsInNsdWciLCJsYWJlbHMiLCJwbHVyYWwiLCJhY3RpdmVDbGFzc05hbWUiLCJOYXYiLCJ1bmRlZmluZWQiLCJDdXN0b21OYXYiLCJDdXN0b21Db21wb25lbnQiLCJEZWZhdWx0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNuRCxTQUFTQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxRQUFRLG1CQUFtQjtBQUM3RCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsU0FBU0MsT0FBTyxRQUFRLHVCQUF1QjtBQUMvQyxPQUFPQywyQkFBMkIsd0NBQXdDO0FBQzFFLE9BQU9DLGFBQWEsc0JBQXNCO0FBQzFDLE9BQU9DLFVBQVUsbUJBQW1CO0FBQ3BDLE9BQU9DLGVBQWUsd0JBQXdCO0FBQzlDLE9BQU9DLFVBQVUsc0JBQXNCO0FBQ3ZDLE9BQU9DLGFBQWEseUJBQXlCO0FBQzdDLE9BQU9DLGVBQWUsZUFBZTtBQUNyQyxPQUFPQyxjQUFjLGNBQWM7QUFDbkMsT0FBT0MsWUFBWSxZQUFZO0FBQy9CLFNBQXdCQyxVQUFVLEVBQVNDLGFBQWEsUUFBUSxtQ0FBbUM7QUFDbkcsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUV0RSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxhQUFhO0lBQ2pCLElBQThCZCxXQUFBQSxXQUF0QmUsY0FBc0JmLFNBQXRCZSxhQUFhQyxPQUFTaEIsU0FBVGdCO0lBQ3JCLElBQW9DdEIsNkJBQUFBLFNBQVMsWUFBdEN1QixhQUE2QnZCLGNBQWpCd0IsZ0JBQWlCeEI7SUFDcEMsSUFBNEJBLDhCQUFBQSxTQUFrQixFQUFFLE9BQXpDeUIsU0FBcUJ6QixlQUFiMEIsWUFBYTFCO0lBQzVCLElBQU0yQixVQUFVeEI7SUFDaEIsSUFBb0JDLGtCQUFBQSxlQUFlLFlBQTNCd0IsSUFBWXhCLGdCQUFad0IsR0FB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