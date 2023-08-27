"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return restoreVersionLocal;
    }
});
var _dataloader = require("../../../collections/dataloader");
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("../restoreVersion"));
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
function restoreVersionLocal(payload, options) {
    return _restoreVersionLocal.apply(this, arguments);
}
function _restoreVersionLocal() {
    _restoreVersionLocal = _async_to_generator(function(payload, options) {
        var _payload_config_localization, globalSlug, depth, id, user, _options_locale, locale, _options_fallbackLocale, fallbackLocale, _options_overrideAccess, overrideAccess, showHiddenFields, globalConfig, i18n, req;
        return _ts_generator(this, function(_state) {
            globalSlug = options.slug, depth = options.depth, id = options.id, user = options.user, _options_locale = options.locale, locale = _options_locale === void 0 ? payload.config.localization ? (_payload_config_localization = payload.config.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields;
            globalConfig = payload.globals.config.find(function(config) {
                return config.slug === globalSlug;
            });
            i18n = (0, _init.i18nInit)(payload.config.i18n);
            if (!globalConfig) {
                throw new _errors.APIError("The global with slug ".concat(String(globalSlug), " can't be found."));
            }
            req = {
                user: user,
                payloadAPI: "local",
                payload: payload,
                locale: locale,
                fallbackLocale: fallbackLocale,
                i18n: i18n,
                t: i18n.t
            };
            (0, _setRequestContext.setRequestContext)(req);
            if (!req.payloadDataLoader) req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
            return [
                2,
                (0, _restoreVersion.default)({
                    depth: depth,
                    globalConfig: globalConfig,
                    overrideAccess: overrideAccess,
                    id: id,
                    showHiddenFields: showHiddenFields,
                    req: req
                })
            ];
        });
    });
    return _restoreVersionLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvbG9jYWwvcmVzdG9yZVZlcnNpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIGFzIEdlbmVyYXRlZFR5cGVzIH0gZnJvbSAncGF5bG9hZC9nZW5lcmF0ZWQtdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uLy4uLy4uL3BheWxvYWQnO1xuaW1wb3J0IHsgZ2V0RGF0YUxvYWRlciB9IGZyb20gJy4uLy4uLy4uL2NvbGxlY3Rpb25zL2RhdGFsb2FkZXInO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHJlc3RvcmVWZXJzaW9uIGZyb20gJy4uL3Jlc3RvcmVWZXJzaW9uJztcbmltcG9ydCB7IGkxOG5Jbml0IH0gZnJvbSAnLi4vLi4vLi4vdHJhbnNsYXRpb25zL2luaXQnO1xuaW1wb3J0IHsgQVBJRXJyb3IgfSBmcm9tICcuLi8uLi8uLi9lcnJvcnMnO1xuaW1wb3J0IHsgc2V0UmVxdWVzdENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0JztcblxuZXhwb3J0IHR5cGUgT3B0aW9uczxUIGV4dGVuZHMga2V5b2YgR2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXT4gPSB7XG4gIHNsdWc6IHN0cmluZ1xuICBpZDogc3RyaW5nXG4gIGRlcHRoPzogbnVtYmVyXG4gIGxvY2FsZT86IHN0cmluZ1xuICBmYWxsYmFja0xvY2FsZT86IHN0cmluZ1xuICB1c2VyPzogRG9jdW1lbnRcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVWZXJzaW9uTG9jYWw8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ10+KFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBvcHRpb25zOiBPcHRpb25zPFQ+LFxuKTogUHJvbWlzZTxHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddW1RdPiB7XG4gIGNvbnN0IHtcbiAgICBzbHVnOiBnbG9iYWxTbHVnLFxuICAgIGRlcHRoLFxuICAgIGlkLFxuICAgIHVzZXIsXG4gICAgbG9jYWxlID0gcGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8gcGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uPy5kZWZhdWx0TG9jYWxlIDogbnVsbCxcbiAgICBmYWxsYmFja0xvY2FsZSA9IG51bGwsXG4gICAgb3ZlcnJpZGVBY2Nlc3MgPSB0cnVlLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IGdsb2JhbENvbmZpZyA9IHBheWxvYWQuZ2xvYmFscy5jb25maWcuZmluZCgoY29uZmlnKSA9PiBjb25maWcuc2x1ZyA9PT0gZ2xvYmFsU2x1Zyk7XG4gIGNvbnN0IGkxOG4gPSBpMThuSW5pdChwYXlsb2FkLmNvbmZpZy5pMThuKTtcblxuICBpZiAoIWdsb2JhbENvbmZpZykge1xuICAgIHRocm93IG5ldyBBUElFcnJvcihgVGhlIGdsb2JhbCB3aXRoIHNsdWcgJHtTdHJpbmcoZ2xvYmFsU2x1Zyl9IGNhbid0IGJlIGZvdW5kLmApO1xuICB9XG5cbiAgY29uc3QgcmVxID0ge1xuICAgIHVzZXIsXG4gICAgcGF5bG9hZEFQSTogJ2xvY2FsJyxcbiAgICBwYXlsb2FkLFxuICAgIGxvY2FsZSxcbiAgICBmYWxsYmFja0xvY2FsZSxcbiAgICBpMThuLFxuICAgIHQ6IGkxOG4udCxcbiAgfSBhcyBQYXlsb2FkUmVxdWVzdDtcbiAgc2V0UmVxdWVzdENvbnRleHQocmVxKTtcblxuICBpZiAoIXJlcS5wYXlsb2FkRGF0YUxvYWRlcikgcmVxLnBheWxvYWREYXRhTG9hZGVyID0gZ2V0RGF0YUxvYWRlcihyZXEpO1xuXG4gIHJldHVybiByZXN0b3JlVmVyc2lvbih7XG4gICAgZGVwdGgsXG4gICAgZ2xvYmFsQ29uZmlnLFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIGlkLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgcmVxLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJyZXN0b3JlVmVyc2lvbkxvY2FsIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJnbG9iYWxTbHVnIiwiZGVwdGgiLCJpZCIsInVzZXIiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsIm92ZXJyaWRlQWNjZXNzIiwic2hvd0hpZGRlbkZpZWxkcyIsImdsb2JhbENvbmZpZyIsImkxOG4iLCJyZXEiLCJzbHVnIiwiY29uZmlnIiwibG9jYWxpemF0aW9uIiwiZGVmYXVsdExvY2FsZSIsImdsb2JhbHMiLCJmaW5kIiwiaTE4bkluaXQiLCJBUElFcnJvciIsIlN0cmluZyIsInBheWxvYWRBUEkiLCJ0Iiwic2V0UmVxdWVzdENvbnRleHQiLCJwYXlsb2FkRGF0YUxvYWRlciIsImdldERhdGFMb2FkZXIiLCJyZXN0b3JlVmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7OztlQUE4QkE7OzswQkFuQkE7cUVBR0g7b0JBQ0Y7c0JBQ0E7aUNBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FhSkEsb0JBQzVCQyxPQUFnQixFQUNoQkMsT0FBbUI7V0FGU0Y7O1NBQUFBO0lBQUFBLHVCQUFmLG9CQUFBLFNBQ2JDLE9BQWdCLEVBQ2hCQyxPQUFtQjtZQU9zQkQsOEJBSmpDRSxZQUNOQyxPQUNBQyxJQUNBQyx1QkFDQUMsaUNBQ0FDLHlDQUNBQyxnQkFDQUMsa0JBR0lDLGNBQ0FDLE1BTUFDOztZQWpCRVYsYUFRSkQsUUFSRlksTUFDQVYsUUFPRUYsUUFQRkUsT0FDQUMsS0FNRUgsUUFORkcsSUFDQUMsT0FLRUosUUFMRkksd0JBS0VKLFFBSkZLLFFBQUFBLHNDQUFTTixRQUFRYyxNQUFNLENBQUNDLFlBQVksSUFBR2YsK0JBQUFBLFFBQVFjLE1BQU0sQ0FBQ0MsWUFBWSxjQUEzQmYsbURBQUFBLDZCQUE2QmdCLGFBQWEsR0FBRyxrREFJbEZmLFFBSEZNLGdCQUFBQSxzREFBaUIsMERBR2ZOLFFBRkZPLGdCQUFBQSxzREFBaUIsZ0NBQ2pCQyxtQkFDRVIsUUFERlE7WUFHSUMsZUFBZVYsUUFBUWlCLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDSSxJQUFJLENBQUMsU0FBQ0o7dUJBQVdBLE9BQU9ELElBQUksS0FBS1g7O1lBQ3ZFUyxPQUFPUSxJQUFBQSxjQUFRLEVBQUNuQixRQUFRYyxNQUFNLENBQUNILElBQUk7WUFFekMsSUFBSSxDQUFDRCxjQUFjO2dCQUNqQixNQUFNLElBQUlVLGdCQUFRLENBQUMsQUFBQyx3QkFBMEMsT0FBbkJDLE9BQU9uQixhQUFZO1lBQ2hFO1lBRU1VLE1BQU07Z0JBQ1ZQLE1BQUFBO2dCQUNBaUIsWUFBWTtnQkFDWnRCLFNBQUFBO2dCQUNBTSxRQUFBQTtnQkFDQUMsZ0JBQUFBO2dCQUNBSSxNQUFBQTtnQkFDQVksR0FBR1osS0FBS1ksQ0FBQztZQUNYO1lBQ0FDLElBQUFBLG9DQUFpQixFQUFDWjtZQUVsQixJQUFJLENBQUNBLElBQUlhLGlCQUFpQixFQUFFYixJQUFJYSxpQkFBaUIsR0FBR0MsSUFBQUEseUJBQWEsRUFBQ2Q7WUFFbEU7O2dCQUFPZSxJQUFBQSx1QkFBYyxFQUFDO29CQUNwQnhCLE9BQUFBO29CQUNBTyxjQUFBQTtvQkFDQUYsZ0JBQUFBO29CQUNBSixJQUFBQTtvQkFDQUssa0JBQUFBO29CQUNBRyxLQUFBQTtnQkFDRjs7O0lBQ0Y7V0EzQzhCYiJ9