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
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import Eyebrow from "../../elements/Eyebrow";
import Card from "../../elements/Card";
import Button from "../../elements/Button";
import { Gutter } from "../../elements/Gutter";
import { EntityType, groupNavItems } from "../../../utilities/groupNavItems";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "dashboard";
var Dashboard = function(props) {
    var collections = props.collections, globals = props.globals, permissions = props.permissions, user = props.user;
    var push = useHistory().push;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useConfig = useConfig(), admin = _useConfig.routes.admin, _useConfig_admin = _useConfig.admin, _useConfig_admin_components = _useConfig_admin.components, afterDashboard = _useConfig_admin_components.afterDashboard, beforeDashboard = _useConfig_admin_components.beforeDashboard;
    var _useState = _sliced_to_array(useState([]), 2), groups = _useState[0], setGroups = _useState[1];
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
        i18n,
        permissions,
        user
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Eyebrow, null), /*#__PURE__*/ React.createElement(Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, Array.isArray(beforeDashboard) && beforeDashboard.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, {
            key: i
        });
    }), groups.map(function(param, groupIndex) {
        var label = param.label, entities = param.entities;
        return /*#__PURE__*/ React.createElement(React.Fragment, {
            key: groupIndex
        }, /*#__PURE__*/ React.createElement("h2", {
            className: "".concat(baseClass, "__label")
        }, label), /*#__PURE__*/ React.createElement("ul", {
            className: "".concat(baseClass, "__card-list")
        }, entities.map(function(param, entityIndex) {
            var entity = param.entity, type = param.type;
            var title;
            var buttonAriaLabel;
            var createHREF;
            var onClick;
            var hasCreatePermission;
            if (type === EntityType.collection) {
                var _permissions_collections_entity_slug_create, _permissions_collections_entity_slug, _permissions_collections, _permissions;
                title = getTranslation(entity.labels.plural, i18n);
                buttonAriaLabel = t("showAllLabel", {
                    label: title
                });
                onClick = function() {
                    return push({
                        pathname: "".concat(admin, "/collections/").concat(entity.slug)
                    });
                };
                createHREF = "".concat(admin, "/collections/").concat(entity.slug, "/create");
                hasCreatePermission = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : (_permissions_collections_entity_slug = _permissions_collections[entity.slug]) === null || _permissions_collections_entity_slug === void 0 ? void 0 : (_permissions_collections_entity_slug_create = _permissions_collections_entity_slug.create) === null || _permissions_collections_entity_slug_create === void 0 ? void 0 : _permissions_collections_entity_slug_create.permission;
            }
            if (type === EntityType.global) {
                title = getTranslation(entity.label, i18n);
                buttonAriaLabel = t("editLabel", {
                    label: getTranslation(entity.label, i18n)
                });
                onClick = function() {
                    return push({
                        pathname: "".concat(admin, "/globals/").concat(entity.slug)
                    });
                };
            }
            return /*#__PURE__*/ React.createElement("li", {
                key: entityIndex
            }, /*#__PURE__*/ React.createElement(Card, {
                title: title,
                titleAs: "h3",
                id: "card-".concat(entity.slug),
                onClick: onClick,
                buttonAriaLabel: buttonAriaLabel,
                actions: hasCreatePermission && type === EntityType.collection ? /*#__PURE__*/ React.createElement(Button, {
                    el: "link",
                    to: createHREF,
                    icon: "plus",
                    round: true,
                    buttonStyle: "icon-label",
                    iconStyle: "with-border",
                    "aria-label": t("createNewLabel", {
                        label: getTranslation(entity.labels.singular, i18n)
                    })
                }) : undefined
            }));
        })));
    }), Array.isArray(afterDashboard) && afterDashboard.map(function(Component, i) {
        return /*#__PURE__*/ React.createElement(Component, {
            key: i
        });
    })));
};
export default Dashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0Rhc2hib2FyZC9EZWZhdWx0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcblxuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9lbGVtZW50cy9DYXJkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9HdXR0ZXInO1xuaW1wb3J0IHsgRW50aXR5VG9Hcm91cCwgRW50aXR5VHlwZSwgR3JvdXAsIGdyb3VwTmF2SXRlbXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvZ3JvdXBOYXZJdGVtcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Rhc2hib2FyZCc7XG5cbmNvbnN0IERhc2hib2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9ucyxcbiAgICBnbG9iYWxzLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIHVzZXIsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHB1c2ggfSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFkbWluLFxuICAgIH0sXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgYWZ0ZXJEYXNoYm9hcmQsXG4gICAgICAgIGJlZm9yZURhc2hib2FyZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IFtncm91cHMsIHNldEdyb3Vwc10gPSB1c2VTdGF0ZTxHcm91cFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRHcm91cHMoZ3JvdXBOYXZJdGVtcyhbXG4gICAgICAuLi5jb2xsZWN0aW9uc1xuICAgICAgICAuZmlsdGVyKCh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+ICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pKVxuICAgICAgICAubWFwKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50aXR5VG9Hcm91cDogRW50aXR5VG9Hcm91cCA9IHtcbiAgICAgICAgICAgIHR5cGU6IEVudGl0eVR5cGUuY29sbGVjdGlvbixcbiAgICAgICAgICAgIGVudGl0eTogY29sbGVjdGlvbixcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGVudGl0eVRvR3JvdXA7XG4gICAgICAgIH0pLFxuICAgICAgLi4uZ2xvYmFsc1xuICAgICAgICAuZmlsdGVyKCh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+ICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pKVxuICAgICAgICAubWFwKChnbG9iYWwpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRpdHlUb0dyb3VwOiBFbnRpdHlUb0dyb3VwID0ge1xuICAgICAgICAgICAgdHlwZTogRW50aXR5VHlwZS5nbG9iYWwsXG4gICAgICAgICAgICBlbnRpdHk6IGdsb2JhbCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGVudGl0eVRvR3JvdXA7XG4gICAgICAgIH0pLFxuICAgIF0sIHBlcm1pc3Npb25zLCBpMThuKSk7XG4gIH0sIFtjb2xsZWN0aW9ucywgZ2xvYmFscywgaTE4biwgcGVybWlzc2lvbnMsIHVzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIHtBcnJheS5pc0FycmF5KGJlZm9yZURhc2hib2FyZCkgJiYgYmVmb3JlRGFzaGJvYXJkLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICB7Z3JvdXBzLm1hcCgoeyBsYWJlbCwgZW50aXRpZXMgfSwgZ3JvdXBJbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtncm91cEluZGV4fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT57bGFiZWx9PC9oMj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY2FyZC1saXN0YH0+XG4gICAgICAgICAgICAgICAge2VudGl0aWVzLm1hcCgoeyBlbnRpdHksIHR5cGUgfSwgZW50aXR5SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbkFyaWFMYWJlbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUhSRUY6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgIGxldCBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgICAgICAgICAgICAgICAgbGV0IGhhc0NyZWF0ZVBlcm1pc3Npb246IGJvb2xlYW47XG5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBFbnRpdHlUeXBlLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWxzLnBsdXJhbCwgaTE4bik7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbCA9IHQoJ3Nob3dBbGxMYWJlbCcsIHsgbGFiZWw6IHRpdGxlIH0pO1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0gKCkgPT4gcHVzaCh7IHBhdGhuYW1lOiBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtlbnRpdHkuc2x1Z31gIH0pO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVIUkVGID0gYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7ZW50aXR5LnNsdWd9L2NyZWF0ZWA7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NyZWF0ZVBlcm1pc3Npb24gPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltlbnRpdHkuc2x1Z10/LmNyZWF0ZT8ucGVybWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IEVudGl0eVR5cGUuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gZ2V0VHJhbnNsYXRpb24oZW50aXR5LmxhYmVsLCBpMThuKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsID0gdCgnZWRpdExhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oZW50aXR5LmxhYmVsLCBpMThuKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9ICgpID0+IHB1c2goeyBwYXRobmFtZTogYCR7YWRtaW59L2dsb2JhbHMvJHtlbnRpdHkuc2x1Z31gIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtlbnRpdHlJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQXM9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YGNhcmQtJHtlbnRpdHkuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbD17YnV0dG9uQXJpYUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17KGhhc0NyZWF0ZVBlcm1pc3Npb24gJiYgdHlwZSA9PT0gRW50aXR5VHlwZS5jb2xsZWN0aW9uKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2NyZWF0ZUhSRUZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU3R5bGU9XCJ3aXRoLWJvcmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnY3JlYXRlTmV3TGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWxzLnNpbmd1bGFyLCBpMThuKSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICB7QXJyYXkuaXNBcnJheShhZnRlckRhc2hib2FyZCkgJiYgYWZ0ZXJEYXNoYm9hcmQubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICA8L0d1dHRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlSGlzdG9yeSIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwiRXllYnJvdyIsIkNhcmQiLCJCdXR0b24iLCJHdXR0ZXIiLCJFbnRpdHlUeXBlIiwiZ3JvdXBOYXZJdGVtcyIsImdldFRyYW5zbGF0aW9uIiwiYmFzZUNsYXNzIiwiRGFzaGJvYXJkIiwicHJvcHMiLCJjb2xsZWN0aW9ucyIsImdsb2JhbHMiLCJwZXJtaXNzaW9ucyIsInVzZXIiLCJwdXNoIiwidCIsImkxOG4iLCJyb3V0ZXMiLCJhZG1pbiIsImNvbXBvbmVudHMiLCJhZnRlckRhc2hib2FyZCIsImJlZm9yZURhc2hib2FyZCIsImdyb3VwcyIsInNldEdyb3VwcyIsImZpbHRlciIsImhpZGRlbiIsIm1hcCIsImNvbGxlY3Rpb24iLCJlbnRpdHlUb0dyb3VwIiwidHlwZSIsImVudGl0eSIsImdsb2JhbCIsImRpdiIsImNsYXNzTmFtZSIsIkFycmF5IiwiaXNBcnJheSIsIkNvbXBvbmVudCIsImkiLCJrZXkiLCJncm91cEluZGV4IiwibGFiZWwiLCJlbnRpdGllcyIsIkZyYWdtZW50IiwiaDIiLCJ1bCIsImVudGl0eUluZGV4IiwidGl0bGUiLCJidXR0b25BcmlhTGFiZWwiLCJjcmVhdGVIUkVGIiwib25DbGljayIsImhhc0NyZWF0ZVBlcm1pc3Npb24iLCJsYWJlbHMiLCJwbHVyYWwiLCJwYXRobmFtZSIsInNsdWciLCJjcmVhdGUiLCJwZXJtaXNzaW9uIiwibGkiLCJ0aXRsZUFzIiwiaWQiLCJhY3Rpb25zIiwiZWwiLCJ0byIsImljb24iLCJyb3VuZCIsImJ1dHRvblN0eWxlIiwiaWNvblN0eWxlIiwiYXJpYS1sYWJlbCIsInNpbmd1bGFyIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNuRCxTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLHlCQUF5QjtBQUVuRCxPQUFPQyxhQUFhLHlCQUF5QjtBQUM3QyxPQUFPQyxVQUFVLHNCQUFzQjtBQUN2QyxPQUFPQyxZQUFZLHdCQUF3QjtBQUUzQyxTQUFTQyxNQUFNLFFBQVEsd0JBQXdCO0FBQy9DLFNBQXdCQyxVQUFVLEVBQVNDLGFBQWEsUUFBUSxtQ0FBbUM7QUFDbkcsU0FBU0MsY0FBYyxRQUFRLHVDQUF1QztBQUV0RSxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxZQUE2QixTQUFDQztJQUNsQyxJQUNFQyxjQUlFRCxNQUpGQyxhQUNBQyxVQUdFRixNQUhGRSxTQUNBQyxjQUVFSCxNQUZGRyxhQUNBQyxPQUNFSixNQURGSTtJQUdGLElBQU0sQUFBRUMsT0FBU2pCLGFBQVRpQjtJQUNSLElBQW9CaEIsa0JBQUFBLGVBQWUsWUFBM0JpQixJQUFZakIsZ0JBQVpp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