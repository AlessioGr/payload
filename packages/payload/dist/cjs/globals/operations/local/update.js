"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return updateLocal;
    }
});
var _update = /*#__PURE__*/ _interop_require_default(require("../update"));
var _dataloader = require("../../../collections/dataloader");
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
function updateLocal(payload, options) {
    return _updateLocal.apply(this, arguments);
}
function _updateLocal() {
    _updateLocal = _async_to_generator(function(payload, options) {
        var _payload_config_localization, globalSlug, depth, _options_locale, locale, _options_fallbackLocale, fallbackLocale, data, user, _options_overrideAccess, overrideAccess, showHiddenFields, draft, globalConfig, i18n, req;
        return _ts_generator(this, function(_state) {
            globalSlug = options.slug, depth = options.depth, _options_locale = options.locale, locale = _options_locale === void 0 ? payload.config.localization ? (_payload_config_localization = payload.config.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, data = options.data, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields, draft = options.draft;
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
                locale: locale,
                fallbackLocale: fallbackLocale,
                payload: payload,
                i18n: i18n,
                t: i18n.t
            };
            (0, _setRequestContext.setRequestContext)(req);
            if (!req.payloadDataLoader) req.payloadDataLoader = (0, _dataloader.getDataLoader)(req);
            return [
                2,
                (0, _update.default)({
                    slug: globalSlug,
                    data: data,
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
    return _updateLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvbG9jYWwvdXBkYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IERlZXBQYXJ0aWFsIH0gZnJvbSAndHMtZXNzZW50aWFscyc7XG5pbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vLi4vLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBEb2N1bWVudCB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgdXBkYXRlIGZyb20gJy4uL3VwZGF0ZSc7XG5pbXBvcnQgeyBnZXREYXRhTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvZGF0YWxvYWRlcic7XG5pbXBvcnQgeyBpMThuSW5pdCB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9pbml0JztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IHNldFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy9zZXRSZXF1ZXN0Q29udGV4dCc7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VFNsdWcgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddPiA9IHtcbiAgc2x1ZzogVFNsdWdcbiAgZGVwdGg/OiBudW1iZXJcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gIGRhdGE6IERlZXBQYXJ0aWFsPE9taXQ8R2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUU2x1Z10sICdpZCc+PlxuICB1c2VyPzogRG9jdW1lbnRcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHNob3dIaWRkZW5GaWVsZHM/OiBib29sZWFuXG4gIGRyYWZ0PzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMb2NhbDxUU2x1ZyBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ10+KFxuICBwYXlsb2FkOiBQYXlsb2FkLFxuICBvcHRpb25zOiBPcHRpb25zPFRTbHVnPixcbik6IFByb21pc2U8R2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUU2x1Z10+IHtcbiAgY29uc3Qge1xuICAgIHNsdWc6IGdsb2JhbFNsdWcsXG4gICAgZGVwdGgsXG4gICAgbG9jYWxlID0gcGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8gcGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uPy5kZWZhdWx0TG9jYWxlIDogbnVsbCxcbiAgICBmYWxsYmFja0xvY2FsZSA9IG51bGwsXG4gICAgZGF0YSxcbiAgICB1c2VyLFxuICAgIG92ZXJyaWRlQWNjZXNzID0gdHJ1ZSxcbiAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgIGRyYWZ0LFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBnbG9iYWxDb25maWcgPSBwYXlsb2FkLmdsb2JhbHMuY29uZmlnLmZpbmQoKGNvbmZpZykgPT4gY29uZmlnLnNsdWcgPT09IGdsb2JhbFNsdWcpO1xuICBjb25zdCBpMThuID0gaTE4bkluaXQocGF5bG9hZC5jb25maWcuaTE4bik7XG5cbiAgaWYgKCFnbG9iYWxDb25maWcpIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoYFRoZSBnbG9iYWwgd2l0aCBzbHVnICR7U3RyaW5nKGdsb2JhbFNsdWcpfSBjYW4ndCBiZSBmb3VuZC5gKTtcbiAgfVxuXG4gIGNvbnN0IHJlcSA9IHtcbiAgICB1c2VyLFxuICAgIHBheWxvYWRBUEk6ICdsb2NhbCcsXG4gICAgbG9jYWxlLFxuICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgIHBheWxvYWQsXG4gICAgaTE4bixcbiAgICB0OiBpMThuLnQsXG4gIH0gYXMgUGF5bG9hZFJlcXVlc3Q7XG4gIHNldFJlcXVlc3RDb250ZXh0KHJlcSk7XG5cbiAgaWYgKCFyZXEucGF5bG9hZERhdGFMb2FkZXIpIHJlcS5wYXlsb2FkRGF0YUxvYWRlciA9IGdldERhdGFMb2FkZXIocmVxKTtcblxuICByZXR1cm4gdXBkYXRlPFRTbHVnPih7XG4gICAgc2x1ZzogZ2xvYmFsU2x1ZyBhcyBzdHJpbmcsXG4gICAgZGF0YSxcbiAgICBkZXB0aCxcbiAgICBnbG9iYWxDb25maWcsXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBkcmFmdCxcbiAgICByZXEsXG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInVwZGF0ZUxvY2FsIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJnbG9iYWxTbHVnIiwiZGVwdGgiLCJsb2NhbGUiLCJmYWxsYmFja0xvY2FsZSIsImRhdGEiLCJ1c2VyIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwiZHJhZnQiLCJnbG9iYWxDb25maWciLCJpMThuIiwicmVxIiwic2x1ZyIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsImRlZmF1bHRMb2NhbGUiLCJnbG9iYWxzIiwiZmluZCIsImkxOG5Jbml0IiwiQVBJRXJyb3IiLCJTdHJpbmciLCJwYXlsb2FkQVBJIiwidCIsInNldFJlcXVlc3RDb250ZXh0IiwicGF5bG9hZERhdGFMb2FkZXIiLCJnZXREYXRhTG9hZGVyIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7OytCQXVCQTs7O2VBQThCQTs7OzZEQWxCWDswQkFDVztvQkFDTDtzQkFDQTtpQ0FDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWNKQSxZQUM1QkMsT0FBZ0IsRUFDaEJDLE9BQXVCO1dBRktGOztTQUFBQTtJQUFBQSxlQUFmLG9CQUFBLFNBQ2JDLE9BQWdCLEVBQ2hCQyxPQUF1QjtZQUtrQkQsOEJBRmpDRSxZQUNOQyx3QkFDQUMsaUNBQ0FDLGdCQUNBQyxNQUNBQywrQkFDQUMsZ0JBQ0FDLGtCQUNBQyxPQUdJQyxjQUNBQyxNQU1BQzs7WUFsQkVYLGFBU0pELFFBVEZhLE1BQ0FYLFFBUUVGLFFBUkZFLHlCQVFFRixRQVBGRyxRQUFBQSxzQ0FBU0osUUFBUWUsTUFBTSxDQUFDQyxZQUFZLElBQUdoQiwrQkFBQUEsUUFBUWUsTUFBTSxDQUFDQyxZQUFZLGNBQTNCaEIsbURBQUFBLDZCQUE2QmlCLGFBQWEsR0FBRyxrREFPbEZoQixRQU5GSSxnQkFBQUEsc0RBQWlCLGdDQUNqQkMsT0FLRUwsUUFMRkssTUFDQUMsT0FJRU4sUUFKRk0sZ0NBSUVOLFFBSEZPLGdCQUFBQSxzREFBaUIsZ0NBQ2pCQyxtQkFFRVIsUUFGRlEsa0JBQ0FDLFFBQ0VULFFBREZTO1lBR0lDLGVBQWVYLFFBQVFrQixPQUFPLENBQUNILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLFNBQUNKO3VCQUFXQSxPQUFPRCxJQUFJLEtBQUtaOztZQUN2RVUsT0FBT1EsSUFBQUEsY0FBUSxFQUFDcEIsUUFBUWUsTUFBTSxDQUFDSCxJQUFJO1lBRXpDLElBQUksQ0FBQ0QsY0FBYztnQkFDakIsTUFBTSxJQUFJVSxnQkFBUSxDQUFDLEFBQUMsd0JBQTBDLE9BQW5CQyxPQUFPcEIsYUFBWTtZQUNoRTtZQUVNVyxNQUFNO2dCQUNWTixNQUFBQTtnQkFDQWdCLFlBQVk7Z0JBQ1puQixRQUFBQTtnQkFDQUMsZ0JBQUFBO2dCQUNBTCxTQUFBQTtnQkFDQVksTUFBQUE7Z0JBQ0FZLEdBQUdaLEtBQUtZLENBQUM7WUFDWDtZQUNBQyxJQUFBQSxvQ0FBaUIsRUFBQ1o7WUFFbEIsSUFBSSxDQUFDQSxJQUFJYSxpQkFBaUIsRUFBRWIsSUFBSWEsaUJBQWlCLEdBQUdDLElBQUFBLHlCQUFhLEVBQUNkO1lBRWxFOztnQkFBT2UsSUFBQUEsZUFBTSxFQUFRO29CQUNuQmQsTUFBTVo7b0JBQ05JLE1BQUFBO29CQUNBSCxPQUFBQTtvQkFDQVEsY0FBQUE7b0JBQ0FILGdCQUFBQTtvQkFDQUMsa0JBQUFBO29CQUNBQyxPQUFBQTtvQkFDQUcsS0FBQUE7Z0JBQ0Y7OztJQUNGO1dBOUM4QmQifQ==