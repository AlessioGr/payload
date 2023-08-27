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
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Auth = require("../../utilities/Auth");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _Menu = /*#__PURE__*/ _interop_require_default(require("../../icons/Menu"));
var _CloseMenu = /*#__PURE__*/ _interop_require_default(require("../../icons/CloseMenu"));
var _Icon = /*#__PURE__*/ _interop_require_default(require("../../graphics/Icon"));
var _Account = /*#__PURE__*/ _interop_require_default(require("../../graphics/Account"));
var _Localizer = /*#__PURE__*/ _interop_require_default(require("../Localizer"));
var _NavGroup = /*#__PURE__*/ _interop_require_default(require("../NavGroup"));
var _Logout = /*#__PURE__*/ _interop_require_default(require("../Logout"));
var _groupNavItems = require("../../../utilities/groupNavItems");
var _getTranslation = require("../../../../utilities/getTranslation");
require("./index.scss");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
var baseClass = "nav";
var DefaultNav = function() {
    var _useAuth = (0, _Auth.useAuth)(), permissions = _useAuth.permissions, user = _useAuth.user;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), menuActive = _useState[0], setMenuActive = _useState[1];
    var _useState1 = _sliced_to_array((0, _react.useState)([]), 2), groups = _useState1[0], setGroups = _useState1[1];
    var history = (0, _reactrouterdom.useHistory)();
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useConfig = (0, _Config.useConfig)(), collections = _useConfig.collections, globals = _useConfig.globals, admin = _useConfig.routes.admin, _useConfig_admin = _useConfig.admin, _useConfig_admin_components = _useConfig_admin.components, beforeNavLinks = _useConfig_admin_components.beforeNavLinks, afterNavLinks = _useConfig_admin_components.afterNavLinks;
    var classes = [
        baseClass,
        menuActive && "".concat(baseClass, "--menu-active")
    ].filter(Boolean).join(" ");
    (0, _react.useEffect)(function() {
        setGroups((0, _groupNavItems.groupNavItems)(_to_consumable_array(collections.filter(function(param) {
            var hidden = param.admin.hidden;
            return !(typeof hidden === "function" ? hidden({
                user: user
            }) : hidden);
        }).map(function(collection) {
            var entityToGroup = {
                type: _groupNavItems.EntityType.collection,
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
                type: _groupNavItems.EntityType.global,
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
    (0, _react.useEffect)(function() {
        return history.listen(function() {
            setMenuActive(false);
        });
    }, [
        history
    ]);
    return /*#__PURE__*/ _react.default.createElement("aside", {
        className: classes
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__scroll")
    }, /*#__PURE__*/ _react.default.createElement("header", null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: admin,
        className: "".concat(baseClass, "__brand"),
        "aria-label": t("dashboard")
    }, /*#__PURE__*/ _react.default.createElement(_Icon.default, null)), /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        className: "".concat(baseClass, "__mobile-menu-btn"),
        onClick: function() {
            return setMenuActive(!menuActive);
        }
    }, menuActive && /*#__PURE__*/ _react.default.createElement(_CloseMenu.default, null), !menuActive && /*#__PURE__*/ _react.default.createElement(_Menu.default, null))), /*#__PURE__*/ _react.default.createElement("nav", {
        className: "".concat(baseClass, "__wrap")
    }, Array.isArray(beforeNavLinks) && beforeNavLinks.map(function(Component, i) {
        return /*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        });
    }), groups.map(function(param, key) {
        var label = param.label, entities = param.entities;
        return /*#__PURE__*/ _react.default.createElement(_NavGroup.default, {
            key: key,
            label: label
        }, entities.map(function(param, i) {
            var entity = param.entity, type = param.type;
            var entityLabel;
            var href;
            var id;
            if (type === _groupNavItems.EntityType.collection) {
                href = "".concat(admin, "/collections/").concat(entity.slug);
                entityLabel = (0, _getTranslation.getTranslation)(entity.labels.plural, i18n);
                id = "nav-".concat(entity.slug);
            }
            if (type === _groupNavItems.EntityType.global) {
                href = "".concat(admin, "/globals/").concat(entity.slug);
                entityLabel = (0, _getTranslation.getTranslation)(entity.label, i18n);
                id = "nav-global-".concat(entity.slug);
            }
            return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.NavLink, {
                id: id,
                className: "".concat(baseClass, "__link"),
                activeClassName: "active",
                key: i,
                to: href
            }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null), entityLabel);
        }));
    }), Array.isArray(afterNavLinks) && afterNavLinks.map(function(Component, i) {
        return /*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        });
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__controls")
    }, /*#__PURE__*/ _react.default.createElement(_Localizer.default, null), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Link, {
        to: "".concat(admin, "/account"),
        className: "".concat(baseClass, "__account"),
        "aria-label": t("authentication:account")
    }, /*#__PURE__*/ _react.default.createElement(_Account.default, null)), /*#__PURE__*/ _react.default.createElement(_Logout.default, null)))));
};
var Nav = function() {
    var _useConfig = (0, _Config.useConfig)(), tmp = _useConfig.admin, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.components, _ref1 = tmp1 === void 0 ? {
        Nav: undefined
    } : tmp1, CustomNav = _ref1.Nav;
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
        CustomComponent: CustomNav,
        DefaultComponent: DefaultNav
    });
};
var _default = Nav;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL05hdi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rLCB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vLi4vaWNvbnMvTWVudSc7XG5pbXBvcnQgQ2xvc2VNZW51IGZyb20gJy4uLy4uL2ljb25zL0Nsb3NlTWVudSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9ncmFwaGljcy9JY29uJztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uLy4uL2dyYXBoaWNzL0FjY291bnQnO1xuaW1wb3J0IExvY2FsaXplciBmcm9tICcuLi9Mb2NhbGl6ZXInO1xuaW1wb3J0IE5hdkdyb3VwIGZyb20gJy4uL05hdkdyb3VwJztcbmltcG9ydCBMb2dvdXQgZnJvbSAnLi4vTG9nb3V0JztcbmltcG9ydCB7IEVudGl0eVRvR3JvdXAsIEVudGl0eVR5cGUsIEdyb3VwLCBncm91cE5hdkl0ZW1zIH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL2dyb3VwTmF2SXRlbXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICduYXYnO1xuXG5jb25zdCBEZWZhdWx0TmF2ID0gKCkgPT4ge1xuICBjb25zdCB7IHBlcm1pc3Npb25zLCB1c2VyIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFttZW51QWN0aXZlLCBzZXRNZW51QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dyb3Vwcywgc2V0R3JvdXBzXSA9IHVzZVN0YXRlPEdyb3VwW10+KFtdKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7XG4gICAgY29sbGVjdGlvbnMsXG4gICAgZ2xvYmFscyxcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFkbWluLFxuICAgIH0sXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgYmVmb3JlTmF2TGlua3MsXG4gICAgICAgIGFmdGVyTmF2TGlua3MsXG4gICAgICB9LFxuICAgIH0sXG4gIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgIGJhc2VDbGFzcyxcbiAgICBtZW51QWN0aXZlICYmIGAke2Jhc2VDbGFzc30tLW1lbnUtYWN0aXZlYCxcbiAgXS5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0R3JvdXBzKGdyb3VwTmF2SXRlbXMoW1xuICAgICAgLi4uY29sbGVjdGlvbnNcbiAgICAgICAgLmZpbHRlcigoeyBhZG1pbjogeyBoaWRkZW4gfSB9KSA9PiAhKHR5cGVvZiBoaWRkZW4gPT09ICdmdW5jdGlvbicgPyBoaWRkZW4oeyB1c2VyIH0pIDogaGlkZGVuKSlcbiAgICAgICAgLm1hcCgoY29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGVudGl0eVRvR3JvdXA6IEVudGl0eVRvR3JvdXAgPSB7XG4gICAgICAgICAgICB0eXBlOiBFbnRpdHlUeXBlLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICBlbnRpdHk6IGNvbGxlY3Rpb24sXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBlbnRpdHlUb0dyb3VwO1xuICAgICAgICB9KSxcbiAgICAgIC4uLmdsb2JhbHNcbiAgICAgICAgLmZpbHRlcigoeyBhZG1pbjogeyBoaWRkZW4gfSB9KSA9PiAhKHR5cGVvZiBoaWRkZW4gPT09ICdmdW5jdGlvbicgPyBoaWRkZW4oeyB1c2VyIH0pIDogaGlkZGVuKSlcbiAgICAgICAgLm1hcCgoZ2xvYmFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50aXR5VG9Hcm91cDogRW50aXR5VG9Hcm91cCA9IHtcbiAgICAgICAgICAgIHR5cGU6IEVudGl0eVR5cGUuZ2xvYmFsLFxuICAgICAgICAgICAgZW50aXR5OiBnbG9iYWwsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJldHVybiBlbnRpdHlUb0dyb3VwO1xuICAgICAgICB9KSxcbiAgICBdLCBwZXJtaXNzaW9ucywgaTE4bikpO1xuICB9LCBbY29sbGVjdGlvbnMsIGdsb2JhbHMsIHBlcm1pc3Npb25zLCBpMThuLCBpMThuLmxhbmd1YWdlLCB1c2VyXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKCgpID0+IHtcbiAgICBzZXRNZW51QWN0aXZlKGZhbHNlKTtcbiAgfSksIFtoaXN0b3J5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19zY3JvbGxgfT5cbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89e2FkbWlufVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19icmFuZGB9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdkYXNoYm9hcmQnKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbW9iaWxlLW1lbnUtYnRuYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1lbnVBY3RpdmUoIW1lbnVBY3RpdmUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51QWN0aXZlICYmIChcbiAgICAgICAgICAgICAgPENsb3NlTWVudSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHshbWVudUFjdGl2ZSAmJiAoXG4gICAgICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfT5cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShiZWZvcmVOYXZMaW5rcykgJiYgYmVmb3JlTmF2TGlua3MubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICAgICAge2dyb3Vwcy5tYXAoKHsgbGFiZWwsIGVudGl0aWVzIH0sIGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE5hdkdyb3VwIHsuLi57IGtleSwgbGFiZWwgfX0+XG4gICAgICAgICAgICAgICAge2VudGl0aWVzLm1hcCgoeyBlbnRpdHksIHR5cGUgfSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eUxhYmVsOiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgICBsZXQgaHJlZjogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmc7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBFbnRpdHlUeXBlLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZiA9IGAke2FkbWlufS9jb2xsZWN0aW9ucy8ke2VudGl0eS5zbHVnfWA7XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUxhYmVsID0gZ2V0VHJhbnNsYXRpb24oZW50aXR5LmxhYmVscy5wbHVyYWwsIGkxOG4pO1xuICAgICAgICAgICAgICAgICAgICBpZCA9IGBuYXYtJHtlbnRpdHkuc2x1Z31gO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gRW50aXR5VHlwZS5nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZiA9IGAke2FkbWlufS9nbG9iYWxzLyR7ZW50aXR5LnNsdWd9YDtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5TGFiZWwgPSBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWwsIGkxOG4pO1xuICAgICAgICAgICAgICAgICAgICBpZCA9IGBuYXYtZ2xvYmFsLSR7ZW50aXR5LnNsdWd9YDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19saW5rYH1cbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICB0bz17aHJlZn1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2VudGl0eUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L05hdkdyb3VwPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7QXJyYXkuaXNBcnJheShhZnRlck5hdkxpbmtzKSAmJiBhZnRlck5hdkxpbmtzLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19jb250cm9sc2B9PlxuICAgICAgICAgICAgPExvY2FsaXplciAvPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89e2Ake2FkbWlufS9hY2NvdW50YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19hY2NvdW50YH1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnYXV0aGVudGljYXRpb246YWNjb3VudCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWNjb3VudCAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExvZ291dCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXG5jb25zdCBOYXY6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTmF2OiBDdXN0b21OYXYsXG4gICAgICB9ID0ge1xuICAgICAgICBOYXY6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgfSA9IHt9LFxuICB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVuZGVyQ3VzdG9tQ29tcG9uZW50XG4gICAgICBDdXN0b21Db21wb25lbnQ9e0N1c3RvbU5hdn1cbiAgICAgIERlZmF1bHRDb21wb25lbnQ9e0RlZmF1bHROYXZ9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEZWZhdWx0TmF2IiwidXNlQXV0aCIsInBlcm1pc3Npb25zIiwidXNlciIsInVzZVN0YXRlIiwibWVudUFjdGl2ZSIsInNldE1lbnVBY3RpdmUiLCJncm91cHMiLCJzZXRHcm91cHMiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJ1c2VDb25maWciLCJjb2xsZWN0aW9ucyIsImdsb2JhbHMiLCJyb3V0ZXMiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJiZWZvcmVOYXZMaW5rcyIsImFmdGVyTmF2TGlua3MiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJ1c2VFZmZlY3QiLCJncm91cE5hdkl0ZW1zIiwiaGlkZGVuIiwibWFwIiwiY29sbGVjdGlvbiIsImVudGl0eVRvR3JvdXAiLCJ0eXBlIiwiRW50aXR5VHlwZSIsImVudGl0eSIsImdsb2JhbCIsImxhbmd1YWdlIiwibGlzdGVuIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJoZWFkZXIiLCJMaW5rIiwidG8iLCJhcmlhLWxhYmVsIiwiSWNvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJDbG9zZU1lbnUiLCJNZW51IiwibmF2IiwiQXJyYXkiLCJpc0FycmF5IiwiQ29tcG9uZW50IiwiaSIsImtleSIsImxhYmVsIiwiZW50aXRpZXMiLCJOYXZHcm91cCIsImVudGl0eUxhYmVsIiwiaHJlZiIsImlkIiwic2x1ZyIsImdldFRyYW5zbGF0aW9uIiwibGFiZWxzIiwicGx1cmFsIiwiTmF2TGluayIsImFjdGl2ZUNsYXNzTmFtZSIsIkNoZXZyb24iLCJMb2NhbGl6ZXIiLCJBY2NvdW50IiwiTG9nb3V0IiwiTmF2IiwidW5kZWZpbmVkIiwiQ3VzdG9tTmF2IiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwiQ3VzdG9tQ29tcG9uZW50IiwiRGVmYXVsdENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkErS0E7OztlQUFBOzs7NkRBL0syQzs4QkFDRDs0QkFDWDtzQkFDTDtvQkFDRjs0RUFDVTs4REFDZDsyREFDSDtnRUFDSzsyREFDTDs4REFDRztnRUFDRTsrREFDRDs2REFDRjs2QkFDNkM7OEJBQ2pDO1FBRXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxhQUFhO0lBQ2pCLElBQThCQyxXQUFBQSxJQUFBQSxhQUFPLEtBQTdCQyxjQUFzQkQsU0FBdEJDLGFBQWFDLE9BQVNGLFNBQVRFO0lBQ3JCLElBQW9DQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDLFlBQXRDQyxhQUE2QkQsY0FBakJFLGdCQUFpQkY7SUFDcEMsSUFBNEJBLDhCQUFBQSxJQUFBQSxlQUFRLEVBQVUsRUFBRSxPQUF6Q0csU0FBcUJILGVBQWJJLFlBQWFKO0lBQzVCLElBQU1LLFVBQVVDLElBQUFBLDBCQUFVO0lBQzFCLElBQW9CQyxrQkFBQUEsSUFBQUEsNEJBQWMsRUFBQyxZQUEzQkMsSUFBWUQsZ0JBQVpDLEdBQUdDLE9BQVNGLGdCQUFURTtJQUNYLElBWUlDLGFBQUFBLElBQUFBLGlCQUFTLEtBWFhDLGNBV0VELFdBWEZDLGFBQ0FDLFVBVUVGLFdBVkZFLFNBQ0FDLEFBQ0VDLFFBUUFKLFdBVEZHLE9BQ0VDLDBCQVFBSixXQU5GSSxzREFDRUMsWUFDRUMsNkNBQUFBLGdCQUNBQyw0Q0FBQUE7SUFLTixJQUFNQyxVQUFVO1FBQ2R2QjtRQUNBTSxjQUFjLEFBQUMsR0FBWSxPQUFWTixXQUFVO0tBQzVCLENBQUN3QixNQUFNLENBQUNDLFNBQ05DLElBQUksQ0FBQztJQUVSQyxJQUFBQSxnQkFBUyxFQUFDO1FB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