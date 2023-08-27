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
import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "./utilities/Auth";
import { useConfig } from "./utilities/Config";
import List from "./views/collections/List";
import DefaultTemplate from "./templates/Default";
import { requests } from "../api";
import StayLoggedIn from "./modals/StayLoggedIn";
import Versions from "./views/Versions";
import Version from "./views/Version";
import { DocumentInfoProvider } from "./utilities/DocumentInfo";
import { useLocale } from "./utilities/Locale";
import { LoadingOverlayToggle } from "./elements/Loading";
var Dashboard = /*#__PURE__*/ lazy(function() {
    return import("./views/Dashboard");
});
var ForgotPassword = /*#__PURE__*/ lazy(function() {
    return import("./views/ForgotPassword");
});
var Login = /*#__PURE__*/ lazy(function() {
    return import("./views/Login");
});
var Logout = /*#__PURE__*/ lazy(function() {
    return import("./views/Logout");
});
var NotFound = /*#__PURE__*/ lazy(function() {
    return import("./views/NotFound");
});
var Verify = /*#__PURE__*/ lazy(function() {
    return import("./views/Verify");
});
var CreateFirstUser = /*#__PURE__*/ lazy(function() {
    return import("./views/CreateFirstUser");
});
var Edit = /*#__PURE__*/ lazy(function() {
    return import("./views/collections/Edit");
});
var EditGlobal = /*#__PURE__*/ lazy(function() {
    return import("./views/Global");
});
var ResetPassword = /*#__PURE__*/ lazy(function() {
    return import("./views/ResetPassword");
});
var Unauthorized = /*#__PURE__*/ lazy(function() {
    return import("./views/Unauthorized");
});
var Account = /*#__PURE__*/ lazy(function() {
    return import("./views/Account");
});
var Routes = function() {
    var _permissions;
    var _useState = _sliced_to_array(useState(null), 2), initialized = _useState[0], setInitialized = _useState[1];
    var _useAuth = useAuth(), user = _useAuth.user, permissions = _useAuth.permissions, refreshCookie = _useAuth.refreshCookie;
    var i18n = useTranslation().i18n;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var canAccessAdmin = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : _permissions.canAccessAdmin;
    var config = useConfig();
    var _config_admin = config.admin, userSlug = _config_admin.user, logoutRoute = _config_admin.logoutRoute, logoutInactivityRoute = _config_admin.inactivityRoute, tmp = _config_admin.components, _ref = tmp === void 0 ? {} : tmp, customRoutes = _ref.routes, routes = config.routes, collections = config.collections, globals = config.globals;
    var isLoadingUser = Boolean(typeof user === "undefined" || user && typeof canAccessAdmin === "undefined");
    var userCollection = collections.find(function(param) {
        var slug = param.slug;
        return slug === userSlug;
    });
    useEffect(function() {
        var slug = userCollection.slug;
        if (!userCollection.auth.disableLocalStrategy) {
            requests.get("".concat(routes.api, "/").concat(slug, "/init"), {
                headers: {
                    "Accept-Language": i18n.language
                }
            }).then(function(res) {
                return res.json().then(function(data) {
                    if (data && "initialized" in data) {
                        setInitialized(data.initialized);
                    }
                });
            });
        } else {
            setInitialized(true);
        }
    }, [
        i18n.language,
        routes,
        userCollection
    ]);
    return /*#__PURE__*/ React.createElement(Suspense, {
        fallback: /*#__PURE__*/ React.createElement(LoadingOverlayToggle, {
            show: true,
            name: "route-suspense"
        })
    }, /*#__PURE__*/ React.createElement(LoadingOverlayToggle, {
        name: "route-loader",
        show: isLoadingUser
    }), /*#__PURE__*/ React.createElement(Route, {
        path: routes.admin,
        render: function(param) {
            var match = param.match;
            if (initialized === false) {
                return /*#__PURE__*/ React.createElement(Switch, null, /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url, "/create-first-user")
                }, /*#__PURE__*/ React.createElement(CreateFirstUser, {
                    setInitialized: setInitialized
                })), /*#__PURE__*/ React.createElement(Route, null, /*#__PURE__*/ React.createElement(Redirect, {
                    to: "".concat(match.url, "/create-first-user")
                })));
            }
            if (initialized === true && !isLoadingUser) {
                return /*#__PURE__*/ React.createElement(Switch, null, Array.isArray(customRoutes) && customRoutes.map(function(param) {
                    var path = param.path, Component = param.Component, strict = param.strict, exact = param.exact, sensitive = param.sensitive;
                    return /*#__PURE__*/ React.createElement(Route, {
                        key: "".concat(match.url).concat(path),
                        path: "".concat(match.url).concat(path),
                        strict: strict,
                        exact: exact,
                        sensitive: sensitive
                    }, /*#__PURE__*/ React.createElement(Component, {
                        user: user,
                        canAccessAdmin: canAccessAdmin
                    }));
                }), /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url, "/login")
                }, /*#__PURE__*/ React.createElement(Login, null)), /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url).concat(logoutRoute)
                }, /*#__PURE__*/ React.createElement(Logout, null)), /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url).concat(logoutInactivityRoute)
                }, /*#__PURE__*/ React.createElement(Logout, {
                    inactivity: true
                })), !userCollection.auth.disableLocalStrategy && /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url, "/forgot")
                }, /*#__PURE__*/ React.createElement(ForgotPassword, null)), !userCollection.auth.disableLocalStrategy && /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url, "/reset/:token")
                }, /*#__PURE__*/ React.createElement(ResetPassword, null)), collections.map(function(collection) {
                    var _collection_auth, _collection;
                    if (((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_auth = _collection.auth) === null || _collection_auth === void 0 ? void 0 : _collection_auth.verify) && !collection.auth.disableLocalStrategy) {
                        return /*#__PURE__*/ React.createElement(Route, {
                            key: "".concat(collection.slug, "-verify"),
                            path: "".concat(match.url, "/").concat(collection.slug, "/verify/:token"),
                            exact: true
                        }, /*#__PURE__*/ React.createElement(Verify, {
                            collection: collection
                        }));
                    }
                    return null;
                }), /*#__PURE__*/ React.createElement(Route, null, user ? /*#__PURE__*/ React.createElement(Fragment, null, canAccessAdmin && /*#__PURE__*/ React.createElement(DefaultTemplate, null, /*#__PURE__*/ React.createElement(Switch, null, /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url, "/"),
                    exact: true
                }, /*#__PURE__*/ React.createElement(Dashboard, null)), /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url, "/account")
                }, /*#__PURE__*/ React.createElement(DocumentInfoProvider, {
                    collection: collections.find(function(param) {
                        var slug = param.slug;
                        return slug === userSlug;
                    }),
                    id: user.id
                }, /*#__PURE__*/ React.createElement(Account, null))), collections.filter(function(param) {
                    var hidden = param.admin.hidden;
                    return !(typeof hidden === "function" ? hidden({
                        user: user
                    }) : hidden);
                }).reduce(function(collectionRoutes, collection) {
                    var _permissions_collections_collection_slug_read, _permissions_collections_collection_slug, _permissions_collections, _permissions, _permissions_collections_collection_slug_create, _permissions_collections_collection_slug1, _permissions_collections1, _permissions1, _permissions_collections_collection_slug_read1, _permissions_collections_collection_slug2, _permissions_collections2, _permissions2;
                    var routesToReturn = _to_consumable_array(collectionRoutes).concat([
                        /*#__PURE__*/ React.createElement(Route, {
                            key: "".concat(collection.slug, "-list"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug),
                            exact: true
                        }, ((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : (_permissions_collections_collection_slug = _permissions_collections[collection.slug]) === null || _permissions_collections_collection_slug === void 0 ? void 0 : (_permissions_collections_collection_slug_read = _permissions_collections_collection_slug.read) === null || _permissions_collections_collection_slug_read === void 0 ? void 0 : _permissions_collections_collection_slug_read.permission) ? /*#__PURE__*/ React.createElement(List, {
                            collection: collection
                        }) : /*#__PURE__*/ React.createElement(Unauthorized, null)),
                        /*#__PURE__*/ React.createElement(Route, {
                            key: "".concat(collection.slug, "-create"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug, "/create"),
                            exact: true
                        }, ((_permissions1 = permissions) === null || _permissions1 === void 0 ? void 0 : (_permissions_collections1 = _permissions1.collections) === null || _permissions_collections1 === void 0 ? void 0 : (_permissions_collections_collection_slug1 = _permissions_collections1[collection.slug]) === null || _permissions_collections_collection_slug1 === void 0 ? void 0 : (_permissions_collections_collection_slug_create = _permissions_collections_collection_slug1.create) === null || _permissions_collections_collection_slug_create === void 0 ? void 0 : _permissions_collections_collection_slug_create.permission) ? /*#__PURE__*/ React.createElement(DocumentInfoProvider, {
                            collection: collection,
                            idFromParams: true
                        }, /*#__PURE__*/ React.createElement(Edit, {
                            collection: collection
                        })) : /*#__PURE__*/ React.createElement(Unauthorized, null)),
                        /*#__PURE__*/ React.createElement(Route, {
                            key: "".concat(collection.slug, "-edit"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug, "/:id"),
                            exact: true
                        }, ((_permissions2 = permissions) === null || _permissions2 === void 0 ? void 0 : (_permissions_collections2 = _permissions2.collections) === null || _permissions_collections2 === void 0 ? void 0 : (_permissions_collections_collection_slug2 = _permissions_collections2[collection.slug]) === null || _permissions_collections_collection_slug2 === void 0 ? void 0 : (_permissions_collections_collection_slug_read1 = _permissions_collections_collection_slug2.read) === null || _permissions_collections_collection_slug_read1 === void 0 ? void 0 : _permissions_collections_collection_slug_read1.permission) ? /*#__PURE__*/ React.createElement(DocumentInfoProvider, {
                            collection: collection,
                            idFromParams: true
                        }, /*#__PURE__*/ React.createElement(Edit, {
                            isEditing: true,
                            collection: collection
                        })) : /*#__PURE__*/ React.createElement(Unauthorized, null))
                    ]);
                    if (collection.versions) {
                        var _permissions_collections_collection_slug_readVersions, _permissions_collections_collection_slug3, _permissions_collections3, _permissions3, _permissions_collections_collection_slug_readVersions1, _permissions_collections_collection_slug4, _permissions_collections4, _permissions4;
                        routesToReturn.push(/*#__PURE__*/ React.createElement(Route, {
                            key: "".concat(collection.slug, "-versions"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug, "/:id/versions"),
                            exact: true
                        }, ((_permissions3 = permissions) === null || _permissions3 === void 0 ? void 0 : (_permissions_collections3 = _permissions3.collections) === null || _permissions_collections3 === void 0 ? void 0 : (_permissions_collections_collection_slug3 = _permissions_collections3[collection.slug]) === null || _permissions_collections_collection_slug3 === void 0 ? void 0 : (_permissions_collections_collection_slug_readVersions = _permissions_collections_collection_slug3.readVersions) === null || _permissions_collections_collection_slug_readVersions === void 0 ? void 0 : _permissions_collections_collection_slug_readVersions.permission) ? /*#__PURE__*/ React.createElement(Versions, {
                            collection: collection
                        }) : /*#__PURE__*/ React.createElement(Unauthorized, null)));
                        routesToReturn.push(/*#__PURE__*/ React.createElement(Route, {
                            key: "".concat(collection.slug, "-view-version"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug, "/:id/versions/:versionID"),
                            exact: true
                        }, ((_permissions4 = permissions) === null || _permissions4 === void 0 ? void 0 : (_permissions_collections4 = _permissions4.collections) === null || _permissions_collections4 === void 0 ? void 0 : (_permissions_collections_collection_slug4 = _permissions_collections4[collection.slug]) === null || _permissions_collections_collection_slug4 === void 0 ? void 0 : (_permissions_collections_collection_slug_readVersions1 = _permissions_collections_collection_slug4.readVersions) === null || _permissions_collections_collection_slug_readVersions1 === void 0 ? void 0 : _permissions_collections_collection_slug_readVersions1.permission) ? /*#__PURE__*/ React.createElement(DocumentInfoProvider, {
                            collection: collection,
                            idFromParams: true
                        }, /*#__PURE__*/ React.createElement(Version, {
                            collection: collection
                        })) : /*#__PURE__*/ React.createElement(Unauthorized, null)));
                    }
                    return routesToReturn;
                }, []), globals && globals.filter(function(param) {
                    var hidden = param.admin.hidden;
                    return !(typeof hidden === "function" ? hidden({
                        user: user
                    }) : hidden);
                }).reduce(function(globalRoutes, global) {
                    var _permissions_globals_global_slug_read, _permissions_globals_global_slug, _permissions_globals, _permissions;
                    var routesToReturn = _to_consumable_array(globalRoutes).concat([
                        /*#__PURE__*/ React.createElement(Route, {
                            key: global.slug,
                            path: "".concat(match.url, "/globals/").concat(global.slug),
                            exact: true
                        }, ((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_globals = _permissions.globals) === null || _permissions_globals === void 0 ? void 0 : (_permissions_globals_global_slug = _permissions_globals[global.slug]) === null || _permissions_globals_global_slug === void 0 ? void 0 : (_permissions_globals_global_slug_read = _permissions_globals_global_slug.read) === null || _permissions_globals_global_slug_read === void 0 ? void 0 : _permissions_globals_global_slug_read.permission) ? /*#__PURE__*/ React.createElement(DocumentInfoProvider, {
                            global: global,
                            key: "".concat(global.slug, "-").concat(locale),
                            idFromParams: true
                        }, /*#__PURE__*/ React.createElement(EditGlobal, {
                            global: global
                        })) : /*#__PURE__*/ React.createElement(Unauthorized, null))
                    ]);
                    if (global.versions) {
                        var _permissions_globals_global_slug_readVersions, _permissions_globals_global_slug1, _permissions_globals1, _permissions1, _permissions_globals_global_slug_readVersions1, _permissions_globals_global_slug2, _permissions_globals2, _permissions2;
                        routesToReturn.push(/*#__PURE__*/ React.createElement(Route, {
                            key: "".concat(global.slug, "-versions"),
                            path: "".concat(match.url, "/globals/").concat(global.slug, "/versions"),
                            exact: true
                        }, ((_permissions1 = permissions) === null || _permissions1 === void 0 ? void 0 : (_permissions_globals1 = _permissions1.globals) === null || _permissions_globals1 === void 0 ? void 0 : (_permissions_globals_global_slug1 = _permissions_globals1[global.slug]) === null || _permissions_globals_global_slug1 === void 0 ? void 0 : (_permissions_globals_global_slug_readVersions = _permissions_globals_global_slug1.readVersions) === null || _permissions_globals_global_slug_readVersions === void 0 ? void 0 : _permissions_globals_global_slug_readVersions.permission) ? /*#__PURE__*/ React.createElement(Versions, {
                            global: global
                        }) : /*#__PURE__*/ React.createElement(Unauthorized, null)));
                        routesToReturn.push(/*#__PURE__*/ React.createElement(Route, {
                            key: "".concat(global.slug, "-view-version"),
                            path: "".concat(match.url, "/globals/").concat(global.slug, "/versions/:versionID"),
                            exact: true
                        }, ((_permissions2 = permissions) === null || _permissions2 === void 0 ? void 0 : (_permissions_globals2 = _permissions2.globals) === null || _permissions_globals2 === void 0 ? void 0 : (_permissions_globals_global_slug2 = _permissions_globals2[global.slug]) === null || _permissions_globals_global_slug2 === void 0 ? void 0 : (_permissions_globals_global_slug_readVersions1 = _permissions_globals_global_slug2.readVersions) === null || _permissions_globals_global_slug_readVersions1 === void 0 ? void 0 : _permissions_globals_global_slug_readVersions1.permission) ? /*#__PURE__*/ React.createElement(Version, {
                            global: global
                        }) : /*#__PURE__*/ React.createElement(Unauthorized, null)));
                    }
                    return routesToReturn;
                }, []), /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url, "*")
                }, /*#__PURE__*/ React.createElement(NotFound, null)))), canAccessAdmin === false && /*#__PURE__*/ React.createElement(Unauthorized, null)) : /*#__PURE__*/ React.createElement(Redirect, {
                    to: "".concat(match.url, "/login").concat(window.location.pathname.startsWith(routes.admin) ? "?redirect=".concat(encodeURIComponent(window.location.pathname.replace(routes.admin, ""))) : "")
                })), /*#__PURE__*/ React.createElement(Route, {
                    path: "".concat(match.url, "*")
                }, /*#__PURE__*/ React.createElement(NotFound, null)));
            }
            return null;
        }
    }), /*#__PURE__*/ React.createElement(StayLoggedIn, {
        refreshCookie: refreshCookie
    }));
};
export default Routes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1JvdXRlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBsYXp5LCBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlZGlyZWN0LCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBMaXN0IGZyb20gJy4vdmlld3MvY29sbGVjdGlvbnMvTGlzdCc7XG5pbXBvcnQgRGVmYXVsdFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL0RlZmF1bHQnO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IFN0YXlMb2dnZWRJbiBmcm9tICcuL21vZGFscy9TdGF5TG9nZ2VkSW4nO1xuaW1wb3J0IFZlcnNpb25zIGZyb20gJy4vdmlld3MvVmVyc2lvbnMnO1xuaW1wb3J0IFZlcnNpb24gZnJvbSAnLi92aWV3cy9WZXJzaW9uJztcbmltcG9ydCB7IERvY3VtZW50SW5mb1Byb3ZpZGVyIH0gZnJvbSAnLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheVRvZ2dsZSB9IGZyb20gJy4vZWxlbWVudHMvTG9hZGluZyc7XG5cbmNvbnN0IERhc2hib2FyZCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0Rhc2hib2FyZCcpKTtcbmNvbnN0IEZvcmdvdFBhc3N3b3JkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvRm9yZ290UGFzc3dvcmQnKSk7XG5jb25zdCBMb2dpbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0xvZ2luJykpO1xuY29uc3QgTG9nb3V0ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvTG9nb3V0JykpO1xuY29uc3QgTm90Rm91bmQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9Ob3RGb3VuZCcpKTtcbmNvbnN0IFZlcmlmeSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL1ZlcmlmeScpKTtcbmNvbnN0IENyZWF0ZUZpcnN0VXNlciA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0NyZWF0ZUZpcnN0VXNlcicpKTtcbmNvbnN0IEVkaXQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9jb2xsZWN0aW9ucy9FZGl0JykpO1xuY29uc3QgRWRpdEdsb2JhbCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0dsb2JhbCcpKTtcbmNvbnN0IFJlc2V0UGFzc3dvcmQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9SZXNldFBhc3N3b3JkJykpO1xuY29uc3QgVW5hdXRob3JpemVkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvVW5hdXRob3JpemVkJykpO1xuY29uc3QgQWNjb3VudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0FjY291bnQnKSk7XG5cbmNvbnN0IFJvdXRlczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbml0aWFsaXplZCwgc2V0SW5pdGlhbGl6ZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgdXNlciwgcGVybWlzc2lvbnMsIHJlZnJlc2hDb29raWUgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG5cbiAgY29uc3QgY2FuQWNjZXNzQWRtaW4gPSBwZXJtaXNzaW9ucz8uY2FuQWNjZXNzQWRtaW47XG5cbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICB1c2VyOiB1c2VyU2x1ZyxcbiAgICAgIGxvZ291dFJvdXRlLFxuICAgICAgaW5hY3Rpdml0eVJvdXRlOiBsb2dvdXRJbmFjdGl2aXR5Um91dGUsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHJvdXRlczogY3VzdG9tUm91dGVzLFxuICAgICAgfSA9IHt9LFxuICAgIH0sXG4gICAgcm91dGVzLFxuICAgIGNvbGxlY3Rpb25zLFxuICAgIGdsb2JhbHMsXG4gIH0gPSBjb25maWc7XG5cbiAgY29uc3QgaXNMb2FkaW5nVXNlciA9IEJvb2xlYW4odHlwZW9mIHVzZXIgPT09ICd1bmRlZmluZWQnIHx8ICh1c2VyICYmIHR5cGVvZiBjYW5BY2Nlc3NBZG1pbiA9PT0gJ3VuZGVmaW5lZCcpKTtcbiAgY29uc3QgdXNlckNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gdXNlclNsdWcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSB1c2VyQ29sbGVjdGlvbjtcblxuICAgIGlmICghdXNlckNvbGxlY3Rpb24uYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSkge1xuICAgICAgcmVxdWVzdHMuZ2V0KGAke3JvdXRlcy5hcGl9LyR7c2x1Z30vaW5pdGAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgJ2luaXRpYWxpemVkJyBpbiBkYXRhKSB7XG4gICAgICAgICAgc2V0SW5pdGlhbGl6ZWQoZGF0YS5pbml0aWFsaXplZCk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SW5pdGlhbGl6ZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbaTE4bi5sYW5ndWFnZSwgcm91dGVzLCB1c2VyQ29sbGVjdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN1c3BlbnNlIGZhbGxiYWNrPXsoXG4gICAgICA8TG9hZGluZ092ZXJsYXlUb2dnbGVcbiAgICAgICAgc2hvd1xuICAgICAgICBuYW1lPVwicm91dGUtc3VzcGVuc2VcIlxuICAgICAgLz5cbiAgICApfVxuICAgID5cbiAgICAgIDxMb2FkaW5nT3ZlcmxheVRvZ2dsZVxuICAgICAgICBuYW1lPVwicm91dGUtbG9hZGVyXCJcbiAgICAgICAgc2hvdz17aXNMb2FkaW5nVXNlcn1cbiAgICAgIC8+XG4gICAgICA8Um91dGVcbiAgICAgICAgcGF0aD17cm91dGVzLmFkbWlufVxuICAgICAgICByZW5kZXI9eyh7IG1hdGNoIH0pID0+IHtcbiAgICAgICAgICBpZiAoaW5pdGlhbGl6ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9L2NyZWF0ZS1maXJzdC11c2VyYH0+XG4gICAgICAgICAgICAgICAgICA8Q3JlYXRlRmlyc3RVc2VyIHNldEluaXRpYWxpemVkPXtzZXRJbml0aWFsaXplZH0gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZT5cbiAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz17YCR7bWF0Y2gudXJsfS9jcmVhdGUtZmlyc3QtdXNlcmB9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbml0aWFsaXplZCA9PT0gdHJ1ZSAmJiAhaXNMb2FkaW5nVXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShjdXN0b21Sb3V0ZXMpICYmIGN1c3RvbVJvdXRlcy5tYXAoKHsgcGF0aCwgQ29tcG9uZW50LCBzdHJpY3QsIGV4YWN0LCBzZW5zaXRpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7bWF0Y2gudXJsfSR7cGF0aH1gfVxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtgJHttYXRjaC51cmx9JHtwYXRofWB9XG4gICAgICAgICAgICAgICAgICAgIHN0cmljdD17c3RyaWN0fVxuICAgICAgICAgICAgICAgICAgICBleGFjdD17ZXhhY3R9XG4gICAgICAgICAgICAgICAgICAgIHNlbnNpdGl2ZT17c2Vuc2l0aXZlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICBjYW5BY2Nlc3NBZG1pbj17Y2FuQWNjZXNzQWRtaW59XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9L2xvZ2luYH0+XG4gICAgICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9JHtsb2dvdXRSb3V0ZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxMb2dvdXQgLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9JHtsb2dvdXRJbmFjdGl2aXR5Um91dGV9YH0+XG4gICAgICAgICAgICAgICAgICA8TG9nb3V0IGluYWN0aXZpdHkgLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIHshdXNlckNvbGxlY3Rpb24uYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSAmJiAoXG4gICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS9mb3Jnb3RgfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcmdvdFBhc3N3b3JkIC8+XG4gICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7IXVzZXJDb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kgJiYgKFxuICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake21hdGNoLnVybH0vcmVzZXQvOnRva2VuYH0+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNldFBhc3N3b3JkIC8+XG4gICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7Y29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbj8uYXV0aD8udmVyaWZ5ICYmICFjb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS12ZXJpZnlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS8ke2NvbGxlY3Rpb24uc2x1Z30vdmVyaWZ5Lzp0b2tlbmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJpZnkgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8Um91dGU+XG4gICAgICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYW5BY2Nlc3NBZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVmYXVsdFRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS9hY2NvdW50YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jdW1lbnRJbmZvUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbnMuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHVzZXJTbHVnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3VzZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RvY3VtZW50SW5mb1Byb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbGxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+ICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoY29sbGVjdGlvblJvdXRlcywgY29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZXNUb1JldHVybiA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb2xsZWN0aW9uUm91dGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LWxpc3RgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bY29sbGVjdGlvbi5zbHVnXT8ucmVhZD8ucGVybWlzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxMaXN0IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPFVuYXV0aG9yaXplZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS1jcmVhdGVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vY3JlYXRlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LmNyZWF0ZT8ucGVybWlzc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvY3VtZW50SW5mb1Byb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZEZyb21QYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VW5hdXRob3JpemVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LWVkaXRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vOmlkYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N1bWVudEluZm9Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRGcm9tUGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPFVuYXV0aG9yaXplZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbi52ZXJzaW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlc1RvUmV0dXJuLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LXZlcnNpb25zYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vOmlkL3ZlcnNpb25zYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LnJlYWRWZXJzaW9ucz8ucGVybWlzc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVyc2lvbnMgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxVbmF1dGhvcml6ZWQgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzVG9SZXR1cm4ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvbGxlY3Rpb24uc2x1Z30tdmlldy12ZXJzaW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vOmlkL3ZlcnNpb25zLzp2ZXJzaW9uSURgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bY29sbGVjdGlvbi5zbHVnXT8ucmVhZFZlcnNpb25zPy5wZXJtaXNzaW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N1bWVudEluZm9Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkRnJvbVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJzaW9uIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Eb2N1bWVudEluZm9Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxVbmF1dGhvcml6ZWQgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlc1RvUmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxzICYmIGdsb2JhbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgYWRtaW46IHsgaGlkZGVuIH0gfSkgPT4gISh0eXBlb2YgaGlkZGVuID09PSAnZnVuY3Rpb24nID8gaGlkZGVuKHsgdXNlciB9KSA6IGhpZGRlbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChnbG9iYWxSb3V0ZXMsIGdsb2JhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZXNUb1JldHVybiA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5nbG9iYWxSb3V0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2dsb2JhbC5zbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5nbG9iYWxzPy5bZ2xvYmFsLnNsdWddPy5yZWFkPy5wZXJtaXNzaW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jdW1lbnRJbmZvUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWw9e2dsb2JhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2dsb2JhbC5zbHVnfS0ke2xvY2FsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkRnJvbVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRHbG9iYWwgZ2xvYmFsPXtnbG9iYWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPFVuYXV0aG9yaXplZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLnZlcnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzVG9SZXR1cm4ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2dsb2JhbC5zbHVnfS12ZXJzaW9uc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e2Ake21hdGNoLnVybH0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9uc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzaW9ucz8uZ2xvYmFscz8uW2dsb2JhbC5zbHVnXT8ucmVhZFZlcnNpb25zPy5wZXJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8VmVyc2lvbnMgZ2xvYmFsPXtnbG9iYWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8VW5hdXRob3JpemVkIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlc1RvUmV0dXJuLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtnbG9iYWwuc2x1Z30tdmlldy12ZXJzaW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9L3ZlcnNpb25zLzp2ZXJzaW9uSURgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc2lvbnM/Lmdsb2JhbHM/LltnbG9iYWwuc2x1Z10/LnJlYWRWZXJzaW9ucz8ucGVybWlzc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVyc2lvbiBnbG9iYWw9e2dsb2JhbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxVbmF1dGhvcml6ZWQgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlc1RvUmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake21hdGNoLnVybH0qYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm90Rm91bmQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVmYXVsdFRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAge2NhbkFjY2Vzc0FkbWluID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VW5hdXRob3JpemVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICkgOiA8UmVkaXJlY3QgdG89e2Ake21hdGNoLnVybH0vbG9naW4ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKHJvdXRlcy5hZG1pbikgPyBgP3JlZGlyZWN0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKHJvdXRlcy5hZG1pbiwgJycpKX1gIDogJyd9YH0gLz59XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfSpgfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RGb3VuZCAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8U3RheUxvZ2dlZEluIHJlZnJlc2hDb29raWU9e3JlZnJlc2hDb29raWV9IC8+XG4gICAgPC9TdXNwZW5zZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwibGF6eSIsIlN1c3BlbnNlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZWRpcmVjdCIsIlJvdXRlIiwiU3dpdGNoIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VBdXRoIiwidXNlQ29uZmlnIiwiTGlzdCIsIkRlZmF1bHRUZW1wbGF0ZSIsInJlcXVlc3RzIiwiU3RheUxvZ2dlZEluIiwiVmVyc2lvbnMiLCJWZXJzaW9uIiwiRG9jdW1lbnRJbmZvUHJvdmlkZXIiLCJ1c2VMb2NhbGUiLCJMb2FkaW5nT3ZlcmxheVRvZ2dsZSIsIkRhc2hib2FyZCIsIkZvcmdvdFBhc3N3b3JkIiwiTG9naW4iLCJMb2dvdXQiLCJOb3RGb3VuZCIsIlZlcmlmeSIsIkNyZWF0ZUZpcnN0VXNlciIsIkVkaXQiLCJFZGl0R2xvYmFsIiwiUmVzZXRQYXNzd29yZCIsIlVuYXV0aG9yaXplZCIsIkFjY291bnQiLCJSb3V0ZXMiLCJwZXJtaXNzaW9ucyIsImluaXRpYWxpemVkIiwic2V0SW5pdGlhbGl6ZWQiLCJ1c2VyIiwicmVmcmVzaENvb2tpZSIsImkxOG4iLCJjb2RlIiwibG9jYWxlIiwiY2FuQWNjZXNzQWRtaW4iLCJjb25maWciLCJhZG1pbiIsInVzZXJTbHVnIiwibG9nb3V0Um91dGUiLCJpbmFjdGl2aXR5Um91dGUiLCJsb2dvdXRJbmFjdGl2aXR5Um91dGUiLCJjb21wb25lbnRzIiwicm91dGVzIiwiY3VzdG9tUm91dGVzIiwiY29sbGVjdGlvbnMiLCJnbG9iYWxzIiwiaXNMb2FkaW5nVXNlciIsIkJvb2xlYW4iLCJ1c2VyQ29sbGVjdGlvbiIsImZpbmQiLCJzbHVnIiwiYXV0aCIsImRpc2FibGVMb2NhbFN0cmF0ZWd5IiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxhbmd1YWdlIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZmFsbGJhY2siLCJzaG93IiwibmFtZSIsInBhdGgiLCJyZW5kZXIiLCJtYXRjaCIsInVybCIsInRvIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiQ29tcG9uZW50Iiwic3RyaWN0IiwiZXhhY3QiLCJzZW5zaXRpdmUiLCJrZXkiLCJpbmFjdGl2aXR5IiwiY29sbGVjdGlvbiIsInZlcmlmeSIsImlkIiwiZmlsdGVyIiwiaGlkZGVuIiwicmVkdWNlIiwiY29sbGVjdGlvblJvdXRlcyIsInJvdXRlc1RvUmV0dXJuIiwicmVhZCIsInBlcm1pc3Npb24iLCJjcmVhdGUiLCJpZEZyb21QYXJhbXMiLCJpc0VkaXRpbmciLCJ2ZXJzaW9ucyIsInB1c2giLCJyZWFkVmVyc2lvbnMiLCJnbG9iYWxSb3V0ZXMiLCJnbG9iYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBQzdFLFNBQVNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLFFBQVEsbUJBQW1CO0FBQzNELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsT0FBTyxRQUFRLG1CQUFtQjtBQUMzQyxTQUFTQyxTQUFTLFFBQVEscUJBQXFCO0FBQy9DLE9BQU9DLFVBQVUsMkJBQTJCO0FBQzVDLE9BQU9DLHFCQUFxQixzQkFBc0I7QUFDbEQsU0FBU0MsUUFBUSxRQUFRLFNBQVM7QUFDbEMsT0FBT0Msa0JBQWtCLHdCQUF3QjtBQUNqRCxPQUFPQyxjQUFjLG1CQUFtQjtBQUN4QyxPQUFPQyxhQUFhLGtCQUFrQjtBQUN0QyxTQUFTQyxvQkFBb0IsUUFBUSwyQkFBMkI7QUFDaEUsU0FBU0MsU0FBUyxRQUFRLHFCQUFxQjtBQUMvQyxTQUFTQyxvQkFBb0IsUUFBUSxxQkFBcUI7QUFFMUQsSUFBTUMsMEJBQVluQixLQUFLO1dBQU0sTUFBTSxDQUFDOztBQUNwQyxJQUFNb0IsK0JBQWlCcEIsS0FBSztXQUFNLE1BQU0sQ0FBQzs7QUFDekMsSUFBTXFCLHNCQUFRckIsS0FBSztXQUFNLE1BQU0sQ0FBQzs7QUFDaEMsSUFBTXNCLHVCQUFTdEIsS0FBSztXQUFNLE1BQU0sQ0FBQzs7QUFDakMsSUFBTXVCLHlCQUFXdkIsS0FBSztXQUFNLE1BQU0sQ0FBQzs7QUFDbkMsSUFBTXdCLHVCQUFTeEIsS0FBSztXQUFNLE1BQU0sQ0FBQzs7QUFDakMsSUFB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