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
var _Eyebrow = /*#__PURE__*/ _interop_require_default(require("../../elements/Eyebrow"));
var _Card = /*#__PURE__*/ _interop_require_default(require("../../elements/Card"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
var _Gutter = require("../../elements/Gutter");
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
var baseClass = "dashboard";
var Dashboard = function(props) {
    var collections = props.collections, globals = props.globals, permissions = props.permissions, user = props.user;
    var push = (0, _reactrouterdom.useHistory)().push;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useConfig = (0, _Config.useConfig)(), admin = _useConfig.routes.admin, _useConfig_admin = _useConfig.admin, _useConfig_admin_components = _useConfig_admin.components, afterDashboard = _useConfig_admin_components.afterDashboard, beforeDashboard = _useConfig_admin_components.beforeDashboard;
    var _useState = _sliced_to_array((0, _react.useState)([]), 2), groups = _useState[0], setGroups = _useState[1];
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
        i18n,
        permissions,
        user
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Eyebrow.default, null), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, Array.isArray(beforeDashboard) && beforeDashboard.map(function(Component, i) {
        return /*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        });
    }), groups.map(function(param, groupIndex) {
        var label = param.label, entities = param.entities;
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, {
            key: groupIndex
        }, /*#__PURE__*/ _react.default.createElement("h2", {
            className: "".concat(baseClass, "__label")
        }, label), /*#__PURE__*/ _react.default.createElement("ul", {
            className: "".concat(baseClass, "__card-list")
        }, entities.map(function(param, entityIndex) {
            var entity = param.entity, type = param.type;
            var title;
            var buttonAriaLabel;
            var createHREF;
            var onClick;
            var hasCreatePermission;
            if (type === _groupNavItems.EntityType.collection) {
                var _permissions_collections_entity_slug_create, _permissions_collections_entity_slug, _permissions_collections, _permissions;
                title = (0, _getTranslation.getTranslation)(entity.labels.plural, i18n);
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
            if (type === _groupNavItems.EntityType.global) {
                title = (0, _getTranslation.getTranslation)(entity.label, i18n);
                buttonAriaLabel = t("editLabel", {
                    label: (0, _getTranslation.getTranslation)(entity.label, i18n)
                });
                onClick = function() {
                    return push({
                        pathname: "".concat(admin, "/globals/").concat(entity.slug)
                    });
                };
            }
            return /*#__PURE__*/ _react.default.createElement("li", {
                key: entityIndex
            }, /*#__PURE__*/ _react.default.createElement(_Card.default, {
                title: title,
                titleAs: "h3",
                id: "card-".concat(entity.slug),
                onClick: onClick,
                buttonAriaLabel: buttonAriaLabel,
                actions: hasCreatePermission && type === _groupNavItems.EntityType.collection ? /*#__PURE__*/ _react.default.createElement(_Button.default, {
                    el: "link",
                    to: createHREF,
                    icon: "plus",
                    round: true,
                    buttonStyle: "icon-label",
                    iconStyle: "with-border",
                    "aria-label": t("createNewLabel", {
                        label: (0, _getTranslation.getTranslation)(entity.labels.singular, i18n)
                    })
                }) : undefined
            }));
        })));
    }), Array.isArray(afterDashboard) && afterDashboard.map(function(Component, i) {
        return /*#__PURE__*/ _react.default.createElement(Component, {
            key: i
        });
    })));
};
var _default = Dashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL0Rhc2hib2FyZC9EZWZhdWx0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcblxuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9lbGVtZW50cy9DYXJkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vZWxlbWVudHMvQnV0dG9uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9HdXR0ZXInO1xuaW1wb3J0IHsgRW50aXR5VG9Hcm91cCwgRW50aXR5VHlwZSwgR3JvdXAsIGdyb3VwTmF2SXRlbXMgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvZ3JvdXBOYXZJdGVtcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2Rhc2hib2FyZCc7XG5cbmNvbnN0IERhc2hib2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xsZWN0aW9ucyxcbiAgICBnbG9iYWxzLFxuICAgIHBlcm1pc3Npb25zLFxuICAgIHVzZXIsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHB1c2ggfSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgeyB0LCBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIGNvbnN0IHtcbiAgICByb3V0ZXM6IHtcbiAgICAgIGFkbWluLFxuICAgIH0sXG4gICAgYWRtaW46IHtcbiAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgYWZ0ZXJEYXNoYm9hcmQsXG4gICAgICAgIGJlZm9yZURhc2hib2FyZCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IFtncm91cHMsIHNldEdyb3Vwc10gPSB1c2VTdGF0ZTxHcm91cFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRHcm91cHMoZ3JvdXBOYXZJdGVtcyhbXG4gICAgICAuLi5jb2xsZWN0aW9uc1xuICAgICAgICAuZmlsdGVyKCh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+ICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pKVxuICAgICAgICAubWFwKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgZW50aXR5VG9Hcm91cDogRW50aXR5VG9Hcm91cCA9IHtcbiAgICAgICAgICAgIHR5cGU6IEVudGl0eVR5cGUuY29sbGVjdGlvbixcbiAgICAgICAgICAgIGVudGl0eTogY29sbGVjdGlvbixcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGVudGl0eVRvR3JvdXA7XG4gICAgICAgIH0pLFxuICAgICAgLi4uZ2xvYmFsc1xuICAgICAgICAuZmlsdGVyKCh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+ICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pKVxuICAgICAgICAubWFwKChnbG9iYWwpID0+IHtcbiAgICAgICAgICBjb25zdCBlbnRpdHlUb0dyb3VwOiBFbnRpdHlUb0dyb3VwID0ge1xuICAgICAgICAgICAgdHlwZTogRW50aXR5VHlwZS5nbG9iYWwsXG4gICAgICAgICAgICBlbnRpdHk6IGdsb2JhbCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGVudGl0eVRvR3JvdXA7XG4gICAgICAgIH0pLFxuICAgIF0sIHBlcm1pc3Npb25zLCBpMThuKSk7XG4gIH0sIFtjb2xsZWN0aW9ucywgZ2xvYmFscywgaTE4biwgcGVybWlzc2lvbnMsIHVzZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIHtBcnJheS5pc0FycmF5KGJlZm9yZURhc2hib2FyZCkgJiYgYmVmb3JlRGFzaGJvYXJkLm1hcCgoQ29tcG9uZW50LCBpKSA9PiA8Q29tcG9uZW50IGtleT17aX0gLz4pfVxuICAgICAgICB7Z3JvdXBzLm1hcCgoeyBsYWJlbCwgZW50aXRpZXMgfSwgZ3JvdXBJbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtncm91cEluZGV4fT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWxgfT57bGFiZWx9PC9oMj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY2FyZC1saXN0YH0+XG4gICAgICAgICAgICAgICAge2VudGl0aWVzLm1hcCgoeyBlbnRpdHksIHR5cGUgfSwgZW50aXR5SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxldCB0aXRsZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbkFyaWFMYWJlbDogc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgbGV0IGNyZWF0ZUhSRUY6IHN0cmluZztcbiAgICAgICAgICAgICAgICAgIGxldCBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgICAgICAgICAgICAgICAgbGV0IGhhc0NyZWF0ZVBlcm1pc3Npb246IGJvb2xlYW47XG5cbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBFbnRpdHlUeXBlLmNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWxzLnBsdXJhbCwgaTE4bik7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbCA9IHQoJ3Nob3dBbGxMYWJlbCcsIHsgbGFiZWw6IHRpdGxlIH0pO1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0gKCkgPT4gcHVzaCh7IHBhdGhuYW1lOiBgJHthZG1pbn0vY29sbGVjdGlvbnMvJHtlbnRpdHkuc2x1Z31gIH0pO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVIUkVGID0gYCR7YWRtaW59L2NvbGxlY3Rpb25zLyR7ZW50aXR5LnNsdWd9L2NyZWF0ZWA7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NyZWF0ZVBlcm1pc3Npb24gPSBwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltlbnRpdHkuc2x1Z10/LmNyZWF0ZT8ucGVybWlzc2lvbjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IEVudGl0eVR5cGUuZ2xvYmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gZ2V0VHJhbnNsYXRpb24oZW50aXR5LmxhYmVsLCBpMThuKTtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsID0gdCgnZWRpdExhYmVsJywgeyBsYWJlbDogZ2V0VHJhbnNsYXRpb24oZW50aXR5LmxhYmVsLCBpMThuKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9ICgpID0+IHB1c2goeyBwYXRobmFtZTogYCR7YWRtaW59L2dsb2JhbHMvJHtlbnRpdHkuc2x1Z31gIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtlbnRpdHlJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlQXM9XCJoM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17YGNhcmQtJHtlbnRpdHkuc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbD17YnV0dG9uQXJpYUxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17KGhhc0NyZWF0ZVBlcm1pc3Npb24gJiYgdHlwZSA9PT0gRW50aXR5VHlwZS5jb2xsZWN0aW9uKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2NyZWF0ZUhSRUZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInBsdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJpY29uLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uU3R5bGU9XCJ3aXRoLWJvcmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnY3JlYXRlTmV3TGFiZWwnLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihlbnRpdHkubGFiZWxzLnNpbmd1bGFyLCBpMThuKSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICB7QXJyYXkuaXNBcnJheShhZnRlckRhc2hib2FyZCkgJiYgYWZ0ZXJEYXNoYm9hcmQubWFwKChDb21wb25lbnQsIGkpID0+IDxDb21wb25lbnQga2V5PXtpfSAvPil9XG4gICAgICA8L0d1dHRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJEYXNoYm9hcmQiLCJwcm9wcyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsInBlcm1pc3Npb25zIiwidXNlciIsInB1c2giLCJ1c2VIaXN0b3J5IiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInVzZUNvbmZpZyIsInJvdXRlcyIsImFkbWluIiwiY29tcG9uZW50cyIsImFmdGVyRGFzaGJvYXJkIiwiYmVmb3JlRGFzaGJvYXJkIiwidXNlU3RhdGUiLCJncm91cHMiLCJzZXRHcm91cHMiLCJ1c2VFZmZlY3QiLCJncm91cE5hdkl0ZW1zIiwiZmlsdGVyIiwiaGlkZGVuIiwibWFwIiwiY29sbGVjdGlvbiIsImVudGl0eVRvR3JvdXAiLCJ0eXBlIiwiRW50aXR5VHlwZSIsImVudGl0eSIsImdsb2JhbCIsImRpdiIsImNsYXNzTmFtZSIsIkV5ZWJyb3ciLCJHdXR0ZXIiLCJBcnJheSIsImlzQXJyYXkiLCJDb21wb25lbnQiLCJpIiwia2V5IiwiZ3JvdXBJbmRleCIsImxhYmVsIiwiZW50aXRpZXMiLCJSZWFjdCIsIkZyYWdtZW50IiwiaDIiLCJ1bCIsImVudGl0eUluZGV4IiwidGl0bGUiLCJidXR0b25BcmlhTGFiZWwiLCJjcmVhdGVIUkVGIiwib25DbGljayIsImhhc0NyZWF0ZVBlcm1pc3Npb24iLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVscyIsInBsdXJhbCIsInBhdGhuYW1lIiwic2x1ZyIsImNyZWF0ZSIsInBlcm1pc3Npb24iLCJsaSIsIkNhcmQiLCJ0aXRsZUFzIiwiaWQiLCJhY3Rpb25zIiwiQnV0dG9uIiwiZWwiLCJ0byIsImljb24iLCJyb3VuZCIsImJ1dHRvblN0eWxlIiwiaWNvblN0eWxlIiwiYXJpYS1sYWJlbCIsInNpbmd1bGFyIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7OytCQW1JQTs7O2VBQUE7Ozs2REFuSTJDOzhCQUNoQjs0QkFDSTtzQkFDTDs4REFFTjsyREFDSDs2REFDRTtzQkFFSTs2QkFDeUM7OEJBQ2pDO1FBRXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxZQUE2QixTQUFDQztJQUNsQyxJQUNFQyxjQUlFRCxNQUpGQyxhQUNBQyxVQUdFRixNQUhGRSxTQUNBQyxjQUVFSCxNQUZGRyxhQUNBQyxPQUNFSixNQURGSTtJQUdGLElBQU0sQUFBRUMsT0FBU0MsSUFBQUEsMEJBQVUsSUFBbkJEO0lBQ1IsSUFBb0JFLGtCQUFBQSxJQUFBQSw0QkFBYyxFQUFDLFlBQTNCQyxJQUFZRCxnQkFBWkMsR0FBR0MsT0FBU0YsZ0JBQVRFO0lBRVgsSUFVSUMsYUFBQUEsSUFBQUEsaUJBQVMsS0FUWEMsQUFDRUMsUUFRQUYsV0FURkMsT0FDRUMsMEJBUUFGLFdBTkZFLHNEQUNFQyxZQUNFQyw2Q0FBQUEsZ0JBQ0FDLDhDQUFBQTtJQUtOLElBQTRCQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFVLEVB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