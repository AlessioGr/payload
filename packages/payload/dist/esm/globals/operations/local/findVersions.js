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
import findVersions from "../findVersions";
import { getDataLoader } from "../../../collections/dataloader";
import { i18nInit } from "../../../translations/init";
import { APIError } from "../../../errors";
import { setRequestContext } from "../../../express/setRequestContext";
export default function findVersionsLocal(payload, options) {
    return _findVersionsLocal.apply(this, arguments);
}
function _findVersionsLocal() {
    _findVersionsLocal = _async_to_generator(function(payload, options) {
        var _payload_config_localization, globalSlug, depth, page, limit, where, _options_locale, locale, _options_fallbackLocale, fallbackLocale, user, _options_overrideAccess, overrideAccess, showHiddenFields, sort, globalConfig, i18n, req;
        return _ts_generator(this, function(_state) {
            globalSlug = options.slug, depth = options.depth, page = options.page, limit = options.limit, where = options.where, _options_locale = options.locale, locale = _options_locale === void 0 ? payload.config.localization ? (_payload_config_localization = payload.config.localization) === null || _payload_config_localization === void 0 ? void 0 : _payload_config_localization.defaultLocale : null : _options_locale, _options_fallbackLocale = options.fallbackLocale, fallbackLocale = _options_fallbackLocale === void 0 ? null : _options_fallbackLocale, user = options.user, _options_overrideAccess = options.overrideAccess, overrideAccess = _options_overrideAccess === void 0 ? true : _options_overrideAccess, showHiddenFields = options.showHiddenFields, sort = options.sort;
            globalConfig = payload.globals.config.find(function(config) {
                return config.slug === globalSlug;
            });
            i18n = i18nInit(payload.config.i18n);
            if (!globalConfig) {
                throw new APIError("The global with slug ".concat(String(globalSlug), " can't be found."));
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
            setRequestContext(req);
            if (!req.payloadDataLoader) req.payloadDataLoader = getDataLoader(req);
            return [
                2,
                findVersions({
                    where: where,
                    page: page,
                    limit: limit,
                    depth: depth,
                    globalConfig: globalConfig,
                    sort: sort,
                    overrideAccess: overrideAccess,
                    showHiddenFields: showHiddenFields,
                    req: req
                })
            ];
        });
    });
    return _findVersionsLocal.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9nbG9iYWxzL29wZXJhdGlvbnMvbG9jYWwvZmluZFZlcnNpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyBhcyBHZW5lcmF0ZWRUeXBlcyB9IGZyb20gJ3BheWxvYWQvZ2VuZXJhdGVkLXR5cGVzJztcbmltcG9ydCB7IERvY3VtZW50LCBXaGVyZSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgUGFnaW5hdGVkRG9jcyB9IGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWQgfSBmcm9tICcuLi8uLi8uLi9wYXlsb2FkJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgZmluZFZlcnNpb25zIGZyb20gJy4uL2ZpbmRWZXJzaW9ucyc7XG5pbXBvcnQgeyBnZXREYXRhTG9hZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29sbGVjdGlvbnMvZGF0YWxvYWRlcic7XG5pbXBvcnQgeyBpMThuSW5pdCB9IGZyb20gJy4uLy4uLy4uL3RyYW5zbGF0aW9ucy9pbml0JztcbmltcG9ydCB7IEFQSUVycm9yIH0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IFR5cGVXaXRoVmVyc2lvbiB9IGZyb20gJy4uLy4uLy4uL3ZlcnNpb25zL3R5cGVzJztcbmltcG9ydCB7IHNldFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy9zZXRSZXF1ZXN0Q29udGV4dCc7XG5cbmV4cG9ydCB0eXBlIE9wdGlvbnM8VCBleHRlbmRzIGtleW9mIEdlbmVyYXRlZFR5cGVzWydnbG9iYWxzJ10+ID0ge1xuICBzbHVnOiBUXG4gIGRlcHRoPzogbnVtYmVyXG4gIHBhZ2U/OiBudW1iZXJcbiAgbGltaXQ/OiBudW1iZXJcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGZhbGxiYWNrTG9jYWxlPzogc3RyaW5nXG4gIHVzZXI/OiBEb2N1bWVudFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgc2hvd0hpZGRlbkZpZWxkcz86IGJvb2xlYW5cbiAgc29ydD86IHN0cmluZ1xuICB3aGVyZT86IFdoZXJlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmRWZXJzaW9uc0xvY2FsPFQgZXh0ZW5kcyBrZXlvZiBHZW5lcmF0ZWRUeXBlc1snZ2xvYmFscyddPihcbiAgcGF5bG9hZDogUGF5bG9hZCxcbiAgb3B0aW9uczogT3B0aW9uczxUPixcbik6IFByb21pc2U8UGFnaW5hdGVkRG9jczxUeXBlV2l0aFZlcnNpb248R2VuZXJhdGVkVHlwZXNbJ2dsb2JhbHMnXVtUXT4+PiB7XG4gIGNvbnN0IHtcbiAgICBzbHVnOiBnbG9iYWxTbHVnLFxuICAgIGRlcHRoLFxuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgd2hlcmUsXG4gICAgbG9jYWxlID0gcGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uID8gcGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uPy5kZWZhdWx0TG9jYWxlIDogbnVsbCxcbiAgICBmYWxsYmFja0xvY2FsZSA9IG51bGwsXG4gICAgdXNlcixcbiAgICBvdmVycmlkZUFjY2VzcyA9IHRydWUsXG4gICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICBzb3J0LFxuICB9ID0gb3B0aW9ucztcblxuICBjb25zdCBnbG9iYWxDb25maWcgPSBwYXlsb2FkLmdsb2JhbHMuY29uZmlnLmZpbmQoKGNvbmZpZykgPT4gY29uZmlnLnNsdWcgPT09IGdsb2JhbFNsdWcpO1xuICBjb25zdCBpMThuID0gaTE4bkluaXQocGF5bG9hZC5jb25maWcuaTE4bik7XG5cbiAgaWYgKCFnbG9iYWxDb25maWcpIHtcbiAgICB0aHJvdyBuZXcgQVBJRXJyb3IoYFRoZSBnbG9iYWwgd2l0aCBzbHVnICR7U3RyaW5nKGdsb2JhbFNsdWcpfSBjYW4ndCBiZSBmb3VuZC5gKTtcbiAgfVxuXG4gIGNvbnN0IHJlcSA9IHtcbiAgICB1c2VyLFxuICAgIHBheWxvYWRBUEk6ICdsb2NhbCcsXG4gICAgbG9jYWxlLFxuICAgIGZhbGxiYWNrTG9jYWxlLFxuICAgIHBheWxvYWQsXG4gICAgaTE4bixcbiAgICB0OiBpMThuLnQsXG4gIH0gYXMgUGF5bG9hZFJlcXVlc3Q7XG4gIHNldFJlcXVlc3RDb250ZXh0KHJlcSk7XG5cbiAgaWYgKCFyZXEucGF5bG9hZERhdGFMb2FkZXIpIHJlcS5wYXlsb2FkRGF0YUxvYWRlciA9IGdldERhdGFMb2FkZXIocmVxKTtcblxuICByZXR1cm4gZmluZFZlcnNpb25zKHtcbiAgICB3aGVyZSxcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIGRlcHRoLFxuICAgIGdsb2JhbENvbmZpZyxcbiAgICBzb3J0LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgcmVxLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaW5kVmVyc2lvbnMiLCJnZXREYXRhTG9hZGVyIiwiaTE4bkluaXQiLCJBUElFcnJvciIsInNldFJlcXVlc3RDb250ZXh0IiwiZmluZFZlcnNpb25zTG9jYWwiLCJwYXlsb2FkIiwib3B0aW9ucyIsImdsb2JhbFNsdWciLCJkZXB0aCIsInBhZ2UiLCJsaW1pdCIsIndoZXJlIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJ1c2VyIiwib3ZlcnJpZGVBY2Nlc3MiLCJzaG93SGlkZGVuRmllbGRzIiwic29ydCIsImdsb2JhbENvbmZpZyIsImkxOG4iLCJyZXEiLCJzbHVnIiwiY29uZmlnIiwibG9jYWxpemF0aW9uIiwiZGVmYXVsdExvY2FsZSIsImdsb2JhbHMiLCJmaW5kIiwiU3RyaW5nIiwicGF5bG9hZEFQSSIsInQiLCJwYXlsb2FkRGF0YUxvYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLE9BQU9BLGtCQUFrQixrQkFBa0I7QUFDM0MsU0FBU0MsYUFBYSxRQUFRLGtDQUFrQztBQUNoRSxTQUFTQyxRQUFRLFFBQVEsNkJBQTZCO0FBQ3RELFNBQVNDLFFBQVEsUUFBUSxrQkFBa0I7QUFFM0MsU0FBU0MsaUJBQWlCLFFBQVEscUNBQXFDO0FBZ0J2RSx3QkFBOEJDLGtCQUM1QkMsT0FBZ0IsRUFDaEJDLE9BQW1CO1dBRlNGOztTQUFBQTtJQUFBQSxxQkFBZixvQkFBQSxTQUNiQyxPQUFnQixFQUNoQkMsT0FBbUI7WUFRc0JELDhCQUxqQ0UsWUFDTkMsT0FDQUMsTUFDQUMsT0FDQUMsd0JBQ0FDLGlDQUNBQyxnQkFDQUMsK0JBQ0FDLGdCQUNBQyxrQkFDQUMsTUFHSUMsY0FDQUMsTUFNQUM7O1lBcEJFYixhQVdKRCxRQVhGZSxNQUNBYixRQVVFRixRQVZGRSxPQUNBQyxPQVNFSCxRQVRGRyxNQUNBQyxRQVFFSixRQVJGSSxPQUNBQyxRQU9FTCxRQVBGSyx5QkFPRUwsUUFORk0sUUFBQUEsc0NBQVNQLFFBQVFpQixNQUFNLENBQUNDLFlBQVksSUFBR2xCLCtCQUFBQSxRQUFRaUIsTUFBTSxDQUFDQyxZQUFZLGNBQTNCbEIsbURBQUFBLDZCQUE2Qm1CLGFBQWEsR0FBRyxrREFNbEZsQixRQUxGTyxnQkFBQUEsc0RBQWlCLGdDQUNqQkMsT0FJRVIsUUFKRlEsZ0NBSUVSLFFBSEZTLGdCQUFBQSxzREFBaUIsZ0NBQ2pCQyxtQkFFRVYsUUFGRlUsa0JBQ0FDLE9BQ0VYLFFBREZXO1lBR0lDLGVBQWViLFFBQVFvQixPQUFPLENBQUNILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLFNBQUNKO3VCQUFXQSxPQUFPRCxJQUFJLEtBQUtkOztZQUN2RVksT0FBT2xCLFNBQVNJLFFBQVFpQixNQUFNLENBQUNILElBQUk7WUFFekMsSUFBSSxDQUFDRCxjQUFjO2dCQUNqQixNQUFNLElBQUloQixTQUFTLEFBQUMsd0JBQTBDLE9BQW5CeUIsT0FBT3BCLGFBQVk7WUFDaEU7WUFFTWEsTUFBTTtnQkFDVk4sTUFBQUE7Z0JBQ0FjLFlBQVk7Z0JBQ1poQixRQUFBQTtnQkFDQUMsZ0JBQUFBO2dCQUNBUixTQUFBQTtnQkFDQWMsTUFBQUE7Z0JBQ0FVLEdBQUdWLEtBQUtVLENBQUM7WUFDWDtZQUNBMUIsa0JBQWtCaUI7WUFFbEIsSUFBSSxDQUFDQSxJQUFJVSxpQkFBaUIsRUFBRVYsSUFBSVUsaUJBQWlCLEdBQUc5QixjQUFjb0I7WUFFbEU7O2dCQUFPckIsYUFBYTtvQkFDbEJZLE9BQUFBO29CQUNBRixNQUFBQTtvQkFDQUMsT0FBQUE7b0JBQ0FGLE9BQUFBO29CQUNBVSxjQUFBQTtvQkFDQUQsTUFBQUE7b0JBQ0FGLGdCQUFBQTtvQkFDQUMsa0JBQUFBO29CQUNBSSxLQUFBQTtnQkFDRjs7O0lBQ0Y7V0FqRDhCaEIifQ==