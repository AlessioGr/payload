"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return findOneLocal;
    }
});
var _dataloader = require("../../../collections/dataloader");
var _findOne = /*#__PURE__*/ _interop_require_default(require("../findOne"));
var _init = require("../../../translations/init");
var _errors = require("../../../errors");
var _setRequestContext = require("../../../express/setRequestContext");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function findOneLocal(payload, options) {
    return _findOneLocal.apply(this, arguments);
}
function _findOneLocal() {
    _findOneLocal = _async_to_generator(function(payload, options) {
        var _payload_config_localization, _payload_config, _payload, _payload_config_localization1, _payload_config1, _payload1, _options_req, _options_req1, globalSlug, depth, _options_locale, locale, _options_fallbackLocale, fallbackLocale, user, _options_overrideAccess, overrideAccess, showHiddenFields, _options_draft, draft, globalConfig, defaultLocale, i18n, _ref, _ref1, req;
        return _ts_generator(this, function(_state) {
            globalSlug = options.slug, depth = options.depth, _options_locale = options.locale, locale = _options_locale === void 0 ? payload.config.localization ? (_payload_config_localization = payload.config.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields, _options_draft = options.draft, draft = _options_draft === void 0 ? false : _options_draft;
            globalConfig = payload.globals.config.find(function(config) {
                return config.slug === globalSlug;
            });
            defaultLocale = ((_payload = payload) === null || _payload === void 0 ? void 0 : (_payload_config = _payload.config) === null || _payload_config === void 0 ? void 0 : _payload_config.localization) ? (_payload1 = payload) === null || _payload1 === void 0 ? void 0 : (_payload_config1 = _payload1.config) === null || _payload_config1 === void 0 ? void 0 : (_payload_config_localization1 = _payload_config1.localization) === null || _payload_config_localization1 === void 0 ? void 0 : _payload_config_localization1.defaultLocale : null;
            if (!globalConfig) {
                throw new _errors.APIError("The global with slug ".concat(String(globalSlug), " can't be found."));
            }
            i18n = (0, _init.i18nInit)(payload.config.i18n);
            req = {
                user: user,
                payloadAPI: "local",
                locale: (_ref = locale !== null && locale !== void 0 ? locale : (_options_req = options.req) === null || _options_req === void 0 ? void 0 : _options_req.locale) !== null && _ref !== void 0 ? _ref : defaultLocale,
                fallbackLocale: (_ref1 = fallbackLocale !== null && fallbackLocale !== void 0 ? fallbackLocale : (_options_req1 = options.req) === null || _options_req1 === void 0 ? void 0 : _options_req1.fallbackLocale) !== null && _ref1 !== void 0 ? _ref1 : defaultLocale,
                payload: payload,
                i18n: i18n,
                t: i18n.t
            };
            (0, _setRequestContext.setRequestContext)(req);
            if (!req.payloadDataLoader) req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
            return [
                2,
                (0, _findOne.default)({
                    slug: globalSlug,
                    depth: depth,
                    globalConfig: globalConfig,
                    overrideAccess: overrideAccess,
                    showHiddenFields: showHiddenFields,
                    draft: draft,
                    req: req
                })
            ];
        });
    });
    return _findOneLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvbG9jYWwvZmluZE9uZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgYXMgR2VuZXJhdGVkVHlwZXMgfSBmcm9tICdwYXlsb2FkL2dlbmVyYXRlZC10eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBnZXREYXRhTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvZGF0YWxvYWRlcic7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tICcuLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgZmluZE9uZSBmcm9tICcuLi9maW5kT25lJztcbmltcG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zL2luaXQnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgc2V0UmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0JztcblxuZXhwb3J0IHR5cGUgT3B0aW9uczxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4gPSB7XG4gIHNsdWc6IFRcbiAgZGVwdGg/OiBudW1iZXJcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gIHVzZXI/OiBEb2N1bWVudFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgZHJhZnQ/OiBib29sZWFuXG4gIHJlcT86IFBheWxvYWRSZXF1ZXN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRPbmVMb2NhbDxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4oXG4gIHBheWxvYWQ6IFBheWxvYWQsXG4gIG9wdGlvbnM6IE9wdGlvbnM8VD4sXG4pOiBQcm9taXNlPEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ11bVF0+IHtcbiAgY29uc3Qge1xuICAgIHNsdWc6IGdsb2JhbFNsdWcsXG4gICAgZGVwdGgsXG4gICAgbG9jYWxlID0gcGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8gcGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uPy5kZWZhdWx0TG9jYWxlIDogbnVsbCxcbiAgICBmYWxsYmFja0xvY2FsZSA9IG51bGwsXG4gICAgdXNlcixcbiAgICBvdmVycmlkZUFjY2VzcyA9IHRydWUsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBkcmFmdCA9IGZhbHNlLFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBnbG9iYWxDb25maWcgPSBwYXlsb2FkLmdsb2JhbHMuY29uZmlnLmZpbmQoKGNvbmZpZykgPT4gY29uZmlnLnNsdWcgPT09IGdsb2JhbFNsdWcpO1xuICBjb25zdCBkZWZhdWx0TG9jYWxlID0gcGF5bG9hZD8uY29uZmlnPy5sb2NhbGl6YXRpb24gPyBwYXlsb2FkPy5jb25maWc/LmxvY2FsaXphdGlvbj8uZGVmYXVsdExvY2FsZSA6IG51bGw7XG5cbiAgaWYgKCFnbG9iYWxDb25maWcpIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoYFRoZSBnbG9iYWwgd2l0aCBzbHVnICR7U3RyaW5nKGdsb2JhbFNsdWcpfSBjYW4ndCBiZSBmb3VuZC5gKTtcbiAgfVxuXG4gIGNvbnN0IGkxOG4gPSBpMThuSW5pdChwYXlsb2FkLmNvbmZpZy5pMThuKTtcblxuXG4gIGNvbnN0IHJlcSA9IHtcbiAgICB1c2VyLFxuICAgIHBheWxvYWRBUEk6ICdsb2NhbCcsXG4gICAgbG9jYWxlOiBsb2NhbGUgPz8gb3B0aW9ucy5yZXE/LmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlLFxuICAgIGZhbGxiYWNrTG9jYWxlOiBmYWxsYmFja0xvY2FsZSA/PyBvcHRpb25zLnJlcT8uZmFsbGJhY2tMb2NhbGUgPz8gZGVmYXVsdExvY2FsZSxcbiAgICBwYXlsb2FkLFxuICAgIGkxOG4sXG4gICAgdDogaTE4bi50LFxuICB9IGFzIFBheWxvYWRSZXF1ZXN0O1xuICBzZXRSZXF1ZXN0Q29udGV4dChyZXEpO1xuXG4gIGlmICghcmVxLnBheWxvYWREYXRhTG9hZGVyKSByZXEucGF5bG9hZERhdGFMb2FkZXIgPSBnZXREYXRhTG9hZGVyKHJlcSk7XG5cbiAgcmV0dXJuIGZpbmRPbmUoe1xuICAgIHNsdWc6IGdsb2JhbFNsdWcgYXMgc3RyaW5nLFxuICAgIGRlcHRoLFxuICAgIGdsb2JhbENvbmZpZyxcbiAgICBvdmVycmlkZUFjY2VzcyxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIGRyYWZ0LFxuICAgIHJlcSxcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmluZE9uZUxvY2FsIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJnbG9iYWxTbHVnIiwiZGVwdGgiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsInVzZXIiLCJvdmVycmlkZUFjY2VzcyIsInNob3dIaWRkZW5GaWVsZHMiLCJkcmFmdCIsImdsb2JhbENvbmZpZyIsImRlZmF1bHRMb2NhbGUiLCJpMThuIiwicmVxIiwic2x1ZyIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsImdsb2JhbHMiLCJmaW5kIiwiQVBJRXJyb3IiLCJTdHJpbmciLCJpMThuSW5pdCIsInBheWxvYWRBUEkiLCJ0Iiwic2V0UmVxdWVzdENvbnRleHQiLCJwYXlsb2FkRGF0YUxvYWRlciIsImdldERhdGFMb2FkZXIiLCJmaW5kT25lIl0sIm1hcHBpbmdzIjoiOzs7OytCQXNCQTs7O2VBQThCQTs7OzBCQXBCQTs4REFHVjtvQkFDSztzQkFDQTtpQ0FDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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