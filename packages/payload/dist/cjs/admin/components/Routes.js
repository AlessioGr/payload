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
var _Auth = require("./utilities/Auth");
var _Config = require("./utilities/Config");
var _List = /*#__PURE__*/ _interop_require_default(require("./views/collections/List"));
var _Default = /*#__PURE__*/ _interop_require_default(require("./templates/Default"));
var _api = require("../api");
var _StayLoggedIn = /*#__PURE__*/ _interop_require_default(require("./modals/StayLoggedIn"));
var _Versions = /*#__PURE__*/ _interop_require_default(require("./views/Versions"));
var _Version = /*#__PURE__*/ _interop_require_default(require("./views/Version"));
var _DocumentInfo = require("./utilities/DocumentInfo");
var _Locale = require("./utilities/Locale");
var _Loading = require("./elements/Loading");
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
var Dashboard = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/Dashboard"));
    });
});
var ForgotPassword = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/ForgotPassword"));
    });
});
var Login = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/Login"));
    });
});
var Logout = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/Logout"));
    });
});
var NotFound = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/NotFound"));
    });
});
var Verify = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/Verify"));
    });
});
var CreateFirstUser = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/CreateFirstUser"));
    });
});
var Edit = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/collections/Edit"));
    });
});
var EditGlobal = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/Global"));
    });
});
var ResetPassword = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/ResetPassword"));
    });
});
var Unauthorized = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/Unauthorized"));
    });
});
var Account = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./views/Account"));
    });
});
var Routes = function() {
    var _permissions;
    var _useState = _sliced_to_array((0, _react.useState)(null), 2), initialized = _useState[0], setInitialized = _useState[1];
    var _useAuth = (0, _Auth.useAuth)(), user = _useAuth.user, permissions = _useAuth.permissions, refreshCookie = _useAuth.refreshCookie;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var canAccessAdmin = (_permissions = permissions) === null || _permissions === void 0 ? void 0 : _permissions.canAccessAdmin;
    var config = (0, _Config.useConfig)();
    var _config_admin = config.admin, userSlug = _config_admin.user, logoutRoute = _config_admin.logoutRoute, logoutInactivityRoute = _config_admin.inactivityRoute, tmp = _config_admin.components, _ref = tmp === void 0 ? {} : tmp, customRoutes = _ref.routes, routes = config.routes, collections = config.collections, globals = config.globals;
    var isLoadingUser = Boolean(typeof user === "undefined" || user && typeof canAccessAdmin === "undefined");
    var userCollection = collections.find(function(param) {
        var slug = param.slug;
        return slug === userSlug;
    });
    (0, _react.useEffect)(function() {
        var slug = userCollection.slug;
        if (!userCollection.auth.disableLocalStrategy) {
            _api.requests.get("".concat(routes.api, "/").concat(slug, "/init"), {
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
    return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
            show: true,
            name: "route-suspense"
        })
    }, /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
        name: "route-loader",
        show: isLoadingUser
    }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
        path: routes.admin,
        render: function(param) {
            var match = param.match;
            if (initialized === false) {
                return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Switch, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url, "/create-first-user")
                }, /*#__PURE__*/ _react.default.createElement(CreateFirstUser, {
                    setInitialized: setInitialized
                })), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Redirect, {
                    to: "".concat(match.url, "/create-first-user")
                })));
            }
            if (initialized === true && !isLoadingUser) {
                return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Switch, null, Array.isArray(customRoutes) && customRoutes.map(function(param) {
                    var path = param.path, Component = param.Component, strict = param.strict, exact = param.exact, sensitive = param.sensitive;
                    return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                        key: "".concat(match.url).concat(path),
                        path: "".concat(match.url).concat(path),
                        strict: strict,
                        exact: exact,
                        sensitive: sensitive
                    }, /*#__PURE__*/ _react.default.createElement(Component, {
                        user: user,
                        canAccessAdmin: canAccessAdmin
                    }));
                }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url, "/login")
                }, /*#__PURE__*/ _react.default.createElement(Login, null)), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url).concat(logoutRoute)
                }, /*#__PURE__*/ _react.default.createElement(Logout, null)), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url).concat(logoutInactivityRoute)
                }, /*#__PURE__*/ _react.default.createElement(Logout, {
                    inactivity: true
                })), !userCollection.auth.disableLocalStrategy && /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url, "/forgot")
                }, /*#__PURE__*/ _react.default.createElement(ForgotPassword, null)), !userCollection.auth.disableLocalStrategy && /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url, "/reset/:token")
                }, /*#__PURE__*/ _react.default.createElement(ResetPassword, null)), collections.map(function(collection) {
                    var _collection_auth, _collection;
                    if (((_collection = collection) === null || _collection === void 0 ? void 0 : (_collection_auth = _collection.auth) === null || _collection_auth === void 0 ? void 0 : _collection_auth.verify) && !collection.auth.disableLocalStrategy) {
                        return /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: "".concat(collection.slug, "-verify"),
                            path: "".concat(match.url, "/").concat(collection.slug, "/verify/:token"),
                            exact: true
                        }, /*#__PURE__*/ _react.default.createElement(Verify, {
                            collection: collection
                        }));
                    }
                    return null;
                }), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, null, user ? /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, canAccessAdmin && /*#__PURE__*/ _react.default.createElement(_Default.default, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Switch, null, /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url, "/"),
                    exact: true
                }, /*#__PURE__*/ _react.default.createElement(Dashboard, null)), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url, "/account")
                }, /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                    collection: collections.find(function(param) {
                        var slug = param.slug;
                        return slug === userSlug;
                    }),
                    id: user.id
                }, /*#__PURE__*/ _react.default.createElement(Account, null))), collections.filter(function(param) {
                    var hidden = param.admin.hidden;
                    return !(typeof hidden === "function" ? hidden({
                        user: user
                    }) : hidden);
                }).reduce(function(collectionRoutes, collection) {
                    var _permissions_collections_collection_slug_read, _permissions_collections_collection_slug, _permissions_collections, _permissions, _permissions_collections_collection_slug_create, _permissions_collections_collection_slug1, _permissions_collections1, _permissions1, _permissions_collections_collection_slug_read1, _permissions_collections_collection_slug2, _permissions_collections2, _permissions2;
                    var routesToReturn = _to_consumable_array(collectionRoutes).concat([
                        /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: "".concat(collection.slug, "-list"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug),
                            exact: true
                        }, ((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : (_permissions_collections_collection_slug = _permissions_collections[collection.slug]) === null || _permissions_collections_collection_slug === void 0 ? void 0 : (_permissions_collections_collection_slug_read = _permissions_collections_collection_slug.read) === null || _permissions_collections_collection_slug_read === void 0 ? void 0 : _permissions_collections_collection_slug_read.permission) ? /*#__PURE__*/ _react.default.createElement(_List.default, {
                            collection: collection
                        }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)),
                        /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: "".concat(collection.slug, "-create"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug, "/create"),
                            exact: true
                        }, ((_permissions1 = permissions) === null || _permissions1 === void 0 ? void 0 : (_permissions_collections1 = _permissions1.collections) === null || _permissions_collections1 === void 0 ? void 0 : (_permissions_collections_collection_slug1 = _permissions_collections1[collection.slug]) === null || _permissions_collections_collection_slug1 === void 0 ? void 0 : (_permissions_collections_collection_slug_create = _permissions_collections_collection_slug1.create) === null || _permissions_collections_collection_slug_create === void 0 ? void 0 : _permissions_collections_collection_slug_create.permission) ? /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                            collection: collection,
                            idFromParams: true
                        }, /*#__PURE__*/ _react.default.createElement(Edit, {
                            collection: collection
                        })) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)),
                        /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: "".concat(collection.slug, "-edit"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug, "/:id"),
                            exact: true
                        }, ((_permissions2 = permissions) === null || _permissions2 === void 0 ? void 0 : (_permissions_collections2 = _permissions2.collections) === null || _permissions_collections2 === void 0 ? void 0 : (_permissions_collections_collection_slug2 = _permissions_collections2[collection.slug]) === null || _permissions_collections_collection_slug2 === void 0 ? void 0 : (_permissions_collections_collection_slug_read1 = _permissions_collections_collection_slug2.read) === null || _permissions_collections_collection_slug_read1 === void 0 ? void 0 : _permissions_collections_collection_slug_read1.permission) ? /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                            collection: collection,
                            idFromParams: true
                        }, /*#__PURE__*/ _react.default.createElement(Edit, {
                            isEditing: true,
                            collection: collection
                        })) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null))
                    ]);
                    if (collection.versions) {
                        var _permissions_collections_collection_slug_readVersions, _permissions_collections_collection_slug3, _permissions_collections3, _permissions3, _permissions_collections_collection_slug_readVersions1, _permissions_collections_collection_slug4, _permissions_collections4, _permissions4;
                        routesToReturn.push(/*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: "".concat(collection.slug, "-versions"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug, "/:id/versions"),
                            exact: true
                        }, ((_permissions3 = permissions) === null || _permissions3 === void 0 ? void 0 : (_permissions_collections3 = _permissions3.collections) === null || _permissions_collections3 === void 0 ? void 0 : (_permissions_collections_collection_slug3 = _permissions_collections3[collection.slug]) === null || _permissions_collections_collection_slug3 === void 0 ? void 0 : (_permissions_collections_collection_slug_readVersions = _permissions_collections_collection_slug3.readVersions) === null || _permissions_collections_collection_slug_readVersions === void 0 ? void 0 : _permissions_collections_collection_slug_readVersions.permission) ? /*#__PURE__*/ _react.default.createElement(_Versions.default, {
                            collection: collection
                        }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)));
                        routesToReturn.push(/*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: "".concat(collection.slug, "-view-version"),
                            path: "".concat(match.url, "/collections/").concat(collection.slug, "/:id/versions/:versionID"),
                            exact: true
                        }, ((_permissions4 = permissions) === null || _permissions4 === void 0 ? void 0 : (_permissions_collections4 = _permissions4.collections) === null || _permissions_collections4 === void 0 ? void 0 : (_permissions_collections_collection_slug4 = _permissions_collections4[collection.slug]) === null || _permissions_collections_collection_slug4 === void 0 ? void 0 : (_permissions_collections_collection_slug_readVersions1 = _permissions_collections_collection_slug4.readVersions) === null || _permissions_collections_collection_slug_readVersions1 === void 0 ? void 0 : _permissions_collections_collection_slug_readVersions1.permission) ? /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                            collection: collection,
                            idFromParams: true
                        }, /*#__PURE__*/ _react.default.createElement(_Version.default, {
                            collection: collection
                        })) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)));
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
                        /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: global.slug,
                            path: "".concat(match.url, "/globals/").concat(global.slug),
                            exact: true
                        }, ((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_globals = _permissions.globals) === null || _permissions_globals === void 0 ? void 0 : (_permissions_globals_global_slug = _permissions_globals[global.slug]) === null || _permissions_globals_global_slug === void 0 ? void 0 : (_permissions_globals_global_slug_read = _permissions_globals_global_slug.read) === null || _permissions_globals_global_slug_read === void 0 ? void 0 : _permissions_globals_global_slug_read.permission) ? /*#__PURE__*/ _react.default.createElement(_DocumentInfo.DocumentInfoProvider, {
                            global: global,
                            key: "".concat(global.slug, "-").concat(locale),
                            idFromParams: true
                        }, /*#__PURE__*/ _react.default.createElement(EditGlobal, {
                            global: global
                        })) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null))
                    ]);
                    if (global.versions) {
                        var _permissions_globals_global_slug_readVersions, _permissions_globals_global_slug1, _permissions_globals1, _permissions1, _permissions_globals_global_slug_readVersions1, _permissions_globals_global_slug2, _permissions_globals2, _permissions2;
                        routesToReturn.push(/*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: "".concat(global.slug, "-versions"),
                            path: "".concat(match.url, "/globals/").concat(global.slug, "/versions"),
                            exact: true
                        }, ((_permissions1 = permissions) === null || _permissions1 === void 0 ? void 0 : (_permissions_globals1 = _permissions1.globals) === null || _permissions_globals1 === void 0 ? void 0 : (_permissions_globals_global_slug1 = _permissions_globals1[global.slug]) === null || _permissions_globals_global_slug1 === void 0 ? void 0 : (_permissions_globals_global_slug_readVersions = _permissions_globals_global_slug1.readVersions) === null || _permissions_globals_global_slug_readVersions === void 0 ? void 0 : _permissions_globals_global_slug_readVersions.permission) ? /*#__PURE__*/ _react.default.createElement(_Versions.default, {
                            global: global
                        }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)));
                        routesToReturn.push(/*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                            key: "".concat(global.slug, "-view-version"),
                            path: "".concat(match.url, "/globals/").concat(global.slug, "/versions/:versionID"),
                            exact: true
                        }, ((_permissions2 = permissions) === null || _permissions2 === void 0 ? void 0 : (_permissions_globals2 = _permissions2.globals) === null || _permissions_globals2 === void 0 ? void 0 : (_permissions_globals_global_slug2 = _permissions_globals2[global.slug]) === null || _permissions_globals_global_slug2 === void 0 ? void 0 : (_permissions_globals_global_slug_readVersions1 = _permissions_globals_global_slug2.readVersions) === null || _permissions_globals_global_slug_readVersions1 === void 0 ? void 0 : _permissions_globals_global_slug_readVersions1.permission) ? /*#__PURE__*/ _react.default.createElement(_Version.default, {
                            global: global
                        }) : /*#__PURE__*/ _react.default.createElement(Unauthorized, null)));
                    }
                    return routesToReturn;
                }, []), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url, "*")
                }, /*#__PURE__*/ _react.default.createElement(NotFound, null)))), canAccessAdmin === false && /*#__PURE__*/ _react.default.createElement(Unauthorized, null)) : /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Redirect, {
                    to: "".concat(match.url, "/login").concat(window.location.pathname.startsWith(routes.admin) ? "?redirect=".concat(encodeURIComponent(window.location.pathname.replace(routes.admin, ""))) : "")
                })), /*#__PURE__*/ _react.default.createElement(_reactrouterdom.Route, {
                    path: "".concat(match.url, "*")
                }, /*#__PURE__*/ _react.default.createElement(NotFound, null)));
            }
            return null;
        }
    }), /*#__PURE__*/ _react.default.createElement(_StayLoggedIn.default, {
        refreshCookie: refreshCookie
    }));
};
var _default = Routes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL1JvdXRlcy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBsYXp5LCBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlZGlyZWN0LCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCBMaXN0IGZyb20gJy4vdmlld3MvY29sbGVjdGlvbnMvTGlzdCc7XG5pbXBvcnQgRGVmYXVsdFRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGVzL0RlZmF1bHQnO1xuaW1wb3J0IHsgcmVxdWVzdHMgfSBmcm9tICcuLi9hcGknO1xuaW1wb3J0IFN0YXlMb2dnZWRJbiBmcm9tICcuL21vZGFscy9TdGF5TG9nZ2VkSW4nO1xuaW1wb3J0IFZlcnNpb25zIGZyb20gJy4vdmlld3MvVmVyc2lvbnMnO1xuaW1wb3J0IFZlcnNpb24gZnJvbSAnLi92aWV3cy9WZXJzaW9uJztcbmltcG9ydCB7IERvY3VtZW50SW5mb1Byb3ZpZGVyIH0gZnJvbSAnLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJy4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgeyBMb2FkaW5nT3ZlcmxheVRvZ2dsZSB9IGZyb20gJy4vZWxlbWVudHMvTG9hZGluZyc7XG5cbmNvbnN0IERhc2hib2FyZCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0Rhc2hib2FyZCcpKTtcbmNvbnN0IEZvcmdvdFBhc3N3b3JkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvRm9yZ290UGFzc3dvcmQnKSk7XG5jb25zdCBMb2dpbiA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0xvZ2luJykpO1xuY29uc3QgTG9nb3V0ID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvTG9nb3V0JykpO1xuY29uc3QgTm90Rm91bmQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9Ob3RGb3VuZCcpKTtcbmNvbnN0IFZlcmlmeSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL1ZlcmlmeScpKTtcbmNvbnN0IENyZWF0ZUZpcnN0VXNlciA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0NyZWF0ZUZpcnN0VXNlcicpKTtcbmNvbnN0IEVkaXQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9jb2xsZWN0aW9ucy9FZGl0JykpO1xuY29uc3QgRWRpdEdsb2JhbCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0dsb2JhbCcpKTtcbmNvbnN0IFJlc2V0UGFzc3dvcmQgPSBsYXp5KCgpID0+IGltcG9ydCgnLi92aWV3cy9SZXNldFBhc3N3b3JkJykpO1xuY29uc3QgVW5hdXRob3JpemVkID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdmlld3MvVW5hdXRob3JpemVkJykpO1xuY29uc3QgQWNjb3VudCA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL3ZpZXdzL0FjY291bnQnKSk7XG5cbmNvbnN0IFJvdXRlczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtpbml0aWFsaXplZCwgc2V0SW5pdGlhbGl6ZWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHsgdXNlciwgcGVybWlzc2lvbnMsIHJlZnJlc2hDb29raWUgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG5cbiAgY29uc3QgY2FuQWNjZXNzQWRtaW4gPSBwZXJtaXNzaW9ucz8uY2FuQWNjZXNzQWRtaW47XG5cbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICB1c2VyOiB1c2VyU2x1ZyxcbiAgICAgIGxvZ291dFJvdXRlLFxuICAgICAgaW5hY3Rpdml0eVJvdXRlOiBsb2dvdXRJbmFjdGl2aXR5Um91dGUsXG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHJvdXRlczogY3VzdG9tUm91dGVzLFxuICAgICAgfSA9IHt9LFxuICAgIH0sXG4gICAgcm91dGVzLFxuICAgIGNvbGxlY3Rpb25zLFxuICAgIGdsb2JhbHMsXG4gIH0gPSBjb25maWc7XG5cbiAgY29uc3QgaXNMb2FkaW5nVXNlciA9IEJvb2xlYW4odHlwZW9mIHVzZXIgPT09ICd1bmRlZmluZWQnIHx8ICh1c2VyICYmIHR5cGVvZiBjYW5BY2Nlc3NBZG1pbiA9PT0gJ3VuZGVmaW5lZCcpKTtcbiAgY29uc3QgdXNlckNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKCh7IHNsdWcgfSkgPT4gc2x1ZyA9PT0gdXNlclNsdWcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBzbHVnIH0gPSB1c2VyQ29sbGVjdGlvbjtcblxuICAgIGlmICghdXNlckNvbGxlY3Rpb24uYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSkge1xuICAgICAgcmVxdWVzdHMuZ2V0KGAke3JvdXRlcy5hcGl9LyR7c2x1Z30vaW5pdGAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigocmVzKSA9PiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgJiYgJ2luaXRpYWxpemVkJyBpbiBkYXRhKSB7XG4gICAgICAgICAgc2V0SW5pdGlhbGl6ZWQoZGF0YS5pbml0aWFsaXplZCk7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0SW5pdGlhbGl6ZWQodHJ1ZSk7XG4gICAgfVxuICB9LCBbaTE4bi5sYW5ndWFnZSwgcm91dGVzLCB1c2VyQ29sbGVjdGlvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN1c3BlbnNlIGZhbGxiYWNrPXsoXG4gICAgICA8TG9hZGluZ092ZXJsYXlUb2dnbGVcbiAgICAgICAgc2hvd1xuICAgICAgICBuYW1lPVwicm91dGUtc3VzcGVuc2VcIlxuICAgICAgLz5cbiAgICApfVxuICAgID5cbiAgICAgIDxMb2FkaW5nT3ZlcmxheVRvZ2dsZVxuICAgICAgICBuYW1lPVwicm91dGUtbG9hZGVyXCJcbiAgICAgICAgc2hvdz17aXNMb2FkaW5nVXNlcn1cbiAgICAgIC8+XG4gICAgICA8Um91dGVcbiAgICAgICAgcGF0aD17cm91dGVzLmFkbWlufVxuICAgICAgICByZW5kZXI9eyh7IG1hdGNoIH0pID0+IHtcbiAgICAgICAgICBpZiAoaW5pdGlhbGl6ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9L2NyZWF0ZS1maXJzdC11c2VyYH0+XG4gICAgICAgICAgICAgICAgICA8Q3JlYXRlRmlyc3RVc2VyIHNldEluaXRpYWxpemVkPXtzZXRJbml0aWFsaXplZH0gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZT5cbiAgICAgICAgICAgICAgICAgIDxSZWRpcmVjdCB0bz17YCR7bWF0Y2gudXJsfS9jcmVhdGUtZmlyc3QtdXNlcmB9IC8+XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbml0aWFsaXplZCA9PT0gdHJ1ZSAmJiAhaXNMb2FkaW5nVXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICB7QXJyYXkuaXNBcnJheShjdXN0b21Sb3V0ZXMpICYmIGN1c3RvbVJvdXRlcy5tYXAoKHsgcGF0aCwgQ29tcG9uZW50LCBzdHJpY3QsIGV4YWN0LCBzZW5zaXRpdmUgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgIGtleT17YCR7bWF0Y2gudXJsfSR7cGF0aH1gfVxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtgJHttYXRjaC51cmx9JHtwYXRofWB9XG4gICAgICAgICAgICAgICAgICAgIHN0cmljdD17c3RyaWN0fVxuICAgICAgICAgICAgICAgICAgICBleGFjdD17ZXhhY3R9XG4gICAgICAgICAgICAgICAgICAgIHNlbnNpdGl2ZT17c2Vuc2l0aXZlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICBjYW5BY2Nlc3NBZG1pbj17Y2FuQWNjZXNzQWRtaW59XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9L2xvZ2luYH0+XG4gICAgICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9JHtsb2dvdXRSb3V0ZX1gfT5cbiAgICAgICAgICAgICAgICAgIDxMb2dvdXQgLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtgJHttYXRjaC51cmx9JHtsb2dvdXRJbmFjdGl2aXR5Um91dGV9YH0+XG4gICAgICAgICAgICAgICAgICA8TG9nb3V0IGluYWN0aXZpdHkgLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgIHshdXNlckNvbGxlY3Rpb24uYXV0aC5kaXNhYmxlTG9jYWxTdHJhdGVneSAmJiAoXG4gICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS9mb3Jnb3RgfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcmdvdFBhc3N3b3JkIC8+XG4gICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7IXVzZXJDb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kgJiYgKFxuICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake21hdGNoLnVybH0vcmVzZXQvOnRva2VuYH0+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNldFBhc3N3b3JkIC8+XG4gICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7Y29sbGVjdGlvbnMubWFwKChjb2xsZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbj8uYXV0aD8udmVyaWZ5ICYmICFjb2xsZWN0aW9uLmF1dGguZGlzYWJsZUxvY2FsU3RyYXRlZ3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS12ZXJpZnlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS8ke2NvbGxlY3Rpb24uc2x1Z30vdmVyaWZ5Lzp0b2tlbmB9XG4gICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJpZnkgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICA8Um91dGU+XG4gICAgICAgICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYW5BY2Nlc3NBZG1pbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVmYXVsdFRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfS9hY2NvdW50YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jdW1lbnRJbmZvUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbnMuZmluZCgoeyBzbHVnIH0pID0+IHNsdWcgPT09IHVzZXJTbHVnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3VzZXIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvdW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RvY3VtZW50SW5mb1Byb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbGxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IGFkbWluOiB7IGhpZGRlbiB9IH0pID0+ICEodHlwZW9mIGhpZGRlbiA9PT0gJ2Z1bmN0aW9uJyA/IGhpZGRlbih7IHVzZXIgfSkgOiBoaWRkZW4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgoY29sbGVjdGlvblJvdXRlcywgY29sbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZXNUb1JldHVybiA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb2xsZWN0aW9uUm91dGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LWxpc3RgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bY29sbGVjdGlvbi5zbHVnXT8ucmVhZD8ucGVybWlzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IDxMaXN0IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPFVuYXV0aG9yaXplZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7Y29sbGVjdGlvbi5zbHVnfS1jcmVhdGVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vY3JlYXRlYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LmNyZWF0ZT8ucGVybWlzc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvY3VtZW50SW5mb1Byb3ZpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZEZyb21QYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VW5hdXRob3JpemVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LWVkaXRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vOmlkYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LnJlYWQ/LnBlcm1pc3Npb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N1bWVudEluZm9Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRGcm9tUGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFZGl0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uPXtjb2xsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPFVuYXV0aG9yaXplZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGVjdGlvbi52ZXJzaW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlc1RvUmV0dXJuLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtjb2xsZWN0aW9uLnNsdWd9LXZlcnNpb25zYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vOmlkL3ZlcnNpb25zYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5jb2xsZWN0aW9ucz8uW2NvbGxlY3Rpb24uc2x1Z10/LnJlYWRWZXJzaW9ucz8ucGVybWlzc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVyc2lvbnMgY29sbGVjdGlvbj17Y29sbGVjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxVbmF1dGhvcml6ZWQgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzVG9SZXR1cm4ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2NvbGxlY3Rpb24uc2x1Z30tdmlldy12ZXJzaW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9jb2xsZWN0aW9ucy8ke2NvbGxlY3Rpb24uc2x1Z30vOmlkL3ZlcnNpb25zLzp2ZXJzaW9uSURgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc2lvbnM/LmNvbGxlY3Rpb25zPy5bY29sbGVjdGlvbi5zbHVnXT8ucmVhZFZlcnNpb25zPy5wZXJtaXNzaW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb2N1bWVudEluZm9Qcm92aWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkRnJvbVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJzaW9uIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Eb2N1bWVudEluZm9Qcm92aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxVbmF1dGhvcml6ZWQgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlc1RvUmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnbG9iYWxzICYmIGdsb2JhbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgYWRtaW46IHsgaGlkZGVuIH0gfSkgPT4gISh0eXBlb2YgaGlkZGVuID09PSAnZnVuY3Rpb24nID8gaGlkZGVuKHsgdXNlciB9KSA6IGhpZGRlbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChnbG9iYWxSb3V0ZXMsIGdsb2JhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3V0ZXNUb1JldHVybiA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5nbG9iYWxSb3V0ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2dsb2JhbC5zbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Blcm1pc3Npb25zPy5nbG9iYWxzPy5bZ2xvYmFsLnNsdWddPy5yZWFkPy5wZXJtaXNzaW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9jdW1lbnRJbmZvUHJvdmlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWw9e2dsb2JhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2dsb2JhbC5zbHVnfS0ke2xvY2FsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkRnJvbVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRHbG9iYWwgZ2xvYmFsPXtnbG9iYWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRG9jdW1lbnRJbmZvUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPFVuYXV0aG9yaXplZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsLnZlcnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzVG9SZXR1cm4ucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2dsb2JhbC5zbHVnfS12ZXJzaW9uc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e2Ake21hdGNoLnVybH0vZ2xvYmFscy8ke2dsb2JhbC5zbHVnfS92ZXJzaW9uc2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4YWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwZXJtaXNzaW9ucz8uZ2xvYmFscz8uW2dsb2JhbC5zbHVnXT8ucmVhZFZlcnNpb25zPy5wZXJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8VmVyc2lvbnMgZ2xvYmFsPXtnbG9iYWx9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiA8VW5hdXRob3JpemVkIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlc1RvUmV0dXJuLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgJHtnbG9iYWwuc2x1Z30tdmlldy12ZXJzaW9uYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17YCR7bWF0Y2gudXJsfS9nbG9iYWxzLyR7Z2xvYmFsLnNsdWd9L3ZlcnNpb25zLzp2ZXJzaW9uSURgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cGVybWlzc2lvbnM/Lmdsb2JhbHM/LltnbG9iYWwuc2x1Z10/LnJlYWRWZXJzaW9ucz8ucGVybWlzc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VmVyc2lvbiBnbG9iYWw9e2dsb2JhbH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IDxVbmF1dGhvcml6ZWQgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlc1RvUmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgW10pfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2Ake21hdGNoLnVybH0qYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm90Rm91bmQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVmYXVsdFRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAge2NhbkFjY2Vzc0FkbWluID09PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VW5hdXRob3JpemVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICkgOiA8UmVkaXJlY3QgdG89e2Ake21hdGNoLnVybH0vbG9naW4ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKHJvdXRlcy5hZG1pbikgPyBgP3JlZGlyZWN0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKHJvdXRlcy5hZG1pbiwgJycpKX1gIDogJyd9YH0gLz59XG4gICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YCR7bWF0Y2gudXJsfSpgfT5cbiAgICAgICAgICAgICAgICAgIDxOb3RGb3VuZCAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8U3RheUxvZ2dlZEluIHJlZnJlc2hDb29raWU9e3JlZnJlc2hDb29raWV9IC8+XG4gICAgPC9TdXNwZW5zZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJsYXp5IiwiRm9yZ290UGFzc3dvcmQiLCJMb2dpbiIsIkxvZ291dCIsIk5vdEZvdW5kIiwiVmVyaWZ5IiwiQ3JlYXRlRmlyc3RVc2VyIiwiRWRpdCIsIkVkaXRHbG9iYWwiLCJSZXNldFBhc3N3b3JkIiwiVW5hdXRob3JpemVkIiwiQWNjb3VudCIsIlJvdXRlcyIsInBlcm1pc3Npb25zIiwidXNlU3RhdGUiLCJpbml0aWFsaXplZCIsInNldEluaXRpYWxpemVkIiwidXNlQXV0aCIsInVzZXIiLCJyZWZyZXNoQ29va2llIiwiaTE4biIsInVzZVRyYW5zbGF0aW9uIiwidXNlTG9jYWxlIiwiY29kZSIsImxvY2FsZSIsImNhbkFjY2Vzc0FkbWluIiwiY29uZmlnIiwidXNlQ29uZmlnIiwiYWRtaW4iLCJ1c2VyU2x1ZyIsImxvZ291dFJvdXRlIiwiaW5hY3Rpdml0eVJvdXRlIiwibG9nb3V0SW5hY3Rpdml0eVJvdXRlIiwiY29tcG9uZW50cyIsInJvdXRlcyIsImN1c3RvbVJvdXRlcyIsImNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsImlzTG9hZGluZ1VzZXIiLCJCb29sZWFuIiwidXNlckNvbGxlY3Rpb24iLCJmaW5kIiwic2x1ZyIsInVzZUVmZmVjdCIsImF1dGgiLCJkaXNhYmxlTG9jYWxTdHJhdGVneSIsInJlcXVlc3RzIiwiZ2V0IiwiYXBpIiwiaGVhZGVycyIsImxhbmd1YWdlIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIkxvYWRpbmdPdmVybGF5VG9nZ2xlIiwic2hvdyIsIm5hbWUiLCJSb3V0ZSIsInBhdGgiLCJyZW5kZXIiLCJtYXRjaCIsIlN3aXRjaCIsInVybCIsIlJlZGlyZWN0IiwidG8iLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJDb21wb25lbnQiLCJzdHJpY3QiLCJleGFjdCIsInNlbnNpdGl2ZSIsImtleSIsImluYWN0aXZpdHkiLCJjb2xsZWN0aW9uIiwidmVyaWZ5IiwiRnJhZ21lbnQiLCJEZWZhdWx0VGVtcGxhdGUiLCJEb2N1bWVudEluZm9Qcm92aWRlciIsImlkIiwiZmlsdGVyIiwiaGlkZGVuIiwicmVkdWNlIiwiY29sbGVjdGlvblJvdXRlcyIsInJvdXRlc1RvUmV0dXJuIiwicmVhZCIsInBlcm1pc3Npb24iLCJMaXN0IiwiY3JlYXRlIiwiaWRGcm9tUGFyYW1zIiwiaXNFZGl0aW5nIiwidmVyc2lvbnMiLCJwdXNoIiwicmVhZFZlcnNpb25zIiwiVmVyc2lvbnMiLCJWZXJzaW9uIiwiZ2xvYmFsUm91dGVzIiwiZ2xvYmFsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwiU3RheUxvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOzs7OytCQThVQTs7O2VBQUE7Ozs2REE5VXFFOzhCQUM3Qjs0QkFDVDtvQkFDUDtzQkFDRTsyREFDVDs4REFDVzttQkFDSDttRUFDQTsrREFDSjs4REFDRDs0QkFDaUI7c0JBQ1g7dUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUEsMEJBQVlDLElBQUFBLFdBQUksRUFBQztXQUFNO3VEQUFBLFFBQU87OztBQUNwQyxJQUFNQywrQkFBaUJELElBQUFBLFdBQUksRUFBQztXQUFNO3VEQUFBLFFBQU87OztBQUN6QyxJQUFNRSxzQkFBUUYsSUFBQUEsV0FBSSxFQUFDO1dBQU07dURBQUEsUUFBTzs7O0FBQ2hDLElBQU1HLHVCQUFTSCxJQUFBQSxXQUFJLEVBQUM7V0FBTTt1REFBQSxRQUFPOzs7QUFDakMsSUFBTUkseUJBQVdKLElBQUFBLFdBQUksRUFBQztXQUFNO3VEQUFBLFFBQU87OztBQUNuQyxJQUFNSyx1QkFBU0wsSUFBQUEsV0FBSSxFQUFDO1dBQU07dURBQUEsUUFBTzs7O0FBQ2pDLElBQU1NLGdDQUFrQk4sSUFBQUEsV0FBSSxFQUFDO1dBQU07dURBQUEsUUFBTzs7O0FBQzFDLElBQU1PLHFCQUFPUCxJQUFBQSxXQUFJLEVBQUM7V0FBTTt1REFBQSxRQUFPOzs7QUFDL0IsSUFBTVEsMkJBQWFSLElBQUFBLFdBQUksRUFBQztXQUFNO3VEQUFBLFFBQU87OztBQUNyQyxJQUFNUyw4QkFBZ0JULElBQUFBLFdBQUksRUFBQztXQUFNO3VEQUFBLFFBQU87OztBQUN4QyxJQUFNVSw2QkFBZVYsSUFBQUEsV0FBSSxFQUFDO1dBQU07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