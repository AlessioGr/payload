"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "sanitizeConfig", {
    enumerable: true,
    get: function() {
        return sanitizeConfig;
    }
});
var _deepmerge = /*#__PURE__*/ _interop_require_default(require("deepmerge"));
var _isplainobject = require("is-plain-object");
var _defaultUser = require("../auth/defaultUser");
var _sanitize = /*#__PURE__*/ _interop_require_default(require("../collections/config/sanitize"));
var _errors = require("../errors");
var _sanitize1 = /*#__PURE__*/ _interop_require_default(require("../globals/config/sanitize"));
var _checkDuplicateCollections = /*#__PURE__*/ _interop_require_default(require("../utilities/checkDuplicateCollections"));
var _defaults = require("./defaults");
var _preferencesCollection = /*#__PURE__*/ _interop_require_default(require("../preferences/preferencesCollection"));
var _migrationsCollection = require("../database/migrations/migrationsCollection");
var _bundler = /*#__PURE__*/ _interop_require_default(require("../bundlers/webpack/bundler"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
var sanitizeAdminConfig = function(configToSanitize) {
    var _sanitizedConfig_admin, _sanitizedConfig;
    var sanitizedConfig = _object_spread({}, configToSanitize);
    // add default user collection if none provided
    if (!((_sanitizedConfig = sanitizedConfig) === null || _sanitizedConfig === void 0 ? void 0 : (_sanitizedConfig_admin = _sanitizedConfig.admin) === null || _sanitizedConfig_admin === void 0 ? void 0 : _sanitizedConfig_admin.user)) {
        var firstCollectionWithAuth = sanitizedConfig.collections.find(function(param) {
            var auth = param.auth;
            return Boolean(auth);
        });
        if (firstCollectionWithAuth) {
            sanitizedConfig.admin.user = firstCollectionWithAuth.slug;
        } else {
            sanitizedConfig.admin.user = _defaultUser.defaultUserCollection.slug;
            sanitizedConfig.collections.push(_defaultUser.defaultUserCollection);
        }
    }
    if (!sanitizedConfig.collections.find(function(param) {
        var slug = param.slug;
        return slug === sanitizedConfig.admin.user;
    })) {
        throw new _errors.InvalidConfiguration("".concat(sanitizedConfig.admin.user, " is not a valid admin user collection"));
    }
    // add default bundler if none provided
    if (!sanitizedConfig.admin.bundler) {
        sanitizedConfig.admin.bundler = (0, _bundler.default)();
    }
    return sanitizedConfig;
};
var sanitizeConfig = function(incomingConfig) {
    var _config_localization_locales;
    var configWithDefaults = (0, _deepmerge.default)(_defaults.defaults, incomingConfig, {
        isMergeableObject: _isplainobject.isPlainObject
    });
    var config = sanitizeAdminConfig(configWithDefaults);
    if (config.localization && ((_config_localization_locales = config.localization.locales) === null || _config_localization_locales === void 0 ? void 0 : _config_localization_locales.length) > 0) {
        // clone localization config so to not break everything
        var firstLocale = config.localization.locales[0];
        if (typeof firstLocale === "string") {
            config.localization.localeCodes = _to_consumable_array(config.localization.locales);
            // is string[], so convert to Locale[]
            config.localization.locales = config.localization.locales.map(function(locale) {
                return {
                    label: locale,
                    code: locale,
                    rtl: false,
                    toString: function() {
                        return locale;
                    }
                };
            });
        } else {
            // is Locale[], so convert to string[] for localeCodes
            config.localization.localeCodes = config.localization.locales.reduce(function(locales, locale) {
                locales.push(locale.code);
                return locales;
            }, []);
            config.localization.locales = config.localization.locales.map(function(locale) {
                return _object_spread_props(_object_spread({}, locale), {
                    toString: function() {
                        return locale.code;
                    }
                });
            });
        }
    }
    configWithDefaults.collections.push((0, _preferencesCollection.default)(configWithDefaults));
    configWithDefaults.collections.push(_migrationsCollection.migrationsCollection);
    config.collections = config.collections.map(function(collection) {
        return (0, _sanitize.default)(configWithDefaults, collection);
    });
    (0, _checkDuplicateCollections.default)(config.collections);
    if (config.globals.length > 0) {
        config.globals = (0, _sanitize1.default)(config.collections, config.globals);
    }
    if (typeof config.serverURL === "undefined") {
        config.serverURL = "";
    }
    if (config.serverURL !== "") {
        config.csrf.push(config.serverURL);
    }
    return config;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvc2FuaXRpemUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1lcmdlIGZyb20gJ2RlZXBtZXJnZSc7XG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0IH0gZnJvbSAnaXMtcGxhaW4tb2JqZWN0JztcbmltcG9ydCB0eXBlIHsgQ29uZmlnLCBMb2NhbGl6YXRpb25Db25maWdXaXRoTGFiZWxzLCBMb2NhbGl6YXRpb25Db25maWdXaXRoTm9MYWJlbHMsIFNhbml0aXplZENvbmZpZywgU2FuaXRpemVkTG9jYWxpemF0aW9uQ29uZmlnIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkZWZhdWx0VXNlckNvbGxlY3Rpb24gfSBmcm9tICcuLi9hdXRoL2RlZmF1bHRVc2VyJztcbmltcG9ydCBzYW5pdGl6ZUNvbGxlY3Rpb24gZnJvbSAnLi4vY29sbGVjdGlvbnMvY29uZmlnL3Nhbml0aXplJztcbmltcG9ydCB7IEludmFsaWRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vZXJyb3JzJztcbmltcG9ydCBzYW5pdGl6ZUdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscy9jb25maWcvc2FuaXRpemUnO1xuaW1wb3J0IGNoZWNrRHVwbGljYXRlQ29sbGVjdGlvbnMgZnJvbSAnLi4vdXRpbGl0aWVzL2NoZWNrRHVwbGljYXRlQ29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuL2RlZmF1bHRzJztcbmltcG9ydCBnZXRQcmVmZXJlbmNlc0NvbGxlY3Rpb24gZnJvbSAnLi4vcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXNDb2xsZWN0aW9uJztcbmltcG9ydCB7IG1pZ3JhdGlvbnNDb2xsZWN0aW9uIH0gZnJvbSAnLi4vZGF0YWJhc2UvbWlncmF0aW9ucy9taWdyYXRpb25zQ29sbGVjdGlvbic7XG5pbXBvcnQgZ2V0RGVmYXVsdEJ1bmRsZXIgZnJvbSAnLi4vYnVuZGxlcnMvd2VicGFjay9idW5kbGVyJztcblxuY29uc3Qgc2FuaXRpemVBZG1pbkNvbmZpZyA9IChjb25maWdUb1Nhbml0aXplOiBDb25maWcpOiBQYXJ0aWFsPFNhbml0aXplZENvbmZpZz4gPT4ge1xuICBjb25zdCBzYW5pdGl6ZWRDb25maWcgPSB7IC4uLmNvbmZpZ1RvU2FuaXRpemUgfTtcblxuICAvLyBhZGQgZGVmYXVsdCB1c2VyIGNvbGxlY3Rpb24gaWYgbm9uZSBwcm92aWRlZFxuICBpZiAoIXNhbml0aXplZENvbmZpZz8uYWRtaW4/LnVzZXIpIHtcbiAgICBjb25zdCBmaXJzdENvbGxlY3Rpb25XaXRoQXV0aCA9IHNhbml0aXplZENvbmZpZy5jb2xsZWN0aW9ucy5maW5kKCh7IGF1dGggfSkgPT4gQm9vbGVhbihhdXRoKSk7XG4gICAgaWYgKGZpcnN0Q29sbGVjdGlvbldpdGhBdXRoKSB7XG4gICAgICBzYW5pdGl6ZWRDb25maWcuYWRtaW4udXNlciA9IGZpcnN0Q29sbGVjdGlvbldpdGhBdXRoLnNsdWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNhbml0aXplZENvbmZpZy5hZG1pbi51c2VyID0gZGVmYXVsdFVzZXJDb2xsZWN0aW9uLnNsdWc7XG4gICAgICBzYW5pdGl6ZWRDb25maWcuY29sbGVjdGlvbnMucHVzaChkZWZhdWx0VXNlckNvbGxlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGlmICghc2FuaXRpemVkQ29uZmlnLmNvbGxlY3Rpb25zLmZpbmQoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSBzYW5pdGl6ZWRDb25maWcuYWRtaW4udXNlcikpIHtcbiAgICB0aHJvdyBuZXcgSW52YWxpZENvbmZpZ3VyYXRpb24oYCR7c2FuaXRpemVkQ29uZmlnLmFkbWluLnVzZXJ9IGlzIG5vdCBhIHZhbGlkIGFkbWluIHVzZXIgY29sbGVjdGlvbmApO1xuICB9XG5cbiAgLy8gYWRkIGRlZmF1bHQgYnVuZGxlciBpZiBub25lIHByb3ZpZGVkXG4gIGlmICghc2FuaXRpemVkQ29uZmlnLmFkbWluLmJ1bmRsZXIpIHtcbiAgICBzYW5pdGl6ZWRDb25maWcuYWRtaW4uYnVuZGxlciA9IGdldERlZmF1bHRCdW5kbGVyKCk7XG4gIH1cblxuICByZXR1cm4gc2FuaXRpemVkQ29uZmlnIGFzIFBhcnRpYWw8U2FuaXRpemVkQ29uZmlnPjtcbn07XG5cbmV4cG9ydCBjb25zdCBzYW5pdGl6ZUNvbmZpZyA9IChpbmNvbWluZ0NvbmZpZzogQ29uZmlnKTogU2FuaXRpemVkQ29uZmlnID0+IHtcbiAgY29uc3QgY29uZmlnV2l0aERlZmF1bHRzOiBDb25maWcgPSBtZXJnZShkZWZhdWx0cywgaW5jb21pbmdDb25maWcsIHtcbiAgICBpc01lcmdlYWJsZU9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgfSkgYXMgQ29uZmlnO1xuXG4gIGNvbnN0IGNvbmZpZzogUGFydGlhbDxTYW5pdGl6ZWRDb25maWc+ID0gc2FuaXRpemVBZG1pbkNvbmZpZyhjb25maWdXaXRoRGVmYXVsdHMpO1xuXG4gIGlmIChjb25maWcubG9jYWxpemF0aW9uICYmIGNvbmZpZy5sb2NhbGl6YXRpb24ubG9jYWxlcz8ubGVuZ3RoID4gMCkge1xuICAgIC8vIGNsb25lIGxvY2FsaXphdGlvbiBjb25maWcgc28gdG8gbm90IGJyZWFrIGV2ZXJ5dGhpbmdcbiAgICBjb25zdCBmaXJzdExvY2FsZSA9IGNvbmZpZy5sb2NhbGl6YXRpb24ubG9jYWxlc1swXTtcbiAgICBpZiAodHlwZW9mIGZpcnN0TG9jYWxlID09PSAnc3RyaW5nJykge1xuICAgICAgKGNvbmZpZy5sb2NhbGl6YXRpb24gYXMgU2FuaXRpemVkTG9jYWxpemF0aW9uQ29uZmlnKS5sb2NhbGVDb2RlcyA9IFsuLi4oY29uZmlnLmxvY2FsaXphdGlvbiBhcyB1bmtub3duIGFzIExvY2FsaXphdGlvbkNvbmZpZ1dpdGhOb0xhYmVscykubG9jYWxlc107XG5cbiAgICAgIC8vIGlzIHN0cmluZ1tdLCBzbyBjb252ZXJ0IHRvIExvY2FsZVtdXG4gICAgICAoY29uZmlnLmxvY2FsaXphdGlvbiBhcyBTYW5pdGl6ZWRMb2NhbGl6YXRpb25Db25maWcpLmxvY2FsZXMgPSAoY29uZmlnLmxvY2FsaXphdGlvbiBhcyB1bmtub3duIGFzIExvY2FsaXphdGlvbkNvbmZpZ1dpdGhOb0xhYmVscykubG9jYWxlcy5tYXAoKGxvY2FsZSkgPT4gKHtcbiAgICAgICAgbGFiZWw6IGxvY2FsZSxcbiAgICAgICAgY29kZTogbG9jYWxlLFxuICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICB0b1N0cmluZzogKCkgPT4gbG9jYWxlLFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpcyBMb2NhbGVbXSwgc28gY29udmVydCB0byBzdHJpbmdbXSBmb3IgbG9jYWxlQ29kZXNcbiAgICAgIChjb25maWcubG9jYWxpemF0aW9uIGFzIFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZykubG9jYWxlQ29kZXMgPSAoY29uZmlnLmxvY2FsaXphdGlvbiBhcyBTYW5pdGl6ZWRMb2NhbGl6YXRpb25Db25maWcpLmxvY2FsZXMucmVkdWNlKChsb2NhbGVzLCBsb2NhbGUpID0+IHtcbiAgICAgICAgbG9jYWxlcy5wdXNoKGxvY2FsZS5jb2RlKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZXM7XG4gICAgICB9LCBbXSBhcyBzdHJpbmdbXSk7XG5cbiAgICAgIChjb25maWcubG9jYWxpemF0aW9uIGFzIFNhbml0aXplZExvY2FsaXphdGlvbkNvbmZpZykubG9jYWxlcyA9IChjb25maWcubG9jYWxpemF0aW9uIGFzIExvY2FsaXphdGlvbkNvbmZpZ1dpdGhMYWJlbHMpLmxvY2FsZXMubWFwKChsb2NhbGUpID0+ICh7XG4gICAgICAgIC4uLmxvY2FsZSxcbiAgICAgICAgdG9TdHJpbmc6ICgpID0+IGxvY2FsZS5jb2RlLFxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG5cbiAgY29uZmlnV2l0aERlZmF1bHRzLmNvbGxlY3Rpb25zLnB1c2goZ2V0UHJlZmVyZW5jZXNDb2xsZWN0aW9uKGNvbmZpZ1dpdGhEZWZhdWx0cykpO1xuICBjb25maWdXaXRoRGVmYXVsdHMuY29sbGVjdGlvbnMucHVzaChtaWdyYXRpb25zQ29sbGVjdGlvbik7XG5cbiAgY29uZmlnLmNvbGxlY3Rpb25zID0gY29uZmlnLmNvbGxlY3Rpb25zLm1hcCgoY29sbGVjdGlvbikgPT4gc2FuaXRpemVDb2xsZWN0aW9uKGNvbmZpZ1dpdGhEZWZhdWx0cywgY29sbGVjdGlvbikpO1xuICBjaGVja0R1cGxpY2F0ZUNvbGxlY3Rpb25zKGNvbmZpZy5jb2xsZWN0aW9ucyk7XG5cbiAgaWYgKGNvbmZpZy5nbG9iYWxzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcuZ2xvYmFscyA9IHNhbml0aXplR2xvYmFscyhjb25maWcuY29sbGVjdGlvbnMsIGNvbmZpZy5nbG9iYWxzKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgY29uZmlnLnNlcnZlclVSTCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25maWcuc2VydmVyVVJMID0gJyc7XG4gIH1cblxuICBpZiAoY29uZmlnLnNlcnZlclVSTCAhPT0gJycpIHtcbiAgICBjb25maWcuY3NyZi5wdXNoKGNvbmZpZy5zZXJ2ZXJVUkwpO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZyBhcyBTYW5pdGl6ZWRDb25maWc7XG59O1xuIl0sIm5hbWVzIjpbInNhbml0aXplQ29uZmlnIiwic2FuaXRpemVBZG1pbkNvbmZpZyIsImNvbmZpZ1RvU2FuaXRpemUiLCJzYW5pdGl6ZWRDb25maWciLCJhZG1pbiIsInVzZXIiLCJmaXJzdENvbGxlY3Rpb25XaXRoQXV0aCIsImNvbGxlY3Rpb25zIiwiZmluZCIsImF1dGgiLCJCb29sZWFuIiwic2x1ZyIsImRlZmF1bHRVc2VyQ29sbGVjdGlvbiIsInB1c2giLCJJbnZhbGlkQ29uZmlndXJhdGlvbiIsImJ1bmRsZXIiLCJnZXREZWZhdWx0QnVuZGxlciIsImluY29taW5nQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnV2l0aERlZmF1bHRzIiwibWVyZ2UiLCJkZWZhdWx0cyIsImlzTWVyZ2VhYmxlT2JqZWN0IiwiaXNQbGFpbk9iamVjdCIsImxvY2FsaXphdGlvbiIsImxvY2FsZXMiLCJsZW5ndGgiLCJmaXJzdExvY2FsZSIsImxvY2FsZUNvZGVzIiwibWFwIiwibG9jYWxlIiwibGFiZWwiLCJjb2RlIiwicnRsIiwidG9TdHJpbmciLCJyZWR1Y2UiLCJnZXRQcmVmZXJlbmNlc0NvbGxlY3Rpb24iLCJtaWdyYXRpb25zQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJzYW5pdGl6ZUNvbGxlY3Rpb24iLCJjaGVja0R1cGxpY2F0ZUNvbGxlY3Rpb25zIiwiZ2xvYmFscyIsInNhbml0aXplR2xvYmFscyIsInNlcnZlclVSTCIsImNzcmYiXSwibWFwcGluZ3MiOiI7Ozs7K0JBdUNhQTs7O2VBQUFBOzs7Z0VBdkNLOzZCQUNZOzJCQUVROytEQUNQO3NCQUNNO2dFQUNUO2dGQUNVO3dCQUNiOzRFQUNZO29DQUNBOzhEQUNQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNQyxzQkFBc0IsU0FBQ0M7UUFJdEJDLHdCQUFBQTtJQUhMLElBQU1BLGtCQUFrQixtQkFBS0Q7SUFFN0IsK0NBQStDO0lBQy9DLElBQUksR0FBQ0MsbUJBQUFBLDZCQUFBQSx3Q0FBQUEseUJBQUFBLGlCQUFpQkMsS0FBSyxjQUF0QkQsNkNBQUFBLHVCQUF3QkUsSUFBSSxHQUFFO1FBQ2pDLElBQU1DLDBCQUEwQkgsZ0JBQWdCSSxXQUFXLENBQUNDLElBQUksQ0FBQztnQkFBR0MsYUFBQUE7bUJBQVdDLFFBQVFEOztRQUN2RixJQUFJSCx5QkFBeUI7WUFDM0JILGdCQUFnQkMsS0FBSyxDQUFDQyxJQUFJLEdBQUdDLHdCQUF3QkssSUFBSTtRQUMzRCxPQUFPO1lBQ0xSLGdCQUFnQkMsS0FBSyxDQUFDQyxJQUFJLEdBQUdPLGtDQUFxQixDQUFDRCxJQUFJO1lBQ3ZEUixnQkFBZ0JJLFdBQVcsQ0FBQ00sSUFBSSxDQUFDRCxrQ0FBcUI7UUFDeEQ7SUFDRjtJQUVBLElBQUksQ0FBQ1QsZ0JBQWdC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